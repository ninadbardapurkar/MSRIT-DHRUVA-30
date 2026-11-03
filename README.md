# MSRIT 1st Semester B.E. (ECE — Chemistry Cycle) Interactive 3D Flashcards, PYQ & RIT Notes Vault

> **Ramaiah Institute of Technology (MSRIT / RIT), Bengaluru**  
> Autonomous Institute, Affiliated to Visvesvaraya Technological University (VTU)  
> Academic Courseware & Exam Strategy Prep Hub (1st Semester B.E. — Electronics & Communication Engineering)

---

## 🎯 Executive Overview & Exam Grounding

This production-ready web application provides **100% Previous Year Question Paper (PYQ)** and syllabus coverage for **all subjects and units** of the **1st Semester Chemistry Cycle (ECE Stream)** at MSRIT.

Grounding includes direct question papers and solutions from:
* **SEE February 2026** (Semester End Examination)
* **SEE June / July 2026** (Semester End & Backlog Examination)
* **CIE-1, CIE-2, & CIE-3** (Continuous Internal Evaluation Assessment Papers)

### 🚀 Key Capabilities:
* **Zero-Information-Loss Requirement:** Full step-by-step mathematical derivations, complete balanced chemical equations, full code snippets, and exact marking scheme tips.
* **4-Mode Integrated Navigation:**
  1. **Mode 1 — Study Deck (3D Flip):** True 3D perspective flip cards with interactive Memory Cues, PYQ metadata badges, Space to flip, arrow navigation, Shuffle, Star for review, and Master toggle.
  2. **Mode 2 — All Cards Grid (Browse & Print):** Side-by-side prompt and model solution catalog with answer visibility toggle and print stylesheet (`@media print`).
  3. **Mode 3 — Rapid Exam Quiz:** Interactive active-recall MCQ engine with immediate score tracking, green/red feedback, and step-by-step explanations.
  4. **Mode 4 — 📚 RIT Notes & PYQ Vault:** Direct links to official RIT SIS portals, unit-by-unit high-yield formula sheets, collapsible revision notes, and one-click "Practice 3D Flashcards" jumps.
* **Zero-Cost ($0 / ₹0) & Safe to Share:** 100% client-side JavaScript data modules with zero external LLM API keys or secret credentials.

---

## 📚 Subject Coverage

| Subject Code | Subject Name | Stream / Category |
| :--- | :--- | :--- |
| **25CYC22 / 25CYC12** | Applied Chemistry for Smart Systems | EEE / ECE Stream |
| **25MAC11 / 25MAC21** | Calculus, Linear Algebra & Numerical Methods | Common to All Programs |
| **25PLC14 / 25PSCCS14** | Introduction to C Programming | ECE / Circuit Branches |
| **25ETC15 / 25ETC25** | Introduction to AI and Applications | Emerging Technology Course |
| **25ESC134 / 25ESC234** | Introduction to Mechanical Engineering | Engineering Science Course (ESC) |
| **HSCC18 / HSCC28** | Constitution of India & Engineering Ethics | Humanities & Social Sciences |
| **25HSCC16 / 25HSCC26** | Communicative English & Soft Skills | Humanities & Social Sciences |

---

## ⌨️ Keyboard Shortcuts (Study Deck Mode)

* <kbd>Space</kbd> : Flip active 3D card (Reveal / Hide Exam Answer)
* <kbd>←</kbd> / <kbd>→</kbd> : Navigate to Previous / Next flashcard
* <kbd>S</kbd> : Toggle "Star for Review" ★
* <kbd>M</kbd> : Toggle "Mark Mastered" ✓
* <kbd>H</kbd> : Toggle Memory Hook / Formula Cue 💡

---

## 🌐 Deploy to Vercel (Zero-Configuration)

This project contains `vercel.json` and `package.json` for immediate one-click deployment on Vercel:

### Option A: Via GitHub
1. Push this folder to a GitHub repository:
   ```bash
   git init
   git add .
   git commit -m "Initial commit of MSRIT 1st Sem Chemistry Cycle Flashcards Web App"
   git remote add origin https://github.com/your-username/msrit-ece-chem-cycle.git
   git push -u origin main
   ```
2. Import the repository into your [Vercel Dashboard](https://vercel.com/new).
3. Leave all build settings as default (Framework Preset: **Other** / Static).
4. Click **Deploy**. Your site will be live on a fast, global CDN with an SSL certificate in seconds!

### Option B: Via Vercel CLI
```bash
npm install -g vercel
vercel
```

---

## 💻 Local Testing & Offline Usage

You can run this project locally without any dependencies:
```bash
# Using Python
python -m http.server 8080

# Or using Node.js
npx serve .
```
Then open `http://localhost:8080` in any web browser.
