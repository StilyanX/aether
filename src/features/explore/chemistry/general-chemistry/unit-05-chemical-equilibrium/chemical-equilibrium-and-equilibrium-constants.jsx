import { LearningTemplate } from '../../../../../components/learning/learning-template'
import {
  ApproachToEquilibriumViz,
  GibbsExtentViz,
  QvsKViz,
  DissociationAlphaViz,
  LeChatelierViz,
  VantHoffViz,
  HemoglobinSaturationViz
} from '../../../../../components/viz'

export default function ChemicalEquilibriumAndConstants() {
  const config = {
    cssPrefix: 'chem-equilibrium',
    documentTitle: 'Chemical Equilibrium and Equilibrium Constants - AETHER',
    customCss: null,
    learning: {
      category: 'Unit 5',
      groupTitle: 'Chemical Equilibrium',
      title: 'Chemical Equilibrium and Equilibrium Constants',
      subtitle:
        "From the dynamic balance of forward and reverse reactions to K, Q, ICE tables, and the van 't Hoff equation.",
      sections: [
        <>
          <div className="lrn-header">
            <h2>Dynamic Chemical Equilibrium</h2>
          </div>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              You heat solid ammonium chloride and watch the flask. White vapor forms, then the
              flask cools and white solid reappears. What is happening at the molecular level when
              the amount of solid stops changing?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                The forward reaction (solid decomposing into vapor) and the reverse reaction (vapor
                recombining into solid) are running at equal rates. The macro-level amounts are
                stable because the two rates balance exactly, not because all chemistry stopped.
              </p>
            </details>
          </div>
          <p>
            Most reactions you study first seem to go one way. Reactants turn into products and
            stop. But many real reactions reach a point where products start turning back into
            reactants at the same speed. The forward reaction and the reverse reaction both keep
            running. They just run at equal speeds.
          </p>
          <p>
            This state is called <strong>dynamic chemical equilibrium</strong>. The word "dynamic"
            is key. Molecules keep reacting in both directions. The overall amounts do not change
            because the forward and reverse rates balance. The composition looks frozen, but
            chemistry is still happening at the molecular level.
          </p>
          <p>
            Think of a crowded dance floor where people keep moving but the density in each corner
            stays constant. People flow in and out of every region, yet the pattern holds.
            Equilibrium is like that: nonstop molecular motion producing a stable overall
            composition.
          </p>
          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>
              Why does equilibrium favor an in-between mixture rather than pure products? It is the
              point where the total Gibbs energy is lowest. We show exactly why the Gibbs energy
              bottoms out in the middle in the section on the thermodynamic origin of K, below.
            </p>
          </div>
          <h3>Reversible Reactions</h3>
          <p>
            A reaction is <strong>reversible</strong> when both the forward and reverse pathways are
            accessible under the conditions of the experiment. We write reversible reactions with a
            double arrow: {`$\\text{A} \\rightleftharpoons \\text{B}$`}.
          </p>
          <p>
            At the start, the forward rate is fast because only reactants are present. As products
            build up, the reverse rate increases. Eventually both rates become equal. From that
            moment, concentrations stay constant. The system has reached equilibrium.
          </p>
          <ApproachToEquilibriumViz />
          <p>
            The equilibrium composition depends on temperature, but not on the initial amounts (as
            long as the same substances are present). You reach the same final ratio whether you
            start with pure reactants, pure products, or any mixture.
          </p>
        </>,

        <>
          <div className="lrn-header">
            <h2>The Law of Mass Action and the Equilibrium Constant K</h2>
          </div>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              Two experiments start with the same gas-phase reaction but very different initial
              pressures. Will they reach the same K? Will they reach the same equilibrium pressures?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                They will reach the same K, because K depends only on temperature. They will
                generally reach different equilibrium pressures, because the absolute composition
                depends on what you started with.
              </p>
            </details>
          </div>
          <p>
            For the general gas-phase reaction{' '}
            {`$a\\text{A}(g) + b\\text{B}(g) \\rightleftharpoons c\\text{C}(g) + d\\text{D}(g)$`},
            the <strong>equilibrium constant</strong> K is:
          </p>
          <p className="lrn-eq lrn-eq-hero">{`$$K = \\frac{P_{\\text{C}}^c \\, P_{\\text{D}}^d}{P_{\\text{A}}^a \\, P_{\\text{B}}^b}$$`}</p>
          <p>
            All pressures are numerical values in bar (with {`$P^\\circ = 1\\,\\text{bar}$`}{' '}
            absorbed). This specific combination equals the same number K at any equilibrium
            composition at a given temperature. This is the <strong>law of mass action</strong>: K
            is a fixed property of the reaction and the temperature, nothing else.
          </p>
          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>
              Why must K be dimensionless? Because it is defined through activities (dimensionless
              ratios), not raw pressures. K appears in {`$\\Delta_r G^\\circ = -RT \\ln K$`}. You
              cannot take the logarithm of a quantity with units. Activities strip the units away,
              so K is always a pure number.
            </p>
          </div>
          <h3>Activities: The Proper Building Blocks</h3>
          <p>
            First, a quick term. The <strong>partial pressure</strong> of a gas is the pressure that
            one gas in a mixture would exert if it were alone in the container. The K expression
            above uses each gas's partial pressure.
          </p>
          <p>
            Strictly speaking, K is built from <strong>activities</strong> {`$a_j$`}, not from raw
            concentrations or pressures. An <strong>activity</strong> measures how much a species
            counts relative to a chosen reference condition called its standard state. The activity
            is a dimensionless ratio:
          </p>
          <table>
            <thead>
              <tr>
                <th>Phase</th>
                <th>Activity</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Ideal gas</td>
                <td>
                  {`$a_j = P_j / P^\\circ$`} where {`$P^\\circ = 1\\,\\text{bar}$`}
                </td>
              </tr>
              <tr>
                <td>Solute in solution</td>
                <td>
                  {`$a_j = [\\text{J}] / c^\\circ$`} where{' '}
                  {`$c^\\circ = 1\\,\\text{mol}\\,\\text{L}^{-1}$`}
                </td>
              </tr>
              <tr>
                <td>Pure solid or pure liquid</td>
                <td>{`$a_j = 1$`} (exact)</td>
              </tr>
            </tbody>
          </table>
          <h3>Writing K: Worked Example</h3>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              For {`$\\text{N}_2(g) + 3\\,\\text{H}_2(g) \\rightleftharpoons 2\\,\\text{NH}_3(g)$`},
              how many pressure terms appear in the numerator? In the denominator?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                One term in the numerator: {`$P_{\\text{NH}_3}^2$`}. Two terms in the denominator:{' '}
                {`$P_{\\text{N}_2}$`} and {`$P_{\\text{H}_2}^3$`}.
              </p>
            </details>
          </div>
          <p>
            Products go in the numerator, each raised to its stoichiometric coefficient. A
            stoichiometric coefficient is the number in front of each species in the balanced
            equation. Reactants go in the denominator.
          </p>
          <p className="lrn-eq">{`$$K = \\frac{P_{\\text{NH}_3}^2}{P_{\\text{N}_2} \\cdot P_{\\text{H}_2}^3}$$`}</p>
          <p>
            The denominator has {`$P_{\\text{H}_2}^3$`} because the coefficient of {`$\\text{H}_2$`}{' '}
            is 3.
          </p>
          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>
              Why is {`$P_{\\text{H}_2}$`} cubed but {`$P_{\\text{N}_2}$`} only to the first power?
            </p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                The stoichiometric coefficient of {`$\\text{H}_2$`} is 3, and the coefficient of{' '}
                {`$\\text{N}_2$`} is 1. Each pressure is raised to the power equal to its
                coefficient. The law of mass action always uses stoichiometric coefficients as
                exponents.
              </p>
            </details>
          </div>
          <h3>K Magnitude: What It Tells You</h3>
          <table>
            <thead>
              <tr>
                <th>K value</th>
                <th>Meaning</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{`$K > 10^3$`}</td>
                <td>Products strongly favored at equilibrium</td>
              </tr>
              <tr>
                <td>{`$10^{-3} < K < 10^3$`}</td>
                <td>Both reactants and products present significantly</td>
              </tr>
              <tr>
                <td>{`$K < 10^{-3}$`}</td>
                <td>Reactants strongly favored at equilibrium</td>
              </tr>
            </tbody>
          </table>
          <p>
            For example,{' '}
            {`$\\text{H}_2(g) + \\text{Cl}_2(g) \\rightleftharpoons 2\\,\\text{HCl}(g)$`} has{' '}
            {`$K = 4.0 \\times 10^{18}$`} at 500 K. HCl is overwhelmingly favored. Virtually no{' '}
            {`$\\text{H}_2$`} or {`$\\text{Cl}_2$`} remains at equilibrium.
          </p>
          <h3>Homogeneous and Heterogeneous Equilibria</h3>
          <p>
            A <strong>homogeneous equilibrium</strong> has all species in the same phase. A{' '}
            <strong>heterogeneous equilibrium</strong> has species in more than one phase.
          </p>
          <p>
            For pure solids and pure liquids, the activity equals 1. They do not appear in K. For
            example:
          </p>
          <p className="lrn-eq">{`$$\\text{CaCO}_3(s) \\rightleftharpoons \\text{CaO}(s) + \\text{CO}_2(g) \\qquad K = P_{\\text{CO}_2}$$`}</p>
          <p>
            The two solids drop out because each has activity 1. K equals only the{' '}
            {`$\\text{CO}_2$`} pressure. Another example:{' '}
            {`$\\text{Ni}(s) + 4\\,\\text{CO}(g) \\rightleftharpoons \\text{Ni(CO)}_4(g)$`} gives{' '}
            {`$K = P_{\\text{Ni(CO)}_4} / P_{\\text{CO}}^4$`}.
          </p>
          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Homogeneous Equilibria</span>
              <p>
                Every species appears in K with its activity. All species in one phase contribute.
              </p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Heterogeneous Equilibria</span>
              <p>
                Pure solids and liquids drop out (activity = 1). K involves only mobile phases.
                Adding more solid does not change K.
              </p>
            </div>
          </div>
          <h3>Alternative Forms of K</h3>
          <p>Manipulating the chemical equation changes K in a predictable way:</p>
          <ul className="lrn-list">
            <li>
              <strong>Reverse the reaction:</strong> {`$K_\\text{reverse} = 1/K$`}
            </li>
            <li>
              <strong>Multiply by a factor {`$n$`}:</strong> {`$K_\\text{new} = K^n$`}
            </li>
            <li>
              <strong>Add two reactions:</strong> {`$K_\\text{total} = K_1 \\times K_2$`}
            </li>
          </ul>
          <p>
            These rules follow directly from the definition. If you double all coefficients, every
            exponent in K doubles, so K becomes {`$K^2$`}.
          </p>
        </>,

        <>
          <div className="lrn-header">
            <h2>The Thermodynamic Origin of K</h2>
          </div>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              You are told {`$\\Delta_r G^\\circ = -32.9\\,\\text{kJ mol}^{-1}$`} for a reaction at
              298 K. Before calculating, predict whether K will be greater than 1 or less than 1,
              and whether the products or reactants are favored.
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                A negative {`$\\Delta_r G^\\circ$`} means {`$K > 1$`}, so products are favored. From{' '}
                {`$\\Delta_r G^\\circ = -RT \\ln K$`}, a negative left side requires a positive{' '}
                {`$\\ln K$`}, which means {`$K > 1$`}.
              </p>
            </details>
          </div>
          <h3>The Gibbs Energy Minimum</h3>
          <p>
            The Gibbs energy {`$G$`} of a reaction mixture changes as the reaction proceeds. We
            track the progress with the <strong>extent of reaction</strong> {`$\\xi$`} (the Greek
            letter xi). It counts how far the reaction has gone, in moles. When {`$\\xi$`} moles of
            reaction happen, the amount of each species J changes by{' '}
            {`$n_\\text{J}(\\xi) = n_\\text{J}(0) + \\nu_\\text{J}\\,\\xi$`}, where{' '}
            {`$\\nu_\\text{J}$`} is its signed coefficient (negative for reactants, positive for
            products).
          </p>
          <p>
            Plot {`$G$`} against {`$\\xi$`}. The curve is U-shaped with a minimum somewhere in the
            middle. That minimum is the equilibrium point.
          </p>
          <GibbsExtentViz />
          <p>
            The <strong>reaction Gibbs energy</strong> {`$\\Delta_r G$`} is the slope of that curve
            at any point, how fast {`$G$`} changes as {`$\\xi$`} advances, at constant pressure and
            temperature:
          </p>
          <p className="lrn-eq">{`$$\\Delta_r G = \\frac{dG}{d\\xi} \\quad (\\text{at constant } p, T)$$`}</p>
          <p>
            When the slope is negative ({`$\\Delta_r G < 0$`}), more product forms spontaneously. A
            spontaneous change happens on its own, without a push. When the slope is positive (
            {`$\\Delta_r G > 0$`}), the reaction goes backward spontaneously. At the minimum, the
            slope is zero: equilibrium.
          </p>
          <p className="lrn-eq">{`$$\\text{Equilibrium condition: } \\Delta_r G = 0$$`}</p>
          <p>
            The U-shape comes from the entropy of mixing. A pure-reactants mixture and a
            pure-products mixture both have zero mixing entropy, so they sit higher on the {`$G$`}{' '}
            curve than any blend. The Gibbs energy of mixing always dips below the straight line
            connecting the two pure extremes. This guarantees a minimum at an intermediate
            composition.
          </p>
          <h3>The Reaction Gibbs Energy Equation</h3>
          <p>At any composition during the reaction, {`$\\Delta_r G$`} obeys:</p>
          <p className="lrn-eq lrn-eq-hero">{`$$\\Delta_r G = \\Delta_r G^\\circ + RT \\ln Q$$`}</p>
          <p>
            Here {`$\\Delta_r G^\\circ$`} is the <strong>standard reaction Gibbs energy</strong>{' '}
            (the value when all species are in their standard states),{' '}
            {`$R = 8.3145\\,\\text{J mol}^{-1}\\text{K}^{-1}$`}, {`$T$`} is temperature in kelvin,
            and {`$Q$`} is the <strong>reaction quotient</strong>. Q has the same
            products-over-reactants form as K, but you build it from the activities at the current
            composition, not at equilibrium:{' '}
            {`$Q = a_\\text{C}^c a_\\text{D}^d / (a_\\text{A}^a a_\\text{B}^b)$`}. The next section
            explores Q fully. A <strong>standard state</strong> is the species at 1 bar (for a gas)
            or 1 mol per liter (for a solute), the agreed reference condition.
          </p>
          <p>
            <strong>Derivation (step by step):</strong> Each species J in an ideal gas mixture has a
            molar Gibbs energy{' '}
            {`$G_m(\\text{J}) = G_m^\\circ(\\text{J}) + RT \\ln(P_\\text{J}/P^\\circ)$`}.
          </p>
          <ol className="lrn-list">
            <li>
              Write{' '}
              {`$\\Delta_r G = c\\,G_m(\\text{C}) + d\\,G_m(\\text{D}) - a\\,G_m(\\text{A}) - b\\,G_m(\\text{B})$`}
            </li>
            <li>
              Substitute each {`$G_m(\\text{J}) = G_m^\\circ(\\text{J}) + RT \\ln a_\\text{J}$`}
            </li>
            <li>
              Collect standard terms:{' '}
              {`$\\Delta_r G^\\circ = c\\,G_m^\\circ(\\text{C}) + d\\,G_m^\\circ(\\text{D}) - a\\,G_m^\\circ(\\text{A}) - b\\,G_m^\\circ(\\text{B})$`}
            </li>
            <li>
              Collect log terms using {`$s \\ln x = \\ln x^s$`} and {`$\\ln x + \\ln y = \\ln xy$`}:
              the activity terms combine to {`$\\ln Q$`} where{' '}
              {`$Q = a_\\text{C}^c a_\\text{D}^d / (a_\\text{A}^a a_\\text{B}^b)$`}
            </li>
            <li>Result: {`$\\Delta_r G = \\Delta_r G^\\circ + RT \\ln Q$`}</li>
          </ol>
          <div className="lrn-faded">
            <p className="lrn-faded-phase-label">KEY MOVE</p>
            <p>
              The key algebraic move is step 4. You collect all the {`$RT \\ln a_j$`} terms. Each
              term {`$\\nu_j RT \\ln a_j = RT \\ln a_j^{\\nu_j}$`}. Here {`$\\nu_j$`} carries a
              sign: it is negative for reactants and positive for products. Adding log terms
              multiplies the arguments. Subtracting log terms divides. This turns the sum into{' '}
              {`$RT \\ln Q$`} where Q is products-over-reactants in activity form.
            </p>
          </div>
          <h3>Deriving {`$\\Delta_r G^\\circ = -RT \\ln K$`}</h3>
          <p>
            At equilibrium, {`$\\Delta_r G = 0$`} and {`$Q = K$`} by definition. Substituting:
          </p>
          <p className="lrn-eq">{`$$0 = \\Delta_r G^\\circ + RT \\ln K$$`}</p>
          <p className="lrn-eq lrn-eq-hero">{`$$\\boxed{\\Delta_r G^\\circ = -RT \\ln K}$$`}</p>
          <p>
            This is the fundamental bridge between thermodynamics and equilibrium. K is not an extra
            assumption. It follows directly from the condition that G is at a minimum.
          </p>
          <p>
            The standard reaction Gibbs energy is computed from standard Gibbs energies of
            formation:
          </p>
          <p className="lrn-eq">{`$$\\Delta_r G^\\circ = \\sum_{\\text{products}} n\\,\\Delta_f G^\\circ - \\sum_{\\text{reactants}} n\\,\\Delta_f G^\\circ$$`}</p>
          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">{`$\\Delta_r G$`} (current slope)</span>
              <p>
                The slope of the G curve at the current composition. It is zero at equilibrium. It
                tells you the spontaneous direction right now.
              </p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">{`$\\Delta_r G^\\circ$`} (standard state)</span>
              <p>
                The Gibbs energy change when all species are in their standard states (1 bar for
                gases). Fixed at a given temperature. Relates to K. A negative{' '}
                {`$\\Delta_r G^\\circ$`} means {`$K > 1$`}, but does not mean the reaction is
                spontaneous at every composition.
              </p>
            </div>
          </div>
          <h3>Sign Conventions</h3>
          <p>From {`$\\Delta_r G^\\circ = -RT \\ln K$`}:</p>
          <ul className="lrn-list">
            <li>
              If {`$\\Delta_r G^\\circ < 0$`} then {`$\\ln K > 0$`}, so {`$K > 1$`}: products are
              favored.
            </li>
            <li>
              If {`$\\Delta_r G^\\circ > 0$`} then {`$\\ln K < 0$`}, so {`$K < 1$`}: reactants are
              favored.
            </li>
            <li>
              If {`$\\Delta_r G^\\circ = 0$`} then {`$K = 1$`}: neither strongly favored.
            </li>
          </ul>
          <p>
            A reaction with {`$\\Delta_r G < 0$`} at the current composition is{' '}
            <strong>exergonic</strong> (spontaneous as written). A reaction with{' '}
            {`$\\Delta_r G > 0$`} is <strong>endergonic</strong> (requires work input). These refer
            to the slope at the current composition, not to {`$\\Delta_r G^\\circ$`}.
          </p>
          <p>
            Do not confuse these with heat words. <strong>Exergonic</strong> and{' '}
            <strong>endergonic</strong> describe the Gibbs energy {`$\\Delta_r G$`} (which direction
            is spontaneous). <strong>Exothermic</strong> and <strong>endothermic</strong> describe
            the enthalpy {`$\\Delta_r H^\\circ$`} (whether the reaction releases or absorbs heat). A
            reaction can be exothermic yet endergonic, because{' '}
            {`$\\Delta_r G^\\circ = \\Delta_r H^\\circ - T\\Delta_r S^\\circ$`} also depends on
            entropy.
          </p>
          <h3>Worked Example: Calculating K from {`$\\Delta_r G^\\circ$`}</h3>
          <p>
            For{' '}
            {`$\\tfrac{1}{2}\\,\\text{H}_2(g) + \\tfrac{1}{2}\\,\\text{I}_2(s) \\rightarrow \\text{HI}(g)$`}{' '}
            at 25.00 C, {`$\\Delta_r G^\\circ = +1.70\\,\\text{kJ mol}^{-1}$`}.
          </p>
          <p>Use {`$\\Delta_r G^\\circ = -RT \\ln K$`}:</p>
          <p className="lrn-eq">{`$$\\ln K = \\frac{-\\Delta_r G^\\circ}{RT} = \\frac{-(1.70 \\times 10^3\\,\\text{J mol}^{-1})}{(8.3145\\,\\text{J mol}^{-1}\\text{K}^{-1})(298.15\\,\\text{K})} = -0.685$$`}</p>
          <p className="lrn-eq">{`$$K = e^{-0.685} = 0.50$$`}</p>
          <p>Since {`$K < 1$`}, reactants are slightly favored at 25 C.</p>
          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>
              Why is the answer {`$K = 0.50$`} rather than {`$K = 0$`} even though{' '}
              {`$\\Delta_r G^\\circ > 0$`}?
            </p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                A positive {`$\\Delta_r G^\\circ$`} means the standard state favors reactants, but{' '}
                {`$K = 0.50$`} still means roughly equal amounts of HI and reactants at equilibrium.{' '}
                {`$\\Delta_r G^\\circ > 0$`} only says {`$K < 1$`}, not {`$K = 0$`}. The exponential{' '}
                {`$e^{-0.685}$`} is never exactly zero for any finite {`$\\Delta_r G^\\circ$`}.
              </p>
            </details>
          </div>
          <h3>Worked Example: {`$\\Delta_r G$`} from Q</h3>
          <p>
            For {`$2\\,\\text{SO}_2(g) + \\text{O}_2(g) \\rightarrow 2\\,\\text{SO}_3(g)$`} at 25.00
            C, {`$\\Delta_r G^\\circ = -141.74\\,\\text{kJ mol}^{-1}$`}. All partial pressures equal
            100 bar.
          </p>
          <p>
            <strong>Step 1:</strong> Calculate Q. Each pressure in bar divided by {`$P^\\circ = 1$`}{' '}
            bar:
          </p>
          <p className="lrn-eq">{`$$Q = \\frac{(100.)^2}{(100.)^2 \\times (100.)} = \\frac{10^4}{10^6} = 1.00 \\times 10^{-2}$$`}</p>
          <p>
            <strong>Step 2:</strong>{' '}
            {`$RT = (8.3145 \\times 10^{-3}\\,\\text{kJ mol}^{-1}\\text{K}^{-1})(298.15\\,\\text{K}) = 2.479\\,\\text{kJ mol}^{-1}$`}
          </p>
          <p>
            <strong>Step 3:</strong> Calculate {`$\\Delta_r G$`}:
          </p>
          <p className="lrn-eq">{`$$\\Delta_r G = -141.74 + (2.479)\\ln(1.00 \\times 10^{-2}) = -141.74 + (2.479)(-4.605) = -153.16\\,\\text{kJ mol}^{-1}$$`}</p>
          <p>
            Since {`$\\Delta_r G < 0$`}, the reaction is spontaneous in the forward direction under
            these conditions.
          </p>
          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>
              Q is much smaller than K here. Why does that make {`$\\Delta_r G$`} even more
              negative?
            </p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                Q small means far fewer products than at equilibrium. The system is on the reactants
                side. The forward reaction is strongly spontaneous. In the equation{' '}
                {`$\\Delta_r G = \\Delta_r G^\\circ + RT \\ln Q$`}, a small Q means a large negative{' '}
                {`$\\ln Q$`}, making {`$\\Delta_r G$`} even more negative than{' '}
                {`$\\Delta_r G^\\circ$`}.
              </p>
            </details>
          </div>
          <h3>
            K from {`$\\Delta H^\\circ$`} and {`$\\Delta S^\\circ$`}
          </h3>
          <p>
            Since {`$\\Delta_r G^\\circ = \\Delta_r H^\\circ - T\\Delta_r S^\\circ$`} and{' '}
            {`$\\Delta_r G^\\circ = -RT \\ln K$`}:
          </p>
          <p className="lrn-eq">{`$$\\ln K = -\\frac{\\Delta_r H^\\circ}{RT} + \\frac{\\Delta_r S^\\circ}{R}$$`}</p>
          <p>
            The first term controls the energetic contribution. The second controls the entropic
            contribution. At high temperature, the entropy term {`$e^{\\Delta_r S^\\circ / R}$`}{' '}
            wins. At low temperature, the energy term {`$e^{-\\Delta_r H^\\circ / RT}$`} wins.
          </p>
          <h3>The Molecular Picture: Why K Has the Value It Does</h3>
          <p>
            The two factors in {`$\\ln K = -\\Delta_r H^\\circ/RT + \\Delta_r S^\\circ/R$`} have a
            molecular meaning. The energy term {`$e^{-\\Delta_r H^\\circ / RT}$`} favors the side
            that sits lower in energy; the entropy term {`$e^{\\Delta_r S^\\circ / R}$`} favors the
            side with more ways to store energy. (Molecules share energy across their levels by the
            <strong> Boltzmann distribution</strong>, the rule that lower-energy states are more
            crowded.) This is why an endothermic reaction can still have {`$K > 1$`}: a big entropy
            gain can outweigh the energy cost.
          </p>
          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>
              How can an endothermic reaction (products higher in energy) ever have {`$K > 1$`}?
            </p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                K is the product of two molecular factors. The energetic factor{' '}
                {`$e^{-\\Delta_r H^\\circ / RT}$`} is less than 1 for an endothermic reaction. But
                the entropic factor {`$e^{\\Delta_r S^\\circ / R}$`} can be much greater than 1 if
                the products have denser, more accessible energy levels. When the entropy gain
                outweighs the energy cost, their product K exceeds 1. Entropy, not just energy, sets
                the equilibrium position.
              </p>
            </details>
          </div>
        </>,

        <>
          <div className="lrn-header">
            <h2>The Reaction Quotient Q and the Direction of Reaction</h2>
          </div>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              A vessel contains {`$\\text{H}_2$`}, {`$\\text{I}_2$`}, and HI gases, all at the same
              pressure. Without knowing K, what additional information do you need to predict which
              direction {`$\\text{H}_2 + \\text{I}_2 \\rightleftharpoons 2\\,\\text{HI}$`} will
              shift?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                You need K. Calculate Q from the current pressures, then compare Q to K. If{' '}
                {`$Q < K$`}, the reaction shifts forward. If {`$Q > K$`}, it shifts in reverse.
              </p>
            </details>
          </div>
          <p>
            The <strong>reaction quotient</strong> Q has the same mathematical form as K, but it is
            evaluated at any composition, not only at equilibrium:
          </p>
          <p className="lrn-eq">{`$$Q = \\frac{P_{\\text{C}}^c \\, P_{\\text{D}}^d}{P_{\\text{A}}^a \\, P_{\\text{B}}^b} \\quad \\text{(at any stage)}$$`}</p>
          <QvsKViz />
          <table>
            <thead>
              <tr>
                <th>Condition</th>
                <th>Meaning</th>
                <th>Direction</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{`$Q < K$`}</td>
                <td>Too few products, too many reactants</td>
                <td>Forward (more product forms)</td>
              </tr>
              <tr>
                <td>{`$Q = K$`}</td>
                <td>At equilibrium</td>
                <td>No net change</td>
              </tr>
              <tr>
                <td>{`$Q > K$`}</td>
                <td>Too many products, too few reactants</td>
                <td>Reverse (reactants reform)</td>
              </tr>
            </tbody>
          </table>
          <p>This is the molecular compass. The system always moves to make {`$Q \\to K$`}.</p>
          <h3>Worked Example: Predicting Direction</h3>
          <p>
            For {`$\\text{H}_2(g) + \\text{I}_2(g) \\rightleftharpoons 2\\,\\text{HI}(g)$`} with{' '}
            {`$K = 46$`} at 783 K, all three gases are present at 55 kPa (= 0.55 bar).
          </p>
          <p className="lrn-eq">{`$$Q = \\frac{(0.55)^2}{(0.55)(0.55)} = \\frac{0.3025}{0.3025} = 1.0$$`}</p>
          <p>
            Since {`$Q = 1.0 < K = 46$`}, the system has too few products. The reaction shifts
            forward and forms more HI.
          </p>
          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>Why is Q = 1 when all pressures are equal, regardless of their actual values?</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                The numerator is {`$P_{\\text{HI}}^2$`} and the denominator is{' '}
                {`$P_{\\text{H}_2} \\cdot P_{\\text{I}_2}$`}. When all three pressures are equal,
                the ratio becomes {`$P^2 / (P \\cdot P) = 1$`}. The absolute pressure cancels out.
                This holds for any reaction where {`$\\Delta n = 0$`} (equal moles of gas on both
                sides).
              </p>
            </details>
          </div>
          <h3>Extent of Reaction</h3>
          <p>
            The <strong>extent of reaction</strong> {`$\\xi$`} tracks how much reaction has
            occurred. For species A with stoichiometric coefficient {`$\\nu_\\text{A}$`} (negative
            for reactants, positive for products):
          </p>
          <p className="lrn-eq">{`$$n_\\text{A}(\\xi) = n_\\text{A}(0) + \\nu_\\text{A}\\,\\xi$$`}</p>
          <p>The equilibrium lies at the {`$\\xi$`} where G is minimized.</p>
          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>
              Why does comparing Q to K reliably predict the direction every time? Because Q and K
              both measure products over reactants in the same form. They differ only in when you
              evaluate them. The sign of {`$\\Delta_r G = RT \\ln(Q/K)$`} follows directly from the
              ratio {`$Q/K$`}. If {`$Q < K$`}, the log is negative, so {`$\\Delta_r G < 0$`} and the
              forward reaction is spontaneous. The Q-versus-K test is just the spontaneity condition
              written in concentrations.
            </p>
          </div>
        </>,

        <>
          <div className="lrn-header">
            <h2>Equilibrium Constants: Kc, Kp, and Kx</h2>
          </div>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              If Kp and Kc are different for the same reaction, which one should you use in{' '}
              {`$\\Delta_r G^\\circ = -RT \\ln K$`}? What hints in the formula give you the answer?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                Use the thermodynamic K (defined through activities, which for gases are pressures
                divided by {`$P^\\circ$`}). The formula {`$\\Delta_r G^\\circ = -RT \\ln K$`}{' '}
                requires the dimensionless thermodynamic K. Kc uses concentrations and is only equal
                to K when {`$\\Delta n = 0$`}.
              </p>
            </details>
          </div>
          <h3>Kc: Equilibrium Constant in Molar Concentrations</h3>
          <p>
            For the reaction{' '}
            {`$a\\text{A} + b\\text{B} \\rightleftharpoons c\\text{C} + d\\text{D}$`} (all in
            solution or as ideal gases):
          </p>
          <p className="lrn-eq">{`$$K_c = \\frac{[\\text{C}]^c[\\text{D}]^d}{[\\text{A}]^a[\\text{B}]^b}$$`}</p>
          <p>
            Each {`$[\\text{J}]$`} is the numerical value of the molar concentration in{' '}
            {`$\\text{mol L}^{-1}$`} (divided by {`$c^\\circ = 1\\,\\text{mol L}^{-1}$`} to keep{' '}
            {`$K_c$`} dimensionless).
          </p>
          <h3>Kx: Equilibrium Constant in Mole Fractions</h3>
          <p className="lrn-eq">{`$$K_x = \\prod_j x_j^{\\nu_j} = \\frac{x_\\text{C}^c \\, x_\\text{D}^d}{x_\\text{A}^a \\, x_\\text{B}^b}$$`}</p>
          <p>{`$K_x$`} depends on total pressure. It relates to K by:</p>
          <p className="lrn-eq">{`$$K = K_x \\left(\\frac{p}{p^\\circ}\\right)^{\\Delta\\nu}$$`}</p>
          <p>where {`$\\Delta\\nu = (c + d) - (a + b)$`} is the change in moles of gas.</p>
          <h3>Connecting K and Kc</h3>
          <p>
            First fix the symbol. We write {`$\\Delta n = (c+d) - (a+b)$`} for the change in moles
            of gas, products minus reactants. This is the same quantity as {`$\\Delta\\nu$`} above;
            both count how the total moles of gas change. We use {`$\\Delta n$`} from here on.
          </p>
          <p>
            Now build the conversion. Start from K in pressures and replace each gas pressure using
            the ideal gas law {`$P_j = [\\text{J}]\\,RT$`}. Writing pressures as activities{' '}
            {`$P_j/P^\\circ$`} and concentrations as activities {`$[\\text{J}]/c^\\circ$`}:
          </p>
          <p className="lrn-eq">{`$$\\frac{P_j}{P^\\circ} = \\frac{[\\text{J}]\\,RT}{P^\\circ} = \\frac{[\\text{J}]}{c^\\circ}\\cdot\\frac{c^\\circ RT}{P^\\circ}$$`}</p>
          <p>
            Each species carries one such factor {`$(c^\\circ RT / P^\\circ)$`}, raised to its
            signed coefficient. The signed coefficients add up to {`$\\Delta n$`}, so the factors
            collect into a single power {`$\\Delta n$`}:
          </p>
          <p className="lrn-eq lrn-eq-hero">{`$$K = \\left(\\frac{c^\\circ RT}{P^\\circ}\\right)^{\\!\\Delta n} K_c$$`}</p>
          <p>
            The leftover factor {`$c^\\circ RT / P^\\circ$`} is just a number times T. Put in the
            standard values {`$P^\\circ = 1\\,\\text{bar}$`},{' '}
            {`$c^\\circ = 1\\,\\text{mol L}^{-1}$`}, and{' '}
            {`$R = 0.083145\\,\\text{L bar mol}^{-1}\\text{K}^{-1}$`}:
          </p>
          <p className="lrn-eq">{`$$\\frac{c^\\circ R}{P^\\circ} = \\frac{1\\,\\text{mol L}^{-1} \\times 0.083145\\,\\text{L bar mol}^{-1}\\text{K}^{-1}}{1\\,\\text{bar}} = \\frac{1}{12.03}\\,\\text{K}^{-1}$$`}</p>
          <p>
            So {`$12.03\\,\\text{K} = P^\\circ/(c^\\circ R)$`}, and{' '}
            {`$c^\\circ RT/P^\\circ = T/(12.03\\,\\text{K})$`}. The conversion becomes:
          </p>
          <p className="lrn-eq lrn-eq-hero">{`$$K = \\left(\\frac{T}{12.03\\,\\text{K}}\\right)^{\\!\\Delta n} K_c$$`}</p>
          <p>
            If {`$\\Delta n = 0$`}, the factor is 1 and {`$K = K_c$`}.
          </p>
          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">K (thermodynamic)</span>
              <p>
                Defined through activities. Use in {`$\\Delta_r G^\\circ = -RT \\ln K$`}. Equal to
                Kc only when {`$\\Delta n = 0$`}.
              </p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Kc (practical)</span>
              <p>
                Uses molar concentrations. Convenient for lab work. Convert using{' '}
                {`$(T/12.03\\,\\text{K})^{\\Delta n}$`} when {`$\\Delta n \\neq 0$`}.
              </p>
            </div>
          </div>
          <h3>Worked Example: Converting K to Kc</h3>
          <p>
            For {`$2\\,\\text{SO}_2(g) + \\text{O}_2(g) \\rightleftharpoons 2\\,\\text{SO}_3(g)$`}{' '}
            at 400 C (673 K), {`$K = 3.1 \\times 10^4$`}.
          </p>
          <p>
            <strong>Step 1:</strong> Find {`$\\Delta n$`}. Moles of gaseous products minus moles of
            gaseous reactants:
          </p>
          <p className="lrn-eq">{`$$\\Delta n = 2 - (2 + 1) = -1$$`}</p>
          <p>
            <strong>Step 2:</strong> Apply the conversion:
          </p>
          <p className="lrn-eq">{`$$K_c = K \\left(\\frac{T}{12.03\\,\\text{K}}\\right)^{-\\Delta n} = (3.1 \\times 10^4) \\times \\left(\\frac{673}{12.03}\\right)^{+1} = (3.1 \\times 10^4) \\times 55.9 = 1.7 \\times 10^6$$`}</p>
          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>
              Why is {`$-\\Delta n$`} in the exponent for {`$K_c$`} but {`$+\\Delta n$`} for the
              forward calculation?
            </p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                When solving for {`$K_c$`} from {`$K$`}, you rearrange{' '}
                {`$K = (T/12.03)^{\\Delta n} K_c$`} to get{' '}
                {`$K_c = K \\times (T/12.03)^{-\\Delta n}$`}. The sign flips because you divide both
                sides by {`$(T/12.03)^{\\Delta n}$`}.
              </p>
            </details>
          </div>
          <h3>Worked Example: Calculating Equilibrium Composition</h3>
          <p>
            For {`$\\text{H}_2(g) + \\text{Cl}_2(g) \\rightleftharpoons 2\\,\\text{HCl}(g)$`} at 500
            K, {`$K = 4.0 \\times 10^{18}$`}. The partial pressures of {`$\\text{H}_2$`} and{' '}
            {`$\\text{Cl}_2$`} are {`$4.2 \\times 10^{-8}\\,\\text{bar}$`} and{' '}
            {`$8.3 \\times 10^{-8}\\,\\text{bar}$`}.
          </p>
          <p>Since {`$\\Delta n = 2 - 2 = 0$`}:</p>
          <p className="lrn-eq">{`$$P_{\\text{HCl}} = \\sqrt{K \\cdot P_{\\text{H}_2} \\cdot P_{\\text{Cl}_2}} = \\sqrt{(4.0 \\times 10^{18})(4.2 \\times 10^{-8})(8.3 \\times 10^{-8})} = 1.2 \\times 10^2\\,\\text{bar}$$`}</p>
          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>
              The HCl pressure is 120 bar while reactant pressures are {`$10^{-8}$`} bar. Why does
              this make sense?
            </p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                {`$K = 4.0 \\times 10^{18}$`} means HCl is overwhelmingly favored. Essentially all
                the reactants convert to HCl. The ratio of pressures must satisfy K, and a 120 bar
                HCl pressure with {`$10^{-8}$`} bar reactants gives a ratio near {`$10^{18}$`},
                which is consistent.
              </p>
            </details>
          </div>
          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>
              Why does the conversion factor between K and Kc contain temperature? Because it comes
              from the ideal gas law {`$P_j = [\\text{J}]\\,RT$`}, which links pressure to
              concentration through T. When you swap pressures for concentrations in K, each species
              brings a factor of RT. The net power is {`$\\Delta n$`}, the change in moles of gas.
              When {`$\\Delta n = 0$`}, all the RT factors cancel and {`$K = K_c$`}. The temperature
              dependence is real: the same K can map to different Kc values at different T.
            </p>
          </div>
        </>,

        <>
          <div className="lrn-header">
            <h2>ICE Tables and Equilibrium Calculations</h2>
          </div>
          <p className="lrn-callout lrn-tip">
            Choose the small-x approximation when K is very small. Use the quadratic when K is
            moderate.
          </p>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              You dissolve a gas in a sealed flask. The initial pressure is 1.30 bar and K = 78.
              Before calculating, would you expect a large fraction or a small fraction of the gas
              to decompose at equilibrium?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                A large fraction. K = 78 is comparable to the initial pressure of 1.30 bar. The
                system strongly favors products, so most of the starting gas decomposes.
              </p>
            </details>
          </div>
          <h3>The ICE Table Method</h3>
          <p>
            ICE stands for <strong>Initial - Change - Equilibrium</strong>. You set up three rows
            for each species. The change row uses a variable {`$x$`} linked by stoichiometric
            ratios.
          </p>
          <ol className="lrn-list">
            <li>Write balanced equation.</li>
            <li>Record initial pressures or concentrations (I row).</li>
            <li>
              Write changes as {`$+\\nu x$`} or {`$-\\nu x$`} (C row), where {`$\\nu$`} is the
              stoichiometric coefficient.
            </li>
            <li>Write equilibrium values as initial + change (E row).</li>
            <li>Substitute equilibrium values into K expression and solve for {`$x$`}.</li>
            <li>Check approximation: if {`$x < 5\\%$`} of initial, the approximation is valid.</li>
          </ol>
          <h3>Small-K Approximation: Worked Example</h3>
          <p>
            For{' '}
            {`$2\\,\\text{N}_2(g) + \\text{O}_2(g) \\rightleftharpoons 2\\,\\text{N}_2\\text{O}(g)$`}{' '}
            with {`$K = 3.2 \\times 10^{-28}$`} at 800 K. Start with 0.482 mol {`$\\text{N}_2$`} and
            0.933 mol {`$\\text{O}_2$`} in a 10.0 L vessel.
          </p>
          <p>
            <strong>Step 1:</strong> Find initial pressures at 800 K:
          </p>
          <p className="lrn-eq">{`$$P_{\\text{N}_2} = \\frac{(0.482)(0.083145)(800)}{10.0} = 3.21\\,\\text{bar}, \\quad P_{\\text{O}_2} = \\frac{(0.933)(0.083145)(800)}{10.0} = 6.21\\,\\text{bar}$$`}</p>
          <p>
            <strong>Step 2:</strong> Set up ICE table (let {`$2x$`} be the change in{' '}
            {`$P_{\\text{N}_2\\text{O}}$`}):
          </p>
          <table>
            <thead>
              <tr>
                <th></th>
                <th>{`$2\\,\\text{N}_2$`}</th>
                <th>{`$\\text{O}_2$`}</th>
                <th>{`$2\\,\\text{N}_2\\text{O}$`}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>I</td>
                <td>3.21</td>
                <td>6.21</td>
                <td>0</td>
              </tr>
              <tr>
                <td>C</td>
                <td>{`$-2x$`}</td>
                <td>{`$-x$`}</td>
                <td>{`$+2x$`}</td>
              </tr>
              <tr>
                <td>E</td>
                <td>{`$3.21 - 2x$`}</td>
                <td>{`$6.21 - x$`}</td>
                <td>{`$2x$`}</td>
              </tr>
            </tbody>
          </table>
          <p>
            <strong>Step 3:</strong> Since K is tiny, {`$x \\ll 3.21$`}. Drop {`$x$`} in
            denominators:
          </p>
          <p className="lrn-eq">{`$$\\frac{4x^2}{(3.21)^2(6.21)} \\approx 3.2 \\times 10^{-28} \\implies x \\approx 7.2 \\times 10^{-14}\\,\\text{bar}$$`}</p>
          <p>
            <strong>Equilibrium pressures:</strong> {`$P_{\\text{N}_2} = 3.21\\,\\text{bar}$`},{' '}
            {`$P_{\\text{O}_2} = 6.21\\,\\text{bar}$`},{' '}
            {`$P_{\\text{N}_2\\text{O}} = 1.4 \\times 10^{-13}\\,\\text{bar}$`}.
          </p>
          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>Why can we drop {`$x$`} from the denominators here?</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                Because {`$K = 3.2 \\times 10^{-28}$`} tells us {`$\\text{N}_2\\text{O}$`} forms in
                an extremely small amount. The change {`$x = 7.2 \\times 10^{-14}$`} is truly too
                small to matter compared to 3.21. The approximation is self-consistent:{' '}
                {`$x / 3.21 \\approx 2 \\times 10^{-14} \\ll 5\\%$`}.
              </p>
            </details>
          </div>
          <h3>Quadratic Equation: Worked Example</h3>
          <p>
            For {`$\\text{PCl}_5(g) \\rightleftharpoons \\text{PCl}_3(g) + \\text{Cl}_2(g)$`} with{' '}
            {`$K = 78.3$`} at 250.9 C. Start with 3.12 g {`$\\text{PCl}_5$`} in a 500 mL vessel.
          </p>
          <p>
            <strong>Step 1:</strong> {`$n = 3.12 / 208.24 = 0.0150\\,\\text{mol}$`},{' '}
            {`$P_{\\text{PCl}_5} = (0.0150)(0.083145)(524.0) / 0.500 = 1.30\\,\\text{bar}$`}.
          </p>
          <p>
            <strong>Step 2:</strong> ICE table with change {`$= +x$`}:
          </p>
          <table>
            <thead>
              <tr>
                <th></th>
                <th>{`$\\text{PCl}_5$`}</th>
                <th>{`$\\text{PCl}_3$`}</th>
                <th>{`$\\text{Cl}_2$`}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>I</td>
                <td>1.30</td>
                <td>0</td>
                <td>0</td>
              </tr>
              <tr>
                <td>C</td>
                <td>{`$-x$`}</td>
                <td>{`$+x$`}</td>
                <td>{`$+x$`}</td>
              </tr>
              <tr>
                <td>E</td>
                <td>{`$1.30 - x$`}</td>
                <td>{`$x$`}</td>
                <td>{`$x$`}</td>
              </tr>
            </tbody>
          </table>
          <p>
            <strong>Step 3:</strong> Substitute into K:
          </p>
          <p className="lrn-eq">{`$$\\frac{x^2}{1.30 - x} = 78.3 \\implies x^2 + 78.3x - 101.79 = 0$$`}</p>
          <p>
            <strong>Step 4:</strong> Quadratic formula:
          </p>
          <p className="lrn-eq">{`$$x = \\frac{-78.3 + \\sqrt{78.3^2 + 4(101.79)}}{2} = \\frac{-78.3 + 80.86}{2} = 1.28\\,\\text{bar}$$`}</p>
          <p>
            <strong>Equilibrium pressures:</strong> {`$P_{\\text{PCl}_5} = 0.02\\,\\text{bar}$`},{' '}
            {`$P_{\\text{PCl}_3} = 1.28\\,\\text{bar}$`},{' '}
            {`$P_{\\text{Cl}_2} = 1.28\\,\\text{bar}$`}.
          </p>
          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>Why can we not use the small-x approximation for the PCl5 decomposition?</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                K = 78.3 means most of the PCl5 decomposes. The change {`$x = 1.28$`} bar is
                comparable to the initial pressure of 1.30 bar. Dropping {`$x$`} from the
                denominator would give {`$x = \\sqrt{78.3 \\times 1.30} = 10.1$`}, larger than the
                initial amount. That is physically impossible. The quadratic is required whenever{' '}
                {`$x > 5\\%$`} of the initial value.
              </p>
            </details>
          </div>
          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Small-K approximation</span>
              <p>
                When K is much less than the initial pressure, {`$x$`} is too small to matter. Drop
                it from denominators. Verify: if {`$x/P_0 < 5\\%$`}, you are safe.
              </p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Quadratic required</span>
              <p>
                When K is comparable to or larger than initial pressures, {`$x$`} is large. Use the
                quadratic formula. If {`$x/P_0 > 5\\%$`}, the approximation failed.
              </p>
            </div>
          </div>
          <h3>Worked Example: K from {`$\\Delta_r G^\\circ$`} and the NH3 System</h3>
          <p>
            For {`$\\text{N}_2(g) + 3\\,\\text{H}_2(g) \\rightleftharpoons 2\\,\\text{NH}_3(g)$`} at
            298 K:
          </p>
          <p className="lrn-eq">{`$$\\Delta_r G^\\circ = 2\\,\\Delta_f G^\\circ(\\text{NH}_3,g) = 2 \\times (-16.45\\,\\text{kJ mol}^{-1}) = -32.90\\,\\text{kJ mol}^{-1}$$`}</p>
          <p className="lrn-eq">{`$$\\ln K = \\frac{32.90 \\times 10^3}{(8.3145)(298)} = 13.2 \\implies K = e^{13.2} = 5.8 \\times 10^5$$`}</p>
          <p>
            We use {`$K = 5.8 \\times 10^5$`} throughout this page, the value our{' '}
            {`$\\Delta_f G^\\circ$`} datum gives. Some tables list a slightly larger value near{' '}
            {`$6.8 \\times 10^5$`} because they round {`$\\Delta_f G^\\circ$`} differently. The
            small gap does not change any conclusion.
          </p>
          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>Why does a large negative {`$\\Delta_r G^\\circ$`} produce a very large K?</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                The relationship is {`$K = e^{-\\Delta_r G^\\circ / RT}$`}. The negative{' '}
                {`$\\Delta_r G^\\circ$`} makes the exponent positive. Even a moderately large
                positive exponent gives a huge K because the exponential function grows extremely
                fast. A {`$\\Delta_r G^\\circ$`} twice as negative would square K, not double it.
              </p>
            </details>
          </div>
          <h3>Worked Example: Equilibrium After Adding a Reagent</h3>
          <p>
            Using the PCl5 equilibrium from above (equilibrium:{' '}
            {`$P_{\\text{PCl}_5} = 0.02\\,\\text{bar}$`},{' '}
            {`$P_{\\text{PCl}_3} = 1.28\\,\\text{bar}$`},{' '}
            {`$P_{\\text{Cl}_2} = 1.28\\,\\text{bar}$`}), add 0.0100 mol {`$\\text{Cl}_2$`} to the
            500 mL vessel.
          </p>
          <p>
            <strong>Step 1:</strong> New pressure added:{' '}
            {`$\\Delta P_{\\text{Cl}_2} = (0.0100)(0.083145)(524.0)/0.500 = 0.871\\,\\text{bar}$`}.
            New total {`$P_{\\text{Cl}_2} = 1.28 + 0.871 = 2.15\\,\\text{bar}$`}.
          </p>
          <p>
            <strong>Step 2:</strong> Define new change {`$x$`} as the shift toward reactants
            (reverse reaction runs):
          </p>
          <table>
            <thead>
              <tr>
                <th></th>
                <th>{`$\\text{PCl}_5$`}</th>
                <th>{`$\\text{PCl}_3$`}</th>
                <th>{`$\\text{Cl}_2$`}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>New I</td>
                <td>0.02</td>
                <td>1.28</td>
                <td>2.15</td>
              </tr>
              <tr>
                <td>C</td>
                <td>{`$+x$`}</td>
                <td>{`$-x$`}</td>
                <td>{`$-x$`}</td>
              </tr>
              <tr>
                <td>E</td>
                <td>{`$0.02 + x$`}</td>
                <td>{`$1.28 - x$`}</td>
                <td>{`$2.15 - x$`}</td>
              </tr>
            </tbody>
          </table>
          <p>
            <strong>Step 3:</strong> Substitute and expand:
          </p>
          <p className="lrn-eq">{`$$\\frac{(1.28 - x)(2.15 - x)}{0.02 + x} = 78.3 \\implies x^2 - 81.73x + 1.186 = 0 \\implies x \\approx 0.0144\\,\\text{bar}$$`}</p>
          <p>
            <strong>New equilibrium:</strong> {`$P_{\\text{PCl}_5} = 0.03\\,\\text{bar}$`},{' '}
            {`$P_{\\text{PCl}_3} = 1.27\\,\\text{bar}$`},{' '}
            {`$P_{\\text{Cl}_2} = 2.14\\,\\text{bar}$`}.
          </p>
          <h3>Degree of Dissociation: Closed-Form Result</h3>
          <p>
            For {`$\\text{A}(g) \\rightleftharpoons 2\\,\\text{B}(g)$`}, define {`$\\alpha$`} as the{' '}
            <strong>degree of dissociation</strong>. Starting with {`$n$`} moles of A, let{' '}
            {`$\\alpha n$`} moles react:
          </p>
          <table>
            <thead>
              <tr>
                <th>Species</th>
                <th>Amount</th>
                <th>Mole fraction</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>A</td>
                <td>{`$(1-\\alpha)n$`}</td>
                <td>{`$(1-\\alpha)/(1+\\alpha)$`}</td>
              </tr>
              <tr>
                <td>B</td>
                <td>{`$2\\alpha n$`}</td>
                <td>{`$2\\alpha/(1+\\alpha)$`}</td>
              </tr>
              <tr>
                <td>Total</td>
                <td>{`$(1+\\alpha)n$`}</td>
                <td>1</td>
              </tr>
            </tbody>
          </table>
          <p>
            Now build K from the table. Each gas partial pressure is its mole fraction times the
            total pressure p. So {`$P_\\text{A} = x_\\text{A}\\,p$`} and{' '}
            {`$P_\\text{B} = x_\\text{B}\\,p$`}. Put these into{' '}
            {`$K = P_\\text{B}^2 / (P_\\text{A}\\,p^\\circ)$`}:
          </p>
          <p className="lrn-eq">{`$$K = \\frac{(x_\\text{B}\\,p)^2}{x_\\text{A}\\,p\\,p^\\circ} = \\frac{\\left(\\frac{2\\alpha}{1+\\alpha}\\right)^2 p^2}{\\left(\\frac{1-\\alpha}{1+\\alpha}\\right)p\\,p^\\circ}$$`}</p>
          <p>
            Cancel one {`$p$`} and simplify the mole-fraction fractions. The {`$(1+\\alpha)$`} terms
            partly cancel, and {`$(1-\\alpha)(1+\\alpha) = 1-\\alpha^2$`}:
          </p>
          <p className="lrn-eq">{`$$K = \\frac{4\\alpha^2}{1-\\alpha^2}\\cdot\\frac{p}{p^\\circ}$$`}</p>
          <p>
            Now solve for {`$\\alpha$`}. Multiply out and group:{' '}
            {`$K(1-\\alpha^2)p^\\circ = 4\\alpha^2 p$`}, so{' '}
            {`$Kp^\\circ = \\alpha^2(4p + Kp^\\circ)$`}. Divide and take the square root:
          </p>
          <p className="lrn-eq">{`$$\\alpha^2 = \\frac{Kp^\\circ}{4p + Kp^\\circ} = \\frac{1}{1 + 4p/Kp^\\circ}$$`}</p>
          <p className="lrn-eq lrn-eq-hero">{`$$\\boxed{\\alpha = \\left(\\frac{1}{1 + 4p/Kp^\\circ}\\right)^{1/2}}$$`}</p>
          <p>
            Higher pressure decreases {`$\\alpha$`} (equilibrium shifts toward fewer moles of gas).
            Lower pressure increases {`$\\alpha$`}.
          </p>
          <DissociationAlphaViz />
          <h3>Worked Example: Dissociation of {`$\\text{N}_2\\text{O}_4$`}</h3>
          <p>
            The gas {`$\\text{N}_2\\text{O}_4$`} breaks apart into {`$\\text{NO}_2$`}:{' '}
            {`$\\text{N}_2\\text{O}_4(g) \\rightleftharpoons 2\\,\\text{NO}_2(g)$`}. This is an A{' '}
            {`$\\rightleftharpoons$`} 2B reaction, so the boxed formula applies directly. At 298 K,{' '}
            {`$K = 0.113$`}. Find {`$\\alpha$`} at total pressure {`$p = 1.00\\,\\text{bar}$`}.
          </p>
          <p>
            Put {`$K = 0.113$`} and {`$p/p^\\circ = 1.00$`} straight into the boxed formula:
          </p>
          <p className="lrn-eq">{`$$\\alpha = \\left(\\frac{1}{1 + 4(1.00)/0.113}\\right)^{1/2} = \\left(\\frac{1}{36.4}\\right)^{1/2} = 0.166$$`}</p>
          <p>
            About 17% of the {`$\\text{N}_2\\text{O}_4$`} has split into {`$\\text{NO}_2$`} at 298 K
            and 1 bar.
          </p>
          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>What happens to {`$\\alpha$`} if you drop the pressure to 0.25 bar?</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                Put {`$p = 0.25\\,\\text{bar}$`} into the formula:{' '}
                {`$\\alpha = (1 + 4(0.25)/0.113)^{-1/2} = (1 + 8.85)^{-1/2} = 0.319$`}. Dissociation
                rises from 17% to 32%. Lower pressure favors the side with more moles of gas, so
                more {`$\\text{N}_2\\text{O}_4$`} splits apart. The formula and Le Chatelier's
                principle agree.
              </p>
            </details>
          </div>
          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>
              Why does the small-x approximation work for tiny K but fail for moderate K? The
              approximation drops {`$x$`} from terms like {`$P_0 - x$`}. That is only valid when{' '}
              {`$x$`} is a tiny fraction of {`$P_0$`}. A very small K means the reaction barely
              proceeds, so {`$x$`} stays tiny and the approximation holds. A moderate K means the
              reaction proceeds far, so {`$x$`} grows comparable to {`$P_0$`} and dropping it
              introduces large error. The 5% rule is the practical cutoff for when you must switch
              to the full quadratic.
            </p>
          </div>
        </>,

        <>
          <div className="lrn-header">
            <h2>Le Chatelier's Principle: How Equilibria Respond to Change</h2>
          </div>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              You have the gas reaction{' '}
              {`$\\text{N}_2\\text{O}_4(g) \\rightleftharpoons 2\\,\\text{NO}_2(g)$`} at
              equilibrium. You squeeze the container to half its volume. Which way does the
              equilibrium shift, and why?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                It shifts left, toward {`$\\text{N}_2\\text{O}_4$`}. Squeezing raises the pressure.
                The system relieves that stress by moving to the side with fewer moles of gas. The
                left side has 1 mole; the right side has 2.
              </p>
            </details>
          </div>
          <p>
            The full industrial ammonia (Haber) case study, where pressure, temperature, and a
            catalyst are chosen together, comes later in this topic.
          </p>
          <p>
            <strong>Le Chatelier's principle:</strong> Apply a stress to a system at dynamic
            equilibrium. The equilibrium shifts to reduce that stress.
          </p>
          <p>
            The principle is qualitative but powerful. It follows from the fact that K is fixed at a
            given temperature. Any change that makes {`$Q \\neq K$`} forces the system to move until{' '}
            {`$Q = K$`} again.
          </p>
          <h3>Adding and Removing Reagents</h3>
          <ul className="lrn-list">
            <li>Add reactant or remove product: {`$Q < K$`} -- forward shift</li>
            <li>Remove reactant or add product: {`$Q > K$`} -- reverse shift</li>
          </ul>
          <p>
            For{' '}
            {`$4\\,\\text{NH}_3(g) + 3\\,\\text{O}_2(g) \\rightleftharpoons 2\\,\\text{N}_2(g) + 6\\,\\text{H}_2\\text{O}(g)$`}
            :
          </p>
          <ul className="lrn-list">
            <li>Adding {`$\\text{N}_2$`}: more product, Q rises above K, reverse shift.</li>
            <li>
              Removing {`$\\text{NH}_3$`}: fewer reactants, Q rises above K, reverse shift (more NH3
              forms to compensate).
            </li>
            <li>
              Removing {`$\\text{H}_2\\text{O}$`}: fewer products, Q falls below K, forward shift.
            </li>
          </ul>
          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>
              Why does removing NH3 shift the reaction toward reactants (reverse) rather than toward
              products?
            </p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                NH3 is a reactant in this reaction. Removing it from the left side means less
                reactant is present. The system compensates by running the reverse reaction to
                produce more NH3. This counteracts the removal. It is Le Chatelier's principle: the
                equilibrium shifts to undo the change.
              </p>
            </details>
          </div>
          <h3>Compression and Pressure Effects</h3>
          <p>
            Compressing a gas mixture reduces the total volume. If {`$\\Delta n \\neq 0$`} for the
            reaction, the equilibrium shifts to the side with fewer moles of gas.
          </p>
          <ul className="lrn-list">
            <li>
              {`$2\\,\\text{NO}_2(g) \\rightleftharpoons \\text{N}_2\\text{O}_4(g)$`}:{' '}
              {`$\\Delta n = 1 - 2 = -1$`}. Compression favors {`$\\text{N}_2\\text{O}_4$`} (fewer
              moles on the right).
            </li>
            <li>
              {`$\\text{H}_2(g) + \\text{I}_2(g) \\rightleftharpoons 2\\,\\text{HI}(g)$`}:{' '}
              {`$\\Delta n = 2 - 2 = 0$`}. No effect.
            </li>
          </ul>
          <LeChatelierViz />
          <p>
            <strong>Inert gas at constant volume:</strong> Adding an inert gas at constant volume
            does not change the partial pressures of the reacting gases. No shift occurs.
          </p>
          <p>
            <strong>Inert gas at constant pressure:</strong> Adding an inert gas at constant total
            pressure forces the vessel to expand. The partial pressures of reacting gases drop. This
            shifts equilibria with {`$\\Delta n \\neq 0$`} toward more moles of gas.
          </p>
          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Inert gas at constant volume</span>
              <p>
                Partial pressures of reacting gases unchanged. K unchanged. No equilibrium shift.
              </p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Inert gas at constant pressure</span>
              <p>
                Reacting gases diluted (vessel expands). Equivalent to reducing total pressure.
                Shifts toward more gas moles if {`$\\Delta n \\neq 0$`}.
              </p>
            </div>
          </div>
          <h3>Temperature and Equilibrium</h3>
          <p>
            Temperature is the only variable that actually changes K. Every other Le Chatelier
            effect only changes Q while K stays fixed.
          </p>
          <ul className="lrn-list">
            <li>
              Exothermic reaction ({`$\\Delta_r H^\\circ < 0$`}): K decreases as T rises. Think of
              heat as a product.
            </li>
            <li>
              Endothermic reaction ({`$\\Delta_r H^\\circ > 0$`}): K increases as T rises. Think of
              heat as a reactant.
            </li>
          </ul>
          <p>
            For {`$2\\,\\text{SO}_2(g) + \\text{O}_2(g) \\rightleftharpoons 2\\,\\text{SO}_3(g)$`},{' '}
            {`$\\Delta_r H^\\circ = -197.78\\,\\text{kJ mol}^{-1}$`}. The reaction is exothermic.
            Raising T shifts equilibrium toward reactants (less {`$\\text{SO}_3$`}). K decreases.
          </p>
          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>
              Why does only temperature change K, while every other stress leaves K alone? Because K
              is fixed by {`$\\Delta_r G^\\circ = -RT \\ln K$`}, and {`$\\Delta_r G^\\circ$`}{' '}
              depends only on temperature. Adding a reagent or compressing the vessel changes the
              partial pressures, so it changes Q, but it cannot touch K. Changing temperature
              changes the right-hand side of that equation directly, so it is the one stress that
              moves K itself. All other shifts just push Q back toward the same fixed K.
            </p>
          </div>
        </>,

        <>
          <div className="lrn-header">
            <h2>The van 't Hoff Equation: K at Different Temperatures</h2>
          </div>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              Ammonia synthesis has {`$K = 5.8 \\times 10^5$`} at 298 K and is exothermic. Without
              calculating, predict whether K at 400 K will be larger or smaller. By a lot or a
              little?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                K will be much smaller at 400 K. The reaction is exothermic, so raising temperature
                decreases K. The large {`$|\\Delta H^\\circ|$`} means the change will be dramatic.
              </p>
            </details>
          </div>
          <h3>Derivation</h3>
          <p>
            At temperatures {`$T_1$`} and {`$T_2$`}, use{' '}
            {`$\\ln K_i = -\\Delta_r G_i^\\circ / (RT_i)$`} and subtract. With{' '}
            {`$\\Delta_r G^\\circ = \\Delta_r H^\\circ - T\\Delta_r S^\\circ$`}, the{' '}
            {`$\\Delta_r S^\\circ$`} terms cancel (we assume they stay constant) and you get:
          </p>
          <p className="lrn-eq lrn-eq-hero">{`$$\\boxed{\\ln\\frac{K_2}{K_1} = \\frac{\\Delta_r H^\\circ}{R}\\left(\\frac{1}{T_1} - \\frac{1}{T_2}\\right)}$$`}</p>
          <p>The differential form (van 't Hoff equation) is:</p>
          <p className="lrn-eq">{`$$\\frac{d \\ln K}{dT} = \\frac{\\Delta_r H^\\circ}{RT^2}$$`}</p>
          <p>
            Equivalent plot form: plot {`$\\ln K$`} vs {`$1/T$`}. The slope equals{' '}
            {`$-\\Delta_r H^\\circ / R$`}.
          </p>
          <VantHoffViz />
          <div className="lrn-faded">
            <p className="lrn-faded-phase-label">KEY ALGEBRAIC MOVE</p>
            <p>
              The key move is recognizing that{' '}
              {`$\\Delta_r G^\\circ/T = \\Delta_r H^\\circ/T - \\Delta_r S^\\circ$`}. When you
              subtract this at two temperatures, the {`$\\Delta_r S^\\circ$`} terms are the same at
              both temperatures (we assume they stay constant) and cancel exactly. This leaves only{' '}
              {`$\\Delta_r H^\\circ(1/T_1 - 1/T_2)$`}, which is the van 't Hoff result.
            </p>
          </div>
          <h3>Worked Example: K for Ammonia at 400 K</h3>
          <p>
            For {`$\\text{N}_2(g) + 3\\,\\text{H}_2(g) \\rightleftharpoons 2\\,\\text{NH}_3(g)$`}:{' '}
            {`$K_1 = 5.8 \\times 10^5$`} at {`$T_1 = 298\\,\\text{K}$`},{' '}
            {`$\\Delta_r H^\\circ = 2(-46.11) = -92.22\\,\\text{kJ mol}^{-1}$`}.
          </p>
          <p className="lrn-eq">{`$$\\ln\\frac{K_2}{K_1} = \\frac{-9.222 \\times 10^4}{8.3145}\\left(\\frac{1}{298} - \\frac{1}{400}\\right) = (-11093)(8.558 \\times 10^{-4}) = -9.49$$`}</p>
          <p className="lrn-eq">{`$$K_2 = (5.8 \\times 10^5)(e^{-9.49}) = (5.8 \\times 10^5)(7.55 \\times 10^{-5}) = 44$$`}</p>
          <p>
            K dropped from {`$5.8 \\times 10^5$`} to 44 over only 100 K. A factor of {`$10^4$`}{' '}
            decrease for a 100 K rise shows how sensitive exothermic reactions are to temperature.
          </p>
          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>Why did K drop by such a large factor for only a 100 K rise?</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                The van 't Hoff equation contains {`$\\Delta_r H^\\circ / R$`} in the exponent. For
                ammonia synthesis, {`$\\Delta_r H^\\circ = -92.22\\,\\text{kJ mol}^{-1}$`}, so{' '}
                {`$\\Delta_r H^\\circ / R = -11093\\,\\text{K}$`}. Even a small change in {`$1/T$`}{' '}
                gets multiplied by this large number. The exponential makes it much bigger.
              </p>
            </details>
          </div>
          <h3>Worked Example: Measuring {`$\\Delta_r H^\\circ$`} from K vs T Data</h3>
          <p>
            For{' '}
            {`$\\text{Ag}_2\\text{CO}_3(s) \\rightleftharpoons \\text{Ag}_2\\text{O}(s) + \\text{CO}_2(g)$`}
            , K values at four temperatures:
          </p>
          <table>
            <thead>
              <tr>
                <th>T / K</th>
                <th>K</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>350</td>
                <td>{`$3.98 \\times 10^{-4}$`}</td>
              </tr>
              <tr>
                <td>400</td>
                <td>{`$1.41 \\times 10^{-2}$`}</td>
              </tr>
              <tr>
                <td>450</td>
                <td>{`$1.86 \\times 10^{-1}$`}</td>
              </tr>
              <tr>
                <td>500</td>
                <td>1.48</td>
              </tr>
            </tbody>
          </table>
          <p>
            Plot {`$\\ln K$`} vs {`$1/T$`}. The slope equals {`$-\\Delta_r H^\\circ / R$`}. From the
            data:
          </p>
          <p className="lrn-eq">{`$$\\Delta_r H^\\circ = +9.6 \\times 10^3\\,\\text{K} \\times R = (+9.6 \\times 10^3)(8.3145) = +80\\,\\text{kJ mol}^{-1}$$`}</p>
          <p>
            The positive {`$\\Delta_r H^\\circ$`} confirms the decomposition is endothermic. K
            increases with temperature, as expected.
          </p>
          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>
              Why does the slope of {`$\\ln K$`} vs {`$1/T$`} equal {`$-\\Delta_r H^\\circ / R$`}?
            </p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                The van 't Hoff equation rearranges to{' '}
                {`$\\ln K = -(\\Delta_r H^\\circ / R)(1/T) + \\text{constant}$`}. This is the
                equation of a straight line: {`$y = mx + b$`} where{' '}
                {`$m = -\\Delta_r H^\\circ / R$`}. Reading the slope and multiplying by {`$-R$`}{' '}
                gives {`$\\Delta_r H^\\circ$`} without needing {`$\\Delta_r S^\\circ$`} separately.
              </p>
            </details>
          </div>
          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>
              Why can you measure {`$\\Delta_r H^\\circ$`} just by tracking K at different
              temperatures? Because the van 't Hoff equation ties the slope of {`$\\ln K$`} versus{' '}
              {`$1/T$`} directly to {`$\\Delta_r H^\\circ$`}, with the entropy term dropping into
              the constant intercept. You never have to measure heat flow with a calorimeter. The
              temperature response of the equilibrium itself reports the enthalpy. This is why
              equilibrium measurements are a powerful, indirect route to thermodynamic data.
            </p>
          </div>
        </>,

        <>
          <div className="lrn-header">
            <h2>Catalysts, the Haber Process, and Practical Equilibria</h2>
          </div>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              The Haber process runs at 400-500 C rather than 25 C even though ammonia synthesis is
              exothermic and K is much larger at lower temperature. Why would engineers on purpose
              choose a temperature where K is lower?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                At 25 C the reaction is kinetically too slow to be practical. Engineers accept a
                lower equilibrium yield in exchange for a reaction speed that produces ammonia in
                useful amounts per unit time.
              </p>
            </details>
          </div>
          <p>
            A <strong>catalyst</strong> speeds the approach to equilibrium but does not change K. It
            lowers the activation energy equally for both the forward and reverse reactions. This
            means it cannot change the equilibrium composition, only how quickly you get there.
          </p>
          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>
              K is set by {`$\\Delta_r G^\\circ = -RT \\ln K$`}, and {`$\\Delta_r G^\\circ$`}{' '}
              depends only on the difference in Gibbs energies of products and reactants in their
              standard states. A catalyst provides an alternative pathway with lower activation
              energy but does not change the energies of the reactants or products themselves.
              Therefore K is unchanged. (The Kinetics topic shows the matching rate-based view: K is
              the ratio {`$k_\\text{forward}/k_\\text{reverse}$`}, and a catalyst multiplies both by
              the same factor, so the ratio holds.)
            </p>
          </div>
          <h3>The Haber Process</h3>
          <p>
            The industrial synthesis of ammonia is{' '}
            {`$\\text{N}_2(g) + 3\\,\\text{H}_2(g) \\rightleftharpoons 2\\,\\text{NH}_3(g)$`}.
          </p>
          <ul className="lrn-list">
            <li>
              <strong>High pressure (150-300 bar):</strong> {`$\\Delta n = 2 - 4 = -2$`}, so
              compression favors {`$\\text{NH}_3$`} (fewer gas moles). K is unchanged; composition
              shifts toward the product side.
            </li>
            <li>
              <strong>Moderate temperature (400-500 C):</strong> K = {`$5.8 \\times 10^5$`} at 298
              K, but only 44 at 400 K. Yet the process runs at higher temperature because the
              reaction is kinetically too slow at room temperature.
            </li>
            <li>
              <strong>Iron catalyst:</strong> An iron catalyst with promoters (K2O, Al2O3) allows
              equilibrium to be reached in practical time at moderate temperatures. Promoters are
              extra substances that make the catalyst work better.
            </li>
            <li>
              <strong>Continuous removal of NH3:</strong> Condensing and removing liquid ammonia
              shifts equilibrium forward by Le Chatelier's principle, driving near-complete
              conversion of recycled raw material.
            </li>
          </ul>
          <p>
            The Haber process illustrates a common industrial tradeoff: the thermodynamically ideal
            temperature conflicts with the kinetically accessible one. Catalysis bridges that gap.
          </p>
        </>,

        <>
          <div className="lrn-header">
            <h2>Homeostasis: Le Chatelier's Principle in Biology</h2>
          </div>
          <p>
            Living systems maintain stable internal conditions, called <strong>homeostasis</strong>,
            using mechanisms that closely mirror Le Chatelier's principle. When a change pushes a
            biological equilibrium away from its set point, the system shifts to counteract the
            change.
          </p>
          <p>
            The hemoglobin-oxygen system is the clearest example. Hemoglobin (Hb) binds oxygen
            reversibly:
          </p>
          <p className="lrn-eq">{`$$\\text{Hb}(aq) + \\text{O}_2(aq) \\rightleftharpoons \\text{HbO}_2(aq)$$`}</p>
          <p>
            In the lungs, {`$p_{\\text{O}_2}$`} is high (~100 mmHg). The equilibrium shifts forward
            and hemoglobin loads up with oxygen. In tissues, {`$p_{\\text{O}_2}$`} is low (~40 mmHg
            or less in active muscle). The equilibrium shifts in reverse and hemoglobin releases
            oxygen where it is needed.
          </p>
          <HemoglobinSaturationViz />
          <p>
            The organism uses pressure gradients to control which direction the equilibrium runs in
            different locations. High pressure in the lungs drives loading; low pressure in tissues
            drives unloading. This is Le Chatelier's principle operating at the biological level.
          </p>
        </>
      ]
    },
    practice: [
      {
        q: 'A reaction reaches a state where the amounts of reactants and products stop changing. Is the reaction over? Explain what is still happening.',
        a: 'No, the reaction is not over. Dynamic chemical equilibrium means both the forward and reverse reactions keep running at equal rates. Molecular collisions continue producing products and breaking them back into reactants. The macro-level composition is stable because the two rates balance exactly. This is very different from completion, where the reverse rate is zero.'
      },
      {
        q: `For the reaction $\\text{N}_2(g) + 3\\,\\text{H}_2(g) \\rightleftharpoons 2\\,\\text{NH}_3(g)$, write the equilibrium constant expression K.`,
        a: `$K = P_{\\text{NH}_3}^2 \\,/\\, (P_{\\text{N}_2} \\cdot P_{\\text{H}_2}^3)$. Products go in the numerator with their stoichiometric coefficients as exponents. Reactants go in the denominator. Each pressure is a numerical value in bar. The coefficient 3 on H2 becomes the exponent 3 in the denominator. The coefficient 2 on NH3 becomes the exponent 2 in the numerator.`
      },
      {
        q: 'What is the activity of a pure solid in an equilibrium expression? Why?',
        a: 'The activity of a pure solid is exactly 1. Activity is a dimensionless ratio. For a pure solid, the composition is fixed and equals its standard state by definition. Activity = 1 means it does not appear in K. Adding more solid does not change K or the equilibrium composition.'
      },
      {
        q: `For $\\text{CaCO}_3(s) \\rightleftharpoons \\text{CaO}(s) + \\text{CO}_2(g)$, write K. What happened to the solids?`,
        a: `$K = P_{\\text{CO}_2}$. Both CaCO3 and CaO are pure solids with activity = 1. They drop out of K. Only the gas-phase CO2 pressure appears. This is heterogeneous equilibrium: multiple phases are present, but only species with variable activity enter K. The equilibrium CO2 pressure is fixed at a given temperature, regardless of how much solid is present.`
      },
      {
        q: `The equilibrium constant for a reaction is $K = 4.0 \\times 10^{18}$ at 500 K. What does this tell you about the equilibrium composition?`,
        a: `A K value of $4.0 \\times 10^{18}$ is enormous, much greater than $10^3$. Products are overwhelmingly favored at equilibrium. Essentially all the reactants convert to products. For $\\text{H}_2 + \\text{Cl}_2 \\rightleftharpoons 2\\,\\text{HCl}$, the HCl pressure is enormous while virtually no H2 or Cl2 remains. For practical purposes, you can treat such a reaction as going to completion.`
      },
      {
        q: `You reverse a reaction. Its forward K equals 46. What is $K_\\text{reverse}$?`,
        a: `$K_\\text{reverse} = 1/46 \\approx 0.022$. Reversing the reaction swaps numerator and denominator in K. What was products-over-reactants becomes reactants-over-products, which is exactly 1/K. If the forward reaction strongly favors products (large K), the reverse reaction strongly favors its own products, which are the original reactants (small K).`
      },
      {
        q: `You multiply a balanced equation by 3. The original K = 12. What is the new K?`,
        a: `The new $K = 12^3 = 1728$. Multiplying the equation by 3 multiplies every stoichiometric coefficient by 3. This raises every activity in K to the third power. Since $K = \\prod a_j^{\\nu_j}$, tripling all $\\nu_j$ means the new K = original $K^3$. Always check which equation your K refers to.`
      },
      {
        q: 'What does the reaction quotient Q measure? How does it differ from K?',
        a: 'Q has the same mathematical form as K, products over reactants each raised to stoichiometric coefficients, but it is calculated at any composition, not just at equilibrium. K is fixed at a given temperature and only equals Q at equilibrium. Q is a snapshot of the current state; K is the target. If Q < K, more products form; if Q > K, more reactants form.'
      },
      {
        q: `For $\\text{H}_2(g) + \\text{I}_2(g) \\rightleftharpoons 2\\,\\text{HI}(g)$ with K = 46 at 783 K, all three gases are at 55 kPa (0.55 bar). Calculate Q and predict the direction of reaction.`,
        a: `$Q = (0.55)^2 / [(0.55)(0.55)] = 0.3025 / 0.3025 = 1.0$. Since $Q = 1.0 < K = 46$, there are too few HI molecules relative to equilibrium. The forward reaction is spontaneous: more HI forms. Q = 1 whenever all pressures are equal because the numerator and denominator become identical. The system needs to shift forward until Q climbs from 1.0 to 46.`
      },
      {
        q: `What is the condition for chemical equilibrium, expressed using $\\Delta_r G$? What geometric meaning does this have?`,
        a: `The condition is $\\Delta_r G = 0$. Geometrically, $\\Delta_r G$ is the slope of the Gibbs energy $G$ curve plotted against the extent of reaction $\\xi$. When the slope is zero, G is at a minimum. Reactions proceed spontaneously downhill (where $\\Delta_r G < 0$) and stop at the bottom. At the minimum, neither forward nor reverse reaction is spontaneous.`
      },
      {
        q: `Derive $\\Delta_r G^\\circ = -RT \\ln K$ from $\\Delta_r G = \\Delta_r G^\\circ + RT \\ln Q$.`,
        a: `At equilibrium, two things are simultaneously true: $\\Delta_r G = 0$ (G is at its minimum) and $Q = K$ (activities have reached their equilibrium values). Substitute both conditions: $0 = \\Delta_r G^\\circ + RT \\ln K$. Rearrange: $\\Delta_r G^\\circ = -RT \\ln K$. This result shows K is not a separate assumption. It follows directly from thermodynamics.`
      },
      {
        q: `For $\\tfrac{1}{2}\\,\\text{H}_2(g) + \\tfrac{1}{2}\\,\\text{I}_2(s) \\rightarrow \\text{HI}(g)$ at 25.00 C, $\\Delta_r G^\\circ = +1.70\\,\\text{kJ mol}^{-1}$. Calculate K.`,
        a: `Use $\\Delta_r G^\\circ = -RT \\ln K$: $\\ln K = -\\Delta_r G^\\circ / RT = -(1.70 \\times 10^3) / [(8.3145)(298.15)] = -0.685$. Therefore $K = e^{-0.685} = 0.50$. Since $\\Delta_r G^\\circ > 0$, K < 1, meaning reactants are slightly favored at 25 C. But K = 0.50 is close to 1, so both HI and the reactants are present in significant amounts at equilibrium.`
      },
      {
        q: `For $2\\,\\text{SO}_2(g) + \\text{O}_2(g) \\rightarrow 2\\,\\text{SO}_3(g)$, $\\Delta_r G^\\circ = -141.74\\,\\text{kJ mol}^{-1}$ at 25 C. All three gases have partial pressure 100 bar. Calculate $\\Delta_r G$ and state the direction.`,
        a: `Step 1: $Q = (100)^2 / [(100)^2 \\times (100)] = 10^4 / 10^6 = 0.0100$. Step 2: $RT = (8.3145 \\times 10^{-3})(298.15) = 2.479\\,\\text{kJ mol}^{-1}$. Step 3: $\\Delta_r G = -141.74 + (2.479)\\ln(0.0100) = -141.74 + (2.479)(-4.605) = -153.16\\,\\text{kJ mol}^{-1}$. Since $\\Delta_r G < 0$, the reaction runs spontaneously forward. At 100 bar partial pressures, the system is far from equilibrium on the reactant side.`
      },
      {
        q: `For $\\text{N}_2(g) + 3\\,\\text{H}_2(g) \\rightleftharpoons 2\\,\\text{NH}_3(g)$ at 298 K, $\\Delta_f G^\\circ(\\text{NH}_3,g) = -16.45\\,\\text{kJ mol}^{-1}$. Calculate K.`,
        a: `Step 1: $\\Delta_r G^\\circ = 2\\,\\Delta_f G^\\circ(\\text{NH}_3) = 2(-16.45) = -32.90\\,\\text{kJ mol}^{-1}$. Step 2: $\\ln K = -\\Delta_r G^\\circ/(RT) = 32900/[(8.3145)(298)] = 13.28$. Step 3: $K = e^{13.28} = 5.8 \\times 10^5$. This large K confirms ammonia is strongly favored at room temperature. Industrial ammonia synthesis uses this, but kinetics requires elevated temperatures and a catalyst to make it practical.`
      },
      {
        q: `At 25 C, cis-2-butene has $\\Delta_f G^\\circ = +65.95\\,\\text{kJ mol}^{-1}$ and trans-2-butene has $\\Delta_f G^\\circ = +63.06\\,\\text{kJ mol}^{-1}$. Find K for cis to trans isomerization.`,
        a: `$\\Delta_r G^\\circ = G^\\circ(\\text{trans}) - G^\\circ(\\text{cis}) = 63.06 - 65.95 = -2.89\\,\\text{kJ mol}^{-1}$. Then $\\ln K = 2890/[(8.3145)(298)] = 1.166$, so $K = e^{1.166} = 3.2$. Trans-2-butene is more stable and is about 3.2 times more abundant than cis at equilibrium.`
      },
      {
        q: 'Explain why K is dimensionless even though it contains pressures.',
        a: `K is built from activities, not raw pressures. Each activity is a dimensionless ratio: $a_j = P_j / P^\\circ$ for an ideal gas, where $P^\\circ = 1\\,\\text{bar}$. Dividing by $P^\\circ$ strips away the units. When you form $K = \\prod a_j^{\\nu_j}$, you are multiplying dimensionless numbers. The result is always dimensionless. This matters because $\\Delta_r G^\\circ = -RT \\ln K$ requires K to be dimensionless: you cannot take the logarithm of a quantity with units.`
      },
      {
        q: `For $2\\,\\text{SO}_2(g) + \\text{O}_2(g) \\rightleftharpoons 2\\,\\text{SO}_3(g)$ at 400 C (673 K), K = $3.1 \\times 10^4$. Convert to Kc.`,
        a: `Step 1: $\\Delta n = 2 - (2+1) = -1$. Step 2: $K_c = K \\times (T/12.03)^{-\\Delta n} = (3.1 \\times 10^4) \\times (673/12.03)^{+1} = (3.1 \\times 10^4)(55.9) = 1.7 \\times 10^6$. Kc is larger than K because $\\Delta n < 0$: fewer moles of gas at equilibrium, so concentrations are compressed to higher values.`
      },
      {
        q: `When is $K = K_c$? Give one example and one counterexample.`,
        a: `$K = K_c$ only when $\\Delta n = 0$: total moles of gaseous products equals total moles of gaseous reactants. Example: $\\text{H}_2(g) + \\text{I}_2(g) \\rightleftharpoons 2\\,\\text{HI}(g)$ has $\\Delta n = 0$, so $K = K_c$. Counterexample: $2\\,\\text{SO}_2 + \\text{O}_2 \\rightleftharpoons 2\\,\\text{SO}_3$ has $\\Delta n = -1$, so $K \\neq K_c$ and you must use the conversion factor $(T/12.03)^{\\Delta n}$.`
      },
      {
        q: `Write the expression relating K, Kx, and total pressure p for a gas-phase reaction.`,
        a: `$K = K_x \\left(p/p^\\circ\\right)^{\\Delta\\nu}$ where $K_x = \\prod_j x_j^{\\nu_j}$ is the equilibrium constant in mole fractions, $p$ is total pressure, $p^\\circ = 1\\,\\text{bar}$, and $\\Delta\\nu$ is the change in moles of gas. Unlike K, $K_x$ depends on pressure. Only K (defined through activities) is independent of pressure at fixed T.`
      },
      {
        q: 'Explain why K is independent of pressure but Kx is not.',
        a: `K is defined through activities ($P_j/P^\\circ$ for gases). From $\\Delta_r G^\\circ = -RT \\ln K$, K depends only on $\\Delta_r G^\\circ$, which depends only on T. So $(\\partial K/\\partial p)_T = 0$. But $K_x = \\prod_j x_j^{\\nu_j}$ is built from mole fractions, not activities. From $K = K_x (p/p^\\circ)^{\\Delta\\nu}$: if p changes and K stays fixed, then $K_x$ must change to compensate (unless $\\Delta\\nu = 0$). Adding pressure changes the equilibrium mole fractions when $\\Delta n \\neq 0$, so $K_x$ shifts while K stays put.`
      },
      {
        q: `Set up an ICE table for $\\text{PCl}_5(g) \\rightleftharpoons \\text{PCl}_3(g) + \\text{Cl}_2(g)$ starting with $P_{\\text{PCl}_5} = 2.00\\,\\text{bar}$, K = 78.3. Find the equilibrium pressures.`,
        a: `ICE table (with $+x$ for products, $-x$ for PCl5): I = 2.00, 0, 0; C = $-x$, $+x$, $+x$; E = $2.00-x$, $x$, $x$. Substituting: $K = x^2/(2.00-x) = 78.3$. Rearrange: $x^2 + 78.3x - 156.6 = 0$. Quadratic formula: $x = (-78.3 + \\sqrt{78.3^2 + 4 \\times 156.6})/2 = 1.95\\,\\text{bar}$. Equilibrium: $P_{\\text{PCl}_5} = 0.05\\,\\text{bar}$, $P_{\\text{PCl}_3} = 1.95\\,\\text{bar}$, $P_{\\text{Cl}_2} = 1.95\\,\\text{bar}$.`
      },
      {
        q: 'Why can you not use the small-x approximation for the PCl5 decomposition?',
        a: `The approximation holds when $x \\ll$ initial value, which requires K to be very small. Here K = 78.3 and the initial pressure is 2.00 bar. If you assumed $x \\ll 2.00$ and set $K \\approx x^2/2.00$, you get $x = \\sqrt{78.3 \\times 2.00} = 12.5\\,\\text{bar}$ -- larger than the amount of PCl5 you started with. That is physically impossible. The quadratic is required when $x > 5\\%$ of the initial value.`
      },
      {
        q: `For $2\\,\\text{N}_2(g) + \\text{O}_2(g) \\rightleftharpoons 2\\,\\text{N}_2\\text{O}(g)$, K = $3.2 \\times 10^{-28}$ at 800 K. Starting with $P_{\\text{N}_2} = 2.50\\,\\text{bar}$ and $P_{\\text{O}_2} = 4.00\\,\\text{bar}$, find the equilibrium pressure of N2O.`,
        a: `ICE: I = 2.50, 4.00, 0; C = $-2x$, $-x$, $+2x$; E = $2.50-2x$, $4.00-x$, $2x$. Since K is tiny, drop $x$ from the reactant terms: $4x^2 / [(2.50)^2(4.00)] \\approx 3.2 \\times 10^{-28}$. Solving: $4x^2 \\approx 8.0 \\times 10^{-27}$, so $x \\approx 4.5 \\times 10^{-14}\\,\\text{bar}$. $P_{\\text{N}_2\\text{O}} = 2x = 8.9 \\times 10^{-14}\\,\\text{bar}$. The tiny K means N2O is nearly absent at equilibrium.`
      },
      {
        q: `After reaching equilibrium in the PCl5 system ($P_{\\text{PCl}_5} = 0.02\\,\\text{bar}$, $P_{\\text{PCl}_3} = 1.28\\,\\text{bar}$, $P_{\\text{Cl}_2} = 1.28\\,\\text{bar}$, K = 78.3), you add 0.0100 mol Cl2 to the 500 mL vessel at 524 K. The new total $P_{\\text{Cl}_2} = 2.15\\,\\text{bar}$. Find the new equilibrium pressures.`,
        a: `Added Cl2 makes Q > K (too many products), so the reaction shifts in reverse. Let x = decrease in PCl3 and Cl2. ICE from new starting point: E = $0.02+x$, $1.28-x$, $2.15-x$. Substituting into K: $(1.28-x)(2.15-x)/(0.02+x) = 78.3$. Expanding gives $x^2 - 81.73x + 1.186 = 0$, so $x \\approx 0.0144\\,\\text{bar}$. New equilibrium: $P_{\\text{PCl}_5} = 0.03\\,\\text{bar}$, $P_{\\text{PCl}_3} = 1.27\\,\\text{bar}$, $P_{\\text{Cl}_2} = 2.14\\,\\text{bar}$.`
      },
      {
        q: `For $\\text{H}_2\\text{O}(g) \\rightarrow \\text{H}_2(g) + \\tfrac{1}{2}\\,\\text{O}_2(g)$, $\\Delta_r G^\\circ = +118.08\\,\\text{kJ mol}^{-1}$ at 2300 K. Find K and the degree of dissociation $\\alpha$ at 1.00 bar.`,
        a: `Step 1: $\\ln K = -118080/[(8.3145)(2300)] = -6.17$, so $K = e^{-6.17} = 2.08 \\times 10^{-3}$. Step 2: build the $\\alpha$ relation for this 1:1:$\\tfrac{1}{2}$ stoichiometry. Start with 1 mol H2O: at equilibrium you have $(1-\\alpha)$ H2O, $\\alpha$ H2, and $\\tfrac{\\alpha}{2}$ O2, total $1+\\tfrac{\\alpha}{2}$ mol. For $\\alpha \\ll 1$ the mole fractions are about $x_{\\text{H}_2}\\approx\\alpha$, $x_{\\text{O}_2}\\approx\\tfrac{\\alpha}{2}$, $x_{\\text{H}_2\\text{O}}\\approx 1$. At $p = 1$ bar, $K = x_{\\text{H}_2}\\,x_{\\text{O}_2}^{1/2} \\approx \\alpha(\\alpha/2)^{1/2} = \\alpha^{3/2}/\\sqrt{2}$, so $K^2 \\approx \\alpha^3/2$. Step 3: $\\alpha^3 = 2K^2 = 2(2.08 \\times 10^{-3})^2 = 8.65 \\times 10^{-6}$, giving $\\alpha = (8.65 \\times 10^{-6})^{1/3} = 0.0205$. Water is about 2% dissociated at 2300 K and 1 bar.`
      },
      {
        q: `For $\\text{A}(g) \\rightleftharpoons 2\\,\\text{B}(g)$, derive the closed-form expression for the degree of dissociation $\\alpha$ as a function of K and total pressure p.`,
        a: `Start with n moles of A. At equilibrium: $n_\\text{A} = (1-\\alpha)n$, $n_\\text{B} = 2\\alpha n$, $n_\\text{total} = (1+\\alpha)n$. Mole fractions: $x_\\text{A} = (1-\\alpha)/(1+\\alpha)$, $x_\\text{B} = 2\\alpha/(1+\\alpha)$. Then $K = 4\\alpha^2 p / [(1-\\alpha^2)p^\\circ]$. Solving: $\\alpha = (1 + 4p/Kp^\\circ)^{-1/2}$. Higher pressure decreases $\\alpha$: compression favors fewer moles of gas.`
      },
      {
        q: `Predict what happens to the degree of dissociation in $\\text{A}(g) \\rightleftharpoons 2\\,\\text{B}(g)$ when total pressure is doubled. Explain qualitatively and check with the formula.`,
        a: `Doubling pressure decreases $\\alpha$. Le Chatelier's principle: compression favors fewer moles of gas. The left side (1 mole of A) has fewer moles than the right side (2 moles of B), so higher pressure suppresses B formation. The formula confirms: $\\alpha = (1 + 4p/Kp^\\circ)^{-1/2}$. As p increases, the denominator grows, so $\\alpha$ decreases.`
      },
      {
        q: `For $4\\,\\text{NH}_3(g) + 3\\,\\text{O}_2(g) \\rightleftharpoons 2\\,\\text{N}_2(g) + 6\\,\\text{H}_2\\text{O}(g)$: (a) adding N2, (b) removing NH3, (c) removing H2O. Predict the direction of shift for each.`,
        a: `(a) Adding N2 increases a product. Q rises above K. Reverse shift: more reactants (NH3, O2) form. (b) Removing NH3 decreases a reactant. Q rises above K (denominator shrinks). Reverse shift: more NH3 forms to make up for it. (c) Removing H2O decreases a product. Q falls below K. Forward shift: more N2 and H2O form. The reaction always shifts to make Q return to K.`
      },
      {
        q: 'Explain why adding an inert gas at constant volume does not shift a gas-phase equilibrium, but adding it at constant pressure can.',
        a: `At constant volume, adding inert gas increases total pressure but leaves the partial pressures of all reacting gases unchanged (they each still occupy the same volume at the same temperature). Q still equals K. No shift occurs. At constant pressure, adding inert gas forces the volume to expand. The partial pressures of reacting gases drop. This is like dilution. If $\\Delta n \\neq 0$, Q changes and the system shifts.`
      },
      {
        q: `For $2\\,\\text{NO}_2(g) \\rightleftharpoons \\text{N}_2\\text{O}_4(g)$, predict the effect of compression. For $\\text{H}_2(g) + \\text{I}_2(g) \\rightleftharpoons 2\\,\\text{HI}(g)$, predict the effect of compression.`,
        a: `For NO2/N2O4: $\\Delta n = 1 - 2 = -1$. Compression favors the side with fewer moles of gas: N2O4 (product). Forward shift. For H2/I2/HI: $\\Delta n = 2 - 2 = 0$. Equal moles of gas on both sides. Compression has no effect on the equilibrium position. Q equals K regardless of total pressure when $\\Delta n = 0$.`
      },
      {
        q: `For $2\\,\\text{SO}_2(g) + \\text{O}_2(g) \\rightleftharpoons 2\\,\\text{SO}_3(g)$ with $\\Delta H^\\circ = -197.78\\,\\text{kJ mol}^{-1}$, predict the effect of raising temperature on K and on the equilibrium amount of SO3.`,
        a: `The reaction is exothermic ($\\Delta H^\\circ < 0$). Think of heat as a product. Raising temperature adds heat, so the equilibrium shifts to consume it: toward reactants. K decreases with increasing temperature. Less SO3 is present at equilibrium. From van 't Hoff: $d\\ln K/dT = \\Delta_r H^\\circ/(RT^2)$. Since $\\Delta_r H^\\circ < 0$, the derivative is negative: K decreases as T increases.`
      },
      {
        q: `State the van 't Hoff equation and explain what a plot of $\\ln K$ vs $1/T$ gives you.`,
        a: `The integrated van 't Hoff equation is $\\ln(K_2/K_1) = (\\Delta_r H^\\circ/R)(1/T_1 - 1/T_2)$. The differential form is $d\\ln K/dT = \\Delta_r H^\\circ/(RT^2)$, or $d\\ln K/d(1/T) = -\\Delta_r H^\\circ/R$. A plot of $\\ln K$ vs $1/T$ is a straight line with slope $-\\Delta_r H^\\circ/R$. The sign of the slope tells you whether the reaction is exothermic (negative slope) or endothermic (positive slope). The magnitude gives $|\\Delta_r H^\\circ|$ directly.`
      },
      {
        q: `For $\\text{N}_2(g) + 3\\,\\text{H}_2(g) \\rightleftharpoons 2\\,\\text{NH}_3(g)$, K = $5.8 \\times 10^5$ at 298 K and $\\Delta H^\\circ = -92.22\\,\\text{kJ mol}^{-1}$. Calculate K at 400 K.`,
        a: `Use $\\ln(K_2/K_1) = (\\Delta_r H^\\circ/R)(1/T_1 - 1/T_2)$: $\\ln(K_2/K_1) = (-92220/8.3145)(1/298 - 1/400) = (-11093)(0.000856) = -9.49$. So $K_2 = (5.8 \\times 10^5) \\times e^{-9.49} = (5.8 \\times 10^5)(7.55 \\times 10^{-5}) = 44$. K drops from $5.8 \\times 10^5$ at 298 K to only 44 at 400 K, a factor of more than $10^4$ decrease. The ammonia equilibrium is extremely sensitive to temperature.`
      },
      {
        q: `K for ammonia synthesis is $5.8 \\times 10^5$ at 298 K and $0.17$ at 500 K. Does K increase or decrease with temperature? What does this tell you about the sign of $\\Delta H^\\circ$?`,
        a: `K decreases from $5.8 \\times 10^5$ at 298 K to $0.17$ at 500 K, a factor of more than $10^6$. From van 't Hoff, $d\\ln K/dT = \\Delta_r H^\\circ/(RT^2)$. Since K decreases with T, $d\\ln K/dT < 0$, so $\\Delta_r H^\\circ < 0$. The reaction is exothermic. Treat heat as a product: raising T shifts equilibrium toward reactants, away from NH3, lowering K.`
      },
      {
        q: `$\\text{Ag}_2\\text{CO}_3(s) \\rightleftharpoons \\text{Ag}_2\\text{O}(s) + \\text{CO}_2(g)$: K values at 350 K = $3.98 \\times 10^{-4}$ and 500 K = 1.48. Use these two points to estimate $\\Delta_r H^\\circ$.`,
        a: `Use $\\ln(K_2/K_1) = (\\Delta_r H^\\circ/R)(1/T_1 - 1/T_2)$. $\\ln(1.48/3.98 \\times 10^{-4}) = \\ln(3719) = 8.22$. $(1/350 - 1/500) = 0.000857\\,\\text{K}^{-1}$. $\\Delta_r H^\\circ/R = 8.22/0.000857 = 9590\\,\\text{K}$. $\\Delta_r H^\\circ = (9590)(8.3145) = +79.7\\,\\text{kJ mol}^{-1} \\approx +80\\,\\text{kJ mol}^{-1}$. Positive: decomposition is endothermic. K increases with T as expected.`
      },
      {
        q: `$\\text{F}_2(g) \\rightleftharpoons 2\\,\\text{F}(g)$ has K = $3.0 \\times 10^{-11}$ at 500 K and K = $1.0 \\times 10^{-2}$ at 1000 K. Is the dissociation exothermic or endothermic? Estimate $\\Delta H^\\circ$.`,
        a: `K increases with T (from $3.0 \\times 10^{-11}$ to $1.0 \\times 10^{-2}$ as T rises 500 to 1000 K). From van 't Hoff, $d\\ln K/dT > 0$, so $\\Delta_r H^\\circ > 0$: the dissociation is endothermic. Breaking F-F bonds needs energy. Estimate: $\\ln(10^{-2}/3 \\times 10^{-11}) = \\ln(3.3 \\times 10^8) = 19.6$. $(1/500 - 1/1000) = 0.001\\,\\text{K}^{-1}$. $\\Delta_r H^\\circ/R = 19.6/0.001 = 19600\\,\\text{K}$, so $\\Delta_r H^\\circ \\approx (19600)(8.3145) = +163\\,\\text{kJ mol}^{-1}$. Bond dissociation energies are always positive.`
      },
      {
        q: 'Why does a catalyst not change the equilibrium position or K?',
        a: `K is determined by $\\Delta_r G^\\circ = -RT \\ln K$, and $\\Delta_r G^\\circ$ depends on the Gibbs energies of products and reactants in their standard states. A catalyst provides a lower-energy pathway. It lowers the activation energy equally for the forward and reverse reactions. The Gibbs energies of the reactants and products themselves are unchanged. Therefore $\\Delta_r G^\\circ$ is unchanged, K is unchanged, and the equilibrium composition is the same.`
      },
      {
        q: "The Haber process runs at 150-300 bar and 400-500 C with an iron catalyst. For each condition, explain the reasoning using Le Chatelier's principle and thermodynamics.",
        a: `High pressure (150-300 bar): $\\text{N}_2 + 3\\,\\text{H}_2 \\rightleftharpoons 2\\,\\text{NH}_3$ has $\\Delta n = 2 - 4 = -2$. Compression favors fewer moles of gas (products). NH3 yield increases. K is unchanged; only the composition shifts. Moderate temperature (400-500 C): ammonia synthesis is exothermic, so K decreases with rising T ($K = 5.8 \\times 10^5$ at 298 K vs only 44 at 400 K). But at 25 C the reaction is too slow. 400-500 C balances acceptable yield with practical rate. Iron catalyst: allows the system to reach equilibrium faster. Does not change K. Continuous removal of NH3: drives equilibrium forward, increasing conversion.`
      },
      {
        q: `Hemoglobin (Hb) binds O2: $\\text{Hb} + \\text{O}_2 \\rightleftharpoons \\text{HbO}_2$. In the lungs, $p(\\text{O}_2) \\approx 100\\,\\text{mmHg}$. In active muscle, $p(\\text{O}_2) \\approx 40\\,\\text{mmHg}$. Use equilibrium principles to explain oxygen delivery.`,
        a: `In the lungs, high $p(\\text{O}_2)$ means Q < K for the HbO2 formation reaction. The forward reaction is favored: hemoglobin loads with oxygen. In muscle, low $p(\\text{O}_2)$ means Q > K. The reverse reaction is favored: HbO2 releases O2 to the tissue. The body uses spatial variation in O2 pressure to control which direction the equilibrium runs in each location. This is homeostasis: the biological system maintains stable O2 delivery by exploiting an equilibrium that responds to local pressure changes.`
      },
      {
        q: `You have the reaction $\\text{A}(g) \\rightleftharpoons \\text{B}(g)$ with K = 0.25 at 300 K. Starting with pure A at 2.0 bar, find the equilibrium pressures.`,
        a: `ICE: I = 2.0, 0; C = $-x$, $+x$; E = $2.0-x$, $x$. Substitute: $K = x/(2.0-x) = 0.25$. So $x = 0.25(2.0-x) = 0.50 - 0.25x$. $1.25x = 0.50$. $x = 0.40\\,\\text{bar}$. Equilibrium: $P_\\text{A} = 1.60\\,\\text{bar}$, $P_\\text{B} = 0.40\\,\\text{bar}$. Check: $x/2.0 = 20\\%$, so the small-x approximation would fail here. Check K: $0.40/1.60 = 0.25$. Correct.`
      },
      {
        q: `Explain the Boltzmann/thermodynamic interpretation of K. What two factors compete to set the equilibrium position?`,
        a: `K encodes two competing factors. First, energetics: $e^{-\\Delta_r H^\\circ/RT}$ -- molecules prefer lower energy states. If products are lower in energy, this factor is greater than 1 and pushes K > 1. At low T, this term dominates. Second, entropy: $e^{\\Delta_r S^\\circ/R}$ -- molecules prefer states with more ways to distribute energy. At high T, the entropy term dominates. $K = e^{-\\Delta_r H^\\circ/RT} \\times e^{\\Delta_r S^\\circ/R}$ balances both.`
      },
      {
        q: `K for $\\text{H}_2(g) + \\text{I}_2(g) \\rightleftharpoons 2\\,\\text{HI}(g)$ is 794 at 298 K and 54 at 700 K. Is this reaction exothermic or endothermic? Justify with the van 't Hoff equation.`,
        a: `K decreases as T increases (from 794 to 54 as T rises from 298 to 700 K). From van 't Hoff: $d\\ln K/dT = \\Delta_r H^\\circ/(RT^2)$. If K decreases with T, then $d\\ln K/dT < 0$, so $\\Delta_r H^\\circ < 0$. The reaction is exothermic. Raising temperature shifts the equilibrium toward reactants (less HI), consistent with treating heat as a product.`
      },
      {
        q: `You compress a gas-phase reaction mixture where $\\Delta n = +2$. Predict what happens to (a) K, (b) the mole fractions of products, (c) $K_x$.`,
        a: `(a) K does not change. K is independent of pressure at fixed T. (b) The mole fractions of products decrease. Compression favors the side with fewer moles of gas. Here $\\Delta n = +2$ means products have more moles, so they are disfavored by compression. (c) $K_x$ decreases, because $K = K_x (p/p^\\circ)^{\\Delta n}$ and K is constant. With $\\Delta n = +2$, $(p/p^\\circ)^2$ increases when p increases, so $K_x$ must decrease.`
      },
      {
        q: `A student says "since $\\Delta_r G^\\circ < 0$ for this reaction, it will always go forward." What is wrong with this statement?`,
        a: `The statement confuses $\\Delta_r G^\\circ$ with $\\Delta_r G$. $\\Delta_r G^\\circ < 0$ means K > 1: products are favored at standard conditions. But at any non-standard composition, the spontaneous direction is determined by $\\Delta_r G = \\Delta_r G^\\circ + RT \\ln Q$. If Q > K (too many products already), $\\Delta_r G > 0$ and the reaction runs in reverse, even with $\\Delta_r G^\\circ < 0$. $\\Delta_r G^\\circ$ only tells you where the equilibrium lies, not the direction from every starting point.`
      },
      {
        q: `Explain why the Gibbs energy curve $G$ vs extent of reaction $\\xi$ has a minimum at an intermediate composition rather than at pure products or pure reactants.`,
        a: `The Gibbs energy of mixing is always negative for a blend. A pure-reactants mixture and a pure-products mixture both have zero mixing entropy, so they sit higher on the G curve. Without mixing, G would change in a straight line from pure reactants to pure products. The mixing contribution always dips below that straight line, creating a U-shaped curve. This dip pulls the total G to its lowest value at an intermediate composition. That minimum is the equilibrium point.`
      },
      {
        q: `Contrast $\\Delta_r G$ and $\\Delta_r G^\\circ$. Which one equals zero at equilibrium? Which one determines K?`,
        a: `$\\Delta_r G$ is the slope of G vs $\\xi$ at the current composition. It tells you whether the reaction is spontaneous (negative), at equilibrium (zero), or reverse-spontaneous (positive). $\\Delta_r G$ equals zero at equilibrium. $\\Delta_r G^\\circ$ is the Gibbs energy change when all species are in their standard states. It depends only on T and determines K through $\\Delta_r G^\\circ = -RT \\ln K$. $\\Delta_r G^\\circ$ is not zero at equilibrium: it is a fixed reference value that encodes where the equilibrium lies.`
      },
      {
        q: 'An exothermic reaction has K = 1000 at 25 C. A manufacturer wants maximum yield of products. Should they run the process at 25 C or 500 C? What is the tradeoff?',
        a: `For maximum yield (largest K), run at 25 C. The reaction is exothermic: K decreases with rising T. At 500 C, K would be much smaller and the equilibrium would favor reactants more. But at 25 C the reaction may be kinetically extremely slow. Without a catalyst it could take years to reach equilibrium. The tradeoff is thermodynamics vs kinetics: thermodynamics favors low T (large K, high equilibrium yield); kinetics favor high T (faster approach to equilibrium). In practice, use a catalyst that enables equilibrium to be reached quickly at moderate temperature.`
      },
      {
        q: `K for ammonia synthesis is $5.8 \\times 10^5$ at 298 K. Using $\\Delta_r H^\\circ = -92.22\\,\\text{kJ mol}^{-1}$ and $\\Delta_r S^\\circ = -198.8\\,\\text{J K}^{-1}\\text{mol}^{-1}$, verify K at 298 K.`,
        a: `Use $\\ln K = -\\Delta_r H^\\circ/(RT) + \\Delta_r S^\\circ/R$. $-\\Delta_r H^\\circ/(RT) = 92220/[(8.3145)(298)] = 37.21$. $\\Delta_r S^\\circ/R = -198.8/8.3145 = -23.91$. $\\ln K = 37.21 - 23.91 = 13.30$. $K = e^{13.30} = 6.0 \\times 10^5$. This agrees well with the given $K = 5.8 \\times 10^5$ (the small gap comes from rounding in $\\Delta H^\\circ$ and $\\Delta S^\\circ$). The energetic factor $e^{37.21}$ wins over the entropic penalty $e^{-23.91}$, giving K > 1 despite the negative $\\Delta S^\\circ$.`
      },
      {
        q: `Predict the effect of temperature on K for $\\text{N}_2\\text{O}_4(g) \\rightleftharpoons 2\\,\\text{NO}_2(g)$. At 298 K, K = 0.15; at 400 K, K = 47.9. Is this consistent with the reaction being endothermic or exothermic?`,
        a: `K increases dramatically from 0.15 to 47.9 as T rises from 298 to 400 K. By van 't Hoff, $d\\ln K/dT > 0$ implies $\\Delta_r H^\\circ > 0$. The reaction is endothermic. Raising temperature provides energy to break N-O bonds in N2O4 and form NO2. Endothermic reactions have larger K at higher T because the added heat acts like a reactant, pushing equilibrium toward products.`
      },
      {
        q: `What activities should you use for each species in K for $\\text{Ni}(s) + 4\\,\\text{CO}(g) \\rightleftharpoons \\text{Ni(CO)}_4(g)$? Write the K expression.`,
        a: `Ni(s) is a pure solid: $a = 1$ (omit from K). CO(g) is an ideal gas: $a = P_{\\text{CO}}/P^\\circ$. Ni(CO)4(g) is an ideal gas: $a = P_{\\text{Ni(CO)}_4}/P^\\circ$. The K expression is: $K = P_{\\text{Ni(CO)}_4} / P_{\\text{CO}}^4$. Ni does not appear because its activity is 1. The denominator has CO to the fourth power because its stoichiometric coefficient is 4. Adding more solid Ni does not change K.`
      },
      {
        q: `For ammonia synthesis K = $5.8 \\times 10^5$ at 298 K and K = 0.17 at 500 K. Show this is consistent with van 't Hoff using $\\Delta_r H^\\circ = -92.2\\,\\text{kJ mol}^{-1}$.`,
        a: `$\\ln(K_2/K_1) = (\\Delta_r H^\\circ/R)(1/T_1 - 1/T_2) = (-92200/8.3145)(1/298 - 1/500) = (-11089)(0.001356) = -15.04$. Therefore $K_2 = (5.8 \\times 10^5) \\times e^{-15.04} = (5.8 \\times 10^5)(2.93 \\times 10^{-7}) = 0.17$. This exactly matches K(500 K) = 0.17. The van 't Hoff equation correctly predicts the dramatic drop in K from $5.8 \\times 10^5$ at 298 K to 0.17 at 500 K.`
      },
      {
        q: `Two experiments with $2\\,\\text{SO}_2(g) + \\text{O}_2(g) \\rightleftharpoons 2\\,\\text{SO}_3(g)$ start with very different initial pressures. K averages to 0.0413 at 1000 K across five different experiments. What does this demonstrate about K?`,
        a: `It demonstrates that K depends only on temperature, not on initial composition. No matter how you load the vessel, the system reaches the same K = 0.0413 at 1000 K. This is the law of mass action: K is a fixed property of the reaction at a given temperature. It follows from the thermodynamic requirement that G reaches a minimum.`
      },
      {
        q: 'Explain why the law of mass action holds: why does K always equal the same value at a given temperature, regardless of initial composition?',
        a: `K is fixed because it is set by $\\Delta_r G^\\circ = -RT \\ln K$, and $\\Delta_r G^\\circ$ is a state function that depends only on T. It is built from the Gibbs energies of the standard states of reactants and products. No matter how you load the vessel, the Gibbs energy landscape is the same. The system always rolls downhill on that fixed landscape to the same minimum, the same equilibrium composition. Five experiments with $2\\,\\text{SO}_2 + \\text{O}_2 \\rightleftharpoons 2\\,\\text{SO}_3$ at 1000 K all give K = 0.0413.`
      },
      {
        q: 'Why does starting from pure reactants versus pure products lead to the same K at a given temperature?',
        a: `K is fixed at a given T because $\\Delta_r G^\\circ = -RT \\ln K$ depends only on the Gibbs energies of the standard states at that T. The equilibrium is the minimum on a fixed G curve plotted against extent of reaction. Whether you start at the reactant end or the product end, the system rolls downhill to the same minimum. The equilibrium composition is identical. This is confirmed empirically: different initial compositions all reach the same K.`
      },
      {
        q: `What happens to K when you add two reactions whose K values are K1 and K2? Show why using the definition $K = \\prod a_j^{\\nu_j}$.`,
        a: `When you add two reactions, the overall K = K1 x K2. For reaction 1, $K_1 = \\prod a_j^{\\nu_{j,1}}$, and for reaction 2, $K_2 = \\prod a_j^{\\nu_{j,2}}$. Adding the reactions adds the stoichiometric numbers: $\\nu_{j,\\text{overall}} = \\nu_{j,1} + \\nu_{j,2}$. So $K_\\text{overall} = \\prod a_j^{\\nu_{j,1} + \\nu_{j,2}} = K_1 \\times K_2$. This is the equilibrium analog of Hess's law: instead of adding $\\Delta H$ values, you multiply K values.`
      },
      {
        q: `At a given temperature, K is $10^{-15}$ for a certain reaction. You start with only products. What happens?`,
        a: `The system shifts in reverse: it forms reactants. $K = 10^{-15}$ means reactants are overwhelmingly favored at equilibrium. Starting with only products puts Q formally at infinity (denominator is zero, or Q >> K). Since Q >> K, the reverse reaction is spontaneous. Reactants form until Q drops to $10^{-15}$. At equilibrium, almost all the original products convert to reactants. The system always moves toward Q = K, regardless of starting composition.`
      },
      {
        q: `The equilibrium $\\text{H}_2 + \\text{Cl}_2 \\rightleftharpoons 2\\,\\text{HCl}$ has K = $4.0 \\times 10^{18}$ at 500 K. Partial pressures of H2 and Cl2 at some equilibrium state are $4.2 \\times 10^{-8}$ bar and $8.3 \\times 10^{-8}$ bar. Calculate the equilibrium HCl pressure.`,
        a: `From $K = P_{\\text{HCl}}^2 / (P_{\\text{H}_2} \\cdot P_{\\text{Cl}_2})$, rearrange: $P_{\\text{HCl}} = \\sqrt{K \\cdot P_{\\text{H}_2} \\cdot P_{\\text{Cl}_2}}$. Substitute: $P_{\\text{HCl}} = \\sqrt{(4.0 \\times 10^{18})(4.2 \\times 10^{-8})(8.3 \\times 10^{-8})} = \\sqrt{1.39 \\times 10^4} = 1.2 \\times 10^2\\,\\text{bar}$. The HCl pressure is 120 bar while the reactant pressures are $10^{-8}$ bar, consistent with $K \\approx 10^{18}$.`
      },
      {
        q: `Compare the sensitivity of an exothermic reaction (large $|\\Delta H^\\circ|$) vs a thermoneutral reaction (one that releases or absorbs almost no heat, $\\Delta H^\\circ \\approx 0$) to temperature changes in K.`,
        a: `For a thermoneutral reaction, $\\Delta H^\\circ \\approx 0$. From van 't Hoff: $d\\ln K/dT = \\Delta_r H^\\circ/(RT^2) \\approx 0$. K barely changes with temperature. For an exothermic reaction with large $|\\Delta H^\\circ|$, $d\\ln K/dT$ is large and negative. K falls sharply as T rises. Ammonia synthesis has $\\Delta H^\\circ = -92\\,\\text{kJ mol}^{-1}$ and K drops from $5.8 \\times 10^5$ to 44 over just 100 K. The larger $|\\Delta H^\\circ|$, the steeper the slope in the $\\ln K$ vs $1/T$ plot.`
      },
      {
        q: `A reaction has K = 0.0413 at 1000 K. Is the equilibrium strongly product-favoring, strongly reactant-favoring, or intermediate?`,
        a: `K = 0.0413 is in the intermediate range ($10^{-3}$ to $10^3$), but closer to the reactant side. Reactants are moderately favored, but significant amounts of both sides are present at equilibrium. $K > 10^3$ means products strongly favored; $K < 10^{-3}$ means reactants strongly favored; $10^{-3} < K < 10^3$ means both are present significantly. K = 0.0413 is about 25 times more reactant-favoring than 1.`
      },
      {
        q: `For $\\tfrac{1}{2}\\,\\text{N}_2(g) + \\tfrac{3}{2}\\,\\text{H}_2(g) \\rightleftharpoons \\text{NH}_3(g)$, write K' and relate it to K for $\\text{N}_2(g) + 3\\,\\text{H}_2(g) \\rightleftharpoons 2\\,\\text{NH}_3(g)$.`,
        a: `For the half-equation: $K' = P_{\\text{NH}_3} / (P_{\\text{N}_2}^{1/2} \\cdot P_{\\text{H}_2}^{3/2})$. For the doubled equation: $K = P_{\\text{NH}_3}^2 / (P_{\\text{N}_2} \\cdot P_{\\text{H}_2}^3)$. Comparing: $K' = \\sqrt{K}$, because halving all stoichiometric coefficients takes the square root of K. If $K = 5.8 \\times 10^5$, then $K' = \\sqrt{5.8 \\times 10^5} = 7.6 \\times 10^2$. Always specify which form of the equation K belongs to.`
      },
      {
        q: 'An ICE table gives you x = -0.15 bar and x = 1.45 bar as solutions to the quadratic. Which do you use and why?',
        a: `Use $x = 1.45\\,\\text{bar}$ (the positive root). The variable $x$ represents the change in pressure as the reaction reaches equilibrium. A negative root would give a physically impossible result if it leads to negative pressures for any species. Always pick the root that gives non-negative pressures for all species. If both positive roots are valid, pick the smaller one (reaction does not overshoot equilibrium). Discard negative roots immediately.`
      },
      {
        q: `Predict: if you increase temperature for an endothermic reaction, does K increase or decrease? How does this affect the degree of dissociation $\\alpha$ for $\\text{A}(g) \\rightleftharpoons 2\\,\\text{B}(g)$?`,
        a: `For an endothermic reaction ($\\Delta H^\\circ > 0$), raising T increases K. From van 't Hoff: $d\\ln K/dT = \\Delta_r H^\\circ/(RT^2) > 0$, so K grows with T. For the dissociation $\\text{A} \\rightleftharpoons 2\\,\\text{B}$: larger K means more B and less A at equilibrium, so $\\alpha$ increases. From the formula $\\alpha = (1 + 4p/Kp^\\circ)^{-1/2}$: as K increases, the factor $4p/Kp^\\circ$ decreases, making $\\alpha$ larger. Higher temperature drives more dissociation for endothermic reactions.`
      },
      {
        q: 'What is the difference between an exergonic reaction and an exothermic one? Can a reaction be one but not the other?',
        a: `An exergonic reaction has $\\Delta_r G < 0$ at the current composition: it is spontaneous as written right now. An exothermic reaction has $\\Delta H^\\circ < 0$: it releases heat when going from standard reactants to standard products. These are different quantities. Yes, a reaction can be one but not the other. A reaction with $\\Delta H^\\circ < 0$ but large negative $\\Delta S^\\circ$ will have $\\Delta_r G^\\circ = \\Delta H^\\circ - T\\Delta S^\\circ > 0$ at high T (endergonic standard state, exothermic). Conversely, some endothermic reactions are driven spontaneous by large positive entropy changes at high T.`
      }
    ],
    reference: {
      category: 'Quick Reference',
      title: 'Chemical Equilibrium and Equilibrium Constants',
      sections: [
        <>
          <div className="ref-section">
            <h2>Equilibrium Constant Definitions</h2>
            <div className="ref-formula">
              <span className="ref-formula-name">
                Thermodynamic equilibrium constant (gas-phase)
              </span>
              <div className="ref-formula-eq">{`$$K = \\frac{(P_{\\text{C}}/P^\\circ)^c \\,(P_{\\text{D}}/P^\\circ)^d}{(P_{\\text{A}}/P^\\circ)^a \\,(P_{\\text{B}}/P^\\circ)^b}$$`}</div>
              <div className="ref-formula-desc">
                <p>
                  Fundamental definition for{' '}
                  {`$a\\text{A} + b\\text{B} \\rightleftharpoons c\\text{C} + d\\text{D}$`} (all
                  gas); use whenever you need K for thermodynamic calculations. Set{' '}
                  {`$P^\\circ = 1\\,\\text{bar}$`}.
                </p>
              </div>
            </div>
            <div className="ref-formula">
              <span className="ref-formula-name">K in activity form (general)</span>
              <div className="ref-formula-eq">{`$$K = \\prod_j a_j^{\\nu_j}$$`}</div>
              <div className="ref-formula-desc">
                <p>
                  Use whenever a reaction mixes phases (gases, solutes, pure solids or liquids).
                  Activities are {`$P_j/P^\\circ$`} (gas), {`$[\\text{J}]/c^\\circ$`} (solute), or 1
                  (pure solid/liquid), so pure solids and liquids drop out of K.
                </p>
              </div>
            </div>
            <div className="ref-formula">
              <span className="ref-formula-name">Equilibrium constant in molar concentrations</span>
              <div className="ref-formula-eq">{`$$K_c = \\frac{[\\text{C}]^c[\\text{D}]^d}{[\\text{A}]^a[\\text{B}]^b}$$`}</div>
              <div className="ref-formula-desc">
                <p>
                  Use when experimental data is in mol/L; convert to K for thermodynamic
                  calculations.
                </p>
              </div>
            </div>
            <div className="ref-formula">
              <span className="ref-formula-name">Equilibrium constant in mole fractions</span>
              <div className="ref-formula-eq">{`$$K_x = \\prod_j x_j^{\\nu_j}$$`}</div>
              <div className="ref-formula-desc">
                <p>
                  Use when mole fractions are more convenient; note that {`$K_x$`} depends on total
                  pressure unlike K.
                </p>
              </div>
            </div>
            <h3>Activity Conventions</h3>
            <table>
              <thead>
                <tr>
                  <th>Phase</th>
                  <th>Activity {`$a_j$`}</th>
                  <th>Standard state</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Ideal gas</td>
                  <td>{`$P_j / P^\\circ$`}</td>
                  <td>{`$P^\\circ = 1\\,\\text{bar}$`}</td>
                </tr>
                <tr>
                  <td>Solute (molarity)</td>
                  <td>{`$[\\text{J}] / c^\\circ$`}</td>
                  <td>{`$c^\\circ = 1\\,\\text{mol dm}^{-3}$`}</td>
                </tr>
                <tr>
                  <td>Solute (molality)</td>
                  <td>{`$b_j / b^\\circ$`}</td>
                  <td>{`$b^\\circ = 1\\,\\text{mol kg}^{-1}$`}</td>
                </tr>
                <tr>
                  <td>Pure solid</td>
                  <td>1 (exact)</td>
                  <td>Pure substance at 1 bar</td>
                </tr>
                <tr>
                  <td>Pure liquid</td>
                  <td>1 (exact)</td>
                  <td>Pure substance at 1 bar</td>
                </tr>
              </tbody>
            </table>
          </div>
        </>,

        <>
          <div className="ref-section">
            <h2>Relations Between K Forms</h2>
            <div className="ref-formula">
              <span className="ref-formula-name">K and Kc conversion</span>
              <div className="ref-formula-eq">{`$$K = \\left(\\frac{c^\\circ RT}{P^\\circ}\\right)^{\\!\\Delta n} K_c = \\left(\\frac{T}{12.03\\,\\text{K}}\\right)^{\\!\\Delta n} K_c$$`}</div>
              <div className="ref-formula-desc">
                <p>
                  Convert between thermodynamic K (pressures) and Kc (concentrations) when{' '}
                  {`$\\Delta n \\neq 0$`};{' '}
                  {`$\\Delta n = n_\\text{gas products} - n_\\text{gas reactants}$`}.
                </p>
              </div>
            </div>
            <div className="ref-formula">
              <span className="ref-formula-name">K and Kx conversion</span>
              <div className="ref-formula-eq">{`$$K = K_x \\left(\\frac{p}{p^\\circ}\\right)^{\\!\\Delta\\nu}$$`}</div>
              <div className="ref-formula-desc">
                <p>
                  Convert between K and the mole-fraction form Kx; {`$\\Delta\\nu$`} is the change
                  in moles of gas; Kx changes with total pressure but K does not.
                </p>
              </div>
            </div>
            <h3>K, Kc, and Kx Relationships</h3>
            <table>
              <thead>
                <tr>
                  <th>Condition</th>
                  <th>Relation</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{`$\\Delta n = 0$`}</td>
                  <td>{`$K = K_c = K_x$`} (all equivalent at any pressure)</td>
                </tr>
                <tr>
                  <td>{`$\\Delta n > 0$`} (more gas moles as products)</td>
                  <td>
                    {`$K > K_c$`}; {`$K_x$`} decreases with higher {`$p$`}
                  </td>
                </tr>
                <tr>
                  <td>{`$\\Delta n < 0$`} (fewer gas moles as products)</td>
                  <td>
                    {`$K < K_c$`}; {`$K_x$`} increases with higher {`$p$`}
                  </td>
                </tr>
              </tbody>
            </table>
            <h3>K Manipulation Rules</h3>
            <table>
              <thead>
                <tr>
                  <th>Operation on equation</th>
                  <th>Effect on K</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Reverse the reaction</td>
                  <td>{`$K_\\text{new} = 1/K$`}</td>
                </tr>
                <tr>
                  <td>Multiply all coefficients by {`$n$`}</td>
                  <td>{`$K_\\text{new} = K^n$`}</td>
                </tr>
                <tr>
                  <td>Add two reactions</td>
                  <td>{`$K_\\text{total} = K_1 \\times K_2$`}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </>,

        <>
          <div className="ref-section">
            <h2>Thermodynamic Relations</h2>
            <div className="ref-formula">
              <span className="ref-formula-name">Reaction Gibbs energy at any composition</span>
              <div className="ref-formula-eq">{`$$\\Delta_r G = \\Delta_r G^\\circ + RT \\ln Q$$`}</div>
              <div className="ref-formula-desc">
                <p>
                  Calculate whether the reaction is spontaneous ({`$\\Delta_r G < 0$`}), at
                  equilibrium ({`$\\Delta_r G = 0$`}), or reverse-spontaneous ({`$\\Delta_r G > 0$`}
                  ) at any composition.
                </p>
              </div>
            </div>
            <div className="ref-formula">
              <span className="ref-formula-name">Thermodynamic bridge</span>
              <div className="ref-formula-eq">{`$$\\Delta_r G^\\circ = -RT \\ln K$$`}</div>
              <div className="ref-formula-desc">
                <p>
                  Convert between the standard Gibbs energy of reaction and K; the fundamental
                  connection between thermodynamics and equilibrium.
                </p>
              </div>
            </div>
            <div className="ref-formula">
              <span className="ref-formula-name">
                Standard reaction Gibbs energy from formation data
              </span>
              <div className="ref-formula-eq">{`$$\\Delta_r G^\\circ = \\sum_{\\text{products}} n\\,\\Delta_f G^\\circ - \\sum_{\\text{reactants}} n\\,\\Delta_f G^\\circ$$`}</div>
              <div className="ref-formula-desc">
                <p>
                  Calculate {`$\\Delta_r G^\\circ$`} from standard Gibbs energies of formation, then
                  use {`$\\Delta_r G^\\circ = -RT \\ln K$`} to find K.
                </p>
              </div>
            </div>
            <div className="ref-formula">
              <span className="ref-formula-name">K from enthalpy and entropy</span>
              <div className="ref-formula-eq">{`$$\\ln K = -\\frac{\\Delta_r H^\\circ}{RT} + \\frac{\\Delta_r S^\\circ}{R}$$`}</div>
              <div className="ref-formula-desc">
                <p>
                  When {`$\\Delta_r H^\\circ$`} and {`$\\Delta_r S^\\circ$`} are known; shows that K
                  is the product of an energetic factor {`$e^{-\\Delta_r H^\\circ/RT}$`} and an
                  entropic factor {`$e^{\\Delta_r S^\\circ/R}$`}.
                </p>
              </div>
            </div>
            <h3>Sign Conventions for {`$\\Delta_r G^\\circ$`} and K</h3>
            <table>
              <thead>
                <tr>
                  <th>{`$\\Delta_r G^\\circ$`}</th>
                  <th>{`$\\ln K$`}</th>
                  <th>K</th>
                  <th>Equilibrium favors</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Large negative ({`$< -20\\,\\text{kJ mol}^{-1}$`})</td>
                  <td>Large positive</td>
                  <td>{`$K \\gg 1$`}</td>
                  <td>Products strongly</td>
                </tr>
                <tr>
                  <td>Slightly negative</td>
                  <td>Small positive</td>
                  <td>
                    {`$K$`} slightly {`$> 1$`}
                  </td>
                  <td>Products slightly</td>
                </tr>
                <tr>
                  <td>Zero</td>
                  <td>0</td>
                  <td>{`$K = 1$`}</td>
                  <td>Neither</td>
                </tr>
                <tr>
                  <td>Slightly positive</td>
                  <td>Small negative</td>
                  <td>
                    {`$K$`} slightly {`$< 1$`}
                  </td>
                  <td>Reactants slightly</td>
                </tr>
                <tr>
                  <td>Large positive ({`$> +20\\,\\text{kJ mol}^{-1}$`})</td>
                  <td>Large negative</td>
                  <td>{`$K \\ll 1$`}</td>
                  <td>Reactants strongly</td>
                </tr>
              </tbody>
            </table>
          </div>
        </>,

        <>
          <div className="ref-section">
            <h2>Reaction Quotient Q and Direction</h2>
            <div className="ref-formula">
              <span className="ref-formula-name">Reaction quotient</span>
              <div className="ref-formula-eq">{`$$Q = \\frac{a_\\text{C}^c\\,a_\\text{D}^d}{a_\\text{A}^a\\,a_\\text{B}^b} \\quad \\text{(at any composition)}$$`}</div>
              <div className="ref-formula-desc">
                <p>
                  Calculate at any point during reaction to predict direction; same form as K but
                  not restricted to equilibrium.
                </p>
              </div>
            </div>
            <h3>Q vs K Compass</h3>
            <table>
              <thead>
                <tr>
                  <th>Comparison</th>
                  <th>Direction of spontaneous change</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{`$Q < K$`}</td>
                  <td>Forward reaction (more products form)</td>
                </tr>
                <tr>
                  <td>{`$Q = K$`}</td>
                  <td>At equilibrium (no net change)</td>
                </tr>
                <tr>
                  <td>{`$Q > K$`}</td>
                  <td>Reverse reaction (more reactants form)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </>,

        <>
          <div className="ref-section">
            <h2>ICE Table Procedure</h2>
            <h3>Step-by-Step Method</h3>
            <table>
              <thead>
                <tr>
                  <th>Step</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Write balanced equation with all gas-phase (and aqueous) species</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>I row: enter initial pressures or concentrations</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>
                    C row: assign {`$-\\nu x$`} to reactants, {`$+\\nu x$`} to products (one
                    variable {`$x$`})
                  </td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>E row: I + C for each species</td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>Substitute E row into K expression and solve for {`$x$`}</td>
                </tr>
                <tr>
                  <td>6</td>
                  <td>
                    Check: if {`$x < 5\\%$`} of initial, approximation valid; otherwise use
                    quadratic
                  </td>
                </tr>
                <tr>
                  <td>7</td>
                  <td>Verify by substituting equilibrium values back into K</td>
                </tr>
              </tbody>
            </table>
            <h3>Approximation Guide</h3>
            <table>
              <thead>
                <tr>
                  <th>K vs initial concentration/pressure</th>
                  <th>Method</th>
                  <th>Validity check</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    {`$K \\ll$`} initial (e.g., {`$K < 10^{-4}$`} at {`$P_0 \\sim 1\\,\\text{bar}$`}
                    )
                  </td>
                  <td>Drop {`$x$`} from denominators (small-x approximation)</td>
                  <td>{`$x < 5\\%$`} of initial</td>
                </tr>
                <tr>
                  <td>K comparable to initial</td>
                  <td>Full quadratic {`$ax^2 + bx + c = 0$`}</td>
                  <td>Always valid; take physically meaningful (positive) root</td>
                </tr>
                <tr>
                  <td>{`$K \\gg$`} initial</td>
                  <td>Reaction almost complete; small residual reverse ICE</td>
                  <td>K is large: treat as complete then correct</td>
                </tr>
              </tbody>
            </table>
          </div>
        </>,

        <>
          <div className="ref-section">
            <h2>Degree of Dissociation</h2>
            <div className="ref-formula">
              <span className="ref-formula-name">
                Degree of dissociation {`$\\alpha$`} for{' '}
                {`$\\text{A}(g) \\rightleftharpoons 2\\,\\text{B}(g)$`}
              </span>
              <div className="ref-formula-eq">{`$$\\alpha = \\left(1 + \\frac{4p}{Kp^\\circ}\\right)^{-1/2}$$`}</div>
              <div className="ref-formula-desc">
                <p>
                  Closed-form result when you need {`$\\alpha$`} as a function of total pressure{' '}
                  {`$p$`} and K; valid for this specific stoichiometry.
                </p>
              </div>
            </div>
            <div className="ref-formula">
              <span className="ref-formula-name">
                Approximate {`$\\alpha$`} for{' '}
                {`$\\text{H}_2\\text{O}(g) \\rightarrow \\text{H}_2(g) + \\tfrac{1}{2}\\,\\text{O}_2(g)$`}{' '}
                ({`$\\alpha \\ll 1$`})
              </span>
              <div className="ref-formula-eq">{`$$\\alpha = (2K^2)^{1/3} \\quad \\text{at } p = p^\\circ$$`}</div>
              <div className="ref-formula-desc">
                <p>
                  Specific to this 1:1:{`$\\tfrac{1}{2}$`} stoichiometry when {`$\\alpha \\ll 1$`};
                  gives closed-form {`$\\alpha$`} at standard pressure.
                </p>
              </div>
            </div>
            <h3>
              Effect of Pressure on Degree of Dissociation for{' '}
              {`$\\text{A} \\rightleftharpoons 2\\,\\text{B}$`}
            </h3>
            <table>
              <thead>
                <tr>
                  <th>Change</th>
                  <th>Effect on {`$\\alpha$`}</th>
                  <th>Reason</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Total pressure increases</td>
                  <td>{`$\\alpha$`} decreases</td>
                  <td>Le Chatelier: compression favors fewer gas moles (reactant side)</td>
                </tr>
                <tr>
                  <td>Total pressure decreases</td>
                  <td>{`$\\alpha$`} increases</td>
                  <td>Expansion favors more gas moles (product side)</td>
                </tr>
                <tr>
                  <td>K increases (higher T, endothermic)</td>
                  <td>{`$\\alpha$`} increases</td>
                  <td>More product favored at equilibrium</td>
                </tr>
                <tr>
                  <td>K decreases (higher T, exothermic)</td>
                  <td>{`$\\alpha$`} decreases</td>
                  <td>Less product favored at equilibrium</td>
                </tr>
              </tbody>
            </table>
          </div>
        </>,

        <>
          <div className="ref-section">
            <h2>Le Chatelier's Principle</h2>
            <table>
              <thead>
                <tr>
                  <th>Perturbation</th>
                  <th>Effect on K</th>
                  <th>Direction of shift</th>
                  <th>Mechanism</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Add reactant</td>
                  <td>None</td>
                  <td>Forward</td>
                  <td>Q &lt; K; system forms more products</td>
                </tr>
                <tr>
                  <td>Remove reactant</td>
                  <td>None</td>
                  <td>Reverse</td>
                  <td>Q &gt; K; system forms more reactants</td>
                </tr>
                <tr>
                  <td>Add product</td>
                  <td>None</td>
                  <td>Reverse</td>
                  <td>Q &gt; K; system consumes excess product</td>
                </tr>
                <tr>
                  <td>Remove product</td>
                  <td>None</td>
                  <td>Forward</td>
                  <td>Q &lt; K; system makes more product</td>
                </tr>
                <tr>
                  <td>Compress (reduce V), {`$\\Delta n < 0$`}</td>
                  <td>None</td>
                  <td>Forward (fewer moles of gas = products)</td>
                  <td>Compression favors side with fewer gas moles</td>
                </tr>
                <tr>
                  <td>Compress (reduce V), {`$\\Delta n > 0$`}</td>
                  <td>None</td>
                  <td>Reverse (fewer moles of gas = reactants)</td>
                  <td>Compression favors side with fewer gas moles</td>
                </tr>
                <tr>
                  <td>Compress (reduce V), {`$\\Delta n = 0$`}</td>
                  <td>None</td>
                  <td>No shift</td>
                  <td>Equal gas moles on both sides; Q unchanged</td>
                </tr>
                <tr>
                  <td>Add inert gas at constant V</td>
                  <td>None</td>
                  <td>No shift</td>
                  <td>Partial pressures of reacting gases unchanged</td>
                </tr>
                <tr>
                  <td>Add inert gas at constant p</td>
                  <td>None</td>
                  <td>Toward more gas moles</td>
                  <td>Dilution: partial pressures drop</td>
                </tr>
                <tr>
                  <td>Raise temperature, exothermic ({`$\\Delta H^\\circ < 0$`})</td>
                  <td>K decreases</td>
                  <td>Reverse</td>
                  <td>Heat is a product; adding heat shifts reverse</td>
                </tr>
                <tr>
                  <td>Raise temperature, endothermic ({`$\\Delta H^\\circ > 0$`})</td>
                  <td>K increases</td>
                  <td>Forward</td>
                  <td>Heat is a reactant; adding heat shifts forward</td>
                </tr>
                <tr>
                  <td>Lower temperature, exothermic</td>
                  <td>K increases</td>
                  <td>Forward</td>
                  <td>Removing heat shifts forward</td>
                </tr>
                <tr>
                  <td>Lower temperature, endothermic</td>
                  <td>K decreases</td>
                  <td>Reverse</td>
                  <td>Removing heat shifts reverse</td>
                </tr>
                <tr>
                  <td>Add catalyst</td>
                  <td>None</td>
                  <td>No shift</td>
                  <td>Lowers activation energy equally for both directions</td>
                </tr>
              </tbody>
            </table>
          </div>
        </>,

        <>
          <div className="ref-section">
            <h2>Temperature Dependence of K</h2>
            <div className="ref-formula">
              <span className="ref-formula-name">Integrated van 't Hoff equation</span>
              <div className="ref-formula-eq">{`$$\\ln\\frac{K_2}{K_1} = \\frac{\\Delta_r H^\\circ}{R}\\left(\\frac{1}{T_1} - \\frac{1}{T_2}\\right)$$`}</div>
              <div className="ref-formula-desc">
                <p>
                  Calculate K at a new temperature {`$T_2$`} given K at {`$T_1$`} and{' '}
                  {`$\\Delta_r H^\\circ$`}; assumes {`$\\Delta_r H^\\circ$`} and{' '}
                  {`$\\Delta_r S^\\circ$`} are independent of T.
                </p>
              </div>
            </div>
            <div className="ref-formula">
              <span className="ref-formula-name">Differential van 't Hoff equation</span>
              <div className="ref-formula-eq">{`$$\\frac{d\\ln K}{dT} = \\frac{\\Delta_r H^\\circ}{RT^2}$$`}</div>
              <div className="ref-formula-desc">
                <p>
                  When you need the instantaneous rate of change of K with temperature; integrate to
                  get the integrated form above.
                </p>
              </div>
            </div>
            <div className="ref-formula">
              <span className="ref-formula-name">van 't Hoff in slope form</span>
              <div className="ref-formula-eq">{`$$\\frac{d\\ln K}{d(1/T)} = -\\frac{\\Delta_r H^\\circ}{R}$$`}</div>
              <div className="ref-formula-desc">
                <p>
                  When plotting {`$\\ln K$`} vs {`$1/T$`}; the slope of the straight line equals{' '}
                  {`$-\\Delta_r H^\\circ/R$`}.
                </p>
              </div>
            </div>
            <h3>Thermodynamic Sign Conventions for Temperature Dependence</h3>
            <table>
              <thead>
                <tr>
                  <th>Reaction type</th>
                  <th>{`$\\Delta_r H^\\circ$`}</th>
                  <th>K vs T</th>
                  <th>{`$d\\ln K/dT$`}</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Exothermic</td>
                  <td>{`$< 0$`}</td>
                  <td>K decreases as T rises</td>
                  <td>{`$< 0$`}</td>
                </tr>
                <tr>
                  <td>Endothermic</td>
                  <td>{`$> 0$`}</td>
                  <td>K increases as T rises</td>
                  <td>{`$> 0$`}</td>
                </tr>
                <tr>
                  <td>Thermoneutral</td>
                  <td>{`$\\approx 0$`}</td>
                  <td>K nearly independent of T</td>
                  <td>{`$\\approx 0$`}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </>,

        <>
          <div className="ref-section">
            <h2>K Magnitude Quick Reference</h2>
            <table>
              <thead>
                <tr>
                  <th>K value</th>
                  <th>Classification</th>
                  <th>Practical meaning</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{`$K > 10^3$`}</td>
                  <td>Products strongly favored</td>
                  <td>Reaction almost complete at equilibrium</td>
                </tr>
                <tr>
                  <td>{`$10^0 < K < 10^3$`}</td>
                  <td>Products moderately favored</td>
                  <td>Significant amounts of both sides</td>
                </tr>
                <tr>
                  <td>{`$K = 1$`}</td>
                  <td>Neither favored</td>
                  <td>Equal activities of products and reactants</td>
                </tr>
                <tr>
                  <td>{`$10^{-3} < K < 1$`}</td>
                  <td>Reactants moderately favored</td>
                  <td>Mostly reactants, some products</td>
                </tr>
                <tr>
                  <td>{`$K < 10^{-3}$`}</td>
                  <td>Reactants strongly favored</td>
                  <td>Negligible product at equilibrium</td>
                </tr>
              </tbody>
            </table>
          </div>
        </>,

        <>
          <div className="ref-section">
            <h2>Selected K Values</h2>
            <table>
              <thead>
                <tr>
                  <th>Reaction</th>
                  <th>T / K</th>
                  <th>K</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{`$\\text{H}_2 + \\text{Cl}_2 \\rightleftharpoons 2\\,\\text{HCl}$`}</td>
                  <td>300</td>
                  <td>{`$4.0 \\times 10^{31}$`}</td>
                </tr>
                <tr>
                  <td>{`$\\text{H}_2 + \\text{Cl}_2 \\rightleftharpoons 2\\,\\text{HCl}$`}</td>
                  <td>500</td>
                  <td>{`$4.0 \\times 10^{18}$`}</td>
                </tr>
                <tr>
                  <td>{`$\\text{H}_2 + \\text{I}_2 \\rightleftharpoons 2\\,\\text{HI}$`}</td>
                  <td>298</td>
                  <td>794</td>
                </tr>
                <tr>
                  <td>{`$\\text{H}_2 + \\text{I}_2 \\rightleftharpoons 2\\,\\text{HI}$`}</td>
                  <td>700</td>
                  <td>54</td>
                </tr>
                <tr>
                  <td>{`$\\text{N}_2 + 3\\,\\text{H}_2 \\rightleftharpoons 2\\,\\text{NH}_3$`}</td>
                  <td>298</td>
                  <td>{`$5.8 \\times 10^5$`}</td>
                </tr>
                <tr>
                  <td>{`$\\text{N}_2 + 3\\,\\text{H}_2 \\rightleftharpoons 2\\,\\text{NH}_3$`}</td>
                  <td>400</td>
                  <td>44</td>
                </tr>
                <tr>
                  <td>{`$\\text{N}_2 + 3\\,\\text{H}_2 \\rightleftharpoons 2\\,\\text{NH}_3$`}</td>
                  <td>500</td>
                  <td>{`$0.17$`}</td>
                </tr>
                <tr>
                  <td>{`$2\\,\\text{SO}_2 + \\text{O}_2 \\rightleftharpoons 2\\,\\text{SO}_3$`}</td>
                  <td>298</td>
                  <td>{`$4.0 \\times 10^{24}$`}</td>
                </tr>
                <tr>
                  <td>{`$2\\,\\text{SO}_2 + \\text{O}_2 \\rightleftharpoons 2\\,\\text{SO}_3$`}</td>
                  <td>1000</td>
                  <td>0.0413</td>
                </tr>
                <tr>
                  <td>{`$\\text{N}_2\\text{O}_4 \\rightleftharpoons 2\\,\\text{NO}_2$`}</td>
                  <td>298</td>
                  <td>0.15</td>
                </tr>
                <tr>
                  <td>{`$\\text{N}_2\\text{O}_4 \\rightleftharpoons 2\\,\\text{NO}_2$`}</td>
                  <td>400</td>
                  <td>47.9</td>
                </tr>
                <tr>
                  <td>{`$2\\,\\text{N}_2 + \\text{O}_2 \\rightleftharpoons 2\\,\\text{N}_2\\text{O}$`}</td>
                  <td>800</td>
                  <td>{`$3.2 \\times 10^{-28}$`}</td>
                </tr>
                <tr>
                  <td>{`$\\text{PCl}_5 \\rightleftharpoons \\text{PCl}_3 + \\text{Cl}_2$`}</td>
                  <td>524</td>
                  <td>78.3</td>
                </tr>
              </tbody>
            </table>
          </div>
        </>,

        <>
          <div className="ref-section">
            <h2>Worked Results Summary</h2>
            <table>
              <thead>
                <tr>
                  <th>Example</th>
                  <th>Reaction / Given</th>
                  <th>Result</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>K from {`$\\Delta_r G^\\circ$`}</td>
                  <td>
                    {`$\\tfrac{1}{2}\\,\\text{H}_2 + \\tfrac{1}{2}\\,\\text{I}_2(s) \\to \\text{HI}$`}
                    ; {`$\\Delta_r G^\\circ = +1.70\\,\\text{kJ mol}^{-1}$`} at 298 K
                  </td>
                  <td>{`$K = 0.50$`}</td>
                </tr>
                <tr>
                  <td>NH3 K from {`$\\Delta_f G^\\circ$`}</td>
                  <td>
                    {`$\\text{N}_2 + 3\\,\\text{H}_2 \\rightleftharpoons 2\\,\\text{NH}_3$`};{' '}
                    {`$\\Delta_f G^\\circ(\\text{NH}_3) = -16.45\\,\\text{kJ mol}^{-1}$`}
                  </td>
                  <td>{`$K = 5.8 \\times 10^5$`}</td>
                </tr>
                <tr>
                  <td>{`$\\Delta_r G$`} from Q</td>
                  <td>
                    {`$2\\,\\text{SO}_2 + \\text{O}_2 \\to 2\\,\\text{SO}_3$`};{' '}
                    {`$\\Delta_r G^\\circ = -141.74\\,\\text{kJ mol}^{-1}$`}; all at 100 bar;{' '}
                    {`$Q = 0.0100$`}
                  </td>
                  <td>{`$\\Delta_r G = -153.16\\,\\text{kJ mol}^{-1}$`} (spontaneous)</td>
                </tr>
                <tr>
                  <td>K to Kc</td>
                  <td>
                    {`$2\\,\\text{SO}_2 + \\text{O}_2 \\rightleftharpoons 2\\,\\text{SO}_3$`};{' '}
                    {`$K = 3.1 \\times 10^4$`} at 673 K; {`$\\Delta n = -1$`}
                  </td>
                  <td>{`$K_c = 1.7 \\times 10^6$`}</td>
                </tr>
                <tr>
                  <td>Small-K ICE</td>
                  <td>
                    {`$2\\,\\text{N}_2 + \\text{O}_2 \\rightleftharpoons 2\\,\\text{N}_2\\text{O}$`}
                    ; {`$K = 3.2 \\times 10^{-28}$`} at 800 K;{' '}
                    {`$P_{\\text{N}_2} = 3.21\\,\\text{bar}$`},{' '}
                    {`$P_{\\text{O}_2} = 6.21\\,\\text{bar}$`}
                  </td>
                  <td>{`$P_{\\text{N}_2\\text{O}} = 1.4 \\times 10^{-13}\\,\\text{bar}$`}</td>
                </tr>
                <tr>
                  <td>Quadratic ICE</td>
                  <td>
                    {`$\\text{PCl}_5 \\rightleftharpoons \\text{PCl}_3 + \\text{Cl}_2$`};{' '}
                    {`$K = 78.3$`}; {`$P_0(\\text{PCl}_5) = 1.30\\,\\text{bar}$`}
                  </td>
                  <td>
                    {`$P_{\\text{PCl}_5} = 0.02$`},{' '}
                    {`$P_{\\text{PCl}_3} = P_{\\text{Cl}_2} = 1.28\\,\\text{bar}$`}
                  </td>
                </tr>
                <tr>
                  <td>van 't Hoff</td>
                  <td>
                    {`$\\text{N}_2 + 3\\,\\text{H}_2 \\rightleftharpoons 2\\,\\text{NH}_3$`};{' '}
                    {`$K_1 = 5.8 \\times 10^5$`} at 298 K;{' '}
                    {`$\\Delta H^\\circ = -92.22\\,\\text{kJ mol}^{-1}$`}
                  </td>
                  <td>{`$K_2 = 44$`} at 400 K</td>
                </tr>
                <tr>
                  <td>{`$\\Delta H^\\circ$`} from K vs T</td>
                  <td>
                    {`$\\text{Ag}_2\\text{CO}_3(s) \\rightleftharpoons \\text{Ag}_2\\text{O}(s) + \\text{CO}_2(g)$`}
                    ; K at 350-500 K; slope of {`$\\ln K$`} vs {`$1/T$`}
                  </td>
                  <td>{`$\\Delta_r H^\\circ = +80\\,\\text{kJ mol}^{-1}$`}</td>
                </tr>
                <tr>
                  <td>Degree of dissociation</td>
                  <td>
                    {`$\\text{H}_2\\text{O}(g) \\to \\text{H}_2 + \\tfrac{1}{2}\\,\\text{O}_2$`};{' '}
                    {`$\\Delta_r G^\\circ = +118.08\\,\\text{kJ mol}^{-1}$`} at 2300 K;{' '}
                    {`$p = 1.00\\,\\text{bar}$`}
                  </td>
                  <td>{`$\\alpha = 0.0205$`} (2% dissociated)</td>
                </tr>
                <tr>
                  <td>Cis/trans butene</td>
                  <td>
                    cis-2-butene {`$\\to$`} trans-2-butene;{' '}
                    {`$\\Delta_r G^\\circ = -2.89\\,\\text{kJ mol}^{-1}$`} at 298 K
                  </td>
                  <td>{`$K = 3.2$`}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </>
      ]
    }
  }

  return <LearningTemplate config={config} />
}
