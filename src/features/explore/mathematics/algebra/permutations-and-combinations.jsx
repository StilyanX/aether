import { LearningTemplate } from '../../../../components/learning/learning-template'
import { PascalTriangleViz, PermutationTreeViz } from '../../../../components/viz'

function useConfig() {
  const config = {
    cssPrefix: 'pmc',
    documentTitle: 'Permutations and Combinations - AETHER',
    learning: {
      groupTitle: 'Sequences, Series and the Binomial Theorem',
      category: 'Counting',
      title: 'Permutations and Combinations',
      subtitle:
        'Count arrangements with permutations, count selections with combinations, and build Pascal’s Triangle from both ideas.',
      sections: [
        <>
          <h2>Factorial Notation</h2>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>{`You have 5 different books and want to line them up on a shelf. Before you learn the rule, guess how many different orders are possible.`}</p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>{`There are 120 possible orders. Each book you place leaves one fewer free spot for the next. So the count shrinks by one each time.`}</p>
            </details>
          </div>

          <p>{`The factorial of a whole number $n$ is written $n!$. It is the product of every whole number from $1$ up to $n$. You use factorials to count arrangements. They tell you how many ways you can put a full set of items in order.`}</p>

          <h3>What n! Means</h3>
          <div className="lrn-definition">
            <span className="lrn-definition-term">Factorial</span>
            <div className="lrn-definition-desc">
              <p>{`$n! = 1 \\cdot 2 \\cdot 3 \\cdots (n-1) \\cdot n$`}</p>
            </div>
          </div>
          <p>{`To find $n!$, multiply all the whole numbers from $1$ up to $n$. The factorial grows very fast, because each new number multiplies the whole product instead of just adding to it.`}</p>

          <div className="lrn-steps">
            <div className="lrn-step">
              <span className="lrn-step-title">4!</span>
              <p className="lrn-step-content">{`$4! = 1 \\cdot 2 \\cdot 3 \\cdot 4 = 24$`}</p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">7!</span>
              <p className="lrn-step-content">{`$7! = 1 \\cdot 2 \\cdot 3 \\cdot 4 \\cdot 5 \\cdot 6 \\cdot 7 = 5040$`}</p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">10!</span>
              <p className="lrn-step-content">{`$10! = 1 \\cdot 2 \\cdot 3 \\cdot 4 \\cdot 5 \\cdot 6 \\cdot 7 \\cdot 8 \\cdot 9 \\cdot 10 = 3{,}628{,}800$`}</p>
            </div>
          </div>

          <p>{`Notice the jump from $7!$ to $10!$. The value leaps from $5040$ to $3{,}628{,}800$, because each extra number multiplies the whole product by $8$, then $9$, then $10$.`}</p>

          <h3>Why 0! Equals 1</h3>
          <div className="lrn-callout">
            <span className="lrn-callout-label">Definition</span>
            <p>{`$0! = 1$`}</p>
          </div>
          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>{`An empty set of items has exactly one arrangement: the empty arrangement. There is nothing to place in any order, so there is only one way to arrange nothing.`}</p>
            <p>{`Setting $0! = 1$ keeps every counting formula working correctly, even when you choose all of the items or none of them.`}</p>
          </div>
        </>,
        <>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>{`Three friends want to line up for a photo. Before you see the method, guess how many different lineups are possible.`}</p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>{`There are 6 different lineups. Each friend you place in line leaves fewer choices open for the next spot.`}</p>
            </details>
          </div>

          <h2>Permutations: Order Matters</h2>
          <p>{`A permutation of a set of numbers is an arrangement of those numbers in some order. Each number appears once, with no repeats. You use permutations whenever changing the order changes the result, like a race finish or a seating plan.`}</p>

          <h3>Listing All Permutations of Three Numbers</h3>
          <p>{`Take the set $\\{1, 2, 3\\}$, meaning the collection containing $1$, $2$, and $3$. You can arrange these three numbers in exactly six different orders.`}</p>
          <ul className="lrn-list">
            <li>{`$(1, 2, 3)$`}</li>
            <li>{`$(1, 3, 2)$`}</li>
            <li>{`$(2, 1, 3)$`}</li>
            <li>{`$(2, 3, 1)$`}</li>
            <li>{`$(3, 1, 2)$`}</li>
            <li>{`$(3, 2, 1)$`}</li>
          </ul>
          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>{`Why are there exactly six arrangements of $\\{1, 2, 3\\}$, no more and no fewer?`}</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>{`The first spot can hold any of the 3 numbers. Once you fill that spot, only 2 numbers remain for the second spot. Only 1 number remains for the third spot.`}</p>
              <p>{`Multiplying $3 \\times 2 \\times 1$ gives 6.`}</p>
            </details>
          </div>

          <div className="lrn-graph">
            <PermutationTreeViz />
          </div>

          <h3>The Permutation Tree for Four Numbers</h3>
          <p>{`A permutation tree lists every arrangement by branching out one choice at a time. For the set $\\{1, 2, 3, 4\\}$, the tree branches into 4 groups of 6 arrangements, one group for each starting number.`}</p>
          <div className="lrn-table">
            <table>
              <thead>
                <tr>
                  <th>{`Starts with 1`}</th>
                  <th>{`Starts with 2`}</th>
                  <th>{`Starts with 3`}</th>
                  <th>{`Starts with 4`}</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{`1,2,3,4`}</td>
                  <td>{`2,1,3,4`}</td>
                  <td>{`3,1,2,4`}</td>
                  <td>{`4,1,2,3`}</td>
                </tr>
                <tr>
                  <td>{`1,2,4,3`}</td>
                  <td>{`2,1,4,3`}</td>
                  <td>{`3,1,4,2`}</td>
                  <td>{`4,1,3,2`}</td>
                </tr>
                <tr>
                  <td>{`1,3,2,4`}</td>
                  <td>{`2,3,1,4`}</td>
                  <td>{`3,2,1,4`}</td>
                  <td>{`4,2,1,3`}</td>
                </tr>
                <tr>
                  <td>{`1,3,4,2`}</td>
                  <td>{`2,3,4,1`}</td>
                  <td>{`3,2,4,1`}</td>
                  <td>{`4,2,3,1`}</td>
                </tr>
                <tr>
                  <td>{`1,4,2,3`}</td>
                  <td>{`2,4,1,3`}</td>
                  <td>{`3,4,1,2`}</td>
                  <td>{`4,3,1,2`}</td>
                </tr>
                <tr>
                  <td>{`1,4,3,2`}</td>
                  <td>{`2,4,3,1`}</td>
                  <td>{`3,4,2,1`}</td>
                  <td>{`4,3,2,1`}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>{`Why does each starting number lead to exactly 6 arrangements, matching the count for 3 numbers?`}</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>{`Once you fix the first spot, you can still arrange the remaining 3 numbers in any order. That is the same counting problem as arranging $\\{1, 2, 3\\}$, which has 6 orders.`}</p>
            </details>
          </div>

          <h3>The Counting Argument for n!</h3>
          <p>{`This argument rests on the multiplication principle, also called the counting principle. When one choice does not change how many options the next choice has, you multiply the option counts.`}</p>
          <div className="lrn-proof">
            <span className="lrn-proof-header">Why n! Counts Every Arrangement</span>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">1.</span>
              <div className="lrn-proof-step-content">{`You can fill the first spot in $n$ ways, since every number is still available.`}</div>
            </div>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">2.</span>
              <div className="lrn-proof-step-content">{`You can fill the second spot in $n-1$ ways, since one number is already used. That gives $n(n-1)$ ways to fill the first two spots.`}</div>
            </div>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">3.</span>
              <div className="lrn-proof-step-content">{`You can fill the third spot in $n-2$ ways, giving $n(n-1)(n-2)$ ways for the first three spots.`}</div>
            </div>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">4.</span>
              <div className="lrn-proof-step-content">{`This pattern continues until the last spot, which has only 1 number left. Multiplying every step gives $n(n-1)(n-2) \\cdots 2 \\cdot 1 = n!$`}</div>
            </div>
            <div className="lrn-qed">Q.E.D.</div>
          </div>

          <div className="lrn-eq lrn-eq-hero">
            <span>{`$$n(n-1)(n-2) \\cdots 2 \\cdot 1 = n!$$`}</span>
          </div>

          <p>{`Apply this to four numbers. The first spot has 4 choices, the second has 3, the third has 2, and the last has 1. That gives $4 \\times 3 \\times 2 \\times 1 = 24$ total arrangements, matching the permutation tree above.`}</p>

          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>{`The multiplication principle is why you multiply here instead of adding. Every choice for the first spot pairs with every choice for the second. Multiplying counts each combined outcome once, but adding would count each spot on its own.`}</p>
            <p>{`Arranging numbers in order is a chain of choices like this. Each spot narrows the pool for the next spot, so the total count is a product, not a sum.`}</p>
          </div>
        </>,
        <>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>{`You must choose 2 fruits from an apple, a banana, and a cherry to put in a bowl. The order you pick them does not matter.`}</p>
            <p>{`Guess how many different bowls are possible.`}</p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>{`Only 3 different bowls are possible: apple-banana, apple-cherry, and banana-cherry. Picking banana then apple gives the same bowl as apple then banana.`}</p>
            </details>
          </div>

          <h2>Combinations: Order Does Not Matter</h2>
          <p>{`A combination is a way to choose a group of $k$ items from a set of $n$ items. The order you pick them does not matter. You use combinations whenever you are selecting a subset, like a team or a hand of cards.`}</p>

          <h3>Choosing k From n</h3>
          <p>{`You write the number of ways to choose $k$ items from $n$ items as $C(n, k)$. You read it as "n choose k." This counts every possible group of $k$ items, without caring which order you picked them in.`}</p>
          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>{`A permutation counts every ordered arrangement of $k$ items. You can arrange each unordered group of $k$ items in $k!$ different orders. So the permutation count includes every group $k!$ times.`}</p>
            <p>{`To count groups instead of orderings, you divide the permutation count by $k!$. This removes the extra copies caused by order, leaving only the distinct groups.`}</p>
          </div>

          <h3>The Combination Formula</h3>
          <div className="lrn-eq lrn-eq-hero">
            <span>{`$$C(n, k) = \\frac{n!}{k!\\,(n-k)!}$$`}</span>
          </div>
          <p>{`Start from $n!$, the number of ways to arrange all $n$ items. Divide by $(n-k)!$ to ignore the order of the $n-k$ items you leave out. That leaves the ordered ways to pick $k$ items. Then divide by $k!$ to ignore the order within the $k$ items you chose. What remains is the count of distinct groups.`}</p>

          <div className="lrn-faded">
            <div className="lrn-faded-phase">
              <span className="lrn-faded-label">COMPLETE EXAMPLE</span>
              <p>{`$C(9, 4) = \\dfrac{9!}{4! \\cdot 5!}$`}</p>
              <p>{`The $5!$ on the bottom cancels most of the $9!$ on top, leaving $\\dfrac{6 \\cdot 7 \\cdot 8 \\cdot 9}{1 \\cdot 2 \\cdot 3 \\cdot 4}$.`}</p>
              <p>{`Dividing cancels the matching numbers $1$ through $5$, leaving only $6, 7, 8, 9$ on top.`}</p>
              <p>{`That fraction equals $126$, so $C(9, 4) = 126$.`}</p>
            </div>
            <div className="lrn-faded-phase">
              <span className="lrn-faded-label">YOUR TURN, PARTIAL</span>
              <ol className="lrn-list">
                <li>{`Write $C(100, 3)$ as $\\dfrac{100!}{3! \\cdot 97!}$.`}</li>
                <li>{`Cancel the $97!$ on the bottom against the matching part of $100!$ on top, leaving $\\dfrac{98 \\cdot 99 \\cdot 100}{1 \\cdot 2 \\cdot 3}$.`}</li>
                <li>{`Multiply the top, then divide by the bottom, to find the final value.`}</li>
              </ol>
            </div>
            <div className="lrn-faded-phase">
              <span className="lrn-faded-label">INDEPENDENT PRACTICE</span>
              <p>{`Compute $C(100, 97)$ the same way, by writing it as $\\dfrac{100!}{97! \\cdot 3!}$ and cancelling.`}</p>
            </div>
          </div>

          <h3>Symmetry: C(n,k) Equals C(n, n-k)</h3>
          <div className="lrn-eq">
            <span>{`$$C(n, k) = C(n, n-k)$$`}</span>
          </div>
          <p>{`Choosing 3 items out of 100 leaves exactly 97 items behind. Choosing 97 items out of 100 leaves exactly 3 items behind. Both choices describe the same split, so they give the same count.`}</p>
          <p>{`For example, $C(100, 3)$ and $C(100, 97)$ must come out equal for exactly this reason.`}</p>

          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Permutations</span>
              <p>{`Order matters. Arranging $\\{1, 2, 3\\}$ gives 6 different results, because $(1,2,3)$ and $(3,2,1)$ count as different orders.`}</p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Combinations</span>
              <p>{`Order does not matter. Choosing 2 fruits from 3 gives only 3 results, because picking apple then banana is the same bowl as banana then apple.`}</p>
            </div>
          </div>
        </>,
        <>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>{`Row 4 of Pascal's Triangle is $1, 4, 6, 4, 1$. Before you learn the rule, guess how you might build row 5 using only the numbers in row 4.`}</p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>{`You add each pair of neighboring numbers in row 4 to get the new numbers between the 1's in row 5.`}</p>
            </details>
          </div>

          <h2>Pascal's Triangle</h2>
          <p>{`Pascal's Triangle is a triangular array of numbers. Each row lists the values of $C(n, k)$ for one value of $n$, from $k = 0$ up to $k = n$. The number $C(n, k)$ is also called a binomial coefficient, because these same counts show up as the coefficients when you multiply out a binomial. You use Pascal's Triangle to build these coefficients quickly, without computing any factorials.`}</p>

          <div className="lrn-callout">
            <span className="lrn-callout-label">History</span>
            <p>{`The triangle is named after French mathematician Blaise Pascal (1623 to 1662).`}</p>
            <p>{`A version of it appeared much earlier, in a Chinese book from 1303 by Zhu Shijie. It included a diagram called "The Old Method Chart of the Seven Multiplying Squares." Pascal rediscovered the pattern independently.`}</p>
          </div>

          <h3>Building the Triangle Row By Row</h3>
          <div className="lrn-graph">
            <PascalTriangleViz />
          </div>
          <div className="lrn-callout">
            <p>{`Look at row 3. The entry $C(3, 2) = 3$ is the sum of the two entries diagonally above it in row 2: $C(2, 1) = 2$ and $C(2, 2) = 1$.`}</p>
          </div>
          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>{`Why does every row start and end with a 1, no matter how many rows you build?`}</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>{`The first entry of a row counts the ways to choose 0 items. There is always exactly 1 way to choose nothing. The last entry counts the ways to choose every item. There is always exactly 1 way to choose everything.`}</p>
            </details>
          </div>

          <h3>The Key Property (Pascal's Rule)</h3>
          <div className="lrn-callout">
            <span className="lrn-callout-label">Key Property</span>
            <p>{`Every entry in Pascal's Triangle, other than the 1's, equals the sum of the two entries diagonally above it.`}</p>
          </div>
          <div className="lrn-eq lrn-eq-hero">
            <span>{`$$C(n+1, k) = C(n, k) + C(n, k-1)$$`}</span>
          </div>
          <p>{`You will sometimes see the same rule written with different letters, such as $C(k, r-1) + C(k, r) = C(k+1, r)$. Both versions describe the identical pattern, just labeled differently.`}</p>

          <div className="lrn-proof">
            <span className="lrn-proof-header">Why the Key Property Works</span>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">1.</span>
              <div className="lrn-proof-step-content">{`$C(n+1, k)$ counts every way to choose $k$ items from a set of $n+1$ items.`}</div>
            </div>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">2.</span>
              <div className="lrn-proof-step-content">{`Pick any one item to focus on. Either that item is left out of the group, or it is included in the group.`}</div>
            </div>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">3.</span>
              <div className="lrn-proof-step-content">{`If it is left out, you still need to choose all $k$ items from the remaining $n$ items. That is $C(n, k)$ ways.`}</div>
            </div>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">4.</span>
              <div className="lrn-proof-step-content">{`If it is included, you only need $k-1$ more items from the remaining $n$ items. That is $C(n, k-1)$ ways. Adding both cases gives every possible group, so $C(n+1, k) = C(n, k) + C(n, k-1)$.`}</div>
            </div>
            <div className="lrn-qed">Q.E.D.</div>
          </div>

          <p>{`This rule lets you build row 6 straight from row 5, which is $1, 5, 10, 10, 5, 1$, by adding each neighboring pair.`}</p>
          <div className="lrn-steps">
            <div className="lrn-step">
              <span className="lrn-step-title">Row 5</span>
              <p className="lrn-step-content">{`$1, 5, 10, 10, 5, 1$`}</p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">Row 6</span>
              <p className="lrn-step-content">{`Add neighboring pairs: $1{+}5=6$, $5{+}10=15$, $10{+}10=20$, $10{+}5=15$, $5{+}1=6$. Row 6 is $1, 6, 15, 20, 15, 6, 1$.`}</p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">Row 7</span>
              <p className="lrn-step-content">{`Adding neighboring pairs of row 6 gives $1, 7, 21, 35, 35, 21, 7, 1$.`}</p>
            </div>
          </div>
          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>{`Row 6 has one more entry than row 5. Why does adding a row always add exactly one more number?`}</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>{`Row $n$ lists $C(n, k)$ for $k$ from $0$ to $n$, so it always has $n+1$ entries. Moving from row 5 to row 6 increases $n$ by 1, which adds exactly one more value of $k$ to list.`}</p>
            </details>
          </div>

          <h3>Pascal's Triangle in C(n,k) Notation</h3>
          <p>{`You can rewrite row 5 of the triangle using combination notation, matching each number to its $C(n, k)$ value.`}</p>
          <div className="lrn-table">
            <table>
              <thead>
                <tr>
                  <th>{`k`}</th>
                  <th>{`C(5,k)`}</th>
                  <th>{`Value`}</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{`0`}</td>
                  <td>{`C(5,0)`}</td>
                  <td>{`1`}</td>
                </tr>
                <tr>
                  <td>{`1`}</td>
                  <td>{`C(5,1)`}</td>
                  <td>{`5`}</td>
                </tr>
                <tr>
                  <td>{`2`}</td>
                  <td>{`C(5,2)`}</td>
                  <td>{`10`}</td>
                </tr>
                <tr>
                  <td>{`3`}</td>
                  <td>{`C(5,3)`}</td>
                  <td>{`10`}</td>
                </tr>
                <tr>
                  <td>{`4`}</td>
                  <td>{`C(5,4)`}</td>
                  <td>{`5`}</td>
                </tr>
                <tr>
                  <td>{`5`}</td>
                  <td>{`C(5,5)`}</td>
                  <td>{`1`}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>{`Why do these $C(5, k)$ values match row 5 exactly? You built the triangle by adding, not by using the factorial formula.`}</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>{`Both methods count the same thing: the number of ways to choose $k$ items from 5. The triangle and the formula are just two different routes to the same answer.`}</p>
            </details>
          </div>

          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>{`Building the triangle row by row works, but it is slow for large $n$. Finding row 100 would require building all 99 rows before it.`}</p>
            <p>{`The factorial formula $C(n, k) = \\dfrac{n!}{k!\\,(n-k)!}$ gives any single entry directly, without building the rows that come before it. That is why the direct formula matters once $n$ gets large.`}</p>
          </div>
        </>
      ]
    },
    practice: [
      {
        q: 'What is $6!$?',
        a: '$6! = 720$. Multiply every whole number from 1 to 6, so $1 \\times 2 \\times 3 \\times 4 \\times 5 \\times 6 = 720$. Each new number multiplies the running product, which is why factorials grow so fast.'
      },
      {
        q: 'What makes an arrangement a permutation instead of just a list?',
        a: 'A permutation is an arrangement where order matters and you use every item exactly once, with no repeats. Swapping two items creates a different, distinct permutation. This is why $(1,2,3)$ and $(3,2,1)$ count as two separate permutations.'
      },
      {
        q: 'Compute $C(7, 2)$.',
        a: '$C(7, 2) = \\dfrac{7!}{2! \\cdot 5!} = \\dfrac{6 \\cdot 7}{1 \\cdot 2} = 21$. The $5!$ on the bottom cancels most of the $7!$ on top, leaving only $6$ times $7$ divided by $2$. So there are 21 ways to choose 2 items from 7.'
      },
      {
        q: "Row 4 of Pascal's Triangle is $1, 4, 6, 4, 1$. What is the third entry, $C(4,2)$, and why does it sit in that position?",
        a: 'The third entry is $6$. Row 4 lists $C(4,0)$ through $C(4,4)$ in order, so the third entry, counting from 0, is $C(4,2)$. This value also equals $\\dfrac{4!}{2! \\cdot 2!} = 6$, matching the triangle.'
      },
      {
        q: 'You have 8 different signal flags to hang on a rope, in a straight line. How many different orders are possible?',
        a: 'There are $8! = 40{,}320$ possible orders. The first spot has 8 flag choices, the next has 7, and so on down to 1. Multiplying $8 \\times 7 \\times 6 \\times 5 \\times 4 \\times 3 \\times 2 \\times 1$ gives $40{,}320$, the same counting rule used for arranging books.'
      },
      {
        q: 'A club is picking a president, a treasurer, and a secretary from 5 members, one person per role. Should you use a permutation or a combination, and why?',
        a: 'Use a permutation. Each role is different, so choosing the same 3 people in a different order changes who holds which job. Since order matters here, this is a permutation problem, not a combination problem.'
      },
      {
        q: 'A teacher is picking 3 students from 5 to form a study group, with no roles assigned. Should you use a permutation or a combination?',
        a: 'Use a combination. Every student in the group has the same role. So the order you pick them in does not change the group. Since order does not matter, this is a combination problem, computed as $C(5, 3)$.'
      },
      {
        q: "Row 6 of Pascal's Triangle is $1, 6, 15, 20, 15, 6, 1$. Use Pascal's Rule to find the third entry of row 7.",
        a: 'The third entry of row 7 is $21$. Pascal’s Rule says each entry equals the sum of the two entries diagonally above it. The second and third entries of row 6 are $6$ and $15$, and $6 + 15 = 21$.'
      },
      {
        q: 'Why is $0!$ defined as 1, instead of 0 or left undefined?',
        a: 'There is exactly one way to arrange zero items: the empty arrangement. There is nothing to place in any order. Defining $0! = 1$ also keeps formulas like $C(n, 0) = \\dfrac{n!}{0! \\cdot n!}$ working correctly, giving the expected answer of 1.'
      },
      {
        q: 'Why does the counting argument for $n!$ multiply the choices at each spot instead of adding them?',
        a: 'Every choice for the first spot pairs with every choice for the next spot, and so on down the line. Multiplying counts each combined outcome exactly once, while adding would not.'
      },
      {
        q: 'Before computing, guess: is $5!$ bigger, smaller, or equal to $4! \\times 5$?',
        a: 'They are equal. $5! = 1 \\times 2 \\times 3 \\times 4 \\times 5$, and $4! = 1 \\times 2 \\times 3 \\times 4$, so $5! = 4! \\times 5$ by definition. Every factorial equals the previous factorial times the next whole number.'
      },
      {
        q: 'Before computing either one, guess whether $C(10, 3)$ is bigger, smaller, or equal to $C(10, 7)$.',
        a: 'They are equal, by the symmetry rule $C(n, k) = C(n, n-k)$. Choosing 3 items out of 10 to include is the same decision as choosing 7 items out of 10 to leave out, so both counts must match.'
      },
      {
        q: 'A pizza shop offers 6 toppings. How many different 2-topping pizzas can you order, if the order you name the toppings does not matter?',
        a: 'There are $C(6, 2) = \\dfrac{6!}{2! \\cdot 4!} = \\dfrac{5 \\cdot 6}{1 \\cdot 2} = 15$ different pizzas. Naming pepperoni then mushroom gives the same pizza as naming mushroom then pepperoni. So this is a combination, not a permutation.'
      },
      {
        q: 'A book club has 8 members. How many different 3-person discussion groups can you form from the club, with no roles assigned?',
        a: 'There are $C(8, 3) = \\dfrac{8!}{3! \\cdot 5!} = \\dfrac{6 \\cdot 7 \\cdot 8}{1 \\cdot 2 \\cdot 3} = 56$ possible groups. No member has a special role. So picking members in a different order does not create a new group, and you divide out the $3!$ orderings.'
      },
      {
        q: '5 friends want to line up for a photo, using every friend exactly once. How many different lineups are possible?',
        a: 'There are $5! = 120$ possible lineups. The first spot has 5 choices, the next has 4, then 3, then 2, then 1, and multiplying gives $120$. This is the same counting argument used for arranging any full set of items.'
      },
      {
        q: 'A student computes $C(5, 2)$ as $\\dfrac{5!}{2!} = 60$. Find the error and give the correct value.',
        a: 'The student forgot to divide by $(n-k)!$, which is $3!$ here. The correct formula is $C(5, 2) = \\dfrac{5!}{2! \\cdot 3!} = \\dfrac{4 \\cdot 5}{1 \\cdot 2} = 10$. Skipping $3!$ counts the leftover items’ order too, making the value too large.'
      },
      {
        q: 'A student says the permutations of $\\{1, 2, 3\\}$ total $3 \\times 3 \\times 3 = 27$. Find the error and give the correct count.',
        a: 'The student let each spot reuse all 3 numbers, as if repeats were allowed. A permutation uses each number exactly once, so the choices shrink at each spot: $3 \\times 2 \\times 1 = 6$. The correct count is 6, not 27.'
      },
      {
        q: 'Explain why $C(9, 4)$ equals $C(9, 5)$.',
        a: 'Choosing 4 items out of 9 to include always leaves exactly 5 items out. Choosing 5 items out of 9 to include always leaves exactly 4 items out. Both descriptions split the same 9 items the same way, so the counts match by the symmetry rule.'
      },
      {
        q: "Explain why the second entry of every row in Pascal's Triangle always equals the row number, $n$.",
        a: 'The second entry of row $n$ is $C(n, 1)$, the number of ways to choose 1 item out of $n$. There are exactly $n$ single items to choose, one for each item in the set, so $C(n, 1) = n$ every time.'
      },
      {
        q: "What does each row of Pascal's Triangle represent?",
        a: 'Each row lists the values of $C(n, k)$ for one fixed $n$, as $k$ runs from 0 up to $n$. Row 4, for example, lists $C(4,0)$ through $C(4,4)$, which are $1, 4, 6, 4, 1$.'
      },
      {
        q: "Build row 5 of Pascal's Triangle from row 4, which is $1, 4, 6, 4, 1$.",
        a: 'Row 5 is $1, 5, 10, 10, 5, 1$. Add each neighboring pair in row 4: $1+4=5$, $4+6=10$, $6+4=10$, $4+1=5$, and keep the 1’s at both ends.'
      },
      {
        q: 'A locker uses 4 dials, each dial showing a different one of 4 fixed numbers, arranged in some order. How many different orders are possible?',
        a: 'There are $4! = 24$ possible orders. The first dial has 4 number choices, the second has 3, the third has 2, and the last has 1, so $4 \\times 3 \\times 2 \\times 1 = 24$.'
      },
      {
        q: 'Two counts use the same 5 items but give different totals. One gives 120; the other gives 10 for groups of 2. Which count is the permutation and which is the combination?',
        a: 'The count of 120 is the permutation, since $5! = 120$ counts every full ordered arrangement. The count of 10 is the combination $C(5, 2)$. It counts only unordered pairs, and does not care which item you picked first.'
      },
      {
        q: 'Using Pascal’s Rule, if $C(9, 4) = 126$ and $C(9, 5) = 126$, what is $C(10, 5)$?',
        a: '$C(10, 5) = C(9, 4) + C(9, 5) = 126 + 126 = 252$. Pascal’s Rule says $C(n+1, k) = C(n, k) + C(n, k-1)$. Adding the two neighboring entries from row 9 gives the entry directly below them in row 10.'
      },
      {
        q: 'A committee needs 2 people from 4 candidates, with no assigned roles. How many different committees are possible?',
        a: 'There are $C(4, 2) = \\dfrac{4!}{2! \\cdot 2!} = \\dfrac{3 \\cdot 4}{1 \\cdot 2} = 6$ possible committees. No candidate has a distinct role. So the order you pick them in does not matter, and this is a combination.'
      },
      {
        q: '6 runners finish a race with no ties, using every runner. How many different final orderings are possible for all 6 runners?',
        a: 'There are $6! = 720$ possible orderings. The first place has 6 possible runners, the second has 5, and so on down to 1, and multiplying all six numbers gives $720$.'
      },
      {
        q: "Why does building Pascal's Triangle row by row become too slow to be practical for large values of $n$, like $n = 100$?",
        a: 'Each row depends on the row before it, since every entry is a sum of two entries above. To reach row 100, you would need to build all 99 rows before it, one at a time. The factorial formula avoids this, since it computes any single entry directly.'
      },
      {
        q: 'Explain why $10!$ is more than 700 times bigger than $7!$, even though $n$ only grew by 3.',
        a: 'Going from $7!$ to $10!$ multiplies the value by $8$, then by $9$, then by $10$. Multiplying by three numbers larger than 1, one after another, grows the product much faster than adding 3 would.'
      },
      {
        q: 'Why do you divide by $k!$ in the combination formula, instead of just using $n!$ divided by $(n-k)!$?',
        a: 'Dividing by $(n-k)!$ alone still leaves the $k$ chosen items in every possible order, counting the same group many times. Dividing by $k!$ as well removes those repeated orders, leaving only the distinct unordered groups.'
      },
      {
        q: 'Before computing, guess: how many arrangements exist for just 2 distinct items, like the letters A and B?',
        a: 'There are 2 arrangements: AB and BA. Using the counting argument, the first spot has 2 choices, and the last spot has only 1 choice left, so $2 \\times 1 = 2$.'
      },
      {
        q: "Before checking, guess: do the first and last entries of every row in Pascal's Triangle ever change? This holds no matter how far the triangle grows.",
        a: 'No, they never change. The first entry is always $C(n, 0) = 1$, and the last is always $C(n, n) = 1$. There is always exactly one way to choose nothing or to choose everything.'
      }
    ],
    reference: {
      category: 'Quick Reference',
      title: 'Permutations and Combinations',
      sections: [
        <>
          <h2>Factorial Notation</h2>
          <div className="ref-formula">
            <span className="ref-formula-name">Factorial</span>
            <div className="ref-formula-eq">{`$n! = 1 \\cdot 2 \\cdot 3 \\cdots n$`}</div>
            <p className="ref-formula-desc">{`When to use: count the number of ways to arrange every item in a set, in order.`}</p>
          </div>
          <div className="ref-formula">
            <span className="ref-formula-name">Zero Factorial</span>
            <div className="ref-formula-eq">{`$0! = 1$`}</div>
            <p className="ref-formula-desc">{`When to use: as the starting value for factorial formulas, since there is exactly one way to arrange zero items.`}</p>
          </div>
        </>,
        <>
          <h2>Permutations</h2>
          <div className="ref-formula">
            <span className="ref-formula-name">Permutations of n Objects</span>
            <div className="ref-formula-eq">{`$n!$`}</div>
            <p className="ref-formula-desc">{`When to use: count arrangements of a full set of $n$ different items, when order matters.`}</p>
          </div>
        </>,
        <>
          <h2>Combinations</h2>
          <div className="ref-formula">
            <span className="ref-formula-name">Binomial Coefficient</span>
            <div className="ref-formula-eq">{`$C(n, k) = \\dfrac{n!}{k!\\,(n-k)!}$`}</div>
            <p className="ref-formula-desc">{`When to use: count how many ways to choose $k$ items from $n$ items, when order does not matter.`}</p>
          </div>
          <div className="ref-formula">
            <span className="ref-formula-name">Symmetry</span>
            <div className="ref-formula-eq">{`$C(n, k) = C(n, n-k)$`}</div>
            <p className="ref-formula-desc">{`When to use: swap to the smaller of $k$ and $n-k$ to make a computation shorter.`}</p>
          </div>
        </>,
        <>
          <h2>Pascal's Triangle</h2>
          <div className="ref-formula">
            <span className="ref-formula-name">Pascal's Rule (Key Property)</span>
            <div className="ref-formula-eq">{`$C(n+1, k) = C(n, k) + C(n, k-1)$`}</div>
            <p className="ref-formula-desc">{`When to use: build the next row of Pascal's Triangle from the row above it, without factorials.`}</p>
          </div>
          <div className="ref-grid">
            <div className="ref-item">
              <span>{`Row 0`}</span>
              <span>{`1`}</span>
            </div>
            <div className="ref-item">
              <span>{`Row 1`}</span>
              <span>{`1, 1`}</span>
            </div>
            <div className="ref-item">
              <span>{`Row 2`}</span>
              <span>{`1, 2, 1`}</span>
            </div>
            <div className="ref-item">
              <span>{`Row 3`}</span>
              <span>{`1, 3, 3, 1`}</span>
            </div>
            <div className="ref-item">
              <span>{`Row 4`}</span>
              <span>{`1, 4, 6, 4, 1`}</span>
            </div>
            <div className="ref-item">
              <span>{`Row 5`}</span>
              <span>{`1, 5, 10, 10, 5, 1`}</span>
            </div>
            <div className="ref-item">
              <span>{`Row 6`}</span>
              <span>{`1, 6, 15, 20, 15, 6, 1`}</span>
            </div>
            <div className="ref-item">
              <span>{`Row 7`}</span>
              <span>{`1, 7, 21, 35, 35, 21, 7, 1`}</span>
            </div>
          </div>
          <table>
            <thead>
              <tr>
                <th>{`Feature`}</th>
                <th>{`Permutations`}</th>
                <th>{`Combinations`}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{`Order`}</td>
                <td>{`Matters`}</td>
                <td>{`Does not matter`}</td>
              </tr>
              <tr>
                <td>{`Formula`}</td>
                <td>{`$n!$`}</td>
                <td>{`$\\dfrac{n!}{k!\\,(n-k)!}$`}</td>
              </tr>
              <tr>
                <td>{`Example`}</td>
                <td>{`Arranging 3 friends in line`}</td>
                <td>{`Choosing 2 fruits from 3`}</td>
              </tr>
            </tbody>
          </table>
        </>
      ]
    },
    customCss: null
  }
  return config
}

export default function PermutationsAndCombinations() {
  const config = useConfig()
  return <LearningTemplate config={config} />
}
