import { LearningTemplate } from '../../../../components/learning/learning-template'
import { useVizColors } from '../../../../hooks/use-viz-colors'

import {
  DivisionRemainderVis,
  SieveVis,
  GcdLinearCombinationVis,
  EAStepperVis,
  GcdLcmVennVis,
  PythagoreanTripleVis,
  PerfectSquareParityVis
} from '../../../../components/viz/math-viz/modules'

function useConfig(C) {
  return {
    cssPrefix: 'nth',
    source: 'Understanding Numbers in Elementary School Mathematics - Hung-Hsi Wu',
    documentTitle: 'Number Theory - AETHER',
    learning: {
      category: 'Part 4',
      title: 'Number Theory',
      subtitle:
        'Divisibility, primes, the Fundamental Theorem of Arithmetic, the Euclidean Algorithm, and applications to fractions, decimals, and irrational numbers. Number theory is the toolkit behind modern encryption, error-correcting codes, and computer security.',
      sections: [
        /* ════════════════════════════════════════════════════════════════════════
         SECTION 1: DIVISIBILITY RULES (Module 32)
         ════════════════════════════════════════════════════════════════════════ */
        <>
          <h2>Divisibility Rules</h2>

          <p>
            Powers of 10 leave predictable remainders when divided by small numbers. That
            predictability is what each divisibility rule exploits. You can test whether a number is
            divisible by 2, 3, 4, 5, 9, or 11 by inspecting its digits alone, no long division
            needed. ISBN-13 barcodes use exactly this idea to catch typos.
          </p>

          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              You know that 3 divides 759. Can you tell whether 3 divides a number just by looking
              at its digits? What pattern would you guess?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                Add the digits. If 3 divides the digit sum, then 3 divides the number. For 759: 7 +
                5 + 9 = 21, and 3 divides 21. So 3 divides 759.
              </p>
            </details>
          </div>

          <h3>Review of Division-with-Remainder</h3>
          <p>{`Every whole number $a$ and positive integer $d$ produce a unique quotient $q$ and remainder $r$. The number $a$ sits between consecutive multiples of $d$ on the number line.`}</p>

          <div className="lrn-eq lrn-eq-display">{`$$qd \\leq a < (q+1)d$$`}</div>

          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>{`The multiples of $d$ form equally spaced marks on the number line: $0, d, 2d, 3d, \\ldots$ Every whole number must land on or between two consecutive marks. The left mark gives $q$, and the gap gives $r$.`}</p>
          </div>

          <p>{`We write this as the division-with-remainder equation:`}</p>
          <div className="lrn-eq lrn-eq-display">{`$$a = qd + r, \\quad \\text{where } 0 \\leq r < d$$`}</div>

          <p>{`When $r = 0$, $d$ divides $a$ evenly. When $r \\neq 0$, $d$ does not divide $a$. The remainder $r$ tells you how far $a$ sits from the nearest multiple of $d$ below it.`}</p>

          <DivisionRemainderVis C={C} />

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>{`In the equation $23 = 4 \\times 5 + 3$, why must the remainder 3 be strictly less than 5?`}</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>{`If $r \\geq d$, then $a \\geq qd + d = (q+1)d$. That means $a$ would be at or beyond the next multiple of $d$. So $q$ would not be the correct quotient: you would need to increase $q$. The constraint $r < d$ guarantees $q$ is as large as possible.`}</p>
            </details>
          </div>

          <h3>Generalities about Divisibility</h3>
          <p>{`We say $y$ divides $x$ (written $y | x$) if there exists a whole number $z$ such that $x = zy$. Equivalently, $x$ is a multiple of $y$, and $y$ is a divisor (or factor) of $x$.`}</p>

          <div className="lrn-definition">
            <span className="lrn-definition-term">Divisibility</span>
            <div className="lrn-definition-desc">{`$y | x$ means $x = zy$ for some integer $z$. We say "$y$ divides $x$" or "$x$ is divisible by $y$."`}</div>
          </div>

          <p>{`Divisibility extends to negative integers. Does $-4$ divide 28? Yes, because $28 = (-7) \\times (-4)$. Does $-4$ divide $-28$? Yes, because $-28 = 7 \\times (-4)$. Does 4 divide $-28$? Yes, because $-28 = (-7) \\times 4$.`}</p>

          <div className="lrn-definition">
            <span className="lrn-definition-term">The Divisibility Lemma</span>
            <div className="lrn-definition-desc">{`If $A = B + C$, and $x$ divides any two of $A$, $B$, $C$, then $x$ divides the third.`}</div>
          </div>

          <p>{`Example: $A = 72$, $C = 24$, $B = 72 - 24 = 48$. Since $6 | 72$ and $6 | 24$, the Divisibility Lemma tells us $6 | 48$. Check: $48 = 8 \\times 6$.`}</p>
          <p>{`Another example: $B = -187$, $C = 119$, so $A = B + C = -68$. Since $17 | (-187)$ and $17 | 119$, we conclude $17 | (-68)$. Check: $-68 = (-4) \\times 17$.`}</p>

          <div className="lrn-proof">
            <span className="lrn-proof-header">Proof of the Divisibility Lemma</span>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">1.</span>
              <div className="lrn-proof-step-content">{`Suppose $x | B$ and $x | C$. Then $B = sx$ and $C = tx$ for integers $s$ and $t$.`}</div>
            </div>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">2.</span>
              <div className="lrn-proof-step-content">{`$A = B + C = sx + tx = (s + t)x$.`}</div>
            </div>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">3.</span>
              <div className="lrn-proof-step-content">{`Since $s + t$ is an integer, $x | A$.`}</div>
            </div>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">4.</span>
              <div className="lrn-proof-step-content">{`The other two cases follow by writing $B = A - C$ or $C = A - B$.`}</div>
            </div>
            <div className="lrn-qed">Q.E.D.</div>
          </div>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>{`In the proof, why does knowing $B = sx$ and $C = tx$ immediately give $x | A$?`}</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>{`Because $A = B + C = sx + tx = (s+t)x$. The sum $(s+t)$ is still an integer. So $A$ equals an integer times $x$, which is exactly the definition of $x | A$.`}</p>
            </details>
          </div>

          <div className="lrn-definition">
            <span className="lrn-definition-term">Transitivity of Divisibility</span>
            <div className="lrn-definition-desc">
              <p>{`(a) If $A | B$ and $B | C$, then $A | C$.`}</p>
              <p>{`(b) If $A$ does not divide $C$, then no multiple of $A$ divides $C$.`}</p>
            </div>
          </div>

          <div className="lrn-proof">
            <span className="lrn-proof-header">Proof of Transitivity (a)</span>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">1.</span>
              <div className="lrn-proof-step-content">{`$A | B$ means $B = mA$. $B | C$ means $C = nB$.`}</div>
            </div>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">2.</span>
              <div className="lrn-proof-step-content">{`$C = nB = n(mA) = (nm)A$.`}</div>
            </div>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">3.</span>
              <div className="lrn-proof-step-content">{`Since $nm$ is an integer, $A | C$.`}</div>
            </div>
            <div className="lrn-qed">Q.E.D.</div>
          </div>

          <div className="lrn-proof">
            <span className="lrn-proof-header">Proof of Transitivity (b)</span>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">1.</span>
              <div className="lrn-proof-step-content">{`Suppose for contradiction that some multiple $kA$ divides $C$, so $C = m(kA) = (mk)A$.`}</div>
            </div>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">2.</span>
              <div className="lrn-proof-step-content">{`Then $A | C$, which contradicts our assumption.`}</div>
            </div>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">3.</span>
              <div className="lrn-proof-step-content">{`So no multiple of $A$ can divide $C$.`}</div>
            </div>
            <div className="lrn-qed">Q.E.D.</div>
          </div>

          <div className="lrn-definition">
            <span className="lrn-definition-term">Even and Odd</span>
            <div className="lrn-definition-desc">{`A number $n$ is even if $2 | n$. A number $n$ is odd if $2$ does not divide $n$. Equivalently, $n$ is even when its last digit is 0, 2, 4, 6, or 8.`}</div>
          </div>

          <h3>Rule for 2</h3>
          <p>{`A number $n$ is divisible by 2 if and only if its last digit is even.`}</p>

          <div className="lrn-proof">
            <span className="lrn-proof-header">Proof (Rule for 2)</span>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">1.</span>
              <div className="lrn-proof-step-content">{`Write $n = 10b + k$ where $k$ is the last digit.`}</div>
            </div>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">2.</span>
              <div className="lrn-proof-step-content">{`$10b = 2(5b)$, so $2 | 10b$.`}</div>
            </div>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">3.</span>
              <div className="lrn-proof-step-content">{`By the Divisibility Lemma ($n = 10b + k$): $2 | n$ if and only if $2 | k$.`}</div>
            </div>
            <div className="lrn-qed">Q.E.D.</div>
          </div>

          <h3>Rule for 5</h3>
          <p>{`A number $n$ is divisible by 5 if and only if its last digit is 0 or 5.`}</p>

          <div className="lrn-proof">
            <span className="lrn-proof-header">Proof (Rule for 5)</span>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">1.</span>
              <div className="lrn-proof-step-content">{`Write $n = 10b + k$ where $k$ is the last digit.`}</div>
            </div>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">2.</span>
              <div className="lrn-proof-step-content">{`$10b = 2(5b)$, so $5 | 10b$.`}</div>
            </div>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">3.</span>
              <div className="lrn-proof-step-content">{`By the Divisibility Lemma ($n = 10b + k$): $5 | n$ if and only if $5 | k$.`}</div>
            </div>
            <div className="lrn-qed">Q.E.D.</div>
          </div>

          <h3>Rule for 3</h3>
          <p>{`A number is divisible by 3 if and only if 3 divides the sum of its digits.`}</p>

          <p>{`The key identity: $10^n = \\underbrace{33\\ldots3}_{n} \\times 3 + 1$. So $3 | (10^n - 1)$ for every $n$.`}</p>

          <div className="lrn-proof">
            <span className="lrn-proof-header">Proof (Rule for 3)</span>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">1.</span>
              <div className="lrn-proof-step-content">{`Let $n = a_k \\cdot 10^k + a_{k-1} \\cdot 10^{k-1} + \\cdots + a_1 \\cdot 10 + a_0$.`}</div>
            </div>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">2.</span>
              <div className="lrn-proof-step-content">{`Since $10^j = 3m_j + 1$ for some integer $m_j$, we get $n = 3(a_k m_k + \\cdots + a_1 m_1) + (a_k + a_{k-1} + \\cdots + a_0)$.`}</div>
            </div>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">3.</span>
              <div className="lrn-proof-step-content">{`The first term is divisible by 3. By the Divisibility Lemma, $3 | n$ iff $3 | (a_k + \\cdots + a_0)$.`}</div>
            </div>
            <div className="lrn-qed">Q.E.D.</div>
          </div>

          <p>{`Example: Does 3 divide 84? Digit sum: $8 + 4 = 12$. Since $3 | 12$, yes, $3 | 84$. Check: $84 = 28 \\times 3$.`}</p>
          <p>{`Example: Does 3 divide 674? Digit sum: $6 + 7 + 4 = 17$. Since 3 does not divide 17, 3 does not divide 674.`}</p>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>{`Why does the proof work for any number of digits, not just two or three?`}</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>{`Because $10^j = 3m_j + 1$ holds for every power of 10. Each digit $a_j$ multiplied by $10^j$ contributes $3(a_j m_j) + a_j$. The multiples of 3 collect into one big multiple of 3, leaving just the digit sum. This works no matter how many digits the number has.`}</p>
            </details>
          </div>

          <h3>Rule for 4</h3>
          <p>{`A number is divisible by 4 if and only if 4 divides the number formed by its last two digits.`}</p>

          <div className="lrn-proof">
            <span className="lrn-proof-header">Proof (Rule for 4)</span>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">1.</span>
              <div className="lrn-proof-step-content">{`Write $n = 100c + d$ where $d$ is the last two digits.`}</div>
            </div>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">2.</span>
              <div className="lrn-proof-step-content">{`$100c = 4(25c)$, so $4 | 100c$.`}</div>
            </div>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">3.</span>
              <div className="lrn-proof-step-content">{`By the Divisibility Lemma, $4 | n$ iff $4 | d$.`}</div>
            </div>
            <div className="lrn-qed">Q.E.D.</div>
          </div>

          <p>{`Example: Is 572 divisible by 4? Check: $4 | 72$? Yes, $72 = 18 \\times 4$. So $4 | 572$.`}</p>
          <p>{`Example: Is 93,386 divisible by 4? Check: $4 | 86$? $86 = 21 \\times 4 + 2$. No. So 4 does not divide 93,386.`}</p>

          <h3>Rule for 9</h3>
          <p>{`A number is divisible by 9 if and only if 9 divides the sum of its digits. The proof mirrors the rule for 3, using the identity $10^n = \\underbrace{11\\ldots1}_{n} \\times 9 + 1$.`}</p>

          <h3>Rule for 11</h3>
          <p>{`A number is divisible by 11 if and only if 11 divides its alternating digit sum. Starting from the rightmost digit, assign $+$, then alternate $-$, $+$, $-$, working left.`}</p>

          <p>{`Example for 121: the alternating sum is $1 - 2 + 1 = 0$, and $11 | 0$. So $11 | 121$. Check: $121 = 11 \\times 11$.`}</p>

          <p>{`The key identities:`}</p>
          <ul className="lrn-list">
            <li>{`For odd $n$: $10^n = (\\underbrace{9090\\ldots91}_{} \\times 11) + (-1)$`}</li>
            <li>{`For even $n$: $10^n = (\\underbrace{9090\\ldots9}_{} \\times 11) + 1$`}</li>
          </ul>

          <p>{`So $10^n$ gives remainder $+1$ or $-1$ when divided by 11, alternating with each power.`}</p>

          <div className="lrn-proof">
            <span className="lrn-proof-header">Proof sketch (Rule for 11, using 517)</span>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">1.</span>
              <div className="lrn-proof-step-content">{`$517 = 5 \\times 100 + 1 \\times 10 + 7$.`}</div>
            </div>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">2.</span>
              <div className="lrn-proof-step-content">{`$100 = 9 \\times 11 + 1$, so $5 \\times 100 = 5 \\times 9 \\times 11 + 5$.`}</div>
            </div>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">3.</span>
              <div className="lrn-proof-step-content">{`$10 = 1 \\times 11 + (-1)$, so $1 \\times 10 = 1 \\times 11 + (-1)$.`}</div>
            </div>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">4.</span>
              <div className="lrn-proof-step-content">{`$517 = 11 \\times (\\text{integer}) + (5 - 1 + 7) = 11 \\times (\\text{integer}) + 11$. So $11 | 517$.`}</div>
            </div>
            <div className="lrn-qed">Q.E.D.</div>
          </div>

          <div className="lrn-faded">
            <div className="lrn-faded-phase">
              <span className="lrn-faded-label">COMPLETE EXAMPLE</span>
              <p>{`Is 748 divisible by 11? Alternating sum from the right: $8 - 4 + 7 = 11$. Since $11 | 11$, yes, $11 | 748$. Check: $748 = 68 \\times 11$.`}</p>
            </div>
            <div className="lrn-faded-phase">
              <span className="lrn-faded-label">YOUR TURN: PARTIAL</span>
              <p>{`Is 2,849 divisible by 11? Alternating sum from the right: $9 - 4 + 8 - 2 = ?$ [finish the sum and decide].`}</p>
            </div>
            <div className="lrn-faded-phase">
              <span className="lrn-faded-label">INDEPENDENT PRACTICE</span>
              <p>{`Is 517,634 divisible by 11? Apply the alternating sum rule. Show every step.`}</p>
            </div>
          </div>

          <p>{`Example: Is 517,634 divisible by 11? Alternating sum from the right: $4 - 3 + 6 - 7 + 1 - 5 = -4$. Since 11 does not divide $-4$, 11 does not divide 517,634.`}</p>

          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Digit Sum Rules (3, 9)</span>
              <p>{`Add all digits. Works because $10^n \\equiv 1 \\pmod{3}$ and $10^n \\equiv 1 \\pmod{9}$.`}</p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Last Digit Rules (2, 4, 5)</span>
              <p>{`Check the last 1 or 2 digits. Works because $10$ (or $100$) is divisible by the target.`}</p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Alternating Sum Rule (11)</span>
              <p>{`Alternate $+$ and $-$ across digits. Works because $10^n \\equiv (-1)^n \\pmod{11}$.`}</p>
            </div>
          </div>
        </>,

        /* ════════════════════════════════════════════════════════════════════════
         SECTION 2: PRIMES AND DIVISORS (Module 33)
         ════════════════════════════════════════════════════════════════════════ */
        <>
          <h2>Primes and Divisors</h2>

          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              Is 193 a prime number? Without doing full division, what is the fastest way to decide?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>{`Check divisibility only by primes up to $\\sqrt{193} \\approx 13.9$. The primes to test are 2, 3, 5, 7, 11, 13. None divide 193, so it is prime.`}</p>
            </details>
          </div>

          <h3>Definitions</h3>
          <p>{`A proper divisor of a positive integer $n$ is a divisor that is neither 1 nor $n$ itself. A proper multiple of $n$ is a multiple greater than $n$.`}</p>

          <div className="lrn-definition">
            <span className="lrn-definition-term">Prime Number</span>
            <div className="lrn-definition-desc">{`A whole number $p > 1$ is prime if its only divisors are 1 and $p$. A whole number $n > 1$ that is not prime is composite. It has at least one proper divisor.`}</div>
          </div>

          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">1 is NOT Prime</span>
              <p>
                The Fundamental Theorem requires unique factorization. If 1 were prime, then 12 = 2²
                × 3 = 1 × 2² × 3 = 1² × 2² × 3, giving infinitely many decompositions. Excluding 1
                preserves uniqueness.
              </p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">2 is the Only Even Prime</span>
              <p>
                Every even number greater than 2 is divisible by 2, so it is composite. The number 2
                is the unique even prime. Students often think "prime" means "odd". It does not.
              </p>
            </div>
          </div>

          <div className="lrn-definition">
            <span className="lrn-definition-term">Factorization</span>
            <div className="lrn-definition-desc">{`A factorization of $n$ is an expression $n = ab$ where $a$ and $b$ are positive integers. If $a > 1$ and $b > 1$, this is a proper factorization and $n$ is composite.`}</div>
          </div>

          <h3>The Square Root Test</h3>
          <p>{`To check if $n$ is prime, you only need to test divisors up to $\\sqrt{n}$.`}</p>

          <div className="lrn-definition">
            <span className="lrn-definition-term">Primality Test</span>
            <div className="lrn-definition-desc">{`If $n$ has no divisor $k$ with $2 \\leq k \\leq \\sqrt{n}$, then $n$ is prime.`}</div>
          </div>

          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>{`Suppose $n = bc$ where $b, c > 1$. If both $b > \\sqrt{n}$ and $c > \\sqrt{n}$, then $bc > \\sqrt{n} \\times \\sqrt{n} = n$. That contradicts $n = bc$. So at least one of $b$ or $c$ must be $\\leq \\sqrt{n}$.`}</p>
          </div>

          <p>{`This uses the inequality: if $s < t$ and $u < v$ (all positive), then $su < tv$.`}</p>

          <p>{`Example: Is 193 prime? $\\sqrt{193} \\approx 13.9$, so test primes 2, 3, 5, 7, 11, 13.`}</p>
          <ul className="lrn-list">
            <li>{`2: 193 is odd. No.`}</li>
            <li>{`3: $1 + 9 + 3 = 13$, not divisible by 3. No.`}</li>
            <li>{`5: last digit is 3. No.`}</li>
            <li>{`7: $193 = 27 \\times 7 + 4$. No.`}</li>
            <li>{`11: $3 - 9 + 1 = -5$, not divisible by 11. No.`}</li>
            <li>{`13: $193 = 14 \\times 13 + 11$. No.`}</li>
          </ul>
          <p>None divide 193, so 193 is prime.</p>

          <p>{`Alternative argument by contradiction: if $193 = bc$ with $b, c > 1$, then at least one factor must be $\\leq 13$. We just showed no integer from 2 to 13 divides 193.`}</p>

          <div className="lrn-definition">
            <span className="lrn-definition-term">Square Root Lemma</span>
            <div className="lrn-definition-desc">{`For positive numbers $s$ and $t$: $s < t$ if and only if $\\sqrt{s} < \\sqrt{t}$.`}</div>
          </div>

          <div className="lrn-proof">
            <span className="lrn-proof-header">Proof of the Square Root Lemma</span>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">1.</span>
              <div className="lrn-proof-step-content">{`Forward: If $s < t$, suppose $\\sqrt{s} \\geq \\sqrt{t}$. Then $s = (\\sqrt{s})^2 \\geq (\\sqrt{t})^2 = t$. Contradiction.`}</div>
            </div>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">2.</span>
              <div className="lrn-proof-step-content">{`Backward: If $\\sqrt{s} < \\sqrt{t}$, then $s = \\sqrt{s} \\times \\sqrt{s} < \\sqrt{t} \\times \\sqrt{t} = t$.`}</div>
            </div>
            <div className="lrn-qed">Q.E.D.</div>
          </div>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>{`Why does the square root test check only prime divisors, not all numbers up to $\\sqrt{n}$?`}</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>{`If $n$ is divisible by a composite $k$, then $k$ has a prime factor $p < k$. By transitivity, $p | k$ and $k | n$ imply $p | n$. So testing prime divisors is enough.`}</p>
            </details>
          </div>

          <h3>The Sieve of Eratosthenes</h3>
          <p>{`To find all primes up to $N$, start with the list $2, 3, 4, \\ldots, N$. Cross out multiples of 2 (starting from $2^2 = 4$). Then cross out remaining multiples of 3 (starting from $3^2 = 9$). Continue with the next unmarked number. Stop when you pass $\\sqrt{N}$.`}</p>

          <p>
            <strong>When to use this:</strong> Use the sieve when you need a complete list of primes
            up to some bound. It is far faster than testing each number individually.
          </p>

          <div className="lrn-steps">
            <div className="lrn-step">
              <span className="lrn-step-title">List all numbers from 2 to N</span>
              <p className="lrn-step-content">Write every integer from 2 to your upper bound.</p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">Cross out multiples of 2</span>
              <p className="lrn-step-content">{`Starting from $4 = 2^2$, cross out 4, 6, 8, 10, ... The number 2 itself stays.`}</p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">Cross out multiples of 3</span>
              <p className="lrn-step-content">{`Starting from $9 = 3^2$, cross out 9, 12, 15, 18, ... (some already crossed out).`}</p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">Continue with next unmarked number</span>
              <p className="lrn-step-content">{`Repeat for 5, 7, 11, ... Stop once the current prime exceeds $\\sqrt{N}$.`}</p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">Remaining numbers are prime</span>
              <p className="lrn-step-content">
                Every uncrossed number is prime. Every crossed number is composite.
              </p>
            </div>
          </div>

          <SieveVis C={C} />

          <p>{`For primes up to 144: we need only sieve by primes up to $\\sqrt{144} = 12$. That means sieving by 2, 3, 5, 7, and 11.`}</p>
          <p>
            The 34 primes up to 144 are: 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53,
            59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139.
          </p>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>{`Why do we start crossing out multiples of $p$ at $p^2$ instead of $2p$?`}</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>{`Every composite number less than $p^2$ has a prime factor smaller than $p$. Those composites were already crossed out when we sieved by smaller primes. The first "new" composite that only $p$ can catch is $p \\times p = p^2$.`}</p>
            </details>
          </div>

          <h3>Theorems and Conjectures about Primes</h3>

          <div className="lrn-definition">
            <span className="lrn-definition-term">Relatively Prime</span>
            <div className="lrn-definition-desc">{`Two positive integers are relatively prime (coprime) if their only common divisor is 1.`}</div>
          </div>

          <p>
            <strong>Dirichlet's Theorem:</strong>{' '}
            {`If $a$ and $d$ are relatively prime, the arithmetic progression $a, a + d, a + 2d, \\ldots$ contains infinitely many primes.`}
          </p>

          <div className="lrn-definition">
            <span className="lrn-definition-term">Twin Primes</span>
            <div className="lrn-definition-desc">{`Twin primes are pairs of primes that differ by 2. Examples: (3, 5), (5, 7), (29, 31), (71, 73), (137, 139). The Twin Prime Conjecture says there are infinitely many such pairs. This remains unproven.`}</div>
          </div>

          <p>
            <strong>Goldbach Conjecture:</strong>{' '}
            {`Every even number greater than 2 is the sum of two primes. Examples: $10 = 3 + 7$, $90 = 11 + 79$. This also remains unproven.`}
          </p>

          <p>
            <strong>Related results:</strong>{' '}
            {`Vinogradov proved every large enough odd number is the sum of three primes. Chen proved every large enough even number equals a prime plus a number with at most two prime factors.`}
          </p>

          <h3>Triplet Primes</h3>
          <p>{`Can three primes be equally spaced with gap 2? That is, can $k$, $k+2$, $k+4$ all be prime?`}</p>

          <div className="lrn-proof">
            <span className="lrn-proof-header">Proof: 3, 5, 7 are the only triplet primes</span>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">1.</span>
              <div className="lrn-proof-step-content">{`Write $k = 3n + r$ where $r = 0, 1$, or $2$.`}</div>
            </div>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">2.</span>
              <div className="lrn-proof-step-content">{`If $r = 0$: $k = 3n$, so $3 | k$. For $k$ to be prime, $k = 3$, giving the triplet (3, 5, 7).`}</div>
            </div>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">3.</span>
              <div className="lrn-proof-step-content">{`If $r = 1$: $k + 2 = 3n + 3 = 3(n+1)$. So $3 | (k+2)$, and $k+2 > 3$, so $k+2$ is composite.`}</div>
            </div>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">4.</span>
              <div className="lrn-proof-step-content">{`If $r = 2$: $k + 4 = 3n + 6 = 3(n+2)$. So $3 | (k+4)$, and $k+4 > 3$, so $k+4$ is composite.`}</div>
            </div>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">5.</span>
              <div className="lrn-proof-step-content">{`In every case except $k = 3$, one of the three numbers is composite. So (3, 5, 7) is the only triplet.`}</div>
            </div>
            <div className="lrn-qed">Q.E.D.</div>
          </div>

          <div className="lrn-faded">
            <div className="lrn-faded-phase">
              <span className="lrn-faded-label">COMPLETE EXAMPLE</span>
              <p>{`Show that (5, 7, 9) is not a prime triplet. Among $k = 5$, $k+2 = 7$, $k+4 = 9$: write $k = 3(1) + 2$, so $r = 2$. Then $k + 4 = 9 = 3 \\times 3$, which is composite. Not a triplet.`}</p>
            </div>
            <div className="lrn-faded-phase">
              <span className="lrn-faded-label">YOUR TURN: PARTIAL</span>
              <p>{`Show (11, 13, 15) is not a prime triplet. Write $k = 11 = 3(3) + 2$, so $r = 2$. Then $k + 4 = ?$ [compute and check if composite].`}</p>
            </div>
            <div className="lrn-faded-phase">
              <span className="lrn-faded-label">INDEPENDENT PRACTICE</span>
              <p>{`Show that (7, 9, 11) is not a prime triplet. Use the remainder argument.`}</p>
            </div>
          </div>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>{`Why does dividing by 3 with remainder cover all cases? Could a different divisor work?`}</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>{`Among any three equally spaced numbers $k, k+2, k+4$, exactly one is divisible by 3. These three numbers leave all three possible remainders 0, 1, 2 when divided by 3. Dividing by 3 is the natural choice because the spacing 2 creates this coverage.`}</p>
            </details>
          </div>

          <h3>Equi-spaced Primes and the Green-Tao Theorem</h3>
          <p>{`Primes can form arithmetic progressions with larger gaps. Examples:`}</p>
          <ul className="lrn-list">
            <li>{`5, 11, 17, 23, 29 (five primes with gap 6)`}</li>
            <li>{`7, 37, 67, 97, 127, 157 (six primes with gap 30)`}</li>
            <li>{`199, 409, 619, 829, 1039, 1249, 1459, 1669, 1879, 2089 (ten primes with gap 210)`}</li>
          </ul>

          <p>
            <strong>Green-Tao Theorem (2004):</strong>{' '}
            {`For any positive integer $k$, an arithmetic progression of $k$ primes exists.`}
          </p>

          <h3>Arbitrarily Long Gaps between Primes</h3>
          <p>{`For any $n$, the $n - 1$ consecutive numbers $n! + 2, n! + 3, \\ldots, n! + n$ are all composite.`}</p>

          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>{`$n! + k$ is divisible by $k$ for each $k$ from 2 to $n$. This is because $n! = 1 \\times 2 \\times \\cdots \\times n$ already contains $k$ as a factor, so $n! + k = k \\times (n!/k + 1)$.`}</p>
          </div>

          <p>{`Example: $7! = 5040$. The numbers 5042, 5043, 5044, 5045, 5046, 5047 are all composite (divisible by 2, 3, 4, 5, 6, 7 respectively).`}</p>

          <h3>Infinity of Primes</h3>

          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              Could there be a largest prime? What happens if you multiply all known primes together
              and add 1?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>{`$N = p_1 p_2 \\cdots p_k + 1$ is not divisible by any of the primes $p_1, \\ldots, p_k$ (remainder 1 each time). So either $N$ itself is a new prime, or $N$ has a prime factor not in the list. Either way, the list was incomplete.`}</p>
            </details>
          </div>

          <div className="lrn-proof">
            <span className="lrn-proof-header">
              Proof: There are infinitely many primes (Euclid)
            </span>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">1.</span>
              <div className="lrn-proof-step-content">{`Assume for contradiction that $p_1, p_2, \\ldots, p_k$ is a complete list of all primes.`}</div>
            </div>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">2.</span>
              <div className="lrn-proof-step-content">{`Define $N = p_1 p_2 \\cdots p_k + 1$.`}</div>
            </div>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">3.</span>
              <div className="lrn-proof-step-content">{`For each $p_i$: $N = p_i(p_1 \\cdots p_{i-1} p_{i+1} \\cdots p_k) + 1$. So $p_i \\nmid N$ (remainder 1).`}</div>
            </div>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">4.</span>
              <div className="lrn-proof-step-content">{`$N > 1$, so by the FTA, $N$ has a prime factor. But no $p_i$ divides $N$. Contradiction.`}</div>
            </div>
            <div className="lrn-qed">Q.E.D.</div>
          </div>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>{`Does the proof say that $N = p_1 \\cdots p_k + 1$ is always prime?`}</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>{`No. The proof says $N$ has a prime factor not in the list. That prime might be $N$ itself (making $N$ prime) or it might be a different prime that divides $N$. The point is that the list is incomplete, not that $N$ is necessarily prime.`}</p>
            </details>
          </div>
        </>,

        /* ════════════════════════════════════════════════════════════════════════
         SECTION 3: THE FUNDAMENTAL THEOREM OF ARITHMETIC (Module 34)
         ════════════════════════════════════════════════════════════════════════ */
        <>
          <h2>The Fundamental Theorem of Arithmetic</h2>

          <p>
            The security of RSA encryption depends on how hard it is to factor large numbers. The
            Fundamental Theorem guarantees those factors exist and are unique. That uniqueness is
            what makes modern encryption possible.
          </p>

          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>{`Can a number like 91 be written as a product of primes in two different ways (ignoring order)?`}</p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>{`No. $91 = 7 \\times 13$, and there is no other way to write it as a product of primes. The Fundamental Theorem guarantees this uniqueness for every integer.`}</p>
            </details>
          </div>

          <h3>Prime Decomposition</h3>
          <p>{`The prime decomposition (or prime factorization) of a positive integer $n > 1$ is the expression of $n$ as a product of primes. For example:`}</p>
          <ul className="lrn-list">
            <li>{`$193$ is already prime. Its decomposition is just $193$.`}</li>
            <li>{`$391 = 17 \\times 23$`}</li>
            <li>{`$1729 = 7 \\times 13 \\times 19$`}</li>
            <li>{`$16{,}269 = 3 \\times 11 \\times 17 \\times 29$`}</li>
          </ul>

          <h3>Finding Prime Decompositions in Practice</h3>
          <p>{`To factor $14{,}933$: test primes from 2 upward. Since $\\sqrt{14933} \\approx 122$, test primes up to 122. You find $14{,}933 = 109 \\times 137$. Both 109 and 137 are prime.`}</p>

          <p>{`The number $2{,}147{,}483{,}647$ looks enormous. Its square root is about 46,340. You must test all 4,793 primes up to 46,340. This number turns out to be prime (a Mersenne prime: $2^{31} - 1$).`}</p>

          <p>
            <strong>Connection to cryptography:</strong>{' '}
            {`Public key cryptosystems rely on the difficulty of factoring very large numbers (hundreds of digits). Multiplying two large primes is easy. Finding the factors from the product is computationally infeasible with current methods.`}
          </p>

          <h3>Existence of Prime Decomposition</h3>

          <div className="lrn-definition">
            <span className="lrn-definition-term">Key Fact</span>
            <div className="lrn-definition-desc">{`Every composite number has a prime divisor. If $n$ is composite, $n = ab$ where $a > 1$. The smallest divisor of $n$ greater than 1 must be prime (if it were composite, it would have a smaller divisor, contradicting minimality).`}</div>
          </div>

          <div className="lrn-definition">
            <span className="lrn-definition-term">Fundamental Theorem of Arithmetic (FTA)</span>
            <div className="lrn-definition-desc">{`Every positive integer $n > 1$ has a unique prime decomposition, up to the order of the factors.`}</div>
          </div>

          <p>
            The FTA has two parts: existence (every number can be written as a product of primes)
            and uniqueness (there is only one such product, up to reordering).
          </p>

          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>{`Existence follows from repeatedly pulling out prime factors. Each step reduces the number. Uniqueness is harder. It relies on Euclid's Lemma. If a prime divides a product, it must divide one of the factors. This property is special to primes and fails for composite numbers.`}</p>
          </div>

          <div className="lrn-proof">
            <span className="lrn-proof-header">Proof of Existence</span>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">1.</span>
              <div className="lrn-proof-step-content">{`If $n$ is prime, it is its own prime decomposition. Done.`}</div>
            </div>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">2.</span>
              <div className="lrn-proof-step-content">{`If $n$ is composite, by the Key Fact, $n$ has a prime divisor $p_1$. Write $n = p_1 n_1$ where $n_1 < n$.`}</div>
            </div>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">3.</span>
              <div className="lrn-proof-step-content">{`If $n_1$ is prime, then $n = p_1 n_1$ is the decomposition. If not, repeat: $n_1 = p_2 n_2$ with $n_2 < n_1$.`}</div>
            </div>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">4.</span>
              <div className="lrn-proof-step-content">{`The sequence $n > n_1 > n_2 > \\cdots$ is a strictly decreasing sequence of positive integers. It must stop.`}</div>
            </div>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">5.</span>
              <div className="lrn-proof-step-content">{`It stops when the last $n_k$ is prime. Then $n = p_1 p_2 \\cdots p_k n_k$.`}</div>
            </div>
            <div className="lrn-qed">Q.E.D.</div>
          </div>

          <p>{`Bound: if $n < 2^7 = 128$, the decomposition has at most 6 prime factors (since $2^7 = 128$ and each prime is $\\geq 2$).`}</p>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>{`Why must the decreasing sequence $n > n_1 > n_2 > \\cdots$ eventually stop?`}</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>{`Each $n_i$ is a positive integer, and $n_{i+1} < n_i$. A strictly decreasing sequence of positive integers cannot go on forever because you would eventually reach 0 or below, but all terms must stay positive. So the sequence must stop.`}</p>
            </details>
          </div>

          <h3>Uniqueness of Prime Decomposition</h3>

          <div className="lrn-definition">
            <span className="lrn-definition-term">Euclid's Lemma</span>
            <div className="lrn-definition-desc">{`If $p$ is prime and $p | ab$, then $p | a$ or $p | b$ (or both).`}</div>
          </div>

          <p>{`This is the key result that makes uniqueness work. Its proof uses the Euclidean Algorithm, which comes next. We cover the proof there.`}</p>

          <p>{`Example: uniqueness of $91 = 7 \\times 13$. Suppose $91 = q_1 q_2 \\cdots q_s$ is another decomposition. Since $7 | 91 = q_1 q_2 \\cdots q_s$, Euclid's Lemma says $7$ divides some $q_i$. But $q_i$ is prime, so $q_i = 7$. Cancel: $13 = $ product of remaining $q$'s. Since 13 is prime, the remaining product must be just 13. Same decomposition.`}</p>

          <div className="lrn-proof">
            <span className="lrn-proof-header">Proof of Uniqueness (for product of 3 primes)</span>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">1.</span>
              <div className="lrn-proof-step-content">{`Suppose $n = p_1 p_2 p_3 = q_1 q_2 \\cdots q_s$.`}</div>
            </div>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">2.</span>
              <div className="lrn-proof-step-content">{`$p_1 | q_1 q_2 \\cdots q_s$. By repeated application of Euclid's Lemma, $p_1 | q_i$ for some $i$. Since $q_i$ is prime, $p_1 = q_i$.`}</div>
            </div>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">3.</span>
              <div className="lrn-proof-step-content">{`Cancel $p_1 = q_i$: $p_2 p_3 = q_1 \\cdots q_{i-1} q_{i+1} \\cdots q_s$.`}</div>
            </div>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">4.</span>
              <div className="lrn-proof-step-content">{`Repeat for $p_2$, then $p_3$. All primes match up, and $s = 3$.`}</div>
            </div>
            <div className="lrn-qed">Q.E.D.</div>
          </div>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>{`Why is Euclid's Lemma essential for uniqueness? What goes wrong without it?`}</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>{`Without Euclid's Lemma, you cannot conclude that $p_1$ equals one of the $q_i$'s. Knowing $p_1 | q_1 q_2 \\cdots q_s$ does not automatically mean $p_1$ divides any single $q_i$. That is a special property of primes. Without it, factorization need not be unique.`}</p>
            </details>
          </div>

          <div className="lrn-faded">
            <div className="lrn-faded-phase">
              <span className="lrn-faded-label">COMPLETE EXAMPLE</span>
              <p>{`Show $91 = 7 \\times 13$ is the unique prime decomposition.`}</p>
              <p>{`Suppose $91 = q_1 q_2 \\cdots q_s$. Since $7 | 91$, by Euclid's Lemma $7 | q_i$ for some $i$, so $q_i = 7$. Cancel: $13 = $ remaining product. Since 13 is prime, the product is just 13. Same decomposition.`}</p>
            </div>
            <div className="lrn-faded-phase">
              <span className="lrn-faded-label">YOUR TURN: PARTIAL</span>
              <p>{`Show $1729 = 7 \\times 13 \\times 19$ is the unique decomposition.`}</p>
              <p>{`Suppose $1729 = q_1 \\cdots q_s$. Since $7 | 1729$, by Euclid's Lemma $7 | q_i$ for some $i$, so $q_i = 7$. Cancel: $247 = $ remaining product. Now $13 | 247$, so... [finish the argument].`}</p>
            </div>
            <div className="lrn-faded-phase">
              <span className="lrn-faded-label">INDEPENDENT PRACTICE</span>
              <p>{`Show that $16{,}269 = 3 \\times 11 \\times 17 \\times 29$ is the unique decomposition.`}</p>
            </div>
          </div>
        </>,

        /* ════════════════════════════════════════════════════════════════════════
         SECTION 4: THE EUCLIDEAN ALGORITHM (Module 35)
         ════════════════════════════════════════════════════════════════════════ */
        <>
          <h2>The Euclidean Algorithm</h2>

          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>{`You want to find $\\gcd(3008, 1344)$. Listing all divisors of both numbers would take forever. Is there a shortcut using division-with-remainder?`}</p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>{`Yes. Divide 3008 by 1344 to get a remainder. Then divide 1344 by that remainder. Repeat until the remainder is 0. The last nonzero remainder is the gcd. This is the Euclidean Algorithm.`}</p>
            </details>
          </div>

          <h3>Common Divisors and GCD</h3>

          <div className="lrn-definition">
            <span className="lrn-definition-term">Greatest Common Divisor (gcd)</span>
            <div className="lrn-definition-desc">{`The gcd of two positive integers $a$ and $b$ is the largest positive integer that divides both $a$ and $b$. Written $\\gcd(a, b)$.`}</div>
          </div>

          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">GCD by Listing Divisors</span>
              <p>{`List all divisors of each number. Find the largest common one. Works for small numbers but impractical for large ones.`}</p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">GCD by Euclidean Algorithm</span>
              <p>{`Repeatedly divide and take remainders. Fast even for very large numbers. Reduces the problem by at least half each step.`}</p>
            </div>
          </div>

          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">GCD: What It Does</span>
              <p>GCD finds what two numbers share. It can only go down from either number.</p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">LCM: What It Does</span>
              <p>
                LCM finds what two numbers need to share a multiple. It can only go up from either
                number.
              </p>
            </div>
          </div>

          <h3>The Algorithm</h3>

          <p>{`The Euclidean Algorithm computes $\\gcd(a, b)$ by repeated division-with-remainder. The key observation is:`}</p>
          <div className="lrn-eq lrn-eq-display">{`$$\\gcd(a, b) = \\gcd(b, r) \\quad \\text{where } a = qb + r$$`}</div>

          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>{`If $d | a$ and $d | b$, then $d | (a - qb) = r$. And if $d | b$ and $d | r$, then $d | (qb + r) = a$. The common divisors of $(a, b)$ are exactly the common divisors of $(b, r)$. Same common divisors means same greatest common divisor.`}</p>
          </div>

          <div className="lrn-algorithm">
            <span className="lrn-algorithm-header">Euclidean Algorithm</span>
            <div className="lrn-algorithm-line">
              <span className="lrn-algorithm-line-num">1</span>
              <span>{`Input: positive integers $a$ and $b$ with $a > b$`}</span>
            </div>
            <div className="lrn-algorithm-line">
              <span className="lrn-algorithm-line-num">2</span>
              <span>{`Divide: $a = q_0 b + r_0$`}</span>
            </div>
            <div className="lrn-algorithm-line">
              <span className="lrn-algorithm-line-num">3</span>
              <span>{`If $r_0 = 0$: return $b$`}</span>
            </div>
            <div className="lrn-algorithm-line">
              <span className="lrn-algorithm-line-num">4</span>
              <span>{`Divide: $b = q_1 r_0 + r_1$`}</span>
            </div>
            <div className="lrn-algorithm-line">
              <span className="lrn-algorithm-line-num">5</span>
              <span>{`If $r_1 = 0$: return $r_0$`}</span>
            </div>
            <div className="lrn-algorithm-line">
              <span className="lrn-algorithm-line-num">6</span>
              <span>{`Continue until remainder is 0. Return last nonzero remainder.`}</span>
            </div>
          </div>

          <p>{`Example: $\\gcd(3008, 1344)$`}</p>

          <div className="lrn-steps">
            <div className="lrn-step">
              <span className="lrn-step-title">Step 1</span>
              <p className="lrn-step-content">{`$3008 = 2 \\times 1344 + 320$`}</p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">Step 2</span>
              <p className="lrn-step-content">{`$1344 = 4 \\times 320 + 64$`}</p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">Step 3</span>
              <p className="lrn-step-content">{`$320 = 5 \\times 64 + 0$`}</p>
            </div>
          </div>

          <p>{`Remainder hits 0. Last nonzero remainder is 64. So $\\gcd(3008, 1344) = 64$.`}</p>
          <p>{`Chain: $\\gcd(3008, 1344) = \\gcd(1344, 320) = \\gcd(320, 64) = \\gcd(64, 0) = 64$.`}</p>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>{`Why does the algorithm always stop? Could the remainders keep going forever?`}</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>{`Each remainder is strictly smaller than the previous divisor: $r_0 < b$, $r_1 < r_0$, $r_2 < r_1$, ... This is a strictly decreasing sequence of non-negative integers. It must reach 0.`}</p>
            </details>
          </div>

          <EAStepperVis C={C} />

          <p>{`Example: $\\gcd(23, 16)$`}</p>
          <div className="lrn-steps">
            <div className="lrn-step">
              <span className="lrn-step-title">Step 1</span>
              <p className="lrn-step-content">{`$23 = 1 \\times 16 + 7$`}</p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">Step 2</span>
              <p className="lrn-step-content">{`$16 = 2 \\times 7 + 2$`}</p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">Step 3</span>
              <p className="lrn-step-content">{`$7 = 3 \\times 2 + 1$`}</p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">Step 4</span>
              <p className="lrn-step-content">{`$2 = 2 \\times 1 + 0$`}</p>
            </div>
          </div>
          <p>{`$\\gcd(23, 16) = 1$. The numbers 23 and 16 are relatively prime.`}</p>

          <h3>GCD as an Integral Linear Combination</h3>

          <p>
            <strong>When to use this:</strong> Use back-substitution to express the gcd as a
            combination of the original numbers. This is essential for proving Euclid's Lemma and
            solving linear Diophantine equations.
          </p>

          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>{`We found $\\gcd(3008, 1344) = 64$. Can you write 64 as $s \\times 3008 + t \\times 1344$ for some integers $s$ and $t$?`}</p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>{`Yes. Work backwards through the Euclidean Algorithm steps: $64 = 1344 - 4 \\times 320 = 1344 - 4(3008 - 2 \\times 1344) = 9 \\times 1344 + (-4) \\times 3008$.`}</p>
            </details>
          </div>

          <div className="lrn-definition">
            <span className="lrn-definition-term">GCD as Linear Combination</span>
            <div className="lrn-definition-desc">{`For any positive integers $a$ and $b$, there exist integers $s$ and $t$ such that $\\gcd(a, b) = sa + tb$.`}</div>
          </div>

          <p>{`Example: Back-substitution for $\\gcd(3008, 1344) = 64$`}</p>
          <div className="lrn-steps">
            <div className="lrn-step">
              <span className="lrn-step-title">Start from the second-to-last step</span>
              <p className="lrn-step-content">{`$64 = 1344 - 4 \\times 320$`}</p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">Substitute the expression for 320</span>
              <p className="lrn-step-content">{`$320 = 3008 - 2 \\times 1344$, so $64 = 1344 - 4(3008 - 2 \\times 1344)$`}</p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">Simplify</span>
              <p className="lrn-step-content">{`$64 = 1344 - 4 \\times 3008 + 8 \\times 1344 = 9 \\times 1344 + (-4) \\times 3008$`}</p>
            </div>
          </div>

          <div className="lrn-eq lrn-eq-display">{`$$64 = 9 \\times 1344 + (-4) \\times 3008$$`}</div>

          <GcdLinearCombinationVis C={C} />

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>{`In the back-substitution, why do we work from the second-to-last equation, not the last one?`}</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>{`The last equation is $r_k = q \\times \\gcd + 0$. It just says the gcd divides the previous remainder. The second-to-last equation is where the gcd first appears as a remainder, expressed in terms of two previous remainders. That is our starting point for substitution.`}</p>
            </details>
          </div>

          <div className="lrn-faded">
            <div className="lrn-faded-phase">
              <span className="lrn-faded-label">COMPLETE EXAMPLE</span>
              <p>{`Express $\\gcd(35, 21) = 7$ as a linear combination. EA: $35 = 1(21) + 14$, $21 = 1(14) + 7$, $14 = 2(7) + 0$. Back-sub: $7 = 21 - 14 = 21 - (35 - 21) = 2(21) - 35$.`}</p>
            </div>
            <div className="lrn-faded-phase">
              <span className="lrn-faded-label">YOUR TURN: PARTIAL</span>
              <p>{`Express $\\gcd(252, 160)$ as a linear combination. EA: $252 = 1(160) + 92$, $160 = 1(92) + 68$, $92 = 1(68) + 24$, $68 = 2(24) + 20$, $24 = 1(20) + 4$, $20 = 5(4) + 0$. So $\\gcd = 4$. Back-sub: $4 = 24 - 20 = 24 - (68 - 2 \\times 24) = 3(24) - 68 = \\ldots$ [finish].`}</p>
            </div>
            <div className="lrn-faded-phase">
              <span className="lrn-faded-label">INDEPENDENT PRACTICE</span>
              <p>{`Find $\\gcd(1001, 357)$ and express it as an integral linear combination of 1001 and 357.`}</p>
            </div>
          </div>

          <h3>Proof of Euclid's Lemma</h3>
          <p>{`Now we can prove the key lemma from the FTA section.`}</p>

          <div className="lrn-proof">
            <span className="lrn-proof-header">
              Proof of Euclid's Lemma: If p is prime and p | ab, then p | a or p | b
            </span>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">1.</span>
              <div className="lrn-proof-step-content">{`Suppose $p \\nmid a$. We must show $p | b$.`}</div>
            </div>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">2.</span>
              <div className="lrn-proof-step-content">{`Since $p$ is prime and $p \\nmid a$, $\\gcd(a, p) = 1$.`}</div>
            </div>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">3.</span>
              <div className="lrn-proof-step-content">{`By the GCD linear combination theorem, $1 = sa + tp$ for some integers $s, t$.`}</div>
            </div>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">4.</span>
              <div className="lrn-proof-step-content">{`Multiply both sides by $b$: $b = sab + tpb$.`}</div>
            </div>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">5.</span>
              <div className="lrn-proof-step-content">{`$p | ab$ (given), so $p | sab$. Also $p | tpb$. By the Divisibility Lemma, $p | b$.`}</div>
            </div>
            <div className="lrn-qed">Q.E.D.</div>
          </div>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>{`Why does $p$ not dividing $a$ force $\\gcd(a, p) = 1$?`}</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>{`The only divisors of a prime $p$ are 1 and $p$. So $\\gcd(a, p)$ must be 1 or $p$. If $p | a$, the gcd is $p$. If $p \\nmid a$, the gcd cannot be $p$, so it must be 1.`}</p>
            </details>
          </div>

          <h3>Generalized Euclid and the Corollary</h3>

          <div className="lrn-definition">
            <span className="lrn-definition-term">Generalized Euclid's Lemma</span>
            <div className="lrn-definition-desc">{`If $k | ab$ and $\\gcd(a, k) = 1$, then $k | b$.`}</div>
          </div>

          <div className="lrn-proof">
            <span className="lrn-proof-header">Proof of Generalized Euclid's Lemma</span>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">1.</span>
              <div className="lrn-proof-step-content">{`$\\gcd(a, k) = 1$, so $1 = sa + tk$ for integers $s, t$.`}</div>
            </div>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">2.</span>
              <div className="lrn-proof-step-content">{`Multiply by $b$: $b = sab + tkb$.`}</div>
            </div>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">3.</span>
              <div className="lrn-proof-step-content">{`$k | ab$ (given), so $k | sab$. Also $k | tkb$. So $k | b$.`}</div>
            </div>
            <div className="lrn-qed">Q.E.D.</div>
          </div>

          <p>
            <strong>Corollary:</strong>{' '}
            {`If $k$ is a common divisor of $a$ and $b$, then $k$ divides $\\gcd(a, b)$.`}
          </p>
          <p>{`This means $\\gcd(a, b)$ is not just the largest common divisor. Every common divisor divides it.`}</p>
        </>,

        /* ════════════════════════════════════════════════════════════════════════
         SECTION 5: APPLICATIONS (Module 36)
         ════════════════════════════════════════════════════════════════════════ */
        <>
          <h2>Applications of GCD and LCM</h2>

          <p>
            The gcd is the tool that reduces fractions. To reduce 48/60 to 4/5, divide by gcd(48,
            60) = 12. Every fraction simplification uses this idea.
          </p>

          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>{`If $a = 24$ and $b = 108$, what is $\\gcd(24, 108) \\times \\text{lcm}(24, 108)$? How does it compare to $24 \\times 108$?`}</p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>{`$\\gcd(24, 108) = 12$ and $\\text{lcm}(24, 108) = 216$. So $12 \\times 216 = 2592 = 24 \\times 108$. This always holds: $\\gcd(a,b) \\times \\text{lcm}(a,b) = ab$.`}</p>
            </details>
          </div>

          <h3>Divisors via the FTA</h3>
          <p>{`If you know the prime decomposition of $n$, you can list all its divisors. Each divisor is formed by choosing exponents for each prime that are $\\leq$ the exponents in $n$'s decomposition.`}</p>

          <p>{`Example: $360 = 2^3 \\times 3^2 \\times 5$. A divisor of 360 has the form $2^a \\times 3^b \\times 5^c$ where $0 \\leq a \\leq 3$, $0 \\leq b \\leq 2$, $0 \\leq c \\leq 1$. Total number of divisors: $4 \\times 3 \\times 2 = 24$.`}</p>

          <p>
            <strong>When to use this:</strong> Use prime decompositions to find gcd and lcm when
            both numbers have known factorizations. For large numbers without known factorizations,
            use the Euclidean Algorithm instead.
          </p>

          <h3>GCD via Prime Decompositions</h3>
          <p>{`To find $\\gcd(a, b)$: take each prime that appears in both decompositions, with the smaller exponent.`}</p>

          <p>{`Example: $\\gcd(6{,}104{,}371, \\; 9{,}596{,}209)$. Factor both, find common primes, take minimum exponents.`}</p>

          <GcdLcmVennVis C={C} />

          <h3>Least Common Multiple (LCM)</h3>

          <div className="lrn-definition">
            <span className="lrn-definition-term">Least Common Multiple</span>
            <div className="lrn-definition-desc">{`The lcm of $a$ and $b$ is the smallest positive integer divisible by both $a$ and $b$.`}</div>
          </div>

          <p>
            <strong>When to use this:</strong> Use lcm when you need a common denominator for
            fractions, or when scheduling events that repeat at different intervals.
          </p>

          <p>{`Example: $\\text{lcm}(24, 108)$. Multiples of 24: 24, 48, 72, 96, 120, 144, 168, 192, 216, ... Multiples of 108: 108, 216, ... The first common one is 216.`}</p>

          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">LCM by Listing Multiples</span>
              <p>
                List multiples of each number until you find the first match. Simple but slow for
                large numbers.
              </p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">LCM via Prime Decompositions</span>
              <p>{`Take each prime with the maximum exponent. $\\text{lcm}(24, 108) = 2^3 \\times 3^3 = 216$.`}</p>
            </div>
          </div>

          <h3>LCM via Prime Decompositions</h3>
          <p>{`To find $\\text{lcm}(a, b)$: take each prime from either decomposition with the larger exponent.`}</p>
          <p>{`Example: $24 = 2^3 \\times 3$ and $108 = 2^2 \\times 3^3$. $\\text{lcm} = 2^3 \\times 3^3 = 8 \\times 27 = 216$.`}</p>
          <p>{`Example: $210 = 2 \\times 3 \\times 5 \\times 7$ and $693 = 3^2 \\times 7 \\times 11$. $\\text{lcm} = 2 \\times 3^2 \\times 5 \\times 7 \\times 11 = 6930$.`}</p>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>{`Why does taking maximum exponents for lcm guarantee divisibility by both $a$ and $b$?`}</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>{`If $a = 2^3 \\times 3^1$ and the lcm has $2^3$ and $3^3$, then the lcm contains at least as many copies of each prime as $a$ does. So $a$ divides the lcm. The same reasoning works for $b$. Taking the maximum ensures both are covered.`}</p>
            </details>
          </div>

          <h3>Three Key Propositions</h3>

          <div className="lrn-definition">
            <span className="lrn-definition-term">Proposition 1</span>
            <div className="lrn-definition-desc">{`If $d = \\gcd(a, b)$, then $\\gcd(a/d, \\; b/d) = 1$.`}</div>
          </div>

          <p>{`Concrete example before the proof: $a = 12$, $b = 8$. $\\gcd(12, 8) = 4$. Then $a/d = 3$, $b/d = 2$. And $\\gcd(3, 2) = 1$. Dividing by the gcd removes all shared prime factors.`}</p>

          <div className="lrn-proof">
            <span className="lrn-proof-header">Proof of Proposition 1 (via FTA)</span>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">1.</span>
              <div className="lrn-proof-step-content">{`Let $a = p^2 q s^3 t^4$ and $b = p s^5 t^2 u^3$ (example with specific prime letters).`}</div>
            </div>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">2.</span>
              <div className="lrn-proof-step-content">{`$d = \\gcd(a,b) = p s^3 t^2$ (minimum exponents of common primes).`}</div>
            </div>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">3.</span>
              <div className="lrn-proof-step-content">{`$a/d = p q t^2$ and $b/d = s^2 u^3$. These share no common primes, so $\\gcd(a/d, b/d) = 1$.`}</div>
            </div>
            <div className="lrn-qed">Q.E.D.</div>
          </div>

          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Proposition 1 via FTA</span>
              <p>{`Use prime decompositions. Dividing by gcd removes all shared primes, so quotients are coprime.`}</p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Proposition 1 via Euclidean Algorithm</span>
              <p>{`Use $d = sa + tb$. Then $1 = s(a/d) + t(b/d)$. If a prime divided both $a/d$ and $b/d$, it would divide 1. Contradiction.`}</p>
            </div>
          </div>

          <div className="lrn-definition">
            <span className="lrn-definition-term">Proposition 2</span>
            <div className="lrn-definition-desc">{`$ab = \\gcd(a, b) \\times \\text{lcm}(a, b)$`}</div>
          </div>

          <div className="lrn-proof">
            <span className="lrn-proof-header">Proof of Proposition 2 (via FTA)</span>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">1.</span>
              <div className="lrn-proof-step-content">{`For each prime $p_i$, let $a = p_i^{\\alpha_i} \\cdots$ and $b = p_i^{\\beta_i} \\cdots$.`}</div>
            </div>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">2.</span>
              <div className="lrn-proof-step-content">{`$\\gcd(a,b)$ has $p_i^{\\min(\\alpha_i, \\beta_i)}$ and $\\text{lcm}(a,b)$ has $p_i^{\\max(\\alpha_i, \\beta_i)}$.`}</div>
            </div>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">3.</span>
              <div className="lrn-proof-step-content">{`$\\min(\\alpha_i, \\beta_i) + \\max(\\alpha_i, \\beta_i) = \\alpha_i + \\beta_i$. So $\\gcd \\times \\text{lcm} = ab$.`}</div>
            </div>
            <div className="lrn-qed">Q.E.D.</div>
          </div>

          <p>{`Verification: $24 \\times 108 = 2592$. $\\gcd(24,108) = 12$, $\\text{lcm}(24,108) = 216$. $12 \\times 216 = 2592$. Confirmed.`}</p>

          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Proposition 2 via FTA</span>
              <p>{`Use min + max = sum for each prime's exponent.`}</p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">
                Proposition 2 via the GCD Minimality Theorem
              </span>
              <p>{`Let $L = ab/d$. Show $a | L$, $b | L$, and $L$ divides any common multiple. Uses Proposition 1 and Generalized Euclid.`}</p>
            </div>
          </div>

          <div className="lrn-definition">
            <span className="lrn-definition-term">Proposition 3</span>
            <div className="lrn-definition-desc">{`$\\text{lcm}(a, b)$ divides every common multiple of $a$ and $b$.`}</div>
          </div>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>{`Why does $\\min(\\alpha, \\beta) + \\max(\\alpha, \\beta) = \\alpha + \\beta$ hold for any two numbers?`}</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>{`If $\\alpha \\leq \\beta$, then $\\min = \\alpha$ and $\\max = \\beta$, so the sum is $\\alpha + \\beta$. If $\\alpha > \\beta$, then $\\min = \\beta$ and $\\max = \\alpha$, and the sum is still $\\alpha + \\beta$. Either way, you get the same total.`}</p>
            </details>
          </div>

          <h3>Fractions and Decimals</h3>

          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>{`Can you always reduce a fraction to lowest terms? And is the reduced form unique?`}</p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>{`Yes to both. Divide numerator and denominator by their gcd. The result is unique. The theorem below proves this using gcd properties.`}</p>
            </details>
          </div>

          <p>{`Reducing fractions: divide numerator and denominator by common factors repeatedly, or use gcd directly.`}</p>
          <p>{`Example: $81/54$. Common factor 3: $81/54 \\to 27/18 \\to 9/6 \\to 3/2$. Or: $\\gcd(81, 54) = 27$, so $81/54 = 3/2$ in one step.`}</p>

          <div className="lrn-definition">
            <span className="lrn-definition-term">Reducing Fractions</span>
            <div className="lrn-definition-desc">{`Every fraction $m/n$ is equal to a unique fraction $a/b$ in lowest terms (where $\\gcd(a, b) = 1$). Moreover, $a = m/d$ and $b = n/d$ where $d = \\gcd(m, n)$.`}</div>
          </div>

          <div className="lrn-proof">
            <span className="lrn-proof-header">Proof of Reducing Fractions</span>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">1.</span>
              <div className="lrn-proof-step-content">{`Let $d = \\gcd(m, n)$, $a = m/d$, $b = n/d$. Then $m/n = a/b$.`}</div>
            </div>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">2.</span>
              <div className="lrn-proof-step-content">{`By Proposition 1, $\\gcd(a, b) = 1$, so $a/b$ is in lowest terms.`}</div>
            </div>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">3.</span>
              <div className="lrn-proof-step-content">{`Uniqueness: suppose $m/n = a'/b'$ with $\\gcd(a', b') = 1$. Then $mb' = na'$. By properties of gcd and Generalized Euclid, $a = a'$ and $b = b'$.`}</div>
            </div>
            <div className="lrn-qed">Q.E.D.</div>
          </div>

          <h3>Finite Decimals</h3>

          <div className="lrn-definition">
            <span className="lrn-definition-term">Finite Decimal Characterization</span>
            <div className="lrn-definition-desc">{`A fraction $a/b$ in lowest terms equals a finite decimal if and only if $b = 2^m \\times 5^n$ for non-negative integers $m$ and $n$.`}</div>
          </div>

          <p>
            <strong>When to use this:</strong> Use this to instantly determine whether a fraction
            will produce a terminating or repeating decimal. Factor the denominator (after reducing
            to lowest terms).
          </p>

          <p>{`Example: $0.5726 = 5726/10000$. Reduce: $\\gcd(5726, 10000) = 2$, so $5726/10000 = 2863/5000$. Since $5000 = 2^3 \\times 5^4$, the denominator has only factors of 2 and 5. So it is a finite decimal.`}</p>

          <div className="lrn-proof">
            <span className="lrn-proof-header">Proof (both directions)</span>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">1.</span>
              <div className="lrn-proof-step-content">{`If $a/b$ is a finite decimal, then $a/b = N/10^k$ for some integers. So $b | 10^k = 2^k \\times 5^k$. By FTA, $b$ can only have prime factors 2 and 5.`}</div>
            </div>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">2.</span>
              <div className="lrn-proof-step-content">{`Conversely, if $b = 2^m \\times 5^n$, multiply top and bottom by $2^{n-m}$ or $5^{m-n}$ to make the denominator $10^{\\max(m,n)}$. Result is a finite decimal.`}</div>
            </div>
            <div className="lrn-qed">Q.E.D.</div>
          </div>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>{`Why must the fraction be in lowest terms before applying this test?`}</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>{`$6/15$ has denominator 15 = 3 × 5, which has a factor of 3, so the test would say "not a finite decimal." But $6/15 = 2/5$, and 5 is $5^1$, so it IS a finite decimal ($0.4$). Reducing first removes factors that cancel with the numerator, giving the true denominator.`}</p>
            </details>
          </div>

          <h3>Irrational Numbers</h3>

          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>{`Is $\\sqrt{2}$ a fraction? What goes wrong if you try to write $\\sqrt{2} = m/n$?`}</p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>{`No. If $\\sqrt{2} = m/n$ in lowest terms, then $m^2 = 2n^2$. So $m^2$ is even, which means $m$ is even. Write $m = 2k$: then $4k^2 = 2n^2$, so $n^2 = 2k^2$, meaning $n$ is also even. But then $\\gcd(m, n) \\geq 2$, contradicting "lowest terms."`}</p>
            </details>
          </div>

          <div className="lrn-definition">
            <span className="lrn-definition-term">Perfect Square</span>
            <div className="lrn-definition-desc">{`A positive integer $n$ is a perfect square if $n = k^2$ for some integer $k$. Examples: 25 = 5², 1936 = 44², 11025 = 105².`}</div>
          </div>

          <div className="lrn-definition">
            <span className="lrn-definition-term">Perfect Square Lemma</span>
            <div className="lrn-definition-desc">{`A positive integer $n$ is a perfect square if and only if every prime in its prime decomposition appears an even number of times.`}</div>
          </div>

          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>{`If $n = k^2$, then $n$'s prime decomposition is $k$'s decomposition with every exponent doubled, so all are even. Conversely, if all exponents are even, halve each exponent to get $k$, and $n = k^2$.`}</p>
          </div>

          <PerfectSquareParityVis C={C} />

          <div className="lrn-proof">
            <span className="lrn-proof-header">Proof: √2 is irrational (elementary)</span>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">1.</span>
              <div className="lrn-proof-step-content">{`Assume for contradiction $\\sqrt{2} = m/n$ with $\\gcd(m, n) = 1$.`}</div>
            </div>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">2.</span>
              <div className="lrn-proof-step-content">{`$m^2 = 2n^2$. So $m^2$ is even, meaning $m$ is even. Write $m = 2k$.`}</div>
            </div>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">3.</span>
              <div className="lrn-proof-step-content">{`$(2k)^2 = 2n^2$, so $4k^2 = 2n^2$, so $n^2 = 2k^2$. Then $n$ is also even.`}</div>
            </div>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">4.</span>
              <div className="lrn-proof-step-content">{`Both $m$ and $n$ even contradicts $\\gcd(m, n) = 1$.`}</div>
            </div>
            <div className="lrn-qed">Q.E.D.</div>
          </div>

          <div className="lrn-proof">
            <span className="lrn-proof-header">Proof: √3 is irrational (via FTA)</span>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">1.</span>
              <div className="lrn-proof-step-content">{`Assume $\\sqrt{3} = m/n$ in lowest terms. Then $m^2 = 3n^2$.`}</div>
            </div>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">2.</span>
              <div className="lrn-proof-step-content">{`$m^2$ has every prime appearing an even number of times (Perfect Square Lemma). Same for $n^2$.`}</div>
            </div>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">3.</span>
              <div className="lrn-proof-step-content">{`In $3n^2$, the prime 3 appears an odd number of times (even from $n^2$ plus one more).`}</div>
            </div>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">4.</span>
              <div className="lrn-proof-step-content">{`But $m^2$ has 3 appearing an even number of times. So $m^2 \\neq 3n^2$. Contradiction.`}</div>
            </div>
            <div className="lrn-qed">Q.E.D.</div>
          </div>

          <div className="lrn-faded">
            <div className="lrn-faded-phase">
              <span className="lrn-faded-label">COMPLETE EXAMPLE</span>
              <p>{`Prove $\\sqrt{5}$ is irrational. Assume $\\sqrt{5} = m/n$ in lowest terms. Then $m^2 = 5n^2$. In $m^2$, prime 5 appears an even number of times. In $5n^2$, prime 5 appears an odd number of times (even + 1). Even $\\neq$ odd. Contradiction.`}</p>
            </div>
            <div className="lrn-faded-phase">
              <span className="lrn-faded-label">YOUR TURN: PARTIAL</span>
              <p>{`Prove $\\sqrt{7}$ is irrational. Assume $\\sqrt{7} = m/n$ in lowest terms. Then $m^2 = 7n^2$. In $7n^2$, prime 7 appears how many times? [count, then compare to $m^2$, and reach the contradiction].`}</p>
            </div>
            <div className="lrn-faded-phase">
              <span className="lrn-faded-label">INDEPENDENT PRACTICE</span>
              <p>{`Prove $\\sqrt{6}$ is irrational using the FTA method. (Hint: focus on the prime 2 in $6n^2 = 2 \\times 3 \\times n^2$.)`}</p>
            </div>
          </div>

          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Elementary Proof (√2)</span>
              <p>Uses even/odd argument. Simple but works only for √2 and similar special cases.</p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">FTA-based Proof (√3, √p)</span>
              <p>
                Uses prime decomposition and parity of exponents. Works for any prime or
                non-perfect-square.
              </p>
            </div>
          </div>

          <div className="lrn-definition">
            <span className="lrn-definition-term">Irrationality of Prime Square Roots</span>
            <div className="lrn-definition-desc">{`If $p$ is prime, then $\\sqrt{p}$ is irrational.`}</div>
          </div>

          <p>{`The proof for $\\sqrt{3}$ generalizes directly: in $m^2 = pn^2$, the prime $p$ appears an odd number of times on the right but an even number on the left. Contradiction.`}</p>

          <div className="lrn-definition">
            <span className="lrn-definition-term">General Irrationality Test</span>
            <div className="lrn-definition-desc">{`If $n$ is a positive integer that is not a perfect square, then $\\sqrt{n}$ is irrational.`}</div>
          </div>

          <p>{`Example: $\\sqrt{175}$ is irrational. $175 = 5^2 \\times 7$. The prime 7 appears once (odd). So 175 is not a perfect square, and $\\sqrt{175}$ is irrational.`}</p>
        </>,

        /* ════════════════════════════════════════════════════════════════════════
         SECTION 6: PYTHAGOREAN TRIPLES (Module 37)
         ════════════════════════════════════════════════════════════════════════ */
        <>
          <h2>Pythagorean Triples</h2>

          <p>
            Egyptian surveyors used 3-4-5 ropes to construct right angles on the ground. Knotting a
            rope into 12 equal segments and forming a 3-4-5 triangle produced a perfect right angle.
            This connected number theory to physical geometry thousands of years ago.
          </p>

          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>{`You know $3^2 + 4^2 = 5^2$. Are there other integer solutions to $a^2 + b^2 = c^2$? Could there be infinitely many?`}</p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>{`Yes, infinitely many. A formula generates all "primitive" ones: $\\{m^2 - n^2, \\; 2mn, \\; m^2 + n^2\\}$ where $m > n$, $\\gcd(m,n) = 1$, and one of $m, n$ is even.`}</p>
            </details>
          </div>

          <h3>Definitions and Examples</h3>

          <div className="lrn-definition">
            <span className="lrn-definition-term">Pythagorean Triple</span>
            <div className="lrn-definition-desc">{`A Pythagorean triple is a set of three positive integers $\\{a, b, c\\}$ satisfying $a^2 + b^2 = c^2$. It is primitive if $\\gcd(a, b, c) = 1$.`}</div>
          </div>

          <p>
            <strong>When to use this:</strong> Use the Pythagorean triple formula to generate right
            triangles with integer side lengths. It connects number theory to geometry.
          </p>

          <p>Examples:</p>
          <ul className="lrn-list">
            <li>{`$3^2 + 4^2 = 9 + 16 = 25 = 5^2$ (the smallest triple)`}</li>
            <li>{`$5^2 + 12^2 = 25 + 144 = 169 = 13^2$`}</li>
            <li>{`$7809^2 + 7760^2 = 60{,}980{,}481 + 60{,}217{,}600 = 121{,}198{,}081 = 11{,}009^2$`}</li>
          </ul>

          <h3>The Formula for Primitive Triples</h3>

          <div className="lrn-eq lrn-eq-display">{`$$\\{m^2 - n^2, \\; 2mn, \\; m^2 + n^2\\}$$`}</div>
          <p>{`where $m > n > 0$, $\\gcd(m, n) = 1$, and exactly one of $m, n$ is even.`}</p>

          <PythagoreanTripleVis C={C} />

          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>{`$(m^2 - n^2)^2 + (2mn)^2 = m^4 - 2m^2n^2 + n^4 + 4m^2n^2 = m^4 + 2m^2n^2 + n^4 = (m^2 + n^2)^2$. The algebra works out because the cross terms cancel perfectly.`}</p>
          </div>

          <p>Verification with specific values:</p>
          <ul className="lrn-list">
            <li>{`$m = 2, n = 1$: $\\{4-1, 4, 4+1\\} = \\{3, 4, 5\\}$. Check: $9 + 16 = 25$.`}</li>
            <li>{`$m = 97, n = 40$: $\\{9409-1600, 7760, 9409+1600\\} = \\{7809, 7760, 11009\\}$.`}</li>
          </ul>

          <p>{`The conditions $\\gcd(m,n) = 1$ and one of $m, n$ even ensure the triple is primitive. Every primitive Pythagorean triple has this form (up to swapping $a$ and $b$).`}</p>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>{`Why must one of $m, n$ be even for the triple to be primitive?`}</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>{`If both $m$ and $n$ are odd, then $m^2 - n^2$, $2mn$, and $m^2 + n^2$ are all even. A common factor of 2 divides all three, making the triple non-primitive. Making one even and one odd ensures $m^2 - n^2$ and $m^2 + n^2$ are odd while $2mn$ is even. No common factor exists.`}</p>
            </details>
          </div>
        </>
      ]
    },

    practice: [
      // Interleaved across all sections

      // Division-with-remainder (Ch 32)
      {
        q: 'Find the quotient and remainder when 157 is divided by 12.',
        a: 'Quotient: 13, Remainder: 1. Because 12 × 13 = 156, and 157 − 156 = 1. Check: 157 = 13 × 12 + 1, and 0 ≤ 1 < 12.'
      },

      // Primes (Ch 33) - interleaved early
      {
        q: 'Is 251 prime? Show your reasoning.',
        a: '√251 ≈ 15.8. Test primes 2, 3, 5, 7, 11, 13: 251 is odd (not ÷ 2), digit sum 8 (not ÷ 3), ends in 1 (not ÷ 5), 251 = 35 × 7 + 6 (not ÷ 7), 1 − 5 + 2 = −2 (not ÷ 11), 251 = 19 × 13 + 4 (not ÷ 13). No divisor up to √251 works, so 251 is prime.'
      },

      // Divisibility (Ch 32)
      {
        q: 'Does 3 divide 8,247? Explain using the divisibility rule.',
        a: 'Add the digits: 8 + 2 + 4 + 7 = 21. Does 3 divide 21? Yes, 21 = 7 × 3. By the divisibility rule for 3, since 3 divides the digit sum, 3 divides 8,247.'
      },

      // Pythagorean triple transfer (Ch 37) - interleaved early
      {
        q: 'Use m = 4, n = 1 to generate a Pythagorean triple. Is it primitive? Verify the formula gives a right triangle.',
        a: 'm² − n² = 16 − 1 = 15, 2mn = 8, m² + n² = 17. Triple: {8, 15, 17}. Check: 64 + 225 = 289 = 17². gcd(4,1)=1 and 4 is even, so it is primitive. The formula works because (m²−n²)² + (2mn)² = (m²+n²)² by algebraic identity.'
      },

      // Euclidean Algorithm (Ch 35) - interleaved early
      {
        q: 'Use the Euclidean Algorithm to find gcd(455, 182).',
        a: '455 = 2 × 182 + 91. Then 182 = 2 × 91 + 0. Remainder is 0, so gcd = 91. The algorithm stops because each remainder is strictly smaller than the previous divisor. gcd(455, 182) = 91.'
      },

      // Divisibility Lemma (Ch 32)
      {
        q: 'If 7 divides 91 and 7 divides 56, does 7 divide 91 + 56? Justify using the Divisibility Lemma.',
        a: 'Yes. Let A = 91 + 56 = 147, B = 91, C = 56. Since A = B + C and 7 | B and 7 | C, the Divisibility Lemma says 7 | A. Check: 147 = 21 × 7.'
      },

      // FTA (Ch 34) - interleaved
      {
        q: 'Find the prime decomposition of 2,310.',
        a: '2310 = 2 × 1155 = 2 × 3 × 385 = 2 × 3 × 5 × 77 = 2 × 3 × 5 × 7 × 11. Each step divides by the smallest available prime. The FTA guarantees this is the only decomposition (up to order).'
      },

      // Irrationality (Ch 36) - interleaved early
      {
        q: 'Is √50 rational or irrational? Explain.',
        a: '50 = 2 × 5². The prime 2 appears once (odd number of times). By the Perfect Square Lemma, 50 is not a perfect square. By the General Irrationality Test, √50 is irrational. Alternatively: if √50 = m/n in lowest terms, then m² = 50n² = 2 × 5²n², and the prime 2 appears an odd number of times on the right but even on the left. Contradiction.'
      },

      // Divisibility rules (Ch 32)
      {
        q: 'Is 93,456 divisible by 4? By 9? Show each test.',
        a: 'By 4: check last two digits = 56. 56 = 14 × 4, so yes, 4 divides 93,456. By 9: digit sum = 9 + 3 + 4 + 5 + 6 = 27. 27 = 3 × 9, so yes, 9 divides 93,456. Each rule works because 100 = 25 × 4 and 10ⁿ ≡ 1 (mod 9).'
      },

      // Pythagorean triples (Ch 37) - interleaved
      {
        q: 'Generate a primitive Pythagorean triple using m = 3, n = 2.',
        a: 'm² − n² = 9 − 4 = 5, 2mn = 12, m² + n² = 13. Triple: {5, 12, 13}. Check: 25 + 144 = 169 = 13². gcd(3, 2) = 1 and one is even, so it is primitive.'
      },

      // Sieve (Ch 33)
      {
        q: 'Using the Sieve of Eratosthenes, find all primes up to 30.',
        a: 'Start: 2 to 30. Cross out multiples of 2 (starting at 4): 4,6,8,...,30. Cross out multiples of 3 (starting at 9): 9,15,21,27. Cross out multiples of 5 (starting at 25): 25. Stop: √30 ≈ 5.5, so done after 5. Remaining: 2, 3, 5, 7, 11, 13, 17, 19, 23, 29.'
      },

      // GCD linear combination (Ch 35) - interleaved
      {
        q: 'Express gcd(35, 15) as an integral linear combination of 35 and 15.',
        a: '35 = 2 × 15 + 5. 15 = 3 × 5 + 0. gcd = 5. Back-substitute: 5 = 35 − 2 × 15 = 1 × 35 + (−2) × 15. Check: 35 − 30 = 5. The gcd is always expressible as sa + tb by the GCD linear combination theorem.'
      },

      // Elaborate: Why does the EA always stop? (Ch 35)
      {
        q: 'Why does the Euclidean Algorithm always stop? Give the key reason.',
        a: 'Each step produces a strictly smaller remainder. If a = qb + r, then r < b. So the sequence of remainders b, r₀, r₁, r₂, ... is strictly decreasing. A strictly decreasing sequence of non-negative integers must reach 0. Once the remainder is 0, the algorithm stops. This guarantees termination no matter how large the inputs are.'
      },

      // Transitivity (Ch 32)
      {
        q: 'If 5 divides 15 and 15 divides 60, does 5 divide 60? Name the property.',
        a: 'Yes. By transitivity of divisibility. Since 5 | 15 (15 = 3 × 5) and 15 | 60 (60 = 4 × 15), we get 5 | 60. Check: 60 = 12 × 5.'
      },

      // LCM (Ch 36) - interleaved
      {
        q: 'Find lcm(18, 24) using prime decompositions.',
        a: '18 = 2 × 3² and 24 = 2³ × 3. Take maximum exponents: 2³ × 3² = 8 × 9 = 72. Check: 72/18 = 4 (integer), 72/24 = 3 (integer), and no smaller common multiple exists. lcm(18, 24) = 72.'
      },

      // Error detection
      {
        q: 'A student says √4 is irrational because 4 is not prime. Find the error.',
        a: 'The irrationality test says √p is irrational when p is prime, but that does not mean √n is irrational for every non-prime n. The correct test is: √n is irrational if n is not a perfect square. Since 4 = 2², it IS a perfect square. So √4 = 2, which is rational.'
      },

      // Rule for 11 (Ch 32)
      {
        q: 'Is 918,203 divisible by 11? Show the alternating sum test.',
        a: 'Alternating sum from rightmost digit: 3 − 0 + 2 − 8 + 1 − 9 = −11. Since 11 divides −11, yes, 11 divides 918,203. The rule works because 10ⁿ ≡ (−1)ⁿ (mod 11), making the number equivalent to its alternating digit sum modulo 11.'
      },

      // Proposition 2 (Ch 36)
      {
        q: 'Verify that gcd(36, 48) × lcm(36, 48) = 36 × 48.',
        a: '36 = 2² × 3², 48 = 2⁴ × 3. gcd = 2² × 3 = 12. lcm = 2⁴ × 3² = 144. Product: 12 × 144 = 1,728. Also 36 × 48 = 1,728. They match. This always works because min(α,β) + max(α,β) = α + β for each prime exponent.'
      },

      // Twin primes (Ch 33)
      {
        q: 'List all twin prime pairs between 50 and 80.',
        a: 'Primes in range: 53, 59, 61, 67, 71, 73, 79. Check gaps of 2: 59 and 61 differ by 2, and 71 and 73 differ by 2. Twin prime pairs: (59, 61) and (71, 73). Twin primes are primes that differ by exactly 2.'
      },

      // Transfer: Pythagorean Triples - apply m,n formula in construction context (Ch 37)
      {
        q: 'An architect wants a right-angle corner with integer measurements. Using m = 5, n = 2, generate a primitive triple and show the sides satisfy the Pythagorean equation.',
        a: 'm² − n² = 25 − 4 = 21, 2mn = 20, m² + n² = 29. Triple: {20, 21, 29}. Check: 400 + 441 = 841 = 29². gcd(5,2)=1 and 5 is odd and 2 is even, so the triple is primitive. The architect could build a 20-21-29 frame to guarantee a right angle.'
      },

      // Transfer: divisibility rules to new base
      {
        q: 'The divisibility rule for 3 uses the fact that 10 ≡ 1 (mod 3). In base 8, what number plays the role of 10? Would the same digit-sum rule work for divisibility by 7?',
        a: 'In base 8, the "10" is 8 (the base). 8 = 7 + 1, so 8 ≡ 1 (mod 7). Yes. In base 8, a number is divisible by 7 if and only if 7 divides the sum of its base-8 digits. The same logic applies: 8ⁿ = 7k + 1 for every n, so the number equals (multiple of 7) + (digit sum).'
      },

      // Transfer: Euclidean Algorithm to polynomials
      {
        q: 'The Euclidean Algorithm works because gcd(a, b) = gcd(b, r). Does this same idea apply to finding the gcd of two polynomials?',
        a: 'Yes. Polynomial long division gives f(x) = q(x)g(x) + r(x) with deg(r) < deg(g). The same argument works: any common divisor of f and g also divides r, and vice versa. So gcd(f, g) = gcd(g, r). Repeat until remainder is 0. This is the polynomial Euclidean Algorithm.'
      },

      // Consecutive composites (Ch 33) - interleaved
      {
        q: 'Find 4 consecutive composite numbers using the n! method.',
        a: 'Use n = 5: 5! = 120. Then 122 = 2 × 61, 123 = 3 × 41, 124 = 4 × 31, 125 = 5 × 25. So 122, 123, 124, 125 are four consecutive composites. The method works because 5! + k is divisible by k for k = 2, 3, 4, 5.'
      },

      // Reducing fractions (Ch 36)
      {
        q: 'Reduce $\\frac{252}{360}$ to lowest terms.',
        a: '$\\gcd(252, 360)$: $360 = 1 \\times 252 + 108$, $252 = 2 \\times 108 + 36$, $108 = 3 \\times 36 + 0$. So $\\gcd = 36$. $\\frac{252}{36} = 7$, $\\frac{360}{36} = 10$. Reduced form: $\\frac{7}{10}$. By the Reducing Fractions theorem, this is the unique fraction in lowest terms equal to $\\frac{252}{360}$.'
      },

      // Transfer: irrationality to cube roots
      {
        q: 'Using the FTA-based method, prove that $\\sqrt[3]{2}$ is irrational.',
        a: 'Assume $\\sqrt[3]{2} = \\frac{m}{n}$ in lowest terms. Then $m^3 = 2n^3$. In $m^3$, the prime 2 appears a multiple of 3 times. In $2n^3$, it appears $1 + (\\text{multiple of } 3)$ times. These cannot be equal (one is $\\equiv 0 \\pmod{3}$, the other $\\equiv 1 \\pmod{3}$). Contradiction. So $\\sqrt[3]{2}$ is irrational. The same exponent-parity argument from $\\sqrt{p}$ generalizes to cube roots.'
      },

      // Elaborate: why is 1 not prime?
      {
        q: 'Why is 1 excluded from the definition of prime numbers? Explain from first principles.',
        a: 'If 1 were prime, the FTA would fail. For example, 12 = 2² × 3, but also 12 = 1 × 2² × 3 = 1² × 2² × 3 = 1³ × 2² × 3. Every number would have infinitely many "prime" decompositions by tacking on 1s. Excluding 1 ensures uniqueness of prime decomposition, which is the foundation of all multiplicative number theory.'
      },

      // Finite decimals (Ch 36)
      {
        q: 'Does $\\frac{7}{40}$ produce a finite decimal? Explain.',
        a: '$\\frac{7}{40}$ is already in lowest terms ($\\gcd(7,40) = 1$). Factor denominator: $40 = 2^3 \\times 5$. The only prime factors are 2 and 5. By the Finite Decimal test, $\\frac{7}{40}$ is a finite decimal. Compute: $\\frac{7}{40} = \\frac{7 \\times 25}{40 \\times 25} = \\frac{175}{1000} = 0.175$.'
      },

      // Predict: what if gcd = 1
      {
        q: 'If $\\gcd(a, b) = 1$, predict what $\\text{lcm}(a, b)$ equals. Explain why.',
        a: '$\\text{lcm}(a, b) = ab$. By Proposition 2: $ab = \\gcd(a,b) \\times \\text{lcm}(a,b)$. If $\\gcd = 1$, then $ab = 1 \\times \\text{lcm}(a,b) = \\text{lcm}(a,b)$. When two numbers share no common factors, their lcm is simply their product. Every prime factor of one is new to the other.'
      },

      // Goldbach (Ch 33)
      {
        q: 'Verify the Goldbach Conjecture for 28. Express 28 as the sum of two primes.',
        a: '28 = 5 + 23. Check: 5 is prime, 23 is prime, and 5 + 23 = 28. Other representations: 28 = 11 + 17. The Goldbach Conjecture claims every even number > 2 is a sum of two primes. No one has proven this yet, but it holds for all tested values.'
      },

      // Elaborate: Why gcd(m,n)=1 is required for primitive triples (Ch 37)
      {
        q: 'Why do the conditions gcd(m,n) = 1 and exactly one of m, n even guarantee that the triple is primitive?',
        a: 'If gcd(m,n) = 1 and one is even: m²−n² and m²+n² are both odd (even²−odd²=odd, even²+odd²=odd), while 2mn is even. No prime can divide all three. If gcd(m,n) = d > 1, then d divides all three parts of the formula, creating a common factor. The coprimality condition is exactly what prevents shared factors in the output.'
      },

      // Transfer: divisibility
      {
        q: 'Using the Divisibility Lemma, prove: if n is an integer and 6 | n and 6 | (n + 12), does 6 | 12?',
        a: 'Write n + 12 = n + 12 (i.e., A = B + C with A = n + 12, B = n, C = 12). By the Divisibility Lemma, if 6 | A and 6 | B, then 6 | C. So 6 | 12. Check: 12 = 2 × 6. The lemma lets you conclude divisibility of the "missing" piece in any sum.'
      },

      // Self-explain card
      {
        q: 'Explain in your own words why every composite number must have a prime divisor.',
        a: 'If n is composite, n = ab with a > 1. The smallest divisor of n greater than 1 (call it d) must be prime. If d were composite, it would have a divisor between 1 and d, contradicting minimality. So d is prime, and d | n. This "smallest divisor" argument is the foundation of the existence half of the FTA.'
      },

      // Method selection
      {
        q: 'You need gcd(10403, 7429). Which method is better: prime factorization or the Euclidean Algorithm? Explain.',
        a: 'Euclidean Algorithm. Prime factorization requires finding all primes of two large numbers, testing every prime up to √10403 ≈ 102. The Euclidean Algorithm finishes in a few steps: 10403 = 1 × 7429 + 2974, 7429 = 2 × 2974 + 1481, 2974 = 2 × 1481 + 12, 1481 = 123 × 12 + 5, 12 = 2 × 5 + 2, 5 = 2 × 2 + 1, 2 = 2 × 1. So gcd = 1. Much faster.'
      },

      // Divisors via FTA (Ch 36)
      {
        q: 'How many divisors does 180 have? List the process.',
        a: '180 = 2² × 3² × 5¹. Number of divisors = (2+1)(2+1)(1+1) = 3 × 3 × 2 = 18. Each divisor has the form 2ᵃ × 3ᵇ × 5ᶜ where 0 ≤ a ≤ 2, 0 ≤ b ≤ 2, 0 ≤ c ≤ 1. We multiply the count of choices for each prime exponent.'
      },

      // Predict: what happens if m and n are both odd? (Ch 37)
      {
        q: 'What happens if you apply the triple formula with m and n both odd? Try m = 3, n = 1.',
        a: 'm² − n² = 9 − 1 = 8, 2mn = 6, m² + n² = 10. Triple: {6, 8, 10}. Check: 36 + 64 = 100 = 10². This works. But gcd(6, 8, 10) = 2, so the triple is NOT primitive. When m and n are both odd, m²−n², 2mn, and m²+n² are all even. The triple always has a factor of 2 running through it.'
      },

      // Transfer: Euclid's proof adapted
      {
        q: 'Euclid proved there are infinitely many primes. Adapt the argument: are there infinitely many primes of the form 4k + 3?',
        a: 'Assume finitely many: p₁, p₂, ..., pₖ (all ≡ 3 mod 4). Form N = 4p₁p₂...pₖ + 3. N ≡ 3 (mod 4). A product of numbers all ≡ 1 (mod 4) is ≡ 1 (mod 4). So N must have at least one prime factor ≡ 3 (mod 4). But none of p₁,...,pₖ divide N (remainder 3). So there is a new prime ≡ 3 (mod 4). Contradiction with finite list.'
      },

      // Elaborate: why back-substitution works
      {
        q: 'Why does back-substitution in the Euclidean Algorithm always produce integers s and t?',
        a: 'Each step of the EA is a = qb + r, giving r = a − qb. Back-substitution replaces each remainder with the difference of the previous two quantities, using integer coefficients (quotients). Each substitution combines integer multiples of earlier expressions. Since we start with integers and only use addition, subtraction, and multiplication by quotients (also integers), the final coefficients s and t must be integers.'
      },

      // Pythagorean triple transfer
      {
        q: 'Can (6, 8, 10) be generated by the Pythagorean triple formula directly?',
        a: 'No. (6, 8, 10) is not primitive because gcd(6, 8, 10) = 2. The formula generates only primitive triples. But (3, 4, 5) is primitive: m = 2, n = 1 gives {3, 4, 5}. Multiply by 2: (6, 8, 10). Every non-primitive triple is an integer multiple of a primitive one.'
      },

      // Predict: divisibility and subtraction
      {
        q: 'Predict: if 7 | 1001, does 7 | 994? Use the Divisibility Lemma to explain.',
        a: 'Yes. 1001 = 994 + 7. Since 7 | 1001 and 7 | 7, the Divisibility Lemma says 7 | 994. Check: 994 = 142 × 7. The lemma works because if x divides two terms of A = B + C, it divides the third.'
      },

      // Proposition 1 application
      {
        q: 'If $\\gcd(48, 84) = 12$, what is $\\gcd\\!\\left(\\frac{48}{12}, \\frac{84}{12}\\right)$?',
        a: '$\\gcd(4, 7) = 1$. By Proposition 1, dividing both numbers by their gcd always produces coprime quotients. This is because dividing by $d$ removes all shared prime factors. $4 = 2^2$ and $7 = 7$, which share no primes.'
      },

      // Conceptual: Euclid's Lemma
      {
        q: "Give an example showing Euclid's Lemma fails for composite numbers. That is, find composite k and integers a, b where k | ab but k ∤ a and k ∤ b.",
        a: 'k = 6, a = 4, b = 9. ab = 36 and 6 | 36. But 6 ∤ 4 and 6 ∤ 9. This works because 6 is composite: its factors 2 and 3 can "split" between a and b (2 | 4 and 3 | 9). Euclid\'s Lemma holds only for prime divisors.'
      },

      // Transfer: Lemma 36.3 to higher powers
      {
        q: 'Using the logic of the Perfect Square Lemma, determine if 1728 is a perfect cube.',
        a: '1728 = 2⁶ × 3³. For a perfect cube, every prime must appear a multiple-of-3 times. 2 appears 6 times (multiple of 3), 3 appears 3 times (multiple of 3). So yes, 1728 is a perfect cube: 1728 = 12³. The same exponent argument from squares extends: cubes need exponents divisible by 3.'
      },

      // Predict: why can we not find a formula for the nth prime? (Ch 33)
      {
        q: 'We have formulas for many sequences. Why does no simple formula exist for the nth prime? Think about what the primes are defined by.',
        a: 'Primes are defined by what they are NOT (they have no proper divisors). Most sequences are defined by a pattern that builds new terms from old ones. Primes have no such recursive structure. Each prime is found by checking all smaller numbers. The gaps between primes (shown by the factorial construction) can grow without bound, ruling out any simple closed-form formula. The distribution of primes is deeply irregular at small scales even though it follows probabilistic laws at large scales.'
      },

      // Elaborate: why gcd is a linear combination
      {
        q: 'Why is it surprising that gcd(a, b) can always be written as sa + tb? What makes this non-obvious?',
        a: 'The gcd is defined as the LARGEST common divisor, a property about dividing into a and b. But sa + tb builds a number by ADDING multiples of a and b. These are opposite operations (division vs. addition). The Euclidean Algorithm bridges them: each division step expresses a remainder as a difference of multiples, and chaining these expressions reaches the gcd. Without the EA, there is no obvious reason addition should reach a divisibility result.'
      },

      // Rule for 5 - computation
      {
        q: 'Which of these are divisible by both 3 and 5: 135, 240, 317, 450?',
        a: 'By 5: last digit 0 or 5. 135 (yes), 240 (yes), 317 (no), 450 (yes). By 3: digit sum divisible by 3. 135: 1+3+5=9 (yes). 240: 2+4+0=6 (yes). 450: 4+5+0=9 (yes). Divisible by both: 135, 240, 450. Note: divisible by both 3 and 5 means divisible by 15.'
      },

      // Self-explain: uniqueness
      {
        q: 'Explain why the uniqueness of prime decomposition is important for reducing fractions.',
        a: 'When reducing $\\frac{m}{n}$, we need $\\gcd(m,n)$ to be well-defined. If prime decompositions were not unique, two different "gcd" values could emerge from different factorizations, leading to different "reduced" forms. Uniqueness of factorization (FTA) ensures gcd is uniquely determined, which by the Reducing Fractions theorem guarantees a unique reduced fraction. Without the FTA, fraction arithmetic would be inconsistent.'
      },

      // Predict: gcd chain
      {
        q: 'Predict: if gcd(a, b) = d and gcd(b, c) = e, is gcd(a, c) necessarily related to d and e?',
        a: "Not necessarily. Example: a = 6, b = 10, c = 15. gcd(6,10) = 2, gcd(10,15) = 5, but gcd(6,15) = 3. The gcd values d = 2 and e = 5 don't predict gcd(a,c) = 3. The gcd is not transitive in a simple way. It depends on the specific prime structure of all three numbers."
      },

      // Finite decimal edge case
      {
        q: 'Is $\\frac{3}{12}$ a finite decimal? Be careful about lowest terms.',
        a: 'First reduce: $\\gcd(3,12) = 3$, so $\\frac{3}{12} = \\frac{1}{4}$. Denominator $4 = 2^2$. Only prime factor is 2. By the Finite Decimal test, $\\frac{1}{4}$ is a finite decimal: $\\frac{1}{4} = \\frac{25}{100} = 0.25$. Reducing first is essential. The original denominator $12 = 2^2 \\times 3$ would incorrectly suggest a non-terminating decimal.'
      },

      // Applied: cryptography connection
      {
        q: 'Why does public key cryptography depend on the difficulty of factoring? Connect this to the FTA.',
        a: 'The FTA guarantees every number has a unique prime decomposition. So if you multiply two large primes p and q to get N = pq, the factorization IS unique. There is exactly one way to recover p and q. Encryption uses N publicly; decryption needs p and q. Security depends on factoring N being computationally hard despite the FTA guaranteeing the factors exist. The FTA says "they exist"; the difficulty is finding them.'
      },

      // Triplet primes deeper
      {
        q: 'Among 5 consecutive odd numbers k, k+2, k+4, k+6, k+8, can all five be prime? Use division by 5.',
        a: 'No (except possibly very small cases). Among any 5 consecutive odd numbers spaced by 2, their remainders mod 5 cover all 5 residues {0,1,2,3,4}. So exactly one is divisible by 5. For that one to be prime, it must equal 5 itself. This only works for k = 5: {5,7,9,11,13}, but 9 = 3 × 3 is not prime. So no set of 5 consecutive odd numbers (gap 2) are all prime.'
      },

      // Green-Tao application
      {
        q: 'The sequence 5, 11, 17, 23, 29 is an arithmetic progression of 5 primes with common difference 6. Verify each is prime.',
        a: '5: prime (only divisors 1, 5). 11: prime (√11 ≈ 3.3, not ÷ 2 or 3). 17: prime (√17 ≈ 4.1, not ÷ 2 or 3). 23: prime (√23 ≈ 4.8, not ÷ 2 or 3). 29: prime (√29 ≈ 5.4, not ÷ 2, 3, or 5). All 5 are prime. The Green-Tao theorem guarantees arbitrarily long such progressions exist.'
      },

      // Transfer: LCM to scheduling
      {
        q: 'Bus A comes every 12 minutes. Bus B comes every 18 minutes. Both arrive at 9:00 AM. When do they next arrive together?',
        a: 'Find lcm(12, 18). 12 = 2² × 3, 18 = 2 × 3². lcm = 2² × 3² = 36 minutes. They next arrive together at 9:36 AM. The lcm gives the shortest cycle where both events coincide. Every common arrival time is a multiple of 36 minutes after the first.'
      },

      // Elaborate: division-with-remainder uniqueness
      {
        q: 'Why are the quotient q and remainder r in a = qd + r unique? What would go wrong with two different pairs?',
        a: 'Suppose a = q₁d + r₁ = q₂d + r₂ with 0 ≤ r₁, r₂ < d. Then (q₁ − q₂)d = r₂ − r₁. Since |r₂ − r₁| < d and (q₁ − q₂)d is a multiple of d, the only possibility is q₁ − q₂ = 0, giving r₁ = r₂. If two quotients existed, their remainders would differ by a multiple of d, but both remainders are less than d, so the difference must be 0.'
      },

      // Conceptual: composite tests
      {
        q: 'If you know 2 | n and 3 | n, can you conclude 6 | n? What about 4 | n and 6 | n: does 24 | n?',
        a: 'First: yes, 2 | n and 3 | n implies 6 | n, because gcd(2,3) = 1. By Generalized Euclid, if 2 | n and gcd(2,3) = 1, combining with 3 | n gives 6 | n. Second: no, 4 | n and 6 | n does NOT imply 24 | n. Counterexample: n = 12. 4 | 12 and 6 | 12, but 24 ∤ 12. This fails because gcd(4,6) = 2 ≠ 1. You can only conclude lcm(4,6) = 12 divides n.'
      },

      // Self-explain: sieve efficiency
      {
        q: 'Explain why the Sieve of Eratosthenes only needs to cross out multiples of primes up to √N, not up to N.',
        a: 'Any composite number c ≤ N has a prime factor p ≤ √N (by the Primality Test). So c was already crossed out when we sieved by p. After processing all primes up to √N, every remaining number has no prime factor ≤ √N, which means it is prime. Processing primes larger than √N would cross out nothing new.'
      },

      // Predict: what happens with gcd(a, a)?
      {
        q: 'What is gcd(n, n) for any positive integer n? What about gcd(n, 0)?',
        a: 'gcd(n, n) = n, because n divides n and no larger number divides n. gcd(n, 0) = n, because every positive integer divides 0 (0 = 0 × k for any k), so all divisors of n are common divisors, and the greatest is n itself. These are boundary cases the Euclidean Algorithm handles: gcd(n, 0) = n is the base case that stops the algorithm.'
      },

      // Perfect square test
      {
        q: 'Is 7056 a perfect square? Use prime decomposition.',
        a: '7056 = 2⁴ × 3² × 7². Every prime appears an even number of times (4, 2, 2). By the Perfect Square Lemma, 7056 is a perfect square. √7056 = 2² × 3 × 7 = 84. Check: 84² = 7056.'
      },

      // Transfer: √6 irrationality
      {
        q: 'Prove $\\sqrt{6}$ is irrational using the FTA method.',
        a: 'Assume $\\sqrt{6} = \\frac{m}{n}$ in lowest terms. Then $m^2 = 6n^2 = 2 \\times 3 \\times n^2$. In $m^2$, prime 2 appears an even number of times. In $6n^2 = 2 \\times 3 \\times n^2$, prime 2 appears an odd number of times (1 from the 6, plus even from $n^2$). Even $\\neq$ odd, contradiction. So $\\sqrt{6}$ is irrational. The same argument works for any non-perfect-square.'
      },

      // Proposition 2 computation
      {
        q: 'Use Proposition 2 to find $\\text{lcm}(126, 90)$ without factoring both numbers completely.',
        a: '$\\gcd(126, 90)$ via EA: $126 = 1 \\times 90 + 36$, $90 = 2 \\times 36 + 18$, $36 = 2 \\times 18 + 0$. $\\gcd = 18$. By Proposition 2: $\\text{lcm} = \\frac{ab}{\\gcd} = \\frac{126 \\times 90}{18} = \\frac{11340}{18} = 630$. This avoids full factorization. The EA gives gcd, then one multiplication and division gives lcm.'
      },

      // Elaborate: why alternating sum for 11
      {
        q: 'Why does the alternating sum work for 11 but not for 7? What is special about 11 relative to 10?',
        a: '10 = 11 − 1, so 10 ≡ −1 (mod 11). Powers of 10 alternate: 10⁰ ≡ 1, 10¹ ≡ −1, 10² ≡ 1, ... This gives the alternating sum. For 7: 10 ≡ 3 (mod 7), and powers of 3 cycle as 3, 2, 6, 4, 5, 1 mod 7. No clean alternating pattern exists. The alternating sum only works when the base ≡ −1 (mod divisor).'
      },

      // Method selection: primality testing
      {
        q: 'To check if 997 is prime, is it faster to use the Sieve of Eratosthenes up to 997 or the square root test on 997?',
        a: 'Square root test. √997 ≈ 31.6, so test only 11 primes (2,3,5,7,11,13,17,19,23,29,31). The sieve would process all numbers from 2 to 997, which is much more work. The sieve is efficient for finding ALL primes in a range, but for testing ONE number, the square root test is far faster.'
      },

      // Predict: theorem 35.2
      {
        q: 'If 7 | (3 × n) and gcd(3, 7) = 1, what can you conclude about n?',
        a: '7 | n. By Generalized Euclid: if k | ab and gcd(a, k) = 1, then k | b. Here k = 7, a = 3, b = n. Since gcd(3, 7) = 1 and 7 | 3n, we get 7 | n. The key insight: when the divisor is coprime to one factor, it must divide the other.'
      },

      // Transfer: n! composites to specific bound
      {
        q: 'What is the smallest n such that n! + 2, n! + 3, ..., n! + n gives at least 10 consecutive composites?',
        a: 'We need n − 1 ≥ 10, so n ≥ 11. With n = 11: 11! + 2 through 11! + 11 gives 10 consecutive composites. 11! = 39,916,800. The numbers 39,916,802 through 39,916,811 are all composite (each 11! + k divisible by k for k = 2,...,11). But shorter runs of 10+ composites may exist at smaller values.'
      },

      // Conceptual: divisibility negation
      {
        q: 'If A does not divide C, can any multiple of A divide C? Justify.',
        a: 'No. By transitivity of divisibility (part b): if A ∤ C, then no multiple of A divides C. Proof by contradiction: if kA | C, then C = m(kA) = (mk)A, meaning A | C. This contradicts A ∤ C. Non-divisibility blocks all multiples too.'
      },

      // Computation: Euclidean Algorithm
      {
        q: 'Find gcd(1001, 357) and express it as a linear combination.',
        a: '1001 = 2 × 357 + 287. 357 = 1 × 287 + 70. 287 = 4 × 70 + 7. 70 = 10 × 7 + 0. gcd = 7. Back-sub: 7 = 287 − 4(70) = 287 − 4(357 − 287) = 5(287) − 4(357) = 5(1001 − 2 × 357) − 4(357) = 5(1001) − 14(357). So 7 = 5 × 1001 + (−14) × 357.'
      },

      // Applied: fraction simplification chain
      {
        q: 'Show that $\\frac{81}{54}$ reduces to $\\frac{3}{2}$ by repeatedly dividing by common factors, then verify with gcd.',
        a: 'Step by step: $\\frac{81}{54}$: both divisible by 3 gives $\\frac{27}{18}$. Again by 3 gives $\\frac{9}{6}$. Again by 3 gives $\\frac{3}{2}$. $\\gcd(3,2) = 1$, so done. Direct method: $\\gcd(81,54) = 27$ (by EA: $81 = 1 \\times 54 + 27$, $54 = 2 \\times 27 + 0$). $\\frac{81}{27} = 3$, $\\frac{54}{27} = 2$. Same result: $\\frac{3}{2}$. The direct gcd method is faster. One step instead of three.'
      },

      // Elaborate: Mersenne primes
      {
        q: 'The number 2,147,483,647 = 2³¹ − 1 is prime. Why does checking primality of such large numbers matter?',
        a: 'Mersenne primes (2ⁿ − 1) connect to perfect numbers (Euler proved every even perfect number has the form 2ⁿ⁻¹(2ⁿ − 1)). They also test the limits of primality algorithms. For cryptography, generating large primes is essential. The difficulty of primality testing for a specific number versus factoring an arbitrary product of two primes is the gap that makes RSA encryption possible.'
      },

      // Predict: divisibility rule for 8
      {
        q: 'Based on the rule for 4 (last 2 digits, because 100 = 4 × 25), predict a rule for divisibility by 8.',
        a: 'Check the last 3 digits. Because 1000 = 8 × 125, so 8 | 1000. Write n = 1000c + d where d is the last three digits. Since 8 | 1000c, by the Divisibility Lemma, 8 | n iff 8 | d. Example: is 5,128 divisible by 8? Last three digits: 128. 128 = 16 × 8. Yes. The pattern: divisibility by 2ᵏ checks the last k digits.'
      },

      // Self-explain: Proposition 3
      {
        q: 'Explain why lcm(a, b) must divide every common multiple of a and b, not just be less than or equal to them.',
        a: 'Let M be any common multiple of a and b. Write M = q × lcm(a,b) + r with 0 ≤ r < lcm(a,b). Since a | M and a | lcm(a,b), by the Divisibility Lemma a | r. Similarly b | r. So r is a common multiple of a and b. But r < lcm(a,b), and lcm is the SMALLEST positive common multiple. So r = 0, meaning lcm(a,b) | M. Division-with-remainder forces the divisibility.'
      },

      // Error detection
      {
        q: 'A student claims gcd(12, 8) = 2 because 2 is the smallest prime dividing both. Find the error.',
        a: 'The gcd is the GREATEST common divisor, not the smallest prime factor. Divisors of 12: 1,2,3,4,6,12. Divisors of 8: 1,2,4,8. Common divisors: 1,2,4. The greatest is 4, not 2. gcd(12, 8) = 4. The student confused "greatest common divisor" with "smallest common prime factor."'
      },

      // Transfer: Goldbach to odd numbers
      {
        q: 'Goldbach says every even number > 2 is the sum of two primes. Vinogradov proved every large odd number is the sum of three primes. Express 35 as a sum of three primes.',
        a: '35 = 3 + 3 + 29. Check: 3 is prime, 29 is prime, 3 + 3 + 29 = 35. Other options: 35 = 5 + 7 + 23 = 5 + 11 + 19 = 5 + 13 + 17. The key difference: even numbers need 2 primes (Goldbach), odd numbers need 3 (Vinogradov).'
      },

      // Pythagorean triple: find m, n
      {
        q: 'The triple {5, 12, 13} is primitive. Find the values of m and n in the formula.',
        a: 'We need m² − n² = 5 (or 12) and 2mn = 12 (or 5). Since 2mn must be even, 2mn = 12 gives mn = 6. And m² + n² = 13. From mn = 6 and m² − n² = 5: m² − n² = 5 and mn = 6. Try m = 3, n = 2: m² − n² = 9 − 4 = 5 ✓, 2mn = 12 ✓, m² + n² = 13 ✓. So m = 3, n = 2.'
      },

      // Computation mixed
      {
        q: 'Find gcd(360, 252) and lcm(360, 252) using prime decompositions.',
        a: '360 = 2³ × 3² × 5, 252 = 2² × 3² × 7. gcd: take min exponents of common primes. 2^min(3,2) × 3^min(2,2) = 2² × 3² = 36. lcm: take max exponents of all primes. 2³ × 3² × 5 × 7 = 8 × 9 × 5 × 7 = 2520. Check: 36 × 2520 = 90,720 = 360 × 252 ✓ (Proposition 2).'
      },

      // Predict: coprime pairs
      {
        q: 'If p and q are distinct primes, predict gcd(p², q³). Explain.',
        a: 'gcd(p², q³) = 1. Since p and q are distinct primes, p² = p × p contains only the prime p, and q³ = q × q × q contains only the prime q. They share no common prime factors. By the FTA, the only common divisor is 1. Distinct primes always produce coprime powers.'
      },

      // Elaborate: why the EA reduces by half
      {
        q: 'Why does the Euclidean Algorithm stop quickly? Approximately how many steps does it take?',
        a: 'Each step reduces the larger number by at least half. If a = qb + r with r < b, then r < a/2 (because if q ≥ 2, r < b ≤ a/2; if q = 1, r = a − b < a/2 since b > a/2). After 2 steps, both numbers have halved. So the algorithm takes at most 2⌈log₂(max(a,b))⌉ steps, which is logarithmic in the input size. This makes it fast even for very large numbers.'
      }
    ],

    reference: {
      category: 'Quick Reference',
      title: 'Number Theory',
      sections: [
        <>
          <h2>Division and Divisibility</h2>

          <div className="lrn-eq lrn-eq-display">
            <span>{`$$a = qd + r, \\quad 0 \\leq r < d$$`}</span>
          </div>
          <p>
            <strong>When to use:</strong> Classify integers relative to a divisor. Foundation for
            all modular arithmetic.
          </p>

          <div className="lrn-definition">
            <span className="lrn-definition-term">Divisibility</span>
            <div className="lrn-definition-desc">{`$y | x \\iff x = zy$ for some integer $z$`}</div>
          </div>

          <div className="lrn-definition">
            <span className="lrn-definition-term">Divisibility Lemma</span>
            <div className="lrn-definition-desc">{`$A = B + C$, $x$ divides two of them $\\Rightarrow x$ divides the third. When to use: prove divisibility of a sum or difference.`}</div>
          </div>

          <div className="lrn-definition">
            <span className="lrn-definition-term">Transitivity</span>
            <div className="lrn-definition-desc">{`$A | B$ and $B | C \\Rightarrow A | C$. Contrapositive: $A \\nmid C \\Rightarrow$ no multiple of $A$ divides $C$.`}</div>
          </div>

          <h2>Divisibility Rules</h2>

          <table className="lrn-table">
            <thead>
              <tr>
                <th>Divisor</th>
                <th>Test</th>
                <th>Why it works</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>2</td>
                <td>Last digit even</td>
                <td>{`$10 = 2 \\times 5$`}</td>
              </tr>
              <tr>
                <td>3</td>
                <td>Digit sum ÷ 3</td>
                <td>{`$10^n \\equiv 1 \\pmod{3}$`}</td>
              </tr>
              <tr>
                <td>4</td>
                <td>Last 2 digits ÷ 4</td>
                <td>{`$100 = 4 \\times 25$`}</td>
              </tr>
              <tr>
                <td>5</td>
                <td>Last digit 0 or 5</td>
                <td>{`$10 = 2 \\times 5$`}</td>
              </tr>
              <tr>
                <td>9</td>
                <td>Digit sum ÷ 9</td>
                <td>{`$10^n \\equiv 1 \\pmod{9}$`}</td>
              </tr>
              <tr>
                <td>11</td>
                <td>Alternating sum ÷ 11</td>
                <td>{`$10^n \\equiv (-1)^n \\pmod{11}$`}</td>
              </tr>
            </tbody>
          </table>

          <h2>Primes</h2>

          <div className="lrn-definition">
            <span className="lrn-definition-term">Prime</span>
            <div className="lrn-definition-desc">{`$p > 1$ with only divisors 1 and $p$. Note: 1 is NOT prime. 2 is the only even prime.`}</div>
          </div>

          <div className="lrn-eq lrn-eq-display">
            <span>{`$$\\text{Primality test: check divisors } 2 \\leq k \\leq \\sqrt{n}$$`}</span>
          </div>
          <p>
            <strong>When to use:</strong> Test a single number for primality. Use sieve for finding
            all primes in a range.
          </p>

          <div className="lrn-definition">
            <span className="lrn-definition-term">Primes up to 50</span>
            <div className="lrn-definition-desc">
              2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47
            </div>
          </div>

          <div className="lrn-definition">
            <span className="lrn-definition-term">Infinity of Primes</span>
            <div className="lrn-definition-desc">{`Euclid's proof: if $p_1, \\ldots, p_k$ are all primes, $N = p_1 \\cdots p_k + 1$ has a prime factor not in the list. When to use: prove there is no largest prime.`}</div>
          </div>

          <h2>Fundamental Theorem of Arithmetic</h2>

          <div className="lrn-eq lrn-eq-display">
            <span>{`$$n = p_1^{a_1} p_2^{a_2} \\cdots p_k^{a_k} \\quad \\text{(unique up to order)}$$`}</span>
          </div>
          <p>
            <strong>When to use:</strong> Finding divisors, computing gcd/lcm, proving
            irrationality, testing perfect squares.
          </p>

          <div className="lrn-definition">
            <span className="lrn-definition-term">Euclid's Lemma</span>
            <div className="lrn-definition-desc">{`$p$ prime, $p | ab \\Rightarrow p | a$ or $p | b$. When to use: key step in FTA uniqueness proof.`}</div>
          </div>

          <h2>Euclidean Algorithm</h2>

          <div className="lrn-algorithm">
            <span className="lrn-algorithm-header">Computing gcd(a, b)</span>
            <div className="lrn-algorithm-line">
              <span className="lrn-algorithm-line-num">1</span>
              <span>{`$a = q_0 b + r_0$`}</span>
            </div>
            <div className="lrn-algorithm-line">
              <span className="lrn-algorithm-line-num">2</span>
              <span>{`$b = q_1 r_0 + r_1$`}</span>
            </div>
            <div className="lrn-algorithm-line">
              <span className="lrn-algorithm-line-num">3</span>
              <span>Continue until remainder = 0</span>
            </div>
            <div className="lrn-algorithm-line">
              <span className="lrn-algorithm-line-num">4</span>
              <span>Last nonzero remainder = gcd</span>
            </div>
          </div>
          <p>
            <strong>When to use:</strong> Finding gcd of any two numbers. Faster than factoring for
            large numbers.
          </p>

          <div className="lrn-eq lrn-eq-display">
            <span>{`$$\\gcd(a, b) = \\gcd(b, r) \\quad \\text{where } a = qb + r$$`}</span>
          </div>

          <div className="lrn-eq lrn-eq-display">
            <span>{`$$\\gcd(a, b) = sa + tb \\quad \\text{(integral linear combination)}$$`}</span>
          </div>
          <p>
            <strong>When to use:</strong> Proving Euclid's Lemma, solving Diophantine equations,
            proving coprimality.
          </p>

          <div className="lrn-definition">
            <span className="lrn-definition-term">Generalized Euclid</span>
            <div className="lrn-definition-desc">{`$k | ab$ and $\\gcd(a, k) = 1 \\Rightarrow k | b$. When to use: transfer divisibility across coprime factors.`}</div>
          </div>

          <div className="lrn-definition">
            <span className="lrn-definition-term">Corollary</span>
            <div className="lrn-definition-desc">{`Every common divisor of $a$ and $b$ divides $\\gcd(a, b)$.`}</div>
          </div>

          <h2>GCD and LCM</h2>

          <div className="lrn-eq">
            <span>{`$$\\gcd: \\text{take } \\min \\text{ exponents of common primes}$$`}</span>
          </div>
          <div className="lrn-eq">
            <span>{`$$\\text{lcm}: \\text{take } \\max \\text{ exponents of all primes}$$`}</span>
          </div>

          <div className="lrn-eq lrn-eq-display">
            <span>{`$$ab = \\gcd(a, b) \\times \\text{lcm}(a, b)$$`}</span>
          </div>
          <p>
            <strong>When to use:</strong> Compute lcm from gcd (or vice versa) without full
            factorization.
          </p>

          <div className="lrn-definition">
            <span className="lrn-definition-term">Proposition 1</span>
            <div className="lrn-definition-desc">{`$d = \\gcd(a,b) \\Rightarrow \\gcd(a/d, b/d) = 1$. When to use: show quotients are coprime after dividing by gcd.`}</div>
          </div>

          <div className="lrn-definition">
            <span className="lrn-definition-term">Proposition 3</span>
            <div className="lrn-definition-desc">{`$\\text{lcm}(a,b)$ divides every common multiple of $a$ and $b$. When to use: prove a number IS the lcm.`}</div>
          </div>

          <div className="lrn-definition">
            <span className="lrn-definition-term">Number of Divisors</span>
            <div className="lrn-definition-desc">{`If $n = p_1^{a_1} \\cdots p_k^{a_k}$, then divisor count $= (a_1+1)(a_2+1)\\cdots(a_k+1)$.`}</div>
          </div>

          <h2>Fractions and Decimals</h2>

          <div className="lrn-definition">
            <span className="lrn-definition-term">Reducing Fractions</span>
            <div className="lrn-definition-desc">{`Every fraction $m/n$ reduces to a unique fraction in lowest terms: divide by $\\gcd(m,n)$. When to use: simplify any fraction.`}</div>
          </div>

          <div className="lrn-eq lrn-eq-display">
            <span>{`$$\\frac{a}{b} = \\text{finite decimal} \\iff b = 2^m \\times 5^n \\quad \\text{(in lowest terms)}$$`}</span>
          </div>
          <p>
            <strong>When to use:</strong> Instantly determine if a fraction terminates. Factor the
            denominator after reducing.
          </p>

          <h2>Irrational Numbers</h2>

          <div className="lrn-definition">
            <span className="lrn-definition-term">Perfect Square Lemma</span>
            <div className="lrn-definition-desc">{`$n$ is a perfect square $\\iff$ every prime in its decomposition appears an even number of times. When to use: test whether $\\sqrt{n}$ is rational.`}</div>
          </div>

          <div className="lrn-eq lrn-eq-display">
            <span>{`$$\\sqrt{n} \\text{ is irrational} \\iff n \\text{ is not a perfect square}$$`}</span>
          </div>

          <h2>Pythagorean Triples</h2>

          <div className="lrn-eq lrn-eq-display">
            <span>{`$$\\{m^2 - n^2, \\; 2mn, \\; m^2 + n^2\\}$$`}</span>
          </div>
          <p>
            <strong>When to use:</strong>{' '}
            {`Generate all primitive Pythagorean triples. Requires $m > n > 0$, $\\gcd(m,n) = 1$, one of $m,n$ even.`}
          </p>

          <h2>Key Conjectures (Unproven)</h2>

          <table className="lrn-table">
            <thead>
              <tr>
                <th>Conjecture</th>
                <th>Statement</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Twin Prime</td>
                <td>Infinitely many prime pairs (p, p+2)</td>
                <td>Open</td>
              </tr>
              <tr>
                <td>Goldbach</td>
                <td>Every even n {'>'} 2 is the sum of two primes</td>
                <td>Open</td>
              </tr>
            </tbody>
          </table>
        </>
      ]
    },

    customCss: `.MafsView { --mafs-bg: transparent; --mafs-fg: rgba(240,240,250,1); --mafs-line-color: rgba(240,240,250,0.15); }`
  }
}

export default function NumberTheory() {
  const C = useVizColors()
  const config = useConfig(C)
  return <LearningTemplate config={config} />
}
