import { LearningTemplate } from '../../../../components/learning/learning-template'
import { useVizColors } from '../../../../hooks/use-viz-colors'

import {
  PlaceValueNumberLine,
  WholeDistributiveLawArea as DistributiveLawAreaModel,
  AdditionCarryVis, SubtractionTradingVis,
  WholeMultiplicationArea as MultiplicationAreaModel,
  LongDivisionStepVis
} from '../../../../components/viz/math-viz/modules'

export default function PlaceValueAndAlgorithms() {
  const C = useVizColors()

  const config = {
    cssPrefix: 'whn',
    source: 'Understanding Numbers in Elementary School Mathematics - Hung-Hsi Wu',
    documentTitle: 'Place Value and Algorithms - AETHER',
    learning: {
      category: 'Part 1',
      title: 'Place Value and Algorithms',
      subtitle:
        'Place value, the number line, laws of arithmetic, and the four standard algorithms. Every concept built from counting.',
      sections: [
        /* ════════════════════════════════════════════════════════════════════════
         SECTION 1: PLACE VALUE
         ════════════════════════════════════════════════════════════════════════ */
        <>
          <h2>Place Value</h2>

          <p>
            Every number you use (prices, scores, distances, ages) depends on place value. Without
            it, arithmetic would be impossible.
          </p>

          <h3>How to Count</h3>
          <p>
            Our number system uses exactly ten symbols: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9. You count by
            placing these symbols in different positions.
          </p>

          <div className="lrn-definition">
            <span className="lrn-definition-term">Ones Place</span>
            <div className="lrn-definition-desc">
              With a single position you can write ten different quantities: 0 through 9.
            </div>
          </div>

          <p>
            At 9, you run out of symbols. To keep counting, add a second place to the left: the tens
            place.
          </p>

          <div className="lrn-eq">{`$$0, 1, 2, \\ldots, 9, 10, 11, \\ldots, 99$$`}</div>
          <p>{`After 9 comes 10, the first number in the tens. After 99 comes 100, the first number in the hundreds. Each new place multiplies the range by 10.`}</p>

          <p>
            <strong>Real-world connection.</strong> Odometers in cars use place value. The rightmost
            wheel spins fastest (ones). When it hits 9, the next wheel clicks forward (tens).
          </p>

          <div className="lrn-graph">
            <PlaceValueNumberLine C={C} />
          </div>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>
              Why does it take exactly 10 steps to count from 0 to 10, from 10 to 20, or from 90 to
              100?
            </p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                Each row has exactly 10 entries (one per ones-digit symbol). Going through one full
                row takes 10 steps. This holds for every row.
              </p>
            </details>
          </div>

          <h3>Skip-Counting</h3>
          <p>Skip-counting by 10 from 0 lands at 100 after 10 steps:</p>
          <div className="lrn-eq">{`$$0 \\to 10 \\to 20 \\to 30 \\to \\cdots \\to 90 \\to 100$$`}</div>
          <p>
            Skip-counting by 100 from 0 lands at 1000 after 10 steps. By 1000, you reach 10000. The
            pattern holds for any power of 10.
          </p>

          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>{`If you skip-count by $100{,}000$ starting at 0, where do you land after 10 steps?`}</p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>{`At $1{,}000{,}000$. Each skip adds one more zero. 10 steps of skip-counting by $10^n$ produces $10^{n+1}$.`}</p>
            </details>
          </div>

          <h3>Addition as Continued Counting</h3>
          <p>{`The addition $a + b$ means: start at $a$ and count $b$ more steps. For example, $4 + 5 = 9$. Count 5 steps from 4: $4 \\to 5 \\to 6 \\to 7 \\to 8 \\to 9$.`}</p>
          <p>{`The sum $a + b + c$ means: count $b$ steps from $a$, then count $c$ more steps from where you land.`}</p>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>{`Using continued counting, verify that $172 + 39 = 211$.`}</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>{`Start at 172 and count 39 steps: $172, 173, 174, \\ldots, 210, 211$. The 39th step lands on 211. So $172 + 39 = 211$.`}</p>
            </details>
          </div>

          <h3>Each Digit's Value</h3>
          <p>{`Each digit in a number stands for a specific value based on its position. In 38, the 3 does not stand for 3. It stands for 30.`}</p>
          <p>{`The digit 3 counts three complete groups of ten. Three groups of ten is 30.`}</p>

          <div className="lrn-eq lrn-eq-display">{`$$3728 = 3000 + 700 + 20 + 8$$`}</div>
          <p>This sum showing each digit with its place value is the expanded form of 3728.</p>

          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>{`In Roman numerals, the three X's in XXXIII each stand for 10. Position does not matter. In Hindu-Arabic numerals, the 1's in 111 stand for 100, 10, and 1. Position determines meaning.`}</p>
          </div>

          <h3>The Number Line</h3>
          <p>{`Fix a horizontal line. Mark a point as 0. Mark equally spaced points to its right as 1, 2, 3, and so on. This is the number line.`}</p>
          <p>{`The segment from 0 to 1 is the unit segment $[0, 1]$. Its length is 1. This is the unit.`}</p>

          <div className="lrn-definition">
            <span className="lrn-definition-term">Length</span>
            <div className="lrn-definition-desc">{`The length of a segment is the distance between its two endpoints. The segment from 2 to 5 has length 3.`}</div>
          </div>

          <p>{`Addition on the number line means placing one segment right after another. To compute $4 + 7$: place a segment of length 7 right after a segment of length 4. The total length is 11.`}</p>
          <p>
            <strong>
              Addition = place one segment after another, then measure the total length.
            </strong>
          </p>

          <h3>Comparing Numbers</h3>
          <p>{`A number $b$ is bigger than $a$ (written $a < b$) when $a$ comes before $b$ in counting. On the number line, $a < b$ means $a$ is to the left of $b$.`}</p>

          <div className="lrn-definition">
            <span className="lrn-definition-term">Trichotomy Law</span>
            <div className="lrn-definition-desc">{`For any two whole numbers $a$ and $b$, exactly one holds: $a = b$, $a < b$, or $a > b$.`}</div>
          </div>

          <p>
            For example, pick any two whole numbers. One must be larger, or they are equal. No other
            option exists.
          </p>

          <p>{`Two quick rules for comparing whole numbers:`}</p>
          <ul className="lrn-list">
            <li>{`If $b$ is in a higher place value range than $a$, then $a < b$. Example: any number in the hundreds is less than any number in the thousands.`}</li>
            <li>{`If $a$ and $b$ are in the same range, compare left to right. The first place where they differ decides.`}</li>
          </ul>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>{`Explain without computation why $7001 > 5897$.`}</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>{`Both are in the thousands. The leftmost digit of 7001 is 7, and of 5897 is 5. Since $7 > 5$, we have $7001 > 5897$.`}</p>
            </details>
          </div>

          <h3>Multiplication and Expanded Form</h3>
          <p>{`Multiplication is a shorthand for repeated addition. We define $mk$ as the sum of $m$ copies of $k$:`}</p>
          <div className="lrn-eq lrn-eq-display">{`$$mk = \\underbrace{k + k + \\cdots + k}_{m} \\quad (m \\neq 0), \\qquad 0 \\cdot k = 0$$`}</div>

          <p>{`This leads to powers of 10: $10^n$ means $n$ copies of 10 multiplied together.`}</p>
          <div className="lrn-eq">{`$$10^n = \\underbrace{10 \\times 10 \\times \\cdots \\times 10}_{n}, \\qquad 10^0 = 1$$`}</div>

          <p>{`Using exponents, the expanded form of any number is precise. For example:`}</p>
          <div className="lrn-eq">{`$$298{,}534{,}453 = (2 \\times 10^8) + (9 \\times 10^7) + (8 \\times 10^6) + \\cdots + (3 \\times 10^0)$$`}</div>
          <p>{`Each digit is the multiplier for its matching power of 10. The digit 9 in $298{,}534{,}453$ multiplies $10^7$, contributing $9{,}000{,}000$.`}</p>

          <h3>All About Zero</h3>
          <p>{`Multiplying by a power of 10 appends zeros. Write $k$ zeros after the last digit of $N$ to get $N \\times 10^k$.`}</p>
          <div className="lrn-eq">{`$$37 \\times 1000 = 37000$$`}</div>
          <p>
            Leading zeros do not change a number. The expanded form shows why: each leading zero
            adds a term equal to 0.
          </p>
        </>,

        /* ════════════════════════════════════════════════════════════════════════
         SECTION 2: THE BASIC LAWS OF OPERATIONS
         ════════════════════════════════════════════════════════════════════════ */
        <>
          <h2>The Basic Laws of Operations</h2>

          <h3>The Equal Sign</h3>
          <p>{`Two whole numbers $a$ and $b$ are equal ($a = b$) if they are the same number. On the number line, $a = b$ means the same point.`}</p>
          <p>{`The equal sign does not mean "compute." It means "both sides name the same number." Counting 5 steps from 4 lands on the same point as 9.`}</p>

          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>{`A student writes $4 + 7 = ?$ and says the equal sign means "find the answer." What is wrong with this?`}</p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>{`The equal sign is not a command to compute. It states a relationship: both sides are the same number. "$4 + 7$" and "$11$" name the same point on the number line.`}</p>
            </details>
          </div>

          <h3>Associative and Commutative Laws of Addition</h3>
          <p>{`For any whole numbers $\\ell$, $m$, and $n$:`}</p>
          <div className="lrn-eq">{`$$(\\ell + m) + n = \\ell + (m + n) \\qquad \\text{(Associative Law)}$$`}</div>
          <div className="lrn-eq">{`$$m + n = n + m \\qquad \\text{(Commutative Law)}$$`}</div>

          <p>Together these imply a powerful result:</p>
          <div className="lrn-definition">
            <span className="lrn-definition-term">Addition Order Rule</span>
            <div className="lrn-definition-desc">
              For any collection of numbers, the sums you get by adding them in any order are all
              equal.
            </div>
          </div>

          <p>{`This means $a + b + c + \\cdots + k$ gives the same answer no matter how you group it. No parentheses needed.`}</p>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>{`Use Addition Order Rule to compute $26 + 38$ without the addition algorithm.`}</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>{`$26 + 38 = (10 + 10 + 6) + (10 + 10 + 10 + 8)$. By Addition Order Rule, rearrange: $(10 + 10 + 10 + 10 + 10) + (6 + 8) = 50 + 14 = 60 + 4 = 64$.`}</p>
            </details>
          </div>

          <h3>Associative and Commutative Laws of Multiplication</h3>
          <p>{`For any whole numbers $\\ell$, $m$, and $n$:`}</p>
          <div className="lrn-eq">{`$$(\\ell m)n = \\ell(mn) \\qquad \\text{(Associative Law)}$$`}</div>
          <div className="lrn-eq">{`$$mn = nm \\qquad \\text{(Commutative Law)}$$`}</div>
          <p>{`These laws mean you can compute products in any order.`}</p>
          <div className="lrn-definition">
            <span className="lrn-definition-term">Multiplication Order Rule</span>
            <div className="lrn-definition-desc">
              For any collection of numbers, the products you get by multiplying them in any order
              are all equal.
            </div>
          </div>
          <p>
            For example, to show that {`$5 \\times 8 \\times 2 = 80$`}, compute in any order:{' '}
            {`$(5 \\times 2) \\times 8 = 10 \\times 8 = 80$`}.
          </p>
          <p>{`The commutative law halves the table. Knowing $3 \\times 7$ gives you $7 \\times 3$ for free.`}</p>

          <h3>The Distributive Law</h3>
          <p>{`The distributive law connects addition and multiplication:`}</p>
          <div className="lrn-eq lrn-eq-display">{`$$m(n + \\ell) = mn + m\\ell$$`}</div>
          <p>{`It is the only law that involves both operations. It is the glue that binds $+$ and $\\times$ together.`}</p>

          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>{`The area model makes this visual. Split a rectangle with sides $m$ and $n + \\ell$ into two parts: $m \\times n$ and $m \\times \\ell$. The total area is $mn + m\\ell$.`}</p>
          </div>

          <div className="lrn-graph">
            <DistributiveLawAreaModel C={C} />
          </div>

          <p>{`The distributive law enables mental math. To compute $43 \\times 6$:`}</p>
          <div className="lrn-eq">{`$$43 \\times 6 = (40 + 3) \\times 6 = 240 + 18 = 258$$`}</div>

          <p>It also generalizes to more numbers:</p>
          <div className="lrn-eq">{`$$m(a + b + c + d) = ma + mb + mc + md$$`}</div>

          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>{`Use the distributive law to compute $53 \\times 7$ mentally.`}</p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>{`$53 \\times 7 = (50 + 3) \\times 7 = 350 + 21 = 371$.`}</p>
            </details>
          </div>

          <h3>Inequalities</h3>
          <p>{`Inequalities interact with addition and multiplication in predictable ways. For all whole numbers $a$, $b$, $c$, $d$:`}</p>
          <ul className="lrn-list">
            <li>{`$b < c$ is equivalent to $a + b < a + c$`}</li>
            <li>{`If $a > 0$, then $b < c$ is equivalent to $ab < ac$`}</li>
            <li>{`$a < b$ and $c < d$ implies $a + c < b + d$`}</li>
            <li>{`$a < b$ and $c < d$ implies $ac < bd$`}</li>
          </ul>
          <p>{`The second fact holds only when $a > 0$. If $a = 0$, both sides become 0 and the strict inequality becomes an equality.`}</p>
        </>,

        /* ════════════════════════════════════════════════════════════════════════
         SECTION 3: THE ADDITION ALGORITHM
         ════════════════════════════════════════════════════════════════════════ */
        <>
          <h2>The Standard Algorithms and Addition</h2>

          <h3>The Core Idea</h3>
          <p>
            An algorithm is a list of clearly defined steps. The four standard algorithms (addition,
            subtraction, multiplication, division) are the workhorses of arithmetic.
          </p>

          <div className="lrn-definition">
            <span className="lrn-definition-term">The Principle</span>
            <div className="lrn-definition-desc">
              To compute with multidigit numbers, break the problem into steps where each step
              involves only a single digit.
            </div>
          </div>

          <p>
            This idea shows up in every algorithm you learn here. No matter how large the numbers,
            you only need single-digit computations. The algorithms turn hard problems into easy
            ones.
          </p>

          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              Before reading the algorithm, predict: if you add 865 + 32 column by column, which
              direction should you go? Left to right, or right to left?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                Right to left. If a column sum exceeds 9, you carry to the next column on the left.
                Going right to left handles each carry as it appears.
              </p>
            </details>
          </div>

          <h3>The Basic Idea of Addition</h3>
          <p>{`Consider $34 + 25$. By definition, this means counting 25 steps from 34. Place value offers a shortcut.`}</p>
          <p>{`Think of 34 as 3 groups of 10 plus 4 loose ones. Think of 25 as 2 groups plus 5 loose ones. Combine the groups: $3 + 2 = 5$ groups of ten. Combine the ones: $4 + 5 = 9$. Total: 50 + 9 = 59.`}</p>
          <p>
            This is exactly what the addition algorithm does. Each digit comes prepackaged with its
            place value.
          </p>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>{`Using the money model (ten-dollar and one-dollar bills), explain why $34 + 25 = 59$.`}</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>{`\\$34 = 3 ten-dollar bills + 4 ones. \\$25 = 2 ten-dollar bills + 5 ones. Collect the tens: $3 + 2 = 5$ ten-dollar bills. Collect the ones: $4 + 5 = 9$ one-dollar bills. Total: \\$59.`}</p>
            </details>
          </div>

          <h3>The Addition Algorithm</h3>
          <p>
            The algorithm adds digits column by column, from right to left. When no column sum
            exceeds 9, the process is simple:
          </p>
          <p>
            <strong>{`Example: $438 + 51$ (no carrying)`}</strong>
          </p>
          <ul className="lrn-list">
            <li>{`Ones: $8 + 1 = 9$`}</li>
            <li>{`Tens: $3 + 5 = 8$`}</li>
            <li>{`Hundreds: $4 + 0 = 4$`}</li>
          </ul>
          <p>{`Answer: $489$.`}</p>

          <p>Why does this work? Using expanded form:</p>
          <div className="lrn-eq">{`$$438 + 51 = (400 + 30 + 8) + (0 + 50 + 1) = (400 + 0) + (30 + 50) + (8 + 1) = 489$$`}</div>
          <p>
            Addition Order Rule justifies rearranging the terms. Column-wise addition is just adding
            digits with the same place value.
          </p>

          <div className="lrn-graph">
            <AdditionCarryVis C={C} />
          </div>

          <h3>Carrying</h3>
          <p>{`When a column sum exceeds 9, the algorithm carries to the next column.`}</p>
          <p>
            <strong>{`Example: $493 + 578$`}</strong>
          </p>
          <ul className="lrn-list">
            <li>{`Ones: $3 + 8 = 11$. Record 1, carry 1 to tens.`}</li>
            <li>{`Tens: $9 + 7 + 1 = 17$. Record 7, carry 1 to hundreds.`}</li>
            <li>{`Hundreds: $4 + 5 + 1 = 10$. Record 0, carry 1 to thousands.`}</li>
            <li>{`Thousands: $0 + 0 + 1 = 1$.`}</li>
          </ul>
          <p>{`Answer: $1071$.`}</p>

          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>{`Why carrying works: $90 + 70 = 160$. Write 6 in the tens place and carry the $100$ to hundreds: $400 + 500 + 100 = 1000$. The ones give $3 + 8 = 11$: write 1, carry $10$ to the tens. That makes $60 + 10 = 70$. Total: $1000 + 70 + 1 = 1071$.`}</p>
          </div>

          <div className="lrn-warning">
            <p>
              <strong>Common mistake:</strong> Adding left to right. If you start from the left, a
              carry from a later column forces you to go back and change digits you already wrote.
              Always go right to left.
            </p>
          </div>

          <h3>Adding Multiple Numbers</h3>
          <p>{`The algorithm extends to adding many numbers at once. Add digits in each column. If the sum exceeds 9, record the ones digit and carry the tens digit.`}</p>
          <p>
            <strong>{`Example: $165 + 27 + 83 + 829$`}</strong>
          </p>
          <ul className="lrn-list">
            <li>{`Ones: $5 + 7 + 3 + 9 = 24$. Record 4, carry 2.`}</li>
            <li>{`Tens: $6 + 2 + 8 + 2 + 2 = 20$. Record 0, carry 2.`}</li>
            <li>{`Hundreds: $1 + 0 + 0 + 8 + 2 = 11$. Record 1, carry 1.`}</li>
            <li>{`Thousands: $1$. Answer: $1104$.`}</li>
          </ul>

          <div className="lrn-faded">
            <div className="lrn-faded-phase">
              <span className="lrn-faded-label">COMPLETE EXAMPLE</span>
              <p>
                <strong>{`$4502 + 263$`}</strong>
              </p>
              <p>{`Ones: $2 + 3 = 5$. Tens: $0 + 6 = 6$. Hundreds: $5 + 2 = 7$. Thousands: $4 + 0 = 4$. Answer: $4765$.`}</p>
            </div>
            <div className="lrn-faded-phase">
              <span className="lrn-faded-label">YOUR TURN: PARTIAL</span>
              <p>
                <strong>{`$7831 + 456$`}</strong>
              </p>
              <p>{`Ones: $1 + 6 = ?$. Tens: $3 + 5 = ?$. Hundreds: $8 + 4 = ?$ (carry needed!) Thousands: $7 + ? = ?$. What is the answer?`}</p>
            </div>
            <div className="lrn-faded-phase">
              <span className="lrn-faded-label">INDEPENDENT PRACTICE</span>
              <p>
                <strong>{`Compute $9274 + 1856$ using the addition algorithm. Explain each carry.`}</strong>
              </p>
            </div>
          </div>
        </>,

        /* ════════════════════════════════════════════════════════════════════════
         SECTION 4: THE SUBTRACTION ALGORITHM
         ════════════════════════════════════════════════════════════════════════ */
        <>
          <h2>The Subtraction Algorithm</h2>

          <p>
            <strong>Real-world connection.</strong> Making change at a store uses subtraction. If
            something costs \$3.47 and you pay \$5.00, the cashier trades: break the \$5 into
            smaller bills, then subtract.
          </p>

          <h3>What Subtraction Means</h3>
          <p>{`Subtraction is the reverse of addition. The number $a - b$ is the whole number $c$ that makes $a = b + c$ true.`}</p>
          <p>{`Think of it this way. You know that $5 + 3 = 8$. So $8 - 3$ must equal 5. The subtraction undoes what the addition did.`}</p>
          <p>{`This means subtraction only works when $a \\geq b$. There is no whole number $c$ where $3 = 7 + c$. So $3 - 7$ has no answer in whole numbers.`}</p>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>{`Why does $12 - 5 = 7$? Use the definition above to check.`}</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>{`By definition, $12 - 5$ is the whole number $c$ where $12 = 5 + c$. Since $5 + 7 = 12$, we have $c = 7$. So $12 - 5 = 7$.`}</p>
            </details>
          </div>

          <h3>The Subtraction Algorithm</h3>
          <p>
            The subtraction algorithm works one column at a time, from right to left. Each column
            subtracts single digits.
          </p>
          <p>
            <strong>{`Example: $1658 - 257$ (no trading needed)`}</strong>
          </p>
          <p>Line up the digits by place value:</p>
          <div className="lrn-eq">{`$$1658 - 257$$`}</div>
          <ul className="lrn-list">
            <li>{`Ones: $8 - 7 = 1$`}</li>
            <li>{`Tens: $5 - 5 = 0$`}</li>
            <li>{`Hundreds: $6 - 2 = 4$`}</li>
            <li>{`Thousands: $1 - 0 = 1$`}</li>
          </ul>
          <p>{`Answer: $1401$.`}</p>

          <h3>Trading (Regrouping)</h3>
          <p>
            What happens when a top digit is smaller than the bottom digit? You trade from the next
            column.
          </p>

          <div className="lrn-graph">
            <SubtractionTradingVis C={C} />
          </div>

          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>{`In $756 - 389$, the ones column has $6 - 9$. What do you think happens?`}</p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>{`You trade 1 ten from the tens column, turning the 6 into 16. Then $16 - 9 = 7$. The tens digit drops by 1 to compensate.`}</p>
            </details>
          </div>

          <p>
            <strong>{`Example: $756 - 389$`}</strong>
          </p>
          <ul className="lrn-list">
            <li>{`Ones: $6 < 9$. Trade 1 ten from the tens column. Now you have $16 - 9 = 7$.`}</li>
            <li>{`Tens: After trading, the tens digit dropped from 5 to 4. But $4 < 8$. Trade 1 hundred. Now $14 - 8 = 6$.`}</li>
            <li>{`Hundreds: After trading, 7 dropped to 6. Then $6 - 3 = 3$.`}</li>
          </ul>
          <p>{`Answer: $756 - 389 = 367$.`}</p>
          <p>
            <strong>Why trading works.</strong>
            {` When you trade 1 ten for 10 ones, the total value stays the same. $50 + 6 = 40 + 16$. You changed how the number is written, not the number itself.`}
          </p>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>In your own words, why does trading not change the value of the number?</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>{`Trading swaps 1 unit at a higher place value for 10 units at the next lower one. Since $1 \\times 10^k = 10 \\times 10^{k-1}$, the total value stays the same. You break the number down differently, not change it.`}</p>
            </details>
          </div>

          <h3>Trading Across Zeros</h3>
          <p>
            <strong>{`Example: $50003 - 465$`}</strong>
          </p>
          <p>
            The top number has three zeros in a row. You need to subtract 5 from 3 in the ones
            column. But where do you trade from? The tens, hundreds, and thousands digits are all 0.
          </p>
          <p>
            The trick: trade from the ten-thousands place. One ten-thousand becomes 10 thousands.
            One of those thousands becomes 10 hundreds. One hundred becomes 10 tens. One ten becomes
            10 ones added to the 3.
          </p>
          <p>
            {`After all the trading: $50003 = 49000 + 900 + 90 + 13$.`} Now subtract column by
            column:
          </p>
          <ul className="lrn-list">
            <li>{`Ones: $13 - 5 = 8$`}</li>
            <li>{`Tens: $9 - 6 = 3$`}</li>
            <li>{`Hundreds: $9 - 4 = 5$`}</li>
            <li>{`Thousands: $9 - 0 = 9$`}</li>
            <li>{`Ten-thousands: $4 - 0 = 4$`}</li>
          </ul>
          <p>{`Answer: $49538$.`}</p>

          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>
              What pattern do you see when you trade across a row of zeros? The zeros all become 9s,
              and the last digit gets 10 added to it. This always happens because each zero must
              pass the trade through to the next column.
            </p>
          </div>

          <h3>A Special Shortcut</h3>
          <p>When the top number is slightly bigger than a power of 10, rewrite it.</p>
          <div className="lrn-eq">{`$$50003 - 465 = (49999 + 4) - (465 + 0) = (49999 - 465) + (4 - 0) = 49534 + 4 = 49538$$`}</div>
          <p>{`This works because you can subtract group-by-group when each part of the top number is at least as large as the matching part of the bottom. No trading needed. See the proof below.`}</p>

          <div className="lrn-faded">
            <div className="lrn-faded-phase">
              <span className="lrn-faded-label">COMPLETE EXAMPLE</span>
              <p>{`$50003 - 465 = (49999 + 4) - 465 = (49999 - 465) + 4 = 49534 + 4 = 49538$`}</p>
            </div>
            <div className="lrn-faded-phase">
              <span className="lrn-faded-label">YOUR TURN: PARTIAL</span>
              <p>{`Try $30024 - 8697$. Rewrite $30024$ as $29999 + \\rule{1cm}{0.5pt}$. Then compute $29999 - 8697 + \\rule{1cm}{0.5pt} = \\rule{1cm}{0.5pt}$.`}</p>
            </div>
          </div>

          <h3>A Property of Subtraction</h3>
          <p>{`Here is the proof that this works, given $\\ell \\geq a$, $m \\geq b$, and $n \\geq c$:`}</p>

          <div className="lrn-proof">
            <span className="lrn-proof-label">WHY IT WORKS</span>
            <ol className="lrn-list">
              <li>{`Let $x = \\ell - a$, $y = m - b$, $z = n - c$.`}</li>
              <li>{`By the definition of subtraction: $\\ell = x + a$, $m = y + b$, $n = z + c$.`}</li>
              <li>{`Add all three: $\\ell + m + n = (a + b + c) + (x + y + z)$.`}</li>
              <li>{`Apply the definition of subtraction again: $(\\ell + m + n) - (a + b + c) = x + y + z$.`}</li>
            </ol>
          </div>

          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">{`"Borrowing"`}</span>
              <p>
                Suggests you take something and must return it. Misleading. Nothing is owed back.
              </p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">{`"Trading"`}</span>
              <p>
                Accurate. You exchange 1 ten for 10 ones. Equal value, different form. No debt
                involved.
              </p>
            </div>
          </div>
        </>,

        /* ════════════════════════════════════════════════════════════════════════
         SECTION 5: THE MULTIPLICATION ALGORITHM
         ════════════════════════════════════════════════════════════════════════ */
        <>
          <h2>The Multiplication Algorithm</h2>

          <h3>The Algorithm</h3>
          <p>The multiplication algorithm has two parts:</p>
          <ol className="lrn-list">
            <li>
              Multiply a multi-digit number by a single digit (using the table for each step).
            </li>
            <li>Multiply two multi-digit numbers (by applying Part 1 once per digit).</li>
          </ol>
          <p>
            You must know the single-digit multiplication table by heart. The algorithm depends on
            it.
          </p>

          <div className="lrn-callout">
            <p>{`You must memorize the multiplication table (up to $9 \\times 9$). Everything else you can figure out. Understand the algorithm; do not memorize it.`}</p>
          </div>

          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>{`The table is $9 \\times 9$, not $10 \\times 10$, because $0$ times anything is 0. You never need to look up a product involving 0. The table only stores the non-trivial facts.`}</p>
          </div>

          <table className="lrn-table">
            <thead>
              <tr>
                <th>×</th>
                {Array.from({ length: 9 }, (_, i) => (
                  <th key={i}>{i + 1}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {Array.from({ length: 9 }, (_, r) => (
                <tr key={r}>
                  <td>
                    <strong>{r + 1}</strong>
                  </td>
                  {Array.from({ length: 9 }, (_, c) => (
                    <td key={c}>{(r + 1) * (c + 1)}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>

          <div className="lrn-graph">
            <MultiplicationAreaModel C={C} />
          </div>

          <p>
            <strong>Part 1: Multi-digit times single digit.</strong>
            {` Example: $852 \\times 3$. Work right to left.`}
          </p>
          <ul className="lrn-list">
            <li>{`$2 \\times 3 = 6$. Write 6 in ones column.`}</li>
            <li>{`$5 \\times 3 = 15$. Write 5 in tens, carry 1 to hundreds.`}</li>
            <li>{`$8 \\times 3 = 24$. Add the carried 1: $24 + 1 = 25$. Write 5 in hundreds, 2 in thousands.`}</li>
          </ul>
          <p>{`Answer: $2556$.`}</p>

          <p>
            <strong>Part 2: Multi-digit times multi-digit.</strong>
            {` Example: $852 \\times 73$. Break 73 into its digits: 7 and 3.`}
          </p>
          <ul className="lrn-list">
            <li>{`Compute $852 \\times 3 = 2556$.`}</li>
            <li>{`Compute $852 \\times 7 = 5964$.`}</li>
            <li>Write 5964 shifted one column to the left (because the 7 means 70).</li>
            <li>{`Add: $2556 + 59640 = 62196$.`}</li>
          </ul>

          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              Why does the second row shift one column left? Think about what the 7 in 73 actually
              represents.
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>{`The 7 in 73 represents 70, not 7. So $852 \\times 7$ is really $852 \\times 70 = (852 \\times 7) \\times 10$. Multiplying by 10 shifts all digits one place left. The shift IS the multiplication by 10.`}</p>
            </details>
          </div>

          <h3>Why the Algorithm Works</h3>
          <p>The distributive law is the engine behind multiplication.</p>
          <div className="lrn-eq lrn-eq-display">{`$$852 \\times 73 = 852 \\times (70 + 3) = (852 \\times 70) + (852 \\times 3)$$`}</div>
          <p>{`And $852 \\times 70 = (852 \\times 7) \\times 10$. Multiplying by 10 shifts all digits one place left. That is why you shift the second row.`}</p>
          <p>
            <strong>For single-digit times multi-digit:</strong>
          </p>
          <div className="lrn-eq">{`$$852 \\times 3 = (800 + 50 + 2) \\times 3 = (8 \\times 3) \\times 100 + (5 \\times 3) \\times 10 + (2 \\times 3)$$`}</div>
          <p>
            The distributive law breaks the problem into single-digit multiplications. The carrying
            handles the overflow when a product exceeds 9.
          </p>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>{`The number $852 \\times 3$ equals $(8 \\times 3) \\times 100 + (5 \\times 3) \\times 10 + (2 \\times 3)$. Match each part to a step in the algorithm.`}</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>{`Step 1 computes $2 \\times 3 = 6$ (the ones). Step 2 computes $5 \\times 3 = 15$ (the tens, with carry). Step 3 computes $8 \\times 3 = 24$ plus the carry (the hundreds and thousands). Each step matches one term in the expanded form.`}</p>
            </details>
          </div>

          <h3>Why Common Textbook Explanations Fail</h3>
          <p>{`Many textbooks say "$3 \\times 5$ means 3 groups of 5." That works for small numbers. But it does not explain why $35 \\times 27$ equals $(35 \\times 7) + (35 \\times 20)$.`}</p>
          <p>{`Without the distributive law, multi-digit multiplication is just a trick. The algorithm is not magic. Each step follows from one rule: $a \\times (b + c) = (a \\times b) + (a \\times c)$. A student who knows this rule can rebuild the algorithm from scratch.`}</p>

          <h3>The General Multiplication Algorithm</h3>
          <p>{`Here is a concrete example first. Take $852 \\times 473$. Write $473 = 4 \\times 100 + 7 \\times 10 + 3$. Apply the distributive law:`}</p>
          <div className="lrn-eq">{`$$852 \\times 473 = (852 \\times 4) \\times 100 + (852 \\times 7) \\times 10 + (852 \\times 3)$$`}</div>
          <p>{`Each term is a single-digit-times-multi-digit problem. You already know how those work. Go one level deeper. Take $852 \\times 4$:`}</p>
          <div className="lrn-eq">{`$$852 \\times 4 = (8 \\times 4) \\times 100 + (5 \\times 4) \\times 10 + (2 \\times 4)$$`}</div>
          <p>
            Every multiplication reduces to single-digit times single-digit. The distributive law
            does all the work.
          </p>

          <p>
            <strong>The general pattern.</strong>
            {` This works for any two numbers, no matter how many places they have. The double sum notation writes it compactly:`}
          </p>
          <div className="lrn-eq lrn-eq-display">{`$$A \\times B = \\sum_{i} \\sum_{j} (a_i \\times b_j) \\times 10^{i+j}$$`}</div>
          <p>{`The $\\sum$ symbol means "add up all terms." Each $a_i \\times b_j$ is a single-digit product. Each $10^{i+j}$ is a shift. The carrying handles overflow.`}</p>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>{`In the product $852 \\times 473$, the term $(5 \\times 7) \\times 10^2$ comes from which digit of 852 and which digit of 473? What power of 10 does it contribute to?`}</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>{`The 5 is in the tens place of 852 (index $i = 1$). The 7 is in the tens place of 473 (index $j = 1$). The product contributes to $10^{1+1} = 10^2$, the hundreds place. So $(5 \\times 7) \\times 100 = 3500$.`}</p>
            </details>
          </div>

          <div className="lrn-faded">
            <div className="lrn-faded-phase">
              <span className="lrn-faded-label">COMPLETE EXAMPLE</span>
              <p>
                <strong>{`$347 \\times 26$`}</strong>
              </p>
              <ul className="lrn-list">
                <li>{`$347 \\times 6 = 2082$`}</li>
                <li>{`$347 \\times 2 = 694$, shift one place left: $6940$`}</li>
                <li>{`Add: $2082 + 6940 = 9022$`}</li>
              </ul>
            </div>
            <div className="lrn-faded-phase">
              <span className="lrn-faded-label">YOUR TURN: PARTIAL</span>
              <p>
                <strong>{`$529 \\times 43$`}</strong>
              </p>
              <ul className="lrn-list">
                <li>{`$529 \\times 3 = \\rule{1cm}{0.5pt}$`}</li>
                <li>{`$529 \\times 4 = \\rule{1cm}{0.5pt}$, shift one place left: $\\rule{1cm}{0.5pt}$`}</li>
                <li>{`Add: $\\rule{1cm}{0.5pt} + \\rule{1cm}{0.5pt} = \\rule{1cm}{0.5pt}$`}</li>
              </ul>
            </div>
            <div className="lrn-faded-phase">
              <span className="lrn-faded-label">INDEPENDENT PRACTICE</span>
              <p>
                <strong>{`Compute $618 \\times 57$ using the multiplication algorithm.`}</strong>
              </p>
            </div>
          </div>

          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Standard Algorithm</span>
              <p>{`Writes $852 \\times 7$ shifted left by one digit, omitting the trailing zero. Compact notation.`}</p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Expanded Form</span>
              <p>{`Writes $852 \\times 70 = 59640$ with the zero shown. Both give the same result. The shift IS the zero.`}</p>
            </div>
          </div>
        </>,

        /* ════════════════════════════════════════════════════════════════════════
         SECTION 6: THE LONG DIVISION ALGORITHM
         ════════════════════════════════════════════════════════════════════════ */
        <>
          <h2>The Long Division Algorithm</h2>

          <h3>Division as Multiplication in Reverse</h3>
          <p>{`Division reverses multiplication. The statement $24 \\div 3 = 8$ means the same as $24 = 8 \\times 3$. If $m$ is a multiple of a nonzero number $n$, then $m \\div n$ is the whole number $k$ where $m = kn$.`}</p>
          <p>
            {`The number $k$ is the `}
            <strong>quotient</strong>
            {`. The number $n$ is the `}
            <strong>divisor</strong>
            {`. The number $m$ is the `}
            <strong>dividend</strong>
            {`.`}
          </p>
          <p>Division has two interpretations:</p>

          <div className="lrn-definition">
            <span className="lrn-definition-term">Measurement Division</span>
            <div className="lrn-definition-desc">{`$m \\div n$ counts how many groups of $n$ fit inside $m$. Example: 48 ounces, cups of 8. How many cups? $48 \\div 8 = 6$.`}</div>
          </div>
          <div className="lrn-definition">
            <span className="lrn-definition-term">Partitive Division</span>
            <div className="lrn-definition-desc">{`$m \\div n$ finds the size of each group when $m$ is split into $n$ equal groups. Example: 48 ounces shared among 8 guests. How much each? $48 \\div 8 = 6$.`}</div>
          </div>

          <p>Both give the same number. This works because multiplication is commutative.</p>

          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              A car travels 264 miles in 4 hours at constant speed. Is finding the speed a
              measurement or partitive division problem?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                Partitive. You know the number of groups (4 hours) and want the size of each group
                (miles per hour). 264 miles split into 4 equal time intervals gives 66 mph.
              </p>
            </details>
          </div>

          <h3>Division-with-Remainder</h3>
          <p>{`What if $m$ is not a multiple of $n$? Example: $25 \\div 6$. No multiple of 6 equals 25. But $4 \\times 6 = 24$ is the largest multiple of 6 that fits inside 25. The leftover is $25 - 24 = 1$.`}</p>
          <p>{`We write: $25 = (4 \\times 6) + 1$. The quotient is 4. The remainder is 1.`}</p>
          <p>
            <strong>Division-with-Remainder Theorem.</strong>
            {` For any whole numbers $a$ and $d$ with $d > 0$, there exist unique whole numbers $q$ and $r$ such that:`}
          </p>
          <div className="lrn-eq lrn-eq-display">{`$$a = qd + r, \\quad 0 \\leq r < d$$`}</div>
          <p>{`The number $q$ is the quotient. The number $r$ is the remainder. They are the only pair that works.`}</p>

          <div className="lrn-callout">
            <p>{`The notation "$25 \\div 6 = 4$ R $1$" is misleading. Neither "$25 \\div 6$" nor "$4$ R $1$" is a number. The correct statement is $25 = (4 \\times 6) + 1$.`}</p>
          </div>

          <p>{`On the number line, $a$ falls between two consecutive multiples of $d$: $qd$ and $(q+1)d$. The remainder $r$ is the distance from $qd$ to $a$.`}</p>

          <div className="lrn-proof">
            <span className="lrn-proof-header">Proof of the Division-with-Remainder Theorem</span>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">1.</span>
              <div className="lrn-proof-step-content">
                <p>
                  <strong>Existence.</strong>
                  {` List the multiples of $d$: $0, d, 2d, 3d, \\ldots$ This list grows without bound. So at some point a multiple exceeds $a$. Let $qd$ be the last multiple that does not exceed $a$. Set $r = a - qd$. Then $a = qd + r$. Because $qd \\leq a < (q+1)d$, we get $0 \\leq r < d$.`}
                </p>
              </div>
            </div>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">2.</span>
              <div className="lrn-proof-step-content">
                <p>
                  <strong>Uniqueness.</strong>
                  {` Suppose $a = q_1 d + r_1$ and $a = q_2 d + r_2$ with $0 \\leq r_1, r_2 < d$. Then $q_1 d + r_1 = q_2 d + r_2$. Rearrange: $(q_1 - q_2)d = r_2 - r_1$. The right side satisfies $|r_2 - r_1| < d$. The left side is a multiple of $d$. The only multiple of $d$ with absolute value less than $d$ is 0. So $q_1 = q_2$ and $r_1 = r_2$.`}
                </p>
              </div>
            </div>
            <div className="lrn-qed">Q.E.D.</div>
          </div>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>{`The existence proof finds $q$ by listing multiples of $d$. Why does this list always reach past $a$?`}</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>{`The multiples $0, d, 2d, 3d, \\ldots$ increase without bound. For any finite $a$, eventually $kd > a$ for some $k$. This is because $d \\geq 1$, so the multiples grow at least as fast as $0, 1, 2, 3, \\ldots$`}</p>
            </details>
          </div>

          <h3>The Long Division Algorithm</h3>
          <p>The algorithm finds the quotient one digit at a time, from left to right.</p>
          <p>
            <strong>{`Example: $742 \\div 4$`}</strong>
          </p>
          <div className="lrn-steps">
            <div className="lrn-step">
              <span className="lrn-step-title">Step 1</span>
              <p className="lrn-step-content">{`Divide the first digit 7 by 4. Quotient digit: 1. Remainder: 3.`}</p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">Step 2</span>
              <p className="lrn-step-content">{`Bring remainder forward: $10 \\times 3 + 4 = 34$. Divide 34 by 4. Quotient digit: 8. Remainder: 2.`}</p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">Step 3</span>
              <p className="lrn-step-content">{`Bring remainder forward: $10 \\times 2 + 2 = 22$. Divide 22 by 4. Quotient digit: 5. Remainder: 2.`}</p>
            </div>
          </div>
          <p>{`Quotient: 185. Remainder: 2. Check: $(185 \\times 4) + 2 = 740 + 2 = 742$.`}</p>

          <div className="lrn-graph">
            <LongDivisionStepVis C={C} />
          </div>

          <div className="lrn-faded">
            <div className="lrn-faded-phase">
              <span className="lrn-faded-label">COMPLETE EXAMPLE</span>
              <p>
                <strong>{`$742 \\div 4$`}</strong>
              </p>
              <ul className="lrn-list">
                <li>{`Step 1: $7 \\div 4 = 1$ R $3$`}</li>
                <li>{`Step 2: $34 \\div 4 = 8$ R $2$`}</li>
                <li>{`Step 3: $22 \\div 4 = 5$ R $2$`}</li>
                <li>Answer: 185 R 2</li>
              </ul>
            </div>
            <div className="lrn-faded-phase">
              <span className="lrn-faded-label">YOUR TURN: PARTIAL</span>
              <p>
                <strong>{`$1295 \\div 35$`}</strong>
              </p>
              <ul className="lrn-list">
                <li>{`Step 1: Divide 1 by 35. Quotient: $\\rule{1cm}{0.5pt}$. Remainder: $\\rule{1cm}{0.5pt}$`}</li>
                <li>{`Step 2: Bring down 2. Divide $\\rule{1cm}{0.5pt}$ by 35. Quotient: $\\rule{1cm}{0.5pt}$`}</li>
                <li>Continue until done.</li>
                <li>{`Answer: $\\rule{1cm}{0.5pt}$`}</li>
              </ul>
            </div>
          </div>

          <h3>Why the Algorithm Works</h3>
          <p>
            The key insight: each step is a division-with-remainder of a small number. The quotient
            digits combine to form the full quotient.
          </p>
          <p>{`For $742 \\div 4$, the three steps produce:`}</p>
          <div className="lrn-eq">
            <span>{`$$7 = (1 \\times 4) + 3$$`}</span>
          </div>
          <div className="lrn-eq">
            <span>{`$$34 = (8 \\times 4) + 2$$`}</span>
          </div>
          <div className="lrn-eq">
            <span>{`$$22 = (5 \\times 4) + 2$$`}</span>
          </div>
          <p>Using the expanded form of 185:</p>
          <div className="lrn-eq">{`$$742 = (1 \\times 10^2 + 8 \\times 10 + 5) \\times 4 + 2 = (1 \\times 10^2) \\times 4 + (8 \\times 10) \\times 4 + (5 \\times 4) + 2$$`}</div>
          <p>
            The algorithm breaks a hard division into a sequence of easy ones. Each easy division
            has a single-digit quotient.
          </p>
          <p>
            <strong>Why quotients are always single digits.</strong>
            {` At each step, the dividend is at most $10 \\times (d - 1) + 9 = 10d - 1$. The tenth multiple of $d$ is $10d$, which exceeds $10d - 1$. So the quotient must be less than 10.`}
          </p>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>{`The dividend at each step equals $10r + \\text{(next digit)}$ where $r < d$. Why does this guarantee the quotient is a single digit?`}</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>{`The maximum dividend is $10(d-1) + 9 = 10d - 1$. The quotient $q$ satisfies $q \\times d \\leq 10d - 1$, so $q \\leq \\frac{10d - 1}{d} < 10$. Since $q$ is a whole number, $q \\leq 9$.`}</p>
            </details>
          </div>

          <h3>The Money Interpretation</h3>
          <p>{`Think of $742 \\div 4$ as splitting \\$742 into 4 equal stacks. You have 7 hundred-dollar bills, 4 tens, and 2 ones.`}</p>
          <ul className="lrn-list">
            <li>Distribute the 7 hundreds among 4 stacks: 1 each, 3 left over.</li>
            <li>{`Convert 3 hundreds to 30 tens. Total tens: $30 + 4 = 34$. Distribute: 8 each, 2 left over.`}</li>
            <li>{`Convert 2 tens to 20 ones. Total ones: $20 + 2 = 22$. Distribute: 5 each, 2 left over.`}</li>
          </ul>
          <p>{`Each stack: 1 hundred + 8 tens + 5 ones = \\$185. Remainder: \\$2.`}</p>

          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>
              The money model works when each denomination matches a place value. It breaks for
              multi-digit divisors, because no bill denomination represents 47. The mathematical
              explanation works in all cases because it treats each step the same way, regardless of
              place value.
            </p>
          </div>

          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Money Interpretation</span>
              <p>
                Ties each step to a denomination (hundreds, tens, ones). Intuitive but does not
                generalize.
              </p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Mathematical Explanation</span>
              <p>
                Treats each step the same way regardless of place value. Generalizes to any number.
              </p>
            </div>
          </div>
        </>
      ]
    },
    practice: [
      // Place Value: basic, transfer, elaborate, predict
      {
        q: 'What does the digit 5 stand for in the number 4502?',
        a: 'The 5 is in the hundreds place. It stands for 500. By expanded form: $4502 = 4000 + 500 + 0 + 2$.'
      },
      {
        q: 'Write 4,907,200 in expanded form using powers of 10.',
        a: '$4{,}907{,}200 = 4 \\times 10^6 + 9 \\times 10^5 + 0 \\times 10^4 + 7 \\times 10^3 + 2 \\times 10^2 + 0 \\times 10^1 + 0 \\times 10^0$. Drop the zero terms: $4 \\times 10^6 + 9 \\times 10^5 + 7 \\times 10^3 + 2 \\times 10^2$.'
      },
      {
        q: 'Explain why the 3 in 38 stands for 30, not 3.',
        a: '38 is in the fourth group of ten numbers (30 through 39). The 3 in the tens place counts three complete groups of 10. So the 3 stands for $3 \\times 10 = 30$.'
      },
      {
        q: 'Why does expanded form use powers of 10 instead of powers of 2?',
        a: 'Our numeral system is base 10. Each place value is ten times the one before it: ones, tens, hundreds. Powers of 10 match this structure. If we used base 2, powers of 2 would be correct instead.'
      },
      {
        q: 'Predict: if you skip-count by 1000 starting at 0, where do you land after 10 steps?',
        a: 'At 10,000. Each step of skip-counting by $10^n$ produces $10^{n+1}$ after 10 steps. Here $n = 3$, so the result is $10^4 = 10{,}000$.'
      },
      // Laws of Operations: basic, transfer, elaborate, predict
      {
        q: 'Which law justifies $(25 + 55) + 28 = 25 + (55 + 28)$?',
        a: 'The associative law of addition: $(\\ell + m) + n = \\ell + (m + n)$. Here $\\ell = 25$, $m = 55$, $n = 28$.'
      },
      {
        q: 'Use the distributive law to compute $79 \\times 5$ mentally.',
        a: '$79 \\times 5 = (80 - 1) \\times 5 = 400 - 5 = 395$. Or: $(70 + 9) \\times 5 = 350 + 45 = 395$. Both use $m(n + \\ell) = mn + m\\ell$.'
      },
      {
        q: 'The associative law fails for subtraction. Show why with an example.',
        a: '$(10 - 5) - 2 = 3$. But $10 - (5 - 2) = 10 - 3 = 7$. The results differ: $3 \\neq 7$. Subtraction is not associative because it is not a commutative operation.'
      },
      {
        q: 'Predict: does $7 \\times (8 + 3)$ equal $7 \\times 8 + 7 \\times 3$?',
        a: 'Yes. By the distributive law, $7 \\times (8 + 3) = 7 \\times 8 + 7 \\times 3 = 56 + 21 = 77$. Checking: $7 \\times 11 = 77$. Both sides match.'
      },
      {
        q: 'A student says the equal sign means "find the answer." Correct this misconception.',
        a: 'The equal sign states a relationship: both sides name the same number. $4 + 5 = 9$ means "$4 + 5$" and "$9$" are two names for the same point on the number line. It is not a command to compute.'
      },
      // Addition: basic, transfer, elaborate, predict
      {
        q: 'Compute $438 + 51$ using the addition algorithm.',
        a: 'Column-wise: $8 + 1 = 9$, $3 + 5 = 8$, $4 + 0 = 4$. Answer: 489. No carrying needed because every column sum is 9 or less.'
      },
      {
        q: 'Compute $493 + 578$ using the addition algorithm. Show each carry.',
        a: 'Ones: $3 + 8 = 11$, record 1, carry 1. Tens: $9 + 7 + 1 = 17$, record 7, carry 1. Hundreds: $4 + 5 + 1 = 10$, record 0, carry 1. Thousands: $1$. Answer: $1071$.'
      },
      {
        q: 'Why must the addition algorithm process columns from right to left?',
        a: 'Carries flow leftward. Adding left to right would require backtracking: a carry from a later column forces changes to already-computed digits. Right to left ensures each column is finalized in one pass.'
      },
      {
        q: 'Explain how the addition algorithm applies the core idea of single-digit steps.',
        a: 'Each column adds at most two numbers below 10 (plus a possible carry of 1). The algorithm reduces $438 + 51$ to three column additions: $4+0$, $3+5$, $8+1$. Place value makes this breakdown possible.'
      },
      {
        q: 'Predict: when adding three numbers that are each in the hundreds, can the carry ever be 2?',
        a: 'Yes. The ones column could sum to 27 (e.g., $9 + 9 + 9$). Record 7, carry 2. With three or more numbers, the carry can exceed 1.'
      },
      // Subtraction: basic, transfer, elaborate, predict
      {
        q: 'What is $m - n$ according to the definition of subtraction?',
        a: 'The whole number $k$ that satisfies $m = k + n$. Subtraction is defined as the reverse of addition.'
      },
      {
        q: 'Compute $2403 - 876$ using the subtraction algorithm. Show each trade.',
        a: 'Ones: $3 < 6$, trade from tens. Tens digit 0 has nothing, trade from hundreds. $4 \\to 3$, tens $0 \\to 10$, then tens $10 \\to 9$, ones $3 \\to 13$. Ones: $13 - 6 = 7$. Tens: $9 - 7 = 2$. Hundreds: $3 - 8$, trade from thousands. $2 \\to 1$, hundreds $3 \\to 13$. Hundreds: $13 - 8 = 5$. Thousands: $1 - 0 = 1$. Answer: $1527$.'
      },
      {
        q: 'A student says "I borrowed 1 from the tens column." What is wrong with this language?',
        a: 'Nothing is borrowed. Nothing gets returned. The correct word is "trade." You exchange 1 ten for 10 ones. The total value stays the same.'
      },
      {
        q: 'Explain why trading does not change the value of a number.',
        a: 'Trading swaps 1 unit at a higher place for 10 units at the next lower one. Since $1 \\times 10^k = 10 \\times 10^{k-1}$, the total stays the same. You rewrite the number differently, not change it.'
      },
      {
        q: 'Predict: in $40005 - 1237$, what happens to the three zeros when you trade?',
        a: 'Each zero passes the trade through to the next column. All three zeros become 9s, and the ones digit gets 10 added. After trading: $40005 = 39000 + 900 + 90 + 15$.'
      },
      // Multiplication: basic, transfer, predict
      {
        q: 'Explain why the multiplication algorithm for $86 \\times 37$ is correct.',
        a: '$86 \\times 37 = 86 \\times (30 + 7) = (86 \\times 30) + (86 \\times 7)$. The distributive law splits the problem. $86 \\times 7 = 602$. $86 \\times 3 = 258$, shifted one column left (times 10) gives 2580. Sum: $602 + 2580 = 3182$.'
      },
      {
        q: 'In the multiplication $852 \\times 73$, why is the row for $852 \\times 7$ shifted one column to the left?',
        a: 'The 7 in 73 represents 70, not 7. So $852 \\times 7$ is really $852 \\times 70 = (852 \\times 7) \\times 10$. Multiplying by 10 shifts all digits one place left. The shift IS the multiplication by 10.'
      },
      {
        q: 'Compute $527 \\times 364$ using the multiplication algorithm.',
        a: '$527 \\times 4 = 2108$. $527 \\times 6 = 3162$, shifted one left = 31620. $527 \\times 3 = 1581$, shifted two left = 158100. Sum: $2108 + 31620 + 158100 = 191828$.'
      },
      {
        q: 'A student computes $852 \\times 473$ and gets 98,796. Without computing, is this reasonable?',
        a: "No. Round: $850 \\times 470 > 800 \\times 400 = 320{,}000$. Also $852 \\times 473 < 900 \\times 500 = 450{,}000$. The answer must be between 320,000 and 450,000. The student's answer of 98,796 is far too small."
      },
      // Division: basic, transfer, elaborate, predict
      {
        q: 'What is the quotient and remainder of $141 \\div 17$?',
        a: 'Multiples of 17: 17, 34, 51, 68, 85, 102, 119, 136, 153. The largest multiple not exceeding 141 is $136 = 8 \\times 17$. Remainder: $141 - 136 = 5$. Quotient = 8, remainder = 5.'
      },
      {
        q: 'Perform the long division of $742 \\div 4$. Write out each step.',
        a: 'Step 1: $7 \\div 4$. Quotient 1, remainder 3. Step 2: $34 \\div 4$. Quotient 8, remainder 2. Step 3: $22 \\div 4$. Quotient 5, remainder 2. Quotient: 185. Remainder: 2. Check: $185 \\times 4 + 2 = 742$.'
      },
      {
        q: 'A bus carries 35 passengers. You need to transport 1295 people. How many buses do you need?',
        a: '$1295 \\div 35 = 37$ with remainder 0. You need exactly 37 buses. (If there were a remainder, you would need 38.)'
      },
      {
        q: 'A student writes "$25 \\div 6 = 4$ R $1$." What is wrong with this notation?',
        a: '"$25 \\div 6$" is not a whole number, and "4 R 1" is not a number either. Writing them equal is meaningless. The correct statement is $25 = (4 \\times 6) + 1$.'
      },
      {
        q: 'Why must each quotient digit in long division be less than 10?',
        a: 'At each step, the dividend is $10r + d_i$ where $r < d$ (the divisor). The maximum dividend is $10(d-1) + 9 = 10d - 1$. The tenth multiple of $d$ is $10d$, which exceeds $10d - 1$. So the quotient at each step is at most 9.'
      },
      {
        q: 'Predict: if the remainder at some step of long division equals 0, what happens next?',
        a: 'You bring down the next digit of the dividend. The new dividend is $10 \\times 0 + \\text{(next digit)} = \\text{(next digit)}$. If that digit is less than the divisor, the quotient digit is 0 and the process continues.'
      },
      // Interleaved: mixed sections
      {
        q: 'Use the distributive law and area model to explain why $3 \\times (2 + 4) = (3 \\times 2) + (3 \\times 4)$.',
        a: 'A rectangle with height 3 and width $2 + 4 = 6$ has area 18. Split it into two rectangles: $3 \\times 2 = 6$ and $3 \\times 4 = 12$. Total: $6 + 12 = 18$. Both sides are equal.'
      },
      {
        q: 'Identify which law: $7 \\times 9 = 9 \\times 7$.',
        a: 'The commutative law of multiplication: $mn = nm$. It says the order of factors does not change the product.'
      },
      {
        q: 'Compute $165 + 27 + 83 + 829$ using the addition algorithm.',
        a: 'Ones: $5 + 7 + 3 + 9 = 24$. Record 4, carry 2. Tens: $6 + 2 + 8 + 2 + 2 = 20$. Record 0, carry 2. Hundreds: $1 + 0 + 0 + 8 + 2 = 11$. Record 1, carry 1. Thousands: $0 + 0 + 0 + 0 + 1 = 1$. Answer: $1104$.'
      },
      {
        q: 'Compute $60005 - 12348$ using mental math by rewriting 60005.',
        a: '$60005 = 59999 + 6$. So $60005 - 12348 = (59999 - 12348) + 6 = 47651 + 6 = 47657$.'
      },
      {
        q: 'State the five basic laws of arithmetic for whole numbers.',
        a: '(1) Associative law of $+$: $(\\ell + m) + n = \\ell + (m + n)$. (2) Commutative law of $+$: $m + n = n + m$. (3) Associative law of $\\times$: $(\\ell m)n = \\ell(mn)$. (4) Commutative law of $\\times$: $mn = nm$. (5) Distributive law: $m(n + \\ell) = mn + m\\ell$.'
      },
      {
        q: 'If $b < c$, does $ab < ac$ always hold?',
        a: 'Only when $a > 0$. If $a = 0$, then $ab = 0 = ac$, and the strict inequality fails. For positive $a$, the inequality is preserved because the rectangle with larger width ($c$) has greater area.'
      },
      {
        q: 'Without computing, which is bigger: 687 or 1124? Explain.',
        a: '687 is in the hundreds while 1124 is in the thousands. Since $999 < 1000 \\leq 1124$, the thousands always beat the hundreds. So $687 < 1124$.'
      },
      {
        q: 'What is $43 \\times 100$ and why?',
        a: '$43 \\times 100 = 43 \\times 10^2 = 4300$. Multiplying by $10^k$ appends $k$ zeros to the right of the last digit. Here $k = 2$, so two zeros are appended.'
      },
      {
        q: 'Compare 28,123,475 and 28,123,601 without subtraction.',
        a: 'Both are in the ten-millions. Going left to right: 2=2, 8=8, 1=1, 2=2, 3=3. The sixth position differs: 4 vs 6. Since $4 < 6$, we have $28{,}123{,}475 < 28{,}123{,}601$.'
      },
      {
        q: 'Is this measurement or partitive division? "48 fluid ounces shared among 8 guests."',
        a: 'Partitive. You know the number of groups (8 guests) and want the size of each group (6 ounces each).'
      },
      {
        q: 'Compute $76431 - 58914$ using the subtraction algorithm.',
        a: 'Ones: $1 - 4$: trade. $11 - 4 = 7$, tens becomes 2. Tens: $2 - 1 = 1$. Hundreds: $4 - 9$: trade from thousands. $14 - 9 = 5$. Thousands: $5$ (was 6, gave 1) $- 8$: trade from ten-thousands. $15 - 8 = 7$. Ten-thousands: $6$ (was 7, gave 1) $- 5 = 1$. Answer: $17517$.'
      },
      {
        q: 'The property $(\\ell + m + n) - (a + b + c) = (\\ell - a) + (m - b) + (n - c)$ requires what condition?',
        a: 'Each pair must satisfy the subtraction: $\\ell \\geq a$, $m \\geq b$, $n \\geq c$. Otherwise the individual subtractions produce no whole number.'
      },
      {
        q: 'Which multiplication shortcut helps compute $9996 \\times 25$?',
        a: '$9996 \\times 25 = (10000 - 4) \\times 25 = 250000 - 100 = 249900$. Use the distributive law to rewrite $9996$ near a power of 10.'
      },
      {
        q: 'A student divides $652$ by $8$ and gets quotient $81$ remainder $4$. Check if this is correct.',
        a: 'Check: $81 \\times 8 + 4 = 648 + 4 = 652$. Also $0 \\leq 4 < 8$. Both conditions of the division-with-remainder theorem are satisfied. The answer is correct.'
      },
      {
        q: 'Apply the long division algorithm to $78645 \\div 119$. Find only the first two digits of the quotient.',
        a: 'First digit: $786 \\div 119$. Largest multiple: $6 \\times 119 = 714$. Remainder: $786 - 714 = 72$. Second digit: $724 \\div 119$. Largest multiple: $6 \\times 119 = 714$. Remainder: $724 - 714 = 10$. First two quotient digits: 66.'
      },
      {
        q: 'Prove that $(a + b) - b = a$ using the definition of subtraction.',
        a: 'By definition, $(a + b) - b$ is the number $k$ where $a + b = k + b$. By the cancellation property of addition, $k = a$. So $(a + b) - b = a$.'
      },
      {
        q: 'Show that $a - b = (a + c) - (b + c)$ for any whole numbers with $a \\geq b$.',
        a: 'Let $k = a - b$, so $a = k + b$. Then $a + c = k + b + c = k + (b + c)$. By definition of subtraction, $(a + c) - (b + c) = k = a - b$.'
      },
      {
        q: 'A car travels at constant speed $v$ mph. In 4 hours it covers 264 miles. Find $v$.',
        a: 'Distance = speed $\\times$ time. So $4v = 264$, meaning $v = 264 \\div 4 = 66$ mph. This is partitive division: 264 miles split into 4 equal parts gives 66 miles per hour.'
      },
      {
        q: 'Is $6977$ the remainder of $124968752 \\div 6843$? (No calculator.)',
        a: 'If 6977 were the remainder, it must satisfy $0 \\leq 6977 < 6843$. But $6977 > 6843$. So no, 6977 cannot be the remainder.'
      },
      {
        q: 'Explain in your own words why the subtraction algorithm processes digits from right to left.',
        a: 'Trading affects the column to the left. If you start from the left, a later trade would change a digit you already processed. Starting from the right ensures each column is final before you move on.'
      },
      {
        q: 'Using the number line, explain why $4 + 7 = 11$.',
        a: 'Place a segment of length 4 starting at 0 (reaching 4). Join a segment of length 7 at the end. The right endpoint lands on 11. The total length is $4 + 7 = 11$.'
      },
      {
        q: 'A rectangle has area 84 square units and one side is 7 units. What is the other side?',
        a: '$84 \\div 7 = 12$. The other side is 12 units. This is the geometric interpretation: division finds the missing side of a rectangle when you know the area and one side.'
      },
      {
        q: 'Why is the notation $25 \\div 6 = 4$ R $1$ mathematically incorrect, but $21 \\div 5 = 4$ R $1$ is equally incorrect?',
        a: 'Both set a non-whole-number expression equal to a symbol that is not a number. The notation suggests $25 \\div 6 = 21 \\div 5$ since both "equal" $4$ R $1$. But "4 groups of 6 with 1 left" is not the same as "4 groups of 5 with 1 left."'
      }
    ],
    reference: {
      category: 'Quick Reference',
      title: 'Place Value and Algorithms',
      sections: [
        <>
          <h2>Definitions</h2>

          <div className="lrn-definition">
            <span className="lrn-definition-term">Place Value</span>
            <div className="lrn-definition-desc">{`The value a digit represents based on its position. In 3728, the 3 stands for 3000, the 7 for 700, the 2 for 20, and 8 for 8. Place value arises from the counting process.`}</div>
          </div>
          <div className="lrn-definition">
            <span className="lrn-definition-term">Expanded Form</span>
            <div className="lrn-definition-desc">{`Writing a number as the sum of each digit times its place value. Example: $3728 = (3 \\times 10^3) + (7 \\times 10^2) + (2 \\times 10^1) + (8 \\times 10^0)$.`}</div>
          </div>
          <div className="lrn-definition">
            <span className="lrn-definition-term">Skip-Counting</span>
            <div className="lrn-definition-desc">{`Counting by a fixed step size. Skip-counting by 10 from 0: $0, 10, 20, 30, \\ldots$ After 10 steps you reach $100$.`}</div>
          </div>
          <div className="lrn-definition">
            <span className="lrn-definition-term">Continued Counting</span>
            <div className="lrn-definition-desc">{`$a + b$ means start at $a$ and count $b$ more steps. The number you land on is the sum.`}</div>
          </div>
          <div className="lrn-definition">
            <span className="lrn-definition-term">Number Line</span>
            <div className="lrn-definition-desc">{`A horizontal line with equally spaced points identified with whole numbers. The segment $[0,1]$ is the unit. Addition = placing one segment right after another.`}</div>
          </div>
          <div className="lrn-definition">
            <span className="lrn-definition-term">Addition</span>
            <div className="lrn-definition-desc">{`$a + b$ is the number you get by counting $b$ steps from $a$ (continued counting). On the number line, the length of two joined segments.`}</div>
          </div>
          <div className="lrn-definition">
            <span className="lrn-definition-term">Multiplication</span>
            <div className="lrn-definition-desc">{`$mk = k + k + \\cdots + k$ ($m$ copies) for $m \\neq 0$; $0 \\cdot k = 0$. On the number line, the area of a rectangle with sides $m$ and $k$.`}</div>
          </div>
          <div className="lrn-definition">
            <span className="lrn-definition-term">Subtraction</span>
            <div className="lrn-definition-desc">{`$a - b$ is the whole number $c$ where $a = b + c$. Requires $a \\geq b$. Use when finding the difference between two quantities, or undoing addition.`}</div>
          </div>
          <div className="lrn-definition">
            <span className="lrn-definition-term">Division</span>
            <div className="lrn-definition-desc">{`$m \\div n$ is the whole number $k$ where $m = kn$. Requires $n \\neq 0$ and $m$ is a multiple of $n$. Use when splitting into equal groups, or finding how many groups fit.`}</div>
          </div>
          <div className="lrn-definition">
            <span className="lrn-definition-term">Division-with-Remainder</span>
            <div className="lrn-definition-desc">{`Given $a$ and $d > 0$: $a = qd + r$ where $0 \\leq r < d$. The number $q$ is the quotient, $r$ is the remainder. Use when $a$ is not a multiple of $d$.`}</div>
          </div>
          <div className="lrn-definition">
            <span className="lrn-definition-term">Measurement Interpretation</span>
            <div className="lrn-definition-desc">{`$m \\div n$ = number of groups when $m$ objects are grouped into sets of $n$. "How many 8-ounce cups fit in 48 ounces?"`}</div>
          </div>
          <div className="lrn-definition">
            <span className="lrn-definition-term">Partitive Interpretation</span>
            <div className="lrn-definition-desc">{`$m \\div n$ = size of each group when $m$ objects are split into $n$ equal groups. "48 ounces shared among 8 guests, how much each?"`}</div>
          </div>
        </>,

        <>
          <h2>Formulas</h2>

          <div className="lrn-eq">
            <span>{`$$10^n = \\underbrace{10 \\times 10 \\times \\cdots \\times 10}_{n}, \\quad 10^0 = 1$$`}</span>
          </div>
          <p>Powers of 10.</p>

          <div className="lrn-eq">
            <span>{`$$10^{m+n} = 10^m \\times 10^n$$`}</span>
          </div>
          <p>Law of exponents for powers of 10.</p>

          <div className="lrn-eq">
            <span>{`$$N \\times 10^k = N \\text{ followed by } k \\text{ zeros}$$`}</span>
          </div>
          <p>Multiplying by a power of 10 appends zeros.</p>

          <div className="lrn-eq">
            <span>{`$$(\\ell + m) + n = \\ell + (m + n)$$`}</span>
          </div>
          <p>Associative law of addition.</p>

          <div className="lrn-eq">
            <span>{`$$m + n = n + m$$`}</span>
          </div>
          <p>Commutative law of addition.</p>

          <div className="lrn-eq">
            <span>{`$$(\\ell m)n = \\ell(mn)$$`}</span>
          </div>
          <p>Associative law of multiplication.</p>

          <div className="lrn-eq">
            <span>{`$$mn = nm$$`}</span>
          </div>
          <p>Commutative law of multiplication.</p>

          <div className="lrn-eq">
            <span>{`$$m(n + \\ell) = mn + m\\ell$$`}</span>
          </div>
          <p>Distributive law: the glue binding addition and multiplication.</p>

          <div className="lrn-eq">
            <span>{`$$a - b = c \\iff a = b + c$$`}</span>
          </div>
          <p>Definition of subtraction.</p>

          <div className="lrn-eq">
            <span>{`$$(\\ell + m + n) - (a + b + c) = (\\ell - a) + (m - b) + (n - c)$$`}</span>
          </div>
          <p>{`Mental subtraction near powers of 10. Requires $\\ell \\geq a$, $m \\geq b$, $n \\geq c$.`}</p>

          <div className="lrn-eq">
            <span>{`$$(a + b) - b = a$$`}</span>
          </div>
          <p>Cancellation in subtraction.</p>

          <div className="lrn-eq">
            <span>{`$$a - b = (a + c) - (b + c)$$`}</span>
          </div>
          <p>Shifting both numbers by the same amount.</p>

          <div className="lrn-eq">
            <span>{`$$a \\times (b + c) = (a \\times b) + (a \\times c)$$`}</span>
          </div>
          <p>Distributive law: engine of the multiplication algorithm.</p>

          <div className="lrn-eq">
            <span>{`$$a = qd + r, \\quad 0 \\leq r < d$$`}</span>
          </div>
          <p>Division-with-remainder.</p>

          <div className="lrn-eq">
            <span>{`$$m \\div n = k \\iff m = kn$$`}</span>
          </div>
          <p>Definition of division.</p>
        </>,

        <>
          <h2>Theorems</h2>

          <h3>Addition Order Rule (Addition in Any Order)</h3>
          <p>
            For any collection of numbers, the sums you get by adding them in any order are all
            equal. Follows from the associative and commutative laws of addition. Justifies writing
            sums without parentheses.
          </p>

          <h3>Multiplication Order Rule (Multiplication in Any Order)</h3>
          <p>
            For any collection of numbers, the products you get by multiplying them in any order are
            all equal.
          </p>
          <p>Follows from the associative and commutative laws of multiplication.</p>

          <h3>Trichotomy Law</h3>
          <p>{`For any two whole numbers $a$ and $b$, exactly one holds: $a = b$, $a < b$, or $a > b$.`}</p>

          <h3>Division-with-Remainder Theorem</h3>
          <p>{`For any whole numbers $a$ and $d$ with $d > 0$, unique $q$ and $r$ exist where $a = qd + r$ and $0 \\leq r < d$. Use whenever you divide whole numbers. The quotient and remainder always exist and are unique.`}</p>
        </>,

        <>
          <h2>Algorithms</h2>

          <h3>Addition Algorithm</h3>
          <ol className="lrn-list">
            <li>Align digits by place value (ones under ones, tens under tens).</li>
            <li>Add digits right to left, one column at a time.</li>
            <li>{`If column sum $\\leq 9$: record as is.`}</li>
            <li>{`If column sum $= 10 + k$: record $k$, carry 1 to next column.`}</li>
            <li>For multiple numbers: same rule, carry the tens digit of the column sum.</li>
          </ol>

          <h3>Subtraction Algorithm</h3>
          <ol className="lrn-list">
            <li>Align digits by place value.</li>
            <li>Subtract right to left, one column at a time.</li>
            <li>
              If top digit is less than bottom digit: trade 1 from the next column (adds 10 to
              current column).
            </li>
            <li>If next column is 0: cascade the trade from a higher column.</li>
          </ol>

          <h3>Multiplication Algorithm</h3>
          <ol className="lrn-list">
            <li>Multiply the top number by each digit of the bottom number (right to left).</li>
            <li>Each successive row shifts one column left.</li>
            <li>Add all rows.</li>
          </ol>
          <p>
            Why it works: Distributive law breaks the bottom number by place value. Each shift
            represents multiplication by the matching power of 10.
          </p>

          <h3>Long Division Algorithm</h3>
          <ol className="lrn-list">
            <li>Start with the leftmost digit(s) of the dividend.</li>
            <li>Find the largest multiple of the divisor that fits. Record as quotient digit.</li>
            <li>Subtract. Bring down the next digit.</li>
            <li>Repeat until all digits are used.</li>
            <li>Quotient = string of quotient digits. Remainder = last subtraction result.</li>
          </ol>
        </>,

        <>
          <h2>Key Contrasts</h2>

          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Trading</span>
              <p>
                Exchange 1 ten for 10 ones. Equal value, different form. No debt involved. Accurate
                terminology.
              </p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Borrowing</span>
              <p>
                Same operation, misleading name. Suggests something must be returned. Nothing is
                owed back.
              </p>
            </div>
          </div>

          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Measurement Division</span>
              <p>{`"How many groups of $n$?" You know the group size, want the count.`}</p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Partitive Division</span>
              <p>{`"How big is each of $n$ groups?" You know the count, want the group size.`}</p>
            </div>
          </div>

          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Memorization</span>
              <p>{`Required for: single-digit multiplication table (up to $9 \\times 9$).`}</p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Understanding</span>
              <p>
                Required for: algorithm logic, distributive law, why trading works, why shifts
                happen.
              </p>
            </div>
          </div>
        </>,

        <>
          <h2>Common Errors</h2>

          <div className="lrn-steps">
            <div className="lrn-step">
              <span className="lrn-step-title">{`Writing $25 \\div 6 = 4$ R $1$`}</span>
              <p className="lrn-step-content">{`Write $25 = (4 \\times 6) + 1$ instead. Neither side of the original notation is a number.`}</p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">Adding left to right</span>
              <p className="lrn-step-content">
                A carry from a later column forces you to go back and change digits you already
                wrote. Always add right to left.
              </p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">"Bringing down" without understanding</span>
              <p className="lrn-step-content">{`Each "bring down" forms a new dividend: $10 \\times \\text{remainder} + \\text{next digit}$.`}</p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">Assuming division by 0 equals 0</span>
              <p className="lrn-step-content">{`Division by 0 is undefined. No number satisfies $n = k \\times 0$ for $n \\neq 0$.`}</p>
            </div>
          </div>
        </>
      ]
    },
    customCss: null
  }

  return <LearningTemplate config={config} />
}
