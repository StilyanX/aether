import { LearningTemplate } from '../../../../components/learning/learning-template'
import { useVizColors } from '../../../../hooks/use-viz-colors'
import * as viz from './integers-and-negative-numbers-viz'
import { FONT_LABEL, FONT_TEX } from '../../../../components/viz/scale-tokens'

function useConfig() {
  const C = useVizColors()
  const config = {
    cssPrefix: 'ian',
    documentTitle: 'Integers and Negative Numbers - AETHER',
    learning: {
      groupTitle: 'Number Systems and the Number Line',
      category: 'Arithmetic',
      title: 'Integers and Negative Numbers',
      subtitle:
        'How negative numbers work. Addition, subtraction, multiplication, and division of signed integers, with six arguments for why minus times minus is plus.',
      sections: [
        // Section 0: What Negative Numbers Mean
        <>
          <h2>What Negative Numbers Mean</h2>
          <p>{`Negative numbers name real quantities that sit below a reference point.`}</p>
          <p>
            {`You meet them every day. A temperature of $-3^{\\circ}\\text{C}$ means three degrees below zero.`}
          </p>
          <p>{`A golf score of $-5$ means five strokes under par (par = the expected score; $-5$ means five strokes better).`}</p>
          <p>{`A bank overdraft of $-\\$55$ means you owe the bank $\\$55$.`}</p>
          <p>
            {`When to use this: any time a quantity can go below a natural zero, negative numbers give you
            the language to say exactly how far below.`}
          </p>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              {`A diver is at $-15$ m. She dives another $6$ m down, then rises $4$ m.
              Where is she now? Guess before you calculate.`}
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>{`$-15 - 6 + 4 = -17$. She is $17$ m below the surface.`}</p>
            </details>
          </div>
          <div className="lrn-definition">
            <span className="lrn-definition-term">Integer</span>
            <div className="lrn-definition-desc">
              <p>
                {`An integer is a whole number or its negative. The integers are
                $\\ldots, -3, -2, -1, 0, 1, 2, 3, \\ldots$: they include zero and have no fractions or decimals.`}
              </p>
            </div>
          </div>
          <div className="lrn-definition">
            <span className="lrn-definition-term">Negative Number</span>
            <div className="lrn-definition-desc">
              <p>
                {`Recall: a negative number sits to the left of zero on the number line, so it is less than zero.
                The symbol $-$ in front of a number flips it to the other side of zero.`}
              </p>
            </div>
          </div>
          <viz.NumberLineSigned C={C} />
          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">ELABORATE</span>
            <p>
              {`Why do we need negative numbers at all? Counting apples only needs whole numbers.`}
            </p>
            <p>{`Then you start tracking change. Temperature rises or falls. Money comes in or goes out. Height shifts above or below sea level. Now you need a direction, not just a size.`}</p>
            <p>{`Negative numbers hold that direction inside the number itself.`}</p>
          </div>
          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>
              {`Give one real-world situation (not temperature, golf, or bank) where a negative number
              is useful. Explain what zero means in your context.`}
            </p>
          </div>
        </>,

        // Section 1: Adding on the Number Line
        <>
          <h2>Adding on the Number Line</h2>
          <p>{`You already place numbers on the line, with negatives to the left of zero. Now the line turns addition into movement.`}</p>
          <p>
            {`Adding a positive number means move right. Adding a negative number means move left.`}
          </p>
          <p>{`Subtracting a positive number also means move left. So $a - b$ steps left by $b$.`}</p>
          <p>
            {`When to use this: whenever you add or subtract signed numbers, picture a walk along the
            number line. The starting point is your first number; the step is your second.`}
          </p>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              {`Start at $4$. Take a step of $-6$. Which direction do you move, and where do you land?`}
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>{`You move left 6 places. You land at $4 + (-6) = -2$.`}</p>
            </details>
          </div>
          <h3>Example 1: Three Number-Line Additions</h3>
          <p>{`(a) $-1 + 4 = 3$. Start at $-1$. Go right $4$ places. Land at $3$.`}</p>
          <p>{`(b) $-2 - 3 = -5$. Start at $-2$. Go left $3$ places. Land at $-5$.`}</p>
          <p>{`(c) Start at $4^{\\circ}\\text{C}$. Cool by $6^{\\circ}$ (go left 6). End at $-2^{\\circ}\\text{C}$. So $4 - 6 = -2$.`}</p>
          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>
              {`In part (c), why does $4 - 6$ land at a negative number even though you started positive?
              Explain using the direction-of-movement idea.`}
            </p>
          </div>
          <viz.NumberLineAddJump C={C} />
          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <p className="lrn-compare-title">
                <strong>{`CORRECT: $4 - 6 = -2$`}</strong>
              </p>
              <p>{`Start at $4$, move left $6$ places. You cross zero and land at $-2$.`}</p>
            </div>
            <div className="lrn-compare-col">
              <p className="lrn-compare-title">
                <strong>{`COMMON MISTAKE: $4 - 6 = 2$`}</strong>
              </p>
              <p>{`Some students subtract the smaller from the larger and ignore the sign. Always respect the direction.`}</p>
            </div>
          </div>
          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">ELABORATE</span>
            <p>
              {`Why does adding a negative move you left? Because $a + (-b) = a - b$: you remove $b$
              from your position. Moving left by $b$ is exactly the same as subtracting $b$.
              The number line makes this concrete: direction is built into the sign.`}
            </p>
          </div>
          <p>{`You can now add and subtract any two signed numbers on the number line.`}</p>
        </>,

        // Section 2: The Four Cases of Addition
        <>
          <h2>The Four Cases of Addition</h2>
          <p>
            {`Every signed addition falls into one of four cases based on the signs of the two numbers.`}
          </p>
          <p>
            {`When to use this: whenever you need to predict whether the result will be positive or
            negative before you calculate.`}
          </p>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              {`Look at the four cases below. Which result is the largest? Which is the smallest?
              Predict the ordering before reading on.`}
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                {`Largest: $3 + 5 = 8$. Smallest: $(-3) + (-5) = -8$.
                The sign of the result matches the sign of the larger-size number when signs differ.`}
              </p>
            </details>
          </div>
          <h3>Temperature Table</h3>
          <p>
            {`Imagine temperature changes in Celsius. All temperatures measured in Celsius degrees.`}
          </p>
          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <p>
                <strong>Calculation</strong>
              </p>
              <p>{`$3 + 5 = 8$`}</p>
              <p>{`$(-3) + 5 = 2$`}</p>
              <p>{`$3 + (-5) = -2$`}</p>
              <p>{`$(-3) + (-5) = -8$`}</p>
            </div>
            <div className="lrn-compare-col">
              <p>
                <strong>Temperature reading</strong>
              </p>
              <p>{`Start at $3^{\\circ}$, rises $5^{\\circ}$, new temp $8^{\\circ}$`}</p>
              <p>{`Start at $-3^{\\circ}$, rises $5^{\\circ}$, new temp $2^{\\circ}$`}</p>
              <p>{`Start at $3^{\\circ}$, falls $5^{\\circ}$, new temp $-2^{\\circ}$`}</p>
              <p>{`Start at $-3^{\\circ}$, falls $5^{\\circ}$, new temp $-8^{\\circ}$`}</p>
            </div>
          </div>
          <h3>Antiproton View</h3>
          <p>
            {`The same four equations describe combining protons and antiprotons (tiny particles inside atoms).
            Protons count as positive; antiprotons count as negative.
            (Antiprotons are particles that cancel with protons to leave nothing.)`}
          </p>
          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <p>
                <strong>Equation</strong>
              </p>
              <p>{`$3 + 5 = 8$`}</p>
              <p>{`$(-3) + 5 = 2$`}</p>
              <p>{`$3 + (-5) = -2$`}</p>
              <p>{`$(-3) + (-5) = -8$`}</p>
            </div>
            <div className="lrn-compare-col">
              <p>
                <strong>Particle story</strong>
              </p>
              <p>{`3 protons and 5 protons: 8 protons.`}</p>
              <p>{`3 antiprotons and 5 protons: 3 pairs cancel out, 2 protons remain.`}</p>
              <p>{`3 protons and 5 antiprotons: 3 pairs cancel out, 2 antiprotons remain.`}</p>
              <p>{`3 antiprotons and 5 antiprotons: 8 antiprotons.`}</p>
            </div>
          </div>
          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>
              {`The arithmetic $(-3) + 5 = 2$ describes two completely different physical situations
              (temperature and antiprotons). Explain in your own words why the same equation fits both.`}
            </p>
          </div>
          <viz.FourAdditionCases C={C} />
          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>{`When the two numbers share a sign, you add their sizes and keep the shared sign.`}</p>
            <p>{`When they have different signs, you subtract the smaller size from the larger and keep the sign of the larger.`}</p>
            <p>{`So $(-3) + 5 = +2$ because $5$ is bigger than $3$ in size, and $5$ is positive.`}</p>
          </div>
        </>,

        // Section 3: Sign Removal Rules
        <>
          <h2>Sign Removal Rules</h2>
          <p>
            {`When two signs appear next to each other, you can simplify them using four rules.`}
          </p>
          <p>
            {`When to use this: whenever you see a number with a sign preceded by another sign, as in $3 - (-6)$ or $-4 + (-5)$.`}
          </p>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>{`Before reading the rules, predict: does $3 - (-6)$ equal $3 - 6$ or $3 + 6$?`}</p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                {`It equals $3 + 6 = 9$. Subtracting a negative flips to addition: $-(-6) = +6$.`}
              </p>
            </details>
          </div>
          <div className="lrn-insight">
            <p>
              <strong>The four sign rules:</strong>
              {` $+(+) = +$, $+(-) = -$, $-(+) = -$, $-(-) = +$`}
            </p>
          </div>
          <h3>Example 2: Sign Removal</h3>
          <p>{`(a) $3 - (-6) = 3 + 6 = 9$. Two minus signs make a plus: $-(-6) = +6$.`}</p>
          <p>{`(b) $-4 + (-5) = -4 - 5 = -9$. Plus a negative becomes minus: $+(-5) = -5$.`}</p>
          <p>{`(c) $-5 - (+7) = -5 - 7 = -12$. Minus a positive stays minus: $-(+7) = -7$.`}</p>
          <p>{`Your turn: a swimmer at $-8$ m cancels a $3$ m descent, written $-8 - (-3)$. Use the rule to find the new depth.`}</p>
          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>
              {`Why does $-(-6)$ equal $+6$? Explain using the idea of "the opposite of an opposite."`}
            </p>
          </div>
          <table className="lrn-table">
            <thead>
              <tr>
                <th>Combo</th>
                <th>Simplifies to</th>
                <th>Example</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>+(+)</td>
                <td className="lrn-table-section-header">+</td>
                <td>3 + (+6) = 3 + 6 = 9</td>
              </tr>
              <tr>
                <td>+(−)</td>
                <td className="lrn-table-section-header">−</td>
                <td>3 + (−6) = 3 − 6 = −3</td>
              </tr>
              <tr>
                <td>−(+)</td>
                <td className="lrn-table-section-header">−</td>
                <td>3 − (+6) = 3 − 6 = −3</td>
              </tr>
              <tr>
                <td>−(−)</td>
                <td className="lrn-table-section-header">+</td>
                <td>3 − (−6) = 3 + 6 = 9</td>
              </tr>
            </tbody>
          </table>
          <div className="lrn-contrast lrn-compare">
            <div className="lrn-compare-col">
              <p>
                <strong>{`Subtracting a positive: $a - (+b) = a - b$`}</strong>
              </p>
              <p>{`Move left on the number line. Standard subtraction.`}</p>
            </div>
            <div className="lrn-compare-col">
              <p>
                <strong>{`Subtracting a negative: $a - (-b) = a + b$`}</strong>
              </p>
              <p>{`Move right on the number line. Subtracting a negative adds.`}</p>
            </div>
          </div>
          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">ELABORATE</span>
            <p>
              {`Why does $-(-b) = +b$? Think of "minus" as the instruction "flip direction."
              Flipping twice returns you to the original direction.
              So two flips cancel each other, and $-(-b)$ lands back at $+b$.`}
            </p>
          </div>
        </>,

        // Section 4: Multiplying Signed Numbers
        <>
          <h2>Multiplying Signed Numbers</h2>
          <p>{`Start with one product. Work out $(-6) \\times (-4)$. Both signs are negative, so the answer is $+24$.`}</p>
          <p>
            {`You met the product-sign rule in Ordering and Comparison: same signs give a positive product, different signs give a negative product. Here is the full account for every signed product (signed numbers = numbers with either a positive or negative sign).`}
          </p>
          <p>{`When to use this: every time you multiply or divide two signed numbers.`}</p>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              {`Predict the sign of $(-3) \\times (+2) \\times (+5)$. Do not calculate the number yet: just the sign.`}
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                {`$(-3) \\times (+2) = -6$ (different signs: negative).
                Then $(-6) \\times (+5) = -30$ (different signs: negative).
                One negative factor makes the product negative.`}
              </p>
            </details>
          </div>
          <p>{`Real example: the temperature drops $3^{\\circ}$ per hour for $4$ hours of cooling. The change is $(-3) \\times 4 = -12^{\\circ}$. The negative sign shows the cooling direction.`}</p>
          <h3>Example 1: Same Signs (Positive Product)</h3>
          <p>{`(a) $(+7) \\times (+3) = +21$. Both positive. Product is positive.`}</p>
          <p>{`(b) $(-6) \\times (-4) = +24$. Both negative. Product is positive.`}</p>
          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>
              {`You know $(+7) \\times (+3) = +21$ from ordinary multiplication.
              Why does $(-6) \\times (-4)$ also give a positive? State the rule in your own words.`}
            </p>
          </div>
          <h3>Example 2: Different Signs (Negative Product)</h3>
          <p>{`(a) $(-8) \\times (+4) = -32$. Different signs. Product is negative.`}</p>
          <p>{`(b) $(+7) \\times (-5) = -35$. Different signs. Product is negative.`}</p>
          <p>
            {`When a product chains more than two factors (factors = the numbers you multiply), work left to right. Apply the sign rule to the first pair, then to that result and the next factor.`}
          </p>
          <p>
            {`(c) $(-3) \\times (+2) \\times (+5)$: work left to right. $(-3)(+2) = -6$. Then $(-6)(+5) = -30$.`}
          </p>
          <p>{`Story version: a freezer cools at $3$ degrees per hour. Two hours ago ($-2$ hours), the temperature was $3 \\times (-2) = -6$ degrees different: that is, $6$ degrees warmer than now.`}</p>
          <table className="lrn-table">
            <thead>
              <tr>
                <th>Factor A</th>
                <th>Factor B</th>
                <th>Product</th>
                <th>Rule</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>+7</td>
                <td>+3</td>
                <td className="lrn-table-section-header">+21</td>
                <td>same → positive</td>
              </tr>
              <tr>
                <td>−6</td>
                <td>−4</td>
                <td className="lrn-table-section-header">+24</td>
                <td>same → positive</td>
              </tr>
              <tr>
                <td>−8</td>
                <td>+4</td>
                <td className="lrn-table-section-header">−32</td>
                <td>different → negative</td>
              </tr>
              <tr>
                <td>+7</td>
                <td>−5</td>
                <td className="lrn-table-section-header">−35</td>
                <td>different → negative</td>
              </tr>
            </tbody>
          </table>
          <div className="lrn-contrast lrn-compare">
            <div className="lrn-compare-col">
              <p>
                <strong>Same signs: positive</strong>
              </p>
              <p>{`$(+)(+) = +$ and $(-)(-)= +$`}</p>
            </div>
            <div className="lrn-compare-col">
              <p>
                <strong>Different signs: negative</strong>
              </p>
              <p>{`$(+)(-) = -$ and $(-)(+) = -$`}</p>
            </div>
          </div>
          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <p className="lrn-compare-title">
                <strong>{`CORRECT: $(-7) \\times (+3) = -21$`}</strong>
              </p>
              <p>{`Different signs give negative. Size $21$. Answer: $-21$.`}</p>
            </div>
            <div className="lrn-compare-col">
              <p className="lrn-compare-title">
                <strong>{`COMMON MISTAKE: $(-7) \\times (+3) = 21$`}</strong>
              </p>
              <p>{`Some students compute the size and forget the sign. Sign first, then size.`}</p>
            </div>
          </div>
          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY MUST SAME SIGNS MULTIPLY TO A POSITIVE?</span>
            <p>{`Think of multiplying by a negative as "flipping direction."`}</p>
            <p>{`One flip turns positive into negative. Two flips return positive to positive. Three flips end at negative again.`}</p>
            <p>{`So pairs of negatives cancel each other. One unpaired negative leaves the result negative.`}</p>
          </div>
        </>,

        // Section 5: The Why Behind Minus Times Minus
        <>
          <h2>The Why Behind Minus Times Minus</h2>
          <p>
            {`School says minus times minus is plus. But why? Here are six arguments: from convincing to a full proof.`}
          </p>
          <p>
            {`When to use this: when you need to explain the sign rule to yourself or anyone who asks "why?"`}
          </p>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              {`Before reading, try to give one reason why $(-3) \\times (-5)$ should equal $+15$ and not $-15$.
              What argument comes to mind?`}
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                {`Any reasonable argument counts. The six below range from pattern-based to a full proof.`}
              </p>
            </details>
          </div>
          <h3>Argument 1: Repeated Addition Breaks Down</h3>
          <p>
            {`For positive integers, multiplication is repeated addition: $3 \\times 5 = 5 + 5 + 5 = 15$.`}
          </p>
          <p>
            {`This works for $1 \\times 5 = 5$. It breaks for $0 \\times 5$: you cannot add $5$ zero times in a useful way.`}
          </p>
          <p>{`It breaks worse for $(-3) \\times 5$: you cannot add $5$ negative-three times.`}</p>
          <p>{`So we need a different reason for the sign rules.`}</p>
          <h3>Argument 2: Commutativity Forces the Answer</h3>
          <p>
            {`We know $5 \\times 0 = 0 + 0 + 0 + 0 + 0 = 0$. Swapping the factors: $0 \\times 5 = 0$. Fine.`}
          </p>
          <p>
            {`We know $5 \\times (-3) = (-3) + (-3) + (-3) + (-3) + (-3) = -15$ by repeated addition.`}
          </p>
          <p>
            {`Swapping: $(-3) \\times 5 = -15$. Commutativity (commutativity = the order of multiplication does not change the answer) forces this once we define $5 \\times (-3)$.`}
          </p>
          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>
              {`Explain why commutativity (the fact that $a \\times b = b \\times a$) forces $(-3) \\times 5 = -15$ once we know $5 \\times (-3) = -15$.`}
            </p>
          </div>
          <h3>Argument 3: Equal Opportunities Table</h3>
          <p>
            {`Look at the four products: $3 \\times 5 = +15$, $3 \\times (-5) = -15$, $(-3) \\times 5 = -15$, and $(-3) \\times (-5) = ?$`}
          </p>
          <p>{`Three products give us answers. Two come out positive, one comes out negative so far.`}</p>
          <p>
            {`An "equal opportunities" policy: the fourth product should be positive to balance the table.
            So $(-3) \\times (-5) = +15$.`}
          </p>
          <viz.EqualOpportunitiesGrid C={C} />
          <p>{`This is a pattern argument, not a proof. But it is convincing.`}</p>
          <h3>Argument 4: Dollar and Penalty Story</h3>
          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <p className="lrn-compare-title">
                <strong>{`Get $\\$5$ three times`}</strong>
              </p>
              <p>{`$3 \\times 5 = +15$. You gain $\\$15$.`}</p>
            </div>
            <div className="lrn-compare-col">
              <p className="lrn-compare-title">
                <strong>{`Pay a $\\$5$ penalty three times`}</strong>
              </p>
              <p>{`$3 \\times (-5) = -15$. You lose $\\$15$.`}</p>
            </div>
            <div className="lrn-compare-col">
              <p className="lrn-compare-title">
                <strong>{`NOT get $\\$5$ three times`}</strong>
              </p>
              <p>{`$(-3) \\times 5 = -15$. You miss $\\$15$: effectively a loss.`}</p>
            </div>
            <div className="lrn-compare-col">
              <p className="lrn-compare-title">
                <strong>{`NOT pay a $\\$5$ penalty three times`}</strong>
              </p>
              <p>{`$(-3) \\times (-5) = +15$. You avoid $\\$15$ of penalties: a gain.`}</p>
            </div>
          </div>
          <h3>Argument 5: Sequence Pattern</h3>
          <p>
            {`Look at the sequence of products $3 \\times 1, 3 \\times 2, 3 \\times 3, 3 \\times 4, 3 \\times 5$:
            that is $3, 6, 9, 12, 15$.`}
          </p>
          <p>{`Each step increases by $3$. Extend backwards past zero. $3 \\times 0 = 0$. Then $3 \\times (-1) = -3$. Then $3 \\times (-2) = -6$. Continue to $3 \\times (-5) = -15$.`}</p>
          <p>{`The value $-15$ sits under $-5$. So $3 \\times (-5) = -15$.`}</p>
          <div className="lrn-insight">
            <p>{`Watch the pattern run past zero. The rule for the sign of products falls out automatically.`}</p>
          </div>
          <p>
            {`Now do the same for $(-3)$: products $(-3) \\times 1, (-3) \\times 2, \\ldots, (-3) \\times 5$
            are $-3, -6, -9, -12, -15$.`}
          </p>
          <p>{`Each step decreases by $3$ (steps of $-3$). Extend backwards. $(-3) \\times 0 = 0$. Then $(-3) \\times (-1) = 3$. Then $(-3) \\times (-2) = 6$. The chain reaches $(-3) \\times (-5) = 15$.`}</p>
          <viz.SequencePatternArgument C={C} />
          <h3>Argument 6: Full Distributive-Law Proof</h3>
          <p>{`This is the real proof. It uses only two facts.`}</p>
          <p>{`First, the distributive law $ab + ac = a(b+c)$, which you may know as "multiply through the brackets".`}</p>
          <p>{`Second, the definition that $-15$ is the number opposite to $15$ (opposite = the number you add to get zero), so $-15 + 15 = 0$.`}</p>
          <div className="lrn-faded">
            <span className="lrn-faded-label">WORKED PROOF: 3·(−5) = −15</span>
            <p>{`Claim: $3 \\cdot (-5) = -15$, which means $3 \\cdot (-5) + 15 = 0$.`}</p>
            <ol className="lrn-list">
              <li>{`Write $15 = 3 \\times 5$: so we need to show $3 \\cdot (-5) + 3 \\cdot 5 = 0$.`}</li>
              <li>
                {`Apply the distributive law with $a = 3$, $b = -5$, $c = 5$:`}
                <br />
                {`$3 \\cdot (-5) + 3 \\cdot 5 = 3 \\cdot (-5 + 5)$`}
              </li>
              <li>{`Simplify inside: $-5 + 5 = 0$, so $3 \\cdot (-5 + 5) = 3 \\cdot 0 = 0$. $\\square$`}</li>
            </ol>
            <p>{`Therefore $3 \\cdot (-5)$ is opposite to $15$, so $3 \\cdot (-5) = -15$.`}</p>
          </div>
          <div className="lrn-faded">
            <span className="lrn-faded-label">WORKED PROOF: (−3)·(−5) = 15</span>
            <p>{`(This proof builds on the first proof above: we already showed $3 \\cdot (-5) = -15$.)`}</p>
            <p>{`Claim: $(-3) \\cdot (-5) = 15$, i.e. $(-3) \\cdot (-5)$ is opposite to $-15$.`}</p>
            <ol className="lrn-list">
              <li>{`Start with the fact $(-3) + 3 = 0$.`}</li>
              <li>{`Multiply both sides by $(-5)$: $((-3) + 3) \\cdot (-5) = 0 \\cdot (-5) = 0$.`}</li>
              <li>
                {`Expand the left side using the distributive law:`}
                <br />
                {`$(-3) \\cdot (-5) + 3 \\cdot (-5) = 0$`}
              </li>
              <li>
                {`We proved above that $3 \\cdot (-5) = -15$. Substitute:`}
                <br />
                {`$(-3) \\cdot (-5) + (-15) = 0$`}
              </li>
              <li>{`So $(-3) \\cdot (-5)$ is opposite to $-15$, hence equals $15$.`}</li>
            </ol>
            <p>{`Note: this proof has two small gaps. It assumes $0 \\cdot (-5) = 0$ and that every number has exactly one opposite. Both are true. Both are proved just below.`}</p>
          </div>
          <details className="lrn-self-explain-reveal">
            <summary>Closing the two proof gaps</summary>
            <p>{`Gap 1: $0 \\cdot (-5) = 0$. Proof: $0 \\cdot (-5) + 0 \\cdot (-5) = (0+0) \\cdot (-5) = 0 \\cdot (-5)$. Subtract $0 \\cdot (-5)$ from both sides. So $0 \\cdot (-5) = 0$.`}</p>
            <p>{`Gap 2: Every number has exactly one opposite. Suppose $a$ and $b$ are both opposites of $x$: $a + x = 0$ and $b + x = 0$. Then $a = a + 0 = a + (x + b) = (a + x) + b = 0 + b = b$. So the opposite is unique.`}</p>
          </details>
          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>
              {`In the proof of $3 \\cdot (-5) = -15$, step 2 uses the distributive law $ab + ac = a(b+c)$.
              Identify $a$, $b$, and $c$ in that step. Explain why this step is valid.`}
            </p>
          </div>
          <div className="lrn-contrast lrn-compare">
            <div className="lrn-compare-col">
              <p>
                <strong>Sequence-pattern argument (convincing)</strong>
              </p>
              <p>{`Extends the multiplication table past zero using the constant-step pattern.
              Convincing for anyone, but not a formal proof.`}</p>
            </div>
            <div className="lrn-compare-col">
              <p>
                <strong>Distributive-law proof (full proof)</strong>
              </p>
              <p>{`Derives the result from the distributive law and the definition of opposite.
              Formally valid (with noted gaps), not just persuasive.`}</p>
            </div>
          </div>
          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS MINUS TIMES MINUS A PLUS?</span>
            <p>{`Each argument above shows one piece of the answer. Patterns suggest it. Stories make it feel right.`}</p>
            <p>{`But only the distributive law in Argument 6 actually proves it.`}</p>
            <p>{`Suppose minus times minus were minus. Then the distributive law $a(b+c) = ab + ac$ would break.`}</p>
            <p>{`Arithmetic would stop working. So minus times minus must be plus to keep the whole system working.`}</p>
          </div>
        </>,

        // Section 6: Dividing Signed Numbers
        <>
          <h2>Dividing Signed Numbers</h2>
          <p>{`Start with one quotient. Work out $\\frac{-70}{-2}$. Both numbers are negative, so the answer is $+35$.`}</p>
          <p>{`Division follows exactly the same sign rules as multiplication.`}</p>
          <p>{`Same signs give a positive quotient. Different signs give a negative quotient.`}</p>
          <p>
            {`When to use this: division undoes multiplication. If $(-3) \\times (-5) = 15$, then
            $15 \\div (-3) = -5$ and $15 \\div (-5) = -3$.`}
          </p>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              {`Predict the sign of $\\frac{-80}{10}$ and of $\\frac{-45}{-9}$. Which is positive and which is negative?`}
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>{`$\\frac{-80}{10}$: different signs: negative. Answer: $-8$.`}</p>
              <p>{`$\\frac{-45}{-9}$: same signs: positive. Answer: $+5$.`}</p>
            </details>
          </div>
          <h3>Example 3: Division</h3>
          <p>{`(a) $\\frac{-70}{-2} = +35$. Same signs. Positive quotient.`}</p>
          <p>{`(b) $\\frac{+12}{-3} = -4$. Different signs. Negative quotient.`}</p>
          <p>{`(c) $\\frac{-20}{+4} = -5$. Different signs. Negative quotient.`}</p>
          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>
              {`Verify part (a): check that $(-2) \\times (+35) = -70$.
              Explain why this confirms that $\\frac{-70}{-2} = +35$.`}
            </p>
          </div>
          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">ELABORATE</span>
            <p>
              {`Division undoes multiplication, so the multiplication sign rule gives the division rule for free.
              For example, $(-3) \\times (-5) = 15$ means $15 \\div (-5) = -3$ and $15 \\div (-3) = -5$.
              Same signs give positive, different signs give negative.`}
            </p>
          </div>
          <div className="lrn-callout">
            <p>
              {`When you mix different types of signed-number problems, the difficulty increases.
              Keep the sign rules in mind. Switch carefully between addition, multiplication, and division.`}
            </p>
          </div>
        </>
      ]
    },

    practice: [
      // Computation: Number line addition
      {
        q: 'Work out: $-6 + 2$',
        a: '$-6 + 2 = -4$. Start at $-6$, move right 2. You land at $-4$. Adding a positive moves right.'
      },
      {
        q: 'Work out: $-7 - 5$',
        a: '$-7 - 5 = -12$. Start at $-7$, move left 5. You land at $-12$. Subtracting a positive moves left.'
      },
      // Transfer: temperature
      {
        q: 'Temperature starts at $+8^{\\circ}\\text{C}$ and falls $3^{\\circ}$. What is the new temperature?',
        a: '$8 - 3 = 5^{\\circ}\\text{C}$. You subtract 3 from 8. The result is positive because 8 > 3.'
      },
      {
        q: 'Temperature starts at $-5^{\\circ}\\text{C}$ and rises $1^{\\circ}$. What is the new temperature?',
        a: '$-5 + 1 = -4^{\\circ}\\text{C}$. Adding 1 moves right on the number line. Still negative because the rise is small.'
      },
      // Computation: basic subtraction
      {
        q: 'Work out: $4 - 9$',
        a: '$4 - 9 = -5$. Start at 4, move left 9. You pass zero and land at $-5$.'
      },
      {
        q: 'Work out: $-7 + 7$',
        a: '$-7 + 7 = 0$. Moving right 7 from $-7$ brings you exactly to zero. Every number plus its opposite is zero.'
      },
      // Conceptual: sign removal
      {
        q: 'Simplify: $3 - (-6)$',
        a: '$3 - (-6) = 3 + 6 = 9$. The rule $-(-b) = +b$ applies: subtracting a negative is the same as adding.'
      },
      {
        q: 'Simplify: $-4 + (-5)$',
        a: '$-4 + (-5) = -4 - 5 = -9$. Adding a negative is the same as subtracting: $+(-5) = -5$.'
      },
      // Predict: sign removal
      {
        q: 'Predict: will $-2 - (+9)$ be positive or negative? Then calculate.',
        a: 'Negative. $-2 - (+9) = -2 - 9 = -11$. You start at $-2$ and move further left by 9.'
      },
      // Computation: basic multiplication
      {
        q: 'Work out: $-3 \\times (+2)$',
        a: '$-3 \\times (+2) = -6$. Different signs give a negative product. Size is $3 \\times 2 = 6$.'
      },
      {
        q: 'Work out: $-4 \\times (-3)$',
        a: '$-4 \\times (-3) = +12$. Same signs (both negative) give a positive product. Size is $4 \\times 3 = 12$.'
      },
      // Transfer: dollar penalty
      {
        q: 'You do NOT pay a $\\$5$ penalty on three occasions. What is the total change to your balance?',
        a: '$(-3) \\times (-5) = +15$. Not paying a penalty three times saves you $\\$15$. The result is positive: $+\\$15$.'
      },
      // Computation: multiplication
      {
        q: 'Work out: $+7 \\times (-5)$',
        a: '$+7 \\times (-5) = -35$. Different signs give a negative product. Size is $7 \\times 5 = 35$.'
      },
      {
        q: 'Work out: $-5 \\times (-5)$',
        a: '$-5 \\times (-5) = +25$. Same signs (both negative) give a positive product. Size is $5 \\times 5 = 25$.'
      },
      // Self-explain: multiplication
      {
        q: 'Explain why $(-6) \\times (-4) = +24$ and not $-24$.',
        a: 'Same signs give a positive product. Both factors are negative. The sign rule says negative × negative = positive. Size: $6 \\times 4 = 24$.'
      },
      // Computation: three factors
      {
        q: 'Work out: $(-3) \\times (+2) \\times (+5)$',
        a: '$(-3)(+2) = -6$ (different signs). Then $(-6)(+5) = -30$ (different signs). Answer: $-30$.'
      },
      // Elaborate: why minus times minus
      {
        q: 'Explain why minus times minus must equal plus using the dollar-penalty story.',
        a: 'Not paying a $\\$5$ penalty three times saves you $\\$15$. "Not paying" = $-3$, "penalty" = $-5$. The saving is positive. $(-3)(-5) = +15$.'
      },
      // Computation: division
      {
        q: 'Work out: $\\frac{-70}{-2}$',
        a: '$\\frac{-70}{-2} = +35$. Same signs give a positive quotient. Check: $(-2) \\times (+35) = -70$. Correct.'
      },
      {
        q: 'Work out: $\\frac{+12}{-3}$',
        a: '$\\frac{+12}{-3} = -4$. Different signs give a negative quotient. Check: $(-3) \\times (-4) = +12$. Correct.'
      },
      // Computation: division
      {
        q: 'Work out: $\\frac{-20}{+4}$',
        a: '$\\frac{-20}{+4} = -5$. Different signs give a negative quotient. Size: $20 \\div 4 = 5$.'
      },
      // Self-explain: division undoes multiplication
      {
        q: 'Explain why knowing $(-3) \\times (-5) = 15$ tells you $15 \\div (-3) = -5$.',
        a: 'Division undoes multiplication. If $(-3) \\times (-5) = 15$, then $15 \\div (-3)$ asks "what times $(-3)$ gives $15$?" The answer is $-5$.'
      },
      // Computation: mixed addition/subtraction
      {
        q: 'Work out: $-3 + (-5)$',
        a: '$-3 + (-5) = -3 - 5 = -8$. Adding a negative means subtracting. Both negatives move left.'
      },
      {
        q: 'Work out: $6 - (-3)$',
        a: '$6 - (-3) = 6 + 3 = 9$. Subtracting a negative becomes addition. Two minuses make a plus.'
      },
      // Predict: three-factor multiplication
      {
        q: 'Without calculating, predict the sign of $(-2) \\times (-3) \\times (-4)$. Is the product positive or negative?',
        a: 'Negative. Three negatives multiply together and flip the sign three times. Two flips cancel out to positive, and the third flip turns it back to negative. The size is $24$, so the answer is $-24$.'
      },
      {
        q: 'Work out: $-4 + (-4)$',
        a: '$-4 + (-4) = -8$. Both negatives. Adding two negative numbers gives a more-negative result.'
      },
      {
        q: 'Work out: $20 - (-22)$',
        a: '$20 - (-22) = 20 + 22 = 42$. Subtracting a negative flips to addition. $-(-22) = +22$.'
      },
      // Transfer: sign removal
      {
        q: 'A submarine sits at $-200$ m. Its depth changes by $-50$ m (it moves $50$ m deeper). What is its new depth?',
        a: '$-200 + (-50) = -200 - 50 = -250$ m. The submarine is now $250$ m below the surface. Adding a negative is the same as subtracting its size, so depth grows in the negative direction.'
      },
      {
        q: 'Work out: $-6 - (-10)$',
        a: '$-6 - (-10) = -6 + 10 = 4$. Subtracting a negative becomes adding. $10 > 6$ so the result is positive.'
      },
      // Transfer: sequences
      {
        q: 'A sequence runs $9, 6, 3, ?, ?$. Find the missing terms.',
        a: 'The pattern decreases by 3 each time. After 3: $3 - 3 = 0$, then $0 - 3 = -3$. Missing terms: $0, -3$.'
      },
      // Computation: mixed division
      {
        q: 'Work out: $-9 \\div 3$',
        a: '$-9 \\div 3 = -3$. Different signs give a negative quotient. Size: $9 \\div 3 = 3$.'
      },
      {
        q: 'Work out: $-6 \\div (-2)$',
        a: '$-6 \\div (-2) = +3$. Same signs give a positive quotient. Size: $6 \\div 2 = 3$.'
      },
      // Predict: division
      {
        q: 'Without calculating, will $\\frac{-144}{-12}$ be positive or negative? Why?',
        a: 'Positive. Same signs in division give a positive quotient. Two negatives cancel each other just like in multiplication. The size is $\\frac{144}{12} = 12$, so the answer is $+12$.'
      },
      {
        q: 'Work out: $8 \\div (-2)$',
        a: '$8 \\div (-2) = -4$. Different signs give a negative quotient. Size: $8 \\div 2 = 4$.'
      },
      // Transfer: division
      {
        q: 'Six friends share a loss of $\\$48$ equally. How much does each person lose? Use signed division.',
        a: '$\\frac{-48}{6} = -8$. Each person loses $\\$8$. A negative number divided by a positive number gives a negative quotient, which matches our story: each share is a loss.'
      },
      // Elaborate: proof
      {
        q: 'In the proof that $(-3) \\cdot (-5) = 15$, the first step starts from $(-3) + 3 = 0$. Why start there?',
        a: 'Because $3$ is the opposite of $-3$, so they add to zero. Multiplying $0$ by $-5$ stays $0$. Expanding with the distributive law then forces $(-3)(-5)$ to be the opposite of $-15$, which is $15$.'
      },
      // Predict: commutativity
      {
        q: 'If $5 \\times (-3) = -15$, what must $(-3) \\times 5$ equal? Explain.',
        a: '$(-3) \\times 5 = -15$. Multiplication is commutative: $a \\times b = b \\times a$ always. So switching the order cannot change the result.'
      },
      // Computation: mixed
      {
        q: 'Work out: $-8 - 8$',
        a: '$-8 - 8 = -16$. Subtracting a positive moves left. Start at $-8$, go left 8 more.'
      },
      {
        q: 'Work out: $-8 \\times (-8)$',
        a: '$-8 \\times (-8) = +64$. Same signs (both negative) give a positive product. Size: $8 \\times 8 = 64$.'
      },
      {
        q: 'Work out: $-5 \\times 3$',
        a: '$-5 \\times 3 = -15$. Different signs give a negative product. Size: $5 \\times 3 = 15$.'
      },
      {
        q: 'Work out: $8 - (-7)$',
        a: '$8 - (-7) = 8 + 7 = 15$. Subtracting a negative becomes adding. $-(-7) = +7$.'
      },
      {
        q: 'Work out: $-18 \\div (-6)$',
        a: '$-18 \\div (-6) = +3$. Same signs give a positive quotient. Size: $18 \\div 6 = 3$.'
      },
      {
        q: 'Work out: $4 + (-10)$',
        a: '$4 + (-10) = 4 - 10 = -6$. Adding a negative subtracts. $10 > 4$ so the result goes negative.'
      },
      // Transfer: bank overdraft
      {
        q: 'Arjun is overdrawn by $\\$90$. He pays in $\\$150$. How much does he have?',
        a: '$-90 + 150 = 60$. Start at $-90$, add $150$ to get $+60$. He now has $\\$60$.'
      },
      // Applied: temperature change
      {
        q: 'Temperature was $-11^{\\circ}$, now it is $-4^{\\circ}$. Has it risen or fallen? By how much?',
        a: 'It has risen. To find the change, subtract the old temperature from the new: $-4 - (-11) = -4 + 11 = 7$. It rose by $7^{\\circ}$.'
      },
      // Computation: more mixed
      {
        q: 'Work out: $-16 \\div (-1)$',
        a: '$-16 \\div (-1) = +16$. Same signs give a positive quotient. Dividing by $-1$ flips the sign.'
      },
      {
        q: 'Work out: $10 \\times (-60)$',
        a: '$10 \\times (-60) = -600$. Different signs give a negative product. Size: $10 \\times 60 = 600$.'
      },
      // Self-explain: four cases
      {
        q: 'The result of $(-3) + 5$ is $+2$. Explain why the result is positive even though one number is negative.',
        a: 'The positive number ($5$) has a larger size than the negative number ($3$). On the number line, starting at $-3$ and moving right $5$ takes you past zero to $+2$.'
      },
      // Error detection
      {
        q: 'A student writes $-4 + (-3) = +7$. Find and fix the error.',
        a: 'Error: adding two negative numbers cannot give a positive. Correct: $-4 + (-3) = -4 - 3 = -7$. Both negatives add their sizes together in the negative direction.'
      },
      // Computation: mixed
      {
        q: 'Work out: $-2 - (-11)$',
        a: '$-2 - (-11) = -2 + 11 = +9$. Subtracting $-11$ is the same as adding $11$. Result is positive.'
      },
      {
        q: 'Work out: $9 + (-5)$',
        a: '$9 + (-5) = 9 - 5 = 4$. Adding a negative subtracts. Still positive because $9 > 5$.'
      },
      // Mixed operations: switch carefully between rules
      {
        q: 'Work out: $(-6) \\times (-2) - 5$',
        a: 'Multiply first: $(-6) \\times (-2) = +12$ (same signs give positive). Then subtract: $12 - 5 = 7$. Switch carefully from the multiplication rule to the subtraction rule.'
      }
    ],

    reference: {
      category: 'Quick Reference',
      title: 'Integers and Negative Numbers',
      sections: [
        <>
          <h2>Number-Line Model</h2>
          <div className="lrn-definition">
            <span className="lrn-definition-term">Negative Number</span>
            <div className="lrn-definition-desc">
              <p>{`A number less than zero. Written with a minus sign in front: $-3$, $-7.5$, $-100$. Used for quantities below a reference point: temperatures below zero, debts, depths below sea level.`}</p>
            </div>
          </div>
          <div className="lrn-definition">
            <span className="lrn-definition-term">Move right</span>
            <div className="lrn-definition-desc">
              <p>{`Adding a positive number or subtracting a negative number.`}</p>
              <p>{`When to use: $a + b$ where $b > 0$, or $a - (-b)$.`}</p>
            </div>
          </div>
          <div className="lrn-definition">
            <span className="lrn-definition-term">Move left</span>
            <div className="lrn-definition-desc">
              <p>{`Adding a negative number or subtracting a positive number.`}</p>
              <p>{`When to use: $a + (-b)$ or $a - b$ where $b > 0$.`}</p>
            </div>
          </div>

          <h2>Double-Sign Rules</h2>
          <p>{`When two signs appear next to each other, simplify with:`}</p>
          <div className="lrn-eq lrn-eq-hero">{`$$+(+) = + \\qquad +(-) = - \\qquad -(+) = - \\qquad -(-) = +$$`}</div>
          <p>{`When to use: before computing, whenever you see $a - (-b)$, $a + (-b)$, etc.`}</p>
          <p>{`Key case: $a - (-b) = a + b$. Subtracting a negative adds.`}</p>

          <h2>Four Addition Cases</h2>
          <table className="lrn-table" style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr>
                <th
                  style={{
                    textAlign: 'left',
                    padding: '6px 10px',
                    borderBottom: '1px solid var(--border-default)',
                    fontSize: FONT_LABEL,
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase'
                  }}
                >
                  Case
                </th>
                <th
                  style={{
                    textAlign: 'left',
                    padding: '6px 10px',
                    borderBottom: '1px solid var(--border-default)',
                    fontSize: FONT_LABEL,
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase'
                  }}
                >
                  Example
                </th>
                <th
                  style={{
                    textAlign: 'left',
                    padding: '6px 10px',
                    borderBottom: '1px solid var(--border-default)',
                    fontSize: FONT_LABEL,
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase'
                  }}
                >
                  Result sign
                </th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Both positive', '$3 + 5 = 8$', 'positive'],
                ['Negative + positive (|pos| > |neg|)', '$(-3) + 5 = 2$', 'positive'],
                ['Positive + negative (|neg| > |pos|)', '$3 + (-5) = -2$', 'negative'],
                ['Both negative', '$(-3) + (-5) = -8$', 'negative']
              ].map(([c, ex, sign], i) => (
                <tr key={i}>
                  <td
                    style={{
                      padding: '6px 10px',
                      borderBottom: '1px solid var(--border-subtle)',
                      fontSize: FONT_TEX
                    }}
                  >
                    {c}
                  </td>
                  <td
                    style={{ padding: '6px 10px', borderBottom: '1px solid var(--border-subtle)' }}
                  >{`$${ex.replace(/^\$|\$$/g, '')}$`}</td>
                  <td
                    style={{
                      padding: '6px 10px',
                      borderBottom: '1px solid var(--border-subtle)',
                      fontSize: FONT_TEX
                    }}
                  >
                    {sign}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <h2>Multiplication and Division Sign Rules</h2>
          <div className="lrn-eq lrn-eq-hero">{`$$\\text{same signs} \\Rightarrow + \\qquad \\text{different signs} \\Rightarrow -$$`}</div>
          <p>{`When to use: for every product or quotient of two signed numbers.`}</p>
          <table className="lrn-table" style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr>
                {['Signs', 'Rule', 'Example (mult)', 'Example (div)'].map((h, i) => (
                  <th
                    key={i}
                    style={{
                      textAlign: 'left',
                      padding: '6px 10px',
                      borderBottom: '1px solid var(--border-default)',
                      fontSize: FONT_LABEL,
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase'
                    }}
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[
                ['$(+)(+)$', '$+$', '$7 \\times 3 = 21$', '$12 \\div 3 = 4$'],
                ['$(-)(-)$', '$+$', '$6 \\times 4 = 24$', '$-70 \\div (-2) = 35$'],
                ['$(+)(-)$', '$-$', '$7 \\times (-5) = -35$', '$12 \\div (-3) = -4$'],
                ['$(-)(+)$', '$-$', '$(-8) \\times 4 = -32$', '$(-20) \\div 4 = -5$']
              ].map((row, i) => (
                <tr key={i}>
                  {row.map((cell, j) => (
                    <td
                      key={j}
                      style={{
                        padding: '6px 10px',
                        borderBottom: '1px solid var(--border-subtle)'
                      }}
                    >{`$${cell.replace(/^\$|\$$/g, '')}$`}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>

          <h2>Proof: Why 3·(−5) = −15</h2>
          <div className="lrn-proof">
            <span className="lrn-proof-label">PROOF</span>
            <ol className="lrn-list">
              <li>{`Start: $3 \\cdot (-5) + 15 = 3 \\cdot (-5) + 3 \\cdot 5$.`}</li>
              <li>{`Apply the distributive law ($ab + ac = a(b+c)$) with $a=3$, $b=-5$, $c=5$: $3 \\cdot (-5) + 3 \\cdot 5 = 3 \\cdot (-5 + 5)$.`}</li>
              <li>{`Simplify: $3 \\cdot 0 = 0$.`}</li>
              <li>{`So $3 \\cdot (-5)$ is opposite to $15$ (opposite = the number you add to get zero), hence $3 \\cdot (-5) = -15$. $\\square$`}</li>
            </ol>
          </div>

          <h2>Proof: Why (−3)·(−5) = 15</h2>
          <div className="lrn-proof">
            <span className="lrn-proof-label">PROOF</span>
            <ol className="lrn-list">
              <li>{`Start: $(-3) + 3 = 0$.`}</li>
              <li>{`Multiply by $(-5)$: $((-3)+3)(-5) = 0 \\cdot (-5) = 0$.`}</li>
              <li>{`Expand: $(-3)(-5) + 3(-5) = 0$, i.e. $(-3)(-5) + (-15) = 0$.`}</li>
              <li>{`So $(-3)(-5)$ is opposite to $-15$, hence $(-3)(-5) = 15$. $\\square$`}</li>
            </ol>
            <p>{`Law used: $ab + ac = a(b+c)$ (distributive law).`}</p>
          </div>
        </>
      ]
    },

    customCss:
      '.MafsView { --mafs-bg: transparent; --mafs-fg: var(--text-primary); --mafs-line-color: var(--border-subtle); }'
  }
  return config
}

export default function IntegersAndNegativeNumbers() {
  const config = useConfig()
  return <LearningTemplate config={config} />
}
