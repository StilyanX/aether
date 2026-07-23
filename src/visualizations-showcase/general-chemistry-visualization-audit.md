# General Chemistry — Visualization Audit & Recommendations

**Date:** 2026-07-12
**Scope:** All 18 topics under `src/features/explore/chemistry/general-chemistry/` (10 units).
**Nature:** Audit only. No code was written. Every row is a *recommendation* — where a viz belongs and what it should be.
**Constraint:** Approved Chemistry engine stack only (`molstar`, `@rdkit/rdkit`, `@observablehq/plot`) + platform-wide primitives (hand-rolled monochrome SVG `primitives.jsx`, `mafs`, `elk`+`@xyflow/react`). Every recommendation passes the **Viz Authenticity Rule** — it computes or accurately represents; it never decorates. `HALT` rows are concepts with no honest viz (prose/tables/abstract) — they must stay text, not get a decorative substitute.

---

## Current state

- **16 of 18 topics have zero visualizations.**
- `chemical-kinetics-and-rate-laws.jsx` renders 3 viz (`MaxwellBoltzmannViz`, `ReactionEnergyViz`, `CatalystEnergyViz`) — energy half covered, rate-law half bare.
- `coordination-and-transition-metal-chemistry.jsx` renders 1 viz (`CrystalFieldSplittingDiagram` via `VizFigure`).
- Existing reusable library (`src/components/viz/chemistry.jsx`): `MaxwellBoltzmannViz`, `ReactionEnergyViz`, `CatalystEnergyViz` — all kinetics/energy-profile; reusable in Units 3, 4, 10 only.

## Engine footprint of recommendations

| Engine | Primary use across gen-chem |
|---|---|
| `mafs` | Function plots: Nernst, Arrhenius, Gibbs–T, Coulomb/Born-Mayer wells, titration math, Karplus, Beer-Lambert, particle-in-a-box, ψ/ψ² |
| `@observablehq/plot` | Computed data curves & spectra: titration curves, speciation, periodic trends, spectra (IR/UV-Vis/NMR/EPR/rotational), yield surfaces, LFSE double-hump |
| `svg-primitives` | Honest scales, energy-level ladders, cell schematics, decision grids, number lines, vector-sum diagrams |
| `molstar` | Real 3D structure: crystal unit cells, VSEPR geometries, coordination polyhedra, orbital/MO isosurfaces, carbon allotropes |
| `@rdkit/rdkit` | 2D structures from SMILES: Lewis/resonance, conjugate pairs, isomers, cisplatin, silicones |
| `elk`+`@xyflow/react` | Structured diagrams: process-flow (Haber/Ostwald/Contact/Claus/Bayer), MO correlation diagrams, quantum-number tree, cation-separation decision tree, catalytic cycles |

## Shared "build once, reuse many" components

These recur across multiple topics — factor each as one component:

1. **Reaction-coordinate energy profile** (`ReactionEnergyViz`, exists) — Units 3, 4.
2. **Catalyst energy profile** (`CatalystEnergyViz`, exists) — Units 4, 10 (Haber, steam reform, general catalysis).
3. **Maxwell-Boltzmann distribution** (`MaxwellBoltzmannViz`, exists) — Unit 4.
4. **Scaled enthalpy-level ladder** (svg) — thermochemistry Hess cycle, Born-Haber staircase, formation path.
5. **Coulomb / Born-Mayer potential well** (mafs) — lattice energy + ionic bonding (Units 2, 3).
6. **Hydrogen energy-level ladder / Grotrian** (svg) — spectral series, H degeneracy, selection rules (Unit 1).
7. **Radial-distribution P(r) plotter** (mafs) — s-orbitals, penetration/shielding (Unit 1).
8. **MO correlation diagram** (elk-xyflow) — bond order, O₂ paramagnetism, heteronuclear MO (Unit 2).
9. **Electrode-potential ladder** (svg) — electrochemical series, sacrificial protection, corrosion (Unit 7).
10. **Nernst plot** (mafs) — concentration cells, glass electrode, pH dependence (Unit 7).
11. **Galvanic & electrolytic cell schematics** (svg) — Units 7, 10 (Downs, membrane, batteries, electroplating).
12. **Titration-curve engine** (observable-plot/mafs) — buffers, salt hydrolysis, qual/quant analysis (Units 6, 9).
13. **Speciation / α-fraction diagram** (observable-plot) — polyprotic acids, amphiprotic species (Unit 6).
14. **Crystal-field splitting ladder** (`CrystalFieldSplittingDiagram`, exists) — Unit 8 color/magnetism sections.
15. **Process-flow diagram** (elk-xyflow) — every named industrial process (Unit 10) + spectrometer/combustion (Unit 9).
16. **Representative spectrum plotter** (observable-plot) — all of Unit 9 spectroscopy + UV-Vis in Unit 8.

---

# UNIT 01 — Atomic Structure & Periodicity

## atomic-structure-periodic-table-and-trends.jsx
Full QM foundation: nuclear model, spectra, old quantum theory, Schrödinger/particle-in-box, hydrogen orbitals, many-electron structure, all periodic trends. **Currently: no viz.**

| Concept | Viz | Engine | Verdict | Priority |
|---|---|---|---|---|
| Rutherford gold-foil scattering | Compute hyperbolic Coulomb trajectories over a fan of impact parameters; most pass, few recoil >90° | mafs | BUILD | HIGH |
| Isotopes + mass spectrometry | Cl mass spectrum: bar plot m/z vs % abundance (35→75.8%, 37→24.2%), weighted mean → 35.45 | observable-plot | BUILD | HIGH |
| Emission/absorption spectra | H line spectrum: Rydberg-computed vertical lines on 400–700 nm axis (Balmer) | observable-plot | BUILD | HIGH |
| Rydberg formula / spectral series | Grotrian ladder E_n=−13.6/n² with Lyman/Balmer/Paschen arrows, each labeled with computed λ | svg-primitives | BUILD | HIGH |
| Planck / black-body | Planck curves: spectral radiance vs λ at several T, Wien peak-shift marker | observable-plot | BUILD | HIGH |
| Photoelectric effect | E_k vs ν line: slope=h, x-intercept=threshold, zero below | observable-plot | BUILD | HIGH |
| Wavefunction ψ vs ψ² | 1s ψ(r) (cusp at 0) vs ψ²(r) both vs r | mafs | BUILD | HIGH |
| Particle in a box | Standing waves ψ_n + energy ladder E_n=n²h²/8mL²; nodes, zero-point energy | mafs | BUILD | HIGH |
| Hydrogen energy levels | E_n=−Z²·13.6/n² ladder, Z²-scaling (H vs He⁺), ionization arrow | svg-primitives | BUILD | HIGH |
| s-orbital radial distribution | P(r)=4πr²ψ²: 1s peak at a₀, 2s inner peak/node | mafs | BUILD | HIGH |
| p-orbital shape + nodal plane | **Real** dumbbell isosurface w/ nodal plane — hand-drawn lobe would be the decorative lie | molstar | BUILD | HIGH |
| Shielding / penetration / Z_eff | P(r) overlay 3s vs 3p vs 3d explaining s<p<d order | mafs | BUILD | HIGH |
| Effective nuclear charge (Slater) | Z_eff across Period 2 (Li→Ne) line plot | observable-plot | BUILD | HIGH |
| Atomic radius trend | Radius vs Z sawtooth: drop across period, jump down group | observable-plot | BUILD | HIGH |
| Ionization energy trend | I₁ vs Z sawtooth, group-13 & group-16 dips called out | observable-plot | BUILD | HIGH |
| Successive ionization energies | Log plot I₁,I₂,I₃… Na/Mg, shell-boundary jumps | observable-plot | BUILD | HIGH |
| de Broglie wavelength | λ vs v log-log, electron vs baseball | observable-plot | BUILD | MED |
| Heisenberg uncertainty | Δp·Δx=ℏ/2 hyperbola (allowed region) | mafs | BUILD | MED |
| Quantum numbers n,l,mₗ,mₛ | Branching tree n→l→mₗ→mₛ proving n² count | elk-xyflow | BUILD | MED |
| s-orbital 3D shape | 1s/2s isosurface with 2s radial node | molstar | BUILD | MED |
| d-orbital shapes (5) | Real isosurfaces d_xy, d_z², … | molstar | BUILD | MED |
| Aufbau + Hund + Pauli | Orbital-box filling with spin arrows; diagonal fill-order chart | svg-primitives | BUILD | MED |
| Periodic table blocks s/p/d/f | Monochrome table, block boundaries, period=shell mapping | svg-primitives | BUILD | MED |
| Ionic radius / isoelectronic | Bar plot Ca²⁺<K⁺<Cl⁻ (all 18e⁻) vs Z | observable-plot | BUILD | MED |
| Electron affinity trend | E_a across period, group-15 dip (N), F<Cl anomaly | observable-plot | BUILD | MED |
| Electronegativity trend | Pauling values, across-period/down-group | observable-plot | BUILD | MED |
| Selection rules Δl=±1 | Mark allowed/forbidden transitions | svg-primitives | REUSE: H energy ladder | MED |
| Lanthanide contraction | Radius vs Z, Period 5 vs 6 (Zr≈Hf) | observable-plot | BUILD | MED |
| Electron spin / Stern-Gerlach | Classical smear vs quantized two-spot (honest prediction contrast) | svg-primitives | BUILD | LOW |
| H degeneracy (2s=2p) | Subshells drawn level | svg-primitives | REUSE: H energy ladder | LOW |
| Hartree-Fock / SCF | guess→improve→converge loop flowchart | elk-xyflow | BUILD | LOW |
| f-orbital shapes | 7 f-orbital isosurfaces (count needs no viz) | molstar | BUILD | LOW |
| Inert-pair effect | s–p energy-gap growth down group | observable-plot | BUILD | LOW |
| Diagonal relationships | Table highlighting Li–Mg, Be–Al | svg-primitives | BUILD | LOW |
| Protons/neutrons, isotope notation | Ball-pile of nucleons | — | **HALT** decorative — counting is a label, not a computation | LOW |
| Periodic table history (Mendeleev/Moseley) | narrative | — | **HALT** history, no computable viz | LOW |

---

# UNIT 02 — Bonding & Structure

## structure-and-bonding.jsx
Three bonding models (ionic/Born-Mayer, metallic, covalent), molecular shape (Lewis/VSEPR/VB hybridization), MO theory. **Currently: no viz.**

| Concept | Viz | Engine | Verdict | Priority |
|---|---|---|---|---|
| Ionic bond / Born-Mayer | E_p vs d: Coulomb + short-range repulsion → well with minimum at d | mafs | BUILD | HIGH |
| Lewis structures + resonance | 2D SO₄²⁻, NO₃⁻, benzene with resonance forms side by side | rdkit | BUILD | HIGH |
| Molecular dipole = vector sum | Bond-dipole arrows: CO₂ (cancel, μ=0) vs H₂O (add, 1.85 D) vs cis/trans-CHCl=CHCl | svg-primitives | BUILD | HIGH |
| VSEPR shapes (AXₙEₘ) | Real 3D geometries (linear→octahedral, bent, seesaw, T-shape, square-planar) with computed angles | molstar | BUILD | HIGH |
| Hybridization: s+p interference | ψ_s+ψ_z → lopsided lobe (constructive front, destructive back) | observable-plot | BUILD | HIGH |
| Hybrid orbital geometries sp/sp²/sp³ | Real hybrid isosurfaces at 180°/120°/109.5° | molstar | BUILD | HIGH |
| MO diagram — homonuclear diatomics | Correlation diagram: AO levels both sides, bonding/antibonding, filled per Aufbau/Hund; N₂ vs O₂ orderings; reads bond order + O₂ paramagnetism | elk-xyflow | BUILD | HIGH |
| Bonding vs antibonding MO ψ | ψ₊ (density between nuclei) vs ψ₋ (internuclear node), 1D | mafs | BUILD | HIGH |
| O₂ paramagnetism | MO diagram, two singly-filled π* (Hund) | elk-xyflow | REUSE: MO correlation diagram | HIGH |
| Madelung / crystal geometry | NaCl rock-salt lattice (6 near opposite, 12 next same) + partial-sum convergence to A=1.748 | molstar + observable-plot | BUILD | MED |
| Radius ratio rule | Ion in octahedral/cubic hole, critical γ=0.414/0.732 as labeled number line | svg-primitives | BUILD | MED |
| Formal charge | Annotate rdkit structure with FC=V−L−½B | rdkit + svg labels | BUILD | MED |
| Electronegativity / bond polarity | Δχ number line: ionic / polar / nonpolar regions (Pauling) | svg-primitives | BUILD | MED |
| Intermolecular forces (dispersion) | Boiling point vs electron count (halogens/noble gases) | observable-plot | BUILD | MED |
| Hydrogen bonding geometry | Water H-bond network / ice lattice openness | molstar | BUILD | MED |
| Sigma vs pi bonds | Head-on σ vs side-by-side π overlap (one nodal plane); N₂=1σ+2π | molstar | BUILD | MED |
| Benzene delocalization | Six 2p_z → delocalized π ring, bond order 1.5 | molstar | BUILD | MED |
| Cis/trans isomers + retinal | 2D cis vs trans, locked C=C | rdkit | BUILD | MED |
| Bond order / He₂ non-existence | Computed from MO diagram b=½(Nₑ−Nₑ*) | elk-xyflow | REUSE: MO correlation diagram | MED |
| MO — heteronuclear (HF, CO) | Skewed correlation diagram, bonding MO hugs lower AO | elk-xyflow | BUILD | MED |
| MO in polyatomics (H₂O, SF₆) | Delocalized MOs, SF₆ ⅔ bond order without d-orbitals | molstar | BUILD | MED |
| HOMO-LUMO gap → color | Gap vs conjugation length (β-carotene/lycopene), gap narrows into visible | observable-plot | BUILD | MED |
| Ionic radii table | data table / bar chart | observable-plot | BUILD | LOW |
| Period-3 weak pi bonding | Lateral overlap vs internuclear distance | mafs | BUILD | LOW |
| Metallic bonding / electron sea | Cores + delocalized-electron cartoon | — | **HALT** decorative — honest version needs band structure (outside chem stack) | LOW |
| Polarizability | cloud distortion | — | **HALT** no honest browser viz at this level | LOW |

---

# UNIT 03 — Energetics & Thermodynamics

## thermochemistry-and-energy.jsx
First Law, expansion work, enthalpy, heat capacity, Hess/Kirchhoff, adiabatic changes. **Currently: no viz** (has one inline hand-rolled energy-level SVG).

| Concept | Viz | Engine | Verdict | Priority |
|---|---|---|---|---|
| Expansion work w=−p_ex·ΔV; reversible vs irreversible | Work as P-V area: isotherm p=nRT/V; rectangle (irrev) vs area under curve (rev); rev > irrev | mafs | BUILD | HIGH |
| Heating curve / latent heat | T vs heat-added, plateaus at fusion/vaporization ∝ ΔH | observable-plot | BUILD | HIGH |
| Adiabatic vs isothermal expansion | pV=const vs pV^γ=const from same start; adiabat drops faster, cools | mafs | BUILD | HIGH |
| State vs path function | Two P-V routes, same endpoints; shade w area; q,w differ, ΔU fixed | mafs | BUILD | MED |
| Endo/exothermic energy levels | Reactant/product levels, ΔH sign | svg-primitives | REUSE: ReactionEnergyViz | MED |
| Heat capacity Cp vs Cv / DOF | Bars 3/2R, 5/2R, 3R; Cp=Cv+nR gap | svg-primitives | BUILD | MED |
| Hess's Law (propene combustion) | Enthalpy-level staircase, scaled to real kJ/mol | svg-primitives (or elk boxed cycle) | BUILD | MED |
| ΔrH from ΔfH° | Formation path ladder: elements at 0, up to reactants, down to products | svg-primitives | BUILD | MED |
| Kirchhoff's Law ΔrH(T) | ΔH vs T line, slope Δr Cp° (Haber at 723 K) | mafs | BUILD | MED |
| Open/closed/isolated systems | 3-panel labeled boundary schematic | svg-primitives | BUILD | LOW |
| Bond-enthalpy accounting | Up-bars (broken) minus down-bars (formed) = ΔH_rxn | svg-primitives | BUILD | LOW |
| Sign conventions, calorimeter schematics, ΔH=ΔU+Δn_gRT | Bomb/isobaric diagrams; algebraic identity | svg-primitives | BUILD (low value) / SKIP | LOW |

## lattice-energy-and-born-haber-cycles.jsx
Ionic crystals, radius ratio, Coulomb/Madelung/Born-Mayer, Born-Haber cycles, ionic-model validity, Fajans' rules. **Currently: no viz.**

| Concept | Viz | Engine | Verdict | Priority |
|---|---|---|---|---|
| Crystal structures (CsCl/NaCl/ZnS) | Real crystallographic unit cells from CIF; genuine (8,8)/(6,6)/(4,4) coordination | molstar | BUILD | HIGH |
| Coulomb PE of ion pair | Coulomb well E vs r (1/r); overlay Na⁺ vs Mg²⁺ | mafs | BUILD | HIGH |
| 1D Madelung sum convergence | Partial sums of 2(1−½+⅓−…) → 2ln2=1.386; + 1D chain schematic | mafs + svg-primitives | BUILD | HIGH |
| Born-Mayer minimum | Total E(d)=Coulomb + e^(−d/d*) repulsion; marks E_p,min | mafs | BUILD | HIGH |
| Lattice-energy trend | ΔHL vs 1/d scatter+line (KF/KCl/KI, LiI…CsI) confirms 1/d | observable-plot | BUILD | HIGH |
| Born-Haber cycle (KCl, CaO, MgO, NaCl) | Scaled enthalpy staircase, each step to real kJ/mol; one parameterized component | svg-primitives | BUILD | HIGH |
| Radius-ratio geometry | 2D packing, cation in octahedral/cubic hole; exact γ where anions touch | svg-primitives | BUILD | MED |
| Experimental vs calculated lattice E | Paired bars (Born-Haber vs Born-Mayer); gap = covalent character (AgCl vs MgO) | observable-plot | BUILD | MED |
| Madelung constants by structure | Bar chart of A values | svg-primitives | BUILD | LOW |
| Brittleness (shear slip) | Before/after shear bringing same-charge ions together | svg-primitives | BUILD | LOW |
| Fajans' rules / covalent character | Cation distorting anion cloud; % ionic vs Δχ | svg-primitives | BUILD | LOW |

## entropy-gibbs-free-energy-and-spontaneity.jsx
Second Law, entropy (thermodynamic + Boltzmann), Third Law/residual entropy, Gibbs energy, spontaneity vs T, ATP coupling. **Currently: no viz.**

| Concept | Viz | Engine | Verdict | Priority |
|---|---|---|---|---|
| Trouton's rule | Δvap H vs Tb scatter, slope≈85; water/ethanol outliers (H-bonding) | observable-plot | BUILD | HIGH |
| Temperature effect on spontaneity ΔG=ΔH−TΔS | ΔG vs T line (slope −ΔS, intercept ΔH); four sign cases; crossover T=ΔH/ΔS | mafs | BUILD | HIGH |
| Two-block heat exchange | ΔS_cold(+q/T_c) vs ΔS_hot(−q/T_h); net rise since 1/T_c>1/T_h | svg-primitives | BUILD | MED |
| Boltzmann S=k ln W | Enumerate all 2^N arrangements (N=2→4, N=4→16); S vs N linear. **Honest only because N small enough to fully enumerate — never fake large-N "disorder clouds"** | svg-primitives | BUILD | MED |
| Isothermal/heating ΔS | ΔS vs volume ratio and vs T ratio (nR ln, Cp ln) | mafs | BUILD | MED |
| Residual entropy (Third Law) | Measured vs predicted bars (ice, CO=R ln2, FClO₃=R ln4) | svg-primitives | BUILD | MED |
| Phase equilibrium (ice/water) | G_solid(T) & G_liquid(T) lines intersecting at melting point (ΔG=0) | mafs | BUILD | MED |
| ATP coupling | Energy bars: +20 (biosynthesis) + −30 (ATP) = −10 net | svg-primitives | BUILD | MED |
| Gibbs criteria/proofs; sign-case table | reference table, algebra | — | SKIP (already tabulated) | LOW |
| Second Law, Kelvin/Clausius | Heat-engine flow schematic (representational) | svg-primitives | BUILD (low value) / SKIP | LOW |

---

# UNIT 04 — Kinetics

## chemical-kinetics-and-rate-laws.jsx
Rate definitions, rate laws, integrated laws, half-lives, Arrhenius/collision theory, mechanisms/RDS, catalysis, Haber. **Currently renders 3 viz** (MaxwellBoltzmann, ReactionEnergy, Catalyst) — energy half done; **entire concentration/rate-law half is text-only (the main gap).**

| Concept | Viz | Engine | Verdict | Priority |
|---|---|---|---|---|
| Average vs instantaneous rate | RateTangent: decaying [A](t) with secant (avg) + t=0 tangent (initial) | svg-primitives | BUILD | HIGH |
| Integrated rate laws by order | ConcentrationTime: overlay [A](t) for zero/first/second on one axis | svg-primitives (or mafs) | BUILD | HIGH |
| Order diagnosis by linearization | 3 panels [A], ln[A], 1/[A] vs t; only correct order is straight | svg-primitives | BUILD | HIGH |
| Maxwell-Boltzmann tail past Ea | distribution at two T, shaded reactive tail | svg-primitives | REUSE: MaxwellBoltzmannViz (in place) | — |
| Reaction-energy / transition state | reactant→TS→product profile | svg-primitives | REUSE: ReactionEnergyViz (in place) | — |
| Catalyst lowers Ea, same ΔH | uncatalyzed vs catalyzed hump | svg-primitives | REUSE: CatalystEnergyViz (in place) | — |
| Half-life by order | equal-width bands (first) vs widening (second) | svg-primitives | BUILD | MED |
| Arrhenius ln k vs 1/T | straight line, slope −Ea/R | svg-primitives | BUILD | MED |
| Two-step mechanism / RDS | double-hump energy profile with intermediate valley; taller barrier = RDS | svg-primitives | BUILD | MED |
| Method of initial rates | log v₀ vs log[A]₀ scatter; slope = order | svg / observable-plot | BUILD | LOW |
| Collision orientation factor | molecular alignment cartoon | — | **HALT** qualitative, energy criterion already covered | LOW |
| Molecularity table / elementary steps | table suffices | — | **HALT** flowchart adds little | LOW |

---

# UNIT 05 — Chemical Equilibrium

## chemical-equilibrium-and-equilibrium-constants.jsx
Dynamic equilibrium, mass action / K, thermodynamic origin (G-vs-ξ), Q vs K, Kc/Kp/Kx, ICE, Le Chatelier, van 't Hoff, Haber, hemoglobin. **Currently: no viz (no viz import at all).**

| Concept | Viz | Engine | Verdict | Priority |
|---|---|---|---|---|
| Dynamic equilibrium: rates converge | ApproachToEquilibrium: integrate A⇌B, forward vs reverse rate converge, [A]/[B] level off | svg-primitives (or mafs) | BUILD | HIGH |
| Gibbs minimum vs extent ξ | GibbsExtent: U-shaped G(ξ)=ξΔrG°+RT·(mixing); minimum=equilibrium, tangent slope=ΔrG | svg-primitives | BUILD | HIGH |
| Q vs K direction | log-axis number line, K fixed; Q<K→forward, Q>K→reverse; doubles as K-magnitude scale | svg-primitives | BUILD | MED |
| Le Chatelier shifts | before/after composition bars for a computed re-equilibration (compress N₂O₄⇌2NO₂) | svg-primitives | BUILD | MED |
| van 't Hoff ln K vs 1/T | straight line, slope −ΔrH°/R; overlay real Ag₂CO₃ points | svg / observable-plot | BUILD | MED |
| Degree of dissociation α vs P | α=(1+4p/Kp°)^−½ vs p; mark N₂O₄ (α=0.166 at 1 bar) | svg-primitives (or mafs) | BUILD | MED |
| K magnitude → composition | log-K axis with reactant/mixed/product zones | svg-primitives | BUILD (merge into Q vs K) | LOW |
| Hemoglobin O₂ binding | fractional saturation vs pO₂ for stated 1:1 model. **Label as idealized 1:1 — real Hb is sigmoidal/cooperative** | svg-primitives | BUILD | LOW |
| ICE-table calc | procedural; outcomes already covered by the two BUILDs above | — | **HALT** procedural | LOW |
| Kc/Kp/Kx conversions | algebraic identities | — | **HALT** formulas suffice | LOW |

---

# UNIT 06 — Acid-Base & Aqueous Equilibria

## acids-and-bases.jsx
Proton-transfer definitions, Kw, Ka/Kb/pKa, pH scale, strong/weak, Lewis acids, structural trends, polyprotic, speciation, dilute correction. **Currently: no viz.**

| Concept | Viz | Engine | Verdict | Priority |
|---|---|---|---|---|
| pH scale + pH/pOH/Kw | Honest 0–14 scale; pH↔[H₃O⁺]=10⁻ᵖᴴ, pH+pOH=14; worked points at true positions | svg-primitives | BUILD | HIGH |
| Polyprotic speciation (α vs pH) | Computed α curves f(H₂A),f(HA⁻),f(A²⁻) vs pH (H₂CO₃/H₃PO₄); crossovers at pKa; HCO₃⁻ dominance ~pH8 | observable-plot | BUILD | HIGH |
| Kw reciprocal link | log-log [OH⁻] vs [H₃O⁺] hyperbola; 37°C Kw shift | mafs | BUILD | MED |
| Ka/pKa strength + Ka×Kb=Kw | pKa ladder of real acids with mirrored pKb axis | svg-primitives | BUILD | MED |
| Strong vs weak: % deprotonation vs dilution | Ostwald: % deprotonation vs log C from Ka=x²/(C−x) | observable-plot | BUILD | MED |
| Oxoacid strength vs oxidation number | pKa vs Cl oxidation number (HClO→HClO₄) scatter | observable-plot | BUILD | MED |
| Amphiprotic pH=½(pKa₁+pKa₂) | annotate maxima on speciation diagram | observable-plot | REUSE: Speciation | MED |
| Very-dilute autoprotolysis correction | pH vs log C from charge balance; √(KaC) diverging, true curve plateaus at 7 | observable-plot | BUILD | MED |
| Conjugate acid–base pair | rdkit 2D CH₃COOH → CH₃COO⁻, proton highlighted | rdkit | BUILD | LOW |
| Lewis adduct BF₃+:NH₃ | molstar 3D H₃N–BF₃, empty B orbital filled by N lone pair | molstar | BUILD | LOW |
| Acid rain / environment | narrative | — | **HALT** decorative, prose | LOW |

## buffer-solutions.jsx
Common-ion buffering, Henderson-Hasselbalch, capacity/range, titration curves. **Crown-jewel titration viz lives here. Currently: no viz.**

| Concept | Viz | Engine | Verdict | Priority |
|---|---|---|---|---|
| Henderson–Hasselbalch pH vs ratio | computed pH=pKa+log([base]/[acid]); line through pH=pKa at ratio 1 | mafs | BUILD | HIGH |
| Strong acid–strong base titration | pH vs volume from exact charge balance; flat wings, sharp vertical through pH 7 | observable-plot | BUILD | HIGH |
| Weak acid–strong base titration (5 regions) | computed HCOOH/NaOH: initial √(KaC), buffer plateau, half-eq pH=pKa, basic eq; mirror weak base–strong acid | observable-plot | BUILD | HIGH |
| Polyprotic titration | H₃PO₄/NaOH: 3 equivalence jumps + plateaus at pKa₁/₂/₃ (3rd smeared) | observable-plot | BUILD | HIGH |
| Buffer capacity + range pKa±1 | β vs pH bell curve peaked at pKa, shaded window; concentration effect | observable-plot | BUILD | MED |
| Acid–base indicators | indicator pKIn±1 bands on pH axis, overlaid on titration steep zone | svg-primitives | BUILD | MED |
| Common-ion / buffer concept | carried by H–H line + speciation | — | REUSE: H–H line | LOW |

## salt-hydrolysis.jsx
Four-case rule, anion/cation hydrolysis pH, weak+weak competition, hydrated cations, titration endpoint. Mostly qualitative. **Currently: no viz.**

| Concept | Viz | Engine | Verdict | Priority |
|---|---|---|---|---|
| Four-case decision rule | Salt 2×2 map: strong/weak acid × strong/weak base → pH direction with example salts | svg-primitives | BUILD | MED |
| Salt pH vs parent strength | endpoint pH vs parent pKa (Kb=Kw/Ka, [OH⁻]=√(KbC)); mirror for cation salts | observable-plot | BUILD | MED |
| Weak acid + weak base direction | annotate ammonium acetate/formate on salt pH curve | observable-plot | REUSE: Salt pH curve | LOW |
| Hydrated metal cation as acid | molstar 3D [Fe(H₂O)₆]³⁺ losing a proton | molstar | BUILD | LOW |
| Titration endpoint = salt solution | endpoint pH already on buffer curves | observable-plot | REUSE: Weak–Strong titration | LOW |
| Decision-tool checklist | same logic as 2×2 map | svg-primitives | REUSE: Salt 2×2 map | LOW |

## solubility-product-and-common-ion-effect.jsx
Ksp, molar solubility, common-ion suppression, Q vs Ksp, pH-dependent solubility, selective precipitation. **Currently: no viz.**

| Concept | Viz | Engine | Verdict | Priority |
|---|---|---|---|---|
| Common-ion effect | s vs added common-ion (log-log), s=Ksp/[X⁻] for AgCl; drop 1.3e-5→1.6e-6 | observable-plot | BUILD | HIGH |
| Selective precipitation (Mg/Ca) | [M²⁺] remaining vs [OH⁻]; Mg drops first, residual 2.1e-8 when Ca starts | observable-plot | BUILD | HIGH |
| Molar solubility vs Ksp by formula type | s vs Ksp for 1:1 (√Ksp), 1:2/2:1 (4s³), 1:3 (27s⁴); equal-Ksp → different s | observable-plot | BUILD | MED |
| pH and solubility | s vs pH for Mg(OH)₂ and a carbonate; sharp rise as pH falls | observable-plot | BUILD | MED |
| Q vs Ksp precipitation test | log-scale gauge: Qsp vs fixed Ksp ceiling (PbI₂) | svg-primitives | BUILD | MED |
| Ksp meaning / dynamic equilibrium | dissolution schematic | — | **HALT** decorative, prose | LOW |

---

# UNIT 07 — Redox & Electrochemistry

## redox-and-electrochemistry.jsx
Oxidation states, half-reactions, balancing, galvanic cells, standard potentials, Nernst, Latimer, corrosion, batteries. **Currently: no viz.**

| Concept | Viz | Engine | Verdict | Priority |
|---|---|---|---|---|
| Galvanic cells / Daniell cell | Labelled two-compartment schematic: Zn anode, Cu cathode, salt bridge, e⁻-flow arrow, ion migration, half-reactions | svg-primitives (or elk) | BUILD | HIGH |
| Standard electrode potentials | Potential ladder −3.05 V (Li) → +2.87 V (F₂), SHE at 0; oxidising vs reducing strength | svg-primitives | BUILD | HIGH |
| Electrochemical series / spontaneity | Highlight two couples, draw E°cell=E°(cath)−E°(an) as the gap; sign gives spontaneity | svg-primitives | REUSE: Electrode-potential ladder | HIGH |
| Nernst equation | E=E°−(0.05917/n)log Q vs log Q for Daniell (n=2, E°=1.10); worked point Q=100→1.04 V | mafs | BUILD | HIGH |
| Latimer diagrams | oxidation-state chain (Fe³⁺→Fe²⁺→Fe; Mn 0→+7) with E° on arrows; electron-weighted span | svg-primitives | BUILD | HIGH |
| Standard potentials & K | ln K=nE°/0.025693 line, worked points (Daniell K=1.45e37) | mafs | BUILD | MED |
| pH dependence of potentials | E vs pH line for O₂/H₂O couple (points +1.23/+0.82/+0.40 at pH 0/7/14) | mafs | BUILD | MED |
| Concentration cells | E=−(0.05917/n)log([dil]/[conc]) vs log ratio, E°=0 | mafs | REUSE: Nernst plot (variant) | MED |
| Corrosion of iron | micro-cell schematic: anodic Fe→Fe²⁺, cathodic O₂ reduction, rust deposit | svg-primitives | BUILD | MED |
| Corrosion protection (galvanising/sacrificial/tin) | ladder places Zn/Fe/Sn; arrow shows anode when coupled to Fe | svg-primitives | REUSE: Electrode-potential ladder | MED |
| Disproportionation (Cu⁺) | highlight rule (right E° > left E°) on Cu chain | svg-primitives | REUSE: Latimer diagram | MED |
| ΔG=−nFE_cell sign map | number-line E_cell with mirrored ΔG axis, three zones | svg-primitives | BUILD | LOW |
| Cell notation | Zn｜ZnSO₄‖CuSO₄｜Cu | — | **HALT** convention, covered by cell schematic | LOW |
| Oxidation states / balancing / half-reactions | annotated equations (MathJax already) | — | **HALT** reduces to annotated text | LOW |
| SHE / glass electrode | E vs pH is same slope as pH plot | mafs | REUSE: pH-E plot | LOW |
| Batteries table | comparative table | — | **HALT** table, not a viz | LOW |

## electrolysis-and-faradays-laws.jsx
Electrolytic cells, overpotential, competing aqueous reactions, Faraday's laws, applications. **Currently: no viz.**

| Concept | Viz | Engine | Verdict | Priority |
|---|---|---|---|---|
| Faraday's first law / stoichiometry chain | m=(M/zF)·Q lines for Ag/Cu/Al vs charge; worked points (Al 805 kg, Cu 25 g); slope's 1/z dependence | mafs | BUILD | HIGH |
| Electrolytic cell anatomy / sign reversal | schematic: power source pushes e⁻ to cathode(−)/pulls from anode(+), ion migration; contrasts galvanic | svg-primitives (or elk) | BUILD | HIGH |
| Overpotential / min voltage to split water | stacked bar = theoretical + overpotential (1.23+~0.6=~1.8 V) | svg-primitives (or observable-plot) | BUILD | HIGH |
| Competing aqueous reactions (I⁻ vs water; Cl₂ vs O₂) | grouped bars theoretical+overpotential per candidate; lowest wins; shows both potential-decides and overpotential-flips | svg-primitives | REUSE: Voltage-demand bars | HIGH |
| Galvanic vs electrolytic contrast | both cell schematics side by side, flipped polarity | svg-primitives | REUSE: cell schematics | MED |
| Electroplating / applications | object (cathode) gaining film, active anode dissolving | svg-primitives | REUSE: Electrolytic cell schematic | MED |
| Faraday's second law / equivalent weight | relative slopes = equivalent weights (Ag vs Cu) | mafs | REUSE: Faraday mass-charge plot | LOW |
| Recaps / connects | prose bridges | — | **HALT** recap prose | LOW |
| Constants/procedure/industrial tables | reference tables | — | **HALT** reference tables | LOW |

---

# UNIT 08 — Transition Metal & Coordination Chemistry

## coordination-and-transition-metal-chemistry.jsx
d-block trends, complexes/nomenclature, geometry/isomerism, crystal field theory, spectrochemical series, color, magnetism, LFSE. **Currently: 1 viz** (`CrystalFieldSplittingDiagram`, octahedral vs tetrahedral ladder).

| Concept | Viz | Engine | Verdict | Priority |
|---|---|---|---|---|
| Coordination geometries (CN 2/4/6) | Real rotatable 3D polyhedra (linear, tetrahedral, square-planar, octahedral, TBP), honest angles | molstar | BUILD | HIGH |
| Isomerism (cis/trans, fac/mer, optical Λ/Δ) | Paired 3D structures; chirality reads only in 3D | molstar | BUILD | HIGH |
| Spectrochemical series Δ_oct | horizontal bar chart of 7 tabulated experimental values (9,400→35,000 cm⁻¹) | observable-plot | BUILD | HIGH |
| Double-hump hydration/lattice enthalpy vs dⁿ (LFSE) | enthalpy vs d-count with d⁰/d⁵/d¹⁰ reference line; deviation=LFSE | observable-plot | BUILD | HIGH |
| Octahedral vs tetrahedral splitting | Δ_o/Δ_t ladder with barycentre, spin arrows | svg-primitives | REUSE: CrystalFieldSplittingDiagram | — |
| Square-planar splitting | d-level ordering derived by removing axial ligands | svg-primitives | BUILD | MED |
| d-orbital lobe orientation | 2D cross-section lobes vs ligand axes | svg-primitives | BUILD | MED |
| High-spin vs low-spin d⁶ | t₂g/e_g box diagram, unpaired count | svg-primitives | BUILD | MED |
| CFSE vs dⁿ | computed bar/line in Δ_o units, HS & LS | observable-plot / mafs | BUILD | MED |
| Δ_o = N_A·hc/λ | Δ_o vs wavelength curve, mark [Ti(H₂O)₆]³⁺ at 510 nm | mafs | BUILD | MED |
| Real UV-Vis of [Ti(H₂O)₆]³⁺ | representative absorbance vs λ, single d-d band | observable-plot | BUILD | MED |
| d-d vs charge-transfer intensity | representative UV-Vis, weak d-d + intense LMCT (log-ε) | observable-plot | BUILD | MED |
| Spin-only moment μ=√(n(n+2)) | computed μ vs n step plot | mafs | BUILD | MED |
| Irving-Williams series | log K_f vs metal, peak at Cu²⁺ | observable-plot | BUILD | MED |
| Jahn-Teller distortion (d⁹) | e_g splitting ladder; optional 3D elongated octahedron | svg-primitives (+ molstar opt) | BUILD | LOW |
| Complementary-color wheel | absorbed↔perceived color | — | **HALT** decorative color, un-representable in monochrome (honest version IS the absorption plot) | — |

## instrumental-analysis-and-spectroscopy.jsx
EM spectrum, Beer-Lambert, spectrometer, rotational/vibrational/electronic spectroscopy, NMR, EPR, organometallic IR/NMR. **Highest-value spectroscopy target in the codebase. Currently: no viz.**

| Concept | Viz | Engine | Verdict | Priority |
|---|---|---|---|---|
| Beer-Lambert A=εcl | computed linear A-vs-c + exponential T-vs-c calibration | mafs | BUILD | HIGH |
| Rigid rotor + microwave spectrum | energy levels + equally-spaced (2B̃) line comb (CO) | observable-plot | BUILD | HIGH |
| Harmonic vs Morse potential | both V(r) curves with quantized levels; Morse converges to D_e | mafs | BUILD | HIGH |
| Anharmonicity + Birge-Sponer | ΔG̃ vs (v+1) straight line, x-intercept=v_diss, area=D₀ (I₂) | mafs/observable-plot | BUILD | HIGH |
| Vibration-rotation P/Q/R branches | HCl stick spectrum around band center, missing Q gap | observable-plot | BUILD | HIGH |
| Franck-Condon progression | two offset potential curves, vertical transition, FC-factor bars | mafs + observable-plot | BUILD | HIGH |
| Chromophores π*←π vs π*←n | acetone UV-Vis: strong 190 nm + weak 280 nm | observable-plot | BUILD | HIGH |
| Fluorescence vs phosphorescence | Jablonski diagram S₀/S₁/T₁ with abs, IC, ISC, radiative arrows | svg-primitives | BUILD | HIGH |
| Chemical shift ¹H spectrum | representative ethanol spectrum on δ/ppm axis, integration | observable-plot | BUILD | HIGH |
| Spin-spin coupling / multiplets | ethanol triplet+quartet stick patterns (1:2:1 / 1:3:3:1) | observable-plot | BUILD | HIGH |
| Pulse NMR FID → FT | S(t)=cos·e^{−t/T₂} and its Lorentzian FT | mafs/observable-plot | BUILD | HIGH |
| EPR g-value + hyperfine | methyl-radical derivative spectrum, four lines 1:3:3:1 | observable-plot | BUILD | HIGH |
| EM spectrum regions ↔ transitions | log-wavelength strip, labeled bands + molecular motion | svg-primitives | BUILD | MED |
| Centrifugal distortion | stick spectrum with −D̃_J correction vs rigid comb | observable-plot | BUILD | MED |
| Rotational Raman ΔJ=0,±2 | S-branch stick spectrum shifted from Rayleigh | observable-plot | BUILD | MED |
| Normal modes 3N−6/3N−5 | CO₂ atom displacement-vector diagrams | svg-primitives | BUILD | MED |
| Doppler vs lifetime broadening | Gaussian vs Lorentzian at equal FWHM | mafs | BUILD | MED |
| NMR Zeeman / Larmor | m_I state energies diverging linearly with B₀ | mafs | BUILD | MED |
| Karplus equation ³J(φ) | ³J vs dihedral, mark α-helix/β-sheet | mafs | BUILD | MED |
| T₁/T₂ relaxation | M_z recovery (1−e^{−t/T₁}) and M_xy decay | mafs | BUILD | MED |
| Metal carbonyl IR | ν(CO) band positions vs free CO 2143 cm⁻¹ | observable-plot | BUILD | MED |
| Spectrometer / Michelson layout | block schematic source→interferometer→sample→detector | elk-xyflow or svg-primitives | BUILD | MED |
| Nuclear-spin statistics 3:1 (H₂) | rotational stick spectrum with 3:1 alternation | observable-plot | BUILD | LOW |
| 4-level laser / population inversion | energy-level scheme with pump/relax/lasing arrows | svg-primitives | BUILD | LOW |
| Transition dipole moment ⟨ψ_f\|μ̂\|ψ_i⟩ | abstract integral | — | **HALT** no honest viz (abstract operator) | — |
| Character tables / symmetry-species rules | reference tables | — | **HALT** tabular reference | — |

## qualitative-and-quantitative-analysis.jsx
Titration stoichiometry, redox titration, combustion analysis, titration curves/indicators, solubility equilibria, selective precipitation, complex-ion solubility, cation group scheme. **Currently: no viz.**

| Concept | Viz | Engine | Verdict | Priority |
|---|---|---|---|---|
| Cation group separation scheme | branching decision tree: HCl → H₂S low-pH → H₂S high-pH, confirmatory leaves | elk-xyflow | BUILD | HIGH |
| Titration curves (strong/weak/polyprotic) | computed pH vs volume showing SP, buffer region, half-eq pKa | mafs | BUILD | HIGH |
| Indicator selection pK_In≈pH_SP±1 | labeled pH-range bands overlaid on computed curve | mafs + svg | BUILD | HIGH |
| Selective precipitation window | [ion] remaining vs [OH⁻]; Mg(OH)₂ onset far below Ca(OH)₂ | mafs | BUILD | MED |
| Complex-ion solubility (AgCl in NH₃) | molar solubility vs [NH₃], ~350× pure water | mafs | BUILD | MED |
| H₂S [S²⁻] vs pH | [S²⁻] vs pH tying Group II/III cutoffs to acidity | mafs | BUILD | MED |
| Combustion analysis mass balance | schematic sample+O₂ → CO₂ trap + H₂O trap → C/H/O | elk-xyflow or svg | BUILD | MED |
| Titration/redox stoichiometry (5:1) | pure arithmetic | — | **HALT** worked example, not a viz | — |

---

# UNIT 09 (analytical) — covered above (instrumental + qual/quant)

# UNIT 10 — Industrial & Sustainable Chemistry

## industrial-synthesis-processes.jsx
23-section survey: steam reforming, Downs/chloralkali, Bayer/Hall-Héroult, Frasch/Claus/Contact, Haber/Ostwald, d-block extraction, batteries, catalysis, corrosion, materials. **Currently: no viz.**

| Concept | Viz | Engine | Verdict | Priority |
|---|---|---|---|---|
| Haber process (+recycle) | Haber loop: reactants→compressor→Fe bed→NH₃ condenser→recycle; real conditions | elk-xyflow | BUILD | HIGH |
| Haber yield vs T and P | equilibrium NH₃ fraction from Kp(T) via van't Hoff; family of P curves; 400–500°C compromise | observable-plot | BUILD | HIGH |
| Ostwald process (3-step) | NH₃+O₂→(Pt/Rh)NO→NO₂→absorb→HNO₃, NO recycle | elk-xyflow | BUILD | HIGH |
| Contact process | S→SO₂→V₂O₅ 450°C→SO₃→oleum→H₂SO₄ | elk-xyflow | BUILD | HIGH |
| Claus process (staged) | 2H₂S+SO₂→3S 300→250→200°C, condensers between stages | elk-xyflow | BUILD | HIGH |
| Bayer + Hall-Héroult | bauxite→NaOH digest→precipitate→calcine→alumina→cryolite electrolysis→Al | elk-xyflow | BUILD | HIGH |
| Equilibrium vs kinetics trade-off | yield-rate crossover: equilibrium yield (falling) + rate (rising) vs T, optimum band | mafs | BUILD | HIGH |
| Catalyst lowers Ea (Haber/steam-reform/general) | reaction coordinate with/without catalyst | svg-primitives | REUSE: CatalystEnergyViz | HIGH |
| Steam reforming + water-gas shift | CH₄+H₂O→(Ni)CO+3H₂→+H₂O→(Fe,Cu)CO₂+H₂; two-temperature shift | elk-xyflow | BUILD | MED |
| Contact SO₃ conversion vs T | conversion falls with T; catalyst floor ~400°C; from Kp(T) | observable-plot | BUILD | MED |
| V₂O₅ catalytic cycle | cyclic +5⇌+4: V₂O₅ oxidises SO₂→SO₃, O₂ re-oxidises V | elk-xyflow | BUILD | MED |
| Downs cell | labelled cell: steel cathode (Na), graphite anode (Cl₂), gauze separator | svg-primitives | BUILD | MED |
| Chloralkali membrane cell | anode/cathode compartments, Na⁺ membrane, Cl₂/H₂/NaOH products | svg-primitives | BUILD | MED |
| Carbon allotropes | 3D diamond/graphite/C₆₀ lattices explain conductivity/hardness | molstar | BUILD | MED |
| Silicate structure progression | SiO₄ tetrahedra sharing 0–4 corners; charge/Si drops | svg-primitives | BUILD | MED |
| Zone refining (k<1) | computed impurity profile along rod after n passes | observable-plot | BUILD | MED |
| Lanthanoid contraction (Zr≈Hf) | radius vs Z across lanthanoids | observable-plot | BUILD | MED |
| Catalytic converter (three-way) | HC/CO/NOₓ→Rh/Pt-Pd→N₂/CO₂/H₂O, λ-sensor feedback | elk-xyflow | BUILD | MED |
| Cisplatin / carboplatin | 2D structures, cis-[PtCl₂(NH₃)₂] vs slower leaving group | rdkit | BUILD | MED |
| Corrosion / cathodic protection | Zn anode vs Fe cathode on E° scale, e⁻ flow at scratch | svg-primitives | BUILD | MED |
| Fractional distillation of air | N₂/Ar/O₂/Kr/Xe on temperature axis, separation order | svg-primitives | BUILD | LOW |
| Lead-acid battery | Pb/PbO₂ in H₂SO₄, both→PbSO₄, reversible arrows | svg-primitives | BUILD | LOW |
| LiCoO₂/graphite intercalation | layered shuttle, reversible Li⁺ insertion | molstar | BUILD | LOW |
| Silicone polysiloxane synthesis | 2D hydrolysis/condensation R₂SiCl₂→chain; di/tri crosslinking | rdkit | BUILD | LOW |
| Inert pair / relativistic; diagonal relationships | qualitative trends | — | **HALT** qualitative, text-only (6s contraction not simulable) | — |
| H₂ economy vision; uses lists | descriptive/applications | — | **HALT** descriptive, no viz | — |
| d-block oxidation-state trends; extraction taxonomy | comparative prose/table | — | **HALT** qualitative classification | — |

## green-and-sustainable-chemistry.jsx
Green-chemistry philosophy, atom economy, supercritical CO₂, renewable fuels, fuel cells, hazardous-waste reduction. **Currently: no viz.** Honest value concentrates in computed metrics + CO₂ phase diagram; framing/policy is text.

| Concept | Viz | Engine | Verdict | Priority |
|---|---|---|---|---|
| Atom economy — three routes to but-2-ene | AE% bars per route (30.8/33.4/30.5%) from molar masses; product vs waste split | observable-plot | BUILD | HIGH |
| Supercritical CO₂ | P-T phase diagram, solid/liquid/gas boundaries + supercritical region above 31°C/73 atm | mafs | BUILD | HIGH |
| % yield vs atom economy | grouped bars AE% beside %yield (79/75/64%); two independent axes | observable-plot | BUILD | MED |
| Specific enthalpy of fuels | bars kJ/g (H₂ 142, CH₄ 55, ethanol 29.7, glucose 15.59) | observable-plot | BUILD | MED |
| Fuel-cell schematics | anode/cathode/electrolyte with ion carrier (OH⁻ vs H⁺), e⁻ flow | svg-primitives | BUILD | MED |
| Biomass rate gap (5-million-fold) | log-scale bars stored/useful/consumption kJ/yr | observable-plot | BUILD | LOW |
| Engine vs fuel-cell efficiency | **honest flow is a Sankey (d3-sankey not in chem stack) — cap at a plain efficiency bar, do not fake a flow** | svg-primitives | BUILD (degraded) | LOW |
| Green chemistry / SD definitions; "when to use" mindset | philosophy/policy | — | **HALT** qualitative/policy, text-only | — |
| Renewable fuels narrative | descriptive process/pros-cons (quantitative slice covered by specific-enthalpy) | — | **HALT** descriptive | — |
| Reducing hazardous waste / H₂O₂ oxidant | redox equations (LaTeX), greenness qualitative | — | **HALT** qualitative | — |

---

## HALT register (concepts that must stay text — no honest viz)

| Topic | Concept | Reason |
|---|---|---|
| atomic-structure | Nucleon count / isotope notation | label, computes nothing |
| atomic-structure | Periodic-table history | history |
| structure-and-bonding | Metallic electron-sea | needs band structure (outside chem stack) |
| structure-and-bonding | Polarizability | no honest browser viz at this level |
| kinetics | Collision orientation factor | qualitative |
| kinetics | Molecularity/elementary-step table | table suffices |
| equilibrium | ICE-table procedure; Kc/Kp/Kx algebra | procedural/algebraic |
| acids-and-bases | Acid rain / environment | prose |
| solubility | Ksp dynamic-equilibrium schematic | decorative |
| redox | Cell notation; oxidation-state balancing; batteries table | convention/text/table |
| electrolysis | Recaps; constants/procedure/industrial tables | prose/reference |
| coordination | Complementary-color wheel | color, un-representable in monochrome |
| spectroscopy | Transition dipole moment; character tables | abstract integral / reference table |
| qual/quant | Titration & redox stoichiometry arithmetic | worked example |
| industrial | Inert-pair/relativistic; diagonal relationships; H₂-economy vision; uses lists; extraction taxonomy | qualitative/descriptive |
| green | Philosophy/policy; renewable-fuels narrative; hazardous-waste reduction | qualitative/policy |

**Note:** every HALT above is a *no-honest-viz* case (prose/table/abstract), NOT a missing-engine case. No concept in general-chemistry triggers an engine-gap HALT — the approved chemistry stack (`molstar`, `rdkit`, `observable-plot`) plus platform primitives covers everything that can be honestly visualized.

## Two authenticity landmines flagged repeatedly

1. **Orbital / MO / hybrid shapes** (Units 1, 2, 8) — must be **real isosurfaces** (molstar, from precomputed hydrogenic/LCAO cubes) or honest 2D ψ² contours. A hand-drawn dumbbell/lobe is the decorative lie; flag any such `svg` as HALT.
2. **Curves that must be computed, not drawn** — titration curves, speciation, Nernst, van't Hoff, Haber yield, Born-Mayer wells, spectra. All must be driven by the real governing equation / representative data, never a hand-shaped S-curve or squiggle.

## Priority rollup (BUILD items, excluding REUSE/HALT)

- **HIGH:** ~55 viz — the conceptual pillars, almost all currently unvisualized.
- **MED:** ~70 viz.
- **LOW:** ~35 viz.
- **Biggest single-topic gaps:** `instrumental-analysis-and-spectroscopy` (spectroscopy, ~25 viz, zero present), `atomic-structure` (~35 concepts, zero present), `industrial-synthesis-processes` (process-flow library, zero present), and the whole rate-law half of `chemical-kinetics`.
