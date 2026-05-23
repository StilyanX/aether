import ProjectTemplate, { Answer } from '../../../../../components/project/project-template'

function ProjectContent() {
  return (
    <div className="project-prose">
      {/* Project 1 */}
      <h2>Project 1: An Investigation</h2>

      <h3>Scenario</h3>
      <p>
        Pick one open question in number theory and follow it the whole way through. Generate
        examples, find the pattern, state a precise conjecture, then prove it. Keep a running log of
        what you tried, what worked, and what failed. The log is part of the submission.
      </p>
      <p>
        Choose one starter from the three below. You will spend the most time of the whole capstone
        on this part.
      </p>

      <h3>Pick One Starter</h3>

      <h4>Starter 1: When is a fraction a finite decimal?</h4>
      <p>
        Take fractions written in lowest terms. Some equal a finite decimal (such as $3/8 = 0.375$).
        Others give an infinite repeating decimal (such as $1/7$). What property of the denominator
        decides which case you are in?
      </p>
      <p>
        Generate at least twenty examples. Organise them by denominator. State a conjecture. Prove
        your conjecture in both directions. Your proof must use the Fundamental Theorem of
        Arithmetic and the fact that reducing to lowest terms removes shared factors. End by
        deciding what happens when the fraction is not in lowest terms. State the rule and show why
        reducing first matters.
      </p>

      <h4>Starter 2: When is the square root of an integer irrational?</h4>
      <p>
        The module proves $\sqrt{'{'}2{'}'}$ is irrational. It also proves the same for $\sqrt{'{'}3
        {'}'}$ by a different method. Investigate which integers $n$ have an irrational square root.
        Find the general pattern. Prove it.
      </p>
      <p>
        Test at least the integers from 2 through 30. Classify each. Look for the pattern. State a
        conjecture. Prove it for the general case. Your proof must rest on the Perfect Square Lemma
        and the FTA. End by identifying the exact step in the proof where the FTA is used. Explain
        in plain language what would go wrong without it.
      </p>

      <h4>Starter 3: Which integers are the hypotenuse of a primitive triple?</h4>
      <p>
        The module gives the formula for primitive Pythagorean triples as $(m^2 - n^2,\ 2mn,\ m^2 +
        n^2)$ with conditions on $m$ and $n$. The hypotenuse is $m^2 + n^2$. Investigate which
        integers $c$ can be written this way.
      </p>
      <p>
        Generate every primitive triple with hypotenuse below 50. List the hypotenuses. Factor each
        one. Look for the pattern in the prime factorisations. State a conjecture about which
        integers qualify. A full proof needs more theory than the module covered. Give a partial
        proof for one direction. Identify clearly where you would need additional theory for the
        other.
      </p>

      <h3>What to Produce</h3>
      <ol className="lrn-list">
        <li>
          <strong>The question, restated.</strong> Write the starter in your own words as a precise
          mathematical claim.
        </li>
        <li>
          <strong>A data section.</strong> Show the examples you generated. Organise them so the
          pattern becomes visible. Twenty examples minimum.
        </li>
        <li>
          <strong>A conjecture.</strong> Written as a precise mathematical statement, with explicit
          quantifiers.
        </li>
        <li>
          <strong>A proof of the conjecture.</strong> For Starter 3, a partial proof with a clear
          statement of what is missing and why.
        </li>
        <li>
          <strong>A worked check.</strong> Run your conjecture against at least three examples not
          in your data set. Show it predicts correctly.
        </li>
        <li>
          <strong>One open question.</strong> State one question your investigation raised that you
          did not answer. A real investigation always ends with new questions.
        </li>
      </ol>

      {/* Project 2 */}
      <hr />
      <h2>Project 2: An Exposition</h2>

      <h3>Scenario</h3>
      <p>
        Write a short chapter explaining one major result for a reader who has finished an algebra
        course but has not seen this material. The reader is not stupid. Do not condescend. Do not
        skip the hard steps.
      </p>

      <h3>Pick One Topic</h3>

      <h4>Option B1: The Fundamental Theorem of Arithmetic</h4>
      <p>
        Cover the full statement, the proof of existence (every integer above 1 factors into
        primes), the proof of uniqueness (the factorisation is unique up to order), and the role of
        Euclid's Lemma in the uniqueness proof. Include at least one fully worked numerical example
        showing the factorisation of a specific integer above 1000. Include at least one application
        of the FTA, for instance the identity $\gcd(a,b) \cdot \text{'{'}lcm{'}'}(a,b) = ab$, or the
        irrationality of the square root of a non perfect square.
      </p>

      <h4>Option B2: The Euclidean Algorithm and Bézout's Identity</h4>
      <p>
        Cover the statement of the algorithm, the proof that it always terminates, the proof that
        the last non-zero remainder equals the gcd, the back-substitution procedure that expresses
        the gcd as an integer combination of the two inputs, and the use of this combination to
        prove Euclid's Lemma. Include at least one fully worked example with at least four reduction
        steps, showing the algorithm and the back-substitution.
      </p>

      <h3>What to Produce</h3>
      <ol className="lrn-list">
        <li>
          <strong>A motivating opening.</strong> Say what the result is and why it matters, in plain
          language, before any theorems appear.
        </li>
        <li>
          <strong>Precise statements.</strong> State every definition and theorem you use.
        </li>
        <li>
          <strong>Full proofs.</strong> Prove every claim you state. Skip no steps. Where a step is
          genuinely routine, say so and explain why.
        </li>
        <li>
          <strong>One worked example.</strong> Show the calculation step by step.
        </li>
        <li>
          <strong>One connection.</strong> For B1, give an application. For B2, prove Euclid's
          Lemma.
        </li>
        <li>
          <strong>A closing paragraph.</strong> State what the result does not say. This tests
          whether you understand the boundary of the theorem.
        </li>
      </ol>

      {/* Project 3 */}
      <hr />
      <h2>Project 3: A Diagnostic Problem Set</h2>

      <h3>Scenario</h3>
      <p>
        Eight problems. Each one targets a specific place where people slip in this material. Show
        all reasoning. State explicitly when you are using a result from the module and which result
        it is.
      </p>

      <h3>The Eight Problems</h3>

      <p>
        <strong>C1.</strong> Find an explicit example of integers $r$, $a$, $b$ such that $r$
        divides $ab$ but $r$ does not divide $a$ and $r$ does not divide $b$. Then state the
        strongest true version of the statement "if $r$ divides $ab$ then $r$ divides $a$ or $r$
        divides $b$", and prove that strongest version. Your answer must explain why the prime
        hypothesis is essential in Euclid's Lemma.
      </p>

      <p>
        <strong>C2.</strong> Suppose someone redefines "prime" to also include $1$. Write out what
        the Fundamental Theorem of Arithmetic would say under this definition. Show by a specific
        example that uniqueness fails. State which part of the standard proof breaks, and why.
      </p>

      <p>
        <strong>C3.</strong> The rule for $11$ states that an integer is divisible by $11$ if and
        only if the alternating sum of its digits is divisible by $11$. State this as a
        biconditional. Prove both directions. Then explain which direction you use when testing a
        specific number, and which direction you need when using the rule inside a larger proof.
      </p>

      <p>
        <strong>C4.</strong> True or false: the greatest common divisor of two positive integers is
        the smallest positive integer that divides both of them. If false, write the correct
        characterisation of the gcd and prove it. Your proof must use the fact that the gcd can be
        written as an integer combination of the two inputs.
      </p>

      <p>
        <strong>C5.</strong> The module proves $\sqrt{'{'}2{'}'}$ is irrational using an even/odd
        argument. Identify the exact step in that proof where the primality of $2$ is used (it is
        used even though the proof does not look like it mentions primes). Then modify the proof to
        show $\sqrt{'{'}15{'}'}$ is irrational. Try the same modification for $\sqrt{'{'}16{'}'}$
        and explain exactly which step fails. Your answer must show you understand that the
        irrationality proof depends on the FTA, not on a parity trick.
      </p>

      <p>
        <strong>C6.</strong> Prove the identity $\gcd(a,b) \cdot \text{'{'}lcm{'}'}(a,b) = ab$ using
        prime factorisations. Your proof must identify the specific arithmetic fact that makes the
        proof work. Then verify your proof on the pair $(84, 60)$ by computing both sides directly.
      </p>

      <p>
        <strong>C7.</strong> Here is a flawed proof. Find every error.
      </p>
      <blockquote>
        <p>
          <em>Claim.</em> If $6$ divides $ab$, then $6$ divides $a$ or $6$ divides $b$.
        </p>
        <p>
          <em>Proof.</em> Suppose $6$ divides $ab$. By Euclid's Lemma, $6$ divides $a$ or $6$
          divides $b$.
        </p>
      </blockquote>
      <p>
        State precisely what is wrong. Give a counterexample. Write the corrected statement. Then
        state the version of the result that is true for $6$ (using gcd).
      </p>

      <p>
        <strong>C8.</strong> Consider the triple $(9, 40, 41)$. Verify it is Pythagorean. Decide
        whether it is primitive. If it is primitive, find the values of $m$ and $n$ that generate it
        through the standard parameterisation. If it is not primitive, factor out the common factor
        and identify the underlying primitive triple. Then use the same parameterisation to generate
        two more primitive triples with hypotenuse below 100 that are not in any standard table you
        have seen.
      </p>

      {/* Project 4 */}
      <hr />
      <h2>Project 4: A Working Reflection</h2>

      <h3>Scenario</h3>
      <p>
        One to two pages of prose. This is the only place in the capstone where you write about
        yourself. A reflection that says only "I learned a lot" earns nothing.
      </p>

      <h3>Address All Five</h3>
      <ol className="lrn-list">
        <li>
          Which starter did you pick for Project 1, and why? What did you try first that did not
          work?
        </li>
        <li>Where did you get stuck for the longest time, and what got you unstuck?</li>
        <li>
          Which result from the module did you use most often across the whole capstone? Which did
          you never use, and could you have used it somewhere?
        </li>
        <li>
          Pick one problem from Project 3. Describe the misconception it was designed to catch. Did
          you fall for it on a first reading? If yes, what changed your mind. If no, explain how you
          avoided it.
        </li>
        <li>
          State one question you now have about number theory that the module did not answer. It
          should be a question you would actually want to know the answer to.
        </li>
      </ol>
    </div>
  )
}

function ExamContent() {
  return (
    <div className="project-prose">
      {/* Part I */}
      <h2>Part I: Foundations</h2>

      <p>
        <strong>1.</strong> State the precise definition of a prime number used in the text. Then,
        for each of the following, say whether it is prime, composite, or neither. If it is not
        prime, name the exact clause of the definition that fails: $0$, $1$, $2$, $3$, $9$, $23$.
      </p>
      <Answer>
        <p>Definition: a whole number $p &gt; 1$ is prime if its only divisors are $1$ and $p$.</p>
        <p>
          $0$: not prime. The clause "$p &gt; 1$" fails. Also $0$ has every nonzero integer as a
          divisor.
        </p>
        <p>
          $1$: not prime. The clause "$p &gt; 1$" fails. Excluding $1$ is what makes the uniqueness
          in the FTA work.
        </p>
        <p>$2$: prime. Greater than $1$, divisors are $1$ and $2$.</p>
        <p>$3$: prime. Greater than $1$, divisors are $1$ and $3$.</p>
        <p>$9$: composite. $3$ divides $9$, and $3$ is neither $1$ nor $9$.</p>
        <p>
          $23$: prime. Greater than $1$, no divisor between $2$ and $\sqrt{'{'}23{'}'} \approx 4.8$
          divides it.
        </p>
      </Answer>

      <p>
        <strong>2.</strong> State the Divisibility Lemma exactly. Then use it to decide: if $17$
        divides $374$ and $17$ divides $561$, must $17$ divide $935$? Show how the lemma applies.
      </p>
      <Answer>
        <p>
          Divisibility Lemma: if $A = B + C$ and a number $x$ divides any two of $A$, $B$, $C$, then
          $x$ divides the third.
        </p>
        <p>
          Application: $374 + 561 = 935$. We are given $17 \mid 374$ and $17 \mid 561$. By the lemma
          (with $A = 935$, $B = 374$, $C = 561$), $17 \mid 935$. Check: $935 = 55 \times 17$.
        </p>
      </Answer>

      <p>
        <strong>3.</strong> In the division equation $a = qd + r$, the text requires $0 \le r &lt;
        d$. Explain in two or three sentences why $r &lt; d$ is necessary. What goes wrong if you
        allow $r = d$?
      </p>
      <Answer>
        <p>
          If $r = d$, then $a = qd + d = (q+1)d$. The correct quotient is $q + 1$, not $q$. The
          constraint $r &lt; d$ guarantees $q$ is the largest quotient such that $qd \le a$. Without
          it, the quotient and remainder are not unique.
        </p>
      </Answer>

      <p>
        <strong>4.</strong> Complete both in your own words: the gcd of $a$ and $b$ is the largest
        number that ... The lcm of $a$ and $b$ is the smallest number that ...
      </p>
      <p>
        Then state which of the two can only be less than or equal to both $a$ and $b$, and which
        can only be greater than or equal to both.
      </p>
      <Answer>
        <p>The gcd of $a$ and $b$ is the largest number that divides both $a$ and $b$.</p>
        <p>The lcm of $a$ and $b$ is the smallest positive number that both $a$ and $b$ divide.</p>
        <p>
          The gcd is always less than or equal to both $a$ and $b$. The lcm is always greater than
          or equal to both. The identity $\gcd(a,b) \cdot \text{'{'}lcm{'}'}(a,b) = ab$ ties them
          together; in particular $\text{'{'}lcm{'}'}(a,b) = ab$ only when $\gcd(a,b) = 1$.
        </p>
      </Answer>

      <p>
        <strong>5.</strong> Define what it means for a fraction $a/b$ to be in lowest terms. Then
        explain why every nonzero fraction has a representation in lowest terms. Cite the theorem
        from the text that guarantees this.
      </p>
      <Answer>
        <p>
          A fraction $a/b$ is in lowest terms if $\gcd(a,b) = 1$, that is, the numerator and
          denominator share no common factor greater than $1$.
        </p>
        <p>
          Every nonzero fraction $m/n$ has such a representation: divide both by $d = \gcd(m,n)$ to
          get $a = m/d$ and $b = n/d$. By the proposition that dividing by the gcd produces coprime
          quotients, $\gcd(a,b) = 1$, so $a/b$ is in lowest terms. The "Reducing Fractions" theorem
          in the text guarantees both existence and uniqueness of this representation.
        </p>
      </Answer>

      {/* Part II */}
      <hr />
      <h2>Part II: Computation with Justification</h2>

      <p>
        <strong>6.</strong> Decide whether $461$ is prime using the square root test. State which
        primes you need to check and why. Then check each one and write a one line conclusion.
      </p>
      <Answer>
        <p>
          $\sqrt{'{'}461{'}'} \approx 21.47$. Test primes from $2$ up to $21$: $2, 3, 5, 7, 11, 13,
          17, 19$.
        </p>
        <ul className="lrn-list">
          <li>$2$: $461$ is odd. No.</li>
          <li>$3$: digit sum $4 + 6 + 1 = 11$. Not divisible by $3$. No.</li>
          <li>$5$: last digit is $1$. No.</li>
          <li>$7$: $461 = 65 \times 7 + 6$. No.</li>
          <li>$11$: alternating sum $1 - 6 + 4 = -1$. Not divisible by $11$. No.</li>
          <li>$13$: $461 = 35 \times 13 + 6$. No.</li>
          <li>$17$: $461 = 27 \times 17 + 2$. No.</li>
          <li>$19$: $461 = 24 \times 19 + 5$. No.</li>
        </ul>
        <p>None divide $461$. So $461$ is prime.</p>
      </Answer>

      <p>
        <strong>7.</strong> Compute $\gcd(1547, 560)$ using the Euclidean Algorithm. Show every
        division step. Then state the chain of equalities $\gcd(1547, 560) = \gcd(\ldots) = \ldots =
        \gcd(d, 0) = d$ that justifies your answer.
      </p>
      <Answer>
        <p>
          $1547 = 2 \times 560 + 427$
          <br />
          $560 = 1 \times 427 + 133$
          <br />
          $427 = 3 \times 133 + 28$
          <br />
          $133 = 4 \times 28 + 21$
          <br />
          $28 = 1 \times 21 + 7$
          <br />
          $21 = 3 \times 7 + 0$
        </p>
        <p>
          The last nonzero remainder is $7$. Chain: $\gcd(1547, 560) = \gcd(560, 427) = \gcd(427,
          133) = \gcd(133, 28) = \gcd(28, 21) = \gcd(21, 7) = \gcd(7, 0) = 7$.
        </p>
      </Answer>

      <p>
        <strong>8.</strong> Using your work from the previous question, find integers $s$ and $t$
        such that $\gcd(1547, 560) = 1547s + 560t$. Show the back-substitution explicitly, starting
        from the second-to-last equation. State the value of $s$ and $t$ in the final line.
      </p>
      <Answer>
        <p>Starting from the second-to-last equation:</p>
        <p>
          $7 = 28 - 1 \times 21$
          <br />
          $\phantom{'{'}7{'}'} = 28 - (133 - 4 \times 28) = 5 \times 28 - 133$
          <br />
          $\phantom{'{'}7{'}'} = 5(427 - 3 \times 133) - 133 = 5 \times 427 - 16 \times 133$
          <br />
          $\phantom{'{'}7{'}'} = 5 \times 427 - 16(560 - 427) = 21 \times 427 - 16 \times 560$
          <br />
          $\phantom{'{'}7{'}'} = 21(1547 - 2 \times 560) - 16 \times 560 = 21 \times 1547 - 58
          \times 560$
        </p>
        <p>
          So $s = 21$ and $t = -58$. Check: $21 \times 1547 = 32487$, $58 \times 560 = 32480$,
          difference $= 7$.
        </p>
      </Answer>

      <p>
        <strong>9.</strong> Find $\gcd(360, 252)$ and $\text{'{'}lcm{'}'}(360, 252)$ using the prime
        factorisations of $360$ and $252$. Then verify $\gcd \times \text{'{'}lcm{'}'} = 360 \times
        252$ by direct computation. Briefly explain why the identity follows from $\min(\alpha,
        \beta) + \max(\alpha, \beta) = \alpha + \beta$.
      </p>
      <Answer>
        <p>$360 = 2^3 \times 3^2 \times 5$ and $252 = 2^2 \times 3^2 \times 7$.</p>
        <p>
          gcd: take the min exponent on each shared prime. Shared primes: $2$, $3$. So $\gcd = 2^2
          \times 3^2 = 36$.
        </p>
        <p>
          lcm: take the max exponent on every prime present. So $\text{'{'}lcm{'}'} = 2^3 \times 3^2
          \times 5 \times 7 = 2520$.
        </p>
        <p>Check: $36 \times 2520 = 90720$ and $360 \times 252 = 90720$. Match.</p>
        <p>
          Why it holds: for each prime $p$, the exponent contributed to $\gcd \times \text{'{'}lcm
          {'}'}$ is $\min(\alpha, \beta) + \max(\alpha, \beta) = \alpha + \beta$, which is the
          exponent of $p$ in $ab$.
        </p>
      </Answer>

      <p>
        <strong>10.</strong> Reduce $252/360$ to lowest terms in one step using your work from the
        previous question. State the gcd you used and the resulting fraction. Verify by checking
        that the numerator and denominator of the result share no common factor greater than $1$.
      </p>
      <Answer>
        <p>Using $\gcd(252, 360) = 36$: $252 / 36 = 7$ and $360 / 36 = 10$. So $252/360 = 7/10$.</p>
        <p>Check: $\gcd(7, 10) = 1$, so $7/10$ is in lowest terms.</p>
      </Answer>

      <p>
        <strong>11.</strong> For each of the following fractions, decide whether it equals a finite
        decimal. Show your reasoning by reducing to lowest terms first, then factoring the
        denominator. Fractions: $7/20$, $9/24$, $11/125$, $13/30$, $17/64$.
      </p>
      <Answer>
        <p>
          A fraction in lowest terms equals a finite decimal if and only if its denominator factors
          as $2^m \times 5^n$.
        </p>
        <ul className="lrn-list">
          <li>$7/20$: already lowest terms. $20 = 2^2 \times 5$. Finite ($0.35$).</li>
          <li>$9/24$: $\gcd(9, 24) = 3$, reduces to $3/8$. $8 = 2^3$. Finite ($0.375$).</li>
          <li>$11/125$: already lowest terms. $125 = 5^3$. Finite ($0.088$).</li>
          <li>
            $13/30$: already lowest terms. $30 = 2 \times 3 \times 5$. The factor $3$ disqualifies
            it. Not finite (repeating).
          </li>
          <li>$17/64$: already lowest terms. $64 = 2^6$. Finite ($0.265625$).</li>
        </ul>
        <p>
          Common slip: not reducing first. Looking at $9/24$ with denominator $24 = 2^3 \times 3$
          and incorrectly concluding "not finite" because of the $3$.
        </p>
      </Answer>

      {/* Part III */}
      <hr />
      <h2>Part III: Proof Comprehension and Error Analysis</h2>

      <p>
        <strong>12.</strong> In Euclid's proof that there are infinitely many primes, the proof
        starts: "Assume for contradiction that $p_1, p_2, \ldots, p_k$ is a complete list of all
        primes." Answer all three:
      </p>
      <p>
        12a. Is this statement a hypothesis we accept as true, a hypothesis we are negating to
        derive a contradiction, or a fact deduced from earlier results?
      </p>
      <p>
        12b. The proof then defines $N = p_1 p_2 \cdots p_k + 1$. What role does $N$ play: is it an
        example, a counterexample, or an auxiliary construction?
      </p>
      <p>
        12c. The proof concludes that $N$ has a prime factor not in the list. Does the proof show
        that $N$ itself is prime? Explain.
      </p>
      <Answer>
        <p>
          12a. The statement "$p_1, \ldots, p_k$ is a complete list of all primes" is the hypothesis
          being negated. The proof assumes it for contradiction and shows it leads to an
          impossibility.
        </p>
        <p>
          12b. $N$ is an auxiliary construction. It is a number we manufacture so that we can ask
          which prime divides it, in order to derive a contradiction.
        </p>
        <p>
          12c. The proof does not show $N$ is prime. It only shows $N$ has a prime factor not in the
          list, because no $p_i$ divides $N$ (each $p_i$ leaves remainder $1$). That new prime might
          be $N$ itself, or some other prime that divides $N$. Either way, the list was incomplete.
        </p>
      </Answer>

      <p>
        <strong>13.</strong> A student writes the following argument: "Since $6$ divides $12$, and
        $12 = 4 \times 3$, by Euclid's Lemma $6$ must divide $4$ or $6$ must divide $3$. But $6$
        divides neither. Contradiction. So $6$ does not divide $12$. Wait, but $6$ does divide $12$.
        So Euclid's Lemma is wrong."
      </p>
      <p>
        Find the error precisely. State the exact hypothesis the student is missing. Then give a
        smallest counterexample showing that "if $r$ divides $ab$ then $r$ divides $a$ or $r$
        divides $b$" fails when $r$ is not prime.
      </p>
      <Answer>
        <p>
          The error is the missing hypothesis "$p$ is prime" in Euclid's Lemma. The lemma reads: if
          $p$ is prime and $p \mid ab$, then $p \mid a$ or $p \mid b$. The student applied a version
          with $r = 6$, which is not prime.
        </p>
        <p>
          Smallest counterexample: $r = 6$, $a = 2$, $b = 3$. Then $ab = 6$, $6 \mid 6$, but $6$
          divides neither $2$ nor $3$. The prime hypothesis is what makes the lemma work, because
          primes have no nontrivial factorisation to "split" across $a$ and $b$.
        </p>
      </Answer>

      <p>
        <strong>14.</strong> A student tries to prove that $\sqrt{'{'}4{'}'}$ is irrational by
        copying the proof for $\sqrt{'{'}2{'}'}$: "Assume $\sqrt{'{'}4{'}'} = m/n$ with $\gcd(m,n) =
        1$. Then $m^2 = 4n^2$. So $4 \mid m^2$, which means $2 \mid m$. Write $m = 2k$. Then $4k^2 =
        4n^2$, so $n^2 = k^2$. So $n = k$. But then we can keep going forever and we never get a
        contradiction."
      </p>
      <p>
        The proof fails because $\sqrt{'{'}4{'}'}$ is rational. Pinpoint the exact line where the
        argument breaks. State which step in the genuine $\sqrt{'{'}2{'}'}$ proof has no analog in
        this fake proof.
      </p>
      <Answer>
        <p>
          The argument breaks at "Then $n^2 = k^2$, so $n = k$". This is arithmetically fine, but
          the student claims no contradiction follows. There is no contradiction because $\gcd(m, n)
          = \gcd(2k, k) = k$, and if $k = 1$ we get $m = 2$, $n = 1$, which gives $\sqrt{'{'}4{'}'}{' '}
          = 2/1$, a valid rational.
        </p>
        <p>
          The missing analog: in the $\sqrt{'{'}2{'}'}$ proof, you derive that both $m$ and $n$ are
          even, contradicting $\gcd(m, n) = 1$. In the $\sqrt{'{'}4{'}'}$ attempt, you derive $m$ is
          even but cannot derive $n$ is even. The step "$n$ is also even" depended on having a
          factor of $2$ left over after substituting $m = 2k$, namely $n^2 = 2k^2$. For $\sqrt{'{'}4
          {'}'}$ you get $n^2 = k^2$, which carries no parity constraint on $n$.
        </p>
      </Answer>

      <p>
        <strong>15.</strong> In the back-substitution that expresses $\gcd(a, b)$ as $sa + tb$, the
        text says to start from the second-to-last equation in the Euclidean Algorithm, not the last
        one. Explain in your own words why the very last equation cannot serve as the starting
        point.
      </p>
      <Answer>
        <p>
          The last equation looks like $r_{'{'}k-1{'}'} = q \cdot r_k + 0$, where $r_k$ is the gcd.
          Rearranged: $0 = r_{'{'}k-1{'}'} - q \cdot r_k$. This expresses $0$ as a combination, not
          the gcd. It is useless for back-substitution.
        </p>
        <p>
          The second-to-last equation expresses the gcd $r_k$ as $r_{'{'}k-2{'}'} - q' \cdot r_{'{'}
          k-1{'}'}$, an integer combination of the two previous remainders. From there each earlier
          equation lets you substitute one remainder in terms of the two before it, until you reach
          a combination of the original $a$ and $b$.
        </p>
      </Answer>

      <p>
        <strong>16.</strong> The FTA has two parts: existence and uniqueness.
      </p>
      <p>16a. State each part precisely in your own words.</p>
      <p>16b. Which lemma in the chapter does the existence proof rely on?</p>
      <p>
        16c. Which lemma does the uniqueness proof rely on, and why is that lemma indispensable
        here?
      </p>
      <p>16d. If $1$ were called prime, which of the two halves would fail, and why?</p>
      <Answer>
        <p>
          16a. <em>Existence:</em> every integer $n &gt; 1$ can be written as a product of primes.{' '}
          <em>Uniqueness:</em> this product is unique up to the order of the factors.
        </p>
        <p>
          16b. Existence relies on the Key Fact that every composite number has a prime divisor. The
          proof repeatedly extracts the smallest prime divisor, producing a strictly decreasing
          sequence that must terminate.
        </p>
        <p>
          16c. Uniqueness relies on Euclid's Lemma: if a prime divides a product, it divides one of
          the factors. This lets you match primes from one factorisation to primes in another, one
          at a time. Without it you cannot conclude $p_1$ equals one of the $q_i$, only that $p_1$
          divides their product, which is not enough.
        </p>
        <p>
          16d. Uniqueness would fail. Example: $12 = 2^2 \times 3 = 1 \times 2^2 \times 3 = 1^2
          \times 2^2 \times 3$, giving infinitely many representations. Existence would still hold,
          but "up to order" would no longer suffice.
        </p>
      </Answer>

      {/* Part IV */}
      <hr />
      <h2>Part IV: Proof Production</h2>

      <p>
        <strong>17.</strong> Prove from scratch that a positive integer $n$ is divisible by $9$ if
        and only if $9$ divides the sum of its digits. Use the same structure as the rule for $3$ in
        the text: write $n$ as a sum of digits times powers of $10$, then use a key identity about
        $10^n$.
      </p>
      <Answer>
        <p>
          Let $n$ have digits $a_k, a_{'{'}k-1{'}'}, \ldots, a_1, a_0$, so $n = a_k \cdot 10^k +
          \cdots + a_1 \cdot 10 + a_0$.
        </p>
        <p>
          Key identity: $10^j = \underbrace{'{'}11 \cdots 1{'}'}_{'{'}j\text{'{'} ones{'}'}
          {'}'}
          \times 9 + 1$. So $10^j$ leaves remainder $1$ when divided by $9$: $10^j = 9 m_j + 1$ for
          some integer $m_j$.
        </p>
        <p>Substituting:</p>
        <p>
          $n = a_k(9 m_k + 1) + a_{'{'}k-1{'}'}(9 m_{'{'}k-1{'}'} + 1) + \cdots + a_1(9 m_1 + 1) +
          a_0$
          <br />
          $\phantom{'{'}n{'}'} = 9(a_k m_k + \cdots + a_1 m_1) + (a_k + a_{'{'}k-1{'}'} + \cdots +
          a_0)$.
        </p>
        <p>
          The first term is divisible by $9$. The second is the digit sum. By the Divisibility
          Lemma, $9 \mid n$ if and only if $9$ divides the digit sum.
        </p>
      </Answer>

      <p>
        <strong>18.</strong> Prove: if $d = \gcd(a, b)$, then $\gcd(a/d, b/d) = 1$. You may use
        either the FTA based approach or the Bézout based approach. State clearly which method you
        choose.
      </p>
      <Answer>
        <p>
          <strong>Bézout approach.</strong> There exist integers $s, t$ with $d = sa + tb$. Divide
          both sides by $d$:
        </p>
        <p>$1 = s(a/d) + t(b/d)$.</p>
        <p>
          Suppose $e &gt; 1$ divides both $a/d$ and $b/d$. Then $e$ divides $s(a/d) + t(b/d) = 1$,
          so $e \mid 1$, meaning $e = 1$. Contradiction. Therefore $\gcd(a/d, b/d) = 1$.
        </p>
        <p>
          <strong>FTA approach.</strong> Write $a$ and $b$ using prime factorisations. For each
          prime $p$, let $p^\alpha$ be the largest power dividing $a$ and $p^\beta$ the largest
          dividing $b$. Then $d$ has $p^{'{'}\min(\alpha, \beta){'}'}$ for each prime. So $a/d$ has
          exponent $\alpha - \min(\alpha, \beta)$ and $b/d$ has $\beta - \min(\alpha, \beta)$. At
          least one of these is zero. So for every prime, at least one of $a/d$, $b/d$ has no factor
          of $p$. The two share no prime factor, so $\gcd(a/d, b/d) = 1$.
        </p>
      </Answer>

      <p>
        <strong>19.</strong> Prove $\sqrt{'{'}15{'}'}$ is irrational using the FTA based method.
        Note that $15$ is not prime, so you will need to pick which prime in $15 = 3 \times 5$ to
        track.
      </p>
      <Answer>
        <p>
          Assume $\sqrt{'{'}15{'}'} = m/n$ with $\gcd(m, n) = 1$. Then $m^2 = 15 n^2 = 3 \times 5
          \times n^2$.
        </p>
        <p>
          By the Perfect Square Lemma, in $m^2$ every prime appears an even number of times. In
          particular the prime $3$ appears an even number of times in $m^2$.
        </p>
        <p>
          On the right, $3 \times 5 \times n^2$: prime $3$ appears once from the factor of $3$, plus
          an even number of times from $n^2$. The total is odd.
        </p>
        <p>
          But $m^2$ has $3$ an even number of times, and $3 \times 5 \times n^2$ has $3$ an odd
          number of times. Even cannot equal odd. Contradiction. Therefore $\sqrt{'{'}15{'}'}$ is
          irrational.
        </p>
      </Answer>

      <p>
        <strong>20.</strong> Prove that for any integer $n \ge 2$, the $n - 1$ consecutive integers
      </p>
      <p>$n! + 2,\quad n! + 3,\quad n! + 4,\quad \ldots,\quad n! + n$</p>
      <p>
        are all composite. State which earlier divisibility result you are invoking. Verify the
        proof by checking the case $n = 5$ (writing out the four composite numbers).
      </p>
      <Answer>
        <p>
          Claim: for any $n \ge 2$ and any integer $k$ with $2 \le k \le n$, the number $n! + k$ is
          composite.
        </p>
        <p>
          Proof. Since $2 \le k \le n$, the factor $k$ appears in the product $n! = 1 \times 2
          \times \cdots \times n$. So $k \mid n!$. Also $k \mid k$. By the Divisibility Lemma
          applied to $n! + k$, we have $k \mid n! + k$. Also $n! + k &gt; k$ (since $n! \ge 2$ for
          $n \ge 2$). So $n! + k$ has $k$ as a divisor strictly between $1$ and itself, making it
          composite.
        </p>
        <p>
          For $n = 5$: $5! = 120$. The four numbers from $5! + 2$ to $5! + 5$ are $122, 123, 124,
          125$. Check: $122 = 2 \times 61$, $123 = 3 \times 41$, $124 = 4 \times 31$, $125 = 5
          \times 25$. All composite.
        </p>
      </Answer>

      <p>
        <strong>21.</strong> Prove Euclid's Lemma: if $p$ is prime and $p$ divides $ab$, then $p$
        divides $a$ or $p$ divides $b$. Use the linear-combination form of the gcd. Hint: suppose
        $p$ does not divide $a$ and derive that $p$ must divide $b$.
      </p>
      <Answer>
        <p>Suppose $p$ is prime, $p \mid ab$, and $p \nmid a$. We must show $p \mid b$.</p>
        <p>
          Since $p$ is prime, its only divisors are $1$ and $p$. The gcd of $a$ and $p$ divides
          both. It cannot be $p$, because $p \nmid a$. So $\gcd(a, p) = 1$.
        </p>
        <p>
          By the GCD as Linear Combination theorem, there exist integers $s, t$ with $sa + tp = 1$.
        </p>
        <p>Multiply both sides by $b$: $sab + tpb = b$.</p>
        <p>
          $p \mid ab$ (given), so $p \mid sab$. Also $p \mid tpb$. By the Divisibility Lemma (with
          $A = b$, $B = sab$, $C = tpb$), $p \mid b$.
        </p>
      </Answer>

      {/* Part V */}
      <hr />
      <h2>Part V: Transfer and Synthesis</h2>

      <p>
        <strong>22.</strong> Adam claims that because $20 = 2 \times 10$, a number is divisible by
        $20$ if and only if it is divisible by both $2$ and $10$. Charlotte claims that because $20
        = 4 \times 5$, a number is divisible by $20$ if and only if it is divisible by both $4$ and
        $5$.
      </p>
      <p>
        Decide who is right. State the precise hypothesis on a factorisation $20 = a \times b$ that
        makes the rule "$n$ is divisible by $20$ if and only if $a$ and $b$ both divide $n$" valid.
        Justify with a small example and a small counterexample.
      </p>
      <Answer>
        <p>Charlotte is right. Adam is wrong.</p>
        <p>
          The valid rule: $n$ is divisible by $ab$ if and only if both $a$ and $b$ divide $n$,
          provided $\gcd(a, b) = 1$. The hypothesis $\gcd(a, b) = 1$ is essential.
        </p>
        <p>
          Adam's case: $20 = 2 \times 10$. But $\gcd(2, 10) = 2 \ne 1$. Counterexample: $n = 10$.
          Then $2 \mid 10$ and $10 \mid 10$, but $20 \nmid 10$.
        </p>
        <p>
          Charlotte's case: $20 = 4 \times 5$ and $\gcd(4, 5) = 1$. Her rule is valid. Example: $n =
          60$. $4 \mid 60$, $5 \mid 60$, and $20 \mid 60$.
        </p>
        <p>
          Reason: if $\gcd(a, b) = 1$ and both divide $n$, then by the generalisation of Euclid's
          Lemma, $ab \mid n$. If $\gcd(a, b) &gt; 1$, the factor is double counted in $a$ and $b$,
          so "both divide $n$" is too weak.
        </p>
      </Answer>

      <p>
        <strong>23.</strong> For each statement, decide whether it is true or false. If true, give a
        brief justification. If false, give a specific counterexample.
      </p>
      <p>23a. If $\gcd(a, b) = 1$, then $a$ and $b$ are both prime.</p>
      <p>23b. If $6$ divides $n$, then $2$ divides $n$ and $3$ divides $n$.</p>
      <p>23c. If $2$ divides $n$ and $4$ divides $n$, then $8$ divides $n$.</p>
      <p>23d. If $a$ divides $bc$, then $a$ divides $b$ or $a$ divides $c$.</p>
      <p>23e. If $p$ is prime and $p$ divides $n^2$, then $p$ divides $n$.</p>
      <Answer>
        <p>23a. False. Counterexample: $\gcd(8, 15) = 1$, but neither $8$ nor $15$ is prime.</p>
        <p>
          23b. True. $6 = 2 \times 3$ with $\gcd(2, 3) = 1$, so divisibility by $6$ is equivalent to
          divisibility by both $2$ and $3$.
        </p>
        <p>
          23c. False. Counterexample: $n = 12$. Then $2 \mid 12$ and $4 \mid 12$, but $8 \nmid 12$.
          Issue: $8 = 2 \times 4$ with $\gcd(2, 4) = 2 \ne 1$.
        </p>
        <p>
          23d. False. Counterexample: $a = 6$, $b = 2$, $c = 3$. Then $bc = 6$ and $6 \mid 6$, but
          $6$ divides neither $2$ nor $3$.
        </p>
        <p>23e. True. This is Euclid's Lemma applied with $a = b = n$.</p>
      </Answer>

      <p>
        <strong>24.</strong> Recall the primitive triple formula $(m^2 - n^2,\ 2mn,\ m^2 + n^2)$
        with $m &gt; n$, $\gcd(m, n) = 1$, and exactly one of $m$, $n$ even. Prove that the legs
        $m^2 - n^2$ and $2mn$ cannot both be odd, and the hypotenuse $m^2 + n^2$ is always odd.
      </p>
      <Answer>
        <p>$2mn$ contains the factor $2$, so $2mn$ is even. The legs cannot both be odd.</p>
        <p>To check $m^2 - n^2$ and $m^2 + n^2$:</p>
        <p>
          Case 1: $m$ even, $n$ odd. Then $m^2$ even, $n^2$ odd, so $m^2 - n^2$ odd and $m^2 + n^2$
          odd.
        </p>
        <p>
          Case 2: $m$ odd, $n$ even. Then $m^2$ odd, $n^2$ even, so $m^2 - n^2$ odd and $m^2 + n^2$
          odd.
        </p>
        <p>In both cases $m^2 - n^2$ is odd, $2mn$ is even, and $m^2 + n^2$ is odd.</p>
      </Answer>

      <p>
        <strong>25.</strong> Pick $m$ and $n$ that share a common factor greater than $1$. Compute
        the triple $(m^2 - n^2,\ 2mn,\ m^2 + n^2)$. Show that the resulting triple is not primitive
        by finding a common factor of all three numbers. Then explain in one sentence why this is no
        accident.
      </p>
      <Answer>
        <p>Pick $m = 4$, $n = 2$. Then $\gcd(4, 2) = 2 &gt; 1$.</p>
        <p>
          Triple: $m^2 - n^2 = 16 - 4 = 12$. $2mn = 16$. $m^2 + n^2 = 16 + 4 = 20$. So the triple is
          $(12, 16, 20)$.
        </p>
        <p>Common factor: $\gcd(12, 16, 20) = 4$. The triple is not primitive.</p>
        <p>
          Reason: if $d &gt; 1$ divides both $m$ and $n$, then $d^2$ divides $m^2$, $n^2$, $m^2 -
          n^2$, $m^2 + n^2$, and $2mn$, so $d^2$ is a common divisor of all three sides.
        </p>
      </Answer>
    </div>
  )
}

export default function CapstoneNumberTheory() {
  const config = {
    documentTitle: 'Project: Number Theory - AETHER',
    briefing: {
      title: 'Number Theory',
      concepts: ['Number Theory']
    },
    projectContent: <ProjectContent />,
    examContent: <ExamContent />
  }

  return <ProjectTemplate config={config} />
}
