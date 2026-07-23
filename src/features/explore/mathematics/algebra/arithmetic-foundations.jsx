import React from 'react'
import { LearningTemplate } from '../../../../components/learning/learning-template'
import {
  BinaryPlaceValueViz,
  CommutativityGridViz,
  DistributiveLawViz,
  NumberLineNegativesViz
} from '../../../../components/viz'

const DOTS_3X5 = []
for (let r = 0; r < 3; r++) {
  for (let c = 0; c < 5; c++) {
    DOTS_3X5.push([c - 2, r - 1])
  }
}

function useConfig() {
  const config = {
    cssPrefix: 'arf',
    documentTitle: 'Arithmetic Foundations - AETHER',
    learning: {
      groupTitle: 'Number and Algebra Foundations',
      category: 'Module 1',
      title: 'Arithmetic Foundations',
      subtitle:
        'Place value, the four operations, the laws beneath them, negative numbers, and binary.',
      sections: [
        <>
          <h2>From Arithmetic to Algebra</h2>
          <p>{`Algebra is arithmetic with one stronger demand.`}</p>
          <p>{`Every claim has to hold for every number, not just the one in front of you.`}</p>
          <p>{`To make that work you need the rules under the four operations. This lesson pulls them out of plain counting.`}</p>

          <h2>Notation</h2>
          <p>{`Arithmetic writes multiplication with a cross: $3 \\times 5$.`}</p>
          <p>{`Algebra writes it with a dot, $3 \\cdot 5$, or with nothing at all, $3a$.`}</p>
          <p>{`The cross gets dropped because it collides with the letter $x$.`}</p>

          <h2>Same Count, Different Story</h2>
          <p>{`Three boys with five apples each is not the same scene as five boys with three apples each.`}</p>
          <p>{`The stories differ. The count does not.`}</p>
          <p>{`Both scenes hold fifteen apples.`}</p>

          <div className="lrn-eq">
            <span>{`$$3 \\cdot 5 = 5 \\cdot 3 = 15$$`}</span>
          </div>

          <p>{`The number is fixed by what is there, not by how you tell the story.`}</p>
          <p>{`That observation is the seed of every law in this lesson.`}</p>
        </>,

        <>
          <h2>The Decimal Number System</h2>

          <p>{`A digit's value depends on where it sits.`}</p>
          <p>{`In 352, the 3 stands for three hundreds, the 5 for five tens, the 2 for two ones.`}</p>
          <p>{`Each step left multiplies the value by ten.`}</p>

          <div className="lrn-eq">
            <span>{`$$\\text{value} = \\text{digit} \\times 10^{\\text{position}}$$`}</span>
          </div>

          <h3>Powers, in one line</h3>
          <p>{`The small raised number is a power. It is shorthand for repeated multiplication.`}</p>
          <p>{`$10^3$ means three tens multiplied together: $10 \\cdot 10 \\cdot 10 = 1000$. The big number is the base. The raised number is the exponent, and it counts how many copies you multiply.`}</p>
          <p>{`So $10^0 = 1$ (no tens, just the starting 1), $10^1 = 10$, $10^2 = 100$. Position 0 is the ones place, position 1 is the tens, position 2 is the hundreds.`}</p>
          <p>{`Powers work for any base. $2^3 = 2 \\cdot 2 \\cdot 2 = 8$. A later page studies them in depth.`}</p>

          <p>{`We have ten symbols: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9.`}</p>
          <p>{`Counting past 9 needs a new place. So 9 + 1 becomes 10, meaning one ten and zero ones.`}</p>
          <p>{`Every later place repeats the move. Ten of anything regroups into one of the next place up.`}</p>

          <h3>Past the decimal point</h3>
          <p>{`The places do not stop at the ones. Put a dot after the ones place and keep going right, dividing by ten at each step.`}</p>
          <p>{`The first place after the dot is tenths, the next is hundredths, then thousandths. So $0.25$ means two tenths and five hundredths.`}</p>
          <div className="lrn-eq">
            <span>{`$$0.25 = \\frac{2}{10} + \\frac{5}{100} = \\frac{25}{100}$$`}</span>
          </div>
          <p>{`A decimal is just place value running past the ones. Money already works this way: $\\$3.50$ is three dollars and five tenths of a dollar.`}</p>

          <div className="lrn-callout lrn-tip">
            <span className="lrn-callout-label">Archimedes</span>
            <p>{`In The Sand Reckoner, Archimedes built a notation for very large numbers.`}</p>
            <p>{`He used it to name a number larger than the grains of sand in a sphere reaching the stars.`}</p>
            <p>{`Writing huge numbers compactly is not obvious. Positional notation makes it routine.`}</p>
          </div>

          <h3>The Addition Algorithm</h3>
          <p>{`Line the digits up by place. Add column by column, starting from the ones.`}</p>
          <p>{`If a column reaches 10 or more, write the ones digit and carry the tens digit one column left.`}</p>
          <p>{`A column holds a single digit, so any overflow has to move up. Ten ones become one ten by the definition of place value itself.`}</p>
          <p>{`Add $47 + 68$. Ones column: $7 + 8 = 15$, so write 5 and carry 1. Tens column: $4 + 6 + 1 = 11$, so write 1 and carry 1. The carry lands in a new hundreds place. The answer is 115.`}</p>
          <p>{`You can now add any two whole numbers.`}</p>

          <h3>The Subtraction Algorithm</h3>
          <p>{`Subtract column by column, again starting from the ones. When the top digit is too small, borrow one unit from the next place left, which is worth ten in the current place.`}</p>
          <p>{`Subtract $52 - 7$. The ones column needs $2 - 7$, which you cannot do yet. Borrow one ten: the 5 tens become 4 tens, and the 2 ones become 12 ones. Now $12 - 7 = 5$ ones, and 4 tens stay. The answer is 45.`}</p>
          <p>{`Borrowing is carrying run in reverse. One of the next place up unpacks into ten of the current place.`}</p>

          <h3>Sums of eights</h3>
          <p>{`Using only the digit 8 and plus signs, write 1000.`}</p>
          <p>{`Every term ends in 8. So the ones column has to add up to a multiple of 10.`}</p>
          <p>{`$8 \\cdot 5 = 40$ is the first multiple of 10 that 8 reaches, so the sum needs at least five terms.`}</p>
          <p>{`Five 8s give 40 in the ones column: write 0, carry 4.`}</p>
          <p>{`Tens column needs $4 + 8k$ to end in 0. The smallest fit is $k = 2$ (since $4 + 16 = 20$). So two of the terms have a second 8.`}</p>
          <p>{`Carry from the tens is 2. Hundreds column needs $2 + 8m$ to give 10, so $m = 1$. One term has a third 8.`}</p>
          <p>{`Thousands column then receives the carry of 1.`}</p>
          <p>{`Five terms total: one with three 8s (888), one with two 8s (88), three single 8s.`}</p>
          <div className="lrn-eq">
            <span>{`$$8 + 8 + 8 + 88 + 888 = 1000$$`}</span>
          </div>

          <h3>{`A letter puzzle: $\\overline{AAA} + \\overline{BBB} = \\overline{AAAC}$`}</h3>
          <p>{`Each capital letter stands for a single digit. A bar over a group of letters means the whole number you get by writing those digits in a row, not their product. So $\\overline{AAA}$ is the three-digit number with all three digits equal to $A$.`}</p>
          <p>{`Find $A$, $B$, $C$.`}</p>
          <p>{`The sum is a four-digit number, but $\\overline{AAA} + \\overline{BBB}$ is at most $999 + 999 = 1998$. So $A = 1$.`}</p>
          <p>{`Now the equation is $111 + \\overline{BBB} = 1110 + C$.`}</p>
          <p>{`Add column by column. Ones column: $1 + B = C$ or $C + 10$. Tens column should produce the digit 1, and so should hundreds.`}</p>
          <p>{`The only way the middle two digits both become 1 is if every column carries. That forces $1 + B = 10$, so $B = 9$, $C = 0$.`}</p>
          <div className="lrn-eq">
            <span>{`$$111 + 999 = 1110$$`}</span>
          </div>
        </>,

        <>
          <h2>The Multiplication Algorithm</h2>

          <p>{`To compute $17 \\cdot 38$, work each digit separately, then add the shifted partial products.`}</p>
          <p>{`Two orderings are possible. Both give the same answer through different intermediate numbers.`}</p>

          <div className="lrn-eq">
            <span>{`$$17 \\cdot 38: \\quad 17 \\cdot 8 = 136,\\quad 17 \\cdot 30 = 510,\\quad 136 + 510 = 646$$`}</span>
          </div>
          <div className="lrn-eq">
            <span>{`$$38 \\cdot 17: \\quad 38 \\cdot 7 = 266,\\quad 38 \\cdot 10 = 380,\\quad 266 + 380 = 646$$`}</span>
          </div>

          <p>{`That the two routes agree is not luck. It is the distributive law in disguise.`}</p>

          <div className="lrn-eq">
            <span>{`$$17 \\cdot 38 = (10 + 7)(30 + 8) = 300 + 80 + 210 + 56 = 646$$`}</span>
          </div>

          <p>{`The four partial products $10 \\cdot 30$, $10 \\cdot 8$, $7 \\cdot 30$, $7 \\cdot 8$ are exactly the columns of the long-multiplication sum.`}</p>
          <p>{`You can now multiply any two whole numbers, digit by digit.`}</p>

          <h3>Multiply by 1001 in one step</h3>
          <p>{`Since $1001 = 1000 + 1$, any number $\\overline{ABC}$ in the hundreds gives:`}</p>
          <div className="lrn-eq">
            <span>{`$$\\overline{ABC} \\cdot 1001 = \\overline{ABC} \\cdot 1000 + \\overline{ABC} = \\overline{ABCABC}$$`}</span>
          </div>
          <p>{`Multiplying by 1000 shifts the digits three places left. Adding the original fills the last three places. Example: $715 \\cdot 1001 = 715715$.`}</p>

          <h3>{`A factor full of zeros`}</h3>
          <p>{`Compute $101010101 \\cdot 57$. Break the first factor by place: $101010101 = 1 + 10^2 + 10^4 + 10^6 + 10^8$.`}</p>
          <p>{`Multiply 57 by each power and add: $57,\\ 5700,\\ 570000,\\ 57000000,\\ 5700000000$.`}</p>
          <div className="lrn-eq">
            <span>{`$$101010101 \\cdot 57 = 5757575757$$`}</span>
          </div>
          <p>{`The pair 57 repeats five times because the powers of 100 line up cleanly.`}</p>

          <h3>{`When the copies overlap`}</h3>
          <p>{`Compute $10001 \\cdot 1020304050$. Since $10001 = 10000 + 1$, the product is $1020304050 \\cdot 10000 + 1020304050$.`}</p>
          <div className="lrn-eq">
            <span>{`$$10203040500000 + 1020304050 = 10204060804050$$`}</span>
          </div>
          <p>{`The two terms overlap in the middle. Each overlapping column adds the digit from the shifted copy to the digit from the original copy.`}</p>

          <h3>{`A pyramid of ones`}</h3>
          <p>{`Compute $11111 \\cdot 1111$. Each digit of 1111 means "add a shifted copy of 11111." Stack the four copies:`}</p>
          <div className="lrn-eq">
            <span>{`$$11111000 + 1111100 + 111110 + 11111 = 12344321$$`}</span>
          </div>
          <p>{`Each column counts how many copies overlap it. From right to left the overlaps run 1, 2, 3, 4, 4, 3, 2, 1.`}</p>
          <p>{`The pattern climbs, holds flat for one column, then falls back down.`}</p>
          <p>{`The flat step exists because the factors have different lengths: 5 ones against 4 ones.`}</p>
          <p>{`With equal lengths the pattern peaks once: $1111 \\cdot 1111 = 1234321$.`}</p>
        </>,

        <>
          <h2>The Division Algorithm</h2>

          <p>{`Every division produces a quotient and a remainder. The remainder is always strictly less than the divisor.`}</p>
          <div className="lrn-eq lrn-eq-hero">
            <span>{`$$\\text{dividend} = \\text{divisor} \\times \\text{quotient} + \\text{remainder},\\quad 0 \\le r < \\text{divisor}$$`}</span>
          </div>
          <p>{`If $r$ were as large as the divisor, you could subtract the divisor one more time and grow the quotient. So $r$ has to stay below it.`}</p>

          <h3>A worked long division</h3>
          <p>{`Divide 754 by 6. Take the digits from the left, one place at a time.`}</p>
          <p>{`7 holds one 6 with 1 left over. Bring down the 5 to make 15. 15 holds two 6s with 3 left over. Bring down the 4 to make 34. 34 holds five 6s with 4 left over.`}</p>
          <div className="lrn-eq">
            <span>{`$$754 = 6 \\times 125 + 4$$`}</span>
          </div>
          <p>{`The quotient is 125 and the remainder is 4. Notice $4 < 6$, as the rule demands.`}</p>

          <h3>Solving a simple equation</h3>
          <p>{`An equation says two expressions are equal. To find the unknown, do the same thing to both sides until the unknown stands alone.`}</p>
          <p>{`Two moves do all the work. You can add or subtract the same number on both sides. You can multiply or divide both sides by the same nonzero number.`}</p>
          <p>{`Solve $7x + 1 = 50$. Subtract 1 from both sides: $7x = 49$. Divide both sides by 7: $x = 7$.`}</p>
          <p>{`When the unknown sits on both sides, gather it on one side first. Solve $10x + 1 = 3x + 8$. Subtract $3x$ from both sides: $7x + 1 = 8$. Subtract 1: $7x = 7$. Divide by 7: $x = 1$.`}</p>
          <p>{`Check by putting the answer back in: $10 \\cdot 1 + 1 = 11$ and $3 \\cdot 1 + 8 = 11$. Both sides match.`}</p>

          <h3>The mystery six-digit number</h3>
          <p>{`A six-digit number starts with 1. Moving the leading 1 to the end makes the number exactly three times larger. Find it.`}</p>
          <p>{`Let the number be $\\overline{1ABCDE}$ and write $x = \\overline{ABCDE}$, so $x$ is the five-digit tail.`}</p>
          <p>{`Original: $100000 + x$. After moving the 1: $10x + 1$.`}</p>
          <p>{`The condition is $10x + 1 = 3(100000 + x)$.`}</p>
          <p>{`Expand and solve the way you just learned: $10x + 1 = 300000 + 3x$, so $7x = 299999$, giving $x = 42857$.`}</p>
          <div className="lrn-eq">
            <span>{`$$142857 \\cdot 3 = 428571 \\quad\\checkmark$$`}</span>
          </div>

          <h3>{`Dividing a repeated block`}</h3>
          <p>{`Compute $123123123 \\div 123$. Notice $123123123 = 123 \\cdot (1 + 10^3 + 10^6) = 123 \\cdot 1001001$.`}</p>
          <p>{`So the quotient is $1001001$ with remainder 0.`}</p>

          <h3>Remainder of a long string of ones</h3>
          <p>{`Let $N$ be the number made of one hundred ones. The divisor is the number made of seven ones.`}</p>
          <p>{`Group the hundred ones into blocks of seven from the right. Since $100 = 7 \\cdot 14 + 2$, you get 14 full blocks and 2 leftover ones at the top.`}</p>
          <p>{`Each full block is $1111111$ sitting in some position, so it adds to the quotient and leaves no remainder.`}</p>
          <p>{`The 2 leftover ones form the number 11, which is smaller than 1111111.`}</p>
          <p>{`Remainder is 11.`}</p>
          <p>{`You can now divide any whole number and name both the quotient and the remainder.`}</p>
        </>,

        <>
          <h2>The Binary Number System</h2>

          <h3>Weighing puzzle</h3>
          <p>{`You have weights of 1g, 2g, 4g, 8g, 16g. Each weight is either on the pan or off it.`}</p>
          <p>{`Five yes-or-no choices give $2^5 = 32$ combinations. Those 32 settings hit every whole-gram weight from 0 to 31.`}</p>
          <p>{`Mark "used" as 1 and "not used" as 0. Reading the choices for, say, $13g$ as bits gives $01101$: use the $8g$, $4g$, and $1g$ weights.`}</p>
          <p>{`Binary is the same idea. Each position is a power of 2. Each digit says whether that power is in the sum.`}</p>

          <h3>Place value in base 2</h3>
          <div className="lrn-eq">
            <span>{`$$1 \\cdot 2^3 + 0 \\cdot 2^2 + 1 \\cdot 2^1 + 1 \\cdot 2^0 = 8 + 0 + 2 + 1 = 11$$`}</span>
          </div>
          <p>{`So $1011_2 = 11_{10}$.`}</p>

          <div className="lrn-graph">
            <BinaryPlaceValueViz />
          </div>

          <h3>The generating rule</h3>
          <p>{`The list 0, 1, 10, 11, 100, 101, 110, 111, 1000, ... is the counting numbers written in binary.`}</p>
          <p>{`Each row is the previous row plus 1.`}</p>
          <p>{`In a column, $1 + 1$ writes 0 and carries 1 left.`}</p>
          <p>{`Same logic as decimal addition. The carry just triggers at 2 instead of 10.`}</p>

          <h3>Decimal–binary table</h3>
          <table>
            <thead>
              <tr>
                <th>Decimal</th>
                <th>Binary</th>
                <th>Decimal</th>
                <th>Binary</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>0</td>
                <td>0</td>
                <td>7</td>
                <td>111</td>
              </tr>
              <tr>
                <td>1</td>
                <td>1</td>
                <td>8</td>
                <td>1000</td>
              </tr>
              <tr>
                <td>2</td>
                <td>10</td>
                <td>9</td>
                <td>1001</td>
              </tr>
              <tr>
                <td>3</td>
                <td>11</td>
                <td>10</td>
                <td>1010</td>
              </tr>
              <tr>
                <td>4</td>
                <td>100</td>
                <td>11</td>
                <td>1011</td>
              </tr>
              <tr>
                <td>5</td>
                <td>101</td>
                <td>12</td>
                <td>1100</td>
              </tr>
              <tr>
                <td>6</td>
                <td>110</td>
                <td>16</td>
                <td>10000</td>
              </tr>
            </tbody>
          </table>

          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Decimal</span>
              <p>{`Ten symbols (0–9). Numbers stay short.`}</p>
              <p>{`We write fourteen as $14_{10}$.`}</p>
              <p>{`Convenient for hands with ten fingers.`}</p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Binary</span>
              <p>{`Two symbols (0, 1). Numbers run longer.`}</p>
              <p>{`The same fourteen becomes $1110_2$.`}</p>
              <p>{`Convenient for circuits with two states.`}</p>
            </div>
          </div>

          <h3>Conversions</h3>
          <p>{`What is 14 in binary, and what does $10000_2$ mean in decimal?`}</p>
          <p>{`$14 = 8 + 4 + 2 = 1 \\cdot 2^3 + 1 \\cdot 2^2 + 1 \\cdot 2^1 + 0 \\cdot 2^0 = 1110_2$.`}</p>
          <p>{`$10000_2 = 1 \\cdot 2^4 = 16$.`}</p>

          <p>{`Write 45 in binary. Pull off the largest power of 2 at each step: $45 - 32 = 13$, $13 - 8 = 5$, $5 - 4 = 1$, $1 - 1 = 0$.`}</p>
          <p>{`Powers used: $2^5, 2^3, 2^2, 2^0$.`}</p>
          <div className="lrn-eq">
            <span>{`$$45_{10} = 101101_2$$`}</span>
          </div>

          <p>{`Convert $10101101_2$ to decimal: $128 + 0 + 32 + 0 + 8 + 4 + 0 + 1 = 173$.`}</p>

          <h3>Binary arithmetic</h3>
          <p>{`The algorithms are the decimal ones with the carry threshold dropped from 10 to 2.`}</p>

          <p>{`Addition. Add column by column. When a column reaches 2, write 0 and carry 1 left.`}</p>
          <ul className="lrn-list">
            <li>{`$1010_2 + 101_2 = 1111_2 \\quad(10 + 5 = 15)$`}</li>
            <li>{`$1111_2 + 1_2 = 10000_2 \\quad(15 + 1 = 16)$`}</li>
            <li>{`$1011_2 + 1_2 = 1100_2 \\quad(11 + 1 = 12)$`}</li>
            <li>{`$1111_2 + 1111_2 = 11110_2 \\quad(15 + 15 = 30)$`}</li>
          </ul>

          <p>{`Subtraction. Borrow groups of 2 instead of groups of 10. (Decimal borrowing is reviewed back in the subtraction algorithm above.)`}</p>
          <ul className="lrn-list">
            <li>{`$1101_2 - 101_2 = 1000_2 \\quad(13 - 5 = 8)$`}</li>
            <li>{`$110_2 - 1_2 = 101_2 \\quad(6 - 1 = 5)$`}</li>
            <li>{`$1000_2 - 1_2 = 111_2 \\quad(8 - 1 = 7)$`}</li>
          </ul>

          <p>{`Multiplication. Stack the partial products: 0, then 1101 shifted one place left, then 0, then 1101 shifted three places left.`}</p>
          <div className="lrn-eq">
            <span>{`$$1101_2 \\cdot 1010_2 = 10000010_2 = 130_{10}$$`}</span>
          </div>
          <p>{`Check in decimal: $13 \\cdot 10 = 130$.`}</p>

          <p>{`Division in base 2 works like base 10, with the carry threshold at 2.`}</p>
          <p>{`$11011_2 = 101_2 \\cdot 101_2 + 10_2$, so the quotient is $101_2$ and the remainder is $10_2$. Check in decimal: $27 = 5 \\cdot 5 + 2$.`}</p>
          <p>{`You can now read, write, add, subtract, multiply, and divide in binary.`}</p>
        </>,

        <>
          <h2>The Commutative and Associative Laws</h2>

          <p>{`Swap the order: $3 + 5 = 5 + 3 = 8$, and $3 \\cdot 5 = 5 \\cdot 3 = 15$. Order does not change the result.`}</p>
          <div className="lrn-eq">
            <span>{`$$a + b = b + a \\qquad a \\cdot b = b \\cdot a$$`}</span>
          </div>

          <p>{`The cleanest proof for multiplication is a rectangle of dots. Three rows of five dots is fifteen. Rotate the rectangle and you see five rows of three still fifteen.`}</p>

          <div className="lrn-graph">
            <CommutativityGridViz />
          </div>

          <p>{`Subtraction and division do not commute:`}</p>
          <ul className="lrn-list">
            <li>{`$5 - 3 = 2$ but $3 - 5 = -2$.`}</li>
            <li>{`$6 \\div 2 = 3$ but $2 \\div 6 = \\frac{1}{3}$.`}</li>
          </ul>
          <p>{`The two inputs play different roles: one is what you start with, the other acts on it. Swapping them changes the situation.`}</p>

          <h3>Associativity</h3>
          <p>{`Regroup the parentheses: $(a + b) + c = a + (b + c)$ and $(a \\cdot b) \\cdot c = a \\cdot (b \\cdot c)$.`}</p>
          <p>{`Concrete: $(2 + 3) + 4 = 9 = 2 + (3 + 4)$, and $(2 \\cdot 3) \\cdot 4 = 24 = 2 \\cdot (3 \\cdot 4)$.`}</p>
          <p>{`Subtraction fails again: $(10 - 3) - 2 = 5$ but $10 - (3 - 2) = 9$.`}</p>

          <h3>Using the laws to pick the easy order</h3>
          <p>{`Commutativity lets you reorder. Associativity lets you regroup. Together they let you pick whichever pair is easy.`}</p>
          <p>{`Example: $8 \\cdot 125 \\cdot 7$. Reorder to $125 \\cdot 8 \\cdot 7$, group as $(125 \\cdot 8) \\cdot 7 = 1000 \\cdot 7 = 7000$.`}</p>

          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Commutative</span>
              <p>{`Swaps order of two operands.`}</p>
              <p>{`$a + b = b + a$`}</p>
              <p>{`Holds for $+$ and $\\cdot$. Fails for $-$ and $\\div$.`}</p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Associative</span>
              <p>{`Changes which pair is computed first.`}</p>
              <p>{`$(a + b) + c = a + (b + c)$`}</p>
              <p>{`Holds for $+$ and $\\cdot$. Fails for $-$ and $\\div$.`}</p>
            </div>
          </div>
        </>,

        <>
          <h2>Parentheses and Order of Operations</h2>

          <p>{`Parentheses force a specific evaluation order. Operations inside parentheses are done first.`}</p>
          <p>{`Without parentheses, multiplication and division come before addition and subtraction. This is a written convention, but it is the convention every reader assumes.`}</p>

          <div className="lrn-callout lrn-warning">
            <span className="lrn-callout-label">Order matters</span>
            <p>{`$2 + 3 \\cdot 4 = 14$ but $(2 + 3) \\cdot 4 = 20$.`}</p>
            <p>{`Parentheses are not decoration. Removing them without checking changes the value.`}</p>
          </div>

          <p>{`The convention exists so that common expressions like $2 + 3 \\cdot 4$ do not need parentheses to be unambiguous.`}</p>
          <p>{`You can add or remove parentheses only when commutativity or associativity permits it.`}</p>

          <h3>Worked example Nested parentheses</h3>
          <p>{`Compute $5 + 2 \\cdot (3 + (4 - 1))$.`}</p>
          <ol className="lrn-list">
            <li>{`Innermost first: $4 - 1 = 3$.`}</li>
            <li>{`Next layer: $3 + 3 = 6$.`}</li>
            <li>{`Multiplication before addition: $2 \\cdot 6 = 12$.`}</li>
            <li>{`Final addition: $5 + 12 = 17$.`}</li>
          </ol>
          <div className="lrn-eq">
            <span>{`$$5 + 2 \\cdot (3 + (4 - 1)) = 17$$`}</span>
          </div>
        </>,

        <>
          <h2>The Distributive Law</h2>

          <p>{`The distributive law connects multiplication and addition. It is the single most important law in algebra.`}</p>
          <p>{`Start concrete: $3 \\cdot (4 + 2) = 3 \\cdot 6 = 18$, and $3 \\cdot 4 + 3 \\cdot 2 = 12 + 6 = 18$. Either way, 18.`}</p>
          <p>{`The same thing works for any three numbers:`}</p>
          <div className="lrn-eq lrn-eq-hero">
            <span>{`$$a \\cdot (b + c) = a \\cdot b + a \\cdot c$$`}</span>
          </div>

          <p>{`Visual: a rectangle of width $b + c$ and height $a$ splits at the cut into two rectangles of areas $ab$ and $ac$. The total area is fixed by the original rectangle; the cut just renames it.`}</p>

          <div className="lrn-graph">
            <DistributiveLawViz />
          </div>

          <p>{`Every time you multiply a multi-digit number, you are silently using this law on each digit.`}</p>

          <h3>Extending to two sums</h3>
          <p>{`Apply the law twice to get the product of two sums:`}</p>
          <div className="lrn-eq">
            <span>{`$$(a + b)(c + d) = ac + ad + bc + bd$$`}</span>
          </div>
          <p>{`Each term in the first sum multiplies each term in the second. A later page uses this pattern to multiply things like $(x + 3)(x + 5)$.`}</p>
        </>,

        <>
          <h2>Letters in Algebra</h2>

          <p>{`Arithmetic computes specific numbers: $3 + 5 = 8$.`}</p>
          <p>{`Algebra uses letters to stand for unknown or arbitrary numbers. One equation with letters covers infinitely many specific cases at once.`}</p>

          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Arithmetic</span>
              <p>{`$3 + 5 = 8$`}</p>
              <p>{`One instance, one answer.`}</p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Algebra</span>
              <p>{`$a + b = b + a$`}</p>
              <p>{`Every instance at once.`}</p>
            </div>
          </div>

          <div className="lrn-definition">
            <span className="lrn-definition-term">Variable</span>
            <div className="lrn-definition-desc">
              <p>{`A letter that stands for a number. The letter $a$ in $a + b = b + a$ can be any real number.`}</p>
            </div>
          </div>

          <p>{`Substitution turns an algebraic expression back into arithmetic. Plug in $a = 5$, $b = 3$ into $a \\cdot (b + a) - b$:`}</p>
          <div className="lrn-eq">
            <span>{`$$5 \\cdot (3 + 5) - 3 = 5 \\cdot 8 - 3 = 40 - 3 = 37$$`}</span>
          </div>
          <p>{`Parentheses are part of the expression. Compute their contents before the multiplication outside.`}</p>
        </>,

        <>
          <h2>Negative Numbers: Addition</h2>

          <p>{`The number line extends both ways. Zero sits in the middle. Positive numbers go right, negative numbers go left.`}</p>

          <div className="lrn-graph">
            <NumberLineNegativesViz />
          </div>

          <p>{`Adding moves right. Subtracting moves left. Adding a negative number is moving left by that amount, which is the same as subtracting.`}</p>

          <div className="lrn-eq">
            <span>{`$$a + (-a) = 0$$`}</span>
          </div>

          <p>{`$-a$ is called the additive inverse of $a$. It sits the same distance from zero as $a$, on the opposite side. Adding the two cancels out.`}</p>

          <h3>Rules for signed addition</h3>
          <div className="lrn-steps">
            <div className="lrn-step">
              <span className="lrn-step-title">Adding a negative</span>
              <p className="lrn-step-content">{`$5 + (-3) = 5 - 3 = 2$. Move 3 left from 5.`}</p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">Two negatives</span>
              <p className="lrn-step-content">{`$(-2) + (-4) = -(2 + 4) = -6$. Both move left, so go further left.`}</p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">Mixed signs</span>
              <p className="lrn-step-content">{`$(-7) + 3 = -(7 - 3) = -4$. Subtract the smaller size from the larger, where size means distance from zero. Keep the sign of the number that is farther from zero.`}</p>
            </div>
          </div>
        </>,

        <>
          <h2>Negative Numbers: Multiplication</h2>

          <p>{`Two sign rules cover every product:`}</p>
          <div className="lrn-eq">
            <span>{`$$(-a) \\cdot b = -(a \\cdot b) \\qquad (-a) \\cdot (-b) = a \\cdot b$$`}</span>
          </div>
          <p>{`Count negative factors. An even count gives a positive product. An odd count gives a negative product.`}</p>

          <h3>Why a negative times a negative is positive</h3>
          <p>{`This rule is not arbitrary. It is forced by the distributive law.`}</p>
          <p>{`Start with the fact that anything times zero is zero:`}</p>
          <div className="lrn-eq">
            <span>{`$$(a + (-a)) \\cdot (b + (-b)) = 0 \\cdot 0 = 0$$`}</span>
          </div>
          <p>{`Expand the left side by the distributive law:`}</p>
          <div className="lrn-eq">
            <span>{`$$ab + a(-b) + (-a)b + (-a)(-b) = 0$$`}</span>
          </div>
          <p>{`Two of those terms are already known: $a(-b) = -(ab)$ and $(-a)b = -(ab)$.`}</p>
          <div className="lrn-eq">
            <span>{`$$ab - ab - ab + (-a)(-b) = 0$$`}</span>
          </div>
          <div className="lrn-eq">
            <span>{`$$-ab + (-a)(-b) = 0 \\implies (-a)(-b) = ab \\quad\\checkmark$$`}</span>
          </div>
          <p>{`The sign rule is the only value of $(-a)(-b)$ that keeps the distributive law consistent.`}</p>

          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Mixed signs</span>
              <p>{`$(-a) \\cdot b = -(ab)$`}</p>
              <p>{`Result is negative.`}</p>
              <p>{`Example: $3 \\cdot (-4) = -12$.`}</p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Same signs</span>
              <p>{`$(-a) \\cdot (-b) = ab$`}</p>
              <p>{`Result is positive.`}</p>
              <p>{`Example: $(-3) \\cdot (-4) = 12$.`}</p>
            </div>
          </div>
        </>
      ]
    },

    practice: [
      {
        q: 'What does the digit 7 mean in the number 7432?',
        a: 'The 7 sits in the thousands place, so it means 7000. Each digit gets multiplied by a power of 10 based on its position. The 7 is at position 3 (counting from 0 on the right), so its value is 7 × 10³ = 7000.'
      },

      {
        q: 'You compute 47 + 53 + 13. Reorder the terms to make mental arithmetic easier. Which law allows the reordering?',
        a: 'Reorder as 47 + 13 + 53 = 60 + 53 = 113. The commutative law (a + b = b + a) lets you swap any two addends. Combining 47 + 13 = 60 first turns the problem into one easy addition. Answer: 113.'
      },

      {
        q: 'Explain step by step why (−3)(−4) = 12, not −12.',
        a: 'Start with (3 + (−3))(4 + (−4)) = 0. Expand using the distributive law: 12 + 3(−4) + (−3)(4) + (−3)(−4) = 0. Substituting 3(−4) = −12 and (−3)(4) = −12 gives 12 − 12 − 12 + (−3)(−4) = 0, so (−3)(−4) = 12. The sign rule is the only value consistent with the distributive law.'
      },

      {
        q: 'What is 1011₂ in decimal?',
        a: '1 × 2³ + 0 × 2² + 1 × 2¹ + 1 × 2⁰ = 8 + 0 + 2 + 1 = 11. Each binary digit is multiplied by the power of 2 matching its position (from 0 on the right), then summed.'
      },

      {
        q: 'Without computing, predict: does (12 − 5) − 3 equal 12 − (5 − 3)? Why?',
        a: '(12 − 5) − 3 = 7 − 3 = 4. But 12 − (5 − 3) = 12 − 2 = 10. Not equal. Subtraction is not associative: regrouping changes how much gets removed from 12.'
      },

      {
        q: 'You buy 5 notebooks at a price of (p + 2) dollars each. Write the total cost two ways and show they are equal.',
        a: 'Way 1: 5(p + 2). Way 2: 5p + 10. By the distributive law, 5(p + 2) = 5p + 10. Both expressions name the same total cost. You use this any time you multiply a single factor by a sum.'
      },

      {
        q: 'In the addition 47 + 68, you write 5 in the ones column and carry 1. Explain in your own words why this step is correct.',
        a: '7 + 8 = 15. The ones column holds a single digit. 15 means 1 ten and 5 ones, so the 5 stays in the ones column and the 1 ten moves up to the tens column. That regrouping is exactly what positional notation says: ten ones become one ten.'
      },

      {
        q: 'Verify: is 8 × 7 the same as 7 × 8? What principle does this illustrate?',
        a: '8 × 7 = 56 and 7 × 8 = 56. Equal. This is the commutative law for multiplication: a · b = b · a. A grid of 8 rows × 7 columns has the same dot count as a grid of 7 rows × 8 columns just rotated.'
      },

      {
        q: 'You have weights of 1g, 2g, and 4g. Can you measure exactly 6 grams? Write 6 in binary to justify your answer.',
        a: '6 = 4 + 2 = 1 × 2² + 1 × 2¹ + 0 × 2⁰ = 110₂. The bits say which weights to use. Place the 4g and 2g weights on the pan; they sum to 6g. The 1g weight is unused (its bit is 0).'
      },

      {
        q: 'Why can the decimal positional system represent any whole number using only 10 symbols?',
        a: 'Each position multiplies a digit (0–9) by a power of 10. To represent a larger number, add another position on the left. There is no upper limit on positions, so there is no upper limit on the numbers you can write.'
      },

      {
        q: 'Divide 37 by 5 and state the result in the form dividend = divisor × quotient + remainder.',
        a: '37 = 5 × 7 + 2. Quotient is 7, remainder is 2. The remainder must be less than the divisor (2 < 5 ✓).'
      },

      {
        q: 'Predict the sign of (−2) × (−3) × (−1) before computing.',
        a: 'Three negative factors → negative result. Check: (−2)(−3) = 6, then 6 × (−1) = −6. An odd number of negatives flips the sign once net.'
      },

      {
        q: 'The sum of three consecutive numbers starting from n is n + (n+1) + (n+2). Simplify.',
        a: 'n + (n+1) + (n+2) = 3n + 3 = 3(n + 1). The sum of three consecutive whole numbers is always three times the middle one. One algebraic expression covers every starting point n.'
      },

      {
        q: 'In binary, 1 + 1 = 10₂. Explain why.',
        a: 'In decimal, 1 + 1 = 2. Binary has no symbol for 2. The ones column is at its maximum (digit 1), so the sum carries 1 into the next column. 10₂ means one two and zero ones, which is the value 2.'
      },

      {
        q: 'A student says (−5) + (−3) = −2. Identify the error and give the correct answer.',
        a: 'The student subtracted instead of adding. With both numbers negative, add the sizes (distances from zero) and keep the negative sign. 5 + 3 = 8, so (−5) + (−3) = −8.'
      },

      {
        q: 'Why does the associative law matter in practice? Give a real calculation where it saves work.',
        a: 'Example: 37 + 63 + 48. Grouping as (37 + 63) + 48 = 100 + 48 = 148 is easier than 37 + (63 + 48) = 37 + 111 = 148. Both routes give the same answer because addition is associative. You pick the route that is easier to compute.'
      },

      {
        q: 'Using only 8s and plus signs, write an expression equal to 1000.',
        a: '8 + 8 + 8 + 88 + 888 = 1000. Check: 24 + 88 = 112; 112 + 888 = 1000. The 888 covers most of the value; the smaller pieces close the gap.'
      },

      {
        q: 'You know that 142857 × 7 = 999999. Use this to find the remainder when 1000000 is divided by 7.',
        a: '1000000 = 999999 + 1 = 7 × 142857 + 1. Remainder is 1.'
      },

      {
        q: 'Compute (−4) × (−7) and explain the sign.',
        a: '(−4) × (−7) = 28. Two negative factors multiply to a positive. By the rule (−a)(−b) = ab, the sign cancels. The rule itself comes from the distributive law applied to (a + (−a))(b + (−b)) = 0.'
      },

      {
        q: 'To compute 6 × 4 × 5, which laws do you use and how?',
        a: 'Commutativity reorders to 6 × 5 × 4. Associativity groups as (6 × 5) × 4 = 30 × 4 = 120. Both laws together let you pick the pair that is easiest to multiply first.'
      },

      {
        q: 'Write 19 in binary by pulling off the largest power of 2 at each step.',
        a: '19 = 16 + 2 + 1 = 1 × 2⁴ + 0 × 2³ + 0 × 2² + 1 × 2¹ + 1 × 2⁰ = 10011₂. Largest power of 2 not over 19 is 16, leaving 3; largest not over 3 is 2, leaving 1; then 1.'
      },

      {
        q: 'A student claims 3(x + 4) = 3x + 4. Find the error and correct it.',
        a: 'The student multiplied 3 only by x. The distributive law says every term inside the parentheses gets the factor. Correct: 3(x + 4) = 3x + 12.'
      },

      {
        q: 'Why is the algebraic statement a + b = b + a more powerful than showing 2 + 3 = 3 + 2 and 7 + 1 = 1 + 7?',
        a: 'The algebraic statement covers every pair of numbers at once. Specific cases like 2 + 3 = 3 + 2 only confirm those numbers. Infinitely many cases stay unproven. One proof with letters settles all of them in a single step. That is the defining gain algebra offers over arithmetic.'
      }
    ],

    reference: {
      category: 'Quick Reference',
      title: 'Arithmetic Foundations',
      sections: [
        <>
          <h2>Core Laws</h2>

          <table>
            <thead>
              <tr>
                <th>Law</th>
                <th>Formula</th>
                <th>Use</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Commutative (addition)</td>
                <td>{`$a + b = b + a$`}</td>
                <td>Reorder addends for an easier sum.</td>
              </tr>
              <tr>
                <td>Commutative (multiplication)</td>
                <td>{`$a \\cdot b = b \\cdot a$`}</td>
                <td>Reorder factors; pick the easier order.</td>
              </tr>
              <tr>
                <td>Associative (addition)</td>
                <td>{`$(a+b)+c = a+(b+c)$`}</td>
                <td>Regroup any three addends; pick the easier pairing.</td>
              </tr>
              <tr>
                <td>Associative (multiplication)</td>
                <td>{`$(a \\cdot b) \\cdot c = a \\cdot (b \\cdot c)$`}</td>
                <td>Regroup three factors; pick the easier pairing.</td>
              </tr>
              <tr>
                <td>Distributive</td>
                <td>{`$a(b+c) = ab + ac$`}</td>
                <td>Expand a product or factor a sum. The hinge of algebra.</td>
              </tr>
              <tr>
                <td>Distributive (extended)</td>
                <td>{`$(a+b)(c+d) = ac+ad+bc+bd$`}</td>
                <td>Multiply two sums; the basis of binomial expansion.</td>
              </tr>
            </tbody>
          </table>

          <h2>Sign Rules for Multiplication</h2>
          <div className="lrn-eq lrn-eq-hero">
            <span>{`$$(-a) \\cdot b = -(ab) \\qquad (-a)(-b) = ab$$`}</span>
          </div>
          <p>{`Count negative factors. Even count → positive result. Odd count → negative result.`}</p>

          <h2>Division Algorithm</h2>
          <div className="lrn-eq lrn-eq-hero">
            <span>{`$$\\text{dividend} = \\text{divisor} \\times \\text{quotient} + \\text{remainder},\\quad 0 \\le r < \\text{divisor}$$`}</span>
          </div>

          <h2>Positional Notation</h2>
          <table>
            <thead>
              <tr>
                <th>System</th>
                <th>Base</th>
                <th>Digits</th>
                <th>Place value</th>
                <th>Use</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Decimal</td>
                <td>10</td>
                <td>0–9</td>
                <td>{`$d \\times 10^n$`}</td>
                <td>Everyday arithmetic.</td>
              </tr>
              <tr>
                <td>Binary</td>
                <td>2</td>
                <td>0, 1</td>
                <td>{`$d \\times 2^n$`}</td>
                <td>Computer systems; problems with two-state choices.</td>
              </tr>
            </tbody>
          </table>

          <div className="lrn-eq">
            <span>{`$$1 \\cdot 2^3 + 0 \\cdot 2^2 + 1 \\cdot 2^1 + 1 \\cdot 2^0 = 11_{10}$$`}</span>
          </div>

          <h2>Additive Inverse</h2>
          <div className="lrn-eq">
            <span>{`$$a + (-a) = 0$$`}</span>
          </div>

          <h2>Key Problems</h2>
          <table>
            <thead>
              <tr>
                <th>Problem</th>
                <th>Insight</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{`$8 + 8 + 8 + 88 + 888 = 1000$`}</td>
                <td>Column-by-column carry logic constrains the count of each term.</td>
              </tr>
              <tr>
                <td>{`$\\overline{AAA} + \\overline{BBB} = \\overline{AAAC}$`}</td>
                <td>{`$A = 1$ (carry), $B = 9$ (forces every column to carry), $C = 0$.`}</td>
              </tr>
              <tr>
                <td>{`$\\overline{ABC} \\cdot 1001 = \\overline{ABCABC}$`}</td>
                <td>{`$1001 = 1000 + 1$ shifts and copies.`}</td>
              </tr>
              <tr>
                <td>100 ones ÷ 1111111</td>
                <td>{`$100 = 7 \\cdot 14 + 2$: 14 full blocks of seven ones, remainder is 11.`}</td>
              </tr>
              <tr>
                <td>{`$10x + 1 = 3(100000 + x)$`}</td>
                <td>{`Solve to get $x = 42857$, so the mystery number is 142857.`}</td>
              </tr>
            </tbody>
          </table>

          <h2>Solving a Simple Equation</h2>
          <p>{`Do the same thing to both sides until the unknown stands alone. Add or subtract the same number; multiply or divide both sides by the same nonzero number. Gather the unknown on one side first.`}</p>

          <h2>Decimal Place Value</h2>
          <p>{`Places continue past the dot: tenths, hundredths, thousandths. So $0.25 = \\tfrac{2}{10} + \\tfrac{5}{100} = \\tfrac{25}{100}$.`}</p>
        </>
      ]
    },

    customCss:
      '.MafsView { --mafs-bg: transparent; --mafs-fg: var(--ink-default); --mafs-line-color: var(--ink-hairline); }'
  }

  return config
}

export default function ArithmeticFoundations() {
  const config = useConfig()
  return <LearningTemplate config={config} />
}

export function useArithmeticFoundationsConfig() {
  return useConfig()
}
