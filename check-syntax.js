#!/usr/bin/env node
// Guards against silently breaking index.html's inline <script type="module"> block. A syntax
// error in it makes EVERY window.* function undefined with no console error on load — the app just
// looks dead (buttons do nothing). See pharmacy-pos-project memory, 2026-07-27 incident. Run before
// every commit; wired into .git/hooks/pre-commit locally, but this file is tracked so it survives
// a re-clone and can always be run by hand: `node check-syntax.js`.
const fs = require('fs');
const path = require('path');
const os = require('os');
const { execFileSync } = require('child_process');

const file = path.join(__dirname, 'index.html');
const html = fs.readFileSync(file, 'utf8');
const m = html.match(/<script type="module">([\s\S]*?)<\/script>/);
if (!m) {
  console.error('check-syntax: could not find <script type="module"> block in index.html');
  process.exit(1);
}

const tmp = path.join(os.tmpdir(), '_pharmacy_check_' + Date.now() + '.mjs');
fs.writeFileSync(tmp, m[1]);
try {
  execFileSync(process.execPath, ['--check', tmp], { stdio: 'inherit' });
  console.log('check-syntax: OK');
} catch (e) {
  console.error('check-syntax: SYNTAX ERROR in index.html\'s inline script — see above. Commit/deploy blocked until fixed.');
  process.exitCode = 1;
} finally {
  fs.unlinkSync(tmp);
}
