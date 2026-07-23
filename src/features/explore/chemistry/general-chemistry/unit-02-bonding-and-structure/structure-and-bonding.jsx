import { LearningTemplate } from '../../../../../components/learning/learning-template'
import {
  IonicBondBornMayerViz,
  MolecularDipoleViz,
  BondingAntibondingViz,
  MOCorrelationViz,
  HybridizationInterferenceViz,
  RadiusRatioViz,
  BondPolarityViz,
  DispersionBoilingViz,
  IonicRadiiViz,
  PiOverlapDistanceViz
} from '../../../../../components/viz'

export default function StructureAndBonding() {
  const config = {
    cssPrefix: 'chem-bonding',
    documentTitle: 'Structure and Bonding - AETHER',
    learning: {
      category: 'Unit 2',
      groupTitle: 'Bonding and Structure',
      title: 'Structure and Bonding',
      subtitle:
        'Ionic and covalent bonding, molecular shape via VSEPR and hybridization, and the molecular orbital models that explain why Lewis theory sometimes fails.',
      sections: [
        <>
          <div className="lrn-header">
            <h2>Ionic Bonding</h2>
          </div>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              If you pack a positive ion and a negative ion together in a repeating crystal, what
              determines how tightly they hold onto each other?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                Two factors control the strength: ion charge and ion size. Higher charges create
                stronger attraction. Smaller ions sit closer together, strengthening attraction
                further. The Born-Mayer equation captures both effects.
              </p>
            </details>
          </div>
          <p>
            An <strong>ionic bond</strong> forms when one atom transfers electrons to another.
            Metals lose electrons; nonmetals gain them. The result is oppositely charged ions held
            together by electrostatic attraction. You use ionic bonding when atoms on opposite sides
            of the periodic table react. This happens when their electronegativity (their pull on
            shared electrons) differs by more than about 2.
          </p>
          <h3>What Lattice Energy Measures</h3>
          <p>
            Lattice energy measures the strength of an ionic solid. It is the energy you must put in
            to pull apart one mole of the crystal into its gaseous ions. A large, positive lattice
            energy means the crystal is very stable.
          </p>
          <p>
            Two factors control lattice energy: ion charge and ion size. Higher charges create
            stronger attraction. Smaller ions sit closer together, which also strengthens
            attraction.
          </p>
          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>
              {`Coulomb's law says electrostatic potential energy scales as $\\frac{1}{r}$. Halving the
              distance roughly doubles the attraction. Smaller ions pack tighter, so the energy
              released on forming the crystal is greater.`}
            </p>
          </div>
          <h3>The Born-Mayer Equation</h3>
          <p>
            The Born-Mayer equation gives the minimum electrostatic potential energy of one mole of
            an ionic crystal:
          </p>
          <p className="lrn-eq lrn-eq-hero">
            {`$$E_{p,\\min} = -\\frac{N_A A |z_+ z_-| e^2}{4\\pi\\varepsilon_0 d}\\left(1 - \\frac{d^*}{d}\\right)$$`}
          </p>
          <IonicBondBornMayerViz />
          <p>
            {`Here $N_A$ is Avogadro's number, $A$ is the Madelung constant, $z_+$ and $z_-$ are the
            ion charges, $e$ is the elementary charge, $\\varepsilon_0$ is the permittivity of free
            space, $d$ is the closest ion-to-ion distance, and $d^* \\approx 34.5$ pm is a
            repulsion correction. The term $(1 - d^*/d)$ accounts for the short-range repulsion that
            stops ions from collapsing into each other.`}
          </p>
          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>
              {`At very short distances, the electron clouds of neighbouring ions overlap and repel
              strongly. The Born-Mayer term $(1 - d^*/d)$ captures this. Without it, the equation
              would predict infinite stability as $d \\to 0$.`}
            </p>
          </div>
          <p>
            {`Try it with NaCl. Its Madelung constant is $A = 1.748$, and the ion spacing is
            $d = r(\\text{Na}^+) + r(\\text{Cl}^-) = 102 + 181 = 283$ pm. Putting these into the
            equation gives a large negative energy. That is why solid NaCl is so stable.`}
          </p>
          <h3>The Madelung Constant</h3>
          <p>
            {`Every ionic crystal has a different geometry. In rock salt (NaCl structure), each ion
            has 6 nearest neighbours of opposite charge, then 12 next-nearest neighbours of the same
            charge, and so on. The `}
            <strong>Madelung constant</strong>
            {` $A$ is the dimensionless sum of all these electrostatic contributions, weighted by
            geometry.`}
          </p>
          <p>Madelung constants for common structures:</p>
          <table className="lrn-table">
            <thead>
              <tr>
                <th>Structure</th>
                <th>{`$A$`}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Rock salt (NaCl)</td>
                <td>1.748</td>
              </tr>
              <tr>
                <td>Caesium chloride (CsCl)</td>
                <td>1.763</td>
              </tr>
              <tr>
                <td>{`Fluorite (CaF$_2$)`}</td>
                <td>2.519</td>
              </tr>
              <tr>
                <td>Sphalerite (ZnS)</td>
                <td>1.638</td>
              </tr>
            </tbody>
          </table>
          <p>
            A higher Madelung constant means the geometry packs more effectively, so the crystal is
            more stable per unit charge.
          </p>
          <h3>Ionic Radii and the Radius Ratio Rule</h3>
          <p>
            Ionic radii are measured from X-ray crystallography. They depend on coordination number:
            the number of nearest-neighbour ions touching the central ion.
            {` By convention, $r(\\text{O}^{2-}) = 140$ pm is used as the reference.`}
          </p>
          <p>
            {`Key radii (6-coordination): $\\text{Na}^+$ 102 pm, $\\text{K}^+$ 138 pm,
            $\\text{F}^-$ 128 pm, $\\text{Cl}^-$ 181 pm.`}
          </p>
          <IonicRadiiViz />
          <p>
            The <strong>radius ratio rule</strong>
            {` predicts which crystal structure forms. Define $\\gamma = r_{\\text{smaller}}/r_{\\text{larger}}$:`}
          </p>
          <ul className="lrn-list">
            <li>{`$\\gamma < 0.414$: sphalerite (ZnS) structure`}</li>
            <li>{`$0.414 \\leq \\gamma \\leq 0.732$: rock salt (NaCl) structure`}</li>
            <li>{`$\\gamma > 0.732$: caesium chloride (CsCl) structure`}</li>
          </ul>
          <RadiusRatioViz />
          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>
              If the smaller ion is too small relative to the larger one, it rattles inside the
              coordination shell and the structure is unstable. The radius ratio tells you the
              largest coordination number that still keeps ions in contact.
            </p>
          </div>
        </>,

        <>
          <div className="lrn-header">
            <h2>Metallic Bonding</h2>
          </div>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              A copper wire bends without snapping and carries electricity. What kind of bonding
              lets one material do both at once?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                Metal atoms share their outer electrons freely across the whole piece. The shared
                electrons move to carry current. They also let the atoms slide without breaking the
                bond.
              </p>
            </details>
          </div>
          <p>
            Ionic and covalent bonds are two of the three main bonding types.{' '}
            <strong>Metallic bonding</strong> is the third. You use it to explain why metals
            conduct, bend, and shine.
          </p>
          <h3>The Electron-Sea Model</h3>
          <p>
            In a metal, each atom gives up its outer electrons. What is left is a positive ion core.
            These cores sit in a fixed pattern. The freed electrons spread out over the whole metal
            as a shared "sea".
          </p>
          <p>
            The positive cores and the negative electron sea attract each other. That attraction is
            the metallic bond. The electrons belong to no single atom. They are delocalized across
            every atom at once.
          </p>
          <h3>Why Metals Conduct</h3>
          <p>
            The sea electrons are free to move. Connect a metal to a battery and the electrons drift
            through it. That moving charge is an electric current. The same loose electrons also
            carry heat quickly.
          </p>
          <h3>Why Metals Bend, Not Shatter</h3>
          <p>
            The metallic bond points in no particular direction. Hammer a metal and the ion cores
            slide to new positions. The electron sea flows with them and keeps holding the cores
            together. So metals flatten into sheets (malleable) and stretch into wires (ductile).
          </p>
          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>
              An ionic crystal shatters because sliding lines up like charges, which repel. A metal
              has no fixed bonds to break and no like charges forced together. The electron sea
              cushions every shift, so the metal holds.
            </p>
          </div>
          <h3>Why Metals Shine</h3>
          <p>
            Light hitting a metal makes the loose electrons oscillate. The electrons absorb the
            light and send it straight back out. That re-emitted light is the bright metallic shine
            you see.
          </p>
          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Ionic solid</span>
              <p>
                Electrons fixed on ions. Does not conduct as a solid. Brittle: it shatters when
                struck.
              </p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Metal</span>
              <p>Electrons free to roam. Conducts well. Bends and stretches without breaking.</p>
            </div>
          </div>
        </>,

        <>
          <div className="lrn-header">
            <h2>Lewis Structures and Resonance</h2>
          </div>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              If a molecule has more than one valid arrangement of electrons that looks equally good
              on paper, what is the actual electron arrangement in the real molecule?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                The electrons are spread over all the resonance positions at once. The molecule does
                not switch between structures. The real bond order equals the average of the
                resonance structures.
              </p>
            </details>
          </div>
          <p>
            A <strong>Lewis structure</strong> is a diagram that shows how valence electrons are
            arranged in a molecule. Valence electrons are the outer-shell electrons an atom uses to
            bond. You use Lewis structures when you need a quick picture of bonding and lone pairs
            before applying more advanced models.
          </p>
          <p>
            Atoms gain, lose, or share electrons to reach a full outer shell. For most main-group
            atoms that full shell holds eight electrons. This is the <strong>octet rule</strong>:
            eight outer electrons is a stable, low-energy arrangement.
          </p>
          <h3>The Five-Step Method</h3>
          <ol className="lrn-list">
            <li>
              Count all valence electrons. Add one per negative charge; subtract one per positive
              charge.
            </li>
            <li>Arrange atoms (the least electronegative atom is usually central).</li>
            <li>Place electrons to satisfy the octet rule (8 per atom, except H needs 2).</li>
            <li>
              If atoms lack octets, form multiple bonds by converting lone pairs into bonding pairs.
            </li>
            <li>
              Check formal charges and pick the structure with the lowest formal charges closest to
              zero.
            </li>
          </ol>
          <p>
            {`Formal charge: `}
            <strong>{`$FC = V - L - \\frac{1}{2}B$`}</strong>
            {` where $V$ = valence electrons on free atom, $L$ = lone pair electrons, $B$ = bonding electrons.`}
          </p>
          <p className="lrn-eq">{`$$FC = V - L - \\frac{1}{2}B$$`}</p>
          <h3>{`Worked Example: SO$_4^{2-}$`}</h3>
          <div className="lrn-steps">
            <div className="lrn-step">
              <span className="lrn-step-title">Count electrons</span>
              <p className="lrn-step-content">
                {`S has 6, each O has 6, plus 2 for the charge. Total: $6 + 4(6) + 2 = 32$ electrons.`}
              </p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">Initial structure</span>
              <p className="lrn-step-content">
                {`Place S at the centre bonded to four O atoms. Each O starts with 3 lone pairs. That
                uses $4 \\times 2 = 8$ bonding electrons plus $4 \\times 6 = 24$ lone-pair electrons
                = 32 total. Formal charges: O has $FC = 6 - 6 - 1 = -1$; S has $FC = 6 - 0 - 4 = +2$.
                Overall: $(-1)(4) + (+2) = -2$. Correct.`}
              </p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">Reduce formal charges</span>
              <p className="lrn-step-content">
                {`Convert two lone pairs on two O atoms into S=O double bonds. Now two oxygens have
                formal charge 0 and S has formal charge 0. This expanded-octet structure with two
                S=O double bonds is dominant.`}
              </p>
            </div>
          </div>
          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>
              {`Why does forming S=O double bonds reduce formal charges? Form your answer before reading on.`}
            </p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                {`Each S=O double bond adds 2 electrons to the S count and removes 2 from the O lone
                pairs. S gets closer to its valence count of 6, so its formal charge drops from +2
                toward 0.`}
              </p>
            </details>
          </div>
          <h3>Resonance</h3>
          <p>
            Sometimes two or more Lewis structures have the same formal charge pattern but differ
            only in which atoms hold the double bonds. These are{' '}
            <strong>resonance structures</strong>. The real molecule is not switching between them.
            The electrons are spread over all the resonance positions at once.
          </p>
          <p>
            {`Examples: SO$_4^{2-}$ has four equivalent resonance structures. NO$_3^-$ has three.
            Benzene (C$_6$H$_6$) has two. In each case, the real bond order equals the average.`}
          </p>
          <h3>Special Cases: Incomplete and Expanded Octets</h3>
          <p>
            {`BF$_3$ has only 6 electrons on B (an incomplete octet). Boron is electron-deficient.
            The molecule readily accepts a lone pair from another atom.`}
          </p>
          <p>
            {`S, P, and heavier atoms sometimes appear to hold more than 8 electrons (an expanded
            octet). SO$_4^{2-}$ is one example. Treat this as a Lewis bookkeeping device, not a real
            use of d orbitals. The molecular orbital picture later in this lesson explains these
            molecules without any expanded octet.`}
          </p>
          <h3>Coordinate Covalent Bonds</h3>
          <p>
            In a <strong>coordinate covalent bond</strong>, both electrons come from the same atom.
            {` The bond is otherwise identical to a normal covalent bond once formed. Example: in
            Al$_2$Cl$_6$ (aluminium chloride dimer), bridging Cl atoms each donate a lone pair to
            an adjacent Al atom.`}
          </p>
        </>,

        <>
          <div className="lrn-header">
            <h2>Electronegativity and Polarity</h2>
          </div>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              If two atoms in a bond pull electrons toward themselves with different strengths,
              where do you expect the electrons to spend more of their time?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                The electrons spend more time near the atom with higher electronegativity. That atom
                carries a partial negative charge; the other carries a partial positive charge.
              </p>
            </details>
          </div>
          <p>
            <strong>Electronegativity</strong>
            {` ($\\chi$) measures how strongly an atom in a molecule attracts the shared electrons in a
            bond. You use electronegativity differences to predict whether a bond is ionic, polar
            covalent, or nonpolar covalent.`}
          </p>
          <h3>The Pauling Scale</h3>
          <p>
            {`Electronegativity can be measured from bond dissociation energies. A bond dissociation
            energy is the energy needed to break a bond:`}
          </p>
          <p className="lrn-eq">
            {`$$\\chi_A - \\chi_B = \\left(\\frac{1}{\\text{eV}}\\right)^{1/2} \\left|D(AB) - \\frac{1}{2}[D(AA) + D(BB)]\\right|^{1/2}$$`}
          </p>
          <p>
            {`Here $D(AB)$ is the bond energy of the A-B bond, and $D(AA)$ and $D(BB)$ are the bond
            energies of the pure homonuclear bonds. A bond between A and B is often stronger than the
            average of the A-A and B-B bonds. That extra strength comes from the ionic character of
            the A-B bond.`}
          </p>
          <p>
            {`Pauling electronegativities: H = 2.2, C = 2.6, N = 3.0, O = 3.4, F = 4.0, Cl = 3.2.`}
          </p>
          <h3>Bond Polarity and the Ionic/Covalent Boundary</h3>
          <p>{`The electronegativity difference $\\Delta\\chi$ sets the character of the bond:`}</p>
          <ul className="lrn-list">
            <li>{`$\\Delta\\chi > 2$: ionic character dominates`}</li>
            <li>{`$1.5 \\leq \\Delta\\chi \\leq 2$: polar covalent (borderline)`}</li>
            <li>{`$\\Delta\\chi < 1.5$: polar covalent`}</li>
          </ul>
          <BondPolarityViz />
          <p>
            The <strong>dipole moment</strong>
            {` $\\mu$ measures the amount of charge separation in a polar bond:`}
          </p>
          <p className="lrn-eq">{`$$\\mu = Q \\cdot d$$`}</p>
          <p>
            {`where $Q$ is the partial charge and $d$ is the bond length. The unit is the debye:
            $1\\ \\text{D} = 3.336 \\times 10^{-30}\\ \\text{C}\\cdot\\text{m}$.`}
          </p>
          <p>
            {`Measured dipole moments: HF $\\mu = 1.91$ D, H$_2$O $\\mu = 1.85$ D, NH$_3$ $\\mu = 1.47$ D.`}
          </p>
          <h3>Molecular Dipole Moments: Vector Sum</h3>
          <p>
            A <strong>molecular dipole</strong> is the vector sum of all bond dipoles. Linear
            molecules with identical bonds cancel their dipoles. Bent or asymmetric molecules do
            not.
          </p>
          <p>
            {`CO$_2$ is linear. The two C=O bond dipoles point in exactly opposite directions and
            cancel. $\\mu = 0$. H$_2$O is bent. The two O-H dipoles point at an angle and do not
            cancel. $\\mu = 1.85$ D.`}
          </p>
          <p>
            {`*cis*-CHCl=CHCl: both C-Cl bond dipoles point to the same side. They add. $\\mu = 1.90$ D.
            *trans*-CHCl=CHCl: the two C-Cl dipoles point in opposite directions and cancel. $\\mu = 0$.`}
          </p>
          <MolecularDipoleViz />
          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>
              Why does the shape of the molecule matter for the dipole moment? Form your answer
              before reading on.
            </p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                Bond dipoles are vectors. Vectors pointing opposite each other cancel. Vectors
                pointing the same way add. The geometry of the molecule sets the angles between bond
                dipoles, so shape determines whether they cancel or reinforce.
              </p>
            </details>
          </div>
          <h3>Polarizability</h3>
          <p>
            <strong>Polarizability</strong> measures how easily an external electric field distorts
            an atom's or ion's electron cloud. Large, diffuse anions are highly polarizable because
            their electrons are far from the nucleus and loosely held. Small, highly charged cations
            are <strong>polarizing</strong> because their strong electric field distorts nearby
            anions.
          </p>
          <p>
            When a highly polarizing cation distorts a large anion strongly, the bond gains covalent
            {` character. This is why some "ionic" compounds (like AgI) show significant covalent bonding.`}
          </p>
        </>,

        <>
          <div className="lrn-header">
            <h2>Intermolecular Forces</h2>
          </div>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              {`Water boils at 100°C. Methane, a molecule of similar size, boils at −161°C. Why does
              water hold together so much more strongly?`}
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                Water molecules are very polar and form hydrogen bonds. These pulls between
                molecules are strong. Methane is nonpolar, so its molecules barely attract each
                other.
              </p>
            </details>
          </div>
          <p>
            A polar bond gives a molecule positive and negative ends. Those charged ends pull on
            neighbouring molecules. These pulls between separate molecules are{' '}
            <strong>intermolecular forces</strong>. They set melting points, boiling points, and
            whether a substance is a gas, liquid, or solid.
          </p>
          <p>
            Keep two scales apart. A covalent bond inside a molecule is strong. An intermolecular
            force between molecules is much weaker. Boiling breaks the weak forces between
            molecules, not the bonds inside them.
          </p>
          <h3>London Dispersion Forces</h3>
          <p>
            Electrons in any molecule shift around constantly. For an instant they bunch on one
            side. That gives a brief dipole, which pulls on the neighbour's electrons. Every
            molecule has these <strong>London dispersion forces</strong>, even nonpolar ones.
          </p>
          <p>
            Bigger molecules with more electrons have stronger dispersion forces. This is why iodine
            is a solid while fluorine is a gas. Both are nonpolar, but iodine has far more
            electrons.
          </p>
          <DispersionBoilingViz />
          <h3>Dipole-Dipole Forces</h3>
          <p>
            Polar molecules have a permanent positive and negative end. The positive end of one
            molecule attracts the negative end of the next. These{' '}
            <strong>dipole-dipole forces</strong> are stronger than dispersion forces between
            molecules of similar size.
          </p>
          <h3>Hydrogen Bonding</h3>
          <p>
            A <strong>hydrogen bond</strong> is the strongest of these forces. It forms when an H
            atom is bonded to N, O, or F. That H carries a large positive charge. It is pulled hard
            toward a lone pair on an N, O, or F atom of a neighbour.
          </p>
          <p>
            Hydrogen bonds explain water's high boiling point. They hold the two strands of DNA
            together. They also make ice less dense than liquid water, so ice floats.
          </p>
          <div className="lrn-insight">
            <p>
              {`Strength order between small molecules: London dispersion (weakest) < dipole-dipole <
              hydrogen bonding (strongest). In very large molecules, dispersion forces can grow big
              enough to beat hydrogen bonding.`}
            </p>
          </div>
          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>
              A hydrogen bond is an extreme dipole-dipole pull. N, O, and F are very electronegative
              and small. They strip charge off the H and expose its bare proton. That concentrated
              charge grips the neighbour's lone pair tightly.
            </p>
          </div>
        </>,

        <>
          <div className="lrn-header">
            <h2>The VSEPR Model</h2>
          </div>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              {`A water molecule has two O-H bonds and two lone pairs on oxygen. Would you expect the
              H-O-H angle to be exactly 109.5°, or would it be different? Why?`}
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                {`The angle is less than 109.5°. The two lone pairs repel the bonding pairs more
                strongly than bond-bond repulsion, compressing the H-O-H angle. The measured value
                is 104.5°.`}
              </p>
            </details>
          </div>
          <p>
            The <strong>Valence Shell Electron Pair Repulsion (VSEPR)</strong> model predicts
            molecular shapes from the number of electron pairs around the central atom. You use
            VSEPR when you need to quickly predict the shape of a small molecule from its Lewis
            structure.
          </p>
          <h3>The Four VSEPR Rules</h3>
          <ol className="lrn-list">
            <li>
              Electron pairs around the central atom arrange to maximize separation and minimize
              repulsion.
            </li>
            <li>Multiple bonds (double or triple) count as a single electron-pair region.</li>
            <li>
              Only bonded atoms define the molecular shape. Lone pairs are invisible in the shape
              name.
            </li>
            <li>
              Repulsion strength: lone-lone &gt; lone-bond &gt; bond-bond. Lone pairs compress bond
              angles.
            </li>
          </ol>
          <h3>{`The AX$_n$E$_m$ Notation`}</h3>
          <p>
            {`Use $A$ for the central atom, $X$ for each bonded atom, and $E$ for each lone pair.`}
          </p>
          <table className="lrn-table">
            <thead>
              <tr>
                <th>Notation</th>
                <th>Electron arrangement</th>
                <th>Shape</th>
                <th>Example</th>
                <th>Angles</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{`AX$_2$`}</td>
                <td>linear</td>
                <td>linear</td>
                <td>{`BeCl$_2$, CO$_2$`}</td>
                <td>{`180°`}</td>
              </tr>
              <tr>
                <td>{`AX$_3$`}</td>
                <td>trigonal planar</td>
                <td>trigonal planar</td>
                <td>{`BF$_3$`}</td>
                <td>{`120°`}</td>
              </tr>
              <tr>
                <td>{`AX$_4$`}</td>
                <td>tetrahedral</td>
                <td>tetrahedral</td>
                <td>{`CH$_4$`}</td>
                <td>{`109.5°`}</td>
              </tr>
              <tr>
                <td>{`AX$_5$`}</td>
                <td>trigonal bipyramidal</td>
                <td>trigonal bipyramidal</td>
                <td>{`PCl$_5$`}</td>
                <td>{`90°/120°/180°`}</td>
              </tr>
              <tr>
                <td>{`AX$_6$`}</td>
                <td>octahedral</td>
                <td>octahedral</td>
                <td>{`SF$_6$`}</td>
                <td>{`90°`}</td>
              </tr>
              <tr>
                <td>{`AX$_3$E`}</td>
                <td>tetrahedral</td>
                <td>trigonal pyramidal</td>
                <td>{`NH$_3$`}</td>
                <td>{`< 109.5°`}</td>
              </tr>
              <tr>
                <td>{`AX$_2$E$_2$`}</td>
                <td>tetrahedral</td>
                <td>angular (bent)</td>
                <td>{`H$_2$O`}</td>
                <td>{`< 109.5°`}</td>
              </tr>
              <tr>
                <td>{`AX$_4$E`}</td>
                <td>trigonal bipyramidal</td>
                <td>seesaw</td>
                <td>{`SF$_4$`}</td>
                <td>varied</td>
              </tr>
              <tr>
                <td>{`AX$_3$E$_2$`}</td>
                <td>trigonal bipyramidal</td>
                <td>T-shaped</td>
                <td>{`ClF$_3$`}</td>
                <td>varied</td>
              </tr>
              <tr>
                <td>{`AX$_4$E$_2$`}</td>
                <td>octahedral</td>
                <td>square planar</td>
                <td>{`XeF$_4$`}</td>
                <td>{`90°`}</td>
              </tr>
              <tr>
                <td>{`AX$_5$E`}</td>
                <td>octahedral</td>
                <td>square pyramidal</td>
                <td>{`BrF$_5$`}</td>
                <td>varied</td>
              </tr>
              <tr>
                <td>{`AX$_6$E`}</td>
                <td>pentagonal bipyramidal</td>
                <td>pentagonal bipyramidal</td>
                <td>{`XeF$_6$`}</td>
                <td>varied</td>
              </tr>
            </tbody>
          </table>
          <h3>{`Worked Example: NF$_3$`}</h3>
          <p>
            {`NF$_3$ has $5 + 3(7) = 26$ valence electrons. N forms three bonds to F and keeps one
            lone pair. That is AX$_3$E: the electron arrangement is tetrahedral, but the shape
            (counting only atoms) is `}
            <strong>trigonal pyramidal</strong>
            {`. The lone pair compresses the F-N-F angle below 109.5°.`}
          </p>
          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>
              Why does the lone pair push the bonding pairs closer together? Form your answer before
              reading on.
            </p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                The lone pair occupies more space around N than a bonding pair does. A bonding pair
                is pulled toward the F atom and pinched into a narrower region. The lone pair faces
                no such constraint, so it spreads out and squeezes the bonds toward each other.
              </p>
            </details>
          </div>
          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">VSEPR</span>
              <p>
                Focuses only on electron counts around the central atom. Predicts shape from the
                total number of electron pairs.
              </p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Lewis structure</span>
              <p>
                Shows all electrons including lone pairs. You need the Lewis structure first to
                count E correctly for VSEPR.
              </p>
            </div>
          </div>
        </>,

        <>
          <div className="lrn-header">
            <h2>Valence Bond Theory: Sigma and Pi Bonds</h2>
          </div>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              {`A nitrogen molecule N$_2$ has a triple bond. How do three bonds form between just two
              atoms when each atom only has one type of p orbital pointing in each direction?`}
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                {`One bond forms from end-on overlap (sigma). The two remaining bonds each form from
                side-by-side overlap of one pair of p orbitals (one from p$_x$-p$_x$, one from
                p$_y$-p$_y$). These are pi bonds.`}
              </p>
            </details>
          </div>
          <p>
            <strong>Valence bond (VB) theory</strong> describes a bond as the overlap of atomic
            orbitals from two atoms. The greater the overlap, the stronger the bond. You use VB
            theory when you want a clear picture of bond directionality and geometry.
          </p>
          <h3>Sigma Bonds</h3>
          <p>
            {`A `}
            <strong>{`sigma ($\\sigma$) bond`}</strong>
            {` has cylindrical symmetry around the internuclear axis. Rotate the bond 360° around
            the axis and the orbital shape is unchanged. All single bonds are $\\sigma$ bonds.
            Example: H-F, where the H 1s orbital overlaps head-on with the F 2p$_z$ orbital.`}
          </p>
          <h3>Pi Bonds</h3>
          <p>
            {`A `}
            <strong>{`pi ($\\pi$) bond`}</strong>
            {` forms from side-by-side overlap of p orbitals. A $\\pi$ bond has one nodal plane
            containing the internuclear axis. The electron density is concentrated above and below
            the axis, not along it. Example: N$_2$ has one $\\sigma$ bond plus two $\\pi$ bonds.`}
          </p>
          <ul className="lrn-list">
            <li>{`Single bond: $\\sigma$ only`}</li>
            <li>{`Double bond: $\\sigma + \\pi$`}</li>
            <li>{`Triple bond: $\\sigma + 2\\pi$`}</li>
          </ul>
          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>
              {`A $\\sigma$ bond has cylindrical symmetry, so rotating one atom around the axis does
              not change the orbital overlap. A $\\pi$ bond requires side-by-side alignment of p
              orbitals. Rotate one atom 90° and the p orbitals become perpendicular; the overlap
              drops to zero and the bond breaks. This is why cis/trans isomers are locked.`}
            </p>
          </div>
        </>,

        <>
          <div className="lrn-header">
            <h2>Hybridization</h2>
          </div>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              {`Carbon has two electrons in the 2s orbital and two in the 2p orbitals. In its ground
              state, it should form only two bonds. Yet methane CH$_4$ has four equal C-H bonds. How
              does carbon manage four equal bonds?`}
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                One 2s electron promotes to the empty 2p orbital, giving four unpaired electrons.
                The one 2s and three 2p orbitals then mix into four equivalent hybrid orbitals
                pointing toward the corners of a tetrahedron.
              </p>
            </details>
          </div>
          <p>
            <strong>Hybridization</strong> explains how atoms form bonds with specific geometries by
            mixing atomic orbitals into new hybrid orbitals. You use hybridization when you need to
            match bond geometry (predicted by VSEPR) to the actual atomic orbitals available.
          </p>
          <h3>{`Electron Promotion and sp$^3$ Hybridization`}</h3>
          <p>
            {`Carbon's ground state is [He]2s$^2$2p$^2$ with only 2 unpaired electrons. To form four
            bonds, one 2s electron promotes to the empty 2p$_z$ orbital, giving [He]2s$^1$2p$^3$.
            Then the one 2s and three 2p orbitals mix into four equivalent `}
            <strong>{`sp$^3$ hybrid orbitals`}</strong>
            {` pointing toward the corners of a tetrahedron at 109.47°.`}
          </p>
          <HybridizationInterferenceViz />
          <p>
            {`Examples: CH$_4$ (four bonding sp$^3$ pairs), NH$_3$ (three bonding + one lone pair in
            sp$^3$), H$_2$O (two bonding + two lone pairs in sp$^3$).`}
          </p>
          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>
              Promoting an electron from 2s to 2p costs energy. But forming four bonds instead of
              two releases far more energy. The net result is a more stable molecule. The energy
              cost of promotion is more than paid back by the extra bond energy.
            </p>
          </div>
          <h3>{`sp$^2$ Hybridization`}</h3>
          <p>
            {`Mix one 2s and two 2p orbitals. This gives three sp$^2$ hybrid orbitals in a `}
            <strong>trigonal planar</strong>
            {` arrangement at 120°. One 2p orbital remains unhybridized and points perpendicular to
            the plane. That unhybridized p orbital is available for $\\pi$ bonding.`}
          </p>
          <p>
            {`Examples: BF$_3$ (three bonds, no $\\pi$), ethene C$_2$H$_4$ (each C is sp$^2$; the
            unhybridized p orbitals overlap side-by-side to form the C=C $\\pi$ bond).`}
          </p>
          <h3>sp Hybridization</h3>
          <p>
            {`Mix one 2s and one 2p orbital. This gives two sp hybrid orbitals pointing in exactly
            opposite directions at 180°. Two 2p orbitals remain unhybridized and are available for
            two $\\pi$ bonds.`}
          </p>
          <p>{`Examples: CO$_2$ (linear, two C=O double bonds), HCN, alkynes (C$\\equiv$C).`}</p>
          <p>
            {`The key rule: $N$ atomic orbitals always combine to give exactly $N$ hybrid orbitals.`}
          </p>
          <h3>Assigning Hybridization: The Steps</h3>
          <ol className="lrn-list">
            <li>Draw the Lewis structure of the molecule.</li>
            <li>
              Count the regions around the central atom. Each bond counts as one region, whether it
              is single, double, or triple. Each lone pair counts as one region too.
            </li>
            <li>
              {`Match the count to the hybridization: 2 regions $= sp$, 3 regions $= sp^2$, 4 regions
              $= sp^3$.`}
            </li>
          </ol>
          <p>
            {`Worked example: in CH$_4$, carbon has four bonds and no lone pairs. Four regions means
            $sp^3$. That gives the tetrahedral shape methane actually has. Once you can count regions,
            you can assign hybridization to any small molecule quickly.`}
          </p>
          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>
              {`The sp, sp$^2$, and sp$^3$ hybrid orbitals each look like a lopsided dumbbell. Why
              does mixing an s and a p orbital produce that asymmetric shape, rather than two
              unchanged orbitals? Form your answer before reading on.`}
            </p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                The s orbital has equal density in all directions. The p orbital has two equal lobes
                pointing opposite ways. When you add them, the same-sign lobes reinforce on one side
                and cancel on the other. That constructive interference builds the large front lobe;
                destructive interference shrinks the back. The asymmetry is the entire reason hybrid
                orbitals point strongly in one direction and form stronger, more directional bonds.
              </p>
            </details>
          </div>
          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">VSEPR</span>
              <p>Counts electron pairs and predicts shape. The "what".</p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Hybridization</span>
              <p>Explains why that shape arises from the available atomic orbitals. The "how".</p>
            </div>
          </div>
        </>,

        <>
          <div className="lrn-header">
            <h2>Multiple Bond Characteristics</h2>
          </div>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              Period 3 atoms like sulfur are larger than carbon. What might happen to the
              effectiveness of pi bonding between two large atoms trying to overlap their p orbitals
              side by side?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                {`Larger atoms mean the p orbitals are further apart laterally. The side-by-side
                overlap drops off quickly with distance, so the $\\pi$ bond is much weaker. Period 3
                atoms rarely form stable double bonds with each other.`}
              </p>
            </details>
          </div>
          <h3>Why Period 3 Atoms Rarely Double-Bond</h3>
          <p>
            {`Period 3 atoms (P, S, Cl) rarely form stable double bonds with each other. Their
            atomic radii are larger, so the p orbitals on adjacent atoms cannot get close enough
            for effective side-by-side overlap. The $\\pi$ bond that forms is weak. Single bonds
            dominate in Period 3 chemistry.`}
          </p>
          <PiOverlapDistanceViz />
          <h3>Rotation and Geometric Isomerism</h3>
          <p>
            {`A C=C double bond consists of one $\\sigma$ and one $\\pi$ bond. The $\\pi$ bond requires
            the two p orbitals to remain parallel. Any rotation around the C-C axis would break the
            $\\pi$ bond. So rotation is blocked.`}
          </p>
          <p>
            This creates <strong>geometric isomers</strong>: <em>cis</em> (same groups on the same
            side) and <em>trans</em> (same groups on opposite sides). {` `}
            <em>cis</em>-2-butene and <em>trans</em>-2-butene are different compounds with different
            properties.
          </p>
          <h3>Benzene: Delocalization Across Six Atoms</h3>
          <p>
            {`In benzene (C$_6$H$_6$), all six C atoms are sp$^2$ hybridized. The six unhybridized
            C 2p$_z$ orbitals combine to form six $\\pi$ MOs. The three lowest-energy $\\pi$ MOs are
            occupied (six electrons total). No antibonding $\\pi$ MOs are occupied.`}
          </p>
          <p>
            The result is <strong>aromatic stabilization</strong>: the electrons in the three
            bonding{' '}
            {`$\\pi$ MOs are spread uniformly around the ring. Every C-C bond is equivalent, with
            bond order 1.5.`}
          </p>
          <h3>Vision and Retinal</h3>
          <p>
            Retinal is the light-sensing molecule in the eye. It has an extended chain of
            alternating C=C and C-C bonds. When a photon hits retinal in your eye, it causes a{' '}
            <em>cis</em>-to-<em>trans</em> isomerization around one C=C bond. This shape change
            triggers a nerve signal. The locked geometry of C=C double bonds is the direct mechanism
            of vision.
          </p>
        </>,

        <>
          <div className="lrn-header">
            <h2>Limitations of Lewis and VB Theory</h2>
          </div>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              {`O$_2$ has a double bond in the Lewis structure, with all electrons paired. If you hold
              liquid oxygen near a strong magnet, what do you expect to happen?`}
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                {`Lewis theory predicts it should be unaffected (diamagnetic). In reality, liquid
                oxygen is attracted to the magnet (paramagnetic). This is a major failure of the
                Lewis model.`}
              </p>
            </details>
          </div>
          <h3>{`The O$_2$ Problem`}</h3>
          <p>
            {`O$_2$ is `}
            <strong>paramagnetic</strong>
            {`: it is attracted to a magnetic field. This tells you that O$_2$ has unpaired
            electrons. You can confirm this with a Gouy balance or a SQUID magnetometer.`}
          </p>
          <p>
            {`The Lewis structure for O$_2$ gives a double bond with all electrons paired. VB theory
            gives the same result. Both predict O$_2$ is `}
            <strong>diamagnetic</strong>
            {` (not attracted to a magnet). This prediction is wrong. This is a major failure of Lewis
            and VB theory.`}
          </p>
          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>
              Magnetic moment comes from electron spin. Paired electrons have opposite spins that
              cancel. An unpaired electron has a net spin and a net magnetic moment. A magnetic
              field attracts this magnetic moment. So paramagnetism means at least one unpaired
              electron.
            </p>
          </div>
          <h3>{`The B$_2$H$_6$ Problem`}</h3>
          <p>
            {`Diborane B$_2$H$_6$ cannot be drawn with a valid Lewis structure. Lewis theory predicts
            14 electrons are needed to satisfy all bonds, but B$_2$H$_6$ has only
            $2(3) + 6(1) = 12$ valence electrons. You are 2 electrons short. Lewis theory and
            standard VB theory have no answer for electron-deficient compounds.`}
          </p>
          <h3>How MO Theory Fixes Both</h3>
          <ol className="lrn-list">
            <li>
              {`For O$_2$: the MO energy-level diagram puts the last two electrons into two
              degenerate $\\pi^*$ antibonding MOs. By Hund's rule, one electron goes into each. Both
              are unpaired. MO theory predicts paramagnetism correctly.`}
            </li>
            <li>
              {`For B$_2$H$_6$: MO theory builds a three-centre two-electron MO that holds the two
              bridging H atoms to both B centres with only 2 electrons per bridge. The electron
              deficit is not a problem because MOs spread over three atoms, not just two.`}
            </li>
          </ol>
          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">{`Lewis/VB for O$_2$`}</span>
              <p>
                {`Lewis structure: O=O, all electrons paired, diamagnetic predicted. This is wrong.`}
              </p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">{`MO theory for O$_2$`}</span>
              <p>
                {`Configuration: $\\sigma_{2s}^2 \\sigma_{2s}^{*2} \\sigma_{2p}^2 \\pi_{2p}^4 \\pi_{2p}^{*2}$. Two unpaired electrons in degenerate $\\pi^*$. Paramagnetic confirmed.`}
              </p>
            </div>
          </div>
        </>,

        <>
          <div className="lrn-header">
            <h2>Molecular Orbital Theory: Homonuclear Diatomics</h2>
          </div>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              If you combine two atomic orbitals from identical atoms into molecular orbitals, how
              many molecular orbitals do you get?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                You always get exactly as many MOs as you put in AOs. Two AOs give two MOs: one
                bonding and one antibonding.
              </p>
            </details>
          </div>
          <p>
            <strong>Molecular orbital (MO) theory</strong> builds molecular wavefunctions from
            linear combinations of atomic orbitals (LCAO). You use MO theory when Lewis/VB theory
            fails (paramagnetism, delocalization, fractional bond orders) or when you need
            quantitative energy levels.
          </p>
          <h3>LCAO-MO Basics</h3>
          <p>Combining two atomic orbitals gives two MOs:</p>
          <p className="lrn-eq">
            {`$$\\psi_+ = N_+(\\psi_A + \\psi_B) \\qquad \\text{(bonding, }\\sigma_g\\text{)}$$`}
          </p>
          <p className="lrn-eq">
            {`$$\\psi_- = N_-(\\psi_A - \\psi_B) \\qquad \\text{(antibonding, }\\sigma_u^*\\text{)}$$`}
          </p>
          <p>
            {`The bonding MO ($\\psi_+$) has enhanced electron density between the nuclei. The
            antibonding MO ($\\psi_-$) has a node between the nuclei.`}
          </p>
          <BondingAntibondingViz />
          <p>
            {`The `}
            <strong>overlap integral</strong>
            {` $S$ measures how much the two orbitals overlap. $S > 0$ when the orbital lobes have
            the same sign (constructive overlap). $S$ falls toward 0 as the atoms move far apart.`}
          </p>
          <h3>Bond Order</h3>
          <p className="lrn-eq lrn-eq-hero">{`$$b = \\frac{1}{2}(N_e - N_e^*)$$`}</p>
          <p>
            {`where $N_e$ is the number of electrons in bonding MOs and $N_e^*$ is the number in
            antibonding MOs. Bond order 1 = single bond, 2 = double bond, 3 = triple bond. Bond
            order 0 means the species does not exist (He$_2$).`}
          </p>
          <h3>Filling MOs: The Aufbau Principle</h3>
          <ul className="lrn-list">
            <li>Aufbau principle: fill lowest available MO first.</li>
            <li>Pauli exclusion: maximum 2 electrons per MO, with opposite spins.</li>
            <li>Hund's rule: for degenerate MOs, add one electron to each before pairing.</li>
          </ul>
          <h3>MO Energy Order for Period 2 Diatomics</h3>
          <p>
            {`For Li$_2$ through N$_2$, $\\pi_{2p}$ lies `}
            <strong>below</strong>
            {` $\\sigma_{2p}$ (due to s-p mixing):`}
          </p>
          <p className="lrn-eq">
            {`$$\\sigma_{2s} < \\sigma_{2s}^* < \\pi_{2p} < \\sigma_{2p} < \\pi_{2p}^* < \\sigma_{2p}^*$$`}
          </p>
          <p>
            {`For O$_2$ and F$_2$, $\\sigma_{2p}$ lies `}
            <strong>below</strong>
            {` $\\pi_{2p}$ (s-p mixing is weaker):`}
          </p>
          <p className="lrn-eq">
            {`$$\\sigma_{2s} < \\sigma_{2s}^* < \\sigma_{2p} < \\pi_{2p} < \\pi_{2p}^* < \\sigma_{2p}^*$$`}
          </p>
          <MOCorrelationViz />
          <h3>Homonuclear Diatomic Configurations</h3>
          <table className="lrn-table">
            <thead>
              <tr>
                <th>Molecule</th>
                <th>Configuration</th>
                <th>Bond order</th>
                <th>Properties</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{`H$_2$`}</td>
                <td>{`$\\sigma_{1s}^2$`}</td>
                <td>1</td>
                <td>diamagnetic</td>
              </tr>
              <tr>
                <td>{`He$_2$`}</td>
                <td>{`$\\sigma_{1s}^2 \\sigma_{1s}^{*2}$`}</td>
                <td>0</td>
                <td>does not exist</td>
              </tr>
              <tr>
                <td>{`Li$_2$`}</td>
                <td>{`$...(\\sigma_{2s}^2)$`}</td>
                <td>1</td>
                <td>diamagnetic</td>
              </tr>
              <tr>
                <td>{`N$_2$`}</td>
                <td>{`$...(\\pi_{2p}^4 \\sigma_{2p}^2)$`}</td>
                <td>3</td>
                <td>diamagnetic</td>
              </tr>
              <tr>
                <td>{`O$_2$`}</td>
                <td>{`$1\\sigma_g^2 1\\sigma_u^2 2\\sigma_g^2 2\\sigma_u^2 1\\pi_u^4 1\\pi_g^2$`}</td>
                <td>2</td>
                <td>paramagnetic</td>
              </tr>
              <tr>
                <td>{`F$_2$`}</td>
                <td>{`$...(\\pi_{2p}^4 \\pi_{2p}^{*4})$`}</td>
                <td>1</td>
                <td>diamagnetic</td>
              </tr>
              <tr>
                <td>{`Ne$_2$`}</td>
                <td>all MOs filled</td>
                <td>0</td>
                <td>does not exist</td>
              </tr>
            </tbody>
          </table>
          <h3>{`Worked Example: F$_2$`}</h3>
          <p>
            {`F has 7 valence electrons. F$_2$ has 14 valence electrons total. Fill the MOs (O$_2$/F$_2$ order):`}
          </p>
          <p className="lrn-eq">
            {`$$\\sigma_{2s}^2\\ \\sigma_{2s}^{*2}\\ \\sigma_{2p}^2\\ \\pi_{2p}^4\\ \\pi_{2p}^{*4}$$`}
          </p>
          <p>{`Bond order $= \\frac{1}{2}[(2 + 2 + 4) - (2 + 4)] = \\frac{1}{2}[8 - 6] = 1$.`}</p>
          <p>
            {`F$_2$ has a single bond. The large number of filled antibonding MOs makes it a weak
            single bond.`}
          </p>
          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>
              Why does filling antibonding MOs reduce bond order? Form your answer before reading
              on.
            </p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                Each electron in an antibonding MO counteracts one electron in a bonding MO. The net
                bonding is the difference. When bonding and antibonding are equally filled, bond
                order reaches 0 and the molecule does not form.
              </p>
            </details>
          </div>
          <h3>{`O$_2$ Configuration and Paramagnetism`}</h3>
          <p>{`O$_2$ has 12 valence electrons. Using the O$_2$/F$_2$ energy order:`}</p>
          <p className="lrn-eq">
            {`$$1\\sigma_g^2\\ 1\\sigma_u^2\\ 2\\sigma_g^2\\ 2\\sigma_u^2\\ 1\\pi_u^4\\ 1\\pi_g^2$$`}
          </p>
          <p>
            {`The $1\\pi_g$ level holds two degenerate MOs. The last two electrons each go into one
            MO with parallel spins (Hund's rule). Bond order $= \\frac{1}{2}[(2+2+2+4) - (2+2+2)] = 2$.
            Two unpaired electrons: O$_2$ is paramagnetic.`}
          </p>
        </>,

        <>
          <div className="lrn-header">
            <h2>Molecular Orbital Theory: Heteronuclear Diatomics</h2>
          </div>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              {`In HF, fluorine is much more electronegative than hydrogen. When you build a bonding
              MO from H 1s and F 2p, which atom's orbital do you think contributes more to the
              bonding MO?`}
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                {`The F 2p orbital contributes more. The bonding MO sits energetically closer to the
                lower-energy AO (F 2p). The two bonding electrons spend more time near F.`}
              </p>
            </details>
          </div>
          <h3>Polar MOs</h3>
          <p>{`For a heteronuclear bond A-B, the MO is:`}</p>
          <p className="lrn-eq">{`$$\\psi = c_A \\psi_A + c_B \\psi_B$$`}</p>
          <p>
            {`When $c_B > c_A$, atom B contributes more to the MO and has higher electron density.
            The bonding MO sits energetically closer to the lower-energy AO.`}
          </p>
          <ul className="lrn-list">
            <li>{`Nonpolar covalent: $c_A^2 = c_B^2$, equal sharing`}</li>
            <li>{`Ionic: one coefficient $\\approx 0$, electrons entirely on one atom`}</li>
            <li>{`Polar covalent: $c_A^2 \\neq c_B^2$, unequal but partial sharing`}</li>
          </ul>
          <h3>Worked Example: HF</h3>
          <p>
            {`H 1s orbital energy: approximately $-13.6$ eV. F 2p lies lower in energy than H 1s
            (F is more electronegative), so the bonding MO sits closer to F in energy.`}
          </p>
          <p>
            {`The bonding MO is mainly F 2p$_z$ in character ($c_F > c_H$). Both bonding electrons
            sit closer to F. F carries $\\delta^-$; H carries $\\delta^+$. Bonding MO energy:
            $-10.7$ eV. Antibonding MO energy: $-6.9$ eV.`}
          </p>
          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>
              {`The bonding MO energy ($-10.7$ eV) sits between the H 1s ($\\approx -13.6$ eV) and
              the antibonding MO ($-6.9$ eV). Why does the bonding MO end up closer to the
              lower-energy AO (F 2p) rather than halfway between? Form your answer before reading on.`}
            </p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                The mixing of two AOs of different energy is unequal. The lower-energy AO
                contributes more to the bonding combination, so the bonding MO is pulled down toward
                the lower AO. Symmetrically, the higher-energy AO contributes more to the
                antibonding combination. The larger the energy difference between the two AOs, the
                more the MOs hug their nearest AO. That same energy difference is what makes the
                bond polar.
              </p>
            </details>
          </div>
          <h3>Worked Example: CO</h3>
          <p>{`CO has 10 valence electrons (C: 4, O: 6). The MO configuration is:`}</p>
          <p className="lrn-eq">{`$$1\\sigma^2\\ 2\\sigma^{*2}\\ 1\\pi^4\\ 3\\sigma^2$$`}</p>
          <p>
            {`Bond order $= \\frac{1}{2}[(2 + 4 + 2) - (2)] = 3$. CO has a triple bond, just like
            N$_2$. The two are isoelectronic: they have the same number of electrons. The highest
            occupied MO (HOMO) is $3\\sigma$, mainly C in character. This HOMO is the donor orbital in
            CO ligand chemistry.`}
          </p>
          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Homonuclear MO diagrams</span>
              <p>
                {`The two AOs are at the same energy, so $c_A = c_B$ and the MOs have equal
                contributions from both atoms.`}
              </p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Heteronuclear MO diagrams</span>
              <p>
                {`The AOs are at different energies. The bonding MO sits closer to the lower-energy
                AO and is weighted toward the more electronegative atom.`}
              </p>
            </div>
          </div>
        </>,

        <>
          <div className="lrn-header">
            <h2>Molecular Orbital Theory in Polyatomic Molecules</h2>
          </div>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              {`In a molecule like SF$_6$ with six identical S-F bonds, would you expect each bond to
              have a bond order of exactly 1, or could it be different? Why?`}
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                {`The bond order per S-F link in the MO picture is $\\frac{2}{3}$, not 1. The bonding
                electrons are spread over the whole molecule, not confined to individual two-atom
                links.`}
              </p>
            </details>
          </div>
          <p>
            In polyatomic molecules, MOs spread over all atoms. You use polyatomic MO theory when
            you need to understand properties that Lewis structures cannot explain, such as colour,
            reactivity of specific frontier orbitals, or non-integer bond orders.
          </p>
          <h3>{`Water: H$_2$O MO Picture`}</h3>
          <p>{`H$_2$O has 8 valence electrons and 6 MOs. The key MOs:`}</p>
          <ul className="lrn-list">
            <li>Two O-H bonding orbitals, each spread over both O-H links</li>
            <li>{`One nonbonding orbital: an O 2p orbital pointing perpendicular to the molecular plane. No H 1s orbital can reach it, so it stays a pure O lone pair`}</li>
            <li>One more nonbonding orbital holding the second oxygen lone pair</li>
          </ul>
          <h3>Benzene Pi System</h3>
          <p>
            {`Six C 2p$_z$ orbitals (one per carbon) combine into six $\\pi$ MOs. The three bonding
            $\\pi$ MOs are occupied (six electrons). The three antibonding $\\pi^*$ MOs are empty. No
            occupied antibonding $\\pi$ MOs means the ring is extra stable.`}
          </p>
          <h3>{`SF$_6$ MO Analysis`}</h3>
          <p>
            {`SF$_6$ has an octahedral structure with 6 S-F bonds. The MO analysis uses S s and p
            orbitals combined with ligand group orbitals (LGOs). An LGO is a symmetry-matched
            combination of orbitals from all six F atoms taken together. The 12 valence electrons
            fill the bonding MOs, and the average S-F bond order works out to $\\frac{2}{3}$ per
            bond. Crucially, no S d orbitals are needed.`}
          </p>
          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>
              {`In the MO picture for SF$_6$, not every S-F link corresponds to a fully bonding pair
              of electrons confined to two atoms. The electrons are spread over the whole molecule.
              When you divide the bonding electron contribution equally over six equivalent S-F
              links, each link gets $\\frac{2}{3}$ of a bond's worth of electron density.`}
            </p>
          </div>
          <h3>HOMO-LUMO Gap and Color</h3>
          <p>
            The <strong>HOMO</strong> (highest occupied molecular orbital) and <strong>LUMO</strong>{' '}
            (lowest unoccupied molecular orbital) determine the energy of the lowest-energy
            electronic transition. When a photon promotes an electron from HOMO to LUMO, the
            molecule absorbs light.
          </p>
          <p>
            Small HOMO-LUMO gap: low-energy photon absorbed, which may be visible light. The
            molecule looks coloured. Large gap: only high-energy (UV) photons are absorbed. The
            molecule appears colourless.
          </p>
          <p>
            {`$\\beta$-carotene and lycopene have long conjugated $\\pi$ systems. Each extra double
            bond narrows the HOMO-LUMO gap. Long conjugated chains have a small enough gap to absorb
            visible light and appear coloured.`}
          </p>
        </>
      ]
    },
    practice: [
      {
        q: `Why does MgO have a much larger lattice enthalpy than NaF?`,
        a: `MgO: Mg²⁺ and O²⁻, so |z₊z₋| = 4. NaF: Na⁺ and F⁻, so |z₊z₋| = 1. Born-Mayer equation: lattice energy ∝ |z₊z₋|/d. Multiplying charge product by 4 roughly quadruples the energy (adjusted for different ionic radii). MgO lattice enthalpy = 3850 kJ mol⁻¹; NaF = 926 kJ mol⁻¹. The higher charge is the dominant reason.`
      },
      {
        q: `What is the bond order of the π component of the N-O bonds in NO₃⁻?`,
        a: `Bond order = 1/3 per N-O π bond. Reasoning: NO₃⁻ has three equivalent N-O bonds from resonance/MO delocalization. One π electron pair delocalized over three N-O links: 2 electrons / 3 bonds = 2/3 electrons per bond. π bond order = 1/3. Total N-O bond order = 1σ + 1/3 π = 4/3. Bond length is shorter than a single bond because of this partial π character.`
      },
      {
        q: `Predict the molecular geometry and bond angle of H₂O using VSEPR.`,
        a: `Geometry: angular (bent). Bond angle: less than 109.5° (measured value 104.5°). Reasoning: O has 6 valence electrons, forms 2 O-H bonds, leaves 2 lone pairs. Total electron pairs = 4: AX₂E₂. Electron arrangement is tetrahedral (4 pairs). Shape name uses only atoms: angular/bent. Two lone pairs each repel bonds more strongly than bond-bond repulsion (Rule 4). This compresses H-O-H below 109.5°.`
      },
      {
        q: `Why does O₂ behave as a paramagnet even though its Lewis structure shows a double bond with all paired electrons?`,
        a: `Lewis structure predicts diamagnetic O₂: the double bond uses all electrons in pairs. This is wrong. MO theory gives the correct answer. O₂ has 12 valence electrons. Configuration: 1σg² 1σu² 2σg² 2σu² 1πu⁴ 1πg². The last two electrons enter two degenerate πg* (antibonding) MOs. Hund's rule: one electron per MO, parallel spins. Two unpaired electrons: paramagnetic. This is the canonical failure of Lewis/VB theory that MO theory correctly handles.`
      },
      {
        q: `Calculate the bond order of F₂ from its MO configuration.`,
        a: `Bond order = 1. Configuration (O₂/F₂ ordering, 14 valence electrons): σ2s² σ2s*² σ2p² π2p⁴ π2p*⁴. Bond order = ½(Ne − Ne*) = ½[(2+2+4) − (2+4)] = ½[8 − 6] = 1. F₂ has a single bond. The large number of antibonding electrons weakens the bond.`
      },
      {
        q: `Assign the hybridization of C in CO₂ and explain the geometry.`,
        a: `Carbon in CO₂ is sp hybridized. Reasoning: C has two double bonds to two O atoms and zero lone pairs: AX₂, linear. Linear geometry requires two σ bond orbitals pointing in opposite directions. Mix one s and one p_z to get two sp hybrids: h₁ = (1/√2)(s + p_z) and h₂ = (1/√2)(s − p_z). These point at 180° to each other. The remaining p_x and p_y each form π bonds with O, giving the two C=O double bonds (σ + π each). Two unhybridized p orbitals: two π bonds.`
      },
      {
        q: `Predict the shape of SF₄ using VSEPR.`,
        a: `Shape: seesaw (AX₄E). Reasoning: S has 6 valence electrons; forms 4 bonds to F, leaving 1 lone pair. Total = 5 electron pairs: trigonal bipyramidal electron arrangement. The lone pair occupies an equatorial position (equatorial lone pairs have less repulsion than axial). Removing lone pair from shape name: four atoms at axial, equatorial-out-of-plane positions = seesaw. Bond angles: axial F-S-F slightly less than 180°, equatorial F-S-equatorial slightly less than 120°, due to lone pair compression.`
      },
      {
        q: `The Pauling electronegativity difference for HF is about 1.8. What does this predict about the bond, and how does the MO picture confirm it?`,
        a: `Prediction: polar covalent with significant ionic character (borderline, Δχ = 1.8 is between 1.5 and 2). MO confirmation: bonding MO = c_H ψ_H + c_F ψ_F with c_F² > c_H² because F has the lower-energy 2p orbital. The two bonding electrons spend more time near F. F carries δ⁻, H carries δ⁺. The bonding MO energy (−10.7 eV) sits closer to the F 2p orbital (which lies lower than H 1s at ≈ −13.6 eV). This unequal sharing is polar covalency confirmed quantitatively.`
      },
      {
        q: `Why does N₂ have the π2p < σ2p MO ordering while O₂ has σ2p < π2p?`,
        a: `For Li₂ through N₂, the 2s and 2p AOs are close enough in energy that they mix (s-p mixing). This pushes the σ2p MO to higher energy (destabilized by mixing with σ2s) and the σ2s* to lower energy. Result: π2p ends up below σ2p for these lighter atoms. For O₂ and F₂, the 2s-2p energy gap is larger, s-p mixing is weaker, and σ2p stays below π2p. This difference matters for bond order calculation but both O₂ and N₂ bond orders work out correctly with their respective orderings.`
      },
      {
        q: `Draw the Lewis structure of SO₄²⁻ and assign formal charges for the structure with two S=O double bonds.`,
        a: `Structure: S at centre, two S=O double bonds and two S-O single bonds (with negative charges). Formal charges: For the two single-bonded O atoms: FC = 6 − 6 − 1 = −1 each. For the two double-bonded O atoms: FC = 6 − 4 − 2 = 0 each. For S: total bonding pairs = ½(2×4 + 2×2) = ½(8+4) = 6. S lone pairs = 0. FC(S) = 6 − 0 − 6 = 0. Overall charge: 0 + 2(−1) + 2(0) = −2. Correct.`
      },
      {
        q: `What experiment confirms that O₂ is paramagnetic?`,
        a: `The Gouy balance confirms O₂ paramagnetism. A Gouy balance measures the force on a sample placed in a magnetic field gradient. A paramagnetic sample is pulled into the stronger region of the field. Liquid O₂ poured near a strong magnet sticks to the magnet. A SQUID magnetometer measures the same pull with high precision. Both confirm O₂ has unpaired electrons, exactly as MO theory predicts.`
      },
      {
        q: `CO has a bond order of 3. Confirm this from its MO configuration.`,
        a: `Bond order = 3. CO has 10 valence electrons (C: 4, O: 6). MO configuration: 1σ² 2σ*² 1π⁴ 3σ². Bonding electrons: 1σ (2) + 1π (4) + 3σ (2) = 8. Antibonding electrons: 2σ* (2). Bond order = ½(8 − 2) = 3. CO is isoelectronic with N₂ (also bond order 3, also 10 valence electrons). The 3σ HOMO is mainly C in character, pointing away from O, which is why CO binds to metal centres through the C end.`
      },
      {
        q: `A student draws H₃O⁺ with formal charges of +1 on each H and −2 on O. What error did the student make?`,
        a: `Error: the student counted bonding electrons incorrectly. Correct formal charges: For each H in H₃O⁺: H has 1 valence electron. H forms 1 bond (2 bonding electrons). FC(H) = 1 − 0 − ½(2) = 0. For O: O has 6 valence electrons. O forms 3 bonds and has 1 lone pair. Lone pair electrons = 2. Bonding electrons = 6. FC(O) = 6 − 2 − ½(6) = 6 − 2 − 3 = +1. Total charge: 3(0) + (+1) = +1. Correct. The student probably assigned all bonding electrons to one atom rather than splitting them equally in the ½B term.`
      },
      {
        q: `Predict: a new diatomic molecule AX has 8 valence electrons total. What bond order do you predict?`,
        a: `Bond order = 2. With 8 electrons and the Li₂-N₂ ordering: fill σ2s² σ2s*² π2p⁴. Bonding: 2 + 4 = 6. Antibonding: 2. Bond order = ½(6 − 2) = 2. AX with 8 electrons is isoelectronic with C₂ (also 8 electrons and bond order 2).`
      },
      {
        q: `Why does trans-CHCl=CHCl have zero dipole moment while the cis isomer has μ = 1.90 D?`,
        a: `The two C-Cl bonds are polar (Cl more electronegative than C). Each C-Cl bond has a dipole moment pointing toward Cl. In the trans isomer, the two C-Cl dipoles point in exactly opposite directions. They cancel exactly. Net μ = 0. In the cis isomer, both C-Cl dipoles point to the same side of the double bond. They add (vector sum). Net μ = 1.90 D. This is a direct consequence of the locked geometry of the C=C double bond: the π bond prevents rotation, so cis and trans isomers are permanent, distinct structures.`
      },
      {
        q: `Use the radius ratio rule to predict the crystal structure of NaCl, given r(Na⁺) = 102 pm and r(Cl⁻) = 181 pm. Show the calculation.`,
        a: `Rock salt (NaCl) structure. r(Na⁺) = 102 pm, r(Cl⁻) = 181 pm. Na⁺ is the smaller ion, so γ = 102/181 = 0.564. This falls in the range 0.414 ≤ γ ≤ 0.732, which predicts rock salt structure. NaCl does adopt the rock salt structure, consistent with this prediction.`
      },
      {
        q: `Identify the HOMO and LUMO of F₂ from its MO configuration. Is the HOMO-LUMO gap large or small compared to conjugated systems?`,
        a: `HOMO of F₂: the π2p* orbital (last filled MO in the configuration σ2s² σ2s*² σ2p² π2p⁴ π2p*⁴). LUMO: the σ2p*. The HOMO-LUMO gap corresponds to a π2p* → σ2p* transition. This gap is relatively large. For comparison, long conjugated chains like β-carotene have many alternating π bonds that progressively narrow the HOMO-LUMO gap, allowing them to absorb visible light and appear coloured.`
      },
      {
        q: `In the MO treatment of H₂O, which orbital is strictly non-bonding and why?`,
        a: `One O 2p orbital points perpendicular to the molecular plane. The two H atoms both lie in that plane. So this O 2p orbital cannot line up with either H 1s orbital, and no combination of the two H 1s orbitals can reach it either. With no H orbital to overlap, it stays a pure oxygen orbital: strictly non-bonding. It holds one of the two lone pairs on O.`
      }
    ],
    reference: {
      category: 'Quick Reference',
      title: 'Structure and Bonding',
      sections: [
        <>
          <h3>Ionic Bonding</h3>
          <div className="ref-formula">
            <p className="lrn-eq">
              {`$$E_{p,\\min} = -\\frac{N_A A |z_+ z_-| e^2}{4\\pi\\varepsilon_0 d}\\left(1 - \\frac{d^*}{d}\\right)$$`}
            </p>
            <p>
              <strong>Born-Mayer Equation.</strong>
              {` When to use: calculating minimum lattice potential energy for an ionic crystal from geometry ($A$), ion charges ($z$), and closest inter-ion distance ($d$). $d^* \\approx 34.5$ pm.`}
            </p>
          </div>
          <div className="ref-formula">
            <p className="lrn-eq">
              {`$$\\gamma = \\frac{r_{\\text{smaller}}}{r_{\\text{larger}}}$$`}
            </p>
            <p>
              <strong>Radius Ratio Rule.</strong>
              {` When to use: predicting crystal structure. $\\gamma < 0.414$ → sphalerite; $0.414 \\leq \\gamma \\leq 0.732$ → rock salt; $\\gamma > 0.732$ → caesium chloride.`}
            </p>
          </div>
          <table className="lrn-table">
            <caption>Madelung Constants</caption>
            <thead>
              <tr>
                <th>Structure</th>
                <th>{`$A$`}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Sphalerite (ZnS)</td>
                <td>1.638</td>
              </tr>
              <tr>
                <td>Rock salt (NaCl)</td>
                <td>1.748</td>
              </tr>
              <tr>
                <td>Caesium chloride (CsCl)</td>
                <td>1.763</td>
              </tr>
              <tr>
                <td>{`Fluorite (CaF$_2$)`}</td>
                <td>2.519</td>
              </tr>
            </tbody>
          </table>
          <table className="lrn-table">
            <caption>Ionic Radii (6-coordinate, pm)</caption>
            <thead>
              <tr>
                <th>Ion</th>
                <th>{`$r$ / pm`}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{`Na$^+$`}</td>
                <td>102</td>
              </tr>
              <tr>
                <td>{`K$^+$`}</td>
                <td>138</td>
              </tr>
              <tr>
                <td>{`F$^-$`}</td>
                <td>128</td>
              </tr>
              <tr>
                <td>{`Cl$^-$`}</td>
                <td>181</td>
              </tr>
              <tr>
                <td>{`O$^{2-}$ (reference)`}</td>
                <td>140</td>
              </tr>
            </tbody>
          </table>
          <table className="lrn-table">
            <caption>{`Lattice Enthalpies (kJ mol$^{-1}$)`}</caption>
            <thead>
              <tr>
                <th>Compound</th>
                <th>{`$\\Delta H_L$`}</th>
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
        </>,
        <>
          <h3>Lewis Structures</h3>
          <div className="ref-formula">
            <p className="lrn-eq">{`$$FC = V - L - \\frac{1}{2}B$$`}</p>
            <p>
              <strong>Formal Charge.</strong>
              {` When to use: choosing the best Lewis structure from candidates. Prefer structure with FC = 0 on all atoms, or negative FC on the more electronegative atom.`}
            </p>
          </div>
        </>,
        <>
          <h3>Electronegativity and Polarity</h3>
          <div className="ref-formula">
            <p className="lrn-eq">
              {`$$\\chi_A - \\chi_B = \\left(\\frac{1}{\\text{eV}}\\right)^{1/2}\\left|D(AB) - \\frac{1}{2}[D(AA) + D(BB)]\\right|^{1/2}$$`}
            </p>
            <p>
              <strong>Pauling Electronegativity.</strong>
              {` When to use: estimating electronegativity differences from bond dissociation energies.`}
            </p>
          </div>
          <div className="ref-formula">
            <p className="lrn-eq">{`$$\\psi = c_A\\psi_A + c_B\\psi_B$$`}</p>
            <p>
              <strong>Polar MO Coefficient.</strong>
              {` When to use: describing polarity of a heteronuclear bond. Larger $c^2$ on atom B means more electron density on B.`}
            </p>
          </div>
          <table className="lrn-table">
            <caption>Pauling Electronegativities</caption>
            <thead>
              <tr>
                <th>Atom</th>
                <th>{`$\\chi$`}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>H</td>
                <td>2.2</td>
              </tr>
              <tr>
                <td>C</td>
                <td>2.6</td>
              </tr>
              <tr>
                <td>N</td>
                <td>3.0</td>
              </tr>
              <tr>
                <td>O</td>
                <td>3.4</td>
              </tr>
              <tr>
                <td>F</td>
                <td>4.0</td>
              </tr>
              <tr>
                <td>Cl</td>
                <td>3.2</td>
              </tr>
            </tbody>
          </table>
          <table className="lrn-table">
            <caption>Dipole Moments</caption>
            <thead>
              <tr>
                <th>Molecule</th>
                <th>{`$\\mu$ / D`}</th>
                <th>Shape</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{`CO$_2$`}</td>
                <td>0</td>
                <td>linear</td>
              </tr>
              <tr>
                <td>{`H$_2$O`}</td>
                <td>1.85</td>
                <td>bent</td>
              </tr>
              <tr>
                <td>HF</td>
                <td>1.91</td>
                <td>diatomic</td>
              </tr>
              <tr>
                <td>{`NH$_3$`}</td>
                <td>1.47</td>
                <td>trigonal pyramidal</td>
              </tr>
              <tr>
                <td>
                  <em>cis</em>
                  {`-CHCl=CHCl`}
                </td>
                <td>1.90</td>
                <td>planar</td>
              </tr>
              <tr>
                <td>
                  <em>trans</em>
                  {`-CHCl=CHCl`}
                </td>
                <td>0</td>
                <td>planar</td>
              </tr>
            </tbody>
          </table>
          <p>
            {`Conversion: $1\\ \\text{D} = 3.336 \\times 10^{-30}\\ \\text{C}\\cdot\\text{m}$. Bond polarity thresholds: $\\Delta\\chi > 2$ → ionic dominant; $\\Delta\\chi < 1.5$ → polar covalent.`}
          </p>
        </>,
        <>
          <h3>VSEPR</h3>
          <table className="lrn-table">
            <caption>VSEPR Shapes</caption>
            <thead>
              <tr>
                <th>Notation</th>
                <th>Electron arrangement</th>
                <th>Shape</th>
                <th>Ideal angles</th>
                <th>Example</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{`AX$_2$`}</td>
                <td>linear</td>
                <td>linear</td>
                <td>{`180°`}</td>
                <td>{`BeCl$_2$, CO$_2$`}</td>
              </tr>
              <tr>
                <td>{`AX$_3$`}</td>
                <td>trigonal planar</td>
                <td>trigonal planar</td>
                <td>{`120°`}</td>
                <td>{`BF$_3$`}</td>
              </tr>
              <tr>
                <td>{`AX$_4$`}</td>
                <td>tetrahedral</td>
                <td>tetrahedral</td>
                <td>{`109.5°`}</td>
                <td>{`CH$_4$`}</td>
              </tr>
              <tr>
                <td>{`AX$_5$`}</td>
                <td>trigonal bipyramidal</td>
                <td>trigonal bipyramidal</td>
                <td>{`90°/120°`}</td>
                <td>{`PCl$_5$`}</td>
              </tr>
              <tr>
                <td>{`AX$_6$`}</td>
                <td>octahedral</td>
                <td>octahedral</td>
                <td>{`90°`}</td>
                <td>{`SF$_6$`}</td>
              </tr>
              <tr>
                <td>{`AX$_3$E`}</td>
                <td>tetrahedral</td>
                <td>trigonal pyramidal</td>
                <td>{`< 109.5°`}</td>
                <td>{`NH$_3$`}</td>
              </tr>
              <tr>
                <td>{`AX$_2$E$_2$`}</td>
                <td>tetrahedral</td>
                <td>angular</td>
                <td>{`< 109.5°`}</td>
                <td>{`H$_2$O`}</td>
              </tr>
              <tr>
                <td>{`AX$_4$E`}</td>
                <td>trigonal bipyramidal</td>
                <td>seesaw</td>
                <td>varied</td>
                <td>{`SF$_4$`}</td>
              </tr>
              <tr>
                <td>{`AX$_3$E$_2$`}</td>
                <td>trigonal bipyramidal</td>
                <td>T-shaped</td>
                <td>varied</td>
                <td>{`ClF$_3$`}</td>
              </tr>
              <tr>
                <td>{`AX$_4$E$_2$`}</td>
                <td>octahedral</td>
                <td>square planar</td>
                <td>{`90°`}</td>
                <td>{`XeF$_4$`}</td>
              </tr>
              <tr>
                <td>{`AX$_5$E`}</td>
                <td>octahedral</td>
                <td>square pyramidal</td>
                <td>varied</td>
                <td>{`BrF$_5$`}</td>
              </tr>
              <tr>
                <td>{`AX$_6$E`}</td>
                <td>pentagonal bipyramidal</td>
                <td>pentagonal bipyramidal</td>
                <td>varied</td>
                <td>{`XeF$_6$`}</td>
              </tr>
            </tbody>
          </table>
          <p>Repulsion hierarchy: lone-lone &gt; lone-bond &gt; bond-bond.</p>
        </>,
        <>
          <h3>Valence Bond Theory</h3>
          <div className="ref-formula">
            <p className="lrn-eq">
              {`$$\\Psi(1,2) = \\psi_A(1)\\psi_B(2) + \\psi_A(2)\\psi_B(1)$$`}
            </p>
            <p>
              <strong>VB Wavefunction for H₂.</strong>
              {` When to use: writing the two-electron covalent VB wavefunction for a homonuclear diatomic.`}
            </p>
          </div>
          <div className="ref-formula">
            <p className="lrn-eq">
              {`$$\\Psi = \\Psi_{\\text{covalent}} + \\lambda\\Psi_{\\text{ionic}}$$`}
            </p>
            <p>
              <strong>Resonance Correction.</strong>
              {` When to use: improving the VB description of a polar bond by mixing ionic character. $\\lambda$ quantifies ionic character.`}
            </p>
          </div>
          <table className="lrn-table">
            <caption>Hybridization Summary</caption>
            <thead>
              <tr>
                <th>Hybridization</th>
                <th>Geometry</th>
                <th>Angle</th>
                <th>Example</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>sp</td>
                <td>linear</td>
                <td>{`180°`}</td>
                <td>{`CO$_2$, HCN`}</td>
              </tr>
              <tr>
                <td>{`sp$^2$`}</td>
                <td>trigonal planar</td>
                <td>{`120°`}</td>
                <td>{`BF$_3$, ethene`}</td>
              </tr>
              <tr>
                <td>{`sp$^3$`}</td>
                <td>tetrahedral</td>
                <td>{`109.5°`}</td>
                <td>{`CH$_4$, NH$_3$`}</td>
              </tr>
              <tr>
                <td>{`sp$^3$d`}</td>
                <td>trigonal bipyramidal</td>
                <td>{`90°/120°`}</td>
                <td>{`PCl$_5$`}</td>
              </tr>
              <tr>
                <td>{`sp$^3$d$^2$`}</td>
                <td>octahedral</td>
                <td>{`90°`}</td>
                <td>{`SF$_6$`}</td>
              </tr>
              <tr>
                <td>{`dsp$^2$`}</td>
                <td>square planar</td>
                <td>{`90°`}</td>
                <td>{`[PtCl$_4$]$^{2-}$`}</td>
              </tr>
              <tr>
                <td>{`d$^2$sp$^3$`}</td>
                <td>octahedral</td>
                <td>{`90°`}</td>
                <td>{`[Fe(CN)$_6$]$^{3-}$`}</td>
              </tr>
            </tbody>
          </table>
          <p>
            {`sp hybrid orbitals (linear): $h_1 = \\frac{1}{\\sqrt{2}}(s + p_z)$, $h_2 = \\frac{1}{\\sqrt{2}}(s - p_z)$`}
          </p>
        </>,
        <>
          <h3>MO Theory, Homonuclear Diatomics</h3>
          <div className="ref-formula">
            <p className="lrn-eq">
              {`$$\\psi_+ = N_+(\\psi_A + \\psi_B) \\qquad \\psi_- = N_-(\\psi_A - \\psi_B)$$`}
            </p>
            <p>
              <strong>LCAO MOs.</strong>
              {` When to use: writing bonding ($\\psi_+$) and antibonding ($\\psi_-$) MOs for two identical atoms. $N$ = normalizing factor.`}
            </p>
          </div>
          <div className="ref-formula">
            <p className="lrn-eq">{`$$b = \\frac{1}{2}(N_e - N_e^*)$$`}</p>
            <p>
              <strong>Bond Order.</strong>
              {` When to use: finding net bond order from filled MO configuration. $N_e$ = bonding electrons, $N_e^*$ = antibonding electrons.`}
            </p>
          </div>
          <table className="lrn-table">
            <caption>Homonuclear Diatomic MO Configurations (Period 2)</caption>
            <thead>
              <tr>
                <th>Molecule</th>
                <th>Configuration (valence)</th>
                <th>{`$b$`}</th>
                <th>Magnetic</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{`H$_2$`}</td>
                <td>{`$\\sigma_{1s}^2$`}</td>
                <td>1</td>
                <td>diamagnetic</td>
              </tr>
              <tr>
                <td>{`He$_2$`}</td>
                <td>{`$\\sigma_{1s}^2\\sigma_{1s}^{*2}$`}</td>
                <td>0</td>
                <td>does not exist</td>
              </tr>
              <tr>
                <td>{`Li$_2$`}</td>
                <td>{`$\\sigma_{2s}^2$`}</td>
                <td>1</td>
                <td>diamagnetic</td>
              </tr>
              <tr>
                <td>{`N$_2$`}</td>
                <td>{`$\\sigma_{2s}^2\\sigma_{2s}^{*2}\\pi_{2p}^4\\sigma_{2p}^2$`}</td>
                <td>3</td>
                <td>diamagnetic</td>
              </tr>
              <tr>
                <td>{`O$_2$`}</td>
                <td>{`$1\\sigma_g^2 1\\sigma_u^2 2\\sigma_g^2 2\\sigma_u^2 1\\pi_u^4 1\\pi_g^2$`}</td>
                <td>2</td>
                <td>paramagnetic</td>
              </tr>
              <tr>
                <td>{`F$_2$`}</td>
                <td>{`$\\sigma_{2s}^2\\sigma_{2s}^{*2}\\sigma_{2p}^2\\pi_{2p}^4\\pi_{2p}^{*4}$`}</td>
                <td>1</td>
                <td>diamagnetic</td>
              </tr>
              <tr>
                <td>{`Ne$_2$`}</td>
                <td>all filled</td>
                <td>0</td>
                <td>does not exist</td>
              </tr>
            </tbody>
          </table>
          <p>
            {`Energy ordering for Li$_2$ to N$_2$: $\\sigma_{2s} < \\sigma_{2s}^* < \\pi_{2p} < \\sigma_{2p} < \\pi_{2p}^* < \\sigma_{2p}^*$`}
          </p>
          <p>
            {`Energy ordering for O$_2$, F$_2$: $\\sigma_{2s} < \\sigma_{2s}^* < \\sigma_{2p} < \\pi_{2p} < \\pi_{2p}^* < \\sigma_{2p}^*$`}
          </p>
        </>
      ]
    },
    customCss: null
  }
  return <LearningTemplate config={config} />
}
