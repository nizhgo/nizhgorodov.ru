# CV / résumé generator

Generates the ATS-optimized PDF résumés that the site links from the hero button:

- `static/cv/Aleksei-Nizhgorodov-Frontend-Engineer.pdf` (EN)
- `static/cv/Aleksei-Nizhgorodov-Frontend-Developer-RU.pdf` (RU)

Content lives in `build.mjs` (one object per language). Edit there, then re-run `render.sh`.

## Regenerate

```bash
# one-time prerequisites
brew install exiftool qpdf poppler

# rebuild both PDFs into ../static/cv and verify them
bash cv/render.sh
```

Then commit the changed PDFs and deploy (`npm run build && firebase deploy --only hosting`).

## How it's built

HTML (`build.mjs`) → headless Chrome `--print-to-pdf` → `exiftool` metadata → 21-point check (`verify.sh`).

The whole design serves ATS parseability (researched against ~40 sources — Jobscan, Greenhouse/Lever/Workday parser docs, hh.ru/Habr, RenderCV):

- **Single column**, strict top-to-bottom flow — no tables / sidebars / multi-column (the #1 parse-failure cause).
- **Real text layer**, not an image. Verified with `pdftotext`.
- **Self-hosted Inter** (`fonts/`, Latin + Cyrillic) so EN and RU render identically and fonts embed deterministically — never a remote Google Fonts CDN (won't reliably load before print).
- **Ligatures off** (`font-feature-settings:'liga' 0,'clig' 0`), left-aligned, no letter-spacing — so text extracts without split/merged words.
- **Plain-text links** (`github.com/nizhgo`, `nizhgorodov.ru`) — most ATS drop the hyperlink object and keep only visible text.
- **Standard bullets** (`•`), standard section headings (Experience / Education / Skills, RU equivalents).
- **Metadata** (Title / Author / Subject / Keywords) set via exiftool (Chrome leaves them blank).
- **Tagged PDF + outline** (`--export-tagged-pdf --generate-pdf-document-outline`) as a bonus for tag-aware parsers.
- ASCII filenames `First-Last-Role.pdf` (Latin even for the RU file so portals don't mangle Cyrillic).
- No photo / no DOB / no salary (EEOC + clean text layer + small file).

## Chrome flags

```
--headless=new --disable-gpu --no-pdf-header-footer --export-tagged-pdf
--generate-pdf-document-outline --run-all-compositor-stages-before-draw
--virtual-time-budget=10000 --font-render-hinting=none --print-to-pdf=OUT.pdf
```

If a render ever comes out blank/truncated (intermittent Chromium headless=new regression), retry or fall back to `--headless=old`. `verify.sh` always checks page count, so a bad render won't slip through.

## Verify manually

```bash
LC_ALL=en_US.UTF-8 bash cv/verify.sh static/cv/Aleksei-Nizhgorodov-Frontend-Engineer.pdf en
LC_ALL=en_US.UTF-8 bash cv/verify.sh static/cv/Aleksei-Nizhgorodov-Frontend-Developer-RU.pdf ru
# the real ATS dry-run — read exactly what a parser sees:
pdftotext -layout static/cv/Aleksei-Nizhgorodov-Frontend-Engineer.pdf -
```
