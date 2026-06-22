#!/bin/bash
# Regenerate the 4 CV PDFs into ../static/cv and verify them.
#   pretty (photo)  -> *.pdf            (humans / hh / portfolio; site links here)
#   ATS (no photo)  -> *-ATS.pdf        (upload to job portals / parsers)
# Prereqs (brew): exiftool, qpdf, poppler. Chrome at the path below.
set -euo pipefail
HERE="$(cd "$(dirname "$0")" && pwd)"
OUT="$HERE/../static/cv"
CHROME="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
KEYS="Frontend, React, TypeScript, JavaScript, Next.js, Svelte, Leaflet, WebGL, Canvas, MobX, dashboards, data visualization"

mkdir -p "$OUT"
node "$HERE/build.mjs"

render () { # $1 html-base  $2 outfile  $3 title  $4 subject
  "$CHROME" --headless=new --disable-gpu --no-pdf-header-footer --export-tagged-pdf \
    --generate-pdf-document-outline --run-all-compositor-stages-before-draw \
    --virtual-time-budget=10000 --font-render-hinting=none \
    --print-to-pdf="$OUT/$2" "file://$HERE/$1.html" 2>/dev/null
  exiftool -overwrite_original -charset UTF8 -Title="$3" -Author="Aleksei Nizhgorodov" \
    -Subject="$4" -Keywords="$KEYS" -Creator="Aleksei Nizhgorodov" "$OUT/$2" >/dev/null
}

render cv-en-pretty "Aleksei-Nizhgorodov-Frontend-Engineer.pdf"         "Aleksei Nizhgorodov - Frontend Engineer - Resume"        "Resume"
render cv-en-ats    "Aleksei-Nizhgorodov-Frontend-Engineer-ATS.pdf"     "Aleksei Nizhgorodov - Frontend Engineer - Resume (ATS)"  "Resume"
render cv-ru-pretty "Aleksei-Nizhgorodov-Frontend-Developer-RU.pdf"     "Алексей Нижгородов - Frontend Developer - Резюме"        "Резюме"
render cv-ru-ats    "Aleksei-Nizhgorodov-Frontend-Developer-RU-ATS.pdf" "Алексей Нижгородов - Frontend Developer - Резюме (ATS)"  "Резюме"

echo "Rendered 4 PDFs into $OUT"
LC_ALL=en_US.UTF-8 bash "$HERE/verify.sh" "$OUT/Aleksei-Nizhgorodov-Frontend-Engineer.pdf"         en | tail -1
LC_ALL=en_US.UTF-8 bash "$HERE/verify.sh" "$OUT/Aleksei-Nizhgorodov-Frontend-Engineer-ATS.pdf"     en | tail -1
LC_ALL=en_US.UTF-8 bash "$HERE/verify.sh" "$OUT/Aleksei-Nizhgorodov-Frontend-Developer-RU.pdf"     ru | tail -1
LC_ALL=en_US.UTF-8 bash "$HERE/verify.sh" "$OUT/Aleksei-Nizhgorodov-Frontend-Developer-RU-ATS.pdf" ru | tail -1
