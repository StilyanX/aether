import { LearningTemplate } from '../../../../../components/learning/learning-template'
import {
  IndicatorSelectionViz,
  CombustionAnalysisViz,
  H2SSpeciationViz,
  ComplexSolubilityViz
} from '../../../../../components/viz'

export default function QualitativeAndQuantitativeAnalysis() {
  const config = {
    cssPrefix: 'qqa',
    documentTitle: 'Qualitative and Quantitative Analysis - AETHER',
    customCss: null,
    learning: {
      groupTitle: 'Analytical Chemistry',
      category: 'Unit 9',
      title: 'Qualitative and Quantitative Analysis',
      subtitle:
        'Chemists ask two questions: what is in the sample, and how much? This topic covers volumetric analysis, redox titration, combustion analysis, indicator selection, and the qualitative cation separation scheme, building on the titration and solubility tools from Unit 6.',
      sections: [
        <>
          <div className="lrn-header">
            <h2>Two Questions Every Chemist Asks</h2>
          </div>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              You receive an unknown white powder. Before you can say anything useful about it,
              which question must you answer first, what compounds are in it, or how much of each
              is present? Can you answer the second question without answering the first?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                You must identify the compound first. You cannot measure "how much" of something
                until you know what that something is. Qualitative analysis always precedes
                quantitative analysis.
              </p>
            </details>
          </div>
          <p>
            Analytical chemistry divides into two branches. <strong>Qualitative analysis</strong>{' '}
            answers "what is present?", it identifies ions or compounds in a sample.{' '}
            <strong>Quantitative analysis</strong> answers "how much is present?", it measures the
            amount of each component, expressed as concentration, mass, or percentage.
          </p>
          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Qualitative Analysis</span>
              <p>
                Identifies which ions or compounds are present. Uses selective reactions, color
                changes, and precipitation tests. Example: the cation group separation scheme shows
                which cations are in solution by what precipitates form under different conditions.
              </p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Quantitative Analysis</span>
              <p>
                Measures how much of each component is present. Uses titration, gravimetric
                analysis, or combustion analysis. Example: titrating an unknown acid with a standard
                base gives the exact concentration of the acid.
              </p>
            </div>
          </div>
          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>
              Qualitative methods tell you which equilibria and reactions matter. Quantitative
              methods then use those reactions to measure amounts. Skip qualitative work and you may
              use the wrong stoichiometry, getting a precise answer to the wrong question.
            </p>
          </div>
        </>,

        <>
          <div className="lrn-header">
            <h2>Volumetric Analysis and Titration Stoichiometry</h2>
          </div>
          <p>
            Use this when you need to find the concentration or mass of an unknown substance by
            measuring the volume of a standard solution required to react with it completely.
          </p>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              You dissolve an unknown acid in water and titrate it with 0.100 M NaOH. You need 38.0
              mL of NaOH to reach the stoichiometric point. Before calculating, predict: if the acid
              donates two protons per molecule, how does that affect the moles of acid you calculate
              compared to a monoprotic acid?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                A diprotic acid reacts with two moles of NaOH per mole of acid. So the moles of acid
                equal half the moles of NaOH used, not the same amount. The mole ratio from the
                balanced equation is the key bridge.
              </p>
            </details>
          </div>
          <p>
            A <strong>titration</strong> is a procedure where you add a solution of known
            concentration (the <strong>titrant</strong>) from a buret to a measured volume of the
            unknown solution (the <strong>analyte</strong>). You stop at the{' '}
            <strong>stoichiometric point</strong>, where the moles of titrant exactly equal the
            moles of analyte required by the balanced equation. The stoichiometric point is also
            called the equivalence point.
          </p>
          <div className="lrn-definition">
            <span className="lrn-definition-term">Three-Step Titration Calculation</span>
            <div className="lrn-definition-desc">
              <p>
                {`Step 1. Find moles of titrant: $n_{\\text{titrant}} = c_{\\text{titrant}} \\times V_{\\text{titrant}}$.
                Step 2. Use the mole ratio from the balanced equation to find moles of analyte:
                $n_{\\text{analyte}} = n_{\\text{titrant}} \\times \\text{mole ratio}$.
                Step 3. Find the concentration of analyte:
                $c_{\\text{analyte}} = \\frac{n_{\\text{analyte}}}{V_{\\text{analyte}}}$.`}
              </p>
            </div>
          </div>
          <div className="lrn-eq lrn-eq-hero">
            <span>{`$$c_{\\text{analyte}} = \\frac{c_{\\text{titrant}} \\times V_{\\text{titrant}} \\times \\text{mole ratio}}{V_{\\text{analyte}}}$$`}</span>
          </div>
          <h3>Finding Concentration from a Titration</h3>
          <p>
            A 25.00 mL sample of oxalic acid ({`$\\text{H}_2\\text{C}_2\\text{O}_4$`}, diprotic) is
            titrated with 0.100 M NaOH. The stoichiometric point is reached at 38.0 mL of NaOH. Find
            the molarity of the oxalic acid.
          </p>
          <div className="lrn-steps">
            <div className="lrn-step">
              <span className="lrn-step-title">Step 1: moles of NaOH used</span>
              <p className="lrn-step-content">
                {`$n(\\text{NaOH}) = 0.100\\,\\frac{\\text{mol}}{\\text{L}} \\times 0.03800\\,\\text{L} = 3.80 \\times 10^{-3}\\,\\text{mol}$`}
              </p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">Step 2: moles of H₂C₂O₄ (mole ratio 1:2)</span>
              <p className="lrn-step-content">
                {`The balanced equation is $\\text{H}_2\\text{C}_2\\text{O}_4 + 2\\,\\text{NaOH} \\rightarrow \\text{Na}_2\\text{C}_2\\text{O}_4 + 2\\,\\text{H}_2\\text{O}$.
                One mole of acid reacts with two moles of base, so:
                $n(\\text{H}_2\\text{C}_2\\text{O}_4) = 3.80 \\times 10^{-3} \\times \\frac{1}{2} = 1.90 \\times 10^{-3}\\,\\text{mol}$`}
              </p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">Step 3: molarity of analyte</span>
              <p className="lrn-step-content">
                {`$c(\\text{H}_2\\text{C}_2\\text{O}_4) = \\frac{1.90 \\times 10^{-3}\\,\\text{mol}}{0.02500\\,\\text{L}} = 0.0760\\,\\frac{\\text{mol}}{\\text{L}}$`}
              </p>
            </div>
          </div>
          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>
              Why did we divide by 2 in Step 2, where does that 2 come from, and what would happen
              if we forgot it?
            </p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                The 2 comes from the balanced equation: one mole of diprotic oxalic acid donates two
                protons, so it reacts with two moles of NaOH. Forgetting the factor of 2 would
                double the calculated acid concentration, a 100% error. The mole ratio is the
                bridge between the titrant you measured and the analyte you want to find.
              </p>
            </details>
          </div>
          <h3>Purity Determination by Redox Titration</h3>
          <p>
            An iron ore sample of 0.202 g is dissolved and titrated with 0.0108 M KMnO₄. The
            stoichiometric point is reached after 16.7 mL. Find (a) the mass of iron and (b) the
            mass percent of iron. Mass percent is the mass of one component divided by the total
            sample mass, times 100. The balanced equation is:
          </p>
          <p className="lrn-eq">{`$$5\\,\\text{Fe}^{2+} + \\text{MnO}_4^- + 8\\,\\text{H}^+ \\longrightarrow 5\\,\\text{Fe}^{3+} + \\text{Mn}^{2+} + 4\\,\\text{H}_2\\text{O}$$`}</p>
          <div className="lrn-steps">
            <div className="lrn-step">
              <span className="lrn-step-title">Moles of KMnO₄</span>
              <p className="lrn-step-content">
                {`$n(\\text{MnO}_4^-) = 0.0108 \\times 0.01670 = 1.804 \\times 10^{-4}\\,\\text{mol}$`}
              </p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">Moles of Fe²⁺ (mole ratio 5:1)</span>
              <p className="lrn-step-content">
                {`$n(\\text{Fe}^{2+}) = 5 \\times 1.804 \\times 10^{-4} = 9.02 \\times 10^{-4}\\,\\text{mol}$`}
              </p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">(a) Mass of Fe</span>
              <p className="lrn-step-content">
                {`$m(\\text{Fe}) = 9.02 \\times 10^{-4}\\,\\text{mol} \\times 55.85\\,\\frac{\\text{g}}{\\text{mol}} = 0.0504\\,\\text{g}$`}
              </p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">(b) Mass percent Fe</span>
              <p className="lrn-step-content">
                {`$\\text{mass\\%} = \\frac{0.0504}{0.202} \\times 100 = 25.0\\%$`}
              </p>
            </div>
          </div>
          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>
              In the redox titration above, we used a 5:1 mole ratio (five Fe²⁺ per one MnO₄⁻). How
              do you know which species to assign to the numerator and which to the denominator when
              setting up the mole ratio?
            </p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                Read the balanced equation coefficients. MnO₄⁻ has a coefficient of 1; Fe²⁺ has a
                coefficient of 5. So one mole of MnO₄⁻ reacts with five moles of Fe²⁺. To convert
                from moles of MnO₄⁻ to moles of Fe²⁺, multiply by the ratio 5 to 1. The ratio always
                goes: coefficient of wanted species to coefficient of known species.
              </p>
            </details>
          </div>
        </>,

        <>
          <div className="lrn-header">
            <h2>Combustion Analysis: Empirical Formula from Burning</h2>
          </div>
          <p>
            Use this when you need to find the empirical formula of an unknown organic compound
            containing carbon, hydrogen, and possibly oxygen.
          </p>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              You burn a compound containing C, H, and O in excess oxygen. The combustion products
              are CO₂ and H₂O. Why is oxygen the one element you cannot measure directly from the
              combustion products?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                The oxygen in CO₂ and H₂O comes from both the sample and the excess O₂ gas used in
                the combustion. You cannot separate which oxygen atoms came from the sample and
                which came from the air supply. So you find the sample's oxygen by subtraction.
              </p>
            </details>
          </div>
          <p>
            In combustion analysis, a precisely weighed sample burns in excess oxygen. Separate
            traps collect the CO₂ and H₂O produced. The mass of each trap before and after burning
            gives the mass of CO₂ and H₂O from the sample. Two stoichiometric facts connect these
            masses to atoms in the original compound:
          </p>
          <ul className="lrn-list">
            <li>{`$1\\,\\text{mol C} \\approx 1\\,\\text{mol CO}_2$, so $n(\\text{C}) = \\frac{m(\\text{CO}_2)}{M(\\text{CO}_2)}$`}</li>
            <li>{`Each $\\text{H}_2\\text{O}$ molecule contains 2 H atoms, so $n(\\text{H}) = 2 \\times n(\\text{H}_2\\text{O}) = \\frac{2 \\times m(\\text{H}_2\\text{O})}{M(\\text{H}_2\\text{O})}$`}</li>
            <li>{`Oxygen by difference: $m(\\text{O}) = m_{\\text{sample}} - m(\\text{C}) - m(\\text{H})$, then $n(\\text{O}) = \\frac{m(\\text{O})}{16.00}$`}</li>
          </ul>
          <CombustionAnalysisViz />
          <h3>Empirical Formula by Combustion</h3>
          <p>
            A 1.621 g sample containing only C, H, and O produces 1.902 g H₂O and 3.095 g CO₂ on
            complete combustion. Find the empirical formula.
          </p>
          <div className="lrn-faded">
            <div className="lrn-faded-phase">
              <span className="lrn-faded-label">COMPLETE EXAMPLE</span>
              <p>
                <strong>Step 1, moles of C from CO₂.</strong>{' '}
                {`$n(\\text{C}) = \\frac{3.095\\,\\text{g}}{44.01\\,\\text{g/mol}} = 0.07032\\,\\text{mol}$`}
              </p>
              <p>
                <strong>Step 2, moles of H from H₂O.</strong>{' '}
                {`$n(\\text{H}) = \\frac{2 \\times 1.902\\,\\text{g}}{18.02\\,\\text{g/mol}} = 0.2111\\,\\text{mol}$`}
              </p>
              <p>
                <strong>Step 3, mass and moles of O by difference.</strong>{' '}
                {`$m(\\text{C}) = 0.07032 \\times 12.01 = 0.8445\\,\\text{g}$.
                $m(\\text{H}) = 0.2111 \\times 1.008 = 0.2128\\,\\text{g}$.
                $m(\\text{O}) = 1.621 - 0.8445 - 0.2128 = 0.5637\\,\\text{g}$.
                $n(\\text{O}) = \\frac{0.5637}{16.00} = 0.03523\\,\\text{mol}$`}
              </p>
              <p>
                <strong>Step 4, divide by the smallest mole value.</strong>{' '}
                {`Smallest is O: 0.03523 mol. Divide each:
                C: $\\frac{0.07032}{0.03523} = 2.00$;
                H: $\\frac{0.2111}{0.03523} = 5.99 \\approx 6.00$;
                O: $\\frac{0.03523}{0.03523} = 1.00$.`}
              </p>
              <p>
                <strong>Empirical formula: {`$\\text{C}_2\\text{H}_6\\text{O}$`}.</strong> This
                matches ethanol or dimethyl ether.
              </p>
            </div>
            <div className="lrn-faded-phase">
              <span className="lrn-faded-label">YOUR TURN, PARTIAL</span>
              <p>Combustion of 0.528 g of sucrose produces 0.519 g CO₂ and 0.0945 g H₂O.</p>
              <ol className="lrn-list">
                <li>{`Calculate $n(\\text{C})$ and $n(\\text{H})$ from the products.`}</li>
                <li>{`Find $m(\\text{O})$ by difference, then $n(\\text{O})$.`}</li>
                <li>{`Divide all moles by the smallest to get the integer ratio. (Expected: $\\text{C}_{12}\\text{H}_{22}\\text{O}_{11}$)`}</li>
              </ol>
            </div>
          </div>
          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>
              Why do we divide by the smallest mole value in Step 4, and what would go wrong if we
              divided by the largest instead?
            </p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                Dividing by the smallest mole value makes all ratios greater than or equal to 1. The
                goal is the simplest whole-number ratio of atoms. Starting from the smallest ensures
                you reach that simplest form. Dividing by the largest would give ratios less than 1,
                making it much harder to find the integer subscripts for the formula.
              </p>
            </details>
          </div>
          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>
              Combustion analysis assumes complete combustion in excess oxygen. Excess oxygen means
              all carbon becomes CO₂ and all hydrogen becomes H₂O, no partial products like CO or
              H₂ survive. This is why the lab uses pure oxygen and a catalyst (WO₃) to ensure
              completion. If combustion were incomplete, the masses of CO₂ and H₂O would undercount
              the actual C and H in the sample.
            </p>
          </div>
        </>,

        <>
          <div className="lrn-header">
            <h2>Titration Curves and pH Tracking</h2>
          </div>
          <p>
            Volumetric analysis only needs the volume at the stoichiometric point. But choosing the
            right indicator means knowing the pH all through the titration.
          </p>
          <div className="lrn-callout">
            <span className="lrn-callout-label">PREREQUISITE FROM UNIT 6</span>
            <p>
              The shape of the pH-vs-volume curve, the point-by-point pH math, the buffer region,
              Henderson–Hasselbalch, and the half-equivalence reading of {`$\\text{p}K_a$`} were all
              built in <strong>Buffer Solutions</strong> (Unit 6). This page builds on those
              results.
            </p>
          </div>
          <p>Three facts from that work decide indicator choice for an acid–base titration:</p>
          <ul className="lrn-list">
            <li>
              {`Strong acid–strong base: the stoichiometric point sits at pH 7. The salt is neutral
              and neither ion reacts with water.`}
            </li>
            <li>
              {`Weak acid–strong base: the stoichiometric point sits above pH 7. The conjugate base is
              itself a base.`}
            </li>
            <li>
              {`Weak base–strong acid: the stoichiometric point sits below pH 7. The conjugate acid is
              itself an acid.`}
            </li>
          </ul>
          <p>
            {`A polyprotic acid such as $\\text{H}_3\\text{PO}_4$ shows one stoichiometric point per
            ionizable proton, with a buffer region between each. At each half-equivalence point the
            pH equals that step's $\\text{p}K_a$. Unit 6 derives all of this.`}
          </p>
          <h3>Choosing an Indicator: the One Rule This Page Uses</h3>
          <p>
            An indicator is a weak acid whose acid and base forms have different colors. It changes
            color near its own {`$\\text{p}K_{\\text{In}}$`}. Pick the indicator whose color change
            falls inside the steep part of the curve:
          </p>
          <div className="lrn-eq lrn-eq-hero">
            <span>{`$$\\text{p}K_{\\text{In}} \\approx \\text{pH}_{\\text{stoichiometric point}} \\pm 1$$`}</span>
          </div>
          <IndicatorSelectionViz />
          <p>
            {`For a strong–strong titration the pH leaps from about 3 to about 11 near the
            stoichiometric point. Almost any indicator works. For a weak-acid titration the jump is
            smaller and sits above pH 7. There, only an indicator like phenolphthalein
            ($\\text{p}K_{\\text{In}} \\approx 9.4$) changes color at the right volume.`}
          </p>
          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>
              Why does a weak-acid titration force a careful indicator choice when a strong–strong
              titration tolerates almost any indicator?
            </p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                The strong–strong curve has a tall, steep jump spanning many pH units. Any indicator
                that changes color inside that span gives a tiny volume error. The weak-acid curve
                has a shorter jump centered above pH 7. An indicator that changes color too early
                signals the end point before the true stoichiometric point, so the measured volume
                is wrong.
              </p>
            </details>
          </div>
        </>,

        <>
          <div className="lrn-header">
            <h2>Solubility Equilibria for Analysis</h2>
          </div>
          <p>
            The qualitative scheme below decides which ions precipitate and which stay dissolved. It
            rests on solubility-equilibrium tools built in Unit 6.
          </p>
          <div className="lrn-callout">
            <span className="lrn-callout-label">PREREQUISITE FROM UNIT 6</span>
            <p>
              {`The solubility product $K_{sp}$, molar solubility, the common-ion effect, and the
              $Q_{sp}$-vs-$K_{sp}$ precipitation test were all built in Solubility Product and
              Common-Ion Effect (Unit 6). This page uses those results as tools.`}
            </p>
          </div>
          <p>Three results from that work drive the analysis here:</p>
          <ul className="lrn-list">
            <li>
              {`$K_{sp} = [\\text{M}^{b+}]^a[\\text{X}^{a-}]^b$ is fixed at a given temperature. A small
              $K_{sp}$ means the salt barely dissolves.`}
            </li>
            <li>
              {`Compare $Q_{sp}$ with $K_{sp}$. If $Q_{sp} > K_{sp}$, a precipitate forms. If
              $Q_{sp} < K_{sp}$, nothing precipitates.`}
            </li>
            <li>
              {`Adding a shared ion drops solubility (common-ion effect). It pushes the dissolving
              equilibrium back toward the solid.`}
            </li>
          </ul>
          <h3>Selective Precipitation: Separating Ions by Ksp</h3>
          <p>
            {`This is the analytical payoff. When two cations form precipitates with very different
            $K_{sp}$ values, you can drop one out while the other stays dissolved.`}
          </p>
          <p>
            The lowest concentration of precipitating ion that starts precipitation comes from
            setting {`$Q_{sp} = K_{sp}$`} at the onset:
          </p>
          <div className="lrn-eq">{`$$[\\text{precipitating ion}]_{\\text{onset}} = \\left(\\frac{K_{sp}}{[\\text{cation}]}\\right)^{1/n}$$`}</div>
          <h3>Worked Example: Separating Mg²⁺ from Ca²⁺ in Seawater</h3>
          <p>
            {`Seawater holds 0.050 M Mg²⁺ and 0.010 M Ca²⁺. You add NaOH slowly.
            $K_{sp}(\\text{Mg(OH)}_2) = 1.1 \\times 10^{-11}$ and $K_{sp}(\\text{Ca(OH)}_2) = 5.5 \\times 10^{-6}$.
            Find the $[\\text{OH}^-]$ that starts each precipitate, and the $[\\text{Mg}^{2+}]$ left when
            Ca(OH)₂ just begins.`}
          </p>
          <div className="lrn-steps">
            <div className="lrn-step">
              <span className="lrn-step-title">[OH⁻] to start Mg(OH)₂</span>
              <p className="lrn-step-content">
                {`$[\\text{OH}^-] = \\left(\\frac{1.1 \\times 10^{-11}}{0.050}\\right)^{1/2} = 1.5 \\times 10^{-5}\\,\\text{M}$`}
              </p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">[OH⁻] to start Ca(OH)₂</span>
              <p className="lrn-step-content">
                {`$[\\text{OH}^-] = \\left(\\frac{5.5 \\times 10^{-6}}{0.010}\\right)^{1/2} = 0.023\\,\\text{M}$.
                Mg(OH)₂ starts first, far below the level Ca(OH)₂ needs.`}
              </p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">[Mg²⁺] left when Ca(OH)₂ just starts</span>
              <p className="lrn-step-content">
                {`$[\\text{Mg}^{2+}] = \\frac{K_{sp}}{[\\text{OH}^-]^2} = \\frac{1.1 \\times 10^{-11}}{(0.023)^2} = 2.1 \\times 10^{-8}\\,\\text{M}$.
                Almost all Mg²⁺ is gone before any Ca²⁺ drops out.`}
              </p>
            </div>
          </div>
          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>
              {`Selective precipitation works when the two $K_{sp}$ values differ by orders of
              magnitude. A large gap lets you pick a precipitating-ion level above one salt's
              $K_{sp}$ but below the other's. When the values sit close together, both ions drop out
              at nearly the same point and the separation fails. This same logic powers the cation
              group scheme below.`}
            </p>
          </div>
        </>,

        <>
          <div className="lrn-header">
            <h2>Complex Ion Formation and Solubility</h2>
          </div>
          <p>
            Use this when a complexing ligand increases the solubility of a sparingly soluble salt a
            lot by removing the free metal ion from solution. This is the chemistry behind the Group
            I silver confirmation test below.
          </p>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              {`AgCl is nearly insoluble in water ($K_{sp} = 1.6 \\times 10^{-10}$). If you add ammonia to
              the suspension, the solid dissolves. What must the ammonia be doing to the $\\text{Ag}^+$ ions,
              and how does that drive more solid to dissolve?`}
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                {`Ammonia binds $\\text{Ag}^+$ to form the complex ion $\\text{Ag}(\\text{NH}_3)_2^+$. This removes free $\\text{Ag}^+$
                from solution, making $Q_{sp}$ drop below $K_{sp}$. More AgCl dissolves to replace the
                removed $\\text{Ag}^+$, and the process continues until a new equilibrium is reached.`}
              </p>
            </details>
          </div>
          <p>
            A <strong>complex ion</strong> forms when a metal cation (Lewis acid) bonds to one or
            more ligands (Lewis bases). For silver and ammonia:
          </p>
          <p className="lrn-eq">{`$$\\text{Ag}^+(\\text{aq}) + 2\\,\\text{NH}_3(\\text{aq}) \\rightleftharpoons \\text{Ag}(\\text{NH}_3)_2^+(\\text{aq})$$`}</p>
          <div className="lrn-eq">{`$$K_f = \\frac{[\\text{Ag}(\\text{NH}_3)_2^+]}{[\\text{Ag}^+][\\text{NH}_3]^2} = 1.6 \\times 10^7$$`}</div>
          <p>To find the solubility of AgCl in 0.10 M NH₃, combine the two equilibria:</p>
          <p className="lrn-eq">{`$$\\text{AgCl}(s) + 2\\,\\text{NH}_3(\\text{aq}) \\rightleftharpoons \\text{Ag}(\\text{NH}_3)_2^+(\\text{aq}) + \\text{Cl}^-(\\text{aq})$$`}</p>
          <div className="lrn-eq lrn-eq-hero">
            <span>{`$$K_{\\text{overall}} = K_{sp} \\times K_f$$`}</span>
          </div>
          <div className="lrn-steps">
            <div className="lrn-step">
              <span className="lrn-step-title">K_overall</span>
              <p className="lrn-step-content">
                {`$K_{\\text{overall}} = 1.6 \\times 10^{-10} \\times 1.6 \\times 10^7 = 2.6 \\times 10^{-3}$`}
              </p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">Solve for molar solubility (s)</span>
              <p className="lrn-step-content">
                {`At equilibrium: $[\\text{Ag}(\\text{NH}_3)_2^+] = [\\text{Cl}^-] = s$, and each dissolved unit uses two $\\text{NH}_3$, so $[\\text{NH}_3] = 0.10 - 2s$.
                $K_{\\text{overall}} = \\frac{s^2}{(0.10 - 2s)^2} = 2.6 \\times 10^{-3}$.
                Take the square root of both sides: $\\frac{s}{0.10 - 2s} = \\sqrt{2.6 \\times 10^{-3}} = 0.051$.
                Then $s = 0.051(0.10 - 2s)$, so $1.102\\,s = 5.1 \\times 10^{-3}$ and $s = 4.6 \\times 10^{-3}\\,\\text{mol·L}^{-1}$.
                That is about 350× the pure-water solubility of $1.3 \\times 10^{-5}$ M.`}
              </p>
            </div>
          </div>
          <ComplexSolubilityViz />
          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>
              {`Why is $K_{\\text{overall}}$ equal to $K_{sp} \\times K_f$? How does adding two chemical equations
              produce the overall equation, and how does that translate to multiplying constants?`}
            </p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                {`Adding two chemical equations means the equilibrium constant for the combined
                reaction equals the product of the individual constants. Here, $K_{sp}$ describes AgCl
                dissolving to give $\\text{Ag}^+$ and $\\text{Cl}^-$. $K_f$ describes $\\text{Ag}^+$ combining with $\\text{NH}_3$ to give
                $\\text{Ag}(\\text{NH}_3)_2^+$. When you add these equations, $\\text{Ag}^+$ cancels, it appears as a product
                in step 1 and a reactant in step 2. The overall equilibrium constant is $K_{sp} \\times K_f$,
                following Hess's law applied to equilibria.`}
              </p>
            </details>
          </div>
          <div className="lrn-definition">
            <span className="lrn-definition-term">
              Formation Constants of Selected Complexes (25°C)
            </span>
            <div className="lrn-definition-desc">
              <p>
                {`$\\text{Ag}(\\text{NH}_3)_2^+$: $K_f = 1.6 \\times 10^7$.
                $\\text{Ag}(\\text{CN})_2^-$: $K_f = 5.6 \\times 10^8$.
                $\\text{Cu}(\\text{NH}_3)_4^{2+}$: $K_f = 1.2 \\times 10^{13}$.
                $\\text{Fe}(\\text{CN})_6^{4-}$: $K_f = 7.7 \\times 10^{36}$.
                $\\text{Au}(\\text{CN})_2^-$: $K_f = 2.0 \\times 10^{38}$.
                Larger $K_f$ means the complex is more stable and the metal is more effectively removed from solution.`}
              </p>
            </div>
          </div>
        </>,

        <>
          <div className="lrn-header">
            <h2>Qualitative Analysis: Cation Group Separation</h2>
          </div>
          <p>
            Use this when you need to identify unknown cations in solution. You precipitate them in
            groups step by step, then confirm each ion with specific tests.
          </p>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              A solution contains Ag⁺, Pb²⁺, Hg₂²⁺, Cu²⁺, and Zn²⁺. You add HCl. Predict which ions
              precipitate and which stay in solution. What property determines the answer?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                {`Ag⁺, Pb²⁺, and Hg₂²⁺ precipitate as their chlorides (AgCl, PbCl₂, Hg₂Cl₂)
                because these salts have very small $K_{sp}$ values. Cu²⁺ and Zn²⁺ do not precipitate
                because CuCl₂ and ZnCl₂ are soluble. The $K_{sp}$ of the chloride salt determines
                whether it precipitates under these conditions.`}
              </p>
            </details>
          </div>
          <p>
            Qualitative analysis uses a fixed sequence of selective precipitation steps. Each step
            separates cations into a group. Every group shares a common reagent that precipitates
            all ions in that group but not those in later groups.
          </p>
          <p>
            The whole scheme rests on knowing which salts dissolve and which do not. Here are the
            rules it leans on:
          </p>
          <div className="lrn-definition">
            <span className="lrn-definition-term">Solubility Rules You Need Here</span>
            <div className="lrn-definition-desc">
              <ul className="lrn-list">
                <li>All nitrates are soluble. So are all salts of Na⁺, K⁺, and NH₄⁺.</li>
                <li>Most chlorides are soluble. The exceptions are AgCl, PbCl₂, and Hg₂Cl₂.</li>
                <li>
                  Most sulfides are insoluble. The exceptions are those of Na⁺, K⁺, NH₄⁺, and the
                  group-2 metals.
                </li>
                <li>
                  Most hydroxides and carbonates are insoluble. The exceptions are those of Na⁺, K⁺,
                  and NH₄⁺.
                </li>
              </ul>
            </div>
          </div>
          <div className="lrn-definition">
            <span className="lrn-definition-term">Three-Group Separation Scheme</span>
            <div className="lrn-definition-desc">
              <p>
                <strong>Group I, HCl addition:</strong> AgCl, Hg₂Cl₂, and PbCl₂ precipitate. All
                other cations remain in solution.
              </p>
              <p>
                <strong>Group II, H₂S at low pH:</strong> CuS, HgS, CdS, Sb₂S₃, and Bi₂S₃
                precipitate. Low pH keeps [S²⁻] low enough that only the most insoluble sulfides
                (smallest Ksp) precipitate.
              </p>
              <p>
                <strong>Group III, H₂S at high pH (NH₃):</strong> ZnS, NiS, MnS, and FeS
                precipitate. High pH raises [S²⁻] so that less-insoluble sulfides can also
                precipitate.
              </p>
            </div>
          </div>
          <p>
            Within Group I, you can confirm Ag⁺ vs. Hg₂²⁺ using ammonia. When NH₃ is added to the
            Group I precipitate:
          </p>
          <ul className="lrn-list">
            <li>
              {`AgCl dissolves: $\\text{AgCl}(s) + 2\\,\\text{NH}_3(\\text{aq}) \\rightarrow \\text{Ag}(\\text{NH}_3)_2^+(\\text{aq}) + \\text{Cl}^-(\\text{aq})$.
              The complex ion pulls $\\text{Ag}^+$ away from the solid. Re-acidify the clear solution to
              reprecipitate white AgCl and confirm $\\text{Ag}^+$.`}
            </li>
            <li>
              {`Hg₂Cl₂ does not dissolve cleanly. Instead it disproportionates, one element both gains and loses electrons, splitting into a more-oxidized and a more-reduced product:
              $\\text{Hg}_2\\text{Cl}_2(s) + 2\\,\\text{NH}_3(\\text{aq}) \\rightarrow \\text{HgNH}_2\\text{Cl}(s) + \\text{Hg}(s) + \\text{NH}_4^+(\\text{aq}) + \\text{Cl}^-(\\text{aq})$.
              Here $\\text{Hg}_2^{2+}$ splits into mercury metal ($\\text{Hg}^0$) and $\\text{Hg}^{2+}$. The dark metallic mercury confirms $\\text{Hg}_2^{2+}$.`}
            </li>
          </ul>
          <p>
            {`Hydrogen sulfide is a weak diprotic acid. Its ionization couples $[\\text{S}^{2-}]$ directly to pH:`}
          </p>
          <p className="lrn-eq">{`$$\\text{H}_2\\text{S}(\\text{aq}) \\rightleftharpoons 2\\,\\text{H}^+(\\text{aq}) + \\text{S}^{2-}(\\text{aq})$$`}</p>
          <p>
            {`Add acid and the extra $\\text{H}^+$ pushes this equilibrium left. That holds $[\\text{S}^{2-}]$ low.
            Add base (NH₃) and $\\text{H}^+$ is removed, pulling the equilibrium right and raising $[\\text{S}^{2-}]$.`}
          </p>
          <H2SSpeciationViz />
          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>
              {`Each separation step uses $K_{sp}$ differences. At low pH, $[\\text{S}^{2-}]$ is low.
              Only sulfides with very small $K_{sp}$ (Group II) can precipitate. Adding NH₃ raises the pH
              and raises $[\\text{S}^{2-}]$ through the H₂S equilibrium above. Now sulfides with slightly
              larger $K_{sp}$ (Group III) can precipitate too. pH control is the key lever that tunes
              $[\\text{S}^{2-}]$ and picks which sulfides drop out at each step.`}
            </p>
            <p>
              {`Complex ion formation gives a second tool. AgCl has a small enough $K_{sp}$ that the
              complex $\\text{Ag}(\\text{NH}_3)_2^+$ (large $K_f$) drives it into solution. Hg₂Cl₂ behaves differently
              because $\\text{Hg}_2^{2+}$ is unstable in NH₃ and disproportionates instead. These differences
              in chemical behavior allow identification even within the same group precipitate.`}
            </p>
          </div>
          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>
              Why does the qualitative analysis scheme use selective precipitation in stages rather
              than trying to identify all cations at once? What would go wrong if you added all the
              reagents simultaneously?
            </p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                If you added HCl, H₂S, and NH₃ all at once, the pH and ion concentrations would
                interact unpredictably, and many salts would co-precipitate together. You could not
                tell which precipitate contained which ion. The staged approach uses controlled
                conditions at each step, specific pH, specific reagent, so that only one group
                precipitates at a time. Each separated fraction is then tested with a confirmatory
                reagent that gives a unique result for a specific ion. Order and control are
                essential.
              </p>
            </details>
          </div>
        </>
      ]
    },

    practice: [
      {
        q: 'A 25.00 mL sample of oxalic acid (H₂C₂O₄, diprotic) is titrated with 0.100 M NaOH. The stoichiometric point is reached at 38.0 mL. What is the molarity of the oxalic acid?',
        a: 'The molarity is 0.0760 M. Moles of NaOH = 0.100 × 0.03800 = 3.80 × 10⁻³ mol. The mole ratio is 1 mol acid per 2 mol NaOH (diprotic acid), so moles of H₂C₂O₄ = $\\frac{3.80 \\times 10^{-3}}{2}$ = 1.90 × 10⁻³ mol. Dividing the moles of acid by 0.02500 L gives 0.0760 M. The factor of 2 comes from the diprotic nature of oxalic acid, each molecule donates two protons and reacts with two NaOH.'
      },
      {
        q: 'Why does the stoichiometric point occur at pH = 7 for a strong acid–strong base titration but not for a weak acid–strong base titration?',
        a: 'For a strong acid + strong base, the only product is a spectator salt and water. Neither ion reacts with water, so the solution is neutral at pH 7. For a weak acid + strong base, the product is the conjugate base of the weak acid. That conjugate base is itself a base, it accepts protons from water, producing OH⁻ and raising the pH above 7. The identity of the salt formed determines whether the stoichiometric point is at, above, or below pH 7.'
      },
      {
        q: 'Combustion of 1.621 g of an unknown compound (containing C, H, and O) produces 3.095 g CO₂ and 1.902 g H₂O. Find the empirical formula.',
        a: 'The empirical formula is C₂H₆O. n(C) = $\\frac{3.095}{44.01}$ = 0.07032 mol. n(H) = $\\frac{2 \\times 1.902}{18.02}$ = 0.2111 mol. m(C) = 0.8445 g, m(H) = 0.2128 g, so m(O) = 1.621 − 0.8445 − 0.2128 = 0.5637 g, n(O) = $\\frac{0.5637}{16.00}$ = 0.03523 mol. Dividing each mole value by the smallest (0.03523): C:H:O = 2.00:6.00:1.00, giving C₂H₆O.'
      },
      {
        q: 'Find the pH at the stoichiometric point of the titration of 25.00 mL of 0.100 M HCOOH with 0.150 M NaOH. Ka(HCOOH) = 1.8 × 10⁻⁴.',
        a: 'pH = 8.26. At the stoichiometric point, all formic acid is converted to formate (HCO₂⁻) at a concentration of 0.0600 M. Formate acts as a weak base: Kb = $\\frac{K_w}{K_a}$ = 5.6 × 10⁻¹¹. Solving [OH⁻] = √(5.6 × 10⁻¹¹ × 0.0600) = 1.8 × 10⁻⁶ M. pOH = 5.74, so pH = 14.00 − 5.74 = 8.26. The pH is above 7 because the conjugate base of a weak acid is itself basic.'
      },
      {
        q: 'Using the titration of 25.00 mL of 0.100 M HCOOH with 0.150 M NaOH (Ka = 1.8 × 10⁻⁴), find the pH after adding 5.00 mL of NaOH.',
        a: 'pH = 3.38. n(HCOOH) initially = 2.50 mmol; OH⁻ added = 0.750 mmol. Remaining HCOOH = 1.75 mmol; new HCO₂⁻ = 0.750 mmol in 30.00 mL total. [HCOOH] = 0.0583 M; [HCO₂⁻] = 0.0250 M. Henderson–Hasselbalch: pH = 3.75 + $\\log\\frac{0.0250}{0.0583}$ = 3.75 − 0.37 = 3.38. Both conjugate forms are present, this is the buffer region of the titration.'
      },
      {
        q: 'An iron ore sample of 0.202 g is dissolved and titrated with 0.0108 M KMnO₄; stoichiometric point at 16.7 mL. The reaction is 5 Fe²⁺ + MnO₄⁻ + 8 H⁺ → products. Find (a) mass of Fe and (b) mass percent of Fe.',
        a: '(a) 0.0504 g Fe; (b) 25.0%. n(MnO₄⁻) = 0.0108 × 0.0167 = 1.804 × 10⁻⁴ mol. n(Fe²⁺) = 5 × 1.804 × 10⁻⁴ = 9.02 × 10⁻⁴ mol (mole ratio 5:1 from the balanced equation). m(Fe) = 9.02 × 10⁻⁴ × 55.85 = 0.0504 g. Mass% = $\\frac{0.0504}{0.202}$ × 100 = 25.0%.'
      },
      {
        q: 'Phenolphthalein has pKIn = 9.4. Methyl orange has pKIn = 3.4. A weak base is titrated with HCl; the stoichiometric point is at pH = 5. Which indicator is the better choice?',
        a: 'Methyl orange (pKIn = 3.4) is the better choice, though neither is ideal. The selection rule requires pKIn ≈ pH at stoichiometric point ± 1, so pKIn should be near 5. Methyl orange at 3.4 is within 1.6 units, imperfect but closer. Phenolphthalein (pKIn = 9.4) is 4.4 units away, it changes color in the buffer region, far before the stoichiometric point, giving a large volume error.'
      },
      {
        q: 'At the halfway point of the titration of a weak acid with a strong base, the measured pH is 4.20. What is Ka of the weak acid?',
        a: 'Ka = 6.3 × 10⁻⁵. At the halfway point, exactly half the weak acid is converted to conjugate base, so [HA] = [A⁻]. Henderson–Hasselbalch gives pH = pKa + log(1) = pKa. Therefore pKa = 4.20 and Ka = 10⁻⁴·²⁰ = 6.3 × 10⁻⁵. This is a direct experimental method for measuring Ka, run a titration and read the pH at half the stoichiometric volume.'
      },
      {
        q: 'In qualitative analysis of Group I cations, AgCl dissolves in ammonia but Hg₂Cl₂ does not dissolve clearly. Explain the chemistry that distinguishes them.',
        a: 'AgCl dissolves because Ag⁺ forms the stable complex Ag(NH₃)₂⁺ (Kf = 1.6 × 10⁷). This removes Ag⁺ from equilibrium, driving K_overall = Ksp × Kf = 2.6 × 10⁻³, large enough to dissolve the precipitate. Hg₂²⁺ instead disproportionates in ammonia: Hg₂Cl₂ + 2 NH₃ → HgNH₂Cl (white) + Hg (gray metal) + NH₄⁺ + Cl⁻. To confirm Ag⁺, acidify the clear filtrate, white AgCl reprecipitates.'
      },
      {
        q: 'H₃PO₄ has pKa1 = 2.12, pKa2 = 7.21, pKa3 = 12.68. How many stoichiometric points appear in the titration with NaOH, and what is the pH at the halfway point between the first and second stoichiometric points?',
        a: 'Three stoichiometric points appear, one for each ionizable proton. Between SP1 and SP2, H₂PO₄⁻ is being converted to HPO₄²⁻. At the halfway point between SP1 and SP2, [H₂PO₄⁻] = [HPO₄²⁻], so Henderson–Hasselbalch gives pH = pKa2 = 7.21. The same half-equivalence rule applies as for monoprotic acids: equal concentrations of conjugate acid and base make the log term zero.'
      },
      {
        q: 'Calculate K_overall for the dissolution of AgCl in ammonia and use it to explain why AgCl is much more soluble in 0.10 M NH₃ than in pure water.',
        a: 'K_overall = Ksp × Kf = 1.6 × 10⁻¹⁰ × 1.6 × 10⁷ = 2.6 × 10⁻³. In pure water, solubility is governed only by Ksp = 1.6 × 10⁻¹⁰, giving s = 1.3 × 10⁻⁵ M. In NH₃, the combined equilibrium (AgCl + 2 NH₃ → Ag(NH₃)₂⁺ + Cl⁻) has K = 2.6 × 10⁻³, about 10⁷ times larger than Ksp alone. This large K drives dissolution far further, giving s ≈ 4.6 × 10⁻³ M, more than 350 times the pure-water value.'
      },
      {
        q: 'What determines whether the stoichiometric point of a weak base–strong acid titration is acidic, neutral, or basic?',
        a: 'The stoichiometric point is acidic (pH < 7) for all weak base–strong acid titrations. At the stoichiometric point, all the weak base has been converted to its conjugate acid. The conjugate acid of a weak base donates protons to water, producing H₃O⁺ and lowering the pH below 7. The weaker the original base (larger Ka of the conjugate acid), the more acidic the stoichiometric point will be.'
      },
      {
        q: 'Transfer: A student uses phenolphthalein (pKIn = 9.4) to titrate acetic acid (pKa = 4.75) with NaOH. The stoichiometric point is near pH 8.9. Will the end point be accurate?',
        a: 'Phenolphthalein is a reasonable choice here. The stoichiometric point is near pH 8.9, and pKIn = 9.4 is within 0.5 pH units, well inside the ±1 rule. The steep pH rise near the stoichiometric point spans roughly pH 7–11, so phenolphthalein changes color inside that steep region and the volume error is small. Methyl orange (pKIn = 3.4) would be wrong, it changes color in the buffer region, far before the stoichiometric point.'
      },
      {
        q: 'Transfer: You need to dissolve a silver halide precipitate to recover Ag⁺. Which dissolves more readily in ammonia, AgCl or AgBr? Ksp(AgCl) = 1.6 × 10⁻¹⁰; Ksp(AgBr) = 5.4 × 10⁻¹³; Kf(Ag(NH₃)₂⁺) = 1.6 × 10⁷.',
        a: 'AgCl dissolves more readily. K_overall(AgCl) = 1.6 × 10⁻¹⁰ × 1.6 × 10⁷ = 2.6 × 10⁻³. K_overall(AgBr) = 5.4 × 10⁻¹³ × 1.6 × 10⁷ = 8.6 × 10⁻⁶. AgCl has a K_overall about 300 times larger than AgBr, so it dissolves to a much greater extent in dilute ammonia. AgBr requires much higher NH₃ concentration or a stronger complexing agent. This explains why AgBr does not dissolve readily in dilute NH₃ in the qualitative analysis scheme.'
      },
      {
        q: 'Elaborate: Why does adding excess oxygen matter in combustion analysis? What would happen if the oxygen ran out before combustion was complete?',
        a: 'Excess oxygen ensures every carbon becomes CO₂ and every hydrogen becomes H₂O. If oxygen runs out early, incomplete combustion produces CO (from carbon) and possibly other partial products. The CO₂ trap collects less than the true amount, making n(C) appear smaller than it really is. The calculated empirical formula would be wrong. Excess oxygen is not just good practice, it is the chemical condition that makes the stoichiometric relationships (1 mol CO₂ per mol C; each H₂O carries 2 H atoms, so moles of H = 2 × moles of H₂O) correct.'
      },
      {
        q: 'Predict: A solution contains Ag⁺, Cu²⁺, and Zn²⁺. You add HCl first, then H₂S at low pH to the filtrate. What precipitates at each step?',
        a: 'Step 1 (HCl): White AgCl precipitates, Ksp(AgCl) is very small. Cu²⁺ and Zn²⁺ stay in solution because CuCl₂ and ZnCl₂ are soluble. Step 2 (H₂S, low pH): Black CuS precipitates, it has an extremely small Ksp (≈ 6 × 10⁻³⁶) so it precipitates even at low [S²⁻]. ZnS has a larger Ksp (≈ 1.6 × 10⁻²⁴) and needs higher [S²⁻], so it does not precipitate until the pH is raised with NH₃ under Group III conditions.'
      },
      {
        q: 'Self-explain: Combustion analysis gives the empirical formula C₂H₆O. The molar mass is 46 g·mol⁻¹. Why is combustion analysis alone not enough to give the molecular formula?',
        a: 'Combustion analysis gives only the simplest whole-number ratio of atoms, the empirical formula. To get the molecular formula, you also need the molar mass from a separate experiment (freezing-point depression, mass spectrometry, etc.). If the molar mass were 92 g·mol⁻¹ instead of 46 g·mol⁻¹, the molecular formula would be C₄H₁₂O₂ (double the empirical formula). Only by combining both the empirical formula and the molar mass can you find the full molecular formula.'
      },
      {
        q: 'A student titrates HCl with NaOH and uses litmus indicator (pKIn = 6.5, changes color near pH 5–8). The stoichiometric point is pH 7. Is this a good indicator choice?',
        a: 'Litmus is acceptable. The pH range of its color change (5–8) includes pH 7, and the steep pH jump for a strong acid–strong base titration spans approximately pH 3–11 near the stoichiometric point. Litmus changes color inside that steep region, so the volume error is small. A more precise choice would be phenol red (pKIn = 7.4, color change 6.6–8.0), centered almost exactly at pH 7 and giving a sharper end point. Both work for this titration type.'
      }
    ],

    reference: {
      category: 'Quick Reference',
      title: 'Qualitative and Quantitative Analysis',
      sections: [
        <>
          <h2>Core Equations</h2>

          <h3>Titration (Volumetric Analysis)</h3>
          <div className="lrn-eq lrn-eq-hero">
            <span>{`$$c_{\\text{analyte}} = \\frac{c_{\\text{titrant}} \\times V_{\\text{titrant}} \\times \\text{mole ratio}}{V_{\\text{analyte}}}$$`}</span>
          </div>
          <p>
            <strong>When to use:</strong> Any titration where you know the molarity and volume of
            the titrant and need the concentration of the analyte.
          </p>

          <h3>Combustion Analysis</h3>
          <p className="lrn-eq">{`$$n(\\text{C}) = \\frac{m(\\text{CO}_2)}{M(\\text{CO}_2)} \\qquad n(\\text{H}) = \\frac{2 \\times m(\\text{H}_2\\text{O})}{M(\\text{H}_2\\text{O})}$$`}</p>
          <p className="lrn-eq">{`$$m(\\text{O}) = m_{\\text{sample}} - m(\\text{C}) - m(\\text{H}) \\qquad n(\\text{O}) = \\frac{m(\\text{O})}{16.00}$$`}</p>
          <p>
            <strong>When to use:</strong> Finding empirical formulas of organic compounds from
            combustion data.
          </p>

          <h3>Henderson–Hasselbalch</h3>
          <div className="lrn-eq lrn-eq-hero">
            <span>{`$$\\text{pH} = \\text{p}K_a + \\log\\frac{[\\text{A}^-]}{[\\text{HA}]}$$`}</span>
          </div>
          <p>
            <strong>When to use:</strong> In the buffer region of a weak acid titration (before the
            stoichiometric point), or for any buffer calculation.
          </p>

          <h3>pKa from Titration Curve</h3>
          <p className="lrn-eq">{`$$\\text{At } V_{\\text{titrant}} = \\tfrac{1}{2}V_{\\text{stoichiometric}}: \\quad \\text{pH} = \\text{p}K_a$$`}</p>
          <p>
            <strong>When to use:</strong> Reading pKa directly from a measured titration curve.
          </p>

          <h3>Indicator Selection Rule</h3>
          <div className="lrn-eq lrn-eq-hero">
            <span>{`$$\\text{p}K_{\\text{In}} \\approx \\text{pH}_{\\text{stoichiometric point}} \\pm 1$$`}</span>
          </div>
          <p>
            <strong>When to use:</strong> Choosing a visual indicator for any acid–base titration.
          </p>

          <h3>Solubility Product</h3>
          <div className="lrn-eq lrn-eq-hero">
            <span>{`$$K_{sp} = [\\text{M}^{b+}]^a[\\text{X}^{a-}]^b$$`}</span>
          </div>
          <p>
            <strong>When to use:</strong> Any calculation involving dissolution of a sparingly
            soluble salt.
          </p>

          <h3>Precipitation Criterion</h3>
          <div className="lrn-eq lrn-eq-hero">
            <span>{`$$Q_{sp} > K_{sp} \\Rightarrow \\text{precipitate forms} \\qquad Q_{sp} < K_{sp} \\Rightarrow \\text{no precipitate}$$`}</span>
          </div>
          <p>
            <strong>When to use:</strong> Predicting whether mixing two solutions produces a
            precipitate.
          </p>

          <h3>Onset of Selective Precipitation</h3>
          <p className="lrn-eq">{`$$[\\text{precipitating ion}]_{\\text{onset}} = \\left(\\frac{K_{sp}}{[\\text{cation}]}\\right)^{1/n}$$`}</p>
          <p>
            <strong>When to use:</strong> Finding which cation precipitates first and the minimum
            ion concentration needed to start precipitation.
          </p>

          <h3>Combined Equilibrium for Solubility in Complexing Agent</h3>
          <div className="lrn-eq lrn-eq-hero">
            <span>{`$$K_{\\text{overall}} = K_{sp} \\times K_f$$`}</span>
          </div>
          <p>
            <strong>When to use:</strong> Calculating the solubility of a sparingly soluble salt in
            a solution containing a complexing ligand.
          </p>
        </>,

        <>
          <h2>Titration Curve Summary</h2>
          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Strong Acid + Strong Base</span>
              <p>{`Stoichiometric point: pH = 7. Salt is neutral, neither ion reacts with water. Wide indicator choice ($\\text{p}K_{\\text{In}}$ 4–10 all work).`}</p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Weak Acid + Strong Base</span>
              <p>{`Stoichiometric point: pH $> 7$. Conjugate base is itself basic. Buffer region below stoichiometric point. pH = p$K_a$ at half-equivalence. Use phenolphthalein.`}</p>
            </div>
          </div>
          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Weak Base + Strong Acid</span>
              <p>{`Stoichiometric point: pH $< 7$. Conjugate acid is itself acidic. Buffer region above stoichiometric point. Use methyl orange or methyl red.`}</p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Polyprotic Acid + Strong Base</span>
              <p>{`One stoichiometric point per ionizable proton. pH = p$K_{an}$ at each half-equivalence point. Buffer regions between stoichiometric points.`}</p>
            </div>
          </div>

          <h2>Indicator Table (Selected)</h2>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.875rem' }}>
            <thead>
              <tr>
                <th
                  style={{
                    textAlign: 'left',
                    padding: '6px 8px',
                    borderBottom: '1px solid var(--ink-hairline)'
                  }}
                >
                  Indicator
                </th>
                <th
                  style={{
                    textAlign: 'left',
                    padding: '6px 8px',
                    borderBottom: '1px solid var(--ink-hairline)'
                  }}
                >
                  pKIn
                </th>
                <th
                  style={{
                    textAlign: 'left',
                    padding: '6px 8px',
                    borderBottom: '1px solid var(--ink-hairline)'
                  }}
                >
                  pH Range
                </th>
                <th
                  style={{
                    textAlign: 'left',
                    padding: '6px 8px',
                    borderBottom: '1px solid var(--ink-hairline)'
                  }}
                >
                  Color Change
                </th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Thymol blue', '2.0', '1.2–2.8', 'red → yellow'],
                ['Methyl orange', '3.4', '3.2–4.4', 'red → orange'],
                ['Methyl red', '5.0', '4.8–6.0', 'red → yellow'],
                ['Litmus', '6.5', '5.0–8.0', 'red → blue'],
                ['Phenol red', '7.4', '6.6–8.0', 'yellow → red'],
                ['Phenolphthalein', '9.4', '8.2–10.0', 'colorless → pink'],
                ['Alizarin yellow R', '11.0', '10.1–12.4', 'yellow → red']
              ].map(([name, pkin, range, color]) => (
                <tr key={name}>
                  <td
                    style={{ padding: '5px 8px', borderBottom: '1px solid var(--ink-hairline)' }}
                  >
                    {name}
                  </td>
                  <td
                    style={{ padding: '5px 8px', borderBottom: '1px solid var(--ink-hairline)' }}
                  >
                    {pkin}
                  </td>
                  <td
                    style={{ padding: '5px 8px', borderBottom: '1px solid var(--ink-hairline)' }}
                  >
                    {range}
                  </td>
                  <td
                    style={{ padding: '5px 8px', borderBottom: '1px solid var(--ink-hairline)' }}
                  >
                    {color}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <h2>Solubility Product Reference</h2>
          <p>
            {`Ksp expressions for common salts, raise each ion concentration to the power of its stoichiometric coefficient:`}
          </p>
          <ul className="lrn-list">
            <li>{`$\\text{AgCl}: K_{sp} = [\\text{Ag}^+][\\text{Cl}^-] = s^2$ in pure water`}</li>
            <li>{`$\\text{Ag}_2\\text{CrO}_4: K_{sp} = [\\text{Ag}^+]^2[\\text{CrO}_4^{2-}] = 4s^3$`}</li>
            <li>{`$\\text{Cr}(\\text{IO}_3)_3: K_{sp} = [\\text{Cr}^{3+}][\\text{IO}_3^-]^3 = 27s^4$`}</li>
            <li>{`$\\text{Bi}_2\\text{S}_3: K_{sp} = [\\text{Bi}^{3+}]^2[\\text{S}^{2-}]^3 = 108s^5$`}</li>
          </ul>

          <h2>Qualitative Analysis Group Scheme</h2>
          <ul className="lrn-list">
            <li>
              <strong>Group I (HCl):</strong> AgCl, Hg₂Cl₂, PbCl₂ precipitate. Ag⁺ confirmed by
              dissolving in NH₃, then acidifying to reprecipitate white AgCl. Hg₂²⁺ confirmed by
              gray Hg metal when treated with NH₃.
            </li>
            <li>
              <strong>Group II (H₂S, low pH):</strong> CuS, HgS, CdS, Sb₂S₃, Bi₂S₃ precipitate. Very
              small Ksp sulfides only; low pH keeps [S²⁻] low.
            </li>
            <li>
              <strong>Group III (H₂S, high pH via NH₃):</strong> ZnS, NiS, MnS, FeS precipitate.
              Higher [S²⁻] (raised by NH₃) allows these larger-Ksp sulfides to precipitate.
            </li>
          </ul>

          <h2>Formation Constants (Selected, 25°C)</h2>
          <ul className="lrn-list">
            <li>{`$\\text{Ag}(\\text{NH}_3)_2^+$: $K_f = 1.6 \\times 10^7$`}</li>
            <li>{`$\\text{Ag}(\\text{CN})_2^-$: $K_f = 5.6 \\times 10^8$`}</li>
            <li>{`$\\text{Cu}(\\text{NH}_3)_4^{2+}$: $K_f = 1.2 \\times 10^{13}$`}</li>
            <li>{`$\\text{HgCl}_4^{2-}$: $K_f = 1.2 \\times 10^{15}$`}</li>
            <li>{`$\\text{Fe}(\\text{CN})_6^{4-}$: $K_f = 7.7 \\times 10^{36}$`}</li>
            <li>{`$\\text{Au}(\\text{CN})_2^-$: $K_f = 2.0 \\times 10^{38}$`}</li>
          </ul>
        </>
      ]
    }
  }

  return <LearningTemplate config={config} />
}
