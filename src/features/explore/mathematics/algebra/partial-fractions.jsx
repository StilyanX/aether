import { LearningTemplate } from '../../../../components/learning/learning-template'

function useConfig() {
  const config = {
    cssPrefix: 'pfr',
    documentTitle: 'Partial Fractions - AETHER',
    learning: {
      groupTitle: 'Polynomials and Partial Fractions',
      category: 'Algebra',
      title: 'Partial Fractions',
      subtitle:
        'Decomposing rational expressions into simpler fractions: four cases, two solving methods, one unifying idea.',
      sections: [
        <>
          <h2>What Partial Fractions Actually Is</h2>

          <p>
            You already know how to add fractions with different denominators. You find a common
            denominator and combine.{' '}
            <strong>Partial fraction decomposition runs that process in reverse.</strong> You start
            with the combined fraction and split it back apart.
          </p>

          <p>
            With plain numbers the analogy is {`$\\frac{1}{2} + \\frac{1}{3} = \\frac{5}{6}$`}.
            Forward, you add two simple fractions to get one harder one. Reverse, you start with{' '}
            {`$\\frac{5}{6}$`} and try to recover {`$\\frac{1}{2} + \\frac{1}{3}$`}. Partial
            fractions does the same thing for rational expressions. It takes a single combined
            fraction and splits it into simpler ones.
          </p>

          <div className="lrn-insight">
            <strong>Why it matters.</strong>
            <p>
              Sums of simple fractions are far easier to work with in calculus and engineering.
              Breaking the fraction down first lets you integrate and simplify expressions that
              would otherwise be too hard to handle.
            </p>
          </div>

          <h3>The Degree Condition</h3>

          <p>
            Partial fraction decomposition applies only to <strong>proper</strong> rational
            expressions. The numerator has strictly lower degree than the denominator, as defined in
            Polynomials. If yours is improper, do polynomial long division first. Then decompose the
            proper remainder.
          </p>

          <h3>The Four Cases at a Glance</h3>

          <p>
            Once the expression is proper, factor the denominator completely. What you see in the
            factored denominator tells you which of four cases you are in. An{' '}
            <strong>irreducible quadratic</strong> below is a quadratic that cannot be split into
            real linear factors. You check this with its discriminant {`$b^2-4ac$`} from Quadratic
            Equations: when {`$b^2-4ac < 0$`}, the quadratic is irreducible. The letters {`$A$`},{' '}
            {`$B$`}, {`$C$`} in the table are unknown constants. You solve for them once the setup, the right-hand side with unknown constants in place, is built.
          </p>

          <table>
            <thead>
              <tr>
                <th>Denominator factor type</th>
                <th>Numerator to use</th>
                <th>Concrete setup</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{`$(ax+b)$`}, distinct linear, once</td>
                <td>Constant: {`$A$`}</td>
                <td>{`$(x+1)(x-3) \\to \\frac{A}{x+1} + \\frac{B}{x-3}$`}</td>
              </tr>
              <tr>
                <td>
                  {`$(ax+b)^n$`}, repeated linear, {`$n$`} times
                </td>
                <td>Constants: {`$A_1, A_2, \\ldots, A_n$`}</td>
                <td>{`$(x-2)^3 \\to \\frac{A}{x-2} + \\frac{B}{(x-2)^2} + \\frac{C}{(x-2)^3}$`}</td>
              </tr>
              <tr>
                <td>{`$(ax^2+bx+c)$`}, irreducible quadratic, once</td>
                <td>Linear: {`$Ax+B$`}</td>
                <td>{`$(x+1)(x^2+2) \\to \\frac{A}{x+1} + \\frac{Bx+C}{x^2+2}$`}</td>
              </tr>
              <tr>
                <td>
                  {`$(ax^2+bx+c)^n$`}, repeated irreducible quadratic, {`$n$`} times
                </td>
                <td>Linears: {`$A_1x+B_1, \\ldots, A_nx+B_n$`}</td>
                <td>{`$(x^2+2)^2 \\to \\frac{Ax+B}{x^2+2} + \\frac{Cx+D}{(x^2+2)^2}$`}</td>
              </tr>
            </tbody>
          </table>

          <div className="lrn-insight">
            <strong>The counting rule.</strong>
            <p>
              The number of unknown constants always equals the degree of the denominator. That also
              equals the number of coefficient equations you get when matching powers of {`$x$`}.
              The system is always square, same number of equations as unknowns, which is why a
              unique solution exists.
            </p>
          </div>

          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>
              A linear factor {`$(ax+b)$`} can only hold a constant in its numerator. Any higher
              degree would make that single term improper on its own.
            </p>
            <p>
              An irreducible quadratic {`$(ax^2+bx+c)$`} can hold a linear {`$Ax+B$`} without the
              term becoming improper. Using only a constant over a quadratic denominator leaves the
              system under-determined, too few unknowns to pin down a single solution. You cannot
              match every power of {`$x$`} after expanding.
            </p>
            <p>
              For repeated factors {`$(ax+b)^n$`} you need one fraction for each power from 1
              through {`$n$`}. The reason is the counting rule above. A denominator that contains{' '}
              {`$(ax+b)^n$`} contributes {`$n$`} to its total degree, so it must contribute {`$n$`}{' '}
              unknowns. Skipping a power loses an unknown, and the system goes under-determined.
            </p>
            <p>
              When you use the correct form, the decomposition is unique. There is exactly one set
              of constants that works.
            </p>
          </div>
        </>,

        <>
          <h2>Case 1, Distinct Linear Factors</h2>

          <h3>Worked Example, Distinct Linear Factors</h3>

          <p>Decompose {`$\\frac{3x}{(x+2)(x-1)}$`}.</p>

          <div className="lrn-steps">
            <div className="lrn-step">
              <span className="lrn-step-title">Step 1: Write the setup</span>
              <p className="lrn-step-content">
                Each distinct linear factor gets a constant on top:{' '}
                {`$\\frac{3x}{(x+2)(x-1)} = \\frac{A}{x+2} + \\frac{B}{x-1}$`}.
              </p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">
                Step 2: Multiply both sides by {`$(x+2)(x-1)$`}
              </span>
              <p className="lrn-step-content">
                The {`$(x+2)$`} factors cancel on the {`$A$`} term. The {`$(x-1)$`} factors cancel
                on the {`$B$`} term. That leaves {`$3x = A(x-1) + B(x+2)$`}.
              </p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">Step 3: Expand and collect</span>
              <p className="lrn-step-content">{`$3x = Ax - A + Bx + 2B = (A+B)x + (-A+2B)$`}</p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">Step 4: Match coefficients</span>
              <p className="lrn-step-content">
                By the Identity Principle from Polynomials, two polynomials equal for all {`$x$`}{' '}
                have equal coefficients at every power. Coefficient of {`$x$`}: {`$A + B = 3$`}.
                Constant term: {`$-A + 2B = 0$`}.
              </p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">Step 5: Solve the system</span>
              <p className="lrn-step-content">
                Add the two equations: {`$3B = 3$`}, so {`$B = 1$`}. Back-substitute: {`$A = 2$`}.
              </p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">Step 6: Verify by recombining</span>
              <p className="lrn-step-content">
                Add the two partial fractions back over a common denominator:{' '}
                {`$\\frac{2}{x+2} + \\frac{1}{x-1} = \\frac{2(x-1) + (x+2)}{(x+2)(x-1)} = \\frac{3x}{(x+2)(x-1)}$`}
                . ✓ Matches the original. Run this verification step on every decomposition you
                produce.
              </p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">Result</span>
              <p className="lrn-step-content">
                {`$\\frac{3x}{(x+2)(x-1)} = \\frac{2}{x+2} + \\frac{1}{x-1}$`}.
              </p>
            </div>
          </div>

          <div className="lrn-insight">
            <strong>The Case 1 rule.</strong>
            <p>
              When the denominator factors into distinct linear pieces, write one fraction per
              factor with a constant numerator, multiply through, and match coefficients:
            </p>
            <div className="lrn-eq lrn-eq-hero">
              <span>{`$$\\frac{P(x)}{(a_1x+b_1)(a_2x+b_2)\\cdots} = \\frac{A_1}{a_1x+b_1} + \\frac{A_2}{a_2x+b_2} + \\cdots$$`}</span>
            </div>
            <p>
              You can now decompose any expression whose denominator is a product of distinct linear
              factors.
            </p>
          </div>

          <h3>Shortcut, The Heaviside Cover-Up Method</h3>

          <p>
            Instead of expanding and building a system, substitute the zero of each linear factor
            directly into {`$3x = A(x-1) + B(x+2)$`}. Each substitution makes all terms except one
            vanish.
          </p>

          <div className="lrn-proof">
            <span className="lrn-proof-header">Heaviside method for the same example</span>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">1.</span>
              <div className="lrn-proof-step-content">
                Let {`$x = 1$`} (zero of {`$(x-1)$`}): {`$3(1) = A(0) + B(3)$`}, so {`$B = 1$`}.
              </div>
            </div>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">2.</span>
              <div className="lrn-proof-step-content">
                Let {`$x = -2$`} (zero of {`$(x+2)$`}): {`$3(-2) = A(-3) + B(0)$`}, so {`$A = 2$`}.
              </div>
            </div>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">3.</span>
              <div className="lrn-proof-step-content">
                Same answer: {`$\\frac{3x}{(x+2)(x-1)} = \\frac{2}{x+2} + \\frac{1}{x-1}$`}.
              </div>
            </div>
          </div>

          <div className="lrn-callout lrn-warning">
            <span className="lrn-callout-label">
              Where Heaviside applies, and where it does not
            </span>
            <p>
              The cover-up substitution works only for <strong>distinct linear factors</strong>.
              That is the whole list. A repeated linear factor {`$(ax+b)^n$`} delivers only the
              top-power constant from its own root. The lower-power constants still need coefficient
              matching. An irreducible quadratic has no real root to substitute, its roots are
              complex (numbers that involve {`$\\sqrt{-1}$`}). For those, use the
              system-of-equations method. You can also mix Heaviside on the linear factors with
              coefficient matching on the quadratic ones.
            </p>
          </div>
        </>,

        <>
          <h2>Case 2, Repeated Linear Factors</h2>

          <h3>Worked Example, Repeated Linear Factors</h3>

          <p>Decompose {`$\\frac{-x^2+2x+4}{x(x-2)^2}$`}.</p>

          <div className="lrn-faded">
            <div className="lrn-faded-phase">
              <span className="lrn-faded-label">COMPLETE EXAMPLE</span>
              <p>
                <strong>Setup:</strong>
              </p>
              <div className="lrn-eq">
                <span>{`$$\\frac{-x^2+2x+4}{x(x-2)^2} = \\frac{A}{x} + \\frac{B}{x-2} + \\frac{C}{(x-2)^2}$$`}</span>
              </div>
              <p>
                <strong>Multiply both sides by {`$x(x-2)^2$`}:</strong>
              </p>
              <div className="lrn-eq">
                <span>{`$$-x^2+2x+4 = A(x-2)^2 + Bx(x-2) + Cx$$`}</span>
              </div>
              <p>
                <strong>Expand the right side:</strong>
              </p>
              <div className="lrn-eq">
                <span>{`$$= A(x^2-4x+4) + B(x^2-2x) + Cx = (A+B)x^2 + (-4A-2B+C)x + 4A$$`}</span>
              </div>
              <p>
                <strong>Match coefficients (Identity Principle from Polynomials):</strong>
              </p>
              <ul className="lrn-list">
                <li>
                  {`$x^2$`}: {`$A + B = -1$`}
                </li>
                <li>
                  {`$x$`}: {`$-4A - 2B + C = 2$`}
                </li>
                <li>constant: {`$4A = 4$`}</li>
              </ul>
              <p>
                <strong>Solve:</strong> From the constant equation, {`$A = 1$`}. Into the {`$x^2$`}{' '}
                equation: {`$B = -2$`}. Into the {`$x$`} equation: {`$-4(1) - 2(-2) + C = 2$`}, so{' '}
                {`$C = 2$`}.
              </p>
              <p>
                <strong>Result (verified by recombining):</strong>
              </p>
              <div className="lrn-eq">
                <span>{`$$\\frac{-x^2+2x+4}{x(x-2)^2} = \\frac{1}{x} - \\frac{2}{x-2} + \\frac{2}{(x-2)^2}$$`}</span>
              </div>
            </div>
            <div className="lrn-faded-phase">
              <span className="lrn-faded-label">YOUR TURN, PARTIAL</span>
              <p>Decompose {`$\\frac{x+4}{x(x-1)^2}$`}. The setup is already written:</p>
              <div className="lrn-eq">
                <span>{`$$\\frac{x+4}{x(x-1)^2} = \\frac{A}{x} + \\frac{B}{x-1} + \\frac{C}{(x-1)^2}$$`}</span>
              </div>
              <ol className="lrn-list">
                <li>Multiply both sides by {`$x(x-1)^2$`}. Write the result.</li>
                <li>Expand and collect like terms on the right side.</li>
                <li>
                  Write three equations by matching coefficients of {`$x^2$`}, {`$x$`}, and the
                  constant.
                </li>
                <li>
                  Solve: what are {`$A$`}, {`$B$`}, {`$C$`}?
                </li>
              </ol>
              <details className="lrn-self-explain-reveal">
                <summary>Check your answer</summary>
                <p>
                  Multiply through: {`$x+4 = A(x-1)^2 + Bx(x-1) + Cx$`}. Heaviside at {`$x = 0$`}:{' '}
                  {`$4 = A$`}. Heaviside at {`$x = 1$`}: {`$5 = C$`}. Coefficient of {`$x^2$`}:{' '}
                  {`$0 = A + B$`}, so {`$B = -4$`}.
                </p>
                <div className="lrn-eq">
                  <span>{`$$\\frac{x+4}{x(x-1)^2} = \\frac{4}{x} - \\frac{4}{x-1} + \\frac{5}{(x-1)^2}$$`}</span>
                </div>
                <p>
                  Verify: {`$\\frac{4}{x} - \\frac{4}{x-1} + \\frac{5}{(x-1)^2}$`} over the common
                  denominator {`$x(x-1)^2$`} gives{' '}
                  {`$\\frac{4(x-1)^2 - 4x(x-1) + 5x}{x(x-1)^2} = \\frac{x+4}{x(x-1)^2}$`}. ✓
                </p>
              </details>
            </div>
            <div className="lrn-faded-phase">
              <span className="lrn-faded-label">INDEPENDENT PRACTICE</span>
              <p>
                Decompose {`$\\frac{3x^2+x+2}{x^2(x+1)}$`} from scratch. Factor the denominator
                first, identify the case, write the setup, and solve for all constants.
              </p>
              <details className="lrn-self-explain-reveal">
                <summary>Check your answer</summary>
                <p>
                  The denominator is already factored as {`$x^2(x+1)$`}: a linear factor {`$x$`}{' '}
                  repeated twice, plus a distinct linear factor {`$(x+1)$`}. Setup:{' '}
                  {`$\\frac{A}{x} + \\frac{B}{x^2} + \\frac{C}{x+1}$`}. Multiply through:{' '}
                  {`$3x^2+x+2 = Ax(x+1) + B(x+1) + Cx^2$`}. Heaviside at {`$x = 0$`}: {`$2 = B$`}.
                  Heaviside at {`$x = -1$`}: {`$4 = C$`}. Coefficient of {`$x^2$`}: {`$3 = A + C$`},
                  so {`$A = -1$`}.
                </p>
                <div className="lrn-eq">
                  <span>{`$$\\frac{3x^2+x+2}{x^2(x+1)} = -\\frac{1}{x} + \\frac{2}{x^2} + \\frac{4}{x+1}$$`}</span>
                </div>
              </details>
            </div>
          </div>

          <div className="lrn-insight">
            <strong>The Case 2 rule.</strong>
            <p>
              When a linear factor {`$(ax+b)$`} appears {`$n$`} times in the denominator, write
              {` $n$ `}separate fractions, one per power from 1 through {`$n$`}:
            </p>
            <div className="lrn-eq lrn-eq-hero">
              <span>{`$$\\frac{P(x)}{(ax+b)^n} = \\frac{A_1}{ax+b} + \\frac{A_2}{(ax+b)^2} + \\cdots + \\frac{A_n}{(ax+b)^n}$$`}</span>
            </div>
            <p>
              You can now decompose a denominator that repeats a linear factor any number of times.
            </p>
          </div>

          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>
              Suppose you tried just one fraction per repeated factor and wrote{' '}
              {`$\\frac{A}{x} + \\frac{B}{(x-2)^2}$`}. Over the common denominator {`$x(x-2)^2$`}{' '}
              the numerator would be {`$A(x-2)^2 + Bx = Ax^2 - 4Ax + 4A + Bx$`}. That is a degree-2
              polynomial, three coefficients to match, but you only have two unknowns. The system
              is under-determined.
            </p>
            <p>
              Adding the middle-power term {`$\\frac{B}{x-2}$`} introduces a third unknown. Now you
              have a square system (same number of equations as unknowns, three of each) and a
              unique solution exists.
            </p>
          </div>
        </>,

        <>
          <h2>Case 3, Nonrepeated Irreducible Quadratic Factor</h2>

          <h3>Worked Example, Nonrepeated Irreducible Quadratic</h3>

          <p>
            Decompose {`$\\frac{8x^2+12x-20}{(x+3)(x^2+x+2)}$`}. The quadratic factor {`$x^2+x+2$`}{' '}
            has discriminant {`$1 - 8 = -7 < 0$`}, so it cannot split into real linear pieces. It is
            irreducible. Each such factor takes a linear numerator {`$Bx+C$`}.
          </p>

          <div className="lrn-proof">
            <span className="lrn-proof-header">Working</span>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">1.</span>
              <div className="lrn-proof-step-content">
                Write the setup:{' '}
                {`$\\frac{8x^2+12x-20}{(x+3)(x^2+x+2)} = \\frac{A}{x+3} + \\frac{Bx+C}{x^2+x+2}$`}.
              </div>
            </div>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">2.</span>
              <div className="lrn-proof-step-content">
                Multiply both sides by {`$(x+3)(x^2+x+2)$`}:{' '}
                {`$8x^2+12x-20 = A(x^2+x+2) + (Bx+C)(x+3)$`}.
              </div>
            </div>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">3.</span>
              <div className="lrn-proof-step-content">
                Use Heaviside at {`$x = -3$`} to find {`$A$`}:{' '}
                {`$8(9) + 12(-3) - 20 = A(9-3+2) + 0$`}, giving {`$72 - 36 - 20 = 8A$`}, so{' '}
                {`$A = 2$`}.
              </div>
            </div>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">4a.</span>
              <div className="lrn-proof-step-content">
                Substitute {`$A = 2$`} and expand each piece separately:{' '}
                {`$2(x^2+x+2) = 2x^2+2x+4$`} and {`$(Bx+C)(x+3) = Bx^2+3Bx+Cx+3C$`}.
              </div>
            </div>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">4b.</span>
              <div className="lrn-proof-step-content">
                Collect terms by power of {`$x$`}: {`$8x^2+12x-20 = (2+B)x^2 + (2+3B+C)x + (4+3C)$`}
                .
              </div>
            </div>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">5.</span>
              <div className="lrn-proof-step-content">
                Match coefficients. {`$x^2$`}: {`$2+B = 8$`}, so {`$B = 6$`}. Constant:{' '}
                {`$4+3C = -20$`}, so {`$C = -8$`}. The {`$x$`} coefficient equation now verifies the
                answer: substitute {`$A=2$`}, {`$B=6$`}, {`$C=-8$`} into {`$A+3B+C$`} →{' '}
                {`$2+18-8 = 12$`} ✓, matches the LHS coefficient of {`$x$`}.
              </div>
            </div>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">6.</span>
              <div className="lrn-proof-step-content">
                Result:{' '}
                {`$\\frac{8x^2+12x-20}{(x+3)(x^2+x+2)} = \\frac{2}{x+3} + \\frac{6x-8}{x^2+x+2}$`}.
              </div>
            </div>
          </div>

          <div className="lrn-insight">
            <strong>The Case 3 rule.</strong>
            <p>
              When the denominator contains an irreducible quadratic factor {`$(ax^2+bx+c)$`}, that
              factor gets a linear numerator {`$Ax+B$`}. Irreducible here means
              {` $b^2-4ac < 0$ `}using only real-number coefficients:
            </p>
            <div className="lrn-eq lrn-eq-hero">
              <span>{`$$\\frac{P(x)}{(ax^2+bx+c)(\\cdots)} = \\frac{Ax+B}{ax^2+bx+c} + \\cdots$$`}</span>
            </div>
            <p>
              Heaviside still kills the linear factors instantly. The irreducible quadratic needs
              coefficient matching for its two unknowns, because it has no real root to substitute.
              You can now decompose any rational expression whose denominator has a single
              irreducible quadratic factor.
            </p>
          </div>
        </>,

        <>
          <h2>Case 4, Repeated Irreducible Quadratic Factor</h2>

          <h3>Worked Example, Repeated Irreducible Quadratic</h3>

          <p>
            Decompose {`$\\frac{x^4+x^3+x^2-x+1}{x(x^2+1)^2}$`}. The factor {`$(x^2+1)$`} has
            discriminant {`$0-4 = -4 < 0$`}, so it is irreducible. It appears twice, so it
            contributes two fractions to the setup.
          </p>

          <div className="lrn-callout">
            <span className="lrn-callout-label">Try the setup yourself first</span>
            <p>
              You have done three full decompositions now. Before reading the working, write the
              setup form, multiply through by {`$x(x^2+1)^2$`}, and plan how you would match
              coefficients. Then check your plan against the working below.
            </p>
          </div>

          <div className="lrn-proof">
            <span className="lrn-proof-header">Working</span>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">1.</span>
              <div className="lrn-proof-step-content">
                Write the setup:{' '}
                {`$\\frac{x^4+x^3+x^2-x+1}{x(x^2+1)^2} = \\frac{A}{x} + \\frac{Bx+C}{x^2+1} + \\frac{Dx+E}{(x^2+1)^2}$`}
                .
              </div>
            </div>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">2.</span>
              <div className="lrn-proof-step-content">
                Multiply both sides by {`$x(x^2+1)^2$`}:{' '}
                {`$x^4+x^3+x^2-x+1 = A(x^2+1)^2 + (Bx+C)(x)(x^2+1) + (Dx+E)(x)$`}.
              </div>
            </div>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">3.</span>
              <div className="lrn-proof-step-content">
                First the bracket expansion you need:{' '}
                {`$(x^2+1)^2 = (x^2)^2 + 2(x^2)(1) + 1^2 = x^4+2x^2+1$`}. Now expand each piece on
                the right side. {`$A(x^2+1)^2 = Ax^4+2Ax^2+A$`}.{' '}
                {`$(Bx+C)x(x^2+1) = Bx^4+Cx^3+Bx^2+Cx$`}. {`$(Dx+E)x = Dx^2+Ex$`}.
              </div>
            </div>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">4.</span>
              <div className="lrn-proof-step-content">
                Collect by power: {`$(A+B)x^4 + Cx^3 + (2A+B+D)x^2 + (C+E)x + A$`}.
              </div>
            </div>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">5.</span>
              <div className="lrn-proof-step-content">
                The LHS {`$x^4+x^3+x^2-x+1$`} has coefficients {`$1, 1, 1, -1, 1$`} for the powers{' '}
                {`$x^4, x^3, x^2, x^1, x^0$`}. Match term by term: {`$A+B = 1$`}; {`$C = 1$`};{' '}
                {`$2A+B+D = 1$`}; {`$C+E = -1$`}; {`$A = 1$`}.
              </div>
            </div>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">6.</span>
              <div className="lrn-proof-step-content">
                Solve by substitution: {`$A = 1$`}. Then {`$1+B = 1$`} gives {`$B = 0$`}. Then{' '}
                {`$2(1)+0+D = 1$`} gives {`$D = -1$`}. From {`$C = 1$`}: {`$1+E = -1$`} gives{' '}
                {`$E = -2$`}.
              </div>
            </div>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">7.</span>
              <div className="lrn-proof-step-content">
                Result:{' '}
                {`$\\frac{x^4+x^3+x^2-x+1}{x(x^2+1)^2} = \\frac{1}{x} + \\frac{1}{x^2+1} - \\frac{x+2}{(x^2+1)^2}$`}
                .
              </div>
            </div>
          </div>

          <div className="lrn-insight">
            <strong>The Case 4 rule.</strong>
            <p>
              When an irreducible quadratic factor {`$(ax^2+bx+c)$`} appears {`$n$`} times, write
              {` $n$ `}fractions for it. The denominators run through increasing powers from {`$1$`}{' '}
              to {`$n$`}. Each one keeps its own linear numerator:
            </p>
            <div className="lrn-eq lrn-eq-hero">
              <span>{`$$\\frac{P(x)}{(ax^2+bx+c)^n} = \\frac{A_1x+B_1}{ax^2+bx+c} + \\frac{A_2x+B_2}{(ax^2+bx+c)^2} + \\cdots + \\frac{A_nx+B_n}{(ax^2+bx+c)^n}$$`}</span>
            </div>
            <p>
              You can now decompose a rational expression whose denominator holds a repeated
              irreducible quadratic factor. This is the hardest of the four cases.
            </p>
          </div>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>
              In this example, {`$B$`} came out to zero. Does that break the decomposition, or is it
              a valid result?
            </p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                {`$B = 0$`} is a valid result. The numerator of the {`$\\frac{Bx+C}{x^2+1}$`} term
                simplifies to {`$C = 1$`}, making that fraction {`$\\frac{1}{x^2+1}$`}. You still
                need that term in the decomposition. Without it, the system would be
                under-determined and the decomposition could not match all coefficient equations.
                Zero is a number, and the algebra gave it to you honestly.
              </p>
            </details>
          </div>
        </>,

        <>
          <h2>When the Numerator Has Degree ≥ Denominator</h2>

          <p>
            All four cases assume the expression is <strong>proper</strong>: the numerator has
            strictly lower degree than the denominator. If your fraction is improper (degree of
            numerator ≥ degree of denominator), perform polynomial long division first. Then
            decompose the proper remainder. Recombine to verify.
          </p>

          <h3>Worked Example, Improper Rational Expression</h3>

          <p>Decompose {`$\\frac{2x^4+4x^3+2x^2+x+7}{x^3-2x^2-x+2}$`}.</p>

          <div className="lrn-steps">
            <div className="lrn-step">
              <span className="lrn-step-title">Step 1: Check the degree</span>
              <p className="lrn-step-content">
                Numerator degree is 4. Denominator degree is 3. The expression is improper (4 ≥ 3).
                Divide first.
              </p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">Step 2: Polynomial long division</span>
              <p className="lrn-step-content">
                Divide {`$2x^4+4x^3+2x^2+x+7$`} by {`$x^3-2x^2-x+2$`}. The first quotient term is{' '}
                {`$\\frac{2x^4}{x^3} = 2x$`}. Multiply: {`$2x(x^3-2x^2-x+2) = 2x^4-4x^3-2x^2+4x$`}.
                Subtract from the numerator:{' '}
                {`$(2x^4+4x^3+2x^2+x+7) - (2x^4-4x^3-2x^2+4x) = 8x^3+4x^2-3x+7$`}.
              </p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">Step 3: Continue dividing</span>
              <p className="lrn-step-content">
                Divide {`$8x^3+4x^2-3x+7$`} by {`$x^3-2x^2-x+2$`}. The next quotient term is{' '}
                {`$\\frac{8x^3}{x^3} = 8$`}. Multiply: {`$8(x^3-2x^2-x+2) = 8x^3-16x^2-8x+16$`}.
                Subtract: {`$(8x^3+4x^2-3x+7) - (8x^3-16x^2-8x+16) = 20x^2+5x-9$`}.
              </p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">Step 4: Write the division result</span>
              <p className="lrn-step-content">
                {`$$\\frac{2x^4+4x^3+2x^2+x+7}{x^3-2x^2-x+2} = 2x + 8 + \\frac{20x^2+5x-9}{x^3-2x^2-x+2}$$`}
              </p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">Step 5: Factor the denominator</span>
              <p className="lrn-step-content">
                Factor {`$x^3-2x^2-x+2 = (x-1)(x+1)(x-2)$`}. (Use factor theorem or trial and
                error.)
              </p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">
                Step 6: Set up partial fractions for the remainder
              </span>
              <p className="lrn-step-content">
                {`$$\\frac{20x^2+5x-9}{(x-1)(x+1)(x-2)} = \\frac{A}{x-1} + \\frac{B}{x+1} + \\frac{C}{x-2}$$`}
              </p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">Step 7: Multiply through and solve</span>
              <p className="lrn-step-content">
                {`$$20x^2+5x-9 = A(x+1)(x-2) + B(x-1)(x-2) + C(x-1)(x+1)$$`}
                Heaviside at {`$x=1$`}: {`$20+5-9 = A(2)(-1)$`}, so {`$16 = -2A$`} and {`$A = -8$`}.
                Heaviside at {`$x=-1$`}: {`$20-5-9 = B(-2)(-3)$`}, so {`$6 = 6B$`} and {`$B = 1$`}.
                Heaviside at {`$x=2$`}: {`$80+10-9 = C(1)(3)$`}, so {`$81 = 3C$`} and {`$C = 27$`}.
              </p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">Step 8: Write the full decomposition</span>
              <p className="lrn-step-content">
                {`$$\\frac{2x^4+4x^3+2x^2+x+7}{x^3-2x^2-x+2} = 2x + 8 - \\frac{8}{x-1} + \\frac{1}{x+1} + \\frac{27}{x-2}$$`}
              </p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">Step 9: Verify by recombining</span>
              <p className="lrn-step-content">
                Combine over a common denominator {`$(x-1)(x+1)(x-2)$`}, expand, and check that you
                get {`$2x^4+4x^3+2x^2+x+7$`} in the numerator. The algebra confirms the
                decomposition is correct.
              </p>
            </div>
          </div>

          <div className="lrn-insight">
            <strong>The improper case rule.</strong>
            <p>
              If the numerator has degree ≥ the denominator's degree, divide first. The quotient is
              a polynomial. The remainder is proper (lower degree). Decompose the remainder, then
              add it to the quotient:
            </p>
            <div className="lrn-eq lrn-eq-hero">
              <span>{`$$\\frac{P(x)}{Q(x)} = \\text{(polynomial quotient)} + \\frac{\\text{proper remainder}}{Q(x)}$$`}</span>
            </div>
            <p>
              Only the fraction part gets partial fraction decomposition. The polynomial quotient
              stays as-is.
            </p>
          </div>
        </>
      ]
    },

    practice: [
      {
        q: `You want to decompose $\\frac{5x+3}{(x-1)(x+2)}$. What is the correct setup form?`,
        a: `The denominator has two distinct linear factors. Each gets a constant numerator. Setup: $\\frac{5x+3}{(x-1)(x+2)} = \\frac{A}{x-1} + \\frac{B}{x+2}$. Two fractions, two unknowns.`
      },
      {
        q: `Decompose $\\frac{4x+1}{(x+1)(x+2)}$ using the system-of-equations method. Show all steps.`,
        a: `Setup: $\\frac{A}{x+1} + \\frac{B}{x+2}$. Multiply through: $4x+1 = A(x+2) + B(x+1)$. Expand: $4x+1 = (A+B)x + (2A+B)$. System: $A+B = 4$ and $2A+B = 1$. Subtract the first from the second: $A = -3$. Back-substitute: $B = 7$. Result: $\\frac{-3}{x+1} + \\frac{7}{x+2}$.`
      },
      {
        q: `Use the Heaviside shortcut to decompose $\\frac{7x-4}{(x-2)(x+1)}$.`,
        a: `Setup: $\\frac{A}{x-2} + \\frac{B}{x+1}$. Multiply through: $7x-4 = A(x+1) + B(x-2)$. Let $x=2$: $14-4 = A(3)$, so $A = \\frac{10}{3}$. Let $x=-1$: $-7-4 = B(-3)$, so $B = \\frac{11}{3}$. Result: $\\frac{10}{3(x-2)} + \\frac{11}{3(x+1)}$.`
      },
      {
        q: `Is $\\frac{x^3+1}{(x-1)(x+2)}$ a proper or improper rational expression? What must you do before decomposing?`,
        a: `The numerator has degree 3, the denominator has degree 2, so this is improper. Do polynomial long division first. Then decompose the proper remainder using partial fractions.`
      },
      {
        q: `Decompose $\\frac{3x-1}{x(x-1)^2}$. Show the full working.`,
        a: `Setup: $\\frac{A}{x} + \\frac{B}{x-1} + \\frac{C}{(x-1)^2}$. Multiply through: $3x-1 = A(x-1)^2 + Bx(x-1) + Cx$. Expand $A(x-1)^2 + Bx(x-1) + Cx = (A+B)x^2 + (-2A-B+C)x + A$. System: $A+B = 0$; $-2A-B+C = 3$; $A = -1$. From the third equation, $A=-1$. Into the first: $B=1$. Into the second: $2-1+C=3$, so $C=2$. Result: $\\frac{-1}{x} + \\frac{1}{x-1} + \\frac{2}{(x-1)^2}$.`
      },
      {
        q: `Predict: the expression $\\frac{3x+1}{(x+1)^3}$ has a triply-repeated linear factor. How many partial fraction terms will its decomposition have, and what are their denominator forms?`,
        a: `Three terms: $\\frac{A}{x+1} + \\frac{B}{(x+1)^2} + \\frac{C}{(x+1)^3}$. One term per power of the repeated factor, from power 1 through power 3. Each has a constant numerator because each denominator factor is linear (or a power of a linear factor).`
      },
      {
        q: `Identify the error: a student writes $\\frac{4x-1}{(x^2+4)(x-3)} = \\frac{A}{x^2+4} + \\frac{B}{x-3}$. What is wrong?`,
        a: `The numerator over the irreducible quadratic factor $(x^2+4)$ must be linear, not a constant. The correct setup is $\\frac{Ax+B}{x^2+4} + \\frac{C}{x-3}$. A constant $A$ over a degree-2 factor leaves the system under-determined. With only one unknown per quadratic factor you cannot match the coefficient of $x$ in the numerator.`
      },
      {
        q: `Decompose $\\frac{2x^2+x+6}{(x-1)(x^2+2)}$. Show the full working.`,
        a: `First check: $x^2+2$ has discriminant $0-8 = -8 < 0$, so it is irreducible. Setup: $\\frac{A}{x-1} + \\frac{Bx+C}{x^2+2}$. Multiply through: $2x^2+x+6 = A(x^2+2) + (Bx+C)(x-1)$. Heaviside at $x=1$: $2+1+6 = 3A$, so $A=3$. Substitute $A=3$ and rearrange: $(Bx+C)(x-1) = 2x^2+x+6 - 3(x^2+2) = -x^2+x$. Expand the left: $Bx^2+(C-B)x-C$. Match: $B=-1$; $-C=0$ gives $C=0$. Result: $\\frac{3}{x-1} - \\frac{x}{x^2+2}$.`
      },
      {
        q: `Explain why the Heaviside substitution method works. What algebraic property makes it valid?`,
        a: `After multiplying through by the common denominator, you get a polynomial equation that holds for all values of $x$. It is a polynomial identity, not an equation with one solution. Substituting the zero of a specific linear factor $(ax+b)$ makes every partial fraction term that still contains $(ax+b)$ collapse to zero. That leaves only the term whose constant you want to isolate. The method is valid because a polynomial identity that holds for all $x$ also holds at any specific value of $x$.`
      },
      {
        q: `Transfer: in partial fractions, matching coefficients after expanding works because both sides are polynomials. They are equal for all $x$. Name another situation in algebra where you use the same reasoning.`,
        a: `One example: proving that two polynomial expressions are identical. Verify $(a+b)^2 = a^2+2ab+b^2$ by expanding both sides and checking that every coefficient matches. Another: showing that a polynomial of degree at most $n$ that agrees with another at $n+1$ points must be identically equal. That is interpolation uniqueness. The key principle is the same: two polynomials equal for all $x$ must have equal coefficients at every power.`
      },
      {
        q: `You are decomposing a rational expression and a constant comes out to zero. Should you drop that term from the final answer?`,
        a: `Yes. A zero coefficient means that fraction contributes nothing to the sum. Drop it from the written answer. For example, if $B=0$ in $\\frac{A}{x+1} + \\frac{B}{x-2}$, the answer is just $\\frac{A}{x+1}$. Zero coefficients are a legitimate output of the algebra. They mean that particular fraction was not needed for this particular numerator.`
      },
      {
        q: `Decompose $\\frac{x^3+2x^2+x+3}{(x^2+1)^2}$. State the case, write the setup, and solve for all constants.`,
        a: `Case 4 (repeated irreducible quadratic). Setup: $\\frac{Ax+B}{x^2+1} + \\frac{Cx+D}{(x^2+1)^2}$. Multiply through: $x^3+2x^2+x+3 = (Ax+B)(x^2+1) + (Cx+D)$. Expand $(Ax+B)(x^2+1) = Ax^3+Ax+Bx^2+B$, then add $(Cx+D)$: total RHS $= Ax^3 + Bx^2 + (A+C)x + (B+D)$. Match: $A=1$; $B=2$; $A+C=1$ gives $C=0$; $B+D=3$ gives $D=1$. Result: $\\frac{x+2}{x^2+1} + \\frac{1}{(x^2+1)^2}$.`
      },
      {
        q: `A student decomposes $\\frac{2x+5}{x^2(x-1)}$ and writes $\\frac{A}{x^2} + \\frac{B}{x-1}$. Identify what is missing and write the correct setup.`,
        a: `The student skipped the $\\frac{A}{x}$ term. The factor $x$ appears twice in $x^2$, so you need one term per power: $\\frac{A_1}{x}$ and $\\frac{A_2}{x^2}$. Correct setup: $\\frac{A}{x} + \\frac{B}{x^2} + \\frac{C}{x-1}$. Skipping the $\\frac{A}{x}$ term leaves only two unknowns for three coefficient equations, which in general has no solution.`
      },
      {
        q: `Elaborate: the system-of-equations method and the Heaviside method always give the same answer. Why are they interchangeable, and when is one faster?`,
        a: `They are interchangeable because both operate on the same polynomial identity: $P(x) = \\sum \\text{(numerator terms expanded)}$. The identity must hold for all $x$. The system-of-equations method uses all values of $x$ implicitly (matching coefficients). Heaviside uses specific values of $x$ to exploit factor zeros. Both extract all the information from the same identity. Heaviside is faster when a linear factor has a simple integer root, since one substitution gives one unknown instantly. For irreducible quadratic factors the roots are complex (numbers that involve $\\sqrt{-1}$), so only the system-of-equations approach is practical without complex arithmetic.`
      },
      {
        q: `Which case applies to each denominator below? (a) $(x+1)(x-3)$ (b) $(x-2)^3$ (c) $(x^2+1)(x-5)$ (d) $(x^2+4)^2$`,
        a: `(a) Case 1, two distinct linear factors: $\\frac{A}{x+1}+\\frac{B}{x-3}$. (b) Case 2, one linear factor repeated 3 times: $\\frac{A}{x-2}+\\frac{B}{(x-2)^2}+\\frac{C}{(x-2)^3}$. (c) Case 3, one irreducible quadratic and one distinct linear: $\\frac{A}{x-5}+\\frac{Bx+C}{x^2+1}$. (d) Case 4, one irreducible quadratic repeated twice: $\\frac{Ax+B}{x^2+4}+\\frac{Cx+D}{(x^2+4)^2}$.`
      },
      {
        q: `Transfer: show explicitly that $\\frac{1}{x-4} + \\frac{2}{x+1}$ combines to $\\frac{3x-7}{(x-4)(x+1)}$. Then explain how this confirms that partial fraction decomposition is the reverse of adding fractions.`,
        a: `Common denominator is $(x-4)(x+1)$. So: $\\frac{1 \\cdot (x+1)}{(x-4)(x+1)} + \\frac{2(x-4)}{(x-4)(x+1)} = \\frac{x+1+2x-8}{(x-4)(x+1)} = \\frac{3x-7}{(x-4)(x+1)}$. This confirms the forward direction. Partial fraction decomposition starts from $\\frac{3x-7}{(x-4)(x+1)}$ and recovers $\\frac{1}{x-4} + \\frac{2}{x+1}$, precisely undoing this addition. The two operations are inverses of each other.`
      },
      {
        q: `What must you do if the numerator of a rational expression has degree greater than or equal to the denominator before attempting partial fraction decomposition?`,
        a: `Perform polynomial long division first. The quotient is a polynomial (which stays in the final answer). The remainder becomes the numerator of the proper fraction. Only the proper remainder gets partial fraction decomposition.`
      },
      {
        q: `Decompose $\\frac{x^3+3x+1}{x^2-1}$. The expression is improper. Divide first, set up partials for the remainder, then give the final answer.`,
        a: `Numerator degree 3, denominator degree 2, improper. Divide $x^3+3x+1$ by $x^2-1$: quotient is $x$, remainder is $4x+1$. So $\\frac{x^3+3x+1}{x^2-1} = x + \\frac{4x+1}{x^2-1} = x + \\frac{4x+1}{(x-1)(x+1)}$. For the remainder: $\\frac{4x+1}{(x-1)(x+1)} = \\frac{A}{x-1} + \\frac{B}{x+1}$. Multiply: $4x+1 = A(x+1) + B(x-1)$. Heaviside at $x=1$: $5 = 2A$, so $A = 5/2$. Heaviside at $x=-1$: $-3 = -2B$, so $B = 3/2$. Final: $\\frac{x^3+3x+1}{x^2-1} = x + \\frac{5}{2(x-1)} + \\frac{3}{2(x+1)}$.`
      },
      {
        q: `For the improper fraction $\\frac{x^4+x^2+1}{x^2+1}$, divide first. What is the quotient and what is the degree of the remainder?`,
        a: `Divide $x^4+x^2+1$ by $x^2+1$. First quotient term: $x^4/(x^2) = x^2$. Multiply: $x^2(x^2+1) = x^4+x^2$. Subtract: $(x^4+x^2+1)-(x^4+x^2) = 1$. So the quotient is $x^2$ and the remainder is 1 (degree 0, which is < 2). The result is $\\frac{x^4+x^2+1}{x^2+1} = x^2 + \\frac{1}{x^2+1}$. The remainder is already proper (constant over a quadratic), so it does not factor further and needs no partial fractions.`
      },
      {
        q: `End-to-end: decompose $\\frac{x^3-x^2+2}{(x-1)(x+1)}$. The expression is improper, so divide first, then decompose, then verify by recombining.`,
        a: `Numerator degree 3, denominator degree 2, improper. Step 1 (divide): polynomial long division of $x^3-x^2+2$ by $(x-1)(x+1) = x^2-1$ gives quotient $x-1$ and remainder $x+1$. So $\\frac{x^3-x^2+2}{(x-1)(x+1)} = (x-1) + \\frac{x+1}{(x-1)(x+1)}$. Step 2 (decompose the proper remainder): cancel the common factor $(x+1)$ to get $\\frac{1}{x-1}$. (Or set up $\\frac{x+1}{(x-1)(x+1)} = \\frac{A}{x-1} + \\frac{B}{x+1}$, multiply through to get $x+1 = A(x+1) + B(x-1)$, Heaviside at $x=1$ gives $A=1$, Heaviside at $x=-1$ gives $B=0$.) Final: $\\frac{x^3-x^2+2}{(x-1)(x+1)} = x-1+\\frac{1}{x-1}$. Step 3 (verify by recombining): $(x-1) + \\frac{1}{x-1} = \\frac{(x-1)^2 + 1}{x-1} = \\frac{x^2-2x+2}{x-1}$. Multiply top and bottom by $(x+1)$: $\\frac{(x^2-2x+2)(x+1)}{(x-1)(x+1)} = \\frac{x^3-x^2+2}{(x-1)(x+1)}$. ✓ Matches the original.`
      }
    ],

    reference: {
      category: 'Quick Reference',
      title: 'Partial Fractions',
      sections: [
        <>
          <h2>The Degree Condition</h2>

          <p>
            Decomposition requires a <strong>proper</strong> rational expression: degree of
            numerator strictly less than degree of denominator. If the expression is improper, do
            polynomial long division first, then decompose the remainder.
          </p>

          <h2>Four Cases, Setup Forms</h2>

          <table>
            <thead>
              <tr>
                <th>Denominator factor</th>
                <th>Numerator form</th>
                <th>When to use</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{`$(ax+b)$`}, distinct linear</td>
                <td>{`$\\frac{A}{ax+b}$`}</td>
                <td>Linear factor appears exactly once</td>
              </tr>
              <tr>
                <td>{`$(ax+b)^n$`}, repeated linear</td>
                <td>{`$\\frac{A_1}{ax+b} + \\cdots + \\frac{A_n}{(ax+b)^n}$`}</td>
                <td>Linear factor appears {`$n$`} times; write one term per power</td>
              </tr>
              <tr>
                <td>{`$(ax^2+bx+c)$`}, irreducible quadratic, once</td>
                <td>{`$\\frac{Ax+B}{ax^2+bx+c}$`}</td>
                <td>Discriminant {`$b^2-4ac < 0$`} and factor appears once</td>
              </tr>
              <tr>
                <td>{`$(ax^2+bx+c)^n$`}, repeated irreducible quadratic</td>
                <td>{`$\\frac{A_1x+B_1}{ax^2+bx+c} + \\cdots + \\frac{A_nx+B_n}{(ax^2+bx+c)^n}$`}</td>
                <td>
                  Discriminant {`$< 0$`} and factor appears {`$n$`} times
                </td>
              </tr>
            </tbody>
          </table>

          <h2>Numerator Form Rule</h2>

          <ul className="lrn-list">
            <li>
              Linear factor {`$(ax+b)$`}: constant numerator, {`$A$`}.
            </li>
            <li>
              Irreducible quadratic {`$(ax^2+bx+c)$`}: linear numerator, {`$Ax+B$`}.
            </li>
            <li>Never use a constant over a quadratic factor; it under-determines the system.</li>
          </ul>

          <h2>Two Solving Methods</h2>

          <div className="ref-formula">
            <span className="ref-formula-name">System of equations</span>
            <div className="ref-formula-eq">
              {`$$\\text{Expand right side} \\Rightarrow \\text{match coefficients by power of } x$$`}
            </div>
            <p className="ref-formula-desc">
              When to use: any of the four cases. Produces a linear system of equations, one per
              power of {`$x$`} in the numerator.
            </p>
          </div>

          <div className="ref-formula">
            <span className="ref-formula-name">Heaviside substitution</span>
            <div className="ref-formula-eq">
              {`$$x = \\text{root of linear factor} \\Rightarrow \\text{all other terms vanish}$$`}
            </div>
            <p className="ref-formula-desc">
              When to use: linear factors with easy integer roots. Does not apply to irreducible
              quadratic factors directly (complex roots). Can mix with coefficient matching.
            </p>
          </div>
        </>
      ]
    },

    customCss: null
  }
  return config
}

export default function PartialFractions() {
  return <LearningTemplate config={useConfig()} />
}
