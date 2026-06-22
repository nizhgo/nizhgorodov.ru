// Generates Yandex Direct / РСЯ banner HTML in standard sizes, brand-styled.
// render-banners.sh screenshots each at 2x and downsamples to the exact px size.
import { writeFileSync, mkdirSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const HERE = dirname(fileURLToPath(import.meta.url));
const FONTS = join(HERE, '..', 'static', 'fonts');
mkdirSync(join(HERE, 'html'), { recursive: true });

const LAT = 'U+0000-00FF,U+0131,U+0152-0153,U+2000-206F,U+2074,U+20AC,U+2122,U+2212';
const CYR = 'U+0301,U+0400-045F,U+0490-0491,U+04B0-04B1,U+2116';
const face = (fam, w, file, range) =>
  `@font-face{font-family:'${fam}';font-weight:${w};font-style:normal;src:url('file://${FONTS}/${file}') format('woff2');${range ? 'unicode-range:' + range + ';' : ''}}`;
const FONT_CSS = [
  face('Unbounded', 800, 'unbounded-latin-800-normal.woff2', LAT),
  face('Unbounded', 800, 'unbounded-cyrillic-800-normal.woff2', CYR),
  face('Onest', 500, 'onest-latin-500-normal.woff2', LAT),
  face('Onest', 500, 'onest-cyrillic-500-normal.woff2', CYR),
  face('Onest', 700, 'onest-latin-700-normal.woff2', LAT),
  face('Onest', 700, 'onest-cyrillic-700-normal.woff2', CYR)
].join('\n');

// РСЯ standard sizes (good coverage: wide, feed, squares, verticals, strips/mobile)
const sizes = [
  { w: 970, h: 250 },
  { w: 1080, h: 607 },
  { w: 336, h: 280 },
  { w: 300, h: 250 },
  { w: 300, h: 600 },
  { w: 240, h: 400 },
  { w: 728, h: 90 },
  { w: 320, h: 100 }
];

const BG = '#e7ecdf';
const INK = '#141414';
const ACCENT = '#0c8a3e';
const MUTE = '#3e3e38';

function render({ w, h }) {
  const layout = h <= 120 ? 'strip' : w / h >= 1.7 ? 'wide' : 'stack';
  let css = '';
  let inner = '';

  if (layout === 'strip') {
    const hl = Math.round(h * 0.3);
    const badge = Math.round(h * 0.26);
    const url = Math.round(h * 0.22);
    const pad = Math.round(h * 0.2);
    css = `
      .wrap{display:flex;align-items:center;gap:${Math.round(h * 0.16)}px;padding:0 ${pad}px;height:100%;}
      .badge{background:${ACCENT};color:${BG};font-family:'Unbounded';font-weight:800;font-size:${badge}px;padding:${Math.round(h * 0.08)}px ${Math.round(h * 0.12)}px;}
      .hl{font-family:'Onest';font-weight:700;font-size:${hl}px;color:${INK};white-space:nowrap;}
      .spacer{flex:1;}
      .url{font-family:'Onest';font-weight:700;font-size:${url}px;color:${ACCENT};white-space:nowrap;}`;
    inner = `<div class="wrap"><span class="badge">@nizhgo</span><span class="hl">Frontend-инженер</span><span class="spacer"></span><span class="url">nizhgorodov.ru&nbsp;→</span></div>`;
  } else if (layout === 'wide') {
    const badge = Math.round(w * 0.032);
    const hl = Math.round(w * 0.055);
    const sub = Math.round(w * 0.026);
    const cta = Math.round(w * 0.028);
    const url = Math.round(w * 0.024);
    const pad = Math.round(w * 0.045);
    css = `
      .wrap{display:flex;align-items:center;justify-content:space-between;gap:${pad}px;padding:${pad}px ${Math.round(pad * 1.2)}px;height:100%;}
      .left{display:flex;flex-direction:column;gap:${Math.round(hl * 0.22)}px;}
      .badge{align-self:flex-start;background:${ACCENT};color:${BG};font-family:'Unbounded';font-weight:800;font-size:${badge}px;padding:${Math.round(badge * 0.45)}px ${Math.round(badge * 0.7)}px;margin-bottom:${Math.round(hl * 0.18)}px;}
      .hl{font-family:'Unbounded';font-weight:800;font-size:${hl}px;line-height:0.98;color:${INK};text-transform:uppercase;letter-spacing:-0.01em;}
      .sub{font-family:'Onest';font-weight:500;font-size:${sub}px;color:${MUTE};}
      .right{display:flex;flex-direction:column;align-items:flex-end;gap:${Math.round(cta * 0.6)}px;flex-shrink:0;}
      .cta{background:${ACCENT};color:${BG};font-family:'Onest';font-weight:700;font-size:${cta}px;padding:${Math.round(cta * 0.6)}px ${Math.round(cta * 1.1)}px;border-radius:${Math.round(cta * 0.5)}px;white-space:nowrap;}
      .url{font-family:'Onest';font-weight:700;font-size:${url}px;color:${ACCENT};}`;
    inner = `<div class="wrap"><div class="left"><span class="badge">@nizhgo</span><div class="hl">Frontend-<br>инженер</div><div class="sub">Карты · дашборды · визуализации</div></div><div class="right"><span class="cta">Портфолио →</span><span class="url">nizhgorodov.ru</span></div></div>`;
  } else {
    const badge = Math.round(w * 0.085);
    const hl = Math.round(w * 0.135);
    const sub = Math.round(w * 0.05);
    const cta = Math.round(w * 0.058);
    const url = Math.round(w * 0.05);
    const pad = Math.round(w * 0.08);
    css = `
      .wrap{display:flex;flex-direction:column;justify-content:space-between;padding:${pad}px;height:100%;box-sizing:border-box;}
      .badge{align-self:flex-start;background:${ACCENT};color:${BG};font-family:'Unbounded';font-weight:800;font-size:${badge}px;padding:${Math.round(badge * 0.4)}px ${Math.round(badge * 0.65)}px;}
      .mid{display:flex;flex-direction:column;gap:${Math.round(sub * 0.5)}px;}
      .hl{font-family:'Unbounded';font-weight:800;font-size:${hl}px;line-height:0.98;color:${INK};text-transform:uppercase;letter-spacing:-0.01em;}
      .sub{font-family:'Onest';font-weight:500;font-size:${sub}px;color:${MUTE};line-height:1.25;}
      .bot{display:flex;flex-direction:column;gap:${Math.round(url * 0.5)}px;}
      .cta{align-self:flex-start;background:${ACCENT};color:${BG};font-family:'Onest';font-weight:700;font-size:${cta}px;padding:${Math.round(cta * 0.55)}px ${Math.round(cta * 1)}px;border-radius:${Math.round(cta * 0.45)}px;}
      .url{font-family:'Onest';font-weight:700;font-size:${url}px;color:${ACCENT};}`;
    inner = `<div class="wrap"><span class="badge">@nizhgo</span><div class="mid"><div class="hl">Frontend-инженер</div><div class="sub">Карты, дашборды,<br>визуализации</div></div><div class="bot"><span class="cta">Портфолио →</span><span class="url">nizhgorodov.ru</span></div></div>`;
  }

  return `<!doctype html><html lang="ru"><head><meta charset="utf-8"><style>
  ${FONT_CSS}
  *{margin:0;box-sizing:border-box;}
  html,body{width:${w}px;height:${h}px;overflow:hidden;}
  body{background:${BG};color:${INK};}
  ${css}
  </style></head><body>${inner}</body></html>`;
}

for (const s of sizes) {
  writeFileSync(join(HERE, 'html', `banner-${s.w}x${s.h}.html`), render(s));
}
console.log('wrote ' + sizes.length + ' banner HTML files');
console.log(sizes.map((s) => `${s.w}x${s.h}`).join(' '));
