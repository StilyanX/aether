import { LearningTemplate } from '../../../../components/learning/learning-template'
import { useVizColors } from '../../../../hooks/use-viz-colors'
import * as viz from './odd-and-even-numbers-viz'

function useConfig() {
  const C = useVizColors()
  const config = {
    cssPrefix: 'oae',
    documentTitle: 'Odd and Even Numbers - AETHER',
    learning: {
      groupTitle: 'Number Theory',
      category: 'Module 3.6',
      title: 'Odd and Even Numbers',
      subtitle:
        'Every integer is either even or odd. This single fact powers divisibility, parity arithmetic, and algebraic proofs.',
      sections: [
        // == Section 0: What Makes a Number Even or Odd ======================
        <>
          <h2>What Makes a Number Even or Odd</h2>
          <p>
            An integer is a whole number like 0, 1, 2, or -3 (no fractions). Take any integer and
            divide it by 2. There are only two possible remainders: 0 or 1. That single fact splits
            every integer into two groups. It gives you the whole idea of parity. Parity is just
            whether a number is even or odd. Walk the integers in steps of 1 and you alternate:
            even, odd, even, odd. That is the same fact as the remainder flipping between 0 and 1.
          </p>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>Before reading on: which group does 0 belong to? Write your answer and reason.</p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                Zero is even. Dividing 0 by 2 gives remainder 0. So 0 fits the definition of an even
                number exactly. Zero is also a multiple of 2: {`$0 = 2 \\times 0$`}.
              </p>
            </details>
          </div>
          <div className="lrn-definition">
            <span className="lrn-definition-term">Even Number</span>
            <div className="lrn-definition-desc">
              <p>
                A number is <strong>even</strong> if it is exactly divisible by 2. It leaves
                remainder 0 when you divide it by 2. All even numbers are multiples of 2. A multiple
                of 2 is any number you reach by counting up in 2s: 2, 4, 6, 8, and so on.
              </p>
            </div>
          </div>
          <div className="lrn-definition">
            <span className="lrn-definition-term">Odd Number</span>
            <div className="lrn-definition-desc">
              <p>
                A number is <strong>odd</strong> if it leaves a remainder of 1 when you divide it by
                2. It is not divisible by 2.
              </p>
            </div>
          </div>
          <h3>Fill in the Definitions</h3>
          <p>Complete these three statements to lock in the definition:</p>
          <ul className="lrn-list">
            <li>
              An <strong>even</strong> number is exactly divisible by 2.
            </li>
            <li>
              An <strong>odd</strong> number leaves a remainder of 1 when you divide it by 2.
            </li>
            <li>
              All <strong>even</strong> numbers are multiples of 2.
            </li>
          </ul>
          <viz.ParityNumberLine C={C} />
          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>
              Look at the number line. Why are 0 and 2 both in the even group, but 1 is in the odd
              group?
            </p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                {`$0 \\div 2 = 0$ remainder 0. $2 \\div 2 = 1$ remainder 0. Both leave no remainder, so both are even. $1 \\div 2 = 0$ remainder 1. It leaves a remainder, so it is odd. The group depends entirely on the remainder when dividing by 2.`}
              </p>
            </details>
          </div>
        </>,

        // == Section 1: The Algebraic Form ===================================
        <>
          <h2>
            The Algebraic Form: {`$2k$`} and {`$2k+1$`}
          </h2>
          <p>
            Words tell you what an even number is. Algebra lets you reason about every even number
            at once. The two forms below are how you carry parity into a proof or a calculation.
          </p>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              Before reading on: can you write 23 in the form {`$2k+1$`}? What is {`$k$`}? Write
              your answer.
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                {`$23 = 2 \\times 11 + 1$, so $k = 11$. Dividing 23 by 2 gives quotient 11 and remainder 1. The quotient becomes the value of $k$ in the $2k+1$ form.`}
              </p>
            </details>
          </div>
          <div className="lrn-definition">
            <span className="lrn-definition-term">Even: {`$n = 2k$`}</span>
            <div className="lrn-definition-desc">
              <p>
                You can write every even integer as {`$2k$`} for some integer {`$k$`}. The factor of
                2 shows the number is divisible by 2 with no remainder. {`$k$`} can be negative,
                which is how negative numbers get a parity too.
              </p>
              <p>
                <strong>Examples:</strong> {`$0 = 2 \\times 0$`}, {`$4 = 2 \\times 2$`},{' '}
                {`$12 = 2 \\times 6$`}, {`$-6 = 2 \\times (-3)$`}.
              </p>
            </div>
          </div>
          <div className="lrn-definition">
            <span className="lrn-definition-term">Odd: {`$n = 2k+1$`}</span>
            <div className="lrn-definition-desc">
              <p>
                You can write every odd integer as {`$2k+1$`} for some integer {`$k$`}. The {`$+1$`}{' '}
                is the remainder left over after you remove the factor of 2.
              </p>
              <p>
                <strong>Examples:</strong> {`$1 = 2 \\times 0 + 1$`}, {`$3 = 2 \\times 1 + 1$`},{' '}
                {`$7 = 2 \\times 3 + 1$`}, {`$-3 = 2 \\times (-2) + 1$`}.
              </p>
            </div>
          </div>
          <h3>Why Every Integer Is Exactly One of These</h3>
          <p>
            Divide {`$n$`} by 2. The remainder is 0 or 1. It is never both and never anything else.
            So {`$n$`} matches exactly one of the two forms. The WHY block below proves this from
            how division works.
          </p>
          <viz.ParityPairing C={C} />
          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>
              {`The dot diagram shows $n = 6$ as $2 \\times 3$. Drag to $n = 7$. What changes in the diagram, and why does that match the $2k+1$ form?`}
            </p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                {`At $n = 7$, one dot is left over after all pairs are formed. The pairs give $2 \\times 3 = 6$ dots. The leftover gives the $+1$. So $7 = 2 \\times 3 + 1$, matching the $2k+1$ form with $k = 3$. The leftover dot is the geometric picture of the remainder.`}
              </p>
            </details>
          </div>
          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>
              {`This is the $d = 2$ case of how division always works. Take any integer $n$ and divide by 2. You always get one answer $q$ and one leftover $r$. The leftover is 0 or 1, nothing else. Even means $r = 0$, so $n = 2q$. Odd means $r = 1$, so $n = 2q + 1$. That is why every integer is exactly $2k$ or $2k+1$.`}
            </p>
          </div>
        </>,

        // == Section 2: The Divisibility-by-2 Test ===========================
        <>
          <h2>The Last Digit Carries the Parity</h2>
          <p>
            You never have to divide a long number by 2 to find its parity. Every digit in front of
            the ones place sits on a multiple of 10, and multiples of 10 are all even. The whole
            number's parity is whatever the ones digit's parity is.
          </p>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              Before reading on: is 5 687 623 688 even or odd? Look only at the last digit. Write
              your answer and your reasoning.
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                Even. The last digit is 8, which is one of {`{0, 2, 4, 6, 8}`}. The rest of the
                number is a multiple of 10 (always even), so the last digit alone fixes the parity
                of the whole number.
              </p>
            </details>
          </div>
          <div className="lrn-definition">
            <span className="lrn-definition-term">The Parity Reading of a Number</span>
            <div className="lrn-definition-desc">
              <p>
                Look at the ones digit. If it is one of {`{0, 2, 4, 6, 8}`}, the number is even. If
                it is one of {`{1, 3, 5, 7, 9}`}, the number is odd.
              </p>
            </div>
          </div>
          <div className="lrn-callout">
            <p>
              <strong>Examples:</strong> 1 348 ends in 8, so it is even. 72 501 ends in 1, so it is
              odd. 1 000 000 ends in 0, so it is even.
            </p>
          </div>
          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>
              A student says: "7 641 138 ends in 8, so it is even." Is that correct? Why does
              checking only the last digit give the right answer?
            </p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                Correct. Everything in front of the 8 sits on a multiple of 10. Multiples of 10 are
                all even, so they add no remainder. Only the last digit, 8, decides the parity.
                Since 8 is even, the whole number is even.
              </p>
            </details>
          </div>
          <div className="lrn-warning">
            <p>
              <strong>Common error:</strong> some students add all digits and check if the sum is
              even. This works by accident for some numbers but it is the divisibility-by-3 and
              divisibility-by-9 test, not divisibility-by-2. For parity, check only the last digit.
            </p>
          </div>
        </>,

        // == Section 3: Parity Arithmetic =====================================
        <>
          <h2>Parity Arithmetic</h2>
          <p>
            Combine two integers with {`$+$`}, {`$-$`}, or {`$\\times$`} and the parity of the
            result is fixed by the parities of the inputs. All six rules below fall straight out of
            the {`$2k$`} and {`$2k+1$`} forms, so you never have to memorize them as a separate
            table.
          </p>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              Before reading on: is the sum of two odd numbers always even, always odd, or sometimes
              either? Write your prediction and reason.
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                Always even. {`$(2j+1) + (2k+1) = 2j + 2k + 2 = 2(j+k+1)$`}, which is in the{' '}
                {`$2m$`} form. The two remainder-1 pieces combine to give +2, which is even, so the
                total remainder is 0.
              </p>
            </details>
          </div>
          <h3>Rules for Addition and Subtraction</h3>
          <p>
            First a quick look at the pattern: {`$6 + 10 = 16$`} (even), {`$7 + 11 = 18$`} (even),{' '}
            {`$6 + 7 = 13$`} (odd). Now here is why.
          </p>
          <ul className="lrn-list">
            <li>{`Even + even: $2j + 2k = 2(j+k)$. Result is even.`}</li>
            <li>{`Odd + odd: $(2j+1) + (2k+1) = 2(j+k+1)$. Result is even.`}</li>
            <li>{`Even + odd: $2j + (2k+1) = 2(j+k) + 1$. Result is odd.`}</li>
          </ul>
          <p>
            Subtraction follows the same pattern because {`$a - b = a + (-b)$`} and {`$-b$`} has the
            same parity as {`$b$`}.
          </p>
          <h3>Rules for Multiplication</h3>
          <ul className="lrn-list">
            <li>{`Even × even: $2j \\times 2k = 4jk = 2(2jk)$. Result is even.`}</li>
            <li>{`Even × odd: $2j \\times (2k+1) = 2j(2k+1) = 2 \\times [j(2k+1)]$. Result is even.`}</li>
            <li>{`Odd × odd: $(2j+1)(2k+1) = 4jk + 2j + 2k + 1 = 2(2jk+j+k) + 1$. Result is odd.`}</li>
          </ul>
          <viz.ParitySumCalculator C={C} />
          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>
              {`The calculator shows $a = 4$ (even) and $b = 7$ (odd), sum = 11 (odd). Why does the rule "even + odd = odd" hold? Explain using the $2k$ forms.`}
            </p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                {`$4 = 2 \\times 2$ and $7 = 2 \\times 3 + 1$. Their sum: $2 \\times 2 + 2 \\times 3 + 1 = 2(2+3) + 1 = 2 \\times 5 + 1 = 11$. The result is in the $2k+1$ form, so it is odd. The single $+1$ from the odd number is carried into the sum unchanged.`}
              </p>
            </details>
          </div>
          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>
              Track the leftover {`$+1$`}s. Two evens have none, so the sum stays even. Two odds
              have two, but {`$1 + 1 = 2$`} gets absorbed back into a factor of 2, so the sum is
              even again. One even and one odd leaves a single {`$+1$`} with nothing to pair with,
              and the sum is odd.
            </p>
          </div>
          <div className="lrn-callout">
            <p>
              <strong>Quick reference:</strong> E + E = E. O + O = E. E + O = O. E × E = E. E × O =
              E. O × O = O.
            </p>
          </div>
          <p>You can now predict the parity of any sum or product without computing it.</p>
        </>,

        // == Section 4: Squares and Parity Proofs ============================
        <>
          <h2>Squares and Parity Proofs</h2>
          <p>
            Parity is a fast filter in proofs. Asking "is this even or odd?" often answers a problem
            before you do any real arithmetic. A perfect square is a number you get by multiplying a
            whole number by itself, like {`$9 = 3 \\times 3$`}.
          </p>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              Before reading on: is {`$11^2$`} even or odd? You do not need to compute the value.
              Write your prediction and reason.
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                Odd. 11 is odd. Squaring an odd number gives an odd number, because{' '}
                {`$(2k+1)^2 = 2(2k^2+2k) + 1$`}. The {`$+1$`} survives squaring and cannot be
                absorbed into any factor of 2. Check: {`$11^2 = 121$`}, last digit 1, odd.
              </p>
            </details>
          </div>
          <h3>Squares of Even and Odd Numbers</h3>
          <p>
            {`If $n$ is even, then $n = 2k$, so $n^2 = 4k^2 = 2(2k^2)$, which is even. If $n$ is odd, then $n = 2k+1$, so $n^2 = 4k^2 + 4k + 1 = 2(2k^2 + 2k) + 1$, which is odd.`}
          </p>
          <div className="lrn-callout">
            <p>
              <strong>Result:</strong> the square of an even number is even; the square of an odd
              number is odd. Squaring preserves parity.
            </p>
          </div>
          <viz.ParityOfSquares C={C} />
          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>
              {`The diagram shows $4^2 = 16$ as a $4 \\times 4$ grid of dots. Now set $n = 5$ in the slider. The grid becomes $5 \\times 5 = 25$ dots. Write out why $25$ is odd using the $2k+1$ form. There is no reveal here. Compare your answer with the squares result above.`}
            </p>
          </div>
          <h3>Sorting the Numbers 1 to 9</h3>
          <p>
            Sort each number from 1 to 9 into one group: even or odd. Every number belongs to
            exactly one group. Just check the remainder when you divide by 2.
          </p>
          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Even</span>
              <p>2, 4, 6, 8. Each one divides by 2 with no remainder. There are four of them.</p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Odd</span>
              <p>1, 3, 5, 7, 9. Each one leaves a remainder of 1. There are five of them.</p>
            </div>
          </div>
          <p>
            What about 0? Zero is even, because {`$0 = 2 \\times 0$`} leaves remainder 0 when you
            divide by 2.
          </p>
          <h3>Mystery Numbers</h3>
          <p>Use parity and place value together to identify each mystery number.</p>
          <ul className="lrn-list">
            <li>
              <strong>I am odd, between 10 and 20, and my last digit is 5.</strong> My last digit is
              5, so I am odd. Between 10 and 20, only 15 ends in 5. Answer: <strong>15</strong>.
            </li>
            <li>
              <strong>I am even, between 20 and 30, and my last digit is 4.</strong> My last digit
              is 4, so I am even. Between 20 and 30, only 24 ends in 4. Answer: <strong>24</strong>.
            </li>
          </ul>
          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>
              Parity cuts the list of possible answers in half. Once you know a number is odd, you
              skip every even candidate at once. This is why parity is often the first thing you
              check in a proof.
            </p>
          </div>
        </>,

        // == Section 5: Counting Parity in a Range ============================
        <>
          <h2>Counting Even and Odd Numbers in a Range</h2>
          <p>
            How many even numbers are there from 1 to 200? You could list them, but a one-step
            formula does the job for any range. The trick is to count multiples of 2 directly. The
            floor symbol {`$\\lfloor x \\rfloor$`} just means round {`$x$`} down to the nearest
            whole number.
          </p>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              Before reading on: how many even numbers lie between 1 and 50? Write your prediction
              and reason.
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                25 of them. The even numbers from 1 to 50 are 2, 4, 6, ..., 50. Each is {`$2k$`} for
                {`$k = 1, 2, \\ldots, 25$`}. Since 50 is even, the count is exactly half:
                {`$\\lfloor 50/2 \\rfloor = 25$`}.
              </p>
            </details>
          </div>
          <h3>Counting Multiples of 2</h3>
          <p>
            The even numbers from 1 to {`$N$`} are the multiples of 2: {`$2, 4, 6, \\ldots$`}. The
            count is {`$\\lfloor N/2 \\rfloor$`}.
          </p>
          <div className="lrn-steps">
            <ol className="lrn-list">
              <li>
                To count even numbers from 1 to {`$N$`}: compute {`$\\lfloor N/2 \\rfloor$`}.
              </li>
              <li>
                To count odd numbers from 1 to {`$N$`}: subtract from the total:{' '}
                {`$N - \\lfloor N/2 \\rfloor$`}.
              </li>
            </ol>
          </div>
          <div className="lrn-callout">
            <p>
              <strong>Example:</strong> How many even numbers from 1 to 200?{' '}
              {`$\\lfloor 200/2 \\rfloor = 100$`}. How many odd numbers? {`$200 - 100 = 100$`}.
              Equal split because 200 is even.
            </p>
          </div>
          <div className="lrn-callout">
            <p>
              <strong>Example:</strong> How many even numbers from 1 to 7?{' '}
              {`$\\lfloor 7/2 \\rfloor = 3$`} (namely 2, 4, 6). How many odd? {`$7 - 3 = 4$`}{' '}
              (namely 1, 3, 5, 7). Unequal split because 7 is odd.
            </p>
          </div>
          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>
              {`Why does $\\lfloor N/2 \\rfloor$ count the even numbers but not the odd ones? Think about what each step of 2 lands on.`}
            </p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                {`The even numbers are $2, 4, 6, \\ldots$, the multiples of 2. The $k$-th even number is $2k$. So counting evens up to $N$ means counting how many times 2 fits inside $N$. That count is $N/2$, rounded down to a whole number: $\\lfloor N/2 \\rfloor$. The odd numbers sit in the gaps between them, so they are not counted by this formula. You get the odd count by subtracting from the total.`}
              </p>
            </details>
          </div>
          <p>You can now count the even or odd numbers in any range with one floor division.</p>
        </>
      ]
    },

    practice: [
      // Core definition cards
      {
        q: `Copy and complete: (a) An [even / odd] number is exactly divisible by 2. (b) An [____] number leaves a remainder of 1 when divided by 2. (c) All [____] numbers are multiples of 2.`,
        a: `(a) Even. An even number is exactly divisible by 2. (b) Odd. An odd number leaves a remainder of 1 when divided by 2. The definition comes directly from the division algorithm. (c) Even. All even numbers are multiples of 2 because being a multiple of 2 and being exactly divisible by 2 are the same condition.`
      },
      {
        q: `Write the number 14 in the form $2k$ and identify $k$.`,
        a: `$14 = 2 \\times 7$, so $k = 7$. The form $2k$ shows that 14 is even: dividing by 2 gives exactly 7 with no remainder.`
      },
      {
        q: `Write the number 9 in the form $2k+1$ and identify $k$.`,
        a: `$9 = 2 \\times 4 + 1$, so $k = 4$. The form $2k+1$ shows that 9 is odd: dividing by 2 gives quotient 4 and remainder 1.`
      },
      // Divisibility-by-2 test
      {
        q: `Use the last-digit rule to classify each number as even or odd without full division: 738, 1 001, 54 320, 99 999.`,
        a: `738: last digit 8 (even) → even. 1 001: last digit 1 (odd) → odd. 54 320: last digit 0 (even) → even. 99 999: last digit 9 (odd) → odd. The last digit alone determines parity because the rest of the number is a multiple of 10, which is always even.`
      },
      // Parity arithmetic: core rules
      {
        q: `State the parity of each result and prove it using $2k$ / $2k+1$ forms: (a) $6 + 10$, (b) $7 + 11$, (c) $4 + 9$.`,
        a: `(a) $6 = 2 \\times 3$, $10 = 2 \\times 5$. Sum: $2 \\times 3 + 2 \\times 5 = 2(3+5) = 2 \\times 8 = 16$. Even. (b) $7 = 2 \\times 3 + 1$, $11 = 2 \\times 5 + 1$. Sum: $2 \\times 3 + 1 + 2 \\times 5 + 1 = 2(3+5+1) = 18$. Even (odd + odd = even). (c) $4 = 2 \\times 2$, $9 = 2 \\times 4 + 1$. Sum: $2 \\times 2 + 2 \\times 4 + 1 = 2(2+4) + 1 = 13$. Odd (even + odd = odd).`
      },
      {
        q: `State the parity of $7 \\times 13$ and $6 \\times 9$, with proof.`,
        a: `$7 \\times 13$: both odd. $(2 \\times 3 + 1)(2 \\times 6 + 1) = 4 \\times 18 + 2 \\times 3 + 2 \\times 6 + 1 = 2(36 + 3 + 6) + 1 = 91$. Odd. $6 \\times 9$: one factor even. $6 = 2 \\times 3$, so $6 \\times 9 = 2 \\times 3 \\times 9 = 54$. Even (any product containing an even factor is even).`
      },
      // Transfer: parity of sum expressions
      {
        q: `What is the parity of $7 \\times 13 + 4$? Work through the parity rules step by step.`,
        a: `Step 1: $7$ is odd, $13$ is odd. Odd $\\times$ odd = odd. So $7 \\times 13$ is odd. Step 2: $4$ is even. Odd $+$ even = odd. So $7 \\times 13 + 4$ is odd. Check: $91 + 4 = 95$, last digit 5 (odd). The rule chain predicts the correct result.`
      },
      {
        q: `Is $n^2 - n$ always even for any integer $n$? Prove it using parity.`,
        a: `Yes, always even. $n^2 - n = n(n-1)$. These are two consecutive integers. One of any two consecutive integers is even. An even factor makes the product even. Alternatively: if $n$ is even, $n(n-1)$ contains the even factor $n$, so it is even. If $n$ is odd, then $n-1$ is even, so again the product is even. Both cases give an even result.`
      },
      // Classification by parity
      {
        q: `Sort the numbers 1 to 9 into even and odd.`,
        a: `Even: 2, 4, 6, 8 (each leaves remainder 0 when you divide by 2). Odd: 1, 3, 5, 7, 9 (each leaves remainder 1). Every number lands in exactly one group. There are four even numbers and five odd numbers in this range.`
      },
      {
        q: `What is the parity of $8 \\times 15$? Use the parity rules, do not compute.`,
        a: `8 is even, 15 is odd. Even × odd = even, because any product with an even factor keeps the factor of 2. So $8 \\times 15$ is even. Check: $8 \\times 15 = 120$, last digit 0, even.`
      },
      // Parity mystery numbers
      {
        q: `I am odd. I am between 10 and 20. My last digit is 5. What number am I?`,
        a: `My last digit is 5, so I am odd (5 is in the odd set 1, 3, 5, 7, 9). Between 10 and 20, only one number ends in 5: that is 15. So the answer is 15.`
      },
      {
        q: `I am even. I am between 30 and 40. My last digit is 6. What number am I?`,
        a: `My last digit is 6, so I am even (6 is in the even set 0, 2, 4, 6, 8). Between 30 and 40, only one number ends in 6: that is 36. So the answer is 36.`
      },
      // Counting parity in a range
      {
        q: `How many even numbers lie between 1 and 200 inclusive? How many odd numbers?`,
        a: `Even: $\\lfloor 200/2 \\rfloor = 100$. Odd: $200 - 100 = 100$. Equal split because 200 is even. The 100 even numbers are 2, 4, 6, ..., 200 (each is $2k$ for $k = 1, 2, \\ldots, 100$). The 100 odd numbers are 1, 3, 5, ..., 199.`
      },
      {
        q: `How many odd numbers are there from 1 to 99?`,
        a: `Count the evens first: $\\lfloor 99/2 \\rfloor = 49$ (they are 2, 4, ..., 98). Subtract from the total: $99 - 49 = 50$. So there are 50 odd numbers. They are 1, 3, 5, ..., 99. Each is $2k+1$ for $k = 0, 1, \\ldots, 49$, which is 50 values.`
      },
      {
        q: `How many odd numbers are there from 1 to 60? How many even?`,
        a: `Even: $\\lfloor 60/2 \\rfloor = 30$. Odd: $60 - 30 = 30$. Equal split because 60 is even. The 30 even numbers are 2, 4, ..., 60. The 30 odd numbers are 1, 3, ..., 59.`
      },
      // Squares and parity proofs
      {
        q: `What is the parity of $13^2 + 1$? Do not compute the value. Use the squares rule.`,
        a: `13 is odd. Squaring an odd number gives an odd number, so $13^2$ is odd. Now add 1: odd + 1 is even, because odd + odd = even (1 is odd). So $13^2 + 1$ is even. Check: $169 + 1 = 170$, last digit 0, even.`
      },
      // Transfer: parity of $n$ consecutive integers
      {
        q: `Among any 3 consecutive integers, how many are even and how many are odd? Explain why.`,
        a: `Exactly one or two are even (it alternates). If you start from an even number: even, odd, even (2 even, 1 odd). If you start from an odd number: odd, even, odd (1 even, 2 odd). In every case, at least one is even and at least one is odd. The three consecutive integers alternate remainders when you divide by 2. The pattern is 0, 1, 0 or 1, 0, 1.`
      },
      {
        q: `Why is the sum of any two consecutive integers always odd?`,
        a: `Consecutive integers have opposite parity: one is even ($2k$) and one is odd ($2k+1$). Their sum is $2k + (2k+1) = 4k + 1 = 2(2k) + 1$, which is odd. Or by the rule: even + odd = odd. This holds for any pair of consecutive integers.`
      },
      // Elaborate: why every integer is exactly one of even or odd
      {
        q: `Why is it impossible for a number to be both even and odd at the same time?`,
        a: `If $n$ were both even and odd, then $n = 2j$ and $n = 2k+1$ for some integers $j, k$. Subtracting: $0 = 2j - (2k+1) = 2(j-k) - 1$, so $1 = 2(j-k)$, meaning 1 would be even. But 1 divided by 2 gives remainder 1, not 0. Contradiction. So no integer can be both. Dividing by 2 always gives one remainder, 0 or 1. Every integer lands in exactly one group, even or odd. None are missed and none are in both.`
      },
      // Stretch: parity proof
      {
        q: `Prove that the sum of any three odd numbers is odd.`,
        a: `Write the three odd numbers as $2a+1$, $2b+1$, and $2c+1$. Add them: $(2a+1) + (2b+1) + (2c+1) = 2a + 2b + 2c + 3$. The three $+1$s give 3. Pull out the factor of 2: $2a + 2b + 2c + 3 = 2(a+b+c+1) + 1$. This is in the form $2m+1$ with $m = a+b+c+1$, so the sum is odd. The three $+1$s make 3, which is $2 + 1$. The extra $+1$ cannot pair off, so the total stays odd.`
      },
      // Self-explain: parity in divisibility
      {
        q: `A student says: "To check if a large number is divisible by 2, add all its digits and check if the sum is even." Is this correct? What is the right method?`,
        a: `Incorrect. The digit-sum test is the test for 3 and 9, not for 2. For 2, look at the ones digit only: 0, 2, 4, 6, 8 → even; 1, 3, 5, 7, 9 → odd. The student is mixing up two different divisibility tests.`
      }
    ],

    reference: {
      category: 'Quick Reference',
      title: 'Odd and Even Numbers',
      sections: [
        <>
          <h2>Core Definitions</h2>
          <div className="lrn-definition">
            <span className="lrn-definition-term">Even Number</span>
            <div className="lrn-definition-desc">
              <p>{`$$n = 2k \\quad (k \\in \\mathbb{Z})$$`}</p>
              <p>
                Here {`$k$`} is any integer. Remainder 0 when divided by 2. Last digit is 0, 2, 4,
                6, or 8.
              </p>
              <p>
                <strong>When to use:</strong> checking or proving divisibility by 2.
              </p>
            </div>
          </div>
          <div className="lrn-definition">
            <span className="lrn-definition-term">Odd Number</span>
            <div className="lrn-definition-desc">
              <p>{`$$n = 2k + 1 \\quad (k \\in \\mathbb{Z})$$`}</p>
              <p>Remainder 1 when divided by 2. Last digit is 1, 3, 5, 7, or 9.</p>
              <p>
                <strong>When to use:</strong> classifying integers that are not even; setting up
                parity proofs.
              </p>
            </div>
          </div>
          <div className="lrn-definition">
            <span className="lrn-definition-term">Divisibility-by-2 Test</span>
            <div className="lrn-definition-desc">
              <p>
                Check the last digit only. Even last digit → even number. Odd last digit → odd
                number.
              </p>
              <p>
                <strong>When to use:</strong> quick parity check of any integer without division.
              </p>
            </div>
          </div>
          <h2>Parity Arithmetic Rules</h2>
          <ul className="lrn-list">
            <li>Even + Even = Even. {`($2j + 2k = 2(j+k)$)`}</li>
            <li>Odd + Odd = Even. {`($(2j+1)+(2k+1) = 2(j+k+1)$)`}</li>
            <li>Even + Odd = Odd. {`($2j + (2k+1) = 2(j+k)+1$)`}</li>
            <li>Even × Even = Even.</li>
            <li>Even × Odd = Even.</li>
            <li>Odd × Odd = Odd.</li>
          </ul>
          <p>
            <strong>When to use:</strong> predicting parity of a result, or as a quick check after
            computing.
          </p>
          <h2>Squares and Parity</h2>
          <div className="lrn-callout">
            <p>Even² = even. Odd² = odd. Squaring preserves parity.</p>
            <p>{`Proof: $(2k)^2 = 4k^2 = 2(2k^2)$ (even). $(2k+1)^2 = 4k^2+4k+1 = 2(2k^2+2k)+1$ (odd).`}</p>
          </div>
          <p>
            <strong>When to use:</strong> checking parity of squared expressions; proving statements
            about perfect squares.
          </p>
          <h2>Counting Parity in a Range</h2>
          <div className="lrn-definition">
            <span className="lrn-definition-term">Even count from 1 to N</span>
            <div className="lrn-definition-desc">
              <p>{`$$\\left\\lfloor \\frac{N}{2} \\right\\rfloor$$`}</p>
              <p>
                <strong>When to use:</strong> counting multiples of 2 in a range.
              </p>
            </div>
          </div>
          <h2>Key Facts</h2>
          <ul className="lrn-list">
            <li>0 is even ({`$0 = 2 \\times 0$`}).</li>
            <li>1 is odd ({`$1 = 2 \\times 0 + 1$`}).</li>
            <li>Consecutive integers always have opposite parity.</li>
            <li>{`$n(n-1)$`} is always even (product of two consecutive integers).</li>
          </ul>
        </>
      ]
    },

    customCss:
      '.MafsView { --mafs-bg: transparent; --mafs-fg: var(--text-primary); --mafs-line-color: var(--border-subtle); }'
  }
  return config
}

export default function OddAndEvenNumbers() {
  const config = useConfig()
  return <LearningTemplate config={config} />
}
