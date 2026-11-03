# scripts/extra_content.py
# Extra cards, quiz questions, and notes for Quantum Physics, Python Programming, and Kannada Kali

def get_extra_cards():
    cards = []
    cid = 350
    def add(subjectId, unit, pyqTag, badgeType, badgeLabel, question, hint, answer, examTip):
        nonlocal cid
        cards.append({
            "id": f"card-extra-{cid}",
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
        cid += 1

    # =========================================================================
    # PHYSICS EXTRA (4 CARDS -> Total 17)
    # =========================================================================
    add("phys", 1, "🎯 Practice Question • High Probability", "🧪 Reaction / Mechanism", "Semiconductor Laser",
        "Explain the principle, construction, and working of a Gallium Arsenide (GaAs) Semiconductor Diode Laser. Derive the expression for the threshold wavelength of emission.",
        "Direct bandgap p-n junction under heavy forward bias injection. Recombination of electron-hole pairs across Eg emits coherent photons with lambda = hc / Eg.",
        """<strong>1. Principle of Semiconductor Laser:</strong>
A semiconductor laser relies on <strong>stimulated recombination</strong> of electron-hole pairs across the direct bandgap ($E_g$) of a heavily doped $p\\text{-}n$ junction diode under strong forward bias.

<strong>2. Construction (GaAs Laser):</strong>
• <strong>Material:</strong> Gallium Arsenide ($GaAs$), a direct bandgap semiconductor with $E_g \\approx 1.44\\text{ eV}$ at $300\\text{ K}$.
• <strong>Doping:</strong> Both $p$ and $n$ regions are degenerate (heavily doped with $\\sim 10^{18} - 10^{19}\\text{ cm}^{-3}$). Fermi levels lie inside the conduction and valence bands respectively.
• <strong>Resonator Cavity:</strong> Opposite front and rear junction faces are cleaved and optically polished parallel along crystal planes to act as optical resonator mirrors without external mirrors.

<strong>3. Working & Lasing Action:</strong>
1. <strong>Forward Bias Injection:</strong> When a high forward bias voltage ($V \\ge E_g/e$) is applied, large concentrations of electrons are injected into the conduction band and holes into the valence band of the narrow depletion transition region ($\sim 0.1\\,\\mu\\text{m}$).
2. <strong>Population Inversion:</strong> A high-density inverted carrier population is established in the active depletion layer.
3. <strong>Stimulated Emission & Threshold:</strong> Spontaneous recombination emits photons of energy $h\\nu \\approx E_g$. These photons travel back and forth within the junction plane, stimulating further identical recombinations.
4. <strong>Emission Wavelength:</strong>
   $$h\\nu = \\frac{hc}{\\lambda} = E_g \\implies \\mathbf{\\lambda = \\frac{hc}{E_g} = \\frac{1.24\\,\\mu\\text{m}}{E_g\\text{ (in eV)}}}$$
   For GaAs ($E_g = 1.44\\text{ eV}$), $\\lambda \\approx 840 - 900\\text{ nm}$ (infrared).""",
        "Explain why Silicon (indirect bandgap) cannot be used: indirect recombination requires a phonon (lattice vibration), wasting energy as heat rather than light.")

    add("phys", 1, "🎯 Practice Question • High Probability", "📐 Derivation / Formula", "Fiber Attenuation",
        "Discuss the various attenuation and transmission loss mechanisms in optical fibers. Define the attenuation coefficient alpha in dB/km.",
        "Alpha = (10/L) * log10(P_in / P_out). Losses: Material absorption (intrinsic electronic & extrinsic OH- ions), Rayleigh scattering (~1/lambda^4), and Bending losses.",
        """<strong>1. Definition of Attenuation Coefficient ($\\alpha$):</strong>
Attenuation measures the loss of optical power as light pulses propagate along an optical fiber:
$$\\mathbf{\\alpha = \\frac{10}{L} \\log_{10}\\left(\\frac{P_{\\text{in}}}{P_{\\text{out}}}\\right) \\quad [\\text{dB/km}]}$$
where $L$ is fiber length in km, $P_{\\text{in}}$ is input optical power, and $P_{\\text{out}}$ is transmitted output power.

<strong>2. Major Loss Mechanisms:</strong>
• <strong>1. Material Absorption Losses:</strong>
  - <em>Intrinsic Absorption:</em> Fundamental absorption of pure silica glass in UV (electronic transitions) and infrared (molecular vibrations of $Si\\text{-}O$ bonds).
  - <em>Extrinsic Absorption:</em> Impurity absorption, especially resonance vibration peaks of trace water hydroxyl ions ($\\text{OH}^-$) around $1.38\\,\\mu\\text{m}$.
• <strong>2. Rayleigh Scattering Losses:</strong>
  - Caused by microscopic density fluctuations and refractive index inhomogeneities frozen into the glass matrix during manufacture.
  - Scattering loss scales inversely with the 4th power of wavelength: $\\mathbf{\\alpha_{\\text{Rayleigh}} \\propto \\frac{1}{\\lambda^4}}$. Hence longer wavelengths ($1.31\\,\\mu\\text{m}, 1.55\\,\\mu\\text{m}$) experience significantly lower scattering loss.
• <strong>3. Radiative Bending Losses:</strong>
  - <em>Macrobending:</em> Fiber bent with a radius of curvature comparable to a few centimeters, allowing core modes to exceed the critical angle and escape into the cladding.
  - <em>Microbending:</em> Microscopic imperfections and mechanical stresses along the core-cladding boundary causing mode coupling and radiation.""",
        "Remember the low-loss telecommunication optical windows: 1310 nm (zero dispersion window) and 1550 nm (minimum attenuation window ~0.2 dB/km).")

    add("phys", 3, "🎯 Practice Question • High Probability", "📐 Derivation / Formula", "Fermi-Dirac Distribution",
        "State the Fermi-Dirac Distribution function. Discuss its mathematical behavior at absolute zero (T = 0 K) and at higher temperatures (T > 0 K) with a neat graph. What is the physical significance of Fermi Energy?",
        "f(E) = 1 / [e^((E - E_F)/kT) + 1]. At T = 0 K: f(E)=1 for E < E_F, f(E)=0 for E > E_F. At T > 0 K: at E = E_F, f(E) = 1/2.",
        """<strong>1. Fermi-Dirac Distribution Function:</strong>
The probability $f(E)$ that an available quantum energy state $E$ is occupied by an electron in thermal equilibrium at temperature $T$ is given by:
$$\\mathbf{f(E) = \\frac{1}{e^{(E - E_F)/k_B T} + 1}}$$
where $E_F$ is the <strong>Fermi Energy</strong> and $k_B$ is the Boltzmann constant.

<strong>2. Mathematical Behavior & Analysis:</strong>
• <strong>Case 1: At Absolute Zero ($T = 0\\text{ K}$):</strong>
  1. For energy states below $E_F$ ($E < E_F$):
     $$\\frac{E - E_F}{k_B T} \\rightarrow -\\infty \\implies e^{-\\infty} = 0 \\implies f(E) = \\frac{1}{0 + 1} = 1$$
     Every quantum state below $E_F$ is <strong>100% completely occupied</strong>.
  2. For energy states above $E_F$ ($E > E_F$):
     $$\\frac{E - E_F}{k_B T} \\rightarrow +\\infty \\implies e^{+\\infty} = \\infty \\implies f(E) = \\frac{1}{\\infty + 1} = 0$$
     Every quantum state above $E_F$ is <strong>completely empty</strong>.
  • <em>Conclusion:</em> At $T = 0\\text{ K}$, $f(E)$ is a sharp rectangular step function!

• <strong>Case 2: At Finite Temperatures ($T > 0\\text{ K}$):</strong>
  - Thermal energy excites electrons from just below $E_F$ to states just above $E_F$.
  - Exactly at $E = E_F$:
    $$f(E_F) = \\frac{1}{e^0 + 1} = \\frac{1}{2} = 0.5$$
  • <strong>Physical Significance of $E_F$:</strong> Fermi energy represents the energy level that has exactly a <strong>50% probability of occupancy</strong> at any finite temperature $T > 0\\text{ K}$.""",
        "Highlight that at energies far above EF (E - EF >> kT), f(E) approaches the classical Maxwell-Boltzmann exponential tail e^(-(E-EF)/kT).")

    add("phys", 5, "🎯 Practice Question • High Probability", "📐 Derivation / Formula", "Bell States & Entanglement",
        "What is Quantum Entanglement? Show how a maximally entangled Bell state |Phi+> is generated using a Hadamard gate followed by a CNOT gate starting from |00>.",
        "Initial state |00>. Apply Hadamard to qubit 1: (|00> + |10>)/sqrt(2). Apply CNOT with control qubit 1, target qubit 2: flips |10> to |11>, giving (|00> + |11>)/sqrt(2).",
        """<strong>1. Quantum Entanglement:</strong>
Quantum Entanglement is a quantum mechanical phenomenon where two or more qubits exist in a composite state such that the individual quantum state of each qubit cannot be described independently of the state of the others, regardless of the physical distance separating them.

<strong>2. Generation of the Bell State $|\\Phi^+\\rangle$:</strong>
Consider two qubits initialized in the standard ground state:
$$|\\psi_0\\rangle = |0\\rangle \\otimes |0\\rangle = |00\\rangle$$

• <strong>Step 1: Apply Hadamard Gate ($H$) to Qubit 1:</strong>
  $$H = \\frac{1}{\\sqrt{2}} \\begin{pmatrix} 1 & 1 \\\\ 1 & -1 \\end{pmatrix}$$
  $$(H \\otimes I)|00\\rangle = \\left(\\frac{|0\\rangle + |1\\rangle}{\\sqrt{2}}\\right) \\otimes |0\\rangle = \\frac{|00\\rangle + |10\\rangle}{\\sqrt{2}}$$

• <strong>Step 2: Apply Controlled-NOT Gate ($CNOT_{1 \\to 2}$):</strong>
  The first qubit acts as control, and the second qubit acts as target.
  - For $|00\\rangle$: control is $0 \\implies$ target unchanged $\\rightarrow |00\\rangle$.
  - For $|10\\rangle$: control is $1 \\implies$ target flipped ($0 \\rightarrow 1$) $\\rightarrow |11\\rangle$.
  $$\\mathbf{|\\Phi^+\\rangle = CNOT \\left(\\frac{|00\\rangle + |10\\rangle}{\\sqrt{2}}\\right) = \\frac{|00\\rangle + |11\\rangle}{\\sqrt{2}}}$$

<strong>3. Measurement & Non-Locality:</strong>
Measuring qubit 1 immediately collapses the system:
- If qubit 1 is measured as $|0\\rangle$, qubit 2 instantly becomes $|0\\rangle$ with 100% certainty.
- If qubit 1 is measured as $|1\\rangle$, qubit 2 instantly becomes $|1\\rangle$ with 100% certainty.
There is zero probability of finding $|01\\rangle$ or $|10\\rangle$!""",
        "Write out the four complete orthogonal Bell states: |Phi±> = (|00> ± |11>)/sqrt(2) and |Psi±> = (|01> ± |10>)/sqrt(2).")

    # =========================================================================
    # PYTHON EXTRA (9 CARDS -> Total 17)
    # =========================================================================
    add("pyprog", 1, "🎯 Practice Question • High Probability", "⚡ Exception / Trap", "for-else & Loop Control",
        "Explain the role of break, continue, and pass statements in Python. What is the unique purpose of the else clause in a Python for or while loop? Illustrate with a prime number check program.",
        "break exits loop immediately; continue skips rest of current iteration; pass is a no-op placeholder. The else block in a loop executes ONLY IF the loop finished without encountering a break!",
        """<strong>1. Loop Control Statements:</strong>
• <code>break</code>: Terminates the nearest enclosing loop immediately. Control passes to the statement following the loop.
• <code>continue</code>: Skips the remaining statements in the current iteration and jumps to the next loop iteration.
• <code>pass</code>: A null syntactic placeholder statement that executes no code (used when code is required syntactically but no action is needed).

<strong>2. Unique Python Construct: <code>for...else</code> / <code>while...else</code>:</strong>
In Python, a loop can have an attached <code>else</code> block.
<strong>Rule:</strong> The <code>else</code> block executes <strong>ONLY IF</strong> the loop completes all iterations naturally <em>without hitting a <code>break</code> statement</em>!

<strong>3. Prime Number Detection Example:</strong>
<pre class="bg-slate-900 text-emerald-400 p-3 rounded text-xs font-mono"><code>def check_prime(num):
    if num <= 1:
        print(f"{num} is NOT prime")
        return
    for i in range(2, int(num ** 0.5) + 1):
        if num % i == 0:
            print(f"{num} is composite (divisible by {i})")
            break
    else:
        # Executes ONLY if no break was triggered!
        print(f"{num} is a PRIME number!")

check_prime(29)  # Output: 29 is a PRIME number!
check_prime(35)  # Output: 35 is composite (divisible by 5)</code></pre>""",
        "Remember: 'else' on a loop means 'no-break', which eliminates the need for boolean flag variables like 'is_found = False'!")

    add("pyprog", 2, "🎯 Practice Question • High Probability", "📐 Derivation / Formula", "String Slicing & Methods",
        "Explain Python string slicing with syntax str[start:stop:step]. Write a Python function is_palindrome(s) that ignores case, whitespace, and punctuation using string methods.",
        "Slicing syntax: s[start:stop:step]. Reversing: s[::-1]. Clean with ''.join(c.lower() for c in s if c.isalnum()) and compare with its reverse.",
        """<strong>1. String Slicing Syntax:</strong>
<code>string[start : stop : step]</code>
• <code>start</code>: Starting index (inclusive, default = 0).
• <code>stop</code>: Ending index (exclusive, default = length).
• <code>step</code>: Stride/increment (default = 1). If negative, slices backward!
• <em>Reversing a string idiom:</em> <code>s[::-1]</code> reverses the entire string in $O(N)$ time.

<strong>2. Palindrome Checker Function:</strong>
<pre class="bg-slate-900 text-emerald-400 p-3 rounded text-xs font-mono"><code>def is_palindrome(text: str) -> bool:
    # Filter alphanumeric characters only and convert to lowercase
    cleaned = ''.join(ch.lower() for ch in text if ch.isalnum())
    
    # Check if cleaned string matches its reverse slice
    return cleaned == cleaned[::-1]

# Test Cases:
print(is_palindrome("Radar"))                         # True
print(is_palindrome("A man, a plan, a canal: Panama")) # True
print(is_palindrome("MSRIT Bangalore 2026"))          # False</code></pre>

<strong>3. Essential String Methods:</strong>
• <code>s.split(sep)</code>: Splits string into list of substrings.
• <code>sep.join(list)</code>: Concatenates list elements with delimiter.
• <code>s.strip()</code>: Removes leading and trailing whitespace.
• <code>s.replace(old, new)</code>: Returns copy with occurrences substituted.""",
        "State that Python strings are immutable: all string methods return a newly created string, never mutating the original in place.")

    add("pyprog", 2, "🎯 Practice Question • High Probability", "📐 Derivation / Formula", "List Comprehensions & Lambda",
        "What are List Comprehensions and Lambda functions in Python? Compare list comprehensions with map() and filter(). Provide code examples for extracting even squares.",
        "List comprehension: [expr for x in iterable if cond]. Lambda: lambda x: x**2. List comprehensions are cleaner, more readable, and avoid function call overhead.",
        """<strong>1. List Comprehensions:</strong>
A concise syntactic construct to generate new lists from existing iterables:
$$\\mathbf{[\\text{expression} \\quad \\mathbf{for} \\quad \\text{item} \\quad \\mathbf{in} \\quad \\text{iterable} \\quad \\mathbf{if} \\quad \\text{condition}]}$$

<strong>2. Lambda Functions:</strong>
Anonymous, inline one-liner functions defined without <code>def</code>:
<code>square = lambda x: x ** 2</code>

<strong>3. Comparison: List Comprehension vs. map() + filter():</strong>
Goal: Given numbers 1 to 10, extract squares of even numbers.
<pre class="bg-slate-900 text-emerald-400 p-3 rounded text-xs font-mono"><code>nums = list(range(1, 11))

# Approach A: List Comprehension (Idiomatic & Fast)
even_sq_comp = [x**2 for x in nums if x % 2 == 0]

# Approach B: map() and filter() with lambda
even_sq_func = list(map(lambda x: x**2, filter(lambda x: x % 2 == 0, nums)))

print(even_sq_comp)  # [4, 16, 36, 64, 100]
print(even_sq_func)  # [4, 16, 36, 64, 100]</code></pre>

<strong>4. Performance Advantage:</strong>
List comprehensions execute at C-speed inside Python interpreter bytecode without repeated Python stack frame function calls required by lambda in map().""",
        "Mention that map() and filter() return lazy iterators in Python 3, requiring list() wrapper if full evaluation is needed.")

    add("pyprog", 3, "🎯 Practice Question • High Probability", "📐 Derivation / Formula", "Dictionaries & Sets",
        "How are Dictionaries and Sets implemented internally in Python? Explain hash tables, hash collision handling (open addressing), and why keys must be immutable.",
        "Python dicts use sparse hash tables with open addressing. Keys must be hashable (__hash__ and __eq__). Average time complexity for lookup/insert/delete is O(1).",
        """<strong>1. Internal Hash Table Architecture:</strong>
Both Python dictionaries and sets are implemented as dynamically resizing <strong>Hash Tables</strong>:
1. <strong>Hash Calculation:</strong> When a key is inserted, Python computes its hash: <code>h = hash(key)</code>.
2. <strong>Index Mapping:</strong> The hash is converted to an array index: <code>idx = h & (table_size - 1)</code>.
3. <strong>Open Addressing & Perturbation:</strong> If two different keys map to the same index (a collision), Python uses pseudo-random open addressing probe sequence ($idx = (5 \\times idx + 1 + perturb) \\pmod{\\text{size}}$) to locate the next free bucket.

<strong>2. Why Must Dictionary Keys Be Immutable?</strong>
• A dictionary key must implement <code>__hash__()</code> and <code>__eq__()</code>.
• If a mutable object (like a <code>list</code>) were a key, modifying the list would change its hash value, rendering the key lost at a different bucket location!
• Hence, <code>int</code>, <code>float</code>, <code>str</code>, and <code>tuple</code> can be keys; <code>list</code>, <code>set</code>, and <code>dict</code> cannot.

<strong>3. Time Complexities:</strong>
• <strong>Lookup / Insertion / Deletion:</strong> Average case $\\mathbf{O(1)}$, Worst case $\\mathbf{O(N)}$ (heavy collisions).""",
        "Remember dict.get(key, default) prevents KeyError and allows providing a safe fallback value.")

    add("pyprog", 3, "🎯 Practice Question • High Probability", "🔢 Numerical Pattern", "NumPy Broadcasting",
        "What are NumPy Broadcasting Rules? Explain with a 2D matrix (3x3) and a 1D vector (1x3) example. Demonstrate matrix multiplication with @ vs element-wise multiplication with *.",
        "Broadcasting aligns trailing dimensions from right to left. Dimensions are compatible if: 1. They are equal, or 2. One of them is 1. @ is dot product; * is element-wise.",
        """<strong>1. NumPy Broadcasting Rules:</strong>
Broadcasting allows arithmetic operations between arrays of different shapes without copying data:
• <strong>Rule 1:</strong> Compare dimension sizes backwards, starting from the <em>trailing (rightmost) dimensions</em>.
• <strong>Rule 2:</strong> Two dimensions are compatible if:
  1. They are equal ($d_1 == d_2$), OR
  2. One of them is $1$ ($d_1 == 1$ or $d_2 == 1$).
• If compatible, the dimension of size $1$ is stretched (virtually repeated) to match the other without allocating extra memory!

<strong>2. Code Example & Matrix Multiplication:</strong>
<pre class="bg-slate-900 text-emerald-400 p-3 rounded text-xs font-mono"><code>import numpy as np

A = np.array([[1, 2, 3],
              [4, 5, 6],
              [7, 8, 9]])      # Shape: (3, 3)
B = np.array([10, 20, 30])    # Shape: (3,) -> Broadcasts to (1, 3) -> (3, 3)

# 1. Element-wise multiplication (*) with broadcasting:
elem_prod = A * B
# Row 0: [1*10, 2*20, 3*30] = [10, 40, 90]

# 2. True Linear Algebra Matrix Multiplication (@ or np.dot):
mat_prod = A @ B
# [1*10+2*20+3*30, 4*10+5*20+6*30, 7*10+8*20+9*30] = [140, 320, 500]

print("A * B shape:", elem_prod.shape)  # (3, 3)
print("A @ B shape:", mat_prod.shape)    # (3,)</code></pre>""",
        "In modern Python 3.5+, always use the @ operator for matrix multiplication instead of np.dot or np.matmul.")

    add("pyprog", 4, "🎯 Practice Question • High Probability", "⚡ Exception / Trap", "*args, **kwargs & LEGB",
        "Explain the usage of *args and **kwargs in Python functions. Explain Python's LEGB variable scope resolution rule and describe the 'default mutable argument trap'.",
        "*args captures variable positional args as a tuple; **kwargs captures keyword args as a dict. LEGB = Local, Enclosing, Global, Built-in. Trap: def append(x, lst=[]).",
        """<strong>1. Variable Arguments (*args & **kwargs):</strong>
• <code>*args</code>: Collects extra positional arguments into an immutable <strong>tuple</strong>.
• <code>**kwargs</code>: Collects extra keyword (named) arguments into a mutable <strong>dictionary</strong>.
<pre class="bg-slate-900 text-emerald-400 p-3 rounded text-xs font-mono"><code>def student_record(name, *marks, **details):
    avg = sum(marks) / len(marks) if marks else 0
    print(f"Name: {name}, Avg: {avg:.2f}, Details: {details}")

student_record("Pooja", 85, 92, 88, branch="ECE", usn="1MS25EC045")</code></pre>

<strong>2. LEGB Scope Resolution Rule:</strong>
When a variable name is referenced, Python searches in strict order:
1. <strong>L (Local):</strong> Names assigned inside current function.
2. <strong>E (Enclosing):</strong> Names in outer enclosing functions (closures).
3. <strong>G (Global):</strong> Names assigned at the top-level of module.
4. <strong>B (Built-in):</strong> Predefined names in Python (e.g. <code>len</code>, <code>range</code>, <code>print</code>).

<strong>3. The Mutable Default Argument Trap:</strong>
<pre class="bg-slate-900 text-rose-300 p-3 rounded text-xs font-mono"><code># DANGEROUS: Default list evaluated ONCE at function definition!
def bad_add(item, target_list=[]):
    target_list.append(item)
    return target_list

print(bad_add(1))  # [1]
print(bad_add(2))  # [1, 2] -- BUG! Reused same persistent list!

# CORRECT IDIOM:
def safe_add(item, target_list=None):
    if target_list is None:
        target_list = []
    target_list.append(item)
    return target_list</code></pre>""",
        "Explain that default arguments are evaluated once when the function is defined, NOT each time the function is called.")

    add("pyprog", 4, "🎯 Practice Question • High Probability", "📐 Derivation / Formula", "OOP Inheritance & MRO",
        "Explain Single, Multiple, and Multilevel Inheritance in Python. What is Method Resolution Order (MRO) and how does super() resolve methods in multiple inheritance?",
        "Diamond problem: Class D(B, C). Check D.mro() or D.__mro__. super() follows C3 Linearization order to invoke base methods once without duplication.",
        """<strong>1. Inheritance Types in Python:</strong>
• <strong>Single:</strong> <code>class Child(Parent):</code>
• <strong>Multilevel:</strong> <code>class GrandChild(Child):</code>
• <strong>Multiple:</strong> <code>class FlyingCar(Car, Airplane):</code>

<strong>2. The Diamond Problem & Method Resolution Order (MRO):</strong>
When two classes $B$ and $C$ inherit from $A$, and class $D$ inherits from both $B$ and $C$, which version of a shared method does $D$ call?
Python resolves this using the <strong>C3 Linearization Algorithm</strong>:
<pre class="bg-slate-900 text-emerald-400 p-3 rounded text-xs font-mono"><code>class A:
    def greet(self):
        print("Hello from A")

class B(A):
    def greet(self):
        print("Hello from B")
        super().greet()

class C(A):
    def greet(self):
        print("Hello from C")
        super().greet()

class D(B, C):
    def greet(self):
        print("Hello from D")
        super().greet()

d = D()
d.greet()
print("MRO:", [cls.__name__ for cls in D.mro()])
# MRO: ['D', 'B', 'C', 'A', 'object']
# Output prints: D -> B -> C -> A (each visited exactly ONCE!)</code></pre>""",
        "Always use super().__init__() rather than Parent.__init__(self) so that all cooperative base classes are initialized in MRO sequence.")

    add("pyprog", 5, "🎯 Practice Question • High Probability", "📐 Derivation / Formula", "Generators vs Iterators",
        "Differentiate between an Iterator and a Generator in Python. Explain how the yield keyword enables lazy evaluation. Write a generator function to produce the Fibonacci sequence up to N terms.",
        "Iterator implements __iter__() and __next__(). Generator uses yield to pause and resume function state with local variables preserved. Memory is O(1) vs O(N).",
        """<strong>1. Key Differences:</strong>
<div class="overflow-x-auto my-2">
<table class="w-full text-xs border border-slate-300">
<thead class="bg-slate-100"><tr><th class="p-1 border">Feature</th><th class="p-1 border">Iterator Class</th><th class="p-1 border">Generator Function</th></tr></thead>
<tbody>
<tr><td class="p-1 border font-semibold">Implementation</td><td class="p-1 border">Explicit class with <code>__iter__</code> & <code>__next__</code></td><td class="p-1 border">Regular function using <code>yield</code> keyword</td></tr>
<tr><td class="p-1 border font-semibold">State Preservation</td><td class="p-1 border">Saved manually in <code>self.attr</code></td><td class="p-1 border">Saved automatically by Python stack frame</td></tr>
<tr><td class="p-1 border font-semibold">Termination</td><td class="p-1 border">Explicit <code>raise StopIteration</code></td><td class="p-1 border">Implicit upon function exit</td></tr>
<tr><td class="p-1 border font-semibold">Memory Consumption</td><td class="p-1 border">Low $O(1)$</td><td class="p-1 border">Extremely low $O(1)$ (Lazy evaluation)</td></tr>
</tbody></table></div>

<strong>2. Fibonacci Generator Code:</strong>
<pre class="bg-slate-900 text-emerald-400 p-3 rounded text-xs font-mono"><code>def fibonacci_gen(n):
    a, b = 0, 1
    count = 0
    while count < n:
        yield a  # Pauses execution and yields value to caller
        a, b = b, a + b
        count += 1

# Generating first 7 Fibonacci numbers:
for val in fibonacci_gen(7):
    print(val, end=" ")  # Output: 0 1 1 2 3 5 8</code></pre>""",
        "Highlight that yield produces values on demand one at a time, making it possible to stream infinite sequences or gigabyte files with minimal RAM.")

    add("pyprog", 5, "🎯 Practice Question • High Probability", "📐 Derivation / Formula", "Custom Exceptions & Context",
        "How do you create user-defined custom exceptions in Python? Explain Python's Context Management protocol (__enter__ and __exit__) and show how the with statement guarantees resource cleanup.",
        "Custom exception: class InsufficientFundsError(Exception). Context manager protocol: __enter__() acquires resource, __exit__() releases resource even if an error is raised.",
        """<strong>1. Custom User-Defined Exceptions:</strong>
Inherit from Python's built-in <code>Exception</code> class:
<pre class="bg-slate-900 text-emerald-400 p-3 rounded text-xs font-mono"><code>class InvalidUSNError(Exception):
    def __init__(self, usn, message="USN format invalid for MSRIT"):
        self.usn = usn
        super().__init__(f"{message}: {usn}")

def register_student(usn):
    if not usn.startswith("1MS"):
        raise InvalidUSNError(usn)
    print(f"Student {usn} successfully registered!")</code></pre>

<strong>2. Context Manager Protocol (<code>__enter__</code> & <code>__exit__</code>):</strong>
The <code>with</code> statement guarantees cleanup (e.g. closing files, releasing locks, terminating DB sessions):
<pre class="bg-slate-900 text-emerald-400 p-3 rounded text-xs font-mono"><code>class FileSession:
    def __init__(self, filename, mode):
        self.filename = filename
        self.mode = mode
        self.file = None

    def __enter__(self):
        print(f"Opening file {self.filename}")
        self.file = open(self.filename, self.mode)
        return self.file

    def __exit__(self, exc_type, exc_val, exc_tb):
        if self.file:
            print(f"Closing file {self.filename}")
            self.file.close()
        # Return False to let any exception propagate
        return False</code></pre>""",
        "Mention that __exit__ receives exception details (exc_type, exc_val, exc_tb) which allows suppressing or logging errors during exit.")

    # =========================================================================
    # KANNADA EXTRA (9 CARDS -> Total 16)
    # =========================================================================
    add("kan", 1, "🎯 Practice Question • High Probability", "📐 Derivation / Formula", "Daily Routine (Dinachari)",
        "Write eight sentences describing your daily routine (Dinachari) in Kannada using English letters with English translations.",
        "Naanu beligge 6 gantege eeluttene. Hallu ujjuttene. Snaana maaduttene. Thindi thinnuttene. College ge hoguttene.",
        """<strong>Daily Routine (Dinachari) in Kannada:</strong>
1. <em>Naanu beligge aaru gantege niddeyinda eeluttene.</em> (I wake up from sleep at 6:00 AM in the morning.)
2. <em>Modalu hallu ujjuttene mattu mukha tholiyuttene.</em> (First I brush my teeth and wash my face.)
3. <em>Nantara bisi neeralli snaana maaduttene.</em> (Afterwards I take a bath in warm water.)
4. <em>Beligginha thindi (breakfast) thindu kaafi kudiyuttene.</em> (I eat morning breakfast and drink coffee.)
5. <em>Entu gantege Ramaiah engineering college ge bus nalli hoguttene.</em> (At 8:00 AM I go to Ramaiah engineering college by bus.)
6. <em>Taragathiyalli (class) gavanavittu paatha keluttene mattu notes bareyuttene.</em> (In class I listen attentively to lectures and write notes.)
7. <em>Sanje aaru gantege manege marali bandu snehithara jothe aatavaaDuttene.</em> (At 6:00 PM I return home and play with friends.)
8. <em>Raathri oota maadi, eradugante oodi, hattu gantege malaguttene.</em> (After dinner, I study for two hours and sleep at 10:00 PM.)""",
        "Note that daily habits use first-person present tense endings: -uttene (eeluttene, tholiyuttene, hoguttene, malaguttene).")

    add("kan", 2, "🎯 Practice Question • High Probability", "📐 Derivation / Formula", "Shopping Conversation",
        "Write a conversational dialogue between a customer (Grahaka) and a vegetable vendor (Vyapari) at a market in Kannada using English letters.",
        "Grahaka: Namaskara, eeruLLi bele eshtu? Vyapari: Ondu kg ge nalavattu roopayi. Grahaka: Eradu kg kodi. Vyapari: Idu thagolli.",
        """<strong>Market Dialogue (Grahaka mattu Vyapari):</strong>
• <strong>Grahaka:</strong> <em>Namaskara aNNa, eeruLLi (onion) mattu aalugaDDe (potato) bele eshtu?</em>
  (Hello brother, what is the price of onions and potatoes?)
• <strong>Vyapari:</strong> <em>Namaskara saar! EeruLLi ondu kg ge nalavattu roopayi, aalugaDDe muvvattu roopayi.</em>
  (Hello sir! Onions are 40 rupees per kg, potatoes are 30 rupees per kg.)
• <strong>Grahaka:</strong> <em>Tomato fresh ideya? Ondu kg ge eshtu koduthiri?</em>
  (Are tomatoes fresh? For how much will you give one kg?)
• <strong>Vyapari:</strong> <em>Haudu saar, tumbaa fresh ide. Ippattaidu roopayige koduttene.</em>
  (Yes sir, very fresh. I will give for 25 rupees.)
• <strong>Grahaka:</strong> <em>Sari, eradu kg eeruLLi mattu ondu kg tomato kodi.</em>
  (Okay, please give 2 kg onions and 1 kg tomatoes.)
• <strong>Vyapari:</strong> <em>Idu thagolli saar, mottha noora aivattu roopayi aayithu.</em>
  (Please take this sir, total amount is 105 rupees.)
• <strong>Grahaka:</strong> <em>Dhanayavadagalu, Google Pay maaduttene.</em>
  (Thank you, I will pay via Google Pay.)""",
        "Use polite imperative forms: 'kodi' (please give) and 'thagolli' (please take) rather than informal 'kodu' or 'thago'.")

    add("kan", 2, "🎯 Practice Question • High Probability", "📐 Derivation / Formula", "Kannada Question Words",
        "List the seven primary question words (Wh-words) in Kannada using English letters, give their English meanings, and frame a simple question sentence for each.",
        "Yaaru (Who), Yaavudu (Which), Yelli (Where), Yaake (Why), Hege (How), Eshtu (How much), Yaavaaga (When).",
        """<strong>Seven Question Words (Prashnarthaka Padagalu):</strong>
1. <strong>Yaaru (Who?):</strong>
   • <em>Avaru yaaru?</em> (Who is that person?)
2. <strong>Yaavudu (Which?):</strong>
   • <em>Ninna pustaka yaavudu?</em> (Which is your book?)
3. <strong>Yelli (Where?):</strong>
   • <em>Ramaiah college library yelli ide?</em> (Where is the Ramaiah college library?)
4. <strong>Yaake (Why?):</strong>
   • <em>Neenu ivatthu taragathige yaake baralilla?</em> (Why did you not come to class today?)
5. <strong>Hege (How?):</strong>
   • <em>Ninna prayana hege itthu?</em> (How was your journey?)
6. <strong>Eshtu (How much / How many?):</strong>
   • <em>Ee pustakada bele eshtu?</em> (How much is the price of this book?)
7. <strong>Yaavaaga (When?):</strong>
   • <em>Semester exam yaavaaga shuruvagutthade?</em> (When does the semester exam begin?)""",
        "In Kannada syntax, question words are placed just before the main verb at the end of the sentence.")

    add("kan", 3, "🎯 Practice Question • High Probability", "📐 Derivation / Formula", "Family Relationships",
        "Write eight Kannada kinship/family relationship terms with their English meanings and frame four sentences describing family members using English letters.",
        "Thande (Father), Thaayi (Mother), Anna (Elder brother), Thamma (Younger brother), Akka (Elder sister), Thangi (Younger sister), Ajja (Grandfather), Ajji (Grandmother).",
        """<strong>1. Kinship Terms (Kutumba Sambandhagalu):</strong>
• <em>Thande / Appa</em> — Father
• <em>Thaayi / Amma</em> — Mother
• <em>Anna</em> — Elder Brother
• <em>Thamma</em> — Younger Brother
• <em>Akka</em> — Elder Sister
• <em>Thangi</em> — Younger Sister
• <em>Ajja</em> — Grandfather
• <em>Ajji</em> — Grandmother

<strong>2. Four Descriptive Sentences:</strong>
1. <em>Nanna thande obba neethi-vantha engineer.</em> (My father is a principled engineer.)
2. <em>Nanna thaayi maneyalli rucikara thindi maaduttaare.</em> (My mother makes delicious snacks at home.)
3. <em>Nanna anna software company nalli kelasa maaduttiddane.</em> (My elder brother is working in a software company.)
4. <em>Nanna ajja mattu ajji halliyalliddare.</em> (My grandfather and grandmother live in the village.)""",
        "Highlight the cultural distinction between elder siblings (Anna/Akka) and younger siblings (Thamma/Thangi).")

    add("kan", 3, "🎯 Practice Question • High Probability", "🔢 Numerical Pattern", "Days & Directions",
        "Write the seven days of the week (Vaaragalu) and the four cardinal directions (Dikkugalu) in Kannada using English letters. Frame two sentences using days and directions.",
        "Days: Bhanuvaara (Sun), Somavaara (Mon), Mangalavaara (Tue), Budhavaara (Wed), Guruvaara (Thu), Shukravaara (Fri), Shanivaara (Sat). Directions: Poorva, Pashchima, Utthara, DakshiNa.",
        """<strong>1. Seven Days of the Week (Vaaragalu):</strong>
1. <em>Bhaanuvaara</em> — Sunday
2. <em>Somavaara</em> — Monday
3. <em>Mangalavaara</em> — Tuesday
4. <em>Budhavaara</em> — Wednesday
5. <em>Guruvaara</em> — Thursday
6. <em>Shukravaara</em> — Friday
7. <em>Shanivaara</em> — Saturday

<strong>2. Cardinal Directions (Dikkugalu):</strong>
• <em>Poorva</em> — East
• <em>Pashchima</em> — West
• <em>Utthara</em> — North
• <em>DakshiNa</em> — South

<strong>3. Example Sentences:</strong>
• <em>Somavaaradinda Shukravaaradavarege college taragathigalu iruttave.</em> (College classes run from Monday through Friday.)
• <em>Sooryanu poorvadalli huTTi, pashchimadalli munLugutthaane.</em> (The sun rises in the east and sets in the west.)""",
        "Notice all day names end with the suffix '-vaara' (meaning day).")

    add("kan", 4, "🎯 Practice Question • High Probability", "📐 Derivation / Formula", "Colors & Animals",
        "Write six color names (BaNNagalu) and six animal/bird names in Kannada using English letters, and construct three sentences using them.",
        "Colors: Kempu (Red), Neeli (Blue), Haladi (Yellow), Hasiru (Green), BiLi (White), Kappu (Black). Animals: Naayi, Bekku, Aane, Hasu, Navilu, Gili.",
        """<strong>1. Six Colors (BaNNagalu):</strong>
1. <em>Kempu</em> — Red
2. <em>Neeli</em> — Blue
3. <em>Hasiru</em> — Green
4. <em>HaLadi</em> — Yellow
5. <em>BiLi</em> — White
6. <em>Kappu</em> — Black

<strong>2. Six Animals & Birds (PraaNigalu mattu Pakshigalu):</strong>
1. <em>Naayi</em> — Dog
2. <em>Bekku</em> — Cat
3. <em>Aane</em> — Elephant
4. <em>Hasu</em> — Cow
5. <em>Navilu</em> — Peacock (National bird)
6. <em>GiLi</em> — Parrot

<strong>3. Descriptive Sentences:</strong>
• <em>Hasiru gida-maragalu prakruthiyannu sundaravaagisuttave.</em> (Green plants and trees make nature beautiful.)
• <em>Navilu namma deshada sundaravada raashtreeya pakshi.</em> (The peacock is the beautiful national bird of our country.)
• <em>Avara maneyalli ondu muddu biLiya naayi ide.</em> (There is a cute white dog in their house.)""",
        "Colors precede nouns directly as qualifying adjectives: 'Kempu gulaabi' (red rose), 'Neeli aakaasha' (blue sky).")

    add("kan", 5, "🎯 Practice Question • High Probability", "📐 Derivation / Formula", "Verb Tenses (Kaalagalu)",
        "Explain the three main tenses in Kannada: Present (Varthamana), Past (Bhootha), and Future (Bhavishyat). Conjugate the root verb 'MaaDu' (to do) for first-person (Naanu - I) across all three tenses.",
        "Root: MaaDu. Present: Naanu maaduttene (I do). Past: Naanu maadide (I did). Future: Naanu maaduve (I will do).",
        """<strong>1. Three Primary Tenses (Kaalagalu):</strong>
• <strong>1. Varthamana Kaala (Present Tense):</strong> Denotes actions happening currently or habitually.
• <strong>2. Bhootha Kaala (Past Tense):</strong> Denotes actions completed in the past.
• <strong>3. Bhavishyat Kaala (Future Tense):</strong> Denotes actions that will occur in the future.

<strong>2. Conjugation of Root Verb 'MaaDu' (To Do):</strong>
• <strong>Present Tense (Varthamana):</strong>
  $$\\mathbf{\\text{Naanu kelasa maaduttene}} \\quad (\\text{I am doing / I do work})$$
• <strong>Past Tense (Bhootha):</strong>
  $$\\mathbf{\\text{Naanu kelasa maadide}} \\quad (\\text{I did / completed work})$$
• <strong>Future Tense (Bhavishyat):</strong>
  $$\\mathbf{\\text{Naanu naale kelasa maaduve}} \\quad (\\text{I will do work tomorrow})$$

<strong>3. Third-Person Comparison:</strong>
• <em>Avanu maaduttaane / maadida / maaduvanu</em> (He does / did / will do)
• <em>Avalu maaduttaaLe / maaDidaLu / maaDuvaLu</em> (She does / did / will do)""",
        "Remember that present tense verb endings (-uttene, -uttaane) are frequently used colloquially to express planned immediate future as well.")

    add("kan", 5, "🎯 Practice Question • High Probability", "📐 Derivation / Formula", "Campus Dialogue",
        "Write a dialogue between two engineering classmates (Ramesh and Suresh) meeting at MSRIT library discussing semester exams and class notes in Kannada using English letters.",
        "Ramesh: Namaskara Suresh, hegidhdheeya? Suresh: Naanu chennagiddhene. Ramesh: Semester exam ge hege tayyari nadita ide?",
        """<strong>Campus Conversation (Ramesh mattu Suresh):</strong>
• <strong>Ramesh:</strong> <em>Namaskara Suresh, hegidhdheeya? Tumbaa dinagala nantara sigutthidhdheeya.</em>
  (Hello Suresh, how are you? Meeting you after many days.)
• <strong>Suresh:</strong> <em>Namaskara Ramesh! Naanu tumbaa chennagiddhene. Neenu hegidhdheeya?</em>
  (Hello Ramesh! I am very fine. How are you?)
• <strong>Ramesh:</strong> <em>Naanu kooDa chennagiddhene. Munde baruvudu semester exams, tayyari hege nadita ide?</em>
  (I am also good. Semester exams are coming up, how is your preparation going?)
• <strong>Suresh:</strong> <em>Applied Chemistry mattu Mathematics tayyari aagide. Aadare Physics Unit-2 swalpa kashta ide. Ninna hattira notes ideya?</em>
  (Chemistry and Maths are prepared. But Physics Unit-2 is a bit tough. Do you have notes with you?)
• <strong>Ramesh:</strong> <em>Haudu, nanna hattira complete RIT handwritten notes ide. Eega library nalli photocopy maadisikoLLoNa.</em>
  (Yes, I have complete RIT handwritten notes. Let's get a photocopy in the library now.)
• <strong>Suresh:</strong> <em>Tumbaa thx Ramesh! Nantara campus canteen ge hogi bisi kaafi kudiyoNa!</em>
  (Thanks a lot Ramesh! Afterwards let's go to the campus canteen and drink hot coffee!)""",
        "Use friendly collegiate language suitable for student peers.")

    add("kan", 5, "🎯 Practice Question • High Probability", "📐 Derivation / Formula", "Kannada Proverbs (Gaadegalu)",
        "Explain four famous Kannada Proverbs (Gaadegalu) with their English transliteration, literal translation, and contextual life meaning: (i) Kaikadadare baayi mosaru, (ii) Gaadheye vedhakke samana, (iii) Kumbhaarange varsha, doNNege nimisha, (iv) Hasigeyiddhashtu kaalu chaachu.",
        "Proverbs embody cultural wisdom. Kaikadadare baayi mosaru = Hard work brings sweet rewards. Hasigeyiddhashtu kaalu chaachu = Cut your coat according to your cloth.",
        """<strong>Four Famous Kannada Proverbs (Gaadegalu):</strong>
1. <strong>Kaikadadare baayi mosaru (ಕೈ ಕೆಸರಾದರೆ ಬಾಯಿ ಮೊಸರು):</strong>
   • <em>Literal:</em> If your hands get muddy, your mouth gets curds.
   • <em>Meaning:</em> Hard work and honest physical labor lead to sweet and satisfying rewards. No pain, no gain.

2. <strong>Gaadheye vedhakke samana (ಗಾದೆ ವೇದಕ್ಕೆ ಸಮಾನ):</strong>
   • <em>Literal:</em> A proverb is equivalent to the sacred Vedas.
   • <em>Meaning:</em> Traditional folklore proverbs reflect eternal truths tested by generations, just like Vedic wisdom.

3. <strong>Kumbhaarange varsha, doNNege nimisha (ಕುಂಬಾರನಿಗೆ ವರುಷ, ದೊಣ್ಣೆಗೆ ನಿಮಿಷ):</strong>
   • <em>Literal:</em> A year for the potter, a minute for the cudgel.
   • <em>Meaning:</em> Creating something valuable requires enormous patience and time, but destroying it takes only a reckless second.

4. <strong>Hasigeyiddhashtu kaalu chaachu (ಹಾಸಿಗೆಯಿದ್ದಷ್ಟು ಕಾಲು ಚಾಚು):</strong>
   • <em>Literal:</em> Stretch your legs only as far as your mattress extends.
   • <em>Meaning:</em> Live within your financial means; cut your coat according to your cloth.""",
        "Proverbs test your cultural grasp in HSCP16K/26K; always give the literal translation followed by moral application.")

    return cards

def get_new_quiz_questions():
    return [
        # Quantum Physics Quiz Questions
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

        # Python Programming Quiz Questions
        {
            "id": "q-19",
            "subjectId": "pyprog",
            "unit": 1,
            "pyqRef": "SEE July 2026, CIE-1",
            "question": "What is the evaluated output of the Python expression: 10 + 5 * 2 ** 3 / 4 - 6?",
            "options": ["14.0", "12.0", "24.0", "8.0"],
            "correctIndex": 0,
            "explanation": "By PEMDAS: 1. Exponentiation 2**3 = 8. 2. Multiplication 5*8 = 40. 3. Division 40/4 = 10.0. 4. Addition & Subtraction: 10 + 10.0 - 6 = 14.0."
        },
        {
            "id": "q-20",
            "subjectId": "pyprog",
            "unit": 2,
            "pyqRef": "SEE July 2026",
            "question": "Which of the following slicing operations produces a reversed copy of the string s = 'RAMAIAH'?",
            "options": ["s[0:-1]", "s[::-1]", "s[-1:0]", "s.reverse()"],
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
            "options": ["__plus__(self, other)", "__add__(self, other)", "__sum__(self, other)", "__concat__(self, other)"],
            "correctIndex": 1,
            "explanation": "The addition operator (+) triggers the __add__(self, other) method in Python's data model protocol."
        },

        # Kannada Kali Quiz Questions
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
            "options": ["Big / Large", "Beautiful", "Old", "Sweet"],
            "correctIndex": 1,
            "explanation": "'Sundara' means Beautiful (e.g. Sundaravada nagara = Beautiful city). 'doDDa' is Big, 'haleya' is Old, 'sihi' is Sweet."
        },
        {
            "id": "q-25",
            "subjectId": "kan",
            "unit": 4,
            "pyqRef": "SEE Feb 2026",
            "question": "What is the Kannada name for the number 54 using English letters?",
            "options": ["Nalavatt-eraDu", "Aivatt-naalku", "Embatt-ombattu", "Tombatt-eeLu"],
            "correctIndex": 1,
            "explanation": "50 is Aivattu and 4 is Naalku. Combined, 54 is Aivatt-naalku (Aivattnaalku)."
        },
        {
            "id": "q-26",
            "subjectId": "kan",
            "unit": 5,
            "pyqRef": "SEE Feb 2026",
            "question": "How many total letters (Aksharagalu) are present in the classical Kannada Varnamale?",
            "options": ["46 letters", "49 letters", "52 letters", "54 letters"],
            "correctIndex": 1,
            "explanation": "The classical Kannada alphabet consists of exactly 49 letters: 13 Swaragalu (vowels), 2 Yogavahakagalu, and 34 Vyanjanagalu (consonants)."
        }
    ]

def get_new_rit_notes():
    return {
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
                        "Yogavahakagalu (2 letters): Anuswara (am ಂ), Visarga (aha ಃ)",
                        "Vyanjanagalu (34 consonants): 25 Vargeeya (5 vargas) + 9 Avargeeya (ya to La)",
                        "Proverbs: Kaikadadare baayi mosaru (No pain no gain); Hasigeyiddhashtu kaalu chaachu (Cut coat according to cloth)"
                    ],
                    "notesMarkdown": "Grammatical classification of Kannada letters, phonetics of consonants, verb tenses (Varthamana, Bhootha, Bhavishyat), and interpretation of classic Kannada proverbs."
                }
            }
        }
    }

print("extra_content module ready.")
