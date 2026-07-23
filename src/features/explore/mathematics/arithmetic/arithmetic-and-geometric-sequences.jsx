import { LearningTemplate } from '../../../../components/learning/learning-template'
import { VizFigure } from '../../../../components/viz-figure'
import { useVizColors } from '../../../../hooks/use-viz-colors'
import * as viz from './arithmetic-and-geometric-sequences-viz'

function useConfig() {
  const C = useVizColors()
  const config = {
    cssPrefix: 'ags',
    documentTitle: 'Arithmetic and Geometric Sequences - AETHER',
    learning: {
      groupTitle: 'Sequences',
      category: 'Arithmetic',
      title: 'Arithmetic and Geometric Sequences',
      subtitle:
        'Two patterns of numbers in order: one grows by adding a fixed step, the other by multiplying by a fixed ratio.',
      sections: [
        // SECTION 0 What Is a Sequence?
        <>
          <div id="lrn-section-0" className="lrn-section">
            <h2>What Is a Sequence?</h2>
            <p className="lrn-when-to-use">
              <strong>When to use:</strong> Any time you work with a list of numbers that follow a
              rule. Sequences describe populations, savings, musical pitches, and more.
            </p>
            <p>
              {`Why study sequences? The same operation repeated at every step shows up everywhere.
              A small formula can replace adding thousands of terms by hand.`}
            </p>
            <div className="lrn-predict">
              <span className="lrn-predict-label">PREDICT</span>
              <p>
                {`Look at 3, 5, 7, 9, 11, ... What do you think the next two numbers are? How did
                you find them?`}
              </p>
              <details className="lrn-predict-reveal">
                <summary>Check your thinking</summary>
                <p>
                  {`The next two numbers are 13 and 15. Each term is 2 more than the one before it.
                  You found the pattern by noticing the fixed gap.`}
                </p>
              </details>
            </div>
            <p>
              {`A sequence is a list of numbers in a fixed order. Each number occupies a position.
              We call the number at position $n$ the $n$-th term and write it $a_n$.`}
            </p>
            <p>
              {`The sequence 3, 5, 7, 9, 11, ... has $a_1 = 3$, $a_2 = 5$, $a_3 = 7$, and so on.
              Each term is larger than the one before by exactly 2. The sequence 10, 9, 8, 7, 6, ...
              goes the other way: each term is 1 smaller than the one before it.`}
            </p>
            <p>
              {`Sequences matter because many real processes repeat the same operation at each step.
              Saving the same amount each month builds one kind of sequence. Doubling a bacteria
              colony each hour builds a different kind. The rule is the key, not just the numbers.`}
            </p>
          </div>
        </>,

        // SECTION 1 Arithmetic Progressions
        <>
          <div id="lrn-section-1" className="lrn-section">
            <h2>Arithmetic Progressions</h2>
            <p className="lrn-when-to-use">
              <strong>When to use:</strong> When each step adds the same fixed amount. Examples
              include equal monthly savings, a taxi fare with a fixed rate per km, or evenly spaced
              rungs on a ladder.
            </p>
            <div className="lrn-predict">
              <span className="lrn-predict-label">PREDICT</span>
              <p>
                {`The sequence starts at 5 and each term drops by 7. What is the 4th term? What
                formula would give you any term directly?`}
              </p>
              <details className="lrn-predict-reveal">
                <summary>Check your thinking</summary>
                <p>
                  {`The 4th term is $5 + 3 \\times (-7) = 5 - 21 = -16$. The formula is
                  $a_n = a + (n-1)d$, where $a = 5$ and $d = -7$.`}
                </p>
              </details>
            </div>
            <p>
              {`An arithmetic progression (AP) is a sequence where each term equals the previous
              term plus a fixed number $d$, called the common difference. The difference $d$ can be
              positive, negative, or zero.`}
            </p>
            <p>
              {`The sequence 3, 6, 9, 12, ... is an AP with first term $a = 3$ and $d = 3$.
              The sequence 10, 7, 4, 1, ... is an AP with $a = 10$ and $d = -3$.`}
            </p>
            <h3>Finding Any Term Directly</h3>
            <p>
              {`You can build a term-by-term table to spot the pattern. The 1st term is $a$. The 2nd
              is $a + d$. The 3rd is $a + 2d$. The $n$-th term adds $(n-1)$ copies of $d$ to the
              first term.`}
            </p>
            <div className="lrn-eq lrn-eq-hero">{`$$a_n = a + (n-1)d$$`}</div>
            <div className="lrn-self-explain">
              <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
              <p>
                {`Why does the formula use $(n-1)d$ and not $nd$? Pause and think before reading on.`}
              </p>
              <details className="lrn-self-explain-reveal">
                <summary>Expert explanation</summary>
                <p>
                  {`The first term $a_1 = a$ adds $d$ zero times. The second term $a_2 = a + d$ adds
                  it once. The $n$-th term adds it $n-1$ times. Using $nd$ would overcount by one
                  step and give the wrong answer.`}
                </p>
              </details>
            </div>
            <h3>Worked Examples</h3>
            <div className="lrn-definition">
              <div className="lrn-definition-term">Find the third term of 5, −2, ...</div>
              <div className="lrn-definition-desc">
                <p>{`First term $a = 5$. Common difference $d = -2 - 5 = -7$.`}</p>
                <p>{`$a_3 = 5 + (3-1)(-7) = 5 - 14 = -9$.`}</p>
              </div>
            </div>
            <div className="lrn-definition">
              <div className="lrn-definition-term">{`Find the 1000th term of 2, 4, 6, 8, ...`}</div>
              <div className="lrn-definition-desc">
                <p>
                  {`Here $a = 2$ and $d = 2$. Applying the formula: $a_{1000} = 2 + (1000-1) \\times 2 = 2 + 1998 = 2000$.`}
                </p>
                <p>
                  {`This matches the pattern: the $n$-th even number is $2n$, so the thousandth even
                  number is 2000.`}
                </p>
              </div>
            </div>
            <viz.ArithmeticProgressionLine C={C} />
          </div>
        </>,

        // SECTION 2 Sum of an Arithmetic Progression
        <>
          <div id="lrn-section-2" className="lrn-section">
            <h2>The Sum of an Arithmetic Progression</h2>
            <p className="lrn-when-to-use">
              <strong>When to use:</strong> When you need the total of a block of evenly spaced
              numbers: total savings over months, total distance on a staircase, sum of odd numbers.
            </p>
            <div className="lrn-predict">
              <span className="lrn-predict-label">PREDICT</span>
              <p>
                {`What is $1 + 2 + 3 + \\ldots + 100$? Can you find a shortcut without adding all
                100 numbers?`}
              </p>
              <details className="lrn-predict-reveal">
                <summary>Check your thinking</summary>
                <p>
                  {`Pair the first and last: $1 + 100 = 101$. Pair the second and second-to-last:
                  $2 + 99 = 101$. There are 50 such pairs. The sum is $50 \\times 101 = 5050$.`}
                </p>
              </details>
            </div>
            <p>
              {`Adding up all $n$ terms of an AP gives $S_n$. The clever trick is to write the sum
              twice: once forward, once backward. Then add column by column.`}
            </p>
            <div className="lrn-faded">
              <div className="lrn-faded-phase">
                <span className="lrn-faded-label">COMPLETE EXAMPLE</span>
                <p>{`Find $S = 1 + 3 + 5 + \\ldots + 999$ (500 terms, $a = 1$, $d = 2$).`}</p>
                <ol className="lrn-list">
                  <li>{`Write $S$ forward: $1 + 3 + 5 + \\ldots + 999$.`}</li>
                  <li>{`Write $S$ backward: $999 + 997 + \\ldots + 3 + 1$.`}</li>
                  <li>{`Add columns: each pair sums to $1 + 999 = 1000$. There are 500 pairs.`}</li>
                  <li>{`$2S = 500 \\times 1000 = 500{,}000$, so $S = 250{,}000$.`}</li>
                </ol>
              </div>
              <div className="lrn-faded-phase lrn-faded-partial">
                <span className="lrn-faded-label">YOUR TURN: PARTIAL</span>
                <p>{`Find $S = 2 + 4 + 6 + \\ldots + 200$ (100 terms, $a = 2$, $d = 2$).`}</p>
                <ol className="lrn-list">
                  <li>{`Write $S$ forward and backward.`}</li>
                  <li>{`Each column pair sums to $2 + 200 = \\underline{\\quad}$.`}</li>
                  <li>
                    {`$2S = 100 \\times \\underline{\\quad} = \\underline{\\quad}$, so $S = \\underline{\\quad}$.`}
                  </li>
                </ol>
              </div>
              <div className="lrn-faded-phase">
                <span className="lrn-faded-label">INDEPENDENT PRACTICE</span>
                <p>
                  {`Find the sum of the first 40 terms of the AP 3, 7, 11, ... using only the
                  formula $S_n = \\frac{n(a + l)}{2}$ where $l$ is the last term.`}
                </p>
              </div>
            </div>
            <div className="lrn-eq lrn-eq-hero">
              {`$$S_n = \\frac{n(a + l)}{2} = \\frac{n[2a + (n-1)d]}{2}$$`}
            </div>
            <div className="lrn-definition">
              <div className="lrn-definition-term">{`Worked example: add the first 12 terms of 7, 10, 13, ...`}</div>
              <div className="lrn-definition-desc">
                <p>{`Here $a = 7$, common difference $d = 3$, and $n = 12$ terms.`}</p>
                <p>
                  {`First find the last term: $l = a + (n-1)d = 7 + 11 \\times 3 = 7 + 33 = 40$.`}
                </p>
                <p>
                  {`Now apply the sum formula: $S_{12} = \\frac{12(7 + 40)}{2} = \\frac{12 \\times 47}{2} = 6 \\times 47 = 282$.`}
                </p>
                <p>
                  {`The second form gives the same answer: $\\frac{12[2 \\times 7 + 11 \\times 3]}{2} = \\frac{12 \\times 47}{2} = 282$.`}
                </p>
              </div>
            </div>
            <div className="lrn-self-explain">
              <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
              <p>
                {`The two forms of the formula look different. Why are they equal? When would you
                prefer one over the other?`}
              </p>
              <details className="lrn-self-explain-reveal">
                <summary>Expert explanation</summary>
                <p>
                  {`They are equal because $l = a + (n-1)d$, so $a + l = 2a + (n-1)d$. Use
                  $\\frac{n(a+l)}{2}$ when you already know the last term. Use
                  $\\frac{n[2a+(n-1)d]}{2}$ when you only know the first term and common
                  difference.`}
                </p>
              </details>
            </div>
            <div className="lrn-elaborate">
              <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
              <p>
                {`Why does pairing the front and back work? Because each step forward through the AP
                equals each step backward. The $k$-th term from the start and the $k$-th term from
                the end always add up to $a + l$. Every pair gives the same total, so you can count
                pairs instead of terms.`}
              </p>
            </div>
            <div className="lrn-insight">
              {`The sum of the first $n$ odd numbers is exactly $n^2$. For example,
              $1+3+5+7+9 = 25 = 5^2$. This follows directly from the AP sum formula with $a=1$,
              $d=2$.`}
            </div>
            <viz.APSumGaussPairing C={C} />
            <viz.APForwardBackwardStack C={C} />
          </div>
        </>,

        // SECTION 3 Geometric Progressions
        <>
          <div id="lrn-section-3" className="lrn-section">
            <h2>Geometric Progressions</h2>
            <p className="lrn-when-to-use">
              <strong>When to use:</strong> When each step multiplies by the same fixed number.
              Examples include compound interest, population doubling, radioactive decay, and
              musical pitch ratios.
            </p>
            <div className="lrn-predict">
              <span className="lrn-predict-label">PREDICT</span>
              <p>
                {`The sequence 3, 6, 12, 24, ... What is the 6th term? Is the growth faster or
                slower than an AP starting at 3 with difference 3?`}
              </p>
              <details className="lrn-predict-reveal">
                <summary>Check your thinking</summary>
                <p>
                  {`The ratio is $r = 2$. The 6th term is $3 \\times 2^5 = 3 \\times 32 = 96$.
                  The AP with $d = 3$ gives $a_6 = 3 + 5 \\times 3 = 18$. The GP is much faster.`}
                </p>
              </details>
            </div>
            <p>
              {`A geometric progression (GP) is a sequence where each term equals the previous term
              multiplied by a fixed number $q$, called the common ratio. The ratio $q$ can be any
              real number except zero.`}
            </p>
            <p>
              {`The sequence 3, 6, 12, 24, ... is a GP with $a = 3$ and $q = 2$. The sequence
              6, 2, $\\frac{2}{3}$, $\\frac{2}{9}$, ... is a GP with $a = 6$ and $q = \\frac{1}{3}$.`}
            </p>
            <h3>Finding Any Term Directly</h3>
            <p>
              {`Build the same term table. The 1st term is $a = a \\cdot q^0$. The 2nd is
              $a \\cdot q^1$. The $n$-th term multiplies by $q$ exactly $n-1$ times. Two quick
              power facts: any number to the power 0 is 1, so $q^0 = 1$; any number to the power 1
              is itself, so $q^1 = q$. That is why the 1st term comes out as just $a$.`}
            </p>
            <div className="lrn-eq lrn-eq-hero">{`$$a_n = a \\cdot q^{n-1}$$`}</div>
            <div className="lrn-self-explain">
              <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
              <p>
                {`Why does the GP formula use $q^{n-1}$ while the AP formula uses $(n-1)d$?
                What is structurally the same about both formulas?`}
              </p>
              <details className="lrn-self-explain-reveal">
                <summary>Expert explanation</summary>
                <p>
                  {`Both formulas apply the same operation $n-1$ times starting from the first term.
                  In an AP, applying the operation means adding $d$: so you add $d$ repeatedly,
                  giving $(n-1)d$. In a GP, applying the operation means multiplying by $q$:
                  so you multiply repeatedly, giving $q^{n-1}$.`}
                </p>
              </details>
            </div>
            <h3>Worked Examples</h3>
            <div className="lrn-definition">
              <div className="lrn-definition-term">{`Find the third term of the GP 2, 3, ...`}</div>
              <div className="lrn-definition-desc">
                <p>
                  {`Common ratio $q = \\frac{3}{2}$. Third term: $a_3 = 2 \\cdot \\left(\\frac{3}{2}\\right)^2 = 2 \\cdot \\frac{9}{4} = \\frac{9}{2}$.`}
                </p>
              </div>
            </div>
            <div className="lrn-definition">
              <div className="lrn-definition-term">{`Find the 1000th term of 3, 6, 12, ...`}</div>
              <div className="lrn-definition-desc">
                <p>
                  {`Here $a = 3$, $q = 2$. Applying the formula: $a_{1000} = 3 \\cdot 2^{999}$.`}
                </p>
                <p>{`This is an extremely large number. GP growth far outpaces AP growth.`}</p>
              </div>
            </div>
            <div className="lrn-definition">
              <div className="lrn-definition-term">
                {`First term 1, third term 4. Find the second term.`}
              </div>
              <div className="lrn-definition-desc">
                <p>
                  {`Let the second term be $x$. In a GP, consecutive terms have the same ratio, so
                  $\\frac{x}{1} = \\frac{4}{x}$, giving $x^2 = 4$ (here $x^2$ means $x \\times x$).
                  So $x = 2$ or $x = -2$. Both are valid GPs: $1, 2, 4$ and $1, -2, 4$. The middle
                  term of three terms in a GP is their geometric mean.`}
                </p>
              </div>
            </div>
            <div className="lrn-callout">
              <p>
                {`Special case: a ratio of $q = 0$ gives the sequence $1, 0, 0, 0, ...$, which is
                technically a GP but most authors exclude it in practice.`}
              </p>
            </div>
            <viz.GeometricProgressionLine C={C} />
            <viz.APvsGPComparison C={C} />
          </div>
        </>,

        // SECTION 4 Sum of a Geometric Progression
        <>
          <div id="lrn-section-4" className="lrn-section">
            <h2>The Sum of a Geometric Progression</h2>
            <p className="lrn-when-to-use">
              <strong>When to use:</strong> When you need the total after repeated multiplication:
              total compound interest earned, total cells after divisions, sum of a shrinking
              series.
            </p>
            <div className="lrn-predict">
              <span className="lrn-predict-label">PREDICT</span>
              <p>
                {`What is $1 + 3 + 9 + 27 + 81 + 243$? Try to find a pattern without adding
                all 6 terms.`}
              </p>
              <details className="lrn-predict-reveal">
                <summary>Check your thinking</summary>
                <p>
                  {`Call the sum $S$. Multiply by the ratio 3: $3S = 3 + 9 + 27 + 81 + 243 + 729$.
                  Subtracting: $3S - S = 729 - 1 = 728$. So $2S = 728$ and $S = 364$.`}
                </p>
              </details>
            </div>
            <p>
              {`To find $S_n = a + aq + aq^2 + \\ldots + aq^{n-1}$, multiply both sides by $q$
              to get $qS_n = aq + aq^2 + \\ldots + aq^n$. Notice $qS_n$ is just $S_n$ shifted one
              step forward, so almost every term appears in both. Subtracting the first from the
              second cancels every middle term, leaving only the first and last.`}
            </p>
            <div className="lrn-faded">
              <div className="lrn-faded-phase">
                <span className="lrn-faded-label">COMPLETE EXAMPLE</span>
                <p>
                  {`Derive the sum formula for $S_n = 1 + 2 + 4 + \\ldots + 2^{n-1}$ ($a=1$, $q=2$).`}
                </p>
                <ol className="lrn-list">
                  <li>{`Write $S_n = 1 + 2 + 4 + \\ldots + 2^{n-1}$.`}</li>
                  <li>{`Multiply by $q=2$: $2S_n = 2 + 4 + \\ldots + 2^{n-1} + 2^n$.`}</li>
                  <li>{`Subtract: $2S_n - S_n = 2^n - 1$, so $S_n = 2^n - 1$.`}</li>
                  <li>{`Check: $S_3 = 1+2+4=7 = 2^3 - 1$. Correct.`}</li>
                </ol>
              </div>
              <div className="lrn-faded-phase lrn-faded-partial">
                <span className="lrn-faded-label">YOUR TURN: PARTIAL</span>
                <p>
                  {`Derive the general sum $S_n = a + aq + aq^2 + \\ldots + aq^{n-1}$ for $q \\neq 1$.`}
                </p>
                <ol className="lrn-list">
                  <li>{`Write $S_n$ and $qS_n$ aligned term by term.`}</li>
                  <li>{`Subtract to get $qS_n - S_n = \\underline{\\quad} - a$.`}</li>
                  <li>
                    {`Factor: $S_n(q-1) = \\underline{\\quad}$, so $S_n = \\underline{\\quad}$.`}
                  </li>
                </ol>
              </div>
              <div className="lrn-faded-phase">
                <span className="lrn-faded-label">INDEPENDENT PRACTICE</span>
                <p>
                  {`Use the formula to compute $1 + \\frac{1}{2} + \\frac{1}{4} + \\ldots +
                  \\frac{1}{1024}$ (11 terms, $a=1$, $q=\\frac{1}{2}$).`}
                </p>
              </div>
            </div>
            <div className="lrn-eq lrn-eq-hero">
              {`$$S_n = \\frac{a(q^n - 1)}{q - 1} \\quad (q \\neq 1)$$`}
            </div>
            <div className="lrn-definition">
              <div className="lrn-definition-term">{`Worked example: add $3 + 6 + 12 + 24$`}</div>
              <div className="lrn-definition-desc">
                <p>{`Here $a = 3$, ratio $q = 2$, and there are $n = 4$ terms.`}</p>
                <p>
                  {`Apply the formula: $S_4 = \\frac{3(2^4 - 1)}{2 - 1}$. Work out the power:
                  $2^4 = 16$, so $2^4 - 1 = 15$. Then $S_4 = \\frac{3 \\times 15}{1} = 45$.`}
                </p>
                <p>{`Check by adding directly: $3 + 6 + 12 + 24 = 45$. The formula matches.`}</p>
              </div>
            </div>
            <div className="lrn-callout">
              <p>
                {`Special case $q = 1$: all terms equal $a$, so $S_n = na$. The formula
                $\\frac{a(q^n-1)}{q-1}$ gives division by zero at $q=1$. Use $S_n = na$ directly
                whenever the ratio equals 1.`}
              </p>
            </div>
            <viz.GPSumDerivation C={C} />
          </div>
        </>,

        // SECTION 5 Mixed Problems
        <>
          <div id="lrn-section-5" className="lrn-section">
            <h2>Mixed Problems</h2>
            <p className="lrn-when-to-use">
              <strong>When to use:</strong> When a problem gives you partial information and asks
              you to identify or combine AP and GP structures.
            </p>
            <div className="lrn-predict">
              <span className="lrn-predict-label">PREDICT</span>
              <p>
                {`An AP has its 3rd term equal to 11 and its 7th term equal to 27. Find the common
                difference and the first term.`}
              </p>
              <details className="lrn-predict-reveal">
                <summary>Check your thinking</summary>
                <p>
                  {`From the 3rd term to the 7th term is 4 steps, and the value rises by
                  $27 - 11 = 16$. So $d = \\frac{16}{4} = 4$. The first term is
                  $a = 11 - 2 \\times 4 = 3$. Check: $3, 7, 11, 15, 19, 23, 27$ has 3rd term 11
                  and 7th term 27.`}
                </p>
              </details>
            </div>
            <p>
              {`Not every set of numbers fits a sequence type. Before applying a formula, ask two
              questions. First, is the difference between consecutive terms constant? If yes, it is
              an AP. Second, is the ratio of consecutive terms constant? If yes, it is a GP.`}
            </p>
            <div className="lrn-definition">
              <div className="lrn-definition-term">Bacteria doubling problem</div>
              <div className="lrn-definition-desc">
                <p>
                  {`One bacterium fills a vessel in 30 minutes, doubling every minute. How long do
                  two bacteria take? Two bacteria start as 2 rather than 1, so they need one fewer
                  doubling. The answer is 29 minutes.`}
                </p>
              </div>
            </div>
            <div className="lrn-definition">
              <div className="lrn-definition-term">Integers in APs vs GPs</div>
              <div className="lrn-definition-desc">
                <p>
                  {`If two adjacent AP terms are integers, every term is an integer (the difference
                  is an integer). A GP behaves differently: the GP $512, 256, 128, \\ldots$ halves
                  each step. The whole-number terms are $512, 256, 128, 64, 32, 16, 8, 4, 2, 1$,
                  which is 10 terms. After that come $\\frac{1}{2}, \\frac{1}{4}, \\ldots$, all
                  non-integers.`}
                </p>
              </div>
            </div>
            <viz.MixedSequenceIdentifier C={C} />
          </div>
        </>,

        // SECTION 6 The Well-Tempered Clavier
        <>
          <div id="lrn-section-6" className="lrn-section">
            <h2>The Well-Tempered Clavier</h2>
            <p className="lrn-when-to-use">
              <strong>When to use:</strong> To see a GP in the real world: the 12-tone
              equal-tempered musical scale used in virtually all modern instruments.
            </p>
            <div className="lrn-predict">
              <span className="lrn-predict-label">PREDICT</span>
              <p>
                {`A piano splits each octave into 12 equal steps called semitones. The top of an
                octave vibrates at exactly double the frequency of the bottom. If the 12 steps each
                multiply by the same fixed ratio, what must 12 of those steps together do to the
                frequency?`}
              </p>
              <details className="lrn-predict-reveal">
                <summary>Check your thinking</summary>
                <p>
                  {`Twelve equal steps must double the frequency, because a full octave doubles it.
                  So the ratio is the number you multiply by twelve times to land on double. That
                  number is about 1.0595.`}
                </p>
              </details>
            </div>
            <p>
              {`Before 1700, tuners set keyboard instruments so some keys sounded beautiful and
              others sounded harsh. Moving a melody to a different starting key changed the sound
              quality. Composers wanted any key to sound the same as any other.`}
            </p>
            <p>
              {`The requirement "the key you start in does not change the sound" forces the
              frequencies to form a GP. If every step must sound the same as every other step, the
              ratio between one frequency and the next must stay identical all the way up. A
              constant ratio at every step is exactly what a GP is.`}
            </p>
            <p>
              {`The octave is split into 12 equal steps, and a full octave doubles the frequency.
              So the common ratio is the number you multiply by twelve times to double a frequency.
              That number is about 1.0595. This is the well-tempered scale. Johann Sebastian Bach
              celebrated it with his Well-Tempered Clavier, showing that all 24 major and minor
              keys sound equally good.`}
            </p>
            <div className="lrn-insight">
              {`Equal temperament spreads a tiny error evenly across all 12 keys. It gives up
              perfectly pure frequency ratios in any single key so that every key sounds equally
              good. No key is favoured over another.`}
            </div>
            <VizFigure aspect="auto" title="Octave On A Piano Keyboard">
              <figure className="lrn-figure">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Pianoteclas.svg/640px-Pianoteclas.svg.png"
                  alt="Piano keyboard showing one octave of white and black keys"
                />
                <figcaption>
                  {`One octave on a piano keyboard. Twelve semitones separate the bottom A (440 Hz)
                from the top A (880 Hz). Each step multiplies the frequency by about 1.0595, and
                twelve steps double it. `}
                  <a
                    href="https://commons.wikimedia.org/wiki/File:Pianoteclas.svg"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Source
                  </a>
                </figcaption>
              </figure>
            </VizFigure>
            <viz.WellTemperedClavierFrequencies C={C} />
          </div>
        </>,

        // SECTION 7 Infinite Geometric Progression
        <>
          <div id="lrn-section-7" className="lrn-section">
            <h2>The Sum of an Infinite Geometric Progression</h2>
            <p className="lrn-when-to-use">
              <strong>When to use:</strong> When a GP has a ratio with absolute value less than 1,
              and you need the total of all infinitely many terms. Classic examples: Zeno's paradox,
              recurring decimals, total distance of a bouncing ball.
            </p>
            <div className="lrn-predict">
              <span className="lrn-predict-label">PREDICT</span>
              <p>
                {`What is $1 + \\frac{1}{10} + \\frac{1}{100} + \\frac{1}{1000} + \\ldots$?
                Does adding infinitely many positive numbers always give infinity?`}
              </p>
              <details className="lrn-predict-reveal">
                <summary>Check your thinking</summary>
                <p>
                  {`The sum equals $\\frac{1}{1 - \\frac{1}{10}} = \\frac{10}{9} \\approx 1.111$.
                  Adding infinitely many terms does not always give infinity: when the terms shrink
                  fast enough, the total stays finite.`}
                </p>
              </details>
            </div>
            <p>
              {`Zeno, an ancient Greek philosopher, imagined Achilles chasing a tortoise. Before
              he reaches the tortoise, he must cover half the gap. Then half the remaining gap.
              Then half again. He must complete infinitely many steps. Yet Achilles clearly does
              catch the tortoise.`}
            </p>
            <p>
              {`The resolution is that the infinite sum $1 + \\frac{1}{2} + \\frac{1}{4} + \\ldots$
              converges to a finite value. "Converges" means it settles toward a single value
              instead of growing without bound. When $|q| < 1$, each new term shrinks. The partial
              sums get closer and closer to a fixed value.`}
            </p>
            <p>
              {`Start with the finite sum formula $S_n = \\frac{a(1 - q^n)}{1 - q}$ (rewritten
              for $|q| < 1$). As $n$ grows, $q^n$ gets closer and closer to zero and never quite
              reaches it, giving:`}
            </p>
            <div className="lrn-eq lrn-eq-hero">
              {`$$S_{\\infty} = \\frac{a}{1 - q} \\quad (|q| < 1)$$`}
            </div>
            <div className="lrn-definition">
              <div className="lrn-definition-term">{`Zeno's paradox resolved`}</div>
              <div className="lrn-definition-desc">
                <p>
                  {`If the gap is 1 metre and Achilles covers half of it at each step, the total
                  distance is $\\frac{1}{2} + \\frac{1}{4} + \\frac{1}{8} + \\ldots$`}
                </p>
                <p>
                  {`With $a = \\frac{1}{2}$ and $q = \\frac{1}{2}$: $S_{\\infty} = \\frac{\\frac{1}{2}}{1 - \\frac{1}{2}} = 1$.
                  Achilles covers exactly 1 metre (the full gap).`}
                </p>
              </div>
            </div>
            <p>
              {`The key reason is that $q^n$ gets closer and closer to 0 when $|q| < 1$. Each term
              is a fraction of the one before. The more terms you add, the less each new one
              contributes. So the partial sums approach but never exceed a fixed value. When
              $|q| \\geq 1$ the opposite happens. The terms stay the same size or grow, the partial
              sums climb without bound, and no finite total exists.`}
            </p>
            <viz.InfiniteGPConvergence C={C} />
            <viz.ZenoStack C={C} />
          </div>
        </>
      ]
    },
    practice: [
      // AP fundamentals
      {
        q: `What is the common difference of the AP 7, 4, 1, −2, ...?`,
        a: `The common difference is $d = 4 - 7 = -3$. Each term is 3 less than the one before it. The sequence decreases by subtracting 3 at every step.`
      },
      // GP conceptual
      {
        q: `Why is GP growth eventually faster than AP growth, for any ratio $r > 1$ and any positive difference $d$?`,
        a: `In an AP, you add the same number at every step, so growth is linear. In a GP, you multiply by the same number at every step, so growth is exponential. Exponential functions always overtake linear functions for large $n$. The result holds no matter how large $d$ is or how close $r$ is to 1.`
      },
      // AP nth term
      {
        q: `Find the 20th term of the AP 3, 7, 11, 15, ...`,
        a: `First term $a = 3$, common difference $d = 4$. Applying $a_n = a + (n-1)d$: $a_{20} = 3 + 19 \\times 4 = 3 + 76 = 79$. The formula works because each of the 19 gaps from term 1 to term 20 adds 4.`
      },
      // Infinite GP
      {
        q: `What is $1 + \\frac{1}{3} + \\frac{1}{9} + \\frac{1}{27} + \\ldots$?`,
        a: `First term $a = 1$, ratio $q = \\frac{1}{3}$. Since $|q| < 1$, the sum converges: $S = \\frac{a}{1-q} = \\frac{1}{1 - \\frac{1}{3}} = \\frac{1}{\\frac{2}{3}} = \\frac{3}{2}$. Each term shrinks by a factor of 3, so the total stays finite.`
      },
      // GP nth term
      {
        q: `Find the 8th term of the GP 5, 10, 20, 40, ...`,
        a: `First term $a = 5$, ratio $q = 2$. Applying $a_n = a \\cdot q^{n-1}$: $a_8 = 5 \\cdot 2^7 = 5 \\cdot 128 = 640$. The exponent is $n-1 = 7$ because the first term multiplies by $q$ zero times.`
      },
      // AP sum : Gauss pairing
      {
        q: `Find the sum $1 + 3 + 5 + 7 + \\ldots + 999$ (500 terms).`,
        a: `Pair the first and last terms: $1 + 999 = 1000$. There are 250 such pairs. Total: $250 \\times 1000 = 250{,}000$. Alternatively, the sum of the first $n$ odd numbers equals $n^2$, so with $n = 500$ the sum is $500^2 = 250{,}000$.`
      },
      // Elaborate : why pairs work
      {
        q: `Why does the Gauss pairing trick give the correct sum even when $n$ is odd?`,
        a: `When $n$ is odd there is a middle term with no partner. The 2S trick avoids this problem. Write $S$ forward and backward, add every column: each column sums to $a + l$. There are $n$ columns, giving $2S = n(a+l)$, so $S = \\frac{n(a+l)}{2}$. This holds for any $n$, even or odd.`
      },
      // GP sum
      {
        q: `Compute $3 + 6 + 12 + 24 + 48 + 96$ (6 terms, $a = 3$, $q = 2$).`,
        a: `Apply $S_n = \\frac{a(q^n - 1)}{q-1}$: $S_6 = \\frac{3(2^6 - 1)}{2 - 1} = \\frac{3 \\times 63}{1} = 189$. The formula works by multiplying the sum and subtracting to cancel all middle terms.`
      },
      // Self-explain AP vs GP
      {
        q: `A sequence starts with 6, then each term is the previous term multiplied by the same number. The 3rd term is 54. What is the sequence?`,
        a: `Ratio $q$ satisfies $6 \\cdot q^2 = 54$, so $q^2 = 9$ and $q = 3$ (or $q = -3$). The sequence is $6, 18, 54, 162, \\ldots$ (or $6, -18, 54, -162, \\ldots$ if $q = -3$). Both ratios give a valid GP.`
      },
      // AP sum formula : compute directly
      {
        q: `Find the sum of the first 30 terms of the AP 4, 9, 14, 19, ...`,
        a: `$a = 4$, $d = 5$, $n = 30$. Last term: $l = 4 + 29 \\times 5 = 149$. Sum: $S_{30} = \\frac{30(4 + 149)}{2} = 15 \\times 153 = 2295$. The formula averages the first and last terms, then multiplies by the count.`
      },
      // Predict : which type
      {
        q: `A quantity is multiplied by the same fixed factor at every step, not increased by a fixed amount. Is the resulting sequence an AP or a GP, and what plays the role of the common ratio?`,
        a: `It is a GP. Multiplying by the same fixed factor at every step is exactly the GP rule, and that fixed factor is the common ratio $q$. An AP instead adds the same fixed amount each step, so its terms grow by a constant gap, not a constant multiple.`
      },
      // Error detection
      {
        q: `A student says: "The sum of the GP $2, 6, 18, 54$ is $\\frac{2(3^4-1)}{3-1} = \\frac{2 \\times 80}{2} = 80$." Verify the calculation.`,
        a: `The calculation is correct. Check directly: $2 + 6 + 18 + 54 = 80$. A common error is using $q^n$ with $n$ equal to the number of terms minus one. Here $n = 4$ (four terms) and $q = 3$, so $3^4 = 81$ and $81 - 1 = 80$. Correct.`
      },
      // Well-tempered clavier - basic recall
      {
        q: `In the equal-tempered scale, each semitone multiplies the frequency by the same fixed ratio $q \\approx 1.0595$. There are 12 semitones in one octave. By what factor does the frequency change across a full octave?`,
        a: `The frequencies form a GP, so 12 steps multiply by the ratio 12 times. That product is exactly 2: the ratio is chosen so that multiplying by it twelve times doubles the frequency. So a full octave doubles the frequency, which is why the top of an octave sounds like the bottom note an octave higher.`
      },
      // Well-tempered clavier - transfer
      {
        q: `A note at 440 Hz is the bottom of an octave on a piano. The frequencies of the 12 semitones up to the top of the octave form a GP. What is the frequency at the top of the octave?`,
        a: `Going up a full octave is 12 semitone steps, and the ratio is built so that multiplying by it twelve times doubles the frequency. So the top of the octave is $440 \\times 2 = 880$ Hz. You do not need the per-step ratio itself: the GP rule for a full octave is simply "double the frequency".`
      },
      // Transfer : infinite GP sum
      {
        q: `You drop a ball and on each bounce it rises to $\\frac{1}{4}$ of its previous height. The first rise is 8 metres. What is the total height of all the upward bounces added together?`,
        a: `The upward heights form an infinite GP with first term $a = 8$ and ratio $q = \\frac{1}{4}$. Since $|q| < 1$, apply $S_\\infty = \\frac{a}{1 - q} = \\frac{8}{1 - \\frac{1}{4}} = \\frac{8}{\\frac{3}{4}} = 8 \\times \\frac{4}{3} = \\frac{32}{3} \\approx 10.67$ metres. The heights shrink fast enough that the infinite total stays finite.`
      },
      // How many terms in AP
      {
        q: `The AP $1, 3, 5, \\ldots, 999$ has first term 1 and common difference 2. How many terms does it contain?`,
        a: `The $n$-th term is $a_n = 1 + (n-1) \\times 2 = 2n - 1$. Setting $2n - 1 = 999$: $n = 500$. The sequence has 500 terms. Dividing by the common difference and adjusting for the offset gives the count directly.`
      },
      // GP: bacteria doubling
      {
        q: `A bacterium divides every minute. Starting with 1 bacterium, how long until you have 1024?`,
        a: `The count doubles every minute: $1, 2, 4, 8, \\ldots$, a GP with $a = 1$ and $q = 2$. You need $2^n = 1024 = 2^{10}$, so $n = 10$ minutes. The formula $a_n = 1 \\cdot 2^{n-1}$ gives $a_{11} = 1024$. You reach 1024 at the start of minute 11. That means after 10 doublings.`
      },
      // Elaborate : infinite sum convergence
      {
        q: `Why does the infinite GP sum formula $\\frac{a}{1-q}$ only work when $|q| < 1$?`,
        a: `The derivation starts from the finite sum $S_n = \\frac{a(1-q^n)}{1-q}$ and takes the limit as $n$ grows without bound. The limit only exists when $q^n$ shrinks to zero. That requires $|q| < 1$. When $|q| \\geq 1$, the terms do not shrink. The partial sums grow without bound and no finite limit exists.`
      },
      // AP: non-adjacent terms - different example from S5 predict
      {
        q: `Can the numbers $\\frac{1}{6}$, $\\frac{1}{4}$, $\\frac{1}{3}$ all be terms of the same AP? Justify your answer.`,
        a: `Yes. Check: $\\frac{1}{4} - \\frac{1}{6} = \\frac{3}{12} - \\frac{2}{12} = \\frac{1}{12}$ and $\\frac{1}{3} - \\frac{1}{4} = \\frac{4}{12} - \\frac{3}{12} = \\frac{1}{12}$. The common difference is $d = \\frac{1}{12}$ and the three numbers are consecutive terms, so they belong to the same AP directly.`
      },
      // Self-explain GP second term
      {
        q: `The first term of a GP is 4 and the third term is 100. Find both possible second terms.`,
        a: `Let the second term be $x$. The ratio from term 1 to term 2 equals the ratio from term 2 to term 3: $\\frac{x}{4} = \\frac{100}{x}$, so $x^2 = 400$ and $x = 20$ or $x = -20$. Both give valid GPs with ratio $+5$ or $-5$.`
      },
      // Transfer : GP nth term
      {
        q: `Find the 7th term of the GP 2, 6, 18, 54, ...`,
        a: `First term $a = 2$, ratio $q = \\frac{6}{2} = 3$. Apply $a_n = a \\cdot q^{n-1}$: $a_7 = 2 \\cdot 3^{6}$. Compute the power step by step: $3^2 = 9$, $3^3 = 27$, $3^6 = 27 \\times 27 = 729$. So $a_7 = 2 \\times 729 = 1458$. The exponent is $n - 1 = 6$ because the first term multiplies by $q$ zero times.`
      },
      // AP sum : odd numbers square
      {
        q: `Use the AP sum formula to prove that $1 + 3 + 5 + \\ldots$ up to $n$ odd numbers equals $n^2$.`,
        a: `The $n$ odd numbers form an AP with $a = 1$, $d = 2$, last term $l = 2n - 1$. Sum: $S_n = \\frac{n(1 + 2n - 1)}{2} = \\frac{n \\cdot 2n}{2} = n^2$. Each new odd number extends the staircase by one row and one column, forming a perfect square.`
      },
      // GP special case q = 1
      {
        q: `Why does the GP sum formula $\\frac{a(q^n-1)}{q-1}$ break down when $q = 1$? What is the correct sum?`,
        a: `When $q = 1$, the denominator $q - 1 = 0$, causing division by zero. The formula is undefined. The correct sum is simply $na$: every term equals $a$, so $n$ terms sum to $na$. Use $S_n = na$ directly whenever the ratio equals 1.`
      },
      // GP sum transfer : savings plan
      {
        q: `A savings plan deposits 1000 dollars in month 1, then doubles the deposit each month. What is the total deposited after 8 months?`,
        a: `The deposits form a GP with $a = 1000$, $q = 2$, $n = 8$. Total: $S_8 = \\frac{1000(2^8 - 1)}{2 - 1} = 1000 \\times 255 = 255{,}000$ dollars. The last deposit alone equals $1000 \\times 2^7 = 128{,}000$ dollars, more than half the total. This shows how fast doubling grows.`
      },
      // Error detection : AP formula
      {
        q: `A student writes: "The 10th term of the AP 2, 5, 8, ... is $2 + 10 \\times 3 = 32$." Identify the error and give the correct answer.`,
        a: `The error is using $n \\times d$ instead of $(n-1) \\times d$. The correct formula is $a_{10} = 2 + (10-1) \\times 3 = 2 + 27 = 29$. The first term uses zero copies of the common difference; the $n$-th term uses $n-1$ copies.`
      },
      // AP: find n given sum
      {
        q: `The AP 2, 5, 8, 11, ... has first term 2 and common difference 3. How many terms give a sum of 155?`,
        a: `Apply $S_n = \\frac{n[2a + (n-1)d]}{2}$ with $a = 2$, $d = 3$: $S_n = \\frac{n[4 + (n-1) \\times 3]}{2}$. Build up the totals: $S_8 = \\frac{8 \\times 25}{2} = 100$, $S_9 = \\frac{9 \\times 28}{2} = 126$, $S_{10} = \\frac{10 \\times 31}{2} = 155$. So 10 terms give a sum of 155. Confirm the last bracket: $4 + 9 \\times 3 = 31$, and $\\frac{10 \\times 31}{2} = 155$.`
      },
      // Transfer : recurring decimal
      {
        q: `Express the recurring decimal $0.\\overline{12} = 0.121212\\ldots$ as a fraction using the infinite GP formula.`,
        a: `Write it as $\\frac{12}{100} + \\frac{12}{10000} + \\ldots$, a GP with $a = \\frac{12}{100}$ and $q = \\frac{1}{100}$. Sum: $\\frac{\\frac{12}{100}}{1 - \\frac{1}{100}} = \\frac{\\frac{12}{100}}{\\frac{99}{100}} = \\frac{12}{99} = \\frac{4}{33}$. Every recurring decimal converts to a rational fraction this way.`
      },
      // Mixed : identify
      {
        q: `The sequence is 5, 5, 5, 5, ... Is this an AP, a GP, both, or neither?`,
        a: `It is both an AP (common difference $d = 0$) and a GP (common ratio $q = 1$). The formula $a_n = 5$ satisfies both $a + (n-1) \\times 0 = 5$ and $5 \\times 1^{n-1} = 5$.`
      },
      // Mixed identify elaborate : give an example of each
      {
        q: `Give a sequence that is an AP but not a GP. Give one that is a GP but not an AP. Give one that is both.`,
        a: `AP but not GP: $1, 3, 5, 7, \\ldots$ (adds 2 each step; ratios $3, \\frac{5}{3}, \\frac{7}{5}, \\ldots$ are not constant). GP but not AP: $1, 2, 4, 8, \\ldots$ (multiplies by 2 each step; differences $1, 2, 4, \\ldots$ are not constant). Both: $3, 3, 3, 3, \\ldots$ (common difference 0, common ratio 1).`
      },
      // Elaborate : musical scale
      {
        q: `Why does making a musical scale playable in any key force the frequencies to form a GP?`,
        a: `Playing a tune in a different key is the same as multiplying every frequency by a fixed constant $q$. For the scale to sound the same after this shift, every note must map to another note in the scale. This is only possible if consecutive frequencies have a constant ratio, which is the definition of a GP.`
      },
      // GP : geometric mean derivation
      {
        q: `A GP has first term $a$ and third term $b$ where $a > 0$ and $b > 0$. Express the second term in terms of $a$ and $b$.`,
        a: `Let the ratio be $q$. Then $a \\cdot q^2 = b$, so $q = \\sqrt{\\frac{b}{a}}$. The second term is $a \\cdot q = a \\cdot \\sqrt{\\frac{b}{a}} = \\sqrt{ab}$. The geometric mean of $a$ and $b$ is always the middle term of a three-term GP.`
      },
      // Self-explain : partial sums
      {
        q: `The partial sums of $1 + \\frac{1}{2} + \\frac{1}{4} + \\ldots$ are $1, 1.5, 1.75, 1.875, \\ldots$ What pattern do you notice? What does it tell you about convergence?`,
        a: `Each partial sum is closer to 2 than the previous one, but never reaches 2. The gap halves each time: $2-1=1$, $2-1.5=0.5$, $2-1.75=0.25$, and so on. This shows convergence: the sequence of partial sums approaches 2. The infinite sum equals $\\frac{1}{1 - \\frac{1}{2}} = 2$.`
      },
      // Infinite GP error detection
      {
        q: `A student applies the infinite GP formula to $1 + 2 + 4 + 8 + \\ldots$ and gets $S = \\frac{1}{1 - 2} = -1$. What is wrong?`,
        a: `The formula $S = \\frac{a}{1-q}$ only works when $|q| < 1$. Here $q = 2$, so $|q| = 2 > 1$. The terms grow rather than shrink. The partial sums grow without bound. The series has no finite sum. A negative answer is a clear sign the condition $|q| < 1$ was not checked.`
      }
    ],
    reference: {
      category: 'Quick Reference',
      title: 'Arithmetic and Geometric Sequences',
      sections: [
        <>
          <div className="lrn-section">
            <h2>Key Formulas</h2>

            <div className="lrn-definition">
              <div className="lrn-definition-term">{`AP: $n$-th term`}</div>
              <div className="lrn-definition-desc">
                <p className="lrn-eq">{`$$a_n = a + (n-1)d$$`}</p>
                <p>
                  {`When to use: find any term of an arithmetic sequence directly, given the first
                  term $a$ and common difference $d$.`}
                </p>
              </div>
            </div>

            <div className="lrn-definition">
              <div className="lrn-definition-term">{`AP: sum of $n$ terms`}</div>
              <div className="lrn-definition-desc">
                <p className="lrn-eq">{`$$S_n = \\frac{n(a + l)}{2} = \\frac{n[2a + (n-1)d]}{2}$$`}</p>
                <p>
                  {`When to use: find the total of a block of evenly spaced numbers. Use the first
                  form when you know the last term $l$; use the second when you only know $a$ and $d$.`}
                </p>
              </div>
            </div>

            <div className="lrn-definition">
              <div className="lrn-definition-term">{`GP: $n$-th term`}</div>
              <div className="lrn-definition-desc">
                <p className="lrn-eq">{`$$a_n = a \\cdot q^{n-1}$$`}</p>
                <p>
                  {`When to use: find any term of a geometric sequence directly, given the first
                  term $a$ and common ratio $q$.`}
                </p>
              </div>
            </div>

            <div className="lrn-definition">
              <div className="lrn-definition-term">{`GP: sum of $n$ terms`}</div>
              <div className="lrn-definition-desc">
                <p className="lrn-eq">{`$$S_n = \\frac{a(q^n - 1)}{q - 1} \\quad (q \\neq 1)$$`}</p>
                <p>
                  {`When to use: find the total of a finite geometric sequence. When $q = 1$, use
                  $S_n = na$ instead.`}
                </p>
              </div>
            </div>

            <div className="lrn-definition">
              <div className="lrn-definition-term">Infinite GP sum</div>
              <div className="lrn-definition-desc">
                <p className="lrn-eq">{`$$S_{\\infty} = \\frac{a}{1 - q} \\quad (|q| < 1)$$`}</p>
                <p>
                  {`When to use: find the total of an infinite geometric series. Only valid when
                  $|q| < 1$ (the terms shrink toward zero). If $|q| \\geq 1$, the sum grows
                  without bound.`}
                </p>
              </div>
            </div>

            <div className="lrn-definition">
              <div className="lrn-definition-term">Well-tempered scale ratio</div>
              <div className="lrn-definition-desc">
                <p className="lrn-eq">{`$$q \\approx 1.0595$$`}</p>
                <p>
                  {`Ratio between adjacent semitones in a 12-tone equal-tempered scale. It is the
                  number you multiply by twelve times to double a frequency: 12 semitone steps make
                  one octave, and an octave doubles the frequency.`}
                </p>
              </div>
            </div>

            <div className="lrn-definition">
              <div className="lrn-definition-term">Geometric mean of two terms</div>
              <div className="lrn-definition-desc">
                <p className="lrn-eq">{`$$\\text{middle term} = \\sqrt{ab}$$`}</p>
                <p>
                  {`If $a$ and $b$ are the first and third terms of a three-term GP with $a > 0$
                  and $b > 0$, the middle term is $\\sqrt{ab}$ (or $-\\sqrt{ab}$ if the ratio is
                  negative).`}
                </p>
              </div>
            </div>

            <h2>AP vs GP Comparison</h2>
            <table className="lrn-compare">
              <thead>
                <tr>
                  <th>Property</th>
                  <th>Arithmetic Progression</th>
                  <th>Geometric Progression</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Definition</td>
                  <td>Add $d$ at each step</td>
                  <td>Multiply by $q$ at each step</td>
                </tr>
                <tr>
                  <td>$n$-th term</td>
                  <td>{`$a + (n-1)d$`}</td>
                  <td>{`$a \\cdot q^{n-1}$`}</td>
                </tr>
                <tr>
                  <td>Sum of $n$ terms</td>
                  <td>{`$\\frac{n[2a+(n-1)d]}{2}$`}</td>
                  <td>{`$\\frac{a(q^n-1)}{q-1}$`}</td>
                </tr>
                <tr>
                  <td>Growth type</td>
                  <td>Linear</td>
                  <td>Exponential</td>
                </tr>
                <tr>
                  <td>Infinite sum</td>
                  <td>Grows without bound (unless $d=0$)</td>
                  <td>Converges when $|q|&lt;1$</td>
                </tr>
              </tbody>
            </table>

            <h2>Common Pitfalls</h2>
            <ul className="lrn-list">
              <li>
                {`Using $nd$ instead of $(n-1)d$ in the AP term formula. The first term adds $d$
                zero times.`}
              </li>
              <li>
                {`Forgetting the special case $q = 1$ in the GP sum formula. Always check before
                applying $\\frac{a(q^n-1)}{q-1}$.`}
              </li>
              <li>
                {`Applying the infinite GP formula when $|q| \\geq 1$. The sum only converges
                when the ratio is strictly between $-1$ and $1$.`}
              </li>
              <li>
                {`Assuming non-adjacent terms cannot belong to the same AP or GP. They can: terms
                need not be consecutive in the sequence.`}
              </li>
              <li>
                {`Treating percentage growth as arithmetic. A 10% rise each year is geometric
                (ratio $q = 1.1$), not arithmetic.`}
              </li>
            </ul>
          </div>
        </>
      ]
    },
    customCss:
      '.MafsView { --mafs-bg: transparent; --mafs-fg: var(--text-primary); --mafs-line-color: var(--border-subtle); }'
  }
  return config
}

export default function ArithmeticAndGeometricSequences() {
  const config = useConfig()
  return <LearningTemplate config={config} />
}
