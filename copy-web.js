// Copies the web app (the files GitHub Pages serves) into www/ for the Android build.
const fs = require('fs'), path = require('path');
const root = path.join(__dirname, '..'), www = path.join(__dirname, 'www');
fs.rmSync(www, { recursive: true, force: true }); fs.mkdirSync(www);
for (const f of fs.readdirSync(root)) {
  if (/^(index\.html|manifest\.webmanifest|version\.json)$/.test(f) || /\.(png|svg)$/.test(f)) fs.copyFileSync(path.join(root, f), path.join(www, f));
}
console.log('Copied web app to', www);
