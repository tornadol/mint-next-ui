#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

const PUBLIC_DIR = path.join(__dirname, '..', 'public');

function fixHtmlLinks(content) {
  // href="PageName.html" or href="PageName.html?..."
  content = content.replace(/href="([A-Z][A-Za-z]+)\.html([^"]*)"/g, 'href="/$1$2"');
  // href='PageName.html' or href='PageName.html?...'
  content = content.replace(/href='([A-Z][A-Za-z]+)\.html([^']*)'/g, "href='/$1$2'");
  // href={`PageName.html?c=${...}`}
  content = content.replace(/href=\{`([A-Z][A-Za-z]+)\.html([^`]*)`\}/g, 'href={`/$1$2`}');
  // location.href='PageName.html'
  content = content.replace(/location\.href='([A-Z][A-Za-z]+)\.html([^']*)'/g, "location.href='/$1$2'");
  // location.href="PageName.html"
  content = content.replace(/location\.href="([A-Z][A-Za-z]+)\.html([^"]*)"/g, 'location.href="/$1$2"');
  // JS single-quoted strings 'PageName.html' (return values, object values, etc.)
  content = content.replace(/'([A-Z][A-Za-z]+)\.html([^']*)'/g, "'/$1$2'");
  // JS regex patterns: \.html$ -> remove \.html
  content = content.replace(/\\\.html\$/g, '$');
  return content;
}

const files = fs.readdirSync(PUBLIC_DIR).filter(f => f.endsWith('.html'));
let changed = 0;

for (const file of files) {
  const filepath = path.join(PUBLIC_DIR, file);
  const original = fs.readFileSync(filepath, 'utf8');
  const updated = fixHtmlLinks(original);
  if (updated !== original) {
    fs.writeFileSync(filepath, updated, 'utf8');
    console.log(`  updated: ${file}`);
    changed++;
  }
}

console.log(`\nDone — ${changed} file(s) changed.`);
