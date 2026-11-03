# make_data.py
import json

def get_cards():
    cards = []
    c_id = 1
    def add(subjectId, unit, pyqTag, badgeType, badgeLabel, question, hint, answer, examTip):
        nonlocal c_id
        cards.append({
            "id": f"card-{c_id}",
            "subjectId": subjectId,
            "unit": unit,
            "pyqTag": pyqTag,
            "badgeType": badgeType,
            "badgeLabel": badgeLabel,
            "question": question,
            "hint": hint,
            "answer": answer,
            "examTip": examTip,
            "starred": False,
            "mastered": False
        })
        c_id += 1

    # =========================================================================
    # 1. APPLIED CHEMISTRY (25CYC22) - ALL 5 UNITS
    # =========================================================================
    add("chem", 1, "🔥 Asked in SEE July 2026 • 8 Marks", "📐 Derivation / Formula", "Derivation",
        "What is single electrode potential? Derive the Nernst equation for a single electrode potential at 298 K.",
        "Start with Van 't Hoff reaction isotherm ΔG = ΔG° + RT ln Q, replace ΔG with -nFE, and simplify at T = 298 K (25°C).",
        """<strong>1. Definition:</strong> Single electrode potential is the potential difference established between a metal electrode and the surrounding solution containing its own ions at equilibrium: $M^{n+} + ne^- \\rightleftharpoons M$.

<strong>2. Step-by-Step Thermodynamic Derivation:</strong>
• According to the Van 't Hoff reaction isotherm:
  $$\\Delta G = \\Delta G^\\circ + RT \\ln \\left(\\frac{[\\text{Products}]}{[\\text{Reactants}]}\\right)$$
• For the reduction reaction $M^{n+}(aq) + ne^- \\rightarrow M(s)$:
  $$\\Delta G = \\Delta G^\\circ + RT \\ln \\left(\\frac{[M]}{[M^{n+}]}\\right)$$
• By convention, the activity of a pure solid metal is unity ($[M] = 1$):
  $$\\Delta G = \\Delta G^\\circ + RT \\ln \\left(\\frac{1}{[M^{n+}]}\\right) = \\Delta G^\\circ - RT \\ln [M^{n+}]$$
• The electrical work done relates to Gibbs free energy as $\\Delta G = -nFE$ and $\\Delta G^\\circ = -nFE^\\circ$:
  $$-nFE = -nFE^\\circ - RT \\ln [M^{n+}]$$
• Dividing throughout by $-nF$:
  $$E = E^\\circ + \\frac{RT}{nF} \\ln [M^{n+}] = E^\\circ + \\frac{2.303 RT}{nF} \\log_{10} [M^{n+}]$$
• Substituting standard constants at $T = 298\\text{ K}$ ($R = 8.314\\text{ J/mol}\\cdot\\text{K}$, $F = 96485\\text{ C/mol}$):
  $$\\frac{2.303 \\times 8.314 \\times 298}{96485} = 0.0591\\text{ V}$$
• <strong>Final Working Formula:</strong>
  $$E = E^\\circ + \\frac{0.0591}{n} \\log_{10} [M^{n+}]$$""",
        "Always explicitly mention the convention [M] = 1 for pure solid metal, and state the values of R, T=298K, and F to get full 8/8 marks.")

    add("chem", 1, "🔥 Asked in SEE July 2026 • 6 Marks", "🔢 Numerical Pattern", "Numerical",
        "An electrochemical cell consists of a Copper electrode dipped in 0.25 M CuSO₄ and a Silver electrode dipped in 0.15 M AgNO₃. Write the cell representation, cell reactions, and calculate the cell potential at 298 K. Given: E°(Cu²⁺/Cu) = +0.34 V and E°(Ag⁺/Ag) = +0.80 V.",
        "Identify anode (lower E°) and cathode (higher E°). Cell potential E_cell = E°_cell - (0.0591/n) log Q.",
        """<strong>1. Identification of Electrodes:</strong>
• $E^\\circ(Ag^+/Ag) = +0.80\\text{ V}$ (higher reduction potential $\\rightarrow$ Cathode / Reduction)
• $E^\\circ(Cu^{2+}/Cu) = +0.34\\text{ V}$ (lower reduction potential $\\rightarrow$ Anode / Oxidation)

<strong>2. Cell Representation:</strong>
$$Cu(s) \\mid Cu^{2+}(0.25\\text{ M}) \\parallel Ag^+(0.15\\text{ M}) \\mid Ag(s)$$

<strong>3. Half-Cell and Net Cell Reactions:</strong>
• At Anode (Oxidation): $Cu(s) \\rightarrow Cu^{2+}(aq) + 2e^-$
• At Cathode (Reduction): $2Ag^+(aq) + 2e^- \\rightarrow 2Ag(s)$
• Net Cell Reaction: $Cu(s) + 2Ag^+(aq) \\rightarrow Cu^{2+}(aq) + 2Ag(s)$ (Here, $n = 2$).

<strong>4. Calculation of Cell Potential:</strong>
• Standard EMF: $E^\\circ_{\\text{cell}} = E^\\circ_{\\text{cathode}} - E^\\circ_{\\text{anode}} = 0.80 - 0.34 = 0.46\\text{ V}$
• Nernst Equation for the cell:
  $$E_{\\text{cell}} = E^\\circ_{\\text{cell}} - \\frac{0.0591}{n} \\log_{10} \\left(\\frac{[Cu^{2+}]}{[Ag^+]^2}\\right)$$
  $$E_{\\text{cell}} = 0.46 - \\frac{0.0591}{2} \\log_{10} \\left(\\frac{0.25}{(0.15)^2}\\right)$$
  $$\\frac{0.25}{0.0225} = 11.111 \\implies \\log_{10}(11.111) = 1.0457$$
  $$E_{\\text{cell}} = 0.46 - (0.02955 \\times 1.0457) = 0.46 - 0.0309 = \\mathbf{0.4291\\text{ V}}$$""",
        "Be careful! The stoichiometric coefficient of Ag+ is 2, so [Ag+] must be squared in the reaction quotient denominator: [Cu2+]/[Ag+]^2.")

    add("chem", 1, "🔥 Asked in SEE July 2026, CIE-1 2026 • 6 Marks", "🧪 Reaction / Mechanism", "Device Working",
        "Elaborate the construction and working of a Solid Oxide Fuel Cell (SOFC). Mention two of its engineering applications.",
        "Solid electrolyte is YSZ (Yttria-Stabilized Zirconia) that conducts O²⁻ ions at high temperature (800-1000°C).",
        """<strong>1. Principle & Electrolyte:</strong>
A Solid Oxide Fuel Cell (SOFC) is a high-temperature electrochemical device that converts the chemical energy of a fuel (H₂ or CO or natural gas) directly into electrical energy using a solid ceramic electrolyte: <strong>Yttria-Stabilized Zirconia (YSZ, ZrO₂ doped with Y₂O₃)</strong>, which conducts oxide ions ($O^{2-}$).

<strong>2. Construction Components:</strong>
• <strong>Anode (Fuel Electrode):</strong> Porous Nickel-YSZ cermet (allows fuel penetration and catalytic oxidation).
• <strong>Cathode (Air Electrode):</strong> Porous Strontium-doped Lanthanum Manganite (LSM, $La_{1-x}Sr_xMnO_3$).
• <strong>Electrolyte:</strong> Dense, non-porous YSZ ceramic membrane impermeable to gases.
• <strong>Operating Temperature:</strong> $800^\\circ\\text{C} - 1000^\\circ\\text{C}$.

<strong>3. Working Electrode Reactions:</strong>
• At Cathode: $O_2 + 4e^- \\rightarrow 2O^{2-}$ (Oxygen reduced and migrates through YSZ).
• At Anode: $2H_2 + 2O^{2-} \\rightarrow 2H_2O + 4e^-$ (Oxide ions combine with H₂ fuel, releasing electrons).
• Overall Cell Reaction: $2H_2 + O_2 \\rightarrow 2H_2O + \\text{Electrical Energy} + \\text{Heat}$.

<strong>4. Applications:</strong>
1. Combined Heat and Power (CHP) stationary power generation plants.
2. Auxiliary Power Units (APUs) for large naval vessels, aircraft, and heavy-duty vehicles.""",
        "Write the formula of YSZ and LSM clearly. Highlight that O²⁻ ions (not H⁺) migrate across the solid ceramic electrolyte.")

    add("chem", 1, "🔥 Asked in SEE July 2026, CIE-1 2026 • 8 Marks", "📐 Derivation / Formula", "Standard Electrode",
        "What are reference electrodes? Explain the construction and working of a Saturated Calomel Electrode (SCE) with relevant half-cell reactions and applications.",
        "Reference electrode has stable, reproducible potential. SCE uses Hg, Hg2Cl2, and saturated KCl. Potential = +0.244 V.",
        """<strong>1. Definition:</strong> A reference electrode is an electrode whose potential is completely reproducible, constant, and insensitive to the composition of the analyte solution. Used as a reference half-cell to measure the unknown potential of other electrodes.

<strong>2. Construction of Saturated Calomel Electrode (SCE):</strong>
• Consists of a glass tube with an inner tube containing pure liquid Mercury ($Hg$) in contact with a paste of Mercury and Mercurous chloride ($Hg + Hg_2Cl_2$, known as Calomel).
• The tube is filled with a saturated solution of Potassium Chloride ($KCl$) providing a fixed concentration of $Cl^-$ ions.
• Electrical contact is made via a Platinum ($Pt$) wire dipped into mercury. A porous plug or sintered glass disc at the bottom serves as the salt bridge.
• <strong>Cell Representation:</strong> $Pt(s) \\mid Hg(l) \\mid Hg_2Cl_2(s) \\mid KCl(\\text{sat. aq})$.

<strong>3. Working & Electrode Reactions:</strong>
Depending on whether it acts as anode or cathode:
• <strong>As Anode (Oxidation):</strong> $2Hg(l) + 2Cl^-(aq) \\rightarrow Hg_2Cl_2(s) + 2e^-$
• <strong>As Cathode (Reduction):</strong> $Hg_2Cl_2(s) + 2e^- \\rightarrow 2Hg(l) + 2Cl^-(aq)$
• Reduction Potential: $E = E^\\circ - \\frac{0.0591}{2}\\log_{10}[Cl^-]^2 = +0.244\\text{ V}$ at $298\\text{ K}$ (for saturated KCl).

<strong>4. Applications:</strong>
• Secondary standard electrode in potentiometric titrations.
• Used with glass electrodes for precise pH measurements.""",
        "State the potential of saturated calomel electrode as +0.244 V (or 0.242 V) at 298 K. The potential depends only on Cl- concentration.")

    add("chem", 1, "🔥 Asked in SEE July 2026, CIE-1 2026 • 6 Marks", "⚡ Exception / Trap", "Conceptual Reason",
        "Give scientific reasons: (i) In a concentration cell, why does no electricity flow when the concentration of metal ions is identical in both half-cells? (ii) Why is there no self-discharge in a reserve battery?",
        "Look at Nernst equation log(C2/C1) when C1=C2. Reserve battery has inactive electrolyte stored separately.",
        """<strong>(i) Reason for Zero Current in Identical Concentration Cell:</strong>
• The EMF of a concentration cell (e.g., $M \\mid M^{n+}(C_1) \\parallel M^{n+}(C_2) \\mid M$) is given by:
  $$E_{\\text{cell}} = \\frac{0.0591}{n} \\log_{10} \\left(\\frac{C_2}{C_1}\\right) \\quad (\\text{where } C_2 > C_1)$$
• When the concentration of metal ions in both half-cells is equal ($C_1 = C_2$):
  $$\\frac{C_2}{C_1} = 1 \\implies \\log_{10}(1) = 0 \\implies E_{\\text{cell}} = 0\\text{ V}$$
• The chemical potential of $M^{n+}$ ions in both half-cells is equal ($\Delta G = 0$), so the driving force for electron transfer vanishes.

<strong>(ii) Reason for Zero Self-Discharge in Reserve Batteries:</strong>
• In a reserve battery, one critical component (usually the active liquid or solid electrolyte, or an electrode activator) is kept physically separated and isolated in an ampoule or reservoir during storage.
• In the unactivated state, there is no physical contact between the active electrode materials and the conducting electrolyte.
• Consequently, spontaneous internal parasitic chemical reactions, corrosion, and internal ionic transport are 100% prevented, eliminating self-discharge and giving an almost indefinite shelf life (10-20+ years) until mechanical/thermal activation.""",
        "Quote E_cell = (0.0591/n) log(C2/C1) = 0 for part (i), and 'physical separation of electrolyte in an inactive state' for part (ii).")

    add("chem", 1, "🔥 Asked in SEE July 2026, CIE-1 2026 • 6 Marks", "🧪 Reaction / Mechanism", "Modern Battery",
        "Explain briefly the construction and working of a Sodium-Ion (Na-ion) Battery. What advantages does it hold over Li-ion batteries?",
        "Na+ intercalates into hard carbon (anode) and transition metal oxide (cathode). Na is 1000x more abundant than Li.",
        """<strong>1. Principle:</strong>
A Sodium-ion battery is a rechargeable secondary battery that operates on the 'rocking-chair' intercalation principle, where $Na^+$ ions shuttle between the anode and cathode during charging and discharging.

<strong>2. Construction:</strong>
• <strong>Anode:</strong> Hard carbon (non-graphitizable carbon with larger interlayer spacing capable of accommodating the larger ionic radius of $Na^+$: $1.02\\text{ Å}$ vs $0.76\\text{ Å}$ for $Li^+$).
• <strong>Cathode:</strong> Sodium transition metal oxide such as $NaCoO_2$, $NaFePO_4$, or Prussian white analogues.
• <strong>Electrolyte:</strong> Sodium salt ($NaPF_6$ or $NaClO_4$) dissolved in non-aqueous carbonate solvents (EC/DMC).
• <strong>Current Collector:</strong> Aluminium foil for BOTH anode and cathode (unlike Li-ion which requires expensive Copper for the anode).

<strong>3. Working Reactions:</strong>
• <strong>Discharging:</strong>
  - Anode: $Na_x C \\rightarrow C + x Na^+ + x e^-$ (De-intercalation of $Na^+$)
  - Cathode: $Na_{1-x}MO_2 + x Na^+ + x e^- \\rightarrow NaMO_2$ (Intercalation of $Na^+$)
• <strong>Charging:</strong> Reactions proceed in reverse when an external voltage is applied.

<strong>4. Advantages over Lithium-ion:</strong>
1. <strong>Abundant & Inexpensive:</strong> Sodium is widely abundant in sea salt and earth's crust (~1000x cheaper than Lithium).
2. <strong>Aluminium Current Collector:</strong> Aluminium can be used at the anode because Na does not form an alloy with Al at low potentials (saving significant cost and weight over copper).""",
        "Highlight that Aluminium current collectors can be used on BOTH electrodes in Na-ion batteries because Na does not alloy with Al.")

    add("chem", 2, "🔥 Asked in SEE July 2026, CIE-1 2026 • 8 Marks", "🧪 Reaction / Mechanism", "Corrosion Theory",
        "Illustrate the mechanism of rusting of iron according to the electrochemical theory of corrosion with all relevant half-cell and overall reactions.",
        "Rusting creates micro-galvanic cells: Anodic dissolution Fe -> Fe2+ + 2e-, Cathodic reduction of O2, followed by precipitation of Fe(OH)3 -> Fe2O3.xH2O.",
        """<strong>1. Electrochemical Theory of Corrosion:</strong>
Rusting of iron in an ambient moist environment occurs via formation of minute galvanic (anodic and cathodic) cells on the heterogeneous metal surface in the presence of water and dissolved oxygen.

<strong>2. Anodic Reaction (Oxidation of Iron):</strong>
Pure iron metal dissolves at anodic regions of higher strain or lower oxygen availability:
$$Fe(s) \\rightarrow Fe^{2+}(aq) + 2e^- \\quad (E^\\circ = -0.44\\text{ V})$$

<strong>3. Cathodic Reactions (Reduction):</strong>
Electrons travel through the metal to cathodic regions with higher oxygen concentration:
• <strong>In Neutral or Slightly Alkaline Aerated Medium:</strong>
  $$O_2 + 2H_2O + 4e^- \\rightarrow 4OH^-(aq) \\quad (E^\\circ = +0.40\\text{ V})$$
• <strong>In Acidic Medium (if acidic pollutants are present):</strong>
  $$O_2 + 4H^+ + 4e^- \\rightarrow 2H_2O \\quad (E^\\circ = +1.23\\text{ V})$$

<strong>4. Rust Formation Reactions:</strong>
• $Fe^{2+}$ and $OH^-$ ions diffuse towards each other through the electrolyte film to form Ferrous hydroxide:
  $$Fe^{2+} + 2OH^- \\rightarrow Fe(OH)_2 \\downarrow$$
• In the presence of excess dissolved oxygen, $Fe(OH)_2$ is further oxidized to Ferric hydroxide:
  $$4Fe(OH)_2 + O_2 + 2H_2O \\rightarrow 4Fe(OH)_3 \\downarrow$$
• Dehydration of Ferric hydroxide yields hydrated ferric oxide (Rust):
  $$2Fe(OH)_3 \\rightarrow Fe_2O_3 \\cdot xH_2O + (3-x)H_2O$$
  where $\\mathbf{Fe_2O_3 \\cdot xH_2O}$ is red-brown loose rust.""",
        "Always show both anodic oxidation, cathodic reduction in neutral/alkaline media, and the multi-step precipitation ending in Fe2O3.xH2O.")

    add("chem", 2, "🔥 Asked in SEE July 2026 • 6 Marks", "🔢 Numerical Pattern", "Numerical",
        "A metallic sheet of area 100 inch² is exposed to a corroding environment. After one year it experienced a weight loss of 40 g due to corrosion. If the density of the alloy is 8.4 g/cm³, calculate the Corrosion Penetration Rate (CPR) in mils per year (mpy). (Given constant K = 534).",
        "Use CPR formula: CPR = (K * W) / (D * A * T), where K=534, W=weight loss in mg (40 g = 40,000 mg), D=density in g/cm³, A=area in sq.in, T=time in hours (1 yr = 8760 hrs).",
        """<strong>1. Formula for Corrosion Penetration Rate (CPR):</strong>
$$CPR = \\frac{K \\times W}{D \\times A \\times T} \\quad (\\text{in mils per year, mpy})$$

<strong>2. Given Parameters & Unit Conversions:</strong>
• Constant $K = 534$
• Weight loss $W = 40\\text{ g} = 40 \\times 10^3\\text{ mg} = 40,000\\text{ mg}$
• Density of alloy $D = 8.4\\text{ g/cm}^3$
• Surface area exposed $A = 100\\text{ inch}^2$
• Time of exposure $T = 1\\text{ year} = 365 \\times 24 = 8,760\\text{ hours}$

<strong>3. Step-by-Step Calculation:</strong>
$$CPR = \\frac{534 \\times 40,000}{8.4 \\times 100 \\times 8,760}$$
$$CPR = \\frac{21,360,000}{7,358,400}$$
$$\\mathbf{CPR \\approx 2.9028\\text{ mpy}}$$

<strong>Conclusion:</strong>
The corrosion penetration rate of the metallic sheet is <strong>2.90 mpy</strong> (mils per year). (A rate < 1-5 mpy represents good corrosion resistance).""",
        "Crucial unit conversion: Weight loss W MUST be converted from grams to milligrams (40 g = 40,000 mg), and time T from 1 year to 8760 hours!")

    add("chem", 2, "🔥 Asked in SEE July 2026, CIE-1 2026 • 6 Marks", "⚡ Exception / Trap", "Corrosion Mechanism",
        "Illustrate differential aeration corrosion with a neat schematic and suitable example. Explain why corrosion accelerates drastically once pitting starts.",
        "Poorly oxygenated area acts as Anode (corrodes); well oxygenated area acts as Cathode. Small anode + large cathode = intense pitting.",
        """<strong>1. Principle of Differential Aeration Corrosion:</strong>
When different parts of the same metallic structure are exposed to uneven concentrations of dissolved oxygen, the <strong>less oxygenated area acts as the ANODE</strong> (undergoes oxidation/corrosion) and the <strong>more oxygenated area acts as the CATHODE</strong> (undergoes reduction of oxygen).

<strong>2. Examples:</strong>
• <strong>Waterline Corrosion:</strong> A metal tank filled with water corrodes just below the water line because the area below the meniscus has lower dissolved oxygen than the area exposed to ambient air.
• <strong>Pitting under dust/sand particles:</strong> The metal under the dust particle is deprived of oxygen (Anode) and corrodes, forming a deep pit.

<strong>3. Why Corrosion Accelerates Drastically Once Pitting Starts:</strong>
• Once a pit initiates, the bottom of the pit has extremely poor oxygen replenishment compared to the vast surrounding aerated metal surface.
• This creates an unfavorable area ratio: <strong>Extremely small Anode area ($A_{\\text{anode}}$) and Huge Cathode area ($A_{\\text{cathode}}$)</strong>.
• Since total anodic current must equal total cathodic current ($I_{\\text{anode}} = I_{\\text{cathode}}$):
  $$i_{\\text{anode}} = \\frac{I}{A_{\\text{anode}}} \\gg i_{\\text{cathode}} = \\frac{I}{A_{\\text{cathode}}}$$
• The anodic current density becomes enormous, concentrating all metal dissolution inside the tiny cavity, causing rapid auto-catalytic perforation.""",
        "Always mention the area effect: Very small anode area coupled with large cathode area causes high current density at the pit bottom.")

    add("chem", 2, "🔥 Asked in SEE July 2026 • 8 Marks", "🧪 Reaction / Mechanism", "Optical Sensor",
        "Discuss the principle, procedure, and application of a Colorimetric Sensor in the quantitative estimation of Copper.",
        "Cu2+ reacts with ammonia to form deep blue complex [Cu(NH3)4]2+. Absorbance obeys Beer-Lambert's Law A = epsilon * c * l.",
        """<strong>1. Principle (Beer-Lambert's Law):</strong>
When monochromatic light of intensity $I_0$ passes through an absorbing solution of path length $l$ and concentration $c$, the absorbed intensity obeys:
$$A = \\log_{10}\\left(\\frac{I_0}{I_t}\\right) = \\varepsilon \\cdot c \\cdot l$$
where $A$ is absorbance and $\\varepsilon$ is the molar extinction coefficient. Copper ions ($Cu^{2+}$) have weak color, but react with excess ammonium hydroxide ($NH_4OH$) to form a deep blue cuprammonium complex:
$$Cu^{2+} + 4NH_3 \\rightarrow [Cu(NH_3)_4]^{2+} \\quad (\\text{Tetraamminecopper(II)})$$
This complex shows maximum absorption ($\\lambda_{\\max}$) at <strong>$620\\text{ nm}$</strong>.

<strong>2. Procedure:</strong>
1. <strong>Standard Calibration Solutions:</strong> Prepare standard solutions of $CuSO_4$ (e.g., 2, 4, 6, 8, 10 ppm).
2. Add equal excess volume of $1:1\\text{ }NH_4OH$ to each flask and make up to the mark with distilled water.
3. Set the colorimeter filter to $620\\text{ nm}$ and zero the instrument with a blank solution (distilled water + $NH_4OH$).
4. Measure absorbance ($A$) for all standard solutions and plot a calibration curve of $A$ vs Concentration ($c$).
5. Measure absorbance of the unknown copper solution, and extrapolate the exact concentration from the straight line.

<strong>3. Applications:</strong>
• Industrial wastewater monitoring for heavy metal copper contamination.
• Quality control in printed circuit board (PCB) etching effluents.""",
        "Mention the exact formula of the complex [Cu(NH3)4]2+, the maximum wavelength lambda_max = 620 nm, and Beer-Lambert's law equation.")

    add("chem", 3, "🔥 Asked in SEE July 2026, CIE-2 2026 • 8 Marks", "⚡ Exception / Trap", "Polymer Physics",
        "What is Glass Transition Temperature (Tg)? Discuss any three factors affecting the Tg of polymers.",
        "Tg is the temperature at which a polymer transitions from a hard, glassy/brittle state to a soft, rubbery state. Influenced by chain flexibility, bulky side groups, and plasticizers.",
        """<strong>1. Definition:</strong>
The Glass Transition Temperature ($T_g$) is the narrow temperature range at which an amorphous polymer undergoes a reversible physical transition from a hard, rigid, brittle ('glassy') state to a flexible, compliant, rubbery state due to the onset of long-range segmental motion of the polymer backbone chains.

<strong>2. Three Key Factors Affecting $T_g$:</strong>
1. <strong>Chain Flexibility:</strong>
   • Polymers with flexible backbones (e.g., $-C-O-C-$ or $-Si-O-Si-$ bonds, as in silicones) rotate easily, resulting in a low $T_g$ (e.g., Polydimethylsiloxane $T_g \\approx -125^\\circ\\text{C}$).
   • Rigid groups like aromatic rings in the main chain (e.g., Polycarbonate, PET) restrict rotation and increase $T_g$ ($> 140^\\circ\\text{C}$).
2. <strong>Bulky Side Groups & Steric Hindrance:</strong>
   • Bulky pendant side groups restrict rotation of the polymer chain. Polyethylene (no side groups) has $T_g \\approx -120^\\circ\\text{C}$, whereas Polystyrene (with bulky phenyl ring) has $T_g \\approx +100^\\circ\\text{C}$.
3. <strong>Intermolecular Forces & Polarity:</strong>
   • Strong intermolecular dipole-dipole interactions or hydrogen bonding between polymer chains lock them firmly in place, raising $T_g$. (e.g., Nylon-6,6 has high $T_g$ due to extensive interchain hydrogen bonding).
4. <strong>Plasticizers:</strong>
   • Adding small, low-molecular-weight plasticizer molecules increases free volume and weakens intermolecular forces, dramatically lowering $T_g$.""",
        "Clearly differentiate Tg from melting temperature Tm: Tg is for amorphous segmental rotation, while Tm is the melting of crystalline domains.")

    add("chem", 3, "🔥 Asked in SEE July 2026, CIE-2 2026 • 6 Marks", "🔢 Numerical Pattern", "Numerical",
        "A polymer sample contains: 45 molecules with molecular mass 12,000 g/mol, 20 molecules with molecular mass 13,000 g/mol, and 35 molecules with molecular mass 14,000 g/mol. Calculate the Number-Average (Mn) and Weight-Average (Mw) molecular weight of the polymer.",
        "Mn = sum(Ni*Mi) / sum(Ni); Mw = sum(Ni*Mi^2) / sum(Ni*Mi). Always Mw > Mn.",
        """<strong>1. Formulas for Average Molecular Weights:</strong>
$$\\bar{M}_n = \\frac{\\sum N_i M_i}{\\sum N_i}, \\quad \\bar{M}_w = \\frac{\\sum N_i M_i^2}{\\sum N_i M_i}$$

<strong>2. Given Data Table:</strong>
• Group 1: $N_1 = 45$, $M_1 = 12,000\\text{ g/mol}$
• Group 2: $N_2 = 20$, $M_2 = 13,000\\text{ g/mol}$
• Group 3: $N_3 = 35$, $M_3 = 14,000\\text{ g/mol}$

<strong>3. Step-by-Step Computations:</strong>
• Total number of molecules:
  $$\\sum N_i = 45 + 20 + 35 = 100$$
• Sum of masses $\\sum N_i M_i$:
  $$N_1 M_1 = 45 \\times 12,000 = 540,000$$
  $$N_2 M_2 = 20 \\times 13,000 = 260,000$$
  $$N_3 M_3 = 35 \\times 14,000 = 490,000$$
  $$\\sum N_i M_i = 540,000 + 260,000 + 490,000 = 1,290,000\\text{ g/mol}$$

• <strong>Number-Average Molecular Weight ($\\bar{M}_n$):</strong>
  $$\\bar{M}_n = \\frac{1,290,000}{100} = \\mathbf{12,900\\text{ g/mol}}$$

• Sum of squared terms $\\sum N_i M_i^2$:
  $$N_1 M_1^2 = 540,000 \\times 12,000 = 6.480 \\times 10^9$$
  $$N_2 M_2^2 = 260,000 \\times 13,000 = 3.380 \\times 10^9$$
  $$N_3 M_3^2 = 490,000 \\times 14,000 = 6.860 \\times 10^9$$
  $$\\sum N_i M_i^2 = (6.480 + 3.380 + 6.860) \\times 10^9 = 16.720 \\times 10^9$$

• <strong>Weight-Average Molecular Weight ($\\bar{M}_w$):</strong>
  $$\\bar{M}_w = \\frac{16.720 \\times 10^9}{1,290,000} = \\mathbf{12,961.24\\text{ g/mol}}$$
• Polydispersity Index (PDI) = $\\frac{\\bar{M}_w}{\\bar{M}_n} = \\frac{12,961.24}{12,900} \\approx 1.0047$.""",
        "Always double-check that Mw >= Mn. If your calculated Mn is greater than Mw, you made an arithmetic error!")

    add("chem", 3, "🔥 Asked in SEE July 2026, CIE-2 2026 • 8 Marks", "🧪 Reaction / Mechanism", "Nanotech & PV",
        "Describe the construction and working of a Quantum Dot Sensitized Solar Cell (QDSSC). Explain the size-dependent properties of Quantum Dots.",
        "QDSSC replaces organic dye with QDs (CdS, CdSe, PbS). Tunable bandgap Eg = hc/lambda due to quantum confinement.",
        """<strong>1. Principle & Quantum Confinement:</strong>
A Quantum Dot Sensitized Solar Cell (QDSSC) is a third-generation photovoltaic device that harvests solar energy using semiconductor quantum dots (QDs, e.g., $CdS, CdSe, PbS$) as light sensitizers.
• <strong>Size-Dependent Bandgap:</strong> In quantum dots (< 10 nm), spatial confinement of electron-hole pairs increases the bandgap energy as size decreases:
  $$E_g(\\text{QD}) = E_g(\\text{bulk}) + \\frac{\\hbar^2 \\pi^2}{2 m^* R^2}$$
  allowing precise tuning of the absorption spectrum across visible and near-IR regions!

<strong>2. Construction Components:</strong>
• <strong>Photoanode:</strong> FTO glass substrate coated with a mesoporous nanocrystalline $TiO_2$ thin film sensitized with adsorbed Quantum Dots ($CdSe/CdS$).
• <strong>Counter Electrode:</strong> Platinized FTO or Brass coated with $Cu_2S$ (efficient polysulfide catalyst).
• <strong>Electrolyte:</strong> Redox polysulfide couple ($S^{2-} / S_n^{2-}$).

<strong>3. Working Mechanism:</strong>
1. <strong>Light Absorption:</strong> $QD + h\\nu \\rightarrow QD^*(e^- + h^+)$ (Exciton generation).
2. <strong>Electron Injection:</strong> Photoexcited electrons are injected into the conduction band of $TiO_2$:
   $$QD^* \\rightarrow QD^+ + e^- (TiO_2)$$
3. <strong>Current Generation:</strong> Electrons flow through the external load to the counter electrode.
4. <strong>Regeneration:</strong> The oxidized $QD^+$ is reduced back by the sulfide electrolyte ($S^{2-}$):
   $$2QD^+ + S^{2-} \\rightarrow 2QD + S$$
   The polysulfide is reduced back at the counter electrode: $S_n^{2-} + 2e^- \\rightarrow S_{n-1}^{2-} + S^{2-}$.""",
        "Mention the Multiple Exciton Generation (MEG) capability of quantum dots where one high-energy photon generates >1 electron-hole pair.")

    add("chem", 4, "🔥 Asked in SEE July 2026, CIE-2 2026 • 8 Marks", "⚡ Exception / Trap", "Material Comparison",
        "Discuss the different types of organic semiconductors used in memory devices. Distinguish between organic and inorganic memory devices.",
        "Organic memory devices use conjugated small molecules (pentacene) or polymers; inorganic use silicon/metal oxides. Compare flexibility, cost, speed.",
        """<strong>1. Types of Organic Memory Materials:</strong>
• <strong>Small Conjugated Molecules:</strong> Pentacene, Rubrene, Alq3 (form highly ordered crystal thin films via vacuum evaporation).
• <strong>Conjugated Conducting Polymers:</strong> Polyaniline (PANI), Poly(3-hexylthiophene) (P3HT), PEDOT:PSS.
• <strong>Charge-Transfer Complexes:</strong> Tetrathiafulvalene-TCNQ (TTF-TCNQ).

<strong>2. Comparison: Organic vs. Inorganic Memory Devices:</strong>
<div class="overflow-x-auto my-2">
<table class="w-full text-xs text-left border border-slate-300">
<thead class="bg-slate-100"><tr><th class="p-1 border">Parameter</th><th class="p-1 border">Organic Memory</th><th class="p-1 border">Inorganic Memory (Si)</th></tr></thead>
<tbody>
<tr><td class="p-1 border font-semibold">Substrate & Flexibility</td><td class="p-1 border">Highly flexible (plastics, paper, textiles)</td><td class="p-1 border">Rigid, brittle Silicon wafers</td></tr>
<tr><td class="p-1 border font-semibold">Processing Cost</td><td class="p-1 border">Low-cost solution/inkjet printing</td><td class="p-1 border">Very high (clean rooms, lithography)</td></tr>
<tr><td class="p-1 border font-semibold">Switching Speed</td><td class="p-1 border">Moderate to slow (microsecond scale)</td><td class="p-1 border">Ultra-fast (nanosecond scale)</td></tr>
<tr><td class="p-1 border font-semibold">Retention & Endurance</td><td class="p-1 border">10⁴ - 10⁵ cycles (limited endurance)</td><td class="p-1 border">> 10¹² cycles (very high endurance)</td></tr>
<tr><td class="p-1 border font-semibold">Power Consumption</td><td class="p-1 border">Ultra-low operating power</td><td class="p-1 border">Higher writing voltages</td></tr>
</tbody>
</table>
</div>""",
        "Present the comparison as a clean table with 5 clear parameters to score full 8/8 marks effortlessly.")

    add("chem", 4, "🔥 Asked in SEE July 2026 • 6 Marks", "🧪 Reaction / Mechanism", "Display Tech",
        "Distinguish between Organic Light Emitting Diodes (OLED) and Quantum Dot Light Emitting Diodes (QLED). Mention their relative advantages.",
        "OLED uses organic carbon-based emissive layers (true blacks, infinite contrast); QLED uses inorganic quantum dots illuminated by backlight or electro-emission.",
        """<strong>1. Structural & Operational Differences:</strong>
<div class="overflow-x-auto my-2">
<table class="w-full text-xs text-left border border-slate-300">
<thead class="bg-slate-100"><tr><th class="p-1 border">Feature</th><th class="p-1 border">OLED (Organic LED)</th><th class="p-1 border">QLED (Quantum Dot LED)</th></tr></thead>
<tbody>
<tr><td class="p-1 border font-semibold">Emissive Material</td><td class="p-1 border">Organic thin films (small molecules/polymers)</td><td class="p-1 border">Inorganic semiconductor nanocrystals (CdSe/ZnS)</td></tr>
<tr><td class="p-1 border font-semibold">Light Emission</td><td class="p-1 border">Self-emissive per pixel (each sub-pixel glows)</td><td class="p-1 border">QD layer excited by blue LED backlight or direct current</td></tr>
<tr><td class="p-1 border font-semibold">Black Levels & Contrast</td><td class="p-1 border">Infinite contrast (pixels turn off completely)</td><td class="p-1 border">Slight backlight leakage, slightly lower black levels</td></tr>
<tr><td class="p-1 border font-semibold">Peak Brightness</td><td class="p-1 border">Moderate (~800 - 1500 nits)</td><td class="p-1 border">Extremely high (> 2000 - 4000 nits)</td></tr>
<tr><td class="p-1 border font-semibold">Burn-in Risk</td><td class="p-1 border">Susceptible to permanent image retention (burn-in)</td><td class="p-1 border">Immune to burn-in (inorganic stability)</td></tr>
<tr><td class="p-1 border font-semibold">Lifespan</td><td class="p-1 border">Blue organic sub-pixels degrade faster</td><td class="p-1 border">Significantly longer operating lifespan</td></tr>
</tbody>
</table>
</div>""",
        "Mention that OLED provides perfect blacks (infinite contrast) while QLED provides higher peak brightness and immunity to burn-in.")

    add("chem", 5, "🔥 Asked in SEE July 2026, CIE-2 2026 • 8 Marks", "🧪 Reaction / Mechanism", "Synthesis & E-Waste",
        "What are nanomaterials? Describe the preparation of Zinc Oxide (ZnO) nanoparticles by the solution combustion method.",
        "Nanomaterials have at least one dimension 1-100 nm. Solution combustion mixes zinc nitrate (oxidizer) and glycine/urea (fuel) and ignites at 400°C.",
        """<strong>1. Definition of Nanomaterials:</strong>
Nanomaterials are materials with structural components or grain sizes having at least one dimension in the nanoscale range of <strong>$1\\text{ to }100\\text{ nm}$</strong>, showing novel physical/chemical properties distinct from bulk material due to high surface area to volume ratio and quantum confinement.

<strong>2. Solution Combustion Synthesis of ZnO Nanoparticles:</strong>
• <strong>Principle:</strong> An exothermic, self-sustaining redox reaction between an oxidizing precursor (metal nitrate) and an organic reducing fuel (glycine, urea, or citric acid) in aqueous medium.
• <strong>Precursors:</strong>
  - Oxidizer: Zinc Nitrate hexahydrate [$Zn(NO_3)_2 \\cdot 6H_2O$]
  - Fuel: Glycine [$NH_2CH_2COOH$] or Urea [$CO(NH_2)_2$]
• <strong>Procedure:</strong>
  1. Dissolve stoichiometric ratio of $Zn(NO_3)_2$ and glycine in minimum volume of deionized water in a silica crucible.
  2. Stir well to form a clear homogeneous aqueous precursor solution.
  3. Introduce the crucible into a muffle furnace preheated to $400^\\circ\\text{C}-500^\\circ\\text{C}$.
  4. The solution boils, dehydrates into a viscous gel, and then auto-ignites with a vigorous flame and voluminous liberation of harmless gases ($N_2, CO_2, H_2O$).
  5. Yields high-purity, white foamy nanocrystalline $ZnO$ nanopowder.
• <strong>Balanced Combustion Reaction:</strong>
  $$9 Zn(NO_3)_2 + 10 NH_2CH_2COOH \\rightarrow 9 ZnO(s) + 20 CO_2 \\uparrow + 25 H_2O \\uparrow + 14 N_2 \\uparrow$$""",
        "Write the stoichiometry: Zinc nitrate is the oxidizer and Glycine is the fuel. Mention the rapid exothermic reaction.")

    add("chem", 5, "🔥 Asked in SEE July 2026 • 6 Marks", "⚡ Exception / Trap", "Environmental Chemistry",
        "Elaborate on the toxic materials used in the manufacture of electronic devices and the environmental/health hazards posed by improper e-waste disposal.",
        "Key toxics: Lead (solder), Cadmium (contacts/batteries), Mercury (switches/backlights), Hexavalent Chromium (corrosion protection), BFRs.",
        """<strong>1. Major Toxic Heavy Metals & Chemicals in Electronics:</strong>
• <strong>Lead ($Pb$):</strong> Used in cathode ray tubes (CRTs) and tin-lead solder. Causes severe central nervous system damage, kidney failure, and cognitive impairment in children.
• <strong>Cadmium ($Cd$):</strong> Present in SMD chip resistors, infrared detectors, and Ni-Cd batteries. Highly nephrotoxic; bioaccumulates in bones causing Itai-Itai disease.
• <strong>Mercury ($Hg$):</strong> Used in flat panel fluorescent backlights and tilt switches. Chronic exposure causes neurological tremors, brain damage, and bioaccumulation as methylmercury in aquatic food chains.
• <strong>Hexavalent Chromium ($Cr^{VI}$):</strong> Used for anti-corrosion passivation coatings on chassis. Powerful human carcinogen and causes severe DNA lesions.
• <strong>Brominated Flame Retardants (BFRs):</strong> Added to printed circuit boards (PCBs) and plastic casings. Disrupt endocrine thyroid hormones and release carcinogenic polybrominated dioxins during open burning.

<strong>2. Environmental Hazards:</strong>
• <strong>Groundwater Contamination:</strong> Acidic landfill leachate dissolves heavy metals, contaminating drinking aquifers.
• <strong>Toxic Air Emissions:</strong> Open-air incineration of wires/PCBs releases dioxins, furans, and toxic particulates.""",
        "Name all 5 hazardous substances (RoHS list: Pb, Cd, Hg, Cr(VI), BFRs) and describe specific biological and environmental damages.")

    # =========================================================================
    # 2. ENGINEERING MATHEMATICS (25MAC11 / 25MAC21) - ALL 5 UNITS
    # =========================================================================
    add("math", 1, "🔥 Asked in SEE July 2026, CIE-1/2 2026 • 7 Marks", "🔢 Numerical Pattern", "Root Finding",
        "Give the geometrical interpretation of the Newton-Raphson method. Find a negative root of the equation x e^x - sin x = 0 correct to three decimal places using the Newton-Raphson method.",
        "Geometrical meaning: Tangent drawn at (x_n, f(x_n)) intersects the x-axis at x_{n+1}. Use formula x_{n+1} = x_n - f(x_n)/f'(x_n).",
        """<strong>1. Geometrical Interpretation:</strong>
Let $y = f(x)$ be a smooth curve. If $x_0$ is an initial guess near root $\\alpha$, draw a tangent to the curve at $(x_0, f(x_0))$. The slope is $f'(x_0)$.
The tangent equation is $y - f(x_0) = f'(x_0)(x - x_0)$.
Setting $y = 0$ gives the x-intercept $x_1$:
$$0 - f(x_0) = f'(x_0)(x_1 - x_0) \\implies \\mathbf{x_1 = x_0 - \\frac{f(x_0)}{f'(x_0)}}$$
Thus, Newton-Raphson replaces the curve by its tangent line at each iteration.

<strong>2. Numerical Solution for $f(x) = x e^x - \\sin x = 0$:</strong>
• Note: $x = 0$ is a trivial root. We seek a <strong>negative root</strong>.
• $f'(x) = e^x + x e^x - \\cos x = (1+x)e^x - \\cos x$.
• Testing negative values:
  - $f(-3) = -3 e^{-3} - \\sin(-3) = -3(0.0498) - (-0.1411) = -0.1494 + 0.1411 = -0.0083$
  - Let $x_0 = -3.1$.
  - At $x_0 = -3.1$:
    $f(-3.1) = -3.1 e^{-3.1} - \\sin(-3.1) = -3.1(0.0450) - (-0.0416) = -0.1396 + 0.0416 = -0.098$
• Iterating $x_{n+1} = x_n - \\frac{f(x_n)}{f'(x_n)}$:
  - At $x_0 = -3.0$:
    $f(-3) = -0.0083$
    $f'(-3) = (1-3)e^{-3} - \\cos(-3) = -2(0.0498) - (-0.990) = -0.0996 + 0.990 = +0.8904$
    $$x_1 = -3 - \\left(\\frac{-0.0083}{0.8904}\\right) = -3 + 0.0093 = -2.9907$$
  - Evaluating at $x_1 = -2.9907$:
    $f(-2.9907) \\approx 0.0000$
• Hence, the negative root correct to 3 decimal places is $\\mathbf{-2.991}$ (or approx $\\mathbf{-3.041}$ depending on initial bracket).""",
        "Always switch your calculator to RADIAN mode when evaluating trigonometric functions (sin x, cos x) in calculus!")

    add("math", 1, "🔥 Asked in SEE Feb 2026 • 7 Marks", "📐 Derivation / Formula", "Multivariable Jacobian",
        "If u = x² + y² + z², v = xy + yz + zx, and w = x + y + z, find the Jacobian ∂(u, v, w) / ∂(x, y, z) and deduce the functional relation between u, v, and w.",
        "Compute the determinant of the 3x3 partial derivative matrix. If Jacobian is identically 0, a functional relation w^2 = u + 2v exists.",
        """<strong>1. Jacobian Definition:</strong>
$$J = \\frac{\\partial(u,v,w)}{\\partial(x,y,z)} = \\begin{vmatrix} u_x & u_y & u_z \\\\ v_x & v_y & v_z \\\\ w_x & w_y & w_z \\end{vmatrix}$$

<strong>2. Computing Partial Derivatives:</strong>
• For $u = x^2+y^2+z^2$: $u_x = 2x, u_y = 2y, u_z = 2z$
• For $v = xy+yz+zx$: $v_x = y+z, v_y = x+z, v_z = x+y$
• For $w = x+y+z$: $w_x = 1, w_y = 1, w_z = 1$

<strong>3. Evaluating the Determinant:</strong>
$$J = \\begin{vmatrix} 2x & 2y & 2z \\\\ y+z & x+z & x+y \\\\ 1 & 1 & 1 \\end{vmatrix}$$
• Factor out 2 from Row 1:
  $$J = 2 \\begin{vmatrix} x & y & z \\\\ y+z & x+z & x+y \\\\ 1 & 1 & 1 \\end{vmatrix}$$
• Apply row operation $R_2 \\rightarrow R_2 + R_1$:
  $$R_2 = (x+y+z, x+y+z, x+y+z) = w(1, 1, 1)$$
• Since Row 2 is now a scalar multiple of Row 3 ($(1, 1, 1)$), the determinant has two identical proportional rows!
  $$\\mathbf{J = \\frac{\\partial(u,v,w)}{\\partial(x,y,z)} = 0}$$

<strong>4. Functional Relation:</strong>
Since $J = 0$, $u, v, w$ are functionally dependent.
• Expanding $w^2$:
  $$w^2 = (x+y+z)^2 = x^2+y^2+z^2 + 2(xy+yz+zx)$$
  $$\\mathbf{w^2 = u + 2v} \\quad \\text{or} \\quad \\mathbf{w^2 - u - 2v = 0}$$""",
        "State the theorem: A vanishing Jacobian J = 0 is the necessary and sufficient condition for functional dependence.")

    add("math", 2, "🔥 Asked in SEE Feb 2026, CIE-1 2026 • 7 Marks", "📐 Derivation / Formula", "Vector Calculus",
        "Show that F = (x² - y² + x) i - (2xy + y) j is an irrotational vector. Hence find its scalar potential function φ such that F = ∇φ.",
        "Vector is irrotational if curl F = ∇ x F = 0. Then integrate dφ = Fx dx + Fy dy + Fz dz.",
        """<strong>1. Condition for Irrotational Vector:</strong>
A vector field $\\vec{F} = F_1 \\hat{i} + F_2 \\hat{j} + F_3 \\hat{k}$ is irrotational if $\\text{curl }\\vec{F} = \\nabla \\times \\vec{F} = 0$.
Here: $F_1 = x^2 - y^2 + x$, $F_2 = -(2xy + y)$, $F_3 = 0$.

<strong>2. Computing Curl:</strong>
$$\\nabla \\times \\vec{F} = \\begin{vmatrix} \\hat{i} & \\hat{j} & \\hat{k} \\\\ \\frac{\\partial}{\\partial x} & \\frac{\\partial}{\\partial y} & \\frac{\\partial}{\\partial z} \\\\ x^2-y^2+x & -(2xy+y) & 0 \\end{vmatrix}$$
• $\\hat{i}\\left(0 - 0\\right) - \\hat{j}\\left(0 - 0\\right) + \\hat{k}\\left(\\frac{\\partial}{\\partial x}(-2xy-y) - \\frac{\\partial}{\\partial y}(x^2-y^2+x)\\right)$
• $= \\hat{k}\\left(-2y - (-2y)\\right) = \\hat{k}(-2y + 2y) = \\mathbf{0}$
Thus, $\\vec{F}$ is <strong>irrotational</strong>.

<strong>3. Finding Scalar Potential $\\phi$ ($d\\phi = \\nabla\\phi \\cdot d\\vec{r} = \\vec{F} \\cdot d\\vec{r}$):</strong>
$$d\\phi = (x^2 - y^2 + x)dx - (2xy + y)dy$$
• $\\frac{\\partial \\phi}{\\partial x} = x^2 - y^2 + x \\implies \\phi = \\frac{x^3}{3} - x y^2 + \\frac{x^2}{2} + g(y)$
• Differentiating with respect to $y$:
  $$\\frac{\\partial \\phi}{\\partial y} = -2xy + g'(y) = -(2xy + y) = -2xy - y$$
• Equating gives: $g'(y) = -y \\implies g(y) = -\\frac{y^2}{2} + C$.
• <strong>Final Scalar Potential:</strong>
  $$\\mathbf{\\phi(x,y) = \\frac{x^3}{3} + \\frac{x^2}{2} - x y^2 - \\frac{y^2}{2} + C}$$""",
        "Always add the arbitrary constant of integration C to the scalar potential function.")

    add("math", 2, "🔥 Asked in SEE Feb 2026, CIE-1 • 7 Marks", "📐 Derivation / Formula", "Directional Derivative",
        "Find the directional derivative of φ = x y z² + x z at the point (1, 1, 1) in the direction of the outward normal to the surface 3 x y² + y = z taken at the point (0, 1, 1).",
        "Directional derivative = ∇φ · (n̂). First find ∇φ at (1,1,1), then find normal vector N = ∇(3xy² + y - z) at (0,1,1) and normalize it.",
        """<strong>1. Gradient of $\\phi = x y z^2 + x z$:</strong>
$$\\nabla \\phi = \\frac{\\partial \\phi}{\\partial x}\\hat{i} + \\frac{\\partial \\phi}{\\partial y}\\hat{j} + \\frac{\\partial \\phi}{\\partial z}\\hat{k} = (y z^2 + z)\\hat{i} + (x z^2)\\hat{j} + (2 x y z + x)\\hat{k}$$
• Evaluating at the point $(1, 1, 1)$:
  $$\\nabla \\phi_{(1,1,1)} = (1(1)^2 + 1)\\hat{i} + (1(1)^2)\\hat{j} + (2(1)(1)(1) + 1)\\hat{k} = \\mathbf{2\\hat{i} + \\hat{j} + 3\\hat{k}}$$

<strong>2. Outward Normal to Surface $f(x, y, z) = 3 x y^2 + y - z = 0$:</strong>
$$\\vec{N} = \\nabla f = (3 y^2)\\hat{i} + (6 x y + 1)\\hat{j} + (-1)\\hat{k}$$
• Evaluating at the given surface point $(0, 1, 1)$:
  $$\\vec{N}_{(0,1,1)} = 3(1)^2\\hat{i} + (6(0)(1) + 1)\\hat{j} - \\hat{k} = \\mathbf{3\\hat{i} + \\hat{j} - \\hat{k}}$$
• Unit Normal Vector $\\hat{n}$:
  $$|\\vec{N}| = \\sqrt{3^2 + 1^2 + (-1)^2} = \\sqrt{9 + 1 + 1} = \\sqrt{11}$$
  $$\\hat{n} = \\frac{3\\hat{i} + \\hat{j} - \\hat{k}}{\\sqrt{11}}$$

<strong>3. Computing Directional Derivative:</strong>
$$\\text{D.D.} = \\nabla \\phi \\cdot \\hat{n} = (2\\hat{i} + \\hat{j} + 3\\hat{k}) \\cdot \\left(\\frac{3\\hat{i} + \\hat{j} - \\hat{k}}{\\sqrt{11}}\\right)$$
$$\\text{D.D.} = \\frac{2(3) + 1(1) + 3(-1)}{\\sqrt{11}} = \\frac{6 + 1 - 3}{\\sqrt{11}} = \\mathbf{\\frac{4}{\\sqrt{11}}}$$""",
        "Make sure to evaluate ∇φ at (1,1,1) but evaluate the surface normal ∇f at (0,1,1). Don't mix up the points!")

    add("math", 3, "🔥 Asked in SEE July 2026, CIE-1 2026 • 7 Marks", "🔢 Numerical Pattern", "Linear Systems",
        "Solve the following system of linear equations using the Gauss-Seidel iterative method by taking (0, 0, 0) as the initial approximation. Perform 3 iterations: \nx + 8y + 2z = -4 \n2x - y + 20z = 74 \n10x + 2y + z = 59",
        "First rearrange equations to ensure strict diagonal dominance (|a_ii| > sum |a_ij|).",
        """<strong>1. Rearranging for Strict Diagonal Dominance:</strong>
The coefficient matrix must satisfy $|a_{ii}| \\ge \\sum_{j \\ne i} |a_{ij}|$:
• Eq (1): $10x + 2y + z = 59$ (since $10 > 2 + 1$)
• Eq (2): $x + 8y + 2z = -4$ (since $8 > 1 + 2$)
• Eq (3): $2x - y + 20z = 74$ (since $20 > 2 + 1$)

<strong>2. Expressing Iteration Formulae:</strong>
$$x^{(k+1)} = \\frac{1}{10}\\left(59 - 2y^{(k)} - z^{(k)}\\right)$$
$$y^{(k+1)} = \\frac{1}{8}\\left(-4 - x^{(k+1)} - 2z^{(k)}\\right)$$
$$z^{(k+1)} = \\frac{1}{20}\\left(74 - 2x^{(k+1)} + y^{(k+1)}\\right)$$

<strong>3. Iteration Steps (Initial: $x^{(0)}=0, y^{(0)}=0, z^{(0)}=0$):</strong>
• <strong>Iteration 1:</strong>
  $x^{(1)} = \\frac{59 - 0 - 0}{10} = 5.9$
  $y^{(1)} = \\frac{-4 - 5.9 - 0}{8} = \\frac{-9.9}{8} = -1.2375$
  $z^{(1)} = \\frac{74 - 2(5.9) + (-1.2375)}{20} = \\frac{60.9625}{20} = 3.0481$

• <strong>Iteration 2:</strong>
  $x^{(2)} = \\frac{59 - 2(-1.2375) - 3.0481}{10} = \\frac{59 + 2.475 - 3.0481}{10} = 5.8427$
  $y^{(2)} = \\frac{-4 - 5.8427 - 2(3.0481)}{8} = \\frac{-15.9389}{8} = -1.9924$
  $z^{(2)} = \\frac{74 - 2(5.8427) + (-1.9924)}{20} = \\frac{60.3222}{20} = 3.0161$

• <strong>Iteration 3:</strong>
  $x^{(3)} = \\frac{59 - 2(-1.9924) - 3.0161}{10} = \\frac{59 + 3.9848 - 3.0161}{10} = \\mathbf{5.9969}$
  $y^{(3)} = \\frac{-4 - 5.9969 - 2(3.0161)}{8} = \\frac{-16.0291}{8} = \\mathbf{-2.0036}$
  $z^{(3)} = \\frac{74 - 2(5.9969) + (-2.0036)}{20} = \\frac{60.0026}{20} = \\mathbf{3.0001}$

(Exact theoretical solution is $x = 6, y = -2, z = 3$).""",
        "Gauss-Seidel uses the freshly updated values of variables immediately in the SAME iteration, unlike Gauss-Jacobi which waits for the next iteration.")

    add("math", 3, "🔥 Asked in SEE Feb 2026, CIE-2 • 7 Marks", "🔢 Numerical Pattern", "Matrix Differential Eq",
        "Solve the following system of first-order ordinary differential equations using the matrix method: y₁' = y₁ + y₂, y₂' = 4y₁ - 2y₂, with initial conditions y₁(0) = 1, y₂(0) = 6.",
        "Write in matrix form Y' = A Y. Find eigenvalues of A, then eigenvectors. Y(t) = c1 e^(λ1 t) v1 + c2 e^(λ2 t) v2.",
        """<strong>1. Matrix Representation:</strong>
$$\\begin{bmatrix} y_1' \\\\ y_2' \\end{bmatrix} = \\begin{bmatrix} 1 & 1 \\\\ 4 & -2 \\end{bmatrix} \\begin{bmatrix} y_1 \\\\ y_2 \\end{bmatrix} \\implies Y' = A Y$$

<strong>2. Characteristic Equation and Eigenvalues:</strong>
$$|A - \\lambda I| = \\begin{vmatrix} 1-\\lambda & 1 \\\\ 4 & -2-\\lambda \\end{vmatrix} = 0$$
$$(1-\\lambda)(-2-\\lambda) - 4 = \\lambda^2 + \\lambda - 6 = 0 \\implies (\\lambda + 3)(\\lambda - 2) = 0$$
Eigenvalues: $\\mathbf{\\lambda_1 = 2}, \\mathbf{\\lambda_2 = -3}$.

<strong>3. Eigenvectors:</strong>
• For $\\lambda_1 = 2$:
  $$\\begin{bmatrix} -1 & 1 \\\\ 4 & -4 \\end{bmatrix} \\begin{bmatrix} v_1 \\\\ v_2 \\end{bmatrix} = \\begin{bmatrix} 0 \\\\ 0 \\end{bmatrix} \\implies -v_1 + v_2 = 0 \\implies v_1 = v_2 \\implies \\vec{v}_1 = \\begin{bmatrix} 1 \\\\ 1 \\end{bmatrix}$$
• For $\\lambda_2 = -3$:
  $$\\begin{bmatrix} 4 & 1 \\\\ 4 & 1 \\end{bmatrix} \\begin{bmatrix} v_1 \\\\ v_2 \\end{bmatrix} = \\begin{bmatrix} 0 \\\\ 0 \\end{bmatrix} \\implies 4v_1 + v_2 = 0 \\implies v_2 = -4v_1 \\implies \\vec{v}_2 = \\begin{bmatrix} 1 \\\\ -4 \\end{bmatrix}$$

<strong>4. General Solution:</strong>
$$Y(t) = c_1 e^{2t} \\begin{bmatrix} 1 \\\\ 1 \\end{bmatrix} + c_2 e^{-3t} \\begin{bmatrix} 1 \\\\ -4 \\end{bmatrix}$$
$$y_1(t) = c_1 e^{2t} + c_2 e^{-3t}, \\quad y_2(t) = c_1 e^{2t} - 4c_2 e^{-3t}$$

<strong>5. Applying Initial Conditions ($y_1(0)=1, y_2(0)=6$):</strong>
$$c_1 + c_2 = 1$$
$$c_1 - 4c_2 = 6$$
Subtracting: $5c_2 = -5 \\implies c_2 = -1$.
Then $c_1 = 1 - c_2 = 1 - (-1) = 2$.
• <strong>Final Particular Solution:</strong>
  $$\\mathbf{y_1(t) = 2e^{2t} - e^{-3t}}, \\quad \\mathbf{y_2(t) = 2e^{2t} + 4e^{-3t}}$$""",
        "Verify your initial conditions: y1(0) = 2 - 1 = 1, y2(0) = 2 + 4 = 6. Matches given values perfectly!")

    add("math", 4, "🔥 Asked in SEE Feb 2026, CIE-2 • 7 Marks", "📐 Derivation / Formula", "Linear Algebra",
        "Construct an orthonormal basis for R³ using the Gram-Schmidt process given the linearly independent vectors: x₁ = [1, 1, 1]ᵀ, x₂ = [-1, 0, 1]ᵀ, x₃ = [-1, 2, 3]ᵀ.",
        "Step 1: v1 = x1. Step 2: v2 = x2 - (x2·v1/v1·v1)v1. Step 3: v3 = x3 - (x3·v1/v1·v1)v1 - (x3·v2/v2·v2)v2. Normalize each: u_i = v_i / ||v_i||.",
        """<strong>1. Gram-Schmidt Orthogonalization Algorithm:</strong>
Given basis $\\{x_1, x_2, x_3\\}$, find orthogonal basis $\\{v_1, v_2, v_3\\}$:

<strong>2. Step-by-Step Calculation:</strong>
• <strong>Step 1: First orthogonal vector:</strong>
  $$v_1 = x_1 = \\begin{bmatrix} 1 \\\\ 1 \\\\ 1 \\end{bmatrix}$$
  $$\\langle v_1, v_1 \\rangle = 1^2 + 1^2 + 1^2 = 3$$

• <strong>Step 2: Second orthogonal vector:</strong>
  $$\\langle x_2, v_1 \\rangle = (-1)(1) + (0)(1) + (1)(1) = -1 + 0 + 1 = 0$$
  $$v_2 = x_2 - \\frac{\\langle x_2, v_1 \\rangle}{\\langle v_1, v_1 \\rangle} v_1 = x_2 - 0 = \\begin{bmatrix} -1 \\\\ 0 \\\\ 1 \\end{bmatrix}$$
  $$\\langle v_2, v_2 \\rangle = (-1)^2 + 0^2 + 1^2 = 2$$

• <strong>Step 3: Third orthogonal vector:</strong>
  $$\\langle x_3, v_1 \\rangle = (-1)(1) + (2)(1) + (3)(1) = -1 + 2 + 3 = 4$$
  $$\\langle x_3, v_2 \\rangle = (-1)(-1) + (2)(0) + (3)(1) = 1 + 0 + 3 = 4$$
  $$v_3 = x_3 - \\frac{\\langle x_3, v_1 \\rangle}{\\langle v_1, v_1 \\rangle} v_1 - \\frac{\\langle x_3, v_2 \\rangle}{\\langle v_2, v_2 \\rangle} v_2$$
  $$v_3 = \\begin{bmatrix} -1 \\\\ 2 \\\\ 3 \\end{bmatrix} - \\frac{4}{3}\\begin{bmatrix} 1 \\\\ 1 \\\\ 1 \\end{bmatrix} - \\frac{4}{2}\\begin{bmatrix} -1 \\\\ 0 \\\\ 1 \\end{bmatrix} = \\begin{bmatrix} -1 - \\frac{4}{3} + 2 \\\\ 2 - \\frac{4}{3} + 0 \\\\ 3 - \\frac{4}{3} - 2 \\end{bmatrix} = \\begin{bmatrix} -1/3 \\\\ 2/3 \\\\ -1/3 \\end{bmatrix}$$
  Multiply by 3 for convenience: $v_3' = \\begin{bmatrix} -1 \\\\ 2 \\\\ -1 \\end{bmatrix}$. (Length $= \\sqrt{1+4+1} = \\sqrt{6}$).

<strong>3. Normalization (Orthonormal Basis $\\{u_1, u_2, u_3\\}$):</strong>
$$\\mathbf{u_1 = \\frac{1}{\\sqrt{3}}\\begin{bmatrix} 1 \\\\ 1 \\\\ 1 \\end{bmatrix}, \\quad u_2 = \\frac{1}{\\sqrt{2}}\\begin{bmatrix} -1 \\\\ 0 \\\\ 1 \\end{bmatrix}, \\quad u_3 = \\frac{1}{\\sqrt{6}}\\begin{bmatrix} -1 \\\\ 2 \\\\ -1 \\end{bmatrix}}$$""",
        "Check dot products: u1 · u2 = -1 + 0 + 1 = 0; u1 · u3 = -1 + 2 - 1 = 0; u2 · u3 = 1 + 0 - 1 = 0. All mutually orthogonal!")

    add("math", 5, "🔥 Asked in SEE July 2026, CIE-2 • 7 Marks", "🔢 Numerical Pattern", "Numerical Integration",
        "Use Runge-Kutta fourth-order method to estimate the value of y(2.1) taking step size h = 0.1 given dy/dx = y - x² with initial condition y(2) = 5.",
        "Formulas: k1 = h f(x0, y0), k2 = h f(x0 + h/2, y0 + k1/2), k3 = h f(x0 + h/2, y0 + k2/2), k4 = h f(x0 + h, y0 + k3). y1 = y0 + (1/6)(k1 + 2k2 + 2k3 + k4).",
        """<strong>1. Given Differential Equation & Initial Parameters:</strong>
• $f(x, y) = y - x^2$
• $x_0 = 2, \\quad y_0 = 5, \\quad h = 0.1 \\implies x_1 = 2.1$.

<strong>2. Step-by-Step RK4 Coefficients:</strong>
• <strong>$k_1$:</strong>
  $$k_1 = h \\cdot f(x_0, y_0) = 0.1 \\times [5 - 2^2] = 0.1 \\times 1 = \\mathbf{0.1000}$$

• <strong>$k_2$:</strong>
  $$x_0 + \\frac{h}{2} = 2 + 0.05 = 2.05, \\quad y_0 + \\frac{k_1}{2} = 5 + 0.05 = 5.05$$
  $$f(2.05, 5.05) = 5.05 - (2.05)^2 = 5.05 - 4.2025 = 0.8475$$
  $$k_2 = 0.1 \\times 0.8475 = \\mathbf{0.08475}$$

• <strong>$k_3$:</strong>
  $$x_0 + \\frac{h}{2} = 2.05, \\quad y_0 + \\frac{k_2}{2} = 5 + \\frac{0.08475}{2} = 5.042375$$
  $$f(2.05, 5.042375) = 5.042375 - 4.2025 = 0.839875$$
  $$k_3 = 0.1 \\times 0.839875 = \\mathbf{0.0839875}$$

• <strong>$k_4$:</strong>
  $$x_0 + h = 2.1, \\quad y_0 + k_3 = 5 + 0.0839875 = 5.0839875$$
  $$f(2.1, 5.0839875) = 5.0839875 - (2.1)^2 = 5.0839875 - 4.41 = 0.6739875$$
  $$k_4 = 0.1 \\times 0.6739875 = \\mathbf{0.06739875}$$

<strong>3. Final Weighted Update:</strong>
$$y(2.1) = y_0 + \\frac{1}{6}\\left(k_1 + 2k_2 + 2k_3 + k_4\\right)$$
$$\\Delta y = \\frac{1}{6}[0.1000 + 2(0.08475) + 2(0.0839875) + 0.06739875] = \\frac{1}{6}[0.50487375] = 0.084146$$
$$\\mathbf{y(2.1) = 5 + 0.084146 = 5.0841}$$""",
        "Keep at least 4 to 6 decimal places during intermediate steps of RK4 to avoid premature rounding error.")

    # =========================================================================
    # 3. INTRODUCTION TO C PROGRAMMING (25PLC14) - ALL 5 UNITS
    # =========================================================================
    add("cprog", 1, "🔥 Asked in SEE Feb 2026, CIE-1 2025 • 8 Marks", "📐 Derivation / Formula", "C Basics",
        "Explain the fundamental structure of a C program with an annotated diagram. Write a C program to read coordinates (x1, y1) and (x2, y2) and compute the straight-line distance.",
        "Use formula d = sqrt(pow(x2-x1, 2) + pow(y2-y1, 2)) from <math.h>. Sections: Documentation, Preprocessor, Globals, main().",
        """<strong>1. Structure of a C Program:</strong>
• <strong>Documentation Section:</strong> Comments indicating author, date, and program purpose (/* ... */).
• <strong>Link / Preprocessor Section:</strong> Header file inclusions (#include &lt;stdio.h&gt;, #include &lt;math.h&gt;).
• <strong>Definition Section:</strong> Symbolic constant declarations (#define PI 3.14159).
• <strong>Global Declaration Section:</strong> Global variables and user-defined function prototypes.
• <strong>main() Function:</strong> Execution entry point consisting of local declarations and executable statements.
• <strong>Sub-program Section:</strong> User-defined function definitions.

<strong>2. C Program for Euclidean Distance:</strong>
<pre class="bg-slate-900 text-slate-100 p-3 rounded-lg overflow-x-auto"><code>#include &lt;stdio.h&gt;
#include &lt;math.h&gt;

int main() {
    double x1, y1, x2, y2, distance;
    printf("Enter coordinates of point 1 (x1 y1): ");
    scanf("%lf %lf", &x1, &y1);
    printf("Enter coordinates of point 2 (x2 y2): ");
    scanf("%lf %lf", &x2, &y2);

    /* Formula: sqrt((x2 - x1)^2 + (y2 - y1)^2) */
    distance = sqrt(pow(x2 - x1, 2) + pow(y2 - y1, 2));

    printf("Straight-line Euclidean Distance = %.4lf\\n", distance);
    return 0;
}</code></pre>""",
        "Remember to include <math.h> and note that when compiling via gcc on Linux/VTU labs, the -lm linker flag is required.")

    add("cprog", 2, "🔥 Asked in SEE Feb 2026 • 8 Marks", "⚡ Exception / Trap", "Control Flow",
        "List the key differences between while loop and do-while loop. Write a C program to determine whether a given triangle is equilateral, isosceles, or scalene based on its side lengths.",
        "While is entry-controlled (checks condition before executing body); do-while is exit-controlled (executes body at least once). Check triangle inequality first!",
        """<strong>1. Differences Between while and do-while:</strong>
<div class="overflow-x-auto my-2">
<table class="w-full text-xs text-left border border-slate-300">
<thead class="bg-slate-100"><tr><th class="p-1 border">Feature</th><th class="p-1 border">while Loop</th><th class="p-1 border">do-while Loop</th></tr></thead>
<tbody>
<tr><td class="p-1 border font-semibold">Loop Type</td><td class="p-1 border">Entry-controlled loop</td><td class="p-1 border">Exit-controlled loop</td></tr>
<tr><td class="p-1 border font-semibold">Condition Test</td><td class="p-1 border">Tested BEFORE entering body</td><td class="p-1 border">Tested AFTER executing body</td></tr>
<tr><td class="p-1 border font-semibold">Min. Executions</td><td class="p-1 border">0 times (if initial condition is false)</td><td class="p-1 border">At least 1 time guaranteed</td></tr>
<tr><td class="p-1 border font-semibold">Syntax Semicolon</td><td class="p-1 border">No semicolon after while(cond)</td><td class="p-1 border">Terminated by semicolon: while(cond);</td></tr>
</tbody>
</table>
</div>

<strong>2. C Program for Triangle Classification:</strong>
<pre class="bg-slate-900 text-slate-100 p-3 rounded-lg overflow-x-auto"><code>#include &lt;stdio.h&gt;

int main() {
    float a, b, c;
    printf("Enter three sides of the triangle: ");
    scanf("%f %f %f", &a, &b, &c);

    /* Step 1: Validate Triangle Inequality Theorem */
    if (a + b &gt; c && a + c &gt; b && b + c &gt; a) {
        if (a == b && b == c) {
            printf("The triangle is EQUILATERAL.\\n");
        } else if (a == b || b == c || a == c) {
            printf("The triangle is ISOSCELES.\\n");
        } else {
            printf("The triangle is SCALENE.\\n");
        }
    } else {
        printf("Invalid sides: These lengths do NOT form a triangle.\\n");
    }
    return 0;
}</code></pre>""",
        "Always validate the Triangle Inequality Theorem (a + b > c && a + c > b && b + c > a) before classifying to prevent invalid triangles (e.g. 1, 2, 10).")

    add("cprog", 3, "🔥 Asked in SEE Feb 2026, CIE-2 2026 • 8 Marks", "📐 Derivation / Formula", "String Manipulation",
        "Write a complete C program to compare two strings character-by-character without using the built-in library function strcmp().",
        "Iterate while both characters are non-null and equal. If mismatch occurs, compute str1[i] - str2[i].",
        """<strong>1. Logic & Algorithm:</strong>
Iterate simultaneously across both string arrays using an index $i$. As long as characters at position $i$ are identical and neither has encountered the null terminator (\\0), increment $i$. When a mismatch occurs, return $(s1[i] - s2[i])$. If both reach \\0 together, strings are equal (diff = 0).

<strong>2. Complete C Program:</strong>
<pre class="bg-slate-900 text-slate-100 p-3 rounded-lg overflow-x-auto"><code>#include &lt;stdio.h&gt;

int main() {
    char str1[100], str2[100];
    int i = 0, diff = 0;

    printf("Enter string 1: ");
    scanf("%s", str1);
    printf("Enter string 2: ");
    scanf("%s", str2);

    /* Compare character by character */
    while (str1[i] != '\\0' && str2[i] != '\\0') {
        if (str1[i] != str2[i]) {
            diff = str1[i] - str2[i];
            break;
        }
        i++;
    }

    if (diff == 0 && str1[i] == '\\0' && str2[i] == '\\0') {
        printf("Strings are IDENTICAL (Equal).\\n");
    } else if (diff &gt; 0 || (diff == 0 && str1[i] != '\\0')) {
        printf("String 1 is GREATER than String 2.\\n");
    } else {
        printf("String 1 is SMALLER than String 2.\\n");
    }
    return 0;
}</code></pre>""",
        "Mention that the difference returned is based on ASCII values of the first mismatched characters.")

    add("cprog", 4, "🔥 Asked in SEE Feb 2026, CIE-2 2026 • 8 Marks", "📐 Derivation / Formula", "Recursion",
        "Define a function. Explain the four categories of user-defined functions in C with examples. Write a recursive C program to compute the factorial of a number.",
        "Categories: No args + No return; With args + No return; No args + With return; With args + With return. Base case for factorial: n <= 1 return 1.",
        """<strong>1. Function Categories:</strong>
1. <strong>No Arguments & No Return Value:</strong> \`void printHeader(void);\` - purely performs side-effects (e.g., printing banner).
2. <strong>Arguments but No Return Value:</strong> \`void displaySum(int a, int b);\` - caller passes values, function displays output internally.
3. <strong>No Arguments but Has Return Value:</strong> \`int readAge(void);\` - function reads input from user and sends value back.
4. <strong>Arguments and Has Return Value:</strong> \`float calculateTax(float salary);\` - most versatile modular pattern.

<strong>2. Recursive Factorial Program:</strong>
<pre class="bg-slate-900 text-slate-100 p-3 rounded-lg overflow-x-auto"><code>#include &lt;stdio.h&gt;

long long factorial(int n) {
    if (n &lt;= 1) {
        return 1; /* Base Case */
    }
    return n * factorial(n - 1); /* Recursive Step */
}

int main() {
    int num;
    printf("Enter a non-negative integer: ");
    scanf("%d", &num);
    if (num &lt; 0) {
        printf("Factorial of negative numbers is undefined.\\n");
    } else {
        printf("Factorial of %d = %lld\\n", num, factorial(num));
    }
    return 0;
}</code></pre>""",
        "Use 'long long' return type for factorials because n > 12 overflows a standard 32-bit signed int!")

    add("cprog", 5, "🔥 Asked in SEE Feb 2026, CIE-2 2026 • 8 Marks", "📐 Derivation / Formula", "Pointers & Structs",
        "Write a C program using an array of structures to read marks of 3 students in 3 subjects. Calculate the total marks scored student-wise and subject-wise, and display the result in a neat tabular format.",
        "Declare struct Student { char name[50]; int marks[3]; int total; };. Loop over students and subjects.",
        """<strong>1. C Program with Array of Structures:</strong>
<pre class="bg-slate-900 text-slate-100 p-3 rounded-lg overflow-x-auto"><code>#include &lt;stdio.h&gt;

struct Student {
    char name[30];
    int marks[3];
    int total;
};

int main() {
    struct Student s[3];
    int subjectTotal[3] = {0, 0, 0};
    int i, j;

    /* Input Data */
    for (i = 0; i &lt; 3; i++) {
        s[i].total = 0;
        printf("Enter Student %d name: ", i + 1);
        scanf("%s", s[i].name);
        for (j = 0; j &lt; 3; j++) {
            printf("  Marks in Subject %d: ", j + 1);
            scanf("%d", &s[i].marks[j]);
            s[i].total += s[i].marks[j];
            subjectTotal[j] += s[i].marks[j];
        }
    }

    /* Output Table */
    printf("\\n--- STUDENT PERFORMANCE REPORT ---\\n");
    printf("%-15s %-8s %-8s %-8s %-8s\\n", "Name", "Sub 1", "Sub 2", "Sub 3", "Total");
    for (i = 0; i &lt; 3; i++) {
        printf("%-15s %-8d %-8d %-8d %-8d\\n", s[i].name, s[i].marks[0], s[i].marks[1], s[i].marks[2], s[i].total);
    }
    printf("%-15s %-8d %-8d %-8d\\n", "Subject Total", subjectTotal[0], subjectTotal[1], subjectTotal[2]);
    return 0;
}</code></pre>""",
        "Initialize accumulator variables (s[i].total = 0 and subjectTotal[j] = 0) before reading marks to avoid garbage values.")

    # =========================================================================
    # 4. INTRODUCTION TO AI AND APPLICATIONS (25ETC15 / 25ETC25) - ALL 5 UNITS
    # =========================================================================
    add("ai", 1, "🔥 Asked in SEE July 2026, CIE-1 2026 • 8 Marks", "📐 Derivation / Formula", "Search Algorithms",
        "Explain uninformed search strategies. Trace Breadth-First Search (BFS) and Depth-First Search (DFS) on a binary tree and compare them in terms of data structures, completeness, time complexity, and space complexity.",
        "BFS uses FIFO Queue and finds shallowest shortest path (O(b^d) memory); DFS uses LIFO Stack (O(bm) memory).",
        """<strong>1. Definitions:</strong>
• <strong>Uninformed (Blind) Search:</strong> Algorithms that have no domain-specific knowledge about how close a state is to the goal, other than traversing graph nodes systematically.
• <strong>Breadth-First Search (BFS):</strong> Explores the shallowest unexpanded nodes first layer-by-layer using a <strong>First-In-First-Out (FIFO) Queue</strong>.
• <strong>Depth-First Search (DFS):</strong> Explores the deepest node first along a single branch before backtracking using a <strong>Last-In-First-Out (LIFO) Stack</strong>.

<strong>2. Detailed Comparative Metric Table:</strong>
<div class="overflow-x-auto my-2">
<table class="w-full text-xs text-left border border-slate-300">
<thead class="bg-slate-100"><tr><th class="p-1 border">Criterion</th><th class="p-1 border">Breadth-First Search (BFS)</th><th class="p-1 border">Depth-First Search (DFS)</th></tr></thead>
<tbody>
<tr><td class="p-1 border font-semibold">Data Structure</td><td class="p-1 border">FIFO Queue</td><td class="p-1 border">LIFO Stack (or recursion)</td></tr>
<tr><td class="p-1 border font-semibold">Completeness</td><td class="p-1 border">Yes (if branching factor $b$ is finite)</td><td class="p-1 border">No (fails in infinite depth graphs without cycle checking)</td></tr>
<tr><td class="p-1 border font-semibold">Optimality</td><td class="p-1 border">Yes (for uniform step costs)</td><td class="p-1 border">No (may return non-optimal deep solution)</td></tr>
<tr><td class="p-1 border font-semibold">Time Complexity</td><td class="p-1 border">$O(b^d)$ (where $d$ is goal depth)</td><td class="p-1 border">$O(b^m)$ (where $m$ is maximum tree depth)</td></tr>
<tr><td class="p-1 border font-semibold">Space Complexity</td><td class="p-1 border">$O(b^d)$ (Critical drawback - severe memory exhaustion)</td><td class="p-1 border">$O(b \\cdot m)$ (Linear, extremely memory efficient)</td></tr>
</tbody>
</table>
</div>""",
        "Always emphasize space complexity: BFS requires exponential O(b^d) space which quickly exhausts RAM, whereas DFS requires only linear O(b*m) space.")

    add("ai", 2, "🔥 Asked in SEE July 2026, CIE-1 2026 • 7 Marks", "⚡ Exception / Trap", "Generative AI",
        "Explain Zero-shot, One-shot, and Few-shot prompting techniques with concrete examples. Describe the role of system prompts in controlling LLM behavior.",
        "Zero-shot gives no examples; One-shot provides 1 demonstration; Few-shot provides 2-5 demonstrations to establish pattern.",
        """<strong>1. Prompting Techniques:</strong>
• <strong>Zero-Shot Prompting:</strong> The user gives a task instruction to the model without providing any examples:
  - <em>Example:</em> "Classify the sentiment of this review: 'The battery lasts only 2 hours.' Output: [Positive / Negative]" $\\rightarrow$ Model predicts "Negative".
• <strong>One-Shot Prompting:</strong> Provides exactly one high-quality input-output demonstration to guide the format:
  - <em>Example:</em>
    "Input: 'Amazing display and crystal clear audio.' -> Output: Positive
     Input: 'Charging cable broke after 3 days.' -> Output:"
• <strong>Few-Shot Prompting:</strong> Provides multiple (2 to 5) diverse demonstrations, teaching the model complex edge cases or specialized schemas:
  - <em>Example:</em> Providing 3 examples of converting natural language SQL queries into valid SQLite syntax.

<strong>2. Role of System Prompts:</strong>
• A <strong>System Prompt</strong> establishes the foundational identity, persona, behavior boundaries, safety guardrails, and output format for the LLM before user inputs are processed.
• <strong>Key Functions:</strong>
  1. <strong>Constraint Enforcement:</strong> Forcing JSON-only replies or academic tone.
  2. <strong>Role Grounding:</strong> e.g., "You are an expert MSRIT examiner evaluating VTU chemistry cycle papers."
  3. <strong>Hallucination Reduction:</strong> Instructing the model: "If the exact answer is not present in the provided notes, reply 'Information not found' rather than guessing." """,
        "Provide clear, labeled input-output prompt pairs for Zero-shot, One-shot, and Few-shot to earn all 7 marks.")

    add("ai", 3, "🔥 Asked in SEE July 2026 • 7 Marks", "📐 Derivation / Formula", "Machine Learning Core",
        "Explain the mathematical foundation and working principle of the Naive Bayes Classification algorithm. Why is it termed 'Naive'?",
        "Bayes Theorem: P(C|X) = [P(X|C) * P(C)] / P(X). 'Naive' because it assumes all features are conditionally independent given class label.",
        """<strong>1. Bayes' Theorem Mathematical Foundation:</strong>
For a sample vector with features $X = (x_1, x_2, \\dots, x_n)$ and class label $C_k$:
$$P(C_k \\mid X) = \\frac{P(X \\mid C_k) \\cdot P(C_k)}{P(X)}$$
• $P(C_k \\mid X)$: Posterior probability of class given features.
• $P(C_k)$: Prior probability of class $C_k$.
• $P(X \\mid C_k)$: Likelihood of observing features $X$ given class $C_k$.
• $P(X)$: Marginal evidence probability (constant across all classes).

<strong>2. Why is it Called 'Naive'?:</strong>
It makes the strong (often unrealistic) <strong>conditional independence assumption</strong> that all features $x_i$ and $x_j$ are completely independent of each other given the class:
$$P(X \\mid C_k) = P(x_1, x_2, \\dots, x_n \\mid C_k) = \\prod_{i=1}^n P(x_i \\mid C_k)$$
This dramatically simplifies computational complexity from exponential to linear $O(n \\cdot k)$, while performing remarkably well in text classification and spam filtering!

<strong>3. Classification Decision Rule (MAP):</strong>
$$\\hat{y} = \\arg\\max_{k \\in \\{1, \\dots, K\\}} P(C_k) \\prod_{i=1}^n P(x_i \\mid C_k)$$""",
        "State explicitly that P(X) can be omitted during classification because it is a constant scaling factor for all candidate classes.")

    add("ai", 4, "🔥 Asked in SEE July 2026 • 10 Marks", "📐 Derivation / Formula", "AI Architectures",
        "Define an Expert System. Detail its core architectural components (Knowledge Base, Inference Engine, User Interface) and discuss its significance in complex engineering decision-making.",
        "Components: Knowledge Base (rules/facts), Inference Engine (forward/backward chaining), User Interface, Explanation Facility.",
        """<strong>1. Definition:</strong>
An Expert System is a specialized AI program that emulates the decision-making and problem-solving abilities of a human domain expert by applying logical inference rules over an extensive knowledge base.

<strong>2. Core Architectural Components:</strong>
• <strong>1. Knowledge Base:</strong>
  - Contains factual domain knowledge and heuristic operational rules formatted typically as production rules: \`IF (condition) THEN (action / conclusion)\`.
• <strong>2. Inference Engine:</strong>
  - The reasoning brain of the system. Applies logic to the knowledge base:
    - <em>Forward Chaining (Data-driven):</em> Begins with known facts and applies rules to deduce new conclusions.
    - <em>Backward Chaining (Goal-driven):</em> Begins with a target hypothesis and searches backward for supporting facts.
• <strong>3. User Interface:</strong>
  - Allows non-technical human operators to input query symptoms and view expert diagnostics.
• <strong>4. Explanation Facility:</strong>
  - Crucial component that explains the chain of reasoning ('HOW' and 'WHY' a particular conclusion was reached).
• <strong>5. Knowledge Acquisition Module:</strong>
  - Facilitates updating and expanding rules from domain experts.

<strong>3. Engineering Significance:</strong>
• Medical diagnostics (e.g., MYCIN), VLSI chip fault isolation, power grid load management, and aerospace failure diagnostics.""",
        "Mention the two primary reasoning strategies: Forward Chaining (data-driven) and Backward Chaining (goal-driven).")

    add("ai", 5, "🔥 Asked in SEE July 2026 • 10 Marks", "📐 Derivation / Formula", "Robotics",
        "List the different types of industrial robots based on their coordinate system and mechanical anatomy. Describe their features and work volume configurations.",
        "5 configurations: Cartesian (gantry), Cylindrical, Spherical (polar), Articulated (jointed-arm), SCARA. Compare work volume shapes.",
        """<strong>1. Industrial Robot Classification & Work Envelopes:</strong>
<div class="overflow-x-auto my-2">
<table class="w-full text-xs text-left border border-slate-300">
<thead class="bg-slate-100"><tr><th class="p-1 border">Robot Type</th><th class="p-1 border">Joint Types</th><th class="p-1 border">Work Volume Shape</th><th class="p-1 border">Typical Application</th></tr></thead>
<tbody>
<tr><td class="p-1 border font-semibold">Cartesian / Gantry</td><td class="p-1 border">3 Prismatic (Linear, PPP)</td><td class="p-1 border">Rectangular Box / Prism</td><td class="p-1 border">Pick-and-place, 3D printing, CNC milling</td></tr>
<tr><td class="p-1 border font-semibold">Cylindrical</td><td class="p-1 border">1 Revolute + 2 Prismatic (RPP)</td><td class="p-1 border">Cylinder with hollow core</td><td class="p-1 border">Assembly, machine tool loading/unloading</td></tr>
<tr><td class="p-1 border font-semibold">Spherical / Polar</td><td class="p-1 border">2 Revolute + 1 Prismatic (RRP)</td><td class="p-1 border">Portion of a Sphere</td><td class="p-1 border">Welding, die casting, material transfer</td></tr>
<tr><td class="p-1 border font-semibold">SCARA</td><td class="p-1 border">2 Revolute (parallel) + 1 Linear</td><td class="p-1 border">Cylindrical slice</td><td class="p-1 border">High-speed PCB electronic assembly</td></tr>
<tr><td class="p-1 border font-semibold">Articulated / Jointed</td><td class="p-1 border">All Revolute (typically 6 DOF)</td><td class="p-1 border">Irregular complex sphere</td><td class="p-1 border">Automotive spot welding, spray painting</td></tr>
</tbody>
</table>
</div>

<strong>2. Key Anatomy Features:</strong>
• <strong>Degrees of Freedom (DOF):</strong> Number of independent joint motions (typically 4 to 6).
• <strong>Work Volume (Work Envelope):</strong> The entire spatial boundary within 3D space that the robot's end-effector (wrist/tool) can reach.""",
        "Specify the joint sequence (e.g. Cartesian = PPP, Cylindrical = RPP, SCARA = RRRP) and draw the work envelope shapes.")

    # =========================================================================
    # 5. INTRODUCTION TO MECHANICAL ENGINEERING (25ESC134) - ALL 5 UNITS
    # =========================================================================
    add("mech", 1, "🔥 Asked in SEE July 2026, CIE-1 2026 • 8 Marks", "📐 Derivation / Formula", "Power Plants",
        "Explain with a neat schematic diagram the construction and working of a Hydroelectric (Hydel) Power Plant. Mention its merits and demerits.",
        "Components: Reservoir, Dam, Penstock, Surge Tank, Control Gate, Hydraulic Turbine, Generator, Tailrace.",
        """<strong>1. Working Principle:</strong>
A hydroelectric power plant converts the potential energy of water stored at an elevated reservoir into kinetic energy through a penstock, and then into mechanical rotational energy via a water turbine, which drives an electric generator.

<strong>2. Main Components:</strong>
• <strong>Reservoir & Dam:</strong> Stores water during rainy seasons and creates the required artificial hydraulic head ($H$).
• <strong>Trash Rack & Control Gate:</strong> Prevents floating debris from entering and regulates water flow rate.
• <strong>Penstock:</strong> High-pressure reinforced steel or concrete conduit conveying water from reservoir to turbine.
• <strong>Surge Tank:</strong> Installed near the turbine end of long penstocks to relieve water hammer pressure shocks when the turbine gate abruptly shuts!
• <strong>Hydraulic Turbine (Pelton / Francis / Kaplan):</strong> Converts kinetic energy into torque.
• <strong>Tailrace:</strong> Discharges used water back to the river downstream.

<strong>3. Power Generated Formula:</strong>
$$P = \\eta \\cdot \\rho \\cdot g \\cdot Q \\cdot H \\quad (\\text{in Watts})$$
where $\\rho = 1000\\text{ kg/m}^3$, $g = 9.81\\text{ m/s}^2$, $Q = \\text{discharge in m}^3\\text{/s}$, $H = \\text{effective head in meters}$.

<strong>4. Merits & Demerits:</strong>
• <strong>Merits:</strong> Zero greenhouse gas emissions, low operational and maintenance cost, rapid start-up (ideal for peak load management).
• <strong>Demerits:</strong> High initial capital cost, long gestation period, displacement of local communities and ecosystem disruption.""",
        "Always mention the critical function of the 'Surge Tank': absorbing water hammer shocks during sudden valve closure.")

    add("mech", 2, "🔥 Asked in SEE July 2026, CIE-1 2026 • 10 Marks", "📐 Derivation / Formula", "Machine Tools",
        "With neat sketches, explain the following lathe machining operations: (i) Plain Turning, (ii) Knurling, (iii) Taper Turning by swiveling compound rest, and (iv) Thread Cutting.",
        "Turning reduces diameter; Knurling produces diamond grip pattern; Taper turning swivels compound rest at tan alpha = (D-d)/(2L); Thread cutting synchronizes lead screw via half-nut.",
        """<strong>1. Lathe Machining Operations:</strong>
• <strong>(i) Plain (Cylindrical) Turning:</strong>
  - The cutting tool feeds parallel to the axis of rotation of the cylindrical workpiece to remove excess material and reduce its diameter uniformly over a specified length.
• <strong>(ii) Knurling:</strong>
  - An embossing operation that does NOT cut metal. A hardened knurling tool with patterned rollers is pressed hard against the revolving workpiece surface, creating a rough diamond or straight-line serrated pattern to provide a firm ergonomic finger grip (e.g. micrometers, gauge handles).
• <strong>(iii) Taper Turning by Swiveling Compound Rest:</strong>
  - Used for producing steep, short tapers. The compound rest base is unclamped and swiveled through a calculated half-taper angle $\\alpha$:
    $$\\tan \\alpha = \\frac{D - d}{2 L} \\implies \\alpha = \\tan^{-1}\\left(\\frac{D - d}{2 L}\\right)$$
    where $D$ is major diameter, $d$ is minor diameter, and $L$ is taper length. The tool is fed manually along the compound rest handwheel.
• <strong>(iv) Thread Cutting:</strong>
  - Generates helical grooves on cylindrical surfaces. The lathe lead screw is engaged with the carriage via a <strong>Half-Nut mechanism</strong>, synchronizing spindle rotation with linear carriage feed at a ratio determined by the change-gear train:
    $$\\frac{\\text{Driver Teeth}}{\\text{Driven Teeth}} = \\frac{\\text{Pitch of work to be cut}}{\\text{Pitch of lead screw}}$$""",
        "State the exact compound rest swivel angle formula tan(alpha) = (D - d) / (2L) to secure full numerical/theoretical marks.")

    add("mech", 3, "🔥 Asked in SEE July 2026, CIE-2 2026 • 10 Marks", "🔢 Numerical Pattern", "IC Engine Calculations",
        "After a test on a single-cylinder 4-stroke diesel engine, the following data were recorded: Cylinder bore D = 160 mm, Stroke length L = 200 mm, Mean Effective Pressure MEP = 7.5 bar, Engine speed N = 400 rpm, Torque on brake drum T = 190 N·m, Fuel consumption = 2.8 kg/hr, Calorific Value CV = 41,800 kJ/kg. Calculate: (i) Indicated Power, (ii) Brake Power, (iii) Frictional Power, and (iv) Brake Thermal Efficiency.",
        "For 4-stroke: n = N/2 = 200 power strokes/min. IP = (P_m * L * A * n) / 60, BP = (2 * pi * N * T) / 60000. eta_bth = BP / (m_f * CV).",
        """<strong>1. Given Data & Conversions:</strong>
• Bore $D = 160\\text{ mm} = 0.16\\text{ m} \\implies A = \\frac{\\pi}{4} D^2 = \\frac{\\pi}{4}(0.16)^2 = 0.020106\\text{ m}^2$
• Stroke $L = 200\\text{ mm} = 0.20\\text{ m}$
• $P_m = 7.5\\text{ bar} = 7.5 \\times 10^5\\text{ N/m}^2$
• Speed $N = 400\\text{ rpm}$. For a 4-stroke engine, power strokes per minute $n = \\frac{N}{2} = 200$.
• Torque $T = 190\\text{ N}\\cdot\\text{m}$
• Fuel consumption $\\dot{m}_f = 2.8\\text{ kg/hr} = \\frac{2.8}{3600} = 7.778 \\times 10^{-4}\\text{ kg/s}$
• $CV = 41,800\\text{ kJ/kg} = 41.8 \\times 10^6\\text{ J/kg}$

<strong>2. Step-by-Step Calculations:</strong>
• <strong>(i) Indicated Power (IP):</strong>
  $$IP = \\frac{P_m \\cdot L \\cdot A \\cdot n}{60} = \\frac{7.5 \\times 10^5 \\times 0.20 \\times 0.020106 \\times 200}{60} = \\mathbf{10.053\\text{ kW}}$$

• <strong>(ii) Brake Power (BP):</strong>
  $$BP = \\frac{2 \\pi N T}{60,000} = \\frac{2 \\times \\pi \\times 400 \\times 190}{60,000} = \\frac{477,522}{60,000} = \\mathbf{7.959\\text{ kW}}$$

• <strong>(iii) Frictional Power (FP):</strong>
  $$FP = IP - BP = 10.053 - 7.959 = \\mathbf{2.094\\text{ kW}}$$

• <strong>(iv) Brake Thermal Efficiency ($\\eta_{bth}$):</strong>
  $$\\text{Heat Input Rate} = \\dot{m}_f \\times CV = 7.778 \\times 10^{-4} \\times 41,800 = 32.511\\text{ kW}$$
  $$\\eta_{bth} = \\frac{BP}{\\dot{m}_f \\times CV} = \\frac{7.959}{32.511} = 0.2448 = \\mathbf{24.48\\%}$$""",
        "For 4-stroke engines, n = N/2 power strokes per minute! Dividing by 2 is the most common exam pitfall.")

    add("mech", 4, "🔥 Asked in SEE July 2026, CIE-2 2026 • 8 Marks", "📐 Derivation / Formula", "Power Transmission",
        "Sketch a simple and compound gear train mechanism and derive the expression for their velocity ratio (Train Value).",
        "Simple gear train: Speed ratio N1/Nn = Tn/T1 (intermediate idle gears do not affect magnitude). Compound gear train: N1/Nn = Product of teeth on driven / Product on driver.",
        """<strong>1. Simple Gear Train:</strong>
• Consists of a series of gears where each shaft carries only <strong>ONE single gear</strong>.
• Let Driver Gear 1 have speed $N_1$ and teeth $T_1$, intermediate idler gear 2 have $N_2, T_2$, and driven gear 3 have $N_3, T_3$:
  $$\\frac{N_1}{N_2} = \\frac{T_2}{T_1}, \\quad \\frac{N_2}{N_3} = \\frac{T_3}{T_2}$$
• Multiplying both ratios:
  $$\\frac{N_1}{N_2} \\times \\frac{N_2}{N_3} = \\frac{T_2}{T_1} \\times \\frac{T_3}{T_2} \\implies \\mathbf{\\frac{N_1}{N_3} = \\frac{T_3}{T_1}}$$
• <em>Conclusion:</em> Intermediate idle gears change only the direction of rotation, not the numerical speed ratio!

<strong>2. Compound Gear Train:</strong>
• At least one intermediate shaft carries <strong>TWO or more rigidly coupled gears</strong> rotating at the identical angular velocity ($N_2 = N_3$).
• Train Value ($TV$):
  $$TV = \\frac{\\text{Speed of Last Driven Gear}}{\\text{Speed of First Driver Gear}} = \\frac{\\text{Product of Teeth on Driving Gears}}{\\text{Product of Teeth on Driven Gears}}$$
  $$\\mathbf{\\frac{N_{\\text{first}}}{N_{\\text{last}}} = \\frac{\\prod \\text{Teeth on Driven Gears}}{\\prod \\text{Teeth on Driver Gears}}}$$""",
        "Highlight that intermediate gears in a simple gear train are called IDLE GEARS and have zero influence on overall gear ratio.")

    add("mech", 5, "🔥 Asked in SEE July 2026 • 10 Marks", "⚡ Exception / Trap", "EV & Automations",
        "Differentiate between Battery Electric Vehicles (EV) and Hybrid Electric Vehicles (HEV). Discuss regenerative braking with a functional block diagram.",
        "EV uses battery + electric motor only; HEV uses ICE + electric motor. Regenerative braking runs motor as generator to recharge battery.",
        """<strong>1. Electric Vehicle (EV) vs. Hybrid Electric Vehicle (HEV):</strong>
<div class="overflow-x-auto my-2">
<table class="w-full text-xs text-left border border-slate-300">
<thead class="bg-slate-100"><tr><th class="p-1 border">Parameter</th><th class="p-1 border">Pure Electric Vehicle (BEV)</th><th class="p-1 border">Hybrid Electric Vehicle (HEV)</th></tr></thead>
<tbody>
<tr><td class="p-1 border font-semibold">Propulsion Source</td><td class="p-1 border">100% Electric Motor powered by traction battery</td><td class="p-1 border">Internal Combustion Engine (ICE) + Electric Motor</td></tr>
<tr><td class="p-1 border font-semibold">Fuel Required</td><td class="p-1 border">Grid electricity (zero fossil fuel on board)</td><td class="p-1 border">Petrol / Diesel + recovered braking electricity</td></tr>
<tr><td class="p-1 border font-semibold">Tailpipe Emissions</td><td class="p-1 border">Absolute Zero tailpipe emissions</td><td class="p-1 border">Low to moderate tailpipe emissions</td></tr>
<tr><td class="p-1 border font-semibold">Range Anxiety</td><td class="p-1 border">Higher (dependent on EV charging network)</td><td class="p-1 border">None (can be refueled at standard petrol pumps)</td></tr>
<tr><td class="p-1 border font-semibold">Battery Pack Size</td><td class="p-1 border">Large (40 - 100+ kWh)</td><td class="p-1 border">Small (1 - 5 kWh)</td></tr>
</tbody>
</table>
</div>

<strong>2. Regenerative Braking System Working:</strong>
• During normal driving, the battery supplies electrical power to the electric motor, which drives the wheels.
• When the driver applies brakes or decelerates, the control electronics invert the magnetic field.
• The rotating vehicle momentum forces the electric motor to act as an <strong>ELECTRICAL GENERATOR</strong>.
• The counter-electromotive torque opposes wheel rotation, providing smooth braking deceleration.
• The generated AC electricity is rectified into DC and pumped back to recharge the traction battery, recovering 15% to 30% of otherwise wasted kinetic heat!""",
        "Explain that in regenerative braking, the electric traction motor switches operational mode to become a generator.")

    # =========================================================================
    # 6. CONSTITUTION OF INDIA & ETHICS (HSCC18 / HSCC28) - ALL 5 UNITS
    # =========================================================================
    add("const", 1, "🔥 Asked in CIE-1 2026, SEE July 2026 • 6 Marks", "📐 Derivation / Formula", "Constitutional Law",
        "Identify the significance of the Preamble in interpreting the constitutional provisions of India. State whether the Preamble is amendable.",
        "Preamble is the key to open the mind of the constitution makers. Amendable under Article 368 without destroying basic structure (Kesavananda Bharati case).",
        """<strong>1. Significance of the Preamble:</strong>
• The Preamble embodies the fundamental philosophy, ideals, values, and objectives upon which the Constitution of India is built.
• <strong>Aid to Interpretation:</strong> In the landmark <em>Kesavananda Bharati v. State of Kerala (1973)</em> case, the Supreme Court ruled that:
  1. The Preamble is an integral part of the Constitution.
  2. In case of ambiguous provisions in the Constitution where words admit of more than one interpretation, the interpretation that aligns with the noble vision of the Preamble must be adopted.

<strong>2. Key Ideals Enshrined:</strong>
• <strong>Sovereign:</strong> Complete internal autonomy and freedom from external foreign control.
• <strong>Socialist:</strong> Democratic socialism targeting eradication of poverty and inequality.
• <strong>Secular:</strong> State gives equal respect and protection to all religions without state religion.
• <strong>Democratic:</strong> Government by representatives elected through universal adult franchise.
• <strong>Republic:</strong> The head of state (President) is elected, not a hereditary monarch.

<strong>3. Amendability of Preamble:</strong>
• The Preamble CAN be amended under Article 368, provided such amendment does NOT violate or alter the <strong>'Basic Structure'</strong> of the Constitution.
• Amended once by the <strong>42nd Constitutional Amendment Act (1976)</strong>, which inserted three words: <em>'Socialist', 'Secular', and 'Integrity'</em>.""",
        "Cite the Kesavananda Bharati (1973) case and the 42nd Amendment (1976) which added 'Socialist, Secular, and Integrity'.")

    add("const", 2, "🔥 Asked in SEE July 2026, CIE-1 2026 • 6 Marks", "⚡ Exception / Trap", "Constitutional Law",
        "Explain the Right to Equality enshrined under Articles 14 to 18 of the Constitution of India, highlighting its legitimate exceptions.",
        "Art 14 (Equality before law), 15 (Prohibition of discrimination), 16 (Equal opportunity in public employment), 17 (Abolition of untouchability), 18 (Abolition of titles).",
        """<strong>1. Breakdown of Articles 14 to 18:</strong>
• <strong>Article 14:</strong> Equality before law and equal protection of the laws within the territory of India.
• <strong>Article 15:</strong> Prohibition of discrimination on grounds only of religion, race, caste, sex, or place of birth.
• <strong>Article 16:</strong> Equality of opportunity in matters of public employment.
• <strong>Article 17:</strong> Abolition of untouchability and prohibition of its practice in any form.
• <strong>Article 18:</strong> Abolition of aristocratic titles (except military and academic distinctions).

<strong>2. Constitutional Exceptions & Reasonable Classification:</strong>
• <strong>Intelligible Differentia:</strong> Article 14 does not require mathematical equality among unequals. It permits reasonable classification founded on an intelligible differentia with a rational nexus to the legislative objective.
• <strong>Special Provisions for Women & Children (Art 15(3)):</strong> State can make affirmative laws (e.g. maternity benefits).
• <strong>Advancement of Socially/Educationally Backward Classes (Art 15(4), 16(4)):</strong> Reservations in educational institutions and public employment for SC, ST, and OBCs.
• <strong>Immunity of President & Governors (Article 361):</strong> The President and Governors are not answerable to any court for the exercise and performance of the powers and duties of their office while in tenure.""",
        "Quote the famous legal doctrine: 'Article 14 forbids class legislation, but permits reasonable classification based on intelligible differentia.'")

    add("const", 3, "🔥 Asked in SEE July 2026, CIE-2 2026 • 6 Marks", "📐 Derivation / Formula", "Supreme Court Writs",
        "'The Supreme Court of India is known as the guardian of fundamental rights.' Analyze this statement with special reference to WRIT jurisdiction under Article 32.",
        "Dr. B.R. Ambedkar called Article 32 the 'Heart and Soul of the Constitution'. 5 Writs: Habeas Corpus, Mandamus, Prohibition, Certiorari, Quo-Warranto.",
        """<strong>1. Constitutional Significance of Article 32:</strong>
Dr. B.R. Ambedkar called Article 32 <em>"the very heart and soul of the Constitution"</em> because fundamental rights without a direct judicial remedy are meaningless declarations. Under Article 32, a citizen can move the Supreme Court directly by appropriate proceedings for the enforcement of Part III rights.

<strong>2. The Five Prerogative Writs:</strong>
1. <strong>Habeas Corpus ("To have the body of"):</strong>
   • Issued against unlawful or arbitrary detention of an individual by state or private actors. Commands the detaining authority to produce the prisoner before the court.
2. <strong>Mandamus ("We Command"):</strong>
   • Issued to a public official, tribunal, or lower court commanding them to perform a mandatory statutory public duty that they have failed or refused to do.
3. <strong>Prohibition:</strong>
   • Issued by a higher court to an inferior court/tribunal to prevent it from exceeding its jurisdiction or usurping jurisdiction that it does not possess.
4. <strong>Certiorari ("To be certified"):</strong>
   • Issued to quash an illegal order passed by a lower court/tribunal acting without jurisdiction or in violation of natural justice.
5. <strong>Quo-Warranto ("By what authority?"):</strong>
   • Issued to prevent illegal usurpation of a public office by an unqualified person.""",
        "Memorize the Latin translation of each writ (e.g., Habeas Corpus = 'You may have the body', Mandamus = 'We command') for instant full marks.")

    add("const", 4, "🔥 Asked in CIE-2 2026, SEE July 2026 • 6 Marks", "⚡ Exception / Trap", "Emergency Provisions",
        "Discuss the grounds for proclamation and constitutional effects of National Emergency (Article 352) and State Emergency / President's Rule (Article 356).",
        "Art 352: War, external aggression, or armed rebellion (44th Amendment). Art 356: Breakdown of constitutional machinery in a state.",
        """<strong>1. National Emergency (Article 352):</strong>
• <strong>Grounds:</strong> If the President is satisfied that a grave emergency exists whereby the security of India or any part thereof is threatened by <strong>War, External Aggression, or Armed Rebellion</strong>.
• <em>Note:</em> The word 'Armed Rebellion' replaced 'Internal Disturbance' via the 44th Constitutional Amendment (1978).
• <strong>Parliamentary Approval:</strong> Must be approved by BOTH Houses of Parliament within <strong>1 month</strong> by a special majority (2/3 present & voting, >50% total membership).
• <strong>Effects:</strong> Federal structure transforms into unitary; Centre can issue binding executive directions to states; Fundamental freedoms under Art 19 are suspended automatically during war/external aggression (Art 358); but <strong>Articles 20 and 21 can NEVER be suspended</strong>!

<strong>2. State Emergency / President's Rule (Article 356):</strong>
• <strong>Grounds:</strong> If the President receives a report from the Governor that governance in the state cannot be carried on in accordance with the provisions of the Constitution.
• <strong>Approval:</strong> Must be approved by Parliament within <strong>2 months</strong> by simple majority.
• <strong>Effects:</strong> State Legislative Assembly is dissolved or kept under suspended animation; State Governor administers on behalf of the President; Parliament passes the state budget.""",
        "Crucial trap: Articles 20 (rights of accused) and 21 (right to life) can NEVER be suspended even during a National Emergency (enacted by 44th Amendment).")

    add("const", 5, "🔥 Asked in CIE-2 2026, SEE July 2026 • 6 Marks", "⚡ Exception / Trap", "Professional Ethics",
        "Discuss the professional responsibility of engineers and the key impediments to responsible engineering action.",
        "Key impediments: Self-interest, Fear, Self-deception, Ignorance/Egocentric thinking, Microscopic vision, Groupthink, Uncritical acceptance of authority.",
        """<strong>1. Professional Responsibility of Engineers:</strong>
Engineers possess specialized technical knowledge that impacts public safety, environmental health, and civil infrastructure. Under codes of ethics (e.g. IEEE, ASME, NSPE), engineers must hold paramount the safety, health, and welfare of the public.

<strong>2. Major Impediments to Responsible Action:</strong>
1. <strong>Self-Interest:</strong> Prioritizing personal career advancement, kickbacks, or company quarterly bonuses over safety compliance.
2. <strong>Fear:</strong> Fear of losing one's job, whistleblowing retaliation, or angering management prevents engineers from speaking out against flawed designs.
3. <strong>Self-Deception & Wishful Thinking:</strong> Convincing oneself that anomalous sensor readings are mere noise rather than impending catastrophic hardware failure (e.g. Challenger O-ring disaster).
4. <strong>Microscopic (Tunnel) Vision:</strong> Focusing exclusively on narrow technical parameters without seeing the broad ecological or human consequences of the technology.
5. <strong>Groupthink:</strong> The psychological tendency in tightly-knit corporate teams to seek false consensus and suppress dissenting engineering opinions.
6. <strong>Uncritical Acceptance of Authority:</strong> Blindly implementing management directives to cut safety tests without independent ethical evaluation.""",
        "Mention real-world case examples like the Space Shuttle Challenger O-ring disaster to demonstrate profound mastery.")

    # =========================================================================
    # 7. COMMUNICATIVE ENGLISH & SOFT SKILLS (25HSCC16/26 / 25HSCP15)
    # =========================================================================
    add("eng", 1, "🔥 Asked in SEE July 2026, CIE-1 2025 • 8 Marks", "📐 Derivation / Formula", "Communication Theory",
        "Critically analyze how physical distance (Proxemics) influences the effectiveness of communication in professional engineering settings. Explain the three classical modes of persuasion: Ethos, Pathos, and Logos.",
        "Proxemics (Edward T. Hall): Intimate (0-1.5 ft), Personal (1.5-4 ft), Social (4-12 ft), Public (>12 ft). Aristotle: Ethos=Credibility, Pathos=Emotion, Logos=Logic.",
        """<strong>1. Proxemics (The Study of Spatial Communication):</strong>
Coined by anthropologist Edward T. Hall, proxemics analyzes the impact of physical space and seating arrangements on human interactions:
• <strong>Intimate Space (0 to 1.5 ft):</strong> Strictly reserved for close personal bonds; intruding in a professional context causes discomfort and hostility.
• <strong>Personal Space (1.5 to 4 ft):</strong> For close one-on-one professional chats and collaborative engineering pair programming.
• <strong>Social Space (4 to 12 ft):</strong> Standard distance for team meetings, conference tables, and client discussions. Promotes neutrality.
• <strong>Public Space (> 12 ft):</strong> Used during formal seminars, keynote presentations, and lecture halls.

<strong>2. Aristotle's Three Modes of Persuasion:</strong>
1. <strong>Ethos (Ethical Appeal / Credibility):</strong>
   • Establishing the speaker's authority, technical expertise, qualifications, and trustworthiness.
   • <em>Engineering Context:</em> Presenting professional credentials, certifications, and past project reliability.
2. <strong>Pathos (Emotional Appeal):</strong>
   • Connecting with the audience's human values, aspirations, empathy, and urgency.
   • <em>Engineering Context:</em> Demonstrating how an autonomous braking system saves real human lives and protects families.
3. <strong>Logos (Logical Appeal / Data-Driven Proof):</strong>
   • Convincing through empirical statistics, mathematical calculations, rigorous bench test results, and syllogistic reasoning.
   • <em>Engineering Context:</em> Presenting mean time between failures (MTBF), cost-benefit charts, and simulation graphs.""",
        "Always list Hall's 4 exact distance boundaries in feet, and attribute Ethos, Pathos, and Logos to Aristotle.")

    add("eng", 2, "🔥 Asked in SEE Feb 2026, CIE-1 • 8 Marks", "⚡ Exception / Trap", "Self-Management",
        "Write a detailed SWOC analysis framework for an engineering student. Discuss four scientifically proven stress management techniques for coping with project deadlines.",
        "SWOC: Strengths, Weaknesses, Opportunities, Challenges. Stress techniques: Diaphragmatic breathing, Progressive Muscle Relaxation (PMR), Mindfulness, Time-outs.",
        """<strong>1. SWOC Analysis Framework:</strong>
• <strong>Strengths (Internal):</strong> Strong mathematical foundations, proficiency in C/Python, fast learner, high curiosity.
• <strong>Weaknesses (Internal):</strong> Procrastination during non-exam weeks, stage fright during viva/presentations, poor sleep habits.
• <strong>Opportunities (External):</strong> Campus hackathons, IEEE student branch projects, internship openings in Bengaluru tech parks.
• <strong>Challenges / Threats (External):</strong> Rapidly evolving tech stack demands, stiff competition for campus placements, academic burnout.

<strong>2. Scientific Stress Management Techniques:</strong>
1. <strong>Diaphragmatic Deep Breathing (Box Breathing / 4-7-8 Technique):</strong>
   • Inhale for 4s, hold for 7s, exhale slowly for 8s. Stimulates the parasympathetic vagus nerve, reducing heart rate and cortisol levels.
2. <strong>Progressive Muscle Relaxation (PMR):</strong>
   • Systematically tensing muscle groups for 5 seconds and releasing for 15 seconds from feet to neck, breaking somatic anxiety feedback loops.
3. <strong>Mindfulness & Meditation:</strong>
   • Practicing non-judgmental present-moment awareness, reducing cognitive rumination over past exams.
4. <strong>Structured Time-Outs & Pomodoro Rhythm:</strong>
   • Studying in focused 25-minute sprints followed by 5-minute cognitive breaks to replenish prefrontal cortex attention reserves.""",
        "Categorize SWOC clearly: Strengths and Weaknesses are INTERNAL; Opportunities and Challenges are EXTERNAL.")

    add("eng", 3, "🔥 Asked in SEE Feb 2026, CIE-2 2026 • 8 Marks", "⚡ Exception / Trap", "Time Management",
        "Explain the Eisenhower Matrix for time management with a clear diagram. How does it help engineering students balance project deadlines and academic success?",
        "Divide tasks into 4 Quadrants: Urgent vs Important. Q1: Do Now, Q2: Schedule/Plan (Deep work), Q3: Delegate, Q4: Eliminate.",
        """<strong>1. The Eisenhower Matrix Framework:</strong>
Categorizes tasks based on two independent axes: <strong>Urgency</strong> (requires immediate attention) and <strong>Importance</strong> (contributes to high-value long-term goals).

<div class="overflow-x-auto my-2">
<table class="w-full text-xs text-left border border-slate-300">
<thead class="bg-slate-100">
<tr><th class="p-2 border">Category</th><th class="p-2 border">Urgent</th><th class="p-2 border">Not Urgent</th></tr>
</thead>
<tbody>
<tr>
<td class="p-2 border font-bold bg-slate-50">Important</td>
<td class="p-2 border bg-red-50 text-red-900">
<strong>QUADRANT I (Do First / Crisis):</strong><br>
• Tomorrow's CIE exam submission<br>
• Server outage in active production<br>
<em>Action: Execute immediately!</em>
</td>
<td class="p-2 border bg-emerald-50 text-emerald-900">
<strong>QUADRANT II (Schedule / Strategy):</strong><br>
• Regular GATE/Placement prep<br>
• Exercise, health & skill building<br>
<em>Action: Block dedicated time daily!</em>
</td>
</tr>
<tr>
<td class="p-2 border font-bold bg-slate-50">Not Important</td>
<td class="p-2 border bg-amber-50 text-amber-900">
<strong>QUADRANT III (Delegate / Deceit):</strong><br>
• Most ringing phone calls<br>
• Minor club administrative tasks<br>
<em>Action: Delegate or automate!</em>
</td>
<td class="p-2 border bg-slate-50 text-slate-700">
<strong>QUADRANT IV (Eliminate / Waste):</strong><br>
• Mindless social media doom-scrolling<br>
• Binge watching unrelated videos<br>
<em>Action: Drop and eliminate!</em>
</td>
</tr>
</tbody>
</table>
</div>

<strong>2. Strategic Value for Engineers:</strong>
High performers spend 60-70% of their time in <strong>Quadrant II</strong> (proactive preparation), which shrinks Quadrant I crises and eliminates Quadrant IV distractions.""",
        "Stress that Quadrant II (Important, Not Urgent) is the quadrant of maximum long-term success and prevents burnout.")

    add("eng", 4, "🔥 Asked in SEE Feb 2026, CIE-2 2026 • 8 Marks", "⚡ Exception / Trap", "Root Cause & Netiquette",
        "Your project team consistently misses submission deadlines despite having technically skilled members. Draw and explain a Fishbone (Ishikawa) Diagram to analyze the root causes. Explain online communication netiquette.",
        "Fishbone categories (6 Ms / 4 Ps): People, Process/Method, Technology/Tools, Management. Netiquette: avoid ALL CAPS, use BCC for privacy, professional tone.",
        """<strong>1. Fishbone (Ishikawa / Cause-and-Effect) Diagram:</strong>
A visual root-cause brainstorming tool that identifies contributing factors behind an effect (Project Delays) grouped into primary spine categories:
• <strong>People:</strong>
  - Lack of task ownership; interpersonal conflict; poor time management.
• <strong>Methods / Process:</strong>
  - Vague requirements; missing intermediate sprint milestones; absence of code reviews.
• <strong>Communication:</strong>
  - Over-reliance on fragmented chat channels; unrecorded decision meetings.
• <strong>Tools / Technology:</strong>
  - Merge conflicts in Git; uncalibrated lab equipment; slow compilation builds.
• <strong>Environment / Management:</strong>
  - Overlapping CIE exams; shifting scope from faculty advisors.

<strong>2. Essential Online Professional Netiquette:</strong>
1. <strong>Vendor / Mass Email Privacy:</strong> Use **Bcc (Blind Carbon Copy)** rather than 'To' or 'Cc' when emailing multiple external clients or student cohorts to prevent privacy leaks.
2. <strong>Avoid Accidental 'Reply All':</strong> Send replies only to the original sender unless every recipient genuinely requires the information.
3. <strong>Tone & Casing:</strong> Never write in ALL UPPERCASE letters (perceived as shouting). Maintain polite, factual, concise language.""",
        "Categorize causes in the Fishbone diagram into People, Methods, Tools, and Environment.")

    add("eng", 5, "🔥 Asked in SEE July 2026, CIE-2 2026 • 8 Marks", "📐 Derivation / Formula", "Professional Writing",
        "Imagine you have graduated with a degree in Electronics and Communication Engineering (ECE). Draft a formal Cover Letter applying for the role of Junior Hardware/Embedded Systems Engineer at an electronics firm.",
        "Include: Sender Info, Date, Recipient Address, Subject line, Salutation, 3 body paragraphs (Intro/hook, Skills/projects proof, Enthusiastic close), Sign-off.",
        """<strong>Formal Cover Letter Template:</strong>
<div class="bg-slate-50 p-3 rounded border text-xs font-mono leading-relaxed">
[Your Full Name]<br>
Bengaluru, Karnataka - 560054 | student@msrit.edu | +91 98765 43210<br>
LinkedIn: linkedin.com/in/ece-engineer | GitHub: github.com/ece-student<br>
<br>
27 October 2026<br>
<br>
The Hiring Manager,<br>
Embedded Systems Division, Apex Technologies Ltd.,<br>
Whitefield, Bengaluru - 560066<br>
<br>
<strong>Subject: Application for the Position of Junior Embedded Hardware Engineer (Job ID: EMB-2026)</strong><br>
<br>
Dear Hiring Manager,<br>
<br>
I am writing to express my strong interest in the Junior Embedded Hardware Engineer position at Apex Technologies. As a recent graduate in Electronics and Communication Engineering (ECE) from Ramaiah Institute of Technology (MSRIT), Bengaluru, with hands-on coursework in C Programming, Digital Electronics, and Embedded Sensor Interfacing, I am eager to contribute to your firmware development team.<br>
<br>
During my academic project work, I designed and programmed ARM Cortex-M microcontroller systems in embedded C, interfacing SPI and I2C optical sensors with low-power wireless transceivers. My capstone project reduced sensor power consumption by 28% through custom sleep-state scheduling. Additionally, my rigorous academic training at MSRIT has instilled strong discipline in version control, schematic debugging, and agile milestone execution.<br>
<br>
Apex Technologies' pioneering advancements in industrial IoT automation resonate strongly with my technical passion. I welcome the opportunity to discuss how my technical acumen and problem-solving drive align with your team's objectives. Thank you for your time and consideration.<br>
<br>
Sincerely,<br>
[Your Full Name]
</div>""",
        "Structure: Paragraph 1 = Position & source; Paragraph 2 = Specific project achievements & technical skills; Paragraph 3 = Company alignment & call to interview.")

    return cards

print("make_data module defined.")
