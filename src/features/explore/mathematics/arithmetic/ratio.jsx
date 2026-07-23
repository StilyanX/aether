import { LearningTemplate } from '../../../../components/learning/learning-template'
import { useVizColors } from '../../../../hooks/use-viz-colors'
import * as viz from './ratio-viz'

function useConfig() {
  const C = useVizColors()
  const config = {
    cssPrefix: 'rat',
    documentTitle: 'Ratio - AETHER',
    learning: {
      groupTitle: 'Ratio, Proportion, and Rate',
      category: 'Arithmetic',
      title: 'Ratio',
      subtitle: 'What ratio really means, why it is a division, and how to use it precisely.',
      sections: [
        // Section 0: What Ratio Really Means
        <>
          <h2>What Ratio Really Means</h2>
          <p>
            {`Ratio lets you scale a recipe, share a bill, read a map, or compare two crowds without counting them. Every one of those uses the same idea: a division.`}
          </p>
          <p>
            {`Most textbooks give four different definitions: "comparative index", "comparison of two quantities", "scale between them", "relationship between numbers". None of these tell you what to do. They leave you guessing what "comparison" means mathematically.`}
          </p>
          <p>
            {`The name does not matter. Only the reasoning and the method matter. Every vague definition fails because it gives you no rule for computing.`}
          </p>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>{`Before reading on: write down what you think $4:5$ means. Is it a pair of numbers, a single number, or something else?`}</p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>{`A ratio is a single number: the division $\\frac{4}{5}$. The notation $4:5$ is just a way of writing that fraction. It is not a pair.`}</p>
            </details>
          </div>
          <p>
            {`Here is the precise definition. Let $M$ and $N$ be nonzero quantities on the same number line, same unit, same type (say, $M = 12$ boys and $N = 15$ girls). The ratio of $M$ to $N$ is the number $a:b$ where $\\frac{M}{N} = \\frac{a}{b}$.`}
          </p>
          <div className="lrn-eq lrn-eq-hero">{`$$\\text{ratio of } M \\text{ to } N \\;=\\; \\frac{M}{N}$$`}</div>
          <p>
            {`A ratio is a division, nothing more and nothing less. The notation $a:b$ is Leibniz's shorthand, from the 1600s, for the fraction $\\frac{a}{b}$.`}
          </p>
          <div className="lrn-graph">
            <viz.RatioBoysGirls45 C={C} />
          </div>
          <div className="lrn-callout">
            <p>{`When to use ratio: reach for ratio when you want to compare two quantities by multiplication, not by subtraction. "How many times bigger?" is a ratio question. "How much bigger?" is a subtraction question.`}</p>
          </div>
          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS USEFUL?</span>
            <p>{`Treating ratio as a division gives you four concrete advantages.`}</p>
            <ul className="lrn-list">
              <li>{`It is a single number, so it has one clear value.`}</li>
              <li>{`Both textbook interpretations of ratio follow as logical consequences.`}</li>
              <li>{`It uses only concepts you already know.`}</li>
              <li>{`Writing ratio as a fraction lets you compute directly with algebra.`}</li>
            </ul>
            <p>
              {`Compare that to "comparison": you cannot add, subtract, or multiply a "comparison". You can do all of those with a fraction.`}
            </p>
          </div>
          <div className="lrn-callout">
            <p>{`Leibniz (1646-1716) introduced the $a:b$ notation. He co-discovered calculus and was a pioneer in symbolic logic. The colon notation survives today because it is compact and has one clear meaning.`}</p>
          </div>
          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>{`Why must $M$ and $N$ be on the same number line? What goes wrong if they are different types of quantity?`}</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>{`Division $\\frac{M}{N}$ only makes sense when $M$ and $N$ are the same type. If $M = 90$ km and $N = 2$ hours, the result is not a pure ratio. It is a rate with units $\\frac{\\text{km}}{\\text{h}}$. Ratio requires the units to cancel. When quantities have different types, the result is a rate, not a ratio.`}</p>
            </details>
          </div>
        </>,

        // Section 1: Whole-Number Ratios on the Number Line
        <>
          <h2>Whole-Number Ratios on the Number Line</h2>
          <p>
            {`This is the rigorous core. Work through the auditorium example carefully. In a class, the ratio of boys to girls is $4:5$. This means $\\frac{B}{G} = \\frac{4}{5}$.`}
          </p>
          <div className="lrn-callout lrn-warning">
            <p>{`The order is part of the ratio. $4:5$ is not the same as $5:4$. Swapping the terms changes the value of the fraction.`}</p>
          </div>
          <div className="lrn-callout">
            <span className="lrn-callout-label">First, one move you will use a lot</span>
            <p>{`You already know how to compare two fractions by cross-multiplying. Here you need a different move: turning an equation between two fractions into an equation between two products.`}</p>
            <p>{`The rule: if $\\frac{p}{q} = \\frac{r}{s}$, then $ps = qr$.`}</p>
            <p>{`Why it is true: start with $\\frac{p}{q} = \\frac{r}{s}$. Multiply both sides by $q$, then by $s$. The left side becomes $ps$ and the right side becomes $qr$. Multiplying both sides of a true equation by the same nonzero number keeps it true. So $ps = qr$.`}</p>
          </div>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>{`From $\\frac{B}{G} = \\frac{4}{5}$, can you find a single quantity $U$ such that $B = 4U$ and $G = 5U$? Try it before reading on.`}</p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>{`Cross-multiplying (multiplying both sides by both denominators) gives $5B = 4G$, so $\\frac{B}{4} = \\frac{G}{5}$. Call this common value $U$. Then $B = 4U$ and $G = 5U$.`}</p>
            </details>
          </div>
          <p>
            {`Cross-multiply $\\frac{B}{G} = \\frac{4}{5}$ to get $5B = 4G$. Rearranging gives $\\frac{B}{4} = \\frac{G}{5}$. Let $U$ be the common value of both sides. Then $B = 4U$ and $G = 5U$.`}
          </p>
          <p>
            {`You can read $U$ in two ways. As a group size: divide $G$ into 5 equal groups and $B$ fills 4 of those same groups. As a new unit: $B$ measures 4 of those units and $G$ measures 5.`}
          </p>
          <div className="lrn-callout lrn-warning">
            <p>{`The ratio $4:5$ does NOT mean boys $= 4$ and girls $= 5$. By the theorem, boys $= 4u$ and girls $= 5u$ for some positive $u$. The actual values depend on the total.`}</p>
          </div>
          <p>
            {`This result is general. The Whole-Number Ratio Theorem: if $M:N = a:b$ where $a$ and $b$ are nonzero whole numbers, then there exists a number $u$ with $M = au$ and $N = bu$.`}
          </p>
          <div className="lrn-proof">
            <p>
              <strong>Proof.</strong>
            </p>
            <ol className="lrn-list">
              <li>{`By hypothesis, $\\frac{M}{N} = \\frac{a}{b}$.`}</li>
              <li>{`Cross-multiply (multiply both sides by $b$ and by $N$): $Mb = Na$.`}</li>
              <li>{`Rearrange: $\\frac{M}{a} = \\frac{N}{b}$.`}</li>
              <li>{`Define $u = \\frac{M}{a} = \\frac{N}{b}$.`}</li>
              <li>{`Then $M = au$ and $N = bu$. The proof is finished.`}</li>
            </ol>
          </div>
          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>{`Step 2 uses cross-multiplication. Why is that step valid for fractions, not just whole numbers?`}</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>{`Cross-multiplication follows from the rule $\\frac{p}{q} = \\frac{r}{s} \\iff ps = qr$. This rule holds for all nonzero fractions, not just whole numbers. Step 2 uses it directly.`}</p>
            </details>
          </div>
          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY DOES THE PROOF WORK?</span>
            <p>
              {`Cross-multiplication turns $\\frac{M}{N} = \\frac{a}{b}$ from a statement about two fractions into two equal products. Rearranging then gives both $M$ and $N$ as multiples of the same $u$.`}
            </p>
            <p>
              {`When the ratio is in simplest form, $u$ comes out a whole number. Now you can turn any whole-number ratio into actual quantities.`}
            </p>
          </div>
        </>,

        // Section 2: Fractional Ratios
        <>
          <h2>Fractional Ratios: The Same Theorem Holds</h2>
          <p>
            {`What if $a$ and $b$ in the ratio $a:b$ are themselves fractions? The Whole-Number Ratio Theorem still holds. The only difference is in the proof step that justifies $M = au$.`}
          </p>
          <p>
            {`Fractional Ratio Theorem: if $M:N = a:b$ where $a$ and $b$ are nonzero fractions, then there exists a number $u$ with $M = au$ and $N = bu$.`}
          </p>
          <div className="lrn-proof">
            <p>
              <strong>Proof sketch.</strong>
            </p>
            <ol className="lrn-list">
              <li>{`Same cross-multiplication step: $\\frac{M}{N} = \\frac{a}{b}$ gives $\\frac{M}{a} = \\frac{N}{b}$.`}</li>
              <li>{`Define $u = \\frac{M}{a} = \\frac{N}{b}$.`}</li>
              <li>{`Then $M = au$ and $N = bu$. The step $M = au$ uses the same rule as fraction multiplication.`}</li>
            </ol>
          </div>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>{`Convert the fractional ratio $\\tfrac{1}{2}:\\tfrac{3}{4}$ into a whole-number ratio. What is the simplest form?`}</p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>{`Multiply both parts by LCM$(2, 4) = 4$: $\\tfrac{1}{2} \\times 4 : \\tfrac{3}{4} \\times 4 = 2:3$.`}</p>
            </details>
          </div>
          <p>
            {`Any fraction ratio can be rewritten as a whole-number ratio by clearing denominators. Multiply both parts by the LCM of the denominators. For example, $\\tfrac{1}{2}:\\tfrac{3}{4}$ becomes $2:3$ after multiplying both parts by 4.`}
          </p>
          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>{`Why does multiplying both parts of a ratio by the same nonzero number give an equivalent ratio?`}</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>{`Ratio is a division: $a:b = \\frac{a}{b}$. Multiplying both parts by $c$ gives $\\frac{ca}{cb} = \\frac{a}{b}$. The fraction does not change. This is the Leibniz scaling rule $a:b = ca:cb$.`}</p>
            </details>
          </div>
          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY ONE THEOREM COVERS BOTH CASES</span>
            <p>{`The whole-number proof and the fractional proof share four of five steps. In the whole-number case, $M = au$ uses direct multiplication. In the fractional case, $M = au$ uses the same rule applied to fractions.`}</p>
            <p>{`The structure of the argument is the same in both cases. One theorem covers both.`}</p>
          </div>
        </>,

        // Section 3: The Auditorium Problem, Four Ways
        <>
          <h2>The Auditorium Problem, Four Ways</h2>
          <p>
            {`Problem 1: In a class of 27 students, the ratio of boys to girls is $4:5$. How many boys and how many girls are there?`}
          </p>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>{`Try to solve it before reading the four solutions. Write your method and answer.`}</p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>{`Answer: 12 boys, 15 girls. There are many valid methods. All four below give the same answer for different reasons.`}</p>
            </details>
          </div>

          <p>{`Every method below isolates one unknown. You undo the operation around it: subtract to undo adding, multiply to undo dividing.`}</p>
          <div className="lrn-steps">
            <span className="lrn-steps-label">SOLUTION 1: Algebra</span>
            <ol className="lrn-list">
              <li>{`From $\\frac{B}{G} = \\frac{4}{5}$, write $B = \\frac{4}{5}G$.`}</li>
              <li>{`Substitute into $B + G = 27$: $\\frac{4}{5}G + G = 27$.`}</li>
              <li>{`Combine: $\\frac{9}{5}G = 27$.`}</li>
              <li>{`Solve: $G = 27 \\times \\frac{5}{9} = 15$.`}</li>
              <li>{`Then $B = 27 - 15 = 12$.`}</li>
            </ol>
          </div>
          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>{`In step 3, why does $\\frac{4}{5}G + G$ equal $\\frac{9}{5}G$?`}</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>{`$G = \\frac{5}{5}G$. So $\\frac{4}{5}G + \\frac{5}{5}G = \\frac{9}{5}G$. This is adding fractions with the same denominator.`}</p>
            </details>
          </div>

          <div className="lrn-steps">
            <span className="lrn-steps-label">SOLUTION 2: Add 1 to Both Sides</span>
            <ol className="lrn-list">
              <li>{`Start from $\\frac{B}{G} = \\frac{4}{5}$.`}</li>
              <li>{`Add 1 to both sides: $1 + \\frac{B}{G} = 1 + \\frac{4}{5}$.`}</li>
              <li>{`Left side: $\\frac{G + B}{G}$. Right side: $\\frac{9}{5}$.`}</li>
              <li>{`So $\\frac{27}{G} = \\frac{9}{5}$.`}</li>
              <li>{`Cross-multiply: $G = \\frac{27 \\times 5}{9} = 15$. Then $B = 12$.`}</li>
            </ol>
          </div>
          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>{`Why does adding 1 to $\\frac{B}{G}$ turn the left side into $\\frac{G+B}{G}$?`}</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>{`$1 + \\frac{B}{G} = \\frac{G}{G} + \\frac{B}{G} = \\frac{G+B}{G}$. This works because $1 = \\frac{G}{G}$ for any nonzero $G$. The step converts the total $B + G = 27$ into a fraction with denominator $G$.`}</p>
            </details>
          </div>

          <div className="lrn-steps">
            <span className="lrn-steps-label">SOLUTION 3: Theorem Application (u-method)</span>
            <ol className="lrn-list">
              <li>{`By the Whole-Number Ratio Theorem, $B = 4u$ and $G = 5u$ for some $u$.`}</li>
              <li>{`Add: $B + G = 4u + 5u = 9u = 27$.`}</li>
              <li>{`Solve: $u = 3$.`}</li>
              <li>{`Answer: $B = 12$, $G = 15$.`}</li>
            </ol>
          </div>
          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS u ALWAYS A WHOLE NUMBER HERE?</span>
            <p>
              {`Because $4:5$ is already in simplest form, $u = \\frac{27}{9} = 3$ comes out a whole number. The 27 students split evenly into $4 + 5 = 9$ equal groups.`}
            </p>
          </div>

          <p>{`Solution 4 uses a number-line picture. Divide the 27 students into 9 equal parts and place $B$ over 4 parts, $G$ over 5 parts.`}</p>
          <div className="lrn-graph">
            <viz.ProblemOneFourthSolution C={C} />
          </div>
          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>{`In the diagram, why does dividing 27 into 9 equal segments give the correct split?`}</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>{`The ratio $4:5$ means the class breaks into $4 + 5 = 9$ equal groups. Each group has $27 \\div 9 = 3$ students. Boys get 4 groups ($= 12$); girls get 5 groups ($= 15$). This is the u-method drawn on a line.`}</p>
            </details>
          </div>

          <div className="lrn-callout lrn-warning">
            <span className="lrn-callout-label">A caution</span>
            <p>{`Every step here rests on a definition or a proved theorem. None of it leans on a gut feeling for what a ratio is. The four solutions may look familiar. Ground every step in a proved fact, not intuition.`}</p>
          </div>
        </>,

        // Section 4: Three-Quantity Ratios
        <>
          <h2>Three-Quantity Ratios</h2>
          <p>
            {`Three quantities $A$, $B$, $C$ are in ratio $\\ell:m:n$ when two pairwise ratios hold: $A:B = \\ell:m$ and $B:C = m:n$. From those two conditions, a formula follows.`}
          </p>
          <div className="lrn-eq lrn-eq-hero">{`$$\\frac{A}{\\ell} = \\frac{B}{m} = \\frac{C}{n}$$`}</div>
          <p>
            {`Proof: apply cross-multiplication to $A:B = \\ell:m$ to get $Am = B\\ell$, giving $\\frac{A}{\\ell} = \\frac{B}{m}$. Apply cross-multiplication to $B:C = m:n$ to get $Bn = Cm$, giving $\\frac{B}{m} = \\frac{C}{n}$. Chain the two equalities together.`}
          </p>
          <div className="lrn-callout">
            <p>{`When to use: three quantities are in a given ratio and one is known. Divide the known quantity by its ratio part to find $k$. Multiply $k$ by each other ratio part.`}</p>
          </div>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>{`If $A:B:C = 2:3:5$ and the total is 100, what is $C$? Try it before reading the next worked example.`}</p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>{`Parts sum to $2 + 3 + 5 = 10$. So $k = \\frac{100}{10} = 10$. Then $C = 5 \\times 10 = 50$.`}</p>
            </details>
          </div>
          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY ONE NEW VARIABLE WORKS</span>
            <p>{`The chained equalities $\\frac{A}{\\ell} = \\frac{B}{m} = \\frac{C}{n}$ all equal the same number $k$. That is the whole point: instead of solving three separate equations, you solve one for $k$, then read off $A$, $B$, $C$ by multiplying.`}</p>
            <p>{`The same idea extends to four, five, or any number of quantities. The general rule is: every linked ratio collapses to one unknown.`}</p>
          </div>

          <p>
            <strong>Problem 2.</strong>
            {` Benoit, Carl, and Davida chip in for a speaker system costing 440 dollars. Their contributions are in ratio $2:5:4$. How much did each contribute?`}
          </p>
          <div className="lrn-proof">
            <ol className="lrn-list">
              <li>{`Let $\\frac{B}{2} = \\frac{C}{5} = \\frac{D}{4} = k$.`}</li>
              <li>{`Then $B = 2k$, $C = 5k$, $D = 4k$.`}</li>
              <li>{`Sum: $2k + 5k + 4k = 11k = 440$.`}</li>
              <li>{`Solve: $k = 40$.`}</li>
              <li>{`Benoit: 80 dollars. Carl: 200 dollars. Davida: 160 dollars.`}</li>
              <li>{`Check: $80 + 200 + 160 = 440$. $\\frac{80}{200} = \\frac{2}{5}$. $\\frac{200}{160} = \\frac{5}{4}$. $\\checkmark$`}</li>
            </ol>
          </div>
          <div className="lrn-graph">
            <viz.ThreeQuantityBar C={C} />
          </div>
          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>{`Why does the check in step 6 confirm the answer is correct?`}</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>{`The check verifies both original pairwise ratios and that the total is correct. Getting the total right is necessary but not sufficient. Checking both $\\frac{B}{C} = \\frac{2}{5}$ and $\\frac{C}{D} = \\frac{5}{4}$ confirms the three-quantity ratio $2:5:4$ is intact.`}</p>
            </details>
          </div>

          <div className="lrn-faded">
            <div className="lrn-faded-phase">
              <span className="lrn-faded-label">WORKED: A:B:C = 3:8:5, B = 20</span>
              <ol className="lrn-list">
                <li>{`Use the formula: $\\frac{A}{3} = \\frac{B}{8} = \\frac{C}{5}$.`}</li>
                <li>{`Find the common value: $\\frac{20}{8} = \\frac{5}{2}$.`}</li>
                <li>{`$A = 3 \\times \\frac{5}{2} = \\frac{15}{2}$. $C = 5 \\times \\frac{5}{2} = \\frac{25}{2}$.`}</li>
              </ol>
            </div>
            <div className="lrn-faded-phase lrn-faded-partial">
              <span className="lrn-faded-label">YOUR TURN: PARTIAL</span>
              <p>{`$P:Q:R = 2:7:3$ and $Q = 35$. Find $P$ and $R$.`}</p>
              <ol className="lrn-list">
                <li>{`Write the formula: $\\frac{P}{2} = \\frac{Q}{\\rule{1cm}{0.5pt}} = \\frac{R}{\\rule{1cm}{0.5pt}}$.`}</li>
                <li>{`Find the common value $k = \\frac{35}{\\rule{1cm}{0.5pt}}$.`}</li>
                <li>{`Compute $P$ and $R$.`}</li>
              </ol>
            </div>
            <div className="lrn-faded-phase">
              <span className="lrn-faded-label">YOUR TURN: INDEPENDENT</span>
              <p>{`$X:Y:Z = 4:3:9$ and $Z = 63$. Find $X$ and $Y$.`}</p>
            </div>
          </div>
        </>,

        // Section 5: Improving a Ratio
        <>
          <h2>Improving a Ratio</h2>
          <p>
            {`Sometimes you need to change a ratio by adding to one quantity. Work through the concrete case first.`}
          </p>
          <p>
            {`A school district has a teacher-to-student ratio of $1:30$ and 450 students. To reach $1:25$, how many new teachers does the district need to hire?`}
          </p>
          <div className="lrn-proof">
            <ol className="lrn-list">
              <li>{`Current teachers: $\\frac{450}{30} = 15$.`}</li>
              <li>{`Target teachers: $\\frac{450}{25} = 18$.`}</li>
              <li>{`New teachers needed: $18 - 15 = 3$.`}</li>
            </ol>
          </div>
          <div className="lrn-graph">
            <viz.TeacherStudentBeforeAfter C={C} />
          </div>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>{`Now the symbolic version: the ratio is $1:24$, there are $S$ students, and the target is at least $1:20$. In terms of $S$, how many new teachers $N$ does the district need to hire?`}</p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>{`Current: $T = \\frac{S}{24}$. Target: $T + N \\geq \\frac{S}{20}$. So $N \\geq \\frac{S}{20} - \\frac{S}{24} = \\frac{S}{120}$.`}</p>
            </details>
          </div>
          <p>
            <strong>Problem 3.</strong>
            {` A district has ratio $1:24$ and $S$ students. How many new teachers $N$ must the district hire to reach at least $1:20$?`}
          </p>
          <div className="lrn-proof">
            <ol className="lrn-list">
              <li>{`Current teachers: $T = \\frac{S}{24}$.`}</li>
              <li>{`Target: $\\frac{N + T}{S} \\geq \\frac{1}{20}$.`}</li>
              <li>{`Expand: $\\frac{N}{S} + \\frac{1}{24} \\geq \\frac{1}{20}$.`}</li>
              <li>{`Isolate: $\\frac{N}{S} \\geq \\frac{1}{20} - \\frac{1}{24} = \\frac{6 - 5}{120} = \\frac{1}{120}$.`}</li>
              <li>{`So $N \\geq \\frac{S}{120}$.`}</li>
            </ol>
          </div>
          <p>
            {`$N$ must be a whole number. Round $\\frac{S}{120}$ up to the next whole number if it is not already whole.`}
          </p>
          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>{`In step 4, why does $\\frac{1}{20} - \\frac{1}{24}$ equal $\\frac{1}{120}$? Show the fraction subtraction.`}</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>{`The LCM of 20 and 24 is 120. Convert: $\\frac{1}{20} = \\frac{6}{120}$ and $\\frac{1}{24} = \\frac{5}{120}$. So $\\frac{6}{120} - \\frac{5}{120} = \\frac{1}{120}$.`}</p>
            </details>
          </div>
          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY ROUND UP?</span>
            <p>{`You need the ratio to be at least $1:20$. If $\\frac{S}{120}$ is not a whole number, rounding it down means too few teachers, so you fall short of the target. You must round up to the next whole number to meet the requirement.`}</p>
          </div>
        </>,

        // Section 6: Why Use Ratio At All?
        <>
          <h2>Why Use Ratio at All?</h2>
          <p>
            {`The difference between ratio and subtraction is the difference between a universal law and a one-off measurement. Two examples make this clear.`}
          </p>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>{`Two circles: one has diameter 2 cm, the other has diameter 10 cm. Which is more useful to know: the difference between circumference and diameter, or the ratio between them? Why?`}</p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>{`The ratio. For both circles, $\\frac{C}{D} = \\pi$. The difference $C - D$ changes with size, so it tells you nothing universal.`}</p>
            </details>
          </div>
          <p>
            {`Chairs and legs: if there are $B$ chairs, there are $4B$ legs. The ratio $A:B = 4:1$ captures the universal fact that every chair has 4 legs. The additive difference $A - B = 3B$ depends on $B$ and says nothing universal.`}
          </p>
          <div className="lrn-graph">
            <viz.ChairsLegsComparison C={C} />
          </div>
          <p>
            {`Circles: let $C$ be circumference and $D$ be diameter. The difference $C - D = (\\pi - 1)D$ changes with every circle. But $\\frac{C}{D} = \\pi$ is constant for every circle ever drawn. Ratio gives the universal constant; subtraction gives a size-dependent number.`}
          </p>
          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Multiplicative ratio A:B</span>
              <p>{`Captures universal proportional relationships. $A:B = 4:1$ means every chair has 4 legs, regardless of how many chairs. $\\frac{C}{D} = \\pi$ for every circle.`}</p>
              <p>{`Use when the relationship is proportional and you want a scale-free fact.`}</p>
              <p>{`Less useful for: "how much more?" questions.`}</p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Additive comparison A - B</span>
              <p>{`Captures absolute gaps. $A - B = 3B$ depends on the actual value of $B$. It answers "how many more?" not "how many times more?"`}</p>
              <p>{`Use when the actual gap matters, not the proportion.`}</p>
              <p>{`Less useful for: proportional or scale-free comparisons.`}</p>
            </div>
          </div>
          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>{`Give your own example of a situation where ratio is better than subtraction, and one where subtraction is better.`}</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>{`Ratio is better when the relationship is proportional: "a recipe uses flour and sugar in ratio $3:1$" works for any batch size. Subtraction is better for absolute gaps: "team A scored 5 more points than team B" tells you the exact margin regardless of proportions.`}</p>
            </details>
          </div>
          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY RATIO BEATS SUBTRACTION FOR LAWS</span>
            <p>{`A scientific law claims a universal pattern: "every chair has 4 legs", "every circle has $\\frac{C}{D} = \\pi$". These statements are size-free. They hold no matter how big the chair or how wide the circle.`}</p>
            <p>{`Subtraction cannot capture size-free patterns because subtraction depends on absolute size. Ratio does because dividing both sides by the same scale cancels the size out.`}</p>
          </div>
        </>,

        // Section 7: From Ratio to Rate
        <>
          <h2>From Ratio to Rate</h2>
          <p>
            {`Ratio needs $M$ and $N$ to be the same type with the same unit. Then the units cancel and you get a pure ratio: a plain number with no units.`}
          </p>
          <p>
            {`When $M$ and $N$ are different types, the division $\\frac{M}{N}$ still makes sense, but the units do not cancel. The result is a rate. For example, $\\frac{90\\,\\text{km}}{2\\,\\text{h}} = 45\\,\\frac{\\text{km}}{\\text{h}}$ keeps both units because distance and time are different types. Rates get their own full treatment in a later topic.`}
          </p>
          <div className="lrn-graph">
            <viz.RatioVsRateContrast C={C} />
          </div>
          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>{`Why does $\\frac{90\\,\\text{km}}{2\\,\\text{h}}$ carry units while $\\frac{B}{G} = \\frac{4}{5}$ is a pure number?`}</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>{`In $\\frac{B}{G}$, both are counts of people. The same unit cancels and leaves a pure number. In $\\frac{90\\,\\text{km}}{2\\,\\text{h}}$, the units are different (km and h). They do not cancel. The result keeps both units as $\\frac{\\text{km}}{\\text{h}}$.`}</p>
            </details>
          </div>
        </>,

        // Section 8: Map Scales as a Pure Ratio
        <>
          <h2>Map Scales: A Ratio You Can See</h2>
          <p>
            {`A map scale is the clearest real-world ratio. Scale $1:25000$ means 1 cm on the map stands for 25000 cm on land. Both are lengths, so once you write them in the same unit, the units cancel and the scale is a pure number. That is why it is written $1:25000$, not $1\\,\\text{cm}:25000\\,\\text{cm}$.`}
          </p>
          <div className="lrn-graph">
            <viz.MapScaleVisual C={C} />
          </div>
          <p>{`Reading distances off a map gets its own full treatment in a later topic.`}</p>
        </>,

        // Section 9: Sharing in Ratio
        <>
          <h2>Sharing in Ratio</h2>
          <p>{`Start with a concrete split. Share 60 dollars in ratio $2:3$.`}</p>
          <div className="lrn-proof">
            <ol className="lrn-list">
              <li>{`Total parts: $2 + 3 = 5$.`}</li>
              <li>{`One part: $\\frac{60}{5} = 12$ dollars.`}</li>
              <li>{`First share: $2 \\times 12 = 24$ dollars. Second share: $3 \\times 12 = 36$ dollars.`}</li>
              <li>{`Check: $24 + 36 = 60$. $\\frac{24}{36} = \\frac{2}{3}$. $\\checkmark$`}</li>
            </ol>
          </div>
          <div className="lrn-graph">
            <viz.ShareSixtyTwoThree C={C} />
          </div>
          <p>{`Those three moves are the general rule. To share a total $T$ in ratio $a:b$: count the parts ($a + b$), find one part ($\\frac{T}{a+b}$), then multiply each ratio part by that one-part value.`}</p>
          <p>{`This is the u-method from Section 4. The "one part" is exactly $u$: setting the shares to $au$ and $bu$ gives total $(a+b)u = T$, so $u = \\frac{T}{a+b}$.`}</p>
          <div className="lrn-callout">
            <p>{`When to use: any time you must split a total proportionally between two or more parties.`}</p>
          </div>
          <p>
            {`Anwar, Belusa, and Nabila split 560 dollars in ratio $2:1:5$. How much does Belusa receive?`}
          </p>
          <div className="lrn-proof">
            <ol className="lrn-list">
              <li>{`Total parts: $2 + 1 + 5 = 8$.`}</li>
              <li>{`One part: $\\frac{560}{8} = 70$ dollars.`}</li>
              <li>{`Belusa (1 part): $1 \\times 70 = 70$ dollars.`}</li>
            </ol>
          </div>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>{`Share 84 dollars between two friends in ratio $3:4$. Before reading on, predict each share.`}</p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>{`Parts: $3 + 4 = 7$. One part: $\\frac{84}{7} = 12$ dollars. Shares: $36$ dollars and $48$ dollars. Check: $36 + 48 = 84$.`}</p>
            </details>
          </div>
          <p>{`The same method scales to any number of parts. Add all ratio parts to find the total slices, then multiply each part by the one-part value.`}</p>
          <div className="lrn-faded">
            <div className="lrn-faded-phase">
              <span className="lrn-faded-label">WORKED: Share 30 dollars in 1:2</span>
              <ol className="lrn-list">
                <li>{`Parts: $1 + 2 = 3$.`}</li>
                <li>{`One part: $\\frac{30}{3} = 10$ dollars.`}</li>
                <li>{`First share: 10 dollars. Second share: 20 dollars.`}</li>
              </ol>
            </div>
            <div className="lrn-faded-phase lrn-faded-partial">
              <span className="lrn-faded-label">YOUR TURN: PARTIAL</span>
              <p>{`Share 880 g of food between a cat and a dog in ratio $3:5$.`}</p>
              <ol className="lrn-list">
                <li>{`Parts: $3 + 5 = \\rule{1cm}{0.5pt}$.`}</li>
                <li>{`One part: $\\frac{880}{\\rule{1cm}{0.5pt}} = \\rule{1cm}{0.5pt}$ g.`}</li>
                <li>{`Cat: $\\rule{1cm}{0.5pt}$ g. Dog: $\\rule{1cm}{0.5pt}$ g.`}</li>
              </ol>
            </div>
            <div className="lrn-faded-phase">
              <span className="lrn-faded-label">YOUR TURN: INDEPENDENT</span>
              <p>{`Share 1080 dollars between Isobel and Carlota in ratio $4:5$.`}</p>
            </div>
          </div>
        </>,

        // Section 10: Scaling and Direct Proportion
        <>
          <h2>Scaling and Direct Proportion</h2>
          <p>
            {`Scaling means multiplying both parts of a ratio by the same factor. If $A:B = m:n$ and you know $A$, find the scale factor $k = \\frac{A}{m}$, then $B = n \\times k$.`}
          </p>
          <div className="lrn-callout">
            <p>{`When to use: any time one quantity scales and you need to find the corresponding scaled quantity.`}</p>
          </div>
          <p>
            <strong>Example (boys and girls).</strong>
            {` Boys:girls $= 3:4$, 9 boys. How many girls?`}
          </p>
          <div className="lrn-proof">
            <ol className="lrn-list">
              <li>{`Scale factor: $k = \\frac{9}{3} = 3$.`}</li>
              <li>{`Girls: $4 \\times 3 = 12$.`}</li>
              <li>{`Check: $9:12 = 3:4$. $\\checkmark$`}</li>
            </ol>
          </div>
          <div className="lrn-graph">
            <viz.ScalingRecipe C={C} />
          </div>
          <p>
            <strong>Example (recipe).</strong>
            {` A recipe for 5 people uses 1.5 kg of meat. How much meat for 8 people?`}
          </p>
          <div className="lrn-proof">
            <ol className="lrn-list">
              <li>{`Scale factor: $\\frac{8}{5}$.`}</li>
              <li>{`Meat: $1.5 \\times \\frac{8}{5} = \\frac{12}{5} = 2.4$ kg.`}</li>
            </ol>
          </div>
          <p>
            <strong>Example (alloy).</strong>
            {` Copper:zinc:tin $= 1:3:4$. If you have 10 g of copper, find the mass of zinc and tin.`}
          </p>
          <div className="lrn-proof">
            <ol className="lrn-list">
              <li>{`Scale factor: $k = \\frac{10}{1} = 10$.`}</li>
              <li>{`Zinc: $3 \\times 10 = 30$ g. Tin: $4 \\times 10 = 40$ g.`}</li>
            </ol>
          </div>
          <p>{`Every example here uses the Leibniz scaling rule from Section 2: multiply both parts by the scale factor and the ratio stays the same.`}</p>
          <div className="lrn-faded">
            <div className="lrn-faded-phase">
              <span className="lrn-faded-label">WORKED: nails:screws = 5:3, 15 nails</span>
              <ol className="lrn-list">
                <li>{`Scale factor: $k = \\frac{15}{5} = 3$.`}</li>
                <li>{`Screws: $3 \\times 3 = 9$.`}</li>
              </ol>
            </div>
            <div className="lrn-faded-phase lrn-faded-partial">
              <span className="lrn-faded-label">YOUR TURN: PARTIAL</span>
              <p>{`Men:women $= 4:1$, 20 men. How many women?`}</p>
              <ol className="lrn-list">
                <li>{`Scale factor: $k = \\frac{20}{\\rule{1cm}{0.5pt}}$.`}</li>
                <li>{`Women: $1 \\times \\rule{1cm}{0.5pt} = \\rule{1cm}{0.5pt}$.`}</li>
              </ol>
            </div>
            <div className="lrn-faded-phase">
              <span className="lrn-faded-label">YOUR TURN: INDEPENDENT</span>
              <p>{`A cake for 6 people needs 4 eggs. How many eggs for 9 people?`}</p>
            </div>
          </div>
        </>
      ]
    },

    practice: [
      {
        id: 'rat-q01',
        q: `Write the ratio of 15 to 20 as a single fraction in simplest form.`,
        a: `$\\frac{15}{20} = \\frac{3}{4}$, so the ratio is $3:4$. Divide numerator and denominator by 5, the highest common factor.`
      },
      {
        id: 'rat-q02',
        q: `A bag has 12 red counters and 18 blue counters. Write both red:blue and blue:red in simplest form. Are they equal?`,
        a: `red:blue $= \\frac{12}{18} = \\frac{2}{3} = 2:3$. blue:red $= \\frac{18}{12} = \\frac{3}{2} = 3:2$. They are not equal. Order matters: $2:3 \\neq 3:2$.`
      },
      {
        id: 'rat-q04',
        q: `Why is the definition "a ratio is a comparison" considered inadequate?`,
        a: `"Comparison" has no mathematical rule attached to it. You cannot compute with it. The precise definition is ratio as division: $a:b = \\frac{a}{b}$. That definition lets you apply fraction rules directly.`
      },
      {
        id: 'rat-q05',
        q: `Give an example where the ratio $A:B$ is more informative than the difference $A - B$.`,
        a: `Chairs and legs: $B$ chairs have $A = 4B$ legs. The ratio $A:B = 4:1$ tells you every chair has 4 legs, regardless of how many chairs. The difference $A - B = 3B$ depends on $B$ and gives no universal fact.`
      },
      {
        id: 'rat-q06',
        q: `Explain the difference between a ratio and a rate. Give one example of each.`,
        a: `A ratio compares two quantities of the same type (e.g. boys:girls $= 4:5$, both counts of people). A rate compares two different types (e.g. $\\frac{90\\,\\text{km}}{2\\,\\text{h}} = 45\\,\\frac{\\text{km}}{\\text{h}}$). Ratio gives a pure number; rate carries units.`
      },
      {
        id: 'rat-q07',
        q: `In a class, the ratio of boys to girls is $4:5$ and there are 27 students. Use the u-method to find the number of boys.`,
        a: `Set $B = 4u$ and $G = 5u$ (Whole-Number Ratio Theorem). Then $9u = 27$, so $u = 3$. Boys $= 4 \\times 3 = 12$. The theorem guarantees such a $u$ exists whenever $B:G = 4:5$.`
      },
      {
        id: 'rat-q08',
        q: `A class of 27 students has boys:girls $= 4:5$. Find the number of boys by adding 1 to both sides of $\\frac{B}{G} = \\frac{4}{5}$. Show every step.`,
        a: `Start: $\\frac{B}{G} = \\frac{4}{5}$. Add 1: $\\frac{G+B}{G} = \\frac{9}{5}$. Since $G + B = 27$: $\\frac{27}{G} = \\frac{9}{5}$. Cross-multiply: $G = \\frac{135}{9} = 15$. Then $B = 12$. Adding 1 to both sides of an equation preserves equality.`
      },
      {
        id: 'rat-q09',
        q: `A paint mixture uses red and blue in ratio $3:7$. You have 600 ml total. How much red paint is there?`,
        a: `Set $R = 3u$ and $B = 7u$. Total: $10u = 600$, so $u = 60$. Red $= 3 \\times 60 = 180$ ml. This is the u-method applied to a mixing context.`
      },
      {
        id: 'rat-q10',
        q: `Transfer: An image has aspect ratio $4:3$ (width compared to height). If the height is 600 pixels, find the width.`,
        a: `Set width $= 4u$ and height $= 3u$. Then $3u = 600$, so $u = 200$. Width $= 4 \\times 200 = 800$ pixels.`
      },
      {
        id: 'rat-q11',
        q: `Convert $\\frac{2}{3}:\\frac{5}{6}$ to a whole-number ratio in simplest form.`,
        a: `LCM of 3 and 6 is 6. Multiply both parts by 6: $\\frac{2}{3} \\times 6 : \\frac{5}{6} \\times 6 = 4:5$.`
      },
      {
        id: 'rat-q12',
        q: `Elaborate: why does multiplying both parts of a ratio by the same number not change the ratio?`,
        a: `Because ratio is a division: $a:b = \\frac{a}{b}$. Multiplying both by $c$ gives $\\frac{ca}{cb} = \\frac{a}{b}$. The value of the fraction does not change. This is the Leibniz scaling rule.`
      },
      {
        id: 'rat-q12b',
        q: `Transfer: a flour:sugar ratio is $\\frac{2}{5}:\\frac{1}{3}$ and the total is 22 cups. Convert to a whole-number ratio, then find each quantity.`,
        a: `LCM of 5 and 3 is 15. Multiply both parts by 15: $\\frac{2}{5} \\times 15 : \\frac{1}{3} \\times 15 = 6:5$. Parts sum: $11$. One part: $\\frac{22}{11} = 2$ cups. Flour: $6 \\times 2 = 12$ cups. Sugar: $5 \\times 2 = 10$ cups.`
      },
      {
        id: 'rat-q13',
        q: `Benoit, Carl, and Davida split 440 dollars in ratio $2:5:4$. How much does Carl receive?`,
        a: `Total parts: $11$. Common value: $k = \\frac{440}{11} = 40$. Carl gets $5 \\times 40 = 200$ dollars. The formula $\\frac{B}{2} = \\frac{C}{5} = \\frac{D}{4} = k$ gives each share directly.`
      },
      {
        id: 'rat-q14',
        q: `$A:B:C = 3:8:5$ and $B = 24$. Find $A$ and $C$.`,
        a: `Use $\\frac{A}{3} = \\frac{B}{8} = \\frac{C}{5}$. Common value: $\\frac{24}{8} = 3$. Then $A = 3 \\times 3 = 9$ and $C = 5 \\times 3 = 15$.`
      },
      {
        id: 'rat-q15',
        q: `Transfer: Three primary colours are mixed in ratio $5:3:2$. Total volume is 200 ml. Find the volume of each colour.`,
        a: `Parts sum: $10$. One part: $20$ ml. First colour: $100$ ml, second: $60$ ml, third: $40$ ml. The formula gives each share directly.`
      },
      {
        id: 'rat-q16',
        q: `7800 people voted for Democrats, Socialists, or Republicans in ratio $4:3:5$. How many voted Republican?`,
        a: `Parts sum: $12$. One part: $\\frac{7800}{12} = 650$. Republican (5 parts): $5 \\times 650 = 3250$.`
      },
      {
        id: 'rat-q17',
        q: `A school has a teacher-student ratio of $1:28$ and 560 students. How many new teachers must the school hire to reach $1:20$?`,
        a: `Current teachers: $\\frac{560}{28} = 20$. Target teachers: $\\frac{560}{20} = 28$. New teachers: $28 - 20 = 8$.`
      },
      {
        id: 'rat-q18',
        q: `A district has ratio $1:24$ and $S = 240$ students. How many new teachers must the district hire to reach at least $1:20$?`,
        a: `Apply the formula $N = \\frac{S}{120}$. With $S = 240$: $N = \\frac{240}{120} = 2$. Hire 2 new teachers. The formula comes from $\\frac{1}{20} - \\frac{1}{24} = \\frac{1}{120}$.`
      },
      {
        id: 'rat-q19',
        q: `Predict: if a school improves its ratio from $1:30$ to $1:25$, is the number of new teachers a fixed count or proportional to the number of students?`,
        a: `Proportional to students. The increase is $\\frac{S}{25} - \\frac{S}{30} = S\\left(\\frac{1}{25} - \\frac{1}{30}\\right) = \\frac{S}{150}$. For 450 students: $\\frac{450}{150} = 3$ teachers. The increase scales with $S$.`
      },
      {
        id: 'rat-q20',
        q: `Let $C$ be circumference and $D$ be diameter. Why does $\\frac{C}{D} = \\pi$ capture a universal fact while $C - D$ does not?`,
        a: `$C - D = (\\pi - 1)D$ depends on the size of the circle. For a small circle $D = 1$: $C - D \\approx 2.14$. For $D = 100$: $C - D \\approx 214$. The ratio $\\frac{C}{D} = \\pi$ is the same for every circle. Ratio captures the proportional relationship; subtraction captures absolute size.`
      },
      {
        id: 'rat-q21',
        q: `Elaborate: when is additive comparison ($A - B$) more useful than ratio ($A:B$)?`,
        a: `When the actual gap matters. "How many more points did team A score?" is a subtraction question. If team A scored 85 and team B scored 78, $85 - 78 = 7$ is the informative answer. The ratio $\\frac{85}{78}$ is less useful because both scores are large relative to the gap.`
      },
      {
        id: 'rat-q26',
        q: `Share 96 dollars in ratio $3:1$.`,
        a: `Parts: $4$. One part: $\\frac{96}{4} = 24$ dollars. First share: $72$ dollars. Second share: $24$ dollars. Check: $72 + 24 = 96$ and $\\frac{72}{24} = 3$.`
      },
      {
        id: 'rat-q27',
        q: `Share 120 dollars in ratio $1:2:3$.`,
        a: `Parts: $6$. One part: $\\frac{120}{6} = 20$ dollars. Shares: $20$ dollars, $40$ dollars, $60$ dollars. Check: $20 + 40 + 60 = 120$.`
      },
      {
        id: 'rat-q28',
        q: `Transfer: Three friends split a restaurant bill of 84 dollars in ratio $2:3:7$. How much does the person with the largest share pay?`,
        a: `Parts sum: $12$. One part: $\\frac{84}{12} = 7$ dollars. Largest share (7 parts): $7 \\times 7 = 49$ dollars.`
      },
      {
        id: 'rat-q29',
        q: `Elaborate: does the order of $a:b$ in a sharing problem affect each person's share? Give an example with 60 dollars in $3:1$ and $1:3$.`,
        a: `Yes. In $3:1$: first person gets 45 dollars, second gets 15 dollars. In $1:3$: first person gets 15 dollars, second gets 45 dollars. The total is the same but the individual shares swap. Order is part of the meaning.`
      },
      {
        id: 'rat-q30',
        q: `Boys:girls $= 3:2$ in a room with 12 boys. How many girls?`,
        a: `Scale factor: $\\frac{12}{3} = 4$. Girls: $2 \\times 4 = 8$. Check: $12:8 = 3:2$.`
      },
      {
        id: 'rat-q37',
        q: `Error detection: a student writes "the ratio of 3 kg to 500 g is $3:500$". What is the error?`,
        a: `The units must match before forming a ratio. Convert: $3$ kg $= 3000$ g. The correct ratio is $3000:500 = 6:1$. Writing $3:500$ compares numbers with different units.`
      },
      {
        id: 'rat-q38',
        q: `Error detection: a student says "if boys:girls $= 4:5$, then boys $= 4$ and girls $= 5$". What is wrong?`,
        a: `The ratio gives only relative proportions, not actual counts. By the theorem, boys $= 4u$ and girls $= 5u$ for some positive $u$. The actual values depend on the total. Boys could be 8 and girls 10, or 12 and 15, etc.`
      },
      {
        id: 'rat-q40',
        q: `You add 1 to both parts of $2:3$ to get $3:4$. Does this give an equivalent ratio? Compare the two fractions.`,
        a: `No. The original is $\\frac{2}{3} \\approx 0.667$ and the new one is $\\frac{3}{4} = 0.75$, so they differ. The Leibniz scaling rule only keeps a ratio equal when you multiply both parts by the same number. Adding to both parts changes the value.`
      },
      {
        id: 'rat-q41',
        q: `A district has ratio $1:24$ and $S$ students. The teachers needed to reach $1:20$ are $N = \\frac{S}{120}$. What happens to $N$ as $S$ doubles?`,
        a: `If $S$ doubles, $N$ doubles. The number of new teachers is directly proportional to the number of students. A larger school needs proportionally more teachers to hit the same target ratio.`
      },
      {
        id: 'rat-q42',
        q: `Self-explain: in the proof of the Whole-Number Ratio Theorem, why is $u = \\frac{M}{a}$ the right choice?`,
        a: `The goal is $M = au$ and $N = bu$. Setting $u = \\frac{M}{a}$ gives $M = au$ immediately. Cross-multiplication then shows the same $u$ satisfies $N = bu$. The choice makes both equations true with one definition.`
      },
      {
        id: 'rat-q43',
        q: `Self-explain: why does the sharing formula "one part $= \\frac{\\text{total}}{a+b}$" give the same result as the u-method?`,
        a: `In the u-method, the total is $(a+b)u$, so $u = \\frac{\\text{total}}{a+b}$. The "one part" in the sharing formula is exactly $u$. The two methods are the same computation with different names.`
      },
      {
        id: 'rat-q44',
        q: `Transfer: a screen has aspect ratio $16:9$. If the screen is 1920 pixels wide, how many pixels tall is it?`,
        a: `Scale factor: $\\frac{1920}{16} = 120$. Height: $9 \\times 120 = 1080$ pixels.`
      },
      {
        id: 'rat-q45',
        q: `Transfer: a concrete mix uses cement:sand:gravel in ratio $1:2:4$. You have 5 kg of cement. How much gravel is needed?`,
        a: `Scale factor: $\\frac{5}{1} = 5$. Gravel: $4 \\times 5 = 20$ kg.`
      }
    ],

    reference: {
      category: 'Quick Reference',
      title: 'Ratio',
      sections: [
        <>
          <h2>Core Definitions</h2>
          <div className="lrn-definition">
            <span className="lrn-definition-term">Ratio</span>
            <div className="lrn-definition-desc">
              <p>{`The ratio of $M$ to $N$ (same type, same unit) is the division $\\frac{M}{N}$, written $a:b$ where $\\frac{M}{N} = \\frac{a}{b}$.`}</p>
            </div>
          </div>
          <div className="lrn-eq lrn-eq-hero">{`$$\\text{ratio of } M \\text{ to } N = \\frac{M}{N}$$`}</div>
          <p>{`When to use: any multiplicative comparison of two quantities with the same unit.`}</p>
          <div className="lrn-definition">
            <span className="lrn-definition-term">Rate</span>
            <div className="lrn-definition-desc">
              <p>{`When $M$ and $N$ have different types (e.g. km and hours), $\\frac{M}{N}$ is a rate. It carries units.`}</p>
            </div>
          </div>
          <div className="lrn-definition">
            <span className="lrn-definition-term">Leibniz scaling rule</span>
            <div className="lrn-definition-desc">
              <p>{`$a:b = ca:cb$ for all nonzero $c$. Multiplying both parts by the same number gives an equivalent ratio.`}</p>
            </div>
          </div>
          <p>{`When to use: simplifying ratios, clearing fractional denominators, or scaling both sides equally.`}</p>
        </>,

        <>
          <h2>Whole-Number Ratio Theorem</h2>
          <p>{`If $M:N = a:b$ (whole-number $a, b$), then there exists $u$ with:`}</p>
          <div className="lrn-eq">{`$$M = au \\quad \\text{and} \\quad N = bu$$`}</div>
          <p>{`When to use: any problem where two quantities are in a whole-number ratio and their sum or difference is known. Set $M = au$, $N = bu$, form an equation, solve for $u$.`}</p>
          <p>{`Proof sketch: from $\\frac{M}{N} = \\frac{a}{b}$, cross-multiply to get $\\frac{M}{a} = \\frac{N}{b}$; define $u$ as this common value.`}</p>
        </>,

        <>
          <h2>Fractional Ratio Theorem</h2>
          <p>{`The same conclusion holds when $a$ and $b$ are nonzero fractions: there exists $u$ with $M = au$ and $N = bu$.`}</p>
          <p>{`Practical rule: multiply both parts of $\\frac{p}{q}:\\frac{r}{s}$ by $\\text{lcm}(q, s)$, then simplify to lowest terms.`}</p>
          <div className="lrn-eq">{`$$\\frac{p}{q}:\\frac{r}{s} \\;=\\; \\frac{p}{q} \\cdot L : \\frac{r}{s} \\cdot L, \\quad L = \\text{lcm}(q, s)$$`}</div>
          <p>{`Example: $\\frac{1}{2}:\\frac{3}{4}$ has $L = 4$, giving $2:3$.`}</p>
          <p>{`When to use: ratio problems where the given ratio parts are fractions.`}</p>
        </>,

        <>
          <h2>Three-Quantity Ratios</h2>
          <p>{`$A:B:C = \\ell:m:n$ means $A:B = \\ell:m$ and $B:C = m:n$. The formula:`}</p>
          <div className="lrn-eq lrn-eq-hero">{`$$\\frac{A}{\\ell} = \\frac{B}{m} = \\frac{C}{n} = k$$`}</div>
          <p>{`When to use: three (or more) quantities in a given ratio; one is known. Divide it by its ratio part to get $k$, then multiply $k$ by each other part.`}</p>
        </>,

        <>
          <h2>Improving a Ratio</h2>
          <p>{`Current ratio $1:t$ ($t$ is the current ratio denominator), $S$ students, target at least $1:g$ ($g$ is the target denominator, $g < t$). New teachers $N$:`}</p>
          <div className="lrn-eq">{`$$N = S \\left(\\frac{1}{g} - \\frac{1}{t}\\right)$$`}</div>
          <p>{`Round $N$ up to the next whole number if it is not already whole.`}</p>
          <p>{`When to use: ratio-improvement problems where one quantity is fixed and the other must increase to meet a target.`}</p>
        </>,

        <>
          <h2>Multiplicative vs Additive Comparison</h2>
          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Ratio A:B</span>
              <p>{`Universal proportional relationship. Independent of actual size.`}</p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Difference A - B</span>
              <p>{`Absolute gap. Depends on actual sizes.`}</p>
            </div>
          </div>
          <p>{`When to use ratio: proportional or scale-free comparisons. When to use subtraction: "how many more?" questions.`}</p>
        </>,

        <>
          <h2>Sharing in Ratio</h2>
          <p>{`To share total $T$ in ratio $a:b$:`}</p>
          <div className="lrn-eq">{`$$u = \\frac{T}{a + b}, \\quad \\text{first share} = au, \\quad \\text{second share} = bu$$`}</div>
          <p>{`When to use: any proportional sharing problem. This is the u-method applied to a total.`}</p>
        </>,

        <>
          <h2>Scaling and Direct Proportion</h2>
          <p>{`If $A:B = m:n$ and $A$ is known:`}</p>
          <div className="lrn-eq">{`$$k = \\frac{A}{m}, \\quad B = n \\times k$$`}</div>
          <p>{`For recipes: scale factor $= \\frac{\\text{new servings}}{\\text{old servings}}$. Multiply each ingredient by the scale factor.`}</p>
          <p>{`When to use: any problem where one ratio part is known and you need the corresponding value of the other part.`}</p>
        </>
      ]
    },

    customCss:
      '.MafsView { --mafs-bg: transparent; --mafs-fg: var(--text-primary); --mafs-line-color: var(--border-subtle); }'
  }
  return config
}

export default function Ratio() {
  const config = useConfig()
  return <LearningTemplate config={config} />
}
