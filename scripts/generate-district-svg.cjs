#!/usr/bin/env node
// Usage: node scripts/generate-district-svg.cjs
// Input: /tmp/napoli-municipalita.json (from Overpass)
// Output: src/district-map/mappa-distretti.svg

const fs = require('fs');
const path = require('path');

const raw = JSON.parse(fs.readFileSync('/tmp/napoli-municipalita.json', 'utf8'));

const MUN_TO_DISTRETTO = {
  1: 24, 2: 31, 3: 29, 4: 33, 5: 27, 6: 25, 7: 26, 8: 28, 9: 30, 10: 32,
};

const NOMI = {
  24: 'Distretto 24/73', 25: 'Distretto 25', 26: 'Distretto 26',
  27: 'Distretto 27', 28: 'Distretto 28', 29: 'Distretto 29',
  30: 'Distretto 30', 31: 'Distretto 31', 32: 'Distretto 32', 33: 'Distretto 33',
};

function extractRings(el) {
  const rings = [];
  if (!el.members) return rings;
  for (const m of el.members) {
    if ((m.role === 'outer' || m.role === '') && m.geometry && m.geometry.length > 2) {
      rings.push(m.geometry.map(pt => [pt.lon, pt.lat]));
    }
  }
  return rings;
}

let minLon = Infinity, maxLon = -Infinity, minLat = Infinity, maxLat = -Infinity;
for (const el of raw.elements) {
  for (const ring of extractRings(el)) {
    for (const [lon, lat] of ring) {
      if (lon < minLon) minLon = lon;
      if (lon > maxLon) maxLon = lon;
      if (lat < minLat) minLat = lat;
      if (lat > maxLat) maxLat = lat;
    }
  }
}

const W = 500, H = 560;
const padFrac = 0.025;
const lonRange = (maxLon - minLon) * (1 + padFrac * 2);
const latRange = (maxLat - minLat) * (1 + padFrac * 2);
const pMinLon = minLon - (maxLon - minLon) * padFrac;
const pMinLat = minLat - (maxLat - minLat) * padFrac;

const project = ([lon, lat]) => [
  ((lon - pMinLon) / lonRange * W).toFixed(2),
  (H - (lat - pMinLat) / latRange * H).toFixed(2),
];

const ringToPath = (ring) => {
  if (ring.length < 3) return '';
  return 'M ' + ring.map(project).map(p => p.join(',')).join(' L ') + ' Z';
};

const byDistretto = {};
for (const el of raw.elements) {
  const name = el.tags?.name || '';
  const munMatch = name.match(/Municipalità\s+(\d+)/i);
  if (!munMatch) continue;
  const munNum = parseInt(munMatch[1]);
  const distId = MUN_TO_DISTRETTO[munNum];
  if (!distId) continue;
  const rings = extractRings(el);
  if (!byDistretto[distId]) byDistretto[distId] = [];
  byDistretto[distId].push(...rings);
}

let svg = `<svg viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg">\n`;
svg += `  <title>Mappa distretti sanitari ASL Napoli 1 Centro</title>\n`;

for (const [id, rings] of Object.entries(byDistretto)) {
  const nome = NOMI[id];
  // id and class must match DistrictMap.module.css selectors:
  // #Distretto{N} for fill, .js-map-group for cursor/hover
  svg += `  <g id="Distretto${id}" class="js-map-group">\n`;
  svg += `    <a href="#distretto-${id}" aria-label="${nome}" tabindex="0">\n`;
  for (const ring of rings) {
    const d = ringToPath(ring);
    if (d) svg += `      <path d="${d}"/>\n`;
  }
  svg += `    </a>\n`;
  svg += `  </g>\n`;
}

svg += `</svg>`;

const outPath = path.resolve(__dirname, '../src/district-map/mappa-distretti.svg');
fs.writeFileSync(outPath, svg);
console.log('SVG written, size:', svg.length, 'bytes');
console.log('Districts:', Object.entries(byDistretto).map(([id, rings]) => `DS${id}:${rings.length}r`).join(' '));
