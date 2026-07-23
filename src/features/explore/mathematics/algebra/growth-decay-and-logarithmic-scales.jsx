import { LearningTemplate } from '../../../../components/learning/learning-template'
import {
  LogScaleNumberLineViz,
  HalfLifeDecayViz,
  CoolingCurveViz,
  PopulationRatesViz,
  BacteriaDoublingViz
} from '../../../../components/viz'

function useConfig() {
  const config = {
    cssPrefix: 'gdl',
    documentTitle: 'Growth, Decay and Logarithmic Scales - AETHER',
    learning: {
      groupTitle: 'Logarithms and Exponential Models',
      category: 'Algebra',
      title: 'Growth, Decay and Logarithmic Scales',
      subtitle: 'Exponential growth and decay models, and the pH, Richter, and decibel scales.',
      sections: [
        <>
          <h2>Exponential Growth by Doubling Time</h2>
          <p>
            {`Many natural processes grow or shrink at a rate tied to their own size. Population growth, radioactive decay, and heat loss all follow this pattern. This lesson builds two equivalent ways to model that pattern. It then shows why some quantities need a logarithmic scale instead of a normal number line.`}
          </p>

          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              {`A bacteria culture starts at 1000 cells and doubles every 3 hours. Predict: after 15 hours, is the population closer to 8,000, 16,000, or 32,000?`}
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                {`It reaches 32,000. Five doubling periods pass in 15 hours, since $15 \\div 3 = 5$, and $1000 \\times 2^5 = 32{,}000$.`}
              </p>
            </details>
          </div>

          <p>
            {`When to use this: use the doubling-time model whenever a problem gives you a fixed doubling period, instead of a percentage growth rate.`}
          </p>

          <p>
            {`Some quantities double after a fixed amount of time, every time. Bacteria that double every hour follow the pattern $f(t) = 2^t$. Bacteria that start at 10 and double every hour follow $f(t) = 10 \\cdot 2^t$. A slower strain that doubles every 3 hours follows $f(t) = 10 \\cdot 2^{t/3}$.`}
          </p>

          <div className="lrn-definition">
            <span className="lrn-definition-term">Exponential Growth (Doubling Time)</span>
            <div className="lrn-definition-desc">
              <p>{`$$n(t) = n_0 \\cdot 2^{t/a}$$`}</p>
              <p>
                {`Here $n(t)$ is the population at time $t$, $n_0$ is the initial population, and $a$ is the doubling time. Measure $a$ and $t$ in the same time unit.`}
              </p>
            </div>
          </div>

          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>
              {`Every time $t$ increases by one full doubling period $a$, the exponent $t/a$ increases by exactly $1$. Raising $2$ to a power that is one higher doubles the result. So the model doubles the population every $a$ units of time, by construction.`}
            </p>
          </div>

          <h3>Worked Example: The Bacteria Population</h3>

          <p>{`A culture of bacteria doubles every 3 hours. It starts with 1000 bacteria.`}</p>

          <div className="lrn-proof">
            <span className="lrn-proof-header">
              Modeling and predicting the bacteria population
            </span>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">1.</span>
              <div className="lrn-proof-step-content">
                {`Write the model. The doubling time is $a = 3$ hours and the initial count is $n_0 = 1000$: $n(t) = 1000 \\cdot 2^{t/3}$.`}
              </div>
            </div>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">2.</span>
              <div className="lrn-proof-step-content">
                {`Find the population after 15 hours. Substitute $t=15$: $n(15) = 1000 \\cdot 2^{15/3} = 1000 \\cdot 2^5 = 32{,}000$.`}
              </div>
            </div>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">3.</span>
              <div className="lrn-proof-step-content">
                {`Find when the population reaches 100,000. Set $n(t) = 100{,}000$: $100{,}000 = 1000 \\cdot 2^{t/3}$, so $100 = 2^{t/3}$.`}
              </div>
            </div>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">4.</span>
              <div className="lrn-proof-step-content">
                {`Take the common logarithm of both sides: $\\log 100 = \\dfrac{t}{3}\\log 2$. Solve for $t$: $t = \\dfrac{3\\log 100}{\\log 2} = \\dfrac{6}{\\log 2} \\approx 19.93$. The culture reaches 100,000 bacteria in about 20 hours.`}
              </div>
            </div>
            <div className="lrn-qed">Q.E.D.</div>
          </div>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>
              {`Step 4 takes the common logarithm of both sides of $100 = 2^{t/3}$. Why does that move the unknown $t$ out of the exponent, and why does $\\log 100$ simplify to $2$?`}
            </p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                {`Recall: a logarithm undoes an exponent, the same move you use to solve exponential and logarithmic equations. Applying $\\log$ turns the exponent $t/3$ into a multiplied factor, so $t$ comes free for normal algebra.`}
              </p>
              <p>
                {`$\\log 100$ simplifies to $2$ because $100 = 10^2$. The common logarithm asks what power of $10$ produces the number inside it.`}
              </p>
            </details>
          </div>

          <div className="lrn-graph">
            <BacteriaDoublingViz />
          </div>

          <h3>Worked Example: The Rabbit Population</h3>

          <p>
            {`Sometimes you know a current headcount and a doubling time, but not the starting size. A rabbit population was introduced 8 months ago. It doubles every 3 months. Today it numbers 4100.`}
          </p>

          <div className="lrn-proof">
            <span className="lrn-proof-header">
              Finding the starting size, then predicting forward
            </span>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">1.</span>
              <div className="lrn-proof-step-content">
                {`Write the general model with the known doubling time: $n(t) = n_0 \\cdot 2^{t/3}$.`}
              </div>
            </div>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">2.</span>
              <div className="lrn-proof-step-content">
                {`Use the known data point $n(8) = 4100$ to solve for $n_0$: $4100 = n_0 \\cdot 2^{8/3}$, so $n_0 = \\dfrac{4100}{2^{8/3}} \\approx 645$.`}
              </div>
            </div>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">3.</span>
              <div className="lrn-proof-step-content">
                {`Write the complete model: $n(t) = 645 \\cdot 2^{t/3}$, with $t$ counted in months since the rabbits were introduced.`}
              </div>
            </div>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">4.</span>
              <div className="lrn-proof-step-content">
                {`Predict the population after 1 year, at $t=12$ months: $n(12) = 645 \\cdot 2^{12/3} = 645 \\cdot 16 = 10{,}320$, about 10,000 rabbits.`}
              </div>
            </div>
          </div>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>
              {`This problem solves for $n_0$ before predicting the future population. Why can you not skip straight to predicting $n(12)$ without finding $n_0$ first?`}
            </p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                {`The model $n(t) = n_0 \\cdot 2^{t/3}$ has $n_0$ as an unknown number, not a known constant like the doubling time. Without a value for $n_0$, the formula cannot produce an actual number for $n(12)$.`}
              </p>
              <p>
                {`The given data point, $n(8) = 4100$, is the only piece of information that pins down $n_0$. That is why it must be used first.`}
              </p>
            </details>
          </div>
        </>,

        <>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              {`The doubling-time model uses base $2$. Predict: why might scientists prefer a model built on the constant $e$ instead, even though it can describe the exact same population?`}
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                {`Base $e$ connects directly to calculus. Base $2$ is easier to picture, but base $e$ is easier to work with in calculus.`}
              </p>
            </details>
          </div>

          <h2>Exponential Growth by Relative Growth Rate</h2>

          <p>
            {`When to use this: use the relative-growth-rate model whenever a problem gives you a percentage growth rate per unit time, instead of a doubling time.`}
          </p>

          <p>
            {`A population can also grow at a steady percentage rate of its own current size. We call that percentage the relative growth rate.`}
          </p>

          <p>
            {`For example, a colony of 100 cells growing at a relative rate of 5% per hour follows $n(t) = 100 e^{0.05t}$. After 10 hours it numbers about 165, since $100 e^{0.5} \\approx 165$.`}
          </p>

          <div className="lrn-definition">
            <span className="lrn-definition-term">Exponential Growth (Relative Growth Rate)</span>
            <div className="lrn-definition-desc">
              <p>{`$$n(t) = n_0 e^{rt}$$`}</p>
              <p>
                {`Here $n(t)$ is the population at time $t$, $n_0$ is the initial size, and $r$ is the relative growth rate, written as a proportion of the population, not a percentage. The base $e \\approx 2.718$ is the natural base.`}
              </p>
            </div>
          </div>

          <div className="lrn-callout">
            <span className="lrn-callout-label">A familiar analogy</span>
            <p>
              {`A population growing at relative rate $r$ behaves exactly like an investment earning continuously compounded interest at rate $r$. Both grow in proportion to their own current size. That is why the same formula, $n_0 e^{rt}$, describes both.`}
            </p>
          </div>

          <h3>Worked Example: Predicting the Size of a Population</h3>

          <p>{`A population starts at 500 and grows at a relative rate of 40% per hour.`}</p>

          <div className="lrn-proof">
            <span className="lrn-proof-header">Modeling and predicting the population</span>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">1.</span>
              <div className="lrn-proof-step-content">
                {`Write the model. Here $n_0 = 500$ and $r = 0.4$, since 40% written as a proportion is $0.4$: $n(t) = 500 e^{0.4t}$, with $t$ in hours.`}
              </div>
            </div>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">2.</span>
              <div className="lrn-proof-step-content">
                {`Find the population after 10 hours: $n(10) = 500 e^{0.4 \\cdot 10} = 500 e^{4} \\approx 27{,}300$.`}
              </div>
            </div>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">3.</span>
              <div className="lrn-proof-step-content">
                {`Find when the population reaches 80,000. Set $n(t)=80{,}000$: $80{,}000 = 500e^{0.4t}$, so $160 = e^{0.4t}$.`}
              </div>
            </div>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">4.</span>
              <div className="lrn-proof-step-content">
                {`Take the natural logarithm of both sides: $\\ln 160 = 0.4t$. Solve for $t$: $t = \\dfrac{\\ln 160}{0.4} \\approx 12.68$. The population reaches 80,000 in about 12.7 hours.`}
              </div>
            </div>
            <div className="lrn-qed">Q.E.D.</div>
          </div>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>
              {`Step 4 uses the natural logarithm, $\\ln$, instead of the common logarithm, $\\log$. Why is $\\ln$ the right tool here, when the bacteria problem earlier used $\\log$?`}
            </p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                {`Recall: a logarithm undoes an exponent, so pick the base that matches. Here the base is already $e$, and $\\ln$ is the logarithm that cancels $e$ cleanly, since $\\ln(e^x)=x$. The earlier bacteria problem used base $2$, so any base worked there.`}
              </p>
            </details>
          </div>

          <h3>Worked Example: Comparing Different Rates of Population Growth</h3>

          <p>
            {`World population in the year 2000 was 6.1 billion, growing at a relative rate of 1.4% per year. Some argued that cutting this rate to 1.0% per year would matter little by 2050. Two models test that claim.`}
          </p>

          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Growth rate 1.4% per year</span>
              <p>
                {`Model: $n(t) = 6.1e^{0.014t}$ (billions, $t$ years since 2000). By 2050, at $t=50$: $n(50) = 6.1e^{0.7} \\approx 12.3$ billion.`}
              </p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Growth rate 1.0% per year</span>
              <p>
                {`Model: $n(t) = 6.1e^{0.010t}$ (billions, $t$ years since 2000). By 2050, at $t=50$: $n(50) = 6.1e^{0.50} \\approx 10.1$ billion.`}
              </p>
            </div>
          </div>

          <p>
            {`A drop of only 0.4 percentage points in the yearly rate is tiny. Yet it changes the 2050 projection by more than 2 billion people. Over 50 years, a small rate difference compounds into a large gap.`}
          </p>

          <div className="lrn-graph">
            <PopulationRatesViz />
          </div>

          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>
              {`In $n_0 e^{rt}$, the rate $r$ sits in the exponent, not as a simple multiplier. Small changes to the exponent compound every year, since each year's growth builds on the year before. Over enough years, that compounding turns a small rate gap into a large gap in the final population.`}
            </p>
          </div>

          <div className="lrn-callout">
            <span className="lrn-callout-label">The rate itself is falling</span>
            <p>
              {`The world's actual relative growth rate has been dropping for decades: about 2% per year in 1995, down to about 1.1% per year by 2013.`}
            </p>
          </div>
        </>,

        <>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              {`A bacteria culture's growth gets modeled two ways: once with a doubling time, once with a relative rate in base $e$. Predict: if both models describe the exact same culture, do their graphs match exactly, or only approximately?`}
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                {`They match exactly. You can change either form into the other with algebra. Choosing $r$ correctly from the doubling time produces the identical curve, not just a similar one.`}
              </p>
            </details>
          </div>

          <h2>The Two Growth Forms Are Equivalent</h2>

          <p>
            {`When to use this: convert between the doubling-time form and the relative-rate form whenever a problem gives you one form, but asks a question that is easier to answer in the other.`}
          </p>

          <h3>Worked Example: Expressing a Model in Terms of e</h3>

          <p>{`A bacteria culture starts at 10,000 and doubles every 40 minutes.`}</p>

          <div className="lrn-proof">
            <span className="lrn-proof-header">Converting from doubling time to relative rate</span>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">1.</span>
              <div className="lrn-proof-step-content">
                {`Write the doubling-time model first. The doubling time is $a = 40$ minutes, or $\\frac{2}{3}$ hour, so $\\frac{1}{a} = 1.5$: $n(t) = 10{,}000 \\cdot 2^{1.5t}$.`}
              </div>
            </div>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">2.</span>
              <div className="lrn-proof-step-content">
                {`Find the matching relative rate $r$. After one doubling time, the population doubles: $20{,}000 = 10{,}000 e^{r \\cdot 2/3}$, so $2 = e^{r \\cdot 2/3}$.`}
              </div>
            </div>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">3.</span>
              <div className="lrn-proof-step-content">
                {`Take the natural logarithm of both sides: $\\ln 2 = r \\cdot \\dfrac{2}{3}$. Solve for $r$: $r = \\dfrac{3\\ln 2}{2} \\approx 1.0397$.`}
              </div>
            </div>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">4.</span>
              <div className="lrn-proof-step-content">
                {`Write the relative-rate model: $n(t) = 10{,}000 e^{1.0397t}$. Both models produce identical values at every $t$, since they describe the same culture.`}
              </div>
            </div>
            <div className="lrn-qed">Q.E.D.</div>
          </div>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>
              {`Step 2 sets $20{,}000 = 10{,}000 e^{r \\cdot 2/3}$, using exactly one doubling time. Why is that one point enough to match the two models?`}
            </p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                {`By definition, after exactly one doubling time the population doubles, from $10{,}000$ to $20{,}000$, in both models. Matching the two models at that one known point pins down the single unknown, $r$. Any other time value would need the answer already known to check it.`}
              </p>
            </details>
          </div>

          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Doubling-time form</span>
              <p>{`$n(t) = n_0 \\cdot 2^{t/a}$. A natural fit when a problem states a doubling time directly.`}</p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Relative-rate form</span>
              <p>
                {`$n(t) = n_0 e^{rt}$. A natural fit when a problem states a percentage growth rate, or connects to continuous compounding.`}
              </p>
            </div>
          </div>

          <p>{`Both forms describe the same population and produce the same graph. Pick whichever form matches the information a problem gives you.`}</p>

          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>
              {`Any positive base rewrites as a power of $e$. Since $2 = e^{\\ln 2}$, the doubling form becomes $2^{t/a} = e^{(\\ln 2)t/a}$.`}
            </p>
            <p>
              {`Choosing $r = \\dfrac{\\ln 2}{a}$ turns that into $e^{rt}$ exactly. So the two forms are one formula written two ways.`}
            </p>
          </div>
        </>,

        <>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              {`A 300 mg sample of polonium-210 has a half-life of 140 days. Predict: after 140 days, how much polonium remains? After 280 days?`}
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                {`After 140 days, one half-life, 150 mg remains, half of 300 mg. After 280 days, two half-lives, 75 mg remains, half of 150 mg.`}
              </p>
            </details>
          </div>

          <h2>Radioactive Decay</h2>

          <p>
            {`When to use this: use a decay model whenever a quantity shrinks by a fixed proportion over a fixed time, such as a radioactive substance losing mass.`}
          </p>

          <p>
            {`Radioactive decay works like population growth in reverse. Instead of growing, the mass of a radioactive substance shrinks over time. Each radioactive substance has a fixed half-life: the time it takes for exactly half of a sample to decay.`}
          </p>

          <div className="lrn-callout">
            <span className="lrn-callout-label">Half-life reference table</span>
            <table>
              <thead>
                <tr>
                  <th>Substance</th>
                  <th>Half-life</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Thorium-232</td>
                  <td>14.5 billion years</td>
                </tr>
                <tr>
                  <td>Uranium-235</td>
                  <td>4.5 billion years</td>
                </tr>
                <tr>
                  <td>Thorium-230</td>
                  <td>80,000 years</td>
                </tr>
                <tr>
                  <td>Plutonium-239</td>
                  <td>24,360 years</td>
                </tr>
                <tr>
                  <td>Carbon-14</td>
                  <td>5,730 years</td>
                </tr>
                <tr>
                  <td>Radium-226</td>
                  <td>1,600 years</td>
                </tr>
                <tr>
                  <td>Cesium-137</td>
                  <td>30 years</td>
                </tr>
                <tr>
                  <td>Strontium-90</td>
                  <td>28 years</td>
                </tr>
                <tr>
                  <td>Polonium-210</td>
                  <td>140 days</td>
                </tr>
                <tr>
                  <td>Thorium-234</td>
                  <td>25 days</td>
                </tr>
                <tr>
                  <td>Iodine-135</td>
                  <td>8 days</td>
                </tr>
                <tr>
                  <td>Radon-222</td>
                  <td>3.8 days</td>
                </tr>
                <tr>
                  <td>Lead-211</td>
                  <td>3.6 minutes</td>
                </tr>
                <tr>
                  <td>Krypton-91</td>
                  <td>10 seconds</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p>
            {`Just like doubling time, a half-life gives a doubling-time-style decay model. It uses a negative exponent since the quantity shrinks: $m(t) = m_0 \\cdot 2^{-t/h}$, where $h$ is the half-life.`}
          </p>

          <h3>Deriving the Relative Decay Rate from the Half-Life</h3>

          <p>
            {`The relative-rate form of decay is $m(t) = m_0 e^{-rt}$. The constant $r$ connects directly to the half-life $h$.`}
          </p>

          <div className="lrn-proof">
            <span className="lrn-proof-header">Deriving r = ln 2 / h</span>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">1.</span>
              <div className="lrn-proof-step-content">
                {`Start from the relative-rate decay model: $m(t) = m_0 e^{-rt}$.`}
              </div>
            </div>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">2.</span>
              <div className="lrn-proof-step-content">
                {`Apply the definition of half-life. At $t=h$, exactly half the sample remains, so $m(h) = \\dfrac{m_0}{2}$. Substitute: $\\dfrac{m_0}{2} = m_0 e^{-rh}$.`}
              </div>
            </div>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">3.</span>
              <div className="lrn-proof-step-content">{`Divide both sides by $m_0$: $\\dfrac{1}{2} = e^{-rh}$.`}</div>
            </div>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">4.</span>
              <div className="lrn-proof-step-content">
                {`Take the natural logarithm of both sides: $\\ln\\!\\left(\\dfrac{1}{2}\\right) = -rh$.`}
              </div>
            </div>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">5.</span>
              <div className="lrn-proof-step-content">
                {`Solve for $r$: $r = \\dfrac{-\\ln(1/2)}{h} = \\dfrac{\\ln 2}{h}$, since $-\\ln(1/2) = \\ln 2$.`}
              </div>
            </div>
            <div className="lrn-qed">Q.E.D.</div>
          </div>

          <div className="lrn-faded">
            <div className="lrn-faded-phase">
              <span className="lrn-faded-label">YOUR TURN: FIND r FOR RADIUM-226</span>
              <p>
                {`Radium-226 has a half-life of 1,600 years, from the table above. Use the derived formula to find its relative decay rate.`}
              </p>
              <ol className="lrn-list">
                <li>{`Substitute $h=1600$ into $r=\\dfrac{\\ln 2}{h}$.`}</li>
                <li>{`Evaluate $\\ln 2 \\approx 0.6931$.`}</li>
                <li>{`Divide to find $r$.`}</li>
              </ol>
              <details className="lrn-self-explain-reveal">
                <summary>Check your answer</summary>
                <p>
                  {`$r = \\dfrac{\\ln 2}{1600} \\approx \\dfrac{0.6931}{1600} \\approx 0.000433$, about 0.0433% per year.`}
                </p>
              </details>
            </div>
          </div>

          <p>
            {`You can now turn any half-life straight into a relative decay rate, then write the decay model in either form.`}
          </p>

          <div className="lrn-definition">
            <span className="lrn-definition-term">Radioactive Decay Model</span>
            <div className="lrn-definition-desc">
              <p>{`$$m(t) = m_0 e^{-rt}, \\qquad r = \\frac{\\ln 2}{h}$$`}</p>
              <p>
                {`Here $m(t)$ is the mass remaining at time $t$, $m_0$ is the initial mass, $h$ is the half-life, and $r$ is the relative decay rate.`}
              </p>
            </div>
          </div>

          <h3>Worked Example: Polonium-210 Decay</h3>

          <p>{`A sample of polonium-210 has mass 300 mg. Its half-life is 140 days.`}</p>

          <div className="lrn-proof">
            <span className="lrn-proof-header">Modeling and predicting the decay</span>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">1.</span>
              <div className="lrn-proof-step-content">
                {`Write the doubling-time-style model: $m(t) = 300 \\cdot 2^{-t/140}$.`}
              </div>
            </div>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">2.</span>
              <div className="lrn-proof-step-content">
                {`Convert to the relative-rate form using $r = \\dfrac{\\ln 2}{140} \\approx 0.00495$: $m(t) = 300 e^{-0.00495t}$.`}
              </div>
            </div>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">3.</span>
              <div className="lrn-proof-step-content">
                {`Find the mass remaining after 1 year, 365 days: $m(365) = 300e^{-0.00495 \\cdot 365} \\approx 49.256$, about 49 mg.`}
              </div>
            </div>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">4.</span>
              <div className="lrn-proof-step-content">
                {`Find when 200 mg remains. Set $300e^{-0.00495t} = 200$: $e^{-0.00495t} = \\dfrac{2}{3}$.`}
              </div>
            </div>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">5.</span>
              <div className="lrn-proof-step-content">
                {`Take the natural logarithm and solve for $t$: $t = \\dfrac{-\\ln(2/3)}{0.00495} \\approx 81.9$, about 82 days.`}
              </div>
            </div>
            <div className="lrn-qed">Q.E.D.</div>
          </div>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>
              {`Step 2 converts the half-life into a relative rate $r = \\dfrac{\\ln 2}{140}$. Why does the same sample need two different-looking models at all?`}
            </p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                {`The doubling-time form, $300 \\cdot 2^{-t/140}$, reads straight off the half-life. The relative-rate form, $300 e^{-0.00495t}$, fits calculus and matches other decay problems.`}
              </p>
              <p>
                {`Both forms describe the identical sample, so they always agree. You pick whichever one matches the tool the problem calls for.`}
              </p>
            </details>
          </div>

          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Doubling-time-style form</span>
              <p>{`$m(t) = 300 \\cdot 2^{-t/140}$. Built directly from the half-life.`}</p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Relative-rate form</span>
              <p>{`$m(t) = 300e^{-0.00495t}$. Built from $r = \\dfrac{\\ln 2}{140}$.`}</p>
            </div>
          </div>

          <p>{`Both forms of this model give the exact same result for steps 3 and 4. Try either form and check that the answer matches.`}</p>

          <div className="lrn-graph">
            <HalfLifeDecayViz />
          </div>

          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>
              {`Growth and decay use the exact same exponential machinery. Growth uses a positive rate, so the quantity climbs. Decay uses a negative rate, or a negative exponent, so the quantity falls. Nothing else about the model changes.`}
            </p>
          </div>
        </>,

        <>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              {`A cup of coffee at 200°F sits in a 70°F room. Predict: as time passes, does the coffee's temperature approach 0°F, approach 70°F, or keep falling forever?`}
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                {`It approaches 70°F, the room's temperature, and never actually drops below it. The coffee cools toward its surroundings, not toward zero.`}
              </p>
            </details>
          </div>

          <h2>Newton's Law of Cooling</h2>

          <p>
            {`When to use this: use Newton's Law of Cooling whenever an object's temperature is closing the gap toward a fixed surrounding temperature.`}
          </p>

          <p>
            {`An object cools, or warms, at a rate proportional to the temperature difference between the object and its surroundings. That difference shrinks over time, approaching zero. So the object's temperature approaches the surrounding temperature.`}
          </p>

          <div className="lrn-definition">
            <span className="lrn-definition-term">Newton's Law of Cooling</span>
            <div className="lrn-definition-desc">
              <p>{`$$T(t) = T_s + D_0 e^{-kt}$$`}</p>
              <p>
                {`Here $T(t)$ is the object's temperature at time $t$, $T_s$ is the surrounding temperature, $D_0$ is the initial temperature difference, and $k$ is a positive constant that depends on the object.`}
              </p>
            </div>
          </div>

          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>
              {`As $t$ grows large, $e^{-kt}$ shrinks toward zero, since $k$ is positive. So $T(t)$ approaches $T_s + 0 = T_s$. The model has a horizontal asymptote at the surrounding temperature, a flat level the curve keeps getting closer to but never touches. This matches how a cooling object never overshoots past room temperature.`}
            </p>
          </div>

          <div className="lrn-graph">
            <CoolingCurveViz />
          </div>

          <h3>Worked Example: Cooling Coffee</h3>

          <p>{`Coffee starts at 200°F in a 70°F room. After 10 minutes, it has cooled to 150°F.`}</p>

          <div className="lrn-proof">
            <span className="lrn-proof-header">Finding k, then predicting temperature</span>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">1.</span>
              <div className="lrn-proof-step-content">
                {`Find the initial temperature difference: $D_0 = 200 - 70 = 130$°F. Write the model with the known surrounding temperature: $T(t) = 70 + 130e^{-kt}$.`}
              </div>
            </div>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">2.</span>
              <div className="lrn-proof-step-content">
                {`Use $T(10)=150$ to solve for $k$: $150 = 70 + 130e^{-10k}$, so $130e^{-10k} = 80$, so $e^{-10k} = \\dfrac{8}{13}$.`}
              </div>
            </div>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">3.</span>
              <div className="lrn-proof-step-content">
                {`Take the natural logarithm of both sides: $-10k = \\ln\\!\\left(\\dfrac{8}{13}\\right)$. Solve for $k$: $k = -\\dfrac{1}{10}\\ln\\!\\left(\\dfrac{8}{13}\\right) \\approx 0.04855$.`}
              </div>
            </div>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">4.</span>
              <div className="lrn-proof-step-content">{`Write the complete model: $T(t) = 70 + 130e^{-0.04855t}$.`}</div>
            </div>
            <div className="lrn-qed">Q.E.D.</div>
          </div>

          <div className="lrn-faded">
            <div className="lrn-faded-phase">
              <span className="lrn-faded-label">YOUR TURN: FIND THE TEMPERATURE AT 15 MINUTES</span>
              <p>
                {`Use the complete model, $T(t) = 70 + 130e^{-0.04855t}$, to find the coffee's temperature after 15 minutes.`}
              </p>
              <ol className="lrn-list">
                <li>{`Substitute $t=15$ into the model.`}</li>
                <li>{`Evaluate $e^{-0.04855\\times15}$.`}</li>
                <li>{`Multiply by 130 and add 70.`}</li>
              </ol>
              <details className="lrn-self-explain-reveal">
                <summary>Check your answer</summary>
                <p>{`$T(15) = 70+130e^{-0.7283} \\approx 70+63 \\approx 133$°F.`}</p>
              </details>
            </div>
          </div>

          <p>{`One more question about the same coffee: how long until it cools to 100°F?`}</p>

          <div className="lrn-proof">
            <span className="lrn-proof-header">Solving for the time to reach 100°F</span>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">1.</span>
              <div className="lrn-proof-step-content">
                {`Set $T(t) = 100$: $100 = 70 + 130e^{-0.04855t}$, so $130e^{-0.04855t} = 30$, so $e^{-0.04855t} = \\dfrac{3}{13}$.`}
              </div>
            </div>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">2.</span>
              <div className="lrn-proof-step-content">
                {`Take the natural logarithm and solve for $t$: $t = \\dfrac{\\ln(3/13)}{-0.04855} \\approx 30.2$ minutes, about half an hour.`}
              </div>
            </div>
          </div>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>
              {`This example and the polonium decay example each solve for an unknown constant using one data point. Why does one data point contain enough information to pin down that constant?`}
            </p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                {`Every other quantity in each model is already known from the problem: the surrounding temperature, the initial difference, or the half-life. That leaves exactly one unknown constant in one equation. One equation with one unknown always contains enough information to solve, as long as you can rearrange the equation with algebra.`}
              </p>
            </details>
          </div>
        </>,

        <>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              {`An ant weighs about 0.000003 kg. A whale weighs about 170,000 kg. Predict: could you usefully compare these two weights by marking them both on one ordinary number line?`}
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                {`No. The whale's weight is so much larger that the ant's mark would sit right on top of zero, too close to tell apart. A logarithmic scale is needed to make both weights visible and comparable at once.`}
              </p>
            </details>
          </div>

          <h2>Why Logarithmic Scales Exist</h2>

          <p>
            {`When to use this: reach for a logarithmic scale whenever a quantity spans an enormous range of sizes, from tiny to huge, in the same problem.`}
          </p>

          <p>
            {`Some quantities vary over a huge range: earthquake intensity, hydrogen ion concentration, light intensity, sound intensity, information capacity, and radiation levels. Plotting the raw numbers squeezes the small values until they are too small to see next to the large ones. A logarithmic scale plots the logarithm of the quantity instead, compressing the huge range into small, manageable numbers.`}
          </p>

          <div className="lrn-callout">
            <span className="lrn-callout-label">Weight on a real line versus a log scale</span>
            <table>
              <thead>
                <tr>
                  <th>Object</th>
                  <th>Weight (kg)</th>
                  <th>log(weight)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Ant</td>
                  <td>0.000003</td>
                  <td>-5.5</td>
                </tr>
                <tr>
                  <td>Elephant</td>
                  <td>4,000</td>
                  <td>3.6</td>
                </tr>
                <tr>
                  <td>Whale</td>
                  <td>170,000</td>
                  <td>5.2</td>
                </tr>
              </tbody>
            </table>
            <p>
              {`On a real number line, the ant and elephant sit almost on top of each other, both dwarfed by the whale. On a logarithmic scale, running from -6 to 6, all three weights sit at readable, evenly spaced positions.`}
            </p>
          </div>

          <div className="lrn-graph">
            <LogScaleNumberLineViz />
          </div>

          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>
              {`A logarithm turns multiplication into addition. A weight that is ten times larger only adds $1$ to its logarithm, instead of ten times the distance on the number line. That is exactly why a huge multiplying range compresses into a small adding range, once you take the logarithm.`}
            </p>
          </div>

          <p>
            {`Three real scales use this idea directly: the pH scale for acidity, the Richter scale for earthquakes, and the decibel scale for sound. Each takes the logarithm of a physical quantity that would otherwise be too spread out to compare directly.`}
          </p>
        </>,

        <>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              {`Human blood has a hydrogen ion concentration of about $3.16 \\times 10^{-8}$ moles per liter. Predict: is blood acidic, neutral, or basic?`}
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>{`Blood is slightly basic. Its pH works out to about 7.5, just above the neutral value of 7.`}</p>
            </details>
          </div>

          <h2>The pH Scale</h2>

          <p>{`When to use this: use the pH scale whenever you need to compare or report how acidic or basic a solution is.`}</p>

          <p>
            {`Hydrogen ion concentration in a solution, written $[\\text{H}^+]$ in moles per liter, can range from about $1$ down to $10^{-15}$. Chemist Søren Peter Lauritz Sørensen proposed the pH scale in 1909. It let chemists avoid writing these tiny numbers and their negative exponents.`}
          </p>

          <div className="lrn-definition">
            <span className="lrn-definition-term">pH Definition</span>
            <div className="lrn-definition-desc">
              <p>{`$$\\text{pH} = -\\log[\\text{H}^+]$$`}</p>
              <p>
                {`A solution with $\\text{pH}=7$ is neutral. A solution with $\\text{pH}<7$ is acidic. A solution with $\\text{pH}>7$ is basic.`}
              </p>
            </div>
          </div>

          <p>
            {`For example, a solution with $[\\text{H}^+] = 10^{-4}$ M has $\\text{pH} = -\\log(10^{-4}) = 4$, an acidic solution. Here M is short for molar, which means moles per liter.`}
          </p>

          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>
              {`Hydrogen ion concentration ranges from about $1$ down to $10^{-15}$. Taking $-\\log$ turns those tiny powers of ten into plain numbers from $0$ to $15$.`}
            </p>
            <p>
              {`The minus sign flips the negative exponents into positive, easy-to-read pH values. That is why pH replaces awkward scientific notation with a simple scale.`}
            </p>
          </div>

          <h3>Worked Example: The pH of Blood and of Acid Rain</h3>

          <div className="lrn-proof">
            <span className="lrn-proof-header">
              Converting between hydrogen ion concentration and pH
            </span>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">1.</span>
              <div className="lrn-proof-step-content">
                {`Human blood has $[\\text{H}^+] = 3.16 \\times 10^{-8}$ M. Apply the definition: $\\text{pH} = -\\log(3.16 \\times 10^{-8}) \\approx 7.5$. Since $7.5 > 7$, blood is slightly basic.`}
              </div>
            </div>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">2.</span>
              <div className="lrn-proof-step-content">
                {`The most acidic rainfall ever recorded fell in Scotland in 1974, with $\\text{pH} = 2.4$. Solve the definition in reverse for $[\\text{H}^+]$: $[\\text{H}^+] = 10^{-\\text{pH}} = 10^{-2.4} \\approx 4.0 \\times 10^{-3}$ M.`}
              </div>
            </div>
            <div className="lrn-qed">Q.E.D.</div>
          </div>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>
              {`The blood step takes $-\\log$ of a concentration to find pH. The rain step raises $10$ to a negative power to find a concentration. Why are these two opposite operations?`}
            </p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                {`$\\text{pH} = -\\log[\\text{H}^+]$ and $[\\text{H}^+] = 10^{-\\text{pH}}$ are inverse operations of each other, since a logarithm and its base's exponential undo one another. Going from concentration to pH uses $-\\log$. Going from pH back to concentration reverses it with $10^{-(\\cdot)}$.`}
              </p>
            </details>
          </div>

          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Acidic</span>
              <p>{`$\\text{pH} < 7$. Higher hydrogen ion concentration. Examples: battery acid at 1.0, limes at 1.3 to 2.0, oranges at 3.0 to 4.0.`}</p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Basic</span>
              <p>{`$\\text{pH} > 7$. Lower hydrogen ion concentration. Examples: milk of magnesia at 10.5, seawater at 8.0 to 8.4, human blood at 7.3 to 7.5.`}</p>
            </div>
          </div>

          <div className="lrn-callout">
            <span className="lrn-callout-label">pH of some common substances</span>
            <table>
              <thead>
                <tr>
                  <th>Substance</th>
                  <th>pH</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Milk of magnesia</td>
                  <td>10.5</td>
                </tr>
                <tr>
                  <td>Seawater</td>
                  <td>8.0 to 8.4</td>
                </tr>
                <tr>
                  <td>Human blood</td>
                  <td>7.3 to 7.5</td>
                </tr>
                <tr>
                  <td>Crackers</td>
                  <td>7.0 to 8.5</td>
                </tr>
                <tr>
                  <td>Hominy</td>
                  <td>6.9 to 7.9</td>
                </tr>
                <tr>
                  <td>Cow's milk</td>
                  <td>6.4 to 6.8</td>
                </tr>
                <tr>
                  <td>Spinach</td>
                  <td>5.1 to 5.7</td>
                </tr>
                <tr>
                  <td>Tomatoes</td>
                  <td>4.1 to 4.4</td>
                </tr>
                <tr>
                  <td>Oranges</td>
                  <td>3.0 to 4.0</td>
                </tr>
                <tr>
                  <td>Apples</td>
                  <td>2.9 to 3.3</td>
                </tr>
                <tr>
                  <td>Limes</td>
                  <td>1.3 to 2.0</td>
                </tr>
                <tr>
                  <td>Battery acid</td>
                  <td>1.0</td>
                </tr>
              </tbody>
            </table>
          </div>
        </>,

        <>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              {`Between 1900 and 1950, the largest earthquake Charles Richter studied measured magnitude 8.9. The smallest measured magnitude 0. Predict: roughly how many times more intense was the largest quake, compared to the smallest?`}
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                {`About 800,000,000 times as intense. The magnitude scale is logarithmic, so a gap of 8.9 whole steps compounds into hundreds of millions.`}
              </p>
            </details>
          </div>

          <h2>The Richter Scale</h2>

          <p>{`When to use this: use the Richter scale whenever you compare earthquake intensities that vary over an enormous range.`}</p>

          <p>{`Geologist Charles Richter, 1900 to 1984, defined this magnitude scale in 1935.`}</p>

          <div className="lrn-definition">
            <span className="lrn-definition-term">Richter Magnitude</span>
            <div className="lrn-definition-desc">
              <p>{`$$M = \\log\\!\\left(\\frac{I}{S}\\right)$$`}</p>
              <p>
                {`Here $I$ is the earthquake's intensity, the seismograph amplitude (the height of the wiggle the quake traces) measured 100 km from the epicenter (the point on the ground directly above where the quake starts). $S$ is the intensity of a fixed "standard" earthquake, defined as an amplitude of 1 micron, or $10^{-4}$ cm.`}
              </p>
            </div>
          </div>

          <h3>Proof: The Standard Earthquake Has Magnitude Zero</h3>

          <div className="lrn-proof">
            <span className="lrn-proof-header">Showing M = 0 for the standard earthquake</span>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">1.</span>
              <div className="lrn-proof-step-content">
                {`For the standard earthquake itself, $I = S$. Substitute into the magnitude definition: $M = \\log\\!\\left(\\dfrac{S}{S}\\right)$.`}
              </div>
            </div>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">2.</span>
              <div className="lrn-proof-step-content">{`Simplify the fraction: $\\dfrac{S}{S} = 1$. So $M = \\log 1$.`}</div>
            </div>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">3.</span>
              <div className="lrn-proof-step-content">
                {`Since $10^0 = 1$, $\\log 1 = 0$. So the standard earthquake always has magnitude $M=0$, directly from the definition.`}
              </div>
            </div>
            <div className="lrn-qed">Q.E.D.</div>
          </div>

          <h3>Worked Example: Magnitude and Intensity</h3>

          <div className="lrn-proof">
            <span className="lrn-proof-header">Converting between intensity and magnitude</span>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">1.</span>
              <div className="lrn-proof-step-content">
                {`An earthquake has intensity $I = 3.75$ cm, with $S = 10^{-4}$ cm. Find its magnitude: $M = \\log\\!\\left(\\dfrac{3.75}{10^{-4}}\\right) = \\log(37{,}500) \\approx 4.6$.`}
              </div>
            </div>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">2.</span>
              <div className="lrn-proof-step-content">
                {`Reverse the question: given $M = 5.1$ and $S = 10^{-4}$, find $I$. Rewrite the definition in exponential form: $10^M = \\dfrac{I}{S}$, so $I = S \\cdot 10^M = 10^{-4} \\cdot 10^{5.1} = 10^{1.1} \\approx 12.6$ cm.`}
              </div>
            </div>
            <div className="lrn-qed">Q.E.D.</div>
          </div>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>
              {`Step 2 rewrites $M = \\log(I/S)$ as $10^M = I/S$ before solving for $I$. Why is that rewrite the key move?`}
            </p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                {`The unknown $I$ starts out trapped inside a logarithm. Rewriting the equation in exponential form moves $I$ into a plain fraction, using the fact that $\\log_{10}x=M$ means the same thing as $10^M=x$. Once $I$ sits by itself in a fraction, ordinary algebra isolates it.`}
              </p>
            </details>
          </div>

          <h3>Worked Example: San Francisco 1906 and a Second Quake</h3>

          <p>
            {`The 1906 San Francisco earthquake measured magnitude 8.3. A quake near Colombia and Ecuador the same year measured 4 times as intense.`}
          </p>

          <div className="lrn-proof">
            <span className="lrn-proof-header">
              Finding the magnitude of a quake 4 times as intense
            </span>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">1.</span>
              <div className="lrn-proof-step-content">
                {`Write the new quake's intensity as $4I$, where $I$ is the San Francisco quake's intensity. Its magnitude is $M = \\log\\!\\left(\\dfrac{4I}{S}\\right)$.`}
              </div>
            </div>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">2.</span>
              <div className="lrn-proof-step-content">
                {`Split the logarithm using the Product Law, which says $\\log(xy)=\\log x + \\log y$: $\\log\\!\\left(\\dfrac{4I}{S}\\right) = \\log 4 + \\log\\!\\left(\\dfrac{I}{S}\\right)$.`}
              </div>
            </div>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">3.</span>
              <div className="lrn-proof-step-content">
                {`$\\log(I/S)$ is exactly the San Francisco quake's own magnitude, 8.3. So $M = \\log 4 + 8.3 \\approx 0.6 + 8.3 = 8.9$.`}
              </div>
            </div>
            <div className="lrn-qed">Q.E.D.</div>
          </div>

          <h3>Worked Example: Comparing the 1906 and 1989 California Quakes</h3>

          <p>{`The 1989 Loma Prieta earthquake measured magnitude 7.1. Compare its intensity to the 1906 San Francisco quake, magnitude 8.3.`}</p>

          <div className="lrn-proof">
            <span className="lrn-proof-header">
              Deriving the intensity ratio from a magnitude difference
            </span>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">1.</span>
              <div className="lrn-proof-step-content">
                {`Write each quake's magnitude using the definition: $M_1 = \\log(I_1/S)$ for 1906, $M_2 = \\log(I_2/S)$ for 1989.`}
              </div>
            </div>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">2.</span>
              <div className="lrn-proof-step-content">
                {`Subtract, using the Quotient Law of logarithms, $\\log\\!\\left(\\frac{x}{y}\\right)=\\log x - \\log y$, in reverse: $\\log(I_1/I_2) = \\log\\!\\left(\\dfrac{I_1/S}{I_2/S}\\right) = \\log(I_1/S) - \\log(I_2/S) = M_1 - M_2$.`}
              </div>
            </div>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">3.</span>
              <div className="lrn-proof-step-content">{`Substitute the magnitudes: $\\log(I_1/I_2) = 8.3 - 7.1 = 1.2$.`}</div>
            </div>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">4.</span>
              <div className="lrn-proof-step-content">
                {`Rewrite in exponential form and evaluate: $I_1/I_2 = 10^{1.2} \\approx 16$. The 1906 quake was about 16 times as intense as the 1989 quake.`}
              </div>
            </div>
            <div className="lrn-qed">Q.E.D.</div>
          </div>

          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">1906 San Francisco quake</span>
              <p>{`Magnitude 8.3. Same Richter framework, about 16 times as intense as the 1989 quake below.`}</p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">1989 Loma Prieta quake</span>
              <p>{`Magnitude 7.1. A 1.2 magnitude gap translates into a factor of about 16 in raw intensity.`}</p>
            </div>
          </div>

          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>
              {`A logarithmic scale means equal steps in magnitude represent equal multiplying factors in intensity, not equal added amounts. A gap of 1.2 magnitude units always means the same 16-fold intensity factor, whether the quakes are large or small. That is the whole point of building the scale from a logarithm.`}
            </p>
          </div>

          <div className="lrn-callout">
            <span className="lrn-callout-label">
              Largest earthquakes on record (U.S. Geological Survey)
            </span>
            <table>
              <thead>
                <tr>
                  <th>Location and year</th>
                  <th>Magnitude</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Chile, 1960</td>
                  <td>9.5</td>
                </tr>
                <tr>
                  <td>Alaska, 1964</td>
                  <td>9.2</td>
                </tr>
                <tr>
                  <td>Japan, 2011</td>
                  <td>9.1</td>
                </tr>
                <tr>
                  <td>Sumatra, 2004</td>
                  <td>9.1</td>
                </tr>
                <tr>
                  <td>Kamchatka, 1952</td>
                  <td>9.0</td>
                </tr>
                <tr>
                  <td>Chile, 2010</td>
                  <td>8.8</td>
                </tr>
                <tr>
                  <td>Ecuador, 1906</td>
                  <td>8.8</td>
                </tr>
                <tr>
                  <td>Alaska, 1965</td>
                  <td>8.7</td>
                </tr>
                <tr>
                  <td>Alaska, 1957</td>
                  <td>8.6</td>
                </tr>
                <tr>
                  <td>Sumatra, 2005</td>
                  <td>8.6</td>
                </tr>
                <tr>
                  <td>Sumatra, 2012</td>
                  <td>8.6</td>
                </tr>
                <tr>
                  <td>Tibet, 1950</td>
                  <td>8.6</td>
                </tr>
                <tr>
                  <td>Indonesia, 1938</td>
                  <td>8.5</td>
                </tr>
                <tr>
                  <td>Kamchatka, 1923</td>
                  <td>8.5</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p>
            {`Other magnitude scales exist too, including the U.S. Geological Survey's "moment magnitude scale."`}
          </p>
        </>,

        <>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              {`A jet engine at takeoff measures 140 decibels. A motorcycle at full throttle measures 90 decibels. Predict: is the jet only about 1.5 times louder in raw intensity, or far more than that?`}
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                {`Far more. Since decibels are logarithmic, a 50-decibel gap corresponds to a factor of $10^5$, one hundred thousand times, in raw sound intensity.`}
              </p>
            </details>
          </div>

          <h2>The Decibel Scale</h2>

          <p>{`When to use this: use the decibel scale whenever you compare sound intensities, which can span a trillion-fold range.`}</p>

          <p>
            {`Perceived loudness grows with the logarithm of a sound's physical intensity, not with the intensity itself. This pattern is called the Weber-Fechner Law.`}
          </p>

          <div className="lrn-definition">
            <span className="lrn-definition-term">Decibel Level</span>
            <div className="lrn-definition-desc">
              <p>{`$$B = 10\\log\\!\\left(\\frac{I}{I_0}\\right)$$`}</p>
              <p>
                {`Here $B$ is the loudness in decibels, $I$ is the sound's intensity, and $I_0 = 10^{-12}\\ \\frac{\\text{W}}{\\text{m}^2}$ is the reference intensity, the threshold of human hearing at 1000 Hz.`}
              </p>
            </div>
          </div>

          <p>
            {`At the reference intensity itself, $I=I_0$, so $B = 10\\log(I_0/I_0) = 10\\log 1 = 0$ decibels, the threshold of hearing.`}
          </p>

          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>
              {`Sound intensity spans a trillionfold range, from $10^{-12}$ up to about $1$ watt per square meter. The logarithm alone would compress that into roughly $0$ to $12$.`}
            </p>
            <p>
              {`Multiplying by $10$ then spreads those values into convenient decibel steps from $0$ to $140$. That factor of ten is where the "deci" in decibel comes from.`}
            </p>
          </div>

          <h3>Worked Example: Jet Engine Loudness</h3>

          <div className="lrn-proof">
            <span className="lrn-proof-header">
              Finding the decibel level of a jet engine at takeoff
            </span>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">1.</span>
              <div className="lrn-proof-step-content">
                {`A jet engine at takeoff has intensity $I = 10^2$ watts per square meter, with $I_0 = 10^{-12}$ watts per square meter. Substitute: $B = 10\\log\\!\\left(\\dfrac{10^2}{10^{-12}}\\right)$.`}
              </div>
            </div>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">2.</span>
              <div className="lrn-proof-step-content">
                {`Simplify the exponent inside: $\\dfrac{10^2}{10^{-12}} = 10^{2-(-12)} = 10^{14}$. So $B = 10\\log(10^{14})$.`}
              </div>
            </div>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">3.</span>
              <div className="lrn-proof-step-content">{`Since $\\log(10^{14}) = 14$, $B = 10 \\times 14 = 140$ decibels.`}</div>
            </div>
            <div className="lrn-qed">Q.E.D.</div>
          </div>

          <h3>Worked Example: Finding Intensity from a Decibel Level</h3>

          <p>{`A motorcycle at full throttle measures 90 decibels. Find its raw intensity.`}</p>

          <div className="lrn-proof">
            <span className="lrn-proof-header">Solving the decibel formula for intensity</span>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">1.</span>
              <div className="lrn-proof-step-content">
                {`Start from the decibel formula with $I_0 = 10^{-12}$: $B = 10\\log\\!\\left(\\dfrac{I}{10^{-12}}\\right)$.`}
              </div>
            </div>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">2.</span>
              <div className="lrn-proof-step-content">
                {`Divide both sides by 10, and split the logarithm using the Quotient Law, $\\log\\!\\left(\\frac{x}{y}\\right)=\\log x - \\log y$: $\\dfrac{B}{10} = \\log I - \\log(10^{-12}) = \\log I + 12$.`}
              </div>
            </div>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">3.</span>
              <div className="lrn-proof-step-content">
                {`Solve for $\\log I$: $\\log I = \\dfrac{B}{10} - 12$. For $B=90$: $\\log I = \\dfrac{90}{10} - 12 = 9 - 12 = -3$.`}
              </div>
            </div>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">4.</span>
              <div className="lrn-proof-step-content">
                {`Rewrite in exponential form: $I = 10^{-3}$ watts per square meter.`}
              </div>
            </div>
            <div className="lrn-qed">Q.E.D.</div>
          </div>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>{`Step 2 replaces $\\log(10^{-12})$ with $+12$. Why does subtracting a negative number turn into addition here?`}</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                {`$\\log(10^{-12}) = -12$, since the common logarithm asks what power of $10$ produces $10^{-12}$, and that power is $-12$ itself. The formula subtracts this logarithm: $\\log I - (-12)$. Subtracting a negative number is the same as adding its positive value, so the expression becomes $\\log I + 12$.`}
              </p>
            </details>
          </div>

          <div className="lrn-callout">
            <span className="lrn-callout-label">Decibel levels of common sounds</span>
            <table>
              <thead>
                <tr>
                  <th>Sound</th>
                  <th>Decibels</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Jet takeoff</td>
                  <td>140</td>
                </tr>
                <tr>
                  <td>Jackhammer</td>
                  <td>130</td>
                </tr>
                <tr>
                  <td>Rock concert</td>
                  <td>120</td>
                </tr>
                <tr>
                  <td>Subway</td>
                  <td>100</td>
                </tr>
                <tr>
                  <td>Heavy traffic</td>
                  <td>80</td>
                </tr>
                <tr>
                  <td>Ordinary traffic</td>
                  <td>70</td>
                </tr>
                <tr>
                  <td>Normal conversation</td>
                  <td>50</td>
                </tr>
                <tr>
                  <td>Whisper</td>
                  <td>30</td>
                </tr>
                <tr>
                  <td>Rustling leaves</td>
                  <td>10 to 20</td>
                </tr>
                <tr>
                  <td>Threshold of hearing</td>
                  <td>0</td>
                </tr>
              </tbody>
            </table>
            <p>{`The threshold of pain sits at about 120 decibels, just above a rock concert.`}</p>
          </div>
        </>
      ]
    },

    practice: [
      {
        q: `A virus doubles every 4 hours. It starts with 200 cells. Predict: after 12 hours, is the population closer to 800, 1600, or 3200?`,
        a: `It is 1600. Twelve hours is exactly 3 doubling periods, since $12\\div4=3$, and $200\\times2^3 = 1600$.`
      },
      {
        q: `A population starts at 200 with a relative growth rate of 25% per hour, following $n(t)=200e^{0.25t}$. Predict: will its population ever stop increasing?`,
        a: `No. The model keeps increasing forever as $t$ grows, since $e^{0.25t}$ has no maximum value.`
      },
      {
        q: `A radioactive sample has half-life 25 days and starts at 80 mg. Predict: how much remains after 75 days?`,
        a: `10 mg remains. Seventy-five days is exactly 3 half-lives, since $75\\div25=3$, and the mass halves three times: $80\\to40\\to20\\to10$.`
      },
      {
        q: `A metal bar heated to 300°F is placed in a 70°F room. Predict: does its temperature ever drop below 70°F?`,
        a: `No. The model approaches 70°F as time passes but never actually reaches or drops below it, since $e^{-kt}$ never reaches exactly zero.`
      },
      {
        q: `A cleaning solution has hydrogen ion concentration $[\\text{H}^+]=10^{-11}$ M. Predict: is it acidic or basic?`,
        a: `It is basic. $\\text{pH} = -\\log(10^{-11}) = 11$, well above the neutral value of 7.`
      },
      {
        q: `Two earthquakes differ in magnitude by exactly 2 whole units. Predict: is the more intense one about 2 times, 20 times, or 100 times as intense?`,
        a: `About 100 times as intense. Each whole magnitude unit is a tenfold jump in intensity, so 2 units compounds to $10\\times10=100$.`
      },
      {
        q: `A whisper measures about 30 decibels. A subway measures about 100 decibels. Predict: is the subway sound about 3 times, 70 times, or ten million times as intense as the whisper?`,
        a: `About ten million times. The gap is 70 decibels, and each 10 decibels is a tenfold intensity jump, so 7 jumps gives $10^7$, ten million.`
      },
      {
        q: `Sound intensity can range from $10^{-12}$ to $1$ watts per square meter, a trillion-fold range. Predict: would plotting raw intensity values on an ordinary axis make small and large sounds both easy to see?`,
        a: `No. On an ordinary axis, the small sounds would appear indistinguishable from zero next to the largest sounds. A logarithmic scale is needed to make the whole range readable.`
      },
      {
        q: `A bacteria culture starts at 1000 and doubles every 3 hours. Find the population after 9 hours using $n(t)=1000\\cdot2^{t/3}$.`,
        a: `$n(9) = 1000\\cdot2^{9/3} = 1000\\cdot2^3 = 8000$ bacteria.`
      },
      {
        q: `A population starts at 300 with a relative growth rate of 20% per hour. Find the population after 5 hours.`,
        a: `The model is $n(t) = 300e^{0.2t}$. $n(5) = 300e^{0.2\\cdot5} = 300e^{1} \\approx 815$.`
      },
      {
        q: `A culture doubles every 60 minutes. Predict: if you convert this to the relative-rate form $n_0e^{rt}$ using $t$ in hours, will $r$ equal $\\ln2$, be smaller, or be larger?`,
        a: `It equals $\\ln2$ exactly, since the doubling time is exactly 1 hour, and $r = \\dfrac{\\ln2}{a}$ with $a=1$ gives $r=\\ln2$.`
      },
      {
        q: `Find the relative decay rate $r$ for iodine-135, half-life 8 days, using $r=\\dfrac{\\ln2}{h}$.`,
        a: `$r = \\dfrac{\\ln2}{8}\\approx\\dfrac{0.693}{8}\\approx0.0866$, about 8.66% per day.`
      },
      {
        q: `Coffee cools following $T(t)=70+130e^{-0.04855t}$. Find the temperature at $t=20$ minutes.`,
        a: `$T(20) = 70+130e^{-0.04855\\cdot20} = 70+130e^{-0.971}\\approx70+49.2\\approx119$°F.`
      },
      {
        q: `Find the pH of a solution with $[\\text{H}^+] = 10^{-6}$ M.`,
        a: `$\\text{pH} = -\\log(10^{-6}) = 6$. Since $6<7$, the solution is acidic.`
      },
      {
        q: `An earthquake has intensity $I=5\\times10^{-4}$ cm with standard intensity $S=10^{-4}$ cm. Find its magnitude.`,
        a: `$M = \\log\\!\\left(\\dfrac{5\\times10^{-4}}{10^{-4}}\\right) = \\log5 \\approx 0.7$.`
      },
      {
        q: `A sound has intensity $I=10^{-6}$ watts per square meter. Find its decibel level, using $I_0=10^{-12}$ watts per square meter.`,
        a: `$B = 10\\log\\!\\left(\\dfrac{10^{-6}}{10^{-12}}\\right) = 10\\log(10^6) = 10\\times6 = 60$ decibels.`
      },
      {
        q: `A fish population was introduced 6 months ago and doubles every 2 months. Today it numbers 800. Find the starting population $n_0$.`,
        a: `Use $n(t)=n_0\\cdot2^{t/2}$ with $n(6)=800$: $800 = n_0\\cdot2^{6/2} = n_0\\cdot8$, so $n_0 = 100$ fish.`
      },
      {
        q: `A population starts at 500 with relative growth rate 40% per hour, following $n(t)=500e^{0.4t}$. Find how long it takes to reach 40,000.`,
        a: `Set $40{,}000 = 500e^{0.4t}$, so $80=e^{0.4t}$. Take $\\ln$: $\\ln80 = 0.4t$, so $t = \\dfrac{\\ln80}{0.4}\\approx10.97$ hours.`
      },
      {
        q: `A culture doubles every 2 hours. Find the relative growth rate $r$ so that $n(t)=n_0e^{rt}$ matches $n(t)=n_0\\cdot2^{t/2}$.`,
        a: `After one doubling time, $2n_0 = n_0e^{r\\cdot2}$, so $2=e^{2r}$. Take $\\ln$: $\\ln2 = 2r$, so $r = \\dfrac{\\ln2}{2}\\approx0.347$.`
      },
      {
        q: `A 500 mg sample of a substance with half-life 20 days decays following $m(t)=500e^{-rt}$ with $r=\\dfrac{\\ln2}{20}$. Find the mass remaining after 50 days.`,
        a: `$r = \\dfrac{\\ln2}{20}\\approx0.0347$. $m(50) = 500e^{-0.0347\\cdot50} = 500e^{-1.733}\\approx88.4$ mg.`
      },
      {
        q: `A drink starts at 40°F in a 75°F room and warms to 50°F after 5 minutes. Find $k$ using $T(t)=75+D_0e^{-kt}$.`,
        a: `Newton's Law of Cooling also covers warming: when the object starts colder than its surroundings, the initial difference $D_0$ is negative. Here $D_0 = 40-75=-35$°F. Substitute $T(5)=50$: $50 = 75-35e^{-5k}$, so $-35e^{-5k}=-25$, so $e^{-5k}=\\dfrac{5}{7}$. Take $\\ln$: $-5k=\\ln(5/7)$, so $k=\\dfrac{-\\ln(5/7)}{5}\\approx0.0673$.`
      },
      {
        q: `A vinegar sample has pH 2.9. Find its hydrogen ion concentration.`,
        a: `$[\\text{H}^+] = 10^{-\\text{pH}} = 10^{-2.9} \\approx 1.26\\times10^{-3}$ M.`
      },
      {
        q: `An earthquake has magnitude 6.5, with $S=10^{-4}$ cm. Find its intensity $I$.`,
        a: `Using $10^M = I/S$: $I = S\\cdot10^M = 10^{-4}\\cdot10^{6.5} = 10^{2.5} \\approx 316$ cm.`
      },
      {
        q: `A rock concert measures 120 decibels. Find its intensity, using $I_0=10^{-12}$ watts per square meter.`,
        a: `$\\log I = \\dfrac{120}{10}-12 = 12-12=0$, so $I = 10^0 = 1$ watt per square meter.`
      },
      {
        q: `Using the model $n(t)=1000\\cdot2^{t/3}$ from the bacteria culture, find how long it takes to reach 500,000 bacteria.`,
        a: `Set $500{,}000 = 1000\\cdot2^{t/3}$, so $500 = 2^{t/3}$. Take $\\log$ of both sides: $\\log500 = \\dfrac{t}{3}\\log2$, so $t = \\dfrac{3\\log500}{\\log2} \\approx 26.9$ hours.`
      },
      {
        q: `World population in 2000 was 6.1 billion, growing at 1.4% per year. Using $n(t)=6.1e^{0.014t}$, estimate the population in 2020, at $t=20$.`,
        a: `$n(20) = 6.1e^{0.014\\cdot20} = 6.1e^{0.28} \\approx 8.0$ billion.`
      },
      {
        q: `A radioactive isotope has half-life 10 years. Find the relative decay rate $r$ using $r=\\dfrac{\\ln2}{h}$.`,
        a: `$r = \\dfrac{\\ln2}{10} \\approx \\dfrac{0.693}{10} \\approx 0.0693$, about 6.93% per year.`
      },
      {
        q: `A 300 mg polonium-210 sample decays following $m(t)=300e^{-0.00495t}$. Find how long it takes to decay to 100 mg.`,
        a: `Set $300e^{-0.00495t}=100$, so $e^{-0.00495t}=\\dfrac{1}{3}$. Take $\\ln$: $-0.00495t = \\ln(1/3)$, so $t = \\dfrac{-\\ln(1/3)}{0.00495}\\approx221.9$ days.`
      },
      {
        q: `Explain, using the formula $T(t)=T_s+D_0e^{-kt}$, why the model has a horizontal asymptote at $T_s$ rather than at zero.`,
        a: `As $t$ grows without bound, $e^{-kt}$ shrinks toward $0$, because $k$ is positive. So $T(t)$ approaches $T_s + 0 = T_s$, the surrounding temperature, not zero. The formula builds in the surrounding temperature as the value the object settles toward.`
      },
      {
        q: `Seawater has $[\\text{H}^+]$ between about $4\\times10^{-9}$ and $1\\times10^{-8}$ M. Find its approximate pH range.`,
        a: `$\\text{pH} = -\\log(4\\times10^{-9}) \\approx 8.4$, and $\\text{pH} = -\\log(1\\times10^{-8}) = 8.0$. So the pH range is about 8.0 to 8.4, matching the known pH of seawater.`
      },
      {
        q: `Two earthquakes have magnitudes 6.0 and 7.5. Find how many times more intense the larger quake is.`,
        a: `$\\log(I_1/I_2) = M_1-M_2 = 7.5-6.0=1.5$, so $I_1/I_2 = 10^{1.5}\\approx31.6$. The larger quake is about 31.6 times as intense.`
      },
      {
        q: `Ordinary traffic measures 70 decibels. Find its intensity.`,
        a: `$\\log I = \\dfrac{70}{10}-12 = 7-12=-5$, so $I=10^{-5}$ watts per square meter.`
      },
      {
        q: `Explain from the definition of the model why $n(t)=n_0\\cdot2^{t/a}$ always doubles the population every $a$ units of time, no matter what value $t$ starts at.`,
        a: `Increasing $t$ by $a$ increases the exponent $t/a$ by exactly $1$, since $\\dfrac{t+a}{a} = \\dfrac{t}{a}+1$. Raising $2$ to one more power multiplies the result by $2$. So every increase of $a$ in time multiplies the population by $2$, regardless of the starting time.`
      },
      {
        q: `Explain why a population growing at a relative rate follows the exact same mathematical pattern as money earning continuously compounded interest.`,
        a: `Both quantities grow in proportion to their own current size: a population's births scale with its current headcount, and continuously compounded interest scales with the current balance. That shared mechanism, growth proportional to the current amount, produces the identical formula $n_0e^{rt}$ in both cases.`
      },
      {
        q: `A radioactive isotope has half-life 10 years and starts at 500 mg. Using $m(t)=500e^{-rt}$ with $r=\\dfrac{\\ln2}{10}$, find the mass remaining after 30 years.`,
        a: `Thirty years is exactly 3 half-lives, so the mass halves three times: $500\\to250\\to125\\to62.5$ mg. Checking with the formula confirms $m(30)=500e^{-0.0693\\cdot30}\\approx62.5$ mg.`
      },
      {
        q: `Explain, using the formula $T(t)=T_s+D_0e^{-kt}$, why a larger initial temperature difference $D_0$ does not change how quickly the object approaches $T_s$, only how far it starts.`,
        a: `The rate constant $k$ alone controls how quickly $e^{-kt}$ shrinks toward zero. The value $D_0$ only scales the starting gap. A bigger $D_0$ means a bigger starting distance from $T_s$. But the fraction of that distance closed after time $t$ stays the same, since it depends only on $e^{-kt}$.`
      },
      {
        q: `Name three real physical scales mentioned in this lesson that use a logarithm to compress an enormous range of raw values.`,
        a: `The pH scale for hydrogen ion concentration, the Richter scale for earthquake intensity, and the decibel scale for sound intensity all use a logarithm to compress an enormous range into small, readable numbers.`
      },
      {
        q: `Explain, using the definition $\\text{pH}=-\\log[\\text{H}^+]$, why each 1-unit increase in pH corresponds to a tenfold decrease in hydrogen ion concentration.`,
        a: `A logarithm changes by exactly $1$ whenever its argument changes by a factor of $10$. Since pH is $-\\log[\\text{H}^+]$, a 1-unit rise in pH means $\\log[\\text{H}^+]$ fell by 1, so $[\\text{H}^+]$ itself dropped by a factor of $10$.`
      },
      {
        q: `Explain why the Richter scale's definition, $M=\\log(I/S)$, makes a whole-number increase in magnitude always mean the same intensity factor, whether comparing magnitude 2 to 3, or magnitude 8 to 9.`,
        a: `A logarithm converts a fixed multiplying factor into a fixed added amount, no matter where you start. Since $\\log(10I) = \\log I + 1$ for any $I$, adding exactly 1 to the magnitude always means the raw intensity multiplied by exactly 10, whether the starting magnitude is small or large.`
      },
      {
        q: `Explain why the decibel scale is built on a logarithm, connecting your answer to the Weber-Fechner Law mentioned in this lesson.`,
        a: `The Weber-Fechner Law states that perceived loudness grows with the logarithm of physical intensity, not with intensity itself. Building the decibel formula on a logarithm makes the numeric scale match how loudness actually feels to a listener, and it compresses sound's trillion-fold intensity range into a scale of about 0 to 140.`
      },
      {
        q: `In solving $100 = 2^{t/3}$ for $t$, why is taking a logarithm of both sides the correct first move, rather than dividing or taking a root?`,
        a: `The unknown $t$ sits inside an exponent, not as a coefficient or under a root. A logarithm is the operation that undoes an exponent, since $\\log(2^{x}) = x\\log2$. Dividing or taking a root cannot move $t$ out of the exponent position.`
      },
      {
        q: `Why must the relative growth rate $r$ be written as a decimal proportion, like $0.014$, rather than a percentage, like $1.4$, inside the formula $n(t)=n_0e^{rt}$?`,
        a: `The exponent $rt$ must represent a small, unitless growth factor per unit time. Using $1.4$ directly would make the exponent one hundred times too large, since $1.4$ means $140\\%$, not $1.4\\%$. Writing $r=0.014$ correctly represents $1.4\\%$ as a proportion of $1$.`
      },
      {
        q: `A radioactive sample with half-life 5,730 years, the half-life of carbon-14, follows $m(t)=m_0e^{-rt}$ with $r=\\dfrac{\\ln2}{5730}$. Explain in words, without computing an exact number, why a sample with very little carbon-14 remaining must be very old.`,
        a: `As time passes, the exponential factor $e^{-rt}$ keeps shrinking, since $r$ is a small positive constant. A very small remaining fraction only results after a very large value of $t$ has passed, because the shrinking is gradual and consistent, never sudden.`
      },
      {
        q: `In deriving $r=\\dfrac{\\ln2}{h}$, why must you use $m(h)=\\dfrac{m_0}{2}$ specifically, instead of any other fraction of $m_0$?`,
        a: `Half-life is defined as the time for exactly half the sample to remain. Using any other fraction would answer a different question, like a quarter-life or a tenth-life, not the actual half-life the problem asks about.`
      },
      {
        q: `A student claims that a magnitude 6 earthquake is exactly twice as intense as a magnitude 3 earthquake, since 6 is twice 3. Explain the error.`,
        a: `Richter magnitude is logarithmic, not linear, so doubling the magnitude number does not double the intensity. The intensity ratio is $10^{6-3} = 10^3 = 1000$. A magnitude 6 quake is about 1000 times as intense as a magnitude 3 quake, not twice as intense.`
      },
      {
        q: `In the derivation of $\\log I = \\dfrac{B}{10}-12$, explain why the constant $-12$ appears only because $I_0=10^{-12}$, and would change if $I_0$ were a different value.`,
        a: `The $-12$ comes directly from $\\log(I_0) = \\log(10^{-12}) = -12$. Isolating $\\log I$ subtracts this term, then the double negative flips it to a plus. If $I_0$ were a different reference intensity, that number would change to $\\log(I_0)$ for whatever value $I_0$ actually is.`
      },
      {
        q: `Why does the Richter scale need a logarithm at all, given that Charles Richter's own dataset spanned magnitude 0 to magnitude 8.9?`,
        a: `That range of magnitudes corresponds to an intensity ratio of about 800,000,000 between the largest and smallest quakes studied. Without a logarithm, comparing or plotting such a huge range of raw intensities side by side would be impossible to read. The logarithm compresses that entire range into a scale of about 0 to 9.`
      }
    ],

    reference: {
      category: 'Quick Reference',
      title: 'Growth, Decay and Logarithmic Scales',
      sections: [
        <>
          <h2>Exponential Growth Models</h2>

          <div className="ref-formula">
            <span className="ref-formula-name">Doubling-time growth</span>
            <div className="ref-formula-eq">{`$$n(t) = n_0 \\cdot 2^{t/a}$$`}</div>
            <p className="ref-formula-desc">
              When to use: a problem gives a fixed doubling time $a$, instead of a percentage rate.
            </p>
          </div>

          <div className="ref-formula">
            <span className="ref-formula-name">Relative-rate growth</span>
            <div className="ref-formula-eq">{`$$n(t) = n_0 e^{rt}$$`}</div>
            <p className="ref-formula-desc">
              When to use: a problem gives a percentage relative growth rate $r$, or connects to
              continuous compounding.
            </p>
          </div>

          <h2>Radioactive Decay and Cooling</h2>

          <div className="ref-formula">
            <span className="ref-formula-name">Half-life decay (doubling-time style)</span>
            <div className="ref-formula-eq">{`$$m(t) = m_0 \\cdot 2^{-t/h}$$`}</div>
            <p className="ref-formula-desc">
              When to use: a problem gives the half-life $h$ directly.
            </p>
          </div>

          <div className="ref-formula">
            <span className="ref-formula-name">Relative decay rate from half-life</span>
            <div className="ref-formula-eq">{`$$r = \\frac{\\ln 2}{h}$$`}</div>
            <p className="ref-formula-desc">
              When to use: converting a known half-life $h$ into the relative decay rate $r$.
            </p>
          </div>

          <div className="ref-formula">
            <span className="ref-formula-name">Half-life decay (relative-rate style)</span>
            <div className="ref-formula-eq">{`$$m(t) = m_0 e^{-rt}$$`}</div>
            <p className="ref-formula-desc">
              When to use: a problem gives, or you have derived, the relative decay rate $r$.
            </p>
          </div>

          <div className="ref-formula">
            <span className="ref-formula-name">Newton's Law of Cooling</span>
            <div className="ref-formula-eq">{`$$T(t) = T_s + D_0 e^{-kt}$$`}</div>
            <p className="ref-formula-desc">
              When to use: an object's temperature is approaching a fixed surrounding temperature
              $T_s$.
            </p>
          </div>

          <h2>Logarithmic Scales</h2>

          <div className="ref-formula">
            <span className="ref-formula-name">pH scale</span>
            <div className="ref-formula-eq">{`$$\\text{pH} = -\\log[\\text{H}^+]$$`}</div>
            <p className="ref-formula-desc">
              When to use: reporting how acidic or basic a solution is, from its hydrogen ion
              concentration.
            </p>
          </div>

          <div className="ref-formula">
            <span className="ref-formula-name">Hydrogen ion concentration from pH</span>
            <div className="ref-formula-eq">{`$$[\\text{H}^+] = 10^{-\\text{pH}}$$`}</div>
            <p className="ref-formula-desc">
              When to use: converting a known pH value back into a hydrogen ion concentration.
            </p>
          </div>

          <div className="ref-formula">
            <span className="ref-formula-name">Richter magnitude</span>
            <div className="ref-formula-eq">{`$$M = \\log\\!\\left(\\frac{I}{S}\\right)$$`}</div>
            <p className="ref-formula-desc">
              When to use: finding an earthquake's magnitude from its intensity $I$ and the standard
              intensity $S$.
            </p>
          </div>

          <div className="ref-formula">
            <span className="ref-formula-name">Intensity from Richter magnitude</span>
            <div className="ref-formula-eq">{`$$10^M = \\frac{I}{S}$$`}</div>
            <p className="ref-formula-desc">
              When to use: solving for intensity $I$ when the magnitude $M$ is known.
            </p>
          </div>

          <div className="ref-formula">
            <span className="ref-formula-name">Decibel level</span>
            <div className="ref-formula-eq">{`$$B = 10\\log\\!\\left(\\frac{I}{I_0}\\right)$$`}</div>
            <p className="ref-formula-desc">
              When to use: comparing sound intensities on a scale matched to human perception.
            </p>
          </div>

          <div className="ref-formula">
            <span className="ref-formula-name">Intensity from decibel level (I₀ = 10⁻¹²)</span>
            <div className="ref-formula-eq">{`$$\\log I = \\frac{B}{10} - 12$$`}</div>
            <p className="ref-formula-desc">
              When to use: solving for raw intensity $I$ when the decibel level $B$ is known and
              $I_0 = 10^{-12}$ watts per square meter.
            </p>
          </div>

          <h2>Half-Life Reference Table</h2>
          <table>
            <thead>
              <tr>
                <th>Substance</th>
                <th>Half-life</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Thorium-232</td>
                <td>14.5 billion years</td>
              </tr>
              <tr>
                <td>Uranium-235</td>
                <td>4.5 billion years</td>
              </tr>
              <tr>
                <td>Thorium-230</td>
                <td>80,000 years</td>
              </tr>
              <tr>
                <td>Plutonium-239</td>
                <td>24,360 years</td>
              </tr>
              <tr>
                <td>Carbon-14</td>
                <td>5,730 years</td>
              </tr>
              <tr>
                <td>Radium-226</td>
                <td>1,600 years</td>
              </tr>
              <tr>
                <td>Cesium-137</td>
                <td>30 years</td>
              </tr>
              <tr>
                <td>Strontium-90</td>
                <td>28 years</td>
              </tr>
              <tr>
                <td>Polonium-210</td>
                <td>140 days</td>
              </tr>
              <tr>
                <td>Thorium-234</td>
                <td>25 days</td>
              </tr>
              <tr>
                <td>Iodine-135</td>
                <td>8 days</td>
              </tr>
              <tr>
                <td>Radon-222</td>
                <td>3.8 days</td>
              </tr>
              <tr>
                <td>Lead-211</td>
                <td>3.6 minutes</td>
              </tr>
              <tr>
                <td>Krypton-91</td>
                <td>10 seconds</td>
              </tr>
            </tbody>
          </table>

          <h2>pH of Common Substances</h2>
          <table>
            <thead>
              <tr>
                <th>Substance</th>
                <th>pH</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Milk of magnesia</td>
                <td>10.5</td>
              </tr>
              <tr>
                <td>Seawater</td>
                <td>8.0 to 8.4</td>
              </tr>
              <tr>
                <td>Human blood</td>
                <td>7.3 to 7.5</td>
              </tr>
              <tr>
                <td>Crackers</td>
                <td>7.0 to 8.5</td>
              </tr>
              <tr>
                <td>Hominy</td>
                <td>6.9 to 7.9</td>
              </tr>
              <tr>
                <td>Cow's milk</td>
                <td>6.4 to 6.8</td>
              </tr>
              <tr>
                <td>Spinach</td>
                <td>5.1 to 5.7</td>
              </tr>
              <tr>
                <td>Tomatoes</td>
                <td>4.1 to 4.4</td>
              </tr>
              <tr>
                <td>Oranges</td>
                <td>3.0 to 4.0</td>
              </tr>
              <tr>
                <td>Apples</td>
                <td>2.9 to 3.3</td>
              </tr>
              <tr>
                <td>Limes</td>
                <td>1.3 to 2.0</td>
              </tr>
              <tr>
                <td>Battery acid</td>
                <td>1.0</td>
              </tr>
            </tbody>
          </table>

          <h2>Largest Earthquakes on Record</h2>
          <table>
            <thead>
              <tr>
                <th>Location and year</th>
                <th>Magnitude</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Chile, 1960</td>
                <td>9.5</td>
              </tr>
              <tr>
                <td>Alaska, 1964</td>
                <td>9.2</td>
              </tr>
              <tr>
                <td>Japan, 2011</td>
                <td>9.1</td>
              </tr>
              <tr>
                <td>Sumatra, 2004</td>
                <td>9.1</td>
              </tr>
              <tr>
                <td>Kamchatka, 1952</td>
                <td>9.0</td>
              </tr>
              <tr>
                <td>Chile, 2010</td>
                <td>8.8</td>
              </tr>
              <tr>
                <td>Ecuador, 1906</td>
                <td>8.8</td>
              </tr>
              <tr>
                <td>Alaska, 1965</td>
                <td>8.7</td>
              </tr>
              <tr>
                <td>Alaska, 1957</td>
                <td>8.6</td>
              </tr>
              <tr>
                <td>Sumatra, 2005</td>
                <td>8.6</td>
              </tr>
              <tr>
                <td>Sumatra, 2012</td>
                <td>8.6</td>
              </tr>
              <tr>
                <td>Tibet, 1950</td>
                <td>8.6</td>
              </tr>
              <tr>
                <td>Indonesia, 1938</td>
                <td>8.5</td>
              </tr>
              <tr>
                <td>Kamchatka, 1923</td>
                <td>8.5</td>
              </tr>
            </tbody>
          </table>

          <h2>Decibel Levels of Common Sounds</h2>
          <table>
            <thead>
              <tr>
                <th>Sound</th>
                <th>Decibels</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Jet takeoff</td>
                <td>140</td>
              </tr>
              <tr>
                <td>Jackhammer</td>
                <td>130</td>
              </tr>
              <tr>
                <td>Rock concert</td>
                <td>120</td>
              </tr>
              <tr>
                <td>Subway</td>
                <td>100</td>
              </tr>
              <tr>
                <td>Heavy traffic</td>
                <td>80</td>
              </tr>
              <tr>
                <td>Ordinary traffic</td>
                <td>70</td>
              </tr>
              <tr>
                <td>Normal conversation</td>
                <td>50</td>
              </tr>
              <tr>
                <td>Whisper</td>
                <td>30</td>
              </tr>
              <tr>
                <td>Rustling leaves</td>
                <td>10 to 20</td>
              </tr>
              <tr>
                <td>Threshold of hearing</td>
                <td>0</td>
              </tr>
            </tbody>
          </table>
        </>
      ]
    },

    customCss: null
  }
  return config
}

export default function GrowthDecayAndLogarithmicScales() {
  const config = useConfig()
  return <LearningTemplate config={config} />
}
