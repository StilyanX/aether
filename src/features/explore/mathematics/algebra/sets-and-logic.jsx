import { LearningTemplate } from '../../../../components/learning/learning-template'
import { TwoSetVennViz } from '../../../../components/viz'

function useConfig() {
  const config = {
    cssPrefix: 'stl',
    documentTitle: 'Sets and Logic - AETHER',
    learning: {
      groupTitle: 'Proof, Sets and Logic',
      category: 'Sentential and Quantificational Logic',
      title: 'Sets and Logic',
      subtitle:
        'A deductive argument is a list of statements ending in a conclusion, and this topic builds the tools to test whether that conclusion truly follows.',
      sections: [
        <>
          <div className="lrn-header">
            <div>
              <h2>Deductive Reasoning and Logical Connectives</h2>
            </div>
          </div>

          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>{`Look at this argument: "If it rains, the game is canceled. It is raining. So the game is canceled." Do you think an argument like this is always correct, no matter what "rain" and "game" actually mean?`}</p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>{`Yes. This argument has a fixed shape: if $P$ then $Q$, $P$ is true, so $Q$ is true. Swap in any statements for $P$ and $Q$ and the argument stays correct, because validity depends on structure, not on what "rain" and "game" mean.`}</p>
            </details>
          </div>

          <h3>What Is a Deductive Argument?</h3>
          <p>{`A deductive argument is a list of statements. The last statement is the conclusion. The statements before it are premises. The premises are meant to prove the conclusion.`}</p>
          <p>
            <strong>When to use this:</strong>{' '}
            {`Reach for this idea whenever you need to check whether a conclusion truly follows from a set of starting statements.`}
          </p>
          <p>{`An argument is valid when the premises being true forces the conclusion to be true. An argument is invalid when the premises could all be true while the conclusion is false.`}</p>

          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Valid argument</span>
              <p>{`A valid argument's form guarantees the conclusion whenever the premises hold.`}</p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Invalid argument</span>
              <p>{`An invalid argument's form allows a case where the premises hold but the conclusion fails, even if in one specific case the conclusion happens to come out true anyway.`}</p>
            </div>
          </div>

          <h3>Worked Example: Four Arguments About Rain, Snow, and Work</h3>
          <p>{`Here are four small arguments to practice spotting premises, conclusions, and validity.`}</p>

          <div className="lrn-steps">
            <div className="lrn-step">
              <span className="lrn-step-title">{`"If it snows today, school will be canceled. It is snowing today. Therefore, school is canceled."`}</span>
              <div className="lrn-step-content">
                <p>{`The premises are "if it snows, school is canceled" and "it is snowing." The conclusion is "school is canceled." This argument is valid: if both premises are true, the conclusion must be true.`}</p>
              </div>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">{`"If today is Sunday, then I don't have to go to work. Today is Sunday. Therefore, I don't have to go to work."`}</span>
              <div className="lrn-step-content">
                <p>{`This has the same structure as the first. It is valid for the same reason.`}</p>
              </div>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">{`"If I finish my homework, I will go out tonight. I did not finish my homework. Therefore, I will not go out tonight."`}</span>
              <div className="lrn-step-content">
                <p>{`This looks similar, but it isn't valid. The premises could both be true while the conclusion is false: you might go out anyway for some other reason. This argument is invalid.`}</p>
              </div>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">{`"The butler is lying, or the maid is lying. The maid is not lying. Therefore, the cook is lying."`}</span>
              <div className="lrn-step-content">
                <p>{`This argument is invalid. Nothing in the premises says anything about the cook. The conclusion adds new information the premises never supported.`}</p>
              </div>
            </div>
          </div>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>{`Why does the third argument fail even though its structure looks a lot like the first two?`}</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>{`The first two arguments affirm the antecedent, the "if" part $P$: they assert $P$ is true and conclude $Q$. The third argument denies the antecedent instead: it asserts $\\neg P$ and tries to conclude $\\neg Q$. That step is not guaranteed, because $Q$ could still be true for a completely different reason.`}</p>
            </details>
          </div>

          <h3>Named Case: The Framger Widget</h3>
          <p>{`A nonsense argument makes the point sharply: "All framgers are wrompal. This mechanism is a framger. Therefore, this mechanism is wrompal." Nobody knows what a "framger" or a "wrompal mechanism" is. The argument is still valid. The conclusion follows from the premises no matter what the made-up words mean.`}</p>

          <h3>Logical Connectives</h3>
          <p>{`A connective joins simple statements into compound ones. Three connectives matter most here.`}</p>
          <ul className="lrn-list">
            <li>{`$\\land$ means "and." $P \\land Q$ is true only when both $P$ and $Q$ are true. This is a conjunction.`}</li>
            <li>{`$\\lor$ means "or." $P \\lor Q$ is true when at least one of $P$ and $Q$ is true. This is a disjunction.`}</li>
            <li>{`$\\neg$ means "not." $\\neg P$ flips the truth value of $P$, its true-or-false value.`}</li>
          </ul>
          <p>{`A well-formed formula is a string of symbols that follows the grammar rules for building statements, the way a grammatical sentence follows English grammar.`}</p>

          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Conjunction</span>
              <p>{`$\\land$ demands both parts be true.`}</p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Disjunction</span>
              <p>{`$\\lor$ only demands one part be true. This one-word difference changes every truth table built from them.`}</p>
            </div>
          </div>

          <h3>Worked Example: Reading English Sentences as Logical Forms</h3>
          <p>{`Take "John went to the store, or we're out of eggs." Let $S$ mean "John went to the store" and $E$ mean "we're out of eggs." The sentence becomes $S \\lor E$.`}</p>
          <p>{`Take "Joe is going to leave home and not come back." Let $L$ mean "Joe leaves home" and $C$ mean "Joe comes back." The sentence becomes $L \\land \\neg C$.`}</p>
          <p>{`Take "Either Bill is at work and Jane isn't, or Jane is at work and Bill isn't." Let $B$ mean "Bill is at work" and $J$ mean "Jane is at work." The sentence becomes $(B \\land \\neg J) \\lor (J \\land \\neg B)$.`}</p>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>{`Why does the third sentence need both $\\land$ and $\\lor$ together, instead of just one connective?`}</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>{`The sentence describes two separate situations, each one a conjunction of two facts, joined by "either... or." Each situation ("Bill at work and Jane not" or "Jane at work and Bill not") needs $\\land$ to hold both parts together, and you need $\\lor$ to join the two whole situations.`}</p>
            </details>
          </div>

          <h3>Worked Example: Translating Formulas Back to English</h3>
          <p>{`Going the other direction also builds understanding. Let $S$ mean "John is stupid" and $L$ mean "John is lazy."`}</p>
          <p>{`$(\\neg S \\land L) \\lor S$ reads as "either John is not stupid and is lazy, or John is stupid."`}</p>
          <p>{`$\\neg S \\land (L \\lor S)$ reads as "John is not stupid, and either he is lazy or he is stupid." Notice the parentheses moved, and the meaning changed.`}</p>
          <p>{`$\\neg(S \\land L) \\lor S$ reads as "it is not the case that John is both stupid and lazy, or John is stupid."`}</p>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>{`Why do these three formulas give three different meanings, even though the same symbols $S$, $L$, and $\\neg$ appear in each one?`}</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>{`Where the parentheses sit changes which parts each connective joins. Moving $\\neg$, $\\land$, and $\\lor$ around the same three letters groups them differently each time, and a different grouping is a different formula with a different truth table.`}</p>
            </details>
          </div>

          <h3>Hidden Connectives in Math Notation</h3>
          <p>{`Math notation hides logical words inside familiar symbols.`}</p>
          <p>{`"$3 < \\pi < 4$" is a hidden conjunction. It means "$3 < \\pi$ and $\\pi < 4$." A similar hidden statement, "$\\sqrt{\\pi} \\neq 2$," works the same way: it packs a comparison into ordinary-looking notation, and unpacking it takes the same care.`}</p>

          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>{`Math writers use this shortcut constantly, so recognizing the hidden $\\land$ helps you unpack any chained inequality or comparison correctly.`}</p>
          </div>
        </>,

        <>
          <div className="lrn-header">
            <div>
              <h2>Truth Tables</h2>
            </div>
          </div>

          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>{`If you list every possible true/false combination for two statements $P$ and $Q$, how many rows does the table need?`}</p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>{`Four rows. Each of the two letters can independently be true or false, so there are $2 \\times 2 = 4$ combinations.`}</p>
            </details>
          </div>

          <h3>Building a Truth Table</h3>
          <p>{`A truth table lists every possible combination of true (T) and false (F) values for the simple statements inside a formula. Each row shows the resulting truth value of the whole formula for that combination.`}</p>
          <p>
            <strong>When to use this:</strong>{' '}
            {`Build a truth table whenever you need to know a formula's truth value in every possible case, or whenever you want to check if two formulas are equivalent.`}
          </p>
          <p>{`With one letter, a table has 2 rows. With two letters, 4 rows. With three letters, 8 rows. Each added letter doubles the row count.`}</p>

          <h3>{`Worked Example: Truth Table for $\\neg(P \\lor \\neg Q)$`}</h3>
          <p>{`Build the table in stages. First list every combination of $P$ and $Q$. Second, compute $\\neg Q$. Third, compute $P \\lor \\neg Q$. Fourth, negate that whole column to get $\\neg(P \\lor \\neg Q)$.`}</p>

          <table className="lrn-table">
            <thead>
              <tr>
                <th>{`$P$`}</th>
                <th>{`$Q$`}</th>
                <th>{`$\\neg Q$`}</th>
                <th>{`$P \\lor \\neg Q$`}</th>
                <th>{`$\\neg(P \\lor \\neg Q)$`}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>T</td>
                <td>T</td>
                <td>F</td>
                <td>T</td>
                <td>F</td>
              </tr>
              <tr>
                <td>T</td>
                <td>F</td>
                <td>T</td>
                <td>T</td>
                <td>F</td>
              </tr>
              <tr>
                <td>F</td>
                <td>T</td>
                <td>F</td>
                <td>F</td>
                <td>T</td>
              </tr>
              <tr>
                <td>F</td>
                <td>F</td>
                <td>T</td>
                <td>T</td>
                <td>F</td>
              </tr>
            </tbody>
          </table>

          <p>{`Only one row, where $P$ is false and $Q$ is true, makes the whole formula true.`}</p>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>{`Why is F,T the only row where $\\neg(P \\lor \\neg Q)$ comes out true?`}</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>{`$\\neg(P \\lor \\neg Q)$ is true only when $P \\lor \\neg Q$ is false, which needs both $P$ false and $\\neg Q$ false. $\\neg Q$ false means $Q$ is true. So the only row that works is $P$ false, $Q$ true.`}</p>
            </details>
          </div>

          <h3>{`Worked Example: Truth Table for $\\neg(P \\land Q) \\lor \\neg R$`}</h3>
          <p>{`This formula has three letters, so the table needs 8 rows.`}</p>

          <table className="lrn-table">
            <thead>
              <tr>
                <th>{`$P$`}</th>
                <th>{`$Q$`}</th>
                <th>{`$R$`}</th>
                <th>{`$P \\land Q$`}</th>
                <th>{`$\\neg(P \\land Q)$`}</th>
                <th>{`$\\neg R$`}</th>
                <th>{`$\\neg(P \\land Q) \\lor \\neg R$`}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>T</td>
                <td>T</td>
                <td>T</td>
                <td>T</td>
                <td>F</td>
                <td>F</td>
                <td>F</td>
              </tr>
              <tr>
                <td>T</td>
                <td>T</td>
                <td>F</td>
                <td>T</td>
                <td>F</td>
                <td>T</td>
                <td>T</td>
              </tr>
              <tr>
                <td>T</td>
                <td>F</td>
                <td>T</td>
                <td>F</td>
                <td>T</td>
                <td>F</td>
                <td>T</td>
              </tr>
              <tr>
                <td>T</td>
                <td>F</td>
                <td>F</td>
                <td>F</td>
                <td>T</td>
                <td>T</td>
                <td>T</td>
              </tr>
              <tr>
                <td>F</td>
                <td>T</td>
                <td>T</td>
                <td>F</td>
                <td>T</td>
                <td>F</td>
                <td>T</td>
              </tr>
              <tr>
                <td>F</td>
                <td>T</td>
                <td>F</td>
                <td>F</td>
                <td>T</td>
                <td>T</td>
                <td>T</td>
              </tr>
              <tr>
                <td>F</td>
                <td>F</td>
                <td>T</td>
                <td>F</td>
                <td>T</td>
                <td>F</td>
                <td>T</td>
              </tr>
              <tr>
                <td>F</td>
                <td>F</td>
                <td>F</td>
                <td>F</td>
                <td>T</td>
                <td>T</td>
                <td>T</td>
              </tr>
            </tbody>
          </table>

          <p>{`Only the first row comes out false.`}</p>

          <div className="lrn-faded">
            <div className="lrn-faded-phase">
              <span className="lrn-faded-label">COMPLETE EXAMPLE</span>
              <p>{`Build this 8-row table by working column by column from the innermost part outward, so every new column only uses columns you've already filled in.`}</p>
              <ol className="lrn-list">
                <li>{`Fill $P \\land Q$ first.`}</li>
                <li>{`Then fill $\\neg(P \\land Q)$.`}</li>
                <li>{`Then fill $\\neg R$.`}</li>
                <li>{`Combine the last two with $\\lor$.`}</li>
              </ol>
            </div>
            <div className="lrn-faded-phase lrn-faded-partial">
              <span className="lrn-faded-label">YOUR TURN: PARTIAL</span>
              <p>{`Build the table for $(P \\lor Q) \\land \\neg R$ following the same order.`}</p>
              <ol className="lrn-list">
                <li>{`Fill $P \\lor Q$ first: $\\rule{1cm}{0.5pt}$`}</li>
                <li>{`Fill $\\neg R$: $\\rule{1cm}{0.5pt}$`}</li>
                <li>{`Combine with $\\land$: $\\rule{1cm}{0.5pt}$`}</li>
              </ol>
            </div>
            <div className="lrn-faded-phase">
              <span className="lrn-faded-label">INDEPENDENT PRACTICE</span>
              <p>{`Build the full 8-row truth table for $(P \\land R) \\lor (\\neg Q \\land R)$ from the innermost part outward.`}</p>
            </div>
          </div>

          <h3>Building Tables Efficiently</h3>
          <p>{`Instead of a separate column for every sub-part, there is a compact method: write truth values directly under each connective symbol in the formula, working from the innermost part out. This saves space but follows the same logic as a full table: fill in the smallest pieces first, then combine outward. This method also settles an important question about $\\lor$: math always treats "or" as true when both parts are true, never as an either-or choice.`}</p>

          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>{`The order always goes from the most deeply nested parentheses outward, because you can't know the truth value of a connective until you know the truth values feeding into it.`}</p>
          </div>

          <h3>{`Worked Example: Checking Validity with a Truth Table`}</h3>
          <p>{`To check whether an argument is valid, build a truth table covering every statement in it. The argument is valid exactly when every row where all premises are true also has a true conclusion.`}</p>
          <p>{`Check $P \\lor Q$, $\\neg Q$, therefore $P$.`}</p>

          <table className="lrn-table">
            <thead>
              <tr>
                <th>{`$P$`}</th>
                <th>{`$Q$`}</th>
                <th>{`$P \\lor Q$`}</th>
                <th>{`$\\neg Q$`}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>T</td>
                <td>T</td>
                <td>T</td>
                <td>F</td>
              </tr>
              <tr>
                <td>T</td>
                <td>F</td>
                <td>T</td>
                <td>T</td>
              </tr>
              <tr>
                <td>F</td>
                <td>T</td>
                <td>T</td>
                <td>F</td>
              </tr>
              <tr>
                <td>F</td>
                <td>F</td>
                <td>F</td>
                <td>T</td>
              </tr>
            </tbody>
          </table>

          <p>{`Only the second row has both premises true ($P \\lor Q$ is T and $\\neg Q$ is T). In that row, $P$ is also true. So the argument is valid.`}</p>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>{`Why do you only need to check the rows where all the premises are true?`}</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>{`Validity only makes a promise about what happens when every premise holds. Rows where a premise is false say nothing about the argument's validity. The premises are not all true there, so the argument claims nothing about the conclusion in that row.`}</p>
            </details>
          </div>

          <h3>Worked Example: Two Arguments Tested for Validity</h3>
          <p>{`First argument, about being stupid or lazy: $(\\neg S \\land L) \\lor S$, $S$, therefore $\\neg L$. Here is the full table over $S$ and $L$. The two premises are the third column and the $S$ column.`}</p>

          <table className="lrn-table">
            <thead>
              <tr>
                <th>{`$S$`}</th>
                <th>{`$L$`}</th>
                <th>{`$(\\neg S \\land L) \\lor S$`}</th>
                <th>{`$\\neg L$`}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>T</td>
                <td>T</td>
                <td>T</td>
                <td>F</td>
              </tr>
              <tr>
                <td>T</td>
                <td>F</td>
                <td>T</td>
                <td>T</td>
              </tr>
              <tr>
                <td>F</td>
                <td>T</td>
                <td>T</td>
                <td>F</td>
              </tr>
              <tr>
                <td>F</td>
                <td>F</td>
                <td>F</td>
                <td>T</td>
              </tr>
            </tbody>
          </table>

          <p>{`Both premises hold in the top two rows, where $S$ is true and the third column is true. In the first row the conclusion $\\neg L$ is false while both premises are true. That single row makes the argument invalid.`}</p>

          <p>{`Second argument, about a butler, a cook, and lying: $\\neg(B \\land C)$, $L \\lor C$, therefore $L \\lor \\neg B$. Here is the full table over $B$, $C$, and $L$, with the two premises in the fourth and fifth columns.`}</p>

          <table className="lrn-table">
            <thead>
              <tr>
                <th>{`$B$`}</th>
                <th>{`$C$`}</th>
                <th>{`$L$`}</th>
                <th>{`$\\neg(B \\land C)$`}</th>
                <th>{`$L \\lor C$`}</th>
                <th>{`$L \\lor \\neg B$`}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>T</td>
                <td>T</td>
                <td>T</td>
                <td>F</td>
                <td>T</td>
                <td>T</td>
              </tr>
              <tr>
                <td>T</td>
                <td>T</td>
                <td>F</td>
                <td>F</td>
                <td>T</td>
                <td>F</td>
              </tr>
              <tr>
                <td>T</td>
                <td>F</td>
                <td>T</td>
                <td>T</td>
                <td>T</td>
                <td>T</td>
              </tr>
              <tr>
                <td>T</td>
                <td>F</td>
                <td>F</td>
                <td>T</td>
                <td>F</td>
                <td>F</td>
              </tr>
              <tr>
                <td>F</td>
                <td>T</td>
                <td>T</td>
                <td>T</td>
                <td>T</td>
                <td>T</td>
              </tr>
              <tr>
                <td>F</td>
                <td>T</td>
                <td>F</td>
                <td>T</td>
                <td>T</td>
                <td>T</td>
              </tr>
              <tr>
                <td>F</td>
                <td>F</td>
                <td>T</td>
                <td>T</td>
                <td>T</td>
                <td>T</td>
              </tr>
              <tr>
                <td>F</td>
                <td>F</td>
                <td>F</td>
                <td>T</td>
                <td>F</td>
                <td>T</td>
              </tr>
            </tbody>
          </table>

          <p>{`Both premises hold together in four rows: the third, fifth, sixth, and seventh. In every one of those rows the conclusion $L \\lor \\neg B$ is also true. So the argument is valid.`}</p>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>{`Why does finding just one row where the premises hold but the conclusion fails prove an argument invalid?`}</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>{`Validity requires the conclusion to hold in every row where the premises hold, with no exceptions. A single row where the premises hold and the conclusion fails is a counterexample, and one counterexample is enough to break a claim that something is true in every case.`}</p>
            </details>
          </div>

          <h3>Inclusive vs Exclusive Or</h3>
          <p>{`English "or" is sometimes unclear between two meanings. Exclusive or means exactly one of the two parts is true, not both. Inclusive or means at least one part is true, and both being true still counts.`}</p>

          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Inclusive or</span>
              <p>{`Math always uses inclusive or. When $P$ and $Q$ are both true, $P \\lor Q$ is still true.`}</p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Exclusive or</span>
              <p>{`Everyday language often means exclusive or, like "soup or salad" at a restaurant, but every logic truth table treats $\\lor$ as inclusive.`}</p>
            </div>
          </div>

          <h3>Worked Example: Checking Equivalence</h3>
          <p>{`Two formulas are logically equivalent when they have the same truth value in every row of a shared truth table.`}</p>
          <p>{`Compare $\\neg(P \\land Q)$, $\\neg P \\land \\neg Q$, and $\\neg P \\lor \\neg Q$ using a shared table over $P$ and $Q$, illustrated with the Yankees and the Red Sox as stand-ins for $P$ and $Q$. $\\neg(P \\land Q)$ and $\\neg P \\lor \\neg Q$ match in every row: both are false only when $P$ and $Q$ are both true. $\\neg P \\land \\neg Q$ is different: it's true only when both $P$ and $Q$ are false.`}</p>
          <p>{`So $\\neg(P \\land Q)$ is equivalent to $\\neg P \\lor \\neg Q$, but neither is equivalent to $\\neg P \\land \\neg Q$.`}</p>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>{`Why does swapping in real teams, the Yankees and the Red Sox, for $P$ and $Q$ help you see why $\\neg P \\land \\neg Q$ is the odd one out?`}</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>{`"It is not the case that the Yankees won and the Red Sox won" only requires at least one team to have lost, which matches $\\neg P \\lor \\neg Q$. "Neither team won" is a much stronger claim, requiring both to have lost, which matches $\\neg P \\land \\neg Q$ instead.`}</p>
            </details>
          </div>

          <h3>The Master List of Equivalence Laws</h3>
          <p>{`A block of standard laws lets you simplify formulas without building a truth table every time.`}</p>
          <ul className="lrn-list">
            <li>{`De Morgan's Laws: $\\neg(P \\land Q) \\equiv \\neg P \\lor \\neg Q$, and $\\neg(P \\lor Q) \\equiv \\neg P \\land \\neg Q$.`}</li>
            <li>{`Commutative Laws: order doesn't matter for $\\land$ and $\\lor$ ($P \\land Q \\equiv Q \\land P$, and $P \\lor Q \\equiv Q \\lor P$).`}</li>
            <li>{`Associative Laws: grouping doesn't matter when chaining the same connective.`}</li>
            <li>{`Idempotent Laws: $P \\land P \\equiv P$, and $P \\lor P \\equiv P$.`}</li>
            <li>{`Distributive Laws: $P \\land (Q \\lor R) \\equiv (P \\land Q) \\lor (P \\land R)$, and $P \\lor (Q \\land R) \\equiv (P \\lor Q) \\land (P \\lor R)$.`}</li>
            <li>{`Absorption Laws: $P \\land (P \\lor Q) \\equiv P$, and $P \\lor (P \\land Q) \\equiv P$.`}</li>
            <li>{`Double Negation: $\\neg\\neg P \\equiv P$.`}</li>
          </ul>
          <p>{`Here is the Absorption Law at work: $P \\lor (P \\land Q) \\equiv P$. If $P$ is true, the whole formula is already true. If $P$ is false, then $P \\land Q$ is false too, so the formula is false. Either way its value matches $P$.`}</p>

          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>{`You can check each law with a truth table, but once you prove it, you reuse it to simplify new formulas without rebuilding the table from scratch.`}</p>
          </div>

          <h3>Note: Logic Laws Parallel Algebra Laws</h3>
          <p>{`These equivalence laws behave like the laws of ordinary algebra. Addition and multiplication have commutative and associative laws, and so do $\\land$ and $\\lor$. The associative laws also justify a shortcut: once grouping doesn't matter, you can drop the parentheses in a long chain of the same connective, writing $P \\land Q \\land R$ without confusion.`}</p>

          <h3>Worked Example: Simplifying with the Laws</h3>
          <div className="lrn-proof">
            <span className="lrn-proof-header">{`Simplify $\\neg(P \\lor \\neg Q)$`}</span>
            <div className="lrn-proof-step">
              <div className="lrn-proof-step-content">
                <p>{`By De Morgan's Law, this becomes $\\neg P \\land \\neg\\neg Q$.`}</p>
                <p>{`By Double Negation, $\\neg\\neg Q$ becomes $Q$.`}</p>
                <p>{`The result is $\\neg P \\land Q$.`}</p>
              </div>
            </div>
          </div>

          <div className="lrn-proof">
            <span className="lrn-proof-header">{`Simplify $\\neg(Q \\land \\neg P) \\lor P$`}</span>
            <div className="lrn-proof-step">
              <div className="lrn-proof-step-content">
                <p>{`By De Morgan's Law, $\\neg(Q \\land \\neg P)$ becomes $\\neg Q \\lor \\neg\\neg P$, which simplifies to $\\neg Q \\lor P$ by Double Negation.`}</p>
                <p>{`The whole formula becomes $(\\neg Q \\lor P) \\lor P$, which collapses to $\\neg Q \\lor P$ by the Associative and Idempotent Laws.`}</p>
              </div>
            </div>
          </div>

          <div className="lrn-faded">
            <div className="lrn-faded-phase">
              <span className="lrn-faded-label">COMPLETE EXAMPLE</span>
              <p>{`Simplify a formula by applying De Morgan's Law first, then Double Negation, then an Associative or Idempotent Law.`}</p>
              <ol className="lrn-list">
                <li>{`Apply De Morgan's Law to push the negation inward.`}</li>
                <li>{`Apply Double Negation to cancel any $\\neg\\neg$.`}</li>
                <li>{`Apply an Associative or Idempotent Law to collapse the result, checking after each step that the new formula still matches the one before it.`}</li>
              </ol>
            </div>
            <div className="lrn-faded-phase lrn-faded-partial">
              <span className="lrn-faded-label">YOUR TURN: PARTIAL</span>
              <p>{`Simplify $\\neg(\\neg P \\land \\neg Q) \\lor Q$.`}</p>
              <ol className="lrn-list">
                <li>{`Apply De Morgan's Law: $\\rule{1cm}{0.5pt}$`}</li>
                <li>{`Apply Double Negation: $\\rule{1cm}{0.5pt}$`}</li>
                <li>{`Collapse with an Associative or Idempotent Law: $\\rule{1cm}{0.5pt}$`}</li>
              </ol>
            </div>
            <div className="lrn-faded-phase">
              <span className="lrn-faded-label">INDEPENDENT PRACTICE</span>
              <p>{`Simplify $\\neg(\\neg P \\lor \\neg Q) \\land Q$ using the same three-law chain.`}</p>
            </div>
          </div>

          <h3>Tautology and Contradiction</h3>
          <p>{`A tautology is a formula that is true in every row of its truth table, no matter what. A contradiction is a formula that is false in every row.`}</p>

          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Tautology</span>
              <p>{`Nothing can ever make a tautology false.`}</p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Contradiction</span>
              <p>{`Nothing can ever make a contradiction true. Most formulas are neither: true in some rows and false in others.`}</p>
            </div>
          </div>

          <h3>Worked Example: Classifying Formulas</h3>
          <p>{`Classify $P \\lor (Q \\lor \\neg P)$. No matter what $P$ and $Q$ are, either $P$ is true (making the $\\lor$ true) or $\\neg P$ is true (also making the $\\lor$ true). This is a tautology.`}</p>
          <p>{`Classify $P \\land \\neg(Q \\lor \\neg Q)$. $Q \\lor \\neg Q$ is always true (a tautology), so $\\neg(Q \\lor \\neg Q)$ is always false (a contradiction). Anything $\\land$'d with a contradiction is a contradiction. So this formula is a contradiction.`}</p>
          <p>{`Classify $P \\lor \\neg(Q \\lor \\neg Q)$. Since $\\neg(Q \\lor \\neg Q)$ is always false, this reduces to $P \\lor F$, which is just $P$. Its truth value depends on $P$, so it's neither a tautology nor a contradiction.`}</p>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>{`Why can you classify all three formulas without building a full truth table, just by spotting $Q \\lor \\neg Q$ hiding inside them?`}</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>{`$Q \\lor \\neg Q$ is always true, so once you spot it, you can replace it with a known tautology and simplify using the Tautology and Contradiction Laws instead of tracking every row of $P$ and $Q$ by hand.`}</p>
            </details>
          </div>

          <h3>Tautology and Contradiction Laws</h3>
          <p>{`These laws let you simplify a formula the moment you spot a tautology or contradiction hiding inside it.`}</p>
          <ul className="lrn-list">
            <li>{`$P \\land (\\text{tautology}) \\equiv P$. $P \\lor (\\text{tautology}) \\equiv \\text{tautology}$. $\\neg(\\text{tautology}) \\equiv \\text{contradiction}$.`}</li>
            <li>{`$P \\lor (\\text{contradiction}) \\equiv P$. $P \\land (\\text{contradiction}) \\equiv \\text{contradiction}$. $\\neg(\\text{contradiction}) \\equiv \\text{tautology}$.`}</li>
          </ul>

          <h3>Worked Example: Simplifying with Tautology and Contradiction Laws</h3>
          <div className="lrn-proof">
            <span className="lrn-proof-header">{`Simplify $P \\lor (Q \\land \\neg P)$`}</span>
            <div className="lrn-proof-step">
              <div className="lrn-proof-step-content">
                <p>{`Distributing gives $(P \\lor Q) \\land (P \\lor \\neg P)$.`}</p>
                <p>{`Since $P \\lor \\neg P$ is a tautology, this becomes $(P \\lor Q) \\land (\\text{tautology})$, which simplifies to $P \\lor Q$.`}</p>
              </div>
            </div>
          </div>

          <div className="lrn-proof">
            <span className="lrn-proof-header">{`Simplify $\\neg(P \\lor (Q \\land \\neg R)) \\land Q$`}</span>
            <div className="lrn-proof-step">
              <div className="lrn-proof-step-content">
                <p>{`Apply De Morgan's Law to get $(\\neg P \\land \\neg(Q \\land \\neg R)) \\land Q$, then De Morgan's again to get $(\\neg P \\land (\\neg Q \\lor R)) \\land Q$.`}</p>
                <p>{`Distributing $Q$ across the expression, the $Q \\land \\neg Q$ piece is a contradiction and drops out, leaving $\\neg P \\land R \\land Q$.`}</p>
              </div>
            </div>
          </div>

          <h3>{`Proof: $(\\neg S \\land L) \\lor S$ is Equivalent to $L \\lor S$`}</h3>
          <p>{`This derivation explains why the "stupid/lazy" argument was invalid earlier.`}</p>
          <div className="lrn-proof">
            <div className="lrn-proof-step">
              <div className="lrn-proof-step-content">
                <p>{`Start with $(\\neg S \\land L) \\lor S$. By the Distributive Law, this becomes $(\\neg S \\lor S) \\land (L \\lor S)$.`}</p>
                <p>{`Since $\\neg S \\lor S$ is a tautology, this simplifies to $(\\text{tautology}) \\land (L \\lor S)$, which by the Tautology Law is just $L \\lor S$.`}</p>
              </div>
            </div>
          </div>
          <p>{`So $(\\neg S \\land L) \\lor S$ always means the same thing as $L \\lor S$. Adding the premise "$S$" never lets you conclude $\\neg L$, because the formula never pinned down anything about $L$ except through $L \\lor S$.`}</p>
        </>,

        <>
          <div className="lrn-header">
            <div>
              <h2>Variables and Sets</h2>
            </div>
          </div>

          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>{`If $P(x)$ means "$x$ is an even number," is $P(x)$ true or false? Can you answer without knowing what $x$ is?`}</p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>{`No, you can't answer without knowing $x$. $P(x)$ is neither true nor false by itself; its truth depends entirely on what value $x$ takes.`}</p>
            </details>
          </div>

          <h3>Statements with Free Variables</h3>
          <p>{`A statement like "$x$ is a prime number" isn't true or false by itself. A prime is a whole number bigger than 1 whose only divisors are 1 and itself. Its truth depends on what $x$ stands for. This kind of statement is written $P(x)$, and $x$ is called a free variable because it's free to take any value.`}</p>
          <p>
            <strong>When to use this:</strong>{' '}
            {`Use $P(x)$ notation whenever a statement's truth depends on a variable that hasn't been pinned down yet.`}
          </p>
          <p>{`A statement written $P(x)$ is called a predicate: a statement whose truth depends on its variable. A predicate can have more than one free variable, like $P(x,y)$.`}</p>

          <h3>Worked Example: Analyzing Predicates</h3>
          <p>{`Take "$x$ is a prime number, and either $y$ or $z$ is divisible by $x$." This has three free variables joined by $\\land$ and $\\lor$: "$x$ is prime" $\\land$ ("$y$ divisible by $x$" $\\lor$ "$z$ divisible by $x$").`}</p>
          <p>{`Take "$x$ is a man and $y$ is a woman and $x$ likes $y$, but $y$ doesn't like $x$." This becomes: "$x$ is a man" $\\land$ "$y$ is a woman" $\\land$ "$x$ likes $y$" $\\land \\neg$"$y$ likes $x$."`}</p>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>{`Why does "but" in the second sentence still translate to $\\land$, the same as "and"?`}</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>{`"But" signals contrast in English, not a different logical relationship. Logically it still asserts that both parts are true at once, which is exactly what $\\land$ means, so it translates the same way "and" does.`}</p>
            </details>
          </div>

          <h3>Sets</h3>
          <p>{`A set is a collection of objects, called its elements. Membership is written $x \\in A$, meaning $x$ is an element of $A$. $x \\notin A$ means $x$ is not an element of $A$.`}</p>
          <p>{`Two sets are equal when they contain exactly the same elements. A set can be described by listing its elements in braces, like $\\{1,2,3\\}$, or by using the three dots for an obvious pattern, like $\\{2,4,6,8,\\dots\\}$ for the even numbers.`}</p>

          <h3>Worked Example: Elementhood Tests</h3>
          <p>{`Rewrite $\\{2,4,6,8,\\dots\\}$ as an elementhood test: "$x$ is in the set if and only if $x$ is a positive even number." The list-of-presidents works the same way: "$x$ is in the set if and only if $x$ has served as President of the United States."`}</p>

          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>{`Every listing-notation set can be rewritten this way, because listing and elementhood-testing are two ways of describing the exact same collection.`}</p>
          </div>

          <h3>Set-Builder Notation</h3>
          <p>{`Set-builder notation writes a set as $\\{x \\mid P(x)\\}$, read "the set of all $x$ such that $P(x)$." This is the elementhood test written formally: $x$ belongs to this set exactly when $P(x)$ is true.`}</p>
          <p>
            <strong>When to use this:</strong>{' '}
            {`Use set-builder notation whenever a set is defined by a condition rather than by listing every element.`}
          </p>
          <p>{`A related idea bounds the search to one universe: $\\{x \\in U \\mid P(x)\\}$ means "all $x$ in $U$ such that $P(x)$," restricting attention to a fixed universe $U$.`}</p>

          <h3>Worked Example: Free and Bound Variables in Set Notation</h3>
          <p>{`Consider $a+b \\notin \\{\\text{even numbers}\\}$. Here $a$ and $b$ are free: the truth of the whole statement depends on what $a$ and $b$ are.`}</p>
          <p>{`Consider $y \\in \\{x \\mid x \\text{ divisible by } w\\}$. Here $x$ is bound: it's a placeholder used only to describe the set, and it disappears once the set is named. $y$ and $w$ stay free.`}</p>
          <p>{`Consider the nested statement $2 \\in \\{w \\mid 6 \\notin \\{x \\mid x \\text{ divisible by } w\\}\\}$. Work from the outside in. The inner set $\\{x \\mid x \\text{ divisible by } w\\}$ depends on $w$, and "$6 \\notin$" that set means 6 is not divisible by $w$. The whole thing asks: is 2 a value of $w$ for which 6 is not divisible by $w$? Since 6 is divisible by 2, the answer is no, so the statement is false.`}</p>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>{`Why does $x$ disappear from the final meaning of $\\{x \\mid x \\text{ divisible by } w\\}$, while $w$ stays?`}</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>{`$x$ is only a placeholder used to describe which numbers belong to the set; once the set is named, $x$ has done its job and vanishes. $w$ is not described by the set-builder, so its value still matters to the meaning of the whole expression.`}</p>
            </details>
          </div>

          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Free variable</span>
              <p>{`A free variable's value is left open. It could be substituted with anything, and the statement's truth changes accordingly.`}</p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Bound variable</span>
              <p>{`A bound variable is captured by a set-builder or a quantifier; it's a placeholder inside the description and doesn't appear as an unknown in the final meaning.`}</p>
            </div>
          </div>

          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>{`A set-builder or quantifier (a symbol like "for all" or "there exists") is said to "bind" the variable it introduces, the same way $\\forall$ and $\\exists$ will bind variables later in this topic.`}</p>
          </div>

          <h3>The Truth Set of a Statement</h3>
          <p>{`For a statement $P(x)$ with one free variable, the truth set is $\\{x \\mid P(x)\\}$: every value of $x$ that makes $P(x)$ true.`}</p>

          <h3>Worked Example: Truth Sets</h3>
          <p>{`The truth set of "Shakespeare wrote $x$" is the set of all works Shakespeare wrote.`}</p>
          <p>{`The truth set of "$n$ is an even prime number" is $\\{2\\}$. Every even number bigger than 2 can be divided by 2, so it isn't prime. Only 2 is both even and prime.`}</p>

          <h3>Universe of Discourse</h3>
          <p>{`The universe of discourse is the full collection of objects a statement's variables can range over. Four universes come up constantly: $\\mathbb{R}$ (real numbers), $\\mathbb{Q}$ (rational numbers), $\\mathbb{Z}$ (integers), and $\\mathbb{N}$ (natural numbers). A superscript $+$ or $-$ restricts to positive or negative values, like $\\mathbb{Z}^+$ for positive integers.`}</p>

          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>{`Fixing the universe matters because the same predicate can have a different truth set depending on which universe you search in.`}</p>
          </div>

          <h3>{`Note: Does 0 Count as a Natural Number?`}</h3>
          <p>{`Whether 0 belongs to $\\mathbb{N}$ is a matter of convention. This topic treats 0 as belonging to $\\mathbb{N}$; some other sources leave it out. Fix the convention first before working with $\\mathbb{N}$.`}</p>

          <h3>The Empty Set</h3>
          <p>{`The empty set, written $\\emptyset$, is the set with no elements at all. It's unique: there's only one set with no elements, because two sets with no elements automatically contain the same elements, namely none.`}</p>

          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">{`Empty set $\\emptyset$`}</span>
              <p>{`$\\emptyset$ has zero elements.`}</p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">{`The set containing it $\\{\\emptyset\\}$`}</span>
              <p>{`$\\{\\emptyset\\}$ has exactly one element, namely $\\emptyset$ itself. Confusing these two is a common mistake.`}</p>
            </div>
          </div>

          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>{`A statement like "$x \\in \\emptyset$" is always false for every $x$, since $\\emptyset$ contains nothing, which makes it useful for describing "always false" conditions.`}</p>
          </div>

          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">{`Element of a set ($\\in$)`}</span>
              <p>{`The number 2 is an element of $\\{1,2,3\\}$, written $2 \\in \\{1,2,3\\}$.`}</p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">{`Subset of a set ($\\subseteq$)`}</span>
              <p>{`$\\{2\\}$ is a subset of $\\{1,2,3\\}$, written $\\{2\\} \\subseteq \\{1,2,3\\}$, because every element of $\\{2\\}$ (just the number 2) is also in $\\{1,2,3\\}$. 2 and $\\{2\\}$ are different objects: one is a number, the other is a set containing that number.`}</p>
            </div>
          </div>
        </>,

        <>
          <div className="lrn-header">
            <div>
              <h2>Operations on Sets</h2>
            </div>
          </div>

          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>{`If $A$ is the set of people who like pizza, and $B$ is the set of people who like tacos, what does the set of people who like both look like?`}</p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>{`It's the set of people who appear in both groups at once, called the intersection $A \\cap B$. Only people who like pizza and tacos belong to it.`}</p>
            </details>
          </div>

          <h3>Intersection, Union, and Difference</h3>
          <p>{`Three operations combine sets into new sets.`}</p>
          <ul className="lrn-list">
            <li>{`Intersection: $A \\cap B = \\{x \\mid x \\in A \\text{ and } x \\in B\\}$. The elements in both $A$ and $B$.`}</li>
            <li>{`Union: $A \\cup B = \\{x \\mid x \\in A \\text{ or } x \\in B\\}$. The elements in $A$, or $B$, or both.`}</li>
            <li>{`Difference: $A \\setminus B = \\{x \\mid x \\in A \\text{ and } x \\notin B\\}$. The elements in $A$ but not in $B$.`}</li>
          </ul>
          <p>
            <strong>When to use this:</strong>{' '}
            {`Reach for these three operations whenever you need to describe a new set built from how two sets overlap or differ.`}
          </p>

          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>{`These three set operations mirror the three logical connectives exactly. If $A$ is the truth set of $P(x)$ and $B$ is the truth set of $Q(x)$, then $A \\cap B$ is the truth set of $P(x) \\land Q(x)$, $A \\cup B$ is the truth set of $P(x) \\lor Q(x)$, and $A \\setminus B$ is the truth set of $P(x) \\land \\neg Q(x)$. That is why every law about $\\land$, $\\lor$, and $\\neg$ turns into a law about $\\cap$, $\\cup$, and $\\setminus$.`}</p>
          </div>

          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">{`Intersection $\\cap$`}</span>
              <p>{`Keeps only the shared elements.`}</p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">{`Union $\\cup$`}</span>
              <p>{`Keeps everything from either set.`}</p>
            </div>
          </div>
          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">{`Difference $\\setminus$`}</span>
              <p>{`Keeps only what's unique to the first set, removing anything that also appears in the second.`}</p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">All three together</span>
              <p>{`The same two sets can be combined three different ways, and each way answers a different question about overlap.`}</p>
            </div>
          </div>

          <h3>Worked Example: Computing Set Operations</h3>
          <p>{`Let $A=\\{1,2,3,4,5\\}$ and $B=\\{2,4,6,8,10\\}$.`}</p>
          <p>{`$A \\cap B = \\{2,4\\}$: the numbers in both lists.`}</p>
          <p>{`$A \\cup B = \\{1,2,3,4,5,6,8,10\\}$: every number in either list.`}</p>
          <p>{`$A \\setminus B = \\{1,3,5\\}$: numbers in $A$ that aren't in $B$.`}</p>
          <p>{`$(A \\cup B) \\setminus (A \\cap B) = \\{1,3,5,6,8,10\\}$: take the union, then remove anything that was in both sets.`}</p>
          <p>{`$(A \\setminus B) \\cup (B \\setminus A) = \\{1,3,5\\} \\cup \\{6,8,10\\} = \\{1,3,5,6,8,10\\}$. This matches $(A \\cup B) \\setminus (A \\cap B)$ exactly. This combined result, the elements in exactly one of $A$ or $B$ but not both, is called the symmetric difference, written $A \\Delta B$.`}</p>

          <h3>Worked Example: Set Operations in Words</h3>
          <p>{`Let $A$ be the set of men, and $B$ be the set of people with brown hair. $A \\cap B$ is men with brown hair. $A \\cup B$ is everyone who is a man, has brown hair, or both. $A \\setminus B$ is men who don't have brown hair.`}</p>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>{`Why does $A \\cup B$ include men who don't have brown hair, when $A \\cap B$ leaves them out?`}</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>{`Union keeps anyone who passes at least one test, so being a man is already enough to join $A \\cup B$, brown hair or not. Intersection demands both tests at once, so a man without brown hair fails the brown-hair test and is left out of $A \\cap B$.`}</p>
            </details>
          </div>

          <h3>Venn Diagrams</h3>
          <p>{`A Venn diagram draws sets as overlapping circles, visually showing intersection, union, and difference as regions.`}</p>

          <div className="lrn-graph">
            <TwoSetVennViz />
          </div>

          <p>{`Picture two overlapping circles, one for $A$ and one for $B$. The lens where they overlap is $A \\cap B$. Everything inside either circle is $A \\cup B$. The part of $A$'s circle lying outside $B$ is $A \\setminus B$. The two outer crescents, one from each circle, form the symmetric difference. That symmetric difference is $(A \\cup B) \\setminus (A \\cap B)$, the union with its middle lens removed. It is also $(A \\setminus B) \\cup (B \\setminus A)$, the two crescents joined. Both descriptions shade the same two crescents, so the identity holds.`}</p>

          <h3>Note: Venn Diagrams Have Limits</h3>
          <p>{`Overlapping circles can show every combination of regions for up to three sets. With four or more sets, circles can't be arranged to show every possible overlap, so other diagram shapes are needed instead.`}</p>

          <h3>Proof: The Distributive Law for Sets</h3>
          <p>{`This derivation shows where the set distributive law comes from: the logical distributive law you already know.`}</p>
          <div className="lrn-proof">
            <div className="lrn-proof-step">
              <div className="lrn-proof-step-content">
                <p>{`Consider $x \\in A \\cap (B \\cup C)$. By the definitions of $\\cap$ and $\\cup$, this means $x \\in A$ and ($x \\in B$ or $x \\in C$), which is $(x \\in A \\land x \\in B) \\lor (x \\in A \\land x \\in C)$.`}</p>
                <p>{`By the logical Distributive Law, that's the same as saying $x \\in A \\cap B$ or $x \\in A \\cap C$, which means $x \\in (A \\cap B) \\cup (A \\cap C)$.`}</p>
                <p>{`Since $x \\in A \\cap (B \\cup C)$ means exactly the same thing as $x \\in (A \\cap B) \\cup (A \\cap C)$ for every $x$, the two sets are equal: $A \\cap (B \\cup C) = (A \\cap B) \\cup (A \\cap C)$.`}</p>
              </div>
            </div>
          </div>

          <div className="lrn-faded">
            <div className="lrn-faded-phase">
              <span className="lrn-faded-label">COMPLETE EXAMPLE</span>
              <p>{`Prove a set identity by translating set membership into a logical formula, applying a known logic law, then translating back into set membership.`}</p>
              <ol className="lrn-list">
                <li>{`Translate $x \\in A \\cap (B \\cup C)$ into a logical formula.`}</li>
                <li>{`Apply the Distributive Law.`}</li>
                <li>{`Translate the result back into set membership to get $(A \\cap B) \\cup (A \\cap C)$.`}</li>
              </ol>
            </div>
            <div className="lrn-faded-phase lrn-faded-partial">
              <span className="lrn-faded-label">YOUR TURN: PARTIAL</span>
              <p>{`Prove $A \\cup (B \\cap C) = (A \\cup B) \\cap (A \\cup C)$ the same way.`}</p>
              <ol className="lrn-list">
                <li>{`Translate $x \\in A \\cup (B \\cap C)$: $\\rule{1cm}{0.5pt}$`}</li>
                <li>{`Apply the Distributive Law: $\\rule{1cm}{0.5pt}$`}</li>
                <li>{`Translate back into set membership: $\\rule{1cm}{0.5pt}$`}</li>
              </ol>
            </div>
            <div className="lrn-faded-phase">
              <span className="lrn-faded-label">INDEPENDENT PRACTICE</span>
              <p>{`Prove $A \\setminus (B \\cup C) = (A \\setminus B) \\cap (A \\setminus C)$ using the same translate-apply-translate method.`}</p>
            </div>
          </div>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>{`Why does proving "$x$ belongs to the left set if and only if $x$ belongs to the right set" count as proving the two sets are equal?`}</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>{`Two sets are equal exactly when they contain the same elements. Showing membership matches for every possible $x$ is a direct check of that definition, so it proves equality with nothing left to check.`}</p>
            </details>
          </div>

          <h3>{`Proof: $A \\setminus (B \\cap C) = (A \\setminus B) \\cup (A \\setminus C)$`}</h3>
          <div className="lrn-proof">
            <div className="lrn-proof-step">
              <div className="lrn-proof-step-content">
                <p>{`Start with $x \\in A \\setminus (B \\cap C)$, which means $x \\in A \\land \\neg(x \\in B \\land x \\in C)$. Apply De Morgan's Law to the negated part: $\\neg(x \\in B \\land x \\in C)$ becomes $x \\notin B \\lor x \\notin C$. The whole statement is now $x \\in A \\land (x \\notin B \\lor x \\notin C)$.`}</p>
                <p>{`Apply the Distributive Law: this becomes $(x \\in A \\land x \\notin B) \\lor (x \\in A \\land x \\notin C)$, which is exactly $x \\in (A \\setminus B) \\lor x \\in (A \\setminus C)$, meaning $x \\in (A \\setminus B) \\cup (A \\setminus C)$.`}</p>
                <p>{`So $A \\setminus (B \\cap C) = (A \\setminus B) \\cup (A \\setminus C)$.`}</p>
              </div>
            </div>
          </div>

          <h3>Proof: The Symmetric Difference Identity, via Truth Table</h3>
          <p>{`Prove $(A \\cup B) \\setminus (A \\cap B) \\equiv (A \\setminus B) \\cup (B \\setminus A)$ with a truth table. Let $P$ stand for "$x \\in A$" and $Q$ stand for "$x \\in B$." The left side becomes $(P \\lor Q) \\land \\neg(P \\land Q)$. The right side becomes $(P \\land \\neg Q) \\lor (Q \\land \\neg P)$.`}</p>

          <table className="lrn-table">
            <thead>
              <tr>
                <th>{`$P$`}</th>
                <th>{`$Q$`}</th>
                <th>{`$(P \\lor Q) \\land \\neg(P \\land Q)$`}</th>
                <th>{`$(P \\land \\neg Q) \\lor (Q \\land \\neg P)$`}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>T</td>
                <td>T</td>
                <td>F</td>
                <td>F</td>
              </tr>
              <tr>
                <td>T</td>
                <td>F</td>
                <td>T</td>
                <td>T</td>
              </tr>
              <tr>
                <td>F</td>
                <td>T</td>
                <td>T</td>
                <td>T</td>
              </tr>
              <tr>
                <td>F</td>
                <td>F</td>
                <td>F</td>
                <td>F</td>
              </tr>
            </tbody>
          </table>

          <p>{`The last two columns match in every row. So the two formulas are logically equivalent, which proves the set identity.`}</p>

          <h3>Subset and Disjoint Sets</h3>
          <p>{`$A \\subseteq B$ means "every element of $A$ is also in $B$." Two sets are disjoint when $A \\cap B = \\emptyset$: they share no elements at all.`}</p>

          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">{`$A \\subseteq B$`}</span>
              <p>{`Subset says one set is entirely contained in another.`}</p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">A and B disjoint</span>
              <p>{`Disjoint says two sets share nothing. A set can be neither, partly overlapping and partly not.`}</p>
            </div>
          </div>

          <h3>Worked Example: Subset and Disjoint Illustration</h3>
          <p>{`Let $A=\\{\\text{red},\\text{green}\\}$, $B=\\{\\text{red},\\text{yellow},\\text{green},\\text{purple}\\}$, $C=\\{\\text{blue},\\text{purple}\\}$. $A \\subseteq B$, because every color in $A$ (red, green) is also in $B$. $A$ and $C$ are disjoint: they share no colors at all.`}</p>

          <h3>Proof: A∩B and A\\B Are Always Disjoint</h3>
          <p>{`This uses proof by contradiction: assume the opposite of what you want to show, then reach an impossible situation, which means the assumption was wrong.`}</p>
          <div className="lrn-proof">
            <div className="lrn-proof-step">
              <div className="lrn-proof-step-content">
                <p>{`Suppose, for contradiction, that $x \\in (A \\cap B) \\cap (A \\setminus B)$. Then $x \\in A \\cap B$, meaning $x \\in A$ and $x \\in B$. Also $x \\in A \\setminus B$, meaning $x \\in A$ and $x \\notin B$.`}</p>
                <p>{`But $x \\in B$ and $x \\notin B$ can't both be true. This is a contradiction, so no such $x$ exists. $A \\cap B$ and $A \\setminus B$ are always disjoint.`}</p>
              </div>
            </div>
          </div>

          <h3>{`Named Case and Proof: $(A \\cup B) \\setminus B \\subseteq A$`}</h3>
          <p>{`Claim: $(A \\cup B) \\setminus B$ is always a subset of $A$.`}</p>
          <div className="lrn-proof">
            <span className="lrn-proof-header">Proof</span>
            <div className="lrn-proof-step">
              <div className="lrn-proof-step-content">
                <p>{`Let $x \\in (A \\cup B) \\setminus B$. This means $x \\in (A \\cup B)$ and $x \\notin B$, so $x \\in A \\lor x \\in B$, and $\\neg(x \\in B)$. This matches the valid argument form $P \\lor Q$, $\\neg Q$, therefore $P$, from the truth-table section. Applying that valid form, $x \\in A$.`}</p>
              </div>
            </div>
          </div>
          <p>{`This proof only goes one way. $(A \\cup B) \\setminus B$ is not always equal to $A$. If $B$ has elements not in $A$, those get removed from the union. They were never in $A$ to begin with, so equality can fail. Try finding such a counterexample yourself.`}</p>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>{`Why does this proof reuse the exact argument form $P \\lor Q, \\neg Q \\therefore P$ from the truth-table section instead of building a new truth table?`}</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>{`Once set membership is translated into logic, the situation is an exact match for an argument form already proven valid. Reusing that proven form saves the work of re-deriving the same reasoning about sets from scratch.`}</p>
            </details>
          </div>
        </>,

        <>
          <div className="lrn-header">
            <div>
              <h2>The Conditional and Biconditional Connectives</h2>
            </div>
          </div>

          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>{`"If it rains, I'll get wet." If it does NOT rain, does this sentence say anything about whether you get wet?`}</p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>{`No. The sentence only makes a promise about what happens if it rains. If it doesn't rain, the sentence hasn't been tested at all, so it says nothing either way about getting wet.`}</p>
            </details>
          </div>

          <h3>The Conditional Connective</h3>
          <p>{`The conditional $P \\rightarrow Q$ reads "if $P$, then $Q$." $P$ is called the antecedent, and $Q$ is called the consequent.`}</p>
          <p>
            <strong>When to use this:</strong>{' '}
            {`Use $\\rightarrow$ whenever a statement takes the form "if [condition], then [result]."`}
          </p>

          <h3>Worked Example: Conditional Statements in Context</h3>
          <p>{`"If it's raining and I don't have my umbrella, I'll get wet." Let $R$ mean "it's raining," $U$ mean "I have my umbrella," and $W$ mean "I get wet." This becomes $(R \\land \\neg U) \\rightarrow W$.`}</p>
          <p>{`"If Mary did her homework, she can watch TV." Let $H$ mean "Mary did her homework" and $T$ mean "Mary can watch TV." This becomes $H \\rightarrow T$.`}</p>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>{`Why does the first sentence need two conditions joined by $\\land$ inside the antecedent?`}</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>{`Getting wet is only promised when BOTH conditions hold at once: it's raining AND you lack an umbrella. A single condition alone wouldn't capture that the promise depends on both facts together, which is exactly what $\\land$ inside the antecedent does.`}</p>
            </details>
          </div>

          <h3>The Truth Table for the Conditional</h3>
          <p>{`$P \\rightarrow Q$ is false only when $P$ is true and $Q$ is false. It's true in every other case, including when $P$ is false.`}</p>

          <table className="lrn-table">
            <thead>
              <tr>
                <th>{`$P$`}</th>
                <th>{`$Q$`}</th>
                <th>{`$P \\rightarrow Q$`}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>T</td>
                <td>T</td>
                <td>T</td>
              </tr>
              <tr>
                <td>T</td>
                <td>F</td>
                <td>F</td>
              </tr>
              <tr>
                <td>F</td>
                <td>T</td>
                <td>T</td>
              </tr>
              <tr>
                <td>F</td>
                <td>F</td>
                <td>T</td>
              </tr>
            </tbody>
          </table>

          <p>{`This can feel strange at first. Consider "if $x>2$, then $x^2>4$." If $x$ is not greater than 2, the sentence hasn't been tested and isn't broken, so it counts as true. Only a case where $x>2$ but $x^2 \\le 4$ would break the promise, and that never happens. So $x>2 \\rightarrow x^2>4$ is true for every $x$. Whenever $P$ is false, the conditional is vacuously true, since the "if" part never triggered.`}</p>

          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>{`Treating $P \\rightarrow Q$ as true whenever $P$ is false matches how the conditional is used in proofs: a statement isn't false just because its condition never came up.`}</p>
          </div>

          <h3>{`Named Case: Conditional vs Iff, Reconciled`}</h3>
          <p>{`The biconditional $P \\leftrightarrow Q$ is true exactly when $P$ and $Q$ have the same truth value; it gets its own full section later in this topic. It's tempting to think $P \\rightarrow \\neg Q$ and $P \\leftrightarrow Q$ are opposites, but they aren't directly comparable that way. A shared table reconciles them: $P \\rightarrow \\neg Q$ is false only when $P$ is true and $\\neg Q$ is false (that is, $P$ and $Q$ are both true). $P \\leftrightarrow Q$ is true whenever $P$ and $Q$ match, both true or both false. Lining up both tables side by side shows exactly where they agree and where they don't, which prevents mixing up a plain conditional with a biconditional.`}</p>

          <table className="lrn-table">
            <thead>
              <tr>
                <th>{`$P$`}</th>
                <th>{`$Q$`}</th>
                <th>{`$P \\rightarrow Q$`}</th>
                <th>{`$P \\leftrightarrow Q$`}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>T</td>
                <td>T</td>
                <td>T</td>
                <td>T</td>
              </tr>
              <tr>
                <td>T</td>
                <td>F</td>
                <td>F</td>
                <td>F</td>
              </tr>
              <tr>
                <td>F</td>
                <td>T</td>
                <td>T</td>
                <td>F</td>
              </tr>
              <tr>
                <td>F</td>
                <td>F</td>
                <td>T</td>
                <td>T</td>
              </tr>
            </tbody>
          </table>

          <h3>Conditional Laws</h3>
          <p>{`Two equivalent ways to rewrite a conditional: $P \\rightarrow Q \\equiv \\neg P \\lor Q$, and $P \\rightarrow Q \\equiv \\neg(P \\land \\neg Q)$. Both match the truth table: the only way to break the promise is $P$ true and $Q$ false.`}</p>

          <h3>Worked Example: Testing Equivalence Among Rain, Snow, and Canceled Games</h3>
          <p>{`Let $R$ mean "it rains," $S$ mean "it snows," and $C$ mean "the game is canceled." Compare four forms: the original $(R \\lor S) \\rightarrow C$, its contrapositive $\\neg C \\rightarrow \\neg(R \\lor S)$, its converse $C \\rightarrow (R \\lor S)$, and the distributed form $(R \\rightarrow C) \\land (S \\rightarrow C)$.`}</p>

          <table className="lrn-table">
            <thead>
              <tr>
                <th>{`$R$`}</th>
                <th>{`$S$`}</th>
                <th>{`$C$`}</th>
                <th>{`$(R \\lor S) \\rightarrow C$`}</th>
                <th>{`$\\neg C \\rightarrow \\neg(R \\lor S)$`}</th>
                <th>{`$C \\rightarrow (R \\lor S)$`}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>T</td>
                <td>T</td>
                <td>T</td>
                <td>T</td>
                <td>T</td>
                <td>T</td>
              </tr>
              <tr>
                <td>T</td>
                <td>T</td>
                <td>F</td>
                <td>F</td>
                <td>F</td>
                <td>T</td>
              </tr>
              <tr>
                <td>T</td>
                <td>F</td>
                <td>T</td>
                <td>T</td>
                <td>T</td>
                <td>T</td>
              </tr>
              <tr>
                <td>T</td>
                <td>F</td>
                <td>F</td>
                <td>F</td>
                <td>F</td>
                <td>T</td>
              </tr>
              <tr>
                <td>F</td>
                <td>T</td>
                <td>T</td>
                <td>T</td>
                <td>T</td>
                <td>T</td>
              </tr>
              <tr>
                <td>F</td>
                <td>T</td>
                <td>F</td>
                <td>F</td>
                <td>F</td>
                <td>T</td>
              </tr>
              <tr>
                <td>F</td>
                <td>F</td>
                <td>T</td>
                <td>T</td>
                <td>T</td>
                <td>F</td>
              </tr>
              <tr>
                <td>F</td>
                <td>F</td>
                <td>F</td>
                <td>T</td>
                <td>T</td>
                <td>T</td>
              </tr>
            </tbody>
          </table>

          <p>{`The original and its contrapositive match in every row, so they are equivalent. The converse differs in the second, fourth, sixth, and seventh rows, so it is a genuinely different claim. The distributed form $(R \\rightarrow C) \\land (S \\rightarrow C)$ also matches the original in every row, as the proof just below shows.`}</p>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>{`Why must the original conditional and its contrapositive share every row of the truth table, while the converse does not?`}</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>{`The contrapositive is built by swapping AND negating both parts, which the Contrapositive Law guarantees preserves meaning exactly. The converse only swaps the parts without negating, which is a genuinely different claim with its own, possibly different, truth table.`}</p>
            </details>
          </div>

          <h3>{`Proof: $(R \\rightarrow C) \\land (S \\rightarrow C) \\equiv (R \\lor S) \\rightarrow C$`}</h3>
          <div className="lrn-proof">
            <div className="lrn-proof-step">
              <div className="lrn-proof-step-content">
                <p>{`Start with $(R \\rightarrow C) \\land (S \\rightarrow C)$. By the Conditional Law, rewrite each part: $(\\neg R \\lor C) \\land (\\neg S \\lor C)$.`}</p>
                <p>{`By the Distributive Law, factor out $C$: $(\\neg R \\land \\neg S) \\lor C$. By De Morgan's Law, $\\neg R \\land \\neg S$ becomes $\\neg(R \\lor S)$.`}</p>
                <p>{`The formula is now $\\neg(R \\lor S) \\lor C$. By the Conditional Law again, this is $(R \\lor S) \\rightarrow C$.`}</p>
              </div>
            </div>
          </div>

          <div className="lrn-faded">
            <div className="lrn-faded-phase">
              <span className="lrn-faded-label">COMPLETE EXAMPLE</span>
              <p>{`Chain four laws in sequence to prove two conditional statements are equivalent.`}</p>
              <ol className="lrn-list">
                <li>{`Apply the Conditional Law to rewrite each part.`}</li>
                <li>{`Apply the Distributive Law to factor.`}</li>
                <li>{`Apply De Morgan's Law.`}</li>
                <li>{`Apply the Conditional Law again to land on a single conditional.`}</li>
              </ol>
            </div>
            <div className="lrn-faded-phase lrn-faded-partial">
              <span className="lrn-faded-label">YOUR TURN: PARTIAL</span>
              <p>{`Prove $(P \\rightarrow Q) \\land (\\neg P \\rightarrow Q) \\equiv Q$ using the same chain.`}</p>
              <ol className="lrn-list">
                <li>{`Rewrite each part with the Conditional Law: $\\rule{1cm}{0.5pt}$`}</li>
                <li>{`Factor with the Distributive Law: $\\rule{1cm}{0.5pt}$`}</li>
                <li>{`Simplify the tautology piece: $\\rule{1cm}{0.5pt}$`}</li>
              </ol>
            </div>
            <div className="lrn-faded-phase">
              <span className="lrn-faded-label">INDEPENDENT PRACTICE</span>
              <p>{`Prove $(P \\rightarrow Q) \\equiv (P \\land \\neg Q) \\rightarrow \\text{contradiction}$ using the Conditional Law and Contradiction Laws.`}</p>
            </div>
          </div>

          <h3>Converse and Contrapositive</h3>
          <p>{`The converse of $P \\rightarrow Q$ is $Q \\rightarrow P$: swapping the two parts. The contrapositive of $P \\rightarrow Q$ is $\\neg Q \\rightarrow \\neg P$: swapping and negating both parts.`}</p>
          <p>
            <strong>Contrapositive Law:</strong>{' '}
            {`$P \\rightarrow Q \\equiv \\neg Q \\rightarrow \\neg P$. The contrapositive always means the same thing as the original.`}
          </p>

          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Converse</span>
              <p>{`Generally not equivalent; it can have a different truth value entirely.`}</p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Contrapositive</span>
              <p>{`Always logically equivalent to the original conditional.`}</p>
            </div>
          </div>

          <h3>Worked Example: Bank Account Example</h3>
          <p>{`"If your account is overdrawn, you'll be charged a fee." The contrapositive: "if you aren't charged a fee, your account isn't overdrawn." This means the same thing. The converse: "if you're charged a fee, your account is overdrawn." This does not have to be true; a fee could come from something else entirely, like a monthly service charge.`}</p>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>{`Why does swapping and negating both parts (the contrapositive) preserve meaning, while just swapping (the converse) does not?`}</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>{`The contrapositive states the exact same relationship viewed from the opposite direction: whenever the result fails, the condition must have failed too. The converse states an entirely new, unproven claim: that the result forces the condition, which the original never promised.`}</p>
            </details>
          </div>

          <h3>Sufficient and Necessary Conditions</h3>
          <p>{`In $P \\rightarrow Q$, $P$ is a sufficient condition for $Q$: $P$ being true is enough to guarantee $Q$. $Q$ is a necessary condition for $P$: $Q$ must hold whenever $P$ does.`}</p>

          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Sufficient</span>
              <p>{`Enough on its own to cause the result.`}</p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Necessary</span>
              <p>{`Required, though maybe not enough by itself.`}</p>
            </div>
          </div>

          <h3>Worked Example: At Least Ten People</h3>
          <p>{`"At least ten people is a sufficient condition for the lecture being given" translates to $T \\rightarrow L$: ten people showing up guarantees the lecture happens. "At least ten people is a necessary condition for the lecture being given" translates to $L \\rightarrow T$: the lecture happening requires at least ten people. Five different phrasings of this idea all reduce to one of these two directions.`}</p>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>{`Why do "sufficient" and "necessary" point the arrow in opposite directions between $T$ and $L$?`}</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>{`"Sufficient" says the cause guarantees the effect, so the arrow points from cause to effect. "Necessary" says the effect requires the cause, which is the same relationship read backward, so the arrow points from effect to cause.`}</p>
            </details>
          </div>

          <h3>Phrase-to-Symbol Table</h3>
          <p>{`Everyday phrases connect directly to symbols. "Only if" is the trickiest of these, because it reverses the direction you might expect from reading left to right.`}</p>

          <table className="lrn-table">
            <thead>
              <tr>
                <th>Phrase</th>
                <th>Symbolic form</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{`"P if Q"`}</td>
                <td>{`$Q \\rightarrow P$`}</td>
              </tr>
              <tr>
                <td>{`"P only if Q"`}</td>
                <td>{`$P \\rightarrow Q$`}</td>
              </tr>
              <tr>
                <td>{`"P is sufficient for Q"`}</td>
                <td>{`$P \\rightarrow Q$`}</td>
              </tr>
              <tr>
                <td>{`"P is necessary for Q"`}</td>
                <td>{`$Q \\rightarrow P$`}</td>
              </tr>
            </tbody>
          </table>

          <h3>The Biconditional Connective</h3>
          <p>{`The biconditional $P \\leftrightarrow Q$ reads "$P$ if and only if $Q$," or "$P$ iff $Q$." It's true exactly when $P$ and $Q$ share the same truth value, both true or both false.`}</p>
          <p>
            <strong>Biconditional Law:</strong>{' '}
            {`$P \\leftrightarrow Q \\equiv (P \\rightarrow Q) \\land (Q \\rightarrow P)$. It's also equivalent to $(P \\rightarrow Q) \\land (\\neg P \\rightarrow \\neg Q)$.`}
          </p>

          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">{`Conditional $P \\rightarrow Q$`}</span>
              <p>{`Only guarantees one direction: $P$ forces $Q$.`}</p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">{`Biconditional $P \\leftrightarrow Q$`}</span>
              <p>{`Guarantees both directions at once: $P$ forces $Q$, and $Q$ forces $P$.`}</p>
            </div>
          </div>

          <h3>Worked Example: Biconditional Statements</h3>
          <p>{`"The game is canceled if and only if it's raining or snowing." This links the game-canceled statement to the weather statement in both directions: rain or snow guarantees cancellation, and cancellation guarantees rain or snow.`}</p>
          <p>{`"At least ten people is both necessary and sufficient for giving the lecture" is exactly a biconditional: $T \\leftrightarrow L$.`}</p>
          <p>{`"John went to the store if and only if we're out of eggs" links $S$ and $E$ in both directions, unlike the earlier disjunction example, which only needed $\\lor$.`}</p>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>{`Why does "necessary and sufficient" together always signal a biconditional, rather than a plain conditional?`}</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>{`"Sufficient" alone gives one direction of the arrow, and "necessary" alone gives the other direction. Claiming both at once pins down both directions at the same time, which is exactly what the biconditional's definition requires.`}</p>
            </details>
          </div>

          <h3>Note: Everyday Speech Blurs If/Then with Iff</h3>
          <p>{`In daily conversation, "if" often secretly means "iff." A parent saying "if you finish your vegetables, you get dessert" usually means "iff": no vegetables, no dessert, and vegetables guarantee dessert. A teacher saying "if you don't turn in the homework, you fail" works the same way. Mathematics never allows this blurring. $\\rightarrow$ and $\\leftrightarrow$ stay strictly separate.`}</p>

          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">{`Everyday "if"`}</span>
              <p>{`Treats a single conditional as if it implies the reverse direction too.`}</p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">{`Mathematical "iff"`}</span>
              <p>{`Never assumes that; $\\leftrightarrow$ must be stated on purpose.`}</p>
            </div>
          </div>
        </>,

        <>
          <div className="lrn-header">
            <div>
              <h2>Quantifiers</h2>
            </div>
          </div>

          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>{`"Every number is even." Is this sentence true or false, and does it matter which numbers you're talking about?`}</p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>{`It matters a great deal. Over the natural numbers it's false, since 1 and 3 are odd. The universe of discourse changes whether a quantified claim is even meaningful to test.`}</p>
            </details>
          </div>

          <h3>Universal and Existential Quantifiers</h3>
          <p>{`The universal quantifier $\\forall$ means "for all." $\\forall x P(x)$ reads "for every $x$, $P(x)$ is true." The existential quantifier $\\exists$ means "there exists." $\\exists x P(x)$ reads "there exists an $x$ such that $P(x)$ is true."`}</p>
          <p>
            <strong>When to use this:</strong>{' '}
            {`Use a quantifier whenever a statement claims something about every member of a group ($\\forall$) or about at least one member of a group ($\\exists$), rather than about one specific, named thing.`}
          </p>

          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">{`Universal $\\forall$`}</span>
              <p>{`Demands the statement holds for every single case, with no exceptions.`}</p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">{`Existential $\\exists$`}</span>
              <p>{`Only demands one example exists somewhere.`}</p>
            </div>
          </div>

          <h3>Named Case: Where the Symbols Come From</h3>
          <p>{`$\\forall$ is an upside-down letter A, standing for "All." $\\exists$ is a backward letter E, standing for "Exists." The shapes work as a built-in memory aid.`}</p>

          <h3>Worked Example: Evaluating Quantified Statements</h3>
          <p>{`Over the real numbers, $\\forall x(x^2>0)$ is false: $x=0$ gives $x^2=0$, not greater than 0. $\\exists x(x^2-2x+3=0)$ is false too: this quadratic has no real roots. "There exists a man with brown hair" is true, since such men exist.`}</p>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>{`Why does a single counterexample, like $x=0$, defeat a $\\forall$ statement, while defeating an $\\exists$ statement needs every single case checked?`}</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>{`A $\\forall$ statement claims no exceptions exist anywhere, so finding one exception is enough to break the claim entirely. An $\\exists$ statement only claims one example exists somewhere, so ruling it out means showing every possible case fails, not just one.`}</p>
            </details>
          </div>

          <h3>Worked Example: Translating English into Quantified Symbols</h3>
          <p>{`"Someone didn't do their homework" becomes $\\exists x(\\neg H(x))$, where $H(x)$ means "$x$ did their homework."`}</p>
          <p>{`"Everything in the store is overpriced or poorly made" becomes $\\forall x(O(x) \\lor M(x))$.`}</p>
          <p>{`"Nobody's perfect" becomes $\\forall x(\\neg P(x))$: for every $x$, $x$ is not perfect.`}</p>
          <p>{`"Susan likes everyone who dislikes Joe" becomes $\\forall x(\\neg L(x,\\text{Joe}) \\rightarrow L(\\text{Susan},x))$.`}</p>
          <p>{`$A \\subseteq B$ translates as $\\forall x(x \\in A \\rightarrow x \\in B)$. $A \\cap B \\subseteq B \\setminus C$ translates the same way, with a more complex predicate on each side of $\\rightarrow$. $A \\cap \\emptyset$ relies on the fact that nothing at all is in $\\emptyset$, so this set always comes out empty no matter what $A$ is.`}</p>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>{`Why does "Susan likes everyone who dislikes Joe" need both a quantifier and a conditional, rather than a quantifier alone?`}</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>{`The claim only applies to people who dislike Joe, not to everyone in the universe. The quantifier ranges over all people, while the conditional fires the claim only when someone meets the "dislikes Joe" condition.`}</p>
            </details>
          </div>

          <h3>Worked Example: Nested Quantifiers and Ambiguous "Anyone"</h3>
          <p>{`"Everybody in the dorm has a roommate he doesn't like" needs two quantifiers: for every person $x$ in the dorm, there exists a roommate $y$ such that $x$ doesn't like $y$.`}</p>
          <p>{`"Nobody likes a sore loser" becomes $\\forall x \\neg(x \\text{ likes a sore loser})$.`}</p>
          <p>{`The measles/quarantine example shows English "anyone" is ambiguous. "If anyone has measles, the dorm is quarantined" can mean "if someone has measles" ($\\exists$), or in a different context, closer to "everyone" ($\\forall$). Both readings show that context, not the word itself, decides which quantifier fits.`}</p>
          <p>{`If $A \\subseteq B$, then $A$ and $C \\setminus B$ are disjoint for ANY set $C$. Here is why: if $x$ is in $A$ then $x$ is in $B$, but if $x$ is in $C \\setminus B$ then $x$ is not in $B$. No element can be both in $B$ and not in $B$, so nothing lies in both $A$ and $C \\setminus B$.`}</p>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>{`Why can the same English word "anyone" translate to different quantifiers depending on context?`}</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>{`English doesn't mark the difference between "at least one" and "every" the way logical notation does. The surrounding context, like whether a single sick person or a wider outbreak triggers quarantine, is what tells you which quantifier the sentence actually means.`}</p>
            </details>
          </div>

          <h3>Worked Example: Order of Quantifiers Changes Meaning</h3>
          <p>{`Compare $\\forall x \\exists y(x+y=5)$ and $\\exists y \\forall x(x+y=5)$. The first says: for every $x$, some $y$ exists that makes $x+y=5$ (always true, just pick $y=5-x$). The second says: some single $y$ exists that works for every $x$ at once (false, since no fixed $y$ satisfies $x+y=5$ for all $x$).`}</p>
          <p>{`The same pattern appears with "everyone likes someone" ($\\forall x \\exists y$, everyone has their own person they like, possibly a different person for each) versus "someone is universally liked" ($\\exists y \\forall x$, one single person liked by everyone).`}</p>

          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">{`$\\forall x \\exists y(...)$`}</span>
              <p>{`Allows a different witness for each case. The witness is the value that makes the $\\exists$ claim true.`}</p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">{`$\\exists y \\forall x(...)$`}</span>
              <p>{`Demands one witness that works for every case at once.`}</p>
            </div>
          </div>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>{`Why does picking $y=5-x$ for each $x$ prove $\\forall x \\exists y(x+y=5)$, but no single fixed $y$ can prove $\\exists y \\forall x(x+y=5)$?`}</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>{`$\\forall x \\exists y$ lets the witness $y$ change with $x$, so $y=5-x$ always exists no matter what $x$ is. $\\exists y \\forall x$ needs ONE fixed $y$ that works for every $x$ at the same time, and no single number can satisfy $x+y=5$ for every possible $x$.`}</p>
            </details>
          </div>

          <h3>Worked Example: Six Statements Over the Natural Numbers</h3>
          <p>{`Using $<$ over $\\mathbb{N}$, here are six quantified statements and why each is true or false.`}</p>
          <ul className="lrn-list">
            <li>{`$\\forall x \\exists y(x<y)$ is true: every natural number has a bigger one, so pick $y=x+1$.`}</li>
            <li>{`$\\exists y \\forall x(x<y)$ is false: no single number beats every number, since $y+1$ always beats $y$.`}</li>
            <li>{`$\\exists x \\forall y(x<y)$ is false: it would need $x<x$, which no number satisfies.`}</li>
            <li>{`$\\forall y \\exists x(x<y)$ is false: the smallest natural number, 0, has nothing below it.`}</li>
            <li>{`$\\forall x \\forall y(x<y)$ is false: take $x=y$, and $x<x$ fails.`}</li>
            <li>{`$\\exists x \\exists y(x<y)$ is true: 0 and 1 already work, since $0<1$.`}</li>
          </ul>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>{`Why does adding one to any candidate $y$ always break the claim $\\exists y \\forall x(x<y)$?`}</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>{`Whatever $y$ you pick, $y+1$ is a natural number that is not less than $y$. That single counterexample defeats the inner $\\forall x(x<y)$ for that choice of $y$, and the same trick works no matter which $y$ you pick.`}</p>
            </details>
          </div>

          <p>{`Later in this topic, the same style of reasoning about sets of sets sets up a much bigger question: can there ever be a "set of all sets"? That question waits for a fuller answer near the end of this topic.`}</p>
        </>,

        <>
          <div className="lrn-header">
            <div>
              <h2>Equivalences Involving Quantifiers</h2>
            </div>
          </div>

          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>{`If it's false that "everyone in the room is over 18," what must be true instead?`}</p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>{`At least one person in the room must be 18 or under. Negating "everyone" doesn't mean "no one"; it means "at least one exception exists."`}</p>
            </details>
          </div>

          <h3>Quantifier Negation Laws</h3>
          <p>{`Negating a quantified statement flips the quantifier and pushes the negation inside.`}</p>
          <p>
            <strong>Quantifier Negation Laws:</strong>{' '}
            {`$\\neg \\exists x P(x) \\equiv \\forall x \\neg P(x)$, and $\\neg \\forall x P(x) \\equiv \\exists x \\neg P(x)$.`}
          </p>
          <p>
            <strong>When to use this:</strong>{' '}
            {`Use these laws whenever you need to simplify the negation of a quantified statement into a positive equivalent form.`}
          </p>

          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>{`"It's not true that something has property $P$" means "everything lacks property $P$." "It's not true that everything has property $P$" means "something lacks property $P$." Both readings match ordinary intuition about negating "all" and "some" claims.`}</p>
          </div>

          <h3>{`Worked Example: Negating $A \\subseteq B$`}</h3>
          <p>{`$A \\subseteq B$ means $\\forall x(x \\in A \\rightarrow x \\in B)$. Negating it: $\\neg \\forall x(x \\in A \\rightarrow x \\in B)$ becomes $\\exists x \\neg(x \\in A \\rightarrow x \\in B)$ by the Quantifier Negation Law. Using the Conditional Law, $\\neg(x \\in A \\rightarrow x \\in B)$ becomes $x \\in A \\land x \\notin B$. So "$A$ is not a subset of $B$" means $\\exists x(x \\in A \\land x \\notin B)$: some element of $A$ that isn't in $B$.`}</p>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>{`Why does negating $x \\in A \\rightarrow x \\in B$ turn the arrow into $x \\in A \\land x \\notin B$ instead of just flipping it?`}</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>{`A conditional is only broken when its antecedent is true and its consequent is false. Negating $P \\rightarrow Q$ by the Conditional Law always lands on $P \\land \\neg Q$, capturing exactly that one breaking case, not a flipped arrow.`}</p>
            </details>
          </div>

          <h3>{`Proof: $\\neg \\forall x(x \\in A \\rightarrow x \\in B) \\equiv \\exists x(x \\in A \\land x \\notin B)$`}</h3>
          <div className="lrn-proof">
            <div className="lrn-proof-step">
              <div className="lrn-proof-step-content">
                <p>{`Start with $\\neg \\forall x(x \\in A \\rightarrow x \\in B)$. By the Quantifier Negation Law, this becomes $\\exists x \\neg(x \\in A \\rightarrow x \\in B)$.`}</p>
                <p>{`By the Conditional Law, $\\neg(P \\rightarrow Q) \\equiv P \\land \\neg Q$, so $\\neg(x \\in A \\rightarrow x \\in B)$ becomes $x \\in A \\land \\neg(x \\in B)$, which is $x \\in A \\land x \\notin B$. The full statement becomes $\\exists x(x \\in A \\land x \\notin B)$.`}</p>
              </div>
            </div>
          </div>

          <h3>Worked Example: Negating "Everyone Has a Relative He Doesn't Like"</h3>
          <p>{`"Everyone has a relative he doesn't like" is $\\forall x \\exists y(R(x,y) \\land \\neg L(x,y))$, where $R$ means "is a relative of" and $L$ means "likes." Negating step by step: $\\neg \\forall x \\exists y(...)$ becomes $\\exists x \\neg \\exists y(...)$ by the Quantifier Negation Law, which becomes $\\exists x \\forall y \\neg(...)$ by the same law applied again, which becomes $\\exists x \\forall y(\\neg R(x,y) \\lor L(x,y))$ by De Morgan's Law.`}</p>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>{`Why must the Quantifier Negation Law apply twice, once per nested quantifier, before De Morgan's Law can act?`}</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>{`The negation starts outside both quantifiers, but each application of the law only pushes it past one quantifier at a time. Only after both quantifiers have been passed does the negation sit directly against the inner conjunction, where De Morgan's Law can finally act on it.`}</p>
            </details>
          </div>

          <h3>Worked Example: "Everyone Patricia Likes, Sue Doesn't Like"</h3>
          <p>{`This statement is $\\forall x(L(P,x) \\rightarrow \\neg L(S,x))$. Negating: $\\neg \\forall x(...)$ becomes $\\exists x \\neg(L(P,x) \\rightarrow \\neg L(S,x))$ by the Quantifier Negation Law, then $\\exists x(L(P,x) \\land L(S,x))$ by the Conditional Law, with the double negative canceling. The negation says: there's someone Patricia likes and Sue also likes.`}</p>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>{`Why does the double negative in $\\neg\\neg L(S,x)$ cancel out to just $L(S,x)$ during this simplification?`}</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>{`Applying the Conditional Law to $\\neg(L(P,x) \\rightarrow \\neg L(S,x))$ produces $L(P,x) \\land \\neg\\neg L(S,x)$. Double Negation says two stacked negations always cancel, so $\\neg\\neg L(S,x)$ simplifies straight back to $L(S,x)$.`}</p>
            </details>
          </div>

          <h3>Proof: Negating "Relative Dislike"</h3>
          <div className="lrn-proof">
            <div className="lrn-proof-step">
              <div className="lrn-proof-step-content">
                <p>{`Start with $\\neg \\forall x \\exists y(R(x,y) \\land \\neg L(x,y))$. By the Quantifier Negation Law, applied once per quantifier, this becomes $\\exists x \\forall y \\neg(R(x,y) \\land \\neg L(x,y))$.`}</p>
                <p>{`By De Morgan's Law, $\\neg(R(x,y) \\land \\neg L(x,y))$ becomes $\\neg R(x,y) \\lor L(x,y)$, which by the Conditional Law is $R(x,y) \\rightarrow L(x,y)$. The whole negation becomes $\\exists x \\forall y(R(x,y) \\rightarrow L(x,y))$.`}</p>
              </div>
            </div>
          </div>

          <div className="lrn-faded">
            <div className="lrn-faded-phase">
              <span className="lrn-faded-label">COMPLETE EXAMPLE</span>
              <p>{`Apply the Quantifier Negation Law twice in a row, once for each nested quantifier, then De Morgan's Law, then the Conditional Law, to fully simplify a doubly-quantified negation.`}</p>
              <ol className="lrn-list">
                <li>{`Apply the Quantifier Negation Law to the outer quantifier.`}</li>
                <li>{`Apply it again to the inner quantifier.`}</li>
                <li>{`Apply De Morgan's Law to the resulting negated conjunction.`}</li>
                <li>{`Apply the Conditional Law to land on a clean implication.`}</li>
              </ol>
            </div>
            <div className="lrn-faded-phase lrn-faded-partial">
              <span className="lrn-faded-label">YOUR TURN: PARTIAL</span>
              <p>{`Simplify $\\neg \\exists x \\forall y(P(x,y) \\land \\neg Q(x,y))$ using the same chain.`}</p>
              <ol className="lrn-list">
                <li>{`Apply the Quantifier Negation Law to the outer quantifier: $\\rule{1cm}{0.5pt}$`}</li>
                <li>{`Apply it again to the inner quantifier: $\\rule{1cm}{0.5pt}$`}</li>
                <li>{`Apply De Morgan's Law and the Conditional Law: $\\rule{1cm}{0.5pt}$`}</li>
              </ol>
            </div>
            <div className="lrn-faded-phase">
              <span className="lrn-faded-label">INDEPENDENT PRACTICE</span>
              <p>{`Simplify $\\neg \\forall x \\exists y(A(x,y) \\rightarrow B(x,y))$ using the full four-step chain.`}</p>
            </div>
          </div>

          <h3>Interchangeable Same-Type Quantifiers</h3>
          <p>{`Two existential quantifiers in a row can swap order freely: $\\exists x \\exists y(...) \\equiv \\exists y \\exists x(...)$. The same holds for two universal quantifiers in a row: $\\forall x \\forall y(...) \\equiv \\forall y \\forall x(...)$. This only works when both quantifiers match in type; mixing $\\forall$ and $\\exists$ does not allow swapping, as the earlier "everyone likes someone" example showed.`}</p>

          <h3>Worked Example: Interchangeable Quantifiers and the Bigamist Formula</h3>
          <p>{`Take $\\exists x \\exists y(x \\text{ is a teacher} \\land x \\text{ is older than } y)$: some teacher is older than someone. Writing it as $\\exists y \\exists x(x \\text{ is a teacher} \\land x \\text{ is older than } y)$ names the younger person first, yet makes the very same claim, because two existentials in a row can trade places.`}</p>
          <p>{`Now take $\\forall x \\forall y(x \\text{ likes } y \\rightarrow x \\text{ admires } y)$: everyone admires everyone they like. Reordering it to $\\forall y \\forall x(y \\text{ likes } x \\rightarrow y \\text{ admires } x)$ checks the same pairs in a different order and means exactly the same thing.`}</p>
          <p>{`A formula describing a bigamist needs care: "$x$ is married to $y$ and $x$ is married to $z$" needs the extra condition $y \\neq z$. Without it, the formula could be satisfied just by $y$ and $z$ being the same spouse, which isn't bigamy at all.`}</p>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>{`Why does the bigamist formula fail to describe bigamy at all without adding $y \\neq z$?`}</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>{`Without $y \\neq z$, nothing stops $y$ and $z$ from naming the same single spouse, which would satisfy the formula with only one marriage. Adding $y \\neq z$ forces two genuinely different spouses, which is what actually makes someone a bigamist.`}</p>
            </details>
          </div>

          <h3>Unique Existence</h3>
          <p>{`$\\exists! x P(x)$ means "there exists exactly one $x$ such that $P(x)$." Formally: $\\exists! x P(x) \\equiv \\exists x(P(x) \\land \\neg \\exists y(P(y) \\land y \\neq x))$. This says: some $x$ has property $P$, and no other value $y$, different from $x$, also has property $P$.`}</p>

          <h3>Worked Example: Married Couples, Popularity, and Exactly One</h3>
          <p>{`"All married couples fight" becomes $\\forall x \\forall y(x \\text{ married to } y \\rightarrow x \\text{ and } y \\text{ fight})$.`}</p>
          <p>{`"Everyone likes at least two people" becomes $\\forall x \\exists y \\exists z(y \\neq z \\land L(x,y) \\land L(x,z))$: for every person $x$, two distinct people $y$ and $z$ that $x$ likes.`}</p>
          <p>{`"John likes exactly one person" uses $\\exists!$ directly: $\\exists! y\\, L(\\text{John},y)$.`}</p>

          <h3>Bounded Quantifiers</h3>
          <p>{`Bounded quantifiers restrict a quantifier to a specific set. $\\forall x \\in U\\, P(x)$ is shorthand for $\\forall x(x \\in U \\rightarrow P(x))$. $\\exists x \\in U\\, P(x)$ is shorthand for $\\exists x(x \\in U \\land P(x))$.`}</p>

          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>{`The bounded universal quantifier uses $\\rightarrow$ because "for all $x$ in $U$" only claims something about members of $U$. Being outside $U$ makes the conditional vacuously true, so it doesn't count against the statement. The bounded existential quantifier uses $\\land$ because it must actually find something both in $U$ and satisfying $P$.`}</p>
          </div>

          <h3>Bounded Quantifier Negation Laws</h3>
          <p>{`$\\neg \\forall x \\in A\\, P(x) \\equiv \\exists x \\in A\\, \\neg P(x)$, and $\\neg \\exists x \\in A\\, P(x) \\equiv \\forall x \\in A\\, \\neg P(x)$. These mirror the unbounded Quantifier Negation Laws exactly, restricted to a set $A$.`}</p>

          <h3>Proof: Bounded Quantifier Negation Law</h3>
          <div className="lrn-proof">
            <div className="lrn-proof-step">
              <div className="lrn-proof-step-content">
                <p>{`Start with $\\neg \\forall x \\in A\\, P(x)$, which expands to $\\neg \\forall x(x \\in A \\rightarrow P(x))$. By the Quantifier Negation Law, this becomes $\\exists x \\neg(x \\in A \\rightarrow P(x))$.`}</p>
                <p>{`By the Conditional Law, $\\neg(x \\in A \\rightarrow P(x))$ becomes $x \\in A \\land \\neg P(x)$. The whole thing becomes $\\exists x(x \\in A \\land \\neg P(x))$, which is exactly the bounded form $\\exists x \\in A\\, \\neg P(x)$.`}</p>
              </div>
            </div>
          </div>

          <h3>Worked Example: Number Statements, Bounded by Universe</h3>
          <p>{`Over $\\mathbb{N}$: "$n$ is a perfect square," "$n$ is a multiple of $m$," "$n$ is prime," and "the smallest common multiple of two numbers" are all naturally bounded to $\\mathbb{N}$.`}</p>
          <p>{`Over $\\mathbb{R}$: "0 is the additive identity" ($x+0=x$ for every $x$), "every number has an additive inverse" ($\\forall x \\exists y(x+y=0)$), "negative numbers have no square root" ($\\forall x(x<0 \\rightarrow \\neg \\exists y(y^2=x))$), and "positive numbers have exactly two square roots" all rely on the universe being $\\mathbb{R}$ specifically. The same claims would be false, or wouldn't make sense, over other universes.`}</p>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>{`Why does "negative numbers have no square root" depend on which universe, $\\mathbb{R}$ versus a bigger number system, you're working in?`}</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>{`Over $\\mathbb{R}$, no real number squares to a negative number, so the claim holds. Over a larger system like the complex numbers, negative numbers do have square roots, so the same sentence becomes false once the universe changes.`}</p>
            </details>
          </div>

          <h3>Note: Reading Multi-Quantifier Statements</h3>
          <p>{`When a statement has several quantifiers stacked together, read them one at a time from left to right, fixing each variable before moving to the next. This avoids the confusion that caused the $\\forall\\exists$ vs $\\exists\\forall$ mix-ups earlier in this topic.`}</p>

          <h3>Universal Quantifier Distributes Over And</h3>
          <p>{`$\\forall x(E(x) \\land T(x))$ is equivalent to $\\forall x E(x) \\land \\forall x T(x)$: saying "everything has both properties" is the same as saying "everything has the first property, and everything has the second."`}</p>

          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">{`$\\forall$ distributes over $\\land$`}</span>
              <p>{`Splitting or combining a universal claim about two properties changes nothing.`}</p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">{`$\\exists$ does not`}</span>
              <p>{`$\\exists x(E(x) \\land T(x))$ is not the same as $\\exists x E(x) \\land \\exists x T(x)$. A squirrel might be bushy-tailed while an owl is bright-eyed, so each property holds without any single thing having both at once.`}</p>
            </div>
          </div>

          <h3>Note: Quantifier Equivalences Can't Always Be Checked by a Truth Table</h3>
          <p>{`A finite truth table can always verify a connective equivalence. Quantifier equivalences are different: they involve statements over possibly infinite universes. No finite table covers every possible $x$. Checking these equivalences properly needs a different method, covered later.`}</p>
        </>,

        <>
          <div className="lrn-header">
            <div>
              <h2>More Operations on Sets</h2>
            </div>
          </div>

          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>{`If a set of sets contains $\\{1,2,3\\}$, $\\{2,3,4\\}$, and $\\{3,4,5\\}$, what single number is in every one of them?`}</p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>{`3 is in all three sets. Checking each list confirms 1, 2, 4, and 5 all fail to appear in at least one of the three.`}</p>
            </details>
          </div>

          <p>{`Sets can hold other sets as elements, be built by a rule instead of a list, and combine into intersections and unions of whole families at once. Reading these richer set expressions correctly is the key skill for this section.`}</p>
          <p>
            <strong>When to use this:</strong>{' '}
            {`Reach for these tools whenever a set is described by a formula, holds sets as its own elements, or gets combined across a whole family at once.`}
          </p>

          <h3>Worked Example: Unpacking Set Expressions</h3>
          <p>{`$y \\in \\{\\sqrt{x} \\mid x \\in \\mathbb{Q}\\}$ means $y$ equals the square root of some rational number.`}</p>
          <p>{`$\\{x_i \\mid i \\in I\\} \\subseteq A$ means every element indexed by $I$ belongs to $A$.`}</p>
          <p>{`$\\{n^2 \\mid n \\in \\mathbb{N}\\}$ and $\\{n^3 \\mid n \\in \\mathbb{N}\\}$ are not disjoint: 64 is both $8^2$ and $4^3$, so 64 belongs to both sets.`}</p>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>{`Why does finding one shared number, 64, prove the two sets are not disjoint, without checking every other number?`}</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>{`Disjoint sets share nothing at all. Finding a single element in both sets is a direct counterexample to that claim, and one counterexample is enough to disprove it, regardless of what happens elsewhere.`}</p>
            </details>
          </div>

          <h3>Power Sets</h3>
          <p>{`The power set of $A$, written $\\mathcal{P}(A)$, is the set of all subsets of $A$: $\\mathcal{P}(A) = \\{x \\mid x \\subseteq A\\}$.`}</p>
          <p>
            <strong>When to use this:</strong>{' '}
            {`Use the power set whenever you need to talk about every possible subset of a given set, all at once, as a single collection.`}
          </p>

          <h3>Worked Example: Computing a Power Set</h3>
          <p>{`Let $A=\\{7,12\\}$. Its subsets are $\\emptyset$, $\\{7\\}$, $\\{12\\}$, and $\\{7,12\\}$. So $\\mathcal{P}(A) = \\{\\emptyset, \\{7\\}, \\{12\\}, \\{7,12\\}\\}$, a set with 4 elements.`}</p>
          <p>{`$\\mathcal{P}(\\emptyset)$ is different: the empty set has exactly one subset, itself. So $\\mathcal{P}(\\emptyset) = \\{\\emptyset\\}$, a set with one element, which is itself the empty set.`}</p>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>{`Why does $\\mathcal{P}(\\emptyset)$ have one element, while $\\emptyset$ itself has zero?`}</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>{`$\\emptyset$ has zero elements by definition, so nothing belongs to it. But $\\emptyset$ does have one subset: itself, since every set is a subset of itself. That single subset becomes the one element of $\\mathcal{P}(\\emptyset)$.`}</p>
            </details>
          </div>

          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Regular set</span>
              <p>{`A regular set like $\\{7,12\\}$ has ordinary objects as elements.`}</p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Family of sets</span>
              <p>{`A family of sets, like $\\mathcal{P}(A)$, has sets themselves as elements. Every power set is automatically a family of sets.`}</p>
            </div>
          </div>

          <h3>Worked Example: Unpacking Power Set Expressions</h3>
          <p>{`$x \\in \\mathcal{P}(A)$ means $x \\subseteq A$, directly from the definition.`}</p>
          <p>{`$\\mathcal{P}(A) \\subseteq \\mathcal{P}(B)$ means every subset of $A$ is also a subset of $B$, which follows whenever $A \\subseteq B$.`}</p>
          <p>{`$B \\in \\{\\mathcal{P}(A) \\mid A \\in F\\}$ means $B$ is the power set of some set $A$ that belongs to the family $F$.`}</p>
          <p>{`$x \\in \\mathcal{P}(A \\cap B)$ means $x \\subseteq (A \\cap B)$.`}</p>
          <p>{`$x \\in \\mathcal{P}(A) \\cap \\mathcal{P}(B)$ means $x \\subseteq A$ and $x \\subseteq B$: $x$ is a subset of both.`}</p>

          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>{`An "outermost symbol first" rule guides this: identify the outermost operation or relation first, then work inward, the same discipline used earlier for nested set-builder notation.`}</p>
          </div>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>{`Why does $\\mathcal{P}(A) \\subseteq \\mathcal{P}(B)$ follow from $A \\subseteq B$, even though $\\mathcal{P}(A)$ and $\\mathcal{P}(B)$ contain sets rather than plain elements?`}</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>{`If every element of $A$ is in $B$, then any subset of $A$ automatically has all its elements inside $B$ too, making it a subset of $B$ as well. That means every element of $\\mathcal{P}(A)$ (each a subset of $A$) is also an element of $\\mathcal{P}(B)$.`}</p>
            </details>
          </div>

          <h3>Intersection and Union of a Family of Sets</h3>
          <p>{`For a family of sets $F$, $\\bigcap F = \\{x \\mid \\forall A \\in F(x \\in A)\\}$: the elements common to every set in $F$. $\\bigcup F = \\{x \\mid \\exists A \\in F(x \\in A)\\}$: the elements in at least one set of $F$.`}</p>
          <p>{`Indexed notation writes the same ideas as $\\bigcap_{i \\in I} A_i$ and $\\bigcup_{i \\in I} A_i$, when the family is indexed by a set $I$.`}</p>

          <h3>Worked Example: Intersection and Union of a Family</h3>
          <p>{`Let $F = \\{\\{1,2,3,4\\}, \\{2,3,4,5\\}, \\{3,4,5,6\\}\\}$. $\\bigcap F = \\{3,4\\}$: the numbers 3 and 4 appear in all three sets. $\\bigcup F = \\{1,2,3,4,5,6\\}$: every number that appears in at least one of the three sets.`}</p>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>{`Why do only 3 and 4 survive into $\\bigcap F$, when 2 appears in two of the three sets?`}</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>{`$\\bigcap F$ only keeps numbers appearing in EVERY set of the family, not just most of them. 2 is missing from $\\{3,4,5,6\\}$, so it fails the "every set" requirement, while 3 and 4 appear in all three.`}</p>
            </details>
          </div>

          <h3>Worked Example: Unpacking Family-of-Sets Expressions</h3>
          <p>{`$x \\in \\bigcap F$ means $x$ belongs to every set in $F$. $\\bigcap F \\subseteq \\bigcup G$ means every element common to all of $F$'s sets is also in at least one of $G$'s sets. $x \\in \\mathcal{P}(\\bigcup F)$ means $x \\subseteq \\bigcup F$. $x \\in \\bigcup \\{\\mathcal{P}(A) \\mid A \\in F\\}$ means $x$ is a subset of some particular set $A$ that belongs to $F$.`}</p>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>{`Why does $x \\in \\bigcup \\{\\mathcal{P}(A) \\mid A \\in F\\}$ only require $x$ to be a subset of ONE set $A$ in $F$, unlike $x \\in \\mathcal{P}(\\bigcup F)$?`}</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>{`A union only requires membership in at least one of the sets being combined. Since $\\bigcup \\{\\mathcal{P}(A) \\mid A \\in F\\}$ is a union across the power sets of each individual $A$, landing inside just one of them is enough, unlike $\\mathcal{P}(\\bigcup F)$ which asks $x$ to be a subset of the whole combined union.`}</p>
            </details>
          </div>

          <h3>Vacuous Truth</h3>
          <p>{`$\\forall x \\in \\emptyset\\, P(x)$ is always true, no matter what $P$ is. Since $\\emptyset$ has no elements, there's nothing to check, so the claim "every element of $\\emptyset$ has property $P$" can never be broken.`}</p>

          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>{`This might feel like a cheat, but it follows directly from the bounded quantifier definition: $\\forall x \\in \\emptyset\\, P(x)$ really means $\\forall x(x \\in \\emptyset \\rightarrow P(x))$, and $x \\in \\emptyset$ is always false, which makes the conditional always vacuously true.`}</p>
          </div>

          <h3>Worked Example: Unicorns and the Empty Set</h3>
          <p>{`"All unicorns are purple" is vacuously true, since there are no unicorns, so nothing violates the claim. This is the same logic as $\\forall x \\in \\emptyset\\, P(x)$.`}</p>

          <h3>{`Proof: $\\emptyset \\subseteq B$ for Every Set B`}</h3>
          <div className="lrn-proof">
            <div className="lrn-proof-step">
              <div className="lrn-proof-step-content">
                <p>{`$\\emptyset \\subseteq B$ means $\\forall x(x \\in \\emptyset \\rightarrow x \\in B)$. Since $x \\in \\emptyset$ is always false, $x \\in \\emptyset \\rightarrow x \\in B$ is vacuously true for every $x$, no matter what $B$ is.`}</p>
                <p>{`So $\\emptyset \\subseteq B$ holds for every set $B$, as a direct result of vacuous truth.`}</p>
              </div>
            </div>
          </div>

          <h3>Proof: A=B Derived from A⊆B∧B⊆A</h3>
          <div className="lrn-proof">
            <div className="lrn-proof-step">
              <div className="lrn-proof-step-content">
                <p>{`Set equality $A=B$ can be shown to mean the same thing as $A \\subseteq B \\land B \\subseteq A$. Write $A \\subseteq B$ as $\\forall x(x \\in A \\rightarrow x \\in B)$, and $B \\subseteq A$ as $\\forall x(x \\in B \\rightarrow x \\in A)$.`}</p>
                <p>{`Combined: $\\forall x(x \\in A \\rightarrow x \\in B) \\land \\forall x(x \\in B \\rightarrow x \\in A)$. Since $\\forall$ distributes over $\\land$, this is the same as $\\forall x[(x \\in A \\rightarrow x \\in B) \\land (x \\in B \\rightarrow x \\in A)]$, which by the Biconditional Law is $\\forall x(x \\in A \\leftrightarrow x \\in B)$: exactly the statement that $A$ and $B$ have the same elements, which is what set equality means.`}</p>
              </div>
            </div>
          </div>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>{`Why does this proof need the fact that $\\forall$ distributes over $\\land$, proven earlier in this topic?`}</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>{`The proof needs to merge two separate $\\forall x$ statements into one shared $\\forall x$ over a combined formula. Without the distribution law, combining "for every $x$, statement one" and "for every $x$, statement two" into "for every $x$, statement one and statement two" would need separate justification.`}</p>
            </details>
          </div>

          <h3>Indexed Families</h3>
          <p>{`An indexed family of sets uses an index set $I$ to label each set in the family, written $\\{x_i \\mid i \\in I\\}$.`}</p>

          <h3>Worked Example: Indexed Families with Perfect Squares and Primes</h3>
          <p>{`The perfect squares can be written as an indexed family $\\{n^2 \\mid n \\in \\mathbb{N}\\}$, indexed by $\\mathbb{N}$ itself. The first 100 primes can be described as an indexed family over the index set $\\{1,2,\\dots,100\\}$, where each index $i$ picks out the $i$-th prime.`}</p>

          <h3>Worked Example: An Indexed Family of Small Sets</h3>
          <p>{`Let $I=\\{1,2,3\\}$, and $A_i=\\{i,i+1,i+2\\}$ for each $i$ in $I$. So $A_1=\\{1,2,3\\}$, $A_2=\\{2,3,4\\}$, $A_3=\\{3,4,5\\}$.`}</p>
          <p>{`$\\bigcap_i A_i = \\{3\\}$: only 3 appears in all three sets. $\\bigcup_i A_i = \\{1,2,3,4,5\\}$: every number appearing in at least one of the three.`}</p>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>{`Why is 3 the only number common to all three sets $A_1$, $A_2$, and $A_3$?`}</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>{`Each $A_i$ shifts up by one starting point. 3 is the only number that lands inside all three three-element windows $\\{1,2,3\\}$, $\\{2,3,4\\}$, and $\\{3,4,5\\}$; every other number falls outside at least one window.`}</p>
            </details>
          </div>

          <h3>Note: Elements of a Family vs Objects Indexed</h3>
          <p>{`Keep an indexed family's elements (which are sets) distinct from the objects the index picks out. If courses are indexed by student, the family's elements are sets of courses, while the index itself ranges over students, not courses.`}</p>

          <h3>Family of Sets</h3>
          <p>{`A family of sets is a set whose elements are themselves sets, like $F=\\{A,B,C\\}$ where $A$, $B$, and $C$ are each sets in their own right.`}</p>

          <h3>Worked Example: Seven Nested-Quantifier Descriptions</h3>
          <p>{`Using students with the "likes" relation $L$ and the "admires" relation $A$, here are seven descriptions of a student $x$, each built from nested quantifiers.`}</p>
          <ul className="lrn-list">
            <li>{`Liked by everyone: $\\forall y\\, L(y,x)$.`}</li>
            <li>{`Liked by at least one person: $\\exists y\\, L(y,x)$.`}</li>
            <li>{`Liked by someone but admired by no one: $\\exists y\\, L(y,x) \\land \\neg \\exists y\\, A(y,x)$.`}</li>
            <li>{`Admired by everyone who likes them: $\\forall y(L(y,x) \\rightarrow A(y,x))$.`}</li>
            <li>{`Likes everyone who admires them: $\\forall y(A(y,x) \\rightarrow L(x,y))$.`}</li>
            <li>{`Admires no one at all: $\\forall y\\, \\neg A(x,y)$.`}</li>
            <li>{`Likes someone who does not like them back: $\\exists y(L(x,y) \\land \\neg L(y,x))$.`}</li>
          </ul>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>{`Why do "liked by everyone" and "liked by at least one person" need different quantifiers, $\\forall$ versus $\\exists$, even though both start from the same "likes" relation?`}</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>{`"Liked by everyone" claims that every single person likes $x$, with no exceptions, which is a $\\forall$ claim. "Liked by at least one person" only claims one person likes $x$ somewhere in the group, which is an $\\exists$ claim. The two are very different strengths of claim about the same relation.`}</p>
            </details>
          </div>

          <h3>Russell's Paradox</h3>
          <p>{`Define $R = \\{A \\in U \\mid A \\notin A\\}$: the set, within some universe $U$, of all sets that do not contain themselves.`}</p>
          <p>{`Substitute $R$ for $A$ in the defining statement $\\forall A \\in U(A \\in R \\leftrightarrow A \\notin A)$. This gives $R \\in R \\leftrightarrow R \\notin R$. This is a contradiction: if $R \\in R$ is true, then $R \\notin R$ must also be true, which is impossible, and if $R \\in R$ is false, then $R \\in R$ must be true by the biconditional, which is also impossible. Either way, contradiction.`}</p>

          <h3>Note: What Russell's Paradox Tells Us</h3>
          <p>{`The only way out of the contradiction is to reject the assumption that $U$ can be "the set of all sets." No such universal set can exist without producing a contradiction. This is a basic limit on naive set theory, the loose rule that any condition at all defines a set. Not every collection described by a condition can safely be called a set.`}</p>

          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>{`This matters because it shows set theory needs careful rules about which collections count as sets, rather than letting any imaginable condition define one.`}</p>
          </div>
        </>
      ]
    },
    practice: [
      {
        q: `What makes a deductive argument valid?`,
        a: `An argument is valid when the premises being true forces the conclusion to be true. It doesn't matter whether the premises are actually true in real life. Only the structure of the argument decides validity.`
      },
      {
        q: `"All framgers are wrompal. This mechanism is a framger. Therefore, this mechanism is wrompal." Is this argument valid, even though nobody knows what a framger is?`,
        a: `Yes, it's valid. Validity depends only on the form of the argument, not on the meaning of the words. Swap in any terms that fit the same slots, and the argument stays valid.`
      },
      {
        q: `What do you predict happens to a truth table's row count when you add a fourth letter to a formula that already uses three letters?`,
        a: `The row count doubles again, going from 8 rows to 16. Each added letter doubles the number of rows. Every new letter adds two possible values, T or F, to combine with every existing row.`
      },
      {
        q: `Translate "Joe is going to leave home and not come back" into logical form, using $L$ for "Joe leaves home" and $C$ for "Joe comes back."`,
        a: `The sentence becomes $L \\land \\neg C$. "Leave home" maps to $L$, and "not come back" maps to $\\neg C$, joined by "and" which is $\\land$.`
      },
      {
        q: `Build the truth table for $P \\land Q$. How many rows does it need, and what are the results?`,
        a: `It needs 4 rows, since there are two letters. $P \\land Q$ is true only in the row where both $P$ and $Q$ are true (T,T). It's false in the other three rows (T,F), (F,T), and (F,F).`
      },
      {
        q: `Why does math always treat $\\lor$ as inclusive or, rather than exclusive or?`,
        a: `Inclusive or counts a case as true whenever at least one part is true, even if both parts are true. Math needs one consistent rule for every formula. The inclusive reading keeps truth tables simple and predictable across every use of $\\lor$.`
      },
      {
        q: `A restaurant menu says "soup or salad" (exclusive or, since you can't take both). How does this differ from $P \\lor Q$ in logic?`,
        a: `The restaurant's "or" only allows one choice. Logic's $P \\lor Q$ allows both parts to be true at once and still counts the whole statement as true. Math's $\\lor$ is always inclusive, unlike this everyday use of "or."`
      },
      {
        q: `Is $\\neg(P \\land Q)$ logically equivalent to $\\neg P \\land \\neg Q$?`,
        a: `No. $\\neg(P \\land Q)$ is equivalent to $\\neg P \\lor \\neg Q$ by De Morgan's Law, not to $\\neg P \\land \\neg Q$. A truth table shows $\\neg P \\land \\neg Q$ is only true when both $P$ and $Q$ are false. But $\\neg(P \\land Q)$ is true whenever at least one of $P$ or $Q$ is false.`
      },
      {
        q: `Why is De Morgan's Law true: why does $\\neg(P \\land Q)$ mean the same thing as $\\neg P \\lor \\neg Q$?`,
        a: `$\\neg(P \\land Q)$ says "it's not the case that both are true," which only requires that at least one of them fails. That's exactly what $\\neg P \\lor \\neg Q$ says. A shared truth table confirms both formulas match in every row.`
      },
      {
        q: `Simplify $\\neg(P \\lor \\neg Q)$ using the equivalence laws.`,
        a: `Apply De Morgan's Law to get $\\neg P \\land \\neg\\neg Q$. Apply Double Negation to turn $\\neg\\neg Q$ into $Q$. The final simplified formula is $\\neg P \\land Q$.`
      },
      {
        q: `What's the difference between a tautology and a contradiction?`,
        a: `A tautology is a formula that's true in every row of its truth table, no matter what. A contradiction is a formula that's false in every row. Most formulas are neither, true in some rows and false in others.`
      },
      {
        q: `Classify $P \\lor \\neg(Q \\lor \\neg Q)$ as a tautology, a contradiction, or neither, without building a full truth table.`,
        a: `$Q \\lor \\neg Q$ is always true, a tautology, so $\\neg(Q \\lor \\neg Q)$ is always false, a contradiction. The formula reduces to $P \\lor (\\text{contradiction})$, which simplifies to just $P$. Since $P$'s truth value depends on $P$, the formula is neither a tautology nor a contradiction.`
      },
      {
        q: `What is a free variable, and what is a bound variable?`,
        a: `A free variable's value is left open. It can take any value, and the statement's truth changes depending on what you plug in. A bound variable is captured by a set-builder or quantifier and disappears from the final meaning. It is just a placeholder used to describe something.`
      },
      {
        q: `In $y \\in \\{x \\mid x \\text{ divisible by } w\\}$, which variables are free and which is bound?`,
        a: `$x$ is bound, since it's just a placeholder used to describe the set and disappears once the set is named. $y$ and $w$ are free; the truth of the whole statement depends on what values you give them.`
      },
      {
        q: `What do you predict the truth set of "$n$ is an even prime number" looks like, before working through it?`,
        a: `Many people guess it's a large or infinite set, since there are infinitely many even numbers and infinitely many primes. The actual truth set is just $\\{2\\}$. Every even number bigger than 2 can be divided by 2, so no other number is both even and prime.`
      },
      {
        q: `Why is $\\{2\\}$ the entire truth set of "$n$ is an even prime number," rather than a larger set?`,
        a: `Every even number greater than 2 is divisible by 2. That gives it a factor other than 1 and itself, so it can't be prime. Only 2 itself avoids this problem, since 2 divided by 2 just gives 1. That makes $\\{2\\}$ the complete truth set.`
      },
      {
        q: `What is the difference between $\\emptyset$ and $\\{\\emptyset\\}$?`,
        a: `$\\emptyset$ is the empty set, containing zero elements. $\\{\\emptyset\\}$ is a set containing exactly one element, which is the empty set itself. Confusing these two is a common mistake, since they look similar but have very different sizes.`
      },
      {
        q: `Is the number 5 an element of $\\{5\\}$, or a subset of $\\{5\\}$? What about the set $\\{5\\}$ itself?`,
        a: `5 is an element of $\\{5\\}$, written $5 \\in \\{5\\}$. The set $\\{5\\}$ is a subset of $\\{5\\}$, written $\\{5\\} \\subseteq \\{5\\}$, because every element of $\\{5\\}$ (just the number 5) is also in $\\{5\\}$. The number and the one-element set containing it are different kinds of objects.`
      },
      {
        q: `Compute $A \\cap B$, $A \\cup B$, and $A \\setminus B$ for $A=\\{1,2,3,4,5\\}$ and $B=\\{2,4,6,8,10\\}$.`,
        a: `$A \\cap B=\\{2,4\\}$, the numbers in both sets. $A \\cup B=\\{1,2,3,4,5,6,8,10\\}$, every number in either set. $A \\setminus B=\\{1,3,5\\}$, the numbers in $A$ that aren't in $B$.`
      },
      {
        q: `For $A=\\{1,2,3,4,5\\}$ and $B=\\{2,4,6,8,10\\}$, is $(A \\cup B) \\setminus (A \\cap B)$ the same set as $(A \\setminus B) \\cup (B \\setminus A)$?`,
        a: `Yes, both equal $\\{1,3,5,6,8,10\\}$. This shared result is called the symmetric difference, written $A \\Delta B$: the elements in exactly one of the two sets, but not both.`
      },
      {
        q: `What do you predict happens to $A \\cap B$ if $A$ and $B$ share no elements at all?`,
        a: `$A \\cap B$ comes out empty, equal to $\\emptyset$, since there's nothing common to both sets. When $A \\cap B=\\emptyset$, the sets are called disjoint.`
      },
      {
        q: `For $A=\\{\\text{red},\\text{green}\\}$ and $B=\\{\\text{red},\\text{yellow},\\text{green},\\text{purple}\\}$, is $A \\subseteq B$? Explain why or why not.`,
        a: `Yes, $A \\subseteq B$, because every element of $A$ (red and green) is also an element of $B$. Subset only requires that every element of the smaller set appears in the larger set; it doesn't require the sets to be equal in size.`
      },
      {
        q: `$A=\\{\\text{red},\\text{green}\\}$ and $C=\\{\\text{blue},\\text{purple}\\}$. Are $A$ and $C$ disjoint?`,
        a: `Yes, $A$ and $C$ are disjoint, since they share no colors at all. $A \\cap C=\\emptyset$, which is exactly the definition of disjoint sets.`
      },
      {
        q: `Prove that $x \\in A \\cap (B \\cup C)$ means the same as $x \\in (A \\cap B) \\cup (A \\cap C)$, using logical connectives.`,
        a: `$x \\in A \\cap (B \\cup C)$ means $x \\in A$ and ($x \\in B$ or $x \\in C$), which is $(x \\in A \\land x \\in B) \\lor (x \\in A \\land x \\in C)$ by the Distributive Law. That's exactly $x \\in A \\cap B$ or $x \\in A \\cap C$, meaning $x \\in (A \\cap B) \\cup (A \\cap C)$. Since both sides match for every $x$, the two sets are equal.`
      },
      {
        q: `Why does translating set membership into a logic formula (using $\\in$, $\\land$, $\\lor$) help prove a set identity like the distributive law for sets?`,
        a: `Once a set statement is rewritten as a logic formula, you can reuse the already-proven logic laws, like the Distributive Law, instead of reasoning about sets from scratch. Proving the formulas match for every $x$ proves the sets contain exactly the same elements, which is what set equality means.`
      },
      {
        q: `Prove that $A \\cap B$ and $A \\setminus B$ are always disjoint sets.`,
        a: `Suppose $x \\in (A \\cap B) \\cap (A \\setminus B)$. Then $x \\in A \\cap B$ means $x \\in A$ and $x \\in B$, but $x \\in A \\setminus B$ means $x \\in A$ and $x \\notin B$. This forces $x \\in B$ and $x \\notin B$ at the same time, which is a contradiction. So no such $x$ exists, meaning $A \\cap B$ and $A \\setminus B$ share no elements: they're disjoint.`
      },
      {
        q: `Someone claims $(A \\cup B) \\setminus B$ always equals $A$ exactly, not just $(A \\cup B) \\setminus B \\subseteq A$. Is this claim correct?`,
        a: `No. $(A \\cup B) \\setminus B$ is always a subset of $A$, but it isn't always equal to $A$. If $B$ contains elements not in $A$, those elements get removed by the $\\setminus B$, but they were never in $A$ anyway, so the two sets can end up unequal in some cases.`
      },
      {
        q: `What is the difference between the converse and the contrapositive of $P \\rightarrow Q$?`,
        a: `The converse is $Q \\rightarrow P$, made by swapping the two parts; it is generally not equivalent to the original. The contrapositive is $\\neg Q \\rightarrow \\neg P$, made by swapping and negating both parts; it's always logically equivalent to $P \\rightarrow Q$.`
      },
      {
        q: `"If your account is overdrawn, you'll be charged a fee." Is the converse of this statement, "if you're charged a fee, your account is overdrawn," guaranteed true?`,
        a: `No. The converse isn't guaranteed by the original conditional. A fee could come from something else entirely, like a monthly service charge, even when the account isn't overdrawn.`
      },
      {
        q: `What do you predict about the truth value of "if $x>2$, then $x^2>4$" when $x=1$ (so $x$ is not greater than 2)?`,
        a: `The whole conditional is still true, even though $x^2=1$ is not greater than 4. When the antecedent ($x>2$) is false, the conditional is automatically true; it hasn't been tested, so it can't be broken.`
      },
      {
        q: `Why is $P \\rightarrow Q$ counted as true whenever $P$ is false, even when $Q$ is also false?`,
        a: `The conditional only makes a promise about what happens when $P$ is true. If $P$ never happens, the promise never faces a test, so nothing can break it. This matches how proofs use conditionals: a case that never arises shouldn't count against the statement.`
      },
      {
        q: `Rewrite "at least ten people is a necessary condition for the lecture being given" using $T$ for "at least ten people show up" and $L$ for "the lecture is given."`,
        a: `This becomes $L \\rightarrow T$. A necessary condition must hold whenever the other statement is true, so the lecture being given ($L$) forces at least ten people to have shown up ($T$).`
      },
      {
        q: `What's the difference between a sufficient condition and a necessary condition?`,
        a: `A sufficient condition is enough on its own to guarantee the result; if $P$ is sufficient for $Q$, then $P \\rightarrow Q$. A necessary condition is required for the result, though it might not guarantee it alone; if $Q$ is necessary for $P$, then $P \\rightarrow Q$ as well, but described from $Q$'s perspective.`
      },
      {
        q: `How does the biconditional $P \\leftrightarrow Q$ differ from the plain conditional $P \\rightarrow Q$?`,
        a: `$P \\rightarrow Q$ only guarantees one direction: $P$ being true forces $Q$ to be true, but $Q$ could be true for other reasons. $P \\leftrightarrow Q$ guarantees both directions at once: $P$ forces $Q$, and $Q$ also forces $P$. $P \\leftrightarrow Q$ is true whenever $P$ and $Q$ share the same truth value.`
      },
      {
        q: `A parent says, "If you finish your vegetables, you get dessert." In everyday speech, does this usually mean $\\rightarrow$ or $\\leftrightarrow$?`,
        a: `In everyday speech, it usually means $\\leftrightarrow$, even though it's phrased with "if." The parent typically means no vegetables, no dessert, and vegetables guarantee dessert, both directions at once, even though mathematics would never blur $\\rightarrow$ and $\\leftrightarrow$ this way.`
      },
      {
        q: `What is the universal quantifier $\\forall$, and what is the existential quantifier $\\exists$?`,
        a: `$\\forall x P(x)$ means "for every $x$, $P(x)$ is true," demanding no exceptions. $\\exists x P(x)$ means "there exists an $x$ such that $P(x)$ is true," requiring just one example somewhere.`
      },
      {
        q: `Does $\\forall x(x^2>0)$ come out true or false over the real numbers?`,
        a: `False. When $x=0$, $x^2=0$, which is not greater than 0. A single counterexample is enough to defeat a $\\forall$ statement.`
      },
      {
        q: `What do you predict is true or false about "every number is even," if the universe of discourse is the natural numbers?`,
        a: `It's false, since 1 and 3 are natural numbers that aren't even. A single counterexample, like 1, is enough to defeat the $\\forall$ statement, the same way $x=0$ defeated $\\forall x(x^2>0)$.`
      },
      {
        q: `Why does a single counterexample defeat a $\\forall$ statement, while defeating an $\\exists$ statement requires checking every possible case?`,
        a: `A $\\forall$ statement claims something holds for every case with no exceptions, so just one failing case breaks the claim entirely. An $\\exists$ statement only claims one example exists somewhere, so ruling it out means showing that no example anywhere satisfies the property.`
      },
      {
        q: `Compare $\\forall x \\exists y(x+y=5)$ and $\\exists y \\forall x(x+y=5)$. Are they equivalent?`,
        a: `No. $\\forall x \\exists y(x+y=5)$ is true, since for every $x$ you can pick $y=5-x$. $\\exists y \\forall x(x+y=5)$ is false, since no single fixed $y$ works for every $x$ at once. Swapping the order of $\\forall$ and $\\exists$ changes the meaning.`
      },
      {
        q: `"Everyone likes someone" and "someone is universally liked" sound similar. Do they mean the same thing?`,
        a: `No. "Everyone likes someone" is $\\forall x \\exists y$, meaning each person can like a different person. "Someone is universally liked" is $\\exists y \\forall x$, meaning one single person is liked by everyone. The order of the quantifiers changes which claim is being made.`
      },
      {
        q: `What do you predict happens to the meaning of "if anyone has measles, the dorm is quarantined" if "anyone" is read as "someone" versus read as closer to "everyone"?`,
        a: `Reading "anyone" as "someone" gives an existential claim: one sick person triggers quarantine. Reading it closer to "everyone" changes the condition to require broader spread before quarantine. The same English sentence can carry two different logical meanings depending on context.`
      },
      {
        q: `Negate the statement $A \\subseteq B$, and simplify the result.`,
        a: `$A \\subseteq B$ means $\\forall x(x \\in A \\rightarrow x \\in B)$. Negating gives $\\neg \\forall x(x \\in A \\rightarrow x \\in B)$, which becomes $\\exists x \\neg(x \\in A \\rightarrow x \\in B)$ by the Quantifier Negation Law, then $\\exists x(x \\in A \\land x \\notin B)$ by the Conditional Law. So "$A$ is not a subset of $B$" means some element of $A$ isn't in $B$.`
      },
      {
        q: `What are the Quantifier Negation Laws?`,
        a: `$\\neg \\exists x P(x) \\equiv \\forall x \\neg P(x)$: if nothing has property $P$, then everything lacks it. $\\neg \\forall x P(x) \\equiv \\exists x \\neg P(x)$: if not everything has property $P$, then something lacks it.`
      },
      {
        q: `Negate "everyone in the class passed the test," using the Quantifier Negation Law.`,
        a: `"Everyone in the class passed" is $\\forall x P(x)$, where $P(x)$ means "$x$ passed." The negation $\\neg \\forall x P(x)$ becomes $\\exists x \\neg P(x)$: at least one person in the class did not pass.`
      },
      {
        q: `Why do the Quantifier Negation Laws make intuitive sense, beyond just being a rule to memorize?`,
        a: `Saying "it's not true that something has property $P$" really means nothing at all has it, which is "everything lacks $P$." Saying "it's not true that everything has property $P$" really means at least one thing is missing it, which is "something lacks $P$." Both match ordinary intuition about negating "all" and "some" claims.`
      },
      {
        q: `Why does a formula describing a bigamist need the extra condition $y \\neq z$: "$x$ is married to $y$ and $x$ is married to $z$, with $y \\neq z$"?`,
        a: `Without $y \\neq z$, the formula could be satisfied just by $y$ and $z$ being the same spouse, since nothing would stop them from matching. Adding $y \\neq z$ forces two genuinely different spouses, which is what actually makes someone a bigamist.`
      },
      {
        q: `Translate "John likes exactly one person" using unique existence notation.`,
        a: `This becomes $\\exists! y\\, L(\\text{John},y)$: there exists exactly one $y$ such that John likes $y$. $\\exists!$ guarantees both that at least one such person exists and that no other person also fits.`
      },
      {
        q: `What does the bounded quantifier $\\forall x \\in U\\, P(x)$ expand to, and why does it use $\\rightarrow$ instead of $\\land$?`,
        a: `It expands to $\\forall x(x \\in U \\rightarrow P(x))$. It uses $\\rightarrow$ because the claim is only about members of $U$; being outside $U$ makes the conditional vacuously true, so outsiders don't count against the statement. If it used $\\land$ instead, the statement would falsely require every possible $x$, not just those in $U$, to satisfy $P$.`
      },
      {
        q: `Why is $\\forall x \\in \\emptyset\\, P(x)$ always true, no matter what $P$ is?`,
        a: `Since $\\emptyset$ has no elements, there's nothing to check, so the claim "every element of $\\emptyset$ has property $P$" can never be broken. This is called vacuous truth, and it follows directly from expanding the bounded quantifier as $\\forall x(x \\in \\emptyset \\rightarrow P(x))$, where $x \\in \\emptyset$ is always false.`
      },
      {
        q: `"All unicorns are purple." Is this statement true, false, or something else, given that no unicorns exist?`,
        a: `It's vacuously true. Since there are no unicorns at all, nothing can violate the claim that they're all purple. This is the same reasoning as $\\forall x \\in \\emptyset\\, P(x)$ being always true.`
      },
      {
        q: `Prove that $\\emptyset \\subseteq B$ for every set $B$.`,
        a: `$\\emptyset \\subseteq B$ means $\\forall x(x \\in \\emptyset \\rightarrow x \\in B)$. Since $x \\in \\emptyset$ is always false for every $x$, the conditional $x \\in \\emptyset \\rightarrow x \\in B$ is vacuously true no matter what $B$ is. So $\\emptyset \\subseteq B$ holds for every set $B$, as a direct result of vacuous truth.`
      },
      {
        q: `Does $\\forall$ distribute over $\\land$? Does $\\exists$ distribute over $\\land$ the same way?`,
        a: `$\\forall$ does distribute over $\\land$: $\\forall x(E(x) \\land T(x))$ is equivalent to $\\forall x E(x) \\land \\forall x T(x)$. $\\exists$ does not: $\\exists x(E(x) \\land T(x))$ is not the same as $\\exists x E(x) \\land \\exists x T(x)$, since different things could each satisfy one property without any single thing satisfying both.`
      },
      {
        q: `"Something is bright-eyed, and something is bushy-tailed." Does this mean the same thing as "something is both bright-eyed and bushy-tailed"?`,
        a: `No. A squirrel could be bushy-tailed while an owl is bright-eyed, making the first statement true without any single animal being both. This shows $\\exists$ does not distribute over $\\land$ the way $\\forall$ does.`
      },
      {
        q: `Prove that $A=B$ is equivalent to $A \\subseteq B \\land B \\subseteq A$.`,
        a: `$A \\subseteq B$ is $\\forall x(x \\in A \\rightarrow x \\in B)$, and $B \\subseteq A$ is $\\forall x(x \\in B \\rightarrow x \\in A)$. Combined and using the fact that $\\forall$ distributes over $\\land$, this becomes $\\forall x[(x \\in A \\rightarrow x \\in B) \\land (x \\in B \\rightarrow x \\in A)]$, which by the Biconditional Law is $\\forall x(x \\in A \\leftrightarrow x \\in B)$: exactly the statement that $A$ and $B$ share the same elements, which is set equality.`
      },
      {
        q: `What do you predict is in every set of a family like $\\{\\{1,2,3,4\\},\\{2,3,4,5\\},\\{3,4,5,6\\}\\}$, before computing the intersection?`,
        a: `The numbers that repeat across all three lists are likely candidates: 3 and 4 both appear in every set, while 2 and 5 only appear in two of the three. Computing $\\bigcap F$ confirms the answer is $\\{3,4\\}$.`
      },
      {
        q: `Compute $\\bigcap F$ and $\\bigcup F$ for $F=\\{\\{1,2,3,4\\},\\{2,3,4,5\\},\\{3,4,5,6\\}\\}$.`,
        a: `$\\bigcap F=\\{3,4\\}$, since 3 and 4 are the only numbers appearing in all three sets. $\\bigcup F=\\{1,2,3,4,5,6\\}$, every number that appears in at least one of the three sets.`
      },
      {
        q: `For an indexed family with $I=\\{1,2,3\\}$ and $A_i=\\{i,i+1,i+2\\}$, compute $\\bigcap_i A_i$ and $\\bigcup_i A_i$.`,
        a: `$A_1=\\{1,2,3\\}$, $A_2=\\{2,3,4\\}$, $A_3=\\{3,4,5\\}$. $\\bigcap_i A_i=\\{3\\}$, since 3 is the only number in all three sets. $\\bigcup_i A_i=\\{1,2,3,4,5\\}$, every number in at least one of the sets.`
      },
      {
        q: `What is the power set of $A=\\{7,12\\}$?`,
        a: `$\\mathcal{P}(A)$ is the set of all subsets of $A$: $\\emptyset$, $\\{7\\}$, $\\{12\\}$, and $\\{7,12\\}$. So $\\mathcal{P}(A)=\\{\\emptyset, \\{7\\}, \\{12\\}, \\{7,12\\}\\}$, containing 4 elements.`
      },
      {
        q: `What do you predict $\\mathcal{P}(\\emptyset)$ looks like, before working it out?`,
        a: `Many people guess $\\mathcal{P}(\\emptyset)$ is empty, but it isn't. The empty set has exactly one subset, itself, so $\\mathcal{P}(\\emptyset)=\\{\\emptyset\\}$, a set with one element, which is the empty set.`
      },
      {
        q: `Why does $\\mathcal{P}(\\emptyset)$ have exactly one element, while $\\emptyset$ itself has zero elements?`,
        a: `$\\emptyset$ has zero elements by definition, so nothing belongs to it. But $\\emptyset$ does have one subset: itself, since every set is a subset of itself. That single subset becomes the one element of $\\mathcal{P}(\\emptyset)$, giving $\\mathcal{P}(\\emptyset)=\\{\\emptyset\\}$.`
      },
      {
        q: `What is the difference between a regular set and a family of sets?`,
        a: `A regular set, like $\\{7,12\\}$, has ordinary objects as elements. A family of sets has sets themselves as elements, like $\\mathcal{P}(A)$, where every element is itself a set. Every power set is automatically a family of sets.`
      },
      {
        q: `Unpack the meaning of $x \\in \\mathcal{P}(A \\cap B)$.`,
        a: `$x \\in \\mathcal{P}(A \\cap B)$ means $x \\subseteq (A \\cap B)$, directly from the definition of the power set: an element of a power set is a subset of the original set.`
      },
      {
        q: `What is Russell's Paradox, and what does it prove?`,
        a: `Define $R=\\{A \\in U \\mid A \\notin A\\}$: sets that don't contain themselves. Substituting $R$ for $A$ gives $R \\in R \\leftrightarrow R \\notin R$, a contradiction either way. This proves there can't be a universe $U$ that is "the set of all sets," since assuming one exists leads directly to this contradiction.`
      },
      {
        q: `What do you predict happens if you try to build "the set of all sets that don't contain themselves," and then ask whether that set contains itself?`,
        a: `Either answer leads to a contradiction. If it does contain itself, then by its own definition it shouldn't. If it doesn't contain itself, then by its own definition it should. This is exactly Russell's Paradox.`
      },
      {
        q: `What is the relationship between the conditional law $P \\rightarrow Q \\equiv \\neg P \\lor Q$ and the contrapositive law $P \\rightarrow Q \\equiv \\neg Q \\rightarrow \\neg P$?`,
        a: `Both are equivalent rewrites of the same conditional. $\\neg P \\lor Q$ restates the conditional using only $\\lor$ and $\\neg$. $\\neg Q \\rightarrow \\neg P$ restates it as a different conditional, with the parts swapped and negated. Both always match the original truth table of $P \\rightarrow Q$.`
      },
      {
        q: `Simplify $(R \\rightarrow C) \\land (S \\rightarrow C)$ into a single conditional.`,
        a: `Rewrite each part with the Conditional Law: $(\\neg R \\lor C) \\land (\\neg S \\lor C)$. Factor out $C$ using the Distributive Law: $(\\neg R \\land \\neg S) \\lor C$. Apply De Morgan's Law: $\\neg(R \\lor S) \\lor C$. Apply the Conditional Law again: $(R \\lor S) \\rightarrow C$.`
      },
      {
        q: `Someone claims that the argument "$(\\neg S \\land L) \\lor S$, $S$, therefore $\\neg L$" is valid because $S$ is true in the premise. Is this argument actually valid?`,
        a: `No, it's invalid. $(\\neg S \\land L) \\lor S$ simplifies to $L \\lor S$ by the Distributive and Tautology Laws, so adding "$S$" as a premise never pins down anything about $L$. A truth table shows a row where $S$ and $L$ are both true, making the premises true but $\\neg L$ false.`
      },
      {
        q: `Is "$3 < \\pi < 4$" a hidden conjunction or a hidden disjunction?`,
        a: `It's a hidden conjunction. It means "$3 < \\pi$ and $\\pi < 4$," even though it's written as one chained comparison without an explicit "and."`
      },
      {
        q: `What do you predict happens when you list every possible true/false combination for three statements $P$, $Q$, and $R$, before actually building the table?`,
        a: `The table needs 8 rows, since each of the three letters doubles the possible combinations: $2 \\times 2 \\times 2 = 8$. Every combination of T and F across $P$, $Q$, and $R$ must appear exactly once.`
      },
      {
        q: `Why is checking equivalence between $\\neg(P \\land Q)$ and $\\neg P \\lor \\neg Q$ best done using real examples, like the Yankees and Red Sox, alongside the truth table?`,
        a: `Concrete examples make the abstract truth values easier to picture, since "the Yankees didn't win, or the Red Sox didn't win" describes a specific real situation you can reason about directly. This complements the truth table, which formally confirms the equivalence holds in every row, not just the concrete case.`
      },
      {
        q: `$A \\subseteq B$ and $A \\cap B \\subseteq B \\setminus C$ are both statements about sets. How would you translate $A \\cap B \\subseteq B \\setminus C$ using quantifiers?`,
        a: `This becomes $\\forall x(x \\in A \\cap B \\rightarrow x \\in B \\setminus C)$: for every $x$, if $x$ is in both $A$ and $B$, then $x$ is in $B$ but not in $C$. It follows the same pattern as translating $A \\subseteq B$, just with a more complex predicate on each side of $\\rightarrow$.`
      },
      {
        q: `What do you predict is the meaning of $\\{x \\in U \\mid P(x)\\}$, compared to plain set-builder notation $\\{x \\mid P(x)\\}$?`,
        a: `$\\{x \\in U \\mid P(x)\\}$ restricts the search to a fixed universe $U$, only including elements of $U$ that satisfy $P(x)$. Plain $\\{x \\mid P(x)\\}$ has no such restriction and searches over any possible $x$.`
      },
      {
        q: `Why does the associative law for $\\land$ and $\\lor$ justify dropping parentheses in a chain like $P \\land Q \\land R$?`,
        a: `The associative law says grouping doesn't matter: $(P \\land Q) \\land R$ always equals $P \\land (Q \\land R)$. Since both groupings give the same result no matter where you put the parentheses, writing the chain without any parentheses at all causes no ambiguity.`
      },
      {
        q: `In the argument "The butler is lying, or the maid is lying. The maid is not lying. Therefore, the cook is lying," why is this argument invalid even though the first two statements sound reasonable together?`,
        a: `The premises only talk about the butler and the maid; neither one mentions the cook at all. The conclusion introduces the cook out of nowhere, so nothing in the premises actually supports it. An argument is only valid when its premises truly force its conclusion.`
      },
      {
        q: `When simplifying $\\neg(Q \\land \\neg P) \\lor P$ down to $\\neg Q \\lor P$, one step uses the Associative and Idempotent Laws together on $(\\neg Q \\lor P) \\lor P$. Why does that step work?`,
        a: `The Associative Law lets you regroup the three-way $\\lor$ however you like, so $(\\neg Q \\lor P) \\lor P$ can be read as $\\neg Q \\lor (P \\lor P)$. The Idempotent Law then says $P \\lor P$ is just $P$, collapsing the repeated $P$ down to a single $P$, leaving $\\neg Q \\lor P$.`
      },
      {
        q: `The formula $A \\cap \\emptyset$ always comes out equal to $\\emptyset$, no matter what $A$ is. Why does that hold?`,
        a: `$A \\cap B$ only keeps elements that are in both $A$ and $B$. Since $\\emptyset$ has no elements at all, there's nothing that can be in both $A$ and $\\emptyset$, so the intersection is forced to be empty every single time.`
      },
      {
        q: `In the proof that $A \\cap B$ and $A \\setminus B$ are always disjoint, why does assuming $x \\in (A \\cap B) \\cap (A \\setminus B)$ lead to a contradiction?`,
        a: `That assumption forces $x \\in B$ (from $A \\cap B$) and $x \\notin B$ (from $A \\setminus B$) to both hold for the same $x$ at the same time. Since a single statement can't be both true and false, no such $x$ can exist, which proves the two sets share nothing.`
      },
      {
        q: `In the derivation $\\neg \\forall x \\exists y(R(x,y) \\land \\neg L(x,y))$ becoming $\\exists x \\forall y(R(x,y) \\rightarrow L(x,y))$, why does the double negation from $\\neg\\neg L(x,y)$ cancel to $L(x,y)$ partway through?`,
        a: `After De Morgan's Law turns $\\neg(R(x,y) \\land \\neg L(x,y))$ into $\\neg R(x,y) \\lor \\neg\\neg L(x,y)$, the $\\neg\\neg$ in front of $L(x,y)$ is two negations stacked together, which by the Double Negation Law always cancels back to the original statement, $L(x,y)$.`
      },
      {
        q: `Why does the proof of $(A \\cup B) \\setminus B \\subseteq A$ reuse the exact argument form "$P \\lor Q$, $\\neg Q$, therefore $P$" instead of directly reasoning about sets?`,
        a: `Once $x \\in (A \\cup B)$ and $x \\notin B$ are translated into logic as $x \\in A \\lor x \\in B$ and $\\neg(x \\in B)$, the situation matches a pattern already proven valid earlier in this topic. Reusing a proven valid form saves the work of re-deriving the same reasoning about sets from scratch.`
      }
    ],
    reference: {
      category: 'Quick Reference',
      title: 'Sets and Logic',
      sections: [
        <>
          <h2>Deductive Arguments</h2>
          <div className="ref-formula">
            <span className="ref-formula-name">Validity</span>
            <div className="ref-formula-eq">{`$$\\text{premises true} \\rightarrow \\text{conclusion true}$$`}</div>
            <p className="ref-formula-desc">
              {`When to use: check whether a conclusion truly follows from a set of premises, regardless of whether the statements are actually true.`}
            </p>
          </div>
        </>,

        <>
          <h2>Connectives</h2>
          <div className="ref-formula">
            <span className="ref-formula-name">Conjunction</span>
            <div className="ref-formula-eq">{`$$P \\land Q$$`}</div>
            <p className="ref-formula-desc">{`When to use: join two statements when both must be true at once.`}</p>
          </div>
          <div className="ref-formula">
            <span className="ref-formula-name">Disjunction</span>
            <div className="ref-formula-eq">{`$$P \\lor Q$$`}</div>
            <p className="ref-formula-desc">
              {`When to use: join two statements when at least one must be true (inclusive or; both being true still counts).`}
            </p>
          </div>
          <div className="ref-formula">
            <span className="ref-formula-name">Negation</span>
            <div className="ref-formula-eq">{`$$\\neg P$$`}</div>
            <p className="ref-formula-desc">{`When to use: flip the truth value of a single statement.`}</p>
          </div>

          <table>
            <thead>
              <tr>
                <th>{`$P$`}</th>
                <th>{`$Q$`}</th>
                <th>{`$P \\land Q$`}</th>
                <th>{`$P \\lor Q$`}</th>
                <th>{`$\\neg P$`}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>T</td>
                <td>T</td>
                <td>T</td>
                <td>T</td>
                <td>F</td>
              </tr>
              <tr>
                <td>T</td>
                <td>F</td>
                <td>F</td>
                <td>T</td>
                <td>F</td>
              </tr>
              <tr>
                <td>F</td>
                <td>T</td>
                <td>F</td>
                <td>T</td>
                <td>T</td>
              </tr>
              <tr>
                <td>F</td>
                <td>F</td>
                <td>F</td>
                <td>F</td>
                <td>T</td>
              </tr>
            </tbody>
          </table>
        </>,

        <>
          <h2>Truth Tables</h2>
          <div className="ref-formula">
            <span className="ref-formula-name">Row count</span>
            <div className="ref-formula-eq">{`$$2^n \\text{ rows for } n \\text{ distinct letters}$$`}</div>
            <p className="ref-formula-desc">
              {`When to use: determine how many rows a truth table needs before building it.`}
            </p>
          </div>
          <div className="ref-formula">
            <span className="ref-formula-name">Valid argument check</span>
            <div className="ref-formula-eq">{`$$\\text{every row with all premises true also has a true conclusion}$$`}</div>
            <p className="ref-formula-desc">
              {`When to use: confirm an argument's validity using a shared truth table over all its statements.`}
            </p>
          </div>
          <div className="ref-formula">
            <span className="ref-formula-name">Logical equivalence</span>
            <div className="ref-formula-eq">{`$$\\text{two formulas match in every row of a shared truth table}$$`}</div>
            <p className="ref-formula-desc">{`When to use: confirm two formulas always mean the same thing.`}</p>
          </div>
        </>,

        <>
          <h2>Equivalence Laws</h2>
          <div className="ref-grid">
            <div className="ref-item">
              <strong>De Morgan's Law 1</strong>
              <p>{`$\\neg(P \\land Q) \\equiv \\neg P \\lor \\neg Q$`}</p>
            </div>
            <div className="ref-item">
              <strong>De Morgan's Law 2</strong>
              <p>{`$\\neg(P \\lor Q) \\equiv \\neg P \\land \\neg Q$`}</p>
            </div>
            <div className="ref-item">
              <strong>Commutative Law</strong>
              <p>{`$P \\land Q \\equiv Q \\land P$, $P \\lor Q \\equiv Q \\lor P$`}</p>
            </div>
            <div className="ref-item">
              <strong>Associative Law</strong>
              <p>{`Grouping doesn't matter in a chain of $\\land$ or a chain of $\\lor$.`}</p>
            </div>
            <div className="ref-item">
              <strong>Idempotent Law</strong>
              <p>{`$P \\land P \\equiv P$, $P \\lor P \\equiv P$`}</p>
            </div>
            <div className="ref-item">
              <strong>{`Distributive Law ($\\land$ over $\\lor$)`}</strong>
              <p>{`$P \\land (Q \\lor R) \\equiv (P \\land Q) \\lor (P \\land R)$`}</p>
            </div>
            <div className="ref-item">
              <strong>{`Distributive Law ($\\lor$ over $\\land$)`}</strong>
              <p>{`$P \\lor (Q \\land R) \\equiv (P \\lor Q) \\land (P \\lor R)$`}</p>
            </div>
            <div className="ref-item">
              <strong>Double Negation</strong>
              <p>{`$\\neg\\neg P \\equiv P$`}</p>
            </div>
            <div className="ref-item">
              <strong>Absorption Law</strong>
              <p>{`$P \\land (P \\lor Q) \\equiv P$, $P \\lor (P \\land Q) \\equiv P$`}</p>
            </div>
            <div className="ref-item">
              <strong>Tautology Laws</strong>
              <p>{`$P \\land (\\text{taut}) \\equiv P$, $P \\lor (\\text{taut}) \\equiv \\text{taut}$, $\\neg(\\text{taut}) \\equiv \\text{contradiction}$`}</p>
            </div>
            <div className="ref-item">
              <strong>Contradiction Laws</strong>
              <p>{`$P \\lor (\\text{contradiction}) \\equiv P$, $P \\land (\\text{contradiction}) \\equiv \\text{contradiction}$, $\\neg(\\text{contradiction}) \\equiv \\text{taut}$`}</p>
            </div>
          </div>
          <ul>
            <li>{`De Morgan's: push negation through $\\land$ or $\\lor$.`}</li>
            <li>{`Commutative: reorder the two sides.`}</li>
            <li>{`Associative: drop or rearrange parentheses.`}</li>
            <li>{`Idempotent: collapse a repeated statement.`}</li>
            <li>{`Distributive: factor or expand across a connective.`}</li>
            <li>{`Absorption: cancel a statement that reappears inside a nested connective.`}</li>
            <li>{`Double Negation: cancel stacked negations.`}</li>
            <li>{`Tautology and Contradiction: simplify once you spot one hiding inside.`}</li>
          </ul>
        </>,

        <>
          <h2>Sets: Core Notation</h2>
          <div className="ref-formula">
            <span className="ref-formula-name">Set-builder notation</span>
            <div className="ref-formula-eq">{`$$\\{x \\mid P(x)\\}$$`}</div>
            <p className="ref-formula-desc">
              {`When to use: define a set by a condition instead of listing every element.`}
            </p>
          </div>
          <div className="ref-formula">
            <span className="ref-formula-name">Bounded set-builder</span>
            <div className="ref-formula-eq">{`$$\\{x \\in U \\mid P(x)\\}$$`}</div>
            <p className="ref-formula-desc">{`When to use: restrict a set-builder search to a fixed universe $U$.`}</p>
          </div>
          <div className="ref-formula">
            <span className="ref-formula-name">Truth set</span>
            <div className="ref-formula-eq">{`$$\\{x \\mid P(x)\\}, \\text{ every value making } P(x) \\text{ true}$$`}</div>
            <p className="ref-formula-desc">
              {`When to use: describe every value of $x$ for which a one-variable statement holds.`}
            </p>
          </div>
        </>,

        <>
          <h2>Set Operations</h2>
          <div className="ref-formula">
            <span className="ref-formula-name">Intersection</span>
            <div className="ref-formula-eq">{`$$A \\cap B = \\{x \\mid x \\in A \\text{ and } x \\in B\\}$$`}</div>
            <p className="ref-formula-desc">{`When to use: describe the elements shared by two sets.`}</p>
          </div>
          <div className="ref-formula">
            <span className="ref-formula-name">Union</span>
            <div className="ref-formula-eq">{`$$A \\cup B = \\{x \\mid x \\in A \\text{ or } x \\in B\\}$$`}</div>
            <p className="ref-formula-desc">{`When to use: describe every element in either set, or both.`}</p>
          </div>
          <div className="ref-formula">
            <span className="ref-formula-name">Difference</span>
            <div className="ref-formula-eq">{`$$A \\setminus B = \\{x \\mid x \\in A \\text{ and } x \\notin B\\}$$`}</div>
            <p className="ref-formula-desc">{`When to use: describe the elements in one set but not the other.`}</p>
          </div>
          <div className="ref-formula">
            <span className="ref-formula-name">Symmetric difference</span>
            <div className="ref-formula-eq">{`$$A \\Delta B = (A \\cup B) \\setminus (A \\cap B) = (A \\setminus B) \\cup (B \\setminus A)$$`}</div>
            <p className="ref-formula-desc">
              {`When to use: describe the elements in exactly one of two sets, but not both.`}
            </p>
          </div>
          <div className="ref-formula">
            <span className="ref-formula-name">Subset</span>
            <div className="ref-formula-eq">{`$$A \\subseteq B: \\text{every element of } A \\text{ is also in } B$$`}</div>
            <p className="ref-formula-desc">{`When to use: state that one set is entirely contained in another.`}</p>
          </div>
          <div className="ref-formula">
            <span className="ref-formula-name">Disjoint sets</span>
            <div className="ref-formula-eq">{`$$A \\cap B = \\emptyset$$`}</div>
            <p className="ref-formula-desc">{`When to use: state that two sets share no elements at all.`}</p>
          </div>
          <div className="ref-formula">
            <span className="ref-formula-name">Distributive law for sets</span>
            <div className="ref-formula-eq">{`$$A \\cap (B \\cup C) = (A \\cap B) \\cup (A \\cap C); \\quad A \\setminus (B \\cap C) = (A \\setminus B) \\cup (A \\setminus C)$$`}</div>
            <p className="ref-formula-desc">
              {`When to use: rewrite an intersection or difference across a union, by translating to logic and back.`}
            </p>
          </div>
          <div className="ref-formula">
            <span className="ref-formula-name">{`$(A \\cup B) \\setminus B \\subseteq A$`}</span>
            <div className="ref-formula-eq">{`$$\\text{using the valid form } P \\lor Q, \\neg Q \\therefore P$$`}</div>
            <p className="ref-formula-desc">
              {`When to use: show that removing $B$ from a union always lands you back inside $A$ (though not necessarily equal to $A$).`}
            </p>
          </div>
          <div className="ref-formula">
            <span className="ref-formula-name">{`$\\emptyset \\subseteq B$ for every set B`}</span>
            <div className="ref-formula-eq">{`$$\\text{vacuous truth: } x \\in \\emptyset \\text{ is always false}$$`}</div>
            <p className="ref-formula-desc">
              {`When to use: justify why the empty set is automatically a subset of any set, with no case-by-case check needed.`}
            </p>
          </div>
          <div className="ref-formula">
            <span className="ref-formula-name">Set equality</span>
            <div className="ref-formula-eq">{`$$A = B \\equiv A \\subseteq B \\land B \\subseteq A$$`}</div>
            <p className="ref-formula-desc">{`When to use: prove two sets are equal by showing each is a subset of the other.`}</p>
          </div>

          <table>
            <thead>
              <tr>
                <th>Operation</th>
                <th>Symbol</th>
                <th>Keeps</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Intersection</td>
                <td>{`$\\cap$`}</td>
                <td>elements in both sets</td>
              </tr>
              <tr>
                <td>Union</td>
                <td>{`$\\cup$`}</td>
                <td>elements in either set</td>
              </tr>
              <tr>
                <td>Difference</td>
                <td>{`$\\setminus$`}</td>
                <td>elements in the first set only</td>
              </tr>
            </tbody>
          </table>
        </>,

        <>
          <h2>The Conditional and Biconditional</h2>
          <div className="ref-formula">
            <span className="ref-formula-name">Conditional</span>
            <div className="ref-formula-eq">{`$$P \\rightarrow Q$$`}</div>
            <p className="ref-formula-desc">
              {`When to use: express "if $P$, then $Q$," where $P$ is the antecedent and $Q$ is the consequent.`}
            </p>
          </div>
          <div className="ref-formula">
            <span className="ref-formula-name">Conditional Law 1</span>
            <div className="ref-formula-eq">{`$$P \\rightarrow Q \\equiv \\neg P \\lor Q$$`}</div>
            <p className="ref-formula-desc">{`When to use: rewrite a conditional using only $\\lor$ and $\\neg$.`}</p>
          </div>
          <div className="ref-formula">
            <span className="ref-formula-name">Conditional Law 2</span>
            <div className="ref-formula-eq">{`$$P \\rightarrow Q \\equiv \\neg(P \\land \\neg Q)$$`}</div>
            <p className="ref-formula-desc">
              {`When to use: rewrite a conditional as the negation of a specific conjunction.`}
            </p>
          </div>
          <div className="ref-formula">
            <span className="ref-formula-name">Contrapositive Law</span>
            <div className="ref-formula-eq">{`$$P \\rightarrow Q \\equiv \\neg Q \\rightarrow \\neg P$$`}</div>
            <p className="ref-formula-desc">{`When to use: replace a conditional with its always-equivalent contrapositive.`}</p>
          </div>
          <div className="ref-formula">
            <span className="ref-formula-name">Converse</span>
            <div className="ref-formula-eq">{`$$Q \\rightarrow P$$`}</div>
            <p className="ref-formula-desc">
              {`When to use: recognize the reversed form of a conditional; note it is generally NOT equivalent to the original.`}
            </p>
          </div>
          <div className="ref-formula">
            <span className="ref-formula-name">Biconditional</span>
            <div className="ref-formula-eq">{`$$P \\leftrightarrow Q \\equiv (P \\rightarrow Q) \\land (Q \\rightarrow P)$$`}</div>
            <p className="ref-formula-desc">
              {`When to use: express "$P$ if and only if $Q$," guaranteeing both directions at once.`}
            </p>
          </div>
          <div className="ref-formula">
            <span className="ref-formula-name">Sufficient condition</span>
            <div className="ref-formula-eq">{`$$P \\text{ sufficient for } Q \\text{ means } P \\rightarrow Q$$`}</div>
            <p className="ref-formula-desc">
              {`When to use: state that $P$ being true is enough on its own to guarantee $Q$.`}
            </p>
          </div>
          <div className="ref-formula">
            <span className="ref-formula-name">Necessary condition</span>
            <div className="ref-formula-eq">{`$$Q \\text{ necessary for } P \\text{ means } P \\rightarrow Q$$`}</div>
            <p className="ref-formula-desc">
              {`When to use: state that $Q$ must hold whenever $P$ does, described from $Q$'s side.`}
            </p>
          </div>

          <table>
            <thead>
              <tr>
                <th>{`$P$`}</th>
                <th>{`$Q$`}</th>
                <th>{`$P \\rightarrow Q$`}</th>
                <th>{`$P \\leftrightarrow Q$`}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>T</td>
                <td>T</td>
                <td>T</td>
                <td>T</td>
              </tr>
              <tr>
                <td>T</td>
                <td>F</td>
                <td>F</td>
                <td>F</td>
              </tr>
              <tr>
                <td>F</td>
                <td>T</td>
                <td>T</td>
                <td>F</td>
              </tr>
              <tr>
                <td>F</td>
                <td>F</td>
                <td>T</td>
                <td>T</td>
              </tr>
            </tbody>
          </table>

          <table>
            <thead>
              <tr>
                <th>Phrase</th>
                <th>Symbolic form</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{`"P if Q"`}</td>
                <td>{`$Q \\rightarrow P$`}</td>
              </tr>
              <tr>
                <td>{`"P only if Q"`}</td>
                <td>{`$P \\rightarrow Q$`}</td>
              </tr>
              <tr>
                <td>{`"P is sufficient for Q"`}</td>
                <td>{`$P \\rightarrow Q$`}</td>
              </tr>
              <tr>
                <td>{`"P is necessary for Q"`}</td>
                <td>{`$Q \\rightarrow P$`}</td>
              </tr>
            </tbody>
          </table>
        </>,

        <>
          <h2>Quantifiers</h2>
          <div className="ref-formula">
            <span className="ref-formula-name">Universal quantifier</span>
            <div className="ref-formula-eq">{`$$\\forall x P(x): \\text{for every } x, P(x) \\text{ is true}$$`}</div>
            <p className="ref-formula-desc">
              {`When to use: claim a property holds for every member of a group, with no exceptions.`}
            </p>
          </div>
          <div className="ref-formula">
            <span className="ref-formula-name">Existential quantifier</span>
            <div className="ref-formula-eq">{`$$\\exists x P(x): \\text{there exists an } x \\text{ such that } P(x) \\text{ is true}$$`}</div>
            <p className="ref-formula-desc">
              {`When to use: claim a property holds for at least one member of a group.`}
            </p>
          </div>
          <div className="ref-formula">
            <span className="ref-formula-name">Bounded universal quantifier</span>
            <div className="ref-formula-eq">{`$$\\forall x \\in U\\, P(x) \\equiv \\forall x(x \\in U \\rightarrow P(x))$$`}</div>
            <p className="ref-formula-desc">{`When to use: restrict a $\\forall$ claim to members of a specific set $U$.`}</p>
          </div>
          <div className="ref-formula">
            <span className="ref-formula-name">Bounded existential quantifier</span>
            <div className="ref-formula-eq">{`$$\\exists x \\in U\\, P(x) \\equiv \\exists x(x \\in U \\land P(x))$$`}</div>
            <p className="ref-formula-desc">{`When to use: restrict an $\\exists$ claim to members of a specific set $U$.`}</p>
          </div>
          <div className="ref-formula">
            <span className="ref-formula-name">Unique existence</span>
            <div className="ref-formula-eq">{`$$\\exists! x P(x) \\equiv \\exists x(P(x) \\land \\neg \\exists y(P(y) \\land y \\neq x))$$`}</div>
            <p className="ref-formula-desc">
              {`When to use: claim exactly one thing has property $P$, no more and no fewer.`}
            </p>
          </div>

          <table>
            <thead>
              <tr>
                <th>Quantifier order</th>
                <th>Meaning</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{`$\\forall x \\exists y(...)$`}</td>
                <td>
                  for every $x$, some $y$ exists that works, possibly a different $y$ each time
                </td>
              </tr>
              <tr>
                <td>{`$\\exists y \\forall x(...)$`}</td>
                <td>one single $y$ exists that works for every $x$ at once</td>
              </tr>
            </tbody>
          </table>
        </>,

        <>
          <h2>Quantifier Negation Laws</h2>
          <div className="ref-grid">
            <div className="ref-item">
              <strong>Unbounded quantifier negation 1</strong>
              <p>{`$\\neg \\exists x P(x) \\equiv \\forall x \\neg P(x)$`}</p>
            </div>
            <div className="ref-item">
              <strong>Unbounded quantifier negation 2</strong>
              <p>{`$\\neg \\forall x P(x) \\equiv \\exists x \\neg P(x)$`}</p>
            </div>
            <div className="ref-item">
              <strong>Bounded quantifier negation 1</strong>
              <p>{`$\\neg \\forall x \\in A\\, P(x) \\equiv \\exists x \\in A\\, \\neg P(x)$`}</p>
            </div>
            <div className="ref-item">
              <strong>Bounded quantifier negation 2</strong>
              <p>{`$\\neg \\exists x \\in A\\, P(x) \\equiv \\forall x \\in A\\, \\neg P(x)$`}</p>
            </div>
            <div className="ref-item">
              <strong>{`Universal distributes over $\\land$`}</strong>
              <p>{`$\\forall x(E(x) \\land T(x)) \\equiv \\forall x E(x) \\land \\forall x T(x)$`}</p>
            </div>
          </div>
          <ul>
            <li>{`Negate a "some" claim into an "all lack it" claim.`}</li>
            <li>{`Negate an "all" claim into a "some lack it" claim.`}</li>
            <li>{`Apply the same negations restricted to a set $A$.`}</li>
            <li>{`Split or combine a universal claim about two properties; note $\\exists$ does NOT distribute this way.`}</li>
          </ul>
        </>,

        <>
          <h2>Power Sets and Families of Sets</h2>
          <div className="ref-formula">
            <span className="ref-formula-name">Power set</span>
            <div className="ref-formula-eq">{`$$\\mathcal{P}(A) = \\{x \\mid x \\subseteq A\\}$$`}</div>
            <p className="ref-formula-desc">
              {`When to use: describe every possible subset of $A$ as a single collection.`}
            </p>
          </div>
          <div className="ref-formula">
            <span className="ref-formula-name">Power set of the empty set</span>
            <div className="ref-formula-eq">{`$$\\mathcal{P}(\\emptyset) = \\{\\emptyset\\}$$`}</div>
            <p className="ref-formula-desc">
              {`When to use: remember that $\\emptyset$ has exactly one subset (itself), so its power set has one element, not zero.`}
            </p>
          </div>
          <div className="ref-formula">
            <span className="ref-formula-name">Intersection of a family</span>
            <div className="ref-formula-eq">{`$$\\bigcap F = \\{x \\mid \\forall A \\in F(x \\in A)\\}$$`}</div>
            <p className="ref-formula-desc">
              {`When to use: describe the elements common to every set in a family $F$.`}
            </p>
          </div>
          <div className="ref-formula">
            <span className="ref-formula-name">Union of a family</span>
            <div className="ref-formula-eq">{`$$\\bigcup F = \\{x \\mid \\exists A \\in F(x \\in A)\\}$$`}</div>
            <p className="ref-formula-desc">{`When to use: describe the elements in at least one set of a family $F$.`}</p>
          </div>
          <div className="ref-formula">
            <span className="ref-formula-name">Indexed family notation</span>
            <div className="ref-formula-eq">{`$$\\bigcap_{i \\in I} A_i, \\quad \\bigcup_{i \\in I} A_i$$`}</div>
            <p className="ref-formula-desc">
              {`When to use: refer to intersections and unions of a family indexed by a set $I$.`}
            </p>
          </div>
        </>,

        <>
          <h2>Russell's Paradox</h2>
          <div className="ref-formula">
            <span className="ref-formula-name">Russell's set</span>
            <div className="ref-formula-eq">{`$$R = \\{A \\in U \\mid A \\notin A\\}$$`}</div>
            <p className="ref-formula-desc">
              {`When to use: illustrate why "the set of all sets" cannot exist; substituting $R$ for $A$ gives the contradiction $R \\in R \\leftrightarrow R \\notin R$.`}
            </p>
          </div>
        </>
      ]
    },
    customCss: null
  }
  return config
}

export default function SetsAndLogic() {
  const config = useConfig()
  return <LearningTemplate config={config} />
}
