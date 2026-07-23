import { LearningTemplate } from '../../../../../components/learning/learning-template'
import {
  HendersonHasselbalchViz,
  StrongWeakTitrationViz,
  PolyproticTitrationViz,
  BufferCapacityViz
} from '../../../../../components/viz'

export default function BufferSolutions() {
  const config = {
    cssPrefix: 'chem-buffers',
    documentTitle: 'Buffer Solutions - AETHER',
    customCss: null,
    learning: {
      category: 'Unit 6',
      groupTitle: 'Acid-Base and Aqueous Equilibria',
      title: 'Buffer Solutions',
      subtitle:
        'A buffer is a mixture of a weak conjugate acid–base pair. It resists pH change by acting as both a proton source and a proton sink. This topic covers how buffers work and how to design and calculate them. It also covers how titrations behave for strong and weak acid–base pairs, how indicators signal the end point, and how to handle polyprotic acid titrations.',
      sections: [
        <>
          <div className="lrn-header">
            <h2>Mixed Solutions and the Buffer Concept</h2>
          </div>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              You add 1 drop of hydrochloric acid to pure water. The pH drops from 7 to about 3, a
              change of 4 units. Now you add the same drop to a solution containing acetic acid and
              sodium acetate. What do you think will happen to the pH this time, and why?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                The pH will barely change, maybe 0.1 units. The acetate ions{' '}
                {`$(\\text{CH}_3\\text{CO}_2^-)$`} grab the added {`$\\text{H}_3\\text{O}^+$`} ions
                and turn them into acetic acid molecules. The net result is a tiny shift in the
                ratio of acid to base, not a large swing in pH.
              </p>
            </details>
          </div>
          <p>
            A <strong>buffer</strong> is a solution whose pH resists change when small amounts of
            strong acid or base are added. Buffers appear whenever a weak acid and its conjugate
            base, the particle left after the acid gives up its proton, are both present in
            solution. You encounter them constantly: blood plasma is buffered at pH 7.4, and the
            ocean sits near pH 8.4. Laboratory reaction mixtures are also buffered to keep enzymes
            active.
          </p>
          <p>
            A weak acid and its conjugate base share the same dynamic equilibrium, a balance that
            keeps shifting back and forth without ever stopping. For acetic acid:
          </p>
          <p className="lrn-eq">{`$$\\text{CH}_3\\text{COOH}(\\text{aq}) + \\text{H}_2\\text{O}(\\text{l}) \\rightleftharpoons \\text{H}_3\\text{O}^+(\\text{aq}) + \\text{CH}_3\\text{CO}_2^-(\\text{aq})$$`}</p>
          <p>
            Adding a strong acid pushes the equilibrium left, the newly arrived{' '}
            {`$\\text{H}_3\\text{O}^+$`} ions react with {`$\\text{CH}_3\\text{CO}_2^-$`} to form
            acetic acid molecules. Adding a strong base pushes it right, {`$\\text{OH}^-$`} ions
            remove protons from {`$\\text{CH}_3\\text{COOH}$`}, forming more{' '}
            {`$\\text{CH}_3\\text{CO}_2^-$`}. The pH barely moves because both a proton source and a
            proton sink are available. An ammonia buffer works the same way: {`$\\text{NH}_4^+$`}{' '}
            donates protons when base is added, and {`$\\text{NH}_3$`} accepts protons when acid is
            added.
          </p>
          <div className="lrn-definition">
            <span className="lrn-definition-term">Buffer</span>
            <div className="lrn-definition-desc">
              <p>
                A mixture of a weak conjugate acid–base pair that stabilizes the pH of a solution by
                providing both a source and a sink for protons. An acid buffer (pH {`$< 7$`}) uses a
                weak acid and its salt. A base buffer (pH {`$> 7$`}) uses a weak base and its salt.
              </p>
            </div>
          </div>
          <h3>The Common-Ion Effect</h3>
          <p>
            Why does a weak acid mixed with its salt behave so differently from the weak acid alone?
            The answer is the <strong>common-ion effect</strong>.
          </p>
          <div className="lrn-definition">
            <span className="lrn-definition-term">Common-Ion Effect</span>
            <div className="lrn-definition-desc">
              <p>
                Adding an ion that is already part of an equilibrium pushes that equilibrium back
                toward the undissociated form. For a weak acid, adding its conjugate base ion holds
                back the acid's ionization. This is Le Chatelier's principle applied to the
                ionization equilibrium.
              </p>
            </div>
          </div>
          <p>
            Picture acetic acid on its own. It ionizes a little, producing some{' '}
            {`$\\text{CH}_3\\text{CO}_2^-$`} and {`$\\text{H}_3\\text{O}^+$`}. Now dissolve sodium
            acetate in the same solution. You have flooded it with the common ion{' '}
            {`$\\text{CH}_3\\text{CO}_2^-$`}. By Le Chatelier, the extra acetate pushes the
            acetic-acid equilibrium to the left, so the acid ionizes even less:
          </p>
          <p className="lrn-eq">{`$$\\text{CH}_3\\text{COOH} + \\text{H}_2\\text{O} \\rightleftharpoons \\text{H}_3\\text{O}^+ + \\text{CH}_3\\text{CO}_2^- \\quad \\xleftarrow{\\text{added } \\text{CH}_3\\text{CO}_2^-}$$`}</p>
          <p>
            The result is a solution that holds a large reserve of the un-ionized acid <em>and</em>{' '}
            a large reserve of its conjugate base, side by side. That double reserve is exactly what
            makes a buffer work. Every buffer calculation in this topic rests on the common-ion
            effect.
          </p>
          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>
              You dissolve solid sodium acetate into a beaker of pure acetic acid. Before reading
              on, predict: does the pH go up, go down, or stay the same?
            </p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                The pH goes up (less acidic). The added acetate is a common ion. It pushes the
                acetic-acid equilibrium to the left, so fewer {`$\\text{H}_3\\text{O}^+$`} ions are
                produced. Less {`$\\text{H}_3\\text{O}^+$`} means a higher pH. The acid is now
                holding back its own ionization.
              </p>
            </details>
          </div>
        </>,

        <>
          <div className="lrn-header">
            <h2>Buffer Action</h2>
          </div>
          <p>
            Reach for this section whenever you need to understand <em>why</em> a buffer resists pH
            change at the molecular level, or choose between acid-buffer and base-buffer systems for
            a task.
          </p>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              A buffer contains equal moles of {`$\\text{NH}_3$`} and {`$\\text{NH}_4\\text{Cl}$`}.
              You add a few drops of {`$\\text{NaOH}$`}. Which species reacts with the{' '}
              {`$\\text{OH}^-$`}, and what does the solution become after the reaction?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                {`$\\text{NH}_4^+$`} reacts with {`$\\text{OH}^-$`}: the acid in the buffer donates
                its proton to neutralize the base. The products are {`$\\text{NH}_3$`} and water.
                The amount of {`$\\text{NH}_4^+$`} decreases slightly; the amount of{' '}
                {`$\\text{NH}_3$`} increases slightly. The pH rises only a tiny amount.
              </p>
            </details>
          </div>
          <p>
            Consider the acetate buffer system in detail. If a drop of strong acid arrives, the new{' '}
            {`$\\text{H}_3\\text{O}^+$`} ions react with {`$\\text{CH}_3\\text{CO}_2^-$`} ions to
            produce {`$\\text{CH}_3\\text{COOH}$`} and water. The acetate ion acts as a{' '}
            <em>sink</em> for protons. If a drop of strong base arrives instead, the{' '}
            {`$\\text{OH}^-$`} ions remove protons from {`$\\text{CH}_3\\text{COOH}$`} molecules,
            forming {`$\\text{CH}_3\\text{CO}_2^-$`} and water. The acetic acid acts as a{' '}
            <em>source</em> of protons.
          </p>
          <p>
            In both cases the pH remains nearly constant. The ratio{' '}
            {`$[\\text{CH}_3\\text{CO}_2^-]/[\\text{CH}_3\\text{COOH}]$`} changes only a little
            compared to the starting amounts of each species.
          </p>
          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>
              Why does an acetate buffer fail if you add an enormous amount of strong acid, say,
              enough to convert all the {`$\\text{CH}_3\\text{CO}_2^-$`} to{' '}
              {`$\\text{CH}_3\\text{COOH}$`}? Explain before reading on.
            </p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                Once all the conjugate base is consumed, there is no proton sink left. Any
                additional {`$\\text{H}_3\\text{O}^+$`} stays in solution and the pH plunges, just
                like pure acid would behave. The buffer has been used up. This is why buffer
                capacity matters.
              </p>
            </details>
          </div>
        </>,

        <>
          <div className="lrn-header">
            <h2>Designing a Buffer</h2>
          </div>
          <p>
            Use this when you need to prepare a solution that holds a specific pH, or to choose the
            right conjugate pair for a target pH.
          </p>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              You need a buffer at pH 9.25. You have access to ammonia ({`$\\text{p}K_a$`} of{' '}
              {`$\\text{NH}_4^+ = 9.25$`}) and acetic acid ({`$\\text{p}K_a = 4.75$`}). Which
              conjugate pair should you choose, and why?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                Choose the {`$\\text{NH}_4^+/\\text{NH}_3$`} pair. A buffer works best when the
                target pH is close to {`$\\text{p}K_a$`} of the acid component. Ammonia's{' '}
                {`$\\text{p}K_a$`} matches pH 9.25 exactly, so an equimolar mixture gives the
                desired pH with maximum resistance to change. Acetic acid's {`$\\text{p}K_a$`} is
                far away at 4.75, it would not buffer effectively at pH 9.25.
              </p>
            </details>
          </div>
          <p>
            To find the exact pH of a buffer, write the {`$K_a$`} expression and rearrange it. For
            the equilibrium{' '}
            {`$\\text{HA}(\\text{aq}) + \\text{H}_2\\text{O}(\\text{l}) \\rightleftharpoons \\text{H}_3\\text{O}^+(\\text{aq}) + \\text{A}^-(\\text{aq})$`}
            :
          </p>
          <p className="lrn-eq">{`$$[\\text{H}_3\\text{O}^+] = K_a \\times \\frac{[\\text{HA}]}{[\\text{A}^-]}$$`}</p>
          <p>
            Both HA and {`$\\text{A}^-$`} are present in large concentrations, and only a tiny
            fraction changes. So their equilibrium concentrations are nearly equal to their initial
            concentrations. You will use this shortcut in every buffer problem below.
          </p>
          <h3>The Henderson–Hasselbalch Equation</h3>
          <p>
            Take the negative logarithm of both sides of the {`$K_a$`} expression. Use{' '}
            {`$\\log x = -\\log(1/x)$`} to flip the fraction, and you arrive at the
            Henderson–Hasselbalch equation:
          </p>
          <div className="lrn-eq lrn-eq-hero">
            <span>{`$$\\text{pH} = \\text{p}K_a + \\log\\frac{[\\text{base}]_{\\text{initial}}}{[\\text{acid}]_{\\text{initial}}}$$`}</span>
          </div>
          <HendersonHasselbalchViz />
          <p>
            Here [base] is the conjugate base {`$\\text{A}^-$`} and [acid] is the weak acid HA from
            one line above. This equation applies to any weak acid buffer. For a base buffer (such
            as ammonia), you use the {`$\\text{p}K_a$`} of the conjugate acid ({`$\\text{NH}_4^+$`})
            and write the {`$\\log$`} ratio as {`$[\\text{NH}_3]/[\\text{NH}_4^+]$`}.
          </p>
          <div className="lrn-callout lrn-warning">
            <span className="lrn-callout-label">Approximation Warning</span>
            <p>
              Henderson–Hasselbalch works when the initial concentrations of acid and conjugate base
              are both much larger than the {`$[\\text{H}_3\\text{O}^+]$`}. It gives approximate
              values, good to a few percent under laboratory conditions.
            </p>
          </div>
          <p>
            When the acid and base concentrations are equal, {`$\\log(1) = 0$`} and{' '}
            {`$\\text{pH} = \\text{p}K_a$`}. This is the simplest case: pick an acid whose{' '}
            {`$\\text{p}K_a$`} matches your target pH, then mix equimolar amounts of the acid and
            its conjugate base.
          </p>
          <div className="lrn-definition">
            <span className="lrn-definition-term">Typical Buffer Systems</span>
            <div className="lrn-definition-desc">
              <p>
                Common acid buffers: {`$\\text{CH}_3\\text{COOH}/\\text{CH}_3\\text{CO}_2^-$`} (
                {`$\\text{p}K_a = 4.75$`}),
                {` $\\text{HNO}_2/\\text{NO}_2^-$`} ({`$\\text{p}K_a = 3.37$`}),
                {` $\\text{HClO}_2/\\text{ClO}_2^-$`} ({`$\\text{p}K_a = 2.00$`}). Common base
                buffers: {`$\\text{NH}_4^+/\\text{NH}_3$`} ({`$\\text{p}K_a = 9.25$`}),
                {` $(\\text{CH}_3)_3\\text{NH}^+/(\\text{CH}_3)_3\\text{N}$`} (
                {`$\\text{p}K_a = 9.81$`}),
                {` $\\text{H}_2\\text{PO}_4^-/\\text{HPO}_4^{2-}$`} ({`$\\text{p}K_a = 7.21$`}).
              </p>
            </div>
          </div>
          <h3>Worked Example: Finding the pH of an Ammonia (Base) Buffer</h3>
          <p>
            A solution is 0.30 M {`$\\text{NH}_3$`}(aq) and 0.20 M {`$\\text{NH}_4\\text{Cl}$`}(aq)
            at 25°C. What is the pH? The {`$\\text{p}K_a$`} of {`$\\text{NH}_4^+$`} is 9.25.
          </p>
          <div className="lrn-steps">
            <div className="lrn-step">
              <span className="lrn-step-title">Identify the conjugate pair</span>
              <p className="lrn-step-content">
                The acid is the ammonium ion {`$\\text{NH}_4^+$`} (from {`$\\text{NH}_4\\text{Cl}$`}
                ); the conjugate base is {`$\\text{NH}_3$`}. For a base buffer you still use
                Henderson–Hasselbalch, with the {`$\\text{p}K_a$`} of the conjugate acid.
              </p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">Apply Henderson–Hasselbalch</span>
              <p className="lrn-step-content">
                {`$\\text{pH} = 9.25 + \\log\\dfrac{[\\text{NH}_3]}{[\\text{NH}_4^+]} = 9.25 + \\log\\dfrac{0.30}{0.20} = 9.25 + \\log(1.5) = 9.25 + 0.18 \\approx 9.43$`}
              </p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">Check</span>
              <p className="lrn-step-content">
                The base ({`$\\text{NH}_3$`}) concentration is higher than the acid, so the log term
                is positive and the pH sits above {`$\\text{p}K_a$`}. We get pH 9.43 {`$>$`} 9.25, consistent, and basic as expected for an ammonia buffer.
              </p>
            </div>
          </div>
          <h3>Worked Example: Finding the pH of an Acetate Buffer</h3>
          <p>
            A solution is 0.040 M {`$\\text{NaCH}_3\\text{CO}_2$`}(aq) and 0.080 M{' '}
            {`$\\text{CH}_3\\text{COOH}$`}(aq) at 25°C. What is the pH?
          </p>
          <div className="lrn-steps">
            <div className="lrn-step">
              <span className="lrn-step-title">Identify the conjugate pair</span>
              <p className="lrn-step-content">
                The acid is {`$\\text{CH}_3\\text{COOH}$`}; the conjugate base is{' '}
                {`$\\text{CH}_3\\text{CO}_2^-$`}. The pKa of acetic acid is 4.75 (
                {`$K_a = 1.8 \\times 10^{-5}$`}).
              </p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">Apply Henderson–Hasselbalch</span>
              <p className="lrn-step-content">
                {`$\\text{pH} = 4.75 + \\log\\dfrac{0.040}{0.080} = 4.75 + \\log(0.50) = 4.75 - 0.301 \\approx 4.44$`}
              </p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">Check</span>
              <p className="lrn-step-content">
                The acid concentration is double the base concentration, so the log term is negative
                and the pH should be below {`$\\text{p}K_a$`}. We get pH 4.44 {`$<$`} 4.75, consistent. If only the acid were present, pH would be 2.92, so 4.44 is sensible:
                the conjugate base raised the pH.
              </p>
            </div>
          </div>
          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>
              Why did we use the <em>initial</em> concentrations of acid and base directly in the
              Henderson–Hasselbalch equation, without setting up a full ICE table?
            </p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                In a buffer, both the weak acid and conjugate base are present at concentrations far
                larger than the tiny {`$[\\text{H}_3\\text{O}^+]$`} that results from the
                equilibrium. Each species loses or gains only a tiny fraction. So the equilibrium
                concentrations are almost exactly the same as the initial concentrations, and we can
                skip the ICE table without significant error.
              </p>
            </details>
          </div>
          <h3>Worked Example: Calculating the pH Change When Base Is Added to a Buffer</h3>
          <p>
            Dissolve 1.2 g of NaOH (0.030 mol) in 500 mL of the buffer from the previous example
            (0.080 M {`$\\text{CH}_3\\text{COOH}$`}, 0.040 M {`$\\text{CH}_3\\text{CO}_2^-$`}). Find
            the new pH and the change in pH.
          </p>
          <div className="lrn-faded">
            <div className="lrn-faded-phase">
              <span className="lrn-faded-label">COMPLETE EXAMPLE</span>
              <p>
                <strong>Step 1, Find the new amount of acid.</strong> Initial moles of{' '}
                {`$\\text{CH}_3\\text{COOH}$`}:{' '}
                {`$0.500\\,\\text{L} \\times 0.080\\,\\text{M} = 0.040\\,\\text{mol}$`}. The{' '}
                {`$\\text{OH}^-$`} reacts 1:1 with the acid:{' '}
                {`$0.040 - 0.030 = 0.010\\,\\text{mol}$`} remains. New concentration:{' '}
                {`$[\\text{CH}_3\\text{COOH}] = 0.010\\,\\text{mol} / 0.500\\,\\text{L} = 0.020\\,\\text{M}$`}
                .
              </p>
              <p>
                <strong>Step 2, Find the new amount of conjugate base.</strong> Initial moles of{' '}
                {`$\\text{CH}_3\\text{CO}_2^-$`}:{' '}
                {`$0.500\\,\\text{L} \\times 0.040\\,\\text{M} = 0.020\\,\\text{mol}$`}. The
                reaction produces more conjugate base: {`$0.020 + 0.030 = 0.050\\,\\text{mol}$`}.
                New concentration:{' '}
                {`$[\\text{CH}_3\\text{CO}_2^-] = 0.050 / 0.500 = 0.10\\,\\text{M}$`}.
              </p>
              <p>
                <strong>Step 3, Calculate pH.</strong>{' '}
                {`$\\text{pH} = 4.75 + \\log(0.10/0.020) = 4.75 + \\log 5 = 4.75 + 0.699 \\approx 5.44$`}
                . Change: {`$5.44 - 4.44 = 1.00$`} pH unit. By comparison, adding 0.030 mol NaOH to
                pure water would shift the pH from 7 to about 12, a change of 5 units.
              </p>
            </div>
            <div className="lrn-faded-phase">
              <span className="lrn-faded-label">YOUR TURN, PARTIAL</span>
              <p>
                Starting from the same buffer (0.080 M acid, 0.040 M base, 500 mL, pH 4.44), suppose
                0.020 mol of {`$\\text{HCl}$`} is dissolved in the buffer instead.
              </p>
              <ol className="lrn-list">
                <li>
                  The acid reacts with {`$\\text{CH}_3\\text{CO}_2^-$`}. Find the new moles of acid
                  and base.
                </li>
                <li>Apply Henderson–Hasselbalch to find the new pH.</li>
              </ol>
            </div>
            <div className="lrn-faded-phase">
              <span className="lrn-faded-label">INDEPENDENT PRACTICE</span>
              <p>
                Suppose 0.0200 mol NaOH(s) is dissolved in 300 mL of the same starting buffer.
                Calculate the pH of the resulting solution and the change in pH. (Answer: pH 5.65,
                an increase of 1.21.)
              </p>
            </div>
          </div>
          <h3>Worked Example: Selecting a Buffer Composition for a Given pH</h3>
          <p>
            Find the ratio of {`$[\\text{CO}_3^{2-}]$`} to {`$[\\text{HCO}_3^-]$`} needed to buffer
            at pH 9.50. The {`$\\text{p}K_{a2}$`} of {`$\\text{H}_2\\text{CO}_3$`} is 10.25.
          </p>
          <div className="lrn-steps">
            <div className="lrn-step">
              <span className="lrn-step-title">Identify acid and base</span>
              <p className="lrn-step-content">
                In the equilibrium{' '}
                {`$\\text{HCO}_3^- + \\text{H}_2\\text{O} \\rightleftharpoons \\text{H}_3\\text{O}^+ + \\text{CO}_3^{2-}$`}
                , the acid is {`$\\text{HCO}_3^-$`} and the base is {`$\\text{CO}_3^{2-}$`}.
              </p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">Rearrange Henderson–Hasselbalch</span>
              <p className="lrn-step-content">
                {`$\\log\\dfrac{[\\text{base}]}{[\\text{acid}]} = \\text{pH} - \\text{p}K_a = 9.50 - 10.25 = -0.75$`}
              </p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">Solve for the ratio</span>
              <p className="lrn-step-content">
                {`$\\dfrac{[\\text{CO}_3^{2-}]}{[\\text{HCO}_3^-]} = 10^{-0.75} = 0.18$`}. Mix 0.18
                mol {`$\\text{CO}_3^{2-}$`} for every 1.00 mol {`$\\text{HCO}_3^-$`}.
              </p>
            </div>
          </div>
          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>
              The desired pH (9.50) is lower than the {`$\\text{p}K_a$`} (10.25). Without doing any
              math, what does this tell you about the ratio of base to acid, should it be greater
              than 1, equal to 1, or less than 1?
            </p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                If pH {`$<$`} {`$\\text{p}K_a$`}, the log term must be negative, meaning{' '}
                {`$[\\text{base}] < [\\text{acid}]$`} and the ratio is less than 1. At equal
                concentrations pH equals {`$\\text{p}K_a$`}; to shift pH downward, you need more
                acid than base. The result 0.18 confirms this, there is about five times more{' '}
                {`$\\text{HCO}_3^-$`} than {`$\\text{CO}_3^{2-}$`}.
              </p>
            </details>
          </div>
        </>,

        <>
          <div className="lrn-header">
            <h2>Buffer Capacity</h2>
          </div>
          <p>
            This idea matters whenever you need to compare how well two different buffers resist pH
            change, or decide whether a buffer will survive the addition of a given amount of acid
            or base.
          </p>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              You have two acetate buffers. Buffer A is 0.01 M in both acetic acid and acetate.
              Buffer B is 1.0 M in both. Both have the same pH. Which can absorb more added strong
              acid before breaking down, and why?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                Buffer B can absorb far more acid. It has 100 times more conjugate base available to
                neutralize incoming protons before the base reservoir runs dry. Concentration, not
                just pH, determines how much the buffer can handle.
              </p>
            </details>
          </div>
          <div className="lrn-definition">
            <span className="lrn-definition-term">Buffer Capacity</span>
            <div className="lrn-definition-desc">
              <p>
                The maximum amount of strong acid or base that a buffer can absorb before its pH
                changes significantly. A more concentrated buffer has a greater capacity. A buffer
                also has greater capacity for the direction in which it has more reserve species.
              </p>
            </div>
          </div>
          <p>
            A buffer resists acid most effectively when there is plenty of conjugate base present to
            absorb incoming {`$\\text{H}_3\\text{O}^+$`}. In practice, a buffer has a high capacity
            for acid when the conjugate base is at least 10% of the weak acid. Likewise it resists
            base when the weak acid is at least 10% of the conjugate base.
          </p>
          <p>Converting these percentages to pH via Henderson–Hasselbalch:</p>
          <p className="lrn-eq">{`$$\\text{If } [\\text{acid}] = 10[\\text{base}]:\\quad \\text{pH} = \\text{p}K_a + \\log\\frac{1}{10} = \\text{p}K_a - 1$$`}</p>
          <p className="lrn-eq">{`$$\\text{If } [\\text{base}] = 10[\\text{acid}]:\\quad \\text{pH} = \\text{p}K_a + \\log 10 = \\text{p}K_a + 1$$`}</p>
          <p>
            The effective buffering range is therefore {`$\\text{p}K_a \\pm 1$`}. Beyond these
            limits one of the two species has run low. Adding a little strong acid or base then
            converts nearly all the remaining reserve, causing a large pH jump. The buffer has run
            out on that side.
          </p>
          <BufferCapacityViz />
          <p>
            The blood plasma buffer is worth noting here. Blood uses {`$\\text{HCO}_3^-$`} with a
            ratio of about 20:1 to {`$\\text{H}_2\\text{CO}_3$`}. This is outside the strict{' '}
            {`$\\text{p}K_a \\pm 1$`} range. But the body makes up for it through respiration
            (controlling {`$\\text{CO}_2$`} concentration) and kidney excretion, holding pH between
            7.35 and 7.45.
          </p>
        </>,

        <>
          <div className="lrn-header">
            <h2>Strong Acid–Strong Base Titrations</h2>
          </div>
          <p>
            You will reach for this to calculate the pH at any point during a titration of a strong
            acid with a strong base, or vice versa.
          </p>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              You are titrating 25 mL of 0.250 M NaOH with 0.340 M HCl. Before you add any acid,
              what do you expect the pH to be? After you add so much acid that the stoichiometric
              point is passed, what happens to the pH?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                Before any acid: pH is controlled by 0.250 M {`$\\text{OH}^-$`}, so pOH ={' '}
                {`$-\\log(0.250) \\approx 0.60$`} and pH {`$\\approx 13.40$`}. Past the
                stoichiometric point: excess {`$\\text{H}_3\\text{O}^+$`} from the strong acid
                controls the pH, which falls well below 7.
              </p>
            </details>
          </div>
          <p>
            In a titration, the <strong>analyte</strong> is the solution you start with in the
            flask. The <strong>titrant</strong> is the solution you add from the burette to react
            with it.
          </p>
          <p>When a strong acid meets a strong base, the net ionic equation is:</p>
          <p className="lrn-eq">{`$$\\text{H}_3\\text{O}^+(\\text{aq}) + \\text{OH}^-(\\text{aq}) \\longrightarrow 2\\,\\text{H}_2\\text{O}(\\text{l})$$`}</p>
          <p>
            The <strong>stoichiometric point</strong> is where moles of {`$\\text{OH}^-$`} added
            equal the moles of {`$\\text{H}_3\\text{O}^+$`} initially present (or vice versa). At
            this point the solution contains only water and a spectator salt, a salt whose ions do
            not react with water. For strong acid + strong base, pH = 7 at 25°C.
          </p>
          <p>
            A plot of pH vs. volume of titrant is the <strong>pH curve</strong> (or titration
            curve). For a strong acid–strong base titration, pH starts near 1 if a strong acid is
            the analyte. It falls slowly, then drops abruptly through 7 at the stoichiometric point,
            then levels off.
          </p>
          <div className="lrn-definition">
            <span className="lrn-definition-term">
              Procedure: pH During a Strong Acid–Strong Base Titration
            </span>
            <div className="lrn-definition-desc">
              <p>
                <strong>Step 1.</strong> Find moles of {`$\\text{H}_3\\text{O}^+$`} (or{' '}
                {`$\\text{OH}^-$`}) in the analyte: moles = volume × concentration.
                <br />
                <strong>Step 2.</strong> Find moles of {`$\\text{OH}^-$`} (or{' '}
                {`$\\text{H}_3\\text{O}^+$`}) added from the titrant: moles = volume ×
                concentration.
                <br />
                <strong>Step 3.</strong> Subtract to find the excess species remaining after
                neutralization.
                <br />
                <strong>Step 4.</strong> Divide by total volume to get the molarity of the excess
                species.
                <br />
                <strong>Step 5.</strong> If acid is in excess: pH{' '}
                {`$= -\\log[\\text{H}_3\\text{O}^+]$`}. If base is in excess: pOH{' '}
                {`$= -\\log[\\text{OH}^-]$`}, then pH {`$= 14.00 - \\text{pOH}$`} at 25°C.
              </p>
            </div>
          </div>
          <h3>Worked Example: Points on a Strong Acid–Strong Base pH Curve</h3>
          <p>
            Analyte: 25.00 mL of 0.250 M NaOH. Titrant: 0.340 M HCl. Find (a) the initial pH and (b)
            the pH after adding 5.00 mL of HCl titrant.
          </p>
          <div className="lrn-steps">
            <div className="lrn-step">
              <span className="lrn-step-title">(a) Initial pH</span>
              <p className="lrn-step-content">
                pOH {`$= -\\log(0.250) = 0.602$`}. Therefore pH {`$= 14.00 - 0.602 = 13.40$`}.
              </p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">(b) After 5.00 mL HCl, Step 1: moles of OH⁻</span>
              <p className="lrn-step-content">
                {`$n(\\text{OH}^-) = 25.00 \\times 10^{-3}\\,\\text{L} \\times 0.250\\,\\text{M} = 6.25 \\times 10^{-3}\\,\\text{mol}$`}
              </p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">Step 2: moles of H₃O⁺ added</span>
              <p className="lrn-step-content">
                {`$n(\\text{H}_3\\text{O}^+) = 5.00 \\times 10^{-3}\\,\\text{L} \\times 0.340\\,\\text{M} = 1.70 \\times 10^{-3}\\,\\text{mol}$`}
              </p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">Step 3: excess OH⁻ and Step 4: concentration</span>
              <p className="lrn-step-content">
                {`$n(\\text{OH}^-)_{\\text{final}} = 6.25 - 1.70 = 4.55\\,\\text{mmol}$`}. Total
                volume {`$= (25.00 + 5.00) \\times 10^{-3}\\,\\text{L} = 0.03000\\,\\text{L}$`}.
                {`$[\\text{OH}^-] = 4.55 \\times 10^{-3} / 0.03000 = 0.152\\,\\text{M}$`}
              </p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">Step 5: pH</span>
              <p className="lrn-step-content">
                pOH {`$= -\\log(0.152) = 0.82$`}. pH {`$= 14.00 - 0.82 = 13.18$`}. The pH dropped
                only from 13.40 to 13.18, a small change consistent with the shallow slope at the
                start of the titration.
              </p>
            </div>
          </div>
          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>
              Near the stoichiometric point, adding 1 mL more acid drops the pH from about 7 to
              about 2. Earlier in the titration, adding 5 mL of acid changed the pH by only 0.22
              units. Why is the curve so flat far from the stoichiometric point and so steep near
              it?
            </p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                Far from the stoichiometric point, a large excess of {`$\\text{OH}^-$`} (or{' '}
                {`$\\text{H}_3\\text{O}^+$`}) remains. Adding a small amount of titrant changes that
                large excess by only a tiny fraction. So the concentration changes little and pH
                barely moves. Near the stoichiometric point, the excess species is nearly zero. Even
                a tiny addition of titrant shifts the concentration from near-zero to measurable,
                causing a dramatic pH change.
              </p>
            </details>
          </div>
          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>
              Why is the stoichiometric point exactly pH 7 for a strong acid and strong base? The
              only salt left in solution is the spectator salt, here, NaCl. Both {`$\\text{Na}^+$`}{' '}
              and {`$\\text{Cl}^-$`} come from a strong base and a strong acid.
            </p>
            <p>
              Neither ion reacts with water, so neither shifts the pH. The solution is just water
              plus an inert salt, and pure water at 25°C has pH 7. This is why a weak partner is
              needed to push the stoichiometric point away from 7.
            </p>
          </div>
        </>,

        <>
          <div className="lrn-header">
            <h2>Strong Acid–Weak Base and Weak Acid–Strong Base Titrations</h2>
          </div>
          <p>
            Turn to this to calculate the pH at any stage of a titration where one partner is weak,
            or to predict whether the stoichiometric point will be acidic, neutral, or basic.
          </p>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              At the stoichiometric point of the titration of formic acid (HCOOH) with NaOH, the
              only solutes are sodium formate (NaHCO{`$_2$`}) and water. Is the solution acidic,
              neutral, or basic? Explain using only the identity of the ions present.
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                The solution is basic. {`$\\text{Na}^+$`} does not react with water. The formate ion
                {` $\\text{HCO}_2^-$`} is the conjugate base of a weak acid, it accepts protons
                from water, producing {`$\\text{OH}^-$`}. So the solution is mildly basic at the
                stoichiometric point, with pH {`$> 7$`}.
              </p>
            </details>
          </div>
          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Weak Acid + Strong Base</span>
              <p>
                Stoichiometric point: basic (pH {`$> 7$`}). The salt that forms has a basic anion
                (conjugate base of the weak acid) that accepts protons from water.
              </p>
              <p>
                Halfway to stoichiometric point: {`$[\\text{HA}] = [\\text{A}^-]$`}, so pH{' '}
                {`$= \\text{p}K_a$`}. This is the buffer region. You can read {`$\\text{p}K_a$`}{' '}
                directly from the titration curve.
              </p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Weak Base + Strong Acid</span>
              <p>
                Stoichiometric point: acidic (pH {`$< 7$`}). The salt that forms has an acidic
                cation (conjugate acid of the weak base) that donates protons to water.
              </p>
              <p>
                Halfway to stoichiometric point: {`$[\\text{B}] = [\\text{HB}^+]$`}, so pH{' '}
                {`$= \\text{p}K_a$`}
                of the conjugate acid. You can find {`$\\text{p}K_b$`} using{' '}
                {`$\\text{p}K_a + \\text{p}K_b = 14.00$`}. This comes straight from taking{' '}
                {`$-\\log$`} of {`$K_a \\times K_b = K_w$`}, which you already know for a conjugate
                pair.
              </p>
            </div>
          </div>
          <div className="lrn-definition">
            <span className="lrn-definition-term">
              Procedure: pH During a Weak Acid or Weak Base Titration
            </span>
            <div className="lrn-definition-desc">
              <p>
                <strong>Steps 1–3:</strong> Use reaction stoichiometry (as in the strong–strong
                case) to find the moles of weak acid (or base) remaining and moles of conjugate
                formed.
                <br />
                <strong>Step 4:</strong> Divide both by total volume to get initial molarities for
                the proton-transfer equilibrium.
                <br />
                <strong>Step 5:</strong> If both conjugate acid and base are present in significant
                amounts, use Henderson–Hasselbalch or the {`$K_a$`} expression to find pH. At the
                stoichiometric point, use a {`$K_b$`} calculation for the anion (or {`$K_a$`} for
                the cation).
              </p>
            </div>
          </div>
          <h3>
            Worked Example: pH at the Stoichiometric Point of a Weak Acid–Strong Base Titration
          </h3>
          <p>
            Find the pH at the stoichiometric point when 25.00 mL of 0.100 M HCOOH is titrated with
            0.150 M NaOH. {`$K_a = 1.8 \\times 10^{-4}$`} for formic acid.
          </p>
          <div className="lrn-steps">
            <div className="lrn-step">
              <span className="lrn-step-title">Find moles of HCOOH initially</span>
              <p className="lrn-step-content">
                {`$n(\\text{HCOOH}) = 2.500 \\times 10^{-2}\\,\\text{L} \\times 0.100\\,\\text{M} = 2.50 \\times 10^{-3}\\,\\text{mol}$`}
              </p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">Find volume of NaOH needed (1:1 stoichiometry)</span>
              <p className="lrn-step-content">
                {`$V = 2.50 \\times 10^{-3}\\,\\text{mol} / 0.150\\,\\text{M} = 1.67 \\times 10^{-2}\\,\\text{L} = 16.7\\,\\text{mL}$`}
                . Total volume:{' '}
                {`$25.00 + 16.7 = 41.7\\,\\text{mL} = 4.17 \\times 10^{-2}\\,\\text{L}$`}.
              </p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">Find [HCO₂⁻] at the stoichiometric point</span>
              <p className="lrn-step-content">
                All acid has been converted to formate:{' '}
                {`$[\\text{HCO}_2^-] = 2.50 \\times 10^{-3} / 4.17 \\times 10^{-2} = 0.0600\\,\\text{M}$`}
              </p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">Use Kb of formate ion to find [OH⁻]</span>
              <p className="lrn-step-content">
                {`$K_b = K_w/K_a = 1.0 \\times 10^{-14} / 1.8 \\times 10^{-4} = 5.6 \\times 10^{-11}$`}
                . Equilibrium:{' '}
                {`$\\text{HCO}_2^- + \\text{H}_2\\text{O} \\rightleftharpoons \\text{HCOOH} + \\text{OH}^-$`}
                . {`$K_b = x^2 / (0.0600 - x) \\approx x^2 / 0.0600$`}.{' '}
                {`$x = \\sqrt{5.6 \\times 10^{-11} \\times 0.0600} = 1.8 \\times 10^{-6}\\,\\text{M}$`}
              </p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">Find pH</span>
              <p className="lrn-step-content">
                pOH {`$= -\\log(1.8 \\times 10^{-6}) = 5.74$`}. pH {`$= 14.00 - 5.74 = 8.26$`}. As
                predicted, the pH is basic.
              </p>
            </div>
          </div>
          <h3>
            Worked Example: pH at the Stoichiometric Point of a Weak Base–Strong Acid Titration
          </h3>
          <p>
            Now do the other direction. Find the pH at the stoichiometric point when 25.00 mL of
            0.100 M {`$\\text{NH}_3$`} is titrated with 0.100 M HCl. {`$K_b = 1.8 \\times 10^{-5}$`}{' '}
            for ammonia. This time the stoichiometric point should be <em>acidic</em>, because the
            salt that forms has an acidic cation.
          </p>
          <div className="lrn-steps">
            <div className="lrn-step">
              <span className="lrn-step-title">Find moles of NH₃ and the acid needed</span>
              <p className="lrn-step-content">
                {`$n(\\text{NH}_3) = 2.500 \\times 10^{-2}\\,\\text{L} \\times 0.100\\,\\text{M} = 2.50 \\times 10^{-3}\\,\\text{mol}$`}
                . With 1:1 stoichiometry, the HCl needed is{' '}
                {`$2.50 \\times 10^{-3} / 0.100 = 2.500 \\times 10^{-2}\\,\\text{L} = 25.00\\,\\text{mL}$`}
                . Total volume:{' '}
                {`$25.00 + 25.00 = 50.00\\,\\text{mL} = 5.000 \\times 10^{-2}\\,\\text{L}$`}.
              </p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">Find [NH₄⁺] at the stoichiometric point</span>
              <p className="lrn-step-content">
                All ammonia has been converted to ammonium:{' '}
                {`$[\\text{NH}_4^+] = 2.50 \\times 10^{-3} / 5.000 \\times 10^{-2} = 0.0500\\,\\text{M}$`}
                .
              </p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">Use Ka of the ammonium ion to find [H₃O⁺]</span>
              <p className="lrn-step-content">
                The cation {`$\\text{NH}_4^+$`} is the weak acid here, so use{' '}
                {`$K_a = K_w/K_b = 1.0 \\times 10^{-14} / 1.8 \\times 10^{-5} = 5.6 \\times 10^{-10}$`}
                . Equilibrium:{' '}
                {`$\\text{NH}_4^+ + \\text{H}_2\\text{O} \\rightleftharpoons \\text{NH}_3 + \\text{H}_3\\text{O}^+$`}
                . {`$K_a = x^2 / (0.0500 - x) \\approx x^2 / 0.0500$`}.{' '}
                {`$x = \\sqrt{5.6 \\times 10^{-10} \\times 0.0500} = 5.3 \\times 10^{-6}\\,\\text{M}$`}
                .
              </p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">Find pH</span>
              <p className="lrn-step-content">
                pH {`$= -\\log(5.3 \\times 10^{-6}) = 5.28$`}. As predicted, the pH is acidic, below 7, the mirror image of the formic-acid case above.
              </p>
            </div>
          </div>
          <div className="lrn-faded">
            <div className="lrn-faded-phase">
              <span className="lrn-faded-label">YOUR TURN, PARTIAL</span>
              <p>
                Stay with the NH₃/HCl titration above, but stop <em>halfway</em> to the
                stoichiometric point (after adding 12.50 mL of HCl). At that point half the ammonia
                has become ammonium, so {`$[\\text{NH}_3] = [\\text{NH}_4^+]$`}.
              </p>
              <ol className="lrn-list">
                <li>Which equation applies when both NH₃ and NH₄⁺ are present in equal amounts?</li>
                <li>
                  Use {`$\\text{p}K_a$`} of {`$\\text{NH}_4^+ = 9.25$`} to find the pH at this
                  halfway point.
                </li>
              </ol>
            </div>
            <div className="lrn-faded-phase">
              <span className="lrn-faded-label">INDEPENDENT PRACTICE</span>
              <p>
                Titrate 30.00 mL of 0.100 M methylamine ({`$\\text{CH}_3\\text{NH}_2$`},{' '}
                {`$K_b = 4.4 \\times 10^{-4}$`}) with 0.100 M HCl. Find the pH at the stoichiometric
                point. (Answer: {`$[\\text{CH}_3\\text{NH}_3^+] = 0.0500\\,\\text{M}$`},{' '}
                {`$K_a = 2.3 \\times 10^{-11}$`},{' '}
                {`$[\\text{H}_3\\text{O}^+] = 1.07 \\times 10^{-6}$`}, pH ≈ 5.97.)
              </p>
            </div>
          </div>
          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>
              In the formic-acid example we used {`$K_b$`} for the formate ion, but in the ammonia
              example we used {`$K_a$`} for the ammonium ion. Why does the stoichiometric point of
              one titration need {`$K_b$`} and the other need {`$K_a$`}?
            </p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                It depends on which species is left at the stoichiometric point. When you titrate
                the weak acid HCOOH, all of it becomes formate, a base, so the formate accepts a
                proton from water and {`$K_b$`} governs the pH. When you titrate the weak base NH₃,
                all of it becomes ammonium, an acid, so the ammonium donates a proton to water and{' '}
                {`$K_a$`} governs the pH. Always pick the constant that matches the species actually
                present: base left over needs {`$K_b$`}, acid left over needs {`$K_a$`}.
              </p>
            </details>
          </div>
          <h3>
            Worked Example: pH Before the Stoichiometric Point in a Weak Acid–Strong Base Titration
          </h3>
          <p>
            Find (a) the initial pH of 0.100 M HCOOH(aq) and (b) the pH after adding 5.00 mL of
            0.150 M NaOH to 25.00 mL of the acid. {`$K_a = 1.8 \\times 10^{-4}$`}.
          </p>
          <div className="lrn-steps">
            <div className="lrn-step">
              <span className="lrn-step-title">(a) Initial pH from Ka only</span>
              <p className="lrn-step-content">
                {`$[\\text{H}_3\\text{O}^+] = \\sqrt{K_a[\\text{HA}]} = \\sqrt{1.8 \\times 10^{-4} \\times 0.100} = 4.2 \\times 10^{-3}\\,\\text{M}$`}
                . pH {`$= -\\log(4.2 \\times 10^{-3}) = 2.37$`}.
              </p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">(b) Stoichiometry after adding NaOH</span>
              <p className="lrn-step-content">
                Initial HCOOH: {`$2.50 \\times 10^{-3}$`} mol. OH{`$^-$`} added:{' '}
                {`$5.00 \\times 10^{-3}\\,\\text{L} \\times 0.150\\,\\text{M} = 7.50 \\times 10^{-4}$`}{' '}
                mol. Remaining HCOOH: {`$2.50 - 0.750 = 1.75$`} mmol. New HCO{`$_2^-$`}: 0.750 mmol.
                Total volume: 30.00 mL.
              </p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">Concentrations and Henderson–Hasselbalch</span>
              <p className="lrn-step-content">
                {`$[\\text{HCOOH}] = 1.75 \\times 10^{-3} / 0.03000 = 0.0583\\,\\text{M}$`}.
                {` $[\\text{HCO}_2^-] = 7.50 \\times 10^{-4} / 0.03000 = 0.0250\\,\\text{M}$`}.
                {` $\\text{pH} = 3.75 + \\log(0.0250/0.0583) = 3.75 + \\log(0.429) = 3.75 - 0.37 = 3.38$`}
                .
              </p>
            </div>
          </div>
          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>
              In part (b) we used Henderson–Hasselbalch, not the {`$K_b$`} method we used at the
              stoichiometric point. Why is Henderson–Hasselbalch the right tool here, before the
              stoichiometric point is reached?
            </p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                Before the stoichiometric point, the NaOH has converted only part of the formic
                acid. Both formic acid and formate ion are present in significant amounts at the
                same time. That is a buffer. Henderson–Hasselbalch is built for a buffer, so it
                applies directly. The {`$K_b$`} method only fits the stoichiometric point, where the
                acid is gone and formate alone controls the pH.
              </p>
            </details>
          </div>
          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>
              The halfway point of this titration is where half the acid has been neutralized. At
              that point {`$[\\text{HCOOH}] = [\\text{HCO}_2^-]$`}, the log term is zero, and pH ={' '}
              {`$\\text{p}K_a = 3.75$`}. This is why you can find {`$\\text{p}K_a$`} from a
              titration curve: identify the halfway point (half the stoichiometric volume of base
              added) and read off the pH.
            </p>
            <p>
              Well past the stoichiometric point, nearly all the acid has turned into conjugate
              base. Now the excess strong base dominates. The pH approaches that of the pure titrant
              solution.
            </p>
          </div>
          <h3>The Five Regions of the Curve</h3>
          <p>
            A weak acid–strong base titration curve has five regions. Each is controlled by a
            different equilibrium, and you pick your tool to match the region.
          </p>
          <ol className="lrn-list">
            <li>
              <strong>Before any base.</strong> Only weak acid HA is present. Use {`$K_a$`}{' '}
              directly:
              {` `}
              {`$[\\text{H}_3\\text{O}^+] = \\sqrt{K_a[\\text{HA}]}$`}.
            </li>
            <li>
              <strong>Buffer region (before the stoichiometric point).</strong> Both HA and{' '}
              {`$\\text{A}^-$`} are present. Use Henderson–Hasselbalch. At the exact halfway point,
              pH = {`$\\text{p}K_a$`}.
            </li>
            <li>
              <strong>Stoichiometric point.</strong> Only {`$\\text{A}^-$`} is present. Use{' '}
              {`$K_b = K_w/K_a$`} for the conjugate base. The pH is above 7.
            </li>
            <li>
              <strong>Just after the stoichiometric point.</strong> Excess strong base dominates.
              The pH is set by the {`$[\\text{OH}^-]$`} of the leftover NaOH; ignore the weak
              conjugate base.
            </li>
            <li>
              <strong>Far past the stoichiometric point.</strong> The pH approaches that of the pure
              titrant base solution.
            </li>
          </ol>
          <p>
            The curve is flat in the buffer region, then climbs steeply through the stoichiometric
            point, then flattens again as excess base takes over. The steep jump is what an
            indicator detects.
          </p>
          <StrongWeakTitrationViz />
        </>,

        <>
          <div className="lrn-header">
            <h2>Acid–Base Indicators</h2>
          </div>
          <p>
            This helps you choose an indicator for a titration, or understand why an indicator
            changes color at a specific pH.
          </p>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              Phenolphthalein changes color near pH 9.4 ({`$\\text{p}K_{\\text{In}} = 9.4$`}). Would
              you choose it for a strong acid–strong base titration? What about for a weak base–
              strong acid titration where the stoichiometric point occurs at pH 5?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                For a strong acid–strong base titration, the pH changes abruptly across a wide range
                (from about 4 to 10) at the stoichiometric point, so phenolphthalein works fine, the color change falls within this steep range. For a weak base–strong acid
                titration with a stoichiometric point at pH 5, phenolphthalein changes at the wrong
                pH (9.4); you need an indicator whose {`$\\text{p}K_{\\text{In}}$`} is near 5, such
                as methyl red ({`$\\text{p}K_{\\text{In}} = 5.0$`}).
              </p>
            </details>
          </div>
          <p>
            An <strong>acid–base indicator</strong> is a water-soluble dye that exists in two
            different colored forms depending on pH. The acid form (HIn) has one color; the
            conjugate base form (In{`$^-$`}) has another. The indicator itself takes part in a
            proton-transfer equilibrium:
          </p>
          <p className="lrn-eq">{`$$\\text{HIn}(\\text{aq}) + \\text{H}_2\\text{O}(\\text{l}) \\rightleftharpoons \\text{H}_3\\text{O}^+(\\text{aq}) + \\text{In}^-(\\text{aq}) \\quad K_{\\text{In}} = \\frac{[\\text{H}_3\\text{O}^+][\\text{In}^-]}{[\\text{HIn}]}$$`}</p>
          <p>
            The <strong>end point</strong> of an indicator is the pH at which the concentrations of
            its acid and base forms are equal: {`$[\\text{HIn}] = [\\text{In}^-]$`}. At this point{' '}
            {`$[\\text{H}_3\\text{O}^+] = K_{\\text{In}}$`}, so:
          </p>
          <p className="lrn-eq">{`$$\\text{pH} = \\text{p}K_{\\text{In}} \\quad \\text{(at the end point)}$$`}</p>
          <p>
            The color starts to change visibly about 1 pH unit before {`$\\text{p}K_{\\text{In}}$`}{' '}
            and is complete about 1 pH unit after. This is the same 10:1-ratio detectability you saw
            with buffers: at {`$\\text{p}K_{\\text{In}} \\pm 1$`} the two colored forms reach a 1:10
            ratio, which is the point your eye can just tell them apart. So the indicator color
            changes across a range of about 2 pH units centered on {`$\\text{p}K_{\\text{In}}$`}.
          </p>
          <div className="lrn-callout">
            <span className="lrn-callout-label">Choosing an Indicator</span>
            <p>
              Select an indicator whose {`$\\text{p}K_{\\text{In}}$`} is within about 1 pH unit of
              the stoichiometric point pH. For strong acid–strong base titrations, the
              stoichiometric point is at pH 7, but the steep change spans roughly pH 4–10, so many
              indicators work. For weak acid–strong base titrations (stoichiometric point {`$> 7$`}
              ), use phenolphthalein. For weak base–strong acid titrations (stoichiometric point{' '}
              {`$< 7$`}), use methyl orange or methyl red.
            </p>
          </div>
          <table className="lrn-table">
            <thead>
              <tr>
                <th>Indicator</th>
                <th>{`$\\text{p}K_{\\text{In}}$`}</th>
                <th>pH range of color change</th>
                <th>Acid form color</th>
                <th>Base form color</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Thymol blue</td>
                <td>1.7</td>
                <td>1.2–2.8</td>
                <td>Red</td>
                <td>Yellow</td>
              </tr>
              <tr>
                <td>Methyl orange</td>
                <td>3.4</td>
                <td>3.2–4.4</td>
                <td>Red</td>
                <td>Yellow</td>
              </tr>
              <tr>
                <td>Bromophenol blue</td>
                <td>3.9</td>
                <td>3.0–4.6</td>
                <td>Yellow</td>
                <td>Blue</td>
              </tr>
              <tr>
                <td>Bromocresol green</td>
                <td>4.7</td>
                <td>3.8–5.4</td>
                <td>Yellow</td>
                <td>Blue</td>
              </tr>
              <tr>
                <td>Methyl red</td>
                <td>5.0</td>
                <td>4.8–6.0</td>
                <td>Red</td>
                <td>Yellow</td>
              </tr>
              <tr>
                <td>Litmus</td>
                <td>6.5</td>
                <td>5.0–8.0</td>
                <td>Red</td>
                <td>Blue</td>
              </tr>
              <tr>
                <td>Bromothymol blue</td>
                <td>7.1</td>
                <td>6.0–7.6</td>
                <td>Yellow</td>
                <td>Blue</td>
              </tr>
              <tr>
                <td>Phenol red</td>
                <td>7.9</td>
                <td>6.6–8.0</td>
                <td>Yellow</td>
                <td>Red</td>
              </tr>
              <tr>
                <td>Thymol blue (2nd)</td>
                <td>8.9</td>
                <td>8.0–9.6</td>
                <td>Yellow</td>
                <td>Blue</td>
              </tr>
              <tr>
                <td>Phenolphthalein</td>
                <td>9.4</td>
                <td>8.2–10.0</td>
                <td>Colorless</td>
                <td>Pink</td>
              </tr>
              <tr>
                <td>Alizarin yellow R</td>
                <td>11.2</td>
                <td>10.1–12.0</td>
                <td>Yellow</td>
                <td>Red</td>
              </tr>
              <tr>
                <td>Alizarin</td>
                <td>11.7</td>
                <td>11.0–12.4</td>
                <td>Red</td>
                <td>Purple</td>
              </tr>
            </tbody>
          </table>
          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>
              The proton in HIn shifts how the electrons spread across the dye molecule. The acid
              and base forms absorb different wavelengths of light because their electron structure
              is different. When the pH rises past {`$\\text{p}K_{\\text{In}}$`}, the base form
              dominates and the color shifts.
            </p>
          </div>
        </>,

        <>
          <div className="lrn-header">
            <h2>Stoichiometry of Polyprotic Acid Titrations</h2>
          </div>
          <p>
            Use this to predict the pH at any stage of a titration involving an acid with two or
            more acidic protons, and to identify the major species in solution at each stage.
          </p>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              You titrate phosphoric acid ({`$\\text{H}_3\\text{PO}_4$`}, a triprotic acid) with
              NaOH. How many stoichiometric points do you expect on the pH curve? What species is
              the main solute at each stoichiometric point?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                Three stoichiometric points, one for each acidic proton. At the first, the primary
                species is {`$\\text{H}_2\\text{PO}_4^-$`}. At the second, {`$\\text{HPO}_4^{2-}$`}.
                At the third, {`$\\text{PO}_4^{3-}$`}. Each requires 1 mol NaOH per mol of{' '}
                {`$\\text{H}_3\\text{PO}_4$`} (sequentially: 1 mol, then 1 more, then 1 more = 3 mol
                total).
              </p>
            </details>
          </div>
          <p>
            A polyprotic acid is titrated one proton at a time, in order of acidity. For{' '}
            {`$\\text{H}_3\\text{PO}_4$`}:
          </p>
          <ol className="lrn-list">
            <li>
              First, NaOH removes the first proton:{' '}
              {`$\\text{H}_3\\text{PO}_4 + \\text{OH}^- \\longrightarrow \\text{H}_2\\text{PO}_4^- + \\text{H}_2\\text{O}$`}{' '}
              (first stoichiometric point: {`$\\text{H}_2\\text{PO}_4^-$`} solution, pH determined
              by {`$K_{a1}$`}).
            </li>
            <li>
              Then the second proton:{' '}
              {`$\\text{H}_2\\text{PO}_4^- + \\text{OH}^- \\longrightarrow \\text{HPO}_4^{2-} + \\text{H}_2\\text{O}$`}{' '}
              (second stoichiometric point: {`$\\text{HPO}_4^{2-}$`} solution).
            </li>
            <li>
              Then the third:{' '}
              {`$\\text{HPO}_4^{2-} + \\text{OH}^- \\longrightarrow \\text{PO}_4^{3-} + \\text{H}_2\\text{O}$`}{' '}
              (third stoichiometric point: very basic, hard to detect since{' '}
              {`$K_{a3} \\approx K_w$`}).
            </li>
          </ol>
          <p>
            In each buffer region between stoichiometric points, you treat the solution as a normal
            buffer. Identify the two principal species, the partially deprotonated acid and its
            conjugate base. Then use Henderson–Hasselbalch with the appropriate {`$K_a$`}.
          </p>
          <p>The pH at each buffer's halfway point equals the {`$\\text{p}K_a$`} for that step:</p>
          <ul className="lrn-list">
            <li>Halfway to first stoichiometric point: pH {`$= \\text{p}K_{a1} = 2.12$`}</li>
            <li>Halfway to second stoichiometric point: pH {`$= \\text{p}K_{a2} = 7.21$`}</li>
            <li>Halfway to third stoichiometric point: pH {`$= \\text{p}K_{a3} = 12.68$`}</li>
          </ul>
          <PolyproticTitrationViz />
          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>
              Each deprotonation step is a separate equilibrium, governed by its own {`$K_a$`}. The
              acids are removed in order of strength: the strongest acidic proton ({`$K_{a1}$`}
              largest) reacts with base first. Only when that step is complete does the next proton
              become significant. This is why the pH curve has distinct flat buffer regions
              separated by steep stoichiometric-point jumps.
            </p>
            <p>
              For a diprotic acid like oxalic acid ({`$\\text{H}_2\\text{C}_2\\text{O}_4$`}), the
              same logic gives two stoichiometric points and two buffer regions between them. It
              takes twice as much base to reach the second stoichiometric point as the first.
            </p>
          </div>
          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>
              The third stoichiometric point of phosphoric acid (where all three protons have been
              removed) is almost impossible to detect in a titration. Using only your knowledge of{' '}
              {`$K_{a3}$`}
              and {`$K_w$`}, explain why.
            </p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                {`$K_{a3}$`} for {`$\\text{H}_3\\text{PO}_4$`} is comparable in magnitude to{' '}
                {`$K_w$`}. This means water's own splitting into {`$\\text{H}_3\\text{O}^+$`} and{' '}
                {`$\\text{OH}^-$`} competes with the deprotonation of {`$\\text{HPO}_4^{2-}$`}. So
                the pH curve does not show a distinct steep rise at the third stoichiometric point.
                The jump is smeared out, and you cannot tell it apart from the general slope of the
                curve. You cannot accurately locate the endpoint.
              </p>
            </details>
          </div>
        </>
      ]
    },
    practice: [
      {
        id: 'buf-p01',
        q: 'A solution contains 0.15 M HNO₂(aq) and 0.20 M NaNO₂(aq). The pKa of HNO₂ is 3.37. Calculate the pH of this buffer solution.',
        a: 'pH = 3.49. Use Henderson–Hasselbalch: pH = pKa + log([base]/[acid]) = 3.37 + log(0.20/0.15) = 3.37 + log(1.33) = 3.37 + 0.125 = 3.49. The base concentration exceeds the acid concentration, so the log term is positive and pH > pKa, this is correct. The buffer acts on the acidic side of neutrality.',
        tags: ['designing-a-buffer', 'computation']
      },
      {
        id: 'buf-p02',
        q: 'Explain in molecular terms why a buffer resists pH change when a small amount of strong base is added. Use the acetic acid / acetate system as your example.',
        a: 'The OH⁻ ions from the strong base react with the weak acid CH₃COOH molecules rather than remaining free in solution. The reaction CH₃COOH + OH⁻ → CH₃CO₂⁻ + H₂O removes the added base and converts some acid into more conjugate base. The ratio [CH₃CO₂⁻]/[CH₃COOH] increases only slightly, so the log term in Henderson–Hasselbalch changes only a little, and pH barely moves. The conjugate acid is the proton source; it donates protons to neutralize added base.',
        tags: ['buffer-action', 'conceptual']
      },
      {
        id: 'buf-p03',
        q: 'You need a buffer at pH 7.40 for a biological experiment. The pKa of H₂PO₄⁻ is 7.21. Calculate the ratio [HPO₄²⁻]/[H₂PO₄⁻] required to achieve pH 7.40.',
        a: 'log([base]/[acid]) = pH − pKa = 7.40 − 7.21 = 0.19. Therefore [HPO₄²⁻]/[H₂PO₄⁻] = 10^0.19 = 1.55. You need about 1.55 mol of HPO₄²⁻ for every 1.00 mol of H₂PO₄⁻. The ratio is greater than 1 because the target pH (7.40) is above pKa (7.21), meaning the base form must be in excess.',
        tags: ['designing-a-buffer', 'computation']
      },
      {
        id: 'buf-p04',
        q: 'A student prepares an acetic acid/sodium acetate buffer and then adds a large excess of HCl, far more than the moles of CH₃CO₂⁻ present. What happens to the pH, and why?',
        a: 'The pH drops sharply, almost as if the added HCl were in pure water. Once all the CH₃CO₂⁻ is consumed (converted to CH₃COOH), there is no longer any conjugate base to neutralize additional H₃O⁺. The buffer is exhausted. Any further HCl added stays as free H₃O⁺ in solution, causing a large pH decrease, the buffer capacity has been exceeded.',
        tags: ['buffer-capacity', 'conceptual']
      },
      {
        id: 'buf-p05',
        q: 'Two acetate buffers have the same pH (4.75, equal concentrations of acid and base). Buffer A is 0.010 M in each component; Buffer B is 1.0 M in each. Which has greater buffer capacity, and what does this mean practically?',
        a: 'Buffer B has 100 times greater capacity. Capacity is the moles of strong acid or base that can be absorbed before pH changes significantly. Buffer B can neutralize far more added H₃O⁺ or OH⁻ before its conjugate base or acid reserve runs out. In practice, a more concentrated buffer is used when the experiment generates or uses larger amounts of protons, for example, in enzymatic reactions that produce acid as a by-product.',
        tags: ['buffer-capacity', 'conceptual']
      },
      {
        id: 'buf-p06',
        q: 'Calculate the pH at the stoichiometric point of the titration of 25.00 mL of 0.010 M HClO(aq) with 0.020 M KOH(aq). Ka for HClO is 3.0 × 10⁻⁸.',
        a: 'At the stoichiometric point, all HClO is converted to ClO⁻. Volume of KOH: n(HClO) = 0.02500 L × 0.010 M = 2.50 × 10⁻⁴ mol, so V = 2.50 × 10⁻⁴ / 0.020 = 0.01250 L = 12.5 mL. Total volume = 25.00 + 12.5 = 37.5 mL = 0.03750 L. [ClO⁻] = 2.50 × 10⁻⁴ / 0.03750 = 6.67 × 10⁻³ M. Kb = Kw/Ka = 1.0 × 10⁻¹⁴ / 3.0 × 10⁻⁸ = 3.3 × 10⁻⁷. Equilibrium: ClO⁻ + H₂O ⇌ HClO + OH⁻, so x² / 6.67 × 10⁻³ ≈ 3.3 × 10⁻⁷. x = [OH⁻] = √(3.3 × 10⁻⁷ × 6.67 × 10⁻³) = √(2.2 × 10⁻⁹) = 4.7 × 10⁻⁵ M. pOH = −log(4.7 × 10⁻⁵) = 4.33, so pH = 14.00 − 4.33 = 9.67. The solution is basic, as expected for the salt of a weak acid and strong base.',
        tags: ['weak-acid-strong-base', 'computation']
      },
      {
        id: 'buf-p07',
        q: 'At what point during a weak acid–strong base titration does pH = pKa, and how can you use this fact in the laboratory?',
        a: 'pH = pKa at the halfway point, when exactly half the original weak acid has been neutralized by the strong base. At this point [HA] = [A⁻], the log term in Henderson–Hasselbalch is zero, and pH = pKa directly. In the lab: add half the volume of base needed to reach the stoichiometric point, then measure the pH. That pH is the pKa of the weak acid. This is how you can measure the pKa of a weak acid directly from its titration curve.',
        tags: ['weak-acid-strong-base', 'applied']
      },
      {
        id: 'buf-p08',
        q: 'During a strong acid–strong base titration, a student notices the pH falls from 13.40 to 13.18 after adding 5.00 mL of acid, but then falls from about 7 to about 2 when 1.00 mL more acid is added just past the stoichiometric point. Why the enormous difference in pH change per mL?',
        a: 'Far from the stoichiometric point, a large reservoir of OH⁻ is present (here, about 6.25 mmol initially). Adding 1.70 mmol of H₃O⁺ changes the OH⁻ from 6.25 to 4.55 mmol, only a 27% change, so the pH barely moves. Near the stoichiometric point, the OH⁻ is nearly zero. A tiny addition of acid creates a significant concentration of excess H₃O⁺ from essentially nothing, causing a huge pH drop. The pH curve is steep near the equivalence point precisely because the denominator in the concentration calculation is changing from near-zero to finite.',
        tags: ['strong-acid-strong-base', 'self-explain']
      },
      {
        id: 'buf-p09',
        q: 'You are about to titrate 20.0 mL of 0.20 M NH₃(aq) with 0.10 M HCl. Before you add any acid, estimate the pH. Will the stoichiometric point pH be above, below, or equal to 7?',
        a: 'Initial pH: NH₃ is a weak base. [OH⁻] = √(Kb[NH₃]) = √(1.8 × 10⁻⁵ × 0.20) = 1.90 × 10⁻³ M. pOH = 2.72, pH = 11.28. At the stoichiometric point the solute is NH₄Cl. NH₄⁺ is a weak acid (Ka = Kw/Kb = 5.6 × 10⁻¹⁰), so it donates protons to water, the solution is acidic. The stoichiometric point pH < 7. This is the defining rule: weak base + strong acid → acidic stoichiometric point; weak acid + strong base → basic stoichiometric point.',
        tags: ['weak-base-strong-acid', 'predict']
      },
      {
        id: 'buf-p10',
        q: 'A student uses phenolphthalein (pKIn = 9.4) to detect the stoichiometric point of a titration of 0.20 M NH₃ with HCl. The stoichiometric point pH is about 5. Explain the error and suggest a better indicator.',
        a: 'Phenolphthalein changes color between pH 8.2 and 10.0 (around pKIn = 9.4). The actual stoichiometric point is at pH ≈ 5, which is far outside this range. The indicator will show its endpoint color change well before the true stoichiometric point is reached, the student will stop the titration too early. A better choice is methyl red (pKIn = 5.0, color change pH 4.8–6.0) or bromocresol green (pKIn = 4.7, color change pH 3.8–5.4), both of which signal a color change near pH 5.',
        tags: ['acid-base-indicators', 'error-detection']
      },
      {
        id: 'buf-p11',
        q: 'Blood plasma is buffered mainly by the HCO₃⁻/H₂CO₃ system with a ratio of [HCO₃⁻]/[H₂CO₃] ≈ 20. In blood, the effective (apparent) pKa of carbonic acid is 6.1. Calculate the blood pH this predicts, and explain why blood remains buffered even though this ratio is far outside the "optimal" pKa ± 1 range.',
        a: 'pH = 6.1 + log(20) = 6.1 + 1.30 = 7.40, exactly the normal blood pH. A note on the pKa: the textbook thermodynamic pKa of pure carbonic acid is 6.35, but in blood most of the "acid" is dissolved CO₂ in equilibrium with H₂CO₃. Lumping the dissolved CO₂ into the acid term shifts the effective pKa to about 6.1, which is the value you use for blood. Blood stays buffered outside pKa ± 1 because two mechanisms compensate: (1) fast breathing adjusts the CO₂ exhalation rate, which controls [H₂CO₃]; (2) the kidneys control HCO₃⁻ excretion. Active physiological control backs up the pure chemistry buffer, holding pH between 7.35 and 7.45.',
        tags: ['buffer-action', 'transfer']
      },
      {
        id: 'buf-p12',
        q: 'Why does Henderson–Hasselbalch fail when either [HA] or [A⁻] is very small, for example, if [A⁻] is only 10 times the [H₃O⁺]?',
        a: 'Henderson–Hasselbalch assumes the equilibrium concentrations of HA and A⁻ equal their initial concentrations. This is valid only when the amount that reacts (or is produced) by the proton-transfer equilibrium is negligible compared to the initial amount. If [A⁻] is small and comparable to [H₃O⁺], then equilibrium shifts consume a significant fraction of A⁻, making the approximation invalid. You must then solve the full Ka expression (quadratic) to get an accurate [H₃O⁺]. The Henderson–Hasselbalch equation is an approximation for concentrated buffers, not a universal formula.',
        tags: ['designing-a-buffer', 'elaborate']
      },
      {
        id: 'buf-p13',
        q: 'A solution is prepared by adding 55.0 mL of 0.15 M HNO₃(aq) to 45.0 mL of 0.65 M NaCH₃CO₂(aq). Calculate the pH of the resulting solution. Ka for CH₃COOH is 1.8 × 10⁻⁵.',
        a: 'Moles of HNO₃: 0.0550 × 0.15 = 8.25 × 10⁻³ mol. Moles of CH₃CO₂⁻: 0.0450 × 0.65 = 0.02925 mol. HNO₃ is a strong acid; it protonates acetate: CH₃CO₂⁻ + H₃O⁺ → CH₃COOH + H₂O. HNO₃ is limiting. Remaining CH₃CO₂⁻: 0.02925 − 8.25 × 10⁻³ = 0.02100 mol. New CH₃COOH: 8.25 × 10⁻³ mol. Total volume: 100.0 mL = 0.1000 L. [CH₃CO₂⁻] = 0.02100/0.1000 = 0.210 M; [CH₃COOH] = 8.25 × 10⁻³/0.1000 = 0.0825 M. pH = 4.75 + log(0.210/0.0825) = 4.75 + log(2.545) = 4.75 + 0.406 = 5.16.',
        tags: ['designing-a-buffer', 'computation']
      },
      {
        id: 'buf-p14',
        q: 'A 0.25 M phosphate buffer at pH 7.40 is made using H₂PO₄⁻ and HPO₄²⁻ (pKa2 = 7.21). If you need to lower the pH of this buffer to 6.80 without changing the total phosphate concentration, which component should you increase (relatively), and by how much should the ratio change?',
        a: 'At pH 7.40: log([HPO₄²⁻]/[H₂PO₄⁻]) = 7.40 − 7.21 = 0.19, so ratio = 10^0.19 = 1.55. At pH 6.80: log([HPO₄²⁻]/[H₂PO₄⁻]) = 6.80 − 7.21 = −0.41, so ratio = 10^−0.41 = 0.39. To lower the pH, you need more acid (H₂PO₄⁻) relative to base (HPO₄²⁻). The ratio drops from 1.55 to 0.39, the base/acid ratio decreases by a factor of about 4. In practice, add more H₂PO₄⁻ (monobasic phosphate) to the buffer or acidify with HCl to shift more HPO₄²⁻ to H₂PO₄⁻.',
        tags: ['designing-a-buffer', 'transfer']
      },
      {
        id: 'buf-p15',
        q: 'Calculate the pH at each of these stages in the titration of 25.00 mL of 0.10 M CH₃COOH(aq) with 0.10 M NaOH(aq): (a) initially; (b) after adding 12.50 mL of NaOH; (c) at the stoichiometric point (25.00 mL NaOH added). Ka = 1.8 × 10⁻⁵.',
        a: '(a) Initial pH: [H₃O⁺] = √(Ka × C) = √(1.8 × 10⁻⁵ × 0.10) = 1.34 × 10⁻³ M, pH = 2.87. (b) Halfway point: 12.50 mL NaOH converts half the acid to acetate; [CH₃COOH] = [CH₃CO₂⁻], log term = 0, pH = pKa = 4.75. (c) Stoichiometric point: all acid → acetate. n(CH₃CO₂⁻) = 2.50 × 10⁻³ mol, total volume = 50.00 mL, [CH₃CO₂⁻] = 0.0500 M. Kb = Kw/Ka = 5.6 × 10⁻¹⁰. x² / 0.0500 ≈ 5.6 × 10⁻¹⁰, x = [OH⁻] = 5.3 × 10⁻⁶ M. pOH = 5.28, pH = 8.72.',
        tags: ['weak-acid-strong-base', 'computation']
      },
      {
        id: 'buf-p16',
        q: 'A student calculates the stoichiometric-point pH for a weak acid–strong base titration using Ka for the acid rather than Kb for the conjugate base. What error does this produce, and why is it wrong?',
        a: 'Using Ka would calculate the equilibrium where the weak acid donates a proton to water, but at the stoichiometric point, the weak acid has all been consumed and converted to its conjugate base. The Ka equilibrium is irrelevant because the acid is no longer present. The correct equilibrium is the conjugate base accepting a proton from water, governed by Kb = Kw/Ka. Using Ka instead of Kb would produce a pH below 7 (acidic), when in fact the solution is basic. The species controlling the pH is the anion, not the original acid.',
        tags: ['weak-acid-strong-base', 'self-explain']
      },
      {
        id: 'buf-p17',
        q: 'You have phenolphthalein (pKIn = 9.4, range 8.2–10.0), methyl red (pKIn = 5.0, range 4.8–6.0), and bromocresol green (pKIn = 4.7, range 3.8–5.4). Which indicator is most suitable for: (a) 0.20 M CH₃COOH titrated with 0.20 M NaOH; (b) 0.20 M NH₃ titrated with 0.20 M HCl?',
        a: '(a) Weak acid + strong base: stoichiometric point pH > 7 (about pH 8.7 for this system). Choose phenolphthalein (pKIn = 9.4, range 8.2–10.0), its color change falls close to the stoichiometric pH and the steep part of the curve. (b) Weak base + strong acid: stoichiometric point pH < 7 (about pH 5.1 for this system). Choose bromocresol green (pKIn = 4.7, range 3.8–5.4) or methyl red (pKIn = 5.0, range 4.8–6.0). Methyl red is the better choice since its pKIn = 5.0 is closest to the stoichiometric point pH.',
        tags: ['acid-base-indicators', 'method-selection']
      },
      {
        id: 'buf-p18',
        q: 'A sample of 0.200 M H₃PO₄(aq) of volume 25.0 mL is titrated with 0.100 M NaOH(aq). How many milliliters of NaOH are needed to reach the first stoichiometric point? The second? Identify the primary species in solution at 70.0 mL NaOH added.',
        a: 'First stoichiometric point: 1 mol NaOH per mol H₃PO₄. n(H₃PO₄) = 0.0250 L × 0.200 M = 5.00 × 10⁻³ mol. V(NaOH) = 5.00 × 10⁻³ / 0.100 = 0.0500 L = 50.0 mL. Second stoichiometric point: requires 2 mol NaOH per mol H₃PO₄ total, so V = 100. mL. At 70.0 mL: this is between the first (50.0 mL) and second (100. mL) stoichiometric points. The primary species are Na⁺ (spectator), H₂PO₄⁻, and HPO₄²⁻, the system is in the second buffer region with pH near pKa2 = 7.21.',
        tags: ['polyprotic-titrations', 'predict']
      },
      {
        id: 'buf-p19',
        q: 'Describe what controls the pH at each of the five regions of a weak acid–strong base titration curve, and state the equilibrium governing the pH in each region.',
        a: 'Region 1 (before any base added): only weak acid HA present. pH governed by HA + H₂O ⇌ H₃O⁺ + A⁻, use Ka directly. Region 2 (buffer region, before stoichiometric point): both HA and A⁻ present. pH governed by the same Ka equilibrium but [HA] ≈ initial and [A⁻] ≈ initial; use Henderson–Hasselbalch. At the exact halfway point, pH = pKa. Region 3 (stoichiometric point): only A⁻ present. pH governed by A⁻ + H₂O ⇌ HA + OH⁻, use Kb = Kw/Ka. Region 4 (after stoichiometric point): excess strong base dominates. pH governed by [OH⁻] of excess NaOH; ignore weak conjugate base because strong base swamps it. Region 5 (far past stoichiometric point): pH approaches that of the pure titrant base solution.',
        tags: ['weak-acid-strong-base', 'elaborate']
      },
      {
        id: 'buf-p20',
        q: 'A buffer solution of volume 300.0 mL is 0.200 M CH₃COOH(aq) and 0.300 M NaCH₃CO₂(aq). (a) What is the initial pH? (b) What mass of NaOH must be dissolved in this solution to bring the pH to 6.0?',
        a: '(a) pH = pKa + log([base]/[acid]) = 4.75 + log(0.300/0.200) = 4.75 + log(1.50) = 4.75 + 0.176 = 4.93. (b) Target pH 6.0: log([A⁻]/[HA]) = 6.0 − 4.75 = 1.25, so [A⁻]/[HA] = 10^1.25 = 17.78. Let x = mol NaOH added. n(HA) initial = 0.300 L × 0.200 = 0.0600 mol. n(A⁻) initial = 0.300 L × 0.300 = 0.0900 mol. After adding x mol NaOH: n(HA) = 0.0600 − x; n(A⁻) = 0.0900 + x. (0.0900 + x)/(0.0600 − x) = 17.78. 0.0900 + x = 17.78(0.0600 − x) = 1.067 − 17.78x. 18.78x = 0.977. x = 0.0520 mol NaOH. Mass = 0.0520 × 40.00 g/mol = 2.08 g NaOH.',
        tags: ['designing-a-buffer', 'computation']
      },
      {
        id: 'buf-p21',
        q: 'You have four possible acid–base pairs available: (1) HCl/Cl⁻, (2) CH₃COOH/CH₃CO₂⁻ (pKa = 4.75), (3) H₂PO₄⁻/HPO₄²⁻ (pKa = 7.21), (4) NH₄⁺/NH₃ (pKa = 9.25). Which pairs can form effective buffers, and which target pH ranges do they cover?',
        a: 'HCl/Cl⁻ cannot form a buffer: HCl is a strong acid, so Cl⁻ is an extremely weak conjugate base with virtually no ability to accept protons. Adding acid to a "buffer" of this pair would not be neutralized. The other three pairs can form effective buffers in the range pKa ± 1: CH₃COOH/CH₃CO₂⁻ buffers from pH 3.75 to 5.75; H₂PO₄⁻/HPO₄²⁻ buffers from pH 6.21 to 8.21 (useful for biological work near pH 7); NH₄⁺/NH₃ buffers from pH 8.25 to 10.25. To buffer near a desired pH, choose the pair whose pKa is closest to the target.',
        tags: ['designing-a-buffer', 'method-selection']
      },
      {
        id: 'buf-p22',
        q: 'Aspirin (acetylsalicylic acid, Ka = 3.2 × 10⁻⁴) is in stomach fluid at pH 1.5 and in intestinal fluid at pH 7.4. Calculate [aspirin-anion]/[aspirin] at each pH. At which pH is aspirin mostly in the neutral acid form?',
        a: 'pKa = −log(3.2 × 10⁻⁴) = 3.49. At pH 1.5: log([A⁻]/[HA]) = 1.5 − 3.49 = −1.99, so [A⁻]/[HA] = 10⁻¹·⁹⁹ = 0.010. The acid form outnumbers the anion about 100 to 1: aspirin is almost entirely in the neutral acid form at pH 1.5. At pH 7.4: log([A⁻]/[HA]) = 7.4 − 3.49 = 3.91, so [A⁻]/[HA] = 10³·⁹¹ ≈ 8100: aspirin is almost entirely ionized at pH 7.4. So aspirin is mostly neutral acid in the stomach and mostly ionized in the intestine.',
        tags: ['designing-a-buffer', 'transfer']
      }
    ],
    reference: {
      sections: [
        {
          title: 'Core Equations',
          content: (
            <>
              <h3>Henderson–Hasselbalch Equation</h3>
              <div className="lrn-eq lrn-eq-hero">
                <span>{`$$\\text{pH} = \\text{p}K_a + \\log\\frac{[\\text{base}]_{\\text{initial}}}{[\\text{acid}]_{\\text{initial}}}$$`}</span>
              </div>
              <p>
                <strong>When to use:</strong> For any buffer containing a weak acid HA and its
                conjugate base A⁻ (or a weak base B and its conjugate acid HB⁺). Requires that the
                initial concentrations of acid and base are both much larger than{' '}
                {`$[\\text{H}_3\\text{O}^+]$`}. Gives the approximate pH directly from initial
                concentrations.
              </p>
              <p>
                <strong>Special cases:</strong> When {`$[\\text{base}] = [\\text{acid}]$`}, pH{' '}
                {`$= \\text{p}K_a$`}. This occurs at the halfway point of a weak acid–strong base
                titration, and allows you to read {`$\\text{p}K_a$`} directly from the titration
                curve.
              </p>

              <h3>Ka Expression and Rearrangement</h3>
              <p className="lrn-eq">{`$$K_a = \\frac{[\\text{H}_3\\text{O}^+][\\text{A}^-]}{[\\text{HA}]} \\implies [\\text{H}_3\\text{O}^+] = K_a \\times \\frac{[\\text{HA}]}{[\\text{A}^-]}$$`}</p>
              <p>
                <strong>When to use:</strong> When you need an exact calculation (not an
                approximation) or when concentrations are low enough that the approximation fails.
                Set up a full ICE table from the initial concentrations.
              </p>

              <h3>Buffer Capacity Range</h3>
              <p className="lrn-eq">{`$$\\text{Effective range}: \\quad \\text{p}K_a - 1 \\leq \\text{pH} \\leq \\text{p}K_a + 1$$`}</p>
              <p>
                <strong>When to use:</strong> To decide if a conjugate pair will buffer effectively
                at a target pH. If the target pH falls outside this range, choose a different
                conjugate pair.
              </p>

              <h3>Kb from Ka (Conjugate Pair)</h3>
              <p className="lrn-eq">{`$$K_a \\times K_b = K_w = 1.0 \\times 10^{-14} \\quad (25^\\circ\\text{C}) \\implies K_b = \\frac{K_w}{K_a}$$`}</p>
              <p>
                <strong>When to use:</strong> At the stoichiometric point of a weak acid–strong base
                titration, the solution contains only the conjugate base A⁻. Use Kb to find
                {` $[\\text{OH}^-]$`}, then convert to pH via pOH.
              </p>

              <h3>pH from pOH</h3>
              <p className="lrn-eq">{`$$\\text{pH} + \\text{pOH} = \\text{p}K_w = 14.00 \\quad (25^\\circ\\text{C})$$`}</p>
              <p>
                <strong>When to use:</strong> Whenever the calculation gives {`$[\\text{OH}^-]$`}{' '}
                rather than {`$[\\text{H}_3\\text{O}^+]$`}, for example, in base-excess
                calculations during strong acid–strong base titrations or at the stoichiometric
                point of weak acid titrations.
              </p>

              <h3>Indicator End Point</h3>
              <p className="lrn-eq">{`$$\\text{pH}_{\\text{end point}} = \\text{p}K_{\\text{In}} \\quad \\text{(when } [\\text{HIn}] = [\\text{In}^-]\\text{)}$$`}</p>
              <p>
                <strong>When to use:</strong> To find the pH at which an indicator changes color, or
                to select an indicator whose end point matches the stoichiometric point pH. Rule:{' '}
                {`$\\text{p}K_{\\text{In}} \\approx \\text{pH}_{\\text{stoichiometric}} \\pm 1$`}.
              </p>
            </>
          )
        },
        {
          title: 'Titration Stoichiometry Procedure',
          content: (
            <>
              <h3>Strong Acid–Strong Base (5 Steps)</h3>
              <ol className="lrn-list">
                <li>
                  Find moles of {`$\\text{H}_3\\text{O}^+$`} (or {`$\\text{OH}^-$`}) in the analyte:
                  moles = volume × concentration.
                </li>
                <li>
                  Find moles of {`$\\text{OH}^-$`} (or {`$\\text{H}_3\\text{O}^+$`}) in the added
                  titrant: moles = volume × concentration.
                </li>
                <li>Subtract to find moles of excess species after neutralization.</li>
                <li>Divide by total volume to get the concentration of the excess species.</li>
                <li>
                  If acid excess: {`$\\text{pH} = -\\log[\\text{H}_3\\text{O}^+]$`}. If base excess:{' '}
                  {`$\\text{pOH} = -\\log[\\text{OH}^-]$`}, then pH = 14 − pOH.
                </li>
              </ol>

              <h3>Weak Acid–Strong Base (5 Steps)</h3>
              <ol className="lrn-list">
                <li>
                  Calculate moles of weak acid initially: {`$n = V_{\\text{analyte}}[\\text{HA}]$`}.
                </li>
                <li>
                  Calculate moles of {`$\\text{OH}^-$`} added:{' '}
                  {`$n = V_{\\text{titrant}}[\\text{OH}^-]$`}.
                </li>
                <li>OH⁻ reacts 1:1 with HA → A⁻. Find moles of HA remaining and A⁻ formed.</li>
                <li>
                  Find molarities from total volume:{' '}
                  {`$V = V_{\\text{analyte}} + V_{\\text{titrant}}$`}.
                </li>
                <li>
                  If both HA and A⁻ remain: use Henderson–Hasselbalch. If only A⁻ remains: use{' '}
                  {`$K_b = \\frac{K_w}{K_a}$`} equilibrium for A⁻ in water.
                </li>
              </ol>

              <h3>Polyprotic Acid Titration Key Rules</h3>
              <ul className="lrn-list">
                <li>Number of stoichiometric points = number of acidic protons.</li>
                <li>
                  Protons are removed in order of decreasing {`$K_a$`} (strongest acid first).
                </li>
                <li>
                  Each stoichiometric point requires 1 additional mol {`$\\text{OH}^-$`} per mol of
                  polyprotic acid.
                </li>
                <li>
                  At each buffer region halfway point: {`$\\text{pH} = \\text{p}K_{an}$`} for that
                  step.
                </li>
                <li>
                  If {`$K_{an} \\approx K_w$`}, the corresponding stoichiometric point is
                  undetectable.
                </li>
              </ul>
            </>
          )
        },
        {
          title: 'Indicator Color Change Table',
          content: (
            <table className="lrn-table">
              <thead>
                <tr>
                  <th>Indicator</th>
                  <th>{`$\\text{p}K_{\\text{In}}$`}</th>
                  <th>pH range</th>
                  <th>Acid color</th>
                  <th>Base color</th>
                  <th>Best for</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Methyl orange</td>
                  <td>3.4</td>
                  <td>3.2–4.4</td>
                  <td>Red</td>
                  <td>Yellow</td>
                  <td>Weak base + strong acid</td>
                </tr>
                <tr>
                  <td>Methyl red</td>
                  <td>5.0</td>
                  <td>4.8–6.0</td>
                  <td>Red</td>
                  <td>Yellow</td>
                  <td>Weak base + strong acid</td>
                </tr>
                <tr>
                  <td>Bromothymol blue</td>
                  <td>7.1</td>
                  <td>6.0–7.6</td>
                  <td>Yellow</td>
                  <td>Blue</td>
                  <td>Strong acid + strong base</td>
                </tr>
                <tr>
                  <td>Phenolphthalein</td>
                  <td>9.4</td>
                  <td>8.2–10.0</td>
                  <td>Colorless</td>
                  <td>Pink</td>
                  <td>Weak acid + strong base</td>
                </tr>
              </tbody>
            </table>
          )
        },
        {
          title: 'Stoichiometric Point pH Summary',
          content: (
            <table className="lrn-table">
              <thead>
                <tr>
                  <th>Titration type</th>
                  <th>Stoichiometric point pH</th>
                  <th>Why</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Strong acid + strong base</td>
                  <td>pH = 7</td>
                  <td>Salt of strong acid + strong base; neither ion reacts with water.</td>
                </tr>
                <tr>
                  <td>Weak acid + strong base</td>
                  <td>pH {'>'} 7</td>
                  <td>
                    Salt has basic anion (conjugate base of weak acid); accepts protons from water.
                  </td>
                </tr>
                <tr>
                  <td>Weak base + strong acid</td>
                  <td>pH {'<'} 7</td>
                  <td>
                    Salt has acidic cation (conjugate acid of weak base); donates protons to water.
                  </td>
                </tr>
                <tr>
                  <td>Polyprotic acid (each step)</td>
                  <td>Depends on {`$K_a$`} of intermediate</td>
                  <td>Treat each stage as a separate weak acid or base equilibrium.</td>
                </tr>
              </tbody>
            </table>
          )
        }
      ]
    }
  }
  return <LearningTemplate config={config} />
}
