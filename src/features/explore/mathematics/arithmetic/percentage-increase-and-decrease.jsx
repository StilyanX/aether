import { LearningTemplate } from '../../../../components/learning/learning-template'
import { useVizColors } from '../../../../hooks/use-viz-colors'
import * as viz from './percentage-increase-and-decrease-viz'

function useConfig() {
  const C = useVizColors()
  const config = {
    cssPrefix: 'pid',
    documentTitle: 'Percentage Increase and Decrease - AETHER',
    learning: {
      groupTitle: 'Percentages',
      category: 'Arithmetic · Percentages',
      title: 'Percentage Increase and Decrease',
      subtitle:
        'Check whether a sale price is a real deal, spot a genuine pay rise, and see through misleading statistics. One rule covers all of it: divide by the original value.',
      sections: [
        // == Section 0: Why percentage change matters ==========================
        <>
          <h2>Why Percentage Change Matters</h2>
          <p>
            An absolute change of 70 dollars sounds the same in two cases. But it is not. On a 7 000
            dollar car, 70 dollars is a tiny change. On a 100 dollar jacket, 70 dollars is a massive
            change.
          </p>
          <p>
            Absolute differences mislead. Percentage change fixes this. It measures the change
            against the original value. Use it to compare two changes fairly. Use it to find how big
            a change is next to its starting point.
          </p>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              A car costs 7 000 dollars. A jacket costs 100 dollars. Both prices rise by 70 dollars.
              Which rise matters more? Write your answer before reading on.
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                The jacket. Seventy dollars on a 7 000 dollar car is only 1%. Seventy dollars on a
                100 dollar jacket is 70%. The absolute amount is identical, but the impact on the
                jacket is seventy times larger relative to its price.
              </p>
            </details>
          </div>
          <viz.SameIncreaseDifferentBase C={C} />
          <div className="lrn-insight">
            <span className="lrn-insight-label">KEY IDEA</span>
            <p>
              Percentage change always divides by the <strong>original</strong> value, not the new
              value. The original is the base. It is 100% of itself. Dividing by it answers one
              question: what fraction of the starting point is the change?
            </p>
          </div>
          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>
              A percentage is just a fraction over 100. Percentage change asks what fraction of the
              original the change is.
            </p>
            <p>
              Dividing by the new value answers a different question. It asks what fraction of the
              new total the change is. That is valid math, but it is not what percentage change
              means. The base is always the original.
            </p>
          </div>
        </>,

        // == Section 1: Percentage increase =====================================
        <>
          <h2>Percentage Increase</h2>
          <p>
            A percentage increase tells you how much a value grew, measured as a fraction of the
            original. The formula has two parts: find the actual increase, then express it as a
            percentage of where you started.
          </p>
          <p>
            Use it whenever a problem gives you an original value and a higher new value, and asks
            how much it rose as a percentage.
          </p>
          <div className="lrn-definition">
            <span className="lrn-definition-term">Percentage Increase Formula</span>
            <div className="lrn-definition-desc">
              <p>{`$$\\text{Percentage increase} = \\frac{\\text{actual increase}}{\\text{original value}} \\times 100$$`}</p>
              <p>
                Actual increase = new value minus original value. Always divide by the original,
                never the new value.
              </p>
            </div>
          </div>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              A car price rises from 6 400 dollars to 6 800 dollars. Before reading the worked
              example: estimate the percentage increase. Is it closer to 5%, 10%, or 25%?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                {`Closer to 5%. The actual increase is 400 dollars. $\\tfrac{400}{6400} \\times 100 = 6.25\\%$, which is $6\\tfrac{1}{4}\\%$. A 10% rise would have needed an increase of 640 dollars. A 25% rise would have needed 1 600 dollars.`}
              </p>
            </details>
          </div>
          <h3>Worked Example: Car Price</h3>
          <p>
            A car price rises from 6 400 dollars to 6 800 dollars. Find the percentage increase.
          </p>
          <div className="lrn-steps">
            <ol className="lrn-list">
              <li>{`Find the actual increase: $6800 - 6400 = 400$ dollars.`}</li>
              <li>{`Divide by the original value: $\\dfrac{400}{6400}$.`}</li>
              <li>{`Multiply by 100: $\\dfrac{400}{6400} \\times 100 = 6\\tfrac{1}{4}\\%$.`}</li>
            </ol>
          </div>
          <viz.PercentageIncreaseFormula C={C} />
          <p>
            Percentage increases appear in everyday life. A landlord raises your rent from 900
            dollars to 990 dollars per month. A company announces that its earnings grew from 2
            million dollars to 2.3 million dollars. A country reports that its population grew from
            50 million to 53.5 million. Each of these uses the same formula: divide the actual
            increase by the original, then multiply by 100.
          </p>
          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>
              {`The original value is 100% of itself. The increase adds some fraction on top of that 100%. So the percentage increase equals $\\tfrac{\\text{increase}}{\\text{original}} \\times 100$.`}
            </p>
            <p>
              {`If the car had stayed at 6 400, the increase would be 0%. If it doubled to 12 800, the increase would be 100%.`}
            </p>
            <p>The formula puts any increase on a 0 to 100 scale relative to the starting point.</p>
          </div>
        </>,

        // == Section 2: Percentage decrease =====================================
        <>
          <h2>Percentage Decrease</h2>
          <p>
            Percentage decrease has the same structure as percentage increase. You find how much a
            value fell, then express that fall as a fraction of the original. The only difference is
            the direction: you subtract new from original instead of original from new.
          </p>
          <p>
            Use it whenever a value falls and you need to express that fall as a percentage of what
            the value was before.
          </p>
          <div className="lrn-definition">
            <span className="lrn-definition-term">Percentage Decrease Formula</span>
            <div className="lrn-definition-desc">
              <p>{`$$\\text{Percentage decrease} = \\frac{\\text{actual decrease}}{\\text{original value}} \\times 100$$`}</p>
              <p>
                Actual decrease = original value minus new value. Dividing by the original gives the
                size of the fall relative to where you started.
              </p>
            </div>
          </div>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              A price falls from 200 dollars to 160 dollars. Before calculating: will the percentage
              decrease be exactly 20%, more than 20%, or less than 20%?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                {`Exactly 20%. The fall is 40 dollars. $\\tfrac{40}{200} \\times 100 = 20\\%$.`}
              </p>
            </details>
          </div>
          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Percentage Increase</span>
              <p>{`$\\dfrac{\\text{new} - \\text{original}}{\\text{original}} \\times 100$. The numerator is positive because the new value is larger.`}</p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Percentage Decrease</span>
              <p>{`$\\dfrac{\\text{original} - \\text{new}}{\\text{original}} \\times 100$. The numerator is positive because we subtract the smaller new value from the larger original.`}</p>
            </div>
          </div>
          <div className="lrn-callout">
            <p>
              <strong>Both formulas divide by the original.</strong> This is the single most
              important rule in this topic.
            </p>
            <p>
              Check every problem: are you dividing by the original value or the new value? It must
              be the original.
            </p>
          </div>
          <h3>The Symmetry Trap</h3>
          <p>
            Many people assume that a 20% increase followed by a 20% decrease cancels out. It does
            not. The two percentage changes apply to different bases, so they cannot cancel.
          </p>
          <p>
            First, a quick shortcut for any percentage change. A 20% increase keeps the original
            100% and adds 20% more. That is 100% + 20% = 120% of the original, or 1.20 as a decimal.
            So you multiply by 1.20. A 20% decrease keeps 100% - 20% = 80% of the original, or 0.80
            as a decimal. So you multiply by 0.80.
          </p>
          <p>
            This is the change multiplier. Use it whenever you grow or shrink a value by a
            percentage. What matters is the value each multiplier acts on.
          </p>
          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">The Naive Guess</span>
              <p>
                {`20% up, then 20% down. Both percentages are equal. They cancel out. Net change = 0%.`}
              </p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">The Real Math</span>
              <p>
                {`$1.20 \\times 0.80 = 0.96$. The final value is 96% of the original. Net change $= -4\\%$. You always lose a little.`}
              </p>
            </div>
          </div>
          <viz.PercentageChangeSymmetryTrap C={C} />
          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>
              A percentage decrease is the mirror of a percentage increase. The structure is the
              same: a change measured as a fraction of the original.
            </p>
            <p>
              {`If a value drops from $V$ to $0$, the loss is $V$ and the percentage decrease is $\\tfrac{V}{V} \\times 100 = 100\\%$. You cannot lose more than 100% of a value because the value runs out.`}
            </p>
            <p>
              This is why the original sets the upper bound on any decrease. A percentage increase
              has no such cap because the new value can grow without limit.
            </p>
          </div>
        </>,

        // == Section 3: Percentage profit and loss ==============================
        <>
          <h2>A Quick Bridge: Profit and Loss</h2>
          <p>
            Profit and loss are just percentage increase and decrease wearing a new name. When you
            buy and sell something, the cost price is the original value. Sell for more and you have
            an increase, called a profit. Sell for less and you have a decrease, called a loss.
          </p>
          <p>
            The rule does not change. Divide by the original, which here is the cost price. A later
            topic drills profit and loss problems in depth. Here you only need to see they are the
            same machine.
          </p>
          <viz.ProfitLossOnCostPrice C={C} />
          <div className="lrn-insight">
            <span className="lrn-insight-label">ONE WORKED CASE</span>
            <p>
              {`A trader buys a beret for 5 dollars and sells for 6.50 dollars. The cost price is the original. Profit: $6.50 - 5.00 = 1.50$ dollars. Percentage profit: $\\dfrac{1.50}{5.00} \\times 100 = 30\\%$. Same formula, with cost price as the base.`}
            </p>
          </div>
        </>,

        // == Section 4: Multi-step and compound problems =========================
        <>
          <h2>Multi-Step, Combined, and Reverse Problems</h2>
          <p>
            Some problems require more than one percentage change. A square has two sides. One side
            grows by 20%. The other shrinks by 25%. What is the overall change in area?
          </p>
          <p>
            You cannot add the two percentages. Compute each new dimension first, then find the new
            area, then apply the formula. Use this approach whenever several values each change by
            different percentages, or a shape's dimensions change and you need the overall effect.
          </p>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              A square has sides of length 10. One side grows by 20%. The other shrinks by 25%. Do
              you think the area stays the same, increases, or decreases? By how much? Write your
              prediction.
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                {`It decreases by 10%. New width: $10 \\times 1.20 = 12$. New height: $10 \\times 0.75 = 7.5$. New area: $12 \\times 7.5 = 90$. Original area: 100. The area fell from 100 to 90, a 10% decrease. The two different percentages do not cancel, and the bigger fall on one side wins.`}
              </p>
            </details>
          </div>
          <h3>The Rectangle from a Square</h3>
          <p>
            One side of a square grows by 20%. The adjacent side shrinks by 25%. Find the percentage
            change in area. The prediction above used 10. The worked example uses {`$s$`} to show
            the result holds for any side length.
          </p>
          <div className="lrn-steps">
            <ol className="lrn-list">
              <li>{`Let the original side be $s$. Original area: $s^2$ (side times side).`}</li>
              <li>{`New width: $s \\times 1.20 = 1.20s$.`}</li>
              <li>{`New height: $s \\times 0.75 = 0.75s$. (A 25% decrease means multiplying by 0.75, just as the 20% increase meant multiplying by 1.20.)`}</li>
              <li>{`New area: $1.20s \\times 0.75s = 0.90s^2$.`}</li>
              <li>{`Area change: $\\dfrac{0.90s^2 - s^2}{s^2} \\times 100 = -10\\%$.`}</li>
            </ol>
          </div>
          <viz.GeometricAreaChange C={C} />
          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>
              In step 3, why do we multiply the side by 0.75 to apply a 25% decrease, instead of
              subtracting 25 from the side?
            </p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                {`A 25% decrease means the new value is $100\\% - 25\\% = 75\\%$ of the original. Multiplying by $0.75$ scales the side to 75% of its starting length. Subtracting 25 would only work if the side were exactly 100 units long. The multiplier method works for any starting length. It works with the percentage, not the raw number.`}
              </p>
            </details>
          </div>
          <div className="lrn-faded">
            <div className="lrn-faded-phase lrn-faded-partial">
              <span className="lrn-faded-label">COMPLETE</span>
              <p>{`One side increases 50%, other decreases 20%. New width: $1.50s$. New height: $0.80s$. New area: $1.50s \\times 0.80s = 1.20s^2$, a 20% increase.`}</p>
            </div>
            <div className="lrn-faded-phase lrn-faded-partial">
              <span className="lrn-faded-label">YOUR TURN: PARTIAL</span>
              <p>
                One side increases 30%. The adjacent side decreases 10%. Find the percentage change
                in area.
              </p>
              <ol className="lrn-list">
                <li>{`Compute the new width: $s \\times 1.30 = ?$`}</li>
                <li>Compute the new height using the 10% decrease.</li>
                <li>Multiply the two to get the new area.</li>
                <li>Apply the percentage change formula to original and new area.</li>
              </ol>
            </div>
            <div className="lrn-faded-phase">
              <span className="lrn-faded-label">INDEPENDENT PRACTICE</span>
              <p>
                One side increases 15%. The other side also increases 15%. Find the percentage
                change in area. Can you predict the answer before computing?
              </p>
            </div>
          </div>
          <h3>Multi-Component Change: Wages, Materials, Overheads</h3>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              A business has wages 6 000 dollars, materials 4 000 dollars, overheads 2 000 dollars.
              Wages rise 12%, materials rise 8%, overheads rise 5%. Before computing: will the
              overall percentage change be closer to 5%, 9%, or 12%?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                Closer to 9%. Wages are the largest component, so the 12% rate on wages pulls the
                average up. But overheads are small, so the 5% rate on overheads barely matters. The
                overall rate is a weighted result, not a simple average.
              </p>
            </details>
          </div>
          <p>
            You already know the plain average: add the values, then divide by how many there are. A
            plain average gives every value the same weight. A weighted average is different. It
            lets bigger parts count for more than smaller parts.
          </p>
          <p>
            Here the wages are the biggest part. So the wages rate pulls the overall rate toward
            itself. The tiny overheads barely move it. That is why you cannot just average the three
            rates.
          </p>
          <p>
            To find the overall percentage change when components change at different rates, compute
            each new component value separately. Add them all. Then apply the percentage change
            formula to the totals.
          </p>
          <h4>Worked Example: The Business Costs</h4>
          <div className="lrn-steps">
            <ol className="lrn-list">
              <li>{`New wages: $6000 \\times 1.12 = 6720$ dollars.`}</li>
              <li>{`New materials: $4000 \\times 1.08 = 4320$ dollars.`}</li>
              <li>{`New overheads: $2000 \\times 1.05 = 2100$ dollars.`}</li>
              <li>{`New total: $6720 + 4320 + 2100 = 13140$ dollars.`}</li>
              <li>{`Original total: $6000 + 4000 + 2000 = 12000$ dollars.`}</li>
              <li>{`Percentage increase: $\\dfrac{13140 - 12000}{12000} \\times 100 = \\dfrac{1140}{12000} \\times 100 = 9.5\\%$.`}</li>
            </ol>
          </div>
          <p>
            The overall rise is 9.5%, not the plain average of 12, 8, and 5 (which is about 8.3%).
            The big wages pulled it higher.
          </p>
          <viz.MultiStepCombinedChange C={C} />
          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>
              Why can you not just average the three individual percentage changes to get the
              overall percentage change?
            </p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                Averaging the rates would only work if all three components started at the same
                amount. They do not. A 12% rise on large wages adds more dollars than a 5% rise on
                small overheads. So the overall rate is a weighted average. The bigger the
                component, the more it pulls the result toward its own rate.
              </p>
            </details>
          </div>
          <h3>Reverse Percentage Reasoning</h3>
          <p>
            Sometimes you know a wrong answer and the size of the error. You need to reverse back to
            the correct value.
          </p>
          <p>
            The error multiplier is the number you would multiply the correct value by to get the
            wrong answer. A 20% overestimate has an error multiplier of 1.20. A 5% underestimate has
            an error multiplier of 0.95.
          </p>
          <p>
            {`To recover the correct value, divide the wrong answer by the error multiplier: correct value = wrong answer $\\div$ error multiplier.`}
          </p>
          <div className="lrn-steps">
            <span className="lrn-steps-label">CLEAN EXAMPLE</span>
            <p>
              {`A value was increased by 20% and gave 300. The error multiplier is 1.20. So the original value is $300 \\div 1.20 = 250$. Check: $250 \\times 1.20 = 300$. Correct.`}
            </p>
          </div>
          <p>
            Here is the harder version. Several clues must agree on one answer. Four teachers
            measure an irregular area and get different results: 237.5, 250, 260, and 300 square
            metres. Beatriz is wrong by 20%. Saghir is wrong by 5%. Find the correct answer.
          </p>
          <div className="lrn-steps">
            <ol className="lrn-list">
              <li>
                If Beatriz is wrong by 20%, her answer equals the correct answer multiplied by 1.2
                or 0.8.
              </li>
              <li>{`Test 300: $300 \\div 1.2 = 250$. So if correct $= 250$, Beatriz would get 300. Consistent.`}</li>
              <li>
                If Saghir is wrong by 5%, her answer equals the correct answer multiplied by 1.05 or
                0.95.
              </li>
              <li>{`Test 237.5: $237.5 \\div 0.95 = 250$. So if correct $= 250$, Saghir would get 237.5. Consistent.`}</li>
              <li>The correct area is 250 square metres. Both facts point to the same answer.</li>
            </ol>
          </div>
          <viz.ReversePercentageReasoning C={C} />
          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>
              Why does dividing by 1.2 undo a 20% overestimate, instead of subtracting 20% from the
              wrong answer?
            </p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                {`The wrong answer is the correct value multiplied by 1.2. To recover the correct value, divide by 1.2. Subtracting 20% would compute $0.20 \\times 300 = 60$ and give 240, not 250. The 20% error refers to 20% of the correct answer, not 20% of the wrong answer. Dividing by 1.2 is the exact inverse and lands on the right value.`}
              </p>
            </details>
          </div>
        </>
      ]
    },

    practice: [
      // Section 0: Why percentage change matters
      {
        q: `A car price rises from 7 000 dollars to 7 070 dollars. A jacket price rises from 100 dollars to 170 dollars. Both rose by 70 dollars. Calculate the percentage increase for each. Which rise is larger as a percentage?`,
        a: `Car: $\\tfrac{70}{7000} \\times 100 = 1\\%$. Jacket: $\\tfrac{70}{100} \\times 100 = 70\\%$. The jacket rise is seventy times larger as a percentage. The absolute amount is identical, but the percentage depends entirely on the original value.`
      },
      {
        q: `Why does percentage change always divide by the original value and not the new value?`,
        a: `Percentage change measures how large the change is compared with where you started. The original value is 100% of itself. Dividing by the original answers "what fraction of the starting point is the change?" Dividing by the new value answers a different question about the end state. That is not what percentage change means.`
      },
      // Section 0: Transfer card
      {
        q: `(Transfer) Two cities both gained 500 new residents this year. City A had 5 000 people. City B had 50 000 people. Which city had the bigger growth rate? Calculate both.`,
        a: `City A: $\\tfrac{500}{5000} \\times 100 = 10\\%$. City B: $\\tfrac{500}{50000} \\times 100 = 1\\%$. City A's growth rate is ten times larger. The same absolute gain is a very different percentage change depending on the original size.`
      },
      // Section 1: Percentage increase
      {
        q: `A car price rises from 6 400 dollars to 6 800 dollars. Find the percentage increase.`,
        a: `Actual increase: $6800 - 6400 = 400$ dollars. Percentage increase: $\\tfrac{400}{6400} \\times 100 = 6.25\\%$ (or $6\\tfrac{1}{4}\\%$). Divide by the original value 6 400, not by 6 800.`
      },
      {
        q: `A student says: "I divide by the new value because that is what we end up with." Explain the error and give the correct method.`,
        a: `The error is dividing by the new value. Percentage increase measures the change relative to the original. It does not measure relative to where you end up. Always divide by the original value. Dividing by the new value gives a smaller denominator. That makes the percentage too large.`
      },
      {
        q: `A salary rises from 32 000 dollars to 34 400 dollars. Find the percentage increase.`,
        a: `Increase: $34400 - 32000 = 2400$ dollars. Percentage increase: $\\tfrac{2400}{32000} \\times 100 = 7.5\\%$. The original value is 32 000. Divide the actual increase by that original, then multiply by 100.`
      },
      {
        q: `(Transfer) A runner's best time falls from 60 seconds to 54 seconds. Express the improvement as a percentage. Is this a percentage increase or decrease?`,
        a: `It is a percentage decrease (the time fell). Decrease: $60 - 54 = 6$ seconds. Percentage decrease: $\\tfrac{6}{60} \\times 100 = 10\\%$. A lower time is better for the runner. The calculation still uses the original time of 60 as the base.`
      },
      // Section 2: Percentage decrease
      {
        q: `A price falls from 240 dollars to 192 dollars. Find the percentage decrease.`,
        a: `Actual decrease: $240 - 192 = 48$ dollars. Percentage decrease: $\\tfrac{48}{240} \\times 100 = 20\\%$. Divide by the original value 240, not by 192.`
      },
      {
        q: `Explain why a 20% increase followed by a 20% decrease does not return to the original value.`,
        a: `After a 20% increase, the value becomes $1.20 \\times$ original. The 20% decrease then applies to this larger amount: $1.20 \\times 0.80 = 0.96 \\times$ original. The final value is 96% of the original, a 4% net decrease. The decrease applies to a larger base than the increase did, so the two effects do not cancel.`
      },
      {
        q: `(Predict) A shop reduces all prices by 15%. You expect the new price of a 80 dollar item to be 68 dollars. Check whether this is correct and explain.`,
        a: `Correct. Decrease: $15\\%$ of $80 = 0.15 \\times 80 = 12$ dollars. New price: $80 - 12 = 68$ dollars. Alternatively, the multiplier is $1 - 0.15 = 0.85$, and $0.85 \\times 80 = 68$ dollars. Both methods confirm the prediction.`
      },
      {
        q: `A medicine tablet loses mass through heat. It starts at 500 mg and ends at 445 mg. Find the percentage decrease in mass.`,
        a: `Decrease: $500 - 445 = 55$ mg. Percentage decrease: $\\tfrac{55}{500} \\times 100 = 11\\%$. The original mass is 500 mg. The formula measures how large the loss is relative to where you started.`
      },
      // Interleave: increase vs decrease comparison
      {
        q: `A metal rod is 200 cm long at 20 degrees. After heating it measures 200.6 cm. Find the percentage increase in length.`,
        a: `Increase: $200.6 - 200 = 0.6$ cm. Percentage increase: $\\tfrac{0.6}{200} \\times 100 = 0.3\\%$. Even a very small absolute change can be expressed as a percentage using the same formula. Divide by the original length of 200.`
      },
      {
        q: `(Self-explain) After calculating that a price rose by 12%, a student writes: "so it fell by 12% from the new price to get back." Is this true?`,
        a: `False. A 12% increase uses the original as the base. A 12% decrease from the new value uses the new (larger) value as the base. Because the bases differ, the two do not cancel. The multiplier up was 1.12. The multiplier back is $\\tfrac{1}{1.12} \\approx 0.893$. That is a decrease of about 10.7%, not 12%.`
      },
      // Section 2: Elaborate
      {
        q: `(Elaborate) A shopkeeper marks up an item by 50% and then offers a 50% off sale. Will the customer pay less than the cost price, equal to it, or more? Calculate to verify.`,
        a: `The customer pays less than the cost price. Mark-up multiplier: $1.50$. Sale multiplier: $0.50$. Net multiplier: $1.50 \\times 0.50 = 0.75$, so the customer pays 75% of the cost price. That is a 25% loss for the shopkeeper. A 50% increase then a 50% decrease always ends below the start. The decrease applies to the larger marked-up price.`
      },
      // Section 3: Profit and loss
      {
        q: `A trader buys a beret for 5 dollars and sells it for 6.50 dollars. Find the percentage profit.`,
        a: `Profit: $6.50 - 5.00 = 1.50$ dollars. Percentage profit: $\\tfrac{1.50}{5.00} \\times 100 = 30\\%$. The denominator is the cost price of 5 dollars, not the selling price.`
      },
      {
        q: `A bag of rice is bought for 2.50 dollars and sold for 2.15 dollars. Find the percentage loss.`,
        a: `Loss: $2.50 - 2.15 = 0.35$ dollars. Percentage loss: $\\tfrac{0.35}{2.50} \\times 100 = 14\\%$. Divide by the cost price of 2.50, not by 2.15. The loss is 14% of what was paid.`
      },
      {
        q: `(Transfer) A car is bought for 8 000 dollars. After repairs costing 1 200 dollars it is sold for 10 800 dollars. Find the percentage profit on the total cost.`,
        a: `Total cost: $8000 + 1200 = 9200$ dollars. Profit: $10800 - 9200 = 1600$ dollars. Percentage profit: $\\tfrac{1600}{9200} \\times 100 \\approx 17.4\\%$. Here, the cost price is the total amount spent: purchase plus repairs. That is the full original investment.`
      },
      {
        q: `A student calculates profit percentage as selling price divided by cost price, then multiplied by 100. Find the error in this method.`,
        a: `The student is dividing the selling price by the cost price, not the profit. The correct numerator is the actual profit (selling minus cost), not the selling price itself. Using the selling price gives a number larger than 100% even for a tiny profit. That happens because it includes the original cost. The formula requires: actual profit divided by cost price, then multiplied by 100.`
      },
      // Section 3: Predict card
      {
        q: `(Predict) A shopkeeper buys goods for 200 dollars and wants to make a 25% profit. What selling price should she set? Predict first, then calculate.`,
        a: `Multiplier: $1 + 0.25 = 1.25$. Selling price: $200 \\times 1.25 = 250$ dollars. Verify: profit $= 250 - 200 = 50$. Percentage profit $= \\tfrac{50}{200} \\times 100 = 25\\%$. Correct.`
      },
      {
        q: `(Elaborate) Percentage profit and percentage increase use the same formula structure. Explain what plays the role of "original value" in each.`,
        a: `In percentage increase, the original value is the starting price or measurement before the change. In percentage profit, the cost price plays the same role because the cost price is what you originally invested. Both formulas ask the same question: how large is the change relative to where you began? The only difference is the words, not the arithmetic.`
      },
      // Section 4: Multi-step
      {
        q: `A square has side $s$. One side grows by 20%. The adjacent side shrinks by 25%. Find the percentage change in area.`,
        a: `New width: $1.20s$. New height: $0.75s$. New area: $1.20s \\times 0.75s = 0.90s^2$. Change in area: $\\tfrac{0.90s^2 - s^2}{s^2} \\times 100 = -10\\%$. The area decreases by 10%. You cannot add the percentage changes directly. Compute each new dimension first.`
      },
      {
        q: `(Predict) One side of a square grows by 10%. The other side grows by 10%. Predict the percentage change in area before computing, then verify.`,
        a: `Prediction approach: $1.10 \\times 1.10 = 1.21$, so the area grows by 21%. Verification: new width $= 1.10s$, new height $= 1.10s$, new area $= 1.21s^2$. Percentage increase $= \\tfrac{0.21s^2}{s^2} \\times 100 = 21\\%$. The prediction is correct. When both dimensions grow by the same factor, the area grows by the square of that factor.`
      },
      {
        q: `A business has wages 6 000 dollars, materials 4 000 dollars, and overheads 2 000 dollars. Wages rise by 12%, materials by 8%, overheads by 5%. Find the new total cost and the overall percentage increase.`,
        a: `New wages: $6000 \\times 1.12 = 6720$. New materials: $4000 \\times 1.08 = 4320$. New overheads: $2000 \\times 1.05 = 2100$. New total: $6720 + 4320 + 2100 = 13140$. Original total: $12000$. Percentage increase: $\\tfrac{1140}{12000} \\times 100 = 9.5\\%$. The overall percentage is not the average of 12, 8, and 5. The three components have different sizes.`
      },
      {
        q: `(Transfer) A house is built with three cost components: land 40 000 dollars, labour 30 000 dollars, materials 20 000 dollars. Land rises 10%, labour rises 8%, materials rise 15%. Find the overall percentage increase.`,
        a: `New land: $40000 \\times 1.10 = 44000$. New labour: $30000 \\times 1.08 = 32400$. New materials: $20000 \\times 1.15 = 23000$. New total: $99400$. Original total: $90000$. Percentage increase: $\\tfrac{9400}{90000} \\times 100 \\approx 10.4\\%$. The largest component (land) with the second-highest rate drives the result.`
      },
      {
        q: `Four teachers measure an area and get 237.5, 250, 260, and 300 square metres. Beatriz is wrong by 20%. Saghir is wrong by 5%. Find the correct area.`,
        a: `Test 300 for Beatriz: $300 \\div 1.2 = 250$. So Beatriz overestimated by 20% if the correct answer is 250. Test 237.5 for Saghir: $237.5 \\div 0.95 = 250$. So Saghir underestimated by 5% if the correct answer is 250. Both clues give 250 square metres. The correct area is 250 square metres.`
      },
      {
        q: `(Self-explain) In the reverse-percentage problem, why do you divide by 1.2 to undo a 20% overestimate, rather than subtracting 20% from the wrong answer?`,
        a: `Subtracting 20% would take 20% of the wrong answer. That is not the right amount to remove. The wrong answer is $\\text{correct} \\times 1.2$. To recover the correct value, divide both sides by 1.2. Subtracting 20% of the wrong answer removes $0.20 \\times (\\text{correct} \\times 1.2) = 0.24 \\times \\text{correct}$. That is too much. Dividing by 1.2 is the exact inverse of multiplying by 1.2.`
      },
      {
        q: `(Elaborate) One side of a square grows by 20%. The other shrinks by 25%. Why is the change in area always negative, no matter the side length?`,
        a: `Because the calculation depends only on the multipliers, not the starting size. The new area is always $1.20 \\times 0.75 = 0.90$ times the original area, giving a 10% decrease. The variable $s$ cancels in the percentage formula: $\\tfrac{0.90s^2 - s^2}{s^2} = -0.10$. Any square, large or small, produces the same 10% decrease with these two percentage changes.`
      },
      // Tail cards: interleaved types
      {
        q: `A petrol engine uses 9 litres per 100 km. After a tune-up it uses 8.1 litres per 100 km. Find the percentage reduction in fuel use.`,
        a: `Decrease: $9 - 8.1 = 0.9$ litres. Percentage decrease: $\\tfrac{0.9}{9} \\times 100 = 10\\%$. The original consumption is 9 litres. The engine uses 10% less fuel after the tune-up.`
      },
      {
        q: `(Elaborate) A town's population falls from 45 000 to 40 500. A neighbouring town's population falls from 8 000 to 7 200. Which town had the larger percentage decrease? Explain without calculating first.`,
        a: `Both fell by 10%. Town A: $\\tfrac{4500}{45000} \\times 100 = 10\\%$. Town B: $\\tfrac{800}{8000} \\times 100 = 10\\%$. Identical percentage decreases can hide very different absolute losses. Town A lost 4 500 people; Town B lost only 800.`
      },
      {
        q: `A tennis player earns 12 000 dollars in year one and 13 800 dollars in year two. Find the percentage increase in earnings.`,
        a: `Increase: $13800 - 12000 = 1800$ dollars. Percentage increase: $\\tfrac{1800}{12000} \\times 100 = 15\\%$. The original earnings of 12 000 dollars is the denominator. The earnings grew by 15%.`
      },
      {
        q: `(Transfer) A company had 250 employees last year and now has 280. A rival had 2 500 employees and now has 2 530. Both added 30 people. Which company grew faster as a percentage?`,
        a: `First company: $\\tfrac{30}{250} \\times 100 = 12\\%$. Rival: $\\tfrac{30}{2500} \\times 100 = 1.2\\%$. The first company grew ten times faster as a percentage, even though both added the same number of people.`
      },
      {
        q: `In her first four weeks of life a baby's weight rises from 3 000 g to 3 870 g. Find the percentage increase.`,
        a: `Increase: $3870 - 3000 = 870$ g. Percentage increase: $\\tfrac{870}{3000} \\times 100 = 29\\%$. The baby's starting weight of 3 000 g is the original. The weight rose by 29%.`
      },
      {
        q: `Before cooking, a joint of meat weighs 2.5 kg. After cooking it weighs 2.1 kg. Find the percentage decrease in weight.`,
        a: `Decrease: $2.5 - 2.1 = 0.4$ kg. Percentage decrease: $\\tfrac{0.4}{2.5} \\times 100 = 16\\%$. The original weight of 2.5 kg is the base. The meat lost 16% of its weight during cooking.`
      },
      {
        q: `Juan buys a car for 4 000 dollars and sells it for 4 600 dollars. Find his percentage profit.`,
        a: `Profit: $4600 - 4000 = 600$ dollars. Percentage profit: $\\tfrac{600}{4000} \\times 100 = 15\\%$. The denominator is the cost price of 4 000 dollars, not the selling price. Juan's profit is 15% of what he paid.`
      }
    ],

    reference: {
      category: 'Quick Reference',
      title: 'Percentage Increase and Decrease',
      sections: [
        <>
          <h2>Core Formulas</h2>
          <div className="lrn-eq lrn-eq-hero">{`$$\\text{Percentage increase} = \\frac{\\text{actual increase}}{\\text{original value}} \\times 100$$`}</div>
          <div className="lrn-definition">
            <span className="lrn-definition-term">Percentage Increase</span>
            <div className="lrn-definition-desc">
              <p>{`Actual increase $=$ new value $-$ original value.`}</p>
              <p>
                <strong>When to use:</strong> the new value is larger than the original. Divide by
                the original. Never divide by the new value.
              </p>
            </div>
          </div>
          <div className="lrn-eq lrn-eq-hero">{`$$\\text{Percentage decrease} = \\frac{\\text{actual decrease}}{\\text{original value}} \\times 100$$`}</div>
          <div className="lrn-definition">
            <span className="lrn-definition-term">Percentage Decrease</span>
            <div className="lrn-definition-desc">
              <p>{`Actual decrease $=$ original value $-$ new value.`}</p>
              <p>
                <strong>When to use:</strong> the new value is smaller than the original. Same
                denominator rule: divide by the original.
              </p>
            </div>
          </div>
          <div className="lrn-eq lrn-eq-hero">{`$$\\text{Percentage profit} = \\frac{\\text{actual profit}}{\\text{cost price}} \\times 100$$`}</div>
          <div className="lrn-definition">
            <span className="lrn-definition-term">Percentage Profit</span>
            <div className="lrn-definition-desc">
              <p>{`Actual profit $=$ selling price $-$ cost price (when selling $>$ cost).`}</p>
              <p>
                <strong>When to use:</strong> a cost price and a selling price are given and selling
                exceeds cost. Divide by cost price, not selling price.
              </p>
            </div>
          </div>
          <div className="lrn-eq lrn-eq-hero">{`$$\\text{Percentage loss} = \\frac{\\text{actual loss}}{\\text{cost price}} \\times 100$$`}</div>
          <div className="lrn-definition">
            <span className="lrn-definition-term">Percentage Loss</span>
            <div className="lrn-definition-desc">
              <p>{`Actual loss $=$ cost price $-$ selling price (when cost $>$ selling).`}</p>
              <p>
                <strong>When to use:</strong> a cost price and a selling price are given and cost
                exceeds selling. Divide by cost price.
              </p>
            </div>
          </div>
        </>,
        <>
          <h2>Formula Comparison</h2>
          <div className="table-wrapper">
            <table>
              <thead>
                <tr>
                  <th>Formula</th>
                  <th>Numerator</th>
                  <th>Denominator</th>
                  <th>When</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Percentage increase</td>
                  <td>new minus original</td>
                  <td>original value</td>
                  <td>new larger than original</td>
                </tr>
                <tr>
                  <td>Percentage decrease</td>
                  <td>original minus new</td>
                  <td>original value</td>
                  <td>new smaller than original</td>
                </tr>
                <tr>
                  <td>Percentage profit</td>
                  <td>selling minus cost</td>
                  <td>cost price</td>
                  <td>selling larger than cost</td>
                </tr>
                <tr>
                  <td>Percentage loss</td>
                  <td>cost minus selling</td>
                  <td>cost price</td>
                  <td>cost larger than selling</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="lrn-insight">
            <span className="lrn-insight-label">THE ANCHORING RULE</span>
            <p>
              All four formulas divide by the original or cost value. Never by the new or selling
              value. This is the single rule that covers every case in this topic.
            </p>
          </div>
          <div className="lrn-callout">
            <p>
              <strong>
                A percentage increase followed by the same percentage decrease does not return to
                the original.
              </strong>
            </p>
            <p>
              {`A 20% increase then 20% decrease gives $1.20 \\times 0.80 = 0.96$, a 4% net loss. In general: final $= \\text{original} \\times (1 + p_1) \\times (1 + p_2) \\times \\dots$ When multiple percentage changes apply in sequence, multiply the multipliers. Do not add the percentages.`}
            </p>
          </div>
          <h2>Reverse Percentage</h2>
          <div className="lrn-definition">
            <span className="lrn-definition-term">Reversing a Known Error</span>
            <div className="lrn-definition-desc">
              <p>{`$$\\text{correct value} = \\frac{\\text{wrong answer}}{\\text{error multiplier}}$$`}</p>
              <p>
                <strong>When to use:</strong> you know an answer is wrong by a given percentage. You
                need to find the correct value. Divide the wrong answer by the multiplier that
                caused the error. The error multiplier is 1.20 for a 20% overestimate and 0.95 for a
                5% underestimate. It is the number you would multiply the correct value by to get
                the wrong answer.
              </p>
            </div>
          </div>
          <h2>Multi-Step Problems</h2>
          <div className="lrn-steps">
            <ol className="lrn-list">
              <li>Compute each new component value separately using its own percentage.</li>
              <li>Sum the new values to get the new total.</li>
              <li>Apply the percentage change formula: use original total as denominator.</li>
            </ol>
          </div>
          <div className="lrn-callout">
            <p>
              <strong>Do not average individual percentages.</strong> Components with larger
              starting values contribute more to the total change.
            </p>
            <p>
              Always compute component values first, then find the overall percentage from the
              totals.
            </p>
          </div>
        </>
      ]
    },

    customCss:
      '.MafsView { --mafs-bg: transparent; --mafs-fg: var(--text-primary); --mafs-line-color: var(--border-subtle); }'
  }
  return config
}

export default function PercentageIncreaseAndDecrease() {
  const config = useConfig()
  return <LearningTemplate config={config} />
}
