#!/bin/bash
# Render РСЯ banners: HTML -> Chrome screenshot @2x -> downsample to exact px.
set -euo pipefail
HERE="$(cd "$(dirname "$0")" && pwd)"
OUT="$HERE/banners"
CHROME="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
mkdir -p "$OUT"
node "$HERE/banners.mjs"
sizes="1080x1080 1080x607 1080x1350 970x250 336x280 300x250 300x600 240x400 728x90 320x100"
for s in $sizes; do
  w="${s%x*}"; h="${s#*x}"
  "$CHROME" --headless=new --disable-gpu --hide-scrollbars --force-device-scale-factor=2 \
    --window-size=$w,$h --virtual-time-budget=4000 \
    --screenshot="$OUT/banner-$s.png" "file://$HERE/html/banner-$s.html" 2>/dev/null
  sips -z "$h" "$w" "$OUT/banner-$s.png" >/dev/null 2>&1
  echo "banner-$s.png -> $(sips -g pixelWidth -g pixelHeight "$OUT/banner-$s.png" 2>/dev/null | grep -oE '[0-9]+' | tr '\n' 'x' | sed 's/x$//') $(stat -f%z "$OUT/banner-$s.png")b"
done
