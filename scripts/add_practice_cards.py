# add_practice_cards.py
import json

def get_practice_cards():
    cards = []
    c_id = 101

    def add(subjectId, unit, pyqTag, badgeType, badgeLabel, question, hint, answer, examTip):
        nonlocal c_id
        cards.append({
            "id": f"card-prac-{c_id}",
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
    # 1. APPLIED CHEMISTRY (25CYC22) - PRACTICE
    # =========================================================================
    add("chem", 1, "🎯 Practice Question • High Probability", "🧪 Reaction / Mechanism", "Fuel Cell Practice",
        "Describe the construction and working of a Direct Methanol Fuel Cell (DMFC). Write the anodic, cathodic, and overall cell reactions. What are its advantages over hydrogen fuel cells?",
        "DMFC uses liquid methanol (CH3OH) directly as fuel with polymer electrolyte membrane (Nafion). No need for hydrogen storage tanks.",
        """<strong>1. Principle of Direct Methanol Fuel Cell (DMFC):</strong>
A DMFC is a sub-category of proton exchange membrane fuel cells (PEMFC) where liquid methanol ($CH_3OH$) diluted in water is fed directly to the anode without requiring a bulky external fuel reformer.

<strong>2. Construction Components:</strong>
• <strong>Anode (Fuel Electrode):</strong> Carbon cloth or paper loaded with Platinum-Ruthenium ($Pt-Ru$) catalyst nanoparticles. (Ruthenium prevents CO poisoning of Platinum sites).
• <strong>Cathode (Air Electrode):</strong> Porous carbon paper with pure Platinum ($Pt$) catalyst for oxygen reduction.
• <strong>Electrolyte:</strong> Solid Polymer Electrolyte membrane (typically <strong>Nafion</strong>, a sulfonated tetrafluoroethylene copolymer) that selectively conducts protons ($H^+$).
• <strong>Operating Temperature:</strong> $60^\\circ\\text{C} - 90^\\circ\\text{C}$.

<strong>3. Working Electrode Reactions:</strong>
• <strong>Anode Reaction (Oxidation of Methanol):</strong>
  $$CH_3OH + H_2O \\rightarrow CO_2 + 6H^+ + 6e^- \\quad (E^\\circ = +0.02\\text{ V})$$
• <strong>Cathode Reaction (Reduction of Oxygen):</strong>
  $$\\frac{3}{2} O_2 + 6H^+ + 6e^- \\rightarrow 3H_2O \\quad (E^\\circ = +1.23\\text{ V})$$
• <strong>Overall Cell Reaction:</strong>
  $$CH_3OH + \\frac{3}{2} O_2 \\rightarrow CO_2 + 2H_2O \\quad (E^\\circ_{\\text{cell}} = 1.21\\text{ V})$$
  (Theoretical thermodynamic EMF is $1.21\\text{ V}$; practical operating voltage is $0.5 - 0.7\\text{ V}$).

<strong>4. Advantages over Hydrogen Fuel Cells:</strong>
1. <strong>Liquid Fuel Convenience:</strong> Methanol is an easily transportable liquid with high energy density, eliminating complex high-pressure hydrogen storage cylinders.
2. <strong>Instant Refueling:</strong> Fuel cartridges can be swapped in seconds, ideal for military transceivers and mobile electronics.""",
        "Always highlight the role of the Pt-Ru bimetallic catalyst in preventing carbon monoxide (CO) catalyst poisoning.")

    add("chem", 2, "🎯 Practice Question • High Probability", "🧪 Reaction / Mechanism", "Corrosion Control Practice",
        "Explain the principle and working of Cathodic Protection with neat diagrams. Distinguish between the Sacrificial Anode Method and Impressed Current Cathodic Protection (ICCP).",
        "Principle: Force the structure to become the cathode. Sacrificial uses more active metal (Mg/Zn); ICCP uses external DC power supply.",
        """<strong>1. Principle of Cathodic Protection:</strong>
Corrosion occurs only at anodic sites where metal atoms lose electrons. Cathodic protection operates by supplying electrons from an external source or auxiliary anode, shifting the electrochemical potential of the protected structure into the immune region, thereby converting the <strong>entire base metal structure into a non-corroding CATHODE</strong>.

<strong>2. Comparison of the Two Methods:</strong>
<div class="overflow-x-auto my-2">
<table class="w-full text-xs text-left border border-slate-300">
<thead class="bg-slate-100"><tr><th class="p-1 border">Parameter</th><th class="p-1 border">Sacrificial Anode Method</th><th class="p-1 border">Impressed Current (ICCP)</th></tr></thead>
<tbody>
<tr><td class="p-1 border font-semibold">Driving Source</td><td class="p-1 border">Natural galvanic potential difference ($\Delta E$)</td><td class="p-1 border">External DC power source (rectifier)</td></tr>
<tr><td class="p-1 border font-semibold">Anode Material</td><td class="p-1 border">Active metals: Zinc ($Zn$), Magnesium ($Mg$), or Aluminium ($Al$)</td><td class="p-1 border">Inert anodes: Platinized titanium, graphite, high-silicon cast iron</td></tr>
<tr><td class="p-1 border font-semibold">External Power</td><td class="p-1 border">None required ($0\\text{ W}$)</td><td class="p-1 border">Continuous AC/DC electrical supply needed</td></tr>
<tr><td class="p-1 border font-semibold">Current Controllability</td><td class="p-1 border">Fixed by galvanic couple</td><td class="p-1 border">Smoothly adjustable via potentiostat</td></tr>
<tr><td class="p-1 border font-semibold">Application Scale</td><td class="p-1 border">Small pipelines, ship rudders, home water heaters</td><td class="p-1 border">Long cross-country oil pipelines, offshore drilling rigs</td></tr>
</tbody>
</table>
</div>""",
        "Mention that in ICCP the positive terminal of the DC power source connects to the inert anode and the negative terminal to the structure.")

    add("chem", 3, "🎯 Practice Question • High Probability", "🧪 Reaction / Mechanism", "Polymers Practice",
        "What are conducting polymers? Explain the mechanism of electrical conduction in Polyacetylene through oxidative (p-type) doping.",
        "Conjugated double bonds (-C=C-) form delocalized pi-electrons. Oxidative doping with I2 or FeCl3 removes electrons, forming polarons and bipolarons.",
        """<strong>1. Definition of Conducting Polymers:</strong>
Organic macromolecules with extensive conjugated alternating single and double carbon-carbon bonds ($\\dots - C = C - C = C - \\dots$) along their polymer backbone that exhibit metallic or semiconductor-like electrical conductivity when chemically or electrochemically doped.

<strong>2. Mechanism of Conduction via Oxidative ($p$-type) Doping:</strong>
• <strong>Undoped State:</strong> Pristine <em>trans</em>-polyacetylene has alternating $\\pi$-bonds with a bandgap of $\\sim 1.5\\text{ eV}$ and behaves as an electrical insulator ($10^{-10}\\text{ S/cm}$).
• <strong>Doping Step (Oxidation):</strong> Exposure of the polymer to an oxidizing electron-acceptor vapor such as Iodine ($I_2$) or Ferric chloride ($FeCl_3$):
  $$(CH)_x + \\frac{3y}{2} I_2 \\rightarrow [ (CH)_x^{y+} \\cdot y I_3^- ]$$
• <strong>Formation of Polarons & Bipolarons:</strong>
  1. Removal of a $\\pi$-electron from the backbone creates a radical cation known as a <strong>Polaron</strong> (a localized charge associated with structural distortion).
  2. Removal of a second electron from an already oxidized site yields a dication called a <strong>Bipolaron</strong> (two positive charges without unpaired spins).
• <strong>Charge Transport:</strong> Under an applied electric field, these positively charged bipolaron states migrate freely along the delocalized $\\pi$-conjugated chain and hop between adjacent chains, elevating conductivity by over 12 orders of magnitude to metallic levels ($\sim 10^3 - 10^5\\text{ S/cm}$)!""",
        "Mention the key conduction carriers: Polarons (radical cations) and Bipolarons (dications).")

    # =========================================================================
    # 2. ENGINEERING MATHEMATICS (25MAC11 / 25MAC21) - PRACTICE
    # =========================================================================
    add("math", 1, "🎯 Practice Question • High Probability", "🔢 Numerical Pattern", "Calculus Practice",
        "Find all the extreme values (local maxima, local minima, and saddle points) of the function f(x, y) = x³ + y³ - 3 a x y, where a > 0.",
        "Stationary points: fx = 0, fy = 0. Use second derivative test: r = fxx, s = fxy, t = fyy. Check rt - s^2.",
        """<strong>1. First-Order Partial Derivatives & Stationary Points:</strong>
$$f_x = \\frac{\\partial f}{\\partial x} = 3x^2 - 3ay = 0 \\implies y = \\frac{x^2}{a}$$
$$f_y = \\frac{\\partial f}{\\partial y} = 3y^2 - 3ax = 0 \\implies x = \\frac{y^2}{a}$$
• Substituting $y$ into the second equation:
  $$x = \\frac{1}{a} \\left(\\frac{x^2}{a}\\right)^2 = \\frac{x^4}{a^3} \\implies x(x^3 - a^3) = 0$$
• Real roots: $x = 0$ or $x = a$.
  - When $x = 0 \\implies y = 0$. Stationary point: $(0, 0)$.
  - When $x = a \\implies y = \\frac{a^2}{a} = a$. Stationary point: $(a, a)$.

<strong>2. Second-Order Partial Derivatives:</strong>
• $r = f_{xx} = 6x$
• $s = f_{xy} = -3a$
• $t = f_{yy} = 6y$
• Discriminant: $\\Delta = rt - s^2 = (6x)(6y) - (-3a)^2 = 36xy - 9a^2$.

<strong>3. Testing Stationary Points:</strong>
• <strong>At $(0, 0)$:</strong>
  $r = 0, \\quad s = -3a, \\quad t = 0$
  $$\\Delta = rt - s^2 = 0 - 9a^2 = -9a^2 < 0 \\quad (\\text{since } a > 0)$$
  Since $\\Delta < 0$, $(0, 0)$ is a <strong>SADDLE POINT</strong> (neither maximum nor minimum).
• <strong>At $(a, a)$:</strong>
  $r = 6a > 0$
  $t = 6a$
  $$\\Delta = rt - s^2 = 36a^2 - 9a^2 = 27a^2 > 0$$
  Since $\\Delta > 0$ and $r = 6a > 0$, the function attains a <strong>LOCAL MINIMUM</strong> at $(a, a)$.
• <strong>Minimum Value:</strong>
  $$f(a, a) = a^3 + a^3 - 3a(a)(a) = 2a^3 - 3a^3 = \\mathbf{-a^3}$$""",
        "Conclusion: Saddle point at (0, 0); Local minimum at (a, a) with minimum value -a³.")

    add("math", 3, "🎯 Practice Question • High Probability", "🔢 Numerical Pattern", "Linear Algebra Practice",
        "Using Rayleigh's Power method, find the largest (dominant) eigenvalue and the corresponding eigenvector of the matrix A = [[4, 1], [1, 3]], taking X₀ = [1, 0]ᵀ as initial guess. Perform 3 iterations.",
        "Algorithm: Y_k = A * X_k; λ_{k+1} = max element of Y_k; X_{k+1} = Y_k / λ_{k+1}.",
        """<strong>1. Given Data:</strong>
$$A = \\begin{bmatrix} 4 & 1 \\\\ 1 & 3 \\end{bmatrix}, \\quad X_0 = \\begin{bmatrix} 1 \\\\ 0 \\end{bmatrix}$$

<strong>2. Iteration Steps:</strong>
• <strong>Iteration 1:</strong>
  $$Y_1 = A X_0 = \\begin{bmatrix} 4 & 1 \\\\ 1 & 3 \\end{bmatrix} \\begin{bmatrix} 1 \\\\ 0 \\end{bmatrix} = \\begin{bmatrix} 4 \\\\ 1 \\end{bmatrix} = 4 \\begin{bmatrix} 1 \\\\ 0.25 \\end{bmatrix}$$
  $$\\lambda^{(1)} = 4, \\quad X_1 = \\begin{bmatrix} 1 \\\\ 0.25 \\end{bmatrix}$$

• <strong>Iteration 2:</strong>
  $$Y_2 = A X_1 = \\begin{bmatrix} 4 & 1 \\\\ 1 & 3 \\end{bmatrix} \\begin{bmatrix} 1 \\\\ 0.25 \\end{bmatrix} = \\begin{bmatrix} 4 + 0.25 \\\\ 1 + 0.75 \\end{bmatrix} = \\begin{bmatrix} 4.25 \\\\ 1.75 \\end{bmatrix} = 4.25 \\begin{bmatrix} 1 \\\\ 0.4118 \\end{bmatrix}$$
  $$\\lambda^{(2)} = 4.25, \\quad X_2 = \\begin{bmatrix} 1 \\\\ 0.4118 \\end{bmatrix}$$

• <strong>Iteration 3:</strong>
  $$Y_3 = A X_2 = \\begin{bmatrix} 4 & 1 \\\\ 1 & 3 \\end{bmatrix} \\begin{bmatrix} 1 \\\\ 0.4118 \\end{bmatrix} = \\begin{bmatrix} 4 + 0.4118 \\\\ 1 + 1.2353 \\end{bmatrix} = \\begin{bmatrix} 4.4118 \\\\ 2.2353 \\end{bmatrix} = 4.4118 \\begin{bmatrix} 1 \\\\ 0.5067 \\end{bmatrix}$$
  $$\\lambda^{(3)} = \\mathbf{4.412}, \\quad X_3 = \\mathbf{\\begin{bmatrix} 1 \\\\ 0.507 \\end{bmatrix}}$$

(Exact analytical dominant eigenvalue is $\\lambda = \\frac{7 + \\sqrt{5}}{2} \\approx 4.618$).""",
        "Always normalize the vector at each iteration by dividing by the largest magnitude component.")

    add("math", 4, "🎯 Practice Question • High Probability", "🔢 Numerical Pattern", "Interpolation Practice",
        "Using Lagrange's interpolation formula, find the value of y at x = 5 from the given data: (1, 2), (2, 4), (3, 8), (4, 16), (7, 128).",
        "Unequally spaced data points: Lagrange polynomial L(x) = sum(y_i * prod_{j!=i} (x - x_j)/(x_i - x_j)).",
        """<strong>1. Formula for Lagrange Interpolation:</strong>
$$y(x) = \\sum_{i=0}^n y_i \\cdot L_i(x) = \\sum_{i=0}^n y_i \\left( \\prod_{j \\ne i} \\frac{x - x_j}{x_i - x_j} \\right)$$

<strong>2. Given Coordinates:</strong>
$x_0 = 1, y_0 = 2$ | $x_1 = 2, y_1 = 4$ | $x_2 = 3, y_2 = 8$ | $x_3 = 4, y_3 = 16$ | $x_4 = 7, y_4 = 128$.
We evaluate at $x = 5$.

<strong>3. Terms Computation:</strong>
• $L_0(5) = \\frac{(5-2)(5-3)(5-4)(5-7)}{(1-2)(1-3)(1-4)(1-7)} = \\frac{(3)(2)(1)(-2)}{(-1)(-2)(-3)(-6)} = \\frac{-12}{36} = -\\frac{1}{3} \\implies y_0 L_0 = 2(-1/3) = -0.6667$
• $L_1(5) = \\frac{(5-1)(5-3)(5-4)(5-7)}{(2-1)(2-3)(2-4)(2-7)} = \\frac{(4)(2)(1)(-2)}{(1)(-1)(-2)(-5)} = \\frac{-16}{-10} = 1.6 \\implies y_1 L_1 = 4(1.6) = 6.4000$
• $L_2(5) = \\frac{(5-1)(5-2)(5-4)(5-7)}{(3-1)(3-2)(3-4)(3-7)} = \\frac{(4)(3)(1)(-2)}{(2)(1)(-1)(-4)} = \\frac{-24}{8} = -3 \\implies y_2 L_2 = 8(-3) = -24.0000$
• $L_3(5) = \\frac{(5-1)(5-2)(5-3)(5-7)}{(4-1)(4-2)(4-3)(4-7)} = \\frac{(4)(3)(2)(-2)}{(3)(2)(1)(-3)} = \\frac{-48}{-18} = \\frac{8}{3} \\implies y_3 L_3 = 16(8/3) = 42.6667$
• $L_4(5) = \\frac{(5-1)(5-2)(5-3)(5-4)}{(7-1)(7-2)(7-3)(7-4)} = \\frac{(4)(3)(2)(1)}{(6)(5)(4)(3)} = \\frac{24}{360} = \\frac{1}{15} \\implies y_4 L_4 = 128(1/15) = 8.5333$

<strong>4. Summation:</strong>
$$y(5) = -0.6667 + 6.4000 - 24.0000 + 42.6667 + 8.5333 = \\mathbf{32.9333}$$
(Notice: Points follow $y = 2^x$. At $x=5$, exact $2^5 = 32$. Polynomial interpolation gives $\\approx 32.93$).""",
        "Double-check the signs in denominators when computing each Lagrange cardinal basis polynomial Li(x).")

    # =========================================================================
    # 3. INTRODUCTION TO C PROGRAMMING (25PLC14) - PRACTICE
    # =========================================================================
    add("cprog", 1, "🎯 Practice Question • High Probability", "📐 Derivation / Formula", "Bitwise Logic Practice",
        "Explain the bitwise operators supported in C. Write a C program to check whether a given integer is a power of 2 using a bitwise expression.",
        "Operators: &, |, ^, ~, <<, >>. Condition for power of 2: (n > 0) && ((n & (n - 1)) == 0).",
        """<strong>1. Bitwise Operators in C:</strong>
• \`&\` (Bitwise AND): 1 only if both bits are 1.
• \`|\` (Bitwise OR): 1 if either bit is 1.
• \`^\` (Bitwise XOR): 1 if bits differ; 0 if identical.
• \`~\` (Bitwise One's Complement): Inverts all bits.
• \`&lt;&lt;\` (Left Shift): Multiplies by $2^k$.
• \`&gt;&gt;\` (Right Shift): Divides by $2^k$.

<strong>2. Power of 2 Logic & Program:</strong>
If $n$ is a power of 2 (e.g. $8 = 1000_2$), then $n-1$ has all lower bits flipped ($7 = 0111_2$).
Hence: \`n & (n - 1) == 0\`!

<pre class="bg-slate-900 text-slate-100 p-3 rounded-lg overflow-x-auto"><code>#include &lt;stdio.h&gt;

int main() {
    int n;
    printf("Enter a positive integer: ");
    scanf("%d", &n);

    if (n &gt; 0 && (n & (n - 1)) == 0) {
        printf("%d is a POWER OF 2.\\n", n);
    } else {
        printf("%d is NOT a power of 2.\\n", n);
    }
    return 0;
}</code></pre>""",
        "Include the condition n > 0 because 0 & (0 - 1) is 0, but 0 is not a power of 2!")

    add("cprog", 2, "🎯 Practice Question • High Probability", "📐 Derivation / Formula", "C Algorithms Practice",
        "Write a complete C program to check whether a given positive integer is an Armstrong number (e.g., 153 = 1³ + 5³ + 3³).",
        "Extract digits using % 10, cube them, accumulate sum, divide by 10. Check if sum == original.",
        """<strong>Armstrong Number C Program:</strong>
<pre class="bg-slate-900 text-slate-100 p-3 rounded-lg overflow-x-auto"><code>#include &lt;stdio.h&gt;
#include &lt;math.h&gt;

int main() {
    int num, originalNum, remainder, result = 0, count = 0;

    printf("Enter an integer: ");
    scanf("%d", &num);

    originalNum = num;

    /* Count number of digits */
    int temp = num;
    while (temp != 0) {
        temp /= 10;
        count++;
    }

    temp = num;
    while (temp != 0) {
        remainder = temp % 10;
        result += pow(remainder, count);
        temp /= 10;
    }

    if (result == originalNum) {
        printf("%d is an ARMSTRONG number.\\n", originalNum);
    } else {
        printf("%d is NOT an Armstrong number.\\n", originalNum);
    }
    return 0;
}</code></pre>""",
        "Preserve originalNum in a separate variable before running the destructive while loop (temp /= 10).")

    add("cprog", 3, "🎯 Practice Question • High Probability", "📐 Derivation / Formula", "Search Algorithm Practice",
        "Write a C program to implement Binary Search on a sorted array of N elements. State its best-case and worst-case time complexity.",
        "Array must be sorted. low = 0, high = n - 1. mid = low + (high - low) / 2. Best O(1), Worst O(log n).",
        """<strong>1. Binary Search C Program:</strong>
<pre class="bg-slate-900 text-slate-100 p-3 rounded-lg overflow-x-auto"><code>#include &lt;stdio.h&gt;

int binarySearch(int arr[], int n, int key) {
    int low = 0, high = n - 1;
    while (low &lt;= high) {
        int mid = low + (high - low) / 2;
        if (arr[mid] == key) {
            return mid; /* Element found */
        } else if (arr[mid] &lt; key) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
    return -1; /* Not found */
}

int main() {
    int arr[] = {12, 24, 36, 48, 60, 72, 84, 96};
    int n = sizeof(arr) / sizeof(arr[0]);
    int key = 60;

    int idx = binarySearch(arr, n, key);
    if (idx != -1) {
        printf("Element %d found at index %d (position %d).\\n", key, idx, idx + 1);
    } else {
        printf("Element %d not found in array.\\n", key);
    }
    return 0;
}</code></pre>

<strong>2. Complexity:</strong>
• <strong>Best Case:</strong> $O(1)$ (target is at exact center).
• <strong>Worst Case:</strong> $O(\\log_2 n)$ (halving search space each step).""",
        "Always calculate mid as low + (high - low) / 2 rather than (low + high) / 2 to prevent integer overflow in large arrays.")

    # =========================================================================
    # 4. INTRODUCTION TO AI AND APPLICATIONS (25ETC15 / 25ETC25) - PRACTICE
    # =========================================================================
    add("ai", 1, "🎯 Practice Question • High Probability", "📐 Derivation / Formula", "Agent Design Practice",
        "Explain the PEAS framework for designing an intelligent agent. Formulate the PEAS specifications for an Autonomous Self-Driving Taxi.",
        "PEAS: Performance measure, Environment, Actuators, Sensors. Detailed table for autonomous vehicle.",
        """<strong>1. What is the PEAS Framework?:</strong>
In Artificial Intelligence, the <strong>PEAS</strong> specification defines the task environment of an rational agent:
• <strong>P — Performance Measure:</strong> Metric evaluating how successful the agent is.
• <strong>E — Environment:</strong> The external world/operating context.
• <strong>A — Actuators:</strong> Mechanisms through which the agent takes actions.
• <strong>S — Sensors:</strong> Hardware devices through which the agent perceives environment states.

<strong>2. PEAS Specification for an Autonomous Self-Driving Taxi:</strong>
• <strong>Performance Measure:</strong>
  - Safety (zero collisions/injuries), passenger comfort, trip duration optimization, fuel/battery efficiency, adherence to traffic regulations, ride fare profit.
• <strong>Environment:</strong>
  - Public city roads, pedestrian crosswalks, erratic drivers, fluctuating weather (rain/fog), lane markings, traffic light signals, construction zones.
• <strong>Actuators:</strong>
  - Steering wheel servomotor, accelerator throttle, hydraulic brakes, turn signals, audio horn, display screen.
• <strong>Sensors:</strong>
  - LiDAR (3D point clouds), optical cameras (lane/sign detection), RADAR (long-range velocity tracking), Ultrasonic sensors (parking proximity), GPS, IMU (accelerometer/gyroscope).""",
        "Structure PEAS as 4 distinct bullet points or a clear table for full marks.")

    add("ai", 3, "🎯 Practice Question • High Probability", "📐 Derivation / Formula", "Machine Learning Practice",
        "Explain the step-by-step working principle of the K-Means Clustering algorithm. How does it iteratively reassign cluster centroids?",
        "Unsupervised algorithm: 1. Choose K. 2. Initialize centroids. 3. Assign each point to closest centroid. 4. Recompute centroids. 5. Repeat until convergence.",
        """<strong>1. What is K-Means Clustering?:</strong>
An unsupervised machine learning algorithm that partitions $N$ unlabeled data points into $K$ distinct, non-overlapping clusters where each point belongs to the cluster with the nearest mean (centroid).

<strong>2. Step-by-Step Algorithm:</strong>
1. <strong>Step 1 — Choose $K$:</strong>
   Select the desired number of clusters $K$ (often guided by the Elbow Method / Silhouette score).
2. <strong>Step 2 — Centroid Initialization:</strong>
   Randomly pick $K$ data points as the initial cluster centers: $\\mu_1, \\mu_2, \\dots, \\mu_K$.
3. <strong>Step 3 — Cluster Assignment:</strong>
   Assign each data point $x_i$ to its nearest centroid based on minimum Euclidean distance:
   $$c^{(i)} = \\arg\\min_j \\| x_i - \\mu_j \\|^2$$
4. <strong>Step 4 — Centroid Update:</strong>
   Recalculate the position of each centroid $\\mu_j$ as the arithmetic mean of all points assigned to that cluster:
   $$\\mu_j = \\frac{1}{|S_j|} \\sum_{x_i \\in S_j} x_i$$
5. <strong>Step 5 — Convergence Check:</strong>
   Repeat Steps 3 and 4 until centroids stop moving (change $< \\varepsilon$) or maximum iterations are reached.

<strong>3. Objective Function (Inertia / WCSS):</strong>
$$J = \\sum_{j=1}^K \\sum_{x_i \\in S_j} \\| x_i - \\mu_j \\|^2 \\quad \\rightarrow \\min$$""",
        "Write the Euclidean distance formula and state that K-means is an UNSUPERVISED learning algorithm.")

    # =========================================================================
    # 5. INTRODUCTION TO MECHANICAL ENGINEERING (25ESC134) - PRACTICE
    # =========================================================================
    add("mech", 1, "🎯 Practice Question • High Probability", "📐 Derivation / Formula", "Renewable Energy Practice",
        "Explain the working of a Tidal Power Plant with a schematic sketch. Distinguish between single-basin and double-basin tidal systems.",
        "Exploits gravitational pull of Moon/Sun causing high/low tides. Water flows through reversible bulb turbines during ebb and flood tides.",
        """<strong>1. Working Principle:</strong>
Tidal power harnesses the gravitational potential energy created by periodic oceanic tides (high tide / flood tide and low tide / ebb tide). A barrage (dam) across an estuary traps water at high tide, creating a hydraulic head difference across sluice gates.

<strong>2. Operational Cycle:</strong>
• <strong>Flood Generation:</strong> As high tide rises, water flows through sluice gates into the estuary basin, spinning low-head bulb turbines.
• <strong>Ebb Generation:</strong> As ocean tide recedes, the trapped high-level water inside the basin is discharged back into the ocean through turbines, generating electrical power.

<strong>3. Single-Basin vs. Double-Basin Systems:</strong>
• <strong>Single-Basin System:</strong> Has only one storage reservoir. Power generation is intermittent, stopping during tidal equalization.
• <strong>Double-Basin System:</strong> Uses two interconnected basins (an upper high-pool basin and a lower low-pool basin). Water flows continuously from high pool to low pool through turbines, providing uninterrupted base-load electrical power!""",
        "Mention the two primary generation cycles: Ebb generation (emptying) and Flood generation (filling).")

    add("mech", 4, "🎯 Practice Question • High Probability", "📐 Derivation / Formula", "Belt Drive Derivation Practice",
        "Derive the expression for the total length of an Open Belt Drive connecting two pulleys of radii r₁ and r₂ separated by center distance x.",
        "Total length L = 2(Arc length on pulley 1 + Arc length on pulley 2 + Straight length). Approximated as L = pi(r1+r2) + 2x + (r1-r2)^2/x.",
        """<strong>1. Geometry & Nomenclature:</strong>
• Radius of larger pulley $= r_1$
• Radius of smaller pulley $= r_2$
• Distance between pulley centers $= x$
• Angle of lap (contact) wrap angle: $\\alpha$ (where $\\sin\\alpha \\approx \\frac{r_1 - r_2}{x}$).

<strong>2. Derivation Steps:</strong>
• The total belt length $L$ comprises:
  $$L = 2 \\times [\\text{Arc } AB + \\text{Straight length } BC + \\text{Arc } CD]$$
• For the larger pulley: $\\text{Angle of contact} = \\pi + 2\\alpha$
  $$\\text{Arc length on larger pulley} = r_1(\\pi + 2\\alpha)$$
• For the smaller pulley: $\\text{Angle of contact} = \\pi - 2\\alpha$
  $$\\text{Arc length on smaller pulley} = r_2(\\pi - 2\\alpha)$$
• Straight length of belt $BC$:
  $$BC = \\sqrt{x^2 - (r_1 - r_2)^2} = x \\left[ 1 - \\left(\\frac{r_1 - r_2}{x}\\right)^2 \\right]^{1/2}$$
• Expanding by Binomial Theorem ($x \\gg r_1 - r_2$):
  $$BC \\approx x - \\frac{(r_1 - r_2)^2}{2x}$$

• Summing all segments and approximating $\\alpha \\approx \\sin\\alpha = \\frac{r_1 - r_2}{x}$:
  $$L = \\pi(r_1 + r_2) + 2\\alpha(r_1 - r_2) + 2x - \\frac{(r_1 - r_2)^2}{x}$$
  $$L = \\pi(r_1 + r_2) + 2\\left(\\frac{r_1 - r_2}{x}\\right)(r_1 - r_2) + 2x - \\frac{(r_1 - r_2)^2}{x}$$
  $$\\mathbf{L = \\pi(r_1 + r_2) + 2x + \\frac{(r_1 - r_2)^2}{x}}$$""",
        "State the binomial expansion approximation step: (1 - y)^(1/2) approx 1 - y/2.")

    # =========================================================================
    # 6. CONSTITUTION OF INDIA & ETHICS (HSCC18) - PRACTICE
    # =========================================================================
    add("const", 1, "🎯 Practice Question • High Probability", "📐 Derivation / Formula", "Judicial Review Practice",
        "Explain the doctrine of Judicial Review under Article 13 of the Indian Constitution. What are the Doctrine of Severability and Doctrine of Eclipse?",
        "Article 13 declares any law inconsistent with Fundamental Rights to be void. Severability separates valid from invalid parts; Eclipse shadows pre-constitutional laws.",
        """<strong>1. Article 13 & Judicial Review:</strong>
Article 13 is the cornerstone of constitutional supremacy. It declares that:
• All pre-constitutional laws (Article 13(1)) and post-constitutional laws (Article 13(2)) that are inconsistent with or take away Part III Fundamental Rights are <strong>VOID</strong> to the extent of such inconsistency.
• It empowers the High Courts (Article 226) and Supreme Court (Article 32) to review and strike down legislative enactments or executive orders.

<strong>2. Key Constitutional Doctrines Arising from Article 13:</strong>
1. <strong>Doctrine of Severability (Separability):</strong>
   • When only a specific section of a statute violates fundamental rights while the rest remains constitutional, courts do not invalidate the entire act.
   • If the valid portion is independent and can stand on its own without the invalid portion, only the offending clause is severed and struck down.
2. <strong>Doctrine of Eclipse:</strong>
   • Applies primarily to pre-constitutional laws (in force before Jan 26, 1950).
   • An inconsistent pre-constitutional law does not die completely; it remains dormant or 'eclipsed' by the shadow of the fundamental right.
   • If a constitutional amendment removes the inconsistency, the shadow is lifted and the law becomes active and enforceable again without re-enactment!""",
        "Distinguish clearly between Severability (surgical removal of bad sections) and Eclipse (dormant overshadowing of pre-1950 laws).")

    add("const", 5, "🎯 Practice Question • High Probability", "⚡ Exception / Trap", "Whistleblowing Practice",
        "Define Whistleblowing in engineering organizations. Under what ethical conditions is an engineer morally justified or obligated to blow the whistle?",
        "Whistleblowing is reporting unethical/unsafe practices outside regular chain of command. Justified by Richard DeGeorge's 5 ethical criteria.",
        """<strong>1. Definition:</strong>
Whistleblowing is the act by an employee of reporting illegal, dangerous, fraudulent, or unethical corporate practices to outside regulatory authorities, media, or law enforcement, typically after internal managerial channels have failed or been suppressed.

<strong>2. Richard DeGeorge's 5 Criteria for Morally Justified Whistleblowing:</strong>
1. <strong>Imminent Serious Harm:</strong> The engineering product or defect will cause serious and considerable harm to the public or environment.
2. <strong>Internal Escalation:</strong> The engineer has documented the danger and reported it to their immediate supervisor without satisfactory corrective action.
3. <strong>Exhaustion of Internal Remedies:</strong> The engineer has taken the grievance up the chain of corporate command to the highest executive board.
4. <strong>Documented Objective Proof:</strong> The engineer possesses verifiable, documented empirical evidence that would convince a reasonable, impartial technical observer.
5. <strong>Reasonable Likelihood of Success:</strong> Going public with the disclosure has a strong probability of preventing the anticipated disaster and saving lives.""",
        "Cite Richard DeGeorge's 5 criteria for ethical whistleblowing.")

    # =========================================================================
    # 7. COMMUNICATIVE ENGLISH & SOFT SKILLS (25HSCC16) - PRACTICE
    # =========================================================================
    add("eng", 2, "🎯 Practice Question • High Probability", "⚡ Exception / Trap", "Interpersonal Skills Practice",
        "Explain the Johari Window model of interpersonal communication and self-awareness. How does expanding the 'Open Arena' improve engineering teamwork?",
        "4 quadrants based on Known to Self vs Known to Others: Open/Arena, Blind Spot, Façade/Hidden, Unknown. Feedback shrinks blind spot.",
        """<strong>1. The Johari Window Framework:</strong>
Developed by psychologists Joseph Luft and Harrington Ingham, it visualizes how individuals communicate and develop mutual trust across two axes:
• <strong>Known / Unknown to Self</strong>
• <strong>Known / Unknown to Others</strong>

<div class="overflow-x-auto my-2">
<table class="w-full text-xs text-left border border-slate-300">
<thead class="bg-slate-100">
<tr><th class="p-2 border"></th><th class="p-2 border">Known to Others</th><th class="p-2 border">Not Known to Others</th></tr>
</thead>
<tbody>
<tr>
<td class="p-2 border font-bold bg-slate-50">Known to Self</td>
<td class="p-2 border bg-emerald-50 text-emerald-950">
<strong>1. OPEN ARENA:</strong><br>
Shared technical skills, recognized leadership style, transparent project goals.
</td>
<td class="p-2 border bg-amber-50 text-amber-950">
<strong>3. HIDDEN / FAÇADE:</strong><br>
Unexpressed doubts, private fears, undisclosed software bugs.
</td>
</tr>
<tr>
<td class="p-2 border font-bold bg-slate-50">Not Known to Self</td>
<td class="p-2 border bg-blue-50 text-blue-950">
<strong>2. BLIND SPOT:</strong><br>
Interrupting teammates, abrasive email tone, defensive body posture.
</td>
<td class="p-2 border bg-slate-50 text-slate-700">
<strong>4. UNKNOWN:</strong><br>
Latent leadership potential, untested crisis resilience.
</td>
</tr>
</tbody>
</table>
</div>

<strong>2. Value for Engineering Teams:</strong>
• <strong>Soliciting Constructive Feedback:</strong> Shrinks the Blind Spot and expands the Open Arena.
• <strong>Psychological Safety & Disclosure:</strong> Revealing technical roadblocks shrinks the Hidden area, preventing silent project failures.""",
        "Draw the 2x2 matrix and explain how feedback shrinks Quadrant 2 (Blind Spot).")

    add("eng", 5, "🎯 Practice Question • High Probability", "📐 Derivation / Formula", "Interview Technique Practice",
        "Explain the STAR technique (Situation, Task, Action, Result) for answering behavioral interview questions during engineering campus placements.",
        "STAR: Situation (context), Task (challenge/goal), Action (specific technical actions you took), Result (measurable quantifiable impact).",
        """<strong>1. The STAR Methodology:</strong>
A structured framework to articulate past project experiences clearly and persuasively during engineering behavioral interviews:
• <strong>S — Situation:</strong>
  - Set the background context. Describe the specific academic project, hackathon, or internship challenge (When, where, who).
• <strong>T — Task:</strong>
  - Define your specific responsibility or objective. What exact bottleneck needed fixing?
• <strong>A — Action:</strong>
  - Detail the technical actions **YOU personally executed**. Highlight algorithms chosen, circuits debugged, or collaboration tools used (use "I", not just "we").
• <strong>R — Result:</strong>
  - Share the quantifiable outcome. State performance improvements (e.g., latency reduction, power savings, grade, or awards).

<strong>2. Concrete Engineering Example:</strong>
• <em>Situation:</em> During our 1st-sem embedded robotics project, our team's autonomous line follower repeatedly lost track at high-speed sharp turns.
• <em>Task:</em> As firmware lead, I had to redesign the sensor polling routine to stabilize steering before the final evaluation.
• <em>Action:</em> I implemented a PID control loop in C to smooth PWM motor pulses and increased optical sensor ADC sampling frequency from 50 Hz to 250 Hz.
• <em>Result:</em> Tracking accuracy improved by 40%, lap time dropped by 3.2 seconds, and our team scored full 20/20 in the project demo!""",
        "Stress that the 'R' (Result) must include measurable data (percentages, times, or scores).")

    return cards

print("add_practice_cards module defined.")
