import ProjectTemplate, { Answer } from '../../../../../components/project/project-template'

function ProjectContent() {
  return (
    <div className="project-prose">
      {/* Project 1 */}
      <h2>Project 1: The Visual Foundation</h2>

      <h3>Scenario</h3>
      <p>
        You are writing the first three chapters of a small workbook for a 13-year-old who has
        finished fractions and is about to meet negative numbers for the first time. The workbook
        must derive the rules for adding and subtracting any two rational numbers from the picture
        of vectors on the two-sided number line. No rules from outside that picture are allowed. You
        hand the workbook to the mentor when finished.
      </p>
      <p>
        Write the special reflection notation {`$x^*$`} throughout. Do not use the symbol {`$-x$`}{' '}
        (it is reserved for the next project, after subtraction is defined). The workbook should not
        contain the word "negative" used as a noun, only as a description of position.
      </p>

      <h3>What to Produce</h3>
      <p>
        A single document, between four and seven A4 pages, with hand-drawn or digitally drawn
        number lines and short prose.
      </p>

      <h4>Deliverable 1A: Chapter A. The Two-Sided Number Line and Reflection</h4>
      <p>
        Define reflection across zero in one sentence using the words "distance" and "side." On a
        single number line drawn to scale between {`$-5$`} and {`$+5$`}, show three specific
        reflection pairs. At least one pair must use a non-integer rational number (for example,{' '}
        {`$\\frac{3}{4}$`} and its reflection).
      </p>
      <p>
        State without proof that zero is its own reflection and that reflecting twice returns the
        original point. Give the geometric reason for each in one sentence. Define the integers as
        the whole numbers together with their reflections, and the rationals as the fractions
        together with their reflections. Show the nesting in a small diagram or sentence.
      </p>

      <h4>Deliverable 1B: Chapter B. Why Fractions Are Not Enough</h4>
      <p>
        Pose the equation {`$7 + x = 5$`}. Explain in one short paragraph why no fraction solves it.
        State the solution {`$2^*$`} and verify it by adding on the number line. Include one further
        example chosen by you.
      </p>

      <h4>Deliverable 1C: Chapter C. Vectors and Addition of Rational Numbers</h4>
      <p>
        Define a vector on the number line in terms of starting point, endpoint, length, and
        direction. Define the special vector for a rational number {`$x$`}. State the addition rule
        for two vectors with the same direction, with opposite directions, and with equal lengths in
        opposite directions. Illustrate each of the three cases with a number-line drawing at
        consistent scale, using specific numbers.
      </p>
      <p>
        Define addition of rational numbers as the endpoint of the sum of the special vectors. State
        and prove on the number line the four identities below. Each proof is one drawing plus two
        sentences, using specific numbers, not letters.
      </p>
      <ol className="lrn-list">
        <li>
          {`$0 + x = x$`} for any rational {`$x$`}.
        </li>
        <li>
          {`$x + x^* = 0$`} for any rational {`$x$`}.
        </li>
        <li>{`$x^* + y^* = (x + y)^*$`}.</li>
        <li>
          {`$s + t^* = s - t$`} if {`$s \\geq t$`}, and equals {`$(t - s)^*$`} if {`$s < t$`}.
        </li>
      </ol>
      <p>
        Include one worked computation that combines two of the identities, for example{' '}
        {`$\\frac{15}{4} + \\left(\\frac{5}{3}\\right)^*$`}, with the drawing.
      </p>

      <h4>Deliverable 1D: Chapter D. Subtraction Without a New Operation</h4>
      <p>
        State that subtraction is defined as addition of the reflection. Show two worked examples.
        Prove the column-by-column subtraction identity, namely that{' '}
        {`$(x + y + z) - (a + b + c) = (x - a) + (y - b) + (z - c)$`}, in two short sentences.
        Explain in one paragraph why the standard column-subtraction algorithm from primary school
        is exactly this identity at work.
      </p>

      <h4>Deliverable 1E: Closing Paragraph</h4>
      <p>
        Close with a single paragraph naming which of Wu's five principles the chapter models. The
        paragraph must name at least two of: precision of definition, precision of assertion,
        reasoning, coherence, purposefulness.
      </p>

      {/* Project 2 */}
      <hr />
      <h2>Project 2: The Axiomatic Derivation</h2>

      <h3>Scenario</h3>
      <p>
        You are writing the proof appendix to a textbook for mathematics education students. The
        reader has finished the chapter on the vector model and now wants a clean derivation of
        every rule from a short list of axioms. The appendix contains no drawings, no analogies, and
        no appeals to intuition. Every step has a name.
      </p>

      <h3>What to Produce</h3>
      <p>
        A single document of between seven and twelve A4 pages, divided into four parts. Every proof
        carries margin labels naming the axiom or theorem used at each step, in the style "by A2" or
        "by Theorem 29.1" or "by Basic Fact 4."
      </p>

      <h4>Deliverable 2A: Part One. Addition</h4>
      <p>
        State the three assumptions A1, A2, and A3 exactly as the source states them. Then prove the
        following, in order, with full justifications. Each proof must be self-contained. For each
        proof, state in one sentence at the end which of Wu's five principles the proof relies on
        most heavily.
      </p>
      <ol className="lrn-list">
        <li>
          Basic Fact 1: if {`$x + y = x$`}, then {`$y = 0$`}.
        </li>
        <li>
          Basic Fact 2: if {`$x + y = 0$`}, then {`$y = x^*$`} and {`$x = y^*$`}. The additive
          inverse is unique.
        </li>
        <li>Basic Fact 3: {`$(x + y)^* = x^* + y^*$`}.</li>
        <li>Identity (27.6): {`$-(x + y) = -x - y$`}.</li>
        <li>Identity (27.7): {`$-(x - y) = -x + y$`}.</li>
      </ol>

      <h4>Deliverable 2B: Part Two. Multiplication</h4>
      <p>
        State the three assumptions M1, M2, and M3 exactly as the source states them. Then prove the
        following, in order, with full justifications.
      </p>
      <ol className="lrn-list">
        <li>M3 itself: {`$0 \\cdot x = 0$`}, proved from M1 and M2 alone.</li>
        <li>
          Theorem 29.1: {`$(-1)(-1) = 1$`}. Use only the distributive law, identity (M3), and Basic
          Fact 2. The proof must not extend a pattern, must not assume any general formula, and must
          not appeal to a model.
        </li>
        <li>
          Theorem 29.2: {`$(-1) \\cdot x = -x$`} for any rational {`$x$`}.
        </li>
        <li>Basic Fact 4: {`$(-x) \\cdot y = -(x \\cdot y)$`}.</li>
        <li>Basic Fact 5: {`$(-x)(-y) = x \\cdot y$`}.</li>
        <li>
          The distributive law for subtraction: {`$x \\cdot (y - z) = x \\cdot y - x \\cdot z$`}.
        </li>
      </ol>
      <p>
        Include one short paragraph contrasting the proof in step 7 (Theorem 29.1) with the pattern
        argument that extends {`$3 \\cdot (-2) = -6$`}, {`$2 \\cdot (-2) = -4$`}, and so on. The
        paragraph must name exactly what the pattern argument assumes and why that assumption is not
        a proof.
      </p>

      <h4>Deliverable 2C: Part Three. Division and Ordering</h4>
      <ol className="lrn-list">
        <li>
          Define division. State and prove the zero-product property: if {`$x \\cdot y = 0$`} and{' '}
          {`$y \\neq 0$`}, then {`$x = 0$`}.
        </li>
        <li>
          Explain in two paragraphs why {`$x \\div 0$`} is undefined. The two paragraphs must treat
          the two cases separately. The first case has {`$x \\neq 0$`}. The second has {`$x = 0$`}.
          The reasons given in the two cases differ, and the document must say so.
        </li>
        <li>
          For each of the eight ordering rules A through H from the source, give a proof or a
          precise restatement using the additive and multiplicative assumptions plus a single
          ordering axiom of your choice (state which one you adopt). Rule H must be proved with the
          explicit restriction that both denominators are positive. Add one short remark explaining
          what happens to the cross-multiplication step when one or both denominators are negative.
        </li>
        <li>
          Worked example: solve the inequality {`$\\frac{2x - 3}{-4} < 5$`} for {`$x$`}. Show every
          step with a justification, in particular the step where the inequality flips.
        </li>
      </ol>

      <h4>Deliverable 2D: Part Four. Powers and Absolute Value</h4>
      <ol className="lrn-list">
        <li>
          State the definition of {`$x^n$`} for integer {`$n$`} (positive, zero, and negative).
          Prove the identity {`$x^m \\cdot x^n = x^{m+n}$`} for all integers {`$m$`} and {`$n$`}.
          The proof needs case analysis. State the cases.
        </li>
        <li>Prove power inequalities I and J from the source.</li>
        <li>
          Define absolute value as distance from zero. Derive the case formula ({`$|x| = x$`} if{' '}
          {`$x \\geq 0$`}, and {`$|x| = -x$`} if {`$x < 0$`}) from the definition. The definition is
          the distance; the case formula is a theorem.
        </li>
        <li>
          Prove the triangle inequality {`$|x + y| \\leq |x| + |y|$`}. Use case analysis: four cases
          by the signs of {`$x$`} and {`$y$`}. State the cases. Identify where equality holds.
        </li>
        <li>
          Prove the two-term Cauchy-Schwarz inequality:{' '}
          {`$|ac + bd| \\leq \\sqrt{a^2 + b^2} \\cdot \\sqrt{c^2 + d^2}$`}. One acceptable route is
          to expand {`$(ad - bc)^2$`}, which is non-negative because it is a square, and rearrange.
          Another acceptable route is the polynomial in {`$t$`} given by{' '}
          {`$(a + tc)^2 + (b + td)^2$`}, which is non-negative for all real {`$t$`}, so its
          discriminant is non-positive. Use either route, and name the step where non-negativity of
          a square is invoked.
        </li>
      </ol>

      {/* Project 3 */}
      <hr />
      <h2>Project 3: The Teacher's Diagnosis</h2>

      <h3>Scenario</h3>
      <p>
        You are the senior mathematics teacher at a school in Sofia. Five of your colleagues'
        students have produced work on rational numbers. The work is anonymised. You receive it in a
        single packet. Your task is to write, for each piece of student work, three things: a short
        diagnosis naming the misconception, a one-page corrected explanation that the student can
        read on their own, and a single line stating which of Wu's five principles was violated.
      </p>
      <p>This project is the test of whether you can teach the material, not just do it.</p>

      <h3>What to Produce</h3>

      <h4>Deliverable 3A: The Five Student Work Samples</h4>
      <p>
        <strong>Sample 1.</strong> A 14-year-old student writes: "I will show that{' '}
        {`$(-3)(-4) = 12$`}. Notice that {`$3 \\cdot (-4) = -12$`}, {`$2 \\cdot (-4) = -8$`},{' '}
        {`$1 \\cdot (-4) = -4$`}, {`$0 \\cdot (-4) = 0$`}. So as the first number goes down by one,
        the answer goes up by four. The next one is {`$(-1)(-4) = 4$`}. The next is{' '}
        {`$(-2)(-4) = 8$`}. So {`$(-3)(-4) = 12$`}. The pattern always works."
      </p>
      <p>
        <strong>Sample 2.</strong> A student writes: "To work out the absolute value of {`$-x$`} I
        just remove the minus sign. So {`$|-x| = x$`}. The absolute value of {`$-7$`} is {`$7$`}.
        The absolute value of {`$-\\frac{1}{2}$`} is {`$\\frac{1}{2}$`}. So absolute value just
        means erasing the minus sign in front."
      </p>
      <p>
        <strong>Sample 3.</strong> A student writes: "I solved the inequality{' '}
        {`$\\frac{a}{b} < \\frac{c}{d}$`} by cross-multiplying. So {`$ad < cb$`}. Then I plugged in{' '}
        {`$a = 1, b = -2, c = 1, d = 1$`}. I get {`$ad = 1$`}, and {`$cb = -2$`}. So {`$1 < -2$`}.
        That's wrong. So the cross-multiplication rule must be wrong."
      </p>
      <p>
        <strong>Sample 4.</strong> A student writes: "Why is {`$5 \\div 0$`} undefined? My teacher
        said it's because you can't divide by nothing. But zero is something. It's a number. I think{' '}
        {`$5 \\div 0$`} should be infinity, because if you divide five into smaller and smaller
        pieces, the number of pieces gets bigger and bigger. So {`$5 \\div 0$`} is infinity. I also
        think {`$0 \\div 0$`} is one, because anything divided by itself is one."
      </p>
      <p>
        <strong>Sample 5.</strong> A student writes: "In the equation {`$-x = 7$`}, I solved it like
        this. The minus is a subtraction sign. So {`$-x$`} means subtract {`$x$`}. Subtract{' '}
        {`$x = 7$`} means {`$x = -7$`}. But also, the minus sign means the number is negative. So{' '}
        {`$-x$`} is a negative number. So a negative number equals seven. But seven is positive. So
        the equation has no solution. I have two different answers and I don't know which is right."
      </p>

      <h4>Deliverable 3B: Three Pieces Per Sample</h4>
      <p>For each of the five samples, produce three pieces.</p>
      <ol className="lrn-list">
        <li>
          <strong>Diagnosis</strong> (80 to 150 words). Name the misconception by the family it
          belongs to. For Sample 1, the family is the pattern-extrapolation fallacy. For Sample 2,
          the unary versus symmetric use of the minus sign. For Sample 3, cross-multiplication
          without checking sign of denominators. For Sample 4, rule-based explanation of division by
          zero, plus conflation of arithmetic and limit reasoning. For Sample 5, three uses of the
          minus sign confused with each other.
        </li>
        <li>
          <strong>Corrected Explanation</strong> (250 to 400 words), written for the student. Use
          one of Wu's representations consistently (the two-sided number line picture, or the
          axiomatic chain, but not both mixed). Prove what needs to be proved using the vector
          picture or the axioms from Projects 1 and 2. Do not use the phrase "the rule says" or any
          equivalent. Support every claim.
        </li>
        <li>
          <strong>Wu Principle Violated.</strong> A single sentence naming which of Wu's five
          principles the student broke: precision of definition, precision of assertion, reasoning,
          coherence, or purposefulness.
        </li>
      </ol>

      <h4>Deliverable 3C: Final Synthesis Essay</h4>
      <p>
        After the five samples are addressed, write a closing piece of between 400 and 600 words.
        The chapter introduces the symbol {`$x^*$`} for the reflection of {`$x$`} and waits until
        after subtraction is defined before introducing the minus sign. Drawing on at least three of
        the five samples, explain why this delay in the source is a teaching decision and not a
        quirk of notation. Identify which student errors the {`$x^*$`} notation would have prevented
        and which it would not have.
      </p>
    </div>
  )
}

function ExamContent() {
  return (
    <div className="project-prose">
      {/* Permitted facts preamble */}
      <h2>Permitted Facts</h2>
      <p>You may use the following without proof. Everything else must be derived from these.</p>
      <p>
        <strong>Axioms for addition.</strong>
      </p>
      <ol className="lrn-list">
        <li>
          <strong>A1.</strong> Addition of rational numbers exists, is unique, agrees with fraction
          addition for non-negative inputs, and is associative and commutative.
        </li>
        <li>
          <strong>A2.</strong> For every rational {`$x$`}, {`$x + x^* = 0$`}.
        </li>
        <li>
          <strong>A3.</strong> For every rational {`$x$`}, {`$x + 0 = x$`}.
        </li>
      </ol>
      <p>
        <strong>Axioms for multiplication.</strong>
      </p>
      <ol className="lrn-list">
        <li>
          <strong>M1.</strong> Multiplication of rational numbers exists, is unique, agrees with
          fraction multiplication for non-negative inputs, and is associative, commutative, and
          distributive over addition.
        </li>
        <li>
          <strong>M2.</strong> For every rational {`$x$`}, {`$1 \\cdot x = x$`}.
        </li>
        <li>
          <strong>M3.</strong> For every rational {`$x$`}, {`$0 \\cdot x = 0$`}.
        </li>
      </ol>
      <p>
        <strong>Basic facts already proved.</strong>
      </p>
      <ol className="lrn-list">
        <li>
          <strong>Basic Fact 1.</strong> If {`$x + y = x$`}, then {`$y = 0$`}.
        </li>
        <li>
          <strong>Basic Fact 2.</strong> If {`$x + y = 0$`}, then {`$y = x^*$`} and {`$x = y^*$`}.
          The additive inverse is unique.
        </li>
        <li>
          <strong>Basic Fact 3.</strong> {`$(x + y)^* = x^* + y^*$`}.
        </li>
      </ol>
      <p>
        <strong>Definitions you may treat as given.</strong> Subtraction is defined by{' '}
        {`$x - y = x + y^*$`}. The multiplicative inverse of a non-zero {`$y$`} is the unique number{' '}
        {`$y^{-1}$`} with {`$y \\cdot y^{-1} = 1$`}. Division is {`$x \\div y = x \\cdot y^{-1}$`}{' '}
        for {`$y \\neq 0$`}. The absolute value {`$|x|$`} is the distance from {`$x$`} to {`$0$`} on
        the number line.
      </p>
      <p>
        You may also use the vector interpretation of addition: {`$x + y$`} is the endpoint of the
        special vector for {`$x$`} followed by a copy of the special vector for {`$y$`} placed at
        the head of the first.
      </p>
      <p>
        Use the star notation {`$x^*$`} in any work that comes before subtraction has been defined
        in your argument. After you have invoked the definition of subtraction, you may switch to{' '}
        {`$-x$`}.
      </p>

      {/* Part I */}
      <hr />
      <h2>Part I: Definitions and Notation</h2>

      <p>
        <strong>1.</strong> State precisely what {`$x^*$`} means for a rational number {`$x$`},
        using the number line. Separately, state what {`$-x$`} means. Then prove that {`$x^* = -x$`}{' '}
        for every rational {`$x$`}, citing the axioms or basic facts you use.
      </p>
      <Answer>
        <p>
          The reflection {`$x^*$`} is the unique point on the number line that lies at the same
          distance from {`$0$`} as {`$x$`} but on the opposite side.
        </p>
        <p>
          The expression {`$-x$`} is the additive inverse. It is defined indirectly through
          subtraction as {`$-x = 0 - x = 0 + x^*$`}. By A3, this equals {`$x^*$`}.
        </p>
        <p>
          So {`$-x = x^*$`} for every rational {`$x$`}.
        </p>
      </Answer>

      <p>
        <strong>2.</strong> Using only the definition of subtraction and the axioms, prove that{' '}
        {`$-(x + y) = -x - y$`} for all rational {`$x, y$`}.
      </p>
      <Answer>
        <p>By the definition of subtraction, {`$-x - y = -x + (-y)^* = -x + (-y) = x^* + y^*$`}.</p>
        <p>By Basic Fact 3, {`$x^* + y^* = (x + y)^* = -(x + y)$`}.</p>
        <p>So {`$-(x + y) = -x - y$`}.</p>
      </Answer>

      <p>
        <strong>3.</strong> Give two equivalent definitions of {`$|x|$`}: one as a distance on the
        number line, one by cases. Prove they describe the same number for every rational {`$x$`}.
      </p>
      <Answer>
        <p>
          <strong>Definition 1.</strong> {`$|x|$`} is the distance from {`$x$`} to {`$0$`} on the
          number line.
        </p>
        <p>
          <strong>Definition 2.</strong> {`$|x| = x$`} if {`$x \\geq 0$`}, and {`$|x| = -x$`} if{' '}
          {`$x < 0$`}.
        </p>
        <p>
          If {`$x \\geq 0$`}, the distance from {`$x$`} to {`$0$`} is {`$x$`} itself. This agrees
          with Definition 2.
        </p>
        <p>
          If {`$x < 0$`}, then {`$x$`} lies to the left of {`$0$`}. The distance from {`$x$`} to{' '}
          {`$0$`} equals the distance from {`$x^* = -x$`} to {`$0$`}, which is {`$-x$`} (since{' '}
          {`$-x > 0$`}). Both definitions agree.
        </p>
      </Answer>

      <p>
        <strong>4.</strong> The source introduces the notation {`$x^*$`} first and only later
        replaces it with {`$-x$`}, after subtraction has been defined. Explain in four to six
        sentences why this notational sequencing is pedagogically deliberate. Your answer must
        address the three distinct roles the minus sign plays: as the sign of a number, as the
        subtraction operation between two numbers, and as the operator that sends a number to its
        reflection across zero.
      </p>
      <Answer>
        <p>
          The minus sign carries three distinct meanings. As a sign attached to a numeral, it marks
          a negative number. Between two numbers, it denotes subtraction. As a unary operator, it
          sends any number to its reflection across zero (the additive inverse).
        </p>
        <p>
          Conflating these three meanings causes durable confusion. The source introduces the
          reflection operator as {`$x^*$`} first, separating the reflection meaning from the
          subtraction meaning. Subtraction is then introduced as a derived operation:{' '}
          {`$x - y = x + y^*$`}.
        </p>
        <p>
          Only after subtraction is firmly defined does {`$-y$`} replace {`$y^*$`}. By then, the
          learner has separated reflection from subtraction in their mind, and the symbol "{`$-$`}"
          can carry its full triple role without confusion.
        </p>
      </Answer>

      <p>
        <strong>5.</strong> Using the vector definition of addition, draw a labelled diagram on the
        number line showing the computation of {`$\\frac{2}{3} + \\left(-\\frac{5}{4}\\right)$`}.
        Mark the special vector for each summand and the endpoint of the result. State the final
        value as a single rational number.
      </p>
      <Answer>
        <p>
          Draw the special vector for {`$\\frac{2}{3}$`} pointing right from {`$0$`} with its head
          at {`$\\frac{2}{3} \\approx 0.667$`}.
        </p>
        <p>
          Place a copy of the special vector for {`$-\\frac{5}{4}$`} pointing left, with its tail at{' '}
          {`$\\frac{2}{3}$`} and its head at{' '}
          {`$\\frac{2}{3} - \\frac{5}{4} = \\frac{8}{12} - \\frac{15}{12} = -\\frac{7}{12}$`}.
        </p>
        <p>The result is {`$-\\frac{7}{12}$`}.</p>
      </Answer>

      {/* Part II */}
      <hr />
      <h2>Part II: Computation with Justification</h2>

      <p>
        <strong>6.</strong> Compute{' '}
        {`$\\left(-\\frac{3}{7}\\right) + \\frac{5}{14} - \\left(-\\frac{2}{3}\\right)$`}. Express
        the result in lowest terms. Show every step and cite the axiom, definition, or rule you
        used.
      </p>
      <Answer>
        <p>
          By the definition of subtraction,{' '}
          {`$\\left(-\\frac{3}{7}\\right) + \\frac{5}{14} - \\left(-\\frac{2}{3}\\right) = -\\frac{3}{7} + \\frac{5}{14} + \\frac{2}{3}$`}
          .
        </p>
        <p>
          Common denominator: {`$42$`}. So {`$-\\frac{3}{7} = -\\frac{18}{42}$`},{' '}
          {`$\\frac{5}{14} = \\frac{15}{42}$`}, {`$\\frac{2}{3} = \\frac{28}{42}$`}.
        </p>
        <p>Sum: {`$-\\frac{18}{42} + \\frac{15}{42} + \\frac{28}{42} = \\frac{25}{42}$`}.</p>
      </Answer>

      <p>
        <strong>7.</strong> Compute{' '}
        {`$\\left(-\\frac{2}{5}\\right) \\cdot \\left(-\\frac{15}{8}\\right) \\cdot \\frac{4}{9}$`}.
        Justify the sign of the result using the theorem {`$(-a)(-b) = ab$`}, not by an unjustified
        sign rule.
      </p>
      <Answer>
        <p>
          By the theorem {`$(-a)(-b) = ab$`} applied to the first two factors:{' '}
          {`$\\left(-\\frac{2}{5}\\right)\\left(-\\frac{15}{8}\\right) = \\frac{2}{5} \\cdot \\frac{15}{8} = \\frac{30}{40} = \\frac{3}{4}$`}
          .
        </p>
        <p>Then {`$\\frac{3}{4} \\cdot \\frac{4}{9} = \\frac{12}{36} = \\frac{1}{3}$`}.</p>
        <p>The result is {`$\\frac{1}{3}$`}.</p>
      </Answer>

      <p>
        <strong>8.</strong> Which is larger, {`$\\frac{-7}{11}$`} or {`$\\frac{-8}{13}$`}? Use the
        cross-multiplication rule for inequalities. State explicitly how you handled the requirement
        that denominators be positive.
      </p>
      <Answer>
        <p>
          The rule requires positive denominators. Both {`$11$`} and {`$13$`} are already positive,
          so no rewriting is needed.
        </p>
        <p>
          Cross-multiply: compare {`$-7 \\cdot 13 = -91$`} with {`$-8 \\cdot 11 = -88$`}. Since{' '}
          {`$-91 < -88$`}, we have {`$\\frac{-7}{11} < \\frac{-8}{13}$`}.
        </p>
        <p>So {`$\\frac{-8}{13}$`} is larger.</p>
      </Answer>

      <p>
        <strong>9.</strong> Solve {`$|2x - 5| = 3$`} by reading the equation as a statement about
        distance on the number line. Show the geometric reasoning. Do not square the equation, and
        do not split into algebraic cases.
      </p>
      <Answer>
        <p>
          Rewrite as {`$\\left|2\\left(x - \\frac{5}{2}\\right)\\right| = 3$`}, so{' '}
          {`$2 \\cdot \\left|x - \\frac{5}{2}\\right| = 3$`} and{' '}
          {`$\\left|x - \\frac{5}{2}\\right| = \\frac{3}{2}$`}.
        </p>
        <p>
          This says the distance from {`$x$`} to {`$\\frac{5}{2}$`} is {`$\\frac{3}{2}$`}. Two
          points satisfy this: {`$x = \\frac{5}{2} + \\frac{3}{2} = 4$`} and{' '}
          {`$x = \\frac{5}{2} - \\frac{3}{2} = 1$`}.
        </p>
        <p>So {`$x \\in \\{1, 4\\}$`}.</p>
      </Answer>

      {/* Part III */}
      <hr />
      <h2>Part III: Proof from Axioms</h2>

      <p>
        <strong>10.</strong> Without using M3, prove that {`$0 \\cdot x = 0$`} for every rational{' '}
        {`$x$`}. Use only A1 to A3 and M1 to M2. Hint: write {`$0 = 0 + 0$`} and apply the
        distributive law.
      </p>
      <Answer>
        <p>Let {`$y = 0 \\cdot x$`}.</p>
        <p>
          By the distributive law (M1),{' '}
          {`$y = 0 \\cdot x = (0 + 0) \\cdot x = 0 \\cdot x + 0 \\cdot x = y + y$`}.
        </p>
        <p>
          So {`$y + y = y$`}. By Basic Fact 1 (with the first summand {`$y$`} and the equation{' '}
          {`$y + y = y$`}), the second summand {`$y$`} must equal {`$0$`}.
        </p>
        <p>Therefore {`$0 \\cdot x = 0$`}.</p>
      </Answer>

      <p>
        <strong>11.</strong> Prove that {`$(-1)(-1) = 1$`} and use it to prove the general statement{' '}
        {`$(-a)(-b) = ab$`}.
      </p>
      <p>(a) Prove {`$(-1)(-1) = 1$`}. You may use the result of Question 10.</p>
      <Answer>
        <p>
          By Basic Fact 2, it suffices to show {`$(-1)(-1) + (-1) = 0$`}, since if{' '}
          {`$a + (-1) = 0$`}, then {`$a = -(-1) = 1$`}.
        </p>
        <p>
          By M2, {`$-1 = 1 \\cdot (-1)$`}. So{' '}
          {`$(-1)(-1) + (-1) = (-1)(-1) + 1 \\cdot (-1) = [(-1) + 1] \\cdot (-1)$`} by the
          distributive law.
        </p>
        <p>
          Now {`$(-1) + 1 = 0$`} by A2. So the expression equals {`$0 \\cdot (-1) = 0$`} by Question
          10 (or M3).
        </p>
        <p>Therefore {`$(-1)(-1) = 1$`}.</p>
      </Answer>

      <p>
        (b) Use (a) to prove that for all rational {`$a$`} and {`$b$`}, {`$(-a)(-b) = ab$`}.
      </p>
      <Answer>
        <p>
          First show {`$(-1) \\cdot x = -x$`} for every rational {`$x$`}. By the same method:{' '}
          {`$(-1)x + x = (-1)x + 1 \\cdot x = [(-1) + 1] \\cdot x = 0 \\cdot x = 0$`}. So{' '}
          {`$(-1)x = -x$`} by Basic Fact 2.
        </p>
        <p>
          Now {`$(-a)(-b) = [(-1)a][(-1)b] = (-1)(-1) \\cdot ab = 1 \\cdot ab = ab$`}, using
          associativity and commutativity from M1, then (a), then M2.
        </p>
      </Answer>

      <p>
        <strong>12.</strong> Prove the triangle inequality {`$|x + y| \\leq |x| + |y|$`} for all
        rational {`$x, y$`}. State the necessary and sufficient condition on {`$x$`} and {`$y$`} for
        equality to hold, and prove your characterisation.
      </p>
      <Answer>
        <p>
          Case analysis on the signs of {`$x$`} and {`$y$`}.
        </p>
        <p>
          <strong>
            Case 1: {`$x \\geq 0$`} and {`$y \\geq 0$`}.
          </strong>{' '}
          Then {`$x + y \\geq 0$`}, so {`$|x + y| = x + y = |x| + |y|$`}. Equality holds.
        </p>
        <p>
          <strong>
            Case 2: {`$x \\leq 0$`} and {`$y \\leq 0$`}.
          </strong>{' '}
          Then {`$x + y \\leq 0$`}, so {`$|x + y| = -(x + y) = -x - y = |x| + |y|$`}. Equality
          holds.
        </p>
        <p>
          <strong>
            Case 3: {`$x \\geq 0$`} and {`$y < 0$`}
          </strong>{' '}
          (the case {`$x < 0, y \\geq 0$`} is symmetric). Then {`$|x| + |y| = x - y$`}. Show{' '}
          {`$|x + y| \\leq x - y$`}.
        </p>
        <p>
          Subcase 3a: {`$x + y \\geq 0$`}. Then {`$|x + y| = x + y$`}. Need {`$x + y \\leq x - y$`},
          i.e. {`$2y \\leq 0$`}, which holds since {`$y < 0$`}.
        </p>
        <p>
          Subcase 3b: {`$x + y < 0$`}. Then {`$|x + y| = -x - y$`}. Need {`$-x - y \\leq x - y$`},
          i.e. {`$0 \\leq 2x$`}, which holds since {`$x \\geq 0$`}.
        </p>
        <p>
          <strong>Equality.</strong> Combining all cases, equality holds if and only if{' '}
          {`$xy \\geq 0$`}. That is, {`$x$`} and {`$y$`} have the same sign or at least one of them
          is zero.
        </p>
      </Answer>

      <p>
        <strong>13.</strong> Prove the following two claims directly from the axioms, then deduce
        the rule that multiplying both sides of an inequality by a negative number reverses the
        inequality.
      </p>
      <p>
        (a) If {`$x > 0$`} and {`$y < z$`}, then {`$xy < xz$`}.
      </p>
      <Answer>
        <p>
          Given {`$x > 0$`} and {`$y < z$`}. By the inequality property {`$y < z \\iff z - y > 0$`},
          we have {`$z - y > 0$`}.
        </p>
        <p>Multiplying two positives gives a positive: {`$x(z - y) > 0$`}.</p>
        <p>
          By distributivity, {`$xz - xy > 0$`}, so {`$xy < xz$`}.
        </p>
      </Answer>

      <p>
        (b) If {`$x < 0$`} and {`$y < z$`}, then {`$xy > xz$`}.
      </p>
      <Answer>
        <p>
          Given {`$x < 0$`} and {`$y < z$`}. Then {`$-x > 0$`} and {`$z - y > 0$`}, so{' '}
          {`$(-x)(z - y) > 0$`}.
        </p>
        <p>
          By distributivity, {`$-xz + xy > 0$`}, i.e. {`$xy > xz$`}.
        </p>
      </Answer>

      <p>
        (c) Deduce the rule that multiplying both sides of an inequality by a negative reverses it.
      </p>
      <Answer>
        <p>
          If {`$u < v$`} and {`$w < 0$`}, then set {`$x = w$`}, {`$y = u$`}, {`$z = v$`} in (b).
          This gives {`$wu > wv$`}, i.e. {`$uw > vw$`}.
        </p>
        <p>
          So multiplying both sides of {`$u < v$`} by a negative number {`$w$`} reverses the
          inequality.
        </p>
      </Answer>

      {/* Part IV */}
      <hr />
      <h2>Part IV: Error Analysis</h2>

      <p>
        <strong>14.</strong> A student offers this argument that {`$(-3)(-4) = 12$`}:
      </p>
      <p>
        "Look at the pattern. {`$3 \\cdot (-4) = -12$`}. {`$2 \\cdot (-4) = -8$`}.{' '}
        {`$1 \\cdot (-4) = -4$`}. {`$0 \\cdot (-4) = 0$`}. The results are going up by {`$4$`} each
        time the first factor goes down by {`$1$`}. So {`$(-1)(-4) = 4$`}, and {`$(-2)(-4) = 8$`},
        and {`$(-3)(-4) = 12$`}. QED."
      </p>
      <p>
        Is this a proof? Answer in four to six sentences. Identify the assumption the student makes
        when they extrapolate the pattern. State what would have to be proved separately to turn
        this argument into a valid proof. Explain why the axiomatic proof from Question 11 avoids
        this issue.
      </p>
      <Answer>
        <p>
          This is not a proof. The student observes a numerical pattern in four examples and asserts
          it must continue indefinitely.
        </p>
        <p>
          The assumption is that the operation extends to negative inputs in a way that preserves
          the linear pattern. That is the same as assuming the distributive law continues to hold
          for negative numbers, which is exactly what needs to be proved.
        </p>
        <p>
          The axiomatic proof from Question 11 avoids this issue because it uses only the
          distributive law, the additive inverse property, and the multiplicative identity directly,
          without assuming any unproven regularity.
        </p>
      </Answer>

      <p>
        <strong>15.</strong> A student writes: "The rule is simple. If{' '}
        {`$\\frac{a}{b} < \\frac{c}{d}$`}, then {`$ad < bc$`}. You just cross-multiply." Find a
        specific counterexample using small integers. Then state the correct cross-multiplication
        theorem for inequalities, with all sign hypotheses made explicit. Prove the corrected
        version.
      </p>
      <Answer>
        <p>
          <strong>Counterexample.</strong> Take {`$a = 1, b = -1, c = 1, d = 1$`}. Then{' '}
          {`$\\frac{a}{b} = -1$`} and {`$\\frac{c}{d} = 1$`}, so {`$\\frac{a}{b} < \\frac{c}{d}$`}.
          But {`$ad = 1 \\cdot 1 = 1$`} and {`$bc = (-1) \\cdot 1 = -1$`}, so {`$ad > bc$`}, not{' '}
          {`$ad < bc$`}. The naive rule fails.
        </p>
        <p>
          <strong>Correct theorem.</strong> For rationals {`$\\frac{a}{b}$`} and {`$\\frac{c}{d}$`}{' '}
          written with positive denominators {`$b, d > 0$`}, we have{' '}
          {`$\\frac{a}{b} < \\frac{c}{d}$`} if and only if {`$ad < bc$`}.
        </p>
        <p>
          <strong>Proof.</strong> Multiply both sides of {`$\\frac{a}{b} < \\frac{c}{d}$`} by the
          positive number {`$bd$`}. Multiplying by a positive preserves the inequality, giving{' '}
          {`$\\frac{a}{b} \\cdot bd < \\frac{c}{d} \\cdot bd$`}, that is {`$ad < bc$`}. The converse
          is obtained by dividing by the positive {`$bd$`}.
        </p>
      </Answer>

      <p>
        <strong>16.</strong> A textbook claims: "To compute the absolute value of any expression,
        simply remove every minus sign you see." Show two specific cases where a student following
        this rule produces a wrong answer. Use {`$|x - 4|$`} evaluated at {`$x = 1$`} and at{' '}
        {`$x = -2$`}. State the correct definition of absolute value and show how it gives the right
        answer in each case.
      </p>
      <Answer>
        <p>
          The rule fails because the minus sign inside {`$|x - 4|$`} is a subtraction operation, not
          a sign attached to a numeral.
        </p>
        <p>
          <strong>At {`$x = 1$`}:</strong> by "drop the minus," the student writes{' '}
          {`$|1 - 4| = |1 + 4| = 5$`}. The correct value is {`$|1 - 4| = |-3| = 3$`}, the distance
          from {`$1$`} to {`$4$`}.
        </p>
        <p>
          <strong>At {`$x = -2$`}:</strong> by "drop the minus," the student might write{' '}
          {`$|-2 - 4| = |2 + 4| = 6$`} (dropping the minus from {`$-2$`}), or{' '}
          {`$|-2 - 4| = |-2 + 4| = 2$`} (dropping the minus that introduces the subtraction). The
          rule is ambiguous. The correct value is {`$|-2 - 4| = |-6| = 6$`}, the distance from{' '}
          {`$-2$`} to {`$4$`}.
        </p>
        <p>
          <strong>Correct definition.</strong> {`$|x|$`} is the distance from {`$x$`} to {`$0$`}.
          Equivalently, {`$|x| = x$`} if {`$x \\geq 0$`}, and {`$|x| = -x$`} if {`$x < 0$`}. Applied
          to {`$|x - 4|$`}, this gives the distance from {`$x$`} to {`$4$`}.
        </p>
      </Answer>

      {/* Part V */}
      <hr />
      <h2>Part V: Counterexample and Task Design</h2>

      <p>
        <strong>17.</strong> Find a rational number strictly between {`$\\frac{17}{29}$`} and{' '}
        {`$\\frac{18}{29}$`}. Show that your answer lies between them using the cross-multiplication
        theorem. Then explain in two or three sentences why a student who says "there is no rational
        number between these because the numerators differ by 1" is mistaking a property of the
        integers for a property of the rationals.
      </p>
      <Answer>
        <p>
          The number {`$\\frac{35}{58}$`} lies strictly between{' '}
          {`$\\frac{17}{29} = \\frac{34}{58}$`} and {`$\\frac{18}{29} = \\frac{36}{58}$`}.
        </p>
        <p>
          <strong>Verification.</strong> {`$\\frac{34}{58} < \\frac{35}{58}$`} because{' '}
          {`$34 \\cdot 58 < 35 \\cdot 58$`}, i.e. {`$1972 < 2030$`}. Similarly,{' '}
          {`$\\frac{35}{58} < \\frac{36}{58}$`}.
        </p>
        <p>
          <strong>Explanation.</strong> Among integers, there is no number between {`$n$`} and{' '}
          {`$n + 1$`}. Among rationals, there are infinitely many between any two distinct values.
          This property is called density. The student is over-generalising the discreteness of the
          integers to a setting where it does not hold.
        </p>
      </Answer>

      <p>
        <strong>18.</strong> The expression {`$\\frac{a + c}{b + d}$`} is called the mediant of{' '}
        {`$\\frac{a}{b}$`} and {`$\\frac{c}{d}$`}.
      </p>
      <p>
        (a) Construct rational numbers {`$a, b, c, d$`} with {`$b, d$`} non-zero such that{' '}
        {`$\\frac{a}{b} + \\frac{c}{d} \\neq \\frac{a + c}{b + d}$`}. Verify the inequality
        numerically.
      </p>
      <Answer>
        <p>
          Take {`$a = 1, b = 2, c = 1, d = 2$`}. Then{' '}
          {`$\\frac{a}{b} + \\frac{c}{d} = \\frac{1}{2} + \\frac{1}{2} = 1$`}. The mediant is{' '}
          {`$\\frac{a + c}{b + d} = \\frac{2}{4} = \\frac{1}{2}$`}. These differ.
        </p>
      </Answer>

      <p>
        (b) Find specific positive integers {`$a, b, c, d$`} for which the mediant lies strictly
        between {`$\\frac{a}{b}$`} and {`$\\frac{c}{d}$`}. State a sufficient condition under which
        this happens.
      </p>
      <Answer>
        <p>
          Take {`$a = 1, b = 3, c = 1, d = 2$`}. Then {`$\\frac{1}{3} < \\frac{1}{2}$`} and the
          mediant is {`$\\frac{2}{5}$`}. Verify: {`$\\frac{1}{3} = \\frac{5}{15}$`},{' '}
          {`$\\frac{2}{5} = \\frac{6}{15}$`}, {`$\\frac{1}{2} = \\frac{7.5}{15}$`}. So{' '}
          {`$\\frac{1}{3} < \\frac{2}{5} < \\frac{1}{2}$`}.
        </p>
        <p>
          <strong>Sufficient condition.</strong> When all four of {`$a, b, c, d$`} are positive and{' '}
          {`$\\frac{a}{b} < \\frac{c}{d}$`}, the mediant {`$\\frac{a + c}{b + d}$`} lies strictly
          between {`$\\frac{a}{b}$`} and {`$\\frac{c}{d}$`}.
        </p>
      </Answer>

      <p>
        <strong>19.</strong> Design one exam question suitable for a 13-year-old student that would
        reliably distinguish a student who has memorised the procedure "to subtract, keep the first
        number, change the operation to addition, flip the sign of the second number" from a student
        who actually understands that subtraction is defined as adding the additive inverse. Provide
        the question, a sample correct answer that shows understanding, and a sample wrong answer
        that a pure memoriser would produce. Explain in one or two sentences why a memoriser would
        fail.
      </p>
      <Answer>
        <p>
          <strong>Question.</strong> Define an operation {`$\\diamond$`} on rational numbers by{' '}
          {`$a \\diamond b = a + b^*$`}. Show that this operation matches subtraction of rationals
          for all {`$a, b$`}. Then compute {`$5 \\diamond (-3)$`}.
        </p>
        <p>
          <strong>Correct answer.</strong> By the definition of subtraction, {`$a - b = a + b^*$`}.
          So {`$\\diamond$`} is exactly subtraction. Therefore{' '}
          {`$5 \\diamond (-3) = 5 - (-3) = 5 + 3 = 8$`}.
        </p>
        <p>
          <strong>Memoriser's wrong answer.</strong> Sees the unfamiliar symbol {`$\\diamond$`},
          does not recognise it as subtraction, and either freezes or applies "keep, change, flip"
          to a problem that does not match the template. Or computes{' '}
          {`$5 \\diamond (-3) = 5 + (-3)^* = 5 + (-(-3))$`} and gets stuck on the double negation.
        </p>
        <p>
          <strong>Why this works.</strong> The question forces the student to use the definition of
          subtraction explicitly rather than apply a memorised procedure to a familiar-looking
          expression.
        </p>
      </Answer>

      {/* Part VI */}
      <hr />
      <h2>Part VI: Capstone Synthesis</h2>

      <p>
        <strong>20.</strong> Consider the statement
      </p>
      <p>
        {`$$\\frac{-a}{b} = \\frac{a}{-b} = -\\frac{a}{b}, \\quad \\text{for all rational } a, b \\text{ with } b \\neq 0.$$`}
      </p>

      <p>
        (a) Prove all three expressions denote the same rational number. Use the axioms, the basic
        facts, and the theorem {`$(-1)x = -x$`}. State which axiom or fact justifies each step.
      </p>
      <Answer>
        <p>We show all three equal {`$-\\frac{a}{b}$`}.</p>
        <p>
          <strong>First, {`$\\frac{-a}{b}$`}.</strong> By the theorem {`$(-1)x = -x$`}, we have{' '}
          {`$-a = (-1)a$`}. So {`$\\frac{-a}{b} = \\frac{(-1)a}{b} = (-1) \\cdot \\frac{a}{b}$`} by
          the rule for multiplying a rational by a fraction. By the theorem again, this equals{' '}
          {`$-\\frac{a}{b}$`}.
        </p>
        <p>
          <strong>Second, {`$\\frac{a}{-b}$`}.</strong> Compute{' '}
          {`$(-b)\\left(-\\frac{1}{b}\\right) = (-1)b \\cdot (-1)\\frac{1}{b} = (-1)(-1) \\cdot b \\cdot \\frac{1}{b} = 1 \\cdot 1 = 1$`}
          . So {`$(-b)^{-1} = -\\frac{1}{b}$`}. Therefore{' '}
          {`$\\frac{a}{-b} = a \\cdot \\left(-\\frac{1}{b}\\right) = -\\frac{a}{b}$`}.
        </p>
        <p>Hence all three expressions equal {`$-\\frac{a}{b}$`}.</p>
      </Answer>

      <p>
        (b) Use (a) to justify the convention that fractions should always be written with positive
        denominators. Explain in three to five sentences why this is not merely a cosmetic
        preference but a substantive simplification of the theory of inequalities. Refer
        specifically to the cross-multiplication rule and its hypothesis.
      </p>
      <Answer>
        <p>
          By (a), any fraction can be rewritten with a positive denominator by absorbing the sign
          into the numerator.
        </p>
        <p>
          The cross-multiplication theorem for inequalities requires positive denominators as a
          hypothesis. If fractions are always written with positive denominators, this hypothesis is
          automatically satisfied. The algorithm {`$\\frac{a}{b} < \\frac{c}{d} \\iff ad < bc$`} can
          then be applied without case analysis on signs of denominators.
        </p>
        <p>
          Without this convention, you must check the sign of each denominator before applying the
          rule, and the algorithm becomes more error-prone. The convention is therefore a
          substantive simplification of the inequality theory.
        </p>
      </Answer>

      <p>
        (c) Prove the inequality {`$|xy| \\leq \\frac{1}{2}(x^2 + y^2)$`} for all rational{' '}
        {`$x, y$`}. State and prove the condition on {`$x$`} and {`$y$`} for equality. Hint: start
        from a square that is always non-negative.
      </p>
      <Answer>
        <p>
          For any rational {`$x, y$`}, we have {`$(|x| - |y|)^2 \\geq 0$`}, since any square is
          non-negative.
        </p>
        <p>
          Expanding: {`$|x|^2 - 2|x||y| + |y|^2 \\geq 0$`}. Note {`$|x|^2 = x^2$`} and{' '}
          {`$|y|^2 = y^2$`}. So {`$x^2 - 2|x||y| + y^2 \\geq 0$`}, that is{' '}
          {`$2|x||y| \\leq x^2 + y^2$`}.
        </p>
        <p>
          Dividing by {`$2$`}: {`$|x||y| \\leq \\frac{1}{2}(x^2 + y^2)$`}.
        </p>
        <p>
          Since {`$|x||y| = |xy|$`} by the product property of absolute value, we conclude{' '}
          {`$|xy| \\leq \\frac{1}{2}(x^2 + y^2)$`}.
        </p>
        <p>
          <strong>Equality.</strong> Equality holds if and only if {`$(|x| - |y|)^2 = 0$`}, i.e.{' '}
          {`$|x| = |y|$`}.
        </p>
      </Answer>

      <p>
        (d) A 13-year-old asks: "Why is {`$\\frac{-1}{-1} = 1$`} and not {`$-1$`}? Two minus signs
        should make a minus, but in division they cancel. Why does division behave differently from
        subtraction?" Answer in six to ten sentences. Use the definition of division and the result
        of (a). Do not use the phrase "two negatives make a positive."
      </p>
      <Answer>
        <p>
          Division of {`$a$`} by {`$b$`} means finding the unique number {`$z$`} such that{' '}
          {`$a = z \\cdot b$`}. For {`$\\frac{-1}{-1}$`} we ask: what {`$z$`} satisfies{' '}
          {`$-1 = z \\cdot (-1)$`}?
        </p>
        <p>
          The only such {`$z$`} is {`$z = 1$`}, because {`$1 \\cdot (-1) = -1$`}. So{' '}
          {`$\\frac{-1}{-1} = 1$`} by definition.
        </p>
        <p>
          Subtraction works differently because it is a different operation. The expression{' '}
          {`$-1 - (-1)$`} asks us to add the reflection of {`$-1$`} to {`$-1$`}. The reflection of{' '}
          {`$-1$`} is {`$1$`}, so we get {`$-1 + 1 = 0$`}.
        </p>
        <p>
          The two operations give different results because they are different operations. There is
          no general principle that minus signs cancel across operations. What looks like
          cancellation in {`$\\frac{-1}{-1} = 1$`} is actually a consequence of the definition of
          division.
        </p>
      </Answer>

      <p>
        (e) Write a short essay of 250 to 400 words analysing the difference between two arguments
        that {`$(-1)(-1) = 1$`}. Argument 1: the pattern argument from Question 14, extended one
        step further. Argument 2: the distributive-law proof from Question 11. Address: what does
        each argument actually establish; what does each argument tacitly assume; what is each
        argument good for in a classroom setting; why is one a proof and the other is not, even
        though both lead to the correct answer.
      </p>
      <Answer>
        <p>
          Both arguments reach the conclusion {`$(-1)(-1) = 1$`}, but they establish different
          things and are valuable in different ways.
        </p>
        <p>
          <strong>The pattern argument</strong> observes a sequence of products:{' '}
          {`$3 \\cdot (-1) = -3$`}, {`$2 \\cdot (-1) = -2$`}, {`$1 \\cdot (-1) = -1$`},{' '}
          {`$0 \\cdot (-1) = 0$`}. The first factor decreases by {`$1$`} each step, and the result
          increases by {`$1$`}. Extending this pattern gives {`$(-1)(-1) = 1$`}. The argument
          establishes that <em>if</em> the linear pattern continues, <em>then</em> the conclusion
          follows. What it does not establish is whether the pattern must continue. To assume the
          pattern continues is essentially to assume the distributive law extends to negatives,
          which is precisely what needs justifying. So the pattern argument tacitly assumes the very
          thing in question.
        </p>
        <p>
          <strong>The distributive-law proof</strong> begins from named axioms. From the
          distributive law:{' '}
          {`$(-1)(-1) + 1 \\cdot (-1) = ((-1) + 1) \\cdot (-1) = 0 \\cdot (-1) = 0$`}. So{' '}
          {`$(-1)(-1) + (-1) = 0$`}, hence {`$(-1)(-1) = 1$`} by uniqueness of the additive inverse.
          Every step is justified by an explicit axiom or earlier result. The proof establishes the
          conclusion outright, without assuming any pattern.
        </p>
        <p>
          <strong>Classroom roles.</strong> The pattern argument is excellent for building intuition
          and convincing a learner that the answer is reasonable. It provides motivation. The
          distributive-law proof tells us <em>why</em> the answer must be what it is, in a sense
          robust enough to survive new contexts (such as extending to other number systems). A
          teacher who can use the pattern to motivate and the proof to justify gives the student
          both intuition and structure. A teacher who cannot tell the difference leaves the student
          with rules to memorise.
        </p>
      </Answer>
    </div>
  )
}

export default function CapstoneRationalNumbers() {
  const config = {
    documentTitle: 'Project: Rational Numbers - AETHER',
    briefing: {
      title: 'Rational Numbers',
      concepts: ['Rational Numbers']
    },
    projectContent: <ProjectContent />,
    examContent: <ExamContent />
  }

  return <ProjectTemplate config={config} />
}
