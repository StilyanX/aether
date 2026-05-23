import ProjectTemplate, { Answer } from '../../../../../components/project/project-template'

function ProjectContent() {
  return (
    <div className="project-prose">
      {/* Project 1 */}
      <h2>Project 1: Which Fractions Terminate?</h2>

      <h3>Scenario</h3>
      <p>
        A textbook publisher is preparing a section claiming, in a single sentence: "a reduced
        fraction is a finite decimal exactly when its denominator's only prime factors are 2 and 5."
        The publisher asks you to verify the claim, produce the empirical evidence that supports it,
        and write a proof in both directions that could sit at the end of the section.
      </p>
      <p>
        The publisher is suspicious of vague language. They want a precise statement and a complete
        argument.
      </p>

      <h3>What to Produce</h3>

      <h4>Deliverable 1A: Classification Table</h4>
      <p>
        Build a table of the fractions {`$1/n$`} for {`$n$`} from 2 to 50. For each fraction, record
        whether the decimal expansion terminates. If it terminates, record the number of digits. If
        it repeats, record the period length and the length of any non-repeating prefix. Show three
        worked examples in full long division.
      </p>
      <p>
        Every fraction from 1/2 to 1/50 must appear. Each terminating row must show the correct
        digit count. Each repeating row must show the correct period. The three worked examples must
        show the long-division remainders at each step.
      </p>

      <h4>Deliverable 1B: The Conjecture</h4>
      <p>A written statement of the conjecture the table suggests. The statement must:</p>
      <ol className="lrn-list">
        <li>specify that the fraction is in lowest terms,</li>
        <li>specify exactly which primes are allowed in the denominator, and</li>
        <li>be quantified correctly with "if and only if".</li>
      </ol>
      <p>
        A grader should be able to read it cold and apply it to a new fraction without ambiguity.
      </p>

      <h4>Deliverable 1C: Two-Direction Proof</h4>
      <p>Prove the conjecture in both directions.</p>
      <ol className="lrn-list">
        <li>
          If the reduced denominator {`$n$`} has the form {`$2^a \\times 5^b$`}, then {`$m/n$`} is a
          finite decimal. This direction must use the identity {`$10^k = 2^k \\times 5^k$`}. Write{' '}
          {`$m/n$`} as a single fraction with a power of 10 denominator. State the new numerator and
          the power {`$10^k$`} explicitly. Do not appeal to "we can clear the denominator" without
          showing how.
        </li>
        <li>
          If the reduced denominator {`$n$`} has any prime factor other than 2 or 5, then {`$m/n$`}{' '}
          is not a finite decimal. This direction must use a clean contradiction. Show that if{' '}
          {`$m/n = q/10^k$`} with {`$n$`} containing a prime factor {`$p$`} other than 2 or 5, then{' '}
          {`$p$`} must divide {`$10^k$`}, which is impossible by uniqueness of prime factorisation.
          Name the contradiction.
        </li>
      </ol>

      <h4>Deliverable 1D: A Counterexample</h4>
      <p>
        Counter the wrong version: "a fraction {`$m/n$`} is a finite decimal if {`$n$`} divides some
        power of 10." Give a counterexample. Explain why it refutes the wrong version. Explain in
        one paragraph how the correct version repairs the mistake. (Hint: try a fraction like{' '}
        {`$3/6$`} that is not in lowest terms.)
      </p>

      {/* Project 2 */}
      <hr />
      <h2>Project 2: Build the Long Divider and Write the Chapter</h2>

      <h3>Scenario</h3>
      <p>
        A teacher running a flipped classroom wants two artefacts for next year's students. The
        first is a computational tool the students can use to explore the decimal expansion of any
        rational number. The tool must show not only the digits, but also the remainder sequence,
        the detected period, and the length of any non-repeating prefix.
      </p>
      <p>
        The second is a chapter, four to six pages long, explaining why every fraction is either a
        finite or a repeating decimal. The chapter is for a reader one year younger than the author.
        It must contain a complete proof of the repeating case, three worked examples, and language
        suitable to the target reader.
      </p>

      <h3>What to Produce</h3>

      <h4>Deliverable 2A: The Algorithm</h4>
      <p>
        Implement an algorithm in code (Python, JavaScript, or any language) or in a spreadsheet. It
        takes two positive integers {`$m$`} and {`$n$`} and outputs:
      </p>
      <ol className="lrn-list">
        <li>The integer part of {`$m/n$`}.</li>
        <li>
          The decimal digits one by one, stopping when the remainder reaches zero or when a
          remainder repeats.
        </li>
        <li>The full list of remainders generated at each step.</li>
        <li>The detected period length and the length of the non-repeating prefix.</li>
        <li>
          A presentation of the result as a fraction in lowest terms, confirming that the input{' '}
          {`$m/n$`} equals the displayed expansion.
        </li>
      </ol>
      <p>
        On {`$1/7$`} it must return digits 1, 4, 2, 8, 5, 7 with period 6 and prefix length 0. On{' '}
        {`$1/8$`} it returns 1, 2, 5 with no period. On {`$1/12$`} it returns 0, 8, then repeating
        3, with period 1 and prefix length 2. On {`$1/28$`} it returns 0, 3, then repeating 5, 7, 1,
        4, 2, 8, with period 6 and prefix length 2.
      </p>

      <h4>Deliverable 2B: The Test Suite</h4>
      <p>
        Write at least eight test inputs, with the expected output for each written by hand{' '}
        <em>before</em> running the algorithm. The tests must include:
      </p>
      <ul className="lrn-list">
        <li>at least one terminating fraction,</li>
        <li>at least one purely repeating fraction with period 1,</li>
        <li>one with a longer period,</li>
        <li>one with a non-repeating prefix followed by a repeating block.</li>
      </ul>
      <p>
        Explain what would happen if the algorithm were run on {`$0/n$`} or on {`$m/0$`}.
      </p>

      <h4>Deliverable 2C: The Chapter</h4>
      <p>Four to six pages, covering:</p>
      <ol className="lrn-list">
        <li>
          The definition of decimal expansion and the meaning of the bar notation for repetition.
        </li>
        <li>
          The statement that every fraction is either a finite decimal or a repeating decimal.
        </li>
        <li>
          A complete proof of the repeating case using division with remainder and the pigeonhole
          principle. Introduce, name, and explain the pigeonhole step.
        </li>
        <li>
          Three worked examples chosen to illustrate the proof: one finite case, one purely
          repeating case, one with a non-repeating prefix.
        </li>
        <li>
          A short paragraph relating the proof to the algorithm: where in the algorithm does the
          pigeonhole principle do its work?
        </li>
      </ol>
      <p>The proof must contain four named moves:</p>
      <ol className="lrn-list">
        <li>
          The division-with-remainder identity {`$10 \\cdot r = q \\cdot n + r'$`} with{' '}
          {`$0 \\le r' < n$`}.
        </li>
        <li>The observation that fewer than {`$n$`} different nonzero remainders are possible.</li>
        <li>The conclusion that within at most {`$n$`} steps a remainder must repeat.</li>
        <li>
          The observation that once a remainder repeats, the entire digit sequence from that point
          on repeats.
        </li>
      </ol>

      {/* Project 3 */}
      <hr />
      <h2>Project 3: Period Detective, and the Question of 0.999…</h2>

      <h3>Scenario</h3>
      <p>
        You have been asked to contribute two short pieces to a mathematics circle newsletter for
        advanced students.
      </p>
      <p>
        The first is an empirical investigation of how long the repeating block of {`$1/p$`} is, for
        primes {`$p$`} coprime to 10. The investigation should lead to a conjecture and a partial
        proof.
      </p>
      <p>
        The second is a position paper on the famous question of whether {`$0.\\overline{9} = 1$`}.
        The editor wants both the standard view and at least one coherent alternative framework,
        followed by a defended verdict.
      </p>

      <h3>What to Produce</h3>

      <h4>Deliverable 3A: The Period Table</h4>
      <p>
        For every prime {`$p$`} from 7 up to 47 that is coprime to 10, give the period of {`$1/p$`}.
        Alongside, write {`$p - 1$`} and the ratio of {`$p - 1$`} to the period. Use the algorithm
        from Project 2 if available, or perform long division by hand. Every prime from 7 to 47
        except 5 must appear, with the correct period.
      </p>

      <h4>Deliverable 3B: A Conjecture About the Period</h4>
      <p>
        State a conjecture about the relationship between the period of {`$1/p$`} and {`$p - 1$`}.
        Say what is always true and what is sometimes but not always true. Give an example where the
        period equals {`$p - 1$`} exactly (such as {`$p = 7$`}), and an example where the period is
        a proper divisor of {`$p - 1$`} (such as {`$p = 11$`}, where the period is 2 but{' '}
        {`$p - 1 = 10$`}).
      </p>

      <h4>Deliverable 3C: The Argument</h4>
      <p>
        One page explaining why the period of {`$1/p$`} divides {`$p - 1$`}. Introduce the order of
        10 modulo {`$p$`} as the smallest positive integer {`$k$`} such that{' '}
        {`$10^k \\equiv 1 \\pmod{p}$`}. Connect this directly to the period of {`$1/p$`}. You may
        appeal to the fact that the order of any element divides the size of the group, without
        proving Lagrange's theorem from scratch. But make the role of the order explicit. The reader
        must leave the page understanding that the period of {`$1/p$`} equals the order of 10 mod{' '}
        {`$p$`}.
      </p>

      <h4>Deliverable 3D: The Cyclic Property of 142857</h4>
      <p>
        Around two paragraphs. Show why multiplying 142857 by 2 gives 285714, by 3 gives 428571, and
        so on. Connect this to the long division of {`$1/7$`} and to the orbit of the powers of 10
        modulo 7.
      </p>
      <p>
        The explanation must state that the nonzero remainders when 1 is divided by 7 are exactly
        the numbers 1, 2, 3, 4, 5, 6 in some order, that long division produces them in some order,
        that powers of 10 modulo 7 cycle through this same set, and that this is exactly why
        multiplying 142857 by 2 produces a rotation of the same digits rather than an unrelated
        number.
      </p>

      <h4>Deliverable 3E: The Position Paper</h4>
      <p>Two to three pages on {`$0.\\overline{9} = 1$`}. The paper must contain:</p>
      <ol className="lrn-list">
        <li>
          <strong>The standard view.</strong> State it with the most common algebraic argument. Make
          the role of the limit definition of infinite decimals explicit. State it using the limit
          of partial sums, or equivalently as {`$1 - 1/10^n$`} approaching 1.
        </li>
        <li>
          <strong>An alternative framework.</strong> Present at least one coherent alternative, such
          as the hyperreal numbers, in which {`$0.\\overline{9}$`} is strictly less than 1 by an
          infinitesimal amount. Present it charitably and accurately, not as a strawman.
        </li>
        <li>
          <strong>A defended verdict.</strong> Take a side. Agreement with the standard view is
          acceptable. Disagreement is also acceptable, provided the defence is mathematically
          coherent. Name the cost of disagreement: specifically, what property of the real numbers
          must be abandoned to allow {`$0.\\overline{9}$`} to be strictly less than 1 (the
          Archimedean property).
        </li>
      </ol>
    </div>
  )
}

function ExamContent() {
  return (
    <div className="project-prose">
      <p>
        <em>
          Notation. {`$0.\\overline{8}$`} means {`$0.888\\ldots$`}. The expression{' '}
          {`$0.4\\overline{27}$`} means {`$0.4272727\\ldots$`}, where only the block "27" repeats
          and the "4" sits before it.
        </em>
      </p>

      {/* Section I */}
      <h2>Section I: Foundations and Computation</h2>

      <p>
        <strong>1.</strong> Write {`$0.0750$`} as a fraction in lowest terms. Show the steps you
        used to simplify.
      </p>
      <Answer>
        <p>
          {`$0.0750 = 750/10000 = 75/1000 = 15/200 = 3/40$`}, dividing by common factors at each
          step.
        </p>
        <p>
          The trailing zero in {`$0.0750$`} does not change the value. {`$0.0750$`} and {`$0.075$`}{' '}
          are the same number.
        </p>
      </Answer>

      <p>
        <strong>2.</strong> Which of the following equals {`$0.5$`}? Mark every one that does and
        explain in one sentence why your selection is correct. The options are {`$0.05$`},{' '}
        {`$0.50$`}, {`$0.500$`}, {`$0.005$`}, and {`$5/10$`}.
      </p>
      <Answer>
        <p>
          The correct selections are {`$0.50$`}, {`$0.500$`}, and {`$5/10$`}.
        </p>
        <p>
          All three name the same point on the number line. Trailing zeros after the last nonzero
          digit do not change the value, and {`$5/10$`} equals {`$0.5$`} by definition. The options{' '}
          {`$0.05$`} and {`$0.005$`} have the zero between the decimal point and the 5, not
          trailing, so they are different numbers.
        </p>
      </Answer>

      <p>
        <strong>3.</strong> Compute {`$0.6 \\times 0.05$`} without a calculator. Then state the rule
        for counting decimal places in a product.
      </p>
      <Answer>
        <p>
          {`$6 \\times 5 = 30$`}. Place the decimal so the product has {`$1 + 2 = 3$`} decimal
          places: {`$0.030 = 0.03$`}.
        </p>
        <p>
          Rule: the product of two finite decimals has as many decimal places as the sum of the
          decimal places of the two factors.
        </p>
      </Answer>

      <p>
        <strong>4.</strong> Compute {`$3.14 - 2.8675$`} by aligning decimal points. Show the
        alignment explicitly.
      </p>
      <Answer>
        <p>
          Pad {`$3.14$`} to four decimal places: {`$3.1400$`}.
        </p>
        <p>
          {`$3.1400 - 2.8675 = 0.2775$`}. The padding step is what turns the subtraction into a
          clean column-by-column operation.
        </p>
      </Answer>

      <p>
        <strong>5.</strong> Arrange these five numbers from smallest to largest. Explain which rule
        you used where the comparison is not obvious: {`$0.5$`}, {`$0.36$`}, {`$0.4502$`},{' '}
        {`$0.45$`}, {`$0.451$`}.
      </p>
      <Answer>
        <p>Order: {`$0.36 < 0.45 < 0.4502 < 0.451 < 0.5$`}.</p>
        <p>
          Method: pad all five numbers to four decimal places, giving {`$0.3600$`}, {`$0.4500$`},{' '}
          {`$0.4502$`}, {`$0.4510$`}, {`$0.5000$`}. Then compare as whole numbers.
        </p>
        <p>
          Common slip: "longer is larger" thinking puts {`$0.4502$`} after {`$0.451$`}. Wrong.{' '}
          {`$0.4502$`} has 0 in the thousandths place while {`$0.451$`} has 1, so{' '}
          {`$0.4502 < 0.451$`}.
        </p>
      </Answer>

      <p>
        <strong>6.</strong> Marcus says that {`$0.36$`} is greater than {`$0.5$`} because 36 is
        greater than 5. He is wrong. State the exact step in his reasoning where the error happens,
        and explain in one or two sentences what he has misunderstood about place value.
      </p>
      <Answer>
        <p>
          The error is treating "{`$36 > 5$`}" as a comparison of the numbers {`$0.36$`} and{' '}
          {`$0.5$`}.
        </p>
        <p>
          The digits 3 and 5 both sit in the tenths place. The correct comparison is 5 tenths versus
          3 tenths, and 5 tenths is larger. Marcus has compared the digit strings as if they were
          whole numbers, ignoring place value.
        </p>
      </Answer>

      <p>
        <strong>7.</strong> Write {`$0.0000287$`} in scientific notation. Then write{' '}
        {`$7.512 \\times 10^{2}$`} as an ordinary decimal.
      </p>
      <Answer>
        <p>{`$0.0000287 = 2.87 \\times 10^{-5}$`}.</p>
        <p>{`$7.512 \\times 10^{2} = 751.2$`}.</p>
        <p>
          The leading factor in scientific notation must satisfy {`$1 \\le a < 10$`}. Writing{' '}
          {`$28.7 \\times 10^{-6}$`} violates that.
        </p>
      </Answer>

      <p>
        <strong>8.</strong> Without converting to ordinary decimals, decide which is larger:{' '}
        {`$8.5 \\times 10^{34}$`} or {`$2.3 \\times 10^{35}$`}. Justify using the comparison rule
        for scientific notation.
      </p>
      <Answer>
        <p>{`$2.3 \\times 10^{35}$`} is larger.</p>
        <p>
          When two numbers in scientific notation have different exponents, the one with the larger
          exponent is larger, no matter what the leading factors are. The next power of 10 is at
          least 10 times the previous one, and the leading factor is always less than 10.
        </p>
      </Answer>

      <p>
        <strong>9.</strong> Write {`$35.2647$`} in complete expanded form using powers of 10. Each
        digit must appear as a single digit multiplied by a power of 10, running from highest to
        lowest.
      </p>
      <Answer>
        <p>
          {`$35.2647 = 3 \\times 10^{1} + 5 \\times 10^{0} + 2 \\times 10^{-1} + 6 \\times 10^{-2}
          + 4 \\times 10^{-3} + 7 \\times 10^{-4}$`}
          .
        </p>
        <p>
          Common slip: using {`$10^{1}$`} for the digit 5 (off by one). The 5 is in the ones place,
          which is {`$10^{0}$`}.
        </p>
      </Answer>

      {/* Section II */}
      <hr />
      <h2>Section II: Procedural with Justification</h2>

      <p>
        <strong>10.</strong> Convert {`$0.\\overline{6}$`} to a fraction in lowest terms using the
        multiply-and-subtract method. Show every step. Then explain why multiplying by 10 and
        subtracting the original number causes the infinite repeating tail to cancel.
      </p>
      <Answer>
        <p>
          Let {`$x = 0.\\overline{6}$`}. Then {`$10x = 6.\\overline{6}$`}.
        </p>
        <p>
          {`$10x - x = 6.\\overline{6} - 0.\\overline{6} = 6$`}, so {`$9x = 6$`} and{' '}
          {`$x = 6/9 = 2/3$`}.
        </p>
        <p>
          Why the tail cancels: the tails {`$\\ldots 6666\\ldots$`} of {`$10x$`} and {`$x$`} have
          the same digit (6) in every position past the decimal point. Subtracting position by
          position gives all zeros.
        </p>
      </Answer>

      <p>
        <strong>11.</strong> Convert {`$0.4\\overline{27}$`} to a fraction in lowest terms. Show the
        algebra. Then explain why the multiplier you used here is different from the multiplier in
        the previous question.
      </p>
      <Answer>
        <p>
          Let {`$x = 0.4\\overline{27}$`}. Then {`$10x = 4.\\overline{27}$`} and{' '}
          {`$1000x = 427.\\overline{27}$`}.
        </p>
        <p>
          {`$1000x - 10x = 427.\\overline{27} - 4.\\overline{27} = 423$`}, so {`$990x = 423$`} and{' '}
          {`$x = 423/990 = 47/110$`}.
        </p>
        <p>
          Why a different multiplier: the repeating block here has length two, not length one. You
          need to shift by two more positions (a factor of 100 more) to line up the repeating tails
          so they cancel.
        </p>
      </Answer>

      <p>
        <strong>12.</strong> Use long division to compute the decimal expansion of {`$1/13$`}. Stop
        when you can identify the repeating block. State the period and circle the first remainder
        that repeats.
      </p>
      <Answer>
        <p>{`$1/13 = 0.\\overline{076923}$`}, with period 6.</p>
        <p>
          The remainders in long division of 1 by 13 run 10, 9, 12, 3, 4, 1, 10, … (returning to 10
          after six steps). That is the first remainder that repeats, and from that point the digits
          begin to repeat.
        </p>
      </Answer>

      <p>
        <strong>13.</strong> The fraction {`$1/56$`} has the factorisation{' '}
        {`$56 = 2^{3} \\times 7$`}. Without computing the full decimal expansion first, predict two
        things and justify each using the theorems from Module 3.
      </p>
      <ol className="lrn-list">
        <li>The length of the prefix before the repeating block begins.</li>
        <li>An upper bound on the period of the repeating block.</li>
      </ol>
      <p>
        Then perform the long division far enough to confirm both predictions. State the actual
        decimal expansion of {`$1/56$`}.
      </p>
      <Answer>
        <p>
          Prediction 1: prefix length is 3. The prefix length equals the maximum of the powers of 2
          and 5 in the denominator. Here that maximum is {`$2^3$`}, so 3.
        </p>
        <p>
          Prediction 2: period divides 6. For prime {`$p$`} coprime to 10, the period of any
          fraction with {`$p$`} in the denominator divides {`$p - 1$`}. Here {`$p = 7$`} so the
          period divides {`$7 - 1 = 6$`}.
        </p>
        <p>
          Actual expansion: {`$1/56 = 0.017\\overline{857142}$`}, with prefix "017" of length 3 and
          repeating block "857142" of length 6. Both predictions confirmed.
        </p>
        <p>
          Note: the rule says the period <em>divides</em> {`$p - 1$`}, not that it equals{' '}
          {`$p - 1$`}. Here the period happens to be exactly 6, but the rule only guarantees a
          divisor.
        </p>
      </Answer>

      {/* Section III */}
      <hr />
      <h2>Section III: Conceptual and Transfer</h2>

      <p>
        <strong>14.</strong> For each statement, write "true" or "false" and justify in one or two
        sentences.
      </p>
      <p>(a) Every fraction with denominator 50 is a finite decimal.</p>
      <p>
        (b) If a fraction in lowest terms is a finite decimal, then its denominator may have a
        factor of 3.
      </p>
      <p>(c) The decimal {`$0.\\overline{9}$`} is less than 1 by a tiny but nonzero amount.</p>
      <p>
        (d) For every prime {`$p$`} other than 2 and 5, the period of {`$1/p$`} is exactly{' '}
        {`$p - 1$`}.
      </p>
      <p>
        (e) Adding two infinite decimals is done by aligning decimal points and adding column by
        column, exactly as for finite decimals.
      </p>
      <Answer>
        <p>
          (a) <strong>True.</strong> Since {`$50 = 2 \\times 5^{2}$`}, the denominator factors as a
          power of 2 times a power of 5. This is the criterion for being a finite decimal.
        </p>
        <p>
          (b) <strong>False.</strong> The criterion forbids any prime other than 2 or 5 in the
          reduced denominator. A factor of 3 forces the decimal to repeat. Counterexample:{' '}
          {`$1/3 = 0.\\overline{3}$`}.
        </p>
        <p>
          (c) <strong>False.</strong> {`$0.\\overline{9} = 1$`} exactly. The misconception confuses
          the infinite decimal with one of its finite truncations. Each truncation{' '}
          {`$0.9, 0.99, 0.999, \\ldots$`} is less than 1 by some nonzero amount, but the infinite
          decimal is their limit, and the limit is exactly 1.
        </p>
        <p>
          (d) <strong>False.</strong> The period <em>divides</em> {`$p - 1$`} but does not always
          equal it. Counterexample: {`$1/11 = 0.\\overline{09}$`} has period 2, not 10.
        </p>
        <p>
          (e) <strong>False.</strong> Finite decimal addition works because each has a last nonzero
          digit, so a single carry can travel only a bounded number of places. Two infinite decimals
          have no last digit. A carry generated far to the right can travel arbitrarily far left,
          potentially changing every digit of the answer.
        </p>
      </Answer>

      <p>
        <strong>15.</strong> Compare finite decimal addition with infinite decimal addition. In one
        short paragraph, explain how to compute {`$0.135 + 0.0486$`} exactly. Then in one short
        paragraph, explain why {`$\\pi + \\sqrt{2}$`} cannot be computed exactly using the same kind
        of algorithm. Refer to the role of the last digit and the role of carries.
      </p>
      <Answer>
        <p>
          To compute {`$0.135 + 0.0486$`}: rewrite both with the same denominator {`$10^4$`}, giving{' '}
          {`$1350/10^4 + 486/10^4 = 1836/10^4 = 0.1836$`}. The procedure works because each decimal
          has a last digit, so padding with trailing zeros gives a common denominator and turns the
          addition into whole-number arithmetic. A single carry can only travel a bounded number of
          places.
        </p>
        <p>
          {`$\\pi$`} and {`$\\sqrt{2}$`} have no last digit. If we tried to add column by column
          from some chosen position, digits we have not yet looked at, far to the right, can
          generate a carry that travels back to the position we already wrote and changes that
          digit. So we cannot pin down any digit of the sum without computing infinitely many digits
          of the addends.
        </p>
      </Answer>

      <p>
        <strong>16.</strong> Find a fraction in lowest terms whose decimal expansion has a prefix of
        length exactly 2 and a repeating block of length exactly 1. State the fraction and justify
        in two sentences why your example has the required structure.
      </p>
      <Answer>
        <p>One example: {`$1/12 = 0.08\\overline{3}$`}.</p>
        <p>
          Structural reason: {`$12 = 2^{2} \\times 3$`}. The prefix length equals the larger of the
          powers of 2 and 5 in the denominator. Here that is {`$2^2$`}, so prefix length is 2. The
          repeating part comes from the factor of 3, which gives period 1 (since{' '}
          {`$1/3 = 0.\\overline{3}$`}).
        </p>
        <p>
          Other valid answers: any fraction whose reduced denominator has the form{' '}
          {`$2^{2} \\times m$`} or {`$5^{2} \\times m$`} with {`$m$`} coprime to 10 and giving
          period 1.
        </p>
      </Answer>

      <p>
        <strong>17.</strong> Show that {`$0.\\overline{9} = 1$`} using the multiply-and-subtract
        method. Then explain why this fact means no decimal expansion may end in a tail of repeating
        nines. Use the example {`$2.045\\overline{9}$`} and identify the simpler decimal that equals
        the same number.
      </p>
      <Answer>
        <p>
          Let {`$x = 0.\\overline{9}$`}. Then {`$10x = 9.\\overline{9}$`}.{' '}
          {`$10x - x = 9.\\overline{9} - 0.\\overline{9} = 9$`}, so {`$9x = 9$`} and {`$x = 1$`}.
        </p>
        <p>
          Implication:{' '}
          {`$2.045\\overline{9} = 2.045 + 0.000\\overline{9} = 2.045 + 0.\\overline{9} \\times
          10^{-3} = 2.045 + 1 \\times 10^{-3} = 2.045 + 0.001 = 2.046$`}
          .
        </p>
        <p>
          So {`$2.045\\overline{9}$`} and {`$2.046$`} name the same number. We always choose the
          form ending in a zero. Allowing both forms would let every "finite" decimal also be
          written as a "nines tail" decimal, breaking uniqueness of representation.
        </p>
      </Answer>

      {/* Section IV */}
      <hr />
      <h2>Section IV: Proof and Critique</h2>

      <p>
        <strong>18.</strong> Three parts. Each part is graded independently.
      </p>
      <p>
        (a) Prove: if {`$m/n$`} is in lowest terms and {`$n = 2^{a}$`} for some non-negative integer{' '}
        {`$a$`}, then {`$m/n$`} is a finite decimal. Construct the power-of-ten denominator
        explicitly.
      </p>
      <p>
        (b) Prove the more general statement: if {`$m/n$`} is in lowest terms and{' '}
        {`$n = 2^{a} \\times 5^{b}$`}, then {`$m/n$`} is a finite decimal. State clearly what factor
        you supply to numerator and denominator and why.
      </p>
      <p>
        (c) Now suppose {`$m/n$`} is in lowest terms with {`$n = 2^{a} \\times 5^{b} \\times k$`},
        where {`$k > 1$`} has no factor of 2 or 5. State and prove the analogous structural result.
        Your statement must describe both the prefix length and the relationship between the period
        and the integer {`$k$`}.
      </p>
      <Answer>
        <p>
          <strong>(a)</strong> Let {`$m/2^{a}$`} be the fraction. Multiply numerator and denominator
          by {`$5^{a}$`}:
        </p>
        <p>
          {`$m/2^{a} = (m \\times 5^{a}) / (2^{a} \\times 5^{a}) = (m \\times 5^{a}) / 10^{a}$`}.
        </p>
        <p>
          The numerator {`$m \\times 5^{a}$`} is a whole number; the denominator is a power of 10.
          So {`$m/n$`} is a finite decimal by definition. The key step is{' '}
          {`$2^{a} \\times 5^{a} = (2 \\times 5)^{a} = 10^{a}$`}.
        </p>
        <p>
          <strong>(b)</strong> Without loss of generality, assume {`$a \\ge b$`} (the other case is
          symmetric). Multiply numerator and denominator by {`$5^{a - b}$`}:
        </p>
        <p>
          {`$m/(2^{a} \\times 5^{b}) = (m \\times 5^{a - b}) / (2^{a} \\times 5^{a}) = (m \\times
          5^{a - b}) / 10^{a}$`}
          .
        </p>
        <p>
          The numerator is a whole number; the denominator is {`$10^{a}$`}. So {`$m/n$`} is a finite
          decimal.
        </p>
        <p>
          <strong>(c) Statement.</strong> The decimal expansion of{' '}
          {`$m/(2^{a} \\times 5^{b} \\times k)$`} in lowest terms has a prefix of length{' '}
          {`$\\max(a, b)$`}, followed by a repeating block whose period divides the multiplicative
          order of 10 modulo {`$k$`}.
        </p>
        <p>
          <strong>Proof.</strong> Multiply numerator and denominator by whichever factor of 2 or 5
          is needed to make the powers of 2 and 5 in the denominator both equal to {`$\\max(a, b)$`}
          . The denominator becomes {`$10^{\\max(a, b)} \\times k$`}. Dividing by {`$k$`} produces a
          decimal expansion with period dividing the order of 10 mod {`$k$`}. Dividing then by{' '}
          {`$10^{\\max(a, b)}$`} shifts the decimal point left by {`$\\max(a, b)$`} places,
          producing the prefix.
        </p>
      </Answer>

      <p>
        <strong>19.</strong> A student writes this argument and claims it proves{' '}
        {`$0.\\overline{9} \\ne 1$`}:
      </p>
      <blockquote>
        <p>
          "Let {`$x = 0.\\overline{9}$`}. Then {`$10x = 9.\\overline{9}$`}. Subtracting gives{' '}
          {`$9x = 9 - 0.\\overline{9}$`}, which equals some positive number very close to nine but
          slightly less. So {`$x$`} is some positive number very close to one but slightly less.
          Therefore {`$0.\\overline{9} < 1$`}."
        </p>
      </blockquote>
      <p>
        Identify the exact step where the reasoning breaks down. Explain what definition or concept
        the student is misunderstanding. Then write a correct version of the argument that proves{' '}
        {`$0.\\overline{9} = 1$`}.
      </p>
      <Answer>
        <p>
          The error is the third sentence: "Subtracting gives {`$9x = 9 - 0.\\overline{9}$`}, which
          equals some positive number very close to nine but slightly less." This computation is
          wrong.
        </p>
        <p>
          The correct computation of {`$10x - x$`} when {`$x = 0.\\overline{9}$`} is{' '}
          {`$9.\\overline{9} - 0.\\overline{9} = 9$`} exactly, not "nine minus {`$0.\\overline{9}$`}
          ". The student has substituted the wrong quantity for one copy of {`$x$`}, pretending a
          residue is left over.
        </p>
        <p>
          The underlying misconception: the student believes the tails {`$\\ldots 9999\\ldots$`} of{' '}
          {`$9.\\overline{9}$`} and {`$0.\\overline{9}$`} leave a residue when subtracted. In fact,
          at every position past the decimal point, both tails have the digit 9, and subtracting
          position by position gives 0 in every position.
        </p>
        <p>
          Correct version: {`$x = 0.\\overline{9}$`}, {`$10x = 9.\\overline{9}$`}, so{' '}
          {`$10x - x = 9.\\overline{9} - 0.\\overline{9} = 9$`}. Thus {`$9x = 9$`}, so {`$x = 1$`}.
        </p>
      </Answer>

      <p>
        <strong>20.</strong> Prove that for any prime {`$p$`} other than 2 and 5, the decimal
        expansion of {`$1/p$`} is eventually periodic, and that the period divides {`$p - 1$`}. Use
        the pigeonhole principle for periodicity. You may quote Fermat's Little Theorem (if{' '}
        {`$\\gcd(a, p) = 1$`}, then {`$a^{p - 1} \\equiv 1 \\pmod{p}$`}) for the bound on the
        period.
      </p>
      <Answer>
        <p>
          <strong>Part 1: eventual periodicity.</strong> When we divide 1 by {`$p$`} using long
          division, at each step the remainder lies between 0 and {`$p - 1$`}. Since{' '}
          {`$\\gcd(1, p) = 1$`} and {`$p$`} does not divide 1, the remainder is never 0, so it lies
          between 1 and {`$p - 1$`}. There are {`$p - 1$`} possible nonzero remainders.
        </p>
        <p>
          After {`$p$`} steps we have produced {`$p$`} remainders, all from a set of size{' '}
          {`$p - 1$`}. By the pigeonhole principle, two of those remainders must be equal.
        </p>
        <p>
          Once a remainder repeats, the next digit is determined entirely by the current remainder
          (digit = current remainder times 10 divided by {`$p$`}, integer part; next remainder =
          current remainder times 10 modulo {`$p$`}). So once a remainder repeats, all subsequent
          digits and remainders repeat. The expansion is eventually periodic.
        </p>
        <p>
          <strong>Part 2: the period divides {`$p - 1$`}.</strong> The period is the smallest
          positive integer {`$T$`} such that {`$10^{T} \\equiv 1 \\pmod{p}$`} (this is what allows
          the remainder to return).
        </p>
        <p>
          By Fermat's Little Theorem, since {`$\\gcd(10, p) = 1$`}, we have{' '}
          {`$10^{p - 1} \\equiv 1 \\pmod{p}$`}. So {`$p - 1$`} is one such exponent.
        </p>
        <p>
          The smallest such exponent {`$T$`} divides {`$p - 1$`}: write {`$p - 1 = qT + r$`} with{' '}
          {`$0 \\le r < T$`}. Then{' '}
          {`$10^{r} = 10^{p - 1} \\cdot (10^{T})^{-q} \\equiv 1 \\cdot 1^{-q} = 1 \\pmod{p}$`}. By
          minimality of {`$T$`}, {`$r = 0$`}. So {`$T \\mid p - 1$`}.
        </p>
      </Answer>

      {/* Section V */}
      <hr />
      <h2>Section V: Synthesis (Optional Bonus)</h2>

      <p>
        <strong>21.</strong> Our criterion that a fraction in lowest terms is a finite decimal
        exactly when its denominator has the form {`$2^{a} \\times 5^{b}$`} depends on writing
        numbers in base 10. State the analogous criterion for "finite expansions" in base 12. Then
        give one example of a fraction that is not a finite decimal in base 10 but is a finite
        expansion in base 12, and one example of the reverse. Justify each.
      </p>
      <Answer>
        <p>
          In base 12: a fraction in lowest terms is a finite expansion exactly when its denominator
          has the form {`$2^{a} \\times 3^{b}$`}. The primes are 2 and 3 because{' '}
          {`$12 = 2^{2} \\times 3$`}.
        </p>
        <p>
          <strong>Finite in base 12 but not base 10:</strong> {`$1/3$`}. In base 10,{' '}
          {`$1/3 = 0.\\overline{3}$`}, which repeats. In base 12, {`$1/3 = 0.4$`} (since{' '}
          {`$4/12 = 1/3$`}), which is finite.
        </p>
        <p>
          <strong>Finite in base 10 but not base 12:</strong> {`$1/5$`}. In base 10, {`$1/5 = 0.2$`}
          . In base 12, {`$1/5$`} has no terminating expansion: 5 is not a factor of any power of 12
          (the only primes in 12 are 2 and 3).
        </p>
      </Answer>

      <p>
        <strong>22.</strong> The fraction {`$1/7$`} has period 6. {`$1/13$`} has period 6 as well.
        Both periods divide {`$p - 1$`}. But the period of {`$1/11$`} is 2, not 10. Explain why some
        primes give periods strictly smaller than {`$p - 1$`}, and describe a way to predict exactly
        the period for a given prime {`$p$`}.
      </p>
      <Answer>
        <p>
          The period of {`$1/p$`} equals the multiplicative order of 10 modulo {`$p$`}. The order of
          any element in the group of units modulo {`$p$`} divides {`$p - 1$`} (by Lagrange's
          theorem). Whether 10 generates the full group (period {`$p - 1$`}) or only a proper
          subgroup (smaller period) depends on the specific prime.
        </p>
        <p>
          For {`$p = 7$`}, powers of 10 modulo 7 cycle through six distinct residues, so the order
          is 6 and the period is 6. For {`$p = 11$`}, powers of 10 modulo 11 cycle through only two
          distinct residues (1 and 10), so the order is 2 and the period is 2.
        </p>
        <p>
          To predict the period for a given prime {`$p$`}: compute the powers{' '}
          {`$10, 10^{2}, 10^{3}, \\ldots$`} modulo {`$p$`} until the result returns to 1. The first
          power that returns to 1 is the period.
        </p>
        <p>
          Primes for which the order is exactly {`$p - 1$`} are called <em>full reptend primes</em>{' '}
          for base 10.
        </p>
      </Answer>
    </div>
  )
}

export default function CapstoneDecimals() {
  const config = {
    documentTitle: 'Project: Decimals - AETHER',
    briefing: {
      title: 'Decimals',
      concepts: [
        'Decimal Fundamentals',
        'Infinite and Repeating Decimals',
        'Decimal Expansion Proofs'
      ]
    },
    projectContent: <ProjectContent />,
    examContent: <ExamContent />
  }

  return <ProjectTemplate config={config} />
}
