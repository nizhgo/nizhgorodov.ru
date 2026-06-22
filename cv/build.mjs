// ATS-safe bilingual CV generator → emits cv-en.html and cv-ru.html
// Single column, self-hosted Inter (Latin+Cyrillic), ligatures off, plain-text links.
import { writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const HERE = dirname(fileURLToPath(import.meta.url));

const esc = (s) =>
  String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

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
    contacts: [
      'Moscow, Russia — open to relocation & remote',
      'alexey@nizhgorodov.ru',
      '+7 996 096-43-22',
      'github.com/nizhgo',
      'nizhgorodov.ru',
      't.me/nizhgo'
    ],
    labels: {
      summary: 'Summary',
      skills: 'Skills',
      experience: 'Experience',
      education: 'Education',
      languages: 'Languages'
    },
    summary:
      'Frontend engineer with 4 years in commercial development, focused on the hard parts: Leaflet maps, data-heavy dashboards, visualizations and WebGL. Writes custom libraries when off-the-shelf ones fall short — a PDF report engine that renders WebGL maps from React components, a cartography layer that holds thousands of live markers. Has led a small frontend team and also been the sole frontend on a product. Russian native, English B2. Open to relocation, remote and freelance.',
    skills: [
      ['Core', 'TypeScript, JavaScript (ES6+), HTML, CSS'],
      ['Frameworks', 'React, Svelte, Next.js, Node.js, Express'],
      ['Maps & data-viz', 'Leaflet, WebGL, Canvas, ECharts, Recharts, QGIS'],
      ['State & data', 'MobX, Redux, Zod, REST, WebSocket, SSE, PostgreSQL, Drizzle ORM'],
      ['Native & infra', 'Capacitor, PWA, Service Worker, Docker, Nginx, CI/CD (GitLab)'],
      ['Testing', 'Vitest, React Testing Library, Playwright']
    ],
    experience: [
      {
        company: 'Perfema',
        role: 'Frontend Developer',
        period: 'Apr 2023 — Present',
        place: 'Moscow (remote)',
        summary:
          'Build products from scratch: architecture, code, reviews, mentoring. Maps, dashboards, analytics, native apps, a custom PDF report generator. Sometimes leading the frontend team, sometimes the only frontend.',
        bullets: [
          'Built a B2B occupational-health analytics product in ~2 weeks: a pnpm monorepo (Vite + React + MobX, an Express BFF, shared Zod contracts), ~20 clinical dashboards, and an idempotent ingest with backoff and a circuit breaker that survives upstream outages. Read-layer RBAC blocks narrow roles from the medical fields on the backend, so sensitive data never reaches the client.',
          'Wrote a cartography layer on Leaflet / Canvas / WebGL that holds thousands of live markers and long GPS tracks without lag — clustering, thinning, geozones, timeline scrubbing — reused as a shared base across several products.',
          'Designed the frontend of a video-analytics platform from scratch (TypeScript / React / MobX), set the patterns, ran code reviews and mentored the team; real-time Recharts dashboards; virtualization and memory-leak fixes for large datasets.',
          "Authored a custom PDF report library that renders WebGL maps and charts straight from React components, with automatic page numbering and running headers and footers — where jsPDF and react-pdf couldn't.",
          'Shipped a gamified kids’ task tracker as two clients (a big-screen dashboard and a parent PWA) sharing real-time state, and led the team packaging it into native apps on Capacitor (iOS / Android / Android TV).',
          'Across products: i18n (RU / EN plus RTL Arabic), CryptoPro document e-signing in the browser, Service Worker offline and auto-update, an SSR Svelte + Strapi site, CI/CD on GitLab, and tests in Vitest, React Testing Library and Playwright.'
        ]
      },
      {
        company: 'Edya',
        role: 'Frontend Engineer (part-time)',
        period: '2025 — Present',
        place: 'Remote',
        summary: 'A commercial VPN web cabinet and an AI super-app in Telegram.',
        bullets: [
          'Designed and built a production VPN web cabinet SPA (React 19, TanStack Router, MobX), white-labeled into 8 brands from one codebase; cut the initial bundle from 1706 to 656 KB (gzip 467 to 175) with route code-splitting and vendor chunking.',
          'Built a multi-mirror failover (a service worker resolves live mirrors and redirects to the first reachable one, with a static fallback) so the cabinet stays reachable when the main domain is blocked.',
          'On EdyaAI: owned the real-time WebSocket generation engine (request registry, per-request state machine, auto-reconnect), the payments layer (plans, subscriptions, promo codes) with live payments, and legacy-chat integration over a Telegram-to-iframe bridge.'
        ]
      },
      {
        company: 'Yandex',
        role: 'Assessor-Developer',
        period: 'Jan — Dec 2023',
        place: 'Moscow',
        summary: '',
        bullets: [
          'Labeled programming and CS material, wrote and edited reference answers for YandexGPT on IT topics, and did fact-checking.'
        ]
      }
    ],
    education: [
      {
        school: 'HSE University',
        program: 'MSc, Digital Urbanism & City Analytics',
        period: '2024 — 2026',
        place: 'Moscow',
        note: 'Data analytics, Python, geodata, QGIS. Thesis: hse.ru/edu/vkr/1167123484'
      },
      {
        school: 'NUST MISIS',
        program: 'BSc, Information Systems & Technologies',
        period: '2020 — 2024',
        place: 'Moscow',
        note: 'Algorithms, data structures, software engineering.'
      }
    ],
    languages: 'Russian — Native · English — B2'
  },

  ru: {
    lang: 'ru',
    name: 'Алексей Нижгородов',
    title: 'Frontend-разработчик',
    docTitle: 'Алексей Нижгородов - Frontend Developer - Резюме',
    contacts: [
      'Москва, Россия — готов к переезду и удалёнке',
      'alexey@nizhgorodov.ru',
      '+7 996 096-43-22',
      'github.com/nizhgo',
      'nizhgorodov.ru',
      't.me/nizhgo'
    ],
    labels: {
      summary: 'О себе',
      skills: 'Ключевые навыки',
      experience: 'Опыт работы',
      education: 'Образование',
      languages: 'Знание языков'
    },
    summary:
      'Frontend-инженер, четвёртый год в коммерческой разработке. Больше всего работаю со сложным: карты на Leaflet, дашборды с большим объёмом данных, визуализации, WebGL. Когда готовых библиотек не хватает, пишу свои — например, библиотеку PDF-отчётов, которая рендерит WebGL-карты прямо из React-компонентов. Где-то вёл команду фронтендеров, где-то был единственным фронтом на продукте. Русский родной, английский B2. Открыт к релокейту, удалёнке и фрилансу.',
    skills: [
      ['Основное', 'TypeScript, JavaScript (ES6+), HTML, CSS'],
      ['Фреймворки', 'React, Svelte, Next.js, Node.js, Express'],
      ['Карты и визуализация', 'Leaflet, WebGL, Canvas, ECharts, Recharts, QGIS'],
      ['Состояние и данные', 'MobX, Redux, Zod, REST, WebSocket, SSE, PostgreSQL, Drizzle ORM'],
      ['Нативное и инфра', 'Capacitor, PWA, Service Worker, Docker, Nginx, CI/CD (GitLab)'],
      ['Тестирование', 'Vitest, React Testing Library, Playwright']
    ],
    experience: [
      {
        company: 'Perfema',
        role: 'Frontend-разработчик',
        period: 'апр 2023 — наст. время',
        place: 'Москва (удалённо)',
        summary:
          'Делаю продукты с нуля: архитектура, код, ревью, менторинг. Карты, дашборды, аналитика, нативные приложения, своя PDF-генерация отчётов. Где-то вёл команду фронтендеров, где-то был единственным фронтом.',
        bullets: [
          'За ~2 недели поднял B2B-аналитику предсменных медосмотров: pnpm-монорепо (Vite + React + MobX, Express-BFF, общие Zod-контракты), ~20 клинических дашбордов и идемпотентный ingest с backoff и circuit breaker, переживающий сбои внешнего API. RBAC на уровне чтения не подпускает урезанные роли к медданным на самом бэкенде, поэтому на клиент они не попадают.',
          'Написал слой картографии на Leaflet / Canvas / WebGL, который держит тысячи живых маркеров и длинные GPS-треки без просадок — кластеризация, прореживание, геозоны, прокрутка истории по таймлайну. Вынес в общую основу для нескольких продуктов.',
          'Спроектировал фронтенд платформы видеоаналитики с нуля (TypeScript / React / MobX), задал паттерны, вёл ревью и менторил команду; реалтайм-дашборды на Recharts; виртуализация и устранение утечек памяти на больших объёмах.',
          'Написал свою библиотеку PDF-отчётов: рендерит WebGL-карты и графики прямо из React-компонентов, с автонумерацией страниц и сквозными хедерами и футерами — там, где jsPDF и react-pdf не справлялись.',
          'Сделал геймифицированный трекер задач для детей как два клиента (дашборд на большом экране и PWA для родителей) с общим реалтайм-стейтом и вёл команду, упаковывавшую его в нативные приложения на Capacitor (iOS / Android / Android TV).',
          'По продуктам: i18n (RU / EN и RTL-арабский), подпись документов через КриптоПро в браузере, Service Worker для офлайна и автообновления, SSR-сайт на Svelte + Strapi, CI/CD в GitLab и тесты на Vitest, React Testing Library и Playwright.'
        ]
      },
      {
        company: 'Edya',
        role: 'Frontend-разработчик (парттайм)',
        period: '2025 — наст. время',
        place: 'Удалённо',
        summary: 'Веб-кабинет коммерческого VPN и AI-суперапп в Telegram.',
        bullets: [
          'Спроектировал и собрал продакшен-кабинет VPN (React 19, TanStack Router, MobX), white-label на 8 брендов из одного кода; ужал стартовый бандл с 1706 до 656 КБ (gzip 467 до 175) код-сплитом роутов и vendor-чанкингом.',
          'Сделал failover на несколько зеркал (service worker находит живые зеркала и редиректит на первое доступное, плюс статичная fallback-страница) — кабинет открывается, даже когда основной домен заблокирован.',
          'В EdyaAI: отвечал за реалтайм-движок генерации по WebSocket (реестр запросов, конечный автомат на запрос, авто-реконнект), слой платежей (тарифы, подписки, промокоды) с реальными оплатами и интеграцию legacy-чата через мост между Telegram и iframe.'
        ]
      },
      {
        company: 'Яндекс',
        role: 'Асессор-разработчик',
        period: 'январь — декабрь 2023',
        place: 'Москва',
        summary: '',
        bullets: [
          'Размечал материалы по программированию и computer science, писал и редактировал эталонные ответы YandexGPT по IT, занимался фактчекингом.'
        ]
      }
    ],
    education: [
      {
        school: 'НИУ ВШЭ',
        program: 'Магистратура, Цифровая урбанистика и аналитика города',
        period: '2024 — 2026',
        place: 'Москва',
        note: 'Аналитика данных, Python, геоданные, QGIS. ВКР: hse.ru/edu/vkr/1167123484'
      },
      {
        school: 'НИТУ МИСиС',
        program: 'Бакалавриат, Информационные системы и технологии',
        period: '2020 — 2024',
        place: 'Москва',
        note: 'Алгоритмы, структуры данных, инженерия ПО.'
      }
    ],
    languages: 'Русский — родной · Английский — B2'
  }
};

function render(d) {
  const section = (title, inner) => `<section><h2>${esc(title)}</h2>${inner}</section>`;

  const skills = d.skills
    .map(([k, v]) => `<p class="skill"><span class="skill-k">${esc(k)}:</span> ${esc(v)}</p>`)
    .join('');

  const experience = d.experience
    .map((j) => {
      const head = `<div class="job-head"><span class="job-company">${esc(j.company)}</span> &mdash; <span class="job-role">${esc(j.role)}</span></div>
      <div class="job-meta">${esc(j.period)}${j.place ? ' · ' + esc(j.place) : ''}</div>`;
      const sum = j.summary ? `<p class="job-sum">${esc(j.summary)}</p>` : '';
      const bullets = `<ul>${j.bullets.map((b) => `<li>${esc(b)}</li>`).join('')}</ul>`;
      return `<div class="job">${head}${sum}${bullets}</div>`;
    })
    .join('');

  const education = d.education
    .map(
      (e) =>
        `<div class="edu"><div class="job-head"><span class="job-company">${esc(e.school)}</span> &mdash; <span class="job-role">${esc(e.program)}</span></div>
        <div class="job-meta">${esc(e.period)}${e.place ? ' · ' + esc(e.place) : ''}</div>
        ${e.note ? `<p class="edu-note">${esc(e.note)}</p>` : ''}</div>`
    )
    .join('');

  const contacts = d.contacts.map((c) => esc(c)).join(' &nbsp;·&nbsp; ');

  return `<!doctype html>
<html lang="${d.lang}">
<head>
<meta charset="utf-8">
<title>${esc(d.docTitle)}</title>
<style>
  ${FONT_FACE}
  @page { size: A4; margin: 14mm 15mm; }
  * { box-sizing: border-box; }
  html, body { margin: 0; padding: 0; }
  body {
    font-family: 'Inter', Arial, sans-serif;
    font-size: 10.2pt;
    line-height: 1.4;
    color: #1a1a1a;
    letter-spacing: normal;
    word-spacing: normal;
    text-align: left;
    font-feature-settings: 'liga' 0, 'clig' 0;
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
  }
  h1 { font-size: 19pt; font-weight: 700; margin: 0 0 1pt; }
  .title { font-size: 11.5pt; font-weight: 700; color: #0c6b34; margin: 0 0 5pt; }
  .contacts { font-size: 9pt; color: #333; margin: 0 0 4pt; }
  hr { border: 0; border-top: 1px solid #cfcfcf; margin: 7pt 0 8pt; }
  section { margin: 0 0 9pt; }
  h2 {
    font-size: 10.5pt; font-weight: 700; text-transform: uppercase;
    color: #0c6b34; margin: 0 0 4pt; padding-bottom: 2pt; border-bottom: 1px solid #d8d8d8;
  }
  p { margin: 0 0 4pt; }
  .summary { margin: 0; }
  .skill { margin: 0 0 2pt; }
  .skill-k { font-weight: 700; }
  .job { margin: 0 0 7pt; page-break-inside: avoid; }
  .edu { margin: 0 0 6pt; page-break-inside: avoid; }
  .job-head { font-size: 10.6pt; }
  .job-company { font-weight: 700; }
  .job-role { font-weight: 700; }
  .job-meta { font-size: 9pt; color: #555; margin: 0 0 2pt; }
  .job-sum { color: #2a2a2a; margin: 0 0 3pt; }
  ul { margin: 2pt 0 0; padding-left: 14pt; }
  li { margin: 0 0 2.5pt; padding-left: 1pt; }
  .edu-note { font-size: 9.3pt; color: #444; margin: 1pt 0 0; }
</style>
</head>
<body>
  <header>
    <h1>${esc(d.name)}</h1>
    <p class="title">${esc(d.title)}</p>
    <p class="contacts">${contacts}</p>
  </header>
  <hr>
  ${section(d.labels.summary, `<p class="summary">${esc(d.summary)}</p>`)}
  ${section(d.labels.skills, skills)}
  ${section(d.labels.experience, experience)}
  ${section(d.labels.education, education)}
  ${section(d.labels.languages, `<p>${esc(d.languages)}</p>`)}
</body>
</html>`;
}

writeFileSync(join(HERE, 'cv-en.html'), render(data.en));
writeFileSync(join(HERE, 'cv-ru.html'), render(data.ru));
console.log('wrote cv-en.html and cv-ru.html');
