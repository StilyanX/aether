import { LearningTemplate } from '../../../../components/learning/learning-template'
import { useVizColors } from '../../../../hooks/use-viz-colors'
import * as viz from './percentage-of-a-quantity-viz'

function useConfig() {
  const C = useVizColors()
  const config = {
    cssPrefix: 'poq',
    documentTitle: 'Percentage of a Quantity - AETHER',
    learning: {
      groupTitle: 'Percentages',
      category: 'Arithmetic',
      title: 'Percentage of a Quantity',
      subtitle:
        'How to find a percentage of a money amount or a measurement, build awkward percents from quick ones, and round a money answer to the nearest cent.',
      sections: [
        // == Section 0: Finding a percentage of a quantity =====================
        <>
          <h2>Finding a Percentage of a Quantity</h2>
          <p>
            {`A percentage is just a fraction over 100. So "22% of \\$40" means $\\tfrac{22}{100} \\times 40$. You multiply the quantity by that fraction. This one idea is the whole topic.`}
          </p>
          <p>
            Any time a problem says "find X% of Y," write the percent as a fraction over 100. Then
            multiply. The answer is a number, not another percentage.
          </p>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              Before reading on: if you want 22% of $40, will the answer be more than $40 or less
              than $40? Write your answer.
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                {`Less. $22\\%$ is less than $100\\%$, so $22\\%$ of any positive number is smaller than that number. $\\tfrac{22}{100} \\times 40 = \\$8.80$, which is less than $40$. (You will see later that a percent above $100\\%$ flips this.)`}
              </p>
            </details>
          </div>
          <h3>The Fraction Method</h3>
          <p>Write the percent as a fraction over 100, then multiply. Find 22% of $40.</p>
          <div className="lrn-steps">
            <ol className="lrn-list">
              <li>{`Write the percent as a fraction: $\\dfrac{22}{100}$.`}</li>
              <li>{`Multiply by the quantity. Write 40 as $\\tfrac{40}{1}$ so both are fractions: $\\dfrac{22}{100} \\times \\dfrac{40}{1} = \\dfrac{880}{100}$.`}</li>
              <li>Simplify: {`$\\dfrac{880}{100} = \\$8.80$.`}</li>
            </ol>
          </div>
          <viz.BarModelPercentOfQuantity C={C} percent={22} qty={40} />
          <p>
            This method works on any unit, not just money. You can now find a percent of any
            quantity by turning the percent into a fraction and multiplying.
          </p>
          <h3>It Works on Measurements Too</h3>
          <p>The quantity does not have to be money. The method is the same for any unit.</p>
          <div className="lrn-steps">
            <ol className="lrn-list">
              <li>{`$15\\%$ of $80$ kg $= \\dfrac{15}{100} \\times 80 = \\dfrac{1200}{100} = 12$ kg.`}</li>
              <li>{`$30\\%$ of $2.4$ m $= \\dfrac{30}{100} \\times 2.4 = 0.72$ m.`}</li>
              <li>{`$8\\%$ of $5000$ people $= \\dfrac{8}{100} \\times 5000 = 400$ people.`}</li>
            </ol>
          </div>
          <p>
            Notice the unit just rides along. You compute the number, then keep the kilograms,
            metres, or people. The method does not care what the quantity measures.
          </p>
          <h3>The Decimal Method (Calculator-Fast Alternative)</h3>
          <p>
            Convert the percent to a decimal by dividing by 100. Then multiply. This is faster on a
            calculator. It gives the same answer as the fraction method, because the decimal and the
            fraction are the same number.
          </p>
          <p>
            {`Find 16% of \\$85. Since $16\\% = \\tfrac{16}{100} = 0.16$, the answer is $0.16 \\times 85 = \\$13.60$.`}
          </p>
          <viz.FractionVsDecimalMethod C={C} />
          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Fraction Method</span>
              <p>{`Write $P\\%$ as $\\tfrac{P}{100}$, then multiply. Every step is a fraction operation you can check by hand.`}</p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Decimal Method</span>
              <p>{`Divide $P$ by 100 to get a decimal, then multiply. Faster on a calculator. Same answer.`}</p>
            </div>
          </div>
          <p>
            You can now pick a method to fit the job. Use the fraction method to show your work. Use
            the decimal method when a calculator is in your hand.
          </p>
          <h3>Quick Percents in Your Head</h3>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              You want 10% of $80. You have no calculator. What is a fast way to get it without
              setting up a fraction? Try it before reading on.
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                {`$10\\%$ means $\\tfrac{1}{10}$, so $10\\%$ of $\\$80$ is $\\$80 \\div 10 = \\$8$. Dividing by 10 just moves the decimal point one place left. No fraction setup needed.`}
              </p>
            </details>
          </div>
          <p>Four percents are quick because they are simple fractions:</p>
          <ul className="lrn-list">
            <li>{`$10\\%$: divide by 10. $10\\%$ of $\\$80 = \\$8$.`}</li>
            <li>{`$1\\%$: divide by 100. $1\\%$ of $\\$80 = \\$0.80$.`}</li>
            <li>{`$50\\%$: halve it. $50\\%$ of $\\$80 = \\$40$.`}</li>
            <li>{`$25\\%$: take a quarter. $25\\%$ of $\\$80 = \\$20$.`}</li>
          </ul>
          <p>
            You can now find these four percents instantly. Next you build the messy ones from
            these.
          </p>
          <h3>Build Awkward Percents From Quick Ones</h3>
          <p>
            Most percents are not 10 or 25. But you can add or split the quick ones to reach almost
            any percent. You never need the fraction setup if you can chain these.
          </p>
          <div className="lrn-steps">
            <ol className="lrn-list">
              <li>{`$35\\%$ of $\\$80 = 25\\% + 10\\% = \\$20 + \\$8 = \\$28$. Check: $0.35 \\times 80 = 28$.`}</li>
              <li>{`$15\\%$ of $\\$60 = 10\\% + 5\\%$. Here $5\\%$ is half of $10\\%$: $\\$6 + \\$3 = \\$9$. Check: $0.15 \\times 60 = 9$.`}</li>
              <li>{`$70\\%$ of $\\$30 = 7 \\times 10\\% = 7 \\times \\$3 = \\$21$. Check: $0.70 \\times 30 = 21$.`}</li>
            </ol>
          </div>
          <p>
            You can now reach awkward percents with a few quick steps. Use this to estimate and to
            check a calculator answer.
          </p>
          <h3>Estimate to Catch Mistakes</h3>
          <p>
            The 10% shortcut also guards against decimal-place slips. Round the percent to a nearby
            benchmark and estimate first.
          </p>
          <p>
            {`Take $19\\%$ of $200$. That is a bit under $20\\%$. And $20\\%$ of $200$ is $40$, so the answer should sit just under $40$. The exact value is $0.19 \\times 200 = 38$, which fits. If your calculator showed $380$ or $3.8$, the estimate would flag it as wrong.`}
          </p>
          <h3>Percents With a Decimal or a Fraction</h3>
          <p>
            A percent does not have to be a whole number. It can carry a decimal, like 6.5%. It can
            be a fraction, like 12½%. The method does not change. Put the whole thing over 100 and
            multiply.
          </p>
          <div className="lrn-steps">
            <ol className="lrn-list">
              <li>{`$6.5\\%$ of $\\$40 = \\dfrac{6.5}{100} \\times 40 = \\$2.60$.`}</li>
              <li>{`$12\\tfrac{1}{2}\\%$ is the same as $\\tfrac{1}{8}$. So $12\\tfrac{1}{2}\\%$ of $\\$64 = \\tfrac{1}{8} \\times 64 = \\$8$. Check: $0.125 \\times 64 = 8$.`}</li>
            </ol>
          </div>
          <h3>When the Percent Is Above 100%</h3>
          <p>
            A percent can be more than 100%. Then the answer is larger than the original quantity.
            The PREDICT above showed that a percent under 100% shrinks the number. A percent above
            100% grows it.
          </p>
          <div className="lrn-steps">
            <ol className="lrn-list">
              <li>{`$150\\%$ of $20 = \\dfrac{150}{100} \\times 20 = 1.5 \\times 20 = 30$. The answer $30$ is bigger than $20$.`}</li>
              <li>{`$150\\%$ of $\\$40 = 1.5 \\times 40 = \\$60$. Again the result beats the original.`}</li>
            </ol>
          </div>
          <p>
            So "percentage of" does not always make a number smaller. Below 100% it shrinks. At 100%
            it stays the same. Above 100% it grows.
          </p>
          <h3>Rounding a Money Answer to the Nearest Cent</h3>
          <p>
            Some answers are not exact cent amounts. Round money to 2 decimal places. Use the
            rounding rule you already know. Look at the next digit. If it is 5 or more, round up.
          </p>
          <p>{`Find 6.5% of \\$17.50.`}</p>
          <div className="lrn-steps">
            <ol className="lrn-list">
              <li>{`$\\dfrac{6.5}{100} \\times \\dfrac{17.5}{1} = \\dfrac{113.75}{100} = 1.1375$.`}</li>
              <li>{`Round to the nearest cent. The third decimal is $7$, which is $5$ or more, so round up: $\\$1.14$.`}</li>
            </ol>
          </div>
          <p>Now a round-down case. Find 3.3% of $12.50.</p>
          <div className="lrn-steps">
            <ol className="lrn-list">
              <li>{`$\\dfrac{3.3}{100} \\times 12.5 = 0.4125$.`}</li>
              <li>{`The third decimal is $2$, which is below $5$, so the cents stay: $\\$0.41$.`}</li>
            </ol>
          </div>
          <p>
            You can now find any percent of any quantity. You can build awkward percents in your
            head. You can handle percents above 100% and round a money answer to the nearest cent.
            Once you can do this, you can raise or lower prices, work out interest, and calculate
            tax. Those all build directly on this skill.
          </p>
          <p>
            Interest applies a percent again and again. The viz below shows two ways money can grow
            year by year.
          </p>
          <viz.SimpleVsCompoundGrowth C={C} />
          <p>
            What to look for: simple interest adds the same amount each year. Compound interest
            takes the percent of the new total, so its bars pull ahead.
          </p>
          <h3>Work It Up, Then Let Go</h3>
          <p>Follow the worked one, finish the partial one, then do the last one alone.</p>
          <div className="lrn-faded">
            <p>
              <strong>COMPLETE (worked for you):</strong>
            </p>
            <p>{`Find $45\\%$ of $\\$1200$. Build it: $45\\% = 25\\% + 10\\% + 10\\%$. So $\\$300 + \\$120 + \\$120 = \\$540$. Check: $0.45 \\times 1200 = 540$.`}</p>
            <p>
              <strong>YOUR TURN (PARTIAL):</strong>
            </p>
            <p>
              {`Find $35\\%$ of $\\$60$. Build it: $35\\% = 25\\% + 10\\%$. So $25\\%$ of $\\$60 = ?$ and $10\\%$ of $\\$60 = ?$. Add them, then check with $0.35 \\times 60$.`}
            </p>
            <p>
              <strong>INDEPENDENT:</strong>
            </p>
            <p>
              {`Find $17.5\\%$ of $\\$40$ on your own. Build it from $10\\% + 5\\% + 2.5\\%$, then check with the decimal method.`}
            </p>
          </div>
        </>
      ]
    },

    practice: [
      {
        q: 'Work out 22% of $40 using the fraction method. Show all steps.',
        a: `Answer: $\\$8.80$. Set up $\\frac{22}{100} \\times \\frac{40}{1} = \\frac{880}{100}$. Then simplify $\\frac{880}{100} = 8.80$. Writing the percent as a fraction over 100 turns it into a pure fraction multiplication, which is easy to check.`
      },
      {
        q: 'Find 15% of 80 kg.',
        a: `Answer: $12$ kg. $\\frac{15}{100} \\times 80 = \\frac{1200}{100} = 12$. The unit rides along: you find the number, then keep the kilograms.`
      },
      {
        q: 'Find 8% of 5000 people.',
        a: `Answer: $400$ people. $\\frac{8}{100} \\times 5000 = \\frac{40000}{100} = 400$. The method works on any quantity, not just money.`
      },
      {
        q: 'Find 30% of 2.4 metres.',
        a: `Answer: $0.72$ m. $\\frac{30}{100} \\times 2.4 = 0.30 \\times 2.4 = 0.72$. The decimal method is quick here because $2.4$ is already a decimal.`
      },
      {
        q: 'Use the 10% shortcut to find 10% of $90 in your head.',
        a: `Answer: $\\$9$. $10\\%$ means divide by 10, which moves the decimal one place left: $\\$90 \\div 10 = \\$9$. No fraction setup needed.`
      },
      {
        q: 'Find 1% of $250 and 50% of $250 mentally.',
        a: `$1\\%$ of $\\$250 = \\$250 \\div 100 = \\$2.50$. $50\\%$ of $\\$250 = \\$250 \\div 2 = \\$125$. One percent divides by 100; fifty percent halves.`
      },
      {
        q: 'Find 25% of $48 mentally, then check with the decimal method.',
        a: `Answer: $\\$12$. $25\\%$ is a quarter, so $\\$48 \\div 4 = \\$12$. Check: $0.25 \\times 48 = 12$.`
      },
      {
        q: 'Build 35% of $80 from the quick percents. Show the parts.',
        a: `Answer: $\\$28$. $35\\% = 25\\% + 10\\%$. So $25\\%$ of $\\$80 = \\$20$ and $10\\%$ of $\\$80 = \\$8$. Add: $\\$20 + \\$8 = \\$28$. Check: $0.35 \\times 80 = 28$.`
      },
      {
        q: 'Build 15% of $60 using 10% and 5%. Show the parts.',
        a: `Answer: $\\$9$. $15\\% = 10\\% + 5\\%$. Here $10\\%$ of $\\$60 = \\$6$, and $5\\%$ is half of that, so $\\$3$. Add: $\\$6 + \\$3 = \\$9$. Check: $0.15 \\times 60 = 9$.`
      },
      {
        q: 'Find 70% of $30 by using the 10% shortcut seven times.',
        a: `Answer: $\\$21$. $10\\%$ of $\\$30 = \\$3$, and $70\\%$ is seven lots of $10\\%$: $7 \\times \\$3 = \\$21$. Check: $0.70 \\times 30 = 21$.`
      },
      {
        q: 'Estimate 19% of 200 using a benchmark, then find the exact value.',
        a: `Estimate: a bit under $40$, because $20\\%$ of $200 = 40$ and $19\\%$ is just below $20\\%$. Exact: $0.19 \\times 200 = 38$. The estimate confirms the exact answer is the right size.`
      },
      {
        q: 'Find 12½% of $64. (Hint: 12½% equals one eighth.)',
        a: `Answer: $\\$8$. $12\\tfrac{1}{2}\\% = \\tfrac{1}{8}$, so $\\tfrac{1}{8} \\times 64 = 8$. Check with the decimal: $0.125 \\times 64 = 8$.`
      },
      {
        q: 'Find 6.5% of $40.',
        a: `Answer: $\\$2.60$. $\\frac{6.5}{100} \\times 40 = \\frac{260}{100} = 2.60$. A decimal in the percent changes nothing: put the whole thing over 100 and multiply.`
      },
      {
        q: 'Find 150% of 20.',
        a: `Answer: $30$. $\\frac{150}{100} \\times 20 = 1.5 \\times 20 = 30$. The percent is above $100\\%$, so the answer is larger than the original $20$.`
      },
      {
        q: 'Find 150% of $40 and explain why the answer beats the original.',
        a: `Answer: $\\$60$. $1.5 \\times 40 = 60$. Any percent above $100\\%$ grows the quantity, because you are taking more than the whole.`
      },
      {
        q: 'Find 6.5% of \\$17.50. Round to the nearest cent.',
        a: `Answer: $\\$1.14$. Compute $\\frac{6.5}{100} \\times 17.5 = \\frac{113.75}{100} = 1.1375$. The third decimal is $7$, which is $5$ or more, so round the cents up from $13$ to $14$: $\\$1.14$.`
      },
      {
        q: 'Find 3.3% of $12.50. Round to the nearest cent.',
        a: `Answer: $\\$0.41$. Compute $0.033 \\times 12.5 = 0.4125$. The third decimal is $2$, which is below $5$, so the cents stay: $\\$0.41$. This one rounds down.`
      },
      {
        q: 'You need 35% of 750 mL of juice. How much is it?',
        a: `Answer: $262.5$ mL. $\\frac{35}{100} \\times 750 = 0.35 \\times 750 = 262.5$. The method works the same for millilitres as for money.`
      },
      {
        q: 'You need 17.5% of a $40 total. Which method is faster, and which shows your work best?',
        a: `The decimal method is faster on a calculator: $0.175 \\times 40 = \\$7$. The fraction method shows each step, so it is easier to check by hand. Both give $\\$7$. Pick the one that fits whether speed or clarity matters more.`
      },
      {
        q: 'Build 45% of $1200 from the quick percents.',
        a: `Answer: $\\$540$. $45\\% = 25\\% + 10\\% + 10\\%$. So $\\$300 + \\$120 + \\$120 = \\$540$. Check: $0.45 \\times 1200 = 540$.`
      }
    ],

    reference: {
      category: 'Quick Reference',
      title: 'Percentage of a Quantity',
      sections: [
        <>
          <h2>Core Methods</h2>
          <div className="lrn-definition">
            <span className="lrn-definition-term">Fraction Method</span>
            <div className="lrn-definition-desc">
              <p>{`$$\\frac{P}{100} \\times Q$$`}</p>
              <p>
                <strong>When to use:</strong> finding P% of any quantity Q. Write the percent as a
                fraction over 100 and multiply. Transparent and easy to check by hand.
              </p>
            </div>
          </div>
          <div className="lrn-definition">
            <span className="lrn-definition-term">Decimal Method</span>
            <div className="lrn-definition-desc">
              <p>{`$$\\left(\\frac{P}{100}\\right) \\times Q = \\text{decimal} \\times Q$$`}</p>
              <p>
                <strong>When to use:</strong> same as the fraction method. Faster on a calculator.
                Convert P% to a decimal by dividing P by 100.
              </p>
            </div>
          </div>
          <h2>Method Comparison</h2>
          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Fraction Method</span>
              <p>{`$\\tfrac{22}{100} \\times 40 = \\$8.80$`}</p>
              <p>Transparent. Every step is a fraction operation. Good for showing work.</p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Decimal Method</span>
              <p>{`$0.22 \\times 40 = \\$8.80$`}</p>
              <p>Faster on a calculator. Same answer. Good for multi-step problems.</p>
            </div>
          </div>
        </>,
        <>
          <h2>Mental Shortcuts</h2>
          <div className="lrn-steps">
            <ol className="lrn-list">
              <li>{`$10\\%$: divide by 10 (move the decimal one place left).`}</li>
              <li>{`$1\\%$: divide by 100.`}</li>
              <li>{`$50\\%$: halve it.`}</li>
              <li>{`$25\\%$: take a quarter (divide by 4).`}</li>
            </ol>
          </div>
          <h2>Building Awkward Percents</h2>
          <p>
            Add or split the quick percents to reach others. Example:{' '}
            {`$35\\% = 25\\% + 10\\%$, $15\\% = 10\\% + 5\\%$ (and $5\\%$ is half of $10\\%$), $70\\% = 7 \\times 10\\%$.`}
          </p>
          <h2>Percents Above 100%</h2>
          <p>
            {`A percent above $100\\%$ grows the quantity. $150\\%$ of $20 = 1.5 \\times 20 = 30$.`}
          </p>
          <h2>Rounding Money Answers</h2>
          <p>
            <strong>When to use:</strong> any time the answer is money. Round to the nearest cent (2
            decimal places). Look at the third decimal: if it is 5 or more, round the cents up.
            Always round at the final step.
          </p>
        </>
      ]
    },

    customCss:
      '.MafsView { --mafs-bg: transparent; --mafs-fg: var(--text-primary); --mafs-line-color: var(--border-subtle); }'
  }
  return config
}

export default function PercentageOfAQuantity() {
  const config = useConfig()
  return <LearningTemplate config={config} />
}
