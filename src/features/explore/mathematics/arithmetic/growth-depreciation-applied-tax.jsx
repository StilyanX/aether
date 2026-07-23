import { LearningTemplate } from '../../../../components/learning/learning-template'
import { useVizColors } from '../../../../hooks/use-viz-colors'
import * as viz from './growth-depreciation-applied-tax-viz'

function useConfig() {
  const C = useVizColors()
  const config = {
    cssPrefix: 'gda',
    documentTitle: 'Growth, Depreciation, Applied Tax - AETHER',
    customCss:
      '.MafsView { --mafs-bg: transparent; --mafs-fg: var(--text-primary); --mafs-line-color: var(--border-subtle); }',
    learning: {
      groupTitle: 'Financial Applications',
      category: 'Arithmetic',
      title: 'Growth, Depreciation, Applied Tax',
      subtitle:
        'You know the mechanics. This page puts them to work: real money decisions with compound growth, depreciation, and layered tax brackets.',
      sections: [
        {
          id: 'what-you-already-know',
          title: 'What You Already Know',
          content: (
            <>
              <h2>What You Already Know</h2>

              <p>
                This is the capstone of the percentage unit. You already have every tool you need.
                This page does not re-teach them. It puts them to work on harder money problems.
              </p>

              <div className="lrn-definition">
                <div className="lrn-definition-term">Assumed knowledge (do not re-derive)</div>
                <div className="lrn-definition-desc">
                  <p>
                    <strong>Percentage change.</strong> You measure a shift against the value you
                    started from. You divide the change by the original value, then multiply by 100.
                  </p>
                  <p>
                    <strong>Increase and decrease.</strong> You grow a value by a fixed percent by
                    multiplying it once by {`$(1 + R/100)$`}. You shrink it by multiplying once by{' '}
                    {`$(1 - R/100)$`}.
                  </p>
                  <p>
                    <strong>Compound growth.</strong> You apply the same multiplier once per period.
                    After {`$n$`} periods the value is {`$P(1 + R/100)^n$`}.
                  </p>
                  <p>
                    <strong>Compound depreciation.</strong> Same idea with a factor below 1. After{' '}
                    {`$n$`} periods the value is {`$P(1 - R/100)^n$`}.
                  </p>
                </div>
              </div>

              <p>
                If any line above feels new, slow down and rebuild it from the percentage basics
                first. Everything below assumes you can compute these in one step.
              </p>

              <viz.CompoundGrowthDepreciationSlider C={C} />

              <p>
                The rest of this page does two things. First, it applies growth and depreciation to
                real spending and saving choices. Second, it goes deep on tax: how layered brackets
                actually split your income, and how to compare whole tax systems.
              </p>
            </>
          )
        },
        {
          id: 'applied-growth-depreciation',
          title: 'Applying Growth and Depreciation to Decisions',
          content: (
            <>
              <h2>Applying Growth and Depreciation to Decisions</h2>

              <p>
                A formula on its own answers nothing. The skill is turning a money question into the
                right multiplier and the right number of periods. Here the problems lead. You bring
                the mechanics you already have.
              </p>

              <h3>Choosing Between Two Savings Accounts</h3>

              <p>
                You have $12 000 to save for 6 years. Account A pays 4% per year. Account B pays 6%
                per year. Two extra percentage points sounds small. How many dollars does it
                actually win?
              </p>

              <div className="lrn-proof">
                <ol className="lrn-list">
                  <li>{`Account A: $12000 \\times 1.04^6 = 12000 \\times 1.2653 \\approx \\$15\\,183.83$`}</li>
                  <li>{`Account B: $12000 \\times 1.06^6 = 12000 \\times 1.4185 \\approx \\$17\\,022.23$`}</li>
                  <li>{`Difference: $17022.23 - 15183.83 \\approx \\$1\\,838.40$`}</li>
                </ol>
                <p>
                  Use a calculator for the powers. Two points of rate become over $1 800 in dollars,
                  because the gap compounds every year on a growing base.
                </p>
              </div>

              <p>
                <strong>You can now</strong> turn a rate gap into a dollar gap over any number of
                years. You no longer have to guess whether a small rate difference matters.
              </p>

              <h3>When to Sell a Depreciating Asset</h3>

              <p>
                A delivery van costs $28 000 new. It loses 18% of its value each year. A buyer
                offers to take it in 4 years. What is it worth then?
              </p>

              <div className="lrn-proof">
                <ol className="lrn-list">
                  <li>{`Retained factor each year: $(1 - 0.18) = 0.82$`}</li>
                  <li>{`After 4 years: $A = 28000 \\times 0.82^4$`}</li>
                  <li>{`$0.82^4 \\approx 0.4521$ (use a calculator for the power)`}</li>
                  <li>{`$A = 28000 \\times 0.4521 \\approx \\$12\\,659.41$`}</li>
                </ol>
                <p>
                  The van keeps about 45% of its value after 4 years. The yearly dollar drop shrinks
                  over time, because 18% comes off a smaller base each year.
                </p>
              </div>

              <p>
                <strong>You can now</strong> price a used asset at any future year and judge whether
                an offer is fair.
              </p>

              <h3>Inflation Eats a Frozen Salary</h3>

              <p>
                Depreciation does not only hit objects. A frozen salary loses real value as prices
                rise. Suppose your pay stays at $35 000 while inflation runs 5% per year. What can
                that salary still buy after 5 years?
              </p>

              <div className="lrn-proof">
                <p>{`$$\\text{Real value} = \\frac{35000}{(1.05)^5} = \\frac{35000}{1.2763} \\approx \\$27\\,423$$`}</p>
                <p>
                  Use a calculator for the power. Standing still costs you. The same dollars buy
                  about $7 600 less after 5 years, because prices grew while your pay did not.
                </p>
              </div>

              <div className="lrn-faded">
                <p>
                  <strong>Your turn.</strong>{' '}
                  {`A factory machine costs $45 000 and depreciates 20% per year. A buyer offers
                  $22 000 for it in 3 years. Is that a fair price?`}
                </p>
                <details>
                  <summary>Check your work</summary>
                  <p>
                    {`Value after 3 years: $A = 45000 \\times 0.80^3 = 45000 \\times 0.512 = \\$23\\,040$.
                    The offer of \\$22 000 sits below its computed worth, so it is slightly low.`}
                  </p>
                </details>
              </div>
            </>
          )
        },
        {
          id: 'applied-tax',
          title: 'Applied Tax: Layered Brackets',
          content: (
            <>
              <h2>Applied Tax: Layered Brackets</h2>

              <p>
                Tax is the deepest application of slice-by-slice percentage work. You meet a
                tax-free allowance, then several bands that each charge their own rate. Here you
                take it past two bands and learn to compare whole systems, not just single bills.
              </p>

              <div className="lrn-definition">
                <div className="lrn-definition-term">The four-step method (your tool)</div>
                <div className="lrn-definition-desc">
                  <p>
                    Gross income is your total yearly pay before any tax. The tax-free allowance is
                    the first slice that pays no tax at all.
                  </p>
                  <ol className="lrn-list">
                    <li>Subtract the tax-free allowance from gross income. The rest is taxable.</li>
                    <li>Fill the bands from the bottom up, each up to its own width.</li>
                    <li>Multiply each band by its own rate.</li>
                    <li>Add the band taxes together.</li>
                  </ol>
                  <p>Each rate owns only its own slice. No rate ever touches the whole income.</p>
                </div>
              </div>

              <h3>Three Bands: Priya's Tax</h3>

              <p>
                Two-band tax is a warm-up. Real systems stack more. Priya earns $58 000. Her system
                gives an $8 000 tax-free allowance. The next $25 000 is taxed at 10%. The next $20
                000 at 25%. Everything above that at 45%.
              </p>

              <div className="lrn-proof">
                <ol className="lrn-list">
                  <li>{`Taxable income: $58000 - 8000 = \\$50\\,000$`}</li>
                  <li>{`Band 1: $25000 \\times 0.10 = \\$2\\,500$`}</li>
                  <li>{`Band 2: $20000 \\times 0.25 = \\$5\\,000$`}</li>
                  <li>{`Used so far: $25000 + 20000 = \\$45\\,000$. Remaining: $50000 - 45000 = \\$5\\,000$`}</li>
                  <li>{`Band 3: $5000 \\times 0.45 = \\$2\\,250$`}</li>
                  <li>{`Total tax: $2500 + 5000 + 2250 = \\$9\\,750$`}</li>
                </ol>
              </div>

              <viz.TaxBracketBar C={C} />

              <p>
                <strong>You can now</strong> handle a bracket schedule of any depth, not just two
                bands. The method does not change; you just fill more slices.
              </p>

              <h3>Marginal and Effective Rate, Read Off the Bands</h3>

              <p>
                You already know two rates. Marginal rate is the rate on your last dollar. Effective
                rate is total tax over gross income. Priya shows how far apart they sit in a
                three-band system.
              </p>

              <ul className="lrn-list">
                <li>{`Marginal rate: 45%. Her last dollar sits in the top band.`}</li>
                <li>{`Effective rate: $\\frac{9750}{58000} \\approx 16.81\\%$.`}</li>
              </ul>

              <p>
                The effective rate is barely a third of the marginal rate. Most of her income sits
                in the allowance and the two lower bands. Only $5 000 ever meets the 45% rate. This
                is why the marginal rate alone tells you almost nothing about the real tax bill.
              </p>

              <div className="lrn-callout lrn-warning">
                <p>
                  <strong>The classic trap.</strong> A student says Priya's top rate is 45%, so her
                  tax is {`$58000 \\times 0.45 = \\$26\\,100$`}. Wrong. That charges 45% on income
                  that never reaches the top band. Her real tax is $9 750, less than half that
                  guess.
                </p>
              </div>

              <h3>Comparing Two Whole Tax Systems</h3>

              <p>
                The deeper skill is judging a flat tax against a tiered one. A flat tax charges a
                single rate on the whole gross income, with no allowance. Take a flat 18% against
                Priya's tiered system, for someone earning $58 000.
              </p>

              <div className="lrn-compare">
                <div className="lrn-compare-item">
                  <h3>Flat 18% System</h3>
                  <ul className="lrn-list">
                    <li>One rate on all gross income</li>
                    <li>{`$58000 \\times 0.18 = \\$10\\,440$`}</li>
                    <li>No allowance, no bands</li>
                  </ul>
                </div>
                <div className="lrn-compare-item">
                  <h3>Tiered System (Priya's)</h3>
                  <ul className="lrn-list">
                    <li>Allowance plus three bands</li>
                    <li>{`Total tax: $\\$9\\,750$`}</li>
                    <li>Lower slices pay lower rates</li>
                  </ul>
                </div>
              </div>

              <p>
                At $58 000 the tiered system costs Priya $690 less. The allowance and the gentle
                first band protect her early income. A flat rate gives that protection up but is
                simpler to compute. The winner depends on the income. A flat tax can beat a tiered
                one for very high earners. Almost all of their income sits in the top band anyway.
              </p>

              <h3>Comparing Two Earners</h3>

              <p>
                Effective rate is the fair way to rank tax burdens across different incomes. Take
                Marcus and Soren, both inside Priya's system.
              </p>

              <div className="lrn-proof">
                <p>
                  <strong>Marcus earns $40 000.</strong>
                </p>
                <ol className="lrn-list">
                  <li>{`Taxable: $40000 - 8000 = \\$32\\,000$`}</li>
                  <li>{`Band 1: $25000 \\times 0.10 = \\$2\\,500$`}</li>
                  <li>{`Band 2: $7000 \\times 0.25 = \\$1\\,750$ (only \\$7 000 left)`}</li>
                  <li>{`Total: $\\$4\\,250$. Effective: $\\frac{4250}{40000} \\approx 10.62\\%$`}</li>
                </ol>
                <p>
                  <strong>Soren earns $75 000.</strong>
                </p>
                <ol className="lrn-list">
                  <li>{`Taxable: $75000 - 8000 = \\$67\\,000$`}</li>
                  <li>{`Band 1: $25000 \\times 0.10 = \\$2\\,500$`}</li>
                  <li>{`Band 2: $20000 \\times 0.25 = \\$5\\,000$`}</li>
                  <li>{`Band 3: $22000 \\times 0.45 = \\$9\\,900$`}</li>
                  <li>{`Total: $\\$17\\,400$. Effective: $\\frac{17400}{75000} = 23.2\\%$`}</li>
                </ol>
              </div>

              <p>
                Soren's effective rate is more than double Marcus's. More of his income reaches the
                25% and 45% bands. Both face the same 45% marginal rate at the top, yet their real
                burdens differ sharply. That gap is the whole point of effective rate.
              </p>

              <p>
                <strong>You can now</strong> rank two earners fairly and compare a flat tax against
                a tiered one. You can also explain why a high marginal rate rarely means a high real
                bill.
              </p>

              <div className="lrn-faded">
                <p>
                  <strong>Your turn.</strong>{' '}
                  {`Nadia earns $33 000 in Priya's system (allowance $8 000, then $25 000 at 10%,
                  $20 000 at 25%, remainder at 45%). Find her total tax and effective rate.`}
                </p>
                <details>
                  <summary>Check your work</summary>
                  <p>
                    {`Taxable: $33000 - 8000 = \\$25\\,000$. All of it fits inside Band 1.
                    Tax: $25000 \\times 0.10 = \\$2\\,500$. Bands 2 and 3 are empty.
                    Effective rate: $\\frac{2500}{33000} \\approx 7.58\\%$.`}
                  </p>
                </details>
              </div>
            </>
          )
        }
      ]
    },
    practice: [
      {
        q: `You save $12 000 for 6 years. Account A pays 4% per year; Account B pays 6% per year. How many more dollars does B earn?`,
        a: `B earns about $1 838 more. Account A: $12000 \\times 1.04^6 = 12000 \\times 1.2653 \\approx \\$15\\,183.83$. Account B: $12000 \\times 1.06^6 = 12000 \\times 1.4185 \\approx \\$17\\,022.23$. Difference: $17022.23 - 15183.83 \\approx \\$1\\,838.40$. Use a calculator for the powers. The two-point rate gap compounds every year on a growing base.`
      },
      {
        q: `A delivery van costs $28 000 new and loses 18% of its value each year. What is it worth after 4 years?`,
        a: `It is worth about $12 659. Retained factor: $(1 - 0.18) = 0.82$. After 4 years: $A = 28000 \\times 0.82^4 = 28000 \\times 0.4521 \\approx \\$12\\,659.41$. Use a calculator for the power. The van keeps about 45% of its value, and the yearly dollar drop shrinks as the base shrinks.`
      },
      {
        q: `Your salary is frozen at $35 000 while inflation runs 5% per year. What can that salary still buy after 5 years?`,
        a: `About $27 423 in today's buying power. Real value: $\\frac{35000}{(1.05)^5} = \\frac{35000}{1.2763} \\approx \\$27\\,423$. Use a calculator for the power. A frozen salary loses real value because prices keep rising while your pay does not.`
      },
      {
        q: `A factory machine costs $45 000 and depreciates 20% per year. A buyer offers $22 000 for it in 3 years. Is the offer fair?`,
        a: `The offer is slightly low. Value after 3 years: $A = 45000 \\times 0.80^3 = 45000 \\times 0.512 = \\$23\\,040$. The offer of \\$22 000 sits about $1 000 below the computed worth. You would do a little better holding out or negotiating up.`
      },
      {
        q: `Priya earns $58 000. Her system gives an $8 000 allowance, then $25 000 at 10%, $20 000 at 25%, and the remainder at 45%. Find her total tax.`,
        a: `Her total tax is $9 750. Taxable: $58000 - 8000 = 50000$. Band 1: $25000 \\times 0.10 = 2500$. Band 2: $20000 \\times 0.25 = 5000$. Used so far: $45 000$, so $5 000$ remains. Band 3: $5000 \\times 0.45 = 2250$. Total: $2500 + 5000 + 2250 = 9750$. The 45% rate touches only the top $5 000.`
      },
      {
        q: `A student says: "Priya's top rate is 45%, so her tax is $58 000 × 0.45 = $26 100." What is wrong?`,
        a: `The student charged 45% on the whole income. That is incorrect. The first $8 000 is tax-free. The next $25 000 pays only 10%, and the next $20 000 pays 25%. Only the top $5 000 ever meets the 45% rate. Each band must be computed on its own slice. The correct total is $9 750, far below $26 100.`
      },
      {
        q: `Find Priya's effective rate, given a total tax of $9 750 on gross income of $58 000. Why is it so far below her 45% marginal rate?`,
        a: `Effective rate: $\\frac{9750}{58000} \\approx 16.81\\%$. It sits far below 45% because most of her income falls in the allowance and the two lower bands. Only $5 000 ever reaches the 45% rate. The marginal rate describes one slice; the effective rate averages over all of it.`
      },
      {
        q: `Compare a flat 18% tax against Priya's tiered system for someone earning $58 000. Which charges less, and why?`,
        a: `The tiered system charges $690 less. Flat: $58000 \\times 0.18 = \\$10\\,440$. Tiered: $9 750 (Priya's calculation). The tiered system wins here because the $8 000 allowance and the gentle 10% first band protect her early income. A flat rate gives that protection up in exchange for simpler arithmetic.`
      },
      {
        q: `Marcus earns $40 000 in Priya's system (allowance $8 000, then $25 000 at 10%, $20 000 at 25%, remainder at 45%). Find his total tax and effective rate.`,
        a: `Total tax: $4 250. Effective rate: about 10.62%. Taxable: $40000 - 8000 = 32000$. Band 1: $25000 \\times 0.10 = 2500$. Band 2: only $7 000 is left, so $7000 \\times 0.25 = 1750$. Band 3 is empty. Total: $2500 + 1750 = 4250$. Effective: $\\frac{4250}{40000} \\approx 10.62\\%$.`
      },
      {
        q: `Soren earns $75 000 in the same system. Find his total tax and effective rate. Whose effective rate is higher, his or Marcus's?`,
        a: `Total tax: $17 400. Effective rate: 23.2%. Taxable: $75000 - 8000 = 67000$. Band 1: $25000 \\times 0.10 = 2500$. Band 2: $20000 \\times 0.25 = 5000$. Band 3: $22000 \\times 0.45 = 9900$. Total: $17 400$. Effective: $\\frac{17400}{75000} = 23.2\\%$. Soren's effective rate is more than double Marcus's, because much more of his income reaches the upper bands.`
      },
      {
        q: `Two earners share Priya's brackets. Both face the same 45% top marginal rate. Why can their effective rates still differ widely?`,
        a: `The marginal rate only describes the last slice of income. Effective rate averages the tax over every dollar, including the tax-free allowance and the lower bands. An earner with little income in the top band keeps most of their money at low rates. So two people with the same top rate can pay very different real percentages.`
      },
      {
        q: `Design check: at what kind of income would a flat tax start to beat Priya's tiered system?`,
        a: `At very high incomes. As income climbs, almost all of it sits in the 45% band, so the tiered effective rate approaches 45%. A flat rate below 45% then charges less overall. At low incomes the tiered system wins, because the allowance and the 10% band shield the early money. The crossover happens once the top band dominates the total.`
      }
    ],
    reference: {
      category: 'Quick Reference',
      title: 'Growth, Depreciation, Applied Tax',
      sections: [
        {
          title: 'Growth and Depreciation (assumed)',
          content: (
            <>
              <div className="ref-formula">
                {`$$A = P\\left(1 + \\frac{R}{100}\\right)^n \\quad \\text{(growth)}$$`}
                {`$$A = P\\left(1 - \\frac{R}{100}\\right)^n \\quad \\text{(depreciation)}$$`}
              </div>
              <ul className="lrn-list">
                <li>
                  {`$P$ = starting value, $R$ = percentage rate per period, $n$ = number of periods`}
                </li>
                <li>
                  Growth: factor above 1, value rises. Depreciation: factor below 1, value falls
                </li>
                <li>Use a calculator for the power, then multiply by the starting value</li>
              </ul>
              <p>
                <strong>Applied use:</strong> compare two savings rates in dollars, or price a used
                asset at a future year. You can also measure how inflation erodes a frozen salary.
              </p>
            </>
          )
        },
        {
          title: 'Layered Tax: The Four Steps',
          content: (
            <>
              <div className="ref-formula">
                {`$$\\text{Tax} = \\text{Rate}_1 \\times \\text{Band}_1 + \\text{Rate}_2 \\times \\text{Band}_2 + \\ldots$$`}
              </div>
              <ol className="lrn-list">
                <li>Subtract the tax-free allowance from gross income</li>
                <li>Fill the bands from the bottom up, each to its own width</li>
                <li>Multiply each band by its own rate</li>
                <li>Add all the band taxes together</li>
              </ol>
              <ul className="lrn-list">
                <li>Each band is the dollars in that slice, never the full taxable income</li>
                <li>
                  <strong>Marginal rate:</strong> the rate on your highest slice of income
                </li>
                <li>
                  {`Effective rate $= \\frac{\\text{total tax}}{\\text{gross income}} \\times 100$, always below the top marginal rate`}
                </li>
              </ul>
              <p>
                <strong>Worked anchor (Priya, $58 000):</strong>{' '}
                {`Allowance $8 000, then $25 000 at 10%, $20 000 at 25%, remainder at 45%.
                Taxable $50 000. Tax $2 500 + $5 000 + $2 250 = $9 750. Effective rate 16.81%.`}
              </p>
            </>
          )
        },
        {
          title: 'Comparing Tax Systems',
          content: (
            <>
              <ul className="lrn-list">
                <li>
                  <strong>Flat tax:</strong> one rate on all gross income, no allowance, no bands
                </li>
                <li>
                  <strong>Tiered (progressive) tax:</strong> higher slices of income pay higher
                  rates
                </li>
                <li>Rank two earners by effective rate, not by marginal rate</li>
              </ul>
              <p>
                <strong>Rule of thumb:</strong> a tiered system charges low earners less, because
                the allowance and low first band shield early income. A flat rate can charge high
                earners less, because their income sits mostly in the top band anyway.
              </p>
            </>
          )
        }
      ]
    }
  }
  return config
}

export default function GrowthDepreciationAppliedTax() {
  const config = useConfig()
  return <LearningTemplate config={config} />
}
