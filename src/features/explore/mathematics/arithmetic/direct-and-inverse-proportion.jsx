import { LearningTemplate } from '../../../../components/learning/learning-template'
import { useVizColors } from '../../../../hooks/use-viz-colors'
import * as viz from './direct-and-inverse-proportion-viz'

function useConfig() {
  const C = useVizColors()
  const config = {
    cssPrefix: 'dip',
    documentTitle: 'Direct and Inverse Proportion - AETHER',
    learning: {
      groupTitle: 'Ratio, Proportion, and Rate',
      category: 'Arithmetic',
      title: 'Direct and Inverse Proportion',
      subtitle:
        'How to recognise and solve direct and inverse proportion problems using the unit-rate method, and how to apply direct proportion to foreign exchange.',
      sections: [
        // == Section 0: What Direct Proportion Means ===========================
        <>
          <h2>What Direct Proportion Means</h2>
          <p>
            Two quantities are in direct proportion when they increase or decrease together at a
            fixed ratio. If one doubles, the other doubles. If one triples, the other triples. The
            ratio between them never changes.
          </p>
          <p>
            When to use this: any problem where a constant rate connects two quantities. Cost and
            quantity at a fixed price per unit. Distance and time at a fixed speed. Any situation
            where more of one thing always means proportionally more of the other.
          </p>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              Petrol costs the same per litre. You buy 11 litres for $20.46. Before calculating:
              will 22 litres cost exactly $40.92? Why or why not?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                Yes. Double the litres means double the cost. The cost is directly proportional to
                the quantity. 22 is exactly twice 11, so the cost is exactly twice $20.46 = $40.92.
              </p>
            </details>
          </div>
          <div className="lrn-definition">
            <span className="lrn-definition-term">Direct Proportion</span>
            <div className="lrn-definition-desc">
              <p>{`$y = kx$, where $x$ is the amount you know, $y$ is the amount you want, and $k$ is the value of one unit (a constant is a number that never changes). Find $k$ by dividing: $k = \\dfrac{y}{x}$. Then scale to any target $x$.`}</p>
            </div>
          </div>
          <h3>The Unit-Rate Method</h3>
          <p>
            You already used unit rates with speed and scaling. Here the same idea solves every
            direct-proportion problem: find the value for one unit, then multiply by the target.
          </p>
          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>
              {`Finding the value for one unit is the same as finding $k$ in $y = kx$. You compute $k = \\frac{y_1}{x_1}$ from one known pair, then use $y_2 = k \\times x_2$ for any target. The two steps are just the algebra of $y = kx$ made concrete.`}
            </p>
          </div>
          <h3>The Petrol Problem</h3>
          <p>
            11 litres of petrol cost $20.46. Find the cost of 27 litres. Think logically: find the
            cost of one litre first, then scale up.
          </p>
          <div className="lrn-steps">
            <ol className="lrn-list">
              <li>{`Find the cost of 1 litre: $\\dfrac{20.46}{11} = \\$1.86$ per litre.`}</li>
              <li>{`Scale to 27 litres: $1.86 \\times 27 = \\$50.22$.`}</li>
            </ol>
          </div>
          <viz.UnitRateBarModel C={C} />
          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>Why do we divide first, then multiply? Why not scale directly from 11 to 27?</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                {`Dividing by 11 gives the unit rate $k$ (cost per litre). From $k$, you can find the cost for any number of litres by multiplying. Direct scaling from 11 to 27 requires the ratio $\\frac{27}{11}$, which is not a whole number and is easy to miscalculate. Going through 1 unit is safer and works for any target.`}
              </p>
            </details>
          </div>
          <viz.DirectProportionLine C={C} />
          <div className="lrn-callout">
            <p>
              The line <strong>always passes through the origin</strong> (the (0,0) corner where
              both quantities are zero). You met this with speed: zero time gives zero distance. If
              the line misses the origin, the quantities are not in direct proportion.
            </p>
          </div>
        </>,

        // == Section 1: What Inverse Proportion Means ==========================
        <>
          <h2>What Inverse Proportion Means</h2>
          <p>
            Two quantities are in inverse proportion when one increases and the other decreases so
            that their product stays constant. Double one quantity and the other is halved. Triple
            one and the other becomes one-third.
          </p>
          <p>
            When to use this: any problem where more of one resource means each unit does more of
            the work. Workers sharing a job. Animals sharing a food supply. Pipes filling a tank.
            Whenever splitting a fixed total changes both quantities.
          </p>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              A farmer has enough hay to feed 5 horses for 6 days. Before calculating: if he adds
              more horses, will the hay last longer or shorter? What if he removes horses?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                More horses: the hay runs out sooner (shorter time). Fewer horses: the hay lasts
                longer. The number of horses and the number of days move in opposite directions.
                That is the defining feature of inverse proportion.
              </p>
            </details>
          </div>
          <div className="lrn-definition">
            <span className="lrn-definition-term">Inverse Proportion</span>
            <div className="lrn-definition-desc">
              <p>{`$y = \\dfrac{k}{x}$, where $x$ is the amount you know, $y$ is the amount you want, and $k$ is the fixed total ($k = x \\times y$). Find $k$ by multiplying a known pair. Then divide $k$ by the target $x$ to find $y$.`}</p>
            </div>
          </div>
          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Direct Proportion</span>
              <p>{`$y = kx$. Both quantities move in the same direction. $k = \\dfrac{y}{x}$. Graph: straight line through the origin.`}</p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Inverse Proportion</span>
              <p>{`$y = \\dfrac{k}{x}$. Quantities move in opposite directions. $k = x \\times y$. Graph: a curve that drops steeply, then flattens, never touching either axis line.`}</p>
            </div>
          </div>
          <h3>The Horses-and-Hay Problem</h3>
          <p>
            A farmer has enough hay to feed 5 horses for 6 days. How many days will the same hay
            last for 3 horses? Find the days for 1 horse first, then scale to 3.
          </p>
          <div className="lrn-steps">
            <ol className="lrn-list">
              <li>{`Find the total hay supply: $5 \\times 6 = 30$ horse-days (the days one horse could eat the whole supply).`}</li>
              <li>{`Days for 1 horse: $\\dfrac{30}{1} = 30$ days.`}</li>
              <li>{`Days for 3 horses: $\\dfrac{30}{3} = 10$ days.`}</li>
            </ol>
          </div>
          <viz.HorsesHayBarModel C={C} />
          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>Why do we multiply 5 by 6 in step 1? What does the product 30 represent?</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                {`The product $5 \\times 6 = 30$ is the constant $k$. It represents the total hay supply in horse-days. That is how many days one horse could eat the whole supply. This constant does not change, no matter how many horses share it. Dividing $k$ by any number of horses gives the days each gets.`}
              </p>
            </details>
          </div>
          <viz.InverseProportionCurve C={C} />
          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>
              {`In inverse proportion, $x \\times y = k$ always. Rearranging gives $y = \\dfrac{k}{x}$. As $x$ grows, $y$ shrinks. The curve drops steeply, then flattens out. It never touches either axis. If $x$ were 0, you would be dividing by 0, which is not allowed. And $y$ can never reach 0, because a positive number divided by a positive number stays positive.`}
            </p>
          </div>
          <p>
            You can now solve any inverse-proportion problem. Find the constant by multiplying a
            known pair, then divide it by the target. The plots below show both types side by side.
          </p>
          <viz.DirectVsInversePlots C={C} />
        </>,

        // == Section 2: Foreign Exchange as Direct Proportion ==================
        <>
          <h2>Foreign Exchange as Direct Proportion</h2>
          <p>
            Changing money between currencies is a direct proportion problem. The exchange rate is
            the constant of proportionality. More dollars always converts to proportionally more of
            the foreign currency.
          </p>
          <p>
            When to use this: any currency conversion using a fixed exchange rate. Multiply the
            dollar amount by the rate to get the foreign amount. Divide to reverse the direction.
          </p>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              {`$1 = 0.29 Kuwaiti dinars (KWD). Before calculating: will $22.50 convert to more than 1 KWD or less than 1 KWD?`}
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                More than 1 KWD. $22.50 is much more than $1, so you get much more than 0.29 KWD.
                The conversion scales up from there. The worked steps below find the exact amount.
              </p>
            </details>
          </div>
          <h3>Converting Dollars to a Foreign Currency</h3>
          <p>
            {`The rate $\\$1 = 0.29\\,\\text{KWD}$ means each dollar buys 0.29 dinars. Multiply the dollar amount by the rate.`}
          </p>
          <div className="lrn-steps">
            <ol className="lrn-list">
              <li>{`State the rate: $\\$1 = 0.29\\,\\text{KWD}$.`}</li>
              <li>{`Multiply dollars by the rate: $22.50 \\times 0.29 = 6.525$.`}</li>
              <li>{`Round to two decimal places: $6.525 \\approx 6.53\\,\\text{KWD}$ (the $\\approx$ sign means "about equal to").`}</li>
            </ol>
          </div>
          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>
              {`Why does multiplying by the rate give the correct number of dinars? What role does the rate play in the formula $y = kx$?`}
            </p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                {`The rate is $k$. It says how many dinars you get per dollar. Every dollar buys $k$ dinars, so $x$ dollars buy $kx$ dinars. This is exactly $y = kx$ with $k = 0.29$ and $x = 22.50$.`}
              </p>
            </details>
          </div>
          <h3>Converting a Foreign Currency Back to Dollars</h3>
          <p>
            {`The same rate works in reverse. If $\\$1 = €0.70$, then $€1 = \\$\\tfrac{1}{0.70}$. Multiply the euro amount by $\\tfrac{1}{0.70}$.`}
          </p>
          <div className="lrn-steps">
            <ol className="lrn-list">
              <li>{`Flip the rate: $\\$1 = €0.70$, so $€1 = \\$\\dfrac{1}{0.70} \\approx \\$1.4286$.`}</li>
              <li>{`Multiply euros by the flipped rate: $300 \\times \\dfrac{1}{0.70} = \\$428.57$.`}</li>
            </ol>
          </div>
          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>
              Why do we flip the rate when going from euros back to dollars? What would happen if we
              multiplied 300 by 0.70 instead?
            </p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                {`The rate $\\$1 = €0.70$ tells you how many euros you get per dollar. To go the other way, you need how many dollars you get per euro. That is the reciprocal (1 divided by the rate), here $\\frac{1}{0.70}$. Multiplying 300 by 0.70 would give 210. That is the number of euros 300 dollars buys. It is not the number of dollars 300 euros buys. Flipping to the reciprocal reverses the direction of the proportion.`}
              </p>
            </details>
          </div>
          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Dollars to Foreign</span>
              <p>{`Multiply dollars by the rate $k$. Formula: $\\text{foreign} = \\$ \\times k$.`}</p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Foreign to Dollars</span>
              <p>{`Multiply foreign amount by $\\tfrac{1}{k}$. Formula: $\\$ = \\text{foreign} \\times \\tfrac{1}{k}$.`}</p>
            </div>
          </div>
          <h3>The Exchange-Rate Table</h3>
          <p>
            Use these fixed rates for every conversion below. Multiply a dollar amount by a rate to
            convert to that currency. Divide by the rate to convert back to dollars. The full table
            sits in the Reference tab.
          </p>
          <viz.ExchangeRateConverter C={C} />
        </>
      ]
    },

    practice: [
      {
        q: 'Petrol costs $1.86 per litre. How much do 27 litres cost? Show the unit-rate steps.',
        a: `$\\$1.86 \\times 27 = \\$50.22$. The unit rate is $\\$1.86$ per litre. Multiply by the target quantity. Cost is directly proportional to quantity, so $\\text{cost} = 1.86 \\times \\text{litres}$ at all times.`
      },
      {
        q: '5 horses eat enough hay to last 6 days. How many days will the hay last for 3 horses?',
        a: `10 days. Total hay supply: $5 \\times 6 = 30$ horse-days. Days for 1 horse $= \\frac{30}{1} = 30$. Days for 3 horses $= \\frac{30}{3} = 10$. The constant $k = 30$ stays fixed throughout.`
      },
      {
        q: `Explain: why does the graph of a direct proportion always pass through the origin?`,
        a: `Because $y = kx$. When $x = 0$, $y = k \\times 0 = 0$. Zero input always produces zero output. If the line misses the origin, the relationship has a fixed starting value. That is not direct proportion.`
      },
      {
        q: `Convert $22.50 to Kuwaiti dinars. Rate: $1 = 0.29 KWD.`,
        a: `$22.50 \\times 0.29 = 6.525 \\approx 6.53\\,\\text{KWD}$. Multiply dollars by the exchange rate because currency conversion is direct proportion: $\\text{foreign} = \\text{dollars} \\times k$.`
      },
      {
        q: `Convert €300 to US dollars. Rate: $1 = €0.70.`,
        a: `$\\$428.57$. Since $\\$1 = €0.70$, we get $€1 = \\$\\frac{1}{0.70}$. So $€300 = 300 \\times \\frac{1}{0.70} \\approx \\$428.57$. Converting foreign to dollars means multiplying by $\\frac{1}{k}$ instead of $k$.`
      },
      {
        q: `A tap fills a tank in 8 hours. Is the volume of water and time in direct or inverse proportion? Explain.`,
        a: `Direct proportion. More time means more water. Volume increases at a constant rate (litres per hour), so $\\text{volume} = k \\times \\text{time}$. This is $y = kx$.`
      },
      {
        q: `3 workers finish a job in 12 days. How long would 6 workers take? What type of proportion?`,
        a: `6 days. Inverse proportion: more workers means fewer days. Constant $k = 3 \\times 12 = 36$ worker-days. Days for 6 workers $= \\frac{36}{6} = 6$.`
      },
      {
        q: `Identify the type: 33 books cost $280.50. How much does 1 book cost?`,
        a: `Direct proportion. Cost is directly proportional to quantity. Unit rate $= \\frac{280.50}{33} = \\$8.50$ per book. This is $k$ in $\\text{cost} = k \\times \\text{books}$.`
      },
      {
        q: `How does finding the value for one unit connect to the formula y = kx?`,
        a: `Finding the value for one unit computes $k$: it is the output when $x = 1$, which equals $k \\times 1 = k$. Once you have $k$, multiply by any target $x$ to get $y$. The unit-rate method is just the two-step arithmetic of $y = kx$.`
      },
      {
        q: `5 men can paint a tower in 10 days. How long would 1 man take? How long would 2 men take?`,
        a: `1 man: $5 \\times 10 = 50$ man-days, so $\\frac{50}{1} = 50$ days. 2 men: $\\frac{50}{2} = 25$ days. Inverse proportion: $k = 50$, $y = \\frac{50}{x}$.`
      },
      {
        q: `Predict: if you double the number of horses in the hay problem, what happens to the number of days? Why?`,
        a: `The days are halved. In inverse proportion, $x \\times y = k$. If $x$ doubles, $y$ must halve to keep the product constant. Specifically, $5 \\times 6 = 30$, so $10 \\times y = 30$ gives $y = 3$ days.`
      },
      {
        q: `You buy pizza slices at a fixed price. You pay $12.60 for 7 slices. How much will 15 slices cost?`,
        a: `$\\$27.00$. Unit rate $= \\frac{12.60}{7} = \\$1.80$ per slice. Total $= 1.80 \\times 15 = \\$27.00$. Direct proportion: total cost $= 1.80 \\times$ slices.`
      },
      {
        q: `What is the constant k in the horses-and-hay problem? What does it represent in the real world?`,
        a: `$k = 5 \\times 6 = 30$ horse-days. It represents the total hay supply: enough for one horse for 30 days. This constant is fixed no matter how many horses share it, which is why $x \\times y$ always equals 30.`
      },
      {
        q: `Convert $150 to Indian rupees. Rate: $1 = 46.50 INR.`,
        a: `$150 \\times 46.50 = 6975\\,\\text{INR}$. Multiply dollars by the rate: $\\text{rupees} = \\text{dollars} \\times k$, where $k = 46.50$.`
      },
      {
        q: `A recipe needs 250 g of flour to make 20 biscuits. How much flour is needed for 36 biscuits?`,
        a: `$450\\,\\text{g}$. Unit rate $= \\frac{250}{20} = 12.5\\,\\text{g per biscuit}$. Total $= 12.5 \\times 36 = 450\\,\\text{g}$. Direct proportion: flour scales with biscuit count.`
      },
      {
        q: `Why does the inverse proportion curve never touch the axes? What would it mean if it did?`,
        a: `The curve approaches the axes but never reaches them. At $x = 0$, $y = \\frac{k}{x}$ has no answer, because you cannot divide by zero. And $y$ only reaches 0 if $x$ grows infinitely large. In real life, zero horses eating infinite hay (or infinite horses eating zero days) are impossible situations.`
      },
      {
        q: `Convert £200 to US dollars. Rate: $1 = £0.63.`,
        a: `$200 \\times \\frac{1}{0.63} \\approx \\$317.46$. Divide by the rate (multiply by $1/k$) because converting foreign to dollars reverses the direction of the proportion.`
      },
      {
        q: `8 beavers take 6 hours to build a dam. How long would 4 beavers take?`,
        a: `12 hours. Inverse proportion: beavers $\\times$ hours $= k$. Constant $k = 8 \\times 6 = 48$ beaver-hours. Hours for 4 beavers $= \\frac{48}{4} = 12$. Half as many beavers means double the time.`
      },
      {
        q: `A train travels at a fixed speed. Is distance and time in direct or inverse proportion? Name the constant.`,
        a: `Direct proportion. Distance $= \\text{speed} \\times \\text{time}$. The constant $k$ is the speed (e.g. km/h). More time always means proportionally more distance at a fixed speed.`
      },
      {
        q: `Explain in your own words why the unit-rate strategy works for both direct and inverse proportion.`,
        a: `For direct proportion, the value for one unit is $k$. Multiply $k$ by any target to get the output. For inverse proportion, the value for one unit gives the total ($k = \\text{quantity} \\times 1$). Divide $k$ by any target to get the output. In both cases, going through 1 unit finds the constant by itself. Every other value then follows from a single multiplication or division.`
      }
    ],

    reference: {
      category: 'Quick Reference',
      title: 'Direct and Inverse Proportion',
      sections: [
        <>
          <h2>Core Formulas</h2>
          <div className="lrn-eq lrn-eq-hero">{`$$y = kx$$`}</div>
          <div className="lrn-definition">
            <span className="lrn-definition-term">Direct Proportion</span>
            <div className="lrn-definition-desc">
              <p>{`$k = \\dfrac{y}{x}$ (constant ratio). Both quantities increase or decrease together.`}</p>
              <p>
                <strong>When to use:</strong> cost vs quantity, distance vs time at fixed speed,
                currency conversion. Graph: straight line through the origin.
              </p>
            </div>
          </div>
          <div className="lrn-eq lrn-eq-hero">{`$$y = \\frac{k}{x}$$`}</div>
          <div className="lrn-definition">
            <span className="lrn-definition-term">Inverse Proportion</span>
            <div className="lrn-definition-desc">
              <p>{`$k = x \\times y$ (constant product). One quantity increases while the other decreases.`}</p>
              <p>
                <strong>When to use:</strong> workers and days to finish a job, animals and days of
                food supply, pipes and time to fill a tank. Graph: a curve that drops steeply, then
                flattens, never touching either axis.
              </p>
            </div>
          </div>
          <div className="lrn-definition">
            <span className="lrn-definition-term">Foreign Exchange (Direct)</span>
            <div className="lrn-definition-desc">
              <p>{`$\\text{foreign} = \\text{dollars} \\times k$`}</p>
              <p>{`$\\text{dollars} = \\text{foreign} \\times \\dfrac{1}{k}$`}</p>
              <p>
                <strong>When to use:</strong> converting between currencies at a fixed exchange
                rate. The rate is the constant of proportionality.
              </p>
            </div>
          </div>
        </>,
        <>
          <h2>Unit-Rate Method</h2>
          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Direct</span>
              <p>
                Step 1: divide to find the 1-unit value. Step 2: multiply by the target quantity.
              </p>
              <p>{`Example: 11 L for \\$20.46. Cost of 1 L $= \\frac{20.46}{11} = \\$1.86$. Cost of 27 L $= 1.86 \\times 27 = \\$50.22$.`}</p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Inverse</span>
              <p>Step 1: multiply to find total (k). Step 2: divide k by the target quantity.</p>
              <p>{`Example: 5 horses $\\times$ 6 days $= 30$ horse-days. Days for 3 horses $= \\dfrac{30}{3} = 10$.`}</p>
            </div>
          </div>
          <h2>Identifying the Type</h2>
          <div className="lrn-steps">
            <ol className="lrn-list">
              <li>
                Does more of the first quantity mean more of the second? Yes: direct proportion.
              </li>
              <li>
                Does more of the first quantity mean less of the second? Yes: inverse proportion.
              </li>
              <li>
                {`Check: compute $\\dfrac{y}{x}$ for known pairs. If constant, direct. Compute $x \\times y$. If constant, inverse.`}
              </li>
            </ol>
          </div>
          <h2>Exchange-Rate Table</h2>
          <p>
            <strong>When to use:</strong> multiply dollars by the rate to convert to that currency.
            Divide by the rate to convert back to dollars.
          </p>
          <table
            style={{
              width: '100%',
              borderCollapse: 'collapse',
              fontFamily: "'D-DIN', monospace",
              fontSize: '0.9em'
            }}
          >
            <thead>
              <tr>
                {['Country', 'Currency', '$1 ='].map((h, i) => (
                  <th
                    key={h}
                    style={{
                      textAlign: i === 2 ? 'right' : 'left',
                      padding: '5px 8px',
                      borderBottom: '1px solid var(--border-default)',
                      textTransform: 'uppercase',
                      letterSpacing: '0.1em'
                    }}
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[
                ['Argentina', 'Peso (ARS)', '3.79'],
                ['Australia', 'Dollar (AUD)', '1.13'],
                ['Eurozone', 'Euro (EUR)', '0.70'],
                ['India', 'Rupee (INR)', '46.50'],
                ['Japan', 'Yen (JPY)', '91.20'],
                ['Kuwait', 'Dinar (KWD)', '0.29'],
                ['United Kingdom', 'Pound (GBP)', '0.63']
              ].map(([country, currency, rate], i) => (
                <tr key={i}>
                  <td
                    style={{
                      padding: '5px 8px',
                      borderBottom: '1px solid var(--border-subtle)',
                      opacity: 0.85
                    }}
                  >
                    {country}
                  </td>
                  <td
                    style={{
                      padding: '5px 8px',
                      borderBottom: '1px solid var(--border-subtle)',
                      opacity: 0.85
                    }}
                  >
                    {currency}
                  </td>
                  <td
                    style={{
                      padding: '5px 8px',
                      borderBottom: '1px solid var(--border-subtle)',
                      textAlign: 'right',
                      fontVariantNumeric: 'tabular-nums'
                    }}
                  >
                    {rate}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      ]
    },

    customCss:
      '.MafsView { --mafs-bg: transparent; --mafs-fg: var(--text-primary); --mafs-line-color: var(--border-subtle); }'
  }
  return config
}

export default function DirectAndInverseProportion() {
  const config = useConfig()
  return <LearningTemplate config={config} />
}
