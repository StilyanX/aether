import { LearningTemplate } from '../../../../components/learning/learning-template'
import { useVizColors } from '../../../../hooks/use-viz-colors'

import {
  OperationsOnNumberLine, NumberLineWithTypes, RoundingVisualization, BaseConversionVis
} from '../../../../components/viz/math-viz/modules'

export default function NumberLineAndNumberSystems() {
  const C = useVizColors()

  const config = {
    cssPrefix: 'whn',
    source: 'Understanding Numbers in Elementary School Mathematics - Hung-Hsi Wu',
    documentTitle: 'Number Line and Number Systems - AETHER',
    learning: {
      category: 'Part 1',
      title: 'Number Line and Number Systems',
      subtitle: 'The number line, estimation, and number bases.',
      sections: [
        /* ════════════════════════════════════════════════════════════════════════
         SECTION 7: THE NUMBER LINE AND THE FOUR OPERATIONS
         ════════════════════════════════════════════════════════════════════════ */
        <>
          <h2>The Number Line and the Four Operations</h2>

          <p>{`Real-world connection. A thermometer is a number line.`}</p>
          <p>{`Temperature readings are points on it.`}</p>
          <p>{`Adding or subtracting degrees means moving along it.`}</p>

          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              You know how to add, subtract, multiply, and divide whole numbers. Can you picture
              each operation as a movement or shape on a number line?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>{`Addition is placing one segment right after another.`}</p>
              <p>{`Subtraction is the remaining segment.`}</p>
              <p>{`Multiplication is repeated addition (or the area of a rectangle).`}</p>
              <p>{`Division undoes multiplication (finds the missing side).`}</p>
            </details>
          </div>

          <h3>The Number Line</h3>
          <p>{`The number line marks whole numbers as equally spaced points, starting from 0.`}</p>
          <p>{`The segment from 0 to 1 is the unit segment. Its right endpoint is 1.`}</p>
          <p>
            {`Create multiples of 1 to the right: 0, 1, 2, 3, ... These equally spaced points are the `}
            <strong>whole numbers</strong>
            {`.`}
          </p>

          <div className="lrn-definition">
            <span className="lrn-definition-term">Whole Number</span>
            <div className="lrn-definition-desc">
              One of the marked points to the right of 0 on the number line (including 0 itself).
            </div>
          </div>
          <div className="lrn-definition">
            <span className="lrn-definition-term">Number (Real Number)</span>
            <div className="lrn-definition-desc">Any point on the number line.</div>
          </div>

          <p>{`We also identify each whole number $n$ with the length of the segment from 0 to $n$.`}</p>

          <h3>The Importance of the Unit</h3>
          <p>{`Every number on the number line depends on the choice of the unit 1.`}</p>
          <p>{`The statement $3 + 4 = 7$ means "3 units plus 4 units equals 7 units."`}</p>
          <p>{`All numbers in an equation must refer to the same unit.`}</p>
          <p>{`"3 apples + 4 oranges" is not $3 + 4 = 7$.`}</p>
          <p>{`The units do not match.`}</p>

          <div className="lrn-callout">
            <p>{`When you write $3 + 4 = 7$, every number refers to the same unit.`}</p>
            <p>{`Mixing units produces nonsense.`}</p>
          </div>

          <h3>Addition and Subtraction on the Number Line</h3>
          <p>{`As you learned, addition means placing one segment right after another.`}</p>
          <p>{`To find $m + n$: start at 0, go right $m$ units, then go right $n$ more units.`}</p>
          <p>{`You land on $m + n$.`}</p>
          <p>
            <strong>Subtraction</strong>
            {` is the reverse.`}
          </p>
          <p>{`To find $m - n$ (where $m \\geq n$): start at 0, go right $m$ units.`}</p>
          <p>{`Then go back $n$ units to the left.`}</p>
          <p>{`You land on $m - n$.`}</p>

          <div className="lrn-graph">
            <OperationsOnNumberLine C={C} />
          </div>

          <div className="lrn-faded">
            <div className="lrn-faded-phase">
              <span className="lrn-faded-label">COMPLETE EXAMPLE</span>
              <p>{`Compute $5 + 3$ on the number line.`}</p>
              <p>{`Start at 0, go right 5 units.`}</p>
              <p>{`Then go right 3 more.`}</p>
              <p>{`You land on 8, so $5 + 3 = 8$.`}</p>
            </div>
            <div className="lrn-faded-phase">
              <span className="lrn-faded-label">YOUR TURN: PARTIAL</span>
              <p>{`Compute $9 - 4$ on the number line.`}</p>
              <p>{`Start at 0, go right 9 units.`}</p>
              <p>{`Then go back $\\underline{\\phantom{00}}$ units to the left.`}</p>
              <p>{`You land on $\\underline{\\phantom{00}}$.`}</p>
              <p>{`So $9 - 4 = \\underline{\\phantom{00}}$.`}</p>
            </div>
            <div className="lrn-faded-phase">
              <span className="lrn-faded-label">INDEPENDENT PRACTICE</span>
              <p>{`Use the number line to show that $7 + 6 = 13$ and $13 - 6 = 7$.`}</p>
            </div>
          </div>

          <h3>Multiplication on the Number Line</h3>
          <p>{`By definition, $m \\times n$ means $m$ copies of $n$ added together.`}</p>
          <p>{`On the number line, $2 \\times 3$ means: start at 0, lay down two segments of length 3.`}</p>
          <p>{`You land on 6.`}</p>
          <p>{`This is repeated addition: $2 \\times 3 = 3 + 3$.`}</p>

          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>{`Addition joins segments on a one-dimensional line.`}</p>
            <p>{`But multiplication needs a second dimension.`}</p>
            <p>{`Think of a rectangle: width 2 and length 3 gives area 6.`}</p>
            <p>{`The area model shows that multiplication creates a two-dimensional quantity from two one-dimensional ones.`}</p>
          </div>

          <p>{`We can also picture multiplication as area.`}</p>
          <p>{`A rectangle of width 2 and length 3 has area 6.`}</p>
          <p>{`That area equals a rectangle of width 1 and length 6.`}</p>
          <p>{`Both correspond to the point 6 on the number line.`}</p>
          <p>{`Both views give the same answer.`}</p>
          <p>{`Repeated addition works directly on the number line.`}</p>
          <p>{`The area model connects multiplication to geometry.`}</p>

          <h3>Division on the Number Line</h3>
          <p>{`Division undoes multiplication.`}</p>
          <p>{`If $a = qd$ (where $d \\neq 0$), then $a \\div d = q$.`}</p>
          <p>{`Think of it as finding the missing side.`}</p>
          <p>{`A rectangle with area $a$ and one side $d$ has the other side equal to $q$.`}</p>
          <p>
            <strong>Why you cannot divide by zero.</strong>
          </p>
          <p>{`If $n \\div 0 = k$ for some $k$, then $n = k \\times 0 = 0$.`}</p>
          <p>{`But $n$ is nonzero. Contradiction.`}</p>
          <p>{`If $0 \\div 0 = k$, then $0 = k \\times 0$, which is true for every $k$.`}</p>
          <p>{`So there is no unique answer.`}</p>
          <p>{`Either way, division by 0 is undefined.`}</p>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>{`Use the rectangle model to explain why $12 \\div 4 = 3$. What are the sides? What is the area?`}</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>{`A rectangle has area 12 and one side 4.`}</p>
              <p>{`The other side is $12 \\div 4 = 3$.`}</p>
              <p>{`Check: $4 \\times 3 = 12$.`}</p>
            </details>
          </div>
        </>,

        /* ════════════════════════════════════════════════════════════════════════
         SECTION 8: WHAT IS A NUMBER?
         ════════════════════════════════════════════════════════════════════════ */
        <>
          <h2>What Is a Number?</h2>

          <p>{`Real-world connection. GPS coordinates are points on two number lines.`}</p>
          <p>{`Every location on Earth maps to a pair of numbers.`}</p>

          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              You have used numbers your whole life. Can you define what a "number" actually is, in
              a way that works for whole numbers, fractions, and decimals?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>{`A number is a point on the number line.`}</p>
              <p>{`This single definition works for whole numbers, fractions, decimals, and irrational numbers alike.`}</p>
            </details>
          </div>

          <h3>The Concept of a Number</h3>
          <p>{`A number is a point on the number line.`}</p>
          <p>{`This definition works for whole numbers, fractions, decimals, and irrational numbers.`}</p>
          <p>{`Whole numbers are easy to picture (five fingers).`}</p>
          <p>{`Fractions like $\\frac{13}{7}$ are not.`}</p>
          <p>{`The number line gives fractions a concrete location, just like whole numbers.`}</p>
          <p>{`The reason to define numbers this way: fractions and whole numbers live in the same system.`}</p>
          <p>{`They follow the same rules.`}</p>
          <p>{`The number line is their shared home.`}</p>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>
              Explain why defining a number as "a point on the number line" is better than defining
              it as "a quantity."
            </p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>{`"A quantity" is vague.`}</p>
              <p>{`How much is a quantity?`}</p>
              <p>{`The number line gives every number (whole, fraction, irrational) a specific location.`}</p>
              <p>{`You can compare, add, and subtract by looking at positions.`}</p>
              <p>{`The definition is precise and works for all types of numbers.`}</p>
            </details>
          </div>

          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Counting Numbers</span>
              <p>{`1, 2, 3, ... Used for counting objects.`}</p>
              <p>{`Do not include zero.`}</p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Whole Numbers</span>
              <p>{`0, 1, 2, 3, ... Include zero.`}</p>
              <p>{`Zero is the starting point on the number line.`}</p>
              <p>{`Counting numbers begin at 1.`}</p>
            </div>
          </div>

          <h3>The Real Number Line</h3>
          <p>{`The number line holds more than whole numbers.`}</p>
          <p>{`Between any two whole numbers live infinitely many points.`}</p>
          <p>These include fractions like {`$\\frac{1}{2}$`} and decimals like 0.75.</p>

          <div className="lrn-graph">
            <NumberLineWithTypes C={C} />
          </div>

          <p>
            {`Every point on the number line is a `}
            <strong>real number</strong>
            {`.`}
          </p>
          <p>{`The whole numbers are just the evenly spaced markers.`}</p>
          <p>{`The fractions fill in some gaps.`}</p>
          <p>The irrational numbers (like {`$\\sqrt{2}$`}) fill in the rest.</p>
          <p>{`The real number line has no holes.`}</p>
          <p>{`Every point on it corresponds to exactly one number.`}</p>
          <p>{`Every number corresponds to exactly one point.`}</p>
          <p>{`This completeness is what makes the number line powerful.`}</p>
          <p>{`All arithmetic can be pictured as operations on this single line.`}</p>

          <h3>Decimal Fractions and Infinite Decimals</h3>
          <p>
            {`A `}
            <strong>decimal fraction</strong>
            {` is a fraction whose denominator is a power of 10.`}
          </p>
          <p>{`Examples: $\\frac{3}{10} = 0.3$, $\\frac{47}{100} = 0.47$.`}</p>
          <p>{`These are points on the number line between whole numbers.`}</p>
          <p>{`The number 0.3 sits three-tenths of the way from 0 to 1.`}</p>
          <p>{`You cannot write some numbers as finite decimals.`}</p>
          <p>{`The number $\\frac{1}{3} = 0.333...$ needs infinitely many digits.`}</p>
          <p>{`An infinite decimal names a specific point on the number line.`}</p>
          <p>{`Each new digit narrows the location.`}</p>
          <p>{`$0.3$ pins the point between 0.3 and 0.4.`}</p>
          <p>{`Then $0.33$ pins it between 0.33 and 0.34.`}</p>
          <p>{`The infinite sequence of digits zeroes in on a single point.`}</p>

          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>{`Each decimal digit narrows the location by a factor of 10.`}</p>
            <p>{`After $k$ digits, the point sits in a segment of length $\\frac{1}{10^k}$.`}</p>
            <p>{`As $k$ grows, this segment shrinks to zero and closes in on a single point.`}</p>
          </div>
        </>,

        /* ════════════════════════════════════════════════════════════════════════
         SECTION 9: ESTIMATION
         ════════════════════════════════════════════════════════════════════════ */
        <>
          <h2>Estimation</h2>

          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              When you round numbers before adding them, how far off could your answer be? Is the
              error always small, or can it sometimes be huge?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>{`It depends on how large the numbers are relative to the rounding unit.`}</p>
              <p>{`Rounding numbers in the thousands to the nearest hundred works well (under 5% error).`}</p>
              <p>{`Rounding numbers in the hundreds to the nearest hundred can produce errors over 30%.`}</p>
            </details>
          </div>

          <h3>Rounding</h3>
          <p>
            <strong>Rounding rule.</strong>
            {` To round $n$ to the nearest 10, replace it with the closest multiple of 10.`}
          </p>
          <p>{`If two multiples are equally close, choose the bigger one.`}</p>
          <p>
            <strong>Rounding algorithm.</strong>
            {` Write $n = N + \\bar{n}$, where $\\bar{n}$ is the ones digit.`}
          </p>
          <p>{`If $\\bar{n} < 5$, the rounded number is $N$.`}</p>
          <p>{`If $\\bar{n} \\geq 5$, the rounded number is $N + 10$.`}</p>
          <p>{`Example: 248 rounds to 250.`}</p>
          <p>{`The ones digit 8 is $\\geq 5$.`}</p>
          <p>{`Example: 12996 rounds to 13000 (nearest 10).`}</p>
          <p>{`Among 12980, 12990, 13000, ..., the closest to 12996 is 13000.`}</p>

          <div className="lrn-graph">
            <RoundingVisualization C={C} />
          </div>

          <p>{`Rounding to the nearest 1000 works the same way.`}</p>
          <p>{`Write $n = N + \\bar{n}$, where $\\bar{n}$ is the last three digits.`}</p>
          <p>{`If the hundreds digit of $\\bar{n}$ is $< 5$, round down.`}</p>
          <p>{`If $\\geq 5$, round up.`}</p>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>{`Use the rounding algorithm to round 12,996 to the nearest 10. Show each step.`}</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>{`Write $12996 = 12990 + 6$.`}</p>
              <p>{`The ones digit is 6, which is $\\geq 5$.`}</p>
              <p>{`Round up: $12990 + 10 = 13000$.`}</p>
              <p>{`The answer is 13,000.`}</p>
            </details>
          </div>

          <div className="lrn-faded">
            <div className="lrn-faded-phase">
              <span className="lrn-faded-label">COMPLETE EXAMPLE</span>
              <p>{`Round 12,996 to the nearest thousand.`}</p>
              <p>{`$12996 = 12000 + 996$.`}</p>
              <p>{`The hundreds digit of 996 is 9, which is $\\geq 5$.`}</p>
              <p>{`Round up: $12000 + 1000 = 13000$.`}</p>
            </div>
            <div className="lrn-faded-phase">
              <span className="lrn-faded-label">YOUR TURN: PARTIAL</span>
              <p>{`Round 45,297 to the nearest thousand.`}</p>
              <p>{`Write $45297 = 45000 + \\underline{\\phantom{00}}$.`}</p>
              <p>{`The hundreds digit of $\\underline{\\phantom{00}}$ is $\\underline{\\phantom{00}}$, which is $\\underline{\\phantom{00}}$ 5.`}</p>
              <p>{`So the rounded number is $\\underline{\\phantom{00}}$.`}</p>
            </div>
          </div>

          <h3>Absolute and Relative Error</h3>
          <p>{`Rounding introduces error.`}</p>
          <p>{`Two measures tell you how big the error is.`}</p>

          <div className="lrn-definition">
            <span className="lrn-definition-term">Absolute Error</span>
            <div className="lrn-definition-desc">{`$|\\text{correct value} - \\text{estimated value}|$`}</div>
          </div>
          <div className="lrn-definition">
            <span className="lrn-definition-term">Relative Error</span>
            <div className="lrn-definition-desc">{`$\\frac{\\text{absolute error}}{\\text{correct value}}$, expressed as a percent.`}</div>
          </div>

          <p>{`Example: $127 + 284 = 411$.`}</p>
          <p>{`Round to nearest hundred: $100 + 300 = 400$.`}</p>
          <p>{`Absolute error: 11. Relative error: $\\frac{11}{411} \\approx 3\\%$.`}</p>
          <p>{`Example: $149 + 147 = 296$.`}</p>
          <p>{`Round to nearest hundred: $100 + 100 = 200$.`}</p>
          <p>{`Absolute error: 96. Relative error: $\\frac{96}{296} \\approx 32\\%$.`}</p>
          <p>{`Rounding to the nearest hundred works well for numbers in the thousands (relative error at most 5%).`}</p>
          <p>{`It works poorly for numbers in the hundreds (relative error up to 50%).`}</p>

          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>{`Rounding to the nearest hundred fails for numbers in the hundreds because the rounding unit (100) is the same size as the numbers themselves.`}</p>
            <p>{`A number like 149 can lose almost half its value when rounded down to 100.`}</p>
            <p>{`For numbers in the thousands, the rounding unit is small compared to the number, so the error stays small.`}</p>
          </div>

          <div className="lrn-warning">
            <p>{`Common mistake: Claiming the rounded answer IS the exact answer.`}</p>
            <p>{`An estimate is always approximate.`}</p>
            <p>{`You must track how far off it might be.`}</p>
          </div>

          <div className="lrn-definition">
            <span className="lrn-definition-term">Order of Magnitude</span>
            <div className="lrn-definition-desc">{`The place value of the leading digit. A number in the thousands has order of magnitude $10^3$. The national debt of 8 trillion has order of magnitude $10^{12}$.`}</div>
          </div>

          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Absolute Error</span>
              <p>{`Tells how far off you are in raw units.`}</p>
              <p>{`A $100 error is $100 regardless of context.`}</p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Relative Error</span>
              <p>{`Tells how far off compared to the actual size.`}</p>
              <p>{`$100 on $2000 (5%) matters less than $100 on $200 (50%).`}</p>
            </div>
          </div>

          <h3>Why Make Estimates?</h3>
          <p>Three reasons:</p>
          <ol className="lrn-list">
            <li>
              <strong>Perfect precision is impossible.</strong> All measurements have built-in
              limits. A ruler marked in millimeters cannot measure micrometers.
            </li>
            <li>
              <strong>Precision is unnecessary.</strong> An elevator sign says "Capacity 4000 lbs."
              The true capacity is likely higher. The rounded number serves the purpose.
            </li>
            <li>
              <strong>Estimation leads to precision.</strong> Division-with-remainder starts with an
              estimate of the quotient, then refines it. Rounding checks whether an exact answer is
              reasonable.
            </li>
          </ol>

          <div className="lrn-callout">
            <p>{`Every estimate must come with awareness of its error.`}</p>
            <p>{`An estimate without error awareness is just a guess.`}</p>
          </div>
        </>,

        /* ════════════════════════════════════════════════════════════════════════
         SECTION 10: NUMBERS IN BASE b
         ════════════════════════════════════════════════════════════════════════ */
        <>
          <h2>{`Numbers in Base $b$`}</h2>

          <h3>Basic Definitions</h3>
          <p>{`Our number system uses base 10.`}</p>
          <p>{`Start with a concrete example. The number 36402 means:`}</p>
          <div className="lrn-eq">{`$$3 \\times 10^4 + 6 \\times 10^3 + 4 \\times 10^2 + 0 \\times 10^1 + 2 \\times 10^0$$`}</div>
          <p>{`Each place value is a power of 10.`}</p>
          <p>{`Replace 10 with any whole number $b > 1$, and you get base $b$.`}</p>

          <p>{`Example in base 7: $36402 = 2 \\times 7^5 + 1 \\times 7^4 + 1 \\times 7^3 + 0 \\times 7^2 + 6 \\times 7^1 + 2 \\times 7^0 = (211062)_7$.`}</p>

          <div className="lrn-graph">
            <BaseConversionVis C={C} />
          </div>

          <div className="lrn-definition">
            <span className="lrn-definition-term">{`Base $b$ Expansion`}</span>
            <div className="lrn-definition-desc">{`A whole number $n$ written as $a_k b^k + a_{k-1} b^{k-1} + \\cdots + a_1 b + a_0$ where each coefficient $a_i$ satisfies $0 \\leq a_i < b$.`}</div>
          </div>

          <p>{`Binary (base 2) uses only 0 and 1.`}</p>
          <p>{`Computers use binary because each bit is either on or off.`}</p>
          <p>{`Sexagesimal (base 60) was used by the Babylonians.`}</p>
          <p>{`We still use it for time (60 seconds in a minute) and angles (60 minutes in a degree).`}</p>

          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              In base 5, the digits are 0, 1, 2, 3, 4. What happens if you try to use the digit 6?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>{`It is invalid.`}</p>
              <p>{`Each coefficient must satisfy $0 \\leq a_i < b$.`}</p>
              <p>{`In base 5, $b = 5$, so only digits 0 through 4 are allowed.`}</p>
              <p>{`Using 6 violates the definition.`}</p>
            </details>
          </div>

          <h3>The Representation Theorem</h3>
          <p>
            <strong>Theorem.</strong>
            {` If $b > 1$, every whole number has exactly one base $b$ representation.`}
          </p>
          <p>
            <strong>Existence proof (by repeated division).</strong>
            {` Take $3644$ in base 7.`}
          </p>
          <div className="lrn-eq">
            <span>{`$$3644 = 520 \\times 7 + 4$$`}</span>
          </div>
          <div className="lrn-eq">
            <span>{`$$520 = 74 \\times 7 + 2$$`}</span>
          </div>
          <div className="lrn-eq">
            <span>{`$$74 = 10 \\times 7 + 4$$`}</span>
          </div>
          <div className="lrn-eq">
            <span>{`$$10 = 1 \\times 7 + 3$$`}</span>
          </div>
          <p>{`Read the remainders bottom to top: $3644 = (13424)_7$.`}</p>
          <p>{`Each remainder is less than 7, so each is a valid base-7 digit.`}</p>
          <p>{`The process always terminates because the quotients get smaller.`}</p>
          <p>
            <strong>Uniqueness proof.</strong>
          </p>
          <p>{`Suppose $3644$ has two base 7 representations.`}</p>
          <p>{`Both are divisions-with-remainder of 3644 by 7.`}</p>
          <p>{`By the Division-with-Remainder Theorem, the quotient and remainder are unique.`}</p>
          <p>{`So the last digit must match.`}</p>
          <p>{`Remove it and repeat. All digits must match.`}</p>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>{`Why does repeated division always terminate? What happens to the quotient at each step?`}</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>{`At each step, the quotient is strictly smaller than the previous dividend (because $q < a$ when $d > 1$).`}</p>
              <p>{`A decreasing sequence of whole numbers must eventually reach 0.`}</p>
              <p>{`When the quotient is 0, the process stops.`}</p>
            </details>
          </div>

          <h3>{`Arithmetic in Base $b$`}</h3>
          <p>{`The standard algorithms work in any base.`}</p>
          <p>{`Only the arithmetic tables change.`}</p>

          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>{`The algorithms are the same in every base.`}</p>
            <p>{`Only the single-digit facts change.`}</p>
            <p>{`This is what makes our numeral system powerful: the algorithms are universal.`}</p>
            <p>{`They work because of the laws of arithmetic and the structure of place value.`}</p>
          </div>

          <p>
            <strong>Addition in base 7.</strong>
            {` Add $(103)_7 + (242)_7$ column by column:`}
          </p>
          <ul className="lrn-list">
            <li>{`Ones: $3 + 2 = 5$.`}</li>
            <li>{`Sevens: $0 + 4 = 4$.`}</li>
            <li>{`Forty-nines: $1 + 2 = 3$.`}</li>
          </ul>
          <p>{`Result: $(345)_7$.`}</p>
          <p>{`With carrying: $(64)_7 + (25)_7$.`}</p>
          <p>{`Ones: $4 + 5 = 9 = 1 \\times 7 + 2$. Write 2, carry 1.`}</p>
          <p>{`Sevens: $6 + 2 + 1 = 9 = 1 \\times 7 + 2$. Write 2, carry 1.`}</p>
          <p>{`Result: $(122)_7$.`}</p>
          <p>{`Subtraction in base 7 uses trading, same as base 10.`}</p>
          <p>{`When you trade in base 7, one "seven" becomes 7 ones (not 10 ones).`}</p>
          <p>{`Multiplication in base 7 uses the same algorithm as base 10, but with the base-7 multiplication table.`}</p>
          <p>{`$(265)_7 \\times (4)_7$: Work right to left.`}</p>
          <ul className="lrn-list">
            <li>{`$5 \\times 4 = 20 = 2 \\times 7 + 6$. Write 6, carry 2.`}</li>
            <li>{`$6 \\times 4 = 24$, plus carried 2 = 26. $26 = 3 \\times 7 + 5$. Write 5, carry 3.`}</li>
            <li>{`$2 \\times 4 = 8$, plus carried 3 = 11. $11 = 1 \\times 7 + 4$. Write 4, carry 1.`}</li>
          </ul>
          <p>{`Result: $(1456)_7$.`}</p>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>{`In the multiplication $(265)_7 \\times (4)_7$, the step "$6 \\times 4 = 24$" uses base-10 arithmetic. How do you then convert 24 into base-7 digits?`}</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>{`Divide 24 by 7: $24 = 3 \\times 7 + 3$.`}</p>
              <p>{`Check: $3 \\times 7 = 21$, remainder 3.`}</p>
              <p>{`But the text says $26 = 3 \\times 7 + 5$, because 2 was carried to make it 26, not 24.`}</p>
              <p>{`The conversion: divide the base-10 result by 7.`}</p>
              <p>{`The remainder is the digit; the quotient is the carry.`}</p>
            </details>
          </div>

          <h3>Binary Arithmetic</h3>
          <p>{`Binary uses only 0 and 1.`}</p>
          <p>{`The addition table is tiny:`}</p>
          <p>{`$0 + 0 = 0$, $0 + 1 = 1$, $1 + 0 = 1$, $1 + 1 = 10$.`}</p>
          <p>{`The multiplication table is even simpler:`}</p>
          <p>{`$0 \\times 0 = 0$, $0 \\times 1 = 0$, $1 \\times 0 = 0$, $1 \\times 1 = 1$.`}</p>
          <p>{`Key binary facts:`}</p>
          <ul className="lrn-list">
            <li>{`$(1\\underbrace{00\\cdots0}_{m})_2 = 2^m$`}</li>
            <li>{`$2^m + 2^m = 2^{m+1}$ (doubling shifts one place left)`}</li>
            <li>{`$(\\underbrace{11\\cdots1}_{m})_2 + (1)_2 = (1\\underbrace{00\\cdots0}_{m})_2$ (a string of $m$ ones plus 1 equals $2^m$)`}</li>
          </ul>
          <p>{`Example: $(1111)_2 \\times (11)_2 = (101101)_2$.`}</p>
          <p>{`This is $15 \\times 3 = 45$ in decimal.`}</p>

          <div className="lrn-faded">
            <div className="lrn-faded-phase">
              <span className="lrn-faded-label">COMPLETE EXAMPLE</span>
              <p>{`Convert 45 to binary.`}</p>
              <p>{`$45 = 22 \\times 2 + 1$.`}</p>
              <p>{`$22 = 11 \\times 2 + 0$.`}</p>
              <p>{`$11 = 5 \\times 2 + 1$.`}</p>
              <p>{`$5 = 2 \\times 2 + 1$.`}</p>
              <p>{`$2 = 1 \\times 2 + 0$.`}</p>
              <p>{`$1 = 0 \\times 2 + 1$.`}</p>
              <p>{`Remainders bottom to top: $(101101)_2$.`}</p>
            </div>
            <div className="lrn-faded-phase">
              <span className="lrn-faded-label">YOUR TURN: PARTIAL</span>
              <p>{`Convert 67 to binary using repeated division.`}</p>
              <p>{`$67 = \\underline{\\phantom{00}} \\times 2 + \\underline{\\phantom{00}}$.`}</p>
              <p>{`$33 = \\underline{\\phantom{00}} \\times 2 + \\underline{\\phantom{00}}$.`}</p>
              <p>{`Continue until the quotient is 0.`}</p>
              <p>{`Read remainders bottom to top: $67 = (\\underline{\\phantom{0000}})_2$.`}</p>
            </div>
          </div>

          <h3>Conversion Between Bases</h3>
          <p>{`To convert from base 10 to base $b$, use repeated division by $b$.`}</p>
          <p>{`This is the same method from the Representation Theorem proof.`}</p>
          <p>
            <strong>Example: Convert 247 to base 5.</strong>
          </p>
          <div className="lrn-eq">
            <span>{`$$247 = 49 \\times 5 + 2$$`}</span>
          </div>
          <div className="lrn-eq">
            <span>{`$$49 = 9 \\times 5 + 4$$`}</span>
          </div>
          <div className="lrn-eq">
            <span>{`$$9 = 1 \\times 5 + 4$$`}</span>
          </div>
          <div className="lrn-eq">
            <span>{`$$1 = 0 \\times 5 + 1$$`}</span>
          </div>
          <p>{`Read remainders bottom to top: $247 = (1442)_5$.`}</p>
          <p>
            <strong>Check:</strong>
            {` $1 \\times 125 + 4 \\times 25 + 4 \\times 5 + 2 = 125 + 100 + 20 + 2 = 247$.`}
          </p>
          <p>{`To convert from base $b$ to base 10, expand the place values and add.`}</p>
          <p>
            <strong>{`Example: $(305)_7$ to base 10.`}</strong>
          </p>
          <p>{`$3 \\times 49 + 0 \\times 7 + 5 \\times 1 = 147 + 0 + 5 = 152$.`}</p>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>{`Why does the repeated-division method give digits from right to left, not left to right?`}</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>{`Each division by $b$ strips off the ones digit (the remainder).`}</p>
              <p>{`It reduces the number to what remains above the ones place (the quotient).`}</p>
              <p>{`The first remainder is the ones digit.`}</p>
              <p>{`The second is the $b$'s digit.`}</p>
              <p>{`You get the least significant digit first.`}</p>
            </details>
          </div>

          <h3>Why the Emphasis on Base 10?</h3>
          <p>{`Humans use base 10 because we have ten fingers.`}</p>
          <p>{`There is no mathematical reason to prefer 10 over any other base.`}</p>
          <p>{`Every algorithm you learned works in any base.`}</p>
          <p>{`Addition carries the same way.`}</p>
          <p>{`Subtraction trades the same way.`}</p>
          <p>{`Multiplication uses the distributive law the same way.`}</p>
          <p>{`Long division estimates quotient digits the same way.`}</p>
          <p>{`Only the single-digit tables change. In base 7, you need a $7 \\times 7$ addition table and a $7 \\times 7$ multiplication table. In base 2, the tables are tiny. In base 10, the tables go up to $9 \\times 9$.`}</p>
          <p>{`This universality is the deep point.`}</p>
          <p>{`The algorithms do not depend on base 10.`}</p>
          <p>{`They rely on the laws of arithmetic and place value.`}</p>
          <p>{`These hold in every base.`}</p>

          <div className="lrn-callout">
            <p>{`Base 10 is a historical accident (ten fingers). The mathematics works the same in any base $b > 1$.`}</p>
          </div>

          <h3>Historical Context</h3>
          <p>{`Positional numeral systems are a human invention.`}</p>
          <p>{`Not all civilizations used base 10.`}</p>
          <p>{`The ancient Babylonians wrote numbers using base 60.`}</p>
          <p>{`We still use base 60 for time and angles.`}</p>
          <p>{`They had 59 distinct symbols.`}</p>
          <p>{`The Maya of Central America used a base-20 system.`}</p>
          <p>{`Their digits were dots and bars.`}</p>
          <p>{`They were among the first to use a symbol for zero.`}</p>
          <p>{`Our current system (Hindu-Arabic, base 10) started in India around the 6th century.`}</p>
          <p>{`Arab scholars brought it to Europe.`}</p>
          <p>{`It uses ten symbols (0 through 9) and positional notation.`}</p>
          <p>{`The key innovation: a symbol for zero as a placeholder.`}</p>
          <p>{`All three systems use the same idea: the value of a digit depends on its position.`}</p>
          <p>{`A 3 in the tens place means 30.`}</p>
          <p>{`A 3 in the hundreds place means 300.`}</p>
          <p>{`This positional principle makes efficient arithmetic possible.`}</p>

          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Positional (Hindu-Arabic)</span>
              <p>{`Digit value depends on position.`}</p>
              <p>{`Enables column-by-column algorithms.`}</p>
              <p>{`Compact notation.`}</p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Non-Positional (Roman)</span>
              <p>{`I, V, X, L, C, D, M. No position dependence.`}</p>
              <p>{`Cannot do column arithmetic.`}</p>
              <p>{`Algorithms not possible.`}</p>
            </div>
          </div>
        </>
      ]
    },
    practice: [
      // Number Line: basic, transfer, elaborate, predict
      {
        q: 'Why can you never divide by 0?',
        a: 'If $n \\neq 0$ and $n \\div 0 = k$, then $n = k \\times 0 = 0$. Contradiction. If $0 \\div 0 = k$, then $0 = k \\times 0$ is true for every $k$. No unique answer exists. Either way, the division is undefined.'
      },
      {
        q: 'Explain why $3 + 4 = 7$ requires all three numbers to use the same unit.',
        a: 'On the number line, addition joins segments end-to-end. Both segments must be measured by the same unit. "3 apples + 4 oranges" mixes two different number lines with different units. The result is not a point on either number line.'
      },
      {
        q: 'Use the rectangle model to explain why $15 \\div 5 = 3$.',
        a: 'A rectangle has area 15 and one side is 5. The other side must be $15 \\div 5 = 3$. Check: $5 \\times 3 = 15$. Division finds the missing side when you know the area and one side.'
      },
      {
        q: 'On the number line, show that subtraction undoes addition using $8 + 5 - 5$.',
        a: 'Start at 0, go right 8 units (land on 8). Go right 5 more units (land on 13). Now subtract: the segment from 5 to 13 has length 8. So $8 + 5 - 5 = 8$. Adding then subtracting the same amount returns you to where you started.'
      },
      {
        q: 'Predict: can multiplication on the number line be shown as a single segment?',
        a: 'Yes. $3 \\times 4 = 12$. You can show it as three segments of length 4 joined end-to-end, landing on 12. Or as a single segment from 0 to 12. The area model (a rectangle of sides 3 and 4) also gives 12.'
      },
      // What Is a Number?: basic, transfer, elaborate, predict
      {
        q: 'What is the difference between a counting number and a whole number?',
        a: 'Counting numbers are 1, 2, 3, ... They do not include zero. Whole numbers are 0, 1, 2, 3, ... They include zero. Zero is the starting point on the number line.'
      },
      {
        q: 'Why is the number line definition of "number" better than "a quantity"?',
        a: '"A quantity" is vague and does not tell you where a number sits relative to others. The number line gives every number a precise location. You can compare, add, and measure directly on it. It works for whole numbers, fractions, and irrationals alike.'
      },
      {
        q: 'Explain how each decimal digit narrows a number to a smaller interval.',
        a: 'The first digit after the decimal point pins the number to a segment of length $\\frac{1}{10}$. The second digit narrows it to $\\frac{1}{100}$. Each new digit shrinks the segment by a factor of 10, closing in on a single point.'
      },
      {
        q: 'Predict: does $\\sqrt{2}$ have a location on the number line?',
        a: 'Yes. Every real number is a point on the number line. $\\sqrt{2} \\approx 1.414$ sits between 1 and 2, slightly closer to 1. It is irrational, so its decimal expansion never ends or repeats, but it still names a single point.'
      },
      // Estimation: basic, transfer, elaborate, predict
      {
        q: 'Predict: if you round $149 + 147$ by rounding each to the nearest hundred, will your estimate be close?',
        a: 'No. $100 + 100 = 200$. The correct answer is 296. The absolute error is 96 and the relative error is about 32%. Numbers in the hundreds are too small for rounding to the nearest hundred to be reliable.'
      },
      {
        q: 'Compute the absolute and relative error when $4257 + 3461$ is estimated by rounding to the nearest hundred.',
        a: 'Rounded: $4300 + 3500 = 7800$. Exact: $7718$. Absolute error: $7800 - 7718 = 82$. Relative error: $82 / 7718 \\approx 1.06\\%$.'
      },
      {
        q: 'Round 20,245,386 to the nearest ten-thousand.',
        a: '$20,245,386 = 20,240,000 + 5,386$. The thousands digit of 5,386 is 5, which is $\\geq 5$. So round up: $20,240,000 + 10,000 = 20,250,000$.'
      },
      {
        q: 'What is the order of magnitude of 8,379,388,245,684?',
        a: 'The leading digit is in the trillions place ($10^{12}$). Order of magnitude: $10^{12}$. Saying "about 8 trillion" captures the essential size.'
      },
      {
        q: 'Why does rounding to the nearest hundred fail for numbers in the hundreds but work for numbers in the thousands?',
        a: 'The rounding unit (100) is the same size as a number in the hundreds, so the error can be up to 50%. For numbers in the thousands, 100 is much smaller than the number itself. The relative error stays under 5%.'
      },
      {
        q: 'The population of a city is reported as 102,743. Why is "about 100,000" reasonable?',
        a: 'Rounding to nearest $10^4$ gives 100,000. The last four digits may be unreliable (census error). The relative error is at most about 8%. In everyday use, this level of accuracy is acceptable.'
      },
      // Base b: basic, transfer, elaborate, predict
      {
        q: 'What is $36402$ in base 7?',
        a: 'Repeated division: $36402 = 5200 \\times 7 + 2$. $5200 = 742 \\times 7 + 6$. $742 = 106 \\times 7 + 0$. $106 = 15 \\times 7 + 1$. $15 = 2 \\times 7 + 1$. $2 = 0 \\times 7 + 2$. Remainders bottom to top: $(211062)_7$.'
      },
      {
        q: 'Add $(64)_7 + (25)_7$ in base 7 without converting to base 10.',
        a: 'Ones: $4 + 5 = 9 = 1 \\times 7 + 2$. Write 2, carry 1. Sevens: $6 + 2 + 1 = 9 = 1 \\times 7 + 2$. Write 2, carry 1. Answer: $(122)_7$.'
      },
      {
        q: 'Convert 45 to binary.',
        a: '$45 = 22 \\times 2 + 1$. $22 = 11 \\times 2 + 0$. $11 = 5 \\times 2 + 1$. $5 = 2 \\times 2 + 1$. $2 = 1 \\times 2 + 0$. $1 = 0 \\times 2 + 1$. Remainders bottom to top: $(101101)_2$. Check: $32 + 8 + 4 + 1 = 45$.'
      },
      {
        q: 'In binary, what is $(1111)_2 + (1)_2$?',
        a: '$(1111)_2 = 2^3 + 2^2 + 2^1 + 2^0 = 15$. Add 1: $16 = 2^4 = (10000)_2$. Pattern: a string of $m$ ones plus 1 equals $1$ followed by $m$ zeros.'
      },
      {
        q: 'Why do the standard algorithms work the same way in every base?',
        a: 'They rely only on the associative, commutative, and distributive laws, plus division-with-remainder. These properties hold for all whole numbers regardless of how they are written. The base changes the single-digit tables, not the algorithm structure.'
      },
      {
        q: 'Why does trading in base 7 subtraction give you 7 ones (not 10 ones)?',
        a: 'In base 7, each "sevens place" unit equals 7 ones. Trading converts 1 seven into 7 ones, preserving value. In base 10, trading gives 10 ones. The number of ones always equals the base.'
      },
      {
        q: 'Predict: will the Representation Theorem fail if $b = 1$?',
        a: 'Yes. In base 1, the only digit is 0. Every coefficient is 0. No positive number can be represented as $0 \\times 1^n + \\cdots + 0 \\times 1^0 = 0$. The theorem requires $b > 1$.'
      },
      {
        q: 'Compute $(265)_7 \\times (34)_7$ in base 7 without converting to base 10.',
        a: '$(265)_7 \\times (4)_7 = (1456)_7$. $(265)_7 \\times (3)_7 = (1161)_7$, shifted one left. Add: $(1456)_7 + (11610)_7 = (13366)_7$.'
      },
      {
        q: 'The Representation Theorem says every whole number has a unique base $b$ representation. The proof uses which earlier theorem repeatedly?',
        a: 'The Division-with-Remainder Theorem. Each step in the repeated division relies on the existence and uniqueness of quotient and remainder. Existence gives the digits. Uniqueness proves no other representation exists.'
      },
      {
        q: 'Compute $(1111)_2 \\times (11)_2$ in binary.',
        a: 'Row 1: $(1111)_2 \\times 1 = (1111)_2$. Row 2: $(1111)_2 \\times 1 = (1111)_2$, shifted one left = $(11110)_2$. Add: $(1111)_2 + (11110)_2$. Ones: 1. Twos: $1 + 1 = 10$, write 0 carry 1. Fours: $1 + 1 + 1 = 11$, write 1 carry 1. Eights: $1 + 1 + 1 = 11$, write 1 carry 1. Sixteens: $0 + 1 + 1 = 10$, write 0 carry 1. Answer: $(101101)_2$. Check: $15 \\times 3 = 45$.'
      },
      {
        q: 'Compute $(502)_7 - (213)_7$ in base 7.',
        a: 'Ones: $2 - 3$: trade 1 seven. $2 + 7 = 9$. $9 - 3 = 6$. Sevens: $0 - 1$ (after giving 1 to ones): trade from forty-nines. $5 \\to 4$, sevens becomes $0 - 1 + 7 = 6$. $6 - 1 = 5$. Forty-nines: $4 - 2 = 2$. Answer: $(256)_7$.'
      },
      {
        q: 'When rounding the decimal 59.99725 to the nearest hundredth, a student gets 59.99. What went wrong?',
        a: 'The student looked at the wrong digit. Rounding to the nearest hundredth: look at the third decimal digit, which is 7. Since $7 \\geq 5$, round up: $59.99 + 0.01 = 60.00$.'
      },
      // Interleaved across sections
      {
        q: 'You have $742 in hundred-dollar, ten-dollar, and one-dollar bills. Explain how splitting it into 4 equal stacks models long division.',
        a: '7 hundreds split 4 ways: 1 each, 3 left. Convert 3 hundreds to 30 tens, plus 4 = 34 tens. Split 4 ways: 8 each, 2 left. Convert to 20 ones, plus 2 = 22 ones. Split 4 ways: 5 each, 2 left. Each stack: $185. Remainder: $2. This matches $742 = 185 \\times 4 + 2$.'
      },
      {
        q: 'A teacher says "division tells how many groups or how many in each group." Find at least two errors.',
        a: '(1) Division is the inverse of multiplication, not about groups. (2) The description mixes up two interpretations (measurement and partitive) without telling them apart. (3) "The answer in division" for quotient is vague. (4) "Left over after dividing" ignores that the remainder can be 0.'
      }
    ],
    reference: {
      category: 'Quick Reference',
      title: 'Number Line and Number Systems',
      sections: [
        <>
          <h2>Definitions</h2>

          <div className="lrn-definition">
            <span className="lrn-definition-term">Number Line</span>
            <div className="lrn-definition-desc">{`A horizontal line with equally spaced points identified with whole numbers. The segment $[0,1]$ is the unit. Addition = placing one segment right after another.`}</div>
          </div>
          <div className="lrn-definition">
            <span className="lrn-definition-term">Whole Number</span>
            <div className="lrn-definition-desc">
              One of the marked points to the right of 0 on the number line (including 0 itself).
            </div>
          </div>
          <div className="lrn-definition">
            <span className="lrn-definition-term">Real Number</span>
            <div className="lrn-definition-desc">
              Any point on the number line. Includes whole numbers, fractions, and irrational
              numbers.
            </div>
          </div>
          <div className="lrn-definition">
            <span className="lrn-definition-term">Decimal Fraction</span>
            <div className="lrn-definition-desc">{`A fraction whose denominator is a power of 10. Example: $\\frac{47}{100} = 0.47$.`}</div>
          </div>
          <div className="lrn-definition">
            <span className="lrn-definition-term">Infinite Decimal</span>
            <div className="lrn-definition-desc">{`A decimal that never ends. Each digit narrows the location on the number line by a factor of 10, closing in on a single point.`}</div>
          </div>
          <div className="lrn-definition">
            <span className="lrn-definition-term">Rounding</span>
            <div className="lrn-definition-desc">{`Replace $n$ by the closest multiple of the target unit. If tied, choose the bigger number. Use for simplifying numbers, checking answers, communicating approximate values.`}</div>
          </div>
          <div className="lrn-definition">
            <span className="lrn-definition-term">Absolute Error</span>
            <div className="lrn-definition-desc">{`$|\\text{correct value} - \\text{estimate}|$. Measures how far off an estimate is in absolute terms.`}</div>
          </div>
          <div className="lrn-definition">
            <span className="lrn-definition-term">Relative Error</span>
            <div className="lrn-definition-desc">{`$\\frac{\\text{absolute error}}{\\text{correct value}} \\times 100\\%$. Compares errors across different scales. \\$100 error on \\$2000 (5%) vs \\$100 on \\$200 (50%).`}</div>
          </div>
          <div className="lrn-definition">
            <span className="lrn-definition-term">Order of Magnitude</span>
            <div className="lrn-definition-desc">{`The place value of the leading digit. If the number has $n+1$ digits, the order of magnitude is $10^n$. Use for quick size comparisons.`}</div>
          </div>
          <div className="lrn-definition">
            <span className="lrn-definition-term">{`Base $b$ Representation`}</span>
            <div className="lrn-definition-desc">{`$n = a_k b^k + a_{k-1} b^{k-1} + \\cdots + a_1 b + a_0$ where $0 \\leq a_i < b$. Use when writing numbers in non-decimal systems (binary, octal, hex).`}</div>
          </div>
        </>,

        <>
          <h2>Formulas</h2>

          <div className="lrn-eq">
            <span>{`$$\\text{Absolute error} = |x - \\tilde{x}|$$`}</span>
          </div>
          <p>Measuring estimation accuracy.</p>

          <div className="lrn-eq">
            <span>{`$$\\text{Relative error} = \\frac{|x - \\tilde{x}|}{x} \\times 100\\%$$`}</span>
          </div>
          <p>Contextualizing estimation accuracy.</p>

          <div className="lrn-eq">
            <span>{`$$n = a_k b^k + \\cdots + a_0 b^0, \\quad 0 \\leq a_i < b$$`}</span>
          </div>
          <p>{`Base $b$ expansion (Representation Theorem).`}</p>

          <div className="lrn-eq">
            <span>{`$$b^m \\times b^n = b^{m+n}$$`}</span>
          </div>
          <p>Law of exponents.</p>

          <div className="lrn-eq">
            <span>{`$$2^m + 2^m = 2^{m+1}$$`}</span>
          </div>
          <p>Binary doubling.</p>
        </>,

        <>
          <h2>Theorems</h2>

          <h3>Representation Theorem</h3>
          <p>{`If $b > 1$, every whole number has exactly one base $b$ representation. Base conversion always gives a unique result. Supports all positional numeral systems.`}</p>
        </>,

        <>
          <h2>Algorithms</h2>

          <h3>{`Rounding Algorithm (to nearest $10^k$)`}</h3>
          <ol className="lrn-list">
            <li>{`Write $n = N + \\bar{n}$ where $\\bar{n}$ is the last $k$ digits.`}</li>
            <li>{`Look at the leading digit of $\\bar{n}$.`}</li>
            <li>{`If $< 5$: round to $N$.`}</li>
            <li>{`If $\\geq 5$: round to $N + 10^k$.`}</li>
          </ol>

          <h3>Base Conversion (Repeated Division)</h3>
          <ol className="lrn-list">
            <li>{`Divide $n$ by $b$. Record remainder.`}</li>
            <li>{`Replace $n$ with the quotient.`}</li>
            <li>Repeat until quotient is 0.</li>
            <li>Read remainders from bottom to top.</li>
          </ol>
        </>,

        <>
          <h2>Key Contrasts</h2>

          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Absolute Error</span>
              <p>Raw difference in units. Context-free.</p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Relative Error</span>
              <p>Difference as fraction of true value. Context-aware.</p>
            </div>
          </div>

          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Base 10</span>
              <p>{`Historical accident (ten fingers). $9 \\times 9$ multiplication table.`}</p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">{`Base $b$`}</span>
              <p>{`Same algorithms, different single-digit tables. Mathematics identical in any base $b > 1$.`}</p>
            </div>
          </div>
        </>,

        <>
          <h2>Common Errors</h2>

          <div className="lrn-steps">
            <div className="lrn-step">
              <span className="lrn-step-title">Rounding 12996 to nearest 10 incorrectly</span>
              <p className="lrn-step-content">
                The closest multiple of 10 is 13000, not 12900. Use the definition: find the nearest
                multiple.
              </p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">
                Checking numbers in the hundreds by rounding to nearest 100
              </span>
              <p className="lrn-step-content">
                Unreliable. Relative error can reach 50%. Use nearest 10 instead.
              </p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">
                Claiming the rounded answer is the exact answer
              </span>
              <p className="lrn-step-content">
                An estimate is always approximate. You must track how far off it might be.
              </p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">Using digit 6 in a base 5 number</span>
              <p className="lrn-step-content">{`Base 5 digits are 0, 1, 2, 3, 4 only. Each coefficient must be $< b$.`}</p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">Using base-10 addition facts in base 7</span>
              <p className="lrn-step-content">{`In base 7, $4 + 5 = 12$ (not 9). You must use base-$b$ arithmetic tables when computing in base $b$.`}</p>
            </div>
          </div>
        </>
      ]
    },
    customCss: null
  }

  return <LearningTemplate config={config} />
}
