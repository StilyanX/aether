import { LearningTemplate } from '../../../../components/learning/learning-template'
import { useVizColors } from '../../../../hooks/use-viz-colors'
import * as viz from './discount-profit-loss-viz'

function useConfig() {
  const C = useVizColors()

  return {
    cssPrefix: 'dpl',
    documentTitle: 'Discount, Profit, Loss - AETHER',
    learning: {
      groupTitle: 'Financial Applications',
      category: 'Arithmetic',
      title: 'Discount, Profit, Loss',
      subtitle: 'Master profit, loss, discount, reverse prices, and markup versus margin.',
      sections: [
        <>
          <h2>What This Topic Is For</h2>
          <p>
            Every price tag, paycheck, loan, and savings account speaks the language of percentages.
          </p>
          <p>
            A dollar amount on its own hides whether a change is big or small. A percentage tells
            you the change relative to where you started. That ratio is what you actually need for
            comparing deals, judging investments, or recovering an original price from a sale tag.
          </p>

          <div className="lrn-predict">
            <details>
              <summary>
                <strong>PREDICT:</strong> A jacket costs 100 dollars. The price goes up by 70
                dollars. A car costs 7000 dollars. The price also goes up by 70 dollars. Which
                increase is bigger?
              </summary>
              <div>
                <p>In dollars they are identical: 70 each.</p>
                <p>
                  Against the starting price, the jacket rose by 70%; the car rose by 1%. The jacket
                  is the bigger move.
                </p>
              </div>
            </details>
          </div>

          <viz.PercentageChangeNumberLine C={C} />

          <div className="lrn-elaborate">
            <strong>The whole topic rests on one move.</strong>
            <p>
              Take an actual change, divide it by the value you started with, multiply by 100.
              Profit, loss, discount: every formula in the rest of this topic is that same ratio,
              dressed in different words.
            </p>
          </div>
        </>,

        <>
          <h2>Percentage Change: The Foundation</h2>
          <p>
            You already know how to find a percentage change. Subtract the original value from the
            new value, divide by the original value, then multiply by 100. Every formula on this
            page is that one move, dressed in trade words.
          </p>

          <p className="lrn-eq lrn-eq-hero">{`$$\\text{percentage change} = \\frac{\\text{new value} - \\text{original value}}{\\text{original value}} \\times 100$$`}</p>

          <p>
            The denominator is the original value, because the change is always measured against
            where you started, not where you ended up.
          </p>
        </>,

        <>
          <h2>Profit and Loss</h2>
          <p>
            A trader buys at the <strong>cost price (CP)</strong> and resells at the{' '}
            <strong>selling price (SP)</strong>. The gap between them is profit when SP &gt; CP and
            loss when SP &lt; CP.
          </p>
          <p>
            Percentage profit and loss are just percentage change with one rule fixed. The base is
            always the cost price, because that is the money the trader put in.
          </p>

          <div className="lrn-predict">
            <details>
              <summary>
                <strong>PREDICT:</strong> Two traders each make 20 dollars profit. Trader A paid 100
                dollars for the goods. Trader B paid 200 dollars. Who had the better return?
              </summary>
              <div>
                <p>Trader A: {`$\\frac{20}{100} \\times 100 = 20\\%$`} profit.</p>
                <p>Trader B: {`$\\frac{20}{200} \\times 100 = 10\\%$`} profit.</p>
                <p>Same dollar profit, but Trader A had twice the percentage return.</p>
              </div>
            </details>
          </div>

          <div className="lrn-definition">
            <div className="lrn-definition-term">Percentage Profit or Loss</div>
            <div className="lrn-definition-desc">
              <p>
                Take the gap between selling price and cost price, divide by the cost price,
                multiply by 100. The sign of the gap (SP − CP) tells you which: positive is profit,
                negative is loss.
              </p>
              <p>{`$$\\text{\\% profit or loss} = \\frac{SP - CP}{CP} \\times 100$$`}</p>
            </div>
          </div>

          <div className="lrn-callout">
            <p>
              <strong>Edge case:</strong> A 100% loss means SP = 0, so the entire investment is
              gone. A loss above 100% is impossible: you cannot lose more than you invested, because
              the worst case is selling for nothing.
            </p>
          </div>

          <viz.ProfitLossBar C={C} />

          <h3>Worked Example: Profit Calculation</h3>
          <p>A bicycle is bought for 250 dollars and sold for 300 dollars.</p>

          <div className="lrn-steps">
            <ol className="lrn-list">
              <li>Profit: {`$300 - 250 = 50$`} dollars.</li>
              <li>Percentage profit: {`$\\frac{50}{250} \\times 100 = 20\\%$`}.</li>
            </ol>
          </div>

          <p>You can now turn any buy/sell pair into a profit or loss percentage.</p>

          <div className="lrn-faded">
            <div className="lrn-faded-complete">
              <strong>COMPLETE EXAMPLE:</strong> Buy at 50 dollars, sell at 35 dollars.
              <ol className="lrn-list">
                <li>Loss: {`$50 - 35 = 15$`} dollars.</li>
                <li>Percentage loss: {`$\\frac{15}{50} \\times 100 = 30\\%$`}.</li>
              </ol>
            </div>
            <div className="lrn-faded-partial">
              <strong>YOUR TURN: PARTIAL:</strong> Buy at 120 dollars, sell at 150 dollars.
              <ol className="lrn-list">
                <li>Profit: {`$150 - 120 = $`} _____ dollars.</li>
                <li>Percentage profit: {`$\\frac{\\square}{120} \\times 100 = $`} _____ %.</li>
              </ol>
            </div>
            <div className="lrn-faded-independent">
              <strong>INDEPENDENT PRACTICE:</strong> A market stall buys oranges for 8 dollars and
              sells them for 6 dollars. Calculate the percentage loss.
            </div>
          </div>
        </>,

        <>
          <h2>Discount</h2>
          <p>
            A discount is the mirror of a profit. Profit raises the cost price up to the selling
            price; a discount cuts the <strong>marked price</strong> (the advertised, pre-sale
            price) down to the selling price the buyer actually pays.
          </p>
          <p>
            A discount of r% is a percentage decrease on the marked price, so the same formula
            applies, with the marked price as the base.
          </p>

          <div className="lrn-predict">
            <details>
              <summary>
                <strong>PREDICT:</strong> A coat is marked at 24 dollars and there is a 5% discount.
                Without calculating, is the selling price closer to 22 dollars or to 20 dollars?
              </summary>
              <div>
                <p>5% of 24 dollars is 1.20 dollars.</p>
                <p>
                  So the selling price is {`$24 - 1.20 = 22.80$`} dollars: closer to 22 dollars.
                </p>
              </div>
            </details>
          </div>

          <div className="lrn-definition">
            <div className="lrn-definition-term">Selling Price After Discount</div>
            <div className="lrn-definition-desc">
              <p>{`$$\\text{selling price} = \\left(1 - \\frac{r}{100}\\right) \\times \\text{marked price}$$`}</p>
            </div>
          </div>

          <div className="lrn-elaborate">
            <strong>Why multiply by {`$(1 - r/100)$`}?</strong>
            <p>
              Removing {`$r\\%$`} of a price leaves {`$(100 - r)\\%$`} of it, which is
              {` `}
              {`$\\frac{100-r}{100} = 1 - \\frac{r}{100}$`}. Multiplying by that single number jumps
              straight to the final price, no separate subtraction step.
            </p>
          </div>

          <div className="lrn-callout">
            <p>
              <strong>Edge case:</strong> A discount above 100% is meaningless. It would mean the
              multiplier {`$1 - r/100$`} goes negative, producing a negative selling price (the shop
              paying you to take the item). Real discount rates sit in 0% to 100%.
            </p>
          </div>

          <viz.DiscountPriceLadder C={C} />

          <h3>Worked Example: Coat Discount</h3>
          <p>A coat originally costs 24 dollars. The shop gives a 5% discount.</p>

          <div className="lrn-steps">
            <ol className="lrn-list">
              <li>Discount amount: {`$\\frac{5}{100} \\times 24 = 1.20$`} dollars.</li>
              <li>Selling price: {`$24 - 1.20 = 22.80$`} dollars.</li>
            </ol>
          </div>

          <p>Using the multiplier shortcut: {`$0.95 \\times 24 = 22.80$`} dollars in one step.</p>

          <p>
            The same multiplier idea works for increases. You add instead of subtract, so the
            multiplier becomes {`$(1 + r/100)$`}.
          </p>

          <h3>Worked Example: CD Price Increase</h3>
          <p>A CD costs 11.60 dollars. The price increases by 7%.</p>

          <div className="lrn-steps">
            <ol className="lrn-list">
              <li>New price is 107% of the old price.</li>
              <li>{`$1.07 \\times 11.60 = 12.41$`} dollars.</li>
            </ol>
          </div>

          <div className="lrn-self-explain">
            <strong>SELF-EXPLAIN:</strong> Why is the multiplier 1.07 for a 7% increase, not 0.07?
            <p>
              0.07 is just the 7% fraction. Multiplying by 0.07 gives you only the increase amount.
            </p>
            <p>
              You need the original price plus the increase. That is 100% + 7% = 107% = 1.07 of the
              original.
            </p>
          </div>

          <viz.DecimalMultiplierScale C={C} />

          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <strong>Fraction method</strong>
              <p>Calculate the discount separately, then subtract.</p>
              <p>{`$\\frac{5}{100} \\times 24 = 1.20$`}</p>
              <p>{`$24 - 1.20 = 22.80$`}</p>
              <p>Shows each step clearly.</p>
            </div>
            <div className="lrn-compare-col">
              <strong>Multiplier method</strong>
              <p>Multiply the original price by one number.</p>
              <p>{`$0.95 \\times 24 = 22.80$`}</p>
              <p>Faster for multi-step problems.</p>
            </div>
          </div>

          <div className="lrn-faded">
            <div className="lrn-faded-complete">
              <strong>COMPLETE EXAMPLE:</strong> Marked price 80 dollars, 10% discount.
              <ol className="lrn-list">
                <li>Multiplier: {`$1 - 0.10 = 0.90$`}.</li>
                <li>Selling price: {`$0.90 \\times 80 = 72$`} dollars.</li>
              </ol>
            </div>
            <div className="lrn-faded-partial">
              <strong>YOUR TURN: PARTIAL:</strong> Marked price 60 dollars, 15% discount.
              <ol className="lrn-list">
                <li>Multiplier: {`$1 - 0.15 = $`} _____.</li>
                <li>Selling price: {`$\\square \\times 60 = $`} _____ dollars.</li>
              </ol>
            </div>
            <div className="lrn-faded-independent">
              <strong>INDEPENDENT PRACTICE:</strong> A pair of shoes is marked at 95 dollars. A 20%
              discount is applied. Find the selling price.
            </div>
          </div>

          <p>You can now find any sale price in a single multiply.</p>
        </>,

        <>
          <h2>Successive Discounts and Why They Don't Add</h2>
          <p>
            When a shop chains two discounts, the second one cuts a price that has already been cut.
            It bites into a smaller base than the first. So the two reductions never add up to the
            two rates simply added together. The combined drop is always less than {`$r_1 + r_2$`}{' '}
            percent.
          </p>

          <div className="lrn-predict">
            <details>
              <summary>
                <strong>PREDICT:</strong> A shop applies 20% off, then 25% off the sale price. Is
                the total reduction 45%, or less, or more?
              </summary>
              <div>
                <p>Less than 45%.</p>
                <p>
                  The second discount applies to an already-reduced price. So 25% of a lower number
                  is less than 25% of the original.
                </p>
              </div>
            </details>
          </div>

          <viz.SuccessiveDiscountFunnel C={C} />

          <h3>Worked Example: Two Successive Discounts</h3>
          <p>An item costs 100 dollars. A shop applies 20% off, then 25% off.</p>

          <div className="lrn-steps">
            <ol className="lrn-list">
              <li>After first discount: {`$0.80 \\times 100 = 80$`} dollars.</li>
              <li>After second discount: {`$0.75 \\times 80 = 60$`} dollars.</li>
              <li>
                Total reduction: {`$100 - 60 = 40$`} dollars, which is 40% of 100. The second
                discount is 25% of 80 = 20 dollars, not 25, which is why the total is 40, not 45.
              </li>
            </ol>
          </div>

          <p>
            The combined multiplier is {`$0.80 \\times 0.75 = 0.60$`}, not {`$1 - 0.45 = 0.55$`}.
          </p>

          <div className="lrn-callout">
            <p>
              <strong>Key rule:</strong> To combine successive percentage changes, multiply the
              multipliers. Never add or subtract the percentage rates.
            </p>
          </div>

          <div className="lrn-callout">
            <p>
              <strong>Percentage points vs percentages:</strong> Adding the rates (20 + 25 = 45)
              gives <em>percentage points</em>, the raw gap between two rates. The actual combined
              discount comes only from multiplying the multipliers ({`$0.80 \\times 0.75 = 0.60$`},
              so 40% off).
            </p>
          </div>

          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <strong>Single r% change</strong>
              <p>Multiplier: {`$1 - r/100$`}.</p>
              <p>Applied once to original price.</p>
            </div>
            <div className="lrn-compare-col">
              <strong>Two successive changes</strong>
              <p>Multiply the two multipliers together.</p>
              <p>{`$(1 - r_1/100) \\times (1 - r_2/100)$`}.</p>
              <p>Applied in sequence; order does not affect the final price.</p>
            </div>
          </div>

          <div className="lrn-elaborate">
            <strong>Why does order not matter for the final result?</strong>
            <p>Multiplication is commutative: {`$0.80 \\times 0.75 = 0.75 \\times 0.80$`}.</p>
            <p>The intermediate price differs, but the final price is the same.</p>
          </div>
        </>,

        <>
          <h2>Reverse Problems: Finding the Original Price</h2>
          <p>
            Reverse the chain. Given the sale price and the discount rate, recover the price the
            shop started with.
          </p>

          <div className="lrn-predict">
            <details>
              <summary>
                <strong>PREDICT:</strong> A jacket sells for 80 dollars after a 20% discount. A
                student says the original price was {`$80 + 20\\% \\times 80 = 96$`} dollars. Is
                that right?
              </summary>
              <div>
                <p>No. Adding 20% of the sale price back on gives the wrong answer.</p>
                <p>
                  The 20% discount was applied to the original (unknown) price, not to 80 dollars.
                </p>
                <p>
                  The correct approach is: {`$80 = 0.80 \\times \\text{original}$`}, so original
                  {`$ = 80 \\div 0.80 = 100$`} dollars.
                </p>
              </div>
            </details>
          </div>

          <div className="lrn-definition">
            <div className="lrn-definition-term">Finding the Original Price</div>
            <div className="lrn-definition-desc">
              <p>{`$$\\text{original price} = \\frac{\\text{sale price}}{1 - r/100}$$`}</p>
            </div>
          </div>

          <viz.ReverseOriginalPrice C={C} />

          <h3>Worked Example: Reverse Discount</h3>
          <p>A television sells for 765 dollars after a 10% discount. Find the original price.</p>

          <div className="lrn-steps">
            <ol className="lrn-list">
              <li>
                The sale price is 90% of the original: {`$765 = 0.90 \\times \\text{original}$`}.
              </li>
              <li>
                Divide: {`$\\text{original} = \\frac{765}{0.90} = 850$`} dollars. Dividing by 0.90
                undoes the multiplication that created the sale price.
              </li>
            </ol>
          </div>

          <div className="lrn-elaborate">
            <strong>Why does the same trick work for increases?</strong>
            <p>
              Every percentage change is a multiplication: down 10% is times 0.90, up 12% is times
              1.12. To undo any multiplication, divide by it. A price that became 89.60 after a 12%
              rise reverses with {`$89.60 \\div 1.12 = 80$`} dollars.
            </p>
          </div>

          <div className="lrn-faded">
            <div className="lrn-faded-complete">
              <strong>COMPLETE EXAMPLE:</strong> Sale price 48 dollars, 20% discount.
              <ol className="lrn-list">
                <li>Sale price = 80% of original: {`$48 = 0.80 \\times \\text{original}$`}.</li>
                <li>Original: {`$48 \\div 0.80 = 60$`} dollars.</li>
              </ol>
            </div>
            <div className="lrn-faded-partial">
              <strong>YOUR TURN: PARTIAL:</strong> Sale price 63 dollars, 10% discount.
              <ol className="lrn-list">
                <li>Sale price = _____% of original.</li>
                <li>Original: {`$63 \\div \\square = $`} _____ dollars.</li>
              </ol>
            </div>
            <div className="lrn-faded-independent">
              <strong>INDEPENDENT PRACTICE:</strong> A coat is on sale for 34 dollars after a 15%
              discount. Find the original price.
            </div>
          </div>
        </>,

        <>
          <h2>Profit on Cost vs Profit on Selling Price</h2>
          <p>
            Profit can be quoted against two different bases. <strong>Markup</strong> divides profit
            by the <em>cost price</em>. <strong>Margin</strong> divides the same profit by the{' '}
            <em>selling price</em>. The dollar profit is identical; the percentage is not.
          </p>
          <p>
            This topic (and most school problems) uses the cost-price base by default. So
            "percentage profit" means markup unless the problem says otherwise. In business and
            finance, "profit margin" almost always means the selling-price version.
          </p>

          <div className="lrn-predict">
            <details>
              <summary>
                <strong>PREDICT:</strong> Cost 80 dollars, sell 100 dollars. Will the markup
                percentage be higher or lower than the margin percentage?
              </summary>
              <div>
                <p>Higher. Markup divides 20 by 80. Margin divides 20 by 100.</p>
                <p>The same profit divided by a smaller number gives a bigger answer.</p>
                <p>So markup (25%) is always larger than margin (20%) on the same deal.</p>
              </div>
            </details>
          </div>

          <viz.MarkupVsMarginPanel C={C} />

          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <strong>Markup (cost base)</strong>
              <p>{`$\\frac{\\text{profit}}{\\text{cost price}} \\times 100$`}</p>
              <p>Example: cost 80, sell 100, profit 20.</p>
              <p>{`$\\frac{20}{80} \\times 100 = 25\\%$`} markup.</p>
            </div>
            <div className="lrn-compare-col">
              <strong>Margin (selling base)</strong>
              <p>{`$\\frac{\\text{profit}}{\\text{selling price}} \\times 100$`}</p>
              <p>Same example: cost 80, sell 100, profit 20.</p>
              <p>{`$\\frac{20}{100} \\times 100 = 20\\%$`} margin.</p>
            </div>
          </div>

          <div className="lrn-callout">
            <p>
              <strong>The gap widens at high margins.</strong> A 50-dollar cost sold at 200 dollars
              carries a 150-dollar profit: markup = 150/50 = 300%, margin = 150/200 = 75%. At low
              profits the two numbers stay close; at high profits they diverge sharply. Always state
              which base before quoting a profit percentage.
            </p>
          </div>

          <div className="lrn-self-explain">
            <strong>SELF-EXPLAIN:</strong> If markup is always larger than margin, why do businesses
            often report margin?
            <p>
              Margin compares profit to revenue (the total money that came in from sales). Investors
              and accountants care about that ratio because it answers "how much of each sales
              dollar stays as profit?" Markup answers a different question: "how much above cost did
              we charge?"
            </p>
          </div>

          <p>You can now quote a profit on either base and say which one you used.</p>
        </>
      ]
    },

    practice: [
      // Interleaved across all concepts to force retrieval, not chunked drill.
      {
        q: `A price rises from 40 dollars to 50 dollars. What is the percentage increase?`,
        a: `Increase = 10 dollars. Percentage increase = $\\frac{10}{40} \\times 100 = 25\\%$. You divide the actual increase by the original value (40, not 50) because percentage change is always relative to the starting point.`
      },
      {
        q: `A coat originally costs 24 dollars. A 5% discount is applied. Find the selling price.`,
        a: `Discount = $\\frac{5}{100} \\times 24 = 1.20$ dollars. Selling price = $24 - 1.20 = 22.80$ dollars. Using the multiplier: $0.95 \\times 24 = 22.80$ dollars. Both methods give the same result; the multiplier method is faster.`
      },
      {
        q: `A shopkeeper buys a watch for 6400 dollars and sells it for 6800 dollars. Find the percentage profit.`,
        a: `Profit = 400 dollars. Percentage profit = $\\frac{400}{6400} \\times 100 = 6.25\\%$. The denominator is always the cost price because profit measures the return on investment.`
      },
      {
        q: `A television sells for 765 dollars after a 10% discount. Find the original price.`,
        a: `$765 = 0.90 \\times \\text{original}$. Original = $\\frac{765}{0.90} = 850$ dollars. Dividing by 0.90 undoes the multiplication by 0.90 that produced the sale price.`
      },
      {
        q: `A shop applies 20% off, then 25% off the new price. Starting at 100 dollars, what is the final price? Is the total reduction 45%?`,
        a: `After 20% off: $0.80 \\times 100 = 80$ dollars. After 25% off: $0.75 \\times 80 = 60$ dollars. Total reduction = 40 dollars = 40%, not 45%. The second discount applies to the already-reduced price, so its absolute effect is smaller than 25% of 100.`
      },
      {
        q: `A market stall buys oranges for 8 dollars and sells them for 6 dollars. Find the percentage loss.`,
        a: `Loss = 2 dollars. Percentage loss = $\\frac{2}{8} \\times 100 = 25\\%$. You divide by the cost price (8 dollars) because the loss is measured against what was originally paid.`
      },
      {
        q: `A CD costs 11.60 dollars. The price increases by 7%. Find the new price.`,
        a: `New price = $1.07 \\times 11.60 = 12.41$ dollars. Multiplying by 1.07 gives the original price plus 7% in one step, because the new price is 107% of the old price.`
      },
      {
        q: `SELF-EXPLAIN: Why is the multiplier for a 5% reduction equal to 0.95, not 0.05?`,
        a: `0.05 is just the 5% fraction. Multiplying by 0.05 gives only the discount amount (1.20 dollars on a 24-dollar coat). You need the price that remains after removal of 5%, which is 95% = 0.95 of the original. The multiplier 0.95 calculates the final price directly.`
      },
      {
        q: `A retailer buys a shirt for 80 dollars and sells it for 100 dollars. Calculate the markup percentage and the margin percentage.`,
        a: `Profit = 20 dollars. Markup = $\\frac{20}{80} \\times 100 = 25\\%$ (profit as % of cost). Margin = $\\frac{20}{100} \\times 100 = 20\\%$ (profit as % of selling price). Same dollar profit gives different percentages because the bases (80 vs 100) are different.`
      },
      {
        q: `A pair of shoes is marked at 95 dollars. A 20% discount applies. Find the selling price.`,
        a: `Multiplier = $1 - 0.20 = 0.80$. Selling price = $0.80 \\times 95 = 76$ dollars. Subtracting 20% leaves 80% of the original price.`
      },
      {
        q: `TRANSFER: A baker buys a dozen rolls for 6 dollars total and sells them at 75 cents each. Find the percentage profit on the batch.`,
        a: `Cost price per roll = $\\frac{6}{12} = 0.50$ dollars. Total selling price = $12 \\times 0.75 = 9$ dollars. Profit = $9 - 6 = 3$ dollars. Percentage profit = $\\frac{3}{6} \\times 100 = 50\\%$. Same cost-base formula, just applied to a batch.`
      },
      {
        q: `ELABORATE: Why is percentage profit always calculated on cost price rather than selling price?`,
        a: `Profit measures the return on the money you invested. Your investment is the cost price. Using selling price as the base would give a smaller percentage (margin), which answers a different question. The cost price is the correct baseline for judging investment performance.`
      },
      {
        q: `Two successive discounts of 10% each are applied to a 200-dollar item. Is the total reduction 20%? Find the final price.`,
        a: `After first 10%: $0.90 \\times 200 = 180$ dollars. After second 10%: $0.90 \\times 180 = 162$ dollars. Total reduction = 38 dollars = 19%, not 20%. Combined multiplier: $0.90 \\times 0.90 = 0.81$, so 81% of the original price remains.`
      },
      {
        q: `A trader buys goods for 200 dollars and sells them for 250 dollars. Find the percentage profit. Now imagine the same trader in a different deal: buys for 50 dollars and sells for 100 dollars. Which deal had a higher percentage profit?`,
        a: `Deal 1: profit = 50 dollars, percentage profit = $\\frac{50}{200} \\times 100 = 25\\%$. Deal 2: profit = 50 dollars, percentage profit = $\\frac{50}{50} \\times 100 = 100\\%$. Both have the same dollar profit, but Deal 2 has a far higher percentage return because the cost was much lower.`
      },
      {
        q: `A coat sells for 34 dollars after a 15% discount. Find the original price.`,
        a: `$34 = 0.85 \\times \\text{original}$. Original = $\\frac{34}{0.85} = 40$ dollars. The sale price is 85% of the original, so dividing by 0.85 reverses the discount.`
      },
      {
        q: `ELABORATE: Markup is always larger than margin for the same transaction. Why?`,
        a: `Markup divides profit by the cost price. Margin divides the same profit by the selling price. The selling price is always larger than the cost price (when there is a profit). Dividing by a smaller number gives a larger result, so markup is always the bigger percentage.`
      },
      {
        q: `A 15% discount is applied to a 60-dollar item. Find the selling price using the multiplier method.`,
        a: `Multiplier = $1 - 0.15 = 0.85$. Selling price = $0.85 \\times 60 = 51$ dollars. The multiplier 0.85 represents the 85% of the price that remains after the 15% reduction.`
      },
      {
        q: `ELABORATE: Why is the combined effect of 20% + 25% successive discounts equal to 40%, not 45%?`,
        a: `The second discount (25%) acts on 80 dollars (the price after the first discount), not on the original 100 dollars. 25% of 80 = 20 dollars, not 25 dollars. So the total reduction is $20 + 20 = 40$ dollars. Multiplying the multipliers: $0.80 \\times 0.75 = 0.60$, meaning 60% of the original price remains.`
      },
      {
        q: `Buy at 120 dollars, sell at 150 dollars. Find the percentage profit.`,
        a: `Profit = 30 dollars. Percentage profit = $\\frac{30}{120} \\times 100 = 25\\%$. Always divide by the cost price (120), not the selling price.`
      },
      {
        q: `TRANSFER: A restaurant charges 48 dollars for a meal and then applies a 12.5% discount for lunch. What is the discounted price? Now apply the same logic: a salary of 36000 dollars is increased by 12.5%. What is the new salary?`,
        a: `Meal: multiplier = $1 - 0.125 = 0.875$. Price = $0.875 \\times 48 = 42$ dollars. Salary: multiplier = $1 + 0.125 = 1.125$. New salary = $1.125 \\times 36000 = 40500$ dollars. The multiplier structure is identical; only the direction (decrease vs increase) changes.`
      },
      {
        q: `A subscription price rises from 4 dollars to 6 dollars. Is this a 2% increase or a 2 percentage point increase? Explain the difference.`,
        a: `The two phrases measure different things. The absolute jump is $6 - 4 = 2$ dollars. As percentage points, the rates 4% and 6% sit 2 points apart. The relative change is $\\frac{6-4}{4} \\times 100 = 50\\%$, because the new price is 50% larger than the old one. Saying "the price rose 2%" when you mean "2 percentage points" hides a 50% change. Always specify which.`
      },
      {
        q: `SELF-EXPLAIN: A student finds the original price of a 20%-discounted item by adding 20% of the sale price to the sale price. Why is this wrong?`,
        a: `The 20% discount was applied to the original price, not to the sale price. Adding 20% of the sale price back on gives a different (smaller) number than the true original. The correct method is to divide the sale price by 0.80, because the sale price is 80% of the original.`
      },
      {
        q: `TRANSFER: A markup of 25% is applied to a wholesale cost of 80 dollars. A different shop applies a 25% margin to its selling price of 100 dollars. Do both shops earn the same dollar profit?`,
        a: `Shop A (markup): profit = $0.25 \\times 80 = 20$ dollars. Shop B (margin): profit = $0.25 \\times 100 = 25$ dollars. Same percentage, different bases, different dollar profits. Markup and margin are never interchangeable.`
      },
      {
        q: `A bicycle costs 180 dollars to buy and sells for 135 dollars. Find the percentage loss.`,
        a: `Loss = 45 dollars. Percentage loss = $\\frac{45}{180} \\times 100 = 25\\%$. The loss is expressed as a fraction of the cost price, then multiplied by 100.`
      },
      {
        q: `TRANSFER: A price rises by 12% to become 89.60 dollars. What was the original price? (Hint: the same reverse logic applies to increases.)`,
        a: `$89.60 = 1.12 \\times \\text{original}$. Original = $\\frac{89.60}{1.12} = 80$ dollars. Dividing by the multiplier (1.12 for a 12% increase) undoes the percentage change, whether it was an increase or a decrease.`
      },
      {
        q: `PREDICT: A coat originally costs 50 dollars and is reduced by 10%. Without calculating, estimate the new price.`,
        a: `10% of 50 dollars is 5 dollars. The new price should be around 45 dollars. Calculating: $0.90 \\times 50 = 45$ dollars exactly.`
      }
    ],

    reference: {
      category: 'Quick Reference',
      title: 'Discount, Profit, Loss',
      sections: [
        <>
          <h2>Core Formulas</h2>

          <div className="ref-grid">
            <div className="ref-item">
              <div className="lrn-eq lrn-eq-hero">{`$$\\text{\\%\\ increase} = \\frac{\\text{increase}}{\\text{original}} \\times 100$$`}</div>
              <p>
                <strong>When to use:</strong> Price, salary, or quantity goes up. Measure the rise
                relative to the starting value.
              </p>
            </div>

            <div className="ref-item">
              <div className="lrn-eq lrn-eq-hero">{`$$\\text{\\%\\ decrease} = \\frac{\\text{decrease}}{\\text{original}} \\times 100$$`}</div>
              <p>
                <strong>When to use:</strong> Price, salary, or quantity goes down. Measure the fall
                relative to the starting value.
              </p>
            </div>

            <div className="ref-item">
              <div className="lrn-eq lrn-eq-hero">{`$$\\text{\\%\\ profit} = \\frac{SP - CP}{CP} \\times 100$$`}</div>
              <p>
                <strong>When to use:</strong> Selling price is higher than cost price. SP = selling
                price, CP = cost price.
              </p>
            </div>

            <div className="ref-item">
              <div className="lrn-eq lrn-eq-hero">{`$$\\text{\\%\\ loss} = \\frac{CP - SP}{CP} \\times 100$$`}</div>
              <p>
                <strong>When to use:</strong> Selling price is lower than cost price.
              </p>
            </div>

            <div className="ref-item">
              <div className="lrn-eq lrn-eq-hero">{`$$\\text{new price} = \\left(1 - \\tfrac{r}{100}\\right) \\times \\text{original}$$`}</div>
              <p>
                <strong>When to use:</strong> Apply a discount of r% to a marked price. Use
                {`$(1 + r/100)$`} for a price increase.
              </p>
            </div>

            <div className="ref-item">
              <div className="lrn-eq lrn-eq-hero">{`$$\\text{original} = \\frac{\\text{sale price}}{1 - r/100}$$`}</div>
              <p>
                <strong>When to use:</strong> You know the sale price and the discount rate and need
                to find the original price.
              </p>
            </div>

            <div className="ref-item">
              <div className="lrn-eq lrn-eq-hero">{`$$\\text{successive: } m_1 \\times m_2 \\times \\text{original}$$`}</div>
              <p>
                <strong>When to use:</strong> Two or more percentage changes applied in sequence.
                Multiply the multipliers. Do not add the rates.
              </p>
            </div>

            <div className="ref-item">
              <div className="lrn-eq lrn-eq-hero">{`$$\\text{markup} = \\frac{\\text{profit}}{CP} \\times 100$$`}</div>
              <p>
                <strong>When to use:</strong> Quote profit as a percentage of the cost price. This
                is the default "percentage profit" in school problems.
              </p>
            </div>

            <div className="ref-item">
              <div className="lrn-eq lrn-eq-hero">{`$$\\text{margin} = \\frac{\\text{profit}}{SP} \\times 100$$`}</div>
              <p>
                <strong>When to use:</strong> Quote profit as a percentage of the selling price.
                This is the "profit margin" used in business and finance.
              </p>
            </div>
          </div>

          <h2>Key Distinctions</h2>

          <div className="ref-grid">
            <div className="ref-item">
              <strong>Markup vs margin</strong>
              <p>
                Markup: profit as % of cost price. Margin: profit as % of selling price. Markup is
                always higher for the same profit.
              </p>
            </div>
            <div className="ref-item">
              <strong>Successive discounts</strong>
              <p>
                Two discounts of r1% and r2% give a total reduction of{' '}
                {`$[1 - (1-r_1/100)(1-r_2/100)] \\times 100\\%$`}, which is always less than{' '}
                {`$r_1 + r_2$`}%.
              </p>
            </div>
            <div className="ref-item">
              <strong>Percentage points vs percentages</strong>
              <p>
                A rate move from 4% to 6% is 2 <em>percentage points</em> absolutely, or a 50%
                <em> relative</em> increase. Adding rates yields percentage points; multiplying
                multipliers yields the actual combined percentage. Never mix the two up.
              </p>
            </div>
          </div>
        </>
      ]
    },

    customCss:
      '.MafsView { --mafs-bg: transparent; --mafs-fg: var(--text-primary); --mafs-line-color: var(--border-subtle); }'
  }
}

export default function DiscountProfitLoss() {
  const config = useConfig()
  return <LearningTemplate config={config} />
}
