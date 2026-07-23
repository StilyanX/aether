import { LearningTemplate } from '../../../../components/learning/learning-template'
import { useVizColors } from '../../../../hooks/use-viz-colors'
import * as viz from './approximation-significant-figures-and-decimal-places-viz'

function useConfig() {
  const C = useVizColors()
  const config = {
    cssPrefix: 'asf',
    documentTitle: 'Approximation: Significant Figures and Decimal Places - AETHER',
    learning: {
      groupTitle: 'Decimals',
      category: 'Arithmetic · Decimals',
      title: 'Approximation: Significant Figures and Decimal Places',
      subtitle:
        'Every calculator gives too many digits. Two tools (significant figures and decimal places) let you choose exactly how precise your answer needs to be.',
      sections: [
        // == Section 0: What Approximation Is ==================================
        <>
          <h2>What Approximation Is</h2>
          <p>
            You use approximation every time you check a receipt, estimate a tip, or sanity-check a
            calculator answer. A calculator that divides 158 by 3.5 gives 45.142857142857. No
            speedometer reads to six decimal places. Reporting 45.142857{' '}
            {`$\\tfrac{\\text{km}}{\\text{h}}$`} is meaningless.
          </p>
          <p>
            Approximation means choosing a level of precision that fits the situation. You have two
            tools: significant figures (s.f.) and decimal places (d.p.). Both round a number, but
            they count from different starting points.
          </p>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              A calculator shows 45.142857 for a speed in {`$\\tfrac{\\text{km}}{\\text{h}}$`}. You
              need to report this to a sensible precision. Would you write 45 or 45.14 or 45.142857?
              Why? Write your answer before reading on.
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                45 is the most sensible choice. Everyday speeds are given to the nearest whole
                number. Showing more digits implies precision the original measurement does not
                have. Approximation removes the false precision.
              </p>
            </details>
          </div>
          <viz.ApproximationGap C={C} />
          <div className="lrn-insight">
            <span className="lrn-insight-label">KEY IDEA</span>
            <p>
              You can approximate in two ways: significant figures (s.f.) or decimal places (d.p.).
              Both use the same rounding rule. Look at the next digit after the last one you keep.
              Round up if it is 5 or more. Round down if it is less than 5.
            </p>
          </div>
          <viz.RoundingRuleSnap C={C} />
          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>Why does the rounding rule say to round up at exactly 5, not at 6?</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                The digit after your last kept position is equally likely to be 0, 1, 2, 3, 4, 5, 6,
                7, 8, or 9. The digits 5 through 9 form exactly half of those ten options. Rounding
                up at 5 means you round up exactly half the time and round down half the time. This
                keeps the average rounding error near zero across many calculations.
              </p>
            </details>
          </div>
          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>
              Every measurement has a level of accuracy built into the instrument. A ruler that
              reads to the nearest millimetre cannot give you results to the nearest micrometre.
            </p>
            <p>
              Reporting more digits than your instrument supports suggests false precision. Rounding
              to an appropriate level makes your result honest. The next two sections cover each
              tool in turn.
            </p>
          </div>
        </>,

        // == Section 1: Significant Figures ====================================
        <>
          <h2>Significant Figures</h2>
          <p>
            The significant figures of a number are the digits that carry meaning. Use significant
            figures for general-purpose rounding. It works for any size of number: whole numbers,
            decimals, and very small numbers alike.
          </p>
          <div className="lrn-definition">
            <span className="lrn-definition-term">Significant Figures</span>
            <div className="lrn-definition-desc">
              <p>
                Start counting at the first non-zero digit. Count every digit from there, including
                zeros between non-zero digits. Leading zeros (before the first non-zero digit) are
                not significant.
              </p>
              <p>
                <strong>Rounding rule:</strong> the same one-rule from above. Look at the digit
                after the last one you keep, and round up if it is 5 or more.
              </p>
            </div>
          </div>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              The number 0.002708 has how many significant figures in total? Which digit is the
              first significant figure? Write your answer before reading the worked example.
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                {`0.002708 has 4 significant figures: 2, 7, 0, 8. The first significant figure is the
                2 (in the thousandths place). The three leading zeros are not significant.
                They only show the position of the decimal point.`}
              </p>
            </details>
          </div>
          <h3>Worked Examples: Rounding to 3 Significant Figures</h3>
          <p>
            For each example: find the first significant figure, count three digits from there, then
            look at the next digit to decide whether to round up or keep.
          </p>
          <div className="lrn-steps">
            <ol className="lrn-list">
              <li>
                {`2.6582 (a lab measurement in grams) → first s.f. is 2. Keep 2, 6, 5. Next digit is 8 (≥ 5) → round up. Result: 2.66`}
              </li>
              <li>
                {`0.5142 → first s.f. is 5. Keep 5, 1, 4. Next digit is 2 (< 5) → keep. Result: 0.514`}
              </li>
              <li>
                {`84660 (a population count) → first s.f. is 8. Keep 8, 4, 6. Next digit is 6 (≥ 5) → round up the 6 to 7, replace remaining digits with zeros. Result: 84700`}
              </li>
              <li>
                {`0.04031 (a drug dosage in grams) → first s.f. is 4. Keep 4, 0, 3. Next digit is 1 (< 5) → keep. Result: 0.0403`}
              </li>
            </ol>
          </div>
          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Correct: 84660 to 3 s.f.</span>
              <p>
                {`Round up the 6 to 7. Replace the dropped digits with zeros to hold
                place value. Result: 84700 (eighty-four thousand, seven hundred).`}
              </p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Wrong: writing 847</span>
              <p>
                {`847 is eight hundred and forty-seven, not eighty-four thousand.
                Removing the placeholder zeros destroys the place value entirely.`}
              </p>
            </div>
          </div>
          <viz.SigFigHighlighter C={C} />
          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>
              In 0.04031, why does the zero between 4 and 3 count as a significant figure, while the
              two zeros before the 4 do not?
            </p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                The two leading zeros exist only to place the decimal point. They carry no
                information about the size of the non-zero digits. The zero between 4 and 3 sits
                inside the significant part of the number. It tells you there is nothing in that
                position, which is real information. Removing it would change the number from
                0.04031 to 0.0431.
              </p>
            </details>
          </div>
          <div className="lrn-faded">
            <div className="lrn-faded-phase">
              <span className="lrn-faded-label">COMPLETE EXAMPLE</span>
              <p>{`Round 50730 to 3 significant figures.`}</p>
              <ol className="lrn-list">
                <li>First s.f. is 5. Count three: 5, 0, 7.</li>
                <li>Next digit is 3 (in the tens place). 3 less than 5, so keep the 7.</li>
                <li>Replace the remaining digits with zeros to hold place value.</li>
                <li>Result: 50700.</li>
              </ol>
            </div>
            <div className="lrn-faded-phase lrn-faded-partial">
              <span className="lrn-faded-label">YOUR TURN: PARTIAL</span>
              <p>{`Round 0.000508 to 2 significant figures.`}</p>
              <ol className="lrn-list">
                <li>Find the first non-zero digit. It is the __ (in the __ place).</li>
                <li>Count two significant figures from there: __ and __.</li>
                <li>Look at the next digit to decide whether to round up or keep.</li>
              </ol>
            </div>
            <div className="lrn-faded-phase">
              <span className="lrn-faded-label">INDEPENDENT PRACTICE</span>
              <p>
                A news headline says a country has a population of 8,379,388,245. Round this to 4
                significant figures for the headline. Show every step.
              </p>
            </div>
          </div>
          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>
              Significant figures measure how much real information a number carries. A leading zero
              only shifts the decimal place. You could write 0.04031 as {`$4.031 \\times 10^{-2}$`}{' '}
              and those leading zeros vanish entirely.
            </p>
            <p>
              Interior zeros and trailing zeros after the decimal point carry genuine information
              about size and precision. Take 5.00: it has 3 significant figures, not 1. The two
              trailing zeros are significant because they state real precision. They say the value
              is known to the nearest hundredth, not just to the nearest whole number. So 5.00 (3
              s.f.) claims more precision than 5 (1 s.f.), even though both equal five.
            </p>
            <p>You can now round any number to a chosen number of significant figures.</p>
          </div>
          <viz.RoundingSnapDiagram C={C} />
        </>,

        // == Section 2: Decimal Places =========================================
        <>
          <h2>Decimal Places</h2>
          <p>
            Decimal places count the digits after the decimal point. It does not matter where the
            first non-zero digit falls. You always count from the decimal point itself. Use decimal
            places when the decimal part matters. Examples: currency (two decimal places),
            scientific measurements with a fixed unit, or any problem that says "give your answer to
            2 d.p."
          </p>
          <div className="lrn-definition">
            <span className="lrn-definition-term">Decimal Places</span>
            <div className="lrn-definition-desc">
              <p>
                Count the digits after the decimal point. The digit in the first position after the
                point is in the tenths column, the second is in the hundredths column, and so on.
              </p>
              <p>
                <strong>Rounding rule:</strong> same as for s.f. Look at the digit one position
                beyond your chosen precision. Round up if it is 5 or more.
              </p>
            </div>
          </div>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              Round 74.355 cm to 2 decimal places. The digit in position 3 after the decimal point
              is 5. Do you round up or keep? Predict before checking.
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                Round up. The third digit is 5, which meets the "5 or more" condition. 74.355 cm
                rounded to 2 d.p. is 74.36 cm.
              </p>
            </details>
          </div>
          <h3>Worked Examples: Rounding to 2 Decimal Places</h3>
          <div className="lrn-steps">
            <ol className="lrn-list">
              <li>
                {`8.358 dollars → keep 8.35. Next digit is 8 (≥ 5) → round up. Result: 8.36 dollars`}
              </li>
              <li>
                {`0.0328 metres → keep 0.03. Next digit is 2 (< 5) → keep. Result: 0.03 metres`}
              </li>
              <li>
                {`74.355 cm → keep 74.35. Next digit is 5 (≥ 5) → round up. Result: 74.36 cm`}
              </li>
            </ol>
          </div>
          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>
              {`0.0328 metres rounded to 2 d.p. gives 0.03 metres, not 0.033. Why does the 3 disappear?`}
            </p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                {`You keep only two digits after the decimal point. 0.0328 has 0 in the
                tenths place and 3 in the hundredths place. Those are the two kept digits:
                0.03. The 2 in the thousandths place is the deciding digit. It is less
                than 5, so the 3 stays. The 2, 8, and any further digits are all dropped.`}
              </p>
            </details>
          </div>
          <div className="lrn-faded">
            <div className="lrn-faded-phase">
              <span className="lrn-faded-label">COMPLETE EXAMPLE</span>
              <p>{`Round 8.358 dollars to 2 decimal places.`}</p>
              <ol className="lrn-list">
                <li>Keep two digits after the decimal point: 8.35.</li>
                <li>Next digit is 8 (in the thousandths place). 8 ≥ 5, so round up.</li>
                <li>Result: 8.36 dollars.</li>
              </ol>
            </div>
            <div className="lrn-faded-phase lrn-faded-partial">
              <span className="lrn-faded-label">YOUR TURN: PARTIAL</span>
              <p>{`Round 9.4951 to 2 decimal places.`}</p>
              <ol className="lrn-list">
                <li>Write the two digits after the decimal point: 9.__ __ .</li>
                <li>
                  The deciding digit is in position __ after the decimal point. Its value is __.
                </li>
                <li>Round up or keep? Result: __</li>
              </ol>
            </div>
            <div className="lrn-faded-phase">
              <span className="lrn-faded-label">INDEPENDENT PRACTICE</span>
              <p>
                Round 0.6749 metres to 2 decimal places. Show each step with the deciding digit
                clearly identified.
              </p>
            </div>
          </div>
          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Significant Figures</span>
              <p>
                {`Count from the first non-zero digit. 0.00312 to 2 s.f. = 0.0031
                (first s.f. is 3, second is 1, stops there).`}
              </p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Decimal Places</span>
              <p>
                {`Count from the decimal point. 0.00312 to 2 d.p. = 0.00
                (tenths = 0, hundredths = 0, so the 3 in thousandths gets dropped).`}
              </p>
            </div>
          </div>
          <viz.SigFigVsDecimalPlacesContrast C={C} />
          <div className="lrn-callout">
            <p>Always check which method the problem requests before rounding.</p>
          </div>
          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>
              Decimal places anchor to a fixed position (the decimal point). The result has a known
              maximum size for its last kept digit. That makes it natural for currency, where a cent
              is a cent regardless of how big the price is.
            </p>
            <p>
              Significant figures anchor to the size of the number itself. The result keeps the same
              number of meaningful digits regardless of scale. That makes it natural for scientific
              work, where you care about precision relative to the quantity, not relative to a fixed
              unit.
            </p>
            <p>You can now round any number to a chosen number of decimal places.</p>
          </div>
        </>,

        // == Section 3: Estimating =============================================
        <>
          <h2>Estimating</h2>
          <p>
            Estimating means rounding each number in a calculation to a convenient value (usually 1
            significant figure) to get a quick approximate answer without a calculator. Use
            estimating to check whether a calculator result is sensible, or when speed matters more
            than an exact answer.
          </p>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              {`19.2 × 49.1. Before rounding: is the true answer closer to 500, 1000, or 2000?
              Write your estimate, then check it against the worked example below.`}
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                {`Closer to 1000. Round 19.2 to 20 and 49.1 to 50: 20 × 50 = 1000.
                The exact answer is 19.2 × 49.1 = 942.72.`}
              </p>
            </details>
          </div>
          <h3>Worked Examples: Estimating by Rounding to 1 Significant Figure</h3>
          <div className="lrn-steps">
            <ol className="lrn-list">
              <li>{`9.7 × 3.1 ≈ 10 × 3 = 30 (exact: 30.07)`}</li>
              <li>{`81.4 km × 98.2 hours ≈ 80 × 100 = 8000 (exact: 7993.48)`}</li>
              <li>{`19.2 × 49.1 ≈ 20 × 50 = 1000 (exact: 942.72)`}</li>
              <li>{`102.7 ÷ 19.6 ≈ 100 ÷ 20 = 5 (exact: 5.239...)`}</li>
            </ol>
          </div>
          <viz.EstimationExample C={C} />
          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>
              In the division example, why does 102.7 round down to 100, while 19.6 rounds up to 20?
            </p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                {`Rounding to 1 s.f. keeps only the leading digit, replacing the rest
                with zeros. For 102.7: the first s.f. is 1, the next digit is 0 (< 5),
                so round down to 100. For 19.6: the first s.f. is 1, the next digit is
                9 (≥ 5), so round up to 20. The rule always looks at the digit
                immediately after the last kept digit.`}
              </p>
            </details>
          </div>
          <div className="lrn-faded">
            <div className="lrn-faded-phase">
              <span className="lrn-faded-label">COMPLETE EXAMPLE</span>
              <p>{`Estimate 6.8 × 4.2 by rounding each to 1 significant figure.`}</p>
              <ol className="lrn-list">
                <li>6.8 → first s.f. is 6, next digit is 8 (≥ 5) → round up → 7.</li>
                <li>4.2 → first s.f. is 4, next digit is 2 (less than 5) → keep → 4.</li>
                <li>Estimate: 7 × 4 = 28. Exact: 28.56.</li>
              </ol>
            </div>
            <div className="lrn-faded-phase lrn-faded-partial">
              <span className="lrn-faded-label">YOUR TURN: PARTIAL</span>
              <p>{`Estimate 81.4 × 98.2 by rounding each to 1 significant figure.`}</p>
              <ol className="lrn-list">
                <li>81.4 → first s.f. is __, next digit is __ → round to __.</li>
                <li>98.2 → first s.f. is __, next digit is __ → round to __.</li>
                <li>Estimate: __ × __ = __.</li>
              </ol>
            </div>
            <div className="lrn-faded-phase">
              <span className="lrn-faded-label">INDEPENDENT PRACTICE</span>
              <p>
                Estimate 387 × 49 by rounding each number to 1 significant figure. Then compare your
                estimate to the exact answer of 18963. How far off is it?
              </p>
            </div>
          </div>
          <div className="lrn-insight">
            <span className="lrn-insight-label">KEY IDEA</span>
            <p>
              Multiplying by a number greater than 1 makes the result bigger. Dividing by a number
              greater than 1 makes the result smaller. Use this as a quick sanity check: does the
              direction of the change make sense?
            </p>
          </div>
          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>
              Rounding to 1 s.f. gives numbers that are easy to multiply in your head. 20 × 50 is
              obvious; 19.2 × 49.1 requires a calculator. The estimate trades accuracy for speed.
            </p>
            <p>
              A later section gives you a precise way to measure how far off an estimate is, and
              thresholds for deciding when it is good enough.
            </p>
            <p>
              You can now estimate any product or quotient by rounding each number to 1 significant
              figure.
            </p>
          </div>
        </>,

        // == Section 4: Bounds of Accuracy =====================================
        <>
          <h2>Bounds of Accuracy</h2>
          <p>
            Every measurement rounded to a given level of accuracy has a range of possible true
            values. The lowest the true value could be is the lower bound. The highest it could be
            (without rounding up to the next level) is the upper bound.
          </p>
          <p>
            Use bounds of accuracy when a problem gives a rounded measurement and asks for the range
            of possible true values. Use them too when you need the largest or smallest possible
            result of a calculation.
          </p>
          <div className="lrn-definition">
            <span className="lrn-definition-term">Lower and Upper Bounds</span>
            <div className="lrn-definition-desc">
              <p>
                {`For a measurement rounded to the nearest unit $u$ (the symbol $\\leq$ means
                "less than or equal to"; $<$ means "strictly less than"):`}
              </p>
              <p>{`$$\\text{Lower bound} = \\text{measurement} - \\tfrac{u}{2}$$`}</p>
              <p>{`$$\\text{Upper bound} = \\text{measurement} + \\tfrac{u}{2}$$`}</p>
              <p>
                The upper bound is <strong>strict</strong> (the true value must be less than it, not
                equal to it). The notation is: lower bound {`$\\leq$`} true value {`$<$`} upper
                bound.
              </p>
              <p>
                <strong>When to use:</strong> any problem where a measurement is given to a stated
                level of accuracy and you need the range of true values.
              </p>
            </div>
          </div>
          <div className="lrn-insight">
            <span className="lrn-insight-label">FROM S.F. TO A ROUNDING UNIT</span>
            <p>
              Sometimes the accuracy is given as a number of significant figures, not a unit. To
              find the unit, look at the place value of the last significant digit. That place value
              is the rounding unit.
            </p>
            <ol className="lrn-list">
              <li>
                23000 to 2 s.f.: the last significant digit is the 3, sitting in the thousands
                place. So the unit is 1000, and the bounds use half of that (500).
              </li>
              <li>
                5.00 to 3 s.f.: the last significant digit is the second trailing zero, sitting in
                the hundredths place. So the unit is 0.01, and the bounds use half of that (0.005).
              </li>
            </ol>
          </div>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              A clock shows 12:00 to the nearest minute. At exactly what time would the display
              switch to 12:01? Write your reasoning before checking.
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                The display switches at 12:00:30 exactly. Any time from 11:59:30 up to (but not
                including) 12:00:30 rounds to 12:00. At 12:00:30 exactly, the time rounds up to
                12:01. This is the upper bound: strict, not included.
              </p>
            </details>
          </div>
          <h3>Worked Examples: Finding Bounds</h3>
          <div className="lrn-steps">
            <ol className="lrn-list">
              <li>
                {`Book length 22 cm (nearest 1 cm): lower = 22 − 0.5 = 21.5 cm, upper = 22 + 0.5 = 22.5 cm.`}
              </li>
              <li>
                {`Nail length 3.8 cm (nearest 0.1 cm): lower = 3.8 − 0.05 = 3.75 cm, upper = 3.8 + 0.05 = 3.85 cm.`}
              </li>
              <li>
                {`Lake width 4200 m (nearest 100 m): lower = 4200 − 50 = 4150 m, upper = 4200 + 50 = 4250 m.`}
              </li>
            </ol>
          </div>
          <viz.BoundsOfAccuracyInterval C={C} />
          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>
              Why is the upper bound written with a strict inequality ({`$<$`}) rather than{' '}
              {`$\\leq$`}, but the lower bound uses {`$\\leq$`}?
            </p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                {`A value exactly equal to the upper bound would round up to the next
                level of accuracy, not down to our rounded value. For example, a nail
                that is exactly 3.85 cm would round to 3.9 cm, not 3.8 cm. So the upper
                bound is excluded. A value exactly equal to the lower bound (3.75 cm)
                rounds up to 3.8 cm, so it is included.`}
              </p>
            </details>
          </div>
          <div className="lrn-callout">
            <p>
              <strong>Measurement error is not a mistake.</strong> Every physical measurement
              carries the limit its instrument allows. Bounds of accuracy describe this uncertainty.
              They do not mean someone did the measurement badly.
            </p>
          </div>
          <div className="lrn-faded">
            <div className="lrn-faded-phase">
              <span className="lrn-faded-label">COMPLETE EXAMPLE</span>
              <p>{`Find the bounds for a book measured as 22 cm to the nearest 1 cm.`}</p>
              <ol className="lrn-list">
                <li>Level of accuracy: 1 cm. Half: 0.5 cm.</li>
                <li>Lower bound: 22 − 0.5 = 21.5 cm.</li>
                <li>Upper bound: 22 + 0.5 = 22.5 cm.</li>
                <li>Notation: 21.5 ≤ true length less than 22.5 cm.</li>
              </ol>
            </div>
            <div className="lrn-faded-phase lrn-faded-partial">
              <span className="lrn-faded-label">YOUR TURN: PARTIAL</span>
              <p>{`Find the bounds for a road measured as 780 m to the nearest 10 m.`}</p>
              <ol className="lrn-list">
                <li>Level of accuracy: __ m. Half: __ m.</li>
                <li>Lower bound: 780 − __ = __ m.</li>
                <li>Upper bound: 780 + __ = __ m.</li>
              </ol>
            </div>
            <div className="lrn-faded-phase">
              <span className="lrn-faded-label">INDEPENDENT PRACTICE</span>
              <p>
                A wire is measured as 0.0345 kg to the nearest 0.0001 kg. Find the lower and upper
                bounds and write the inequality.
              </p>
            </div>
          </div>
          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>
              {`Half the level of accuracy is the maximum possible error. Any value further
              away would round to a different measurement. For rounding to the nearest unit
              $u$, every value in $[V - \\tfrac{u}{2},\\; V + \\tfrac{u}{2})$ rounds to $V$.`}
            </p>
            <p>This is not a convention. It follows directly from the definition of rounding.</p>
            <p>
              You can now find the lower and upper bounds of any rounded measurement, including when
              the accuracy is given in significant figures.
            </p>
          </div>
        </>,

        // == Section 5: Absolute and Relative Error ============================
        <>
          <h2>Absolute and Relative Error</h2>
          <p>
            You already met the idea of how far off an estimate is. Here you sharpen it into two
            precise tools. When you estimate and then find the true value, two numbers measure how
            wrong you were. The absolute error is the raw difference. The relative error puts that
            difference in context by comparing it to the true value.
          </p>
          <p>
            You need to know the true value to compute relative error. Use it to judge whether an
            approximation is good enough. An absolute error of 96 sounds large. But 96 out of 296 is
            a 32% error, which is too large. Ninety-six out of 7718 is about 1%, which is fine.
          </p>
          <div className="lrn-definition">
            <span className="lrn-definition-term">Absolute Error</span>
            <div className="lrn-definition-desc">
              <p>
                {`$$\\text{Absolute error} = |\\text{correct value} - \\text{estimated value}|$$`}
              </p>
              <p>
                The bars {`$|\\;|$`} mean "take the positive value, ignoring sign". Always positive.
                Measured in the same units as the quantity.
              </p>
              <p>
                <strong>When to use:</strong> when you need the raw size of the error in the
                original units.
              </p>
            </div>
          </div>
          <div className="lrn-definition">
            <span className="lrn-definition-term">Relative Error</span>
            <div className="lrn-definition-desc">
              <p>
                {`$$\\text{Relative error} = \\frac{\\text{absolute error}}{\\text{correct value}} \\times 100\\%$$`}
              </p>
              <p>
                Expressed as a percentage. Shows how large the error is compared to the true value.
              </p>
              <p>
                <strong>When to use:</strong> when judging whether an approximation is trustworthy.
                Under 5% is excellent. Between 5% and 10% is acceptable. Above 10% is too rough.
              </p>
            </div>
          </div>
          <viz.AccuracyThresholdStrip C={C} />
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              A wire's true length is 100.4 cm. You estimate 100 cm. Before calculating: is the
              relative error less than 1%, between 1 and 5%, or more than 5%?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                {`Less than 1%. Absolute error = |100.4 − 100| = 0.4 cm.
                Relative error = $\\tfrac{0.4}{100.4} \\times 100 \\approx 0.4\\%$. Well under 1%.`}
              </p>
            </details>
          </div>
          <h3>Worked Examples: Absolute and Relative Error</h3>
          <div className="lrn-steps">
            <ol className="lrn-list">
              <li>
                {`127 + 284 = 411. Estimate (nearest 100): 100 + 300 = 400.
                Absolute error = 11. Relative error = $\\tfrac{11}{411} \\approx 2.7\\%$. Under 5%: excellent.`}
              </li>
              <li>
                {`149 + 147 = 296. Estimate (nearest 100): 100 + 100 = 200.
                Absolute error = 96. Relative error = $\\tfrac{96}{296} \\approx 32\\%$. Above 10%: too rough.`}
              </li>
              <li>
                {`4257 + 3461 = 7718. Estimate (nearest 100): 4300 + 3500 = 7800.
                Absolute error = 82. Relative error = $\\tfrac{82}{7718} \\approx 1.1\\%$. Excellent.`}
              </li>
            </ol>
          </div>
          <viz.AbsoluteVsRelativeError C={C} />
          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>
              {`Example 1 and example 2 both round to the nearest 100, but example 1 gives
              a relative error of about 3% and example 2 gives 32%. What makes them so different?`}
            </p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                {`Rounding to the nearest 100 introduces an absolute error of at most 100.
                When the true answer is around 411, that error is a small fraction of the
                total. When the true answer is only 296 (itself a small number), an error
                of up to 100 is a large fraction of it. Rounding to the nearest 100 only
                gives a small relative error when the numbers involved are much larger than 100.`}
              </p>
            </details>
          </div>
          <div className="lrn-faded">
            <div className="lrn-faded-phase">
              <span className="lrn-faded-label">COMPLETE EXAMPLE</span>
              <p>{`4257 + 3461 = 7718. Estimate: 4300 + 3500 = 7800.`}</p>
              <ol className="lrn-list">
                <li>{`Absolute error: |7718 − 7800| = 82.`}</li>
                <li>{`Relative error: $\\tfrac{82}{7718} \\times 100 \\approx 1.1\\%$.`}</li>
                <li>
                  {`1.1% is under 5%, so the estimate is excellent for numbers in the thousands.`}
                </li>
              </ol>
            </div>
            <div className="lrn-faded-phase lrn-faded-partial">
              <span className="lrn-faded-label">YOUR TURN: PARTIAL</span>
              <p>{`Find the absolute and relative error: true value = 296, estimate = 300.`}</p>
              <ol className="lrn-list">
                <li>Absolute error: |296 − 300| = ?</li>
                <li>{`Relative error: $\\tfrac{?}{296} \\times 100 = ?\\%$.`}</li>
                <li>
                  Is this estimate excellent (under 5%), acceptable (5 to 10%), or too rough (above
                  10%)?
                </li>
              </ol>
            </div>
            <div className="lrn-faded-phase">
              <span className="lrn-faded-label">INDEPENDENT PRACTICE</span>
              <p>
                A shop's true daily takings are 482 dollars. A clerk estimates 500 dollars by
                rounding to the nearest 100. Find the absolute error and relative error. Is the
                estimate within 10%?
              </p>
            </div>
          </div>
          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Absolute Error</span>
              <p>
                The raw difference between true value and estimate. Same units as the quantity.
                Tells you the size of the gap, but not whether the gap is large or small relative to
                the quantity.
              </p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Relative Error</span>
              <p>
                Absolute error divided by the true value, expressed as a percentage. Puts the gap in
                context. Getting 2 wrong on a 3-question test is not the same as getting 2 wrong on
                a 15-question test.
              </p>
            </div>
          </div>
          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>
              {`Rounding two numbers to the nearest 100 introduces at most 50 of error
              in each. Combined, the absolute error is at most 100. If both numbers are
              at least 1000, their sum is at least 2000, so the relative error is at most
              $\\tfrac{100}{2000} = 5\\%$.`}
            </p>
            <p>
              {`If the numbers are only in the hundreds, their sum can be as small as 200,
              and the relative error can reach $\\tfrac{100}{200} = 50\\%$. The method
              that works for large numbers fails for small ones.`}
            </p>
          </div>
        </>,

        // == Section 6: Why Make Estimates? ====================================
        <>
          <h2>Why Make Estimates?</h2>
          <p>
            Precision is not always the goal. Three situations call for an approximate answer rather
            than an exact one.
          </p>
          <p>
            Knowing when to stop adding decimal places is as important as knowing how to round
            correctly.
          </p>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              The nearest star other than the Sun is about 4.3 light years away. Could you measure
              that distance more precisely? Should you? Write your reasoning.
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                You could in principle measure it more precisely, but astronomical distances at that
                scale are uncertain. The star moves, and the measurement method has limits. A figure
                like 4.3 light years is as precise as the data supports. More decimal places would
                imply false precision.
              </p>
            </details>
          </div>
          <div className="lrn-steps">
            <ol className="lrn-list">
              <li>
                <strong>Precision is impossible.</strong> The instrument fixes the limit of every
                physical measurement. The speed of light is the one exception: it is defined as
                exactly 299,792,458 {`$\\tfrac{\\text{m}}{\\text{s}}$`}, not measured. Every other
                quantity carries measurement uncertainty.
              </li>
              <li>
                <strong>Precision is unnecessary.</strong> An elevator rated for 10 people does not
                need the exact mass of each passenger. An estimate is safe and useful. Exact
                precision would add cost and complexity with no benefit.
              </li>
              <li>
                <strong>Precision is undesirable.</strong> A national debt of about 8.4 trillion
                dollars communicates scale instantly. The exact figure to the cent is harder to
                grasp and no more actionable.
              </li>
            </ol>
          </div>
          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>
              The speed of light is defined as 299,792,458 {`$\\tfrac{\\text{m}}{\\text{s}}$`}{' '}
              exactly. Why is its value exact while every measured quantity is not?
            </p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                In 1983, an international weights-and-measures body redefined the metre using the
                speed of light. Scientists no longer measure the speed. The agreement defines it. So
                its value is exact by definition, not by instrument precision. Scientists determine
                every other physical constant through measurement, so each one always has some
                uncertainty.
              </p>
            </details>
          </div>
          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>
              Approximation is not a failure of precision. It is a deliberate choice. The right
              level of precision is the one that serves the purpose.
            </p>
          </div>
        </>
      ]
    },

    practice: [
      // Interleaved across all concepts: s.f., d.p., estimating, bounds, error, rationale.
      {
        q: `Round 2.6582 to 3 significant figures.`,
        a: `First s.f. is 2. Three s.f.: 2, 6, 5. Next digit is 8 (≥ 5), so round up the 5 to 6. Result: 2.66. The deciding digit (8) pushes the last kept digit up by one.`
      },
      {
        q: `Round 8.358 dollars to 2 decimal places.`,
        a: `Keep two digits after the decimal point: 8.35. Next digit is 8 (≥ 5), so round up to 8.36 dollars. The deciding digit (8) is in the third decimal place.`
      },
      {
        q: `Estimate 9.7 × 3.1 by rounding each to 1 significant figure.`,
        a: `9.7 rounds to 10 (next digit 7 ≥ 5). 3.1 rounds to 3 (next digit 1 < 5). Estimate: 10 × 3 = 30. Exact answer: 30.07. The estimate is within 0.1%: excellent.`
      },
      {
        q: `A book measures 22 cm to the nearest centimetre. State the lower and upper bounds of its true length.`,
        a: `Level of accuracy: 1 cm. Half: 0.5 cm. Lower bound: 22 − 0.5 = 21.5 cm. Upper bound: 22 + 0.5 = 22.5 cm. The true length satisfies 21.5 ≤ length < 22.5.`
      },
      {
        q: `True value: 411. Estimate: 400. Find the absolute error and relative error.`,
        a: `Absolute error: |411 − 400| = 11. Relative error: (11 ÷ 411) × 100 ≈ 2.7%. Under 5%: this estimate is excellent.`
      },
      {
        q: `A calculator shows 45.142857 for a speed in kilometres per hour. Round this to 3 significant figures. Show each step.`,
        a: `The first s.f. is 4 (in the tens place). Count three: 4, 5, 1. The next digit is 4 (< 5), so round down. Result: 45.1 kilometres per hour. Three significant figures keeps the answer meaningful without false precision.`
      },
      {
        q: `Name three situations where an approximate answer is better than an exact one.`,
        a: `First: precision is impossible. Every instrument has limits, so exact values are unachievable. Second: precision is unnecessary. An elevator capacity label does not need exact passenger masses. Third: precision is undesirable. A national debt expressed to the nearest cent is harder to communicate than "about 8.4 trillion".`
      },
      {
        q: `Round 0.0328 metres to 2 decimal places.`,
        a: `Keep two digits after the decimal point: 0.03. The next digit is 2 (< 5), so keep. Result: 0.03 metres. The 3 in the thousandths place and beyond are all discarded.`
      },
      {
        q: `(Transfer) A student rounds 0.04031 to 2 s.f. and gets 0.04. Another rounds to 2 d.p. and gets 0.04. Are these the same result for the same reason?`,
        a: `They give the same number but for different reasons. To 2 s.f.: first s.f. is 4, second s.f. is 0 (interior zero counts). Next digit is 3 (< 5), so keep. Result: 0.040. To 2 d.p.: keep tenths (0) and hundredths (4). Result: 0.04. The s.f. result records precision to 2 s.f.; the trailing zero is significant. They look identical in decimal form but carry different precision claims.`
      },
      {
        q: `A road is measured as 780 m to the nearest 10 m. Find the bounds.`,
        a: `Level of accuracy: 10 m. Half: 5 m. Lower bound: 780 − 5 = 775 m. Upper bound: 780 + 5 = 785 m. True length satisfies 775 ≤ length < 785.`
      },
      {
        q: `Estimate 81.4 × 98.2 by rounding each to 1 significant figure.`,
        a: `81.4 rounds to 80 (next digit 1 < 5). 98.2 rounds to 100 (next digit 8 ≥ 5). Estimate: 80 × 100 = 8000. Exact: 7993.48. The estimate is within 0.1%: excellent.`
      },
      {
        q: `Round 84660 to 3 significant figures.`,
        a: `First s.f. is 8. Three s.f.: 8, 4, 6. Next digit is 6 (≥ 5), so round up the 6 to 7 and replace remaining digits with zeros to hold place value. Result: 84700. Writing 847 would be wrong because it loses the place value entirely.`
      },
      {
        q: `True value: 296. Estimate: 200. Find the absolute error and relative error. Is this estimate trustworthy?`,
        a: `Absolute error: |296 − 200| = 96. Relative error: (96 ÷ 296) × 100 ≈ 32%. 32% is above 10%, so this estimate is too rough. Rounding numbers in the hundreds to the nearest hundred produces a large relative error.`
      },
      {
        q: `(Transfer) Currency must be given to 2 decimal places. A total is computed as 12.7349 dollars. What is the correct amount to charge?`,
        a: `Keep two decimal places: 12.73. The next digit is 4 (< 5), so round down. Result: 12.73 dollars. Using more decimal places would imply a precision in currency that does not exist in practice.`
      },
      {
        q: `(Transfer) A calculator gives 198 × 32 = 6336. Use estimation to check this is reasonable.`,
        a: `Round: 200 × 30 = 6000. The estimate is 6000; the calculator gives 6336. The difference is 336, which is about 5% of 6336. The answer is reasonable. If the calculator had given 63360, the estimate would immediately flag the error.`
      },
      {
        q: `(Self-explain) A lorry's mass is recorded as 23000 kg, given to 2 significant figures. Find the bounds and explain why the level of accuracy is 1000 kg.`,
        a: `To 2 s.f., 23000 is rounded to the nearest 1000. The first s.f. is 2 and the second is 3. The remaining digits are zeros that hold place value. Level of accuracy: 1000 kg. Half: 500 kg. Lower bound: 22500 kg. Upper bound: 23500 kg. The 2 s.f. rounding makes the thousands digit the last significant one, so the uncertainty is ±500 kg.`
      },
      {
        q: `How many significant figures does 0.04031 have? Name the first significant figure.`,
        a: `Four significant figures. The first s.f. is the digit 4, which sits in the hundredths place. The two leading zeros before it are not significant. They only position the decimal point.`
      },
      {
        q: `(Transfer) Two lengths are each measured to the nearest centimetre: 8 cm and 5 cm. Find the maximum possible combined length.`,
        a: `Upper bound of the first length: 8 + 0.5 = 8.5 cm. Upper bound of the second: 5 + 0.5 = 5.5 cm. Maximum combined length: 8.5 + 5.5 = 14 cm. The true combined length is strictly less than 14 cm (since both upper bounds are strict).`
      },
      {
        q: `(Self-explain) A student rounds 74.355 cm to 2 d.p. and gets 74.35 cm. Identify and fix the error.`,
        a: `The student ignored the third decimal digit (5). The rule says look at the digit immediately after the last kept digit. The third decimal place is 5 (≥ 5), so round up the second decimal digit from 5 to 6. Correct answer: 74.36 cm.`
      },
      {
        q: `(Predict) Jasper plans a 1200 km round trip. His car does 4 km per litre. Petrol costs 1.52 pounds per litre. Estimate his petrol cost.`,
        a: `Litres needed: 1200 ÷ 4 = 300 litres. Round 1.52 to 1.50. Cost: 300 × 1.50 = 450 pounds. Exact: 300 × 1.52 = 456 pounds. The estimate is within 1.3%: excellent. Always check whether your rounded figures are reasonable before multiplying.`
      },
      {
        q: `(Transfer) A scientist measures the diameter of a coin as 2.4 cm to the nearest 0.1 cm. What range of true diameters is consistent with this measurement?`,
        a: `Level of accuracy: 0.1 cm. Half: 0.05 cm. Lower bound: 2.4 − 0.05 = 2.35 cm. Upper bound: 2.4 + 0.05 = 2.45 cm. True diameter satisfies 2.35 ≤ d < 2.45 cm. Any coin from 2.35 cm up to (but not including) 2.45 cm would round to 2.4 cm at this precision.`
      },
      {
        q: `(Predict) Before calculating: if a clock shows 12:05 to the nearest minute, what are its bounds?`,
        a: `Level of accuracy: 1 minute. Half: 30 seconds. Lower bound: 12:04:30. Upper bound: 12:05:30. Any true time from 12:04:30 up to (not including) 12:05:30 rounds to 12:05. The upper bound is strict.`
      },
      {
        q: `(Elaborate) Why does rounding 0.00312 to 2 d.p. give 0.00 while rounding to 2 s.f. gives 0.0031?`,
        a: `Decimal places count from the decimal point. The first two positions after the decimal point are tenths (0) and hundredths (0). Both are zero, so 2 d.p. gives 0.00. Significant figures start at the first non-zero digit, which is the 3 in the thousandths place. Two s.f. keeps 3 and 1, giving 0.0031. The two methods diverge dramatically for numbers whose first non-zero digit is far from the decimal point.`
      },
      {
        q: `(Transfer) A stadium's true attendance is 41,200 people. A reporter writes "about 41 thousand". Find the absolute error and relative error of the reported figure.`,
        a: `Absolute error: |41,200 − 41,000| = 200. Relative error: (200 ÷ 41,200) × 100 ≈ 0.5%. The rounded headline figure has a relative error well under 1%: excellent for communicating scale without false precision.`
      },
      {
        q: `(Transfer) A factory claims a wire is 5.00 mm thick to 3 s.f. State the bounds on its true thickness.`,
        a: `To 3 s.f., 5.00 is rounded to the nearest 0.01 mm. Level of accuracy: 0.01 mm. Half: 0.005 mm. Lower bound: 5.00 − 0.005 = 4.995 mm. Upper bound: 5.00 + 0.005 = 5.005 mm. True thickness satisfies 4.995 ≤ t < 5.005 mm. The trailing zeros are significant: they state precision, not decoration.`
      },
      {
        q: `(Predict) The speed of light is 299,792,458 metres per second exactly. Why is this the only completely precise physical constant?`,
        a: `In 1983, an international weights-and-measures body redefined the metre using the speed of light. Scientists no longer measure the speed. The agreement defines it. So it cannot carry measurement uncertainty. Scientists determine every other physical constant through measurement, so each carries uncertainty. The speed of light is exact by definition, not by instrument precision.`
      },
      {
        q: `(Transfer) A baker estimates that 14 customers × 3.20 dollars each gives about 45 dollars in sales. The exact figure is 14 × 3.20 = 44.80 dollars. Find the relative error of the estimate.`,
        a: `Absolute error: |44.80 − 45| = 0.20 dollars. Relative error: (0.20 ÷ 44.80) × 100 ≈ 0.45%. The estimate is excellent. The relative error is well below the 5% threshold.`
      },
      {
        q: `(Elaborate) Explain why rounding to the nearest 100 works for sums in the thousands but not for sums in the hundreds.`,
        a: `Rounding two numbers to the nearest 100 introduces at most 100 of combined absolute error. For numbers in the thousands, the sum is at least 2000. The relative error is at most 100 ÷ 2000 = 5%, which is acceptable. For numbers in the hundreds, the sum can be as small as 200. The relative error can reach 100 ÷ 200 = 50%, which is far too large. The same absolute error becomes a much larger relative error when the true value is smaller.`
      },
      {
        q: `(Transfer) Estimate 58 × 261 by rounding each to 2 significant figures.`,
        a: `58 is already 2 s.f. 261 rounds to 260 (next digit 1 < 5). Estimate: 58 × 260 = 15080. Exact: 58 × 261 = 15138. Absolute error: 58. Relative error: (58 ÷ 15138) × 100 ≈ 0.4%. The 2 s.f. estimate is more accurate than 1 s.f. would have been, but harder to do in your head.`
      },
      {
        q: `(Self-explain) A student reports the mass of an apple as 42.8734 g after measuring it with a kitchen scale that reads to the nearest gram. What is wrong with this report?`,
        a: `The kitchen scale reads to the nearest gram, so only whole grams are meaningful. The result should be 43 g. Reporting 42.8734 g implies a precision of 0.0001 g, which the instrument cannot provide. The extra decimal places are false precision: they suggest accuracy the measurement does not have.`
      }
    ],

    reference: {
      category: 'Quick Reference',
      title: 'Approximation: Significant Figures and Decimal Places',
      sections: [
        <>
          <h2>Rounding Rule</h2>
          <div className="lrn-insight">
            <span className="lrn-insight-label">THE ONE RULE</span>
            <p>
              Look at the digit immediately after the last digit you keep. If it is 5 or more, round
              up the last kept digit by 1. If it is less than 5, leave the last kept digit
              unchanged.
            </p>
          </div>
          <h2>Significant Figures</h2>
          <div className="lrn-definition">
            <span className="lrn-definition-term">Counting Significant Figures</span>
            <div className="lrn-definition-desc">
              <p>
                Start at the first non-zero digit. Count every digit from there, including interior
                zeros. Leading zeros are never significant.
              </p>
              <p>
                <strong>When to use:</strong> general-purpose rounding, scientific notation, and any
                situation where the size of the number varies widely.
              </p>
            </div>
          </div>
          <div className="table-wrapper">
            <table>
              <thead>
                <tr>
                  <th>Number</th>
                  <th>To 3 s.f.</th>
                  <th>First s.f.</th>
                  <th>Deciding digit</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>2.6582</td>
                  <td>2.66</td>
                  <td>2</td>
                  <td>8 (round up)</td>
                </tr>
                <tr>
                  <td>0.5142</td>
                  <td>0.514</td>
                  <td>5</td>
                  <td>2 (keep)</td>
                </tr>
                <tr>
                  <td>84660</td>
                  <td>84700</td>
                  <td>8</td>
                  <td>6 (round up)</td>
                </tr>
                <tr>
                  <td>0.04031</td>
                  <td>0.0403</td>
                  <td>4</td>
                  <td>1 (keep)</td>
                </tr>
              </tbody>
            </table>
          </div>
          <h2>Decimal Places</h2>
          <div className="lrn-definition">
            <span className="lrn-definition-term">Counting Decimal Places</span>
            <div className="lrn-definition-desc">
              <p>
                Count the digits after the decimal point. The first position is tenths, the second
                hundredths, and so on. Leading zeros after the decimal point do count toward the
                d.p. total.
              </p>
              <p>
                <strong>When to use:</strong> currency, measurements to a fixed unit, or any problem
                that specifies "give to N d.p."
              </p>
            </div>
          </div>
          <div className="table-wrapper">
            <table>
              <thead>
                <tr>
                  <th>Number</th>
                  <th>To 2 d.p.</th>
                  <th>Deciding digit</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>8.358</td>
                  <td>8.36</td>
                  <td>8 (round up)</td>
                </tr>
                <tr>
                  <td>0.0328</td>
                  <td>0.03</td>
                  <td>2 (keep)</td>
                </tr>
                <tr>
                  <td>74.355</td>
                  <td>74.36</td>
                  <td>5 (round up)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </>,
        <>
          <h2>Bounds of Accuracy</h2>
          <div className="lrn-definition">
            <span className="lrn-definition-term">Lower and Upper Bounds</span>
            <div className="lrn-definition-desc">
              <p>{`For measurement $V$ rounded to nearest unit $u$:`}</p>
              <p>{`$$\\text{Lower bound} = V - \\tfrac{u}{2}$$`}</p>
              <p>{`$$\\text{Upper bound} = V + \\tfrac{u}{2}$$`}</p>
              <p>
                {`Notation: lower $\\leq$ true value $<$ upper (the symbol $\\leq$ means "less
                than or equal to"; $<$ means "strictly less than"). Upper is strict.`}
              </p>
              <p>
                <strong>When to use:</strong> any problem giving a rounded measurement and asking
                for the range of possible true values.
              </p>
            </div>
          </div>
          <div className="table-wrapper">
            <table>
              <thead>
                <tr>
                  <th>Measurement</th>
                  <th>Accuracy</th>
                  <th>Lower bound</th>
                  <th>Upper bound</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>22 cm</td>
                  <td>nearest 1 cm</td>
                  <td>21.5 cm</td>
                  <td>22.5 cm</td>
                </tr>
                <tr>
                  <td>3.8 cm</td>
                  <td>nearest 0.1 cm</td>
                  <td>3.75 cm</td>
                  <td>3.85 cm</td>
                </tr>
                <tr>
                  <td>4200 m</td>
                  <td>nearest 100 m</td>
                  <td>4150 m</td>
                  <td>4250 m</td>
                </tr>
                <tr>
                  <td>780 m</td>
                  <td>nearest 10 m</td>
                  <td>775 m</td>
                  <td>785 m</td>
                </tr>
              </tbody>
            </table>
          </div>
          <h2>Estimating Procedure</h2>
          <div className="lrn-steps">
            <ol className="lrn-list">
              <li>Round each number to 1 significant figure.</li>
              <li>Carry out the calculation with the rounded numbers.</li>
              <li>
                Check the relative error if needed: under 5% is excellent, 5 to 10% is acceptable,
                above 10% is too rough.
              </li>
            </ol>
          </div>
          <h2>Absolute and Relative Error</h2>
          <div className="lrn-definition">
            <span className="lrn-definition-term">Absolute Error</span>
            <div className="lrn-definition-desc">
              <p>{`$$\\text{Absolute error} = |\\text{correct value} - \\text{estimate}|$$`}</p>
              <p>The bars {`$|\\;|$`} mean "take the positive value". Always positive.</p>
              <p>
                <strong>When to use:</strong> when you need the raw gap in the original units,
                without context about the scale of the quantity.
              </p>
            </div>
          </div>
          <div className="lrn-definition">
            <span className="lrn-definition-term">Relative Error</span>
            <div className="lrn-definition-desc">
              <p>
                {`$$\\text{Relative error} = \\frac{\\text{absolute error}}{\\text{correct value}} \\times 100\\%$$`}
              </p>
              <p>
                <strong>When to use:</strong> when judging whether an approximation is good enough.
                Under 5%: excellent. Between 5% and 10%: acceptable. Above 10%: too rough.
              </p>
            </div>
          </div>
          <div className="lrn-callout">
            <p>
              <strong>
                Rounding to the nearest 100 works for sums in the thousands (relative error at most
                5%) but fails for sums in the hundreds (up to 50%).
              </strong>
            </p>
            <p>
              The maximum absolute error from rounding two numbers to the nearest 100 is 100. Divide
              by the minimum possible sum to get the maximum relative error.
            </p>
          </div>
          <h2>When to Choose an Estimate</h2>
          <div className="lrn-steps">
            <ol className="lrn-list">
              <li>
                <strong>Precision is impossible.</strong> The instrument sets the limit. No
                measurement can exceed its instrument's precision.
              </li>
              <li>
                <strong>Precision is unnecessary.</strong> Exact values add no benefit when an
                approximate answer serves the purpose.
              </li>
              <li>
                <strong>Precision is undesirable.</strong> Exact figures can hide scale and make
                communication harder.
              </li>
            </ol>
          </div>
          <h2>When to Use Each Method</h2>
          <div className="table-wrapper">
            <table>
              <thead>
                <tr>
                  <th>Method</th>
                  <th>Counts from</th>
                  <th>Best for</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Significant figures</td>
                  <td>First non-zero digit</td>
                  <td>General rounding, scientific notation, any number size</td>
                </tr>
                <tr>
                  <td>Decimal places</td>
                  <td>Decimal point</td>
                  <td>Currency, fixed-unit measurements, specified precision</td>
                </tr>
                <tr>
                  <td>Bounds of accuracy</td>
                  <td>Rounded measurement</td>
                  <td>Finding range of true values for a rounded measurement</td>
                </tr>
                <tr>
                  <td>Relative error</td>
                  <td>Correct value</td>
                  <td>Judging whether an approximation is trustworthy</td>
                </tr>
              </tbody>
            </table>
          </div>
        </>
      ]
    },

    customCss:
      '.MafsView { --mafs-bg: transparent; --mafs-fg: var(--text-primary); --mafs-line-color: var(--border-subtle); }'
  }
  return config
}

export default function ApproximationSignificantFiguresAndDecimalPlaces() {
  const config = useConfig()
  return <LearningTemplate config={config} />
}
