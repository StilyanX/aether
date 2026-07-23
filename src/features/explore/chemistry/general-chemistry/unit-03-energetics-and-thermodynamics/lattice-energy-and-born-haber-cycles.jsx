import { LearningTemplate } from '../../../../../components/learning/learning-template'
import {
  BornHaberViz,
  CoulombIonPairViz,
  LatticeCovalencyViz,
  LatticeEnergyTrendViz,
  MadelungChainViz,
  MadelungConstantsViz
} from '../../../../../components/viz'

export default function LatticeEnergyAndBornHaberCycles() {
  const config = {
    cssPrefix: 'chem-lattice-energy',
    documentTitle: 'Lattice Energy and Born-Haber Cycles - AETHER',
    learning: {
      category: 'Unit 3',
      groupTitle: 'Energetics and Thermodynamics',
      title: 'Lattice Energy and Born-Haber Cycles',
      subtitle:
        "Lattice energy quantifies the electrostatic stability of ionic solids, and the Born-Haber cycle connects it to measurable gas-phase energies through Hess's law.",
      sections: [
        <>
          <div className="lrn-header">
            <h2>What an Ionic Solid Is</h2>
          </div>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              You dissolve NaCl in water and the solid disappears. Where did the ionic bonds go?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                Water molecules pull the individual ions away from the crystal. The electrostatic
                attractions do not disappear. They transfer from ion-to-ion contacts inside the
                crystal to ion-to-water contacts in solution.
              </p>
            </details>
          </div>
          <p>
            An ionic solid is a crystal built from positive and negative ions held together by
            electrostatic attraction, the pull between opposite electric charges. Common examples
            are table salt (NaCl) and lime (CaO). The ions arrange in repeating patterns that extend
            through the entire crystal. You can think of the bonding as a global feature of the
            whole crystal, not just a bond between two neighboring atoms.
          </p>
          <p>
            Ionic bonding forms when a metal gives electrons to a nonmetal. Only metals with low
            enough ionization energies can do this. The energy you spend pulling electrons away from
            the metal and attaching them to the nonmetal is paid back by the strong attraction
            between the resulting ions. When millions of ions pack together, every ion pulls on all
            its oppositely charged neighbors at once. The total energy released is far larger than
            any single pair gives, and that is what drives ionic solids to form.
          </p>
        </>,

        <>
          <div className="lrn-header">
            <h2>Ionic Crystal Structures and the Radius Ratio</h2>
          </div>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              A chemist has an ionic compound where the cation is much smaller than the anion. What
              structure type should she expect, and why?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                When the cation is very small, it fits inside a shell of fewer anions. The
                sphalerite structure, with each ion surrounded by only 4 opposite-charge ions, fits
                a small cation best. A large cation would need more neighbors and prefer the CsCl
                structure.
              </p>
            </details>
          </div>
          <p>
            {`Before calculating any energies, you need to know how the ions are arranged. The
            structure type depends on the ratio of ionic radii. This ratio is called the radius
            ratio $\\gamma$:`}
          </p>
          <p className="lrn-eq lrn-eq-hero">
            {`$$\\gamma = \\frac{r_{\\text{smaller}}}{r_{\\text{larger}}}$$`}
          </p>
          <p>
            {`Each structure has a coordination number written as a pair, like (6,6). The first
            number is how many anions touch each cation; the second is how many cations touch each
            anion. Three common structures are:`}
          </p>
          <ul className="lrn-list">
            <li>
              <strong>Caesium chloride (CsCl):</strong>
              {` Each ion is surrounded by 8 ions of the opposite sign. Written as (8,8)-coordinate.`}
            </li>
            <li>
              <strong>Rock salt (NaCl):</strong>
              {` Each ion is surrounded by 6. Written as (6,6)-coordinate.`}
            </li>
            <li>
              <strong>Sphalerite (zinc blende, ZnS):</strong>
              {` Each ion is surrounded by 4. Written as (4,4)-coordinate.`}
            </li>
          </ul>
          <p>
            {`The bonding unit derives the cutoffs from packing geometry. Use them as a quick guide.
            When $\\gamma > 0.732$, the CsCl structure forms. When $0.414 < \\gamma < 0.732$, the
            rock salt structure forms. When $\\gamma < 0.414$, sphalerite forms.`}
          </p>
          <p>
            {`Work an example. For NaCl, $\\text{Na}^+$ has radius 102 pm and $\\text{Cl}^-$ has
            radius 181 pm. So $\\gamma = 102/181 \\approx 0.56$. That lands between 0.414 and 0.732,
            so NaCl should take the rock salt structure with each ion touching 6 of the opposite
            charge. It does.`}
          </p>
          <p>
            {`The structure type matters because it fixes the `}
            <strong>Madelung constant</strong>
            {`, a number set by the crystal shape that says how much energy the packing gains. You
            meet it in full a few sections from now. For each structure above it has a fixed value,
            and a larger value means a more stable crystal.`}
          </p>
          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>
              Why does coordination number increase when the cation-to-anion size ratio increases?
            </p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                A larger cation occupies more space in the center of the coordination shell. More
                anions can fit around it without touching each other. A small cation rattles inside
                a shell of 8 anions. Reducing the coordination number shrinks the shell until the
                ions are in contact and the structure is stable.
              </p>
            </details>
          </div>
          <div className="lrn-callout">
            <strong>Limitations:</strong> The radius ratio rule is a guide, not a law. Ionic radii
            values are not known exactly. Deviations often signal some covalent character in the
            bonding.
          </div>
        </>,

        <>
          <div className="lrn-header">
            <h2>Defining Lattice Energy and Lattice Enthalpy</h2>
          </div>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              You separate the ions of MgO from a crystal into a gas of free ions. Do you expect to
              put energy in or get energy out?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                You must put energy in. The ions in the crystal attract each other strongly. Pulling
                them apart to large distances requires work against those attractions. The process
                is always endothermic.
              </p>
            </details>
          </div>
          <p>
            <strong>Lattice energy</strong> measures the stability of an ionic solid. It is the
            change in potential energy when ions go from being packed in a solid to being widely
            separated as a gas. You always put energy in to separate the ions, so lattice energy is
            always positive.
          </p>
          <p>
            {`Formally, the lattice enthalpy $\\Delta H_L$ is the standard molar enthalpy change, the
            heat change for one mole measured under standard conditions, for the process:`}
          </p>
          <p className="lrn-eq">
            {`$$\\text{MX(s)} \\rightarrow \\text{M}^+\\text{(g)} + \\text{X}^-\\text{(g)}$$`}
          </p>
          <p>{`This process is endothermic. $\\Delta H_L > 0$ always.`}</p>
          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>
              {`The theoretical calculation gives a minimum potential energy $E_{p,\\text{min}}$,
              which is negative (the crystal is more stable than separated ions). The lattice energy
              is $-E_{p,\\text{min}}$, which is positive. Do not confuse the sign of the potential
              energy with the sign of the lattice energy.`}
            </p>
            <p>
              {`At $T = 0$, lattice enthalpy and lattice energy are exactly equal. At room
              temperature they differ by only a few kJ/mol. This difference is small compared to
              typical lattice energies (hundreds to thousands of kJ/mol), so we treat them as
              identical in practice.`}
            </p>
          </div>
        </>,

        <>
          <div className="lrn-header">
            <h2>Coulomb Potential Energy of an Ion Pair</h2>
          </div>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              You double the charge on both ions in a crystal while keeping the distance the same.
              How does the Coulomb energy change?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                {`The Coulomb energy scales as the product of the charges. Doubling both charges
                multiplies the product by $2 \\times 2 = 4$. The energy becomes four times larger.`}
              </p>
            </details>
          </div>
          <p>
            {`The simplest model starts with just two ions. The Coulomb potential energy between two
            ions with charges $z_1 e$ and $z_2 e$ separated by distance $r_{12}$ is:`}
          </p>
          <p className="lrn-eq lrn-eq-hero">
            {`$$E_{p,12} = \\frac{z_1 z_2 e^2}{4\\pi\\varepsilon_0 r_{12}}$$`}
          </p>
          <CoulombIonPairViz />
          <p>
            {`Here $e$ is the elementary charge, the charge on a single proton. And
            $\\varepsilon_0$ is the permittivity of free space, a fixed number that sets how
            strongly charges interact in empty space. For a cation and anion, $z_1$ and $z_2$ have
            opposite signs, so $E_{p,12}$ is negative. The two ions are more stable together than
            apart.`}
          </p>
          <p>
            {`A larger charge magnitude (e.g., $\\text{Mg}^{2+}$ vs $\\text{Na}^+$) makes the
            energy more negative. A smaller separation also makes it more negative. Both effects
            increase lattice stability. Because the energy goes as $\\frac{1}{r}$, halving the
            distance doubles the attraction. That is why smaller ions build more stable crystals:
            they sit closer to their neighbors.`}
          </p>
        </>,

        <>
          <div className="lrn-header">
            <h2>From One Ion Pair to a Crystal: The 1D Ionic Solid</h2>
          </div>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              If you extend a chain of alternating ions to infinity, do you expect the total energy
              to be larger or smaller than just summing nearest-neighbor pairs? Why?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                The total energy is larger in magnitude than nearest-neighbor pairs alone. There are
                more opposite-charge neighbors than same-charge neighbors at the shortest distances.
                The net series converges to a value larger than just the first term.
              </p>
            </details>
          </div>
          <p>
            {`A real crystal has millions of ions. Consider a one-dimensional crystal: a chain of
            alternating $+$ and $-$ ions, each with charge $\\pm ze$, separated by distance $d$.`}
          </p>
          <h3>Summing the Coulomb Interactions</h3>
          <p>Pick one ion. Count outward in both directions:</p>
          <ul className="lrn-list">
            <li>
              {`Nearest neighbors (distance $d$, opposite charge): contribution
              $-\\frac{z^2e^2}{d}$ per pair, two neighbors.`}
            </li>
            <li>
              {`Next-nearest (distance $2d$, same charge): contribution $+\\frac{z^2e^2}{2d}$
              per pair, two neighbors.`}
            </li>
            <li>
              {`Next (distance $3d$, opposite charge): contribution $-\\frac{z^2e^2}{3d}$ per
              pair, two neighbors.`}
            </li>
          </ul>
          <p>Summing outward, the attractions and repulsions add and subtract in turn:</p>
          <p className="lrn-eq">
            {`$$E_p = -\\frac{z^2 e^2}{4\\pi\\varepsilon_0 d} \\cdot 2\\left(1 - \\frac{1}{2} + \\frac{1}{3} - \\frac{1}{4} + \\cdots\\right)$$`}
          </p>
          <p>
            {`That running total of shrinking plus-and-minus fractions settles down to a fixed value.
            Doubling it (for the two directions) gives a factor of $1.386$. For a mole of ion pairs,
            multiply by Avogadro's number $N_A$:`}
          </p>
          <p className="lrn-eq lrn-eq-hero">
            {`$$E_p = -\\frac{1.386 \\cdot N_A z^2 e^2}{4\\pi\\varepsilon_0 d}$$`}
          </p>
          <MadelungChainViz />
          <p>
            {`That factor $1.386$ is the Madelung constant for a 1D chain. A real 3D crystal packs
            more opposite-charge neighbors close in, so its factor is larger. The next section meets
            the Madelung constant in full.`}
          </p>
          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>Why does the series alternate in sign?</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                The ions alternate between positive and negative along the chain. Moving outward
                from a positive central ion, the first neighbor is negative (attractive, negative
                sign), the second is positive (repulsive, positive sign), and so on. The alternating
                charge pattern produces the alternating sign in the sum.
              </p>
            </details>
          </div>
        </>,

        <>
          <div className="lrn-header">
            <h2>The Madelung Constant</h2>
          </div>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              {`Rock salt has $A = 1.748$ and the 1D chain has $A = 1.386$. What does this tell you
              about the 3D structure vs a line of ions?`}
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                The 3D structure is more stable per ion pair. Three-dimensional geometry packs more
                opposite-charge neighbors close together before same-charge neighbors appear. The
                larger Madelung constant captures this extra stabilization.
              </p>
            </details>
          </div>
          <p>
            {`In three dimensions, the same logic applies but the geometry is more complex. The total
            molar Coulomb energy for any ionic crystal is:`}
          </p>
          <p className="lrn-eq lrn-eq-hero">
            {`$$E_p = -A \\cdot \\frac{N_A |z_A z_B| e^2}{4\\pi\\varepsilon_0 d}$$`}
          </p>
          <p>
            {`The number $A$ is called the `}
            <strong>Madelung constant</strong>
            {`. It encodes the geometry of the crystal lattice. It is always positive. A larger
            $A$ means a more stable lattice for the same ion charges and separation distance.`}
          </p>
          <table>
            <thead>
              <tr>
                <th>Structure</th>
                <th>Formula type</th>
                <th>{`$A$`}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Caesium chloride</td>
                <td>MX</td>
                <td>1.763</td>
              </tr>
              <tr>
                <td>Rock salt (NaCl)</td>
                <td>MX</td>
                <td>1.748</td>
              </tr>
              <tr>
                <td>Wurtzite</td>
                <td>MX</td>
                <td>1.641</td>
              </tr>
              <tr>
                <td>Sphalerite (ZnS)</td>
                <td>MX</td>
                <td>1.638</td>
              </tr>
              <tr>
                <td>{`Fluorite (MX$_2$)`}</td>
                <td>{`MX$_2$`}</td>
                <td>2.519</td>
              </tr>
              <tr>
                <td>{`Rutile (MX$_2$)`}</td>
                <td>{`MX$_2$`}</td>
                <td>2.408</td>
              </tr>
              <tr>
                <td>1D linear chain</td>
                <td>MX</td>
                <td>{`$2\\ln 2 = 1.386$`}</td>
              </tr>
            </tbody>
          </table>
          <MadelungConstantsViz />
          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">1D chain</span>
              <p>
                {`$A = 2\\ln 2 = 1.386$. Each ion has two nearest neighbors of opposite charge. Next
                same-charge neighbors appear immediately after. Less favorable ratio of attractive to
                repulsive terms.`}
              </p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">3D rock salt</span>
              <p>
                {`$A = 1.748$. Each ion has 6 nearest neighbors of opposite charge, then 12
                next-nearest of the same charge at $d\\sqrt{2}$. More opposite-charge neighbors
                before same-charge repulsion appears.`}
              </p>
            </div>
          </div>
        </>,

        <>
          <div className="lrn-header">
            <h2>Repulsion at Short Range: The Exponential Term</h2>
          </div>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              If the Coulomb attraction kept pulling ions together with no opposing force, what
              would happen to the crystal?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                The ions would collapse into each other. The equilibrium separation would be zero.
                Real crystals do not do this because electron clouds repel strongly at short range.
              </p>
            </details>
          </div>
          <p>
            The Coulomb model alone predicts that ions should collapse into each other: the energy
            gets more negative as separation approaches zero. This does not happen because electron
            clouds repel each other at short range. This repulsive energy rises steeply as ions get
            close.
          </p>
          <p>The repulsion is modeled as an exponential that shrinks fast as ions move apart:</p>
          <p className="lrn-eq">{`$$E_p^* = N_A C' e^{-d/d^*}$$`}</p>
          <p>
            {`Here $d^*$ is the range of the repulsion, taken to be `}
            <strong>34.5 pm</strong>
            {` for all ionic solids (found by fitting experiments), and $C'$ sets its strength. The
            repulsion grows rapidly as $d$ shrinks below the equilibrium separation, the resting
            distance between neighboring ions where the energy is lowest. You will not need a value
            for $C'$: the only repulsion number that reaches the final equation is $d^*$.`}
          </p>
          <p>
            The total potential energy is the Coulomb term plus this repulsive term. It passes
            through a minimum at the equilibrium ion separation.
          </p>
        </>,

        <>
          <div className="lrn-header">
            <h2>The Born-Mayer Equation</h2>
          </div>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              You increase the equilibrium separation in the Born-Mayer equation. Does the
              calculated lattice energy increase or decrease?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                The lattice energy decreases. A larger separation means weaker Coulomb attraction.
                Both the main Coulomb factor and the repulsion correction become smaller, but the
                dominant effect is the weakening attraction.
              </p>
            </details>
          </div>
          <p>
            Add the Coulomb attraction and the short-range repulsion together, then find the lowest
            point of that combined energy curve. The separation at that lowest point is the
            equilibrium separation. Reading the energy off at that point gives the{' '}
            <strong>Born-Mayer equation</strong> (the same result the bonding unit quotes):
          </p>
          <p className="lrn-eq lrn-eq-hero">
            {`$$E_{p,\\text{min}} = -A \\cdot \\frac{N_A |z_A z_B| e^2}{4\\pi\\varepsilon_0 d} \\cdot \\left(1 - \\frac{d^*}{d}\\right)$$`}
          </p>
          <p>
            {`This is the calculated (theoretical) lattice energy. The factor
            $\\left(1 - \\frac{d^*}{d}\\right)$ corrects for repulsion. It is always less than 1,
            so it makes the energy less negative than pure Coulomb attraction alone.`}
          </p>
          <p>
            {`For typical ionic separations around 200 pm, $d^*/d \\approx 34.5/200 \\approx 0.17$.
            So repulsion reduces the Coulomb attraction by about 17%. The repulsion also pushes the
            ions a little farther apart than pure attraction would.`}
          </p>
          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>Why do you subtract the repulsion correction factor from 1 rather than adding it?</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                {`The full Coulomb attraction (without repulsion) would give a larger negative energy.
                The repulsion term weakens this attraction. Multiplying by $(1 - d^*/d)$ where
                $d^*/d > 0$ gives a number less than 1, which reduces the Coulomb term. Subtracting
                from 1 ensures the correction always makes the energy less negative, not more.`}
              </p>
            </details>
          </div>
        </>,

        <>
          <div className="lrn-header">
            <h2>Trends in Lattice Energy</h2>
          </div>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>Compare NaCl and MgO. Which has the higher lattice energy, and why?</p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                {`MgO has a much higher lattice energy. It has doubly charged ions
                ($\\text{Mg}^{2+}$ and $\\text{O}^{2-}$) compared to singly charged ions in NaCl.
                The charge product $|z_Az_B|$ is 4 for MgO and 1 for NaCl. MgO also has smaller
                ions, so $d$ is smaller. Both effects multiply together.`}
              </p>
            </details>
          </div>
          <p>The Born-Mayer equation shows two main factors that control lattice energy:</p>
          <ol className="lrn-list">
            <li>
              <strong>Ion charge</strong>
              {` ($|z_A z_B|$): A larger product of charges gives a much larger lattice energy.
              This explains the enormous difference between NaCl and MgO.`}
            </li>
            <li>
              <strong>Ion size</strong>
              {` ($d$): Smaller ions sit closer together, giving a larger Coulomb attraction.`}
            </li>
          </ol>
          <p>Some measured lattice enthalpies:</p>
          <table>
            <thead>
              <tr>
                <th>Compound</th>
                <th>{`$\\Delta H_L$ (kJ/mol)`}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>NaF</td>
                <td>926</td>
              </tr>
              <tr>
                <td>NaBr</td>
                <td>752</td>
              </tr>
              <tr>
                <td>MgO</td>
                <td>3850</td>
              </tr>
              <tr>
                <td>MgS</td>
                <td>3406</td>
              </tr>
            </tbody>
          </table>
          <LatticeEnergyTrendViz />
          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">NaCl vs KCl (size effect)</span>
              <p>
                {`$\\text{Na}^+$ has radius 102 pm. $\\text{K}^+$ has radius 138 pm.
                $\\text{Cl}^-$ has radius 181 pm. NaCl has a smaller equilibrium separation, so
                its Coulomb interaction is stronger. NaCl: 787 kJ/mol. KCl: 717 kJ/mol.`}
              </p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">KCl vs MgO (charge effect)</span>
              <p>
                {`KCl: $|z_Az_B| = 1$, $\\Delta H_L = 717\\ \\text{kJ/mol}$. MgO:
                $|z_Az_B| = 4$, $\\Delta H_L = 3850\\ \\text{kJ/mol}$. The fourfold increase in
                charge product, combined with smaller ions, gives a factor of about 5.4.`}
              </p>
            </div>
          </div>
          <h3>Alkali Metal Halide Series</h3>
          <p>
            For potassium halides: KF 826, KCl 717, KI 645 kJ/mol. As the halide anion grows, the
            equilibrium separation increases and lattice energy decreases. For alkali metal iodides:
            LiI 759, NaI 700, KI 645, RbI 632, CsI 601 kJ/mol. As the cation grows, the equilibrium
            separation increases and lattice energy decreases. Both series confirm the
            {` $1/d$ dependence predicted by the Born-Mayer equation.`}
          </p>
          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>
              Ionic solids have high melting points because the strong electrostatic network holds
              ions in place. You need a lot of thermal energy to make the ions mobile enough to
              flow. Compounds with doubly charged ions (like MgO, melting point 2852°C) have far
              higher melting points than singly charged ones (like NaCl, 801°C) because
              {` $|z_Az_B|$ is four times larger.`}
            </p>
          </div>
        </>,

        <>
          <div className="lrn-header">
            <h2>Why Ionic Solids Are Brittle</h2>
          </div>
          <p>
            Ionic solids shatter rather than bend. When you apply a shear force, a sideways push
            that slides one layer over another, one plane of ions slides past an adjacent plane.
            After slipping by one unit, same-charge ions come face-to-face. The strong repulsion
            between them causes the crystal to split rather than flow. This brittleness is a direct
            consequence of the rigid alternating-charge arrangement.
          </p>
          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Ionic solid</span>
              <p>
                Ions locked in place by electrostatic forces. Shear shifts same-charge ions
                together. Repulsion causes fracture. The solid shatters.
              </p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Metal</span>
              <p>
                Electron sea has no directional bonds. Planes of atoms slide without creating
                same-charge contacts. The metal bends and stretches.
              </p>
            </div>
          </div>
        </>,

        <>
          <div className="lrn-header">
            <h2>The Born-Haber Cycle: Concept and Purpose</h2>
          </div>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              You know the standard enthalpy of formation of KCl and all the gas-phase energies
              except lattice enthalpy. How would you find lattice enthalpy?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                Use Hess's law. Write a cycle that connects lattice formation to formation from
                elements via a series of steps with known enthalpies. Set the sum around the cycle
                to zero and solve for the unknown lattice enthalpy.
              </p>
            </details>
          </div>
          <p>
            The Born-Haber cycle is a closed thermodynamic path. It connects the formation of an
            ionic solid from its elements to a sequence of measurable gas-phase steps. Hess's law
            says the sum of enthalpy changes around any closed cycle is zero.
          </p>
          <p>
            Use the Born-Haber cycle to find an unknown lattice enthalpy from known enthalpies, or
            to verify that the ionic model is valid for a given compound.
          </p>
          <p>The six steps for a 1:1 ionic solid MX are:</p>
          <div className="lrn-steps">
            <div className="lrn-step">
              <span className="lrn-step-title">Step 1: Sublimation of the metal</span>
              <p className="lrn-step-content">
                {`$\\text{M(s)} \\rightarrow \\text{M(g)}$, enthalpy
                $\\Delta H_{\\text{sub}} > 0$ (endothermic)`}
              </p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">Step 2: Bond dissociation of the nonmetal</span>
              <p className="lrn-step-content">
                {`Break the molecule into separate atoms.
                $\\frac{1}{2}\\text{X}_2\\text{(g)} \\rightarrow \\text{X(g)}$, enthalpy
                $\\Delta H_{\\text{diss}} > 0$ (endothermic)`}
              </p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">Step 3: Ionization of the metal atom</span>
              <p className="lrn-step-content">
                {`$\\text{M(g)} \\rightarrow \\text{M}^+\\text{(g)} + e^-$, ionization energy
                $I > 0$ (endothermic)`}
              </p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">Step 4: Electron attachment to the nonmetal</span>
              <p className="lrn-step-content">
                {`$\\text{X(g)} + e^- \\rightarrow \\text{X}^-\\text{(g)}$, electron affinity
                $E_a$ (negative for halogens, meaning energy is released)`}
              </p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">Step 5: Lattice formation from gaseous ions</span>
              <p className="lrn-step-content">
                {`$\\text{M}^+\\text{(g)} + \\text{X}^-\\text{(g)} \\rightarrow \\text{MX(s)}$,
                enthalpy $= -\\Delta H_L$ (exothermic)`}
              </p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">Step 6: Decomposition to close the cycle</span>
              <p className="lrn-step-content">
                {`$\\text{MX(s)} \\rightarrow \\text{M(s)} + \\frac{1}{2}\\text{X}_2\\text{(g)}$,
                enthalpy $= -\\Delta H_f^\\circ$ (reverse of formation)`}
              </p>
            </div>
          </div>
          <p>Closure by Hess's law:</p>
          <p className="lrn-eq">
            {`$$\\Delta H_{\\text{sub}} + \\Delta H_{\\text{diss}} + I - E_a - \\Delta H_L
            - \\Delta H_f^\\circ = 0$$`}
          </p>
          <p>Rearranging to find the lattice enthalpy:</p>
          <p className="lrn-eq lrn-eq-hero">
            {`$$\\Delta H_L = \\Delta H_{\\text{sub}} + \\Delta H_{\\text{diss}} + I
            - E_a - \\Delta H_f^\\circ$$`}
          </p>
          <BornHaberViz />
          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>
              Hess's law follows from conservation of energy. Enthalpy is a state function: its
              value depends only on the start and end states, never on the route taken. So the total
              enthalpy change depends only on where you start and finish, not the path. Any closed
              loop that returns to the starting state must sum to zero.
            </p>
          </div>
          <div className="lrn-callout">
            <strong>Electron affinity sign note:</strong>
            {` In most treatments, the electron affinity $E_a$ of chlorine is quoted as
            $+349$ kJ/mol, meaning 349 kJ/mol is released when Cl gains an electron. In the cycle
            above, this release subtracts from the total energy cost. Some sources define electron
            gain enthalpy as negative for exothermic. Always check which sign convention a source
            uses before substituting numbers.`}
          </div>
        </>,

        <>
          <div className="lrn-header">
            <h2>Born-Haber Cycle for KCl: Fully Worked</h2>
          </div>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              List all six energy terms for KCl before looking at the values. Which term do you
              expect to dominate the energy cost side, and which dominates the energy gain side?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                The ionization energy of K dominates the cost side. The lattice formation step
                dominates the energy gain side. The lattice formation releases more energy than all
                the endothermic steps combined, which is why KCl is a stable solid.
              </p>
            </details>
          </div>
          <table>
            <thead>
              <tr>
                <th>Step</th>
                <th>Process</th>
                <th>{`$\\Delta H$ (kJ/mol)`}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Sublimation of K</td>
                <td>{`$\\text{K(s)} \\rightarrow \\text{K(g)}$`}</td>
                <td>+89</td>
              </tr>
              <tr>
                <td>Bond dissociation</td>
                <td>{`$\\frac{1}{2}\\text{Cl}_2\\text{(g)} \\rightarrow \\text{Cl(g)}$`}</td>
                <td>+122</td>
              </tr>
              <tr>
                <td>Ionization of K</td>
                <td>{`$\\text{K(g)} \\rightarrow \\text{K}^+\\text{(g)} + e^-$`}</td>
                <td>+418</td>
              </tr>
              <tr>
                <td>Electron affinity of Cl</td>
                <td>{`$\\text{Cl(g)} + e^- \\rightarrow \\text{Cl}^-\\text{(g)}$`}</td>
                <td>-349</td>
              </tr>
              <tr>
                <td>Lattice formation</td>
                <td>{`$\\text{K}^+\\text{(g)} + \\text{Cl}^-\\text{(g)} \\rightarrow \\text{KCl(s)}$`}</td>
                <td>{`$-\\Delta H_L$`}</td>
              </tr>
              <tr>
                <td>Decomposition</td>
                <td>{`$\\text{KCl(s)} \\rightarrow \\text{K(s)} + \\frac{1}{2}\\text{Cl}_2\\text{(g)}$`}</td>
                <td>+437</td>
              </tr>
            </tbody>
          </table>
          <div className="lrn-steps">
            <div className="lrn-step">
              <span className="lrn-step-title">Step 1: Write the Hess's law closure</span>
              <p className="lrn-step-content">
                {`$$89 + 122 + 418 + (-349) + (-\\Delta H_L) + 437 = 0$$`}
              </p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">Step 2: Collect the known terms</span>
              <p className="lrn-step-content">{`$$89 + 122 + 418 - 349 + 437 = 717$$`}</p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">Step 3: Solve for the lattice enthalpy</span>
              <p className="lrn-step-content">
                {`$$717 - \\Delta H_L = 0 \\implies \\Delta H_L = +717\\ \\text{kJ/mol}$$`}
              </p>
            </div>
          </div>
          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>
              Why does the step that goes from KCl(s) to its elements contribute a positive enthalpy
              value, even though the formation of KCl is exothermic?
            </p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                Decomposition is the reverse of formation. Formation releases 437 kJ/mol
                (exothermic). Going the other direction, decomposition to elements requires 437
                kJ/mol. In the Born-Haber cycle you trace a complete closed path, so you include
                decomposition (not formation) to return to the starting elements. Reversing a
                reaction flips the sign of its enthalpy.
              </p>
            </details>
          </div>
        </>,

        <>
          <div className="lrn-header">
            <h2>NaCl Formation: An Implicit Born-Haber Cycle</h2>
          </div>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              Before you see the numbers, estimate which step costs more energy: pulling an electron
              off Na, or pushing one onto Cl?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                Pulling an electron off Na costs more. Ionization energy (removing an electron from
                a neutral atom) is always positive. Attaching an electron to Cl releases energy. The
                ionization step is the expensive one.
              </p>
            </details>
          </div>
          <p>Starting from gaseous Na and Cl atoms:</p>
          <div className="lrn-steps">
            <div className="lrn-step">
              <span className="lrn-step-title">Ion formation from gaseous atoms</span>
              <p className="lrn-step-content">
                {`Remove electron from Na(g): costs $+494\\ \\text{kJ/mol}$. Add electron to Cl(g):
                releases $-349\\ \\text{kJ/mol}$. Net to form $\\text{Na}^+$(g) and
                $\\text{Cl}^-$(g): $+494 - 349 = +145\\ \\text{kJ/mol}$.`}
              </p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">Lattice formation</span>
              <p className="lrn-step-content">
                {`$\\text{Na}^+\\text{(g)} + \\text{Cl}^-\\text{(g)} \\rightarrow \\text{NaCl(s)}$:
                releases $-787\\ \\text{kJ/mol}$.`}
              </p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">Net for Na(g) + Cl(g) to NaCl(s)</span>
              <p className="lrn-step-content">
                {`$+145 - 787 = -642\\ \\text{kJ/mol}$. The lattice formation step releases 787
                kJ/mol, far more than the 145 kJ/mol cost of ion formation. The strong pull between
                all the ions packed in the crystal outweighs the cost of making the individual
                ions.`}
              </p>
            </div>
          </div>
        </>,

        <>
          <div className="lrn-header">
            <h2>Born-Haber Cycle for CaO: Fully Worked</h2>
          </div>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>CaO has doubly charged ions. How does this change the cycle compared to KCl?</p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                CaO requires two ionization steps for Ca and two electron attachments for O. The
                second ionization of Ca costs more energy than the first. The second electron
                affinity of O is endothermic. These additional steps make the cycle more complex and
                the total energy cost much higher.
              </p>
            </details>
          </div>
          <table>
            <thead>
              <tr>
                <th>Step</th>
                <th>Process</th>
                <th>{`$\\Delta H$ (kJ/mol)`}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Sublimation of Ca</td>
                <td>{`$\\text{Ca(s)} \\rightarrow \\text{Ca(g)}$`}</td>
                <td>+178</td>
              </tr>
              <tr>
                <td>Ionization of Ca (IE1 + IE2)</td>
                <td>{`$\\text{Ca(g)} \\rightarrow \\text{Ca}^{2+}\\text{(g)} + 2e^-$`}</td>
                <td>+1735</td>
              </tr>
              <tr>
                <td>{`Bond dissociation of $\\frac{1}{2}\\text{O}_2$`}</td>
                <td>{`$\\frac{1}{2}\\text{O}_2\\text{(g)} \\rightarrow \\text{O(g)}$`}</td>
                <td>+249</td>
              </tr>
              <tr>
                <td>First electron affinity of O</td>
                <td>{`$\\text{O(g)} + e^- \\rightarrow \\text{O}^-\\text{(g)}$`}</td>
                <td>-141</td>
              </tr>
              <tr>
                <td>Second electron affinity of O</td>
                <td>{`$\\text{O}^-\\text{(g)} + e^- \\rightarrow \\text{O}^{2-}\\text{(g)}$`}</td>
                <td>+844</td>
              </tr>
              <tr>
                <td>Lattice formation</td>
                <td>{`$\\text{Ca}^{2+}\\text{(g)} + \\text{O}^{2-}\\text{(g)} \\rightarrow \\text{CaO(s)}$`}</td>
                <td>{`$-\\Delta H_L$`}</td>
              </tr>
              <tr>
                <td>Decomposition</td>
                <td>{`$\\text{CaO(s)} \\rightarrow \\text{Ca(s)} + \\frac{1}{2}\\text{O}_2\\text{(g)}$`}</td>
                <td>+635</td>
              </tr>
            </tbody>
          </table>
          <div className="lrn-steps">
            <div className="lrn-step">
              <span className="lrn-step-title">Step 1: Hess's law closure</span>
              <p className="lrn-step-content">
                {`$$178 + 1735 + 249 + (-141) + 844 + (-\\Delta H_L) + 635 = 0$$`}
              </p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">Step 2: Sum the known terms</span>
              <p className="lrn-step-content">{`$$178 + 1735 + 249 - 141 + 844 + 635 = 3500$$`}</p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">Step 3: Solve</span>
              <p className="lrn-step-content">
                {`$$3500 - \\Delta H_L = 0 \\implies \\Delta H_L = +3500\\ \\text{kJ/mol}$$`}
              </p>
            </div>
          </div>
          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>
              The second electron affinity of oxygen is +844 kJ/mol, meaning you must add energy to
              attach the second electron. Why does O2- still form in CaO?
            </p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                {`The lattice energy of CaO is 3500 kJ/mol. The enormous stabilization from packing
                doubly charged ions into a crystal completely pays for the +703 kJ/mol net cost of
                forming $\\text{O}^{2-}$ from neutral O. Compounds with $\\text{O}^{2-}$ can only
                exist when the lattice energy is large enough to offset this formation cost.`}
              </p>
            </details>
          </div>
          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">First electron affinity of O</span>
              <p>
                {`$\\text{O(g)} + e^- \\rightarrow \\text{O}^-\\text{(g)}$: releases
                141 kJ/mol. A neutral atom gains an electron and releases energy.`}
              </p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Second electron affinity of O</span>
              <p>
                {`$\\text{O}^-\\text{(g)} + e^- \\rightarrow \\text{O}^{2-}\\text{(g)}$:
                costs 844 kJ/mol. You push an electron onto an already-negative ion. Electron
                repulsion costs more than the nuclear attraction releases.`}
              </p>
            </div>
          </div>
        </>,

        <>
          <div className="lrn-header">
            <h2>Born-Haber Cycle for MgO: Student Exercise</h2>
          </div>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              MgO has the same O steps as CaO but different metal steps. Which term do you expect to
              differ most from the CaO cycle?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                The ionization energy of Mg differs from Ca. Mg has two valence electrons in the 3s
                orbital; Ca has two in 4s. Higher n means the electrons are held less tightly, so Ca
                has a lower ionization energy than Mg. The sublimation enthalpy also differs.
              </p>
            </details>
          </div>
          <table>
            <thead>
              <tr>
                <th>Step</th>
                <th>Process</th>
                <th>{`$\\Delta H$ (kJ/mol)`}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Sublimation of Mg</td>
                <td>{`$\\text{Mg(s)} \\rightarrow \\text{Mg(g)}$`}</td>
                <td>+15</td>
              </tr>
              <tr>
                <td>Ionization of Mg (IE1 + IE2)</td>
                <td>{`$\\text{Mg(g)} \\rightarrow \\text{Mg}^{2+}\\text{(g)} + 2e^-$`}</td>
                <td>+2188</td>
              </tr>
              <tr>
                <td>{`Bond dissociation of $\\frac{1}{2}\\text{O}_2$`}</td>
                <td>{`$\\frac{1}{2}\\text{O}_2\\text{(g)} \\rightarrow \\text{O(g)}$`}</td>
                <td>+249</td>
              </tr>
              <tr>
                <td>First electron affinity of O</td>
                <td>{`$\\text{O(g)} + e^- \\rightarrow \\text{O}^-\\text{(g)}$`}</td>
                <td>-141</td>
              </tr>
              <tr>
                <td>Second electron affinity of O</td>
                <td>{`$\\text{O}^-\\text{(g)} + e^- \\rightarrow \\text{O}^{2-}\\text{(g)}$`}</td>
                <td>+844</td>
              </tr>
              <tr>
                <td>Decomposition</td>
                <td>{`$\\text{MgO(s)} \\rightarrow \\text{Mg(s)} + \\frac{1}{2}\\text{O}_2\\text{(g)}$`}</td>
                <td>+602</td>
              </tr>
            </tbody>
          </table>
          <div className="lrn-callout">
            {`Apply Hess's law to find the lattice enthalpy for MgO. The decomposition step is the
            reverse of formation, so it contributes $-\\Delta H_f^\\circ = +602$ kJ/mol. Set the
            cycle sum to zero and solve.`}
          </div>
        </>,

        <>
          <div className="lrn-header">
            <h2>Experimental vs Calculated Lattice Energy</h2>
          </div>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              If a compound's Born-Haber lattice energy is much larger than the Born-Mayer
              prediction, what does this tell you about the bonding?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                The ionic model is incomplete. There is a covalent contribution to the bonding. The
                extra stability comes from electron sharing, which the simple Coulomb model does not
                account for.
              </p>
            </details>
          </div>
          <p>
            The Born-Mayer equation gives a theoretical (calculated) lattice energy. The Born-Haber
            cycle gives an experimental lattice energy. Comparing them tests the ionic model.
          </p>
          <LatticeCovalencyViz />
          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">When values agree</span>
              <p>
                The ionic model is valid. The bonding in the solid is well described as purely
                electrostatic between point charges. Example: MgO, where calculated is about 3840
                kJ/mol and experimental is about 3850 kJ/mol.
              </p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">When experimental exceeds calculated</span>
              <p>
                {`The ionic model is incomplete. Covalent bonding adds extra stabilization. Silver
                halides show this: $\\text{Ag}^+$ has d-electrons that provide less shielding,
                making it more polarizing and giving AgCl significant covalent character.`}
              </p>
            </div>
          </div>
          <div className="lrn-callout">
            <strong>Caution:</strong> Numerical agreement can be coincidental. Ionic radii values
            are not known exactly. Agreement should be treated as evidence for the ionic model, not
            proof.
          </div>
        </>,

        <>
          <div className="lrn-header">
            <h2>Covalent Character and Fajans' Rules</h2>
          </div>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>Compare NaF and AgI. Which compound should show more covalent character, and why?</p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                {`AgI. $\\text{Ag}^+$ has d-electrons that shield the nucleus less effectively
                than $\\text{Na}^+$'s s-electrons, making it more polarizing. $\\text{I}^-$ is
                much larger than $\\text{F}^-$, making it more polarizable. Both effects push AgI
                toward covalent character.`}
              </p>
            </details>
          </div>
          <p>
            Not all ionic compounds are purely ionic. Covalent character develops when a cation
            pulls the electron cloud of the anion toward itself. Two factors matter:
          </p>
          <ol className="lrn-list">
            <li>
              <strong>Polarizing power of the cation:</strong> Small, highly charged cations distort
              the anion most strongly. A high charge spread over a small radius means high
              polarizing power.
              {` For example, $\\text{Mg}^{2+}$ (charge 2, radius 72 pm) is far more polarizing than
              $\\text{Na}^+$ (charge 1, radius 102 pm).`}
            </li>
            <li>
              <strong>Polarizability of the anion:</strong> Polarizability is how easily an electron
              cloud is pulled out of shape. Large anions have loosely held outer electrons, so they
              distort easily and are highly polarizable.
            </li>
          </ol>
          <p>
            High polarizing power combined with high polarizability gives significant covalent
            character. These are Fajans' rules.
          </p>
          <p>
            Electronegativity measures how hard an atom pulls on shared electrons. When two atoms
            pull very unequally, electrons shift fully to one side and the bond is ionic. When they
            pull about evenly, electrons stay shared and the bond is covalent.
          </p>
          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Ionic character</span>
              <p>
                {`Large electronegativity difference ($|\\Delta\\chi| > 2$). Small,
                non-polarizing cation. Small, non-polarizable anion. Example: NaF with
                $|\\Delta\\chi| \\approx 3.1$.`}
              </p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Covalent character</span>
              <p>
                {`Small electronegativity difference ($|\\Delta\\chi| < 1.5$). Small, highly
                charged cation (high polarizing power). Large anion (high polarizability).
                Example: AgI.`}
              </p>
            </div>
          </div>
          <p>
            {`So a big electronegativity difference points to ionic bonding, and a small one points
            to covalent. The rough cutoff for predominantly ionic bonding is
            $|\\Delta\\chi| \\approx 2$.`}
          </p>
        </>,

        <>
          <div className="lrn-header">
            <h2>Why Only Metals Form Ionic Bonds</h2>
          </div>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              Carbon has a very high ionization energy. What does that tell you about whether C
              could form an ionic bond with fluorine?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                Carbon cannot form an ionic bond. Its ionization energy is too high. The energy cost
                of removing electrons from C would not be paid back by the lattice formation energy.
                Carbon and fluorine form covalent bonds instead.
              </p>
            </details>
          </div>
          <p>
            Only metals have ionization energies low enough for ionic bond formation to be
            energetically worthwhile. The energy spent on ionization is paid back by the large
            lattice formation energy. For nonmetals, ionization energies are too high for this
            trade-off to work.
          </p>
          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>
              The Born-Haber cycle makes this visible. For ionic solids to form spontaneously, the
              lattice formation enthalpy must exceed the total cost of sublimation, ionization, and
              bond dissociation. Metals have ionization energies in the range 400 to 2000 kJ/mol for
              the first one or two electrons. Nonmetals have much higher ionization energies. No
              lattice energy is large enough to compensate for removing multiple electrons from a
              nonmetal.
            </p>
          </div>
        </>
      ]
    },
    practice: [
      {
        q: 'What is lattice energy, and why is it always positive?',
        a: 'Lattice energy is the energy needed to separate the ions in one mole of an ionic solid into widely spaced gas-phase ions. You always put energy in to pull the ions apart from each other, so lattice energy is always positive (endothermic process).'
      },
      {
        q: 'Write the process that defines lattice enthalpy for MgO.',
        a: `MgO(s) $\\rightarrow$ Mg$^{2+}$(g) + O$^{2-}$(g). This is always endothermic, so $\\Delta H_L > 0$. The solid breaks apart into free gaseous ions, requiring energy to overcome the electrostatic attraction.`
      },
      {
        q: 'How do lattice energy and lattice enthalpy differ, and when can you treat them as equal?',
        a: `At $T = 0$ they are exactly equal. At room temperature they differ by only a few kJ/mol because of the PV correction for converting to standard state. Since typical lattice energies are hundreds to thousands of kJ/mol, the difference is negligible and we treat them as the same in practice.`
      },
      {
        q: `The Born-Mayer calculation for a compound gives $E_{p,\\text{min}} = -3840$ kJ/mol. What is the lattice energy?`,
        a: `The lattice energy is $+3840$ kJ/mol. $E_{p,\\text{min}}$ is the minimum potential energy (negative, because the crystal is more stable than separated ions). The lattice energy equals $-E_{p,\\text{min}}$, which is positive. Never confuse the sign of the potential energy with the sign of lattice energy.`
      },
      {
        q: `State the Coulomb potential energy between two ions with charges $z_1 e$ and $z_2 e$ separated by distance $r_{12}$.`,
        a: `$E_{p,12} = \\dfrac{z_1 z_2 e^2}{4\\pi\\varepsilon_0 r_{12}}$. For a cation-anion pair, $z_1$ and $z_2$ have opposite signs, making $E_{p,12}$ negative. A more negative value means the pair is more strongly bound together.`
      },
      {
        q: 'In the 1D ionic solid model, write down the first four terms of the alternating Coulomb series for one central ion, and identify what these terms represent.',
        a: `Starting from the central ion: $-z^2e^2/d$ (two nearest neighbors, opposite charge, distance $d$), $+z^2e^2/2d$ (two next-nearest, same charge, distance $2d$), $-z^2e^2/3d$ (two next-next neighbors, opposite, distance $3d$), $+z^2e^2/4d$ (same charge, distance $4d$). The signs alternate because the charges alternate along the chain.`
      },
      {
        q: `The alternating series $1 - 1/2 + 1/3 - 1/4 + \\cdots$ equals $\\ln 2$. Use this to write the molar Coulomb energy of a 1D ionic crystal.`,
        a: `Multiplying by 2 for both sides and by $N_A$ for a mole: $E_p = -\\dfrac{2\\ln 2 \\cdot N_A z^2 e^2}{4\\pi\\varepsilon_0 d}$. The factor $2\\ln 2 = 1.386$ is the Madelung constant for a 1D crystal. The negative sign shows the crystal is more stable than separated ions.`
      },
      {
        q: 'What is the Madelung constant, and what does a larger value mean for crystal stability?',
        a: `The Madelung constant $A$ is a positive dimensionless number that encodes the geometry of the crystal lattice. A larger $A$ means more stabilization for the same ion charges and separation distance. The 3D rock salt structure ($A = 1.748$) is more stable than a 1D chain ($A = 1.386$) because 3D geometry packs more opposite-charge neighbors close together.`
      },
      {
        q: 'Give the Madelung constants for rock salt, caesium chloride, and fluorite structures.',
        a: 'Rock salt (NaCl): A = 1.748. Caesium chloride (CsCl): A = 1.763. Fluorite: A = 2.519. Fluorite has the MX2 formula (two anions per cation), so each cation interacts with twice as many anions, giving a much larger A. CsCl beats rock salt slightly because its (8,8) coordination packs oppositely charged ions more efficiently.'
      },
      {
        q: `Write the Born-Mayer equation and identify each symbol.`,
        a: `$E_{p,\\text{min}} = -A \\cdot \\dfrac{N_A |z_A z_B| e^2}{4\\pi\\varepsilon_0 d} \\cdot \\left(1 - \\dfrac{d^*}{d}\\right)$. Here $A$ is the Madelung constant, $|z_A z_B|$ is the product of ion charge magnitudes, $d$ is the equilibrium ion separation, and $d^* = 34.5$ pm is a universal repulsion range constant. The factor $(1 - d^*/d)$ reduces the pure Coulomb attraction to account for short-range repulsion.`
      },
      {
        q: 'For a typical ionic separation of 200 pm, how large is the repulsion correction in the Born-Mayer equation?',
        a: `$d^*/d = 34.5/200 = 0.1725$, so the correction factor is $1 - 0.1725 = 0.8275$. Repulsion reduces the Coulomb attraction by about 17%. The Born-Mayer result is about 17% smaller than the pure Coulomb prediction.`
      },
      {
        q: `Two ionic compounds have the same crystal structure. Compound A has $|z_A z_B| = 1$ and $d = 280$ pm. Compound B has $|z_A z_B| = 4$ and $d = 210$ pm. Which has the higher lattice energy, and roughly how much larger?`,
        a: `Lattice energy is proportional to $|z_A z_B|/d$. Compound A: $1/280 = 3.57 \\times 10^{-3}$ pm$^{-1}$. Compound B: $4/210 = 1.90 \\times 10^{-2}$ pm$^{-1}$. Compound B is about 5.3 times larger. Both the fourfold charge product and the smaller separation multiply together.`
      },
      {
        q: `Explain why NaCl has a higher lattice energy than KCl, using specific ionic radii.`,
        a: `Na$^+$ radius is 102 pm; K$^+$ radius is 138 pm; Cl$^-$ radius is 181 pm. NaCl has a smaller equilibrium separation $d$ (Na$^+$ is 36 pm smaller than K$^+$). The Born-Mayer equation shows that smaller $d$ gives larger $|E_{p,\\text{min}}|$. Measured values: NaCl $\\approx 787$ kJ/mol, KCl $= 717$ kJ/mol.`
      },
      {
        q: 'Explain why LiCl (861 kJ/mol) has a higher lattice energy than RbCl (695 kJ/mol) even though they have the same crystal structure.',
        a: `Li$^+$ is much smaller than Rb$^+$. A smaller cation means a smaller equilibrium separation $d$ between the ions. From the Born-Mayer equation, lattice energy scales as $1/d$, so a smaller $d$ gives a larger lattice energy. The Cl$^-$ anion is the same in both, so cation size is the only variable.`
      },
      {
        q: 'Why does AgBr (903 kJ/mol) have a higher lattice energy than AgI (887 kJ/mol)?',
        a: `Both compounds have the same Ag$^+$ cation. Br$^-$ (radius 196 pm) is smaller than I$^-$ (radius 220 pm). The smaller anion means a smaller equilibrium separation, which gives a larger lattice energy according to the Born-Mayer equation. Anion size matters just as much as cation size.`
      },
      {
        q: 'The potassium halides have lattice energies: KF 826, KCl 717, KI 645 kJ/mol. Describe the trend and explain it.',
        a: `Lattice energy decreases from KF to KI. The anion size increases: F$^-$ is smallest, I$^-$ is largest. A larger anion increases the equilibrium separation $d$. Since lattice energy is proportional to $1/d$, a larger $d$ gives a smaller lattice energy.`
      },
      {
        q: 'The alkali metal iodides have lattice energies: LiI 759, NaI 700, KI 645, RbI 632, CsI 601 kJ/mol. Describe the trend and explain it.',
        a: `Lattice energy decreases as the cation gets larger (going down Group 1). The anion (I$^-$) stays the same. A larger cation increases $d$. Since lattice energy is proportional to $1/d$, lattice energy falls as cation size increases. Both series confirm the same underlying Coulomb principle.`
      },
      {
        q: 'List the six steps in a Born-Haber cycle for a 1:1 ionic solid MX and identify which are endothermic and which are exothermic.',
        a: `(1) Sublimation M(s)$\\rightarrow$M(g): endothermic. (2) Bond dissociation $\\frac{1}{2}$X$_2$(g)$\\rightarrow$X(g): endothermic. (3) Ionization M(g)$\\rightarrow$M$^+$(g)+e$^-$: endothermic. (4) Electron attachment X(g)+e$^-$$\\rightarrow$X$^-$(g): exothermic for halogens. (5) Lattice formation M$^+$(g)+X$^-$(g)$\\rightarrow$MX(s): exothermic (releases $\\Delta H_L$). (6) Decomposition MX(s)$\\rightarrow$M(s)+$\\frac{1}{2}$X$_2$(g): endothermic. The cycle closes to zero by Hess's law.`
      },
      {
        q: `Write the Hess's law equation for the Born-Haber cycle of KCl and solve for $\\Delta H_L$. Data: sublimation +89, bond dissociation +122, ionization +418, electron affinity $-349$, decomposition +437 kJ/mol.`,
        a: `Setting the cycle sum to zero: $89 + 122 + 418 + (-349) + (-\\Delta H_L) + 437 = 0$. Collecting known terms: $89 + 122 + 418 - 349 + 437 = 717$. So $717 - \\Delta H_L = 0$, giving $\\Delta H_L = +717$ kJ/mol. The dominant cost is ionization (+418); the dominant gain is lattice formation ($-717$).`
      },
      {
        q: `In the KCl cycle, the decomposition step contributes +437 kJ/mol. The formation enthalpy of KCl is $-437$ kJ/mol. Why is the sign flipped?`,
        a: `Decomposition is the reverse of formation. Formation releases 437 kJ/mol. Going the other way, decomposition to elements requires 437 kJ/mol. In the Born-Haber cycle you trace a complete closed path, so you include decomposition (not formation) to return to the starting elements. Reversing a reaction flips the sign.`
      },
      {
        q: `In the NaCl formation cycle, forming gaseous Na$^+$ and Cl$^-$ from gaseous atoms costs a net +145 kJ/mol. Why does the overall formation of NaCl still release energy?`,
        a: 'The lattice formation step releases 787 kJ/mol. This far exceeds the 145 kJ/mol cost of ion formation. The large electrostatic stabilization of all the ions together in the crystal outweighs the cost of creating the individual ions.'
      },
      {
        q: `Why does the Born-Haber cycle for CaO include two ionization energies for Ca and two electron affinities for O?`,
        a: `Ca forms Ca$^{2+}$ by losing two electrons: Ca$\\rightarrow$Ca$^+$ (IE$_1$) and Ca$^+$$\\rightarrow$Ca$^{2+}$ (IE$_2$). O forms O$^{2-}$ by gaining two electrons: O$\\rightarrow$O$^-$ (EA$_1$) and O$^-$$\\rightarrow$O$^{2-}$ (EA$_2$). Both steps for each ion are required to bring the ions to their actual charges in CaO. Skipping either step gives a wrong cycle.`
      },
      {
        q: `In the CaO cycle, the second electron affinity of O is +844 kJ/mol (endothermic). Explain why attaching the second electron costs energy.`,
        a: `O$^-$ already carries a negative charge. Pushing a second electron onto a negative ion requires overcoming the electrostatic repulsion between the incoming electron and the existing charge. The electron gain no longer releases energy; it costs energy. Net to form O$^{2-}$ from neutral O: $-141 + 844 = +703$ kJ/mol (endothermic overall).`
      },
      {
        q: `If the second electron affinity of O costs +844 kJ/mol, why does MgO (and CaO) still form?`,
        a: `The lattice energy of MgO is about $+3850$ kJ/mol and of CaO about $+3500$ kJ/mol. The enormous stabilization from packing doubly charged ions into a crystal completely pays for the +703 kJ/mol cost of forming O$^{2-}$. Compounds with O$^{2-}$ can only exist when the lattice energy is large enough to offset this cost.`
      },
      {
        q: `Use the Born-Haber cycle data for CaO to calculate $\\Delta H_L$. Data: sublimation Ca +178, ionization Ca$\\rightarrow$Ca$^{2+}$ +1735, dissociation $\\frac{1}{2}$O$_2$ +249, EA$_1$ O $-141$, EA$_2$ O$^-$ +844, $\\Delta H_f^\\circ$(CaO) $-635$ kJ/mol.`,
        a: `Decomposition step: $-\\Delta H_f^\\circ = +635$ kJ/mol. Cycle closure: $178 + 1735 + 249 - 141 + 844 - \\Delta H_L + 635 = 0$. Sum of known terms: 3500. So $\\Delta H_L = +3500$ kJ/mol.`
      },
      {
        q: `Calculate the lattice enthalpy of CaCl$_2$ from this data: sublimation of Ca +178, ionization Ca$\\rightarrow$Ca$^{2+}$ +1735, bond dissociation $\\frac{1}{2}$Cl$_2 \\rightarrow$ Cl +122 (per Cl atom), electron attachment to Cl $-349$ (per Cl atom), $\\Delta H_f^\\circ$(CaCl$_2$) $-795$ kJ/mol. Why are two of the steps doubled compared to the KCl cycle?`,
        a: `The formula has two chloride ions, so two steps are doubled. You need two chlorine atoms, so bond dissociation counts twice: $2 \\times 122 = +244$ kJ/mol. Each chlorine atom gains one electron, so electron attachment also counts twice: $2 \\times (-349) = -698$ kJ/mol. Sum of the upward steps: $178 + 1735 + 244 - 698 = 1459$. The decomposition step is $-\\Delta H_f^\\circ = +795$. Cycle closure: $1459 - \\Delta H_L + 795 = 0$, so $\\Delta H_L = +2254$ kJ/mol. The cycle must return to the start with zero net enthalpy, and every atom and electron must be counted: one Ca loses two electrons, and two separate Cl atoms each gain one.`
      },
      {
        q: 'What does it mean when the experimental Born-Haber lattice energy is higher than the Born-Mayer calculated value?',
        a: 'It means the ionic model underestimates the actual binding strength. The extra stabilization comes from covalent bonding: electrons are partially shared between ions rather than fully transferred. The Born-Mayer equation assumes pure ionic point charges, so it misses this contribution.'
      },
      {
        q: `MgO has Born-Haber $\\Delta H_L \\approx 3850$ kJ/mol and Born-Mayer $E_{p,\\text{min}} \\approx 3840$ kJ/mol. What does this close agreement tell you?`,
        a: `The ionic model is valid for MgO. The bonding is well described as purely electrostatic between Mg$^{2+}$ and O$^{2-}$ point charges. The small discrepancy (10 kJ/mol, about 0.3%) is within the uncertainty of ionic radii values used in the calculation.`
      },
      {
        q: `Why does AgCl show more covalent character than NaCl, even though both have 1+ cations?`,
        a: `Ag$^+$ has filled d-orbitals that shield the nuclear charge less effectively than Na$^+$'s s-electrons. The effective nuclear charge experienced by the Cl$^-$ anion is higher for Ag$^+$. This greater polarizing power distorts the Cl$^-$ electron cloud toward Ag$^+$, creating partial electron sharing. NaCl, with its less polarizing Na$^+$, stays more purely ionic.`
      },
      {
        q: `Fajans' rules predict covalent character from two ion properties. Name and explain both.`,
        a: `First: polarizing power of the cation. Small, highly charged cations pull anion electron clouds most strongly. High charge and small size both increase polarizing power. Second: polarizability of the anion. Large anions have loosely held outer electrons that distort easily. Both factors together determine how ionic or covalent a compound is.`
      },
      {
        q: `NaF has an electronegativity difference $|\\Delta\\chi| \\approx 3.1$. HCl has $|\\Delta\\chi| \\approx 0.9$. What bonding character does each have?`,
        a: `NaF is predominantly ionic: a large electronegativity difference means nearly complete electron transfer from Na to F. HCl is polar covalent: the moderate difference causes unequal sharing but not complete transfer. The threshold for predominantly ionic bonding is roughly $|\\Delta\\chi| \\approx 2$.`
      },
      {
        q: 'Why do ionic solids have high melting points?',
        a: `Melting requires ions to become mobile enough to flow. The strong electrostatic attraction between all ions in the crystal holds them in place. You need a lot of thermal energy to overcome this network of attractions. Compounds with doubly charged ions (like MgO, melting point 2852°C) have far higher melting points than singly charged ones (like NaCl, 801°C).`
      },
      {
        q: 'Why are ionic solids brittle rather than malleable?',
        a: `When a shear force shifts one plane of ions past an adjacent plane by one unit, same-charge ions come face-to-face across the boundary. The strong repulsion between identically charged ions causes the crystal to split along the plane rather than flow. This is fundamentally different from metals, where electron clouds allow planes to slide past each other.`
      },
      {
        q: `The radius ratio for a compound is $\\gamma = 0.55$. What crystal structure do you predict?`,
        a: `$0.414 < 0.55 < 0.732$, so the compound should adopt the rock salt (NaCl) structure, with each ion surrounded by 6 ions of the opposite charge and Madelung constant $A = 1.748$.`
      },
      {
        q: `The radius ratio for CsCl is greater than 0.732. What structure does it adopt, and what is the Madelung constant?`,
        a: `CsCl adopts the caesium chloride structure, with (8,8) coordination: each ion is surrounded by 8 ions of the opposite charge. The Madelung constant is $A = 1.763$.`
      },
      {
        q: `KCl has $\\Delta H_L = 717$ kJ/mol and MgO has $\\Delta H_L \\approx 3850$ kJ/mol. The Born-Mayer equation predicts lattice energy proportional to $|z_Az_B|/d$. Use this to explain the factor-of-5 difference.`,
        a: `For KCl: $|z_Az_B| = 1$, $d \\approx 319$ pm. For MgO: $|z_Az_B| = 4$, $d \\approx 212$ pm. The charge ratio gives a factor of 4. The distance ratio gives $319/212 \\approx 1.5$. Combined: $4 \\times 1.5 = 6$, close to the observed factor of 5.4. Both larger charge and smaller size work in the same direction for MgO.`
      },
      {
        q: `The 1D Madelung sum gives $A = 2\\ln 2 = 1.386$. You extend the model to a 3D rock salt structure and get $A = 1.748$. Explain why the 3D value is larger without doing any calculation.`,
        a: `In 3D, each ion has 6 nearest neighbors of opposite charge at distance $d$, then 12 next-nearest of the same charge at $d\\sqrt{2}$, then 8 next-next-nearest of opposite charge at $d\\sqrt{3}$, and so on. The ratio of opposite-to-same-charge neighbors encountered before large distances is more favorable in 3D than in 1D.`
      },
      {
        q: 'You are given an ionic compound with an experimental Born-Haber lattice energy significantly larger than the Born-Mayer prediction. What practical conclusion can you draw about how to model this compound?',
        a: 'The pure ionic model is insufficient. The compound has significant covalent character. To model it accurately, you need to account for electron sharing, perhaps using molecular orbital theory or a covalent correction. Do not use Born-Mayer parameters alone to predict properties like solubility or thermal stability for this compound.'
      },
      {
        q: 'You have an ionic compound but do not know its crystal structure. Can you still estimate its lattice energy, and what would you need?',
        a: 'Yes. The Kapustinskii equation estimates lattice energy without a known structure. You need the ion charges, the number of ions in the formula, and the ionic radii. It works because the Madelung constant divided by the number of ions per formula is nearly the same for common structures, so a single averaged value can stand in for the unknown geometry.'
      },
      {
        q: `The Born-Mayer equation models short-range repulsion with an exponential term. What is the value of the repulsion range constant $d^*$, and what does the factor $(1 - d^*/d)$ do to the calculated lattice energy?`,
        a: `$d^* = 34.5$ pm, taken as universal for all ionic solids. The factor $(1 - d^*/d)$ is always less than 1, so it reduces the pure Coulomb attraction. It accounts for the electron clouds pushing back at short range. For a typical separation near 200 pm, it lowers the lattice energy by about 17%.`
      },
      {
        q: `A student claims: "The ionic model always underestimates lattice energy because it ignores covalent bonding." Is this correct?`,
        a: `Not always. When the ionic model is valid (e.g., NaCl, MgO), the Born-Mayer calculation matches the Born-Haber experimental value closely. The model only underestimates when significant covalent character exists. For compounds like AgCl or AgBr, the experimental value does exceed the ionic model prediction. The statement is true only for compounds with covalent character.`
      }
    ],
    reference: {
      category: 'Quick Reference',
      title: 'Lattice Energy and Born-Haber Cycles',
      sections: [
        <>
          <div className="lrn-header">
            <h2>Core Equations</h2>
          </div>
          <div className="ref-formula">
            <div className="ref-formula-name">Coulomb potential energy (ion pair)</div>
            <div className="ref-formula-eq">
              {`$$E_{p,12} = \\frac{z_1 z_2 e^2}{4\\pi\\varepsilon_0 r_{12}}$$`}
            </div>
            <p className="ref-formula-desc">
              <strong>When to use:</strong>
              {` you need the electrostatic potential energy between any two point-charge ions at
              separation $r_{12}$.`}
            </p>
          </div>
          <div className="ref-formula">
            <div className="ref-formula-name">Molar Coulomb energy (general crystal)</div>
            <div className="ref-formula-eq">
              {`$$E_p = -A \\cdot \\frac{N_A |z_A z_B| e^2}{4\\pi\\varepsilon_0 d}$$`}
            </div>
            <p className="ref-formula-desc">
              <strong>When to use:</strong>
              {` you want the total Coulomb contribution to lattice energy for a crystal with
              Madelung constant $A$ and equilibrium separation $d$.`}
            </p>
          </div>
          <div className="ref-formula">
            <div className="ref-formula-name">1D ionic solid Coulomb energy</div>
            <div className="ref-formula-eq">
              {`$$E_p = -\\frac{2\\ln 2 \\cdot N_A z^2 e^2}{4\\pi\\varepsilon_0 d}$$`}
            </div>
            <p className="ref-formula-desc">
              <strong>When to use:</strong>
              {` you model a linear chain of alternating monovalent ions. The Madelung constant
              here is $A = 2\\ln 2 = 1.386$.`}
            </p>
          </div>
          <div className="ref-formula">
            <div className="ref-formula-name">Exponential repulsion term</div>
            <div className="ref-formula-eq">{`$$E_p^* = N_A C' e^{-d/d^*}$$`}</div>
            <p className="ref-formula-desc">
              <strong>When to use:</strong>
              {` you build up to the Born-Mayer equation and need the short-range repulsion to add
              to the Coulomb energy. $d^* = 34.5$ pm always.`}
            </p>
          </div>
          <div className="ref-formula">
            <div className="ref-formula-name">Born-Mayer equation</div>
            <div className="ref-formula-eq">
              {`$$E_{p,\\text{min}} = -A \\cdot \\frac{N_A |z_A z_B| e^2}{4\\pi\\varepsilon_0 d} \\cdot \\left(1 - \\frac{d^*}{d}\\right)$$`}
            </div>
            <p className="ref-formula-desc">
              <strong>When to use:</strong>
              {` you want the theoretical lattice energy from crystal structure, ion charges, and
              equilibrium separation. $d^* = 34.5$ pm universal.`}
            </p>
          </div>
          <div className="ref-formula">
            <div className="ref-formula-name">Radius ratio</div>
            <div className="ref-formula-eq">
              {`$$\\gamma = \\frac{r_{\\text{smaller}}}{r_{\\text{larger}}}$$`}
            </div>
            <p className="ref-formula-desc">
              <strong>When to use:</strong> you want to predict the crystal structure type from
              ionic radii.
            </p>
          </div>
          <div className="ref-formula">
            <div className="ref-formula-name">Born-Haber cycle closure (Hess's law)</div>
            <div className="ref-formula-eq">
              {`$$\\Delta H_{\\text{sub}} + \\Delta H_{\\text{diss}} + I - E_a - \\Delta H_L - \\Delta H_f^\\circ = 0$$`}
            </div>
            <p className="ref-formula-desc">
              <strong>When to use:</strong>
              {` you must solve for any unknown enthalpy term (usually $\\Delta H_L$) when all
              others are known.`}
            </p>
          </div>
        </>,

        <>
          <div className="lrn-header">
            <h2>Madelung Constants by Structure Type</h2>
          </div>
          <table>
            <thead>
              <tr>
                <th>Structure</th>
                <th>Formula type</th>
                <th>Coordination</th>
                <th>{`$A$`}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Caesium chloride (CsCl)</td>
                <td>MX</td>
                <td>(8,8)</td>
                <td>1.763</td>
              </tr>
              <tr>
                <td>Rock salt (NaCl)</td>
                <td>MX</td>
                <td>(6,6)</td>
                <td>1.748</td>
              </tr>
              <tr>
                <td>Wurtzite</td>
                <td>MX</td>
                <td>(4,4)</td>
                <td>1.641</td>
              </tr>
              <tr>
                <td>Sphalerite (zinc blende, ZnS)</td>
                <td>MX</td>
                <td>(4,4)</td>
                <td>1.638</td>
              </tr>
              <tr>
                <td>1D linear chain</td>
                <td>MX</td>
                <td>(2,2)</td>
                <td>{`$2\\ln 2 = 1.386$`}</td>
              </tr>
              <tr>
                <td>{`Rutile (TiO$_2$)`}</td>
                <td>{`MX$_2$`}</td>
                <td>(6,3)</td>
                <td>2.408</td>
              </tr>
              <tr>
                <td>{`Fluorite (CaF$_2$)`}</td>
                <td>{`MX$_2$`}</td>
                <td>(8,4)</td>
                <td>2.519</td>
              </tr>
            </tbody>
          </table>
        </>,

        <>
          <div className="lrn-header">
            <h2>Radius Ratio Rule</h2>
          </div>
          <table>
            <thead>
              <tr>
                <th>{`$\\gamma$ range`}</th>
                <th>Structure</th>
                <th>Coordination</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{`$\\gamma > 0.732$`}</td>
                <td>CsCl</td>
                <td>(8,8)</td>
              </tr>
              <tr>
                <td>{`$0.414 < \\gamma < 0.732$`}</td>
                <td>Rock salt</td>
                <td>(6,6)</td>
              </tr>
              <tr>
                <td>{`$\\gamma < 0.414$`}</td>
                <td>Sphalerite</td>
                <td>(4,4)</td>
              </tr>
            </tbody>
          </table>
        </>,

        <>
          <div className="lrn-header">
            <h2>Lattice Enthalpies (Experimental)</h2>
          </div>
          <table>
            <thead>
              <tr>
                <th>Compound</th>
                <th>{`$\\Delta H_L$ (kJ/mol)`}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>NaF</td>
                <td>926</td>
              </tr>
              <tr>
                <td>NaCl</td>
                <td>787</td>
              </tr>
              <tr>
                <td>NaBr</td>
                <td>752</td>
              </tr>
              <tr>
                <td>KF</td>
                <td>826</td>
              </tr>
              <tr>
                <td>KCl</td>
                <td>717</td>
              </tr>
              <tr>
                <td>KI</td>
                <td>645</td>
              </tr>
              <tr>
                <td>MgO</td>
                <td>3850</td>
              </tr>
              <tr>
                <td>MgS</td>
                <td>3406</td>
              </tr>
              <tr>
                <td>LiCl</td>
                <td>861</td>
              </tr>
              <tr>
                <td>RbCl</td>
                <td>695</td>
              </tr>
              <tr>
                <td>LiI</td>
                <td>759</td>
              </tr>
              <tr>
                <td>NaI</td>
                <td>700</td>
              </tr>
              <tr>
                <td>RbI</td>
                <td>632</td>
              </tr>
              <tr>
                <td>CsI</td>
                <td>601</td>
              </tr>
              <tr>
                <td>AgBr</td>
                <td>903</td>
              </tr>
              <tr>
                <td>AgI</td>
                <td>887</td>
              </tr>
            </tbody>
          </table>
        </>,

        <>
          <div className="lrn-header">
            <h2>Born-Haber Cycle Steps (General)</h2>
          </div>
          <table>
            <thead>
              <tr>
                <th>Step</th>
                <th>Process</th>
                <th>Sign</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1. Sublimation</td>
                <td>{`$\\text{M(s)} \\rightarrow \\text{M(g)}$`}</td>
                <td>+ (endothermic)</td>
              </tr>
              <tr>
                <td>2. Bond dissociation</td>
                <td>{`$\\frac{1}{2}\\text{X}_2\\text{(g)} \\rightarrow \\text{X(g)}$`}</td>
                <td>+ (endothermic)</td>
              </tr>
              <tr>
                <td>3. Ionization</td>
                <td>{`$\\text{M(g)} \\rightarrow \\text{M}^+\\text{(g)} + e^-$`}</td>
                <td>+ (endothermic)</td>
              </tr>
              <tr>
                <td>4. Electron affinity</td>
                <td>{`$\\text{X(g)} + e^- \\rightarrow \\text{X}^-\\text{(g)}$`}</td>
                <td>- (exothermic for halogens)</td>
              </tr>
              <tr>
                <td>5. Lattice formation</td>
                <td>{`$\\text{M}^+\\text{(g)} + \\text{X}^-\\text{(g)} \\rightarrow \\text{MX(s)}$`}</td>
                <td>{`$-\\Delta H_L$ (exothermic)`}</td>
              </tr>
              <tr>
                <td>6. Decomposition</td>
                <td>{`$\\text{MX(s)} \\rightarrow \\text{M(s)} + \\frac{1}{2}\\text{X}_2\\text{(g)}$`}</td>
                <td>{`$-\\Delta H_f^\\circ$`}</td>
              </tr>
            </tbody>
          </table>
        </>,

        <>
          <div className="lrn-header">
            <h2>Born-Haber Cycle Data: Worked Examples</h2>
          </div>
          <table>
            <thead>
              <tr>
                <th>Term</th>
                <th>KCl (kJ/mol)</th>
                <th>CaO (kJ/mol)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Sublimation</td>
                <td>+89</td>
                <td>+178</td>
              </tr>
              <tr>
                <td>Bond dissociation</td>
                <td>+122</td>
                <td>+249</td>
              </tr>
              <tr>
                <td>Ionization (total)</td>
                <td>+418</td>
                <td>+1735</td>
              </tr>
              <tr>
                <td>EA1</td>
                <td>-349</td>
                <td>-141</td>
              </tr>
              <tr>
                <td>EA2</td>
                <td>--</td>
                <td>+844</td>
              </tr>
              <tr>
                <td>{`$\\Delta H_f^\\circ$`}</td>
                <td>-437</td>
                <td>-635</td>
              </tr>
              <tr>
                <td>
                  <strong>{`$\\Delta H_L$ (result)`}</strong>
                </td>
                <td>
                  <strong>+717</strong>
                </td>
                <td>
                  <strong>+3500</strong>
                </td>
              </tr>
            </tbody>
          </table>
        </>,

        <>
          <div className="lrn-header">
            <h2>Key Constants and Ionic Radii</h2>
          </div>
          <table>
            <thead>
              <tr>
                <th>Ion</th>
                <th>Radius (pm)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{`$\\text{Li}^+$`}</td>
                <td>76</td>
              </tr>
              <tr>
                <td>{`$\\text{Na}^+$`}</td>
                <td>102</td>
              </tr>
              <tr>
                <td>{`$\\text{K}^+$`}</td>
                <td>138</td>
              </tr>
              <tr>
                <td>{`$\\text{Mg}^{2+}$`}</td>
                <td>72</td>
              </tr>
              <tr>
                <td>{`$\\text{Ca}^{2+}$`}</td>
                <td>100</td>
              </tr>
              <tr>
                <td>{`$\\text{O}^{2-}$`}</td>
                <td>140</td>
              </tr>
              <tr>
                <td>{`$\\text{F}^-$`}</td>
                <td>133</td>
              </tr>
              <tr>
                <td>{`$\\text{Cl}^-$`}</td>
                <td>181</td>
              </tr>
              <tr>
                <td>{`$\\text{Br}^-$`}</td>
                <td>196</td>
              </tr>
              <tr>
                <td>{`$\\text{I}^-$`}</td>
                <td>220</td>
              </tr>
            </tbody>
          </table>
        </>,

        <>
          <div className="lrn-header">
            <h2>Key Definitions</h2>
          </div>
          <p>
            <strong>Lattice energy:</strong> Energy to convert 1 mol of ionic solid into widely
            separated gaseous ions. Always positive.
          </p>
          <p>
            <strong>Lattice enthalpy</strong>
            {` ($\\Delta H_L$): Standard molar enthalpy for $\\text{MX(s)} \\rightarrow
            \\text{M}^+\\text{(g)} + \\text{X}^-\\text{(g)}$. Always positive. Equal to lattice
            energy at T = 0; differs by a few kJ/mol at room temperature.`}
          </p>
          <p>
            <strong>Madelung constant</strong>
            {` ($A$): Dimensionless positive number that captures crystal geometry for the Coulomb
            sum. Structure-dependent; fixed by coordination number.`}
          </p>
          <p>
            <strong>Born-Mayer equation:</strong> Theoretical lattice energy from Coulomb attraction
            plus exponential short-range repulsion, minimized at equilibrium separation.
          </p>
          <p>
            <strong>Born-Haber cycle:</strong> Closed thermodynamic cycle using Hess's law to
            connect ionic solid formation to measurable gas-phase steps.
          </p>
          <p>
            <strong>{`$d^*$:`}</strong>
            {` Repulsion range constant = 34.5 pm, taken as universal for all ionic solids.`}
          </p>
        </>,

        <>
          <div className="lrn-header">
            <h2>Sign Conventions</h2>
          </div>
          <table>
            <thead>
              <tr>
                <th>Quantity</th>
                <th>Sign</th>
                <th>Notes</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Lattice energy</td>
                <td>+</td>
                <td>Always positive (endothermic separation)</td>
              </tr>
              <tr>
                <td>{`$E_{p,\\text{min}}$ (Born-Mayer)`}</td>
                <td>-</td>
                <td>Negative (crystal more stable than ions)</td>
              </tr>
              <tr>
                <td>Ionization energy</td>
                <td>+</td>
                <td>Always costs energy</td>
              </tr>
              <tr>
                <td>EA of halogens</td>
                <td>-</td>
                <td>Releases energy (exothermic)</td>
              </tr>
              <tr>
                <td>EA1 of O</td>
                <td>-</td>
                <td>Releases 141 kJ/mol</td>
              </tr>
              <tr>
                <td>{`EA2 of O$^-$`}</td>
                <td>+</td>
                <td>Costs 844 kJ/mol (endothermic)</td>
              </tr>
              <tr>
                <td>Sublimation</td>
                <td>+</td>
                <td>Always endothermic</td>
              </tr>
              <tr>
                <td>Bond dissociation</td>
                <td>+</td>
                <td>Always endothermic</td>
              </tr>
            </tbody>
          </table>
        </>,

        <>
          <div className="lrn-header">
            <h2>Ionic Model Validity Test</h2>
          </div>
          <table>
            <thead>
              <tr>
                <th>Comparison</th>
                <th>Conclusion</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Experimental approximately equals Calculated</td>
                <td>Ionic model valid</td>
              </tr>
              <tr>
                <td>Experimental greater than Calculated</td>
                <td>Covalent character present</td>
              </tr>
              <tr>
                <td>Large discrepancy</td>
                <td>Significant covalent contribution</td>
              </tr>
            </tbody>
          </table>
        </>,

        <>
          <div className="lrn-header">
            <h2>Covalent Character Indicators (Fajans' Rules)</h2>
          </div>
          <table>
            <thead>
              <tr>
                <th>Factor</th>
                <th>High covalent character</th>
                <th>Low covalent character</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Cation</td>
                <td>Small, highly charged (high polarizing power)</td>
                <td>Large, low charge</td>
              </tr>
              <tr>
                <td>Anion</td>
                <td>Large, polarizable</td>
                <td>Small, low polarizability</td>
              </tr>
              <tr>
                <td>{`$|\\Delta\\chi|$`}</td>
                <td>{`Small ($< 1.5$)`}</td>
                <td>{`Large ($> 2$)`}</td>
              </tr>
            </tbody>
          </table>
        </>,

        <>
          <div className="lrn-header">
            <h2>Related Lattice-Energy Models</h2>
          </div>
          <ul className="lrn-list">
            <li>
              <strong>Kapustinskii equation:</strong> Estimates lattice energy from ion charges, the
              number of ions in the formula, and ionic radii alone. It needs no crystal structure or
              Madelung constant, so it works for compounds whose structure is unknown.
            </li>
            <li>
              <strong>Born-Landé equation:</strong>
              {` Uses a power-law repulsion term ($\\propto 1/d^n$) with a whole-number Born
              exponent $n$. The Born-Mayer equation on this page replaces that with the exponential
              repulsion $e^{-d/d^*}$, which fits short-range behavior better.`}
            </li>
            <li>
              <strong>3D Madelung constants:</strong>
              {` The values in the table come from summing the full 3D lattice geometry. Only the
              1D chain ($A = 2\\ln 2$) is simple enough to sum by hand here.`}
            </li>
          </ul>
        </>
      ]
    },
    customCss: null
  }

  return <LearningTemplate config={config} />
}
