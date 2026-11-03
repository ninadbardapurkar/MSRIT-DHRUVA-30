# scripts/create_new_subjects_content.py
import json

def get_cards_for_new_subjects():
    cards = []
    c_id = 301

    def add(subjectId, unit, pyqTag, badgeType, badgeLabel, question, hint, answer, examTip):
        nonlocal c_id
        cards.append({
            "id": f"card-new-{c_id}",
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
    # 1. QUANTUM PHYSICS AND APPLICATIONS (25PYC12) - 16 CARDS
    # =========================================================================
    add("phys", 1, "🔥 Asked in SEE Feb 2026, CIE-1 • 8 Marks", "📐 Derivation / Formula", "Einstein Relations",
        "Obtain an expression for the energy density of radiation under thermal equilibrium conditions in terms of Einstein's coefficients. Compare it with Planck's radiation law.",
        "Consider two energy states E1 and E2. Thermal equilibrium: Rate of absorption B12*N1*rho = Rate of emission (A21*N2 + B21*N2*rho). Use Boltzmann ratio N1/N2 = e^(h nu / kT).",
        """<strong>1. Principle of Detailed Balancing:</strong>
Consider an atomic system in thermal equilibrium inside a cavity at temperature $T$ with two energy levels $E_1$ and $E_2$ ($E_2 - E_1 = h\\nu$).
• Rate of stimulated absorption: $R_{\\text{abs}} = B_{12} N_1 \\rho(\\nu)$
• Rate of spontaneous emission: $R_{\\text{spont}} = A_{21} N_2$
• Rate of stimulated emission: $R_{\\text{stim}} = B_{21} N_2 \\rho(\\nu)$

<strong>2. Derivation:</strong>
At thermal equilibrium: $\\text{Total Rate of Absorption} = \\text{Total Rate of Emission}$
$$B_{12} N_1 \\rho(\\nu) = A_{21} N_2 + B_{21} N_2 \\rho(\\nu)$$
$$\\rho(\\nu) [B_{12} N_1 - B_{21} N_2] = A_{21} N_2$$
$$\\rho(\\nu) = \\frac{A_{21} N_2}{B_{12} N_1 - B_{21} N_2} = \\frac{A_{21} / B_{21}}{\\frac{B_{12}}{B_{21}}\\left(\\frac{N_1}{N_2}\\right) - 1}$$
• According to Boltzmann's distribution law:
  $$\\frac{N_1}{N_2} = e^{(E_2 - E_1)/kT} = e^{h\\nu / kT}$$
• Since probabilities of upward and downward stimulated transitions are symmetric ($B_{12} = B_{21}$):
  $$\\rho(\\nu) = \\frac{A_{21} / B_{21}}{e^{h\\nu / kT} - 1}$$

<strong>3. Comparison with Planck's Law:</strong>
Planck's radiation law gives: $\\rho(\\nu) = \\frac{8\\pi h\\nu^3}{c^3} \\frac{1}{e^{h\\nu / kT} - 1}$.
Comparing yields the fundamental Einstein ratios:
$$\\mathbf{B_{12} = B_{21}} \\quad \\text{and} \\quad \\mathbf{\\frac{A_{21}}{B_{21}} = \\frac{8\\pi h\\nu^3}{c^3}}$$""",
        "Always state B12 = B21 (stimulated absorption equals stimulated emission probability) and A21/B21 is proportional to nu^3.")

    add("phys", 1, "🔥 Asked in SEE Feb 2026, CIE-1 • 8 Marks", "🧪 Reaction / Mechanism", "He-Ne Laser",
        "Describe the construction and working of a Helium-Neon (He-Ne) gas laser with an energy level diagram. Why is a mixture of Helium and Neon used?",
        "Gas ratio 10:1 (He:Ne). He atoms excited by electron collision to metastable 20.61 eV & 20.66 eV, transfer energy resonantly to Ne 20.66 eV level (3s), emitting 632.8 nm red light.",
        """<strong>1. Construction of He-Ne Laser:</strong>
• <strong>Active Medium:</strong> A quartz discharge tube filled with a mixture of Helium ($He$) and Neon ($Ne$) gases in a <strong>$10:1$ ratio</strong> at low pressure ($\sim 1\\text{ torr}$).
• <strong>Pumping Source:</strong> High-voltage DC electric discharge ($\sim 1 - 2\\text{ kV}$) between cathode and anode.
• <strong>Optical Resonator:</strong> Two parallel dielectric mirrors: one 100% reflective, and one partially reflective ($99\%$) output coupler.

<strong>2. Working & Energy Level Mechanism:</strong>
1. <strong>Electron Impact Excitation of Helium:</strong>
   Electric discharge accelerates electrons, which collide with ground-state Helium atoms, exciting them to long-lived metastable levels $2^1S$ ($20.61\\text{ eV}$) and $2^3S$ ($19.82\\text{ eV}$).
2. <strong>Resonant Energy Collision Transfer:</strong>
   Neon atoms have energy levels $3s$ ($20.66\\text{ eV}$) and $2s$ ($19.78\\text{ eV}$) that match Helium's metastable levels. Inelastic atom-atom collisions transfer energy resonantly:
   $$He^* + Ne \\rightarrow He + Ne^*(3s)$$
   producing <strong>population inversion</strong> between $3s$ and $2p$ levels of Neon!
3. <strong>Lasing Transition:</strong>
   Stimulated emission occurs as Neon drops from $3s \\rightarrow 2p$, emitting monochromatic red coherent laser light at <strong>$\\lambda = 632.8\\text{ nm}$</strong>.
4. Neon drops quickly from $2p \\rightarrow 1s$, and de-excites to the ground state via wall collisions.""",
        "Highlight that Helium does NOT lase; Helium acts solely as an energy transfer pump to populate Neon levels!")

    add("phys", 1, "🔥 Asked in SEE Feb 2026 • 7 Marks", "📐 Derivation / Formula", "Fiber Optics NA",
        "Define the Acceptance Angle and Numerical Aperture of an optical fiber. Derive an expression for the Numerical Aperture in terms of the refractive indices of core (n1) and cladding (n2).",
        "Acceptance angle theta_a is maximum angle for total internal reflection. Apply Snell's law at entrance face and critical angle condition at core-cladding boundary: sin theta_c = n2/n1.",
        """<strong>1. Definitions:</strong>
• <strong>Acceptance Angle ($\\theta_a$):</strong> The maximum angle of incidence at the fiber entrance face at which light can enter and propagate along the core by total internal reflection.
• <strong>Numerical Aperture ($NA$):</strong> The light gathering capacity of an optical fiber, defined as $NA = \\sin\\theta_a$.

<strong>2. Step-by-Step Derivation:</strong>
• Let the outside medium (air) have refractive index $n_0 = 1$, the core have index $n_1$, and cladding index $n_2$ ($n_1 > n_2$).
• By Snell's law at the air-core entrance interface:
  $$n_0 \\sin\\theta_0 = n_1 \\sin r_1 \\implies \\sin\\theta_0 = n_1 \\sin r_1 \\quad (\\text{for } n_0 = 1)$$
• In the right triangle inside the core, the angle of incidence at the core-cladding boundary is $\\phi = 90^\\circ - r_1$.
• For Total Internal Reflection (TIR) to occur, $\\phi \\ge \\phi_c$, where $\\sin\\phi_c = \\frac{n_2}{n_1}$:
  $$\\cos r_1 = \\sin(90^\\circ - r_1) = \\sin\\phi_c = \\frac{n_2}{n_1}$$
• Using the trigonometric identity $\\sin r_1 = \\sqrt{1 - \\cos^2 r_1}$:
  $$\\sin r_1 = \\sqrt{1 - \\left(\\frac{n_2}{n_1}\\right)^2} = \\frac{\\sqrt{n_1^2 - n_2^2}}{n_1}$$
• Substituting into Snell's law:
  $$\\sin\\theta_a = n_1 \\left( \\frac{\\sqrt{n_1^2 - n_2^2}}{n_1} \\right) = \\sqrt{n_1^2 - n_2^2}$$
• <strong>Final Expressions:</strong>
  $$\\mathbf{NA = \\sqrt{n_1^2 - n_2^2} = n_1\\sqrt{2\\Delta}}$$
  $$\\mathbf{\\theta_a = \\sin^{-1}\\left(\\sqrt{n_1^2 - n_2^2}\\right)}$$""",
        "Express NA both in terms of n1, n2 and fractional index difference Delta: NA = n1 * sqrt(2*Delta).")

    add("phys", 2, "🔥 Asked in SEE Feb 2026 • 8 Marks", "📐 Derivation / Formula", "Schrodinger Equation",
        "Starting from the classical wave equation, arrive at the expression for the Time-Independent One-Dimensional Schrödinger Wave Equation.",
        "Classical wave: psi = psi_0 e^(-i omega t). Total energy E = p²/(2m) + V => p² = 2m(E - V). Substitute de Broglie wavelength lambda = h/p.",
        """<strong>1. Classical Wave Equation:</strong>
A stationary wave associated with a de Broglie particle moving along the $x$-axis is represented by:
$$\\psi(x, t) = \\psi_0(x) e^{-i \\omega t}$$
• Differentiating twice with respect to $x$:
  $$\\frac{\\partial^2 \\psi}{\\partial x^2} = -k^2 \\psi = -\\left(\\frac{2\\pi}{\\lambda}\\right)^2 \\psi = -\\frac{4\\pi^2}{\\lambda^2} \\psi$$

<strong>2. Incorporating de Broglie Relation:</strong>
• According to de Broglie: $\\lambda = \\frac{h}{p} \\implies \\frac{1}{\\lambda^2} = \\frac{p^2}{h^2}$.
• Substituting into the wave derivative:
  $$\\frac{\\partial^2 \\psi}{\\partial x^2} = -\\frac{4\\pi^2 p^2}{h^2} \\psi = -\\frac{p^2}{\\hbar^2} \\psi \\quad \\left(\\text{since } \\hbar = \\frac{h}{2\\pi}\\right)$$

<strong>3. Energy Conservation Relation:</strong>
• Total mechanical energy $E = \\text{Kinetic Energy} + \\text{Potential Energy} = \\frac{p^2}{2m} + V(x)$.
• Therefore: $p^2 = 2m(E - V)$.

<strong>4. Substituting into Differential Equation:</strong>
$$\\frac{\\partial^2 \\psi}{\\partial x^2} = -\\frac{2m(E - V)}{\\hbar^2} \\psi$$
• Rearranging yields the standard <strong>Time-Independent 1D Schrödinger Equation</strong>:
  $$\\mathbf{\\frac{d^2 \\psi}{d x^2} + \\frac{2m}{\\hbar^2} \\left(E - V(x)\\right) \\psi = 0}$$""",
        "State h-bar = h/(2*pi) and write out the kinetic plus potential energy decomposition clearly.")

    add("phys", 2, "🔥 Asked in SEE Feb 2026, CIE-1 • 8 Marks", "📐 Derivation / Formula", "Particle in a Box",
        "Obtain the energy eigenvalues and normalized eigenfunctions for a particle of mass m confined in an infinite one-dimensional potential well of width a.",
        "Boundary conditions: psi(0) = 0 and psi(a) = 0. Leads to k = n*pi/a. E_n = n²h²/(8ma²). Normalization gives A = sqrt(2/a).",
        """<strong>1. Potential Well Definition:</strong>
$V(x) = 0$ for $0 \\le x \\le a$, and $V(x) = \\infty$ for $x < 0$ and $x > a$.
Inside the well ($V=0$), the Schrödinger equation is:
$$\\frac{d^2 \\psi}{dx^2} + k^2 \\psi = 0, \\quad \\text{where } k^2 = \\frac{2mE}{\\hbar^2}$$
General solution: $\\psi(x) = A \\sin(kx) + B \\cos(kx)$.

<strong>2. Applying Boundary Conditions:</strong>
• At $x = 0$: $\\psi(0) = 0 \\implies A(0) + B(1) = 0 \\implies B = 0$.
  So $\\psi(x) = A \\sin(kx)$.
• At $x = a$: $\\psi(a) = 0 \\implies A \\sin(ka) = 0$.
  Since $A \\ne 0$, $\\sin(ka) = 0 \\implies ka = n\\pi \\implies k = \\frac{n\\pi}{a}$ (where $n = 1, 2, 3, \\dots$).

<strong>3. Energy Eigenvalues ($E_n$):</strong>
$$k^2 = \\frac{n^2\\pi^2}{a^2} = \\frac{2mE}{\\hbar^2} \\implies E_n = \\frac{n^2\\pi^2\\hbar^2}{2ma^2} = \\frac{n^2\\pi^2 (h/2\\pi)^2}{2ma^2}$$
$$\\mathbf{E_n = \\frac{n^2 h^2}{8 m a^2}} \\quad (n = 1, 2, 3, \\dots)$$

<strong>4. Normalization to find Amplitude $A$:</strong>
$$\\int_0^a |\\psi(x)|^2 dx = 1 \\implies A^2 \\int_0^a \\sin^2\\left(\\frac{n\\pi x}{a}\\right) dx = A^2 \\left(\\frac{a}{2}\\right) = 1 \\implies A = \\sqrt{\\frac{2}{a}}$$
• <strong>Normalized Eigenfunctions:</strong>
  $$\\mathbf{\\psi_n(x) = \\sqrt{\\frac{2}{a}} \\sin\\left(\\frac{n\\pi x}{a}\\right)}$$""",
        "Highlight that n = 0 is not permitted because psi = 0 everywhere, meaning the particle does not exist.")

    add("phys", 2, "🔥 Asked in SEE Feb 2026, CIE-1 • 7 Marks", "⚡ Exception / Trap", "Heisenberg Nucleus Proof",
        "State Heisenberg's Uncertainty Principle. Using this principle, prove that an electron cannot reside inside an atomic nucleus.",
        "Nuclear diameter delta x ~ 10^-14 m. Uncertainty in momentum delta p >= hbar/(2 delta x). Calculate relativistic energy: E >= 20.4 MeV, but beta particles have only 2-4 MeV.",
        """<strong>1. Statement of Heisenberg's Uncertainty Principle:</strong>
It is physically impossible to simultaneously determine with arbitrary precision both the exact position ($x$) and momentum ($p$) of a quantum particle:
$$\\Delta x \\cdot \\Delta p \\ge \\frac{\\hbar}{2}$$

<strong>2. Mathematical Proof for Non-Existence of Electrons in the Nucleus:</strong>
• The diameter of an atomic nucleus is typically of the order of $10^{-14}\\text{ m}$.
• If an electron exists inside the nucleus, the maximum uncertainty in its position is:
  $$\\Delta x \\approx 10^{-14}\\text{ m}$$
• Minimum uncertainty in electron momentum:
  $$\\Delta p \\ge \\frac{\\hbar}{2 \\Delta x} = \\frac{1.054 \\times 10^{-34}}{2 \\times 10^{-14}} \\approx 5.27 \\times 10^{-21}\\text{ kg}\\cdot\\text{m/s}$$
• Therefore, the momentum of the electron must be at least $p \\approx 5.27 \\times 10^{-21}\\text{ kg}\\cdot\\text{m/s}$.
• For such a high momentum, relativistic energy applies ($E \\approx p c$):
  $$E \\approx (5.27 \\times 10^{-21}\\text{ kg}\\cdot\\text{m/s}) \\times (3 \\times 10^8\\text{ m/s}) = 1.58 \\times 10^{-12}\\text{ Joules}$$
• Converting to electron-volts:
  $$E = \\frac{1.58 \\times 10^{-12}}{1.6 \\times 10^{-19}} \\approx \\mathbf{9.88 \\times 10^6\\text{ eV} \\approx 10 - 20\\text{ MeV}}$$

<strong>3. Conclusion:</strong>
If electrons existed inside the nucleus, beta-decay electrons emitted from nuclei would possess kinetic energies $> 20\\text{ MeV}$. However, experimental measurements in radioactive laboratories show beta particle energies are only <strong>$2 - 4\\text{ MeV}$</strong>. Hence, electrons CANNOT reside inside the nucleus!""",
        "State the observed beta particle energy (~2-4 MeV) and compare it against the calculated minimum (~10-20 MeV).")

    add("phys", 3, "🔥 Asked in SEE Feb 2026, CIE-2 • 8 Marks", "📐 Derivation / Formula", "Density of States",
        "Define density of states in a metal. Derive the mathematical expression for the density of energy states g(E)dE in a three-dimensional electron gas.",
        "Number of quantum states inside spherical octant of radius n: N = (1/8) * (4/3 pi n^3) * 2 (for spin). Substitute n in terms of energy E.",
        """<strong>1. Definition:</strong>
Density of states $g(E)dE$ is defined as the number of available quantum electron states per unit volume in the energy interval between $E$ and $E + dE$.

<strong>2. Step-by-Step Derivation:</strong>
• For a 3D potential box of volume $V = L^3$:
  $$E = \\frac{h^2}{8m L^2}(n_x^2 + n_y^2 + n_z^2) = \\frac{h^2 n^2}{8m V^{2/3}} \\implies n^2 = \\frac{8m V^{2/3} E}{h^2}$$
• The number of quantum states with quantum numbers up to $n$ in the positive octant ($n_x, n_y, n_z > 0$):
  $$N = \\frac{1}{8} \\times \\left(\\frac{4}{3} \\pi n^3\\right) \\times 2 \\quad (\\text{multiplying by 2 for electron spin})$$
  $$N = \\frac{\\pi}{3} n^3 = \\frac{\\pi}{3} \\left( \\frac{8m V^{2/3} E}{h^2} \\right)^{3/2} = \\frac{\\pi}{3} \\frac{(8m)^{3/2} V}{h^3} E^{3/2}$$
• Differentiating with respect to $E$:
  $$\\frac{dN}{dE} = \\frac{\\pi}{3} \\frac{(8m)^{3/2} V}{h^3} \\left(\\frac{3}{2} E^{1/2}\\right) = \\frac{8\\sqrt{2}\\pi m^{3/2} V}{h^3} E^{1/2}$$
• Per unit volume ($g(E) = \\frac{1}{V}\\frac{dN}{dE}$):
  $$\\mathbf{g(E) dE = \\frac{8\\sqrt{2}\\pi m^{3/2}}{h^3} E^{1/2} dE = \\frac{4\\pi (2m)^{3/2}}{h^3} E^{1/2} dE}$$""",
        "Do not forget to multiply by 2 for the two allowed electron spin orientations (Pauli exclusion principle).")

    add("phys", 3, "🔥 Asked in SEE Feb 2026, CIE-2 • 8 Marks", "📐 Derivation / Formula", "Hall Effect",
        "Explain the Hall effect in an n-type semiconductor with a neat schematic diagram. Derive expressions for the Hall Voltage (VH) and Hall Coefficient (RH). Mention two applications.",
        "When current I flows along x-axis and magnetic field B is applied along z-axis, Lorentz force deflects electrons to bottom face, creating transverse electric field Ey.",
        """<strong>1. Principle of Hall Effect:</strong>
When a current-carrying semiconductor is placed in a transverse magnetic field, a potential difference (Hall Voltage, $V_H$) is developed across its opposite lateral faces in a direction perpendicular to both the electric current and the magnetic field.

<strong>2. Derivation:</strong>
• Let current $I$ flow along $+x$-direction, and magnetic field $B$ be applied along $+z$-direction.
• Conduction electrons (charge $-e$, velocity $v_d$) experience downward Lorentz force along $-y$:
  $$F_B = -e (v_d \\times B) = e v_d B$$
• Electrons accumulate on the bottom surface, leaving positive donor ions on the top surface, establishing a transverse Hall electric field $E_H$ along $-y$.
• At equilibrium: $\\text{Electrostatic Force } F_E = \\text{Magnetic Force } F_B$:
  $$e E_H = e v_d B \\implies E_H = v_d B$$
• Hall voltage across width $w$: $V_H = E_H \\cdot w = v_d B w$.
• Current density: $J = n e v_d = \\frac{I}{w \\cdot t} \\implies v_d = \\frac{I}{n e w t}$ (where $t$ is thickness).
• Substituting $v_d$:
  $$V_H = \\left(\\frac{I}{n e w t}\\right) B w = \\mathbf{\\frac{B I}{n e t}}$$
• <strong>Hall Coefficient ($R_H$):</strong>
  $$R_H = \\frac{E_H}{J \\cdot B} = -\\mathbf{\\frac{1}{n e}} \\quad (\\text{for n-type, negative})$$

<strong>3. Applications:</strong>
1. Determines whether a semiconductor is n-type ($R_H < 0$) or p-type ($R_H > 0$).
2. Measures charge carrier concentration: $n = -\\frac{1}{e R_H}$ and Hall mobility $\\mu_H = |R_H| \\sigma$.
3. Used in contactless Hall-effect current sensors and magnetic field probes.""",
        "Specify the sign of Hall coefficient: RH is NEGATIVE for n-type and POSITIVE for p-type semiconductors.")

    add("phys", 4, "🔥 Asked in SEE Feb 2026, CIE-2 • 8 Marks", "🧪 Reaction / Mechanism", "BCS Theory",
        "Explain the BCS theory of superconductivity. What are Cooper pairs, and what are the main limitations of BCS theory?",
        "BCS = Bardeen, Cooper, Schrieffer. Electron-phonon-electron interaction causes attractive pairing of electrons with opposite momentum and spin (Cooper pairs).",
        """<strong>1. BCS Theory Mechanism:</strong>
Proposed by John Bardeen, Leon Cooper, and John Robert Schrieffer (1957), BCS theory explains low-temperature superconductivity via an <strong>electron-phonon-electron interaction</strong>:
1. As an electron moves through a positive cation lattice, its negative charge attracts surrounding positive lattice ions, creating a localized high-density positive polarization ripple (lattice distortion / virtual phonon).
2. Before the lattice relaxes, a second electron with opposite spin and momentum is attracted to this positive deformation.
3. This creates a net attractive force between the two electrons mediated by the lattice vibration (phonon).

<strong>2. Cooper Pairs:</strong>
• The coupled electron pair is termed a <strong>Cooper Pair</strong>: $(k\\uparrow, -k\\downarrow)$.
• Cooper pairs behave as composite bosons with integer spin (0), condensing into a macroscopic coherent ground state protected by an energy gap $E_g = 3.52 k_B T_c$ at $0\\text{ K}$.
• Because scattering requires breaking this pairing gap, electrons flow with <strong>absolute zero electrical resistance</strong>!

<strong>3. Limitations of BCS Theory:</strong>
1. <strong>Fails for High-Temperature Superconductors (HTS):</strong> Cannot explain cuprate ceramics ($YBa_2Cu_3O_{7-x}$) with $T_c > 90\\text{ K}$ (above the theoretical BCS limit $\\sim 30 - 40\\text{ K}$).
2. <strong>Requires Weak Electron-Phonon Coupling:</strong> Inaccurate for heavy-fermion systems and iron-based pnictide superconductors.""",
        "State the BCS energy gap formula at 0 K: Eg(0) = 3.52 * k_B * Tc.")

    add("phys", 4, "🔥 Asked in SEE Feb 2026 • 8 Marks", "📐 Derivation / Formula", "Silsbee Effect",
        "What is Silsbee's effect? Derive an expression for the critical current in a cylindrical superconducting wire of radius r using Ampere's circuital law.",
        "Silsbee's effect: Superconductivity is destroyed when the magnetic field produced by the transport current itself exceeds Hc. Ic = 2 * pi * r * Hc.",
        """<strong>1. Silsbee's Effect Statement:</strong>
Silsbee's hypothesis states that superconductivity in a wire is destroyed whenever the magnetic field generated by the transport current passing through the wire itself exceeds the critical magnetic field $H_c(T)$ of the material at that temperature.

<strong>2. Derivation of Critical Current ($I_c$):</strong>
• Consider a cylindrical superconducting wire of radius $r$ carrying an electric transport current $I$.
• By symmetry, the magnetic field is circular and concentric with the wire axis.
• According to <strong>Ampère's Circuital Law</strong>, the line integral of magnetic field $H$ around a closed circular path of radius $r$ on the wire surface is:
  $$\\oint \\vec{H} \\cdot d\\vec{l} = I_{\\text{enclosed}}$$
  $$H \\cdot (2\\pi r) = I \\implies H = \\frac{I}{2\\pi r}$$
• The maximum magnetic field occurs at the outer surface ($r$). When this surface field reaches the critical field value $H_c$:
  $$H_c = \\frac{I_c}{2\\pi r}$$
• <strong>Final Critical Current Formula:</strong>
  $$\\mathbf{I_c = 2\\pi r H_c}$$

<strong>3. Temperature Dependence:</strong>
Substituting $H_c(T) = H_c(0) \\left[ 1 - \\left(\\frac{T}{T_c}\\right)^2 \\right]$:
$$I_c(T) = 2\\pi r H_c(0) \\left[ 1 - \\left(\\frac{T}{T_c}\\right)^2 \\right]$$""",
        "Surface field H is highest at the outer boundary radius r, which is why destruction starts at the surface.")

    add("phys", 4, "🔥 Asked in SEE Feb 2026, CIE-2 • 7 Marks", "🧪 Reaction / Mechanism", "DC SQUID",
        "What is the Josephson Effect? Explain the construction and working of a DC SQUID (Superconducting Quantum Interference Device).",
        "Josephson junction = Superconductor-Insulator-Superconductor (SIS). DC SQUID has two junctions in a superconducting loop, detecting magnetic flux quanta Phi_0 = h/(2e).",
        """<strong>1. Josephson Effects:</strong>
• <strong>DC Josephson Effect:</strong> Cooper pairs tunnel across a thin insulating barrier ($1 - 2\\text{ nm}$) between two superconductors without any applied voltage, producing a zero-resistance supercurrent $I = I_c \\sin\\phi$.
• <strong>AC Josephson Effect:</strong> Applying a DC voltage $V$ causes the phase to evolve linearly, generating a high-frequency AC oscillation: $\\nu = \\frac{2eV}{h} \\approx 483.6\\text{ MHz/}\\mu\\text{V}$.

<strong>2. Construction of DC SQUID:</strong>
• A DC SQUID consists of a superconducting ring containing <strong>two Josephson junctions ($J_1, J_2$)</strong> connected in parallel.
• A constant bias current $I_{\\text{bias}} > 2I_c$ is fed into the ring.

<strong>3. Working & Quantum Interference:</strong>
• When an external magnetic field threads through the superconducting loop, it induces a circulating screening current.
• The macroscopic quantum phase difference shifts around the loop, causing quantum interference between the two tunneling paths.
• The total critical current oscillates periodically as a function of external magnetic flux $\\Phi$ with period equal to the magnetic flux quantum:
  $$\\mathbf{\\Phi_0 = \\frac{h}{2e} \\approx 2.0678 \\times 10^{-15}\\text{ Wb (Tesla}\\cdot\\text{m}^2\\text{)}}$$
• By counting voltage oscillations, a SQUID detects magnetic fields as weak as $10^{-15}\\text{ Tesla}$ ($1\\text{ fT}$), used in magnetoencephalography (MEG brain imaging) and gravitational wave detectors.""",
        "State the exact value of the magnetic flux quantum: Phi_0 = h/(2e) = 2.07 x 10^-15 Wb.")

    add("phys", 5, "🔥 Asked in SEE Feb 2026 • 8 Marks", "📐 Derivation / Formula", "Qubit & Bloch Sphere",
        "What is a qubit? Explain how the Bloch Sphere is used for the geometric representation of quantum states. Give the normalization condition.",
        "Classical bit is 0 or 1; Qubit is |psi> = cos(theta/2)|0> + e^(i phi) sin(theta/2)|1>. Normalized: |alpha|^2 + |beta|^2 = 1. Angles theta in [0, pi], phi in [0, 2pi].",
        """<strong>1. Definition of a Qubit:</strong>
A quantum bit (qubit) is the fundamental unit of quantum information. Unlike a classical bit which is strictly 0 or 1, a qubit exists in a coherent linear superposition of both basis states $|0\\rangle$ and $|1\\rangle$:
$$|\\psi\\rangle = \\alpha |0\\rangle + \\beta |1\\rangle \\quad (\\alpha, \\beta \\in \\mathbb{C})$$
• <strong>Normalization Condition:</strong> The total measurement probability must equal unity:
  $$\\mathbf{|\\alpha|^2 + |\\beta|^2 = 1}$$
  where $|\\alpha|^2$ is the probability of measuring state $|0\\rangle$, and $|\\beta|^2$ is the probability of measuring state $|1\\rangle$.

<strong>2. The Bloch Sphere Geometric Representation:</strong>
• Any normalized single-qubit state can be parameterized on a 3D unit sphere (Bloch Sphere) as:
  $$\\mathbf{|\\psi\\rangle = \\cos\\left(\\frac{\\theta}{2}\\right) |0\\rangle + e^{i \\phi} \\sin\\left(\\frac{\\theta}{2}\\right) |1\\rangle}$$
  where:
  - $\\theta \\in [0, \\pi]$ is the polar angle (colatitude).
  - $\\phi \\in [0, 2\\pi)$ is the azimuthal phase angle.
• <strong>Key Bloch Points:</strong>
  - North Pole ($\\theta = 0$): Basis state $|0\\rangle$.
  - South Pole ($\\theta = \\pi$): Basis state $|1\\rangle$.
  - Equator ($\\theta = \\pi/2, \\phi = 0$): Equal superposition $|+\\rangle = \\frac{|0\\rangle + |1\\rangle}{\\sqrt{2}}$.
  - Equator ($\\theta = \\pi/2, \\phi = \\pi$): Equal superposition $|-\\rangle = \\frac{|0\\rangle - |1\\rangle}{\\sqrt{2}}$.""",
        "Bloch Sphere parameters: theta/2 for latitude and e^(i*phi) for relative quantum phase.")

    add("phys", 5, "🔥 Asked in SEE Feb 2026 • 7 Marks", "📐 Derivation / Formula", "Quantum Logic Gates",
        "Describe the actions and matrix representations of the Pauli-X, Pauli-Y, Phase-S, and Hadamard (H) quantum logic gates.",
        "Pauli-X = [[0,1],[1,0]] (NOT); Pauli-Y = [[0,-i],[i,0]]; Phase-S = [[1,0],[0,i]]; Hadamard = (1/sqrt(2))[[1,1],[1,-1]].",
        """<strong>1. Quantum Gate Matrix Representations:</strong>
All single-qubit quantum logic gates are represented by $2 \\times 2$ Unitary matrices ($U^\\dagger U = I$):

• <strong>Pauli-X Gate (Quantum NOT Gate):</strong>
  $$X = \\begin{bmatrix} 0 & 1 \\\\ 1 & 0 \\end{bmatrix} \\implies X|0\\rangle = |1\\rangle, \\quad X|1\\rangle = |0\\rangle$$
  Flips the state around the $x$-axis on the Bloch sphere.

• <strong>Pauli-Y Gate:</strong>
  $$Y = \\begin{bmatrix} 0 & -i \\\\ i & 0 \\end{bmatrix} \\implies Y|0\\rangle = i|1\\rangle, \\quad Y|1\\rangle = -i|0\\rangle$$

• <strong>Phase-S Gate ($\pi/2$ Phase Shift Gate):</strong>
  $$S = \\begin{bmatrix} 1 & 0 \\\\ 0 & i \\end{bmatrix} \\implies S|0\\rangle = |0\\rangle, \\quad S|1\\rangle = i|1\\rangle$$
  (Note: $S^2 = Z$, so $S = \\sqrt{Z}$).

• <strong>Hadamard (H) Gate:</strong>
  $$H = \\frac{1}{\\sqrt{2}} \\begin{bmatrix} 1 & 1 \\\\ 1 & -1 \\end{bmatrix}$$
  Creates an equal superposition from computational basis states:
  $$H|0\\rangle = \\frac{|0\\rangle + |1\\rangle}{\\sqrt{2}} = |+\\rangle, \\quad H|1\\rangle = \\frac{|0\\rangle - |1\\rangle}{\\sqrt{2}} = |-\\rangle$$""",
        "Mention that Hadamard is its own inverse: H² = I. Applying H twice restores the original basis state.")

    # =========================================================================
    # 2. PYTHON PROGRAMMING (25PLC24) - 16 CARDS
    # =========================================================================
    add("pyprog", 1, "🔥 Asked in SEE July 2026 • 5 Marks", "⚡ Exception / Trap", "Python Errors",
        "Differentiate between Syntax errors, Runtime errors, and Semantic errors in Python with brief code examples for each.",
        "Syntax error: code violates language grammar (caught before run). Runtime error: occurs during execution (division by zero). Semantic error: program runs but logic is flawed.",
        """<strong>1. Three Types of Python Errors:</strong>
• <strong>1. Syntax Errors (Parsing Errors):</strong>
  - The code violates Python's grammatical syntax rules. Detected by the parser before execution begins.
  - <em>Example:</em> \`if x == 5\` (missing colon \`:\`).
• <strong>2. Runtime Errors (Exceptions):</strong>
  - The syntax is valid, but an invalid operation occurs while the program is actively executing, terminating execution.
  - <em>Example:</em> \`x = 10 / 0\` (\`ZeroDivisionError\`) or \`int("hello")\` (\`ValueError\`).
• <strong>3. Semantic (Logic) Errors:</strong>
  - The program runs to completion without any syntax error or crash, but produces the **WRONG output** due to flawed programmer logic.
  - <em>Example:</em> Writing \`average = a + b / 2\` instead of \`average = (a + b) / 2\`.""",
        "Clearly contrast: Syntax error stops before running; Runtime crashes while running; Semantic runs but gives wrong answer.")

    add("pyprog", 1, "🔥 Asked in SEE July 2026 • 7 Marks", "🔢 Numerical Pattern", "Precedence & Loops",
        "Evaluate the Python expression step-by-step: a = 10 + 5 * 2 ** 3 / 4 - 6. Write a Python program using nested loops to print a 2D multiplication table from 1 to 10.",
        "Python precedence: ** (exponent) > * / (multiplication/division) > + - (addition/subtraction).",
        """<strong>1. Step-by-Step Expression Evaluation:</strong>
Given: \`a = 10 + 5 * 2 ** 3 / 4 - 6\`
1. Exponentiation (\`**\`) has highest precedence:
   $2 ** 3 = 8$. Expression: \`10 + 5 * 8 / 4 - 6\`.
2. Multiplication (\`*\`) and Division (\`/\`) evaluated left-to-right:
   $5 * 8 = 40$.
   $40 / 4 = 10.0$ (floating point division in Python 3). Expression: \`10 + 10.0 - 6\`.
3. Addition (\`+\`) and Subtraction (\`-\`) evaluated left-to-right:
   $10 + 10.0 = 20.0$.
   $20.0 - 6 = 14.0$.
• <strong>Final Output:</strong> $\\mathbf{a = 14.0}$ (float).

<strong>2. 2D Multiplication Table Program:</strong>
<pre class="bg-slate-900 text-slate-100 p-3 rounded-lg overflow-x-auto"><code># Print 2D multiplication table 1 to 10
for i in range(1, 11):
    for j in range(1, 11):
        print(f"{i * j:4d}", end="")
    print()  # newline</code></pre>""",
        "Notice that division / in Python 3 always yields a float (14.0, not integer 14).")

    add("pyprog", 2, "🔥 Asked in SEE July 2026 • 6 Marks", "⚡ Exception / Trap", "Tuples vs Lists",
        "Explain why Tuples are immutable in Python with code examples. List three major differences between a Tuple and a List.",
        "Tuples cannot be modified in place after creation (no append/pop). Immutable objects are hashable and can be dictionary keys.",
        """<strong>1. Why Tuples are Immutable:</strong>
Once a tuple is allocated in memory, its element references cannot be added, deleted, or reassigned:
<pre class="bg-slate-900 text-slate-100 p-3 rounded-lg overflow-x-auto"><code>t = (1, 2, 3)
t[0] = 99  # Raises TypeError: 'tuple' object does not support item assignment</code></pre>

<strong>2. Comparison: Tuple vs. List:</strong>
<div class="overflow-x-auto my-2">
<table class="w-full text-xs text-left border border-slate-300">
<thead class="bg-slate-100"><tr><th class="p-1 border">Feature</th><th class="p-1 border">Tuple \`(1, 2)\`</th><th class="p-1 border">List \`[1, 2]\`</th></tr></thead>
<tbody>
<tr><td class="p-1 border font-semibold">Mutability</td><td class="p-1 border">Immutable (read-only)</td><td class="p-1 border">Mutable (can append/insert/remove)</td></tr>
<tr><td class="p-1 border font-semibold">Memory Overhead</td><td class="p-1 border">Smaller fixed memory footprint</td><td class="p-1 border">Larger (allocates over-allocation buffer for resizing)</td></tr>
<tr><td class="p-1 border font-semibold">Dictionary Keys</td><td class="p-1 border">Can be used as dict keys (hashable)</td><td class="p-1 border">Cannot be dict keys (\`TypeError: unhashable\`)</td></tr>
<tr><td class="p-1 border font-semibold">Syntax</td><td class="p-1 border">Parentheses \`(1, 2)\` or comma \`1, 2\`</td><td class="p-1 border">Square brackets \`[1, 2]\`</td></tr>
</tbody>
</table>
</div>""",
        "Highlight that tuples can serve as keys in dictionaries because they are hashable, whereas lists cannot.")

    add("pyprog", 2, "🔥 Asked in SEE July 2026 • 8 Marks", "📐 Derivation / Formula", "Python File I/O",
        "Write a Python program to read the content of a text file line-by-line, sort the lines alphabetically by their first letter, and write the sorted lines into a new text file.",
        "Use with open('input.txt', 'r') as f:, lines = f.readlines(), lines.sort(key=lambda s: s.strip().lower()), write to output.txt.",
        """<strong>Python File Line Sorting Program:</strong>
<pre class="bg-slate-900 text-slate-100 p-3 rounded-lg overflow-x-auto"><code>def sort_file_lines(input_path, output_path):
    try:
        # Read lines using context manager
        with open(input_path, 'r', encoding='utf-8') as fin:
            lines = fin.readlines()

        # Sort lines by first alphabetical character
        sorted_lines = sorted(lines, key=lambda line: line.strip().lower())

        # Write sorted lines to target file
        with open(output_path, 'w', encoding='utf-8') as fout:
            fout.writelines(sorted_lines)

        print(f"Successfully sorted {len(sorted_lines)} lines into '{output_path}'.")
    except FileNotFoundError:
        print(f"Error: The source file '{input_path}' does not exist.")

# Execution demonstration
sort_file_lines("input.txt", "sorted_output.txt")</code></pre>""",
        "Use with open(...) context managers so file descriptors are guaranteed to close even if an exception occurs.")

    add("pyprog", 3, "🔥 Asked in SEE July 2026 • 9 Marks", "🔢 Numerical Pattern", "NumPy Masking",
        "Study the NumPy code: arr = np.array([[1, 2, 3], [4, 5, 6]]); result = arr[arr > 3]; new_arr = arr + np.array([10, 20, 30]). State the output of: print(arr.shape), print(result), print(new_arr). Identify where masking and broadcasting occur.",
        "arr.shape is (2, 3). arr > 3 is a boolean mask returning 1D array [4, 5, 6]. [10, 20, 30] broadcasts across rows.",
        """<strong>1. Output of the Code:</strong>
• <strong>1. \`print(arr.shape)\`:</strong>
  $$\\mathbf{(2, 3)}$$ (2 rows and 3 columns).
• <strong>2. \`print(result)\`:</strong>
  $$\\mathbf{[4, 5, 6]}$$
  (Boolean condition \`arr > 3\` produces \`[[False, False, False], [True, True, True]]\`. Mask indexing flattens and extracts true elements as a 1D array).
• <strong>3. \`print(new_arr)\`:</strong>
  $$\\mathbf{[[11, 22, 33], [14, 25, 36]]}$$

<strong>2. Mechanism Explanations:</strong>
• <strong>Boolean Masking:</strong> Occurs at \`result = arr[arr > 3]\` where an element-wise logical condition creates a boolean truth array to filter matching values.
• <strong>Broadcasting:</strong> Occurs at \`arr + np.array([10, 20, 30])\`. The 1D array of shape \`(3,)\` has its dimension automatically stretched across the 2 rows of \`arr\` of shape \`(2, 3)\` without copying memory, performing element-wise addition across each row.""",
        "State that boolean indexing flattens multidimensional arrays into a 1D array of matching values.")

    add("pyprog", 4, "🔥 Asked in SEE July 2026 • 6 Marks", "⚡ Exception / Trap", "Copying in Python",
        "Differentiate between Aliasing, Shallow Copy, and Deep Copy in Python with memory diagrams and code examples.",
        "Aliasing: b = a (shares same memory reference). Shallow copy: copy.copy(a) (copies outer container, shares nested objects). Deep copy: copy.deepcopy(a) (recursively duplicates everything).",
        """<strong>1. Three Levels of Object Copying:</strong>
<div class="overflow-x-auto my-2">
<table class="w-full text-xs text-left border border-slate-300">
<thead class="bg-slate-100"><tr><th class="p-1 border">Type</th><th class="p-1 border">Syntax</th><th class="p-1 border">Outer Container</th><th class="p-1 border">Nested Inner Objects</th></tr></thead>
<tbody>
<tr><td class="p-1 border font-semibold">Aliasing</td><td class="p-1 border">\`b = a\`</td><td class="p-1 border">Shares same reference (\`id(a) == id(b)\`)</td><td class="p-1 border">Shared</td></tr>
<tr><td class="p-1 border font-semibold">Shallow Copy</td><td class="p-1 border">\`b = copy.copy(a)\`</td><td class="p-1 border">New object created</td><td class="p-1 border">Shared nested references</td></tr>
<tr><td class="p-1 border font-semibold">Deep Copy</td><td class="p-1 border">\`b = copy.deepcopy(a)\`</td><td class="p-1 border">New object created</td><td class="p-1 border">Completely duplicated recursively</td></tr>
</tbody>
</table>
</div>

<strong>2. Code Demonstration:</strong>
<pre class="bg-slate-900 text-slate-100 p-3 rounded-lg overflow-x-auto"><code>import copy

orig = [[1, 2], [3, 4]]
shallow = copy.copy(orig)
deep = copy.deepcopy(orig)

orig[0][0] = 999
print(shallow[0][0])  # Prints 999! (Shared inner list)
print(deep[0][0])     # Prints 1    (Independent duplicate)</code></pre>""",
        "Show that modifying orig[0][0] affects the shallow copy but does NOT affect the deep copy.")

    add("pyprog", 5, "🔥 Asked in SEE July 2026 • 8 Marks", "📐 Derivation / Formula", "OOP Operator Overload",
        "Define a class Vector with attributes x and y. Overload the + operator (__add__) to add two vectors, and overload the < operator (__lt__) to compare vectors based on magnitude.",
        "Magnitude is sqrt(x² + y²). __add__(self, other) returns new Vector. __lt__(self, other) compares magnitudes.",
        """<strong>Vector Class with Operator Overloading:</strong>
<pre class="bg-slate-900 text-slate-100 p-3 rounded-lg overflow-x-auto"><code>import math

class Vector:
    def __init__(self, x=0, y=0):
        self.x = x
        self.y = y

    def magnitude(self):
        return math.sqrt(self.x ** 2 + self.y ** 2)

    # Overload + operator
    def __add__(self, other):
        if isinstance(other, Vector):
            return Vector(self.x + other.x, self.y + other.y)
        return NotImplemented

    # Overload < operator based on magnitude
    def __lt__(self, other):
        if isinstance(other, Vector):
            return self.magnitude() &lt; other.magnitude()
        return NotImplemented

    def __repr__(self):
        return f"Vector({self.x}, {self.y})"

# Demonstration
v1 = Vector(3, 4)   # mag = 5.0
v2 = Vector(1, 1)   # mag = 1.414
v3 = v1 + v2        # Vector(4, 5)

print("v1 + v2 =", v3)
print("Is v2 < v1?:", v2 &lt; v1)  # True</code></pre>""",
        "Define __repr__ so printing vector objects renders human-readable Vector(x, y) rather than memory addresses.")

    add("pyprog", 5, "🔥 Asked in SEE July 2026 • 8 Marks", "⚡ Exception / Trap", "Exception Handling",
        "Explain Python's Exception Handling mechanism. Write a program demonstrating try, except, else, and finally blocks to handle invalid inputs and division by zero.",
        "try: guarded code; except ExceptionType: error handler; else: runs only if no exception; finally: always runs (cleanup).",
        """<strong>1. Structure of Exception Handling in Python:</strong>
• \`try\`: Encloses risky code that might throw an exception.
• \`except ExceptionType\` as e: Catches and resolves specific runtime errors.
• \`else\`: Executes strictly if the \`try\` block executed with **zero exceptions**.
• \`finally\`: Executes unconditionally, even if unhandled exceptions occur (used for releasing files/sockets).

<strong>2. Comprehensive Program:</strong>
<pre class="bg-slate-900 text-slate-100 p-3 rounded-lg overflow-x-auto"><code>def safe_divide():
    try:
        a = float(input("Enter numerator: "))
        b = float(input("Enter denominator: "))
        res = a / b
    except ValueError:
        print("Error: Input must be a valid numeric number!")
    except ZeroDivisionError:
        print("Error: Division by zero is mathematically undefined!")
    else:
        print(f"Success! Result = {res:.4f}")
    finally:
        print("Cleanup: Operation block execution complete.\\n")

safe_divide()</code></pre>""",
        "Mention that the 'else' block executes only when NO exception was raised in the try block.")

    # =========================================================================
    # 3. KANNADA KALI / BALAKE KANNADA (HSCP16K / HSCP26K) - 15 CARDS
    # =========================================================================
    add("kan", 1, "🔥 Asked in SEE Feb 2026 • 8 Marks", "📐 Derivation / Formula", "Self-Introduction",
        "Write a brief introduction about yourself in eight sentences in Kannada using English letters.",
        "Key sentences: Nanna hesaru ..., Naanu ... inda bandiddene, Naanu Ramaiah college alli engineering oduttiddene.",
        """<strong>Self-Introduction in Kannada (English Letters):</strong>
1. <em>Nanna hesaru Rahul.</em> (My name is Rahul.)
2. <em>Naanu Bengalurina vaasi.</em> (I am a resident of Bengaluru.)
3. <em>Naanu Ramaiah engineering college nalli modalane varsha oduttiddene.</em> (I am studying in first year at Ramaiah Engineering College.)
4. <em>Nanna vibhaaga Electronics and Communication (ECE).</em> (My department is Electronics and Communication.)
5. <em>Nanna thandeya hesaru Suresh, avaru udyogi.</em> (My father's name is Suresh, he is a businessman.)
6. <em>Nanna thaayiya hesaru Geetha, avaru maneyalliddare.</em> (My mother's name is Geetha, she is a homemaker.)
7. <em>Nanage cricket aaDuvudu mattu pustaka ooduvudu tumbaa ishTa.</em> (I like playing cricket and reading books very much.)
8. <em>Naanu obba uttama software engineer aagalu bayasuttene.</em> (I aspire to become a good software engineer.)""",
        "Write full grammatical sentences with English equivalents alongside to earn maximum marks.")

    add("kan", 1, "🔥 Asked in SEE Feb 2026 • 8 Marks", "📐 Derivation / Formula", "Famous Places",
        "Write any eight famous places of Karnataka and their specialty in Kannada using English letters.",
        "Mysuru (Aramane/Palace), Hampi (Itihasika sthala), Bengaluru (Silicon City), Mangaluru (Kadalathira), Jog Falls, Belagavi, Madikeri, Badami.",
        """<strong>Eight Famous Places in Karnataka:</strong>
1. <strong>Mysuru:</strong> <em>Sundaravada Aramanege (Palace) mattu Dasara habbakke prassiddha.</em> (Famous for its grand palace and Dasara festival.)
2. <strong>Hampi:</strong> <em>Vijayanagara saamrajyada aitihasika shilpakalege hesarvaasi.</em> (World famous for historical ruins and Vijayanagara architecture.)
3. <strong>Bengaluru:</strong> <em>Bhaaratada IT capital mattu Udyanavana Nagara (Garden City).</em> (IT capital of India and Garden City.)
4. <strong>Jog Falls (Shimoga):</strong> <em>Bhaaratada atyanta ettharavada jalapaatha (Sharavathi nadi).</em> (One of India's highest waterfalls on Sharavathi river.)
5. <strong>Mangaluru:</strong> <em>Sundaravada samudra theera (beaches) mattu devasthanagalu.</em> (Famous for coastal beaches and temples.)
6. <strong>Madikeri (Coorg):</strong> <em>Kaafi thotagalu mattu thampada havamaana (Scotland of India).</em> (Famous for lush coffee estates and pleasant weather.)
7. <strong>Badami:</strong> <em>Chalukya raajara aitihasika guhaa devasthanagalu.</em> (Historic cave temples carved by Chalukya kings.)
8. <strong>Belagavi:</strong> <em>Suvarna Vidhana Soudha mattu aitihasika kote.</em> (Known for Suvarna Vidhana Soudha and historic fort.)""",
        "Include the district or specialty for each place to score full 8/8 marks.")

    add("kan", 2, "🔥 Asked in SEE Feb 2026, CIE-2 • 8 Marks", "⚡ Exception / Trap", "Word Rearranging",
        "Rearrange the scrambled words to form meaningful Kannada sentences: (i) horaDuttene namma saayankaala bengalurininDa uurlige naanu, (ii) sulalita sulabha mattu bhaashe kannada, (iii) mane namma doDDa mahavidyalaya tumbha ide hattira.",
        "Subject-Object-Verb (SOV) structure: Naanu saayankaala bengalurininDa namma uurlige horaDuttene.",
        """<strong>Rearranged Grammatical Sentences:</strong>
• <strong>(i) Given:</strong> <em>horaDuttene namma saayankaala bengalurininDa uurlige naanu</em>
  $$\\mathbf{\\text{Naanu saayankaala namma uurlige bengalurininDa horaDuttene.}}$$
  (Meaning: I am departing from Bengaluru to our hometown this evening.)

• <strong>(ii) Given:</strong> <em>sulalita sulabha mattu bhaashe kannada</em>
  $$\\mathbf{\\text{Kannada bhaashe sulabha mattu sulalita.}}$$
  (Meaning: Kannada language is simple and melodious.)

• <strong>(iii) Given:</strong> <em>mane namma doDDa mahavidyalaya tumbha ide hattira</em>
  $$\\mathbf{\\text{Namma mane doDDa mahavidyalayada tumbha hattira ide.}}$$
  (Meaning: Our house is very close to the large college.)

• <strong>(iv) Given:</strong> <em>baNNa yaavudu nimage ishTavaada</em>
  $$\\mathbf{\\text{Nimage ishTavaada baNNa yaavudu?}}$$
  (Meaning: Which is your favorite color?)""",
        "Kannada follows Subject-Object-Verb (SOV) sentence order. Verbs (e.g. horaDuttene, ide) almost always come at the very END.")

    add("kan", 3, "🔥 Asked in SEE Feb 2026 • 8 Marks", "📐 Derivation / Formula", "Adjectives & Sentences",
        "Write eight Kannada adjectives with their English equivalents and frame a simple conversational sentence for each using English letters.",
        "Adjectives: doDDa (big), chikka (small), hosa (new), haleya (old), sundara (beautiful), sihi (sweet), olleya (good), kempu (red).",
        """<strong>Eight Kannada Adjectives & Sentences:</strong>
1. <strong>doDDa (Big / Large):</strong>
   • <em>Idu tumbaa doDDa shaale.</em> (This is a very big school.)
2. <strong>chikka (Small):</strong>
   • <em>Avaradu chikka mane.</em> (Theirs is a small house.)
3. <strong>hosa (New):</strong>
   • <em>Naanu hosa mobile kharidisi-ddene.</em> (I bought a new mobile phone.)
4. <strong>haleya (Old):</strong>
   • <em>Idu haleya pustaka.</em> (This is an old book.)
5. <strong>sundara (Beautiful):</strong>
   • <em>Bengaluru sundaravada nagara.</em> (Bengaluru is a beautiful city.)
6. <strong>olleya (Good):</strong>
   • <em>Avanu tumbaa olleya snehita.</em> (He is a very good friend.)
7. <strong>sihi (Sweet):</strong>
   • <em>Ee maavina haNNu tumbaa sihi.</em> (This mango fruit is very sweet.)
8. <strong>sulabha (Easy / Simple):</strong>
   • <em>Kannada kaliyuvudu tumbaa sulabha.</em> (Learning Kannada is very easy.)""",
        "State both the Kannada word, its English meaning in parentheses, and the framed sentence.")

    add("kan", 4, "🔥 Asked in SEE Feb 2026 • 8 Marks", "🔢 Numerical Pattern", "Kannada Numbers",
        "Write the names of the following numbers in Kannada using English letters: 42, 54, 89, 97, 108, 126, 175, 192.",
        "42=nalavattaraDu, 54=aivattnaalku, 89=embattombattu, 97=tombattELu, 108=nUtrenTu, 126=nUtra ippattAru, 175=nUtra eppattaidu, 192=nUtra tombatteraDu.",
        """<strong>Number Names in Kannada (English Letters):</strong>
• <strong>42:</strong> <em>Nalavatt-eraDu</em> (NalavatteraDu)
• <strong>54:</strong> <em>Aivatt-naalku</em> (Aivattnaalku)
• <strong>89:</strong> <em>Embatt-ombattu</em> (Embattombattu)
• <strong>97:</strong> <em>Tombatt-eeLu</em> (TombatteeLu)
• <strong>108:</strong> <em>NUtra-enTu</em> (NUtrenTu)
• <strong>126:</strong> <em>NUtra-ippattAru</em> (NUtra ippattaaru)
• <strong>175:</strong> <em>NUtra-eppattaidu</em> (NUtra eppattaidu)
• <strong>192:</strong> <em>NUtra-tombatteraDu</em> (NUtra tombatteraDu)""",
        "Practice number prefixes: 40s = Nalavattu, 50s = Aivattu, 80s = Embattu, 90s = Tombattu, 100s = NUtra.")

    add("kan", 4, "🔥 Asked in SEE Feb 2026 • 8 Marks", "📐 Derivation / Formula", "Fruits and Vegetables",
        "Write eight fruits and eight vegetables names in Kannada using English letters and frame two sentences using them.",
        "Fruits: Seebu, BaaLehaNNu, Drakshi, Maavina haNNu, Ananas. Vegetables: AalugaDDe, EeruLLi, Bende kaayi, Tomato.",
        """<strong>1. Eight Fruits (HaNNugalu):</strong>
1. <em>Seebu</em> — Apple
2. <em>BaaLehaNNu</em> — Banana
3. <em>Maavina haNNu</em> — Mango
4. <em>Draakshi</em> — Grapes
5. <em>Kittale</em> — Orange
6. <em>Ananas</em> — Pineapple
7. <em>KallangaDi</em> — Watermelon
8. <em>Daalimbe</em> — Pomegranate

<strong>2. Eight Vegetables (Tarakaarigalu):</strong>
1. <em>AalugaDDe</em> — Potato
2. <em>EeruLLi</em> — Onion
3. <em>BenDekaayi</em> — Ladyfinger / Okra
4. <em>BadaNekaayi</em> — Brinjal / Eggplant
5. <em>KumbLakaayi</em> — Pumpkin
6. <em>HuraLikaayi</em> — Beans
7. <em>BassaLe soppu</em> — Spinach / Greens
8. <em>Mullangi</em> — Radish

<strong>3. Example Sentences:</strong>
• <em>Nanage maavina haNNu tumbaa ishTa.</em> (I like mango fruit very much.)
• <em>Ammaru tarakaari maarukatteyinda eeruLLi thandaru.</em> (Mother brought onions from the vegetable market.)""",
        "Separate your answer clearly into Fruits (HaNNugalu) and Vegetables (Tarakaarigalu).")

    add("kan", 5, "🔥 Asked in SEE Feb 2026 • 8 Marks", "📐 Derivation / Formula", "Kannada Alphabet",
        "Explain the structure of the Kannada Alphabet (Kannada Varnamale). State the classification into Swaragalu, Yogavahakagalu, and Vyanjanagalu.",
        "Total 49 letters in Kannada Varnamale: 13 Swaragalu (Hrasva & Deergha), 2 Yogavahakagalu (Anuswara, Visarga), 34 Vyanjanagalu (Vargeeya & Avargeeya).",
        """<strong>1. Total Letters in Kannada Varnamale:</strong>
The classical Kannada alphabet consists of exactly <strong>49 letters (Aksharagalu)</strong> categorized into three groups:

<strong>2. Three Main Classifications:</strong>
• <strong>1. Swaragalu (Vowels — 13 Letters):</strong>
  Letters that can be pronounced independently:
  - <em>Hrasva Swaragalu (Short Vowels — 1 matra time, 6 letters):</em> a, i, u, ru, e, o
  - <em>Deergha Swaragalu (Long Vowels — 2 matra times, 7 letters):</em> aa, ee, oo, ae, ai, o, au
• <strong>2. Yogavahakagalu (Two Letters):</strong>
  Letters pronounced only in association with a vowel:
  - <em>Anuswara:</em> am (ಂ)
  - <em>Visarga:</em> aha (ಃ)
• <strong>3. Vyanjanagalu (Consonants — 34 Letters):</strong>
  Pronounced with the assistance of vowels ($k + a = ka$):
  - <em>Vargeeya Vyanjanagalu (Grouped Consonants — 25 letters):</em> Organized in 5 vargas (ka, cha, Ta, tha, pa) covering Alpapraana, Mahapraana, and Anunasika.
  - <em>Avargeeya Vyanjanagalu (Ungrouped Consonants — 9 letters):</em> ya, ra, la, va, sha, Sha, sa, ha, La.""",
        "State the exact count: 49 total letters (13 Vowels + 2 Yogavahakas + 34 Consonants).")

    return cards

print("create_new_subjects_content module defined.")
