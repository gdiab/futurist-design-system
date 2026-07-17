// Rebuilds _ds_bundle.js from the .jsx sources in components/.
// Usage: npm i --no-save @babel/core @babel/preset-react && node scripts/build-bundle.js
const fs = require('fs');
const path = require('path');
const babel = require('@babel/core');

const REPO = require('path').join(__dirname, '..');
const ORDER = [
  'actions/Button.jsx', 'actions/IconButton.jsx',
  'forms/Checkbox.jsx', 'forms/Input.jsx', 'forms/Select.jsx', 'forms/Switch.jsx', 'forms/Textarea.jsx',
  'data/Badge.jsx', 'data/Card.jsx', 'data/Stat.jsx', 'data/Table.jsx', 'data/Tag.jsx',
  'navigation/Tabs.jsx',
  'overlays/Drawer.jsx', 'overlays/Menu.jsx', 'overlays/Popover.jsx', 'overlays/Tooltip.jsx',
  'feedback/Dialog.jsx', 'feedback/Toast.jsx',
];

const sections = [];
const names = [];
for (const rel of ORDER) {
  let src = fs.readFileSync(path.join(REPO, 'components', rel), 'utf8');
  src = src.replace(/^import React.*\n/m, '');
  const m = src.match(/^export function (\w+)/m);
  if (!m) throw new Error('no export found in ' + rel);
  const name = m[1];
  names.push(name);
  src = src.replace(/^export function /m, 'function ');
  const compiled = babel.transformSync(src, {
    presets: [['@babel/preset-react', { runtime: 'classic' }]],
    compact: false,
  }).code;
  sections.push(`  /* ── components/${rel} ── */\n  var ${name} = (function () {\n${compiled}\nreturn ${name};\n})();\n`);
}

const out = `/* Futurist design system — component bundle.
 * GENERATED from the .jsx sources in components/ (JSX compiled to React.createElement).
 * Load after React + ReactDOM UMD scripts. Exposes window.Futurist (alias window.DS).
 * Rebuild: node scripts/build-bundle.js (needs @babel/core + @babel/preset-react; see script header).
 */
(function (global) {
  'use strict';
  var React = global.React;
  if (!React) { console.error('_ds_bundle.js: React must be loaded first'); return; }

${sections.join('\n')}
  var Futurist = { ${names.join(', ')} };
  global.Futurist = Futurist;
  global.DS = global.DS || Futurist;
})(typeof window !== 'undefined' ? window : this);
`;
fs.writeFileSync(path.join(REPO, '_ds_bundle.js'), out);
console.log('wrote _ds_bundle.js:', out.split('\n').length, 'lines,', names.length, 'components');
