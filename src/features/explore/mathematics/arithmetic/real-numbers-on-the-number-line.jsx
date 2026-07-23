import { LearningTemplate } from '../../../../components/learning/learning-template'
import { useVizColors } from '../../../../hooks/use-viz-colors'
import * as viz from './real-numbers-on-the-number-line-viz'

function useConfig() {
  const C = useVizColors()
  const config = {
    cssPrefix: 'rnl',
    documentTitle: 'Real Numbers on the Number Line - AETHER',
    learning: {
      groupTitle: 'Powers, Roots, and Real Numbers',
      category: 'Arithmetic',
      title: 'Real Numbers on the Number Line',
      subtitle:
        'You can bracket √2 between decimals, but where exactly does it sit? Use geometry to land on the exact point.',
      sections: [
        {
          id: 'the-missing-point',
          title: 'Where Exactly Does √2 Sit?',
          content: (
            <>
              <h2>Where Exactly Does √2 Sit?</h2>

              <div className="lrn-predict">
                <span className="lrn-predict-label">PREDICT</span>
                <p>
                  You already know √2 is a real number and is irrational. You can trap it: it lies
                  between 1.41 and 1.42. Can you ever name the one exact point where it sits?
                </p>
                <details className="lrn-predict-reveal">
                  <summary>Check your thinking</summary>
                  <p>
                    Decimals only trap √2 in a smaller and smaller box. They never land on it. To
                    mark the exact point, you need a different tool: a ruler and compass. That is
                    what this page builds.
                  </p>
                </details>
              </div>

              <p>
                Earlier you learned that √2 means the number whose square is 2. You also learned it
                is irrational, so its decimal never ends and never repeats. You can squeeze it
                tighter and tighter between decimals.
              </p>

              <p>
                Squeezing only shrinks the box around √2. Write 1.4 and 1.5, then 1.41 and 1.42,
                then 1.414 and 1.415. The box keeps shrinking. But it never closes onto a single
                point.
              </p>

              <div className="lrn-callout lrn-tip">
                <span className="lrn-callout-label">The Real Question</span>
                <p>
                  A decimal answer is always rounded. So here is the puzzle: is there an exact spot
                  on the number line that is √2, not a rounded stand-in? The answer is yes, and
                  geometry finds it.
                </p>
              </div>

              <div className="lrn-elaborate">
                <span className="lrn-elaborate-label">WHY DECIMALS ARE NOT ENOUGH</span>
                <p>
                  Each decimal you write is a rational number. None of them equals √2, because √2 is
                  irrational. So no matter how many digits you add, you only name a nearby point,
                  not the exact one. You need a method that builds the length itself.
                </p>
              </div>
            </>
          )
        },
        {
          id: 'compass-transfer',
          title: 'Build √2 with a Compass',
          content: (
            <>
              <h2>Build √2 with a Compass</h2>

              <div className="lrn-predict">
                <span className="lrn-predict-label">PREDICT</span>
                <p>
                  A square with sides of 1 has a diagonal. By the Pythagorean rule, that diagonal
                  has length √(1² + 1²). What number is that?
                </p>
                <details className="lrn-predict-reveal">
                  <summary>Check your thinking</summary>
                  <p>
                    {`$\\sqrt{1^2 + 1^2} = \\sqrt{2}$`}. The diagonal of a unit square is exactly √2
                    long. That gives you a real length you can pick up and move.
                  </p>
                </details>
              </div>

              <p>
                Start with a square whose sides are each 1 unit long. Draw its diagonal. The
                Pythagorean rule gives its length:
              </p>

              <div className="lrn-eq lrn-eq-hero">
                <span>{`$$\\text{diagonal} = \\sqrt{1^2 + 1^2} = \\sqrt{2}$$`}</span>
              </div>

              <p>
                Now comes the new move. Open a compass to that diagonal length. Stand the compass
                point at 0. Swing an arc down until it touches the number line. The arc lands on one
                exact point. That point is √2.
              </p>

              <div className="lrn-insight">
                A compass copies a length without changing it. So the point where the arc lands is
                exactly √2, not a rounded decimal.
              </div>

              <div className="lrn-graph">
                <viz.CompassTransferViz C={C} />
              </div>

              <div className="lrn-elaborate">
                <span className="lrn-elaborate-label">WHY THIS LANDS EXACTLY</span>
                <p>
                  The diagonal is √2 long. The compass keeps that length fixed as it turns. Every
                  point on the arc is the same distance from 0. So the spot where the arc meets the
                  line is √2 units from 0. That is the exact point.
                </p>
              </div>

              <div className="lrn-faded">
                <div className="lrn-faded-phase">
                  <span className="lrn-faded-label">COMPLETE EXAMPLE</span>
                  <p>Mark √2 on the number line.</p>
                  <ol className="lrn-list">
                    <li>Draw a square on the segment from 0 to 1. Each side is 1 unit.</li>
                    <li>Draw the diagonal of that square. Its length is √2.</li>
                    <li>Open the compass to match the diagonal exactly.</li>
                    <li>Put the compass point at 0 and swing an arc down to the line.</li>
                    <li>The arc meets the line at √2. Mark that point.</li>
                  </ol>
                </div>
                <div className="lrn-faded-phase lrn-faded-partial">
                  <span className="lrn-faded-label">YOUR TURN: PARTIAL</span>
                  <p>Mark √2 starting from a square drawn above the line, not on it.</p>
                  <ol className="lrn-list">
                    <li>Draw a unit square. Its diagonal is still √2 long.</li>
                    <li>Open the compass to that diagonal.</li>
                    <li>Stand the compass at 0. Swing the arc to the line. Where does it land?</li>
                  </ol>
                </div>
                <div className="lrn-faded-phase">
                  <span className="lrn-faded-label">INDEPENDENT PRACTICE</span>
                  <p>
                    A friend says √2 is just 1.414. Use the compass idea to explain why 1.414 is
                    close but not the exact point.
                  </p>
                </div>
              </div>

              <div className="lrn-callout lrn-success">
                <span className="lrn-callout-label">You Can Now</span>
                <p>
                  Locate √2 as one exact point on the line, using only a ruler and compass. No
                  rounding needed.
                </p>
              </div>

              <div className="lrn-self-explain">
                <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
                <p>Why does the compass arc land on an exact point, while decimals never do?</p>
                <details className="lrn-self-explain-reveal">
                  <summary>Expert explanation</summary>
                  <p>
                    The compass carries the real √2 length, built from the square's diagonal. It
                    does not round. A decimal is always a rational number that misses √2. The
                    compass moves the true length straight onto the line.
                  </p>
                </details>
              </div>
            </>
          )
        },
        {
          id: 'spiral-of-theodorus',
          title: 'Build √3, √5, and Beyond',
          content: (
            <>
              <h2>Build √3, √5, and Beyond</h2>

              <div className="lrn-predict">
                <span className="lrn-predict-label">PREDICT</span>
                <p>
                  You built √2 from a unit square. Suppose you make a right triangle with legs √2
                  and 1. What length is its longest side?
                </p>
                <details className="lrn-predict-reveal">
                  <summary>Check your thinking</summary>
                  <p>
                    {`$\\sqrt{(\\sqrt{2})^2 + 1^2} = \\sqrt{2 + 1} = \\sqrt{3}$`}. Add one more unit
                    leg and you get √3. Repeat the trick to climb to any square root.
                  </p>
                </details>
              </div>

              <p>
                The compass trick works for more than √2. Stack right triangles, each adding a leg
                of length 1. The longest side grows one square root at a time.
              </p>

              <p>
                Start with the unit square's diagonal, length √2. Build a new right triangle: one
                leg is that √2 side, the other leg is a fresh unit length. The longest side is now
                √3. Keep going:
              </p>

              <div className="lrn-eq">
                <span>{`$$\\sqrt{2},\\ \\sqrt{3},\\ \\sqrt{4},\\ \\sqrt{5},\\ \\sqrt{6},\\ \\ldots$$`}</span>
              </div>

              <p>
                This stack of triangles is called the <strong>spiral of Theodorus</strong>. Each new
                triangle adds one unit leg. The longest side jumps from √n to √(n+1).
              </p>

              <div className="lrn-graph">
                <viz.SpiralOfTheodorusViz C={C} />
              </div>

              <p>
                Each longest side is a real length. Swing it onto the line with a compass, exactly
                like you did for √2. So √3, √5, √6, and any √n become exact points on the line.
              </p>

              <div className="lrn-elaborate">
                <span className="lrn-elaborate-label">WHY EACH STEP WORKS</span>
                <p>
                  Each triangle is a right triangle with legs √n and 1. The Pythagorean rule gives
                  the longest side: {`$\\sqrt{(\\sqrt{n})^2 + 1^2} = \\sqrt{n+1}$`}. So one unit leg
                  raises the square root by exactly one each time.
                </p>
              </div>

              <div className="lrn-faded">
                <div className="lrn-faded-phase">
                  <span className="lrn-faded-label">COMPLETE EXAMPLE</span>
                  <p>Build √3 from √2.</p>
                  <ol className="lrn-list">
                    <li>Take the √2 length (the unit square's diagonal).</li>
                    <li>Make a right triangle: one leg is √2, the other leg is 1.</li>
                    <li>The longest side is {`$\\sqrt{2 + 1} = \\sqrt{3}$`}.</li>
                    <li>Swing that length onto the line with a compass. It lands on √3.</li>
                  </ol>
                </div>
                <div className="lrn-faded-phase lrn-faded-partial">
                  <span className="lrn-faded-label">YOUR TURN: PARTIAL</span>
                  <p>Build √4 from √3.</p>
                  <ol className="lrn-list">
                    <li>Take the √3 length you just built.</li>
                    <li>Make a right triangle with legs √3 and 1.</li>
                    <li>The longest side is {`$\\sqrt{3 + 1} = ?$`} Which whole number is that?</li>
                  </ol>
                </div>
                <div className="lrn-faded-phase">
                  <span className="lrn-faded-label">INDEPENDENT PRACTICE</span>
                  <p>
                    You want √6. From which square root do you start, and what does the new triangle
                    add?
                  </p>
                </div>
              </div>

              <div className="lrn-callout lrn-success">
                <span className="lrn-callout-label">You Can Now</span>
                <p>
                  Build any √n as an exact length, then place it on the line with a compass. Every
                  square root has an exact home.
                </p>
              </div>

              <div className="lrn-self-explain">
                <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
                <p>The spiral builds √4. But √4 = 2, a whole number. Why is that fine?</p>
                <details className="lrn-self-explain-reveal">
                  <summary>Expert explanation</summary>
                  <p>
                    The triangle method does not care whether the answer is whole or irrational. The
                    longest side of the √3-and-1 triangle is √4, which equals 2. The arc simply
                    lands on the point already labeled 2. The method stays correct.
                  </p>
                </details>
              </div>
            </>
          )
        },
        {
          id: 'points-and-reals',
          title: 'Every Point Is One Real Number',
          content: (
            <>
              <h2>Every Point Is One Real Number</h2>

              <div className="lrn-predict">
                <span className="lrn-predict-label">PREDICT</span>
                <p>
                  You can now mark fractions and square roots on the line. Pick any point at all on
                  the line. Do you think it always names a real number?
                </p>
                <details className="lrn-predict-reveal">
                  <summary>Check your thinking</summary>
                  <p>
                    Yes. Every point on the line is exactly one real number. And every real number
                    is exactly one point. The two match up perfectly, with nothing left over.
                  </p>
                </details>
              </div>

              <p>
                Put the pieces together. Whole numbers sit at evenly spaced ticks. Fractions sit
                between them. Square roots like √2 and √3 sit at the points the compass found. The
                number π sits at its own exact point too.
              </p>

              <div className="lrn-graph">
                <viz.RealsAsPointsViz C={C} />
              </div>

              <p>
                You learned before that the reals have no gaps. Here is the geometric picture of
                that fact. There is no empty spot on the line waiting for a number. There is no real
                number without a home on the line.
              </p>

              <div className="lrn-eq lrn-eq-hero">
                <span>{`$$\\text{every point} \\longleftrightarrow \\text{exactly one real number}$$`}</span>
              </div>

              <p>
                Order still works the same way. Reading left to right means smallest to largest. So
                you can compare an irrational to a nearby fraction just by checking which one sits
                further left.
              </p>

              <div className="lrn-elaborate">
                <span className="lrn-elaborate-label">WHY THE MATCH IS PERFECT</span>
                <p>
                  Every real number marks one position, so it lands on one point. Every point sits
                  at one distance from 0, so it names one real number. No point is skipped, and no
                  real number is missing. The line and the reals are two views of the same thing.
                </p>
              </div>

              <div className="lrn-self-explain">
                <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
                <p>
                  Between 1.41 and 1.42 sits √2. How do you know √2 is to the left of 1.42 on the
                  line?
                </p>
                <details className="lrn-self-explain-reveal">
                  <summary>Expert explanation</summary>
                  <p>
                    √2 is about 1.414, which is less than 1.42. Smaller numbers sit further left. So
                    √2 is left of 1.42 and right of 1.41. The bracketing and the line agree.
                  </p>
                </details>
              </div>
            </>
          )
        }
      ]
    },
    practice: [
      {
        q: `What is the length of the diagonal of a square with sides of 1 unit? Show the Pythagorean step.`,
        a: `The diagonal is $\\sqrt{2}$. By the Pythagorean rule, diagonal $= \\sqrt{1^2 + 1^2} = \\sqrt{1 + 1} = \\sqrt{2}$. This is a real length you can copy with a compass.`
      },
      {
        q: `Describe how to mark √2 as an exact point on the number line.`,
        a: `Draw a unit square on the segment from 0 to 1. Draw its diagonal; it is $\\sqrt{2}$ long. Open a compass to that diagonal. Stand the compass at 0 and swing an arc down to the line. The arc lands on $\\sqrt{2}$.`
      },
      {
        q: `Why does the compass arc land on an exact point, while a decimal like 1.414 does not?`,
        a: `The compass carries the true $\\sqrt{2}$ length built from the square's diagonal, so it does not round. A decimal like 1.414 is a rational number that misses $\\sqrt{2}$, since $\\sqrt{2}$ is irrational. The compass moves the exact length onto the line.`
      },
      {
        q: `You have a right triangle with legs √2 and 1. What is the length of its longest side?`,
        a: `$\\sqrt{(\\sqrt{2})^2 + 1^2} = \\sqrt{2 + 1} = \\sqrt{3}$. Adding a unit leg to the $\\sqrt{2}$ length builds $\\sqrt{3}$.`
      },
      {
        q: `In the spiral of Theodorus, you have a side of length √5. You add one more unit leg. What length do you get?`,
        a: `$\\sqrt{(\\sqrt{5})^2 + 1^2} = \\sqrt{5 + 1} = \\sqrt{6}$. Each unit leg raises the square root by exactly one, so $\\sqrt{5}$ becomes $\\sqrt{6}$.`
      },
      {
        q: `Build √4 with the spiral method. From which length do you start, and what is the result?`,
        a: `Start from $\\sqrt{3}$. Make a right triangle with legs $\\sqrt{3}$ and 1. The longest side is $\\sqrt{3 + 1} = \\sqrt{4} = 2$. The arc lands on the point already labeled 2.`
      },
      {
        q: `Once you have a √3 length, how do you place √3 on the number line?`,
        a: `Open a compass to the $\\sqrt{3}$ length. Stand the compass at 0 and swing an arc down to the line. The arc meets the line at $\\sqrt{3}$, an exact point.`
      },
      {
        q: `Is √2 to the left or to the right of 1.42 on the number line? Explain.`,
        a: `To the left. $\\sqrt{2}$ is about 1.414, which is less than 1.42. Smaller numbers sit further left, so $\\sqrt{2}$ is left of 1.42.`
      },
      {
        q: `True or false: some points on the number line do not name any real number. Explain.`,
        a: `False. Every point on the line names exactly one real number, and every real number sits at exactly one point. The line has no gaps.`
      },
      {
        q: `A classmate says √2 equals 1.41421356. Is that exactly correct? Explain using what you built.`,
        a: `No. That decimal is rounded. $\\sqrt{2}$ is irrational, so its decimal never ends. The compass construction gives the exact point; any written decimal only gets close.`
      },
      {
        q: `Why can a spiral of Theodorus build √n for any whole number n greater than 1?`,
        a: `Each triangle has legs $\\sqrt{n}$ and 1, so its longest side is $\\sqrt{n + 1}$. Starting from $\\sqrt{2}$ and adding unit legs, you reach $\\sqrt{3}, \\sqrt{4}, \\sqrt{5}$, and onward to any $\\sqrt{n}$.`
      },
      {
        q: `Order these from smallest to largest using their positions on the line: $\\frac{3}{2}$, $\\sqrt{2}$, $1$.`,
        a: `Smallest to largest: $1$, $\\sqrt{2}$, $\\frac{3}{2}$. On the line: $1$ is at 1, $\\sqrt{2} \\approx 1.414$ sits just right of it, and $\\frac{3}{2} = 1.5$ sits further right.`
      }
    ],
    reference: {
      category: 'Quick Reference',
      title: 'Real Numbers on the Number Line',
      sections: [
        <>
          <h2>The Key Fact</h2>

          <div className="lrn-eq lrn-eq-hero">
            <span>{`$$\\text{diagonal of a unit square} = \\sqrt{2}$$`}</span>
          </div>
          <p>
            <strong>When to use:</strong> Whenever you need a real √2 length to copy onto the line.
            The diagonal of a 1-by-1 square is exactly √2.
          </p>

          <div className="lrn-eq lrn-eq-hero">
            <span>{`$$\\text{every point} \\longleftrightarrow \\text{exactly one real number}$$`}</span>
          </div>
          <p>
            <strong>When to use:</strong> Whenever you classify a point. Every point names one real
            number; every real number sits at one point. No gaps.
          </p>
        </>,
        <>
          <h2>Procedure: Place √2 on the Line</h2>

          <ol className="lrn-list">
            <li>Draw a unit square on the segment from 0 to 1.</li>
            <li>Draw its diagonal. The diagonal is √2 long.</li>
            <li>Open a compass to match the diagonal.</li>
            <li>Stand the compass point at 0 and swing an arc to the line.</li>
            <li>The arc meets the line at √2. Mark that exact point.</li>
          </ol>
          <p>
            <strong>When to use:</strong> Any time you need √2 as an exact point, not a rounded
            decimal.
          </p>
        </>,
        <>
          <h2>Procedure: Build Any √n (Spiral of Theodorus)</h2>

          <ol className="lrn-list">
            <li>Start with the √2 length (the unit square's diagonal).</li>
            <li>Make a right triangle: one leg is your current length, the other leg is 1.</li>
            <li>The longest side grows from √n to {`$\\sqrt{n+1}$`} by the Pythagorean rule.</li>
            <li>Repeat to reach √3, √4, √5, and beyond.</li>
            <li>Swing each length onto the line with a compass.</li>
          </ol>
          <p>
            <strong>When to use:</strong> Any time you need to place a square root other than √2 on
            the line.
          </p>
        </>,
        <>
          <h2>Ordering and Comparison</h2>

          <ul className="lrn-list">
            <li>
              <strong>Left to right means smallest to largest.</strong> <em>When to use:</em>{' '}
              Comparing any two numbers, including an irrational and a fraction.
            </li>
            <li>
              <strong>√2 ≈ 1.414.</strong> It sits between 1.41 and 1.42 on the line.{' '}
              <em>When to use:</em> Checking where an irrational falls against nearby decimals.
            </li>
            <li>
              <strong>π ≈ 3.14159.</strong> It is an irrational point, just like √2.{' '}
              <em>When to use:</em> Remembering that famous irrationals also have exact points.
            </li>
          </ul>
        </>
      ]
    },
    customCss:
      '.MafsView { --mafs-bg: transparent; --mafs-fg: var(--text-primary); --mafs-line-color: var(--border-subtle); }'
  }
  return config
}

export default function RealNumbersOnTheNumberLine() {
  const config = useConfig()
  return <LearningTemplate config={config} />
}
