import ProjectTemplate, { Answer } from '../../../../../components/project/project-template'

function ProjectContent() {
  return (
    <div className="project-prose">
      {/* Project 1 */}
      <h2>Project 1: The Proved Rule Portfolio</h2>

      <h3>Scenario</h3>
      <p>
        You are joining a small school whose head of mathematics insists no rule is taught without a
        proof from a stated definition. Before you start, you must show that you can derive every
        fraction rule yourself, from the number line up. Your portfolio will be reviewed by the head
        of math. They will reject anything that mirrors a procedure without justifying it.
      </p>

      <h3>What to Produce</h3>

      <h4>Deliverable 1A: Six Proofs</h4>
      <p>
        Write six short proofs in the order below. Each proof is one to two pages. Use only results
        already proved in earlier modules or in earlier proofs in this portfolio.
      </p>
      <ol className="lrn-list">
        <li>
          <strong>The equivalent fractions theorem.</strong> Prove that{' '}
          {`$\\frac{k}{\\ell} = \\frac{nk}{n\\ell}$`} for any positive whole {`$n$`}.
        </li>
        <li>
          <strong>Cross multiplication and the FFFP.</strong> Prove that{' '}
          {`$\\frac{k}{\\ell} < \\frac{m}{n}$`} if and only if {`$kn < \\ell m$`}, for positive
          denominators.
        </li>
        <li>
          <strong>The addition formula.</strong> Prove that{' '}
          {`$\\frac{k}{\\ell} + \\frac{m}{n} = \\frac{kn + \\ell m}{\\ell n}$`}.
        </li>
        <li>
          <strong>The subtraction formula.</strong> Prove that{' '}
          {`$\\frac{k}{\\ell} - \\frac{m}{n} = \\frac{kn - \\ell m}{\\ell n}$`} when{' '}
          {`$\\frac{k}{\\ell} \\geq \\frac{m}{n}$`}.
        </li>
        <li>
          <strong>Multiplication as area, with "of" derived as a theorem.</strong> Prove the product
          formula from the area model. Then prove the three-case theorem that "{`$\\frac{m}{n}$`} of{' '}
          {`$\\frac{k}{\\ell}$`}" gives the same product.
        </li>
        <li>
          <strong>Division via {`$A = CB$`}.</strong> State the uniqueness lemma. Use it to prove
          that division by {`$\\frac{k}{\\ell}$`} equals multiplication by {`$\\frac{\\ell}{k}$`}.
          Explain why this is a theorem rather than a rule.
        </li>
      </ol>

      <h4>Deliverable 1B: Four Required Elements Per Proof</h4>
      <p>Every proof must contain all four elements below.</p>
      <ol className="lrn-list">
        <li>
          <strong>Stated foundation.</strong> The exact definition or theorems used, listed at the
          top of the proof.
        </li>
        <li>
          <strong>Justified chain.</strong> The proof itself, with every algebraic step justified by
          a named rule or by a previous line.
        </li>
        <li>
          <strong>Matching diagram.</strong> A labeled number line or area diagram. The labels must
          match the proof's variables.
        </li>
        <li>
          <strong>Worked example.</strong> One worked numerical example that evaluates the formula
          correctly, with a diagram matching the numbers.
        </li>
      </ol>

      {/* Project 2 */}
      <hr />
      <h2>Project 2: The Textbook Error Dossier</h2>

      <h3>Scenario</h3>
      <p>
        A school district hires you to advise on a textbook adoption. They have shortlisted three
        chapters on fractions. Your job is to produce a dossier that identifies every place each
        chapter violates one of the five principles. You classify the violations and rewrite the
        worst offenders.
      </p>
      <p>
        If the mentor cannot provide chapter excerpts, use one chapter from any current school
        textbook covering fractions for grades 4 to 7. Add two passages of the mentor's choosing
        that together contain at least one of the three false doctrines of division.
      </p>

      <h3>What to Produce</h3>

      <h4>Deliverable 2A: Inventory</h4>
      <p>
        For each excerpt, write a numbered list of every place where one of the five principles is
        violated. Each entry contains the quoted passage (or close paraphrase if long), the
        principle violated, a one or two sentence explanation of why this is a violation, and the
        type of error from the six categories below.
      </p>

      <h4>Deliverable 2B: Categorisation</h4>
      <p>Tally the violations by category. The six categories are:</p>
      <ol className="lrn-list">
        <li>Missing or inadequate definition (violates Principle 1).</li>
        <li>Imprecise statement (violates Principle 2).</li>
        <li>Assertion with no proof (violates Principle 3).</li>
        <li>Lack of coherence with earlier material (violates Principle 4).</li>
        <li>Procedure with no stated purpose (violates Principle 5).</li>
        <li>
          Circular reasoning. Often appears as one of the three false doctrines for division. Or as
          the equivalent fractions theorem applied with fraction multipliers before that step has
          been justified.
        </li>
      </ol>

      <h4>Deliverable 2C: Three Rewrites</h4>
      <p>
        Pick three of the worst violations. Rewrite each passage to meet the five principles. Each
        rewrite is between half a page and one full page. Every rewrite states a definition before
        any rule, backs every assertion with reasoning, and uses only number-line or area-model
        justifications.
      </p>

      <h4>Deliverable 2D: One Critical Essay</h4>
      <p>
        Two to three pages on the single biggest problem with the textbook. The essay must connect
        this problem to at least one of the four major problems in traditional fraction instruction
        named in Module 4: unclear definitions, too many meanings, rules without reasons, no proofs.
      </p>

      {/* Project 3 */}
      <hr />
      <h2>Project 3: A Coherent Teaching Unit</h2>

      <h3>Scenario</h3>
      <p>
        A school director asks you to design a complete teaching unit on one fraction operation for
        advanced sixth graders or trainee teachers. The unit must be coherent: every concept defined
        before it is used, every rule proved, and the unit must point forward to where the operation
        reappears in later mathematics. The director will read your unit and ask you to teach one
        lesson during a recorded session.
      </p>
      <p>
        Pick exactly one operation: multiplication of fractions, division of fractions, or addition
        and subtraction of fractions.
      </p>

      <h3>What to Produce</h3>

      <h4>Deliverable 3A: Unit Overview</h4>
      <p>
        One page stating the operation, the target audience, prior knowledge assumed, and the unit's
        place in the wider curriculum. List the prior results from the modules that the unit will
        use.
      </p>

      <h4>Deliverable 3B: Lesson Sequence</h4>
      <p>Between four and seven lessons in order. For each lesson, include:</p>
      <ol className="lrn-list">
        <li>A title.</li>
        <li>A learning objective stated as an action the student can perform.</li>
        <li>A list of definitions or theorems introduced.</li>
        <li>A list of definitions or theorems used from prior lessons or modules.</li>
        <li>At least three worked examples with number-line or area diagrams.</li>
        <li>At least four practice problems for students.</li>
      </ol>

      <h4>Deliverable 3C: Anticipated Misconceptions</h4>
      <p>At least five misconceptions students may bring to this operation. For each one, give:</p>
      <ol className="lrn-list">
        <li>The misconception in the student's likely words.</li>
        <li>The underlying error in terms of the number-line definition.</li>
        <li>A teaching move that addresses it.</li>
        <li>A sample two to four turn dialogue showing the move in action.</li>
      </ol>

      <h4>Deliverable 3D: Unit Assessment</h4>
      <p>
        At least eight questions to give students at the end of the unit. The set must include at
        least one of each of the four prompt types:
      </p>
      <ol className="lrn-list">
        <li>A definitional prompt.</li>
        <li>A proof prompt.</li>
        <li>
          An error analysis prompt where the student is shown wrong work and must explain the error.
        </li>
        <li>A transfer prompt in a scenario not in the lessons that still requires the rule.</li>
      </ol>

      <h4>Deliverable 3E: Alignment Matrix</h4>
      <p>
        A small table mapping each lesson to the five principles (which principles does the lesson
        emphasize) and to Common Core Mathematical Practice 3 (construct viable arguments and
        critique the reasoning of others) and Practice 6 (attend to precision).
      </p>

      <h4>Deliverable 3F: Recorded Lesson</h4>
      <p>
        A 20 to 30 minute video of you teaching one lesson from the unit, with the diagrams and
        worked examples used live. The lesson must define the operation before stating any rule. You
        must respond to at least one unscripted student question.
      </p>

      {/* Project 4 */}
      <hr />
      <h2>Project 4: Applications and Modeling Brief</h2>

      <h3>Scenario</h3>
      <p>
        A textbook publisher wants a single chapter showing how the six fraction rules apply across
        every common middle school topic. They want the writing tight and the reasoning visible.
        They specifically want one of the classical paradoxes resolved in plain language as the
        closing section. Their consultants say this is what separates a writer who only knows the
        math from one who can also teach it.
      </p>
      <p>
        Every numerical step in the brief must trace back to one of the six rules or to a named
        theorem from the modules. The brief must not introduce any new rule without a proof.
      </p>

      <h3>What to Produce</h3>
      <p>A single brief of 8 to 12 pages with eight sections in order.</p>

      <h4>Deliverable 4A: Complex Fractions</h4>
      <p>
        State the six rules (a) through (f). Show they are the same rules used for ordinary
        fractions. Give one worked example that mixes fractions and decimals in numerator and
        denominator.
      </p>

      <h4>Deliverable 4B: Percent</h4>
      <p>
        Solve one problem of each of the three percent types. Show that all three reduce to the same
        equation: {`$\\frac{N}{100} \\times X = Y$`}. Then resolve the stock paradox (a stock rises{' '}
        {`$P\\%$`} then falls {`$P\\%$`}; how much does it lose?) and show why returning to the
        original price requires a different percentage from the rise.
      </p>

      <h4>Deliverable 4C: Ratio and Rate</h4>
      <p>
        State and prove the ratio theorem (if {`$\\frac{M}{N} = \\frac{a}{b}$`} then {`$M = au$`}{' '}
        and {`$N = bu$`} for some {`$u$`}). Apply it to a three-way split (the Benoit, Carl, Davida
        problem from Module 3 with ratio {`$2 : 5 : 4$`} and total {`$440$`}). Then handle one
        constant-rate problem (filling a tub, or riding a bicycle). Show that "setting up a
        proportion" is a consequence of constant rate rather than a definition of it.
      </p>

      <h4>Deliverable 4D: Cooperative Work</h4>
      <p>
        Solve the two-worker case (Regina and Eric) and the three-worker case (Joshua, Li and
        Manfred) from first principles. Show explicitly that the total work {`$A$`} cancels out.
        Explain why this means the answer is independent of job size.
      </p>

      <h4>Deliverable 4E: Finite vs Infinite Decimals</h4>
      <p>
        State the prime factor test. Apply it to four fractions of your choosing: two finite and two
        infinite. For one infinite case, compute the four-place approximation and state the error
        bound from the theorem.
      </p>

      <h4>Deliverable 4F: FASM in Action</h4>
      <p>
        Use FASM to add {`$\\frac{\\pi}{7} + \\frac{\\sqrt{2}}{35}$`}, and to multiply{' '}
        {`$\\frac{\\pi}{3} \\times \\frac{1}{5}$`}. State explicitly that {`$\\pi$`} and{' '}
        {`$\\sqrt{2}$`} are not fractions. Explain what FASM is doing.
      </p>

      <h4>Deliverable 4G: Average Speed and the Harmonic Mean</h4>
      <p>
        Solve the round-trip problem (out at first speed, back at second speed, equal distances).
        Show that the answer is the harmonic mean. Explain why it is always less than the arithmetic
        mean. Show that the distance cancels out.
      </p>

      <h4>Deliverable 4H: One Paradox, Fully Resolved</h4>
      <p>
        Pick either the cucumber paradox or the wine and tea exchange. Give the full solution. Then
        write a one page reflection on why the result is surprising and what conservation principle
        makes it work.
      </p>

      {/* Project 5: Oral Defense */}
      <hr />
      <h2>Project 5: The Oral Defense</h2>

      <h3>Scenario</h3>
      <p>
        The four projects test work done with time to think. The oral defense tests what you know
        when caught flat. It is the only place where the mentor sees what happens when a definition
        is needed live and there are no notes.
      </p>
      <p>
        Thirty minutes, no notes. The mentor (or two examiners if available) runs three blocks of
        ten minutes each.
      </p>

      <h3>What to Produce</h3>

      <h4>Deliverable 5A: Derive a Rule on Demand</h4>
      <p>
        The examiner picks one of the six results at random from a sealed envelope (the six proofs
        from Project 1). You derive it at the whiteboard from the number line definition. The
        examiner may interrupt to ask why a step is justified.
      </p>

      <h4>Deliverable 5B: Diagnose Student Work</h4>
      <p>
        The examiner produces a piece of student work, prepared in advance and not seen by you. The
        work contains at least one substantive error of one of these types: adding tops and bottoms;
        misapplying invert and multiply; using a false doctrine for division; treating a percent as
        something other than a fraction with denominator 100; mistaking the mediant for the sum.
      </p>
      <p>
        You identify the error, classify the misconception, and explain on the number line what the
        student is missing. Then propose a specific teaching move and predict what the student will
        get right after the move.
      </p>

      <h4>Deliverable 5C: Open Questions</h4>
      <p>
        The examiner asks four of the following, chosen live based on how the first two blocks went.
      </p>
      <ol className="lrn-list">
        <li>
          State the difference between cross multiplication used for comparison and the wrong
          attempt to use it for addition. Why does one work and the other fail?
        </li>
        <li>
          Why is the equivalent fractions theorem proved only for whole-number multipliers? What
          goes wrong if you allow fraction multipliers before multiplication has been defined?
        </li>
        <li>
          Pick any one of the three false doctrines for division and find the exact line where the
          argument is circular.
        </li>
        <li>
          State FASM and give one example of a calculation it justifies. What would happen in school
          mathematics if FASM were not assumed?
        </li>
        <li>
          State the prime factor test for finite decimals. Why does the test fail if the fraction is
          not reduced first?
        </li>
        <li>
          Why does the harmonic mean appear in average speed and not the arithmetic mean? At what
          point in the derivation does the difference appear?
        </li>
        <li>
          The cucumber paradox shows that a 1-percentage-point change in water content causes a 50%
          change in weight. What conservation argument explains this?
        </li>
        <li>
          Compare the number-line definition of a fraction to the parts-of-a-pizza model. Name three
          things the pizza model cannot handle.
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
        <strong>1.</strong> State the definition of the fraction {`$\\frac{m}{n}$`} used in this
        course. Your answer must mention the number line, the unit, the role of {`$n$`}, and the
        role of {`$m$`}.
      </p>
      <Answer>
        <p>
          A fraction {`$\\frac{m}{n}$`} is a specific point on the number line. Take the segment
          from {`$0$`} to {`$1$`} (the unit) and divide it into {`$n$`} equal parts. Each part has
          length {`$\\frac{1}{n}$`}.
        </p>
        <p>
          Starting from {`$0$`}, count off {`$m$`} of those parts in the positive direction. The
          point you land on is {`$\\frac{m}{n}$`}. The denominator {`$n$`} tells you how finely to
          divide each unit. The numerator {`$m$`} tells you how many of those small parts to count.
        </p>
      </Answer>

      <p>
        <strong>2.</strong> On a number line drawn from {`$0$`} to {`$6$`}, locate the point{' '}
        {`$\\frac{23}{4}$`} exactly. Show how you arrived at the location. Then write{' '}
        {`$\\frac{23}{4}$`} as a mixed number and explain why the mixed-number form names the same
        point.
      </p>
      <Answer>
        <p>
          Divide each unit on the number line into {`$4$`} equal parts. Starting from {`$0$`}, count
          off {`$23$`} of these parts. You pass {`$1$`} at the 4th part, {`$2$`} at the 8th, {`$3$`}{' '}
          at the 12th, {`$4$`} at the 16th, {`$5$`} at the 20th. You land {`$3$`} parts past {`$5$`}
          , between {`$5$`} and {`$6$`}.
        </p>
        <p>
          As a mixed number: {`$23 = 5 \\times 4 + 3$`}, so {`$\\frac{23}{4} = 5\\frac{3}{4}$`}.
          Both forms name the same point. Counting {`$23$`} quarter-units from {`$0$`} lands at the
          same place as walking {`$5$`} whole units and then {`$3$`} more quarter-units.
        </p>
      </Answer>

      <p>
        <strong>3.</strong> Show that {`$\\frac{18}{24}$`} and {`$\\frac{3}{4}$`} name the same
        point on the number line. Use the equivalent fractions theorem and state the multiplier you
        used. Then explain why dividing both top and bottom by the same nonzero whole number cannot
        move the point.
      </p>
      <Answer>
        <p>
          The multiplier is {`$6$`}:{' '}
          {`$\\frac{3}{4} = \\frac{3 \\times 6}{4 \\times 6} = \\frac{18}{24}$`}, by the equivalent
          fractions theorem (multiplying numerator and denominator by the same nonzero whole number
          gives an equivalent fraction).
        </p>
        <p>
          Geometrically, subdivide each of the {`$4$`} original parts into {`$6$`} sub-parts. The
          original {`$3$`} parts now contain {`$18$`} sub-parts. So {`$\\frac{3}{4}$`} and{' '}
          {`$\\frac{18}{24}$`} mark the same point. Dividing back undoes the subdivision. The point
          cannot move because subdivision and recombination only relabel it.
        </p>
      </Answer>

      <p>
        <strong>4.</strong> A student writes: "{`$0.117$`} is larger than {`$0.12$`}, because{' '}
        {`$117$`} is larger than {`$12$`}." Identify the misconception. Explain why the reasoning
        fails, using the idea that decimals are fractions with denominators that are powers of{' '}
        {`$10$`}. Then give the correct comparison and show the work.
      </p>
      <Answer>
        <p>
          The student compares the digit strings as if they were independent whole numbers. They
          ignore that the digits sit over different powers of {`$10$`}.
        </p>
        <p>
          The decimal {`$0.12$`} means {`$\\frac{12}{100} = \\frac{120}{1000}$`}. The decimal{' '}
          {`$0.117$`} means {`$\\frac{117}{1000}$`}. With the common denominator {`$1000$`}, compare{' '}
          {`$120$`} vs {`$117$`}. So {`$0.12 > 0.117$`}.
        </p>
        <p>
          The misconception is the "natural number bias". The student treats the digit string after
          the decimal point as a whole number, ignoring place value.
        </p>
      </Answer>

      <p>
        <strong>5.</strong> Prove the theorem. Let {`$\\frac{a}{b}$`} and {`$\\frac{c}{d}$`} be
        fractions with positive denominators. Then {`$\\frac{a}{b} < \\frac{c}{d}$`} if and only if{' '}
        {`$ad < bc$`}. Your proof must start from the number-line definition and the equivalent
        fractions theorem. State both before you use them. Conclude with one sentence about why this
        means we never need a common denominator to compare two fractions, only to add them.
      </p>
      <Answer>
        <p>
          Let {`$\\frac{a}{b}$`} and {`$\\frac{c}{d}$`} be fractions with positive denominators{' '}
          {`$b$`} and {`$d$`}.
        </p>
        <p>
          <strong>Step 1 (common denominator).</strong> By the equivalent fractions theorem,{' '}
          {`$\\frac{a}{b} = \\frac{ad}{bd}$`} and {`$\\frac{c}{d} = \\frac{bc}{bd}$`}. Both
          fractions now share the same positive denominator {`$bd$`}.
        </p>
        <p>
          <strong>Step 2 (compare).</strong> Two fractions with the same positive denominator are
          ordered by their numerators. So {`$\\frac{ad}{bd} < \\frac{bc}{bd}$`} if and only if{' '}
          {`$ad < bc$`}. Dividing each unit into {`$bd$`} equal parts gives parts of the same fixed
          positive length. The one with more parts counted from {`$0$`} sits farther to the right.
        </p>
        <p>
          <strong>Step 3 (conclude).</strong> Therefore {`$\\frac{a}{b} < \\frac{c}{d}$`} if and
          only if {`$ad < bc$`}.
        </p>
        <p>
          Cross-multiplication compares any two fractions without finding a common denominator. It
          does not work for adding them. Addition requires the segments to be measured in the same
          unit before they can be joined.
        </p>
      </Answer>

      {/* Part II */}
      <hr />
      <h2>Part II: Conceptual Understanding</h2>

      <p>
        <strong>6.</strong> Compute {`$\\frac{5}{6} + \\frac{3}{4}$`} and{' '}
        {`$\\frac{7}{9} - \\frac{5}{12}$`}. For each, show the common denominator, the equivalent
        fractions, and the final answer in lowest terms. Explain why "lowest terms" does not change
        the point on the number line.
      </p>
      <Answer>
        <p>
          {`$\\frac{5}{6} + \\frac{3}{4}$`}: common denominator {`$12$`}.{' '}
          {`$\\frac{5}{6} = \\frac{10}{12}$`} and {`$\\frac{3}{4} = \\frac{9}{12}$`}. Sum:{' '}
          {`$\\frac{10}{12} + \\frac{9}{12} = \\frac{19}{12}$`}.
        </p>
        <p>
          {`$\\frac{7}{9} - \\frac{5}{12}$`}: common denominator {`$36$`}.{' '}
          {`$\\frac{7}{9} = \\frac{28}{36}$`} and {`$\\frac{5}{12} = \\frac{15}{36}$`}. Difference:{' '}
          {`$\\frac{28}{36} - \\frac{15}{36} = \\frac{13}{36}$`}.
        </p>
        <p>
          Reducing to lowest terms divides numerator and denominator by a common factor. That is the
          reverse of the equivalent fractions theorem. So the point on the number line stays fixed.
        </p>
      </Answer>

      <p>
        <strong>7.</strong> The mediant trap. A student writes:{' '}
        {`$\\frac{2}{5} + \\frac{3}{7} = \\frac{5}{12}$`}, because {`$2 + 3 = 5$`} and{' '}
        {`$5 + 7 = 12$`}.
      </p>
      <p>(a) Compute the correct value of {`$\\frac{2}{5} + \\frac{3}{7}$`}.</p>
      <Answer>
        <p>
          {`$\\frac{2}{5} + \\frac{3}{7} = \\frac{2 \\times 7 + 5 \\times 3}{5 \\times 7} = \\frac{14 + 15}{35} = \\frac{29}{35}$`}
          .
        </p>
      </Answer>

      <p>
        (b) The student's result, {`$\\frac{5}{12}$`}, is not nonsense. It has a name. State what it
        is called and where it sits in relation to {`$\\frac{2}{5}$`} and {`$\\frac{3}{7}$`} on the
        number line. Verify with cross-multiplication.
      </p>
      <Answer>
        <p>
          The student's number, {`$\\frac{5}{12}$`}, is called the mediant of {`$\\frac{2}{5}$`} and{' '}
          {`$\\frac{3}{7}$`}.
        </p>
        <p>
          It lies between the two fractions on the number line. Verify: {`$\\frac{2}{5}$`} vs{' '}
          {`$\\frac{5}{12}$`}: cross-multiply, {`$2 \\times 12 = 24$`} and {`$5 \\times 5 = 25$`},
          so {`$\\frac{2}{5} < \\frac{5}{12}$`}. And {`$\\frac{5}{12}$`} vs {`$\\frac{3}{7}$`}:{' '}
          {`$5 \\times 7 = 35$`} and {`$12 \\times 3 = 36$`}, so {`$\\frac{5}{12} < \\frac{3}{7}$`}.
          Therefore {`$\\frac{2}{5} < \\frac{5}{12} < \\frac{3}{7}$`}.
        </p>
      </Answer>

      <p>
        (c) Explain why adding numerators and adding denominators produces this "between" number
        rather than the sum. Refer to the number-line meaning of addition (joining segments end to
        end).
      </p>
      <Answer>
        <p>
          Adding fractions means joining two segments end to end on the number line, starting from{' '}
          {`$0$`}. To join them, both must use the same unit. That is why we need a common
          denominator.
        </p>
        <p>
          The mediant does something else. It combines the counts (numerators) and the unit sizes
          (denominators) separately. The result is a weighted average that lands between the two
          fractions, not at their sum.
        </p>
        <p>The mediant is a real and useful number. It is not the answer to an addition problem.</p>
      </Answer>

      <p>
        <strong>8.</strong> Use the area model to justify that{' '}
        {`$\\frac{2}{3} \\times \\frac{4}{5} = \\frac{8}{15}$`}. Draw a unit square divided
        appropriately, shade the rectangle whose sides are {`$\\frac{2}{3}$`} and {`$\\frac{4}{5}$`}
        , and count the small rectangles. State the general rule you are illustrating.
      </p>
      <Answer>
        <p>
          Draw a unit square (side {`$1$`}, area {`$1$`}). Divide it into {`$3$`} equal horizontal
          strips (each height {`$\\frac{1}{3}$`}) and {`$5$`} equal vertical strips (each width{' '}
          {`$\\frac{1}{5}$`}). The grid has {`$15$`} small rectangles, each with area{' '}
          {`$\\frac{1}{15}$`}.
        </p>
        <p>
          Shade the rectangle of height {`$\\frac{2}{3}$`} and width {`$\\frac{4}{5}$`}. It covers{' '}
          {`$2$`} rows and {`$4$`} columns, so it contains {`$2 \\times 4 = 8$`} small rectangles.
          Total shaded area is {`$\\frac{8}{15}$`}.
        </p>
        <p>The general rule: {`$\\frac{m}{n} \\times \\frac{k}{\\ell} = \\frac{mk}{n\\ell}$`}.</p>
      </Answer>

      <p>
        <strong>9.</strong> Starting from the definition of division ({`$A \\div B = C$`} means{' '}
        {`$A = C \\times B$`}), derive the invert-and-multiply rule:{' '}
        {`$\\frac{m}{n} \\div \\frac{k}{\\ell} = \\frac{m}{n} \\times \\frac{\\ell}{k}$`}. You may
        use the uniqueness lemma and the fact that the reciprocal of {`$\\frac{k}{\\ell}$`} is{' '}
        {`$\\frac{\\ell}{k}$`}. Write each step as a separate statement.
      </p>
      <Answer>
        <p>
          We want {`$C$`} such that {`$\\frac{m}{n} \\div \\frac{k}{\\ell} = C$`}. By the definition
          of division, this means {`$\\frac{m}{n} = C \\times \\frac{k}{\\ell}$`}.
        </p>
        <p>
          <strong>Step 1.</strong> By the uniqueness lemma, exactly one fraction {`$C$`} satisfies{' '}
          {`$\\frac{m}{n} = C \\times \\frac{k}{\\ell}$`}.
        </p>
        <p>
          <strong>Step 2.</strong> The reciprocal of {`$\\frac{k}{\\ell}$`} is{' '}
          {`$\\frac{\\ell}{k}$`}. By definition, it is the unique fraction satisfying{' '}
          {`$\\frac{k}{\\ell} \\times \\frac{\\ell}{k} = 1$`}.
        </p>
        <p>
          <strong>Step 3.</strong> Multiply both sides of{' '}
          {`$\\frac{m}{n} = C \\times \\frac{k}{\\ell}$`} by {`$\\frac{\\ell}{k}$`} on the right:{' '}
          {`$\\frac{m}{n} \\times \\frac{\\ell}{k} = C \\times \\frac{k}{\\ell} \\times \\frac{\\ell}{k}$`}
          .
        </p>
        <p>
          <strong>Step 4.</strong> The right-hand side simplifies:{' '}
          {`$C \\times \\frac{k}{\\ell} \\times \\frac{\\ell}{k} = C \\times 1 = C$`}.
        </p>
        <p>
          <strong>Step 5.</strong> Therefore {`$C = \\frac{m}{n} \\times \\frac{\\ell}{k}$`}. This
          is the invert-and-multiply rule.
        </p>
      </Answer>

      <p>
        <strong>10.</strong> A student says: "Dividing fractions is just repeated subtraction. To
        compute {`$5 \\div \\frac{3}{4}$`}, you subtract {`$\\frac{3}{4}$`} from {`$5$`} until you
        can't anymore, and count the subtractions." Explain why this is not a valid definition of
        fraction division. Your answer must mention two specific failures: one about what the answer
        is supposed to be, the other about what happens when the divisor is larger than the
        dividend.
      </p>
      <Answer>
        <p>
          Repeated subtraction does not give a single number. It gives a count of subtractions plus
          a remainder, which is two numbers. Division must return one number.
        </p>
        <p>
          The second failure: repeated subtraction breaks when the divisor exceeds the dividend. To
          compute {`$\\frac{1}{5} \\div \\frac{3}{4}$`}, you cannot subtract {`$\\frac{3}{4}$`} from{' '}
          {`$\\frac{1}{5}$`} even once. But the answer {`$\\frac{4}{15}$`} is a real, well-defined
          fraction.
        </p>
        <p>
          The correct definition ({`$A \\div B$`} is the unique {`$C$`} such that {`$A = CB$`})
          handles both cases without trouble.
        </p>
      </Answer>

      <p>
        <strong>11.</strong> Finite vs. infinite decimals.
      </p>
      <p>
        (a) Which of these fractions, in lowest terms, have a finite decimal expansion? Justify each
        answer by examining the prime factorization of the denominator:{' '}
        {`$\\frac{7}{40}, \\frac{11}{12}, \\frac{9}{250}, \\frac{13}{35}$`}.
      </p>
      <Answer>
        <p>
          {`$\\frac{7}{40}$`}: {`$40 = 2^3 \\times 5$`}. Only primes {`$2$`} and {`$5$`}. Finite ({' '}
          {`$\\frac{7}{40} = 0.175$`}).
        </p>
        <p>
          {`$\\frac{11}{12}$`}: {`$12 = 2^2 \\times 3$`}. Contains the prime {`$3$`}. Infinite.
        </p>
        <p>
          {`$\\frac{9}{250}$`}: {`$250 = 2 \\times 5^3$`}. Only primes {`$2$`} and {`$5$`}. Finite (
          {`$\\frac{9}{250} = 0.036$`}).
        </p>
        <p>
          {`$\\frac{13}{35}$`}: {`$35 = 5 \\times 7$`}. Contains the prime {`$7$`}. Infinite.
        </p>
      </Answer>

      <p>
        (b) State the general theorem: a fraction {`$\\frac{m}{n}$`} in lowest terms has a finite
        decimal expansion if and only if ___. Then explain why the prime factors of the denominator
        are what matters.
      </p>
      <Answer>
        <p>
          A fraction {`$\\frac{m}{n}$`} in lowest terms has a finite decimal expansion if and only
          if the only prime factors of {`$n$`} are {`$2$`} and {`$5$`}.
        </p>
        <p>
          A finite decimal is, by definition, a fraction with a power-of-{`$10$`} denominator. Since{' '}
          {`$10 = 2 \\times 5$`}, the denominator can only contain factors that already appear in
          some {`$10^k$`}, namely {`$2$`} and {`$5$`}.
        </p>
      </Answer>

      <p>
        <strong>12.</strong> Compute {`$2.45 \\div 0.07$`} by first converting both decimals to
        fractions, then applying invert and multiply. Show every step. Explain why this method
        always reduces decimal division to whole-number arithmetic.
      </p>
      <Answer>
        <p>
          {`$2.45 \\div 0.07 = \\frac{245}{100} \\div \\frac{7}{100} = \\frac{245}{100} \\times \\frac{100}{7} = \\frac{245 \\times 100}{100 \\times 7} = \\frac{245}{7} = 35$`}
          .
        </p>
        <p>
          The {`$100$`}s cancel because both decimals have two places after the point, so the
          conversion produced the same denominator on top and bottom.
        </p>
        <p>
          In general, converting both decimals to fractions over powers of {`$10$`} and applying
          invert-and-multiply always produces a ratio of whole numbers. Powers of {`$10$`} are
          themselves whole numbers, and invert-and-multiply turns the denominator's power of{' '}
          {`$10$`} into a numerator factor.
        </p>
      </Answer>

      {/* Part III */}
      <hr />
      <h2>Part III: Application and Transfer</h2>

      <p>
        <strong>13.</strong> Percent as a number, not an operator.
      </p>
      <p>(a) Write {`$37.5\\%$`} as a fraction in lowest terms. Show the work.</p>
      <Answer>
        <p>
          {`$37.5\\% = \\frac{37.5}{100} = \\frac{375}{1000} = \\frac{3}{8}$`} (dividing top and
          bottom by {`$125$`}).
        </p>
      </Answer>

      <p>
        (b) A jacket costs {`$€84$`} after a {`$30\\%$`} discount. What was the original price?
        State which of the three percent problem types you are solving (what is {`$N\\%$`} of{' '}
        {`$X$`}, {`$X$`} is {`$N\\%$`} of what, what percent of {`$X$`} is {`$Y$`}).
      </p>
      <Answer>
        <p>
          After a {`$30\\%$`} discount, the price is {`$70\\%$`} of the original. So{' '}
          {`$84 = \\frac{70}{100} \\times P$`}, where {`$P$`} is the original price.
        </p>
        <p>
          Solve: {`$P = 84 \\times \\frac{100}{70} = \\frac{8400}{70} = 120$`}. The original price
          was {`$€120$`}.
        </p>
        <p>
          This is type 2 ({`$X$`} is {`$N\\%$`} of what).
        </p>
      </Answer>

      <p>
        (c) Explain why all three percent problem types reduce to the same equation. Use the phrase
        "percent is a fraction" in your explanation.
      </p>
      <Answer>
        <p>
          All three percent problem types reduce to {`$\\frac{N}{100} \\times X = Y$`}. Percent is a
          fraction (the fraction {`$\\frac{N}{100}$`}), and "of" means multiplication.
        </p>
        <p>
          Whichever of the three quantities {`$N$`}, {`$X$`}, {`$Y$`} is the unknown, you solve the
          same equation for that variable.
        </p>
      </Answer>

      <p>
        <strong>14.</strong> A share price rises by {`$20\\%$`} on Monday, then falls by {`$20\\%$`}{' '}
        on Tuesday. Compute the price on Tuesday evening as a fraction of Monday morning's price.
        Then explain why the price did not return to its starting value. Use the idea that the
        second {`$20\\%$`} is taken from a different base than the first.
      </p>
      <Answer>
        <p>
          Let {`$P$`} be Monday morning's price. After Monday: {`$P \\times 1.20 = 1.2P$`}. After
          Tuesday: {`$1.2P \\times 0.80 = 0.96P$`}. So Tuesday evening's price is{' '}
          {`$\\frac{96}{100} = \\frac{24}{25}$`} of Monday morning's, a net loss of {`$4\\%$`}.
        </p>
        <p>
          The price did not return because the second {`$20\\%$`} is taken from a different base
          than the first. Monday's {`$20\\%$`} rise is {`$20\\%$`} of {`$P$`}. Tuesday's {`$20\\%$`}{' '}
          fall is {`$20\\%$`} of {`$1.2P$`}, which is larger than {`$20\\%$`} of {`$P$`}. The fall
          removes more euros than the rise added.
        </p>
      </Answer>

      <p>
        <strong>15.</strong> You approximate {`$\\frac{5}{8}$`} by {`$0.6$`}. Compute the absolute
        error and the relative error. Explain why relative error is the more useful number for
        judging whether an approximation is good enough.
      </p>
      <Answer>
        <p>
          Exact value: {`$\\frac{5}{8} = 0.625$`}. Approximation: {`$0.6$`}. Absolute error:{' '}
          {`$|0.625 - 0.6| = 0.025$`}. Relative error:{' '}
          {`$\\frac{0.025}{0.625} = \\frac{1}{25} = 4\\%$`}.
        </p>
        <p>
          Relative error answers "how big is the error compared to what you are measuring." An
          absolute error of {`$0.025$`} is tiny on a kilometre but huge on a centimetre. Relative
          error normalizes for scale.
        </p>
      </Answer>

      <p>
        <strong>16.</strong> Three friends split {`$€462$`} in the ratio {`$3 : 5 : 6$`}. How much
        does each receive? Set up your solution using the ratio theorem ({`$M : N = a : b$`} means{' '}
        {`$M = au$`} and {`$N = bu$`} for some {`$u$`}). Show how you solved for {`$u$`} before
        computing the individual shares.
      </p>
      <Answer>
        <p>
          Let the shares be {`$3u$`}, {`$5u$`}, and {`$6u$`}. By the ratio theorem, the total is{' '}
          {`$3u + 5u + 6u = 14u$`}, and this equals {`$462$`}.
        </p>
        <p>
          So {`$14u = 462$`}, giving {`$u = 33$`}. The three shares are {`$3 \\times 33 = €99$`},{' '}
          {`$5 \\times 33 = €165$`}, and {`$6 \\times 33 = €198$`}.
        </p>
        <p>Check: {`$99 + 165 + 198 = 462$`}. ✓</p>
      </Answer>

      <p>
        <strong>17.</strong> A faucet fills {`$4.2$`} litres in {`$35$`} seconds at a constant rate.
      </p>
      <p>(a) How long does it take to fill a {`$12$`}-litre bucket? Show your reasoning.</p>
      <Answer>
        <p>
          The constant rate is {`$r = \\frac{4.2}{35} = 0.12$`} litres per second. For {`$12$`}{' '}
          litres: {`$t = \\frac{12}{0.12} = 100$`} seconds.
        </p>
        <p>
          Equivalently: {`$\\frac{12}{4.2} = \\frac{35}{t}$`}, giving{' '}
          {`$12 \\times 35 = 4.2 \\times t$`}, so {`$t = \\frac{420}{4.2} = 100$`} seconds.
        </p>
      </Answer>

      <p>
        (b) State what "constant rate" means in terms of the ratio of volume to time. Explain why
        this assumption is what allows you to use a single measurement to predict every other
        measurement.
      </p>
      <Answer>
        <p>
          "Constant rate" means the ratio of volume to time is the same for every measurement:{' '}
          {`$\\frac{V}{t} = r$`}, a fixed number.
        </p>
        <p>
          Once the ratio is fixed, it is fixed for all pairs {`$(V, t)$`}. So we can set up the
          proportion {`$\\frac{V_1}{t_1} = \\frac{V_2}{t_2}$`} from any one measurement and use it
          to find any missing quantity.
        </p>
      </Answer>

      <p>
        <strong>18.</strong> Anna can paint a room in {`$6$`} hours. Boris can paint the same room
        in {`$9$`} hours. They work together at their own constant rates on different parts of the
        room. How long does it take to finish? Explain why rates add (not times) when independent
        workers cooperate. Verify that the total area of the room cancels out of your answer.
      </p>
      <Answer>
        <p>
          Let {`$A$`} be the area of the room. Anna's rate is {`$\\frac{A}{6}$`} (area per hour).
          Boris's rate is {`$\\frac{A}{9}$`}. Together they paint at the combined rate{' '}
          {`$\\frac{A}{6} + \\frac{A}{9} = \\frac{3A}{18} + \\frac{2A}{18} = \\frac{5A}{18}$`} per
          hour.
        </p>
        <p>
          Time to finish:{' '}
          {`$A \\div \\frac{5A}{18} = A \\times \\frac{18}{5A} = \\frac{18}{5} = 3.6$`} hours, or{' '}
          {`$3$`} hours {`$36$`} minutes.
        </p>
        <p>
          Rates add (not times) because the two workers are working independently on different parts
          of the room. Whatever area Anna paints is separate from whatever area Boris paints. So the
          amounts of work done per hour add. Times would only add if one worked after the other.
        </p>
        <p>
          The total area {`$A$`} cancelled out of the final answer ({`$\\frac{18}{5}$`} hours has no{' '}
          {`$A$`} in it). The answer does not depend on the size of the room, only on the individual
          times.
        </p>
      </Answer>

      {/* Part IV */}
      <hr />
      <h2>Part IV: Pedagogical Application</h2>

      <p>
        <strong>19.</strong> A cyclist rides from town {`$A$`} to town {`$B$`} at {`$24$`} km/h,
        then back from {`$B$`} to {`$A$`} on the same road at {`$16$`} km/h.
      </p>
      <p>
        (a) Compute the average speed for the round trip. Show the work, and let the distance from{' '}
        {`$A$`} to {`$B$`} be {`$D$`}. Verify explicitly that {`$D$`} cancels.
      </p>
      <Answer>
        <p>
          Total distance: {`$2D$`}. Time going: {`$\\frac{D}{24}$`}. Time returning:{' '}
          {`$\\frac{D}{16}$`}. Total time:{' '}
          {`$\\frac{D}{24} + \\frac{D}{16} = \\frac{2D}{48} + \\frac{3D}{48} = \\frac{5D}{48}$`}.
        </p>
        <p>
          Average speed:{' '}
          {`$2D \\div \\frac{5D}{48} = 2D \\times \\frac{48}{5D} = \\frac{96}{5} = 19.2$`} km/h.
        </p>
        <p>
          {`$D$`} cancels because both the numerator ({`$2D$`}) and the denominator ({' '}
          {`$\\frac{5D}{48}$`}) scale with {`$D$`}.
        </p>
      </Answer>

      <p>
        (b) The simple average of {`$24$`} and {`$16$`} is {`$20$`} km/h. Your answer is smaller.
        Explain why this is mathematically inevitable, using the idea that the cyclist spends more
        time at the slower speed.
      </p>
      <Answer>
        <p>
          The cyclist spends more time at the slower speed. The return at {`$16$`} km/h takes longer
          than the outbound at {`$24$`} km/h. So the slower speed gets more weight in the
          time-weighted average.
        </p>
        <p>
          The simple average {`$20$`} km/h would only be correct if equal times were spent at each
          speed. Here equal distances are spent, which makes the slower speed dominate.
        </p>
      </Answer>

      <p>
        (c) This problem combines the division definition from Module 2 with the rate concept from
        Module 3. State which course definition is used to write "average speed = total distance
        divided by total time."
      </p>
      <Answer>
        <p>
          The division definition from Module 2: {`$A \\div B$`} is the unique number {`$C$`} such
          that {`$A = C \\times B$`}. So average speed {`$v$`} is the unique number satisfying{' '}
          {`$\\text{total distance} = v \\times \\text{total time}$`}.
        </p>
      </Answer>

      <p>
        <strong>20.</strong> A farmer has {`$200$`} kg of cucumbers that are {`$99\\%$`} water.
        After a day in the sun, they are {`$98\\%$`} water. State and solve the problem of finding
        the new weight. Explain why a 1-percentage-point change in water content causes such a large
        change in total weight.
      </p>
      <Answer>
        <p>
          The solids do not change. Only water evaporates. Original solids: {`$1\\%$`} of {`$200$`}{' '}
          kg is {`$2$`} kg.
        </p>
        <p>
          After drying, solids are {`$2\\%$`} of the new total weight {`$w$`}:{' '}
          {`$2 = \\frac{2}{100} \\times w$`}. Solve: {`$w = 100$`} kg.
        </p>
        <p>
          A 1-percentage-point change in water content causes a huge weight change because the
          solids are a tiny fraction of the cucumber. The solid percentage doubled (from {`$1\\%$`}{' '}
          to {`$2\\%$`}). For the same fixed {`$2$`} kg of solids, the total weight must halve. When
          the solid fraction is small, small absolute changes in water percentage become large
          multiplicative changes in solid percentage.
        </p>
      </Answer>

      <p>
        <strong>21.</strong> A bottle contains exactly one litre of wine. A kettle contains exactly
        one litre of tea. A {`$30$`} ml spoonful of tea is moved from the kettle to the bottle. The
        bottle is not stirred. Then a {`$30$`} ml spoonful is taken from the bottle and returned to
        the kettle.
      </p>
      <p>
        (a) State whether there is more wine in the kettle or more tea in the bottle. Justify your
        answer.
      </p>
      <Answer>
        <p>The amount of wine in the kettle equals the amount of tea in the bottle. Always.</p>
      </Answer>

      <p>
        (b) The answer is the same whether or not the bottle is stirred. Prove this by a
        conservation argument: track the total volume of liquid in each container before and after
        the exchange. Your proof must not assume that the spoon returning to the kettle is well
        mixed.
      </p>
      <Answer>
        <p>
          Before the exchange: bottle has {`$1000$`} ml of wine, kettle has {`$1000$`} ml of tea.
        </p>
        <p>
          After the first spoon ({`$30$`} ml of tea into the bottle): bottle has {`$1030$`} ml total
          ({`$1000$`} wine plus {`$30$`} tea); kettle has {`$970$`} ml (all tea).
        </p>
        <p>
          The second spoon returns {`$30$`} ml from the bottle to the kettle. Call its contents{' '}
          {`$T$`} ml of tea and {`$W$`} ml of wine, where {`$T + W = 30$`}. After this return:
          bottle has {`$1000$`} ml total; kettle has {`$1000$`} ml total.
        </p>
        <p>
          The bottle now contains {`$(30 - T)$`} ml of tea. That is the tea in the bottle. The
          kettle gained {`$W$`} ml of wine. That is the wine in the kettle.
        </p>
        <p>
          Since {`$T + W = 30$`}, we have {`$W = 30 - T$`}. So tea in bottle {`$= W = $`} wine in
          kettle, regardless of the mix in the returning spoon.
        </p>
      </Answer>

      <p>
        <strong>22.</strong> Using FASM (the Fundamental Assumption of School Mathematics, which
        says all fraction arithmetic rules extend to all real numbers), compare{' '}
        {`$\\frac{\\pi}{3}$`} and {`$\\frac{22}{21}$`}. State which is larger and justify with
        cross-multiplication. Explain why FASM is needed to make this comparison legitimate, given
        that {`$\\pi$`} is not a fraction.
      </p>
      <Answer>
        <p>
          By FASM, we may use cross-multiplication to compare {`$\\frac{\\pi}{3}$`} and{' '}
          {`$\\frac{22}{21}$`}. Compute {`$\\pi \\times 21$`} and {`$3 \\times 22$`}:{' '}
          {`$21\\pi \\approx 21 \\times 3.14159 \\approx 65.97$`}, and {`$3 \\times 22 = 66$`}.
          Since {`$21\\pi < 66$`}, we have {`$\\frac{\\pi}{3} < \\frac{22}{21}$`}. So{' '}
          {`$\\frac{22}{21}$`} is slightly larger.
        </p>
        <p>
          FASM is needed because cross-multiplication was proved using the number-line definition of
          fractions and the equivalent fractions theorem. Both are stated for fractions of whole
          numbers. {`$\\pi$`} is not a fraction. Without FASM, we have no theorem that says
          cross-multiplication still works when one of the entries is irrational. FASM is the
          assumption that closes this gap.
        </p>
      </Answer>

      <p>
        <strong>23.</strong> In a short paragraph (no more than five sentences), state two specific
        problems with the way fractions are traditionally taught (parts-of-a-pizza, "five meanings,"
        invert-and-multiply as a rule with no reason) and explain how the number-line definition
        fixes both. Your answer must name at least one operation where the traditional approach
        breaks down and the number-line approach does not.
      </p>
      <Answer>
        <p>
          The traditional "parts of a pizza" model has no clear definition. It relies on intuition
          about "equal parts" of an unspecified whole, and it breaks when the fraction is greater
          than {`$1$`} (you cannot have {`$\\frac{5}{4}$`} of one pizza without going outside the
          pizza).
        </p>
        <p>
          The traditional approach also presents invert-and-multiply for division as a rule with no
          reason. This forces students to memorize rather than understand, and leaves them helpless
          on new problem types.
        </p>
        <p>
          The number-line definition fixes both. Every fraction, including {`$\\frac{5}{4}$`},{' '}
          {`$\\frac{23}{4}$`}, and {`$\\frac{\\pi}{3}$`}, is just a point on the same line.
          Invert-and-multiply becomes a theorem derived from the definition {`$A \\div B = C$`} iff{' '}
          {`$A = CB$`}. The student who understands the derivation can reconstruct the rule rather
          than memorize it.
        </p>
      </Answer>
    </div>
  )
}

export default function CapstoneFractions() {
  const config = {
    documentTitle: 'Project: Fractions - AETHER',
    briefing: {
      title: 'Fractions',
      concepts: [
        'Fraction Foundations',
        'Fraction Operations',
        'Fraction Applications',
        'Fraction Advanced Topics'
      ]
    },
    projectContent: <ProjectContent />,
    examContent: <ExamContent />
  }

  return <ProjectTemplate config={config} />
}
