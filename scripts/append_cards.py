# append_cards.py
import json

def get_additional_cards():
    cards = []
    c_id = 51

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
    # ADDITIONAL CARDS: APPLIED CHEMISTRY (25CYC22)
    # =========================================================================
    add("chem", 1, "🔥 Asked in CIE-1 2026 • 5 Marks", "🔢 Numerical Pattern", "Concentration Cell",
        "Define a concentration cell. Represent a concentration cell formed by coupling two Cadmium electrodes immersed in Cadmium sulphate solutions of 0.05 M and 1.0 M respectively at 298 K. Calculate the cell potential.",
        "Formula: E_cell = (0.0591/n) log10 (C2/C1). For Cadmium, n = 2. C2 = 1.0 M, C1 = 0.05 M.",
        """<strong>1. Definition:</strong> A concentration cell is an electrochemical cell in which both half-cells consist of identical electrodes of the same metal dipped into solutions of the same electrolyte, but at differing concentrations (activities). The EMF is driven purely by the free energy change of dilution.

<strong>2. Cell Representation:</strong>
$$Cd(s) \\mid Cd^{2+}(0.05\\text{ M}) \\parallel Cd^{2+}(1.0\\text{ M}) \\mid Cd(s)$$

<strong>3. Calculation of Cell Potential at 298 K:</strong>
• Reaction: $Cd^{2+}(1.0\\text{ M}) \\rightarrow Cd^{2+}(0.05\\text{ M})$ ($n = 2$)
• Formula:
  $$E_{\\text{cell}} = \\frac{0.0591}{n} \\log_{10} \\left(\\frac{C_2}{C_1}\\right)$$
  $$E_{\\text{cell}} = \\frac{0.0591}{2} \\log_{10} \\left(\\frac{1.0}{0.05}\\right)$$
  $$\\frac{1.0}{0.05} = 20 \\implies \\log_{10}(20) = 1.3010$$
  $$E_{\\text{cell}} = 0.02955 \\times 1.3010 = \\mathbf{0.0384\\text{ V}} = \\mathbf{38.4\\text{ mV}}$$""",
        "Remember that E°_cell is zero for all concentration cells because both electrodes are the identical metal.")

    add("chem", 2, "🔥 Asked in CIE-1 2026 • 5 Marks", "⚡ Exception / Trap", "Galvanic Couple",
        "Give scientific reasons: (i) Why must a nut and bolt always be manufactured from the same metal in engineering assemblies? (ii) What is the role of anodization in protecting aluminium?",
        "Dissimilar metals in contact form a galvanic couple where the more active metal suffers intense galvanic corrosion. Anodization forms a protective Al2O3 layer.",
        """<strong>(i) Reason for Identical Metal Nut and Bolt:</strong>
• If a bolt and nut are made of two different metals (e.g., a steel bolt with a brass or copper nut) in an outdoor moist environment, an active <strong>Galvanic Couple</strong> is created.
• The metal with the lower standard reduction potential acts as an anode and suffers severe accelerated galvanic corrosion.
• If the anode has a small exposed area (e.g., steel bolt threads inside a large brass plate), intense localized corrosion causes rapid mechanical shear failure.
• Using the same metal eliminates contact potential difference ($\Delta E = 0$), completely preventing galvanic corrosion!

<strong>(ii) Protection via Anodization of Aluminium:</strong>
• Aluminium is made the anode in an electrolytic bath containing 15% $H_2SO_4$ at 15-20°C.
• Oxygen liberated at the anode reacts with aluminium to form a dense, adherent, uniform hexagonal porous layer of alumina:
  $$2Al + 3H_2O \\rightarrow Al_2O_3 + 6H^+ + 6e^-$$
• Boiling the anodized part in hot water converts porous amorphous $Al_2O_3$ into hydrated crystalline Boehmite ($Al_2O_3 \\cdot H_2O$), sealing all microscopic pores and providing exceptional corrosion resistance and electrical insulation.""",
        "State both the galvanic coupling risk of dissimilar metals and the sealing step of anodization in boiling water.")

    add("chem", 4, "🔥 Asked in SEE July 2026, CIE-2 2026 • 6 Marks", "🧪 Reaction / Mechanism", "Semiconductors",
        "Explain the construction, working, and advantages of a Pentacene Organic Thin-Film Transistor (OTFT).",
        "Pentacene (C22H14) is a five-ring fused aromatic hydrocarbon acting as a p-type organic semiconductor with high hole mobility > 1-5 cm²/(V·s).",
        """<strong>1. Structure of Pentacene:</strong>
Pentacene consists of five linearly fused benzene rings ($C_{22}H_{14}$). It forms highly crystalline, well-ordered herringbone packing thin films via thermal vacuum sublimation or solution deposition.

<strong>2. Device Construction (Bottom-Gate, Top-Contact OTFT):</strong>
• <strong>Substrate:</strong> Heavily doped Silicon ($Si$) or flexible polymer film (PET / Kapton).
• <strong>Gate Dielectric:</strong> Thermally grown $SiO_2$ or crosslinked polyvinyl phenol (PVP).
• <strong>Active Layer:</strong> 30-50 nm thin film of vacuum-evaporated Pentacene.
• <strong>Source & Drain Contacts:</strong> High work function metals (Gold, $Au$, work function $\\approx 5.1\\text{ eV}$) deposited on top of pentacene to minimize the Schottky injection barrier for holes.

<strong>3. Working Mechanism:</strong>
• Operates in <strong>accumulation mode</strong> as a p-type semiconductor.
• Applying a negative gate voltage ($V_{GS} < 0$) induces an electric field that attracts positive holes to the pentacene/dielectric interface, forming a high-conductivity hole channel.
• When a negative drain-source voltage ($V_{DS} < 0$) is applied, holes drift from source to drain, generating a controllable drain current ($I_D$).

<strong>4. Advantages:</strong>
1. Exceptionally high field-effect hole mobility: $\\mu_h > 1.0 - 5.0\\text{ cm}^2/(\\text{V}\\cdot\\text{s})$, rivaling amorphous Silicon ($a-Si:H$).
2. Low-temperature processing (< 100°C), compatible with lightweight, flexible, unbreakable plastic substrates for rollable displays and RFID tags.""",
        "Mention Gold (Au) electrodes for hole injection matching pentacene's HOMO level (~5.0 eV) to prevent contact resistance.")

    add("chem", 5, "🔥 Asked in SEE July 2026 • 6 Marks", "🧪 Reaction / Mechanism", "E-Waste Hydrometallurgy",
        "Explain the hydrometallurgical method for the extraction and recovery of Gold from printed circuit board (PCB) e-waste.",
        "Steps: Mechanical dismantling -> Acid leaching of base metals (Cu/Ni) -> Cyanide/Thiourea leaching of gold -> Precipitation or electrowinning.",
        """<strong>1. Principle:</strong>
Hydrometallurgical extraction selectively dissolves and recovers high-value precious metals (Au, Ag, Pd) from pulverized electronic scrap using aqueous chemical reagents under ambient or mild temperature conditions.

<strong>2. Step-by-Step Recovery Process:</strong>
• <strong>Step 1: Pre-treatment & Dismantling:</strong>
  Electronic components and connectors are mechanically desoldered from PCBs, crushed, and shredded to fine mesh powder.
• <strong>Step 2: Base Metal Stripping:</strong>
  The scrap is first leached with dilute Nitric Acid ($HNO_3$) or Sulphuric acid + Hydrogen peroxide ($H_2SO_4 + H_2O_2$) to selectively dissolve base metals ($Cu, Ni, Pb, Sn$), leaving behind the unreacted gold-rich residue.
• <strong>Step 3: Gold Dissolution (Leaching):</strong>
  The residue is leached using an alkaline Cyanide solution or non-toxic acidic Thiourea solution in the presence of oxygen or $Fe^{3+}$ oxidizer:
  $$4Au + 8CN^- + O_2 + 2H_2O \\rightarrow 4[Au(CN)_2]^- + 4OH^-$$
  (Gold forms the soluble dicyanoaurate complex $[Au(CN)_2]^-$).
• <strong>Step 4: Gold Recovery (Precipitation / Electrowinning):</strong>
  - <em>Cementation with Zinc:</em> Zinc dust is added to displace gold:
    $$2[Au(CN)_2]^- + Zn \\rightarrow [Zn(CN)_4]^{2-} + 2Au \\downarrow$$
  - Alternatively, gold is adsorbed onto Activated Carbon and recovered via electro-winning as pure 99.9% metallic gold ingots!""",
        "Write the dissolution reaction of gold into [Au(CN)2]- and subsequent zinc cementation displacement.")

    # =========================================================================
    # ADDITIONAL CARDS: ENGINEERING MATHEMATICS (25MAC11 / 25MAC21)
    # =========================================================================
    add("math", 1, "🔥 Asked in SEE July 2026 • 7 Marks", "🔢 Numerical Pattern", "Regula-Falsi Method",
        "The current i in an electric circuit is given by i = 10 e⁻ᵗ sin(2π t), where t is in seconds. Using the Regula-Falsi (False Position) method, find the value of t for which i = 2 amperes. Carry out three iterations.",
        "Set f(t) = 10 e^-t sin(2pi t) - 2 = 0. Find bracket [a, b] where f(a)*f(b) < 0. Formula: c = (a*f(b) - b*f(a)) / (f(b) - f(a)).",
        """<strong>1. Problem Formulation:</strong>
We seek the root of $f(t) = 10 e^{-t} \\sin(2\\pi t) - 2 = 0$.

<strong>2. Initial Bracketing (in Radians):</strong>
• At $t = 0$: $f(0) = 10(1)(0) - 2 = -2.0 < 0$
• At $t = 0.1$:
  $2\\pi(0.1) = 0.2\\pi = 0.6283\\text{ rad} \\implies \\sin(0.6283) = 0.5878$
  $e^{-0.1} = 0.9048$
  $f(0.1) = 10(0.9048)(0.5878) - 2 = 5.318 - 2 = +3.318 > 0$
• Hence, a root lies in the interval $[a, b] = [0, 0.1]$.
  $a = 0, \\quad f(a) = -2.0$
  $b = 0.1, \\quad f(b) = +3.318$

<strong>3. Regula-Falsi Iterations:</strong>
Formula: $c = \\frac{a f(b) - b f(a)}{f(b) - f(a)}$

• <strong>Iteration 1:</strong>
  $$c_1 = \\frac{0(3.318) - 0.1(-2.0)}{3.318 - (-2.0)} = \\frac{0.2}{5.318} = \\mathbf{0.0376\\text{ s}}$$
  $2\\pi(0.0376) = 0.2363\\text{ rad} \\implies \\sin(0.2363) = 0.2341$
  $e^{-0.0376} = 0.9631$
  $f(c_1) = 10(0.9631)(0.2341) - 2 = 2.2546 - 2 = +0.2546 > 0$
  Since $f(c_1) > 0$, replace $b$ with $c_1 = 0.0376$.

• <strong>Iteration 2:</strong>
  $$c_2 = \\frac{0(0.2546) - 0.0376(-2.0)}{0.2546 - (-2.0)} = \\frac{0.0752}{2.2546} = \\mathbf{0.03335\\text{ s}}$$
  $2\\pi(0.03335) = 0.2095\\text{ rad} \\implies \\sin(0.2095) = 0.2080$
  $e^{-0.03335} = 0.9672$
  $f(c_2) = 10(0.9672)(0.2080) - 2 = 2.0118 - 2 = +0.0118 > 0$
  Replace $b$ with $c_2 = 0.03335$.

• <strong>Iteration 3:</strong>
  $$c_3 = \\frac{0(0.0118) - 0.03335(-2.0)}{0.0118 - (-2.0)} = \\frac{0.0667}{2.0118} = \\mathbf{0.03315\\text{ s}}$$
• <strong>Result:</strong> After 3 iterations, $t \\approx \\mathbf{0.0332\\text{ seconds}}$. (Current reaches 2 A at ~33.2 ms).""",
        "Ensure calculator is strictly set in RADIANS. Evaluating 2*pi*t in degrees is an automatic zero-mark error!")

    add("math", 2, "🔥 Asked in SEE July 2026 • 7 Marks", "🔢 Numerical Pattern", "Multiple Integrals",
        "Find the volume of the sphere x² + y² + z² = a² using triple integration in spherical polar coordinates.",
        "x = r sinθ cosφ, y = r sinθ sinφ, z = r cosθ. Jacobian dV = r² sinθ dr dθ dφ. Limits: r from 0 to a, θ from 0 to π, φ from 0 to 2π.",
        """<strong>1. Coordinate Transformation to Spherical Polar:</strong>
• $x = r \\sin\\theta \\cos\\phi, \\quad y = r \\sin\\theta \\sin\\phi, \\quad z = r \\cos\\theta$
• The volume element is:
  $$dV = dx dy dz = r^2 \\sin\\theta \\, dr \\, d\\theta \\, d\\phi$$

<strong>2. Limits of Integration for the Full Sphere ($x^2+y^2+z^2 \\le a^2$):</strong>
• Radial distance: $r$ varies from $0$ to $a$
• Polar colatitude: $\\theta$ varies from $0$ to $\\pi$
• Azimuthal angle: $\\phi$ varies from $0$ to $2\\pi$

<strong>3. Step-by-Step Triple Integration:</strong>
$$V = \\iiint_V dV = \\int_0^{2\\pi} d\\phi \\int_0^\\pi \\sin\\theta \\, d\\theta \\int_0^a r^2 \\, dr$$
• Radial integral:
  $$\\int_0^a r^2 \\, dr = \\left[ \\frac{r^3}{3} \\right]_0^a = \\frac{a^3}{3}$$
• Angular $\\theta$ integral:
  $$\\int_0^\\pi \\sin\\theta \\, d\\theta = \\left[ -\\cos\\theta \\right]_0^\\pi = -(-1) - (-1) = 1 + 1 = 2$$
• Azimuthal $\\phi$ integral:
  $$\\int_0^{2\\pi} d\\phi = [\\phi]_0^{2\\pi} = 2\\pi$$

• <strong>Final Volume Evaluation:</strong>
  $$V = 2\\pi \\times 2 \\times \\frac{a^3}{3} = \\mathbf{\\frac{4}{3} \\pi a^3}$$""",
        "Show all 3 separated one-dimensional integrals clearly to secure all 7 marks.")

    add("math", 5, "🔥 Asked in SEE July 2026 • 7 Marks", "🔢 Numerical Pattern", "Simpson's Rule",
        "Evaluate the numerical integral I = ∫₀^(π/2) √(1 + cos³θ) dθ using Simpson's 1/3rd rule by dividing the interval into 6 equal parts.",
        "h = (b - a)/n = (π/2 - 0)/6 = π/12. Simpson's 1/3: I = (h/3)[(y0 + y6) + 4(y1 + y3 + y5) + 2(y2 + y4)].",
        """<strong>1. Formula & Step Size:</strong>
• Lower limit $a = 0$, Upper limit $b = \\pi/2$, Number of strips $n = 6$.
• Step size:
  $$h = \\frac{b - a}{n} = \\frac{\\pi/2 - 0}{6} = \\frac{\\pi}{12} \\approx 0.261799\\text{ rad} = 15^\\circ$$
• Let $f(\\theta) = \\sqrt{1 + \\cos^3\\theta}$.

<strong>2. Table of Ordinates:</strong>
<div class="overflow-x-auto my-2">
<table class="w-full text-xs text-left border border-slate-300">
<thead class="bg-slate-100"><tr><th class="p-1 border">i</th><th class="p-1 border">θ_i (deg / rad)</th><th class="p-1 border">cos θ_i</th><th class="p-1 border">y_i = √(1 + cos³ θ_i)</th></tr></thead>
<tbody>
<tr><td class="p-1 border">0</td><td class="p-1 border">0° (0 rad)</td><td class="p-1 border">1.0000</td><td class="p-1 border">y₀ = √(1 + 1) = 1.4142</td></tr>
<tr><td class="p-1 border">1</td><td class="p-1 border">15° (π/12)</td><td class="p-1 border">0.9659</td><td class="p-1 border">y₁ = √(1 + 0.9008) = 1.3787</td></tr>
<tr><td class="p-1 border">2</td><td class="p-1 border">30° (2π/12)</td><td class="p-1 border">0.8660</td><td class="p-1 border">y₂ = √(1 + 0.6495) = 1.2843</td></tr>
<tr><td class="p-1 border">3</td><td class="p-1 border">45° (3π/12)</td><td class="p-1 border">0.7071</td><td class="p-1 border">y₃ = √(1 + 0.3536) = 1.1634</td></tr>
<tr><td class="p-1 border">4</td><td class="p-1 border">60° (4π/12)</td><td class="p-1 border">0.5000</td><td class="p-1 border">y₄ = √(1 + 0.1250) = 1.0607</td></tr>
<tr><td class="p-1 border">5</td><td class="p-1 border">75° (5π/12)</td><td class="p-1 border">0.2588</td><td class="p-1 border">y₅ = √(1 + 0.0173) = 1.0086</td></tr>
<tr><td class="p-1 border">6</td><td class="p-1 border">90° (π/2)</td><td class="p-1 border">0.0000</td><td class="p-1 border">y₆ = √(1 + 0) = 1.0000</td></tr>
</tbody>
</table>
</div>

<strong>3. Applying Simpson's 1/3rd Rule:</strong>
$$I = \\frac{h}{3}\\left[(y_0 + y_6) + 4(y_1 + y_3 + y_5) + 2(y_2 + y_4)\\right]$$
• $y_0 + y_6 = 1.4142 + 1.0000 = 2.4142$
• $y_1 + y_3 + y_5 = 1.3787 + 1.1634 + 1.0086 = 3.5507 \\implies 4 \\times 3.5507 = 14.2028$
• $y_2 + y_4 = 1.2843 + 1.0607 = 2.3450 \\implies 2 \\times 2.3450 = 4.6900$
• Bracket Sum $= 2.4142 + 14.2028 + 4.6900 = 21.3070$
$$I = \\frac{0.2618}{3} \\times 21.3070 = 0.087266 \\times 21.3070 = \\mathbf{1.8593}$$""",
        "Simpson's 1/3rd rule requires an EVEN number of intervals (n = 6 strips).")

    # =========================================================================
    # ADDITIONAL CARDS: INTRODUCTION TO C PROGRAMMING (25PLC14)
    # =========================================================================
    add("cprog", 1, "🔥 Asked in SEE Feb 2026, CIE-1 • 8 Marks", "⚡ Exception / Trap", "Storage Classes",
        "List and compare the four storage classes in C: auto, static, extern, and register. Explain with a suitable program showing the difference between auto and static.",
        "Compare: Storage location (RAM/CPU register), Default value (Garbage/Zero), Scope (Local/Global), Lifetime (Block/Program duration).",
        """<strong>1. Comparison of Storage Classes:</strong>
<div class="overflow-x-auto my-2">
<table class="w-full text-xs text-left border border-slate-300">
<thead class="bg-slate-100"><tr><th class="p-1 border">Class</th><th class="p-1 border">Storage</th><th class="p-1 border">Default Initial Value</th><th class="p-1 border">Scope</th><th class="p-1 border">Lifetime</th></tr></thead>
<tbody>
<tr><td class="p-1 border font-semibold">auto</td><td class="p-1 border">Stack Memory</td><td class="p-1 border">Garbage (indeterminate)</td><td class="p-1 border">Local to block</td><td class="p-1 border">Until block exits</td></tr>
<tr><td class="p-1 border font-semibold">register</td><td class="p-1 border">CPU Register</td><td class="p-1 border">Garbage</td><td class="p-1 border">Local to block</td><td class="p-1 border">Until block exits</td></tr>
<tr><td class="p-1 border font-semibold">static</td><td class="p-1 border">Data Segment</td><td class="p-1 border">Zero (0)</td><td class="p-1 border">Local to block</td><td class="p-1 border">Entire program execution</td></tr>
<tr><td class="p-1 border font-semibold">extern</td><td class="p-1 border">Data Segment</td><td class="p-1 border">Zero (0)</td><td class="p-1 border">Global across files</td><td class="p-1 border">Entire program execution</td></tr>
</tbody>
</table>
</div>

<strong>2. C Demonstration: Auto vs Static:</strong>
<pre class="bg-slate-900 text-slate-100 p-3 rounded-lg overflow-x-auto"><code>#include &lt;stdio.h&gt;

void demo() {
    auto int a = 1;     /* re-initialized on every call */
    static int s = 1;   /* initialized ONLY once */

    printf("auto a = %d, static s = %d\\n", a, s);
    a++;
    s++;
}

int main() {
    demo(); /* Outputs: auto a = 1, static s = 1 */
    demo(); /* Outputs: auto a = 1, static s = 2 */
    demo(); /* Outputs: auto a = 1, static s = 3 */
    return 0;
}</code></pre>""",
        "Highlight that 'static' variables retain their value between successive function calls and are initialized only once.")

    add("cprog", 3, "🔥 Asked in SEE Feb 2026, CIE-2 • 8 Marks", "📐 Derivation / Formula", "2D Arrays",
        "Write a C program to perform addition of two matrices of order m x n and display the resulting sum matrix in proper rectangular grid format.",
        "Check that both matrices have identical dimensions m x n. Compute C[i][j] = A[i][j] + B[i][j].",
        """<strong>Complete Matrix Addition Program:</strong>
<pre class="bg-slate-900 text-slate-100 p-3 rounded-lg overflow-x-auto"><code>#include &lt;stdio.h&gt;

int main() {
    int m, n, i, j;
    int A[10][10], B[10][10], Sum[10][10];

    printf("Enter matrix dimensions rows (m) and cols (n): ");
    scanf("%d %d", &m, &n);

    printf("Enter elements of Matrix A:\\n");
    for (i = 0; i &lt; m; i++) {
        for (j = 0; j &lt; n; j++) {
            scanf("%d", &A[i][j]);
        }
    }

    printf("Enter elements of Matrix B:\\n");
    for (i = 0; i &lt; m; i++) {
        for (j = 0; j &lt; n; j++) {
            scanf("%d", &B[i][j]);
            /* Compute sum on the fly */
            Sum[i][j] = A[i][j] + B[i][j];
        }
    }

    printf("\\n--- RESULTANT SUM MATRIX (A + B) ---\\n");
    for (i = 0; i &lt; m; i++) {
        for (j = 0; j &lt; n; j++) {
            printf("%5d ", Sum[i][j]);
        }
        printf("\\n");
    }
    return 0;
}</code></pre>""",
        "Always format 2D output using a newline printf('\\n') after inner column loop completes to render a neat 2D matrix.")

    add("cprog", 5, "🔥 Asked in SEE Feb 2026, CIE-2 • 6 Marks", "📐 Derivation / Formula", "Pointers Call-by-Ref",
        "Write a C program to swap two numbers using pointers (call-by-reference). Explain why standard call-by-value fails to modify actual caller variables.",
        "In call-by-value, formal parameters are local stack copies; changes vanish on function return. Call-by-reference passes memory addresses.",
        """<strong>1. Why Call-by-Value Fails:</strong>
In C, when arguments are passed by value, the compiler copies the variable values into the called function's private stack frame. Any modifications affect only these temporary local copies; the caller's variables remain unchanged when the stack frame is destroyed upon return.

<strong>2. Swapping via Call-by-Reference Program:</strong>
<pre class="bg-slate-900 text-slate-100 p-3 rounded-lg overflow-x-auto"><code>#include &lt;stdio.h&gt;

/* Function accepts pointer addresses */
void swap(int *x, int *y) {
    int temp = *x; /* dereference x */
    *x = *y;       /* assign value at y to address x */
    *y = temp;     /* assign temp to address y */
}

int main() {
    int a = 10, b = 20;
    printf("Before swap: a = %d, b = %d\\n", a, b);

    /* Pass memory addresses using & */
    swap(&a, &b);

    printf("After swap:  a = %d, b = %d\\n", a, b);
    return 0;
}</code></pre>""",
        "Use dereference operator * to access values and address-of operator & when calling swap(&a, &b).")

    # =========================================================================
    # ADDITIONAL CARDS: CONSTITUTION OF INDIA (HSCC18 / HSCC28)
    # =========================================================================
    add("const", 2, "🔥 Asked in CIE-1 2026 • 6 Marks", "⚡ Exception / Trap", "Rights of Accused",
        "Describe the constitutional safeguards and fundamental rights guaranteed to an accused person under Article 20 of the Constitution of India.",
        "Article 20 contains 3 safeguards: (1) Protection against ex-post facto laws, (2) Protection against Double Jeopardy, (3) Protection against Self-Incrimination.",
        """<strong>1. Three Inviolable Protections Under Article 20:</strong>
• <strong>1. Protection Against Ex-Post Facto Laws (Article 20(1)):</strong>
  - No person can be convicted of any offence except for violation of a law that was in force at the actual time of the commission of the act.
  - A person cannot be subjected to a penalty greater than that which might have been inflicted under the law in force at the time of the offence. (Applies strictly to criminal laws, not civil liabilities or tax laws).
• <strong>2. Protection Against Double Jeopardy (Article 20(2)):</strong>
  - <em>"No person shall be prosecuted and punished for the same offence more than once."</em>
  - Protects an accused from facing multiple judicial trials and punishments by a court of law for the identical criminal act. (Does not bar administrative disciplinary proceedings).
• <strong>3. Protection Against Self-Incrimination (Article 20(3)):</strong>
  - <em>"No person accused of any offence shall be compelled to be a witness against himself."</em>
  - An accused individual cannot be physically or psychologically coerced into providing confessions. Narco-analysis, polygraph tests, and brain-mapping performed without consent violate Article 20(3) (Selvi v. State of Karnataka).""",
        "Cite the 3 distinct clauses: 20(1) Ex-post facto, 20(2) Double jeopardy, and 20(3) Self-incrimination.")

    add("const", 4, "🔥 Asked in CIE-2 2026 • 6 Marks", "📐 Derivation / Formula", "Election Commission",
        "Analyze the constitutional composition, powers, and functions of the Election Commission of India under Article 324.",
        "Article 324 vests superintendence, direction, and control of elections in ECI: Chief Election Commissioner + 2 Election Commissioners.",
        """<strong>1. Constitutional Composition (Article 324):</strong>
• The Election Commission consists of the <strong>Chief Election Commissioner (CEC)</strong> and such number of other Election Commissioners as the President may from time to time fix. Currently, it functions as a multi-member body with 1 CEC and 2 Election Commissioners having equal voting powers.
• Appointed by the President of India.
• <strong>Security of Tenure:</strong> The CEC enjoys security of tenure equivalent to a Supreme Court judge and can only be removed by presidential impeachment after an address by both Houses of Parliament with a special majority on grounds of proved misbehavior or incapacity.

<strong>2. Powers & Functions:</strong>
1. <strong>Administrative Functions:</strong>
   - Demarcation of constituencies (Delimitation Commission).
   - Preparation, revision, and publication of electoral rolls.
   - Recognition of political parties and allotment of election symbols.
2. <strong>Enforcement of Model Code of Conduct (MCC):</strong>
   - Ensures free and fair elections, preventing ruling parties from misusing government machinery or public funds.
3. <strong>Advisory Functions:</strong>
   - Advises the President or Governor on disqualification of sitting members of Parliament or State Legislatures.""",
        "Mention that the CEC cannot be removed at the pleasure of the executive; removal requires parliamentary impeachment identical to a Supreme Court judge.")

    return cards

print("append_cards module ready.")
