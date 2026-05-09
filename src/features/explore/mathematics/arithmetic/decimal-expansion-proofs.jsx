import { LearningTemplate } from '../../../../components/learning/learning-template'
import { useVizColors } from '../../../../hooks/use-viz-colors'


import {
  FactorTreeVis, RepeatingDecimalVis, PigeonholeVis
} from '../../../../components/viz/math-viz/modules'

const config = {
  cssPrefix: 'dep',
  source: 'Understanding Numbers in Elementary School Mathematics - Hung-Hsi Wu',
  documentTitle: 'Decimal Expansion Proofs - AETHER',
  learning: {
    category: 'Arithmetic',
    title: 'Decimal Expansion Proofs',
    subtitle:
      'Formal proofs that every fraction is a finite or repeating decimal. The finite case and the repeating case.',
    sections: []
  },
  practice: [],
  reference: {
    category: 'Quick Reference',
    title: 'Decimal Expansion Proofs',
    sections: []
  },
  customCss: `
    .MafsView { --mafs-bg: transparent; }
  `
}

function DecimalExpansionProofsContent() {
  const C = useVizColors()

  config.learning.sections = [
    /* ════════════════════════════════════════════════════════════════════════
     SECTION 1: PROOF OF THE FINITE CASE (Module 42.2)
     ════════════════════════════════════════════════════════════════════════ */
    <>
      <h2>Proof of the Finite Case</h2>

      <div className="lrn-predict">
        <span className="lrn-predict-label">PREDICT</span>
        <p>{`If $m/n$ is a fraction where $n = 2^k$, how could you turn it into a fraction with a power-of-10 denominator?`}</p>
        <details className="lrn-predict-reveal">
          <summary>Check your thinking</summary>
          <p>{`Multiply numerator and denominator by $5^k$. Then $m/2^k = (m \\times 5^k)/(2^k \\times 5^k) = (m \\times 5^k)/10^k$. Now it is a finite decimal.`}</p>
        </details>
      </div>

      <p>
        <strong>When to use this:</strong>{' '}
        {`Use this proof strategy to show that a fraction with denominator $2^a \\cdot 5^b$ terminates. Supply the missing factors of 2 or 5 to build a power-of-10 denominator.`}
      </p>

      <h3>The Strategy</h3>
      <p>{`We need to show that if $n = 2^a \\cdot 5^b$, then $m/n$ is a finite decimal.`}</p>
      <p>{`Consider first $n = 2^k$. The case $n = 5^l$ is symmetric, and the general case combines both.`}</p>

      <FactorTreeVis C={C} />

      <h3>The Proof</h3>
      <p>{`Start with $m/2^k$. Perform long division of $m \\times 10^k$ by $2^k$.`}</p>
      <div className="lrn-eq">{`$$m \\times 10^k = q \\cdot 2^k + r, \\quad 0 \\leq r < 2^k$$`}</div>
      <p>{`But $10^k = 2^k \\times 5^k$, so $2^k$ divides $m \\times 10^k$. This means $r = 0$.`}</p>
      <div className="lrn-eq lrn-eq-display">{`$$\\frac{m}{2^k} = \\frac{m \\times 10^k}{2^k} \\times \\frac{1}{10^k} = \\frac{q}{10^k}$$`}</div>
      <p>{`Since $q$ is a whole number, $\\frac{q}{10^k}$ is a finite decimal.`}</p>

      <div className="lrn-elaborate">
        <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
        <p>{`The critical step: $2^k$ divides $m \\times 10^k$ because $10^k$ already contains $2^k$ as a factor. So dividing $m \\times 10^k$ by $2^k$ leaves no remainder. This is why the denominator must contain only 2s and 5s. They are the prime factors of 10.`}</p>
      </div>

      <h3>Worked Example: 21/8</h3>
      <p>{`$8 = 2^3$, so $k = 3$. Compute $21 \\times 10^3 / 2^3 = 21000 / 8 = 2625$.`}</p>
      <div className="lrn-eq">{`$$\\frac{21}{8} = \\frac{2625}{10^3} = 2.625$$`}</div>
      <p>You can verify: 2.625 x 8 = 21.</p>

      <div className="lrn-self-explain">
        <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
        <p>{`Why does the remainder $r$ equal 0 when dividing $m \\times 10^k$ by $2^k$?`}</p>
        <details className="lrn-self-explain-reveal">
          <summary>Expert explanation</summary>
          <p>{`$10^k = (2 \\times 5)^k = 2^k \\times 5^k$. So $m \\times 10^k = m \\times 2^k \\times 5^k$. The factor $2^k$ divides this product exactly, leaving quotient $m \\times 5^k$ and remainder 0.`}</p>
        </details>
      </div>

      <h3>{`The Symmetric Case: Denominator $5^b$`}</h3>
      <p>{`If $n = 5^b$, multiply top and bottom by $2^b$. Then $m/5^b = (m \\times 2^b)/(5^b \\times 2^b) = (m \\times 2^b)/10^b$.`}</p>
      <div className="lrn-eq">{`$$\\frac{m}{5^b} = \\frac{m \\times 2^b}{10^b}$$`}</div>
      <p>The logic is the same. Supply the missing factor to reach a power of 10.</p>

      <div className="lrn-faded">
        <div className="lrn-faded-phase">
          <span className="lrn-faded-label">COMPLETE EXAMPLE</span>
          <p>{`Show 7/125 is a finite decimal. $125 = 5^3$. Multiply: $7/5^3 = (7 \\times 2^3)/(5^3 \\times 2^3) = 56/10^3 = 0.056$.`}</p>
        </div>
        <div className="lrn-faded-phase">
          <span className="lrn-faded-label">YOUR TURN: PARTIAL</span>
          <p>{`Show $3/40$ is a finite decimal. Note: $40 = 2^3 \\times 5$.`}</p>
          <ol className="lrn-list">
            <li>{`Supply the missing factors: $3/40 = (3 \\times \\rule{1cm}{0.5pt})/(40 \\times \\rule{1cm}{0.5pt})$`}</li>
            <li>{`Write the result: $\\rule{1cm}{0.5pt}/10^{\\rule{0.5cm}{0.5pt}}$`}</li>
          </ol>
        </div>
        <div className="lrn-faded-phase">
          <span className="lrn-faded-label">INDEPENDENT PRACTICE</span>
          <p>{`Show 11/250 is a finite decimal. Factor 250. Supply the missing factors. Write the result.`}</p>
        </div>
      </div>
    </>,

    /* ════════════════════════════════════════════════════════════════════════
     SECTION 2: PROOF OF THE REPEATING CASE (Module 42.3)
     ════════════════════════════════════════════════════════════════════════ */
    <>
      <h2>Proof of the Repeating Case</h2>

      <div className="lrn-predict">
        <span className="lrn-predict-label">PREDICT</span>
        <p>
          When dividing by 7, you get remainders between 0 and 6. There are only 7 possible
          remainders. After how many steps must a remainder repeat?
        </p>
        <details className="lrn-predict-reveal">
          <summary>Check your thinking</summary>
          <p>
            After at most 7 steps (actually 6 if the decimal does not terminate). With 7 possible
            remainders and the decimal not ending, the pigeonhole principle says among the first 7
            nonzero remainders, two must match.
          </p>
        </details>
      </div>

      <p>
        <strong>When to use this:</strong> Use this proof to explain why every non-terminating
        fraction gives a repeating decimal. The pigeonhole principle is the key: finitely many
        remainders guarantee eventual repetition.
      </p>

      <h3>{`The Proof for $\\tfrac{3}{7}$`}</h3>
      <p>{`Define the sequence: for each $n$, let $q_n$ be the quotient of $3 \\times 10^n \\div 7$, and let $s_n = q_n / 10^n$.`}</p>
      <div className="lrn-eq">{`$$s_n = \\frac{q_n}{10^n}, \\quad \\text{where } q_n = \\text{quotient of } 3 \\times 10^n \\div 7$$`}</div>

      <p>Compute the first few terms.</p>
      <div className="lrn-eq">{`$$3 \\times 10^4 = 30000 = 4285 \\times 7 + 5 \\quad \\Rightarrow \\quad s_4 = 0.4285$$`}</div>
      <div className="lrn-eq">{`$$3 \\times 10^5 = 300000 = 42857 \\times 7 + 1 \\quad \\Rightarrow \\quad s_5 = 0.42857$$`}</div>

      <h3>Why s = 3/7</h3>
      <p>From the division-with-remainder equation for each n:</p>
      <div className="lrn-eq">{`$$3 \\times 10^n = q_n \\times 7 + r_n, \\quad 0 \\leq r_n < 7$$`}</div>
      <p>{`Divide everything by $7 \\times 10^n$.`}</p>
      <div className="lrn-eq lrn-eq-display">{`$$0 \\leq \\frac{3}{7} - s_n < \\frac{1}{10^n}$$`}</div>
      <p>{`As $n$ grows, $\\frac{1}{10^n}$ approaches 0. So $s_n$ approaches exactly $\\frac{3}{7}$. The sequence of finite decimals gets arbitrarily close to $\\frac{3}{7}$.`}</p>

      <div className="lrn-elaborate">
        <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
        <p>{`The inequality says $s_n$ and $3/7$ differ by less than $1/10^n$. As $n$ grows, the gap shrinks to zero. Since the gap is always non-negative, $s_n$ approaches $3/7$ from below. The limit of the sequence is exactly $3/7$.`}</p>
      </div>

      <h3>Why the Digits Repeat: The Pigeonhole Principle</h3>
      <p>
        When dividing by 7, each step produces a remainder between 0 and 6. There are only 7
        possible remainders.
      </p>
      <p>If any remainder is 0, the decimal terminates (which does not happen for 3/7).</p>
      <p>
        So the remainders range from 1 to 6. That is only 6 possibilities. After 7 steps, you have 7
        remainders. By the pigeonhole principle, at least two must be the same.
      </p>

      <p>
        The pigeonhole principle says: if you place n+1 objects into n boxes, at least one box holds
        two objects. Here, n = 6 (possible nonzero remainders when dividing by 7). After 7 steps, a
        collision is unavoidable.
      </p>

      <PigeonholeVis C={C} />

      <div className="lrn-elaborate">
        <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
        <p>
          Once a remainder repeats, the entire sequence of digits repeats from that point. Each
          digit depends only on the current remainder. Same remainder gives same digit and same next
          remainder. The cycle continues forever.
        </p>
      </div>

      <RepeatingDecimalVis C={C} />

      <div className="lrn-eq lrn-eq-display">{`$$\\frac{3}{7} = 0.\\overline{428571}$$`}</div>
      <p>
        {`The period is 6. For any prime $p$, the period of $\\frac{m}{p}$ divides $p - 1$. Here, 6 divides $7 - 1 = 6$.`}
      </p>

      <div className="lrn-self-explain">
        <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
        <p>Why does the period of 3/7 divide 6 (which is 7 - 1)?</p>
        <details className="lrn-self-explain-reveal">
          <summary>Expert explanation</summary>
          <p>
            When dividing by 7, remainders cycle among 1 through 6. The cycle length must divide 6
            because any repeating pattern within a set of size 6 has length dividing 6. You can
            verify this directly for 3/7: after 6 steps, the remainder returns to 3.
          </p>
        </details>
      </div>

      <h3>Extended Example: 1/28</h3>
      <p>{`$28 = 2^2 \\times 7$. Since 7 appears, the decimal is not finite. It repeats.`}</p>
      <p>Compute via long division.</p>
      <div className="lrn-eq">{`$$1 \\times 10^3 = 1000 = 35 \\times 28 + 20 \\quad \\Rightarrow \\quad s_3 = 0.035$$`}</div>
      <div className="lrn-eq">{`$$1 \\times 10^9 = 1000000000 = 35714285 \\times 28 + 20 \\quad \\Rightarrow \\quad s_9 = 0.035714285$$`}</div>
      <p>Remainder 20 appears at step 3 and again at step 9. The cycle length is 9 - 3 = 6.</p>
      <div className="lrn-eq lrn-eq-display">{`$$\\frac{1}{28} = 0.03\\overline{571428}$$`}</div>
      <p>The non-repeating prefix "03" has length 2. The repeating block "571428" has period 6.</p>

      <div className="lrn-faded">
        <div className="lrn-faded-phase">
          <span className="lrn-faded-label">COMPLETE EXAMPLE</span>
          <p>
            {`Verify for $\\frac{1}{28}$: The non-repeating prefix length equals the power of 2 in the denominator. Here $28 = 2^2 \\times 7$. The prefix has 2 digits. The repeating part comes from the factor 7.`}
          </p>
        </div>
        <div className="lrn-faded-phase">
          <span className="lrn-faded-label">YOUR TURN: PARTIAL</span>
          <p>{`Find the decimal expansion of $1/12$. Note: $12 = 2^2 \\times 3$.`}</p>
          <ol className="lrn-list">
            <li>{`Predict the prefix length: $\\rule{1cm}{0.5pt}$`}</li>
            <li>{`Predict the period divides: $\\rule{1cm}{0.5pt}$`}</li>
            <li>Compute by long division to verify.</li>
          </ol>
        </div>
        <div className="lrn-faded-phase">
          <span className="lrn-faded-label">INDEPENDENT PRACTICE</span>
          <p>
            Find the decimal expansion of 5/42. Factor 42. Predict prefix length and period bound.
            Then verify by long division.
          </p>
        </div>
      </div>

      <h3>Period of Decimal Expansions</h3>
      <p>For a prime p in the denominator, the period of the repeating block divides p - 1.</p>
      <p>For 3/7, the period 6 divides 7 - 1 = 6.</p>
      <p>For 2/11, the period 2 divides 11 - 1 = 10.</p>
      <p>This follows from the structure of remainders in long division by a prime.</p>

      <div className="lrn-compare">
        <div className="lrn-compare-col">
          <span className="lrn-compare-title">Finite Decimals from Fractions</span>
          <p>{`Denominator = $2^a \\cdot 5^b$. Multiply by $10^k$ to clear. No remainders cycle.`}</p>
        </div>
        <div className="lrn-compare-col">
          <span className="lrn-compare-title">Repeating Decimals from Fractions</span>
          <p>
            Denominator has other prime factors. Pigeonhole forces remainder repetition. Cycle
            length divides p - 1.
          </p>
        </div>
      </div>
    </>
  ]

  // ═══════════════════════════════════════════
  // PRACTICE CARDS (interleaved)
  // ═══════════════════════════════════════════
  config.practice = [
    {
      q: 'Self-explain: In the proof that $\\frac{21}{8} = 2.625$, why does dividing 21000 by 8 leave remainder 0?',
      a: '$21000 = 21 \\times 10^3 = 21 \\times (2 \\times 5)^3 = 21 \\times 2^3 \\times 5^3$. Dividing by $8 = 2^3$ cancels the $2^3$ factor exactly: $21 \\times 5^3 = 21 \\times 125 = 2625$, remainder 0. The key: $10^3$ already contains $2^3$ as a factor.'
    },
    {
      q: 'Explain why the pigeonhole principle guarantees repeating decimals when dividing by n.',
      a: 'When dividing by n, remainders range from 0 to n-1. If remainder 0 appears, the decimal terminates. Otherwise, remainders range from 1 to n-1: only n-1 possibilities. After n steps, you have n remainders in n-1 boxes. Pigeonhole: at least two match. Once a remainder repeats, all later digits repeat.'
    },
    {
      q: 'Predict: Will $\\frac{1}{12}$ have a finite or repeating decimal? What prefix length and period?',
      a: '$12 = 2^2 \\times 3$. Since 3 appears, the decimal repeats. The non-repeating prefix has length 2 (from $2^2$). The period divides $3 - 1 = 2$. In fact, $\\frac{1}{12} = 0.08\\overline{3}$, with prefix length 2 and period 1.'
    },
    {
      q: 'If the decimal expansion of $\\frac{m}{p}$ ($p$ prime) has period 6, what can you say about $p$?',
      a: 'The period divides $p - 1$. So 6 divides $p - 1$, meaning $p - 1$ is a multiple of 6. Possible primes: $p = 7$ ($7-1=6$), $p = 13$ ($13-1=12$), $p = 19$ ($19-1=18$), $p = 31$ ($31-1=30$). The period structure comes from the cyclic pattern of remainders.'
    },
    {
      q: 'Transfer: A machinist needs to know if $\\frac{3}{16}$ of an inch (about 4.8 mm) is a finite decimal. Determine and compute it.',
      a: '$16 = 2^4$. Only prime factor is 2. So $\\frac{3}{16}$ is a finite decimal. Compute: $\\frac{3 \\times 10^4}{2^4} = \\frac{30000}{16} = 1875$. So $\\frac{3}{16} = \\frac{1875}{10^4} = 0.1875$. Verify: $0.1875 \\times 16 = 3$.'
    },
    {
      q: 'What is the decimal expansion of $\\frac{1}{28}$? Explain the structure.',
      a: '$\\frac{1}{28} = 0.03\\overline{571428}$. The prefix "03" has 2 digits because $28 = 2^2 \\times 7$ and the power of 2 is 2. The repeating block "571428" has period 6 because 6 divides $7 - 1 = 6$.'
    },
    {
      q: 'Elaborate: Why must the denominator have only factors 2 and 5 for a finite decimal?',
      a: 'A finite decimal equals $\\frac{m}{10^k}$ for some whole numbers $m$ and $k$. Since $10 = 2 \\times 5$, we get $10^k = 2^k \\times 5^k$. Any fraction equal to $\\frac{m}{10^k}$ can only have 2 and 5 in its denominator after simplification. A prime like 7 can never be canceled by any power of 10.'
    },
    {
      q: 'Predict: What is the maximum period length for the decimal expansion of $\\frac{m}{13}$?',
      a: '13 is prime. The period divides $13 - 1 = 12$. So the maximum period is 12. For example, $\\frac{1}{13} = 0.\\overline{076923}$ (period 6, which divides 12). Some fractions $\\frac{m}{13}$ may have period 12 if 10 is a primitive root mod 13.'
    },
    {
      q: 'Transfer: A machinist computes $\\frac{7}{125}$. Show the proof-based method to get the decimal.',
      a: '$125 = 5^3$. Supply missing factor: $\\frac{7}{5^3} = \\frac{7 \\times 2^3}{5^3 \\times 2^3} = \\frac{56}{10^3} = 0.056$. The proof guarantees this works because $10^3 = 2^3 \\times 5^3$, and the $5^3$ in the denominator absorbs into the $10^3$.'
    },
    {
      q: 'Elaborate: Why does the non-repeating prefix length equal $\\max(a, b)$ for denominator $2^a \\cdot 5^b \\cdot p$?',
      a: 'The factors $2^a$ and $5^b$ get absorbed after $\\max(a, b)$ long division steps (when you have multiplied by $10^{\\max(a,b)}$). After that, only the prime $p$ remains. From that point, remainders cycle through values mod $p$. The prefix handles the 2s and 5s; the cycle handles the other prime.'
    },
    {
      q: 'Show that $\\frac{3}{40}$ is a finite decimal using the proof strategy.',
      a: '$40 = 2^3 \\times 5$. We need $10^k$ in the denominator. Take $k = 3$: multiply by $\\frac{5^2}{5^2}$. Then $\\frac{3}{40} = \\frac{3 \\times 5^2}{2^3 \\times 5 \\times 5^2} = \\frac{75}{2^3 \\times 5^3} = \\frac{75}{1000} = 0.075$. The missing factor was $5^2$.'
    },
    {
      q: 'Elaborate: In the proof for $\\frac{3}{7}$, why does the inequality $0 \\leq \\frac{3}{7} - s_n < \\frac{1}{10^n}$ prove convergence?',
      a: 'The inequality squeezes the gap between $s_n$ and $\\frac{3}{7}$. The gap is non-negative ($s_n$ never overshoots $\\frac{3}{7}$). The gap is less than $\\frac{1}{10^n}$, which approaches 0. A quantity that is non-negative and less than a number approaching 0 must itself approach 0. So $s_n$ approaches $\\frac{3}{7}$ exactly.'
    }
  ]

  // ═══════════════════════════════════════════
  // REFERENCE MODE
  // ═══════════════════════════════════════════
  config.reference.sections = [
    <>
      <h2>Proof Formulas and Key Results</h2>

      <h3>Finite Case Proof</h3>
      <div className="lrn-eq lrn-eq-display">{`$$\\frac{m}{2^k} = \\frac{q}{10^k} \\text{ where } q = \\frac{m \\times 10^k}{2^k} = m \\times 5^k$$`}</div>
      <p>
        {`When to use: Proves a fraction terminates by constructing the finite decimal. Supply the missing factor of 5 (or 2) to reach $10^k$.`}
      </p>

      <h3>Repeating Case Proof</h3>
      <div className="lrn-eq lrn-eq-display">{`$$0 \\leq \\frac{m}{n} - s_n < \\frac{1}{10^n}$$`}</div>
      <p>
        {`When to use: Proves the long division sequence approaches $\\frac{m}{n}$. The error bound shrinks to zero.`}
      </p>

      <h3>Finite Decimal Criterion</h3>
      <div className="lrn-eq lrn-eq-display">{`$$\\frac{m}{n} \\text{ (lowest terms) is finite} \\iff n = 2^a \\cdot 5^b$$`}</div>
      <p>
        When to use: Quick test. Factor the denominator. Only 2s and 5s means finite. Anything else
        means repeating.
      </p>

      <h3>Period of Repeating Decimals</h3>
      <table className="lrn-table">
        <thead>
          <tr>
            <th>Property</th>
            <th>Rule</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Pigeonhole principle</td>
            <td>Among n+1 remainders mod n, at least two match</td>
          </tr>
          <tr>
            <td>Period bound (prime p)</td>
            <td>{`Period of $\\frac{m}{p}$ divides $p - 1$`}</td>
          </tr>
          <tr>
            <td>Non-repeating prefix length</td>
            <td>{`$\\max(a, b)$ where denominator has $2^a \\cdot 5^b$ factor`}</td>
          </tr>
        </tbody>
      </table>
    </>
  ]

  return <LearningTemplate config={config} />
}

export default function DecimalExpansionProofs() {
  return <DecimalExpansionProofsContent />
}
