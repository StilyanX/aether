import { LearningTemplate } from '../../../../components/learning/learning-template'
import { useVizColors } from '../../../../hooks/use-viz-colors'
import * as viz from './simple-and-compound-interest-viz'

function useConfig() {
  const C = useVizColors()
  const config = {
    cssPrefix: 'sci',
    documentTitle: 'Simple and Compound Interest - AETHER',
    learning: {
      groupTitle: 'Financial Applications',
      category: 'Arithmetic',
      title: 'Simple and Compound Interest',
      subtitle: 'Money grows over time. The method of calculation determines how fast.',
      sections: [
        {
          id: 'simple-interest',
          title: 'Simple Interest',
          content: (
            <>
              <h2>Simple Interest</h2>

              <div className="lrn-predict">
                <p>
                  {`You invest \\$400 for 6 months at 5% per year. Predict the interest you earn.`}
                </p>
                <details>
                  <summary>See the answer</summary>
                  <p>{`\\$10. Use $T = 0.5$ years: $I = \\frac{400 \\times 5 \\times 0.5}{100} = 10$.`}</p>
                </details>
              </div>

              <p>
                Three quantities drive every interest calculation. The <strong>principal</strong> is
                the starting sum. The <strong>rate</strong> is the annual percentage. The{' '}
                <strong>time</strong> is measured in years, or a fraction of a year. The phrase{' '}
                <em>per annum</em> means each year.
              </p>
              <p>
                <strong>Simple interest</strong> pays a fixed amount per year on the original
                principal. The balance never earns interest on its own interest. Use this method for
                short-term loans and any account that pays interest out instead of reinvesting it.
              </p>

              <div className="lrn-definition">
                <div className="lrn-definition-term">Simple interest formula</div>
                <div className="lrn-definition-desc">
                  <p>{`$$I = \\frac{P \\times R \\times T}{100}$$`}</p>
                  <p>
                    {`$P$ is the principal in dollars. $R$ is the annual rate as a percent. $T$ is time in years.`}
                  </p>
                </div>
              </div>

              <p>
                The division by 100 turns the percent into a decimal. The product{' '}
                {`$P \\times R / 100$`} is the interest earned in one year. Multiplying by $T$
                scales that amount to the actual period. Six months becomes {`$T = \\frac{1}{2}$`},
                not $T = 6$.
              </p>

              <p>
                Simple interest is <em>linear</em> in time. Double the time, double the interest.
                Triple the time, triple the interest. The graph is a straight line through the
                origin, with slope {`$\\frac{PR}{100}$`}.
              </p>

              <viz.SimpleInterestNumberLine C={C} />

              <h3>Worked example</h3>

              <p>{`Joel invests \\$400 for 6 months at 5% per year. So $P = 400$, $R = 5$, $T = 0.5$.`}</p>

              <div className="lrn-proof">
                <p>{`$$I = \\frac{400 \\times 5 \\times 0.5}{100} = \\frac{1000}{100} = 10$$`}</p>
                <p>{`Joel earns \\$10 over 6 months.`}</p>
              </div>

              <div className="lrn-callout lrn-warning">
                <p>
                  <strong>Common mistake.</strong> Using $T = 6$ for six months overcounts the
                  interest by a factor of 12. Always convert months to years before substituting.
                </p>
              </div>

              <h3>What this lets you compute</h3>
              <p>
                Given any three of {`$\\{P, R, T, I\\}$`}, you can solve for the fourth. Rearranging
                gives {`$R = \\frac{100\\,I}{PT}$`}, {`$T = \\frac{100\\,I}{PR}$`}, and{' '}
                {`$P = \\frac{100\\,I}{RT}$`}. The same straight-line relationship runs in any
                direction.
              </p>

              <div className="lrn-faded">
                <p>
                  <strong>Practice.</strong>{' '}
                  {`Cara invests \\$500 at 6% per year for 18 months. Find the simple interest.`}
                </p>
                <details>
                  <summary>Check your work</summary>
                  <p>{`$T = \\frac{18}{12} = 1.5$ years. $I = \\frac{500 \\times 6 \\times 1.5}{100} = 45$. Cara earns \\$45.`}</p>
                </details>
              </div>
            </>
          )
        },
        {
          id: 'compound-interest',
          title: 'Compound Interest',
          content: (
            <>
              <h2>Compound Interest</h2>

              <div className="lrn-predict">
                <p>
                  {`Invest $500 at 10% per year, compounded once each year. After 3 years, do you have more or less than $650?`}
                </p>
                <details>
                  <summary>See the answer</summary>
                  <p>{`More. The balance is \\$665.50. Each year's interest joins the balance, so the next year earns on a larger base.`}</p>
                </details>
              </div>

              <p>
                <strong>Compound interest</strong> charges interest on the current balance, not on
                the original principal. After each <strong>compounding period</strong>, the earned
                interest joins the balance. The next period's interest is computed from that new
                total. The compounding period is how often interest is added (yearly, monthly,
                daily).
              </p>

              <h3>The multiplier</h3>

              <p>
                From <em>Discount, Profit and Loss</em> you know a percentage rise means multiplying
                by {`$(1 + r)$`}, where $r$ is the <strong>decimal rate</strong> (10% becomes $r =
                0.10$). Compound interest applies that same multiplier once per year. At 10%, the
                balance grows by {`$\\times 1.10$`} each year. After two years it has grown by{' '}
                {`$1.10^2 = 1.21$`}; after $n$ years, by {`$1.10^n$`}.
              </p>

              <div className="lrn-definition">
                <div className="lrn-definition-term">Annual compounding</div>
                <div className="lrn-definition-desc">
                  <p>{`$$A = P\\,(1 + r)^n$$`}</p>
                  <p>
                    {`$A$ is the final balance. $P$ is the principal. $r$ is the decimal rate per year. $n$ is the number of years.`}
                  </p>
                </div>
              </div>

              <h3>Worked example</h3>

              <p>{`Start with \\$500 at 10% per year. Each step multiplies the balance by 1.10.`}</p>

              <div className="lrn-steps">
                <ol className="lrn-list">
                  <li>{`Year 0: $A = \\$500$`}</li>
                  <li>{`Year 1: $500 \\times 1.10 = \\$550$`}</li>
                  <li>{`Year 2: $550 \\times 1.10 = \\$605$ (same as $500 \\times 1.10^2$)`}</li>
                  <li>{`Year 3: $605 \\times 1.10 = \\$665.50$ (same as $500 \\times 1.10^3$)`}</li>
                </ol>
              </div>

              <viz.CompoundMultiplierLadder C={C} />

              <h3>Compounding more than once per year</h3>

              <p>
                Banks often compound monthly, quarterly, or daily. For $n$ compoundings per year,
                slice the annual rate into $n$ equal pieces and apply each piece in turn. In one
                year, the balance is multiplied by {`$(1 + r/n)^n$`}.
              </p>

              <div className="lrn-definition">
                <div className="lrn-definition-term">General compound formula</div>
                <div className="lrn-definition-desc">
                  <p>{`$$A = P\\left(1 + \\frac{r}{n}\\right)^{nt}$$`}</p>
                  <p>
                    {`$r$ is the annual rate as a decimal. $n$ is the number of compoundings per year. $t$ is time in years. With $n = 1$ this reduces to $A = P(1 + r)^t$.`}
                  </p>
                </div>
              </div>

              <p>
                The <strong>nominal rate</strong> is the stated annual percentage (the $r$ in the
                formula). The <strong>effective annual rate</strong> is the rate that would produce
                the same one-year balance with a single compounding. They differ whenever{' '}
                {`$n > 1$`}.
              </p>

              <div className="lrn-proof">
                <p>{`\\$1000 at 12% nominal, compounded quarterly, for one year. Here $r = 0.12$, $n = 4$, $t = 1$.`}</p>
                <p>{`$$A = 1000\\left(1 + \\frac{0.12}{4}\\right)^{4} = 1000 \\times 1.03^4 = \\$1\\,125.51$$`}</p>
                <p>{`The effective annual rate is 12.55%. Quarterly compounding adds about \\$5.51 over a simple yearly application of the same 12%.`}</p>
              </div>

              <viz.CompoundingFrequencyComparison C={C} />

              <p>
                Doubling the compounding frequency does not double the effective rate. Each extra
                step adds a smaller slice of interest than the one before. The gains taper because
                the per-step rate also shrinks by the same fraction.
              </p>

              <h3>What this lets you compute</h3>
              <p>
                Given the principal, the rate, the compounding frequency, and the time, you can
                project any balance forward. You can also estimate how long a balance takes to reach
                a target (the next section shows how). With annual compounding, a starting and
                ending balance over a known time gives the rate back as {`$r = (A/P)^{1/n} - 1$`}.
              </p>

              <h3>Solving for the rate</h3>

              <p>{`$1 000 grows to $1 331 in 3 years with annual compounding. What rate did it earn?`}</p>

              <div className="lrn-proof">
                <p>{`$$r = \\left(\\frac{A}{P}\\right)^{1/n} - 1 = \\left(\\frac{1331}{1000}\\right)^{1/3} - 1 = 1.10 - 1 = 0.10$$`}</p>
                <p>{`The rate is 10%. Check: $1000 \\times 1.10^3 = 1331$.`}</p>
              </div>

              <div className="lrn-faded">
                <p>
                  <strong>Practice.</strong>{' '}
                  {`\\$5 000 at 12% per year, compounded annually, for 4 years.`}
                </p>
                <details>
                  <summary>Check your work</summary>
                  <p>{`$A = 5000 \\times 1.12^4 = 5000 \\times 1.5735 \\approx \\$7\\,867.60$.`}</p>
                </details>
              </div>
            </>
          )
        },
        {
          id: 'simple-vs-compound',
          title: 'Simple vs Compound',
          content: (
            <>
              <h2>Simple vs Compound Interest</h2>

              <div className="lrn-predict">
                <p>
                  {`$1 000 at 8% for exactly 1 year. Simple interest gives $80. What does compound interest give for the same year?`}
                </p>
                <details>
                  <summary>See the answer</summary>
                  <p>{`Also $80. After one annual compounding, $A = 1000 \\times 1.08 = 1080$, so interest = $80. The two methods agree at the end of the first compounding period.`}</p>
                </details>
              </div>

              <p>
                Simple and compound interest produce the same result at the end of the first
                compounding period. They diverge after that. Simple interest adds a fixed amount
                each period. Compound interest adds a fixed <em>fraction</em> of a growing balance,
                so each period adds more than the last.
              </p>

              <viz.SimpleVsCompoundInterest C={C} />

              <div className="lrn-compare">
                <div className="lrn-compare-item">
                  <h3>Simple interest</h3>
                  <ul className="lrn-list">
                    <li>Repeated addition of a fixed amount</li>
                    <li>Linear in time</li>
                    <li>{`Formula: $I = \\frac{PRT}{100}$`}</li>
                  </ul>
                </div>
                <div className="lrn-compare-item">
                  <h3>Compound interest</h3>
                  <ul className="lrn-list">
                    <li>Repeated multiplication by a fixed factor</li>
                    <li>Exponential in time</li>
                    <li>{`Formula: $A = P(1 + r)^n$`}</li>
                  </ul>
                </div>
              </div>

              <p>
                {`Track $1 000 at 8% for 5 years. Simple interest: $I = \\frac{1000 \\times 8 \\times 5}{100} = \\$400$, ending at $\\$1\\,400$. Compound interest: $A = 1000 \\times 1.08^5 \\approx \\$1\\,469$. Compound is $69 higher after 5 years, and the gap widens every year after.`}
              </p>

              <p>
                A percentage gain then an equal percentage loss does not return you to the start.
                The page <em>Percentage Increase and Decrease</em> covers why this happens.
              </p>

              <div className="lrn-callout">
                <p>
                  <strong>When to use each.</strong> Use simple interest for flat-rate short-term
                  loans and any account that does not reinvest its earnings. Use compound interest
                  for savings accounts, salaries, inflation, and any process where last period's
                  output becomes this period's input.
                </p>
              </div>
            </>
          )
        },
        {
          id: 'doubling-time',
          title: 'Doubling Time and the Rule of 72',
          content: (
            <>
              <h2>Doubling Time and the Rule of 72</h2>

              <div className="lrn-predict">
                <p>
                  {`Savings grow at 6% per year, compounded annually. Roughly how many years until the balance doubles?`}
                </p>
                <details>
                  <summary>See the answer</summary>
                  <p>{`About 12 years. Rule of 72: $72 / 6 = 12$. A direct check gives $1.06^{12} = 2.012$, just past double.`}</p>
                </details>
              </div>

              <p>
                The <strong>doubling time</strong> is how many periods an amount needs to double at
                a constant compound rate. You want the number of years $n$ where the growth factor
                {` $(1 + r)^n$`} first reaches 2.
              </p>

              <p>
                Finding the exact doubling time needs logarithms, which you meet in a later course.
                But there is a shortcut that gets very close with only division: divide 72 by the
                rate as a percent.
              </p>

              <div className="lrn-definition">
                <div className="lrn-definition-term">Rule of 72</div>
                <div className="lrn-definition-desc">
                  <p>{`$$t_d \\approx \\frac{72}{R}$$`}</p>
                  <p>{`$R$ is the rate as a percent. So 6% doubles in about $72/6 = 12$ years.`}</p>
                </div>
              </div>

              <p>
                Why does it work? Compare the estimate against the true doubling time, found by
                multiplying the factor {`$(1 + r)$`} until the balance crosses double. The two
                columns track closely:
              </p>

              <div className="lrn-steps">
                <ul className="lrn-list">
                  <li>{`At 4%: $72/4 = 18$ years. Direct check: $1.04^{18} = 2.026$, just past double.`}</li>
                  <li>{`At 6%: $72/6 = 12$ years. Direct check: $1.06^{12} = 2.012$, just past double.`}</li>
                  <li>{`At 8%: $72/8 = 9$ years. Direct check: $1.08^{9} = 1.999$, almost exactly double.`}</li>
                </ul>
              </div>

              <p>
                The number 72 is chosen because it is easier to divide in your head: it splits
                cleanly by 2, 3, 4, 6, 8, 9, and 12.
              </p>

              <h3>Worked example</h3>

              <p>{`Invest $1 000 at 6% compounded annually. How long until it reaches $2 000?`}</p>

              <div className="lrn-proof">
                <p>{`Rule of 72: $72 / 6 = 12$ years.`}</p>
                <p>{`Check: $1000 \\times 1.06^{12} = 1000 \\times 2.012 = \\$2\\,012$. Just past double after 12 years, as the rule predicts.`}</p>
              </div>

              <div className="lrn-callout lrn-warning">
                <p>
                  <strong>Edge case.</strong>{' '}
                  {`The rule of 72 is an estimate, not an exact answer. It is most accurate for rates roughly between 4% and 15%. Below 4% it slightly underestimates the doubling time; above 15% it slightly overestimates. Inside that band the error stays small.`}
                </p>
              </div>

              <h3>What this lets you compute</h3>
              <p>
                A doubling time turns any compound rate into an instantly readable horizon. At 3%
                inflation, prices double in 24 years. At 8% market growth, capital doubles in 9
                years. The reverse also works: a quantity that doubles in $t_d$ years grows at about
                {` $72/t_d$`} percent per year.
              </p>
            </>
          )
        }
      ]
    },
    practice: [
      {
        q: `Joel invests \\$400 for 6 months at 5% per year. What is the simple interest earned?`,
        a: `Joel earns $10. Apply $I = \\frac{PRT}{100}$ with $P = 400$, $R = 5$, $T = 0.5$: $I = \\frac{400 \\times 5 \\times 0.5}{100} = \\frac{1000}{100} = 10$. The time must be in years, so 6 months becomes $T = 0.5$.`
      },
      {
        q: `Predict: if you double the time in the simple interest formula and keep everything else the same, what happens to the interest? Explain why.`,
        a: `The interest doubles. Simple interest is linear in time: $I = \\frac{PRT}{100}$. Replacing $T$ with $2T$ gives $\\frac{PR(2T)}{100} = 2 \\times \\frac{PRT}{100}$. The formula scales directly with $T$, so doubling $T$ doubles $I$.`
      },
      {
        q: `Elaborate: explain in words what $\\frac{PRT}{100}$ measures, unit by unit. Why do you divide by 100?`,
        a: `$P$ is in dollars and $R$ is in percent per year. Multiplying $P \\times R$ gives dollar-percent per year. Dividing by 100 converts the percent to a decimal, giving dollars per year. Multiplying by $T$ years then gives total dollars of interest. The division by 100 strips the percent unit so the result lands in dollars.`
      },
      {
        q: `Transfer: a bond pays simple interest of $200 per year on a $5 000 principal. What is the annual rate?`,
        a: `The annual rate is 4%. Rearrange $I = \\frac{PRT}{100}$: with $T = 1$, $R = \\frac{100 \\times I}{P \\times T} = \\frac{100 \\times 200}{5000 \\times 1} = \\frac{20000}{5000} = 4$. So $R = 4\\%$ per year.`
      },
      {
        q: `$500 is invested at 10% per year, compounded annually. What is the balance after 3 years?`,
        a: `The balance is \\$665.50. Use $A = P(1 + r)^n$ with $P = 500$, $r = 0.10$, $n = 3$: $A = 500 \\times 1.10^3 = 500 \\times 1.331 = 665.50$. Each year the balance absorbs the new interest, so the next year earns on a larger base.`
      },
      {
        q: `Why does compound interest grow faster than simple interest over a long period? Explain using the formulas.`,
        a: `Compound interest earns interest on the growing balance, not just the principal. Simple interest adds the same fixed amount each year: $I = \\frac{PRT}{100}$, which is linear. Compound interest multiplies by $(1+r)$ each year: $A = P(1+r)^n$, which is exponential. Exponential growth eventually outpaces any linear growth because the base keeps rising.`
      },
      {
        q: `Predict: $1 000 invested for 10 years at 6% compounded monthly vs 6% compounded annually. Which gives a higher balance? By roughly how much?`,
        a: `Monthly compounding gives a higher balance. Annual: $1000 \\times 1.06^{10} \\approx \\$1790.85$. Monthly: $1000 \\times (1 + 0.005)^{120} \\approx \\$1819.40$. Monthly is about $29 higher. More frequent compounding means each period's interest is added sooner and itself earns interest sooner.`
      },
      {
        q: `The compound interest formula is $A = P(1+r)^n$. If $A$, $P$, and $n$ are known, write an expression for $r$.`,
        a: `Divide both sides by $P$: $\\frac{A}{P} = (1+r)^n$. Take the $n$-th root: $(1+r) = \\left(\\frac{A}{P}\\right)^{1/n}$. Subtract 1: $r = \\left(\\frac{A}{P}\\right)^{1/n} - 1$. This recovers the rate needed to grow $P$ to $A$ in $n$ years.`
      },
      {
        q: `Inflation runs at 3% per year. A loaf of bread costs $2 today. What will it cost in 5 years?`,
        a: `It will cost about $2.32. This is compound growth: $A = 2 \\times (1.03)^5 = 2 \\times 1.1593 \\approx 2.32$. Inflation has the same exponential structure as compound interest because each year's price rise is 3% of that year's price, not 3% of the original $2.`
      },
      {
        q: `Self-explain: in the simple interest formula, why does $T$ need to be in years when $R$ is an annual rate?`,
        a: `The rate $R$ is defined per year (per annum). So $R/100$ is the fraction of the principal earned in one full year. To find the interest for a different duration, scale by $T$ years. If $T$ were in months and $R$ were annual, multiplying them would mix units and give a meaningless result. Matching units keeps the calculation consistent.`
      },
      {
        q: `Transfer: a grant grows at 5% per year (compound). It starts at $10 000. After how many complete years will it first exceed $13 000?`,
        a: `After 6 years. Check: $10000 \\times 1.05^5 = 10000 \\times 1.2763 = 12763$ (not enough). $10000 \\times 1.05^6 = 10000 \\times 1.3401 = 13401$ (exceeds $13 000). So $n = 6$ is the first year it crosses the target.`
      },
      {
        q: `Rule of 72: a savings account pays 4% per year, compounded annually. Estimate the doubling time, then check it by direct multiplication.`,
        a: `Rule of 72: $t_d \\approx 72/4 = 18$ years. Check by multiplying the factor 1.04 eighteen times: $1.04^{18} = 2.026$. The balance is just past double after 18 years, so the estimate is on target. At this low rate the rule is very close to the true doubling time.`
      }
    ],
    reference: {
      category: 'Quick Reference',
      title: 'Simple and Compound Interest',
      sections: [
        {
          title: 'Simple Interest',
          content: (
            <>
              <div className="ref-formula">{`$$I = \\frac{P \\times R \\times T}{100}$$`}</div>
              <ul className="lrn-list">
                <li>{`$P$ = principal, $R$ = annual rate (%), $T$ = time in years`}</li>
                <li>For months: convert to years first (e.g. 6 months = 0.5)</li>
                <li>Linear in time: doubling $T$ doubles $I$</li>
              </ul>
              <p>
                <strong>When to use:</strong> flat-rate loans and short-term savings that do not
                reinvest interest.
              </p>
            </>
          )
        },
        {
          title: 'Compound Interest',
          content: (
            <>
              <div className="ref-formula">{`$$A = P\\left(1 + \\frac{r}{n}\\right)^{nt}$$`}</div>
              <ul className="lrn-list">
                <li>{`$P$ = principal, $r$ = nominal annual decimal rate, $n$ = compoundings per year, $t$ = years`}</li>
                <li>{`Annual compounding ($n = 1$): $A = P(1 + r)^t$`}</li>
                <li>{`Monthly: $n = 12$. Quarterly: $n = 4$. Daily: $n = 365$.`}</li>
                <li>
                  <strong>Effective annual rate</strong> = {`$(1 + r/n)^n - 1$`}. Always at or above
                  the nominal rate.
                </li>
                <li>{`Solve for rate (annual): $r = (A/P)^{1/n} - 1$`}</li>
              </ul>
              <p>
                <strong>When to use:</strong> savings accounts, salary growth, inflation, and any
                process where last period's output becomes this period's input.
              </p>
            </>
          )
        },
        {
          title: 'Doubling Time',
          content: (
            <>
              <div className="ref-formula">{`$$t_d \\approx \\frac{72}{R}$$`}</div>
              <ul className="lrn-list">
                <li>{`$R$ = rate as a percent`}</li>
                <li>Rule of 72 is accurate for $R$ between roughly 4% and 15%</li>
                <li>Estimate only: check by multiplying the factor until the balance doubles</li>
              </ul>
              <p>
                <strong>When to use:</strong> quick mental estimates of how long money, prices, or
                any compounding quantity takes to double.
              </p>
            </>
          )
        }
      ]
    },
    customCss:
      '.MafsView { --mafs-bg: transparent; --mafs-fg: var(--text-primary); --mafs-line-color: var(--border-subtle); }'
  }
  return config
}

export default function SimpleAndCompoundInterest() {
  const config = useConfig()
  return <LearningTemplate config={config} />
}
