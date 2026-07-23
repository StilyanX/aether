import { LearningTemplate } from '../../../../components/learning/learning-template'
import { useVizColors } from '../../../../hooks/use-viz-colors'
import * as viz from './number-sequences-and-patterns-viz'
import { FONT_CONTROL } from '../../../../components/viz/scale-tokens'

function useConfig() {
  const C = useVizColors()

  return {
    cssPrefix: 'nsp',
    documentTitle: 'Number Sequences and Patterns - AETHER',
    customCss:
      '.MafsView { --mafs-bg: transparent; --mafs-fg: var(--text-primary); --mafs-line-color: var(--border-subtle); }',
    learning: {
      groupTitle: 'Sequences',
      category: 'Arithmetic',
      title: 'Number Sequences and Patterns',
      subtitle:
        'Find the rule hidden inside a list of numbers. Write a formula that gives you any term directly.',
      sections: [
        <>
          <h2>What Is a Sequence?</h2>
          <p>
            Sequences show up everywhere. A savings account adds the same amount each month. A tiled
            path adds the same number of bricks per row. Fibonacci numbers appear in sunflower
            spirals and pinecone scales. Spotting the rule lets you predict the 50th term without
            doing the first 49.
          </p>
          <p>
            A sequence is an ordered list of numbers. Each number in the list is called a{' '}
            <strong>term</strong>. We write the {`$n$`}th term as {`$t_n$`}. You use sequences
            whenever you spot a pattern and want to predict what comes next.
          </p>
          <p>
            The three dots at the end of {`$3, 8, 13, 18, \\ldots$`} mean the list continues
            forever. Your job is to find the rule so you can work out any term without listing every
            one.
          </p>

          <div className="lrn-definition">
            <span className="lrn-definition-term">Sequence</span>
            <div className="lrn-definition-desc">
              <p>
                An ordered list of numbers where each number is called a <strong>term</strong>. We
                write the {`$n$`}th term as {`$t_n$`}.
              </p>
            </div>
          </div>

          <div className="lrn-definition">
            <span className="lrn-definition-term">Term-to-term rule</span>
            <div className="lrn-definition-desc">
              <p>
                A rule that produces each term from the term before it. For example, "add 5 each
                time" is the term-to-term rule for {`$3, 8, 13, 18, \\ldots$`}
              </p>
            </div>
          </div>

          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              Look at 1, 5, 9, 13, &hellip; What is the next term? What rule connects each term to
              the one before it?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                The next term is 17. Each term is 4 more than the one before it. The term-to-term
                rule is "add 4."
              </p>
            </details>
          </div>

          <p>
            Some sequences add the same number each time. Some multiply. Some follow stranger rules.
            The first step is always to look at the gaps between consecutive terms.
          </p>

          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>
              The gap between two consecutive terms is called the <strong>first difference</strong>{' '}
              (<em>constant</em> means: always the same value). If the first difference is constant,
              the sequence grows at a steady pace. That steady pace makes a formula possible. The
              formula needs only one multiplication and one addition.
            </p>
          </div>

          <h3>Recognising Patterns</h3>
          <p>
            To continue a sequence, find what changes between consecutive terms. Subtract each term
            from the one after it to get the first differences.
          </p>

          <div className="lrn-steps">
            <div className="lrn-step">
              <span className="lrn-step-title">Write the first differences</span>
              <p className="lrn-step-content">
                {`Subtract: $5-1=4$, $9-5=4$, $13-9=4$. The first difference is always 4.`}
              </p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">Extend the sequence</span>
              <p className="lrn-step-content">
                {`Add 4 to the last known term: $13 + 4 = 17$, then $17 + 4 = 21$.`}
              </p>
            </div>
          </div>

          <viz.FirstDifferenceStrip C={C} />

          <p>Use the same process for any sequence. Here are more examples:</p>
          <ul className="lrn-list">
            <li>{`$39, 36, 33, 30, \\ldots$: subtracting 3 each time; next term = 27`}</li>
            <li>{`$3, 6, 12, 24, \\ldots$: doubling each time; next term = 48`}</li>
            <li>{`$200, 100, 50, 25, \\ldots$: halving each time; next term = 12.5`}</li>
            <li>{`$4, 9, 15, 22, \\ldots$: differences are 5, 6, 7; next difference = 8, so next term = 30`}</li>
          </ul>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>
              Why does 88, 99, 110, &hellip; have 121 as its next term? Form your answer before
              reading on.
            </p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                The first difference is always 11: {`$99 - 88 = 11$`}, {`$110 - 99 = 11$`}. Adding
                11 to 110 gives 121. The term-to-term rule "add 11" continues the sequence reliably.
              </p>
            </details>
          </div>

          <h3>Fill-In-The-Blank Sequences</h3>
          <p>
            Sometimes a term in the middle of a sequence is missing. Work out the first difference
            from the terms you do have, then fill in the gap.
          </p>

          <div className="lrn-steps">
            <div className="lrn-step">
              <span className="lrn-step-title">{`Find the gap for 1, 6, ?, 16`}</span>
              <p className="lrn-step-content">
                {`From 1 to 16 is three steps. $16 - 1 = 15$, so each step = $\\frac{15}{3} = 5$. Missing term = $1 + 5 + 5 = 11$.`}
              </p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">{`Find the gap for ?, 2, 5, 8, 11`}</span>
              <p className="lrn-step-content">
                {`First difference = 3. Work backwards: $2 - 3 = -1$. Missing first term = $-1$.`}
              </p>
            </div>
          </div>

          <h3>Fibonacci-Style Rules</h3>
          <p>
            Some sequences use two previous terms to make the next one. In a Fibonacci-style
            sequence, each term equals the sum of the two terms before it. This rule requires two
            starting values.
          </p>
          <p>
            {`Take $1, 3, 4, \\ldots$: each new term is the sum of the previous two. The next six terms are $3+4=7$, $4+7=11$, $7+11=18$, $11+18=29$, $18+29=47$, $29+47=76$.`}
          </p>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>
              {`Starting with 2, 5, 7, … and using the same Fibonacci-style rule, write the next four terms. Form your answer before reading on.`}
            </p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                {`$5 + 7 = 12$, $7 + 12 = 19$, $12 + 19 = 31$, $19 + 31 = 50$. The rule works with any two starting values.`}
              </p>
            </details>
          </div>

          <h3>Other Recursive Rules</h3>
          <p>
            Any rule that generates each term from one or more previous terms is a{' '}
            <strong>recursive rule</strong>. The squaring-subtracting rule says: square the previous
            term, then subtract 1. Start with {`$t_1 = 2$`}. Check: {`$2^2 - 1 = 3$`}. Then{' '}
            {`$3^2 - 1 = 8$`}. Then {`$8^2 - 1 = 63$`}. Then {`$63^2 - 1 = 3968$`}. One seed is
            enough.
          </p>
          <p>
            Another unusual rule: count the letters in the English words "one, two, three, four,
            five, &hellip;" The sequence is 3, 3, 5, 4, 4, 3, 5, 5, &hellip; This is a fun curiosity
            rather than a rule you need to memorise. It shows that any consistent procedure produces
            a valid sequence.
          </p>

          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Recursive rule</span>
              <p>
                Needs all previous terms. To find the 100th term you must calculate all 99 terms
                before it. Useful for generating the next few terms quickly.
              </p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Explicit (nth term) rule</span>
              <p>
                {`Gives $t_n$ directly from $n$. To find the 100th term, substitute $n = 100$. Much faster for large $n$.`}
              </p>
            </div>
          </div>
        </>,

        <>
          <h2>Finding the nth Term</h2>
          <p>
            An explicit rule (also called the <strong>nth term formula</strong>) gives you any term
            directly from its position {`$n$`}. Use it when you need a term far along the sequence
            without listing every previous one.
          </p>
          <p>
            We always start at {`$n=1$`} unless stated otherwise. The first term is {`$t_1$`}, not{' '}
            {`$t_0$`}.
          </p>
          <p>
            A sequence with a constant first difference always has nth term {`$t_n = an + b$`}. Here{' '}
            {`$a$`} is the first difference and {`$b$`} is a fixed offset. This kind of sequence is
            called a <strong>linear sequence</strong>.
          </p>

          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              {`For the sequence 3, 8, 13, 18, …, the first difference is 5. You might guess the nth term starts with $5n$. Multiples of 5 are 5, 10, 15. But $5 \\times 1 = 5$, not 3. What adjustment do you need to make?`}
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                {`Every term is 2 less than the matching multiple of 5: $5 \\times 1 - 2 = 3$, $5 \\times 2 - 2 = 8$. The nth term is $t_n = 5n - 2$.`}
              </p>
            </details>
          </div>

          <h3>The Mapping Diagram Method</h3>
          <p>
            A <strong>mapping diagram</strong> pairs each position {`$n$`} with the term {`$t_n$`}.
            Use a three-column layout. Column 1 is {`$n$`}. Column 2 is {`$an$`} (the difference
            times {`$n$`}). Column 3 is the actual term. The constant gap between column 3 and
            column 2 is the offset {`$b$`}.
          </p>

          <table className="lrn-table">
            <thead>
              <tr>
                <th>n</th>
                <th>5n</th>
                <th>Term (5n − 2)</th>
              </tr>
            </thead>
            <tbody>
              {[1, 2, 3, 4, 5].map(n => (
                <tr key={n}>
                  <td>{n}</td>
                  <td>{5 * n}</td>
                  <td className="lrn-table-section-header">{5 * n - 2}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="lrn-steps">
            <div className="lrn-step">
              <span className="lrn-step-title">Find the first difference</span>
              <p className="lrn-step-content">
                {`$8 - 3 = 5$. The first difference is 5, so use the column $5n$.`}
              </p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">Build the middle column</span>
              <p className="lrn-step-content">
                {`$5 \\times 1 = 5$, $5 \\times 2 = 10$, $5 \\times 3 = 15$, $5 \\times 4 = 20$, $5 \\times 5 = 25$.`}
              </p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">Find the offset</span>
              <p className="lrn-step-content">
                {`Compare the $5n$ column to the actual terms: $3 - 5 = -2$, $8 - 10 = -2$, $13 - 15 = -2$. The offset is always $-2$.`}
              </p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">Write the formula</span>
              <p className="lrn-step-content">
                {`$t_n = 5n - 2$. Check: $t_{10} = 5 \\times 10 - 2 = 48$. Check: $t_{20} = 5 \\times 20 - 2 = 98$.`}
              </p>
            </div>
          </div>

          <viz.LinearSequencePlot C={C} />

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>
              {`For 5, 8, 11, 14, … use the mapping diagram method to find the nth term. Form your answer before reading on.`}
            </p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                {`First difference = 3. Middle column: $3n = 3, 6, 9, 12$. Offset: $5 - 3 = 2$. So $t_n = 3n + 2$. Check with $n=1$: $3 \\times 1 + 2 = 5$. Correct.`}
              </p>
            </details>
          </div>

          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>
              {`If the sequence increases by $a$ each step, the $n$th term exceeds the first term by $(n-1) \\times a$.`}
            </p>
            <p>
              {`So $t_n = t_1 + (n-1) \\times a$. Expanding: $t_n = an + (t_1 - a)$. This is exactly $an + b$ with $b = t_1 - a$. The offset $b$ is always the first term minus one step of the difference.`}
            </p>
          </div>

          <div className="lrn-faded">
            <div className="lrn-faded-phase">
              <span className="lrn-faded-label">COMPLETE EXAMPLE</span>
              <p>{`Find the nth term of 2, 8, 14, 20, …`}</p>
              <ol className="lrn-list">
                <li>{`First difference: $8 - 2 = 6$. Use column $6n$.`}</li>
                <li>{`$6n$ column: 6, 12, 18, 24.`}</li>
                <li>{`Offset: $2 - 6 = -4$. Check: $8 - 12 = -4$. Constant.`}</li>
                <li>{`Formula: $t_n = 6n - 4$.`}</li>
              </ol>
            </div>
            <div className="lrn-faded-phase lrn-faded-partial">
              <span className="lrn-faded-label">YOUR TURN: PARTIAL</span>
              <p>{`Find the nth term of 5, 9, 13, 17, …`}</p>
              <ol className="lrn-list">
                <li>{`First difference: $9 - 5 = ?$. Use column $?n$.`}</li>
                <li>{`$4n$ column: 4, 8, 12, 16.`}</li>
                <li>{`Offset: $5 - 4 = ?$. Is it constant?`}</li>
                <li>Write the formula.</li>
              </ol>
            </div>
            <div className="lrn-faded-phase">
              <span className="lrn-faded-label">INDEPENDENT PRACTICE</span>
              <p>{`Find the nth term of 6, 11, 16, 21, …`}</p>
            </div>
          </div>

          <h3>Figural Sequences</h3>
          <p>
            A <strong>figural sequence</strong> uses a growing diagram instead of a list of numbers.
            Count objects in each figure to build a numeric table. Then apply the mapping diagram
            method to that table.
          </p>
          <p>
            This method gives the same formula from two sources: a table of numbers and a picture of
            objects.
          </p>

          <viz.MatchstickHouses C={C} />

          <div className="lrn-warning">
            <span className="lrn-callout-label">COMMON MISTAKE</span>
            <p>
              When counting matchsticks for {`$h=2$`}, the shared vertical wall belongs to both
              houses but counts once. That is why the formula is {`$4h+1$`} rather than {`$5h$`}.
            </p>
          </div>

          <div className="lrn-steps">
            <div className="lrn-step">
              <span className="lrn-step-title">Build the table</span>
              <p className="lrn-step-content">
                {`Count matchsticks: $h=1 \\to m=5$, $h=2 \\to m=9$, $h=3 \\to m=13$, $h=4 \\to m=17$.`}
              </p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">Find the first difference</span>
              <p className="lrn-step-content">
                {`$9 - 5 = 4$. Each new house adds 4 matchsticks. Use column $4h$.`}
              </p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">Find the offset</span>
              <p className="lrn-step-content">
                {`$4h$ column: 4, 8, 12, 16. Offset: $5 - 4 = 1$. Constant.`}
              </p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">Write the formula</span>
              <p className="lrn-step-content">
                {`$m = 4h + 1$. Check: $h=3 \\to 4 \\times 3 + 1 = 13$. Correct.`}
              </p>
            </div>
          </div>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>
              {`For the tile sequence below, the number of surrounding white tiles $w$ follows the formula $w = b + 4$. Why does adding 4 make sense visually?`}
            </p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                Each row of blue tiles has one white tile on the left and one on the right. Then one
                above the row and one below. That is 4 extra tiles no matter how many blue tiles
                there are. So {`$w = b + 4$`} always.
              </p>
            </details>
          </div>

          <viz.TileSequence C={C} />

          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Numeric pattern</span>
              <p>
                You work from a table of {`$n$`} and {`$t_n$`} values. Find the first difference and
                offset, then write {`$t_n = an + b$`}.
              </p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Figural pattern</span>
              <p>
                You count objects in drawings. Build the same table from the diagram. The formula is
                the same, but you can also justify it visually.
              </p>
            </div>
          </div>

          <h3>Non-Uniform Position Column</h3>
          <p>
            Sometimes a table does not start at {`$n = 1$`} and does not go up by 1. You can still
            use the mapping diagram method. Follow three steps:
          </p>
          <ol className="lrn-list">
            <li>Find the first difference of the values.</li>
            <li>{`Build the $an$ column using the actual $n$ values given.`}</li>
            <li>Find the offset by comparing the columns.</li>
          </ol>

          <div className="lrn-callout lrn-tip">
            <span className="lrn-callout-label">Tip</span>
            <p>
              {`For $n = 2, 3, 4, 5$ and $r = 3, 8, 13, 18$: first difference of $r$ is 5. The $5n$ column gives $10, 15, 20, 25$. Offset: $3 - 10 = -7$. So $r = 5n - 7$.`}
            </p>
          </div>

          <h3>Three-Column Number Grid</h3>
          <p>
            Some patterns hide inside grids. A three-column grid places counting numbers in columns
            by position. Pick terms at odd positions (1st, 3rd, 5th, &hellip;) and you recover the
            odd numbers. Pick even positions (2nd, 4th, 6th, &hellip;) and you recover the even
            numbers. This shows that familiar sequences can hide inside a larger grid.
          </p>

          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              Write 1 to 12 in a three-column grid (1 2 3 / 4 5 6 / 7 8 9 / 10 11 12). What sequence
              appears down column 2?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                Column 2 contains 2, 5, 8, 11. The first difference is 3 each time. The nth term is{' '}
                {`$3n - 1$`}. Column 2 always picks every third number starting from 2.
              </p>
            </details>
          </div>

          <table className="lrn-table">
            <thead>
              <tr>
                <th>Col 1</th>
                <th>Col 2</th>
                <th>Col 3</th>
              </tr>
            </thead>
            <tbody>
              {[0, 1, 2, 3].map(row => (
                <tr key={row}>
                  {[0, 1, 2].map(col => {
                    const pos = row * 3 + col + 1
                    return (
                      <td
                        key={col}
                        className={pos % 2 === 1 ? 'lrn-table-section-header' : undefined}
                      >
                        {pos}
                      </td>
                    )
                  })}
                </tr>
              ))}
            </tbody>
          </table>
          <p>
            The odd numbers 1, 3, 5, 7, 9, 11 are in bold. Their parity zig-zags through the
            columns, while the even numbers 2, 4, 6, 8, 10, 12 fill the gaps.
          </p>

          <h3>Interactive Explorer</h3>
          <p>
            Use the explorer below to see how different formulas produce different scatter plots.
            Select a formula and move the slider to highlight any term.
          </p>

          <viz.NthTermExplorer C={C} />
        </>,

        <>
          <h2>Quadratic and Cubic Sequences</h2>
          <p>
            The number of unit squares in an {`$n \\times n$`} floor is {`$n^2$`}. The number of
            unit cubes in an {`$n \\times n \\times n$`} block is {`$n^3$`} ({`$n^3$`} means{' '}
            {`$n \\times n \\times n$`}). Doubling the side multiplies the floor count by four and
            the cube count by eight. These growing counts produce quadratic and cubic sequences.
          </p>
          <p>
            Not every sequence has a constant first difference. If the first differences change by
            the same amount each step, the sequence is <strong>quadratic</strong>. Its nth term
            involves {`$n^2$`}. Use this when a linear formula does not fit the data.
          </p>
          <p>
            Calculate first differences, then calculate second differences (the differences of the
            differences). A constant second difference means the nth term has an {`$n^2$`} term.
          </p>

          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              {`For 3, 6, 11, 18, 27, … the first differences are 3, 5, 7, 9. What are the second differences? What does that tell you about the formula?`}
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                {`Second differences: $5-3=2$, $7-5=2$, $9-7=2$. All equal 2. The nth term involves $n^2$. Because the second difference is 2, the formula starts with $n^2$.`}
              </p>
            </details>
          </div>

          <div className="lrn-definition">
            <span className="lrn-definition-term">Second difference</span>
            <div className="lrn-definition-desc">
              <p>
                {`The difference between consecutive first differences. A constant second difference means the nth term contains an $n^2$ term.`}
              </p>
            </div>
          </div>

          <div className="lrn-warning">
            <span className="lrn-callout-label">COMMON MISTAKE</span>
            <p>
              Students often see first differences 3, 5, 7, 9 (which look like {`$2n+1$`}) and write
              that as the formula. But those are the <em>differences</em>, not the terms. The terms
              involve {`$n^2$`}.
            </p>
          </div>

          <h3>The n-Squared Method</h3>
          <p>
            When you suspect an {`$n^2$`} pattern, list the square numbers{' '}
            {`$1, 4, 9, 16, 25, \\ldots$`} Then compare your sequence to them. The constant gap
            between your sequence and the square numbers is {`$c$`} in the formula{' '}
            {`$t_n = n^2 + c$`}.
          </p>
          <p>
            We call the quadratic offset {`$c$`} to distinguish it from the linear offset {`$b$`}.
            The gap can be negative, which makes {`$c$`} negative.
          </p>

          <div className="lrn-steps">
            <div className="lrn-step">
              <span className="lrn-step-title">{`Find the nth term of 3, 6, 11, 18, 27, …`}</span>
              <p className="lrn-step-content">
                {`Compare to $n^2$: $1, 4, 9, 16, 25$. Differences: $3-1=2$, $6-4=2$, $11-9=2$, $18-16=2$, $27-25=2$. Constant gap = 2.`}
              </p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">Write the formula</span>
              <p className="lrn-step-content">
                {`$t_n = n^2 + 2$. Check: $t_5 = 25 + 2 = 27$. Correct.`}
              </p>
            </div>
          </div>

          <viz.QuadraticSequencePlot C={C} />

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>
              {`For 4, 7, 12, 19, … compare to $n^2$. What is the offset? Write the nth term formula. Form your answer before reading on.`}
            </p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                {`$n^2$ gives 1, 4, 9, 16. Differences: $4-1=3$, $7-4=3$, $12-9=3$, $19-16=3$. Constant gap = 3. So $t_n = n^2 + 3$.`}
              </p>
            </details>
          </div>

          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>
              {`The first differences of $n^2$ are $3, 5, 7, 9, \\ldots$ (the odd numbers). These go up by 2 each time. So the second differences of $n^2$ are always 2.`}
            </p>
            <p>
              {`Any sequence with constant second difference 2 must be $n^2 + c$ for some fixed $c$. A scaled version like $2n^2$ has second differences of 4. In general, second difference $= 2a$ means the formula starts with $an^2$.`}
            </p>
          </div>

          <div className="lrn-steps">
            <div className="lrn-step">
              <span className="lrn-step-title">{`Use the $2a$ rule on 2, 8, 18, 32, …`}</span>
              <p className="lrn-step-content">
                {`First differences: $8-2=6$, $18-8=10$, $32-18=14$. Second differences: $10-6=4$, $14-10=4$. Constant second difference = 4.`}
              </p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">{`Recover $a$ and write the formula`}</span>
              <p className="lrn-step-content">
                {`Second difference $= 2a$, so $a = \\frac{4}{2} = 2$. The formula is $t_n = 2n^2$. Check: $2 \\times 1^2 = 2$, $2 \\times 2^2 = 8$, $2 \\times 3^2 = 18$, $2 \\times 4^2 = 32$. Correct.`}
              </p>
            </div>
          </div>

          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Linear sequence</span>
              <p>
                {`Constant first difference. Formula: $t_n = an + b$. The sequence grows in a straight line.`}
              </p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Quadratic sequence</span>
              <p>
                {`Constant second difference. Formula: $t_n = n^2 + c$. The sequence curves upward.`}
              </p>
            </div>
          </div>

          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Positive coefficient</span>
              <p>{`$t_n = n^2$ gives 1, 4, 9, 16, … (the sequence grows rapidly upward).`}</p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Negative coefficient</span>
              <p>{`$t_n = -n^2$ gives -1, -4, -9, -16, … (the sequence falls rapidly).`}</p>
            </div>
          </div>

          <h3>Cubic Sequences</h3>
          <p>
            A <strong>cube number</strong> is {`$n^3$`}, for example {`$2^3 = 8$`} and{' '}
            {`$3^3 = 27$`}. If the second differences are not constant but the third differences
            are, the nth term involves {`$n^3$`}.
          </p>
          <p>
            Example: {`$t_n = n^3 + 1$`} gives 2, 9, 28, 65, &hellip; Another: {`$t_n = 2n^3$`}{' '}
            gives 2, 16, 54, 128, &hellip;
          </p>

          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              {`For 1, 8, 27, 64, … the first differences are 7, 19, 37. What are the second differences? What are the third differences? What does that tell you?`}
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                {`Second differences: $19-7=12$, $37-19=18$. Not constant. Third differences: $18-12=6$. Constant third difference means the formula involves $n^3$. The third difference of $n^3$ is always 6.`}
              </p>
            </details>
          </div>

          <div className="lrn-faded">
            <div className="lrn-faded-phase">
              <span className="lrn-faded-label">COMPLETE EXAMPLE</span>
              <p>{`Identify $t_n = n^3 + 1$ from the sequence 2, 9, 28, 65, …`}</p>
              <ol className="lrn-list">
                <li>{`First differences: 7, 19, 37, … Not constant.`}</li>
                <li>{`Second differences: 12, 18, … Not constant.`}</li>
                <li>{`Third differences: 6, 6, … Constant. Formula involves $n^3$.`}</li>
                <li>{`Compare to $n^3$: 1, 8, 27, 64. Gap: $2-1=1$, $9-8=1$. Constant gap = 1.`}</li>
                <li>{`Formula: $t_n = n^3 + 1$.`}</li>
              </ol>
            </div>
            <div className="lrn-faded-phase lrn-faded-partial">
              <span className="lrn-faded-label">YOUR TURN: PARTIAL</span>
              <p>{`Identify $2n^3$ from the sequence 2, 16, 54, 128, …`}</p>
              <ol className="lrn-list">
                <li>{`First differences: 14, 38, 74, … Not constant.`}</li>
                <li>{`Second differences: ?, ?. Are they constant?`}</li>
                <li>{`Third differences: ?. Constant?`}</li>
                <li>{`Compare to $n^3$. What is the ratio or gap?`}</li>
                <li>Write the formula.</li>
              </ol>
            </div>
            <div className="lrn-faded-phase">
              <span className="lrn-faded-label">INDEPENDENT PRACTICE</span>
              <p>{`Find the nth term of 0, 7, 26, 63, … (hint: compare to $n^3$)`}</p>
            </div>
          </div>

          <viz.CubicSequencePlot C={C} />

          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Quadratic sequence</span>
              <p>{`Constant second difference. Formula involves $n^2$.`}</p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Cubic sequence</span>
              <p>{`Constant third difference. Formula involves $n^3$.`}</p>
            </div>
          </div>

          <p>
            Sequences that multiply by a constant each step behave very differently. That is the
            focus of the next page.
          </p>
        </>,

        <>
          <h2>Algebraic Patterns and Special Identities</h2>
          <p>
            Some number patterns are more than sequences. They are <strong>identities</strong> (an
            identity is an equation true for every value of {`$n$`}) that hold for every positive
            integer. Recognising them lets you complete any line in the pattern and verify the
            general rule.
          </p>

          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              {`$3 \\times 4 = 3 + 3^2$. Does the same pattern hold for $4 \\times 5$ and $5 \\times 6$? What is the general identity?`}
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                {`$4 \\times 5 = 20 = 4 + 4^2 = 4 + 16 = 20$. True. $5 \\times 6 = 30 = 5 + 5^2 = 5 + 25 = 30$. True. General identity: $n(n+1) = n + n^2$.`}
              </p>
            </details>
          </div>

          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>
              {`$n(n+1) = n^2 + n = n + n^2$. Both sides equal the same expression. The identity rearranges the product of two consecutive integers.`}
            </p>
          </div>

          <h3>Odd Numbers and Cube Numbers</h3>
          <p>
            Group consecutive odd numbers starting from 1: the first group has 1 odd number, the
            second has 2, the third has 3, and so on. Each group sums to a perfect cube.
          </p>
          <p>
            {`This works because the sum of the first $n$ odd numbers is always $n^2$: $1 + 3 + 5 + \\cdots + (2n-1) = n^2$. Each L-shaped layer added to a square is the next odd number.`}
          </p>
          <ul className="lrn-list">
            <li>{`Group 1: $1 = 1^3$`}</li>
            <li>{`Group 2: $3 + 5 = 8 = 2^3$`}</li>
            <li>{`Group 3: $7 + 9 + 11 = 27 = 3^3$`}</li>
            <li>{`Group 4: $13 + 15 + 17 + 19 = 64 = 4^3$`}</li>
          </ul>

          <viz.OddSumCubes C={C} />

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>
              What is the first odd number in group 5? What is the sum of group 5? Form your answer
              before reading on.
            </p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                {`The last odd number in group 4 is 19. Group 5 has 5 terms. The next five odd numbers after 19 are 21, 23, 25, 27, 29. Their sum: $21+23+25+27+29 = 125 = 5^3$. Correct.`}
              </p>
            </details>
          </div>

          <h3>Triangular Numbers</h3>
          <p>
            {`How do you add $1 + 2 + 3 + \\cdots + 10$ without adding ten numbers one by one? Pair the ends. The first and last add to $1 + 10 = 11$. The next pair is $2 + 9 = 11$. Every pair sums to 11.`}
          </p>
          <p>
            {`Ten numbers make 5 pairs, and each pair sums to 11. So the total is $5 \\times 11 = 55$. The same trick works for any $n$: you get $\\frac{n}{2}$ pairs, each summing to $n+1$.`}
          </p>

          <div className="lrn-definition">
            <span className="lrn-definition-term">Triangular number</span>
            <div className="lrn-definition-desc">
              <p>
                {`The sum of the first $n$ counting numbers, $1 + 2 + \\cdots + n$. The pairing trick gives the formula $T_n = \\frac{n(n+1)}{2}$.`}
              </p>
            </div>
          </div>

          <p>
            {`Check with a small case: $1 + 2 + 3 + 4 = 10 = \\frac{4 \\times 5}{2}$. And $1 + 2 + \\cdots + 10 = \\frac{10 \\times 11}{2} = 55$.`}
          </p>

          <h3>Sum of Cubes Identity</h3>
          <p>
            {`The sum of the first $n$ cube numbers equals the square of the sum of the first $n$ counting numbers:`}
          </p>
          <div className="lrn-eq lrn-eq-hero">
            {`$$1^3 + 2^3 + 3^3 + \\cdots + n^3 = \\left(\\frac{n(n+1)}{2}\\right)^2$$`}
          </div>
          <p>
            {`Check: $1^3 = 1 = 1^2$. Then $1^3 + 2^3 = 9 = 3^2 = (1+2)^2$. Then $1^3 + 2^3 + 3^3 = 36 = 6^2 = (1+2+3)^2$.`}
          </p>
          <p>
            {`To find $1^3 + 2^3 + \\cdots + 10^3$: the sum $1 + 2 + \\cdots + 10 = 55$. So the answer is $55^2 = 3025$.`}
          </p>

          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>
              {`This is Nicomachus's identity. Each new line in the pattern squares the running total of counting numbers.`}
            </p>
            <p>
              {`The odd-number grouping from the previous section shows why. Each $n^3$ is the sum of the $n$ odd numbers in the $n$th group. The running total of those groups builds up to the square of the triangular number $T_n = \\frac{n(n+1)}{2}$.`}
            </p>
          </div>

          <p>
            Stack square mosaics of sides 1, 2, 3, &hellip;, {`$n$`} in a corner. The total tiles
            equal {`$(1+2+\\ldots+n)^2$`}. That is Nicomachus's identity in physical form.
          </p>

          <viz.NicomachusSquares C={C} />

          <div className="lrn-faded">
            <div className="lrn-faded-phase">
              <span className="lrn-faded-label">COMPLETE EXAMPLE</span>
              <p>{`Compute $1^3 + 2^3 + \\cdots + 10^3$ using the identity.`}</p>
              <ol className="lrn-list">
                <li>{`Sum $1 + 2 + \\cdots + 10 = \\frac{10 \\times 11}{2} = 55$.`}</li>
                <li>{`Square the result: $55^2 = 3025$.`}</li>
              </ol>
            </div>
            <div className="lrn-faded-phase lrn-faded-partial">
              <span className="lrn-faded-label">YOUR TURN: PARTIAL</span>
              <p>{`Compute $1^3 + 2^3 + \\cdots + 5^3$.`}</p>
              <ol className="lrn-list">
                <li>{`Sum $1 + 2 + 3 + 4 + 5 = ?$`}</li>
                <li>Square the result.</li>
              </ol>
            </div>
            <div className="lrn-faded-phase">
              <span className="lrn-faded-label">INDEPENDENT PRACTICE</span>
              <p>{`Compute $1^3 + 2^3 + \\cdots + 20^3$.`}</p>
            </div>
          </div>
        </>
      ]
    },
    practice: [
      {
        q: `Continue the sequence: $1, 5, 9, 13, \\ldots$ What is the next term?`,
        a: `The next term is 17. The first difference is 4 each time: $5-1=4$, $9-5=4$, $13-9=4$. Adding 4 to 13 gives 17. The constant first difference confirms this is a linear sequence.`
      },
      {
        type: 'predict',
        q: `A sequence starts 2, 4, 7, 11, 16, … The first differences are 2, 3, 4, 5. Predict the next term and the term after that.`,
        a: `The next first difference is 6. So the next term is $16 + 6 = 22$. The one after uses difference 7: $22 + 7 = 29$. The first differences increase by 1 each time, so the sequence is quadratic.`
      },
      {
        q: `Find the nth term of the sequence 3, 8, 13, 18, 23, …`,
        a: `The nth term is $t_n = 5n - 2$. The first difference is 5, so start with the $5n$ column: 5, 10, 15, 20, 25. Each actual term is 2 less than the matching $5n$ value: $3 - 5 = -2$. The constant offset gives $t_n = 5n - 2$.`
      },
      {
        q: `A sequence has nth term $t_n = 5n - 2$. What is the 20th term?`,
        a: `The 20th term is 98. Substitute $n = 20$: $t_{20} = 5 \\times 20 - 2 = 100 - 2 = 98$. Using the explicit formula avoids listing all 20 terms.`
      },
      {
        q: `Explain why the term-to-term rule "add 4" is less useful than the nth term formula $t_n = 4n - 3$ for finding the 50th term.`,
        a: `The nth term formula gives $t_{50} = 4 \\times 50 - 3 = 197$ in one step. The term-to-term rule requires adding 4 a total of 49 times, starting from $t_1 = 1$. The explicit formula is faster for any large $n$.`
      },
      {
        q: `What is the missing term in the sequence $1, 6, ?, 16$?`,
        a: `The missing term is 11. From 1 to 16 is three equal steps: $16 - 1 = 15$, so each step is $\\frac{15}{3} = 5$. The sequence is 1, 6, 11, 16 with first difference 5.`
      },
      {
        type: 'self-explain',
        q: `Explain in your own words why $t_n = an + b$ is the same as "first term + step × (n−1)". Use $t_n = 5n - 2$ as an example.`,
        a: `$t_1 = 5(1) - 2 = 3$. Each step adds 5. So $t_n = 3 + 5(n-1) = 3 + 5n - 5 = 5n - 2$. They are the same formula rearranged. The offset $b = t_1 - a$ captures the starting value minus one step.`
      },
      {
        q: `The Fibonacci-style sequence starts 1, 3, 4, 7, 11, … What are the next three terms?`,
        a: `The next three terms are 18, 29, 47. Each term equals the sum of the two before it: $7 + 11 = 18$, $11 + 18 = 29$, $18 + 29 = 47$. This is the Fibonacci-style rule.`
      },
      {
        q: `For matchstick houses where $h = 1$ gives 5 matchsticks and each new house adds 4, find the number of matchsticks for 10 houses.`,
        a: `The formula is $m = 4h + 1$. For $h = 10$: $m = 4 \\times 10 + 1 = 41$ matchsticks. The formula comes from the constant first difference of 4 and the offset of 1 (the extra matchstick on the left wall).`
      },
      {
        q: `Identify whether 3, 6, 11, 18, 27, … is linear or quadratic. Give evidence.`,
        a: `The sequence is quadratic. First differences: 3, 5, 7, 9 (not constant, so not linear). Second differences: 2, 2, 2 (constant). A constant second difference means the nth term involves $n^2$.`
      },
      {
        q: `Find the nth term of 3, 6, 11, 18, 27, …`,
        a: `The nth term is $t_n = n^2 + 2$. Compare to $n^2$: 1, 4, 9, 16, 25. Differences: $3-1=2$, $6-4=2$, $11-9=2$. Constant gap = 2. Check: $t_5 = 25 + 2 = 27$. Correct.`
      },
      {
        q: `A sequence of blue tiles $b$ is surrounded by white tiles $w$. When $b = 1$, $w = 5$. When $b = 2$, $w = 6$. Find the formula for $w$ in terms of $b$.`,
        a: `The formula is $w = b + 4$. The first difference of $w$ is 1. The $1 \\times b$ column is 1, 2. The offset is $5 - 1 = 4$. The 4 extra tiles are one on each side of the row plus one top and one bottom.`
      },
      {
        q: `Find the nth term of 4, 7, 12, 19, …`,
        a: `The nth term is $t_n = n^2 + 3$. Compare to $n^2$: 1, 4, 9, 16. Differences: $4-1=3$, $7-4=3$, $12-9=3$, $19-16=3$. Constant gap = 3. Check: $t_4 = 16 + 3 = 19$. Correct.`
      },
      {
        type: 'self-explain',
        q: `Explain why the second-difference test works. If you add a constant $c$ to every $n^2$ term, why does the second difference stay the same?`,
        a: `The second difference measures how fast the first differences change. Adding a constant $c$ shifts every term by the same amount, so it does not change any difference at all. Only the $n^2$ part drives the second differences. The second difference of $n^2$ is always 2, so $n^2 + c$ also has second difference 2 for any $c$.`
      },
      {
        q: `What is the relationship between $1^3 + 2^3 + 3^3$ and the sum $1 + 2 + 3$?`,
        a: `$1^3 + 2^3 + 3^3 = 1 + 8 + 27 = 36 = 6^2 = (1+2+3)^2$. The sum of the first three cubes equals the square of the sum of the first three counting numbers. This is Nicomachus's identity.`
      },
      {
        q: `Use the identity $1^3 + 2^3 + \\cdots + n^3 = \\left(\\frac{n(n+1)}{2}\\right)^2$ to find $1^3 + 2^3 + \\cdots + 10^3$.`,
        a: `The sum equals $\\left(\\frac{10 \\times 11}{2}\\right)^2 = 55^2 = 3025$. The sum $1 + 2 + \\cdots + 10 = 55$, so squaring gives 3025. This avoids calculating each cube individually.`
      },
      {
        q: `The rule for a sequence is: square the previous term, then subtract 1. Starting with $t_1 = 2$, find $t_2$ and $t_3$.`,
        a: `$t_2 = 2^2 - 1 = 3$. $t_3 = 3^2 - 1 = 8$. Square the previous term then subtract 1 each time. This is a recursive rule that needs only one starting value.`
      },
      {
        q: `Find the nth term of 6, 10, 14, 18, …`,
        a: `The nth term is $t_n = 4n + 2$. The first difference is 4. The $4n$ column is 4, 8, 12, 16. The offset is $6 - 4 = 2$. Check: $t_2 = 4 \\times 2 + 2 = 10$. Correct.`
      },
      {
        q: `A table gives $n = 6, 7, 8, 9, 10$ and $t = 14, 17, 20, 23, 26$. Find the nth term.`,
        a: `The nth term is $t_n = 3n - 4$. The first difference of $t$ is 3. The $3n$ column at these positions: 18, 21, 24, 27, 30. Offset: $14 - 18 = -4$. Check: $n = 8 \\to 3 \\times 8 - 4 = 20$. Correct.`
      },
      {
        q: `Find the nth term of 2, 8, 18, 32, …`,
        a: `The nth term is $t_n = 2n^2$. Compare to $n^2$: 1, 4, 9, 16. The ratios are all 2: $\\frac{2}{1}=2$, $\\frac{8}{4}=2$, $\\frac{18}{9}=2$. So $t_n = 2n^2$.`
      },
      {
        q: `For matchstick triangles where $t = 1$ gives $m = 3$ and $t = 2$ gives $m = 5$, find the formula for $m$ in terms of $t$.`,
        a: `The formula is $m = 2t + 1$. The first difference is 2. The $2t$ column is 2, 4. Offset: $3 - 2 = 1$. Check: $t = 3 \\to 2 \\times 3 + 1 = 7$ matchsticks.`
      },
      {
        q: `Find the nth term of $0, 3, 8, 15, \\ldots$`,
        a: `The nth term is $t_n = n^2 - 1$. Compare to $n^2$: 1, 4, 9, 16. Differences: $0-1=-1$, $3-4=-1$, $8-9=-1$, $15-16=-1$. Constant gap $= -1$. Check: $t_4 = 16 - 1 = 15$. Correct.`
      },
      {
        q: `Find the nth term of $-6, -3, 2, 9, \\ldots$`,
        a: `The nth term is $t_n = n^2 - 7$. Compare to $n^2$: 1, 4, 9, 16. Differences: $-6-1=-7$, $-3-4=-7$, $2-9=-7$, $9-16=-7$. Constant gap $= -7$. Check: $t_3 = 9 - 7 = 2$. Correct.`
      },
      {
        q: `A table gives $n = 2, 3, 4, 5$ and $k = 17, 24, 31, 38$. Find the nth term formula for $k$.`,
        a: `The formula is $k = 7n + 3$. The first difference of $k$ is 7. The $7n$ column: 14, 21, 28, 35. Offset: $17 - 14 = 3$. Check: $n = 5 \\to 7 \\times 5 + 3 = 38$. Correct.`
      },
      {
        q: `The odd numbers are grouped as: $\\{1\\}$, $\\{3, 5\\}$, $\\{7, 9, 11\\}$, $\\{13, 15, 17, 19\\}$. What is the sum of the fifth group?`,
        a: `The sum of the fifth group is $5^3 = 125$. The five odd numbers after 19 are 21, 23, 25, 27, 29. Their sum: $21 + 23 + 25 + 27 + 29 = 125$. The pattern says the $n$th group sums to $n^3$.`
      },
      {
        q: `Why does $n(n+1) = n + n^2$? Verify with $n = 5$.`,
        a: `$n(n+1) = n^2 + n = n + n^2$. Both expressions are equal because addition is commutative. For $n = 5$: $5 \\times 6 = 30 = 5 + 25 = 5 + 5^2 = 30$. Verified.`
      },
      {
        q: `Find the nth term of $2, 9, 28, 65, \\ldots$`,
        a: `The nth term is $t_n = n^3 + 1$. Check: $t_1 = 1 + 1 = 2$, $t_2 = 8 + 1 = 9$, $t_3 = 27 + 1 = 28$, $t_4 = 64 + 1 = 65$. The sequence is cube numbers each shifted up by 1.`
      },
      {
        type: 'predict',
        q: `A sequence has $t_n = -2n^2 + 5$. Will the sequence be increasing or decreasing? Predict the first four terms before calculating.`,
        a: `The sequence is decreasing. $t_1 = -2 + 5 = 3$, $t_2 = -8 + 5 = -3$, $t_3 = -18 + 5 = -13$, $t_4 = -32 + 5 = -27$. The $-2n^2$ term grows faster than the constant 5, so terms become more negative each step.`
      },
      {
        q: `Find the nth term of $0, 7, 26, 63, \\ldots$`,
        a: `The nth term is $t_n = n^3 - 1$. Compare to $n^3$: 1, 8, 27, 64. Gap: $0-1=-1$, $7-8=-1$, $26-27=-1$, $63-64=-1$. Constant gap $= -1$. Check: $t_4 = 64 - 1 = 63$. Correct.`
      },
      {
        type: 'self-explain',
        q: `Explain in your own words why the odd-cubes grouping always gives $n^3$ as the sum. Why does it work for every group, not just the first few?`,
        a: `Each group $n$ contains $n$ consecutive odd numbers. The $n$th group starts right after the $(n-1)$th group ends. The sum of any $n$ consecutive odd numbers starting from the right place equals $n^3$. This is because the sum of the first $n$ odd numbers is $n^2$. Each L-shaped layer in the square adds one more layer. The pattern holds for all positive integers, not just small ones.`
      },
      {
        q: `For blue tiles $b = 2, 3, 4, 5$ and white tiles $w = 10, 12, 14, 16$, find the formula $w$ in terms of $b$.`,
        a: `The formula is $w = 2b + 6$. The first difference of $w$ is 2. The $2b$ column: 4, 6, 8, 10. Offset: $10 - 4 = 6$. Check: $b = 5 \\to 2 \\times 5 + 6 = 16$. Correct.`
      },
      {
        q: `A student says 1, 4, 9, 16 is arithmetic because first differences 3, 5, 7 differ by the same amount each time. What is wrong?`,
        a: `The student has confused the second differences with the first differences. The first differences 3, 5, 7 are not constant, so the sequence is not arithmetic. A constant second difference (of 2 here) means the sequence is quadratic, with nth term $n^2$.`
      },
      {
        q: `A table gives $n = 12, 13, 14, 15$ and $t = 61, 66, 71, 76$. Find the nth term.`,
        a: `The nth term is $t_n = 5n + 1$. The first difference is 5. The $5n$ column: 60, 65, 70, 75. Offset: $61 - 60 = 1$. Check: $n = 15 \\to 5 \\times 15 + 1 = 76$. Correct.`
      }
    ],
    reference: {
      category: 'Quick Reference',
      title: 'Number Sequences and Patterns',
      sections: [
        <>
          <h2>Key Formulas</h2>

          <h3>Linear (Arithmetic) Sequence</h3>
          <p>When to use: the first differences between consecutive terms are constant.</p>
          <div className="lrn-eq lrn-eq-hero">{`$$t_n = an + b$$`}</div>
          <p>{`$a$ = first difference. $b$ = offset found by comparing $an$ to actual terms.`}</p>

          <h3>Quadratic Sequence</h3>
          <p>When to use: the second differences are constant but the first differences are not.</p>
          <div className="lrn-eq lrn-eq-hero">{`$$t_n = n^2 + c \\quad \\text{or} \\quad t_n = an^2$$`}</div>
          <p>
            {`$c$ = constant gap between the sequence and $n^2$. If the second difference is $2a$, the formula starts with $an^2$.`}
          </p>

          <h3>Cubic Sequence</h3>
          <p>When to use: third differences are constant.</p>
          <div className="lrn-eq">{`$$t_n = n^3 + c \\quad \\text{or} \\quad t_n = an^3$$`}</div>

          <h3>Sum of Cubes Identity (Nicomachus)</h3>
          <p>{`When to use: summing the first $n$ cube numbers.`}</p>
          <div className="lrn-eq lrn-eq-hero">{`$$1^3 + 2^3 + \\cdots + n^3 = \\left(\\frac{n(n+1)}{2}\\right)^2$$`}</div>

          <h3>Product of Consecutive Integers</h3>
          <p>{`When to use: recognising the $n(n+1)$ identity.`}</p>
          <div className="lrn-eq">{`$$n(n+1) = n + n^2$$`}</div>

          <h3>Fibonacci-Style Rule</h3>
          <p>When to use: each term is the sum of the two before it.</p>
          <div className="lrn-eq">{`$$t_n = t_{n-1} + t_{n-2} \\quad \\text{(needs two seeds)}$$`}</div>

          <h3>Matchstick Houses</h3>
          <div className="lrn-eq">{`$$m = 4h + 1$$`}</div>
          <p>{`$m$ = matchsticks, $h$ = number of houses.`}</p>

          <h2>Sequence Types at a Glance</h2>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: FONT_CONTROL }}>
            <thead>
              <tr>
                {['Type', '1st diff', '2nd diff', '3rd diff', 'Formula'].map(h => (
                  <th
                    key={h}
                    style={{
                      borderBottom: '1px solid var(--border-default)',
                      padding: '6px 10px',
                      textAlign: 'left',
                      color: 'var(--text-primary)'
                    }}
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[
                ['Linear', 'constant', 'zero', '-', 'an + b'],
                ['Quadratic', 'changing', 'constant', 'zero', 'n² + c  or  an²'],
                ['Cubic', 'changing', 'changing', 'constant', 'an³ + …']
              ].map(([type, d1, d2, d3, formula]) => (
                <tr key={type}>
                  {[type, d1, d2, d3, formula].map((cell, i) => (
                    <td
                      key={i}
                      style={{
                        padding: '6px 10px',
                        borderBottom: '1px solid var(--border-subtle)',
                        color: i === 4 ? 'var(--text-secondary)' : 'var(--text-primary)'
                      }}
                    >
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>

          <h2>Method: Finding the nth Term (Linear)</h2>
          <ol className="lrn-list">
            <li>Find the first difference {`$a$`} between consecutive terms.</li>
            <li>{`Write the $an$ column for each $n$ in the table.`}</li>
            <li>
              Subtract each {`$an$`} value from the actual term to find the offset {`$b$`}.
            </li>
            <li>{`Check that $b$ is constant across all rows.`}</li>
            <li>{`Write $t_n = an + b$.`}</li>
          </ol>

          <h2>Key Terms</h2>
          <div className="lrn-definition">
            <span className="lrn-definition-term">First difference</span>
            <div className="lrn-definition-desc">
              <p>{`$t_{n+1} - t_n$. Constant for linear sequences.`}</p>
            </div>
          </div>
          <div className="lrn-definition">
            <span className="lrn-definition-term">Second difference</span>
            <div className="lrn-definition-desc">
              <p>
                The difference between consecutive first differences. Constant for quadratic
                sequences.
              </p>
            </div>
          </div>
          <div className="lrn-definition">
            <span className="lrn-definition-term">Identity</span>
            <div className="lrn-definition-desc">
              <p>An equation that is true for every value of the variable.</p>
            </div>
          </div>
          <div className="lrn-definition">
            <span className="lrn-definition-term">Triangular number</span>
            <div className="lrn-definition-desc">
              <p>{`$T_n = \\frac{n(n+1)}{2}$. The sum of the first $n$ counting numbers.`}</p>
            </div>
          </div>
          <div className="lrn-definition">
            <span className="lrn-definition-term">Mapping diagram</span>
            <div className="lrn-definition-desc">
              <p>{`A three-column table: $n$ | $an$ | $t_n$. Used to spot the offset $b$ in the formula $t_n = an + b$.`}</p>
            </div>
          </div>
          <div className="lrn-definition">
            <span className="lrn-definition-term">Figural sequence</span>
            <div className="lrn-definition-desc">
              <p>
                A sequence defined by a growing diagram. Count objects to build a numeric table,
                then find the nth term normally.
              </p>
            </div>
          </div>
        </>
      ]
    }
  }
}

export default function NumberSequencesAndPatterns() {
  const config = useConfig()
  return <LearningTemplate config={config} />
}
