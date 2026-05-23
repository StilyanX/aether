import { LearningTemplate } from '../../../../components/learning/learning-template'
import { ExponentLawsViz, NumberLineViz, PemdasViz } from '../../../../components/viz'

const PRACTICE_CARDS = [
  {
    q: 'Evaluate $2 + 3 \\times 4$.',
    a: '14. Multiplication runs before addition. $3 \\times 4 = 12$, then $2 + 12 = 14$. Adding first gives 20, which is wrong.'
  },
  {
    q: 'Evaluate $17 - 2 \\times 3^2$.',
    a: '$-1$. Powers first: $3^2 = 9$. Then $2 \\times 9 = 18$. Finally $17 - 18 = -1$.'
  },
  {
    q: 'Is $0$ positive, negative, or neither?',
    a: 'Neither. Zero sits at the origin. It is nonnegative ($0 \\geq 0$) and nonpositive ($0 \\leq 0$), but never positive or negative.'
  },
  {
    q: 'Why can $\\sqrt{2}$ never equal a fraction of integers?',
    a: 'Its decimal never ends and never repeats. Every fraction of integers either ends or repeats. So no fraction can equal $\\sqrt{2}$.'
  },
  {
    q: 'Compute $37 \\times 25 \\times 4$ in your head.',
    a: '3700. Regroup: $37 \\times (25 \\times 4) = 37 \\times 100 = 3700$. Commutative and associative laws let you pick any order.'
  },
  {
    q: 'Does $a + b = b + a$ always hold? Does $a - b = b - a$ always hold?',
    a: 'Addition: yes. Subtraction: no. $5 - 3 = 2$ but $3 - 5 = -2$. Order matters for subtraction and division.'
  },
  {
    q: 'How many ways can you put parentheses on $2 \\cdot 3 \\cdot 4 \\cdot 5$ without reordering?',
    a: 'Five ways. Each gives 120, since multiplication is associative. That is why we usually drop the parentheses.'
  },
  {
    q: 'Compute $1001 \\times 20$ by distributing.',
    a: '20020. Split $1001 = 1000 + 1$. Then $1001 \\times 20 = 1000 \\times 20 + 1 \\times 20 = 20000 + 20 = 20020$.'
  },
  {
    q: 'Compute $1 + 2 + 3 + \\cdots + 100$.',
    a: '5050. Pair the first and last: $1 + 100 = 101$. Fifty such pairs. $50 \\times 101 = 5050$.'
  },
  {
    q: 'Expand $(a + b)(m + n)$.',
    a: '$am + an + bm + bn$. Each term of the first sum multiplies each term of the second.'
  },
  {
    q: 'Factor $99 + 72$ to compute $\\frac{99 + 72}{9}$ quickly.',
    a: '19. Both share 9: $99 + 72 = 9(11 + 8)$. So $\\frac{9(11+8)}{9} = 11 + 8 = 19$.'
  },
  {
    q: 'Evaluate $x + 3$, $2x$, $x^2 + 3$, $3x^2$ when $x = 6$.',
    a: '$9, 12, 39, 108$. Replace $x$ with 6, then follow PEMDAS. The exponent in $3x^2$ touches only $x$, not the 3.'
  },
  {
    q: 'What does $3x^2$ mean when $x = 4$? Does it equal $(3x)^2$?',
    a: '$3x^2 = 3 \\cdot 16 = 48$. $(3x)^2 = 12^2 = 144$. They are different. The exponent attaches to $x$ alone.'
  },
  {
    q: 'Simplify $5x + 3x$.',
    a: '$8x$. Both terms share $x$. Factor it out: $(5 + 3)x = 8x$. The distributive law in reverse.'
  },
  {
    q: 'Is $5x^2 + 6x = 11x^2$ or $11x$?',
    a: 'Neither. $x^2$ and $x$ are not the same variable expression. You can only factor: $5x^2 + 6x = x(5x + 6)$.'
  },
  {
    q: 'Expand $2(x + 7)$.',
    a: '$2x + 14$. Distribute: $2 \\cdot x = 2x$ and $2 \\cdot 7 = 14$.'
  },
  {
    q: 'Factor $3x + 6$.',
    a: '$3(x + 2)$. Both terms share 3. Check: $3(x+2) = 3x + 6$.'
  },
  {
    q: 'Subtract $(x + 3) - (3x + 9)$.',
    a: '$-2x - 6$. The minus flips every sign inside: $x + 3 - 3x - 9 = -2x - 6$.'
  },
  {
    q: 'Factor $n(2n + 1) + 5(2n + 1)$.',
    a: '$(n + 5)(2n + 1)$. Both terms share $(2n+1)$. Treat it as one factor and pull it out.'
  },
  {
    q: 'Simplify $y^2 \\cdot y^4$.',
    a: '$y^6$. Product rule: $a^b \\cdot a^c = a^{b+c}$. Count the $y$’s: $2 + 4 = 6$.'
  },
  {
    q: 'Simplify $(v^3)^5$.',
    a: '$v^{15}$. Power-of-power rule: $(a^b)^c = a^{bc}$. Each of the 5 copies of $v^3$ has 3 factors.'
  },
  {
    q: 'Simplify $(2x)^3$.',
    a: '$8x^3$. Power-of-product rule: $(ab)^c = a^c b^c$. So $2^3 \\cdot x^3 = 8x^3$.'
  },
  {
    q: 'Does $(2 + x)^3 = 2^3 + x^3$?',
    a: 'No. The power-of-product rule needs a product, not a sum. Test with $x = 1$: $3^3 = 27$, but $1 + 1 = 2$.'
  },
  {
    q: 'Simplify $\\frac{x^7}{x^3}$.',
    a: '$x^4$. Quotient rule: $\\frac{a^b}{a^c} = a^{b-c}$. Three $x$’s cancel from seven, leaving four.'
  },
  {
    q: 'What is $2^{-3}$?',
    a: '$\\frac{1}{8}$. Negative exponent rule: $a^{-p} = \\frac{1}{a^p}$. So $2^{-3} = \\frac{1}{2^3} = \\frac{1}{8}$.'
  },
  {
    q: 'What is $\\frac{1}{3^{-2}}$?',
    a: '$9$. Reciprocate the negative exponent: $\\frac{1}{a^{-p}} = a^p$. So $\\frac{1}{3^{-2}} = 3^2 = 9$.'
  },
  {
    q: 'Is $\\frac{3 + 2x}{5 + 3x}$ equal to $\\frac{3}{5}$?',
    a: 'No. The 3 and 5 are terms inside sums, not factors of the whole top and bottom. Only factors cancel.'
  },
  {
    q: 'Simplify $\\frac{3x - 6}{x^2 - 2x}$.',
    a: '$\\frac{3}{x}$. Factor: top $= 3(x - 2)$, bottom $= x(x - 2)$. The $(x-2)$ cancels.'
  },
  {
    q: 'Add $\\frac{2}{3x} + \\frac{3}{x}$.',
    a: '$\\frac{11}{3x}$. The LCD is $3x$. Rewrite $\\frac{3}{x} = \\frac{9}{3x}$. Add: $\\frac{2 + 9}{3x} = \\frac{11}{3x}$.'
  },
  {
    q: 'The temperature starts at $+3$ and drops $5$. Where does it end?',
    a: '$-2$. Adding $-5$ moves you left on the number line. $3 + (-5) = -2$.'
  },
  {
    q: 'Why must $(-3) \\times 5 = -15$?',
    a: 'Either by commutativity, $(-3) \\cdot 5 = 5 \\cdot (-3) = (-3) + (-3) + (-3) + (-3) + (-3) = -15$, or by sign rule: minus times plus is minus.'
  },
  {
    q: 'Why must $(-3) \\times (-5) = +15$?',
    a: 'From the distributive law: $(-3)(5 + (-5)) = (-3)(0) = 0$. So $(-15) + (-3)(-5) = 0$. Therefore $(-3)(-5) = 15$.'
  },
  {
    q: 'If $a = b$, does $b = a$? What is this rule called?',
    a: 'Yes. This is the symmetric property of equality. Both sides of an equation are interchangeable.'
  },
  {
    q: 'If $a = b$ and $b = c$, what can you conclude?',
    a: '$a = c$. This is the transitive property of equality. Equality chains through.'
  },
  {
    q: 'If $\\frac{73}{43} = \\frac{511}{301}$, what does cross-multiplying give?',
    a: '$73 \\times 301 = 43 \\times 511$. Cross-multiplication: $\\frac{a}{b} = \\frac{c}{d} \\Rightarrow ad = bc$.'
  },
  {
    q: 'Shauna picks $x$, adds 3, doubles, subtracts $x$, subtracts 4, subtracts $x$. What does she get?',
    a: '$2$. Track it: $x \\to x+3 \\to 2x+6 \\to x+6 \\to x+2 \\to 2$. The $x$ cancels, leaving a constant.'
  }
]

function useConfig() {
  const config = {
    cssPrefix: 'alg',
    documentTitle: 'Algebraic Foundations - AETHER',
    learning: {
      groupTitle: 'Foundations',
      category: 'Module 1.2',
      title: 'Algebraic Foundations',
      subtitle:
        'Algebra extends arithmetic with letters that stand for unknown or general numbers. One rule covers infinitely many cases.',
      sections: [
        <>
          <div className="lrn-section" id="lrn-section-0">
            <h2>What Is Algebra?</h2>

            <div className="lrn-predict">
              <span className="lrn-predict-label">PREDICT</span>
              <p>
                Try {`$3 + ? = 7$`}. What does the {`$?$`} stand for? What rule would you use to
                find it?
              </p>
              <details className="lrn-predict-reveal">
                <summary>Check your thinking</summary>
                <p>
                  The {`$?$`} stands for $4$. You found it by subtracting: $7 - 3 = 4$. In algebra,
                  a letter holds the place of an unknown number.
                </p>
              </details>
            </div>

            <p>
              Arithmetic combines specific numbers. {`$2 + 4 = 6$`} talks about two exact numbers.
              Algebra lets a symbol stand for any number.
            </p>

            <p>
              Write {`$a + b = 6$`}. The letters {`$a$`} and {`$b$`} are <strong>variables</strong>.
              They can be $2$ and $4$, or $3.5$ and $2.5$, or any pair that sums to $6$.
            </p>

            <p>
              One equation now stands for infinitely many pairs of numbers. That power is why
              algebra exists.
            </p>
          </div>
        </>,

        <>
          <div className="lrn-section" id="lrn-section-1">
            <h2>Number Types</h2>

            <div className="lrn-predict">
              <span className="lrn-predict-label">PREDICT</span>
              <p>
                Is $0.333\ldots$ the same kind of number as $7$? Is {`$\\sqrt{2}$`} the same kind as{' '}
                $0.5$?
              </p>
              <details className="lrn-predict-reveal">
                <summary>Check your thinking</summary>
                <p>
                  $0.333\ldots$ equals {`$\\frac{1}{3}$`}, a fraction of integers. So is $7 =${' '}
                  {`$\\frac{7}{1}$`}. But {`$\\sqrt{2}$`} cannot be written as such a fraction. Its
                  decimal never ends and never repeats.
                </p>
              </details>
            </div>

            <p>Every number in this course belongs to one of these categories.</p>

            <div className="lrn-definition">
              <span className="lrn-definition-term">Integers</span>
              <div className="lrn-definition-desc">
                <p>
                  The whole numbers and their negatives: $\ldots, -3, -2, -1, 0, 1, 2, 3, \ldots$
                </p>
                <p>
                  No fractions. Adding, subtracting, or multiplying two integers gives an integer.
                  Dividing does not: {`$\\frac{7}{2}$`} is not an integer.
                </p>
              </div>
            </div>

            <div className="lrn-definition">
              <span className="lrn-definition-term">Rational Numbers</span>
              <div className="lrn-definition-desc">
                <p>
                  Any number you can write as {`$\\frac{p}{q}$`} where $p, q$ are integers and{' '}
                  {`$q \\neq 0$`}.
                </p>
                <p>
                  Examples: {`$\\frac{1}{2}$`}, {`$-\\frac{3}{4}$`}, {`$7 = \\frac{7}{1}$`},{' '}
                  {`$0.333\\ldots = \\frac{1}{3}$`}. Every integer is rational. Every rational
                  decimal either ends or repeats.
                </p>
              </div>
            </div>

            <div className="lrn-definition">
              <span className="lrn-definition-term">Irrational Numbers</span>
              <div className="lrn-definition-desc">
                <p>
                  Numbers that no fraction of integers can produce. The decimal never ends and never
                  repeats.
                </p>
                <p>
                  Examples: {`$\\sqrt{2} \\approx 1.41421\\ldots$`},{' '}
                  {`$\\pi \\approx 3.14159\\ldots$`}.
                </p>
              </div>
            </div>

            <div className="lrn-definition">
              <span className="lrn-definition-term">Real Numbers</span>
              <div className="lrn-definition-desc">
                <p>
                  All rational and irrational numbers together. They fill the number line with no
                  gaps. Every number in this course is real.
                </p>
              </div>
            </div>

            <div className="lrn-definition">
              <span className="lrn-definition-term">Positive, Negative, and Zero</span>
              <div className="lrn-definition-desc">
                <p>
                  A number is <strong>positive</strong> if it sits right of $0$ on the number line.
                  It is <strong>negative</strong> if it sits left.
                </p>
                <p>
                  Zero is neither. We call it <strong>nonnegative</strong> (since {`$0 \\geq 0$`})
                  and <strong>nonpositive</strong> (since {`$0 \\leq 0$`}), but not positive or
                  negative.
                </p>
              </div>
            </div>

            <div className="lrn-compare">
              <div className="lrn-compare-col">
                <span className="lrn-compare-title">Rational</span>
                <p>Can be written as {`$\\frac{p}{q}$`}.</p>
                <p>Decimal ends or repeats.</p>
                <p>Examples: {`$\\frac{1}{2}$`}, $7$, $0.333\ldots$</p>
              </div>
              <div className="lrn-compare-col">
                <span className="lrn-compare-title">Irrational</span>
                <p>Cannot be written as {`$\\frac{p}{q}$`}.</p>
                <p>Decimal never ends or repeats.</p>
                <p>
                  Examples: {`$\\sqrt{2}$`}, {`$\\pi$`}
                </p>
              </div>
            </div>

            <NumberLineViz />
          </div>
        </>,

        <>
          <div className="lrn-section" id="lrn-section-2">
            <h2>Order of Operations</h2>

            <div className="lrn-predict">
              <span className="lrn-predict-label">PREDICT</span>
              <p>Evaluate {`$2 + 3 \\times 4$`}. Do you get $14$ or $20$?</p>
              <details className="lrn-predict-reveal">
                <summary>Check your thinking</summary>
                <p>
                  The answer is $14$. Multiplication runs before addition. Compute{' '}
                  {`$3 \\times 4 = 12$`}, then $2 + 12 = 14$.
                </p>
              </details>
            </div>

            <p>
              When an expression mixes operations, you need a rule for which runs first. Without
              that rule, the same expression would give different answers.
            </p>

            <h3>The Rule: PEMDAS</h3>

            <ol className="lrn-list">
              <li>
                <strong>Parentheses</strong> first. Compute everything inside before anything
                outside.
              </li>
              <li>
                <strong>Exponents</strong> second. Compute all powers.
              </li>
              <li>
                <strong>Multiplication and Division</strong> third. Equal priority. Run them left to
                right.
              </li>
              <li>
                <strong>Addition and Subtraction</strong> last. Equal priority. Run them left to
                right.
              </li>
            </ol>

            <h3>Worked Example: Why the Order Matters</h3>

            <div className="lrn-faded">
              <div className="lrn-faded-phase">
                <span className="lrn-faded-label">COMPLETE EXAMPLE</span>
                <p>Evaluate {`$2 + 3 \\times 4$`} two ways.</p>
                <p>Wrong (addition first): {`$(2 + 3) \\times 4 = 5 \\times 4 = 20$`}.</p>
                <p>Right (multiplication first): {`$2 + (3 \\times 4) = 2 + 12 = 14$`}.</p>
                <p>
                  The product {`$3 \\times 4$`} acts as one quantity, $12$. PEMDAS makes that hidden
                  grouping explicit.
                </p>
              </div>
            </div>

            <h3>A Harder Example</h3>

            <p>Evaluate {`$5 + 3 \\times 6^2$`} step by step.</p>

            <div className="lrn-steps">
              <div className="lrn-step">
                <span className="lrn-step-title">Exponents first</span>
                <p className="lrn-step-content">{`$5 + 3 \\times 36$`}</p>
              </div>
              <div className="lrn-step">
                <span className="lrn-step-title">Then multiplication</span>
                <p className="lrn-step-content">{`$5 + 108$`}</p>
              </div>
              <div className="lrn-step">
                <span className="lrn-step-title">Then addition</span>
                <p className="lrn-step-content">{`$113$`}</p>
              </div>
            </div>

            <p>
              Now compare {`$(5 + 3) \\times 6^2$`}. The parentheses force addition first:{' '}
              {`$8 \\times 36 = 288$`}. Same numbers, very different answer.
            </p>

            <div className="lrn-callout lrn-warning">
              <span className="lrn-warning-label">Warning</span>
              <p>
                You cannot divide by zero. {`$\\frac{x}{0}$`} has no meaning. No number times $0$
                gives a nonzero result.
              </p>
            </div>

            <PemdasViz />
          </div>
        </>,

        <>
          <div className="lrn-section" id="lrn-section-3">
            <h2>The Commutative Property</h2>

            <div className="lrn-predict">
              <span className="lrn-predict-label">PREDICT</span>
              <p>
                Does {`$5 - 3$`} equal {`$3 - 5$`}? Does {`$6 \\div 2$`} equal {`$2 \\div 6$`}?
              </p>
              <details className="lrn-predict-reveal">
                <summary>Check your thinking</summary>
                <p>
                  No to both. $5 - 3 = 2$ but $3 - 5 = -2$. $6 \div 2 = 3$ but{' '}
                  {`$2 \\div 6 = \\frac{1}{3}$`}. Order matters for subtraction and division.
                </p>
              </details>
            </div>

            <h3>Addition and Multiplication Do Not Care About Order</h3>

            <p>
              Josey counts $14 + 8 = 22$ marbles. Beth counts $8 + 14 = 22$. Same pile, same total.
              Order does not change the sum.
            </p>

            <p>For any two numbers $a$ and $b$:</p>

            <div className="lrn-eq">
              <span>{`$$a + b = b + a$$`}</span>
            </div>

            <div className="lrn-eq">
              <span>{`$$a \\cdot b = b \\cdot a$$`}</span>
            </div>

            <p>
              We call this the <strong>commutative property</strong>. The letters $a$ and $b$ stand
              in for "first term" and "second term." Writing $a + b = b + a$ is shorter than{' '}
              <em>"the sum of two numbers is the same in either order."</em>
            </p>

            <h3>Subtraction and Division Are NOT Commutative</h3>

            <div className="lrn-eq">
              <span>{`$$5 - 3 = 2 \\neq -2 = 3 - 5$$`}</span>
            </div>

            <div className="lrn-eq">
              <span>{`$$6 \\div 2 = 3 \\neq \\frac{1}{3} = 2 \\div 6$$`}</span>
            </div>

            <p>
              For subtraction, the first number is what you start with and the second is what you
              take away. Swapping them changes the meaning.
            </p>

            <h3>Mental Math Using Order Flexibility</h3>

            <div className="lrn-steps">
              <div className="lrn-step">
                <span className="lrn-step-title">Compute {`$37 \\times 25 \\times 4$`}</span>
                <p className="lrn-step-content">
                  Regroup: {`$37 \\times (25 \\times 4) = 37 \\times 100 = 3700$`}.
                </p>
              </div>
              <div className="lrn-step">
                <span className="lrn-step-title">Compute {`$125 \\times 37 \\times 8$`}</span>
                <p className="lrn-step-content">
                  Regroup: {`$37 \\times (125 \\times 8) = 37 \\times 1000 = 37000$`}.
                </p>
              </div>
            </div>
          </div>
        </>,

        <>
          <div className="lrn-section" id="lrn-section-4">
            <h2>The Associative Property</h2>

            <div className="lrn-predict">
              <span className="lrn-predict-label">PREDICT</span>
              <p>
                Does $(2 + 3) + 4$ equal $2 + (3 + 4)$? Does $(10 - 3) - 2$ equal $10 - (3 - 2)$?
              </p>
              <details className="lrn-predict-reveal">
                <summary>Check your thinking</summary>
                <p>
                  Addition: both give $9$. Subtraction: $(10 - 3) - 2 = 5$ but $10 - (3 - 2) = 9$.
                  Subtraction is not associative.
                </p>
              </details>
            </div>

            <h3>Grouping Does Not Change the Result</h3>

            <p>Add $3 + 5 + 11$ two ways:</p>

            <div className="lrn-eq">
              <span>{`$$3 + 5 + 11 = 8 + 11 = 19$$`}</span>
            </div>

            <div className="lrn-eq">
              <span>{`$$3 + 5 + 11 = 3 + 16 = 19$$`}</span>
            </div>

            <p>
              The first way groups $3$ and $5$ first. The second groups $5$ and $11$ first. The
              order of the numbers stays the same. Only which pair you add first changes.
            </p>

            <p>For any three numbers $a$, $b$, $c$:</p>

            <div className="lrn-eq">
              <span>{`$$(a + b) + c = a + (b + c)$$`}</span>
            </div>

            <div className="lrn-eq">
              <span>{`$$(a \\cdot b) \\cdot c = a \\cdot (b \\cdot c)$$`}</span>
            </div>

            <p>
              We call this the <strong>associative property</strong>. A real-life version: sweet
              coffee with milk tastes the same whether you add milk to sweetened coffee or sugar to
              white coffee.
            </p>

            <p>
              Since grouping does not matter, we usually drop the parentheses and just write{' '}
              {`$3 + 5 + 11$`} or {`$2 \\cdot 3 \\cdot 4 \\cdot 5$`}.
            </p>

            <h3>Why You Need Both Laws</h3>

            <p>The commutative law swaps two operands. The associative law regroups three.</p>

            <div className="lrn-compare">
              <div className="lrn-compare-col">
                <span className="lrn-compare-title">Commutative</span>
                <p>
                  Changes the <strong>order</strong>.
                </p>
                <p>{`$a + b = b + a$`}</p>
              </div>
              <div className="lrn-compare-col">
                <span className="lrn-compare-title">Associative</span>
                <p>
                  Changes the <strong>grouping</strong>.
                </p>
                <p>{`$(a + b) + c = a + (b + c)$`}</p>
              </div>
            </div>

            <p>
              Together, they let you reshuffle any long sum or product into whatever order is
              easiest.
            </p>

            <h3>Worked Examples</h3>

            <div className="lrn-steps">
              <div className="lrn-step">
                <span className="lrn-step-title">Add {`$357 + 17999 + 1$`}</span>
                <p className="lrn-step-content">
                  Group {`$17999 + 1 = 18000$`} first. Then {`$357 + 18000 = 18357$`}.
                </p>
              </div>
              <div className="lrn-step">
                <span className="lrn-step-title">Add {`$357 + 17999$`}</span>
                <p className="lrn-step-content">
                  Borrow $1$: {`$357 + 17999 = 356 + (1 + 17999) = 356 + 18000 = 18356$`}.
                </p>
              </div>
              <div className="lrn-step">
                <span className="lrn-step-title">Sign-safe regrouping</span>
                <p className="lrn-step-content">
                  Treat subtraction as adding a negative. To regroup {`$(2 - 6) + (-5 + 7)$`}, write
                  it as $2 + (-6) + (-5) + 7$, then shuffle. Keep each negative attached to its
                  number.
                </p>
              </div>
            </div>

            <h3>Worked Example: Pairing Sums (Gauss)</h3>

            <p>Compute {`$1 + 2 + 3 + \\cdots + 100$`}.</p>

            <p>
              Pair the first with the last: $1 + 100 = 101$. The second with the second-to-last: $2
              + 99 = 101$. Every pair sums to $101$. There are $50$ such pairs.
            </p>

            <div className="lrn-eq">
              <span>{`$$1 + 2 + \\cdots + 100 = 50 \\times 101 = 5050$$`}</span>
            </div>

            <p>
              Young Karl Friedrich Gauss is said to have computed this instantly as a schoolboy. The
              pairing works because addition is both commutative and associative.
            </p>
          </div>
        </>,

        <>
          <div className="lrn-section" id="lrn-section-5">
            <h2>The Use of Parentheses</h2>

            <p>
              Without an order rule, {`$2 \\cdot 3 \\cdot 4 \\cdot 5$`} could be parenthesized many
              ways. Each way picks a different pair to multiply first.
            </p>

            <div className="lrn-faded">
              <div className="lrn-faded-phase">
                <span className="lrn-faded-label">COMPLETE EXAMPLE</span>
                <p>Five valid parenthesizations of {`$2 \\cdot 3 \\cdot 4 \\cdot 5$`}:</p>
                <ol className="lrn-list">
                  <li>{`$((2 \\cdot 3) \\cdot 4) \\cdot 5 = (6 \\cdot 4) \\cdot 5 = 24 \\cdot 5 = 120$`}</li>
                  <li>{`$(2 \\cdot (3 \\cdot 4)) \\cdot 5 = (2 \\cdot 12) \\cdot 5 = 24 \\cdot 5 = 120$`}</li>
                  <li>{`$(2 \\cdot 3) \\cdot (4 \\cdot 5) = 6 \\cdot 20 = 120$`}</li>
                  <li>{`$2 \\cdot ((3 \\cdot 4) \\cdot 5) = 2 \\cdot (12 \\cdot 5) = 2 \\cdot 60 = 120$`}</li>
                  <li>{`$2 \\cdot (3 \\cdot (4 \\cdot 5)) = 2 \\cdot (3 \\cdot 20) = 2 \\cdot 60 = 120$`}</li>
                </ol>
                <p>All five give $120$. The associative law guarantees it.</p>
              </div>
            </div>

            <p>
              Since the answer never depends on the grouping, we usually drop the parentheses and
              write {`$2 \\cdot 3 \\cdot 4 \\cdot 5 = 120$`}. The reader can rebuild any grouping
              they like.
            </p>
          </div>
        </>,

        <>
          <div className="lrn-section" id="lrn-section-6">
            <h2>The Distributive Property</h2>

            <div className="lrn-predict">
              <span className="lrn-predict-label">PREDICT</span>
              <p>
                Two boys and three girls each get $7$ apples. How many apples total? Try counting
                two ways.
              </p>
              <details className="lrn-predict-reveal">
                <summary>Check your thinking</summary>
                <p>
                  Either count: $2 \cdot 7 + 3 \cdot 7 = 14 + 21 = 35$. Or count all $5$ kids: $(2 +
                  3) \cdot 7 = 5 \cdot 7 = 35$. Same total. That equality is the distributive
                  property.
                </p>
              </details>
            </div>

            <h3>The Rule</h3>

            <p>For any numbers $a$, $b$, $c$:</p>

            <div className="lrn-eq">
              <span>{`$$a(b + c) = ab + ac$$`}</span>
            </div>

            <p>
              Multiplication distributes over addition. The factor outside the parentheses
              multiplies each term inside.
            </p>

            <h3>Mental Arithmetic with Distribution</h3>

            <div className="lrn-steps">
              <div className="lrn-step">
                <span className="lrn-step-title">Compute $1001 \times 20$</span>
                <p className="lrn-step-content">{`$$1001 \\times 20 = (1000 + 1) \\times 20 = 20000 + 20 = 20020$$`}</p>
              </div>
              <div className="lrn-step">
                <span className="lrn-step-title">Compute $1001 \times 102$</span>
                <p className="lrn-step-content">{`$$1001 \\times 102 = 1001 \\times (100 + 2) = 100100 + 2002 = 102102$$`}</p>
              </div>
            </div>

            <h3>Distribution with Subtraction</h3>

            <p>
              Subtraction is addition of a negative. So the law still works:{' '}
              {`$5 \\times (7 - 3) = 5 \\times 7 + 5 \\times (-3) = 5 \\times 7 - 5 \\times 3$`}.
            </p>

            <p>
              A special case: when $a = -1$, we get $(-1)(b + c) = -b - c$. The minus sign in front
              of a group flips every sign inside.
            </p>

            <h3>Expanding a Product of Two Sums</h3>

            <p>
              When you multiply $(a + b)$ by $(m + n)$, replace $c$ in $a(b + c)$ by the sum $m + n$
              and apply the rule twice.
            </p>

            <div className="lrn-eq">
              <span>{`$$(a + b)(m + n) = a(m + n) + b(m + n)$$`}</span>
              <span>{`$$= am + an + bm + bn$$`}</span>
            </div>

            <p>Every term in the first sum multiplies every term in the second.</p>

            <h3>Factoring: Running the Law Backward</h3>

            <p>
              Distribution expands $a(b + c)$ into $ab + ac$. <strong>Factoring</strong> goes the
              other way: spot the common factor and pull it out.
            </p>

            <p>
              Example: a family of $9$ children gets $99$ goldfish and $72$ angelfish to share
              equally. How many fish each?
            </p>

            <p>
              Both $99$ and $72$ are divisible by $9$. So{' '}
              {`$99 + 72 = 9 \\cdot 11 + 9 \\cdot 8 = 9(11 + 8)$`}. Each child gets{' '}
              {`$\\frac{9(11 + 8)}{9} = 11 + 8 = 19$`} fish. No long addition needed.
            </p>

            <div className="lrn-compare">
              <div className="lrn-compare-col">
                <span className="lrn-compare-title">Distributing</span>
                <p>{`$3(x + 2) \\to 3x + 6$`}</p>
                <p>Multiply the factor into each term.</p>
              </div>
              <div className="lrn-compare-col">
                <span className="lrn-compare-title">Factoring</span>
                <p>{`$3x + 6 \\to 3(x + 2)$`}</p>
                <p>Pull the common factor out.</p>
              </div>
            </div>
          </div>
        </>,

        <>
          <div className="lrn-section" id="lrn-section-7">
            <h2>Variables, Constants, Terms, Expressions</h2>

            <div className="lrn-predict">
              <span className="lrn-predict-label">PREDICT</span>
              <p>
                Which of these can change, and which stays fixed: the number $7$, the letter $x$,
                the expression $2x + 3$?
              </p>
              <details className="lrn-predict-reveal">
                <summary>Check your thinking</summary>
                <p>
                  $7$ is a constant: it never changes. $x$ is a variable: it stands for any number.{' '}
                  $2x + 3$ is an expression: its value depends on $x$.
                </p>
              </details>
            </div>

            <div className="lrn-definition">
              <span className="lrn-definition-term">Constant</span>
              <div className="lrn-definition-desc">
                <p>
                  A fixed number. Examples: $3$, $-7$, {`$\\pi$`}, {`$\\frac{1}{2}$`}.
                </p>
              </div>
            </div>

            <div className="lrn-definition">
              <span className="lrn-definition-term">Variable</span>
              <div className="lrn-definition-desc">
                <p>
                  A letter that holds the place of a number. It may stand for an unknown you are
                  solving for, or for any number at all.
                </p>
                <p>
                  Common variable names: $x$, $y$, $t$, $n$. The letter has no power of its own. It
                  inherits whatever number it represents.
                </p>
              </div>
            </div>

            <div className="lrn-definition">
              <span className="lrn-definition-term">Coefficient and Term</span>
              <div className="lrn-definition-desc">
                <p>
                  A <strong>term</strong> is a constant times a variable expression, like $3x^2$ or{' '}
                  $-7y$. A lone constant like $5$ is also a term.
                </p>
                <p>
                  The constant factor in a term is its <strong>coefficient</strong>. In $3x^2$, the
                  coefficient is $3$. In $-7y$, the coefficient is $-7$.
                </p>
              </div>
            </div>

            <div className="lrn-definition">
              <span className="lrn-definition-term">Expression</span>
              <div className="lrn-definition-desc">
                <p>
                  A sum of terms. Examples: $x + 3$, $2x$, $x^2 + 3$, {`$\\frac{x + 12}{x}$`},{' '}
                  {`$\\sqrt{5x - 5}$`}, $3x^2 + 2x - 7$.
                </p>
                <p>
                  An expression has no equals sign. It is a quantity, not a statement. In $3x^2 + 2x
                  - 7$, the three terms are $3x^2$, $2x$, and $-7$.
                </p>
              </div>
            </div>

            <p>
              Because $x$ is the most common variable, we drop the multiplication sign and write{' '}
              $6x$ instead of $6 \cdot x$. A number next to a letter always means "multiply."
            </p>
          </div>
        </>,

        <>
          <div className="lrn-section" id="lrn-section-8">
            <h2>Substituting Values</h2>

            <p>
              To <strong>evaluate</strong> an expression at a given value, replace every occurrence
              of the variable with that value, then follow PEMDAS.
            </p>

            <p>Evaluate each expression when $x = 4$:</p>

            <div className="lrn-steps">
              <div className="lrn-step">
                <span className="lrn-step-title">$x + 3$</span>
                <p className="lrn-step-content">$4 + 3 = 7$</p>
              </div>
              <div className="lrn-step">
                <span className="lrn-step-title">$2x$</span>
                <p className="lrn-step-content">$2 \cdot 4 = 8$</p>
              </div>
              <div className="lrn-step">
                <span className="lrn-step-title">$x^2 + 3$</span>
                <p className="lrn-step-content">$4^2 + 3 = 16 + 3 = 19$</p>
              </div>
              <div className="lrn-step">
                <span className="lrn-step-title">{`$\\frac{x + 12}{x}$`}</span>
                <p className="lrn-step-content">{`$\\frac{4 + 12}{4} = \\frac{16}{4} = 4$`}</p>
              </div>
              <div className="lrn-step">
                <span className="lrn-step-title">$3x^2$</span>
                <p className="lrn-step-content">$3 \cdot 4^2 = 3 \cdot 16 = 48$</p>
              </div>
              <div className="lrn-step">
                <span className="lrn-step-title">{`$\\sqrt{5x - 5}$`}</span>
                <p className="lrn-step-content">{`$\\sqrt{5 \\cdot 4 - 5} = \\sqrt{15}$`}</p>
              </div>
            </div>

            <div className="lrn-callout lrn-warning">
              <span className="lrn-warning-label">Watch the exponent</span>
              <p>$3x^2$ means $3 \cdot (x^2)$, not $(3x)^2$. The exponent attaches only to $x$.</p>
              <p>
                At $x = 4$: $3x^2 = 3 \cdot 16 = 48$. But $(3x)^2 = 12^2 = 144$. Very different.
              </p>
            </div>

            <p>
              A variable is a placeholder. An expression with a variable is a rule: "do these
              operations to whatever number $x$ is." Substituting just runs the rule.
            </p>
          </div>
        </>,

        <>
          <div className="lrn-section" id="lrn-section-9">
            <h2>Equations and the Balance Scale</h2>

            <div className="lrn-predict">
              <span className="lrn-predict-label">PREDICT</span>
              <p>If $3 + \square = 10$, what goes in the box? How did you figure it out?</p>
              <details className="lrn-predict-reveal">
                <summary>Check your thinking</summary>
                <p>
                  The box holds $7$. You probably subtracted $3$ from $10$. That "what makes this
                  true?" reasoning is how you solve any equation.
                </p>
              </details>
            </div>

            <p>
              An <strong>equation</strong> states that two expressions are equal. Picture a balance
              scale: each side has the same weight. The equals sign is the pivot.
            </p>

            <h3>Property 1: Symmetric Either Side Will Do</h3>

            <p>
              If $1 + 2 = 3$ is true, then $3 = 1 + 2$ is also true. You can flip an equation
              around.
            </p>

            <div className="lrn-eq">
              <span>{`$$\\text{If } a = b, \\text{ then } b = a.$$`}</span>
            </div>

            <h3>Property 2: Transitive Equality Chains</h3>

            <p>
              If $a = b$ and $b = c$, then $a = c$. Two things equal to the same third thing equal
              each other.
            </p>

            <p>
              Worked case: $3 + 2 = 5$ and $5 = 2 + 1 + 2$. So $3 + 2 = 2 + 1 + 2$. You can chain
              equalities through.
            </p>

            <div className="lrn-eq">
              <span>{`$$\\text{If } a = b \\text{ and } b = c, \\text{ then } a = c.$$`}</span>
            </div>

            <h3>Property 3: Same Operation on Both Sides</h3>

            <p>
              Add the same weight to both pans: the scale stays balanced. Subtract, multiply, or
              divide both sides by the same nonzero number: still balanced.
            </p>

            <div className="lrn-eq">
              <span>{`$$\\text{If } a = b, \\text{ then } a + c = b + c, \\ a - c = b - c, \\ ac = bc.$$`}</span>
            </div>

            <div className="lrn-eq">
              <span>{`$$\\frac{a}{c} = \\frac{b}{c} \\quad (c \\neq 0).$$`}</span>
            </div>

            <p>
              Concrete: start with $17 - 7 = 9 + 1$. Multiply both sides by $3$: $3(17 - 7) = 3(9 +
              1)$, that is $30 = 30$. Still true.
            </p>

            <p>
              This is the engine of equation-solving. To find $x$ in $x + 5 = 12$, subtract $5$ from
              both sides: $x = 7$.
            </p>

            <h3>Property 4: Adding Two Equations</h3>

            <p>
              Two scales each balanced. Move both left pans onto one new pan and both right pans
              onto the other. The new scale balances too.
            </p>

            <div className="lrn-eq">
              <span>{`$$\\text{If } a = b \\text{ and } c = d, \\text{ then } a + c = b + d.$$`}</span>
            </div>

            <p>
              Subtracting works the same way: $a - c = b - d$. To prove subtraction, multiply the
              second equation by $-1$ first and add.
            </p>

            <p>
              Worked case: $1 + 5 + 2 = 8$ and $3 = 2 + 1$. Adding gives $(1 + 5 + 2) + 3 = 8 + (2 +
              1)$, that is $11 = 11$.
            </p>

            <h3>Property 5: Multiplying Two Equations</h3>

            <p>
              If both sides of one equation equal each other, and both sides of another equation
              equal each other, then the products match.
            </p>

            <div className="lrn-eq">
              <span>{`$$\\text{If } a = b \\text{ and } c = d, \\text{ then } ac = bd.$$`}</span>
            </div>

            <p>
              Test: $15 - 8 = 7$ and $6 = -5 + 11$. Multiply left sides: $(15 - 8) \cdot 6 = 7 \cdot
              6 = 42$. Multiply right sides: $7 \cdot (-5 + 11) = 7 \cdot 6 = 42$. Match.
            </p>

            <h3>Property 6: Cross-Multiplication</h3>

            <p>
              If two fractions are equal, the numerator of one times the denominator of the other
              gives the same product either way.
            </p>

            <div className="lrn-eq">
              <span>{`$$\\frac{a}{b} = \\frac{c}{d} \\implies ad = bc.$$`}</span>
            </div>

            <div className="lrn-proof">
              <span className="lrn-proof-header">Why cross-multiplication works</span>
              <div className="lrn-proof-step">
                <span className="lrn-proof-step-num">1.</span>
                <div className="lrn-proof-step-content">
                  Start: {`$\\frac{a}{b} = \\frac{c}{d}$`}.
                </div>
              </div>
              <div className="lrn-proof-step">
                <span className="lrn-proof-step-num">2.</span>
                <div className="lrn-proof-step-content">
                  Multiply both sides by $b$: {`$a = \\frac{bc}{d}$`}.
                </div>
              </div>
              <div className="lrn-proof-step">
                <span className="lrn-proof-step-num">3.</span>
                <div className="lrn-proof-step-content">Multiply both sides by $d$: $ad = bc$.</div>
              </div>
              <div className="lrn-qed">Q.E.D.</div>
            </div>

            <p>Test: {`$\\frac{2}{4} = \\frac{3}{6}$`} gives $2 \cdot 6 = 4 \cdot 3 = 12$. True.</p>

            <p>
              Cross-multiplication is just Property 3 applied twice. It is the most useful trick for
              solving equations that involve fractions.
            </p>
          </div>
        </>,

        <>
          <div className="lrn-section" id="lrn-section-10">
            <h2>Combining Like Terms</h2>

            <div className="lrn-predict">
              <span className="lrn-predict-label">PREDICT</span>
              <p>
                Michelle has $5$ Lego sets. Adam has $3$. Each set has $x$ Legos. How many Legos in
                total?
              </p>
              <details className="lrn-predict-reveal">
                <summary>Check your thinking</summary>
                <p>
                  Michelle has $5x$, Adam has $3x$. Together: $5x + 3x = 8x$. You can also count $8$
                  sets directly: $8 \cdot x = 8x$. Same answer.
                </p>
              </details>
            </div>

            <p>
              Two terms are <strong>like terms</strong> if they share exactly the same variable
              expression. Like terms combine by adding their coefficients.
            </p>

            <div className="lrn-eq">
              <span>{`$$ax + bx = (a + b)x$$`}</span>
            </div>

            <div className="lrn-proof">
              <span className="lrn-proof-header">Why combining like terms works</span>
              <div className="lrn-proof-step">
                <span className="lrn-proof-step-num">1.</span>
                <div className="lrn-proof-step-content">$5x + 3x$</div>
              </div>
              <div className="lrn-proof-step">
                <span className="lrn-proof-step-num">2.</span>
                <div className="lrn-proof-step-content">
                  $= (5 + 3) \cdot x$ factor out $x$ using the distributive law.
                </div>
              </div>
              <div className="lrn-proof-step">
                <span className="lrn-proof-step-num">3.</span>
                <div className="lrn-proof-step-content">$= 8x$</div>
              </div>
              <div className="lrn-qed">Q.E.D.</div>
            </div>

            <p>
              Combining like terms is the distributive law read backward. The variable $x$ is the
              common factor; the coefficients add.
            </p>

            <h3>Worked Example: Lisa and Nathan</h3>

            <p>
              Lisa has $4$ packs of gum and $5$ extras. Nathan has $7$ packs and $3$ extras. Each
              pack holds $x$ pieces. Total pieces?
            </p>

            <p>
              Lisa: $4x + 5$. Nathan: $7x + 3$. Together: $(4x + 5) + (7x + 3) = (4x + 7x) + (5 + 3)
              = 11x + 8$.
            </p>

            <p>
              Group the $x$-terms with each other and the constants with each other. Then add inside
              each group.
            </p>

            <div className="lrn-callout lrn-warning">
              <span className="lrn-warning-label">Warning</span>
              <p>
                $5x^2$ and $6x$ are <em>not</em> like terms. $x^2$ and $x$ are different variable
                expressions. $5x^2 + 6x \neq 11x^2$ and {`$\\neq 11x$`}.
              </p>
            </div>
          </div>
        </>,

        <>
          <div className="lrn-section" id="lrn-section-11">
            <h2>Distribution and Factoring with Variables</h2>

            <p>
              Variables stand for numbers. So every law that holds for numbers holds for variables.
              Distribution works the same way with letters.
            </p>

            <h3>Distributing with Variables</h3>

            <div className="lrn-steps">
              <div className="lrn-step">
                <span className="lrn-step-title">Expand $2(x + 7)$</span>
                <p className="lrn-step-content">{`$$2(x + 7) = 2x + 14$$`}</p>
              </div>
              <div className="lrn-step">
                <span className="lrn-step-title">Simplify $2(x^2 + 3) + 3(x^2 - 9)$</span>
                <p className="lrn-step-content">{`$$2x^2 + 6 + 3x^2 - 27 = 5x^2 - 21$$`}</p>
              </div>
              <div className="lrn-step">
                <span className="lrn-step-title">Long sum: $x(2x^2 + 3x - 7)$</span>
                <p className="lrn-step-content">{`$$x \\cdot 2x^2 + x \\cdot 3x - x \\cdot 7 = 2x^3 + 3x^2 - 7x$$`}</p>
              </div>
            </div>

            <h3>Subtracting an Expression: Flip Every Sign</h3>

            <p>
              Subtracting a group is the same as adding $-1$ times that group. The minus reaches
              every term inside.
            </p>

            <div className="lrn-proof">
              <span className="lrn-proof-header">Simplify $(x + 3) - (3x + 9)$</span>
              <div className="lrn-proof-step">
                <span className="lrn-proof-step-num">1.</span>
                <div className="lrn-proof-step-content">
                  {`$(x + 3) - (3x + 9) = (x + 3) + (-1)(3x + 9)$`}
                </div>
              </div>
              <div className="lrn-proof-step">
                <span className="lrn-proof-step-num">2.</span>
                <div className="lrn-proof-step-content">$= x + 3 - 3x - 9$</div>
              </div>
              <div className="lrn-proof-step">
                <span className="lrn-proof-step-num">3.</span>
                <div className="lrn-proof-step-content">$= -2x - 6$</div>
              </div>
            </div>

            <p>
              Worked case: $(t^2 - 5t + 4) - (t^2 - 7) = t^2 - 5t + 4 - t^2 + 7 = -5t + 11$. The
              $-7$ flipped to $+7$ because the outer minus hit every term.
            </p>

            <div className="lrn-callout lrn-warning">
              <span className="lrn-warning-label">Warning</span>
              <p>
                When you subtract a multi-term expression, every term flips sign, not just the
                first.
              </p>
            </div>

            <h3>Factoring with Variables</h3>

            <p>To factor, look at each term, find what they share, and pull it out front.</p>

            <div className="lrn-steps">
              <div className="lrn-step">
                <span className="lrn-step-title">Factor $3x + 6$</span>
                <p className="lrn-step-content">$3x + 6 = 3(x + 2)$. Common factor: $3$.</p>
              </div>
              <div className="lrn-step">
                <span className="lrn-step-title">Factor $-15a^2 + 35$</span>
                <p className="lrn-step-content">
                  $-15a^2 + 35 = 5(-3a^2 + 7)$. Common factor: $5$.
                </p>
              </div>
              <div className="lrn-step">
                <span className="lrn-step-title">Factor $3x^2 + 2x$</span>
                <p className="lrn-step-content">$3x^2 + 2x = x(3x + 2)$. Common factor: $x$.</p>
              </div>
              <div className="lrn-step">
                <span className="lrn-step-title">Factor $2a^3 + 16a^2 - 8a$</span>
                <p className="lrn-step-content">
                  $2a^3 + 16a^2 - 8a = 2a(a^2 + 8a - 4)$. Common factor: $2a$.
                </p>
              </div>
            </div>

            <p>
              To find the common factor: take the largest constant that divides every coefficient,
              times the highest power of each variable that appears in every term.
            </p>

            <h3>Factoring Out a Whole Expression</h3>

            <p>
              You can factor out anything, not just a single letter. Factor $n(2n + 1) + 5(2n + 1)$.
            </p>

            <p>
              Both terms contain $(2n + 1)$. Treat it as one chunk. The expression looks like $n
              \cdot \heartsuit + 5 \cdot \heartsuit = (n + 5)\heartsuit$. Replace the heart with{' '}
              $(2n + 1)$:
            </p>

            <div className="lrn-eq">
              <span>{`$$n(2n + 1) + 5(2n + 1) = (n + 5)(2n + 1)$$`}</span>
            </div>
          </div>
        </>,

        <>
          <div className="lrn-section" id="lrn-section-12">
            <h2>Letters in Algebra: Word Problems</h2>

            <p>
              Letters in algebra are shorthand for words. Writing $x$ instead of "the number of
              oranges" saves mental effort and makes the structure visible.
            </p>

            <div className="lrn-insight">
              <span className="lrn-insight-label">Whitehead</span>
              <p>
                "By relieving the brain of all unnecessary work, a good notation sets it free to
                concentrate on more advanced problems."
              </p>
            </div>

            <h3>Worked Problem: Two Vessels</h3>

            <p>
              A small vessel and a big vessel together hold $5$ liters. Two small vessels and three
              big ones together hold $13$ liters. How much does each hold?
            </p>

            <p>Let $x$ = small vessel volume. Let $y$ = big vessel volume. The problem says:</p>

            <div className="lrn-eq">
              <span>{`$$x + y = 5$$`}</span>
            </div>

            <div className="lrn-eq">
              <span>{`$$2x + 3y = 13$$`}</span>
            </div>

            <div className="lrn-steps">
              <div className="lrn-step">
                <span className="lrn-step-title">Multiply the first equation by $2$</span>
                <p className="lrn-step-content">$2x + 2y = 10$.</p>
              </div>
              <div className="lrn-step">
                <span className="lrn-step-title">Subtract from the second equation</span>
                <p className="lrn-step-content">$(2x + 3y) - (2x + 2y) = 13 - 10$, so $y = 3$.</p>
              </div>
              <div className="lrn-step">
                <span className="lrn-step-title">Plug back into the first equation</span>
                <p className="lrn-step-content">$x + 3 = 5$, so $x = 2$.</p>
              </div>
            </div>

            <p>
              Small vessel: $2$ liters. Big vessel: $3$ liters. The system of equations is the
              algebraic version of careful word-by-word reasoning, but it scales to far harder
              problems.
            </p>

            <h3>Worked Problem: The Magic Number Trick</h3>

            <p>
              Pick any number. Add $3$. Double the result. Subtract the chosen number. Subtract $4$.
              Subtract the chosen number again. You get $2$.
            </p>

            <p>Let $x$ be the chosen number. Track each step:</p>

            <div className="lrn-steps">
              <div className="lrn-step">
                <span className="lrn-step-title">Start</span>
                <p className="lrn-step-content">$x$</p>
              </div>
              <div className="lrn-step">
                <span className="lrn-step-title">Add $3$</span>
                <p className="lrn-step-content">$x + 3$</p>
              </div>
              <div className="lrn-step">
                <span className="lrn-step-title">Double</span>
                <p className="lrn-step-content">$2(x + 3) = 2x + 6$</p>
              </div>
              <div className="lrn-step">
                <span className="lrn-step-title">Subtract $x$</span>
                <p className="lrn-step-content">$(2x + 6) - x = x + 6$</p>
              </div>
              <div className="lrn-step">
                <span className="lrn-step-title">Subtract $4$</span>
                <p className="lrn-step-content">$x + 2$</p>
              </div>
              <div className="lrn-step">
                <span className="lrn-step-title">Subtract $x$ again</span>
                <p className="lrn-step-content">$2$</p>
              </div>
            </div>

            <p>
              The variable cancels at the last step. From that point on, the answer is $2$
              regardless of the starting number. The "magic" is just algebra with the $x$ visible.
            </p>

            <h3>Worked Problem: Captain Hook's Map</h3>

            <p>
              Captain Hook says: "Think of a number. Take $17$ more than the quotient when $6$ times
              the number is divided by $2$. That equals $12$ more than $9 - 15$ added to $4$ times
              the number."
            </p>

            <p>Let $x$ = the number. Translate:</p>

            <div className="lrn-eq">
              <span>{`$$17 + \\frac{6x}{2} = 12 + (9 - 15) + 4x$$`}</span>
            </div>

            <p>
              Now you have a map. The next module will solve it. The work of getting from words to
              symbols is half the battle.
            </p>
          </div>
        </>,

        <>
          <div className="lrn-section" id="lrn-section-13">
            <h2>Exponent Rules</h2>

            <div className="lrn-predict">
              <span className="lrn-predict-label">PREDICT</span>
              <p>
                $y^2 = y \cdot y$ and $y^4 = y \cdot y \cdot y \cdot y$. What should $y^2 \cdot y^4$
                equal? Count the $y$'s.
              </p>
              <details className="lrn-predict-reveal">
                <summary>Check your thinking</summary>
                <p>
                  $y^6$. You have $2 + 4 = 6$ copies of $y$ multiplied together. Every exponent rule
                  is just bookkeeping for counts of factors.
                </p>
              </details>
            </div>

            <p>
              An exponent counts factors. $y^3 = y \cdot y \cdot y$. Five laws govern how exponents
              combine. Each comes from counting factors.
            </p>

            <h3>Law 1: Product of Powers</h3>

            <div className="lrn-eq">
              <span>{`$$a^b \\cdot a^c = a^{b+c}$$`}</span>
            </div>

            <p>
              Derivation: $y^2 \cdot y^4 = (y \cdot y)(y \cdot y \cdot y \cdot y) = y^6 = y^
              {`{2+4}`}$. Multiplying powers of the same base adds the counts.
            </p>

            <h3>Law 2: Power of a Power</h3>

            <div className="lrn-eq">
              <span>{`$$(a^b)^c = a^{bc}$$`}</span>
            </div>

            <p>Derivation: $(v^3)^5$ means $5$ copies of $v^3$.</p>

            <div className="lrn-eq">
              <span>{`$$(v^3)^5 = v^3 \\cdot v^3 \\cdot v^3 \\cdot v^3 \\cdot v^3 = v^{15} = v^{3 \\cdot 5}$$`}</span>
            </div>

            <p>Each of $5$ copies contributes $3$ factors. Total: $5 \times 3 = 15$.</p>

            <h3>Law 3: Power of a Product</h3>

            <div className="lrn-eq">
              <span>{`$$(ab)^c = a^c \\cdot b^c$$`}</span>
            </div>

            <p>
              Derivation: $(2x)^3 = (2x)(2x)(2x) = (2 \cdot 2 \cdot 2)(x \cdot x \cdot x) = 8x^3$.
              You can regroup because multiplication is commutative and associative.
            </p>

            <div className="lrn-callout lrn-warning">
              <span className="lrn-warning-label">Warning</span>
              <p>
                $(2 + x)^3 \neq 2^3 + x^3$. The rule needs a product, not a sum. Test $x = 1$: $3^3
                = 27$, but $2^3 + 1^3 = 9$. Different.
              </p>
            </div>

            <h3>Law 4: Quotient of Powers</h3>

            <div className="lrn-eq">
              <span>{`$$\\frac{a^b}{a^c} = a^{b-c}, \\quad a \\neq 0$$`}</span>
            </div>

            <p>
              Derivation:{' '}
              {`$\\frac{x^7}{x^3} = \\frac{x \\cdot x \\cdot x \\cdot x \\cdot x \\cdot x \\cdot x}{x \\cdot x \\cdot x}$`}
              . Three $x$'s cancel from the seven, leaving four. Subtracting counts.
            </p>

            <h3>Law 5: Negative Exponents</h3>

            <div className="lrn-eq">
              <span>{`$$a^{-p} = \\frac{1}{a^p}, \\quad a \\neq 0$$`}</span>
            </div>

            <div className="lrn-proof">
              <span className="lrn-proof-header">Derive the negative exponent rule</span>
              <div className="lrn-proof-step">
                <span className="lrn-proof-step-num">1.</span>
                <div className="lrn-proof-step-content">
                  Apply the quotient rule: {`$\\frac{x^3}{x^8} = x^{3 - 8} = x^{-5}$`}.
                </div>
              </div>
              <div className="lrn-proof-step">
                <span className="lrn-proof-step-num">2.</span>
                <div className="lrn-proof-step-content">
                  Cancel directly: {`$\\frac{x^3}{x^8} = \\frac{1}{x^{8 - 3}} = \\frac{1}{x^5}$`}.
                </div>
              </div>
              <div className="lrn-proof-step">
                <span className="lrn-proof-step-num">3.</span>
                <div className="lrn-proof-step-content">
                  Both paths agree, so {`$x^{-5} = \\frac{1}{x^5}$`}.
                </div>
              </div>
              <div className="lrn-qed">Q.E.D.</div>
            </div>

            <p>
              Examples: $2^{`{-3}`} = \frac{1}
              {8}$. Reciprocating works too: {`$\\frac{1}{3^{-2}} = 3^2 = 9$`}.
            </p>

            <ExponentLawsViz />
          </div>
        </>,

        <>
          <div className="lrn-section" id="lrn-section-14">
            <h2>Simplifying Algebraic Fractions</h2>

            <div className="lrn-predict">
              <span className="lrn-predict-label">PREDICT</span>
              <p>
                Can you cancel the $x$ in {`$\\frac{3x + 6}{3x}$`}? What about in{' '}
                {`$\\frac{3x + 6}{3}$`}?
              </p>
              <details className="lrn-predict-reveal">
                <summary>Check your thinking</summary>
                <p>
                  Neither cancels as written. Factor first.{' '}
                  {`$\\frac{3x + 6}{3} = \\frac{3(x + 2)}{3} = x + 2$`} the $3$ is a factor of the
                  whole top. {`$\\frac{3x + 6}{3x} = \\frac{3(x + 2)}{3x} = \\frac{x + 2}{x}$`}.
                </p>
              </details>
            </div>

            <p>
              An algebraic fraction has variable expressions on top, bottom, or both. To simplify,
              factor numerator and denominator, then cancel any factor that appears in both.
            </p>

            <h3>The Rule: Cancel Factors, Not Terms</h3>

            <div className="lrn-eq">
              <span>{`$$\\frac{a \\cdot k}{b \\cdot k} = \\frac{a}{b}, \\quad k \\neq 0$$`}</span>
            </div>

            <p>
              Canceling means dividing top and bottom by the same value. That works only when both
              are products. Inside a sum, no single number is a factor of the whole.
            </p>

            <div className="lrn-callout lrn-danger">
              <span className="lrn-danger-label">Never cancel terms</span>
              <p>
                {`$\\frac{3 + 2x}{5 + 3x} \\neq \\frac{3}{5}$`}. The $3$ on top is a term inside a
                sum, not a factor of the whole numerator. Same for the $5$.
              </p>
            </div>

            <h3>Worked Examples</h3>

            <div className="lrn-steps">
              <div className="lrn-step">
                <span className="lrn-step-title">{`$\\frac{6x + 9}{12}$`}</span>
                <p className="lrn-step-content">
                  Factor: {`$\\frac{3(2x + 3)}{3 \\cdot 4} = \\frac{2x + 3}{4}$`}.
                </p>
              </div>
              <div className="lrn-step">
                <span className="lrn-step-title">{`$\\frac{7t^2 + 3t}{t}$`}</span>
                <p className="lrn-step-content">Factor: {`$\\frac{t(7t + 3)}{t} = 7t + 3$`}.</p>
              </div>
              <div className="lrn-step">
                <span className="lrn-step-title">{`$\\frac{3x - 6}{x^2 - 2x}$`}</span>
                <p className="lrn-step-content">
                  Factor both: {`$\\frac{3(x - 2)}{x(x - 2)} = \\frac{3}{x}$`}.
                </p>
              </div>
            </div>

            <p>
              Always factor first. Trying to cancel before factoring tempts you to cancel terms,
              which is the most common algebra mistake.
            </p>
          </div>
        </>,

        <>
          <div className="lrn-section" id="lrn-section-15">
            <h2>Common Denominators with Variables</h2>

            <p>
              You can only add fractions of the same kind. {`$\\frac{1}{3}$`} and {`$\\frac{1}{4}$`}{' '}
              measure different slices. A common denominator rewrites both as the same kind of
              slice. Then the tops add.
            </p>

            <h3>Method 1: Multiply the Denominators</h3>

            <div className="lrn-eq">
              <span>{`$$\\frac{p}{a} + \\frac{q}{b} = \\frac{pb + qa}{ab}$$`}</span>
            </div>

            <p>This always works. It may not give the simplest result.</p>

            <h3>Method 2: Least Common Multiple</h3>

            <p>
              Find the LCM of the denominators by taking the highest power of each prime factor and
              each variable that appears. Constants and variable parts work separately.
            </p>

            <div className="lrn-steps">
              <div className="lrn-step">
                <span className="lrn-step-title">{`Add $\\frac{2}{3x} + \\frac{3}{x}$`}</span>
                <p className="lrn-step-content">
                  LCD $= 3x$. Rewrite: {`$\\frac{2}{3x} + \\frac{9}{3x} = \\frac{11}{3x}$`}.
                </p>
              </div>
              <div className="lrn-step">
                <span className="lrn-step-title">{`Add $\\frac{2}{x^3} + \\frac{3x}{5}$`}</span>
                <p className="lrn-step-content">
                  LCD $= 5x^3$. Result: {`$\\frac{10 + 3x^4}{5x^3}$`}.
                </p>
              </div>
              <div className="lrn-step">
                <span className="lrn-step-title">
                  {`Subtract $\\frac{4}{3y} - \\frac{5 - y}{5y^2}$`}
                </span>
                <p className="lrn-step-content">
                  LCD $= 15y^2$.{' '}
                  {`$\\frac{20y}{15y^2} - \\frac{15 - 3y}{15y^2} = \\frac{23y - 15}{15y^2}$`}.
                </p>
              </div>
            </div>

            <h3>Worked Example: Different Variable Expressions</h3>

            <p>
              Write {`$\\frac{3}{s} - \\frac{7s}{s + 2}$`} as one fraction. The two denominators
              share no factors. LCD $= s(s + 2)$.
            </p>

            <div className="lrn-eq">
              <span>{`$$\\frac{3(s + 2)}{s(s + 2)} - \\frac{7s^2}{s(s + 2)} = \\frac{3s + 6 - 7s^2}{s(s + 2)} = \\frac{-7s^2 + 3s + 6}{s(s + 2)}$$`}</span>
            </div>

            <p>
              Once combined, do not cancel the $s$ in $3s$ against the $s$ in the denominator. The
              $3s$ is a term, not a factor of the whole top.
            </p>

            <div className="lrn-compare">
              <div className="lrn-compare-col">
                <span className="lrn-compare-title">Product Method</span>
                <p>Always gives a valid common denominator.</p>
                <p>{`$\\frac{p}{a} + \\frac{q}{b} = \\frac{pb + qa}{ab}$`}</p>
              </div>
              <div className="lrn-compare-col">
                <span className="lrn-compare-title">LCM Method</span>
                <p>Gives the simplest. Less work later.</p>
                <p>LCM$(3y, 5y^2) = 15y^2$</p>
              </div>
            </div>
          </div>
        </>,

        <>
          <div className="lrn-section" id="lrn-section-16">
            <h2>Adding Signed Numbers</h2>

            <div className="lrn-predict">
              <span className="lrn-predict-label">PREDICT</span>
              <p>
                Yesterday was $3$ degrees. Today is $5$ degrees colder. What does the thermometer
                read?
              </p>
              <details className="lrn-predict-reveal">
                <summary>Check your thinking</summary>
                <p>
                  $-2$ degrees. You drop $3$ to reach $0$, then drop $2$ more. Adding a negative
                  moves you left on the number line.
                </p>
              </details>
            </div>

            <p>
              Negative numbers extend the number line to the left of $0$. Adding a negative number
              moves you left. The temperature table covers all four cases.
            </p>

            <div className="lrn-compare">
              <div className="lrn-compare-col">
                <span className="lrn-compare-title">Same signs</span>
                <p>$3 + 5 = 8$: yesterday $+3$, today $5$ warmer, so $+8$.</p>
                <p>$(-3) + (-5) = -8$: yesterday $-3$, today $5$ colder, so $-8$.</p>
                <p>Add the magnitudes. Keep the shared sign.</p>
              </div>
              <div className="lrn-compare-col">
                <span className="lrn-compare-title">Different signs</span>
                <p>$3 + (-5) = -2$: yesterday $+3$, today $5$ colder, so $-2$.</p>
                <p>$(-3) + 5 = 2$: yesterday $-3$, today $5$ warmer, so $+2$.</p>
                <p>Subtract the magnitudes. Take the sign of the bigger one.</p>
              </div>
            </div>

            <h3>Why the Rules Are What They Are</h3>

            <p>
              Different signs partly cancel. $3 + (-5)$: the $-5$ erases the $+3$ and overshoots by{' '}
              $2$. The leftover $2$ is negative because $-5$ was bigger in size than $+3$.
            </p>

            <p>
              Picture a balance of debts and credits. $(-3) + 5$: you owe $3$, then receive $5$.
              Net: you keep $2$. The sign of the answer tracks who won the tug-of-war.
            </p>
          </div>
        </>,

        <>
          <div className="lrn-section" id="lrn-section-17">
            <h2>Multiplying Signed Numbers</h2>

            <div className="lrn-predict">
              <span className="lrn-predict-label">PREDICT</span>
              <p>
                $3 \times 5 = 15$ and $(-3) \times 5 = -15$. What should $(-3) \times (-5)$ equal?
                Write your guess.
              </p>
              <details className="lrn-predict-reveal">
                <summary>Check your thinking</summary>
                <p>
                  $+15$. A negative times a negative is positive. Three independent arguments below
                  all force this answer.
                </p>
              </details>
            </div>

            <h3>Starting Point: Multiplication as Repeated Addition</h3>

            <p>
              For positive whole numbers, $3 \times 5$ means add five three times: $5 + 5 + 5 = 15$.
              That gives a rule for $5 \cdot 0$ too:
            </p>

            <div className="lrn-eq">
              <span>{`$$5 \\cdot 0 = 0 + 0 + 0 + 0 + 0 = 0$$`}</span>
            </div>

            <p>
              For $5 \cdot (-3)$ you cannot add $-3$ "five times" using direction. So flip the
              order. Multiplication is commutative, so $5 \cdot (-3) = (-3) \cdot 5$, which is{' '}
              $(-3)$ added five times:
            </p>

            <div className="lrn-eq">
              <span>{`$$(-3) \\cdot 5 = (-3) + (-3) + (-3) + (-3) + (-3) = -15$$`}</span>
            </div>

            <p>
              So $\text{`{positive}`} \times \text{`{negative}`} = \text{`{negative}`}$. The product
              has the negative's sign.
            </p>

            <h3>The Hard Case: $(-3) \times (-5)$</h3>

            <p>
              Here is where intuition fails. Three independent arguments all force the same answer.
            </p>

            <h4>Argument 1: The Penalty Analogy</h4>

            <p>
              A "penalty" is $-3$ points. Reversing $5$ penalties undoes those losses and gives back{' '}
              $15$ points. Two negatives, one positive: $(-3)(-5) = 15$.
            </p>

            <h4>Argument 2: The Sequence Pattern</h4>

            <p>Watch the products as the second factor drops by $1$:</p>

            <div className="lrn-steps">
              <div className="lrn-step">
                <span className="lrn-step-title">$(-3) \times 3 = -9$</span>
                <p className="lrn-step-content">Each step adds $3$ to the previous product.</p>
              </div>
              <div className="lrn-step">
                <span className="lrn-step-title">$(-3) \times 2 = -6$</span>
                <p className="lrn-step-content">$-9 + 3 = -6$.</p>
              </div>
              <div className="lrn-step">
                <span className="lrn-step-title">$(-3) \times 1 = -3$</span>
                <p className="lrn-step-content">$-6 + 3 = -3$.</p>
              </div>
              <div className="lrn-step">
                <span className="lrn-step-title">$(-3) \times 0 = 0$</span>
                <p className="lrn-step-content">$-3 + 3 = 0$.</p>
              </div>
              <div className="lrn-step">
                <span className="lrn-step-title">$(-3) \times (-1) = +3$</span>
                <p className="lrn-step-content">
                  $0 + 3 = +3$. The pattern forces the sign to flip.
                </p>
              </div>
              <div className="lrn-step">
                <span className="lrn-step-title">$(-3) \times (-5) = +15$</span>
                <p className="lrn-step-content">Continue the pattern five steps.</p>
              </div>
            </div>

            <h4>Argument 3: Proof from the Distributive Law</h4>

            <div className="lrn-proof">
              <span className="lrn-proof-header">$(-3)(-5) = 15$</span>
              <div className="lrn-proof-step">
                <span className="lrn-proof-step-num">1.</span>
                <div className="lrn-proof-step-content">
                  Note $5 + (-5) = 0$. So $(-3) \cdot (5 + (-5)) = (-3) \cdot 0 = 0$.
                </div>
              </div>
              <div className="lrn-proof-step">
                <span className="lrn-proof-step-num">2.</span>
                <div className="lrn-proof-step-content">Distribute: $(-3)(5) + (-3)(-5) = 0$.</div>
              </div>
              <div className="lrn-proof-step">
                <span className="lrn-proof-step-num">3.</span>
                <div className="lrn-proof-step-content">
                  We already know $(-3)(5) = -15$. So $-15 + (-3)(-5) = 0$.
                </div>
              </div>
              <div className="lrn-proof-step">
                <span className="lrn-proof-step-num">4.</span>
                <div className="lrn-proof-step-content">Therefore $(-3)(-5) = 15$.</div>
              </div>
              <div className="lrn-qed">Q.E.D.</div>
            </div>

            <p>
              The proof uses only two facts: $(-)(+) = (-)$, which we accept, and the distributive
              law, which we keep. From those two, the answer is forced. There is no wiggle room.
            </p>

            <p>
              The same argument with letters replacing $3$ and $5$ proves the general rule:{' '}
              $(-a)(-b) = ab$ for any numbers $a$ and $b$.
            </p>

            <div className="lrn-compare">
              <div className="lrn-compare-col">
                <span className="lrn-compare-title">Sign rules for multiplication</span>
                <ul className="lrn-list">
                  <li>$(+)(+) = +$</li>
                  <li>$(+)(-) = -$</li>
                  <li>$(-)(+) = -$</li>
                  <li>$(-)(-) = +$</li>
                </ul>
              </div>
              <div className="lrn-compare-col">
                <span className="lrn-compare-title">In words</span>
                <p>Same signs: product positive.</p>
                <p>Different signs: product negative.</p>
              </div>
            </div>
          </div>
        </>
      ]
    },
    practice: PRACTICE_CARDS,
    reference: {
      category: 'Quick Reference',
      title: 'Algebraic Foundations',
      sections: [
        <>
          <div className="lrn-section" id="lrn-ref-section-0">
            <h2>Number Types</h2>

            <div className="lrn-definition">
              <span className="lrn-definition-term">Integer</span>
              <div className="lrn-definition-desc">
                <p>A whole number: $\ldots, -2, -1, 0, 1, 2, \ldots$</p>
              </div>
            </div>

            <div className="lrn-definition">
              <span className="lrn-definition-term">Rational Number</span>
              <div className="lrn-definition-desc">
                <p>
                  {`$\\frac{p}{q}$`} where $p, q$ are integers and {`$q \\neq 0$`}. Decimal ends or
                  repeats.
                </p>
              </div>
            </div>

            <div className="lrn-definition">
              <span className="lrn-definition-term">Irrational Number</span>
              <div className="lrn-definition-desc">
                <p>
                  Cannot be written as {`$\\frac{p}{q}$`}. Decimal never ends or repeats. Examples:{' '}
                  {`$\\sqrt{2}$`}, {`$\\pi$`}.
                </p>
              </div>
            </div>

            <div className="lrn-definition">
              <span className="lrn-definition-term">Real Numbers</span>
              <div className="lrn-definition-desc">
                <p>
                  All rationals and all irrationals together. Fills the number line with no gaps.
                </p>
              </div>
            </div>

            <div className="lrn-definition">
              <span className="lrn-definition-term">Zero</span>
              <div className="lrn-definition-desc">
                <p>
                  Neither positive nor negative. Nonnegative ({`$0 \\geq 0$`}) and nonpositive (
                  {`$0 \\leq 0$`}). Never divide by it.
                </p>
              </div>
            </div>
          </div>
        </>,

        <>
          <div className="lrn-section" id="lrn-ref-section-1">
            <h2>Order of Operations</h2>

            <div className="lrn-definition">
              <span className="lrn-definition-term">PEMDAS</span>
              <div className="lrn-definition-desc">
                <p>
                  Parentheses → Exponents → Multiplication/Division (left to right) →
                  Addition/Subtraction (left to right).
                </p>
              </div>
            </div>
          </div>
        </>,

        <>
          <div className="lrn-section" id="lrn-ref-section-2">
            <h2>Laws of Arithmetic</h2>

            <div className="lrn-definition">
              <span className="lrn-definition-term">Commutative</span>
              <div className="lrn-definition-desc">
                <div className="lrn-eq">
                  <span>{`$$a + b = b + a \\qquad a \\cdot b = b \\cdot a$$`}</span>
                </div>
                <p>Use to reorder terms or factors for easier mental math.</p>
              </div>
            </div>

            <div className="lrn-definition">
              <span className="lrn-definition-term">Associative</span>
              <div className="lrn-definition-desc">
                <div className="lrn-eq">
                  <span>{`$$(a + b) + c = a + (b + c) \\qquad (ab)c = a(bc)$$`}</span>
                </div>
                <p>Use to regroup a long sum or product.</p>
              </div>
            </div>

            <div className="lrn-definition">
              <span className="lrn-definition-term">Distributive</span>
              <div className="lrn-definition-desc">
                <div className="lrn-eq">
                  <span>{`$$a(b + c) = ab + ac$$`}</span>
                </div>
                <p>Use to remove parentheses or split a multiplication into easier pieces.</p>
              </div>
            </div>

            <div className="lrn-definition">
              <span className="lrn-definition-term">Product of Two Sums</span>
              <div className="lrn-definition-desc">
                <div className="lrn-eq">
                  <span>{`$$(a + b)(m + n) = am + an + bm + bn$$`}</span>
                </div>
                <p>Apply distribution twice.</p>
              </div>
            </div>

            <div className="lrn-callout lrn-warning">
              <span className="lrn-warning-label">Warning</span>
              <p>Subtraction and division are not commutative and not associative.</p>
            </div>
          </div>
        </>,

        <>
          <div className="lrn-section" id="lrn-ref-section-3">
            <h2>Variables and Expressions</h2>

            <div className="lrn-definition">
              <span className="lrn-definition-term">Variable</span>
              <div className="lrn-definition-desc">
                <p>A letter placeholder for an unknown or general number.</p>
              </div>
            </div>

            <div className="lrn-definition">
              <span className="lrn-definition-term">Constant</span>
              <div className="lrn-definition-desc">
                <p>A fixed number, like $3$, $-7$, {`$\\pi$`}.</p>
              </div>
            </div>

            <div className="lrn-definition">
              <span className="lrn-definition-term">Term and Coefficient</span>
              <div className="lrn-definition-desc">
                <p>
                  A term is a constant times a variable expression, like $3x^2$. The constant factor
                  is the coefficient.
                </p>
              </div>
            </div>

            <div className="lrn-definition">
              <span className="lrn-definition-term">Expression</span>
              <div className="lrn-definition-desc">
                <p>A sum of terms. No equals sign. A quantity, not a statement.</p>
              </div>
            </div>

            <div className="lrn-definition">
              <span className="lrn-definition-term">Substitution</span>
              <div className="lrn-definition-desc">
                <p>Replace each variable with its value, then evaluate using PEMDAS.</p>
              </div>
            </div>
          </div>
        </>,

        <>
          <div className="lrn-section" id="lrn-ref-section-4">
            <h2>Equation Rules</h2>

            <div className="lrn-definition">
              <span className="lrn-definition-term">Symmetric Property</span>
              <div className="lrn-definition-desc">
                <p>{`If $a = b$, then $b = a$.`}</p>
              </div>
            </div>

            <div className="lrn-definition">
              <span className="lrn-definition-term">Transitive Property</span>
              <div className="lrn-definition-desc">
                <p>{`If $a = b$ and $b = c$, then $a = c$.`}</p>
              </div>
            </div>

            <div className="lrn-definition">
              <span className="lrn-definition-term">Same Operation on Both Sides</span>
              <div className="lrn-definition-desc">
                <p>
                  {`If $a = b$ and $c \\neq 0$, then $a + c = b + c$, $a - c = b - c$, $ac = bc$, and $\\frac{a}{c} = \\frac{b}{c}$.`}
                </p>
              </div>
            </div>

            <div className="lrn-definition">
              <span className="lrn-definition-term">Adding or Subtracting Two Equations</span>
              <div className="lrn-definition-desc">
                <p>{`If $a = b$ and $c = d$, then $a + c = b + d$ and $a - c = b - d$.`}</p>
              </div>
            </div>

            <div className="lrn-definition">
              <span className="lrn-definition-term">Multiplying Two Equations</span>
              <div className="lrn-definition-desc">
                <p>{`If $a = b$ and $c = d$, then $ac = bd$.`}</p>
              </div>
            </div>

            <div className="lrn-definition">
              <span className="lrn-definition-term">Cross-Multiplication</span>
              <div className="lrn-definition-desc">
                <p>{`If $\\frac{a}{b} = \\frac{c}{d}$, then $ad = bc$.`}</p>
              </div>
            </div>
          </div>
        </>,

        <>
          <div className="lrn-section" id="lrn-ref-section-5">
            <h2>Combining Like Terms</h2>

            <div className="lrn-definition">
              <span className="lrn-definition-term">Like Terms Rule</span>
              <div className="lrn-definition-desc">
                <div className="lrn-eq">
                  <span>{`$$ax + bx = (a + b)x$$`}</span>
                </div>
                <p>
                  Combine when two terms share the exact same variable expression. $x$ and $x^2$ are
                  different and cannot be combined.
                </p>
              </div>
            </div>
          </div>
        </>,

        <>
          <div className="lrn-section" id="lrn-ref-section-6">
            <h2>Exponent Rules</h2>

            <div className="lrn-definition">
              <span className="lrn-definition-term">Product of Powers</span>
              <div className="lrn-definition-desc">
                <div className="lrn-eq">
                  <span>{`$$a^b \\cdot a^c = a^{b+c}$$`}</span>
                </div>
              </div>
            </div>

            <div className="lrn-definition">
              <span className="lrn-definition-term">Power of a Power</span>
              <div className="lrn-definition-desc">
                <div className="lrn-eq">
                  <span>{`$$(a^b)^c = a^{bc}$$`}</span>
                </div>
              </div>
            </div>

            <div className="lrn-definition">
              <span className="lrn-definition-term">Power of a Product</span>
              <div className="lrn-definition-desc">
                <div className="lrn-eq">
                  <span>{`$$(ab)^c = a^c \\cdot b^c$$`}</span>
                </div>
              </div>
            </div>

            <div className="lrn-definition">
              <span className="lrn-definition-term">Quotient of Powers</span>
              <div className="lrn-definition-desc">
                <div className="lrn-eq">
                  <span>{`$$\\frac{a^b}{a^c} = a^{b-c}, \\quad a \\neq 0$$`}</span>
                </div>
              </div>
            </div>

            <div className="lrn-definition">
              <span className="lrn-definition-term">Negative Exponent</span>
              <div className="lrn-definition-desc">
                <div className="lrn-eq">
                  <span>{`$$a^{-p} = \\frac{1}{a^p}, \\quad a \\neq 0$$`}</span>
                </div>
              </div>
            </div>
          </div>
        </>,

        <>
          <div className="lrn-section" id="lrn-ref-section-7">
            <h2>Distribution, Subtraction, Factoring</h2>

            <div className="lrn-definition">
              <span className="lrn-definition-term">Distributing</span>
              <div className="lrn-definition-desc">
                <p>{`$a(b + c) = ab + ac$`}. Includes the case $a = -1$: $-(b + c) = -b - c$.</p>
              </div>
            </div>

            <div className="lrn-definition">
              <span className="lrn-definition-term">Subtracting an Expression</span>
              <div className="lrn-definition-desc">
                <p>
                  {`$(a + b) - (c + d) = a + b - c - d$`}. Every term inside the subtracted group
                  flips sign.
                </p>
              </div>
            </div>

            <div className="lrn-definition">
              <span className="lrn-definition-term">Factoring</span>
              <div className="lrn-definition-desc">
                <p>
                  {`$ab + ac = a(b + c)$`}. Reverse of distribution. Pull out the shared factor.
                </p>
              </div>
            </div>
          </div>
        </>,

        <>
          <div className="lrn-section" id="lrn-ref-section-8">
            <h2>Algebraic Fractions</h2>

            <div className="lrn-definition">
              <span className="lrn-definition-term">Canceling Factors</span>
              <div className="lrn-definition-desc">
                <p>
                  {`$\\frac{a \\cdot k}{b \\cdot k} = \\frac{a}{b}$`} when {`$k \\neq 0$`}. Factor
                  first, then cancel.
                </p>
              </div>
            </div>

            <div className="lrn-definition">
              <span className="lrn-definition-term">Common Denominator (Product)</span>
              <div className="lrn-definition-desc">
                <div className="lrn-eq">
                  <span>{`$$\\frac{p}{a} + \\frac{q}{b} = \\frac{pb + qa}{ab}$$`}</span>
                </div>
              </div>
            </div>

            <div className="lrn-definition">
              <span className="lrn-definition-term">Common Denominator (LCM)</span>
              <div className="lrn-definition-desc">
                <p>
                  LCD = LCM of all denominators. Treat constants and variable parts separately for
                  the simplest result.
                </p>
              </div>
            </div>
          </div>
        </>,

        <>
          <div className="lrn-section" id="lrn-ref-section-9">
            <h2>Signed Number Rules</h2>

            <div className="lrn-definition">
              <span className="lrn-definition-term">Adding</span>
              <div className="lrn-definition-desc">
                <p>Same signs: add magnitudes, keep the shared sign.</p>
                <p>Different signs: subtract magnitudes, take the sign of the larger one.</p>
              </div>
            </div>

            <div className="lrn-definition">
              <span className="lrn-definition-term">Multiplying</span>
              <div className="lrn-definition-desc">
                <ul className="lrn-list">
                  <li>$(+)(+) = +$</li>
                  <li>$(+)(-) = -$</li>
                  <li>$(-)(+) = -$</li>
                  <li>$(-)(-) = +$</li>
                </ul>
              </div>
            </div>

            <div className="lrn-definition">
              <span className="lrn-definition-term">Why $(-)(-) = (+)$</span>
              <div className="lrn-definition-desc">
                <p>
                  Forced by the distributive law: $(-a)(b + (-b)) = 0$ gives $(-a)(b) + (-a)(-b) =
                  0$, so $(-a)(-b) = ab$.
                </p>
              </div>
            </div>
          </div>
        </>,

        <>
          <div className="lrn-section" id="lrn-ref-section-10">
            <h2>Useful Tricks</h2>

            <div className="lrn-definition">
              <span className="lrn-definition-term">Gauss Pairing</span>
              <div className="lrn-definition-desc">
                <div className="lrn-eq">
                  <span>{`$$1 + 2 + \\cdots + n = \\frac{n(n + 1)}{2}$$`}</span>
                </div>
                <p>For $n = 100$: $50$ pairs of $101$, so $5050$.</p>
              </div>
            </div>

            <div className="lrn-definition">
              <span className="lrn-definition-term">Distribute Near Round Numbers</span>
              <div className="lrn-definition-desc">
                <p>$1001 \times k = 1000k + k$. Useful when one factor sits near a power of ten.</p>
              </div>
            </div>
          </div>
        </>,

        <>
          <div className="lrn-section" id="lrn-ref-section-11">
            <h2>Key Warnings</h2>

            <div className="lrn-callout lrn-danger">
              <span className="lrn-danger-label">Never do these</span>
              <ul className="lrn-list">
                <li>
                  <strong>Divide by zero.</strong> {`$\\frac{x}{0}$`} has no value.
                </li>
                <li>
                  <strong>Confuse $3x^2$ with $(3x)^2$.</strong> The exponent attaches only to $x$.
                </li>
                <li>
                  <strong>Distribute exponents over sums.</strong> $(2 + x)^3 \neq 8 + x^3$.
                </li>
                <li>
                  <strong>Cancel terms inside a sum.</strong>{' '}
                  {`$\\frac{3 + 2x}{5 + 3x} \\neq \\frac{3}{5}$`}. Only factors cancel.
                </li>
                <li>
                  <strong>Flip just one sign when subtracting a group.</strong> $-(a - b) = -a + b$,
                  not $-a - b$.
                </li>
                <li>
                  <strong>Combine unlike terms.</strong> $5x^2 + 6x \neq 11x^2$.
                </li>
                <li>
                  <strong>Call zero positive or negative.</strong> It is neither.
                </li>
              </ul>
            </div>
          </div>
        </>
      ]
    },
    customCss:
      '.MafsView { --mafs-bg: transparent; --mafs-fg: rgba(240,240,250,1); --mafs-line-color: rgba(240,240,250,0.15); }'
  }

  return config
}

export default function AlgebraicFoundations() {
  const config = useConfig()
  return <LearningTemplate config={config} />
}
