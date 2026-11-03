/**
 * MSRIT 1st Semester B.E. (Chemistry & Physics Cycles) Comprehensive Academic Knowledge Base
 * Ramaiah Institute of Technology (Autonomous Institute, Affiliated to VTU), Bengaluru.
 * 
 * Includes 100% PYQ & High-Probability Practice Questions coverage across all 10 First-Year Engineering subjects:
 * 1. Applied Chemistry (25CYC22 / 25CYC12)
 * 2. Mathematics-I (25MAT11)
 * 3. C Programming (25PLC14)
 * 4. Artificial Intelligence (25AEC15)
 * 5. Elements of Mechanical Engg (25ESC13)
 * 6. Indian Constitution & Cyber Law (HSIC17)
 * 7. Professional English (HSEP18)
 * 8. Quantum Physics & Applications (25PYC12 / PYE22)
 * 9. Python Programming (25PLC24)
 * 10. Kannada Kali / Communicative Kannada (HSCP16K / HSCP26K / AR109K)
 * 
 * Zero information loss: Complete derivations, balanced reactions, step-by-step code, and marking schemes.
 */

const SUBJECTS_DATA = [
  {
    "id": "chem",
    "code": "25CYC22 / 25CYC12",
    "name": "Applied Chemistry for Smart Systems",
    "shortName": "Applied Chemistry",
    "stream": "EEE / ECE Stream",
    "color": "#2563EB",
    "badgeColor": "bg-blue-100 text-blue-800 border-blue-300",
    "units": [
      {
        "id": 1,
        "name": "Unit 1: Electrode Systems & Energy Storage Devices"
      },
      {
        "id": 2,
        "name": "Unit 2: Corrosion Science & Electrochemical Sensors"
      },
      {
        "id": 3,
        "name": "Unit 3: Polymers, Display Materials & Solar Cells"
      },
      {
        "id": 4,
        "name": "Unit 4: Memory Materials & Display Devices"
      },
      {
        "id": 5,
        "name": "Unit 5: Nanomaterials & E-Waste Management"
      }
    ]
  },
  {
    "id": "math",
    "code": "25MAC11 / 25MAC21",
    "name": "Calculus, Linear Algebra & Numerical Methods",
    "shortName": "Engineering Math",
    "stream": "Common to All Streams",
    "color": "#7C3AED",
    "badgeColor": "bg-purple-100 text-purple-800 border-purple-300",
    "units": [
      {
        "id": 1,
        "name": "Unit 1: Differential Calculus & Root Finding"
      },
      {
        "id": 2,
        "name": "Unit 2: Vector Calculus & Multiple Integrals"
      },
      {
        "id": 3,
        "name": "Unit 3: Linear Systems, ODEs & Eigenvalues"
      },
      {
        "id": 4,
        "name": "Unit 4: Vector Spaces & Numerical Interpolation"
      },
      {
        "id": 5,
        "name": "Unit 5: Linear Transformations & Numerical Calculus"
      }
    ]
  },
  {
    "id": "cprog",
    "code": "25PLC14 / 25PSCCS14",
    "name": "Introduction to C Programming",
    "shortName": "C Programming",
    "stream": "ECE / Circuit Branches",
    "color": "#059669",
    "badgeColor": "bg-emerald-100 text-emerald-800 border-emerald-300",
    "units": [
      {
        "id": 1,
        "name": "Unit 1: Fundamentals, Data Types & Operators"
      },
      {
        "id": 2,
        "name": "Unit 2: Decision Branching & Looping Constructs"
      },
      {
        "id": 3,
        "name": "Unit 3: 1D/2D Arrays & String Operations"
      },
      {
        "id": 4,
        "name": "Unit 4: Modular Functions & Recursion"
      },
      {
        "id": 5,
        "name": "Unit 5: Pointers, Structures & Dynamic Memory"
      }
    ]
  },
  {
    "id": "ai",
    "code": "25ETC15 / 25ETC25",
    "name": "Introduction to AI and Applications",
    "shortName": "Basic Electronics & AI",
    "stream": "Emerging Tech / Circuit Streams",
    "color": "#D97706",
    "badgeColor": "bg-amber-100 text-amber-800 border-amber-300",
    "units": [
      {
        "id": 1,
        "name": "Unit 1: AI Foundations, Search & Problem Solving"
      },
      {
        "id": 2,
        "name": "Unit 2: Prompt Engineering & Generative AI"
      },
      {
        "id": 3,
        "name": "Unit 3: Machine Learning Core & Classifiers"
      },
      {
        "id": 4,
        "name": "Unit 4: Expert Systems, AIaaS & AIoT"
      },
      {
        "id": 5,
        "name": "Unit 5: Robotics, Drones & Applied AI"
      }
    ]
  },
  {
    "id": "mech",
    "code": "25ESC134 / 25ESC234",
    "name": "Introduction to Mechanical Engineering",
    "shortName": "Mechanical (ESC)",
    "stream": "Engineering Science Course",
    "color": "#EA580C",
    "badgeColor": "bg-orange-100 text-orange-800 border-orange-300",
    "units": [
      {
        "id": 1,
        "name": "Unit 1: Energy Resources & Engineering Materials"
      },
      {
        "id": 2,
        "name": "Unit 2: Machine Tools, Machining & 3D Printing"
      },
      {
        "id": 3,
        "name": "Unit 3: IC Engines, Refrigeration & Air Conditioning"
      },
      {
        "id": 4,
        "name": "Unit 4: Power Transmission & Metal Joining"
      },
      {
        "id": 5,
        "name": "Unit 5: Electric Vehicles & Industrial Robotics"
      }
    ]
  },
  {
    "id": "const",
    "code": "HSCC18 / HSCC28",
    "name": "Constitution of India & Engineering Ethics",
    "shortName": "Constitution & Ethics",
    "stream": "Humanities & Social Sciences",
    "color": "#DC2626",
    "badgeColor": "bg-red-100 text-red-800 border-red-300",
    "units": [
      {
        "id": 1,
        "name": "Unit 1: Constitutional History & Preamble Philosophy"
      },
      {
        "id": 2,
        "name": "Unit 2: Fundamental Rights & Fundamental Duties"
      },
      {
        "id": 3,
        "name": "Unit 3: Union Executive, Parliament & Supreme Court Writs"
      },
      {
        "id": 4,
        "name": "Unit 4: State Government, Elections & Emergencies"
      },
      {
        "id": 5,
        "name": "Unit 5: Engineering Ethics & Professional Responsibility"
      }
    ]
  },
  {
    "id": "eng",
    "code": "25HSCC16 / 25HSCC26 / 25HSCP15",
    "name": "Communicative English & Soft Skills",
    "shortName": "Communication & Soft Skills",
    "stream": "Humanities & Social Sciences",
    "color": "#4F46E5",
    "badgeColor": "bg-indigo-100 text-indigo-800 border-indigo-300",
    "units": [
      {
        "id": 1,
        "name": "Unit 1: Communication Fundamentals, Proxemics & Persuasion"
      },
      {
        "id": 2,
        "name": "Unit 2: Self-Awareness, SWOC Analysis & Adaptability"
      },
      {
        "id": 3,
        "name": "Unit 3: Goal Setting (SMART), Time Management & 5 Whys"
      },
      {
        "id": 4,
        "name": "Unit 4: Digital Communication, Netiquette & Problem Solving"
      },
      {
        "id": 5,
        "name": "Unit 5: Technical Writing, Resumes & Interview Mastery"
      }
    ]
  },
  {
    "id": "phys",
    "code": "25PYC12 / PYE22",
    "name": "Quantum Physics and Applications",
    "shortName": "Quantum Physics",
    "stream": "Physics Cycle / Basic Science",
    "color": "#0284C7",
    "badgeColor": "bg-sky-100 text-sky-800 border-sky-300",
    "cycle": "p-cycle",
    "units": [
      {
        "id": 1,
        "name": "Unit 1: Lasers & Optical Fiber Communication"
      },
      {
        "id": 2,
        "name": "Unit 2: Quantum Mechanics & Wave Equations"
      },
      {
        "id": 3,
        "name": "Unit 3: Electrical Conductors & Semiconductors"
      },
      {
        "id": 4,
        "name": "Unit 4: Superconductivity & Josephson Devices"
      },
      {
        "id": 5,
        "name": "Unit 5: Quantum Computing & Qubit Gates"
      }
    ]
  },
  {
    "id": "pyprog",
    "code": "25PLC24",
    "name": "Python Programming",
    "shortName": "Python Programming",
    "stream": "Programming & Data Science",
    "color": "#0D9488",
    "badgeColor": "bg-teal-100 text-teal-800 border-teal-300",
    "cycle": "p-cycle",
    "units": [
      {
        "id": 1,
        "name": "Unit 1: Python Fundamentals, Errors & Loops"
      },
      {
        "id": 2,
        "name": "Unit 2: Strings, Sequences & File I/O"
      },
      {
        "id": 3,
        "name": "Unit 3: Dictionaries, NumPy & Web Requests"
      },
      {
        "id": 4,
        "name": "Unit 4: Modular Programming & OOP Classes"
      },
      {
        "id": 5,
        "name": "Unit 5: Operator Overloading & Exceptions"
      }
    ]
  },
  {
    "id": "kan",
    "code": "HSCP16K / HSCP26K / AR109K",
    "name": "Kannada Kali / Communicative Kannada",
    "shortName": "Kannada Kali",
    "stream": "Humanities / State Language",
    "color": "#B45309",
    "badgeColor": "bg-amber-100 text-amber-900 border-amber-300",
    "cycle": "humanities",
    "units": [
      {
        "id": 1,
        "name": "Unit 1: Introduction to Karnataka & Culture"
      },
      {
        "id": 2,
        "name": "Unit 2: Daily Conversation & Word Ordering"
      },
      {
        "id": 3,
        "name": "Unit 3: Vocabulary, Adjectives & Meanings"
      },
      {
        "id": 4,
        "name": "Unit 4: Kannada Numbers, Fruits & Vegetables"
      },
      {
        "id": 5,
        "name": "Unit 5: Kannada Alphabet & Writing Skills"
      }
    ]
  }
];

const FLASHCARDS_DATA = [
  {
    "id": "card-1",
    "subjectId": "chem",
    "unit": 1,
    "pyqTag": "\ud83d\udd25 Asked in SEE July 2026 \u2022 8 Marks",
    "badgeType": "\ud83d\udcd0 Derivation / Formula",
    "badgeLabel": "Derivation",
    "question": "What is single electrode potential? Derive the Nernst equation for a single electrode potential at 298 K.",
    "hint": "Start with Van 't Hoff reaction isotherm \u0394G = \u0394G\u00b0 + RT ln Q, replace \u0394G with -nFE, and simplify at T = 298 K (25\u00b0C).",
    "answer": "<strong>1. Definition:</strong> Single electrode potential is the potential difference established between a metal electrode and the surrounding solution containing its own ions at equilibrium: $M^{n+} + ne^- \\rightleftharpoons M$.\n\n<strong>2. Step-by-Step Thermodynamic Derivation:</strong>\n\u2022 According to the Van 't Hoff reaction isotherm:\n  $$\\Delta G = \\Delta G^\\circ + RT \\ln \\left(\\frac{[\\text{Products}]}{[\\text{Reactants}]}\\right)$$\n\u2022 For the reduction reaction $M^{n+}(aq) + ne^- \\rightarrow M(s)$:\n  $$\\Delta G = \\Delta G^\\circ + RT \\ln \\left(\\frac{[M]}{[M^{n+}]}\\right)$$\n\u2022 By convention, the activity of a pure solid metal is unity ($[M] = 1$):\n  $$\\Delta G = \\Delta G^\\circ + RT \\ln \\left(\\frac{1}{[M^{n+}]}\\right) = \\Delta G^\\circ - RT \\ln [M^{n+}]$$\n\u2022 The electrical work done relates to Gibbs free energy as $\\Delta G = -nFE$ and $\\Delta G^\\circ = -nFE^\\circ$:\n  $$-nFE = -nFE^\\circ - RT \\ln [M^{n+}]$$\n\u2022 Dividing throughout by $-nF$:\n  $$E = E^\\circ + \\frac{RT}{nF} \\ln [M^{n+}] = E^\\circ + \\frac{2.303 RT}{nF} \\log_{10} [M^{n+}]$$\n\u2022 Substituting standard constants at $T = 298\\text{ K}$ ($R = 8.314\\text{ J/mol}\\cdot\\text{K}$, $F = 96485\\text{ C/mol}$):\n  $$\\frac{2.303 \\times 8.314 \\times 298}{96485} = 0.0591\\text{ V}$$\n\u2022 <strong>Final Working Formula:</strong>\n  $$E = E^\\circ + \\frac{0.0591}{n} \\log_{10} [M^{n+}]$$",
    "examTip": "Always explicitly mention the convention [M] = 1 for pure solid metal, and state the values of R, T=298K, and F to get full 8/8 marks.",
    "starred": false,
    "mastered": false
  },
  {
    "id": "card-2",
    "subjectId": "chem",
    "unit": 1,
    "pyqTag": "\ud83d\udd25 Asked in SEE July 2026 \u2022 6 Marks",
    "badgeType": "\ud83d\udd22 Numerical Pattern",
    "badgeLabel": "Numerical",
    "question": "An electrochemical cell consists of a Copper electrode dipped in 0.25 M CuSO\u2084 and a Silver electrode dipped in 0.15 M AgNO\u2083. Write the cell representation, cell reactions, and calculate the cell potential at 298 K. Given: E\u00b0(Cu\u00b2\u207a/Cu) = +0.34 V and E\u00b0(Ag\u207a/Ag) = +0.80 V.",
    "hint": "Identify anode (lower E\u00b0) and cathode (higher E\u00b0). Cell potential E_cell = E\u00b0_cell - (0.0591/n) log Q.",
    "answer": "<strong>1. Identification of Electrodes:</strong>\n\u2022 $E^\\circ(Ag^+/Ag) = +0.80\\text{ V}$ (higher reduction potential $\\rightarrow$ Cathode / Reduction)\n\u2022 $E^\\circ(Cu^{2+}/Cu) = +0.34\\text{ V}$ (lower reduction potential $\\rightarrow$ Anode / Oxidation)\n\n<strong>2. Cell Representation:</strong>\n$$Cu(s) \\mid Cu^{2+}(0.25\\text{ M}) \\parallel Ag^+(0.15\\text{ M}) \\mid Ag(s)$$\n\n<strong>3. Half-Cell and Net Cell Reactions:</strong>\n\u2022 At Anode (Oxidation): $Cu(s) \\rightarrow Cu^{2+}(aq) + 2e^-$\n\u2022 At Cathode (Reduction): $2Ag^+(aq) + 2e^- \\rightarrow 2Ag(s)$\n\u2022 Net Cell Reaction: $Cu(s) + 2Ag^+(aq) \\rightarrow Cu^{2+}(aq) + 2Ag(s)$ (Here, $n = 2$).\n\n<strong>4. Calculation of Cell Potential:</strong>\n\u2022 Standard EMF: $E^\\circ_{\\text{cell}} = E^\\circ_{\\text{cathode}} - E^\\circ_{\\text{anode}} = 0.80 - 0.34 = 0.46\\text{ V}$\n\u2022 Nernst Equation for the cell:\n  $$E_{\\text{cell}} = E^\\circ_{\\text{cell}} - \\frac{0.0591}{n} \\log_{10} \\left(\\frac{[Cu^{2+}]}{[Ag^+]^2}\\right)$$\n  $$E_{\\text{cell}} = 0.46 - \\frac{0.0591}{2} \\log_{10} \\left(\\frac{0.25}{(0.15)^2}\\right)$$\n  $$\\frac{0.25}{0.0225} = 11.111 \\implies \\log_{10}(11.111) = 1.0457$$\n  $$E_{\\text{cell}} = 0.46 - (0.02955 \\times 1.0457) = 0.46 - 0.0309 = \\mathbf{0.4291\\text{ V}}$$",
    "examTip": "Be careful! The stoichiometric coefficient of Ag+ is 2, so [Ag+] must be squared in the reaction quotient denominator: [Cu2+]/[Ag+]^2.",
    "starred": false,
    "mastered": false
  },
  {
    "id": "card-3",
    "subjectId": "chem",
    "unit": 1,
    "pyqTag": "\ud83d\udd25 Asked in SEE July 2026, CIE-1 2026 \u2022 6 Marks",
    "badgeType": "\ud83e\uddea Reaction / Mechanism",
    "badgeLabel": "Device Working",
    "question": "Elaborate the construction and working of a Solid Oxide Fuel Cell (SOFC). Mention two of its engineering applications.",
    "hint": "Solid electrolyte is YSZ (Yttria-Stabilized Zirconia) that conducts O\u00b2\u207b ions at high temperature (800-1000\u00b0C).",
    "answer": "<strong>1. Principle & Electrolyte:</strong>\nA Solid Oxide Fuel Cell (SOFC) is a high-temperature electrochemical device that converts the chemical energy of a fuel (H\u2082 or CO or natural gas) directly into electrical energy using a solid ceramic electrolyte: <strong>Yttria-Stabilized Zirconia (YSZ, ZrO\u2082 doped with Y\u2082O\u2083)</strong>, which conducts oxide ions ($O^{2-}$).\n\n<strong>2. Construction Components:</strong>\n\u2022 <strong>Anode (Fuel Electrode):</strong> Porous Nickel-YSZ cermet (allows fuel penetration and catalytic oxidation).\n\u2022 <strong>Cathode (Air Electrode):</strong> Porous Strontium-doped Lanthanum Manganite (LSM, $La_{1-x}Sr_xMnO_3$).\n\u2022 <strong>Electrolyte:</strong> Dense, non-porous YSZ ceramic membrane impermeable to gases.\n\u2022 <strong>Operating Temperature:</strong> $800^\\circ\\text{C} - 1000^\\circ\\text{C}$.\n\n<strong>3. Working Electrode Reactions:</strong>\n\u2022 At Cathode: $O_2 + 4e^- \\rightarrow 2O^{2-}$ (Oxygen reduced and migrates through YSZ).\n\u2022 At Anode: $2H_2 + 2O^{2-} \\rightarrow 2H_2O + 4e^-$ (Oxide ions combine with H\u2082 fuel, releasing electrons).\n\u2022 Overall Cell Reaction: $2H_2 + O_2 \\rightarrow 2H_2O + \\text{Electrical Energy} + \\text{Heat}$.\n\n<strong>4. Applications:</strong>\n1. Combined Heat and Power (CHP) stationary power generation plants.\n2. Auxiliary Power Units (APUs) for large naval vessels, aircraft, and heavy-duty vehicles.",
    "examTip": "Write the formula of YSZ and LSM clearly. Highlight that O\u00b2\u207b ions (not H\u207a) migrate across the solid ceramic electrolyte.",
    "starred": false,
    "mastered": false
  },
  {
    "id": "card-4",
    "subjectId": "chem",
    "unit": 1,
    "pyqTag": "\ud83d\udd25 Asked in SEE July 2026, CIE-1 2026 \u2022 8 Marks",
    "badgeType": "\ud83d\udcd0 Derivation / Formula",
    "badgeLabel": "Standard Electrode",
    "question": "What are reference electrodes? Explain the construction and working of a Saturated Calomel Electrode (SCE) with relevant half-cell reactions and applications.",
    "hint": "Reference electrode has stable, reproducible potential. SCE uses Hg, Hg2Cl2, and saturated KCl. Potential = +0.244 V.",
    "answer": "<strong>1. Definition:</strong> A reference electrode is an electrode whose potential is completely reproducible, constant, and insensitive to the composition of the analyte solution. Used as a reference half-cell to measure the unknown potential of other electrodes.\n\n<strong>2. Construction of Saturated Calomel Electrode (SCE):</strong>\n\u2022 Consists of a glass tube with an inner tube containing pure liquid Mercury ($Hg$) in contact with a paste of Mercury and Mercurous chloride ($Hg + Hg_2Cl_2$, known as Calomel).\n\u2022 The tube is filled with a saturated solution of Potassium Chloride ($KCl$) providing a fixed concentration of $Cl^-$ ions.\n\u2022 Electrical contact is made via a Platinum ($Pt$) wire dipped into mercury. A porous plug or sintered glass disc at the bottom serves as the salt bridge.\n\u2022 <strong>Cell Representation:</strong> $Pt(s) \\mid Hg(l) \\mid Hg_2Cl_2(s) \\mid KCl(\\text{sat. aq})$.\n\n<strong>3. Working & Electrode Reactions:</strong>\nDepending on whether it acts as anode or cathode:\n\u2022 <strong>As Anode (Oxidation):</strong> $2Hg(l) + 2Cl^-(aq) \\rightarrow Hg_2Cl_2(s) + 2e^-$\n\u2022 <strong>As Cathode (Reduction):</strong> $Hg_2Cl_2(s) + 2e^- \\rightarrow 2Hg(l) + 2Cl^-(aq)$\n\u2022 Reduction Potential: $E = E^\\circ - \\frac{0.0591}{2}\\log_{10}[Cl^-]^2 = +0.244\\text{ V}$ at $298\\text{ K}$ (for saturated KCl).\n\n<strong>4. Applications:</strong>\n\u2022 Secondary standard electrode in potentiometric titrations.\n\u2022 Used with glass electrodes for precise pH measurements.",
    "examTip": "State the potential of saturated calomel electrode as +0.244 V (or 0.242 V) at 298 K. The potential depends only on Cl- concentration.",
    "starred": false,
    "mastered": false
  },
  {
    "id": "card-5",
    "subjectId": "chem",
    "unit": 1,
    "pyqTag": "\ud83d\udd25 Asked in SEE July 2026, CIE-1 2026 \u2022 6 Marks",
    "badgeType": "\u26a1 Exception / Trap",
    "badgeLabel": "Conceptual Reason",
    "question": "Give scientific reasons: (i) In a concentration cell, why does no electricity flow when the concentration of metal ions is identical in both half-cells? (ii) Why is there no self-discharge in a reserve battery?",
    "hint": "Look at Nernst equation log(C2/C1) when C1=C2. Reserve battery has inactive electrolyte stored separately.",
    "answer": "<strong>(i) Reason for Zero Current in Identical Concentration Cell:</strong>\n\u2022 The EMF of a concentration cell (e.g., $M \\mid M^{n+}(C_1) \\parallel M^{n+}(C_2) \\mid M$) is given by:\n  $$E_{\\text{cell}} = \\frac{0.0591}{n} \\log_{10} \\left(\\frac{C_2}{C_1}\\right) \\quad (\\text{where } C_2 > C_1)$$\n\u2022 When the concentration of metal ions in both half-cells is equal ($C_1 = C_2$):\n  $$\\frac{C_2}{C_1} = 1 \\implies \\log_{10}(1) = 0 \\implies E_{\\text{cell}} = 0\\text{ V}$$\n\u2022 The chemical potential of $M^{n+}$ ions in both half-cells is equal ($\\Delta G = 0$), so the driving force for electron transfer vanishes.\n\n<strong>(ii) Reason for Zero Self-Discharge in Reserve Batteries:</strong>\n\u2022 In a reserve battery, one critical component (usually the active liquid or solid electrolyte, or an electrode activator) is kept physically separated and isolated in an ampoule or reservoir during storage.\n\u2022 In the unactivated state, there is no physical contact between the active electrode materials and the conducting electrolyte.\n\u2022 Consequently, spontaneous internal parasitic chemical reactions, corrosion, and internal ionic transport are 100% prevented, eliminating self-discharge and giving an almost indefinite shelf life (10-20+ years) until mechanical/thermal activation.",
    "examTip": "Quote E_cell = (0.0591/n) log(C2/C1) = 0 for part (i), and 'physical separation of electrolyte in an inactive state' for part (ii).",
    "starred": false,
    "mastered": false
  },
  {
    "id": "card-6",
    "subjectId": "chem",
    "unit": 1,
    "pyqTag": "\ud83d\udd25 Asked in SEE July 2026, CIE-1 2026 \u2022 6 Marks",
    "badgeType": "\ud83e\uddea Reaction / Mechanism",
    "badgeLabel": "Modern Battery",
    "question": "Explain briefly the construction and working of a Sodium-Ion (Na-ion) Battery. What advantages does it hold over Li-ion batteries?",
    "hint": "Na+ intercalates into hard carbon (anode) and transition metal oxide (cathode). Na is 1000x more abundant than Li.",
    "answer": "<strong>1. Principle:</strong>\nA Sodium-ion battery is a rechargeable secondary battery that operates on the 'rocking-chair' intercalation principle, where $Na^+$ ions shuttle between the anode and cathode during charging and discharging.\n\n<strong>2. Construction:</strong>\n\u2022 <strong>Anode:</strong> Hard carbon (non-graphitizable carbon with larger interlayer spacing capable of accommodating the larger ionic radius of $Na^+$: $1.02\\text{ \u00c5}$ vs $0.76\\text{ \u00c5}$ for $Li^+$).\n\u2022 <strong>Cathode:</strong> Sodium transition metal oxide such as $NaCoO_2$, $NaFePO_4$, or Prussian white analogues.\n\u2022 <strong>Electrolyte:</strong> Sodium salt ($NaPF_6$ or $NaClO_4$) dissolved in non-aqueous carbonate solvents (EC/DMC).\n\u2022 <strong>Current Collector:</strong> Aluminium foil for BOTH anode and cathode (unlike Li-ion which requires expensive Copper for the anode).\n\n<strong>3. Working Reactions:</strong>\n\u2022 <strong>Discharging:</strong>\n  - Anode: $Na_x C \\rightarrow C + x Na^+ + x e^-$ (De-intercalation of $Na^+$)\n  - Cathode: $Na_{1-x}MO_2 + x Na^+ + x e^- \\rightarrow NaMO_2$ (Intercalation of $Na^+$)\n\u2022 <strong>Charging:</strong> Reactions proceed in reverse when an external voltage is applied.\n\n<strong>4. Advantages over Lithium-ion:</strong>\n1. <strong>Abundant & Inexpensive:</strong> Sodium is widely abundant in sea salt and earth's crust (~1000x cheaper than Lithium).\n2. <strong>Aluminium Current Collector:</strong> Aluminium can be used at the anode because Na does not form an alloy with Al at low potentials (saving significant cost and weight over copper).",
    "examTip": "Highlight that Aluminium current collectors can be used on BOTH electrodes in Na-ion batteries because Na does not alloy with Al.",
    "starred": false,
    "mastered": false
  },
  {
    "id": "card-7",
    "subjectId": "chem",
    "unit": 2,
    "pyqTag": "\ud83d\udd25 Asked in SEE July 2026, CIE-1 2026 \u2022 8 Marks",
    "badgeType": "\ud83e\uddea Reaction / Mechanism",
    "badgeLabel": "Corrosion Theory",
    "question": "Illustrate the mechanism of rusting of iron according to the electrochemical theory of corrosion with all relevant half-cell and overall reactions.",
    "hint": "Rusting creates micro-galvanic cells: Anodic dissolution Fe -> Fe2+ + 2e-, Cathodic reduction of O2, followed by precipitation of Fe(OH)3 -> Fe2O3.xH2O.",
    "answer": "<strong>1. Electrochemical Theory of Corrosion:</strong>\nRusting of iron in an ambient moist environment occurs via formation of minute galvanic (anodic and cathodic) cells on the heterogeneous metal surface in the presence of water and dissolved oxygen.\n\n<strong>2. Anodic Reaction (Oxidation of Iron):</strong>\nPure iron metal dissolves at anodic regions of higher strain or lower oxygen availability:\n$$Fe(s) \\rightarrow Fe^{2+}(aq) + 2e^- \\quad (E^\\circ = -0.44\\text{ V})$$\n\n<strong>3. Cathodic Reactions (Reduction):</strong>\nElectrons travel through the metal to cathodic regions with higher oxygen concentration:\n\u2022 <strong>In Neutral or Slightly Alkaline Aerated Medium:</strong>\n  $$O_2 + 2H_2O + 4e^- \\rightarrow 4OH^-(aq) \\quad (E^\\circ = +0.40\\text{ V})$$\n\u2022 <strong>In Acidic Medium (if acidic pollutants are present):</strong>\n  $$O_2 + 4H^+ + 4e^- \\rightarrow 2H_2O \\quad (E^\\circ = +1.23\\text{ V})$$\n\n<strong>4. Rust Formation Reactions:</strong>\n\u2022 $Fe^{2+}$ and $OH^-$ ions diffuse towards each other through the electrolyte film to form Ferrous hydroxide:\n  $$Fe^{2+} + 2OH^- \\rightarrow Fe(OH)_2 \\downarrow$$\n\u2022 In the presence of excess dissolved oxygen, $Fe(OH)_2$ is further oxidized to Ferric hydroxide:\n  $$4Fe(OH)_2 + O_2 + 2H_2O \\rightarrow 4Fe(OH)_3 \\downarrow$$\n\u2022 Dehydration of Ferric hydroxide yields hydrated ferric oxide (Rust):\n  $$2Fe(OH)_3 \\rightarrow Fe_2O_3 \\cdot xH_2O + (3-x)H_2O$$\n  where $\\mathbf{Fe_2O_3 \\cdot xH_2O}$ is red-brown loose rust.",
    "examTip": "Always show both anodic oxidation, cathodic reduction in neutral/alkaline media, and the multi-step precipitation ending in Fe2O3.xH2O.",
    "starred": false,
    "mastered": false
  },
  {
    "id": "card-8",
    "subjectId": "chem",
    "unit": 2,
    "pyqTag": "\ud83d\udd25 Asked in SEE July 2026 \u2022 6 Marks",
    "badgeType": "\ud83d\udd22 Numerical Pattern",
    "badgeLabel": "Numerical",
    "question": "A metallic sheet of area 100 inch\u00b2 is exposed to a corroding environment. After one year it experienced a weight loss of 40 g due to corrosion. If the density of the alloy is 8.4 g/cm\u00b3, calculate the Corrosion Penetration Rate (CPR) in mils per year (mpy). (Given constant K = 534).",
    "hint": "Use CPR formula: CPR = (K * W) / (D * A * T), where K=534, W=weight loss in mg (40 g = 40,000 mg), D=density in g/cm\u00b3, A=area in sq.in, T=time in hours (1 yr = 8760 hrs).",
    "answer": "<strong>1. Formula for Corrosion Penetration Rate (CPR):</strong>\n$$CPR = \\frac{K \\times W}{D \\times A \\times T} \\quad (\\text{in mils per year, mpy})$$\n\n<strong>2. Given Parameters & Unit Conversions:</strong>\n\u2022 Constant $K = 534$\n\u2022 Weight loss $W = 40\\text{ g} = 40 \\times 10^3\\text{ mg} = 40,000\\text{ mg}$\n\u2022 Density of alloy $D = 8.4\\text{ g/cm}^3$\n\u2022 Surface area exposed $A = 100\\text{ inch}^2$\n\u2022 Time of exposure $T = 1\\text{ year} = 365 \\times 24 = 8,760\\text{ hours}$\n\n<strong>3. Step-by-Step Calculation:</strong>\n$$CPR = \\frac{534 \\times 40,000}{8.4 \\times 100 \\times 8,760}$$\n$$CPR = \\frac{21,360,000}{7,358,400}$$\n$$\\mathbf{CPR \\approx 2.9028\\text{ mpy}}$$\n\n<strong>Conclusion:</strong>\nThe corrosion penetration rate of the metallic sheet is <strong>2.90 mpy</strong> (mils per year). (A rate < 1-5 mpy represents good corrosion resistance).",
    "examTip": "Crucial unit conversion: Weight loss W MUST be converted from grams to milligrams (40 g = 40,000 mg), and time T from 1 year to 8760 hours!",
    "starred": false,
    "mastered": false
  },
  {
    "id": "card-9",
    "subjectId": "chem",
    "unit": 2,
    "pyqTag": "\ud83d\udd25 Asked in SEE July 2026, CIE-1 2026 \u2022 6 Marks",
    "badgeType": "\u26a1 Exception / Trap",
    "badgeLabel": "Corrosion Mechanism",
    "question": "Illustrate differential aeration corrosion with a neat schematic and suitable example. Explain why corrosion accelerates drastically once pitting starts.",
    "hint": "Poorly oxygenated area acts as Anode (corrodes); well oxygenated area acts as Cathode. Small anode + large cathode = intense pitting.",
    "answer": "<strong>1. Principle of Differential Aeration Corrosion:</strong>\nWhen different parts of the same metallic structure are exposed to uneven concentrations of dissolved oxygen, the <strong>less oxygenated area acts as the ANODE</strong> (undergoes oxidation/corrosion) and the <strong>more oxygenated area acts as the CATHODE</strong> (undergoes reduction of oxygen).\n\n<strong>2. Examples:</strong>\n\u2022 <strong>Waterline Corrosion:</strong> A metal tank filled with water corrodes just below the water line because the area below the meniscus has lower dissolved oxygen than the area exposed to ambient air.\n\u2022 <strong>Pitting under dust/sand particles:</strong> The metal under the dust particle is deprived of oxygen (Anode) and corrodes, forming a deep pit.\n\n<strong>3. Why Corrosion Accelerates Drastically Once Pitting Starts:</strong>\n\u2022 Once a pit initiates, the bottom of the pit has extremely poor oxygen replenishment compared to the vast surrounding aerated metal surface.\n\u2022 This creates an unfavorable area ratio: <strong>Extremely small Anode area ($A_{\\text{anode}}$) and Huge Cathode area ($A_{\\text{cathode}}$)</strong>.\n\u2022 Since total anodic current must equal total cathodic current ($I_{\\text{anode}} = I_{\\text{cathode}}$):\n  $$i_{\\text{anode}} = \\frac{I}{A_{\\text{anode}}} \\gg i_{\\text{cathode}} = \\frac{I}{A_{\\text{cathode}}}$$\n\u2022 The anodic current density becomes enormous, concentrating all metal dissolution inside the tiny cavity, causing rapid auto-catalytic perforation.",
    "examTip": "Always mention the area effect: Very small anode area coupled with large cathode area causes high current density at the pit bottom.",
    "starred": false,
    "mastered": false
  },
  {
    "id": "card-10",
    "subjectId": "chem",
    "unit": 2,
    "pyqTag": "\ud83d\udd25 Asked in SEE July 2026 \u2022 8 Marks",
    "badgeType": "\ud83e\uddea Reaction / Mechanism",
    "badgeLabel": "Optical Sensor",
    "question": "Discuss the principle, procedure, and application of a Colorimetric Sensor in the quantitative estimation of Copper.",
    "hint": "Cu2+ reacts with ammonia to form deep blue complex [Cu(NH3)4]2+. Absorbance obeys Beer-Lambert's Law A = epsilon * c * l.",
    "answer": "<strong>1. Principle (Beer-Lambert's Law):</strong>\nWhen monochromatic light of intensity $I_0$ passes through an absorbing solution of path length $l$ and concentration $c$, the absorbed intensity obeys:\n$$A = \\log_{10}\\left(\\frac{I_0}{I_t}\\right) = \\varepsilon \\cdot c \\cdot l$$\nwhere $A$ is absorbance and $\\varepsilon$ is the molar extinction coefficient. Copper ions ($Cu^{2+}$) have weak color, but react with excess ammonium hydroxide ($NH_4OH$) to form a deep blue cuprammonium complex:\n$$Cu^{2+} + 4NH_3 \\rightarrow [Cu(NH_3)_4]^{2+} \\quad (\\text{Tetraamminecopper(II)})$$\nThis complex shows maximum absorption ($\\lambda_{\\max}$) at <strong>$620\\text{ nm}$</strong>.\n\n<strong>2. Procedure:</strong>\n1. <strong>Standard Calibration Solutions:</strong> Prepare standard solutions of $CuSO_4$ (e.g., 2, 4, 6, 8, 10 ppm).\n2. Add equal excess volume of $1:1\\text{ }NH_4OH$ to each flask and make up to the mark with distilled water.\n3. Set the colorimeter filter to $620\\text{ nm}$ and zero the instrument with a blank solution (distilled water + $NH_4OH$).\n4. Measure absorbance ($A$) for all standard solutions and plot a calibration curve of $A$ vs Concentration ($c$).\n5. Measure absorbance of the unknown copper solution, and extrapolate the exact concentration from the straight line.\n\n<strong>3. Applications:</strong>\n\u2022 Industrial wastewater monitoring for heavy metal copper contamination.\n\u2022 Quality control in printed circuit board (PCB) etching effluents.",
    "examTip": "Mention the exact formula of the complex [Cu(NH3)4]2+, the maximum wavelength lambda_max = 620 nm, and Beer-Lambert's law equation.",
    "starred": false,
    "mastered": false
  },
  {
    "id": "card-11",
    "subjectId": "chem",
    "unit": 3,
    "pyqTag": "\ud83d\udd25 Asked in SEE July 2026, CIE-2 2026 \u2022 8 Marks",
    "badgeType": "\u26a1 Exception / Trap",
    "badgeLabel": "Polymer Physics",
    "question": "What is Glass Transition Temperature (Tg)? Discuss any three factors affecting the Tg of polymers.",
    "hint": "Tg is the temperature at which a polymer transitions from a hard, glassy/brittle state to a soft, rubbery state. Influenced by chain flexibility, bulky side groups, and plasticizers.",
    "answer": "<strong>1. Definition:</strong>\nThe Glass Transition Temperature ($T_g$) is the narrow temperature range at which an amorphous polymer undergoes a reversible physical transition from a hard, rigid, brittle ('glassy') state to a flexible, compliant, rubbery state due to the onset of long-range segmental motion of the polymer backbone chains.\n\n<strong>2. Three Key Factors Affecting $T_g$:</strong>\n1. <strong>Chain Flexibility:</strong>\n   \u2022 Polymers with flexible backbones (e.g., $-C-O-C-$ or $-Si-O-Si-$ bonds, as in silicones) rotate easily, resulting in a low $T_g$ (e.g., Polydimethylsiloxane $T_g \\approx -125^\\circ\\text{C}$).\n   \u2022 Rigid groups like aromatic rings in the main chain (e.g., Polycarbonate, PET) restrict rotation and increase $T_g$ ($> 140^\\circ\\text{C}$).\n2. <strong>Bulky Side Groups & Steric Hindrance:</strong>\n   \u2022 Bulky pendant side groups restrict rotation of the polymer chain. Polyethylene (no side groups) has $T_g \\approx -120^\\circ\\text{C}$, whereas Polystyrene (with bulky phenyl ring) has $T_g \\approx +100^\\circ\\text{C}$.\n3. <strong>Intermolecular Forces & Polarity:</strong>\n   \u2022 Strong intermolecular dipole-dipole interactions or hydrogen bonding between polymer chains lock them firmly in place, raising $T_g$. (e.g., Nylon-6,6 has high $T_g$ due to extensive interchain hydrogen bonding).\n4. <strong>Plasticizers:</strong>\n   \u2022 Adding small, low-molecular-weight plasticizer molecules increases free volume and weakens intermolecular forces, dramatically lowering $T_g$.",
    "examTip": "Clearly differentiate Tg from melting temperature Tm: Tg is for amorphous segmental rotation, while Tm is the melting of crystalline domains.",
    "starred": false,
    "mastered": false
  },
  {
    "id": "card-12",
    "subjectId": "chem",
    "unit": 3,
    "pyqTag": "\ud83d\udd25 Asked in SEE July 2026, CIE-2 2026 \u2022 6 Marks",
    "badgeType": "\ud83d\udd22 Numerical Pattern",
    "badgeLabel": "Numerical",
    "question": "A polymer sample contains: 45 molecules with molecular mass 12,000 g/mol, 20 molecules with molecular mass 13,000 g/mol, and 35 molecules with molecular mass 14,000 g/mol. Calculate the Number-Average (Mn) and Weight-Average (Mw) molecular weight of the polymer.",
    "hint": "Mn = sum(Ni*Mi) / sum(Ni); Mw = sum(Ni*Mi^2) / sum(Ni*Mi). Always Mw > Mn.",
    "answer": "<strong>1. Formulas for Average Molecular Weights:</strong>\n$$\\bar{M}_n = \\frac{\\sum N_i M_i}{\\sum N_i}, \\quad \\bar{M}_w = \\frac{\\sum N_i M_i^2}{\\sum N_i M_i}$$\n\n<strong>2. Given Data Table:</strong>\n\u2022 Group 1: $N_1 = 45$, $M_1 = 12,000\\text{ g/mol}$\n\u2022 Group 2: $N_2 = 20$, $M_2 = 13,000\\text{ g/mol}$\n\u2022 Group 3: $N_3 = 35$, $M_3 = 14,000\\text{ g/mol}$\n\n<strong>3. Step-by-Step Computations:</strong>\n\u2022 Total number of molecules:\n  $$\\sum N_i = 45 + 20 + 35 = 100$$\n\u2022 Sum of masses $\\sum N_i M_i$:\n  $$N_1 M_1 = 45 \\times 12,000 = 540,000$$\n  $$N_2 M_2 = 20 \\times 13,000 = 260,000$$\n  $$N_3 M_3 = 35 \\times 14,000 = 490,000$$\n  $$\\sum N_i M_i = 540,000 + 260,000 + 490,000 = 1,290,000\\text{ g/mol}$$\n\n\u2022 <strong>Number-Average Molecular Weight ($\\bar{M}_n$):</strong>\n  $$\\bar{M}_n = \\frac{1,290,000}{100} = \\mathbf{12,900\\text{ g/mol}}$$\n\n\u2022 Sum of squared terms $\\sum N_i M_i^2$:\n  $$N_1 M_1^2 = 540,000 \\times 12,000 = 6.480 \\times 10^9$$\n  $$N_2 M_2^2 = 260,000 \\times 13,000 = 3.380 \\times 10^9$$\n  $$N_3 M_3^2 = 490,000 \\times 14,000 = 6.860 \\times 10^9$$\n  $$\\sum N_i M_i^2 = (6.480 + 3.380 + 6.860) \\times 10^9 = 16.720 \\times 10^9$$\n\n\u2022 <strong>Weight-Average Molecular Weight ($\\bar{M}_w$):</strong>\n  $$\\bar{M}_w = \\frac{16.720 \\times 10^9}{1,290,000} = \\mathbf{12,961.24\\text{ g/mol}}$$\n\u2022 Polydispersity Index (PDI) = $\\frac{\\bar{M}_w}{\\bar{M}_n} = \\frac{12,961.24}{12,900} \\approx 1.0047$.",
    "examTip": "Always double-check that Mw >= Mn. If your calculated Mn is greater than Mw, you made an arithmetic error!",
    "starred": false,
    "mastered": false
  },
  {
    "id": "card-13",
    "subjectId": "chem",
    "unit": 3,
    "pyqTag": "\ud83d\udd25 Asked in SEE July 2026, CIE-2 2026 \u2022 8 Marks",
    "badgeType": "\ud83e\uddea Reaction / Mechanism",
    "badgeLabel": "Nanotech & PV",
    "question": "Describe the construction and working of a Quantum Dot Sensitized Solar Cell (QDSSC). Explain the size-dependent properties of Quantum Dots.",
    "hint": "QDSSC replaces organic dye with QDs (CdS, CdSe, PbS). Tunable bandgap Eg = hc/lambda due to quantum confinement.",
    "answer": "<strong>1. Principle & Quantum Confinement:</strong>\nA Quantum Dot Sensitized Solar Cell (QDSSC) is a third-generation photovoltaic device that harvests solar energy using semiconductor quantum dots (QDs, e.g., $CdS, CdSe, PbS$) as light sensitizers.\n\u2022 <strong>Size-Dependent Bandgap:</strong> In quantum dots (< 10 nm), spatial confinement of electron-hole pairs increases the bandgap energy as size decreases:\n  $$E_g(\\text{QD}) = E_g(\\text{bulk}) + \\frac{\\hbar^2 \\pi^2}{2 m^* R^2}$$\n  allowing precise tuning of the absorption spectrum across visible and near-IR regions!\n\n<strong>2. Construction Components:</strong>\n\u2022 <strong>Photoanode:</strong> FTO glass substrate coated with a mesoporous nanocrystalline $TiO_2$ thin film sensitized with adsorbed Quantum Dots ($CdSe/CdS$).\n\u2022 <strong>Counter Electrode:</strong> Platinized FTO or Brass coated with $Cu_2S$ (efficient polysulfide catalyst).\n\u2022 <strong>Electrolyte:</strong> Redox polysulfide couple ($S^{2-} / S_n^{2-}$).\n\n<strong>3. Working Mechanism:</strong>\n1. <strong>Light Absorption:</strong> $QD + h\\nu \\rightarrow QD^*(e^- + h^+)$ (Exciton generation).\n2. <strong>Electron Injection:</strong> Photoexcited electrons are injected into the conduction band of $TiO_2$:\n   $$QD^* \\rightarrow QD^+ + e^- (TiO_2)$$\n3. <strong>Current Generation:</strong> Electrons flow through the external load to the counter electrode.\n4. <strong>Regeneration:</strong> The oxidized $QD^+$ is reduced back by the sulfide electrolyte ($S^{2-}$):\n   $$2QD^+ + S^{2-} \\rightarrow 2QD + S$$\n   The polysulfide is reduced back at the counter electrode: $S_n^{2-} + 2e^- \\rightarrow S_{n-1}^{2-} + S^{2-}$.",
    "examTip": "Mention the Multiple Exciton Generation (MEG) capability of quantum dots where one high-energy photon generates >1 electron-hole pair.",
    "starred": false,
    "mastered": false
  },
  {
    "id": "card-14",
    "subjectId": "chem",
    "unit": 4,
    "pyqTag": "\ud83d\udd25 Asked in SEE July 2026, CIE-2 2026 \u2022 8 Marks",
    "badgeType": "\u26a1 Exception / Trap",
    "badgeLabel": "Material Comparison",
    "question": "Discuss the different types of organic semiconductors used in memory devices. Distinguish between organic and inorganic memory devices.",
    "hint": "Organic memory devices use conjugated small molecules (pentacene) or polymers; inorganic use silicon/metal oxides. Compare flexibility, cost, speed.",
    "answer": "<strong>1. Types of Organic Memory Materials:</strong>\n\u2022 <strong>Small Conjugated Molecules:</strong> Pentacene, Rubrene, Alq3 (form highly ordered crystal thin films via vacuum evaporation).\n\u2022 <strong>Conjugated Conducting Polymers:</strong> Polyaniline (PANI), Poly(3-hexylthiophene) (P3HT), PEDOT:PSS.\n\u2022 <strong>Charge-Transfer Complexes:</strong> Tetrathiafulvalene-TCNQ (TTF-TCNQ).\n\n<strong>2. Comparison: Organic vs. Inorganic Memory Devices:</strong>\n<div class=\"overflow-x-auto my-2\">\n<table class=\"w-full text-xs text-left border border-slate-300\">\n<thead class=\"bg-slate-100\"><tr><th class=\"p-1 border\">Parameter</th><th class=\"p-1 border\">Organic Memory</th><th class=\"p-1 border\">Inorganic Memory (Si)</th></tr></thead>\n<tbody>\n<tr><td class=\"p-1 border font-semibold\">Substrate & Flexibility</td><td class=\"p-1 border\">Highly flexible (plastics, paper, textiles)</td><td class=\"p-1 border\">Rigid, brittle Silicon wafers</td></tr>\n<tr><td class=\"p-1 border font-semibold\">Processing Cost</td><td class=\"p-1 border\">Low-cost solution/inkjet printing</td><td class=\"p-1 border\">Very high (clean rooms, lithography)</td></tr>\n<tr><td class=\"p-1 border font-semibold\">Switching Speed</td><td class=\"p-1 border\">Moderate to slow (microsecond scale)</td><td class=\"p-1 border\">Ultra-fast (nanosecond scale)</td></tr>\n<tr><td class=\"p-1 border font-semibold\">Retention & Endurance</td><td class=\"p-1 border\">10\u2074 - 10\u2075 cycles (limited endurance)</td><td class=\"p-1 border\">> 10\u00b9\u00b2 cycles (very high endurance)</td></tr>\n<tr><td class=\"p-1 border font-semibold\">Power Consumption</td><td class=\"p-1 border\">Ultra-low operating power</td><td class=\"p-1 border\">Higher writing voltages</td></tr>\n</tbody>\n</table>\n</div>",
    "examTip": "Present the comparison as a clean table with 5 clear parameters to score full 8/8 marks effortlessly.",
    "starred": false,
    "mastered": false
  },
  {
    "id": "card-15",
    "subjectId": "chem",
    "unit": 4,
    "pyqTag": "\ud83d\udd25 Asked in SEE July 2026 \u2022 6 Marks",
    "badgeType": "\ud83e\uddea Reaction / Mechanism",
    "badgeLabel": "Display Tech",
    "question": "Distinguish between Organic Light Emitting Diodes (OLED) and Quantum Dot Light Emitting Diodes (QLED). Mention their relative advantages.",
    "hint": "OLED uses organic carbon-based emissive layers (true blacks, infinite contrast); QLED uses inorganic quantum dots illuminated by backlight or electro-emission.",
    "answer": "<strong>1. Structural & Operational Differences:</strong>\n<div class=\"overflow-x-auto my-2\">\n<table class=\"w-full text-xs text-left border border-slate-300\">\n<thead class=\"bg-slate-100\"><tr><th class=\"p-1 border\">Feature</th><th class=\"p-1 border\">OLED (Organic LED)</th><th class=\"p-1 border\">QLED (Quantum Dot LED)</th></tr></thead>\n<tbody>\n<tr><td class=\"p-1 border font-semibold\">Emissive Material</td><td class=\"p-1 border\">Organic thin films (small molecules/polymers)</td><td class=\"p-1 border\">Inorganic semiconductor nanocrystals (CdSe/ZnS)</td></tr>\n<tr><td class=\"p-1 border font-semibold\">Light Emission</td><td class=\"p-1 border\">Self-emissive per pixel (each sub-pixel glows)</td><td class=\"p-1 border\">QD layer excited by blue LED backlight or direct current</td></tr>\n<tr><td class=\"p-1 border font-semibold\">Black Levels & Contrast</td><td class=\"p-1 border\">Infinite contrast (pixels turn off completely)</td><td class=\"p-1 border\">Slight backlight leakage, slightly lower black levels</td></tr>\n<tr><td class=\"p-1 border font-semibold\">Peak Brightness</td><td class=\"p-1 border\">Moderate (~800 - 1500 nits)</td><td class=\"p-1 border\">Extremely high (> 2000 - 4000 nits)</td></tr>\n<tr><td class=\"p-1 border font-semibold\">Burn-in Risk</td><td class=\"p-1 border\">Susceptible to permanent image retention (burn-in)</td><td class=\"p-1 border\">Immune to burn-in (inorganic stability)</td></tr>\n<tr><td class=\"p-1 border font-semibold\">Lifespan</td><td class=\"p-1 border\">Blue organic sub-pixels degrade faster</td><td class=\"p-1 border\">Significantly longer operating lifespan</td></tr>\n</tbody>\n</table>\n</div>",
    "examTip": "Mention that OLED provides perfect blacks (infinite contrast) while QLED provides higher peak brightness and immunity to burn-in.",
    "starred": false,
    "mastered": false
  },
  {
    "id": "card-16",
    "subjectId": "chem",
    "unit": 5,
    "pyqTag": "\ud83d\udd25 Asked in SEE July 2026, CIE-2 2026 \u2022 8 Marks",
    "badgeType": "\ud83e\uddea Reaction / Mechanism",
    "badgeLabel": "Synthesis & E-Waste",
    "question": "What are nanomaterials? Describe the preparation of Zinc Oxide (ZnO) nanoparticles by the solution combustion method.",
    "hint": "Nanomaterials have at least one dimension 1-100 nm. Solution combustion mixes zinc nitrate (oxidizer) and glycine/urea (fuel) and ignites at 400\u00b0C.",
    "answer": "<strong>1. Definition of Nanomaterials:</strong>\nNanomaterials are materials with structural components or grain sizes having at least one dimension in the nanoscale range of <strong>$1\\text{ to }100\\text{ nm}$</strong>, showing novel physical/chemical properties distinct from bulk material due to high surface area to volume ratio and quantum confinement.\n\n<strong>2. Solution Combustion Synthesis of ZnO Nanoparticles:</strong>\n\u2022 <strong>Principle:</strong> An exothermic, self-sustaining redox reaction between an oxidizing precursor (metal nitrate) and an organic reducing fuel (glycine, urea, or citric acid) in aqueous medium.\n\u2022 <strong>Precursors:</strong>\n  - Oxidizer: Zinc Nitrate hexahydrate [$Zn(NO_3)_2 \\cdot 6H_2O$]\n  - Fuel: Glycine [$NH_2CH_2COOH$] or Urea [$CO(NH_2)_2$]\n\u2022 <strong>Procedure:</strong>\n  1. Dissolve stoichiometric ratio of $Zn(NO_3)_2$ and glycine in minimum volume of deionized water in a silica crucible.\n  2. Stir well to form a clear homogeneous aqueous precursor solution.\n  3. Introduce the crucible into a muffle furnace preheated to $400^\\circ\\text{C}-500^\\circ\\text{C}$.\n  4. The solution boils, dehydrates into a viscous gel, and then auto-ignites with a vigorous flame and voluminous liberation of harmless gases ($N_2, CO_2, H_2O$).\n  5. Yields high-purity, white foamy nanocrystalline $ZnO$ nanopowder.\n\u2022 <strong>Balanced Combustion Reaction:</strong>\n  $$9 Zn(NO_3)_2 + 10 NH_2CH_2COOH \\rightarrow 9 ZnO(s) + 20 CO_2 \\uparrow + 25 H_2O \\uparrow + 14 N_2 \\uparrow$$",
    "examTip": "Write the stoichiometry: Zinc nitrate is the oxidizer and Glycine is the fuel. Mention the rapid exothermic reaction.",
    "starred": false,
    "mastered": false
  },
  {
    "id": "card-17",
    "subjectId": "chem",
    "unit": 5,
    "pyqTag": "\ud83d\udd25 Asked in SEE July 2026 \u2022 6 Marks",
    "badgeType": "\u26a1 Exception / Trap",
    "badgeLabel": "Environmental Chemistry",
    "question": "Elaborate on the toxic materials used in the manufacture of electronic devices and the environmental/health hazards posed by improper e-waste disposal.",
    "hint": "Key toxics: Lead (solder), Cadmium (contacts/batteries), Mercury (switches/backlights), Hexavalent Chromium (corrosion protection), BFRs.",
    "answer": "<strong>1. Major Toxic Heavy Metals & Chemicals in Electronics:</strong>\n\u2022 <strong>Lead ($Pb$):</strong> Used in cathode ray tubes (CRTs) and tin-lead solder. Causes severe central nervous system damage, kidney failure, and cognitive impairment in children.\n\u2022 <strong>Cadmium ($Cd$):</strong> Present in SMD chip resistors, infrared detectors, and Ni-Cd batteries. Highly nephrotoxic; bioaccumulates in bones causing Itai-Itai disease.\n\u2022 <strong>Mercury ($Hg$):</strong> Used in flat panel fluorescent backlights and tilt switches. Chronic exposure causes neurological tremors, brain damage, and bioaccumulation as methylmercury in aquatic food chains.\n\u2022 <strong>Hexavalent Chromium ($Cr^{VI}$):</strong> Used for anti-corrosion passivation coatings on chassis. Powerful human carcinogen and causes severe DNA lesions.\n\u2022 <strong>Brominated Flame Retardants (BFRs):</strong> Added to printed circuit boards (PCBs) and plastic casings. Disrupt endocrine thyroid hormones and release carcinogenic polybrominated dioxins during open burning.\n\n<strong>2. Environmental Hazards:</strong>\n\u2022 <strong>Groundwater Contamination:</strong> Acidic landfill leachate dissolves heavy metals, contaminating drinking aquifers.\n\u2022 <strong>Toxic Air Emissions:</strong> Open-air incineration of wires/PCBs releases dioxins, furans, and toxic particulates.",
    "examTip": "Name all 5 hazardous substances (RoHS list: Pb, Cd, Hg, Cr(VI), BFRs) and describe specific biological and environmental damages.",
    "starred": false,
    "mastered": false
  },
  {
    "id": "card-18",
    "subjectId": "math",
    "unit": 1,
    "pyqTag": "\ud83d\udd25 Asked in SEE July 2026, CIE-1/2 2026 \u2022 7 Marks",
    "badgeType": "\ud83d\udd22 Numerical Pattern",
    "badgeLabel": "Root Finding",
    "question": "Give the geometrical interpretation of the Newton-Raphson method. Find a negative root of the equation x e^x - sin x = 0 correct to three decimal places using the Newton-Raphson method.",
    "hint": "Geometrical meaning: Tangent drawn at (x_n, f(x_n)) intersects the x-axis at x_{n+1}. Use formula x_{n+1} = x_n - f(x_n)/f'(x_n).",
    "answer": "<strong>1. Geometrical Interpretation:</strong>\nLet $y = f(x)$ be a smooth curve. If $x_0$ is an initial guess near root $\\alpha$, draw a tangent to the curve at $(x_0, f(x_0))$. The slope is $f'(x_0)$.\nThe tangent equation is $y - f(x_0) = f'(x_0)(x - x_0)$.\nSetting $y = 0$ gives the x-intercept $x_1$:\n$$0 - f(x_0) = f'(x_0)(x_1 - x_0) \\implies \\mathbf{x_1 = x_0 - \\frac{f(x_0)}{f'(x_0)}}$$\nThus, Newton-Raphson replaces the curve by its tangent line at each iteration.\n\n<strong>2. Numerical Solution for $f(x) = x e^x - \\sin x = 0$:</strong>\n\u2022 Note: $x = 0$ is a trivial root. We seek a <strong>negative root</strong>.\n\u2022 $f'(x) = e^x + x e^x - \\cos x = (1+x)e^x - \\cos x$.\n\u2022 Testing negative values:\n  - $f(-3) = -3 e^{-3} - \\sin(-3) = -3(0.0498) - (-0.1411) = -0.1494 + 0.1411 = -0.0083$\n  - Let $x_0 = -3.1$.\n  - At $x_0 = -3.1$:\n    $f(-3.1) = -3.1 e^{-3.1} - \\sin(-3.1) = -3.1(0.0450) - (-0.0416) = -0.1396 + 0.0416 = -0.098$\n\u2022 Iterating $x_{n+1} = x_n - \\frac{f(x_n)}{f'(x_n)}$:\n  - At $x_0 = -3.0$:\n    $f(-3) = -0.0083$\n    $f'(-3) = (1-3)e^{-3} - \\cos(-3) = -2(0.0498) - (-0.990) = -0.0996 + 0.990 = +0.8904$\n    $$x_1 = -3 - \\left(\\frac{-0.0083}{0.8904}\\right) = -3 + 0.0093 = -2.9907$$\n  - Evaluating at $x_1 = -2.9907$:\n    $f(-2.9907) \\approx 0.0000$\n\u2022 Hence, the negative root correct to 3 decimal places is $\\mathbf{-2.991}$ (or approx $\\mathbf{-3.041}$ depending on initial bracket).",
    "examTip": "Always switch your calculator to RADIAN mode when evaluating trigonometric functions (sin x, cos x) in calculus!",
    "starred": false,
    "mastered": false
  },
  {
    "id": "card-19",
    "subjectId": "math",
    "unit": 1,
    "pyqTag": "\ud83d\udd25 Asked in SEE Feb 2026 \u2022 7 Marks",
    "badgeType": "\ud83d\udcd0 Derivation / Formula",
    "badgeLabel": "Multivariable Jacobian",
    "question": "If u = x\u00b2 + y\u00b2 + z\u00b2, v = xy + yz + zx, and w = x + y + z, find the Jacobian \u2202(u, v, w) / \u2202(x, y, z) and deduce the functional relation between u, v, and w.",
    "hint": "Compute the determinant of the 3x3 partial derivative matrix. If Jacobian is identically 0, a functional relation w^2 = u + 2v exists.",
    "answer": "<strong>1. Jacobian Definition:</strong>\n$$J = \\frac{\\partial(u,v,w)}{\\partial(x,y,z)} = \\begin{vmatrix} u_x & u_y & u_z \\\\ v_x & v_y & v_z \\\\ w_x & w_y & w_z \\end{vmatrix}$$\n\n<strong>2. Computing Partial Derivatives:</strong>\n\u2022 For $u = x^2+y^2+z^2$: $u_x = 2x, u_y = 2y, u_z = 2z$\n\u2022 For $v = xy+yz+zx$: $v_x = y+z, v_y = x+z, v_z = x+y$\n\u2022 For $w = x+y+z$: $w_x = 1, w_y = 1, w_z = 1$\n\n<strong>3. Evaluating the Determinant:</strong>\n$$J = \\begin{vmatrix} 2x & 2y & 2z \\\\ y+z & x+z & x+y \\\\ 1 & 1 & 1 \\end{vmatrix}$$\n\u2022 Factor out 2 from Row 1:\n  $$J = 2 \\begin{vmatrix} x & y & z \\\\ y+z & x+z & x+y \\\\ 1 & 1 & 1 \\end{vmatrix}$$\n\u2022 Apply row operation $R_2 \\rightarrow R_2 + R_1$:\n  $$R_2 = (x+y+z, x+y+z, x+y+z) = w(1, 1, 1)$$\n\u2022 Since Row 2 is now a scalar multiple of Row 3 ($(1, 1, 1)$), the determinant has two identical proportional rows!\n  $$\\mathbf{J = \\frac{\\partial(u,v,w)}{\\partial(x,y,z)} = 0}$$\n\n<strong>4. Functional Relation:</strong>\nSince $J = 0$, $u, v, w$ are functionally dependent.\n\u2022 Expanding $w^2$:\n  $$w^2 = (x+y+z)^2 = x^2+y^2+z^2 + 2(xy+yz+zx)$$\n  $$\\mathbf{w^2 = u + 2v} \\quad \\text{or} \\quad \\mathbf{w^2 - u - 2v = 0}$$",
    "examTip": "State the theorem: A vanishing Jacobian J = 0 is the necessary and sufficient condition for functional dependence.",
    "starred": false,
    "mastered": false
  },
  {
    "id": "card-20",
    "subjectId": "math",
    "unit": 2,
    "pyqTag": "\ud83d\udd25 Asked in SEE Feb 2026, CIE-1 2026 \u2022 7 Marks",
    "badgeType": "\ud83d\udcd0 Derivation / Formula",
    "badgeLabel": "Vector Calculus",
    "question": "Show that F = (x\u00b2 - y\u00b2 + x) i - (2xy + y) j is an irrotational vector. Hence find its scalar potential function \u03c6 such that F = \u2207\u03c6.",
    "hint": "Vector is irrotational if curl F = \u2207 x F = 0. Then integrate d\u03c6 = Fx dx + Fy dy + Fz dz.",
    "answer": "<strong>1. Condition for Irrotational Vector:</strong>\nA vector field $\\vec{F} = F_1 \\hat{i} + F_2 \\hat{j} + F_3 \\hat{k}$ is irrotational if $\\text{curl }\\vec{F} = \\nabla \\times \\vec{F} = 0$.\nHere: $F_1 = x^2 - y^2 + x$, $F_2 = -(2xy + y)$, $F_3 = 0$.\n\n<strong>2. Computing Curl:</strong>\n$$\\nabla \\times \\vec{F} = \\begin{vmatrix} \\hat{i} & \\hat{j} & \\hat{k} \\\\ \\frac{\\partial}{\\partial x} & \\frac{\\partial}{\\partial y} & \\frac{\\partial}{\\partial z} \\\\ x^2-y^2+x & -(2xy+y) & 0 \\end{vmatrix}$$\n\u2022 $\\hat{i}\\left(0 - 0\\right) - \\hat{j}\\left(0 - 0\\right) + \\hat{k}\\left(\\frac{\\partial}{\\partial x}(-2xy-y) - \\frac{\\partial}{\\partial y}(x^2-y^2+x)\\right)$\n\u2022 $= \\hat{k}\\left(-2y - (-2y)\\right) = \\hat{k}(-2y + 2y) = \\mathbf{0}$\nThus, $\\vec{F}$ is <strong>irrotational</strong>.\n\n<strong>3. Finding Scalar Potential $\\phi$ ($d\\phi = \\nabla\\phi \\cdot d\\vec{r} = \\vec{F} \\cdot d\\vec{r}$):</strong>\n$$d\\phi = (x^2 - y^2 + x)dx - (2xy + y)dy$$\n\u2022 $\\frac{\\partial \\phi}{\\partial x} = x^2 - y^2 + x \\implies \\phi = \\frac{x^3}{3} - x y^2 + \\frac{x^2}{2} + g(y)$\n\u2022 Differentiating with respect to $y$:\n  $$\\frac{\\partial \\phi}{\\partial y} = -2xy + g'(y) = -(2xy + y) = -2xy - y$$\n\u2022 Equating gives: $g'(y) = -y \\implies g(y) = -\\frac{y^2}{2} + C$.\n\u2022 <strong>Final Scalar Potential:</strong>\n  $$\\mathbf{\\phi(x,y) = \\frac{x^3}{3} + \\frac{x^2}{2} - x y^2 - \\frac{y^2}{2} + C}$$",
    "examTip": "Always add the arbitrary constant of integration C to the scalar potential function.",
    "starred": false,
    "mastered": false
  },
  {
    "id": "card-21",
    "subjectId": "math",
    "unit": 2,
    "pyqTag": "\ud83d\udd25 Asked in SEE Feb 2026, CIE-1 \u2022 7 Marks",
    "badgeType": "\ud83d\udcd0 Derivation / Formula",
    "badgeLabel": "Directional Derivative",
    "question": "Find the directional derivative of \u03c6 = x y z\u00b2 + x z at the point (1, 1, 1) in the direction of the outward normal to the surface 3 x y\u00b2 + y = z taken at the point (0, 1, 1).",
    "hint": "Directional derivative = \u2207\u03c6 \u00b7 (n\u0302). First find \u2207\u03c6 at (1,1,1), then find normal vector N = \u2207(3xy\u00b2 + y - z) at (0,1,1) and normalize it.",
    "answer": "<strong>1. Gradient of $\\phi = x y z^2 + x z$:</strong>\n$$\\nabla \\phi = \\frac{\\partial \\phi}{\\partial x}\\hat{i} + \\frac{\\partial \\phi}{\\partial y}\\hat{j} + \\frac{\\partial \\phi}{\\partial z}\\hat{k} = (y z^2 + z)\\hat{i} + (x z^2)\\hat{j} + (2 x y z + x)\\hat{k}$$\n\u2022 Evaluating at the point $(1, 1, 1)$:\n  $$\\nabla \\phi_{(1,1,1)} = (1(1)^2 + 1)\\hat{i} + (1(1)^2)\\hat{j} + (2(1)(1)(1) + 1)\\hat{k} = \\mathbf{2\\hat{i} + \\hat{j} + 3\\hat{k}}$$\n\n<strong>2. Outward Normal to Surface $f(x, y, z) = 3 x y^2 + y - z = 0$:</strong>\n$$\\vec{N} = \\nabla f = (3 y^2)\\hat{i} + (6 x y + 1)\\hat{j} + (-1)\\hat{k}$$\n\u2022 Evaluating at the given surface point $(0, 1, 1)$:\n  $$\\vec{N}_{(0,1,1)} = 3(1)^2\\hat{i} + (6(0)(1) + 1)\\hat{j} - \\hat{k} = \\mathbf{3\\hat{i} + \\hat{j} - \\hat{k}}$$\n\u2022 Unit Normal Vector $\\hat{n}$:\n  $$|\\vec{N}| = \\sqrt{3^2 + 1^2 + (-1)^2} = \\sqrt{9 + 1 + 1} = \\sqrt{11}$$\n  $$\\hat{n} = \\frac{3\\hat{i} + \\hat{j} - \\hat{k}}{\\sqrt{11}}$$\n\n<strong>3. Computing Directional Derivative:</strong>\n$$\\text{D.D.} = \\nabla \\phi \\cdot \\hat{n} = (2\\hat{i} + \\hat{j} + 3\\hat{k}) \\cdot \\left(\\frac{3\\hat{i} + \\hat{j} - \\hat{k}}{\\sqrt{11}}\\right)$$\n$$\\text{D.D.} = \\frac{2(3) + 1(1) + 3(-1)}{\\sqrt{11}} = \\frac{6 + 1 - 3}{\\sqrt{11}} = \\mathbf{\\frac{4}{\\sqrt{11}}}$$",
    "examTip": "Make sure to evaluate \u2207\u03c6 at (1,1,1) but evaluate the surface normal \u2207f at (0,1,1). Don't mix up the points!",
    "starred": false,
    "mastered": false
  },
  {
    "id": "card-22",
    "subjectId": "math",
    "unit": 3,
    "pyqTag": "\ud83d\udd25 Asked in SEE July 2026, CIE-1 2026 \u2022 7 Marks",
    "badgeType": "\ud83d\udd22 Numerical Pattern",
    "badgeLabel": "Linear Systems",
    "question": "Solve the following system of linear equations using the Gauss-Seidel iterative method by taking (0, 0, 0) as the initial approximation. Perform 3 iterations: \nx + 8y + 2z = -4 \n2x - y + 20z = 74 \n10x + 2y + z = 59",
    "hint": "First rearrange equations to ensure strict diagonal dominance (|a_ii| > sum |a_ij|).",
    "answer": "<strong>1. Rearranging for Strict Diagonal Dominance:</strong>\nThe coefficient matrix must satisfy $|a_{ii}| \\ge \\sum_{j \\ne i} |a_{ij}|$:\n\u2022 Eq (1): $10x + 2y + z = 59$ (since $10 > 2 + 1$)\n\u2022 Eq (2): $x + 8y + 2z = -4$ (since $8 > 1 + 2$)\n\u2022 Eq (3): $2x - y + 20z = 74$ (since $20 > 2 + 1$)\n\n<strong>2. Expressing Iteration Formulae:</strong>\n$$x^{(k+1)} = \\frac{1}{10}\\left(59 - 2y^{(k)} - z^{(k)}\\right)$$\n$$y^{(k+1)} = \\frac{1}{8}\\left(-4 - x^{(k+1)} - 2z^{(k)}\\right)$$\n$$z^{(k+1)} = \\frac{1}{20}\\left(74 - 2x^{(k+1)} + y^{(k+1)}\\right)$$\n\n<strong>3. Iteration Steps (Initial: $x^{(0)}=0, y^{(0)}=0, z^{(0)}=0$):</strong>\n\u2022 <strong>Iteration 1:</strong>\n  $x^{(1)} = \\frac{59 - 0 - 0}{10} = 5.9$\n  $y^{(1)} = \\frac{-4 - 5.9 - 0}{8} = \\frac{-9.9}{8} = -1.2375$\n  $z^{(1)} = \\frac{74 - 2(5.9) + (-1.2375)}{20} = \\frac{60.9625}{20} = 3.0481$\n\n\u2022 <strong>Iteration 2:</strong>\n  $x^{(2)} = \\frac{59 - 2(-1.2375) - 3.0481}{10} = \\frac{59 + 2.475 - 3.0481}{10} = 5.8427$\n  $y^{(2)} = \\frac{-4 - 5.8427 - 2(3.0481)}{8} = \\frac{-15.9389}{8} = -1.9924$\n  $z^{(2)} = \\frac{74 - 2(5.8427) + (-1.9924)}{20} = \\frac{60.3222}{20} = 3.0161$\n\n\u2022 <strong>Iteration 3:</strong>\n  $x^{(3)} = \\frac{59 - 2(-1.9924) - 3.0161}{10} = \\frac{59 + 3.9848 - 3.0161}{10} = \\mathbf{5.9969}$\n  $y^{(3)} = \\frac{-4 - 5.9969 - 2(3.0161)}{8} = \\frac{-16.0291}{8} = \\mathbf{-2.0036}$\n  $z^{(3)} = \\frac{74 - 2(5.9969) + (-2.0036)}{20} = \\frac{60.0026}{20} = \\mathbf{3.0001}$\n\n(Exact theoretical solution is $x = 6, y = -2, z = 3$).",
    "examTip": "Gauss-Seidel uses the freshly updated values of variables immediately in the SAME iteration, unlike Gauss-Jacobi which waits for the next iteration.",
    "starred": false,
    "mastered": false
  },
  {
    "id": "card-23",
    "subjectId": "math",
    "unit": 3,
    "pyqTag": "\ud83d\udd25 Asked in SEE Feb 2026, CIE-2 \u2022 7 Marks",
    "badgeType": "\ud83d\udd22 Numerical Pattern",
    "badgeLabel": "Matrix Differential Eq",
    "question": "Solve the following system of first-order ordinary differential equations using the matrix method: y\u2081' = y\u2081 + y\u2082, y\u2082' = 4y\u2081 - 2y\u2082, with initial conditions y\u2081(0) = 1, y\u2082(0) = 6.",
    "hint": "Write in matrix form Y' = A Y. Find eigenvalues of A, then eigenvectors. Y(t) = c1 e^(\u03bb1 t) v1 + c2 e^(\u03bb2 t) v2.",
    "answer": "<strong>1. Matrix Representation:</strong>\n$$\\begin{bmatrix} y_1' \\\\ y_2' \\end{bmatrix} = \\begin{bmatrix} 1 & 1 \\\\ 4 & -2 \\end{bmatrix} \\begin{bmatrix} y_1 \\\\ y_2 \\end{bmatrix} \\implies Y' = A Y$$\n\n<strong>2. Characteristic Equation and Eigenvalues:</strong>\n$$|A - \\lambda I| = \\begin{vmatrix} 1-\\lambda & 1 \\\\ 4 & -2-\\lambda \\end{vmatrix} = 0$$\n$$(1-\\lambda)(-2-\\lambda) - 4 = \\lambda^2 + \\lambda - 6 = 0 \\implies (\\lambda + 3)(\\lambda - 2) = 0$$\nEigenvalues: $\\mathbf{\\lambda_1 = 2}, \\mathbf{\\lambda_2 = -3}$.\n\n<strong>3. Eigenvectors:</strong>\n\u2022 For $\\lambda_1 = 2$:\n  $$\\begin{bmatrix} -1 & 1 \\\\ 4 & -4 \\end{bmatrix} \\begin{bmatrix} v_1 \\\\ v_2 \\end{bmatrix} = \\begin{bmatrix} 0 \\\\ 0 \\end{bmatrix} \\implies -v_1 + v_2 = 0 \\implies v_1 = v_2 \\implies \\vec{v}_1 = \\begin{bmatrix} 1 \\\\ 1 \\end{bmatrix}$$\n\u2022 For $\\lambda_2 = -3$:\n  $$\\begin{bmatrix} 4 & 1 \\\\ 4 & 1 \\end{bmatrix} \\begin{bmatrix} v_1 \\\\ v_2 \\end{bmatrix} = \\begin{bmatrix} 0 \\\\ 0 \\end{bmatrix} \\implies 4v_1 + v_2 = 0 \\implies v_2 = -4v_1 \\implies \\vec{v}_2 = \\begin{bmatrix} 1 \\\\ -4 \\end{bmatrix}$$\n\n<strong>4. General Solution:</strong>\n$$Y(t) = c_1 e^{2t} \\begin{bmatrix} 1 \\\\ 1 \\end{bmatrix} + c_2 e^{-3t} \\begin{bmatrix} 1 \\\\ -4 \\end{bmatrix}$$\n$$y_1(t) = c_1 e^{2t} + c_2 e^{-3t}, \\quad y_2(t) = c_1 e^{2t} - 4c_2 e^{-3t}$$\n\n<strong>5. Applying Initial Conditions ($y_1(0)=1, y_2(0)=6$):</strong>\n$$c_1 + c_2 = 1$$\n$$c_1 - 4c_2 = 6$$\nSubtracting: $5c_2 = -5 \\implies c_2 = -1$.\nThen $c_1 = 1 - c_2 = 1 - (-1) = 2$.\n\u2022 <strong>Final Particular Solution:</strong>\n  $$\\mathbf{y_1(t) = 2e^{2t} - e^{-3t}}, \\quad \\mathbf{y_2(t) = 2e^{2t} + 4e^{-3t}}$$",
    "examTip": "Verify your initial conditions: y1(0) = 2 - 1 = 1, y2(0) = 2 + 4 = 6. Matches given values perfectly!",
    "starred": false,
    "mastered": false
  },
  {
    "id": "card-24",
    "subjectId": "math",
    "unit": 4,
    "pyqTag": "\ud83d\udd25 Asked in SEE Feb 2026, CIE-2 \u2022 7 Marks",
    "badgeType": "\ud83d\udcd0 Derivation / Formula",
    "badgeLabel": "Linear Algebra",
    "question": "Construct an orthonormal basis for R\u00b3 using the Gram-Schmidt process given the linearly independent vectors: x\u2081 = [1, 1, 1]\u1d40, x\u2082 = [-1, 0, 1]\u1d40, x\u2083 = [-1, 2, 3]\u1d40.",
    "hint": "Step 1: v1 = x1. Step 2: v2 = x2 - (x2\u00b7v1/v1\u00b7v1)v1. Step 3: v3 = x3 - (x3\u00b7v1/v1\u00b7v1)v1 - (x3\u00b7v2/v2\u00b7v2)v2. Normalize each: u_i = v_i / ||v_i||.",
    "answer": "<strong>1. Gram-Schmidt Orthogonalization Algorithm:</strong>\nGiven basis $\\{x_1, x_2, x_3\\}$, find orthogonal basis $\\{v_1, v_2, v_3\\}$:\n\n<strong>2. Step-by-Step Calculation:</strong>\n\u2022 <strong>Step 1: First orthogonal vector:</strong>\n  $$v_1 = x_1 = \\begin{bmatrix} 1 \\\\ 1 \\\\ 1 \\end{bmatrix}$$\n  $$\\langle v_1, v_1 \\rangle = 1^2 + 1^2 + 1^2 = 3$$\n\n\u2022 <strong>Step 2: Second orthogonal vector:</strong>\n  $$\\langle x_2, v_1 \\rangle = (-1)(1) + (0)(1) + (1)(1) = -1 + 0 + 1 = 0$$\n  $$v_2 = x_2 - \\frac{\\langle x_2, v_1 \\rangle}{\\langle v_1, v_1 \\rangle} v_1 = x_2 - 0 = \\begin{bmatrix} -1 \\\\ 0 \\\\ 1 \\end{bmatrix}$$\n  $$\\langle v_2, v_2 \\rangle = (-1)^2 + 0^2 + 1^2 = 2$$\n\n\u2022 <strong>Step 3: Third orthogonal vector:</strong>\n  $$\\langle x_3, v_1 \\rangle = (-1)(1) + (2)(1) + (3)(1) = -1 + 2 + 3 = 4$$\n  $$\\langle x_3, v_2 \\rangle = (-1)(-1) + (2)(0) + (3)(1) = 1 + 0 + 3 = 4$$\n  $$v_3 = x_3 - \\frac{\\langle x_3, v_1 \\rangle}{\\langle v_1, v_1 \\rangle} v_1 - \\frac{\\langle x_3, v_2 \\rangle}{\\langle v_2, v_2 \\rangle} v_2$$\n  $$v_3 = \\begin{bmatrix} -1 \\\\ 2 \\\\ 3 \\end{bmatrix} - \\frac{4}{3}\\begin{bmatrix} 1 \\\\ 1 \\\\ 1 \\end{bmatrix} - \\frac{4}{2}\\begin{bmatrix} -1 \\\\ 0 \\\\ 1 \\end{bmatrix} = \\begin{bmatrix} -1 - \\frac{4}{3} + 2 \\\\ 2 - \\frac{4}{3} + 0 \\\\ 3 - \\frac{4}{3} - 2 \\end{bmatrix} = \\begin{bmatrix} -1/3 \\\\ 2/3 \\\\ -1/3 \\end{bmatrix}$$\n  Multiply by 3 for convenience: $v_3' = \\begin{bmatrix} -1 \\\\ 2 \\\\ -1 \\end{bmatrix}$. (Length $= \\sqrt{1+4+1} = \\sqrt{6}$).\n\n<strong>3. Normalization (Orthonormal Basis $\\{u_1, u_2, u_3\\}$):</strong>\n$$\\mathbf{u_1 = \\frac{1}{\\sqrt{3}}\\begin{bmatrix} 1 \\\\ 1 \\\\ 1 \\end{bmatrix}, \\quad u_2 = \\frac{1}{\\sqrt{2}}\\begin{bmatrix} -1 \\\\ 0 \\\\ 1 \\end{bmatrix}, \\quad u_3 = \\frac{1}{\\sqrt{6}}\\begin{bmatrix} -1 \\\\ 2 \\\\ -1 \\end{bmatrix}}$$",
    "examTip": "Check dot products: u1 \u00b7 u2 = -1 + 0 + 1 = 0; u1 \u00b7 u3 = -1 + 2 - 1 = 0; u2 \u00b7 u3 = 1 + 0 - 1 = 0. All mutually orthogonal!",
    "starred": false,
    "mastered": false
  },
  {
    "id": "card-25",
    "subjectId": "math",
    "unit": 5,
    "pyqTag": "\ud83d\udd25 Asked in SEE July 2026, CIE-2 \u2022 7 Marks",
    "badgeType": "\ud83d\udd22 Numerical Pattern",
    "badgeLabel": "Numerical Integration",
    "question": "Use Runge-Kutta fourth-order method to estimate the value of y(2.1) taking step size h = 0.1 given dy/dx = y - x\u00b2 with initial condition y(2) = 5.",
    "hint": "Formulas: k1 = h f(x0, y0), k2 = h f(x0 + h/2, y0 + k1/2), k3 = h f(x0 + h/2, y0 + k2/2), k4 = h f(x0 + h, y0 + k3). y1 = y0 + (1/6)(k1 + 2k2 + 2k3 + k4).",
    "answer": "<strong>1. Given Differential Equation & Initial Parameters:</strong>\n\u2022 $f(x, y) = y - x^2$\n\u2022 $x_0 = 2, \\quad y_0 = 5, \\quad h = 0.1 \\implies x_1 = 2.1$.\n\n<strong>2. Step-by-Step RK4 Coefficients:</strong>\n\u2022 <strong>$k_1$:</strong>\n  $$k_1 = h \\cdot f(x_0, y_0) = 0.1 \\times [5 - 2^2] = 0.1 \\times 1 = \\mathbf{0.1000}$$\n\n\u2022 <strong>$k_2$:</strong>\n  $$x_0 + \\frac{h}{2} = 2 + 0.05 = 2.05, \\quad y_0 + \\frac{k_1}{2} = 5 + 0.05 = 5.05$$\n  $$f(2.05, 5.05) = 5.05 - (2.05)^2 = 5.05 - 4.2025 = 0.8475$$\n  $$k_2 = 0.1 \\times 0.8475 = \\mathbf{0.08475}$$\n\n\u2022 <strong>$k_3$:</strong>\n  $$x_0 + \\frac{h}{2} = 2.05, \\quad y_0 + \\frac{k_2}{2} = 5 + \\frac{0.08475}{2} = 5.042375$$\n  $$f(2.05, 5.042375) = 5.042375 - 4.2025 = 0.839875$$\n  $$k_3 = 0.1 \\times 0.839875 = \\mathbf{0.0839875}$$\n\n\u2022 <strong>$k_4$:</strong>\n  $$x_0 + h = 2.1, \\quad y_0 + k_3 = 5 + 0.0839875 = 5.0839875$$\n  $$f(2.1, 5.0839875) = 5.0839875 - (2.1)^2 = 5.0839875 - 4.41 = 0.6739875$$\n  $$k_4 = 0.1 \\times 0.6739875 = \\mathbf{0.06739875}$$\n\n<strong>3. Final Weighted Update:</strong>\n$$y(2.1) = y_0 + \\frac{1}{6}\\left(k_1 + 2k_2 + 2k_3 + k_4\\right)$$\n$$\\Delta y = \\frac{1}{6}[0.1000 + 2(0.08475) + 2(0.0839875) + 0.06739875] = \\frac{1}{6}[0.50487375] = 0.084146$$\n$$\\mathbf{y(2.1) = 5 + 0.084146 = 5.0841}$$",
    "examTip": "Keep at least 4 to 6 decimal places during intermediate steps of RK4 to avoid premature rounding error.",
    "starred": false,
    "mastered": false
  },
  {
    "id": "card-26",
    "subjectId": "cprog",
    "unit": 1,
    "pyqTag": "\ud83d\udd25 Asked in SEE Feb 2026, CIE-1 2025 \u2022 8 Marks",
    "badgeType": "\ud83d\udcd0 Derivation / Formula",
    "badgeLabel": "C Basics",
    "question": "Explain the fundamental structure of a C program with an annotated diagram. Write a C program to read coordinates (x1, y1) and (x2, y2) and compute the straight-line distance.",
    "hint": "Use formula d = sqrt(pow(x2-x1, 2) + pow(y2-y1, 2)) from <math.h>. Sections: Documentation, Preprocessor, Globals, main().",
    "answer": "<strong>1. Structure of a C Program:</strong>\n\u2022 <strong>Documentation Section:</strong> Comments indicating author, date, and program purpose (/* ... */).\n\u2022 <strong>Link / Preprocessor Section:</strong> Header file inclusions (#include &lt;stdio.h&gt;, #include &lt;math.h&gt;).\n\u2022 <strong>Definition Section:</strong> Symbolic constant declarations (#define PI 3.14159).\n\u2022 <strong>Global Declaration Section:</strong> Global variables and user-defined function prototypes.\n\u2022 <strong>main() Function:</strong> Execution entry point consisting of local declarations and executable statements.\n\u2022 <strong>Sub-program Section:</strong> User-defined function definitions.\n\n<strong>2. C Program for Euclidean Distance:</strong>\n<pre class=\"bg-slate-900 text-slate-100 p-3 rounded-lg overflow-x-auto\"><code>#include &lt;stdio.h&gt;\n#include &lt;math.h&gt;\n\nint main() {\n    double x1, y1, x2, y2, distance;\n    printf(\"Enter coordinates of point 1 (x1 y1): \");\n    scanf(\"%lf %lf\", &x1, &y1);\n    printf(\"Enter coordinates of point 2 (x2 y2): \");\n    scanf(\"%lf %lf\", &x2, &y2);\n\n    /* Formula: sqrt((x2 - x1)^2 + (y2 - y1)^2) */\n    distance = sqrt(pow(x2 - x1, 2) + pow(y2 - y1, 2));\n\n    printf(\"Straight-line Euclidean Distance = %.4lf\\n\", distance);\n    return 0;\n}</code></pre>",
    "examTip": "Remember to include <math.h> and note that when compiling via gcc on Linux/VTU labs, the -lm linker flag is required.",
    "starred": false,
    "mastered": false
  },
  {
    "id": "card-27",
    "subjectId": "cprog",
    "unit": 2,
    "pyqTag": "\ud83d\udd25 Asked in SEE Feb 2026 \u2022 8 Marks",
    "badgeType": "\u26a1 Exception / Trap",
    "badgeLabel": "Control Flow",
    "question": "List the key differences between while loop and do-while loop. Write a C program to determine whether a given triangle is equilateral, isosceles, or scalene based on its side lengths.",
    "hint": "While is entry-controlled (checks condition before executing body); do-while is exit-controlled (executes body at least once). Check triangle inequality first!",
    "answer": "<strong>1. Differences Between while and do-while:</strong>\n<div class=\"overflow-x-auto my-2\">\n<table class=\"w-full text-xs text-left border border-slate-300\">\n<thead class=\"bg-slate-100\"><tr><th class=\"p-1 border\">Feature</th><th class=\"p-1 border\">while Loop</th><th class=\"p-1 border\">do-while Loop</th></tr></thead>\n<tbody>\n<tr><td class=\"p-1 border font-semibold\">Loop Type</td><td class=\"p-1 border\">Entry-controlled loop</td><td class=\"p-1 border\">Exit-controlled loop</td></tr>\n<tr><td class=\"p-1 border font-semibold\">Condition Test</td><td class=\"p-1 border\">Tested BEFORE entering body</td><td class=\"p-1 border\">Tested AFTER executing body</td></tr>\n<tr><td class=\"p-1 border font-semibold\">Min. Executions</td><td class=\"p-1 border\">0 times (if initial condition is false)</td><td class=\"p-1 border\">At least 1 time guaranteed</td></tr>\n<tr><td class=\"p-1 border font-semibold\">Syntax Semicolon</td><td class=\"p-1 border\">No semicolon after while(cond)</td><td class=\"p-1 border\">Terminated by semicolon: while(cond);</td></tr>\n</tbody>\n</table>\n</div>\n\n<strong>2. C Program for Triangle Classification:</strong>\n<pre class=\"bg-slate-900 text-slate-100 p-3 rounded-lg overflow-x-auto\"><code>#include &lt;stdio.h&gt;\n\nint main() {\n    float a, b, c;\n    printf(\"Enter three sides of the triangle: \");\n    scanf(\"%f %f %f\", &a, &b, &c);\n\n    /* Step 1: Validate Triangle Inequality Theorem */\n    if (a + b &gt; c && a + c &gt; b && b + c &gt; a) {\n        if (a == b && b == c) {\n            printf(\"The triangle is EQUILATERAL.\\n\");\n        } else if (a == b || b == c || a == c) {\n            printf(\"The triangle is ISOSCELES.\\n\");\n        } else {\n            printf(\"The triangle is SCALENE.\\n\");\n        }\n    } else {\n        printf(\"Invalid sides: These lengths do NOT form a triangle.\\n\");\n    }\n    return 0;\n}</code></pre>",
    "examTip": "Always validate the Triangle Inequality Theorem (a + b > c && a + c > b && b + c > a) before classifying to prevent invalid triangles (e.g. 1, 2, 10).",
    "starred": false,
    "mastered": false
  },
  {
    "id": "card-28",
    "subjectId": "cprog",
    "unit": 3,
    "pyqTag": "\ud83d\udd25 Asked in SEE Feb 2026, CIE-2 2026 \u2022 8 Marks",
    "badgeType": "\ud83d\udcd0 Derivation / Formula",
    "badgeLabel": "String Manipulation",
    "question": "Write a complete C program to compare two strings character-by-character without using the built-in library function strcmp().",
    "hint": "Iterate while both characters are non-null and equal. If mismatch occurs, compute str1[i] - str2[i].",
    "answer": "<strong>1. Logic & Algorithm:</strong>\nIterate simultaneously across both string arrays using an index $i$. As long as characters at position $i$ are identical and neither has encountered the null terminator (\\0), increment $i$. When a mismatch occurs, return $(s1[i] - s2[i])$. If both reach \\0 together, strings are equal (diff = 0).\n\n<strong>2. Complete C Program:</strong>\n<pre class=\"bg-slate-900 text-slate-100 p-3 rounded-lg overflow-x-auto\"><code>#include &lt;stdio.h&gt;\n\nint main() {\n    char str1[100], str2[100];\n    int i = 0, diff = 0;\n\n    printf(\"Enter string 1: \");\n    scanf(\"%s\", str1);\n    printf(\"Enter string 2: \");\n    scanf(\"%s\", str2);\n\n    /* Compare character by character */\n    while (str1[i] != '\\0' && str2[i] != '\\0') {\n        if (str1[i] != str2[i]) {\n            diff = str1[i] - str2[i];\n            break;\n        }\n        i++;\n    }\n\n    if (diff == 0 && str1[i] == '\\0' && str2[i] == '\\0') {\n        printf(\"Strings are IDENTICAL (Equal).\\n\");\n    } else if (diff &gt; 0 || (diff == 0 && str1[i] != '\\0')) {\n        printf(\"String 1 is GREATER than String 2.\\n\");\n    } else {\n        printf(\"String 1 is SMALLER than String 2.\\n\");\n    }\n    return 0;\n}</code></pre>",
    "examTip": "Mention that the difference returned is based on ASCII values of the first mismatched characters.",
    "starred": false,
    "mastered": false
  },
  {
    "id": "card-29",
    "subjectId": "cprog",
    "unit": 4,
    "pyqTag": "\ud83d\udd25 Asked in SEE Feb 2026, CIE-2 2026 \u2022 8 Marks",
    "badgeType": "\ud83d\udcd0 Derivation / Formula",
    "badgeLabel": "Recursion",
    "question": "Define a function. Explain the four categories of user-defined functions in C with examples. Write a recursive C program to compute the factorial of a number.",
    "hint": "Categories: No args + No return; With args + No return; No args + With return; With args + With return. Base case for factorial: n <= 1 return 1.",
    "answer": "<strong>1. Function Categories:</strong>\n1. <strong>No Arguments & No Return Value:</strong> \\`void printHeader(void);\\` - purely performs side-effects (e.g., printing banner).\n2. <strong>Arguments but No Return Value:</strong> \\`void displaySum(int a, int b);\\` - caller passes values, function displays output internally.\n3. <strong>No Arguments but Has Return Value:</strong> \\`int readAge(void);\\` - function reads input from user and sends value back.\n4. <strong>Arguments and Has Return Value:</strong> \\`float calculateTax(float salary);\\` - most versatile modular pattern.\n\n<strong>2. Recursive Factorial Program:</strong>\n<pre class=\"bg-slate-900 text-slate-100 p-3 rounded-lg overflow-x-auto\"><code>#include &lt;stdio.h&gt;\n\nlong long factorial(int n) {\n    if (n &lt;= 1) {\n        return 1; /* Base Case */\n    }\n    return n * factorial(n - 1); /* Recursive Step */\n}\n\nint main() {\n    int num;\n    printf(\"Enter a non-negative integer: \");\n    scanf(\"%d\", &num);\n    if (num &lt; 0) {\n        printf(\"Factorial of negative numbers is undefined.\\n\");\n    } else {\n        printf(\"Factorial of %d = %lld\\n\", num, factorial(num));\n    }\n    return 0;\n}</code></pre>",
    "examTip": "Use 'long long' return type for factorials because n > 12 overflows a standard 32-bit signed int!",
    "starred": false,
    "mastered": false
  },
  {
    "id": "card-30",
    "subjectId": "cprog",
    "unit": 5,
    "pyqTag": "\ud83d\udd25 Asked in SEE Feb 2026, CIE-2 2026 \u2022 8 Marks",
    "badgeType": "\ud83d\udcd0 Derivation / Formula",
    "badgeLabel": "Pointers & Structs",
    "question": "Write a C program using an array of structures to read marks of 3 students in 3 subjects. Calculate the total marks scored student-wise and subject-wise, and display the result in a neat tabular format.",
    "hint": "Declare struct Student { char name[50]; int marks[3]; int total; };. Loop over students and subjects.",
    "answer": "<strong>1. C Program with Array of Structures:</strong>\n<pre class=\"bg-slate-900 text-slate-100 p-3 rounded-lg overflow-x-auto\"><code>#include &lt;stdio.h&gt;\n\nstruct Student {\n    char name[30];\n    int marks[3];\n    int total;\n};\n\nint main() {\n    struct Student s[3];\n    int subjectTotal[3] = {0, 0, 0};\n    int i, j;\n\n    /* Input Data */\n    for (i = 0; i &lt; 3; i++) {\n        s[i].total = 0;\n        printf(\"Enter Student %d name: \", i + 1);\n        scanf(\"%s\", s[i].name);\n        for (j = 0; j &lt; 3; j++) {\n            printf(\"  Marks in Subject %d: \", j + 1);\n            scanf(\"%d\", &s[i].marks[j]);\n            s[i].total += s[i].marks[j];\n            subjectTotal[j] += s[i].marks[j];\n        }\n    }\n\n    /* Output Table */\n    printf(\"\\n--- STUDENT PERFORMANCE REPORT ---\\n\");\n    printf(\"%-15s %-8s %-8s %-8s %-8s\\n\", \"Name\", \"Sub 1\", \"Sub 2\", \"Sub 3\", \"Total\");\n    for (i = 0; i &lt; 3; i++) {\n        printf(\"%-15s %-8d %-8d %-8d %-8d\\n\", s[i].name, s[i].marks[0], s[i].marks[1], s[i].marks[2], s[i].total);\n    }\n    printf(\"%-15s %-8d %-8d %-8d\\n\", \"Subject Total\", subjectTotal[0], subjectTotal[1], subjectTotal[2]);\n    return 0;\n}</code></pre>",
    "examTip": "Initialize accumulator variables (s[i].total = 0 and subjectTotal[j] = 0) before reading marks to avoid garbage values.",
    "starred": false,
    "mastered": false
  },
  {
    "id": "card-31",
    "subjectId": "ai",
    "unit": 1,
    "pyqTag": "\ud83d\udd25 Asked in SEE July 2026, CIE-1 2026 \u2022 8 Marks",
    "badgeType": "\ud83d\udcd0 Derivation / Formula",
    "badgeLabel": "Search Algorithms",
    "question": "Explain uninformed search strategies. Trace Breadth-First Search (BFS) and Depth-First Search (DFS) on a binary tree and compare them in terms of data structures, completeness, time complexity, and space complexity.",
    "hint": "BFS uses FIFO Queue and finds shallowest shortest path (O(b^d) memory); DFS uses LIFO Stack (O(bm) memory).",
    "answer": "<strong>1. Definitions:</strong>\n\u2022 <strong>Uninformed (Blind) Search:</strong> Algorithms that have no domain-specific knowledge about how close a state is to the goal, other than traversing graph nodes systematically.\n\u2022 <strong>Breadth-First Search (BFS):</strong> Explores the shallowest unexpanded nodes first layer-by-layer using a <strong>First-In-First-Out (FIFO) Queue</strong>.\n\u2022 <strong>Depth-First Search (DFS):</strong> Explores the deepest node first along a single branch before backtracking using a <strong>Last-In-First-Out (LIFO) Stack</strong>.\n\n<strong>2. Detailed Comparative Metric Table:</strong>\n<div class=\"overflow-x-auto my-2\">\n<table class=\"w-full text-xs text-left border border-slate-300\">\n<thead class=\"bg-slate-100\"><tr><th class=\"p-1 border\">Criterion</th><th class=\"p-1 border\">Breadth-First Search (BFS)</th><th class=\"p-1 border\">Depth-First Search (DFS)</th></tr></thead>\n<tbody>\n<tr><td class=\"p-1 border font-semibold\">Data Structure</td><td class=\"p-1 border\">FIFO Queue</td><td class=\"p-1 border\">LIFO Stack (or recursion)</td></tr>\n<tr><td class=\"p-1 border font-semibold\">Completeness</td><td class=\"p-1 border\">Yes (if branching factor $b$ is finite)</td><td class=\"p-1 border\">No (fails in infinite depth graphs without cycle checking)</td></tr>\n<tr><td class=\"p-1 border font-semibold\">Optimality</td><td class=\"p-1 border\">Yes (for uniform step costs)</td><td class=\"p-1 border\">No (may return non-optimal deep solution)</td></tr>\n<tr><td class=\"p-1 border font-semibold\">Time Complexity</td><td class=\"p-1 border\">$O(b^d)$ (where $d$ is goal depth)</td><td class=\"p-1 border\">$O(b^m)$ (where $m$ is maximum tree depth)</td></tr>\n<tr><td class=\"p-1 border font-semibold\">Space Complexity</td><td class=\"p-1 border\">$O(b^d)$ (Critical drawback - severe memory exhaustion)</td><td class=\"p-1 border\">$O(b \\cdot m)$ (Linear, extremely memory efficient)</td></tr>\n</tbody>\n</table>\n</div>",
    "examTip": "Always emphasize space complexity: BFS requires exponential O(b^d) space which quickly exhausts RAM, whereas DFS requires only linear O(b*m) space.",
    "starred": false,
    "mastered": false
  },
  {
    "id": "card-32",
    "subjectId": "ai",
    "unit": 2,
    "pyqTag": "\ud83d\udd25 Asked in SEE July 2026, CIE-1 2026 \u2022 7 Marks",
    "badgeType": "\u26a1 Exception / Trap",
    "badgeLabel": "Generative AI",
    "question": "Explain Zero-shot, One-shot, and Few-shot prompting techniques with concrete examples. Describe the role of system prompts in controlling LLM behavior.",
    "hint": "Zero-shot gives no examples; One-shot provides 1 demonstration; Few-shot provides 2-5 demonstrations to establish pattern.",
    "answer": "<strong>1. Prompting Techniques:</strong>\n\u2022 <strong>Zero-Shot Prompting:</strong> The user gives a task instruction to the model without providing any examples:\n  - <em>Example:</em> \"Classify the sentiment of this review: 'The battery lasts only 2 hours.' Output: [Positive / Negative]\" $\\rightarrow$ Model predicts \"Negative\".\n\u2022 <strong>One-Shot Prompting:</strong> Provides exactly one high-quality input-output demonstration to guide the format:\n  - <em>Example:</em>\n    \"Input: 'Amazing display and crystal clear audio.' -> Output: Positive\n     Input: 'Charging cable broke after 3 days.' -> Output:\"\n\u2022 <strong>Few-Shot Prompting:</strong> Provides multiple (2 to 5) diverse demonstrations, teaching the model complex edge cases or specialized schemas:\n  - <em>Example:</em> Providing 3 examples of converting natural language SQL queries into valid SQLite syntax.\n\n<strong>2. Role of System Prompts:</strong>\n\u2022 A <strong>System Prompt</strong> establishes the foundational identity, persona, behavior boundaries, safety guardrails, and output format for the LLM before user inputs are processed.\n\u2022 <strong>Key Functions:</strong>\n  1. <strong>Constraint Enforcement:</strong> Forcing JSON-only replies or academic tone.\n  2. <strong>Role Grounding:</strong> e.g., \"You are an expert MSRIT examiner evaluating VTU chemistry cycle papers.\"\n  3. <strong>Hallucination Reduction:</strong> Instructing the model: \"If the exact answer is not present in the provided notes, reply 'Information not found' rather than guessing.\" ",
    "examTip": "Provide clear, labeled input-output prompt pairs for Zero-shot, One-shot, and Few-shot to earn all 7 marks.",
    "starred": false,
    "mastered": false
  },
  {
    "id": "card-33",
    "subjectId": "ai",
    "unit": 3,
    "pyqTag": "\ud83d\udd25 Asked in SEE July 2026 \u2022 7 Marks",
    "badgeType": "\ud83d\udcd0 Derivation / Formula",
    "badgeLabel": "Machine Learning Core",
    "question": "Explain the mathematical foundation and working principle of the Naive Bayes Classification algorithm. Why is it termed 'Naive'?",
    "hint": "Bayes Theorem: P(C|X) = [P(X|C) * P(C)] / P(X). 'Naive' because it assumes all features are conditionally independent given class label.",
    "answer": "<strong>1. Bayes' Theorem Mathematical Foundation:</strong>\nFor a sample vector with features $X = (x_1, x_2, \\dots, x_n)$ and class label $C_k$:\n$$P(C_k \\mid X) = \\frac{P(X \\mid C_k) \\cdot P(C_k)}{P(X)}$$\n\u2022 $P(C_k \\mid X)$: Posterior probability of class given features.\n\u2022 $P(C_k)$: Prior probability of class $C_k$.\n\u2022 $P(X \\mid C_k)$: Likelihood of observing features $X$ given class $C_k$.\n\u2022 $P(X)$: Marginal evidence probability (constant across all classes).\n\n<strong>2. Why is it Called 'Naive'?:</strong>\nIt makes the strong (often unrealistic) <strong>conditional independence assumption</strong> that all features $x_i$ and $x_j$ are completely independent of each other given the class:\n$$P(X \\mid C_k) = P(x_1, x_2, \\dots, x_n \\mid C_k) = \\prod_{i=1}^n P(x_i \\mid C_k)$$\nThis dramatically simplifies computational complexity from exponential to linear $O(n \\cdot k)$, while performing remarkably well in text classification and spam filtering!\n\n<strong>3. Classification Decision Rule (MAP):</strong>\n$$\\hat{y} = \\arg\\max_{k \\in \\{1, \\dots, K\\}} P(C_k) \\prod_{i=1}^n P(x_i \\mid C_k)$$",
    "examTip": "State explicitly that P(X) can be omitted during classification because it is a constant scaling factor for all candidate classes.",
    "starred": false,
    "mastered": false
  },
  {
    "id": "card-34",
    "subjectId": "ai",
    "unit": 4,
    "pyqTag": "\ud83d\udd25 Asked in SEE July 2026 \u2022 10 Marks",
    "badgeType": "\ud83d\udcd0 Derivation / Formula",
    "badgeLabel": "AI Architectures",
    "question": "Define an Expert System. Detail its core architectural components (Knowledge Base, Inference Engine, User Interface) and discuss its significance in complex engineering decision-making.",
    "hint": "Components: Knowledge Base (rules/facts), Inference Engine (forward/backward chaining), User Interface, Explanation Facility.",
    "answer": "<strong>1. Definition:</strong>\nAn Expert System is a specialized AI program that emulates the decision-making and problem-solving abilities of a human domain expert by applying logical inference rules over an extensive knowledge base.\n\n<strong>2. Core Architectural Components:</strong>\n\u2022 <strong>1. Knowledge Base:</strong>\n  - Contains factual domain knowledge and heuristic operational rules formatted typically as production rules: \\`IF (condition) THEN (action / conclusion)\\`.\n\u2022 <strong>2. Inference Engine:</strong>\n  - The reasoning brain of the system. Applies logic to the knowledge base:\n    - <em>Forward Chaining (Data-driven):</em> Begins with known facts and applies rules to deduce new conclusions.\n    - <em>Backward Chaining (Goal-driven):</em> Begins with a target hypothesis and searches backward for supporting facts.\n\u2022 <strong>3. User Interface:</strong>\n  - Allows non-technical human operators to input query symptoms and view expert diagnostics.\n\u2022 <strong>4. Explanation Facility:</strong>\n  - Crucial component that explains the chain of reasoning ('HOW' and 'WHY' a particular conclusion was reached).\n\u2022 <strong>5. Knowledge Acquisition Module:</strong>\n  - Facilitates updating and expanding rules from domain experts.\n\n<strong>3. Engineering Significance:</strong>\n\u2022 Medical diagnostics (e.g., MYCIN), VLSI chip fault isolation, power grid load management, and aerospace failure diagnostics.",
    "examTip": "Mention the two primary reasoning strategies: Forward Chaining (data-driven) and Backward Chaining (goal-driven).",
    "starred": false,
    "mastered": false
  },
  {
    "id": "card-35",
    "subjectId": "ai",
    "unit": 5,
    "pyqTag": "\ud83d\udd25 Asked in SEE July 2026 \u2022 10 Marks",
    "badgeType": "\ud83d\udcd0 Derivation / Formula",
    "badgeLabel": "Robotics",
    "question": "List the different types of industrial robots based on their coordinate system and mechanical anatomy. Describe their features and work volume configurations.",
    "hint": "5 configurations: Cartesian (gantry), Cylindrical, Spherical (polar), Articulated (jointed-arm), SCARA. Compare work volume shapes.",
    "answer": "<strong>1. Industrial Robot Classification & Work Envelopes:</strong>\n<div class=\"overflow-x-auto my-2\">\n<table class=\"w-full text-xs text-left border border-slate-300\">\n<thead class=\"bg-slate-100\"><tr><th class=\"p-1 border\">Robot Type</th><th class=\"p-1 border\">Joint Types</th><th class=\"p-1 border\">Work Volume Shape</th><th class=\"p-1 border\">Typical Application</th></tr></thead>\n<tbody>\n<tr><td class=\"p-1 border font-semibold\">Cartesian / Gantry</td><td class=\"p-1 border\">3 Prismatic (Linear, PPP)</td><td class=\"p-1 border\">Rectangular Box / Prism</td><td class=\"p-1 border\">Pick-and-place, 3D printing, CNC milling</td></tr>\n<tr><td class=\"p-1 border font-semibold\">Cylindrical</td><td class=\"p-1 border\">1 Revolute + 2 Prismatic (RPP)</td><td class=\"p-1 border\">Cylinder with hollow core</td><td class=\"p-1 border\">Assembly, machine tool loading/unloading</td></tr>\n<tr><td class=\"p-1 border font-semibold\">Spherical / Polar</td><td class=\"p-1 border\">2 Revolute + 1 Prismatic (RRP)</td><td class=\"p-1 border\">Portion of a Sphere</td><td class=\"p-1 border\">Welding, die casting, material transfer</td></tr>\n<tr><td class=\"p-1 border font-semibold\">SCARA</td><td class=\"p-1 border\">2 Revolute (parallel) + 1 Linear</td><td class=\"p-1 border\">Cylindrical slice</td><td class=\"p-1 border\">High-speed PCB electronic assembly</td></tr>\n<tr><td class=\"p-1 border font-semibold\">Articulated / Jointed</td><td class=\"p-1 border\">All Revolute (typically 6 DOF)</td><td class=\"p-1 border\">Irregular complex sphere</td><td class=\"p-1 border\">Automotive spot welding, spray painting</td></tr>\n</tbody>\n</table>\n</div>\n\n<strong>2. Key Anatomy Features:</strong>\n\u2022 <strong>Degrees of Freedom (DOF):</strong> Number of independent joint motions (typically 4 to 6).\n\u2022 <strong>Work Volume (Work Envelope):</strong> The entire spatial boundary within 3D space that the robot's end-effector (wrist/tool) can reach.",
    "examTip": "Specify the joint sequence (e.g. Cartesian = PPP, Cylindrical = RPP, SCARA = RRRP) and draw the work envelope shapes.",
    "starred": false,
    "mastered": false
  },
  {
    "id": "card-36",
    "subjectId": "mech",
    "unit": 1,
    "pyqTag": "\ud83d\udd25 Asked in SEE July 2026, CIE-1 2026 \u2022 8 Marks",
    "badgeType": "\ud83d\udcd0 Derivation / Formula",
    "badgeLabel": "Power Plants",
    "question": "Explain with a neat schematic diagram the construction and working of a Hydroelectric (Hydel) Power Plant. Mention its merits and demerits.",
    "hint": "Components: Reservoir, Dam, Penstock, Surge Tank, Control Gate, Hydraulic Turbine, Generator, Tailrace.",
    "answer": "<strong>1. Working Principle:</strong>\nA hydroelectric power plant converts the potential energy of water stored at an elevated reservoir into kinetic energy through a penstock, and then into mechanical rotational energy via a water turbine, which drives an electric generator.\n\n<strong>2. Main Components:</strong>\n\u2022 <strong>Reservoir & Dam:</strong> Stores water during rainy seasons and creates the required artificial hydraulic head ($H$).\n\u2022 <strong>Trash Rack & Control Gate:</strong> Prevents floating debris from entering and regulates water flow rate.\n\u2022 <strong>Penstock:</strong> High-pressure reinforced steel or concrete conduit conveying water from reservoir to turbine.\n\u2022 <strong>Surge Tank:</strong> Installed near the turbine end of long penstocks to relieve water hammer pressure shocks when the turbine gate abruptly shuts!\n\u2022 <strong>Hydraulic Turbine (Pelton / Francis / Kaplan):</strong> Converts kinetic energy into torque.\n\u2022 <strong>Tailrace:</strong> Discharges used water back to the river downstream.\n\n<strong>3. Power Generated Formula:</strong>\n$$P = \\eta \\cdot \\rho \\cdot g \\cdot Q \\cdot H \\quad (\\text{in Watts})$$\nwhere $\\rho = 1000\\text{ kg/m}^3$, $g = 9.81\\text{ m/s}^2$, $Q = \\text{discharge in m}^3\\text{/s}$, $H = \\text{effective head in meters}$.\n\n<strong>4. Merits & Demerits:</strong>\n\u2022 <strong>Merits:</strong> Zero greenhouse gas emissions, low operational and maintenance cost, rapid start-up (ideal for peak load management).\n\u2022 <strong>Demerits:</strong> High initial capital cost, long gestation period, displacement of local communities and ecosystem disruption.",
    "examTip": "Always mention the critical function of the 'Surge Tank': absorbing water hammer shocks during sudden valve closure.",
    "starred": false,
    "mastered": false
  },
  {
    "id": "card-37",
    "subjectId": "mech",
    "unit": 2,
    "pyqTag": "\ud83d\udd25 Asked in SEE July 2026, CIE-1 2026 \u2022 10 Marks",
    "badgeType": "\ud83d\udcd0 Derivation / Formula",
    "badgeLabel": "Machine Tools",
    "question": "With neat sketches, explain the following lathe machining operations: (i) Plain Turning, (ii) Knurling, (iii) Taper Turning by swiveling compound rest, and (iv) Thread Cutting.",
    "hint": "Turning reduces diameter; Knurling produces diamond grip pattern; Taper turning swivels compound rest at tan alpha = (D-d)/(2L); Thread cutting synchronizes lead screw via half-nut.",
    "answer": "<strong>1. Lathe Machining Operations:</strong>\n\u2022 <strong>(i) Plain (Cylindrical) Turning:</strong>\n  - The cutting tool feeds parallel to the axis of rotation of the cylindrical workpiece to remove excess material and reduce its diameter uniformly over a specified length.\n\u2022 <strong>(ii) Knurling:</strong>\n  - An embossing operation that does NOT cut metal. A hardened knurling tool with patterned rollers is pressed hard against the revolving workpiece surface, creating a rough diamond or straight-line serrated pattern to provide a firm ergonomic finger grip (e.g. micrometers, gauge handles).\n\u2022 <strong>(iii) Taper Turning by Swiveling Compound Rest:</strong>\n  - Used for producing steep, short tapers. The compound rest base is unclamped and swiveled through a calculated half-taper angle $\\alpha$:\n    $$\\tan \\alpha = \\frac{D - d}{2 L} \\implies \\alpha = \\tan^{-1}\\left(\\frac{D - d}{2 L}\\right)$$\n    where $D$ is major diameter, $d$ is minor diameter, and $L$ is taper length. The tool is fed manually along the compound rest handwheel.\n\u2022 <strong>(iv) Thread Cutting:</strong>\n  - Generates helical grooves on cylindrical surfaces. The lathe lead screw is engaged with the carriage via a <strong>Half-Nut mechanism</strong>, synchronizing spindle rotation with linear carriage feed at a ratio determined by the change-gear train:\n    $$\\frac{\\text{Driver Teeth}}{\\text{Driven Teeth}} = \\frac{\\text{Pitch of work to be cut}}{\\text{Pitch of lead screw}}$$",
    "examTip": "State the exact compound rest swivel angle formula tan(alpha) = (D - d) / (2L) to secure full numerical/theoretical marks.",
    "starred": false,
    "mastered": false
  },
  {
    "id": "card-38",
    "subjectId": "mech",
    "unit": 3,
    "pyqTag": "\ud83d\udd25 Asked in SEE July 2026, CIE-2 2026 \u2022 10 Marks",
    "badgeType": "\ud83d\udd22 Numerical Pattern",
    "badgeLabel": "IC Engine Calculations",
    "question": "After a test on a single-cylinder 4-stroke diesel engine, the following data were recorded: Cylinder bore D = 160 mm, Stroke length L = 200 mm, Mean Effective Pressure MEP = 7.5 bar, Engine speed N = 400 rpm, Torque on brake drum T = 190 N\u00b7m, Fuel consumption = 2.8 kg/hr, Calorific Value CV = 41,800 kJ/kg. Calculate: (i) Indicated Power, (ii) Brake Power, (iii) Frictional Power, and (iv) Brake Thermal Efficiency.",
    "hint": "For 4-stroke: n = N/2 = 200 power strokes/min. IP = (P_m * L * A * n) / 60, BP = (2 * pi * N * T) / 60000. eta_bth = BP / (m_f * CV).",
    "answer": "<strong>1. Given Data & Conversions:</strong>\n\u2022 Bore $D = 160\\text{ mm} = 0.16\\text{ m} \\implies A = \\frac{\\pi}{4} D^2 = \\frac{\\pi}{4}(0.16)^2 = 0.020106\\text{ m}^2$\n\u2022 Stroke $L = 200\\text{ mm} = 0.20\\text{ m}$\n\u2022 $P_m = 7.5\\text{ bar} = 7.5 \\times 10^5\\text{ N/m}^2$\n\u2022 Speed $N = 400\\text{ rpm}$. For a 4-stroke engine, power strokes per minute $n = \\frac{N}{2} = 200$.\n\u2022 Torque $T = 190\\text{ N}\\cdot\\text{m}$\n\u2022 Fuel consumption $\\dot{m}_f = 2.8\\text{ kg/hr} = \\frac{2.8}{3600} = 7.778 \\times 10^{-4}\\text{ kg/s}$\n\u2022 $CV = 41,800\\text{ kJ/kg} = 41.8 \\times 10^6\\text{ J/kg}$\n\n<strong>2. Step-by-Step Calculations:</strong>\n\u2022 <strong>(i) Indicated Power (IP):</strong>\n  $$IP = \\frac{P_m \\cdot L \\cdot A \\cdot n}{60} = \\frac{7.5 \\times 10^5 \\times 0.20 \\times 0.020106 \\times 200}{60} = \\mathbf{10.053\\text{ kW}}$$\n\n\u2022 <strong>(ii) Brake Power (BP):</strong>\n  $$BP = \\frac{2 \\pi N T}{60,000} = \\frac{2 \\times \\pi \\times 400 \\times 190}{60,000} = \\frac{477,522}{60,000} = \\mathbf{7.959\\text{ kW}}$$\n\n\u2022 <strong>(iii) Frictional Power (FP):</strong>\n  $$FP = IP - BP = 10.053 - 7.959 = \\mathbf{2.094\\text{ kW}}$$\n\n\u2022 <strong>(iv) Brake Thermal Efficiency ($\\eta_{bth}$):</strong>\n  $$\\text{Heat Input Rate} = \\dot{m}_f \\times CV = 7.778 \\times 10^{-4} \\times 41,800 = 32.511\\text{ kW}$$\n  $$\\eta_{bth} = \\frac{BP}{\\dot{m}_f \\times CV} = \\frac{7.959}{32.511} = 0.2448 = \\mathbf{24.48\\%}$$",
    "examTip": "For 4-stroke engines, n = N/2 power strokes per minute! Dividing by 2 is the most common exam pitfall.",
    "starred": false,
    "mastered": false
  },
  {
    "id": "card-39",
    "subjectId": "mech",
    "unit": 4,
    "pyqTag": "\ud83d\udd25 Asked in SEE July 2026, CIE-2 2026 \u2022 8 Marks",
    "badgeType": "\ud83d\udcd0 Derivation / Formula",
    "badgeLabel": "Power Transmission",
    "question": "Sketch a simple and compound gear train mechanism and derive the expression for their velocity ratio (Train Value).",
    "hint": "Simple gear train: Speed ratio N1/Nn = Tn/T1 (intermediate idle gears do not affect magnitude). Compound gear train: N1/Nn = Product of teeth on driven / Product on driver.",
    "answer": "<strong>1. Simple Gear Train:</strong>\n\u2022 Consists of a series of gears where each shaft carries only <strong>ONE single gear</strong>.\n\u2022 Let Driver Gear 1 have speed $N_1$ and teeth $T_1$, intermediate idler gear 2 have $N_2, T_2$, and driven gear 3 have $N_3, T_3$:\n  $$\\frac{N_1}{N_2} = \\frac{T_2}{T_1}, \\quad \\frac{N_2}{N_3} = \\frac{T_3}{T_2}$$\n\u2022 Multiplying both ratios:\n  $$\\frac{N_1}{N_2} \\times \\frac{N_2}{N_3} = \\frac{T_2}{T_1} \\times \\frac{T_3}{T_2} \\implies \\mathbf{\\frac{N_1}{N_3} = \\frac{T_3}{T_1}}$$\n\u2022 <em>Conclusion:</em> Intermediate idle gears change only the direction of rotation, not the numerical speed ratio!\n\n<strong>2. Compound Gear Train:</strong>\n\u2022 At least one intermediate shaft carries <strong>TWO or more rigidly coupled gears</strong> rotating at the identical angular velocity ($N_2 = N_3$).\n\u2022 Train Value ($TV$):\n  $$TV = \\frac{\\text{Speed of Last Driven Gear}}{\\text{Speed of First Driver Gear}} = \\frac{\\text{Product of Teeth on Driving Gears}}{\\text{Product of Teeth on Driven Gears}}$$\n  $$\\mathbf{\\frac{N_{\\text{first}}}{N_{\\text{last}}} = \\frac{\\prod \\text{Teeth on Driven Gears}}{\\prod \\text{Teeth on Driver Gears}}}$$",
    "examTip": "Highlight that intermediate gears in a simple gear train are called IDLE GEARS and have zero influence on overall gear ratio.",
    "starred": false,
    "mastered": false
  },
  {
    "id": "card-40",
    "subjectId": "mech",
    "unit": 5,
    "pyqTag": "\ud83d\udd25 Asked in SEE July 2026 \u2022 10 Marks",
    "badgeType": "\u26a1 Exception / Trap",
    "badgeLabel": "EV & Automations",
    "question": "Differentiate between Battery Electric Vehicles (EV) and Hybrid Electric Vehicles (HEV). Discuss regenerative braking with a functional block diagram.",
    "hint": "EV uses battery + electric motor only; HEV uses ICE + electric motor. Regenerative braking runs motor as generator to recharge battery.",
    "answer": "<strong>1. Electric Vehicle (EV) vs. Hybrid Electric Vehicle (HEV):</strong>\n<div class=\"overflow-x-auto my-2\">\n<table class=\"w-full text-xs text-left border border-slate-300\">\n<thead class=\"bg-slate-100\"><tr><th class=\"p-1 border\">Parameter</th><th class=\"p-1 border\">Pure Electric Vehicle (BEV)</th><th class=\"p-1 border\">Hybrid Electric Vehicle (HEV)</th></tr></thead>\n<tbody>\n<tr><td class=\"p-1 border font-semibold\">Propulsion Source</td><td class=\"p-1 border\">100% Electric Motor powered by traction battery</td><td class=\"p-1 border\">Internal Combustion Engine (ICE) + Electric Motor</td></tr>\n<tr><td class=\"p-1 border font-semibold\">Fuel Required</td><td class=\"p-1 border\">Grid electricity (zero fossil fuel on board)</td><td class=\"p-1 border\">Petrol / Diesel + recovered braking electricity</td></tr>\n<tr><td class=\"p-1 border font-semibold\">Tailpipe Emissions</td><td class=\"p-1 border\">Absolute Zero tailpipe emissions</td><td class=\"p-1 border\">Low to moderate tailpipe emissions</td></tr>\n<tr><td class=\"p-1 border font-semibold\">Range Anxiety</td><td class=\"p-1 border\">Higher (dependent on EV charging network)</td><td class=\"p-1 border\">None (can be refueled at standard petrol pumps)</td></tr>\n<tr><td class=\"p-1 border font-semibold\">Battery Pack Size</td><td class=\"p-1 border\">Large (40 - 100+ kWh)</td><td class=\"p-1 border\">Small (1 - 5 kWh)</td></tr>\n</tbody>\n</table>\n</div>\n\n<strong>2. Regenerative Braking System Working:</strong>\n\u2022 During normal driving, the battery supplies electrical power to the electric motor, which drives the wheels.\n\u2022 When the driver applies brakes or decelerates, the control electronics invert the magnetic field.\n\u2022 The rotating vehicle momentum forces the electric motor to act as an <strong>ELECTRICAL GENERATOR</strong>.\n\u2022 The counter-electromotive torque opposes wheel rotation, providing smooth braking deceleration.\n\u2022 The generated AC electricity is rectified into DC and pumped back to recharge the traction battery, recovering 15% to 30% of otherwise wasted kinetic heat!",
    "examTip": "Explain that in regenerative braking, the electric traction motor switches operational mode to become a generator.",
    "starred": false,
    "mastered": false
  },
  {
    "id": "card-41",
    "subjectId": "const",
    "unit": 1,
    "pyqTag": "\ud83d\udd25 Asked in CIE-1 2026, SEE July 2026 \u2022 6 Marks",
    "badgeType": "\ud83d\udcd0 Derivation / Formula",
    "badgeLabel": "Constitutional Law",
    "question": "Identify the significance of the Preamble in interpreting the constitutional provisions of India. State whether the Preamble is amendable.",
    "hint": "Preamble is the key to open the mind of the constitution makers. Amendable under Article 368 without destroying basic structure (Kesavananda Bharati case).",
    "answer": "<strong>1. Significance of the Preamble:</strong>\n\u2022 The Preamble embodies the fundamental philosophy, ideals, values, and objectives upon which the Constitution of India is built.\n\u2022 <strong>Aid to Interpretation:</strong> In the landmark <em>Kesavananda Bharati v. State of Kerala (1973)</em> case, the Supreme Court ruled that:\n  1. The Preamble is an integral part of the Constitution.\n  2. In case of ambiguous provisions in the Constitution where words admit of more than one interpretation, the interpretation that aligns with the noble vision of the Preamble must be adopted.\n\n<strong>2. Key Ideals Enshrined:</strong>\n\u2022 <strong>Sovereign:</strong> Complete internal autonomy and freedom from external foreign control.\n\u2022 <strong>Socialist:</strong> Democratic socialism targeting eradication of poverty and inequality.\n\u2022 <strong>Secular:</strong> State gives equal respect and protection to all religions without state religion.\n\u2022 <strong>Democratic:</strong> Government by representatives elected through universal adult franchise.\n\u2022 <strong>Republic:</strong> The head of state (President) is elected, not a hereditary monarch.\n\n<strong>3. Amendability of Preamble:</strong>\n\u2022 The Preamble CAN be amended under Article 368, provided such amendment does NOT violate or alter the <strong>'Basic Structure'</strong> of the Constitution.\n\u2022 Amended once by the <strong>42nd Constitutional Amendment Act (1976)</strong>, which inserted three words: <em>'Socialist', 'Secular', and 'Integrity'</em>.",
    "examTip": "Cite the Kesavananda Bharati (1973) case and the 42nd Amendment (1976) which added 'Socialist, Secular, and Integrity'.",
    "starred": false,
    "mastered": false
  },
  {
    "id": "card-42",
    "subjectId": "const",
    "unit": 2,
    "pyqTag": "\ud83d\udd25 Asked in SEE July 2026, CIE-1 2026 \u2022 6 Marks",
    "badgeType": "\u26a1 Exception / Trap",
    "badgeLabel": "Constitutional Law",
    "question": "Explain the Right to Equality enshrined under Articles 14 to 18 of the Constitution of India, highlighting its legitimate exceptions.",
    "hint": "Art 14 (Equality before law), 15 (Prohibition of discrimination), 16 (Equal opportunity in public employment), 17 (Abolition of untouchability), 18 (Abolition of titles).",
    "answer": "<strong>1. Breakdown of Articles 14 to 18:</strong>\n\u2022 <strong>Article 14:</strong> Equality before law and equal protection of the laws within the territory of India.\n\u2022 <strong>Article 15:</strong> Prohibition of discrimination on grounds only of religion, race, caste, sex, or place of birth.\n\u2022 <strong>Article 16:</strong> Equality of opportunity in matters of public employment.\n\u2022 <strong>Article 17:</strong> Abolition of untouchability and prohibition of its practice in any form.\n\u2022 <strong>Article 18:</strong> Abolition of aristocratic titles (except military and academic distinctions).\n\n<strong>2. Constitutional Exceptions & Reasonable Classification:</strong>\n\u2022 <strong>Intelligible Differentia:</strong> Article 14 does not require mathematical equality among unequals. It permits reasonable classification founded on an intelligible differentia with a rational nexus to the legislative objective.\n\u2022 <strong>Special Provisions for Women & Children (Art 15(3)):</strong> State can make affirmative laws (e.g. maternity benefits).\n\u2022 <strong>Advancement of Socially/Educationally Backward Classes (Art 15(4), 16(4)):</strong> Reservations in educational institutions and public employment for SC, ST, and OBCs.\n\u2022 <strong>Immunity of President & Governors (Article 361):</strong> The President and Governors are not answerable to any court for the exercise and performance of the powers and duties of their office while in tenure.",
    "examTip": "Quote the famous legal doctrine: 'Article 14 forbids class legislation, but permits reasonable classification based on intelligible differentia.'",
    "starred": false,
    "mastered": false
  },
  {
    "id": "card-43",
    "subjectId": "const",
    "unit": 3,
    "pyqTag": "\ud83d\udd25 Asked in SEE July 2026, CIE-2 2026 \u2022 6 Marks",
    "badgeType": "\ud83d\udcd0 Derivation / Formula",
    "badgeLabel": "Supreme Court Writs",
    "question": "'The Supreme Court of India is known as the guardian of fundamental rights.' Analyze this statement with special reference to WRIT jurisdiction under Article 32.",
    "hint": "Dr. B.R. Ambedkar called Article 32 the 'Heart and Soul of the Constitution'. 5 Writs: Habeas Corpus, Mandamus, Prohibition, Certiorari, Quo-Warranto.",
    "answer": "<strong>1. Constitutional Significance of Article 32:</strong>\nDr. B.R. Ambedkar called Article 32 <em>\"the very heart and soul of the Constitution\"</em> because fundamental rights without a direct judicial remedy are meaningless declarations. Under Article 32, a citizen can move the Supreme Court directly by appropriate proceedings for the enforcement of Part III rights.\n\n<strong>2. The Five Prerogative Writs:</strong>\n1. <strong>Habeas Corpus (\"To have the body of\"):</strong>\n   \u2022 Issued against unlawful or arbitrary detention of an individual by state or private actors. Commands the detaining authority to produce the prisoner before the court.\n2. <strong>Mandamus (\"We Command\"):</strong>\n   \u2022 Issued to a public official, tribunal, or lower court commanding them to perform a mandatory statutory public duty that they have failed or refused to do.\n3. <strong>Prohibition:</strong>\n   \u2022 Issued by a higher court to an inferior court/tribunal to prevent it from exceeding its jurisdiction or usurping jurisdiction that it does not possess.\n4. <strong>Certiorari (\"To be certified\"):</strong>\n   \u2022 Issued to quash an illegal order passed by a lower court/tribunal acting without jurisdiction or in violation of natural justice.\n5. <strong>Quo-Warranto (\"By what authority?\"):</strong>\n   \u2022 Issued to prevent illegal usurpation of a public office by an unqualified person.",
    "examTip": "Memorize the Latin translation of each writ (e.g., Habeas Corpus = 'You may have the body', Mandamus = 'We command') for instant full marks.",
    "starred": false,
    "mastered": false
  },
  {
    "id": "card-44",
    "subjectId": "const",
    "unit": 4,
    "pyqTag": "\ud83d\udd25 Asked in CIE-2 2026, SEE July 2026 \u2022 6 Marks",
    "badgeType": "\u26a1 Exception / Trap",
    "badgeLabel": "Emergency Provisions",
    "question": "Discuss the grounds for proclamation and constitutional effects of National Emergency (Article 352) and State Emergency / President's Rule (Article 356).",
    "hint": "Art 352: War, external aggression, or armed rebellion (44th Amendment). Art 356: Breakdown of constitutional machinery in a state.",
    "answer": "<strong>1. National Emergency (Article 352):</strong>\n\u2022 <strong>Grounds:</strong> If the President is satisfied that a grave emergency exists whereby the security of India or any part thereof is threatened by <strong>War, External Aggression, or Armed Rebellion</strong>.\n\u2022 <em>Note:</em> The word 'Armed Rebellion' replaced 'Internal Disturbance' via the 44th Constitutional Amendment (1978).\n\u2022 <strong>Parliamentary Approval:</strong> Must be approved by BOTH Houses of Parliament within <strong>1 month</strong> by a special majority (2/3 present & voting, >50% total membership).\n\u2022 <strong>Effects:</strong> Federal structure transforms into unitary; Centre can issue binding executive directions to states; Fundamental freedoms under Art 19 are suspended automatically during war/external aggression (Art 358); but <strong>Articles 20 and 21 can NEVER be suspended</strong>!\n\n<strong>2. State Emergency / President's Rule (Article 356):</strong>\n\u2022 <strong>Grounds:</strong> If the President receives a report from the Governor that governance in the state cannot be carried on in accordance with the provisions of the Constitution.\n\u2022 <strong>Approval:</strong> Must be approved by Parliament within <strong>2 months</strong> by simple majority.\n\u2022 <strong>Effects:</strong> State Legislative Assembly is dissolved or kept under suspended animation; State Governor administers on behalf of the President; Parliament passes the state budget.",
    "examTip": "Crucial trap: Articles 20 (rights of accused) and 21 (right to life) can NEVER be suspended even during a National Emergency (enacted by 44th Amendment).",
    "starred": false,
    "mastered": false
  },
  {
    "id": "card-45",
    "subjectId": "const",
    "unit": 5,
    "pyqTag": "\ud83d\udd25 Asked in CIE-2 2026, SEE July 2026 \u2022 6 Marks",
    "badgeType": "\u26a1 Exception / Trap",
    "badgeLabel": "Professional Ethics",
    "question": "Discuss the professional responsibility of engineers and the key impediments to responsible engineering action.",
    "hint": "Key impediments: Self-interest, Fear, Self-deception, Ignorance/Egocentric thinking, Microscopic vision, Groupthink, Uncritical acceptance of authority.",
    "answer": "<strong>1. Professional Responsibility of Engineers:</strong>\nEngineers possess specialized technical knowledge that impacts public safety, environmental health, and civil infrastructure. Under codes of ethics (e.g. IEEE, ASME, NSPE), engineers must hold paramount the safety, health, and welfare of the public.\n\n<strong>2. Major Impediments to Responsible Action:</strong>\n1. <strong>Self-Interest:</strong> Prioritizing personal career advancement, kickbacks, or company quarterly bonuses over safety compliance.\n2. <strong>Fear:</strong> Fear of losing one's job, whistleblowing retaliation, or angering management prevents engineers from speaking out against flawed designs.\n3. <strong>Self-Deception & Wishful Thinking:</strong> Convincing oneself that anomalous sensor readings are mere noise rather than impending catastrophic hardware failure (e.g. Challenger O-ring disaster).\n4. <strong>Microscopic (Tunnel) Vision:</strong> Focusing exclusively on narrow technical parameters without seeing the broad ecological or human consequences of the technology.\n5. <strong>Groupthink:</strong> The psychological tendency in tightly-knit corporate teams to seek false consensus and suppress dissenting engineering opinions.\n6. <strong>Uncritical Acceptance of Authority:</strong> Blindly implementing management directives to cut safety tests without independent ethical evaluation.",
    "examTip": "Mention real-world case examples like the Space Shuttle Challenger O-ring disaster to demonstrate profound mastery.",
    "starred": false,
    "mastered": false
  },
  {
    "id": "card-46",
    "subjectId": "eng",
    "unit": 1,
    "pyqTag": "\ud83d\udd25 Asked in SEE July 2026, CIE-1 2025 \u2022 8 Marks",
    "badgeType": "\ud83d\udcd0 Derivation / Formula",
    "badgeLabel": "Communication Theory",
    "question": "Critically analyze how physical distance (Proxemics) influences the effectiveness of communication in professional engineering settings. Explain the three classical modes of persuasion: Ethos, Pathos, and Logos.",
    "hint": "Proxemics (Edward T. Hall): Intimate (0-1.5 ft), Personal (1.5-4 ft), Social (4-12 ft), Public (>12 ft). Aristotle: Ethos=Credibility, Pathos=Emotion, Logos=Logic.",
    "answer": "<strong>1. Proxemics (The Study of Spatial Communication):</strong>\nCoined by anthropologist Edward T. Hall, proxemics analyzes the impact of physical space and seating arrangements on human interactions:\n\u2022 <strong>Intimate Space (0 to 1.5 ft):</strong> Strictly reserved for close personal bonds; intruding in a professional context causes discomfort and hostility.\n\u2022 <strong>Personal Space (1.5 to 4 ft):</strong> For close one-on-one professional chats and collaborative engineering pair programming.\n\u2022 <strong>Social Space (4 to 12 ft):</strong> Standard distance for team meetings, conference tables, and client discussions. Promotes neutrality.\n\u2022 <strong>Public Space (> 12 ft):</strong> Used during formal seminars, keynote presentations, and lecture halls.\n\n<strong>2. Aristotle's Three Modes of Persuasion:</strong>\n1. <strong>Ethos (Ethical Appeal / Credibility):</strong>\n   \u2022 Establishing the speaker's authority, technical expertise, qualifications, and trustworthiness.\n   \u2022 <em>Engineering Context:</em> Presenting professional credentials, certifications, and past project reliability.\n2. <strong>Pathos (Emotional Appeal):</strong>\n   \u2022 Connecting with the audience's human values, aspirations, empathy, and urgency.\n   \u2022 <em>Engineering Context:</em> Demonstrating how an autonomous braking system saves real human lives and protects families.\n3. <strong>Logos (Logical Appeal / Data-Driven Proof):</strong>\n   \u2022 Convincing through empirical statistics, mathematical calculations, rigorous bench test results, and syllogistic reasoning.\n   \u2022 <em>Engineering Context:</em> Presenting mean time between failures (MTBF), cost-benefit charts, and simulation graphs.",
    "examTip": "Always list Hall's 4 exact distance boundaries in feet, and attribute Ethos, Pathos, and Logos to Aristotle.",
    "starred": false,
    "mastered": false
  },
  {
    "id": "card-47",
    "subjectId": "eng",
    "unit": 2,
    "pyqTag": "\ud83d\udd25 Asked in SEE Feb 2026, CIE-1 \u2022 8 Marks",
    "badgeType": "\u26a1 Exception / Trap",
    "badgeLabel": "Self-Management",
    "question": "Write a detailed SWOC analysis framework for an engineering student. Discuss four scientifically proven stress management techniques for coping with project deadlines.",
    "hint": "SWOC: Strengths, Weaknesses, Opportunities, Challenges. Stress techniques: Diaphragmatic breathing, Progressive Muscle Relaxation (PMR), Mindfulness, Time-outs.",
    "answer": "<strong>1. SWOC Analysis Framework:</strong>\n\u2022 <strong>Strengths (Internal):</strong> Strong mathematical foundations, proficiency in C/Python, fast learner, high curiosity.\n\u2022 <strong>Weaknesses (Internal):</strong> Procrastination during non-exam weeks, stage fright during viva/presentations, poor sleep habits.\n\u2022 <strong>Opportunities (External):</strong> Campus hackathons, IEEE student branch projects, internship openings in Bengaluru tech parks.\n\u2022 <strong>Challenges / Threats (External):</strong> Rapidly evolving tech stack demands, stiff competition for campus placements, academic burnout.\n\n<strong>2. Scientific Stress Management Techniques:</strong>\n1. <strong>Diaphragmatic Deep Breathing (Box Breathing / 4-7-8 Technique):</strong>\n   \u2022 Inhale for 4s, hold for 7s, exhale slowly for 8s. Stimulates the parasympathetic vagus nerve, reducing heart rate and cortisol levels.\n2. <strong>Progressive Muscle Relaxation (PMR):</strong>\n   \u2022 Systematically tensing muscle groups for 5 seconds and releasing for 15 seconds from feet to neck, breaking somatic anxiety feedback loops.\n3. <strong>Mindfulness & Meditation:</strong>\n   \u2022 Practicing non-judgmental present-moment awareness, reducing cognitive rumination over past exams.\n4. <strong>Structured Time-Outs & Pomodoro Rhythm:</strong>\n   \u2022 Studying in focused 25-minute sprints followed by 5-minute cognitive breaks to replenish prefrontal cortex attention reserves.",
    "examTip": "Categorize SWOC clearly: Strengths and Weaknesses are INTERNAL; Opportunities and Challenges are EXTERNAL.",
    "starred": false,
    "mastered": false
  },
  {
    "id": "card-48",
    "subjectId": "eng",
    "unit": 3,
    "pyqTag": "\ud83d\udd25 Asked in SEE Feb 2026, CIE-2 2026 \u2022 8 Marks",
    "badgeType": "\u26a1 Exception / Trap",
    "badgeLabel": "Time Management",
    "question": "Explain the Eisenhower Matrix for time management with a clear diagram. How does it help engineering students balance project deadlines and academic success?",
    "hint": "Divide tasks into 4 Quadrants: Urgent vs Important. Q1: Do Now, Q2: Schedule/Plan (Deep work), Q3: Delegate, Q4: Eliminate.",
    "answer": "<strong>1. The Eisenhower Matrix Framework:</strong>\nCategorizes tasks based on two independent axes: <strong>Urgency</strong> (requires immediate attention) and <strong>Importance</strong> (contributes to high-value long-term goals).\n\n<div class=\"overflow-x-auto my-2\">\n<table class=\"w-full text-xs text-left border border-slate-300\">\n<thead class=\"bg-slate-100\">\n<tr><th class=\"p-2 border\">Category</th><th class=\"p-2 border\">Urgent</th><th class=\"p-2 border\">Not Urgent</th></tr>\n</thead>\n<tbody>\n<tr>\n<td class=\"p-2 border font-bold bg-slate-50\">Important</td>\n<td class=\"p-2 border bg-red-50 text-red-900\">\n<strong>QUADRANT I (Do First / Crisis):</strong><br>\n\u2022 Tomorrow's CIE exam submission<br>\n\u2022 Server outage in active production<br>\n<em>Action: Execute immediately!</em>\n</td>\n<td class=\"p-2 border bg-emerald-50 text-emerald-900\">\n<strong>QUADRANT II (Schedule / Strategy):</strong><br>\n\u2022 Regular GATE/Placement prep<br>\n\u2022 Exercise, health & skill building<br>\n<em>Action: Block dedicated time daily!</em>\n</td>\n</tr>\n<tr>\n<td class=\"p-2 border font-bold bg-slate-50\">Not Important</td>\n<td class=\"p-2 border bg-amber-50 text-amber-900\">\n<strong>QUADRANT III (Delegate / Deceit):</strong><br>\n\u2022 Most ringing phone calls<br>\n\u2022 Minor club administrative tasks<br>\n<em>Action: Delegate or automate!</em>\n</td>\n<td class=\"p-2 border bg-slate-50 text-slate-700\">\n<strong>QUADRANT IV (Eliminate / Waste):</strong><br>\n\u2022 Mindless social media doom-scrolling<br>\n\u2022 Binge watching unrelated videos<br>\n<em>Action: Drop and eliminate!</em>\n</td>\n</tr>\n</tbody>\n</table>\n</div>\n\n<strong>2. Strategic Value for Engineers:</strong>\nHigh performers spend 60-70% of their time in <strong>Quadrant II</strong> (proactive preparation), which shrinks Quadrant I crises and eliminates Quadrant IV distractions.",
    "examTip": "Stress that Quadrant II (Important, Not Urgent) is the quadrant of maximum long-term success and prevents burnout.",
    "starred": false,
    "mastered": false
  },
  {
    "id": "card-49",
    "subjectId": "eng",
    "unit": 4,
    "pyqTag": "\ud83d\udd25 Asked in SEE Feb 2026, CIE-2 2026 \u2022 8 Marks",
    "badgeType": "\u26a1 Exception / Trap",
    "badgeLabel": "Root Cause & Netiquette",
    "question": "Your project team consistently misses submission deadlines despite having technically skilled members. Draw and explain a Fishbone (Ishikawa) Diagram to analyze the root causes. Explain online communication netiquette.",
    "hint": "Fishbone categories (6 Ms / 4 Ps): People, Process/Method, Technology/Tools, Management. Netiquette: avoid ALL CAPS, use BCC for privacy, professional tone.",
    "answer": "<strong>1. Fishbone (Ishikawa / Cause-and-Effect) Diagram:</strong>\nA visual root-cause brainstorming tool that identifies contributing factors behind an effect (Project Delays) grouped into primary spine categories:\n\u2022 <strong>People:</strong>\n  - Lack of task ownership; interpersonal conflict; poor time management.\n\u2022 <strong>Methods / Process:</strong>\n  - Vague requirements; missing intermediate sprint milestones; absence of code reviews.\n\u2022 <strong>Communication:</strong>\n  - Over-reliance on fragmented chat channels; unrecorded decision meetings.\n\u2022 <strong>Tools / Technology:</strong>\n  - Merge conflicts in Git; uncalibrated lab equipment; slow compilation builds.\n\u2022 <strong>Environment / Management:</strong>\n  - Overlapping CIE exams; shifting scope from faculty advisors.\n\n<strong>2. Essential Online Professional Netiquette:</strong>\n1. <strong>Vendor / Mass Email Privacy:</strong> Use **Bcc (Blind Carbon Copy)** rather than 'To' or 'Cc' when emailing multiple external clients or student cohorts to prevent privacy leaks.\n2. <strong>Avoid Accidental 'Reply All':</strong> Send replies only to the original sender unless every recipient genuinely requires the information.\n3. <strong>Tone & Casing:</strong> Never write in ALL UPPERCASE letters (perceived as shouting). Maintain polite, factual, concise language.",
    "examTip": "Categorize causes in the Fishbone diagram into People, Methods, Tools, and Environment.",
    "starred": false,
    "mastered": false
  },
  {
    "id": "card-50",
    "subjectId": "eng",
    "unit": 5,
    "pyqTag": "\ud83d\udd25 Asked in SEE July 2026, CIE-2 2026 \u2022 8 Marks",
    "badgeType": "\ud83d\udcd0 Derivation / Formula",
    "badgeLabel": "Professional Writing",
    "question": "Imagine you have graduated with a degree in Electronics and Communication Engineering (ECE). Draft a formal Cover Letter applying for the role of Junior Hardware/Embedded Systems Engineer at an electronics firm.",
    "hint": "Include: Sender Info, Date, Recipient Address, Subject line, Salutation, 3 body paragraphs (Intro/hook, Skills/projects proof, Enthusiastic close), Sign-off.",
    "answer": "<strong>Formal Cover Letter Template:</strong>\n<div class=\"bg-slate-50 p-3 rounded border text-xs font-mono leading-relaxed\">\n[Your Full Name]<br>\nBengaluru, Karnataka - 560054 | student@msrit.edu | +91 98765 43210<br>\nLinkedIn: linkedin.com/in/ece-engineer | GitHub: github.com/ece-student<br>\n<br>\n27 October 2026<br>\n<br>\nThe Hiring Manager,<br>\nEmbedded Systems Division, Apex Technologies Ltd.,<br>\nWhitefield, Bengaluru - 560066<br>\n<br>\n<strong>Subject: Application for the Position of Junior Embedded Hardware Engineer (Job ID: EMB-2026)</strong><br>\n<br>\nDear Hiring Manager,<br>\n<br>\nI am writing to express my strong interest in the Junior Embedded Hardware Engineer position at Apex Technologies. As a recent graduate in Electronics and Communication Engineering (ECE) from Ramaiah Institute of Technology (MSRIT), Bengaluru, with hands-on coursework in C Programming, Digital Electronics, and Embedded Sensor Interfacing, I am eager to contribute to your firmware development team.<br>\n<br>\nDuring my academic project work, I designed and programmed ARM Cortex-M microcontroller systems in embedded C, interfacing SPI and I2C optical sensors with low-power wireless transceivers. My capstone project reduced sensor power consumption by 28% through custom sleep-state scheduling. Additionally, my rigorous academic training at MSRIT has instilled strong discipline in version control, schematic debugging, and agile milestone execution.<br>\n<br>\nApex Technologies' pioneering advancements in industrial IoT automation resonate strongly with my technical passion. I welcome the opportunity to discuss how my technical acumen and problem-solving drive align with your team's objectives. Thank you for your time and consideration.<br>\n<br>\nSincerely,<br>\n[Your Full Name]\n</div>",
    "examTip": "Structure: Paragraph 1 = Position & source; Paragraph 2 = Specific project achievements & technical skills; Paragraph 3 = Company alignment & call to interview.",
    "starred": false,
    "mastered": false
  },
  {
    "id": "card-51",
    "subjectId": "chem",
    "unit": 1,
    "pyqTag": "\ud83d\udd25 Asked in CIE-1 2026 \u2022 5 Marks",
    "badgeType": "\ud83d\udd22 Numerical Pattern",
    "badgeLabel": "Concentration Cell",
    "question": "Define a concentration cell. Represent a concentration cell formed by coupling two Cadmium electrodes immersed in Cadmium sulphate solutions of 0.05 M and 1.0 M respectively at 298 K. Calculate the cell potential.",
    "hint": "Formula: E_cell = (0.0591/n) log10 (C2/C1). For Cadmium, n = 2. C2 = 1.0 M, C1 = 0.05 M.",
    "answer": "<strong>1. Definition:</strong> A concentration cell is an electrochemical cell in which both half-cells consist of identical electrodes of the same metal dipped into solutions of the same electrolyte, but at differing concentrations (activities). The EMF is driven purely by the free energy change of dilution.\n\n<strong>2. Cell Representation:</strong>\n$$Cd(s) \\mid Cd^{2+}(0.05\\text{ M}) \\parallel Cd^{2+}(1.0\\text{ M}) \\mid Cd(s)$$\n\n<strong>3. Calculation of Cell Potential at 298 K:</strong>\n\u2022 Reaction: $Cd^{2+}(1.0\\text{ M}) \\rightarrow Cd^{2+}(0.05\\text{ M})$ ($n = 2$)\n\u2022 Formula:\n  $$E_{\\text{cell}} = \\frac{0.0591}{n} \\log_{10} \\left(\\frac{C_2}{C_1}\\right)$$\n  $$E_{\\text{cell}} = \\frac{0.0591}{2} \\log_{10} \\left(\\frac{1.0}{0.05}\\right)$$\n  $$\\frac{1.0}{0.05} = 20 \\implies \\log_{10}(20) = 1.3010$$\n  $$E_{\\text{cell}} = 0.02955 \\times 1.3010 = \\mathbf{0.0384\\text{ V}} = \\mathbf{38.4\\text{ mV}}$$",
    "examTip": "Remember that E\u00b0_cell is zero for all concentration cells because both electrodes are the identical metal.",
    "starred": false,
    "mastered": false
  },
  {
    "id": "card-52",
    "subjectId": "chem",
    "unit": 2,
    "pyqTag": "\ud83d\udd25 Asked in CIE-1 2026 \u2022 5 Marks",
    "badgeType": "\u26a1 Exception / Trap",
    "badgeLabel": "Galvanic Couple",
    "question": "Give scientific reasons: (i) Why must a nut and bolt always be manufactured from the same metal in engineering assemblies? (ii) What is the role of anodization in protecting aluminium?",
    "hint": "Dissimilar metals in contact form a galvanic couple where the more active metal suffers intense galvanic corrosion. Anodization forms a protective Al2O3 layer.",
    "answer": "<strong>(i) Reason for Identical Metal Nut and Bolt:</strong>\n\u2022 If a bolt and nut are made of two different metals (e.g., a steel bolt with a brass or copper nut) in an outdoor moist environment, an active <strong>Galvanic Couple</strong> is created.\n\u2022 The metal with the lower standard reduction potential acts as an anode and suffers severe accelerated galvanic corrosion.\n\u2022 If the anode has a small exposed area (e.g., steel bolt threads inside a large brass plate), intense localized corrosion causes rapid mechanical shear failure.\n\u2022 Using the same metal eliminates contact potential difference ($\\Delta E = 0$), completely preventing galvanic corrosion!\n\n<strong>(ii) Protection via Anodization of Aluminium:</strong>\n\u2022 Aluminium is made the anode in an electrolytic bath containing 15% $H_2SO_4$ at 15-20\u00b0C.\n\u2022 Oxygen liberated at the anode reacts with aluminium to form a dense, adherent, uniform hexagonal porous layer of alumina:\n  $$2Al + 3H_2O \\rightarrow Al_2O_3 + 6H^+ + 6e^-$$\n\u2022 Boiling the anodized part in hot water converts porous amorphous $Al_2O_3$ into hydrated crystalline Boehmite ($Al_2O_3 \\cdot H_2O$), sealing all microscopic pores and providing exceptional corrosion resistance and electrical insulation.",
    "examTip": "State both the galvanic coupling risk of dissimilar metals and the sealing step of anodization in boiling water.",
    "starred": false,
    "mastered": false
  },
  {
    "id": "card-53",
    "subjectId": "chem",
    "unit": 4,
    "pyqTag": "\ud83d\udd25 Asked in SEE July 2026, CIE-2 2026 \u2022 6 Marks",
    "badgeType": "\ud83e\uddea Reaction / Mechanism",
    "badgeLabel": "Semiconductors",
    "question": "Explain the construction, working, and advantages of a Pentacene Organic Thin-Film Transistor (OTFT).",
    "hint": "Pentacene (C22H14) is a five-ring fused aromatic hydrocarbon acting as a p-type organic semiconductor with high hole mobility > 1-5 cm\u00b2/(V\u00b7s).",
    "answer": "<strong>1. Structure of Pentacene:</strong>\nPentacene consists of five linearly fused benzene rings ($C_{22}H_{14}$). It forms highly crystalline, well-ordered herringbone packing thin films via thermal vacuum sublimation or solution deposition.\n\n<strong>2. Device Construction (Bottom-Gate, Top-Contact OTFT):</strong>\n\u2022 <strong>Substrate:</strong> Heavily doped Silicon ($Si$) or flexible polymer film (PET / Kapton).\n\u2022 <strong>Gate Dielectric:</strong> Thermally grown $SiO_2$ or crosslinked polyvinyl phenol (PVP).\n\u2022 <strong>Active Layer:</strong> 30-50 nm thin film of vacuum-evaporated Pentacene.\n\u2022 <strong>Source & Drain Contacts:</strong> High work function metals (Gold, $Au$, work function $\\approx 5.1\\text{ eV}$) deposited on top of pentacene to minimize the Schottky injection barrier for holes.\n\n<strong>3. Working Mechanism:</strong>\n\u2022 Operates in <strong>accumulation mode</strong> as a p-type semiconductor.\n\u2022 Applying a negative gate voltage ($V_{GS} < 0$) induces an electric field that attracts positive holes to the pentacene/dielectric interface, forming a high-conductivity hole channel.\n\u2022 When a negative drain-source voltage ($V_{DS} < 0$) is applied, holes drift from source to drain, generating a controllable drain current ($I_D$).\n\n<strong>4. Advantages:</strong>\n1. Exceptionally high field-effect hole mobility: $\\mu_h > 1.0 - 5.0\\text{ cm}^2/(\\text{V}\\cdot\\text{s})$, rivaling amorphous Silicon ($a-Si:H$).\n2. Low-temperature processing (< 100\u00b0C), compatible with lightweight, flexible, unbreakable plastic substrates for rollable displays and RFID tags.",
    "examTip": "Mention Gold (Au) electrodes for hole injection matching pentacene's HOMO level (~5.0 eV) to prevent contact resistance.",
    "starred": false,
    "mastered": false
  },
  {
    "id": "card-54",
    "subjectId": "chem",
    "unit": 5,
    "pyqTag": "\ud83d\udd25 Asked in SEE July 2026 \u2022 6 Marks",
    "badgeType": "\ud83e\uddea Reaction / Mechanism",
    "badgeLabel": "E-Waste Hydrometallurgy",
    "question": "Explain the hydrometallurgical method for the extraction and recovery of Gold from printed circuit board (PCB) e-waste.",
    "hint": "Steps: Mechanical dismantling -> Acid leaching of base metals (Cu/Ni) -> Cyanide/Thiourea leaching of gold -> Precipitation or electrowinning.",
    "answer": "<strong>1. Principle:</strong>\nHydrometallurgical extraction selectively dissolves and recovers high-value precious metals (Au, Ag, Pd) from pulverized electronic scrap using aqueous chemical reagents under ambient or mild temperature conditions.\n\n<strong>2. Step-by-Step Recovery Process:</strong>\n\u2022 <strong>Step 1: Pre-treatment & Dismantling:</strong>\n  Electronic components and connectors are mechanically desoldered from PCBs, crushed, and shredded to fine mesh powder.\n\u2022 <strong>Step 2: Base Metal Stripping:</strong>\n  The scrap is first leached with dilute Nitric Acid ($HNO_3$) or Sulphuric acid + Hydrogen peroxide ($H_2SO_4 + H_2O_2$) to selectively dissolve base metals ($Cu, Ni, Pb, Sn$), leaving behind the unreacted gold-rich residue.\n\u2022 <strong>Step 3: Gold Dissolution (Leaching):</strong>\n  The residue is leached using an alkaline Cyanide solution or non-toxic acidic Thiourea solution in the presence of oxygen or $Fe^{3+}$ oxidizer:\n  $$4Au + 8CN^- + O_2 + 2H_2O \\rightarrow 4[Au(CN)_2]^- + 4OH^-$$\n  (Gold forms the soluble dicyanoaurate complex $[Au(CN)_2]^-$).\n\u2022 <strong>Step 4: Gold Recovery (Precipitation / Electrowinning):</strong>\n  - <em>Cementation with Zinc:</em> Zinc dust is added to displace gold:\n    $$2[Au(CN)_2]^- + Zn \\rightarrow [Zn(CN)_4]^{2-} + 2Au \\downarrow$$\n  - Alternatively, gold is adsorbed onto Activated Carbon and recovered via electro-winning as pure 99.9% metallic gold ingots!",
    "examTip": "Write the dissolution reaction of gold into [Au(CN)2]- and subsequent zinc cementation displacement.",
    "starred": false,
    "mastered": false
  },
  {
    "id": "card-55",
    "subjectId": "math",
    "unit": 1,
    "pyqTag": "\ud83d\udd25 Asked in SEE July 2026 \u2022 7 Marks",
    "badgeType": "\ud83d\udd22 Numerical Pattern",
    "badgeLabel": "Regula-Falsi Method",
    "question": "The current i in an electric circuit is given by i = 10 e\u207b\u1d57 sin(2\u03c0 t), where t is in seconds. Using the Regula-Falsi (False Position) method, find the value of t for which i = 2 amperes. Carry out three iterations.",
    "hint": "Set f(t) = 10 e^-t sin(2pi t) - 2 = 0. Find bracket [a, b] where f(a)*f(b) < 0. Formula: c = (a*f(b) - b*f(a)) / (f(b) - f(a)).",
    "answer": "<strong>1. Problem Formulation:</strong>\nWe seek the root of $f(t) = 10 e^{-t} \\sin(2\\pi t) - 2 = 0$.\n\n<strong>2. Initial Bracketing (in Radians):</strong>\n\u2022 At $t = 0$: $f(0) = 10(1)(0) - 2 = -2.0 < 0$\n\u2022 At $t = 0.1$:\n  $2\\pi(0.1) = 0.2\\pi = 0.6283\\text{ rad} \\implies \\sin(0.6283) = 0.5878$\n  $e^{-0.1} = 0.9048$\n  $f(0.1) = 10(0.9048)(0.5878) - 2 = 5.318 - 2 = +3.318 > 0$\n\u2022 Hence, a root lies in the interval $[a, b] = [0, 0.1]$.\n  $a = 0, \\quad f(a) = -2.0$\n  $b = 0.1, \\quad f(b) = +3.318$\n\n<strong>3. Regula-Falsi Iterations:</strong>\nFormula: $c = \\frac{a f(b) - b f(a)}{f(b) - f(a)}$\n\n\u2022 <strong>Iteration 1:</strong>\n  $$c_1 = \\frac{0(3.318) - 0.1(-2.0)}{3.318 - (-2.0)} = \\frac{0.2}{5.318} = \\mathbf{0.0376\\text{ s}}$$\n  $2\\pi(0.0376) = 0.2363\\text{ rad} \\implies \\sin(0.2363) = 0.2341$\n  $e^{-0.0376} = 0.9631$\n  $f(c_1) = 10(0.9631)(0.2341) - 2 = 2.2546 - 2 = +0.2546 > 0$\n  Since $f(c_1) > 0$, replace $b$ with $c_1 = 0.0376$.\n\n\u2022 <strong>Iteration 2:</strong>\n  $$c_2 = \\frac{0(0.2546) - 0.0376(-2.0)}{0.2546 - (-2.0)} = \\frac{0.0752}{2.2546} = \\mathbf{0.03335\\text{ s}}$$\n  $2\\pi(0.03335) = 0.2095\\text{ rad} \\implies \\sin(0.2095) = 0.2080$\n  $e^{-0.03335} = 0.9672$\n  $f(c_2) = 10(0.9672)(0.2080) - 2 = 2.0118 - 2 = +0.0118 > 0$\n  Replace $b$ with $c_2 = 0.03335$.\n\n\u2022 <strong>Iteration 3:</strong>\n  $$c_3 = \\frac{0(0.0118) - 0.03335(-2.0)}{0.0118 - (-2.0)} = \\frac{0.0667}{2.0118} = \\mathbf{0.03315\\text{ s}}$$\n\u2022 <strong>Result:</strong> After 3 iterations, $t \\approx \\mathbf{0.0332\\text{ seconds}}$. (Current reaches 2 A at ~33.2 ms).",
    "examTip": "Ensure calculator is strictly set in RADIANS. Evaluating 2*pi*t in degrees is an automatic zero-mark error!",
    "starred": false,
    "mastered": false
  },
  {
    "id": "card-56",
    "subjectId": "math",
    "unit": 2,
    "pyqTag": "\ud83d\udd25 Asked in SEE July 2026 \u2022 7 Marks",
    "badgeType": "\ud83d\udd22 Numerical Pattern",
    "badgeLabel": "Multiple Integrals",
    "question": "Find the volume of the sphere x\u00b2 + y\u00b2 + z\u00b2 = a\u00b2 using triple integration in spherical polar coordinates.",
    "hint": "x = r sin\u03b8 cos\u03c6, y = r sin\u03b8 sin\u03c6, z = r cos\u03b8. Jacobian dV = r\u00b2 sin\u03b8 dr d\u03b8 d\u03c6. Limits: r from 0 to a, \u03b8 from 0 to \u03c0, \u03c6 from 0 to 2\u03c0.",
    "answer": "<strong>1. Coordinate Transformation to Spherical Polar:</strong>\n\u2022 $x = r \\sin\\theta \\cos\\phi, \\quad y = r \\sin\\theta \\sin\\phi, \\quad z = r \\cos\\theta$\n\u2022 The volume element is:\n  $$dV = dx dy dz = r^2 \\sin\\theta \\, dr \\, d\\theta \\, d\\phi$$\n\n<strong>2. Limits of Integration for the Full Sphere ($x^2+y^2+z^2 \\le a^2$):</strong>\n\u2022 Radial distance: $r$ varies from $0$ to $a$\n\u2022 Polar colatitude: $\\theta$ varies from $0$ to $\\pi$\n\u2022 Azimuthal angle: $\\phi$ varies from $0$ to $2\\pi$\n\n<strong>3. Step-by-Step Triple Integration:</strong>\n$$V = \\iiint_V dV = \\int_0^{2\\pi} d\\phi \\int_0^\\pi \\sin\\theta \\, d\\theta \\int_0^a r^2 \\, dr$$\n\u2022 Radial integral:\n  $$\\int_0^a r^2 \\, dr = \\left[ \\frac{r^3}{3} \\right]_0^a = \\frac{a^3}{3}$$\n\u2022 Angular $\\theta$ integral:\n  $$\\int_0^\\pi \\sin\\theta \\, d\\theta = \\left[ -\\cos\\theta \\right]_0^\\pi = -(-1) - (-1) = 1 + 1 = 2$$\n\u2022 Azimuthal $\\phi$ integral:\n  $$\\int_0^{2\\pi} d\\phi = [\\phi]_0^{2\\pi} = 2\\pi$$\n\n\u2022 <strong>Final Volume Evaluation:</strong>\n  $$V = 2\\pi \\times 2 \\times \\frac{a^3}{3} = \\mathbf{\\frac{4}{3} \\pi a^3}$$",
    "examTip": "Show all 3 separated one-dimensional integrals clearly to secure all 7 marks.",
    "starred": false,
    "mastered": false
  },
  {
    "id": "card-57",
    "subjectId": "math",
    "unit": 5,
    "pyqTag": "\ud83d\udd25 Asked in SEE July 2026 \u2022 7 Marks",
    "badgeType": "\ud83d\udd22 Numerical Pattern",
    "badgeLabel": "Simpson's Rule",
    "question": "Evaluate the numerical integral I = \u222b\u2080^(\u03c0/2) \u221a(1 + cos\u00b3\u03b8) d\u03b8 using Simpson's 1/3rd rule by dividing the interval into 6 equal parts.",
    "hint": "h = (b - a)/n = (\u03c0/2 - 0)/6 = \u03c0/12. Simpson's 1/3: I = (h/3)[(y0 + y6) + 4(y1 + y3 + y5) + 2(y2 + y4)].",
    "answer": "<strong>1. Formula & Step Size:</strong>\n\u2022 Lower limit $a = 0$, Upper limit $b = \\pi/2$, Number of strips $n = 6$.\n\u2022 Step size:\n  $$h = \\frac{b - a}{n} = \\frac{\\pi/2 - 0}{6} = \\frac{\\pi}{12} \\approx 0.261799\\text{ rad} = 15^\\circ$$\n\u2022 Let $f(\\theta) = \\sqrt{1 + \\cos^3\\theta}$.\n\n<strong>2. Table of Ordinates:</strong>\n<div class=\"overflow-x-auto my-2\">\n<table class=\"w-full text-xs text-left border border-slate-300\">\n<thead class=\"bg-slate-100\"><tr><th class=\"p-1 border\">i</th><th class=\"p-1 border\">\u03b8_i (deg / rad)</th><th class=\"p-1 border\">cos \u03b8_i</th><th class=\"p-1 border\">y_i = \u221a(1 + cos\u00b3 \u03b8_i)</th></tr></thead>\n<tbody>\n<tr><td class=\"p-1 border\">0</td><td class=\"p-1 border\">0\u00b0 (0 rad)</td><td class=\"p-1 border\">1.0000</td><td class=\"p-1 border\">y\u2080 = \u221a(1 + 1) = 1.4142</td></tr>\n<tr><td class=\"p-1 border\">1</td><td class=\"p-1 border\">15\u00b0 (\u03c0/12)</td><td class=\"p-1 border\">0.9659</td><td class=\"p-1 border\">y\u2081 = \u221a(1 + 0.9008) = 1.3787</td></tr>\n<tr><td class=\"p-1 border\">2</td><td class=\"p-1 border\">30\u00b0 (2\u03c0/12)</td><td class=\"p-1 border\">0.8660</td><td class=\"p-1 border\">y\u2082 = \u221a(1 + 0.6495) = 1.2843</td></tr>\n<tr><td class=\"p-1 border\">3</td><td class=\"p-1 border\">45\u00b0 (3\u03c0/12)</td><td class=\"p-1 border\">0.7071</td><td class=\"p-1 border\">y\u2083 = \u221a(1 + 0.3536) = 1.1634</td></tr>\n<tr><td class=\"p-1 border\">4</td><td class=\"p-1 border\">60\u00b0 (4\u03c0/12)</td><td class=\"p-1 border\">0.5000</td><td class=\"p-1 border\">y\u2084 = \u221a(1 + 0.1250) = 1.0607</td></tr>\n<tr><td class=\"p-1 border\">5</td><td class=\"p-1 border\">75\u00b0 (5\u03c0/12)</td><td class=\"p-1 border\">0.2588</td><td class=\"p-1 border\">y\u2085 = \u221a(1 + 0.0173) = 1.0086</td></tr>\n<tr><td class=\"p-1 border\">6</td><td class=\"p-1 border\">90\u00b0 (\u03c0/2)</td><td class=\"p-1 border\">0.0000</td><td class=\"p-1 border\">y\u2086 = \u221a(1 + 0) = 1.0000</td></tr>\n</tbody>\n</table>\n</div>\n\n<strong>3. Applying Simpson's 1/3rd Rule:</strong>\n$$I = \\frac{h}{3}\\left[(y_0 + y_6) + 4(y_1 + y_3 + y_5) + 2(y_2 + y_4)\\right]$$\n\u2022 $y_0 + y_6 = 1.4142 + 1.0000 = 2.4142$\n\u2022 $y_1 + y_3 + y_5 = 1.3787 + 1.1634 + 1.0086 = 3.5507 \\implies 4 \\times 3.5507 = 14.2028$\n\u2022 $y_2 + y_4 = 1.2843 + 1.0607 = 2.3450 \\implies 2 \\times 2.3450 = 4.6900$\n\u2022 Bracket Sum $= 2.4142 + 14.2028 + 4.6900 = 21.3070$\n$$I = \\frac{0.2618}{3} \\times 21.3070 = 0.087266 \\times 21.3070 = \\mathbf{1.8593}$$",
    "examTip": "Simpson's 1/3rd rule requires an EVEN number of intervals (n = 6 strips).",
    "starred": false,
    "mastered": false
  },
  {
    "id": "card-58",
    "subjectId": "cprog",
    "unit": 1,
    "pyqTag": "\ud83d\udd25 Asked in SEE Feb 2026, CIE-1 \u2022 8 Marks",
    "badgeType": "\u26a1 Exception / Trap",
    "badgeLabel": "Storage Classes",
    "question": "List and compare the four storage classes in C: auto, static, extern, and register. Explain with a suitable program showing the difference between auto and static.",
    "hint": "Compare: Storage location (RAM/CPU register), Default value (Garbage/Zero), Scope (Local/Global), Lifetime (Block/Program duration).",
    "answer": "<strong>1. Comparison of Storage Classes:</strong>\n<div class=\"overflow-x-auto my-2\">\n<table class=\"w-full text-xs text-left border border-slate-300\">\n<thead class=\"bg-slate-100\"><tr><th class=\"p-1 border\">Class</th><th class=\"p-1 border\">Storage</th><th class=\"p-1 border\">Default Initial Value</th><th class=\"p-1 border\">Scope</th><th class=\"p-1 border\">Lifetime</th></tr></thead>\n<tbody>\n<tr><td class=\"p-1 border font-semibold\">auto</td><td class=\"p-1 border\">Stack Memory</td><td class=\"p-1 border\">Garbage (indeterminate)</td><td class=\"p-1 border\">Local to block</td><td class=\"p-1 border\">Until block exits</td></tr>\n<tr><td class=\"p-1 border font-semibold\">register</td><td class=\"p-1 border\">CPU Register</td><td class=\"p-1 border\">Garbage</td><td class=\"p-1 border\">Local to block</td><td class=\"p-1 border\">Until block exits</td></tr>\n<tr><td class=\"p-1 border font-semibold\">static</td><td class=\"p-1 border\">Data Segment</td><td class=\"p-1 border\">Zero (0)</td><td class=\"p-1 border\">Local to block</td><td class=\"p-1 border\">Entire program execution</td></tr>\n<tr><td class=\"p-1 border font-semibold\">extern</td><td class=\"p-1 border\">Data Segment</td><td class=\"p-1 border\">Zero (0)</td><td class=\"p-1 border\">Global across files</td><td class=\"p-1 border\">Entire program execution</td></tr>\n</tbody>\n</table>\n</div>\n\n<strong>2. C Demonstration: Auto vs Static:</strong>\n<pre class=\"bg-slate-900 text-slate-100 p-3 rounded-lg overflow-x-auto\"><code>#include &lt;stdio.h&gt;\n\nvoid demo() {\n    auto int a = 1;     /* re-initialized on every call */\n    static int s = 1;   /* initialized ONLY once */\n\n    printf(\"auto a = %d, static s = %d\\n\", a, s);\n    a++;\n    s++;\n}\n\nint main() {\n    demo(); /* Outputs: auto a = 1, static s = 1 */\n    demo(); /* Outputs: auto a = 1, static s = 2 */\n    demo(); /* Outputs: auto a = 1, static s = 3 */\n    return 0;\n}</code></pre>",
    "examTip": "Highlight that 'static' variables retain their value between successive function calls and are initialized only once.",
    "starred": false,
    "mastered": false
  },
  {
    "id": "card-59",
    "subjectId": "cprog",
    "unit": 3,
    "pyqTag": "\ud83d\udd25 Asked in SEE Feb 2026, CIE-2 \u2022 8 Marks",
    "badgeType": "\ud83d\udcd0 Derivation / Formula",
    "badgeLabel": "2D Arrays",
    "question": "Write a C program to perform addition of two matrices of order m x n and display the resulting sum matrix in proper rectangular grid format.",
    "hint": "Check that both matrices have identical dimensions m x n. Compute C[i][j] = A[i][j] + B[i][j].",
    "answer": "<strong>Complete Matrix Addition Program:</strong>\n<pre class=\"bg-slate-900 text-slate-100 p-3 rounded-lg overflow-x-auto\"><code>#include &lt;stdio.h&gt;\n\nint main() {\n    int m, n, i, j;\n    int A[10][10], B[10][10], Sum[10][10];\n\n    printf(\"Enter matrix dimensions rows (m) and cols (n): \");\n    scanf(\"%d %d\", &m, &n);\n\n    printf(\"Enter elements of Matrix A:\\n\");\n    for (i = 0; i &lt; m; i++) {\n        for (j = 0; j &lt; n; j++) {\n            scanf(\"%d\", &A[i][j]);\n        }\n    }\n\n    printf(\"Enter elements of Matrix B:\\n\");\n    for (i = 0; i &lt; m; i++) {\n        for (j = 0; j &lt; n; j++) {\n            scanf(\"%d\", &B[i][j]);\n            /* Compute sum on the fly */\n            Sum[i][j] = A[i][j] + B[i][j];\n        }\n    }\n\n    printf(\"\\n--- RESULTANT SUM MATRIX (A + B) ---\\n\");\n    for (i = 0; i &lt; m; i++) {\n        for (j = 0; j &lt; n; j++) {\n            printf(\"%5d \", Sum[i][j]);\n        }\n        printf(\"\\n\");\n    }\n    return 0;\n}</code></pre>",
    "examTip": "Always format 2D output using a newline printf('\\n') after inner column loop completes to render a neat 2D matrix.",
    "starred": false,
    "mastered": false
  },
  {
    "id": "card-60",
    "subjectId": "cprog",
    "unit": 5,
    "pyqTag": "\ud83d\udd25 Asked in SEE Feb 2026, CIE-2 \u2022 6 Marks",
    "badgeType": "\ud83d\udcd0 Derivation / Formula",
    "badgeLabel": "Pointers Call-by-Ref",
    "question": "Write a C program to swap two numbers using pointers (call-by-reference). Explain why standard call-by-value fails to modify actual caller variables.",
    "hint": "In call-by-value, formal parameters are local stack copies; changes vanish on function return. Call-by-reference passes memory addresses.",
    "answer": "<strong>1. Why Call-by-Value Fails:</strong>\nIn C, when arguments are passed by value, the compiler copies the variable values into the called function's private stack frame. Any modifications affect only these temporary local copies; the caller's variables remain unchanged when the stack frame is destroyed upon return.\n\n<strong>2. Swapping via Call-by-Reference Program:</strong>\n<pre class=\"bg-slate-900 text-slate-100 p-3 rounded-lg overflow-x-auto\"><code>#include &lt;stdio.h&gt;\n\n/* Function accepts pointer addresses */\nvoid swap(int *x, int *y) {\n    int temp = *x; /* dereference x */\n    *x = *y;       /* assign value at y to address x */\n    *y = temp;     /* assign temp to address y */\n}\n\nint main() {\n    int a = 10, b = 20;\n    printf(\"Before swap: a = %d, b = %d\\n\", a, b);\n\n    /* Pass memory addresses using & */\n    swap(&a, &b);\n\n    printf(\"After swap:  a = %d, b = %d\\n\", a, b);\n    return 0;\n}</code></pre>",
    "examTip": "Use dereference operator * to access values and address-of operator & when calling swap(&a, &b).",
    "starred": false,
    "mastered": false
  },
  {
    "id": "card-61",
    "subjectId": "const",
    "unit": 2,
    "pyqTag": "\ud83d\udd25 Asked in CIE-1 2026 \u2022 6 Marks",
    "badgeType": "\u26a1 Exception / Trap",
    "badgeLabel": "Rights of Accused",
    "question": "Describe the constitutional safeguards and fundamental rights guaranteed to an accused person under Article 20 of the Constitution of India.",
    "hint": "Article 20 contains 3 safeguards: (1) Protection against ex-post facto laws, (2) Protection against Double Jeopardy, (3) Protection against Self-Incrimination.",
    "answer": "<strong>1. Three Inviolable Protections Under Article 20:</strong>\n\u2022 <strong>1. Protection Against Ex-Post Facto Laws (Article 20(1)):</strong>\n  - No person can be convicted of any offence except for violation of a law that was in force at the actual time of the commission of the act.\n  - A person cannot be subjected to a penalty greater than that which might have been inflicted under the law in force at the time of the offence. (Applies strictly to criminal laws, not civil liabilities or tax laws).\n\u2022 <strong>2. Protection Against Double Jeopardy (Article 20(2)):</strong>\n  - <em>\"No person shall be prosecuted and punished for the same offence more than once.\"</em>\n  - Protects an accused from facing multiple judicial trials and punishments by a court of law for the identical criminal act. (Does not bar administrative disciplinary proceedings).\n\u2022 <strong>3. Protection Against Self-Incrimination (Article 20(3)):</strong>\n  - <em>\"No person accused of any offence shall be compelled to be a witness against himself.\"</em>\n  - An accused individual cannot be physically or psychologically coerced into providing confessions. Narco-analysis, polygraph tests, and brain-mapping performed without consent violate Article 20(3) (Selvi v. State of Karnataka).",
    "examTip": "Cite the 3 distinct clauses: 20(1) Ex-post facto, 20(2) Double jeopardy, and 20(3) Self-incrimination.",
    "starred": false,
    "mastered": false
  },
  {
    "id": "card-62",
    "subjectId": "const",
    "unit": 4,
    "pyqTag": "\ud83d\udd25 Asked in CIE-2 2026 \u2022 6 Marks",
    "badgeType": "\ud83d\udcd0 Derivation / Formula",
    "badgeLabel": "Election Commission",
    "question": "Analyze the constitutional composition, powers, and functions of the Election Commission of India under Article 324.",
    "hint": "Article 324 vests superintendence, direction, and control of elections in ECI: Chief Election Commissioner + 2 Election Commissioners.",
    "answer": "<strong>1. Constitutional Composition (Article 324):</strong>\n\u2022 The Election Commission consists of the <strong>Chief Election Commissioner (CEC)</strong> and such number of other Election Commissioners as the President may from time to time fix. Currently, it functions as a multi-member body with 1 CEC and 2 Election Commissioners having equal voting powers.\n\u2022 Appointed by the President of India.\n\u2022 <strong>Security of Tenure:</strong> The CEC enjoys security of tenure equivalent to a Supreme Court judge and can only be removed by presidential impeachment after an address by both Houses of Parliament with a special majority on grounds of proved misbehavior or incapacity.\n\n<strong>2. Powers & Functions:</strong>\n1. <strong>Administrative Functions:</strong>\n   - Demarcation of constituencies (Delimitation Commission).\n   - Preparation, revision, and publication of electoral rolls.\n   - Recognition of political parties and allotment of election symbols.\n2. <strong>Enforcement of Model Code of Conduct (MCC):</strong>\n   - Ensures free and fair elections, preventing ruling parties from misusing government machinery or public funds.\n3. <strong>Advisory Functions:</strong>\n   - Advises the President or Governor on disqualification of sitting members of Parliament or State Legislatures.",
    "examTip": "Mention that the CEC cannot be removed at the pleasure of the executive; removal requires parliamentary impeachment identical to a Supreme Court judge.",
    "starred": false,
    "mastered": false
  },
  {
    "id": "card-prac-101",
    "subjectId": "chem",
    "unit": 1,
    "pyqTag": "\ud83c\udfaf Practice Question \u2022 High Probability",
    "badgeType": "\ud83e\uddea Reaction / Mechanism",
    "badgeLabel": "Fuel Cell Practice",
    "question": "Describe the construction and working of a Direct Methanol Fuel Cell (DMFC). Write the anodic, cathodic, and overall cell reactions. What are its advantages over hydrogen fuel cells?",
    "hint": "DMFC uses liquid methanol (CH3OH) directly as fuel with polymer electrolyte membrane (Nafion). No need for hydrogen storage tanks.",
    "answer": "<strong>1. Principle of Direct Methanol Fuel Cell (DMFC):</strong>\nA DMFC is a sub-category of proton exchange membrane fuel cells (PEMFC) where liquid methanol ($CH_3OH$) diluted in water is fed directly to the anode without requiring a bulky external fuel reformer.\n\n<strong>2. Construction Components:</strong>\n\u2022 <strong>Anode (Fuel Electrode):</strong> Carbon cloth or paper loaded with Platinum-Ruthenium ($Pt-Ru$) catalyst nanoparticles. (Ruthenium prevents CO poisoning of Platinum sites).\n\u2022 <strong>Cathode (Air Electrode):</strong> Porous carbon paper with pure Platinum ($Pt$) catalyst for oxygen reduction.\n\u2022 <strong>Electrolyte:</strong> Solid Polymer Electrolyte membrane (typically <strong>Nafion</strong>, a sulfonated tetrafluoroethylene copolymer) that selectively conducts protons ($H^+$).\n\u2022 <strong>Operating Temperature:</strong> $60^\\circ\\text{C} - 90^\\circ\\text{C}$.\n\n<strong>3. Working Electrode Reactions:</strong>\n\u2022 <strong>Anode Reaction (Oxidation of Methanol):</strong>\n  $$CH_3OH + H_2O \\rightarrow CO_2 + 6H^+ + 6e^- \\quad (E^\\circ = +0.02\\text{ V})$$\n\u2022 <strong>Cathode Reaction (Reduction of Oxygen):</strong>\n  $$\\frac{3}{2} O_2 + 6H^+ + 6e^- \\rightarrow 3H_2O \\quad (E^\\circ = +1.23\\text{ V})$$\n\u2022 <strong>Overall Cell Reaction:</strong>\n  $$CH_3OH + \\frac{3}{2} O_2 \\rightarrow CO_2 + 2H_2O \\quad (E^\\circ_{\\text{cell}} = 1.21\\text{ V})$$\n  (Theoretical thermodynamic EMF is $1.21\\text{ V}$; practical operating voltage is $0.5 - 0.7\\text{ V}$).\n\n<strong>4. Advantages over Hydrogen Fuel Cells:</strong>\n1. <strong>Liquid Fuel Convenience:</strong> Methanol is an easily transportable liquid with high energy density, eliminating complex high-pressure hydrogen storage cylinders.\n2. <strong>Instant Refueling:</strong> Fuel cartridges can be swapped in seconds, ideal for military transceivers and mobile electronics.",
    "examTip": "Always highlight the role of the Pt-Ru bimetallic catalyst in preventing carbon monoxide (CO) catalyst poisoning.",
    "starred": false,
    "mastered": false
  },
  {
    "id": "card-prac-102",
    "subjectId": "chem",
    "unit": 2,
    "pyqTag": "\ud83c\udfaf Practice Question \u2022 High Probability",
    "badgeType": "\ud83e\uddea Reaction / Mechanism",
    "badgeLabel": "Corrosion Control Practice",
    "question": "Explain the principle and working of Cathodic Protection with neat diagrams. Distinguish between the Sacrificial Anode Method and Impressed Current Cathodic Protection (ICCP).",
    "hint": "Principle: Force the structure to become the cathode. Sacrificial uses more active metal (Mg/Zn); ICCP uses external DC power supply.",
    "answer": "<strong>1. Principle of Cathodic Protection:</strong>\nCorrosion occurs only at anodic sites where metal atoms lose electrons. Cathodic protection operates by supplying electrons from an external source or auxiliary anode, shifting the electrochemical potential of the protected structure into the immune region, thereby converting the <strong>entire base metal structure into a non-corroding CATHODE</strong>.\n\n<strong>2. Comparison of the Two Methods:</strong>\n<div class=\"overflow-x-auto my-2\">\n<table class=\"w-full text-xs text-left border border-slate-300\">\n<thead class=\"bg-slate-100\"><tr><th class=\"p-1 border\">Parameter</th><th class=\"p-1 border\">Sacrificial Anode Method</th><th class=\"p-1 border\">Impressed Current (ICCP)</th></tr></thead>\n<tbody>\n<tr><td class=\"p-1 border font-semibold\">Driving Source</td><td class=\"p-1 border\">Natural galvanic potential difference ($\\Delta E$)</td><td class=\"p-1 border\">External DC power source (rectifier)</td></tr>\n<tr><td class=\"p-1 border font-semibold\">Anode Material</td><td class=\"p-1 border\">Active metals: Zinc ($Zn$), Magnesium ($Mg$), or Aluminium ($Al$)</td><td class=\"p-1 border\">Inert anodes: Platinized titanium, graphite, high-silicon cast iron</td></tr>\n<tr><td class=\"p-1 border font-semibold\">External Power</td><td class=\"p-1 border\">None required ($0\\text{ W}$)</td><td class=\"p-1 border\">Continuous AC/DC electrical supply needed</td></tr>\n<tr><td class=\"p-1 border font-semibold\">Current Controllability</td><td class=\"p-1 border\">Fixed by galvanic couple</td><td class=\"p-1 border\">Smoothly adjustable via potentiostat</td></tr>\n<tr><td class=\"p-1 border font-semibold\">Application Scale</td><td class=\"p-1 border\">Small pipelines, ship rudders, home water heaters</td><td class=\"p-1 border\">Long cross-country oil pipelines, offshore drilling rigs</td></tr>\n</tbody>\n</table>\n</div>",
    "examTip": "Mention that in ICCP the positive terminal of the DC power source connects to the inert anode and the negative terminal to the structure.",
    "starred": false,
    "mastered": false
  },
  {
    "id": "card-prac-103",
    "subjectId": "chem",
    "unit": 3,
    "pyqTag": "\ud83c\udfaf Practice Question \u2022 High Probability",
    "badgeType": "\ud83e\uddea Reaction / Mechanism",
    "badgeLabel": "Polymers Practice",
    "question": "What are conducting polymers? Explain the mechanism of electrical conduction in Polyacetylene through oxidative (p-type) doping.",
    "hint": "Conjugated double bonds (-C=C-) form delocalized pi-electrons. Oxidative doping with I2 or FeCl3 removes electrons, forming polarons and bipolarons.",
    "answer": "<strong>1. Definition of Conducting Polymers:</strong>\nOrganic macromolecules with extensive conjugated alternating single and double carbon-carbon bonds ($\\dots - C = C - C = C - \\dots$) along their polymer backbone that exhibit metallic or semiconductor-like electrical conductivity when chemically or electrochemically doped.\n\n<strong>2. Mechanism of Conduction via Oxidative ($p$-type) Doping:</strong>\n\u2022 <strong>Undoped State:</strong> Pristine <em>trans</em>-polyacetylene has alternating $\\pi$-bonds with a bandgap of $\\sim 1.5\\text{ eV}$ and behaves as an electrical insulator ($10^{-10}\\text{ S/cm}$).\n\u2022 <strong>Doping Step (Oxidation):</strong> Exposure of the polymer to an oxidizing electron-acceptor vapor such as Iodine ($I_2$) or Ferric chloride ($FeCl_3$):\n  $$(CH)_x + \\frac{3y}{2} I_2 \\rightarrow [ (CH)_x^{y+} \\cdot y I_3^- ]$$\n\u2022 <strong>Formation of Polarons & Bipolarons:</strong>\n  1. Removal of a $\\pi$-electron from the backbone creates a radical cation known as a <strong>Polaron</strong> (a localized charge associated with structural distortion).\n  2. Removal of a second electron from an already oxidized site yields a dication called a <strong>Bipolaron</strong> (two positive charges without unpaired spins).\n\u2022 <strong>Charge Transport:</strong> Under an applied electric field, these positively charged bipolaron states migrate freely along the delocalized $\\pi$-conjugated chain and hop between adjacent chains, elevating conductivity by over 12 orders of magnitude to metallic levels ($\\sim 10^3 - 10^5\\text{ S/cm}$)!",
    "examTip": "Mention the key conduction carriers: Polarons (radical cations) and Bipolarons (dications).",
    "starred": false,
    "mastered": false
  },
  {
    "id": "card-prac-104",
    "subjectId": "math",
    "unit": 1,
    "pyqTag": "\ud83c\udfaf Practice Question \u2022 High Probability",
    "badgeType": "\ud83d\udd22 Numerical Pattern",
    "badgeLabel": "Calculus Practice",
    "question": "Find all the extreme values (local maxima, local minima, and saddle points) of the function f(x, y) = x\u00b3 + y\u00b3 - 3 a x y, where a > 0.",
    "hint": "Stationary points: fx = 0, fy = 0. Use second derivative test: r = fxx, s = fxy, t = fyy. Check rt - s^2.",
    "answer": "<strong>1. First-Order Partial Derivatives & Stationary Points:</strong>\n$$f_x = \\frac{\\partial f}{\\partial x} = 3x^2 - 3ay = 0 \\implies y = \\frac{x^2}{a}$$\n$$f_y = \\frac{\\partial f}{\\partial y} = 3y^2 - 3ax = 0 \\implies x = \\frac{y^2}{a}$$\n\u2022 Substituting $y$ into the second equation:\n  $$x = \\frac{1}{a} \\left(\\frac{x^2}{a}\\right)^2 = \\frac{x^4}{a^3} \\implies x(x^3 - a^3) = 0$$\n\u2022 Real roots: $x = 0$ or $x = a$.\n  - When $x = 0 \\implies y = 0$. Stationary point: $(0, 0)$.\n  - When $x = a \\implies y = \\frac{a^2}{a} = a$. Stationary point: $(a, a)$.\n\n<strong>2. Second-Order Partial Derivatives:</strong>\n\u2022 $r = f_{xx} = 6x$\n\u2022 $s = f_{xy} = -3a$\n\u2022 $t = f_{yy} = 6y$\n\u2022 Discriminant: $\\Delta = rt - s^2 = (6x)(6y) - (-3a)^2 = 36xy - 9a^2$.\n\n<strong>3. Testing Stationary Points:</strong>\n\u2022 <strong>At $(0, 0)$:</strong>\n  $r = 0, \\quad s = -3a, \\quad t = 0$\n  $$\\Delta = rt - s^2 = 0 - 9a^2 = -9a^2 < 0 \\quad (\\text{since } a > 0)$$\n  Since $\\Delta < 0$, $(0, 0)$ is a <strong>SADDLE POINT</strong> (neither maximum nor minimum).\n\u2022 <strong>At $(a, a)$:</strong>\n  $r = 6a > 0$\n  $t = 6a$\n  $$\\Delta = rt - s^2 = 36a^2 - 9a^2 = 27a^2 > 0$$\n  Since $\\Delta > 0$ and $r = 6a > 0$, the function attains a <strong>LOCAL MINIMUM</strong> at $(a, a)$.\n\u2022 <strong>Minimum Value:</strong>\n  $$f(a, a) = a^3 + a^3 - 3a(a)(a) = 2a^3 - 3a^3 = \\mathbf{-a^3}$$",
    "examTip": "Conclusion: Saddle point at (0, 0); Local minimum at (a, a) with minimum value -a\u00b3.",
    "starred": false,
    "mastered": false
  },
  {
    "id": "card-prac-105",
    "subjectId": "math",
    "unit": 3,
    "pyqTag": "\ud83c\udfaf Practice Question \u2022 High Probability",
    "badgeType": "\ud83d\udd22 Numerical Pattern",
    "badgeLabel": "Linear Algebra Practice",
    "question": "Using Rayleigh's Power method, find the largest (dominant) eigenvalue and the corresponding eigenvector of the matrix A = [[4, 1], [1, 3]], taking X\u2080 = [1, 0]\u1d40 as initial guess. Perform 3 iterations.",
    "hint": "Algorithm: Y_k = A * X_k; \u03bb_{k+1} = max element of Y_k; X_{k+1} = Y_k / \u03bb_{k+1}.",
    "answer": "<strong>1. Given Data:</strong>\n$$A = \\begin{bmatrix} 4 & 1 \\\\ 1 & 3 \\end{bmatrix}, \\quad X_0 = \\begin{bmatrix} 1 \\\\ 0 \\end{bmatrix}$$\n\n<strong>2. Iteration Steps:</strong>\n\u2022 <strong>Iteration 1:</strong>\n  $$Y_1 = A X_0 = \\begin{bmatrix} 4 & 1 \\\\ 1 & 3 \\end{bmatrix} \\begin{bmatrix} 1 \\\\ 0 \\end{bmatrix} = \\begin{bmatrix} 4 \\\\ 1 \\end{bmatrix} = 4 \\begin{bmatrix} 1 \\\\ 0.25 \\end{bmatrix}$$\n  $$\\lambda^{(1)} = 4, \\quad X_1 = \\begin{bmatrix} 1 \\\\ 0.25 \\end{bmatrix}$$\n\n\u2022 <strong>Iteration 2:</strong>\n  $$Y_2 = A X_1 = \\begin{bmatrix} 4 & 1 \\\\ 1 & 3 \\end{bmatrix} \\begin{bmatrix} 1 \\\\ 0.25 \\end{bmatrix} = \\begin{bmatrix} 4 + 0.25 \\\\ 1 + 0.75 \\end{bmatrix} = \\begin{bmatrix} 4.25 \\\\ 1.75 \\end{bmatrix} = 4.25 \\begin{bmatrix} 1 \\\\ 0.4118 \\end{bmatrix}$$\n  $$\\lambda^{(2)} = 4.25, \\quad X_2 = \\begin{bmatrix} 1 \\\\ 0.4118 \\end{bmatrix}$$\n\n\u2022 <strong>Iteration 3:</strong>\n  $$Y_3 = A X_2 = \\begin{bmatrix} 4 & 1 \\\\ 1 & 3 \\end{bmatrix} \\begin{bmatrix} 1 \\\\ 0.4118 \\end{bmatrix} = \\begin{bmatrix} 4 + 0.4118 \\\\ 1 + 1.2353 \\end{bmatrix} = \\begin{bmatrix} 4.4118 \\\\ 2.2353 \\end{bmatrix} = 4.4118 \\begin{bmatrix} 1 \\\\ 0.5067 \\end{bmatrix}$$\n  $$\\lambda^{(3)} = \\mathbf{4.412}, \\quad X_3 = \\mathbf{\\begin{bmatrix} 1 \\\\ 0.507 \\end{bmatrix}}$$\n\n(Exact analytical dominant eigenvalue is $\\lambda = \\frac{7 + \\sqrt{5}}{2} \\approx 4.618$).",
    "examTip": "Always normalize the vector at each iteration by dividing by the largest magnitude component.",
    "starred": false,
    "mastered": false
  },
  {
    "id": "card-prac-106",
    "subjectId": "math",
    "unit": 4,
    "pyqTag": "\ud83c\udfaf Practice Question \u2022 High Probability",
    "badgeType": "\ud83d\udd22 Numerical Pattern",
    "badgeLabel": "Interpolation Practice",
    "question": "Using Lagrange's interpolation formula, find the value of y at x = 5 from the given data: (1, 2), (2, 4), (3, 8), (4, 16), (7, 128).",
    "hint": "Unequally spaced data points: Lagrange polynomial L(x) = sum(y_i * prod_{j!=i} (x - x_j)/(x_i - x_j)).",
    "answer": "<strong>1. Formula for Lagrange Interpolation:</strong>\n$$y(x) = \\sum_{i=0}^n y_i \\cdot L_i(x) = \\sum_{i=0}^n y_i \\left( \\prod_{j \\ne i} \\frac{x - x_j}{x_i - x_j} \\right)$$\n\n<strong>2. Given Coordinates:</strong>\n$x_0 = 1, y_0 = 2$ | $x_1 = 2, y_1 = 4$ | $x_2 = 3, y_2 = 8$ | $x_3 = 4, y_3 = 16$ | $x_4 = 7, y_4 = 128$.\nWe evaluate at $x = 5$.\n\n<strong>3. Terms Computation:</strong>\n\u2022 $L_0(5) = \\frac{(5-2)(5-3)(5-4)(5-7)}{(1-2)(1-3)(1-4)(1-7)} = \\frac{(3)(2)(1)(-2)}{(-1)(-2)(-3)(-6)} = \\frac{-12}{36} = -\\frac{1}{3} \\implies y_0 L_0 = 2(-1/3) = -0.6667$\n\u2022 $L_1(5) = \\frac{(5-1)(5-3)(5-4)(5-7)}{(2-1)(2-3)(2-4)(2-7)} = \\frac{(4)(2)(1)(-2)}{(1)(-1)(-2)(-5)} = \\frac{-16}{-10} = 1.6 \\implies y_1 L_1 = 4(1.6) = 6.4000$\n\u2022 $L_2(5) = \\frac{(5-1)(5-2)(5-4)(5-7)}{(3-1)(3-2)(3-4)(3-7)} = \\frac{(4)(3)(1)(-2)}{(2)(1)(-1)(-4)} = \\frac{-24}{8} = -3 \\implies y_2 L_2 = 8(-3) = -24.0000$\n\u2022 $L_3(5) = \\frac{(5-1)(5-2)(5-3)(5-7)}{(4-1)(4-2)(4-3)(4-7)} = \\frac{(4)(3)(2)(-2)}{(3)(2)(1)(-3)} = \\frac{-48}{-18} = \\frac{8}{3} \\implies y_3 L_3 = 16(8/3) = 42.6667$\n\u2022 $L_4(5) = \\frac{(5-1)(5-2)(5-3)(5-4)}{(7-1)(7-2)(7-3)(7-4)} = \\frac{(4)(3)(2)(1)}{(6)(5)(4)(3)} = \\frac{24}{360} = \\frac{1}{15} \\implies y_4 L_4 = 128(1/15) = 8.5333$\n\n<strong>4. Summation:</strong>\n$$y(5) = -0.6667 + 6.4000 - 24.0000 + 42.6667 + 8.5333 = \\mathbf{32.9333}$$\n(Notice: Points follow $y = 2^x$. At $x=5$, exact $2^5 = 32$. Polynomial interpolation gives $\\approx 32.93$).",
    "examTip": "Double-check the signs in denominators when computing each Lagrange cardinal basis polynomial Li(x).",
    "starred": false,
    "mastered": false
  },
  {
    "id": "card-prac-107",
    "subjectId": "cprog",
    "unit": 1,
    "pyqTag": "\ud83c\udfaf Practice Question \u2022 High Probability",
    "badgeType": "\ud83d\udcd0 Derivation / Formula",
    "badgeLabel": "Bitwise Logic Practice",
    "question": "Explain the bitwise operators supported in C. Write a C program to check whether a given integer is a power of 2 using a bitwise expression.",
    "hint": "Operators: &, |, ^, ~, <<, >>. Condition for power of 2: (n > 0) && ((n & (n - 1)) == 0).",
    "answer": "<strong>1. Bitwise Operators in C:</strong>\n\u2022 \\`&\\` (Bitwise AND): 1 only if both bits are 1.\n\u2022 \\`|\\` (Bitwise OR): 1 if either bit is 1.\n\u2022 \\`^\\` (Bitwise XOR): 1 if bits differ; 0 if identical.\n\u2022 \\`~\\` (Bitwise One's Complement): Inverts all bits.\n\u2022 \\`&lt;&lt;\\` (Left Shift): Multiplies by $2^k$.\n\u2022 \\`&gt;&gt;\\` (Right Shift): Divides by $2^k$.\n\n<strong>2. Power of 2 Logic & Program:</strong>\nIf $n$ is a power of 2 (e.g. $8 = 1000_2$), then $n-1$ has all lower bits flipped ($7 = 0111_2$).\nHence: \\`n & (n - 1) == 0\\`!\n\n<pre class=\"bg-slate-900 text-slate-100 p-3 rounded-lg overflow-x-auto\"><code>#include &lt;stdio.h&gt;\n\nint main() {\n    int n;\n    printf(\"Enter a positive integer: \");\n    scanf(\"%d\", &n);\n\n    if (n &gt; 0 && (n & (n - 1)) == 0) {\n        printf(\"%d is a POWER OF 2.\\n\", n);\n    } else {\n        printf(\"%d is NOT a power of 2.\\n\", n);\n    }\n    return 0;\n}</code></pre>",
    "examTip": "Include the condition n > 0 because 0 & (0 - 1) is 0, but 0 is not a power of 2!",
    "starred": false,
    "mastered": false
  },
  {
    "id": "card-prac-108",
    "subjectId": "cprog",
    "unit": 2,
    "pyqTag": "\ud83c\udfaf Practice Question \u2022 High Probability",
    "badgeType": "\ud83d\udcd0 Derivation / Formula",
    "badgeLabel": "C Algorithms Practice",
    "question": "Write a complete C program to check whether a given positive integer is an Armstrong number (e.g., 153 = 1\u00b3 + 5\u00b3 + 3\u00b3).",
    "hint": "Extract digits using % 10, cube them, accumulate sum, divide by 10. Check if sum == original.",
    "answer": "<strong>Armstrong Number C Program:</strong>\n<pre class=\"bg-slate-900 text-slate-100 p-3 rounded-lg overflow-x-auto\"><code>#include &lt;stdio.h&gt;\n#include &lt;math.h&gt;\n\nint main() {\n    int num, originalNum, remainder, result = 0, count = 0;\n\n    printf(\"Enter an integer: \");\n    scanf(\"%d\", &num);\n\n    originalNum = num;\n\n    /* Count number of digits */\n    int temp = num;\n    while (temp != 0) {\n        temp /= 10;\n        count++;\n    }\n\n    temp = num;\n    while (temp != 0) {\n        remainder = temp % 10;\n        result += pow(remainder, count);\n        temp /= 10;\n    }\n\n    if (result == originalNum) {\n        printf(\"%d is an ARMSTRONG number.\\n\", originalNum);\n    } else {\n        printf(\"%d is NOT an Armstrong number.\\n\", originalNum);\n    }\n    return 0;\n}</code></pre>",
    "examTip": "Preserve originalNum in a separate variable before running the destructive while loop (temp /= 10).",
    "starred": false,
    "mastered": false
  },
  {
    "id": "card-prac-109",
    "subjectId": "cprog",
    "unit": 3,
    "pyqTag": "\ud83c\udfaf Practice Question \u2022 High Probability",
    "badgeType": "\ud83d\udcd0 Derivation / Formula",
    "badgeLabel": "Search Algorithm Practice",
    "question": "Write a C program to implement Binary Search on a sorted array of N elements. State its best-case and worst-case time complexity.",
    "hint": "Array must be sorted. low = 0, high = n - 1. mid = low + (high - low) / 2. Best O(1), Worst O(log n).",
    "answer": "<strong>1. Binary Search C Program:</strong>\n<pre class=\"bg-slate-900 text-slate-100 p-3 rounded-lg overflow-x-auto\"><code>#include &lt;stdio.h&gt;\n\nint binarySearch(int arr[], int n, int key) {\n    int low = 0, high = n - 1;\n    while (low &lt;= high) {\n        int mid = low + (high - low) / 2;\n        if (arr[mid] == key) {\n            return mid; /* Element found */\n        } else if (arr[mid] &lt; key) {\n            low = mid + 1;\n        } else {\n            high = mid - 1;\n        }\n    }\n    return -1; /* Not found */\n}\n\nint main() {\n    int arr[] = {12, 24, 36, 48, 60, 72, 84, 96};\n    int n = sizeof(arr) / sizeof(arr[0]);\n    int key = 60;\n\n    int idx = binarySearch(arr, n, key);\n    if (idx != -1) {\n        printf(\"Element %d found at index %d (position %d).\\n\", key, idx, idx + 1);\n    } else {\n        printf(\"Element %d not found in array.\\n\", key);\n    }\n    return 0;\n}</code></pre>\n\n<strong>2. Complexity:</strong>\n\u2022 <strong>Best Case:</strong> $O(1)$ (target is at exact center).\n\u2022 <strong>Worst Case:</strong> $O(\\log_2 n)$ (halving search space each step).",
    "examTip": "Always calculate mid as low + (high - low) / 2 rather than (low + high) / 2 to prevent integer overflow in large arrays.",
    "starred": false,
    "mastered": false
  },
  {
    "id": "card-prac-110",
    "subjectId": "ai",
    "unit": 1,
    "pyqTag": "\ud83c\udfaf Practice Question \u2022 High Probability",
    "badgeType": "\ud83d\udcd0 Derivation / Formula",
    "badgeLabel": "Agent Design Practice",
    "question": "Explain the PEAS framework for designing an intelligent agent. Formulate the PEAS specifications for an Autonomous Self-Driving Taxi.",
    "hint": "PEAS: Performance measure, Environment, Actuators, Sensors. Detailed table for autonomous vehicle.",
    "answer": "<strong>1. What is the PEAS Framework?:</strong>\nIn Artificial Intelligence, the <strong>PEAS</strong> specification defines the task environment of an rational agent:\n\u2022 <strong>P \u2014 Performance Measure:</strong> Metric evaluating how successful the agent is.\n\u2022 <strong>E \u2014 Environment:</strong> The external world/operating context.\n\u2022 <strong>A \u2014 Actuators:</strong> Mechanisms through which the agent takes actions.\n\u2022 <strong>S \u2014 Sensors:</strong> Hardware devices through which the agent perceives environment states.\n\n<strong>2. PEAS Specification for an Autonomous Self-Driving Taxi:</strong>\n\u2022 <strong>Performance Measure:</strong>\n  - Safety (zero collisions/injuries), passenger comfort, trip duration optimization, fuel/battery efficiency, adherence to traffic regulations, ride fare profit.\n\u2022 <strong>Environment:</strong>\n  - Public city roads, pedestrian crosswalks, erratic drivers, fluctuating weather (rain/fog), lane markings, traffic light signals, construction zones.\n\u2022 <strong>Actuators:</strong>\n  - Steering wheel servomotor, accelerator throttle, hydraulic brakes, turn signals, audio horn, display screen.\n\u2022 <strong>Sensors:</strong>\n  - LiDAR (3D point clouds), optical cameras (lane/sign detection), RADAR (long-range velocity tracking), Ultrasonic sensors (parking proximity), GPS, IMU (accelerometer/gyroscope).",
    "examTip": "Structure PEAS as 4 distinct bullet points or a clear table for full marks.",
    "starred": false,
    "mastered": false
  },
  {
    "id": "card-prac-111",
    "subjectId": "ai",
    "unit": 3,
    "pyqTag": "\ud83c\udfaf Practice Question \u2022 High Probability",
    "badgeType": "\ud83d\udcd0 Derivation / Formula",
    "badgeLabel": "Machine Learning Practice",
    "question": "Explain the step-by-step working principle of the K-Means Clustering algorithm. How does it iteratively reassign cluster centroids?",
    "hint": "Unsupervised algorithm: 1. Choose K. 2. Initialize centroids. 3. Assign each point to closest centroid. 4. Recompute centroids. 5. Repeat until convergence.",
    "answer": "<strong>1. What is K-Means Clustering?:</strong>\nAn unsupervised machine learning algorithm that partitions $N$ unlabeled data points into $K$ distinct, non-overlapping clusters where each point belongs to the cluster with the nearest mean (centroid).\n\n<strong>2. Step-by-Step Algorithm:</strong>\n1. <strong>Step 1 \u2014 Choose $K$:</strong>\n   Select the desired number of clusters $K$ (often guided by the Elbow Method / Silhouette score).\n2. <strong>Step 2 \u2014 Centroid Initialization:</strong>\n   Randomly pick $K$ data points as the initial cluster centers: $\\mu_1, \\mu_2, \\dots, \\mu_K$.\n3. <strong>Step 3 \u2014 Cluster Assignment:</strong>\n   Assign each data point $x_i$ to its nearest centroid based on minimum Euclidean distance:\n   $$c^{(i)} = \\arg\\min_j \\| x_i - \\mu_j \\|^2$$\n4. <strong>Step 4 \u2014 Centroid Update:</strong>\n   Recalculate the position of each centroid $\\mu_j$ as the arithmetic mean of all points assigned to that cluster:\n   $$\\mu_j = \\frac{1}{|S_j|} \\sum_{x_i \\in S_j} x_i$$\n5. <strong>Step 5 \u2014 Convergence Check:</strong>\n   Repeat Steps 3 and 4 until centroids stop moving (change $< \\varepsilon$) or maximum iterations are reached.\n\n<strong>3. Objective Function (Inertia / WCSS):</strong>\n$$J = \\sum_{j=1}^K \\sum_{x_i \\in S_j} \\| x_i - \\mu_j \\|^2 \\quad \\rightarrow \\min$$",
    "examTip": "Write the Euclidean distance formula and state that K-means is an UNSUPERVISED learning algorithm.",
    "starred": false,
    "mastered": false
  },
  {
    "id": "card-prac-112",
    "subjectId": "mech",
    "unit": 1,
    "pyqTag": "\ud83c\udfaf Practice Question \u2022 High Probability",
    "badgeType": "\ud83d\udcd0 Derivation / Formula",
    "badgeLabel": "Renewable Energy Practice",
    "question": "Explain the working of a Tidal Power Plant with a schematic sketch. Distinguish between single-basin and double-basin tidal systems.",
    "hint": "Exploits gravitational pull of Moon/Sun causing high/low tides. Water flows through reversible bulb turbines during ebb and flood tides.",
    "answer": "<strong>1. Working Principle:</strong>\nTidal power harnesses the gravitational potential energy created by periodic oceanic tides (high tide / flood tide and low tide / ebb tide). A barrage (dam) across an estuary traps water at high tide, creating a hydraulic head difference across sluice gates.\n\n<strong>2. Operational Cycle:</strong>\n\u2022 <strong>Flood Generation:</strong> As high tide rises, water flows through sluice gates into the estuary basin, spinning low-head bulb turbines.\n\u2022 <strong>Ebb Generation:</strong> As ocean tide recedes, the trapped high-level water inside the basin is discharged back into the ocean through turbines, generating electrical power.\n\n<strong>3. Single-Basin vs. Double-Basin Systems:</strong>\n\u2022 <strong>Single-Basin System:</strong> Has only one storage reservoir. Power generation is intermittent, stopping during tidal equalization.\n\u2022 <strong>Double-Basin System:</strong> Uses two interconnected basins (an upper high-pool basin and a lower low-pool basin). Water flows continuously from high pool to low pool through turbines, providing uninterrupted base-load electrical power!",
    "examTip": "Mention the two primary generation cycles: Ebb generation (emptying) and Flood generation (filling).",
    "starred": false,
    "mastered": false
  },
  {
    "id": "card-prac-113",
    "subjectId": "mech",
    "unit": 4,
    "pyqTag": "\ud83c\udfaf Practice Question \u2022 High Probability",
    "badgeType": "\ud83d\udcd0 Derivation / Formula",
    "badgeLabel": "Belt Drive Derivation Practice",
    "question": "Derive the expression for the total length of an Open Belt Drive connecting two pulleys of radii r\u2081 and r\u2082 separated by center distance x.",
    "hint": "Total length L = 2(Arc length on pulley 1 + Arc length on pulley 2 + Straight length). Approximated as L = pi(r1+r2) + 2x + (r1-r2)^2/x.",
    "answer": "<strong>1. Geometry & Nomenclature:</strong>\n\u2022 Radius of larger pulley $= r_1$\n\u2022 Radius of smaller pulley $= r_2$\n\u2022 Distance between pulley centers $= x$\n\u2022 Angle of lap (contact) wrap angle: $\\alpha$ (where $\\sin\\alpha \\approx \\frac{r_1 - r_2}{x}$).\n\n<strong>2. Derivation Steps:</strong>\n\u2022 The total belt length $L$ comprises:\n  $$L = 2 \\times [\\text{Arc } AB + \\text{Straight length } BC + \\text{Arc } CD]$$\n\u2022 For the larger pulley: $\\text{Angle of contact} = \\pi + 2\\alpha$\n  $$\\text{Arc length on larger pulley} = r_1(\\pi + 2\\alpha)$$\n\u2022 For the smaller pulley: $\\text{Angle of contact} = \\pi - 2\\alpha$\n  $$\\text{Arc length on smaller pulley} = r_2(\\pi - 2\\alpha)$$\n\u2022 Straight length of belt $BC$:\n  $$BC = \\sqrt{x^2 - (r_1 - r_2)^2} = x \\left[ 1 - \\left(\\frac{r_1 - r_2}{x}\\right)^2 \\right]^{1/2}$$\n\u2022 Expanding by Binomial Theorem ($x \\gg r_1 - r_2$):\n  $$BC \\approx x - \\frac{(r_1 - r_2)^2}{2x}$$\n\n\u2022 Summing all segments and approximating $\\alpha \\approx \\sin\\alpha = \\frac{r_1 - r_2}{x}$:\n  $$L = \\pi(r_1 + r_2) + 2\\alpha(r_1 - r_2) + 2x - \\frac{(r_1 - r_2)^2}{x}$$\n  $$L = \\pi(r_1 + r_2) + 2\\left(\\frac{r_1 - r_2}{x}\\right)(r_1 - r_2) + 2x - \\frac{(r_1 - r_2)^2}{x}$$\n  $$\\mathbf{L = \\pi(r_1 + r_2) + 2x + \\frac{(r_1 - r_2)^2}{x}}$$",
    "examTip": "State the binomial expansion approximation step: (1 - y)^(1/2) approx 1 - y/2.",
    "starred": false,
    "mastered": false
  },
  {
    "id": "card-prac-114",
    "subjectId": "const",
    "unit": 1,
    "pyqTag": "\ud83c\udfaf Practice Question \u2022 High Probability",
    "badgeType": "\ud83d\udcd0 Derivation / Formula",
    "badgeLabel": "Judicial Review Practice",
    "question": "Explain the doctrine of Judicial Review under Article 13 of the Indian Constitution. What are the Doctrine of Severability and Doctrine of Eclipse?",
    "hint": "Article 13 declares any law inconsistent with Fundamental Rights to be void. Severability separates valid from invalid parts; Eclipse shadows pre-constitutional laws.",
    "answer": "<strong>1. Article 13 & Judicial Review:</strong>\nArticle 13 is the cornerstone of constitutional supremacy. It declares that:\n\u2022 All pre-constitutional laws (Article 13(1)) and post-constitutional laws (Article 13(2)) that are inconsistent with or take away Part III Fundamental Rights are <strong>VOID</strong> to the extent of such inconsistency.\n\u2022 It empowers the High Courts (Article 226) and Supreme Court (Article 32) to review and strike down legislative enactments or executive orders.\n\n<strong>2. Key Constitutional Doctrines Arising from Article 13:</strong>\n1. <strong>Doctrine of Severability (Separability):</strong>\n   \u2022 When only a specific section of a statute violates fundamental rights while the rest remains constitutional, courts do not invalidate the entire act.\n   \u2022 If the valid portion is independent and can stand on its own without the invalid portion, only the offending clause is severed and struck down.\n2. <strong>Doctrine of Eclipse:</strong>\n   \u2022 Applies primarily to pre-constitutional laws (in force before Jan 26, 1950).\n   \u2022 An inconsistent pre-constitutional law does not die completely; it remains dormant or 'eclipsed' by the shadow of the fundamental right.\n   \u2022 If a constitutional amendment removes the inconsistency, the shadow is lifted and the law becomes active and enforceable again without re-enactment!",
    "examTip": "Distinguish clearly between Severability (surgical removal of bad sections) and Eclipse (dormant overshadowing of pre-1950 laws).",
    "starred": false,
    "mastered": false
  },
  {
    "id": "card-prac-115",
    "subjectId": "const",
    "unit": 5,
    "pyqTag": "\ud83c\udfaf Practice Question \u2022 High Probability",
    "badgeType": "\u26a1 Exception / Trap",
    "badgeLabel": "Whistleblowing Practice",
    "question": "Define Whistleblowing in engineering organizations. Under what ethical conditions is an engineer morally justified or obligated to blow the whistle?",
    "hint": "Whistleblowing is reporting unethical/unsafe practices outside regular chain of command. Justified by Richard DeGeorge's 5 ethical criteria.",
    "answer": "<strong>1. Definition:</strong>\nWhistleblowing is the act by an employee of reporting illegal, dangerous, fraudulent, or unethical corporate practices to outside regulatory authorities, media, or law enforcement, typically after internal managerial channels have failed or been suppressed.\n\n<strong>2. Richard DeGeorge's 5 Criteria for Morally Justified Whistleblowing:</strong>\n1. <strong>Imminent Serious Harm:</strong> The engineering product or defect will cause serious and considerable harm to the public or environment.\n2. <strong>Internal Escalation:</strong> The engineer has documented the danger and reported it to their immediate supervisor without satisfactory corrective action.\n3. <strong>Exhaustion of Internal Remedies:</strong> The engineer has taken the grievance up the chain of corporate command to the highest executive board.\n4. <strong>Documented Objective Proof:</strong> The engineer possesses verifiable, documented empirical evidence that would convince a reasonable, impartial technical observer.\n5. <strong>Reasonable Likelihood of Success:</strong> Going public with the disclosure has a strong probability of preventing the anticipated disaster and saving lives.",
    "examTip": "Cite Richard DeGeorge's 5 criteria for ethical whistleblowing.",
    "starred": false,
    "mastered": false
  },
  {
    "id": "card-prac-116",
    "subjectId": "eng",
    "unit": 2,
    "pyqTag": "\ud83c\udfaf Practice Question \u2022 High Probability",
    "badgeType": "\u26a1 Exception / Trap",
    "badgeLabel": "Interpersonal Skills Practice",
    "question": "Explain the Johari Window model of interpersonal communication and self-awareness. How does expanding the 'Open Arena' improve engineering teamwork?",
    "hint": "4 quadrants based on Known to Self vs Known to Others: Open/Arena, Blind Spot, Fa\u00e7ade/Hidden, Unknown. Feedback shrinks blind spot.",
    "answer": "<strong>1. The Johari Window Framework:</strong>\nDeveloped by psychologists Joseph Luft and Harrington Ingham, it visualizes how individuals communicate and develop mutual trust across two axes:\n\u2022 <strong>Known / Unknown to Self</strong>\n\u2022 <strong>Known / Unknown to Others</strong>\n\n<div class=\"overflow-x-auto my-2\">\n<table class=\"w-full text-xs text-left border border-slate-300\">\n<thead class=\"bg-slate-100\">\n<tr><th class=\"p-2 border\"></th><th class=\"p-2 border\">Known to Others</th><th class=\"p-2 border\">Not Known to Others</th></tr>\n</thead>\n<tbody>\n<tr>\n<td class=\"p-2 border font-bold bg-slate-50\">Known to Self</td>\n<td class=\"p-2 border bg-emerald-50 text-emerald-950\">\n<strong>1. OPEN ARENA:</strong><br>\nShared technical skills, recognized leadership style, transparent project goals.\n</td>\n<td class=\"p-2 border bg-amber-50 text-amber-950\">\n<strong>3. HIDDEN / FA\u00c7ADE:</strong><br>\nUnexpressed doubts, private fears, undisclosed software bugs.\n</td>\n</tr>\n<tr>\n<td class=\"p-2 border font-bold bg-slate-50\">Not Known to Self</td>\n<td class=\"p-2 border bg-blue-50 text-blue-950\">\n<strong>2. BLIND SPOT:</strong><br>\nInterrupting teammates, abrasive email tone, defensive body posture.\n</td>\n<td class=\"p-2 border bg-slate-50 text-slate-700\">\n<strong>4. UNKNOWN:</strong><br>\nLatent leadership potential, untested crisis resilience.\n</td>\n</tr>\n</tbody>\n</table>\n</div>\n\n<strong>2. Value for Engineering Teams:</strong>\n\u2022 <strong>Soliciting Constructive Feedback:</strong> Shrinks the Blind Spot and expands the Open Arena.\n\u2022 <strong>Psychological Safety & Disclosure:</strong> Revealing technical roadblocks shrinks the Hidden area, preventing silent project failures.",
    "examTip": "Draw the 2x2 matrix and explain how feedback shrinks Quadrant 2 (Blind Spot).",
    "starred": false,
    "mastered": false
  },
  {
    "id": "card-prac-117",
    "subjectId": "eng",
    "unit": 5,
    "pyqTag": "\ud83c\udfaf Practice Question \u2022 High Probability",
    "badgeType": "\ud83d\udcd0 Derivation / Formula",
    "badgeLabel": "Interview Technique Practice",
    "question": "Explain the STAR technique (Situation, Task, Action, Result) for answering behavioral interview questions during engineering campus placements.",
    "hint": "STAR: Situation (context), Task (challenge/goal), Action (specific technical actions you took), Result (measurable quantifiable impact).",
    "answer": "<strong>1. The STAR Methodology:</strong>\nA structured framework to articulate past project experiences clearly and persuasively during engineering behavioral interviews:\n\u2022 <strong>S \u2014 Situation:</strong>\n  - Set the background context. Describe the specific academic project, hackathon, or internship challenge (When, where, who).\n\u2022 <strong>T \u2014 Task:</strong>\n  - Define your specific responsibility or objective. What exact bottleneck needed fixing?\n\u2022 <strong>A \u2014 Action:</strong>\n  - Detail the technical actions **YOU personally executed**. Highlight algorithms chosen, circuits debugged, or collaboration tools used (use \"I\", not just \"we\").\n\u2022 <strong>R \u2014 Result:</strong>\n  - Share the quantifiable outcome. State performance improvements (e.g., latency reduction, power savings, grade, or awards).\n\n<strong>2. Concrete Engineering Example:</strong>\n\u2022 <em>Situation:</em> During our 1st-sem embedded robotics project, our team's autonomous line follower repeatedly lost track at high-speed sharp turns.\n\u2022 <em>Task:</em> As firmware lead, I had to redesign the sensor polling routine to stabilize steering before the final evaluation.\n\u2022 <em>Action:</em> I implemented a PID control loop in C to smooth PWM motor pulses and increased optical sensor ADC sampling frequency from 50 Hz to 250 Hz.\n\u2022 <em>Result:</em> Tracking accuracy improved by 40%, lap time dropped by 3.2 seconds, and our team scored full 20/20 in the project demo!",
    "examTip": "Stress that the 'R' (Result) must include measurable data (percentages, times, or scores).",
    "starred": false,
    "mastered": false
  },
  {
    "id": "card-prac-201",
    "subjectId": "math",
    "unit": 1,
    "pyqTag": "\ud83c\udfaf Practice Question \u2022 High Probability",
    "badgeType": "\ud83d\udcd0 Derivation / Formula",
    "badgeLabel": "Taylor Series 2-Var",
    "question": "Expand f(x, y) = e\u02e3 cos(y) in powers of x and y (Maclaurin's series) up to and including third-degree terms.",
    "hint": "Formula: f(x,y) = f(0,0) + (x fx + y fy) + (1/2!)(x\u00b2 fxx + 2xy fxy + y\u00b2 fyy) + (1/3!)(x\u00b3 fxxx + 3x\u00b2y fxxy + 3xy\u00b2 fxyy + y\u00b3 fyyy).",
    "answer": "<strong>1. Maclaurin's Series Expansion for Two Variables:</strong>\n$$f(x, y) = f(0,0) + [x f_x + y f_y]_{(0,0)} + \\frac{1}{2!}[x^2 f_{xx} + 2xy f_{xy} + y^2 f_{yy}]_{(0,0)} + \\frac{1}{3!}[x^3 f_{xxx} + 3x^2y f_{xxy} + 3xy^2 f_{xyy} + y^3 f_{yyy}]_{(0,0)} + \\dots$$\n\n<strong>2. Computing Partial Derivatives at $(0, 0)$:</strong>\n\u2022 $f(x, y) = e^x \\cos y \\implies f(0, 0) = e^0 \\cos 0 = 1$\n\u2022 <strong>First-Order:</strong>\n  - $f_x = e^x \\cos y \\implies f_x(0, 0) = 1$\n  - $f_y = -e^x \\sin y \\implies f_y(0, 0) = 0$\n\u2022 <strong>Second-Order:</strong>\n  - $f_{xx} = e^x \\cos y \\implies f_{xx}(0, 0) = 1$\n  - $f_{xy} = -e^x \\sin y \\implies f_{xy}(0, 0) = 0$\n  - $f_{yy} = -e^x \\cos y \\implies f_{yy}(0, 0) = -1$\n\u2022 <strong>Third-Order:</strong>\n  - $f_{xxx} = e^x \\cos y \\implies f_{xxx}(0, 0) = 1$\n  - $f_{xxy} = -e^x \\sin y \\implies f_{xxy}(0, 0) = 0$\n  - $f_{xyy} = -e^x \\cos y \\implies f_{xyy}(0, 0) = -1$\n  - $f_{yyy} = e^x \\sin y \\implies f_{yyy}(0, 0) = 0$\n\n<strong>3. Assembling the Series:</strong>\n$$f(x, y) = 1 + [x(1) + y(0)] + \\frac{1}{2}[x^2(1) + 2xy(0) + y^2(-1)] + \\frac{1}{6}[x^3(1) + 3x^2y(0) + 3xy^2(-1) + y^3(0)]$$\n$$\\mathbf{f(x, y) = 1 + x + \\frac{1}{2}(x^2 - y^2) + \\frac{1}{6}(x^3 - 3xy^2) + \\dots}$$",
    "examTip": "Check that your series matches the product of 1D expansions: e^x = (1 + x + x\u00b2/2 + x\u00b3/6) and cos(y) = (1 - y\u00b2/2).",
    "starred": false,
    "mastered": false
  },
  {
    "id": "card-prac-202",
    "subjectId": "math",
    "unit": 2,
    "pyqTag": "\ud83c\udfaf Practice Question \u2022 High Probability",
    "badgeType": "\ud83d\udcd0 Derivation / Formula",
    "badgeLabel": "Green's Theorem",
    "question": "State Green's Theorem in a plane. Evaluate \u222e_C [(xy + y\u00b2) dx + x\u00b2 dy] around the closed boundary C bounded by y = x and y = x\u00b2.",
    "hint": "Green's Theorem: \u222e_C (M dx + N dy) = \u222c_R (\u2202N/\u2202x - \u2202M/\u2202y) dx dy. M = xy + y\u00b2, N = x\u00b2. Limits: x from 0 to 1, y from x\u00b2 to x.",
    "answer": "<strong>1. Statement of Green's Theorem:</strong>\nIf $M(x, y)$ and $N(x, y)$ along with their first partial derivatives are continuous in a simply connected region $R$ of the $xy$-plane bounded by a piecewise smooth closed curve $C$ traversed counterclockwise:\n$$\\oint_C (M dx + N dy) = \\iint_R \\left( \\frac{\\partial N}{\\partial x} - \\frac{\\partial M}{\\partial y} \\right) dx \\, dy$$\n\n<strong>2. Application to Given Problem:</strong>\n\u2022 $M = xy + y^2 \\implies \\frac{\\partial M}{\\partial y} = x + 2y$\n\u2022 $N = x^2 \\implies \\frac{\\partial N}{\\partial x} = 2x$\n\u2022 Integrand:\n  $$\\frac{\\partial N}{\\partial x} - \\frac{\\partial M}{\\partial y} = 2x - (x + 2y) = x - 2y$$\n\n<strong>3. Region Limits (Bounded by $y = x^2$ and $y = x$):</strong>\n\u2022 Intersection points: $x^2 = x \\implies x(x - 1) = 0 \\implies x = 0$ and $x = 1$.\n\u2022 For a given $x \\in [0, 1]$, $y$ varies from bottom curve $y = x^2$ to top curve $y = x$.\n\n<strong>4. Double Integration:</strong>\n$$I = \\int_{x=0}^1 \\int_{y=x^2}^x (x - 2y) \\, dy \\, dx = \\int_0^1 \\left[ xy - y^2 \\right]_{y=x^2}^x dx$$\n$$= \\int_0^1 \\left[ (x^2 - x^2) - (x(x^2) - (x^2)^2) \\right] dx = \\int_0^1 \\left( -x^3 + x^4 \\right) dx$$\n$$= \\left[ -\\frac{x^4}{4} + \\frac{x^5}{5} \\right]_0^1 = -\\frac{1}{4} + \\frac{1}{5} = \\mathbf{-\\frac{1}{20}}$$",
    "examTip": "Remember that the bottom boundary is y = x\u00b2 and the top boundary is y = x between x = 0 and x = 1.",
    "starred": false,
    "mastered": false
  },
  {
    "id": "card-prac-203",
    "subjectId": "math",
    "unit": 5,
    "pyqTag": "\ud83c\udfaf Practice Question \u2022 High Probability",
    "badgeType": "\ud83d\udd22 Numerical Pattern",
    "badgeLabel": "Modified Euler IVP",
    "question": "Solve dy/dx = x + \u221ay with y(0) = 1 to find y(0.2) using Modified Euler's Method taking step size h = 0.2. Carry out two corrector iterations.",
    "hint": "Predictor (Euler): y1^(0) = y0 + h f(x0, y0). Corrector: y1^(k+1) = y0 + (h/2)[f(x0, y0) + f(x1, y1^(k))].",
    "answer": "<strong>1. Given IVP & Step Size:</strong>\n\u2022 $f(x, y) = x + \\sqrt{y}, \\quad x_0 = 0, \\quad y_0 = 1, \\quad h = 0.2 \\implies x_1 = 0.2$.\n\u2022 $f(x_0, y_0) = 0 + \\sqrt{1} = 1.0$.\n\n<strong>2. Step 1 \u2014 Predictor (Standard Euler):</strong>\n$$y_1^{(0)} = y_0 + h \\cdot f(x_0, y_0) = 1 + (0.2)(1.0) = \\mathbf{1.2000}$$\n\n<strong>3. Step 2 \u2014 Corrector Iterations:</strong>\nFormula: $y_1^{(k+1)} = y_0 + \\frac{h}{2} \\left[ f(x_0, y_0) + f(x_1, y_1^{(k)}) \\right]$\n\u2022 <strong>Corrector Iteration 1:</strong>\n  $f(x_1, y_1^{(0)}) = f(0.2, 1.2000) = 0.2 + \\sqrt{1.2000} = 0.2 + 1.0954 = 1.2954$\n  $$y_1^{(1)} = 1 + \\frac{0.2}{2} [1.0 + 1.2954] = 1 + 0.1(2.2954) = \\mathbf{1.2295}$$\n\n\u2022 <strong>Corrector Iteration 2:</strong>\n  $f(x_1, y_1^{(1)}) = f(0.2, 1.2295) = 0.2 + \\sqrt{1.2295} = 0.2 + 1.1088 = 1.3088$\n  $$y_1^{(2)} = 1 + 0.1 [1.0 + 1.3088] = 1 + 0.1(2.3088) = \\mathbf{1.2309}$$\n\n\u2022 <strong>Conclusion:</strong>\n  The approximate value of $y(0.2)$ after two corrector iterations is $\\mathbf{1.2309}$.",
    "examTip": "Clearly label the Euler predictor step y1^(0) and subsequent corrector iterations y1^(1), y1^(2).",
    "starred": false,
    "mastered": false
  },
  {
    "id": "card-prac-204",
    "subjectId": "cprog",
    "unit": 1,
    "pyqTag": "\ud83c\udfaf Practice Question \u2022 High Probability",
    "badgeType": "\u26a1 Exception / Trap",
    "badgeLabel": "Precedence & Evaluation",
    "question": "Explain operator precedence and associativity in C. Trace step-by-step the value of x and y in: int a = 5, b = 10; int x = ++a * (b-- - 3) / 2; int y = a > b ? a : b;",
    "hint": "++a is pre-increment (a becomes 6 first). b-- is post-decrement (evaluates with b=10, decrements to 9 after). Ternary ? : evaluates condition.",
    "answer": "<strong>1. Step-by-Step Expression Evaluation:</strong>\nGiven: \\`int a = 5, b = 10;\\`\n\u2022 <strong>Evaluating \\`int x = ++a * (b-- - 3) / 2;\\`:</strong>\n  1. \\`++a\\` has highest prefix precedence: $a$ increments from 5 to <strong>6</strong>, returning 6.\n  2. In parenthesized expression \\`(b-- - 3)\\`:\n     - \\`b--\\` has post-decrement behavior: current value $10$ is used in the subtraction, and $b$ becomes <strong>9</strong> afterwards.\n     - $(10 - 3) = 7$.\n  3. Expression becomes: $6 \\times 7 / 2$.\n  4. \\`*\\` and \\`/\\` have equal precedence, evaluated left-to-right (associativity):\n     - $6 \\times 7 = 42$.\n     - $42 / 2 = 21$.\n  5. Thus: $\\mathbf{x = 21}$, with variable values $a = 6, b = 9$.\n\n\u2022 <strong>Evaluating \\`int y = a > b ? a : b;\\`:</strong>\n  - Condition: \\`6 > 9\\` is FALSE (0).\n  - The ternary operator selects the expression after the colon: \\`b\\`.\n  - Thus: $\\mathbf{y = 9}$.\n\n<strong>2. Final Values:</strong>\n\\`x = 21, y = 9, a = 6, b = 9\\`.",
    "examTip": "Prefix increment modifies before expression evaluation; postfix decrement modifies after the value in the sub-expression is fetched.",
    "starred": false,
    "mastered": false
  },
  {
    "id": "card-prac-205",
    "subjectId": "cprog",
    "unit": 2,
    "pyqTag": "\ud83c\udfaf Practice Question \u2022 High Probability",
    "badgeType": "\ud83d\udcd0 Derivation / Formula",
    "badgeLabel": "Roots of Quadratic",
    "question": "Write a complete C program to find the roots of a quadratic equation ax\u00b2 + bx + c = 0, handling real and distinct, real and equal, and complex roots with clear output messages.",
    "hint": "Discriminant d = b\u00b2 - 4ac. If d > 0: two distinct real roots. If d == 0: equal real roots -b/(2a). If d < 0: complex roots -b/(2a) \u00b1 i*sqrt(-d)/(2a).",
    "answer": "<strong>Complete Quadratic Roots C Program:</strong>\n<pre class=\"bg-slate-900 text-slate-100 p-3 rounded-lg overflow-x-auto\"><code>#include &lt;stdio.h&gt;\n#include &lt;math.h&gt;\n\nint main() {\n    double a, b, c, disc, r1, r2, realPart, imagPart;\n    printf(\"Enter coefficients a, b, c: \");\n    scanf(\"%lf %lf %lf\", &a, &b, &c);\n\n    if (a == 0) {\n        printf(\"Coefficient 'a' cannot be zero in a quadratic equation.\\n\");\n        return 1;\n    }\n\n    disc = b * b - 4 * a * c;\n\n    if (disc &gt; 0) {\n        r1 = (-b + sqrt(disc)) / (2 * a);\n        r2 = (-b - sqrt(disc)) / (2 * a);\n        printf(\"Roots are REAL and DISTINCT:\\n\");\n        printf(\"Root 1 = %.4lf, Root 2 = %.4lf\\n\", r1, r2);\n    } else if (disc == 0) {\n        r1 = -b / (2 * a);\n        printf(\"Roots are REAL and EQUAL:\\n\");\n        printf(\"Root 1 = Root 2 = %.4lf\\n\", r1);\n    } else {\n        realPart = -b / (2 * a);\n        imagPart = sqrt(-disc) / (2 * a);\n        printf(\"Roots are COMPLEX and IMAGINARY:\\n\");\n        printf(\"Root 1 = %.4lf + %.4lfi\\n\", realPart, imagPart);\n        printf(\"Root 2 = %.4lf - %.4lfi\\n\", realPart, imagPart);\n    }\n    return 0;\n}</code></pre>",
    "examTip": "Always validate if a == 0 to prevent division by zero in 2*a.",
    "starred": false,
    "mastered": false
  },
  {
    "id": "card-prac-206",
    "subjectId": "cprog",
    "unit": 3,
    "pyqTag": "\ud83c\udfaf Practice Question \u2022 High Probability",
    "badgeType": "\ud83d\udcd0 Derivation / Formula",
    "badgeLabel": "Array Algorithms",
    "question": "Write a C program to find the second largest element in a single-dimensional array of N integers without sorting the entire array.",
    "hint": "Keep track of two variables: first = INT_MIN, second = INT_MIN. Update in a single O(N) pass.",
    "answer": "<strong>Second Largest Element in Single Pass O(N):</strong>\n<pre class=\"bg-slate-900 text-slate-100 p-3 rounded-lg overflow-x-auto\"><code>#include &lt;stdio.h&gt;\n#include &lt;limits.h&gt;\n\nint main() {\n    int arr[100], n, i;\n    int first = INT_MIN, second = INT_MIN;\n\n    printf(\"Enter number of elements (N >= 2): \");\n    scanf(\"%d\", &n);\n\n    if (n &lt; 2) {\n        printf(\"At least 2 elements required.\\n\");\n        return 1;\n    }\n\n    printf(\"Enter %d integers:\\n\", n);\n    for (i = 0; i &lt; n; i++) {\n        scanf(\"%d\", &arr[i]);\n    }\n\n    for (i = 0; i &lt; n; i++) {\n        if (arr[i] &gt; first) {\n            second = first;\n            first = arr[i];\n        } else if (arr[i] &gt; second && arr[i] != first) {\n            second = arr[i];\n        }\n    }\n\n    if (second == INT_MIN) {\n        printf(\"No second largest element (all elements are identical).\\n\");\n    } else {\n        printf(\"Largest = %d, Second Largest = %d\\n\", first, second);\n    }\n    return 0;\n}</code></pre>",
    "examTip": "Include <limits.h> and initialize with INT_MIN so negative integers are handled correctly.",
    "starred": false,
    "mastered": false
  },
  {
    "id": "card-prac-207",
    "subjectId": "cprog",
    "unit": 4,
    "pyqTag": "\ud83c\udfaf Practice Question \u2022 High Probability",
    "badgeType": "\ud83d\udcd0 Derivation / Formula",
    "badgeLabel": "Tower of Hanoi Recursion",
    "question": "Explain the recursive formulation of the Tower of Hanoi problem. Write a recursive C function for N disks from Source (A) to Destination (C) using Auxiliary (B).",
    "hint": "Recurrence: Move N-1 disks from A to B via C; Move disk N from A to C; Move N-1 disks from B to C via A. Total moves = 2^N - 1.",
    "answer": "<strong>1. Principle:</strong>\nTo move $N$ disks from Source ($A$) to Destination ($C$) via Auxiliary ($B$):\n1. Recursively move top $N-1$ disks from $A$ to $B$ using $C$.\n2. Move the $N$-th (largest) disk directly from $A$ to $C$.\n3. Recursively move the $N-1$ disks from $B$ to $C$ using $A$.\n\n<strong>2. Complete C Program:</strong>\n<pre class=\"bg-slate-900 text-slate-100 p-3 rounded-lg overflow-x-auto\"><code>#include &lt;stdio.h&gt;\n\nvoid towerOfHanoi(int n, char from_rod, char to_rod, char aux_rod) {\n    if (n == 1) {\n        printf(\"Move disk 1 from rod %c to rod %c\\n\", from_rod, to_rod);\n        return;\n    }\n    towerOfHanoi(n - 1, from_rod, aux_rod, to_rod);\n    printf(\"Move disk %d from rod %c to rod %c\\n\", n, from_rod, to_rod);\n    towerOfHanoi(n - 1, aux_rod, to_rod, from_rod);\n}\n\nint main() {\n    int n = 3;\n    printf(\"Tower of Hanoi move sequence for %d disks:\\n\", n);\n    towerOfHanoi(n, 'A', 'C', 'B');\n    printf(\"Total moves required = %d\\n\", (1 &lt;&lt; n) - 1); /* 2^n - 1 */\n    return 0;\n}</code></pre>",
    "examTip": "Total moves for N disks is exactly 2^N - 1. For N = 3 disks, exactly 7 moves are executed.",
    "starred": false,
    "mastered": false
  },
  {
    "id": "card-prac-208",
    "subjectId": "cprog",
    "unit": 5,
    "pyqTag": "\ud83c\udfaf Practice Question \u2022 High Probability",
    "badgeType": "\ud83d\udcd0 Derivation / Formula",
    "badgeLabel": "Dynamic Memory Allocation",
    "question": "Explain the four dynamic memory allocation functions in C: malloc(), calloc(), realloc(), and free(). Write a C program dynamically allocating memory for N floats to compute their average.",
    "hint": "malloc(size) allocates uninitialized bytes; calloc(n, size) allocates and zeroes bytes; realloc(ptr, new_size) resizes block; free(ptr) releases memory.",
    "answer": "<strong>1. Dynamic Allocation Functions:</strong>\n\u2022 \\`void* malloc(size_t size)\\`: Allocates a single continuous block of specified bytes containing uninitialized garbage values.\n\u2022 \\`void* calloc(size_t n, size_t size)\\`: Allocates memory for an array of $n$ elements, initializing all bytes strictly to zero (0).\n\u2022 \\`void* realloc(void *ptr, size_t new_size)\\`: Resizes previously allocated block without losing existing data.\n\u2022 \\`void free(void *ptr)\\`: Deallocates memory block back to the heap to prevent memory leaks.\n\n<strong>2. Program Calculating Average with Dynamic Array:</strong>\n<pre class=\"bg-slate-900 text-slate-100 p-3 rounded-lg overflow-x-auto\"><code>#include &lt;stdio.h&gt;\n#include &lt;stdlib.h&gt;\n\nint main() {\n    int n, i;\n    float *ptr, sum = 0.0;\n\n    printf(\"Enter number of elements: \");\n    scanf(\"%d\", &n);\n\n    /* Allocate memory dynamically */\n    ptr = (float*) malloc(n * sizeof(float));\n\n    if (ptr == NULL) {\n        printf(\"Memory allocation failed! Out of heap space.\\n\");\n        return 1;\n    }\n\n    printf(\"Enter %d numbers:\\n\", n);\n    for (i = 0; i &lt; n; i++) {\n        scanf(\"%f\", ptr + i);\n        sum += *(ptr + i);\n    }\n\n    printf(\"Arithmetic Average = %.4f\\n\", sum / n);\n\n    /* Always release memory */\n    free(ptr);\n    ptr = NULL; /* prevent dangling pointer */\n    return 0;\n}</code></pre>",
    "examTip": "Always test if (ptr == NULL) after allocation and set ptr = NULL after free(ptr) to eliminate dangling pointer bugs.",
    "starred": false,
    "mastered": false
  },
  {
    "id": "card-prac-209",
    "subjectId": "ai",
    "unit": 1,
    "pyqTag": "\ud83c\udfaf Practice Question \u2022 High Probability",
    "badgeType": "\ud83d\udcd0 Derivation / Formula",
    "badgeLabel": "Agent Architectures",
    "question": "Compare the four major types of intelligent agent architectures: Simple Reflex Agents, Model-Based Reflex Agents, Goal-Based Agents, and Utility-Based Agents.",
    "hint": "Simple reflex uses Condition-Action rules; Model-based maintains internal state; Goal-based plans toward a goal; Utility-based optimizes happiness/cost.",
    "answer": "<strong>1. Comparison of AI Agent Architectures:</strong>\n<div class=\"overflow-x-auto my-2\">\n<table class=\"w-full text-xs text-left border border-slate-300\">\n<thead class=\"bg-slate-100\"><tr><th class=\"p-1 border\">Agent Type</th><th class=\"p-1 border\">Decision Mechanism</th><th class=\"p-1 border\">Internal State</th><th class=\"p-1 border\">Example</th></tr></thead>\n<tbody>\n<tr><td class=\"p-1 border font-semibold\">Simple Reflex</td><td class=\"p-1 border\">Direct Condition-Action rules (\\`IF condition THEN action\\`)</td><td class=\"p-1 border\">None (acts only on current percept)</td><td class=\"p-1 border\">Thermostat turning ON when temperature drops below 20\u00b0C</td></tr>\n<tr><td class=\"p-1 border font-semibold\">Model-Based</td><td class=\"p-1 border\">Tracks unobserved aspects of world using internal model</td><td class=\"p-1 border\">Maintains history of how world evolves</td><td class=\"p-1 border\">Robot vacuum tracking room boundary obstacles behind it</td></tr>\n<tr><td class=\"p-1 border font-semibold\">Goal-Based</td><td class=\"p-1 border\">Evaluates actions based on whether they achieve a target goal</td><td class=\"p-1 border\">Internal model + search/planning algorithms</td><td class=\"p-1 border\">GPS Navigation system planning optimal route to destination</td></tr>\n<tr><td class=\"p-1 border font-semibold\">Utility-Based</td><td class=\"p-1 border\">Maps states to real-valued utility (happiness/efficiency/trade-offs)</td><td class=\"p-1 border\">Full model + utility function optimization</td><td class=\"p-1 border\">Automated stock trading balancing risk vs return</td></tr>\n</tbody>\n</table>\n</div>",
    "examTip": "List all 4 architectures in increasing order of complexity: Simple Reflex -> Model-Based -> Goal-Based -> Utility-Based.",
    "starred": false,
    "mastered": false
  },
  {
    "id": "card-prac-210",
    "subjectId": "ai",
    "unit": 1,
    "pyqTag": "\ud83c\udfaf Practice Question \u2022 High Probability",
    "badgeType": "\ud83d\udcd0 Derivation / Formula",
    "badgeLabel": "A* Informed Search",
    "question": "Explain the A* (A-Star) search algorithm. Define the evaluation function f(n) = g(n) + h(n) and explain the conditions for admissibility and consistency of heuristics.",
    "hint": "g(n) is actual cost from start to n; h(n) is estimated heuristic cost from n to goal. Admissible means h(n) <= h*(n) (never overestimates).",
    "answer": "<strong>1. A* Evaluation Function:</strong>\nA* search combines uniform-cost search (path cost so far) and greedy best-first search (estimated cost to goal):\n$$f(n) = g(n) + h(n)$$\n\u2022 $g(n)$: The exact cost incurred to reach current node $n$ from the start node.\n\u2022 $h(n)$: The estimated heuristic cost from node $n$ to the closest goal node.\n\u2022 $f(n)$: The estimated total cost of the cheapest solution passing through node $n$.\n\n<strong>2. Heuristic Conditions for Optimality:</strong>\n1. <strong>Admissibility (for Tree Search):</strong>\n   \u2022 An admissible heuristic <strong>never overestimates</strong> the true minimal cost $h^*(n)$ to reach the goal:\n     $$0 \\le h(n) \\le h^*(n) \\quad \\forall n$$\n   \u2022 It is fundamentally optimistic. If $h$ is admissible, $A^*$ is guaranteed to find the optimal path.\n2. <strong>Consistency / Monotonicity (for Graph Search):</strong>\n   \u2022 For every node $n$ and every successor $n'$ generated by action with step cost $c(n, a, n')$:\n     $$h(n) \\le c(n, a, n') + h(n')$$\n   \u2022 Satisfies the triangle inequality, ensuring $f(n)$ never decreases along any path!",
    "examTip": "State that admissibility guarantees optimality in tree search, while consistency guarantees optimality in graph search without reopening closed nodes.",
    "starred": false,
    "mastered": false
  },
  {
    "id": "card-prac-211",
    "subjectId": "ai",
    "unit": 2,
    "pyqTag": "\ud83c\udfaf Practice Question \u2022 High Probability",
    "badgeType": "\ud83d\udcd0 Derivation / Formula",
    "badgeLabel": "Reasoning Prompting",
    "question": "Explain Chain-of-Thought (CoT) and Tree-of-Thoughts (ToT) prompting techniques. How do they improve mathematical and multi-hop reasoning in Large Language Models?",
    "hint": "CoT guides LLMs to generate intermediate step-by-step reasoning tokens before final answer. ToT explores multiple reasoning branches with backtracking.",
    "answer": "<strong>1. Chain-of-Thought (CoT) Prompting:</strong>\n\u2022 <strong>Concept:</strong> Standard prompting asks an LLM for direct answers, often leading to hallucinations on complex math or multi-step logic. CoT prompts the model to generate intermediate natural language reasoning steps:\n  - <em>Zero-Shot CoT:</em> Appending the magic cue: <strong>\"Let's think step by step.\"</strong>\n  - <em>Few-Shot CoT:</em> Providing 2-3 demonstrations where answers explicitly show the detailed calculation chain.\n\u2022 <strong>Why it Works:</strong> Decouples computational thinking across multiple output token generations, allowing each step to condition on previous reasoning.\n\n<strong>2. Tree-of-Thoughts (ToT) Prompting:</strong>\n\u2022 <strong>Concept:</strong> Extends CoT by viewing problem solving as search over a tree where each node represents a coherent 'thought' (partial reasoning step).\n\u2022 <strong>Mechanism:</strong>\n  1. Generates multiple diverse candidate reasoning thoughts at each step.\n  2. Evaluates the promise of each thought (heuristic scoring or self-reflection).\n  3. Uses search algorithms (BFS or Depth-First Search with backtracking) to navigate paths.\n\u2022 <strong>Application:</strong> Strategic games (Chess), creative writing, and complex theorem proving.",
    "examTip": "Quote the classic Zero-Shot CoT prompt phrase: 'Let's think step by step.'",
    "starred": false,
    "mastered": false
  },
  {
    "id": "card-prac-212",
    "subjectId": "ai",
    "unit": 2,
    "pyqTag": "\ud83c\udfaf Practice Question \u2022 High Probability",
    "badgeType": "\ud83d\udcd0 Derivation / Formula",
    "badgeLabel": "RAG Architecture",
    "question": "What is Retrieval-Augmented Generation (RAG)? Draw a schematic block diagram and explain how it prevents hallucinations in enterprise AI systems.",
    "hint": "RAG combines an external vector database (retriever) with an LLM (generator). Steps: Chunking -> Embedding -> Vector Search -> Context Injection.",
    "answer": "<strong>1. Principle of RAG:</strong>\nRetrieval-Augmented Generation (RAG) grounds LLM outputs in verified external knowledge by retrieving relevant factual documents from a private database before prompting the model, eliminating hallucinations and outdated information.\n\n<strong>2. End-to-End Pipeline Steps:</strong>\n1. <strong>Document Ingestion & Chunking:</strong>\n   Raw enterprise documents (PDFs, notes, manuals) are cleaned and split into overlapping chunks (e.g. 500 tokens).\n2. <strong>Vector Embedding:</strong>\n   Each chunk is passed through an embedding model to generate a dense semantic vector representation ($d = 768$ or $1536$).\n3. <strong>Vector Database Indexing:</strong>\n   Vectors are stored in specialized vector databases (Milvus, Pinecone, Chroma) using approximate nearest neighbor (ANN) indexes.\n4. <strong>User Query & Semantic Retrieval:</strong>\n   When a user asks a question, the query is embedded and compared against stored chunks using <strong>Cosine Similarity</strong>:\n   $$\\text{Similarity} = \\frac{\\vec{A} \\cdot \\vec{B}}{\\|\\vec{A}\\| \\|\\vec{B}\\|}$$\n5. <strong>Prompt Augmentation & Generation:</strong>\n   Top-$K$ retrieved chunks are injected into the LLM system prompt:\n   \\`Context: [Retrieved Excerpts] | Question: [User Query] | Answer based strictly on context.\\`",
    "examTip": "Highlight the formula for Cosine Similarity used in vector databases to measure semantic relatedness.",
    "starred": false,
    "mastered": false
  },
  {
    "id": "card-prac-213",
    "subjectId": "ai",
    "unit": 3,
    "pyqTag": "\ud83c\udfaf Practice Question \u2022 High Probability",
    "badgeType": "\ud83d\udcd0 Derivation / Formula",
    "badgeLabel": "SVM & Kernel Trick",
    "question": "Explain the mathematical foundation of Support Vector Machines (SVM). Define the maximal margin hyperplane and explain the Kernel Trick.",
    "hint": "Find hyperplane w\u00b7x + b = 0 that maximizes margin 2/||w|| subject to y_i(w\u00b7x_i + b) >= 1. Kernel trick maps data to higher dimensions.",
    "answer": "<strong>1. Maximal Margin Hyperplane:</strong>\nFor a linearly separable binary classification dataset $(x_i, y_i)$ where $y_i \\in \\{-1, +1\\}$:\n\u2022 The separating decision hyperplane is:\n  $$\\vec{w} \\cdot \\vec{x} + b = 0$$\n\u2022 The geometric margin between supporting planes $\\vec{w} \\cdot \\vec{x} + b = \\pm 1$ is:\n  $$\\text{Margin} = \\frac{2}{\\|\\vec{w}\\|}$$\n\u2022 To maximize the margin, we minimize $\\frac{1}{2} \\|\\vec{w}\\|^2$ subject to:\n  $$y_i (\\vec{w} \\cdot \\vec{x}_i + b) \\ge 1 \\quad \\forall i$$\n\u2022 The data points lying on the boundary hyperplanes where $y_i(\\vec{w}\\cdot\\vec{x}_i + b) = 1$ are the <strong>SUPPORT VECTORS</strong>.\n\n<strong>2. The Kernel Trick:</strong>\n\u2022 When data is non-linearly separable in original input space, it is transformed into a higher-dimensional feature space $\\Phi(\\vec{x})$ where it becomes linearly separable.\n\u2022 The <strong>Kernel Trick</strong> computes inner products in high-dimensional space without explicitly evaluating coordinates:\n  $$K(\\vec{x}_i, \\vec{x}_j) = \\Phi(\\vec{x}_i) \\cdot \\Phi(\\vec{x}_j)$$\n\u2022 <strong>Common Kernel Functions:</strong>\n  - Linear Kernel: $K(x_i, x_j) = x_i^T x_j$\n  - Radial Basis Function (RBF / Gaussian): $K(x_i, x_j) = \\exp(-\\gamma \\|x_i - x_j\\|^2)$\n  - Polynomial Kernel: $K(x_i, x_j) = (x_i^T x_j + c)^d$.",
    "examTip": "State that the optimization problem is solved via Lagrange multipliers: L(w, b, alpha) with dual formulation.",
    "starred": false,
    "mastered": false
  },
  {
    "id": "card-prac-214",
    "subjectId": "ai",
    "unit": 3,
    "pyqTag": "\ud83c\udfaf Practice Question \u2022 High Probability",
    "badgeType": "\u26a1 Exception / Trap",
    "badgeLabel": "Activation Functions",
    "question": "Compare the Sigmoid, Tanh, and ReLU activation functions in Artificial Neural Networks. Explain the 'Vanishing Gradient' problem and why ReLU is preferred in deep networks.",
    "hint": "Sigmoid: 1/(1+e^-z), range (0, 1). Tanh: range (-1, 1). ReLU: max(0, z), derivative is 1 for z>0, preventing vanishing gradients.",
    "answer": "<strong>1. Comparison of Activation Functions:</strong>\n<div class=\"overflow-x-auto my-2\">\n<table class=\"w-full text-xs text-left border border-slate-300\">\n<thead class=\"bg-slate-100\"><tr><th class=\"p-1 border\">Function</th><th class=\"p-1 border\">Mathematical Formula</th><th class=\"p-1 border\">Output Range</th><th class=\"p-1 border\">Zero-Centered?</th></tr></thead>\n<tbody>\n<tr><td class=\"p-1 border font-semibold\">Sigmoid</td><td class=\"p-1 border\">$\\sigma(z) = \\frac{1}{1 + e^{-z}}$</td><td class=\"p-1 border\">$(0, 1)$</td><td class=\"p-1 border\">No</td></tr>\n<tr><td class=\"p-1 border font-semibold\">Tanh</td><td class=\"p-1 border\">$\\tanh(z) = \\frac{e^z - e^{-z}}{e^z + e^{-z}}$</td><td class=\"p-1 border\">$(-1, 1)$</td><td class=\"p-1 border\">Yes</td></tr>\n<tr><td class=\"p-1 border font-semibold\">ReLU</td><td class=\"p-1 border\">$f(z) = \\max(0, z)$</td><td class=\"p-1 border\">$[0, \\infty)$</td><td class=\"p-1 border\">No</td></tr>\n</tbody>\n</table>\n</div>\n\n<strong>2. The Vanishing Gradient Problem:</strong>\n\u2022 In backpropagation, gradients are multiplied layer-by-layer using the chain rule: $\\frac{\\partial L}{\\partial w_1} = \\frac{\\partial L}{\\partial a_n} \\dots \\sigma'(z_1)$.\n\u2022 The maximum derivative of the Sigmoid function is only <strong>$0.25$</strong> (at $z=0$).\n\u2022 Multiplying numbers $< 0.25$ across 10-50 hidden layers causes gradients to decay exponentially toward zero, freezing learning in early layers!\n\n<strong>3. Why ReLU Solves This:</strong>\n\u2022 For all positive inputs ($z > 0$), the derivative of ReLU is constant: $f'(z) = 1$.\n\u2022 Gradients flow through deep layers without saturation or attenuation, accelerating convergence.",
    "examTip": "Mention that the max derivative of sigmoid is 0.25, while for ReLU it is exactly 1.0 for positive inputs.",
    "starred": false,
    "mastered": false
  },
  {
    "id": "card-prac-215",
    "subjectId": "ai",
    "unit": 4,
    "pyqTag": "\ud83c\udfaf Practice Question \u2022 High Probability",
    "badgeType": "\ud83d\udcd0 Derivation / Formula",
    "badgeLabel": "Edge AI & AIoT",
    "question": "Explain the architecture of Artificial Intelligence of Things (AIoT). Discuss the engineering trade-offs between Edge AI processing and Cloud AI computing.",
    "hint": "AIoT = IoT sensors + Edge AI microcontrollers (TinyML) + Cloud analytics. Edge reduces latency, protects privacy, and saves bandwidth.",
    "answer": "<strong>1. Architecture of AIoT:</strong>\nArtificial Intelligence of Things (AIoT) embeds machine learning algorithms into connected Internet of Things (IoT) hardware infrastructure across three collaborative tiers:\n1. <strong>Perception Tier (Edge Devices & Sensors):</strong> Microcontrollers (ARM Cortex-M, ESP32) running quantized TinyML models directly on vibration, acoustic, and thermal sensors.\n2. <strong>Network Tier (Gateways & 5G/LoRaWAN):</strong> Aggregates sensor telemetry and forwards critical event anomalies.\n3. <strong>Cloud / Central Tier:</strong> High-performance server clusters for global fleet analytics and retraining large foundational models.\n\n<strong>2. Edge AI vs. Cloud AI Trade-Offs:</strong>\n\u2022 <strong>Latency:</strong> Edge AI makes inference decisions locally in milliseconds ($< 5\\text{ ms}$), critical for autonomous brakes; Cloud incurs round-trip network delays ($100 - 500\\text{ ms}$).\n\u2022 <strong>Bandwidth:</strong> Edge processes raw gigabytes locally and transmits only summary alerts, slashing 4G/5G data bills.\n\u2022 <strong>Privacy & Security:</strong> Sensitive user data (biometrics, hospital audio) remains on-device.\n\u2022 <strong>Compute Constraints:</strong> Edge devices have limited RAM (KB to MB) requiring model quantization (INT8) and pruning.",
    "examTip": "Highlight TinyML and 8-bit integer quantization (INT8) enabling neural networks to run on microcontrollers.",
    "starred": false,
    "mastered": false
  },
  {
    "id": "card-prac-216",
    "subjectId": "ai",
    "unit": 4,
    "pyqTag": "\ud83c\udfaf Practice Question \u2022 High Probability",
    "badgeType": "\u26a1 Exception / Trap",
    "badgeLabel": "AI Fairness & Bias",
    "question": "Discuss ethical issues in modern Artificial Intelligence systems, focusing on Algorithmic Bias, Data Privacy, and Explainability (XAI).",
    "hint": "Bias stems from skewed training data; XAI uses techniques like SHAP and LIME to interpret black-box neural networks.",
    "answer": "<strong>1. Algorithmic Bias & Sources:</strong>\n\u2022 <strong>Historical / Representation Bias:</strong> When training datasets reflect societal prejudices or underrepresent minority demographic groups (e.g. facial recognition failing on darker skin tones).\n\u2022 <strong>Measurement Bias:</strong> Flawed proxy features selected during model training (e.g., healthcare algorithms using past medical expenditure as a proxy for illness severity).\n\n<strong>2. Data Privacy Concerns:</strong>\n\u2022 LLMs trained on internet scrapings risk memorizing and regurgitating sensitive personal identifying information (PII) or proprietary trade secrets.\n\u2022 Mitigated by Differential Privacy (adding calibrated mathematical noise to dataset gradients).\n\n<strong>3. Explainable AI (XAI):</strong>\n\u2022 High-performance deep networks act as opaque 'black boxes' where engineers cannot explain why a specific loan was denied or medical diagnosis was made.\n\u2022 <strong>Post-hoc Interpretability Tools:</strong>\n  - <em>SHAP (Shapley Additive Explanations):</em> Based on game theory; computes the marginal contribution of each feature to the prediction.\n  - <em>LIME (Local Interpretable Model-agnostic Explanations):</em> Approximates local decision boundaries with simple linear models.",
    "examTip": "Cite SHAP (Shapley values) and LIME as the two industry-standard tools for Explainable AI.",
    "starred": false,
    "mastered": false
  },
  {
    "id": "card-prac-217",
    "subjectId": "ai",
    "unit": 5,
    "pyqTag": "\ud83c\udfaf Practice Question \u2022 High Probability",
    "badgeType": "\ud83d\udcd0 Derivation / Formula",
    "badgeLabel": "Drone Sensors",
    "question": "Explain how Artificial Intelligence is integrated into autonomous drones for agricultural crop monitoring and precision spraying.",
    "hint": "Drones use multispectral optical cameras to calculate NDVI = (NIR - Red) / (NIR + Red) to detect plant chlorophyll health.",
    "answer": "<strong>1. AI Drone Integration for Precision Agriculture:</strong>\nAutonomous drones integrate computer vision, edge computing, and GPS waypoint navigation to monitor agricultural health and spray fertilizers with millimetric accuracy.\n\n<strong>2. Core Technical Modules:</strong>\n\u2022 <strong>1. Multispectral Imaging & NDVI Index:</strong>\n  - Drones capture Near-Infrared (NIR) and visible Red reflectance wavelengths.\n  - Healthy photosynthetic vegetation absorbs red light and strongly reflects near-infrared:\n    $$\\mathbf{NDVI = \\frac{NIR - Red}{NIR + Red}}$$\n  - NDVI values range from $-1$ to $+1$: Values $> 0.6$ signify lush healthy crop canopy; values $< 0.2$ indicate water stress, pest infestation, or dying leaves!\n\u2022 <strong>2. Deep Learning Weed & Pest Detection:</strong>\n  - On-board YOLO (You Only Look Once) edge object-detection models identify specific invasive weed species and fungal leaf spots in real time.\n\u2022 <strong>3. Variable Rate Spraying (VRA):</strong>\n  - Drones actuate servo solenoids to spray pesticides exclusively over infected plant clusters, reducing chemical pesticide runoff by up to 70%!",
    "examTip": "State the exact mathematical formula for NDVI: (NIR - Red) / (NIR + Red).",
    "starred": false,
    "mastered": false
  },
  {
    "id": "card-prac-218",
    "subjectId": "mech",
    "unit": 1,
    "pyqTag": "\ud83c\udfaf Practice Question \u2022 High Probability",
    "badgeType": "\ud83d\udcd0 Derivation / Formula",
    "badgeLabel": "Nuclear Power Plant",
    "question": "Explain the construction and working of a Pressurized Water Reactor (PWR) Nuclear Power Plant with a schematic diagram. What are the roles of control rods and moderator?",
    "hint": "Components: Reactor pressure vessel, Fuel rods (U-235), Control rods (Cadmium/Boron), Moderator (Heavy water), Heat exchanger (Steam generator), Turbine.",
    "answer": "<strong>1. Working Principle:</strong>\nA Nuclear Power Plant generates heat through controlled nuclear fission of heavy radioactive isotopes (Uranium-235). In a Pressurized Water Reactor (PWR), high-pressure water absorbs fission heat without boiling and transfers it to a secondary loop inside a steam generator to drive a steam turbine.\n\n<strong>2. Core Reactor Components:</strong>\n\u2022 <strong>Nuclear Fuel:</strong> Enriched Uranium dioxide ($UO_2$) pellets sealed in Zircaloy tubes (Fuel Rods).\n\u2022 <strong>Moderator (Heavy Water / Light Water / Graphite):</strong> Slows down fast-moving fission neutrons to thermal speeds necessary to sustain chain reactions.\n\u2022 <strong>Control Rods (Cadmium or Boron):</strong> Strong neutron absorbers. Lowering them absorbs neutrons and shuts down or regulates the reactor power level.\n\u2022 <strong>Primary Coolant Loop:</strong> Water kept under high pressure ($\\sim 15\\text{ MPa}$) so it remains liquid at $320^\\circ\\text{C}$.\n\u2022 <strong>Steam Generator:</strong> Secondary loop water boils into high-pressure dry steam, expanding across a turbine to spin the electrical generator.\n\n<strong>3. Fission Reaction:</strong>\n$$^{235}_{92}U + ^1_0n \\rightarrow ^{141}_{56}Ba + ^{92}_{36}Kr + 3 ^1_0n + 200\\text{ MeV Energy}$$",
    "examTip": "Highlight that control rods absorb neutrons to regulate power, whereas moderators slow neutrons down.",
    "starred": false,
    "mastered": false
  },
  {
    "id": "card-prac-219",
    "subjectId": "mech",
    "unit": 1,
    "pyqTag": "\ud83c\udfaf Practice Question \u2022 High Probability",
    "badgeType": "\ud83d\udcd0 Derivation / Formula",
    "badgeLabel": "Thermal Power Plant",
    "question": "Explain the working of a modern Coal-Fired Steam Thermal Power Plant with a neat layout diagram, describing the Boiler, Superheater, Economizer, and Condenser.",
    "hint": "Rankine cycle: Boiler heats water to steam -> Superheater dries steam -> Turbine expands steam -> Condenser condenses steam -> Economizer preheats feed water.",
    "answer": "<strong>1. Working Principle (Rankine Cycle):</strong>\nChemical energy stored in pulverized coal is released through combustion inside a boiler to convert water into high-pressure, superheated steam, which expands through high, intermediate, and low-pressure steam turbines driving an electrical generator.\n\n<strong>2. Key Components & Functions:</strong>\n\u2022 <strong>Boiler (Steam Generator):</strong> Shell and water-tube assembly where water turns into saturated steam.\n\u2022 <strong>Superheater:</strong> A bundle of steel tubes located in the path of hot flue gases that heats saturated steam above its boiling point, eliminating moisture droplets that would erode turbine blades!\n\u2022 <strong>Economizer:</strong> A heat exchanger that utilizes residual waste heat from flue gases leaving the boiler to preheat boiler feed-water, increasing thermal efficiency by 5-10%.\n\u2022 <strong>Air Preheater:</strong> Recovers remaining flue gas heat to warm incoming combustion air.\n\u2022 <strong>Steam Turbine:</strong> Converts thermal enthalpy into rotational shaft power.\n\u2022 <strong>Condenser & Cooling Tower:</strong> Cools exhaust steam back into liquid condensate, creating a low-pressure vacuum that maximizes turbine pressure drop and work output.",
    "examTip": "Mention that the Economizer preheats feed-water, while the Superheater removes moisture droplets from steam.",
    "starred": false,
    "mastered": false
  },
  {
    "id": "card-prac-220",
    "subjectId": "mech",
    "unit": 2,
    "pyqTag": "\ud83c\udfaf Practice Question \u2022 High Probability",
    "badgeType": "\ud83d\udcd0 Derivation / Formula",
    "badgeLabel": "CNC Machine Architecture",
    "question": "Write a neat block diagram showing the major components of a Computer Numerical Control (CNC) machine. List four major advantages of CNC over conventional manual machine tools.",
    "hint": "Components: Input unit (G-code), Machine Control Unit (MCU), Drive system (Servomotors/Ball screws), Machine tool, Feedback transducers.",
    "answer": "<strong>1. Major Components of a CNC Machine:</strong>\n1. <strong>Input Unit / Interface:</strong> USB/Ethernet port receiving CAD/CAM part programs coded in G-codes (geometric motions) and M-codes (machine functions).\n2. <strong>Machine Control Unit (MCU):</strong> The central computer microprocessor that decodes part program blocks, executes interpolation algorithms, and generates coordinate motion signals.\n3. <strong>Drive System:</strong> High-precision AC/DC servomotors or stepper motors connected to recirculating <strong>ball lead screws</strong> for zero-backlash axis positioning ($X, Y, Z$).\n4. <strong>Feedback System (Transducers):</strong> Optical encoders or linear glass scales that continuously measure actual position and feed signals back to the MCU for closed-loop error correction.\n5. <strong>Machine Tool Structure:</strong> Rigid cast-iron bed, automatic tool changer (ATC), spindle, and coolant pumps.\n\n<strong>2. Four Key Advantages over Conventional Machines:</strong>\n1. <strong>Superior Accuracy & Repeatability:</strong> Position tolerance within $\\pm 0.002\\text{ mm}$, eliminating operator fatigue.\n2. <strong>Complex Geometry Machining:</strong> Effortlessly machines complex 3D contoured surfaces (turbine blades, impellers).\n3. <strong>High Productivity:</strong> Automatic tool changers (ATC) switch cutting tools in $< 2\\text{ seconds}$.\n4. <strong>Reduced Scrap Rate:</strong> Pre-execution simulation eliminates expensive tool crashes and material wastage.",
    "examTip": "Always mention the closed-loop feedback system using optical encoders or linear scales.",
    "starred": false,
    "mastered": false
  },
  {
    "id": "card-prac-221",
    "subjectId": "mech",
    "unit": 2,
    "pyqTag": "\ud83c\udfaf Practice Question \u2022 High Probability",
    "badgeType": "\ud83d\udcd0 Derivation / Formula",
    "badgeLabel": "3D Printing Technologies",
    "question": "What is Additive Manufacturing (3D Printing)? Explain the working principles of Fused Deposition Modeling (FDM) and Stereolithography (SLA).",
    "hint": "FDM extrudes thermoplastic filaments (PLA/ABS) layer-by-layer through a heated nozzle; SLA photopolymerizes liquid resin using a UV laser beam.",
    "answer": "<strong>1. Definition:</strong>\nAdditive manufacturing is a process of joining materials layer upon layer directly from 3D CAD computer model data, as opposed to subtractive manufacturing (machining).\n\n<strong>2. Fused Deposition Modeling (FDM):</strong>\n\u2022 <strong>Material:</strong> Continuous spools of thermoplastic filament: PLA, ABS, PETG.\n\u2022 <strong>Working:</strong>\n  1. Filament is fed by drive gears into a heated liquefier nozzle ($200^\\circ\\text{C} - 250^\\circ\\text{C}$).\n  2. The molten plastic is extruded onto a build platform along computer-guided $X-Y$ paths.\n  3. The layer cools and solidifies; the build platform steps down along the $Z$-axis by layer thickness ($0.1 - 0.3\\text{ mm}$), and the process repeats.\n\u2022 <strong>Advantages:</strong> Inexpensive machines and materials, durable engineering prototypes.\n\n<strong>3. Stereolithography (SLA):</strong>\n\u2022 <strong>Material:</strong> Liquid photopolymer thermoset resin.\n\u2022 <strong>Working:</strong>\n  1. A movable build platform is submerged just below the surface of a resin vat.\n  2. An ultraviolet (UV) laser ($405\\text{ nm}$) traces the cross-sectional layer pattern, curing and photopolymerizing the liquid monomer into solid plastic.\n  3. The platform lowers, a recoater blade levels fresh resin, and the next layer cures.\n\u2022 <strong>Advantages:</strong> Ultra-high resolution ($25 - 50\\text{ }\\mu\\text{m}$), smooth surface finish (ideal for dental and jewelry).",
    "examTip": "FDM uses thermoplastic filaments (extrusion), while SLA uses liquid photopolymer resin cured by UV laser.",
    "starred": false,
    "mastered": false
  },
  {
    "id": "card-prac-222",
    "subjectId": "mech",
    "unit": 3,
    "pyqTag": "\ud83c\udfaf Practice Question \u2022 High Probability",
    "badgeType": "\ud83d\udcd0 Derivation / Formula",
    "badgeLabel": "Refrigeration VCRS Cycle",
    "question": "Explain with a neat flow diagram the construction and working of a Domestic Vapour Compression Refrigeration System (VCRS). Name the four thermodynamic processes.",
    "hint": "Components: Compressor, Condenser, Expansion Device (capillary tube), Evaporator. Refrigerant absorbs heat in evaporator and rejects heat in condenser.",
    "answer": "<strong>1. Working Principle:</strong>\nA Vapour Compression Refrigeration System removes heat from a low-temperature refrigerated space and discharges it to a higher-temperature ambient environment using a circulating working fluid (refrigerant, e.g., R-134a or R-600a).\n\n<strong>2. Four Thermodynamic Processes:</strong>\n1. <strong>Process 1-2: Isentropic Compression (in Compressor):</strong>\n   \u2022 Low-pressure, low-temperature saturated refrigerant vapour from the evaporator is compressed to high-pressure, high-temperature superheated vapour by a hermetically sealed compressor.\n2. <strong>Process 2-3: Constant Pressure Condensation (in Condenser):</strong>\n   \u2022 High-pressure vapour flows through external serpentine cooling coils, rejecting latent heat to surrounding air and condensing into high-pressure subcooled liquid.\n3. <strong>Process 3-4: Isenthalpic Throttling (in Capillary Tube / Expansion Valve):</strong>\n   \u2022 The high-pressure liquid passes through a narrow capillary tube, undergoing an abrupt pressure and temperature drop ($h_3 = h_4$) into a low-pressure liquid-vapour mixture.\n4. <strong>Process 4-1: Constant Pressure Evaporation (in Evaporator):</strong>\n   \u2022 Low-temperature refrigerant flows through cabinet coils, absorbing latent heat of vaporization from the stored food items, producing the cooling refrigeration effect.",
    "examTip": "List all 4 processes with their thermodynamic names: Isentropic Compression, Constant-P Condensation, Isenthalpic Throttling, Constant-P Evaporation.",
    "starred": false,
    "mastered": false
  },
  {
    "id": "card-prac-223",
    "subjectId": "mech",
    "unit": 3,
    "pyqTag": "\ud83c\udfaf Practice Question \u2022 High Probability",
    "badgeType": "\ud83d\udd22 Numerical Pattern",
    "badgeLabel": "Engine Calculations",
    "question": "A 4-stroke 4-cylinder petrol engine develops a Brake Power of 30 kW at 2500 rpm. The bore is 75 mm, stroke length is 90 mm, and mechanical efficiency is 80%. Calculate: (i) Indicated Power, (ii) Mean Effective Pressure, and (iii) Engine Output Torque.",
    "hint": "4 cylinders: K = 4. 4-stroke: n = N/2 = 1250 rpm. IP = BP / eta_m = 30 / 0.8 = 37.5 kW. BP = 2*pi*N*T / 60000 -> T = (60000*BP)/(2*pi*N).",
    "answer": "<strong>1. Given Data:</strong>\n\u2022 Number of cylinders $K = 4$\n\u2022 Type: 4-Stroke $\\implies n = \\frac{N}{2} = \\frac{2500}{2} = 1250\\text{ power strokes/min}$\n\u2022 Brake Power $BP = 30\\text{ kW}$\n\u2022 Engine Speed $N = 2500\\text{ rpm}$\n\u2022 Cylinder Bore $D = 75\\text{ mm} = 0.075\\text{ m} \\implies A = \\frac{\\pi}{4}(0.075)^2 = 0.004418\\text{ m}^2$\n\u2022 Stroke Length $L = 90\\text{ mm} = 0.09\\text{ m}$\n\u2022 Mechanical Efficiency $\\eta_m = 80\\% = 0.80$\n\n<strong>2. Step-by-Step Computations:</strong>\n\u2022 <strong>(i) Indicated Power (IP):</strong>\n  $$\\eta_m = \\frac{BP}{IP} \\implies IP = \\frac{BP}{\\eta_m} = \\frac{30}{0.80} = \\mathbf{37.5\\text{ kW}}$$\n\n\u2022 <strong>(ii) Mean Effective Pressure ($P_m$):</strong>\n  Formula for multi-cylinder engine:\n  $$IP = \\frac{P_m \\cdot L \\cdot A \\cdot n \\cdot K}{60,000} \\quad (\\text{where } P_m \\text{ is in } N/m^2)$$\n  $$37.5 = \\frac{P_m \\times 0.09 \\times 0.004418 \\times 1250 \\times 4}{60,000}$$\n  $$37.5 = \\frac{P_m \\times 1.9881}{60,000} \\implies P_m = \\frac{37.5 \\times 60,000}{1.9881} = 1,131,733\\text{ N/m}^2$$\n  $$\\mathbf{P_m = 11.317\\text{ bar}} = 1.132\\text{ MPa}$$\n\n\u2022 <strong>(iii) Engine Output Torque ($T$):</strong>\n  $$BP = \\frac{2 \\pi N T}{60,000} \\implies T = \\frac{60,000 \\times BP}{2 \\pi N}$$\n  $$T = \\frac{60,000 \\times 30}{2 \\times \\pi \\times 2500} = \\frac{1,800,000}{15,707.96} = \\mathbf{114.59\\text{ N}\\cdot\\text{m}}$$",
    "examTip": "Remember to multiply by the number of cylinders K = 4 in the Indicated Power equation.",
    "starred": false,
    "mastered": false
  },
  {
    "id": "card-prac-224",
    "subjectId": "mech",
    "unit": 4,
    "pyqTag": "\ud83c\udfaf Practice Question \u2022 High Probability",
    "badgeType": "\ud83d\udcd0 Derivation / Formula",
    "badgeLabel": "Welding Principles",
    "question": "Explain the principle and working of Shielded Metal Arc Welding (SMAW). What are the main functions of the flux coating on the consumable electrode?",
    "hint": "Electric arc between consumable flux-coated electrode and base metal generates 3000-4000\u00b0C heat. Flux decomposes into gaseous shield and protective slag.",
    "answer": "<strong>1. Principle of SMAW (Manual Metal Arc Welding):</strong>\nAn electric arc is struck between a flux-coated consumable metallic electrode and the workpiece by momentarily touching and withdrawing the electrode ($2 - 4\\text{ mm}$ gap). The localized electrical discharge generates an intense arc temperature of <strong>$3500^\\circ\\text{C} - 4000^\\circ\\text{C}$</strong>, instantly melting the base metal edges and the electrode tip into a shared molten weld pool.\n\n<strong>2. Functions of the Electrode Flux Coating:</strong>\n1. <strong>Gaseous Shielding:</strong> Thermal decomposition of flux constituents produces an inert gaseous blanket ($CO_2, H_2$) around the arc, shielding the molten metal pool from atmospheric oxygen and nitrogen contamination (which cause weld embrittlement).\n2. <strong>Protective Slag Formation:</strong> Flux forms a lightweight liquid slag that floats over the molten weld pool and solidifies into a protective crust, slowing the cooling rate and preventing rapid quenching cracks.\n3. <strong>Arc Stabilization:</strong> Contains ionizing salts (potassium and sodium compounds) that lower arc ignition voltage and prevent flickering.\n4. <strong>Deoxidation & Alloying:</strong> Scavenges oxides from the molten pool and adds beneficial alloying elements (Mn, Si) to boost tensile strength.",
    "examTip": "List all 4 critical functions of flux: Shielding gas, Slag blanket, Arc stabilization, and Deoxidation.",
    "starred": false,
    "mastered": false
  },
  {
    "id": "card-prac-225",
    "subjectId": "mech",
    "unit": 4,
    "pyqTag": "\ud83c\udfaf Practice Question \u2022 High Probability",
    "badgeType": "\u26a1 Exception / Trap",
    "badgeLabel": "Metal Joining Comparison",
    "question": "Distinguish between Soldering, Brazing, and Welding with respect to temperature range, filler metal, base metal melting, and joint strength.",
    "hint": "Welding melts base metals (>1000\u00b0C); Brazing does not melt base metals (>450\u00b0C, brass/bronze filler); Soldering does not melt base metals (<450\u00b0C, tin-lead).",
    "answer": "<strong>Comparison Table of Metal Joining Processes:</strong>\n<div class=\"overflow-x-auto my-2\">\n<table class=\"w-full text-xs text-left border border-slate-300\">\n<thead class=\"bg-slate-100\"><tr><th class=\"p-1 border\">Parameter</th><th class=\"p-1 border\">Soldering</th><th class=\"p-1 border\">Brazing</th><th class=\"p-1 border\">Welding</th></tr></thead>\n<tbody>\n<tr><td class=\"p-1 border font-semibold\">Base Metal Melting</td><td class=\"p-1 border\">Does NOT melt base metal</td><td class=\"p-1 border\">Does NOT melt base metal</td><td class=\"p-1 border\">Base metal is MELTED and fused</td></tr>\n<tr><td class=\"p-1 border font-semibold\">Temperature Range</td><td class=\"p-1 border\">Below $450^\\circ\\text{C}$ (typically $180 - 250^\\circ\\text{C}$)</td><td class=\"p-1 border\">Above $450^\\circ\\text{C}$ (typically $600 - 900^\\circ\\text{C}$)</td><td class=\"p-1 border\">Very high ($> 1500 - 3500^\\circ\\text{C}$)</td></tr>\n<tr><td class=\"p-1 border font-semibold\">Filler Material</td><td class=\"p-1 border\">Low melting point alloys (Tin-Lead / Tin-Silver)</td><td class=\"p-1 border\">Non-ferrous alloys: Copper-Zinc (Spelter), Silver alloys</td><td class=\"p-1 border\">Same or similar composition to base metal</td></tr>\n<tr><td class=\"p-1 border font-semibold\">Joint Strength</td><td class=\"p-1 border\">Lowest strength (used for electrical continuity)</td><td class=\"p-1 border\">Moderate to high strength (capillary action)</td><td class=\"p-1 border\">Highest strength (equal to or stronger than parent metal)</td></tr>\n<tr><td class=\"p-1 border font-semibold\">Applications</td><td class=\"p-1 border\">Printed circuit board assembly, electronics wiring</td><td class=\"p-1 border\">Refrigeration copper pipe fittings, heat exchangers</td><td class=\"p-1 border\">Structural steel beams, automotive chassis, pressure vessels</td></tr>\n</tbody>\n</table>\n</div>",
    "examTip": "Remember the key temperature threshold dividing Soldering and Brazing: exactly 450\u00b0C.",
    "starred": false,
    "mastered": false
  },
  {
    "id": "card-prac-226",
    "subjectId": "mech",
    "unit": 5,
    "pyqTag": "\ud83c\udfaf Practice Question \u2022 High Probability",
    "badgeType": "\ud83d\udcd0 Derivation / Formula",
    "badgeLabel": "HEV Architectures",
    "question": "Describe the three primary architectural configurations of Hybrid Electric Vehicles: Series Hybrid, Parallel Hybrid, and Series-Parallel Hybrid.",
    "hint": "Series: ICE drives generator only, motor drives wheels. Parallel: both ICE and motor connect to transmission. Series-Parallel: planetary gear power-split.",
    "answer": "<strong>1. Series Hybrid Electric Vehicle (SHEV):</strong>\n\u2022 The Internal Combustion Engine (ICE) has **no mechanical connection to the vehicle wheels**.\n\u2022 The engine operates at its optimal constant-speed efficiency point driving an electrical generator, which charges the battery pack or feeds power to the electric traction motor.\n\u2022 Only the electric traction motor mechanically turns the wheels.\n\n<strong>2. Parallel Hybrid Electric Vehicle (PHEV):</strong>\n\u2022 Both the ICE and the electric motor are mechanically coupled to the drivetrain through a transmission combiner.\n\u2022 Either the engine alone, the electric motor alone, or both simultaneously supply propulsion torque to the wheels.\n\u2022 Highly efficient for continuous highway cruising where direct mechanical drive is superior.\n\n<strong>3. Series-Parallel (Power-Split) Hybrid:</strong>\n\u2022 Combines the benefits of both architectures using a <strong>Planetary Gear Power-Split Device</strong>.\n\u2022 The engine can drive the wheels mechanically while simultaneously turning a generator to recharge the battery.\n\u2022 Found in the world's most successful hybrid drivetrains (e.g. Toyota Prius Hybrid Synergy Drive).",
    "examTip": "Mention that Series hybrids decouple the engine from the wheels, while Parallel hybrids couple both to the drivetrain.",
    "starred": false,
    "mastered": false
  },
  {
    "id": "card-prac-227",
    "subjectId": "const",
    "unit": 1,
    "pyqTag": "\ud83c\udfaf Practice Question \u2022 High Probability",
    "badgeType": "\ud83d\udcd0 Derivation / Formula",
    "badgeLabel": "Salient Features",
    "question": "Explain any six salient features of the Constitution of India that distinguish it as a unique democratic instrument.",
    "hint": "1. Lengthiest written constitution. 2. Blend of rigidity & flexibility. 3. Federal system with unitary bias. 4. Parliamentary democracy. 5. Fundamental Rights & DPSPs. 6. Independent Judiciary.",
    "answer": "<strong>Six Salient Features of the Indian Constitution:</strong>\n1. <strong>Lengthiest Written Constitution in the World:</strong>\n   Contains 395 original Articles organized in 22 Parts and 12 Schedules (now > 470 articles). Detailed provisions cover center-state relations, emergency powers, and administrative details.\n2. <strong>Blend of Rigidity and Flexibility:</strong>\n   Some provisions can be amended by simple majority (like creating new states), while others require special majority under Article 368 (2/3 members present & voting), plus ratification by half of state legislatures for federal amendments.\n3. <strong>Federal System with Unitary Bias (Quasi-Federal):</strong>\n   Features federalism (two governments, division of powers, written constitution) but maintains unitary strength via single citizenship, integrated judiciary, emergency powers, and All-India Services (IAS, IPS).\n4. <strong>Parliamentary Form of Government:</strong>\n   Modeled on the British Westminster system. The Executive is directly responsible to the elected Legislature (Lok Sabha).\n5. <strong>Fundamental Rights & Directive Principles:</strong>\n   Part III guarantees justiciable Fundamental Rights, while Part IV sets socialistic socio-economic goals for the welfare state (DPSPs).\n6. <strong>Integrated and Independent Judiciary:</strong>\n   A single unified judicial ladder headed by the Supreme Court of India with constitutional protection of tenure and salaries.",
    "examTip": "Mention K.C. Wheare's famous phrase describing India as a 'Quasi-Federal' constitution.",
    "starred": false,
    "mastered": false
  },
  {
    "id": "card-prac-228",
    "subjectId": "const",
    "unit": 2,
    "pyqTag": "\ud83c\udfaf Practice Question \u2022 High Probability",
    "badgeType": "\ud83d\udcd0 Derivation / Formula",
    "badgeLabel": "DPSP Classification",
    "question": "Explain the classification and constitutional objectives of the Directive Principles of State Policy (DPSP) under Part IV of the Indian Constitution.",
    "hint": "DPSPs (Articles 36-51) are non-justiciable guidelines for a Welfare State. Divided into Socialistic, Gandhian, and Liberal-Intellectual principles.",
    "answer": "<strong>1. Concept & Purpose of DPSPs (Part IV, Articles 36\u201351):</strong>\nBorrowed from the Irish Constitution, DPSPs are affirmative instructions to the State to establish economic and social democracy, transforming India into a genuine <strong>Welfare State</strong>. While non-justiciable in court (Article 37), they are fundamental in the governance of the country.\n\n<strong>2. Three Broad Classifications:</strong>\n1. <strong>Socialistic Principles:</strong>\n   \u2022 Article 38: Promoting social order by securing justice (social, economic, political).\n   \u2022 Article 39: Equitable distribution of material resources to prevent concentration of wealth.\n   \u2022 Article 39A: Free legal aid to the poor.\n   \u2022 Article 41 & 42: Right to work and just, humane conditions of work with maternity relief.\n2. <strong>Gandhian Principles:</strong>\n   \u2022 Article 40: Organization of Village Panchayats as units of self-government.\n   \u2022 Article 43: Promotion of cottage industries in rural areas.\n   \u2022 Article 47: Prohibition of intoxicating drinks and hazardous drugs.\n   \u2022 Article 48: Prohibition of slaughter of cows, calves, and milch cattle.\n3. <strong>Liberal-Intellectual Principles:</strong>\n   \u2022 Article 44: Securing a <strong>Uniform Civil Code (UCC)</strong> for all citizens.\n   \u2022 Article 48A: Protection and improvement of environment, forests, and wildlife.\n   \u2022 Article 50: Separation of the Judiciary from the Executive in public services.\n   \u2022 Article 51: Promotion of international peace and security.",
    "examTip": "Cite Article 37 which states that DPSPs are not enforceable by courts but fundamental in governance.",
    "starred": false,
    "mastered": false
  },
  {
    "id": "card-prac-229",
    "subjectId": "const",
    "unit": 2,
    "pyqTag": "\ud83c\udfaf Practice Question \u2022 High Probability",
    "badgeType": "\u26a1 Exception / Trap",
    "badgeLabel": "Expanding Article 21",
    "question": "Analyze how the Supreme Court of India has expanded the interpretation of the 'Right to Life and Personal Liberty' under Article 21 through landmark judicial decisions.",
    "hint": "Article 21: 'No person shall be deprived of life or personal liberty except according to procedure established by law.' Maneka Gandhi case expanded to 'due process of law'.",
    "answer": "<strong>1. The Text of Article 21:</strong>\n<em>\"No person shall be deprived of his life or personal liberty except according to procedure established by law.\"</em>\n\n<strong>2. Landmark Transition: Gopalan to Maneka Gandhi:</strong>\n\u2022 In <em>A.K. Gopalan (1950)</em>, the court took a narrow literal view: 'procedure established by law' meant any law enacted by parliament was valid even if unfair.\n\u2022 In <em>Maneka Gandhi v. Union of India (1978)</em>, the Supreme Court radically overturned this: The procedure must be <strong>\"just, fair, and reasonable\"</strong> (importing substantive American Due Process of Law).\n\n<strong>3. Expanding Derivative Rights Under Article 21:</strong>\nThrough creative judicial interpretation, the court ruled that 'life' does not mean mere animal existence, but living with human dignity:\n1. <strong>Right to Clean Environment & Pollution-Free Water/Air:</strong> (Subhash Kumar v. State of Bihar, 1991).\n2. <strong>Right to Privacy:</strong> Declared a fundamental right by a 9-judge constitution bench in <em>Justice K.S. Puttaswamy v. Union of India (2017)</em>.\n3. <strong>Right to Education (Article 21A):</strong> Added by the 86th Amendment (2002) for children aged 6 to 14.\n4. <strong>Right to Speedy Trial and Free Legal Aid:</strong> (Hussainara Khatoon case).\n5. <strong>Right to Health & Emergency Medical Aid:</strong> (Parmanand Katara v. Union of India).",
    "examTip": "Cite both the Maneka Gandhi case (1978) and the Puttaswamy Privacy judgment (2017).",
    "starred": false,
    "mastered": false
  },
  {
    "id": "card-prac-230",
    "subjectId": "const",
    "unit": 3,
    "pyqTag": "\ud83c\udfaf Practice Question \u2022 High Probability",
    "badgeType": "\ud83d\udcd0 Derivation / Formula",
    "badgeLabel": "Presidential Powers",
    "question": "Detail the Executive, Legislative, and Judicial powers of the President of India. Explain the three types of Presidential Veto over Parliamentary Bills.",
    "hint": "Executive: Appointments (PM, Governors, Judges). Legislative: Summoning Parliament, Ordinance making (Art 123). Veto: Absolute, Suspensive, Pocket veto.",
    "answer": "<strong>1. Constitutional Powers of the President:</strong>\n\u2022 <strong>Executive Powers:</strong>\n  - All executive actions of the Government of India are formally taken in the President's name.\n  - Appoints the Prime Minister, Council of Ministers, Attorney General, Comptroller and Auditor General (CAG), Supreme/High Court judges, and State Governors.\n  - Supreme Commander of the Indian Armed Forces.\n\u2022 <strong>Legislative Powers:</strong>\n  - Summons and prorogues both Houses of Parliament and dissolves the Lok Sabha.\n  - Delivers inaugural address to Parliament after general elections.\n  - <strong>Ordinance-Making Power (Article 123):</strong> Can promulgate binding ordinances when Parliament is in recess.\n\u2022 <strong>Judicial & Pardoning Powers (Article 72):</strong>\n  - Power to grant pardons, reprieves, respites, and remissions of punishment or commute sentences (including death sentences).\n\n<strong>2. Three Types of Presidential Veto (Article 111):</strong>\n1. <strong>Absolute Veto:</strong> Withholding assent to a bill, causing it to die permanently (typically for private members' bills).\n2. <strong>Suspensive Veto:</strong> Returning a non-money bill to Parliament for reconsideration. If Parliament passes it again by simple majority, the President **must give assent**.\n3. <strong>Pocket Veto:</strong> The President neither assents nor rejects nor returns the bill, but simply keeps the bill pending indefinitely on their desk (as the Indian Constitution sets no time limit!). Used by President Zail Singh in 1986 on the Indian Post Office Bill.",
    "examTip": "Note that the President has NO veto power over Constitutional Amendment Bills (24th Amendment 1971).",
    "starred": false,
    "mastered": false
  },
  {
    "id": "card-prac-231",
    "subjectId": "const",
    "unit": 3,
    "pyqTag": "\ud83c\udfaf Practice Question \u2022 High Probability",
    "badgeType": "\ud83d\udcd0 Derivation / Formula",
    "badgeLabel": "Parliament vs State Legislature",
    "question": "Compare the Union Parliament (Lok Sabha & Rajya Sabha) with the State Legislature. Highlight the special and exclusive powers of the Lok Sabha.",
    "hint": "Lok Sabha is directly elected (House of People); Rajya Sabha represents states (Permanent Council). Money bills originate exclusively in Lok Sabha.",
    "answer": "<strong>1. Comparison of Houses:</strong>\n<div class=\"overflow-x-auto my-2\">\n<table class=\"w-full text-xs text-left border border-slate-300\">\n<thead class=\"bg-slate-100\"><tr><th class=\"p-1 border\">Feature</th><th class=\"p-1 border\">Lok Sabha (House of the People)</th><th class=\"p-1 border\">Rajya Sabha (Council of States)</th></tr></thead>\n<tbody>\n<tr><td class=\"p-1 border font-semibold\">Composition</td><td class=\"p-1 border\">Max 550 directly elected by citizens</td><td class=\"p-1 border\">250 (238 elected by State MLAs + 12 nominated)</td></tr>\n<tr><td class=\"p-1 border font-semibold\">Tenure</td><td class=\"p-1 border\">5-year term (subject to early dissolution)</td><td class=\"p-1 border\">Permanent body (1/3 members retire every 2 years)</td></tr>\n<tr><td class=\"p-1 border font-semibold\">Presiding Officer</td><td class=\"p-1 border\">Speaker elected by members</td><td class=\"p-1 border\">Vice-President of India (ex-officio Chairman)</td></tr>\n<tr><td class=\"p-1 border font-semibold\">Financial Powers</td><td class=\"p-1 border\">Exclusive control over Money Bills (Art 109/110)</td><td class=\"p-1 border\">Can only delay Money Bills for max 14 days</td></tr>\n<tr><td class=\"p-1 border font-semibold\">Executive Control</td><td class=\"p-1 border\">Council of Ministers is collectively responsible solely to Lok Sabha (No-Confidence Motion)</td><td class=\"p-1 border\">Cannot pass a No-Confidence Motion</td></tr>\n</tbody>\n</table>\n</div>\n\n<strong>2. Exclusive Powers of Lok Sabha:</strong>\n1. <strong>Money Bills:</strong> Can only be introduced in Lok Sabha upon presidential recommendation. Speaker has sole authority to certify a Money Bill.\n2. <strong>Joint Sitting (Article 108):</strong> In deadlocks over ordinary bills, Lok Sabha's greater numerical strength and Speaker's leadership prevail.",
    "examTip": "Mention the 14-day limit: Rajya Sabha can only delay a Money Bill for up to 14 days, after which it passes automatically.",
    "starred": false,
    "mastered": false
  },
  {
    "id": "card-prac-232",
    "subjectId": "const",
    "unit": 4,
    "pyqTag": "\ud83c\udfaf Practice Question \u2022 High Probability",
    "badgeType": "\u26a1 Exception / Trap",
    "badgeLabel": "Financial Emergency",
    "question": "Explain Financial Emergency under Article 360 of the Indian Constitution: Grounds for proclamation, parliamentary approval, and constitutional effects.",
    "hint": "Grounds: Threat to financial stability or credit of India. No time limit once approved. Salaried reductions of judges/officials. Has NEVER been declared in India.",
    "answer": "<strong>1. Grounds for Proclamation (Article 360):</strong>\nIf the President is satisfied that a situation has arisen whereby the financial stability or credit of India or any part of its territory is threatened.\n\n<strong>2. Parliamentary Approval & Duration:</strong>\n\u2022 Must be approved by both Houses of Parliament within <strong>two months</strong> by a simple majority.\n\u2022 Once approved by Parliament, it continues indefinitely until revoked by the President (unlike Articles 352 and 356, no periodic 6-month parliamentary re-approval is required!).\n\n<strong>3. Constitutional Effects:</strong>\n1. <strong>Financial Directions to States:</strong> The Central Government can issue binding directions to any state to observe specified canons of financial propriety.\n2. <strong>Reduction of Salaries:</strong> The President can issue orders reducing the salaries and allowances of all persons serving the Union, including <strong>Judges of the Supreme Court and High Courts</strong>!\n3. <strong>Reservation of State Money Bills:</strong> The President can mandate that all Money Bills and financial bills passed by a state legislature be reserved for presidential consideration.\n\n<strong>4. Historical Trivia:</strong>\n\u2022 A Financial Emergency has <strong>NEVER been declared in India</strong> till date, not even during the severe 1991 balance-of-payments crisis!",
    "examTip": "Highlight that Article 360 has NEVER been proclaimed in India since independence in 1947.",
    "starred": false,
    "mastered": false
  },
  {
    "id": "card-prac-233",
    "subjectId": "const",
    "unit": 5,
    "pyqTag": "\ud83c\udfaf Practice Question \u2022 High Probability",
    "badgeType": "\ud83d\udcd0 Derivation / Formula",
    "badgeLabel": "Engineering Ethics Codes",
    "question": "Detail the fundamental canons of the IEEE Code of Ethics and the NSPE Code of Ethics for engineering professionals.",
    "hint": "Canons: 1. Public safety, health & welfare. 2. Competent practice. 3. Avoid conflicts of interest. 4. Reject bribery. 5. Honest peer review.",
    "answer": "<strong>1. Foundational Mandate:</strong>\nBoth the IEEE (Institute of Electrical and Electronics Engineers) and NSPE (National Society of Professional Engineers) codes mandate that engineers must:\n<em>\"Hold paramount the safety, health, and welfare of the public in the performance of their professional duties.\"</em>\n\n<strong>2. Fundamental Ethical Canons:</strong>\n1. <strong>Paramount Safety & Environmental Sustainability:</strong>\n   Promptly disclose factors that might endanger the public, workers, or the natural environment.\n2. <strong>Competence & Integrity:</strong>\n   Perform services only in areas of their technical competence. Undertake engineering tasks only if qualified by education or experience.\n3. <strong>Avoid Conflicts of Interest:</strong>\n   Avoid unlawful real or perceived conflicts of interest and promptly disclose them to affected parties.\n4. <strong>Honest & Objective Communication:</strong>\n   Be honest, truthful, realistic, and objective in stating claims or estimates based on available data, avoiding false puffery.\n5. <strong>Zero Tolerance for Bribery & Corruption:</strong>\n   Reject bribery, kickbacks, and extortion in all forms.\n6. <strong>Fair Treatment & Non-Discrimination:</strong>\n   Treat all persons fairly regardless of race, religion, gender, disability, or national origin.\n7. <strong>Support Whistleblowers & Ethical Practice:</strong>\n   Assist colleagues in professional development and support them in adhering to ethical standards.",
    "examTip": "Quote the exact overarching canon: 'Hold paramount the safety, health, and welfare of the public.'",
    "starred": false,
    "mastered": false
  },
  {
    "id": "card-prac-234",
    "subjectId": "eng",
    "unit": 1,
    "pyqTag": "\ud83c\udfaf Practice Question \u2022 High Probability",
    "badgeType": "\ud83d\udcd0 Derivation / Formula",
    "badgeLabel": "Paralanguage / Vocalics",
    "question": "Explain the key components of Vocalics (Paralanguage) in engineering presentations: Pitch, Pace, Volume, Tone, Pauses, and Articulation.",
    "hint": "Paralanguage is HOW you speak, not what you say. Controls speaker credibility, audience engagement, and message retention.",
    "answer": "<strong>1. What is Vocalics (Paralanguage)?:</strong>\nThe vocal characteristics that accompany spoken communication, conveying emotional nuance, authority, and emphasis without altering the actual dictionary words.\n\n<strong>2. Six Core Components:</strong>\n1. <strong>Pitch (Voice Frequency):</strong>\n   \u2022 High vs low audio frequency. A monotonous flat pitch induces boredom; varying pitch emphasizes critical project findings.\n2. <strong>Pace (Speaking Rate):</strong>\n   \u2022 The speed of delivery (ideal is 130\u2013160 words per minute). Slowing down signals gravity and complex formulas; quickening pace communicates passion.\n3. <strong>Volume (Loudness):</strong>\n   \u2022 Modulating voice volume to suit hall acoustics and microphone distance.\n4. <strong>Tone (Emotional Color):</strong>\n   \u2022 Warm, authoritative, defensive, or indifferent. In technical defense viva, an assertive yet respectful tone shows confidence.\n5. <strong>Strategic Pauses:</strong>\n   \u2022 Intentional silences before delivering key statistics or after posing rhetorical questions, allowing cognitive absorption and eliminating filler sounds (\"uh\", \"um\").\n6. <strong>Articulation & Pronunciation:</strong>\n   \u2022 Enunciating syllables clearly so technical acronyms (e.g. \"FPGA\", \"MOSFET\") are distinct.",
    "examTip": "Mention that strategic pauses eliminate filler words ('um', 'uh', 'like') and improve perceived competence.",
    "starred": false,
    "mastered": false
  },
  {
    "id": "card-prac-235",
    "subjectId": "eng",
    "unit": 1,
    "pyqTag": "\ud83c\udfaf Practice Question \u2022 High Probability",
    "badgeType": "\ud83d\udcd0 Derivation / Formula",
    "badgeLabel": "Active Listening",
    "question": "Distinguish between passive hearing and active listening. Explain the five sequential stages of the Active Listening process in engineering design reviews.",
    "hint": "Hearing is passive physical reception of sound; Listening is active cognitive decoding. 5 stages: Receiving, Understanding, Remembering, Evaluating, Responding.",
    "answer": "<strong>1. Passive Hearing vs. Active Listening:</strong>\n\u2022 <strong>Hearing:</strong> An involuntary physiological process where acoustic sound waves strike the eardrum and send neural impulses to the auditory cortex (passive, effortless).\n\u2022 <strong>Active Listening:</strong> A conscious cognitive and psychological discipline requiring undivided attention to decode, interpret, evaluate, and formulate constructive feedback on the speaker's message.\n\n<strong>2. Five Sequential Stages of Active Listening:</strong>\n1. <strong>Stage 1 \u2014 Receiving (Attending):</strong>\n   Focusing attention on verbal statements and non-verbal body language while filtering out ambient background noise and phone notifications.\n2. <strong>Stage 2 \u2014 Understanding (Comprehending):</strong>\n   Decoding the speaker's technical vocabulary and grasping their underlying intent and technical constraints.\n3. <strong>Stage 3 \u2014 Remembering:</strong>\n   Storing key project specs and action items in working and long-term memory (assisted by taking concise written notes).\n4. <strong>Stage 4 \u2014 Evaluating:</strong>\n   Objectively distinguishing between factual technical proof and subjective opinions without premature emotional judgment.\n5. <strong>Stage 5 \u2014 Responding (Feedback):</strong>\n   Providing verbal affirmation (\"I see\", \"Understood\"), asking clarifying questions, or summarizing agreed next steps.",
    "examTip": "List all 5 stages in order: Receiving -> Understanding -> Remembering -> Evaluating -> Responding.",
    "starred": false,
    "mastered": false
  },
  {
    "id": "card-prac-236",
    "subjectId": "eng",
    "unit": 2,
    "pyqTag": "\ud83c\udfaf Practice Question \u2022 High Probability",
    "badgeType": "\ud83d\udcd0 Derivation / Formula",
    "badgeLabel": "Emotional Intelligence",
    "question": "Explain Daniel Goleman's Five Dimensions of Emotional Intelligence (EQ). Why is EQ increasingly prioritized over pure technical IQ in engineering team hiring?",
    "hint": "Goleman's 5 dimensions: Self-awareness, Self-regulation, Internal motivation, Empathy, Social skills. High EQ teams resolve technical conflicts faster.",
    "answer": "<strong>1. Daniel Goleman's Five Dimensions of EQ:</strong>\n1. <strong>Self-Awareness:</strong>\n   Recognizing one's own moods, emotional triggers, cognitive biases, and how they impact teammates during high-pressure deadlines.\n2. <strong>Self-Regulation (Emotional Control):</strong>\n   The ability to redirect disruptive impulses and maintain composure under production server crashes or critical code review feedback.\n3. <strong>Intrinsic Motivation:</strong>\n   A passion for technical excellence, craftsmanship, and learning driven by internal curiosity rather than external bonuses or titles.\n4. <strong>Empathy:</strong>\n   Understanding the emotional makeup, unspoken frustrations, and perspectives of diverse cross-functional colleagues.\n5. <strong>Social & Interpersonal Skills:</strong>\n   Proficiency in building rapport, navigating corporate politics, managing conflict, and persuading stakeholders.\n\n<strong>2. Why EQ Outweighs Pure IQ in Modern Engineering:</strong>\n\u2022 Complex software and hardware systems are built by multidisciplinary teams, not lone geniuses.\n\u2022 Engineers with high EQ communicate technical trade-offs constructively, embrace mentorship, and prevent catastrophic team friction.",
    "examTip": "Name Daniel Goleman and list all 5 dimensions clearly.",
    "starred": false,
    "mastered": false
  },
  {
    "id": "card-prac-237",
    "subjectId": "eng",
    "unit": 2,
    "pyqTag": "\ud83c\udfaf Practice Question \u2022 High Probability",
    "badgeType": "\u26a1 Exception / Trap",
    "badgeLabel": "Adaptability & Resilience",
    "question": "Describe how an engineer can demonstrate cognitive adaptability and professional resilience when handling sudden technological pivots or project cancellations.",
    "hint": "Cognitive adaptability: unlearning obsolete tools, embracing growth mindset, emotional decoupling from depreciated code, agile sprint reprioritization.",
    "answer": "<strong>1. The Need for Adaptability in Engineering:</strong>\nTechnology stacks evolve rapidly (e.g. legacy microcontrollers shifting to RISC-V, on-prem servers shifting to cloud serverless). Rigid engineers become obsolete; adaptable engineers thrive.\n\n<strong>2. Concrete Engineering Strategies:</strong>\n1. <strong>Embrace a Growth Mindset (Carol Dweck):</strong>\n   Viewing technical failures or bugs not as personal inadequacy, but as informative data points for iterative improvement.\n2. <strong>Decouple Identity from Past Code:</strong>\n   Accepting when a feature or repository you built over three months is deprecated in favor of a superior architectural solution.\n3. <strong>Proactive Continuous Upskilling:</strong>\n   Allocating 2\u20133 hours weekly to experiment with emerging toolchains, reading open-source documentation, and participating in hackathons.\n4. <strong>Agile Sprint Re-prioritization:</strong>\n   When client specifications change abruptly, breaking new deliverables into small, testable minimum viable products (MVPs).",
    "examTip": "Mention Carol Dweck's 'Growth Mindset' vs 'Fixed Mindset' concept.",
    "starred": false,
    "mastered": false
  },
  {
    "id": "card-prac-238",
    "subjectId": "eng",
    "unit": 3,
    "pyqTag": "\ud83c\udfaf Practice Question \u2022 High Probability",
    "badgeType": "\ud83d\udcd0 Derivation / Formula",
    "badgeLabel": "SCAMPER Product Design",
    "question": "Explain the SCAMPER creative brainstorming framework. Apply all seven letters to redesign and innovate a standard manual bicycle into a smart electric urban commuter.",
    "hint": "S: Substitute, C: Combine, A: Adapt, M: Modify/Magnify, P: Put to another use, E: Eliminate, R: Reverse/Rearrange.",
    "answer": "<strong>1. The SCAMPER Creative Framework:</strong>\nDeveloped by Bob Eberle, SCAMPER is an idea-generation checklist:\n\u2022 <strong>S \u2014 Substitute:</strong> Replace steel chain drive with a grease-free carbon belt drive.\n\u2022 <strong>C \u2014 Combine:</strong> Integrate bright LED headlights, turn signals, and GPS anti-theft tracking directly into the frame tubing.\n\u2022 <strong>A \u2014 Adapt:</strong> Adapt regenerative braking from electric cars to recharge the battery during downhill descents.\n\u2022 <strong>M \u2014 Modify / Magnify:</strong> Enlarge digital handlebar display to show live battery range, tire pressure, and turn-by-turn navigation.\n\u2022 <strong>P \u2014 Put to Another Use:</strong> Use the internal high-capacity battery pack as an emergency power bank to fast-charge laptops and smartphones via USB-C ports.\n\u2022 <strong>E \u2014 Eliminate:</strong> Eliminate bulky external gear derailleurs in favor of an enclosed automatic electronic hub transmission.\n\u2022 <strong>R \u2014 Reverse / Rearrange:</strong> Rearrange battery pack to sit low inside the bottom bracket frame tube to lower center of gravity and improve stability.",
    "examTip": "Provide a concrete, realistic engineering redesign for all 7 letters of SCAMPER.",
    "starred": false,
    "mastered": false
  },
  {
    "id": "card-prac-239",
    "subjectId": "eng",
    "unit": 3,
    "pyqTag": "\ud83c\udfaf Practice Question \u2022 High Probability",
    "badgeType": "\ud83d\udcd0 Derivation / Formula",
    "badgeLabel": "Mind Mapping",
    "question": "Explain the core principles and psychological advantages of Mind Mapping for organizing complex engineering design specifications.",
    "hint": "Tony Buzan's principles: Central image/theme, radial tree branches, single keywords, color coding, visual icons. Matches associative brain structure.",
    "answer": "<strong>1. Principles of Mind Mapping (Tony Buzan):</strong>\n\u2022 <strong>Central Core Image:</strong> Place the primary theme or system name (e.g., \"Autonomous Robot Architecture\") in the center of a blank page.\n\u2022 <strong>Radial Hierarchical Branches:</strong> Major sub-systems radiate outward as thick primary branches (Power, Sensation, Processing, Actuation).\n\u2022 <strong>Secondary & Tertiary Branches:</strong> Sub-branches represent granular components (LiPo battery, ultrasonic sensors, STM32 MCU, motor drivers).\n\u2022 <strong>Keywords over Sentences:</strong> Use single expressive keywords and standard engineering abbreviations rather than long paragraphs.\n\u2022 <strong>Color Coding & Visual Icons:</strong> Differentiate functional domains with distinct colors and schematic symbols.\n\n<strong>2. Cognitive Advantages for Engineers:</strong>\n\u2022 Mimics the brain's associative, non-linear neural synapse network.\n\u2022 Provides high-level system overview while preserving deep technical details on a single visual canvas.",
    "examTip": "Mention Tony Buzan as the pioneer of the modern Mind Mapping technique.",
    "starred": false,
    "mastered": false
  },
  {
    "id": "card-prac-240",
    "subjectId": "eng",
    "unit": 4,
    "pyqTag": "\ud83c\udfaf Practice Question \u2022 High Probability",
    "badgeType": "\ud83d\udcd0 Derivation / Formula",
    "badgeLabel": "Async vs Sync Comm",
    "question": "Construct an engineering comparison matrix between Synchronous and Asynchronous communication channels. Provide guidelines on when engineers should use each.",
    "hint": "Synchronous (live calls, in-person): rapid alignment, urgent crisis. Asynchronous (email, PR reviews, Jira): deep work, timezone flexibility, permanent record.",
    "answer": "<strong>Engineering Comparison Matrix:</strong>\n<div class=\"overflow-x-auto my-2\">\n<table class=\"w-full text-xs text-left border border-slate-300\">\n<thead class=\"bg-slate-100\"><tr><th class=\"p-1 border\">Parameter</th><th class=\"p-1 border\">Synchronous Communication</th><th class=\"p-1 border\">Asynchronous Communication</th></tr></thead>\n<tbody>\n<tr><td class=\"p-1 border font-semibold\">Channels & Tools</td><td class=\"p-1 border\">Zoom, Google Meet, phone calls, in-person standups</td><td class=\"p-1 border\">GitHub Pull Requests, Jira tickets, Slack threads, Email</td></tr>\n<tr><td class=\"p-1 border font-semibold\">Response Expectation</td><td class=\"p-1 border\">Immediate / Real-time ($< 1\\text{ minute}$)</td><td class=\"p-1 border\">Delayed / Flexible ($2 - 24\\text{ hours}$)</td></tr>\n<tr><td class=\"p-1 border font-semibold\">Impact on Deep Work</td><td class=\"p-1 border\">High interruption rate, fragments focus blocks</td><td class=\"p-1 border\">Zero interruption, protects deep programming flow</td></tr>\n<tr><td class=\"p-1 border font-semibold\">Documentation Record</td><td class=\"p-1 border\">Ephemeral (often lost unless recorded & transcribed)</td><td class=\"p-1 border\">Searchable, permanent, documented decision trails</td></tr>\n<tr><td class=\"p-1 border font-semibold\">Best Used For</td><td class=\"p-1 border\">High-severity production outages, sensitive 1-on-1s</td><td class=\"p-1 border\">Code reviews, RFC architectural specs, daily status updates</td></tr>\n</tbody>\n</table>\n</div>",
    "examTip": "Present the comparison as a clean matrix covering tools, response time, deep work impact, and best use cases.",
    "starred": false,
    "mastered": false
  },
  {
    "id": "card-prac-241",
    "subjectId": "eng",
    "unit": 4,
    "pyqTag": "\ud83c\udfaf Practice Question \u2022 High Probability",
    "badgeType": "\u26a1 Exception / Trap",
    "badgeLabel": "Cross-Cultural Comm",
    "question": "Explain the differences between High-Context and Low-Context communication cultures in global engineering teams. How can miscommunication be avoided?",
    "hint": "Low-context (USA, Germany): explicit, direct, literal words. High-context (Japan, India): implicit, non-verbal cues, relationship-oriented.",
    "answer": "<strong>1. High-Context vs. Low-Context (Edward T. Hall):</strong>\n\u2022 <strong>Low-Context Communication (e.g., Germany, USA, Netherlands):</strong>\n  - Communication is direct, explicit, and precise. Meaning is carried almost 100% in the literal spoken or written words.\n  - \"Yes\" means complete agreement; \"No\" is stated bluntly without offense.\n\u2022 <strong>High-Context Communication (e.g., Japan, India, Middle East):</strong>\n  - Communication is subtle, implicit, and relationship-centric. Non-verbal cues, status, hierarchy, and context carry significant meaning.\n  - Disagreement is phrased diplomatically (\"That may be difficult\") to preserve team harmony and avoid loss of face.\n\n<strong>2. Guidelines for Global Engineering Teams:</strong>\n1. <strong>Document Architectural Decisions in Writing:</strong> Follow up verbal discussions with written Action Item summaries.\n2. <strong>Adopt Literal Precision in Technical Specs:</strong> Avoid idioms or colloquial sarcasm in code review comments.",
    "examTip": "Attribute the High-Context vs Low-Context concept to cultural anthropologist Edward T. Hall.",
    "starred": false,
    "mastered": false
  },
  {
    "id": "card-prac-242",
    "subjectId": "eng",
    "unit": 5,
    "pyqTag": "\ud83c\udfaf Practice Question \u2022 High Probability",
    "badgeType": "\ud83d\udcd0 Derivation / Formula",
    "badgeLabel": "ATS Technical Resume",
    "question": "Explain the principles of drafting an ATS (Applicant Tracking System) friendly technical resume for engineering campus recruitment drives.",
    "hint": "ATS rules: Clean single-column layout, standard headers (Skills, Education, Projects), searchable keywords, quantifiable bullet points (XYZ formula).",
    "answer": "<strong>1. What is an ATS (Applicant Tracking System)?:</strong>\nAutomated software used by engineering recruiters to parse, filter, and score candidate resumes against job description keywords before a human recruiter reads them.\n\n<strong>2. ATS Optimization Rules for Engineers:</strong>\n1. <strong>Clean Single-Column Formatting:</strong> Avoid multi-column tables, graphics, text boxes, and icons that confuse parsing algorithms. Use clean PDF/Word documents.\n2. <strong>Keyword Matching:</strong> Include exact technical keywords from the job description (e.g., \"Embedded C\", \"ARM Cortex\", \"Git\", \"I2C\", \"Oscilloscope\").\n3. <strong>Google's 'XYZ Formula' for Project Bullets:</strong>\n   Format achievements as: <em>\"Accomplished [X], as measured by [Y], by doing [Z].\"</em>\n   - <em>Weak:</em> \"Worked on an IoT weather station.\"\n   - <em>Strong (XYZ):</em> \"Designed an IoT weather monitoring station that reduced telemetry transmission latency by 35% through custom UDP socket compression in embedded C.\"\n4. <strong>Standard Heading Names:</strong> Use standard labels: \\`Technical Skills\\`, \\`Education\\`, \\`Engineering Projects\\`, \\`Certifications\\`. Avoid obscure titles like \\`My Journey\\`.\n5. <strong>Reverse-Chronological Ordering:</strong> List current degree and most recent internships first.",
    "examTip": "Quote Google's XYZ formula: 'Accomplished [X], as measured by [Y], by doing [Z]'.",
    "starred": false,
    "mastered": false
  },
  {
    "id": "card-new-301",
    "subjectId": "phys",
    "unit": 1,
    "pyqTag": "\ud83d\udd25 Asked in SEE Feb 2026, CIE-1 \u2022 8 Marks",
    "badgeType": "\ud83d\udcd0 Derivation / Formula",
    "badgeLabel": "Einstein Relations",
    "question": "Obtain an expression for the energy density of radiation under thermal equilibrium conditions in terms of Einstein's coefficients. Compare it with Planck's radiation law.",
    "hint": "Consider two energy states E1 and E2. Thermal equilibrium: Rate of absorption B12*N1*rho = Rate of emission (A21*N2 + B21*N2*rho). Use Boltzmann ratio N1/N2 = e^(h nu / kT).",
    "answer": "<strong>1. Principle of Detailed Balancing:</strong>\nConsider an atomic system in thermal equilibrium inside a cavity at temperature $T$ with two energy levels $E_1$ and $E_2$ ($E_2 - E_1 = h\\nu$).\n\u2022 Rate of stimulated absorption: $R_{\\text{abs}} = B_{12} N_1 \\rho(\\nu)$\n\u2022 Rate of spontaneous emission: $R_{\\text{spont}} = A_{21} N_2$\n\u2022 Rate of stimulated emission: $R_{\\text{stim}} = B_{21} N_2 \\rho(\\nu)$\n\n<strong>2. Derivation:</strong>\nAt thermal equilibrium: $\\text{Total Rate of Absorption} = \\text{Total Rate of Emission}$\n$$B_{12} N_1 \\rho(\\nu) = A_{21} N_2 + B_{21} N_2 \\rho(\\nu)$$\n$$\\rho(\\nu) [B_{12} N_1 - B_{21} N_2] = A_{21} N_2$$\n$$\\rho(\\nu) = \\frac{A_{21} N_2}{B_{12} N_1 - B_{21} N_2} = \\frac{A_{21} / B_{21}}{\\frac{B_{12}}{B_{21}}\\left(\\frac{N_1}{N_2}\\right) - 1}$$\n\u2022 According to Boltzmann's distribution law:\n  $$\\frac{N_1}{N_2} = e^{(E_2 - E_1)/kT} = e^{h\\nu / kT}$$\n\u2022 Since probabilities of upward and downward stimulated transitions are symmetric ($B_{12} = B_{21}$):\n  $$\\rho(\\nu) = \\frac{A_{21} / B_{21}}{e^{h\\nu / kT} - 1}$$\n\n<strong>3. Comparison with Planck's Law:</strong>\nPlanck's radiation law gives: $\\rho(\\nu) = \\frac{8\\pi h\\nu^3}{c^3} \\frac{1}{e^{h\\nu / kT} - 1}$.\nComparing yields the fundamental Einstein ratios:\n$$\\mathbf{B_{12} = B_{21}} \\quad \\text{and} \\quad \\mathbf{\\frac{A_{21}}{B_{21}} = \\frac{8\\pi h\\nu^3}{c^3}}$$",
    "examTip": "Always state B12 = B21 (stimulated absorption equals stimulated emission probability) and A21/B21 is proportional to nu^3.",
    "starred": false,
    "mastered": false
  },
  {
    "id": "card-new-302",
    "subjectId": "phys",
    "unit": 1,
    "pyqTag": "\ud83d\udd25 Asked in SEE Feb 2026, CIE-1 \u2022 8 Marks",
    "badgeType": "\ud83e\uddea Reaction / Mechanism",
    "badgeLabel": "He-Ne Laser",
    "question": "Describe the construction and working of a Helium-Neon (He-Ne) gas laser with an energy level diagram. Why is a mixture of Helium and Neon used?",
    "hint": "Gas ratio 10:1 (He:Ne). He atoms excited by electron collision to metastable 20.61 eV & 20.66 eV, transfer energy resonantly to Ne 20.66 eV level (3s), emitting 632.8 nm red light.",
    "answer": "<strong>1. Construction of He-Ne Laser:</strong>\n\u2022 <strong>Active Medium:</strong> A quartz discharge tube filled with a mixture of Helium ($He$) and Neon ($Ne$) gases in a <strong>$10:1$ ratio</strong> at low pressure ($\\sim 1\\text{ torr}$).\n\u2022 <strong>Pumping Source:</strong> High-voltage DC electric discharge ($\\sim 1 - 2\\text{ kV}$) between cathode and anode.\n\u2022 <strong>Optical Resonator:</strong> Two parallel dielectric mirrors: one 100% reflective, and one partially reflective ($99\\%$) output coupler.\n\n<strong>2. Working & Energy Level Mechanism:</strong>\n1. <strong>Electron Impact Excitation of Helium:</strong>\n   Electric discharge accelerates electrons, which collide with ground-state Helium atoms, exciting them to long-lived metastable levels $2^1S$ ($20.61\\text{ eV}$) and $2^3S$ ($19.82\\text{ eV}$).\n2. <strong>Resonant Energy Collision Transfer:</strong>\n   Neon atoms have energy levels $3s$ ($20.66\\text{ eV}$) and $2s$ ($19.78\\text{ eV}$) that match Helium's metastable levels. Inelastic atom-atom collisions transfer energy resonantly:\n   $$He^* + Ne \\rightarrow He + Ne^*(3s)$$\n   producing <strong>population inversion</strong> between $3s$ and $2p$ levels of Neon!\n3. <strong>Lasing Transition:</strong>\n   Stimulated emission occurs as Neon drops from $3s \\rightarrow 2p$, emitting monochromatic red coherent laser light at <strong>$\\lambda = 632.8\\text{ nm}$</strong>.\n4. Neon drops quickly from $2p \\rightarrow 1s$, and de-excites to the ground state via wall collisions.",
    "examTip": "Highlight that Helium does NOT lase; Helium acts solely as an energy transfer pump to populate Neon levels!",
    "starred": false,
    "mastered": false
  },
  {
    "id": "card-new-303",
    "subjectId": "phys",
    "unit": 1,
    "pyqTag": "\ud83d\udd25 Asked in SEE Feb 2026 \u2022 7 Marks",
    "badgeType": "\ud83d\udcd0 Derivation / Formula",
    "badgeLabel": "Fiber Optics NA",
    "question": "Define the Acceptance Angle and Numerical Aperture of an optical fiber. Derive an expression for the Numerical Aperture in terms of the refractive indices of core (n1) and cladding (n2).",
    "hint": "Acceptance angle theta_a is maximum angle for total internal reflection. Apply Snell's law at entrance face and critical angle condition at core-cladding boundary: sin theta_c = n2/n1.",
    "answer": "<strong>1. Definitions:</strong>\n\u2022 <strong>Acceptance Angle ($\\theta_a$):</strong> The maximum angle of incidence at the fiber entrance face at which light can enter and propagate along the core by total internal reflection.\n\u2022 <strong>Numerical Aperture ($NA$):</strong> The light gathering capacity of an optical fiber, defined as $NA = \\sin\\theta_a$.\n\n<strong>2. Step-by-Step Derivation:</strong>\n\u2022 Let the outside medium (air) have refractive index $n_0 = 1$, the core have index $n_1$, and cladding index $n_2$ ($n_1 > n_2$).\n\u2022 By Snell's law at the air-core entrance interface:\n  $$n_0 \\sin\\theta_0 = n_1 \\sin r_1 \\implies \\sin\\theta_0 = n_1 \\sin r_1 \\quad (\\text{for } n_0 = 1)$$\n\u2022 In the right triangle inside the core, the angle of incidence at the core-cladding boundary is $\\phi = 90^\\circ - r_1$.\n\u2022 For Total Internal Reflection (TIR) to occur, $\\phi \\ge \\phi_c$, where $\\sin\\phi_c = \\frac{n_2}{n_1}$:\n  $$\\cos r_1 = \\sin(90^\\circ - r_1) = \\sin\\phi_c = \\frac{n_2}{n_1}$$\n\u2022 Using the trigonometric identity $\\sin r_1 = \\sqrt{1 - \\cos^2 r_1}$:\n  $$\\sin r_1 = \\sqrt{1 - \\left(\\frac{n_2}{n_1}\\right)^2} = \\frac{\\sqrt{n_1^2 - n_2^2}}{n_1}$$\n\u2022 Substituting into Snell's law:\n  $$\\sin\\theta_a = n_1 \\left( \\frac{\\sqrt{n_1^2 - n_2^2}}{n_1} \\right) = \\sqrt{n_1^2 - n_2^2}$$\n\u2022 <strong>Final Expressions:</strong>\n  $$\\mathbf{NA = \\sqrt{n_1^2 - n_2^2} = n_1\\sqrt{2\\Delta}}$$\n  $$\\mathbf{\\theta_a = \\sin^{-1}\\left(\\sqrt{n_1^2 - n_2^2}\\right)}$$",
    "examTip": "Express NA both in terms of n1, n2 and fractional index difference Delta: NA = n1 * sqrt(2*Delta).",
    "starred": false,
    "mastered": false
  },
  {
    "id": "card-new-304",
    "subjectId": "phys",
    "unit": 2,
    "pyqTag": "\ud83d\udd25 Asked in SEE Feb 2026 \u2022 8 Marks",
    "badgeType": "\ud83d\udcd0 Derivation / Formula",
    "badgeLabel": "Schrodinger Equation",
    "question": "Starting from the classical wave equation, arrive at the expression for the Time-Independent One-Dimensional Schr\u00f6dinger Wave Equation.",
    "hint": "Classical wave: psi = psi_0 e^(-i omega t). Total energy E = p\u00b2/(2m) + V => p\u00b2 = 2m(E - V). Substitute de Broglie wavelength lambda = h/p.",
    "answer": "<strong>1. Classical Wave Equation:</strong>\nA stationary wave associated with a de Broglie particle moving along the $x$-axis is represented by:\n$$\\psi(x, t) = \\psi_0(x) e^{-i \\omega t}$$\n\u2022 Differentiating twice with respect to $x$:\n  $$\\frac{\\partial^2 \\psi}{\\partial x^2} = -k^2 \\psi = -\\left(\\frac{2\\pi}{\\lambda}\\right)^2 \\psi = -\\frac{4\\pi^2}{\\lambda^2} \\psi$$\n\n<strong>2. Incorporating de Broglie Relation:</strong>\n\u2022 According to de Broglie: $\\lambda = \\frac{h}{p} \\implies \\frac{1}{\\lambda^2} = \\frac{p^2}{h^2}$.\n\u2022 Substituting into the wave derivative:\n  $$\\frac{\\partial^2 \\psi}{\\partial x^2} = -\\frac{4\\pi^2 p^2}{h^2} \\psi = -\\frac{p^2}{\\hbar^2} \\psi \\quad \\left(\\text{since } \\hbar = \\frac{h}{2\\pi}\\right)$$\n\n<strong>3. Energy Conservation Relation:</strong>\n\u2022 Total mechanical energy $E = \\text{Kinetic Energy} + \\text{Potential Energy} = \\frac{p^2}{2m} + V(x)$.\n\u2022 Therefore: $p^2 = 2m(E - V)$.\n\n<strong>4. Substituting into Differential Equation:</strong>\n$$\\frac{\\partial^2 \\psi}{\\partial x^2} = -\\frac{2m(E - V)}{\\hbar^2} \\psi$$\n\u2022 Rearranging yields the standard <strong>Time-Independent 1D Schr\u00f6dinger Equation</strong>:\n  $$\\mathbf{\\frac{d^2 \\psi}{d x^2} + \\frac{2m}{\\hbar^2} \\left(E - V(x)\\right) \\psi = 0}$$",
    "examTip": "State h-bar = h/(2*pi) and write out the kinetic plus potential energy decomposition clearly.",
    "starred": false,
    "mastered": false
  },
  {
    "id": "card-new-305",
    "subjectId": "phys",
    "unit": 2,
    "pyqTag": "\ud83d\udd25 Asked in SEE Feb 2026, CIE-1 \u2022 8 Marks",
    "badgeType": "\ud83d\udcd0 Derivation / Formula",
    "badgeLabel": "Particle in a Box",
    "question": "Obtain the energy eigenvalues and normalized eigenfunctions for a particle of mass m confined in an infinite one-dimensional potential well of width a.",
    "hint": "Boundary conditions: psi(0) = 0 and psi(a) = 0. Leads to k = n*pi/a. E_n = n\u00b2h\u00b2/(8ma\u00b2). Normalization gives A = sqrt(2/a).",
    "answer": "<strong>1. Potential Well Definition:</strong>\n$V(x) = 0$ for $0 \\le x \\le a$, and $V(x) = \\infty$ for $x < 0$ and $x > a$.\nInside the well ($V=0$), the Schr\u00f6dinger equation is:\n$$\\frac{d^2 \\psi}{dx^2} + k^2 \\psi = 0, \\quad \\text{where } k^2 = \\frac{2mE}{\\hbar^2}$$\nGeneral solution: $\\psi(x) = A \\sin(kx) + B \\cos(kx)$.\n\n<strong>2. Applying Boundary Conditions:</strong>\n\u2022 At $x = 0$: $\\psi(0) = 0 \\implies A(0) + B(1) = 0 \\implies B = 0$.\n  So $\\psi(x) = A \\sin(kx)$.\n\u2022 At $x = a$: $\\psi(a) = 0 \\implies A \\sin(ka) = 0$.\n  Since $A \\ne 0$, $\\sin(ka) = 0 \\implies ka = n\\pi \\implies k = \\frac{n\\pi}{a}$ (where $n = 1, 2, 3, \\dots$).\n\n<strong>3. Energy Eigenvalues ($E_n$):</strong>\n$$k^2 = \\frac{n^2\\pi^2}{a^2} = \\frac{2mE}{\\hbar^2} \\implies E_n = \\frac{n^2\\pi^2\\hbar^2}{2ma^2} = \\frac{n^2\\pi^2 (h/2\\pi)^2}{2ma^2}$$\n$$\\mathbf{E_n = \\frac{n^2 h^2}{8 m a^2}} \\quad (n = 1, 2, 3, \\dots)$$\n\n<strong>4. Normalization to find Amplitude $A$:</strong>\n$$\\int_0^a |\\psi(x)|^2 dx = 1 \\implies A^2 \\int_0^a \\sin^2\\left(\\frac{n\\pi x}{a}\\right) dx = A^2 \\left(\\frac{a}{2}\\right) = 1 \\implies A = \\sqrt{\\frac{2}{a}}$$\n\u2022 <strong>Normalized Eigenfunctions:</strong>\n  $$\\mathbf{\\psi_n(x) = \\sqrt{\\frac{2}{a}} \\sin\\left(\\frac{n\\pi x}{a}\\right)}$$",
    "examTip": "Highlight that n = 0 is not permitted because psi = 0 everywhere, meaning the particle does not exist.",
    "starred": false,
    "mastered": false
  },
  {
    "id": "card-new-306",
    "subjectId": "phys",
    "unit": 2,
    "pyqTag": "\ud83d\udd25 Asked in SEE Feb 2026, CIE-1 \u2022 7 Marks",
    "badgeType": "\u26a1 Exception / Trap",
    "badgeLabel": "Heisenberg Nucleus Proof",
    "question": "State Heisenberg's Uncertainty Principle. Using this principle, prove that an electron cannot reside inside an atomic nucleus.",
    "hint": "Nuclear diameter delta x ~ 10^-14 m. Uncertainty in momentum delta p >= hbar/(2 delta x). Calculate relativistic energy: E >= 20.4 MeV, but beta particles have only 2-4 MeV.",
    "answer": "<strong>1. Statement of Heisenberg's Uncertainty Principle:</strong>\nIt is physically impossible to simultaneously determine with arbitrary precision both the exact position ($x$) and momentum ($p$) of a quantum particle:\n$$\\Delta x \\cdot \\Delta p \\ge \\frac{\\hbar}{2}$$\n\n<strong>2. Mathematical Proof for Non-Existence of Electrons in the Nucleus:</strong>\n\u2022 The diameter of an atomic nucleus is typically of the order of $10^{-14}\\text{ m}$.\n\u2022 If an electron exists inside the nucleus, the maximum uncertainty in its position is:\n  $$\\Delta x \\approx 10^{-14}\\text{ m}$$\n\u2022 Minimum uncertainty in electron momentum:\n  $$\\Delta p \\ge \\frac{\\hbar}{2 \\Delta x} = \\frac{1.054 \\times 10^{-34}}{2 \\times 10^{-14}} \\approx 5.27 \\times 10^{-21}\\text{ kg}\\cdot\\text{m/s}$$\n\u2022 Therefore, the momentum of the electron must be at least $p \\approx 5.27 \\times 10^{-21}\\text{ kg}\\cdot\\text{m/s}$.\n\u2022 For such a high momentum, relativistic energy applies ($E \\approx p c$):\n  $$E \\approx (5.27 \\times 10^{-21}\\text{ kg}\\cdot\\text{m/s}) \\times (3 \\times 10^8\\text{ m/s}) = 1.58 \\times 10^{-12}\\text{ Joules}$$\n\u2022 Converting to electron-volts:\n  $$E = \\frac{1.58 \\times 10^{-12}}{1.6 \\times 10^{-19}} \\approx \\mathbf{9.88 \\times 10^6\\text{ eV} \\approx 10 - 20\\text{ MeV}}$$\n\n<strong>3. Conclusion:</strong>\nIf electrons existed inside the nucleus, beta-decay electrons emitted from nuclei would possess kinetic energies $> 20\\text{ MeV}$. However, experimental measurements in radioactive laboratories show beta particle energies are only <strong>$2 - 4\\text{ MeV}$</strong>. Hence, electrons CANNOT reside inside the nucleus!",
    "examTip": "State the observed beta particle energy (~2-4 MeV) and compare it against the calculated minimum (~10-20 MeV).",
    "starred": false,
    "mastered": false
  },
  {
    "id": "card-new-307",
    "subjectId": "phys",
    "unit": 3,
    "pyqTag": "\ud83d\udd25 Asked in SEE Feb 2026, CIE-2 \u2022 8 Marks",
    "badgeType": "\ud83d\udcd0 Derivation / Formula",
    "badgeLabel": "Density of States",
    "question": "Define density of states in a metal. Derive the mathematical expression for the density of energy states g(E)dE in a three-dimensional electron gas.",
    "hint": "Number of quantum states inside spherical octant of radius n: N = (1/8) * (4/3 pi n^3) * 2 (for spin). Substitute n in terms of energy E.",
    "answer": "<strong>1. Definition:</strong>\nDensity of states $g(E)dE$ is defined as the number of available quantum electron states per unit volume in the energy interval between $E$ and $E + dE$.\n\n<strong>2. Step-by-Step Derivation:</strong>\n\u2022 For a 3D potential box of volume $V = L^3$:\n  $$E = \\frac{h^2}{8m L^2}(n_x^2 + n_y^2 + n_z^2) = \\frac{h^2 n^2}{8m V^{2/3}} \\implies n^2 = \\frac{8m V^{2/3} E}{h^2}$$\n\u2022 The number of quantum states with quantum numbers up to $n$ in the positive octant ($n_x, n_y, n_z > 0$):\n  $$N = \\frac{1}{8} \\times \\left(\\frac{4}{3} \\pi n^3\\right) \\times 2 \\quad (\\text{multiplying by 2 for electron spin})$$\n  $$N = \\frac{\\pi}{3} n^3 = \\frac{\\pi}{3} \\left( \\frac{8m V^{2/3} E}{h^2} \\right)^{3/2} = \\frac{\\pi}{3} \\frac{(8m)^{3/2} V}{h^3} E^{3/2}$$\n\u2022 Differentiating with respect to $E$:\n  $$\\frac{dN}{dE} = \\frac{\\pi}{3} \\frac{(8m)^{3/2} V}{h^3} \\left(\\frac{3}{2} E^{1/2}\\right) = \\frac{8\\sqrt{2}\\pi m^{3/2} V}{h^3} E^{1/2}$$\n\u2022 Per unit volume ($g(E) = \\frac{1}{V}\\frac{dN}{dE}$):\n  $$\\mathbf{g(E) dE = \\frac{8\\sqrt{2}\\pi m^{3/2}}{h^3} E^{1/2} dE = \\frac{4\\pi (2m)^{3/2}}{h^3} E^{1/2} dE}$$",
    "examTip": "Do not forget to multiply by 2 for the two allowed electron spin orientations (Pauli exclusion principle).",
    "starred": false,
    "mastered": false
  },
  {
    "id": "card-new-308",
    "subjectId": "phys",
    "unit": 3,
    "pyqTag": "\ud83d\udd25 Asked in SEE Feb 2026, CIE-2 \u2022 8 Marks",
    "badgeType": "\ud83d\udcd0 Derivation / Formula",
    "badgeLabel": "Hall Effect",
    "question": "Explain the Hall effect in an n-type semiconductor with a neat schematic diagram. Derive expressions for the Hall Voltage (VH) and Hall Coefficient (RH). Mention two applications.",
    "hint": "When current I flows along x-axis and magnetic field B is applied along z-axis, Lorentz force deflects electrons to bottom face, creating transverse electric field Ey.",
    "answer": "<strong>1. Principle of Hall Effect:</strong>\nWhen a current-carrying semiconductor is placed in a transverse magnetic field, a potential difference (Hall Voltage, $V_H$) is developed across its opposite lateral faces in a direction perpendicular to both the electric current and the magnetic field.\n\n<strong>2. Derivation:</strong>\n\u2022 Let current $I$ flow along $+x$-direction, and magnetic field $B$ be applied along $+z$-direction.\n\u2022 Conduction electrons (charge $-e$, velocity $v_d$) experience downward Lorentz force along $-y$:\n  $$F_B = -e (v_d \\times B) = e v_d B$$\n\u2022 Electrons accumulate on the bottom surface, leaving positive donor ions on the top surface, establishing a transverse Hall electric field $E_H$ along $-y$.\n\u2022 At equilibrium: $\\text{Electrostatic Force } F_E = \\text{Magnetic Force } F_B$:\n  $$e E_H = e v_d B \\implies E_H = v_d B$$\n\u2022 Hall voltage across width $w$: $V_H = E_H \\cdot w = v_d B w$.\n\u2022 Current density: $J = n e v_d = \\frac{I}{w \\cdot t} \\implies v_d = \\frac{I}{n e w t}$ (where $t$ is thickness).\n\u2022 Substituting $v_d$:\n  $$V_H = \\left(\\frac{I}{n e w t}\\right) B w = \\mathbf{\\frac{B I}{n e t}}$$\n\u2022 <strong>Hall Coefficient ($R_H$):</strong>\n  $$R_H = \\frac{E_H}{J \\cdot B} = -\\mathbf{\\frac{1}{n e}} \\quad (\\text{for n-type, negative})$$\n\n<strong>3. Applications:</strong>\n1. Determines whether a semiconductor is n-type ($R_H < 0$) or p-type ($R_H > 0$).\n2. Measures charge carrier concentration: $n = -\\frac{1}{e R_H}$ and Hall mobility $\\mu_H = |R_H| \\sigma$.\n3. Used in contactless Hall-effect current sensors and magnetic field probes.",
    "examTip": "Specify the sign of Hall coefficient: RH is NEGATIVE for n-type and POSITIVE for p-type semiconductors.",
    "starred": false,
    "mastered": false
  },
  {
    "id": "card-new-309",
    "subjectId": "phys",
    "unit": 4,
    "pyqTag": "\ud83d\udd25 Asked in SEE Feb 2026, CIE-2 \u2022 8 Marks",
    "badgeType": "\ud83e\uddea Reaction / Mechanism",
    "badgeLabel": "BCS Theory",
    "question": "Explain the BCS theory of superconductivity. What are Cooper pairs, and what are the main limitations of BCS theory?",
    "hint": "BCS = Bardeen, Cooper, Schrieffer. Electron-phonon-electron interaction causes attractive pairing of electrons with opposite momentum and spin (Cooper pairs).",
    "answer": "<strong>1. BCS Theory Mechanism:</strong>\nProposed by John Bardeen, Leon Cooper, and John Robert Schrieffer (1957), BCS theory explains low-temperature superconductivity via an <strong>electron-phonon-electron interaction</strong>:\n1. As an electron moves through a positive cation lattice, its negative charge attracts surrounding positive lattice ions, creating a localized high-density positive polarization ripple (lattice distortion / virtual phonon).\n2. Before the lattice relaxes, a second electron with opposite spin and momentum is attracted to this positive deformation.\n3. This creates a net attractive force between the two electrons mediated by the lattice vibration (phonon).\n\n<strong>2. Cooper Pairs:</strong>\n\u2022 The coupled electron pair is termed a <strong>Cooper Pair</strong>: $(k\\uparrow, -k\\downarrow)$.\n\u2022 Cooper pairs behave as composite bosons with integer spin (0), condensing into a macroscopic coherent ground state protected by an energy gap $E_g = 3.52 k_B T_c$ at $0\\text{ K}$.\n\u2022 Because scattering requires breaking this pairing gap, electrons flow with <strong>absolute zero electrical resistance</strong>!\n\n<strong>3. Limitations of BCS Theory:</strong>\n1. <strong>Fails for High-Temperature Superconductors (HTS):</strong> Cannot explain cuprate ceramics ($YBa_2Cu_3O_{7-x}$) with $T_c > 90\\text{ K}$ (above the theoretical BCS limit $\\sim 30 - 40\\text{ K}$).\n2. <strong>Requires Weak Electron-Phonon Coupling:</strong> Inaccurate for heavy-fermion systems and iron-based pnictide superconductors.",
    "examTip": "State the BCS energy gap formula at 0 K: Eg(0) = 3.52 * k_B * Tc.",
    "starred": false,
    "mastered": false
  },
  {
    "id": "card-new-310",
    "subjectId": "phys",
    "unit": 4,
    "pyqTag": "\ud83d\udd25 Asked in SEE Feb 2026 \u2022 8 Marks",
    "badgeType": "\ud83d\udcd0 Derivation / Formula",
    "badgeLabel": "Silsbee Effect",
    "question": "What is Silsbee's effect? Derive an expression for the critical current in a cylindrical superconducting wire of radius r using Ampere's circuital law.",
    "hint": "Silsbee's effect: Superconductivity is destroyed when the magnetic field produced by the transport current itself exceeds Hc. Ic = 2 * pi * r * Hc.",
    "answer": "<strong>1. Silsbee's Effect Statement:</strong>\nSilsbee's hypothesis states that superconductivity in a wire is destroyed whenever the magnetic field generated by the transport current passing through the wire itself exceeds the critical magnetic field $H_c(T)$ of the material at that temperature.\n\n<strong>2. Derivation of Critical Current ($I_c$):</strong>\n\u2022 Consider a cylindrical superconducting wire of radius $r$ carrying an electric transport current $I$.\n\u2022 By symmetry, the magnetic field is circular and concentric with the wire axis.\n\u2022 According to <strong>Amp\u00e8re's Circuital Law</strong>, the line integral of magnetic field $H$ around a closed circular path of radius $r$ on the wire surface is:\n  $$\\oint \\vec{H} \\cdot d\\vec{l} = I_{\\text{enclosed}}$$\n  $$H \\cdot (2\\pi r) = I \\implies H = \\frac{I}{2\\pi r}$$\n\u2022 The maximum magnetic field occurs at the outer surface ($r$). When this surface field reaches the critical field value $H_c$:\n  $$H_c = \\frac{I_c}{2\\pi r}$$\n\u2022 <strong>Final Critical Current Formula:</strong>\n  $$\\mathbf{I_c = 2\\pi r H_c}$$\n\n<strong>3. Temperature Dependence:</strong>\nSubstituting $H_c(T) = H_c(0) \\left[ 1 - \\left(\\frac{T}{T_c}\\right)^2 \\right]$:\n$$I_c(T) = 2\\pi r H_c(0) \\left[ 1 - \\left(\\frac{T}{T_c}\\right)^2 \\right]$$",
    "examTip": "Surface field H is highest at the outer boundary radius r, which is why destruction starts at the surface.",
    "starred": false,
    "mastered": false
  },
  {
    "id": "card-new-311",
    "subjectId": "phys",
    "unit": 4,
    "pyqTag": "\ud83d\udd25 Asked in SEE Feb 2026, CIE-2 \u2022 7 Marks",
    "badgeType": "\ud83e\uddea Reaction / Mechanism",
    "badgeLabel": "DC SQUID",
    "question": "What is the Josephson Effect? Explain the construction and working of a DC SQUID (Superconducting Quantum Interference Device).",
    "hint": "Josephson junction = Superconductor-Insulator-Superconductor (SIS). DC SQUID has two junctions in a superconducting loop, detecting magnetic flux quanta Phi_0 = h/(2e).",
    "answer": "<strong>1. Josephson Effects:</strong>\n\u2022 <strong>DC Josephson Effect:</strong> Cooper pairs tunnel across a thin insulating barrier ($1 - 2\\text{ nm}$) between two superconductors without any applied voltage, producing a zero-resistance supercurrent $I = I_c \\sin\\phi$.\n\u2022 <strong>AC Josephson Effect:</strong> Applying a DC voltage $V$ causes the phase to evolve linearly, generating a high-frequency AC oscillation: $\\nu = \\frac{2eV}{h} \\approx 483.6\\text{ MHz/}\\mu\\text{V}$.\n\n<strong>2. Construction of DC SQUID:</strong>\n\u2022 A DC SQUID consists of a superconducting ring containing <strong>two Josephson junctions ($J_1, J_2$)</strong> connected in parallel.\n\u2022 A constant bias current $I_{\\text{bias}} > 2I_c$ is fed into the ring.\n\n<strong>3. Working & Quantum Interference:</strong>\n\u2022 When an external magnetic field threads through the superconducting loop, it induces a circulating screening current.\n\u2022 The macroscopic quantum phase difference shifts around the loop, causing quantum interference between the two tunneling paths.\n\u2022 The total critical current oscillates periodically as a function of external magnetic flux $\\Phi$ with period equal to the magnetic flux quantum:\n  $$\\mathbf{\\Phi_0 = \\frac{h}{2e} \\approx 2.0678 \\times 10^{-15}\\text{ Wb (Tesla}\\cdot\\text{m}^2\\text{)}}$$\n\u2022 By counting voltage oscillations, a SQUID detects magnetic fields as weak as $10^{-15}\\text{ Tesla}$ ($1\\text{ fT}$), used in magnetoencephalography (MEG brain imaging) and gravitational wave detectors.",
    "examTip": "State the exact value of the magnetic flux quantum: Phi_0 = h/(2e) = 2.07 x 10^-15 Wb.",
    "starred": false,
    "mastered": false
  },
  {
    "id": "card-new-312",
    "subjectId": "phys",
    "unit": 5,
    "pyqTag": "\ud83d\udd25 Asked in SEE Feb 2026 \u2022 8 Marks",
    "badgeType": "\ud83d\udcd0 Derivation / Formula",
    "badgeLabel": "Qubit & Bloch Sphere",
    "question": "What is a qubit? Explain how the Bloch Sphere is used for the geometric representation of quantum states. Give the normalization condition.",
    "hint": "Classical bit is 0 or 1; Qubit is |psi> = cos(theta/2)|0> + e^(i phi) sin(theta/2)|1>. Normalized: |alpha|^2 + |beta|^2 = 1. Angles theta in [0, pi], phi in [0, 2pi].",
    "answer": "<strong>1. Definition of a Qubit:</strong>\nA quantum bit (qubit) is the fundamental unit of quantum information. Unlike a classical bit which is strictly 0 or 1, a qubit exists in a coherent linear superposition of both basis states $|0\\rangle$ and $|1\\rangle$:\n$$|\\psi\\rangle = \\alpha |0\\rangle + \\beta |1\\rangle \\quad (\\alpha, \\beta \\in \\mathbb{C})$$\n\u2022 <strong>Normalization Condition:</strong> The total measurement probability must equal unity:\n  $$\\mathbf{|\\alpha|^2 + |\\beta|^2 = 1}$$\n  where $|\\alpha|^2$ is the probability of measuring state $|0\\rangle$, and $|\\beta|^2$ is the probability of measuring state $|1\\rangle$.\n\n<strong>2. The Bloch Sphere Geometric Representation:</strong>\n\u2022 Any normalized single-qubit state can be parameterized on a 3D unit sphere (Bloch Sphere) as:\n  $$\\mathbf{|\\psi\\rangle = \\cos\\left(\\frac{\\theta}{2}\\right) |0\\rangle + e^{i \\phi} \\sin\\left(\\frac{\\theta}{2}\\right) |1\\rangle}$$\n  where:\n  - $\\theta \\in [0, \\pi]$ is the polar angle (colatitude).\n  - $\\phi \\in [0, 2\\pi)$ is the azimuthal phase angle.\n\u2022 <strong>Key Bloch Points:</strong>\n  - North Pole ($\\theta = 0$): Basis state $|0\\rangle$.\n  - South Pole ($\\theta = \\pi$): Basis state $|1\\rangle$.\n  - Equator ($\\theta = \\pi/2, \\phi = 0$): Equal superposition $|+\\rangle = \\frac{|0\\rangle + |1\\rangle}{\\sqrt{2}}$.\n  - Equator ($\\theta = \\pi/2, \\phi = \\pi$): Equal superposition $|-\\rangle = \\frac{|0\\rangle - |1\\rangle}{\\sqrt{2}}$.",
    "examTip": "Bloch Sphere parameters: theta/2 for latitude and e^(i*phi) for relative quantum phase.",
    "starred": false,
    "mastered": false
  },
  {
    "id": "card-new-313",
    "subjectId": "phys",
    "unit": 5,
    "pyqTag": "\ud83d\udd25 Asked in SEE Feb 2026 \u2022 7 Marks",
    "badgeType": "\ud83d\udcd0 Derivation / Formula",
    "badgeLabel": "Quantum Logic Gates",
    "question": "Describe the actions and matrix representations of the Pauli-X, Pauli-Y, Phase-S, and Hadamard (H) quantum logic gates.",
    "hint": "Pauli-X = [[0,1],[1,0]] (NOT); Pauli-Y = [[0,-i],[i,0]]; Phase-S = [[1,0],[0,i]]; Hadamard = (1/sqrt(2))[[1,1],[1,-1]].",
    "answer": "<strong>1. Quantum Gate Matrix Representations:</strong>\nAll single-qubit quantum logic gates are represented by $2 \\times 2$ Unitary matrices ($U^\\dagger U = I$):\n\n\u2022 <strong>Pauli-X Gate (Quantum NOT Gate):</strong>\n  $$X = \\begin{bmatrix} 0 & 1 \\\\ 1 & 0 \\end{bmatrix} \\implies X|0\\rangle = |1\\rangle, \\quad X|1\\rangle = |0\\rangle$$\n  Flips the state around the $x$-axis on the Bloch sphere.\n\n\u2022 <strong>Pauli-Y Gate:</strong>\n  $$Y = \\begin{bmatrix} 0 & -i \\\\ i & 0 \\end{bmatrix} \\implies Y|0\\rangle = i|1\\rangle, \\quad Y|1\\rangle = -i|0\\rangle$$\n\n\u2022 <strong>Phase-S Gate ($\\pi/2$ Phase Shift Gate):</strong>\n  $$S = \\begin{bmatrix} 1 & 0 \\\\ 0 & i \\end{bmatrix} \\implies S|0\\rangle = |0\\rangle, \\quad S|1\\rangle = i|1\\rangle$$\n  (Note: $S^2 = Z$, so $S = \\sqrt{Z}$).\n\n\u2022 <strong>Hadamard (H) Gate:</strong>\n  $$H = \\frac{1}{\\sqrt{2}} \\begin{bmatrix} 1 & 1 \\\\ 1 & -1 \\end{bmatrix}$$\n  Creates an equal superposition from computational basis states:\n  $$H|0\\rangle = \\frac{|0\\rangle + |1\\rangle}{\\sqrt{2}} = |+\\rangle, \\quad H|1\\rangle = \\frac{|0\\rangle - |1\\rangle}{\\sqrt{2}} = |-\\rangle$$",
    "examTip": "Mention that Hadamard is its own inverse: H\u00b2 = I. Applying H twice restores the original basis state.",
    "starred": false,
    "mastered": false
  },
  {
    "id": "card-new-314",
    "subjectId": "pyprog",
    "unit": 1,
    "pyqTag": "\ud83d\udd25 Asked in SEE July 2026 \u2022 5 Marks",
    "badgeType": "\u26a1 Exception / Trap",
    "badgeLabel": "Python Errors",
    "question": "Differentiate between Syntax errors, Runtime errors, and Semantic errors in Python with brief code examples for each.",
    "hint": "Syntax error: code violates language grammar (caught before run). Runtime error: occurs during execution (division by zero). Semantic error: program runs but logic is flawed.",
    "answer": "<strong>1. Three Types of Python Errors:</strong>\n\u2022 <strong>1. Syntax Errors (Parsing Errors):</strong>\n  - The code violates Python's grammatical syntax rules. Detected by the parser before execution begins.\n  - <em>Example:</em> \\`if x == 5\\` (missing colon \\`:\\`).\n\u2022 <strong>2. Runtime Errors (Exceptions):</strong>\n  - The syntax is valid, but an invalid operation occurs while the program is actively executing, terminating execution.\n  - <em>Example:</em> \\`x = 10 / 0\\` (\\`ZeroDivisionError\\`) or \\`int(\"hello\")\\` (\\`ValueError\\`).\n\u2022 <strong>3. Semantic (Logic) Errors:</strong>\n  - The program runs to completion without any syntax error or crash, but produces the **WRONG output** due to flawed programmer logic.\n  - <em>Example:</em> Writing \\`average = a + b / 2\\` instead of \\`average = (a + b) / 2\\`.",
    "examTip": "Clearly contrast: Syntax error stops before running; Runtime crashes while running; Semantic runs but gives wrong answer.",
    "starred": false,
    "mastered": false
  },
  {
    "id": "card-new-315",
    "subjectId": "pyprog",
    "unit": 1,
    "pyqTag": "\ud83d\udd25 Asked in SEE July 2026 \u2022 7 Marks",
    "badgeType": "\ud83d\udd22 Numerical Pattern",
    "badgeLabel": "Precedence & Loops",
    "question": "Evaluate the Python expression step-by-step: a = 10 + 5 * 2 ** 3 / 4 - 6. Write a Python program using nested loops to print a 2D multiplication table from 1 to 10.",
    "hint": "Python precedence: ** (exponent) > * / (multiplication/division) > + - (addition/subtraction).",
    "answer": "<strong>1. Step-by-Step Expression Evaluation:</strong>\nGiven: \\`a = 10 + 5 * 2 ** 3 / 4 - 6\\`\n1. Exponentiation (\\`**\\`) has highest precedence:\n   $2 ** 3 = 8$. Expression: \\`10 + 5 * 8 / 4 - 6\\`.\n2. Multiplication (\\`*\\`) and Division (\\`/\\`) evaluated left-to-right:\n   $5 * 8 = 40$.\n   $40 / 4 = 10.0$ (floating point division in Python 3). Expression: \\`10 + 10.0 - 6\\`.\n3. Addition (\\`+\\`) and Subtraction (\\`-\\`) evaluated left-to-right:\n   $10 + 10.0 = 20.0$.\n   $20.0 - 6 = 14.0$.\n\u2022 <strong>Final Output:</strong> $\\mathbf{a = 14.0}$ (float).\n\n<strong>2. 2D Multiplication Table Program:</strong>\n<pre class=\"bg-slate-900 text-slate-100 p-3 rounded-lg overflow-x-auto\"><code># Print 2D multiplication table 1 to 10\nfor i in range(1, 11):\n    for j in range(1, 11):\n        print(f\"{i * j:4d}\", end=\"\")\n    print()  # newline</code></pre>",
    "examTip": "Notice that division / in Python 3 always yields a float (14.0, not integer 14).",
    "starred": false,
    "mastered": false
  },
  {
    "id": "card-new-316",
    "subjectId": "pyprog",
    "unit": 2,
    "pyqTag": "\ud83d\udd25 Asked in SEE July 2026 \u2022 6 Marks",
    "badgeType": "\u26a1 Exception / Trap",
    "badgeLabel": "Tuples vs Lists",
    "question": "Explain why Tuples are immutable in Python with code examples. List three major differences between a Tuple and a List.",
    "hint": "Tuples cannot be modified in place after creation (no append/pop). Immutable objects are hashable and can be dictionary keys.",
    "answer": "<strong>1. Why Tuples are Immutable:</strong>\nOnce a tuple is allocated in memory, its element references cannot be added, deleted, or reassigned:\n<pre class=\"bg-slate-900 text-slate-100 p-3 rounded-lg overflow-x-auto\"><code>t = (1, 2, 3)\nt[0] = 99  # Raises TypeError: 'tuple' object does not support item assignment</code></pre>\n\n<strong>2. Comparison: Tuple vs. List:</strong>\n<div class=\"overflow-x-auto my-2\">\n<table class=\"w-full text-xs text-left border border-slate-300\">\n<thead class=\"bg-slate-100\"><tr><th class=\"p-1 border\">Feature</th><th class=\"p-1 border\">Tuple \\`(1, 2)\\`</th><th class=\"p-1 border\">List \\`[1, 2]\\`</th></tr></thead>\n<tbody>\n<tr><td class=\"p-1 border font-semibold\">Mutability</td><td class=\"p-1 border\">Immutable (read-only)</td><td class=\"p-1 border\">Mutable (can append/insert/remove)</td></tr>\n<tr><td class=\"p-1 border font-semibold\">Memory Overhead</td><td class=\"p-1 border\">Smaller fixed memory footprint</td><td class=\"p-1 border\">Larger (allocates over-allocation buffer for resizing)</td></tr>\n<tr><td class=\"p-1 border font-semibold\">Dictionary Keys</td><td class=\"p-1 border\">Can be used as dict keys (hashable)</td><td class=\"p-1 border\">Cannot be dict keys (\\`TypeError: unhashable\\`)</td></tr>\n<tr><td class=\"p-1 border font-semibold\">Syntax</td><td class=\"p-1 border\">Parentheses \\`(1, 2)\\` or comma \\`1, 2\\`</td><td class=\"p-1 border\">Square brackets \\`[1, 2]\\`</td></tr>\n</tbody>\n</table>\n</div>",
    "examTip": "Highlight that tuples can serve as keys in dictionaries because they are hashable, whereas lists cannot.",
    "starred": false,
    "mastered": false
  },
  {
    "id": "card-new-317",
    "subjectId": "pyprog",
    "unit": 2,
    "pyqTag": "\ud83d\udd25 Asked in SEE July 2026 \u2022 8 Marks",
    "badgeType": "\ud83d\udcd0 Derivation / Formula",
    "badgeLabel": "Python File I/O",
    "question": "Write a Python program to read the content of a text file line-by-line, sort the lines alphabetically by their first letter, and write the sorted lines into a new text file.",
    "hint": "Use with open('input.txt', 'r') as f:, lines = f.readlines(), lines.sort(key=lambda s: s.strip().lower()), write to output.txt.",
    "answer": "<strong>Python File Line Sorting Program:</strong>\n<pre class=\"bg-slate-900 text-slate-100 p-3 rounded-lg overflow-x-auto\"><code>def sort_file_lines(input_path, output_path):\n    try:\n        # Read lines using context manager\n        with open(input_path, 'r', encoding='utf-8') as fin:\n            lines = fin.readlines()\n\n        # Sort lines by first alphabetical character\n        sorted_lines = sorted(lines, key=lambda line: line.strip().lower())\n\n        # Write sorted lines to target file\n        with open(output_path, 'w', encoding='utf-8') as fout:\n            fout.writelines(sorted_lines)\n\n        print(f\"Successfully sorted {len(sorted_lines)} lines into '{output_path}'.\")\n    except FileNotFoundError:\n        print(f\"Error: The source file '{input_path}' does not exist.\")\n\n# Execution demonstration\nsort_file_lines(\"input.txt\", \"sorted_output.txt\")</code></pre>",
    "examTip": "Use with open(...) context managers so file descriptors are guaranteed to close even if an exception occurs.",
    "starred": false,
    "mastered": false
  },
  {
    "id": "card-new-318",
    "subjectId": "pyprog",
    "unit": 3,
    "pyqTag": "\ud83d\udd25 Asked in SEE July 2026 \u2022 9 Marks",
    "badgeType": "\ud83d\udd22 Numerical Pattern",
    "badgeLabel": "NumPy Masking",
    "question": "Study the NumPy code: arr = np.array([[1, 2, 3], [4, 5, 6]]); result = arr[arr > 3]; new_arr = arr + np.array([10, 20, 30]). State the output of: print(arr.shape), print(result), print(new_arr). Identify where masking and broadcasting occur.",
    "hint": "arr.shape is (2, 3). arr > 3 is a boolean mask returning 1D array [4, 5, 6]. [10, 20, 30] broadcasts across rows.",
    "answer": "<strong>1. Output of the Code:</strong>\n\u2022 <strong>1. \\`print(arr.shape)\\`:</strong>\n  $$\\mathbf{(2, 3)}$$ (2 rows and 3 columns).\n\u2022 <strong>2. \\`print(result)\\`:</strong>\n  $$\\mathbf{[4, 5, 6]}$$\n  (Boolean condition \\`arr > 3\\` produces \\`[[False, False, False], [True, True, True]]\\`. Mask indexing flattens and extracts true elements as a 1D array).\n\u2022 <strong>3. \\`print(new_arr)\\`:</strong>\n  $$\\mathbf{[[11, 22, 33], [14, 25, 36]]}$$\n\n<strong>2. Mechanism Explanations:</strong>\n\u2022 <strong>Boolean Masking:</strong> Occurs at \\`result = arr[arr > 3]\\` where an element-wise logical condition creates a boolean truth array to filter matching values.\n\u2022 <strong>Broadcasting:</strong> Occurs at \\`arr + np.array([10, 20, 30])\\`. The 1D array of shape \\`(3,)\\` has its dimension automatically stretched across the 2 rows of \\`arr\\` of shape \\`(2, 3)\\` without copying memory, performing element-wise addition across each row.",
    "examTip": "State that boolean indexing flattens multidimensional arrays into a 1D array of matching values.",
    "starred": false,
    "mastered": false
  },
  {
    "id": "card-new-319",
    "subjectId": "pyprog",
    "unit": 4,
    "pyqTag": "\ud83d\udd25 Asked in SEE July 2026 \u2022 6 Marks",
    "badgeType": "\u26a1 Exception / Trap",
    "badgeLabel": "Copying in Python",
    "question": "Differentiate between Aliasing, Shallow Copy, and Deep Copy in Python with memory diagrams and code examples.",
    "hint": "Aliasing: b = a (shares same memory reference). Shallow copy: copy.copy(a) (copies outer container, shares nested objects). Deep copy: copy.deepcopy(a) (recursively duplicates everything).",
    "answer": "<strong>1. Three Levels of Object Copying:</strong>\n<div class=\"overflow-x-auto my-2\">\n<table class=\"w-full text-xs text-left border border-slate-300\">\n<thead class=\"bg-slate-100\"><tr><th class=\"p-1 border\">Type</th><th class=\"p-1 border\">Syntax</th><th class=\"p-1 border\">Outer Container</th><th class=\"p-1 border\">Nested Inner Objects</th></tr></thead>\n<tbody>\n<tr><td class=\"p-1 border font-semibold\">Aliasing</td><td class=\"p-1 border\">\\`b = a\\`</td><td class=\"p-1 border\">Shares same reference (\\`id(a) == id(b)\\`)</td><td class=\"p-1 border\">Shared</td></tr>\n<tr><td class=\"p-1 border font-semibold\">Shallow Copy</td><td class=\"p-1 border\">\\`b = copy.copy(a)\\`</td><td class=\"p-1 border\">New object created</td><td class=\"p-1 border\">Shared nested references</td></tr>\n<tr><td class=\"p-1 border font-semibold\">Deep Copy</td><td class=\"p-1 border\">\\`b = copy.deepcopy(a)\\`</td><td class=\"p-1 border\">New object created</td><td class=\"p-1 border\">Completely duplicated recursively</td></tr>\n</tbody>\n</table>\n</div>\n\n<strong>2. Code Demonstration:</strong>\n<pre class=\"bg-slate-900 text-slate-100 p-3 rounded-lg overflow-x-auto\"><code>import copy\n\norig = [[1, 2], [3, 4]]\nshallow = copy.copy(orig)\ndeep = copy.deepcopy(orig)\n\norig[0][0] = 999\nprint(shallow[0][0])  # Prints 999! (Shared inner list)\nprint(deep[0][0])     # Prints 1    (Independent duplicate)</code></pre>",
    "examTip": "Show that modifying orig[0][0] affects the shallow copy but does NOT affect the deep copy.",
    "starred": false,
    "mastered": false
  },
  {
    "id": "card-new-320",
    "subjectId": "pyprog",
    "unit": 5,
    "pyqTag": "\ud83d\udd25 Asked in SEE July 2026 \u2022 8 Marks",
    "badgeType": "\ud83d\udcd0 Derivation / Formula",
    "badgeLabel": "OOP Operator Overload",
    "question": "Define a class Vector with attributes x and y. Overload the + operator (__add__) to add two vectors, and overload the < operator (__lt__) to compare vectors based on magnitude.",
    "hint": "Magnitude is sqrt(x\u00b2 + y\u00b2). __add__(self, other) returns new Vector. __lt__(self, other) compares magnitudes.",
    "answer": "<strong>Vector Class with Operator Overloading:</strong>\n<pre class=\"bg-slate-900 text-slate-100 p-3 rounded-lg overflow-x-auto\"><code>import math\n\nclass Vector:\n    def __init__(self, x=0, y=0):\n        self.x = x\n        self.y = y\n\n    def magnitude(self):\n        return math.sqrt(self.x ** 2 + self.y ** 2)\n\n    # Overload + operator\n    def __add__(self, other):\n        if isinstance(other, Vector):\n            return Vector(self.x + other.x, self.y + other.y)\n        return NotImplemented\n\n    # Overload < operator based on magnitude\n    def __lt__(self, other):\n        if isinstance(other, Vector):\n            return self.magnitude() &lt; other.magnitude()\n        return NotImplemented\n\n    def __repr__(self):\n        return f\"Vector({self.x}, {self.y})\"\n\n# Demonstration\nv1 = Vector(3, 4)   # mag = 5.0\nv2 = Vector(1, 1)   # mag = 1.414\nv3 = v1 + v2        # Vector(4, 5)\n\nprint(\"v1 + v2 =\", v3)\nprint(\"Is v2 < v1?:\", v2 &lt; v1)  # True</code></pre>",
    "examTip": "Define __repr__ so printing vector objects renders human-readable Vector(x, y) rather than memory addresses.",
    "starred": false,
    "mastered": false
  },
  {
    "id": "card-new-321",
    "subjectId": "pyprog",
    "unit": 5,
    "pyqTag": "\ud83d\udd25 Asked in SEE July 2026 \u2022 8 Marks",
    "badgeType": "\u26a1 Exception / Trap",
    "badgeLabel": "Exception Handling",
    "question": "Explain Python's Exception Handling mechanism. Write a program demonstrating try, except, else, and finally blocks to handle invalid inputs and division by zero.",
    "hint": "try: guarded code; except ExceptionType: error handler; else: runs only if no exception; finally: always runs (cleanup).",
    "answer": "<strong>1. Structure of Exception Handling in Python:</strong>\n\u2022 \\`try\\`: Encloses risky code that might throw an exception.\n\u2022 \\`except ExceptionType\\` as e: Catches and resolves specific runtime errors.\n\u2022 \\`else\\`: Executes strictly if the \\`try\\` block executed with **zero exceptions**.\n\u2022 \\`finally\\`: Executes unconditionally, even if unhandled exceptions occur (used for releasing files/sockets).\n\n<strong>2. Comprehensive Program:</strong>\n<pre class=\"bg-slate-900 text-slate-100 p-3 rounded-lg overflow-x-auto\"><code>def safe_divide():\n    try:\n        a = float(input(\"Enter numerator: \"))\n        b = float(input(\"Enter denominator: \"))\n        res = a / b\n    except ValueError:\n        print(\"Error: Input must be a valid numeric number!\")\n    except ZeroDivisionError:\n        print(\"Error: Division by zero is mathematically undefined!\")\n    else:\n        print(f\"Success! Result = {res:.4f}\")\n    finally:\n        print(\"Cleanup: Operation block execution complete.\\n\")\n\nsafe_divide()</code></pre>",
    "examTip": "Mention that the 'else' block executes only when NO exception was raised in the try block.",
    "starred": false,
    "mastered": false
  },
  {
    "id": "card-new-322",
    "subjectId": "kan",
    "unit": 1,
    "pyqTag": "\ud83d\udd25 Asked in SEE Feb 2026 \u2022 8 Marks",
    "badgeType": "\ud83d\udcd0 Derivation / Formula",
    "badgeLabel": "Self-Introduction",
    "question": "Write a brief introduction about yourself in eight sentences in Kannada using English letters.",
    "hint": "Key sentences: Nanna hesaru ..., Naanu ... inda bandiddene, Naanu Ramaiah college alli engineering oduttiddene.",
    "answer": "<strong>Self-Introduction in Kannada (English Letters):</strong>\n1. <em>Nanna hesaru Rahul.</em> (My name is Rahul.)\n2. <em>Naanu Bengalurina vaasi.</em> (I am a resident of Bengaluru.)\n3. <em>Naanu Ramaiah engineering college nalli modalane varsha oduttiddene.</em> (I am studying in first year at Ramaiah Engineering College.)\n4. <em>Nanna vibhaaga Electronics and Communication (ECE).</em> (My department is Electronics and Communication.)\n5. <em>Nanna thandeya hesaru Suresh, avaru udyogi.</em> (My father's name is Suresh, he is a businessman.)\n6. <em>Nanna thaayiya hesaru Geetha, avaru maneyalliddare.</em> (My mother's name is Geetha, she is a homemaker.)\n7. <em>Nanage cricket aaDuvudu mattu pustaka ooduvudu tumbaa ishTa.</em> (I like playing cricket and reading books very much.)\n8. <em>Naanu obba uttama software engineer aagalu bayasuttene.</em> (I aspire to become a good software engineer.)",
    "examTip": "Write full grammatical sentences with English equivalents alongside to earn maximum marks.",
    "starred": false,
    "mastered": false
  },
  {
    "id": "card-new-323",
    "subjectId": "kan",
    "unit": 1,
    "pyqTag": "\ud83d\udd25 Asked in SEE Feb 2026 \u2022 8 Marks",
    "badgeType": "\ud83d\udcd0 Derivation / Formula",
    "badgeLabel": "Famous Places",
    "question": "Write any eight famous places of Karnataka and their specialty in Kannada using English letters.",
    "hint": "Mysuru (Aramane/Palace), Hampi (Itihasika sthala), Bengaluru (Silicon City), Mangaluru (Kadalathira), Jog Falls, Belagavi, Madikeri, Badami.",
    "answer": "<strong>Eight Famous Places in Karnataka:</strong>\n1. <strong>Mysuru:</strong> <em>Sundaravada Aramanege (Palace) mattu Dasara habbakke prassiddha.</em> (Famous for its grand palace and Dasara festival.)\n2. <strong>Hampi:</strong> <em>Vijayanagara saamrajyada aitihasika shilpakalege hesarvaasi.</em> (World famous for historical ruins and Vijayanagara architecture.)\n3. <strong>Bengaluru:</strong> <em>Bhaaratada IT capital mattu Udyanavana Nagara (Garden City).</em> (IT capital of India and Garden City.)\n4. <strong>Jog Falls (Shimoga):</strong> <em>Bhaaratada atyanta ettharavada jalapaatha (Sharavathi nadi).</em> (One of India's highest waterfalls on Sharavathi river.)\n5. <strong>Mangaluru:</strong> <em>Sundaravada samudra theera (beaches) mattu devasthanagalu.</em> (Famous for coastal beaches and temples.)\n6. <strong>Madikeri (Coorg):</strong> <em>Kaafi thotagalu mattu thampada havamaana (Scotland of India).</em> (Famous for lush coffee estates and pleasant weather.)\n7. <strong>Badami:</strong> <em>Chalukya raajara aitihasika guhaa devasthanagalu.</em> (Historic cave temples carved by Chalukya kings.)\n8. <strong>Belagavi:</strong> <em>Suvarna Vidhana Soudha mattu aitihasika kote.</em> (Known for Suvarna Vidhana Soudha and historic fort.)",
    "examTip": "Include the district or specialty for each place to score full 8/8 marks.",
    "starred": false,
    "mastered": false
  },
  {
    "id": "card-new-324",
    "subjectId": "kan",
    "unit": 2,
    "pyqTag": "\ud83d\udd25 Asked in SEE Feb 2026, CIE-2 \u2022 8 Marks",
    "badgeType": "\u26a1 Exception / Trap",
    "badgeLabel": "Word Rearranging",
    "question": "Rearrange the scrambled words to form meaningful Kannada sentences: (i) horaDuttene namma saayankaala bengalurininDa uurlige naanu, (ii) sulalita sulabha mattu bhaashe kannada, (iii) mane namma doDDa mahavidyalaya tumbha ide hattira.",
    "hint": "Subject-Object-Verb (SOV) structure: Naanu saayankaala bengalurininDa namma uurlige horaDuttene.",
    "answer": "<strong>Rearranged Grammatical Sentences:</strong>\n\u2022 <strong>(i) Given:</strong> <em>horaDuttene namma saayankaala bengalurininDa uurlige naanu</em>\n  $$\\mathbf{\\text{Naanu saayankaala namma uurlige bengalurininDa horaDuttene.}}$$\n  (Meaning: I am departing from Bengaluru to our hometown this evening.)\n\n\u2022 <strong>(ii) Given:</strong> <em>sulalita sulabha mattu bhaashe kannada</em>\n  $$\\mathbf{\\text{Kannada bhaashe sulabha mattu sulalita.}}$$\n  (Meaning: Kannada language is simple and melodious.)\n\n\u2022 <strong>(iii) Given:</strong> <em>mane namma doDDa mahavidyalaya tumbha ide hattira</em>\n  $$\\mathbf{\\text{Namma mane doDDa mahavidyalayada tumbha hattira ide.}}$$\n  (Meaning: Our house is very close to the large college.)\n\n\u2022 <strong>(iv) Given:</strong> <em>baNNa yaavudu nimage ishTavaada</em>\n  $$\\mathbf{\\text{Nimage ishTavaada baNNa yaavudu?}}$$\n  (Meaning: Which is your favorite color?)",
    "examTip": "Kannada follows Subject-Object-Verb (SOV) sentence order. Verbs (e.g. horaDuttene, ide) almost always come at the very END.",
    "starred": false,
    "mastered": false
  },
  {
    "id": "card-new-325",
    "subjectId": "kan",
    "unit": 3,
    "pyqTag": "\ud83d\udd25 Asked in SEE Feb 2026 \u2022 8 Marks",
    "badgeType": "\ud83d\udcd0 Derivation / Formula",
    "badgeLabel": "Adjectives & Sentences",
    "question": "Write eight Kannada adjectives with their English equivalents and frame a simple conversational sentence for each using English letters.",
    "hint": "Adjectives: doDDa (big), chikka (small), hosa (new), haleya (old), sundara (beautiful), sihi (sweet), olleya (good), kempu (red).",
    "answer": "<strong>Eight Kannada Adjectives & Sentences:</strong>\n1. <strong>doDDa (Big / Large):</strong>\n   \u2022 <em>Idu tumbaa doDDa shaale.</em> (This is a very big school.)\n2. <strong>chikka (Small):</strong>\n   \u2022 <em>Avaradu chikka mane.</em> (Theirs is a small house.)\n3. <strong>hosa (New):</strong>\n   \u2022 <em>Naanu hosa mobile kharidisi-ddene.</em> (I bought a new mobile phone.)\n4. <strong>haleya (Old):</strong>\n   \u2022 <em>Idu haleya pustaka.</em> (This is an old book.)\n5. <strong>sundara (Beautiful):</strong>\n   \u2022 <em>Bengaluru sundaravada nagara.</em> (Bengaluru is a beautiful city.)\n6. <strong>olleya (Good):</strong>\n   \u2022 <em>Avanu tumbaa olleya snehita.</em> (He is a very good friend.)\n7. <strong>sihi (Sweet):</strong>\n   \u2022 <em>Ee maavina haNNu tumbaa sihi.</em> (This mango fruit is very sweet.)\n8. <strong>sulabha (Easy / Simple):</strong>\n   \u2022 <em>Kannada kaliyuvudu tumbaa sulabha.</em> (Learning Kannada is very easy.)",
    "examTip": "State both the Kannada word, its English meaning in parentheses, and the framed sentence.",
    "starred": false,
    "mastered": false
  },
  {
    "id": "card-new-326",
    "subjectId": "kan",
    "unit": 4,
    "pyqTag": "\ud83d\udd25 Asked in SEE Feb 2026 \u2022 8 Marks",
    "badgeType": "\ud83d\udd22 Numerical Pattern",
    "badgeLabel": "Kannada Numbers",
    "question": "Write the names of the following numbers in Kannada using English letters: 42, 54, 89, 97, 108, 126, 175, 192.",
    "hint": "42=nalavattaraDu, 54=aivattnaalku, 89=embattombattu, 97=tombattELu, 108=nUtrenTu, 126=nUtra ippattAru, 175=nUtra eppattaidu, 192=nUtra tombatteraDu.",
    "answer": "<strong>Number Names in Kannada (English Letters):</strong>\n\u2022 <strong>42:</strong> <em>Nalavatt-eraDu</em> (NalavatteraDu)\n\u2022 <strong>54:</strong> <em>Aivatt-naalku</em> (Aivattnaalku)\n\u2022 <strong>89:</strong> <em>Embatt-ombattu</em> (Embattombattu)\n\u2022 <strong>97:</strong> <em>Tombatt-eeLu</em> (TombatteeLu)\n\u2022 <strong>108:</strong> <em>NUtra-enTu</em> (NUtrenTu)\n\u2022 <strong>126:</strong> <em>NUtra-ippattAru</em> (NUtra ippattaaru)\n\u2022 <strong>175:</strong> <em>NUtra-eppattaidu</em> (NUtra eppattaidu)\n\u2022 <strong>192:</strong> <em>NUtra-tombatteraDu</em> (NUtra tombatteraDu)",
    "examTip": "Practice number prefixes: 40s = Nalavattu, 50s = Aivattu, 80s = Embattu, 90s = Tombattu, 100s = NUtra.",
    "starred": false,
    "mastered": false
  },
  {
    "id": "card-new-327",
    "subjectId": "kan",
    "unit": 4,
    "pyqTag": "\ud83d\udd25 Asked in SEE Feb 2026 \u2022 8 Marks",
    "badgeType": "\ud83d\udcd0 Derivation / Formula",
    "badgeLabel": "Fruits and Vegetables",
    "question": "Write eight fruits and eight vegetables names in Kannada using English letters and frame two sentences using them.",
    "hint": "Fruits: Seebu, BaaLehaNNu, Drakshi, Maavina haNNu, Ananas. Vegetables: AalugaDDe, EeruLLi, Bende kaayi, Tomato.",
    "answer": "<strong>1. Eight Fruits (HaNNugalu):</strong>\n1. <em>Seebu</em> \u2014 Apple\n2. <em>BaaLehaNNu</em> \u2014 Banana\n3. <em>Maavina haNNu</em> \u2014 Mango\n4. <em>Draakshi</em> \u2014 Grapes\n5. <em>Kittale</em> \u2014 Orange\n6. <em>Ananas</em> \u2014 Pineapple\n7. <em>KallangaDi</em> \u2014 Watermelon\n8. <em>Daalimbe</em> \u2014 Pomegranate\n\n<strong>2. Eight Vegetables (Tarakaarigalu):</strong>\n1. <em>AalugaDDe</em> \u2014 Potato\n2. <em>EeruLLi</em> \u2014 Onion\n3. <em>BenDekaayi</em> \u2014 Ladyfinger / Okra\n4. <em>BadaNekaayi</em> \u2014 Brinjal / Eggplant\n5. <em>KumbLakaayi</em> \u2014 Pumpkin\n6. <em>HuraLikaayi</em> \u2014 Beans\n7. <em>BassaLe soppu</em> \u2014 Spinach / Greens\n8. <em>Mullangi</em> \u2014 Radish\n\n<strong>3. Example Sentences:</strong>\n\u2022 <em>Nanage maavina haNNu tumbaa ishTa.</em> (I like mango fruit very much.)\n\u2022 <em>Ammaru tarakaari maarukatteyinda eeruLLi thandaru.</em> (Mother brought onions from the vegetable market.)",
    "examTip": "Separate your answer clearly into Fruits (HaNNugalu) and Vegetables (Tarakaarigalu).",
    "starred": false,
    "mastered": false
  },
  {
    "id": "card-new-328",
    "subjectId": "kan",
    "unit": 5,
    "pyqTag": "\ud83d\udd25 Asked in SEE Feb 2026 \u2022 8 Marks",
    "badgeType": "\ud83d\udcd0 Derivation / Formula",
    "badgeLabel": "Kannada Alphabet",
    "question": "Explain the structure of the Kannada Alphabet (Kannada Varnamale). State the classification into Swaragalu, Yogavahakagalu, and Vyanjanagalu.",
    "hint": "Total 49 letters in Kannada Varnamale: 13 Swaragalu (Hrasva & Deergha), 2 Yogavahakagalu (Anuswara, Visarga), 34 Vyanjanagalu (Vargeeya & Avargeeya).",
    "answer": "<strong>1. Total Letters in Kannada Varnamale:</strong>\nThe classical Kannada alphabet consists of exactly <strong>49 letters (Aksharagalu)</strong> categorized into three groups:\n\n<strong>2. Three Main Classifications:</strong>\n\u2022 <strong>1. Swaragalu (Vowels \u2014 13 Letters):</strong>\n  Letters that can be pronounced independently:\n  - <em>Hrasva Swaragalu (Short Vowels \u2014 1 matra time, 6 letters):</em> a, i, u, ru, e, o\n  - <em>Deergha Swaragalu (Long Vowels \u2014 2 matra times, 7 letters):</em> aa, ee, oo, ae, ai, o, au\n\u2022 <strong>2. Yogavahakagalu (Two Letters):</strong>\n  Letters pronounced only in association with a vowel:\n  - <em>Anuswara:</em> am (\u0c82)\n  - <em>Visarga:</em> aha (\u0c83)\n\u2022 <strong>3. Vyanjanagalu (Consonants \u2014 34 Letters):</strong>\n  Pronounced with the assistance of vowels ($k + a = ka$):\n  - <em>Vargeeya Vyanjanagalu (Grouped Consonants \u2014 25 letters):</em> Organized in 5 vargas (ka, cha, Ta, tha, pa) covering Alpapraana, Mahapraana, and Anunasika.\n  - <em>Avargeeya Vyanjanagalu (Ungrouped Consonants \u2014 9 letters):</em> ya, ra, la, va, sha, Sha, sa, ha, La.",
    "examTip": "State the exact count: 49 total letters (13 Vowels + 2 Yogavahakas + 34 Consonants).",
    "starred": false,
    "mastered": false
  },
  {
    "id": "card-extra-350",
    "subjectId": "phys",
    "unit": 1,
    "pyqTag": "\ud83c\udfaf Practice Question \u2022 High Probability",
    "badgeType": "\ud83e\uddea Reaction / Mechanism",
    "badgeLabel": "Semiconductor Laser",
    "question": "Explain the principle, construction, and working of a Gallium Arsenide (GaAs) Semiconductor Diode Laser. Derive the expression for the threshold wavelength of emission.",
    "hint": "Direct bandgap p-n junction under heavy forward bias injection. Recombination of electron-hole pairs across Eg emits coherent photons with lambda = hc / Eg.",
    "answer": "<strong>1. Principle of Semiconductor Laser:</strong>\nA semiconductor laser relies on <strong>stimulated recombination</strong> of electron-hole pairs across the direct bandgap ($E_g$) of a heavily doped $p\\text{-}n$ junction diode under strong forward bias.\n\n<strong>2. Construction (GaAs Laser):</strong>\n\u2022 <strong>Material:</strong> Gallium Arsenide ($GaAs$), a direct bandgap semiconductor with $E_g \\approx 1.44\\text{ eV}$ at $300\\text{ K}$.\n\u2022 <strong>Doping:</strong> Both $p$ and $n$ regions are degenerate (heavily doped with $\\sim 10^{18} - 10^{19}\\text{ cm}^{-3}$). Fermi levels lie inside the conduction and valence bands respectively.\n\u2022 <strong>Resonator Cavity:</strong> Opposite front and rear junction faces are cleaved and optically polished parallel along crystal planes to act as optical resonator mirrors without external mirrors.\n\n<strong>3. Working & Lasing Action:</strong>\n1. <strong>Forward Bias Injection:</strong> When a high forward bias voltage ($V \\ge E_g/e$) is applied, large concentrations of electrons are injected into the conduction band and holes into the valence band of the narrow depletion transition region ($\\sim 0.1\\,\\mu\\text{m}$).\n2. <strong>Population Inversion:</strong> A high-density inverted carrier population is established in the active depletion layer.\n3. <strong>Stimulated Emission & Threshold:</strong> Spontaneous recombination emits photons of energy $h\\nu \\approx E_g$. These photons travel back and forth within the junction plane, stimulating further identical recombinations.\n4. <strong>Emission Wavelength:</strong>\n   $$h\\nu = \\frac{hc}{\\lambda} = E_g \\implies \\mathbf{\\lambda = \\frac{hc}{E_g} = \\frac{1.24\\,\\mu\\text{m}}{E_g\\text{ (in eV)}}}$$\n   For GaAs ($E_g = 1.44\\text{ eV}$), $\\lambda \\approx 840 - 900\\text{ nm}$ (infrared).",
    "examTip": "Explain why Silicon (indirect bandgap) cannot be used: indirect recombination requires a phonon (lattice vibration), wasting energy as heat rather than light.",
    "starred": false,
    "mastered": false
  },
  {
    "id": "card-extra-351",
    "subjectId": "phys",
    "unit": 1,
    "pyqTag": "\ud83c\udfaf Practice Question \u2022 High Probability",
    "badgeType": "\ud83d\udcd0 Derivation / Formula",
    "badgeLabel": "Fiber Attenuation",
    "question": "Discuss the various attenuation and transmission loss mechanisms in optical fibers. Define the attenuation coefficient alpha in dB/km.",
    "hint": "Alpha = (10/L) * log10(P_in / P_out). Losses: Material absorption (intrinsic electronic & extrinsic OH- ions), Rayleigh scattering (~1/lambda^4), and Bending losses.",
    "answer": "<strong>1. Definition of Attenuation Coefficient ($\\alpha$):</strong>\nAttenuation measures the loss of optical power as light pulses propagate along an optical fiber:\n$$\\mathbf{\\alpha = \\frac{10}{L} \\log_{10}\\left(\\frac{P_{\\text{in}}}{P_{\\text{out}}}\\right) \\quad [\\text{dB/km}]}$$\nwhere $L$ is fiber length in km, $P_{\\text{in}}$ is input optical power, and $P_{\\text{out}}$ is transmitted output power.\n\n<strong>2. Major Loss Mechanisms:</strong>\n\u2022 <strong>1. Material Absorption Losses:</strong>\n  - <em>Intrinsic Absorption:</em> Fundamental absorption of pure silica glass in UV (electronic transitions) and infrared (molecular vibrations of $Si\\text{-}O$ bonds).\n  - <em>Extrinsic Absorption:</em> Impurity absorption, especially resonance vibration peaks of trace water hydroxyl ions ($\\text{OH}^-$) around $1.38\\,\\mu\\text{m}$.\n\u2022 <strong>2. Rayleigh Scattering Losses:</strong>\n  - Caused by microscopic density fluctuations and refractive index inhomogeneities frozen into the glass matrix during manufacture.\n  - Scattering loss scales inversely with the 4th power of wavelength: $\\mathbf{\\alpha_{\\text{Rayleigh}} \\propto \\frac{1}{\\lambda^4}}$. Hence longer wavelengths ($1.31\\,\\mu\\text{m}, 1.55\\,\\mu\\text{m}$) experience significantly lower scattering loss.\n\u2022 <strong>3. Radiative Bending Losses:</strong>\n  - <em>Macrobending:</em> Fiber bent with a radius of curvature comparable to a few centimeters, allowing core modes to exceed the critical angle and escape into the cladding.\n  - <em>Microbending:</em> Microscopic imperfections and mechanical stresses along the core-cladding boundary causing mode coupling and radiation.",
    "examTip": "Remember the low-loss telecommunication optical windows: 1310 nm (zero dispersion window) and 1550 nm (minimum attenuation window ~0.2 dB/km).",
    "starred": false,
    "mastered": false
  },
  {
    "id": "card-extra-352",
    "subjectId": "phys",
    "unit": 3,
    "pyqTag": "\ud83c\udfaf Practice Question \u2022 High Probability",
    "badgeType": "\ud83d\udcd0 Derivation / Formula",
    "badgeLabel": "Fermi-Dirac Distribution",
    "question": "State the Fermi-Dirac Distribution function. Discuss its mathematical behavior at absolute zero (T = 0 K) and at higher temperatures (T > 0 K) with a neat graph. What is the physical significance of Fermi Energy?",
    "hint": "f(E) = 1 / [e^((E - E_F)/kT) + 1]. At T = 0 K: f(E)=1 for E < E_F, f(E)=0 for E > E_F. At T > 0 K: at E = E_F, f(E) = 1/2.",
    "answer": "<strong>1. Fermi-Dirac Distribution Function:</strong>\nThe probability $f(E)$ that an available quantum energy state $E$ is occupied by an electron in thermal equilibrium at temperature $T$ is given by:\n$$\\mathbf{f(E) = \\frac{1}{e^{(E - E_F)/k_B T} + 1}}$$\nwhere $E_F$ is the <strong>Fermi Energy</strong> and $k_B$ is the Boltzmann constant.\n\n<strong>2. Mathematical Behavior & Analysis:</strong>\n\u2022 <strong>Case 1: At Absolute Zero ($T = 0\\text{ K}$):</strong>\n  1. For energy states below $E_F$ ($E < E_F$):\n     $$\\frac{E - E_F}{k_B T} \\rightarrow -\\infty \\implies e^{-\\infty} = 0 \\implies f(E) = \\frac{1}{0 + 1} = 1$$\n     Every quantum state below $E_F$ is <strong>100% completely occupied</strong>.\n  2. For energy states above $E_F$ ($E > E_F$):\n     $$\\frac{E - E_F}{k_B T} \\rightarrow +\\infty \\implies e^{+\\infty} = \\infty \\implies f(E) = \\frac{1}{\\infty + 1} = 0$$\n     Every quantum state above $E_F$ is <strong>completely empty</strong>.\n  \u2022 <em>Conclusion:</em> At $T = 0\\text{ K}$, $f(E)$ is a sharp rectangular step function!\n\n\u2022 <strong>Case 2: At Finite Temperatures ($T > 0\\text{ K}$):</strong>\n  - Thermal energy excites electrons from just below $E_F$ to states just above $E_F$.\n  - Exactly at $E = E_F$:\n    $$f(E_F) = \\frac{1}{e^0 + 1} = \\frac{1}{2} = 0.5$$\n  \u2022 <strong>Physical Significance of $E_F$:</strong> Fermi energy represents the energy level that has exactly a <strong>50% probability of occupancy</strong> at any finite temperature $T > 0\\text{ K}$.",
    "examTip": "Highlight that at energies far above EF (E - EF >> kT), f(E) approaches the classical Maxwell-Boltzmann exponential tail e^(-(E-EF)/kT).",
    "starred": false,
    "mastered": false
  },
  {
    "id": "card-extra-353",
    "subjectId": "phys",
    "unit": 5,
    "pyqTag": "\ud83c\udfaf Practice Question \u2022 High Probability",
    "badgeType": "\ud83d\udcd0 Derivation / Formula",
    "badgeLabel": "Bell States & Entanglement",
    "question": "What is Quantum Entanglement? Show how a maximally entangled Bell state |Phi+> is generated using a Hadamard gate followed by a CNOT gate starting from |00>.",
    "hint": "Initial state |00>. Apply Hadamard to qubit 1: (|00> + |10>)/sqrt(2). Apply CNOT with control qubit 1, target qubit 2: flips |10> to |11>, giving (|00> + |11>)/sqrt(2).",
    "answer": "<strong>1. Quantum Entanglement:</strong>\nQuantum Entanglement is a quantum mechanical phenomenon where two or more qubits exist in a composite state such that the individual quantum state of each qubit cannot be described independently of the state of the others, regardless of the physical distance separating them.\n\n<strong>2. Generation of the Bell State $|\\Phi^+\\rangle$:</strong>\nConsider two qubits initialized in the standard ground state:\n$$|\\psi_0\\rangle = |0\\rangle \\otimes |0\\rangle = |00\\rangle$$\n\n\u2022 <strong>Step 1: Apply Hadamard Gate ($H$) to Qubit 1:</strong>\n  $$H = \\frac{1}{\\sqrt{2}} \\begin{pmatrix} 1 & 1 \\\\ 1 & -1 \\end{pmatrix}$$\n  $$(H \\otimes I)|00\\rangle = \\left(\\frac{|0\\rangle + |1\\rangle}{\\sqrt{2}}\\right) \\otimes |0\\rangle = \\frac{|00\\rangle + |10\\rangle}{\\sqrt{2}}$$\n\n\u2022 <strong>Step 2: Apply Controlled-NOT Gate ($CNOT_{1 \\to 2}$):</strong>\n  The first qubit acts as control, and the second qubit acts as target.\n  - For $|00\\rangle$: control is $0 \\implies$ target unchanged $\\rightarrow |00\\rangle$.\n  - For $|10\\rangle$: control is $1 \\implies$ target flipped ($0 \\rightarrow 1$) $\\rightarrow |11\\rangle$.\n  $$\\mathbf{|\\Phi^+\\rangle = CNOT \\left(\\frac{|00\\rangle + |10\\rangle}{\\sqrt{2}}\\right) = \\frac{|00\\rangle + |11\\rangle}{\\sqrt{2}}}$$\n\n<strong>3. Measurement & Non-Locality:</strong>\nMeasuring qubit 1 immediately collapses the system:\n- If qubit 1 is measured as $|0\\rangle$, qubit 2 instantly becomes $|0\\rangle$ with 100% certainty.\n- If qubit 1 is measured as $|1\\rangle$, qubit 2 instantly becomes $|1\\rangle$ with 100% certainty.\nThere is zero probability of finding $|01\\rangle$ or $|10\\rangle$!",
    "examTip": "Write out the four complete orthogonal Bell states: |Phi\u00b1> = (|00> \u00b1 |11>)/sqrt(2) and |Psi\u00b1> = (|01> \u00b1 |10>)/sqrt(2).",
    "starred": false,
    "mastered": false
  },
  {
    "id": "card-extra-354",
    "subjectId": "pyprog",
    "unit": 1,
    "pyqTag": "\ud83c\udfaf Practice Question \u2022 High Probability",
    "badgeType": "\u26a1 Exception / Trap",
    "badgeLabel": "for-else & Loop Control",
    "question": "Explain the role of break, continue, and pass statements in Python. What is the unique purpose of the else clause in a Python for or while loop? Illustrate with a prime number check program.",
    "hint": "break exits loop immediately; continue skips rest of current iteration; pass is a no-op placeholder. The else block in a loop executes ONLY IF the loop finished without encountering a break!",
    "answer": "<strong>1. Loop Control Statements:</strong>\n\u2022 <code>break</code>: Terminates the nearest enclosing loop immediately. Control passes to the statement following the loop.\n\u2022 <code>continue</code>: Skips the remaining statements in the current iteration and jumps to the next loop iteration.\n\u2022 <code>pass</code>: A null syntactic placeholder statement that executes no code (used when code is required syntactically but no action is needed).\n\n<strong>2. Unique Python Construct: <code>for...else</code> / <code>while...else</code>:</strong>\nIn Python, a loop can have an attached <code>else</code> block.\n<strong>Rule:</strong> The <code>else</code> block executes <strong>ONLY IF</strong> the loop completes all iterations naturally <em>without hitting a <code>break</code> statement</em>!\n\n<strong>3. Prime Number Detection Example:</strong>\n<pre class=\"bg-slate-900 text-emerald-400 p-3 rounded text-xs font-mono\"><code>def check_prime(num):\n    if num <= 1:\n        print(f\"{num} is NOT prime\")\n        return\n    for i in range(2, int(num ** 0.5) + 1):\n        if num % i == 0:\n            print(f\"{num} is composite (divisible by {i})\")\n            break\n    else:\n        # Executes ONLY if no break was triggered!\n        print(f\"{num} is a PRIME number!\")\n\ncheck_prime(29)  # Output: 29 is a PRIME number!\ncheck_prime(35)  # Output: 35 is composite (divisible by 5)</code></pre>",
    "examTip": "Remember: 'else' on a loop means 'no-break', which eliminates the need for boolean flag variables like 'is_found = False'!",
    "starred": false,
    "mastered": false
  },
  {
    "id": "card-extra-355",
    "subjectId": "pyprog",
    "unit": 2,
    "pyqTag": "\ud83c\udfaf Practice Question \u2022 High Probability",
    "badgeType": "\ud83d\udcd0 Derivation / Formula",
    "badgeLabel": "String Slicing & Methods",
    "question": "Explain Python string slicing with syntax str[start:stop:step]. Write a Python function is_palindrome(s) that ignores case, whitespace, and punctuation using string methods.",
    "hint": "Slicing syntax: s[start:stop:step]. Reversing: s[::-1]. Clean with ''.join(c.lower() for c in s if c.isalnum()) and compare with its reverse.",
    "answer": "<strong>1. String Slicing Syntax:</strong>\n<code>string[start : stop : step]</code>\n\u2022 <code>start</code>: Starting index (inclusive, default = 0).\n\u2022 <code>stop</code>: Ending index (exclusive, default = length).\n\u2022 <code>step</code>: Stride/increment (default = 1). If negative, slices backward!\n\u2022 <em>Reversing a string idiom:</em> <code>s[::-1]</code> reverses the entire string in $O(N)$ time.\n\n<strong>2. Palindrome Checker Function:</strong>\n<pre class=\"bg-slate-900 text-emerald-400 p-3 rounded text-xs font-mono\"><code>def is_palindrome(text: str) -> bool:\n    # Filter alphanumeric characters only and convert to lowercase\n    cleaned = ''.join(ch.lower() for ch in text if ch.isalnum())\n    \n    # Check if cleaned string matches its reverse slice\n    return cleaned == cleaned[::-1]\n\n# Test Cases:\nprint(is_palindrome(\"Radar\"))                         # True\nprint(is_palindrome(\"A man, a plan, a canal: Panama\")) # True\nprint(is_palindrome(\"MSRIT Bangalore 2026\"))          # False</code></pre>\n\n<strong>3. Essential String Methods:</strong>\n\u2022 <code>s.split(sep)</code>: Splits string into list of substrings.\n\u2022 <code>sep.join(list)</code>: Concatenates list elements with delimiter.\n\u2022 <code>s.strip()</code>: Removes leading and trailing whitespace.\n\u2022 <code>s.replace(old, new)</code>: Returns copy with occurrences substituted.",
    "examTip": "State that Python strings are immutable: all string methods return a newly created string, never mutating the original in place.",
    "starred": false,
    "mastered": false
  },
  {
    "id": "card-extra-356",
    "subjectId": "pyprog",
    "unit": 2,
    "pyqTag": "\ud83c\udfaf Practice Question \u2022 High Probability",
    "badgeType": "\ud83d\udcd0 Derivation / Formula",
    "badgeLabel": "List Comprehensions & Lambda",
    "question": "What are List Comprehensions and Lambda functions in Python? Compare list comprehensions with map() and filter(). Provide code examples for extracting even squares.",
    "hint": "List comprehension: [expr for x in iterable if cond]. Lambda: lambda x: x**2. List comprehensions are cleaner, more readable, and avoid function call overhead.",
    "answer": "<strong>1. List Comprehensions:</strong>\nA concise syntactic construct to generate new lists from existing iterables:\n$$\\mathbf{[\\text{expression} \\quad \\mathbf{for} \\quad \\text{item} \\quad \\mathbf{in} \\quad \\text{iterable} \\quad \\mathbf{if} \\quad \\text{condition}]}$$\n\n<strong>2. Lambda Functions:</strong>\nAnonymous, inline one-liner functions defined without <code>def</code>:\n<code>square = lambda x: x ** 2</code>\n\n<strong>3. Comparison: List Comprehension vs. map() + filter():</strong>\nGoal: Given numbers 1 to 10, extract squares of even numbers.\n<pre class=\"bg-slate-900 text-emerald-400 p-3 rounded text-xs font-mono\"><code>nums = list(range(1, 11))\n\n# Approach A: List Comprehension (Idiomatic & Fast)\neven_sq_comp = [x**2 for x in nums if x % 2 == 0]\n\n# Approach B: map() and filter() with lambda\neven_sq_func = list(map(lambda x: x**2, filter(lambda x: x % 2 == 0, nums)))\n\nprint(even_sq_comp)  # [4, 16, 36, 64, 100]\nprint(even_sq_func)  # [4, 16, 36, 64, 100]</code></pre>\n\n<strong>4. Performance Advantage:</strong>\nList comprehensions execute at C-speed inside Python interpreter bytecode without repeated Python stack frame function calls required by lambda in map().",
    "examTip": "Mention that map() and filter() return lazy iterators in Python 3, requiring list() wrapper if full evaluation is needed.",
    "starred": false,
    "mastered": false
  },
  {
    "id": "card-extra-357",
    "subjectId": "pyprog",
    "unit": 3,
    "pyqTag": "\ud83c\udfaf Practice Question \u2022 High Probability",
    "badgeType": "\ud83d\udcd0 Derivation / Formula",
    "badgeLabel": "Dictionaries & Sets",
    "question": "How are Dictionaries and Sets implemented internally in Python? Explain hash tables, hash collision handling (open addressing), and why keys must be immutable.",
    "hint": "Python dicts use sparse hash tables with open addressing. Keys must be hashable (__hash__ and __eq__). Average time complexity for lookup/insert/delete is O(1).",
    "answer": "<strong>1. Internal Hash Table Architecture:</strong>\nBoth Python dictionaries and sets are implemented as dynamically resizing <strong>Hash Tables</strong>:\n1. <strong>Hash Calculation:</strong> When a key is inserted, Python computes its hash: <code>h = hash(key)</code>.\n2. <strong>Index Mapping:</strong> The hash is converted to an array index: <code>idx = h & (table_size - 1)</code>.\n3. <strong>Open Addressing & Perturbation:</strong> If two different keys map to the same index (a collision), Python uses pseudo-random open addressing probe sequence ($idx = (5 \\times idx + 1 + perturb) \\pmod{\\text{size}}$) to locate the next free bucket.\n\n<strong>2. Why Must Dictionary Keys Be Immutable?</strong>\n\u2022 A dictionary key must implement <code>__hash__()</code> and <code>__eq__()</code>.\n\u2022 If a mutable object (like a <code>list</code>) were a key, modifying the list would change its hash value, rendering the key lost at a different bucket location!\n\u2022 Hence, <code>int</code>, <code>float</code>, <code>str</code>, and <code>tuple</code> can be keys; <code>list</code>, <code>set</code>, and <code>dict</code> cannot.\n\n<strong>3. Time Complexities:</strong>\n\u2022 <strong>Lookup / Insertion / Deletion:</strong> Average case $\\mathbf{O(1)}$, Worst case $\\mathbf{O(N)}$ (heavy collisions).",
    "examTip": "Remember dict.get(key, default) prevents KeyError and allows providing a safe fallback value.",
    "starred": false,
    "mastered": false
  },
  {
    "id": "card-extra-358",
    "subjectId": "pyprog",
    "unit": 3,
    "pyqTag": "\ud83c\udfaf Practice Question \u2022 High Probability",
    "badgeType": "\ud83d\udd22 Numerical Pattern",
    "badgeLabel": "NumPy Broadcasting",
    "question": "What are NumPy Broadcasting Rules? Explain with a 2D matrix (3x3) and a 1D vector (1x3) example. Demonstrate matrix multiplication with @ vs element-wise multiplication with *.",
    "hint": "Broadcasting aligns trailing dimensions from right to left. Dimensions are compatible if: 1. They are equal, or 2. One of them is 1. @ is dot product; * is element-wise.",
    "answer": "<strong>1. NumPy Broadcasting Rules:</strong>\nBroadcasting allows arithmetic operations between arrays of different shapes without copying data:\n\u2022 <strong>Rule 1:</strong> Compare dimension sizes backwards, starting from the <em>trailing (rightmost) dimensions</em>.\n\u2022 <strong>Rule 2:</strong> Two dimensions are compatible if:\n  1. They are equal ($d_1 == d_2$), OR\n  2. One of them is $1$ ($d_1 == 1$ or $d_2 == 1$).\n\u2022 If compatible, the dimension of size $1$ is stretched (virtually repeated) to match the other without allocating extra memory!\n\n<strong>2. Code Example & Matrix Multiplication:</strong>\n<pre class=\"bg-slate-900 text-emerald-400 p-3 rounded text-xs font-mono\"><code>import numpy as np\n\nA = np.array([[1, 2, 3],\n              [4, 5, 6],\n              [7, 8, 9]])      # Shape: (3, 3)\nB = np.array([10, 20, 30])    # Shape: (3,) -> Broadcasts to (1, 3) -> (3, 3)\n\n# 1. Element-wise multiplication (*) with broadcasting:\nelem_prod = A * B\n# Row 0: [1*10, 2*20, 3*30] = [10, 40, 90]\n\n# 2. True Linear Algebra Matrix Multiplication (@ or np.dot):\nmat_prod = A @ B\n# [1*10+2*20+3*30, 4*10+5*20+6*30, 7*10+8*20+9*30] = [140, 320, 500]\n\nprint(\"A * B shape:\", elem_prod.shape)  # (3, 3)\nprint(\"A @ B shape:\", mat_prod.shape)    # (3,)</code></pre>",
    "examTip": "In modern Python 3.5+, always use the @ operator for matrix multiplication instead of np.dot or np.matmul.",
    "starred": false,
    "mastered": false
  },
  {
    "id": "card-extra-359",
    "subjectId": "pyprog",
    "unit": 4,
    "pyqTag": "\ud83c\udfaf Practice Question \u2022 High Probability",
    "badgeType": "\u26a1 Exception / Trap",
    "badgeLabel": "*args, **kwargs & LEGB",
    "question": "Explain the usage of *args and **kwargs in Python functions. Explain Python's LEGB variable scope resolution rule and describe the 'default mutable argument trap'.",
    "hint": "*args captures variable positional args as a tuple; **kwargs captures keyword args as a dict. LEGB = Local, Enclosing, Global, Built-in. Trap: def append(x, lst=[]).",
    "answer": "<strong>1. Variable Arguments (*args & **kwargs):</strong>\n\u2022 <code>*args</code>: Collects extra positional arguments into an immutable <strong>tuple</strong>.\n\u2022 <code>**kwargs</code>: Collects extra keyword (named) arguments into a mutable <strong>dictionary</strong>.\n<pre class=\"bg-slate-900 text-emerald-400 p-3 rounded text-xs font-mono\"><code>def student_record(name, *marks, **details):\n    avg = sum(marks) / len(marks) if marks else 0\n    print(f\"Name: {name}, Avg: {avg:.2f}, Details: {details}\")\n\nstudent_record(\"Pooja\", 85, 92, 88, branch=\"ECE\", usn=\"1MS25EC045\")</code></pre>\n\n<strong>2. LEGB Scope Resolution Rule:</strong>\nWhen a variable name is referenced, Python searches in strict order:\n1. <strong>L (Local):</strong> Names assigned inside current function.\n2. <strong>E (Enclosing):</strong> Names in outer enclosing functions (closures).\n3. <strong>G (Global):</strong> Names assigned at the top-level of module.\n4. <strong>B (Built-in):</strong> Predefined names in Python (e.g. <code>len</code>, <code>range</code>, <code>print</code>).\n\n<strong>3. The Mutable Default Argument Trap:</strong>\n<pre class=\"bg-slate-900 text-rose-300 p-3 rounded text-xs font-mono\"><code># DANGEROUS: Default list evaluated ONCE at function definition!\ndef bad_add(item, target_list=[]):\n    target_list.append(item)\n    return target_list\n\nprint(bad_add(1))  # [1]\nprint(bad_add(2))  # [1, 2] -- BUG! Reused same persistent list!\n\n# CORRECT IDIOM:\ndef safe_add(item, target_list=None):\n    if target_list is None:\n        target_list = []\n    target_list.append(item)\n    return target_list</code></pre>",
    "examTip": "Explain that default arguments are evaluated once when the function is defined, NOT each time the function is called.",
    "starred": false,
    "mastered": false
  },
  {
    "id": "card-extra-360",
    "subjectId": "pyprog",
    "unit": 4,
    "pyqTag": "\ud83c\udfaf Practice Question \u2022 High Probability",
    "badgeType": "\ud83d\udcd0 Derivation / Formula",
    "badgeLabel": "OOP Inheritance & MRO",
    "question": "Explain Single, Multiple, and Multilevel Inheritance in Python. What is Method Resolution Order (MRO) and how does super() resolve methods in multiple inheritance?",
    "hint": "Diamond problem: Class D(B, C). Check D.mro() or D.__mro__. super() follows C3 Linearization order to invoke base methods once without duplication.",
    "answer": "<strong>1. Inheritance Types in Python:</strong>\n\u2022 <strong>Single:</strong> <code>class Child(Parent):</code>\n\u2022 <strong>Multilevel:</strong> <code>class GrandChild(Child):</code>\n\u2022 <strong>Multiple:</strong> <code>class FlyingCar(Car, Airplane):</code>\n\n<strong>2. The Diamond Problem & Method Resolution Order (MRO):</strong>\nWhen two classes $B$ and $C$ inherit from $A$, and class $D$ inherits from both $B$ and $C$, which version of a shared method does $D$ call?\nPython resolves this using the <strong>C3 Linearization Algorithm</strong>:\n<pre class=\"bg-slate-900 text-emerald-400 p-3 rounded text-xs font-mono\"><code>class A:\n    def greet(self):\n        print(\"Hello from A\")\n\nclass B(A):\n    def greet(self):\n        print(\"Hello from B\")\n        super().greet()\n\nclass C(A):\n    def greet(self):\n        print(\"Hello from C\")\n        super().greet()\n\nclass D(B, C):\n    def greet(self):\n        print(\"Hello from D\")\n        super().greet()\n\nd = D()\nd.greet()\nprint(\"MRO:\", [cls.__name__ for cls in D.mro()])\n# MRO: ['D', 'B', 'C', 'A', 'object']\n# Output prints: D -> B -> C -> A (each visited exactly ONCE!)</code></pre>",
    "examTip": "Always use super().__init__() rather than Parent.__init__(self) so that all cooperative base classes are initialized in MRO sequence.",
    "starred": false,
    "mastered": false
  },
  {
    "id": "card-extra-361",
    "subjectId": "pyprog",
    "unit": 5,
    "pyqTag": "\ud83c\udfaf Practice Question \u2022 High Probability",
    "badgeType": "\ud83d\udcd0 Derivation / Formula",
    "badgeLabel": "Generators vs Iterators",
    "question": "Differentiate between an Iterator and a Generator in Python. Explain how the yield keyword enables lazy evaluation. Write a generator function to produce the Fibonacci sequence up to N terms.",
    "hint": "Iterator implements __iter__() and __next__(). Generator uses yield to pause and resume function state with local variables preserved. Memory is O(1) vs O(N).",
    "answer": "<strong>1. Key Differences:</strong>\n<div class=\"overflow-x-auto my-2\">\n<table class=\"w-full text-xs border border-slate-300\">\n<thead class=\"bg-slate-100\"><tr><th class=\"p-1 border\">Feature</th><th class=\"p-1 border\">Iterator Class</th><th class=\"p-1 border\">Generator Function</th></tr></thead>\n<tbody>\n<tr><td class=\"p-1 border font-semibold\">Implementation</td><td class=\"p-1 border\">Explicit class with <code>__iter__</code> & <code>__next__</code></td><td class=\"p-1 border\">Regular function using <code>yield</code> keyword</td></tr>\n<tr><td class=\"p-1 border font-semibold\">State Preservation</td><td class=\"p-1 border\">Saved manually in <code>self.attr</code></td><td class=\"p-1 border\">Saved automatically by Python stack frame</td></tr>\n<tr><td class=\"p-1 border font-semibold\">Termination</td><td class=\"p-1 border\">Explicit <code>raise StopIteration</code></td><td class=\"p-1 border\">Implicit upon function exit</td></tr>\n<tr><td class=\"p-1 border font-semibold\">Memory Consumption</td><td class=\"p-1 border\">Low $O(1)$</td><td class=\"p-1 border\">Extremely low $O(1)$ (Lazy evaluation)</td></tr>\n</tbody></table></div>\n\n<strong>2. Fibonacci Generator Code:</strong>\n<pre class=\"bg-slate-900 text-emerald-400 p-3 rounded text-xs font-mono\"><code>def fibonacci_gen(n):\n    a, b = 0, 1\n    count = 0\n    while count < n:\n        yield a  # Pauses execution and yields value to caller\n        a, b = b, a + b\n        count += 1\n\n# Generating first 7 Fibonacci numbers:\nfor val in fibonacci_gen(7):\n    print(val, end=\" \")  # Output: 0 1 1 2 3 5 8</code></pre>",
    "examTip": "Highlight that yield produces values on demand one at a time, making it possible to stream infinite sequences or gigabyte files with minimal RAM.",
    "starred": false,
    "mastered": false
  },
  {
    "id": "card-extra-362",
    "subjectId": "pyprog",
    "unit": 5,
    "pyqTag": "\ud83c\udfaf Practice Question \u2022 High Probability",
    "badgeType": "\ud83d\udcd0 Derivation / Formula",
    "badgeLabel": "Custom Exceptions & Context",
    "question": "How do you create user-defined custom exceptions in Python? Explain Python's Context Management protocol (__enter__ and __exit__) and show how the with statement guarantees resource cleanup.",
    "hint": "Custom exception: class InsufficientFundsError(Exception). Context manager protocol: __enter__() acquires resource, __exit__() releases resource even if an error is raised.",
    "answer": "<strong>1. Custom User-Defined Exceptions:</strong>\nInherit from Python's built-in <code>Exception</code> class:\n<pre class=\"bg-slate-900 text-emerald-400 p-3 rounded text-xs font-mono\"><code>class InvalidUSNError(Exception):\n    def __init__(self, usn, message=\"USN format invalid for MSRIT\"):\n        self.usn = usn\n        super().__init__(f\"{message}: {usn}\")\n\ndef register_student(usn):\n    if not usn.startswith(\"1MS\"):\n        raise InvalidUSNError(usn)\n    print(f\"Student {usn} successfully registered!\")</code></pre>\n\n<strong>2. Context Manager Protocol (<code>__enter__</code> & <code>__exit__</code>):</strong>\nThe <code>with</code> statement guarantees cleanup (e.g. closing files, releasing locks, terminating DB sessions):\n<pre class=\"bg-slate-900 text-emerald-400 p-3 rounded text-xs font-mono\"><code>class FileSession:\n    def __init__(self, filename, mode):\n        self.filename = filename\n        self.mode = mode\n        self.file = None\n\n    def __enter__(self):\n        print(f\"Opening file {self.filename}\")\n        self.file = open(self.filename, self.mode)\n        return self.file\n\n    def __exit__(self, exc_type, exc_val, exc_tb):\n        if self.file:\n            print(f\"Closing file {self.filename}\")\n            self.file.close()\n        # Return False to let any exception propagate\n        return False</code></pre>",
    "examTip": "Mention that __exit__ receives exception details (exc_type, exc_val, exc_tb) which allows suppressing or logging errors during exit.",
    "starred": false,
    "mastered": false
  },
  {
    "id": "card-extra-363",
    "subjectId": "kan",
    "unit": 1,
    "pyqTag": "\ud83c\udfaf Practice Question \u2022 High Probability",
    "badgeType": "\ud83d\udcd0 Derivation / Formula",
    "badgeLabel": "Daily Routine (Dinachari)",
    "question": "Write eight sentences describing your daily routine (Dinachari) in Kannada using English letters with English translations.",
    "hint": "Naanu beligge 6 gantege eeluttene. Hallu ujjuttene. Snaana maaduttene. Thindi thinnuttene. College ge hoguttene.",
    "answer": "<strong>Daily Routine (Dinachari) in Kannada:</strong>\n1. <em>Naanu beligge aaru gantege niddeyinda eeluttene.</em> (I wake up from sleep at 6:00 AM in the morning.)\n2. <em>Modalu hallu ujjuttene mattu mukha tholiyuttene.</em> (First I brush my teeth and wash my face.)\n3. <em>Nantara bisi neeralli snaana maaduttene.</em> (Afterwards I take a bath in warm water.)\n4. <em>Beligginha thindi (breakfast) thindu kaafi kudiyuttene.</em> (I eat morning breakfast and drink coffee.)\n5. <em>Entu gantege Ramaiah engineering college ge bus nalli hoguttene.</em> (At 8:00 AM I go to Ramaiah engineering college by bus.)\n6. <em>Taragathiyalli (class) gavanavittu paatha keluttene mattu notes bareyuttene.</em> (In class I listen attentively to lectures and write notes.)\n7. <em>Sanje aaru gantege manege marali bandu snehithara jothe aatavaaDuttene.</em> (At 6:00 PM I return home and play with friends.)\n8. <em>Raathri oota maadi, eradugante oodi, hattu gantege malaguttene.</em> (After dinner, I study for two hours and sleep at 10:00 PM.)",
    "examTip": "Note that daily habits use first-person present tense endings: -uttene (eeluttene, tholiyuttene, hoguttene, malaguttene).",
    "starred": false,
    "mastered": false
  },
  {
    "id": "card-extra-364",
    "subjectId": "kan",
    "unit": 2,
    "pyqTag": "\ud83c\udfaf Practice Question \u2022 High Probability",
    "badgeType": "\ud83d\udcd0 Derivation / Formula",
    "badgeLabel": "Shopping Conversation",
    "question": "Write a conversational dialogue between a customer (Grahaka) and a vegetable vendor (Vyapari) at a market in Kannada using English letters.",
    "hint": "Grahaka: Namaskara, eeruLLi bele eshtu? Vyapari: Ondu kg ge nalavattu roopayi. Grahaka: Eradu kg kodi. Vyapari: Idu thagolli.",
    "answer": "<strong>Market Dialogue (Grahaka mattu Vyapari):</strong>\n\u2022 <strong>Grahaka:</strong> <em>Namaskara aNNa, eeruLLi (onion) mattu aalugaDDe (potato) bele eshtu?</em>\n  (Hello brother, what is the price of onions and potatoes?)\n\u2022 <strong>Vyapari:</strong> <em>Namaskara saar! EeruLLi ondu kg ge nalavattu roopayi, aalugaDDe muvvattu roopayi.</em>\n  (Hello sir! Onions are 40 rupees per kg, potatoes are 30 rupees per kg.)\n\u2022 <strong>Grahaka:</strong> <em>Tomato fresh ideya? Ondu kg ge eshtu koduthiri?</em>\n  (Are tomatoes fresh? For how much will you give one kg?)\n\u2022 <strong>Vyapari:</strong> <em>Haudu saar, tumbaa fresh ide. Ippattaidu roopayige koduttene.</em>\n  (Yes sir, very fresh. I will give for 25 rupees.)\n\u2022 <strong>Grahaka:</strong> <em>Sari, eradu kg eeruLLi mattu ondu kg tomato kodi.</em>\n  (Okay, please give 2 kg onions and 1 kg tomatoes.)\n\u2022 <strong>Vyapari:</strong> <em>Idu thagolli saar, mottha noora aivattu roopayi aayithu.</em>\n  (Please take this sir, total amount is 105 rupees.)\n\u2022 <strong>Grahaka:</strong> <em>Dhanayavadagalu, Google Pay maaduttene.</em>\n  (Thank you, I will pay via Google Pay.)",
    "examTip": "Use polite imperative forms: 'kodi' (please give) and 'thagolli' (please take) rather than informal 'kodu' or 'thago'.",
    "starred": false,
    "mastered": false
  },
  {
    "id": "card-extra-365",
    "subjectId": "kan",
    "unit": 2,
    "pyqTag": "\ud83c\udfaf Practice Question \u2022 High Probability",
    "badgeType": "\ud83d\udcd0 Derivation / Formula",
    "badgeLabel": "Kannada Question Words",
    "question": "List the seven primary question words (Wh-words) in Kannada using English letters, give their English meanings, and frame a simple question sentence for each.",
    "hint": "Yaaru (Who), Yaavudu (Which), Yelli (Where), Yaake (Why), Hege (How), Eshtu (How much), Yaavaaga (When).",
    "answer": "<strong>Seven Question Words (Prashnarthaka Padagalu):</strong>\n1. <strong>Yaaru (Who?):</strong>\n   \u2022 <em>Avaru yaaru?</em> (Who is that person?)\n2. <strong>Yaavudu (Which?):</strong>\n   \u2022 <em>Ninna pustaka yaavudu?</em> (Which is your book?)\n3. <strong>Yelli (Where?):</strong>\n   \u2022 <em>Ramaiah college library yelli ide?</em> (Where is the Ramaiah college library?)\n4. <strong>Yaake (Why?):</strong>\n   \u2022 <em>Neenu ivatthu taragathige yaake baralilla?</em> (Why did you not come to class today?)\n5. <strong>Hege (How?):</strong>\n   \u2022 <em>Ninna prayana hege itthu?</em> (How was your journey?)\n6. <strong>Eshtu (How much / How many?):</strong>\n   \u2022 <em>Ee pustakada bele eshtu?</em> (How much is the price of this book?)\n7. <strong>Yaavaaga (When?):</strong>\n   \u2022 <em>Semester exam yaavaaga shuruvagutthade?</em> (When does the semester exam begin?)",
    "examTip": "In Kannada syntax, question words are placed just before the main verb at the end of the sentence.",
    "starred": false,
    "mastered": false
  },
  {
    "id": "card-extra-366",
    "subjectId": "kan",
    "unit": 3,
    "pyqTag": "\ud83c\udfaf Practice Question \u2022 High Probability",
    "badgeType": "\ud83d\udcd0 Derivation / Formula",
    "badgeLabel": "Family Relationships",
    "question": "Write eight Kannada kinship/family relationship terms with their English meanings and frame four sentences describing family members using English letters.",
    "hint": "Thande (Father), Thaayi (Mother), Anna (Elder brother), Thamma (Younger brother), Akka (Elder sister), Thangi (Younger sister), Ajja (Grandfather), Ajji (Grandmother).",
    "answer": "<strong>1. Kinship Terms (Kutumba Sambandhagalu):</strong>\n\u2022 <em>Thande / Appa</em> \u2014 Father\n\u2022 <em>Thaayi / Amma</em> \u2014 Mother\n\u2022 <em>Anna</em> \u2014 Elder Brother\n\u2022 <em>Thamma</em> \u2014 Younger Brother\n\u2022 <em>Akka</em> \u2014 Elder Sister\n\u2022 <em>Thangi</em> \u2014 Younger Sister\n\u2022 <em>Ajja</em> \u2014 Grandfather\n\u2022 <em>Ajji</em> \u2014 Grandmother\n\n<strong>2. Four Descriptive Sentences:</strong>\n1. <em>Nanna thande obba neethi-vantha engineer.</em> (My father is a principled engineer.)\n2. <em>Nanna thaayi maneyalli rucikara thindi maaduttaare.</em> (My mother makes delicious snacks at home.)\n3. <em>Nanna anna software company nalli kelasa maaduttiddane.</em> (My elder brother is working in a software company.)\n4. <em>Nanna ajja mattu ajji halliyalliddare.</em> (My grandfather and grandmother live in the village.)",
    "examTip": "Highlight the cultural distinction between elder siblings (Anna/Akka) and younger siblings (Thamma/Thangi).",
    "starred": false,
    "mastered": false
  },
  {
    "id": "card-extra-367",
    "subjectId": "kan",
    "unit": 3,
    "pyqTag": "\ud83c\udfaf Practice Question \u2022 High Probability",
    "badgeType": "\ud83d\udd22 Numerical Pattern",
    "badgeLabel": "Days & Directions",
    "question": "Write the seven days of the week (Vaaragalu) and the four cardinal directions (Dikkugalu) in Kannada using English letters. Frame two sentences using days and directions.",
    "hint": "Days: Bhanuvaara (Sun), Somavaara (Mon), Mangalavaara (Tue), Budhavaara (Wed), Guruvaara (Thu), Shukravaara (Fri), Shanivaara (Sat). Directions: Poorva, Pashchima, Utthara, DakshiNa.",
    "answer": "<strong>1. Seven Days of the Week (Vaaragalu):</strong>\n1. <em>Bhaanuvaara</em> \u2014 Sunday\n2. <em>Somavaara</em> \u2014 Monday\n3. <em>Mangalavaara</em> \u2014 Tuesday\n4. <em>Budhavaara</em> \u2014 Wednesday\n5. <em>Guruvaara</em> \u2014 Thursday\n6. <em>Shukravaara</em> \u2014 Friday\n7. <em>Shanivaara</em> \u2014 Saturday\n\n<strong>2. Cardinal Directions (Dikkugalu):</strong>\n\u2022 <em>Poorva</em> \u2014 East\n\u2022 <em>Pashchima</em> \u2014 West\n\u2022 <em>Utthara</em> \u2014 North\n\u2022 <em>DakshiNa</em> \u2014 South\n\n<strong>3. Example Sentences:</strong>\n\u2022 <em>Somavaaradinda Shukravaaradavarege college taragathigalu iruttave.</em> (College classes run from Monday through Friday.)\n\u2022 <em>Sooryanu poorvadalli huTTi, pashchimadalli munLugutthaane.</em> (The sun rises in the east and sets in the west.)",
    "examTip": "Notice all day names end with the suffix '-vaara' (meaning day).",
    "starred": false,
    "mastered": false
  },
  {
    "id": "card-extra-368",
    "subjectId": "kan",
    "unit": 4,
    "pyqTag": "\ud83c\udfaf Practice Question \u2022 High Probability",
    "badgeType": "\ud83d\udcd0 Derivation / Formula",
    "badgeLabel": "Colors & Animals",
    "question": "Write six color names (BaNNagalu) and six animal/bird names in Kannada using English letters, and construct three sentences using them.",
    "hint": "Colors: Kempu (Red), Neeli (Blue), Haladi (Yellow), Hasiru (Green), BiLi (White), Kappu (Black). Animals: Naayi, Bekku, Aane, Hasu, Navilu, Gili.",
    "answer": "<strong>1. Six Colors (BaNNagalu):</strong>\n1. <em>Kempu</em> \u2014 Red\n2. <em>Neeli</em> \u2014 Blue\n3. <em>Hasiru</em> \u2014 Green\n4. <em>HaLadi</em> \u2014 Yellow\n5. <em>BiLi</em> \u2014 White\n6. <em>Kappu</em> \u2014 Black\n\n<strong>2. Six Animals & Birds (PraaNigalu mattu Pakshigalu):</strong>\n1. <em>Naayi</em> \u2014 Dog\n2. <em>Bekku</em> \u2014 Cat\n3. <em>Aane</em> \u2014 Elephant\n4. <em>Hasu</em> \u2014 Cow\n5. <em>Navilu</em> \u2014 Peacock (National bird)\n6. <em>GiLi</em> \u2014 Parrot\n\n<strong>3. Descriptive Sentences:</strong>\n\u2022 <em>Hasiru gida-maragalu prakruthiyannu sundaravaagisuttave.</em> (Green plants and trees make nature beautiful.)\n\u2022 <em>Navilu namma deshada sundaravada raashtreeya pakshi.</em> (The peacock is the beautiful national bird of our country.)\n\u2022 <em>Avara maneyalli ondu muddu biLiya naayi ide.</em> (There is a cute white dog in their house.)",
    "examTip": "Colors precede nouns directly as qualifying adjectives: 'Kempu gulaabi' (red rose), 'Neeli aakaasha' (blue sky).",
    "starred": false,
    "mastered": false
  },
  {
    "id": "card-extra-369",
    "subjectId": "kan",
    "unit": 5,
    "pyqTag": "\ud83c\udfaf Practice Question \u2022 High Probability",
    "badgeType": "\ud83d\udcd0 Derivation / Formula",
    "badgeLabel": "Verb Tenses (Kaalagalu)",
    "question": "Explain the three main tenses in Kannada: Present (Varthamana), Past (Bhootha), and Future (Bhavishyat). Conjugate the root verb 'MaaDu' (to do) for first-person (Naanu - I) across all three tenses.",
    "hint": "Root: MaaDu. Present: Naanu maaduttene (I do). Past: Naanu maadide (I did). Future: Naanu maaduve (I will do).",
    "answer": "<strong>1. Three Primary Tenses (Kaalagalu):</strong>\n\u2022 <strong>1. Varthamana Kaala (Present Tense):</strong> Denotes actions happening currently or habitually.\n\u2022 <strong>2. Bhootha Kaala (Past Tense):</strong> Denotes actions completed in the past.\n\u2022 <strong>3. Bhavishyat Kaala (Future Tense):</strong> Denotes actions that will occur in the future.\n\n<strong>2. Conjugation of Root Verb 'MaaDu' (To Do):</strong>\n\u2022 <strong>Present Tense (Varthamana):</strong>\n  $$\\mathbf{\\text{Naanu kelasa maaduttene}} \\quad (\\text{I am doing / I do work})$$\n\u2022 <strong>Past Tense (Bhootha):</strong>\n  $$\\mathbf{\\text{Naanu kelasa maadide}} \\quad (\\text{I did / completed work})$$\n\u2022 <strong>Future Tense (Bhavishyat):</strong>\n  $$\\mathbf{\\text{Naanu naale kelasa maaduve}} \\quad (\\text{I will do work tomorrow})$$\n\n<strong>3. Third-Person Comparison:</strong>\n\u2022 <em>Avanu maaduttaane / maadida / maaduvanu</em> (He does / did / will do)\n\u2022 <em>Avalu maaduttaaLe / maaDidaLu / maaDuvaLu</em> (She does / did / will do)",
    "examTip": "Remember that present tense verb endings (-uttene, -uttaane) are frequently used colloquially to express planned immediate future as well.",
    "starred": false,
    "mastered": false
  },
  {
    "id": "card-extra-370",
    "subjectId": "kan",
    "unit": 5,
    "pyqTag": "\ud83c\udfaf Practice Question \u2022 High Probability",
    "badgeType": "\ud83d\udcd0 Derivation / Formula",
    "badgeLabel": "Campus Dialogue",
    "question": "Write a dialogue between two engineering classmates (Ramesh and Suresh) meeting at MSRIT library discussing semester exams and class notes in Kannada using English letters.",
    "hint": "Ramesh: Namaskara Suresh, hegidhdheeya? Suresh: Naanu chennagiddhene. Ramesh: Semester exam ge hege tayyari nadita ide?",
    "answer": "<strong>Campus Conversation (Ramesh mattu Suresh):</strong>\n\u2022 <strong>Ramesh:</strong> <em>Namaskara Suresh, hegidhdheeya? Tumbaa dinagala nantara sigutthidhdheeya.</em>\n  (Hello Suresh, how are you? Meeting you after many days.)\n\u2022 <strong>Suresh:</strong> <em>Namaskara Ramesh! Naanu tumbaa chennagiddhene. Neenu hegidhdheeya?</em>\n  (Hello Ramesh! I am very fine. How are you?)\n\u2022 <strong>Ramesh:</strong> <em>Naanu kooDa chennagiddhene. Munde baruvudu semester exams, tayyari hege nadita ide?</em>\n  (I am also good. Semester exams are coming up, how is your preparation going?)\n\u2022 <strong>Suresh:</strong> <em>Applied Chemistry mattu Mathematics tayyari aagide. Aadare Physics Unit-2 swalpa kashta ide. Ninna hattira notes ideya?</em>\n  (Chemistry and Maths are prepared. But Physics Unit-2 is a bit tough. Do you have notes with you?)\n\u2022 <strong>Ramesh:</strong> <em>Haudu, nanna hattira complete RIT handwritten notes ide. Eega library nalli photocopy maadisikoLLoNa.</em>\n  (Yes, I have complete RIT handwritten notes. Let's get a photocopy in the library now.)\n\u2022 <strong>Suresh:</strong> <em>Tumbaa thx Ramesh! Nantara campus canteen ge hogi bisi kaafi kudiyoNa!</em>\n  (Thanks a lot Ramesh! Afterwards let's go to the campus canteen and drink hot coffee!)",
    "examTip": "Use friendly collegiate language suitable for student peers.",
    "starred": false,
    "mastered": false
  },
  {
    "id": "card-extra-371",
    "subjectId": "kan",
    "unit": 5,
    "pyqTag": "\ud83c\udfaf Practice Question \u2022 High Probability",
    "badgeType": "\ud83d\udcd0 Derivation / Formula",
    "badgeLabel": "Kannada Proverbs (Gaadegalu)",
    "question": "Explain four famous Kannada Proverbs (Gaadegalu) with their English transliteration, literal translation, and contextual life meaning: (i) Kaikadadare baayi mosaru, (ii) Gaadheye vedhakke samana, (iii) Kumbhaarange varsha, doNNege nimisha, (iv) Hasigeyiddhashtu kaalu chaachu.",
    "hint": "Proverbs embody cultural wisdom. Kaikadadare baayi mosaru = Hard work brings sweet rewards. Hasigeyiddhashtu kaalu chaachu = Cut your coat according to your cloth.",
    "answer": "<strong>Four Famous Kannada Proverbs (Gaadegalu):</strong>\n1. <strong>Kaikadadare baayi mosaru (\u0c95\u0cc8 \u0c95\u0cc6\u0cb8\u0cb0\u0cbe\u0ca6\u0cb0\u0cc6 \u0cac\u0cbe\u0caf\u0cbf \u0cae\u0cca\u0cb8\u0cb0\u0cc1):</strong>\n   \u2022 <em>Literal:</em> If your hands get muddy, your mouth gets curds.\n   \u2022 <em>Meaning:</em> Hard work and honest physical labor lead to sweet and satisfying rewards. No pain, no gain.\n\n2. <strong>Gaadheye vedhakke samana (\u0c97\u0cbe\u0ca6\u0cc6 \u0cb5\u0cc7\u0ca6\u0c95\u0ccd\u0c95\u0cc6 \u0cb8\u0cae\u0cbe\u0ca8):</strong>\n   \u2022 <em>Literal:</em> A proverb is equivalent to the sacred Vedas.\n   \u2022 <em>Meaning:</em> Traditional folklore proverbs reflect eternal truths tested by generations, just like Vedic wisdom.\n\n3. <strong>Kumbhaarange varsha, doNNege nimisha (\u0c95\u0cc1\u0c82\u0cac\u0cbe\u0cb0\u0ca8\u0cbf\u0c97\u0cc6 \u0cb5\u0cb0\u0cc1\u0cb7, \u0ca6\u0cca\u0ca3\u0ccd\u0ca3\u0cc6\u0c97\u0cc6 \u0ca8\u0cbf\u0cae\u0cbf\u0cb7):</strong>\n   \u2022 <em>Literal:</em> A year for the potter, a minute for the cudgel.\n   \u2022 <em>Meaning:</em> Creating something valuable requires enormous patience and time, but destroying it takes only a reckless second.\n\n4. <strong>Hasigeyiddhashtu kaalu chaachu (\u0cb9\u0cbe\u0cb8\u0cbf\u0c97\u0cc6\u0caf\u0cbf\u0ca6\u0ccd\u0ca6\u0cb7\u0ccd\u0c9f\u0cc1 \u0c95\u0cbe\u0cb2\u0cc1 \u0c9a\u0cbe\u0c9a\u0cc1):</strong>\n   \u2022 <em>Literal:</em> Stretch your legs only as far as your mattress extends.\n   \u2022 <em>Meaning:</em> Live within your financial means; cut your coat according to your cloth.",
    "examTip": "Proverbs test your cultural grasp in HSCP16K/26K; always give the literal translation followed by moral application.",
    "starred": false,
    "mastered": false
  }
];

const RIT_NOTES_DATA = {
  "chem": {
    "officialLinks": [
      {
        "name": "Official RIT Student Portal (SIS)",
        "url": "https://parents.msrit.edu/"
      },
      {
        "name": "MSRIT Library E-Resources & DSpace",
        "url": "http://msrit-dspace.dlibrary.org/"
      },
      {
        "name": "Chemistry Cycle VTU Syllabus Copy (ECE)",
        "url": "https://www.msrit.edu/academics/syllabus.html"
      }
    ],
    "units": {
      "1": {
        "title": "Electrode Systems & Energy Storage Devices",
        "cheatSheet": [
          "Nernst Eq: E = E\u00b0 + (0.0591/n) log10 [M\u207f\u207a] at 298 K",
          "Concentration Cell: E_cell = (0.0591/n) log10 (C2/C1) where C2 > C1",
          "Calomel Half-Cell: Pt | Hg | Hg2Cl2(s) | KCl(sat.) -> E = +0.244 V",
          "SOFC Electrolyte: Yttria-Stabilized Zirconia (YSZ) conducting O\u00b2\u207b at 800-1000\u00b0C",
          "Na-ion advantage: Al current collector at both anode and cathode (Na doesn't alloy with Al)"
        ],
        "notesMarkdown": "### High-Yield Unit 1 Revision Notes\n\n#### 1. Reference Electrodes:\n* Primary Reference: Standard Hydrogen Electrode (SHE), potential arbitrary 0.00 V.\n* Secondary Reference: Saturated Calomel Electrode (SCE, +0.244 V) and Silver-Silver Chloride electrode (+0.222 V).\n\n#### 2. Fuel Cells:\n* Solid Oxide Fuel Cell (SOFC) operates at high temperatures (800-1000\u00b0C), eliminating the need for expensive noble-metal (Pt) catalysts. Anode: Ni-YSZ; Cathode: LSM.\n* Water is the primary exhaust product when pure H\u2082 is used.\n\n#### 3. Modern Secondary Batteries:\n* **Na-ion Battery:** Hard carbon anode, NaMO\u2082 cathode. Rocking chair intercalation mechanism. Eliminates scarce cobalt and expensive copper."
      },
      "2": {
        "title": "Corrosion Science & Electrochemical Sensors",
        "cheatSheet": [
          "CPR = (K * W) / (D * A * T) [K = 534, W in mg, D in g/cm\u00b3, A in in\u00b2, T in hours]",
          "Rust Formula: Fe2O3 \u00b7 xH2O (Hydrated ferric oxide)",
          "Differential Aeration: Less aerated area = Anode (corrodes); More aerated = Cathode",
          "Beer-Lambert's Law: A = \u03b5 \u00b7 c \u00b7 l (Colorimeter: Cu\u00b2\u207a with NH\u2084OH -> [Cu(NH\u2083)\u2084]\u00b2\u207a at 620 nm)",
          "Anodization of Al: Anode = Al in 15% H\u2082SO\u2084, forms porous protective Al\u2082O\u2083 oxide film"
        ],
        "notesMarkdown": "### High-Yield Unit 2 Revision Notes\n\n#### 1. Theory of Corrosion:\n* Anodic dissolution: $M \\rightarrow M^{n+} + ne^-$\n* Cathodic reduction (oxygen absorption): $O_2 + 2H_2O + 4e^- \\rightarrow 4OH^-$\n* Galvanic series dictates which metal acts as anode when dissimilar metals touch.\n\n#### 2. Sensors:\n* **Potentiometric Sensors:** Measure EMF under zero current flow (indicator + reference electrode).\n* **Colorimetric Sensors:** Optical absorbance proportional to analyte concentration."
      },
      "3": {
        "title": "Polymers, Display Materials & Solar Cells",
        "cheatSheet": [
          "Number-Average: Mn = \u03a3(Ni * Mi) / \u03a3(Ni)",
          "Weight-Average: Mw = \u03a3(Ni * Mi\u00b2) / \u03a3(Ni * Mi) [Mw >= Mn always]",
          "Polydispersity Index: PDI = Mw / Mn",
          "QD Bandgap: Eg(QD) = Eg(bulk) + (\u210f\u00b2\u03c0\u00b2 / 2m*R\u00b2)",
          "PMMA: Polymerization of Methyl Methacrylate via Benzoyl Peroxide"
        ],
        "notesMarkdown": "### High-Yield Unit 3 Revision Notes\n\n#### 1. Polymers & Glass Transition (Tg):\n* Factors raising $T_g$: Rigid aromatic backbone, bulky side pendants, intermolecular hydrogen bonding, crosslinking.\n* Factors lowering $T_g$: Flexible ether/silicone linkages, added plasticizers.\n\n#### 2. Third-Generation Photovoltaics (QDSSC):\n* Quantum dots (CdS, CdSe) absorb across tunable visible spectrum via quantum confinement. Polysulfide electrolyte regenerates oxidized dots."
      },
      "4": {
        "title": "Memory Materials & Display Devices",
        "cheatSheet": [
          "Thermotropic LC: Phase transitions driven strictly by temperature (Nematic -> Smectic -> Cholesteric -> Isotropic)",
          "OLED: Organic emissive layer emits light via electron-hole recombination; QLED uses inorganic quantum dot nanocrystals",
          "Pentacene: High hole mobility organic p-type semiconductor for thin-film transistors (TFTs)"
        ],
        "notesMarkdown": "### High-Yield Unit 4 Revision Notes\n\n#### 1. Liquid Crystals:\n* **Nematic:** Directional orientational order, no positional order.\n* **Smectic:** Both orientational and positional layer order.\n* **Cholesteric:** Chiral nematic phase arranged in a helical twist.\n\n#### 2. Memory Architectures:\n* Organic memory provides flexible, solution-processable, printed devices for wearable electronics."
      },
      "5": {
        "title": "Nanomaterials & E-Waste Management",
        "cheatSheet": [
          "Solution Combustion: Zn(NO3)2 (Oxidizer) + Glycine/Urea (Fuel) at 400\u00b0C -> ZnO Nanopowder",
          "Hydrothermal Synthesis: High temperature & pressure inside Teflon-lined autoclave for TiO\u2082",
          "Hazardous E-Waste Metals: Lead (solder), Cadmium (contacts), Mercury (relays), Hexavalent Cr",
          "Gold Recovery: Cyanide/Thiourea leaching -> Activated carbon adsorption -> Electrowinning"
        ],
        "notesMarkdown": "### High-Yield Unit 5 Revision Notes\n\n#### 1. Nanotechnology Synthesis:\n* Top-down: Ball milling, lithography.\n* Bottom-up: Sol-gel, hydrothermal, solution combustion.\n\n#### 2. E-Waste Lifecycle:\n* Basel Convention compliance for transboundary electronic waste shipments. Resource circularity via hydrometallurgical extraction."
      }
    }
  },
  "math": {
    "officialLinks": [
      {
        "name": "Official RIT Mathematics Syllabus",
        "url": "https://www.msrit.edu/academics/syllabus.html"
      },
      {
        "name": "NPTEL Advanced Engineering Mathematics",
        "url": "https://nptel.ac.in/courses/111105121"
      }
    ],
    "units": {
      "1": {
        "title": "Differential Calculus & Root Finding",
        "cheatSheet": [
          "Newton-Raphson: x_{n+1} = x_n - f(x_n)/f'(x_n) [Quadratic convergence p = 2]",
          "Regula-Falsi: x = (a*f(b) - b*f(a)) / (f(b) - f(a))",
          "Jacobian: J = \u2202(u,v,w)/\u2202(x,y,z); J = 0 implies functional dependence",
          "Taylor 2-Var: f(a+h, b+k) = f(a,b) + (h fx + k fy) + (1/2!)(h\u00b2 fxx + 2hk fxy + k\u00b2 fyy) + ..."
        ],
        "notesMarkdown": "### High-Yield Mathematics Unit 1 Notes\n* **Maxima/Minima of f(x, y):** Let $r = f_{xx}, s = f_{xy}, t = f_{yy}$. If $rt - s^2 > 0$ and $r < 0 \\implies$ Local Maximum; if $rt - s^2 > 0$ and $r > 0 \\implies$ Local Minimum; if $rt - s^2 < 0 \\implies$ Saddle point."
      },
      "2": {
        "title": "Vector Calculus & Multiple Integrals",
        "cheatSheet": [
          "Solenoidal: \u2207 \u00b7 F = 0 (Divergence is zero)",
          "Irrotational: \u2207 \u00d7 F = 0 (Curl is zero; implies F = \u2207\u03c6)",
          "Directional Derivative: D_u(\u03c6) = \u2207\u03c6 \u00b7 u\u0302",
          "Spherical Jacobians: dV = r\u00b2 sin\u03b8 dr d\u03b8 d\u03c6"
        ],
        "notesMarkdown": "### High-Yield Mathematics Unit 2 Notes\n* Orthogonality of Curvilinear Coordinates: Verify scale factors $h_1, h_2, h_3$ and mutual orthogonality $\\hat{e}_i \\cdot \\hat{e}_j = 0$ for $i \\ne j$."
      },
      "3": {
        "title": "Linear Systems, ODEs & Eigenvalues",
        "cheatSheet": [
          "Gauss-Seidel: Strict diagonal dominance |a_ii| > \u03a3_{j\u2260i} |a_ij| required",
          "LU Decomposition: A = L \u00b7 U with L having 1s on main diagonal (Doolittle)",
          "Rayleigh's Power Method: X_{k+1} = A \u00b7 X_k / \u03bb_{k+1} -> Dominant Eigenvalue"
        ],
        "notesMarkdown": "### High-Yield Mathematics Unit 3 Notes\n* First Order Linear ODE System: $\\vec{Y}' = A \\vec{Y} \\implies \\vec{Y}(t) = c_1 e^{\\lambda_1 t} \\vec{v}_1 + c_2 e^{\\lambda_2 t} \\vec{v}_2$."
      },
      "4": {
        "title": "Vector Spaces & Numerical Interpolation",
        "cheatSheet": [
          "Gram-Schmidt: v_k = u_k - \u03a3 [(u_k \u00b7 v_i)/(v_i \u00b7 v_i)] v_i",
          "Lagrange: y(x) = \u03a3 [L_i(x) * y_i], L_i(x) = \u03a0_{j\u2260i} (x - x_j)/(x_i - x_j)",
          "Newton Divided Diff: f[x0, x1] = (f(x1) - f(x0)) / (x1 - x0)"
        ],
        "notesMarkdown": "### High-Yield Mathematics Unit 4 Notes\n* Dimension & Basis: Row reduce $A$ to Row Echelon Form. Non-zero rows of R.E.F. form basis for Row Space; original pivot columns form basis for Column Space."
      },
      "5": {
        "title": "Linear Transformations & Numerical Calculus",
        "cheatSheet": [
          "Rank-Nullity Theorem: dim(V) = Rank(T) + Nullity(T)",
          "Simpson's 1/3 Rule: (h/3)[(y0 + yn) + 4(y1 + y3 + ...) + 2(y2 + y4 + ...)]",
          "Weddle's Rule: (3h/10)[y0 + 5y1 + y2 + 6y3 + y4 + 5y5 + 2y6 + ...]",
          "Runge-Kutta 4th Order: k1 = h*f(x,y), k2 = h*f(x+h/2, y+k1/2), k3 = h*f(x+h/2, y+k2/2), k4 = h*f(x+h, y+k3)"
        ],
        "notesMarkdown": "### High-Yield Mathematics Unit 5 Notes\n* Numerical ODE Methods: Euler is order 1; Modified Euler is order 2; Runge-Kutta 4th order is accurate to $O(h^4)$."
      }
    }
  },
  "cprog": {
    "officialLinks": [
      {
        "name": "Official C Programming Syllabus",
        "url": "https://www.msrit.edu/academics/syllabus.html"
      },
      {
        "name": "C Programming GNU Documentation",
        "url": "https://www.gnu.org/software/gnu-c-manual/"
      }
    ],
    "units": {
      "1": {
        "title": "Fundamentals, Data Types & Operators",
        "cheatSheet": [
          "Data Types: char (1B), int (4B), float (4B), double (8B)",
          "Precedence: () -> ++/-- -> */% -> +/- -> << >> -> < <= > >= -> == != -> && -> || -> ?:",
          "Storage Classes: auto (stack), register (CPU), static (data, retains value), extern (global)"
        ],
        "notesMarkdown": "### C Programming Unit 1 Notes\n* **Volatile Qualifier:** Informs compiler that variable value can change unexpectedly (hardware registers, interrupts); disables register caching."
      },
      "2": {
        "title": "Decision Branching & Looping Constructs",
        "cheatSheet": [
          "if-else ladder vs nested if",
          "switch(val): Requires integral type; break prevents fall-through",
          "while (entry-controlled, min 0) vs do-while (exit-controlled, min 1 execution)"
        ],
        "notesMarkdown": "### C Programming Unit 2 Notes\n* **Break vs Continue:** Break exits the innermost loop immediately; continue skips the remainder of current iteration and jumps to increment/condition."
      },
      "3": {
        "title": "1D/2D Arrays & String Operations",
        "cheatSheet": [
          "Matrix Addition: Validate row1 == row2 && col1 == col2",
          "String Functions: strlen(s), strcpy(d, s), strcat(d, s), strcmp(s1, s2)",
          "Strings end with '\\0' null character"
        ],
        "notesMarkdown": "### C Programming Unit 3 Notes\n* Array names act as constant pointers to their first element: `arr` equals `&arr[0]`."
      },
      "4": {
        "title": "Modular Functions & Recursion",
        "cheatSheet": [
          "Function Prototype: return_type func_name(param_types);",
          "Call by Value: Copies value; changes do not affect caller",
          "Call by Reference: Passes addresses; modifies actual arguments"
        ],
        "notesMarkdown": "### C Programming Unit 4 Notes\n* Recursion must have a well-defined base case to prevent stack overflow."
      },
      "5": {
        "title": "Pointers, Structures & Dynamic Memory",
        "cheatSheet": [
          "malloc: void* malloc(size_t size) -> uninitialized bytes",
          "calloc: void* calloc(n, size) -> zero-initialized bytes",
          "free: Releases dynamically allocated memory",
          "Structure vs Union: Struct allocates memory for all members; Union shares single largest block"
        ],
        "notesMarkdown": "### C Programming Unit 5 Notes\n* Arrow Operator: `ptr->member` is equivalent to `(*ptr).member`."
      }
    }
  },
  "ai": {
    "officialLinks": [
      {
        "name": "MSRIT AI Course Portal",
        "url": "https://www.msrit.edu/academics/syllabus.html"
      }
    ],
    "units": {
      "1": {
        "title": "AI Foundations, Search & Problem Solving",
        "cheatSheet": [
          "BFS: Queue, Complete, Optimal (uniform costs), Space O(b^d)",
          "DFS: Stack, Not Complete, Not Optimal, Space O(b*m)",
          "AI Spectrum: Narrow/Weak AI -> General/Strong AI -> Super AI"
        ],
        "notesMarkdown": "### AI Unit 1 Notes\n* PEAS Specification: Performance Measure, Environment, Actuators, Sensors."
      },
      "2": {
        "title": "Prompt Engineering & Generative AI",
        "cheatSheet": [
          "Zero-shot: No prior examples",
          "One-shot: 1 demonstration",
          "Few-shot: 2-5 demonstrations",
          "System Prompt: Establishes behavior boundaries, schema & persona"
        ],
        "notesMarkdown": "### AI Unit 2 Notes\n* Hallucination Mitigation: Constrain outputs with few-shot examples and verification prompts."
      },
      "3": {
        "title": "Machine Learning Core & Classifiers",
        "cheatSheet": [
          "Naive Bayes: P(C|X) = [P(X|C) * P(C)] / P(X) (assumes feature independence)",
          "SVM: Finds maximal margin hyperplane separating classes via support vectors",
          "ANN Layers: Input Layer -> Hidden Layers -> Output Layer with non-linear activation"
        ],
        "notesMarkdown": "### AI Unit 3 Notes\n* Supervised (labeled data), Unsupervised (unlabeled clustering), Reinforcement (rewards/penalties)."
      },
      "4": {
        "title": "Expert Systems, AIaaS & AIoT",
        "cheatSheet": [
          "Expert System: Knowledge Base + Inference Engine + User Interface",
          "AIaaS: Cloud-hosted machine learning APIs",
          "AIoT: Artificial Intelligence + Internet of Things edge analytics"
        ],
        "notesMarkdown": "### AI Unit 4 Notes\n* Ethical AI: Mitigating algorithmic bias, maintaining transparency, ensuring data privacy."
      },
      "5": {
        "title": "Robotics, Drones & Applied AI",
        "cheatSheet": [
          "Work Volume: Cartesian, Cylindrical, Spherical, Articulated SCARA",
          "Degrees of Freedom (DOF): Number of independent joint motions",
          "Precision Agriculture: Drone multispectral imaging for NDVI crop health analysis"
        ],
        "notesMarkdown": "### AI Unit 5 Notes\n* Low-Code / No-Code platforms accelerate model deployment for domain experts."
      }
    }
  },
  "mech": {
    "officialLinks": [
      {
        "name": "MSRIT Mechanical Engineering Dept",
        "url": "https://www.msrit.edu/academics/syllabus.html"
      }
    ],
    "units": {
      "1": {
        "title": "Energy Resources & Engineering Materials",
        "cheatSheet": [
          "Power Plant Head: P = \u03b7 * \u03c1 * g * Q * H",
          "Surge Tank: Protects penstock from water hammer shocks",
          "Ferrous (contains iron: Cast iron, Steel) vs Non-ferrous (Al, Cu, Ti)"
        ],
        "notesMarkdown": "### Mechanical Unit 1 Notes\n* Nuclear Power Plant: Chain reaction controlled by control rods (boron/cadmium) in pressurized reactor."
      },
      "2": {
        "title": "Machine Tools, Machining & 3D Printing",
        "cheatSheet": [
          "Lathe Operations: Turning, Facing, Knurling, Taper turning, Thread cutting",
          "Up Milling (cutter opposes feed) vs Down Milling (cutter moves with feed)",
          "3D Printing: Additive manufacturing layer by layer (FDM, SLA, SLS)"
        ],
        "notesMarkdown": "### Mechanical Unit 2 Notes\n* Taper turning via compound rest: $\\tan \\alpha = \\frac{D - d}{2L}$."
      },
      "3": {
        "title": "IC Engines, Refrigeration & Air Conditioning",
        "cheatSheet": [
          "Indicated Power: IP = (P_m * L * A * n) / 60 [n = N/2 for 4-stroke]",
          "Brake Power: BP = (2 * \u03c0 * N * T) / 60000",
          "Mechanical Eff: \u03b7_m = BP / IP; Friction Power: FP = IP - BP",
          "VCRS Cycle: Compressor -> Condenser -> Expansion Valve -> Evaporator"
        ],
        "notesMarkdown": "### Mechanical Unit 3 Notes\n* 4-Stroke Cycle: Suction, Compression, Power, Exhaust strokes over 2 crankshaft revolutions."
      },
      "4": {
        "title": "Power Transmission & Metal Joining",
        "cheatSheet": [
          "Open Belt Length: L = \u03c0(r1 + r2) + 2x + (r1 - r2)\u00b2 / x",
          "Cross Belt Length: L = \u03c0(r1 + r2) + 2x + (r1 + r2)\u00b2 / x",
          "Train Value: Product of teeth on driven gears / Product of teeth on driving gears",
          "Joining: Welding (fusion), Brazing (>450\u00b0C), Soldering (<450\u00b0C)"
        ],
        "notesMarkdown": "### Mechanical Unit 4 Notes\n* Arc welding uses electric arc between electrode and workpiece reaching ~4000\u00b0C."
      },
      "5": {
        "title": "Electric Vehicles & Industrial Robotics",
        "cheatSheet": [
          "EV vs HEV: EV runs purely on battery; HEV combines ICE with electric motor",
          "Regenerative Braking: Converts kinetic energy back into electrical energy during braking",
          "Robot Anatomy: Base, Links, Joints (rotational, prismatic), End effector"
        ],
        "notesMarkdown": "### Mechanical Unit 5 Notes\n* Sensor integration: Proximity, ultrasonic, optical vision, and tactile force sensors."
      }
    }
  },
  "const": {
    "officialLinks": [
      {
        "name": "Constitution of India Full Text Portal",
        "url": "https://legislative.gov.in/constitution-of-india/"
      }
    ],
    "units": {
      "1": {
        "title": "Constitutional History & Preamble Philosophy",
        "cheatSheet": [
          "Adopted: 26 Nov 1949; Commenced: 26 Jan 1950",
          "Preamble: Sovereign, Socialist, Secular, Democratic, Republic",
          "42nd Amendment (1976): Added Socialist, Secular, and Integrity"
        ],
        "notesMarkdown": "### Constitution Unit 1 Notes\n* Preamble is the introductory statement reflecting the core philosophy and objective of the Constitution."
      },
      "2": {
        "title": "Fundamental Rights & Fundamental Duties",
        "cheatSheet": [
          "Art 14-18: Right to Equality",
          "Art 19: Six Freedoms (Speech, Assembly, Association, Movement, Residence, Profession)",
          "Art 20: Protection against double jeopardy & self-incrimination",
          "Art 21: Protection of life and personal liberty",
          "Art 51A: 11 Fundamental Duties (added by 42nd & 86th Amendments)"
        ],
        "notesMarkdown": "### Constitution Unit 2 Notes\n* Reasonable restrictions on Article 19(1)(a) include sovereignty, integrity, security of India, and public order."
      },
      "3": {
        "title": "Union Executive, Parliament & Supreme Court Writs",
        "cheatSheet": [
          "Art 32: Constitutional Remedies (Habeas Corpus, Mandamus, Prohibition, Certiorari, Quo-Warranto)",
          "President: Executive head, supreme commander of armed forces, veto power",
          "Parliament: Lok Sabha (House of the People) & Rajya Sabha (Council of States)"
        ],
        "notesMarkdown": "### Constitution Unit 3 Notes\n* The Supreme Court acts as the final interpreter and guardian of the Constitution."
      },
      "4": {
        "title": "State Government, Elections & Emergencies",
        "cheatSheet": [
          "Art 352: National Emergency (War, external aggression, armed rebellion)",
          "Art 356: State Emergency (President's Rule)",
          "Art 360: Financial Emergency",
          "Art 324: Election Commission of India"
        ],
        "notesMarkdown": "### Constitution Unit 4 Notes\n* 44th Amendment replaced 'internal disturbance' with 'armed rebellion' for Article 352."
      },
      "5": {
        "title": "Engineering Ethics & Professional Responsibility",
        "cheatSheet": [
          "Impediments: Self-interest, fear, ignorance, microscopic vision, groupthink",
          "Whistleblowing: Exposing unsafe/unethical practices after internal channels fail",
          "Safety & Risk: Codes of ethics (IEEE, NSPE) mandate public safety as paramount"
        ],
        "notesMarkdown": "### Constitution Unit 5 Notes\n* Engineers must hold paramount the safety, health, and welfare of the public."
      }
    }
  },
  "eng": {
    "officialLinks": [
      {
        "name": "VTU Communicative English Curriculum",
        "url": "https://vtu.ac.in/"
      }
    ],
    "units": {
      "1": {
        "title": "Communication Fundamentals, Proxemics & Persuasion",
        "cheatSheet": [
          "Proxemics: Intimate (0-1.5ft), Personal (1.5-4ft), Social (4-12ft), Public (>12ft)",
          "Persuasion: Ethos (Credibility), Pathos (Emotion), Logos (Logic & Evidence)",
          "Vocalics: Intonation, stress, rhythm, pitch, pacing"
        ],
        "notesMarkdown": "### English Unit 1 Notes\n* Effective non-verbal communication accounts for over 65% of interpersonal communication."
      },
      "2": {
        "title": "Self-Awareness, SWOC Analysis & Adaptability",
        "cheatSheet": [
          "SWOC: Strengths, Weaknesses (Internal) | Opportunities, Challenges (External)",
          "Empathy: Cognitive and emotional understanding of team members' perspectives",
          "Stress Reduction: Deep breathing, PMR, structured breaks"
        ],
        "notesMarkdown": "### English Unit 2 Notes\n* Self-reflection promotes emotional intelligence (EQ), a primary trait evaluated in leadership hiring."
      },
      "3": {
        "title": "Goal Setting (SMART), Time Management & 5 Whys",
        "cheatSheet": [
          "SMART: Specific, Measurable, Achievable, Relevant, Time-bound",
          "Eisenhower: Q1 (Do), Q2 (Schedule/Focus), Q3 (Delegate), Q4 (Eliminate)",
          "5 Whys: Iterative root cause analysis technique"
        ],
        "notesMarkdown": "### English Unit 3 Notes\n* Quadrant II activities prevent project emergencies and foster deep work."
      },
      "4": {
        "title": "Digital Communication, Netiquette & Problem Solving",
        "cheatSheet": [
          "Synchronous (Real-time calls) vs Asynchronous (Emails, docs, issues)",
          "Netiquette: Avoid ALL CAPS (shouting), use Bcc for external vendor privacy",
          "Ishikawa / Fishbone: Visual root cause mapping for deadline delays"
        ],
        "notesMarkdown": "### English Unit 4 Notes\n* Asynchronous communication allows thoughtful reflection and cross-timezone collaboration."
      },
      "5": {
        "title": "Technical Writing, Resumes & Interview Mastery",
        "cheatSheet": [
          "Resume Format: Reverse-chronological or Hybrid/functional",
          "Cover Letter: Specific role alignment, project proof points, enthusiastic call-to-action",
          "Interview Prep: STAR Method (Situation, Task, Action, Result)"
        ],
        "notesMarkdown": "### English Unit 5 Notes\n* Win-Win negotiation creates collaborative solutions where all team stakeholders succeed."
      }
    }
  },
  "phys": {
    "title": "Quantum Physics and Applications Notes",
    "code": "25PYC12 / PYE22",
    "units": {
      "1": {
        "title": "Unit 1: Lasers & Optical Fiber Communication",
        "cheatSheet": [
          "Einstein Coeff: B12 = B21 (absorption = stimulated emission probability); A21/B21 = (8*pi*h*nu^3)/c^3",
          "He-Ne Laser: He:Ne = 10:1; 632.8 nm (red light) transition from 3s to 2p of Neon",
          "Numerical Aperture: NA = sqrt(n1^2 - n2^2) = n1 * sqrt(2*Delta); Acceptance angle theta_a = arcsin(NA)",
          "Fiber Attenuation: alpha = (10/L) * log10(Pin / Pout) [dB/km]; Rayleigh scattering loss scales as 1/lambda^4"
        ],
        "notesMarkdown": "Comprehensive review of spontaneous vs stimulated emission, optical pumping, resonant collision transfer in gas lasers, waveguide total internal reflection, fractional refractive index difference, and low-loss optical windows at 1310 nm and 1550 nm."
      },
      "2": {
        "title": "Unit 2: Quantum Mechanics & Wave Equations",
        "cheatSheet": [
          "de Broglie wavelength: lambda = h / p = h / sqrt(2*m*E)",
          "Time-independent Schrodinger 1D: d^2 psi/dx^2 + (2m/hbar^2)(E - V) psi = 0",
          "1D Box Eigenvalues: En = (n^2 * h^2) / (8 * m * L^2); Normalized eigenfunction: psi_n(x) = sqrt(2/L) * sin(n*pi*x / L)",
          "Heisenberg Principle: Delta x * Delta p >= hbar / 2; proves electrons cannot reside inside atomic nucleus"
        ],
        "notesMarkdown": "Step-by-step mathematical foundations of quantum mechanics, wave packets, Born's probability interpretation |psi|^2, infinite potential box boundary conditions, and uncertainty principle energy calculations."
      },
      "3": {
        "title": "Unit 3: Electrical Conductors & Semiconductors",
        "cheatSheet": [
          "Density of states in metals: g(E) dE = (4*pi / h^3) * (2m)^(3/2) * E^(1/2) dE",
          "Fermi-Dirac function: f(E) = 1 / [exp((E - EF)/(k*T)) + 1]; at T = 0 K, f(E) is a step function",
          "Hall Effect: RH = -1/(n*e) for electrons (n-type); RH = +1/(p*e) for holes (p-type); VH = (B * I) / (n * e * t)",
          "Mobility & Conductivity: sigma = n * e * mu_e; Hall angle tan(theta_H) = mu_H * B"
        ],
        "notesMarkdown": "Free electron theory, density of available quantum states, Fermi energy determination, Hall voltage derivations, and distinguishing semiconductor carrier types experimentally."
      },
      "4": {
        "title": "Unit 4: Superconductivity & Josephson Devices",
        "cheatSheet": [
          "Meissner Effect: B = 0, chi = -1 (perfect diamagnetism); Critical magnetic field Hc(T) = H0 * [1 - (T/Tc)^2]",
          "Silsbee Effect: Ic = 2 * pi * r * Hc; critical current generates self-induced critical magnetic field",
          "BCS Theory: Electron-phonon-electron attraction forms Cooper pairs; energy gap Eg(0) = 3.52 * k_B * Tc",
          "Josephson Junctions: DC Josephson I = Ic * sin(delta_phi); AC Josephson f = (2 * e * V) / h (483.6 MHz/microvolt)"
        ],
        "notesMarkdown": "Zero electrical resistance, isotope effect, London penetration depth, Type-I vs Type-II vortex states, and DC SQUID magnetometers for ultra-sensitive magnetic field detection."
      },
      "5": {
        "title": "Unit 5: Quantum Computing & Qubit Gates",
        "cheatSheet": [
          "Qubit state: |psi> = alpha |0> + beta |1>; normalization |alpha|^2 + |beta|^2 = 1",
          "Bloch Sphere coordinates: |psi> = cos(theta/2) |0> + e^(i*phi) * sin(theta/2) |1>",
          "Pauli Matrices: X = [[0,1],[1,0]] (NOT), Y = [[0,-i],[i,0]], Z = [[1,0],[0,-1]]",
          "Hadamard Gate H: maps |0> to (|0> + |1>)/sqrt(2); Bell State |Phi+> = (|00> + |11>)/sqrt(2)"
        ],
        "notesMarkdown": "Principles of quantum superposition, quantum parallelism, single and two-qubit logic gates (CNOT, Phase-S, T-gate), quantum entanglement generation, and No-Cloning theorem."
      }
    }
  },
  "pyprog": {
    "title": "Python Programming Notes",
    "code": "25PLC24",
    "units": {
      "1": {
        "title": "Unit 1: Python Fundamentals, Errors & Loops",
        "cheatSheet": [
          "Error Types: Syntax (parsing), Runtime (ZeroDivision, NameError), Semantic (logical bug)",
          "Operator Precedence (PEMDAS): () > ** > * / // % > + - > Bitwise > Comparisons > not > and > or",
          "Loop Control: break (exit), continue (skip iteration), pass (no-op)",
          "for-else / while-else: else executes only if loop did NOT terminate via break"
        ],
        "notesMarkdown": "Python dynamic typing, mutable vs immutable variables, memory IDs, indentation rules, short-circuit boolean evaluation, and structured loop idioms."
      },
      "2": {
        "title": "Unit 2: Strings, Sequences & File I/O",
        "cheatSheet": [
          "String Slicing: str[start:stop:step]; reverse with s[::-1]",
          "Tuples: Immutable, hashable, can be dict keys; Lists: Mutable, dynamic arrays",
          "List Comprehension: [expr for x in iterable if cond]; map() and filter() equivalents",
          "File I/O: with open('file.txt', 'r') as f: lines = f.readlines(); guaranteed auto-close"
        ],
        "notesMarkdown": "String methods (.split, .join, .strip, .find), sequence unpacking, list methods (.append, .extend, .pop, .sort), and context-managed file operations."
      },
      "3": {
        "title": "Unit 3: Dictionaries, NumPy & Web Requests",
        "cheatSheet": [
          "Dictionaries: Hash table, O(1) average lookup; keys must be immutable (str, int, tuple)",
          "Dict Methods: .get(key, default), .keys(), .values(), .items(), .setdefault()",
          "NumPy Arrays: ndarray with uniform dtype; boolean masking arr[arr > 0]",
          "Broadcasting: Trailing dimensions compared right-to-left; compatible if equal or 1"
        ],
        "notesMarkdown": "Set operations (union, intersection, difference), NumPy 2D slicing, vectorized arithmetic (@ for matrix multiplication vs * for element-wise), and requests library basics."
      },
      "4": {
        "title": "Unit 4: Modular Programming & OOP Classes",
        "cheatSheet": [
          "Variable Args: *args collects positional tuple; **kwargs collects keyword dict",
          "LEGB Scope Rule: Local -> Enclosing -> Global -> Built-in",
          "Mutable Default Trap: def fn(x, lst=None): if lst is None: lst = []",
          "OOP: class Car: def __init__(self, brand): self.brand = brand; super().__init__()"
        ],
        "notesMarkdown": "Object-oriented paradigm in Python, self reference, encapsulation (_protected, __private name mangling), inheritance, C3 linearization MRO, and modular import statements."
      },
      "5": {
        "title": "Unit 5: Operator Overloading & Exceptions",
        "cheatSheet": [
          "Dunder Methods: __add__ (+), __sub__ (-), __mul__ (*), __str__ (user string), __repr__",
          "Exception Handling: try -> except (SpecificError) -> else (no error) -> finally (always runs)",
          "Custom Exceptions: class MyError(Exception): pass; raise MyError('msg')",
          "Generators: yield produces lazy stream, O(1) memory footprint; __iter__ and __next__ protocol"
        ],
        "notesMarkdown": "Operator overloading implementation for 2D vectors, complete exception hierarchy, context management protocol (__enter__, __exit__), and generator pipeline architectures."
      }
    }
  },
  "kan": {
    "title": "Kannada Kali / Communicative Kannada Notes",
    "code": "HSCP16K / HSCP26K / AR109K",
    "units": {
      "1": {
        "title": "Unit 1: Introduction to Karnataka & Culture",
        "cheatSheet": [
          "Self-Introduction: Nanna hesaru ..., Naanu ... inda bandiddene, Naanu Ramaiah engineering college nalli oduttiddene",
          "Famous Places: Mysuru (Aramane/Palace), Hampi (Vijayanagara shilpakale), Bengaluru (Garden City / IT Hub)",
          "Daily Routine: Naanu beligge eeluttene, snaana maaduttene, thindi thinnuttene, college ge hoguttene",
          "Greetings: Namaskara (Hello), Dhanyavadagalu (Thank you), Shubhadina (Good day)"
        ],
        "notesMarkdown": "Conversational introductions in Roman script, historical heritage centers of Karnataka, basic polite address forms, and everyday student routines."
      },
      "2": {
        "title": "Unit 2: Daily Conversation & Word Ordering",
        "cheatSheet": [
          "Sentence Structure: Kannada follows SOV (Subject - Object - Verb) syntax",
          "Question Words: Yaaru (Who), Yaavudu (Which), Yelli (Where), Yaake (Why), Hege (How), Eshtu (How much), Yaavaaga (When)",
          "Market Dialogue: Bele eshtu? (How much is price?), Ondu kg kodi (Give 1 kg), Thagolli (Please take)",
          "Directions: Poorva (East), Pashchima (West), Utthara (North), DakshiNa (South)"
        ],
        "notesMarkdown": "Sentence rearranging drills, shopping dialogues at vegetable vendors and hotels, enquiring travel routes, and polite conversational phrases."
      },
      "3": {
        "title": "Unit 3: Vocabulary, Adjectives & Meanings",
        "cheatSheet": [
          "Adjectives: doDDa (big), chikka (small), hosa (new), haleya (old), sundara (beautiful), sihi (sweet), sulabha (easy)",
          "Kinship Terms: Thande/Appa (father), Thaayi/Amma (mother), Anna (elder brother), Thamma (younger brother), Akka (elder sister), Thangi (younger sister)",
          "Days of Week: Bhanuvaara (Sun), Somavaara (Mon), Mangalavaara (Tue), Budhavaara (Wed), Guruvaara (Thu), Shukravaara (Fri), Shanivaara (Sat)",
          "Time: Eega samaya eshtu? (What is the time now?)"
        ],
        "notesMarkdown": "Descriptive adjective vocabulary, family kinship relationships, calendar terms, and forming simple descriptive noun phrases."
      },
      "4": {
        "title": "Unit 4: Kannada Numbers, Fruits & Vegetables",
        "cheatSheet": [
          "Numbers: 1=Ondu, 2=Eradu, 3=Mooru, 4=Naalku, 5=Aidu, 10=Hattu, 20=Ippattu, 50=Aivattu, 100=Nooru",
          "Exam Numbers: 42=NalavatteraDu, 54=Aivattnaalku, 89=Embattombattu, 97=TombatteeLu, 108=NUtrenTu",
          "Fruits: Seebu (apple), BaaLehaNNu (banana), Maavina haNNu (mango), Draakshi (grapes), Kittale (orange)",
          "Vegetables: AalugaDDe (potato), EeruLLi (onion), BenDekaayi (okra), BadaNekaayi (brinjal)"
        ],
        "notesMarkdown": "Number formation rules from 1 to 200, counting currency in Kannada, naming fruits and vegetables, and market ordering vocabulary."
      },
      "5": {
        "title": "Unit 5: Kannada Alphabet & Writing Skills",
        "cheatSheet": [
          "Kannada Varnamale: Exactly 49 letters total",
          "Swaragalu (13 vowels): Hrasva (6 short: a, i, u, ru, e, o) & Deergha (7 long: aa, ee, oo, ae, ai, o, au)",
          "Yogavahakagalu (2 letters): Anuswara (am \u0c82), Visarga (aha \u0c83)",
          "Vyanjanagalu (34 consonants): 25 Vargeeya (5 vargas) + 9 Avargeeya (ya to La)",
          "Proverbs: Kaikadadare baayi mosaru (No pain no gain); Hasigeyiddhashtu kaalu chaachu (Cut coat according to cloth)"
        ],
        "notesMarkdown": "Grammatical classification of Kannada letters, phonetics of consonants, verb tenses (Varthamana, Bhootha, Bhavishyat), and interpretation of classic Kannada proverbs."
      }
    }
  }
};

const QUIZ_DATA = [
  {
    "id": "q-1",
    "subjectId": "chem",
    "unit": 1,
    "pyqRef": "SEE July 2026",
    "question": "At 298 K, what is the slope factor (2.303 RT / F) in the Nernst equation for a single electron transfer (n = 1)?",
    "options": [
      "0.0295 V",
      "0.0591 V",
      "0.0831 V",
      "0.1182 V"
    ],
    "correctIndex": 1,
    "explanation": "At T = 298 K, (2.303 * R * T) / F = (2.303 * 8.314 * 298) / 96485 = 0.0591 V. For n electrons, this becomes 0.0591/n V."
  },
  {
    "id": "q-2",
    "subjectId": "chem",
    "unit": 1,
    "pyqRef": "SEE July 2026, CIE-1",
    "question": "What is the primary ionic charge carrier that migrates across the solid ceramic YSZ electrolyte in a Solid Oxide Fuel Cell (SOFC)?",
    "options": [
      "Protons (H\u207a)",
      "Oxide ions (O\u00b2\u207b)",
      "Electrons (e\u207b)",
      "Zirconium ions (Zr\u2074\u207a)"
    ],
    "correctIndex": 1,
    "explanation": "In SOFC, the dense YSZ (Yttria-Stabilized Zirconia) ceramic membrane selectively conducts oxide ions (O\u00b2\u207b) from the cathode to the anode at 800-1000\u00b0C."
  },
  {
    "id": "q-3",
    "subjectId": "chem",
    "unit": 2,
    "pyqRef": "CIE-1 2026",
    "question": "In differential aeration corrosion, which region acts as the anode undergoing accelerated metal dissolution?",
    "options": [
      "The region exposed to higher dissolved oxygen concentration",
      "The region with lower dissolved oxygen concentration",
      "The region with the highest electrical resistance",
      "The region with the largest surface area"
    ],
    "correctIndex": 1,
    "explanation": "According to differential aeration theory, the less aerated (oxygen-deprived) area develops lower potential and acts as the ANODE, while the well-aerated area acts as the CATHODE."
  },
  {
    "id": "q-4",
    "subjectId": "chem",
    "unit": 3,
    "pyqRef": "SEE July 2026, CIE-2",
    "question": "How does the bandgap energy (Eg) of a quantum dot change as its physical diameter decreases below its exciton Bohr radius?",
    "options": [
      "Bandgap energy decreases",
      "Bandgap energy increases",
      "Bandgap energy remains constant",
      "Bandgap energy drops to zero"
    ],
    "correctIndex": 1,
    "explanation": "Due to quantum confinement, as quantum dot particle size decreases, energy levels become discrete and the bandgap Eg increases (blue shift in optical absorption)."
  },
  {
    "id": "q-5",
    "subjectId": "math",
    "unit": 1,
    "pyqRef": "SEE July 2026, CIE-1",
    "question": "What is the order of convergence of the Newton-Raphson root-finding iterative method?",
    "options": [
      "Linear (1)",
      "Quadratic (2)",
      "Cubic (3)",
      "Superlinear (1.618)"
    ],
    "correctIndex": 1,
    "explanation": "Newton-Raphson has quadratic convergence (order p = 2), meaning the number of correct decimal places approximately doubles with each iteration near a simple root."
  },
  {
    "id": "q-6",
    "subjectId": "math",
    "unit": 2,
    "pyqRef": "SEE Feb 2026",
    "question": "A vector field F is defined to be solenoidal if which of the following conditions is satisfied?",
    "options": [
      "\u2207 \u00d7 F = 0",
      "\u2207 \u00b7 F = 0",
      "\u2207\u00b2 F = 0",
      "F \u00b7 dr = 0"
    ],
    "correctIndex": 1,
    "explanation": "A vector field F is solenoidal if its divergence is zero (\u2207 \u00b7 F = 0), representing zero net flux across any closed surface. If \u2207 \u00d7 F = 0, it is irrotational."
  },
  {
    "id": "q-7",
    "subjectId": "math",
    "unit": 3,
    "pyqRef": "SEE July 2026, CIE-2",
    "question": "Which condition is strictly required to guarantee the convergence of the Gauss-Seidel iterative method for a linear system Ax = B?",
    "options": [
      "A must be singular",
      "A must be strictly diagonally dominant",
      "All eigenvalues of A must be negative",
      "Determinant of A must be zero"
    ],
    "correctIndex": 1,
    "explanation": "Strict diagonal dominance (|a_ii| > sum_{j\u2260i} |a_ij|) is the sufficient condition that guarantees Gauss-Seidel convergence regardless of the initial starting vector."
  },
  {
    "id": "q-8",
    "subjectId": "cprog",
    "unit": 1,
    "pyqRef": "SEE Feb 2026, CIE-1",
    "question": "In C programming, what will be the output of evaluating the expression: result = 7 / 2 when both operands are integers and result is a float?",
    "options": [
      "3.500000",
      "3.000000",
      "4.000000",
      "Compiler Syntax Error"
    ],
    "correctIndex": 1,
    "explanation": "Integer division 7 / 2 performs truncation and yields integer 3. When assigned to a float variable, it promotes to 3.000000, NOT 3.5!"
  },
  {
    "id": "q-9",
    "subjectId": "cprog",
    "unit": 2,
    "pyqRef": "SEE Feb 2026",
    "question": "What is the minimum number of times the body of a C 'do-while' loop is executed, even if the condition is false initially?",
    "options": [
      "0 times",
      "1 time",
      "2 times",
      "Infinite times"
    ],
    "correctIndex": 1,
    "explanation": "A do-while loop is an exit-controlled loop; the loop condition is evaluated at the bottom, guaranteeing at least one execution of the body."
  },
  {
    "id": "q-10",
    "subjectId": "ai",
    "unit": 1,
    "pyqRef": "SEE July 2026, CIE-1",
    "question": "Which data structure is fundamentally utilized to manage the frontier node list in Breadth-First Search (BFS)?",
    "options": [
      "LIFO Stack",
      "FIFO Queue",
      "Priority Heap",
      "Hash Table"
    ],
    "correctIndex": 1,
    "explanation": "BFS explores nodes layer by layer using a First-In-First-Out (FIFO) Queue. DFS uses a LIFO Stack."
  },
  {
    "id": "q-11",
    "subjectId": "mech",
    "unit": 3,
    "pyqRef": "SEE July 2026, CIE-2",
    "question": "In a 4-stroke internal combustion engine running at crankshaft speed N rpm, how many power strokes occur per minute in a single cylinder?",
    "options": [
      "N",
      "N / 2",
      "2N",
      "4N"
    ],
    "correctIndex": 1,
    "explanation": "In a four-stroke engine, a complete thermodynamic cycle (4 strokes) takes two complete crankshaft revolutions (720\u00b0). Hence, power strokes per minute n = N / 2."
  },
  {
    "id": "q-12",
    "subjectId": "const",
    "unit": 3,
    "pyqRef": "SEE July 2026, CIE-2",
    "question": "Which constitutional prerogative writ is issued to release a person who has been detained illegally or without lawful justification?",
    "options": [
      "Mandamus",
      "Habeas Corpus",
      "Quo-Warranto",
      "Certiorari"
    ],
    "correctIndex": 1,
    "explanation": "Habeas Corpus ('You may have the body') is issued by High Courts (Art 226) or the Supreme Court (Art 32) to command authorities to produce an illegally detained person."
  },
  {
    "id": "q-13",
    "subjectId": "eng",
    "unit": 1,
    "pyqRef": "SEE July 2026, CIE-1",
    "question": "According to Edward T. Hall's Proxemics, what is the defined physical distance boundary for the 'Social Space' typical of professional meetings?",
    "options": [
      "0 to 1.5 feet",
      "1.5 to 4 feet",
      "4 to 12 feet",
      "Over 25 feet"
    ],
    "correctIndex": 2,
    "explanation": "Hall defines Social Space as 4 to 12 feet (1.2 to 3.7 m), which is ideal for formal team interactions, client conferences, and business meetings."
  },
  {
    "id": "q-14",
    "subjectId": "eng",
    "unit": 3,
    "pyqRef": "SEE Feb 2026, CIE-2",
    "question": "In the Eisenhower Time Management Matrix, which quadrant should proactive engineers spend the majority of their time in to ensure high long-term success?",
    "options": [
      "Quadrant I (Urgent & Important)",
      "Quadrant II (Important, Not Urgent)",
      "Quadrant III (Urgent, Not Important)",
      "Quadrant IV (Not Urgent, Not Important)"
    ],
    "correctIndex": 1,
    "explanation": "Quadrant II (Important, Not Urgent) encompasses strategic planning, deep study, GATE/skill preparation, and proactive design, preventing crisis situations."
  },
  {
    "id": "q-15",
    "subjectId": "phys",
    "unit": 1,
    "pyqRef": "SEE Feb 2026, CIE-1",
    "question": "In Einstein's radiation theory, what is the fundamental mathematical relationship between spontaneous emission (A21) and stimulated emission (B21)?",
    "options": [
      "A21 / B21 = (8 * pi * h * nu^3) / c^3",
      "A21 / B21 = (8 * pi * h * nu^2) / c^2",
      "A21 / B21 = h * nu / (k * T)",
      "A21 / B21 = c^3 / (8 * pi * h * nu^3)"
    ],
    "correctIndex": 0,
    "explanation": "Comparing Einstein's equilibrium condition with Planck's radiation law gives A21 / B21 = (8 * pi * h * nu^3) / c^3, showing spontaneous emission dominates at higher frequencies."
  },
  {
    "id": "q-16",
    "subjectId": "phys",
    "unit": 2,
    "pyqRef": "SEE Feb 2026, CIE-2",
    "question": "For a particle of mass m confined in an infinite 1D potential well of width L, how do the energy eigenvalues En scale with quantum number n?",
    "options": [
      "En is directly proportional to n",
      "En is directly proportional to n^2",
      "En is inversely proportional to n",
      "En is independent of n"
    ],
    "correctIndex": 1,
    "explanation": "The energy eigenvalues are En = (n^2 * h^2) / (8 * m * L^2). Energy levels are quantized and scale with the square of the quantum number n (n = 1, 2, 3...)."
  },
  {
    "id": "q-17",
    "subjectId": "phys",
    "unit": 3,
    "pyqRef": "SEE July 2026",
    "question": "In an n-type semiconductor with electron concentration n, the Hall coefficient RH is given by:",
    "options": [
      "RH = -1 / (n * e)",
      "RH = +1 / (n * e)",
      "RH = -n / e",
      "RH = e / n"
    ],
    "correctIndex": 0,
    "explanation": "Because majority charge carriers in n-type semiconductors are electrons with negative charge -e, the Hall coefficient is RH = -1 / (n * e). The negative sign confirms negative majority carriers."
  },
  {
    "id": "q-18",
    "subjectId": "phys",
    "unit": 4,
    "pyqRef": "SEE Feb 2026",
    "question": "What is the magnetic susceptibility (chi) of a Type-I superconductor in its superconducting state below Tc (Meissner Effect)?",
    "options": [
      "chi = 0 (Non-magnetic)",
      "chi = +1 (Paramagnetic)",
      "chi = -1 (Perfect Diamagnetism)",
      "chi = infinity (Ferromagnetic)"
    ],
    "correctIndex": 2,
    "explanation": "Inside a superconductor, B = mu0 * (H + M) = 0. Hence M = -H and chi = M / H = -1. This defines perfect diamagnetism."
  },
  {
    "id": "q-19",
    "subjectId": "pyprog",
    "unit": 1,
    "pyqRef": "SEE July 2026, CIE-1",
    "question": "What is the evaluated output of the Python expression: 10 + 5 * 2 ** 3 / 4 - 6?",
    "options": [
      "14.0",
      "12.0",
      "24.0",
      "8.0"
    ],
    "correctIndex": 0,
    "explanation": "By PEMDAS: 1. Exponentiation 2**3 = 8. 2. Multiplication 5*8 = 40. 3. Division 40/4 = 10.0. 4. Addition & Subtraction: 10 + 10.0 - 6 = 14.0."
  },
  {
    "id": "q-20",
    "subjectId": "pyprog",
    "unit": 2,
    "pyqRef": "SEE July 2026",
    "question": "Which of the following slicing operations produces a reversed copy of the string s = 'RAMAIAH'?",
    "options": [
      "s[0:-1]",
      "s[::-1]",
      "s[-1:0]",
      "s.reverse()"
    ],
    "correctIndex": 1,
    "explanation": "In Python, s[::-1] sets step = -1 with omitted start and stop, returning the string reversed ('HAIAMAR'). Note that str has no .reverse() method because strings are immutable."
  },
  {
    "id": "q-21",
    "subjectId": "pyprog",
    "unit": 3,
    "pyqRef": "SEE July 2026, CIE-2",
    "question": "Given a NumPy array arr = np.array([[10, 20], [30, 40]]), what does arr.shape and arr.ndim return?",
    "options": [
      "shape = (2, 2) and ndim = 2",
      "shape = (4,) and ndim = 1",
      "shape = (2, 2) and ndim = 4",
      "shape = (1, 4) and ndim = 2"
    ],
    "correctIndex": 0,
    "explanation": "The array has 2 rows and 2 columns, so arr.shape is (2, 2). The number of array dimensions is 2, so arr.ndim is 2."
  },
  {
    "id": "q-22",
    "subjectId": "pyprog",
    "unit": 5,
    "pyqRef": "SEE July 2026",
    "question": "Which special dunder method must be overloaded in a Python class to customize the behavior of the addition operator (+)?",
    "options": [
      "__plus__(self, other)",
      "__add__(self, other)",
      "__sum__(self, other)",
      "__concat__(self, other)"
    ],
    "correctIndex": 1,
    "explanation": "The addition operator (+) triggers the __add__(self, other) method in Python's data model protocol."
  },
  {
    "id": "q-23",
    "subjectId": "kan",
    "unit": 1,
    "pyqRef": "SEE Feb 2026",
    "question": "What is the English meaning of the Kannada sentence: 'Naanu Ramaiah engineering college nalli oduttiddene'?",
    "options": [
      "I am working in Ramaiah engineering college",
      "I am studying in Ramaiah engineering college",
      "I am teaching in Ramaiah engineering college",
      "I am visiting Ramaiah engineering college"
    ],
    "correctIndex": 1,
    "explanation": "'Naanu' means I, 'oduttiddene' means am studying (from root verb Odu = to read/study)."
  },
  {
    "id": "q-24",
    "subjectId": "kan",
    "unit": 3,
    "pyqRef": "SEE Feb 2026",
    "question": "Match the Kannada adjective 'Sundara' with its correct English meaning:",
    "options": [
      "Big / Large",
      "Beautiful",
      "Old",
      "Sweet"
    ],
    "correctIndex": 1,
    "explanation": "'Sundara' means Beautiful (e.g. Sundaravada nagara = Beautiful city). 'doDDa' is Big, 'haleya' is Old, 'sihi' is Sweet."
  },
  {
    "id": "q-25",
    "subjectId": "kan",
    "unit": 4,
    "pyqRef": "SEE Feb 2026",
    "question": "What is the Kannada name for the number 54 using English letters?",
    "options": [
      "Nalavatt-eraDu",
      "Aivatt-naalku",
      "Embatt-ombattu",
      "Tombatt-eeLu"
    ],
    "correctIndex": 1,
    "explanation": "50 is Aivattu and 4 is Naalku. Combined, 54 is Aivatt-naalku (Aivattnaalku)."
  },
  {
    "id": "q-26",
    "subjectId": "kan",
    "unit": 5,
    "pyqRef": "SEE Feb 2026",
    "question": "How many total letters (Aksharagalu) are present in the classical Kannada Varnamale?",
    "options": [
      "46 letters",
      "49 letters",
      "52 letters",
      "54 letters"
    ],
    "correctIndex": 1,
    "explanation": "The classical Kannada alphabet consists of exactly 49 letters: 13 Swaragalu (vowels), 2 Yogavahakagalu, and 34 Vyanjanagalu (consonants)."
  }
];
