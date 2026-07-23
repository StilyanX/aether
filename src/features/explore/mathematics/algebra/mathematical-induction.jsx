import { LearningTemplate } from '../../../../components/learning/learning-template'
import {
  OddSquaresViz,
  GaussPairingViz,
  PascalTriangleViz,
  ExpVsPolyViz,
  BernoulliViz,
  TrominoTilingViz
} from '../../../../components/viz'

function useConfig() {
  const config = {
    cssPrefix: 'min',
    documentTitle: 'Mathematical Induction - AETHER',
    learning: {
      groupTitle: 'Proof, Sets and Logic',
      category: 'Proof Technique',
      title: 'Mathematical Induction',
      subtitle:
        'A method for proving a statement true for every natural number, using only two checks: a starting case and a repeatable step.',
      sections: [
        <>
          <div className="lrn-header">
            <div>
              <h2>Why Guessing a Pattern Is Not Enough</h2>
            </div>
          </div>

          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>{`Suppose a formula gives the right answer for $n = 1, 2, 3, \\dots, 40$. Do you think it must be true for every natural number $n$?`}</p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>{`No. Checking many cases only tells you the formula worked for those cases. A formula can hold for the first 40 natural numbers and still fail at the 41st.`}</p>
            </details>
          </div>

          <h3>A Pattern That Seems to Hold</h3>
          <p>{`Add up the first few odd numbers and watch the totals: $1 = 1$, $1 + 3 = 4$, $1 + 3 + 5 = 9$, $1 + 3 + 5 + 7 = 16$, $1 + 3 + 5 + 7 + 9 = 25$.`}</p>
          <p>{`Each total is a perfect square: $1, 4, 9, 16, 25$. This suggests a guess: the sum of the first $n$ odd numbers always equals $n^2$.`}</p>
          <p>
            <strong>When to use this:</strong>{' '}
            {`Reach for a full proof whenever a claim must hold for every natural number. A pattern check on the cases you tested by hand is never enough.`}
          </p>

          <h3>A Pattern That Breaks</h3>
          <p>{`Here is a warning example. Take $p(n) = n^2 - n + 41$. Plug in $n = 1, 2, 3, \\dots, 8$ and every result is a prime number. A prime number has only two divisors, $1$ and itself. Keep going, and every result stays prime all the way up to $n = 40$.`}</p>
          <p>{`It looks like $p(n)$ is always prime. Then try $n = 41$: $p(41) = 41^2 - 41 + 41 = 41^2$. That number is $41$ times $41$, so it is not prime at all.`}</p>

          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>{`A statement about "every natural number" makes infinitely many claims at once. Checking 40 or 400 cases only confirms finitely many of them.`}</p>
            <p>{`No matter how many cases you check, infinitely many remain unchecked. You need an argument that covers all of them at once, not one more numerical check.`}</p>
          </div>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>{`Why does $p(41) = 41^2$ fail to be prime, when $p(1)$ through $p(40)$ all succeeded? What is special about plugging in $41$ specifically?`}</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>{`Write $p(n) = n^2 - n + 41 = n(n-1) + 41$. For $n = 41$, this becomes $41 \\cdot 40 + 41 = 41(40 + 1) = 41 \\cdot 41$. The $41$ inside the formula and the $41$ you plugged in collide and factor together. Nothing like that happens for smaller $n$, which is exactly why the pattern held for so long before breaking.`}</p>
            </details>
          </div>
        </>,

        <>
          <div className="lrn-header">
            <div>
              <h2>The Principle of Mathematical Induction</h2>
            </div>
          </div>

          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>{`You want to prove a statement $P(n)$ true for every natural number $n$, using only two checks instead of infinitely many. What might those two checks be?`}</p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>{`Check that the statement holds for the smallest number, and check that whenever it holds for one number, it also holds for the next number. Those two checks together cover every natural number.`}</p>
            </details>
          </div>

          <h3>Base Case, Induction Step, Inductive Hypothesis</h3>
          <p>{`Mathematical induction proves $P(n)$ true for every natural number $n$ starting at some fixed point (usually $0$ or $1$), using exactly two pieces.`}</p>
          <p>
            <strong>When to use this:</strong>{' '}
            {`Reach for induction whenever a claim is about "every natural number $n$," or "every $n$ from some starting point onward." Use it when a direct algebraic argument does not obviously work for an arbitrary $n$.`}
          </p>
          <ul className="lrn-list">
            <li>{`Base case: prove $P$ holds for the starting number.`}</li>
            <li>{`Inductive hypothesis: assume $P(n)$ is true for some arbitrary natural number $n$.`}</li>
            <li>{`Induction step: use that assumption to prove $P(n+1)$ is also true.`}</li>
          </ul>

          <div className="lrn-eq lrn-eq-hero">
            <span>{`$$\\text{If } P(0) \\text{ is true, and } P(n) \\Rightarrow P(n+1) \\text{ for every } n,$$`}</span>
            <span>{`$$\\text{then } P(n) \\text{ is true for every natural number } n.$$`}</span>
          </div>

          <h3>Why Two Checks Cover Every Number</h3>
          <p>{`The base case gives you $P(0)$. The induction step, applied once, turns $P(0)$ into $P(1)$. Applied again, it turns $P(1)$ into $P(2)$, and so on.`}</p>

          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>{`This is a chain: $P(0) \\Rightarrow P(1) \\Rightarrow P(2) \\Rightarrow P(3) \\Rightarrow \\cdots$. Because $P(0)$ is true and each arrow is valid, every statement in the chain is true.`}</p>
            <p>{`For any specific natural number $k$ you name, the chain reaches $P(k)$ after $k$ steps. Since $k$ was arbitrary, $P(n)$ holds for every natural number $n$.`}</p>
          </div>

          <div className="lrn-callout">
            <span className="lrn-callout-label">The Ladder Picture</span>
            <p>{`Picture an infinite ladder. The induction step is like knowing "if I can stand on rung $k$, I can climb to rung $k+1$." That knowledge alone does not get you onto the ladder.`}</p>
            <p>{`The base case is what puts your foot on the first rung. Without it, the induction step has nothing to start from. Without the induction step, the base case only gets you one rung up. Both parts are required, and neither one alone is enough.`}</p>
          </div>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>{`A proof correctly shows "if $P(n)$ is true, then $P(n+1)$ is true" but never checks a base case. Why does the whole proof fail, even though the step is logically correct?`}</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>{`The step only says one true statement leads to the next true statement. It never says any statement is actually true. Without a base case to anchor the chain, the step stays a conditional: an if-then statement with no confirmed starting point. The chain never establishes anything.`}</p>
            </details>
          </div>

          <div className="lrn-definition">
            <span className="lrn-definition-term">Blaise Pascal (1623 to 1662)</span>
            <div className="lrn-definition-desc">
              <p>{`Pascal was a French mathematician who described the principle of mathematical induction and studied the number triangle that bears his name.`}</p>
            </div>
          </div>
        </>,

        <>
          <div className="lrn-header">
            <div>
              <h2>Proving Sums by Induction</h2>
            </div>
          </div>

          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>{`In an induction proof of a sum formula, you assume the formula holds for $n$ terms. What is the natural next move to reach $n+1$ terms?`}</p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>{`Add the next term (the $(n+1)$th term) to both sides of the assumed formula, then simplify the right side to match the shape of the formula at $n+1$.`}</p>
            </details>
          </div>

          <h3>Summing the Powers of Two</h3>
          <p>{`Claim: for every natural number $n$, $2^0 + 2^1 + \\cdots + 2^n = 2^{n+1} - 1$.`}</p>
          <p>{`The right side $2^{n+1} - 1$ is a closed-form formula. It gives the total directly, without adding up every term.`}</p>
          <p>
            <strong>When to use this:</strong>{' '}
            {`Use this pattern whenever a proof asks you to establish a closed-form total for a sum that grows one term at a time as $n$ grows.`}
          </p>

          <div className="lrn-proof">
            <span className="lrn-proof-header">Proof</span>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">1.</span>
              <div className="lrn-proof-step-content">{`Base case, $n = 0$: the left side is $2^0 = 1$. The right side is $2^{0+1} - 1 = 2 - 1 = 1$. They match.`}</div>
            </div>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">2.</span>
              <div className="lrn-proof-step-content">{`Inductive hypothesis: assume $2^0 + 2^1 + \\cdots + 2^n = 2^{n+1} - 1$ for some natural number $n$.`}</div>
            </div>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">3.</span>
              <div className="lrn-proof-step-content">{`Add $2^{n+1}$ to both sides: $2^0 + \\cdots + 2^n + 2^{n+1} = (2^{n+1} - 1) + 2^{n+1}$.`}</div>
            </div>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">4.</span>
              <div className="lrn-proof-step-content">{`Simplify the right side: $2 \\cdot 2^{n+1} - 1 = 2^{n+2} - 1$. This is exactly the claim for $n + 1$.`}</div>
            </div>
            <div className="lrn-qed">Q.E.D.</div>
          </div>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>{`Step 3 adds $2^{n+1}$ to both sides rather than some other quantity. Why is $2^{n+1}$ the correct term to add?`}</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>{`The left side needs to grow from "sum up to $2^n$" into "sum up to $2^{n+1}$." The only honest way to do that is to add exactly the next term of the sum, which is $2^{n+1}$. Then add the same quantity to the right side, keeping the equation balanced.`}</p>
            </details>
          </div>

          <h3>Summing the Odd Numbers</h3>
          <p>{`Claim: for every natural number $n \\geq 1$, $1 + 3 + 5 + \\cdots + (2n - 1) = n^2$. This is the same guess from the pattern-check earlier, now proved for real.`}</p>

          <div className="lrn-graph">
            <OddSquaresViz />
          </div>

          <div className="lrn-proof">
            <span className="lrn-proof-header">Proof</span>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">1.</span>
              <div className="lrn-proof-step-content">{`Base case, $n = 1$: the left side is just $1$. The right side is $1^2 = 1$. They match.`}</div>
            </div>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">2.</span>
              <div className="lrn-proof-step-content">{`Inductive hypothesis: assume $1 + 3 + \\cdots + (2k - 1) = k^2$ for some natural number $k \\geq 1$.`}</div>
            </div>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">3.</span>
              <div className="lrn-proof-step-content">{`Group the first $k$ terms and add the next odd number, $2k + 1$: $\\bigl(1 + 3 + \\cdots + (2k-1)\\bigr) + (2k+1)$.`}</div>
            </div>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">4.</span>
              <div className="lrn-proof-step-content">{`By the inductive hypothesis, the grouped part equals $k^2$, so this becomes $k^2 + 2k + 1$.`}</div>
            </div>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">5.</span>
              <div className="lrn-proof-step-content">{`Factor: $k^2 + 2k + 1 = (k+1)^2$. This is exactly the claim for $n = k + 1$.`}</div>
            </div>
            <div className="lrn-qed">Q.E.D.</div>
          </div>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>{`Step 4 replaces the grouped sum with $k^2$ instead of computing it directly. Why is that substitution allowed here but not in a normal algebra problem?`}</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>{`The inductive hypothesis is not a guess. It is the assumption you are explicitly permitted to use inside the induction step. The whole point of the step is to show $P(k)$ leads to $P(k+1)$. Using $P(k)$ as a known fact is exactly what makes it an induction step rather than a fresh, unsupported computation.`}</p>
            </details>
          </div>

          <h3>{`Summing the First $n$ Natural Numbers`}</h3>
          <p>{`Claim: for every natural number $n \\geq 1$, $1 + 2 + 3 + \\cdots + n = \\frac{n(n+1)}{2}$.`}</p>

          <div className="lrn-graph">
            <GaussPairingViz />
          </div>

          <div className="lrn-proof">
            <span className="lrn-proof-header">Proof</span>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">1.</span>
              <div className="lrn-proof-step-content">{`Base case, $n = 1$: the left side is $1$. The right side is $\\frac{1(1+1)}{2} = \\frac{2}{2} = 1$. They match.`}</div>
            </div>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">2.</span>
              <div className="lrn-proof-step-content">{`Inductive hypothesis: assume $1 + 2 + \\cdots + k = \\frac{k(k+1)}{2}$ for some natural number $k \\geq 1$.`}</div>
            </div>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">3.</span>
              <div className="lrn-proof-step-content">{`Add $(k+1)$ to both sides: $1 + 2 + \\cdots + k + (k+1) = \\frac{k(k+1)}{2} + (k+1)$.`}</div>
            </div>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">4.</span>
              <div className="lrn-proof-step-content">{`Factor out $(k+1)$ on the right: $\\frac{k(k+1)}{2} + (k+1) = (k+1)\\left(\\frac{k}{2} + 1\\right) = (k+1) \\cdot \\frac{k+2}{2} = \\frac{(k+1)(k+2)}{2}$. This is exactly the claim for $n = k+1$.`}</div>
            </div>
            <div className="lrn-qed">Q.E.D.</div>
          </div>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>{`Step 4 factors $(k+1)$ out of both terms on the right side. Why is $(k+1)$ guaranteed to be a common factor there?`}</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>{`The first term $\\frac{k(k+1)}{2}$ already carries a factor of $(k+1)$, and the second term is $(k+1)$ itself. Because both pieces share that factor, you can pull it out front, which is exactly what collapses the sum into the clean form $\\frac{(k+1)(k+2)}{2}$ for the next case.`}</p>
            </details>
          </div>

          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>{`All three sum formulas above share the same shape of proof: check the smallest case, then show that adding one more term to the left side matches adding the corresponding growth to the right side.`}</p>
            <p>{`This is why sum formulas are one of the most natural places to use induction. Each formula is naturally built up one term at a time, and induction proves things one step at a time.`}</p>
          </div>
        </>,

        <>
          <div className="lrn-header">
            <div>
              <h2>Proving Divisibility Results</h2>
            </div>
          </div>

          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>{`To prove $3 \\mid (n^3 - n)$ for every natural number $n$, the induction step needs to show $3 \\mid \\bigl((n+1)^3 - (n+1)\\bigr)$. What tool would let you connect this new expression back to the old one, $n^3 - n$?`}</p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>{`Expand $(n+1)^3 - (n+1)$ with algebra, then reorganize it so that $n^3 - n$ appears as a piece of the result. The inductive hypothesis tells you that piece is divisible by 3.`}</p>
            </details>
          </div>

          <h3>{`Proving $3 \\mid (n^3 - n)$`}</h3>
          <p>{`Claim: for every natural number $n$, $3 \\mid (n^3 - n)$, meaning $3$ divides $n^3 - n$ with no remainder.`}</p>
          <p>
            <strong>When to use this:</strong>{' '}
            {`Reach for induction on divisibility claims whenever you can algebraically rewrite the expression at $n+1$ to contain the expression at $n$ as a piece.`}
          </p>

          <div className="lrn-proof">
            <span className="lrn-proof-header">Proof</span>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">1.</span>
              <div className="lrn-proof-step-content">{`Base case, $n = 0$: $0^3 - 0 = 0$, and $0 = 3 \\cdot 0$, so $3 \\mid 0$.`}</div>
            </div>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">2.</span>
              <div className="lrn-proof-step-content">{`Inductive hypothesis: assume $3 \\mid (n^3 - n)$, meaning $n^3 - n = 3k$ for some integer $k$.`}</div>
            </div>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">3.</span>
              <div className="lrn-proof-step-content">{`Expand the $(n+1)$ case: $(n+1)^3 - (n+1) = n^3 + 3n^2 + 3n + 1 - n - 1 = (n^3 - n) + 3n^2 + 3n$.`}</div>
            </div>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">4.</span>
              <div className="lrn-proof-step-content">{`Substitute the inductive hypothesis: $(n^3 - n) + 3n^2 + 3n = 3k + 3n^2 + 3n = 3(k + n^2 + n)$.`}</div>
            </div>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">5.</span>
              <div className="lrn-proof-step-content">{`Since $k + n^2 + n$ is an integer, $(n+1)^3 - (n+1)$ is $3$ times an integer, so $3 \\mid \\bigl((n+1)^3 - (n+1)\\bigr)$.`}</div>
            </div>
            <div className="lrn-qed">Q.E.D.</div>
          </div>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>{`Step 3 splits the expanded expression into $(n^3 - n) + 3n^2 + 3n$ instead of leaving it as one polynomial. Why does this particular grouping matter?`}</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>{`The inductive hypothesis only tells you something about the specific piece $n^3 - n$. Grouping the expansion so that $n^3 - n$ appears by itself lets you swap in the known fact "$n^3 - n$ is divisible by 3" directly. Without that grouping, the hypothesis would have nothing to attach to.`}</p>
            </details>
          </div>

          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>{`Every divisibility proof by induction leans on one move: rewrite the expression at $n+1$ so the expression at $n$ appears inside it. The leftover terms then have to be clearly divisible by the same number.`}</p>
            <p>{`Here the leftover after pulling out $n^3 - n$ was $3n^2 + 3n$, which is $3(n^2 + n)$. Both the hypothesis piece and the leftover piece are multiples of $3$, so their sum is a multiple of $3$ too, and the divisibility carries forward one step.`}</p>
          </div>
        </>,

        <>
          <div className="lrn-header">
            <div>
              <h2>Proving Inequalities and Choosing the Right Base Case</h2>
            </div>
          </div>

          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>{`Look at $n$, $n^2$, and $2^n$ for small $n$: at $n = 3$, $n^2 = 9$ beats $2^n = 8$. Does that mean $2^n > n^2$ is simply false?`}</p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>{`Not false in general, just false for small $n$. The claim can still be true from some point onward. You need to find where $2^n$ permanently overtakes $n^2$ and start the base case there.`}</p>
            </details>
          </div>

          <h3>Choosing an Elevated Base Case</h3>
          <p>{`Not every true statement about natural numbers is true starting at $n = 0$. Some become true only after a threshold. The table below tracks $n$, $n^2$, and $2^n$.`}</p>
          <p>
            <strong>When to use this:</strong>{' '}
            {`Use an elevated base case (such as $n = 4$ or $n = 5$ instead of $n = 0$) whenever the statement is false for small $n$ but becomes permanently true from some point onward.`}
          </p>

          <table>
            <thead>
              <tr>
                <th>{`$n$`}</th>
                <th>{`$n^2$`}</th>
                <th>{`$2^n$`}</th>
                <th>{`Larger`}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{`0`}</td>
                <td>{`0`}</td>
                <td>{`1`}</td>
                <td>{`$2^n$`}</td>
              </tr>
              <tr>
                <td>{`1`}</td>
                <td>{`1`}</td>
                <td>{`2`}</td>
                <td>{`$2^n$`}</td>
              </tr>
              <tr>
                <td>{`2`}</td>
                <td>{`4`}</td>
                <td>{`4`}</td>
                <td>{`Equal`}</td>
              </tr>
              <tr>
                <td>{`3`}</td>
                <td>{`9`}</td>
                <td>{`8`}</td>
                <td>{`$n^2$`}</td>
              </tr>
              <tr>
                <td>{`4`}</td>
                <td>{`16`}</td>
                <td>{`16`}</td>
                <td>{`Equal`}</td>
              </tr>
              <tr>
                <td>{`5`}</td>
                <td>{`25`}</td>
                <td>{`32`}</td>
                <td>{`$2^n$`}</td>
              </tr>
              <tr>
                <td>{`6`}</td>
                <td>{`36`}</td>
                <td>{`64`}</td>
                <td>{`$2^n$`}</td>
              </tr>
            </tbody>
          </table>
          <p>{`From $n = 5$ onward, $2^n$ stays ahead of $n^2$ for good. That makes $n = 5$ the right base case for a proof that $2^n > n^2$.`}</p>

          <div className="lrn-graph">
            <ExpVsPolyViz />
          </div>

          <h3>{`Proving $2^n > n^2$ for $n \\geq 5$`}</h3>

          <div className="lrn-proof">
            <span className="lrn-proof-header">Proof</span>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">1.</span>
              <div className="lrn-proof-step-content">{`Base case, $n = 5$: $2^5 = 32$ and $5^2 = 25$. Since $32 > 25$, the base case holds.`}</div>
            </div>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">2.</span>
              <div className="lrn-proof-step-content">{`Inductive hypothesis: assume $2^n > n^2$ for some natural number $n \\geq 5$.`}</div>
            </div>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">3.</span>
              <div className="lrn-proof-step-content">{`Double both sides of the hypothesis: $2^{n+1} = 2 \\cdot 2^n > 2n^2$.`}</div>
            </div>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">4.</span>
              <div className="lrn-proof-step-content">{`Since $n \\geq 5$, $n^2 \\geq 2n + 1$ (this gap only grows as $n$ grows), so $2n^2 \\geq n^2 + n^2 \\geq n^2 + 2n + 1 = (n+1)^2$.`}</div>
            </div>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">5.</span>
              <div className="lrn-proof-step-content">{`Chain the two inequalities: $2^{n+1} > 2n^2 \\geq (n+1)^2$, so $2^{n+1} > (n+1)^2$.`}</div>
            </div>
            <div className="lrn-qed">Q.E.D.</div>
          </div>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>{`Step 4 needs $n^2 \\geq 2n + 1$, and that inequality already holds for every $n \\geq 3$. So why is $n = 5$ still the smallest base case?`}</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>{`The inequality $n^2 \\geq 2n + 1$ does not set the threshold. It already holds at $n = 3$, where $9 \\geq 7$.`}</p>
              <p>{`The threshold comes from the base case $2^n > n^2$ instead. At $n = 3$, $2^3 = 8$ is not greater than $3^2 = 9$.`}</p>
              <p>{`At $n = 4$, $2^4 = 16$ only equals $4^2 = 16$, not strictly greater. At $n = 5$, $2^5 = 32 > 5^2 = 25$.`}</p>
              <p>{`So $n = 5$ is the smallest starting point where the base case is strictly true.`}</p>
            </details>
          </div>

          <h3>{`Proving $4n < 2^n$ for $n \\geq 5$`}</h3>
          <p>{`A second inequality, proved with the same base case and a chained sequence of inequality steps rather than a single algebraic rewrite.`}</p>

          <div className="lrn-proof">
            <span className="lrn-proof-header">Proof</span>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">1.</span>
              <div className="lrn-proof-step-content">{`Base case, $n = 5$: $4 \\cdot 5 = 20$ and $2^5 = 32$. Since $20 < 32$, the base case holds.`}</div>
            </div>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">2.</span>
              <div className="lrn-proof-step-content">{`Inductive hypothesis: assume $4k < 2^k$ for some natural number $k \\geq 5$.`}</div>
            </div>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">3.</span>
              <div className="lrn-proof-step-content">{`Distributive property: $4(k+1) = 4k + 4$.`}</div>
            </div>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">4.</span>
              <div className="lrn-proof-step-content">{`Inductive hypothesis: $4k + 4 < 2^k + 4$.`}</div>
            </div>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">5.</span>
              <div className="lrn-proof-step-content">{`Because $k \\geq 5$, $4k \\geq 20 > 4$, so $2^k + 4 < 2^k + 4k$.`}</div>
            </div>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">6.</span>
              <div className="lrn-proof-step-content">{`Inductive hypothesis again: $2^k + 4k < 2^k + 2^k$.`}</div>
            </div>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">7.</span>
              <div className="lrn-proof-step-content">{`Property of exponents: $2^k + 2^k = 2 \\cdot 2^k = 2^{k+1}$. Chaining every step together gives $4(k+1) < 2^{k+1}$.`}</div>
            </div>
            <div className="lrn-qed">Q.E.D.</div>
          </div>

          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>{`Equality proofs chain a single sequence of "equals" signs. Strict inequality proofs like this one chain several "less than" or "greater than" steps in a row.`}</p>
            <p>{`The chain works because "less than" is transitive: if $a < b$ and $b < c$, then $a < c$. Stack enough of those links together and you connect the start of the chain to the end.`}</p>
          </div>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>{`The proof uses the inductive hypothesis twice, once in step 4 and again in step 6. Is that allowed?`}</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>{`Yes. The inductive hypothesis is a single true fact, $4k < 2^k$. You can use a true fact as many times as you need within one proof. Step 4 uses it to bound $2^k$ from below by $4k$, and step 6 uses that exact same fact again for a second substitution.`}</p>
            </details>
          </div>
        </>,

        <>
          <div className="lrn-header">
            <div>
              <h2>Induction Beyond Numbers: Angles and Tilings</h2>
            </div>
          </div>

          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>{`A polygon does not obviously mention a natural number. What natural number could you attach to a polygon so induction applies?`}</p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>{`The number of vertices (or sides). A polygon with $n$ vertices lets you induct on $n$, growing the shape by one vertex at a time.`}</p>
            </details>
          </div>

          <h3>Interior Angles of an Inscribed Polygon</h3>
          <p>{`Claim: place $n$ points on a circle, for $n \\geq 3$, and connect them in order to form a polygon. The interior angles of that polygon add up to $(n-2) \\cdot 180°$.`}</p>
          <p>
            <strong>When to use this:</strong>{' '}
            {`Reach for induction whenever a geometric or combinatorial (counting-based) object has a natural size parameter, like a vertex count or a grid size, and a bigger instance can be built out of a smaller one.`}
          </p>

          <div className="lrn-proof">
            <span className="lrn-proof-header">Proof</span>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">1.</span>
              <div className="lrn-proof-step-content">{`Base case, $n = 3$: a triangle. Its interior angles sum to $180°$, and $(3-2) \\cdot 180° = 180°$. They match.`}</div>
            </div>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">2.</span>
              <div className="lrn-proof-step-content">{`Inductive hypothesis: assume every polygon with $n$ vertices has interior angles summing to $(n-2) \\cdot 180°$.`}</div>
            </div>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">3.</span>
              <div className="lrn-proof-step-content">{`Take a polygon with $n + 1$ vertices. Draw one diagonal that splits it into a triangle plus a polygon with $n$ vertices.`}</div>
            </div>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">4.</span>
              <div className="lrn-proof-step-content">{`The $(n+1)$-gon's angle sum equals the $n$-gon's angle sum plus the triangle's $180°$: $(n-2) \\cdot 180° + 180° = (n-1) \\cdot 180°$, which is exactly $\\bigl((n+1)-2\\bigr) \\cdot 180°$.`}</div>
            </div>
            <div className="lrn-qed">Q.E.D.</div>
          </div>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>{`The proof splits an $(n+1)$-gon into a triangle and an $n$-gon. Why is that split the key move, rather than any other way of cutting the shape?`}</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>{`The inductive hypothesis only says something about $n$-gons. To use it, you must produce an actual $n$-gon inside the bigger shape. Cutting off exactly one triangle is the smallest possible reduction. It leaves behind a genuine $n$-gon, so the hypothesis applies directly.`}</p>
            </details>
          </div>

          <h3>Tiling a Grid with L-Shaped Trominoes</h3>
          <p>{`An L-tromino is a tile made of three squares in an L shape. Claim: for every natural number $n \\geq 1$, L-trominoes can always completely cover a $2^n \\times 2^n$ grid that has any one square removed.`}</p>

          <div className="lrn-graph">
            <TrominoTilingViz />
          </div>

          <div className="lrn-faded">
            <div className="lrn-faded-phase">
              <span className="lrn-faded-label">COMPLETE EXAMPLE</span>
              <p>{`The general argument, for an arbitrary $2^n \\times 2^n$ grid missing one square.`}</p>
              <ol className="lrn-list">
                <li>{`Base case $n = 1$: a $2 \\times 2$ grid with one square removed has exactly 3 squares left, and those 3 squares form a single L-tromino. One tile finishes the job.`}</li>
                <li>{`Inductive hypothesis: assume every $2^n \\times 2^n$ grid missing one square can be tiled by L-trominoes.`}</li>
                <li>{`Take a $2^{n+1} \\times 2^{n+1}$ grid missing one square. Cut it into four equal quadrants, each of size $2^n \\times 2^n$. The missing square sits inside exactly one quadrant.`}</li>
                <li>{`Place a single L-tromino at the very center of the whole grid, covering one corner square from each of the other three quadrants (the three corners that meet at the center point).`}</li>
                <li>{`Now every quadrant is missing exactly one square: the original missing square in one quadrant, and the corner covered by the central tromino in each of the other three.`}</li>
                <li>{`Each quadrant is now a $2^n \\times 2^n$ grid missing one square, so the inductive hypothesis tiles each of the four quadrants completely.`}</li>
              </ol>
            </div>
            <div className="lrn-faded-phase">
              <span className="lrn-faded-label">YOUR TURN: PARTIAL</span>
              <p>{`Watch the argument run on a concrete $4 \\times 4$ grid ($n = 2$), missing one square.`}</p>
              <ol className="lrn-list">
                <li>{`Split the $4 \\times 4$ grid into four $2 \\times 2$ quadrants.`}</li>
                <li>{`Place one L-tromino at the center, covering one corner square in each of the three quadrants that do not contain the missing square.`}</li>
                <li>{`Each of the four quadrants is now a $2 \\times 2$ grid missing exactly one square, which the base case tiles with a single L-tromino.`}</li>
                <li>{`Total tiles used: 1 central tromino, plus 4 more (one per quadrant), for 5 trominoes covering $5 \\times 3 = 15$ squares, exactly matching $4 \\times 4 - 1 = 15$.`}</li>
              </ol>
            </div>
            <div className="lrn-faded-phase">
              <span className="lrn-faded-label">INDEPENDENT PRACTICE</span>
              <p>{`The same idea, one level up, on an $8 \\times 8$ grid ($n = 3$), missing one square.`}</p>
              <ol className="lrn-list">
                <li>{`Split the $8 \\times 8$ grid into four $4 \\times 4$ quadrants.`}</li>
                <li>{`Place one L-tromino at the center, covering one corner square in each of the three quadrants that do not contain the missing square.`}</li>
                <li>{`Each of the four $4 \\times 4$ quadrants is now missing exactly one square, so the $n = 2$ result (5 trominoes each) tiles every quadrant.`}</li>
                <li>{`Total tiles used: 1 central tromino, plus $4 \\times 5 = 20$ from the quadrants, for 21 trominoes covering $21 \\times 3 = 63$ squares, exactly matching $8 \\times 8 - 1 = 63$.`}</li>
              </ol>
            </div>
          </div>

          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>{`The trick is that placing one tromino at the center converts the missing-one-square problem at size $2^{n+1}$ into four copies of the exact same problem at size $2^n$. That is what lets the inductive hypothesis apply four times in a row.`}</p>
          </div>
        </>,

        <>
          <div className="lrn-header">
            <div>
              <h2>Recursive Definitions</h2>
            </div>
          </div>

          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>{`A recursive definition of a function gives a starting value plus a rule that builds each new value from the one before it. Why might this style of definition pair naturally with induction?`}</p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>{`Both share the same two-part shape: a starting point, and a rule for stepping from one case to the next. A recursive definition builds the object step by step, and induction proves facts about it step by step.`}</p>
            </details>
          </div>

          <h3>Factorial and Exponentiation, Defined by Recursion</h3>
          <p>{`A recursive definition gives a base value, then a rule for computing $f(n+1)$ from $f(n)$.`}</p>
          <p>
            <strong>When to use this:</strong>{' '}
            {`Use recursive definitions whenever you naturally build a quantity one step at a time from a smaller version of itself.`}
          </p>
          <div className="lrn-eq">
            <span>{`$$f(0) = 1, \\qquad f(n+1) = (n+1) \\cdot f(n) \\quad \\text{(factorial)}$$`}</span>
            <span>{`$$a^0 = 1, \\qquad a^{n+1} = a^n \\cdot a \\quad \\text{(exponentiation)}$$`}</span>
          </div>

          <h3>Summation Notation, Also Defined by Recursion</h3>
          <p>{`The symbol $\\sum_{i=m}^{n} a_i$ just means add up the terms $a_m + a_{m+1} + \\dots + a_n$. Even this summation symbol has a recursive definition, starting from a fixed lower index $m$.`}</p>
          <div className="lrn-eq">
            <span>{`$$\\sum_{i=m}^{m} a_i = a_m, \\qquad \\sum_{i=m}^{n+1} a_i = \\sum_{i=m}^{n} a_i + a_{n+1}$$`}</span>
          </div>
          <p>{`The letter $i$ inside the sum is a bound variable. It has no meaning outside the sum, so you can freely rename it to any other letter without changing the total.`}</p>

          <div className="lrn-faded">
            <div className="lrn-faded-phase">
              <span className="lrn-faded-label">COMPLETE EXAMPLE</span>
              <p>{`Unwind $f(6)$ using the recursive factorial definition, one step at a time.`}</p>
              <ol className="lrn-list">
                <li>{`$f(0) = 1$`}</li>
                <li>{`$f(1) = 1 \\cdot f(0) = 1 \\cdot 1 = 1$`}</li>
                <li>{`$f(2) = 2 \\cdot f(1) = 2 \\cdot 1 = 2$`}</li>
                <li>{`$f(3) = 3 \\cdot f(2) = 3 \\cdot 2 = 6$`}</li>
                <li>{`$f(4) = 4 \\cdot f(3) = 4 \\cdot 6 = 24$`}</li>
                <li>{`$f(5) = 5 \\cdot f(4) = 5 \\cdot 24 = 120$`}</li>
                <li>{`$f(6) = 6 \\cdot f(5) = 6 \\cdot 120 = 720$`}</li>
              </ol>
            </div>
            <div className="lrn-faded-phase">
              <span className="lrn-faded-label">YOUR TURN: PARTIAL</span>
              <p>{`Unwind $a^4$ the same way, using the recursive exponentiation definition.`}</p>
              <ol className="lrn-list">
                <li>{`$a^0 = 1$`}</li>
                <li>{`$a^1 = a^0 \\cdot a = 1 \\cdot a = a$`}</li>
                <li>{`$a^2 = a^1 \\cdot a = a \\cdot a$`}</li>
                <li>{`$a^3 = a^2 \\cdot a$`}</li>
                <li>{`$a^4 = a^3 \\cdot a$`}</li>
              </ol>
            </div>
            <div className="lrn-faded-phase">
              <span className="lrn-faded-label">INDEPENDENT PRACTICE</span>
              <p>{`Check that $\\sum_{i=3}^{6} i^2$ gives the same answer directly and recursively.`}</p>
              <ol className="lrn-list">
                <li>{`Direct: $9 + 16 + 25 + 36 = 86$.`}</li>
                <li>{`Recursive: $\\sum_{i=3}^{6} i^2 = \\sum_{i=3}^{5} i^2 + 36 = \\left(\\sum_{i=3}^{4} i^2 + 25\\right) + 36 = \\left(\\left(\\sum_{i=3}^{3} i^2 + 16\\right) + 25\\right) + 36$.`}</li>
                <li>{`$\\sum_{i=3}^{3} i^2 = 9$ by the base case of the recursive definition, so unwinding gives $((9+16)+25)+36 = 86$, matching the direct computation.`}</li>
              </ol>
            </div>
          </div>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>{`Unwinding $f(6)$ required computing $f(0)$ through $f(5)$ first, in order. Why can you not jump straight to $f(6)$?`}</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>{`The recursive rule $f(n+1) = (n+1) \\cdot f(n)$ defines each value only from the one just below it. Until you know $f(5)$, the rule for $f(6)$ has nothing to multiply, so you must build the values upward from the base value $f(0) = 1$, one step at a time.`}</p>
            </details>
          </div>
        </>,

        <>
          <div className="lrn-header">
            <div>
              <h2>Proving Facts About Recursively Defined Objects</h2>
            </div>
          </div>

          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>{`To prove a fact about a recursively defined sequence like $a_{n+1} = 2a_n + 1$, what should the induction step naturally use?`}</p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>{`The recursive rule itself. Substituting the inductive hypothesis into the rule $a_{n+1} = 2a_n + 1$ turns a fact about $a_n$ into a fact about $a_{n+1}$.`}</p>
            </details>
          </div>

          <h3>{`Proving $n! > 2^n$ for $n \\geq 4$`}</h3>
          <p>
            <strong>When to use this:</strong>{' '}
            {`Reach for this style of proof whenever comparing a recursively defined quantity, like a factorial, against a simpler formula. The recursive $f(n)$ defined earlier is exactly $n!$, so $f(4) = 24 = 4!$ and $f(6) = 720 = 6!$.`}
          </p>
          <div className="lrn-proof">
            <span className="lrn-proof-header">Proof</span>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">1.</span>
              <div className="lrn-proof-step-content">{`Base case, $n = 4$: $4! = 24$ and $2^4 = 16$. Since $24 > 16$, the base case holds.`}</div>
            </div>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">2.</span>
              <div className="lrn-proof-step-content">{`Inductive hypothesis: assume $n! > 2^n$ for some natural number $n \\geq 4$.`}</div>
            </div>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">3.</span>
              <div className="lrn-proof-step-content">{`By the recursive definition, $(n+1)! = (n+1) \\cdot n!$. By the inductive hypothesis, $(n+1) \\cdot n! > (n+1) \\cdot 2^n$.`}</div>
            </div>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">4.</span>
              <div className="lrn-proof-step-content">{`Since $n \\geq 4$, $n + 1 \\geq 5 > 2$, so $(n+1) \\cdot 2^n > 2 \\cdot 2^n = 2^{n+1}$. Chaining gives $(n+1)! > 2^{n+1}$.`}</div>
            </div>
            <div className="lrn-qed">Q.E.D.</div>
          </div>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>{`The induction step multiplies the hypothesis by $(n+1)$, yet the goal only needs a factor of $2$. Why is multiplying by $(n+1)$ still the right move?`}</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>{`The recursive rule $(n+1)! = (n+1) \\cdot n!$ forces the factor $(n+1)$ to appear, since that is how factorial grows. Because $n \\geq 4$ makes $n+1 \\geq 5$, which is well above $2$, that larger factor overshoots exactly what $2^{n+1}$ needs, so the inequality still closes.`}</p>
            </details>
          </div>

          <h3>{`Proving $a^{m+n} = a^m \\cdot a^n$`}</h3>
          <p>{`Claim: for any real number $a$ and any natural numbers $m$ and $n$, $a^{m+n} = a^m \\cdot a^n$. Fix $m$ and induct on $n$.`}</p>
          <div className="lrn-proof">
            <span className="lrn-proof-header">Proof</span>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">1.</span>
              <div className="lrn-proof-step-content">{`Base case, $n = 0$: $a^{m+0} = a^m$, and $a^m \\cdot a^0 = a^m \\cdot 1 = a^m$. They match.`}</div>
            </div>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">2.</span>
              <div className="lrn-proof-step-content">{`Inductive hypothesis: assume $a^{m+n} = a^m \\cdot a^n$ for some natural number $n$.`}</div>
            </div>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">3.</span>
              <div className="lrn-proof-step-content">{`By the recursive definition, $a^{m+(n+1)} = a^{(m+n)+1} = a^{m+n} \\cdot a$.`}</div>
            </div>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">4.</span>
              <div className="lrn-proof-step-content">{`Substitute the inductive hypothesis: $a^{m+n} \\cdot a = (a^m \\cdot a^n) \\cdot a = a^m \\cdot (a^n \\cdot a) = a^m \\cdot a^{n+1}$.`}</div>
            </div>
            <div className="lrn-qed">Q.E.D.</div>
          </div>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>{`This proof uses the recursive definition of exponentiation twice, once in step 3 and once inside step 4. Why does it need it twice?`}</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>{`Step 3 uses the rule to peel one factor of $a$ off the exponent $m + (n+1)$. Step 4 uses the same rule in reverse, folding a factor of $a$ back into $a^n$ to produce $a^{n+1}$. Both uses are the identical recursive rule, applied to two different exponents in the same expression.`}</p>
            </details>
          </div>

          <h3>Finding a Formula for a Recursive Sequence</h3>
          <p>{`Consider the sequence defined by $a_0 = 0$ and $a_{n+1} = 2a_n + 1$. Compute the first values to spot a pattern.`}</p>
          <table>
            <thead>
              <tr>
                <th>{`$n$`}</th>
                <th>{`0`}</th>
                <th>{`1`}</th>
                <th>{`2`}</th>
                <th>{`3`}</th>
                <th>{`4`}</th>
                <th>{`5`}</th>
                <th>{`6`}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{`$a_n$`}</td>
                <td>{`0`}</td>
                <td>{`1`}</td>
                <td>{`3`}</td>
                <td>{`7`}</td>
                <td>{`15`}</td>
                <td>{`31`}</td>
                <td>{`63`}</td>
              </tr>
            </tbody>
          </table>
          <p>{`Each value is one less than a power of two: $0, 1, 3, 7, 15, 31, 63$ match $2^0 - 1, 2^1 - 1, 2^2 - 1, \\dots$. Claim: $a_n = 2^n - 1$ for every natural number $n$.`}</p>
          <div className="lrn-proof">
            <span className="lrn-proof-header">Proof</span>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">1.</span>
              <div className="lrn-proof-step-content">{`Base case, $n = 0$: $a_0 = 0$, and $2^0 - 1 = 0$. They match.`}</div>
            </div>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">2.</span>
              <div className="lrn-proof-step-content">{`Inductive hypothesis: assume $a_n = 2^n - 1$ for some natural number $n$.`}</div>
            </div>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">3.</span>
              <div className="lrn-proof-step-content">{`By the recursive definition and the hypothesis: $a_{n+1} = 2a_n + 1 = 2(2^n - 1) + 1 = 2^{n+1} - 2 + 1 = 2^{n+1} - 1$.`}</div>
            </div>
            <div className="lrn-qed">Q.E.D.</div>
          </div>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>{`The induction step substitutes $2^n - 1$ for $a_n$ inside the rule $a_{n+1} = 2a_n + 1$. Why does this one substitution finish the proof so quickly?`}</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>{`The recursive rule already says how $a_{n+1}$ is built from $a_n$, and the inductive hypothesis says exactly what $a_n$ equals. Plugging one into the other leaves only routine algebra, $2(2^n - 1) + 1$, which simplifies straight to $2^{n+1} - 1$, the claim for $n+1$.`}</p>
            </details>
          </div>

          <h3>Bernoulli's Inequality and the Stronger-Statement Strategy</h3>
          <p>{`Claim: for every real $x > -1$ and every natural number $n$, $(1+x)^n \\geq 1 + nx$.`}</p>

          <div className="lrn-graph">
            <BernoulliViz />
          </div>
          <div className="lrn-proof">
            <span className="lrn-proof-header">Proof</span>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">1.</span>
              <div className="lrn-proof-step-content">{`Base case, $n = 0$: $(1+x)^0 = 1$, and $1 + 0 \\cdot x = 1$. They match.`}</div>
            </div>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">2.</span>
              <div className="lrn-proof-step-content">{`Inductive hypothesis: assume $(1+x)^n \\geq 1 + nx$ for some natural number $n$.`}</div>
            </div>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">3.</span>
              <div className="lrn-proof-step-content">{`Since $x > -1$, $1 + x > 0$, so multiplying both sides of the hypothesis by $(1+x)$ preserves the inequality: $(1+x)^{n+1} \\geq (1+nx)(1+x)$.`}</div>
            </div>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">4.</span>
              <div className="lrn-proof-step-content">{`Expand the right side: $(1+nx)(1+x) = 1 + x + nx + nx^2 = 1 + (n+1)x + nx^2$.`}</div>
            </div>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">5.</span>
              <div className="lrn-proof-step-content">{`Since $nx^2 \\geq 0$, dropping it only makes the expression smaller: $1 + (n+1)x + nx^2 \\geq 1 + (n+1)x$. Chaining gives $(1+x)^{n+1} \\geq 1 + (n+1)x$.`}</div>
            </div>
            <div className="lrn-qed">Q.E.D.</div>
          </div>

          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>{`It can seem backward, but proving the stronger, more precise statement $(1+x)^n \\geq 1 + nx$ is easier by induction than a weaker, looser statement would be.`}</p>
            <p>{`A stronger inductive hypothesis hands you more information to work with inside the induction step. A weaker hypothesis gives you less to work with, which can make the algebra of the step impossible to complete. When a direct proof stalls, try proving a stronger claim instead.`}</p>
          </div>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>{`Step 5 drops the term $nx^2$ from the inequality. Why is it always safe to drop that specific term?`}</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>{`$x^2$ is never negative, no matter the sign of $x$, and $n$ is a natural number, so $n \\geq 0$ too. That makes $nx^2 \\geq 0$ always. Removing a quantity that is always zero or positive from the larger side is safe. It can only keep a "greater than or equal to" statement true, never break it.`}</p>
            </details>
          </div>
        </>,

        <>
          <div className="lrn-header">
            <div>
              <h2>Strong Induction</h2>
            </div>
          </div>

          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>{`Ordinary induction lets you assume $P(n)$ to prove $P(n+1)$. What extra power would you gain if you could assume $P(k)$ for every $k$ smaller than $n+1$, not just $P(n)$ alone?`}</p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>{`You could prove facts about $n+1$ that depend on values far below $n$, not just the value directly before it. This matters for sequences and structures, like Fibonacci numbers or factorizations, that are built from more than one earlier case.`}</p>
            </details>
          </div>

          <h3>The Strong Induction Hypothesis</h3>
          <p>{`Strong induction proves $P(n)$ for every natural number $n$ by assuming $P(k)$ is true for every natural number $k$ smaller than $n$, then proving $P(n)$ follows.`}</p>
          <p>
            <strong>When to use this:</strong>{' '}
            {`Reach for strong induction whenever proving the $n$ case naturally depends on more than just the immediately preceding case, such as a factorization, a splitting argument, or a sequence built from several earlier terms.`}
          </p>
          <div className="lrn-eq lrn-eq-hero">
            <span>{`$$\\text{If, for every natural number } n, \\bigl[P(k) \\text{ true for all } k < n\\bigr] \\Rightarrow P(n),$$`}</span>
            <span>{`$$\\text{then } P(n) \\text{ is true for every natural number } n.$$`}</span>
          </div>
          <p>{`Strong induction needs no separately stated base case in its general form, since "$P(k)$ for all $k < 0$" is vacuously true. A statement is vacuously true when it holds only because there are no cases to check. In practice, authors often still isolate small cases for clarity.`}</p>

          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>{`Define a helper statement $Q(n)$ to mean "$P(k)$ is true for every $k < n$." Proving $Q(n) \\Rightarrow P(n)$, as strong induction requires, is enough to build the chain $Q(0) \\Rightarrow Q(1) \\Rightarrow Q(2) \\Rightarrow \\cdots$, the same chain of implications that makes ordinary induction work.`}</p>
            <p>{`Since each $Q(n)$ bundles up every $P(k)$ below it, proving every $Q(n)$ true also proves every individual $P(n)$ true.`}</p>
          </div>

          <h3>Strong Recursion: Fibonacci Numbers</h3>
          <p>{`Ordinary recursion defines $f(n+1)$ from $f(n)$ alone. Strong recursion defines a term from more than one earlier term. The Fibonacci sequence is the classic example.`}</p>
          <div className="lrn-eq">
            <span>{`$$F_0 = 0, \\qquad F_1 = 1, \\qquad F_n = F_{n-2} + F_{n-1} \\ \\text{for } n \\geq 2$$`}</span>
          </div>
          <p>{`Unwinding the first few terms: $F_2 = F_0 + F_1 = 0 + 1 = 1$, $F_3 = F_1 + F_2 = 1 + 1 = 2$, $F_4 = F_2 + F_3 = 1 + 2 = 3$.`}</p>
          <p>{`Pascal's triangle is built the same way: every entry is the sum of the two entries above it. The first five rows are $1$; then $1, 1$; then $1, 2, 1$; then $1, 3, 3, 1$; then $1, 4, 6, 4, 1$. Each row depends on more than one entry from the row before, just like Fibonacci depends on two earlier terms.`}</p>

          <div className="lrn-graph">
            <PascalTriangleViz />
          </div>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>{`Fibonacci needs strong recursion, but factorial only needed ordinary recursion. What is the structural difference?`}</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>{`Factorial's rule, $f(n+1) = (n+1) \\cdot f(n)$, only ever reaches back one step, to $f(n)$. Fibonacci's rule reaches back two steps, to both $F_{n-2}$ and $F_{n-1}$. Sometimes a definition or a proof needs more than the single immediately preceding case. Then ordinary induction and ordinary recursion are not enough, and the strong versions take over.`}</p>
            </details>
          </div>
        </>,

        <>
          <div className="lrn-header">
            <div>
              <h2>Strong Induction in Action: Division and Prime Factorization</h2>
            </div>
          </div>

          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>{`To prove every integer greater than 1 is prime or a product of primes, a natural strategy is to split a non-prime number $n$ into two smaller factors, $n = ab$. Why does this call for strong induction rather than ordinary induction?`}</p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>{`Because $a$ and $b$ are both smaller than $n$, but neither one is necessarily "$n - 1$." Strong induction lets you assume the claim for every number below $n$. So you can apply it to both $a$ and $b$ directly, whatever their exact values are.`}</p>
            </details>
          </div>

          <h3>The Division Algorithm</h3>
          <p>{`Claim: for any natural number $n$ and any natural number $m > 0$, there exist naturals $q$ and $r$ with $n = mq + r$ and $0 \\leq r < m$.`}</p>
          <p>
            <strong>When to use this:</strong>{' '}
            {`Use strong induction whenever a case can split into two or more genuinely smaller subcases that are not simply "one less" than the original.`}
          </p>
          <div className="lrn-proof">
            <span className="lrn-proof-header">Proof</span>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">1.</span>
              <div className="lrn-proof-step-content">{`Strong induction on $n$, with $m$ fixed. Inductive hypothesis: for every natural number $k < n$, there exist $q, r$ with $k = mq + r$ and $0 \\leq r < m$.`}</div>
            </div>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">2.</span>
              <div className="lrn-proof-step-content">{`Case 1, $n < m$: take $q = 0$ and $r = n$. Then $n = m \\cdot 0 + n$, and $0 \\leq n < m$ as required.`}</div>
            </div>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">3.</span>
              <div className="lrn-proof-step-content">{`Case 2, $n \\geq m$: then $n - m$ is a natural number smaller than $n$, so the inductive hypothesis applies to it: $n - m = mq' + r'$ with $0 \\leq r' < m$.`}</div>
            </div>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">4.</span>
              <div className="lrn-proof-step-content">{`Add $m$ to both sides: $n = m(q' + 1) + r'$. Taking $q = q' + 1$ and $r = r'$ satisfies the claim for $n$.`}</div>
            </div>
            <div className="lrn-qed">Q.E.D.</div>
          </div>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>{`Case 2 applies the inductive hypothesis to $n - m$ rather than to $n - 1$. Why is $n - m$ the right smaller number to step down to?`}</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>{`Dividing by $m$ works like subtracting $m$ over and over, so the natural smaller problem is $n - m$, not $n - 1$. Since $n - m$ is still a natural number below $n$, strong induction already guarantees a quotient and remainder for it. Adding $m$ back bumps the quotient up by one, finishing the case for $n$.`}</p>
            </details>
          </div>

          <h3>Every Integer Greater Than 1 Is Prime or a Product of Primes</h3>
          <div className="lrn-proof">
            <span className="lrn-proof-header">Proof</span>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">1.</span>
              <div className="lrn-proof-step-content">{`Strong induction on $n > 1$. Inductive hypothesis: every integer $k$ with $1 < k < n$ is prime or a product of primes.`}</div>
            </div>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">2.</span>
              <div className="lrn-proof-step-content">{`Case 1: if $n$ is prime, the claim already holds for $n$.`}</div>
            </div>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">3.</span>
              <div className="lrn-proof-step-content">{`Case 2: if $n$ is not prime, then $n = ab$ for some integers $a, b$ with $1 < a < n$ and $1 < b < n$.`}</div>
            </div>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">4.</span>
              <div className="lrn-proof-step-content">{`Both $a$ and $b$ are smaller than $n$ and greater than $1$, so the inductive hypothesis applies to each: $a$ is prime or a product of primes, and so is $b$.`}</div>
            </div>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">5.</span>
              <div className="lrn-proof-step-content">{`Combining the prime factors of $a$ with the prime factors of $b$ writes $n = ab$ as a product of primes.`}</div>
            </div>
            <div className="lrn-qed">Q.E.D.</div>
          </div>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>{`Step 4 applies the inductive hypothesis to both $a$ and $b$ separately. Would ordinary induction, which only assumes the case at $n-1$, be able to do this?`}</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>{`No. Ordinary induction only hands you a fact about $n - 1$, but $a$ and $b$ could be any values strictly between $1$ and $n$, not necessarily $n - 1$. Only strong induction, which assumes the claim for every smaller number at once, has a fact ready for whatever specific values $a$ and $b$ turn out to be.`}</p>
            </details>
          </div>

          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>{`Both proofs in this section carry the signature of strong induction. The smaller cases they reach for are not $n - 1$, but pieces of unpredictable size. Those pieces are $n - m$ for the division algorithm, and the factors $a$ and $b$ for prime factorization.`}</p>
            <p>{`Ordinary induction only ever hands you the single case just below $n$. Whenever a proof splits a problem into smaller parts whose sizes you cannot pin down in advance, strong induction is the tool that already has a fact ready for each part.`}</p>
          </div>
        </>,

        <>
          <div className="lrn-header">
            <div>
              <h2>Binet's Formula for the Fibonacci Numbers</h2>
            </div>
          </div>

          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>{`Fibonacci numbers are defined using two earlier terms, $F_{n-2}$ and $F_{n-1}$. How many base cases do you think a strong induction proof about Fibonacci numbers will need?`}</p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>{`Two: $n = 0$ and $n = 1$. Since the recursive rule for $F_n$ only kicks in at $n \\geq 2$, you must check both starting terms directly before the inductive step can take over.`}</p>
            </details>
          </div>

          <h3>{`A Closed-Form Formula for $F_n$`}</h3>
          <p>{`Claim: define $\\varphi = \\frac{1+\\sqrt{5}}{2}$ and $\\psi = \\frac{1-\\sqrt{5}}{2}$. Then for every natural number $n$, $F_n = \\frac{\\varphi^n - \\psi^n}{\\sqrt{5}}$.`}</p>
          <p>
            <strong>When to use this:</strong>{' '}
            {`Use a closed-form formula whenever you need to compute a term of a recursively defined sequence directly, without unwinding every earlier term first.`}
          </p>
          <p>{`Both $\\varphi$ and $\\psi$ satisfy the same identity: squaring either one gives back one plus itself, $\\varphi^2 = 1 + \\varphi$ and $\\psi^2 = 1 + \\psi$. This identity is the algebraic engine of the proof.`}</p>
          <p>{`Check $\\varphi$ directly: $\\varphi^2 = \\left(\\frac{1+\\sqrt{5}}{2}\\right)^2 = \\frac{1 + 2\\sqrt{5} + 5}{4} = \\frac{6 + 2\\sqrt{5}}{4} = \\frac{3+\\sqrt{5}}{2}$.`}</p>
          <p>{`And $1 + \\varphi = 1 + \\frac{1+\\sqrt{5}}{2} = \\frac{3+\\sqrt{5}}{2}$, the same value. The identity for $\\psi$ works out the same way.`}</p>

          <div className="lrn-proof">
            <span className="lrn-proof-header">Proof</span>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">1.</span>
              <div className="lrn-proof-step-content">{`Strong induction with two base cases. At $n = 0$: $\\frac{\\varphi^0 - \\psi^0}{\\sqrt{5}} = \\frac{1-1}{\\sqrt{5}} = 0 = F_0$.`}</div>
            </div>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">2.</span>
              <div className="lrn-proof-step-content">{`At $n = 1$: $\\frac{\\varphi - \\psi}{\\sqrt{5}} = \\frac{\\sqrt{5}}{\\sqrt{5}} = 1 = F_1$, since $\\varphi - \\psi = \\frac{1+\\sqrt{5}}{2} - \\frac{1-\\sqrt{5}}{2} = \\sqrt{5}$.`}</div>
            </div>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">3.</span>
              <div className="lrn-proof-step-content">{`Inductive hypothesis, for $n \\geq 2$: assume the formula holds for both $n-2$ and $n-1$.`}</div>
            </div>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">4.</span>
              <div className="lrn-proof-step-content">{`By the recursive definition and the hypothesis: $F_n = F_{n-2} + F_{n-1} = \\frac{\\varphi^{n-2} - \\psi^{n-2}}{\\sqrt{5}} + \\frac{\\varphi^{n-1} - \\psi^{n-1}}{\\sqrt{5}}$.`}</div>
            </div>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">5.</span>
              <div className="lrn-proof-step-content">{`Group by power: $\\frac{\\varphi^{n-2}(1 + \\varphi) - \\psi^{n-2}(1 + \\psi)}{\\sqrt{5}}$.`}</div>
            </div>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">6.</span>
              <div className="lrn-proof-step-content">{`Use the identity $1 + \\varphi = \\varphi^2$ and $1 + \\psi = \\psi^2$: $\\frac{\\varphi^{n-2} \\cdot \\varphi^2 - \\psi^{n-2} \\cdot \\psi^2}{\\sqrt{5}} = \\frac{\\varphi^n - \\psi^n}{\\sqrt{5}}$, exactly the claim for $n$.`}</div>
            </div>
            <div className="lrn-qed">Q.E.D.</div>
          </div>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>{`Step 6 relies on $\\varphi^2 = 1 + \\varphi$. Where did that identity come from, and why does the whole proof depend on it?`}</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>{`$\\varphi$ and $\\psi$ solve the equation $x^2 = 1 + x$, which is exactly what their $\\sqrt{5}$ definitions make them. That single algebraic fact turns "$1$ plus a power" into "the next power up" in step 6. That is the whole reason $\\varphi$ and $\\psi$ appear here instead of any other numbers.`}</p>
            </details>
          </div>

          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>{`The number of base cases a strong-induction proof needs matches how far its recursive rule reaches back. A rule that uses two earlier terms needs two starting values checked directly, or the inductive step would have nothing solid to stand on.`}</p>
          </div>
        </>,

        <>
          <div className="lrn-header">
            <div>
              <h2>{`The Well-Ordering Principle and the Irrationality of $\\sqrt{2}$`}</h2>
            </div>
          </div>

          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>{`The well-ordering principle says every nonempty set of natural numbers has a smallest element. Do you think this is a separate fact, or something induction can prove?`}</p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>{`It follows from strong induction. Assuming a set has no smallest element and using strong induction to show the set must then be completely empty proves the two ideas are logically tied together.`}</p>
            </details>
          </div>

          <h3>The Well-Ordering Principle</h3>
          <p>{`Claim: every nonempty set of natural numbers has a smallest element.`}</p>
          <p>
            <strong>When to use this:</strong>{' '}
            {`Reach for the well-ordering principle whenever you want to argue using "the smallest counterexample" or "the smallest number with some property," instead of writing out an induction step directly.`}
          </p>
          <div className="lrn-proof">
            <span className="lrn-proof-header">Proof (by contrapositive)</span>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">1.</span>
              <div className="lrn-proof-step-content">{`Prove the contrapositive instead, the claim flipped and negated: if a set $S$ of natural numbers has no smallest element, then $S$ is empty.`}</div>
            </div>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">2.</span>
              <div className="lrn-proof-step-content">{`Use strong induction to prove: for every natural number $n$, $n \\notin S$. Inductive hypothesis: for every $k < n$, $k \\notin S$.`}</div>
            </div>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">3.</span>
              <div className="lrn-proof-step-content">{`Suppose $n \\in S$. By the hypothesis, no number smaller than $n$ is in $S$. That would make $n$ the smallest element of $S$, contradicting the assumption that $S$ has no smallest element.`}</div>
            </div>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">4.</span>
              <div className="lrn-proof-step-content">{`So $n \\notin S$. Since $n$ was an arbitrary natural number, no natural number is in $S$, meaning $S$ is empty.`}</div>
            </div>
            <div className="lrn-qed">Q.E.D.</div>
          </div>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>{`The proof never checks a separate base case, yet strong induction still forces $S$ to be empty. Where is the base case hiding?`}</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>{`At $n = 0$ the hypothesis "no $k < 0$ is in $S$" is vacuously true, because there are no natural numbers below $0$. That vacuous case is the hidden base case: it lets the first step conclude $0 \\notin S$, and every later step chains off the ones before it.`}</p>
            </details>
          </div>

          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>{`Induction builds a statement up one case at a time. The well-ordering principle instead argues from the smallest possible failure.`}</p>
            <p>{`These two strategies are logically equivalent: each one can be converted into the other.`}</p>
          </div>

          <h3>{`Using It: $\\sqrt{2}$ Is Irrational`}</h3>
          <p>{`Claim: $\\sqrt{2}$ cannot be written as a ratio of two natural numbers.`}</p>
          <div className="lrn-proof">
            <span className="lrn-proof-header">
              Proof (by contradiction, using the well-ordering principle)
            </span>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">1.</span>
              <div className="lrn-proof-step-content">{`Suppose $\\sqrt{2}$ is rational. Then the set of natural numbers $q$ such that $q\\sqrt{2}$ is also a natural number is nonempty.`}</div>
            </div>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">2.</span>
              <div className="lrn-proof-step-content">{`By the well-ordering principle, that set has a smallest element $q$, with $p = q\\sqrt{2}$ a natural number.`}</div>
            </div>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">3.</span>
              <div className="lrn-proof-step-content">{`Squaring gives $p^2 = 2q^2$. The right side is even, so $p^2$ is even, so $p$ itself must be even (an odd number squared is always odd). Write $p = 2m$.`}</div>
            </div>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">4.</span>
              <div className="lrn-proof-step-content">{`Substitute: $(2m)^2 = 2q^2$, so $4m^2 = 2q^2$, so $q^2 = 2m^2$. By the same reasoning, $q^2$ is even, so $q$ is even too.`}</div>
            </div>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">5.</span>
              <div className="lrn-proof-step-content">{`Since $q$ is even, $\\frac{q}{2}$ is a smaller natural number. And $\\frac{q}{2}\\sqrt{2} = \\frac{p}{2} = m$, a natural number, so $\\frac{q}{2}$ also belongs to the set.`}</div>
            </div>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">6.</span>
              <div className="lrn-proof-step-content">{`This contradicts $q$ being the smallest element of the set. So the original assumption was false, and $\\sqrt{2}$ is irrational.`}</div>
            </div>
            <div className="lrn-qed">Q.E.D.</div>
          </div>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>{`The proof shows both $p$ and $q$ are even. Why is that the moment the whole argument collapses?`}</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>{`$q$ was chosen as the smallest natural number with the property "$q\\sqrt{2}$ is a natural number." Showing $q$ is even produces $\\frac{q}{2}$, a strictly smaller natural number with that exact same property. A smallest number cannot have anything smaller sharing its property, so the contradiction is unavoidable, which means the starting assumption (that $\\sqrt{2}$ is rational) must be false.`}</p>
            </details>
          </div>
        </>,

        <>
          <div className="lrn-header">
            <div>
              <h2>Spotting a Flawed Induction Proof</h2>
            </div>
          </div>

          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>{`An induction step is supposed to use the inductive hypothesis, the assumption $P(n)$, to derive $P(n+1)$. What would it look like if a "proof" secretly skipped that and just assumed the answer instead?`}</p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>{`It might restate the general claim as if it were already known to hold at $n+1$, without ever algebraically connecting it back to the $n$ case. That is circular reasoning dressed up as an induction step.`}</p>
            </details>
          </div>

          <h3>A Proof That Assumes What It Should Prove</h3>
          <p>{`Recall the claim $1 + 3 + 5 + \\cdots + (2n-1) = n^2$, proved correctly earlier. Here is a flawed version of the induction step for the same claim.`}</p>
          <p>
            <strong>When to use this:</strong>{' '}
            {`Check every induction step against this pattern whenever a proof feels too short, or whenever the step never actually manipulates the inductive hypothesis with algebra.`}
          </p>

          <div className="lrn-callout lrn-warning">
            <span className="lrn-callout-label">Flawed Step</span>
            <p>{`"Assume $1 + 3 + \\cdots + (2n-1) = n^2$. Now, $1 + 3 + \\cdots + (2n-1) + (2n+1)$ is the sum of the first $n+1$ odd numbers. Since the sum of the first $k$ odd numbers is always $k^2$, this equals $(n+1)^2$. Done."`}</p>
          </div>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>{`What exactly goes wrong in the flawed step above, if every individual sentence in it sounds true?`}</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>{`The line "the sum of the first $k$ odd numbers is always $k^2$" is the entire claim being proved, restated in general form. Using it at $k = n+1$ assumes the $(n+1)$ case is already true, which is exactly what the proof was supposed to establish. A correct step must instead start from the inductive hypothesis at $n$. It groups the first $n$ terms, adds the next term, and builds the $n+1$ case from scratch with real algebra.`}</p>
            </details>
          </div>

          <h3>A Checklist for Reading Any Induction Proof</h3>
          <ul className="lrn-list">
            <li>{`Is the base case actually computed and checked, not just asserted?`}</li>
            <li>{`Does the induction step use the inductive hypothesis with real algebra, rather than simply restating the goal?`}</li>
            <li>{`Does the base case match where the induction step actually starts working (no gap, like a base case at $n=0$ paired with a step that secretly needs $n \\geq 3$)?`}</li>
          </ul>

          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>{`Every correct induction step in this lesson does the same three things: it starts from the inductive hypothesis as a known fact, it performs a genuine algebraic or logical manipulation, and it lands on the exact shape of the $n+1$ statement.`}</p>
            <p>{`A proof that skips the middle step, jumping straight from the hypothesis to a restatement of the goal, has proved nothing at all, no matter how confident its wording sounds.`}</p>
          </div>
        </>
      ]
    },
    practice: [
      {
        q: 'What are the two parts required by the principle of mathematical induction, and what does each one establish?',
        a: 'The two parts are the base case and the induction step. The base case proves the statement true for the starting natural number, usually 0 or 1. The induction step proves that whenever the statement is true for some n, it is also true for n+1. Together, a chain of implications P(0), P(1), P(2), and so on, reaches every natural number.'
      },
      {
        q: 'Why does checking a formula for n equal to 1 through 40 fail to prove it true for every natural number?',
        a: 'Checking finitely many cases only confirms those specific cases, and a statement about "every natural number" makes infinitely many claims. The example p(n) = n^2 - n + 41 is prime for n = 1 through 40, but p(41) = 41^2, which is not prime. This shows a pattern can hold for a long stretch and still break later, so only a full proof, not a numeric check, can establish a claim for all n.'
      },
      {
        q: 'Prove that 2^0 + 2^1 + ... + 2^n = 2^(n+1) - 1 for every natural number n.',
        a: 'Base case n=0: the left side is 1, and the right side is 2^1 - 1 = 1, so they match. Inductive hypothesis: assume the formula holds for n. Add 2^(n+1) to both sides: the left side becomes the sum up through 2^(n+1), and the right side becomes (2^(n+1)-1) + 2^(n+1) = 2*2^(n+1) - 1 = 2^(n+2) - 1, which is exactly the claim for n+1.'
      },
      {
        q: 'A student writes an induction proof with a correct induction step but never checks a base case. Is the proof valid?',
        a: 'No. The induction step alone only shows that one true statement leads to the next true statement; it never establishes that any statement is actually true. Without a base case to anchor the chain, there is no confirmed starting point, so the chain P(0), P(1), P(2) never gets off the ground. Both the base case and the induction step are required.'
      },
      {
        q: 'Explain why the claim that 3 divides (n^3 - n) can be proved by induction, focusing on how the induction step connects the n case to the n+1 case.',
        a: 'The key is that (n+1)^3 - (n+1) expands and regroups into (n^3 - n) + 3n^2 + 3n. The first piece, n^3 - n, is exactly the expression the inductive hypothesis says is divisible by 3, so you can replace it with 3k for some integer k. The remaining terms, 3n^2 + 3n, are already visibly divisible by 3, so the whole sum factors as 3 times an integer.'
      },
      {
        q: 'Why does the proof that 2^n > n^2 use n = 5 as its base case instead of n = 0?',
        a: 'The table of n, n^2, and 2^n shows the inequality fails or is only an equality for n = 0 through n = 4: at n=2 and n=4 the values are equal, and at n=3, n^2 is actually larger. Only from n = 5 onward does 2^n stay permanently ahead of n^2. Since the induction step needs the base case to be genuinely true, and the algebra of the step also needs n^2 to be reasonably large, n = 5 is the smallest workable starting point.'
      },
      {
        q: 'Fibonacci numbers are defined using strong recursion instead of ordinary recursion. Transfer this idea: would a sequence defined by b(n+1) = b(n) + b(n-1) + b(n-2) need strong or ordinary recursion, and why?',
        a: 'It would need strong recursion, because each new term depends on three earlier terms (b(n), b(n-1), and b(n-2)), not just the single immediately preceding term. Ordinary recursion only reaches back one step, so it cannot express a rule that needs values from two or three steps back. A proof about such a sequence would also need strong induction, since the inductive hypothesis would need to cover more than just the case at n.'
      },
      {
        q: 'What is the inductive hypothesis in an ordinary induction proof, versus a strong induction proof?',
        a: 'In ordinary induction, the inductive hypothesis is the single assumption P(n): the statement is true for one specific natural number n. In strong induction, the inductive hypothesis is "P(k) is true for every natural number k less than n," a whole range of assumed cases rather than just one. Strong induction is needed whenever proving the n case genuinely depends on more than the single case directly before it.'
      },
      {
        q: 'Prove that 3 divides (n^3 - n) at the base case n = 0.',
        a: 'At n = 0, n^3 - n equals 0^3 - 0, which is 0. Since 0 = 3 times 0, 0 is divisible by 3, so the base case holds.'
      },
      {
        q: 'A 2^n by 2^n grid with one square removed can always be tiled by L-shaped trominoes. Transfer this idea: if you doubled the grid size again, from an 8x8 board to a 16x16 board (still missing one square), how would you extend the tiling argument?',
        a: 'Split the 16x16 grid into four 8x8 quadrants. The missing square falls inside exactly one quadrant. Place one L-tromino at the very center of the 16x16 grid, covering one corner square in each of the other three quadrants. Now every quadrant is an 8x8 grid missing exactly one square, so the already-solved 8x8 case (21 trominoes each) tiles all four quadrants, giving 1 + 4*21 = 85 trominoes total.'
      },
      {
        q: 'Why is the sum of the first n odd numbers a good candidate for an induction proof, structurally speaking?',
        a: 'The sum grows by exactly one new term, the next odd number, each time n increases by one. This means the induction step only has to show that adding one specific new term to the assumed formula for n produces exactly the formula for n+1. Sum formulas naturally match the one-step-at-a-time structure that induction is built to handle.'
      },
      {
        q: 'What is the recursive definition of the factorial function, and what does f(4) equal when unwound step by step?',
        a: 'The recursive definition is f(0) = 1, and f(n+1) = (n+1) times f(n). Unwinding: f(1) = 1 times f(0) = 1, f(2) = 2 times f(1) = 2, f(3) = 3 times f(2) = 6, f(4) = 4 times f(3) = 24. So f(4) = 24.'
      },
      {
        q: 'Elaborate on why recursively defined objects, like factorial or the Fibonacci sequence, are naturally proved by induction.',
        a: 'A recursive definition builds an object using a starting value plus a rule that produces each new case from earlier cases. Induction proves a statement using a starting case plus a rule that produces each new true case from earlier true cases. The two structures line up exactly: the base case of the proof matches the base value of the definition, and the induction step matches the recursive rule, so induction is the natural tool for proving facts about anything defined recursively.'
      },
      {
        q: 'Prove that a^(m+n) = a^m times a^n, for m fixed and induction on n, at the base case n = 0.',
        a: 'At n = 0, the left side is a^(m+0), which equals a^m. The right side is a^m times a^0, and since a^0 = 1 by definition, this is also a^m. Both sides equal a^m, so the base case holds.'
      },
      {
        q: 'A student proves (1+x)^n > nx directly by induction and finds the algebra does not work out in the induction step. Elaborate on why proving the stronger statement (1+x)^n >= 1+nx first can fix this.',
        a: 'A stronger inductive hypothesis carries more information into the induction step. Assuming (1+x)^n >= 1+nx and multiplying both sides by (1+x) produces 1 + (n+1)x + nx^2 on the right, and since nx^2 is never negative, this is at least 1 + (n+1)x, exactly the claim for n+1. The weaker statement alone does not supply enough structure for this algebra to close, which is why proving the more precise, stronger claim is sometimes the easier path.'
      },
      {
        q: 'Predict: before working through the Division Algorithm proof, what two cases do you expect the proof to split into, based on comparing n and m?',
        a: 'The natural split is n less than m, and n greater than or equal to m. When n is less than m, n itself is already the remainder with quotient 0. When n is at least m, subtracting m produces a smaller number that you can apply strong induction to, then adding m back to the resulting quotient finishes the case for n.'
      },
      {
        q: 'Why does the Division Algorithm proof need strong induction rather than ordinary induction?',
        a: 'In the case n is at least m, the proof applies the inductive hypothesis to n - m, which is generally not the same as n - 1 (it could be many steps smaller, depending on the size of m). Ordinary induction only supplies a fact about n - 1, but strong induction supplies a fact about every natural number smaller than n, including n - m whatever its exact value is.'
      },
      {
        q: 'What is the base case, and what is the induction step, in the proof that n! > 2^n for n >= 4?',
        a: 'The base case is n = 4: 4! = 24 and 2^4 = 16, and 24 is greater than 16. The induction step assumes n! > 2^n for some n >= 4, then multiplies both sides by (n+1), using the recursive definition (n+1)! = (n+1) times n!, and shows (n+1) times 2^n is greater than 2 times 2^n = 2^(n+1) because n+1 is at least 5, which is greater than 2.'
      },
      {
        q: 'Transfer this idea: the proof that every integer greater than 1 is prime or a product of primes splits n = ab with both a and b strictly between 1 and n. Explain why strong induction, not ordinary induction, is required here.',
        a: 'The factors a and b can take on any values strictly between 1 and n, not necessarily n - 1. Strong induction assumes the claim holds for every natural number less than n, so no matter what specific values a and b turn out to be, the inductive hypothesis already covers them. Ordinary induction, which only assumes the case at n - 1, would have nothing to say about a and b unless one of them happened to equal exactly n - 1.'
      },
      {
        q: "What identity about the golden ratio numbers phi and psi makes Binet's formula proof work, and where does it come from?",
        a: 'The identity is phi^2 = 1 + phi, and the same relationship psi^2 = 1 + psi holds for psi, the conjugate (partner value) of phi. Both phi and psi are defined as the two solutions of the equation x^2 = 1 + x, so this identity is built into how they were chosen. It is exactly what lets the induction step turn "phi to the power n-2, plus 1" into "phi to the power n" in the algebra.'
      },
      {
        q: "Binet's formula proof needs two base cases, n = 0 and n = 1, instead of just one. Why?",
        a: 'The Fibonacci recursive rule, F_n = F_(n-2) + F_(n-1), only applies starting at n = 2, since it needs two earlier terms to exist. Both F_0 and F_1 are starting values that are not produced by the rule itself, so both must be checked directly before the inductive step, which relies on the rule, can take over from n = 2 onward.'
      },
      {
        q: 'Predict: the well-ordering principle says every nonempty set of natural numbers has a smallest element. Before reading its proof, what proof strategy would you guess is used, given that induction is the main tool of this whole topic?',
        a: 'A reasonable guess is proof by contradiction combined with strong induction: assume a set has no smallest element, then use strong induction to show every natural number is excluded from the set, which forces the set to be empty. This matches the actual strategy used, and it shows the well-ordering principle is not a separate assumption but a consequence of strong induction.'
      },
      {
        q: 'Explain the moment in the proof that sqrt(2) is irrational where the contradiction actually appears.',
        a: 'The proof picks q as the smallest natural number such that q times sqrt(2) is also a natural number. It then shows both p and q must be even, which means half of q is a smaller natural number that still has the same property (half of q, times sqrt(2), is a natural number). Since q was assumed to be the smallest such number, finding a smaller one is a contradiction, so the original assumption that sqrt(2) is rational must be false.'
      },
      {
        q: 'Applied: use the recursive sequence a_0 = 0, a_(n+1) = 2a_n + 1 to compute a_3, then check it against the formula a_n = 2^n - 1.',
        a: 'Unwinding: a_1 = 2(0)+1 = 1, a_2 = 2(1)+1 = 3, a_3 = 2(3)+1 = 7. The formula gives a_3 = 2^3 - 1 = 8 - 1 = 7, which matches the recursive computation exactly.'
      },
      {
        q: 'Method selection: you need to prove a claim about a 2^n by 2^n grid built by splitting into four smaller quadrants each time n grows. Would ordinary induction or strong induction naturally fit, and why?',
        a: 'Ordinary induction fits, because you build the size 2^(n+1) grid directly from four copies of the size 2^n grid, the single case immediately below it, not from several different smaller sizes at once. Strong induction becomes necessary only when a proof needs cases that are not simply "one step smaller," like the Division Algorithm splitting off n - m for an arbitrary m.'
      },
      {
        q: 'Error detection: a flawed induction step for proving the sum-of-odds formula says, "the sum of the first k odd numbers is always k^2, so at k = n+1 this equals (n+1)^2." What is wrong with this step?',
        a: 'This step restates the general claim being proved instead of deriving it. It assumes the formula already holds at n+1, which is exactly the thing the induction step is supposed to establish. A correct step must instead start from the inductive hypothesis at n, group the first n terms as k^2, add the next odd number 2n+1 with real algebra, and show the result factors as (n+1)^2.'
      },
      {
        q: 'What three things should you check when reading any induction proof to confirm it is valid?',
        a: 'First, confirm the base case is actually computed and checked, not just asserted. Second, confirm the induction step genuinely uses the inductive hypothesis with algebra or logic, rather than restating the goal in general form. Third, confirm the base case matches where the induction step actually starts working, with no hidden gap between them.'
      },
      {
        q: 'Prove that 1 + 2 + 3 + ... + n = n(n+1) divided by 2 at the induction step, starting from the inductive hypothesis for k.',
        a: 'Assume 1 + 2 + ... + k = k(k+1) divided by 2. Add (k+1) to both sides: the left side becomes 1 + 2 + ... + k + (k+1), and the right side becomes k(k+1) divided by 2, plus (k+1). Factoring the right side gives (k+1) times (half of k, plus 1), which simplifies to (k+1)(k+2) divided by 2, exactly the formula for n = k+1.'
      },
      {
        q: 'Transfer this idea: the proof of 4n < 2^n for n >= 5 chains several inequality steps together instead of one algebraic rewrite. Why does an inequality proof usually need more steps than an equality proof by induction?',
        a: 'An equality proof only needs one chain of equals signs connecting the n case to the n+1 case. An inequality proof often needs several separate "less than" or "greater than" comparisons chained together, each justified by a different fact (the inductive hypothesis, a distributive step, or a numeric bound), because there is no single algebraic identity that connects both sides at once the way an equation does.'
      },
      {
        q: 'Elaborate on why the well-ordering principle and mathematical induction are described as logically equivalent proof strategies.',
        a: 'Each one can be used to prove the other. Strong induction proves the well-ordering principle by contrapositive, showing that a set with no smallest element must be empty. In the other direction, the well-ordering principle can prove induction-style results directly by picking the smallest counterexample to a claim and deriving a contradiction. Because each strategy can build the other, they capture the same underlying fact about the natural numbers.'
      },
      {
        q: 'What does it mean for the letter i to be a "bound variable" in the summation notation sum from i=m to n of a_i?',
        a: 'It means i only has meaning inside the sum itself and carries no meaning outside it. Renaming i to any other letter, such as j or k, everywhere it appears inside the sum does not change the value of the sum at all, since it is just a placeholder for "the current term being added."'
      },
      {
        q: 'Predict: before proving that inscribed polygon interior angles sum to (n-2) times 180 degrees, what geometric operation would let you reduce an (n+1)-gon down to something the inductive hypothesis already covers?',
        a: 'Drawing one diagonal that cuts off a single triangle from the (n+1)-gon, leaving behind a genuine n-gon. This matches the actual proof: the (n+1)-gon splits into a triangle (with a fixed 180 degree angle sum) plus an n-gon, which the inductive hypothesis already handles.'
      },
      {
        q: 'Prove that the interior angles of an inscribed polygon sum to (n-2) times 180 degrees, at the base case n = 3.',
        a: 'At n = 3, the polygon is a triangle, whose interior angles are known to sum to 180 degrees. The formula gives (3-2) times 180 degrees, which is also 180 degrees. Since both sides equal 180 degrees, the base case holds.'
      },
      {
        q: 'Conceptual: explain in your own words why the "ladder" picture uses two separate ideas, reaching the first rung and climbing from one rung to the next, to represent induction.',
        a: 'Climbing from rung k to rung k+1 only tells you what happens if you are already somewhere on the ladder; it never gets your foot onto the ladder in the first place. Reaching the first rung is the separate fact that actually starts the climb. Both pieces are needed together: one establishes a starting truth, and the other carries that truth forever upward.'
      },
      {
        q: 'Applied: a sequence is defined by c_0 = 1 and c_(n+1) = 3c_n. Would you expect the proof that c_n = 3^n to look most like the factorial unwinding, the sum-of-powers-of-two proof, or the Fibonacci proof, and why?',
        a: 'It would look most like the sum-of-powers-of-two proof, since both are ordinary (not strong) recursive definitions where each term depends only on the single term directly before it. The base case would check c_0 = 3^0 = 1, and the induction step would substitute the inductive hypothesis c_n = 3^n into the recursive rule c_(n+1) = 3c_n to get 3 times 3^n = 3^(n+1), matching the claim for n+1.'
      },
      {
        q: 'Why is n = 5 used as the base case for both 2^n > n^2 and 4n < 2^n, rather than two different base cases?',
        a: 'Both inequalities compare a term that grows exponentially, 2^n, against a term that grows more slowly, and both only become permanently true once 2^n has grown large enough to dominate. Checking the small values shows both comparisons fail or tie for n below 5, and both hold from n = 5 onward, so the same elevated base case works for both.'
      },
      {
        q: 'Applied: use the Division Algorithm claim to find q and r when n = 17 and m = 5.',
        a: 'Since 17 is at least 5, subtract 5 repeatedly: 17 - 5 = 12, 12 - 5 = 7, 7 - 5 = 2, and 2 is less than 5, so the process stops. That is 3 subtractions of 5, leaving a remainder of 2. So q = 3 and r = 2, and indeed 5 times 3 plus 2 equals 17, with 2 less than 5.'
      },
      {
        q: 'Elaborate on why proving a claim for a recursively defined grid, like the 2^n by 2^n L-tromino tiling, benefits from choosing a size that is a power of two rather than an arbitrary size.',
        a: 'A power-of-two size can always be split into exactly four equal, smaller power-of-two quadrants, with no leftover rows or columns. That clean split is what lets the inductive hypothesis apply to each quadrant as a smaller instance of the exact same problem. An arbitrary grid size would not divide evenly, breaking the recursive structure the proof depends on.'
      },
      {
        q: 'Prove that a^(m+n) = a^m times a^n at the induction step, showing exactly where the recursive definition of exponentiation gets used.',
        a: 'Assume a^(m+n) = a^m times a^n. By the recursive definition, a^(m+(n+1)) equals a^((m+n)+1), which equals a^(m+n) times a (first use of the definition). Substitute the inductive hypothesis: a^(m+n) times a equals (a^m times a^n) times a, which regroups to a^m times (a^n times a). By the recursive definition again, a^n times a equals a^(n+1) (second use of the definition), giving a^m times a^(n+1), the claim for n+1.'
      },
      {
        q: 'Predict: before seeing the Binet formula proof, would you expect it to use ordinary induction or strong induction, given that the Fibonacci recursive rule reaches back two steps?',
        a: 'Strong induction, since the recursive rule F_n = F_(n-2) + F_(n-1) needs facts about two different earlier terms, n-2 and n-1, not just the single term at n-1 that ordinary induction would supply.'
      },
      {
        q: "Self-explain: in the proof of Bernoulli's inequality, why is it valid to multiply both sides of the inductive hypothesis by (1+x)?",
        a: 'Multiplying both sides of an inequality by a positive number preserves the direction of the inequality. The proof only allows x > -1, which guarantees 1+x > 0, so multiplying the hypothesis (1+x)^n >= 1+nx by (1+x) keeps the inequality pointing the same way, rather than flipping it as multiplying by a negative number would.'
      },
      {
        q: 'Transfer this idea: the flawed proof of the sum-of-odds formula restated the general claim instead of deriving it. What would the analogous flaw look like in a proof of the divisibility claim 3 divides (n^3 - n)?',
        a: 'An analogous flaw would say, "assume 3 divides (n^3-n); since 3 always divides k^3-k for any k, this also holds for k = n+1." That statement is just the general claim being proved, restated at n+1, without ever expanding (n+1)^3 - (n+1) and showing it factors into 3 times something. It skips the actual algebra that connects the n case to the n+1 case.'
      },
      {
        q: "What two numbers make up the base case of Binet's formula, and what are their values?",
        a: 'The base cases are n = 0 and n = 1. At n = 0, the formula gives F_0 = 0, matching the definition. At n = 1, the formula gives F_1 = 1, matching the definition, using the fact that phi minus psi equals the square root of 5.'
      },
      {
        q: 'Conceptual: why does the proof that every integer greater than 1 is prime or a product of primes not need a separate base case written out explicitly?',
        a: 'It uses strong induction, whose inductive hypothesis, "the claim holds for every k strictly between 1 and n," is vacuously true when n = 2 (there are no integers strictly between 1 and 2). This means the smallest case is automatically covered by the general argument itself, without needing a separately stated base case.'
      },
      {
        q: 'Applied: verify the claim a_n = 2^n - 1 at n = 5 using both the table of values and the formula.',
        a: 'The table gives a_5 = 31 from unwinding the recursion. The formula gives 2^5 - 1 = 32 - 1 = 31. Both methods agree, confirming the formula at n = 5.'
      },
      {
        q: 'Predict: given that the tromino tiling proof places one tile at the center of the grid, what would happen to the proof if that central tile were left out?',
        a: 'Without the central tile, three of the four quadrants would have zero missing squares (a full, untileable shape by L-trominoes, since 3 does not divide evenly leaving no gap), while only one quadrant would have the required single missing square. The inductive hypothesis only applies to grids missing exactly one square, so three of the four quadrants would not match its conditions, and the argument would break down.'
      },
      {
        q: 'Elaborate on why the phrase "for every natural number k less than n" in the strong induction hypothesis is more powerful than "for n" alone.',
        a: 'It bundles together every smaller case at once, not just the single case directly before n. This matters whenever the n case depends on a value that is not simply n - 1, such as a factor a in n = ab, or a remainder n - m for an arbitrary m. Ordinary induction, with its single-case hypothesis, has nothing to offer for those situations, but strong induction always has the needed fact ready.'
      }
    ],
    reference: {
      category: 'Quick Reference',
      title: 'Mathematical Induction',
      sections: [
        <>
          <div className="ref-header">
            <span className="ref-label">Hero Formulas</span>
          </div>
          <div className="ref-formula">
            <span className="ref-formula-name">Principle of Mathematical Induction</span>
            <div className="ref-formula-eq">
              {`$$P(0) \\text{ true, and } P(n) \\Rightarrow P(n+1) \\text{ for every } n \\ \\ \\Longrightarrow \\ \\ P(n) \\text{ true for every natural number } n$$`}
            </div>
            <p className="ref-formula-desc">{`When to use: any claim about "every natural number n," proved with a base case plus a step that builds n+1 from n.`}</p>
          </div>
          <div className="ref-formula">
            <span className="ref-formula-name">Strong Induction</span>
            <div className="ref-formula-eq">
              {`$$\\bigl[P(k) \\text{ true for all } k < n\\bigr] \\Rightarrow P(n) \\text{, for every } n \\ \\ \\Longrightarrow \\ \\ P(n) \\text{ true for every natural number } n$$`}
            </div>
            <p className="ref-formula-desc">{`When to use: the n case depends on a smaller case that is not simply n-1, such as a factor split or a sequence built from two or more earlier terms.`}</p>
          </div>
        </>,

        <>
          <div className="ref-header">
            <span className="ref-label">Sums of Powers</span>
          </div>
          <table>
            <thead>
              <tr>
                <th>Sum</th>
                <th>Formula</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{`$\\sum_{k=1}^{n} 1$`}</td>
                <td>{`$n$`}</td>
              </tr>
              <tr>
                <td>{`$\\sum_{k=1}^{n} k$`}</td>
                <td>{`$\\frac{n(n+1)}{2}$`}</td>
              </tr>
              <tr>
                <td>{`$\\sum_{k=1}^{n} k^2$`}</td>
                <td>{`$\\frac{n(n+1)(2n+1)}{6}$`}</td>
              </tr>
              <tr>
                <td>{`$\\sum_{k=1}^{n} k^3$`}</td>
                <td>{`$\\frac{n^2(n+1)^2}{4}$`}</td>
              </tr>
            </tbody>
          </table>
          <p className="ref-formula-desc">{`When to use: each formula follows from the same base-case-plus-step pattern as the sum of the first n natural numbers; use them directly.`}</p>
        </>,

        <>
          <div className="ref-header">
            <span className="ref-label">Terminology</span>
          </div>
          <div className="ref-grid">
            <div className="ref-item">
              <span className="ref-formula-name">Base case</span>
              <p>{`The step that checks the statement directly for the starting number.`}</p>
            </div>
            <div className="ref-item">
              <span className="ref-formula-name">Inductive hypothesis</span>
              <p>{`The assumption that the statement is already true, used inside the induction step.`}</p>
            </div>
            <div className="ref-item">
              <span className="ref-formula-name">Induction step</span>
              <p>{`The argument that turns the inductive hypothesis into the statement for the next case.`}</p>
            </div>
            <div className="ref-item">
              <span className="ref-formula-name">Elevated base case</span>
              <p>{`A base case at n=4, n=5, or another starting point above 0, used when the statement is only true from that point on.`}</p>
            </div>
          </div>
        </>,

        <>
          <div className="ref-header">
            <span className="ref-label">Recursive Definitions</span>
          </div>
          <div className="ref-formula">
            <span className="ref-formula-name">Factorial</span>
            <div className="ref-formula-eq">{`$$f(0) = 1, \\qquad f(n+1) = (n+1) \\cdot f(n)$$`}</div>
            <p className="ref-formula-desc">{`When to use: computing n! or proving facts that compare n! to another quantity, such as n! > 2^n.`}</p>
          </div>
          <div className="ref-formula">
            <span className="ref-formula-name">Exponentiation</span>
            <div className="ref-formula-eq">{`$$a^0 = 1, \\qquad a^{n+1} = a^n \\cdot a$$`}</div>
            <p className="ref-formula-desc">{`When to use: proving exponent laws, such as a^(m+n) = a^m times a^n, by induction on the exponent.`}</p>
          </div>
          <div className="ref-formula">
            <span className="ref-formula-name">Summation</span>
            <div className="ref-formula-eq">{`$$\\sum_{i=m}^{m} a_i = a_m, \\qquad \\sum_{i=m}^{n+1} a_i = \\sum_{i=m}^{n} a_i + a_{n+1}$$`}</div>
            <p className="ref-formula-desc">{`When to use: unwinding or proving facts about a sum with an arbitrary starting index m.`}</p>
          </div>
        </>,

        <>
          <div className="ref-header">
            <span className="ref-label">Fibonacci and Binet's Formula</span>
          </div>
          <div className="ref-formula">
            <span className="ref-formula-name">Fibonacci recurrence</span>
            <div className="ref-formula-eq">{`$$F_0 = 0, \\qquad F_1 = 1, \\qquad F_n = F_{n-2} + F_{n-1} \\ (n \\geq 2)$$`}</div>
            <p className="ref-formula-desc">{`When to use: this is strong recursion, needed whenever a term depends on two or more earlier terms.`}</p>
          </div>
          <div className="ref-formula">
            <span className="ref-formula-name">Binet's Formula</span>
            <div className="ref-formula-eq">{`$$F_n = \\frac{\\left(\\frac{1+\\sqrt{5}}{2}\\right)^n - \\left(\\frac{1-\\sqrt{5}}{2}\\right)^n}{\\sqrt{5}}$$`}</div>
            <p className="ref-formula-desc">{`When to use: computing a Fibonacci term directly without unwinding every earlier term.`}</p>
          </div>
        </>,

        <>
          <div className="ref-header">
            <span className="ref-label">Other Key Results</span>
          </div>
          <div className="ref-formula">
            <span className="ref-formula-name">Bernoulli's Inequality</span>
            <div className="ref-formula-eq">{`$$(1+x)^n \\geq 1 + nx, \\quad \\text{for } x > -1$$`}</div>
            <p className="ref-formula-desc">{`When to use: bounding a power of (1+x) from below; often proving this stronger form is easier than a weaker-looking direct claim.`}</p>
          </div>
          <div className="ref-formula">
            <span className="ref-formula-name">Division Algorithm</span>
            <div className="ref-formula-eq">{`$$n = mq + r, \\qquad 0 \\leq r < m$$`}</div>
            <p className="ref-formula-desc">{`When to use: expressing any natural number n as a multiple of m plus a remainder smaller than m; proved by strong induction.`}</p>
          </div>
          <div className="ref-formula">
            <span className="ref-formula-name">Well-Ordering Principle</span>
            <div className="ref-formula-eq">{`$$\\text{Every nonempty set of natural numbers has a smallest element.}$$`}</div>
            <p className="ref-formula-desc">{`When to use: arguing from "the smallest counterexample" or "the smallest number with a given property," as an alternative to writing out an induction step.`}</p>
          </div>
        </>
      ]
    },
    customCss: null
  }
  return config
}

export default function MathematicalInduction() {
  const config = useConfig()
  return <LearningTemplate config={config} />
}
