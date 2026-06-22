#!/bin/bash
# Render РСЯ banners: HTML -> Chrome screenshot @2x -> downsample to exact px.
set -euo pipefail
HERE="$(cd "$(dirname "$0")" && pwd)"
OUT="$HERE/banners"
CHROME="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
mkdir -p "$OUT"
node "$HERE/banners.mjs"
sizes="1080x1080 1080x607 1080x1350 970x250 336x280 300x250 300x600 240x400 728x90 320x100"
for p in "" "office-"; do
  for s in $sizes; do
    w="${s%x*}"; h="${s#*x}"
    "$CHROME" --headless=new --disable-gpu --hide-scrollbars --force-device-scale-factor=2 \
      --window-size=$w,$h --virtual-time-budget=4000 \
      --screenshot="$OUT/banner-$p$s.png" "file://$HERE/html/banner-$p$s.html" 2>/dev/null
    sips -z "$h" "$w" "$OUT/banner-$p$s.png" >/dev/null 2>&1
    echo "banner-$p$s.png -> $(stat -f%z "$OUT/banner-$p$s.png")b"
  done
done
