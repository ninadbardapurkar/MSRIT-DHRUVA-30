// build.js - Static Build script for Vercel
const fs = require('fs');
const path = require('path');

console.log("[Build] Preparing static assets for Vercel deployment...");

const publicDir = path.join(__dirname, 'public');

function copyFile(srcRel, destRel) {
  const src = path.join(__dirname, srcRel);
  const dest = path.join(publicDir, destRel);
  if (fs.existsSync(src)) {
    fs.mkdirSync(path.dirname(dest), { recursive: true });
    fs.copyFileSync(src, dest);
    console.log(`[Build] Copied ${srcRel} -> public/${destRel}`);
  }
}

function copyDir(srcRel, destRel) {
  const src = path.join(__dirname, srcRel);
  const dest = path.join(publicDir, destRel);
  if (fs.existsSync(src)) {
    fs.mkdirSync(dest, { recursive: true });
    const entries = fs.readdirSync(src, { withFileTypes: true });
    for (const entry of entries) {
      const srcPath = path.join(srcRel, entry.name);
      const destPath = path.join(destRel, entry.name);
      if (entry.isDirectory()) {
        copyDir(srcPath, destPath);
      } else {
        copyFile(srcPath, destPath);
      }
    }
  }
}

// 1. Copy core files to public/
copyFile('index.html', 'index.html');
copyDir('css', 'css');
copyDir('js', 'js');
if (fs.existsSync(path.join(__dirname, 'assets'))) {
  copyDir('assets', 'assets');
}

console.log("[Build] Static build complete! Both '.' and 'public' are fully populated and ready for Vercel.");
