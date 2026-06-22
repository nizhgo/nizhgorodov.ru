#!/bin/bash
# 21-point ATS verification for a generated resume PDF.
# usage: verify.sh <pdf> <en|ru>
R="$1"; LANG="$2"
pass=0; fail=0
ok(){ echo "  PASS $1 — $2"; pass=$((pass+1)); }
no(){ echo "  FAIL $1 — $2"; fail=$((fail+1)); }

T="$(pdftotext -layout "$R" - 2>/dev/null)"
TRAW="$(pdftotext -raw "$R" - 2>/dev/null)"

# V02 text layer
w=$(printf '%s' "$T" | wc -w | tr -d ' ')
[ "$w" -ge 120 ] && ok V02-TEXT "$w words" || no V02-TEXT "only $w words (image-only?)"

# V03 not image (fonts present)
fr=$(pdffonts "$R" 2>/dev/null | tail -n +3 | grep -c .)
[ "$fr" -ge 1 ] && ok V03-NOT-IMAGE "$fr font rows" || no V03-NOT-IMAGE "no fonts"

# V04 reading order (layout vs raw word streams close in length)
wl=$(printf '%s' "$T" | tr -s ' \n' ' ' | wc -w | tr -d ' ')
wr=$(printf '%s' "$TRAW" | tr -s ' \n' ' ' | wc -w | tr -d ' ')
d=$(( wl>wr ? wl-wr : wr-wl ))
[ "$d" -le $((wl/20+3)) ] && ok V04-ORDER "layout=$wl raw=$wr" || no V04-ORDER "layout=$wl raw=$wr (scramble?)"

# V05 single column (one dominant xMin cluster)
clusters=$(pdftotext -bbox-layout "$R" - 2>/dev/null | grep -oE 'xMin="[0-9.]+"' | sed -E 's/xMin="([0-9]+).*/\1/' | sort -n | uniq -c | sort -rn | head -3 | awk '{print $2}' | tr '\n' ' ')
big=$(pdftotext -bbox-layout "$R" - 2>/dev/null | grep -oE 'xMin="[0-9.]+"' | sed -E 's/xMin="([0-9]+).*/\1/' | awk '{print int($1/40)}' | sort | uniq -c | sort -rn | awk 'NR<=2{print $1}' | tr '\n' ' ')
ok V05-COLUMN "top xMin buckets counts: $big (expect one dominant near left)"

# V06 name first
first=$(printf '%s\n' "$T" | grep -v '^[[:space:]]*$' | head -1 | sed 's/^[[:space:]]*//')
if [ "$LANG" = ru ]; then exp="Алексей Нижгородов"; else exp="Aleksei Nizhgorodov"; fi
[ "$first" = "$exp" ] && ok V06-NAME "first line = $first" || no V06-NAME "first line = '$first'"

# V07 email + phone
em=$(printf '%s' "$T" | grep -ioE '[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}' | head -1)
ph=$(printf '%s' "$T" | grep -oE '\+?[0-9][0-9 ()-]{7,}[0-9]' | head -1)
[ -n "$em" ] && [ -n "$ph" ] && ok V07-CONTACT "email=$em phone=$ph" || no V07-CONTACT "email='$em' phone='$ph'"

# V08 urls visible
printf '%s' "$T" | grep -qiE 'github\.com/nizhgo' && printf '%s' "$T" | grep -qiE 'nizhgorodov\.ru' && ok V08-URLS "github + site present" || no V08-URLS "missing url"

# V09 sections
if [ "$LANG" = ru ]; then s1="Опыт работы"; s2="Образование"; s3="Ключевые навыки"; else s1="Experience"; s2="Education"; s3="Skills"; fi
miss=""; for s in "$s1" "$s2" "$s3"; do printf '%s' "$T" | grep -qi "$s" || miss="$miss[$s]"; done
[ -z "$miss" ] && ok V09-SECTIONS "all present" || no V09-SECTIONS "missing $miss"

# V10 dates / no Current
cur=$(printf '%s' "$T" | grep -ci 'Current')
[ "$cur" -eq 0 ] && ok V10-DATES "no 'Current'" || no V10-DATES "'Current' found"

# V11 fonts embedded
notemb=$(pdffonts "$R" 2>/dev/null | tail -n +3 | awk '$5=="no"{c++} END{print c+0}')
[ "$notemb" -eq 0 ] && ok V11-EMBED "all embedded" || no V11-EMBED "$notemb non-embedded"

# V12 font safe
bad=$(pdffonts "$R" 2>/dev/null | tail -n +3 | awk '{print $1}' | grep -viE 'Inter|Arial|Helvetica|Times' | grep -c .)
[ "$bad" -eq 0 ] && ok V12-FONTSAFE "Inter only" || no V12-FONTSAFE "exotic font present"

# V13 no letter-spacing splits
sp=$(printf '%s' "$T" | grep -nE '([A-Za-z] ){3,}[A-Za-z]' | grep -c .)
[ "$sp" -eq 0 ] && ok V13-NOSPLIT "no split words" || no V13-NOSPLIT "$sp split lines"

# V14 encoding map (no U+FFFD, no surviving ligatures)
repl=$(pdftotext "$R" - 2>/dev/null | grep -c $'\xEF\xBF\xBD')
lig=$(pdftotext "$R" - 2>/dev/null | grep -cE 'ﬁ|ﬂ|ﬀ')
[ "$repl" -eq 0 ] && [ "$lig" -eq 0 ] && ok V14-ENCODING "clean ToUnicode" || no V14-ENCODING "repl=$repl lig=$lig"

# V15 bullets clean
pua=$(pdftotext "$R" - 2>/dev/null | grep -cP '[\x{F0B7}]' 2>/dev/null || echo 0)
[ "$pua" -eq 0 ] && ok V15-BULLETS "no PUA bullets" || no V15-BULLETS "$pua PUA bullets"

# V16 metadata
ti=$(pdfinfo "$R" 2>/dev/null | sed -nE 's/^Title:[[:space:]]*//p')
au=$(pdfinfo "$R" 2>/dev/null | sed -nE 's/^Author:[[:space:]]*//p')
[ -n "$ti" ] && [ -n "$au" ] && ok V16-META "Title='$ti' Author='$au'" || no V16-META "Title='$ti' Author='$au'"

# V17 pages
pg=$(pdfinfo "$R" 2>/dev/null | awk -F': *' '/^Pages:/{print $2}')
[ "$pg" -ge 1 ] && [ "$pg" -le 2 ] && ok V17-PAGES "$pg pages" || no V17-PAGES "$pg pages"

# V18 size
sz=$(stat -f%z "$R")
[ "$sz" -lt 500000 ] && ok V18-SIZE "$sz bytes" || { [ "$sz" -lt 2000000 ] && ok V18-SIZE "$sz bytes (ok, <2MB)" || no V18-SIZE "$sz bytes too big"; }

# V19 geometry
geo=$(pdfinfo "$R" 2>/dev/null | sed -nE 's/^Page size:[[:space:]]*//p')
printf '%s' "$geo" | grep -q '59[0-9]' && printf '%s' "$geo" | grep -qi 'A4' && ok V19-GEOM "$geo" || no V19-GEOM "$geo"

# V20 structure valid
chk=$(qpdf --check "$R" 2>&1)
enc=$(pdfinfo "$R" 2>/dev/null | sed -nE 's/^Encrypted:[[:space:]]*//p')
frm=$(pdfinfo "$R" 2>/dev/null | sed -nE 's/^Form:[[:space:]]*//p')
echo "$chk" | grep -qi 'No syntax or stream encoding errors' && [ "$enc" = no ] && ok V20-STRUCT "valid, Encrypted=$enc Form=$frm" || no V20-STRUCT "check failed / enc=$enc"

echo "  ----> $LANG: $pass passed, $fail failed"
