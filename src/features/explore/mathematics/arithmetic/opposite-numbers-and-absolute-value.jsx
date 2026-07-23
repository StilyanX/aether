import { LearningTemplate } from '../../../../components/learning/learning-template'
import { useVizColors } from '../../../../hooks/use-viz-colors'
import * as viz from './opposite-numbers-and-absolute-value-viz'

function useConfig() {
  const C = useVizColors()
  const config = {
    cssPrefix: 'oav',
    documentTitle: 'Opposite Numbers and Absolute Value - AETHER',
    learning: {
      groupTitle: 'Rational Numbers',
      category: 'Arithmetic',
      title: 'Opposite Numbers and Absolute Value',
      subtitle:
        'Why multiplying by a negative flips an inequality, what absolute value really measures, and how the triangle inequality connects them.',
      sections: [
        /* SECTION 1: STARTING POINT - OPPOSITE NUMBERS
         */
        <>
          <h2>Starting Point: Opposite Numbers</h2>

          <p>
            You already know negative numbers. A negative number sits below zero on the number line:{' '}
            {`$-3°$`} for three degrees below freezing, {`$-5$`} for five strokes under par in golf.
            Positive and negative numbers together are called <strong>directed numbers</strong>{' '}
            (numbers that carry a direction, left or right of zero).
          </p>

          <p>
            You can also add and subtract them by walking on the number line. Right means up, left
            means down. This page builds on that. Our real topic starts here:
          </p>

          <p>
            Look at {`$-3$`} and {`$+3$`}. They sit the same distance from zero, on opposite sides.
            We call them <strong>opposite numbers</strong>. That idea drives the whole page.
          </p>

          <viz.ThermometerNumberLine C={C} />
        </>,

        /* SECTION 2: OPPOSITE NUMBERS, REFLECTION ACROSS ZERO
         */
        <>
          <h2>Opposite Numbers: Reflection Across Zero</h2>

          <p>
            The <strong>opposite</strong> of a number {`$x$`} is the number {`$-x$`}. It sits the
            same distance from zero, but on the other side. On the number line, {`$x$`} and {`$-x$`}{' '}
            are mirror images through 0.
          </p>

          <div className="lrn-definition">
            <div className="lrn-definition-term">When to use this</div>
            <div className="lrn-definition-desc">
              <p>
                Use the opposite to reverse a direction: undo a gain with a loss, or cancel a debt
                with a payment. Later you will see how opposites flip inequalities.
              </p>
            </div>
          </div>

          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              What is the opposite of {`$-7$`}? And what is {`$-(-7)$`}?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                The opposite of {`$-7$`} is {`$7$`}. Reflecting {`$-7$`} across zero lands on{' '}
                {`$7$`}. So {`$-(-7) = 7$`}. The opposite of the opposite is the original.
              </p>
            </details>
          </div>

          <h3>The Opposite of the Opposite</h3>

          <p>
            Start with a concrete number. Take {`$6$`}. Its opposite is {`$-6$`}. Now take the
            opposite again. The opposite of {`$-6$`} is {`$6$`}. You are back where you started. In
            symbols, {`$-(-6) = 6$`}.
          </p>

          <p>
            The same thing works for any number {`$x$`}. Reflecting twice across zero returns you to
            the start. So {`$-(-x) = x$`}. The opposite of the opposite is the original.
          </p>

          <viz.OppositeReflectionLine C={C} />

          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">ELABORATE</span>
            <p>
              Opposites show up everywhere we have a zero to reflect across. Temperature, money, and
              altitude all use the same mirror through zero.
            </p>
          </div>

          <div className="lrn-compare">
            <p>
              <strong>Opposite vs. reciprocal.</strong> Students often confuse these two
              transformations of {`$x$`}.
            </p>
            <ul className="lrn-list">
              <li>
                <strong>Opposite</strong> ({`$-x$`}): flip the sign. The opposite of {`$3$`} is{' '}
                {`$-3$`}. The opposite of {`$-3$`} is {`$3$`}. Distance from zero stays the same.
              </li>
              <li>
                <strong>Reciprocal</strong> ({`$\\frac{1}{x}$`}): flip the size. The reciprocal of{' '}
                {`$3$`} is {`$\\frac{1}{3}$`}. Large numbers become small; small become large.
              </li>
            </ul>
            <p>
              The opposite of {`$3$`} is {`$-3$`}. The reciprocal of {`$3$`} is {`$\\frac{1}{3}$`}.
              These are different numbers and do different things.
            </p>
          </div>
        </>,

        /* SECTION 3: WALKING ON THE NUMBER LINE
         */
        <>
          <h2>Quick Recap: Walking on the Number Line</h2>

          <p>
            You already add and subtract directed numbers by walking. Start at the first number. Add
            a positive: walk right. Add a negative (or subtract a positive): walk left. The result
            is where you stop.
          </p>

          <p>
            One example to refresh the picture: {`$4 - 6 = -2$`}. Start at {`$4$`}, walk left{' '}
            {`$6$`} steps. You pass through zero and land at {`$-2$`}. We lean on this walk again
            for the triangle inequality later.
          </p>

          <viz.SignWalkNumberLine C={C} />
        </>,

        /* SECTION 4: QUICK RECAP - SIGN RULES FOR MULTIPLYING AND DIVIDING
         */
        <>
          <h2>Quick Recap: Sign Rules for Multiplying and Dividing</h2>

          <p>
            You already know the sign rules. Same signs give a positive result. Different signs give
            a negative result. They work for both multiplication and division. For example,{' '}
            {`$-6 \\times (-4) = +24$`} and {`$-8 \\times (+4) = -32$`}.
          </p>

          <p>
            One idea matters most for this page. Multiplying by a negative does two things: scale by
            the size, then flip to the other side of zero. That flip is why the sign reverses. We
            use this flip in the next section to reverse inequalities.
          </p>

          <viz.MultiplyByNegativeFlip C={C} />
        </>,

        /* SECTION 5: OPPOSITES AND INEQUALITIES
         */
        <>
          <h2>Opposites and Inequalities</h2>

          <p>
            We say {`$x < y$`} when {`$x$`} sits to the left of {`$y$`} on the number line.
            Reflecting across zero is the key move here. Taking opposites changes how an inequality
            reads.
          </p>

          <div className="lrn-definition">
            <div className="lrn-definition-term">When to use this</div>
            <div className="lrn-definition-desc">
              <p>
                Reach for these two rules whenever a minus sign enters an inequality. One comes from
                negating both sides. The other comes from multiplying both sides by a negative.
              </p>
            </div>
          </div>

          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              You know {`$2 < 3$`}. Multiply both sides by {`$-5$`}. Is the result {`$-10 < -15$`}{' '}
              or {`$-10 > -15$`}?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                {`$-10 > -15$`}. Multiplying by a negative reverses the inequality. {`$-15$`} is
                further left than {`$-10$`}, so {`$-15$`} is smaller.
              </p>
            </details>
          </div>

          <h3>Negation Flip Rule</h3>

          <p>
            Negating a number flips an inequality. For any rational numbers {`$x$`} and {`$y$`},{' '}
            {`$x < y$`} is the same as {`$-x > -y$`}.
          </p>

          <div className="lrn-eq lrn-eq-hero">{`$$x < y \\text{ is the same as } -x > -y$$`}</div>

          <p>
            <strong>Picture it.</strong> When {`$0 < x < y$`}: both {`$x$`} and {`$y$`} are right of
            zero, with {`$y$`} further right. Their opposites {`$-x$`} and {`$-y$`} are the mirror
            images. Both land left of zero, with {`$-y$`} further left. So {`$-y < -x$`}, which
            means {`$-x > -y$`}. Reflection swaps left-right order.
          </p>

          <p>
            Numerical example: {`$1 < 2$`}, so {`$-1 > -2$`}. On the number line, {`$-2$`} is left
            of {`$-1$`}, confirming {`$-1 > -2$`}.
          </p>

          <viz.InequalityNegationFlip C={C} />

          <h3>Multiply by Negative Rule</h3>

          <p>
            Multiplying both sides by a negative number also flips the inequality. If {`$z < 0$`}{' '}
            and {`$x < y$`}, then {`$xz > yz$`}.
          </p>

          <div className="lrn-eq lrn-eq-hero">
            {`$$z < 0 \\text{ and } x < y \\text{ gives } xz > yz$$`}
          </div>

          <p>
            This is a direct consequence of reflection. Multiplying by a negative does two things:
            scale by the size, then flip to the other side of zero. The flip reverses the order.
          </p>

          <ul className="lrn-list">
            <li>
              {`$2 < 3$`} but {`$(-5) \\times 2 = -10 > -15 = (-5) \\times 3$`}.
            </li>
            <li>
              {`$-5 < 1$`} but {`$(-5) \\times (-5) = 25 > -5 = (-5) \\times 1$`}.
            </li>
          </ul>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>
              Why does multiplying by a negative reverse the inequality? Explain using the number
              line.
            </p>
            <details className="lrn-predict-reveal">
              <summary>Explanation</summary>
              <p>
                Multiplying by a negative first scales the distances from zero. Then it reflects the
                points across zero. Scaling alone keeps the right point on the right. But the
                reflection swaps their positions: the point that was further right is now further
                left. So the order reverses.
              </p>
            </details>
          </div>
        </>,

        /* SECTION 6: ABSOLUTE VALUE AS DISTANCE FROM ZERO
         */
        <>
          <h2>Absolute Value: Distance from Zero</h2>

          <p>
            Distance is how far apart two points are. It is never negative. The{' '}
            <strong>absolute value</strong> of {`$x$`}, written {`$|x|$`}, is the distance from{' '}
            {`$x$`} to zero on the number line. So {`$|x| \\geq 0$`} for all {`$x$`}.
          </p>

          <div className="lrn-definition">
            <div className="lrn-definition-term">When to use this</div>
            <div className="lrn-definition-desc">
              <p>
                Use absolute value whenever you care about size without direction. Examples:
                measurement error (every measurement can be off by a small amount), differences
                between quantities that could be in either order, and any situation where you write{' '}
                {`$\\pm$`} (read "plus or minus": a value can go that much either way).
              </p>
            </div>
          </div>

          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              A physicists writes {`$c = 299{,}792{,}458 \\pm 1.2$`} m/s. What does the {`$\\pm$`}{' '}
              really mean?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                It means the true value of {`$c$`} satisfies {`$|c - 299{,}792{,}458| \\leq 1.2$`}.
                The {`$\\pm$`} is compact notation for an absolute-value inequality.
              </p>
            </details>
          </div>

          <h3>Definition and Basic Fact</h3>

          <div className="lrn-eq lrn-eq-hero">
            {`$$|x| = \\begin{cases} x & \\text{if } x \\geq 0 \\\\ -x & \\text{if } x < 0 \\end{cases}$$`}
          </div>

          <p>
            So {`$|7| = 7$`} and {`$|-7| = -(-7) = 7$`}. Both are 7 because both are 7 steps from
            zero.
          </p>

          <viz.AbsoluteValueDistance C={C} />

          <h3>Absolute Value Bound Rule</h3>

          <p>
            Start with a number. {`$|x| < 3$`} means any number within 3 steps of zero. So{' '}
            {`$-3 < x < 3$`}. The general statement follows:
          </p>

          <div className="lrn-eq lrn-eq-hero">{`$$|x| < b \\text{ is the same as } -b < x < b$$`}</div>

          <p>
            This is a two-sided inequality. Saying {`$|x| < b$`} is the same as saying {`$x$`} is
            within distance {`$b$`} of zero. That means {`$x$`} lies in the open interval{' '}
            {`$(-b,\\, b)$`}.
          </p>

          <p>
            The same idea handles a shifted center. {`$|x - c|$`} is the distance between {`$x$`}{' '}
            and {`$c$`}. So {`$|x - c| < b$`} means {`$x$`} is within distance {`$b$`} of {`$c$`},
            which is the same as {`$c - b < x < c + b$`}.
          </p>

          <viz.AbsoluteValueIntervalShade C={C} />

          <h3>The Speed-of-Light Example</h3>

          <p>
            Around 1975, scientists measured the speed of light as {`$299{,}792{,}458 \\pm 1.2$`}{' '}
            m/s. This means:
          </p>

          <div className="lrn-steps">
            <ol className="lrn-list">
              <li>
                The measurement gives:{' '}
                {`$299{,}792{,}458 - 1.2 \\leq c \\leq 299{,}792{,}458 + 1.2$`}
              </li>
              <li>
                Subtract {`$299{,}792{,}458$`} from all three parts:{' '}
                {`$-1.2 \\leq c - 299{,}792{,}458 \\leq 1.2$`}
              </li>
              <li>By the Absolute Value Bound Rule: {`$|c - 299{,}792{,}458| \\leq 1.2$`}</li>
            </ol>
          </div>

          <p>
            The {`$\\pm$`} notation is absolute-value notation in disguise. Scientists use it
            because it is shorter. Mathematicians prefer the absolute-value form because it makes
            the two-sided bound explicit.
          </p>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>
              Explain in your own words why {`$|x| < b$`} forces {`$x$`} to satisfy both {`$x < b$`}{' '}
              and {`$x > -b$`}.
            </p>
            <details className="lrn-predict-reveal">
              <summary>Explanation</summary>
              <p>
                {`$|x|$`} measures distance from zero. Saying that distance is less than {`$b$`}{' '}
                means {`$x$`} cannot be as far as {`$b$`} to the right (so {`$x < b$`}) and cannot
                be as far as {`$b$`} to the left (so {`$x > -b$`}). Both restrictions apply
                simultaneously.
              </p>
            </details>
          </div>

          <h3>Product Rule for Absolute Value</h3>

          <div className="lrn-eq">{`$$|x| \\cdot |y| = |xy|$$`}</div>

          <p>
            The absolute value of a product equals the product of the absolute values. A
            case-by-case check on the signs of {`$x$`} and {`$y$`} confirms this.
          </p>

          <p>
            Concrete check: {`$|-3| \\cdot |2| = 3 \\cdot 2 = 6$`} and{' '}
            {`$|(-3) \\cdot 2| = |-6| = 6$`}. Both sides equal 6.
          </p>

          <div className="lrn-compare">
            <p>
              <strong>
                {`$|x|$`} vs. {`$-x$`}: two things that look similar but are not.
              </strong>
            </p>
            <ul className="lrn-list">
              <li>
                {`$|x|$`} is always non-negative. It equals {`$x$`} when {`$x \\geq 0$`} and equals{' '}
                {`$-x$`} when {`$x < 0$`}.
              </li>
              <li>
                {`$-x$`} is the opposite of {`$x$`}. When {`$x = -5$`}, {`$-x = 5$`}. When{' '}
                {`$x = 3$`}, {`$-x = -3$`}. The opposite can be positive or negative.
              </li>
            </ul>
            <p>
              For negative {`$x$`}, {`$|x| = -x$`}. This confuses many students. It does not mean{' '}
              absolute value is negative. It means the formula uses {`$-x$`} to produce a positive
              result.
            </p>
          </div>

          <h3>Triangle Inequality</h3>

          <p>
            Try two numbers first. When they point the same way, sizes add:{' '}
            {`$|3 + 4| = 7 = |3| + |4|$`}. When they point opposite ways, they cancel:{' '}
            {`$|3 + (-4)| = 1 < 7 = |3| + |-4|$`}. The general rule:
          </p>

          <div className="lrn-eq lrn-eq-hero">{`$$|x + y| \\leq |x| + |y|$$`}</div>

          <p>
            The size of the sum is at most the sum of the sizes. Picture it as a walk: take {`$x$`}{' '}
            steps, then {`$y$`} steps. You end up at most {`$|x| + |y|$`} steps from the start. If
            the walks go in opposite directions, they cancel and you land closer.
          </p>

          <viz.TriangleInequalityWalk C={C} />

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>
              When does the triangle inequality become an equality? Give an example where{' '}
              {`$|x + y| = |x| + |y|$`}.
            </p>
            <details className="lrn-predict-reveal">
              <summary>Explanation</summary>
              <p>
                Equality holds when {`$x$`} and {`$y$`} have the same sign (or one is zero). The
                walks go in the same direction, so they add without any cancellation.
              </p>
              <p>
                Example: {`$x = 3$`}, {`$y = 4$`}. Then {`$|3 + 4| = 7 = |3| + |4|$`}.
              </p>
            </details>
          </div>

          <div className="lrn-compare">
            <p>
              <strong>{`$\\pm$`} notation vs. absolute-value inequality.</strong>
            </p>
            <ul className="lrn-list">
              <li>Physicist writes: {`$299{,}792{,}458 \\pm 1.2$`} m/s.</li>
              <li>Mathematician writes: {`$|c - 299{,}792{,}458| \\leq 1.2$`}.</li>
            </ul>
            <p>
              Both say the same thing. The {`$\\pm$`} form is compact. The absolute-value form makes
              the two-sided bound explicit and is easier to manipulate algebraically.
            </p>
          </div>

          <div className="lrn-callout">
            <p>
              <strong>Closing teaser: Cauchy and Schwarz inequality.</strong>
            </p>
            <p>{`$$|ac + bd| \\leq \\sqrt{a^2 + b^2} \\cdot \\sqrt{c^2 + d^2}$$`}</p>
            <p>
              This extends the triangle inequality to two dimensions. The absolute value is the key
              tool in its proof. It shows up throughout advanced mathematics, from geometry to
              probability theory.
            </p>
          </div>

          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">ELABORATE</span>
            <p>
              The triangle inequality is not just a curiosity. It supports every notion of distance
              in mathematics. The real line, the complex plane, and infinite-dimensional function
              spaces all rely on it.
            </p>
            <p>
              Absolute value matters because distance matters. Absolute value is the precise
              definition of distance on the number line.
            </p>
          </div>
        </>
      ]
    },
    practice: [
      // Focused set: number-line arithmetic warm-ups, opposites, negation flips,
      // multiply-by-negative, absolute value, triangle inequality (forward), measurement.
      {
        q: `A diver is at $-15$ m below the surface. She descends another $8$ m. What is her new depth?`,
        a: `Her new depth is $-23$ m. Descending means moving left on the number line. So $-15 - 8 = -23$.`
      },
      {
        q: `What is the opposite of $-12$? And what is $-(-12)$?`,
        a: `The opposite of $-12$ is $12$. Reflecting $-12$ across zero lands on $12$. So $-(-12) = 12$. The opposite of the opposite is the original.`
      },
      {
        q: `Compute $|-7|$.`,
        a: `$|-7| = 7$. Absolute value measures distance from zero. The number $-7$ is $7$ units from $0$, so $|-7| = 7$.`
      },
      {
        q: `You know $3 < 8$. What can you conclude about $-3$ and $-8$?`,
        a: `By the Negation Flip Rule: $-3 > -8$. Reflecting both points across zero swaps their left-right order on the number line.`
      },
      {
        q: `You have $x < y$ and you multiply both sides by $-3$. What happens to the inequality sign? Name the rule.`,
        a: `The sign reverses: $-3x > -3y$. Multiplying by $-3 < 0$ applies the Multiply by Negative Rule, which flips the direction. Example: $2 < 5$ becomes $-6 > -15$.`
      },
      {
        q: `Solve $|x| < 4$.`,
        a: `By the Absolute Value Bound Rule: $|x| < 4$ is the same as $-4 < x < 4$. The solution set is the open interval $(-4, 4)$.`
      },
      {
        q: `Compute $-1 + 4$ using the number-line walk picture.`,
        a: `Start at $-1$. Walk right $4$ steps. End up at $3$. So $-1 + 4 = 3$.`
      },
      {
        q: `You know $2 < 3$. Multiply both sides by $-5$. Preserve or reverse?`,
        a: `Reverse: $-10 > -15$. The Multiply by Negative Rule says multiplying by a negative reverses the inequality. $-5 < 0$, so the direction flips.`
      },
      {
        q: `Verify the triangle inequality for $x = 3$ and $y = -7$.`,
        a: `$|x + y| = |3 + (-7)| = |-4| = 4$. $|x| + |y| = 3 + 7 = 10$. Since $4 \\leq 10$, the triangle inequality holds. The two walks partially cancel because they go in opposite directions.`
      },
      {
        q: `True or false: if $x < y$ then $-x < -y$. Explain.`,
        a: `False. The Negation Flip Rule says $x < y$ gives $-x > -y$. Negating reverses the inequality. Example: $2 < 5$ but $-2 > -5$.`
      },
      {
        q: `Compute $|3 - 8|$.`,
        a: `$|3 - 8| = |-5| = 5$. First compute the expression inside: $3 - 8 = -5$. Then take the absolute value: distance from zero is $5$.`
      },
      {
        q: `For which pairs $(x, y)$ does the triangle inequality become an equality?`,
        a: `Equality holds when $x$ and $y$ have the same sign (or one is zero). Then the walks are in the same direction and add without cancellation. Example: $x = 3, y = 5$: $|3 + 5| = 8 = 3 + 5 = |3| + |5|$.`
      },
      {
        q: `A golfer is $-5$ under par. A second golfer is $-2$ under par. Which score is better (lower)? Which is numerically smaller?`,
        a: `$-5$ is better (further below par). It is also numerically smaller: $-5 < -2$. Being better in golf means a smaller (more negative) score.`
      },
      {
        q: `Compute $4 - 6$ and explain why the result is negative.`,
        a: `$4 - 6 = -2$. You start at $4$ and walk left $6$ steps. After $4$ steps you reach $0$. Two more steps carry you to $-2$. The subtracted number is larger than the start, so the walk crosses zero.`
      },
      {
        q: `Solve $|x - 3| < 2$ by first writing it as a two-sided inequality.`,
        a: `Let $u = x - 3$. Then $|u| < 2$ is the same as $-2 < u < 2$, which is $-2 < x - 3 < 2$. Add $3$: $1 < x < 5$. The solution set is $(1, 5)$.`
      },
      {
        q: `For what values of $x$ does $|x| = x$? For what values does $|x| = -x$?`,
        a: `$|x| = x$ when $x \\geq 0$ (the number is already non-negative, so distance equals the number). $|x| = -x$ when $x < 0$ (the negative is removed by the definition, giving a positive distance).`
      },
      {
        q: `For $b = 0$, what does $|x| < 0$ mean? Is it satisfiable?`,
        a: `$|x| < 0$ has no solution. Absolute value is always $\\geq 0$, so it can never be strictly less than $0$. By the Absolute Value Bound Rule, this would require $0 < x < 0$, which is impossible.`
      },
      {
        q: `A classroom has $20$ students. Another has $30$. Multiply each count by $-1$ (imagine it as a debt). Which debt is larger in absolute size?`,
        a: `$-30$ is a larger debt than $-20$. Even though $20 < 30$, we have $-20 > -30$. The Negation Flip Rule applies: negating reverses the order.`
      },
      {
        q: `A measurement reads $50 \\pm 0.5$ cm. Write this as an absolute-value inequality for the true length $L$.`,
        a: `$|L - 50| \\leq 0.5$. By the Absolute Value Bound Rule, this is the same as $-0.5 \\leq L - 50 \\leq 0.5$, or $49.5 \\leq L \\leq 50.5$. The $\\pm$ notation and the absolute-value inequality say exactly the same thing.`
      },
      {
        q: `A student scores $72$ on a test. The class average is $68$. A second student scores $60$. Who deviates more from the average?`,
        a: `First student: $|72 - 68| = 4$. Second student: $|60 - 68| = 8$. The second student deviates more. Absolute value measures distance from the average, ignoring direction.`
      },
      {
        q: `Some people learn absolute value as just "remove the minus sign." Why is that framing incomplete?`,
        a: `It only works when $x$ is already written with a minus sign. It does not explain what $|x|$ means when $x$ is a variable. The correct framing (distance from zero) works in all cases. It connects naturally to measurement error and the triangle inequality.`
      },
      {
        q: `A student writes: "$|-5| = -5$ because the absolute value removes the minus sign." Identify the error.`,
        a: `The student has $|-5| = -(-5) = 5$, not $-5$. Absolute value gives a non-negative result. When $x < 0$, the definition is $|x| = -x$, which is positive. So $|-5| = -(-5) = 5$.`
      }
    ],
    reference: {
      category: 'Quick Reference',
      title: 'Opposite Numbers and Absolute Value',
      sections: [
        <>
          <h2>Sign Rules</h2>

          <div className="ref-formula">
            <div className="ref-formula-name">Sign-Juxtaposition Table</div>
            <div className="ref-formula-eq">{`$$+(+)=+,\\ +(-) = -,\\ -(-)=+,\\ -(+)=-$$`}</div>
            <div className="ref-formula-usage">
              When to use: simplify any expression with two adjacent sign symbols before computing.
            </div>
          </div>

          <div className="ref-formula">
            <div className="ref-formula-name">Multiplication and Division Signs</div>
            <div className="ref-formula-eq">{`$$\\text{same signs} \\to +,\\quad \\text{different signs} \\to -$$`}</div>
            <div className="ref-formula-usage">
              When to use: determine the sign of any product or quotient of two directed numbers.
            </div>
          </div>

          <h2>Ordering Rules for Rational Numbers</h2>

          <div className="ref-formula">
            <div className="ref-formula-name">Negation Flip Rule</div>
            <div className="ref-formula-eq">{`$$x < y \\text{ is the same as } -x > -y$$`}</div>
            <div className="ref-formula-usage">
              When to use: whenever you negate both sides of an inequality.
            </div>
          </div>

          <div className="ref-formula">
            <div className="ref-formula-name">Multiply by Negative Rule (Reverses Order)</div>
            <div className="ref-formula-eq">{`$$z < 0 \\text{ and } x < y \\text{ gives } xz > yz$$`}</div>
            <div className="ref-formula-usage">
              When to use: multiplying or dividing both sides by a negative number.
            </div>
          </div>

          <h2>Absolute Value</h2>

          <div className="ref-formula">
            <div className="ref-formula-name">Definition</div>
            <div className="ref-formula-eq">{`$$|x| = \\begin{cases} x & x \\geq 0 \\\\ -x & x < 0 \\end{cases}$$`}</div>
            <div className="ref-formula-usage">
              {`When to use: $|x|$ is the distance of $x$ from $0$. Always $\\geq 0$.`}
            </div>
          </div>

          <div className="ref-formula">
            <div className="ref-formula-name">Absolute Value Bound Rule</div>
            <div className="ref-formula-eq">{`$$|x| < b \\text{ is the same as } -b < x < b$$`}</div>
            <div className="ref-formula-usage">
              {`When to use: convert $|x| < b$ into a two-sided inequality, or interpret $\\pm$ notation.`}
            </div>
          </div>

          <div className="ref-formula">
            <div className="ref-formula-name">Product Rule for Absolute Value</div>
            <div className="ref-formula-eq">{`$$|x| \\cdot |y| = |xy|$$`}</div>
            <div className="ref-formula-usage">
              When to use: simplify absolute values of products.
            </div>
          </div>

          <div className="ref-formula">
            <div className="ref-formula-name">Triangle Inequality</div>
            <div className="ref-formula-eq">{`$$|x + y| \\leq |x| + |y|$$`}</div>
            <div className="ref-formula-usage">
              {`When to use: bound the absolute value of a sum; equality when $x$ and $y$ have the same sign.`}
            </div>
          </div>

          <div className="ref-formula">
            <div className="ref-formula-name">Cauchy and Schwarz Inequality (preview)</div>
            <div className="ref-formula-eq">{`$$|ac + bd| \\leq \\sqrt{a^2 + b^2} \\cdot \\sqrt{c^2 + d^2}$$`}</div>
            <div className="ref-formula-usage">
              When to use: bound dot products in two dimensions; generalisable to any inner product
              space.
            </div>
          </div>
        </>
      ]
    },
    customCss:
      '.MafsView { --mafs-bg: transparent; --mafs-fg: var(--text-primary); --mafs-line-color: var(--border-subtle); }'
  }
  return config
}

export default function OppositeNumbersAndAbsoluteValue() {
  const config = useConfig()
  return <LearningTemplate config={config} />
}
