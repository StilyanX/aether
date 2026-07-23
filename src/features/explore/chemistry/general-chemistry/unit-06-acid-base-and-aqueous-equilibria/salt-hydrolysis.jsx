import { LearningTemplate } from '../../../../../components/learning/learning-template'
import { SaltHydrolysisMapViz, SaltPHParentStrengthViz } from '../../../../../components/viz'

function useConfig() {
  const config = {
    cssPrefix: 'chem-salt-hydrolysis',
    documentTitle: 'Salt Hydrolysis - AETHER',
    customCss: null,
    learning: {
      category: 'Unit 6',
      groupTitle: 'Acid-Base and Aqueous Equilibria',
      title: 'Salt Hydrolysis',
      subtitle:
        'Why some salts make water acidic, others basic, and others neutral, and how to calculate the pH of any salt solution.',
      sections: [
        <>
          <div className="lrn-header">
            <h2>What Is Salt Hydrolysis?</h2>
          </div>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              You dissolve table salt (NaCl) in water and dissolve sodium acetate (NaCH₃COO) in
              water. Both are salts. One solution is neutral, one is basic. Which is which, and why?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                NaCl is neutral. NaCH₃COO is basic. The acetate ion (CH₃COO⁻) is the conjugate base
                of a weak acid. (A conjugate base is what an acid becomes after it gives away its
                proton.) It accepts a proton from water, raising the pH. The chloride ion is the
                conjugate base of a strong acid and does nothing to water.
              </p>
            </details>
          </div>
          <p>
            Start with the basics. A salt is the ionic compound left over when an acid and a base
            react. It is built from a positive cation and a negative anion. When you drop it in
            water, the two ions separate and float free.
          </p>
          <p>
            The word hydrolysis means "splitting with water." In acid-base chemistry it means an ion
            reacts with water and shifts the pH. So <strong>salt hydrolysis</strong> is the reaction
            of a dissolved ion with water that changes the pH of the solution. It is what makes a
            dissolved salt give a pH that is not 7.
          </p>
          <p>
            This idea answers two kinds of question. First, what is the pH of a salt solution?
            Second, why is the stoichiometric point of a titration not neutral? (The stoichiometric
            point is the moment when you have added exactly enough to react with everything.)
          </p>
          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>
              Every salt breaks into a cation and an anion when it dissolves. Whether those ions
              react with water depends on where they came from. An ion that came from a weak acid or
              weak base still has leftover acid-base character. It carries that character into the
              new solution.
            </p>
            <p>
              An ion from a strong acid or strong base has no leftover character. Strong acids and
              bases give up their protons completely. The resulting ion has no tendency to take one
              back.
            </p>
          </div>
          <div className="lrn-insight">
            <p>
              The key question for any salt is: does either ion come from a weak acid or a weak
              base? If yes, that ion will react with water and shift the pH.
            </p>
          </div>
          <h3>The Four Cases</h3>
          <p>
            Every salt fits into one of four cases. You identify the parent acid and parent base
            first, then read off the result. The parent acid and parent base are the acid and base
            that reacted to make the salt.
          </p>
          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Strong acid + strong base</span>
              <p>
                No hydrolysis. Neither ion reacts with water. The solution is neutral at pH = 7.
                Example: NaCl (from HCl and NaOH).
              </p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Strong acid + weak base</span>
              <p>
                Cation hydrolysis. The cation from the weak base donates a proton to water. This
                means it acts as an acid and releases H₃O⁺ into solution. pH is below 7. Example:
                NH₄Cl.
              </p>
            </div>
          </div>
          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Weak acid + strong base</span>
              <p>
                Anion hydrolysis. The anion from the weak acid accepts a proton from water, so it
                acts as a base. OH⁻ builds up in solution. pH is above 7. Example: NaCH₃COO.
              </p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Weak acid + weak base</span>
              <p>
                Both ions hydrolyze. The pH depends on which is stronger. If {`$K_a \\approx K_b$`}{' '}
                the solution is roughly neutral. If {`$K_a > K_b$`} the solution is acidic; if{' '}
                {`$K_b > K_a$`} it is basic.
              </p>
            </div>
          </div>
          <SaltHydrolysisMapViz />
          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>
              NH₄Cl comes from NH₃ (a weak base) and HCl (a strong acid). Which ion hydrolyzes, and
              what does it do to the pH?
            </p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                The NH₄⁺ cation hydrolyzes. It donates a proton to water:{' '}
                {`$\\text{NH}_4^+ + \\text{H}_2\\text{O} \\rightleftharpoons \\text{NH}_3 + \\text{H}_3\\text{O}^+$`}
                . This releases H₃O⁺ into solution, so the pH drops below 7.
              </p>
            </details>
          </div>
        </>,

        <>
          <div className="lrn-header">
            <h2>Anion Hydrolysis: Salts of Weak Acids</h2>
          </div>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              You dissolve sodium formate (NaCHO₂) in water. The formate ion CHO₂⁻ is the conjugate
              base of formic acid. Before calculating, predict whether the pH is above 7, below 7,
              or exactly 7.
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                Above 7. Formate is the conjugate base of a weak acid, so it accepts a proton from
                water and releases OH⁻, making the solution basic.
              </p>
            </details>
          </div>
          <p>
            When a salt of a weak acid dissolves, its anion acts as a base. The hydrolysis reaction
            is:
          </p>
          <p>
            This happens whenever the salt pairs a weak-acid anion (like acetate, formate, or
            cyanide) with a strong-base cation such as Na⁺ or K⁺.
          </p>
          <div className="lrn-eq lrn-eq-hero">{`$$\\text{A}^-(aq) + \\text{H}_2\\text{O}(l) \\rightleftharpoons \\text{HA}(aq) + \\text{OH}^-(aq)$$`}</div>
          <p>
            The equilibrium constant for this reaction is {`$K_b$`} for the anion. (The equilibrium
            constant is the number that says how far the reaction goes.) A conjugate pair always
            obeys {`$K_a \\times K_b = K_w$`}, so {`$K_b = K_w/K_a$`}:
          </p>
          <div className="lrn-eq lrn-eq-hero">{`$$K_a \\times K_b = K_w = 1.00 \\times 10^{-14} \\quad \\Rightarrow \\quad K_b = \\frac{K_w}{K_a}$$`}</div>
          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>
              A weak acid has a small {`$K_a$`}. Since {`$K_a \\times K_b = K_w$`} is fixed, its
              conjugate base must have a large {`$K_b$`}, so it hydrolyzes more.
            </p>
          </div>
          <h3>Worked Example: pH of Sodium Formate Solution</h3>
          <p>Find the pH of 0.10 M NaCHO₂. Formic acid {`$K_a = 1.77 \\times 10^{-4}$`}.</p>
          <div className="lrn-steps">
            <div className="lrn-step">
              <span className="lrn-step-title">Step 1, Find {`$K_b$`} for the formate ion</span>
              <p className="lrn-step-content">
                {`$$K_b(\\text{CHO}_2^-) = \\frac{K_w}{K_a} = \\frac{1.00 \\times 10^{-14}}{1.77 \\times 10^{-4}} = 5.65 \\times 10^{-11}$$`}
              </p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">Step 2, Set up the ICE table</span>
              <p className="lrn-step-content">
                The hydrolysis reaction is{' '}
                {`$\\text{CHO}_2^- + \\text{H}_2\\text{O} \\rightleftharpoons \\text{HCHO}_2 + \\text{OH}^-$`}
                . Initial: {`$[\\text{CHO}_2^-] = 0.10$`} M, {`$[\\text{OH}^-] = 0$`}. Let{' '}
                {`$x = [\\text{OH}^-]$`} at equilibrium.
              </p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">Step 3, Solve for x</span>
              <p className="lrn-step-content">
                {`$$K_b = \\frac{x^2}{0.10 - x} \\approx \\frac{x^2}{0.10} = 5.65 \\times 10^{-11}$$`}
              </p>
              <p className="lrn-step-content">
                {`$$x = \\sqrt{0.10 \\times 5.65 \\times 10^{-11}} = 2.38 \\times 10^{-6}\\ \\text{M}$$`}
              </p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">Step 4, Find pH</span>
              <p className="lrn-step-content">
                {`$$\\text{pOH} = -\\log(2.38 \\times 10^{-6}) = 5.62$$`}
              </p>
              <p className="lrn-step-content">{`$$\\text{pH} = 14 - 5.62 = 8.38 \\quad (\\text{at } 25\\,^{\\circ}\\text{C})$$`}</p>
            </div>
          </div>
          <p>You can now compute the pH of any weak-acid salt.</p>
          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>
              Why is the approximation {`$0.10 - x \\approx 0.10$`} valid here, and how would you
              check it?
            </p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                Because {`$K_b = 5.65 \\times 10^{-11}$`} is very small, very little hydrolysis
                occurs. {`$x = 2.38 \\times 10^{-6}$`} is only 0.0024% of 0.10 M, well under the 5%
                rule. The approximation is valid.
              </p>
            </details>
          </div>
          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>
              If you halved the formate concentration from 0.10 M to 0.050 M, why would{' '}
              {`$[\\text{OH}^-]$`} drop only a little, and the pH barely move?
            </p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                {`$[\\text{OH}^-] \\propto \\sqrt{C}$`} (the hydroxide concentration scales with the
                square root of the salt concentration C). Halving C cuts {`$[\\text{OH}^-]$`} by a
                factor of only {`$\\sqrt{2} \\approx 1.41$`}. That changes pOH by just{' '}
                {`$\\frac{1}{2}\\log 2 \\approx 0.15$`} units. The square root compresses the
                change, so the pH barely moves.
              </p>
            </details>
          </div>
        </>,

        <>
          <div className="lrn-header">
            <h2>Cation Hydrolysis: Salts of Weak Bases</h2>
          </div>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              You dissolve ammonium chloride (NH₄Cl) in water. NH₄⁺ is the conjugate acid of
              ammonia. (A conjugate acid is what a base becomes after it grabs a proton.) Before
              calculating, predict whether the pH is above 7, below 7, or exactly 7.
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                Below 7. NH₄⁺ is the conjugate acid of a weak base. It donates a proton to water,
                releasing H₃O⁺ and making the solution acidic.
              </p>
            </details>
          </div>
          <p>
            When a salt of a weak base dissolves, its cation acts as an acid. The cation donates a
            proton to water. This happens whenever a salt contains an ammonium-type cation or any
            cation that came from a weak base.
          </p>
          <div className="lrn-eq lrn-eq-hero">{`$$\\text{BH}^+(aq) + \\text{H}_2\\text{O}(l) \\rightleftharpoons \\text{B}(aq) + \\text{H}_3\\text{O}^+(aq)$$`}</div>
          <p>The equilibrium constant is {`$K_a$`} of the cation:</p>
          <div className="lrn-eq lrn-eq-hero">{`$$K_a(\\text{BH}^+) = \\frac{K_w}{K_b(\\text{B})}$$`}</div>
          <p>
            A weak base has a small {`$K_b$`}. Its conjugate acid therefore has a large {`$K_a$`}
            and hydrolyzes more strongly, so the solution is more acidic.
          </p>
          <h3>Worked Example: pH of Ammonium Chloride Solution</h3>
          <p>Find the pH of 0.15 M NH₄Cl. {`$K_b(\\text{NH}_3) = 1.8 \\times 10^{-5}$`}.</p>
          <div className="lrn-steps">
            <div className="lrn-step">
              <span className="lrn-step-title">Step 1, Find {`$K_a$`} of NH₄⁺</span>
              <p className="lrn-step-content">
                {`$$K_a(\\text{NH}_4^+) = \\frac{K_w}{K_b(\\text{NH}_3)} = \\frac{1.00 \\times 10^{-14}}{1.8 \\times 10^{-5}} = 5.6 \\times 10^{-10}$$`}
              </p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">Step 2, Set up the ICE table</span>
              <p className="lrn-step-content">
                Reaction:{' '}
                {`$\\text{NH}_4^+ + \\text{H}_2\\text{O} \\rightleftharpoons \\text{NH}_3 + \\text{H}_3\\text{O}^+$`}
                . Initial: 0.15 M NH₄⁺, 0 M H₃O⁺. Let {`$x = [\\text{H}_3\\text{O}^+]$`}.
              </p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">Step 3, Solve for x</span>
              <p className="lrn-step-content">
                {`$$K_a = \\frac{x^2}{0.15 - x} \\approx \\frac{x^2}{0.15} = 5.6 \\times 10^{-10}$$`}
              </p>
              <p className="lrn-step-content">
                {`$$x = [\\text{H}_3\\text{O}^+] = \\sqrt{0.15 \\times 5.6 \\times 10^{-10}} = 9.2 \\times 10^{-6}\\ \\text{M}$$`}
              </p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">Step 4, pH</span>
              <p className="lrn-step-content">
                {`$$\\text{pH} = -\\log(9.2 \\times 10^{-6}) = 5.04$$`}
              </p>
            </div>
          </div>
          <p>You can now compute the pH of any weak-base salt.</p>
          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>
              Aniline (C₆H₅NH₂) is a weaker base than ammonia ({`$K_b = 3.9 \\times 10^{-10}$`}).
              Would a 0.15 M solution of anilinium chloride be more or less acidic than 0.15 M
              NH₄Cl?
            </p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                More acidic. Aniline is a weaker base ({`$K_b$`} is smaller), so its conjugate acid
                (anilinium, C₆H₅NH₃⁺) has a larger {`$K_a = \\frac{K_w}{K_b}$`}. A larger {`$K_a$`}{' '}
                means more proton donation and a lower pH.
              </p>
            </details>
          </div>
          <h3>Hydrated Metal Cations as Acids</h3>
          <p>
            Highly charged metal ions in water act as acids. The metal ion pulls electron density
            from O, H bonds in surrounding water molecules. This makes it easier for those O, H bonds
            to release a proton. The result: the hydrated ion acts like an acid.
          </p>
          <p>Example. Fe³⁺ in water:</p>
          <div className="lrn-eq">{`$$\\text{Fe}(\\text{H}_2\\text{O})_6^{3+}(aq) \\rightleftharpoons [\\text{Fe}(\\text{OH})(\\text{H}_2\\text{O})_5]^{2+}(aq) + \\text{H}^+(aq)$$`}</div>
          <p>
            This is why solutions of Fe³⁺, Al³⁺, and Cr³⁺ salts are acidic. Larger charge and
            smaller radius make a metal ion a stronger acid because it pulls harder on the O, H bond.
          </p>
          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>
              The cation's job is to donate a proton. A weak base holds its proton loosely, so it
              has a small Kb. Its conjugate acid then holds that proton even more loosely. That
              gives the conjugate acid a large Ka, so it gives the proton up easily.
            </p>
            <p>
              The same logic explains hydrated metal ions. A high charge packed into a small radius
              pulls electron density off the O, H bonds. That weakens the bonds and lets the proton
              leave. So a smaller, more highly charged ion is the stronger acid.
            </p>
          </div>
          <div className="lrn-callout lrn-tip">
            <p>
              The stoichiometric point of a <strong>weak base</strong> +{' '}
              <strong>strong acid</strong> titration is always <strong>below 7</strong>. The
              endpoint solution is a solution of the conjugate acid, which hydrolyzes to give H₃O⁺.
            </p>
          </div>
        </>,

        <>
          <div className="lrn-header">
            <h2>Salts of Weak Acids and Weak Bases</h2>
          </div>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              Ammonium acetate (NH₄CH₃COO) has both a cation from a weak base (NH₄⁺) and an anion
              from a weak acid (CH₃COO⁻). Both will hydrolyze. Without any calculation, what
              determines whether the pH ends up above, below, or at 7?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                The relative strengths of the acid and base. If{' '}
                {`$K_a(\\text{NH}_4^+) = K_b(\\text{CH}_3\\text{COO}^-)$`}, the solution is neutral.
                If the cation is a stronger acid than the anion is a base, the solution is acidic.
                If the anion is a stronger base, the solution is basic.
              </p>
            </details>
          </div>
          <p>
            When both the cation and anion hydrolyze, both reactions pull the pH in opposite
            directions. The net pH depends on which effect wins.
          </p>
          <p>
            This case appears whenever both ions come from weak parents. A weak-base cation pairs
            with a weak-acid anion, like ammonium acetate.
          </p>
          <p>
            The rule is simple. Compare {`$K_a$`} of the cation with {`$K_b$`} of the anion:
          </p>
          <ul className="lrn-list">
            <li>
              If {`$K_a(\\text{cation}) > K_b(\\text{anion})$`}: the cation releases more H₃O⁺ than
              the anion soaks up. Solution is acidic.
            </li>
            <li>
              If {`$K_a(\\text{cation}) < K_b(\\text{anion})$`}: the anion removes more H₃O⁺ than
              the cation releases. Solution is basic.
            </li>
            <li>If {`$K_a(\\text{cation}) \\approx K_b(\\text{anion})$`}: roughly neutral.</li>
          </ul>
          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>
              Ammonium acetate is the classic example.{' '}
              {`$K_a(\\text{NH}_4^+) = 5.6 \\times 10^{-10}$`} and{' '}
              {`$K_b(\\text{CH}_3\\text{COO}^-) = 5.6 \\times 10^{-10}$`}. They are equal because
              acetic acid and ammonia have ionization constants of the same size. The two effects
              cancel exactly, giving pH = 7.
            </p>
          </div>
          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Ammonium acetate (pH = 7)</span>
              <p>
                {`$K_a(\\text{NH}_4^+) = K_b(\\text{CH}_3\\text{COO}^-)$`}. Both hydrolysis
                reactions are equally strong. The effects cancel. Solution is neutral despite being
                made entirely from weak acid and weak base.
              </p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Ammonium formate (slightly acidic)</span>
              <p>
                {`$K_a(\\text{NH}_4^+) = 5.6 \\times 10^{-10}$`}, but{' '}
                {`$K_b(\\text{CHO}_2^-) = 5.6 \\times 10^{-11}$`}. The cation is 10 times a stronger
                acid than the anion is a base. The solution is slightly acidic.
              </p>
            </div>
          </div>
          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>
              For a salt of a weak acid and a weak base, why is it not useful to do a full ICE table
              for each hydrolysis reaction separately?
            </p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                Because the two reactions are coupled: the H₃O⁺ released by the cation is consumed
                by the anion, and vice versa. Treating them separately ignores this coupling and
                gives wrong answers. The comparison of {`$K_a$`} and {`$K_b$`} gives the correct
                direction without needing the full calculation.
              </p>
            </details>
          </div>
        </>,

        <>
          <div className="lrn-header">
            <h2>Salt Hydrolysis and Titration Curves</h2>
          </div>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              You titrate a weak base with a strong acid. At the stoichiometric point you have made
              a solution of BH⁺Cl⁻. Is the pH at the endpoint above 7, below 7, or exactly 7?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                Below 7. BH⁺ is the conjugate acid of the weak base. It hydrolyzes to release H₃O⁺,
                making the solution acidic.
              </p>
            </details>
          </div>
          <p>
            At the stoichiometric point of a titration, all the weak acid (or base) has turned into
            its salt. So the endpoint is just a salt solution. You already know how to find its pH:
            run the four-case rule and the calculation from this page on that salt.
          </p>
          <p>
            This is why a weak-acid titration ends basic and a weak-base titration ends acidic. The
            new idea here is how far from 7 it lands. The weaker the parent acid (the smaller its{' '}
            {`$K_a$`}), the stronger its conjugate base, so the more basic the endpoint. A very weak
            acid gives a strongly basic endpoint. A moderately weak acid gives a mildly basic one.
          </p>
          <SaltPHParentStrengthViz />
          <p>
            The full titration curve and the matching indicator choice are their own topic. Here you
            only need the salt's single pH.
          </p>
        </>,

        <>
          <div className="lrn-header">
            <h2>Identifying and Predicting Hydrolysis: Decision Tool</h2>
          </div>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              You are handed a bottle of potassium fluoride (KF). Before reading the steps below,
              predict whether its solution is acidic, basic, or neutral. Name the parent acid and
              parent base in your head first.
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                Basic. The parent acid is HF, a weak acid, so F⁻ hydrolyzes and releases OH⁻. The
                parent base is KOH, a strong base, so K⁺ does nothing. Weak acid plus strong base
                gives a basic solution.
              </p>
            </details>
          </div>
          <p>
            Here is the checklist you have already used, written out as five steps. Run it on any
            salt to get a fast prediction before you start the full calculation.
          </p>
          <div className="lrn-steps">
            <div className="lrn-step">
              <span className="lrn-step-title">Step 1, Identify the cation and anion</span>
              <p className="lrn-step-content">
                Write the salt formula and break it into its ions. Example: NH₄CN → NH₄⁺ and CN⁻.
              </p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">Step 2, Identify the parent acid and base</span>
              <p className="lrn-step-content">
                Find what acid produced the anion and what base produced the cation. For NH₄CN:
                parent acid = HCN (weak), parent base = NH₃ (weak).
              </p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">Step 3, Apply the four-case rule</span>
              <p className="lrn-step-content">
                Use the four-case rule from the first section to read off the pH direction from the
                parent strengths.
              </p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">
                Step 4, Calculate {`$K_b$`} or {`$K_a$`} for the hydrolyzing ion
              </span>
              <p className="lrn-step-content">
                Use {`$K_b = \\frac{K_w}{K_a}$`} (for anion hydrolysis) or{' '}
                {`$K_a = \\frac{K_w}{K_b}$`} (for cation hydrolysis).
              </p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">Step 5, Solve the equilibrium</span>
              <p className="lrn-step-content">
                Set up the hydrolysis equilibrium, let {`$x$`} = concentration of OH⁻ (or H₃O⁺)
                produced, use the small-x approximation if {`$K \\ll C$`} (C is the salt's starting
                concentration), and solve for pH.
              </p>
            </div>
          </div>
          <div className="lrn-insight">
            <p>
              The step that trips most students: use the conjugate's {`$K$`}, not the parent's.
              Solve anion hydrolysis as a weak-base problem and cation hydrolysis as a weak-acid
              problem.
            </p>
          </div>
          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>
              The whole prediction reduces to one question asked twice: was each parent strong or
              weak? An ion from a strong parent is a spectator (it does not react with water). An
              ion from a weak parent hydrolyzes.
            </p>
          </div>
        </>
      ]
    },
    practice: [
      {
        q: 'Does a solution of KCl have pH above 7, below 7, or exactly 7? Explain using hydrolysis reasoning.',
        a: 'Exactly 7. KCl comes from KOH (strong base) and HCl (strong acid). Neither K⁺ nor Cl⁻ hydrolyzes. K⁺ is the cation of a strong base, so it has no tendency to accept a proton from water. Cl⁻ is the anion of a strong acid, so it has no tendency to accept a proton from water. No hydrolysis means no shift in pH.'
      },
      {
        q: 'A 0.20 M solution of sodium cyanide (NaCN) is prepared. Ka(HCN) = 4.9 × 10⁻¹⁰. Predict qualitatively whether the solution is acidic, basic, or neutral, then calculate the pH.',
        a: 'Basic. CN⁻ is the conjugate base of the weak acid HCN. It hydrolyzes: CN⁻ + H₂O ⇌ HCN + OH⁻. Kb(CN⁻) = Kw / Ka = (1.00 × 10⁻¹⁴) / (4.9 × 10⁻¹⁰) = 2.04 × 10⁻⁵. Using the ICE table: [OH⁻] = √(Kb × 0.20) = √(2.04 × 10⁻⁵ × 0.20) = √(4.08 × 10⁻⁶) = 2.02 × 10⁻³ M. pOH = −log(2.02 × 10⁻³) = 2.69. pH = 14 − 2.69 = 11.31.'
      },
      {
        q: 'You dissolve pyridinium chloride (C₅H₅NHCl) in water. Pyridine has Kb = 1.7 × 10⁻⁹. Is the solution acidic or basic? Calculate the pH of 0.10 M pyridinium chloride.',
        a: 'Acidic. Pyridinium ion (C₅H₅NH⁺) is the conjugate acid of the weak base pyridine. It donates a proton to water: C₅H₅NH⁺ + H₂O ⇌ C₅H₅N + H₃O⁺. Ka(C₅H₅NH⁺) = Kw / Kb = (1.00 × 10⁻¹⁴) / (1.7 × 10⁻⁹) = 5.9 × 10⁻⁶. [H₃O⁺] = √(Ka × 0.10) = √(5.9 × 10⁻⁷) = 7.68 × 10⁻⁴ M. pH = −log(7.68 × 10⁻⁴) = 3.11.'
      },
      {
        q: 'Explain why the stoichiometric point of a titration of acetic acid with NaOH is above pH 7, not at 7.',
        a: 'At the stoichiometric point, all acetic acid has been converted to sodium acetate (NaCH₃COO). The acetate ion (CH₃COO⁻) is the conjugate base of the weak acid acetic acid. It hydrolyzes: CH₃COO⁻ + H₂O ⇌ CH₃COOH + OH⁻. This reaction releases OH⁻ into solution, raising the pH above 7. The pH at the endpoint is above 7. This is not because of excess NaOH, but because of anion hydrolysis of the salt formed.'
      },
      {
        q: 'You dissolve sodium acetate (NaCH₃COO) to make a 0.10 M solution. Ka(CH₃COOH) = 1.8 × 10⁻⁵. Calculate the pH.',
        a: 'Acetate is the conjugate base of the weak acid acetic acid, so it hydrolyzes: CH₃COO⁻ + H₂O ⇌ CH₃COOH + OH⁻. First find Kb of acetate: Kb = Kw / Ka = (1.00 × 10⁻¹⁴) / (1.8 × 10⁻⁵) = 5.6 × 10⁻¹⁰. Now solve for [OH⁻] using x² / C = Kb: [OH⁻] = √(Kb × C) = √(5.6 × 10⁻¹⁰ × 0.10) = √(5.6 × 10⁻¹¹) = 7.48 × 10⁻⁶ M. pOH = −log(7.48 × 10⁻⁶) = 5.13. pH = 14 − 5.13 = 8.87 (at 25°C). The solution is basic, as expected for a weak-acid salt.'
      },
      {
        q: 'Which of the following salts produces a basic solution when dissolved in water: KCl, NaF, NH₄Br, or Na₂SO₄? Explain your reasoning for each.',
        a: 'NaF and Na₂SO₄ produce basic solutions. NaF: F⁻ is the conjugate base of the weak acid HF (Ka = 6.8 × 10⁻⁴). F⁻ hydrolyzes to give OH⁻, so it is basic. Na₂SO₄: SO₄²⁻ is the conjugate base of HSO₄⁻ (a weak acid). It hydrolyzes slightly, so it is mildly basic. KCl: both ions come from a strong acid and a strong base, so it is neutral. NH₄Br: NH₄⁺ from weak base NH₃ hydrolyzes to give H₃O⁺, so it is acidic.'
      },
      {
        q: 'Transfer question: A student argues that adding any sodium salt to pure water must always give pH = 7 because Na⁺ is spectator ion. Identify the flaw in this reasoning.',
        a: 'The flaw is ignoring the anion. Na⁺ is indeed a spectator (it does not hydrolyze). But the anion of the salt may come from a weak acid. If so, the anion hydrolyzes and raises the pH above 7. For example, NaF gives a basic solution because F⁻ hydrolyzes. The pH depends on the anion, not the Na⁺.'
      },
      {
        q: 'Ammonium acetate (NH₄CH₃COO) dissolves in water. Ka(CH₃COOH) = 1.8 × 10⁻⁵, Kb(NH₃) = 1.8 × 10⁻⁵. Predict the pH and explain without a full ICE table calculation.',
        a: 'pH ≈ 7. Both ions hydrolyze: NH₄⁺ acts as an acid with Ka = Kw / Kb(NH₃) = 5.6 × 10⁻¹⁰, and CH₃COO⁻ acts as a base with Kb = Kw / Ka(CH₃COOH) = 5.6 × 10⁻¹⁰. The Ka of the cation equals the Kb of the anion. Both hydrolysis reactions are equally strong and cancel each other. The net effect on pH is zero, so pH = 7 even though neither ion is from a strong acid or base.'
      },
      {
        q: 'Error detection: A student says "To find the pH of a 0.10 M NaCH₃COO solution, I use Ka(CH₃COOH) = 1.8 × 10⁻⁵ directly in my ICE table with x² / 0.10 = Ka." Find the error.',
        a: 'The error is using Ka of the parent acid instead of Kb of the anion. NaCH₃COO undergoes anion hydrolysis (base reaction), not acid dissociation. The correct equilibrium constant is Kb(CH₃COO⁻) = Kw / Ka = (1.00 × 10⁻¹⁴) / (1.8 × 10⁻⁵) = 5.6 × 10⁻¹⁰. Using Ka gives a completely wrong (much lower) pH and the wrong direction of pH shift.'
      },
      {
        q: 'A 0.20 M solution of NH₄NO₃ has Ka(NH₄⁺) = 5.6 × 10⁻¹⁰. Calculate [H₃O⁺] and pH.',
        a: '[H₃O⁺] = √(Ka × C) = √(5.6 × 10⁻¹⁰ × 0.20) = √(1.12 × 10⁻¹⁰) = 1.06 × 10⁻⁵ M. pH = −log(1.06 × 10⁻⁵) = 4.98. The solution is acidic because NH₄⁺ is the conjugate acid of the weak base NH₃. It donates a proton to water, releasing H₃O⁺.'
      },
      {
        q: 'Transfer question: Bleach is a solution of NaOCl. Ka(HOCl) = 3.0 × 10⁻⁸. Explain why bleach is basic and estimate whether [OH⁻] is larger or smaller than in a 0.10 M NaCH₃COO solution.',
        a: 'Bleach is basic because OCl⁻ is the conjugate base of HOCl, a weak acid. OCl⁻ hydrolyzes: OCl⁻ + H₂O ⇌ HOCl + OH⁻. Kb(OCl⁻) = Kw / Ka = (1.00 × 10⁻¹⁴) / (3.0 × 10⁻⁸) = 3.3 × 10⁻⁷. Compare to Kb(CH₃COO⁻) = 5.6 × 10⁻¹⁰. The Kb for OCl⁻ is about 600 times larger. At similar concentrations, [OH⁻] is much larger in NaOCl. Bleach is much more basic than sodium acetate.'
      },
      {
        q: 'Predict whether iron(III) chloride (FeCl₃) solution is acidic, basic, or neutral, and name the mechanism.',
        a: 'Acidic. Cl⁻ comes from a strong acid and does not hydrolyze. But Fe³⁺ is a highly charged, small metal cation that strongly polarizes its surrounding water molecules. The hydrated ion [Fe(H₂O)₆]³⁺ donates a proton to a water molecule. A species that donates a proton is acting as an acid. This cation hydrolysis releases H₃O⁺ and makes the solution acidic. High charge (+3) and small radius increase the acidity.'
      },
      {
        q: 'Elaborate: Why does a very weak acid (Ka very small, like 10⁻¹²) produce a more strongly basic salt solution than a moderately weak acid (Ka ≈ 10⁻⁵)?',
        a: "Because the anion's Kb = Kw / Ka. A very small Ka gives a very large Kb for the conjugate base, so the anion is a strong base. For Ka = 10⁻¹², Kb = 10⁻¹⁴ / 10⁻¹² = 10⁻². For Ka = 10⁻⁵, Kb = 10⁻⁹. The first anion hydrolyzes about 10 million times more strongly. The weaker the parent acid, the stronger the conjugate base, and the more basic the salt solution."
      },
      {
        q: 'You need to make a mildly acidic buffer at pH 5. Which type of salt would you NOT use as the sole solute, and why?',
        a: 'You would not use a salt of a strong acid and strong base (like NaCl) because it gives pH = 7 with no buffering capacity. You would also not use a pure salt alone for a buffer. Buffers need both the weak acid and its conjugate base present. A salt of a weak acid and strong base (like NaCH₃COO) gives a single pH slightly above 7, not a buffer. To get pH = 5 with buffering, you need acetic acid plus sodium acetate together (buffers are a separate topic; here we only find the single pH a salt gives).'
      },
      {
        q: 'Self-explain: A student correctly calculates [OH⁻] = 2.0 × 10⁻⁶ M for a salt solution. Walk through the steps to find pH.',
        a: 'First find pOH: pOH = −log(2.0 × 10⁻⁶) = 5.70. Then use pH + pOH = 14: pH = 14 − 5.70 = 8.30. The solution is basic, as expected for [OH⁻] > 10⁻⁷ M. Each step matters. The log is base-10. The negative sign turns it into a positive pOH. The rule pH = 14 − pOH only holds at 25°C, where Kw = 1.00 × 10⁻¹⁴.'
      }
    ],
    reference: {
      category: 'Quick Reference',
      title: 'Salt Hydrolysis',
      sections: [
        <>
          <h2>Core Relationships</h2>
          <div className="ref-formula">
            <div className="ref-formula-name">{`$K_w$`} relationship for conjugate pairs</div>
            <div className="ref-formula-eq">{`$$K_a \\times K_b = K_w = 1.00 \\times 10^{-14} \\text{ at 25°C}$$`}</div>
            <div className="ref-formula-desc">
              When to use: to find the Kb of an anion from the Ka of its parent acid, or the Ka of a
              cation from the Kb of its parent base. This is the central calculation in every salt
              hydrolysis problem.
            </div>
          </div>
          <div className="ref-formula">
            <div className="ref-formula-name">Anion hydrolysis constant</div>
            <div className="ref-formula-eq">{`$$K_b(\\text{A}^-) = \\frac{K_w}{K_a(\\text{HA})}$$`}</div>
            <div className="ref-formula-desc">
              When to use: for any salt of a weak acid and strong base. The anion A⁻ acts as a base;
              use this Kb in an ICE table to find [OH⁻], then convert to pH via pH = 14 − pOH.
            </div>
          </div>
          <div className="ref-formula">
            <div className="ref-formula-name">Cation hydrolysis constant</div>
            <div className="ref-formula-eq">{`$$K_a(\\text{BH}^+) = \\frac{K_w}{K_b(\\text{B})}$$`}</div>
            <div className="ref-formula-desc">
              When to use: for any salt of a weak base and strong acid. The cation BH⁺ acts as an
              acid; use this Ka in an ICE table to find [H₃O⁺], then pH = −log[H₃O⁺].
            </div>
          </div>
          <div className="ref-formula">
            <div className="ref-formula-name">
              pH from weak-base hydrolysis (small x approximation)
            </div>
            <div className="ref-formula-eq">{`$$[\\text{OH}^-] \\approx \\sqrt{K_b \\cdot C} \\qquad \\text{pH} = 14 - \\text{pOH}$$`}</div>
            <div className="ref-formula-desc">
              When to use: when the degree of hydrolysis (the fraction of salt that reacts with
              water) is less than 5%. Here C is the salt's starting concentration and x is much less
              than C. Check: {`$\\frac{x}{C} \\times 100\\%$`} should be less than 5%.
            </div>
          </div>
          <div className="ref-formula">
            <div className="ref-formula-name">
              pH from weak-acid hydrolysis (small x approximation)
            </div>
            <div className="ref-formula-eq">{`$$[\\text{H}_3\\text{O}^+] \\approx \\sqrt{K_a \\cdot C} \\qquad \\text{pH} = -\\log[\\text{H}_3\\text{O}^+]$$`}</div>
            <div className="ref-formula-desc">
              When to use: for cation hydrolysis problems where Ka is very small relative to C. Same
              5% rule applies.
            </div>
          </div>
        </>,
        <>
          <h2>Four-Case Decision Table</h2>
          <table>
            <thead>
              <tr>
                <th>Salt type</th>
                <th>Which ion hydrolyzes</th>
                <th>pH relative to 7</th>
                <th>Example</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Strong acid + strong base</td>
                <td>Neither</td>
                <td>= 7 (neutral)</td>
                <td>NaCl, KBr, KNO₃</td>
              </tr>
              <tr>
                <td>Weak acid + strong base</td>
                <td>Anion (A⁻ acts as base)</td>
                <td>{`> 7 (basic)`}</td>
                <td>NaCH₃COO, NaF, NaCN, NaHCO₂</td>
              </tr>
              <tr>
                <td>Strong acid + weak base</td>
                <td>Cation (BH⁺ acts as acid)</td>
                <td>{`< 7 (acidic)`}</td>
                <td>NH₄Cl, NH₄NO₃, C₅H₅NHCl</td>
              </tr>
              <tr>
                <td>Weak acid + weak base</td>
                <td>Both</td>
                <td>Depends on Ka vs Kb</td>
                <td>NH₄CH₃COO (≈ 7), NH₄CN</td>
              </tr>
            </tbody>
          </table>
        </>,
        <>
          <h2>Titration Endpoints</h2>
          <p>
            A titration endpoint is just a salt solution. Use the four-case table above to read its
            pH direction, then run the matching hydrolysis calculation on that salt.
          </p>
        </>,
        <>
          <h2>Key Constants</h2>
          <table>
            <thead>
              <tr>
                <th>Quantity</th>
                <th>Value at 25°C</th>
                <th>When to use</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{`$K_w$`}</td>
                <td>{`$1.00 \\times 10^{-14}$`}</td>
                <td>All hydrolysis calculations</td>
              </tr>
              <tr>
                <td>{`$K_a(\\text{NH}_4^+)$`}</td>
                <td>{`$5.6 \\times 10^{-10}$`}</td>
                <td>Ammonium salt problems</td>
              </tr>
              <tr>
                <td>{`$K_b(\\text{CH}_3\\text{COO}^-)$`}</td>
                <td>{`$5.6 \\times 10^{-10}$`}</td>
                <td>Acetate salt problems</td>
              </tr>
              <tr>
                <td>{`$K_b(\\text{HCO}_2^-)$`}</td>
                <td>{`$5.65 \\times 10^{-11}$`}</td>
                <td>Formate salt problems</td>
              </tr>
              <tr>
                <td>{`$K_b(\\text{CN}^-)$`}</td>
                <td>{`$2.04 \\times 10^{-5}$`}</td>
                <td>Cyanide salt problems</td>
              </tr>
            </tbody>
          </table>
        </>
      ]
    }
  }
  return config
}

export default function SaltHydrolysis() {
  const config = useConfig()
  return <LearningTemplate config={config} />
}
