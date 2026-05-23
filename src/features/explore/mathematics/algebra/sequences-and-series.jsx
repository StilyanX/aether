import { Fragment } from 'react'
import { LearningTemplate } from '../../../../components/learning/learning-template'
import {
  ArithmeticNumberLineViz,
  FibonacciStaircaseViz,
  GaussPairingViz,
  OddSquaresViz,
  PartialSumsViz,
  PianoViz,
  SequenceVsSeriesViz,
  StaircaseViz,
  TelescopingViz
} from '../../../../components/viz'

function useConfig() {
  const config = {
    cssPrefix: 'seq',
    documentTitle: 'Sequences and Series - AETHER',
    learning: {
      groupTitle: 'Advanced Topics',
      category: 'Module 14',
      title: 'Sequences and Series',
      subtitle:
        'Patterns, sums, and infinite series from arithmetic progressions to geometric convergence.',
      sections: [
        <>
          <h2>What Are Sequences and Series?</h2>

          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              You encounter a list of numbers like 2, 5, 8, 11. Can you predict what comes next?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                Each number is 3 more than the previous one. The next term is 14. You add the same
                fixed amount each time that fixed amount is the common difference.
              </p>
            </details>
          </div>

          <p>
            A <strong>sequence</strong> is an ordered list of numbers. Order matters. Each number in
            the list is called a <strong>term</strong>. A sequence can be finite (it stops) or
            infinite (it never stops).
          </p>

          <p>
            A <strong>series</strong> is what you get when you add up the terms of a sequence. The
            sequence 1, 2, 3 gives the series 1 + 2 + 3 = 6.
          </p>

          <p>
            The word "series" is both singular and plural. You say "one series" and "two series"
            never "serieses."
          </p>

          <div className="lrn-graph">
            <SequenceVsSeriesViz />
          </div>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>What is the difference between a sequence and a series?</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                The same four numbers can be either. As a sequence: 1, 2, 3, 4 just a list. As a
                series: 1 + 2 + 3 + 4 = 10 a total. A series has a sum. A sequence does not.
              </p>
            </details>
          </div>
        </>,

        <>
          <h2>Arithmetic Sequences</h2>

          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>{`The sequence −9, −5, −1, 3, 7 what pattern do you notice between each pair of consecutive terms?`}</p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>Each term is 4 more than the one before it. The common difference is 4.</p>
            </details>
          </div>

          <p>
            An <strong>arithmetic sequence</strong> is a sequence where you add the same number to
            get from one term to the next. That fixed number is called the{' '}
            <strong>common difference</strong>, written {`$d$`}. The name "arithmetic" comes from
            the operation of addition.
          </p>

          <p>{`In the sequence −9, −5, −1, 3, 7, you add 4 each time. So $d = 4$.`}</p>

          <h3>Finding Any Term</h3>

          <p>{`Start at the first term $a$. To reach the $n$th term, you take $n - 1$ steps of size $d$:`}</p>

          <div className="lrn-eq lrn-eq-hero">
            <span>{`$$a_n = a + (n-1)d$$`}</span>
          </div>

          <div className="lrn-graph">
            <ArithmeticNumberLineViz />
          </div>

          <p>
            <strong>{`Example: The sequence −9, −5, −1, 3, 7 ...`}</strong>
          </p>

          <p>{`Here $a = -9$ and $d = 4$.`}</p>

          <ul className="lrn-list">
            <li>{`6th term: $a_6 = -9 + (6-1)(4) = -9 + 20 = 11$`}</li>
            <li>{`7th term: $a_7 = -9 + (7-1)(4) = -9 + 24 = 15$`}</li>
            <li>{`8th term: $a_8 = -9 + (8-1)(4) = -9 + 28 = 19$`}</li>
            <li>{`$n$th term: $a_n = -9 + (n-1)(4) = 4n - 13$`}</li>
          </ul>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>{`Why do you use $n - 1$ and not $n$ in the formula?`}</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>{`You start AT $a_1$ and take steps from there. To reach the 1st term you take zero steps, not one. So the $n$th term requires exactly $n - 1$ steps.`}</p>
            </details>
          </div>

          <p>
            <strong>Example: The sequence 1, 4, 7, 10, 13 ...</strong>
          </p>

          <p>{`Here $a = 1$ and $d = 3$.`}</p>

          <ul className="lrn-list">
            <li>{`15th term: $a_{15} = 1 + (15-1)(3) = 1 + 42 = 43$`}</li>
            <li>{`General formula: $a_n = 1 + (n-1)(3) = 3n - 2$`}</li>
          </ul>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>{`How do you check the formula $a_n = 3n - 2$?`}</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>{`Plug in $n = 1$: $3(1) - 2 = 1$. Plug in $n = 2$: $3(2) - 2 = 4$. Both match the original sequence, so the formula is correct.`}</p>
            </details>
          </div>

          <p>
            <strong>Example: Even numbers 2, 4, 6, 8, ... find the 1000th term.</strong>
          </p>

          <p>{`$a = 2$, $d = 2$. So $a_{1000} = 2 + (1000-1)(2) = 2 + 1998 = 2000$.`}</p>

          <p>
            <strong>Example: Odd numbers 1, 3, 5, 7, ... find the 1000th term.</strong>
          </p>

          <p>{`$a = 1$, $d = 2$. So $a_{1000} = 1 + (1000-1)(2) = 1 + 1998 = 1999$.`}</p>

          <h3>The Middle Term Property</h3>

          <p>
            In an arithmetic sequence, the middle term of any three equally spaced terms equals the
            average of its two neighbors.
          </p>

          <p>{`If $a_{k-j}$ and $a_{k+j}$ are two terms symmetric around $a_k$, then:`}</p>

          <div className="lrn-eq">
            <span>{`$$a_k = \\frac{a_{k-j} + a_{k+j}}{2}$$`}</span>
          </div>

          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>{`Stepping $j$ places left subtracts $jd$. Stepping $j$ places right adds $jd$. When you average the left and right neighbors, those two offsets cancel and only $a_k$ is left.`}</p>
          </div>

          <h3>Finding Missing Terms (Two Methods)</h3>

          <p>{`Example: Arithmetic sequence 4, $x_1$, $x_2$, $x_3$, $x_4$, 18 find $x_3$.`}</p>

          <p>The sequence has 6 terms: first term 4, last term 18.</p>

          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Method 1: Formula</span>
              <p>{`The common difference $d$ satisfies $a + 5d = 18$, so $4 + 5d = 18$, giving $d = \\frac{14}{5}$.`}</p>
              <p>{`$x_3 = a_4 = 4 + 3 \\cdot \\frac{14}{5} = 4 + \\frac{42}{5} = \\frac{62}{5}$`}</p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Method 2: Step Counting</span>
              <p>{`There are 5 gaps between 6 terms. Total change: $18 - 4 = 14$. Each step: $\\frac{14}{5}$.`}</p>
              <p>{`The 4th term is 3 steps from 4: $4 + 3 \\cdot \\frac{14}{5} = \\frac{62}{5}$.`}</p>
            </div>
          </div>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>Why do you count 5 gaps between 6 terms, not 6?</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                Between 6 terms there are only 5 gaps. Missing this gives the wrong common
                difference. Think of a fence: 6 posts create 5 panels between them.
              </p>
            </details>
          </div>

          <h3>Solving Systems with Arithmetic Sequences</h3>

          <p>
            Example: The sum of the 2nd and 9th terms is −4. The sum of the 3rd and 4th terms is 4.
            Find the first term.
          </p>

          <p>{`Write terms in terms of $a$ and $d$:`}</p>

          <ul className="lrn-list">
            <li>{`$a_2 + a_9 = (a + d) + (a + 8d) = 2a + 9d = -4$`}</li>
            <li>{`$a_3 + a_4 = (a + 2d) + (a + 3d) = 2a + 5d = 4$`}</li>
          </ul>

          <p>{`Subtract the second from the first: $4d = -8$, so $d = -2$.`}</p>

          <p>{`Plug back: $2a + 5(-2) = 4$, so $2a = 14$, giving $a = 7$.`}</p>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>{`Why write each term as $a + (n-1)d$ before setting up the system?`}</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>{`Without that substitution, you have two unknowns ($a$ and $d$) and no clear path to solve for either. Expanding each term into $a$ and $d$ converts the problem into a standard linear system you can solve by elimination.`}</p>
            </details>
          </div>

          <h3>Finding the Common Difference</h3>

          <p>{`Example: Can $\\frac{1}{2}$, $\\frac{1}{3}$, and $\\frac{1}{5}$ all belong to the same arithmetic sequence?`}</p>

          <p>{`The gap from $\\frac{1}{2}$ to $\\frac{1}{3}$ is $\\frac{1}{3} - \\frac{1}{2} = -\\frac{1}{6}$. The gap from $\\frac{1}{3}$ to $\\frac{1}{5}$ is $\\frac{1}{5} - \\frac{1}{3} = -\\frac{2}{15}$. These are not equal, so these fractions are not consecutive terms.`}</p>

          <p>
            But they can still belong to the same AP if they appear at non-consecutive positions.
            Write all three with denominator 30:
          </p>

          <div className="lrn-eq">
            <span>{`$$\\frac{1}{2} = \\frac{15}{30}, \\quad \\frac{1}{3} = \\frac{10}{30}, \\quad \\frac{1}{5} = \\frac{6}{30}$$`}</span>
          </div>

          <p>{`All three are multiples of $\\frac{1}{30}$. So an AP with common difference $d = \\frac{1}{30}$ contains all three.`}</p>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>Why do terms of an AP not have to be consecutive?</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>{`An AP with common difference $d$ contains every term of the form $a + kd$. Any three numbers that are all multiples of the same value $d$ can belong to a single AP, at positions separated by any integer gaps.`}</p>
            </details>
          </div>
        </>,

        <>
          <h2>Arithmetic Series</h2>

          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              You want to add 1 + 2 + 3 + ... + 100. What shortcut might exist instead of adding all
              100 numbers?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                Pair the first and last terms: 1 + 100 = 101. Pair the second and second-to-last: 2
                + 99 = 101. Every pair sums to 101. There are 50 pairs. So the total is 50 × 101 =
                5050.
              </p>
            </details>
          </div>

          <p>
            An <strong>arithmetic series</strong> is the sum of the terms of an arithmetic sequence.
          </p>

          <h3>Gauss's Pairing Method</h3>

          <div className="lrn-graph">
            <GaussPairingViz />
          </div>

          <p>
            Each pair sums to (first + last). There are {`$n$`} such pairs in {`$2S$`}. So{' '}
            {`$S = n \\cdot \\frac{(\\text{first} + \\text{last})}{2}$`}.
          </p>

          <p>
            <strong>{`The trick works for any AP, even short ones.`}</strong>{' '}
            {`Take $3 + 5 + 7 + 9 + 11$. Write the sum, then write it backwards underneath:`}
          </p>

          <div className="lrn-eq">
            <span>{`$$\\begin{aligned} S &= 3 + 5 + 7 + 9 + 11 \\\\ S &= 11 + 9 + 7 + 5 + 3 \\end{aligned}$$`}</span>
          </div>

          <p>
            {`Add the two rows column by column. Every column sums to $14$, and there are $5$ columns:`}
          </p>

          <p>{`$2S = 5 \\times 14 = 70$, so $S = 35$.`}</p>

          <h3>The General Formula</h3>

          <p>{`Apply the same trick to any arithmetic series with first term $a$, common difference $d$, and $n$ terms:`}</p>

          <div className="lrn-eq">
            <span>{`$$2S = n[2a + (n-1)d]$$`}</span>
          </div>

          <div className="lrn-eq lrn-eq-hero">
            <span>{`$$S = \\frac{n[2a + (n-1)d]}{2}$$`}</span>
          </div>

          <p>{`Since the last term is $a_n = a + (n-1)d$, you can also write:`}</p>

          <div className="lrn-eq">
            <span>{`$$S = n \\cdot \\frac{a + a_n}{2} = (\\text{number of terms}) \\times (\\text{average of first and last})$$`}</span>
          </div>

          <h3>Evaluating Arithmetic Series</h3>

          <p>
            <strong>{`Example (a): Compute $-3 - 1 + 1 + 3 + 5 + 7 + 9 + 11 + 13 + 15$.`}</strong>
          </p>

          <p>{`First term: $-3$. Last term: $15$. Common difference: $2$.`}</p>

          <p>{`Count terms: $\\frac{15 - (-3)}{2} + 1 = \\frac{18}{2} + 1 = 10$.`}</p>

          <p>{`$S = 10 \\times \\frac{(-3 + 15)}{2} = 10 \\times 6 = 60$`}</p>

          <p>
            <strong>{`Example (b): Compute $73 + 67 + 61 + \\cdots + 7$.`}</strong>
          </p>

          <p>{`First term: $73$. Last term: $7$. Common difference: $-6$.`}</p>

          <p>{`Count terms: $\\frac{(7 - 73)}{(-6)} + 1 = 12$.`}</p>

          <p>{`$S = 12 \\times \\frac{(73 + 7)}{2} = 12 \\times 40 = 480$`}</p>

          <p>
            <strong>{`Example (c): Compute $\\frac{7}{6} + \\frac{4}{3} + \\frac{3}{2} + \\cdots + 11$.`}</strong>
          </p>

          <p>{`Common difference: $\\frac{4}{3} - \\frac{7}{6} = \\frac{1}{6}$.`}</p>

          <p>{`Count terms: $\\frac{(11 - \\frac{7}{6})}{(\\frac{1}{6})} + 1 = 59 + 1 = 60$.`}</p>

          <p>{`$S = 60 \\times \\frac{(\\frac{7}{6} + 11)}{2} = 60 \\times \\frac{73}{12} = 365$`}</p>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>What is the most common error when counting terms in an arithmetic series?</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>{`Forgetting to add 1. The count formula is $\\frac{(a_n - a)}{d} + 1$. Missing the $+1$ gives one fewer term than you actually have, which ruins the entire sum.`}</p>
            </details>
          </div>

          <h3>Visual Proof: Two Staircases</h3>

          <div className="lrn-graph">
            <StaircaseViz />
          </div>

          <p>{`Picture each term as a column of blocks. The forward sum builds a staircase growing left to right. Flip a copy and place it on top. Together they form a rectangle with width $n$ and height $(a + a_n)$. Half that area is the sum: $S = \\frac{n(a + a_n)}{2}$.`}</p>
        </>,

        <>
          <h2>Special Arithmetic Results</h2>

          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>Can you find a pattern in the sums 1, 1+3, 1+3+5, 1+3+5+7? What do you notice?</p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                The sums are 1, 4, 9, 16 perfect squares. The sum of the first {`$n$`} odd integers
                is always {`$n^2$`}.
              </p>
            </details>
          </div>

          <p>
            Two sums come up so often that they are worth memorising as named results: the sum of
            the first {`$n$`} positive integers and the sum of the first {`$n$`} positive odd
            integers.
          </p>

          <h3>Sum of First n Positive Integers</h3>

          <p>{`Apply the Gauss pairing formula with $a = 1$ and $d = 1$. The last term is $n$, the count is $n$, so $2S = n(1 + n)$ and:`}</p>

          <div className="lrn-eq lrn-eq-hero">
            <span>{`$$S = \\frac{n(n+1)}{2}$$`}</span>
          </div>

          <h3>Sum of First n Positive Odd Integers</h3>

          <p>{`The first $n$ odd integers are $1, 3, 5, \\ldots, 2n-1$. Apply the AP formula:`}</p>

          <div className="lrn-eq lrn-eq-hero">
            <span>{`$$S = n \\cdot \\frac{1 + (2n-1)}{2} = n^2$$`}</span>
          </div>

          <div className="lrn-graph">
            <OddSquaresViz />
          </div>

          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>{`Lay $n$ dots in a row: $1, 3, 5, \\ldots, 2n-1$. Lay a copy of the row in reverse beneath it: $2n-1, 2n-3, \\ldots, 1$. Every column sums to $2n$, so $2S = n \\cdot 2n$ and $S = n^2$.`}</p>
          </div>

          <p>
            <strong>{`Example: Compute $1 + 3 + 5 + 7 + \\cdots + 999$.`}</strong>
          </p>

          <p>{`The last term is 999. Since $2n - 1 = 999$, we get $n = 500$.`}</p>

          <p>{`$S = 500^2 = 250000$`}</p>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>Why 250 pairs and not 500 when using the pairing method?</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                There are 500 terms total, and pairing uses both ends simultaneously consuming two
                terms per pair. So 500 terms yield exactly 250 pairs.
              </p>
            </details>
          </div>

          <h3>Sum via the Middle Term</h3>

          <p>
            For an arithmetic series with an odd number of terms, the sum equals {`$n$`} times the
            middle term. Pair each term with its mirror around the centre: the {`$+d$`} and {`$-d$`}{' '}
            offsets cancel, leaving one copy of the middle term for each of the {`$n$`} slots.
          </p>

          <p>
            <strong>Example: A 9-term arithmetic series sums to 72. Find the 5th term.</strong>
          </p>

          <p>{`With $n = 9$, the middle term is $a_5$.`}</p>

          <p>{`$S = 9 \\times a_5 = 72$, so $a_5 = 8$.`}</p>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>Why is the middle-term method so efficient?</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                You never need to know the first term, last term, or common difference. You only
                need the sum and the count of terms. The {`$\\pm d$`} offsets cancel in symmetric
                pairs around the middle.
              </p>
            </details>
          </div>

          <p>
            <strong>{`Example: $a_4 + a_7 + a_{10} = 17$ and $a_4 + a_5 + \\cdots + a_{14} = 77$. Find $k$ where $a_k = 13$.`}</strong>
          </p>

          <p>{`For the first equation: $a_4, a_7, a_{10}$ are symmetric around $a_7$, so $3a_7 = 17$, giving $a_7 = \\frac{17}{3}$.`}</p>

          <p>{`For the second equation: the terms $a_4$ through $a_{14}$ are 11 terms with middle term $a_9$. So $11 \\times a_9 = 77$, giving $a_9 = 7$.`}</p>

          <p>{`From $a_7 = a + 6d = \\frac{17}{3}$ and $a_9 = a + 8d = 7$, subtract: $2d = \\frac{4}{3}$, so $d = \\frac{2}{3}$.`}</p>

          <p>{`Then $a = 7 - 8 \\cdot \\frac{2}{3} = \\frac{5}{3}$.`}</p>

          <p>{`Find $k$ where $a_k = 13$: $\\frac{5}{3} + (k-1)\\frac{2}{3} = 13$, so $k - 1 = 17$, giving $k = 18$.`}</p>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>What is the key move that makes this problem tractable?</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>{`Recognizing that any symmetric subset of an AP also has a middle-term property. Apply it twice to extract $a_7$ and $a_9$ independently, then set up a small system of two equations in $a$ and $d$.`}</p>
            </details>
          </div>
        </>,

        <>
          <h2>Geometric Sequences</h2>

          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>The sequence 1.25, 2.5, 5, 10, 20 what operation connects consecutive terms?</p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                Each term is double the previous one. You multiply by 2 each time. The common ratio
                is {`$r = 2$`}.
              </p>
            </details>
          </div>

          <p>
            A <strong>geometric sequence</strong> is a sequence where you multiply by the same
            number to get from one term to the next. That fixed multiplier is called the{' '}
            <strong>common ratio</strong>, written {`$r$`}.
          </p>

          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Arithmetic Sequence</span>
              <p>Adds a fixed {`$d$`} to each term. Grows linearly.</p>
              <p>Example: 2, 5, 8, 11, 14 ({`$d = 3$`})</p>
              <p>
                If a term is smaller than the first, every later term is smaller than the first too
                the order is locked in by the sign of {`$d$`}.
              </p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Geometric Sequence</span>
              <p>Multiplies each term by a fixed {`$r$`}. Grows exponentially.</p>
              <p>Example: 1, 2, 4, 8, 16 ({`$r = 2$`})</p>
              <p>
                A GP with negative ratio jumps above and below the first term: 1, −1, 1, −1, … has a
                second term smaller than the first but later terms equal to the first.
              </p>
            </div>
          </div>

          <h3>Finding Any Term</h3>

          <p>{`Start at first term $a$. To reach the $n$th term, multiply by $r$ exactly $n - 1$ times:`}</p>

          <div className="lrn-eq lrn-eq-hero">
            <span>{`$$a_n = a \\cdot r^{n-1}$$`}</span>
          </div>

          <p>
            <strong>Example: The sequence 1.25, 2.5, 5, 10, 20 ...</strong>
          </p>

          <p>{`Here $a = 1.25$ and $r = 2$.`}</p>

          <ul className="lrn-list">
            <li>{`6th term: $a_6 = 1.25 \\times 2^5 = 1.25 \\times 32 = 40$`}</li>
            <li>{`7th term: $a_7 = 1.25 \\times 2^6 = 80$`}</li>
            <li>{`$n$th term: $a_n = 1.25 \\times 2^{n-1}$`}</li>
          </ul>

          <p>
            <strong>Example: Find common ratios.</strong>
          </p>

          <ul className="lrn-list">
            <li>{`Sequence 3, 6, 12, 24: $r = \\frac{6}{3} = 2$`}</li>
            <li>{`Sequence 6, 2, $\\frac{2}{3}$, $\\frac{2}{9}$: $r = \\frac{1}{3}$`}</li>
          </ul>

          <p>
            <strong>Two structural facts.</strong> Read a GP backwards and you get a GP with ratio{' '}
            {`$\\frac{1}{r}$`}: the sequence 3, 6, 12, 24 written in reverse is 24, 12, 6, 3 with
            ratio {`$\\frac{1}{2}$`}. Keep only every {`$k$`}th term of a GP and you still get a GP,
            with ratio {`$r^k$`}: take every second term of 3, 6, 12, 24, 48 and you get 3, 12, 48
            with ratio 4.
          </p>

          <h3>Finding Missing Terms</h3>

          <p>
            <strong>{`Example: Geometric sequence 3, $x$, $y$, $z$, 27 find all possible values.`}</strong>
          </p>

          <p>{`Five terms, so $a \\cdot r^4 = 27$: $3 \\cdot r^4 = 27$, giving $r^4 = 9$, so $r = \\pm\\sqrt{3}$.`}</p>

          <ul className="lrn-list">
            <li>{`If $r = \\sqrt{3}$: sequence is $3, 3\\sqrt{3}, 9, 9\\sqrt{3}, 27$`}</li>
            <li>{`If $r = -\\sqrt{3}$: sequence is $3, -3\\sqrt{3}, 9, -9\\sqrt{3}, 27$`}</li>
          </ul>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>Why are both values of {`$r$`} valid?</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>{`Because $r^4 = 9$ has two real solutions. A GP with negative ratio alternates signs. Both produce valid geometric sequences.`}</p>
            </details>
          </div>

          <h3>The Geometric Mean</h3>

          <p>
            The <strong>geometric mean</strong> of two positive numbers {`$a$`} and {`$b$`} is{' '}
            {`$\\sqrt{ab}$`}.
          </p>

          <p>{`In a GP, the middle term of any three consecutive terms equals the geometric mean of its outer terms. If $a_{k-1}, a_k, a_{k+1}$ are consecutive GP terms, then $a_k^2 = a_{k-1} \\cdot a_{k+1}$.`}</p>

          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Arithmetic Mean</span>
              <p>{`$\\frac{a + b}{2}$`}</p>
              <p>About addition. Average of two values.</p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Geometric Mean</span>
              <p>{`$\\sqrt{ab}$`}</p>
              <p>About multiplication. Middle of a GP.</p>
            </div>
          </div>

          <h3>Integer Terms Force Integer Sequences (AP Only)</h3>

          <p>
            If two terms of an arithmetic sequence are integers, then every term must be an integer.
          </p>

          <p>{`Say $a_j$ and $a_k$ are both integers, with $j < k$. Their difference is $(a_k - a_j) = (k - j) d$, so $d = \\frac{(a_k - a_j)}{(k - j)}$ is a rational number. Step from $a_j$ by integer multiples of $d$ and you land on every other term. Because the two anchor terms are integers and the step size divides evenly between them, every term in between is also an integer.`}</p>

          <p>
            This result does NOT hold for geometric sequences. A GP with integer terms can later
            produce fractions.
          </p>

          <div className="lrn-callout lrn-warning">
            <span className="lrn-callout-label">Warning</span>
            <p>{`The GP $512, 256, 128, 64, 32, 16, 8, 4, 2, 1, \\frac{1}{2}, \\frac{1}{4}, \\ldots$ has 10 integer terms in a row before its 11th term is $\\frac{1}{2}$. Integer GP terms do not have to stay integers.`}</p>
          </div>

          <p>
            <strong>{`But an AP can still contain exactly one integer.`}</strong>{' '}
            {`The rule above needs TWO integer terms to lock the rest in. With only one, the sequence can drift off the integers forever. Take $a = 0$ and $d = \\sqrt{2}$: the AP is $0, \\sqrt{2}, 2\\sqrt{2}, 3\\sqrt{2}, \\ldots$, which contains exactly one integer (the first term).`}
          </p>

          <h3>An Interesting Problem: 2, 3, 5</h3>

          <p>Can 2, 3, and 5 all be terms of the same geometric sequence?</p>

          <p>{`Suppose they are. Then $2 = a r^x$, $3 = a r^y$, and $5 = a r^z$ for some integer positions $x < y < z$ and some first term $a$ and ratio $r$. Divide the equations pairwise to kill $a$:`}</p>

          <div className="lrn-eq">
            <span>{`$$\\frac{3}{2} = r^{y - x}, \\qquad \\frac{5}{3} = r^{z - y}$$`}</span>
          </div>

          <p>{`Let $A = y - x$ and $B = z - y$. Raise the first equation to the power $B$ and the second to the power $A$. Both right-hand sides become $r^{AB}$, so:`}</p>

          <div className="lrn-eq">
            <span>{`$$\\left(\\frac{3}{2}\\right)^B = \\left(\\frac{5}{3}\\right)^A$$`}</span>
          </div>

          <p>{`Clear denominators: $3^{A+B} = 2^B \\cdot 5^A$.`}</p>

          <p>
            Now look at prime factors. The left side is a power of 3, so its only prime factor is 3.
            The right side mixes 2 and 5, with no factor of 3 anywhere. The two sides have no primes
            in common. They can only be equal if both equal 1, which forces {`$A = B = 0$`} but that
            means {`$y = x$`} and {`$z = y$`}, so 2, 3, and 5 are all the same term. Contradiction.
            So 2, 3, and 5 cannot all be GP terms.
          </p>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>Why does the prime-factor argument close the proof?</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>{`Two positive integers are equal only if their prime factorisations match. The left side $3^{A+B}$ has nothing but 3s. The right side $2^B \\cdot 5^A$ has nothing but 2s and 5s. The only way both factorisations can match is if all exponents are zero, which collapses the three positions into one.`}</p>
            </details>
          </div>

          <h3>Bacteria Example</h3>

          <p>
            A bacterium divides every minute. A vessel becomes full in 30 minutes starting from one
            bacterium. How long does it take to fill if you start with two bacteria?
          </p>

          <p>
            One bacterium: full at minute 30. The vessel at minute 29 had half the bacteria of
            minute 30. If you start with two, you are already at what the one-bacterium scenario has
            at minute 1. So the two-bacterium scenario fills the vessel in{' '}
            <strong>29 minutes</strong>.
          </p>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>Why is the answer 29 and not 15?</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                You are not dividing 30 by 2. You are asking: at what point in the one-bacterium
                timeline does the count equal the two-bacterium starting count? That is minute 1.
                The two-bacterium scenario is exactly 1 minute ahead. So it finishes at minute 29.
              </p>
            </details>
          </div>
        </>,

        <>
          <h2>Geometric Series</h2>

          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>{`You want to sum $1 + 2 + 4 + 8 + \\cdots + 2048$. Can you find a trick without adding all 12 terms?`}</p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                Multiply the sum by 2, then subtract the original. Almost all terms cancel, leaving
                just the last term of the doubled sum minus the first term of the original.
              </p>
            </details>
          </div>

          <p>
            A <strong>geometric series</strong> is the sum of the terms of a geometric sequence.
          </p>

          <h3>The Multiply-and-Subtract Method</h3>

          <p>{`Let $S = 1 + 2 + 4 + 8 + \\cdots + 1024 + 2048$.`}</p>

          <p>Multiply both sides by {`$r = 2$`}:</p>

          <p>{`$2S = 2 + 4 + 8 + \\cdots + 2048 + 4096$`}</p>

          <p>Subtract the first equation from the second everything in the middle cancels:</p>

          <p>{`$2S - S = 4096 - 1$, so $S = 4095$.`}</p>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>Why do the interior terms cancel?</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>{`$rS$ shifts the sequence one place right. Only the first term of $S$ (which is $a$) and the last term of $rS$ (which is $ar^n$) survive. Everything in between appears once with a plus sign in $rS$ and once with a minus sign in $S$.`}</p>
            </details>
          </div>

          <h3>The General Formula</h3>

          <p>{`Apply the same trick to a GP with first term $a$, ratio $r$, and $n$ terms. Starting from $S = a + ar + ar^2 + \\cdots + ar^{n-1}$:`}</p>

          <div className="lrn-eq lrn-eq-hero">
            <span>{`$$S = \\frac{a(r^n - 1)}{r - 1} \\quad (r \\neq 1)$$`}</span>
          </div>

          <p>
            If {`$r = 1$`}, every term equals {`$a$`}, so {`$S = na$`}.
          </p>

          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>{`The formula is the same identity as the polynomial factorisation $r^n - 1 = (r-1)(r^{n-1} + r^{n-2} + \\cdots + 1)$. The right factor is exactly $1 + r + r^2 + \\cdots + r^{n-1}$, so multiplying it by $a$ and dividing by $(r-1)$ gives the GP sum.`}</p>
          </div>

          <p>
            <strong>{`Example: Compute $1 + 2 + 4 + 8 + \\cdots + 2048$.`}</strong>
          </p>

          <p>{`$a = 1$, $r = 2$, last term $2048 = 2^{11}$, so $n = 12$ terms.`}</p>

          <p>{`$S = 1 \\times \\frac{(2^{12} - 1)}{(2 - 1)} = 4096 - 1 = 4095$`}</p>

          <p>
            <strong>{`Example: Compute $1 + 2 + 4 + \\cdots + 1024$.`}</strong>
          </p>

          <p>{`$a = 1$, $r = 2$, last term $1024 = 2^{10}$, so $n = 11$ terms.`}</p>

          <p>{`$S = \\frac{(2^{11} - 1)}{(2-1)} = 2048 - 1 = 2047$`}</p>
        </>,

        <>
          <h2>Infinite Geometric Series</h2>

          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>{`Does $\\frac{1}{2} + \\frac{1}{4} + \\frac{1}{8} + \\cdots$ ever reach a total of 1 if you add infinitely many terms?`}</p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                Yes. Each partial sum gets closer to 1 but never exceeds it. The partial sums
                approach 1 as a limit. The infinite sum equals exactly 1.
              </p>
            </details>
          </div>

          <p>
            An <strong>infinite geometric series</strong> is a geometric series with no final term
            it continues forever. When the ratio satisfies {`$|r| < 1$`} the sum reaches a finite
            limit. We say the series <strong>converges</strong>.
          </p>

          <h3>Building Intuition with Partial Sums</h3>

          <p>{`Look at the partial sums of $\\frac{1}{2} + \\frac{1}{4} + \\frac{1}{8} + \\cdots$:`}</p>

          <ul className="lrn-list">
            <li>{`$S_1 = \\frac{1}{2}$`}</li>
            <li>{`$S_2 = \\frac{3}{4}$`}</li>
            <li>{`$S_3 = \\frac{7}{8}$`}</li>
            <li>{`$S_n = 1 - \\frac{1}{2^n}$`}</li>
          </ul>

          <p>{`As $n$ grows, $\\frac{1}{2^n}$ shrinks toward 0. The partial sums approach 1, and we call that limit the infinite sum.`}</p>

          <div className="lrn-graph">
            <PartialSumsViz />
          </div>

          <h3>The Formula</h3>

          <p>{`Start with the finite sum $S = \\frac{a(r^n - 1)}{r - 1}$. When $|r| < 1$, $r^n \\to 0$ as $n \\to \\infty$, so $a(r^n - 1) \\to -a$:`}</p>

          <div className="lrn-eq lrn-eq-hero">
            <span>{`$$S = \\frac{a}{1 - r} \\quad (|r| < 1)$$`}</span>
          </div>

          <p>
            <strong>{`A second way to see it: the decimal pattern.`}</strong>{' '}
            {`Take $S = 1 + \\frac{1}{10} + \\frac{1}{100} + \\cdots$. Multiply by 10:`}
          </p>

          <p>{`$10S = 10 + 1 + \\frac{1}{10} + \\frac{1}{100} + \\cdots = 10 + S$`}</p>

          <p>{`So $9S = 10$, giving $S = \\frac{10}{9}$. The same answer falls out of the formula: $\\frac{1}{1 - \\frac{1}{10}} = \\frac{10}{9}$. You can also see it directly: $1.111\\ldots$ is what you write when you add $1 + 0.1 + 0.01 + \\cdots$.`}</p>

          <div className="lrn-callout lrn-warning">
            <span className="lrn-callout-label">Warning</span>
            <p>{`When $|r| \\geq 1$, the series has no finite sum and the formula does not apply. If $r = -1$, partial sums flip between two values forever and never settle.`}</p>
          </div>

          <h3>Evaluating Infinite Geometric Series</h3>

          <p>
            <strong>{`Example: Evaluate $3 + 1 + \\frac{1}{3} + \\frac{1}{9} + \\cdots$`}</strong>
          </p>

          <p>{`$a = 3$, $r = \\frac{1}{3}$. $S = \\frac{3}{1 - \\frac{1}{3}} = \\frac{3}{\\frac{2}{3}} = \\frac{9}{2}$`}</p>

          <p>
            <strong>{`Example: Evaluate $4 - \\frac{8}{3} + \\frac{16}{9} - \\frac{32}{27} + \\cdots$`}</strong>
          </p>

          <p>{`First term $a = 4$. Ratio: $\\frac{(-\\frac{8}{3})}{4} = -\\frac{2}{3}$.`}</p>

          <p>{`Since $|-\\frac{2}{3}| < 1$: $S = \\frac{4}{1 - (-\\frac{2}{3})} = \\frac{4}{\\frac{5}{3}} = \\frac{12}{5}$`}</p>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>What is the critical check before applying the infinite GP formula?</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>{`Always check whether $|r| < 1$ first. When $|r| \\geq 1$ the series has no finite sum, and the formula will give you nonsense. For example, plugging $r = 10$ into $\\frac{a}{1-r}$ gives a negative answer for a sum of positive terms.`}</p>
            </details>
          </div>
        </>,

        <>
          <h2>Repeating Decimals as Geometric Series</h2>

          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>{`The decimal $0.\\overline{127}$ repeats the block 127 forever. Can you write this as a fraction?`}</p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                The repeating block is a geometric series. The first term is 127 divided by 1000,
                and the ratio is 1 divided by 1000. Apply the infinite GP formula to get a fraction.
              </p>
            </details>
          </div>

          <p>
            Every repeating decimal is an infinite geometric series in disguise. That lets you turn
            any repeating decimal into an exact fraction.
          </p>

          <p>
            <strong>{`Example: Convert $0.1\\overline{27}$ (the digits 27 repeat) to a fraction.`}</strong>
          </p>

          <p>{`Split the decimal: $0.1\\overline{27} = 0.1 + 0.027 + 0.00027 + \\cdots$`}</p>

          <p>{`The repeating part is a geometric series: first term $a = \\frac{27}{1000}$, ratio $r = \\frac{1}{100}$.`}</p>

          <p>{`$S_{\\text{repeating}} = \\frac{\\frac{27}{1000}}{1 - \\frac{1}{100}} = \\frac{\\frac{27}{1000}}{\\frac{99}{100}} = \\frac{27}{990} = \\frac{3}{110}$`}</p>

          <p>{`Total: $\\frac{1}{10} + \\frac{3}{110} = \\frac{11}{110} + \\frac{3}{110} = \\frac{14}{110} = \\frac{7}{55}$`}</p>

          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Geometric Series Method</span>
              <p>Identify the repeating block as a GP. Sum it. Add the non-repeating prefix.</p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Algebraic Multiply-Subtract Method</span>
              <p>{`Let $x = 0.1\\overline{27}$. Then $1000x = 127.\\overline{27}$ and $10x = 1.\\overline{27}$. Subtract: $990x = 126$, so $x = \\frac{7}{55}$.`}</p>
            </div>
          </div>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>What is the non-obvious step in the geometric series method?</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                Identifying where the repeating block starts. The digit before the repeating block
                (here, 0.1) is not part of the series. You add it separately at the end.
              </p>
            </details>
          </div>
        </>,

        <>
          <h2>Telescoping Series and Products</h2>

          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              In the sum (1000−998) + (998−996) + ... + (334−332), what happens to most of the
              terms?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                Each positive term cancels the negative term before it. Only the very first positive
                value and the very last negative value survive.
              </p>
            </details>
          </div>

          <p>
            A <strong>telescoping series</strong> is a sum where consecutive terms cancel each
            other. The middle terms wipe each other out and only the first and last terms survive.
            If you can rewrite each term in the form {`$f(k) - f(k+1)$`}, the whole sum collapses to{' '}
            {`$f(1) - f(n+1)$`}.
          </p>

          <h3>Telescoping with Simple Differences</h3>

          <div className="lrn-graph">
            <TelescopingViz />
          </div>

          <p>{`$(1000-998) + (998-996) + \\cdots + (334-332) = 1000 - 332 = 668$`}</p>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>Why does the cancellation leave only the first and last values?</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                Each pair shares a value: the −998 in the first term kills the +998 in the second
                term, and so on. Only the first positive value and the last negative value have
                nothing to cancel with.
              </p>
            </details>
          </div>

          <h3>Partial Fractions for Telescoping</h3>

          <p>
            <strong>{`Example: Evaluate $\\frac{1}{1 \\times 2} + \\frac{1}{2 \\times 3} + \\frac{1}{3 \\times 4} + \\cdots + \\frac{1}{99 \\times 100}$.`}</strong>
          </p>

          <p>Decompose each fraction:</p>

          <div className="lrn-eq">
            <span>{`$$\\frac{1}{k(k+1)} = \\frac{1}{k} - \\frac{1}{k+1}$$`}</span>
          </div>

          <p>Now the sum telescopes:</p>

          <p>{`$\\left(\\frac{1}{1} - \\frac{1}{2}\\right) + \\left(\\frac{1}{2} - \\frac{1}{3}\\right) + \\cdots + \\left(\\frac{1}{99} - \\frac{1}{100}\\right) = 1 - \\frac{1}{100} = \\frac{99}{100}$`}</p>

          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>{`Every intermediate fraction $\\frac{1}{2}, \\frac{1}{3}, \\ldots, \\frac{1}{99}$ appears once with a plus sign and once with a minus sign. They all cancel. Only $\\frac{1}{1}$ from the first pair and $-\\frac{1}{100}$ from the last pair remain.`}</p>
          </div>

          <h3>Telescoping Products</h3>

          <p>
            <strong>{`Example: Compute $\\frac{3}{1} \\times \\frac{4}{2} \\times \\frac{5}{3} \\times \\cdots \\times \\frac{40}{38}$.`}</strong>
          </p>

          <p>
            Write out all numerators: 3 through 40. Write out all denominators: 1 through 38.
            Numerators 3 through 38 each cancel with the matching denominator.
          </p>

          <p>Surviving numerators: 39, 40. Surviving denominators: 1, 2.</p>

          <p>{`$S = \\frac{39 \\times 40}{1 \\times 2} = \\frac{1560}{2} = 780$`}</p>

          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Telescoping Sums</span>
              <p>{`Each term equals $f(k) - f(k+1)$. Differences cancel additively.`}</p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Telescoping Products</span>
              <p>{`Each factor equals $\\frac{f(k)}{f(k+1)}$. Factors cancel multiplicatively.`}</p>
            </div>
          </div>
        </>,

        <>
          <h2>Sigma Notation</h2>

          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              The sum 1 + 2 + 3 + ... + 100 takes a lot of space to write. Is there a compact way to
              write it?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                Yes. Sigma notation uses the Greek letter Σ to mean "add up." The starting value
                goes below Σ, the stopping value goes above it, and the expression to add goes to
                the right.
              </p>
            </details>
          </div>

          <p>
            <strong>Sigma notation</strong> is a shorthand for writing sums. The Greek letter{' '}
            {`$\\Sigma$`} (sigma) means "add up." The starting value of the index sits below the
            sigma, the stopping value sits above it, and the expression to be added sits to the
            right.
          </p>

          <div className="lrn-eq lrn-eq-hero">
            <span>{`$$\\sum_{k=1}^{100} k = 1 + 2 + 3 + \\cdots + 100$$`}</span>
          </div>

          <p>
            <strong>Examples:</strong>
          </p>

          <div className="lrn-eq">
            <span>{`$$\\sum_{k=1}^{5} k^2 = 1^2 + 2^2 + 3^2 + 4^2 + 5^2 = 55$$`}</span>
          </div>

          <div className="lrn-eq">
            <span>{`$$\\sum_{k=0}^{3} 2^k = 2^0 + 2^1 + 2^2 + 2^3 = 1 + 2 + 4 + 8 = 15$$`}</span>
          </div>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>What does the index variable do in sigma notation?</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                The variable {`$k$`} is called the index. It takes each integer value from the
                bottom number to the top number, one at a time. You plug each value of {`$k$`} into
                the expression and add all the results.
              </p>
            </details>
          </div>
        </>,

        <>
          <h2>The Fibonacci Sequence</h2>

          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              You are climbing a staircase. You can take 1 step or 2 steps at a time. How many
              distinct ways can you climb 5 stairs?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                There are 8 ways. The number of paths follows the Fibonacci sequence: 1, 2, 3, 5, 8
                for n = 1, 2, 3, 4, 5.
              </p>
            </details>
          </div>

          <p>
            The <strong>Fibonacci sequence</strong> starts with 1, 1 and builds each new term by
            adding the previous two. This pattern appears whenever a counting problem splits into
            two smaller cases that combine stair climbing, tilings, branching choices.
          </p>

          <div className="lrn-eq lrn-eq-hero">
            <span>{`$$F_1 = 1, \\quad F_2 = 1, \\quad F_n = F_{n-1} + F_{n-2}$$`}</span>
          </div>

          <p>So the sequence is: 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, ...</p>

          <h3>Stair-Climbing Application</h3>

          <p>
            How many ways can you climb an {`$n$`}-step staircase, taking 1 or 2 steps at a time?
          </p>

          <div className="lrn-graph">
            <FibonacciStaircaseViz />
          </div>

          <p>{`Each count is a Fibonacci number. To reach step $n$, your last move was either a single step from step $n-1$, or a double step from step $n-2$. So the total ways equal $F_{n-1} + F_{n-2} = F_n$.`}</p>

          <h3>The Closed-Form Expression</h3>

          <p>
            The Fibonacci numbers also satisfy a closed-form formula involving the{' '}
            <strong>golden ratio</strong> {`$\\phi = \\frac{(1+\\sqrt{5})}{2}$`} and its conjugate{' '}
            {`$\\psi = \\frac{(1-\\sqrt{5})}{2}$`}:
          </p>

          <div className="lrn-eq">
            <span>{`$$F_n = A\\phi^n + B\\psi^n$$`}</span>
          </div>

          <p>
            {`To fix $A$ and $B$, plug $n = 1$ and $n = 2$ into the formula. That gives two linear equations in $A$ and $B$ from $F_1 = 1$ and $F_2 = 1$. Solving them yields $A = \\frac{1}{\\sqrt{5}}$ and $B = -\\frac{1}{\\sqrt{5}}$. The strange thing is that the formula uses the irrational $\\sqrt{5}$, yet every value it produces is a whole number the irrational parts cancel exactly at every step.`}
          </p>

          <h3>A Related Sequence</h3>

          <p>
            The sequence 1, 3, 7, 15, 31, ... has each term equal to{' '}
            {`$2 \\times (\\text{previous term}) + 1$`}.
          </p>

          <p>{`Notice $b_n = 2^n - 1$. Check: $b_1 = 1$, $b_2 = 3$, $b_3 = 7$. Correct.`}</p>

          <p>{`So $b_{100} = 2^{100} - 1$.`}</p>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>How do you verify the pattern {`$b_n = 2^n - 1$`} satisfies the recurrence?</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>{`Plug into $b_n = 2b_{n-1} + 1$: $2(2^{n-1}-1)+1 = 2^n - 2 + 1 = 2^n - 1$. It checks out.`}</p>
            </details>
          </div>
        </>,

        <>
          <h2>Well-Tempered Clavier Music as Geometry</h2>

          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              On a piano, the distance from one note to the same note one octave higher doubles the
              frequency. Can a scale be built from perfect integer ratios that also divides the
              octave evenly?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                No. You cannot satisfy both requirements at once. Equal temperament and pure integer
                ratios are mathematically inconsistent. Equal temperament sacrifices exact purity
                for transposability across keys.
              </p>
            </details>
          </div>

          <p>
            Western music divides the octave into 12 equal semitones. Johann Sebastian Bach
            celebrated Andreas Werkmeister's equal-temperament tuning with "The Well-Tempered
            Clavier." A pitch is a frequency, measured in vibrations per second. A musical interval
            between two notes is the ratio of their frequencies.
          </p>

          <div className="lrn-graph">
            <PianoViz />
          </div>

          <h3>The Equal-Temperament Problem</h3>

          <p>
            For a tune to sound the same when you start it on any note, the ratio between
            neighbouring semitones must be a single constant {`$q$`}. The 12 semitones in an octave
            then form a geometric sequence. After 12 semitones you reach the same note one octave
            higher, where the frequency has doubled:
          </p>

          <div className="lrn-eq lrn-eq-hero">
            <span>{`$$q^{12} = 2 \\implies q = 2^{\\tfrac{1}{12}} = \\sqrt[12]{2} \\approx 1.0595$$`}</span>
          </div>

          <h3>Pure Intervals vs Equal Temperament</h3>

          <p>
            Equal temperament gives each interval as a power of {`$\\sqrt[12]{2}$`}. The historic
            "pure" intervals come from small integer ratios. The two systems do not match exactly:
          </p>

          <div className="lrn-eq">
            <span>{`$$\\begin{array}{lcc} \\textbf{Interval} & \\textbf{Pure ratio} & \\textbf{Equal-temperament ratio} \\\\ \\text{Minor third} & \\frac{6}{5} = 1.2000 & 2^{\\tfrac{3}{12}} \\approx 1.1892 \\\\ \\text{Major third} & \\frac{5}{4} = 1.2500 & 2^{\\tfrac{4}{12}} \\approx 1.2599 \\\\ \\text{Perfect fourth} & \\frac{4}{3} \\approx 1.3333 & 2^{\\tfrac{5}{12}} \\approx 1.3348 \\\\ \\text{Perfect fifth} & \\frac{3}{2} = 1.5000 & 2^{\\tfrac{7}{12}} \\approx 1.4983 \\\\ \\text{Minor sixth} & \\frac{8}{5} = 1.6000 & 2^{\\tfrac{8}{12}} \\approx 1.5874 \\\\ \\text{Major sixth} & \\frac{5}{3} \\approx 1.6667 & 2^{\\tfrac{9}{12}} \\approx 1.6818 \\\\ \\text{Octave} & \\frac{2}{1} = 2.0000 & 2^{\\tfrac{12}{12}} = 2.0000 \\end{array}$$`}</span>
          </div>

          <h3>The Inconsistency</h3>

          <p>{`Suppose you want $q$ to give both a pure octave and a pure perfect fifth. The fifth sits at 7 semitones, so you would need $q^7 = \\frac{3}{2}$ and $q^{12} = 2$ at the same time.`}</p>

          <p>{`Raise the first to the 12th power and the second to the 7th power. Both right-hand sides become $q^{84}$, so we need $\\left(\\frac{3}{2}\\right)^{12} = 2^7$. The left side is about $129.7$. The right side is exactly $128$. They are not equal, so no single ratio $q$ can do both.`}</p>

          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Pure Intervals</span>
              <p>
                Small integer ratios. Sound perfectly in tune. The same tune sounds different in
                different keys.
              </p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Equal Temperament</span>
              <p>{`Every interval is a power of $\\sqrt[12]{2}$. Slightly off the pure ratios. The same tune sounds identical in every key.`}</p>
            </div>
          </div>
        </>,

        <>
          <h2>{`Zeno's Paradox When Infinite Steps Take Finite Time`}</h2>

          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              Achilles runs 10 times faster than a turtle. The turtle starts 100 meters ahead.
              Achilles closes the gap to 100 meters, then 10, then 1, then 0.1... Does he ever reach
              the turtle?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                Yes. The distances form a geometric series whose sum reaches a finite limit, which
                we call convergence. The total distance is 1000/9 meters.
              </p>
            </details>
          </div>

          <p>
            The ancient Greek philosopher Zeno argued that motion is impossible. Achilles gives a
            turtle a 100-meter head start. By the time Achilles runs 100 meters, the turtle has
            moved 10 meters ahead. By the time Achilles runs those 10 meters, the turtle has moved 1
            meter ahead infinitely many steps to close the gap.
          </p>

          <h3>Resolving the Paradox</h3>

          <p>The distances Achilles must close form a geometric series:</p>

          <div className="lrn-eq">
            <span>{`$$100 + 10 + 1 + 0.1 + \\cdots$$`}</span>
          </div>

          <p>{`$a = 100$, $r = \\frac{1}{10}$.`}</p>

          <div className="lrn-eq lrn-eq-hero">
            <span>{`$$S = \\frac{100}{1 - \\frac{1}{10}} = \\frac{100}{\\frac{9}{10}} = \\frac{1000}{9} \\approx 111.1 \\text{ meters}$$`}</span>
          </div>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>What assumption does the paradox make that is wrong?</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                Zeno assumes that infinitely many steps must take infinite total time. They do not.
                Each step here is 10 times shorter than the last, so the times also shrink in the
                same ratio. The total time fits inside a finite interval, and so does the total
                distance.
              </p>
            </details>
          </div>
        </>,

        <>
          <h2>Raising Equations to Powers</h2>

          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>{`You are given $x + \\frac{1}{x} = 7$. Can you find $x^2 + \\frac{1}{x^2}$ without solving for $x$ first?`}</p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                Yes. Square both sides. The cross term expands to 2. Subtract 2 from 49 to get 47.
              </p>
            </details>
          </div>

          <p>
            Sometimes a problem hands you a simple equation and asks you for a more complicated
            expression in the same variables. The trick is always the same: raise the given equation
            to a higher power, expand the result, and peel off the unwanted cross terms. The three
            examples below show this pattern with squaring, with radical conjugates, and with the
            sum-of-cubes identity.
          </p>

          <h3>Squaring a Given Equation</h3>

          <p>
            <strong>{`Example: Given $x + \\frac{1}{x} = 7$, find $x^2 + \\frac{1}{x^2}$.`}</strong>
          </p>

          <div className="lrn-faded">
            <div className="lrn-faded-phase">
              <span className="lrn-faded-label">COMPLETE EXAMPLE</span>
              <p>Square both sides:</p>
              <p>{`$(x + \\frac{1}{x})^2 = 49$`}</p>
              <p>{`$x^2 + 2 \\cdot x \\cdot \\frac{1}{x} + \\frac{1}{x^2} = 49$`}</p>
              <p>{`$x^2 + 2 + \\frac{1}{x^2} = 49$`}</p>
              <p>{`$x^2 + \\frac{1}{x^2} = 47$`}</p>
            </div>
          </div>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>{`Why does $(x + \\frac{1}{x})^2$ not equal $x^2 + \\frac{1}{x^2}$ directly?`}</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>{`The expansion $(x + \\frac{1}{x})^2 = x^2 + 2 \\cdot x \\cdot \\frac{1}{x} + \\frac{1}{x^2}$ includes the cross term $2 \\cdot x \\cdot \\frac{1}{x} = 2$. Subtract it to isolate what you need.`}</p>
            </details>
          </div>

          <h3>Squaring a Sum of Radicals</h3>

          <p>
            <strong>{`Example: Simplify $\\sqrt{6+\\sqrt{11}} + \\sqrt{6-\\sqrt{11}}$.`}</strong>
          </p>

          <p>{`Let $E = \\sqrt{6+\\sqrt{11}} + \\sqrt{6-\\sqrt{11}}$. Square both sides:`}</p>

          <p>{`$E^2 = (6+\\sqrt{11}) + 2\\sqrt{(6+\\sqrt{11})(6-\\sqrt{11})} + (6-\\sqrt{11})$`}</p>

          <p>{`$E^2 = 12 + 2\\sqrt{36 - 11} = 12 + 2\\sqrt{25} = 12 + 10 = 22$`}</p>

          <p>{`$E = \\sqrt{22}$ (positive root since $E > 0$)`}</p>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>What algebraic identity simplifies the expression under the square root?</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>{`The difference of squares: $(a+b)(a-b) = a^2 - b^2$. With $a = 6$ and $b = \\sqrt{11}$, the product becomes $36 - 11 = 25$. The square root of 25 is the whole number 5, which clears the nested radical.`}</p>
            </details>
          </div>

          <h3>Using the Sum-of-Cubes Identity</h3>

          <p>
            <strong>{`Example: Given $a + b = 20$ and $a^3 + b^3 = 800$, find $a^2 + b^2$.`}</strong>
          </p>

          <p>{`Use the identity $a^3 + b^3 = (a+b)(a^2 - ab + b^2)$:`}</p>

          <p>{`$800 = 20(a^2 - ab + b^2)$, so $a^2 - ab + b^2 = 40$.`}</p>

          <p>{`From $(a+b)^2 = a^2 + 2ab + b^2 = 400$:`}</p>

          <p>{`Subtract: $3ab = 360$, so $ab = 120$.`}</p>

          <p>{`Therefore $a^2 + b^2 = (a+b)^2 - 2ab = 400 - 240 = 160$.`}</p>
        </>,

        <>
          <h2>Self-Similar Expressions</h2>

          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>{`The expression $\\sqrt{20 - \\sqrt{20 - \\sqrt{20 - \\cdots}}}$ contains itself inside. What equation does this let you write?`}</p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>{`Set the whole expression equal to $x$. The inner part is another copy of $x$. So $x = \\sqrt{20 - x}$. Square both sides to get a quadratic.`}</p>
            </details>
          </div>

          <p>
            A <strong>self-similar expression</strong> is one that contains a copy of itself inside.
            Nested radicals and continued fractions are self-similar. The technique is the same for
            both: set the whole expression equal to {`$x$`}, substitute {`$x$`} for the inner copy,
            and solve the equation that falls out.
          </p>

          <h3>Nested Radicals</h3>

          <p>
            <strong>{`Example: Evaluate $\\sqrt{20 - \\sqrt{20 - \\sqrt{20 - \\cdots}}}$.`}</strong>
          </p>

          <p>{`Let $x = \\sqrt{20 - \\sqrt{20 - \\cdots}}$. The expression under the first radical is $20 - x$.`}</p>

          <p>{`$x = \\sqrt{20 - x}$`}</p>

          <p>Square both sides:</p>

          <p>{`$x^2 = 20 - x$`}</p>

          <p>{`$x^2 + x - 20 = 0$`}</p>

          <p>{`$(x + 5)(x - 4) = 0$`}</p>

          <p>{`$x = -5$ or $x = 4$`}</p>

          <p>Since the expression is a square root, it must be positive. So {`$x = 4$`}.</p>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>Why is {`$x = -5$`} rejected?</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                A square root is never negative. The quadratic gives two solutions. Only the
                non-negative one can equal the original square root, so $x = -5$ is impossible.
              </p>
            </details>
          </div>

          <h3>Continued Fractions</h3>

          <p>
            <strong>{`Example: Evaluate $1 + \\dfrac{6}{1 + \\dfrac{6}{1 + \\dfrac{6}{\\ddots}}}$.`}</strong>
          </p>

          <p>{`Let $x$ equal the expression. The denominator of the first fraction is another copy of $x$. So $x = 1 + \\frac{6}{x}$.`}</p>

          <p>Multiply both sides by {`$x$`}:</p>

          <p>{`$x^2 = x + 6$`}</p>

          <p>{`$x^2 - x - 6 = 0$`}</p>

          <p>{`$(x-3)(x+2) = 0$`}</p>

          <p>{`$x = 3$ or $x = -2$`}</p>

          <p>
            Since the expression starts with {`$1 + \\frac{6}{\\text{positive}}$`}, it must be
            positive. So {`$x = 3$`}.
          </p>

          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Nested Radicals</span>
              <p>Square both sides to remove the root. Leads to a quadratic.</p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Continued Fractions</span>
              <p>Multiply through to clear the fraction. Leads to a quadratic.</p>
            </div>
          </div>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>Why does self-substitution require an infinite expression?</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                After you peel off one layer, the rest must be identical to the original. This only
                holds if the nesting goes on forever. A finite nested expression would change after
                you remove one layer.
              </p>
            </details>
          </div>
        </>,

        <>
          <h2>Symmetric Systems of Equations</h2>

          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              In the system where each equation is the sum of four variables with one left out, what
              would happen if you added all five equations together?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                Each variable appears in exactly four of the five equations. Adding all equations
                gives 4 times the sum of all variables. Dividing by 4 gives the total sum.
              </p>
            </details>
          </div>

          <p>
            A <strong>symmetric system</strong> is a set of equations that all share the same
            structure: swap any two variables and the system as a whole stays the same only the
            order of the equations changes. In such a system, every variable plays exactly the same
            role, which means combining all equations at once is faster than solving them one by
            one.
          </p>

          <h3>Additive Symmetry: Adding All Equations</h3>

          <p>Take the following four equations:</p>

          <div className="lrn-eq">
            <span>{`$$\\begin{aligned} 3u + x + y + z &= 20 \\\\ u + 3x + y + z &= 6 \\\\ u + x + 3y + z &= 44 \\\\ u + x + y + 3z &= 2 \\end{aligned}$$`}</span>
          </div>

          <p>
            Each equation has one variable with a coefficient of 3 and the other three with a
            coefficient of 1. The structure is symmetric: swap any two of the four variables and you
            just shuffle the equations.
          </p>

          <p>{`Add all four equations. Each variable appears once with coefficient 3 and three times with coefficient 1, for a total coefficient of 6:`}</p>

          <div className="lrn-eq">
            <span>{`$$6(u + x + y + z) = 20 + 6 + 44 + 2 = 72$$`}</span>
          </div>

          <p>{`So $u + x + y + z = 12$. Now subtract each original equation from this total. The first equation is $3u + x + y + z = 20$, so:`}</p>

          <div className="lrn-eq">
            <span>{`$$(u + x + y + z) - (3u + x + y + z) = 12 - 20 \\implies -2u = -8 \\implies u = 4$$`}</span>
          </div>

          <p>Repeat for the other three:</p>

          <ul className="lrn-list">
            <li>{`Second: $-2x = 12 - 6 = 6$, so $x = -3$.`}</li>
            <li>{`Third: $-2y = 12 - 44 = -32$, so $y = 16$.`}</li>
            <li>{`Fourth: $-2z = 12 - 2 = 10$, so $z = -5$.`}</li>
          </ul>

          <p>{`Solution: $(u, x, y, z) = (4, -3, 16, -5)$. Check: $3(4) + (-3) + 16 + (-5) = 12 - 3 + 16 - 5 = 20$. ✓`}</p>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>Why is "add them all" the right first move?</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                Because every variable appears the same total number of times across the full
                system, the sum of all equations collapses to a single equation in just one
                quantity: the sum of all variables. Once you know that sum, subtracting any one
                equation isolates the variable whose role was different in that equation.
              </p>
            </details>
          </div>

          <h3>Multiplicative Symmetry: Products of Equations</h3>

          <p>
            <strong>{`Example: Given $rm = 27$, $mt = 72$, $tr = 6$, find $r$, $m$, and $t$.`}</strong>
          </p>

          <p>Multiply all three equations:</p>

          <p>{`$(rm)(mt)(tr) = 27 \\times 72 \\times 6$`}</p>

          <p>{`$r^2 m^2 t^2 = 11664$`}</p>

          <p>{`$(rmt)^2 = 11664$, so $rmt = 108$.`}</p>

          <p>Now divide to recover each variable:</p>

          <ul className="lrn-list">
            <li>{`$r = \\frac{rmt}{mt} = \\frac{108}{72} = \\frac{3}{2}$`}</li>
            <li>{`$m = \\frac{rmt}{tr} = \\frac{108}{6} = 18$`}</li>
            <li>{`$t = \\frac{rmt}{rm} = \\frac{108}{27} = 4$`}</li>
          </ul>

          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>
              Multiplying all equations squares every variable in the product. Taking the square
              root gives you {`$rmt$`}. Each individual variable is then the total product divided
              by the other two which you already have as given equations.
            </p>
          </div>

          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Additive Symmetry</span>
              <p>All equations are sums. Add all, then subtract each.</p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Multiplicative Symmetry</span>
              <p>All equations are products. Multiply all, then divide each.</p>
            </div>
          </div>
        </>
      ]
    },

    practice: [
      {
        q: `The sequence is −9, −5, −1, 3, 7. What is the 8th term?`,
        a: `The 8th term is 19. Use $a_n = a + (n-1)d$ with $a = -9$ and $d = 4$: $a_8 = -9 + 7 \\times 4 = -9 + 28 = 19$. Each step adds 4, so after 7 steps you move $+28$ from the start.`
      },
      {
        q: `A geometric sequence has a ratio of $\\frac{1}{3}$ and a first term of 6. What is the 5th term?`,
        a: `The 5th term is $\\frac{2}{27}$. Use $a_n = a \\cdot r^{n-1}$ with $a = 6$ and $r = \\frac{1}{3}$: $6 \\times (\\frac{1}{3})^4 = \\frac{6}{81} = \\frac{2}{27}$.`
      },
      {
        q: `What is $1 + 2 + 3 + \\cdots + 100$?`,
        a: `The sum is 5050. Write the sum forward and backward: $S + S = 100 \\times 101$, so $2S = 10100$ and $S = 5050$. Each pair (1+100, 2+99, ...) equals 101, and there are 100 such pairs across both copies.`
      },
      {
        q: `Does $3 + 1 + \\frac{1}{3} + \\frac{1}{9} + \\cdots$ converge? If so, what is its sum?`,
        a: `Yes, it converges to $\\frac{9}{2}$. The ratio is $\\frac{1}{3}$, and $|\\frac{1}{3}| < 1$. Using $S = \\frac{a}{1-r}$: $S = \\frac{3}{1 - \\frac{1}{3}} = \\frac{3}{\\frac{2}{3}} = \\frac{9}{2}$.`
      },
      {
        q: `A 9-term arithmetic series sums to 72. What is the 5th term?`,
        a: `The 5th term is 8. In a series with an odd number of terms, sum = n times the middle term. So $72 = 9 \\times a_5$, giving $a_5 = 8$.`
      },
      {
        q: `Evaluate $\\frac{1}{1 \\times 2} + \\frac{1}{2 \\times 3} + \\cdots + \\frac{1}{99 \\times 100}$.`,
        a: `The sum is $\\frac{99}{100}$. Decompose each term: $\\frac{1}{k(k+1)} = \\frac{1}{k} - \\frac{1}{k+1}$. The series telescopes: all intermediate fractions cancel, leaving $1 - \\frac{1}{100} = \\frac{99}{100}$.`
      },
      {
        q: `A bank account grows by multiplying its balance by 1.05 each year. After how many years does the balance first exceed 1000 dollars if it starts at 500 dollars?`,
        a: `After 16 years. This is a geometric sequence with $a = 500$ and $r = 1.05$. You need $500 \\times 1.05^{n-1} > 1000$, meaning $1.05^{n-1} > 2$. Since $1.05^{14} \\approx 1.98$ and $1.05^{15} \\approx 2.08$, we need $n - 1 = 15$, so $n = 16$.`
      },
      {
        q: `An arithmetic sequence has $a_4 + a_7 + a_{10} = 51$. What is $a_7$?`,
        a: `$a_7 = 17$. The three terms $a_4, a_7, a_{10}$ are symmetric around $a_7$. Their sum equals $3a_7$ because the $\\pm 3d$ offsets cancel. So $3a_7 = 51$ and $a_7 = 17$.`
      },
      {
        q: `Compute $\\frac{3}{1} \\times \\frac{4}{2} \\times \\frac{5}{3} \\times \\cdots \\times \\frac{40}{38}$.`,
        a: `The product is 780. Numerators 3 through 38 each cancel with the matching denominator. Surviving: numerators 39 and 40, denominators 1 and 2. Result: $\\frac{39 \\times 40}{1 \\times 2} = 780$.`
      },
      {
        q: `Evaluate $4 - \\frac{8}{3} + \\frac{16}{9} - \\frac{32}{27} + \\cdots$`,
        a: `The sum is $\\frac{12}{5}$. First term $a = 4$, ratio $r = -\\frac{2}{3}$. Since $|-\\frac{2}{3}| < 1$: $S = \\frac{4}{1 - (-\\frac{2}{3})} = \\frac{4}{\\frac{5}{3}} = \\frac{12}{5}$.`
      },
      {
        q: `A ladder has rungs spaced 30 cm apart. The top rung is 210 cm off the ground and the bottom rung is 30 cm off the ground. How many rungs are there and what is their total height?`,
        a: `There are 7 rungs. Count: $\\frac{(210-30)}{30} + 1 = 7$. Total height (sum): $7 \\times \\frac{(30+210)}{2} = 7 \\times 120 = 840$ cm.`
      },
      {
        q: `Why does the infinite geometric series formula $S = \\frac{a}{1-r}$ break down for $r = 10$?`,
        a: `Because $|r| = 10 \\geq 1$, so the series diverges. The formula comes from letting $r^n \\to 0$ as $n \\to \\infty$. When $|r| \\geq 1$, $r^n$ grows instead. Plugging $r = 10$ gives $-\\frac{1}{9}$ adding positive numbers and getting a negative result is nonsense.`
      },
      {
        q: `Given $x + \\frac{1}{x} = 7$, find $x^2 + \\frac{1}{x^2}$.`,
        a: `$x^2 + \\frac{1}{x^2} = 47$. Square both sides: $(x + \\frac{1}{x})^2 = 49$, which expands to $x^2 + 2 + \\frac{1}{x^2} = 49$. Subtract 2: $x^2 + \\frac{1}{x^2} = 47$.`
      },
      {
        q: `Convert $0.1\\overline{27}$ (where 27 repeats) to a fraction.`,
        a: `$0.1\\overline{27} = \\frac{7}{55}$. Repeating part: $a = \\frac{27}{1000}$, $r = \\frac{1}{100}$. Sum: $\\frac{\\frac{27}{1000}}{\\frac{99}{100}} = \\frac{3}{110}$. Add non-repeating: $\\frac{1}{10} + \\frac{3}{110} = \\frac{14}{110} = \\frac{7}{55}$.`
      },
      {
        q: `Evaluate $\\sqrt{20 - \\sqrt{20 - \\sqrt{20 - \\cdots}}}$.`,
        a: `The value is 4. Let $x$ equal the expression. Then $x = \\sqrt{20 - x}$. Squaring: $x^2 + x - 20 = 0$, giving $(x-4)(x+5) = 0$. Since a square root is non-negative, $x = 4$.`
      },
      {
        q: `The sequence is 2, 5, 8, 11, 14. A student claims the 20th term is 59. Is the student correct?`,
        a: `Yes. $a = 2$, $d = 3$. $a_{20} = 2 + 19 \\times 3 = 2 + 57 = 59$.`
      },
      {
        q: `A geometric series has first term 5 and ratio $\\frac{1}{2}$. What is the sum of the first 4 terms?`,
        a: `The sum is $\\frac{75}{8}$. Using $S = \\frac{a(r^n - 1)}{r - 1}$: $S = \\frac{5((\\frac{1}{2})^4 - 1)}{\\frac{1}{2} - 1} = \\frac{5 \\times (-\\frac{15}{16})}{-\\frac{1}{2}} = \\frac{75}{8}$.`
      },
      {
        q: `A population of bacteria doubles every hour. At hour 0 there are 3 bacteria. How many are there at hour 10, and what is the total bacteria-count across all hours 0 through 10?`,
        a: `At hour 10: $3 \\times 2^{10} = 3072$. Total across hours 0 to 10 (11 terms): $3 \\times \\frac{2^{11}-1}{2-1} = 3 \\times 2047 = 6141$.`
      },
      {
        q: `Why can 2, 3, and 5 not all be terms in the same geometric sequence?`,
        a: `They cannot because it leads to a contradiction. If they are at positions $m$, $n$, $p$ in a GP, the algebra leads to $3^{m+p} = 2^m \\times 5^p$. The left side is always odd (a power of 3). The right side is always even (contains $2^m$). An odd number cannot equal an even number.`
      },
      {
        q: `How many ways can you climb 6 stairs if you take 1 or 2 stairs at a time?`,
        a: `13 ways. The counts follow Fibonacci: 1, 2, 3, 5, 8, 13 for $n = 1, 2, 3, 4, 5, 6$. Each count equals the sum of the two previous counts.`
      },
      {
        q: `Compute $73 + 67 + 61 + \\cdots + 7$.`,
        a: `The sum is 480. AP with $a = 73$, last term 7, $d = -6$. Count: $\\frac{(7-73)}{(-6)} + 1 = 12$. Sum: $12 \\times \\frac{(73+7)}{2} = 12 \\times 40 = 480$.`
      },
      {
        q: `Evaluate $1 + \\frac{1}{10} + \\frac{1}{100} + \\frac{1}{1000} + \\cdots$ using two different methods.`,
        a: `The sum is $\\frac{10}{9}$. Method 1: $a = 1$, $r = \\frac{1}{10}$. $S = \\frac{1}{1 - \\frac{1}{10}} = \\frac{10}{9}$. Method 2: let $x = 1.\\overline{1}$. Then $10x = 10 + x$, so $9x = 10$ and $x = \\frac{10}{9}$.`
      },
      {
        q: `An infinite geometric series has sum 12 and first term 4. What is the common ratio?`,
        a: `The ratio is $\\frac{2}{3}$. Use $S = \\frac{a}{1-r}$: $12 = \\frac{4}{1-r}$, so $1 - r = \\frac{1}{3}$, giving $r = \\frac{2}{3}$.`
      },
      {
        q: `Why does the sum of the first $n$ odd integers equal $n^2$?`,
        a: `Apply the AP formula to $1, 3, 5, \\ldots, 2n-1$: first term 1, last term $2n-1$, $n$ terms. Sum $= n \\times \\frac{(1 + 2n-1)}{2} = n \\times n = n^2$.`
      },
      {
        q: `Simplify $\\sqrt{6+\\sqrt{11}} + \\sqrt{6-\\sqrt{11}}$.`,
        a: `The answer is $\\sqrt{22}$. Let $E$ be the expression. $E^2 = (6+\\sqrt{11}) + 2\\sqrt{(6+\\sqrt{11})(6-\\sqrt{11})} + (6-\\sqrt{11}) = 12 + 2\\sqrt{25} = 22$. Since $E > 0$, $E = \\sqrt{22}$.`
      },
      {
        q: `Solve $rm = 27$, $mt = 72$, $tr = 6$. Find $r$, $m$, and $t$.`,
        a: `$r = \\frac{3}{2}$, $m = 18$, $t = 4$. Multiply all three: $(rmt)^2 = 27 \\times 72 \\times 6 = 11664$, so $rmt = 108$. Then $r = \\frac{108}{72} = \\frac{3}{2}$, $m = \\frac{108}{6} = 18$, $t = \\frac{108}{27} = 4$.`
      },
      {
        q: `A geometric sequence has 3 as its first term and 27 as its fifth term. Write out both possible complete sequences from term 1 to term 5.`,
        a: `From $3 \\cdot r^4 = 27$: $r = \\pm\\sqrt{3}$. Sequence with $r = \\sqrt{3}$: $3, 3\\sqrt{3}, 9, 9\\sqrt{3}, 27$. Sequence with $r = -\\sqrt{3}$: $3, -3\\sqrt{3}, 9, -9\\sqrt{3}, 27$.`
      },
      {
        q: `A tile company offers square tiles of side length 1 m, 2 m, 4 m, 8 m. The project needs 1 tile of each. What is the total area?`,
        a: `Total area is 85 square meters. The areas are 1, 4, 16, 64 a geometric series with $a = 1$, $r = 4$, $n = 4$ terms. Sum $= \\frac{4^4-1}{4-1} = \\frac{255}{3} = 85$.`
      },
      {
        q: `Evaluate the infinite continued fraction $1 + \\dfrac{6}{1 + \\dfrac{6}{1 + \\cdots}}$.`,
        a: `The value is 3. Let $x$ equal the expression. Then $x = 1 + \\frac{6}{x}$. Multiply: $x^2 = x + 6$, giving $(x-3)(x+2) = 0$. Since the expression is positive, $x = 3$.`
      },
      {
        q: `A sequence starts 1, 3, 7, 15, 31. Each term equals twice the previous term plus 1. What is the 100th term?`,
        a: `The 100th term is $2^{100} - 1$. The pattern is $b_n = 2^n - 1$: check $b_1 = 1$, $b_2 = 3$, $b_3 = 7$. The recurrence is satisfied: $2(2^{n-1}-1)+1 = 2^n - 1$.`
      },
      {
        q: `Can $\\frac{1}{2}$, $\\frac{1}{3}$, and $\\frac{1}{5}$ all be terms of the same arithmetic sequence? If yes, what is the common difference?`,
        a: `Yes. Write with denominator 30: $\\frac{1}{2} = \\frac{15}{30}$, $\\frac{1}{3} = \\frac{10}{30}$, $\\frac{1}{5} = \\frac{6}{30}$. All are multiples of $\\frac{1}{30}$. An AP with $d = \\frac{1}{30}$ contains all three.`
      },
      {
        q: `A musical scale must cover exactly one octave (frequency doubles) across 12 semitones. What is the ratio between consecutive semitones?`,
        a: `The ratio is $2^{\\tfrac{1}{12}}$, the 12th root of 2. After 12 steps of ratio $q$, the frequency must double: $q^{12} = 2$. Solving: $q = 2^{\\tfrac{1}{12}} \\approx 1.0595$.`
      },
      {
        q: `Given $a + b = 20$ and $a^3 + b^3 = 800$, find $a^2 + b^2$.`,
        a: `$a^2 + b^2 = 160$. Factor: $800 = 20(a^2-ab+b^2)$, so $a^2-ab+b^2 = 40$. From $(a+b)^2 = 400$: $3ab = 360$, so $ab = 120$. Then $a^2 + b^2 = 400 - 240 = 160$.`
      },
      {
        q: `An arithmetic sequence has two terms that are both integers. Why must every other term also be an integer?`,
        a: `Because the common difference is forced to be rational with a denominator that divides every term. If $a_j$ and $a_k$ are both integers, then $d = \\frac{(a_k - a_j)}{(k-j)}$, a ratio of integers. Every term $a_j + m \\cdot d$ reduces to an integer since the actual integer terms confirm the denominator divides out.`
      },
      {
        q: `In Zeno's paradox, Achilles is 10 times faster than the turtle, and the turtle starts 100 meters ahead. What is the total distance Achilles travels when he catches up?`,
        a: `Achilles travels $\\frac{1000}{9} \\approx 111.1$ meters. The distances form a geometric series: $100 + 10 + 1 + \\cdots$ with $a = 100$ and $r = \\frac{1}{10}$. Sum $= \\frac{100}{1 - \\frac{1}{10}} = \\frac{1000}{9}$.`
      }
    ],

    reference: {
      category: 'Quick Reference',
      title: 'Sequences and Series',
      sections: [
        <>
          <h2>Sequences</h2>

          <div className="lrn-definition">
            <span className="lrn-definition-term">nth term of arithmetic sequence</span>
            <div className="lrn-definition-desc">
              <div className="lrn-eq">
                <span>{`$$a_n = a + (n-1)d$$`}</span>
              </div>
              <p>When to use: find any term in an AP given the first term and common difference.</p>
            </div>
          </div>

          <div className="lrn-definition">
            <span className="lrn-definition-term">nth term of geometric sequence</span>
            <div className="lrn-definition-desc">
              <div className="lrn-eq">
                <span>{`$$a_n = a \\cdot r^{n-1}$$`}</span>
              </div>
              <p>When to use: find any term in a GP given the first term and common ratio.</p>
            </div>
          </div>
        </>,

        <>
          <h2>Arithmetic Series</h2>

          <div className="lrn-definition">
            <span className="lrn-definition-term">Arithmetic series word form</span>
            <div className="lrn-definition-desc">
              <div className="lrn-eq">
                <span>{`$$S = (\\text{number of terms}) \\times \\frac{\\text{first term} + \\text{last term}}{2}$$`}</span>
              </div>
              <p>
                When to use: sum a finite AP when you know the first term, last term, and count of
                terms.
              </p>
            </div>
          </div>

          <div className="lrn-definition">
            <span className="lrn-definition-term">Arithmetic series formula form</span>
            <div className="lrn-definition-desc">
              <div className="lrn-eq">
                <span>{`$$S = \\frac{n[2a + (n-1)d]}{2}$$`}</span>
              </div>
              <p>
                When to use: sum a finite AP when you know the first term, common difference, and
                count of terms.
              </p>
            </div>
          </div>

          <div className="lrn-definition">
            <span className="lrn-definition-term">Count terms in an AP</span>
            <div className="lrn-definition-desc">
              <div className="lrn-eq">
                <span>{`$$n = \\frac{a_n - a}{d} + 1$$`}</span>
              </div>
              <p>
                When to use: find how many terms lie between the first and last term of a finite AP.
              </p>
            </div>
          </div>
        </>,

        <>
          <h2>Special Arithmetic Sums</h2>

          <div className="lrn-definition">
            <span className="lrn-definition-term">Sum of first n positive integers</span>
            <div className="lrn-definition-desc">
              <div className="lrn-eq">
                <span>{`$$S = \\frac{n(n+1)}{2}$$`}</span>
              </div>
              <p>{`When to use: sum $1 + 2 + 3 + \\cdots + n$ directly.`}</p>
            </div>
          </div>

          <div className="lrn-definition">
            <span className="lrn-definition-term">Sum of first n positive odd integers</span>
            <div className="lrn-definition-desc">
              <div className="lrn-eq">
                <span>{`$$S = n^2$$`}</span>
              </div>
              <p>{`When to use: sum $1 + 3 + 5 + \\cdots + (2n-1)$ directly.`}</p>
            </div>
          </div>
        </>,

        <>
          <h2>Geometric Series</h2>

          <div className="lrn-definition">
            <span className="lrn-definition-term">Finite geometric series</span>
            <div className="lrn-definition-desc">
              <div className="lrn-eq">
                <span>{`$$S = \\frac{a(r^n - 1)}{r - 1} \\quad (r \\neq 1)$$`}</span>
              </div>
              <p>When to use: sum a finite GP with n terms when the ratio is not 1.</p>
            </div>
          </div>

          <div className="lrn-definition">
            <span className="lrn-definition-term">Geometric series and factoring</span>
            <div className="lrn-definition-desc">
              <div className="lrn-eq">
                <span>{`$$x^n - 1 = (x-1)(x^{n-1} + x^{n-2} + \\cdots + 1)$$`}</span>
              </div>
              <p>
                When to use: connect GP sums to polynomial factorizations, or derive the GP formula
                from scratch.
              </p>
            </div>
          </div>
        </>,

        <>
          <h2>Infinite Geometric Series</h2>

          <div className="lrn-definition">
            <span className="lrn-definition-term">Infinite geometric series</span>
            <div className="lrn-definition-desc">
              <div className="lrn-eq">
                <span>{`$$S = \\frac{a}{1-r} \\quad (|r| < 1)$$`}</span>
              </div>
              <p>
                When to use: sum a geometric series with infinitely many terms, provided the ratio
                is strictly between −1 and 1.
              </p>
            </div>
          </div>

          <div className="lrn-callout">
            <span className="lrn-callout-label">Convergence conditions</span>
            <ul className="lrn-list">
              <li>{`$|r| < 1$: series converges to $\\frac{a}{1-r}$`}</li>
              <li>{`$|r| \\geq 1$: series diverges (no finite sum)`}</li>
              <li>{`$r = -1$: partial sums oscillate; series is indeterminate`}</li>
            </ul>
          </div>
        </>,

        <>
          <h2>Means</h2>

          <div className="lrn-definition">
            <span className="lrn-definition-term">Arithmetic mean</span>
            <div className="lrn-definition-desc">
              <div className="lrn-eq">
                <span>{`$$\\frac{a + b}{2}$$`}</span>
              </div>
              <p>
                When to use: find the middle term of three consecutive AP terms, or the average of
                any two values.
              </p>
            </div>
          </div>

          <div className="lrn-definition">
            <span className="lrn-definition-term">Geometric mean</span>
            <div className="lrn-definition-desc">
              <div className="lrn-eq">
                <span>{`$$\\sqrt{ab}$$`}</span>
              </div>
              <p>When to use: find the middle term of three consecutive positive GP terms.</p>
            </div>
          </div>

          <div className="lrn-callout">
            <span className="lrn-callout-label">Middle term properties</span>
            <ul className="lrn-list">
              <li>AP: middle term = arithmetic mean of its symmetric neighbors</li>
              <li>
                GP: middle term = geometric mean of its symmetric neighbors (for positive terms)
              </li>
            </ul>
          </div>
        </>,

        <>
          <h2>Telescoping</h2>

          <div className="lrn-definition">
            <span className="lrn-definition-term">Partial fraction for telescoping</span>
            <div className="lrn-definition-desc">
              <div className="lrn-eq">
                <span>{`$$\\frac{1}{k(k+1)} = \\frac{1}{k} - \\frac{1}{k+1}$$`}</span>
              </div>
              <p>
                When to use: convert a product-denominator fraction into a difference, enabling
                telescoping cancellation.
              </p>
            </div>
          </div>

          <div className="lrn-callout">
            <span className="lrn-callout-label">Telescoping patterns</span>
            <ul className="lrn-list">
              <li>{`Telescoping sum: write each term as $f(k) - f(k+1)$. The series collapses to $f(1) - f(n+1)$.`}</li>
              <li>{`Telescoping product: write each factor as $\\frac{f(k)}{f(k+1)}$. The product collapses to $\\frac{f(1)}{f(n+1)}$.`}</li>
            </ul>
          </div>
        </>,

        <>
          <h2>Special Formulas</h2>

          <div className="lrn-definition">
            <span className="lrn-definition-term">Sum of cubes factoring</span>
            <div className="lrn-definition-desc">
              <div className="lrn-eq">
                <span>{`$$a^3 + b^3 = (a+b)(a^2 - ab + b^2)$$`}</span>
              </div>
              <p>{`When to use: when you know $a+b$ and $a^3+b^3$ and need $a^2 + b^2$ or $ab$.`}</p>
            </div>
          </div>

          <div className="lrn-definition">
            <span className="lrn-definition-term">Binomial square</span>
            <div className="lrn-definition-desc">
              <div className="lrn-eq">
                <span>{`$$(x + \\frac{1}{x})^2 = x^2 + 2 + \\frac{1}{x^2}$$`}</span>
              </div>
              <p>{`When to use: convert a known value of $x + \\frac{1}{x}$ into $x^2 + \\frac{1}{x^2}$ by squaring and subtracting 2.`}</p>
            </div>
          </div>

          <div className="lrn-definition">
            <span className="lrn-definition-term">Cube sum identity</span>
            <div className="lrn-definition-desc">
              <div className="lrn-eq">
                <span>{`$$(a+b)^3 + (a-b)^3 = 2a^3 + 6ab^2$$`}</span>
              </div>
              <p>{`When to use: combine two cube expressions in a sum/difference pair to eliminate the odd-power cross terms and leave only $a^3$ and $ab^2$.`}</p>
            </div>
          </div>
        </>,

        <>
          <h2>Fibonacci and Recurrences</h2>

          <div className="lrn-definition">
            <span className="lrn-definition-term">Fibonacci recurrence</span>
            <div className="lrn-definition-desc">
              <div className="lrn-eq">
                <span>{`$$F_n = F_{n-1} + F_{n-2} \\text{ with } F_1 = F_2 = 1$$`}</span>
              </div>
              <p>
                When to use: generate Fibonacci numbers or solve counting problems where each count
                depends on the previous two.
              </p>
            </div>
          </div>

          <div className="lrn-definition">
            <span className="lrn-definition-term">Fibonacci closed form</span>
            <div className="lrn-definition-desc">
              <div className="lrn-eq">
                <span>{`$$F_n = A\\phi^n + B\\psi^n \\quad \\phi = \\frac{1+\\sqrt{5}}{2}, \\quad \\psi = \\frac{1-\\sqrt{5}}{2}$$`}</span>
              </div>
              <p>
                When to use: compute the nth Fibonacci number directly without iterating through all
                previous terms.
              </p>
            </div>
          </div>
        </>,

        <>
          <h2>Self-Similar Expressions</h2>

          <div className="lrn-callout">
            <span className="lrn-callout-label">Method</span>
            <p>
              Set the entire expression equal to {`$x$`}. Substitute {`$x$`} for the inner repeated
              copy. Solve. Reject roots that violate sign constraints.
            </p>
          </div>

          <ul className="lrn-list">
            <li>{`Nested radical $x = \\sqrt{C - x}$: square both sides to get $x^2 + x - C = 0$.`}</li>
            <li>{`Continued fraction $x = A + \\frac{B}{x}$: multiply through to get $x^2 - Ax - B = 0$.`}</li>
          </ul>
        </>,

        <>
          <h2>Well-Tempered Scale</h2>

          <div className="lrn-definition">
            <span className="lrn-definition-term">Equal temperament ratio</span>
            <div className="lrn-definition-desc">
              <div className="lrn-eq">
                <span>{`$$q = 2^{\\tfrac{1}{12}} \\text{ from } q^{12} = 2$$`}</span>
              </div>
              <p>
                When to use: find the frequency ratio between consecutive semitones in the standard
                Western tuning system.
              </p>
            </div>
          </div>

          <div className="lrn-callout">
            <span className="lrn-callout-label">Key musical ratios (pure intervals)</span>
            <ul className="lrn-list">
              <li>{`Octave: $\\frac{2}{1}$`}</li>
              <li>{`Perfect fifth: $\\frac{3}{2}$`}</li>
              <li>{`Perfect fourth: $\\frac{4}{3}$`}</li>
              <li>{`Major third: $\\frac{5}{4}$`}</li>
              <li>{`Minor third: $\\frac{6}{5}$`}</li>
            </ul>
          </div>

          <p>
            <strong>Inconsistency:</strong> The equal temperament fifth (
            {`$q^7 = 2^{\\tfrac{7}{12}}$`}) and the pure fifth ({`$\\frac{3}{2}$`}) are not equal.
            No common ratio {`$q$`} can satisfy both {`$q^{12} = 2$`} and {`$q^7 = \\frac{3}{2}$`}{' '}
            simultaneously.
          </p>
        </>,

        <>
          <h2>Symmetric Systems</h2>

          <div className="lrn-callout">
            <span className="lrn-callout-label">Additive symmetry</span>
            <p>
              Each equation omits exactly one variable. Add all equations to get{' '}
              {`$(k-1)(a+b+\\cdots) = \\text{total}$`}. Subtract each equation from the total to
              recover each variable.
            </p>
          </div>

          <div className="lrn-callout">
            <span className="lrn-callout-label">Multiplicative symmetry (product pairs)</span>
            <p>
              Multiply all equations to get{' '}
              {`$(xyz\\cdots)^2 = \\text{product of right-hand sides}$`}. Take the square root to
              get {`$xyz\\cdots$`}. Divide by each equation's right-hand side to recover each
              variable.
            </p>
          </div>
        </>,

        <>
          <h2>Edge Cases and Warnings</h2>

          <ul className="lrn-list">
            <li>The word "series" is both singular and plural. Never say "serieses."</li>
            <li>{`GP sum formula $\\frac{a(r^n-1)}{r-1}$ is undefined at $r = 1$. Use $S = na$ instead.`}</li>
            <li>{`Infinite GP formula $\\frac{a}{1-r}$ requires $|r| < 1$. When $|r| \\geq 1$ the series has no finite sum and the formula does not apply.`}</li>
            <li>{`Negative GP ratios produce alternating-sign sequences. Both $r = +\\sqrt{3}$ and $r = -\\sqrt{3}$ can be valid answers.`}</li>
            <li>
              An AP with two integer terms forces all terms to be integers. A GP with integer terms
              can eventually produce non-integer terms.
            </li>
          </ul>
        </>
      ]
    },

    customCss:
      '.MafsView { --mafs-bg: transparent; --mafs-fg: rgba(240,240,250,1); --mafs-line-color: rgba(240,240,250,0.15); }'
  }

  return config
}

export default function SequencesAndSeries() {
  const config = useConfig()
  return <LearningTemplate config={config} />
}
