# scripts/generate_more_practice.py
import json

def get_more_practice_cards():
    cards = []
    c_id = 201

    def add(subjectId, unit, badgeType, badgeLabel, question, hint, answer, examTip):
        nonlocal c_id
        cards.append({
            "id": f"card-prac-{c_id}",
            "subjectId": subjectId,
            "unit": unit,
            "pyqTag": "🎯 Practice Question • High Probability",
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
    # ENGINEERING MATHEMATICS (3 Cards to reach 17)
    # =========================================================================
    add("math", 1, "📐 Derivation / Formula", "Taylor Series 2-Var",
        "Expand f(x, y) = eˣ cos(y) in powers of x and y (Maclaurin's series) up to and including third-degree terms.",
        "Formula: f(x,y) = f(0,0) + (x fx + y fy) + (1/2!)(x² fxx + 2xy fxy + y² fyy) + (1/3!)(x³ fxxx + 3x²y fxxy + 3xy² fxyy + y³ fyyy).",
        """<strong>1. Maclaurin's Series Expansion for Two Variables:</strong>
$$f(x, y) = f(0,0) + [x f_x + y f_y]_{(0,0)} + \\frac{1}{2!}[x^2 f_{xx} + 2xy f_{xy} + y^2 f_{yy}]_{(0,0)} + \\frac{1}{3!}[x^3 f_{xxx} + 3x^2y f_{xxy} + 3xy^2 f_{xyy} + y^3 f_{yyy}]_{(0,0)} + \\dots$$

<strong>2. Computing Partial Derivatives at $(0, 0)$:</strong>
• $f(x, y) = e^x \\cos y \\implies f(0, 0) = e^0 \\cos 0 = 1$
• <strong>First-Order:</strong>
  - $f_x = e^x \\cos y \\implies f_x(0, 0) = 1$
  - $f_y = -e^x \\sin y \\implies f_y(0, 0) = 0$
• <strong>Second-Order:</strong>
  - $f_{xx} = e^x \\cos y \\implies f_{xx}(0, 0) = 1$
  - $f_{xy} = -e^x \\sin y \\implies f_{xy}(0, 0) = 0$
  - $f_{yy} = -e^x \\cos y \\implies f_{yy}(0, 0) = -1$
• <strong>Third-Order:</strong>
  - $f_{xxx} = e^x \\cos y \\implies f_{xxx}(0, 0) = 1$
  - $f_{xxy} = -e^x \\sin y \\implies f_{xxy}(0, 0) = 0$
  - $f_{xyy} = -e^x \\cos y \\implies f_{xyy}(0, 0) = -1$
  - $f_{yyy} = e^x \\sin y \\implies f_{yyy}(0, 0) = 0$

<strong>3. Assembling the Series:</strong>
$$f(x, y) = 1 + [x(1) + y(0)] + \\frac{1}{2}[x^2(1) + 2xy(0) + y^2(-1)] + \\frac{1}{6}[x^3(1) + 3x^2y(0) + 3xy^2(-1) + y^3(0)]$$
$$\\mathbf{f(x, y) = 1 + x + \\frac{1}{2}(x^2 - y^2) + \\frac{1}{6}(x^3 - 3xy^2) + \\dots}$$""",
        "Check that your series matches the product of 1D expansions: e^x = (1 + x + x²/2 + x³/6) and cos(y) = (1 - y²/2).")

    add("math", 2, "📐 Derivation / Formula", "Green's Theorem",
        "State Green's Theorem in a plane. Evaluate ∮_C [(xy + y²) dx + x² dy] around the closed boundary C bounded by y = x and y = x².",
        "Green's Theorem: ∮_C (M dx + N dy) = ∬_R (∂N/∂x - ∂M/∂y) dx dy. M = xy + y², N = x². Limits: x from 0 to 1, y from x² to x.",
        """<strong>1. Statement of Green's Theorem:</strong>
If $M(x, y)$ and $N(x, y)$ along with their first partial derivatives are continuous in a simply connected region $R$ of the $xy$-plane bounded by a piecewise smooth closed curve $C$ traversed counterclockwise:
$$\\oint_C (M dx + N dy) = \\iint_R \\left( \\frac{\\partial N}{\\partial x} - \\frac{\\partial M}{\\partial y} \\right) dx \\, dy$$

<strong>2. Application to Given Problem:</strong>
• $M = xy + y^2 \\implies \\frac{\\partial M}{\\partial y} = x + 2y$
• $N = x^2 \\implies \\frac{\\partial N}{\\partial x} = 2x$
• Integrand:
  $$\\frac{\\partial N}{\\partial x} - \\frac{\\partial M}{\\partial y} = 2x - (x + 2y) = x - 2y$$

<strong>3. Region Limits (Bounded by $y = x^2$ and $y = x$):</strong>
• Intersection points: $x^2 = x \\implies x(x - 1) = 0 \\implies x = 0$ and $x = 1$.
• For a given $x \\in [0, 1]$, $y$ varies from bottom curve $y = x^2$ to top curve $y = x$.

<strong>4. Double Integration:</strong>
$$I = \\int_{x=0}^1 \\int_{y=x^2}^x (x - 2y) \\, dy \\, dx = \\int_0^1 \\left[ xy - y^2 \\right]_{y=x^2}^x dx$$
$$= \\int_0^1 \\left[ (x^2 - x^2) - (x(x^2) - (x^2)^2) \\right] dx = \\int_0^1 \\left( -x^3 + x^4 \\right) dx$$
$$= \\left[ -\\frac{x^4}{4} + \\frac{x^5}{5} \\right]_0^1 = -\\frac{1}{4} + \\frac{1}{5} = \\mathbf{-\\frac{1}{20}}$$""",
        "Remember that the bottom boundary is y = x² and the top boundary is y = x between x = 0 and x = 1.")

    add("math", 5, "🔢 Numerical Pattern", "Modified Euler IVP",
        "Solve dy/dx = x + √y with y(0) = 1 to find y(0.2) using Modified Euler's Method taking step size h = 0.2. Carry out two corrector iterations.",
        "Predictor (Euler): y1^(0) = y0 + h f(x0, y0). Corrector: y1^(k+1) = y0 + (h/2)[f(x0, y0) + f(x1, y1^(k))].",
        """<strong>1. Given IVP & Step Size:</strong>
• $f(x, y) = x + \\sqrt{y}, \\quad x_0 = 0, \\quad y_0 = 1, \\quad h = 0.2 \\implies x_1 = 0.2$.
• $f(x_0, y_0) = 0 + \\sqrt{1} = 1.0$.

<strong>2. Step 1 — Predictor (Standard Euler):</strong>
$$y_1^{(0)} = y_0 + h \\cdot f(x_0, y_0) = 1 + (0.2)(1.0) = \\mathbf{1.2000}$$

<strong>3. Step 2 — Corrector Iterations:</strong>
Formula: $y_1^{(k+1)} = y_0 + \\frac{h}{2} \\left[ f(x_0, y_0) + f(x_1, y_1^{(k)}) \\right]$
• <strong>Corrector Iteration 1:</strong>
  $f(x_1, y_1^{(0)}) = f(0.2, 1.2000) = 0.2 + \\sqrt{1.2000} = 0.2 + 1.0954 = 1.2954$
  $$y_1^{(1)} = 1 + \\frac{0.2}{2} [1.0 + 1.2954] = 1 + 0.1(2.2954) = \\mathbf{1.2295}$$

• <strong>Corrector Iteration 2:</strong>
  $f(x_1, y_1^{(1)}) = f(0.2, 1.2295) = 0.2 + \\sqrt{1.2295} = 0.2 + 1.1088 = 1.3088$
  $$y_1^{(2)} = 1 + 0.1 [1.0 + 1.3088] = 1 + 0.1(2.3088) = \\mathbf{1.2309}$$

• <strong>Conclusion:</strong>
  The approximate value of $y(0.2)$ after two corrector iterations is $\\mathbf{1.2309}$.""",
        "Clearly label the Euler predictor step y1^(0) and subsequent corrector iterations y1^(1), y1^(2).")

    # =========================================================================
    # INTRODUCTION TO C PROGRAMMING (5 Cards to reach 16)
    # =========================================================================
    add("cprog", 1, "⚡ Exception / Trap", "Precedence & Evaluation",
        "Explain operator precedence and associativity in C. Trace step-by-step the value of x and y in: int a = 5, b = 10; int x = ++a * (b-- - 3) / 2; int y = a > b ? a : b;",
        "++a is pre-increment (a becomes 6 first). b-- is post-decrement (evaluates with b=10, decrements to 9 after). Ternary ? : evaluates condition.",
        """<strong>1. Step-by-Step Expression Evaluation:</strong>
Given: \`int a = 5, b = 10;\`
• <strong>Evaluating \`int x = ++a * (b-- - 3) / 2;\`:</strong>
  1. \`++a\` has highest prefix precedence: $a$ increments from 5 to <strong>6</strong>, returning 6.
  2. In parenthesized expression \`(b-- - 3)\`:
     - \`b--\` has post-decrement behavior: current value $10$ is used in the subtraction, and $b$ becomes <strong>9</strong> afterwards.
     - $(10 - 3) = 7$.
  3. Expression becomes: $6 \\times 7 / 2$.
  4. \`*\` and \`/\` have equal precedence, evaluated left-to-right (associativity):
     - $6 \\times 7 = 42$.
     - $42 / 2 = 21$.
  5. Thus: $\\mathbf{x = 21}$, with variable values $a = 6, b = 9$.

• <strong>Evaluating \`int y = a > b ? a : b;\`:</strong>
  - Condition: \`6 > 9\` is FALSE (0).
  - The ternary operator selects the expression after the colon: \`b\`.
  - Thus: $\\mathbf{y = 9}$.

<strong>2. Final Values:</strong>
\`x = 21, y = 9, a = 6, b = 9\`.""",
        "Prefix increment modifies before expression evaluation; postfix decrement modifies after the value in the sub-expression is fetched.")

    add("cprog", 2, "📐 Derivation / Formula", "Roots of Quadratic",
        "Write a complete C program to find the roots of a quadratic equation ax² + bx + c = 0, handling real and distinct, real and equal, and complex roots with clear output messages.",
        "Discriminant d = b² - 4ac. If d > 0: two distinct real roots. If d == 0: equal real roots -b/(2a). If d < 0: complex roots -b/(2a) ± i*sqrt(-d)/(2a).",
        """<strong>Complete Quadratic Roots C Program:</strong>
<pre class="bg-slate-900 text-slate-100 p-3 rounded-lg overflow-x-auto"><code>#include &lt;stdio.h&gt;
#include &lt;math.h&gt;

int main() {
    double a, b, c, disc, r1, r2, realPart, imagPart;
    printf("Enter coefficients a, b, c: ");
    scanf("%lf %lf %lf", &a, &b, &c);

    if (a == 0) {
        printf("Coefficient 'a' cannot be zero in a quadratic equation.\\n");
        return 1;
    }

    disc = b * b - 4 * a * c;

    if (disc &gt; 0) {
        r1 = (-b + sqrt(disc)) / (2 * a);
        r2 = (-b - sqrt(disc)) / (2 * a);
        printf("Roots are REAL and DISTINCT:\\n");
        printf("Root 1 = %.4lf, Root 2 = %.4lf\\n", r1, r2);
    } else if (disc == 0) {
        r1 = -b / (2 * a);
        printf("Roots are REAL and EQUAL:\\n");
        printf("Root 1 = Root 2 = %.4lf\\n", r1);
    } else {
        realPart = -b / (2 * a);
        imagPart = sqrt(-disc) / (2 * a);
        printf("Roots are COMPLEX and IMAGINARY:\\n");
        printf("Root 1 = %.4lf + %.4lfi\\n", realPart, imagPart);
        printf("Root 2 = %.4lf - %.4lfi\\n", realPart, imagPart);
    }
    return 0;
}</code></pre>""",
        "Always validate if a == 0 to prevent division by zero in 2*a.")

    add("cprog", 3, "📐 Derivation / Formula", "Array Algorithms",
        "Write a C program to find the second largest element in a single-dimensional array of N integers without sorting the entire array.",
        "Keep track of two variables: first = INT_MIN, second = INT_MIN. Update in a single O(N) pass.",
        """<strong>Second Largest Element in Single Pass O(N):</strong>
<pre class="bg-slate-900 text-slate-100 p-3 rounded-lg overflow-x-auto"><code>#include &lt;stdio.h&gt;
#include &lt;limits.h&gt;

int main() {
    int arr[100], n, i;
    int first = INT_MIN, second = INT_MIN;

    printf("Enter number of elements (N >= 2): ");
    scanf("%d", &n);

    if (n &lt; 2) {
        printf("At least 2 elements required.\\n");
        return 1;
    }

    printf("Enter %d integers:\\n", n);
    for (i = 0; i &lt; n; i++) {
        scanf("%d", &arr[i]);
    }

    for (i = 0; i &lt; n; i++) {
        if (arr[i] &gt; first) {
            second = first;
            first = arr[i];
        } else if (arr[i] &gt; second && arr[i] != first) {
            second = arr[i];
        }
    }

    if (second == INT_MIN) {
        printf("No second largest element (all elements are identical).\\n");
    } else {
        printf("Largest = %d, Second Largest = %d\\n", first, second);
    }
    return 0;
}</code></pre>""",
        "Include <limits.h> and initialize with INT_MIN so negative integers are handled correctly.")

    add("cprog", 4, "📐 Derivation / Formula", "Tower of Hanoi Recursion",
        "Explain the recursive formulation of the Tower of Hanoi problem. Write a recursive C function for N disks from Source (A) to Destination (C) using Auxiliary (B).",
        "Recurrence: Move N-1 disks from A to B via C; Move disk N from A to C; Move N-1 disks from B to C via A. Total moves = 2^N - 1.",
        """<strong>1. Principle:</strong>
To move $N$ disks from Source ($A$) to Destination ($C$) via Auxiliary ($B$):
1. Recursively move top $N-1$ disks from $A$ to $B$ using $C$.
2. Move the $N$-th (largest) disk directly from $A$ to $C$.
3. Recursively move the $N-1$ disks from $B$ to $C$ using $A$.

<strong>2. Complete C Program:</strong>
<pre class="bg-slate-900 text-slate-100 p-3 rounded-lg overflow-x-auto"><code>#include &lt;stdio.h&gt;

void towerOfHanoi(int n, char from_rod, char to_rod, char aux_rod) {
    if (n == 1) {
        printf("Move disk 1 from rod %c to rod %c\\n", from_rod, to_rod);
        return;
    }
    towerOfHanoi(n - 1, from_rod, aux_rod, to_rod);
    printf("Move disk %d from rod %c to rod %c\\n", n, from_rod, to_rod);
    towerOfHanoi(n - 1, aux_rod, to_rod, from_rod);
}

int main() {
    int n = 3;
    printf("Tower of Hanoi move sequence for %d disks:\\n", n);
    towerOfHanoi(n, 'A', 'C', 'B');
    printf("Total moves required = %d\\n", (1 &lt;&lt; n) - 1); /* 2^n - 1 */
    return 0;
}</code></pre>""",
        "Total moves for N disks is exactly 2^N - 1. For N = 3 disks, exactly 7 moves are executed.")

    add("cprog", 5, "📐 Derivation / Formula", "Dynamic Memory Allocation",
        "Explain the four dynamic memory allocation functions in C: malloc(), calloc(), realloc(), and free(). Write a C program dynamically allocating memory for N floats to compute their average.",
        "malloc(size) allocates uninitialized bytes; calloc(n, size) allocates and zeroes bytes; realloc(ptr, new_size) resizes block; free(ptr) releases memory.",
        """<strong>1. Dynamic Allocation Functions:</strong>
• \`void* malloc(size_t size)\`: Allocates a single continuous block of specified bytes containing uninitialized garbage values.
• \`void* calloc(size_t n, size_t size)\`: Allocates memory for an array of $n$ elements, initializing all bytes strictly to zero (0).
• \`void* realloc(void *ptr, size_t new_size)\`: Resizes previously allocated block without losing existing data.
• \`void free(void *ptr)\`: Deallocates memory block back to the heap to prevent memory leaks.

<strong>2. Program Calculating Average with Dynamic Array:</strong>
<pre class="bg-slate-900 text-slate-100 p-3 rounded-lg overflow-x-auto"><code>#include &lt;stdio.h&gt;
#include &lt;stdlib.h&gt;

int main() {
    int n, i;
    float *ptr, sum = 0.0;

    printf("Enter number of elements: ");
    scanf("%d", &n);

    /* Allocate memory dynamically */
    ptr = (float*) malloc(n * sizeof(float));

    if (ptr == NULL) {
        printf("Memory allocation failed! Out of heap space.\\n");
        return 1;
    }

    printf("Enter %d numbers:\\n", n);
    for (i = 0; i &lt; n; i++) {
        scanf("%f", ptr + i);
        sum += *(ptr + i);
    }

    printf("Arithmetic Average = %.4f\\n", sum / n);

    /* Always release memory */
    free(ptr);
    ptr = NULL; /* prevent dangling pointer */
    return 0;
}</code></pre>""",
        "Always test if (ptr == NULL) after allocation and set ptr = NULL after free(ptr) to eliminate dangling pointer bugs.")

    # =========================================================================
    # INTRODUCTION TO AI AND APPLICATIONS (9 Cards to reach 16)
    # =========================================================================
    add("ai", 1, "📐 Derivation / Formula", "Agent Architectures",
        "Compare the four major types of intelligent agent architectures: Simple Reflex Agents, Model-Based Reflex Agents, Goal-Based Agents, and Utility-Based Agents.",
        "Simple reflex uses Condition-Action rules; Model-based maintains internal state; Goal-based plans toward a goal; Utility-based optimizes happiness/cost.",
        """<strong>1. Comparison of AI Agent Architectures:</strong>
<div class="overflow-x-auto my-2">
<table class="w-full text-xs text-left border border-slate-300">
<thead class="bg-slate-100"><tr><th class="p-1 border">Agent Type</th><th class="p-1 border">Decision Mechanism</th><th class="p-1 border">Internal State</th><th class="p-1 border">Example</th></tr></thead>
<tbody>
<tr><td class="p-1 border font-semibold">Simple Reflex</td><td class="p-1 border">Direct Condition-Action rules (\`IF condition THEN action\`)</td><td class="p-1 border">None (acts only on current percept)</td><td class="p-1 border">Thermostat turning ON when temperature drops below 20°C</td></tr>
<tr><td class="p-1 border font-semibold">Model-Based</td><td class="p-1 border">Tracks unobserved aspects of world using internal model</td><td class="p-1 border">Maintains history of how world evolves</td><td class="p-1 border">Robot vacuum tracking room boundary obstacles behind it</td></tr>
<tr><td class="p-1 border font-semibold">Goal-Based</td><td class="p-1 border">Evaluates actions based on whether they achieve a target goal</td><td class="p-1 border">Internal model + search/planning algorithms</td><td class="p-1 border">GPS Navigation system planning optimal route to destination</td></tr>
<tr><td class="p-1 border font-semibold">Utility-Based</td><td class="p-1 border">Maps states to real-valued utility (happiness/efficiency/trade-offs)</td><td class="p-1 border">Full model + utility function optimization</td><td class="p-1 border">Automated stock trading balancing risk vs return</td></tr>
</tbody>
</table>
</div>""",
        "List all 4 architectures in increasing order of complexity: Simple Reflex -> Model-Based -> Goal-Based -> Utility-Based.")

    add("ai", 1, "📐 Derivation / Formula", "A* Informed Search",
        "Explain the A* (A-Star) search algorithm. Define the evaluation function f(n) = g(n) + h(n) and explain the conditions for admissibility and consistency of heuristics.",
        "g(n) is actual cost from start to n; h(n) is estimated heuristic cost from n to goal. Admissible means h(n) <= h*(n) (never overestimates).",
        """<strong>1. A* Evaluation Function:</strong>
A* search combines uniform-cost search (path cost so far) and greedy best-first search (estimated cost to goal):
$$f(n) = g(n) + h(n)$$
• $g(n)$: The exact cost incurred to reach current node $n$ from the start node.
• $h(n)$: The estimated heuristic cost from node $n$ to the closest goal node.
• $f(n)$: The estimated total cost of the cheapest solution passing through node $n$.

<strong>2. Heuristic Conditions for Optimality:</strong>
1. <strong>Admissibility (for Tree Search):</strong>
   • An admissible heuristic <strong>never overestimates</strong> the true minimal cost $h^*(n)$ to reach the goal:
     $$0 \\le h(n) \\le h^*(n) \\quad \\forall n$$
   • It is fundamentally optimistic. If $h$ is admissible, $A^*$ is guaranteed to find the optimal path.
2. <strong>Consistency / Monotonicity (for Graph Search):</strong>
   • For every node $n$ and every successor $n'$ generated by action with step cost $c(n, a, n')$:
     $$h(n) \\le c(n, a, n') + h(n')$$
   • Satisfies the triangle inequality, ensuring $f(n)$ never decreases along any path!""",
        "State that admissibility guarantees optimality in tree search, while consistency guarantees optimality in graph search without reopening closed nodes.")

    add("ai", 2, "📐 Derivation / Formula", "Reasoning Prompting",
        "Explain Chain-of-Thought (CoT) and Tree-of-Thoughts (ToT) prompting techniques. How do they improve mathematical and multi-hop reasoning in Large Language Models?",
        "CoT guides LLMs to generate intermediate step-by-step reasoning tokens before final answer. ToT explores multiple reasoning branches with backtracking.",
        """<strong>1. Chain-of-Thought (CoT) Prompting:</strong>
• <strong>Concept:</strong> Standard prompting asks an LLM for direct answers, often leading to hallucinations on complex math or multi-step logic. CoT prompts the model to generate intermediate natural language reasoning steps:
  - <em>Zero-Shot CoT:</em> Appending the magic cue: <strong>"Let's think step by step."</strong>
  - <em>Few-Shot CoT:</em> Providing 2-3 demonstrations where answers explicitly show the detailed calculation chain.
• <strong>Why it Works:</strong> Decouples computational thinking across multiple output token generations, allowing each step to condition on previous reasoning.

<strong>2. Tree-of-Thoughts (ToT) Prompting:</strong>
• <strong>Concept:</strong> Extends CoT by viewing problem solving as search over a tree where each node represents a coherent 'thought' (partial reasoning step).
• <strong>Mechanism:</strong>
  1. Generates multiple diverse candidate reasoning thoughts at each step.
  2. Evaluates the promise of each thought (heuristic scoring or self-reflection).
  3. Uses search algorithms (BFS or Depth-First Search with backtracking) to navigate paths.
• <strong>Application:</strong> Strategic games (Chess), creative writing, and complex theorem proving.""",
        "Quote the classic Zero-Shot CoT prompt phrase: 'Let's think step by step.'")

    add("ai", 2, "📐 Derivation / Formula", "RAG Architecture",
        "What is Retrieval-Augmented Generation (RAG)? Draw a schematic block diagram and explain how it prevents hallucinations in enterprise AI systems.",
        "RAG combines an external vector database (retriever) with an LLM (generator). Steps: Chunking -> Embedding -> Vector Search -> Context Injection.",
        """<strong>1. Principle of RAG:</strong>
Retrieval-Augmented Generation (RAG) grounds LLM outputs in verified external knowledge by retrieving relevant factual documents from a private database before prompting the model, eliminating hallucinations and outdated information.

<strong>2. End-to-End Pipeline Steps:</strong>
1. <strong>Document Ingestion & Chunking:</strong>
   Raw enterprise documents (PDFs, notes, manuals) are cleaned and split into overlapping chunks (e.g. 500 tokens).
2. <strong>Vector Embedding:</strong>
   Each chunk is passed through an embedding model to generate a dense semantic vector representation ($d = 768$ or $1536$).
3. <strong>Vector Database Indexing:</strong>
   Vectors are stored in specialized vector databases (Milvus, Pinecone, Chroma) using approximate nearest neighbor (ANN) indexes.
4. <strong>User Query & Semantic Retrieval:</strong>
   When a user asks a question, the query is embedded and compared against stored chunks using <strong>Cosine Similarity</strong>:
   $$\\text{Similarity} = \\frac{\\vec{A} \\cdot \\vec{B}}{\\|\\vec{A}\\| \\|\\vec{B}\\|}$$
5. <strong>Prompt Augmentation & Generation:</strong>
   Top-$K$ retrieved chunks are injected into the LLM system prompt:
   \`Context: [Retrieved Excerpts] | Question: [User Query] | Answer based strictly on context.\`""",
        "Highlight the formula for Cosine Similarity used in vector databases to measure semantic relatedness.")

    add("ai", 3, "📐 Derivation / Formula", "SVM & Kernel Trick",
        "Explain the mathematical foundation of Support Vector Machines (SVM). Define the maximal margin hyperplane and explain the Kernel Trick.",
        "Find hyperplane w·x + b = 0 that maximizes margin 2/||w|| subject to y_i(w·x_i + b) >= 1. Kernel trick maps data to higher dimensions.",
        """<strong>1. Maximal Margin Hyperplane:</strong>
For a linearly separable binary classification dataset $(x_i, y_i)$ where $y_i \\in \\{-1, +1\\}$:
• The separating decision hyperplane is:
  $$\\vec{w} \\cdot \\vec{x} + b = 0$$
• The geometric margin between supporting planes $\\vec{w} \\cdot \\vec{x} + b = \\pm 1$ is:
  $$\\text{Margin} = \\frac{2}{\\|\\vec{w}\\|}$$
• To maximize the margin, we minimize $\\frac{1}{2} \\|\\vec{w}\\|^2$ subject to:
  $$y_i (\\vec{w} \\cdot \\vec{x}_i + b) \\ge 1 \\quad \\forall i$$
• The data points lying on the boundary hyperplanes where $y_i(\\vec{w}\\cdot\\vec{x}_i + b) = 1$ are the <strong>SUPPORT VECTORS</strong>.

<strong>2. The Kernel Trick:</strong>
• When data is non-linearly separable in original input space, it is transformed into a higher-dimensional feature space $\\Phi(\\vec{x})$ where it becomes linearly separable.
• The <strong>Kernel Trick</strong> computes inner products in high-dimensional space without explicitly evaluating coordinates:
  $$K(\\vec{x}_i, \\vec{x}_j) = \\Phi(\\vec{x}_i) \\cdot \\Phi(\\vec{x}_j)$$
• <strong>Common Kernel Functions:</strong>
  - Linear Kernel: $K(x_i, x_j) = x_i^T x_j$
  - Radial Basis Function (RBF / Gaussian): $K(x_i, x_j) = \\exp(-\\gamma \\|x_i - x_j\\|^2)$
  - Polynomial Kernel: $K(x_i, x_j) = (x_i^T x_j + c)^d$.""",
        "State that the optimization problem is solved via Lagrange multipliers: L(w, b, alpha) with dual formulation.")

    add("ai", 3, "⚡ Exception / Trap", "Activation Functions",
        "Compare the Sigmoid, Tanh, and ReLU activation functions in Artificial Neural Networks. Explain the 'Vanishing Gradient' problem and why ReLU is preferred in deep networks.",
        "Sigmoid: 1/(1+e^-z), range (0, 1). Tanh: range (-1, 1). ReLU: max(0, z), derivative is 1 for z>0, preventing vanishing gradients.",
        """<strong>1. Comparison of Activation Functions:</strong>
<div class="overflow-x-auto my-2">
<table class="w-full text-xs text-left border border-slate-300">
<thead class="bg-slate-100"><tr><th class="p-1 border">Function</th><th class="p-1 border">Mathematical Formula</th><th class="p-1 border">Output Range</th><th class="p-1 border">Zero-Centered?</th></tr></thead>
<tbody>
<tr><td class="p-1 border font-semibold">Sigmoid</td><td class="p-1 border">$\\sigma(z) = \\frac{1}{1 + e^{-z}}$</td><td class="p-1 border">$(0, 1)$</td><td class="p-1 border">No</td></tr>
<tr><td class="p-1 border font-semibold">Tanh</td><td class="p-1 border">$\\tanh(z) = \\frac{e^z - e^{-z}}{e^z + e^{-z}}$</td><td class="p-1 border">$(-1, 1)$</td><td class="p-1 border">Yes</td></tr>
<tr><td class="p-1 border font-semibold">ReLU</td><td class="p-1 border">$f(z) = \\max(0, z)$</td><td class="p-1 border">$[0, \\infty)$</td><td class="p-1 border">No</td></tr>
</tbody>
</table>
</div>

<strong>2. The Vanishing Gradient Problem:</strong>
• In backpropagation, gradients are multiplied layer-by-layer using the chain rule: $\\frac{\\partial L}{\\partial w_1} = \\frac{\\partial L}{\\partial a_n} \\dots \\sigma'(z_1)$.
• The maximum derivative of the Sigmoid function is only <strong>$0.25$</strong> (at $z=0$).
• Multiplying numbers $< 0.25$ across 10-50 hidden layers causes gradients to decay exponentially toward zero, freezing learning in early layers!

<strong>3. Why ReLU Solves This:</strong>
• For all positive inputs ($z > 0$), the derivative of ReLU is constant: $f'(z) = 1$.
• Gradients flow through deep layers without saturation or attenuation, accelerating convergence.""",
        "Mention that the max derivative of sigmoid is 0.25, while for ReLU it is exactly 1.0 for positive inputs.")

    add("ai", 4, "📐 Derivation / Formula", "Edge AI & AIoT",
        "Explain the architecture of Artificial Intelligence of Things (AIoT). Discuss the engineering trade-offs between Edge AI processing and Cloud AI computing.",
        "AIoT = IoT sensors + Edge AI microcontrollers (TinyML) + Cloud analytics. Edge reduces latency, protects privacy, and saves bandwidth.",
        """<strong>1. Architecture of AIoT:</strong>
Artificial Intelligence of Things (AIoT) embeds machine learning algorithms into connected Internet of Things (IoT) hardware infrastructure across three collaborative tiers:
1. <strong>Perception Tier (Edge Devices & Sensors):</strong> Microcontrollers (ARM Cortex-M, ESP32) running quantized TinyML models directly on vibration, acoustic, and thermal sensors.
2. <strong>Network Tier (Gateways & 5G/LoRaWAN):</strong> Aggregates sensor telemetry and forwards critical event anomalies.
3. <strong>Cloud / Central Tier:</strong> High-performance server clusters for global fleet analytics and retraining large foundational models.

<strong>2. Edge AI vs. Cloud AI Trade-Offs:</strong>
• <strong>Latency:</strong> Edge AI makes inference decisions locally in milliseconds ($< 5\\text{ ms}$), critical for autonomous brakes; Cloud incurs round-trip network delays ($100 - 500\\text{ ms}$).
• <strong>Bandwidth:</strong> Edge processes raw gigabytes locally and transmits only summary alerts, slashing 4G/5G data bills.
• <strong>Privacy & Security:</strong> Sensitive user data (biometrics, hospital audio) remains on-device.
• <strong>Compute Constraints:</strong> Edge devices have limited RAM (KB to MB) requiring model quantization (INT8) and pruning.""",
        "Highlight TinyML and 8-bit integer quantization (INT8) enabling neural networks to run on microcontrollers.")

    add("ai", 4, "⚡ Exception / Trap", "AI Fairness & Bias",
        "Discuss ethical issues in modern Artificial Intelligence systems, focusing on Algorithmic Bias, Data Privacy, and Explainability (XAI).",
        "Bias stems from skewed training data; XAI uses techniques like SHAP and LIME to interpret black-box neural networks.",
        """<strong>1. Algorithmic Bias & Sources:</strong>
• <strong>Historical / Representation Bias:</strong> When training datasets reflect societal prejudices or underrepresent minority demographic groups (e.g. facial recognition failing on darker skin tones).
• <strong>Measurement Bias:</strong> Flawed proxy features selected during model training (e.g., healthcare algorithms using past medical expenditure as a proxy for illness severity).

<strong>2. Data Privacy Concerns:</strong>
• LLMs trained on internet scrapings risk memorizing and regurgitating sensitive personal identifying information (PII) or proprietary trade secrets.
• Mitigated by Differential Privacy (adding calibrated mathematical noise to dataset gradients).

<strong>3. Explainable AI (XAI):</strong>
• High-performance deep networks act as opaque 'black boxes' where engineers cannot explain why a specific loan was denied or medical diagnosis was made.
• <strong>Post-hoc Interpretability Tools:</strong>
  - <em>SHAP (Shapley Additive Explanations):</em> Based on game theory; computes the marginal contribution of each feature to the prediction.
  - <em>LIME (Local Interpretable Model-agnostic Explanations):</em> Approximates local decision boundaries with simple linear models.""",
        "Cite SHAP (Shapley values) and LIME as the two industry-standard tools for Explainable AI.")

    add("ai", 5, "📐 Derivation / Formula", "Drone Sensors",
        "Explain how Artificial Intelligence is integrated into autonomous drones for agricultural crop monitoring and precision spraying.",
        "Drones use multispectral optical cameras to calculate NDVI = (NIR - Red) / (NIR + Red) to detect plant chlorophyll health.",
        """<strong>1. AI Drone Integration for Precision Agriculture:</strong>
Autonomous drones integrate computer vision, edge computing, and GPS waypoint navigation to monitor agricultural health and spray fertilizers with millimetric accuracy.

<strong>2. Core Technical Modules:</strong>
• <strong>1. Multispectral Imaging & NDVI Index:</strong>
  - Drones capture Near-Infrared (NIR) and visible Red reflectance wavelengths.
  - Healthy photosynthetic vegetation absorbs red light and strongly reflects near-infrared:
    $$\\mathbf{NDVI = \\frac{NIR - Red}{NIR + Red}}$$
  - NDVI values range from $-1$ to $+1$: Values $> 0.6$ signify lush healthy crop canopy; values $< 0.2$ indicate water stress, pest infestation, or dying leaves!
• <strong>2. Deep Learning Weed & Pest Detection:</strong>
  - On-board YOLO (You Only Look Once) edge object-detection models identify specific invasive weed species and fungal leaf spots in real time.
• <strong>3. Variable Rate Spraying (VRA):</strong>
  - Drones actuate servo solenoids to spray pesticides exclusively over infected plant clusters, reducing chemical pesticide runoff by up to 70%!""",
        "State the exact mathematical formula for NDVI: (NIR - Red) / (NIR + Red).")

    # =========================================================================
    # INTRODUCTION TO MECHANICAL ENGINEERING (9 Cards to reach 16)
    # =========================================================================
    add("mech", 1, "📐 Derivation / Formula", "Nuclear Power Plant",
        "Explain the construction and working of a Pressurized Water Reactor (PWR) Nuclear Power Plant with a schematic diagram. What are the roles of control rods and moderator?",
        "Components: Reactor pressure vessel, Fuel rods (U-235), Control rods (Cadmium/Boron), Moderator (Heavy water), Heat exchanger (Steam generator), Turbine.",
        """<strong>1. Working Principle:</strong>
A Nuclear Power Plant generates heat through controlled nuclear fission of heavy radioactive isotopes (Uranium-235). In a Pressurized Water Reactor (PWR), high-pressure water absorbs fission heat without boiling and transfers it to a secondary loop inside a steam generator to drive a steam turbine.

<strong>2. Core Reactor Components:</strong>
• <strong>Nuclear Fuel:</strong> Enriched Uranium dioxide ($UO_2$) pellets sealed in Zircaloy tubes (Fuel Rods).
• <strong>Moderator (Heavy Water / Light Water / Graphite):</strong> Slows down fast-moving fission neutrons to thermal speeds necessary to sustain chain reactions.
• <strong>Control Rods (Cadmium or Boron):</strong> Strong neutron absorbers. Lowering them absorbs neutrons and shuts down or regulates the reactor power level.
• <strong>Primary Coolant Loop:</strong> Water kept under high pressure ($\sim 15\\text{ MPa}$) so it remains liquid at $320^\\circ\\text{C}$.
• <strong>Steam Generator:</strong> Secondary loop water boils into high-pressure dry steam, expanding across a turbine to spin the electrical generator.

<strong>3. Fission Reaction:</strong>
$$^{235}_{92}U + ^1_0n \\rightarrow ^{141}_{56}Ba + ^{92}_{36}Kr + 3 ^1_0n + 200\\text{ MeV Energy}$$""",
        "Highlight that control rods absorb neutrons to regulate power, whereas moderators slow neutrons down.")

    add("mech", 1, "📐 Derivation / Formula", "Thermal Power Plant",
        "Explain the working of a modern Coal-Fired Steam Thermal Power Plant with a neat layout diagram, describing the Boiler, Superheater, Economizer, and Condenser.",
        "Rankine cycle: Boiler heats water to steam -> Superheater dries steam -> Turbine expands steam -> Condenser condenses steam -> Economizer preheats feed water.",
        """<strong>1. Working Principle (Rankine Cycle):</strong>
Chemical energy stored in pulverized coal is released through combustion inside a boiler to convert water into high-pressure, superheated steam, which expands through high, intermediate, and low-pressure steam turbines driving an electrical generator.

<strong>2. Key Components & Functions:</strong>
• <strong>Boiler (Steam Generator):</strong> Shell and water-tube assembly where water turns into saturated steam.
• <strong>Superheater:</strong> A bundle of steel tubes located in the path of hot flue gases that heats saturated steam above its boiling point, eliminating moisture droplets that would erode turbine blades!
• <strong>Economizer:</strong> A heat exchanger that utilizes residual waste heat from flue gases leaving the boiler to preheat boiler feed-water, increasing thermal efficiency by 5-10%.
• <strong>Air Preheater:</strong> Recovers remaining flue gas heat to warm incoming combustion air.
• <strong>Steam Turbine:</strong> Converts thermal enthalpy into rotational shaft power.
• <strong>Condenser & Cooling Tower:</strong> Cools exhaust steam back into liquid condensate, creating a low-pressure vacuum that maximizes turbine pressure drop and work output.""",
        "Mention that the Economizer preheats feed-water, while the Superheater removes moisture droplets from steam.")

    add("mech", 2, "📐 Derivation / Formula", "CNC Machine Architecture",
        "Write a neat block diagram showing the major components of a Computer Numerical Control (CNC) machine. List four major advantages of CNC over conventional manual machine tools.",
        "Components: Input unit (G-code), Machine Control Unit (MCU), Drive system (Servomotors/Ball screws), Machine tool, Feedback transducers.",
        """<strong>1. Major Components of a CNC Machine:</strong>
1. <strong>Input Unit / Interface:</strong> USB/Ethernet port receiving CAD/CAM part programs coded in G-codes (geometric motions) and M-codes (machine functions).
2. <strong>Machine Control Unit (MCU):</strong> The central computer microprocessor that decodes part program blocks, executes interpolation algorithms, and generates coordinate motion signals.
3. <strong>Drive System:</strong> High-precision AC/DC servomotors or stepper motors connected to recirculating <strong>ball lead screws</strong> for zero-backlash axis positioning ($X, Y, Z$).
4. <strong>Feedback System (Transducers):</strong> Optical encoders or linear glass scales that continuously measure actual position and feed signals back to the MCU for closed-loop error correction.
5. <strong>Machine Tool Structure:</strong> Rigid cast-iron bed, automatic tool changer (ATC), spindle, and coolant pumps.

<strong>2. Four Key Advantages over Conventional Machines:</strong>
1. <strong>Superior Accuracy & Repeatability:</strong> Position tolerance within $\\pm 0.002\\text{ mm}$, eliminating operator fatigue.
2. <strong>Complex Geometry Machining:</strong> Effortlessly machines complex 3D contoured surfaces (turbine blades, impellers).
3. <strong>High Productivity:</strong> Automatic tool changers (ATC) switch cutting tools in $< 2\\text{ seconds}$.
4. <strong>Reduced Scrap Rate:</strong> Pre-execution simulation eliminates expensive tool crashes and material wastage.""",
        "Always mention the closed-loop feedback system using optical encoders or linear scales.")

    add("mech", 2, "📐 Derivation / Formula", "3D Printing Technologies",
        "What is Additive Manufacturing (3D Printing)? Explain the working principles of Fused Deposition Modeling (FDM) and Stereolithography (SLA).",
        "FDM extrudes thermoplastic filaments (PLA/ABS) layer-by-layer through a heated nozzle; SLA photopolymerizes liquid resin using a UV laser beam.",
        """<strong>1. Definition:</strong>
Additive manufacturing is a process of joining materials layer upon layer directly from 3D CAD computer model data, as opposed to subtractive manufacturing (machining).

<strong>2. Fused Deposition Modeling (FDM):</strong>
• <strong>Material:</strong> Continuous spools of thermoplastic filament: PLA, ABS, PETG.
• <strong>Working:</strong>
  1. Filament is fed by drive gears into a heated liquefier nozzle ($200^\\circ\\text{C} - 250^\\circ\\text{C}$).
  2. The molten plastic is extruded onto a build platform along computer-guided $X-Y$ paths.
  3. The layer cools and solidifies; the build platform steps down along the $Z$-axis by layer thickness ($0.1 - 0.3\\text{ mm}$), and the process repeats.
• <strong>Advantages:</strong> Inexpensive machines and materials, durable engineering prototypes.

<strong>3. Stereolithography (SLA):</strong>
• <strong>Material:</strong> Liquid photopolymer thermoset resin.
• <strong>Working:</strong>
  1. A movable build platform is submerged just below the surface of a resin vat.
  2. An ultraviolet (UV) laser ($405\\text{ nm}$) traces the cross-sectional layer pattern, curing and photopolymerizing the liquid monomer into solid plastic.
  3. The platform lowers, a recoater blade levels fresh resin, and the next layer cures.
• <strong>Advantages:</strong> Ultra-high resolution ($25 - 50\\text{ }\\mu\\text{m}$), smooth surface finish (ideal for dental and jewelry).""",
        "FDM uses thermoplastic filaments (extrusion), while SLA uses liquid photopolymer resin cured by UV laser.")

    add("mech", 3, "📐 Derivation / Formula", "Refrigeration VCRS Cycle",
        "Explain with a neat flow diagram the construction and working of a Domestic Vapour Compression Refrigeration System (VCRS). Name the four thermodynamic processes.",
        "Components: Compressor, Condenser, Expansion Device (capillary tube), Evaporator. Refrigerant absorbs heat in evaporator and rejects heat in condenser.",
        """<strong>1. Working Principle:</strong>
A Vapour Compression Refrigeration System removes heat from a low-temperature refrigerated space and discharges it to a higher-temperature ambient environment using a circulating working fluid (refrigerant, e.g., R-134a or R-600a).

<strong>2. Four Thermodynamic Processes:</strong>
1. <strong>Process 1-2: Isentropic Compression (in Compressor):</strong>
   • Low-pressure, low-temperature saturated refrigerant vapour from the evaporator is compressed to high-pressure, high-temperature superheated vapour by a hermetically sealed compressor.
2. <strong>Process 2-3: Constant Pressure Condensation (in Condenser):</strong>
   • High-pressure vapour flows through external serpentine cooling coils, rejecting latent heat to surrounding air and condensing into high-pressure subcooled liquid.
3. <strong>Process 3-4: Isenthalpic Throttling (in Capillary Tube / Expansion Valve):</strong>
   • The high-pressure liquid passes through a narrow capillary tube, undergoing an abrupt pressure and temperature drop ($h_3 = h_4$) into a low-pressure liquid-vapour mixture.
4. <strong>Process 4-1: Constant Pressure Evaporation (in Evaporator):</strong>
   • Low-temperature refrigerant flows through cabinet coils, absorbing latent heat of vaporization from the stored food items, producing the cooling refrigeration effect.""",
        "List all 4 processes with their thermodynamic names: Isentropic Compression, Constant-P Condensation, Isenthalpic Throttling, Constant-P Evaporation.")

    add("mech", 3, "🔢 Numerical Pattern", "Engine Calculations",
        "A 4-stroke 4-cylinder petrol engine develops a Brake Power of 30 kW at 2500 rpm. The bore is 75 mm, stroke length is 90 mm, and mechanical efficiency is 80%. Calculate: (i) Indicated Power, (ii) Mean Effective Pressure, and (iii) Engine Output Torque.",
        "4 cylinders: K = 4. 4-stroke: n = N/2 = 1250 rpm. IP = BP / eta_m = 30 / 0.8 = 37.5 kW. BP = 2*pi*N*T / 60000 -> T = (60000*BP)/(2*pi*N).",
        """<strong>1. Given Data:</strong>
• Number of cylinders $K = 4$
• Type: 4-Stroke $\\implies n = \\frac{N}{2} = \\frac{2500}{2} = 1250\\text{ power strokes/min}$
• Brake Power $BP = 30\\text{ kW}$
• Engine Speed $N = 2500\\text{ rpm}$
• Cylinder Bore $D = 75\\text{ mm} = 0.075\\text{ m} \\implies A = \\frac{\\pi}{4}(0.075)^2 = 0.004418\\text{ m}^2$
• Stroke Length $L = 90\\text{ mm} = 0.09\\text{ m}$
• Mechanical Efficiency $\\eta_m = 80\\% = 0.80$

<strong>2. Step-by-Step Computations:</strong>
• <strong>(i) Indicated Power (IP):</strong>
  $$\\eta_m = \\frac{BP}{IP} \\implies IP = \\frac{BP}{\\eta_m} = \\frac{30}{0.80} = \\mathbf{37.5\\text{ kW}}$$

• <strong>(ii) Mean Effective Pressure ($P_m$):</strong>
  Formula for multi-cylinder engine:
  $$IP = \\frac{P_m \\cdot L \\cdot A \\cdot n \\cdot K}{60,000} \\quad (\\text{where } P_m \\text{ is in } N/m^2)$$
  $$37.5 = \\frac{P_m \\times 0.09 \\times 0.004418 \\times 1250 \\times 4}{60,000}$$
  $$37.5 = \\frac{P_m \\times 1.9881}{60,000} \\implies P_m = \\frac{37.5 \\times 60,000}{1.9881} = 1,131,733\\text{ N/m}^2$$
  $$\\mathbf{P_m = 11.317\\text{ bar}} = 1.132\\text{ MPa}$$

• <strong>(iii) Engine Output Torque ($T$):</strong>
  $$BP = \\frac{2 \\pi N T}{60,000} \\implies T = \\frac{60,000 \\times BP}{2 \\pi N}$$
  $$T = \\frac{60,000 \\times 30}{2 \\times \\pi \\times 2500} = \\frac{1,800,000}{15,707.96} = \\mathbf{114.59\\text{ N}\\cdot\\text{m}}$$""",
        "Remember to multiply by the number of cylinders K = 4 in the Indicated Power equation.")

    add("mech", 4, "📐 Derivation / Formula", "Welding Principles",
        "Explain the principle and working of Shielded Metal Arc Welding (SMAW). What are the main functions of the flux coating on the consumable electrode?",
        "Electric arc between consumable flux-coated electrode and base metal generates 3000-4000°C heat. Flux decomposes into gaseous shield and protective slag.",
        """<strong>1. Principle of SMAW (Manual Metal Arc Welding):</strong>
An electric arc is struck between a flux-coated consumable metallic electrode and the workpiece by momentarily touching and withdrawing the electrode ($2 - 4\\text{ mm}$ gap). The localized electrical discharge generates an intense arc temperature of <strong>$3500^\\circ\\text{C} - 4000^\\circ\\text{C}$</strong>, instantly melting the base metal edges and the electrode tip into a shared molten weld pool.

<strong>2. Functions of the Electrode Flux Coating:</strong>
1. <strong>Gaseous Shielding:</strong> Thermal decomposition of flux constituents produces an inert gaseous blanket ($CO_2, H_2$) around the arc, shielding the molten metal pool from atmospheric oxygen and nitrogen contamination (which cause weld embrittlement).
2. <strong>Protective Slag Formation:</strong> Flux forms a lightweight liquid slag that floats over the molten weld pool and solidifies into a protective crust, slowing the cooling rate and preventing rapid quenching cracks.
3. <strong>Arc Stabilization:</strong> Contains ionizing salts (potassium and sodium compounds) that lower arc ignition voltage and prevent flickering.
4. <strong>Deoxidation & Alloying:</strong> Scavenges oxides from the molten pool and adds beneficial alloying elements (Mn, Si) to boost tensile strength.""",
        "List all 4 critical functions of flux: Shielding gas, Slag blanket, Arc stabilization, and Deoxidation.")

    add("mech", 4, "⚡ Exception / Trap", "Metal Joining Comparison",
        "Distinguish between Soldering, Brazing, and Welding with respect to temperature range, filler metal, base metal melting, and joint strength.",
        "Welding melts base metals (>1000°C); Brazing does not melt base metals (>450°C, brass/bronze filler); Soldering does not melt base metals (<450°C, tin-lead).",
        """<strong>Comparison Table of Metal Joining Processes:</strong>
<div class="overflow-x-auto my-2">
<table class="w-full text-xs text-left border border-slate-300">
<thead class="bg-slate-100"><tr><th class="p-1 border">Parameter</th><th class="p-1 border">Soldering</th><th class="p-1 border">Brazing</th><th class="p-1 border">Welding</th></tr></thead>
<tbody>
<tr><td class="p-1 border font-semibold">Base Metal Melting</td><td class="p-1 border">Does NOT melt base metal</td><td class="p-1 border">Does NOT melt base metal</td><td class="p-1 border">Base metal is MELTED and fused</td></tr>
<tr><td class="p-1 border font-semibold">Temperature Range</td><td class="p-1 border">Below $450^\\circ\\text{C}$ (typically $180 - 250^\\circ\\text{C}$)</td><td class="p-1 border">Above $450^\\circ\\text{C}$ (typically $600 - 900^\\circ\\text{C}$)</td><td class="p-1 border">Very high ($> 1500 - 3500^\\circ\\text{C}$)</td></tr>
<tr><td class="p-1 border font-semibold">Filler Material</td><td class="p-1 border">Low melting point alloys (Tin-Lead / Tin-Silver)</td><td class="p-1 border">Non-ferrous alloys: Copper-Zinc (Spelter), Silver alloys</td><td class="p-1 border">Same or similar composition to base metal</td></tr>
<tr><td class="p-1 border font-semibold">Joint Strength</td><td class="p-1 border">Lowest strength (used for electrical continuity)</td><td class="p-1 border">Moderate to high strength (capillary action)</td><td class="p-1 border">Highest strength (equal to or stronger than parent metal)</td></tr>
<tr><td class="p-1 border font-semibold">Applications</td><td class="p-1 border">Printed circuit board assembly, electronics wiring</td><td class="p-1 border">Refrigeration copper pipe fittings, heat exchangers</td><td class="p-1 border">Structural steel beams, automotive chassis, pressure vessels</td></tr>
</tbody>
</table>
</div>""",
        "Remember the key temperature threshold dividing Soldering and Brazing: exactly 450°C.")

    add("mech", 5, "📐 Derivation / Formula", "HEV Architectures",
        "Describe the three primary architectural configurations of Hybrid Electric Vehicles: Series Hybrid, Parallel Hybrid, and Series-Parallel Hybrid.",
        "Series: ICE drives generator only, motor drives wheels. Parallel: both ICE and motor connect to transmission. Series-Parallel: planetary gear power-split.",
        """<strong>1. Series Hybrid Electric Vehicle (SHEV):</strong>
• The Internal Combustion Engine (ICE) has **no mechanical connection to the vehicle wheels**.
• The engine operates at its optimal constant-speed efficiency point driving an electrical generator, which charges the battery pack or feeds power to the electric traction motor.
• Only the electric traction motor mechanically turns the wheels.

<strong>2. Parallel Hybrid Electric Vehicle (PHEV):</strong>
• Both the ICE and the electric motor are mechanically coupled to the drivetrain through a transmission combiner.
• Either the engine alone, the electric motor alone, or both simultaneously supply propulsion torque to the wheels.
• Highly efficient for continuous highway cruising where direct mechanical drive is superior.

<strong>3. Series-Parallel (Power-Split) Hybrid:</strong>
• Combines the benefits of both architectures using a <strong>Planetary Gear Power-Split Device</strong>.
• The engine can drive the wheels mechanically while simultaneously turning a generator to recharge the battery.
• Found in the world's most successful hybrid drivetrains (e.g. Toyota Prius Hybrid Synergy Drive).""",
        "Mention that Series hybrids decouple the engine from the wheels, while Parallel hybrids couple both to the drivetrain.")

    # =========================================================================
    # CONSTITUTION OF INDIA & ENGINEERING ETHICS (7 Cards to reach 16)
    # =========================================================================
    add("const", 1, "📐 Derivation / Formula", "Salient Features",
        "Explain any six salient features of the Constitution of India that distinguish it as a unique democratic instrument.",
        "1. Lengthiest written constitution. 2. Blend of rigidity & flexibility. 3. Federal system with unitary bias. 4. Parliamentary democracy. 5. Fundamental Rights & DPSPs. 6. Independent Judiciary.",
        """<strong>Six Salient Features of the Indian Constitution:</strong>
1. <strong>Lengthiest Written Constitution in the World:</strong>
   Contains 395 original Articles organized in 22 Parts and 12 Schedules (now > 470 articles). Detailed provisions cover center-state relations, emergency powers, and administrative details.
2. <strong>Blend of Rigidity and Flexibility:</strong>
   Some provisions can be amended by simple majority (like creating new states), while others require special majority under Article 368 (2/3 members present & voting), plus ratification by half of state legislatures for federal amendments.
3. <strong>Federal System with Unitary Bias (Quasi-Federal):</strong>
   Features federalism (two governments, division of powers, written constitution) but maintains unitary strength via single citizenship, integrated judiciary, emergency powers, and All-India Services (IAS, IPS).
4. <strong>Parliamentary Form of Government:</strong>
   Modeled on the British Westminster system. The Executive is directly responsible to the elected Legislature (Lok Sabha).
5. <strong>Fundamental Rights & Directive Principles:</strong>
   Part III guarantees justiciable Fundamental Rights, while Part IV sets socialistic socio-economic goals for the welfare state (DPSPs).
6. <strong>Integrated and Independent Judiciary:</strong>
   A single unified judicial ladder headed by the Supreme Court of India with constitutional protection of tenure and salaries.""",
        "Mention K.C. Wheare's famous phrase describing India as a 'Quasi-Federal' constitution.")

    add("const", 2, "📐 Derivation / Formula", "DPSP Classification",
        "Explain the classification and constitutional objectives of the Directive Principles of State Policy (DPSP) under Part IV of the Indian Constitution.",
        "DPSPs (Articles 36-51) are non-justiciable guidelines for a Welfare State. Divided into Socialistic, Gandhian, and Liberal-Intellectual principles.",
        """<strong>1. Concept & Purpose of DPSPs (Part IV, Articles 36–51):</strong>
Borrowed from the Irish Constitution, DPSPs are affirmative instructions to the State to establish economic and social democracy, transforming India into a genuine <strong>Welfare State</strong>. While non-justiciable in court (Article 37), they are fundamental in the governance of the country.

<strong>2. Three Broad Classifications:</strong>
1. <strong>Socialistic Principles:</strong>
   • Article 38: Promoting social order by securing justice (social, economic, political).
   • Article 39: Equitable distribution of material resources to prevent concentration of wealth.
   • Article 39A: Free legal aid to the poor.
   • Article 41 & 42: Right to work and just, humane conditions of work with maternity relief.
2. <strong>Gandhian Principles:</strong>
   • Article 40: Organization of Village Panchayats as units of self-government.
   • Article 43: Promotion of cottage industries in rural areas.
   • Article 47: Prohibition of intoxicating drinks and hazardous drugs.
   • Article 48: Prohibition of slaughter of cows, calves, and milch cattle.
3. <strong>Liberal-Intellectual Principles:</strong>
   • Article 44: Securing a <strong>Uniform Civil Code (UCC)</strong> for all citizens.
   • Article 48A: Protection and improvement of environment, forests, and wildlife.
   • Article 50: Separation of the Judiciary from the Executive in public services.
   • Article 51: Promotion of international peace and security.""",
        "Cite Article 37 which states that DPSPs are not enforceable by courts but fundamental in governance.")

    add("const", 2, "⚡ Exception / Trap", "Expanding Article 21",
        "Analyze how the Supreme Court of India has expanded the interpretation of the 'Right to Life and Personal Liberty' under Article 21 through landmark judicial decisions.",
        "Article 21: 'No person shall be deprived of life or personal liberty except according to procedure established by law.' Maneka Gandhi case expanded to 'due process of law'.",
        """<strong>1. The Text of Article 21:</strong>
<em>"No person shall be deprived of his life or personal liberty except according to procedure established by law."</em>

<strong>2. Landmark Transition: Gopalan to Maneka Gandhi:</strong>
• In <em>A.K. Gopalan (1950)</em>, the court took a narrow literal view: 'procedure established by law' meant any law enacted by parliament was valid even if unfair.
• In <em>Maneka Gandhi v. Union of India (1978)</em>, the Supreme Court radically overturned this: The procedure must be <strong>"just, fair, and reasonable"</strong> (importing substantive American Due Process of Law).

<strong>3. Expanding Derivative Rights Under Article 21:</strong>
Through creative judicial interpretation, the court ruled that 'life' does not mean mere animal existence, but living with human dignity:
1. <strong>Right to Clean Environment & Pollution-Free Water/Air:</strong> (Subhash Kumar v. State of Bihar, 1991).
2. <strong>Right to Privacy:</strong> Declared a fundamental right by a 9-judge constitution bench in <em>Justice K.S. Puttaswamy v. Union of India (2017)</em>.
3. <strong>Right to Education (Article 21A):</strong> Added by the 86th Amendment (2002) for children aged 6 to 14.
4. <strong>Right to Speedy Trial and Free Legal Aid:</strong> (Hussainara Khatoon case).
5. <strong>Right to Health & Emergency Medical Aid:</strong> (Parmanand Katara v. Union of India).""",
        "Cite both the Maneka Gandhi case (1978) and the Puttaswamy Privacy judgment (2017).")

    add("const", 3, "📐 Derivation / Formula", "Presidential Powers",
        "Detail the Executive, Legislative, and Judicial powers of the President of India. Explain the three types of Presidential Veto over Parliamentary Bills.",
        "Executive: Appointments (PM, Governors, Judges). Legislative: Summoning Parliament, Ordinance making (Art 123). Veto: Absolute, Suspensive, Pocket veto.",
        """<strong>1. Constitutional Powers of the President:</strong>
• <strong>Executive Powers:</strong>
  - All executive actions of the Government of India are formally taken in the President's name.
  - Appoints the Prime Minister, Council of Ministers, Attorney General, Comptroller and Auditor General (CAG), Supreme/High Court judges, and State Governors.
  - Supreme Commander of the Indian Armed Forces.
• <strong>Legislative Powers:</strong>
  - Summons and prorogues both Houses of Parliament and dissolves the Lok Sabha.
  - Delivers inaugural address to Parliament after general elections.
  - <strong>Ordinance-Making Power (Article 123):</strong> Can promulgate binding ordinances when Parliament is in recess.
• <strong>Judicial & Pardoning Powers (Article 72):</strong>
  - Power to grant pardons, reprieves, respites, and remissions of punishment or commute sentences (including death sentences).

<strong>2. Three Types of Presidential Veto (Article 111):</strong>
1. <strong>Absolute Veto:</strong> Withholding assent to a bill, causing it to die permanently (typically for private members' bills).
2. <strong>Suspensive Veto:</strong> Returning a non-money bill to Parliament for reconsideration. If Parliament passes it again by simple majority, the President **must give assent**.
3. <strong>Pocket Veto:</strong> The President neither assents nor rejects nor returns the bill, but simply keeps the bill pending indefinitely on their desk (as the Indian Constitution sets no time limit!). Used by President Zail Singh in 1986 on the Indian Post Office Bill.""",
        "Note that the President has NO veto power over Constitutional Amendment Bills (24th Amendment 1971).")

    add("const", 3, "📐 Derivation / Formula", "Parliament vs State Legislature",
        "Compare the Union Parliament (Lok Sabha & Rajya Sabha) with the State Legislature. Highlight the special and exclusive powers of the Lok Sabha.",
        "Lok Sabha is directly elected (House of People); Rajya Sabha represents states (Permanent Council). Money bills originate exclusively in Lok Sabha.",
        """<strong>1. Comparison of Houses:</strong>
<div class="overflow-x-auto my-2">
<table class="w-full text-xs text-left border border-slate-300">
<thead class="bg-slate-100"><tr><th class="p-1 border">Feature</th><th class="p-1 border">Lok Sabha (House of the People)</th><th class="p-1 border">Rajya Sabha (Council of States)</th></tr></thead>
<tbody>
<tr><td class="p-1 border font-semibold">Composition</td><td class="p-1 border">Max 550 directly elected by citizens</td><td class="p-1 border">250 (238 elected by State MLAs + 12 nominated)</td></tr>
<tr><td class="p-1 border font-semibold">Tenure</td><td class="p-1 border">5-year term (subject to early dissolution)</td><td class="p-1 border">Permanent body (1/3 members retire every 2 years)</td></tr>
<tr><td class="p-1 border font-semibold">Presiding Officer</td><td class="p-1 border">Speaker elected by members</td><td class="p-1 border">Vice-President of India (ex-officio Chairman)</td></tr>
<tr><td class="p-1 border font-semibold">Financial Powers</td><td class="p-1 border">Exclusive control over Money Bills (Art 109/110)</td><td class="p-1 border">Can only delay Money Bills for max 14 days</td></tr>
<tr><td class="p-1 border font-semibold">Executive Control</td><td class="p-1 border">Council of Ministers is collectively responsible solely to Lok Sabha (No-Confidence Motion)</td><td class="p-1 border">Cannot pass a No-Confidence Motion</td></tr>
</tbody>
</table>
</div>

<strong>2. Exclusive Powers of Lok Sabha:</strong>
1. <strong>Money Bills:</strong> Can only be introduced in Lok Sabha upon presidential recommendation. Speaker has sole authority to certify a Money Bill.
2. <strong>Joint Sitting (Article 108):</strong> In deadlocks over ordinary bills, Lok Sabha's greater numerical strength and Speaker's leadership prevail.""",
        "Mention the 14-day limit: Rajya Sabha can only delay a Money Bill for up to 14 days, after which it passes automatically.")

    add("const", 4, "⚡ Exception / Trap", "Financial Emergency",
        "Explain Financial Emergency under Article 360 of the Indian Constitution: Grounds for proclamation, parliamentary approval, and constitutional effects.",
        "Grounds: Threat to financial stability or credit of India. No time limit once approved. Salaried reductions of judges/officials. Has NEVER been declared in India.",
        """<strong>1. Grounds for Proclamation (Article 360):</strong>
If the President is satisfied that a situation has arisen whereby the financial stability or credit of India or any part of its territory is threatened.

<strong>2. Parliamentary Approval & Duration:</strong>
• Must be approved by both Houses of Parliament within <strong>two months</strong> by a simple majority.
• Once approved by Parliament, it continues indefinitely until revoked by the President (unlike Articles 352 and 356, no periodic 6-month parliamentary re-approval is required!).

<strong>3. Constitutional Effects:</strong>
1. <strong>Financial Directions to States:</strong> The Central Government can issue binding directions to any state to observe specified canons of financial propriety.
2. <strong>Reduction of Salaries:</strong> The President can issue orders reducing the salaries and allowances of all persons serving the Union, including <strong>Judges of the Supreme Court and High Courts</strong>!
3. <strong>Reservation of State Money Bills:</strong> The President can mandate that all Money Bills and financial bills passed by a state legislature be reserved for presidential consideration.

<strong>4. Historical Trivia:</strong>
• A Financial Emergency has <strong>NEVER been declared in India</strong> till date, not even during the severe 1991 balance-of-payments crisis!""",
        "Highlight that Article 360 has NEVER been proclaimed in India since independence in 1947.")

    add("const", 5, "📐 Derivation / Formula", "Engineering Ethics Codes",
        "Detail the fundamental canons of the IEEE Code of Ethics and the NSPE Code of Ethics for engineering professionals.",
        "Canons: 1. Public safety, health & welfare. 2. Competent practice. 3. Avoid conflicts of interest. 4. Reject bribery. 5. Honest peer review.",
        """<strong>1. Foundational Mandate:</strong>
Both the IEEE (Institute of Electrical and Electronics Engineers) and NSPE (National Society of Professional Engineers) codes mandate that engineers must:
<em>"Hold paramount the safety, health, and welfare of the public in the performance of their professional duties."</em>

<strong>2. Fundamental Ethical Canons:</strong>
1. <strong>Paramount Safety & Environmental Sustainability:</strong>
   Promptly disclose factors that might endanger the public, workers, or the natural environment.
2. <strong>Competence & Integrity:</strong>
   Perform services only in areas of their technical competence. Undertake engineering tasks only if qualified by education or experience.
3. <strong>Avoid Conflicts of Interest:</strong>
   Avoid unlawful real or perceived conflicts of interest and promptly disclose them to affected parties.
4. <strong>Honest & Objective Communication:</strong>
   Be honest, truthful, realistic, and objective in stating claims or estimates based on available data, avoiding false puffery.
5. <strong>Zero Tolerance for Bribery & Corruption:</strong>
   Reject bribery, kickbacks, and extortion in all forms.
6. <strong>Fair Treatment & Non-Discrimination:</strong>
   Treat all persons fairly regardless of race, religion, gender, disability, or national origin.
7. <strong>Support Whistleblowers & Ethical Practice:</strong>
   Assist colleagues in professional development and support them in adhering to ethical standards.""",
        "Quote the exact overarching canon: 'Hold paramount the safety, health, and welfare of the public.'")

    # =========================================================================
    # COMMUNICATIVE ENGLISH & SOFT SKILLS (9 Cards to reach 16)
    # =========================================================================
    add("eng", 1, "📐 Derivation / Formula", "Paralanguage / Vocalics",
        "Explain the key components of Vocalics (Paralanguage) in engineering presentations: Pitch, Pace, Volume, Tone, Pauses, and Articulation.",
        "Paralanguage is HOW you speak, not what you say. Controls speaker credibility, audience engagement, and message retention.",
        """<strong>1. What is Vocalics (Paralanguage)?:</strong>
The vocal characteristics that accompany spoken communication, conveying emotional nuance, authority, and emphasis without altering the actual dictionary words.

<strong>2. Six Core Components:</strong>
1. <strong>Pitch (Voice Frequency):</strong>
   • High vs low audio frequency. A monotonous flat pitch induces boredom; varying pitch emphasizes critical project findings.
2. <strong>Pace (Speaking Rate):</strong>
   • The speed of delivery (ideal is 130–160 words per minute). Slowing down signals gravity and complex formulas; quickening pace communicates passion.
3. <strong>Volume (Loudness):</strong>
   • Modulating voice volume to suit hall acoustics and microphone distance.
4. <strong>Tone (Emotional Color):</strong>
   • Warm, authoritative, defensive, or indifferent. In technical defense viva, an assertive yet respectful tone shows confidence.
5. <strong>Strategic Pauses:</strong>
   • Intentional silences before delivering key statistics or after posing rhetorical questions, allowing cognitive absorption and eliminating filler sounds ("uh", "um").
6. <strong>Articulation & Pronunciation:</strong>
   • Enunciating syllables clearly so technical acronyms (e.g. "FPGA", "MOSFET") are distinct.""",
        "Mention that strategic pauses eliminate filler words ('um', 'uh', 'like') and improve perceived competence.")

    add("eng", 1, "📐 Derivation / Formula", "Active Listening",
        "Distinguish between passive hearing and active listening. Explain the five sequential stages of the Active Listening process in engineering design reviews.",
        "Hearing is passive physical reception of sound; Listening is active cognitive decoding. 5 stages: Receiving, Understanding, Remembering, Evaluating, Responding.",
        """<strong>1. Passive Hearing vs. Active Listening:</strong>
• <strong>Hearing:</strong> An involuntary physiological process where acoustic sound waves strike the eardrum and send neural impulses to the auditory cortex (passive, effortless).
• <strong>Active Listening:</strong> A conscious cognitive and psychological discipline requiring undivided attention to decode, interpret, evaluate, and formulate constructive feedback on the speaker's message.

<strong>2. Five Sequential Stages of Active Listening:</strong>
1. <strong>Stage 1 — Receiving (Attending):</strong>
   Focusing attention on verbal statements and non-verbal body language while filtering out ambient background noise and phone notifications.
2. <strong>Stage 2 — Understanding (Comprehending):</strong>
   Decoding the speaker's technical vocabulary and grasping their underlying intent and technical constraints.
3. <strong>Stage 3 — Remembering:</strong>
   Storing key project specs and action items in working and long-term memory (assisted by taking concise written notes).
4. <strong>Stage 4 — Evaluating:</strong>
   Objectively distinguishing between factual technical proof and subjective opinions without premature emotional judgment.
5. <strong>Stage 5 — Responding (Feedback):</strong>
   Providing verbal affirmation ("I see", "Understood"), asking clarifying questions, or summarizing agreed next steps.""",
        "List all 5 stages in order: Receiving -> Understanding -> Remembering -> Evaluating -> Responding.")

    add("eng", 2, "📐 Derivation / Formula", "Emotional Intelligence",
        "Explain Daniel Goleman's Five Dimensions of Emotional Intelligence (EQ). Why is EQ increasingly prioritized over pure technical IQ in engineering team hiring?",
        "Goleman's 5 dimensions: Self-awareness, Self-regulation, Internal motivation, Empathy, Social skills. High EQ teams resolve technical conflicts faster.",
        """<strong>1. Daniel Goleman's Five Dimensions of EQ:</strong>
1. <strong>Self-Awareness:</strong>
   Recognizing one's own moods, emotional triggers, cognitive biases, and how they impact teammates during high-pressure deadlines.
2. <strong>Self-Regulation (Emotional Control):</strong>
   The ability to redirect disruptive impulses and maintain composure under production server crashes or critical code review feedback.
3. <strong>Intrinsic Motivation:</strong>
   A passion for technical excellence, craftsmanship, and learning driven by internal curiosity rather than external bonuses or titles.
4. <strong>Empathy:</strong>
   Understanding the emotional makeup, unspoken frustrations, and perspectives of diverse cross-functional colleagues.
5. <strong>Social & Interpersonal Skills:</strong>
   Proficiency in building rapport, navigating corporate politics, managing conflict, and persuading stakeholders.

<strong>2. Why EQ Outweighs Pure IQ in Modern Engineering:</strong>
• Complex software and hardware systems are built by multidisciplinary teams, not lone geniuses.
• Engineers with high EQ communicate technical trade-offs constructively, embrace mentorship, and prevent catastrophic team friction.""",
        "Name Daniel Goleman and list all 5 dimensions clearly.")

    add("eng", 2, "⚡ Exception / Trap", "Adaptability & Resilience",
        "Describe how an engineer can demonstrate cognitive adaptability and professional resilience when handling sudden technological pivots or project cancellations.",
        "Cognitive adaptability: unlearning obsolete tools, embracing growth mindset, emotional decoupling from depreciated code, agile sprint reprioritization.",
        """<strong>1. The Need for Adaptability in Engineering:</strong>
Technology stacks evolve rapidly (e.g. legacy microcontrollers shifting to RISC-V, on-prem servers shifting to cloud serverless). Rigid engineers become obsolete; adaptable engineers thrive.

<strong>2. Concrete Engineering Strategies:</strong>
1. <strong>Embrace a Growth Mindset (Carol Dweck):</strong>
   Viewing technical failures or bugs not as personal inadequacy, but as informative data points for iterative improvement.
2. <strong>Decouple Identity from Past Code:</strong>
   Accepting when a feature or repository you built over three months is deprecated in favor of a superior architectural solution.
3. <strong>Proactive Continuous Upskilling:</strong>
   Allocating 2–3 hours weekly to experiment with emerging toolchains, reading open-source documentation, and participating in hackathons.
4. <strong>Agile Sprint Re-prioritization:</strong>
   When client specifications change abruptly, breaking new deliverables into small, testable minimum viable products (MVPs).""",
        "Mention Carol Dweck's 'Growth Mindset' vs 'Fixed Mindset' concept.")

    add("eng", 3, "📐 Derivation / Formula", "SCAMPER Product Design",
        "Explain the SCAMPER creative brainstorming framework. Apply all seven letters to redesign and innovate a standard manual bicycle into a smart electric urban commuter.",
        "S: Substitute, C: Combine, A: Adapt, M: Modify/Magnify, P: Put to another use, E: Eliminate, R: Reverse/Rearrange.",
        """<strong>1. The SCAMPER Creative Framework:</strong>
Developed by Bob Eberle, SCAMPER is an idea-generation checklist:
• <strong>S — Substitute:</strong> Replace steel chain drive with a grease-free carbon belt drive.
• <strong>C — Combine:</strong> Integrate bright LED headlights, turn signals, and GPS anti-theft tracking directly into the frame tubing.
• <strong>A — Adapt:</strong> Adapt regenerative braking from electric cars to recharge the battery during downhill descents.
• <strong>M — Modify / Magnify:</strong> Enlarge digital handlebar display to show live battery range, tire pressure, and turn-by-turn navigation.
• <strong>P — Put to Another Use:</strong> Use the internal high-capacity battery pack as an emergency power bank to fast-charge laptops and smartphones via USB-C ports.
• <strong>E — Eliminate:</strong> Eliminate bulky external gear derailleurs in favor of an enclosed automatic electronic hub transmission.
• <strong>R — Reverse / Rearrange:</strong> Rearrange battery pack to sit low inside the bottom bracket frame tube to lower center of gravity and improve stability.""",
        "Provide a concrete, realistic engineering redesign for all 7 letters of SCAMPER.")

    add("eng", 3, "📐 Derivation / Formula", "Mind Mapping",
        "Explain the core principles and psychological advantages of Mind Mapping for organizing complex engineering design specifications.",
        "Tony Buzan's principles: Central image/theme, radial tree branches, single keywords, color coding, visual icons. Matches associative brain structure.",
        """<strong>1. Principles of Mind Mapping (Tony Buzan):</strong>
• <strong>Central Core Image:</strong> Place the primary theme or system name (e.g., "Autonomous Robot Architecture") in the center of a blank page.
• <strong>Radial Hierarchical Branches:</strong> Major sub-systems radiate outward as thick primary branches (Power, Sensation, Processing, Actuation).
• <strong>Secondary & Tertiary Branches:</strong> Sub-branches represent granular components (LiPo battery, ultrasonic sensors, STM32 MCU, motor drivers).
• <strong>Keywords over Sentences:</strong> Use single expressive keywords and standard engineering abbreviations rather than long paragraphs.
• <strong>Color Coding & Visual Icons:</strong> Differentiate functional domains with distinct colors and schematic symbols.

<strong>2. Cognitive Advantages for Engineers:</strong>
• Mimics the brain's associative, non-linear neural synapse network.
• Provides high-level system overview while preserving deep technical details on a single visual canvas.""",
        "Mention Tony Buzan as the pioneer of the modern Mind Mapping technique.")

    add("eng", 4, "📐 Derivation / Formula", "Async vs Sync Comm",
        "Construct an engineering comparison matrix between Synchronous and Asynchronous communication channels. Provide guidelines on when engineers should use each.",
        "Synchronous (live calls, in-person): rapid alignment, urgent crisis. Asynchronous (email, PR reviews, Jira): deep work, timezone flexibility, permanent record.",
        """<strong>Engineering Comparison Matrix:</strong>
<div class="overflow-x-auto my-2">
<table class="w-full text-xs text-left border border-slate-300">
<thead class="bg-slate-100"><tr><th class="p-1 border">Parameter</th><th class="p-1 border">Synchronous Communication</th><th class="p-1 border">Asynchronous Communication</th></tr></thead>
<tbody>
<tr><td class="p-1 border font-semibold">Channels & Tools</td><td class="p-1 border">Zoom, Google Meet, phone calls, in-person standups</td><td class="p-1 border">GitHub Pull Requests, Jira tickets, Slack threads, Email</td></tr>
<tr><td class="p-1 border font-semibold">Response Expectation</td><td class="p-1 border">Immediate / Real-time ($< 1\\text{ minute}$)</td><td class="p-1 border">Delayed / Flexible ($2 - 24\\text{ hours}$)</td></tr>
<tr><td class="p-1 border font-semibold">Impact on Deep Work</td><td class="p-1 border">High interruption rate, fragments focus blocks</td><td class="p-1 border">Zero interruption, protects deep programming flow</td></tr>
<tr><td class="p-1 border font-semibold">Documentation Record</td><td class="p-1 border">Ephemeral (often lost unless recorded & transcribed)</td><td class="p-1 border">Searchable, permanent, documented decision trails</td></tr>
<tr><td class="p-1 border font-semibold">Best Used For</td><td class="p-1 border">High-severity production outages, sensitive 1-on-1s</td><td class="p-1 border">Code reviews, RFC architectural specs, daily status updates</td></tr>
</tbody>
</table>
</div>""",
        "Present the comparison as a clean matrix covering tools, response time, deep work impact, and best use cases.")

    add("eng", 4, "⚡ Exception / Trap", "Cross-Cultural Comm",
        "Explain the differences between High-Context and Low-Context communication cultures in global engineering teams. How can miscommunication be avoided?",
        "Low-context (USA, Germany): explicit, direct, literal words. High-context (Japan, India): implicit, non-verbal cues, relationship-oriented.",
        """<strong>1. High-Context vs. Low-Context (Edward T. Hall):</strong>
• <strong>Low-Context Communication (e.g., Germany, USA, Netherlands):</strong>
  - Communication is direct, explicit, and precise. Meaning is carried almost 100% in the literal spoken or written words.
  - "Yes" means complete agreement; "No" is stated bluntly without offense.
• <strong>High-Context Communication (e.g., Japan, India, Middle East):</strong>
  - Communication is subtle, implicit, and relationship-centric. Non-verbal cues, status, hierarchy, and context carry significant meaning.
  - Disagreement is phrased diplomatically ("That may be difficult") to preserve team harmony and avoid loss of face.

<strong>2. Guidelines for Global Engineering Teams:</strong>
1. <strong>Document Architectural Decisions in Writing:</strong> Follow up verbal discussions with written Action Item summaries.
2. <strong>Adopt Literal Precision in Technical Specs:</strong> Avoid idioms or colloquial sarcasm in code review comments.""",
        "Attribute the High-Context vs Low-Context concept to cultural anthropologist Edward T. Hall.")

    add("eng", 5, "📐 Derivation / Formula", "ATS Technical Resume",
        "Explain the principles of drafting an ATS (Applicant Tracking System) friendly technical resume for engineering campus recruitment drives.",
        "ATS rules: Clean single-column layout, standard headers (Skills, Education, Projects), searchable keywords, quantifiable bullet points (XYZ formula).",
        """<strong>1. What is an ATS (Applicant Tracking System)?:</strong>
Automated software used by engineering recruiters to parse, filter, and score candidate resumes against job description keywords before a human recruiter reads them.

<strong>2. ATS Optimization Rules for Engineers:</strong>
1. <strong>Clean Single-Column Formatting:</strong> Avoid multi-column tables, graphics, text boxes, and icons that confuse parsing algorithms. Use clean PDF/Word documents.
2. <strong>Keyword Matching:</strong> Include exact technical keywords from the job description (e.g., "Embedded C", "ARM Cortex", "Git", "I2C", "Oscilloscope").
3. <strong>Google's 'XYZ Formula' for Project Bullets:</strong>
   Format achievements as: <em>"Accomplished [X], as measured by [Y], by doing [Z]."</em>
   - <em>Weak:</em> "Worked on an IoT weather station."
   - <em>Strong (XYZ):</em> "Designed an IoT weather monitoring station that reduced telemetry transmission latency by 35% through custom UDP socket compression in embedded C."
4. <strong>Standard Heading Names:</strong> Use standard labels: \`Technical Skills\`, \`Education\`, \`Engineering Projects\`, \`Certifications\`. Avoid obscure titles like \`My Journey\`.
5. <strong>Reverse-Chronological Ordering:</strong> List current degree and most recent internships first.""",
        "Quote Google's XYZ formula: 'Accomplished [X], as measured by [Y], by doing [Z]'.")

    return cards

print("generate_more_practice module defined.")
