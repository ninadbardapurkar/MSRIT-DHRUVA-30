# build_data.py
import json

SUBJECTS_DATA = [
  {
    "id": "chem",
    "code": "25CYC22 / 25CYC12",
    "name": "Applied Chemistry for Smart Systems",
    "shortName": "Applied Chemistry",
    "stream": "EEE / ECE Stream",
    "color": "#2563EB",
    "badgeColor": "bg-blue-100 text-blue-800 border-blue-300",
    "units": [
      { "id": 1, "name": "Unit 1: Electrode Systems & Energy Storage Devices" },
      { "id": 2, "name": "Unit 2: Corrosion Science & Electrochemical Sensors" },
      { "id": 3, "name": "Unit 3: Polymers, Display Materials & Solar Cells" },
      { "id": 4, "name": "Unit 4: Memory Materials & Display Devices" },
      { "id": 5, "name": "Unit 5: Nanomaterials & E-Waste Management" }
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
      { "id": 1, "name": "Unit 1: Differential Calculus & Root Finding" },
      { "id": 2, "name": "Unit 2: Vector Calculus & Multiple Integrals" },
      { "id": 3, "name": "Unit 3: Linear Systems, ODEs & Eigenvalues" },
      { "id": 4, "name": "Unit 4: Vector Spaces & Numerical Interpolation" },
      { "id": 5, "name": "Unit 5: Linear Transformations & Numerical Calculus" }
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
      { "id": 1, "name": "Unit 1: Fundamentals, Data Types & Operators" },
      { "id": 2, "name": "Unit 2: Decision Branching & Looping Constructs" },
      { "id": 3, "name": "Unit 3: 1D/2D Arrays & String Operations" },
      { "id": 4, "name": "Unit 4: Modular Functions & Recursion" },
      { "id": 5, "name": "Unit 5: Pointers, Structures & Dynamic Memory" }
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
      { "id": 1, "name": "Unit 1: AI Foundations, Search & Problem Solving" },
      { "id": 2, "name": "Unit 2: Prompt Engineering & Generative AI" },
      { "id": 3, "name": "Unit 3: Machine Learning Core & Classifiers" },
      { "id": 4, "name": "Unit 4: Expert Systems, AIaaS & AIoT" },
      { "id": 5, "name": "Unit 5: Robotics, Drones & Applied AI" }
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
      { "id": 1, "name": "Unit 1: Energy Resources & Engineering Materials" },
      { "id": 2, "name": "Unit 2: Machine Tools, Machining & 3D Printing" },
      { "id": 3, "name": "Unit 3: IC Engines, Refrigeration & Air Conditioning" },
      { "id": 4, "name": "Unit 4: Power Transmission & Metal Joining" },
      { "id": 5, "name": "Unit 5: Electric Vehicles & Industrial Robotics" }
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
      { "id": 1, "name": "Unit 1: Constitutional History & Preamble Philosophy" },
      { "id": 2, "name": "Unit 2: Fundamental Rights & Fundamental Duties" },
      { "id": 3, "name": "Unit 3: Union Executive, Parliament & Supreme Court Writs" },
      { "id": 4, "name": "Unit 4: State Government, Elections & Emergencies" },
      { "id": 5, "name": "Unit 5: Engineering Ethics & Professional Responsibility" }
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
      { "id": 1, "name": "Unit 1: Communication Fundamentals, Proxemics & Persuasion" },
      { "id": 2, "name": "Unit 2: Self-Awareness, SWOC Analysis & Adaptability" },
      { "id": 3, "name": "Unit 3: Goal Setting (SMART), Time Management & 5 Whys" },
      { "id": 4, "name": "Unit 4: Digital Communication, Netiquette & Problem Solving" },
      { "id": 5, "name": "Unit 5: Technical Writing, Resumes & Interview Mastery" }
    ]
  }
]

print("Subjects loaded:", len(SUBJECTS_DATA))
