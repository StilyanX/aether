import { LearningTemplate } from '../../../../components/learning/learning-template'
import { useVizColors } from '../../../../hooks/use-viz-colors'
import * as viz from './percentages-concept-and-conversions-viz'

function useConfig() {
  const C = useVizColors()
  const config = {
    cssPrefix: 'pct',
    documentTitle: 'Percentages: Concept and Conversions - AETHER',
    learning: {
      groupTitle: 'Percentages',
      category: 'Arithmetic',
      title: 'Concept and Conversions',
      subtitle:
        'What a percent really is, and how it moves between fractions, decimals, and percent forms.',
      sections: [
        // == Section 0: What a percent really is =============================
        <>
          <h2>What a percent really is</h2>
          <p>
            {`Percent is the math you use most as an adult. Sales tax, tips, interest, exam scores, polls, and news statistics all run on it. Before you can use it, you need a precise definition.`}
          </p>
          <p>
            {`A percent is a number. It is a fraction whose denominator is 100. The symbol % is shorthand for dividing by 100. So $45\\%$ means $\\frac{45}{100}$, and $7\\frac{1}{2}\\%$ means $\\frac{7.5}{100}$.`}
          </p>
          <div className="lrn-eq lrn-eq-hero">{`$$N\\% = \\frac{N}{100}$$`}</div>
          <p>
            {`The word comes from Latin: per centum means "by the hundred." The word's origin is the definition. A percent divides anything into 100 equal parts and counts how many parts you have.`}
          </p>
          <div className="lrn-callout">
            <p>
              {`When to use this: any time you see a % symbol, replace it with division by 100. That one swap turns every percent problem into a fraction problem you already know.`}
            </p>
          </div>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>{`Is a percent a fixed number, or does it change depending on what you apply it to? Write your answer before reading on.`}</p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                {`A percent is a fixed number. $35\\%$ is always $\\frac{35}{100}$, no matter the context. When you say "35% of 80," you multiply a fixed number by 80. The percent itself does not change.`}
              </p>
            </details>
          </div>
          <viz.PercentBar C={C} />
          <p>{`What to look for: each position on the bar is a fraction of 100. The label $\\frac{N}{100}$ below the bar shows the exact fraction for any value of $N$.`}</p>
          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Percent as a number</span>
              <p>{`$35\\% = \\frac{35}{100}$. It is a value you can add, subtract, or compare.`}</p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Percent as a multiplier</span>
              <p>{`"$35\\%$ of 80" means $\\frac{35}{100} \\times 80$. The number acts on another quantity. The word "of" means multiply.`}</p>
            </div>
          </div>
          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>{`Why is defining percent the key step? What goes wrong without a clear definition?`}</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                {`Without a clear definition, you memorize separate tricks for each kind of percent problem. With the definition $N\\% = \\frac{N}{100}$, every percent question becomes a fraction question. You already know the fraction rules. You need no extra memorizing.`}
              </p>
            </details>
          </div>
        </>,

        // == Section 1: Bridge: 100 as the universal denominator ============
        <>
          <h2>Why 100 makes comparing easy</h2>
          <p>
            {`Comparing two fractions with different denominators is hard. One test scores 17 out of 25. Another scores 22 out of 32. Which is higher? The denominators 25 and 32 do not line up.`}
          </p>
          <p>
            {`Percent fixes this by making 100 the shared denominator. Rewrite each fraction as parts per 100 and the comparison takes one glance.`}
          </p>
          <div className="lrn-proof">
            <p>{`First score: $\\frac{17}{25} \\times 100 = 68\\%$.`}</p>
            <p>{`Second score: $\\frac{22}{32} \\times 100 = 68.75\\%$.`}</p>
            <p>{`Now compare: 68% against 68.75%. The second score is slightly higher.`}</p>
          </div>
          <div className="lrn-callout">
            <p>
              {`When to use this: any time you compare two fractions or rates from different totals. Rewrite both as percents first. The comparison then costs one look.`}
            </p>
          </div>
          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>{`Why does 100 work as the shared denominator for any two fractions, even when they share no common multiple?`}</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                {`Any fraction $\\frac{a}{b}$ can be rewritten as hundredths. You multiply by $\\frac{100}{b}$ to scale it. You do not need 100 to be a multiple of $b$. Each fraction is rewritten as hundredths on its own. The denominator 100 is shared by every percent, so one look at the numerator settles the comparison.`}
              </p>
            </details>
          </div>
        </>,

        // == Section 2: Bridge: N% of a quantity (developed in poq) =========
        <>
          <h2>Finding part of a quantity</h2>
          <p>
            {`Once you can rewrite a percent as a fraction, finding part of a quantity follows at once. Replace $N\\%$ with $\\frac{N}{100}$ and replace "of" with multiplication.`}
          </p>
          <div className="lrn-eq lrn-eq-hero">{`$$N\\% \\text{ of } X = \\frac{N}{100} \\times X$$`}</div>
          <p>
            {`This is the same one move you already know: rewrite the percent, then multiply. The full set of part, whole, and percent problems gets its own lesson next.`}
          </p>
        </>,

        // == Section 3: Percents, fractions, and decimals (SPINE) =============
        <>
          <h2>Percents, fractions, and decimals</h2>
          <p>
            {`Every percent has an equal fraction and an equal decimal. The three forms name the same number. You pick the form that makes a calculation easiest.`}
          </p>
          <p>
            {`Fractions suit recipes ($\\frac{1}{3}$ cup). Decimals suit money (\\$0.50). Percents suit comparisons (50% off). Knowing which form to reach for saves time.`}
          </p>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>{`Which is bigger: $\\frac{2}{5}$, $42\\%$, or $0.39$? Predict before converting all three to one form.`}</p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                {`Convert to percent: $\\frac{2}{5} = 40\\%$, $42\\% = 42\\%$, $0.39 = 39\\%$. Order: $0.39 < \\frac{2}{5} < 42\\%$. So $42\\%$ is biggest. Putting everything in one form makes comparison instant.`}
              </p>
            </details>
          </div>

          <h3>Percent to fraction</h3>
          <p>{`The % sign means divide by 100. So write the percent over 100, then simplify.`}</p>
          <div className="lrn-proof">
            <p>{`Worked: Express $65\\%$ as a fraction.`}</p>
            <p>{`$65\\% = \\frac{65}{100}$. Divide top and bottom by 5: $\\frac{65}{100} = \\frac{13}{20}$.`}</p>
          </div>
          <div className="lrn-proof">
            <p>{`Worked (mixed percent): Express $12\\frac{1}{2}\\%$ as a fraction.`}</p>
            <p>{`$12\\frac{1}{2}\\% = \\frac{25/2}{100} = \\frac{25}{2} \\times \\frac{1}{100} = \\frac{25}{200} = \\frac{1}{8}$.`}</p>
          </div>

          <h3>Fraction to percent</h3>
          <p>{`To turn a fraction into a percent, multiply it by 100.`}</p>
          <div className="lrn-proof">
            <p>{`Worked: Express $\\frac{7}{8}$ as a percent.`}</p>
            <p>{`$\\frac{7}{8} \\times 100 = \\frac{700}{8} = 87\\frac{1}{2}\\%$. So $\\frac{7}{8} = 87\\frac{1}{2}\\%$.`}</p>
          </div>
          <viz.FractionToPercentMap C={C} />
          <p>{`What to look for: every point on the line $y = 100x$ gives a fraction-to-percent pair. The labeled points show the benchmark fractions you should memorize.`}</p>

          <h3>Percent to decimal, decimal to percent</h3>
          <p>{`Percent to decimal: divide by 100, which moves the decimal point 2 places left. Decimal to percent: multiply by 100, which moves it 2 places right.`}</p>
          <div className="lrn-proof">
            <p>{`Worked (percent to decimal): Change $24\\%$ to a decimal.`}</p>
            <p>{`$24\\% = \\frac{24}{100} = 0.24$. The decimal point in 24 moves 2 places left.`}</p>
          </div>
          <div className="lrn-proof">
            <p>{`Worked (decimal to percent): Change $0.06$ to a percent.`}</p>
            <p>{`$0.06 \\times 100 = 6$, so $0.06 = 6\\%$. The decimal point moves 2 places right.`}</p>
          </div>
          <viz.PercentDecimalSlide C={C} />
          <p>{`What to look for: multiplying by 100 moves the decimal 2 places right (decimal to percent). Dividing by 100 moves it 2 places left (percent to decimal).`}</p>

          <h3>Fraction to decimal, decimal to fraction</h3>
          <p>{`Fraction to decimal: divide the top by the bottom. Decimal to fraction: write it over a power of 10, then simplify.`}</p>
          <div className="lrn-proof">
            <p>{`Worked (fraction to decimal): Change $\\frac{3}{8}$ to a decimal.`}</p>
            <p>{`Divide 8 into 3: $\\frac{3}{8} = 0.375$.`}</p>
          </div>
          <div className="lrn-proof">
            <p>{`Worked (decimal to fraction): Change $0.35$ to a fraction.`}</p>
            <p>{`$0.35 = \\frac{35}{100} = \\frac{7}{20}$ (divide top and bottom by 5).`}</p>
          </div>

          <h3>Benchmark conversions to memorize</h3>
          <p>{`These come up constantly. Knowing them lets you estimate fast and spot errors.`}</p>
          <div className="lrn-proof">
            <p>{`$\\frac{1}{2} = 0.5 = 50\\%$`}</p>
            <p>{`$\\frac{1}{4} = 0.25 = 25\\%$`}</p>
            <p>{`$\\frac{3}{4} = 0.75 = 75\\%$`}</p>
            <p>{`$\\frac{1}{5} = 0.2 = 20\\%$`}</p>
            <p>{`$\\frac{1}{10} = 0.1 = 10\\%$`}</p>
            <p>{`$\\frac{1}{8} = 0.125 = 12\\frac{1}{2}\\%$`}</p>
            <p>{`$\\frac{1}{3} = 0.\\overline{3} = 33\\frac{1}{3}\\%$`}</p>
          </div>
          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Use fractions when exact</span>
              <p>{`$33\\frac{1}{3}\\% = \\frac{1}{3}$ exactly. No rounding. Best for repeating decimals or mixed percents.`}</p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Use decimals when fast</span>
              <p>{`$\\frac{1}{3} \\approx 0.333$. A small rounding error enters. Best for whole-number percents where speed matters.`}</p>
            </div>
          </div>
          <p>{`When you round a fraction to a decimal, how big is the mistake? The viz below shows both ways to measure it.`}</p>
          <viz.RelativeErrorViz C={C} />
          <p>{`What to look for: the bracket shows the absolute error (the raw gap). The formula turns it into a relative error: the gap divided by the true value, times 100.`}</p>
          <div className="lrn-faded">
            <div className="lrn-faded-phase">
              <span className="lrn-faded-label">COMPLETE EXAMPLE</span>
              <p>{`Express $\\frac{9}{20}$ as a percent and then as a decimal.`}</p>
              <ol className="lrn-list">
                <li>{`Fraction to percent: $\\frac{9}{20} \\times 100 = \\frac{900}{20} = 45\\%$.`}</li>
                <li>{`Percent to decimal: $45\\% = \\frac{45}{100} = 0.45$.`}</li>
              </ol>
            </div>
            <div className="lrn-faded-phase lrn-faded-partial">
              <span className="lrn-faded-label">YOUR TURN: PARTIAL</span>
              <p>{`Express $\\frac{5}{8}$ as a percent and then as a decimal.`}</p>
              <ol className="lrn-list">
                <li>{`Fraction to percent: $\\frac{5}{8} \\times 100 = \\rule{1.5cm}{0.5pt}\\%$.`}</li>
                <li>{`Percent to decimal: $\\rule{1.5cm}{0.5pt}$.`}</li>
              </ol>
            </div>
            <div className="lrn-faded-phase">
              <span className="lrn-faded-label">INDEPENDENT PRACTICE</span>
              <p>{`Express $\\frac{17}{20}$ as a percent and as a decimal on your own.`}</p>
            </div>
          </div>
          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>
              {`Why does dividing by 100 turn a percent into a fraction? The % sign means "divided by 100." So $35\\%$ is by definition $\\frac{35}{100}$. Simplifying gives $\\frac{7}{20}$. The reverse works because multiplying a fraction by 100 asks "how many hundredths?" The answer is the percent.`}
            </p>
          </div>
          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>{`Explain in your own words why $33\\frac{1}{3}\\%$ is exactly $\\frac{1}{3}$, not approximately.`}</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                {`$33\\frac{1}{3}\\% = \\frac{100/3}{100}$. Dividing by 100 gives $\\frac{100}{3} \\times \\frac{1}{100} = \\frac{1}{3}$. The numerator of the percent is already $\\frac{100}{3}$, which cancels the 100 in the denominator exactly. So the conversion is exact, with no rounding.`}
              </p>
            </details>
          </div>
        </>,

        // == Section 4: Bridge: percent change (developed in pid) ============
        <>
          <h2>Where percents go next</h2>
          <p>
            {`Conversions are the engine. With them, two big uses open up. The first is finding the part, the whole, or the percent from the equation $A = \\frac{P}{100} \\times N$.`}
          </p>
          <p>
            {`The second is percent change: a value that rises or falls by $r\\%$. Both build directly on rewriting a percent as a fraction or decimal. Each gets its own full lesson, where the worked examples and practice live.`}
          </p>
          <p>{`Here is one surprise from percent change: a rise of $r\\%$ then a fall of $r\\%$ does not return you to the start.`}</p>
          <viz.UpThenDownAsymmetry C={C} />
          <p>{`What to look for: the final bar lands below the starting bar. The gap shows the extra percent you would need to fully recover.`}</p>
        </>
      ]
    },
    practice: [
      // Cards are interleaved across the 8 concepts to force retrieval mixing.
      {
        q: `What does the symbol % mean? Express your answer as a mathematical operation.`,
        a: `The % symbol means "divided by 100." So $N\\%$ equals $\\frac{N}{100}$. A percent is a fraction with denominator 100, not a separate kind of object.`
      },
      {
        q: `What is 45% of 70?`,
        a: `$\\frac{45}{100} \\times 70 = \\frac{3150}{100} = 31.5$. Replace the percent with the fraction $\\frac{45}{100}$, then multiply. The answer is 31.5.`
      },
      {
        q: `Express $33\\frac{1}{3}\\%$ as a fraction.`,
        a: `$33\\frac{1}{3}\\% = \\frac{100/3}{100}$. Invert and multiply: $\\frac{100}{3} \\times \\frac{1}{100} = \\frac{1}{3}$. The answer is exactly $\\frac{1}{3}$, not an approximation.`
      },
      {
        q: `[TRANSFER] A basketball player makes 17 free throws out of 25 attempts. Express the player's free-throw percentage and compare to a teammate who made 22 of 32.`,
        a: `First player: $\\frac{17}{25} \\times 100 = 68\\%$. Teammate: $\\frac{22}{32} \\times 100 = 68.75\\%$. The teammate scored slightly higher. Converting both to percent removes the different totals and makes the comparison instant.`
      },
      {
        q: `A coat costs \\$24. It is reduced by 5%. What is the new price?`,
        a: `Reduction: $\\frac{5}{100} \\times 24 = 1.20$. New price: $24.00 - 1.20 = 22.80$ dollars. Alternatively, multiply by $0.95$: $0.95 \\times 24 = 22.80$. Same answer.`
      },
      {
        q: `70 is 45% of what number?`,
        a: `Set up: $70 = \\frac{45}{100} \\times N$. Solve: $N = 70 \\times \\frac{100}{45} = \\frac{7000}{45} = 155\\frac{5}{9}$. Dividing by $\\frac{45}{100}$ is the same as multiplying by $\\frac{100}{45}$.`
      },
      {
        q: `A stock starts at \\$100. It rises by 12% then falls by 12%. What is the final price?`,
        a: `After rise: $100 \\times 1.12 = 112.00$. After fall: $112.00 \\times 0.88 = 98.56$. The stock ends at \\$98.56, which is \\$1.44 below the starting price. The loss equals $\\frac{12^2}{10000} \\times 100 = 1.44$.`
      },
      {
        q: `Find the absolute error when $\\frac{2}{3}$ is used to approximate $67\\frac{1}{2}\\%$.`,
        a: `Convert: $\\frac{2}{3} = 66\\frac{2}{3}\\%$ exactly. True value: $67\\frac{1}{2}\\%$. Absolute error: $67\\frac{1}{2}\\% - 66\\frac{2}{3}\\% = \\frac{5}{6}\\% \\approx 0.833\\%$.`
      },
      {
        q: `[SELF-EXPLAIN] Is a percent a number or is it an instruction to do something? Support your answer with the definition.`,
        a: `A percent is a number. Specifically, it is the fraction $\\frac{N}{100}$. When we say "35% of 80" we are writing $\\frac{35}{100} \\times 80$, which is one number multiplied by another. The "of" is the instruction (multiplication), not the percent.`
      },
      {
        q: `[TRANSFER] A recipe calls for 240 grams of flour. You want to make 75% of the recipe for fewer servings. How much flour do you need?`,
        a: `$0.75 \\times 240 = 180$ grams. Replace the percent with $0.75$, then multiply by the quantity. Same skill as "find N% of X" applied to ingredient scaling.`
      },
      {
        q: `Express $\\frac{5}{16}$ as a percent.`,
        a: `Multiply by 100: $\\frac{5}{16} \\times 100 = \\frac{500}{16} = 31\\frac{1}{4}$. So $\\frac{5}{16} = 31\\frac{1}{4}\\%$. To convert any fraction to percent, multiply the fraction by 100.`
      },
      {
        q: `Work out 22% of \\$40.`,
        a: `$\\frac{22}{100} \\times 40 = \\frac{880}{100} = 8.80$. So 22% of \\$40 is \\$8.80. The fraction method multiplies 22 and 40, then divides by 100.`
      },
      {
        q: `[PREDICT] Before computing: will 16% of \\$85 be more or less than \\$14? Estimate, then calculate exactly.`,
        a: `Estimate: 16% is close to 15% = $\\frac{3}{20}$, so roughly $\\frac{3 \\times 85}{20} = \\frac{255}{20} = 12.75$. So less than \\$14. Exact: $0.16 \\times 85 = 13.60$. Estimate was close.`
      },
      {
        q: `[TRANSFER] A jacket originally priced at \\$80 is on sale for 25% off. What is the sale price, and how much do you save?`,
        a: `Discount: $0.25 \\times 80 = 20$ dollars. Sale price: $80 - 20 = 60$ dollars. Same as multiplying by $0.75$: $0.75 \\times 80 = 60$. You save \\$20 and pay \\$60.`
      },
      {
        q: `After rising by 12%, what percent decrease returns a stock to its original price?`,
        a: `After rise, price is $112\\%$ of original. Solve $(100 - x) \\times 112 = 10000$. Then $112x = 1200$, so $x = \\frac{1200}{112} = 10\\frac{5}{7}\\%$. A decrease of $10\\frac{5}{7}\\%$ from the higher price is needed. Note $10\\frac{5}{7}\\% < 12\\%$ because the drop is applied to a larger base.`
      },
      {
        q: `Change $\\frac{7}{8}$ to a decimal.`,
        a: `Divide 8 into 7: $7 \\div 8 = 0.875$. You can verify: $0.875 \\times 8 = 7$. So $\\frac{7}{8} = 0.875$.`
      },
      {
        q: `What percent of 70 is 45?`,
        a: `Set up: $45 = \\frac{N}{100} \\times 70$. Solve: $N \\times 70 = 4500$, so $N = \\frac{4500}{70} = 64\\frac{2}{7}$. The answer is $64\\frac{2}{7}\\%$. Use the rearrangement $P = \\frac{A}{N} \\times 100$.`
      },
      {
        q: `[SELF-EXPLAIN] When computing 16% of \\$85, you can use either $\\frac{16}{100} \\times 85$ or $0.16 \\times 85$. Why do both give the same answer?`,
        a: `$\\frac{16}{100}$ and $0.16$ are two names for the same number. $16 \\div 100 = 0.16$ by definition. Multiplying $85$ by the same number gives the same result regardless of which form you use.`
      },
      {
        q: `[TRANSFER] You scored 38 out of 50 on a quiz. Your friend scored 75 out of 100 on a different quiz. Whose percentage is higher?`,
        a: `You: $\\frac{38}{50} \\times 100 = 76\\%$. Friend: $\\frac{75}{100} \\times 100 = 75\\%$. Your percent is 1 point higher. Converting both to percent makes scores from different totals directly comparable.`
      },
      {
        q: `A CD costs \\$11.60. The price rises by 7%. Find the new price using the multiplier method.`,
        a: `Multiplier: $1 + \\frac{7}{100} = 1.07$. New price: $1.07 \\times 11.60 = 12.412 \\approx 12.41$ dollars. The multiplier method computes both the original price and the increase in one step.`
      },
      {
        q: `Change 0.35 to a fraction in lowest terms.`,
        a: `$0.35 = \\frac{35}{100}$. Divide numerator and denominator by 5: $\\frac{35}{100} = \\frac{7}{20}$. Check: $\\frac{7}{20} = 0.35$ by long division.`
      },
      {
        q: `[ELABORATE] All three percent question types (find part, find whole, find percent) come from the same equation. What is that equation, and how do you rearrange it for each type?`,
        a: `The equation is $A = P\\% \\times N$ where $A$ is the part, $P\\%$ is the percent, and $N$ is the whole. To find the part: $A = P\\% \\times N$ (multiply). To find the whole: $N = A \\div P\\% = A \\times \\frac{100}{P}$ (divide). To find the percent: $P = \\frac{A}{N} \\times 100$ (divide then multiply by 100). You need no separate rules.`
      },
      {
        q: `[TRANSFER] A town's population grows from 8,000 to 9,200 over a decade. What is the percent increase?`,
        a: `Increase: $9200 - 8000 = 1200$. Percent change: $\\frac{1200}{8000} \\times 100 = 15\\%$. Always divide by the original value, not the new one. The town grew by 15% over the decade.`
      },
      {
        q: `Work out 6.5% of \\$17.50. Give the answer to the nearest cent.`,
        a: `$\\frac{6.5}{100} \\times 17.50 = \\frac{113.75}{100} = 1.1375$. Rounded to the nearest cent: \\$1.14. The fraction method handles non-integer percents cleanly.`
      },
      {
        q: `[SELF-EXPLAIN] Explain why multiplying by $1.07$ gives the same result as adding 7% of the original to the original.`,
        a: `$1.07 \\times P = (1 + 0.07) \\times P = 1 \\times P + 0.07 \\times P = P + 7\\%$ of $P$. The multiplier $1.07$ encodes both "keep the original" (the 1) and "add the increase" (the 0.07). Distributing the multiplication shows they are identical.`
      },
      {
        q: `7 is 26% of a number $L$. Find $L$ exactly, then estimate $L$ without a pencil.`,
        a: `Exact: $L = 7 \\times \\frac{100}{26} = \\frac{700}{26} = 26\\frac{12}{13}$. Estimate: $26\\% \\approx 25\\% = \\frac{1}{4}$, so $L \\approx 4 \\times 7 = 28$. The exact answer $26\\frac{12}{13}$ is close to 28, confirming the estimate.`
      },
      {
        q: `[ELABORATE] A price rises by $r\\%$ then falls by $r\\%$. Show algebraically why the result is less than the original for any $r > 0$.`,
        a: `The result is $(1 + r/100)(1 - r/100) \\times P = (1 - r^2/10000) \\times P$. This uses the difference of squares identity: $(a+b)(a-b) = a^2 - b^2$ with $a = 1$ and $b = r/100$. Since $r > 0$, we have $r^2/10000 > 0$, so $1 - r^2/10000 < 1$. Therefore the result is strictly less than $P$.`
      },
      {
        q: `Change $\\frac{3}{8}$ to a percentage.`,
        a: `$\\frac{3}{8} \\times 100 = \\frac{300}{8} = 37.5\\%$. So $\\frac{3}{8} = 37.5\\%$ or equivalently $37\\frac{1}{2}\\%$.`
      },
      {
        q: `A true measurement is 250 and an estimate is 238. Find the absolute and relative errors.`,
        a: `Absolute error: $|250 - 238| = 12$. Relative error: $\\frac{12}{250} \\times 100 = 4.8\\%$. Since $4.8\\% < 5\\%$, the estimate is just within the "generally good enough" threshold.`
      },
      {
        q: `[TRANSFER] An employee earns \\$3,200 per month and receives a 6% raise. What is the new monthly salary?`,
        a: `Multiplier: $1 + \\frac{6}{100} = 1.06$. New salary: $1.06 \\times 3200 = 3392$ dollars per month. The 6% raise adds \\$192 to the original monthly amount.`
      },
      {
        q: `Express $45\\%$ as a fraction in lowest terms.`,
        a: `$45\\% = \\frac{45}{100} = \\frac{9}{20}$. Divide numerator and denominator by 5. The result $\\frac{9}{20}$ is in lowest terms because 9 and 20 share no common factor.`
      },
      {
        q: `[PREDICT] If a price increases by 50% and then decreases by 50%, do you return to the original price? Predict first, then compute.`,
        a: `No. After 50% increase: $P \\times 1.5$. After 50% decrease: $P \\times 1.5 \\times 0.5 = P \\times 0.75$. You end up at 75% of the original. The same percent up and down always leaves you lower because the decrease is taken from the larger post-increase value.`
      },
      {
        q: `You scored 87 out of 120 on a test. What percent did you get?`,
        a: `$P = \\frac{87}{120} \\times 100 = \\frac{8700}{120} = 72.5\\%$. Divide the part by the whole, then multiply by 100. This is the "find the percent" rearrangement of $A = P\\% \\times N$.`
      },
      {
        q: `[TRANSFER] A meal costs \\$28 before tax. Sales tax is 8.5%. What is the total amount you pay?`,
        a: `Tax: $0.085 \\times 28 = 2.38$. Total: $28 + 2.38 = 30.38$ dollars. Same as multiplying by $1.085$: $1.085 \\times 28 = 30.38$. The multiplier method bundles the original amount with the tax in one step.`
      },
      {
        q: `Work out $\\frac{1}{6} + 0.72$. Give the answer to 2 decimal places.`,
        a: `$\\frac{1}{6} = 0.1\\overline{6}$. Sum: $0.1666... + 0.72 = 0.8866... \\approx 0.89$ to 2 decimal places. Convert the fraction to a decimal first, then add.`
      },
      {
        q: `[PREDICT] Two estimates both have an absolute error of 3. Estimate A approximates 30, Estimate B approximates 300. Which is more accurate relative to its true value?`,
        a: `Estimate A: relative error $= \\frac{3}{30} \\times 100 = 10\\%$. Estimate B: relative error $= \\frac{3}{300} \\times 100 = 1\\%$. Estimate B is 10 times more accurate in relative terms, even though the absolute errors are identical.`
      },
      {
        q: `[TRANSFER] A population of 5,000 grows by 20% one year and then shrinks by 20% the next. What is the population after both changes?`,
        a: `After growth: $5000 \\times 1.20 = 6000$. After shrink: $6000 \\times 0.80 = 4800$. The population is 4,800. This is $5000 \\times (1 - 0.04) = 5000 \\times 0.96 = 4800$, confirming the formula with $r = 20$.`
      },
      {
        q: `What is the Latin origin of the word "percent"? What does it literally mean?`,
        a: `Percent comes from the Latin per centum, meaning "by the hundred." The definition follows directly: a percent divides something into 100 equal parts.`
      },
      {
        q: `[PREDICT] Without computing, rank these from smallest to largest: $\\frac{3}{8}$, $35\\%$, $0.4$. Explain your reasoning, then verify.`,
        a: `Reasoning: $\\frac{3}{8} = 37.5\\%$, $35\\% = 35\\%$, $0.4 = 40\\%$. Order: $35\\% < \\frac{3}{8} < 0.4$. Converting all to percent makes the ranking immediate.`
      },
      {
        q: `[TRANSFER] A store says "one-third off all items." A coat originally costs \\$66. What is the sale price? Which form (fraction, decimal, or percent) makes this easiest to compute?`,
        a: `One-third off means the discount is $\\frac{1}{3} \\times 66 = 22$. Sale price: $66 - 22 = 44$ dollars. The fraction form $\\frac{1}{3}$ is easiest because $33\\frac{1}{3}\\% = 0.333...$ introduces rounding, while $\\frac{1}{3}$ gives an exact answer.`
      },
      {
        q: `[SELF-EXPLAIN] Why does a 5-minute timing error matter much more on a 15-minute trip than on a 7-hour trip? Explain using relative error.`,
        a: `For the 15-minute trip: relative error $= \\frac{5}{15} \\times 100 = 33\\%$. For the 7-hour trip (420 minutes): relative error $= \\frac{5}{420} \\times 100 \\approx 1.2\\%$. The absolute error (5 minutes) is the same, but the relative error is 27 times larger for the short trip. Relative error shows whether the error is serious given the scale of the measurement.`
      },
      {
        q: `[TRANSFER] A camera's price drops from \\$450 to \\$360. By what percent did the price decrease?`,
        a: `Decrease: $450 - 360 = 90$ dollars. Percent change: $\\frac{90}{450} \\times 100 = 20\\%$. The price dropped by 20%. Divide the change by the original value, then multiply by 100.`
      },
      {
        q: `[METHOD SELECTION] If you need to compute $7\\frac{1}{2}\\%$ of 48 by hand, which method is faster: fraction or decimal? Explain, then compute.`,
        a: `Fraction method is faster. $7\\frac{1}{2}\\% = \\frac{15}{2} \\times \\frac{1}{100} = \\frac{15}{200} = \\frac{3}{40}$. Then $\\frac{3}{40} \\times 48 = \\frac{144}{40} = 3.60$. The decimal $0.075 \\times 48 = 3.60$ also works. But multiplying a three-decimal number by hand is slower.`
      },
      {
        q: `[ELABORATE] Why does using the definition $N\\% = \\frac{N}{100}$ eliminate the need to memorize separate rules for the three types of percent problems?`,
        a: `All three types reduce to the same algebra. Starting from $A = P\\% \\times N = \\frac{P}{100} \\times N$, each type solves for one unknown: $A$ (multiply), $N$ (divide), or $P$ (divide then multiply by 100). The fraction rules do the work. No "is/of" mnemonics needed. This is only possible when percent is treated as a number with a precise definition.`
      },
      {
        q: `[TRANSFER] A student estimates that a class has 28 students when the actual count is 25. Another student estimates a school has 1,028 students when the actual is 1,025. Compare their relative errors.`,
        a: `Student 1: relative error $= \\frac{|25 - 28|}{25} \\times 100 = \\frac{3}{25} \\times 100 = 12\\%$. Student 2: relative error $= \\frac{|1025 - 1028|}{1025} \\times 100 = \\frac{3}{1025} \\times 100 \\approx 0.29\\%$. Same absolute error (3), but Student 2's estimate is far more accurate in relative terms.`
      },
      {
        q: `[ERROR DETECTION] A student writes: "5/16 as a percent is 5 ÷ 16 ÷ 100 = 0.003125." Find the error and correct it.`,
        a: `The error is dividing by 100 instead of multiplying by 100. Converting a fraction to a percent means multiplying by 100. Correct: $\\frac{5}{16} \\times 100 = 31.25\\%$. The student confused the direction: dividing by 100 converts percent to fraction, not fraction to percent.`
      },
      {
        q: `[TRANSFER] If you increase a price by 10% and then increase the result by 10% again, is the total increase more, less, or exactly 20%? Compute for a starting price of \\$100.`,
        a: `After first 10% increase: $100 \\times 1.10 = 110$. After second: $110 \\times 1.10 = 121$ dollars. Total increase: \\$21, which is $21\\%$ of the original \\$100. More than 20%. The second increase is applied to the already-higher value, so it adds a larger absolute amount than the first.`
      },
      {
        q: `List the six benchmark fraction-decimal-percent triples you should memorize.`,
        a: `$\\frac{1}{2} = 0.5 = 50\\%$. $\\frac{1}{4} = 0.25 = 25\\%$. $\\frac{3}{4} = 0.75 = 75\\%$. $\\frac{1}{5} = 0.2 = 20\\%$. $\\frac{1}{10} = 0.1 = 10\\%$. $\\frac{1}{3} = 0.\\overline{3} = 33\\frac{1}{3}\\%$. Memorizing these lets you estimate quickly and spot errors in percent calculations.`
      },
      {
        q: `[PREDICT] A price tag says "30% off." Before computing, estimate the sale price of a \\$45 item. Then calculate exactly.`,
        a: `Estimate: $30\\% \\approx \\frac{1}{3}$, so discount $\\approx \\frac{45}{3} = 15$. Sale price $\\approx 30$. Exact: $0.30 \\times 45 = 13.50$, so sale price $= 45 - 13.50 = 31.50$ dollars. The estimate was close.`
      },
      {
        q: `[TRANSFER] A salesperson earns 4% commission on each sale. If they sell \\$12,500 worth of goods this week, what is their commission?`,
        a: `Commission: $0.04 \\times 12500 = 500$ dollars. The same skill as "find N% of X" applied to commission calculations. Replace 4% with $0.04$, then multiply by the total sales.`
      },
      {
        q: `The formula for relative error requires dividing by the true value, not the estimated value. Why is the true value used as the denominator?`,
        a: `Relative error measures how large the mistake is compared to what the true answer actually is. The true value is the reference standard. Using the estimate in the denominator would make the ratio depend on the estimate itself, which is circular. Dividing by the true value gives a measure that is independent of the estimate's magnitude.`
      },
      {
        q: `[ELABORATE] Why does $\\frac{2}{3}$ make a good approximation for $66\\frac{2}{3}\\%$ but $0.67$ is slightly less accurate? Compute both relative errors.`,
        a: `$\\frac{2}{3} = 66.\\overline{6}\\%$ exactly. Absolute error vs $67.5\\%$: $\\frac{5}{6}\\% \\approx 0.833\\%$. Relative error: $\\frac{0.833}{67.5} \\approx 1.23\\%$. For $0.67 = 67\\%$: absolute error $= 0.5\\%$. Relative error $= \\frac{0.5}{67.5} \\approx 0.74\\%$. So $0.67$ is slightly more accurate. But $\\frac{2}{3}$ is exact as a fraction, so it is preferable when symbolic precision matters.`
      },
      {
        q: `[TRANSFER] A laptop selling for \\$899 has a 15% off coupon and a 5% student discount, applied in that order. What is the final price?`,
        a: `After 15% off: $899 \\times 0.85 = 764.15$. After 5% off: $764.15 \\times 0.95 = 725.94$ dollars (rounded to the nearest cent). Apply each multiplier in sequence: $0.85 \\times 0.95 = 0.8075$, so $899 \\times 0.8075 = 725.94$.`
      },
      {
        q: `[TRANSFER] A water bottle holds 750 mL when full. You drink 35% of it. How many millilitres are left?`,
        a: `Amount left is $65\\%$ of $750$ mL: $0.65 \\times 750 = 487.5$ mL. Or compute the drunk amount: $0.35 \\times 750 = 262.5$ mL, then subtract: $750 - 262.5 = 487.5$ mL. Same skill applied to volumes.`
      },
      {
        q: `[TRANSFER] A car priced at \\$18,000 loses 12% of its value each year. Estimate its value after one year of depreciation.`,
        a: `Loss in year 1: $0.12 \\times 18000 = 2160$ dollars. Value after one year: $18000 - 2160 = 15840$ dollars. Equivalently, multiplier $(1 - 0.12) = 0.88$ gives $0.88 \\times 18000 = 15840$. The decrease formula handles depreciation in the same way it handles price discounts.`
      },
      {
        q: `[TRANSFER] On an exam, you scored 84 out of 90, while a classmate scored 132 out of 150. Whose score, as a percent, is higher?`,
        a: `Your percent: $\\frac{84}{90} \\times 100 \\approx 93.3\\%$. Classmate's percent: $\\frac{132}{150} \\times 100 = 88\\%$. Your score is higher. Converting both to percent lets you compare across exams with different totals.`
      },
      {
        q: `[TRANSFER] Your tip of 9 dollars was 18% of the meal bill. What did the meal cost?`,
        a: `Set up: $9 = \\frac{18}{100} \\times N$. Solve: $N = 9 \\times \\frac{100}{18} = \\frac{900}{18} = 50$ dollars. The meal cost 50 dollars. This is the "find the whole" rearrangement of $A = P\\% \\times N$.`
      },
      {
        q: `[PREDICT] If you know that 25% of X equals 50, predict the value of X before doing any algebra.`,
        a: `25% is one-quarter. If one-quarter of X is 50, then X is four times 50. X equals 200. Check: $\\frac{25}{100} \\times 200 = 50$. The benchmark $25\\% = \\frac{1}{4}$ lets you multiply by 4 to reverse the operation.`
      },
      {
        q: `[PREDICT] You finished 18 out of 24 puzzles in a set. Predict the percent you finished before computing exactly.`,
        a: `Estimate: 18 out of 24 is close to 18 out of 24. Simplify: $\\frac{18}{24} = \\frac{3}{4} = 75\\%$. Exact: $\\frac{18}{24} \\times 100 = 75\\%$. Reducing the fraction first made this trivial.`
      },
      {
        q: `[TRANSFER] A baking recipe gives a sugar amount as 0.625 cups. You want to express this as a fraction to use measuring cups marked in eighths. What fraction is 0.625?`,
        a: `$0.625 = \\frac{625}{1000} = \\frac{5}{8}$. Divide numerator and denominator by 125. So 0.625 cups is exactly $\\frac{5}{8}$ of a cup. The fraction form is easier to scoop with an eighth-cup measure.`
      },
      {
        q: `[ELABORATE] Why does multiplying a decimal by 100 turn it into a percent? Explain from first principles using the meaning of percent.`,
        a: `A percent means "out of 100." A decimal like 0.35 means $\\frac{35}{100}$. To express that as a percent, you ask: how many hundredths? The answer is the numerator: 35. Multiplying 0.35 by 100 extracts that numerator. You are not changing the value, only rewriting it in percent language. So $0.35 \\times 100 = 35\\%$ because 0.35 already means 35 hundredths.`
      }
    ],
    reference: {
      category: 'Quick Reference',
      title: 'Concept and Conversions',
      sections: [
        <>
          <h2>Core definition</h2>
          <div className="lrn-eq lrn-eq-hero">{`$$N\\% = \\frac{N}{100}$$`}</div>
          <p>
            {`A percent is a number. The symbol % means "divided by 100." Etymology: Latin per centum, "by the hundred."`}
          </p>

          <h2>Key formulas</h2>
          <div className="lrn-definition">
            <span className="lrn-definition-term">Percent of a quantity</span>
            <div className="lrn-definition-desc">
              <p>{`$A = \\frac{P}{100} \\times N$`}</p>
              <p>{`When to use: you know the percent $P$ and the total $N$, and you want the part $A$.`}</p>
            </div>
          </div>
          <div className="lrn-definition">
            <span className="lrn-definition-term">Finding the whole</span>
            <div className="lrn-definition-desc">
              <p>{`$N = A \\div P\\% = A \\times \\frac{100}{P}$`}</p>
              <p>{`When to use: you know the part $A$ and the percent $P$, and you want the total $N$.`}</p>
            </div>
          </div>
          <div className="lrn-definition">
            <span className="lrn-definition-term">Finding the percent</span>
            <div className="lrn-definition-desc">
              <p>{`$P = \\frac{A}{N} \\times 100$`}</p>
              <p>{`When to use: you know the part $A$ and the total $N$, and you want the percent $P$.`}</p>
            </div>
          </div>
          <div className="lrn-definition">
            <span className="lrn-definition-term">Percent increase</span>
            <div className="lrn-definition-desc">
              <p>{`$\\text{new} = \\left(1 + \\frac{r}{100}\\right) \\times \\text{old}$`}</p>
              <p>{`When to use: you increase a value by $r\\%$.`}</p>
            </div>
          </div>
          <div className="lrn-definition">
            <span className="lrn-definition-term">Percent decrease</span>
            <div className="lrn-definition-desc">
              <p>{`$\\text{new} = \\left(1 - \\frac{r}{100}\\right) \\times \\text{old}$`}</p>
              <p>{`When to use: you decrease a value by $r\\%$.`}</p>
            </div>
          </div>
          <div className="lrn-definition">
            <span className="lrn-definition-term">Up then down (same rate)</span>
            <div className="lrn-definition-desc">
              <p>{`$\\text{result} = \\left(1 - \\frac{r^2}{10000}\\right) \\times \\text{original}$`}</p>
              <p>{`When to use: a value rises by $r\\%$ then falls by $r\\%$ (or vice versa). Result is always less than original.`}</p>
            </div>
          </div>
          <div className="lrn-definition">
            <span className="lrn-definition-term">Recovery percent after r% rise</span>
            <div className="lrn-definition-desc">
              <p>{`$x = \\frac{100r}{100 + r}$`}</p>
              <p>{`When to use: you want the percent decrease from the raised value that returns to the original. For $r = 12$: $x = \\frac{1200}{112} = 10\\frac{5}{7}\\%$.`}</p>
            </div>
          </div>
          <div className="lrn-definition">
            <span className="lrn-definition-term">Absolute error</span>
            <div className="lrn-definition-desc">
              <p>{`$|\\text{true} - \\text{estimate}|$`}</p>
              <p>{`When to use: measuring the raw size of a discrepancy in the same units.`}</p>
            </div>
          </div>
          <div className="lrn-definition">
            <span className="lrn-definition-term">Relative error</span>
            <div className="lrn-definition-desc">
              <p>{`$\\frac{|\\text{true} - \\text{estimate}|}{\\text{true value}} \\times 100\\%$`}</p>
              <p>{`When to use: comparing closeness across different magnitudes. Below 5% is generally good. Above 20% is usually not acceptable.`}</p>
            </div>
          </div>

          <h2>Benchmark conversions</h2>
          <div className="lrn-proof">
            <p>{`$\\frac{1}{2} = 0.5 = 50\\%$`}</p>
            <p>{`$\\frac{1}{4} = 0.25 = 25\\%$`}</p>
            <p>{`$\\frac{3}{4} = 0.75 = 75\\%$`}</p>
            <p>{`$\\frac{1}{5} = 0.2 = 20\\%$`}</p>
            <p>{`$\\frac{1}{8} = 0.125 = 12.5\\%$`}</p>
            <p>{`$\\frac{1}{3} = 0.\\overline{3} = 33\\frac{1}{3}\\%$`}</p>
            <p>{`$\\frac{2}{3} = 0.\\overline{6} = 66\\frac{2}{3}\\%$`}</p>
            <p>{`$\\frac{1}{10} = 0.1 = 10\\%$`}</p>
            <p>{`$\\frac{1}{100} = 0.01 = 1\\%$`}</p>
          </div>

          <h2>Conversion directions</h2>
          <div className="lrn-steps">
            <ol className="lrn-list">
              <li>{`Percent to fraction: divide $N$ by 100. Simplify.`}</li>
              <li>{`Fraction to percent: multiply by 100. Result is $C\\%$.`}</li>
              <li>{`Percent to decimal: divide by 100 (move decimal 2 places left).`}</li>
              <li>{`Decimal to percent: multiply by 100 (move decimal 2 places right).`}</li>
              <li>{`Fraction to decimal: divide numerator by denominator.`}</li>
              <li>{`Decimal to fraction: write over appropriate power of 10, then simplify.`}</li>
            </ol>
          </div>

          <h2>Relative error rule of thumb</h2>
          <ul className="lrn-list">
            <li>{`Below 5%: generally good enough for everyday use.`}</li>
            <li>{`5% to 20%: gray area. Use judgment based on context.`}</li>
            <li>{`Above 20%: usually not good enough.`}</li>
          </ul>
        </>
      ]
    },
    customCss:
      '.MafsView { --mafs-bg: transparent; --mafs-fg: var(--text-primary); --mafs-line-color: var(--border-subtle); }'
  }
  return config
}

export default function PercentagesConceptAndConversions() {
  const config = useConfig()
  return <LearningTemplate config={config} />
}
