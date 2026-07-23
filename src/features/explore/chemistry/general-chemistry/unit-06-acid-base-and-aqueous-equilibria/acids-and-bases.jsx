import { LearningTemplate } from '../../../../../components/learning/learning-template'
import {
  PHScaleViz,
  SpeciationViz,
  KwHyperbolaViz,
  OstwaldDilutionViz,
  OxoacidStrengthViz,
  KaPkbLadderViz,
  DiluteAutoprotolysisViz
} from '../../../../../components/viz'

function useConfig() {
  const config = {
    cssPrefix: 'chem-acids-bases',
    documentTitle: 'Acids and Bases - AETHER',
    learning: {
      groupTitle: 'Acid-Base and Aqueous Equilibria',
      category: 'Unit 6',
      title: 'Acids and Bases',
      subtitle:
        'From proton transfer and Ka to polyprotic systems, salt hydrolysis, and non-aqueous acid-base chemistry.',
      sections: [
        <>
          <div className="lrn-header">
            <h2>Brønsted–Lowry Acids and Bases</h2>
          </div>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              A molecule of acetic acid (CH<sub>3</sub>COOH) meets a water molecule. What do you
              think the acetic acid will give to the water?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                Acetic acid gives a proton (H<sup>+</sup>) to water. The acetic acid loses one H and
                becomes CH<sub>3</sub>COO<sup>−</sup>. The water gains the H and becomes H
                <sub>3</sub>O<sup>+</sup>.
              </p>
            </details>
          </div>
          <p>
            An acid is a proton donor. A base is a proton acceptor. These are the Brønsted–Lowry
            definitions, and they are the main framework for this lesson.
          </p>
          <p>
            When an acid donates a proton (H<sup>+</sup>), the leftover particle is called the{' '}
            <strong>conjugate base</strong>. When a base accepts a proton, the new particle is
            called the <strong>conjugate acid</strong>. Every acid has a conjugate base, and every
            base has a conjugate acid.
          </p>
          <p>
            <strong>When to use this:</strong> Reach for the Brønsted–Lowry framework whenever you
            need to identify which species donates a proton and which accepts it in a reaction.
          </p>
          <h3>Conjugate Acid–Base Pairs</h3>
          <p>
            A conjugate acid–base pair differs by exactly one proton. For the acid HA, the conjugate
            base is A<sup>−</sup>. For the base B, the conjugate acid is BH<sup>+</sup>.
          </p>
          <p>
            Example: acetic acid CH<sub>3</sub>COOH donates H<sup>+</sup> to water. The conjugate
            base is CH<sub>3</sub>COO<sup>−</sup>. The water molecule accepts the proton and becomes
            H<sub>3</sub>O<sup>+</sup> (the conjugate acid of water). The pair CH
            <sub>3</sub>COOH / CH<sub>3</sub>COO<sup>−</sup> is one conjugate pair. The pair H
            <sub>2</sub>O / H<sub>3</sub>O<sup>+</sup> is another.
          </p>
          <h3>Worked Example, Writing Conjugate Acid and Base Formulas</h3>
          <p>
            <strong>Problem:</strong> Write (a) the conjugate base of HCO<sub>3</sub>
            <sup>−</sup> and (b) the conjugate acid of O<sub>2</sub>
            <sup>−</sup>.
          </p>
          <p>
            <strong>Rule:</strong> To write a conjugate base, remove one H<sup>+</sup> from the
            acid. To write a conjugate acid, add one H<sup>+</sup> to the base.
          </p>
          <p>
            <strong>(a)</strong> HCO<sub>3</sub>
            <sup>−</sup> donates H<sup>+</sup>. Remove H<sup>+</sup> from HCO<sub>3</sub>
            <sup>−</sup>: the conjugate base is CO<sub>3</sub>
            <sup>2−</sup>.
          </p>
          <p>
            <strong>(b)</strong> O<sub>2</sub>
            <sup>−</sup> accepts H<sup>+</sup>. Add H<sup>+</sup> to O<sub>2</sub>
            <sup>−</sup>: the conjugate acid is OH<sup>−</sup>.
          </p>
          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>
              Check part (a): HCO<sub>3</sub>
              <sup>−</sup> has one H. Removing H<sup>+</sup> leaves CO<sub>3</sub>
              <sup>2−</sup>, one fewer H, one more negative charge. Check part (b): O<sub>2</sub>
              <sup>−</sup> gains one H<sup>+</sup> to give OH<sup>−</sup>. Every conjugate pair
              differs by exactly one proton. Form your answer before reading on.
            </p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                The proton H<sup>+</sup> carries +1 charge. Removing it from a neutral molecule
                leaves one more electron than proton in the fragment, giving −1 overall. Adding it
                to a −1 ion neutralizes one unit of charge, so the conjugate acid has one less
                negative charge (or one more positive charge) than the base.
              </p>
            </details>
          </div>
          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Brønsted Acid</span>
              <p>
                Has a proton to give away (HA). Donates H<sup>+</sup> to the base. Left with a
                conjugate base (A<sup>−</sup>) after transfer.
              </p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Brønsted Base</span>
              <p>
                Has a lone pair to accept a proton (B or A<sup>−</sup>). Receives H<sup>+</sup> from
                the acid. Every transfer event involves both simultaneously: you cannot donate a
                proton without a recipient.
              </p>
            </div>
          </div>
          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>
              An acid does not just drop its proton into empty space. The proton transfers by direct
              contact to a base that accepts it. No acceptor means no transfer. So every acid needs
              a base partner to behave as an acid.
            </p>
          </div>
          <h3>The Arrhenius Definition (Background)</h3>
          <p>
            Before Brønsted and Lowry, Arrhenius defined an acid as a substance that releases H
            <sup>+</sup> in water and a base as a substance that releases OH<sup>−</sup>. This
            definition only works in water. The Brønsted–Lowry definition works in any solvent.
          </p>
        </>,

        <>
          <div className="lrn-header">
            <h2>The Autoprotolysis of Water</h2>
          </div>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              You have pure water with no dissolved solutes. Do you think it conducts electricity at
              all? Why or why not?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                Yes, very slightly. Pure water self-ionizes to produce a tiny concentration of H
                <sub>3</sub>O<sup>+</sup> and OH<sup>−</sup> ions. These carry charge, so pure water
                is a very poor but non-zero conductor.
              </p>
            </details>
          </div>
          <p>
            Water molecules can donate a proton to each other. This is called{' '}
            <strong>autoprotolysis</strong> (self-ionization):
          </p>
          <div className="lrn-eq lrn-eq-hero">
            <span>{`$$2\\,\\mathrm{H_2O}(\\mathrm{l}) \\rightleftharpoons \\mathrm{H_3O^+}(\\mathrm{aq}) + \\mathrm{OH^-}(\\mathrm{aq})$$`}</span>
          </div>
          <p>
            The equilibrium constant for this reaction is called Kw, the autoprotolysis constant (or
            ionic product of water):
          </p>
          <div className="lrn-eq lrn-eq-hero">
            <span>{`$$K_w = [\\mathrm{H_3O^+}][\\mathrm{OH^-}] = 1.0 \\times 10^{-14} \\text{ at } 25^\\circ\\mathrm{C}$$`}</span>
          </div>
          <KwHyperbolaViz />
          <p>
            <strong>When to use this:</strong> Use Kw any time you need to relate [H<sub>3</sub>O
            <sup>+</sup>] to [OH<sup>−</sup>] in an aqueous solution, or to find [OH<sup>−</sup>]
            when you know [H<sub>3</sub>O<sup>+</sup>] and vice versa.
          </p>
          <p>
            In neutral pure water, both ions are present in equal amounts. Setting [H<sub>3</sub>O
            <sup>+</sup>] = [OH<sup>−</sup>] = x and solving {`$x^2 = 1.0 \\times 10^{-14}$`} gives{' '}
            {`$x = 1.0 \\times 10^{-7}$`} mol·L
            <sup>−1</sup>.
          </p>
          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>
              Kw is so small because the equilibrium strongly favors liquid water over the ions. At
              25°C, only about 1 in every 10 million water molecules is ionized at any instant.
              Water is a very weak acid and a very weak base.
            </p>
          </div>
          <p>
            Temperature affects Kw. At 37°C (body temperature), {`$K_w = 2.1 \\times 10^{-14}$`}.
            This means neutral pH at body temperature is slightly less than 7.00. The pH scale
            shifts with temperature.
          </p>
          <h3>Worked Example, Concentrations of Ions in a Metal Hydroxide</h3>
          <p>
            <strong>Problem:</strong> Find [H<sub>3</sub>O<sup>+</sup>] and [OH<sup>−</sup>] in
            0.0030 mol·L<sup>−1</sup> Ba(OH)<sub>2</sub> at 25°C.
          </p>
          <p>
            <strong>Step 1:</strong> Barium hydroxide fully dissociates. Each formula unit gives two
            OH<sup>−</sup> ions: [OH<sup>−</sup>] = 2 × 0.0030 = 0.0060 mol·L<sup>−1</sup>.
          </p>
          <p>
            <strong>Step 2:</strong> Use Kw to find [H<sub>3</sub>O<sup>+</sup>]:{' '}
            {`$[\\mathrm{H_3O^+}] = \\dfrac{K_w}{[\\mathrm{OH^-}]} = \\dfrac{1.0 \\times 10^{-14}}{0.0060} = 1.7 \\times 10^{-12}$`}{' '}
            mol·L<sup>−1</sup>.
          </p>
          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>
              Why is [OH<sup>−</sup>] twice the concentration of Ba(OH)<sub>2</sub>? Form your
              answer before reading on.
            </p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                Ba(OH)<sub>2</sub> contains two OH groups per formula unit. When it dissolves, each
                formula unit releases two OH<sup>−</sup> ions. So [OH<sup>−</sup>] = 2 × the salt
                concentration.
              </p>
            </details>
          </div>
        </>,

        <>
          <div className="lrn-header">
            <h2>The Relative Strengths of Acids and Bases</h2>
          </div>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              Two acids, HA and HB, both dissolve in water. HA has {`$K_a = 1.8 \\times 10^{-5}$`}{' '}
              and HB has {`$K_a = 6.3 \\times 10^{-5}$`}. Which acid produces more H<sub>3</sub>O
              <sup>+</sup> in solution?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                HB produces more H<sub>3</sub>O<sup>+</sup>. A larger Ka means the equilibrium
                favors products more. HB has a Ka about 3.5 times larger than HA.
              </p>
            </details>
          </div>
          <p>
            Acid strength is measured by the acidity constant Ka. For the equilibrium{' '}
            {`$\\mathrm{HA}(\\mathrm{aq}) + \\mathrm{H_2O}(\\mathrm{l}) \\rightleftharpoons \\mathrm{H_3O^+}(\\mathrm{aq}) + \\mathrm{A^-}(\\mathrm{aq})$`}
            :
          </p>
          <div className="lrn-eq lrn-eq-hero">
            <span>{`$$K_a = \\frac{[\\mathrm{H_3O^+}][\\mathrm{A^-}]}{[\\mathrm{HA}]}$$`}</span>
          </div>
          <p>
            A larger Ka means the acid donates protons more readily. A weaker acid has a smaller Ka
            {`($K_a \\ll 1$)`}.
          </p>
          <p>
            <strong>When to use this:</strong> Use Ka to compare the strengths of two acids, to
            predict which direction a proton-transfer reaction will go, or to calculate equilibrium
            concentrations.
          </p>
          <h3>The pKa Scale</h3>
          <p>
            Because Ka values span many orders of magnitude, chemists use{' '}
            {`$\\mathrm{p}K_a = -\\log(K_a)$`}. A lower pKa means a stronger acid. Acetic acid has
            pKa = 4.75; hydrocyanic acid has pKa = 9.31. Acetic acid is stronger.
          </p>
          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>
              {`$\\mathrm{p}K_a = -\\log(K_a)$`}, so as Ka increases, {`$-\\log(K_a)$`} decreases. A
              larger Ka means more products at equilibrium, meaning more H<sub>3</sub>O<sup>+</sup>{' '}
              produced, a stronger acid.
            </p>
          </div>
          <h3>The Kb Scale for Bases</h3>
          <p>
            The basicity constant Kb measures base strength. For the equilibrium{' '}
            {`$\\mathrm{B}(\\mathrm{aq}) + \\mathrm{H_2O}(\\mathrm{l}) \\rightleftharpoons \\mathrm{BH^+}(\\mathrm{aq}) + \\mathrm{OH^-}(\\mathrm{aq})$`}
            :
          </p>
          <div className="lrn-eq lrn-eq-hero">
            <span>{`$$K_b = \\frac{[\\mathrm{BH^+}][\\mathrm{OH^-}]}{[\\mathrm{B}]}$$`}</span>
          </div>
          <p>
            A larger Kb means a stronger base. Similarly, {`$\\mathrm{p}K_b = -\\log(K_b)$`}. A
            lower pKb means a stronger base.
          </p>
          <p>
            Common weak bases include ammonia ({`$K_b = 1.8 \\times 10^{-5}$`}), methylamine (
            {`$K_b = 3.6 \\times 10^{-4}$`}), dimethylamine, trimethylamine, hydroxylamine,
            hydrazine, aniline, and pyridine.
          </p>
          <h3>The Relation Ka × Kb = Kw</h3>
          <p>
            For any conjugate acid–base pair (HA and A<sup>−</sup>), the product Ka × Kb equals Kw.
          </p>
          <p>
            <strong>Derivation:</strong>
          </p>
          <p>
            For the acid HA: {`$K_a = \\dfrac{[\\mathrm{H_3O^+}][\\mathrm{A^-}]}{[\\mathrm{HA}]}$`}.
          </p>
          <p>
            For the conjugate base A<sup>−</sup>:{' '}
            {`$K_b = \\dfrac{[\\mathrm{HA}][\\mathrm{OH^-}]}{[\\mathrm{A^-}]}$`}.
          </p>
          <p>
            Multiply them:{' '}
            {`$K_a \\times K_b = [\\mathrm{H_3O^+}][\\mathrm{OH^-}] = K_w = 1.0 \\times 10^{-14}$`}{' '}
            at 25°C.
          </p>
          <p>This means: {`$\\mathrm{p}K_a + \\mathrm{p}K_b = \\mathrm{p}K_w = 14.00$`} at 25°C.</p>
          <KaPkbLadderViz />
          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Ka (acid strength)</span>
              <p>
                Measures how readily HA donates H<sup>+</sup>. Larger Ka → stronger acid → weaker
                conjugate base. High Ka forces Kb low through the relation Ka × Kb = Kw.
              </p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Kb (base strength)</span>
              <p>
                Measures how readily A<sup>−</sup> accepts H<sup>+</sup>. Larger Kb → stronger base
                → weaker conjugate acid. A strong acid has a very weak conjugate base; a strong base
                has a very weak conjugate acid.
              </p>
            </div>
          </div>
          <div className="lrn-faded">
            <div className="lrn-faded-phase">
              <span className="lrn-faded-label">COMPLETE EXAMPLE</span>
              <p>Derivation outline for Ka × Kb = Kw:</p>
              <ol className="lrn-list">
                <li>
                  Write Ka expression:{' '}
                  {`$K_a = \\dfrac{[\\mathrm{H_3O^+}][\\mathrm{A^-}]}{[\\mathrm{HA}]}$`}
                </li>
                <li>
                  Write Kb expression for conjugate A<sup>−</sup>:{' '}
                  {`$K_b = \\dfrac{[\\mathrm{HA}][\\mathrm{OH^-}]}{[\\mathrm{A^-}]}$`}
                </li>
                <li>Multiply the two expressions together.</li>
                <li>
                  Cancel [A<sup>−</sup>] and [HA], they appear in both numerator and denominator.
                </li>
                <li>Identify {`$[\\mathrm{H_3O^+}][\\mathrm{OH^-}] = K_w$`}.</li>
              </ol>
            </div>
            <div className="lrn-faded-phase">
              <span className="lrn-faded-label">YOUR TURN, PARTIAL</span>
              <p>
                Given Kb(NH<sub>3</sub>) = 1.8 × 10<sup>−5</sup>, find Ka(NH<sub>4</sub>
                <sup>+</sup>).
              </p>
              <ol className="lrn-list">
                <li>
                  Identify the conjugate pair: NH<sub>4</sub>
                  <sup>+</sup> / NH<sub>3</sub>.
                </li>
                <li>Apply Ka × Kb = Kw. Solve for Ka = _____ / _____.</li>
              </ol>
              <p>
                Answer:{' '}
                {`$K_a(\\mathrm{NH_4^+}) = \\dfrac{K_w}{K_b(\\mathrm{NH_3})} = \\dfrac{1.0 \\times 10^{-14}}{1.8 \\times 10^{-5}} = 5.6 \\times 10^{-10}$`}
                .
              </p>
            </div>
            <div className="lrn-faded-phase">
              <span className="lrn-faded-label">INDEPENDENT PRACTICE</span>
              <p>
                Ka(CH<sub>3</sub>COOH) = 1.8 × 10<sup>−5</sup>. Find Kb(CH<sub>3</sub>COO
                <sup>−</sup>) and pKb. Answer: {`$K_b = 5.6 \\times 10^{-10}$`}, pKb = 9.25.
              </p>
            </div>
          </div>
        </>,

        <>
          <div className="lrn-header">
            <h2>The pH Scale</h2>
          </div>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              A solution has [H<sub>3</sub>O<sup>+</sup>] = 0.001 mol·L<sup>−1</sup>. Before
              calculating, is the pH a positive or negative number? Is the solution acidic or basic?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                pH = −log(0.001) = −log(10<sup>−3</sup>) = 3. The pH is a positive number. The
                solution is acidic (pH &lt; 7).
              </p>
            </details>
          </div>
          <p>pH is defined as the negative logarithm of the hydronium ion concentration:</p>
          <div className="lrn-eq lrn-eq-hero">
            <span>{`$$\\mathrm{pH} = -\\log[\\mathrm{H_3O^+}]$$`}</span>
          </div>
          <p>To reverse the operation: {`$[\\mathrm{H_3O^+}] = 10^{-\\mathrm{pH}}$`}.</p>
          <p>
            <strong>When to use this:</strong> Use pH to express acidity on a compact, convenient
            scale instead of writing very small exponential numbers.
          </p>
          <p>
            Similarly, {`$\\mathrm{pOH} = -\\log[\\mathrm{OH^-}]$`}. These two quantities add up to
            pKw:
          </p>
          <div className="lrn-eq lrn-eq-hero">
            <span>{`$$\\mathrm{pH} + \\mathrm{pOH} = \\mathrm{p}K_w = 14.00 \\text{ at } 25^\\circ\\mathrm{C}$$`}</span>
          </div>
          <PHScaleViz />
          <h3>Reading the pH Scale</h3>
          <p>
            At 25°C: pH &lt; 7 means acidic (more H<sub>3</sub>O<sup>+</sup> than OH
            <sup>−</sup>); pH = 7 means neutral; pH &gt; 7 means basic (more OH<sup>−</sup> than H
            <sub>3</sub>O<sup>+</sup>).
          </p>
          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>
              In neutral water {`$[\\mathrm{H_3O^+}] = 1.0 \\times 10^{-7}$`} mol·L<sup>−1</sup>, so
              pH = {`$-\\log(1.0 \\times 10^{-7}) = 7.00$`}. This is only true at 25°C because Kw is
              temperature-dependent.
            </p>
          </div>
          <h3>Worked Example, Calculating pH and pOH of a Strong Acid or Base</h3>
          <p>
            <strong>Problem:</strong> Find pH and pOH of 0.0020 mol·L<sup>−1</sup> HCl and 0.0010
            mol·L<sup>−1</sup> NaOH.
          </p>
          <p>
            <strong>For HCl:</strong> HCl is a strong acid. It fully dissociates:{' '}
            {`$[\\mathrm{H_3O^+}] = 0.0020$`} mol·L<sup>−1</sup>. Each HCl also gives one Cl
            <sup>−</sup>, so [Cl<sup>−</sup>] equals the starting concentration too.
          </p>
          <p>
            {`$\\mathrm{pH} = -\\log(0.0020) = -\\log(2.0 \\times 10^{-3}) = 3 - \\log(2.0) = 3 - 0.301 = 2.70$`}
            .
          </p>
          <p>{`$\\mathrm{pOH} = 14.00 - 2.70 = 11.30$`}.</p>
          <p>
            <strong>For NaOH:</strong> NaOH is a strong base. It fully dissociates:{' '}
            {`$[\\mathrm{OH^-}] = 0.0010$`} mol·L<sup>−1</sup>.
          </p>
          <p>
            {`$\\mathrm{pOH} = -\\log(0.0010) = 3.00$`}. {`$\\mathrm{pH} = 14.00 - 3.00 = 11.00$`}.
          </p>
          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>Why do we subtract pOH from 14.00 to get pH? Form your answer before reading on.</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                Because pH + pOH = 14.00 at 25°C (derived from Kw). Once you know one, the other
                follows by subtraction.
              </p>
            </details>
          </div>
          <h3>
            Worked Example, Finding [H<sub>3</sub>O<sup>+</sup>] from pH
          </h3>
          <p>
            <strong>Problem:</strong> Find [H<sub>3</sub>O<sup>+</sup>] in a solution with pH =
            4.45.
          </p>
          <p>
            {`$[\\mathrm{H_3O^+}] = 10^{-4.45} = 10^{0.55} \\times 10^{-5} = 3.5 \\times 10^{-5}$`}{' '}
            mol·L<sup>−1</sup>.
          </p>
          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>
              Why is {`$10^{-4.45}$`} the same as {`$10^{0.55} \\times 10^{-5}$`}? Form your answer
              before reading on.
            </p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                Split −4.45 into −5 + 0.55. Then {`$10^{(-5+0.55)} = 10^{-5} \\times 10^{0.55}$`}.
                Use a calculator for {`$10^{0.55} \\approx 3.55$`}.
              </p>
            </details>
          </div>
        </>,

        <>
          <div className="lrn-header">
            <h2>Strong Acids and Bases</h2>
          </div>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              You dissolve 0.050 mol of NaOH in 1.0 L of water. What is [OH<sup>−</sup>]? What is [H
              <sub>3</sub>O<sup>+</sup>]?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                NaOH fully dissociates: [OH<sup>−</sup>] = 0.050 mol·L<sup>−1</sup>. Then [H
                <sub>3</sub>O<sup>+</sup>] = {`$\\tfrac{K_w}{[\\mathrm{OH^-}]}$`} ={' '}
                {`$\\dfrac{1.0 \\times 10^{-14}}{0.050} = 2.0 \\times 10^{-13}$`} mol·L<sup>−1</sup>
                .
              </p>
            </details>
          </div>
          <p>
            A strong acid fully dissociates in water. Every molecule donates its proton. Therefore
            [H<sub>3</sub>O<sup>+</sup>] equals the initial concentration of the acid.
          </p>
          <p>
            <strong>When to use this:</strong> Whenever an acid appears in the list of strong acids
            (HCl, HBr, HI, HNO<sub>3</sub>, H<sub>2</sub>SO<sub>4</sub> first proton, HClO
            <sub>4</sub>), treat the reaction as complete. No equilibrium table is needed.
          </p>
          <p>
            The common strong acids are: HCl, HBr, HI, HNO<sub>3</sub>, H<sub>2</sub>SO
            <sub>4</sub> (first deprotonation), and HClO<sub>4</sub>.
          </p>
          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>
              All strong acids look equally strong in water. Each one gives its proton fully to
              water, making H<sub>3</sub>O<sup>+</sup>. Water cannot tell them apart because the
              strongest acid that can exist in water is H<sub>3</sub>O<sup>+</sup> itself. We say
              water "levels" them all to the same strength.
            </p>
          </div>
          <p>
            The common strong bases are: Group 1 hydroxides (LiOH, NaOH, KOH, RbOH, CsOH), and the
            heavier Group 2 hydroxides Ca(OH)<sub>2</sub>, Sr(OH)<sub>2</sub>, Ba(OH)
            <sub>2</sub>.
          </p>
          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Strong Acid</span>
              <p>
                Fully dissociates: [H<sub>3</sub>O<sup>+</sup>] = initial concentration of acid. No
                equilibrium table needed. Example: HCl → H<sup>+</sup> + Cl<sup>−</sup> (complete).
              </p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Weak Acid</span>
              <p>
                Partially dissociates. You must set up an equilibrium table and solve using Ka.
                Example: CH<sub>3</sub>COOH ⇌ H<sup>+</sup> + CH<sub>3</sub>COO<sup>−</sup>{' '}
                (partial).
              </p>
            </div>
          </div>
        </>,

        <>
          <div className="lrn-header">
            <h2>Weak Acids and Bases</h2>
          </div>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              Two solutions: 0.10 mol·L<sup>−1</sup> HCl and 0.10 mol·L<sup>−1</sup> acetic acid.
              Which one conducts electricity better? Which has a lower pH?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                HCl conducts electricity better (more ions from complete dissociation) and has a
                lower pH. Acetic acid is a weak acid, only a small fraction ionizes, producing far
                fewer H<sub>3</sub>O<sup>+</sup> ions.
              </p>
            </details>
          </div>
          <p>
            A weak acid partially ionizes in water. The equilibrium concentration of H<sub>3</sub>O
            <sup>+</sup> is much less than the initial acid concentration. Ka is the equilibrium
            constant that describes this partial ionization.
          </p>
          <p>
            <strong>When to use this:</strong> Reach for Ka and an equilibrium table whenever the
            acid is not in the strong acid list. The same ICE table you built for general equilibria
            gives [H<sub>3</sub>O<sup>+</sup>] here, with x as the amount of acid that ionizes.
          </p>
          <p>
            A weak base partially accepts protons from water. Kb describes the partial protonation.
          </p>
          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Weak Acid Calculation</span>
              <p>
                Solve for [H<sub>3</sub>O<sup>+</sup>] directly from the Ka expression. Use the
                approximation {`$x \\approx \\sqrt{K_a C}$`} if x/C &lt; 5%.
              </p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Weak Base Calculation</span>
              <p>
                Solve for [OH<sup>−</sup>] from Kb, compute{' '}
                {`$\\mathrm{pOH} = -\\log[\\mathrm{OH^-}]$`}, then convert: pH = 14.00 − pOH.
              </p>
            </div>
          </div>
          <h3>Toolbox, How to Calculate the pH of a Weak Acid</h3>
          <div className="lrn-steps">
            <div className="lrn-step">
              <span className="lrn-step-title">Step 1</span>
              <p className="lrn-step-content">
                Write the equilibrium:{' '}
                {`$\\mathrm{HA}(\\mathrm{aq}) + \\mathrm{H_2O}(\\mathrm{l}) \\rightleftharpoons \\mathrm{H_3O^+}(\\mathrm{aq}) + \\mathrm{A^-}(\\mathrm{aq})$`}
                .
              </p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">Step 2</span>
              <p className="lrn-step-content">
                Set up the ICE table. Let x = [H<sub>3</sub>O<sup>+</sup>] produced. Initial [HA] =
                C, initial [H<sub>3</sub>O<sup>+</sup>] ≈ 0, initial [A<sup>−</sup>] = 0. At
                equilibrium: [HA] = C − x, [H<sub>3</sub>O<sup>+</sup>] = x, [A<sup>−</sup>] = x.
              </p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">Step 3</span>
              <p className="lrn-step-content">
                Write {`$K_a = \\tfrac{x^2}{C - x}$`}. If x ≪ C (less than 5% deprotonation),
                approximate: {`$x \\approx \\sqrt{K_a C}$`}.
              </p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">Step 4</span>
              <p className="lrn-step-content">
                Check: if x/C &gt; 5%, solve the exact quadratic. If pH lands between 6 and 7,
                water's own ions matter too, the very dilute case covered later needs a fuller
                equation.
              </p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">Step 5</span>
              <p className="lrn-step-content">{`$\\mathrm{pH} = -\\log(x)$`}.</p>
            </div>
          </div>
          <h3>Worked Example, pH and Percentage Deprotonation of a Weak Acid</h3>
          <p>
            <strong>Problem:</strong> Find pH and percentage deprotonation of 0.080 mol·L
            <sup>−1</sup> acetic acid ({`$K_a = 1.8 \\times 10^{-5}$`}).
          </p>
          <p>
            <strong>Step 1:</strong> Equilibrium:{' '}
            {`$\\mathrm{CH_3COOH}(\\mathrm{aq}) + \\mathrm{H_2O}(\\mathrm{l}) \\rightleftharpoons \\mathrm{H_3O^+}(\\mathrm{aq}) + \\mathrm{CH_3COO^-}(\\mathrm{aq})$`}
            .
          </p>
          <p>
            <strong>Step 2:</strong> ICE table. [CH<sub>3</sub>COOH]<sub>initial</sub> = 0.080, [H
            <sub>3</sub>O<sup>+</sup>]<sub>initial</sub> = 0, [CH<sub>3</sub>COO<sup>−</sup>]
            <sub>initial</sub> = 0. At equilibrium: [CH<sub>3</sub>COOH] = 0.080 − x, [H
            <sub>3</sub>O<sup>+</sup>] = x, [CH<sub>3</sub>COO<sup>−</sup>] = x.
          </p>
          <p>
            <strong>Step 3:</strong> {`$K_a = \\dfrac{x^2}{0.080 - x} = 1.8 \\times 10^{-5}$`}. Try
            approximation x ≪ 0.080:{' '}
            {`$x \\approx \\sqrt{1.8 \\times 10^{-5} \\times 0.080} = \\sqrt{1.44 \\times 10^{-6}} = 1.2 \\times 10^{-3}$`}{' '}
            mol·L<sup>−1</sup>.
          </p>
          <p>
            <strong>Step 4:</strong> Check: {`$\\dfrac{1.2 \\times 10^{-3}}{0.080} = 1.5\\%$`}. Less
            than 5%, so the approximation is valid.
          </p>
          <p>
            <strong>Step 5:</strong> {`$\\mathrm{pH} = -\\log(1.2 \\times 10^{-3}) = 2.92$`}.
            Percentage deprotonation = 1.5%.
          </p>
          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>
              Why is the percentage deprotonation equal to{' '}
              {`$\\tfrac{[\\mathrm{H_3O^+}]}{[\\mathrm{HA}]_{\\text{initial}}} \\times 100\\%$`}?
              Form your answer before reading on.
            </p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                In the ionization HA → H<sub>3</sub>O<sup>+</sup> + A<sup>−</sup>, every HA that
                deprotonates produces exactly one H<sub>3</sub>O<sup>+</sup>. Starting from zero H
                <sub>3</sub>O<sup>+</sup> and zero A<sup>−</sup>, the amount of H<sub>3</sub>O
                <sup>+</sup> produced equals the amount of A<sup>−</sup> produced. So [H
                <sub>3</sub>O<sup>+</sup>]<sub>eq</sub> = [A<sup>−</sup>]<sub>eq</sub> = x.
              </p>
            </details>
          </div>
          <h3>Percentage Deprotonation</h3>
          <div className="lrn-eq lrn-eq-hero">
            <span>{`$$\\text{\\% deprotonated} = \\frac{[\\mathrm{A^-}]}{[\\mathrm{HA}]_{\\text{initial}}} \\times 100\\% = \\frac{[\\mathrm{H_3O^+}]}{[\\mathrm{HA}]_{\\text{initial}}} \\times 100\\%$$`}</span>
          </div>
          <OstwaldDilutionViz />
          <h3>Worked Example, Finding Ka from pH</h3>
          <p>
            <strong>Problem:</strong> Mandelic acid has pH = 2.95 in a 0.010 mol·L<sup>−1</sup>{' '}
            solution. Find Ka and pKa.
          </p>
          <p>
            {`$[\\mathrm{H_3O^+}] = 10^{-2.95} = 1.12 \\times 10^{-3}$`} mol·L<sup>−1</sup>. Since x
            = {`$1.12 \\times 10^{-3}$`} and C = 0.010: [HA]<sub>eq</sub> = 0.010 − 0.00112 =
            0.00888 mol·L<sup>−1</sup>.
          </p>
          <p>
            {`$K_a = \\frac{(1.12 \\times 10^{-3})^2}{0.00888} = \\frac{1.26 \\times 10^{-6}}{0.00888} \\approx 1.4 \\times 10^{-4}$`}
            . pKa = {`$-\\log(1.4 \\times 10^{-4}) = 3.85$`}.
          </p>
          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>
              Why do we subtract x from C to get the equilibrium [HA]? Form your answer before
              reading on.
            </p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                At equilibrium, some HA has deprotonated. The amount that deprotonated is x = [H
                <sub>3</sub>O<sup>+</sup>]. So [HA]<sub>eq</sub> = C − x.
              </p>
            </details>
          </div>
          <h3>Toolbox, How to Calculate the pH of a Weak Base</h3>
          <div className="lrn-steps">
            <div className="lrn-step">
              <span className="lrn-step-title">Step 1</span>
              <p className="lrn-step-content">
                Write the equilibrium:{' '}
                {`$\\mathrm{B}(\\mathrm{aq}) + \\mathrm{H_2O}(\\mathrm{l}) \\rightleftharpoons \\mathrm{BH^+}(\\mathrm{aq}) + \\mathrm{OH^-}(\\mathrm{aq})$`}
                .
              </p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">Step 2</span>
              <p className="lrn-step-content">
                Set up the ICE table. Let x = [OH<sup>−</sup>] produced.
              </p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">Step 3</span>
              <p className="lrn-step-content">
                {`$K_b = \\dfrac{x^2}{C - x}$`}. Approximate if x ≪ C.
              </p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">Step 4</span>
              <p className="lrn-step-content">{`$\\mathrm{pOH} = -\\log(x)$`}.</p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">Step 5</span>
              <p className="lrn-step-content">pH = 14.00 − pOH (at 25°C).</p>
            </div>
          </div>
          <h3>Worked Example, pH and Percentage Protonation of a Weak Base</h3>
          <p>
            <strong>Problem:</strong> Find pH and percentage protonation of 0.20 mol·L<sup>−1</sup>{' '}
            methylamine CH<sub>3</sub>NH<sub>2</sub> ({`$K_b = 3.6 \\times 10^{-4}$`}).
          </p>
          <p>
            <strong>Step 1:</strong> Equilibrium:{' '}
            {`$\\mathrm{CH_3NH_2}(\\mathrm{aq}) + \\mathrm{H_2O}(\\mathrm{l}) \\rightleftharpoons \\mathrm{CH_3NH_3^+}(\\mathrm{aq}) + \\mathrm{OH^-}(\\mathrm{aq})$`}
            .
          </p>
          <p>
            <strong>Step 2:</strong> ICE table: [CH<sub>3</sub>NH<sub>2</sub>]<sub>initial</sub> =
            0.20, x = [OH<sup>−</sup>] produced.
          </p>
          <p>
            <strong>Step 3:</strong> {`$K_b = \\dfrac{x^2}{0.20 - x} = 3.6 \\times 10^{-4}$`}.
            Approximate:{' '}
            {`$x \\approx \\sqrt{3.6 \\times 10^{-4} \\times 0.20} = \\sqrt{7.2 \\times 10^{-5}} = 8.49 \\times 10^{-3}$`}{' '}
            mol·L<sup>−1</sup>.
          </p>
          <p>
            <strong>Step 4:</strong> Check: {`$\\dfrac{8.49 \\times 10^{-3}}{0.20} = 4.2\\%$`}.
            Borderline; accept the approximation (&lt; 5%).
          </p>
          <p>
            <strong>Step 5:</strong> {`$\\mathrm{pOH} = -\\log(8.49 \\times 10^{-3}) = 2.07$`}.{' '}
            {`$\\mathrm{pH} = 14.00 - 2.07 = 11.93$`}. Percentage protonation = 4.2%.
          </p>
          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>
              Why do we convert from pOH to pH at the end rather than finding pH directly? Form your
              answer before reading on.
            </p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                Kb gives us [OH<sup>−</sup>], not [H<sub>3</sub>O<sup>+</sup>]. The pOH → pH
                conversion via pH + pOH = 14.00 is the bridge from the base equilibrium back to the
                pH scale.
              </p>
            </details>
          </div>
          <h3>Using Ka to Compare Acid Strengths</h3>
          <p>
            <strong>Problem:</strong> Which acid is stronger: HNO<sub>2</sub> (
            {`$K_a = 4.3 \\times 10^{-4}$`}) or CH<sub>3</sub>COOH ({`$K_a = 1.8 \\times 10^{-5}$`}
            )?
          </p>
          <p>
            HNO<sub>2</sub> has a larger Ka. A larger Ka means more H<sub>3</sub>O<sup>+</sup> at
            equilibrium. HNO<sub>2</sub> is the stronger acid.
          </p>
          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>
              {`$K_a = \\dfrac{[\\mathrm{H_3O^+}][\\mathrm{A^-}]}{[\\mathrm{HA}]}$`}. For the same
              initial concentration, a larger Ka means the numerator (products) is larger relative
              to the denominator (reactant). More product means more H<sub>3</sub>O<sup>+</sup>.
            </p>
          </div>
        </>,

        <>
          <div className="lrn-header">
            <h2>Lewis Acids and Bases</h2>
          </div>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              Boron trifluoride BF<sub>3</sub> has no hydrogen atoms. Can it still act as an acid?
              What would it need to do?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                Yes. A Lewis acid is an electron pair acceptor. BF<sub>3</sub> has an empty orbital
                on boron. It can accept a lone pair from a donor species. It acts as an acid without
                any H<sup>+</sup> to donate.
              </p>
            </details>
          </div>
          <p>
            A <strong>Lewis acid</strong> is an electron pair acceptor. A{' '}
            <strong>Lewis base</strong> is an electron pair donor. This definition is broader than
            Brønsted–Lowry.
          </p>
          <p>
            <strong>When to use this:</strong> Use the Lewis definition when the acid has no H
            <sup>+</sup> to donate, for example, BF<sub>3</sub>, AlCl<sub>3</sub>, Fe
            <sup>3+</sup>, and metal ions.
          </p>
          <p>
            When a Lewis acid accepts an electron pair from a Lewis base, they form a coordinate
            covalent bond, a shared pair where both electrons came from the same atom. The combined
            species is called an <strong>adduct</strong> or <strong>complex</strong>.
          </p>
          <p>
            Example: BF<sub>3</sub> (Lewis acid) + :NH<sub>3</sub> (Lewis base) → H<sub>3</sub>
            N:BF<sub>3</sub> (adduct). BF<sub>3</sub> has an empty orbital on boron. Ammonia's lone
            pair fills it.
          </p>
          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Brønsted Acid</span>
              <p>
                Donates H<sup>+</sup>. Must contain hydrogen. Examples: HCl, CH<sub>3</sub>COOH, NH
                <sub>4</sub>
                <sup>+</sup>. All Brønsted acids are also Lewis acids, the released H<sup>+</sup>{' '}
                accepts the electron pair of the base.
              </p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Lewis Acid</span>
              <p>
                Accepts an electron pair. Need not contain hydrogen. Examples: BF<sub>3</sub>, Al
                <sup>3+</sup>, Fe<sup>3+</sup>, SO<sub>3</sub>. Lewis acids include all Brønsted
                acids plus many H-free species.
              </p>
            </div>
          </div>
          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>
              Every Brønsted acid is also a Lewis acid. When HA donates H<sup>+</sup>, the H
              <sup>+</sup> that leaves has an empty 1s orbital. It accepts the lone pair from the
              base. So H<sup>+</sup> itself is the Lewis acid in the transfer reaction.
            </p>
          </div>
          <h3>Worked Example, Identifying Acids and Bases in a Reaction</h3>
          <p>
            <strong>Problem:</strong> In the proton transfer{' '}
            {`$\\mathrm{HNO_2}(\\mathrm{aq}) + \\mathrm{HPO_4^{2-}}(\\mathrm{aq}) \\rightleftharpoons \\mathrm{NO_2^-}(\\mathrm{aq}) + \\mathrm{H_2PO_4^-}(\\mathrm{aq})$`}
            , name the Brønsted acids and bases, and the Lewis acid and bases.
          </p>
          <p>
            <strong>Step 1 (Brønsted):</strong> HNO<sub>2</sub> gives a proton, so it is a Brønsted
            acid. Its product NO<sub>2</sub>
            <sup>−</sup> is the conjugate base. HPO<sub>4</sub>
            <sup>2−</sup> takes that proton, so it is a Brønsted base. Its product H<sub>2</sub>PO
            <sub>4</sub>
            <sup>−</sup> is the conjugate acid. So the Brønsted acids are HNO<sub>2</sub> and H
            <sub>2</sub>PO<sub>4</sub>
            <sup>−</sup>; the Brønsted bases are HPO<sub>4</sub>
            <sup>2−</sup> and NO<sub>2</sub>
            <sup>−</sup>.
          </p>
          <p>
            <strong>Step 2 (Lewis):</strong> The moving proton H<sup>+</sup> is the Lewis acid. The
            species that supply the lone pair to that proton, HPO<sub>4</sub>
            <sup>2−</sup> and NO<sub>2</sub>
            <sup>−</sup>, are the Lewis bases.
          </p>
          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>
              Why is the proton H<sup>+</sup> the Lewis acid, not HNO<sub>2</sub>? Form your answer
              before reading on.
            </p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                A Lewis acid accepts an electron pair. The bare proton H<sup>+</sup> has an empty
                orbital and accepts the lone pair from the base. HNO<sub>2</sub> only supplies that
                proton, it is the Brønsted acid, while the proton it releases is the Lewis acid.
              </p>
            </details>
          </div>
        </>,

        <>
          <div className="lrn-header">
            <h2>The Strengths of Acids</h2>
          </div>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              HCl and HF are both binary acids (one H, one nonmetal). HF has a more electronegative
              central atom. Which do you think is the stronger acid?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                HCl is the stronger acid. Despite F being more electronegative, the H–F bond is very
                short and extremely strong. Down the group, bond strength dominates: H–Cl is weaker
                than H–F, so HCl ionizes more readily.
              </p>
            </details>
          </div>
          <p>
            Acid strength depends on molecular structure. The key question is: how easily does the
            molecule lose H<sup>+</sup>?
          </p>
          <p>
            <strong>When to use this:</strong> Use structural arguments to predict which of two
            acids is stronger when Ka values are not given.
          </p>
          <h3>Binary Acids, Same Period (How Polarity Controls Strength)</h3>
          <p>
            For binary acids H–A where A is in the same period, the polarity of the H–A bond
            controls acid strength. A more electronegative A pulls electron density away from H.
            This weakens the H–A bond toward H<sup>+</sup> release and makes the acid stronger.
          </p>
          <p>
            Across period 2: H–F is more polar than H–O, which is more polar than H–N. HF is a
            stronger acid than H<sub>2</sub>O, which is stronger than NH<sub>3</sub>.
          </p>
          <p>
            Note: HF is a weak acid despite F being the most electronegative element, because the
            H–F bond is very short and very strong.
          </p>
          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Same Period (Polarity Dominates)</span>
              <p>
                More electronegative A → stronger acid. H–F more polar than H–O, H–O more polar than
                H–N. Polarity weakens the O–H bond and makes H<sup>+</sup> easier to release.
              </p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Same Group (Bond Strength Dominates)</span>
              <p>
                Down a group, H–A bond gets longer and weaker. Weaker bond → stronger acid. HI &gt;
                HBr &gt; HCl &gt; HF in acid strength. Both factors are about ease of H<sup>+</sup>{' '}
                release, but the controlling factor changes.
              </p>
            </div>
          </div>
          <h3>Binary Acids, Same Group (How Bond Strength Controls Strength)</h3>
          <p>
            Down a group, the central atom gets larger and the H–A bond gets longer and weaker. A
            weaker H–A bond means H<sup>+</sup> is released more easily, so acid strength increases.
          </p>
          <p>
            In Group 17: HF ≪ HCl &lt; HBr &lt; HI in acid strength. HI is the strongest because the
            H–I bond is the weakest. HF is the weakest despite F's high electronegativity, because
            the H–F bond is exceptionally strong and short.
          </p>
          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>
              Bond dissociation energy is the energy needed to break the bond. A lower bond energy
              means H<sup>+</sup> can leave with less energy input. This makes the acid more likely
              to ionize and gives a larger Ka.
            </p>
          </div>
          <h3>First, How to Read an Oxidation Number</h3>
          <p>
            An oxidation number is a bookkeeping charge. It tells you how many electrons an atom has
            gained or lost compared with the free element, if you pretend every bond hands both
            electrons to the more electronegative atom. The next section uses it, so learn to assign
            one first.
          </p>
          <p>
            <strong>The rules you need here:</strong>
          </p>
          <ul className="lrn-list">
            <li>Hydrogen is +1 in almost every compound.</li>
            <li>Oxygen is −2 in almost every compound.</li>
            <li>
              The oxidation numbers of all atoms add up to the overall charge: 0 for a neutral
              molecule, or the ion's charge for an ion.
            </li>
          </ul>
          <p>
            <strong>Worked example:</strong> Find the oxidation number of chlorine in HClO and in
            HClO<sub>4</sub>. In HClO, H is +1 and the one O is −2. The molecule is neutral, so the
            numbers must sum to 0: {`$(+1) + \\mathrm{Cl} + (-2) = 0$`}, giving Cl = +1. In HClO
            <sub>4</sub>, H is +1 and the four O atoms total {`$4 \\times (-2) = -8$`}:{' '}
            {`$(+1) + \\mathrm{Cl} + (-8) = 0$`}, giving Cl = +7. More oxygen atoms push the central
            atom to a higher oxidation number.
          </p>
          <h3>Oxoacids, Effect of Number of Oxygen Atoms</h3>
          <p>
            An oxoacid contains an O–H group plus one or more additional (terminal) oxygen atoms on
            the central atom. More terminal oxygen atoms increase the oxidation number of the
            central atom. A higher oxidation number means stronger electron withdrawal from the O–H
            bond. A more polarized O–H bond releases H<sup>+</sup> more easily.
          </p>
          <p>
            The chlorine oxoacid series shows this clearly: HClO (pKa = 7.53, Cl oxidation number
            +1) &lt; HClO<sub>2</sub> (pKa = 2.00, +3) &lt; HClO<sub>3</sub> (strong, +5) &lt; HClO
            <sub>4</sub> (strong, +7).
          </p>
          <OxoacidStrengthViz />
          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>
              The central atom with higher oxidation number pulls harder on the electrons in the O–H
              bond through the bridging oxygen. This weakens the O–H bond and makes H<sup>+</sup>{' '}
              easier to release.
            </p>
          </div>
          <h3>Oxoacids, Effect of Central Atom Electronegativity</h3>
          <p>
            When two oxoacids have the same number of oxygen atoms, the one with the more
            electronegative central atom is stronger. H<sub>2</sub>SO<sub>4</sub> (sulfur) is
            stronger than H<sub>3</sub>PO<sub>4</sub> (phosphorus) because sulfur is more
            electronegative.
          </p>
          <h3>Carboxylic Acids</h3>
          <p>
            A carboxylic acid contains the –COOH group. After H<sup>+</sup> is lost, the negative
            charge in the conjugate base (carboxylate RCO<sub>2</sub>
            <sup>−</sup>) is shared over two oxygens instead of sitting on one, we call this
            delocalization. Spreading the charge steadies the conjugate base and makes the acid
            stronger.
          </p>
          <p>
            Electron-withdrawing substituents on the carbon adjacent to the –COOH group also
            increase acid strength. Trichloroacetic acid (CCl<sub>3</sub>COOH, pKa = 0.52) is far
            stronger than acetic acid (CH<sub>3</sub>COOH, pKa = 4.75) because the three chlorine
            atoms pull electron density away from the –COOH group.
          </p>
          <h3>Worked Example, Predicting Relative Acid Strength from Structure</h3>
          <p>
            <strong>Problem:</strong> Predict which is stronger: H<sub>2</sub>SeO<sub>4</sub> or H
            <sub>2</sub>SeO<sub>3</sub>.
          </p>
          <p>
            H<sub>2</sub>SeO<sub>4</sub> has 4 oxygen atoms on Se (oxidation number +6). H
            <sub>2</sub>SeO<sub>3</sub> has 3 oxygen atoms (oxidation number +4). More terminal
            oxygens → more electron withdrawal → stronger acid. H<sub>2</sub>SeO<sub>4</sub> is
            stronger.
          </p>
          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>
              Why is counting terminal oxygen atoms a reliable guide to oxoacid strength? Form your
              answer before reading on.
            </p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                Each additional terminal O pulls electron density away from the O–H bond through the
                central atom. More O atoms means more withdrawal, weaker O–H bond, larger Ka.
              </p>
            </details>
          </div>
          <h3>Table, Chlorine Oxoacids vs. Oxidation Number</h3>
          <table className="lrn-table">
            <thead>
              <tr>
                <th>Acid</th>
                <th>Oxidation Number of Cl</th>
                <th>pKa</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>HClO</td>
                <td>+1</td>
                <td>7.53</td>
              </tr>
              <tr>
                <td>
                  HClO<sub>2</sub>
                </td>
                <td>+3</td>
                <td>2.00</td>
              </tr>
              <tr>
                <td>
                  HClO<sub>3</sub>
                </td>
                <td>+5</td>
                <td>strong</td>
              </tr>
              <tr>
                <td>
                  HClO<sub>4</sub>
                </td>
                <td>+7</td>
                <td>strong</td>
              </tr>
            </tbody>
          </table>
          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Oxoacid Strength</span>
              <p>
                Increases with more terminal O atoms on the central atom. Electron withdrawal
                travels through the oxide chain to the O–H bond.
              </p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Carboxylic Acid Strength</span>
              <p>
                Increases with electronegative substituents on carbon. The negative charge spreads
                over two oxygens, which steadies the carboxylate.
              </p>
            </div>
          </div>
        </>,

        <>
          <div className="lrn-header">
            <h2>The pH of Salt Solutions</h2>
          </div>
          <p>
            A salt is neutral overall, but its separate ions need not be. The cation may act as a
            weak acid and the anion may act as a weak base. So a salt solution can come out acidic,
            basic, or neutral depending on which ion reacts with water.
          </p>
          <p>
            <strong>How to read a salt:</strong> Split it into cation and anion. The conjugate acid
            of a weak base (such as NH<sub>4</sub>
            <sup>+</sup>, the conjugate acid of NH<sub>3</sub>) is a weak acid and makes the
            solution acidic. The conjugate base of a weak acid (such as CH<sub>3</sub>CO<sub>2</sub>
            <sup>−</sup>) is a weak base and makes the solution basic. Ions left over from strong
            acids or strong bases (Na<sup>+</sup>, K<sup>+</sup>, Cl
            <sup>−</sup>, NO<sub>3</sub>
            <sup>−</sup>) do not react and stay neutral.
          </p>
          <p>
            You already have the tool to put numbers on this: for any conjugate pair, Ka × Kb = Kw.
            So the Ka of an acidic cation or the Kb of a basic anion comes straight from its
            partner's constant, no new table needed. Working a salt solution to an exact pH is its
            own topic; here you only need to predict the direction.
          </p>
        </>,

        <>
          <div className="lrn-header">
            <h2>Polyprotic Acids and Bases</h2>
          </div>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              Carbonic acid H<sub>2</sub>CO<sub>3</sub> can donate two protons. Does Ka2 need to be
              much smaller than Ka1, or can they be similar? Think about what would happen to pH
              calculations if they were similar.
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                Ka2 must be much smaller. If they were similar, the second deprotonation would
                contribute nearly as much H<sub>3</sub>O<sup>+</sup> as the first, making simple
                Ka1-only calculations wrong. The factor of ~1000 drop per step is due to the
                increasing difficulty of removing H<sup>+</sup> from a species that is already
                negatively charged.
              </p>
            </details>
          </div>
          <p>
            A polyprotic acid donates more than one proton, one at a time. Each step has its own
            acidity constant. Ka1 is always larger than Ka2, which is larger than Ka3. They
            typically decrease by a factor of about 1000 per step.
          </p>
          <p>
            <strong>When to use this:</strong> For any polyprotic acid, use Ka1 alone to find the pH
            of the pure acid solution (unless the acid is H<sub>2</sub>SO<sub>4</sub>, which has a
            strong first deprotonation and a non-negligible Ka2 = 0.012).
          </p>
          <h3>Successive Deprotonation and the Dominance of Ka1</h3>
          <p>
            Because Ka1 ≫ Ka2, the first deprotonation produces nearly all the H<sub>3</sub>O
            <sup>+</sup> in solution.
          </p>
          <p>
            Carbonic acid: Ka1 = {`$4.3 \\times 10^{-7}$`}; Ka2 = {`$5.6 \\times 10^{-11}$`}. Ratio
            Ka1/Ka2 ≈ 7700. The first step completely dominates.
          </p>
          <p>
            Sulfuric acid: Ka1 is strong (complete dissociation); Ka2 = 0.012 (not negligible at low
            concentrations). H<sub>2</sub>SO<sub>4</sub> is the exception.
          </p>
          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>
              After the first H<sup>+</sup> is removed, the species left (HA<sup>−</sup>) already
              carries a negative charge. Removing a second positive H<sup>+</sup> from a negatively
              charged species requires working against electrostatic attraction. This makes the
              second deprotonation much harder, so Ka2 ≪ Ka1.
            </p>
          </div>
          <h3>Table, Acidity Constants of Polyprotic Acids</h3>
          <table className="lrn-table">
            <thead>
              <tr>
                <th>Acid</th>
                <th>Ka1</th>
                <th>pKa1</th>
                <th>Ka2</th>
                <th>pKa2</th>
                <th>Ka3</th>
                <th>pKa3</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  H<sub>2</sub>SO<sub>4</sub>
                </td>
                <td>strong</td>
                <td>, </td>
                <td>{`$1.2 \\times 10^{-2}$`}</td>
                <td>1.92</td>
                <td>, </td>
                <td>, </td>
              </tr>
              <tr>
                <td>Oxalic acid</td>
                <td>{`$5.9 \\times 10^{-2}$`}</td>
                <td>1.23</td>
                <td>{`$6.5 \\times 10^{-5}$`}</td>
                <td>4.19</td>
                <td>, </td>
                <td>, </td>
              </tr>
              <tr>
                <td>
                  H<sub>2</sub>SO<sub>3</sub>
                </td>
                <td>{`$1.5 \\times 10^{-2}$`}</td>
                <td>, </td>
                <td>{`$1.2 \\times 10^{-7}$`}</td>
                <td>, </td>
                <td>, </td>
                <td>, </td>
              </tr>
              <tr>
                <td>
                  H<sub>3</sub>PO<sub>3</sub>
                </td>
                <td>{`$1.0 \\times 10^{-2}$`}</td>
                <td>, </td>
                <td>{`$2.6 \\times 10^{-7}$`}</td>
                <td>, </td>
                <td>, </td>
                <td>, </td>
              </tr>
              <tr>
                <td>
                  H<sub>3</sub>PO<sub>4</sub>
                </td>
                <td>{`$7.6 \\times 10^{-3}$`}</td>
                <td>2.12</td>
                <td>{`$6.2 \\times 10^{-8}$`}</td>
                <td>7.21</td>
                <td>{`$2.1 \\times 10^{-13}$`}</td>
                <td>12.68</td>
              </tr>
              <tr>
                <td>Tartaric acid</td>
                <td>{`$6.0 \\times 10^{-4}$`}</td>
                <td>, </td>
                <td>{`$1.5 \\times 10^{-5}$`}</td>
                <td>, </td>
                <td>, </td>
                <td>, </td>
              </tr>
              <tr>
                <td>
                  H<sub>2</sub>CO<sub>3</sub>
                </td>
                <td>{`$4.3 \\times 10^{-7}$`}</td>
                <td>6.37</td>
                <td>{`$5.6 \\times 10^{-11}$`}</td>
                <td>10.25</td>
                <td>, </td>
                <td>, </td>
              </tr>
              <tr>
                <td>
                  H<sub>2</sub>S
                </td>
                <td>{`$1.3 \\times 10^{-7}$`}</td>
                <td>6.89</td>
                <td>{`$7.1 \\times 10^{-15}$`}</td>
                <td>14.15</td>
                <td>, </td>
                <td>, </td>
              </tr>
            </tbody>
          </table>
          <h3>Amphiprotic Ions</h3>
          <p>
            An <strong>amphiprotic</strong> species can act as both an acid and a base. Intermediate
            anions from polyprotic acids are amphiprotic: HCO<sub>3</sub>
            <sup>−</sup>, HS<sup>−</sup>, H<sub>2</sub>PO<sub>4</sub>
            <sup>−</sup>, HPO<sub>4</sub>
            <sup>2−</sup>.
          </p>
          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Polyprotic Acid pH</span>
              <p>
                For H<sub>3</sub>PO<sub>4</sub>, use only Ka1 to find the pH of the pure acid. Ka1
                dominates; Ka2 and Ka3 contribute negligible H<sub>3</sub>O<sup>+</sup>.
              </p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Amphiprotic Salt pH</span>
              <p>
                For the amphiprotic ion H<sub>2</sub>PO<sub>4</sub>
                <sup>−</sup> (from NaH<sub>2</sub>PO<sub>4</sub>), use{' '}
                {`$\\mathrm{pH} = \\tfrac{1}{2}(\\mathrm{p}K_{a1} + \\mathrm{p}K_{a2})$`}. Two
                different situations requiring two different approaches.
              </p>
            </div>
          </div>
          <h3>Worked Example, Showing Why Ka1 Dominates in Carbonic Acid</h3>
          <p>
            <strong>Problem:</strong> Carbonic acid has Ka1 = {`$4.3 \\times 10^{-7}$`} and Ka2 ={' '}
            {`$5.6 \\times 10^{-11}$`}. Show that the second deprotonation adds almost no extra H
            <sub>3</sub>O<sup>+</sup>.
          </p>
          <p>
            <strong>Step 1:</strong> Compare the two constants by dividing:{' '}
            {`$\\dfrac{K_{a1}}{K_{a2}} = \\dfrac{4.3 \\times 10^{-7}}{5.6 \\times 10^{-11}} \\approx 7700$`}
            .
          </p>
          <p>
            <strong>Step 2:</strong> The first step is about 7700 times easier than the second.
            Nearly all H<sub>3</sub>O<sup>+</sup> comes from step one. The second step contributes
            only a tiny extra amount, so you find the pH from Ka1 alone.
          </p>
          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>
              Why does a large Ka1/Ka2 ratio let you ignore the second deprotonation? Form your
              answer before reading on.
            </p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                A ratio of 7700 means the first proton leaves far more easily than the second. The H
                <sub>3</sub>O<sup>+</sup> already made by step one also pushes step two backward (Le
                Châtelier). So step two adds a negligible amount and Ka1 sets the pH.
              </p>
            </details>
          </div>
        </>,

        <>
          <div className="lrn-header">
            <h2>Solutions of Salts of Polyprotic Acids</h2>
          </div>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              NaH<sub>2</sub>PO<sub>4</sub> dissolves in water. The H<sub>2</sub>PO<sub>4</sub>
              <sup>−</sup> ion can either donate a proton (Ka2 = {`$6.2 \\times 10^{-8}$`}) or
              accept a proton (Kb = Kw/Ka1). Which process do you think will dominate?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                The acid step (Ka2) and base step (Kb = Kw/Ka1) must be compared. Ka1 ={' '}
                {`$7.6 \\times 10^{-3}$`}, so Kb ={' '}
                {`$\\dfrac{1.0 \\times 10^{-14}}{7.6 \\times 10^{-3}} = 1.3 \\times 10^{-12}$`}.
                Since Ka2 = {`$6.2 \\times 10^{-8} \\gg K_b = 1.3 \\times 10^{-12}$`}, the acid step
                dominates slightly, but both are relevant. The pH formula averages their pKa values.
              </p>
            </details>
          </div>
          <p>
            An amphiprotic anion such as H<sub>2</sub>PO<sub>4</sub>
            <sup>−</sup> or HCO<sub>3</sub>
            <sup>−</sup> can both donate and accept protons. Its pH in solution is approximately:
          </p>
          <div className="lrn-eq lrn-eq-hero">
            <span>{`$$\\mathrm{pH} = \\tfrac{1}{2}(\\mathrm{p}K_{a1} + \\mathrm{p}K_{a2})$$`}</span>
          </div>
          <p>
            This formula applies when the concentration S is large enough that S ≫ Kw/Ka2 and S ≫
            Ka1. Both conditions are met for most dilute solutions of common amphiprotic salts.
          </p>
          <p>
            <strong>When to use this:</strong> Use{' '}
            {`$\\mathrm{pH} = \\tfrac{1}{2}(\\mathrm{p}K_{a1} + \\mathrm{p}K_{a2})$`} when the
            dissolved species is a known amphiprotic intermediate ion (not the pure polyprotic acid
            itself).
          </p>
          <h3>
            Derivation of {`$\\mathrm{pH} = \\tfrac{1}{2}(\\mathrm{p}K_{a1} + \\mathrm{p}K_{a2})$`}
          </h3>
          <p>
            For the amphiprotic ion HA<sup>−</sup>, two equilibria apply:
          </p>
          <p>
            Acid behavior:{' '}
            {`$\\mathrm{HA^-}(\\mathrm{aq}) + \\mathrm{H_2O}(\\mathrm{l}) \\rightleftharpoons \\mathrm{H_3O^+}(\\mathrm{aq}) + \\mathrm{A^{2-}}(\\mathrm{aq})$`}
            ; Ka2.
          </p>
          <p>
            Base behavior:{' '}
            {`$\\mathrm{HA^-}(\\mathrm{aq}) + \\mathrm{H_2O}(\\mathrm{l}) \\rightleftharpoons \\mathrm{H_2A}(\\mathrm{aq}) + \\mathrm{OH^-}(\\mathrm{aq})$`}
            ; Kb = Kw/Ka1.
          </p>
          <p>
            When both conditions (S ≫ Kw/Ka2 and S ≫ Ka1) hold, the equilibrium concentration of H
            <sub>3</sub>O<sup>+</sup> satisfies:
          </p>
          <div className="lrn-eq">
            <span>{`$$[\\mathrm{H_3O^+}] \\approx \\sqrt{K_{a1} K_{a2}}$$`}</span>
          </div>
          <p>
            Taking −log of both sides:{' '}
            {`$\\mathrm{pH} = -\\log(\\sqrt{K_{a1}K_{a2}}) = -\\tfrac{1}{2}\\log(K_{a1}K_{a2}) = \\tfrac{1}{2}(\\mathrm{p}K_{a1} + \\mathrm{p}K_{a2})$`}
            .
          </p>
          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>
              Why does {`$[\\mathrm{H_3O^+}] \\approx \\sqrt{K_{a1}K_{a2}}$`}? Form your answer
              before reading on.
            </p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                The two processes (donating H<sup>+</sup> and accepting H<sup>+</sup>) are linked.
                The H<sub>3</sub>O<sup>+</sup> concentration at equilibrium is the geometric mean of
                Ka1 and Ka2 because the competing reactions pull pH toward the average of their pKa
                values.
              </p>
            </details>
          </div>
          <div className="lrn-faded">
            <div className="lrn-faded-phase">
              <span className="lrn-faded-label">COMPLETE EXAMPLE</span>
              <p>Derivation steps for the amphiprotic pH formula:</p>
              <ol className="lrn-list">
                <li>Write Ka2 for the acid step.</li>
                <li>Write Kb = Kw/Ka1 for the base step.</li>
                <li>
                  Express [A<sup>2−</sup>] from Ka2.
                </li>
                <li>
                  Express [H<sub>2</sub>A] from Ka1.
                </li>
                <li>Apply charge balance.</li>
                <li>Simplify assuming S ≫ Kw/Ka2 and S ≫ Ka1.</li>
                <li>You get {`$[\\mathrm{H_3O^+}]^2 \\approx K_{a1}K_{a2}$`}.</li>
              </ol>
            </div>
            <div className="lrn-faded-phase">
              <span className="lrn-faded-label">YOUR TURN, PARTIAL</span>
              <p>
                Verify the formula applies to NaHCO<sub>3</sub>. Ka1(H<sub>2</sub>CO<sub>3</sub>) ={' '}
                {`$4.3 \\times 10^{-7}$`} (pKa1 = 6.37), Ka2 = {`$5.6 \\times 10^{-11}$`} (pKa2 =
                10.25).
              </p>
              <ol className="lrn-list">
                <li>
                  Check S ≫ Kw/Ka2 = _____ for typical 0.10 mol·L<sup>−1</sup>.
                </li>
                <li>Apply pH = ½(_____ + _____).</li>
              </ol>
              <p>
                Answer: Kw/Ka2 = {`$1.8 \\times 10^{-4}$`}, which is ≪ 0.10. pH = ½(6.37 + 10.25) =
                8.31.
              </p>
            </div>
          </div>
          <h3>Worked Example, pH of an Amphiprotic Salt</h3>
          <p>
            <strong>Problem (a):</strong> Find pH of 0.20 mol·L<sup>−1</sup> NaH<sub>2</sub>PO
            <sub>4</sub>.
          </p>
          <p>
            pKa1 = 2.12, pKa2 = 7.21 for H<sub>3</sub>PO<sub>4</sub>.
          </p>
          <p>pH = ½(2.12 + 7.21) = ½(9.33) = 4.66.</p>
          <p>
            <strong>Problem (b):</strong> Find pH of 0.20 mol·L<sup>−1</sup> Na<sub>2</sub>HC
            <sub>6</sub>H<sub>5</sub>O<sub>7</sub> (amphiprotic citrate ion).
          </p>
          <p>
            The dissolved species is HC<sub>6</sub>H<sub>5</sub>O<sub>7</sub>
            <sup>2−</sup>. It sits between the second and third deprotonation of citric acid. Take
            the two constants given for this problem: pKa2 = 5.95 and pKa3 = 6.39.
          </p>
          <p>pH = ½(pKa2 + pKa3) = ½(5.95 + 6.39) = ½(12.34) = 6.17.</p>
          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>
              The pH does not depend on how much salt you dissolve. The amphiprotic ion both gives
              and takes protons. These two opposite tendencies balance at the same point no matter
              the amount. So the pH stays near the average of the two pKa values across a wide
              concentration range.
            </p>
          </div>
          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>
              Why do we average pKa values (logarithmic) rather than Ka values? Form your answer
              before reading on.
            </p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                Averaging pKa values corresponds to taking the geometric mean of Ka values (
                {`$\\sqrt{K_{a1}K_{a2}}$`}). Geometric mean is the correct average for quantities
                that span orders of magnitude on a log scale. Averaging Ka values directly (the
                arithmetic mean) would give a wrong result because the numbers differ by many orders
                of magnitude.
              </p>
            </details>
          </div>
        </>,

        <>
          <div className="lrn-header">
            <h2>The Concentrations of Solute Species</h2>
          </div>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              H<sub>3</sub>PO<sub>4</sub> is a triprotic acid with three different Ka values. Can
              you find [HPO<sub>4</sub>
              <sup>2−</sup>] without knowing [H<sub>2</sub>PO<sub>4</sub>
              <sup>−</sup>] first?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                No. To find [HPO<sub>4</sub>
                <sup>2−</sup>] you use{' '}
                {`$K_{a2} = \\tfrac{[\\mathrm{H_3O^+}][\\mathrm{HPO_4^{2-}}]}{[\\mathrm{H_2PO_4^-}]}$`}
                . You need [H<sub>2</sub>PO<sub>4</sub>
                <sup>−</sup>] (from step 1) and [H<sub>3</sub>O<sup>+</sup>] (also from step 1)
                before you can calculate [HPO<sub>4</sub>
                <sup>2−</sup>].
              </p>
            </details>
          </div>
          <p>
            For a polyprotic acid in solution, all species coexist in equilibrium. You can find the
            concentration of every species using a sequential approach.
          </p>
          <p>
            <strong>When to use this:</strong> Use the sequential method any time you need
            concentrations of all species, not just H<sub>3</sub>O<sup>+</sup>.
          </p>
          <h3>Toolbox, How to Calculate All Solute Species in a Polyprotic Acid Solution</h3>
          <p>
            <strong>
              For a diprotic acid (H<sub>2</sub>A):
            </strong>
          </p>
          <p>
            Step 1: Find [H<sub>3</sub>O<sup>+</sup>] from Ka1 (approximate, since Ka1 ≫ Ka2). This
            also gives [HA<sup>−</sup>].
          </p>
          <p>
            Step 2: Use{' '}
            {`$K_{a2} = \\tfrac{[\\mathrm{H_3O^+}][\\mathrm{A^{2-}}]}{[\\mathrm{HA^-}]}$`} to find
            [A<sup>2−</sup>]. Substitute the [H<sub>3</sub>O<sup>+</sup>] and [HA
            <sup>−</sup>] from Step 1.
          </p>
          <p>Step 3: Find {`$[\\mathrm{OH^-}] = \\tfrac{K_w}{[\\mathrm{H_3O^+}]}$`}.</p>
          <p>
            <strong>
              For a triprotic acid (H<sub>3</sub>A):
            </strong>{' '}
            Add Step 3a: use{' '}
            {`$K_{a3} = \\tfrac{[\\mathrm{H_3O^+}][\\mathrm{A^{3-}}]}{[\\mathrm{HA^{2-}}]}$`} to
            find [A<sup>3−</sup>].
          </p>
          <h3>
            Worked Example, All Species in H<sub>3</sub>PO<sub>4</sub> Solution
          </h3>
          <p>
            <strong>Problem:</strong> Find all species in 0.10 mol·L<sup>−1</sup> H<sub>3</sub>PO
            <sub>4</sub>.
          </p>
          <p>
            Ka1 = {`$7.6 \\times 10^{-3}$`}, Ka2 = {`$6.2 \\times 10^{-8}$`}, Ka3 ={' '}
            {`$2.1 \\times 10^{-13}$`}.
          </p>
          <p>
            <strong>Step 1 (Ka1), the quadratic, worked in full:</strong> Start from{' '}
            {`$K_{a1} = \\tfrac{x^2}{0.10 - x} = 7.6 \\times 10^{-3}$`}. Try the quick estimate{' '}
            {`$x \\approx \\sqrt{K_{a1} C} = \\sqrt{7.6 \\times 10^{-3} \\times 0.10} = 2.8 \\times 10^{-2}$`}
            . Check it: {`$x/C = 2.8 \\times 10^{-2}/0.10 = 28\\%$`}, far above 5%. The estimate
            fails, so you cannot drop the −x. Keep it and clear the fraction.
          </p>
          <p>
            Multiply both sides by (0.10 − x): {`$x^2 = 7.6 \\times 10^{-3}(0.10 - x)$`}. Expand and
            collect into standard form:
          </p>
          <div className="lrn-eq">
            <span>{`$$x^2 + 7.6 \\times 10^{-3}\\,x - 7.6 \\times 10^{-4} = 0$$`}</span>
          </div>
          <p>
            Apply the quadratic formula with a = 1, b = {`$7.6 \\times 10^{-3}$`}, c ={' '}
            {`$-7.6 \\times 10^{-4}$`}:
          </p>
          <div className="lrn-eq">
            <span>{`$$x = \\frac{-7.6 \\times 10^{-3} + \\sqrt{(7.6 \\times 10^{-3})^2 + 4(7.6 \\times 10^{-4})}}{2}$$`}</span>
          </div>
          <p>
            Inside the root: {`$5.8 \\times 10^{-5} + 3.04 \\times 10^{-3} = 3.10 \\times 10^{-3}$`}
            , and {`$\\sqrt{3.10 \\times 10^{-3}} = 5.57 \\times 10^{-2}$`}. So{' '}
            {`$x = \\dfrac{-7.6 \\times 10^{-3} + 5.57 \\times 10^{-2}}{2} = 2.40 \\times 10^{-2}$`}{' '}
            mol·L<sup>−1</sup> = [H<sub>3</sub>O<sup>+</sup>]. (Take the positive root; a
            concentration cannot be negative.) This gives pH = {`$-\\log(0.0240) = 1.62$`}.
          </p>
          <p>
            Then [H<sub>2</sub>PO<sub>4</sub>
            <sup>−</sup>] = x = 0.024 mol·L<sup>−1</sup>, and [H<sub>3</sub>PO<sub>4</sub>] = 0.10 −
            0.024 = 0.076 ≈ 0.08 mol·L<sup>−1</sup>.
          </p>
          <p>
            <strong>Step 2 (Ka2):</strong>{' '}
            {`$K_{a2} = \\dfrac{[\\mathrm{H_3O^+}][\\mathrm{HPO_4^{2-}}]}{[\\mathrm{H_2PO_4^-}]}$`}.{' '}
            {`$[\\mathrm{HPO_4^{2-}}] = \\dfrac{K_{a2} \\times [\\mathrm{H_2PO_4^-}]}{[\\mathrm{H_3O^+}]} = \\dfrac{6.2 \\times 10^{-8} \\times 2.4 \\times 10^{-2}}{2.4 \\times 10^{-2}} = 6.2 \\times 10^{-8}$`}{' '}
            mol·L<sup>−1</sup>.
          </p>
          <p>
            <strong>Step 3 (Ka3):</strong>{' '}
            {`$[\\mathrm{PO_4^{3-}}] = \\dfrac{K_{a3} \\times [\\mathrm{HPO_4^{2-}}]}{[\\mathrm{H_3O^+}]} = \\dfrac{2.1 \\times 10^{-13} \\times 6.2 \\times 10^{-8}}{2.4 \\times 10^{-2}} = 5.4 \\times 10^{-19}$`}{' '}
            mol·L<sup>−1</sup>.
          </p>
          <p>
            <strong>Step 4:</strong>{' '}
            {`$[\\mathrm{OH^-}] = \\dfrac{K_w}{[\\mathrm{H_3O^+}]} = \\dfrac{1.0 \\times 10^{-14}}{2.4 \\times 10^{-2}} = 4.2 \\times 10^{-13}$`}{' '}
            mol·L<sup>−1</sup>.
          </p>
          <p>
            <strong>Summary:</strong> [H<sub>3</sub>PO<sub>4</sub>] = 0.08, [H<sub>2</sub>PO
            <sub>4</sub>
            <sup>−</sup>] = {`$2.4 \\times 10^{-2}$`}, [HPO<sub>4</sub>
            <sup>2−</sup>] = {`$6.2 \\times 10^{-8}$`}, [PO<sub>4</sub>
            <sup>3−</sup>] = {`$5.4 \\times 10^{-19}$`}, [OH<sup>−</sup>] ={' '}
            {`$4.2 \\times 10^{-13}$`} mol·L<sup>−1</sup>.
          </p>
          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>
              You must find the species in order, step by step. Each later step needs numbers from
              the step before it. To get [HPO<sub>4</sub>
              <sup>2−</sup>] you need [H<sub>2</sub>PO<sub>4</sub>
              <sup>−</sup>] and [H<sub>3</sub>O<sup>+</sup>] first. The equilibria are linked, so
              you cannot skip ahead.
            </p>
          </div>
        </>,

        <>
          <div className="lrn-header">
            <h2>Composition and pH, Species Fractions</h2>
          </div>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              At very high pH (strongly basic solution), which phosphoric acid species do you expect
              to dominate: H<sub>3</sub>PO<sub>4</sub>, H<sub>2</sub>PO<sub>4</sub>
              <sup>−</sup>, HPO<sub>4</sub>
              <sup>2−</sup>, or PO<sub>4</sub>
              <sup>3−</sup>?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                PO<sub>4</sub>
                <sup>3−</sup> dominates. At very high pH, [H<sub>3</sub>O<sup>+</sup>] is very low,
                so all three deprotonation equilibria are driven far to the right (products side).
                All H has been removed from the phosphate species.
              </p>
            </details>
          </div>
          <p>
            The fraction of each species present in a polyprotic acid system depends on pH. As pH
            rises, the dominant form shifts step by step from the fully protonated acid toward the
            fully deprotonated anion.
          </p>
          <p>
            <strong>When to use this:</strong> Use fraction calculations when you need to know what
            fraction of total acid is in each form at a specified pH.
          </p>
          <SpeciationViz />
          <h3>
            Fraction Formulas for a Diprotic Acid H<sub>2</sub>A
          </h3>
          <p>Let {`$H = [\\mathrm{H_3O^+}]^2 + [\\mathrm{H_3O^+}]K_{a1} + K_{a1}K_{a2}$`}.</p>
          <div className="lrn-eq">
            <span>{`$$f(\\mathrm{H_2A}) = \\frac{[\\mathrm{H_3O^+}]^2}{H}$$`}</span>
          </div>
          <div className="lrn-eq">
            <span>{`$$f(\\mathrm{HA^-}) = \\frac{[\\mathrm{H_3O^+}]\\, K_{a1}}{H}$$`}</span>
          </div>
          <div className="lrn-eq">
            <span>{`$$f(\\mathrm{A^{2-}}) = \\frac{K_{a1}\\, K_{a2}}{H}$$`}</span>
          </div>
          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>
              The three fractions always add up to 1. Each fraction shares the same denominator H.
              The three numerators are exactly the three terms that make up H. Add the numerators
              and you rebuild H, so the fractions sum to one whole. Every acid molecule must be in
              one of the three forms.
            </p>
          </div>
          <div className="lrn-faded">
            <div className="lrn-faded-phase">
              <span className="lrn-faded-label">COMPLETE EXAMPLE</span>
              <p>Derivation outline for fraction formulas:</p>
              <ol className="lrn-list">
                <li>Write Ka1 and Ka2.</li>
                <li>
                  Express [HA<sup>−</sup>] in terms of [H<sub>2</sub>A] and [H<sub>3</sub>O
                  <sup>+</sup>].
                </li>
                <li>
                  Express [A<sup>2−</sup>] in terms of [H<sub>2</sub>A].
                </li>
                <li>
                  Normalize: divide each by ([H<sub>2</sub>A] + [HA<sup>−</sup>] + [A
                  <sup>2−</sup>]).
                </li>
                <li>You get the fraction formulas with H as denominator.</li>
              </ol>
            </div>
            <div className="lrn-faded-phase">
              <span className="lrn-faded-label">YOUR TURN, PARTIAL</span>
              <p>
                Use Ka1 = {`$4.3 \\times 10^{-7}$`} and Ka2 = {`$5.6 \\times 10^{-11}$`} for H
                <sub>2</sub>CO<sub>3</sub>. At pH 6, [H<sub>3</sub>O<sup>+</sup>] = {`$10^{-6}$`}.
                Compute H and find f(H<sub>2</sub>CO<sub>3</sub>).
              </p>
              <ol className="lrn-list">
                <li>{`$[\\mathrm{H_3O^+}]^2 = (10^{-6})^2 = 10^{-12}$`}</li>
                <li>{`$[\\mathrm{H_3O^+}]K_{a1} = 10^{-6} \\times 4.3 \\times 10^{-7} = ?$`}</li>
                <li>{`$K_{a1}K_{a2} = ?$`}</li>
                <li>Sum to get H, then divide each term.</li>
              </ol>
              <p>
                Answer: {`$[\\mathrm{H_3O^+}]K_{a1} = 4.3 \\times 10^{-13}$`};{' '}
                {`$K_{a1}K_{a2} = 2.4 \\times 10^{-17}$`}; H ≈ {`$1.43 \\times 10^{-12}$`}; f(H
                <sub>2</sub>CO<sub>3</sub>) ≈ 0.70 (70%).
              </p>
            </div>
          </div>
          <h3>Worked Example, Species Fractions for Carbonic Acid at pH 8</h3>
          <p>
            Use Ka1 = {`$4.3 \\times 10^{-7}$`} and Ka2 = {`$5.6 \\times 10^{-11}$`} for H
            <sub>2</sub>CO<sub>3</sub>. At pH 8, [H<sub>3</sub>O<sup>+</sup>] ={' '}
            {`$1.0 \\times 10^{-8}$`} mol·L<sup>−1</sup>.
          </p>
          <p>Compute the three terms in H:</p>
          <p>{`$[\\mathrm{H_3O^+}]^2 = (1.0 \\times 10^{-8})^2 = 1.0 \\times 10^{-16}$`}</p>
          <p>
            {`$[\\mathrm{H_3O^+}]K_{a1} = (1.0 \\times 10^{-8})(4.3 \\times 10^{-7}) = 4.3 \\times 10^{-15}$`}
          </p>
          <p>
            {`$K_{a1}K_{a2} = (4.3 \\times 10^{-7})(5.6 \\times 10^{-11}) = 2.4 \\times 10^{-17}$`}
          </p>
          <p>
            {`$H = 1.0 \\times 10^{-16} + 4.3 \\times 10^{-15} + 2.4 \\times 10^{-17} = 4.42 \\times 10^{-15}$`}
          </p>
          <div className="lrn-eq">
            <span>{`$$f(\\mathrm{H_2CO_3}) = \\frac{1.0 \\times 10^{-16}}{4.42 \\times 10^{-15}} = 0.023 \\approx 2.3\\%$$`}</span>
          </div>
          <div className="lrn-eq">
            <span>{`$$f(\\mathrm{HCO_3^-}) = \\frac{4.3 \\times 10^{-15}}{4.42 \\times 10^{-15}} = 0.973 \\approx 97.3\\%$$`}</span>
          </div>
          <div className="lrn-eq">
            <span>{`$$f(\\mathrm{CO_3^{2-}}) = \\frac{2.4 \\times 10^{-17}}{4.42 \\times 10^{-15}} = 0.0054 \\approx 0.5\\%$$`}</span>
          </div>
          <p>
            At pH 8, HCO<sub>3</sub>
            <sup>−</sup> is almost the only species present.
          </p>
          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>
              Why is f(HCO<sub>3</sub>
              <sup>−</sup>) so close to 1 at pH 8? Form your answer before reading on.
            </p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                pH 8 lies between pKa1 = 6.37 and pKa2 = 10.25. Above pKa1, the first deprotonation
                has gone well past equilibrium, so almost no H<sub>2</sub>CO
                <sub>3</sub> remains. Below pKa2, the second deprotonation has barely started, so
                almost no CO<sub>3</sub>
                <sup>2−</sup> exists. HCO<sub>3</sub>
                <sup>−</sup> is the dominant species between the two pKa values.
              </p>
            </details>
          </div>
          <h3>Acid Rain and the Environment</h3>
          <p>
            Normal rainwater has pH ≈ 5.7. This mild acidity comes from dissolved CO<sub>2</sub>{' '}
            forming carbonic acid H<sub>2</sub>CO<sub>3</sub> naturally.
          </p>
          <p>
            Acid rain has a lower pH, caused by SO<sub>2</sub> and NO<sub>x</sub> emissions from
            burning fossil fuels. SO<sub>2</sub> is oxidized to SO<sub>3</sub> in the atmosphere. SO
            <sub>3</sub> reacts with water to form H<sub>2</sub>SO<sub>4</sub>. The strong acid
            lowers pH well below 5.7. Acid rain dissolves in lakes and soils, harming the plants and
            animals that live there.
          </p>
        </>,

        <>
          <div className="lrn-header">
            <h2>Autoprotolysis and pH, Very Dilute Solutions</h2>
          </div>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              You dissolve HCl in water at a concentration of {`$8.0 \\times 10^{-8}$`} mol·L
              <sup>−1</sup>. If you assume full dissociation, you get [H<sub>3</sub>O<sup>+</sup>] ={' '}
              {`$8.0 \\times 10^{-8}$`} mol·L<sup>−1</sup>, which gives pH = 7.10. Does a pH of 7.10
              make sense for an acid?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                No. Any aqueous solution of an acid must have pH &lt; 7 at 25°C. pH = 7.10 would be
                basic, which is impossible for an acid solution. The error is ignoring water's own{' '}
                {`$1.0 \\times 10^{-7}$`} mol·L<sup>−1</sup> contribution to [H<sub>3</sub>O
                <sup>+</sup>].
              </p>
            </details>
          </div>
          <p>
            At concentrations below about 10<sup>−6</sup> mol·L<sup>−1</sup>, the H<sub>3</sub>O
            <sup>+</sup> contributed by the autoprotolysis of water is comparable to the H
            <sub>3</sub>O<sup>+</sup> from the acid itself. The simple formula [H<sub>3</sub>O
            <sup>+</sup>] = [HA]<sub>initial</sub> is no longer accurate.
          </p>
          <p>
            <strong>When to use this:</strong> Use the quadratic (for dilute strong acids/bases) or
            the cubic (for dilute weak acids) whenever the calculated [H<sub>3</sub>O<sup>+</sup>]
            approaches 10<sup>−7</sup> mol·L<sup>−1</sup>.
          </p>
          <h3>Charge Balance and Material Balance</h3>
          <p>
            <strong>Charge balance:</strong> [H<sub>3</sub>O<sup>+</sup>] = [Cl<sup>−</sup>] + [OH
            <sup>−</sup>] (for HCl solution).
          </p>
          <p>
            <strong>Material balance:</strong> [Cl<sup>−</sup>] = [HCl]<sub>initial</sub> = C (for a
            strong acid, all Cl<sup>−</sup> comes from the dissolved HCl).
          </p>
          <p>
            Substitute {`$[\\mathrm{OH^-}] = \\tfrac{K_w}{[\\mathrm{H_3O^+}]}$`} and [Cl<sup>−</sup>
            ] = C into the charge balance:
          </p>
          <p>{`$[\\mathrm{H_3O^+}] = C + \\tfrac{K_w}{[\\mathrm{H_3O^+}]}$`}.</p>
          <p>
            Multiply through: [H<sub>3</sub>O<sup>+</sup>]<sup>2</sup> = C·[H<sub>3</sub>O
            <sup>+</sup>] + Kw.
          </p>
          <p>
            Rearrange: [H<sub>3</sub>O<sup>+</sup>]<sup>2</sup> − C·[H<sub>3</sub>O<sup>+</sup>] −
            Kw = 0. This is the quadratic.
          </p>
          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>
              Water always makes about {`$10^{-7}$`} mol·L<sup>−1</sup> of H<sub>3</sub>O
              <sup>+</sup>. When the acid is that dilute too, both sources are about the same size.
              You can no longer ignore the smaller one, so the simple formula breaks.
            </p>
          </div>
          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>
              Why does the charge balance include both [Cl<sup>−</sup>] and [OH<sup>−</sup>] on the
              right side? Form your answer before reading on.
            </p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                In any solution, total positive charges must equal total negative charges. H
                <sub>3</sub>O<sup>+</sup> is the only cation. Cl<sup>−</sup> and OH<sup>−</sup> are
                both anions. The balance is [H<sub>3</sub>O<sup>+</sup>] = [Cl<sup>−</sup>] + [OH
                <sup>−</sup>].
              </p>
            </details>
          </div>
          <div className="lrn-faded">
            <div className="lrn-faded-phase">
              <span className="lrn-faded-label">COMPLETE EXAMPLE</span>
              <p>Quadratic derivation steps:</p>
              <ol className="lrn-list">
                <li>
                  Write charge balance: [H<sub>3</sub>O<sup>+</sup>] = [Cl<sup>−</sup>] + [OH
                  <sup>−</sup>].
                </li>
                <li>
                  Write material balance: [Cl<sup>−</sup>] = C.
                </li>
                <li>
                  Substitute Kw/[H<sub>3</sub>O<sup>+</sup>] for [OH<sup>−</sup>].
                </li>
                <li>
                  Rearrange to quadratic form: [H<sub>3</sub>O<sup>+</sup>]<sup>2</sup> − C[H
                  <sub>3</sub>O<sup>+</sup>] − Kw = 0.
                </li>
              </ol>
            </div>
            <div className="lrn-faded-phase">
              <span className="lrn-faded-label">YOUR TURN, PARTIAL</span>
              <p>
                Derive the corresponding quadratic for a dilute strong base NaOH at concentration C.
              </p>
              <ol className="lrn-list">
                <li>
                  Charge balance: [H<sub>3</sub>O<sup>+</sup>] + _____ = [OH<sup>−</sup>].
                </li>
                <li>
                  Substitute [OH<sup>−</sup>] = Kw/[H<sub>3</sub>O<sup>+</sup>].
                </li>
                <li>Multiply and rearrange to quadratic form.</li>
              </ol>
              <p>
                Answer: [H<sub>3</sub>O<sup>+</sup>]<sup>2</sup> + C[H<sub>3</sub>O<sup>+</sup>] −
                Kw = 0.
              </p>
            </div>
          </div>
          <h3>Worked Example, pH of Very Dilute Strong Acid</h3>
          <p>
            <strong>Problem:</strong> Find pH of {`$8.0 \\times 10^{-8}$`} mol·L<sup>−1</sup> HCl.
          </p>
          <p>
            Quadratic:{' '}
            {`$[\\mathrm{H_3O^+}]^2 - (8.0 \\times 10^{-8})[\\mathrm{H_3O^+}] - 1.0 \\times 10^{-14} = 0$`}
            .
          </p>
          <p>
            Using the quadratic formula:{' '}
            {`$[\\mathrm{H_3O^+}] = \\dfrac{8.0 \\times 10^{-8} + \\sqrt{(8.0 \\times 10^{-8})^2 + 4 \\times 1.0 \\times 10^{-14}}}{2}$`}
            .
          </p>
          <p>
            {`$= \\dfrac{8.0 \\times 10^{-8} + \\sqrt{4.64 \\times 10^{-14}}}{2} = \\dfrac{8.0 \\times 10^{-8} + 2.154 \\times 10^{-7}}{2} = 1.477 \\times 10^{-7}$`}{' '}
            mol·L<sup>−1</sup>.
          </p>
          <p>
            pH = {`$-\\log(1.477 \\times 10^{-7}) = 6.82$`}. (Not 7.10, water's contribution
            matters.)
          </p>
          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>Why is pH = 6.82 and not 7.10? Form your answer before reading on.</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                The water itself contributes H<sub>3</sub>O<sup>+</sup> from autoprotolysis. At this
                extremely dilute acid concentration, the water contribution is comparable to the
                acid contribution. The quadratic accounts for both, giving the correct pH.
              </p>
            </details>
          </div>
        </>,

        <>
          <div className="lrn-header">
            <h2>Very Dilute Solutions of Weak Acids</h2>
          </div>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              A very weak acid with Ka = {`$1.3 \\times 10^{-10}$`} is dissolved at{' '}
              {`$1.0 \\times 10^{-4}$`} mol·L<sup>−1</sup>. Do you think the simple Ka approximation
              will give a reliable pH for this solution?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                No. The simple approximation gives{' '}
                {`$[\\mathrm{H_3O^+}] \\approx \\sqrt{1.3 \\times 10^{-10} \\times 1.0 \\times 10^{-4}} \\approx 1.14 \\times 10^{-7}$`}
                , barely above pure water's {`$10^{-7}$`}. Water's own contribution is not
                negligible. The cubic equation is needed.
              </p>
            </details>
          </div>
          <p>
            When a weak acid is very dilute or has a very small Ka, you cannot ignore the H
            <sub>3</sub>O<sup>+</sup> that water's autoprotolysis adds. The simple approximation x ≈
            √(Ka × C) may give [H<sub>3</sub>O<sup>+</sup>] near or below 10<sup>−7</sup>
            mol·L<sup>−1</sup>, which is impossible (pure water already has [H<sub>3</sub>O
            <sup>+</sup>] = 10<sup>−7</sup>).
          </p>
          <p>
            <strong>When to use this:</strong> Use the full cubic equation whenever the pH
            calculated by the simple approximation falls between 6 and 7, or whenever Ka is smaller
            than about 10<sup>−9</sup>.
          </p>
          <DiluteAutoprotolysisViz />
          <h3>A Fuller Equation Is Needed Here</h3>
          <p>
            The simple square-root formula only counts H<sub>3</sub>O<sup>+</sup> from the acid. For
            a very weak or very dilute acid you must also count the H<sub>3</sub>O<sup>+</sup> that
            water makes on its own. Adding that extra source turns the working equation into a cubic
            in [H<sub>3</sub>O<sup>+</sup>], which you solve numerically rather than by hand.
          </p>
          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>
              A weak acid only partly ionizes, so its [H<sub>3</sub>O<sup>+</sup>] is one more
              unknown. You now track the acid, its conjugate base, and water's own ions together.
              That extra unknown raises the equation by one power, giving a cubic.
            </p>
          </div>
          <h3>Worked Example, pH of a Dilute Weak Acid</h3>
          <p>
            <strong>Problem:</strong> Find the pH of {`$1.0 \\times 10^{-4}$`} mol·L<sup>−1</sup>{' '}
            phenol (Ka = {`$1.3 \\times 10^{-10}$`}).
          </p>
          <p>
            First, try the simple approximation:{' '}
            {`$x \\approx \\sqrt{1.3 \\times 10^{-10} \\times 1.0 \\times 10^{-4}} = \\sqrt{1.3 \\times 10^{-14}} = 1.14 \\times 10^{-7}$`}{' '}
            mol·L<sup>−1</sup>.
          </p>
          <p>
            That gives pH = {`$-\\log(1.14 \\times 10^{-7}) \\approx 6.94$`}, almost exactly 7.00.
            The answer sits so close to neutral that water's own H<sub>3</sub>O<sup>+</sup> can no
            longer be ignored.
          </p>
          <p>
            Adding water's contribution (the cubic correction) raises [H<sub>3</sub>O<sup>+</sup>]
            to {`$1.5 \\times 10^{-7}$`} mol·L<sup>−1</sup>, so the true pH = 6.82. The lesson: when
            the simple method lands between pH 6 and 7, water's autoprotolysis matters.
          </p>
        </>
      ]
    },
    practice: [
      {
        q: `Water autoprotolysis gives $K_w = 1.0 \\times 10^{-14}$ at 25°C. What are $[\\mathrm{H_3O^+}]$ and $[\\mathrm{OH^-}]$ in pure water? What is the pH?`,
        a: `In pure water $[\\mathrm{H_3O^+}] = [\\mathrm{OH^-}] = x$. Setting $x^2 = 1.0 \\times 10^{-14}$ gives $x = 1.0 \\times 10^{-7}$ mol·L$^{-1}$. pH $= -\\log(1.0 \\times 10^{-7}) = 7.00$. Equal ion concentrations define neutral pH.`
      },
      {
        q: `A 0.080 mol·L$^{-1}$ acetic acid solution has $K_a = 1.8 \\times 10^{-5}$. What is its pH and what percentage of molecules deprotonate?`,
        a: `Let $x = [\\mathrm{H_3O^+}]$. $K_a = x^2/(0.080 - x) \\approx x^2/0.080$. $x = \\sqrt{1.44 \\times 10^{-6}} = 1.2 \\times 10^{-3}$ mol·L$^{-1}$. pH = 2.92. Percentage deprotonation = $(1.2 \\times 10^{-3}/0.080) \\times 100\\% = 1.5\\%$.`
      },
      {
        q: `You have HNO$_2$ ($K_a = 4.3 \\times 10^{-4}$) and HCN ($K_a = 4.9 \\times 10^{-10}$). Which is the stronger acid? How do you know without calculating pH?`,
        a: `HNO$_2$ is stronger. A larger $K_a$ means the equilibrium favors products ($\\mathrm{H_3O^+} + \\mathrm{A^-}$) more. HNO$_2$ has $K_a$ about 880,000 times larger than HCN, so it produces far more H$_3$O$^+$ at any given concentration.`
      },
      {
        q: `Find $[\\mathrm{H_3O^+}]$ in a solution with pH = 4.45.`,
        a: `$[\\mathrm{H_3O^+}] = 10^{-4.45}$. Rewrite as $10^{(-5+0.55)} = 10^{-5} \\times 10^{0.55}$. Since $10^{0.55} \\approx 3.55$, $[\\mathrm{H_3O^+}] = 3.5 \\times 10^{-5}$ mol·L$^{-1}$. The key step is splitting the decimal pH into an integer plus a positive decimal.`
      },
      {
        q: `Why does $K_a \\times K_b = K_w$ for a conjugate acid–base pair?`,
        a: `Write $K_a = \\tfrac{[\\mathrm{H_3O^+}][\\mathrm{A^-}]}{[\\mathrm{HA}]}$ and $K_b = \\tfrac{[\\mathrm{HA}][\\mathrm{OH^-}]}{[\\mathrm{A^-}]}$. Multiplying: $K_a \\times K_b = [\\mathrm{H_3O^+}][\\mathrm{OH^-}]$. This product is exactly $K_w$ by definition. The $[\\mathrm{A^-}]$ and $[\\mathrm{HA}]$ terms cancel algebraically because the two equilibria together sum to the water autoprotolysis reaction.`
      },
      {
        q: `Predict: you dissolve $8.0 \\times 10^{-8}$ mol·L$^{-1}$ HCl and naively set $[\\mathrm{H_3O^+}] = 8.0 \\times 10^{-8}$. You get pH = 7.10. Is this result physically reasonable?`,
        a: `No. Any aqueous solution of an acid must have pH < 7 at 25°C. pH = 7.10 would be basic, which is impossible for an acid solution. The error is ignoring water's own $1.0 \\times 10^{-7}$ mol·L$^{-1}$ contribution to $[\\mathrm{H_3O^+}]$. The correct pH (from the quadratic) is 6.82.`
      },
      {
        q: `The pH of a 0.010 mol·L$^{-1}$ mandelic acid solution is 2.95. Calculate $K_a$ and p$K_a$.`,
        a: `$[\\mathrm{H_3O^+}] = 10^{-2.95} = 1.12 \\times 10^{-3}$ mol·L$^{-1}$. At equilibrium $[\\mathrm{HA}] = 0.010 - 0.00112 = 0.00888$ mol·L$^{-1}$. $K_a = \\tfrac{(1.12 \\times 10^{-3})^2}{0.00888} = 1.4 \\times 10^{-4}$. p$K_a = 3.85$.`
      },
      {
        q: `Why does HI have a higher $K_a$ than HF, even though fluorine is more electronegative than iodine?`,
        a: `Down Group 17, the H–A bond strength dominates. The H–I bond is much longer and weaker than the H–F bond. A weaker bond means H$^+$ leaves more easily, so HI ionizes more readily. Across a period, polarity dominates; down a group, bond strength dominates, these are competing factors.`
      },
      {
        q: `Which oxoacid is stronger: HClO or HClO$_4$? Explain using oxidation number.`,
        a: `HClO$_4$ is far stronger. Chlorine has oxidation number +7 in HClO$_4$ vs. +1 in HClO. A higher oxidation number means more terminal oxygen atoms pull electron density away from the O–H bond, weakening it. This makes H$^+$ much easier to release. p$K_a$(HClO) = 7.53; HClO$_4$ is a strong acid.`
      },
      {
        q: `Predict what happens to pH as you dilute a weak acid from 0.10 mol·L$^{-1}$ to 0.0010 mol·L$^{-1}$. Does pH increase, decrease, or stay the same?`,
        a: `pH increases (becomes less acidic). As concentration decreases, $[\\mathrm{H_3O^+}] = \\sqrt{K_a C}$ decreases too, so pH $= -\\log[\\mathrm{H_3O^+}]$ increases. However, percentage deprotonation actually increases with dilution because a lower C favors the ionization equilibrium.`
      },
      {
        q: `BF$_3$ has no hydrogen. Explain why it is a Lewis acid but not a Brønsted acid.`,
        a: `A Brønsted acid must donate H$^+$. BF$_3$ has no H to donate. A Lewis acid is an electron pair acceptor. BF$_3$ has an empty p orbital on boron; it accepts a lone pair from a Lewis base (like :NH$_3$). All Brønsted acids are Lewis acids (released H$^+$ accepts the electron pair of the base), but Lewis acids need not contain H.`
      },
      {
        q: `For the amphiprotic ion H$_2$PO$_4^-$ in 0.20 mol·L$^{-1}$ NaH$_2$PO$_4$, calculate pH. $K_{a1}$(H$_3$PO$_4$) = $7.6 \\times 10^{-3}$, $K_{a2} = 6.2 \\times 10^{-8}$.`,
        a: `Use pH $= \\tfrac{1}{2}(\\mathrm{p}K_{a1} + \\mathrm{p}K_{a2}) = \\tfrac{1}{2}(2.12 + 7.21) = \\tfrac{1}{2}(9.33) = 4.66$. This formula applies because H$_2$PO$_4^-$ can both donate and accept protons. The pH settles at the geometric mean of the two adjacent $K_a$ values when concentration is not extremely low.`
      },
      {
        q: `Why does the pH $= \\tfrac{1}{2}(\\mathrm{p}K_{a1} + \\mathrm{p}K_{a2})$ formula apply to amphiprotic ions but not to the pure polyprotic acid?`,
        a: `For the pure acid, only $K_{a1}$ matters because $K_{a1} \\gg K_{a2}$; first deprotonation dominates. For the amphiprotic ion, both $K_{a2}$ (acid step) and $K_{b} = K_w/K_{a1}$ (base step) are relevant. The ion's equilibrium lies between the two p$K_a$ values, giving a pH equal to their average.`
      },
      {
        q: `H$_3$PO$_4$ is 0.10 mol·L$^{-1}$. $K_{a1} = 7.6 \\times 10^{-3}$, $K_{a2} = 6.2 \\times 10^{-8}$, $K_{a3} = 2.1 \\times 10^{-13}$. Estimate $[\\mathrm{HPO_4^{2-}}]$.`,
        a: `Use $K_{a1}$ to get $[\\mathrm{H_3O^+}] \\approx 0.024$ mol·L$^{-1}$ and $[\\mathrm{H_2PO_4^-}] \\approx 0.024$ mol·L$^{-1}$. Then $[\\mathrm{HPO_4^{2-}}] = \\tfrac{K_{a2} \\times [\\mathrm{H_2PO_4^-}]}{[\\mathrm{H_3O^+}]} = \\tfrac{6.2 \\times 10^{-8} \\times 0.024}{0.024} = 6.2 \\times 10^{-8}$ mol·L$^{-1}$.`
      },
      {
        q: `Find all species concentrations in 0.10 mol·L$^{-1}$ H$_3$PO$_4$.`,
        a: `Step 1 ($K_{a1}$): quadratic gives $[\\mathrm{H_3O^+}] \\approx 2.4 \\times 10^{-2}$ mol·L$^{-1}$; $[\\mathrm{H_2PO_4^-}] = 2.4 \\times 10^{-2}$; $[\\mathrm{H_3PO_4}] \\approx 0.076$ mol·L$^{-1}$. Step 2 ($K_{a2}$): $[\\mathrm{HPO_4^{2-}}] = 6.2 \\times 10^{-8}$ mol·L$^{-1}$. Step 3 ($K_{a3}$): $[\\mathrm{PO_4^{3-}}] = 5.4 \\times 10^{-19}$ mol·L$^{-1}$. Step 4: $[\\mathrm{OH^-}] = \\tfrac{K_w}{[\\mathrm{H_3O^+}]} = 4.2 \\times 10^{-13}$ mol·L$^{-1}$.`
      },
      {
        q: `Why does $[\\mathrm{PO_4^{3-}}]$ drop to $5.4 \\times 10^{-19}$ mol·L$^{-1}$ in 0.10 mol·L$^{-1}$ H$_3$PO$_4$, even though $K_{a3} = 2.1 \\times 10^{-13}$?`,
        a: `At pH ≈ 1.62 (acidic), $[\\mathrm{H_3O^+}] \\approx 0.024$ mol·L$^{-1}$, much larger than $K_{a3}$. The expression $[\\mathrm{PO_4^{3-}}] = \\tfrac{K_{a3} \\times [\\mathrm{HPO_4^{2-}}]}{[\\mathrm{H_3O^+}]}$ gives a tiny number because the large $[\\mathrm{H_3O^+}]$ in the denominator suppresses the triply-charged anion.`
      },
      {
        q: `What is the pH of $8.0 \\times 10^{-8}$ mol·L$^{-1}$ HCl? Show why the simple formula fails.`,
        a: `Simple formula: $[\\mathrm{H_3O^+}] = 8.0 \\times 10^{-8}$, pH = 7.10, impossible for an acid. Correct method: quadratic $[\\mathrm{H_3O^+}]^2 - (8.0 \\times 10^{-8})[\\mathrm{H_3O^+}] - 1.0 \\times 10^{-14} = 0$. Solving: $[\\mathrm{H_3O^+}] = 1.477 \\times 10^{-7}$ mol·L$^{-1}$; pH = 6.82.`
      },
      {
        q: `Predict: will very dilute acetic acid ($K_a = 1.8 \\times 10^{-5}$) at $1.0 \\times 10^{-4}$ mol·L$^{-1}$ also need the autoprotolysis correction?`,
        a: `No. The simple formula gives $[\\mathrm{H_3O^+}] = \\sqrt{1.8 \\times 10^{-5} \\times 1.0 \\times 10^{-4}} = 1.34 \\times 10^{-5}$ mol·L$^{-1}$. This is well above $10^{-7}$; water's contribution is negligible. Phenol ($K_a = 1.3 \\times 10^{-10}$) at the same concentration does need the correction.`
      },
      {
        q: `What is the charge balance for a very dilute HCl solution, and why does it lead to a quadratic?`,
        a: `Charge balance: $[\\mathrm{H_3O^+}] = [\\mathrm{Cl^-}] + [\\mathrm{OH^-}]$. Substituting $[\\mathrm{Cl^-}] = C$ and $[\\mathrm{OH^-}] = K_w/[\\mathrm{H_3O^+}]$: $[\\mathrm{H_3O^+}] = C + K_w/[\\mathrm{H_3O^+}]$. Multiply by $[\\mathrm{H_3O^+}]$: $[\\mathrm{H_3O^+}]^2 = C \\cdot [\\mathrm{H_3O^+}] + K_w$. Rearranging gives the quadratic: $[\\mathrm{H_3O^+}]^2 - C[\\mathrm{H_3O^+}] - K_w = 0$.`
      },
      {
        q: `Why does adding more terminal oxygen atoms to a chlorine oxoacid make the acid stronger?`,
        a: `Each terminal (non-bonding-to-H) oxygen atom is more electronegative than chlorine. It pulls electron density away from chlorine, which in turn pulls electron density from the O–H bond. A more electron-poor O–H bond releases H$^+$ more easily. More O atoms = more electron withdrawal = weaker O–H bond = larger $K_a$.`
      },
      {
        q: `In a carbonic acid system at pH 8, which species dominates: H$_2$CO$_3$, HCO$_3^-$, or CO$_3^{2-}$? Use $K_{a1} = 4.3 \\times 10^{-7}$ (p$K_{a1}$ = 6.37) and $K_{a2} = 5.6 \\times 10^{-11}$ (p$K_{a2}$ = 10.25).`,
        a: `HCO$_3^-$ dominates. pH 8 is above p$K_{a1}$ (6.37) so the first deprotonation has gone well past equilibrium, very little H$_2$CO$_3$ remains. pH is below p$K_{a2}$ (10.25) so the second deprotonation has barely begun, very little CO$_3^{2-}$ exists.`
      },
      {
        q: `Predict: if you dissolve $1.0 \\times 10^{-4}$ mol·L$^{-1}$ phenol ($K_a = 1.3 \\times 10^{-10}$), what does the simple approximation give for pH, and why is it wrong?`,
        a: `Simple: $[\\mathrm{H_3O^+}] = \\sqrt{1.3 \\times 10^{-10} \\times 1.0 \\times 10^{-4}} = 1.14 \\times 10^{-7}$ mol·L$^{-1}$; pH = 6.94. This is wrong because it gives $[\\mathrm{H_3O^+}]$ barely above water's own $1.0 \\times 10^{-7}$. The approximation pretends water contributes nothing, but at this dilution water's contribution is not negligible. The cubic gives pH = 6.82.`
      },
      {
        q: `How do you find $K_a$ for an ammonium-type cation (like NH$_4^+$) from $K_b$ of the parent base?`,
        a: `Use $K_a \\times K_b = K_w$ for the conjugate pair. Rearrange: $K_a(\\mathrm{NH_4^+}) = \\tfrac{K_w}{K_b(\\mathrm{NH_3})} = \\tfrac{1.0 \\times 10^{-14}}{1.8 \\times 10^{-5}} = 5.6 \\times 10^{-10}$. You do not need a separate table entry for the cation, the conjugate-pair relation lets you derive it from the more commonly tabulated $K_b$.`
      },
      {
        q: `CCl$_3$COOH has p$K_a$ = 0.52 and CH$_3$COOH has p$K_a$ = 4.75. Which is stronger? Explain the structural reason.`,
        a: `CCl$_3$COOH is far stronger (lower p$K_a$). Three chlorine atoms on the carbon adjacent to –COOH pull electron density away from the –COOH group. This withdraws electrons from the O–H bond and stabilizes the conjugate base (CCl$_3$COO$^-$) by spreading the negative charge further. More electron withdrawal → weaker O–H bond → larger $K_a$.`
      },
      {
        q: `Calculate pOH and then pH for a 0.20 mol·L$^{-1}$ methylamine solution ($K_b = 3.6 \\times 10^{-4}$) and explain each conversion step.`,
        a: `$\\tfrac{x^2}{0.20 - x} \\approx \\tfrac{x^2}{0.20} = 3.6 \\times 10^{-4}$. $x = [\\mathrm{OH^-}] = 8.49 \\times 10^{-3}$ mol·L$^{-1}$. pOH $= -\\log(8.49 \\times 10^{-3}) = 2.07$. pH $= 14.00 - 2.07 = 11.93$. $K_b$ gives $[\\mathrm{OH^-}]$ directly. pOH converts $[\\mathrm{OH^-}]$ to a logarithmic scale. The relation pH + pOH = 14.00 bridges from pOH to pH.`
      },
      {
        q: `Why is it wrong to use pH $= \\tfrac{1}{2}(\\mathrm{p}K_{a1} + \\mathrm{p}K_{a2})$ for the free acid H$_3$PO$_4$ but correct for NaH$_2$PO$_4$?`,
        a: `For H$_3$PO$_4$, $K_{a1} \\gg K_{a2} \\gg K_{a3}$, so first deprotonation dominates entirely. For NaH$_2$PO$_4$, the dissolved species is H$_2$PO$_4^-$, which sits between $K_{a1}$ and $K_{a2}$. H$_2$PO$_4^-$ can both donate H$^+$ ($K_{a2}$) and accept H$^+$ ($K_b = K_w/K_{a1}$). Both steps compete, placing pH at $\\tfrac{1}{2}(\\mathrm{p}K_{a1} + \\mathrm{p}K_{a2})$.`
      },
      {
        q: `Why do small, highly charged metal cations like Al$^{3+}$ and Fe$^{3+}$ produce acidic aqueous solutions?`,
        a: `These cations coordinate water molecules. The high positive charge on the metal pulls electron density strongly from the O–H bonds of the coordinated water. This weakens those O–H bonds and makes them donate H$^+$ to surrounding water molecules. Al$^{3+}$ has $K_a = 1.4 \\times 10^{-5}$ (p$K_a$ = 4.85), making its solutions noticeably acidic.`
      },
      {
        q: `Sulfuric acid is listed as a strong acid but also has $K_{a2} = 0.012$. Why can you not always ignore $K_{a2}$ for H$_2$SO$_4$?`,
        a: `For H$_2$SO$_4$, $K_{a1}$ is effectively infinite (first deprotonation is complete). $K_{a2} = 0.012$ is not negligible, it is over 10 times larger than the $K_{a1}$ of many common weak acids. At low concentrations of H$_2$SO$_4$, HSO$_4^-$ (the product of the first step) does not fully ionize. You must treat the second step as an equilibrium, not as complete.`
      },
      {
        q: `What formula gives the cubic equation for a very dilute weak acid? What are the sources of each term?`,
        a: `$[\\mathrm{H_3O^+}]^3 + K_a[\\mathrm{H_3O^+}]^2 - (K_w + K_a[\\mathrm{HA}]_{\\text{initial}})[\\mathrm{H_3O^+}] - K_aK_w = 0$. This combines: the charge balance ($[\\mathrm{H_3O^+}] = [\\mathrm{A^-}] + [\\mathrm{OH^-}]$), the material balance ($[\\mathrm{A^-}] + [\\mathrm{HA}] = C$), the $K_a$ expression, and $K_w = [\\mathrm{H_3O^+}][\\mathrm{OH^-}]$.`
      }
    ],
    reference: {
      category: 'Quick Reference',
      title: 'Acids and Bases',
      sections: [
        <>
          <div className="lrn-header">
            <h2>Acid-Base Definitions</h2>
          </div>
          <div className="lrn-definition">
            <span className="lrn-definition-term">Brønsted-Lowry acid</span>
            <div className="lrn-definition-desc">
              <p>
                Proton donor: HA → H<sup>+</sup> + A<sup>−</sup>.
              </p>
              <p>
                <strong>When to use:</strong> When identifying which species donates H<sup>+</sup>{' '}
                in any proton-transfer reaction in any solvent.
              </p>
            </div>
          </div>
          <div className="lrn-definition">
            <span className="lrn-definition-term">Brønsted-Lowry base</span>
            <div className="lrn-definition-desc">
              <p>
                Proton acceptor: B + H<sup>+</sup> → BH<sup>+</sup>.
              </p>
              <p>
                <strong>When to use:</strong> When identifying which species receives H<sup>+</sup>{' '}
                in a proton-transfer reaction.
              </p>
            </div>
          </div>
          <div className="lrn-definition">
            <span className="lrn-definition-term">Lewis acid</span>
            <div className="lrn-definition-desc">
              <p>Electron pair acceptor; forms coordinate bond with Lewis base.</p>
              <p>
                <strong>When to use:</strong> When the acid has no H<sup>+</sup> to donate (e.g., BF
                <sub>3</sub>, Al<sup>3+</sup>, metal cations).
              </p>
            </div>
          </div>
          <div className="lrn-definition">
            <span className="lrn-definition-term">Lewis base</span>
            <div className="lrn-definition-desc">
              <p>Electron pair donor; lone pair forms bond with Lewis acid.</p>
              <p>
                <strong>When to use:</strong> When a species donates a lone pair to a metal center
                or empty orbital.
              </p>
            </div>
          </div>
        </>,

        <>
          <div className="lrn-header">
            <h2>Equilibrium Constants and Their Relations</h2>
          </div>
          <div className="lrn-definition">
            <span className="lrn-definition-term">Acidity constant Ka</span>
            <div className="lrn-definition-desc">
              <p>{`$K_a = \\dfrac{[\\mathrm{H_3O^+}][\\mathrm{A^-}]}{[\\mathrm{HA}]}$`}</p>
              <p>
                <strong>When to use:</strong> For any weak acid HA to find equilibrium [H
                <sub>3</sub>O<sup>+</sup>] or to compare acid strengths.
              </p>
            </div>
          </div>
          <div className="lrn-definition">
            <span className="lrn-definition-term">Basicity constant Kb</span>
            <div className="lrn-definition-desc">
              <p>{`$K_b = \\dfrac{[\\mathrm{BH^+}][\\mathrm{OH^-}]}{[\\mathrm{B}]}$`}</p>
              <p>
                <strong>When to use:</strong> For any weak base B to find equilibrium [OH
                <sup>−</sup>].
              </p>
            </div>
          </div>
          <div className="lrn-definition">
            <span className="lrn-definition-term">Conjugate pair relation</span>
            <div className="lrn-definition-desc">
              <p>{`$K_a \\times K_b = K_w$`}</p>
              <p>
                <strong>When to use:</strong> To find Ka of an acidic cation (like NH<sub>4</sub>
                <sup>+</sup>) from its conjugate base's Kb, or vice versa.
              </p>
            </div>
          </div>
          <div className="lrn-definition">
            <span className="lrn-definition-term">pKa and pKb sum</span>
            <div className="lrn-definition-desc">
              <p>{`$\\mathrm{p}K_a + \\mathrm{p}K_b = \\mathrm{p}K_w = 14.00$`} at 25°C.</p>
              <p>
                <strong>When to use:</strong> To convert between pKa and pKb for a conjugate pair at
                25°C.
              </p>
            </div>
          </div>
          <div className="lrn-definition">
            <span className="lrn-definition-term">Water autoprotolysis constant</span>
            <div className="lrn-definition-desc">
              <p>
                {`$K_w = [\\mathrm{H_3O^+}][\\mathrm{OH^-}] = 1.0 \\times 10^{-14}$`} at 25°C;{' '}
                {`$K_w = 2.1 \\times 10^{-14}$`} at 37°C.
              </p>
              <p>
                <strong>When to use:</strong> Any time you need to relate [H<sub>3</sub>O
                <sup>+</sup>] and [OH<sup>−</sup>] in aqueous solution.
              </p>
            </div>
          </div>
        </>,

        <>
          <div className="lrn-header">
            <h2>pH and pOH</h2>
          </div>
          <div className="lrn-definition">
            <span className="lrn-definition-term">pH definition</span>
            <div className="lrn-definition-desc">
              <p>{`$\\mathrm{pH} = -\\log[\\mathrm{H_3O^+}]$`}</p>
              <p>
                <strong>When to use:</strong> To express acidity as a compact number from the H
                <sub>3</sub>O<sup>+</sup> concentration.
              </p>
            </div>
          </div>
          <div className="lrn-definition">
            <span className="lrn-definition-term">Inverse of pH</span>
            <div className="lrn-definition-desc">
              <p>{`$[\\mathrm{H_3O^+}] = 10^{-\\mathrm{pH}}$`}</p>
              <p>
                <strong>When to use:</strong> To recover [H<sub>3</sub>O<sup>+</sup>] from a known
                pH value.
              </p>
            </div>
          </div>
          <div className="lrn-definition">
            <span className="lrn-definition-term">pOH definition</span>
            <div className="lrn-definition-desc">
              <p>{`$\\mathrm{pOH} = -\\log[\\mathrm{OH^-}]$`}</p>
              <p>
                <strong>When to use:</strong> To express basicity as a compact number from the OH
                <sup>−</sup> concentration.
              </p>
            </div>
          </div>
          <div className="lrn-definition">
            <span className="lrn-definition-term">pH + pOH relation</span>
            <div className="lrn-definition-desc">
              <p>{`$\\mathrm{pH} + \\mathrm{pOH} = \\mathrm{p}K_w = 14.00$`} at 25°C.</p>
              <p>
                <strong>When to use:</strong> To find pH when pOH is known, or vice versa, at 25°C.
              </p>
            </div>
          </div>
          <div className="lrn-definition">
            <span className="lrn-definition-term">Neutral water</span>
            <div className="lrn-definition-desc">
              <p>
                {`$[\\mathrm{H_3O^+}] = [\\mathrm{OH^-}] = 1.0 \\times 10^{-7}$`} mol·L
                <sup>−1</sup>; pH = 7.00 at 25°C.
              </p>
              <p>
                <strong>When to use:</strong> As the reference point for neutral aqueous solution at
                25°C.
              </p>
            </div>
          </div>
        </>,

        <>
          <div className="lrn-header">
            <h2>Strong Acid and Base Calculations</h2>
          </div>
          <div className="lrn-definition">
            <span className="lrn-definition-term">
              Strong acid [H<sub>3</sub>O<sup>+</sup>]
            </span>
            <div className="lrn-definition-desc">
              <p>
                {`$[\\mathrm{H_3O^+}] = [\\mathrm{HA}]_{\\text{initial}}$`} (complete dissociation).
              </p>
              <p>
                <strong>When to use:</strong> For HCl, HBr, HI, HNO<sub>3</sub>, H<sub>2</sub>SO
                <sub>4</sub> (first proton), HClO<sub>4</sub>.
              </p>
            </div>
          </div>
          <div className="lrn-definition">
            <span className="lrn-definition-term">
              Strong base [OH<sup>−</sup>]
            </span>
            <div className="lrn-definition-desc">
              <p>
                {`$[\\mathrm{OH^-}] = [\\mathrm{MOH}]_{\\text{initial}}$`} (complete dissociation).
              </p>
              <p>
                <strong>When to use:</strong> For Group 1 hydroxides and Ca(OH)<sub>2</sub>, Sr (OH)
                <sub>2</sub>, Ba(OH)<sub>2</sub>.
              </p>
            </div>
          </div>
          <table className="lrn-table">
            <thead>
              <tr>
                <th>Type</th>
                <th>Examples</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Strong acids</td>
                <td>
                  HCl, HBr, HI, HNO<sub>3</sub>, H<sub>2</sub>SO<sub>4</sub> (first H), HClO
                  <sub>4</sub>
                </td>
              </tr>
              <tr>
                <td>Strong bases</td>
                <td>
                  LiOH, NaOH, KOH, RbOH, CsOH, Ca(OH)<sub>2</sub>, Sr(OH)<sub>2</sub>, Ba(OH)
                  <sub>2</sub>
                </td>
              </tr>
            </tbody>
          </table>
        </>,

        <>
          <div className="lrn-header">
            <h2>Weak Acid and Base Equilibrium</h2>
          </div>
          <div className="lrn-definition">
            <span className="lrn-definition-term">Weak acid approximation</span>
            <div className="lrn-definition-desc">
              <p>{`$[\\mathrm{H_3O^+}] = x \\approx \\sqrt{K_a C}$`} when x/C &lt; 0.05.</p>
              <p>
                <strong>When to use:</strong> First attempt for any weak acid; check 5% criterion
                before accepting.
              </p>
            </div>
          </div>
          <div className="lrn-definition">
            <span className="lrn-definition-term">Weak acid exact</span>
            <div className="lrn-definition-desc">
              <p>
                {`$K_a = \\dfrac{x^2}{C - x}$`}; rearrange to quadratic{' '}
                {`$x^2 + K_a x - K_a C = 0$`}.
              </p>
              <p>
                <strong>When to use:</strong> When the 5% approximation fails (x/C &gt; 0.05).
              </p>
            </div>
          </div>
          <div className="lrn-definition">
            <span className="lrn-definition-term">Weak base approximation</span>
            <div className="lrn-definition-desc">
              <p>{`$[\\mathrm{OH^-}] = x \\approx \\sqrt{K_b C}$`}.</p>
              <p>
                <strong>When to use:</strong> First attempt for any weak base; check 5% criterion.
              </p>
            </div>
          </div>
          <div className="lrn-definition">
            <span className="lrn-definition-term">pOH to pH</span>
            <div className="lrn-definition-desc">
              <p>{`$\\mathrm{pOH} = -\\log[\\mathrm{OH^-}]$`}; pH = 14.00 − pOH at 25°C.</p>
              <p>
                <strong>When to use:</strong> After finding [OH<sup>−</sup>] for a weak base, to
                convert to pH.
              </p>
            </div>
          </div>
        </>,

        <>
          <div className="lrn-header">
            <h2>Percentage Deprotonation and Protonation</h2>
          </div>
          <div className="lrn-definition">
            <span className="lrn-definition-term">Percentage deprotonated (form 1)</span>
            <div className="lrn-definition-desc">
              <p>{`$\\dfrac{[\\mathrm{A^-}]}{[\\mathrm{HA}]_{\\text{initial}}} \\times 100\\%$`}</p>
              <p>
                <strong>When to use:</strong> When [A<sup>−</sup>] is directly available from the
                ICE table.
              </p>
            </div>
          </div>
          <div className="lrn-definition">
            <span className="lrn-definition-term">Percentage deprotonated (form 2)</span>
            <div className="lrn-definition-desc">
              <p>{`$\\dfrac{[\\mathrm{H_3O^+}]}{[\\mathrm{HA}]_{\\text{initial}}} \\times 100\\%$`}</p>
              <p>
                <strong>When to use:</strong> Equivalent to form 1; uses{' '}
                {`$[\\mathrm{H_3O^+}] = [\\mathrm{A^-}]$`} by stoichiometry.
              </p>
            </div>
          </div>
          <div className="lrn-definition">
            <span className="lrn-definition-term">Percentage protonated (base)</span>
            <div className="lrn-definition-desc">
              <p>{`$\\dfrac{[\\mathrm{BH^+}]}{[\\mathrm{B}]_{\\text{initial}}} \\times 100\\%$`}</p>
              <p>
                <strong>When to use:</strong> To quantify how much of a weak base has accepted a
                proton.
              </p>
            </div>
          </div>
        </>,

        <>
          <div className="lrn-header">
            <h2>Acid Strength and Molecular Structure</h2>
          </div>
          <table className="lrn-table">
            <thead>
              <tr>
                <th>Acid type</th>
                <th>Variable</th>
                <th>Trend</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Binary (same period)</td>
                <td>Electronegativity of A</td>
                <td>More electronegative → stronger acid</td>
              </tr>
              <tr>
                <td>Binary (same group)</td>
                <td>H–A bond strength</td>
                <td>Weaker bond → stronger acid</td>
              </tr>
              <tr>
                <td>Oxoacid</td>
                <td>Number of terminal O atoms</td>
                <td>More O atoms → stronger acid</td>
              </tr>
              <tr>
                <td>Oxoacid (same O count)</td>
                <td>Electronegativity of central atom</td>
                <td>More electronegative → stronger</td>
              </tr>
              <tr>
                <td>Carboxylic acid</td>
                <td>Substituents near –COOH</td>
                <td>More electronegative → stronger</td>
              </tr>
            </tbody>
          </table>
          <table className="lrn-table">
            <thead>
              <tr>
                <th>Acid</th>
                <th>Cl oxidation number</th>
                <th>pKa</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>HClO</td>
                <td>+1</td>
                <td>7.53</td>
              </tr>
              <tr>
                <td>
                  HClO<sub>2</sub>
                </td>
                <td>+3</td>
                <td>2.00</td>
              </tr>
              <tr>
                <td>
                  HClO<sub>3</sub>
                </td>
                <td>+5</td>
                <td>strong</td>
              </tr>
              <tr>
                <td>
                  HClO<sub>4</sub>
                </td>
                <td>+7</td>
                <td>strong</td>
              </tr>
            </tbody>
          </table>
        </>,

        <>
          <div className="lrn-header">
            <h2>Polyprotic Acids</h2>
          </div>
          <div className="lrn-definition">
            <span className="lrn-definition-term">Successive Ka decrease</span>
            <div className="lrn-definition-desc">
              <p>
                Ka1 ≫ Ka2 ≫ Ka3 (typically by factor ~10<sup>3</sup> per step).
              </p>
              <p>
                <strong>When to use:</strong> To justify using only Ka1 for pH of a polyprotic acid
                solution (except H<sub>2</sub>SO<sub>4</sub>).
              </p>
            </div>
          </div>
          <div className="lrn-definition">
            <span className="lrn-definition-term">
              H<sub>2</sub>SO<sub>4</sub> special case
            </span>
            <div className="lrn-definition-desc">
              <p>Ka1 = strong (complete); Ka2 = 0.012 (not negligible).</p>
              <p>
                <strong>When to use:</strong> H<sub>2</sub>SO<sub>4</sub> requires treating both
                steps for accurate pH at low concentrations.
              </p>
            </div>
          </div>
          <table className="lrn-table">
            <thead>
              <tr>
                <th>Acid</th>
                <th>Ka1</th>
                <th>pKa1</th>
                <th>Ka2</th>
                <th>pKa2</th>
                <th>Ka3</th>
                <th>pKa3</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  H<sub>2</sub>SO<sub>4</sub>
                </td>
                <td>strong</td>
                <td>, </td>
                <td>{`$1.2 \\times 10^{-2}$`}</td>
                <td>1.92</td>
                <td>, </td>
                <td>, </td>
              </tr>
              <tr>
                <td>Oxalic acid</td>
                <td>{`$5.9 \\times 10^{-2}$`}</td>
                <td>1.23</td>
                <td>{`$6.5 \\times 10^{-5}$`}</td>
                <td>4.19</td>
                <td>, </td>
                <td>, </td>
              </tr>
              <tr>
                <td>
                  H<sub>2</sub>SO<sub>3</sub>
                </td>
                <td>{`$1.5 \\times 10^{-2}$`}</td>
                <td>, </td>
                <td>{`$1.2 \\times 10^{-7}$`}</td>
                <td>, </td>
                <td>, </td>
                <td>, </td>
              </tr>
              <tr>
                <td>
                  H<sub>3</sub>PO<sub>3</sub>
                </td>
                <td>{`$1.0 \\times 10^{-2}$`}</td>
                <td>, </td>
                <td>{`$2.6 \\times 10^{-7}$`}</td>
                <td>, </td>
                <td>, </td>
                <td>, </td>
              </tr>
              <tr>
                <td>
                  H<sub>3</sub>PO<sub>4</sub>
                </td>
                <td>{`$7.6 \\times 10^{-3}$`}</td>
                <td>2.12</td>
                <td>{`$6.2 \\times 10^{-8}$`}</td>
                <td>7.21</td>
                <td>{`$2.1 \\times 10^{-13}$`}</td>
                <td>12.68</td>
              </tr>
              <tr>
                <td>Tartaric acid</td>
                <td>{`$6.0 \\times 10^{-4}$`}</td>
                <td>, </td>
                <td>{`$1.5 \\times 10^{-5}$`}</td>
                <td>, </td>
                <td>, </td>
                <td>, </td>
              </tr>
              <tr>
                <td>
                  H<sub>2</sub>CO<sub>3</sub>
                </td>
                <td>{`$4.3 \\times 10^{-7}$`}</td>
                <td>6.37</td>
                <td>{`$5.6 \\times 10^{-11}$`}</td>
                <td>10.25</td>
                <td>, </td>
                <td>, </td>
              </tr>
              <tr>
                <td>
                  H<sub>2</sub>S
                </td>
                <td>{`$1.3 \\times 10^{-7}$`}</td>
                <td>6.89</td>
                <td>{`$7.1 \\times 10^{-15}$`}</td>
                <td>14.15</td>
                <td>, </td>
                <td>, </td>
              </tr>
            </tbody>
          </table>
        </>,

        <>
          <div className="lrn-header">
            <h2>Amphiprotic Salts</h2>
          </div>
          <div className="lrn-definition">
            <span className="lrn-definition-term">Amphiprotic ion pH</span>
            <div className="lrn-definition-desc">
              <p>{`$\\mathrm{pH} = \\tfrac{1}{2}(\\mathrm{p}K_{a1} + \\mathrm{p}K_{a2})$`}</p>
              <p>
                <strong>When to use:</strong> For a dissolved amphiprotic intermediate anion (HA
                <sup>−</sup> from diprotic, H<sub>2</sub>A<sup>−</sup> from triprotic) when
                concentration S ≫ Kw/Ka2 and S ≫ Ka1.
              </p>
            </div>
          </div>
          <div className="lrn-definition">
            <span className="lrn-definition-term">
              Amphiprotic [H<sub>3</sub>O<sup>+</sup>] derivation
            </span>
            <div className="lrn-definition-desc">
              <p>{`$[\\mathrm{H_3O^+}] \\approx \\sqrt{K_{a1} K_{a2}}$`}</p>
              <p>
                <strong>When to use:</strong> Equivalent form to the pKa average; derived from
                competing acid/base equilibria of HA<sup>−</sup>.
              </p>
            </div>
          </div>
        </>,

        <>
          <div className="lrn-header">
            <h2>Species Fractions (Diprotic Acid)</h2>
          </div>
          <div className="lrn-definition">
            <span className="lrn-definition-term">Denominator H</span>
            <div className="lrn-definition-desc">
              <p>{`$H = [\\mathrm{H_3O^+}]^2 + [\\mathrm{H_3O^+}]K_{a1} + K_{a1}K_{a2}$`}</p>
              <p>
                <strong>When to use:</strong> First compute H for any fraction calculation in a
                diprotic system.
              </p>
            </div>
          </div>
          <div className="lrn-definition">
            <span className="lrn-definition-term">{`$f(\\mathrm{H_2A})$`}</span>
            <div className="lrn-definition-desc">
              <p>{`$f(\\mathrm{H_2A}) = \\dfrac{[\\mathrm{H_3O^+}]^2}{H}$`}</p>
              <p>
                <strong>When to use:</strong> To find the fraction of total acid in the fully
                protonated form at a given pH.
              </p>
            </div>
          </div>
          <div className="lrn-definition">
            <span className="lrn-definition-term">{`$f(\\mathrm{HA^-})$`}</span>
            <div className="lrn-definition-desc">
              <p>{`$f(\\mathrm{HA^-}) = \\dfrac{[\\mathrm{H_3O^+}]K_{a1}}{H}$`}</p>
              <p>
                <strong>When to use:</strong> To find the fraction in the singly deprotonated
                (amphiprotic) form.
              </p>
            </div>
          </div>
          <div className="lrn-definition">
            <span className="lrn-definition-term">{`$f(\\mathrm{A^{2-}})$`}</span>
            <div className="lrn-definition-desc">
              <p>{`$f(\\mathrm{A^{2-}}) = \\dfrac{K_{a1}K_{a2}}{H}$`}</p>
              <p>
                <strong>When to use:</strong> To find the fraction in the fully deprotonated form.
              </p>
            </div>
          </div>
        </>,

        <>
          <div className="lrn-header">
            <h2>Autoprotolysis Correction (Very Dilute Solutions)</h2>
          </div>
          <div className="lrn-definition">
            <span className="lrn-definition-term">Quadratic for dilute strong acid</span>
            <div className="lrn-definition-desc">
              <p>{`$[\\mathrm{H_3O^+}]^2 - C[\\mathrm{H_3O^+}] - K_w = 0$`}</p>
              <p>
                <strong>When to use:</strong> When [HCl] or other strong acid concentration is below
                ~10<sup>−6</sup> mol·L<sup>−1</sup>; pH would otherwise exceed 6.5.
              </p>
            </div>
          </div>
          <div className="lrn-definition">
            <span className="lrn-definition-term">Quadratic for dilute strong base</span>
            <div className="lrn-definition-desc">
              <p>{`$[\\mathrm{H_3O^+}]^2 + C[\\mathrm{H_3O^+}] - K_w = 0$`}</p>
              <p>
                <strong>When to use:</strong> When [NaOH] or other strong base concentration is
                below ~10<sup>−6</sup> mol·L<sup>−1</sup>.
              </p>
            </div>
          </div>
          <div className="lrn-definition">
            <span className="lrn-definition-term">Full cubic for dilute weak acid</span>
            <div className="lrn-definition-desc">
              <p>
                {`$[\\mathrm{H_3O^+}]^3 + K_a[\\mathrm{H_3O^+}]^2 - (K_w + K_a C)[\\mathrm{H_3O^+}] - K_aK_w = 0$`}
              </p>
              <p>
                <strong>When to use:</strong> When pH calculated from simple approximation falls
                between 6 and 7, or Ka &lt; ~10<sup>−9</sup>.
              </p>
            </div>
          </div>
          <div className="lrn-definition">
            <span className="lrn-definition-term">Simplified weak acid (pH &lt; 6)</span>
            <div className="lrn-definition-desc">
              <p>
                {`$K_a = \\dfrac{[\\mathrm{H_3O^+}]^2}{[\\mathrm{HA}]_{\\text{initial}} - [\\mathrm{H_3O^+}]}$`}
              </p>
              <p>
                <strong>When to use:</strong> When pH &lt; 6; the standard ICE-table expression
                without autoprotolysis correction.
              </p>
            </div>
          </div>
        </>,

        <>
          <div className="lrn-header">
            <h2>Key Ka and Kb Values</h2>
          </div>
          <table className="lrn-table">
            <thead>
              <tr>
                <th>Acid</th>
                <th>Ka</th>
                <th>pKa</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  CH<sub>3</sub>COOH (acetic)
                </td>
                <td>{`$1.8 \\times 10^{-5}$`}</td>
                <td>4.75</td>
              </tr>
              <tr>
                <td>HCOOH (formic)</td>
                <td>{`$1.7 \\times 10^{-4}$`}</td>
                <td>3.77</td>
              </tr>
              <tr>
                <td>HCN (hydrocyanic)</td>
                <td>{`$4.9 \\times 10^{-10}$`}</td>
                <td>9.31</td>
              </tr>
              <tr>
                <td>HF (hydrofluoric)</td>
                <td>{`$3.5 \\times 10^{-4}$`}</td>
                <td>3.45</td>
              </tr>
              <tr>
                <td>HClO (hypochlorous)</td>
                <td>{`$3.0 \\times 10^{-8}$`}</td>
                <td>7.53</td>
              </tr>
              <tr>
                <td>
                  HClO<sub>2</sub>
                </td>
                <td>{`$1.0 \\times 10^{-2}$`}</td>
                <td>2.00</td>
              </tr>
              <tr>
                <td>
                  HNO<sub>2</sub> (nitrous)
                </td>
                <td>{`$4.3 \\times 10^{-4}$`}</td>
                <td>3.37</td>
              </tr>
              <tr>
                <td>
                  Phenol (C<sub>6</sub>H<sub>5</sub>OH)
                </td>
                <td>{`$1.3 \\times 10^{-10}$`}</td>
                <td>9.89</td>
              </tr>
              <tr>
                <td>Lactic acid</td>
                <td>{`$1.4 \\times 10^{-4}$`}</td>
                <td>3.86</td>
              </tr>
            </tbody>
          </table>
          <table className="lrn-table">
            <thead>
              <tr>
                <th>Base</th>
                <th>Kb</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  NH<sub>3</sub> (ammonia)
                </td>
                <td>{`$1.8 \\times 10^{-5}$`}</td>
              </tr>
              <tr>
                <td>
                  CH<sub>3</sub>NH<sub>2</sub> (methylamine)
                </td>
                <td>{`$3.6 \\times 10^{-4}$`}</td>
              </tr>
              <tr>
                <td>
                  (CH<sub>3</sub>)<sub>2</sub>NH (dimethylamine)
                </td>
                <td>{`$5.4 \\times 10^{-4}$`}</td>
              </tr>
              <tr>
                <td>
                  (CH<sub>3</sub>)<sub>3</sub>N (trimethylamine)
                </td>
                <td>{`$6.5 \\times 10^{-5}$`}</td>
              </tr>
              <tr>
                <td>
                  NH<sub>2</sub>OH (hydroxylamine)
                </td>
                <td>{`$1.1 \\times 10^{-8}$`}</td>
              </tr>
              <tr>
                <td>
                  N<sub>2</sub>H<sub>4</sub> (hydrazine)
                </td>
                <td>{`$1.0 \\times 10^{-6}$`}</td>
              </tr>
              <tr>
                <td>
                  C<sub>6</sub>H<sub>5</sub>NH<sub>2</sub> (aniline)
                </td>
                <td>{`$3.9 \\times 10^{-10}$`}</td>
              </tr>
              <tr>
                <td>
                  C<sub>5</sub>H<sub>5</sub>N (pyridine)
                </td>
                <td>{`$1.8 \\times 10^{-9}$`}</td>
              </tr>
            </tbody>
          </table>
        </>
      ]
    },
    customCss: null
  }
  return config
}

export default function AcidsAndBases() {
  const config = useConfig()
  return <LearningTemplate config={config} />
}
