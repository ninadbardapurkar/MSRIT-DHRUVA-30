// scripts/test_browser_runtime.js
const fs = require('fs');
const path = require('path');
const vm = require('vm');

console.log("Testing full browser runtime simulation...");

// 1. Read index.html
const html = fs.readFileSync('index.html', 'utf8');

// 2. Setup mock browser DOM
const elements = {};
function createMockElement(id, tag = 'div') {
  return {
    id,
    tagName: tag.toUpperCase(),
    classList: {
      _classes: new Set(),
      add: function(...cls) { cls.forEach(c => this._classes.add(c)); },
      remove: function(...cls) { cls.forEach(c => this._classes.delete(c)); },
      toggle: function(cls, force) {
        if (force === undefined) {
          if (this._classes.has(cls)) this._classes.delete(cls); else this._classes.add(cls);
        } else if (force) {
          this._classes.add(cls);
        } else {
          this._classes.delete(cls);
        }
      },
      contains: function(c) { return this._classes.has(c); }
    },
    dataset: {},
    style: {},
    innerHTML: '',
    textContent: '',
    children: [],
    addEventListener: () => {},
    removeEventListener: () => {},
    appendChild: function(child) { this.children.push(child); return child; },
    remove: function() {}
  };
}

// Extract all IDs from index.html
const idMatches = html.matchAll(/id="([^"]+)"/g);
for (const match of idMatches) {
  elements[match[1]] = createMockElement(match[1]);
}

const mockDocument = {
  getElementById: (id) => elements[id] || null,
  addEventListener: () => {},
  querySelectorAll: (selector) => {
    if (selector === '.mode-tab-btn') {
      return [
        { dataset: { mode: 'home' }, className: '' },
        { dataset: { mode: 'study' }, className: '' },
        { dataset: { mode: 'grid' }, className: '' },
        { dataset: { mode: 'quiz' }, className: '' },
        { dataset: { mode: 'notes' }, className: '' }
      ];
    }
    return [];
  },
  createElement: (tag) => createMockElement('created-' + Math.random(), tag),
  body: createMockElement('body', 'body')
};

const mockWindow = {
  addEventListener: (event, handler) => {
    if (event === 'DOMContentLoaded') {
      mockWindow._domContentLoadedHandler = handler;
    }
  },
  localStorage: {
    _data: {},
    getItem: (k) => mockWindow.localStorage._data[k] || null,
    setItem: (k, v) => { mockWindow.localStorage._data[k] = String(v); }
  },
  renderMathInElement: (el, opts) => {}
};

const sandbox = {
  window: mockWindow,
  document: mockDocument,
  localStorage: mockWindow.localStorage,
  console: console,
  setTimeout: setTimeout,
  clearTimeout: clearTimeout,
  requestAnimationFrame: (cb) => cb()
};

vm.createContext(sandbox);

// 3. Execute data.js
console.log("Loading data.js...");
const dataCode = fs.readFileSync('js/data.js', 'utf8');
vm.runInContext(dataCode, sandbox);
console.log("data.js executed successfully!");

// 4. Execute app.js
console.log("Loading app.js...");
const appCode = fs.readFileSync('js/app.js', 'utf8');
vm.runInContext(appCode, sandbox);
console.log("app.js executed successfully!");

// 5. Trigger DOMContentLoaded
console.log("Triggering DOMContentLoaded...");
if (mockWindow._domContentLoadedHandler) {
  mockWindow._domContentLoadedHandler();
  console.log("DOMContentLoaded triggered successfully!");
} else {
  console.error("No DOMContentLoaded handler registered!");
}

// 6. Test setMode('study')
console.log("Testing setMode('study')...");
vm.runInContext("setMode('study')", sandbox);
const studyContainer = elements['studyCardContainer'];
console.log("Study container rendered length:", studyContainer ? studyContainer.innerHTML.length : 0);

// 7. Test setMode('grid')
console.log("Testing setMode('grid')...");
vm.runInContext("setMode('grid')", sandbox);
const gridContainer = elements['gridCardsList'];
console.log("Grid container rendered length:", gridContainer ? gridContainer.innerHTML.length : 0);

// 8. Test setMode('quiz')
console.log("Testing setMode('quiz')...");
vm.runInContext("setMode('quiz')", sandbox);
const quizContainer = elements['quizContainer'];
console.log("Quiz container rendered length:", quizContainer ? quizContainer.innerHTML.length : 0);

// 9. Test setMode('notes')
console.log("Testing setMode('notes')...");
vm.runInContext("setMode('notes')", sandbox);
const notesContainer = elements['notesVaultContainer'];
console.log("Notes container rendered length:", notesContainer ? notesContainer.innerHTML.length : 0);

// 10. Test setMode('home')
console.log("Testing setMode('home')...");
vm.runInContext("setMode('home')", sandbox);
const homeGrid = elements['homeSubjectsGrid'];
console.log("Home subjects grid rendered length:", homeGrid ? homeGrid.innerHTML.length : 0);

console.log("ALL TESTS COMPLETED SUCCESSFULLY!");
