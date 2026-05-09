import ProjectTemplate, {
  Stopwatch,
  Answer
} from '../../../../../components/project/project-template'

function ProjectContent() {
  return (
    <div className="project-prose">
      {/* Project 1 */}
      <h2>Project 1: Why the Algorithms Work</h2>

      <h3>Scenario</h3>
      <p>
        A fellow teacher asks you: "I can do long multiplication, but I have no idea why the steps
        work. I just memorized them in school. Can you explain it to me, not as a trick but as
        something that actually makes sense?"
      </p>
      <p>
        Your task is to write that explanation, not just for multiplication but for all four
        standard algorithms.
      </p>

      <h3>What to Produce</h3>

      <h4>Deliverable 1A: Four Written Explanations</h4>
      <p>
        Write a separate explanation for each of the four standard algorithms: addition,
        subtraction, multiplication, and long division. Each explanation must meet all five criteria
        below.
      </p>
      <ol className="lrn-list">
        <li>
          <strong>Worked example.</strong> Work a specific problem step by step, showing every
          intermediate result. For addition, use a problem that requires carrying in at least two
          columns. For subtraction, use a problem that requires trading across at least one zero.
          For multiplication, use a two-digit number times a three-digit number. For division, use a
          three-digit dividend with a single-digit divisor that produces a nonzero remainder.
        </li>
        <li>
          <strong>Mathematical principle.</strong> Name the principle driving the algorithm and show
          exactly where it appears in your example. For addition: place value lets you regroup any
          sum of ten ones as one ten (and so on up). For subtraction: trading preserves the total
          value of the number. For multiplication: the distributive law. For division: the
          Division-with-Remainder Theorem. Naming the principle is not enough — point to the step in
          your example where it does its work.
        </li>
        <li>
          <strong>Direction of travel.</strong> Explain why the algorithm runs right to left (or
          left to right for division). Be specific — "because of carrying" is not an explanation.
          Show what breaks if you run it the other way.
        </li>
        <li>
          <strong>Expanded form.</strong> Use expanded form at least once to connect the algorithm
          to place value. For instance, carrying 1 in 93 + 78 means rewriting 170 as 100 + 70.
        </li>
        <li>
          <strong>Plain language.</strong> Write so another teacher can follow without a textbook.
          Define every term the first time you use it.
        </li>
      </ol>

      <h4>Deliverable 1B: The Distributive Law Demonstration</h4>
      <p>
        Write a standalone explanation of the distributive law that does three things. First, state
        the law precisely. Second, illustrate it with the area model, describing the rectangle, its
        partition, and how the areas correspond to the algebraic terms. Third, show how the law
        produces the partial products in your multiplication example from Deliverable 1A, matching
        each partial product to a specific application of the law.
      </p>

      <h4>Deliverable 1C: The Division-with-Remainder Theorem</h4>
      <p>
        State the theorem precisely. Then explain the existence and uniqueness claims separately, in
        your own words, using the number line to support the existence argument. Your explanation
        should make clear why the remainder must be less than the divisor and why there is exactly
        one quotient-remainder pair for any given dividend and divisor.
      </p>

      {/* Project 2 */}
      <hr />
      <h2>Project 2: Diagnosing Errors</h2>

      <h3>Scenario</h3>
      <p>
        You are reviewing student work from a fourth-grade class. Five students have made errors on
        multidigit arithmetic problems. Your job is to figure out what went wrong, why it went
        wrong, and what mathematics the student is missing.
      </p>

      <h3>What to Produce</h3>

      <h4>Deliverable 2A: Error Analyses</h4>
      <p>For each of the five cases below, write an analysis that does three things.</p>
      <p>
        First, identify the error pattern. Do not just say "the answer is wrong." Describe the
        systematic mistake the student is making in a way that would let you predict what the
        student would write for a different problem.
      </p>
      <p>
        Second, diagnose the mathematical misconception. Explain what the student does not
        understand about place value, the laws of arithmetic, or the structure of the algorithm.
        Reference the specific mathematical principles from the source material.
      </p>
      <p>
        Third, provide a correct solution to the same problem, annotated with the reasoning at each
        step, so the contrast between correct and incorrect is visible.
      </p>

      <p>The five cases:</p>

      <p>
        <strong>Case 1 (Addition).</strong> A student computes 467 + 385 and writes 7412. In the
        ones column: 7 + 5 = 12, writes 12. In the tens column: 6 + 8 = 14, writes 14. In the
        hundreds column: 4 + 3 = 7, writes 7. The student concatenates the column sums instead of
        carrying.
      </p>

      <p>
        <strong>Case 2 (Subtraction).</strong> A student computes 503 − 267 and writes 364. The
        student never trades. Instead, in every column, they subtract the smaller digit from the
        larger one regardless of which is on top. Ones: 7 &gt; 3, so 7 − 3 = 4. Tens: 6 &gt; 0, so 6
        − 0 = 6. Hundreds: 5 &gt; 2, so 5 − 2 = 3. Analyze this error pattern.
      </p>

      <p>
        <strong>Case 3 (Multiplication).</strong> A student computes 243 × 56 and writes the partial
        products as 1458 (which is 243 × 6, correct) and 1215 (which is 243 × 5, correct for 243 × 5
        but missing the shift). The student adds 1458 + 1215 = 2673 instead of the correct 13,608.
      </p>

      <p>
        <strong>Case 4 (Division).</strong> A student computes 856 ÷ 7 and writes a quotient of
        1202. The correct quotient is 122. The student's process: 8 ÷ 7 = 1 R 1. Bring down 5 to get
        15. 15 ÷ 7 = 2 R 1. Bring down 6 to get 16. 16 ÷ 7 = 2 R 2. The student introduced an extra
        0 digit that does not belong in the quotient. Diagnose exactly where the extra digit entered
        and why.
      </p>

      <p>
        <strong>Case 5 (Subtraction across zeros).</strong> A student computes 4000 − 372 and writes
        4372. The student does not trade at all. They write: ones: 0 − 2, can't do it, writes 2.
        Tens: 0 − 7, can't do it, writes 7. Hundreds: 0 − 3, can't do it, writes 3. Thousands: 4,
        writes 4.
      </p>

      <h4>Deliverable 2B: Cross-Case Synthesis</h4>
      <p>
        Write one to two pages connecting the five cases. What is the common thread? Your synthesis
        should argue that every error traces back to a failure to understand place value and the way
        algorithms use it. Use specific references to the five cases to support this argument.
        Conclude by explaining why the source material's emphasis on expanded form and the laws of
        arithmetic is a direct response to the kinds of misunderstanding these errors represent.
      </p>

      {/* Project 3 */}
      <hr />
      <h2>Project 3: Arithmetic in Base 5</h2>

      <h3>Scenario</h3>
      <p>
        You have been asked to lead a workshop for fellow teachers. The goal is to help them
        experience what it feels like to learn arithmetic for the first time, by working in an
        unfamiliar base. You choose base 5 because it is small enough to make the tables manageable
        but large enough to feel like a real number system.
      </p>
      <p>
        To lead this workshop, you must first do the mathematics yourself, with full understanding.
      </p>

      <h3>What to Produce</h3>

      <h4>Deliverable 3A: The Base-5 Tables</h4>
      <p>
        Construct the complete addition table and multiplication table for base 5 (digits 0 through
        4). Present each table as a grid. Every entry must be written in base 5, not base 10.
        Annotate at least three entries in each table with a brief explanation of how you computed
        them, showing the conversion reasoning (e.g., "3 + 4 in base 10 is 7, and 7 = 1 × 5 + 2, so
        the answer is 12 in base 5").
      </p>

      <h4>Deliverable 3B: Four Worked Problems</h4>
      <p>
        Perform one addition, one subtraction, one multiplication, and one base conversion in base
        5, showing every step. The specific problems:
      </p>

      <p>
        <strong>Addition:</strong> (342)₅ + (234)₅. This must require carrying.
      </p>
      <p>
        <strong>Subtraction:</strong> (410)₅ − (243)₅. This must require trading.
      </p>
      <p>
        <strong>Multiplication:</strong> (32)₅ × (14)₅. This must use partial products with
        shifting.
      </p>
      <p>
        <strong>Base conversion:</strong> Convert the base-10 number 189 to base 5 using repeated
        division. Then verify by expanding the base-5 result back to base 10.
      </p>

      <p>
        For each problem, the worked solution must show every intermediate step and explicitly
        identify every carry, trade, or shift. After each problem, write a paragraph explaining what
        mathematical principle justifies the key step (carrying, trading, shifting, or the remainder
        method), using the same language and concepts from the source material's treatment of
        base-10 algorithms.
      </p>

      <h4>Deliverable 3C: Reflection</h4>
      <p>
        Write one to two pages addressing this question: What does working in base 5 reveal about
        your understanding of base-10 arithmetic? Your reflection must address three specific
        points. First, identify at least one moment where your base-10 automaticity interfered with
        base-5 reasoning, and explain what that interference tells you about the nature of your
        base-10 knowledge (procedural versus structural). Second, explain why the algorithms work
        identically in both bases, citing the specific mathematical properties that are
        base-independent. Third, explain why the source material includes base-b arithmetic in a
        course about elementary mathematics.
      </p>

      {/* Project 4 */}
      <hr />
      <h2>Project 4: Connecting Everything</h2>

      <h3>Scenario</h3>
      <p>
        You have been asked to write a short mathematical essay (five to eight pages) for an
        audience of fellow teachers. The title is: "One Idea, Four Algorithms: How Place Value Makes
        Arithmetic Work." The essay must weave together the number line, place value, the laws of
        arithmetic, the four standard algorithms, estimation, and number bases into a single
        coherent argument.
      </p>
      <p>
        This is not a summary of the source material. It is an argument. You are making a claim and
        supporting it.
      </p>

      <h3>What to Produce</h3>

      <h4>Deliverable 4A: The Essay</h4>
      <p>
        Your essay must contain the following elements, integrated into a continuous argument rather
        than presented as disconnected sections.
      </p>
      <p>
        An opening that states a clear thesis. The thesis should be a specific mathematical claim
        about the relationship between place value and the algorithms, not a vague statement like
        "place value is important."
      </p>
      <p>
        A passage that grounds arithmetic in the number line. Define what a number is (a point on
        the number line), show how addition and subtraction correspond to segment operations, and
        explain why the unit matters. This passage should make clear that arithmetic is not
        arbitrary symbol manipulation but has geometric meaning.
      </p>
      <p>
        A passage that explains how the Hindu-Arabic numeral system encodes numbers using place
        value, and how expanded form connects any number to a sum of single-digit multiples of
        powers of 10. This passage should make the reader see that our notation is itself a
        mathematical achievement, not just a convention.
      </p>
      <p>
        A passage on the laws of arithmetic (commutative, associative, distributive) that explains
        their role as the engine behind the algorithms. The distributive law should receive the most
        attention because it is the one that connects addition and multiplication and drives the
        multiplication algorithm.
      </p>
      <p>
        A passage that presents the four algorithms as a unified family. The source material calls
        this the "leitmotif": to compute with multidigit numbers, break the problem into steps where
        each step involves only a single digit. Your essay must explain how each algorithm achieves
        this, and what role carrying, trading, shifting, and the Division-with-Remainder Theorem
        play.
      </p>
      <p>
        A passage on estimation that explains when rounding works well and when it fails, using the
        concepts of absolute and relative error. This passage should connect back to place value:
        explain why rounding to the nearest hundred works for numbers in the thousands but fails for
        numbers in the hundreds, in terms of the relationship between the rounding unit and the
        number's order of magnitude.
      </p>
      <p>
        A passage that uses base-b arithmetic to demonstrate that the algorithms are universal. Show
        that the same procedures, justified by the same laws, work in any base, with only the
        single-digit tables changing. Explain why this universality is the strongest evidence that
        the algorithms are not arbitrary tricks but mathematical consequences of place value and the
        laws of arithmetic.
      </p>
      <p>
        A conclusion that returns to the thesis and states what a teacher gains by understanding
        these connections.
      </p>

      <h4>Deliverable 4B: Concept Map</h4>
      <p>
        Create a one-page visual diagram (hand-drawn or digital, your choice) showing the logical
        dependencies among the major concepts: the number line, the unit, place value, expanded
        form, the three laws of arithmetic, the four algorithms, carrying, trading, shifting, the
        Division-with-Remainder Theorem, estimation/rounding, absolute and relative error, and
        base-b representation. Each connection must be labeled with a brief phrase explaining the
        relationship (e.g., "the distributive law produces partial products in multiplication"). The
        map should make it possible to trace any algorithm back to its mathematical foundations.
      </p>
    </div>
  )
}

function ExamContent() {
  return (
    <div className="project-prose">
      {/* Part I */}
      <h2>Part I: Foundations</h2>

      <p>
        <strong>1.</strong> Write the expanded form of 407,053 using powers of 10. Include all six
        terms.
      </p>
      <Answer>
        <p>407,053 = (4 × 10⁵) + (0 × 10⁴) + (7 × 10³) + (0 × 10²) + (5 × 10¹) + (3 × 10⁰)</p>
      </Answer>

      <p>
        <strong>2.</strong> Put these numbers in order from least to greatest without computing
        anything. State the reasoning.
      </p>
      <p>8,972 and 62,415 and 8,899 and 9,001</p>
      <Answer>
        <p>8,899 &lt; 8,972 &lt; 9,001 &lt; 62,415</p>
        <p>
          62,415 is in the ten-thousands, so it exceeds the others (all in the thousands). Among the
          thousands: 9,001 has leading digit 9, larger than 8. Between 8,899 and 8,972: both start
          with 8, compare the second digit, 8 &lt; 9.
        </p>
      </Answer>

      <p>
        <strong>3.</strong> A student says "the equal sign means you do the calculation and write
        the answer." What is wrong with this, and what does the equal sign actually mean?
      </p>
      <Answer>
        <p>
          The equal sign states a relationship: both sides name the same number. It is not a command
          to compute. "4 + 7" and "11" are two names for the same point on the number line.
        </p>
      </Answer>

      <p>
        <strong>4.</strong> Compute 4,502 + 263 using the standard addition algorithm. Show each
        column.
      </p>
      <Answer>
        <p>
          Ones: 2 + 3 = 5. Tens: 0 + 6 = 6. Hundreds: 5 + 2 = 7. Thousands: 4 + 0 = 4. Answer:
          4,765.
        </p>
      </Answer>

      <p>
        <strong>5.</strong> Compute 50,003 − 465 using the standard subtraction algorithm. Show
        every trade.
      </p>
      <Answer>
        <p>
          Trade from ten-thousands through to ones. 50,003 becomes 4|9|9|9|13. Then: 13 − 5 = 8, 9 −
          6 = 3, 9 − 4 = 5, 9 − 0 = 9, 4 − 0 = 4. Answer: 49,538.
        </p>
      </Answer>

      <p>
        <strong>6.</strong> Compute 347 × 26 using the standard multiplication algorithm. Show each
        partial product and the final sum.
      </p>
      <Answer>
        <p>347 × 6 = 2,082. 347 × 2 = 694, shifted left = 6,940. Sum: 2,082 + 6,940 = 9,022.</p>
      </Answer>

      <p>
        <strong>7.</strong> Compute 742 ÷ 4 using the long division algorithm. State the quotient
        and remainder, then verify.
      </p>
      <Answer>
        <p>
          7 ÷ 4 = 1 R 3. 34 ÷ 4 = 8 R 2. 22 ÷ 4 = 5 R 2. Quotient: 185, remainder: 2. Check: 185 × 4
          + 2 = 742.
        </p>
      </Answer>

      <p>
        <strong>8.</strong> Round 45,297 to the nearest thousand. Show each step.
      </p>
      <Answer>
        <p>The hundreds digit of 45,297 is 2. Since 2 &lt; 5, round down. Answer: 45,000.</p>
      </Answer>

      <p>
        <strong>9.</strong> Convert 247 from base 10 to base 5 using repeated division. Show all
        steps and verify.
      </p>
      <Answer>
        <p>
          247 ÷ 5 = 49 R 2. 49 ÷ 5 = 9 R 4. 9 ÷ 5 = 1 R 4. 1 ÷ 5 = 0 R 1. Read bottom to top:
          (1442)₅. Check: 125 + 100 + 20 + 2 = 247.
        </p>
      </Answer>

      <p>
        <strong>10.</strong> On a number line, describe how to compute 5 + 8 and 13 − 5. State the
        starting point, direction, length, and landing point.
      </p>
      <Answer>
        <p>
          5 + 8: start at 0, go right 5 to land on 5, then right 8 to land on 13. 13 − 5: start at
          13, go left 5 to land on 8.
        </p>
      </Answer>

      {/* Part II */}
      <hr />
      <h2>Part II: Conceptual Understanding</h2>

      <p>
        <strong>11.</strong> The addition algorithm.
      </p>

      <p>(a) Compute 4,867 + 3,594 using the standard algorithm. Show each carry.</p>
      <Answer>
        <p>
          Ones: 7 + 4 = 11, write 1, carry 1. Tens: 6 + 9 + 1 = 16, write 6, carry 1. Hundreds: 8 +
          5 + 1 = 14, write 4, carry 1. Thousands: 4 + 3 + 1 = 8. Answer: 8,461.
        </p>
      </Answer>

      <p>
        (b) Explain why the algorithm works. Use expanded form. State what the carried 1 represents
        at each step.
      </p>
      <Answer>
        <p>Expanded: (4,000 + 800 + 60 + 7) + (3,000 + 500 + 90 + 4). Group by place value.</p>
        <p>
          Ones: 7 + 4 = 11 ones = 1 ten + 1 one. The carried 1 is "1 ten," worth 10. Tens: 60 + 90 +
          10 = 160 = 1 hundred + 6 tens. Carried 1 is 1 hundred. Hundreds: 800 + 500 + 100 = 1,400 =
          1 thousand + 4 hundreds.
        </p>
        <p>
          Each carry regroups 10 units of one place value into 1 unit of the next. Total value never
          changes.
        </p>
      </Answer>

      <p>(c) Explain what goes wrong if you add left to right. Give a concrete example.</p>
      <Answer>
        <p>
          Carries propagate leftward. Example: 867 + 594. Hundreds: 8 + 5 = 13, write 3. Tens: 6 + 9
          = 15, carry 1 to hundreds. But hundreds was already written as 3 — must be corrected to 4.
          Right-to-left avoids this because each carry is absorbed before the next column is
          processed.
        </p>
      </Answer>

      <p>
        <strong>12.</strong> The subtraction algorithm.
      </p>

      <p>(a) Compute 30,024 − 8,697. Show every trade.</p>
      <Answer>
        <p>Ones: 4 &lt; 7, trade. Tens 2 → 1, ones → 14. 14 − 7 = 7.</p>
        <p>
          Tens: 1 &lt; 9. Hundreds is 0, thousands is 0. Go to ten-thousands: 3 → 2. Cascade:
          thousands 0 → 10 → 9, hundreds 0 → 10 → 9, tens 1 → 11. 11 − 9 = 2.
        </p>
        <p>Hundreds: 9 − 6 = 3. Thousands: 9 − 8 = 1. Ten-thousands: 2 − 0 = 2. Answer: 21,327.</p>
      </Answer>

      <p>(b) Why is "trading" accurate and "borrowing" misleading?</p>
      <Answer>
        <p>
          "Borrowing" implies something must be returned. Nothing is returned. "Trading" is
          accurate: you exchange 1 unit of a higher place value for 10 units of the next lower. 1
          ten becomes 10 ones. Total value unchanged. The number is rewritten, not changed.
        </p>
      </Answer>

      <p>
        (c) The property (ℓ + m + n) − (a + b + c) = (ℓ − a) + (m − b) + (n − c). State the exact
        condition and explain why.
      </p>
      <Answer>
        <p>
          Requires ℓ ≥ a, m ≥ b, and n ≥ c. Every individual subtraction must produce a whole
          number. If m &lt; b, then m − b is undefined in whole numbers. Subtraction of whole
          numbers only exists when the result is non-negative.
        </p>
      </Answer>

      <p>
        <strong>13.</strong> The multiplication algorithm.
      </p>

      <p>(a) Compute 852 × 473. Show all three partial products and their sum.</p>
      <Answer>
        <p>
          852 × 3 = 2,556. 852 × 7 = 5,964, shifted = 59,640. 852 × 4 = 3,408, shifted = 340,800.
          Sum: 402,996.
        </p>
      </Answer>

      <p>
        (b) How does the distributive law break this into single-digit multiplications? Explain
        shifting.
      </p>
      <Answer>
        <p>852 × 473 = 852 × (400 + 70 + 3) = (852 × 400) + (852 × 70) + (852 × 3).</p>
        <p>
          852 × 3 = (800 + 50 + 2) × 3 = (8 × 3) × 100 + (5 × 3) × 10 + (2 × 3). All single-digit ×
          single-digit.
        </p>
        <p>
          852 × 70 = (852 × 7) × 10. Shifting left is multiplication by 10, matching the 7's place.
          852 × 400 = (852 × 4) × 100. The shift is the power of 10 the digit's position demands.
        </p>
      </Answer>

      <p>(c) Which digits produce (5 × 7) × 10²? Explain the power of 10.</p>
      <Answer>
        <p>
          5 is the tens digit of 852 (i = 1). 7 is the tens digit of 473 (j = 1). Contributes to
          10^(1+1) = 10², the hundreds place. Term: (5 × 7) × 100 = 3,500.
        </p>
      </Answer>

      <p>
        <strong>14.</strong> The long division algorithm.
      </p>

      <p>(a) State the Division-with-Remainder Theorem precisely.</p>
      <Answer>
        <p>
          For any whole numbers a and d with d &gt; 0, there exist unique whole numbers q and r such
          that a = qd + r and 0 ≤ r &lt; d.
        </p>
      </Answer>

      <p>
        (b) Why must each quotient digit be at most 9? Use the fact that the dividend at each step
        is 10r + (next digit) where r &lt; d.
      </p>
      <Answer>
        <p>
          Max dividend: 10(d − 1) + 9 = 10d − 1. Quotient q satisfies q × d ≤ 10d − 1, so q ≤ (10d −
          1)/d = 10 − 1/d &lt; 10. Since q is a whole number, q ≤ 9.
        </p>
      </Answer>

      <p>
        (c) Write one measurement and one partitive word problem for 48 ÷ 6. Why do both give the
        same answer?
      </p>
      <Answer>
        <p>Measurement: "48 ounces of juice, each cup holds 6. How many cups?" → 8 cups.</p>
        <p>Partitive: "48 ounces shared among 6 people. How many each?" → 8 ounces.</p>
        <p>Both give 8 because multiplication is commutative: 8 × 6 = 6 × 8 = 48.</p>
      </Answer>

      <p>
        <strong>15.</strong> Connecting ideas across both readings.
      </p>

      <p>
        (a) Two advantages of "a number is a point on the number line" over "a number is a
        quantity."
      </p>
      <Answer>
        <p>
          First: "Quantity" is vague. The number line gives every number a specific location, making
          comparison and arithmetic geometrically visible.
        </p>
        <p>
          Second: Works for all number types. Whole numbers, fractions, decimals, and irrationals
          are all points on the same line. "Quantity" does not accommodate fractions or irrationals
          naturally.
        </p>
      </Answer>

      <p>
        (b) 1/3 = 0.333... Each digit "narrows the location." Explain what this means precisely.
      </p>
      <Answer>
        <p>
          0.3 places the number in [0.3, 0.4], length 1/10. 0.33 narrows to [0.33, 0.34], length
          1/100. Each digit shrinks the segment by a factor of 10. After k digits: length 1/10^k. As
          k grows, this approaches zero — a single point.
        </p>
      </Answer>

      <p>
        (c) Why does repeated addition work on a 1D line but multiplication "needs a second
        dimension"? What does the area model reveal?
      </p>
      <Answer>
        <p>Repeated addition places segments end-to-end on the line. One-dimensional.</p>
        <p>
          Multiplication creates a 2D quantity. A rectangle with sides m and (n + ℓ) splits into
          areas mn and mℓ, proving m(n + ℓ) = mn + mℓ. This distributive law is what makes the
          multiplication algorithm work. Repeated addition does not explain why 35 × 27 = (35 × 7) +
          (35 × 20).
        </p>
      </Answer>

      {/* Part III */}
      <hr />
      <h2>Part III: Application and Transfer</h2>

      <p>
        <strong>16.</strong> Work entirely in base 7.
      </p>

      <p>(a) Compute (265)₇ + (456)₇. Show each column sum and carry.</p>
      <Answer>
        <p>
          Ones: 5 + 6 = 11 = 1 × 7 + 4. Write 4, carry 1. Sevens: 6 + 5 + 1 = 12 = 1 × 7 + 5. Write
          5, carry 1. Forty-nines: 2 + 4 + 1 = 7 = 1 × 7 + 0. Write 0, carry 1. Answer: (1054)₇.
        </p>
      </Answer>

      <p>(b) Compute (265)₇ × (4)₇. Show each step with conversions.</p>
      <Answer>
        <p>
          5 × 4 = 20 = 2 × 7 + 6. Write 6, carry 2. 6 × 4 + 2 = 26 = 3 × 7 + 5. Write 5, carry 3. 2
          × 4 + 3 = 11 = 1 × 7 + 4. Write 4, carry 1. Answer: (1456)₇.
        </p>
      </Answer>

      <p>(c) Why do the same algorithms work in base 7? What stays the same, what changes?</p>
      <Answer>
        <p>
          Same: column-by-column, right to left, carrying when a result reaches the base. Logic
          depends on place value and the laws of arithmetic, which are base-independent.
        </p>
        <p>
          Changes: single-digit tables and carrying threshold. Base 10 carries at 10, base 7 at 7.
          Multiplication table shrinks from 9 × 9 to 6 × 6.
        </p>
      </Answer>

      <p>
        <strong>17.</strong> Estimation and error.
      </p>

      <p>
        (a) 149 + 147 rounded to nearest hundred: 200. Exact: 296. Compute absolute and relative
        error.
      </p>
      <Answer>
        <p>Absolute: |296 − 200| = 96. Relative: 96/296 ≈ 32.4%.</p>
      </Answer>

      <p>(b) 1,490 + 1,470 rounded to nearest hundred: 3,000. Exact: 2,960. Compute errors.</p>
      <Answer>
        <p>Absolute: |2,960 − 3,000| = 40. Relative: 40/2,960 ≈ 1.4%.</p>
      </Answer>

      <p>(c) Same digits, trailing zero. Why does rounding work far better in the second case?</p>
      <Answer>
        <p>
          In the first case, the numbers sit near 150 — barely larger than the rounding unit of 100.
          Rounding discards nearly half of each number's value. In the second, the numbers sit near
          1,500, which is fifteen times the rounding unit, so rounding discards only a small
          fraction.
        </p>
        <p>
          Rounding works when the rounding unit is much smaller than the numbers being rounded. When
          the two are comparable in size, relative error explodes.
        </p>
      </Answer>

      <p>
        <strong>18.</strong> The Representation Theorem.
      </p>

      <p>(a) Convert 3,644 to base 7. Show all steps.</p>
      <Answer>
        <p>
          3,644 ÷ 7 = 520 R 4. 520 ÷ 7 = 74 R 2. 74 ÷ 7 = 10 R 4. 10 ÷ 7 = 1 R 3. 1 ÷ 7 = 0 R 1.
          Read bottom to top: (13424)₇.
        </p>
      </Answer>

      <p>(b) Why must two different base-7 representations of the same number be identical?</p>
      <Answer>
        <p>
          Both, divided by 7, yield the same quotient and remainder (uniqueness in the
          Division-with-Remainder Theorem). So the last digit must match. Remove it and repeat. All
          digits match.
        </p>
      </Answer>

      <p>(c) Is (462)₅ a valid base-5 number?</p>
      <Answer>
        <p>
          No. In base 5, every digit must satisfy 0 ≤ a &lt; 5. The digit 6 ≥ 5 violates this. Only
          0, 1, 2, 3, 4 are valid.
        </p>
      </Answer>

      {/* Part IV */}
      <hr />
      <h2>Part IV: Pedagogical Application</h2>

      <p>Answer three of four. If you answer all four, only the first three count.</p>

      <p>
        <strong>19.</strong> A student computes 503 − 267 and writes 364.
      </p>

      <p>(a) Reconstruct the student's likely reasoning step by step.</p>
      <Answer>
        <p>
          Ones: 3 &lt; 7. Instead of trading, reversed: 7 − 3 = 4. Tens: 0 &lt; 6, same error: 6 − 0
          = 6. Hundreds: 5 &gt; 2, no reversal needed: 5 − 2 = 3.
        </p>
        <p>
          Core pattern: when the top digit is smaller, the student subtracts bottom from top instead
          of trading.
        </p>
      </Answer>

      <p>(b) Classify each column's error as procedural or conceptual.</p>
      <Answer>
        <p>
          Ones and tens: conceptual. The student treats subtraction as commutative (a − b = b − a),
          which it is not, and does not recognise the need to trade. The hundreds column happens to
          be correct because the top digit is already larger.
        </p>
      </Answer>

      <p>(c) Explain how to handle the zero in the tens place. Describe what value moves where.</p>
      <Answer>
        <p>
          Ones needs 3 − 7, impossible. Tens is 0, nothing to trade. Go to hundreds: trade 1 hundred
          for 10 tens. Hundreds 5 → 4, tens 0 → 10. Trade 1 ten for 10 ones: tens 10 → 9, ones 3 →
          13.
        </p>
        <p>
          Rewritten: 500 + 0 + 3 = 400 + 90 + 13. Same value. Now: 13 − 7 = 6, 9 − 6 = 3, 4 − 2 = 2.
          Answer: 236.
        </p>
      </Answer>

      <p>
        <strong>20.</strong> A student multiplies 35 × 27:
      </p>
      <p>35 × 7 = 245. 35 × 2 = 70. Sum: 315.</p>

      <p>(a) What was correct and incorrect?</p>
      <Answer>
        <p>
          Correct: 35 × 7 = 245, and recognizing two partial products. Incorrect: computed 35 × 2 =
          70 instead of 35 × 20 = 700. The 2 in 27 stands for 20. Face value vs place value
          confusion.
        </p>
      </Answer>

      <p>(b) Using the distributive law, explain why it should be 700.</p>
      <Answer>
        <p>
          35 × 27 = 35 × (20 + 7) = (35 × 20) + (35 × 7). 35 × 20 = 35 × 2 × 10 = 700. The shift
          turns 70 into 700, accounting for the tens place. The student skipped the shift.
        </p>
      </Answer>

      <p>
        (c) Another student: "315 can't be right because 35 × 10 = 350." Explain how estimation
        catches this.
      </p>
      <Answer>
        <p>
          Since 27 &gt; 10 and 35 × 10 = 350, the product must exceed 350. Getting 315 is
          impossible. Estimation requires understanding relative sizes. The computing student
          followed disconnected steps. The estimating student understood: bigger factors produce
          bigger products.
        </p>
      </Answer>

      <p>
        <strong>21.</strong> A student explains carrying: "8 + 7 = 15, put down 5, carry the 1."
      </p>

      <p>(a) Is this correct? What is missing?</p>
      <Answer>
        <p>
          Procedure is correct, explanation is incomplete. Says what to do but not what the carried
          1 means.
        </p>
      </Answer>

      <p>(b) Write a better explanation showing what the carried 1 represents.</p>
      <Answer>
        <p>
          8 + 7 = 15 ones. 15 ones = 1 ten + 5 ones (10 ones make 1 ten). The 5 stays in ones. The
          carried 1 is 1 ten, worth 10 ones. It belongs in the tens column. Value unchanged.
        </p>
      </Answer>

      <p>
        (c) In 325 − 178, a student says "I borrow 1." Explain using "trade." Is the "1" in carrying
        the same as in trading?
      </p>
      <Answer>
        <p>
          Trade 1 ten for 10 ones. Tens 2 → 1, ones 5 → 15. 15 − 8 = 7. Value: 320 + 5 = 310 + 15.
        </p>
        <p>
          The "1" in carrying is 1 ten moving upward (ones → tens). The "1" in trading is 1 ten
          moving downward (tens → ones). Same unit, opposite directions. Addition groups 10 smaller
          into 1 larger. Subtraction breaks 1 larger into 10 smaller.
        </p>
      </Answer>

      <p>
        <strong>22.</strong> A student computes 1,295 ÷ 35 = 37 and verifies 37 × 35 = 1,295.
      </p>

      <p>(a) Walk through the long division step by step.</p>
      <Answer>
        <p>
          1 &lt; 35. 12 &lt; 35. 129 ÷ 35: 3 × 35 = 105, R 24. Bring down 5: 245 ÷ 35: 7 × 35 = 245,
          R 0. Quotient: 37. Check: 37 × 35 = 1,295.
        </p>
      </Answer>

      <p>(b) The "money interpretation" works for divisor 4. Why awkward for 35?</p>
      <Answer>
        <p>
          For 742 ÷ 4: distribute hundreds, tens, ones among 4 stacks. Each step handles one
          denomination.
        </p>
        <p>
          For divisor 35: dividing 129 by 35 doesn't match any single denomination. The money model
          ties steps to bill types, but multi-digit divisors break that correspondence.
        </p>
      </Answer>

      <p>
        (c) The mathematical explanation "treats each step the same way regardless of place value."
        What does this mean?
      </p>
      <Answer>
        <p>
          Every step: take previous remainder, append next digit (10r + digit), divide by d. Same
          operation regardless of place. This uniformity makes it generalizable to any dividend and
          divisor.
        </p>
        <p>
          The money model needs a different story per denomination and has no extension to
          multi-digit divisors. The math explanation describes structure, not a physical scenario.
        </p>
      </Answer>
    </div>
  )
}

export default function CapstoneWholeNumbers() {
  const config = {
    documentTitle: 'Project: Place Value & Algorithms - AETHER',
    briefing: {
      title: 'Whole Numbers',
      concepts: ['Place Value and Algorithms', 'Number Line and Number Systems']
    },
    projectContent: <ProjectContent />,
    examContent: <ExamContent />
  }

  return <ProjectTemplate config={config} />
}
