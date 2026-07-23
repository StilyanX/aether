import { LearningTemplate } from '../../../../components/learning/learning-template'
import {
  LogExpInverseViz,
  Log2GraphViz,
  LogBaseSteepnessViz,
  LogReflectionsViz,
  LogHorizontalShiftViz,
  LogBoundedDomainViz
} from '../../../../components/viz'

function useConfig() {
  const config = {
    cssPrefix: 'lgf',
    documentTitle: 'Logarithmic Functions - AETHER',
    learning: {
      groupTitle: 'Logarithms and Exponential Models',
      category: 'Algebra',
      title: 'Logarithmic Functions',
      subtitle:
        'The logarithmic function is the inverse of the exponential function. Its graph, its domain and range, and its vertical asymptote all fall out of that one fact.',
      sections: [
        <>
          <h2>The Logarithmic Function as the Inverse of the Exponential</h2>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              {`The function $f(x) = 2^x$ has domain "all real numbers" and range "positive numbers only." Before reading on, predict: what domain and range should its inverse function have?`}
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                {`An inverse function swaps domain and range. So the inverse of $2^x$ has domain "positive numbers only" and range "all real numbers." That inverse is exactly the logarithmic function you are about to meet.`}
              </p>
            </details>
          </div>

          <p>
            {`You already know a logarithm is an exponent, from the base identity $\\log_a(a^x) = x$. This page builds on that idea. It defines the logarithmic function itself, then studies its graph.`}
          </p>

          <p>
            {`The function $a^x$, where $a>0$ and $a \\neq 1$, passes the horizontal line test. No horizontal line crosses its graph twice. A function that passes this test always has an inverse function.`}
          </p>

          <p>
            When to use this: reach for the definition below whenever you convert between
            exponential form and logarithmic form. Also reach for it whenever you need to explain
            why a logarithm behaves the way it does.
          </p>

          <div className="lrn-definition">
            <span className="lrn-definition-term">The Logarithmic Function</span>
            <div className="lrn-definition-desc">
              <p>
                {`For $a>0$ and $a \\neq 1$, the logarithmic function base $a$ is the inverse of $a^x$. The definition is $\\log_a x = y \\iff a^y = x$.`}
              </p>
              <p>
                {`$\\log_a x$ answers one question: what exponent must you raise $a$ to, in order to get $x$?`}
              </p>
            </div>
          </div>

          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>
              {`The exponential function $a^x$ is one-to-one (each output comes from only one input), so it has an inverse. Swapping $x$ and $y$ in $y=a^x$ gives $x=a^y$, which says the same thing as $\\log_a x = y$. The logarithmic function is nothing more than the exponential function, viewed backward.`}
            </p>
          </div>

          <div className="lrn-graph">
            <LogExpInverseViz />
          </div>

          <h3>Worked Example: Converting Between Forms</h3>

          <p>
            Every logarithmic equation has a matching exponential equation, and both share the same
            base. Four illustrations show the pattern.
          </p>

          <div className="lrn-steps">
            <div className="lrn-step">
              <span className="lrn-step-title">{`Part (a): $\\log_{10} 100{,}000 = 5$`}</span>
              <p className="lrn-step-content">
                {`This means $10^5 = 100{,}000$. The base stays $10$ in both forms.`}
              </p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">{`Part (b): $\\log_2 8 = 3$`}</span>
              <p className="lrn-step-content">{`This means $2^3 = 8$. The base stays $2$ in both forms.`}</p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">{`Part (c): $\\log_2\\!\\left(\\frac{1}{8}\\right) = -3$`}</span>
              <p className="lrn-step-content">
                {`This means $2^{-3} = \\frac{1}{8}$. A negative exponent still works exactly like any other exponent.`}
              </p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">{`Part (d): $\\log_5 s = r$`}</span>
              <p className="lrn-step-content">
                {`This means $5^r = s$. Letters work exactly like numbers, since the definition never depended on which values $r$ and $s$ stand for.`}
              </p>
            </div>
          </div>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>
              {`Part (d) uses letters instead of numbers. Why does swapping between the two forms still keep the same base $5$ on both sides? The rule holds no matter what $r$ and $s$ stand for.`}
            </p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                {`The definition $\\log_a x = y \\iff a^y = x$ fixes $a$ as the base in both forms. It never changes when you swap forms. Replacing the number $x$ with a letter like $s$ does not touch the base. Neither does replacing $y$ with a letter like $r$.`}
              </p>
            </details>
          </div>

          <h3>Worked Example: Evaluating Logarithms</h3>

          <p>
            Evaluating a logarithm means finding the exponent it stands for. Ask what power gives
            this number, for each case below.
          </p>

          <div className="lrn-steps">
            <div className="lrn-step">
              <span className="lrn-step-title">{`Part (a): $\\log_{10} 1000$`}</span>
              <p className="lrn-step-content">{`Equals $3$, since $10^3 = 1000$.`}</p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">{`Part (b): $\\log_2 32$`}</span>
              <p className="lrn-step-content">{`Equals $5$, since $2^5 = 32$.`}</p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">{`Part (c): $\\log_{10} 0.1$`}</span>
              <p className="lrn-step-content">{`Equals $-1$, since $10^{-1} = 0.1$.`}</p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">{`Part (d): $\\log_{16} 4$`}</span>
              <p className="lrn-step-content">{`Equals $\\frac{1}{2}$, since $16^{1/2} = 4$.`}</p>
            </div>
          </div>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>
              {`Part (d) gives a fraction, $\\frac{1}{2}$, instead of a whole number. Why does that still count as a valid logarithm value?`}
            </p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                {`A logarithm can be any exponent, whole number or not. Since $16^{1/2} = \\sqrt{16} = 4$, the exponent that turns $16$ into $4$ really is $\\frac{1}{2}$. The definition never restricts the exponent to whole numbers.`}
              </p>
            </details>
          </div>

          <div className="lrn-insight">
            <strong>The four properties fall out of one idea.</strong>
            <p>
              {`Because $\\log_a x$ undoes $a^x$, and $a^x$ undoes $\\log_a x$, four useful facts follow at once, one for each simple input.`}
            </p>
            <ul className="lrn-list">
              <li>{`$\\log_a 1 = 0$, since you must raise $a$ to the power $0$ to get $1$.`}</li>
              <li>{`$\\log_a a = 1$, since you must raise $a$ to the power $1$ to get $a$.`}</li>
              <li>{`$\\log_a(a^x) = x$, since you must raise $a$ to the power $x$ to get $a^x$.`}</li>
              <li>{`$a^{\\log_a x} = x$, since $\\log_a x$ is already the power that produces $x$.`}</li>
            </ul>
          </div>

          <h3>Worked Example: Applying the Properties of Logarithms</h3>

          <p>{`These four properties work in any base. Base $5$ shows all four at once.`}</p>

          <div className="lrn-steps">
            <div className="lrn-step">
              <span className="lrn-step-title">{`$\\log_5 1$`}</span>
              <p className="lrn-step-content">{`Equals $0$, by the first property.`}</p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">{`$\\log_5 5$`}</span>
              <p className="lrn-step-content">{`Equals $1$, by the second property.`}</p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">{`$\\log_5 5^8$`}</span>
              <p className="lrn-step-content">{`Equals $8$, by the third property.`}</p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">{`$5^{\\log_5 12}$`}</span>
              <p className="lrn-step-content">{`Equals $12$, by the fourth property.`}</p>
            </div>
          </div>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>
              {`The last part evaluates $5^{\\log_5 12}$ as $12$ without ever computing $\\log_5 12$ as a decimal. Why is that shortcut valid?`}
            </p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                {`By definition, $\\log_5 12$ is exactly the exponent that turns $5$ into $12$. Raising $5$ to that exact exponent must give $12$ back, no matter what decimal value the exponent actually has.`}
              </p>
            </details>
          </div>
        </>,

        <>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              {`Predict: as $x$ shrinks toward $0$ from the positive side, how does $\\log_2 x$ behave? Does it level off at a fixed number, or fall without bound?`}
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                {`It falls without bound. Reaching a tinier and tinier $x$ needs a more and more negative exponent on $2$. That exponent has no lowest point.`}
              </p>
            </details>
          </div>

          <h2>Graphs of Logarithmic Functions</h2>

          <p>
            {`The exponential function $a^x$ has domain "all real numbers" and range "positive numbers only." Its inverse, $\\log_a x$, swaps those: domain "positive numbers only," range "all real numbers." Every logarithmic graph shares this domain and range, no matter the base.`}
          </p>

          <p>
            {`Since $\\log_a 1 = 0$ for every base $a$, the graph of $y = \\log_a x$ always crosses the x-axis at $1$. And $\\log_a x$ falls toward negative infinity as $x$ approaches $0$ from the positive side. So the y-axis is always a vertical asymptote, a line the graph gets ever closer to but never touches.`}
          </p>

          <p>
            When to use this: reach for these facts whenever you need the domain, range,
            x-intercept, or asymptote of a logarithmic graph. Use them before you plot a single
            point.
          </p>

          <h3>Worked Example: Plotting a Logarithmic Graph</h3>

          <p>
            {`To sketch $f(x) = \\log_2 x$, choose $x$-values that are powers of $2$. Each one hands you its exponent back immediately.`}
          </p>

          <table className="lrn-table">
            <thead>
              <tr>
                <th>x</th>
                <th>{`$\\frac{1}{8}$`}</th>
                <th>{`$\\frac{1}{4}$`}</th>
                <th>{`$\\frac{1}{2}$`}</th>
                <th>1</th>
                <th>2</th>
                <th>4</th>
                <th>8</th>
                <th>16</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{`$y=\\log_2 x$`}</td>
                <td>-3</td>
                <td>-2</td>
                <td>-1</td>
                <td>0</td>
                <td>1</td>
                <td>2</td>
                <td>3</td>
                <td>4</td>
              </tr>
            </tbody>
          </table>

          <p>
            Plotting these eight points and connecting them smoothly gives the graph. It rises very
            slowly for large x, and dives toward the y-axis for small x.
          </p>

          <div className="lrn-graph">
            <Log2GraphViz />
          </div>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>
              {`Why choose powers of $2$ for $x$, instead of ordinary numbers like $x=1,2,3,4$?`}
            </p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                {`A power of $2$ gives back its own exponent instantly, as a whole number. An ordinary number like $3$ gives an exponent, $\\log_2 3$, that is not a whole number and needs a calculator. Choosing powers of the base keeps every point exact.`}
              </p>
            </details>
          </div>

          <div className="lrn-insight">
            <strong>Comparing curves across bases.</strong>
            <p>
              Every logarithmic curve, whatever the base, passes through the point where x equals 1.
              Each one also shares the y-axis as its vertical asymptote. But a larger base climbs
              more slowly for x greater than 1, giving a flatter curve.
            </p>
          </div>

          <div className="lrn-graph">
            <LogBaseSteepnessViz />
          </div>

          <h3>Reflecting Graphs of Logarithmic Functions</h3>

          <p>
            Reflections follow the same rules as any function. Negating the output flips the graph
            over the x-axis. Negating the input flips it over the y-axis.
          </p>

          <div className="lrn-steps">
            <div className="lrn-step">
              <span className="lrn-step-title">{`Part (a): $g(x) = -\\log_2 x$`}</span>
              <p className="lrn-step-content">
                {`You get it by reflecting $f(x)=\\log_2 x$ in the x-axis. Domain stays $(0,\\infty)$, range stays all real numbers, and the vertical asymptote stays $x=0$. Only the output flips sign.`}
              </p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">{`Part (b): $h(x) = \\log_2(-x)$`}</span>
              <p className="lrn-step-content">
                {`You get it by reflecting $f(x)=\\log_2 x$ in the y-axis. Domain becomes $(-\\infty,0)$, since $-x$ must be positive. Range stays all real numbers, and the vertical asymptote stays $x=0$.`}
              </p>
            </div>
          </div>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>
              {`Part (b)'s domain becomes all negative numbers. Why does negating the input do that, instead of changing the range?`}
            </p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                {`$h(x)=\\log_2(-x)$ needs $-x$ to be positive, which forces $x$ itself to be negative. The range stays all real numbers, since nothing touches the outputs themselves. Only the allowed x-values change.`}
              </p>
            </details>
          </div>

          <div className="lrn-graph">
            <LogReflectionsViz />
          </div>

          <h3>Shifting Graphs of Logarithmic Functions</h3>

          <p>
            Shifting also follows the general transformation rules. Adding a constant outside the
            logarithm shifts the graph vertically. Subtracting inside the argument (the expression
            inside the logarithm) shifts it horizontally, and carries the vertical asymptote along
            with it.
          </p>

          <div className="lrn-steps">
            <div className="lrn-step">
              <span className="lrn-step-title">{`Part (a): $g(x) = 2+\\log_5 x$`}</span>
              <p className="lrn-step-content">
                {`You get it by shifting $f(x)=\\log_5 x$ upward $2$ units. Domain stays $(0,\\infty)$, range stays all real numbers, and the asymptote stays $x=0$.`}
              </p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">{`Part (b): $h(x) = \\log_{10}(x-3)$`}</span>
              <p className="lrn-step-content">
                {`You get it by shifting $f(x)=\\log_{10} x$ right $3$ units. Domain becomes $(3,\\infty)$, range stays all real numbers, and the asymptote shifts to $x=3$.`}
              </p>
            </div>
          </div>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>
              Why does the vertical shift leave domain and asymptote unchanged, while the horizontal
              shift moves both?
            </p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                Adding 2 outside the logarithm only moves every output up. It never touches the
                allowed x-values. Subtracting 3 inside the argument changes which x-values keep the
                argument positive. That change drags the domain and the asymptote along with it.
              </p>
            </details>
          </div>

          <div className="lrn-graph">
            <LogHorizontalShiftViz />
          </div>
        </>,

        <>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              {`Predict: for $f(x) = \\log_3(25-x^2)$ to give a real number, what must be true about $25-x^2$?`}
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                {`$25-x^2$ must be positive. A logarithm only accepts positive numbers as input, so whatever sits inside it must come out greater than $0$.`}
              </p>
            </details>
          </div>

          <h2>Finding the Domain of a Logarithmic Function</h2>

          <p>
            {`Two bases show up so often they carry their own shorthand. The common logarithm uses base $10$ and takes the symbol $\\log$. The natural logarithm uses base $e$ and takes the symbol $\\ln$. Both obey every property already covered, so the domain rule below works the same way for every base.`}
          </p>

          <p>
            A logarithm only accepts positive numbers. So finding the domain of any logarithmic
            function reduces to one question. For which x is the expression inside the logarithm
            greater than 0?
          </p>

          <p>
            When to use this: reach for this rule whenever a logarithmic function has a complicated
            expression inside. A plain x needs no work, but anything more does.
          </p>

          <h3>Worked Example: A Domain That Is One Interval</h3>

          <div className="lrn-proof">
            <span className="lrn-proof-header">{`Finding the domain of $f(x) = \\log_3(25-x^2)$`}</span>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">1.</span>
              <div className="lrn-proof-step-content">
                {`The expression inside the logarithm must be positive: $25-x^2 > 0$.`}
              </div>
            </div>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">2.</span>
              <div className="lrn-proof-step-content">{`Rearrange: $x^2 < 25$.`}</div>
            </div>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">3.</span>
              <div className="lrn-proof-step-content">{`This means $|x| < 5$.`}</div>
            </div>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">4.</span>
              <div className="lrn-proof-step-content">{`So the domain is $(-5, 5)$.`}</div>
            </div>
            <div className="lrn-qed">Q.E.D.</div>
          </div>

          <p>
            {`This domain has a bound on each side. So the graph of $f$ has a vertical asymptote at each excluded endpoint, $x=-5$ and $x=5$. At both ends the inside expression $25-x^2$ drops to $0$, and the logarithm dives toward negative infinity.`}
          </p>

          <div className="lrn-graph">
            <LogBoundedDomainViz />
          </div>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>{`Why does $x^2 < 25$ turn into $|x| < 5$, instead of directly $x < 5$?`}</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                {`Squaring removes the sign, so $x^2<25$ also holds for negative numbers close to $0$, not just positive ones. Writing $|x|<5$ captures both the negative side and the positive side at once, giving exactly the interval $(-5,5)$.`}
              </p>
            </details>
          </div>

          <h3>Worked Example: A Domain That Splits Into Two Rays</h3>

          <p>
            {`Not every domain is a single interval. Sometimes the inside expression stays positive on two separate stretches, and the domain splits into two pieces. Take $g(x) = \\log_2(x^2-1)$.`}
          </p>

          <div className="lrn-proof">
            <span className="lrn-proof-header">{`Finding the domain of $g(x) = \\log_2(x^2-1)$`}</span>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">1.</span>
              <div className="lrn-proof-step-content">
                {`The expression inside the logarithm must be positive: $x^2-1 > 0$.`}
              </div>
            </div>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">2.</span>
              <div className="lrn-proof-step-content">{`Rearrange: $x^2 > 1$.`}</div>
            </div>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">3.</span>
              <div className="lrn-proof-step-content">{`This means $|x| > 1$, so $x < -1$ or $x > 1$.`}</div>
            </div>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">4.</span>
              <div className="lrn-proof-step-content">{`So the domain is $(-\\infty, -1) \\cup (1, \\infty)$.`}</div>
            </div>
            <div className="lrn-qed">Q.E.D.</div>
          </div>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>{`Why does $x^2 > 1$ give two separate rays, while $x^2 < 25$ gave one connected interval?`}</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                {`$x^2 > 1$ asks where $x$ sits farther than $1$ from $0$. That happens on two sides at once: below $-1$ and above $1$. Those two stretches never meet, so the domain is their union. The $<$ case instead asks where $x$ sits closer than $5$ to $0$, a single band around $0$.`}
              </p>
            </details>
          </div>
        </>
      ]
    },

    practice: [
      {
        q: `Convert $\\log_2 32 = 5$ into exponential form.`,
        a: `The definition says $\\log_a x = y \\iff a^y = x$, so the base stays the same in both forms. Here $a=2$, $y=5$, $x=32$. So $\\log_2 32 = 5$ becomes $2^5 = 32$.`
      },
      {
        q: `Predict: for $y=\\log_5 x$, does the graph ever cross the y-axis? Explain using the domain.`,
        a: `No. The domain of $y=\\log_5 x$ is positive numbers only, and $x=0$ is not in that domain. The y-axis is the vertical asymptote instead, a line the graph gets closer to but never touches.`
      },
      {
        q: `State the domain and range of $y=\\log_3 x$.`,
        a: `Domain: positive numbers only, written $(0,\\infty)$. Range: all real numbers. This follows because $y=\\log_3 x$ is the inverse of $y=3^x$, and an inverse always swaps domain and range.`
      },
      {
        q: `Evaluate $\\log_9 3$ using the definition of a logarithm, without a calculator.`,
        a: `Ask what power of 9 gives 3. Since $9^{1/2} = \\sqrt{9} = 3$, the exponent is $\\frac{1}{2}$. So $\\log_9 3 = \\frac{1}{2}$.`
      },
      {
        q: `Find the domain and asymptote of $g(x) = -\\log_3 x$.`,
        a: `Reflecting in the x-axis only flips the output, never the input. Domain stays $(0,\\infty)$, range stays all real numbers, and the vertical asymptote stays $x=0$.`
      },
      {
        q: `Evaluate $6^{\\log_6 20}$ using the fourth logarithm property, without ever computing $\\log_6 20$ as a decimal.`,
        a: `The fourth property says $a^{\\log_a x} = x$. Applying it directly with $a=6$ and $x=20$ gives $6^{\\log_6 20} = 20$. You need no decimal computation.`
      },
      {
        q: `Find the domain of $h(x) = \\log_4(-x)$.`,
        a: `The argument $-x$ must be positive, which means $x$ itself must be negative. So the domain is $(-\\infty,0)$, all negative numbers.`
      },
      {
        q: `Why does every logarithmic graph $y=\\log_a x$ cross the x-axis at exactly $x=1$?`,
        a: `Because $\\log_a 1 = 0$ for every base $a$, since $a^0=1$ no matter what $a$ is. A y-value of $0$ at $x=1$ is exactly what "crossing the x-axis at 1" means.`
      },
      {
        q: `Find domain and asymptote of $h(x) = \\log_2(x-5)$.`,
        a: `The argument $x-5$ must be positive, so $x>5$. Domain: $(5,\\infty)$. The horizontal shift carries the asymptote from $x=0$ to $x=5$.`
      },
      {
        q: `Does adding a constant outside a logarithm ever change its domain? Explain.`,
        a: `No. A vertical shift, like $2+\\log_a x$, only moves every output up or down. It never touches the allowed x-values inside the logarithm, so the domain stays exactly the same.`
      },
      {
        q: `Elaborate: why do all four logarithm properties in this lesson follow from one single fact about inverse functions?`,
        a: `A logarithm and an exponential with the same base undo each other. One is the inverse of the other by definition. Feed the four simplest inputs into that undo relationship: 1, a, $a^x$, and $\\log_a x$. Each one produces exactly one of the four properties, and needs no separate proof.`
      },
      {
        q: `Without plotting points, state the vertical asymptote of $y=\\log_7 x$.`,
        a: `$x=0$. As $x$ approaches $0$ from the positive side, $\\log_7 x$ falls toward negative infinity. That is exactly what a vertical asymptote means.`
      },
      {
        q: `Find domain and asymptote of $g(x) = \\log_3(x+2)$.`,
        a: `The argument $x+2$ must be positive, so $x>-2$. Domain: $(-2,\\infty)$. The horizontal shift moves the asymptote from $x=0$ to $x=-2$.`
      },
      {
        q: `Compare $y=\\log_2 x$ and $y=\\log_{10} x$ for $x>1$. Which one climbs faster?`,
        a: `$y=\\log_2 x$ climbs faster. A smaller base needs a smaller exponent to reach any given large output. So its curve rises more steeply than a larger base's curve, for x-values greater than 1.`
      },
      {
        q: `In the worked example evaluating $\\log_{16} 4 = \\frac{1}{2}$, why is a fractional exponent still an acceptable logarithm value?`,
        a: `A logarithm is simply an exponent, and an exponent can be any number, whole or not. Since $16^{1/2} = \\sqrt{16} = 4$, the exponent that produces 4 truly is $\\frac{1}{2}$, so the logarithm equals that fraction.`
      },
      {
        q: `State the new domain of $y = 3+\\log_7 x$ compared with $y=\\log_7 x$.`,
        a: `The domain does not change: $(0,\\infty)$. Adding $3$ outside the logarithm only shifts every output value up by 3. It has no effect on the allowed x-values.`
      },
      {
        q: `What base does the LOG key on a calculator use, and what base does the LN key use?`,
        a: `LOG uses base 10, the common logarithm. LN uses base e, about 2.718, the natural logarithm. These are the two bases every scientific calculator supports directly.`
      },
      {
        q: `Elaborate: why do you choose powers of the base, like $2^{-3}$ through $2^4$, when plotting points for $y=\\log_2 x$?`,
        a: `A power of the base hands back its exact exponent as a whole number, and needs no calculator. An ordinary x-value like 3 or 5 gives an exponent that is not a whole number. That makes the point harder to plot exactly.`
      },
      {
        q: `Is $g(x) = -\\log_5 x$ ever negative for $x>1$? Explain.`,
        a: `Yes. For $x>1$, $\\log_5 x$ is positive, since you need a positive exponent to raise 5 above 1. Negating a positive number makes it negative, so $g(x)$ is negative whenever $x>1$.`
      },
      {
        q: `Evaluate $\\ln(e^5)$ without a calculator.`,
        a: `By the property $\\log_a(a^x)=x$ with base e, $\\ln(e^5) = 5$. Raising e to the fifth power, then asking the natural logarithm for that exponent back, returns exactly 5.`
      },
      {
        q: `Elaborate: why does negating the input of a logarithm flip its domain to negative numbers? Why does negating the output leave the domain unchanged?`,
        a: `The input, the value inside the logarithm, must stay positive for the function to work at all. Negating the input, as in $\\log_a(-x)$, forces x itself to become negative to keep $-x$ positive. Negating the output only flips the sign of the final answer, after you have already met the domain restriction.`
      },
      {
        q: `Why do people write $\\ln$ instead of $\\log_e$ in almost every math course?`,
        a: `"ln" is a shorthand abbreviating the Latin phrase logarithmus naturalis. It means exactly the same thing as $\\log_e$. But it is faster to write, and it matches the dedicated LN key on a calculator.`
      },
      {
        q: `Elaborate: why does a horizontal shift move the vertical asymptote, but a vertical shift never does?`,
        a: `The vertical asymptote sits exactly where the argument of the logarithm hits 0. A horizontal shift changes the argument itself, for example changing x to x−3, which moves that zero point. A vertical shift only adds a number to the finished output. It acts after you have already evaluated the argument, so it never touches where the asymptote sits.`
      },
      {
        q: `Evaluate $\\log(0.01)$ without a calculator.`,
        a: `Equals $-2$, since $10^{-2}=0.01$. The common logarithm asks what power of 10 gives 0.01, and the answer is negative two.`
      },
      {
        q: `Predict: does $\\ln 1$ equal $0$, just like $\\log 1$ does? Explain using the definition.`,
        a: `Yes. Since $e^0=1$, the exponent that produces 1 is always 0. Raising any valid base to the power 0 also gives 1. So this holds for base e the same way it holds for base 10.`
      },
      {
        q: `Find domain of $f(x) = \\ln(16-x^2)$.`,
        a: `The argument must be positive: $16-x^2>0$, so $x^2<16$, so $|x|<4$. The domain is $(-4,4)$.`
      },
      {
        q: `Elaborate: why do the common logarithm and natural logarithm obey the exact same four properties as any other base?`,
        a: `The four properties come from one general fact: $\\log_a x$ and $a^x$ are inverse functions. That fact holds for every valid base, where $a>0$ and $a\\neq1$. Base 10 and base e are simply two specific, especially useful choices of $a$. So they inherit every property that holds for logarithms in general.`
      },
      {
        q: `Find domain of $f(x) = \\log(x-4)$.`,
        a: `The argument must be positive: $x-4>0$, so $x>4$. The domain is $(4,\\infty)$.`
      },
      {
        q: `What single question do you always ask to find the domain of any logarithmic function?`,
        a: `Is the expression inside the logarithm greater than 0? A logarithm only accepts positive numbers, so solving that one inequality always gives the complete domain.`
      },
      {
        q: `Find domain of $f(x) = \\log_2(x^2-1)$.`,
        a: `The argument must be positive: $x^2-1>0$, so $x^2>1$, so $|x|>1$. The domain is all numbers less than $-1$ or greater than $1$: $(-\\infty,-1)\\cup(1,\\infty)$.`
      },
      {
        q: `Find domain of $f(x) = \\ln(2x+6)$.`,
        a: `The argument must be positive: $2x+6>0$, so $2x>-6$, so $x>-3$. The domain is $(-3,\\infty)$.`
      },
      {
        q: `Elaborate: why does finding the domain of any logarithmic function always reduce to solving one inequality?`,
        a: `A logarithm has exactly one restriction built into its definition: the argument must be positive. No other condition ever applies. So the entire domain question always comes down to solving that single "argument greater than 0" inequality.`
      },
      {
        q: `For $f(x)=\\ln(4-x^2)$, why does $x^2<4$ become $|x|<2$ rather than just $x<2$?`,
        a: `Squaring removes the sign, so $x^2<4$ is also true for negative numbers close to 0, not only positive ones. Writing $|x|<2$ captures both the negative side and the positive side at once, matching the true interval $(-2,2)$.`
      },
      {
        q: `Predict: for $f(x)=\\log_3(5-x)$, will the domain be an interval that goes on forever, or a bounded interval?`,
        a: `It goes on forever in one direction. The requirement $5-x>0$ simplifies to $x<5$, which only bounds x from above. The domain is $(-\\infty,5)$, unbounded on the left.`
      },
      {
        q: `State the two vertical asymptotes of $f(x) = \\log_3(25-x^2)$.`,
        a: `$x=-5$ and $x=5$. You find the domain, $(-5,5)$, by requiring $25-x^2>0$. A vertical asymptote sits at each excluded endpoint, where the inside expression reaches $0$.`
      },
      {
        q: `Find the domain of $f(x) = \\log_5(x^2-4)$.`,
        a: `The expression inside must be positive: $x^2-4>0$, so $x^2>4$, so $|x|>2$. The domain splits into two rays: $(-\\infty,-2)\\cup(2,\\infty)$.`
      },
      {
        q: `Evaluate $\\log_8 2$ without a calculator.`,
        a: `Ask what power of $8$ gives $2$. Since $8^{1/3} = \\sqrt[3]{8} = 2$, the exponent is $\\frac{1}{3}$. So $\\log_8 2 = \\frac{1}{3}$.`
      },
      {
        q: `A logarithmic function's domain has a bound on each side, like $(-5,5)$. How many vertical asymptotes should you expect?`,
        a: `Two: one at each excluded endpoint of the domain. A vertical asymptote forms wherever the logarithm's argument reaches 0, and a two-sided bounded domain has two such points.`
      },
      {
        q: `Find the domain and vertical asymptote of $h(x) = \\log_4(x+5)$.`,
        a: `The argument $x+5$ must be positive, so $x>-5$. The domain is $(-5,\\infty)$. The horizontal shift moves the asymptote from $x=0$ to $x=-5$.`
      },
      {
        q: `Evaluate $\\log(100{,}000)$ using the common logarithm, without a calculator.`,
        a: `The common logarithm uses base $10$, so ask what power of $10$ gives $100{,}000$. Since $10^5 = 100{,}000$, the answer is $5$.`
      }
    ],

    reference: {
      category: 'Quick Reference',
      title: 'Logarithmic Functions',
      sections: [
        <>
          <h2>Definition of the Logarithmic Function</h2>

          <div className="ref-formula">
            <span className="ref-formula-name">Logarithmic function, base a</span>
            <div className="ref-formula-eq">{`$$\\log_a x = y \\iff a^y = x$$`}</div>
            <p className="ref-formula-desc">
              {`When to use: converting between exponential form and logarithmic form. Requires $a>0$, $a\\neq1$, and $x>0$.`}
            </p>
          </div>

          <h2>The Four Properties of Logarithms</h2>

          <table>
            <thead>
              <tr>
                <th>Property</th>
                <th>Statement</th>
                <th>When to use</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Log of 1</td>
                <td>{`$\\log_a 1 = 0$`}</td>
                <td>Simplifying a logarithm of the argument 1</td>
              </tr>
              <tr>
                <td>Log of the base</td>
                <td>{`$\\log_a a = 1$`}</td>
                <td>Simplifying a logarithm whose argument matches its base</td>
              </tr>
              <tr>
                <td>Log undoes exponent</td>
                <td>{`$\\log_a(a^x) = x$`}</td>
                <td>Simplifying a logarithm of a power of the base</td>
              </tr>
              <tr>
                <td>Exponent undoes log</td>
                <td>{`$a^{\\log_a x} = x$`}</td>
                <td>Simplifying a base raised to a logarithm of the same base</td>
              </tr>
            </tbody>
          </table>

          <h2>Domain, Range, and Asymptote</h2>

          <div className="ref-grid">
            <div className="ref-item">
              <strong>Domain</strong>
              <p>{`$(0,\\infty)$, positive numbers only`}</p>
            </div>
            <div className="ref-item">
              <strong>Range</strong>
              <p>All real numbers</p>
            </div>
            <div className="ref-item">
              <strong>X-intercept</strong>
              <p>{`$x=1$, since $\\log_a 1 = 0$`}</p>
            </div>
            <div className="ref-item">
              <strong>Vertical asymptote</strong>
              <p>{`$x=0$, the y-axis`}</p>
            </div>
          </div>

          <h2>Transformations of Logarithmic Graphs</h2>

          <table>
            <thead>
              <tr>
                <th>Transformation</th>
                <th>Effect</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{`Reflect in x-axis: $-\\log_a x$`}</td>
                <td>Domain, range, and asymptote unchanged. Output flips sign.</td>
              </tr>
              <tr>
                <td>{`Reflect in y-axis: $\\log_a(-x)$`}</td>
                <td>{`Domain becomes $(-\\infty,0)$. Range and asymptote unchanged.`}</td>
              </tr>
              <tr>
                <td>{`Vertical shift: $c+\\log_a x$`}</td>
                <td>Domain and asymptote unchanged. Every output moves by c.</td>
              </tr>
              <tr>
                <td>{`Horizontal shift: $\\log_a(x-c)$`}</td>
                <td>{`Domain becomes $(c,\\infty)$. Asymptote shifts to $x=c$.`}</td>
              </tr>
            </tbody>
          </table>

          <h2>Common and Natural Logarithms</h2>

          <div className="ref-formula">
            <span className="ref-formula-name">Common logarithm</span>
            <div className="ref-formula-eq">{`$$\\log x = \\log_{10} x$$`}</div>
            <p className="ref-formula-desc">
              When to use: base-10 contexts, or any calculator problem using the LOG key.
            </p>
          </div>

          <div className="ref-formula">
            <span className="ref-formula-name">Natural logarithm</span>
            <div className="ref-formula-eq">{`$$\\ln x = \\log_e x$$`}</div>
            <p className="ref-formula-desc">
              {`When to use: calculus contexts, or any calculator problem using the LN key. $e \\approx 2.718$.`}
            </p>
          </div>

          <h2>Finding the Domain of a Logarithmic Function</h2>

          <div className="ref-formula">
            <span className="ref-formula-name">Domain rule</span>
            <div className="ref-formula-eq">{`$$\\text{argument of the logarithm} > 0$$`}</div>
            <p className="ref-formula-desc">
              When to use: whenever the logarithm's argument is more complicated than a plain x.
              Solve this one inequality to find the complete domain.
            </p>
          </div>
        </>
      ]
    },

    customCss: null
  }
  return config
}

export default function LogarithmicFunctions() {
  const config = useConfig()
  return <LearningTemplate config={config} />
}
