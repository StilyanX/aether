import { LearningTemplate } from '../../../../components/learning/learning-template'
import { useVizColors } from '../../../../hooks/use-viz-colors'
import * as viz from './hcf-and-lcm-viz'
import { FONT_LABEL } from '../../../../components/viz/scale-tokens'

function useConfig() {
  const C = useVizColors()
  const config = {
    cssPrefix: 'hcl',
    documentTitle: 'HCF and LCM - AETHER',
    learning: {
      groupTitle: 'Number Theory',
      category: 'Arithmetic / Number Theory',
      title: 'HCF and LCM',
      subtitle:
        'Every fraction you simplify and every equation you solve by LCD rests on these two ideas.',
      sections: [
        // Section 0: Recall
        <>
          <h2>What You Already Know</h2>
          <p>{`You have already met divisors and multiples. A divisor of $a$ is a number that goes into $a$ with nothing left over, written $b \\mid a$. Saying "$b$ divides $a$" and "$a$ is a multiple of $b$" are the same fact seen from two sides.`}</p>
          <p>{`You also met two facts you will lean on here. If a number divides two values, it divides both their sum and their difference. And divisibility passes along a chain: if $c$ divides $b$ and $b$ divides $a$, then $c$ divides $a$.`}</p>
          <viz.DivisorPairs C={C} />
        </>,

        // Section 1: Common Divisors and HCF
        <>
          <h2>Common Divisors and the HCF</h2>
          <p>{`A common divisor of $a$ and $b$ is a number that divides both. The largest common divisor is what we want. We write it $\\gcd(a, b)$. It goes by three names that all mean the same thing: highest common factor (HCF), greatest common factor (GCF), and greatest common divisor (GCD).`}</p>
          <p>{`For example, divisors of $56$ include $1, 2, 4, 7, 8, 14, 28, 56$. Divisors of $96$ include $1, 2, 3, 4, 6, 8, 12, 16, 24, 32, 48, 96$. The common divisors are $1, 2, 4, 8$, and the greatest is $8$. So $\\gcd(56, 96) = 8$.`}</p>
          <p>{`When to use this: use HCF to simplify fractions, share items evenly, or reduce expressions to lowest terms.`}</p>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>{`Before reading the methods below, predict: what is $\\gcd(12, 18, 24)$? List factors of each and see what they share.`}</p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>{`Factors of $12$: $1, 2, 3, 4, 6, 12$. Factors of $18$: $1, 2, 3, 6, 9, 18$. Factors of $24$: $1, 2, 3, 4, 6, 8, 12, 24$. Common to all: $1, 2, 3, 6$. Greatest: $6$. So $\\gcd(12, 18, 24) = 6$.`}</p>
            </details>
          </div>
          <h3>Method 1: Listing Factors</h3>
          <p>{`List all factors of each number, find the common ones, and pick the largest. This works well for small numbers. For $\\gcd(56, 96)$, the common factors are $1, 2, 4, 8$, shown just above, so the HCF is $8$.`}</p>
          <h3>Method 2: Prime Factorisation</h3>
          <p>{`Write each number as a product of primes. For the HCF, take each prime to the minimum power that appears in all factorisations.`}</p>
          <p>{`$56 = 2^3 \\times 7$ and $96 = 2^5 \\times 3$. Common primes: only $2$. Minimum power of $2$: $\\min(3, 5) = 3$. So $\\gcd(56, 96) = 2^3 = 8$.`}</p>
          <p>{`Second example: $84 = 2^2 \\times 3 \\times 7$ and $105 = 3 \\times 5 \\times 7$. Common primes: $3$ and $7$. Min powers: $3^1$ and $7^1$. So $\\gcd(84, 105) = 3 \\times 7 = 21$.`}</p>
          <viz.TwoFactorTrees C={C} />
          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>{`In the factor tree for $84$ and $105$, the primes $3$ and $7$ appear in both trees but $2$ and $5$ do not. Why does the HCF only include primes common to both factorisations?`}</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>{`A common divisor must divide both numbers. If a prime $p$ is not in the factorisation of one number, then $p$ does not divide that number. So $p$ cannot be part of any common divisor.`}</p>
            </details>
          </div>
          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Listing Factors</span>
              <p>{`Straightforward for small numbers. Write out every factor, compare lists, pick the largest overlap. Slow for large numbers because the list grows fast.`}</p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Prime Factorisation</span>
              <p>{`Systematic and scales to larger numbers. Take each shared prime to its minimum power. Requires knowing the prime factorisation of each number first.`}</p>
            </div>
          </div>
          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>{`The HCF via prime factorisation works because every divisor of $n$ is built from primes in $n$'s factorisation. A common divisor of $a$ and $b$ can only use primes present in both. Taking the minimum power at each prime ensures the result divides both.`}</p>
          </div>
        </>,

        // Section 2: Common Multiples and the LCM
        <>
          <h2>Common Multiples and the LCM</h2>
          <p>{`A common multiple of $a$ and $b$ is a number that is a multiple of both. The least common multiple (LCM) is the smallest positive common multiple. We write $\\text{lcm}(a, b)$.`}</p>
          <p>{`Example: multiples of $4$ are $4, 8, 12, 16, 20, 24, \\ldots$ Multiples of $6$ are $6, 12, 18, 24, \\ldots$ The first shared value is $12$, so $\\text{lcm}(4, 6) = 12$.`}</p>
          <p>{`When to use this: use LCM to add fractions with different denominators, find the first time two cycles coincide, or solve synchronisation problems.`}</p>
          <p>{`Quick example of the fraction payoff: to add $\\tfrac{1}{4} + \\tfrac{1}{6}$, use the LCM $12$ as the common denominator. Then $\\tfrac{1}{4} = \\tfrac{3}{12}$ and $\\tfrac{1}{6} = \\tfrac{2}{12}$, so the sum is $\\tfrac{5}{12}$.`}</p>
          <viz.SharedMultiplesLine C={C} />
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>{`Predict $\\text{lcm}(56, 96)$ before reading the method. Is it larger or smaller than $56 \\times 96$? Can it equal $56 \\times 96$?`}</p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>{`$\\text{lcm}(56, 96) = 672$, which is much smaller than $56 \\times 96 = 5{,}376$. The LCM equals the product only when $\\gcd(a, b) = 1$. Since $\\gcd(56, 96) = 8$, the LCM is smaller.`}</p>
            </details>
          </div>
          <h3>Method 1: Listing Multiples</h3>
          <p>{`List multiples of both numbers until one appears in both lists. For $\\text{lcm}(4, 6)$: multiples of $4$ are $4, 8, 12, \\ldots$ and multiples of $6$ are $6, 12, \\ldots$ The first match is $12$.`}</p>
          <h3>Method 2: Prime Factorisation</h3>
          <p>{`Write each number as a product of primes. For the LCM, take each prime to the maximum power appearing in any factorisation.`}</p>
          <p>{`Recall $56 = 2^3 \\times 7$ and $96 = 2^5 \\times 3$ from the HCF section. Primes involved: $2, 3, 7$. Max powers: $2^5$, $3^1$, $7^1$. So $\\text{lcm}(56, 96) = 2^5 \\times 3 \\times 7 = 32 \\times 21 = 672$.`}</p>
          <p>{`Second example: $84 = 2^2 \\times 3 \\times 7$ and $105 = 3 \\times 5 \\times 7$. Max powers: $2^2$, $3^1$, $5^1$, $7^1$. So $\\text{lcm}(84, 105) = 4 \\times 3 \\times 5 \\times 7 = 420$.`}</p>
          <viz.PrimeFactorVenn C={C} />
          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>{`In the Venn diagram, the LCM uses all primes from both circles, not just the shared ones. Why must the LCM include even the primes that appear in only one number?`}</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>{`The LCM must be a multiple of $a$ and of $b$. A multiple of $a = 2^3 \\times 7$ must include at least $2^3$ and $7^1$. A multiple of $b = 2^5 \\times 3$ must include at least $2^5$ and $3^1$. The LCM takes the maximum of each prime to satisfy both conditions at once.`}</p>
            </details>
          </div>
          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Listing Multiples</span>
              <p>{`Intuitive and easy to visualise. Works well when $\\text{lcm}(a, b)$ is small relative to both $a$ and $b$. Slow when the LCM is large.`}</p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Prime Factorisation</span>
              <p>{`Systematic. Take each prime to its maximum power across all factorisations. Works for any numbers once you have their prime factorisations.`}</p>
            </div>
          </div>
        </>,

        // Section 3: The Product Rule
        <>
          <h2>The Product Rule for HCF and LCM</h2>
          <p>{`For any two positive integers $a$ and $b$:`}</p>
          <div className="lrn-eq lrn-eq-hero">{`$$a \\times b = \\gcd(a, b) \\times \\text{lcm}(a, b)$$`}</div>
          <p>{`Example: $56 \\times 96 = 5{,}376$ and $\\gcd(56, 96) \\times \\text{lcm}(56, 96) = 8 \\times 672 = 5{,}376$. They match.`}</p>
          <p>{`When to use this: use the product rule to find the LCM quickly when you already know the HCF. Also use it to verify your answers.`}</p>
          <viz.ProductRuleGrid C={C} />
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>{`$\\gcd(84, 105) = 21$. Use the product rule to find $\\text{lcm}(84, 105)$ without listing multiples.`}</p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>{`$\\text{lcm}(84, 105) = \\dfrac{84 \\times 105}{\\gcd(84, 105)} = \\dfrac{8{,}820}{21} = 420$. The product rule gives the answer directly.`}</p>
            </details>
          </div>
          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>{`The product rule says $a \\times b = \\gcd(a,b) \\times \\text{lcm}(a,b)$. Why does this make sense using prime factorisations? What happens to each prime's exponents on both sides?`}</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>{`For each prime $p$, say $p$ appears with exponent $m$ in $a$ and $n$ in $b$. On the left: $p^{m+n}$. On the right: $p^{\\min(m,n)} \\times p^{\\max(m,n)} = p^{\\min(m,n) + \\max(m,n)} = p^{m+n}$. The exponents match for every prime, so the two sides are equal.`}</p>
            </details>
          </div>
          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>{`You know $\\text{lcm}(a, b) = 60$ and $a \\times b = 720$. Find $\\gcd(a, b)$ and explain your reasoning step by step.`}</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>{`The product rule gives $a \\times b = \\gcd(a,b) \\times \\text{lcm}(a,b)$. Rearrange: $\\gcd(a,b) = \\dfrac{a \\times b}{\\text{lcm}(a,b)} = \\dfrac{720}{60} = 12$. The rule works in both directions.`}</p>
            </details>
          </div>
          <h3>Scaling Property</h3>
          <p>{`Multiplying both numbers by the same positive integer $k$ scales both the HCF and LCM by $k$:`}</p>
          <div className="lrn-eq">{`$$\\gcd(ka, kb) = k \\cdot \\gcd(a, b) \\quad \\text{and} \\quad \\text{lcm}(ka, kb) = k \\cdot \\text{lcm}(a, b)$$`}</div>
          <p>{`Example: $\\gcd(36, 45) = 9$. So $\\gcd(36 \\times 2025, 45 \\times 2025) = 9 \\times 2025 = 18{,}225$.`}</p>
        </>,

        // Section 4: HCF via Prime Factorisation Power Table
        <>
          <h2>The Prime Factorisation Method in Detail</h2>
          <p>{`You have now seen the prime factorisation method for HCF and for LCM. Here you do both at once with a single power table and check the product rule as you go. HCF takes the minimum power at each prime; LCM takes the maximum.`}</p>
          <p>{`When to use this: use this method when you need both HCF and LCM together, or when the numbers are too large for listing.`}</p>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>{`Given $450 = 2 \\times 3^2 \\times 5^2$ and $3150 = 2 \\times 3^2 \\times 5^2 \\times 7$, predict the HCF and LCM before computing.`}</p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>{`HCF: take minimum powers. Both share $2^1 \\times 3^2 \\times 5^2$. But $7$ appears only in $3150$, so it contributes $7^0 = 1$ to the HCF. $\\gcd(450, 3150) = 2 \\times 9 \\times 25 = 450$. LCM: take maximum powers. $\\text{lcm}(450, 3150) = 2 \\times 3^2 \\times 5^2 \\times 7 = 3150$. (Here $450$ divides $3150$, so the LCM is just $3150$.)`}</p>
            </details>
          </div>
          <div className="lrn-steps">
            <p>{`The rule in one line: write both numbers as prime powers. For each prime, take the smaller power for the HCF and the larger power for the LCM.`}</p>
            <ol className="lrn-list">
              <li>{`Factorise both numbers.`}</li>
              <li>{`List every prime that appears in either one.`}</li>
              <li>{`HCF: at each prime, take the smaller power. A prime in only one number contributes nothing.`}</li>
              <li>{`LCM: at each prime, take the larger power.`}</li>
            </ol>
            <p>{`The same rule works for three numbers at once. For $12 = 2^2 \\times 3$, $18 = 2 \\times 3^2$, and $24 = 2^3 \\times 3$: the HCF takes the smallest power of each shared prime, $2^1 \\times 3^1 = 6$. The LCM takes the largest, $2^3 \\times 3^2 = 72$.`}</p>
          </div>
          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>{`Take $168 = 2^3 \\times 3 \\times 7$ and $180 = 2^2 \\times 3^2 \\times 5$. Why does $5$ appear in the LCM but not the HCF? What is $\\min(0, 1) = 0$ telling you?`}</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>{`$5$ appears in $180$ (power $1$) but not in $168$ (power $0$). The HCF takes $\\min(0, 1) = 0$, meaning $5^0 = 1$: no factor of $5$ in the HCF. The LCM takes $\\max(0, 1) = 1$: one factor of $5$ required so the LCM is divisible by $180$.`}</p>
            </details>
          </div>
          <viz.MethodCompare C={C} />
          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>{`The prime factorisation method is not a trick. It follows directly from the definition of divisibility. A number divides $a$ if its prime powers are all at most those in $a$'s factorisation. The HCF is the largest such number dividing both, so it takes the minimum at each prime. The LCM is the smallest number divisible by both, so it takes the maximum.`}</p>
          </div>
        </>,

        // Section 5: Relatively Prime Numbers
        <>
          <h2>Relatively Prime (Coprime) Numbers</h2>
          <p>{`Two numbers are relatively prime (or coprime) if $\\gcd(a, b) = 1$. They share no prime factor. For example, $\\gcd(5, 12) = 1$ because $5 = 5$ and $12 = 2^2 \\times 3$ share no prime.`}</p>
          <p>{`When to use this: coprimality is the condition behind fraction reduction. A fraction $\\tfrac{a}{b}$ sits in lowest terms exactly when $a$ and $b$ are coprime. So every time you simplify a fraction fully, you make the top and bottom coprime.`}</p>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>{`If $\\gcd(a, b) = 1$, what is $\\text{lcm}(a, b)$? Think about the product rule.`}</p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>{`$\\text{lcm}(a, b) = \\dfrac{a \\times b}{\\gcd(a, b)} = \\dfrac{a \\times b}{1} = a \\times b$. When two numbers are coprime, their LCM equals their product.`}</p>
            </details>
          </div>
          <div className="lrn-definition">
            <span className="lrn-definition-term">Coprime</span>
            <div className="lrn-definition-desc">
              <p>{`$a$ and $b$ are coprime if $\\gcd(a, b) = 1$. In this case $\\text{lcm}(a, b) = a \\times b$.`}</p>
            </div>
          </div>
          <viz.CoprimeVenn C={C} />
          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Coprime Pairs: gcd = 1</span>
              <p>{`$(5, 12)$, $(8, 9)$, $(7, 11)$. The LCM equals the product. No shared prime factor to "cancel." Fraction $\\tfrac{5}{12}$ is already in lowest terms.`}</p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Non-Coprime Pairs: gcd &gt; 1</span>
              <p>{`$(56, 96)$ with $\\gcd = 8$. The LCM is strictly less than the product. Shared primes reduce both. Fraction $\\tfrac{56}{96} = \\tfrac{7}{12}$ after dividing by $\\gcd = 8$.`}</p>
            </div>
          </div>
          <p>{`Proposition: if $d = \\gcd(a, b)$, then $\\gcd\\!\\left(\\tfrac{a}{d}, \\tfrac{b}{d}\\right) = 1$. In other words, dividing both numbers by their HCF makes them coprime.`}</p>
          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>{`Look at the prime factorisations. The HCF $d$ takes every shared prime at its minimum power. When you divide $a$ and $b$ by $d$, you strip out exactly those shared powers.`}</p>
            <p>{`So $\\tfrac{a}{d}$ and $\\tfrac{b}{d}$ have no prime left in common. With no shared prime, their HCF is $1$. They are coprime.`}</p>
          </div>
          <h3>Fractions in Lowest Terms</h3>
          <p>{`A fraction $\\tfrac{m}{n}$ is in lowest terms when $\\gcd(m, n) = 1$. To reduce $\\tfrac{81}{54}$: $\\gcd(81, 54) = 27$ (since $81 = 3^4$ and $54 = 2 \\times 3^3$, so $\\gcd = 3^3 = 27$). Then $\\tfrac{81}{54} = \\tfrac{3}{2}$.`}</p>
          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>{`Why is $\\tfrac{3}{2}$ the unique fraction in lowest terms equal to $\\tfrac{81}{54}$? What would happen if $\\tfrac{3}{2}$ were not fully reduced?`}</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>{`$\\gcd(3, 2) = 1$, so $\\tfrac{3}{2}$ is already in lowest terms. No further reduction is possible. If a common factor remained, we could divide both numerator and denominator by it, contradicting that $\\gcd = 1$.`}</p>
            </details>
          </div>
        </>,

        // Section 6: The Euclidean Algorithm
        <>
          <h2>The Euclidean Algorithm</h2>
          <p>{`The Euclidean Algorithm computes $\\gcd(a, b)$ without prime factorisation. It uses repeated division with remainder. The key step is:`}</p>
          <div className="lrn-eq lrn-eq-hero">{`$$\\gcd(a, b) = \\gcd(b, r) \\quad \\text{where } a = q \\cdot b + r$$`}</div>
          <p>{`Every common divisor of $a$ and $b$ is also a common divisor of $b$ and $r$, and vice versa. So the set of common divisors does not change. You repeat until the remainder is zero.`}</p>
          <p>{`When to use this: use the Euclidean Algorithm when the numbers are large or their prime decompositions are unknown. It needs only division, which any calculator can do.`}</p>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>{`Before working through the example below, predict how many division steps it takes to find $\\gcd(1560, 676)$. Is it more or fewer steps than listing all divisors?`}</p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>{`It takes three division steps. Listing divisors of $1560$ alone would require checking many factors. The Euclidean Algorithm is dramatically faster for large numbers.`}</p>
            </details>
          </div>
          <viz.EuclidSteps C={C} />
          <div className="lrn-faded">
            <div className="lrn-faded-phase">
              <span className="lrn-faded-label">COMPLETE EXAMPLE</span>
              <p>{`Find $\\gcd(1560, 676)$ using the Euclidean Algorithm.`}</p>
              <ol className="lrn-list">
                <li>{`$1560 = 2 \\times 676 + 208$, so $\\gcd(1560, 676) = \\gcd(676, 208)$.`}</li>
                <li>{`$676 = 3 \\times 208 + 52$, so $\\gcd(676, 208) = \\gcd(208, 52)$.`}</li>
                <li>{`$208 = 4 \\times 52 + 0$. Remainder is $0$, so $\\gcd(208, 52) = 52$.`}</li>
              </ol>
              <p>{`Answer: $\\gcd(1560, 676) = 52$. Once you have the HCF, the product rule gives the LCM: $\\text{lcm}(1560, 676) = \\dfrac{1560 \\times 676}{52} = 20{,}280$.`}</p>
            </div>
            <div className="lrn-faded-phase lrn-faded-partial">
              <span className="lrn-faded-label">YOUR TURN: PARTIAL</span>
              <p>{`Find $\\gcd(665, 7353)$. The first step: $7353 = 11 \\times 665 + 38$, so $\\gcd(7353, 665) = \\gcd(665, 38)$.`}</p>
              <ol className="lrn-list">
                <li>{`Divide $665$ by $38$ and find the remainder $r$.`}</li>
                <li>{`Set up the next step: $\\gcd(665, 38) = \\gcd(38, r)$.`}</li>
                <li>{`Continue until the remainder is $0$.`}</li>
              </ol>
            </div>
            <div className="lrn-faded-phase">
              <span className="lrn-faded-label">INDEPENDENT PRACTICE</span>
              <p>{`Find $\\gcd(48, 180)$ using the Euclidean Algorithm from scratch. Show each division step.`}</p>
            </div>
          </div>
          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>{`In step 1 of the algorithm, $1560 = 2 \\times 676 + 208$. Why does knowing the common divisors of $1560$ and $676$ coincide exactly with the common divisors of $676$ and $208$?`}</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>{`Suppose $d \\mid 1560$ and $d \\mid 676$. Then $d \\mid (1560 - 2 \\times 676) = 208$. Conversely, if $d \\mid 676$ and $d \\mid 208$, then $d \\mid (2 \\times 676 + 208) = 1560$. A number that divides two values also divides their sum and their difference, so the divisibility shifts cleanly.`}</p>
            </details>
          </div>
          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>{`The Euclidean Algorithm terminates because each remainder $r$ satisfies $0 \\le r < b$. The sequence $a, b, r_1, r_2, \\ldots$ is strictly decreasing (as long as remainders are positive). A strictly decreasing sequence of non-negative integers must reach zero in finite steps.`}</p>
            <p>{`Two useful edge cases: $\\gcd(a, 0) = a$ for any $a > 0$, and $\\gcd(a, 1) = 1$ for every whole number $a$. The first terminates the algorithm; the second shows $1$ is coprime with everything.`}</p>
          </div>
          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Prime Factorisation for GCD</span>
              <p>{`Visual and reveals structure. Requires knowing the prime factorisations first. Hard for large numbers where factoring itself is difficult.`}</p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Euclidean Algorithm</span>
              <p>{`Only needs division. Efficient even for large numbers. Does not reveal the prime structure, just the GCD. The algorithm is over 2,300 years old and still used in cryptographic software today.`}</p>
            </div>
          </div>
          <p>{`You can now find the HCF of any two numbers using only division, no factoring needed. From there, the product rule turns the HCF straight into the LCM.`}</p>
        </>,

        // Section 7: Going Further
        <>
          <h2>Going Further</h2>
          <p>{`Here is one more fact you can take on trust for now. The HCF of two numbers can always be reached by adding and subtracting copies of those two numbers. For example, $\\gcd(12, 8) = 4$, and $12 - 8 = 4$.`}</p>
          <p>{`This is exactly why the Euclidean Algorithm works. Each division step replaces a number by a remainder, and that remainder is the first number minus copies of the second. So every step stays built from the two starting numbers, and the algorithm lands right on their HCF.`}</p>
          <p>{`You will meet the full method in a later course. For now, the idea is enough: the HCF is hiding inside simple sums and differences of the two numbers.`}</p>
        </>
      ]
    },

    practice: [
      // basic: list divisors
      {
        q: 'List all positive divisors of $60$.',
        a: 'Pair up: $1 \\times 60$, $2 \\times 30$, $3 \\times 20$, $4 \\times 15$, $5 \\times 12$, $6 \\times 10$. All divisors: $1, 2, 3, 4, 5, 6, 10, 12, 15, 20, 30, 60$. That is twelve in total. Pairs always multiply to $60$.'
      },
      // predict: LCM vs product
      {
        q: 'Predict: is $\\text{lcm}(4, 6)$ equal to $4 \\times 6 = 24$? Give the correct value and explain why it differs.',
        a: '$\\text{lcm}(4, 6) = 12$, not $24$. The product equals the LCM only when $\\gcd(a,b) = 1$. Here $\\gcd(4, 6) = 2$, so $\\text{lcm} = \\frac{4 \\times 6}{2} = 12$. Shared factors reduce the LCM below the product.'
      },
      // computation: HCF by listing
      {
        q: 'Find $\\gcd(48, 180)$ by listing all factors of each.',
        a: 'Factors of $48$: $1,2,3,4,6,8,12,16,24,48$. Factors of $180$: $1,2,3,4,5,6,9,10,12,15,18,20,30,36,45,60,90,180$. Common factors: $1,2,3,4,6,12$. Largest: $12$. So $\\gcd(48,180) = 12$.'
      },
      // transfer: scaling property
      {
        q: '$\\gcd(36, 45) = 9$. Without computing from scratch, find $\\gcd(36 \\times 2025, 45 \\times 2025)$.',
        a: 'By the scaling property, $\\gcd(k \\cdot a, k \\cdot b) = k \\cdot \\gcd(a, b)$. So $\\gcd(36 \\times 2025, 45 \\times 2025) = 2025 \\times 9 = 18{,}225$. No new computation needed.'
      },
      // computation: HCF by prime factorisation
      {
        q: 'Find $\\gcd(84, 105)$ using prime factorisation.',
        a: '$84 = 2^2 \\times 3 \\times 7$ and $105 = 3 \\times 5 \\times 7$. Common primes: $3$ and $7$. Minimum powers: $3^1$ and $7^1$. So $\\gcd(84, 105) = 3 \\times 7 = 21$.'
      },
      // elaborate: why min powers gives HCF
      {
        q: 'Explain from first principles why the HCF uses the minimum exponent at each prime.',
        a: 'A common divisor of $a$ and $b$ must divide both. Dividing $a = 2^3 \\times \\cdots$ means the divisor can use at most $2^3$ of the factor $2$. Dividing $b = 2^5 \\times \\cdots$ means at most $2^5$. To divide both, the divisor can use at most $2^{\\min(3,5)} = 2^3$. Taking the minimum at each prime gives the largest possible common divisor.'
      },
      // computation: LCM by prime factorisation
      {
        q: 'Find $\\text{lcm}(63, 105)$ using prime factorisation.',
        a: '$63 = 3^2 \\times 7$ and $105 = 3 \\times 5 \\times 7$. Primes involved: $3, 5, 7$. Max powers: $3^2$, $5^1$, $7^1$. So $\\text{lcm}(63, 105) = 9 \\times 5 \\times 7 = 315$.'
      },
      // predict: prime with coprime
      {
        q: 'If $p$ is prime, what is $\\text{lcm}(p, p^2)$?',
        a: '$p = p^1$ and $p^2 = p^2$. The LCM takes the maximum power: $p^2$. So $\\text{lcm}(p, p^2) = p^2$. This makes sense: $p^2$ is already a multiple of $p$.'
      },
      // computation: product rule: fresh pair
      {
        q: 'Verify: $\\gcd(24, 36) \\times \\text{lcm}(24, 36) = 24 \\times 36$.',
        a: '$24 = 2^3 \\times 3$ and $36 = 2^2 \\times 3^2$. $\\gcd = 2^2 \\times 3 = 12$ and $\\text{lcm} = 2^3 \\times 3^2 = 72$. So $12 \\times 72 = 864$. Also $24 \\times 36 = 864$. They match. The product rule holds.'
      },
      // transfer: use product rule to find LCM
      {
        q: 'Given $\\gcd(168, 180) = 12$, find $\\text{lcm}(168, 180)$ using the product rule.',
        a: '$\\text{lcm}(168, 180) = \\dfrac{168 \\times 180}{\\gcd(168, 180)} = \\dfrac{30{,}240}{12} = 2{,}520$. The product rule converts a known GCD directly into the LCM.'
      },
      // self-explain: Euclidean step
      {
        q: 'In the Euclidean Algorithm, $1560 = 2 \\times 676 + 208$. Explain why $\\gcd(1560, 676) = \\gcd(676, 208)$.',
        a: 'Any common divisor $d$ of $1560$ and $676$ also divides $1560 - 2 \\times 676 = 208$, so $d$ divides $676$ and $208$. Conversely, if $d$ divides $676$ and $208$, then $d$ divides $2 \\times 676 + 208 = 1560$. The sets of common divisors are identical, so the greatest is the same.'
      },
      // computation: Euclidean Algorithm
      {
        q: 'Use the Euclidean Algorithm to find $\\gcd(450, 3150)$.',
        a: '$3150 = 7 \\times 450 + 0$. Remainder is $0$ after one step. So $\\gcd(450, 3150) = 450$. This tells us $450$ divides $3150$, confirmed by $3150 = 7 \\times 450$.'
      },
      // elaborate: GCD and fractions
      {
        q: 'Reduce $\\tfrac{81}{54}$ to lowest terms. Explain the role of the GCD.',
        a: '$81 = 3^4$ and $54 = 2 \\times 3^3$. So $\\gcd(81, 54) = 3^3 = 27$. Divide: $\\tfrac{81}{54} = \\tfrac{81 \\div 27}{54 \\div 27} = \\tfrac{3}{2}$. The GCD tells you the largest factor both share, so dividing by it reduces the fraction in a single step.'
      },
      // predict: coprime LCM
      {
        q: 'If $\\gcd(a, b) = 1$, what is $\\text{lcm}(a, b)$? Prove it from the product rule.',
        a: '$\\text{lcm}(a, b) = \\dfrac{a \\times b}{\\gcd(a, b)} = \\dfrac{a \\times b}{1} = a \\times b$. When two numbers are coprime, no prime factor is shared. The LCM must include all primes from both, so it equals the full product.'
      },
      // computation: three-number HCF
      {
        q: 'Find $\\gcd(12, 18, 24)$ using prime factorisation.',
        a: '$12 = 2^2 \\times 3$, $18 = 2 \\times 3^2$, $24 = 2^3 \\times 3$. Common primes: $2$ and $3$. Min powers: $2^1$ and $3^1$. So $\\gcd(12, 18, 24) = 2 \\times 3 = 6$.'
      },
      // transfer: two buses problem
      {
        q: 'Bus A departs every $24$ minutes. Bus B departs every $108$ minutes. They both depart at noon. When is the next time they depart together?',
        a: '$\\text{lcm}(24, 108)$: $24 = 2^3 \\times 3$ and $108 = 2^2 \\times 3^3$. Max powers: $2^3 \\times 3^3 = 8 \\times 27 = 216$ minutes $= 3$ hours $36$ minutes. Next joint departure: $3:36$ pm.'
      },
      // computation: Euclidean Algorithm
      {
        q: 'Use the Euclidean Algorithm to find $\\gcd(884, 374)$.',
        a: '$884 = 2 \\times 374 + 136$, so $\\gcd(884, 374) = \\gcd(374, 136)$. Then $374 = 2 \\times 136 + 102$, so $\\gcd(374, 136) = \\gcd(136, 102)$. Then $136 = 1 \\times 102 + 34$, so $\\gcd(136, 102) = \\gcd(102, 34)$. Then $102 = 3 \\times 34 + 0$, so the answer is $34$. So $\\gcd(884, 374) = 34$.'
      },
      // error-detection: wrong HCF
      {
        q: 'A student claims $\\gcd(56, 96) = 4$ because "both are divisible by $4$." Find the error.',
        a: 'The claim that $4 \\mid 56$ and $4 \\mid 96$ is correct. But the HCF is the greatest common divisor, not just any common divisor. $8 \\mid 56$ (since $56 = 8 \\times 7$) and $8 \\mid 96$ (since $96 = 8 \\times 12$). And no number larger than $8$ divides both. So $\\gcd(56, 96) = 8$, not $4$.'
      },
      // compute: LCM(12,18,24)
      {
        q: 'Find $\\text{lcm}(12, 18, 24)$.',
        a: '$12 = 2^2 \\times 3$, $18 = 2 \\times 3^2$, $24 = 2^3 \\times 3$. Max powers: $2^3$ and $3^2$. So $\\text{lcm} = 8 \\times 9 = 72$. Check: $72 = 6 \\times 12 = 4 \\times 18 = 3 \\times 24$. ✓'
      },
      // elaborate: divisor of GCD via primes
      {
        q: 'If $k$ is a common divisor of $a$ and $b$, explain why $k$ divides $\\gcd(a, b)$.',
        a: 'Look at prime factorisations. Since $k$ divides both $a$ and $b$, each prime in $k$ uses at most the power in $a$ and at most the power in $b$. So each prime in $k$ uses at most the minimum of those two powers. The HCF is built from exactly those minimum powers. So every prime power in $k$ also fits inside $\\gcd(a, b)$, which means $k$ divides it.'
      },
      // elaborate: LCM and fraction addition
      {
        q: 'Why does taking the LCM of denominators sometimes simplify fraction addition more than taking the product?',
        a: 'The product of denominators always works as a common denominator, but may introduce large numbers. The LCM is the smallest common denominator, keeping numerators smaller and arithmetic simpler. Example: $\\tfrac{1}{24} + \\tfrac{1}{108}$. LCM is $216$; product is $2592$. Using $216$ keeps numbers manageable.'
      },
      // predict: scaling LCM
      {
        q: '$\\text{lcm}(36, 45) = 180$. Find $\\text{lcm}(36 \\times k, 45 \\times k)$ for any positive integer $k$.',
        a: 'By the scaling property, $\\text{lcm}(k \\cdot 36, k \\cdot 45) = k \\cdot \\text{lcm}(36, 45) = 180k$. The LCM scales linearly with $k$. For $k = 2025$: $\\text{lcm} = 180 \\times 2025 = 364{,}500$.'
      },
      // computation: Euclidean on 63 and 105
      {
        q: 'Use the Euclidean Algorithm to find $\\gcd(63, 105)$.',
        a: '$105 = 1 \\times 63 + 42$, so $\\gcd(105, 63) = \\gcd(63, 42)$. Then $63 = 1 \\times 42 + 21$, so $\\gcd(63, 42) = \\gcd(42, 21)$. Then $42 = 2 \\times 21 + 0$, so $\\gcd(42, 21) = 21$. Answer: $\\gcd(63, 105) = 21$.'
      },
      // self-explain: LCM as smallest
      {
        q: 'Why is the LCM the smallest positive common multiple, not just any common multiple?',
        a: 'Any common multiple of $a$ and $b$ must be divisible by every prime power in both factorisations. The smallest such number takes the exact maximum power at each prime, no extra factors. Any smaller number would miss at least one required prime power and fail to be divisible by $a$ or $b$.'
      },
      // error-detection: LCM of primes
      {
        q: 'A student claims $\\text{lcm}(p, p^2) = p^3$ for a prime $p$. Find the error.',
        a: 'Wrong. $\\text{lcm}(p, p^2)$ takes the maximum power of $p$: that is $\\max(1, 2) = 2$, giving $p^2$, not $p^3$. The student added exponents instead of taking the maximum. Also verifiable: $p^2$ is already a multiple of both $p$ and $p^2$, so no need to go higher.'
      },
      // elaborate: Euclidean Algorithm's age
      {
        q: 'The Euclidean Algorithm was described around 300 BC. Explain why it is still used in modern cryptographic software.',
        a: 'The algorithm computes $\\gcd(a, b)$ using only division, no factoring required. Factoring large numbers is far too slow to be practical. The Euclidean Algorithm needs only a few steps, even for very long numbers. Modern security software computes GCDs of huge numbers all the time. The Euclidean Algorithm makes this fast.'
      },
      // transfer: apply GCD to real scenario
      {
        q: 'You have $30$ red tiles and $42$ blue tiles. You want to arrange them in identical groups, each with the same mix of red and blue, with no tiles left over. What is the maximum number of groups you can make?',
        a: 'The maximum number of groups is $\\gcd(30, 42)$. Using prime factorisation: $30 = 2 \\times 3 \\times 5$ and $42 = 2 \\times 3 \\times 7$. Common primes: $2$ and $3$. $\\gcd = 2 \\times 3 = 6$. So you can make $6$ groups, each with $5$ red and $7$ blue tiles.'
      },
      // compute: GCD of large numbers from factorisation
      {
        q: 'Given $26460 = 2^2 \\times 3^3 \\times 5 \\times 7^2$ and $15225 = 3 \\times 5^2 \\times 7 \\times 29$, find $\\gcd(26460, 15225)$ and $\\text{lcm}(26460, 15225)$. Verify the product rule.',
        a: 'Common primes: $3, 5, 7$. Min powers: $3^1, 5^1, 7^1$. $\\gcd = 3 \\times 5 \\times 7 = 105$. Max powers: $2^2, 3^3, 5^2, 7^2, 29$. $\\text{lcm} = 4 \\times 27 \\times 25 \\times 49 \\times 29 = 3{,}836{,}700$. Check product rule: $\\gcd \\times \\text{lcm} = 105 \\times 3{,}836{,}700 = 402{,}853{,}500 = 26{,}460 \\times 15{,}225$. ✓'
      },
      // computation: Euclidean Algorithm
      {
        q: 'Use the Euclidean Algorithm to find $\\gcd(25, 9)$.',
        a: '$25 = 2 \\times 9 + 7$, so $\\gcd(25, 9) = \\gcd(9, 7)$. Then $9 = 1 \\times 7 + 2$, so $\\gcd(9, 7) = \\gcd(7, 2)$. Then $7 = 3 \\times 2 + 1$, so $\\gcd(7, 2) = \\gcd(2, 1)$. Then $2 = 2 \\times 1 + 0$, so the answer is $1$. So $\\gcd(25, 9) = 1$: the two numbers are coprime.'
      },
      // self-explain: coprime after dividing by GCD
      {
        q: 'If $d = \\gcd(a, b)$, explain why $\\gcd\\bigl(\\tfrac{a}{d}, \\tfrac{b}{d}\\bigr) = 1$.',
        a: "Write $a = d \\cdot a'$ and $b = d \\cdot b'$. Suppose $k$ divides both $a'$ and $b'$. Then $k \\cdot d$ divides both $a$ and $b$, so $k \\cdot d \\leq d$ (since $d$ is the GCD). This forces $k \\leq 1$, so $k = 1$. No common divisor larger than $1$ exists, confirming $\\gcd(a', b') = 1$."
      },
      // transfer: fraction addition via LCM
      {
        q: 'Add $\\dfrac{5}{24} + \\dfrac{7}{108}$ by finding $\\text{lcm}(24, 108)$ first.',
        a: '$24 = 2^3 \\times 3$ and $108 = 2^2 \\times 3^3$. Max powers: $2^3 \\times 3^3 = 8 \\times 27 = 216$. So $\\text{lcm} = 216$. Convert: $\\dfrac{5}{24} = \\dfrac{45}{216}$ and $\\dfrac{7}{108} = \\dfrac{14}{216}$. Sum: $\\dfrac{59}{216}$. Check $\\gcd(59, 216) = 1$ (59 is prime), so the fraction is already in lowest terms.'
      },
      // divisibility: transitive property
      {
        q: '$3 \\mid 12$ and $12 \\mid 60$. Explain why $3 \\mid 60$ without computing.',
        a: 'By the transitive property of divisibility: if $c \\mid b$ and $b \\mid a$, then $c \\mid a$. Here $12 = 3 \\times 4$ and $60 = 12 \\times 5$, so $60 = 3 \\times (4 \\times 5) = 3 \\times 20$. Since $20$ is a whole number, $3 \\mid 60$.'
      },
      // synthesis: full HCF + LCM + product rule check
      {
        q: 'Find $\\gcd(360, 756)$ and $\\text{lcm}(360, 756)$ using a power table, then verify the product rule.',
        a: '$360 = 2^3 \\times 3^2 \\times 5$ and $756 = 2^2 \\times 3^3 \\times 7$. Power table: prime $2$: min $2$, max $3$; prime $3$: min $2$, max $3$; prime $5$: min $0$, max $1$; prime $7$: min $0$, max $1$. $\\gcd = 2^2 \\times 3^2 = 36$. $\\text{lcm} = 2^3 \\times 3^3 \\times 5 \\times 7 = 8 \\times 27 \\times 35 = 7{,}560$. Check: $36 \\times 7{,}560 = 272{,}160$ and $360 \\times 756 = 272{,}160$. ✓'
      },
      // error-detection: min/max swap
      {
        q: 'A student computes $\\gcd(24, 36)$ by taking the maximum exponent at each prime: $24 = 2^3 \\times 3$ and $36 = 2^2 \\times 3^2$, giving "gcd" $= 2^3 \\times 3^2 = 72$. Find the error.',
        a: 'The student swapped the rules. HCF takes the minimum exponent, not the maximum. Min powers: $2^{\\min(3,2)} = 2^2 = 4$ and $3^{\\min(1,2)} = 3^1 = 3$. So $\\gcd(24, 36) = 4 \\times 3 = 12$. The student computed the LCM, not the HCF. Check: $12 \\mid 24$ and $12 \\mid 36$, but $72 \\nmid 24$.'
      }
    ],

    reference: {
      category: 'Quick Reference',
      title: 'HCF and LCM',
      sections: [
        <>
          <h2>Core Definitions</h2>
          <div className="lrn-definition">
            <span className="lrn-definition-term">Divisor / Factor</span>
            <div className="lrn-definition-desc">
              <p>{`$b \\mid a$ if $a = b \\times n$ for some integer $n$. When to use: asking "what goes into $a$?"`}</p>
            </div>
          </div>
          <div className="lrn-definition">
            <span className="lrn-definition-term">HCF / GCF / GCD</span>
            <div className="lrn-definition-desc">
              <p>{`$\\gcd(a, b)$ = largest positive integer dividing both $a$ and $b$. When to use: simplifying fractions, sharing evenly, reducing expressions.`}</p>
            </div>
          </div>
          <div className="lrn-definition">
            <span className="lrn-definition-term">LCM</span>
            <div className="lrn-definition-desc">
              <p>{`$\\text{lcm}(a, b)$ = smallest positive integer divisible by both $a$ and $b$. When to use: adding fractions, finding when two cycles align.`}</p>
            </div>
          </div>
          <div className="lrn-definition">
            <span className="lrn-definition-term">Coprime</span>
            <div className="lrn-definition-desc">
              <p>{`$\\gcd(a, b) = 1$. Then $\\text{lcm}(a, b) = a \\times b$. When to use: fractions already in lowest terms, testing if $\\tfrac{a}{b}$ is fully reduced.`}</p>
            </div>
          </div>

          <h2>Key Formulas</h2>
          <div className="lrn-eq lrn-eq-hero">{`$$\\text{HCF via prime factorisation: take MINIMUM exponent at each common prime}$$`}</div>
          <p>{`When to use: computing HCF when prime decompositions are known.`}</p>
          <div className="lrn-eq lrn-eq-hero">{`$$\\text{LCM via prime factorisation: take MAXIMUM exponent at each prime (all primes)}$$`}</div>
          <p>{`When to use: computing LCM when prime decompositions are known.`}</p>
          <div className="lrn-eq lrn-eq-hero">{`$$a \\times b = \\gcd(a, b) \\times \\text{lcm}(a, b)$$`}</div>
          <p>{`When to use: find LCM quickly from GCD, or verify answers. Rearranged: $\\text{lcm}(a,b) = \\dfrac{a \\times b}{\\gcd(a,b)}$.`}</p>
          <div className="lrn-eq lrn-eq-hero">{`$$\\gcd(na, nb) = n \\cdot \\gcd(a, b) \\quad \\text{lcm}(na, nb) = n \\cdot \\text{lcm}(a, b)$$`}</div>
          <p>{`When to use: scaling both numbers by $n$ scales both HCF and LCM by $n$.`}</p>
          <div className="lrn-eq lrn-eq-hero">{`$$\\gcd(a, b) = \\gcd(b, r) \\quad \\text{where } a = q \\cdot b + r \\quad\\text{(Euclidean step)}$$`}</div>
          <p>{`When to use: Euclidean Algorithm. Repeat until $r = 0$.`}</p>
          <div className="lrn-eq lrn-eq-hero">{`$$\\gcd(a, b) = x \\cdot a + y \\cdot b \\quad \\text{for some whole numbers } x, y \\text{ (each can be negative)}$$`}</div>
          <p>{`Going further: the HCF can always be written by adding and subtracting copies of the two numbers. You meet the full method in a later course.`}</p>
          <div className="lrn-eq">{`$$\\gcd(a, 0) = a \\quad \\gcd(a, 1) = 1 \\quad\\text{(edge cases)}$$`}</div>
          <p>{`The first terminates the Euclidean Algorithm. The second shows $1$ is coprime with every integer.`}</p>

          <h2>Method Summary Table</h2>
          <table
            style={{ width: '100%', borderCollapse: 'collapse', fontFamily: "'D-DIN', monospace" }}
          >
            <thead>
              <tr>
                {['Goal', 'Method', 'Best When'].map((h, i) => (
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
                ['HCF', 'List common factors', 'Small numbers, few factors'],
                ['HCF', 'Prime factorisation (min powers)', 'Medium numbers, factorisation known'],
                ['HCF', 'Euclidean Algorithm', 'Large numbers, factorisation unknown'],
                ['LCM', 'List common multiples', 'Small LCM, few steps needed'],
                ['LCM', 'Prime factorisation (max powers)', 'Medium numbers, factorisation known'],
                ['LCM', 'Product rule: lcm = a·b / gcd', 'GCF already known']
              ].map(([goal, method, when], i) => (
                <tr key={i}>
                  {[goal, method, when].map((cell, j) => (
                    <td
                      key={j}
                      style={{
                        padding: '6px 10px',
                        borderBottom: '1px solid var(--border-subtle)',
                        fontSize: FONT_LABEL
                      }}
                    >
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>

          <h2>Prime Factorisation Power Table</h2>
          <p>{`For $\\gcd$ and $\\text{lcm}$ of $168 = 2^3 \\times 3 \\times 7$ and $180 = 2^2 \\times 3^2 \\times 5$:`}</p>
          <table
            style={{ width: '100%', borderCollapse: 'collapse', fontFamily: "'D-DIN', monospace" }}
          >
            <thead>
              <tr>
                {['Prime', 'Power in 168', 'Power in 180', 'min → HCF', 'max → LCM'].map((h, i) => (
                  <th
                    key={i}
                    style={{
                      textAlign: 'left',
                      padding: '6px 10px',
                      borderBottom: '1px solid var(--border-default)',
                      fontSize: FONT_LABEL,
                      letterSpacing: '0.08em',
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
                ['2', '3', '2', '2 → 4', '3 → 8'],
                ['3', '1', '2', '1 → 3', '2 → 9'],
                ['5', '0', '1', '0 → 1', '1 → 5'],
                ['7', '1', '0', '0 → 1', '1 → 7']
              ].map((row, i) => (
                <tr key={i}>
                  {row.map((cell, j) => (
                    <td
                      key={j}
                      style={{
                        padding: '6px 10px',
                        borderBottom: '1px solid var(--border-subtle)',
                        fontSize: FONT_LABEL
                      }}
                    >
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
          <p>{`HCF $= 4 \\times 3 = 12$. LCM $= 8 \\times 9 \\times 5 \\times 7 = 2{,}520$. Check: $168 \\times 180 = 30{,}240 = 12 \\times 2{,}520$. ✓`}</p>

          <h2>Euclidean Algorithm: Worked Example</h2>
          <div className="lrn-proof">
            <span className="lrn-proof-label">ALGORITHM</span>
            <p>{`Find $\\gcd(1560, 676)$:`}</p>
            <ol className="lrn-list">
              <li>{`$1560 = 2 \\times 676 + 208$ → $\\gcd(1560, 676) = \\gcd(676, 208)$`}</li>
              <li>{`$676 = 3 \\times 208 + 52$ → $\\gcd(676, 208) = \\gcd(208, 52)$`}</li>
              <li>{`$208 = 4 \\times 52 + 0$ → $\\gcd(208, 52) = 52$`}</li>
            </ol>
            <p>{`Answer: $\\gcd(1560, 676) = 52$.`}</p>
          </div>
        </>
      ]
    },

    customCss: null
  }
  return config
}

export default function HcfAndLcm() {
  const config = useConfig()
  return <LearningTemplate config={config} />
}
