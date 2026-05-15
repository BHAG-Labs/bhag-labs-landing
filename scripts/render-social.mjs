// Generates SVG + PNG exports for BHAG Labs social and landscape formats.
// All assets use the v13 mark geometry: stem (49,217) -> (119,26), stroke 14 round caps,
// top disc (151,84) r=48 same colour as stem, bottom disc (144,164) R=60 terracotta,
// forest/ochre lens.
//
// Run from anywhere: node bhag-labs-landing/scripts/render-social.mjs

import { Resvg } from '@resvg/resvg-js';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUT = path.resolve(__dirname, '..', 'public', 'brand', 'social');
fs.mkdirSync(OUT, { recursive: true });

const CREAM = '#f1ebe1';
const CHARCOAL = '#1a1a1a';
const TERRACOTTA = '#c1502e';
const FOREST = '#2a4942';
const OCHRE = '#c89b27';

// Mark SVG fragment (sized to a 256-unit canvas). Pass through transform for placement.
function mark({ id, theme = 'light' }) {
  const isDark = theme === 'dark';
  const stem = isDark ? CREAM : CHARCOAL;
  const top = isDark ? CREAM : CHARCOAL;
  const bottom = TERRACOTTA;
  const lens = isDark ? OCHRE : FOREST;
  return `
    <defs>
      <clipPath id="${id}-clip"><circle cx="151" cy="84" r="48"/></clipPath>
    </defs>
    <line x1="49" y1="217" x2="119" y2="26" stroke="${stem}" stroke-width="14" stroke-linecap="round"/>
    <circle cx="144" cy="164" r="60" fill="${bottom}"/>
    <circle cx="151" cy="84" r="48" fill="${top}"/>
    <circle cx="144" cy="164" r="60" fill="${lens}" clip-path="url(#${id}-clip)"/>
  `;
}

// Wordmark "bhag labs" in Playfair, with optional tagline.
function wordmark({ x, y, size = 76, color = CHARCOAL, tagline = true, taglineColor }) {
  const tc = taglineColor || color;
  const t = tagline
    ? `<text x="${x + 4}" y="${y + 34}" font-family="'Cormorant Garamond', Garamond, serif" font-weight="400" font-style="italic" font-size="${size * 0.2}" letter-spacing="2" fill="${tc}" opacity="0.55">Every Big Idea Deserves a Launchpad</text>`
    : '';
  return `
    <text x="${x}" y="${y}" font-family="'Playfair Display', Georgia, serif" font-weight="700" font-size="${size}" letter-spacing="-2" fill="${color}">bhag labs</text>
    ${t}
  `;
}

// Tiny EST line, all-caps "BHAG LABS · EST. 2025"
function established({ x, y, color = CHARCOAL, opacity = 0.45, anchor = 'start', size = 11 }) {
  return `<text x="${x}" y="${y}" text-anchor="${anchor}" font-family="Inter, ui-sans-serif, system-ui, sans-serif" font-weight="500" font-size="${size}" letter-spacing="3" fill="${color}" opacity="${opacity}">BHAG LABS  &#183;  EST. 2025</text>`;
}

// ---------- formats ----------
const formats = [];

// 1) avatar / app-icon — 1080x1080 (light + dark)
function avatarSVG(theme) {
  const bg = theme === 'dark' ? CHARCOAL : CREAM;
  // place mark centered, 256 -> 700 scale, centered on 1080x1080
  const scale = 700 / 256;
  const tx = (1080 - 700) / 2;
  const ty = (1080 - 700) / 2;
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1080 1080" role="img" aria-label="BHAG Labs">
  <rect width="1080" height="1080" fill="${bg}"/>
  <g transform="translate(${tx},${ty}) scale(${scale})">${mark({ id: 'av', theme })}</g>
</svg>`;
}
formats.push({ name: 'avatar-square', svg: avatarSVG('light') });
formats.push({ name: 'avatar-square-dark', svg: avatarSVG('dark') });
formats.push({ name: 'app-icon', svg: avatarSVG('light') });

// 2) Open Graph 1200x630 (1.91:1)
function ogSVG() {
  const scale = 460 / 256;
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 630" role="img" aria-label="BHAG Labs">
  <rect width="1200" height="630" fill="${CREAM}"/>
  <g transform="translate(85,85) scale(${scale})">${mark({ id: 'og', theme: 'light' })}</g>
  <g transform="translate(620, 310)">
    ${wordmark({ x: 0, y: 0, size: 96, tagline: false })}
    <text x="4" y="46" font-family="'Cormorant Garamond', Garamond, serif" font-weight="400" font-style="italic" font-size="26" letter-spacing="2" fill="${CHARCOAL}" opacity="0.6">Every Big Idea Deserves a Launchpad</text>
  </g>
  ${established({ x: 624, y: 86, anchor: 'start', size: 14, opacity: 0.45 })}
  <text x="624" y="540" font-family="Inter, ui-sans-serif, system-ui, sans-serif" font-weight="400" font-size="18" letter-spacing="0.5" fill="${CHARCOAL}" opacity="0.55">Neev  &#183;  Hissa  &#183;  Pitchwala  &#183;  Yantra  &#183;  Bazaar  &#183;  Runway</text>
  <text x="1115" y="600" text-anchor="end" font-family="Inter, ui-sans-serif, system-ui, sans-serif" font-weight="500" font-size="16" letter-spacing="2" fill="${TERRACOTTA}">BHAGLABS.COM</text>
</svg>`;
}
formats.push({ name: 'og-image', svg: ogSVG() });

// 3) Twitter/X header 1500x500 (3:1)
function twitterSVG(theme) {
  const isDark = theme === 'dark';
  const bg = isDark ? CHARCOAL : CREAM;
  const fg = isDark ? CREAM : CHARCOAL;
  const tagFg = isDark ? OCHRE : CHARCOAL;
  const scale = 360 / 256;
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1500 500" role="img" aria-label="BHAG Labs">
  <rect width="1500" height="500" fill="${bg}"/>
  <g transform="translate(110,70) scale(${scale})">${mark({ id: 'tw' + (isDark ? 'd' : ''), theme })}</g>
  <g transform="translate(560, 240)">
    <text font-family="'Playfair Display', Georgia, serif" font-weight="700" font-size="86" letter-spacing="-2" fill="${fg}">bhag labs</text>
    <text x="4" y="40" font-family="'Cormorant Garamond', Garamond, serif" font-weight="400" font-style="italic" font-size="24" letter-spacing="2" fill="${tagFg}" opacity="0.7">Every Big Idea Deserves a Launchpad</text>
  </g>
  ${established({ x: 564, y: 154, color: fg, opacity: 0.4, size: 13 })}
  <text x="1410" y="450" text-anchor="end" font-family="Inter, ui-sans-serif, system-ui, sans-serif" font-weight="500" font-size="14" letter-spacing="2" fill="${TERRACOTTA}">BHAGLABS.COM</text>
</svg>`;
}
formats.push({ name: 'twitter-header', svg: twitterSVG('light') });
formats.push({ name: 'twitter-header-dark', svg: twitterSVG('dark') });

// 4) LinkedIn banner 1584x396 (4:1)
function linkedinSVG(theme) {
  const isDark = theme === 'dark';
  const bg = isDark ? CHARCOAL : CREAM;
  const fg = isDark ? CREAM : CHARCOAL;
  const tagFg = isDark ? OCHRE : CHARCOAL;
  const scale = 280 / 256;
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1584 396" role="img" aria-label="BHAG Labs">
  <rect width="1584" height="396" fill="${bg}"/>
  <g transform="translate(120,58) scale(${scale})">${mark({ id: 'li' + (isDark ? 'd' : ''), theme })}</g>
  <g transform="translate(520, 200)">
    <text font-family="'Playfair Display', Georgia, serif" font-weight="700" font-size="76" letter-spacing="-2" fill="${fg}">bhag labs</text>
    <text x="4" y="34" font-family="'Cormorant Garamond', Garamond, serif" font-weight="400" font-style="italic" font-size="20" letter-spacing="2" fill="${tagFg}" opacity="0.65">Every Big Idea Deserves a Launchpad</text>
  </g>
  ${established({ x: 524, y: 126, color: fg, opacity: 0.4, size: 12 })}
  <text x="524" y="280" font-family="Inter, ui-sans-serif, system-ui, sans-serif" font-weight="400" font-size="14" letter-spacing="0.5" fill="${fg}" opacity="0.5">Software infrastructure for universities, accelerators, and innovation programs.</text>
</svg>`;
}
formats.push({ name: 'linkedin-banner', svg: linkedinSVG('light') });
formats.push({ name: 'linkedin-banner-dark', svg: linkedinSVG('dark') });

// 5) Instagram square post 1080x1080
function instaSquareSVG() {
  const scale = 540 / 256;
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1080 1080" role="img" aria-label="BHAG Labs">
  <rect width="1080" height="1080" fill="${CREAM}"/>
  <g transform="translate(${(1080 - 540) / 2}, 150) scale(${scale})">${mark({ id: 'is', theme: 'light' })}</g>
  <g transform="translate(540, 820)" text-anchor="middle">
    <text font-family="'Playfair Display', Georgia, serif" font-weight="700" font-size="108" letter-spacing="-2" fill="${CHARCOAL}">bhag labs</text>
    <text x="0" y="60" font-family="'Cormorant Garamond', Garamond, serif" font-weight="400" font-style="italic" font-size="32" letter-spacing="2" fill="${CHARCOAL}" opacity="0.6">Every Big Idea Deserves a Launchpad</text>
  </g>
  ${established({ x: 540, y: 1020, anchor: 'middle', color: TERRACOTTA, opacity: 0.7, size: 16 })}
</svg>`;
}
formats.push({ name: 'instagram-square', svg: instaSquareSVG() });

// 6) Instagram story 1080x1920 (9:16) light + dark
function instaStorySVG(theme) {
  const isDark = theme === 'dark';
  const bg = isDark ? CHARCOAL : CREAM;
  const fg = isDark ? CREAM : CHARCOAL;
  const tagFg = isDark ? OCHRE : CHARCOAL;
  const scale = 620 / 256;
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1080 1920" role="img" aria-label="BHAG Labs">
  <rect width="1080" height="1920" fill="${bg}"/>
  <g transform="translate(${(1080 - 620) / 2}, 460) scale(${scale})">${mark({ id: 'st' + (isDark ? 'd' : ''), theme })}</g>
  <g transform="translate(540, 1380)" text-anchor="middle">
    <text font-family="'Playfair Display', Georgia, serif" font-weight="700" font-size="130" letter-spacing="-2" fill="${fg}">bhag labs</text>
    <text x="0" y="70" font-family="'Cormorant Garamond', Garamond, serif" font-weight="400" font-style="italic" font-size="38" letter-spacing="2" fill="${tagFg}" opacity="0.7">Every Big Idea Deserves a Launchpad</text>
  </g>
  ${established({ x: 540, y: 320, anchor: 'middle', color: fg, opacity: 0.4, size: 18 })}
  <text x="540" y="1800" text-anchor="middle" font-family="Inter, ui-sans-serif, system-ui, sans-serif" font-weight="500" font-size="20" letter-spacing="3" fill="${TERRACOTTA}">BHAGLABS.COM</text>
</svg>`;
}
formats.push({ name: 'instagram-story', svg: instaStorySVG('light') });
formats.push({ name: 'instagram-story-dark', svg: instaStorySVG('dark') });

// 7) YouTube banner 2560x1440 (16:9). Safe area for all devices ~1235x338 centered.
function youtubeSVG() {
  const scale = 480 / 256;
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2560 1440" role="img" aria-label="BHAG Labs">
  <rect width="2560" height="1440" fill="${CHARCOAL}"/>
  <!-- safe area centered: 1235x338 around (662..1897, 551..889) -->
  <g transform="translate(${1280 - 240 - 320}, ${720 - 240}) scale(${scale})">${mark({ id: 'yt', theme: 'dark' })}</g>
  <g transform="translate(${1280 + 100}, 740)">
    <text font-family="'Playfair Display', Georgia, serif" font-weight="700" font-size="128" letter-spacing="-2" fill="${CREAM}">bhag labs</text>
    <text x="4" y="56" font-family="'Cormorant Garamond', Garamond, serif" font-weight="400" font-style="italic" font-size="34" letter-spacing="2" fill="${OCHRE}" opacity="0.8">Every Big Idea Deserves a Launchpad</text>
  </g>
  ${established({ x: 1384, y: 590, color: CREAM, opacity: 0.4, size: 18 })}
  <text x="2480" y="1380" text-anchor="end" font-family="Inter, ui-sans-serif, system-ui, sans-serif" font-weight="500" font-size="22" letter-spacing="3" fill="${TERRACOTTA}">BHAGLABS.COM</text>
</svg>`;
}
formats.push({ name: 'youtube-banner', svg: youtubeSVG() });

// 8) Facebook cover 1640x624 (~2.63:1)
function facebookSVG() {
  const scale = 380 / 256;
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1640 624" role="img" aria-label="BHAG Labs">
  <rect width="1640" height="624" fill="${CREAM}"/>
  <g transform="translate(160, 122) scale(${scale})">${mark({ id: 'fb', theme: 'light' })}</g>
  <g transform="translate(700, 312)">
    <text font-family="'Playfair Display', Georgia, serif" font-weight="700" font-size="98" letter-spacing="-2" fill="${CHARCOAL}">bhag labs</text>
    <text x="4" y="44" font-family="'Cormorant Garamond', Garamond, serif" font-weight="400" font-style="italic" font-size="24" letter-spacing="2" fill="${CHARCOAL}" opacity="0.6">Every Big Idea Deserves a Launchpad</text>
  </g>
  ${established({ x: 704, y: 230, color: CHARCOAL, opacity: 0.45, size: 14 })}
  <text x="1540" y="580" text-anchor="end" font-family="Inter, ui-sans-serif, system-ui, sans-serif" font-weight="500" font-size="16" letter-spacing="2" fill="${TERRACOTTA}">BHAGLABS.COM</text>
</svg>`;
}
formats.push({ name: 'facebook-cover', svg: facebookSVG() });

// 9) Email signature 600x150 (4:1) tight horizontal
function emailSigSVG() {
  const scale = 110 / 256;
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 150" role="img" aria-label="BHAG Labs">
  <rect width="600" height="150" fill="${CREAM}"/>
  <g transform="translate(22, 20) scale(${scale})">${mark({ id: 'em', theme: 'light' })}</g>
  <g transform="translate(160, 78)">
    <text font-family="'Playfair Display', Georgia, serif" font-weight="700" font-size="40" letter-spacing="-1" fill="${CHARCOAL}">bhag labs</text>
    <text x="2" y="22" font-family="'Cormorant Garamond', Garamond, serif" font-weight="400" font-style="italic" font-size="13" letter-spacing="1.2" fill="${CHARCOAL}" opacity="0.55">Every Big Idea Deserves a Launchpad</text>
  </g>
  <text x="578" y="138" text-anchor="end" font-family="Inter, ui-sans-serif, system-ui, sans-serif" font-weight="500" font-size="10" letter-spacing="2" fill="${TERRACOTTA}">BHAGLABS.COM</text>
</svg>`;
}
formats.push({ name: 'email-signature', svg: emailSigSVG() });

// ---------- write SVG + PNG ----------
const dims = {
  'avatar-square':       [1080, 1080],
  'avatar-square-dark':  [1080, 1080],
  'app-icon':            [1024, 1024],
  'og-image':            [1200, 630],
  'twitter-header':      [1500, 500],
  'twitter-header-dark': [1500, 500],
  'linkedin-banner':     [1584, 396],
  'linkedin-banner-dark':[1584, 396],
  'instagram-square':    [1080, 1080],
  'instagram-story':     [1080, 1920],
  'instagram-story-dark':[1080, 1920],
  'youtube-banner':      [2560, 1440],
  'facebook-cover':      [1640, 624],
  'email-signature':     [600, 150],
};

for (const { name, svg } of formats) {
  const svgPath = path.join(OUT, `${name}.svg`);
  fs.writeFileSync(svgPath, svg);
  const [w] = dims[name];
  const resvg = new Resvg(svg, { fitTo: { mode: 'width', value: w } });
  const png = resvg.render().asPng();
  fs.writeFileSync(path.join(OUT, `${name}.png`), png);
  console.log(`  ${name.padEnd(24)} ${dims[name][0]}x${dims[name][1]}`);
}

// ---------- gallery index ----------
const galleryItems = [
  ['avatar-square',       'Profile avatar (light)',        'Twitter/X, LinkedIn, Instagram profile, Discord, generic'],
  ['avatar-square-dark',  'Profile avatar (dark)',         'For dark-mode-first platforms'],
  ['app-icon',            'App icon',                      '1024x1024, iOS / macOS / Android source'],
  ['og-image',            'Open Graph image',              '1200x630, used by Twitter card, LinkedIn share, Slack'],
  ['twitter-header',      'Twitter / X header',            '1500x500'],
  ['twitter-header-dark', 'Twitter / X header (dark)',     ''],
  ['linkedin-banner',     'LinkedIn company banner',       '1584x396'],
  ['linkedin-banner-dark','LinkedIn company banner (dark)',''],
  ['instagram-square',    'Instagram post',                '1080x1080'],
  ['instagram-story',     'Instagram story',               '1080x1920'],
  ['instagram-story-dark','Instagram story (dark)',        ''],
  ['youtube-banner',      'YouTube channel banner',        '2560x1440, dark only (YouTube is dark-by-default)'],
  ['facebook-cover',      'Facebook page cover',           '1640x624'],
  ['email-signature',     'Email signature',               '600x150'],
];

const indexHTML = `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8"/>
  <title>BHAG Labs - Social & Landscape Exports</title>
  <link rel="icon" href="/favicon.svg"/>
  <style>
    body{font-family:'Inter',ui-sans-serif,system-ui,sans-serif;background:#f1ebe1;color:#1a1a1a;margin:0;padding:48px 40px;max-width:1200px;margin:0 auto;}
    h1{font-family:'Playfair Display',Georgia,serif;font-weight:700;font-size:42px;margin:0 0 6px 0;letter-spacing:-1px;}
    .sub{font-family:'Cormorant Garamond',Garamond,serif;font-style:italic;font-size:18px;opacity:.6;margin:0 0 36px 0;}
    .item{margin:32px 0;padding:20px;background:rgba(255,255,255,.4);border-radius:8px;border:1px solid rgba(0,0,0,.08);}
    .item h2{font-family:'Playfair Display',Georgia,serif;font-weight:700;font-size:22px;margin:0 0 4px 0;letter-spacing:-.5px;}
    .item .note{font-size:13px;opacity:.6;margin:0 0 14px 0;}
    .item .preview{background:#1a1a1a08;padding:14px;border-radius:6px;display:flex;justify-content:center;align-items:center;}
    .item img{max-width:100%;height:auto;display:block;border-radius:3px;box-shadow:0 1px 6px rgba(0,0,0,.08);}
    .links{margin-top:10px;font-size:12px;font-family:'Inter',sans-serif;}
    .links a{color:#c1502e;text-decoration:none;margin-right:14px;letter-spacing:.5px;}
    .links a:hover{text-decoration:underline;}
    .back{font-size:13px;color:#c1502e;text-decoration:none;}
  </style>
</head>
<body>
  <a class="back" href="/logos/concepts/">&larr; Logo concepts</a>
  <h1 style="margin-top:18px;">Social & landscape exports</h1>
  <p class="sub">BHAG Labs official logo, sized for every channel. All assets share the v13 mark.</p>
  ${galleryItems.map(([name, title, note]) => `
    <div class="item">
      <h2>${title}</h2>
      <p class="note">${note} &middot; ${dims[name][0]} &times; ${dims[name][1]}</p>
      <div class="preview"><img src="${name}.png" alt="${title}"/></div>
      <div class="links">
        <a href="${name}.svg" download>Download SVG</a>
        <a href="${name}.png" download>Download PNG</a>
      </div>
    </div>
  `).join('')}
</body>
</html>`;
fs.writeFileSync(path.join(OUT, 'index.html'), indexHTML);
console.log('  index.html');
console.log('done.');
