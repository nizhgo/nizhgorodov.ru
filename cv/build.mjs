// ATS-safe bilingual CV generator → emits 4 HTML files:
//   cv-{en,ru}-{pretty,ats}.html
// pretty = photo + accent, for humans / hh / portfolio.
// ats    = no photo, plain, maximally parseable for job portals.
// Both are single column, self-hosted Inter (Latin+Cyrillic), ligatures off, plain-text links.
import { writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const HERE = dirname(fileURLToPath(import.meta.url));

const esc = (s) =>
  String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

// Make URLs/email/phone clickable while keeping the visible text as the plain
// string (ATS reads the text; humans can click the annotation).
const aTag = (href, text) => `<a href="${href}">${esc(text)}</a>`;
const linkContact = (c) => {
  if (/^[^@\s]+@[^@\s]+\.[^\s]+$/.test(c)) return aTag('mailto:' + c, c);
  if (/^\+/.test(c)) return aTag('tel:' + c.replace(/[^\d+]/g, ''), c);
  if (/\.[a-z]{2,}(\/|$)/i.test(c)) return aTag('https://' + c, c);
  return esc(c);
};
const linkifyLinks = (s) => s.split(' · ').map((u) => aTag('https://' + u, u)).join(' · ');
const linkifyNote = (s) =>
  s.replace(/((?:hse\.ru\/edu\/vkr|misis\.ru\/news)\/\d+)/, (m) => aTag('https://' + m, m));

const FONT_FACE = `
@font-face { font-family:'Inter'; font-style:normal; font-weight:400; font-display:block;
  src:url('./fonts/inter-latin-400-normal.woff2') format('woff2');
  unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD; }
@font-face { font-family:'Inter'; font-style:normal; font-weight:400; font-display:block;
  src:url('./fonts/inter-cyrillic-400-normal.woff2') format('woff2');
  unicode-range:U+0301,U+0400-045F,U+0490-0491,U+04B0-04B1,U+2116; }
@font-face { font-family:'Inter'; font-style:normal; font-weight:700; font-display:block;
  src:url('./fonts/inter-latin-700-normal.woff2') format('woff2');
  unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD; }
@font-face { font-family:'Inter'; font-style:normal; font-weight:700; font-display:block;
  src:url('./fonts/inter-cyrillic-700-normal.woff2') format('woff2');
  unicode-range:U+0301,U+0400-045F,U+0490-0491,U+04B0-04B1,U+2116; }`;

const data = {
  en: {
    lang: 'en',
    name: 'Aleksei Nizhgorodov',
    title: 'Frontend Engineer',
    docTitle: 'Aleksei Nizhgorodov - Frontend Engineer - Resume',
    metaLine: 'Moscow, Russia · open to relocation & remote',
    contacts: ['alexey@nizhgorodov.ru', '+7 996 096-43-22', 'github.com/nizhgo', 'nizhgorodov.ru', 't.me/nizhgo'],
    labels: { summary: 'Summary', skills: 'Skills', experience: 'Experience', education: 'Education', languages: 'Languages', links: 'Links', funfact: 'Fun fact' },
    summary:
      'Four years in commercial development. I go for the hard parts: WebSocket real-time, data-heavy dashboards, maps, WebGL. When no library does the job I write my own; the latest prints WebGL maps into PDF reports straight from React components. I’ve led small frontend teams, and on some products I was the only frontend engineer. English B2. Open to new opportunities.',
    skills: [
      ['Core', 'TypeScript, JavaScript (ES6+), HTML, CSS'],
      ['Frameworks', 'React, Svelte, Next.js, Node.js, Express'],
      ['Maps & data-viz', 'Leaflet, WebGL, Canvas, ECharts, Recharts, QGIS'],
      ['State & data', 'MobX, Redux, Zod, REST, WebSocket, SSE, PostgreSQL, Drizzle ORM'],
      ['Build & infra', 'Vite, Webpack, Capacitor, PWA, Service Worker, Docker, Nginx, CI/CD (GitLab)'],
      ['Testing', 'Vitest, React Testing Library, Playwright']
    ],
    experience: [
      {
        company: 'Perfema', role: 'Frontend Developer', period: 'Apr 2023 — Present', place: 'Moscow',
        summary: 'Full-time job. I build products here from scratch.',
        bullets: [
          { lead: 'Team lead', text: 'ran frontend teams of 2–4, did code review, mentored and onboarded newcomers. Held technical meetings and demos with clients.' },
          { lead: 'Occupational-health analytics (B2B)', text: 'built the MVP in about two weeks, then grew it to ~20 clinical dashboards. A pnpm monorepo: React with MobX, an Express BFF, shared Zod contracts. The data pipeline rides out upstream outages without losing records, and medical data never reaches the browser.' },
          { lead: 'Mapping & real-time monitoring', text: 'wrote a rendering layer on top of Leaflet with Canvas and WebGL. It holds thousands of live markers and long GPS tracks without dropping frames; clustering, geofences and a history timeline are built in. Several company products run on it now.' },
          { lead: 'Video-analytics platform', text: 'designed the frontend from scratch (TypeScript, React, MobX) and set the patterns for the team. Live dashboards on Recharts, virtualized tables for large datasets.' },
          { lead: 'PDF reports', text: 'wrote our own library after jsPDF and react-pdf choked on WebGL maps. It prints maps and charts from plain React components and handles page numbers and running headers by itself.' },
          { lead: 'Kids’ task tracker', text: 'two clients, a big-screen dashboard and a PWA for parents, sharing state in real time. The team packaged it with Capacitor into native apps for iOS, Android and Android TV.' },
          { lead: 'Odds and ends', text: 'i18n with RTL Arabic, CryptoPro document signing in the browser, offline and auto-update via a service worker, an SSR site on Svelte and Strapi, GitLab CI/CD. Tests in Vitest, React Testing Library and Playwright.' }
        ]
      },
      {
        company: 'Edya', role: 'Frontend Engineer (part-time)', period: '2025 — Present', place: 'Remote',
        links: 'edya.org',
        bullets: [
          { lead: 'VPN customer portal', text: 'designed and shipped the production SPA on React 19, TanStack Router and MobX, now at about 20k MAU. White-label: eight brands ship from one codebase, adding a brand is a config change. Cut the initial bundle from 1706 to 656 KB, gzip from 467 to 175.' },
          { lead: 'Censorship circumvention', text: 'on every navigation a service worker revalidates the mirror list and moves the user off a dead domain to a live one, keeping the path. Visits from bot links and bookmarks land on a separate static page. The build is obfuscated.' },
          { lead: 'Also in the portal', text: 'sign-in via Google, email or Telegram, subscription transfer from the legacy Telegram bot, referrals, guest key activation with per-platform setup guides up to Android TV.' },
          { lead: 'Metrics', text: 'product events, exceptions and API failures go to PostHog, sliced by brand, platform and release.' },
          { lead: 'EdyaAI, a Telegram super-app', text: 'a Mini App with ChatGPT, Grok and DeepSeek chat plus Midjourney image generation in one place. I owned the generation engine, payments and the legacy-chat integration. Payments are live: plans, subscriptions, promo codes. The legacy Next.js part is embedded in an iframe with a full event bridge, haptics included, so users never notice the seam.' },
          { lead: 'Generation engine', text: 'WebSocket-based: live progress, automatic reconnects, a dropped connection doesn’t lose a generation. Upscales and variations, image references, merging two pictures, a visible countdown when the rate limit hits.' }
        ]
      },
      {
        company: 'Yandex', role: 'Assessor-Developer', period: 'Jan — Dec 2023', place: 'Moscow',
        bullets: [
          { lead: '', text: 'Labeled programming and CS material for YandexGPT: wrote and edited reference answers on IT topics, checked facts.' }
        ]
      }
    ],
    education: [
      { school: 'HSE University', program: 'MSc, Digital Urbanism & City Analytics', period: '2024 — 2026', place: 'Moscow', note: 'Data analytics, Python, geodata, QGIS. Thesis: hse.ru/edu/vkr/1167123484' },
      { school: 'NUST MISIS', program: 'BSc, Information Systems & Technologies', period: '2020 — 2024', place: 'Moscow', note: 'Algorithms, data structures, software engineering. Hackathon prizes: 2nd place at the LCT 2023 hackathon (misis.ru/news/8829), MTS True Tech Hack, Tsifra Fest, X-MAS Hack.' }
    ],
    languages: 'Russian — Native · English — B2',
    funfact: 'Claude or Codex? Claude. Personal records: 40M tokens in a month and 6M in a single request.'
  },

  ru: {
    lang: 'ru',
    name: 'Алексей Нижгородов',
    title: 'Frontend-разработчик',
    docTitle: 'Алексей Нижгородов - Frontend Developer - Резюме',
    metaLine: 'Москва, Россия · 24 года',
    contacts: ['alexey@nizhgorodov.ru', '+7 996 096-43-22', 'github.com/nizhgo', 'nizhgorodov.ru', 't.me/nizhgo'],
    labels: { summary: 'О себе', skills: 'Ключевые навыки', experience: 'Опыт работы', education: 'Образование', languages: 'Знание языков', links: 'Ссылки', funfact: 'Фан-факт' },
    summary:
      'Четвёртый год в коммерческой разработке. Берусь за сложное: реалтайм по WebSocket, дашборды с большим объёмом данных, карты, WebGL. Если готовой библиотеки нет, пишу свою. Последняя печатает WebGL-карты в PDF-отчёты прямо из React-компонентов. Вёл фронтенд-команды, на части продуктов был единственным фронтом. Английский B2. Открыт к предложениям.',
    skills: [
      ['Основное', 'TypeScript, JavaScript (ES6+), HTML, CSS'],
      ['Фреймворки', 'React, Svelte, Next.js, Node.js, Express'],
      ['Карты и визуализация', 'Leaflet, WebGL, Canvas, ECharts, Recharts, QGIS'],
      ['Состояние и данные', 'MobX, Redux, Zod, REST, WebSocket, SSE, PostgreSQL, Drizzle ORM'],
      ['Сборка и инфра', 'Vite, Webpack, Capacitor, PWA, Service Worker, Docker, Nginx, CI/CD (GitLab)'],
      ['Тестирование', 'Vitest, React Testing Library, Playwright']
    ],
    experience: [
      {
        company: 'Perfema', role: 'Frontend-разработчик', period: 'апр 2023 — наст. время', place: 'Москва',
        summary: 'Основное место работы. Продукты делаю с нуля.',
        bullets: [
          { lead: 'Лид фронтенда', text: 'вёл команды из 2–4 человек, ревьюил фронтенд, менторил и вводил новичков. Проводил технические встречи с заказчиками, показывал демо.' },
          { lead: 'B2B-аналитика медосмотров', text: 'поднял MVP за две недели, потом довёл до ~20 клинических дашбордов. Внутри pnpm-монорепо: React с MobX, BFF на Express, общие Zod-контракты. Загрузка из нестабильного внешнего API не теряет записи, а медданные вообще не попадают в браузер.' },
          { lead: 'Картография и мониторинг', text: 'написал слой поверх Leaflet на Canvas и WebGL. Тысячи живых маркеров и длинные GPS-треки без просадок, кластеризация, геозоны, историю можно мотать по таймлайну. Сейчас на нём работает несколько продуктов компании.' },
          { lead: 'Платформа видеоаналитики', text: 'спроектировал фронтенд с нуля (TypeScript, React, MobX) и задал паттерны для команды. Дашборды обновляются вживую, графики на Recharts, длинные таблицы виртуализированы.' },
          { lead: 'Библиотека PDF-отчётов', text: 'написал свою, когда jsPDF и react-pdf не потянули WebGL-карты. Печатает карты и графики из обычных React-компонентов, сама нумерует страницы и ставит колонтитулы.' },
          { lead: 'Трекер задач для детей', text: 'два клиента, дашборд для большого экрана и PWA для родителей, состояние у них общее и живое. Завернули его в нативные приложения на Capacitor под iOS, Android и Android TV.' },
          { lead: 'Из разного', text: 'i18n с RTL-арабским, подпись документов через КриптоПро прямо в браузере, офлайн и автообновление на Service Worker, SSR-сайт на Svelte и Strapi, CI/CD в GitLab. Тесты на Vitest, React Testing Library и Playwright.' }
        ]
      },
      {
        company: 'Edya', role: 'Frontend-разработчик (парттайм)', period: '2025 — наст. время', place: 'Удалённо',
        links: 'edya.org',
        bullets: [
          { lead: 'Кабинет веб-сервиса', text: 'спроектировал и написал SPA на React 19, TanStack Router и MobX, в проде, около 20 тысяч MAU. White-label: восемь брендов собираются из одной кодовой базы, новый добавляется конфигом. Стартовый бандл ужал с 1706 до 656 КБ, по gzip с 467 до 175.' },
          { lead: 'Отказоустойчивость', text: 'service worker на каждом переходе сверяется со списком зеркал и уводит с недоступного домена на живой, не теряя путь. Переходы из бота и закладок подхватывает отдельная статичная страница. Сборка обфусцирована.' },
          { lead: 'Ещё в кабинете', text: 'вход через Google, почту или Telegram, перенос подписок из старого Telegram-бота, рефералка, гостевая активация по ключу с инструкциями под каждую платформу вплоть до Android TV.' },
          { lead: 'Метрики', text: 'продуктовые события, исключения и падения API собираются в PostHog, срезы по бренду, платформе и релизу.' },
          { lead: 'EdyaAI, суперапп в Telegram', text: 'Mini App, где в одном окне чат с ChatGPT, Grok и DeepSeek и генерация картинок в Midjourney. Отвечал за движок генераций, платежи и интеграцию легаси-чата. Платежи в проде: тарифы, подписки, промокоды. Легаси-часть на Next.js встроена через iframe с полным прокидыванием событий Telegram вплоть до вибраций, шов для пользователя незаметен.' },
          { lead: 'Движок генераций', text: 'поверх WebSocket: живой прогресс, автопереподключение, обрыв связи не теряет генерации. Апскейлы и вариации, картинки-референсы, склейка двух изображений, при лимите виден отсчёт до сброса.' }
        ]
      },
      {
        company: 'Яндекс', role: 'Асессор-разработчик', period: 'январь — декабрь 2023', place: 'Москва',
        bullets: [
          { lead: '', text: 'Размечал материалы по программированию и computer science для YandexGPT: писал и правил эталонные ответы, проверял факты.' }
        ]
      }
    ],
    education: [
      { school: 'НИУ ВШЭ', program: 'Магистратура, Цифровая урбанистика и аналитика города', period: '2024 — 2026', place: 'Москва', note: 'Аналитика данных, Python, геоданные, QGIS. ВКР: hse.ru/edu/vkr/1167123484' },
      { school: 'НИТУ МИСиС', program: 'Бакалавриат, Информационные системы и технологии', period: '2020 — 2024', place: 'Москва', note: 'Алгоритмы, структуры данных, инженерия ПО. Призовые места на хакатонах: 2-е место на ЛЦТ 2023 (misis.ru/news/8829), МТС True Tech Hack, Цифра Fest, X-MAS Hack.' }
    ],
    languages: 'Русский — родной · Английский — B2',
    funfact: 'Claude или Codex? Claude. Личные рекорды: 40 млн токенов за месяц и 6 млн за один запрос.'
  }
};

function render(d, pretty) {
  const accent = pretty ? '#0c6b34' : '#161616';
  const hr = pretty ? '#c7d4c2' : '#cfcfcf';

  const section = (title, inner) => `<section><h2>${esc(title)}</h2>${inner}</section>`;

  const skills = d.skills
    .map(([k, v]) => `<p class="skill"><span class="k">${esc(k)}:</span> ${esc(v)}</p>`)
    .join('');

  const bullet = (b) =>
    b.lead ? `<li>${esc(b.lead)}: ${esc(b.text)}</li>` : `<li>${esc(b.text)}</li>`;

  const experience = d.experience
    .map((j) => {
      const head = `<div class="job-head"><span class="job-company">${esc(j.company)}</span> &mdash; <span class="job-role">${esc(j.role)}</span></div>
      <div class="job-meta">${esc(j.period)}${j.place ? ' · ' + esc(j.place) : ''}</div>`;
      const sum = j.summary ? `<p class="job-sum">${esc(j.summary)}</p>` : '';
      const bullets = `<ul>${j.bullets.map(bullet).join('')}</ul>`;
      const links = j.links ? `<p class="job-links">${esc(d.labels.links)}: ${linkifyLinks(j.links)}</p>` : '';
      return `<div class="job">${head}${sum}${bullets}${links}</div>`;
    })
    .join('');

  const education = d.education
    .map(
      (e) =>
        `<div class="edu"><div class="job-head"><span class="job-company">${esc(e.school)}</span> &mdash; <span class="job-role">${esc(e.program)}</span></div>
        <div class="job-meta">${esc(e.period)}${e.place ? ' · ' + esc(e.place) : ''}</div>
        ${e.note ? `<p class="edu-note">${linkifyNote(esc(e.note))}</p>` : ''}</div>`
    )
    .join('');

  const contacts = d.contacts.map(linkContact).join(' &nbsp;·&nbsp; ');
  const photo = pretty ? `<img class="photo" src="./photo.jpg" alt="${esc(d.name)}">` : '';

  return `<!doctype html>
<html lang="${d.lang}">
<head>
<meta charset="utf-8">
<title>${esc(d.docTitle)}</title>
<style>
  ${FONT_FACE}
  @page { size: A4; margin: 13mm 15mm; }
  * { box-sizing: border-box; }
  html, body { margin: 0; padding: 0; }
  body {
    font-family: 'Inter', Arial, sans-serif;
    font-size: 10.2pt; line-height: 1.42; color: #1a1a1a;
    letter-spacing: normal; word-spacing: normal; text-align: left;
    font-feature-settings: 'liga' 0, 'clig' 0;
    -webkit-print-color-adjust: exact; print-color-adjust: exact;
  }
  .header { display: flex; justify-content: space-between; align-items: flex-start; gap: 16px; }
  .head-text { flex: 1; }
  .photo { width: 84px; height: 104px; object-fit: cover; ${pretty ? 'border-radius: 6px;' : ''} flex-shrink: 0; }
  h1 { font-size: 20pt; font-weight: 700; margin: 0 0 1pt; }
  .title { font-size: 11.5pt; font-weight: 700; color: ${accent}; margin: 0 0 5pt; }
  .meta { font-size: 9.2pt; color: #333; margin: 0 0 2pt; }
  .contacts { font-size: 9.2pt; color: #333; margin: 0; }
  hr { border: 0; border-top: 1px solid ${hr}; margin: 8pt 0 9pt; }
  section { margin: 0 0 10pt; }
  h2 {
    font-size: 10.5pt; font-weight: 700; text-transform: uppercase; letter-spacing: 0.2pt;
    color: ${accent}; margin: 0 0 5pt; padding-bottom: 2.5pt; border-bottom: 1px solid ${hr};
  }
  p { margin: 0 0 4pt; }
  .summary { margin: 0; }
  .skill { margin: 0 0 2.5pt; }
  .k { font-weight: 700; }
  .job { margin: 0 0 8.5pt; page-break-inside: avoid; }
  .edu { margin: 0 0 7pt; page-break-inside: avoid; }
  .job-head { font-size: 10.6pt; }
  .job-company { font-weight: 700; }
  .job-role { font-weight: 700; }
  .job-meta { font-size: 9pt; color: #555; margin: 0 0 3pt; }
  .job-sum { color: #2a2a2a; margin: 0 0 4pt; }
  ul { margin: 3pt 0 0; padding-left: 15pt; }
  li { margin: 0 0 4pt; padding-left: 2pt; }
  .job-links { font-size: 9pt; color: ${accent}; margin: 4pt 0 0; }
  .edu-note { font-size: 9.3pt; color: #444; margin: 1pt 0 0; }
  a { color: inherit; text-decoration: none; }
</style>
</head>
<body>
  <div class="header">
    <div class="head-text">
      <h1>${esc(d.name)}</h1>
      <p class="title">${esc(d.title)}</p>
      <p class="meta">${esc(d.metaLine)}</p>
      <p class="contacts">${contacts}</p>
    </div>
    ${photo}
  </div>
  <hr>
  ${section(d.labels.summary, `<p class="summary">${esc(d.summary)}</p>`)}
  ${section(d.labels.skills, skills)}
  ${section(d.labels.experience, experience)}
  ${section(d.labels.education, education)}
  ${section(d.labels.languages, `<p>${esc(d.languages)}</p>`)}
  ${section(d.labels.funfact, `<p>${esc(d.funfact)}</p>`)}
</body>
</html>`;
}

for (const lang of ['en', 'ru']) {
  writeFileSync(join(HERE, `cv-${lang}-pretty.html`), render(data[lang], true));
  writeFileSync(join(HERE, `cv-${lang}-ats.html`), render(data[lang], false));
}
console.log('wrote cv-{en,ru}-{pretty,ats}.html');
