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
      groupTitle: 'Foundations',
      category: 'Module 1',
      title: 'Arithmetic Foundations',
      subtitle:
        'Place value, the four operations, the laws beneath them, negative numbers, and binary.',
      sections: [
        <>
          <div className="lrn-header">
            <div>
              <h1>Arithmetic Foundations</h1>
              <p>{`Algebra is arithmetic with one stronger demand.`}</p>
              <p>{`Every claim has to hold for every number, not just the one in front of you.`}</p>
              <p>{`To make that work you need the rules under the four operations. This module pulls them out of plain counting.`}</p>
            </div>
          </div>

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
          <p>{`That observation is the seed of every law in this module.`}</p>
        </>,

        <>
          <h2>The Decimal Number System</h2>

          <p>{`A digit's value depends on where it sits.`}</p>
          <p>{`In 352, the 3 stands for three hundreds, the 5 for five tens, the 2 for two ones.`}</p>
          <p>{`Each step left multiplies the value by ten.`}</p>

          <div className="lrn-eq">
            <span>{`$$\\text{value} = \\text{digit} \\times 10^{\\text{position}}$$`}</span>
          </div>

          <p>{`We have ten symbols: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9.`}</p>
          <p>{`Counting past 9 needs a new place. So 9 + 1 becomes 10, meaning one ten and zero ones.`}</p>
          <p>{`Every later place repeats the move. Ten of anything regroups into one of the next place up.`}</p>

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

          <h3>Problem 1 Sums of Eights</h3>
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

          <h3>{`Problem 2 Cryptarithm $\\overline{AAA} + \\overline{BBB} = \\overline{AAAC}$`}</h3>
          <p>{`Each capital letter stands for a single digit. Find $A$, $B$, $C$.`}</p>
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

          <p>{`The four partial products $10 \\cdot 30$, $10 \\cdot 8$, $7 \\cdot 30$, $7 \\cdot 8$ are exactly the columns long multiplication sums.`}</p>

          <h3>Problem 3 Multiply by 1001 in one step</h3>
          <p>{`Since $1001 = 1000 + 1$, any three-digit number $\\overline{ABC}$ gives:`}</p>
          <div className="lrn-eq">
            <span>{`$$\\overline{ABC} \\cdot 1001 = \\overline{ABC} \\cdot 1000 + \\overline{ABC} = \\overline{ABCABC}$$`}</span>
          </div>
          <p>{`Multiplying by 1000 shifts the digits three places left. Adding the original fills the last three places. Example: $715 \\cdot 1001 = 715715$.`}</p>

          <h3>{`Problem 4 Compute $101010101 \\cdot 57$`}</h3>
          <p>{`Break the first factor by place: $101010101 = 1 + 10^2 + 10^4 + 10^6 + 10^8$.`}</p>
          <p>{`Multiply 57 by each power and add: $57,\\ 5700,\\ 570000,\\ 57000000,\\ 5700000000$.`}</p>
          <div className="lrn-eq">
            <span>{`$$101010101 \\cdot 57 = 5757575757$$`}</span>
          </div>
          <p>{`The pair 57 repeats five times because the powers of 100 line up cleanly.`}</p>

          <h3>{`Problem 5 Compute $10001 \\cdot 1020304050$`}</h3>
          <p>{`$10001 = 10000 + 1$, so the product is $1020304050 \\cdot 10000 + 1020304050$.`}</p>
          <div className="lrn-eq">
            <span>{`$$10203040500000 + 1020304050 = 10204060804050$$`}</span>
          </div>
          <p>{`The two terms overlap in the middle. Each overlapping column adds the digit from the shifted copy to the digit from the original copy.`}</p>

          <h3>{`Problem 6 Compute $11111 \\cdot 1111$`}</h3>
          <p>{`Each digit of 1111 means "add a shifted copy of 11111." Stack the four copies:`}</p>
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
          <p>{`Dividing by 7 leaves only seven possible remainders: 0, 1, 2, 3, 4, 5, 6. Seven options force any long sequence of remainders to eventually repeat.`}</p>

          <h3>Problem 7 The mystery six-digit number</h3>
          <p>{`A six-digit number starts with 1. Moving the leading 1 to the end makes the number exactly three times larger. Find it.`}</p>
          <p>{`Let the number be $\\overline{1ABCDE}$ and write $x = \\overline{ABCDE}$, so $x$ is the five-digit tail.`}</p>
          <p>{`Original: $100000 + x$. After moving the 1: $10x + 1$.`}</p>
          <p>{`The condition is $10x + 1 = 3(100000 + x)$.`}</p>
          <p>{`Expand: $10x + 1 = 300000 + 3x$, so $7x = 299999$, giving $x = 42857$.`}</p>
          <div className="lrn-eq">
            <span>{`$$142857 \\cdot 3 = 428571 \\quad\\checkmark$$`}</span>
          </div>

          <h3>{`Problem 8 Compute $123123123 \\div 123$`}</h3>
          <p>{`Notice $123123123 = 123 \\cdot (1 + 10^3 + 10^6) = 123 \\cdot 1001001$.`}</p>
          <p>{`So the quotient is $1001001$ with remainder 0.`}</p>

          <h3>Problem 9 Remainder of 100 ones divided by 1111111</h3>
          <p>{`Let $N$ be the number made of 100 ones. The divisor is the number made of 7 ones.`}</p>
          <p>{`Group the 100 ones into blocks of 7 from the right. Since $100 = 7 \\cdot 14 + 2$, you get 14 full blocks and 2 leftover ones at the top.`}</p>
          <p>{`Each full block is $1111111$ sitting in some position, so it contributes exactly to the quotient and leaves no remainder.`}</p>
          <p>{`The 2 leftover ones form the number 11, which is smaller than 1111111.`}</p>
          <p>{`Remainder is 11.`}</p>

          <h3>Problem 10 Compute $10^{20} \\div 7$</h3>
          <p>{`Look at the remainders of $10, 10^2, 10^3, \\ldots$ when divided by 7. They cycle:`}</p>
          <div className="lrn-eq">
            <span>{`$$10^1 \\to 3,\\ 10^2 \\to 2,\\ 10^3 \\to 6,\\ 10^4 \\to 4,\\ 10^5 \\to 5,\\ 10^6 \\to 1$$`}</span>
          </div>
          <p>{`After six powers the cycle restarts. So $10^{20}$ has the same remainder as $10^{20 \\bmod 6} = 10^2$, which is 2.`}</p>
          <p>{`The quotient is $\\frac{10^{20} - 2}{7} = 14285714285714285714$.`}</p>
          <p>{`Notice the digit block 142857 repeating. The same block appeared in Problem 7. It is not coincidence it is the cycling remainders.`}</p>

          <h3>Periodicity of remainders</h3>
          <p>{`Divide a long string of zeros by 7 by hand. The remainders run 1, 3, 2, 6, 4, 5 and then start over.`}</p>
          <p>{`Each remainder forces the next digit of the quotient. The quotient digits cycle through 1, 4, 2, 8, 5, 7.`}</p>
          <p>{`This is the source of the famous six-digit cyclic number.`}</p>

          <h3>{`Problem 12 Dividing $k \\cdot 10^{20}$ by 7 for $k = 1, 2, \\ldots, 6$`}</h3>
          <p>{`Use the rule $10^{20} \\equiv 2 \\pmod{7}$ from Problem 10.`}</p>
          <p>{`So $k \\cdot 10^{20} \\bmod 7 = 2k \\bmod 7$:`}</p>
          <div className="lrn-eq">
            <span>{`$$k=1\\to 2,\\ k=2\\to 4,\\ k=3\\to 6,\\ k=4\\to 1,\\ k=5\\to 3,\\ k=6\\to 5$$`}</span>
          </div>
          <p>{`Every non-zero remainder mod 7 appears exactly once. The quotients are shifted versions of the same six-digit cyclic block.`}</p>

          <h3>Problem 13 Multiply 142857 by 1, 2, 3, 4, 5, 6, 7</h3>
          <div className="lrn-eq">
            <span>{`$$142857 \\cdot 1 = 142857$$`}</span>
          </div>
          <div className="lrn-eq">
            <span>{`$$142857 \\cdot 2 = 285714$$`}</span>
          </div>
          <div className="lrn-eq">
            <span>{`$$142857 \\cdot 3 = 428571$$`}</span>
          </div>
          <div className="lrn-eq">
            <span>{`$$142857 \\cdot 4 = 571428$$`}</span>
          </div>
          <div className="lrn-eq">
            <span>{`$$142857 \\cdot 5 = 714285$$`}</span>
          </div>
          <div className="lrn-eq">
            <span>{`$$142857 \\cdot 6 = 857142$$`}</span>
          </div>
          <div className="lrn-eq">
            <span>{`$$142857 \\cdot 7 = 999999$$`}</span>
          </div>
          <p>{`Each product from 1 to 6 is the same six digits, rotated. Multiplying by 7 collapses everything to nines.`}</p>
          <p>{`Reason: $142857 = \\frac{999999}{7}$. The remainders that cycle when you divide $10^n$ by 7 map directly onto digit rotations.`}</p>

          <h3>Problem 14 Other dividends to try</h3>
          <p>{`The trick is not limited to 7. Pick a divisor $d$ for which 10 has small order modulo $d$.`}</p>
          <p>{`For $d = 13$: the cycle has length 6, and the cyclic number is $\\frac{999999}{13} = 76923$.`}</p>
          <p>{`Multiply 076923 by 1, 3, 4, 9, 10, 12 the products are rotations of the same six digits.`}</p>
          <p>{`For $d = 17$ the cycle length is 16 and you get a 16-digit cyclic number. Worth a session with a long pencil.`}</p>
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

          <h3>Problem 15 The generating rule</h3>
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
              <p>{`Ten symbols (0–9). Numbers are compact.`}</p>
              <p>{`$14_{10}$ has 2 digits.`}</p>
              <p>{`Convenient for hands with ten fingers.`}</p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Binary</span>
              <p>{`Two symbols (0, 1). Numbers are long.`}</p>
              <p>{`$14_{10} = 1110_2$ has 4 digits.`}</p>
              <p>{`Convenient for circuits with two states.`}</p>
            </div>
          </div>

          <h3>Conversions</h3>
          <p>{`Problem 17 What is 14 in binary, and what does $10000_2$ mean in decimal?`}</p>
          <p>{`$14 = 8 + 4 + 2 = 1 \\cdot 2^3 + 1 \\cdot 2^2 + 1 \\cdot 2^1 + 0 \\cdot 2^0 = 1110_2$.`}</p>
          <p>{`$10000_2 = 1 \\cdot 2^4 = 16$.`}</p>

          <p>{`Problem 18 Write 45 in binary.`}</p>
          <p>{`Pull off the largest power of 2 at each step: $45 - 32 = 13$, $13 - 8 = 5$, $5 - 4 = 1$, $1 - 1 = 0$.`}</p>
          <p>{`Powers used: $2^5, 2^3, 2^2, 2^0$.`}</p>
          <div className="lrn-eq">
            <span>{`$$45_{10} = 101101_2$$`}</span>
          </div>

          <p>{`Problem 19 Convert $10101101_2$ to decimal.`}</p>
          <p>{`$128 + 0 + 32 + 0 + 8 + 4 + 0 + 1 = 173$.`}</p>

          <h3>Binary arithmetic</h3>
          <p>{`The algorithms are the decimal ones with the carry threshold dropped from 10 to 2.`}</p>

          <p>{`Problem 20 Addition.`}</p>
          <ul className="lrn-list">
            <li>{`$1010_2 + 101_2 = 1111_2 \\quad(10 + 5 = 15)$`}</li>
            <li>{`$1111_2 + 1_2 = 10000_2 \\quad(15 + 1 = 16)$`}</li>
            <li>{`$1011_2 + 1_2 = 1100_2 \\quad(11 + 1 = 12)$`}</li>
            <li>{`$1111_2 + 1111_2 = 11110_2 \\quad(15 + 15 = 30)$`}</li>
          </ul>

          <p>{`Problem 21 Subtraction. Borrow groups of 2 instead of groups of 10.`}</p>
          <ul className="lrn-list">
            <li>{`$1101_2 - 101_2 = 1000_2 \\quad(13 - 5 = 8)$`}</li>
            <li>{`$110_2 - 1_2 = 101_2 \\quad(6 - 1 = 5)$`}</li>
            <li>{`$1000_2 - 1_2 = 111_2 \\quad(8 - 1 = 7)$`}</li>
          </ul>

          <p>{`Problem 22 Multiplication $1101_2 \\cdot 1010_2$.`}</p>
          <p>{`Stack the partial products: 0, then 1101 shifted one place left, then 0, then 1101 shifted three places left.`}</p>
          <div className="lrn-eq">
            <span>{`$$1101_2 \\cdot 1010_2 = 10000010_2 = 130_{10}$$`}</span>
          </div>
          <p>{`Check in decimal: $13 \\cdot 10 = 130$.`}</p>

          <p>{`Problem 23 Division $11011_2 \\div 101_2$.`}</p>
          <p>{`Long division in base 2: $11011_2 = 101_2 \\cdot 101_2 + 10_2$, so quotient $101_2$, remainder $10_2$ (in decimal, $27 = 5 \\cdot 5 + 2$).`}</p>

          <h3>{`Problem 24 $\\frac{1}{3}$ in binary`}</h3>
          <p>{`In decimal, $\\frac{1}{3} = 0.333\\ldots$ never ends, because 3 is not a power of 10.`}</p>
          <p>{`In binary the rule is the same with 2 instead of 10.`}</p>
          <p>{`A fraction terminates only when the denominator is a power of 2.`}</p>
          <p>{`Since 3 is not, $\\frac{1}{3}$ repeats in binary too:`}</p>
          <div className="lrn-eq">
            <span>{`$$\\frac{1}{3} = 0.0101\\,0101\\,0101\\ldots_2$$`}</span>
          </div>
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
          <div className="lrn-eq lrn-eq-hero">
            <span>{`$$a \\cdot (b + c) = a \\cdot b + a \\cdot c$$`}</span>
          </div>

          <p>{`Concrete: $3 \\cdot (4 + 2) = 3 \\cdot 6 = 18$, and $3 \\cdot 4 + 3 \\cdot 2 = 12 + 6 = 18$. Either way, 18.`}</p>

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
          <p>{`Each term in the first sum multiplies each term in the second. You will use this pattern constantly when expanding $(x + p)(x + q)$ in algebra.`}</p>

          <h3>Worked binomial expansion</h3>
          <p>{`Expand $(x + 3)(x + 5)$.`}</p>
          <div className="lrn-eq">
            <span>{`$$(x + 3)(x + 5) = x \\cdot x + x \\cdot 5 + 3 \\cdot x + 3 \\cdot 5 = x^2 + 8x + 15$$`}</span>
          </div>
          <p>{`Try the same pattern on $(x + 4)(x + 6)$ before reading on. Answer: $x^2 + 10x + 24$.`}</p>
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
              <p className="lrn-step-content">{`$(-7) + 3 = -(7 - 3) = -4$. Subtract the smaller magnitude from the larger; keep the sign of the larger.`}</p>
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
        q: 'Explain from first principles why (−3)(−4) = 12, not −12.',
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
        a: 'The student subtracted instead of adding. With both numbers negative, add the magnitudes and keep the negative sign. |−5| + |−3| = 8, so (−5) + (−3) = −8.'
      },

      {
        q: 'Why does the associative law matter in practice? Give a real calculation where it saves work.',
        a: 'Example: 37 + 63 + 48. Grouping as (37 + 63) + 48 = 100 + 48 = 148 is easier than 37 + (63 + 48) = 37 + 111 = 148. Both routes give the same answer because addition is associative so you pick the route that is easier to compute.'
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
        q: 'Predict: will 1/5 have a terminating or repeating binary expansion?',
        a: 'Repeating. A fraction terminates in binary only when its denominator is a power of 2. Since 5 is not, 1/5 = 0.001100110011…₂ the pattern 0011 repeats forever.'
      },

      {
        q: 'A student claims 3(x + 4) = 3x + 4. Find the error and correct it.',
        a: 'The student multiplied 3 only by x. The distributive law says every term inside the parentheses gets the factor. Correct: 3(x + 4) = 3x + 12.'
      },

      {
        q: 'Why is the algebraic statement a + b = b + a more powerful than showing 2 + 3 = 3 + 2 and 7 + 1 = 1 + 7?',
        a: 'The algebraic statement covers every pair of numbers at once. Specific cases like 2 + 3 = 3 + 2 only confirm those numbers infinitely many cases stay unproven. One proof with letters settles all of them in a single step. That is the defining gain algebra offers over arithmetic.'
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
                <td>{`$10^n \\bmod 7$ cycles with period 6`}</td>
                <td>Source of the cyclic number 142857.</td>
              </tr>
              <tr>
                <td>{`$142857 \\cdot k$ for $k=1\\ldots 6$`}</td>
                <td>{`Cyclic rotations of 142857; $\\cdot 7 = 999999$.`}</td>
              </tr>
            </tbody>
          </table>
        </>
      ]
    },

    customCss:
      '.MafsView { --mafs-bg: transparent; --mafs-fg: rgba(240,240,250,1); --mafs-line-color: rgba(240,240,250,0.15); }'
  }

  return config
}

export default function ArithmeticFoundations() {
  const config = useConfig()
  return <LearningTemplate config={config} />
}
