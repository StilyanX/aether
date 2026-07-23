import { LearningTemplate } from '../../../../components/learning/learning-template'
import { LogBaseComparisonViz, CommonLogTableViz } from '../../../../components/viz'

function useConfig() {
  const config = {
    cssPrefix: 'cnl',
    documentTitle: 'Common and Natural Logarithms - AETHER',
    learning: {
      groupTitle: 'Logarithms and Exponential Models',
      category: 'Algebra',
      title: 'Common and Natural Logarithms',
      subtitle: 'Base-10 and base-e logarithms, and the constant e.',
      sections: [
        <>
          <h2>Recalling the Logarithmic Function</h2>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              {`You already know $\\log_a x$ means "the exponent that turns $a$ into $x$." Two bases show up so often they get their own shorthand. Predict: what two numbers do you think those special bases are?`}
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>{`The two special bases are $10$ and $e$ (a constant close to $2.718$).`}</p>
              <p>
                {`Base $10$ gives the common logarithm. Base $e$ gives the natural logarithm. Both get their own shorthand notation, which you will learn in this section.`}
              </p>
            </details>
          </div>

          <p>
            {`A logarithm is an exponent. The statement $\\log_a x = y$ means exactly the same thing as $a^y = x$. So a logarithm undoes an exponential: it tells you what power turns the base $a$ into $x$.`}
          </p>

          <div className="lrn-callout">
            <span className="lrn-callout-label">One pattern, every base</span>
            <p>
              {`Every base of a logarithm obeys four properties: $\\log_a 1 = 0$, $\\log_a a = 1$, $\\log_a(a^x) = x$, and $a^{\\log_a x} = x$. These come straight from the inverse relationship. The two logarithms in this lesson apply that same pattern to two specific bases: $10$ and $e$.`}
            </p>
          </div>

          <p>
            {`This lesson focuses on those two bases. Base $10$ is called the common logarithm. Base $e$ is called the natural logarithm. Together they cover the two logarithm keys on every calculator. They are also the two logarithms you meet most often in science and calculus.`}
          </p>
        </>,

        <>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              {`Calculators have a key labeled LOG with no base written on it. Predict: what base do you think that key silently assumes?`}
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                {`The LOG key assumes base $10$. This is the common logarithm, so common that mathematicians drop the subscript entirely and just write $\\log x$.`}
              </p>
            </details>
          </div>

          <h2>Common Logarithms</h2>

          <p>
            {`The common logarithm is the logarithm with base $10$. It is written $\\log x$, with the base left out. By convention, $\\log x$ always means $\\log_{10} x$.`}
          </p>

          <p>
            {`Use the common logarithm in three cases. Reach for it with powers of ten, or with a calculator's LOG key. Reach for it whenever you measure a quantity on a decibel-style scale.`}
          </p>

          <div className="lrn-eq lrn-eq-hero">
            <span>{`$$\\log x = \\log_{10} x$$`}</span>
          </div>

          <p>
            {`Since the common logarithm is just base $10$, the general properties apply directly: $\\log 1 = 0$, $\\log 10 = 1$, $\\log(10^x) = x$, and $10^{\\log x} = x$.`}
          </p>

          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>
              {`Our whole number system runs on powers of ten. Base $10$ counts those powers directly, so each tenfold jump in $x$ raises $\\log x$ by exactly $1$. That clean fit is why base $10$ became the standard for hand calculation and scientific scales.`}
            </p>
          </div>

          <h3>Evaluating Common Logarithms</h3>

          <p>
            {`Every power of ten gives a whole-number common logarithm. The table below moves from $x = 0.01$ up to $x = 10$.`}
          </p>

          <table>
            <thead>
              <tr>
                <th>x</th>
                <th>log x</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>0.01</td>
                <td>-2</td>
              </tr>
              <tr>
                <td>0.1</td>
                <td>-1</td>
              </tr>
              <tr>
                <td>1</td>
                <td>0</td>
              </tr>
              <tr>
                <td>10</td>
                <td>1</td>
              </tr>
            </tbody>
          </table>

          <p>
            {`Each row follows the definition. Since $0.01 = 10^{-2}$, the exponent that produces $0.01$ is $-2$, so $\\log 0.01 = -2$. Since $10 = 10^1$, the exponent is $1$, so $\\log 10 = 1$. As $x$ climbs through the whole powers of ten, $\\log x$ climbs by exactly $1$ at each step. Between those whole-number points the curve rises slowly, flattening out as $x$ grows.`}
          </p>

          <div className="lrn-graph">
            <CommonLogTableViz />
          </div>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>
              {`Evaluate $\\log 1000$ and $\\log 0.1$ using the definition, then explain in words why one answer is positive and the other is negative.`}
            </p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                {`$\\log 1000 = 3$, since $10^3 = 1000$. $\\log 0.1 = -1$, since $10^{-1} = 0.1$.`}
              </p>
              <p>
                {`A number bigger than $1$ needs a positive power of $10$ to produce it, so its common logarithm is positive. A number between $0$ and $1$ needs a negative power of $10$, so its common logarithm is negative.`}
              </p>
            </details>
          </div>

          <h3>Common Logarithms and Sound</h3>

          <p>
            {`Sound intensity spans an enormous range of numbers, from a whisper to a jet engine. Scientists compress that range using a logarithmic scale called the decibel scale.`}
          </p>

          <p>
            {`When to use this: reach for the decibel formula whenever you need to compare how loud two sounds are, using their raw intensities.`}
          </p>

          <div className="lrn-eq lrn-eq-hero">
            <span>{`$$B = 10\\log\\!\\left(\\frac{I}{I_0}\\right)$$`}</span>
          </div>

          <p>
            {`Here $B$ is loudness in decibels, and $I$ is the sound's intensity. The reference $I_0$ is a fixed intensity, the quietest sound a human can hear. The common logarithm compresses sound's enormous intensity range into small, readable numbers.`}
          </p>

          <h3>Worked Example: Finding Loudness in Decibels</h3>

          <div className="lrn-proof">
            <span className="lrn-proof-header">Finding B when I = 100 I₀</span>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">1.</span>
              <div className="lrn-proof-step-content">
                {`Start from the decibel formula: $B = 10\\log\\!\\left(\\dfrac{I}{I_0}\\right)$.`}
              </div>
            </div>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">2.</span>
              <div className="lrn-proof-step-content">
                {`Substitute $I = 100 I_0$: $B = 10\\log\\!\\left(\\dfrac{100 I_0}{I_0}\\right)$.`}
              </div>
            </div>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">3.</span>
              <div className="lrn-proof-step-content">
                {`Cancel $I_0$ from the top and bottom of the fraction: $B = 10\\log 100$.`}
              </div>
            </div>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">4.</span>
              <div className="lrn-proof-step-content">
                {`Since $100 = 10^2$, $\\log 100 = 2$. So $B = 10 \\times 2 = 20$ decibels.`}
              </div>
            </div>
            <div className="lrn-qed">Q.E.D.</div>
          </div>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>
              {`Step 3 cancels $I_0$ from the fraction before taking the logarithm. This works only because you wrote $I$ as a multiple of $I_0$. Why does that matter, and what would go wrong without it?`}
            </p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                {`Writing $I = 100 I_0$ makes $I_0$ a shared factor on the top and bottom of $\\frac{I}{I_0}$. So it cancels directly, leaving a plain number, $100$, inside the logarithm. Without a multiple of $I_0$, the fraction $\\frac{I}{I_0}$ would keep two unknowns. Then $\\log$ would have no single number to evaluate.`}
              </p>
            </details>
          </div>
        </>,

        <>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              {`Calculators also have an LN key, separate from LOG. Predict: what base do you think LN silently assumes, and why might mathematicians want a second special base beyond $10$?`}
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                {`LN assumes base $e$, a constant close to $2.718$. Mathematicians favor $e$ because it makes calculus formulas simpler than any other base, including $10$.`}
              </p>
            </details>
          </div>

          <h2>Natural Logarithms</h2>

          <p>
            {`The natural logarithm is the logarithm with base $e$, an irrational constant close to $2.718$. Irrational means its decimals run forever without ever repeating. It is written $\\ln x$, using the abbreviation for the Latin phrase logarithmus naturalis.`}
          </p>

          <p>
            {`Turn to the natural logarithm in three cases. Use it in calculus, or when you model continuous growth or decay. Use it whenever the constant $e$ already sits in a formula.`}
          </p>

          <div className="lrn-eq lrn-eq-hero">
            <span>{`$$\\ln x = \\log_e x$$`}</span>
          </div>

          <p>
            {`The natural logarithm is the inverse of the natural exponential function: $\\ln x = y$ means the same thing as $e^y = x$. Mathematicians call $e$ "the most convenient base for calculus." Formulas built from $e$ come out simpler than the same formulas built from any other base.`}
          </p>

          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Common logarithm</span>
              <p>{`Base $10$. Written $\\log x$. Matches the calculator's LOG key. Natural fit for powers of ten and decibel-style scales.`}</p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Natural logarithm</span>
              <p>{`Base $e$. Written $\\ln x$. Matches the calculator's LN key. Natural fit for calculus and continuous growth or decay.`}</p>
            </div>
          </div>

          <div className="lrn-graph">
            <LogBaseComparisonViz />
          </div>

          <p>
            {`Since the natural logarithm is just base $e$, the same four properties apply, with $e$ in place of the general base $a$.`}
          </p>

          <div className="lrn-callout">
            <span className="lrn-callout-label">Properties of Natural Logarithms</span>
            <ul className="lrn-list">
              <li>{`$\\ln 1 = 0$`}</li>
              <li>{`$\\ln e = 1$`}</li>
              <li>{`$\\ln(e^x) = x$`}</li>
              <li>{`$e^{\\ln x} = x$`}</li>
            </ul>
          </div>

          <h3>Evaluating the Natural Logarithm Function</h3>

          <div className="lrn-steps">
            <div className="lrn-step">
              <span className="lrn-step-title">{`Part (a): $\\ln e^8$`}</span>
              <p className="lrn-step-content">
                {`By the property $\\ln(e^x) = x$, the exponent comes straight back out: $\\ln e^8 = 8$.`}
              </p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">{`Part (b): $\\ln\\!\\left(\\dfrac{1}{e^2}\\right)$`}</span>
              <p className="lrn-step-content">
                {`Rewrite the fraction as a negative exponent: $\\dfrac{1}{e^2} = e^{-2}$. Then $\\ln(e^{-2}) = -2$.`}
              </p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">{`Part (c): $\\ln 5$`}</span>
              <p className="lrn-step-content">
                {`Here $5$ is not a clean power of $e$, so the property does not simplify it to a whole number. A calculator gives $\\ln 5 \\approx 1.609$.`}
              </p>
            </div>
          </div>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>
              {`Parts (a) and (b) simplify to whole numbers, but part (c) needs a calculator. What is different about $5$ compared to $e^8$ and $e^{-2}$?`}
            </p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                {`The property $\\ln(e^x) = x$ only simplifies instantly when the argument is already written as $e$ raised to a power. $e^8$ and $e^{-2}$ are both written that way, so the exponent comes straight out.`}
              </p>
              <p>
                {`The number $5$ is not a visible power of $e$. Some exponent does turn $e$ into $5$, but it is not a whole number, so you need a calculator or a table to approximate it.`}
              </p>
            </details>
          </div>
        </>,

        <>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              {`John Napier invented logarithms in 1614, over a century before calculators existed. Predict: what problem was he actually trying to solve?`}
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                {`He wanted to make multiplying huge numbers easier. Logarithms turn multiplication into addition, which was much faster to do by hand.`}
              </p>
            </details>
          </div>

          <h2>Where Logarithms Came From</h2>

          <p>
            {`John Napier (1550 to 1617) was a Scottish landowner who invented logarithms. He published his idea in 1614, in a book called A Description of the Marvelous Rule of Logarithms.`}
          </p>

          <p>
            {`Napier's original goal explains why logarithms turn products into sums, a pattern you now use constantly.`}
          </p>

          <p>
            {`Napier's original purpose had nothing to do with calculus or graphs. Before calculators, multiplying two large numbers by hand was slow and error-prone. Napier noticed that logarithms turn multiplication into addition, since adding two exponents is the same as multiplying their powers.`}
          </p>

          <h3>Worked Example: Napier's Multiplication Trick</h3>

          <div className="lrn-steps">
            <div className="lrn-step">
              <span className="lrn-step-title">{`Task: multiply $4532 \\times 57783$ using logarithms`}</span>
              <p className="lrn-step-content">
                {`Take the common logarithm of each number and add: $\\log 4532 + \\log 57783 \\approx 3.6563 + 4.7618 = 8.4181$. This sum is the common logarithm of the product.`}
              </p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">Reversing the logarithm to find the answer</span>
              <p className="lrn-step-content">
                {`The product equals $10$ raised to that sum: $10^{8.4181} \\approx 261{,}872{,}564$. Napier's tables let a person read this answer off, without ever multiplying the original two numbers directly.`}
              </p>
            </div>
          </div>

          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>
              {`This trick works for the same reason the Product Law works: $\\log(AB) = \\log A + \\log B$. Napier built tables of logarithms by hand. People could look up $\\log A$ and $\\log B$, add them, then find which number produces that sum. Addition is far easier by hand than multiplying two large numbers directly.`}
            </p>
          </div>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>
              {`Modern calculators make Napier's multiplication trick pointless for everyday arithmetic. Why do common and natural logarithms still matter today?`}
            </p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                {`Logarithms outlived their original use because they describe real patterns, not just a calculation shortcut. Sound intensity, chemical concentration, and population growth all follow logarithmic patterns naturally. The decibel formula, carbon dating, and investment growth all use common or natural logarithms directly. That stays true whether or not a calculator does the arithmetic.`}
              </p>
            </details>
          </div>
        </>,

        <>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              {`Archaeologists use logarithms to date ancient bones and wood. Predict: what quantity do you think they measure, and why would a logarithm be the right tool?`}
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                {`They measure the remaining amount of a radioactive form of carbon, called carbon-14. Radioactive decay is a natural-logarithm pattern, so a natural logarithm formula converts the remaining amount into an age.`}
              </p>
            </details>
          </div>

          <h2>Applications of Common and Natural Logarithms</h2>

          <p>
            {`Common and natural logarithms show up in formulas across science and finance. Each formula below uses exactly one of the two logarithms from this lesson.`}
          </p>

          <p>
            {`Reach for these formulas when a real-world quantity decays, grows, or spans a huge range of sizes. Match the pattern each formula describes.`}
          </p>

          <h3>Absorption of Light</h3>

          <p>
            {`Light passing through water loses intensity the deeper it travels. The concentration formula relates a substance's concentration, $C$, to how much light intensity drops.`}
          </p>

          <div className="lrn-eq">
            <span>{`$$C = 2500\\ln\\!\\left(\\frac{I_0}{I}\\right)$$`}</span>
          </div>

          <p>
            {`Here $I_0$ is the intensity before the light enters the water. $I$ is the intensity after it passes through. When the water absorbs more light, $I$ drops, so the ratio $\\frac{I_0}{I}$ grows. A larger ratio makes the natural logarithm bigger, so the concentration $C$ rises.`}
          </p>

          <h3>Carbon Dating</h3>

          <p>
            {`Living things absorb a radioactive form of carbon, called carbon-14, throughout their lives. Once they die, the carbon-14 decays at a known rate. The carbon dating formula uses that decay to estimate age.`}
          </p>

          <div className="lrn-eq">
            <span>{`$$A = -8267\\ln\\!\\left(\\frac{D}{D_0}\\right)$$`}</span>
          </div>

          <p>
            {`Here $A$ is the age in years. $D_0$ is the carbon-14 a living thing starts with. $D$ is the carbon-14 you measure today. As $D$ shrinks compared to $D_0$, the ratio $\\frac{D}{D_0}$ falls below $1$, so its natural logarithm turns negative. The $-8267$ flips that negative into a larger positive age, so a smaller ratio means an older sample.`}
          </p>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>
              {`If $D$ equals $D_0$ exactly, meaning no carbon-14 has decayed yet, what age does the formula predict, and does that make sense?`}
            </p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                {`If $D = D_0$, the ratio $\\frac{D}{D_0}$ equals $1$. Since $\\ln 1 = 0$, the formula gives $A = -8267 \\times 0 = 0$ years. This matches reality: if none of the carbon-14 has decayed, the sample died right now, so its age is zero.`}
              </p>
            </details>
          </div>

          <h3>Bacteria Colony Growth Time</h3>

          <p>
            {`A bacteria colony doubles in size at a steady rate. The growth-time formula finds how long a colony takes to reach a target size $N$, starting from $50$ bacteria.`}
          </p>

          <div className="lrn-eq">
            <span>{`$$t = \\frac{3\\log\\!\\left(\\frac{N}{50}\\right)}{\\log 2}$$`}</span>
          </div>

          <p>
            {`Here $t$ is the growth time, and $N$ is the target population size. This formula uses the common logarithm. It compares $N$ to $50$ as a straight ratio of population sizes.`}
          </p>

          <h3>Investment Doubling Time</h3>

          <p>
            {`Money invested at a fixed interest rate grows continuously. The doubling-time formula finds how long an investment takes to double, given its interest rate $r$.`}
          </p>

          <div className="lrn-eq lrn-eq-hero">
            <span>{`$$t = \\frac{\\ln 2}{r}$$`}</span>
          </div>

          <p>
            {`Here $t$ is the number of years until the investment doubles. You write the annual rate $r$ as a decimal. This formula uses the natural logarithm because the growth never pauses. You met $e$ as the constant a compound-interest total settles on when compounding never stops.`}
          </p>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>
              {`A higher interest rate $r$ should make an investment double faster. Does the formula $t = \\dfrac{\\ln 2}{r}$ agree with that, and why?`}
            </p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                {`Yes. In $t = \\dfrac{\\ln 2}{r}$, the numerator $\\ln 2$ is a fixed positive number. Dividing that fixed number by a larger $r$ produces a smaller $t$. A higher interest rate shrinks the doubling time, matching the everyday expectation that faster growth means less waiting.`}
              </p>
            </details>
          </div>

          <h3>Battery Charging Time</h3>

          <p>
            {`A battery charges quickly at first, then slows as it nears full capacity. The charging-time formula relates charging time to how close the battery is to its maximum charge $C_0$.`}
          </p>

          <div className="lrn-eq">
            <span>{`$$t = -k\\ln\\!\\left(1 - \\frac{C}{C_0}\\right)$$`}</span>
          </div>

          <p>
            {`Here $t$ is charging time. $C$ is the current charge, and $C_0$ is the maximum possible charge. The value $k$ is a positive constant describing the battery. Since $C$ is less than $C_0$, the term $1 - \\frac{C}{C_0}$ stays between $0$ and $1$, so its logarithm is negative. The leading $-k$ flips that into a positive time. This formula uses the natural logarithm because charging is a continuous process, like continuous investment growth.`}
          </p>

          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>
              {`Every formula on this page picks its logarithm base to match its pattern. Decibels, absorption, and bacteria growth compare a ratio of sizes directly. That ratio role matches the common logarithm, base $10$. Carbon dating, investment growth, and battery charging all describe continuous change over time. That continuous change matches the natural logarithm, base $e$.`}
            </p>
            <p>
              {`The base is never arbitrary. It is chosen to match how the real quantity actually behaves.`}
            </p>
          </div>
        </>
      ]
    },

    practice: [
      {
        q: `Predict, before checking: does the calculator key labeled LOG use base 10 or base e? Explain how you know.`,
        a: `It uses base 10. By convention, writing $\\log x$ with no subscript always means $\\log_{10} x$, the common logarithm. Calculators follow this same convention on their LOG key.`
      },
      {
        q: `Evaluate $\\log 1000$ using the definition of the common logarithm. Show your reasoning.`,
        a: `$\\log 1000$ asks what power of $10$ produces $1000$. Since $10^3 = 1000$, the answer is $3$. This matches the definition $\\log x = \\log_{10} x$.`
      },
      {
        q: `Evaluate $\\log 0.01$. Show your reasoning and explain why the answer is negative.`,
        a: `$\\log 0.01$ asks what power of $10$ produces $0.01$. Since $10^{-2} = 0.01$, the answer is $-2$. It is negative because $0.01$ is between $0$ and $1$, and only a negative exponent on $10$ produces a number smaller than $1$.`
      },
      {
        q: `A sound has intensity $I = 100 I_0$, where $I_0$ is the reference intensity. Find its loudness in decibels using $B = 10\\log\\!\\left(\\frac{I}{I_0}\\right)$. Show every step.`,
        a: `Substitute $I = 100I_0$: $B = 10\\log\\!\\left(\\frac{100I_0}{I_0}\\right)$. Cancel $I_0$: $B = 10\\log 100$. Since $100 = 10^2$, $\\log 100 = 2$. So $B = 10 \\times 2 = 20$ decibels.`
      },
      {
        q: `Elaborate: why does the decibel formula use a logarithm instead of just the ratio $\\frac{I}{I_0}$ directly?`,
        a: `Sound intensities span an enormous range, from barely audible to painfully loud, differing by factors of trillions. A logarithm compresses that huge range of ratios into small, manageable decibel numbers. This matches Fechner's Law: humans perceive loudness on a compressed, logarithmic scale, not on the raw intensity scale.`
      },
      {
        q: `Predict, before checking: what base does the calculator key labeled LN use, and what is that base approximately equal to?`,
        a: `LN uses base $e$, an irrational constant approximately equal to $2.718$. This is the natural logarithm, written $\\ln x$.`
      },
      {
        q: `Evaluate $\\ln e^8$. Show your reasoning.`,
        a: `By the property $\\ln(e^x) = x$, the exponent comes straight back out. Since $e^8$ is already $e$ raised to the power $8$, $\\ln e^8 = 8$.`
      },
      {
        q: `Evaluate $\\ln\\!\\left(\\frac{1}{e^2}\\right)$. Show your reasoning.`,
        a: `Rewrite the fraction as a negative exponent: $\\frac{1}{e^2} = e^{-2}$. By the property $\\ln(e^x) = x$, $\\ln(e^{-2}) = -2$.`
      },
      {
        q: `Method selection: to evaluate $\\ln 5$, can you use the property $\\ln(e^x) = x$ directly? Explain why or why not, and state how you would actually find the value.`,
        a: `No, not directly. The property only simplifies instantly when the argument is already written as $e$ raised to a power. The number $5$ is not a visible power of $e$, so you cannot read off a whole-number exponent. Instead, use a calculator, which gives $\\ln 5 \\approx 1.609$.`
      },
      {
        q: `Elaborate: why must a logarithm's argument always be strictly positive, using the definition of a logarithm as an exponent?`,
        a: `A logarithm answers the question, what exponent produces this argument? A positive base raised to any real exponent always stays positive; it can never reach zero or go negative. So there is no exponent that could produce a zero or negative argument. That is why the logarithm has no answer there.`
      },
      {
        q: `Transfer: without graphing, state the domain of $g(x) = \\ln(9-x^2)$.`,
        a: `Require the argument positive: $9-x^2 > 0$, so $x^2 < 9$, so $|x| < 3$. The domain is $(-3, 3)$.`
      },
      {
        q: `Transfer: without graphing, state the domain of $h(x) = \\ln(x-5)$.`,
        a: `Require the argument positive: $x - 5 > 0$, so $x > 5$. The domain is $(5, \\infty)$.`
      },
      {
        q: `John Napier invented logarithms in 1614. What problem was he originally trying to solve?`,
        a: `He wanted an easier way to multiply large numbers by hand. Logarithms convert multiplication into addition, which is much faster and less error-prone than multiplying large numbers directly.`
      },
      {
        q: `Using Napier's method, find $\\log 4532 + \\log 57783$ given $\\log 4532 \\approx 3.6563$ and $\\log 57783 \\approx 4.7618$. Then explain what that sum represents.`,
        a: `$\\log 4532 + \\log 57783 \\approx 3.6563 + 4.7618 = 8.4181$. This sum is the common logarithm of the product $4532 \\times 57783$, since the Product Law turns a sum of logs into the log of a product.`
      },
      {
        q: `Given $\\log(4532 \\times 57783) \\approx 8.4181$, find the product itself using powers of 10.`,
        a: `Reverse the logarithm by raising $10$ to that power: $10^{8.4181} \\approx 261{,}872{,}564$. This recovers the original product without multiplying the two numbers directly.`
      },
      {
        q: `Elaborate: modern calculators make Napier's multiplication trick unnecessary. Why do common and natural logarithms still matter today?`,
        a: `Logarithms describe real patterns in nature and finance, not just a calculation shortcut. Sound intensity, radioactive decay, and continuous investment growth all follow logarithmic patterns on their own. The decibel formula, carbon dating, and investment doubling all rely on a logarithm directly, regardless of how the arithmetic gets done.`
      },
      {
        q: `Predict, before checking: archaeologists use a logarithm formula to date old bones. Do you think it uses the common logarithm or the natural logarithm? Explain your guess.`,
        a: `It uses the natural logarithm. Radioactive decay is a continuous process, and the natural logarithm, built from $e$, is the standard tool for continuous growth and decay patterns.`
      },
      {
        q: `A bone sample has carbon-14 ratio $\\frac{D}{D_0} = 1$, meaning no decay has happened yet. Using $A = -8267\\ln\\!\\left(\\frac{D}{D_0}\\right)$, find its age, and explain why the result makes sense.`,
        a: `Since $\\frac{D}{D_0}=1$ and $\\ln 1 = 0$, the age is $A = -8267 \\times 0 = 0$ years. This makes sense: if no carbon-14 has decayed, the sample died right now, so its age should be zero.`
      },
      {
        q: `Conceptual: as a bone sample gets older, does $\\frac{D}{D_0}$ grow larger or smaller, and how does that change the age $A$ computed by the carbon dating formula?`,
        a: `$\\frac{D}{D_0}$ grows smaller, since carbon-14 keeps decaying over time and $D_0$ stays fixed. As that ratio shrinks toward zero, its natural logarithm becomes more negative. Multiplying that negative logarithm by $-8267$ turns it into a larger positive age $A$, matching an older sample.`
      },
      {
        q: `An investment grows at interest rate $r = 0.06$. Using $t = \\dfrac{\\ln 2}{r}$, find the doubling time, and explain why the natural logarithm fits this formula.`,
        a: `$t = \\dfrac{\\ln 2}{0.06} \\approx \\dfrac{0.693}{0.06} \\approx 11.55$ years. The natural logarithm fits because continuous compound growth follows the constant $e$, the base you met when compounding never stops.`
      },
      {
        q: `Transfer: if the interest rate in $t = \\dfrac{\\ln 2}{r}$ doubles from $0.04$ to $0.08$, does the doubling time also simply halve? Explain using the formula.`,
        a: `Yes. In $t=\\dfrac{\\ln 2}{r}$, doubling $r$ divides $t$ by exactly $2$, since $\\ln 2$ stays fixed while the denominator doubles. At $r=0.04$, $t \\approx 17.3$ years; at $r=0.08$, $t \\approx 8.7$ years, almost exactly half.`
      },
      {
        q: `Method selection: a battery's charging-time formula is $t = -k\\ln\\!\\left(1-\\frac{C}{C_0}\\right)$. Why does this formula use the natural logarithm rather than the common logarithm?`,
        a: `Charging is a continuous process, where the battery approaches full charge gradually rather than in discrete steps. The natural logarithm, built from $e$, is the standard tool for describing continuous change, the same reason it appears in investment growth and radioactive decay.`
      },
      {
        q: `Transfer: a bacteria colony's growth-time formula is $t = \\dfrac{3\\log\\!\\left(\\frac{N}{50}\\right)}{\\log 2}$. Find $t$ when the target population $N = 400$.`,
        a: `Substitute $N=400$: $t = \\dfrac{3\\log\\!\\left(\\frac{400}{50}\\right)}{\\log 2} = \\dfrac{3\\log 8}{\\log 2}$. Neither $\\log 8$ nor $\\log 2$ is a whole number, so a calculator gives $\\log 8 \\approx 0.903$ and $\\log 2 \\approx 0.301$. So $t \\approx \\dfrac{3(0.903)}{0.301} \\approx 9$ hours.`
      },
      {
        q: `Elaborate: why does the bacteria growth-time formula use the common logarithm while the carbon dating formula uses the natural logarithm, even though both describe change over time?`,
        a: `The bacteria formula compares a target size $N$ to a fixed starting size, $50$, as a straightforward ratio, matching the common logarithm's role in ratio-based scales like decibels. The carbon dating formula instead models continuous exponential decay of carbon-14, matching the natural logarithm's role in continuous growth and decay processes.`
      },
      {
        q: `Self-explain: the light absorption formula is $C = 2500\\ln\\!\\left(\\frac{I_0}{I}\\right)$. If $I$ equals $I_0$ exactly, meaning no light was absorbed, what concentration does the formula predict?`,
        a: `If $I = I_0$, the ratio $\\frac{I_0}{I} = 1$, and $\\ln 1 = 0$. So $C = 2500 \\times 0 = 0$. A concentration of zero matches the idea that no light was absorbed, so no absorbing substance was detected.`
      },
      {
        q: `Error detection: a student says $\\ln 5$ and $\\log 5$ must be the same number, since both are "the logarithm of 5." Explain the error.`,
        a: `The two expressions use different bases. $\\log 5$ means $\\log_{10} 5 \\approx 0.699$, while $\\ln 5$ means $\\log_e 5 \\approx 1.609$. Both ask what exponent produces $5$, but on different bases, so they give different exponents and different numeric answers.`
      },
      {
        q: `Applied: using $A = -8267\\ln\\!\\left(\\frac{D}{D_0}\\right)$, why must $A$ always come out positive for any real bone sample, given that decay only removes carbon-14 over time?`,
        a: `Since carbon-14 only decays, never increases, $D$ is always less than or equal to $D_0$, so $\\frac{D}{D_0}$ is always between $0$ and $1$. The natural logarithm of a number between $0$ and $1$ is always negative. Multiplying that negative logarithm by $-8267$ produces a positive age.`
      },
      {
        q: `Conceptual: explain in one sentence why the common logarithm and natural logarithm are not two different kinds of mathematics, but the same idea applied to two bases.`,
        a: `Both are the exact same logarithmic definition, "what exponent produces this argument," applied to two specific bases, $10$ for the common logarithm and $e$ for the natural logarithm.`
      },
      {
        q: `Transfer: evaluate $10^{\\log 7}$ using the inverse property, without a calculator.`,
        a: `By the property $a^{\\log_a x} = x$ with $a=10$, $10^{\\log 7} = 7$ directly. Raising $10$ to the common logarithm of $7$ undoes the logarithm and returns $7$.`
      },
      {
        q: `Transfer: evaluate $e^{\\ln 12}$ using the inverse property, without a calculator.`,
        a: `By the property $e^{\\ln x} = x$, $e^{\\ln 12} = 12$ directly. Raising $e$ to the natural logarithm of $12$ undoes the logarithm and returns $12$.`
      }
    ],

    reference: {
      category: 'Quick Reference',
      title: 'Common and Natural Logarithms',
      sections: [
        <>
          <h2>Common Logarithm</h2>

          <div className="ref-formula">
            <span className="ref-formula-name">Definition</span>
            <div className="ref-formula-eq">{`$$\\log x = \\log_{10} x$$`}</div>
            <p className="ref-formula-desc">
              When to use: any time a base-10 logarithm is written with no subscript, or you use a
              calculator's LOG key.
            </p>
          </div>

          <h2>Natural Logarithm</h2>

          <div className="ref-formula">
            <span className="ref-formula-name">Definition</span>
            <div className="ref-formula-eq">{`$$\\ln x = \\log_e x$$`}</div>
            <p className="ref-formula-desc">
              When to use: any time you work in calculus, model continuous growth or decay, or use a
              calculator's LN key.
            </p>
          </div>

          <h2>Properties of Common Logarithms</h2>

          <table>
            <thead>
              <tr>
                <th>Property</th>
                <th>When to use</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{`$\\log 1 = 0$`}</td>
                <td>Simplifying the log of 1</td>
              </tr>
              <tr>
                <td>{`$\\log 10 = 1$`}</td>
                <td>Simplifying the log of the base</td>
              </tr>
              <tr>
                <td>{`$\\log(10^x) = x$`}</td>
                <td>Argument is already a power of 10</td>
              </tr>
              <tr>
                <td>{`$10^{\\log x} = x$`}</td>
                <td>Undoing a common logarithm</td>
              </tr>
            </tbody>
          </table>

          <h2>Properties of Natural Logarithms</h2>

          <table>
            <thead>
              <tr>
                <th>Property</th>
                <th>When to use</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{`$\\ln 1 = 0$`}</td>
                <td>Simplifying the log of 1</td>
              </tr>
              <tr>
                <td>{`$\\ln e = 1$`}</td>
                <td>Simplifying the log of the base</td>
              </tr>
              <tr>
                <td>{`$\\ln(e^x) = x$`}</td>
                <td>Argument is already a power of e</td>
              </tr>
              <tr>
                <td>{`$e^{\\ln x} = x$`}</td>
                <td>Undoing a natural logarithm</td>
              </tr>
            </tbody>
          </table>

          <h2>Common vs. Natural: Which Base to Use</h2>

          <ul className="lrn-list">
            <li>
              Common logarithm (base 10): ratio-based scales, powers of ten, calculator LOG key.
            </li>
            <li>
              Natural logarithm (base e): calculus, continuous growth or decay, calculator LN key.
            </li>
          </ul>

          <h2>Applications</h2>

          <div className="ref-formula">
            <span className="ref-formula-name">Decibel (loudness) formula</span>
            <div className="ref-formula-eq">{`$$B = 10\\log\\!\\left(\\frac{I}{I_0}\\right)$$`}</div>
            <p className="ref-formula-desc">
              When to use: comparing how loud two sounds are, given their raw intensities.
            </p>
          </div>

          <div className="ref-formula">
            <span className="ref-formula-name">Fechner's Law</span>
            <div className="ref-formula-eq">{`$$S = k\\log_a\\!\\left(\\frac{I}{I_0}\\right)$$`}</div>
            <p className="ref-formula-desc">
              When to use: relating a physical intensity {`$I$`} to the strength {`$S$`} a person
              senses.
            </p>
          </div>

          <div className="ref-formula">
            <span className="ref-formula-name">Absorption of light</span>
            <div className="ref-formula-eq">{`$$C = 2500\\ln\\!\\left(\\frac{I_0}{I}\\right)$$`}</div>
            <p className="ref-formula-desc">
              When to use: finding a substance's concentration from how much light intensity it
              absorbs.
            </p>
          </div>

          <div className="ref-formula">
            <span className="ref-formula-name">Carbon dating</span>
            <div className="ref-formula-eq">{`$$A = -8267\\ln\\!\\left(\\frac{D}{D_0}\\right)$$`}</div>
            <p className="ref-formula-desc">
              When to use: estimating a sample's age from its remaining carbon-14.
            </p>
          </div>

          <div className="ref-formula">
            <span className="ref-formula-name">Bacteria colony growth time</span>
            <div className="ref-formula-eq">{`$$t = \\frac{3\\log\\!\\left(\\frac{N}{50}\\right)}{\\log 2}$$`}</div>
            <p className="ref-formula-desc">
              When to use: finding how long a colony takes to reach a target size {`$N$`}.
            </p>
          </div>

          <div className="ref-formula">
            <span className="ref-formula-name">Investment doubling time</span>
            <div className="ref-formula-eq">{`$$t = \\frac{\\ln 2}{r}$$`}</div>
            <p className="ref-formula-desc">
              When to use: finding how long an investment takes to double at interest rate {`$r$`}.
            </p>
          </div>

          <div className="ref-formula">
            <span className="ref-formula-name">Battery charging time</span>
            <div className="ref-formula-eq">{`$$t = -k\\ln\\!\\left(1 - \\frac{C}{C_0}\\right)$$`}</div>
            <p className="ref-formula-desc">
              When to use: finding charging time as a battery approaches its maximum charge{' '}
              {`$C_0$`}.
            </p>
          </div>
        </>
      ]
    },

    customCss: null
  }
  return config
}

export default function CommonAndNaturalLogarithms() {
  const config = useConfig()
  return <LearningTemplate config={config} />
}
