import { LearningTemplate } from '../../../../components/learning/learning-template'
import {
  APvsGPDiscreteViz,
  PartialSumsZenoViz,
  FibonacciRatioViz
} from '../../../../components/viz'

function useConfig() {
  const config = {
    cssPrefix: 'rcr',
    documentTitle: 'Recurrence Relations - AETHER',
    learning: {
      groupTitle: 'Sequences, Series and the Binomial Theorem',
      category: 'Recurrence Relations',
      title: 'Recurrence Relations',
      subtitle:
        'A rule that builds each term of a sequence from the terms before it, not from one direct formula.',
      sections: [
        <>
          <h2>What a Recurrence Relation Is</h2>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>{`Look at $1, 3, 7, 15, 31, \\ldots$. Each number is more than double the one before it. Guess the rule connecting one term to the next, before reading on.`}</p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>{`Each term is double the previous term, plus one: $3 = 2(1)+1$, $7=2(3)+1$, $15=2(7)+1$. That rule, written using the term before it, is a recurrence relation.`}</p>
            </details>
          </div>

          <p>{`You already know how to label a sequence's terms $a_1, a_2, a_3, \\ldots$ and how to name the $n$th term $a_n$. You met this in Sequences and Series. A recurrence relation gives you $a_n$ from $a_{n-1}$, the term one place before it. Here $a_{n-1}$ just means the term one before $a_n$. Some recurrences use several earlier terms.`}</p>

          <div className="lrn-definition">
            <span className="lrn-definition-term">Recurrence relation</span>
            <div className="lrn-definition-desc">
              <p>{`A rule that defines each term of a sequence using one or more of the terms that came before it. To find term 50, you first need term 49, which needs term 48, and so on back to the start.`}</p>
            </div>
          </div>

          <p>{`This is different from a closed form. A closed form is a direct formula like $a_n = 2n+1$. It lets you jump straight to any term without working through the ones before it. Much of this topic turns a recurrence into a closed form, so you can find any term instantly.`}</p>

          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>{`Many real patterns are naturally described step by step. A bank balance grows by adding interest to last month's balance. A bacteria colony doubles from its current size. A population grows by a fixed percentage of what it already is. A recurrence relation is just the mathematical way of writing "start here, then repeat this step."`}</p>
          </div>

          <p>{`This lesson builds recurrences from simple to complex. First come arithmetic and geometric progressions, the two simplest first-order recurrences, and their sums. Then a recurrence that builds each term from itself, like double-and-add-one. Then second-order recurrences, where each term needs the two before it. That path leads to the golden ratio and to Fibonacci's closed form. It ends with an infinite recurrence hiding inside a famous race paradox.`}</p>
        </>,

        <>
          <h2>The Two Simplest Recurrences: Add or Multiply</h2>

          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Arithmetic progression (AP)</span>
              <p>{`Each term is the previous term plus a fixed amount $d$, the common difference. As a recurrence: $a_n = a_{n-1}+d$. Change is additive.`}</p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Geometric progression (GP)</span>
              <p>{`Each term is the previous term times a fixed amount $r$, the common ratio. As a recurrence: $a_n = r \\cdot a_{n-1}$. Change is multiplicative.`}</p>
            </div>
          </div>

          <div className="lrn-graph">
            <APvsGPDiscreteViz />
          </div>

          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>{`Compare $3, 5, 7, 9, \\ldots$ with $3, 6, 12, 24, \\ldots$. One is built by adding the same number each step. The other is built by multiplying by the same number. Which is which?`}</p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>{`The first adds $2$ each step, so it is an AP with $d=2$. The second multiplies by $2$ each step, so it is a GP with $r=2$. Adding builds an AP; multiplying builds a GP.`}</p>
            </details>
          </div>

          <p>{`These two recurrences are so common that their closed forms are worth knowing by heart. Seen through the recurrence lens, each closed form is just the solution of a simple recurrence. Use an AP when a quantity changes by the same fixed amount each step, like a flat monthly deposit. Use a GP when it grows or shrinks by the same fixed factor, like compound interest or radioactive decay.`}</p>

          <h3>{`The Direct Formula for the $n$th Term`}</h3>

          <p>{`An AP with first term $a$ and common difference $d$ adds one more $d$ at each step. By the $n$th term you have added $d$ exactly $n-1$ times, because the first term used zero $d$'s. That gives the closed form of the recurrence $a_n=a_{n-1}+d$:`}</p>

          <div className="lrn-eq lrn-eq-hero">
            <span>{`$$a_n = a + (n-1)d$$`}</span>
          </div>

          <p>{`A GP with first term $a$ and common ratio $r$ works the same way, but multiplying replaces adding. By the $n$th term you have multiplied by $r$ exactly $n-1$ times. That gives the closed form of the recurrence $a_n=r\\,a_{n-1}$:`}</p>

          <div className="lrn-eq lrn-eq-hero">
            <span>{`$$a_n = a \\cdot r^{n-1}$$`}</span>
          </div>

          <div className="lrn-callout">
            <span className="lrn-callout-label">Note</span>
            <p>{`A common ratio of $0$ is allowed. The sequence $1, 0, 0, 0, \\ldots$ is a strange but valid GP, since every term after the first is the previous term times $0$.`}</p>
          </div>

          <h3>Quick Facts You Already Proved</h3>

          <p>{`Reversing an AP flips the sign of $d$. Reversing a GP turns the ratio into $\\frac{1}{r}$. Keeping only every $k$th term makes the AP difference $kd$ and the GP ratio $r^k$, because you skip $k-1$ full steps between kept terms.`}</p>

          <p>{`You can also recover a missing middle term. In an AP, the middle of the first and third terms is their average $\\frac{a+b}{2}$, since it sits exactly halfway between them. In a GP the middle term $x$ obeys $x^2=ab$, so $x=\\pm\\sqrt{ab}$. Both signs can give a real GP: $1, 2, 4$ and $1, -2, 4$ are both genuine.`}</p>

          <p>{`Doubling colonies are just GPs with ratio $2$. If a colony fills a jar in $30$ minutes from one cell, starting with two cells fills it in $29$ minutes. Two cells already equal one cell after a single doubling, so you skip one step.`}</p>
        </>,

        <>
          <h2>Solving These Recurrences: Adding Up Their Terms</h2>

          <p>{`A running total is itself a recurrence: the total after $n$ terms is the previous total plus one more term. So each sum formula below is just the closed form of a running-total recurrence. Both are standard results, so here you only read them through the recurrence lens.`}</p>

          <h3>Sum of an Arithmetic Progression</h3>

          <p>{`An AP is the recurrence $a_n = a_{n-1}+d$. The sum of its first $n$ terms, with first term $a$ and last term $b$, has the closed form:`}</p>

          <div className="lrn-eq lrn-eq-hero">
            <span>{`$$S = \\frac{n(a+b)}{2}$$`}</span>
          </div>

          <p>{`If you know $n$ but not the last term, substitute $b=a+(n-1)d$ to get the equal form $S=\\frac{n}{2}\\big(2a+(n-1)d\\big)$. For example, the odd numbers $1, 3, 5, \\ldots, 999$ form an AP with $500$ terms, so $S=\\frac{500(1+999)}{2}=250\\,000$.`}</p>

          <h3>Sum of a Geometric Progression</h3>

          <p>{`A GP is the recurrence $a_n = r\\cdot a_{n-1}$. The sum of its first $n$ terms, with first term $a$ and common ratio $r$, has the closed form:`}</p>

          <div className="lrn-eq lrn-eq-hero">
            <span>{`$$S = \\frac{a(r^n-1)}{r-1}$$`}</span>
          </div>

          <p>{`This closed form comes from telescoping: multiply the whole sum by $r$ and subtract, so almost every term cancels with a partner and only the ends survive.`}</p>

          <div className="lrn-definition">
            <span className="lrn-definition-term">Telescoping</span>
            <div className="lrn-definition-desc">
              <p>{`A trick where you line up two nearly identical sums so almost every term cancels with a partner, like a telescope folding shut, leaving only a few end terms behind.`}</p>
            </div>
          </div>

          <div className="lrn-callout">
            <span className="lrn-callout-label">Note</span>
            <p>{`When $r=1$ this formula gives $\\frac{0}{0}$, undefined. That gap makes sense. If $r=1$ every term is just $a$, so the sum is simply $na$, and no formula is needed.`}</p>
          </div>
        </>,

        <>
          <h2>The Doubling Recurrence: A Sequence Built From Itself</h2>

          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>{`The sequence $1, 3, 7, 15, 31, \\ldots$ follows the rule "double the last term, then add one." Predict whether this sequence is a plain AP, a plain GP, or neither.`}</p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>{`Neither. The gaps between terms ($2,4,8,16,\\ldots$) are not constant, so it is not an AP. The ratios between terms ($3\\div1=3$, $7\\div3\\approx2.33$) are not constant either, so it is not a GP. It needs its own closed-form solution.`}</p>
            </details>
          </div>

          <p>{`Use this technique whenever a term is built from the previous term using its own little formula, like "double and add one," rather than a plain add-a-fixed-amount or multiply-by-a-fixed-amount rule.`}</p>

          <p>{`This recurrence is $a_1=1$ and $a_n = 2a_{n-1}+1$ for every later term. Finding the 100th term by repeating the rule 99 times takes too long, so look for a closed form instead.`}</p>

          <p>{`The trick is to add a constant to both sides so the "+1" disappears. Add $1$ to both sides of the recurrence:`}</p>

          <div className="lrn-eq">
            <span>{`$$a_n + 1 = 2a_{n-1} + 2 = 2(a_{n-1}+1)$$`}</span>
          </div>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>{`Why does adding exactly $1$, and not some other number, make this work?`}</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>{`You want a constant $c$ so that $a_n+c = 2(a_{n-1}+c)$. Expanding the right side gives $2a_{n-1}+2c$. Since $a_n=2a_{n-1}+1$, matching the constants requires $2c=1+c$, so $c=1$. Only $c=1$ turns the messy recurrence into a clean doubling one.`}</p>
            </details>
          </div>

          <p>{`Let $b_n = a_n+1$. Then $b_n = 2 b_{n-1}$, a plain GP with ratio $2$ and first term $b_1=a_1+1=2$. Its closed form is $b_n = 2 \\cdot 2^{n-1} = 2^n$. Undoing the substitution:`}</p>

          <div className="lrn-eq lrn-eq-hero">
            <span>{`$$a_n = 2^n - 1$$`}</span>
          </div>

          <p>{`So the 100th term is $a_{100} = 2^{100}-1$, found without ever computing the 99 terms in between.`}</p>

          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>{`This shift trick works for any recurrence of the form $a_n = k\\cdot a_{n-1}+m$ (multiply by a constant, then add a constant). Adding the right constant $c=\\frac{m}{k-1}$ to both sides always removes the "$+m$" and leaves a plain GP underneath, as long as $k\\neq 1$.`}</p>
          </div>
        </>,

        <>
          <h2>Second-Order Recurrences: When Two Terms Back Matter</h2>

          <p>{`Use a second-order recurrence whenever each new term needs the two terms before it, not just the one right in front. The Fibonacci growth pattern is the most famous example of this.`}</p>

          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">First-order recurrence</span>
              <p>{`Each term depends on only the one term right before it, like $a_n=a_{n-1}+d$ or $a_n=2a_{n-1}+1$. Knowing one previous term is always enough to find the next.`}</p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Second-order recurrence</span>
              <p>{`Each term depends on the two terms before it, like $a_n=a_{n-1}+a_{n-2}$. Knowing only one previous term is not enough; you need the last two.`}</p>
            </div>
          </div>

          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>{`Suppose a sequence follows "each term is the sum of the two terms right before it," and suppose it is also a geometric progression. Predict whether such a sequence could exist.`}</p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>{`Yes, but only for two very specific common ratios, found by solving a quadratic equation, as shown below.`}</p>
            </details>
          </div>

          <h3>The Golden-Ratio Recurrence</h3>

          <p>{`Suppose a GP with common ratio $r$ also satisfies $a_n = a_{n-1}+a_{n-2}$ (each term is the sum of the two before it). Since it is a GP, $a_n = r\\, a_{n-1}$ and $a_{n-1}=r\\,a_{n-2}$. Substituting both into the sum rule:`}</p>

          <div className="lrn-faded">
            <div className="lrn-faded-phase">
              <span className="lrn-faded-label">COMPLETE EXAMPLE</span>
              <p>{`Start from $a_n = a_{n-1}+a_{n-2}$. Replace $a_n$ with $r\\,a_{n-1}$:`}</p>
              <div className="lrn-eq">
                <span>{`$$r\\, a_{n-1} = a_{n-1} + a_{n-2}$$`}</span>
              </div>
              <p>{`Divide every term by $a_{n-2}$, and use $a_{n-1}=r\\,a_{n-2}$ so that $\\frac{a_{n-1}}{a_{n-2}}=r$:`}</p>
              <div className="lrn-eq">
                <span>{`$$r^2 = r + 1$$`}</span>
              </div>
              <p>{`This is a quadratic equation, an equation with a squared unknown. You solve it fully in Quadratic Equations. Rearranged to $r^2-r-1=0$, the quadratic formula gives:`}</p>
              <div className="lrn-eq lrn-eq-hero">
                <span>{`$$r = \\frac{1 \\pm \\sqrt{5}}{2}$$`}</span>
              </div>
              <p>{`Here $\\sqrt5$ is irrational: you cannot write it as a simple fraction. The two roots are the golden ratio $\\varphi = \\frac{1+\\sqrt{5}}{2} \\approx 1.618$ and its conjugate $\\psi = \\frac{1-\\sqrt{5}}{2} \\approx -0.618$.`}</p>
            </div>
            <div className="lrn-faded-phase">
              <span className="lrn-faded-label">YOUR TURN, PARTIAL</span>
              <p>{`Confirm $\\varphi=\\frac{1+\\sqrt{5}}{2}$ really satisfies $r^2=r+1$.`}</p>
              <ol className="lrn-list">
                <li>{`Square $\\varphi$: expand $\\left(\\frac{1+\\sqrt{5}}{2}\\right)^2$. (Fill in the expansion.)`}</li>
                <li>{`Simplify to a single fraction.`}</li>
                <li>{`Compute $\\varphi+1 = \\frac{1+\\sqrt5}{2}+1$ as a single fraction.`}</li>
                <li>{`Check the two fractions from steps 2 and 3 match.`}</li>
              </ol>
            </div>
            <div className="lrn-faded-phase">
              <span className="lrn-faded-label">INDEPENDENT PRACTICE</span>
              <p>{`On your own, check that the other root $\\psi=\\frac{1-\\sqrt5}{2}$ also satisfies $r^2=r+1$.`}</p>
            </div>
          </div>

          <div className="lrn-definition">
            <span className="lrn-definition-term">Characteristic equation</span>
            <div className="lrn-definition-desc">
              <p>{`The equation $r^2=r+1$ you just found. Its roots are the only common ratios a GP obeying $a_n=a_{n-1}+a_{n-2}$ can have. Every second-order recurrence of this kind has its own characteristic equation, and its roots drive the closed form.`}</p>
            </div>
          </div>

          <div className="lrn-callout">
            <span className="lrn-callout-label">Note</span>
            <p>{`A conjugate is the partner root you get by flipping the sign in front of $\\sqrt5$. So $\\varphi=\\frac{1+\\sqrt5}{2}$ and $\\psi=\\frac{1-\\sqrt5}{2}$ are conjugates. They are the two roots of $r^2-r-1=0$.`}</p>
          </div>

          <h3>Fibonacci's Closed Form</h3>

          <p>{`The Fibonacci sequence $1, 1, 2, 3, 5, 8, 13, 21, \\ldots$ follows the same rule: each term is the sum of the two before it. But Fibonacci is not itself a GP. The ratio between consecutive terms keeps changing: $\\frac{1}{1}=1$, $\\frac{2}{1}=2$, $\\frac{3}{2}=1.5$, $\\frac{5}{3}\\approx1.67$. These ratios slowly narrow in on $\\varphi$ without ever becoming constant.`}</p>

          <div className="lrn-graph">
            <FibonacciRatioViz />
          </div>

          <p>{`Even so, the same characteristic equation $r^2=r+1$ gives Fibonacci a closed form. Any sequence obeying $a_n=a_{n-1}+a_{n-2}$ can be written as a combination of the two root-powers $\\varphi^n$ and $\\psi^n$:`}</p>

          <div className="lrn-eq">
            <span>{`$$a_n = A\\varphi^n + B\\psi^n$$`}</span>
          </div>

          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>{`The recurrence $a_n=a_{n-1}+a_{n-2}$ is linear. So adding two solutions, or scaling one by a constant, always produces another solution. $\\varphi^n$ and $\\psi^n$ are the two simplest solutions. Blending them with the right amounts $A$ and $B$ lets you match any starting pair of terms, including Fibonacci's $1,1$.`}</p>
          </div>

          <p>{`Find $A$ and $B$ using the first two Fibonacci terms, $a_1=1$ and $a_2=1$. Writing the closed form for $n=1$ and $n=2$ gives two equations:`}</p>

          <div className="lrn-eq">
            <span>{`$$A\\varphi + B\\psi = 1 \\qquad A\\varphi^2 + B\\psi^2 = 1$$`}</span>
          </div>

          <p>{`Each root satisfies the characteristic equation, so $\\varphi^2=\\varphi+1$ and $\\psi^2=\\psi+1$. Substitute these into the second equation:`}</p>

          <div className="lrn-eq">
            <span>{`$$A(\\varphi+1) + B(\\psi+1) = 1$$`}</span>
          </div>

          <p>{`Group the two kinds of terms:`}</p>

          <div className="lrn-eq">
            <span>{`$$(A\\varphi + B\\psi) + (A+B) = 1$$`}</span>
          </div>

          <p>{`The first bracket equals $1$, straight from the first equation. So $1+(A+B)=1$, which forces $A+B=0$, meaning $B=-A$. Put $B=-A$ back into the first equation:`}</p>

          <div className="lrn-eq">
            <span>{`$$A\\varphi - A\\psi = 1 \\quad\\Rightarrow\\quad A(\\varphi-\\psi)=1$$`}</span>
          </div>

          <p>{`The two roots differ by $\\varphi-\\psi=\\frac{1+\\sqrt5}{2}-\\frac{1-\\sqrt5}{2}=\\sqrt5$. So $A\\sqrt5=1$, which gives $A=\\frac{1}{\\sqrt5}$ and then $B=-\\frac{1}{\\sqrt5}$. Substituting these back gives Fibonacci's closed form, known as Binet's formula:`}</p>

          <div className="lrn-eq lrn-eq-hero">
            <span>{`$$a_n = \\frac{\\varphi^n - \\psi^n}{\\sqrt{5}}$$`}</span>
          </div>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>{`Why does the golden-ratio quadratic from the GP problem show up again in Fibonacci's formula, even though Fibonacci is not a GP?`}</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>{`Both problems ask the same underlying question: which powers $r^n$ satisfy $a_n=a_{n-1}+a_{n-2}$? That question always reduces to $r^2=r+1$. A GP uses just one of the two roots on its own; Fibonacci uses a blend of both roots at once, weighted by $A$ and $B$ so the starting terms come out right.`}</p>
            </details>
          </div>
        </>,

        <>
          <h2>An Infinite Recurrence: Zeno's Race</h2>

          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>{`Add $1+\\frac{1}{10}+\\frac{1}{100}+\\frac{1}{1000}+\\cdots$ forever. Predict whether this total keeps growing without bound, or settles on one specific finite number.`}</p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>{`It settles on a finite number, because each new term is ten times smaller than the one before it, so the extra amount added shrinks toward nothing.`}</p>
            </details>
          </div>

          <div className="lrn-callout">
            <span className="lrn-callout-label">Note</span>
            <p>{`An infinite series has no sum at all until you first define what "sum" means for infinitely many terms. The methods below are the standard way mathematicians define it, and they all agree.`}</p>
          </div>

          <p>{`For a GP with first term $a$ and common ratio $r$ where $|r|<1$, the terms shrink toward nothing, and the whole infinite sum settles on a finite value:`}</p>

          <div className="lrn-eq lrn-eq-hero">
            <span>{`$$a + ar + ar^2 + \\cdots = \\frac{a}{1-r}, \\quad |r|<1$$`}</span>
          </div>

          <p>{`Seen as a recurrence, this same idea resolves Zeno's paradox of Achilles and the tortoise. Achilles runs ten times as fast as a tortoise with a head start. Each time Achilles reaches where the tortoise just was, the tortoise has crept ahead by $\\frac{1}{10}$ of that last gap.`}</p>

          <p>{`Call the total extra distance $S$. Here is the key move. After Achilles closes the first head start, the rest of the chase looks exactly like the whole chase, only shrunk to $\\frac{1}{10}$ the size. That gives a recurrence for $S$ in terms of itself:`}</p>

          <div className="lrn-eq lrn-eq-hero">
            <span>{`$$\\frac{S}{10} + 1 = S$$`}</span>
          </div>

          <p>{`Solving: $1 = S - \\frac{S}{10} = \\frac{9}{10}S$, so $S=\\frac{10}{9}$. Achilles catches the tortoise after a finite extra distance of $\\frac{10}{9}$.`}</p>

          <div className="lrn-graph">
            <PartialSumsZenoViz />
          </div>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>{`Why does $\\frac{S}{10}+1=S$ correctly represent the whole infinite chase, not just the first two steps?`}</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>{`After Achilles closes the first gap of $1$, whatever remains of the chase from that point on looks exactly like the original chase, just shrunk by a factor of $\\frac{1}{10}$ (since the new head start is $\\frac{1}{10}$ the old one). So the total remaining distance is $\\frac{S}{10}$, and adding the first step's distance of $1$ recovers the whole original total $S$.`}</p>
            </details>
          </div>

          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">{`Convergent ($|r|<1$)`}</span>
              <p>{`Convergent means the running total narrows down to one fixed number. With $r=\\frac{1}{10}$, the extra distance shrinks to nothing, the sum settles at a finite $\\frac{10}{9}$, and Achilles genuinely catches the tortoise.`}</p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">{`Divergent ($|r|\\geq 1$)`}</span>
              <p>{`Divergent means the running total never settles. Plugging $r=10$ into the same formula "gives" $\\frac{1}{1-10}=-\\frac{1}{9}$, a negative, absurd result. This signals the formula does not apply: with $r=10$, each gap grows tenfold instead of shrinking.`}</p>
            </div>
          </div>

          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>{`The self-reference trick $\\frac{S}{10}+1=S$ only makes sense if "the rest of the chase" is genuinely smaller than the whole chase. That requires $|r|<1$. When $r\\geq1$, each new leftover piece is the same size or bigger than the last. There is no shrinking remainder to reason about, so the algebra silently produces a meaningless answer instead of failing loudly.`}</p>
          </div>
        </>
      ]
    },
    practice: [
      {
        q: 'The sequence $1, 2, 3, 4, 5, \\ldots$ is an arithmetic progression. What is its 1000th term, and why?',
        a: 'The 1000th term is $1000$. This AP has first term $a=1$ and common difference $d=1$. Using the nth-term formula $a_n=a+(n-1)d$: $a_{1000}=1+999(1)=1000$. Each term simply equals its own position, since the difference is $1$.'
      },
      {
        q: 'A recurrence relation says "each term is double the previous term, plus one," starting from $1$. Predict the third term before computing it, then check your answer.',
        a: 'Starting at $a_1=1$: $a_2=2(1)+1=3$, $a_3=2(3)+1=7$. Predicting requires applying the rule step by step, since this recurrence has no shortcut yet without deriving a closed form. The third term is $7$.'
      },
      {
        q: 'An AP has first term $5$ and third term $8$. Find the second term, and explain why your method works.',
        a: 'The second term is $6.5$. It is the average of the first and third terms: $\\frac{5+8}{2}=6.5$. This works because an AP moves by the exact same amount every single step. So the middle term always sits exactly halfway between two terms that are two steps apart.'
      },
      {
        q: 'A geometric progression has first term $1$ and third term $4$. Find all possible second terms, and explain why there is more than one answer.',
        a: 'The second term is $\\pm 2$. Since $x^2=ab=1\\times4=4$, $x=\\pm2$. Both signs are valid because $1,2,4$ (ratio $2$) and $1,-2,4$ (ratio $-2$) are both genuine geometric progressions. Squaring a ratio always erases its sign, so the equation cannot tell which sign was used.'
      },
      {
        q: 'Explain, from first principles, why reversing an arithmetic progression negates its common difference.',
        a: 'Reversing a sequence swaps the direction of every step. If the original sequence increases by $d$ at each step, then reading it backwards means each step now decreases by $d$ instead. That is the same as a common difference of $-d$. The terms themselves do not change, only the direction you walk through them.'
      },
      {
        q: 'Apply the same "keep every kth term" idea used for arithmetic progressions to a geometric progression with common ratio $r=3$. What is the new common ratio if you keep only every third term?',
        a: 'The new common ratio is $r^3=27$. Keeping only every third term of a GP means skipping two full multiplication steps between each kept term, so the effective ratio between consecutive kept terms becomes $r \\times r \\times r = r^3$. With $r=3$, that is $3^3=27$.'
      },
      {
        q: 'A bacterium fills a vessel by doubling every minute, taking 30 minutes starting from one bacterium. If you start with four bacteria instead, how many minutes does it take to fill the vessel, and why?',
        a: 'It takes 28 minutes. Four bacteria is the state the colony reaches after two doublings starting from one bacterium (since $1\\to2\\to4$ takes two minutes). Starting two minutes ahead saves exactly two minutes off the original 30, giving 28 minutes.'
      },
      {
        q: 'Use the sum-of-an-AP formula to explain why the sum of the first $n$ odd numbers is always a perfect square, $n^2$.',
        a: 'The odd numbers $1,3,5,\\ldots$ form an AP with first term $a=1$ and nth term $2n-1$. Their sum is $S=\\frac{n(a+b)}{2}=\\frac{n(1+(2n-1))}{2}=\\frac{n\\cdot2n}{2}=n^2$. So adding the first $n$ odd numbers always produces the perfect square $n^2$, no matter how large $n$ is.'
      },
      {
        q: 'Apply the multiply-by-$r$ telescoping method to a new geometric progression, $1+3+9+27+81+243$ (ratio $r=3$, six terms), and find its sum.',
        a: 'The sum is $364$. Using $S=\\frac{a(r^n-1)}{r-1}=\\frac{1(3^6-1)}{3-1}=\\frac{729-1}{2}=\\frac{728}{2}=364$. Checking by direct addition: $1+3+9+27+81+243=364$, confirming the formula.'
      },
      {
        q: 'A sequence follows the rule "double the previous term, then add one," starting at $a_1=1$. Find a direct formula for $a_n$, showing the substitution trick used.',
        a: 'The formula is $a_n=2^n-1$. Add $1$ to both sides of $a_n=2a_{n-1}+1$: $a_n+1=2a_{n-1}+2=2(a_{n-1}+1)$. Letting $b_n=a_n+1$ turns this into the plain geometric progression $b_n=2b_{n-1}$, with $b_1=a_1+1=2$, so $b_n=2\\cdot2^{n-1}=2^n$. Undoing the substitution, $a_n=b_n-1=2^n-1$.'
      },
      {
        q: 'Using the closed form derived for the doubling-and-add-one recurrence, find the 100th term.',
        a: 'The 100th term is $2^{100}-1$. Using $a_n=2^n-1$ with $n=100$ gives $a_{100}=2^{100}-1$, found instantly without ever computing the 99 terms leading up to it.'
      },
      {
        q: 'Transfer: apply the same "add a constant to both sides" trick to a new recurrence, $a_n=3a_{n-1}+2$, starting at $a_1=1$. Find a direct formula for $a_n$.',
        a: 'The formula is $a_n=2\\cdot3^{n-1}-1$. Look for a constant $c$ so that $a_n+c=3(a_{n-1}+c)$. Expanding gives $3a_{n-1}+3c$, and matching against $a_n=3a_{n-1}+2$ requires $3c=2+c$, so $c=1$. Then $b_n=a_n+1$ satisfies $b_n=3b_{n-1}$, a GP with $b_1=a_1+1=2$, so $b_n=2\\cdot3^{n-1}$. Undoing the substitution: $a_n=2\\cdot3^{n-1}-1$.'
      },
      {
        q: 'Explain why the "add a constant" trick used on doubling recurrences generalizes to any recurrence of the form $a_n=k\\,a_{n-1}+m$, and state the constant needed.',
        a: 'You need a constant $c$ satisfying $a_n+c=k(a_{n-1}+c)$, which expands to $k\\,a_{n-1}+kc$. Matching this against $a_n=k\\,a_{n-1}+m$ requires $kc=m+c$, so $c=\\frac{m}{k-1}$ (as long as $k\\neq1$). Adding this specific constant to both sides always removes the "$+m$" term. That turns the recurrence into a plain geometric progression in the shifted variable $b_n=a_n+c$.'
      },
      {
        q: 'What is the key difference between a first-order recurrence and a second-order recurrence, and give one example of each.',
        a: 'A first-order recurrence finds each term using only the one term right before it, such as the arithmetic progression $a_n=a_{n-1}+d$. A second-order recurrence needs the two previous terms, such as $a_n=a_{n-1}+a_{n-2}$ (the Fibonacci-style rule). Knowing just the immediately previous term is not enough to continue a second-order recurrence; you also need the term before that.'
      },
      {
        q: 'A geometric progression satisfies $a_n=a_{n-1}+a_{n-2}$ (each term is the sum of the two before it). Find its possible common ratios, showing the characteristic equation used.',
        a: 'The possible ratios are $r=\\frac{1\\pm\\sqrt5}{2}$. Since $a_n=r\\,a_{n-1}$ and $a_{n-1}=r\\,a_{n-2}$, substituting into $a_n=a_{n-1}+a_{n-2}$ gives $r\\,a_{n-1}=a_{n-1}+a_{n-2}$. Dividing every term by $a_{n-2}$ gives the characteristic equation $r^2=r+1$, or $r^2-r-1=0$. The quadratic formula gives $r=\\frac{1\\pm\\sqrt5}{2}$, the golden ratio and its conjugate.'
      },
      {
        q: 'Verify directly that $\\varphi=\\frac{1+\\sqrt5}{2}$ satisfies $\\varphi^2=\\varphi+1$.',
        a: 'Expanding $\\varphi^2=\\left(\\frac{1+\\sqrt5}{2}\\right)^2=\\frac{1+2\\sqrt5+5}{4}=\\frac{6+2\\sqrt5}{4}=\\frac{3+\\sqrt5}{2}$. Meanwhile $\\varphi+1=\\frac{1+\\sqrt5}{2}+1=\\frac{3+\\sqrt5}{2}$. Both expressions equal $\\frac{3+\\sqrt5}{2}$, confirming $\\varphi^2=\\varphi+1$.'
      },
      {
        q: 'Why is the Fibonacci sequence not itself a geometric progression, even though it obeys the same second-order recurrence used to find the golden ratio?',
        a: 'A GP requires a single constant ratio between every pair of consecutive terms. In Fibonacci, the ratio between consecutive terms keeps changing early on ($\\frac{1}{1}=1$, $\\frac{2}{1}=2$, $\\frac{3}{2}=1.5$, $\\frac{5}{3}\\approx1.67$), only slowly narrowing toward the golden ratio $\\varphi$ without ever becoming exactly constant. Fibonacci is instead a blend of the two root-powers $\\varphi^n$ and $\\psi^n$, not a pure single-ratio sequence.'
      },
      {
        q: "Using Binet's formula $a_n=\\frac{\\varphi^n-\\psi^n}{\\sqrt5}$, confirm that the second Fibonacci term is $1$.",
        a: 'With $n=2$: $\\varphi^2=\\frac{3+\\sqrt5}{2}$ (shown above) and similarly $\\psi^2=\\frac{3-\\sqrt5}{2}$. Subtracting, $\\varphi^2-\\psi^2=\\frac{3+\\sqrt5}{2}-\\frac{3-\\sqrt5}{2}=\\frac{2\\sqrt5}{2}=\\sqrt5$. Dividing by $\\sqrt5$ gives $a_2=\\frac{\\sqrt5}{\\sqrt5}=1$, matching the known second Fibonacci term.'
      },
      {
        q: "Show how Binet's constants $A=\\frac{1}{\\sqrt5}$ and $B=-\\frac{1}{\\sqrt5}$ come from the starting terms $a_1=1$ and $a_2=1$.",
        a: 'Write the general form $a_n=A\\varphi^n+B\\psi^n$ for $n=1$ and $n=2$: $A\\varphi+B\\psi=1$ and $A\\varphi^2+B\\psi^2=1$. Since $\\varphi^2=\\varphi+1$ and $\\psi^2=\\psi+1$, the second equation becomes $(A\\varphi+B\\psi)+(A+B)=1$. The first bracket is $1$, so $A+B=0$ and $B=-A$. Then $A(\\varphi-\\psi)=1$, and $\\varphi-\\psi=\\sqrt5$, so $A=\\frac{1}{\\sqrt5}$ and $B=-\\frac{1}{\\sqrt5}$.'
      },
      {
        q: 'Transfer: a different second-order recurrence is given by $a_n=2a_{n-1}+3a_{n-2}$. Using the same method as the golden-ratio recurrence, find the characteristic equation whose roots give the possible common ratios of a GP obeying this rule.',
        a: 'The characteristic equation is $r^2=2r+3$, or $r^2-2r-3=0$. Substituting $a_n=r\\,a_{n-1}$ and $a_{n-1}=r\\,a_{n-2}$ into $a_n=2a_{n-1}+3a_{n-2}$ gives $r\\,a_{n-1}=2a_{n-1}+3a_{n-2}$. Dividing through by $a_{n-2}$ gives $r^2=2r+3$, the same style of substitution used for the golden-ratio case. Factoring gives $(r-3)(r+1)=0$, so $r=3$ or $r=-1$.'
      },
      {
        q: 'What does the finite geometric series formula predict for $1+r+r^2+\\cdots+r^{n-1}$ as $n$ grows very large, if $|r|<1$?',
        a: 'It predicts the sum approaches $\\frac{1}{1-r}$ (the general form is $\\frac{a}{1-r}$, with $a=1$ here). Since $|r|<1$, the term $r^n$ in the finite formula $\\frac{a(r^n-1)}{r-1}$ shrinks toward $0$ as $n$ grows, leaving $\\frac{a(0-1)}{r-1}=\\frac{-a}{r-1}=\\frac{a}{1-r}$, which is exactly the infinite-sum formula.'
      },
      {
        q: 'Find the infinite sum $1+\\frac{1}{10}+\\frac{1}{100}+\\frac{1}{1000}+\\cdots$, showing which formula applies and why.',
        a: 'The sum is $\\frac{10}{9}$. This is an infinite GP with first term $1$ and common ratio $r=\\frac{1}{10}$. Since $|r|<1$, the infinite-sum formula applies: $\\frac{a}{1-r}=\\frac{1}{1-\\tfrac{1}{10}}=\\frac{1}{\\tfrac{9}{10}}=\\frac{10}{9}$.'
      },
      {
        q: "In Zeno's paradox, Achilles runs ten times as fast as the tortoise. Using the self-reference equation $\\frac{S}{10}+1=S$, find the total extra distance $S$ Achilles must cover, and explain each step.",
        a: 'The total extra distance is $S=\\frac{10}{9}$. After Achilles closes the first gap (distance $1$), what remains of the chase looks exactly like the original chase shrunk by a factor of $\\frac{1}{10}$, since the new head start is one tenth the old one. That remaining amount is $\\frac{S}{10}$. Adding the first step gives the whole chase: $\\frac{S}{10}+1=S$. Rearranging, $1=S-\\frac{S}{10}=\\frac{9S}{10}$, so $S=\\frac{10}{9}$.'
      },
      {
        q: 'A classmate plugs $r=10$ into the infinite-sum formula $\\frac{1}{1-r}$ and gets $-\\frac{1}{9}$. Explain what is wrong with treating this as a real sum.',
        a: 'The formula $\\frac{1}{1-r}$ only represents a genuine infinite sum when $|r|<1$, so that later terms shrink toward zero and the total settles down. With $r=10$, each term is ten times bigger than the last, growing without bound rather than shrinking. So there is no finite total to find. Plugging $r=10$ into the formula anyway produces a number, $-\\frac{1}{9}$, but it is meaningless, since the sum it stands for never actually settles.'
      },
      {
        q: 'Why does the "sum" of a divergent geometric series, such as $1+10+100+1000+\\cdots$, computed from $\\frac{1}{1-r}$, come out negative, even though every term being added is positive?',
        a: 'The formula $\\frac{1}{1-r}$ only faithfully describes the sum when $|r|<1$. Outside that range it is just an algebraic expression with no link to the actual (non-existent) sum of the series. Substituting $r=10$ turns the denominator negative ($1-10=-9$), producing a negative result purely as a side effect of the algebra. The true sum of ever-growing positive terms could never be negative.'
      },
      {
        q: 'Transfer: a ball is dropped from $9$ meters, and each bounce rises to $\\frac{1}{3}$ the height of the previous bounce. Add up all the bounce heights after the first drop, counting each rise once, using the infinite GP sum.',
        a: 'The total bounce height is $\\frac{9}{2}$ meters. The bounce heights after the first drop form a GP with first term $a=9\\times\\frac{1}{3}=3$ and common ratio $r=\\frac{1}{3}$. Since $|r|<1$, the infinite sum is $\\frac{a}{1-r}=\\frac{3}{1-\\tfrac{1}{3}}=\\frac{3}{\\tfrac{2}{3}}=\\frac{9}{2}$ meters.'
      },
      {
        q: 'Predict: before working it out, guess whether keeping only every second term of the sequence $1,4,7,10,13,16,\\ldots$ (an AP with $d=3$) still forms an AP, and if so, what its new common difference is.',
        a: 'Keeping every second term ($1,7,13,\\ldots$) still forms an AP, with new common difference $2d=6$. Skipping one term between each kept term means each kept term is two full steps of $d=3$ ahead of the last, so the effective difference doubles to $6$.'
      },
      {
        q: 'Predict: without computing directly, decide whether the sum $1+2+4+\\cdots+2^{20}$ will be closer to $2^{20}$ or to $2^{21}$, then verify with the sum formula.',
        a: 'It will be closer to $2^{21}$. Using $S=\\frac{a(r^n-1)}{r-1}$ with $a=1,r=2,n=21$ terms (exponents $0$ through $20$): $S=\\frac{2^{21}-1}{1}=2^{21}-1$, just one less than $2^{21}$, and far more than double $2^{20}$.'
      },
      {
        q: 'Predict: a sequence is defined by $a_n=5a_{n-1}-4$, starting at $a_1=2$. Guess whether adding a constant to both sides can simplify this recurrence, and if so, what constant to try.',
        a: 'Yes, adding a constant works. Try $c$ so that $a_n+c=5(a_{n-1}+c)$, which expands to $5a_{n-1}+5c$. Matching against $a_n=5a_{n-1}-4$ requires $5c=-4+c$, so $c=-1$. Adding $-1$ (subtracting $1$) to both sides turns this into a plain GP in the shifted variable $b_n=a_n-1$.'
      }
    ],
    reference: {
      category: 'Quick Reference',
      title: 'Recurrence Relations',
      sections: [
        <>
          <h2>Core Recurrences</h2>
          <div className="lrn-eq lrn-eq-hero">
            <span>{`$$a_n = a_{n-1} + d \\qquad\\text{(arithmetic progression)}$$`}</span>
          </div>
          <div className="lrn-eq lrn-eq-hero">
            <span>{`$$a_n = r \\cdot a_{n-1} \\qquad\\text{(geometric progression)}$$`}</span>
          </div>
          <div className="ref-grid">
            <div className="ref-item">
              <span className="ref-formula-name">nth term of an AP</span>
              <span className="ref-formula-eq">{`$$a_n = a + (n-1)d$$`}</span>
              <p className="ref-formula-desc">{`When to use: to jump directly to any term of an arithmetic progression without stepping through every earlier term.`}</p>
            </div>
            <div className="ref-item">
              <span className="ref-formula-name">nth term of a GP</span>
              <span className="ref-formula-eq">{`$$a_n = a \\cdot r^{n-1}$$`}</span>
              <p className="ref-formula-desc">{`When to use: to jump directly to any term of a geometric progression without repeated multiplication.`}</p>
            </div>
          </div>
        </>,
        <>
          <h2>AP vs GP at a Glance</h2>
          <table>
            <thead>
              <tr>
                <th>Property</th>
                <th>Arithmetic Progression</th>
                <th>Geometric Progression</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Step rule</td>
                <td>{`$a_n = a_{n-1}+d$`}</td>
                <td>{`$a_n = r\\cdot a_{n-1}$`}</td>
              </tr>
              <tr>
                <td>Reversed sequence</td>
                <td>{`difference becomes $-d$`}</td>
                <td>{`ratio becomes $\\frac{1}{r}$`}</td>
              </tr>
              <tr>
                <td>{`Keep every $k$th term`}</td>
                <td>{`new difference $kd$`}</td>
                <td>{`new ratio $r^k$`}</td>
              </tr>
              <tr>
                <td>Missing middle term (from 1st, 3rd)</td>
                <td>{`average: $\\frac{a+b}{2}$`}</td>
                <td>{`$x=\\pm\\sqrt{ab}$`}</td>
              </tr>
            </tbody>
          </table>
        </>,
        <>
          <h2>Formulas for Sums</h2>
          <div className="ref-formula">
            <span className="ref-formula-name">Sum of a finite AP</span>
            <div className="ref-formula-eq">{`$$S = \\frac{n(a+b)}{2}$$`}</div>
            <p className="ref-formula-desc">{`Where $n$ is the number of terms, $a$ the first term, $b$ the last term. When to use: adding many AP terms at once, derived by reverse-and-add pairing.`}</p>
          </div>
          <div className="ref-formula">
            <span className="ref-formula-name">Sum of a finite GP</span>
            <div className="ref-formula-eq">{`$$S = \\frac{a(r^n-1)}{r-1}$$`}</div>
            <p className="ref-formula-desc">{`Where $n$ is the number of terms, $a$ the first term, $r$ the common ratio ($r\\neq1$). When to use: adding many GP terms at once, derived by multiply-by-$r$ telescoping.`}</p>
          </div>
          <div className="ref-formula">
            <span className="ref-formula-name">Sum of an infinite GP</span>
            <div className="ref-formula-eq">{`$$S = \\frac{a}{1-r}, \\quad |r|<1$$`}</div>
            <p className="ref-formula-desc">{`When to use: adding infinitely many shrinking GP terms, only valid when the common ratio's size is less than 1 (otherwise the series never settles on a finite total).`}</p>
          </div>
        </>,
        <>
          <h2>Second-Order Recurrences</h2>
          <div className="ref-formula">
            <span className="ref-formula-name">
              Characteristic equation (golden-ratio recurrence)
            </span>
            <div className="ref-formula-eq">{`$$r^2 = r + 1 \\ \\Rightarrow\\ r = \\frac{1\\pm\\sqrt5}{2}$$`}</div>
            <p className="ref-formula-desc">{`The equation whose roots are the only ratios a GP obeying $a_n=a_{n-1}+a_{n-2}$ can have. When to use: finding the common ratio of a GP where each term equals the sum of the two before it.`}</p>
          </div>
          <div className="ref-formula">
            <span className="ref-formula-name">Binet's formula (Fibonacci closed form)</span>
            <div className="ref-formula-eq">{`$$a_n = \\frac{\\varphi^n - \\psi^n}{\\sqrt5}, \\quad \\varphi=\\frac{1+\\sqrt5}{2},\\ \\psi=\\frac{1-\\sqrt5}{2}$$`}</div>
            <p className="ref-formula-desc">{`When to use: computing any Fibonacci-style term ($a_n=a_{n-1}+a_{n-2}$) directly, without stepping through every earlier term. The constants $\\frac{1}{\\sqrt5}$ and $-\\frac{1}{\\sqrt5}$ come from the starting terms $a_1=a_2=1$.`}</p>
          </div>
          <div className="ref-formula">
            <span className="ref-formula-name">Doubling-with-remainder closed form</span>
            <div className="ref-formula-eq">{`$$a_n = 2a_{n-1}+1 \\ \\Rightarrow\\ a_n = 2^n - 1$$`}</div>
            <p className="ref-formula-desc">{`When to use: solving a recurrence of the form $a_n=k\\,a_{n-1}+m$ by adding the constant $c=\\frac{m}{k-1}$ to both sides to reveal a hidden GP.`}</p>
          </div>
        </>
      ]
    },
    customCss: null
  }
  return config
}

export default function RecurrenceRelations() {
  const config = useConfig()
  return <LearningTemplate config={config} />
}
