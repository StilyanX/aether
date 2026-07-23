import 'katex/dist/katex.min.css'
import { LearningTemplate } from '../../../../components/learning/learning-template'

import {
  DirectProportionViz,
  FractionNumberLineViz,
  InverseProportionViz
} from '../../../../components/viz'

function useConfig() {
  const config = {
    cssPrefix: 'fra',
    documentTitle: 'Fractions, Ratios and Proportions AETHER',
    learning: {
      groupTitle: 'Number and Algebra Foundations',
      category: 'Module 1',
      title: 'Fractions, Ratios and Proportions',
      subtitle:
        'Equality, comparison, powers, ratios, conversion, percent, and proportional reasoning.',
      sections: [
        <>
          <h2>What a Fraction Is</h2>

          <p>
            A fraction names part of a whole. Cut something into equal parts and take some of them.
            The bottom number, the denominator, says how many equal parts the whole is cut into. The
            top number, the numerator, says how many of those parts you take.
          </p>

          <p>
            So {`$\\tfrac{3}{4}$`} means 3 of 4 equal parts. On the number line, mark off the space
            between 0 and 1 in four equal steps; {`$\\tfrac{3}{4}$`} sits at the third step.
          </p>

          <h2>Fraction Equality</h2>

          <p>Two fractions are equal when they point to the same value.</p>

          <h3>Simplifying</h3>

          <p>
            To simplify a fraction means to write it with the smallest whole numbers that name the
            same value. The fastest tool is the equivalent-fractions rule.
          </p>

          <p>
            Multiply or divide the top and the bottom by the same nonzero number, and the value does
            not change. This works because doing the same thing to top and bottom is multiplying by
            1 in disguise. A fraction with equal top and bottom is one whole, so{' '}
            {`$\\tfrac{3}{3} = 1$`}, and multiplying by 1 changes nothing.
          </p>

          <p>
            To reduce a fraction, divide top and bottom by any number that divides both, and repeat
            until nothing divides both. Take {`$\\tfrac{12}{18}$`}. Both divide by 2:{' '}
            {`$\\tfrac{12}{18} = \\tfrac{6}{9}$`}. Both divide by 3:{' '}
            {`$\\tfrac{6}{9} = \\tfrac{2}{3}$`}. Nothing divides both 2 and 3, so{' '}
            {`$\\tfrac{2}{3}$`} is fully reduced.
          </p>

          <div className="lrn-eq lrn-eq-hero">{`$$\\frac{9}{15} = \\frac{3 \\cdot 3}{3 \\cdot 5} = \\frac{3}{5}$$`}</div>

          <h3>Cross-multiplication</h3>

          <p>
            When two fractions do not look alike, check them by cross-multiplying. First a small
            case: is {`$\\tfrac{2}{4} = \\tfrac{1}{2}$`}? Multiply across: {`$2 \\cdot 2 = 4$`} and{' '}
            {`$4 \\cdot 1 = 4$`}. The two products match, so the fractions are equal.
          </p>

          <p>
            The rule in general. Two fractions {`$\\tfrac{a}{b}$`} and {`$\\tfrac{c}{d}$`} are equal
            exactly when:
          </p>

          <div className="lrn-eq">{`$$\\frac{a}{b} = \\frac{c}{d} \\iff ad = bc$$`}</div>

          <p>
            Cross-multiplication settles cases where reducing is hard. Are {`$\\tfrac{6}{9}$`} and{' '}
            {`$\\tfrac{8}{12}$`} equal? Cross-multiply: {`$6 \\cdot 12 = 72$`} and{' '}
            {`$9 \\cdot 8 = 72$`}. Same product, so they are equal. Both reduce to{' '}
            {`$\\tfrac{2}{3}$`}.
          </p>
        </>,

        <>
          <h2>Comparing Fractions</h2>

          <p>
            Which is bigger, {`$\\tfrac{1}{3}$`} or {`$\\tfrac{2}{7}$`}?
          </p>

          <h3>Common denominator</h3>

          <p>
            Rewrite both fractions over the same bottom. The larger numerator wins. The common
            denominator of 3 and 7 is 21:
          </p>

          <div className="lrn-eq">{`$$\\tfrac{1}{3} = \\tfrac{7}{21}, \\quad \\tfrac{2}{7} = \\tfrac{6}{21}, \\quad \\text{so } \\tfrac{1}{3} > \\tfrac{2}{7}.$$`}</div>

          <h3>Common numerator</h3>

          <p>
            Rewrite both fractions to share the same top. The smaller bottom wins, because the same
            number of pieces is split fewer ways. Multiply {`$\\tfrac{1}{3}$`} by{' '}
            {`$\\tfrac{2}{2}$`} to get {`$\\tfrac{2}{6}$`}. Both fractions now have numerator 2, and{' '}
            6 {`$<$`} 7, so {`$\\tfrac{2}{6} > \\tfrac{2}{7}$`}.
          </p>

          <p>
            The real-life version: one bottle for three people, or two bottles for seven? One bottle
            for three is the same as two bottles for six. Six people get more per bottle than seven
            do, so one-third beats two-sevenths.
          </p>

          <div className="lrn-graph">
            <FractionNumberLineViz />
          </div>

          <h3>Compare distance from 1</h3>

          <p>
            Sometimes both fractions sit just below 1 and the first two methods drown in big
            numbers. Subtract each from 1 and compare the gaps. Which is bigger,{' '}
            {`$\\tfrac{10001}{10002}$`} or {`$\\tfrac{100001}{100002}$`}?
          </p>

          <div className="lrn-eq">{`$$1 - \\tfrac{10001}{10002} = \\tfrac{1}{10002}, \\quad 1 - \\tfrac{100001}{100002} = \\tfrac{1}{100002}.$$`}</div>

          <p>
            The second gap is smaller, so the second fraction is closer to 1, so it is the larger.
            Same trick decides {`$\\tfrac{12345}{54321}$`} vs {`$\\tfrac{12346}{54322}$`}: compare
            how far each is from 1, then pick.
          </p>
        </>,

        <>
          <h2>Adding Fractions</h2>

          <p>
            You cannot add fractions by adding the numerators and the denominators. The combination{' '}
            {`$\\tfrac{a+c}{b+d}$`} is called the mediant, and it is never the sum:
          </p>

          <div className="lrn-eq">{`$$\\frac{2}{3} + \\frac{5}{7} \\neq \\frac{2+5}{3+7} = \\frac{7}{10}.$$`}</div>

          <p>
            The mediant lands between the two fractions: {`$\\tfrac{2}{3} = 0.666\\ldots$`},{' '}
            {`$\\tfrac{7}{10} = 0.7$`}, {`$\\tfrac{5}{7} = 0.714\\ldots$`}. It answers a merging
            question, not an addition question. Team A: 2 bottles for 3 people. Team B: 5 bottles
            for 7 people. Combined: 7 bottles for 10 people. The merged rate sits between the team
            rates. That is the mediant.
          </p>

          <p>To add, find a common denominator first. With 21:</p>

          <div className="lrn-eq">{`$$\\frac{2}{3} + \\frac{5}{7} = \\frac{14}{21} + \\frac{15}{21} = \\frac{29}{21}.$$`}</div>

          <p>The general rule:</p>

          <div className="lrn-eq lrn-eq-hero">{`$$\\frac{a}{b} + \\frac{c}{d} = \\frac{ad + bc}{bd}.$$`}</div>

          <p>
            Notice {`$\\tfrac{29}{21}$`} is larger than either {`$\\tfrac{2}{3}$`} or{' '}
            {`$\\tfrac{5}{7}$`}. A sum should be. The mediant {`$\\tfrac{7}{10}$`} lies between the
            two, so it is not larger than both. That is one quick sanity check that it cannot be the
            answer.
          </p>
        </>,

        <>
          <h2>Multiplying and Dividing Fractions</h2>

          <h3>Multiplying</h3>

          <p>To multiply two fractions, multiply the tops and multiply the bottoms:</p>

          <div className="lrn-eq lrn-eq-hero">{`$$\\frac{a}{b} \\cdot \\frac{c}{d} = \\frac{ac}{bd}.$$`}</div>

          <p>
            For example,{' '}
            {`$\\tfrac{2}{3} \\cdot \\tfrac{4}{5} = \\tfrac{2 \\cdot 4}{3 \\cdot 5} = \\tfrac{8}{15}$`}
            .
          </p>

          <p>
            Why this works: "{`$\\tfrac{1}{2}$`} of {`$\\tfrac{4}{5}$`}" means cut{' '}
            {`$\\tfrac{4}{5}$`}
            in half. Cutting each fifth in half makes tenths, and you keep 4 of them, giving{' '}
            {`$\\tfrac{4}{10} = \\tfrac{2}{5}$`}. The rule agrees:{' '}
            {`$\\tfrac{1}{2} \\cdot \\tfrac{4}{5} = \\tfrac{4}{10}$`}. Taking a fraction "of"
            something is multiplication.
          </p>

          <h3>The reciprocal</h3>

          <p>
            The reciprocal of a fraction flips it: the reciprocal of {`$\\tfrac{2}{3}$`} is{' '}
            {`$\\tfrac{3}{2}$`}. A fraction times its reciprocal is 1, since the tops and bottoms
            swap and cancel: {`$\\tfrac{2}{3} \\cdot \\tfrac{3}{2} = \\tfrac{6}{6} = 1$`}.
          </p>

          <h3>Dividing</h3>

          <p>To divide by a fraction, multiply by its reciprocal:</p>

          <div className="lrn-eq lrn-eq-hero">{`$$\\frac{a}{b} \\div \\frac{c}{d} = \\frac{a}{b} \\cdot \\frac{d}{c}.$$`}</div>

          <p>
            Here is why flipping works. Dividing asks "how many of the second fit into the first?"
            Dividing by {`$\\tfrac{c}{d}$`} is the same as multiplying by the number that undoes it,
            and the number that undoes {`$\\tfrac{c}{d}$`} is its reciprocal {`$\\tfrac{d}{c}$`},
            since the two multiply to 1.
          </p>

          <p>
            Example:{' '}
            {`$\\tfrac{3}{4} \\div \\tfrac{2}{3} = \\tfrac{3}{4} \\cdot \\tfrac{3}{2} = \\tfrac{9}{8}$`}
            .
          </p>

          <h3>Cutting a string with no ruler</h3>

          <p>
            Cut a half-meter piece from a two-thirds-meter string. Ask what fraction of the whole
            string a half meter is. That is a division:
          </p>

          <div className="lrn-eq">{`$$\\frac{\\frac{1}{2}}{\\frac{2}{3}} = \\frac{1}{2} \\cdot \\frac{3}{2} = \\frac{3}{4}.$$`}</div>

          <p>
            So a half meter is three fourths of the string. Fold the string in fourths and cut off
            one of the four pieces. You can now multiply and divide any two fractions.
          </p>
        </>,

        <>
          <h2>Neighbor Fractions</h2>

          <p>
            Two fractions {`$\\tfrac{a}{b}$`} and {`$\\tfrac{c}{d}$`} are neighbor fractions when:
          </p>

          <div className="lrn-eq">{`$$ad - bc = \\pm 1.$$`}</div>

          <p>
            A small pair: {`$\\tfrac{1}{2}$`} and {`$\\tfrac{2}{3}$`}, since{' '}
            {`$1 \\cdot 3 - 2 \\cdot 2 = -1$`}. Neighbor fractions have three properties.
          </p>

          <ol className="lrn-list">
            <li>
              Neither can be simplified. If {`$\\tfrac{a}{b}$`} could be reduced, a factor{' '}
              {`$f > 1$`} would divide both {`$a$`} and {`$b$`}, so {`$f$`} would also divide{' '}
              {`$ad - bc$`}. But {`$ad - bc = \\pm 1$`}, and no whole number above 1 divides 1.
            </li>
            <li>
              The mediant {`$\\tfrac{a+c}{b+d}$`} lies between them on the number line, and it is a
              neighbor to each.
            </li>
            <li>
              No simpler fraction sneaks between them. No fraction {`$\\tfrac{e}{f}$`} with{' '}
              {`$f < b + d$`} lies strictly between {`$\\tfrac{a}{b}$`} and {`$\\tfrac{c}{d}$`}. The
              mediant is the simplest in-between fraction there is.
            </li>
          </ol>
        </>,

        <>
          <h2>Powers</h2>

          <p>
            You met powers in the place-value lesson. Here is a closer look. A power is shorthand
            for repeated multiplication. Multiply {`$a$`} by itself {`$n$`} times:
          </p>

          <div className="lrn-eq lrn-eq-hero">{`$$a^n = \\underbrace{a \\cdot a \\cdot \\ldots \\cdot a}_{n \\text{ times}}.$$`}</div>

          <p>
            The number {`$a$`} is the base and {`$n$`} is the exponent. So{' '}
            {`$2^6 = 2 \\cdot 2 \\cdot 2 \\cdot 2 \\cdot 2 \\cdot 2 = 64$`}.
          </p>

          <p>
            Two names come from geometry. {`$a^2$`} is "{`$a$`} squared", the area of a square with
            side {`$a$`}. {`$a^3$`} is "{`$a$`} cubed", the volume of a cube with edge {`$a$`}.
          </p>

          <p>
            Powers blow up fast. {`$2^{10} = 1024$`}, which is already over a thousand. Each extra
            power of 2 roughly multiplies the size by 1000 every ten steps.
          </p>
        </>,

        <>
          <h2>Scientific Notation: Large Numbers</h2>

          <p>
            Write a very large number as a number between 1 and 10 multiplied by a power of 10. The
            speed of light:
          </p>

          <div className="lrn-eq">{`$$300{,}000 \\, \\frac{\\text{km}}{\\text{s}} = 3 \\cdot 10^5 \\, \\frac{\\text{km}}{\\text{s}} = 3 \\cdot 10^8 \\, \\frac{\\text{m}}{\\text{s}} = 3 \\cdot 10^{10} \\, \\frac{\\text{cm}}{\\text{s}}.$$`}</div>

          <p>
            Changing units shifts the exponent. 1 km = 10³ m, so {`$10^5$`} km ={' '}
            {`$10^5 \\cdot 10^3$`} m = {`$10^8$`} m. The value is the same; only the bookkeeping
            moves.
          </p>

          <p>
            Cheap calculators truncate big numbers to scientific form. The product 370{`$,$`}000 · 2
            {`$,$`}100{`$,$`}000 = 7.77 · 10¹¹ shows up on the screen as <code>7.77 E 11</code>{' '}
            because 777{`$,$`}000{`$,$`}000{`$,$`}000 will not fit.
          </p>

          <table className="lrn-table">
            <thead>
              <tr>
                <th>Quantity</th>
                <th>Value</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Earth radius</td>
                <td>{`$\\approx 6 \\cdot 10^6$`} m</td>
              </tr>
              <tr>
                <td>Earth to Moon</td>
                <td>{`$\\approx 4 \\cdot 10^8$`} m</td>
              </tr>
              <tr>
                <td>Earth to Sun</td>
                <td>{`$\\approx 1.5 \\cdot 10^{11}$`} m</td>
              </tr>
              <tr>
                <td>World population</td>
                <td>{`$\\approx 8 \\cdot 10^9$`}</td>
              </tr>
              <tr>
                <td>Human lifespan</td>
                <td>{`$\\approx 2 \\cdot 10^9$`} seconds</td>
              </tr>
            </tbody>
          </table>

          <p>
            Programmers swap base 10 for base 2 because {`$2^{10} = 1024 \\approx 10^3$`}. "Kilo" in
            computing means 1024, not 1000. One kilobyte is 1024 bytes.
          </p>
        </>,

        <>
          <h2>Negative Powers</h2>

          <p>
            The powers-of-two sequence 1, 2, 4, 8, 16, 32 doubles at every step. Run it backward and
            it halves:
          </p>

          <div className="lrn-eq">{`$$\\ldots, 8, 4, 2, 1, \\tfrac{1}{2}, \\tfrac{1}{4}, \\tfrac{1}{8}, \\ldots$$`}</div>

          <p>Match exponents to the original sequence and the pattern forces these values:</p>

          <div className="lrn-eq lrn-eq-hero">{`$$a^0 = 1, \\quad a^{-n} = \\frac{1}{a^n}.$$`}</div>

          <p>
            These are choices we make, not facts we prove. The notation {`$2^{-1}$`} cannot mean
            "use 2 as a factor −1 times" because no such operation exists. Mathematicians chose
            these definitions because they keep the product rule working for every integer.
          </p>

          <p>
            Negative exponents replace fraction bars. Repeated multiplication of variables collapses
            into one line:
          </p>

          <div className="lrn-eq">{`$$2 \\cdot a \\cdot a \\cdot a \\cdot a \\cdot b \\cdot b \\cdot b \\cdot c \\cdot c \\cdot d = 2a^4 b^3 c^2 d.$$`}</div>

          <p>Variables in the denominator pick up minus signs:</p>

          <div className="lrn-eq">{`$$\\frac{2 \\cdot a \\cdot a \\cdot a \\cdot a \\cdot c \\cdot c}{b \\cdot b \\cdot b \\cdot d} = 2 a^4 b^{-3} c^2 d^{-1}.$$`}</div>

          <p>
            Same expression, no fraction bar. This form makes the product and power rules easier to
            apply.
          </p>
        </>,

        <>
          <h2>Scientific Notation: Small Numbers</h2>

          <p>
            Negative powers of 10 handle tiny quantities the same way positive ones handle huge.
          </p>

          <table className="lrn-table">
            <thead>
              <tr>
                <th>Unit or quantity</th>
                <th>Value</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1 centimeter</td>
                <td>{`$10^{-2}$`} m</td>
              </tr>
              <tr>
                <td>1 millimeter</td>
                <td>{`$10^{-3}$`} m</td>
              </tr>
              <tr>
                <td>1 micrometer</td>
                <td>{`$10^{-6}$`} m</td>
              </tr>
              <tr>
                <td>1 nanometer</td>
                <td>{`$10^{-9}$`} m</td>
              </tr>
              <tr>
                <td>1 angstrom</td>
                <td>{`$10^{-10}$`} m</td>
              </tr>
              <tr>
                <td>Thickness of paper</td>
                <td>{`$\\approx 10^{-4}$`} m</td>
              </tr>
              <tr>
                <td>Virus size</td>
                <td>
                  {`$\\approx 20$`} to {`$300 \\cdot 10^{-9}$`} m
                </td>
              </tr>
            </tbody>
          </table>

          <p>
            An atom is roughly 0.0000001 mm across. That is {`$10^{-7}$`} mm. Since 1 mm ={' '}
            {`$10^{-3}$`} m, the atom measures {`$10^{-7} \\cdot 10^{-3} = 10^{-10}$`} m, which is
            one angstrom.
          </p>

          <p>
            The same physical thing can look "big" or "small" depending on the unit. Earth's radius
            is about {`$6 \\cdot 10^6$`} m, which is also 6000 km, or 6 million m. Big and small are
            choices of unit, not facts about the quantity.
          </p>
        </>,

        <>
          <h2>The Product Rule for Powers</h2>

          <p>Multiplying two powers with the same base, you add the exponents:</p>

          <div className="lrn-eq lrn-eq-hero">{`$$a^m \\cdot a^n = a^{m+n}.$$`}</div>

          <p>
            For positive exponents the proof is counting. {`$a^5$`} is {`$a$`} used 5 times;{' '}
            {`$a^3$`} uses it 3 more. Together 8 factors:
          </p>

          <div className="lrn-eq">{`$$a^5 \\cdot a^3 = \\underbrace{a \\cdot a \\cdot a \\cdot a \\cdot a}_{5} \\cdot \\underbrace{a \\cdot a \\cdot a}_{3} = a^8.$$`}</div>

          <p>
            The rule still holds when exponents are zero or negative. Four cases, all working out:
          </p>

          <p>
            <strong>Positive · positive:</strong> done above.
          </p>

          <p>
            <strong>Positive · negative,</strong> say {`$a^5 \\cdot a^{-3}$`}. The rule predicts{' '}
            {`$a^{5 + (-3)} = a^2$`}. Check by definition: {`$a^{-3} = \\frac{1}{a^3}$`}, so
          </p>

          <div className="lrn-eq">{`$$a^5 \\cdot a^{-3} = \\frac{a^5}{a^3} = a^2.$$`}</div>

          <p>
            <strong>Negative · negative,</strong> say {`$a^{-5} \\cdot a^{-3}$`}. The rule predicts{' '}
            {`$a^{-8}$`}. By definition:
          </p>

          <div className="lrn-eq">{`$$a^{-5} \\cdot a^{-3} = \\frac{1}{a^5} \\cdot \\frac{1}{a^3} = \\frac{1}{a^8} = a^{-8}.$$`}</div>

          <p>
            <strong>Anything · zero,</strong> say {`$a^5 \\cdot a^0$`}. With {`$a^0 = 1$`}, the
            product is {`$a^5$`}, and the rule gives {`$a^{5+0} = a^5$`}. Match.
          </p>

          <p>
            One application: multiply numbers in scientific notation by treating coefficients and
            powers separately. {`$(2 \\cdot 10^7) \\cdot (3 \\cdot 10^{-11}) = 6 \\cdot 10^{-4}$`}.
            Computers do this with base 2 instead of base 10.
          </p>
        </>,

        <>
          <h2>Power of a Power</h2>

          <p>Raising a power to another power, you multiply the exponents:</p>

          <div className="lrn-eq lrn-eq-hero">{`$$(a^m)^n = a^{m \\cdot n}.$$`}</div>

          <p>
            Why? {`$(a^m)^n$`} means {`$n$`} copies of {`$a^m$`}, all multiplied. Each copy
            contributes {`$m$`} factors of {`$a$`}. Total factors: {`$m \\cdot n$`}.
          </p>

          <div className="lrn-eq">{`$$(a^2)^3 = a^2 \\cdot a^2 \\cdot a^2 = a^{2+2+2} = a^6 = a^{2 \\cdot 3}.$$`}</div>

          <p>
            Watch for the trap. The product rule {`$a^m \\cdot a^n = a^{m+n}$`} adds exponents.
            Power of a power {`$(a^m)^n = a^{m \\cdot n}$`} multiplies them. Confusing these is the
            most common exponent mistake.
          </p>
        </>,

        <>
          <h2>What a Ratio Is</h2>

          <p>
            A ratio tells you the relative size of two or more quantities, not their absolute
            counts. If a pet store has dogs and cats in ratio 2:3, then for every 2 dogs there are 3
            cats. There could be 2 dogs and 3 cats, or 200 and 300, or 2 million and 3 million. The
            ratio is the same.
          </p>

          <p>Ratios are written two ways:</p>

          <ul className="lrn-list">
            <li>Colon: 2:3. Especially clear for three or more quantities.</li>
            <li>
              Fraction: {`$\\tfrac{2}{3}$`}. Plugs straight into algebra and cross-multiplication.
            </li>
          </ul>

          <p>
            With three quantities, colons stretch naturally. Dogs:cats:mice = 2:3:30 means 2 dogs, 3
            cats, and 30 mice for every group of 35 animals. The cats-to-total ratio is then 3:35:
            out of every 35 animals, 3 are cats.
          </p>
        </>,

        <>
          <h2>Basic Ratio Problems</h2>

          <p>
            A class has boys and girls in ratio 3:4 and 84 students total. How many girls? Three
            routes reach the same answer.
          </p>

          <p>
            Algebra route. Let {`$b$`} = boys, {`$g$`} = girls. Ratio:{' '}
            {`$\\tfrac{b}{g} = \\tfrac{3}{4}$`}, so {`$b = \\tfrac{3}{4}g$`}. Total:{' '}
            {`$b + g = 84$`}, so {`$\\tfrac{3}{4}g + g = \\tfrac{7}{4}g = 84$`}, giving {`$g = 48$`}
            .
          </p>

          <p>
            Grouping route. Each group of {`$3+4 = 7$`} students has 4 girls. There are{' '}
            {`$\\frac{84}{7} = 12$`} groups, so {`$12 \\cdot 4 = 48$`} girls.
          </p>

          <p>
            Part-to-whole route. Girls are 4 out of every 7 students. So girls ={' '}
            {`$\\tfrac{4}{7} \\cdot 84 = 48$`}.
          </p>

          <p>Three routes, one answer.</p>

          <p>
            With three quantities: dogs:cats:mice = 2:3:30, with 385 animals total. Total ratio
            parts = 35. Cats are 3 out of every 35, so cats = {`$\\tfrac{3}{35} \\cdot 385 = 33$`}.
          </p>

          <p>
            Switch the ratio to use what you know. Nine of every 11 dentists in a city say no candy.
            18 dentists say yes to candy. How many dentists are there?
          </p>

          <p>
            The given ratio is 9:11 (no-candy to total). The number you know is on the yes side. So
            switch perspectives. Two out of every 11 dentists say yes. With 18 dentists saying yes,
            the total is {`$11 \\cdot (\\frac{18}{2}) = 99$`} dentists.
          </p>

          <p>
            The lesson: when picking which ratio to write down, pick the one that mentions the
            quantity you actually have a number for.
          </p>
        </>,

        <>
          <h2>Harder Ratio Problems</h2>

          <h3>A bag of marbles</h3>

          <p>
            A bag holds green and red marbles. Green is {`$\\tfrac{2}{5}$`} of the bag. Add 4 green
            and remove 10 red, and green becomes twice red. How many marbles were there originally?
          </p>

          <p>
            Let {`$g$`} = green, {`$r$`} = red. Green is part-to-whole, so{' '}
            {`$\\tfrac{g}{g+r} = \\tfrac{2}{5}$`}. Cross-multiply: {`$5g = 2(g+r)$`}, simplifying to{' '}
            {`$3g = 2r$`}, so {`$r = \\tfrac{3}{2}g$`}.
          </p>

          <p>
            After the change, green = 2 · red: {`$(g + 4) = 2(r - 10)$`}. Substitute {`$r$`}:
          </p>

          <div className="lrn-eq">{`$$(g + 4) = 2\\left(\\tfrac{3}{2}g - 10\\right) = 3g - 20.$$`}</div>

          <p>
            So {`$24 = 2g$`}, giving {`$g = 12$`}, {`$r = 18$`}, total 30. The wrong move here is
            writing {`$\\tfrac{g}{r} = \\tfrac{2}{5}$`} instead of{' '}
            {`$\\tfrac{g}{g+r} = \\tfrac{2}{5}$`}. The next section explains why.
          </p>

          <h3>Ratio of an expression</h3>

          <p>
            Given {`$\\tfrac{10x - 3y}{13x - 2y} = \\tfrac{3}{5}$`}, find {`$\\tfrac{x}{y}$`}.
            Cross-multiply, expand, and collect like terms:
          </p>

          <div className="lrn-eq">{`$$5(10x - 3y) = 3(13x - 2y) \\implies 50x - 15y = 39x - 6y \\implies 11x = 9y.$$`}</div>

          <p>So {`$\\tfrac{x}{y} = \\tfrac{9}{11}$`}.</p>

          <h3>Linked ratios</h3>

          <p>
            Given {`$\\tfrac{x}{y} = \\tfrac{2}{3}$`} and {`$\\tfrac{y}{z} = \\tfrac{7}{5}$`}, find{' '}
            {`$\\tfrac{z}{x}$`}. Express {`$x$`} and {`$z$`} both in terms of {`$y$`}:{' '}
            {`$x = \\tfrac{2}{3}y$`}, {`$z = \\tfrac{5}{7}y$`}. Then
          </p>

          <div className="lrn-eq">{`$$\\frac{z}{x} = \\frac{(\\frac{5}{7}) y}{(\\frac{2}{3}) y} = \\frac{5}{7} \\cdot \\frac{3}{2} = \\frac{15}{14}.$$`}</div>

          <p>The {`$y$`}'s cancel because the final answer is itself a ratio, scale-free.</p>
        </>,

        <>
          <h2>Part-to-Part vs Part-to-Whole</h2>

          <p>
            This is the one ratio mistake everyone makes. Boys:girls = 3:4 in a class. Two ratios
            sit in the same situation:
          </p>

          <ul className="lrn-list">
            <li>
              Part-to-part: {`$\\tfrac{\\text{boys}}{\\text{girls}} = \\tfrac{3}{4}$`}. Denominator
              is another part.
            </li>
            <li>
              Part-to-whole: {`$\\tfrac{\\text{boys}}{\\text{total}} = \\tfrac{3}{7}$`}. Denominator
              is the total ({`$3 + 4$`}).
            </li>
          </ul>

          <p>
            Both look like "3 over something small". The brain treats them as interchangeable. They
            are not. Read the words out loud before writing the fraction: "three out of every four
            girls" tells you the denominator is girls; "three out of every seven students" tells you
            the denominator is total.
          </p>
        </>,

        <>
          <h2>Conversion Factors</h2>

          <p>
            A conversion factor is a ratio that equals 1. Multiplying by 1 leaves the value alone,
            but lets you swap units. Twelve inches equal one foot, so:
          </p>

          <div className="lrn-eq">{`$$\\frac{1 \\text{ ft}}{12 \\text{ in}} = 1.$$`}</div>

          <p>Treat units like algebraic factors. Cancel like ones in numerator and denominator:</p>

          <div className="lrn-eq">{`$$64 \\text{ in} \\cdot \\frac{1 \\text{ ft}}{12 \\text{ in}} = \\frac{64}{12} \\text{ ft} = 5\\tfrac{1}{3} \\text{ ft}.$$`}</div>

          <p>
            If you flipped the factor and used {`$\\tfrac{12 \\text{ in}}{1 \\text{ ft}}$`}, you
            would get 768, with units of "inches squared per foot". Wrong units mean wrong
            direction.
          </p>

          <h3>Squared units</h3>

          <p>
            Convert 28 m² to ft². Apply the meter-to-foot factor twice, because the unit is squared:
          </p>

          <div className="lrn-eq">{`$$28 \\text{ m}^2 \\cdot \\left(\\frac{3.28 \\text{ ft}}{1 \\text{ m}}\\right)^2 \\approx 301 \\text{ ft}^2.$$`}</div>

          <h3>A unit in the denominator</h3>

          <p>
            A medicine doses at 32 mL per kg of body weight. Scales show pounds. Convert mL/kg to
            mL/lb. The conversion factor is 0.4536 kg per pound. To cancel the kg in the
            denominator, put kg in the numerator of the factor:
          </p>

          <div className="lrn-eq">{`$$\\frac{32 \\text{ mL}}{1 \\text{ kg}} \\cdot \\frac{0.4536 \\text{ kg}}{1 \\text{ lb}} \\approx 14.5 \\, \\frac{\\text{mL}}{\\text{lb}}.$$`}</div>

          <h3>Factors need not involve 1</h3>

          <p>
            On planet Ghaap, 2 Gheeps = 3 Ghiips, 2 Ghiips = 5 Ghoops, 3 Ghoops = 2 Ghuups. How many
            Ghuups in 7 Gheeps? Chain the factors:
          </p>

          <div className="lrn-eq">{`$$7 \\text{ Gheeps} \\cdot \\frac{3 \\text{ Ghiips}}{2 \\text{ Gheeps}} \\cdot \\frac{5 \\text{ Ghoops}}{2 \\text{ Ghiips}} \\cdot \\frac{2 \\text{ Ghuups}}{3 \\text{ Ghoops}} = \\frac{7 \\cdot 3 \\cdot 5 \\cdot 2}{2 \\cdot 2 \\cdot 3} \\text{ Ghuups} = 17.5 \\text{ Ghuups}.$$`}</div>

          <h3>Chaining several factors: a paint job</h3>

          <p>
            A wall is 370 m². Paint covers 300 ft² per gallon. Paint is sold in 4-liter cans. 1
            liter = 0.264 gallons, 1 m = 3.28 ft. How many cans?
          </p>

          <div className="lrn-eq">{`$$370 \\text{ m}^2 \\cdot \\left(\\frac{3.28 \\text{ ft}}{1 \\text{ m}}\\right)^2 \\cdot \\frac{1 \\text{ gal}}{300 \\text{ ft}^2} \\cdot \\frac{1 \\text{ L}}{0.264 \\text{ gal}} \\cdot \\frac{1 \\text{ can}}{4 \\text{ L}} \\approx 12.6 \\text{ cans}.$$`}</div>

          <p>You cannot buy 0.6 of a can. Buy 13.</p>
        </>,

        <>
          <h2>Fractions as Decimals</h2>

          <p>
            A fraction is a division waiting to happen. To turn a fraction into a decimal, divide
            the top by the bottom.
          </p>

          <p>
            Take {`$\\tfrac{3}{4}$`}. Divide 3 by 4. Three ones will not cover a 4, so write 0 and a
            dot, then keep going into the tenths: 30 tenths hold seven 4s with 2 left, and 20
            hundredths hold five 4s exactly. So {`$\\tfrac{3}{4} = 0.75$`}.
          </p>

          <p>
            Some divisions never end. {`$\\tfrac{2}{3}$`} gives {`$0.666\\ldots$`}, the same digit
            forever. A fraction gives a repeating decimal when the bottom keeps leaving a remainder.
          </p>

          <p>
            Going the other way is just place value. {`$0.75 = \\tfrac{75}{100} = \\tfrac{3}{4}$`}{' '}
            after reducing.
          </p>
        </>,

        <>
          <h2>Percent</h2>

          <p>
            Percent means "per hundred". If {`$a$`} is {`$x\\%$`} of {`$b$`}:
          </p>

          <div className="lrn-eq lrn-eq-hero">{`$$\\frac{a}{b} = \\frac{x}{100}, \\quad \\text{so} \\quad a = \\frac{x}{100} \\cdot b.$$`}</div>

          <p>Four patterns cover almost every percent problem.</p>

          <p>
            What is 60% of 250? {`$\\tfrac{x}{250} = \\tfrac{60}{100}$`}, so{' '}
            {`$x = 250 \\cdot 0.60 = 150$`}.
          </p>

          <p>
            What percent of 240 is 48? {`$\\tfrac{48}{240} = \\tfrac{x}{100}$`}. Simplify the left:{' '}
            {`$\\tfrac{48}{240} = \\tfrac{1}{5} = \\tfrac{20}{100}$`}. So 48 is 20% of 240.
          </p>

          <p>
            36 is 120% of what? {`$\\tfrac{36}{x} = \\tfrac{120}{100}$`}, so{' '}
            {`$x = 36 \\cdot \\tfrac{100}{120} = 30$`}. The result 36 is larger than 30, which fits
            "more than 100% of".
          </p>

          <p>Increase or decrease by {`$k\\%$`}:</p>

          <ul className="lrn-list">
            <li>
              Increase {`$x$`} by {`$k\\%$`}: multiply by {`$\\left(1 + \\tfrac{k}{100}\\right)$`}.
              Increase 24 by 75%: {`$24 \\cdot 1.75 = 42$`}.
            </li>
            <li>
              Decrease {`$x$`} by {`$k\\%$`}: multiply by {`$\\left(1 - \\tfrac{k}{100}\\right)$`}.
              Decrease 60 by 40%: {`$60 \\cdot 0.60 = 36$`}.
            </li>
          </ul>

          <p>
            "Increase by 75%" means "keep the original 100% and add 75% more", which is 175% of the
            original, which is multiplying by 1.75.
          </p>

          <p>
            You can now answer any of the four percent questions and any single increase or
            decrease.
          </p>
        </>,

        <>
          <h2>Successive Percentages</h2>

          <p>
            Avocado prices rise 20%, then rise another 25%. Naive answer:{' '}
            {`$20\\% + 25\\% = 45\\%$`}. Wrong.
          </p>

          <p>
            Each percentage change is a multiplication. The second one acts on the already-changed
            price, not the original. Try {`$\\$5$`}: after a 20% increase, the price is{' '}
            {`$5 \\cdot 1.20 = 6$`}. After a further 25% on the new price:{' '}
            {`$6 \\cdot 1.25 = 7.50$`}. That is a {`$\\$2.50$`} jump on a {`$\\$5$`} starting price
            50%, not 45%.
          </p>

          <p>The number 5 was arbitrary. Let the start price be {`$x$`}:</p>

          <div className="lrn-eq">{`$$x \\cdot 1.20 \\cdot 1.25 = 1.50 x.$$`}</div>

          <p>
            Final price is 1.50 times the original for every starting price. The total increase is
            always 50%, no matter what x was.
          </p>

          <div className="lrn-warning">Successive percentage changes multiply. They never add.</div>

          <h3>Reversing a percent increase</h3>

          <p>
            The avocado price is now 1.5 times the original. What percent decrease returns it? You
            have to divide by 1.5, which is multiplying by {`$\\tfrac{1}{1.5} = \\tfrac{2}{3}$`}.
            The reduction is {`$1 - \\tfrac{2}{3} = \\tfrac{1}{3}$`} of the new price.
          </p>

          <div className="lrn-eq">{`$$\\frac{0.5 x}{1.5 x} = \\frac{1}{3} = 33\\tfrac{1}{3}\\%.$$`}</div>

          <p>
            Not 50%. To undo a 50% increase you need a 33⅓% decrease. A 50% increase then a 50%
            decrease lands at {`$1.5 \\cdot 0.5 = 0.75$`}, which is 25% below the start. Multiplying
            is asymmetric.
          </p>
        </>,

        <>
          <h2>Percent Problems with Ratios and Mixtures</h2>

          <h3>Pre-tax salary</h3>

          <p>You need {`$\\$450$`} per week after a 25% tax. Find the pre-tax salary.</p>

          <p>
            After tax is 75% of before tax. So {`$0.75 x = 450$`}, giving {`$x = 600$`}.
          </p>

          <p>
            There is a picture route too. Split the pre-tax salary into four equal quarters. Tax
            takes one quarter. The remaining three quarters equal {`$\\$450$`}, so one quarter is{' '}
            {`$\\$150$`}, and the whole rectangle is {`$\\$600$`}. Same answer, no algebra.
          </p>

          <h3>A fully relative problem</h3>

          <p>
            Suppose 6% of 8th graders and 3% of 7th graders join a math club. There are 1.5 times as
            many 8th graders as 7th graders. What percent of all students join?
          </p>

          <p>
            All the information is relative. Pick any value for the 7th-grade headcount and the
            answer should not depend on it. Let {`$x$`} = 7th graders, so {`$1.5 x$`} = 8th graders.
            Club members total {`$0.03 x + 0.06 \\cdot 1.5 x = 0.12 x$`}. Students total{' '}
            {`$x + 1.5 x = 2.5 x$`}. Percent joining = {`$\\tfrac{0.12 x}{2.5 x} = 0.048 = 4.8\\%$`}
            .
          </p>

          <p>
            The {`$x$`} cancels. That is what "scale-free" means. Every input is a ratio or a
            percent, so the absolute size drops out. You can pick any starting number you like, even
            100, and the arithmetic stays whole.
          </p>

          <h3>Acid replacement</h3>

          <p>
            180 mL of solution is 20% acid. Replace {`$x$`} mL with pure (100%) acid to reach 30%
            acid.
          </p>

          <p>
            Acid before: {`$0.20 \\cdot 180 = 36$`} mL. Remove {`$x$`} mL of 20% solution (losing{' '}
            {`$0.2 x$`} mL acid) and add {`$x$`} mL of pure acid. New acid total:{' '}
            {`$36 - 0.2 x + x = 36 + 0.8 x$`}. Target: {`$0.30 \\cdot 180 = 54$`} mL.
          </p>

          <div className="lrn-eq">{`$$36 + 0.8 x = 54 \\implies 0.8 x = 18 \\implies x = 22.5 \\text{ mL}.$$`}</div>
        </>,

        <>
          <h2>Direct Proportion</h2>

          <p>
            Two quantities are directly proportional when their ratio is constant. Double one and
            the other doubles. Halve one and the other halves.
          </p>

          <div className="lrn-eq lrn-eq-hero">{`$$\\frac{x}{y} = k \\quad \\text{or} \\quad x = k y.$$`}</div>

          <p>
            The constant {`$k$`} is the constant of proportionality. Find it once, and you know how
            the two quantities relate forever after.
          </p>

          <p>
            Finding y from x: if {`$\\frac{x}{y}$`} stays at {`$\\frac{5}{9}$`} and {`$x = 14$`},
            then {`$y = 14 \\cdot \\frac{9}{5} = \\frac{126}{5}$`}.
          </p>

          <h3>Shadows</h3>

          <p>
            Mary is 5 ft tall and casts a 12 ft shadow. A flagpole casts a 42 ft shadow.
            Height-over-shadow is the same constant for both, so flagpole height ={' '}
            {`$42 \\cdot \\frac{5}{12} = 17.5$`} ft.
          </p>

          <div className="lrn-graph">
            <DirectProportionViz />
          </div>

          <p>
            The graph of {`$y = kx$`} is a straight line through the origin. Zero in, zero out.
            Constant slope {`$k$`}.
          </p>

          <h3>Higher-order direct proportion</h3>

          <p>
            "{`$a$`} and {`$b^2$`} are directly proportional" means {`$\\frac{a}{b^2} = k$`}, not{' '}
            {`$\\frac{a}{b} = k$`}. If {`$a = 5$`} when {`$b = 9$`}, then {`$k = \\frac{5}{81}$`}.
            So when {`$b = 12$`}, {`$a = (\\frac{5}{81}) \\cdot 144 = \\frac{80}{9}$`}. Read the
            proportion exactly as stated. The variable that gets the exponent keeps it.
          </p>
        </>,

        <>
          <h2>Inverse Proportion</h2>

          <p>
            Two quantities are inversely proportional when their product is constant. Double one,
            the other halves. Triple one, the other shrinks to a third.
          </p>

          <div className="lrn-eq lrn-eq-hero">{`$$x y = k.$$`}</div>

          <h3>Clearing a field</h3>

          <p>
            12 people clear a field in 18 hours. People · hours = {`$12 \\cdot 18 = 216$`}. With 9
            people, time = {`$\\frac{216}{9} = 24$`} hours. Fewer workers, more hours, same total
            work.
          </p>

          <div className="lrn-graph">
            <InverseProportionViz />
          </div>

          <p>
            The graph of {`$y = \\frac{k}{x}$`} is a hyperbola. It shoots up as {`$x$`} nears 0 and
            creeps toward 0 as {`$x$`} grows. Not a line, because the rate of change is not
            constant.
          </p>

          <h3>Inverse of inverse is direct</h3>

          <p>
            If {`$x$`} and {`$y$`} are inversely proportional ({`$xy = a$`}) and {`$y$`} and {`$z$`}{' '}
            are inversely proportional ({`$yz = b$`}), divide:
          </p>

          <div className="lrn-eq">{`$$\\frac{xy}{yz} = \\frac{a}{b} \\implies \\frac{x}{z} = \\frac{a}{b}.$$`}</div>

          <p>
            The ratio {`$\\frac{x}{z}$`} is constant, so {`$x$`} and {`$z$`} are directly
            proportional.
          </p>
        </>,

        <>
          <h2>Joint Proportion</h2>

          <p>
            A quantity is jointly proportional to two others when it depends on both directly at
            once:
          </p>

          <div className="lrn-eq lrn-eq-hero">{`$$x = k y z \\quad \\text{or} \\quad \\frac{x}{y z} = k.$$`}</div>

          <p>
            Double {`$y$`} alone and {`$x$`} doubles. Double {`$z$`} alone and {`$x$`} doubles.
            Double both and {`$x$`} quadruples.
          </p>

          <h3>Woodchucks</h3>

          <p>
            Five woodchucks chuck eight pieces of wood in two hours. How much would one woodchuck
            chuck in 24 hours? Wood is jointly proportional to woodchucks and time: wood ={' '}
            {`$k \\cdot \\text{chucks} \\cdot \\text{time}$`}. From the data,{' '}
            {`$k = \\frac{8}{(5 \\cdot 2)} = 0.8$`}. So {`$x = 0.8 \\cdot 1 \\cdot 24 = 19.2$`}{' '}
            pieces.
          </p>

          <h3>A wage example</h3>

          <p>
            A crew's total wage is jointly proportional to the number of workers and the number of
            days they work: wage = {`$k \\cdot \\text{workers} \\cdot \\text{days}$`}.
          </p>

          <p>
            Suppose 4 workers earn {`$\\$960$`} in 3 days. Find {`$k$`} from the data:{' '}
            {`$k = \\frac{960}{4 \\cdot 3} = 80$`} dollars per worker per day. So 6 workers over 5
            days earn {`$80 \\cdot 6 \\cdot 5 = \\$2400$`}.
          </p>

          <p>
            Double the workers alone and the wage doubles. Double the days alone and it doubles.
            Double both and it quadruples. That is the joint-proportion fingerprint.
          </p>
        </>,

        <>
          <h2>Rate Problems</h2>

          <p>Distance equals rate times time:</p>

          <div className="lrn-eq lrn-eq-hero">{`$$d = r \\cdot t.$$`}</div>

          <p>
            This single equation handles travel, work, reading, filling, anything with a steady
            rate. Find two of the three quantities and the third drops out.
          </p>

          <h3>Same distance, new time</h3>

          <p>
            Prima drives 45 mph for 40 minutes to reach the dentist. Distance ={' '}
            {`$45 \\cdot \\tfrac{2}{3} = 30$`} miles. Leaving 10 minutes late, she has 30 minutes
            for those 30 miles, so new rate = {`$\\frac{30}{\\tfrac{1}{2}} = 60$`} mph.
          </p>

          <h3>Two speeds over the same distance</h3>

          <p>
            Jack drives 30 mph to work and 45 mph home, same route both ways. The average speed is
            not the midpoint 37.5 mph. The slower leg takes longer, so it weighs more.
          </p>

          <p>
            Let the one-way distance be {`$x$`}. Total distance is {`$2x$`}. Total time is{' '}
            {`$\\tfrac{x}{30} + \\tfrac{x}{45} = \\tfrac{5x}{90}$`}.
          </p>

          <div className="lrn-eq">{`$$\\bar{v} = \\frac{2x}{\\frac{5x}{90}} = 36 \\text{ mph}.$$`}</div>

          <p>
            Always set up average speed as total distance over total time. Never average the two
            speeds directly.
          </p>

          <h3>Combining and closing</h3>

          <p>
            Two more rate ideas show up often. When workers act at the same time, their rates add.
            When one thing chases another, track the gap and use the difference of the rates. The
            practice problems put both to work.
          </p>

          <p>
            You can now solve any steady-rate problem: travel, work, reading, or filling, all from{' '}
            {`$d = r \\cdot t$`}.
          </p>
        </>
      ]
    },

    practice: [
      {
        q: `Are $\\frac{6}{9}$ and $\\frac{8}{12}$ equal? Decide two ways.`,
        a: `They are equal. Reduce both: $\\frac{6}{9} = \\frac{2}{3}$ (divide top and bottom by 3) and $\\frac{8}{12} = \\frac{2}{3}$ (divide by 4). Or cross-multiply: $6 \\cdot 12 = 72$ and $9 \\cdot 8 = 72$. Equal products mean equal fractions.`
      },
      {
        q: `Which is bigger, $\\frac{2000}{2001}$ or $\\frac{3000}{3001}$?`,
        a: `$\\frac{3000}{3001}$ is bigger. Both fractions are just under 1, so compare distances from 1. $1 - \\frac{2000}{2001} = \\frac{1}{2001}$ and $1 - \\frac{3000}{3001} = \\frac{1}{3001}$. The second gap is smaller, so the second fraction is closer to 1 and therefore the larger.`
      },
      {
        q: `Add $\\frac{2}{3}$ and $\\frac{5}{7}$. Explain why $\\frac{7}{10}$ is not the answer.`,
        a: `$\\frac{2}{3} + \\frac{5}{7} = \\frac{14}{21} + \\frac{15}{21} = \\frac{29}{21}$. The wrong answer $\\frac{7}{10}$ is the mediant: it always lands between the two fractions (here between 0.666… and 0.714…). A true sum must be larger than either part, and $\\frac{29}{21} \\approx 1.38$ is.`
      },
      {
        q: `Two fractions $\\frac{a}{b}$ and $\\frac{c}{d}$ satisfy $ad - bc = 1$. Prove neither can be simplified.`,
        a: `Suppose $\\frac{a}{b}$ reduces, so some integer $f > 1$ divides both $a$ and $b$. Then $f$ divides $ad - bc$. But $ad - bc = 1$, and no integer above 1 divides 1. Contradiction. The same argument rules out simplifying $\\frac{c}{d}$.`
      },
      {
        q: `Cut a piece of length $\\frac{1}{2}$ meter from a $\\frac{2}{3}$-meter string without a ruler.`,
        a: `A half-meter is $\\frac{\\frac{1}{2}}{\\frac{2}{3}} = \\frac{1}{2} \\cdot \\frac{3}{2} = \\frac{3}{4}$ of the string. Fold the string in fourths and cut off one fourth. The remaining three fourths measure half a meter.`
      },
      {
        q: `Compute $2^{10}$. Why does it matter that this is close to $10^3$?`,
        a: `$2^{10} = 1024$. Programmers use base 2, and $2^{10} \\approx 10^3$ lets them reuse the metric prefixes loosely. "Kilo" in computing means 1024, not 1000. One kilobyte is 1024 bytes.`
      },
      {
        q: `The nearest star is about 4 light-years away. Express that distance in meters using powers of 10. The speed of light is $3 \\times 10^8$ m/s and a year has about $3 \\times 10^7$ seconds.`,
        a: `Distance light covers in one year: $3 \\times 10^8 \\, \\frac{\\text{m}}{\\text{s}} \\cdot 3 \\times 10^7 \\text{ s} = 9 \\times 10^{15}$ m. Four light-years: $3.6 \\times 10^{16}$ m. The product rule for powers handles the unit chain in one line.`
      },
      {
        q: `The powers $2^3 = 8$, $2^2 = 4$, $2^1 = 2$ halve at each step. What must $2^0$ and $2^{-1}$ equal, and why is this a definition rather than a theorem?`,
        a: `$2^0 = 1$ and $2^{-1} = \\frac{1}{2}$, continuing the halving. They are definitions because "use 2 as a factor zero times" or "−1 times" has no direct meaning. Mathematicians chose these values so the product rule $a^m \\cdot a^n = a^{m+n}$ holds for every integer.`
      },
      {
        q: `Write $\\frac{2 \\cdot a \\cdot a \\cdot a \\cdot a \\cdot c \\cdot c}{b \\cdot b \\cdot b \\cdot d}$ as one product with no fraction bar.`,
        a: `$2 a^4 b^{-3} c^2 d^{-1}$. Variables in the numerator keep positive exponents; variables in the denominator pick up negative exponents.`
      },
      {
        q: `Simplify $a^5 \\cdot a^{-3}$ using the product rule, then verify by writing $a^{-3}$ as a fraction.`,
        a: `By the product rule, $a^5 \\cdot a^{-3} = a^{5 + (-3)} = a^2$. Check: $a^{-3} = \\frac{1}{a^3}$, so $a^5 \\cdot a^{-3} = \\frac{a^5}{a^3} = a^2$. Both routes agree, as the definition of negative exponents was built to ensure.`
      },
      {
        q: `Evaluate $(5^3)^4$. Which rule applies, and why is it different from the product rule?`,
        a: `$(5^3)^4 = 5^{12}$. This is the power-of-a-power rule: $(a^m)^n = a^{m \\cdot n}$. It applies when an exponent is itself raised to another exponent. The product rule adds exponents and applies when separate powers with the same base are multiplied: $5^3 \\cdot 5^4 = 5^7$.`
      },
      {
        q: `Show $a^0 = 1$ is forced by the product rule. Why is no other value possible?`,
        a: `From the product rule, $a^n \\cdot a^{-n} = a^{n + (-n)} = a^0$. The same product, written using $a^{-n} = \\frac{1}{a^n}$, equals $a^n \\cdot (\\frac{1}{a^n}) = 1$. So $a^0 = 1$. Any other value would break the product rule's universal validity.`
      },
      {
        q: `Compute $\\frac{3}{4} \\cdot \\frac{2}{5}$ and $\\frac{3}{4} \\div \\frac{2}{5}$.`,
        a: `Multiply tops and bottoms: $\\frac{3}{4} \\cdot \\frac{2}{5} = \\frac{6}{20} = \\frac{3}{10}$. To divide, flip the second fraction and multiply: $\\frac{3}{4} \\div \\frac{2}{5} = \\frac{3}{4} \\cdot \\frac{5}{2} = \\frac{15}{8}$.`
      },
      {
        q: `A class has boys and girls in ratio 3:4, with 84 students total. How many girls? Show the part-to-whole route and the grouping route.`,
        a: `48 girls. Part-to-whole: girls are $\\frac{4}{3+4} = \\frac{4}{7}$ of the class, so girls $= \\frac{4}{7} \\cdot 84 = 48$. Grouping: each group of $3+4 = 7$ students has 4 girls; there are $\\frac{84}{7} = 12$ groups, giving $4 \\cdot 12 = 48$ girls.`
      },
      {
        q: `Nine of every 11 dentists in a city say no candy. The other dentists say yes. There are 18 yes-dentists. How many dentists are there in total?`,
        a: `99 dentists. The given ratio is 9:11 (no:total), but you know the count on the yes side. Switch the ratio: 2 of every 11 dentists say yes. With 18 saying yes, the number of groups of 11 is $\\frac{18}{2} = 9$, so total dentists $= 9 \\cdot 11 = 99$.`
      },
      {
        q: `A bag holds green and red marbles. Green is $\\frac{2}{5}$ of the bag. After adding 4 green and removing 10 red, green becomes twice the red count. How many marbles were originally in the bag?`,
        a: `30 marbles (12 green, 18 red). Part-to-whole: $\\frac{g}{g+r} = \\frac{2}{5}$ gives $3g = 2r$. After the change: $g + 4 = 2(r - 10)$. Substituting $r = \\frac{3}{2}g$ gives $g + 4 = 3g - 20$, so $g = 12$, $r = 18$. The fatal slip is writing $\\frac{g}{r} = \\frac{2}{5}$. That is part-to-part, not part-to-whole.`
      },
      {
        q: `Given $\\frac{x}{y} = \\frac{2}{3}$ and $\\frac{y}{z} = \\frac{7}{5}$, find $\\frac{z}{x}$.`,
        a: `$\\frac{z}{x} = \\frac{15}{14}$. Express both in terms of $y$: $x = \\frac{2}{3}y$ and $z = \\frac{5}{7}y$. Then $\\frac{z}{x} = \\frac{(\\frac{5}{7}) y}{(\\frac{2}{3}) y} = \\frac{5}{7} \\cdot \\frac{3}{2} = \\frac{15}{14}$. The $y$ cancels because the answer is itself a ratio.`
      },
      {
        q: `At what time just after 10:00 do a clock's minute and hour hands point in the same direction?`,
        a: `10:54 and 6/11 minutes. The hour hand moves at $\\frac{1}{12}$ the minute hand's speed. With $m$ minutes after 10:00, the minute hand is at mark $m$ and the hour hand is at $50 + \\frac{m}{12}$. Set equal: $m = 50 + \\frac{m}{12}$, so $\\frac{11m}{12} = 50$ and $m = \\frac{600}{11} = 54\\frac{6}{11}$.`
      },
      {
        q: `Convert 64 inches to feet using a conversion factor. Why does $64 \\times 12$ give the wrong answer?`,
        a: `64 in = $\\frac{64}{12} = 5\\frac{1}{3}$ ft. Use the factor $\\frac{1 \\text{ ft}}{12 \\text{ in}}$, which equals 1. Multiplying $64 \\text{ in} \\cdot \\frac{1 \\text{ ft}}{12 \\text{ in}} = \\frac{64}{12}$ ft cancels the inches. Multiplying by $\\frac{12 \\text{ in}}{1 \\text{ ft}}$ gives 768 with units of "in²/ft". The wrong units flag the wrong direction.`
      },
      {
        q: `A medicine doses at 32 mL per kg of body weight. Scales show pounds. Convert mL/kg to mL/lb. One pound is about 0.4536 kg.`,
        a: `14.5 mL per lb. To cancel the kg in the denominator, place kg in the numerator of the factor: $\\frac{32 \\text{ mL}}{1 \\text{ kg}} \\cdot \\frac{0.4536 \\text{ kg}}{1 \\text{ lb}} \\approx 14.5 \\, \\frac{\\text{mL}}{\\text{lb}}$. The flipped factor $\\frac{1 \\text{ lb}}{0.4536 \\text{ kg}}$ would leave the kg uncancelled.`
      },
      {
        q: `On planet Ghaap, 2 Gheeps equal 3 Ghiips, 2 Ghiips equal 5 Ghoops, and 3 Ghoops equal 2 Ghuups. How many Ghuups in 7 Gheeps?`,
        a: `17.5 Ghuups. Chain the factors so each unit cancels: $7 \\text{ Gheeps} \\cdot \\frac{3 \\text{ Ghiips}}{2 \\text{ Gheeps}} \\cdot \\frac{5 \\text{ Ghoops}}{2 \\text{ Ghiips}} \\cdot \\frac{2 \\text{ Ghuups}}{3 \\text{ Ghoops}} = \\frac{7 \\cdot 3 \\cdot 5 \\cdot 2}{2 \\cdot 2 \\cdot 3} = 17.5$. Conversion factors need not involve the number 1.`
      },
      {
        q: `Avocado prices rise 20%, then rise another 25%. What is the total percent increase, and why is it not 45%?`,
        a: `50%, not 45%. Each change is a multiplication acting on the most recent price. $1.20 \\cdot 1.25 = 1.50$, so the final price is 1.50 times the original. The second 25% applies to the already-increased price, not the starting price. Adding percents only works when both rates apply to the same base, which is not the case in sequence.`
      },
      {
        q: `A 50% increase is undone by what percent decrease (not 50%)?`,
        a: `33⅓%. After a 50% increase, the price is 1.5 times the original. To return, divide by 1.5, which is multiplying by $\\frac{2}{3}$. That is a reduction of $\\frac{0.5x}{1.5x} = \\frac{1}{3} = 33\\frac{1}{3}\\%$ of the new price. Multiplicative changes are asymmetric: undoing a $k\\%$ rise needs a smaller-than-$k\\%$ cut.`
      },
      {
        q: `You need $450 after a 25% income tax. What pre-tax salary works? Use both an algebra route and a picture route.`,
        a: `$600. Algebra: after-tax pay is 75% of pre-tax, so $0.75 x = 450$, giving $x = 600$. Picture: split the pre-tax salary into four equal quarters. Tax takes one. The remaining three quarters equal $450, so one quarter equals $150, and the whole rectangle is $600.`
      },
      {
        q: `6% of 8th graders and 3% of 7th graders are in MATHCOUNTS. There are 1.5 times as many 8th graders as 7th. What percent of all students compete?`,
        a: `4.8%. All inputs are relative, so pick any 7th-grade headcount and the answer should not depend on it. Let $x$ = 7th graders, $1.5x$ = 8th graders. Participants: $0.03x + 0.06 \\cdot 1.5x = 0.12x$. Students: $2.5x$. Percent: $\\frac{0.12x}{2.5x} = 4.8\\%$. The $x$ cancels. That is the signature of a fully relative problem.`
      },
      {
        q: `180 mL of solution is 20% acid. Replace $x$ mL with pure (100%) acid to reach 30% acid. Find $x$.`,
        a: `$x = 22.5$ mL. Acid before: $0.20 \\cdot 180 = 36$ mL. Remove $x$ mL of 20% solution (losing $0.2x$ mL acid) and add $x$ mL of pure acid: total acid $= 36 - 0.2x + x = 36 + 0.8x$. Target: $0.30 \\cdot 180 = 54$ mL. Solve $36 + 0.8x = 54$ to get $x = 22.5$.`
      },
      {
        q: `If $a$ and $b^2$ are directly proportional, and $a = 5$ when $b = 9$, find $a$ when $b = 12$.`,
        a: `$a = \\frac{80}{9}$. "$a$ and $b^2$ are directly proportional" means $\\frac{a}{b^2} = k$, not $\\frac{a}{b} = k$. From $a = 5$, $b = 9$: $k = \\frac{5}{81}$. With $b = 12$: $a = (\\frac{5}{81}) \\cdot 144 = \\frac{80}{9}$. Read the proportion exactly as stated. The variable that gets the exponent keeps it.`
      },
      {
        q: `12 people clear a field in 18 hours. How many hours for 9 people?`,
        a: `24 hours. People · hours is constant (inverse proportion): $12 \\cdot 18 = 216$. With 9 people: $9 \\cdot t = 216$, so $t = 24$. Equivalently, 9 people are 3/4 of the original team, so they need 4/3 the time: $18 \\cdot \\frac{4}{3} = 24$.`
      },
      {
        q: `Prove that if $x$ and $y$ are inversely proportional, and $y$ and $z$ are inversely proportional, then $x$ and $z$ are directly proportional.`,
        a: `Given $xy = a$ and $yz = b$. Divide: $\\frac{xy}{yz} = \\frac{a}{b}$, so $\\frac{x}{z} = \\frac{a}{b}$. Since $a$ and $b$ are constants, $\\frac{x}{z}$ is a constant. That is the definition of direct proportion.`
      },
      {
        q: `A crew's wage is jointly proportional to the number of workers and the number of days. If 4 workers earn $960 in 3 days, what do 6 workers earn in 5 days?`,
        a: `$2400. Wage $= k \\cdot \\text{workers} \\cdot \\text{days}$. Find $k$ from the data: $k = \\frac{960}{4 \\cdot 3} = 80$ dollars per worker per day. Then $6$ workers over $5$ days earn $80 \\cdot 6 \\cdot 5 = 2400$.`
      },
      {
        q: `A quantity $x$ is jointly proportional to $y$ and $z$. You double $y$ and triple $z$. By what factor does $x$ change?`,
        a: `By a factor of 6. Since $x = kyz$, doubling $y$ multiplies $x$ by 2 and tripling $z$ multiplies it by 3. Together $2 \\cdot 3 = 6$, so $x$ becomes six times as large.`
      },
      {
        q: `Jack drives 30 mph to work and 45 mph home. The route is the same both ways. What is his average speed for the round trip?`,
        a: `36 mph. Let one-way distance $= x$. Total distance $= 2x$. Total time $= \\frac{x}{30} + \\frac{x}{45} = \\frac{5x}{90}$. Average speed $= \\frac{2x}{\\frac{5x}{90}} = 36$ mph. The arithmetic mean $\\frac{(30 + 45)}{2} = 37.5$ is wrong because the slower leg takes more time and weighs more in the true average. Closed form for two speeds over equal distances: harmonic mean $\\frac{2ab}{a+b}$.`
      },
      {
        q: `Sam paints a fence in 12 hours alone. Pippin paints it in 8 hours alone. Sam starts at 1 pm, Pippin joins at 3 pm. When do they finish?`,
        a: `7 pm. Sam's rate: $\\frac{1}{12}$ fence per hour. Pippin's rate: $\\frac{1}{8}$. By 3 pm Sam has done $\\frac{2}{12} = \\frac{1}{6}$, leaving $\\frac{5}{6}$. Combined rate: $\\frac{1}{12} + \\frac{1}{8} = \\frac{5}{24}$. Time to finish: $\\frac{5}{24} t = \\frac{5}{6}$, so $t = 4$. Rates add because both painters work in the same hour.`
      },
      {
        q: `Flo reads 1 page per minute starting at 1:00. Carl reads $\\frac{6}{5}$ pages per minute starting at 1:30. When does Carl catch Flo?`,
        a: `4:00 pm. By 1:30 Flo has a 30-page lead. Carl gains on her at $\\frac{6}{5} - 1 = \\frac{1}{5}$ page per minute. Time to close the gap: $30 \\div \\frac{1}{5} = 150$ minutes after 1:30, so 4:00 pm. Relative-rate framing skips tracking individual page counts.`
      },
      {
        q: `Two trains 60 miles apart approach at 20 mph each. A bee flies at 30 mph between them until they collide. How far does the bee fly?`,
        a: `45 miles. Do not track the bee. The trains close at $20 + 20 = 40$ mph and meet in $\\frac{60}{40} = 1.5$ hours. The bee flies for 1.5 hours at 30 mph: $30 \\cdot 1.5 = 45$ miles. The zig-zags never enter the calculation.`
      },
      {
        q: `Barry rows 5 mph in still water. The river flows 3 mph. He rows downstream from noon and returns home at 5 pm. When did he turn around?`,
        a: `1 pm. Downstream speed: $5 + 3 = 8$ mph. Upstream: $5 - 3 = 2$ mph. Same distance each way: $8 d = 2 u$, so $u = 4 d$. Total time: $d + u = 5$, so $d + 4 d = 5$, giving $d = 1$ hour. Noon + 1 hour = 1 pm.`
      },
      {
        q: `A man is 2/5 of the way through a tunnel when he hears a train coming from behind. Running back, he just reaches the entrance with the train. Running forward, he just reaches the far end with the train. The train moves at 60 mph. How fast is he?`,
        a: `12 mph. Let tunnel length be 1, train at distance $T$ from the entrance. Running back: $\\frac{\\frac{2}{5}}{v} = \\frac{T}{60}$. Running forward: $\\frac{\\frac{3}{5}}{v} = \\frac{T+1}{60}$. Subtract: $\\frac{\\frac{1}{5}}{v} = \\frac{1}{60}$, so $v = 12$ mph. The man's speed is exactly 1/5 the train's, independent of tunnel length or train distance.`
      }
    ],

    reference: {
      category: 'Quick Reference',
      title: 'Fractions, Ratios and Proportions',
      sections: [
        <>
          <h2>Fraction Equality and Comparison</h2>

          <div className="lrn-definition">
            <div className="lrn-definition-term">Cross-multiplication equality</div>
            <div className="lrn-definition-desc">
              <p>{`$$\\frac{a}{b} = \\frac{c}{d} \\iff ad = bc.$$`}</p>
            </div>
          </div>

          <div className="lrn-definition">
            <div className="lrn-definition-term">Common denominator</div>
            <div className="lrn-definition-desc">
              <p>Rewrite both fractions over the same denominator. Larger numerator wins.</p>
            </div>
          </div>

          <div className="lrn-definition">
            <div className="lrn-definition-term">Common numerator</div>
            <div className="lrn-definition-desc">
              <p>Rewrite both fractions with the same numerator. Smaller denominator wins.</p>
            </div>
          </div>

          <div className="lrn-definition">
            <div className="lrn-definition-term">Compare distance from 1</div>
            <div className="lrn-definition-desc">
              <p>
                When both fractions are close to 1, subtract each from 1 and compare the gaps. The
                smaller gap wins.
              </p>
            </div>
          </div>

          <h2>Fraction Addition</h2>

          <div className="lrn-definition">
            <div className="lrn-definition-term">Addition formula</div>
            <div className="lrn-definition-desc">
              <p>{`$$\\frac{a}{b} + \\frac{c}{d} = \\frac{ad + bc}{bd}.$$`}</p>
              <p>Always find a common denominator first.</p>
            </div>
          </div>

          <div className="lrn-definition">
            <div className="lrn-definition-term">Mediant (not a sum)</div>
            <div className="lrn-definition-desc">
              <p>
                {`$\\frac{a+c}{b+d}$`} lies strictly between {`$\\frac{a}{b}$`} and{' '}
                {`$\\frac{c}{d}$`} and is never equal to their sum. Use only in merging problems.
              </p>
            </div>
          </div>

          <h2>Neighbor Fractions</h2>

          <div className="lrn-definition">
            <div className="lrn-definition-term">Definition</div>
            <div className="lrn-definition-desc">
              <p>
                {`$\\frac{a}{b}$`} and {`$\\frac{c}{d}$`} are neighbor fractions when{' '}
                {`$ad - bc = \\pm 1$`}.
              </p>
            </div>
          </div>

          <table className="lrn-table">
            <thead>
              <tr>
                <th>Property</th>
                <th>Result</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Neither fraction simplifies</td>
                <td>Any common factor would have to divide {`$\\pm 1$`}, impossible.</td>
              </tr>
              <tr>
                <td>Mediant lies between</td>
                <td>{`$\\frac{a+c}{b+d}$`} sits strictly between, and is a neighbor to each.</td>
              </tr>
              <tr>
                <td>No simpler in-between</td>
                <td>No fraction with denominator less than {`$b+d$`} lies strictly between.</td>
              </tr>
            </tbody>
          </table>

          <h2>Powers</h2>

          <div className="lrn-definition">
            <div className="lrn-definition-term">Definition</div>
            <div className="lrn-definition-desc">
              <p>{`$$a^n = \\underbrace{a \\cdot a \\cdots a}_{n}.$$`}</p>
              <p>
                {`$a^0 = 1$`}, {`$a^{-n} = \\frac{1}{a^n}$`} (definitions, for {`$a \\neq 0$`}).
              </p>
            </div>
          </div>

          <div className="lrn-definition">
            <div className="lrn-definition-term">Product rule</div>
            <div className="lrn-definition-desc">
              <p>{`$$a^m \\cdot a^n = a^{m+n}, \\quad \\text{for all integers } m, n.$$`}</p>
            </div>
          </div>

          <div className="lrn-definition">
            <div className="lrn-definition-term">Power of a power</div>
            <div className="lrn-definition-desc">
              <p>{`$$(a^m)^n = a^{m \\cdot n}.$$`}</p>
            </div>
          </div>

          <table className="lrn-table">
            <thead>
              <tr>
                <th>Exponent</th>
                <th>Value</th>
                <th>Fraction form</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{`$2^7$`}</td>
                <td>128</td>
                <td></td>
              </tr>
              <tr>
                <td>{`$2^6$`}</td>
                <td>64</td>
                <td></td>
              </tr>
              <tr>
                <td>{`$2^5$`}</td>
                <td>32</td>
                <td></td>
              </tr>
              <tr>
                <td>{`$2^4$`}</td>
                <td>16</td>
                <td></td>
              </tr>
              <tr>
                <td>{`$2^3$`}</td>
                <td>8</td>
                <td></td>
              </tr>
              <tr>
                <td>{`$2^2$`}</td>
                <td>4</td>
                <td></td>
              </tr>
              <tr>
                <td>{`$2^1$`}</td>
                <td>2</td>
                <td></td>
              </tr>
              <tr>
                <td>{`$2^0$`}</td>
                <td>1</td>
                <td></td>
              </tr>
              <tr>
                <td>{`$2^{-1}$`}</td>
                <td>0.5</td>
                <td>{`$\\tfrac{1}{2}$`}</td>
              </tr>
              <tr>
                <td>{`$2^{-2}$`}</td>
                <td>0.25</td>
                <td>{`$\\tfrac{1}{4}$`}</td>
              </tr>
              <tr>
                <td>{`$2^{-3}$`}</td>
                <td>0.125</td>
                <td>{`$\\tfrac{1}{8}$`}</td>
              </tr>
            </tbody>
          </table>

          <h2>Scientific Notation: Large Numbers</h2>

          <table className="lrn-table">
            <thead>
              <tr>
                <th>Quantity</th>
                <th>Scientific notation</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Speed of light</td>
                <td>
                  {`$3 \\times 10^5$`} km/s = {`$3 \\times 10^8$`} m/s
                </td>
              </tr>
              <tr>
                <td>Earth radius</td>
                <td>{`$\\approx 6 \\times 10^6$`} m</td>
              </tr>
              <tr>
                <td>Earth–Moon distance</td>
                <td>{`$\\approx 4 \\times 10^8$`} m</td>
              </tr>
              <tr>
                <td>Earth–Sun distance</td>
                <td>{`$\\approx 1.5 \\times 10^{11}$`} m</td>
              </tr>
              <tr>
                <td>World population</td>
                <td>{`$\\approx 8 \\times 10^9$`}</td>
              </tr>
              <tr>
                <td>Human lifespan</td>
                <td>{`$\\approx 2 \\times 10^9$`} seconds</td>
              </tr>
            </tbody>
          </table>

          <p>"Kilo" in computing = {`$2^{10} = 1024$`}, not 1000. One kilobyte = 1024 bytes.</p>

          <h2>Scientific Notation: Small Numbers</h2>

          <table className="lrn-table">
            <thead>
              <tr>
                <th>Unit or quantity</th>
                <th>Value</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1 centimeter</td>
                <td>{`$10^{-2}$`} m</td>
              </tr>
              <tr>
                <td>1 millimeter</td>
                <td>{`$10^{-3}$`} m</td>
              </tr>
              <tr>
                <td>1 micrometer</td>
                <td>{`$10^{-6}$`} m</td>
              </tr>
              <tr>
                <td>1 nanometer</td>
                <td>{`$10^{-9}$`} m</td>
              </tr>
              <tr>
                <td>1 angstrom</td>
                <td>{`$10^{-10}$`} m</td>
              </tr>
              <tr>
                <td>Mass of water molecule</td>
                <td>{`$\\approx 3 \\times 10^{-23}$`} g</td>
              </tr>
              <tr>
                <td>Virus size</td>
                <td>
                  {`$\\approx 20$`} to {`$300 \\times 10^{-9}$`} m
                </td>
              </tr>
              <tr>
                <td>Proton radius</td>
                <td>{`$\\approx 10^{-13}$`} cm</td>
              </tr>
              <tr>
                <td>Wavelength of red light</td>
                <td>{`$\\approx 7 \\times 10^{-7}$`} m</td>
              </tr>
            </tbody>
          </table>

          <h2>Ratio</h2>

          <table className="lrn-table">
            <thead>
              <tr>
                <th>Type</th>
                <th>Notation</th>
                <th>Meaning</th>
                <th>Example</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Part-to-part</td>
                <td>green : red</td>
                <td>for every N green, M red</td>
                <td>2 green : 3 red</td>
              </tr>
              <tr>
                <td>Part-to-whole</td>
                <td>green : total</td>
                <td>green is N of every M</td>
                <td>2 green : 5 total</td>
              </tr>
            </tbody>
          </table>

          <div className="lrn-warning">
            <p>
              Mixing part-to-part and part-to-whole is the most common ratio error. Read the ratio
              in words before writing the equation.
            </p>
          </div>

          <h2>Conversion Factors</h2>

          <div className="lrn-definition">
            <div className="lrn-definition-term">Definition</div>
            <div className="lrn-definition-desc">
              <p>
                Any ratio equal to 1. Place the unit to remove in the denominator; it cancels
                algebraically.
              </p>
            </div>
          </div>

          <div className="lrn-definition">
            <div className="lrn-definition-term">Squared (area) units</div>
            <div className="lrn-definition-desc">
              <p>{`$$A \\text{ m}^2 \\cdot \\left(\\frac{3.28 \\text{ ft}}{1 \\text{ m}}\\right)^2.$$`}</p>
              <p>Apply the factor twice when converting square units.</p>
            </div>
          </div>

          <div className="lrn-definition">
            <div className="lrn-definition-term">Denominator unit</div>
            <div className="lrn-definition-desc">
              <p>
                To convert a unit in the denominator, place that unit in the numerator of the factor
                so it cancels.
              </p>
            </div>
          </div>

          <div className="lrn-definition">
            <div className="lrn-definition-term">Non-1 factors</div>
            <div className="lrn-definition-desc">
              <p>
                Factors do not have to involve 1: any equivalence (e.g. 2 Gheeps = 3 Ghiips) can be
                turned into a conversion ratio.
              </p>
            </div>
          </div>

          <h2>Percent</h2>

          <div className="lrn-definition">
            <div className="lrn-definition-term">Definition</div>
            <div className="lrn-definition-desc">
              <p>{`$$\\frac{a}{b} = \\frac{x}{100}, \\quad a = \\frac{x}{100} \\cdot b.$$`}</p>
            </div>
          </div>

          <div className="lrn-definition">
            <div className="lrn-definition-term">Increase by {`$k\\%$`}</div>
            <div className="lrn-definition-desc">
              <p>{`$$\\text{result} = x \\left(1 + \\tfrac{k}{100}\\right).$$`}</p>
            </div>
          </div>

          <div className="lrn-definition">
            <div className="lrn-definition-term">Decrease by {`$k\\%$`}</div>
            <div className="lrn-definition-desc">
              <p>{`$$\\text{result} = x \\left(1 - \\tfrac{k}{100}\\right).$$`}</p>
            </div>
          </div>

          <div className="lrn-definition">
            <div className="lrn-definition-term">Successive percentages</div>
            <div className="lrn-definition-desc">
              <p>Multiply factors. Never add percentages.</p>
            </div>
          </div>

          <table className="lrn-table">
            <thead>
              <tr>
                <th>Fraction</th>
                <th>Percent</th>
                <th>Decimal</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{`$\\tfrac{1}{2}$`}</td>
                <td>50%</td>
                <td>0.5</td>
              </tr>
              <tr>
                <td>{`$\\tfrac{1}{3}$`}</td>
                <td>33.3…%</td>
                <td>0.333…</td>
              </tr>
              <tr>
                <td>{`$\\tfrac{1}{4}$`}</td>
                <td>25%</td>
                <td>0.25</td>
              </tr>
              <tr>
                <td>{`$\\tfrac{1}{5}$`}</td>
                <td>20%</td>
                <td>0.2</td>
              </tr>
              <tr>
                <td>{`$\\tfrac{3}{4}$`}</td>
                <td>75%</td>
                <td>0.75</td>
              </tr>
              <tr>
                <td>{`$\\tfrac{5}{8}$`}</td>
                <td>62.5%</td>
                <td>0.625</td>
              </tr>
              <tr>
                <td>{`$\\tfrac{1}{8}$`}</td>
                <td>12.5%</td>
                <td>0.125</td>
              </tr>
            </tbody>
          </table>

          <h2>Direct Proportion</h2>

          <div className="lrn-definition">
            <div className="lrn-definition-term">Definition</div>
            <div className="lrn-definition-desc">
              <p>{`$$\\frac{x}{y} = k, \\quad x = k y.$$`}</p>
              <p>
                Higher-order form: {`$x$`} and {`$y^n$`} directly proportional means{' '}
                {`$\\frac{x}{y^n} = k$`}.
              </p>
            </div>
          </div>

          <h2>Inverse Proportion</h2>

          <div className="lrn-definition">
            <div className="lrn-definition-term">Definition</div>
            <div className="lrn-definition-desc">
              <p>{`$$x y = k.$$`}</p>
              <p>
                Higher-order form: {`$x^m$`} and {`$y^n$`} inversely proportional means{' '}
                {`$x^m y^n = k$`}.
              </p>
            </div>
          </div>

          <h2>Joint Proportion</h2>

          <div className="lrn-definition">
            <div className="lrn-definition-term">Definition</div>
            <div className="lrn-definition-desc">
              <p>{`$$x = k y z, \\quad \\frac{x}{y z} = k.$$`}</p>
            </div>
          </div>

          <div className="lrn-definition">
            <div className="lrn-definition-term">Finding the constant</div>
            <div className="lrn-definition-desc">
              <p>
                Plug in one known set of values to solve for {`$k$`}, then use {`$k$`} for any other
                set. Doubling one factor doubles {`$x$`}; doubling both quadruples it.
              </p>
            </div>
          </div>

          <h2>Rate, Time, Distance</h2>

          <div className="lrn-definition">
            <div className="lrn-definition-term">Rate equation</div>
            <div className="lrn-definition-desc">
              <p>{`$$d = r \\cdot t.$$`}</p>
            </div>
          </div>

          <div className="lrn-definition">
            <div className="lrn-definition-term">Work rates add</div>
            <div className="lrn-definition-desc">
              <p>{`$$R_{\\text{combined}} = R_1 + R_2 + \\cdots$$`}</p>
              <p>For workers operating simultaneously.</p>
            </div>
          </div>

          <div className="lrn-definition">
            <div className="lrn-definition-term">Harmonic mean (equal distances)</div>
            <div className="lrn-definition-desc">
              <p>{`$$\\bar{v} = \\frac{2ab}{a+b}.$$`}</p>
              <p>Use for two speeds over equal distances. Never the arithmetic mean.</p>
            </div>
          </div>

          <div className="lrn-definition">
            <div className="lrn-definition-term">Relative rate</div>
            <div className="lrn-definition-desc">
              <p>
                For chase and meeting problems, track the gap, not the positions. Closing rate = sum
                of approaching rates, or difference for chasing.
              </p>
            </div>
          </div>

          <div className="lrn-definition">
            <div className="lrn-definition-term">Moving medium</div>
            <div className="lrn-definition-desc">
              <p>
                Downstream speed = still-water speed + current. Upstream speed = still-water speed −
                current.
              </p>
            </div>
          </div>

          <table className="lrn-table">
            <thead>
              <tr>
                <th>Problem type</th>
                <th>Key move</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Equal-distance round trip</td>
                <td>Harmonic mean</td>
              </tr>
              <tr>
                <td>Workers combining</td>
                <td>Add rates</td>
              </tr>
              <tr>
                <td>Moving medium</td>
                <td>Add or subtract medium speed</td>
              </tr>
              <tr>
                <td>Chase / meeting</td>
                <td>Relative rate on the gap</td>
              </tr>
              <tr>
                <td>Bee and trains</td>
                <td>Find collision time, then multiply by bee speed</td>
              </tr>
              <tr>
                <td>Tunnel / no numbers</td>
                <td>Set simultaneous arrival in both directions, subtract</td>
              </tr>
            </tbody>
          </table>
        </>
      ]
    },

    customCss: `
      .MafsView { --mafs-bg: transparent; --mafs-fg: var(--ink-default); --mafs-line-color: var(--ink-hairline); }
      .fra .lrn-graph { margin: 2rem 0; }
    `
  }

  return config
}

// Export

export default function FractionsRatiosAndProportions() {
  const config = useConfig()
  return <LearningTemplate config={config} />
}

export function useFractionsRatiosConfig() {
  return useConfig()
}
