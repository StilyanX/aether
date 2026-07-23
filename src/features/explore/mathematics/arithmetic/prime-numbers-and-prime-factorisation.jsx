import { useState, useMemo } from 'react'
import { LearningTemplate } from '../../../../components/learning/learning-template'
import { useVizColors } from '../../../../hooks/use-viz-colors'
import { VizFigure } from '../../../../components/viz-figure'
import { TexPx, Slider } from '../../../../components/viz/primitives'
import { isPrime, factor } from '../../../../components/viz/math-utils'
import { FONT_LABEL, FONT_SMALL, FONT_TEX } from '../../../../components/viz/scale-tokens'

function useConfig() {
  const config = {
    cssPrefix: 'pnp',
    documentTitle: 'Prime Numbers and Prime Factorisation - AETHER',
    learning: {
      groupTitle: 'Number Theory',
      category: 'Number Theory',
      title: 'Prime Numbers and Prime Factorisation',
      subtitle:
        'Primes are the building blocks of all whole numbers under multiplication. Factoring large numbers into primes is so hard that it secures every https connection on the internet.',
      sections: [
        // Section 0: Divisors and Primes
        <>
          <h2>What Makes a Number Prime</h2>
          <p>{`Take $12$. Its proper divisors are $2, 3, 4, 6$. A proper divisor is a factor that is not $1$ and not the number itself. We write $b \\mid n$, read $b$ divides $n$, when $b$ goes into $n$ exactly. So a proper divisor $b$ of $n$ has $b \\mid n$ and $2 \\leq b \\leq n - 1$.`}</p>
          <p>{`Divisors come in pairs. If $n = bc$ and $b$ is a proper divisor, then $c$ is a proper divisor too.`}</p>
          <p>{`A prime is a whole number greater than $1$ with no proper divisors. The number $1$ is neither prime nor composite by definition. The first few primes are $2, 3, 5, 7, 11, 13, 17, 19, 23, 29, \\ldots$`}</p>
          <p>{`A composite number is any whole number greater than $1$ that has at least one proper divisor. So $2$ is the only even prime: every even number greater than $2$ has $2$ as a proper divisor, which makes it composite.`}</p>
          <VizFigure title="What Makes a Number Prime: Rectangle Arrays" size="body" aspect="auto">
            <PrimeRectangleArraysRefined />
          </VizFigure>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>{`Which of $91$, $97$, $101$ do you think are prime? Write down your guess before reading on.`}</p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>{`$97$ and $101$ are prime. $91 = 7 \\times 13$ is composite. Ending in $1$ does not make a number prime. You must check divisors to confirm.`}</p>
            </details>
          </div>
          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Prime</span>
              <p>{`No proper divisors exist. Only $1$ and itself divide it. Examples: $7$, $101$, $193$, $2{,}147{,}483{,}647$.`}</p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Composite</span>
              <p>{`At least one proper divisor exists. Examples: $12 = 2 \\times 6$, $91 = 7 \\times 13$, $100 = 4 \\times 25$.`}</p>
            </div>
          </div>
          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>{`If $b$ is a proper divisor of $n$, write $n = bc$. Then $c$ must also be proper: if $c = 1$ then $b = n$, contradicting $b < n$; if $c = n$ then $b = 1$, contradicting $b \\geq 2$. So proper divisors always come in pairs.`}</p>
          </div>
        </>,

        // Section 1: Checking Primality Efficiently
        <>
          <h2>Why You Only Need to Check up to the Square Root</h2>
          <p>{`Suppose you want to know if $97$ is prime. The slow way is to try every divisor from $2$ to $96$. That is $95$ trial divisions. Is all that work really needed?`}</p>
          <p>{`No. You only need to check divisors up to $\\sqrt{97} \\approx 9.8$. That means testing $2, 3, 5, 7$ and nothing more. Four tests instead of ninety-five.`}</p>
          <p>{`Why does the square root cut the work so far? Suppose $n = km$ with $k$ and $m$ both proper divisors. If neither were at or below $\\sqrt{n}$, then both would be bigger than $\\sqrt{n}$. Two numbers bigger than $\\sqrt{n}$ multiply to more than $n$. But $km = n$, so that is impossible. So one of every factor pair sits at or below $\\sqrt{n}$.`}</p>
          <div className="lrn-eq lrn-eq-hero">{`$$\\text{To test } n{:} \\text{ only check divisors } k \\text{ with } 2 \\leq k \\leq \\sqrt{n}$$`}</div>
          <VizFigure title="Primality Check up to Root n" size="body" aspect="auto">
            <PrimalityCheckUpToSqrtRefined />
          </VizFigure>
          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>{`Why does the square root bound let you check so few candidates? Work through why checking $193$ only requires testing $2, 3, 5, 7, 11, 13$.`}</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>{`$\\sqrt{193} \\approx 13.9$. Every composite factor of $193$ would have a partner $\\leq 13.9$. The primes in that range are $2, 3, 5, 7, 11, 13$. None divide $193$ (check: $193$ is odd, digit sum $13$ not divisible by $3$, ends in $3$ not $5$, and $\\frac{193}{7} \\approx 27.6$, $\\frac{193}{11} \\approx 17.5$, $\\frac{193}{13} \\approx 14.8$). So $193$ is prime.`}</p>
            </details>
          </div>
          <h3>The Same Argument, Step by Step</h3>
          <div className="lrn-proof">
            <span className="lrn-proof-label">PROOF</span>
            <ol className="lrn-list">
              <li>{`Suppose $n$ has no divisor $k$ with $2 \\leq k \\leq \\sqrt{n}$.`}</li>
              <li>{`If $n$ were composite, write $n = km$ with $k, m$ proper divisors. Both $k \\geq 2$ and $m \\geq 2$.`}</li>
              <li>{`By the supposition, $k > \\sqrt{n}$ and $m > \\sqrt{n}$.`}</li>
              <li>{`Two numbers both bigger than $\\sqrt{n}$ multiply to more than $\\sqrt{n} \\times \\sqrt{n} = n$. So $km > n$. But $km = n$. Contradiction. So $n$ is prime. $\\square$`}</li>
            </ol>
          </div>
          <p>{`You can now test any number for primality with very little work. Find its square root, then check only the primes up to that square root.`}</p>
        </>,

        // Section 2: The Sieve of Eratosthenes
        <>
          <h2>The Sieve of Eratosthenes</h2>
          <p>{`The Sieve is a systematic method for finding all primes up to some limit $N$. Write down $1$ to $N$. Remove $1$. Leave $2$, then remove every multiple of $2$ except $2$ itself. Leave the next unmarked number $3$, then remove every multiple of $3$ except $3$ itself. Continue for $5$, $7$, $11$, $\\ldots$ up to $\\sqrt{N}$.`}</p>
          <p>{`Why does stopping at $\\sqrt{N}$ suffice? By the square root bound, any composite $k \\leq N$ has a prime factor $\\leq \\sqrt{N}$. So when you remove multiples of all primes up to $\\sqrt{N}$, you have removed every composite in the range.`}</p>
          <p>{`For $N = 50$: check primes up to $\\sqrt{50} \\approx 7.1$, so sieve with $2$, $3$, $5$, $7$. Every surviving number is prime.`}</p>
          <VizFigure title="The Sieve of Eratosthenes" size="body" aspect="auto">
            <PrimeSieveOfEratosthenesRefined />
          </VizFigure>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>{`Before stepping through the sieve, predict how many primes are in the range $1$ to $50$. Is it closer to $10$, $15$, or $20$?`}</p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>{`There are $15$ primes up to $50$: $2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47$. So the answer is closer to $15$.`}</p>
            </details>
          </div>
          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Sieve of Eratosthenes</span>
              <p>{`Removes whole families of composites at once. Efficient for finding all primes in a range. No repeated work per number.`}</p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Trial Division</span>
              <p>{`Tests each candidate one at a time. Works for individual primality tests. Slow for finding all primes in a range.`}</p>
            </div>
          </div>
          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>{`After removing all multiples of $2$, $3$, $5$, and $7$, why are the remaining numbers guaranteed to be prime? What property of the square root bound makes this work?`}</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>{`Any composite $k \\leq 50$ has a prime factor $p \\leq \\sqrt{50} \\approx 7.1$. The primes up to $7$ are $2, 3, 5, 7$. So every composite in the range is a multiple of one of these four. Removing all their multiples leaves only primes.`}</p>
            </details>
          </div>
          <p>{`You can now list every prime up to any limit you choose. Sieve with the primes up to the square root, and whatever survives is prime.`}</p>
        </>,

        // Section 7: Prime Decomposition
        <>
          <h2>Prime Decomposition</h2>
          <p>{`The prime decomposition of $n$ is its expression as a product of primes. A single prime is its own decomposition. For example, $12 = 2 \\times 2 \\times 3$. When a prime repeats, write it as a power: $2 \\times 2 = 2^2$, so $12 = 2^2 \\times 3$. We treat rearrangements as the same decomposition ($2 \\times 3 = 3 \\times 2$).`}</p>
          <p>{`To find the prime decomposition of $n$: try the smallest prime $p$ that divides $n$. Write $n = p \\times A$. Repeat on $A$. Stop when $A$ is prime. This is a factor tree.`}</p>
          <p>{`Here is the tree for $252$ drawn out in full. Pull out the smallest prime each time:`}</p>
          <div className="lrn-eq">{`$$252 = 2 \\times 126 = 2 \\times 2 \\times 63 = 2 \\times 2 \\times 3 \\times 21 = 2 \\times 2 \\times 3 \\times 3 \\times 7$$`}</div>
          <p>{`Collecting repeats into powers gives $252 = 2^2 \\times 3^2 \\times 7$. Every leaf of the tree is prime, so the descent has stopped.`}</p>
          <VizFigure title="Factor Tree: Interactive" size="body" aspect="auto">
            <FactorTreeInteractiveRefined />
          </VizFigure>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>{`Before finding the prime decomposition of $252$, predict how many prime factors it will have (counting repetitions). Will any prime appear more than once?`}</p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>{`$252 = 2^2 \\times 3^2 \\times 7$. That is five prime factors total (with repetition). Both $2$ and $3$ appear twice.`}</p>
            </details>
          </div>
          <h3>Four Concrete Examples</h3>
          <div className="lrn-steps">
            <p>{`Work through these using trial division:`}</p>
            <ol className="lrn-list">
              <li>{`$193$: check primes up to $\\sqrt{193} \\approx 13.9$, that is $2, 3, 5, 7, 11, 13$. None divide $193$. So $193$ is prime: its own decomposition.`}</li>
              <li>{`$391$: try $2, 3, 5, 7, 11, 13$ (all fail), then $17$: $\\frac{391}{17} = 23$. Check $23$ is prime ($\\sqrt{23} \\approx 4.8$; neither $2$ nor $3$ divides it). So $391 = 17 \\times 23$.`}</li>
              <li>{`$1729$: $\\frac{1729}{7} = 247$. Then $\\frac{247}{13} = 19$. All three are prime. So $1729 = 7 \\times 13 \\times 19$.`}</li>
              <li>{`$14{,}933$: $\\sqrt{14933} \\approx 122$. At $109$: $\\frac{14933}{109} = 137$. Check $137$ prime ($\\sqrt{137} \\approx 11.7$; none of $2, 3, 5, 7, 11$ divide it). So $14{,}933 = 109 \\times 137$.`}</li>
            </ol>
          </div>
          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>{`Every composite has a smallest proper divisor, and that divisor must be prime. If it were composite, it would have a smaller proper divisor that also divides $n$, contradicting minimality. So the smallest proper divisor is always prime. This is what justifies "try the smallest prime" as the first step.`}</p>
          </div>
          <h3>Counting Divisors from the Decomposition</h3>
          <p>{`The decomposition also tells you how many divisors a number has. Take $252 = 2^2 \\times 3^2 \\times 7$. A divisor picks $0$, $1$, or $2$ copies of $2$ (three choices), then $0$, $1$, or $2$ copies of $3$ (three choices), then $0$ or $1$ copy of $7$ (two choices).`}</p>
          <p>{`Multiply the choices: $3 \\times 3 \\times 2 = 18$ divisors. In general, add $1$ to each exponent and multiply: a number $p^{e_1} q^{e_2} r^{e_3}$ has $(e_1 + 1)(e_2 + 1)(e_3 + 1)$ divisors.`}</p>
        </>,

        // Section 8: The Fundamental Theorem of Arithmetic
        <>
          <h2>The Fundamental Theorem of Arithmetic</h2>
          <p>{`Take $24$. Break it into primes and you always get $2 \\times 2 \\times 2 \\times 3$, no matter which factor you pull out first. Every whole number $n \\geq 2$ behaves this way.`}</p>
          <p>{`This is the Fundamental Theorem of Arithmetic (FTA): every $n \\geq 2$ has a prime decomposition, and that decomposition is unique up to rearrangement. It splits into two parts. Existence is proved here. Uniqueness is true, but its full proof needs a tool shown later (Euclid's Lemma).`}</p>
          <div className="lrn-eq lrn-eq-hero">{`$$\\text{Every } n \\geq 2 \\text{ has a unique prime decomposition (up to order).}$$`}</div>
          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Factorization into Smaller Numbers</span>
              <p>{`$24 = 3 \\times 8$ and $24 = 4 \\times 6$ are both valid factorizations but neither is a prime decomposition. They split $24$ into factors that are not all prime.`}</p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Prime Decomposition</span>
              <p>{`$24 = 2 \\times 2 \\times 2 \\times 3 = 2^3 \\times 3$. Every factor is prime. This is the only prime decomposition of $24$ (up to order).`}</p>
            </div>
          </div>
          <h3>Existence of Prime Decomposition</h3>
          <p>{`If $n$ is prime, it is its own decomposition. If not, $n$ has a prime divisor $p$ (the smallest proper divisor is always prime). Write $n = pA$. Apply the same argument to $A$: if prime, stop; if not, write $A = qB$. The remaining factors $A, B, C, \\ldots$ form a strictly decreasing sequence of positive integers. That sequence must stop. It stops when the remaining factor is prime, giving the full decomposition.`}</p>
          <div className="lrn-faded">
            <div className="lrn-faded-phase">
              <span className="lrn-faded-label">COMPLETE EXAMPLE</span>
              <p>{`Find the prime decomposition of $252$:`}</p>
              <ol className="lrn-list">
                <li>{`$252$ is even: $252 = 2 \\times 126$.`}</li>
                <li>{`$126$ is even: $126 = 2 \\times 63$, giving $252 = 2 \\times 2 \\times 63$.`}</li>
                <li>{`Digit sum of $63$ is $9$, so $3 \\mid 63$: $63 = 3 \\times 21$, giving $252 = 2^2 \\times 3 \\times 21$.`}</li>
                <li>{`$21 = 3 \\times 7$. Both prime. So $252 = 2^2 \\times 3^2 \\times 7$.`}</li>
              </ol>
            </div>
            <div className="lrn-faded-phase">
              <span className="lrn-faded-label">YOUR TURN</span>
              <p>{`Find the prime decomposition of $1{,}119$. Hint: $1 + 1 + 1 + 9 = 12$, so $3 \\mid 1119$.`}</p>
            </div>
          </div>
          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>{`The key is that $A, B, C, \\ldots$ are strictly decreasing positive integers. No strictly decreasing sequence of positive integers can go on forever. This is called well-ordering: every nonempty set of positive integers has a smallest element, so any strictly decreasing sequence must be finite.`}</p>
          </div>
          <h3>Uniqueness of Prime Decomposition</h3>
          <p>{`Uniqueness is harder to prove than existence. For one small number you can check it by hand. Suppose $91 = 7 \\times 13$. Could there be another decomposition? Any alternative $91 = p \\times q$ (with $p \\leq q$) needs $p \\leq \\sqrt{91} \\approx 9.5$. The primes at most $9$ are $2, 3, 5, 7$. Check each one by one: only $7$ divides $91$. So $7 \\times 13$ is the only decomposition.`}</p>
          <p>{`Checking every possibility by hand stops working for large numbers. Proving uniqueness for every number needs a result called Euclid's Lemma: if a prime $p$ divides a product $ab$, then $p$ divides $a$ or $p$ divides $b$. That lemma forces any two decompositions of the same number to use the same primes. Its proof is shown later, so take uniqueness here as a true deferred result.`}</p>
        </>,

        // Section 3: Twin Primes and the Goldbach Conjecture
        <>
          <h2>Twin Primes and the Goldbach Conjecture</h2>
          <p>{`You can now decompose any number into primes. The rest of this page collects famous facts and open questions about how the primes are spread out.`}</p>
          <p>{`Twin primes are pairs of primes that differ by $2$. Examples: $(3, 5)$, $(5, 7)$, $(11, 13)$, $(29, 31)$, $(71, 73)$, $(137, 139)$, $(1091, 1093)$. Whether infinitely many twin prime pairs exist is still an open problem (a question nobody has answered yet).`}</p>
          <p>{`The Goldbach Conjecture (1742) states every even number is the sum of two primes. Examples: $10 = 3 + 7$, $90 = 11 + 79$, $184 = 47 + 137$, $250 = 113 + 137$. Nobody has proved this for all even numbers.`}</p>
          <VizFigure title="Twin Primes on the Number Line" size="body" aspect="auto">
            <TwinPrimesOnNumberLineRefined />
          </VizFigure>
          <VizFigure title="Goldbach Decomposition" size="body" aspect="auto">
            <GoldbachDecompositionRefined />
          </VizFigure>
          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Twin Primes (open problem)</span>
              <p>{`Whether infinitely many pairs $(p, p+2)$ of primes exist is unknown. Very large twin pairs have been found, but nobody can prove the supply never ends.`}</p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Triplet Primes (resolved)</span>
              <p>{`Three consecutive odd primes $(k, k+2, k+4)$ can only be $(3, 5, 7)$. For any $k > 3$, one of $k, k+2, k+4$ is divisible by $3$ and hence composite.`}</p>
            </div>
          </div>
          <div className="lrn-proof">
            <span className="lrn-proof-label">PROOF: Only one triplet</span>
            <p>{`Take any three consecutive odd numbers $k, k+2, k+4$ with $k > 3$. Divide $k$ by $3$: the remainder $r$ is $0$, $1$, or $2$.`}</p>
            <ol className="lrn-list">
              <li>{`$r = 0$: then $k = 3n$. Since $k > 3$, we have $n > 1$, so $k$ is composite.`}</li>
              <li>{`$r = 1$: then $k + 2 = 3n + 3 = 3(n+1)$. Since $k > 3$, $k + 2 > 5 > 3$, so $k+2$ is composite.`}</li>
              <li>{`$r = 2$: then $k + 4 = 3n + 6 = 3(n+2)$. Since $k > 3$, $k + 4 > 9 > 3$, so $k+4$ is composite.`}</li>
            </ol>
            <p>{`In every case at least one of the three is composite. So $(3, 5, 7)$ is the only triplet. $\\square$`}</p>
          </div>
          <div className="lrn-callout">
            <p>{`Goldbach's Conjecture (every even number is a sum of two primes) is unproven. It has stayed open since 1742. Computers have checked it for every even number up to $4 \\times 10^{18}$, with no exception found.`}</p>
          </div>
        </>,

        // Section 5: Strings of Consecutive Composites
        <>
          <h2>Strings of Consecutive Composites</h2>
          <p>{`Here $n!$ means $1 \\times 2 \\times \\cdots \\times n$, called $n$ factorial. So $4! = 1 \\times 2 \\times 3 \\times 4 = 24$.`}</p>
          <p>{`Primes become more spread out as numbers grow. For any $n$, you can build $n - 1$ composite numbers in a row: the string $n! + 2, n! + 3, \\ldots, n! + n$.`}</p>
          <p>{`Why are all of these composite? Take any $j$ from $2$ to $n$. Then $j$ is one of the factors inside $n!$, so $j$ divides $n!$. And $j$ divides itself. So $j$ divides the sum $n! + j$. Since $n! + j$ is bigger than $j$, the number $j$ is a proper divisor of $n! + j$. That makes $n! + j$ composite.`}</p>
          <VizFigure title="Consecutive Composites via Factorial" size="body" aspect="auto">
            <ConsecutiveCompositesStripRefined />
          </VizFigure>
          <div className="lrn-faded">
            <div className="lrn-faded-phase">
              <span className="lrn-faded-label">COMPLETE EXAMPLE</span>
              <p>{`For $n = 7$: $7! = 5040$. The string $5042, 5043, 5044, 5045, 5046, 5047$ is six consecutive composites.`}</p>
              <ol className="lrn-list">
                <li>{`$2 \\mid 5042$ because $2 \\mid 5040$ and $2 \\mid 2$.`}</li>
                <li>{`$3 \\mid 5043$ because $3 \\mid 5040$ and $3 \\mid 3$.`}</li>
                <li>{`$4 \\mid 5044$, $5 \\mid 5045$, $6 \\mid 5046$, $7 \\mid 5047$. Same argument.`}</li>
              </ol>
            </div>
            <div className="lrn-faded-phase">
              <span className="lrn-faded-label">YOUR TURN</span>
              <p>{`Write out why $5 \\mid 5045$ without looking at the pattern. Identify what $5$ divides in $5040$ and what it divides in $5$.`}</p>
            </div>
          </div>
          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Factorial Construction (large numbers)</span>
              <p>{`$n! + 2, \\ldots, n! + n$ gives $n - 1$ consecutive composites. Constructive proof. Numbers grow very large very fast.`}</p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Natural Occurrence (small numbers)</span>
              <p>{`$114, 115, \\ldots, 126$ gives $13$ consecutive composites below $200$. Found directly from the sieve list. No factorial needed.`}</p>
            </div>
          </div>
          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>{`Factorials grow faster than any fixed multiple, so $n!$ is divisible by every integer from $2$ to $n$. Adding $j$ to $n!$ preserves divisibility by $j$ because $j \\mid n!$ and $j \\mid j$. The composite gap grows without limit as $n$ grows.`}</p>
          </div>
        </>,

        // Section 6: Why the Primes Never Run Out
        <>
          <h2>Why the Primes Never Run Out</h2>
          <p>{`Do the primes eventually stop? They do not. There is no largest prime. A short, classic argument proves it.`}</p>
          <p>{`The idea is simple. Assume someone hands you a complete list of every prime. Build one new number from that list. Then show the new number forces a prime the list left out. So no list can be complete.`}</p>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>{`Multiply the first three primes and add $1$: $2 \\times 3 \\times 5 + 1 = 31$. Is $31$ prime? Now try $2 \\times 3 \\times 5 \\times 7 \\times 11 \\times 13 + 1 = 30{,}031$. Do you expect that to be prime too?`}</p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>{`$31$ is prime. But $30{,}031 = 59 \\times 509$ is not. Adding $1$ to the product does not always give a prime. It only forces a prime factor outside your starting list. Here that factor is $59$.`}</p>
            </details>
          </div>
          <div className="lrn-proof">
            <span className="lrn-proof-label">PROOF: there is no largest prime</span>
            <ol className="lrn-list">
              <li>{`Suppose the complete list of primes is $p_1, p_2, \\ldots, p_k$, with nothing left out.`}</li>
              <li>{`Build $N = (p_1 \\times p_2 \\times \\cdots \\times p_k) + 1$.`}</li>
              <li>{`Divide $N$ by any listed prime $p_i$. The product part is divisible by $p_i$, so $N$ leaves remainder $1$. No listed prime divides $N$.`}</li>
              <li>{`But $N > 1$, so $N$ has a prime factor (every number above $1$ does, from the existence result above). That prime is missing from the list. So the list was not complete. $\\square$`}</li>
            </ol>
            <p>{`The proof never claims $N$ itself is prime. It claims only that $N$ has a prime factor missing from the list. That factor might be $N$ itself, or a smaller prime like the $59$ above. Either way the list missed a prime, which is the contradiction.`}</p>
          </div>
        </>,

        // Section 9: Why Cryptography Cares
        <>
          <h2>Why Cryptography Cares</h2>
          <p>{`Multiplying two large primes takes milliseconds. Recovering those primes from their product is practically impossible. This one-way gap is the foundation of public-key cryptography, the system that locks online messages so only the right person can read them.`}</p>
          <p>{`The number $2{,}147{,}483{,}647$ (which is $2^{31} - 1$) needs roughly $5{,}000$ divisor checks to confirm it is prime. By hand with a calculator, that takes many hours. A computer finishes in milliseconds. But take a number near $10^{400}$ (a $1$ followed by $400$ zeros). Checking every divisor up to its square root would take all the computers on Earth longer than $100$ years.`}</p>
          <p>{`RSA, the most common public-key system, publishes $N = p \\times q$ where $p$ and $q$ are large primes. Finding $p$ and $q$ from $N$ is the security lock. Every https connection you make uses a variant of this idea.`}</p>
          <div className="lrn-eq lrn-eq-hero">{`$$\\sqrt{10^{400}} = 10^{200} \\approx \\text{number of primes to check}$$`}</div>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>{`If factoring were merely slow (say, $10 \\times$ as slow as now), would RSA still be secure? Think about what security actually requires.`}</p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>{`No. If factoring were merely slow, better hardware or more time would eventually break any key. RSA security requires factoring to be practically impossible, not just slow. The computation time must grow faster than any realistic improvement in hardware over any realistic time span.`}</p>
            </details>
          </div>
          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>{`Multiplying $p \\times q$ is one operation. Factoring $N = p \\times q$ by trial division requires testing on the order of $\\sqrt{N}$ candidates. For $N \\approx 10^{400}$, that is $10^{200}$ tests. At a trillion tests per second that is $10^{188}$ seconds. The age of the universe is about $4 \\times 10^{17}$ seconds. The gap is impossible to cross.`}</p>
          </div>
        </>
      ]
    },

    practice: [
      {
        q: 'What is a proper divisor? Give an example for the number $12$.',
        a: 'A proper divisor of $n$ is a whole number $b$ with $b \\mid n$ and $2 \\leq b \\leq n-1$. For $12$: the proper divisors are $2, 3, 4, 6$. Note that $1$ and $12$ itself are not proper divisors by definition.'
      },
      {
        q: 'Is $101$ prime or composite? Check using the square root bound.',
        a: '$\\sqrt{101} \\approx 10.05$. Check primes $2, 3, 5, 7$: $101$ is odd, digit sum $2$ (not divisible by $3$), ends in $1$ (not $5$), $\\frac{101}{7} \\approx 14.4$ (not exact). So $101$ is prime. The square root bound means checking only four primes.'
      },
      {
        q: 'Find the prime decomposition of $360$.',
        a: '$360 = 2 \\times 180 = 2^2 \\times 90 = 2^3 \\times 45 = 2^3 \\times 3^2 \\times 5$. Start with the smallest prime ($2$) and extract it until the remaining factor is odd. Then extract $3$ twice from $45 = 9 \\times 5$. Final: $360 = 2^3 \\times 3^2 \\times 5$.'
      },
      {
        q: 'Explain why the square root bound is enough for testing primality. Use the example $n = 193$.',
        a: 'If $n$ were composite, write $n = ab$ with $a \\leq b$. Then $a^2 \\leq n$, so $a \\leq \\sqrt{n}$. For $n = 193$: $\\sqrt{193} \\approx 13.9$. Check primes $2, 3, 5, 7, 11, 13$. None divide $193$. So $193$ is prime. Every composite factor pair has a smaller member at or below the square root.'
      },
      {
        q: 'Describe the Sieve of Eratosthenes step by step for numbers $1$ to $30$.',
        a: 'Write $1$ to $30$. Remove $1$. Leave $2$, cross out $4, 6, 8, \\ldots, 30$. Leave $3$, cross out $9, 15, 21, 27$ (even multiples of $3$ already gone). Leave $5$, cross out $25$ (others already gone). $\\sqrt{30} \\approx 5.5$, so stop. The surviving numbers are the primes: $2, 3, 5, 7, 11, 13, 17, 19, 23, 29$.'
      },
      {
        q: 'Is $337$ prime? Is $373$ prime? Show your work.',
        a: '$\\sqrt{337} \\approx 18.4$. Check primes up to $18$: $2, 3, 5, 7, 11, 13, 17$. $337$ is odd, digit sum $13$ (not div by $3$), ends in $7$ (not $5$), $\\frac{337}{7} \\approx 48.1$, $\\frac{337}{11} \\approx 30.6$, $\\frac{337}{13} \\approx 25.9$, $\\frac{337}{17} \\approx 19.8$. So $337$ is prime. Same check for $373$ ($\\sqrt{373} \\approx 19.3$, all primes up to $19$ fail): $373$ is also prime.'
      },
      {
        q: 'Rewrite $2 \\times 2 \\times 2 \\times 3$ using powers. Then rewrite $2 \\times 3 \\times 3 \\times 3 \\times 5$ the same way.',
        a: 'A prime repeated $k$ times is written as a power: $2 \\times 2 \\times 2 = 2^3$. So $2 \\times 2 \\times 2 \\times 3 = 2^3 \\times 3$. For the second: $3$ appears three times, so $2 \\times 3 \\times 3 \\times 3 \\times 5 = 2 \\times 3^3 \\times 5$. Powers just count how many times each prime repeats.'
      },
      {
        q: 'Why is every composite number guaranteed to have a prime divisor?',
        a: 'Take the smallest proper divisor $d_0$ of composite $n$. If $d_0$ were composite, it would have a proper divisor $a$ with $1 < a < d_0$. Since $a \\mid d_0$ and $d_0 \\mid n$, we get $a \\mid n$. But $a < d_0$ contradicts the minimality of $d_0$. So $d_0$ must be prime.'
      },
      {
        q: 'Give a concrete example of two twin prime pairs and one example showing that $3$, $5$, $7$ is the only triplet.',
        a: 'Twin pairs: $(11, 13)$ and $(29, 31)$. For triplets: take $k = 9$ (the next odd after $7$). Then $k, k+2, k+4 = 9, 11, 13$. Here $9 = 3 \\times 3$ is composite. So no triplet starts at $9$. The proof shows at least one of every three consecutive odds is divisible by $3$, making it composite (for values $> 3$).'
      },
      {
        q: 'Find the prime decomposition of $1{,}729$. Show each step.',
        a: 'Try $2$ (odd, fails), $3$ (digit sum $1+7+2+9 = 19$, not divisible by $3$), $5$ (ends in $9$, fails), $7$: $\\frac{1729}{7} = 247$. Now factor $247$: try $7$ ($247 / 7 \\approx 35.3$, fails), $11$ ($247 / 11 \\approx 22.5$, fails), $13$: $\\frac{247}{13} = 19$. Check $19$ is prime ($\\sqrt{19} \\approx 4.4$; $2$ and $3$ both fail). So $1{,}729 = 7 \\times 13 \\times 19$.'
      },
      {
        q: 'The number $n! + j$ is composite for each $2 \\leq j \\leq n$. Explain why using divisibility.',
        a: 'Since $j \\leq n$, $j$ is one of the factors in $1 \\times 2 \\times \\cdots \\times n = n!$. So $j \\mid n!$. Also $j \\mid j$. Therefore $j \\mid (n! + j)$. Since $n! + j > j \\geq 2$, $j$ is a proper divisor of $n! + j$, making it composite.'
      },
      {
        q: 'Prove there is no largest prime, using $N = p_1 \\times p_2 \\times \\cdots \\times p_k + 1$.',
        a: 'Suppose $p_1, \\ldots, p_k$ were every prime. Then $N = p_1 \\cdots p_k + 1$ leaves remainder $1$ when divided by each $p_i$, so no listed prime divides $N$. But $N > 1$ has a prime factor. That factor is missing from the list, so the list was incomplete. There is no largest prime.'
      },
      {
        q: 'State the Fundamental Theorem of Arithmetic and explain what "unique up to rearrangement" means.',
        a: 'The FTA says every whole number $n \\geq 2$ has a prime decomposition, and that decomposition is unique up to the order of the factors. "Unique up to rearrangement" means $12 = 2 \\times 2 \\times 3 = 2 \\times 3 \\times 2 = 3 \\times 2 \\times 2$ are all the same decomposition. The set of primes (with repetition) is always identical.'
      },
      {
        q: 'Could $841$ have two different prime decompositions? Explain how to rule out alternatives.',
        a: 'No. Any decomposition $841 = p \\times q$ (with $p \\leq q$) requires $p \\leq \\sqrt{841} = 29$. Checking primes up to $29$: only $29$ divides $841$ (since $\\frac{841}{29} = 29$). So $p = 29$ and $q = 29$, giving $841 = 29^2$ as the unique decomposition.'
      },
      {
        q: 'Explain why the existence of prime decomposition is proved by inductive descent. What makes the chain stop?',
        a: 'Start with $n$. Extract prime $p$, write $n = pA$. Then $A < n$. Extract prime $q$ from $A$: $A = qB$ and $B < A$. The sequence $n > A > B > C > \\cdots$ is a strictly decreasing sequence of positive integers. It cannot decrease forever (well-ordering: no infinite decreasing sequence in the positive integers). It stops when the remaining factor is prime. That gives the complete decomposition.'
      },
      {
        q: 'A public-key system publishes $N = p \\times q$ where $p$ and $q$ are primes near $10^{200}$. Why is factoring $N$ impossible in practice?',
        a: 'Factoring $N$ requires trial division up to $\\sqrt{N} \\approx 10^{200}$. Even at $10^{12}$ divisions per second, that takes about $10^{188}$ seconds. The universe is roughly $4 \\times 10^{17}$ seconds old. The computation time exceeds any realistic resource. Multiplying two such primes takes milliseconds. The asymmetry between multiplication and factoring is the security guarantee.'
      },
      {
        q: 'Find the prime decomposition of $91$. Then explain why it has no other decomposition.',
        a: 'Trial: $91 / 7 = 13$. Both $7$ and $13$ are prime. So $91 = 7 \\times 13$. Uniqueness: any other decomposition $91 = p \\times q$ (with $p \\leq q$) needs $p \\leq \\sqrt{91} \\approx 9.5$. Primes at most $9$: $2, 3, 5, 7$. Only $7$ divides $91$. So $p = 7$ and $q = 13$. No other decomposition exists.'
      },
      {
        q: 'Is $247$ prime? Use trial division, showing each step.',
        a: '$\\sqrt{247} \\approx 15.7$. Primes to check: $2, 3, 5, 7, 11, 13$. $247$ is odd, digit sum $13$ (not div by $3$), ends in $7$ (not $5$), $247 / 7 = 35.28\\ldots$ (no), $247 / 11 = 22.45\\ldots$ (no), $247 / 13 = 19$ exactly. So $247 = 13 \\times 19$: composite.'
      },
      {
        q: 'The decomposition of $360$ is $2^3 \\times 3^2 \\times 5$. Use the exponents to count how many divisors $360$ has.',
        a: 'Add $1$ to each exponent, then multiply: $(3+1) \\times (2+1) \\times (1+1) = 4 \\times 3 \\times 2 = 24$. So $360$ has $24$ divisors. Each divisor picks $0$ to $3$ copies of $2$, $0$ to $2$ copies of $3$, and $0$ or $1$ copy of $5$. The counts multiply.'
      },
      {
        q: 'Why does well-ordering guarantee that inductive descent terminates?',
        a: 'Well-ordering says every nonempty set of positive integers has a smallest element. Equivalently, no infinite strictly decreasing sequence of positive integers exists: $n > A > B > C > \\cdots > 1$ can have at most $n - 1$ terms. In inductive descent, each step extracts a prime $p \\geq 2$, so the remaining factor shrinks each time. A strictly decreasing chain of positive integers must end, so the descent reaches a prime.'
      },
      {
        q: 'Find the prime decomposition of $14{,}933$. Confirm both prime factors are prime.',
        a: '$\\sqrt{14933} \\approx 122$. Try primes. At $109$: $14933 / 109 = 137$. Confirm $109$ prime: $\\sqrt{109} \\approx 10.4$; primes $2, 3, 5, 7$ all fail. Confirm $137$ prime: $\\sqrt{137} \\approx 11.7$; primes $2, 3, 5, 7, 11$ all fail. So $14{,}933 = 109 \\times 137$, both prime factors confirmed.'
      },
      {
        q: 'Express $88$ and $184$ each as a sum of two primes.',
        a: '$88 = 5 + 83$ (both prime: $83$ is prime since $\\sqrt{83} \\approx 9.1$ and none of $2, 3, 5, 7$ divide it). $184 = 47 + 137$ (both prime: $47$ is prime, $137$ is prime as checked above). Multiple solutions exist; these are just two valid ones.'
      }
    ],

    reference: {
      category: 'Quick Reference',
      title: 'Prime Numbers and Prime Factorisation',
      sections: [
        <>
          <h2>Core Definitions</h2>
          <div className="lrn-definition">
            <span className="lrn-definition-term">Proper Divisor</span>
            <div className="lrn-definition-desc">
              <p>{`$b$ is a proper divisor of $n$ when $b \\mid n$ and $2 \\leq b \\leq n-1$.`}</p>
              <p>{`When to use: identifying valid factors in a factorization.`}</p>
            </div>
          </div>
          <div className="lrn-definition">
            <span className="lrn-definition-term">Prime</span>
            <div className="lrn-definition-desc">
              <p>{`A whole number $> 1$ with no proper divisors. $2$ is the only even prime. $1$ is neither prime nor composite.`}</p>
            </div>
          </div>
          <div className="lrn-definition">
            <span className="lrn-definition-term">Prime Decomposition</span>
            <div className="lrn-definition-desc">
              <p>{`Expression of $n \\geq 2$ as a product of primes. A single prime is its own decomposition. Unique up to rearrangement (FTA).`}</p>
            </div>
          </div>
          <div className="lrn-definition">
            <span className="lrn-definition-term">Twin Primes</span>
            <div className="lrn-definition-desc">
              <p>{`A pair of primes differing by $2$. Whether infinitely many pairs exist is open.`}</p>
            </div>
          </div>

          <h2>Key Results</h2>
          <div className="lrn-eq lrn-eq-hero">{`$$\\text{Square root bound: check } k \\text{ with } 2 \\leq k \\leq \\sqrt{n} \\text{ only}$$`}</div>
          <p>{`When to use: testing primality or finding the smallest prime factor by trial division.`}</p>
          <div className="lrn-eq lrn-eq-hero">{`$$\\text{FTA: every } n \\geq 2 \\text{ has a unique prime decomposition (up to order)}$$`}</div>
          <p>{`When to use: whenever you factor a number and need to know the result is unique.`}</p>
          <div className="lrn-eq lrn-eq-hero">{`$$p \\text{ prime},\\; p \\mid ab \\implies p \\mid a \\text{ or } p \\mid b \\quad \\text{(Euclid's Lemma, proved later)}$$`}</div>
          <p>{`When to use: moving a prime divisor from a product into one of its factors. Its proof comes later.`}</p>
          <div className="lrn-eq lrn-eq-hero">{`$$n! + j \\text{ is composite for each } 2 \\leq j \\leq n \\quad \\text{(consecutive composites)}$$`}</div>
          <p>{`When to use: proving arbitrarily long gaps between primes exist.`}</p>

          <h2>Key Examples</h2>
          <table className="lrn-table" style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr>
                {['n', 'decomposition', 'method'].map((h, i) => (
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
                ['193', 'prime', 'check primes up to 13: all fail'],
                ['391', '17 × 23', 'trial division: 17 divides 391'],
                ['1,729', '7 × 13 × 19', 'descent: 7|1729, 13|247'],
                ['14,933', '109 × 137', 'trial: 109 found; 137 confirmed prime'],
                ['91', '7 × 13', 'unique: only 7 divides 91 below √91'],
                ['841', '29²', 'only 29 ≤ √841 divides 841']
              ].map(([n, decomp, method], i) => (
                <tr key={i}>
                  {[n, decomp, method].map((cell, j) => (
                    <td
                      key={j}
                      style={{
                        padding: '6px 10px',
                        borderBottom: '1px solid var(--border-subtle)',
                        fontSize: FONT_TEX
                      }}
                    >
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>

          <h2>Open Problems vs Proved Results</h2>
          <table className="lrn-table" style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr>
                {['statement', 'status'].map((h, i) => (
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
                ['Infinitely many twin prime pairs', 'Open'],
                ['Goldbach: every even number is a sum of two primes', 'Open (1742)'],
                ['Only triplet primes are 3, 5, 7', 'Proved (mod 3 argument)'],
                [
                  'FTA: unique prime decomposition for every n ≥ 2',
                  'Proved (uniqueness shown later)'
                ]
              ].map(([stmt, status], i) => (
                <tr key={i}>
                  <td
                    style={{
                      padding: '6px 10px',
                      borderBottom: '1px solid var(--border-subtle)',
                      fontSize: FONT_TEX
                    }}
                  >
                    {stmt}
                  </td>
                  <td
                    style={{
                      padding: '6px 10px',
                      borderBottom: '1px solid var(--border-subtle)',
                      fontSize: FONT_TEX,
                      opacity: status === 'Open' ? 0.6 : 1
                    }}
                  >
                    {status}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <h2>Proof Outline: Existence of Prime Decomposition</h2>
          <div className="lrn-proof">
            <span className="lrn-proof-label">PROOF</span>
            <ol className="lrn-list">
              <li>{`Observation: if $n$ is composite, its smallest proper divisor $d_0$ is prime (minimality argument).`}</li>
              <li>{`If $n$ is prime, it is its own decomposition. Done.`}</li>
              <li>{`If not, extract prime $p = d_0$: write $n = pA$ with $A < n$.`}</li>
              <li>{`Apply the same argument to $A$. The sequence $n > A > B > \\cdots$ is strictly decreasing and must terminate at a prime. $\\square$`}</li>
            </ol>
          </div>

          <h2>Proof Outline: Square Root Bound</h2>
          <div className="lrn-proof">
            <span className="lrn-proof-label">PROOF</span>
            <ol className="lrn-list">
              <li>{`Suppose $n$ has no divisor $k$ with $2 \\leq k \\leq \\sqrt{n}$.`}</li>
              <li>{`If $n = km$, both $k > \\sqrt{n}$ and $m > \\sqrt{n}$ by hypothesis.`}</li>
              <li>{`Then $n = km > \\sqrt{n} \\cdot \\sqrt{n} = n$. Contradiction. So $n$ is prime. $\\square$`}</li>
            </ol>
          </div>

          <h2>Proof Outline: Infinitely Many Primes</h2>
          <div className="lrn-proof">
            <span className="lrn-proof-label">PROOF</span>
            <ol className="lrn-list">
              <li>{`Suppose $p_1, \\ldots, p_k$ is the complete list of primes.`}</li>
              <li>{`Build $N = p_1 p_2 \\cdots p_k + 1$. Each $p_i$ leaves remainder $1$, so no $p_i$ divides $N$.`}</li>
              <li>{`$N > 1$ has a prime factor (existence), and it is not on the list. The list was incomplete. $\\square$`}</li>
            </ol>
          </div>
        </>
      ]
    },

    customCss:
      '.MafsView { --mafs-bg: transparent; --mafs-fg: var(--text-primary); --mafs-line-color: var(--border-subtle); }'
  }
  return config
}

// Refined viz (inline, theme-reactive, VizFigure-wrapped)
// All seven viz hand-rolled SVG (Tier 1 schematics / number lines / small factor
// trees), colours from useVizColors, math via the TexPx KaTeX primitive. Every
// rendered value (primes, twin pairs, Goldbach pairs, factor trees) is
// computed at runtime from math-utils. Nothing decorative.

// Plain D-DIN SVG label. Defaults to currentColor so the parent <svg color=C.fg>
// drives the theme; pass opacity for hierarchy.
function T(x, y, content, opts = {}) {
  const {
    opacity = 0.85,
    size = 13,
    weight = '400',
    anchor = 'middle',
    upper = false,
    ls,
    fill = 'currentColor'
  } = opts
  return (
    <text
      x={x}
      y={y}
      fill={fill}
      opacity={opacity}
      fontSize={size}
      textAnchor={anchor}
      fontWeight={weight}
      letterSpacing={ls}
      style={{ fontFamily: "'D-DIN', monospace", textTransform: upper ? 'uppercase' : 'none' }}
    >
      {content}
    </text>
  )
}

const btnStyle = (active, C) => ({
  background: active ? C.faint : 'transparent',
  border: `1px solid ${C.faint}`,
  color: C.fg,
  padding: '4px 12px',
  fontSize: FONT_LABEL,
  cursor: 'pointer',
  fontFamily: "'D-DIN', monospace",
  opacity: active ? 1 : 0.55
})

// 13.1.1 Rectangle arrays: prime = only 1×n strip
const RECT_NUMBERS = [5, 7, 12, 13, 18, 24, 30]

function factorPairs(n) {
  const pairs = []
  for (let r = 1; r * r <= n; r++) {
    if (n % r === 0) pairs.push([r, n / r])
  }
  return pairs
}

function PrimeRectangleArraysRefined() {
  const C = useVizColors()
  const [n, setN] = useState(12)
  const pairs = useMemo(() => factorPairs(n), [n])
  const prime = isPrime(n)

  const W = 580
  const dot = 9
  const dotGap = 3
  const cellGap = 36
  const labelH = 22
  const headerH = 30
  const footerH = 26
  const margin = 24

  const layout = useMemo(() => {
    const placed = []
    let curX = margin
    let bandY = headerH + 8
    let bandMaxH = 0
    pairs.forEach(([r, c], i) => {
      const rw = c * dot + (c - 1) * dotGap
      const rh = r * dot + (r - 1) * dotGap
      if (curX + rw > W - margin && curX > margin) {
        bandY += bandMaxH + labelH + 18
        curX = margin
        bandMaxH = 0
      }
      placed.push({ r, c, x: curX, y: bandY, rw, rh, i })
      curX += rw + cellGap
      bandMaxH = Math.max(bandMaxH, rh)
    })
    return { placed, totalH: bandY + bandMaxH + labelH + footerH }
  }, [pairs])

  const H = layout.totalH

  return (
    <div style={{ fontFamily: "'D-DIN', monospace" }}>
      <div style={{ display: 'flex', justifyContent: 'center', gap: 6, marginBottom: 8 }}>
        {RECT_NUMBERS.map(k => (
          <button key={k} onClick={() => setN(k)} style={btnStyle(n === k, C)}>
            {k}
          </button>
        ))}
      </div>
      <svg
        viewBox={`0 0 ${W} ${H}`}
        preserveAspectRatio="xMidYMid meet"
        width="100%"
        style={{ display: 'block', margin: '0 auto', color: C.fg }}
      >
        {T(W / 2, 18, `${n}: ${pairs.length} rectangle${pairs.length === 1 ? '' : 's'}`, {
          opacity: 0.6,
          size: 12
        })}
        {layout.placed.map(({ r, c, x, y, rw, rh, i }) => {
          const trivial = r === 1
          return (
            <g key={i}>
              {Array.from({ length: r }, (_, ri) =>
                Array.from({ length: c }, (_, ci) => (
                  <rect
                    key={`${ri}-${ci}`}
                    x={x + ci * (dot + dotGap)}
                    y={y + ri * (dot + dotGap)}
                    width={dot}
                    height={dot}
                    fill={trivial ? 'transparent' : C.fg}
                    fillOpacity={trivial ? 0 : 0.85}
                    stroke={C.fg}
                    strokeWidth={trivial ? 1 : 0.75}
                    strokeOpacity={trivial ? 0.5 : 0.85}
                  />
                ))
              )}
              <TexPx
                x={x + rw / 2}
                y={y + rh + 16}
                tex={`${r} \\times ${c}`}
                anchor="middle"
                size={FONT_LABEL}
                opacity={trivial ? 0.45 : 0.9}
              />
              {trivial &&
                T(x + rw / 2, y + rh + 28, 'trivial', {
                  opacity: 0.4,
                  size: 8,
                  upper: true,
                  ls: '0.08em'
                })}
            </g>
          )
        })}
        {T(
          W / 2,
          H - 7,
          prime
            ? `Only the 1 × ${n} strip. No proper divisors. ${n} is PRIME.`
            : `${pairs.length - 1} non-trivial rectangle${pairs.length - 1 === 1 ? '' : 's'}. Proper divisors exist. ${n} is COMPOSITE.`,
          { opacity: 0.5, size: 10, upper: true, ls: '0.06em' }
        )}
      </svg>
    </div>
  )
}

// 13.1.2 Primality check up to sqrt(n)
function PrimalityCheckUpToSqrtRefined() {
  const C = useVizColors()
  const [n, setN] = useState(97)
  const sqrtN = Math.sqrt(n)
  const sqrtLabel = sqrtN.toFixed(1)

  const { candidates, divisors } = useMemo(() => {
    const cs = [2]
    for (let k = 3; k <= Math.floor(sqrtN); k += 2) cs.push(k)
    return { candidates: cs, divisors: cs.filter(c => n % c === 0) }
  }, [n, sqrtN])
  const nIsPrime = divisors.length === 0 && n > 1

  const W = 560
  const H = 170
  const axisY = 92
  const minV = 1
  const maxV = Math.ceil(sqrtN) + 2
  const toX = v => 30 + ((v - minV) / (maxV - minV + 2)) * (W - 60)
  const boundX = toX(sqrtN)

  return (
    <div style={{ fontFamily: "'D-DIN', monospace" }}>
      <Slider
        label={`n = ${n}`}
        value={n}
        min={4}
        max={200}
        step={1}
        onChange={setN}
        format={v => `${v}`}
      />
      <svg
        viewBox={`0 0 ${W} ${H}`}
        preserveAspectRatio="xMidYMid meet"
        width="100%"
        style={{ display: 'block', margin: '8px auto 0', color: C.fg }}
      >
        <line x1={28} y1={axisY} x2={W - 20} y2={axisY} stroke={C.dim} strokeWidth={1.5} />
        <line
          x1={boundX}
          y1={34}
          x2={boundX}
          y2={axisY + 20}
          stroke={C.fg}
          strokeWidth={1}
          opacity={0.6}
          strokeDasharray="4 3"
        />
        <TexPx
          x={boundX}
          y={26}
          tex={`\\sqrt{${n}} \\approx ${sqrtLabel}`}
          anchor="middle"
          size={FONT_LABEL}
          opacity={0.7}
        />
        {candidates.map(c => {
          const x = toX(c)
          const isDivisor = divisors.includes(c)
          return (
            <g key={c}>
              <line
                x1={x}
                y1={axisY - 8}
                x2={x}
                y2={axisY + 8}
                stroke={isDivisor ? C.fg : C.dim}
                strokeWidth={isDivisor ? 2 : 1}
              />
              {T(x, axisY + 22, c, {
                opacity: isDivisor ? 1 : 0.6,
                size: 12,
                weight: isDivisor ? '700' : '400'
              })}
              {isDivisor
                ? T(x, axisY - 16, '✓', { opacity: 0.9, size: 13 })
                : T(x, axisY - 16, '✗', { opacity: 0.35, size: 11, fill: C.dim })}
            </g>
          )
        })}
        {nIsPrime
          ? T(W / 2, H - 8, `${n} is PRIME. No divisor found up to ${sqrtLabel}.`, {
              opacity: 0.55,
              size: 11,
              upper: true,
              ls: '0.06em'
            })
          : divisors.length > 0 && (
              <TexPx
                x={W / 2}
                y={H - 6}
                tex={`${n} = ${divisors[0]} \\times ${n / divisors[0]} \\;\\text{(composite)}`}
                anchor="middle"
                size={FONT_LABEL}
                opacity={0.6}
              />
            )}
      </svg>
    </div>
  )
}

// 13.1.3 Sieve of Eratosthenes
const SIEVE_N = 50
const SIEVE_PRIMES = [2, 3, 5, 7]

function buildSieve(step) {
  const removed = new Set()
  for (let s = 0; s < step; s++) {
    const p = SIEVE_PRIMES[s]
    for (let k = 2 * p; k <= SIEVE_N; k += p) removed.add(k)
  }
  return removed
}
const FINAL_SIEVE = buildSieve(4)

function PrimeSieveOfEratosthenesRefined() {
  const C = useVizColors()
  const [step, setStep] = useState(0)
  const removed = useMemo(() => buildSieve(step), [step])

  const cols = 10
  const rows = Math.ceil(SIEVE_N / cols)
  const cellW = 46
  const cellH = 36
  const padX = 20
  const padY = 28
  const W = cols * cellW + padX * 2
  const H = rows * cellH + padY * 2 + 30

  const stepLabels = [
    'Start: all numbers 1 to 50',
    'Remove multiples of 2 (keeping 2)',
    'Remove multiples of 3 (keeping 3)',
    'Remove multiples of 5 (keeping 5)',
    'Remove multiples of 7 (keeping 7)'
  ]
  const activeP = step > 0 ? SIEVE_PRIMES[step - 1] : null

  return (
    <div style={{ fontFamily: "'D-DIN', monospace" }}>
      <div style={{ display: 'flex', justifyContent: 'center', gap: 8, marginBottom: 8 }}>
        {['Start', 'Remove 2s', 'Remove 3s', 'Remove 5s', 'Remove 7s'].map((label, i) => (
          <button key={i} onClick={() => setStep(i)} style={btnStyle(step === i, C)}>
            {label}
          </button>
        ))}
      </div>
      <svg
        viewBox={`0 0 ${W} ${H}`}
        preserveAspectRatio="xMidYMid meet"
        width="100%"
        style={{ display: 'block', margin: '0 auto', color: C.fg }}
      >
        {Array.from({ length: SIEVE_N }, (_, i) => {
          const n = i + 1
          const col = i % cols
          const row = Math.floor(i / cols)
          const x = padX + col * cellW + cellW / 2
          const y = padY + row * cellH + cellH / 2
          const isRemoved = removed.has(n)
          const isActive = activeP && n !== activeP && n % activeP === 0
          const prime = n > 1 && !FINAL_SIEVE.has(n)

          let fill = 'transparent'
          let strokeColor = C.faint
          let strokeWidth = 0.5
          let textOpacity = 0.5
          let textWeight = '400'

          if (n === 1) {
            textOpacity = 0.25
          } else if (isRemoved) {
            textOpacity = 0.15
          } else if (step === 4 && prime) {
            strokeColor = C.fg
            strokeWidth = 1.5
            textOpacity = 1
            textWeight = '700'
          } else if (step < 4 && !isRemoved) {
            textOpacity = 0.75
          }
          if (isActive && step > 0 && isRemoved) {
            fill = C.faint
            textOpacity = 0.35
          }
          // the prime we keep and sieve with this step
          if (activeP && n === activeP) {
            strokeColor = C.fg
            strokeWidth = 1.5
            textOpacity = 1
            textWeight = '700'
          }

          return (
            <g key={n}>
              <rect
                x={padX + col * cellW + 2}
                y={padY + row * cellH + 2}
                width={cellW - 4}
                height={cellH - 4}
                fill={fill}
                stroke={strokeColor}
                strokeWidth={strokeWidth}
              />
              {T(x, y + 5, n, { opacity: textOpacity, weight: textWeight, size: 13 })}
            </g>
          )
        })}
        {T(W / 2, H - 6, stepLabels[step], { opacity: 0.45, size: 10, upper: true, ls: '0.08em' })}
      </svg>
    </div>
  )
}

// 13.1.4 Twin primes on the number line (computed)
function PrimalityTwinPairs(limit) {
  const pairs = []
  for (let p = 3; p + 2 <= limit; p += 2) {
    if (isPrime(p) && isPrime(p + 2)) pairs.push([p, p + 2])
  }
  return pairs
}

function TwinPrimesOnNumberLineRefined() {
  const C = useVizColors()
  const pairs = useMemo(() => PrimalityTwinPairs(100), [])

  const W = 580
  const axisY = 96
  const bracketY = axisY - 16
  const toX = v => 20 + (v / 100) * (W - 40)

  // Greedy label-level assignment: each pair tuple sits ≥44px from its
  // same-level neighbour, otherwise it steps up a level (with a leader line).
  const labels = useMemo(() => {
    const minGap = 44
    const lastX = []
    return pairs.map(([a, b]) => {
      const cx = toX((a + b) / 2)
      let level = 0
      while (lastX[level] !== undefined && cx - lastX[level] < minGap) level++
      lastX[level] = cx
      return { a, b, cx, level }
    })
  }, [pairs])

  const labelH = 16
  const H = axisY + 28

  return (
    <svg
      viewBox={`0 0 ${W} ${H + 16}`}
      preserveAspectRatio="xMidYMid meet"
      width="100%"
      style={{ display: 'block', margin: '0 auto', color: C.fg, fontFamily: "'D-DIN', monospace" }}
    >
      <line x1={20} y1={axisY} x2={W - 20} y2={axisY} stroke={C.dim} strokeWidth={1.5} />
      {[0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100].map(t => (
        <g key={t}>
          <line
            x1={toX(t)}
            y1={axisY - 4}
            x2={toX(t)}
            y2={axisY + 4}
            stroke={C.dim}
            strokeWidth={1}
          />
          {T(toX(t), axisY + 18, t, { opacity: 0.35, size: 10 })}
        </g>
      ))}
      {labels.map(({ a, b, cx, level }, i) => {
        const x1 = toX(a)
        const x2 = toX(b)
        const labelY = bracketY - 8 - level * labelH
        return (
          <g key={i}>
            {/* tight tick pair: the two members differ by 2 */}
            <line x1={x1} y1={axisY - 8} x2={x1} y2={axisY + 8} stroke={C.fg} strokeWidth={2} />
            <line x1={x2} y1={axisY - 8} x2={x2} y2={axisY + 8} stroke={C.fg} strokeWidth={2} />
            {/* bracket joining the pair */}
            <g stroke={C.fg} strokeWidth={1} opacity={0.55} fill="none">
              <path
                d={`M ${x1} ${axisY - 8} L ${x1} ${bracketY} L ${x2} ${bracketY} L ${x2} ${axisY - 8}`}
              />
            </g>
            {/* leader from bracket up to a clear label slot */}
            {level > 0 && (
              <line
                x1={cx}
                y1={bracketY}
                x2={cx}
                y2={labelY + 4}
                stroke={C.dim}
                strokeWidth={0.75}
                opacity={0.5}
              />
            )}
            {T(cx, labelY, `(${a}, ${b})`, { opacity: 0.95, weight: '700', size: 11 })}
          </g>
        )
      })}
      {T(W / 2, H + 10, `${pairs.length} twin prime pairs up to 100. Each pair differs by 2.`, {
        opacity: 0.35,
        size: 10,
        upper: true,
        ls: '0.06em'
      })}
    </svg>
  )
}

// 13.1.5 Goldbach decomposition (all prime pairs)
function goldbachPairs(n) {
  const out = []
  for (let p = 2; p <= n / 2; p++) {
    if (isPrime(p) && isPrime(n - p)) out.push([p, n - p])
  }
  return out
}

function GoldbachDecompositionRefined() {
  const C = useVizColors()
  const [even, setEven] = useState(28)
  const pairs = useMemo(() => goldbachPairs(even), [even])
  const allPrimes = useMemo(() => {
    const out = []
    for (let k = 2; k <= even; k++) if (isPrime(k)) out.push(k)
    return out
  }, [even])

  const W = 560
  const axisY = 150
  const mX = 36
  const rowH = 22
  const eqTop = axisY + 30
  const H = eqTop + pairs.length * rowH + 22

  const toX = v => mX + (v / even) * (W - 2 * mX)
  const midX = toX(even / 2)

  return (
    <div style={{ fontFamily: "'D-DIN', monospace" }}>
      <Slider
        label={`Even number: ${even}`}
        value={even}
        min={4}
        max={60}
        step={2}
        onChange={setEven}
        format={v => `${v}`}
      />
      <svg
        viewBox={`0 0 ${W} ${H}`}
        preserveAspectRatio="xMidYMid meet"
        width="100%"
        style={{ display: 'block', margin: '8px auto 0', color: C.fg }}
      >
        {/* even-number box, top centre */}
        <rect
          x={W / 2 - 40}
          y={12}
          width={80}
          height={36}
          fill="transparent"
          stroke={C.fg}
          strokeWidth={2}
        />
        {T(W / 2, 36, even, { size: 20, weight: '700' })}

        {/* number line 0 … even with end ticks */}
        <line x1={toX(0)} y1={axisY} x2={toX(even)} y2={axisY} stroke={C.dim} strokeWidth={1.5} />
        {[0, even].map(t => (
          <g key={t}>
            <line
              x1={toX(t)}
              y1={axisY - 5}
              x2={toX(t)}
              y2={axisY + 5}
              stroke={C.dim}
              strokeWidth={1}
            />
            {T(toX(t), axisY + 18, t, { opacity: 0.45, size: 11 })}
          </g>
        ))}

        {/* faint context ticks for every prime ≤ even */}
        {allPrimes.map(p => (
          <line
            key={`pt${p}`}
            x1={toX(p)}
            y1={axisY - 3}
            x2={toX(p)}
            y2={axisY + 3}
            stroke={C.faint}
            strokeWidth={1}
          />
        ))}

        {/* axis of symmetry at even/2 */}
        <line
          x1={midX}
          y1={56}
          x2={midX}
          y2={axisY + 9}
          stroke={C.fg}
          strokeWidth={1}
          opacity={0.4}
          strokeDasharray="4 3"
        />
        {T(midX, 64, `symmetric about ${even / 2}`, {
          opacity: 0.4,
          size: 10,
          upper: true,
          ls: '0.05em'
        })}

        {/* each Goldbach pair: arc joining the two symmetric primes */}
        {pairs.map(([p, q], i) => {
          const x1 = toX(p)
          const x2 = toX(q)
          const h = 24 + i * 16
          return (
            <g key={i}>
              <path
                d={`M ${x1} ${axisY} Q ${midX} ${axisY - h} ${x2} ${axisY}`}
                fill="none"
                stroke={C.fg}
                strokeWidth={1.25}
                opacity={0.5}
              />
              <circle cx={x1} cy={axisY} r={3.5} fill={C.fg} />
              <circle cx={x2} cy={axisY} r={3.5} fill={C.fg} />
            </g>
          )
        })}

        {/* exact decompositions, one per row, no horizontal collision */}
        {pairs.map(([p, q], i) => (
          <TexPx
            key={`eq${i}`}
            x={W / 2}
            y={eqTop + i * rowH + 12}
            tex={`${even} = ${p} + ${q}`}
            anchor="middle"
            size={FONT_TEX}
            opacity={0.85}
          />
        ))}

        {T(
          W / 2,
          H - 6,
          `${pairs.length} way${pairs.length === 1 ? '' : 's'} to write ${even} as a sum of two primes.`,
          { opacity: 0.4, size: 10, upper: true, ls: '0.05em' }
        )}
      </svg>
    </div>
  )
}

// 13.1.7 Consecutive composites via n!
function ConsecutiveCompositesStripRefined() {
  const C = useVizColors()
  const [n, setN] = useState(7)
  const nfact = useMemo(() => {
    let f = 1
    for (let k = 2; k <= n; k++) f *= k
    return f
  }, [n])
  const cells = useMemo(
    () => Array.from({ length: n - 1 }, (_, i) => ({ j: i + 2, val: nfact + (i + 2) })),
    [n, nfact]
  )

  const W = 580
  const cellW = Math.min(92, (W - 40) / cells.length)
  const cellH = 56
  const H = cellH + 92
  const startX = (W - cells.length * cellW) / 2

  return (
    <div style={{ fontFamily: "'D-DIN', monospace" }}>
      <div style={{ display: 'flex', justifyContent: 'center', gap: 8, marginBottom: 8 }}>
        {[5, 6, 7].map(k => (
          <button key={k} onClick={() => setN(k)} style={btnStyle(n === k, C)}>
            {`n = ${k}`}
          </button>
        ))}
      </div>
      <svg
        viewBox={`0 0 ${W} ${H}`}
        preserveAspectRatio="xMidYMid meet"
        width="100%"
        style={{ display: 'block', margin: '0 auto', color: C.fg }}
      >
        <TexPx
          x={W / 2}
          y={22}
          tex={`${n}! = ${nfact.toLocaleString()}`}
          anchor="middle"
          size={FONT_TEX}
          opacity={0.7}
        />
        {cells.map(({ j, val }, i) => {
          const x = startX + i * cellW
          return (
            <g key={i}>
              <rect
                x={x + 2}
                y={36}
                width={cellW - 4}
                height={cellH}
                fill="transparent"
                stroke={C.dim}
                strokeWidth={1}
              />
              {T(x + cellW / 2, 60, val.toLocaleString(), { size: 12, weight: '700' })}
              <TexPx
                x={x + cellW / 2}
                y={82}
                tex={`\\text{divisible by }\\mathbf{${j}}`}
                anchor="middle"
                size={FONT_SMALL}
                opacity={0.6}
              />
            </g>
          )
        })}
        {T(
          W / 2,
          H - 6,
          `${cells.length} numbers in a row, none prime. ${n}! + j is divisible by j.`,
          { opacity: 0.4, size: 10, upper: true, ls: '0.05em' }
        )}
      </svg>
    </div>
  )
}

// 13.1.8 Factor tree (computed for any n)
const TREE_NUMBERS = [12, 60, 91, 252, 360, 924]

function buildFactorTree(n) {
  if (n < 4 || isPrime(n)) return { value: n, prime: true }
  let p = 2
  while (n % p !== 0) p++
  return { value: n, prime: false, children: [{ value: p, prime: true }, buildFactorTree(n / p)] }
}

function FactorTreeInteractiveRefined() {
  const C = useVizColors()
  const [num, setNum] = useState(60)

  const { root, W, H } = useMemo(() => {
    const tree = buildFactorTree(num)
    const levelH = 68
    const leafGap = 78
    let leaf = 0
    let maxDepth = 0
    const place = (node, depth) => {
      maxDepth = Math.max(maxDepth, depth)
      node.y = 44 + depth * levelH
      if (node.children) {
        node.children.forEach(c => place(c, depth + 1))
        node.x = (node.children[0].x + node.children[node.children.length - 1].x) / 2
      } else {
        node.x = 44 + leaf * leafGap
        leaf += 1
      }
    }
    place(tree, 0)
    return {
      root: tree,
      W: Math.max(360, 44 + leaf * leafGap + 20),
      H: 44 + (maxDepth + 1) * levelH
    }
  }, [num])

  const nodeR = 20
  const edges = []
  const nodes = []
  const walk = node => {
    nodes.push(node)
    if (node.children) {
      node.children.forEach(c => {
        edges.push([node, c])
        walk(c)
      })
    }
  }
  walk(root)

  const exp = useMemo(() => {
    const f = factor(num)
    return Object.keys(f)
      .map(Number)
      .sort((a, b) => a - b)
      .map(p => (f[p] > 1 ? `${p}^{${f[p]}}` : `${p}`))
      .join(' \\times ')
  }, [num])

  return (
    <div style={{ fontFamily: "'D-DIN', monospace" }}>
      <div style={{ display: 'flex', justifyContent: 'center', gap: 6, marginBottom: 8 }}>
        {TREE_NUMBERS.map(k => (
          <button key={k} onClick={() => setNum(k)} style={btnStyle(num === k, C)}>
            {k}
          </button>
        ))}
      </div>
      <svg
        viewBox={`0 0 ${W} ${H + 34}`}
        preserveAspectRatio="xMidYMid meet"
        width="100%"
        style={{ display: 'block', margin: '0 auto', color: C.fg }}
      >
        {edges.map(([a, b], i) => (
          <line
            key={i}
            x1={a.x}
            y1={a.y + nodeR}
            x2={b.x}
            y2={b.y - nodeR}
            stroke={C.dim}
            strokeWidth={1.5}
          />
        ))}
        {nodes.map((node, i) => {
          const lbl = String(node.value)
          return (
            <g key={i}>
              <circle
                cx={node.x}
                cy={node.y}
                r={nodeR}
                fill="transparent"
                stroke={node.prime ? C.fg : C.dim}
                strokeWidth={node.prime ? 2 : 1}
              />
              {T(node.x, node.y + 5, lbl, {
                opacity: node.prime ? 1 : 0.7,
                size: lbl.length > 2 ? 12 : 15,
                weight: node.prime ? '700' : '400'
              })}
            </g>
          )
        })}
        <TexPx
          x={W / 2}
          y={H + 24}
          tex={`${num} = ${exp}`}
          anchor="middle"
          size={FONT_TEX}
          opacity={0.75}
        />
      </svg>
    </div>
  )
}

export default function PrimeNumbersAndPrimeFactorisation() {
  const config = useConfig()
  return <LearningTemplate config={config} />
}
