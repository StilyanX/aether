import { LearningTemplate } from '../../../../../components/learning/learning-template'
import {
  CobwebDiagram,
  BifurcationDiagram,
  PeriodDoublingTree,
  FeigenbaumDelta,
  LogisticTimeSeries
} from '../../../../../components/viz'
import { useVizColors } from '../../../../../hooks/use-viz-colors'

function useConfig() {
  const C = useVizColors()

  const config = {
    cssPrefix: 'lmf',
    documentTitle: 'Logistic Map, Period-Doubling, and Feigenbaum Universality - AETHER',
    learning: {
      category: 'Module 5',
      groupTitle: 'Chaos and Nonlinear Dynamics',
      title: 'Logistic Map, Period-Doubling, and Feigenbaum Universality',
      subtitle:
        'One simple rule. An infinite cascade of doublings. A universal constant hiding inside.',
      sections: [
        <>
          <h2>What Is an Iterated Map?</h2>
          <p>
            An <strong>iterated map</strong> is a rule that turns one number into the next. You
            apply the rule, get a number, then feed that number back in. The list of numbers you get
            is called the orbit.
          </p>
          <p>
            Many real systems work this way. Animal populations, parametric oscillators, and
            electronic circuits all build orbits from one simple rule. Learn iteration once and you
            understand all of them.
          </p>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              You apply the rule {`$x \\mapsto 2x$`} starting from {`$x_0 = 0.01$`}. What happens
              after many steps? Now apply {`$x \\mapsto 0.5x$`}. What happens now?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                With {`$x \\mapsto 2x$`}, the orbit grows forever: {`$0.01, 0.02, 0.04, \\ldots$`}.
                With {`$x \\mapsto 0.5x$`}, the orbit falls to zero:{' '}
                {`$0.01, 0.005, 0.0025, \\ldots$`}. Both rules are linear. The logistic map is not.
                Its nonlinear term makes growth fight against crowding, and that fight produces
                everything you study here.
              </p>
            </details>
          </div>

          <h3>The Logistic Map</h3>
          <p>
            The <strong>logistic map</strong> is the simplest nonlinear iterated map. It walks the
            whole path from order to chaos:
          </p>
          <div className="lrn-eq lrn-eq-hero">
            <span>{`$$x_{n+1} = r \\, x_n (1 - x_n)$$`}</span>
          </div>
          <p>
            Here {`$x_n$`} sits between 0 and 1, and {`$r$`} is a knob you turn between 1 and 4. The
            map keeps {`$x$`} inside {`$(0,1)$`}: if {`$x_n \\in (0,1)$`} and {`$r \\leq 4$`}, then{' '}
            {`$x_{n+1} \\in (0,1)$`} too.
          </p>
          <p>
            You will also see the knob written as {`$a$`} or {`$\\mu$`}. All three names mean the
            same thing. This page uses {`$r$`}.
          </p>

          <h3>Where the Map Comes From</h3>
          <p>
            Picture {`$x_n$`} as the size of a beetle colony in year {`$n$`}, scaled so {`$x = 1$`}{' '}
            is the most the habitat can hold. The {`$r x_n$`} part is breeding. The {`$(1 - x_n)$`}{' '}
            part is crowding: once the colony fills the space, growth slows down.
          </p>
          <p>
            When the colony is small, {`$1 - x_n \\approx 1$`}, so the map acts like{' '}
            {`$x_{n+1} \\approx r x_n$`}: pure growth. When the colony is large, {`$1 - x_n$`} is
            tiny and the colony crashes. This tug-of-war between breeding and crowding drives
            everything that follows.
          </p>
          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>
              Why does the logistic map need the {`$(1 - x_n)$`} factor to produce chaos? What goes
              wrong if you drop it?
            </p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                Without {`$(1 - x_n)$`}, the map is just {`$x_{n+1} = r x_n$`}, which is linear. A
                linear 1D map can only do two things: grow or shrink. It cannot fold the line back
                on itself. Folding means two different inputs land on the same output. That folding
                is what makes period-doubling possible in 1D. The {`$(1 - x_n)$`} factor adds it: it
                bends the rule into a parabola, so small and large {`$x_n$`} give close outputs.
              </p>
            </details>
          </div>

          <h3>The Cobweb Construction</h3>
          <p>
            A <strong>cobweb diagram</strong> draws an orbit by hand. Plot the parabola{' '}
            {`$y = r x (1-x)$`} and the line {`$y = x$`}. Start at {`$(x_0, 0)$`} and repeat these
            steps:
          </p>
          <ol className="lrn-list">
            <li>Go up to the parabola. That height is {`$x_1 = f(x_0)$`}.</li>
            <li>Go sideways to the line. You are now at {`$(x_1, x_1)$`}.</li>
            <li>Go up to the parabola again. That height is {`$x_2 = f(x_1)$`}.</li>
            <li>Keep going.</li>
          </ol>
          <p>
            At low {`$r$`}, the cobweb spirals in to one point. At higher {`$r$`}, it bounces
            between two heights (a 2-cycle). Higher still, it fills the box: that is chaos.
          </p>
          <div>
            <CobwebDiagram C={C} />
          </div>
          <div className="lrn-callout">
            <p>
              <strong>Try it:</strong> Drag {`$r$`} above 3.0. The cobweb stops spiraling inward and
              starts bouncing between two heights. Drag past 3.449 for four heights. Near{' '}
              {`$r = 4$`} the cobweb fills the box.
            </p>
          </div>
        </>,

        <>
          <h2>Fixed Points and Stability</h2>
          <p>
            A <strong>fixed point</strong> is a value {`$x^*$`} that maps to itself:{' '}
            {`$f(x^*) = x^*$`}. An orbit that starts near {`$x^*$`} either falls toward it (stable)
            or pulls away from it (unstable). That choice decides whether the orbit settles down or
            keeps wandering.
          </p>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              If {`$f(x^*) = x^*$`} and the orbit starts a tiny distance {`$\\delta$`} from{' '}
              {`$x^*$`}, what determines whether {`$\\delta$`} grows or shrinks after one step?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                After one step, the gap becomes about {`$\\delta \\cdot f'(x^*)$`}. If{' '}
                {`$|f'(x^*)| < 1$`}, the gap shrinks and the fixed point is stable. If{' '}
                {`$|f'(x^*)| > 1$`}, the gap grows and the fixed point is unstable.
              </p>
            </details>
          </div>

          <h3>Finding the Fixed Point</h3>
          <p>
            Set {`$x_{n+1} = x_n = x^*$`} in the map: {`$x^* = r x^* (1 - x^*)$`}. One answer is{' '}
            {`$x^* = 0$`}. The other is:
          </p>
          <div className="lrn-eq">
            <span>{`$$x^* = \\frac{r-1}{r}$$`}</span>
          </div>
          <p>
            This fixed point exists for {`$r > 1$`} and sits inside {`$(0,1)$`}. At {`$r = 2$`} it
            is {`$x^* = 0.5$`}. At {`$r = 3$`} it is {`$x^* = 0.667$`}.
          </p>

          <h3>Stability Condition</h3>
          <p>
            The derivative of {`$f(x) = rx(1-x)$`} is {`$f'(x) = r(1 - 2x)$`}. Plug in the fixed
            point {`$x^* = (r-1)/r$`}:
          </p>
          <div className="lrn-eq">
            <span>{`$$f'(x^*) = r\\left(1 - \\frac{2(r-1)}{r}\\right) = 2 - r$$`}</span>
          </div>
          <p>
            The stability test {`$|f'(x^*)| < 1$`} becomes {`$|2 - r| < 1$`}, which means:
          </p>
          <div className="lrn-eq lrn-eq-hero">
            <span>{`$$1 < r < 3 \\quad \\text{(stable fixed point)}$$`}</span>
          </div>
          <p>
            Right at {`$r = 3$`}, {`$|f'(x^*)| = 1$`} and the fixed point sits on the edge. Past{' '}
            {`$r = 3$`}, it goes unstable and a 2-cycle is born.
          </p>

          <h3>Worked Example: r = 2.0 (Convergence)</h3>
          <p>
            Start at {`$x_0 = 0.1$`}. The rule is {`$x_{n+1} = 2 x_n (1 - x_n)$`}. The fixed point
            is {`$x^* = 0.5$`}. Apply the rule step by step:
          </p>
          <div className="lrn-definition">
            <div className="lrn-definition-desc">
              <div>
                <p>
                  <strong>n=0:</strong> {`$x_0 = 0.100$`}. <strong>n=1:</strong>{' '}
                  {`$x_1 = 2(0.100)(0.900) = 0.180$`}.
                </p>
                <p>
                  <strong>n=2:</strong> {`$x_2 = 2(0.180)(0.820) = 0.295$`}. <strong>n=3:</strong>{' '}
                  {`$x_3 = 2(0.295)(0.705) = 0.416$`}.
                </p>
                <p>
                  <strong>n=5:</strong> {`$x_5 \\approx 0.480$`}. <strong>n=10:</strong>{' '}
                  {`$x_{10} \\approx 0.499$`}. It reaches 0.5 within 10 steps.
                </p>
              </div>
            </div>
          </div>
          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>Why does the orbit settle on {`$x^* = 0.5$`} instead of running off to the edge?</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                At {`$r = 2$`}, the derivative at the fixed point is {`$f'(x^*) = 2 - 2 = 0$`}. A
                zero derivative makes the fixed point superstable: the gap shrinks like a square
                each step, not just by a fixed fraction. So the orbit homes in fast. This is the
                most stable a fixed point can be.
              </p>
            </details>
          </div>

          <h3>Why the Gap Shrinks: A Derivation</h3>
          <p>
            Write {`$x_n = x^* + \\delta_n$`}, where {`$\\delta_n$`} is the small gap from the fixed
            point. Put this into the map and keep only the terms linear in {`$\\delta$`}:
          </p>
          <div className="lrn-eq">
            <span>{`$$x_{n+1} = \\frac{r-1}{r} \\pm \\delta_n (2 - r)$$`}</span>
          </div>
          <p>
            After {`$n$`} steps the gap is {`$\\delta_n = \\delta_0 (2-r)^n$`}. When {`$|2-r| < 1$`}{' '}
            (so {`$1 < r < 3$`}), the gap shrinks toward zero. When {`$|2-r| > 1$`} (so {`$r > 3$`}
            ), the gap grows and the orbit leaves the fixed point.
          </p>
          <div className="lrn-faded">
            <div className="lrn-faded-phase">
              <span className="lrn-faded-label">COMPLETE DERIVATION</span>
              <p>
                Expand {`$f(x^* + \\delta) = r(x^* + \\delta)(1 - x^* - \\delta)$`}. Expand the
                product: {`$= r(x^* - x^{*2} + \\delta(1 - 2x^*) - \\delta^2)$`}. Since{' '}
                {`$r x^*(1-x^*) = x^*$`}, the constant part is just {`$x^*$`}. The first-order piece
                is {`$r\\delta(1 - 2x^*)$`}. Substitute {`$x^* = (r-1)/r$`}:{' '}
                {`$1 - 2x^* = 1 - 2(r-1)/r = (r - 2r + 2)/r = (2-r)/r$`}. So the coefficient is{' '}
                {`$r \\cdot (2-r)/r = 2-r$`}. Drop {`$\\delta^2$`} and you get the stated result.
              </p>
            </div>
            <div className="lrn-faded-phase">
              <span className="lrn-faded-label">YOUR TURN</span>
              <p>
                Start at {`$x_0 = 0.8$`} with {`$r = 2.5$`}. The fixed point is{' '}
                {`$x^* = 1.5/2.5 = 0.6$`}. The multiplier is {`$2 - 2.5 = -0.5$`}. Predict the gap{' '}
                {`$\\delta_3$`} after three steps. Then iterate by hand and check.
              </p>
            </div>
          </div>
        </>,

        <>
          <h2>Period-Doubling Cascade</h2>
          <p>
            Once {`$r$`} passes 3, the fixed point goes unstable. A new <strong>attractor</strong>{' '}
            takes over with period 2: the orbit bounces between two values forever. An attractor is
            the long-term pattern the orbit settles into. Turn {`$r$`} up more and the 2-cycle
            splits into a 4-cycle, then an 8-cycle, then 16. The doublings come faster and faster
            and pile up at one finite {`$r$`}.
          </p>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              The fixed point dies at {`$r = 3$`}, a gap of {`$2$`} from its birth at {`$r = 1$`}.
              The 2-cycle dies at {`$r \\approx 3.449$`}, a gap of only {`$0.449$`}. Will the
              4-cycle live for a wider window in {`$r$`} or a narrower one?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                Narrower. Each window in {`$r$`} is shorter than the one before, and the doublings
                come faster and faster. So the 4-cycle dies only a little past {`$3.449$`}. The next
                section pins down the exact rate at which these gaps shrink.
              </p>
            </details>
          </div>

          <h3>The Period-Doubling Thresholds</h3>
          <p>
            A <strong>bifurcation</strong> is a value of {`$r$`} where the orbit suddenly changes
            its long-term pattern. The bifurcation values for the logistic map are:
          </p>
          <div className="lrn-definition">
            <div className="lrn-definition-desc">
              <div>
                <p>
                  <strong>Period 1 to period 2:</strong> {`$r_1 = 3.000$`} (fixed point goes
                  unstable, 2-cycle born).
                </p>
                <p>
                  <strong>Period 2 to period 4:</strong> {`$r_2 = 3.449490$`} (2-cycle goes
                  unstable, 4-cycle born).
                </p>
                <p>
                  <strong>Period 4 to period 8:</strong> {`$r_3 = 3.544090$`} (4-cycle goes
                  unstable, 8-cycle born). The thresholds keep coming, each closer than the last.
                </p>
                <p>
                  <strong>Accumulation point:</strong> {`$r_\\infty = 3.5699456\\ldots$`} (the
                  Feigenbaum point). Chaos starts here. The full table with {`$r_4$`} through{' '}
                  {`$r_6$`} is in the Reference.
                </p>
              </div>
            </div>
          </div>

          <h3>Worked Example: r = 3.2 (2-Cycle)</h3>
          <p>
            Start at {`$x_0 = 0.5$`}. Run 20 steps to let the early wobble die off, then watch what
            is left:
          </p>
          <div className="lrn-definition">
            <div className="lrn-definition-desc">
              <div>
                <p>
                  The orbit flips between just two values: <strong>{`$x = 0.51304$`}</strong> and{' '}
                  <strong>{`$x = 0.79946$`}</strong>.
                </p>
                <p>
                  Check it:{' '}
                  {`$3.2 \\times 0.51304 \\times (1 - 0.51304) = 3.2 \\times 0.51304 \\times 0.48696 \\approx 0.79946$`}
                  . And {`$3.2 \\times 0.79946 \\times (1 - 0.79946) \\approx 0.51304$`}. Each value
                  maps straight to the other.
                </p>
              </div>
            </div>
          </div>
          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>
              The two values 0.51304 and 0.79946 are fixed points of the doubled map{' '}
              {`$f^{(2)}(x) = f(f(x))$`}. Why does testing this 2-cycle mean multiplying{' '}
              {`$f'(x_1) \\cdot f'(x_2)$`}?
            </p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                The chain rule on {`$f^{(2)}$`} gives {`$(f^{(2)})'(x_1) = f'(x_2) f'(x_1)$`}. The
                product is the same at both points, so both share one stability. The cycle is stable
                when {`$|f'(x_1) f'(x_2)| < 1$`}. The 2-cycle is born when {`$f'(x^*) = -1$`} at the
                old fixed point. Just after that, this product starts a little under 1 in size.
              </p>
            </details>
          </div>

          <h3>Solving for the 2-Cycle</h3>
          <p>
            Where do 0.51304 and 0.79946 come from? They are fixed points of the doubled map. Set{' '}
            {`$f^{(2)}(x) = x$`}, which is {`$rf(x)(1 - f(x)) = x$`}. This is a quartic, but you
            already know two of its roots: the fixed points {`$x = 0$`} and {`$x = (r-1)/r$`} solve
            it too, since a fixed point of {`$f$`} is also a fixed point of {`$f^{(2)}$`}. Divide
            those two roots out. What is left is a quadratic for the true 2-cycle:
          </p>
          <div className="lrn-eq">
            <span>{`$$r^2 x^2 - r(r+1)\\,x + (r+1) = 0$$`}</span>
          </div>
          <p>Solve it with the quadratic formula:</p>
          <div className="lrn-eq">
            <span>{`$$x_\\pm = \\frac{(r+1) \\pm \\sqrt{(r-3)(r+1)}}{2r}$$`}</span>
          </div>
          <p>
            The square root is real only when {`$r > 3$`}. So the 2-cycle exists exactly past{' '}
            {`$r = 3$`}, where the fixed point goes unstable. At {`$r = 3.2$`}, this gives{' '}
            {`$x_- = 0.51304$`} and {`$x_+ = 0.79946$`}, the two values above.
          </p>
          <p>
            Now find where the 2-cycle dies. Its stability is the slope product{' '}
            {`$f'(x_-) f'(x_+)$`}. Plug the two roots into {`$f'(x) = r(1 - 2x)$`} and multiply:
          </p>
          <div className="lrn-eq">
            <span>{`$$f'(x_-)\\,f'(x_+) = 4 + 2r - r^2$$`}</span>
          </div>
          <p>
            The cycle goes unstable when this product hits {`$-1$`}. Set {`$4 + 2r - r^2 = -1$`}, so{' '}
            {`$r^2 - 2r - 5 = 0$`}, which gives the threshold:
          </p>
          <div className="lrn-eq lrn-eq-hero">
            <span>{`$$r_2 = 1 + \\sqrt{6} \\approx 3.449$$`}</span>
          </div>
          <p>
            That is the second bifurcation, where the 4-cycle is born. You derived it from scratch,
            the same way {`$r_1 = 3$`} came from the fixed-point slope.
          </p>

          <h3>Superstable Cycles</h3>
          <p>
            One {`$r$`} value in each window is special. A <strong>superstable cycle</strong> is one
            that contains the peak of the map, the point {`$x = 1/2$`} where {`$f'(1/2) = 0$`}.
            Because one slope in the product is zero, the whole product of slopes around the cycle
            is zero. That is the strongest pull a cycle can have.
          </p>
          <p>
            The {`$r = 2$`} case above is the simplest example. There the fixed point sits at{' '}
            {`$x^* = 1/2$`}, so {`$f'(x^*) = 0$`} and the orbit homes in fast. Every stable-cycle
            window has its own superstable {`$r$`} at its center.
          </p>

          <h3>Worked Example: r = 3.5 (4-Cycle)</h3>
          <p>After transients, the orbit visits four values in order:</p>
          <div className="lrn-definition">
            <div className="lrn-definition-desc">
              <div>
                <p>
                  <strong>Cycle:</strong>{' '}
                  {`$x = 0.501 \\to 0.875 \\to 0.383 \\to 0.827 \\to 0.501 \\to \\cdots$`}
                </p>
                <p>
                  These four values are fixed points of {`$f^{(4)}$`}. The period doubles again at{' '}
                  {`$r \\approx 3.544$`}, where the 4-cycle goes unstable and splits into an
                  8-cycle.
                </p>
              </div>
            </div>
          </div>

          <h3>Worked Example: r = 3.55 and r = 3.566</h3>
          <p>
            At {`$r = 3.55$`}, the orbit runs an 8-cycle. At {`$r = 3.566$`}, a 16-cycle. Each new
            doubling needs a smaller bump in {`$r$`} than the one before. The bumps shrink at a
            fixed rate.
          </p>
          <div>
            <PeriodDoublingTree C={C} />
          </div>
          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>
              Each column in the period-doubling tree shows the attractor at one {`$r$`}. Why does
              the dot count double every time you cross a threshold?
            </p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                At each threshold, every stable cycle point goes unstable and splits into two new
                stable points nearby. If you had {`$k$`} points before, you now have {`$2k$`}. The
                orbit visits each one in turn. So every threshold doubles the number of values in
                the attractor.
              </p>
            </details>
          </div>
        </>,

        <>
          <h2>The Feigenbaum Constants</h2>
          <p>
            The speeding-up cascade hides a clean pattern. Each gap between thresholds shrinks by
            the same ratio as the last. That ratio is a universal number.
          </p>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              The gaps between bifurcations are {`$r_2 - r_1 = 0.449$`}, {`$r_3 - r_2 = 0.0946$`},{' '}
              {`$r_4 - r_3 = 0.0204$`}. Estimate {`$r_5 - r_4$`}.
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                Each gap is about 4.669 times smaller than the one before. So{' '}
                {`$r_5 - r_4 \\approx 0.0204 / 4.669 \\approx 0.00437$`}. The real value is{' '}
                {`$r_5 - r_4 = 3.568759 - 3.564407 = 0.004352$`}. The ratio of gaps homes in on the
                Feigenbaum number.
              </p>
            </details>
          </div>

          <h3>Feigenbaum Delta: Scaling Along r</h3>
          <p>Take the ratio of one gap to the next:</p>
          <div className="lrn-eq lrn-eq-hero">
            <span>{`$$\\delta = \\lim_{n \\to \\infty} \\frac{r_n - r_{n-1}}{r_{n+1} - r_n} = 4.6692016\\ldots$$`}</span>
          </div>
          <p>
            So each gap in {`$r$`} is 4.6692 times wider than the next. The thresholds {`$r_n$`}{' '}
            close in on {`$r_\\infty$`} at this fixed rate.
          </p>
          <div>
            <FeigenbaumDelta C={C} />
          </div>
          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>
              The thresholds shrink at a fixed ratio because the cascade repeats itself at smaller
              scale. Zoom in on the bifurcation diagram near the accumulation point and the picture
              looks the same, just smaller. The shrink factor along the {`$r$`} axis is exactly{' '}
              {`$\\delta$`}. So {`$r_n \\approx r_\\infty + A \\delta^{-n}$`} for some constant{' '}
              {`$A$`}.
            </p>
          </div>

          <h3>Feigenbaum Alpha: Scaling Along x</h3>
          <p>
            A second Feigenbaum constant controls how the tree shrinks the other way, up and down in{' '}
            {`$x$`}. Look at the period-doubling tree at the superstable points. The gap between the
            nearest pair of branches at one level is about {`$0.30$`} wide; at the next level it
            shrinks to about {`$0.12$`}. Their ratio, {`$0.30 / 0.12 \\approx 2.5$`}, is the same
            sort of fixed ratio you saw along {`$r$`}.
          </p>
          <p>
            Make this exact. Measure the spread between two branches at threshold {`$n$`} and
            compare it to the spread at threshold {`$n+1$`}:
          </p>
          <div className="lrn-eq lrn-eq-hero">
            <span>{`$$\\alpha = \\lim_{n \\to \\infty} \\frac{x_{n,+} - x_{n,-}}{x_{n+1,+} - x_{n+1,-}} = 2.5029078\\ldots$$`}</span>
          </div>
          <p>
            Each set of branches is {`$\\alpha \\approx 2.503$`} times wider than the next. You will
            sometimes see {`$\\alpha = -2.5029$`}, because the branches flip top to bottom each step
            and the minus sign tracks which one is on top.
          </p>
          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">
                {`$\\delta \\approx 4.6692$`}: scaling along r
              </span>
              <p>
                Sets how fast the thresholds {`$r_n$`} pack toward {`$r_\\infty$`}. It measures the
                shrink along the {`$r$`} axis.
              </p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">
                {`$\\alpha \\approx 2.5029$`}: scaling along x
              </span>
              <p>
                Sets how fast the branch spreads narrow with each doubling. It measures the shrink
                along the {`$x$`} axis.
              </p>
            </div>
          </div>

          <h3>Universality: The Key Fact</h3>
          <p>
            Here is the key fact: {`$\\delta$`} and {`$\\alpha$`} are universal. They depend only on
            one thing. The map must have a single hump rounded like a parabola at the top. They do
            not care about the exact formula.
          </p>
          <p>
            You get the same {`$\\delta = 4.6692016$`} and {`$\\alpha = 2.5029$`} from the logistic
            map, from {`$r \\sin(\\pi x)$`}, and from {`$r x^2 e^{-x}$`}. Any one-hump map with a
            smooth rounded peak gives these same two numbers.
          </p>
          <div className="lrn-insight">
            <p>
              <strong>Universality means:</strong> {`$\\delta$`} and {`$\\alpha$`} belong to a whole
              family of maps, not to one map. Every one-hump map with a rounded peak doubles its way
              to chaos using these same ratios.
            </p>
          </div>
        </>,

        <>
          <h2>Renormalization: Why Universality Exists</h2>
          <p>
            Universality is no accident. The cascade looks the same at every scale once you zoom and
            stretch it. <strong>Renormalization</strong> is the math that makes this precise: it is
            the rule for zooming in, iterating, and rescaling so the map maps onto itself.
          </p>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              You zoom into the bifurcation diagram near {`$r_\\infty$`}. You see the cascade repeat
              at smaller scale. What does this suggest about the structure of the map near its
              accumulation point?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                Looking the same under zoom means the map has a fixed point under renormalization.
                There should be one universal function that maps to itself when you iterate it twice
                and rescale. That fixed-point function is what Feigenbaum computed.
              </p>
            </details>
          </div>

          <h3>Algebraic Renormalization (Approximate)</h3>
          <p>
            First move the peak to the origin. Shift and scale {`$x$`} so the logistic map{' '}
            {`$rx(1-x)$`} takes the standard quadratic form:
          </p>
          <div className="lrn-eq">
            <span>{`$$x_{n+1} = 2Cx_n + 2x_n^2, \\quad C = \\frac{2-r}{2}$$`}</span>
          </div>
          <p>
            Here {`$r$`} is the same knob as before, just written as {`$C$`} in shifted coordinates.
            At {`$r = 3$`} (first doubling), {`$C = -1/2$`}; at {`$r = 4$`}, {`$C = -1$`}. As{' '}
            {`$r$`} climbs, {`$C$`} drops, and the map runs its doublings.
          </p>
          <p>
            After one doubling, look at the second iterate near its 2-cycle and rescale it. The
            rescaled map has the same quadratic shape but a new parameter:
          </p>
          <div className="lrn-eq">
            <span>{`$$C' = -2C^2 + 2C + 2$$`}</span>
          </div>
          <p>
            Try one evaluation at {`$C = -0.7$`}, just shy of the fixed point:{' '}
            {`$C' = -2(0.49) + 2(-0.7) + 2 = -0.98 - 1.4 + 2 = -0.38$`}. The cascade reaches the
            fixed point in the limit, not by iterating this map forward.
          </p>
          <p>
            The accumulation point is where {`$C' = C$`}. Solving {`$2C^2 - C - 2 = 0$`} gives{' '}
            {`$C_\\infty = (1 - \\sqrt{17})/4 \\approx -0.781$`} (an approximation).
          </p>

          <h3>Computing Delta Algebraically</h3>
          <p>
            Near {`$C_\\infty$`}, the sequence {`$C_k$`} behaves like{' '}
            {`$C_k \\approx C_\\infty + A \\delta^{-k}$`}. Put this into the renormalization
            equation and keep only the linear part:
          </p>
          <div className="lrn-eq">
            <span>{`$$\\delta = -4C_\\infty + 2 = 1 + \\sqrt{17} \\approx 5.12 \\quad \\text{(algebraic approximation)}$$`}</span>
          </div>
          <p>
            The 5.12 here is only a rough answer. The true value, 4.6692, needs the full functional
            renormalization equation solved on a computer.
          </p>
          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Algebraic renormalization (approximate)</span>
              <p>
                Treats the map as a pure parabola near its hump. Gives {`$\\delta \\approx 5.12$`}{' '}
                and {`$\\alpha \\approx -2.24$`}. It shows the fixed-point structure and the
                universality, but the numbers are off.
              </p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Functional renormalization (exact)</span>
              <p>
                Solves the universal fixed-point equation {`$g^*(x) = \\alpha g^*(g^*(x/\\alpha))$`}{' '}
                on a computer. Gives exact {`$\\delta = 4.6692$`} and {`$\\alpha = -2.5029$`}. It
                proves universality fully.
              </p>
            </div>
          </div>

          <h3>The Universal Fixed-Point Equation</h3>
          <p>
            At {`$r_\\infty$`}, the map looks the same after you iterate it twice and rescale. One
            universal function {`$g^*(x)$`} obeys:
          </p>
          <div className="lrn-eq lrn-eq-hero">
            <span>{`$$g^*(x) = \\alpha \\, g^*\\!\\left(g^*\\!\\left(\\frac{x}{\\alpha}\\right)\\right)$$`}</span>
          </div>
          <p>
            Here {`$\\alpha = -2.5029$`} is the same Feigenbaum constant. The function {`$g^*$`} has{' '}
            {`$g^*(0) = 1$`} and {`$g^{*\\prime}(0) = 0$`}, so its top is flat at {`$x = 0$`}. A
            simple guess {`$g^*(x) \\approx 1 + ax^2$`} gives{' '}
            {`$\\alpha \\approx -(1 + \\sqrt{3}) \\approx -2.732$`}. The exact value needs a
            computer.
          </p>
          <p>
            The one growing eigenvalue of the doubling operator near {`$g^*$`} equals exactly{' '}
            {`$\\lambda = \\delta \\approx 4.6692$`}. That is the real reason {`$\\delta$`} is
            universal: it is an eigenvalue of an operator, not a feature of any one map.
          </p>
          <div className="lrn-faded">
            <div className="lrn-faded-phase">
              <span className="lrn-faded-label">COMPLETE DERIVATION (ALGEBRAIC RENORM)</span>
              <p>
                Work with {`$g(x) = 2Cx + 2x^2$`}. Solve {`$g(g(x)) = x$`} and divide out the two
                fixed points {`$x = 0$`} and {`$x = \\tfrac12 - C$`}. What is left is the quadratic{' '}
                {`$4x^2 + (4C + 2)x + (2C + 1) = 0$`} for the 2-cycle. Its two roots are{' '}
                {`$x_{2\\pm} = a \\pm b$`} with center {`$2a = -\\tfrac12 - C$`} and spread{' '}
                {`$4b^2 = (C + \\tfrac12)(C - \\tfrac32)$`}.
              </p>
              <p>
                Now renormalize. The second iterate {`$g(g(x))$`} near this 2-cycle has the shape of
                a parabola again. Shift the origin to the cycle center and rescale {`$x$`} by the
                factor {`$\\alpha$`} that restores the standard form {`$2C'x + 2x^2$`}. Matching the
                quadratic coefficient of {`$g(g(x))$`} to {`$2C'x + 2x^2$`} gives the recursion:
              </p>
              <div className="lrn-eq">
                <span>{`$$C' = -2C^2 + 2C + 2$$`}</span>
              </div>
              <p>
                Set {`$C' = C$`} for the self-similar fixed point: {`$-2C^2 + 2C + 2 = C$`}, which
                is {`$2C^2 - C - 2 = 0$`}. The root that lies in range is{' '}
                {`$C_\\infty = (1 - \\sqrt{17})/4 \\approx -0.781$`}. The Feigenbaum number is the
                slope of the recursion at this fixed point: {`$\\delta = dC'/dC = -4C + 2$`}, so{' '}
                {`$\\delta = -4C_\\infty + 2 = 1 + \\sqrt{17} \\approx 5.12$`}.
              </p>
            </div>
            <div className="lrn-faded-phase">
              <span className="lrn-faded-label">YOUR TURN</span>
              <p>
                Using {`$C_\\infty \\approx -0.781$`}, check that{' '}
                {`$\\delta = -4C_\\infty + 2 = -4(-0.781) + 2 = 5.124$`}. Then explain why this only
                approximates the exact {`$\\delta = 4.6692$`}.
              </p>
            </div>
          </div>
        </>,

        <>
          <h2>The Bifurcation Diagram</h2>
          <p>
            The <strong>bifurcation diagram</strong> plots the long-term {`$x$`} values against the
            knob {`$r$`}. For each {`$r$`}, you drop in the dots the orbit visits after transients
            die. The whole cascade and the chaos sit in one picture.
          </p>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              The bifurcation diagram for {`$r < 3$`} shows a single curve. For {`$3 < r < 3.449$`}{' '}
              it shows two curves. What do you expect for {`$r > r_\\infty \\approx 3.5699$`}?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                Past the accumulation point, the doublings have all happened and the attractor is no
                longer a few points. The orbit never repeats. For most {`$r$`} the diagram shows a
                dense cloud of dots: that is chaos. But narrow gaps appear where the cloud vanishes
                and a few clean dots return. Those are periodic windows inside the chaos.
              </p>
            </details>
          </div>

          <div>
            <BifurcationDiagram C={C} />
          </div>

          <h3>Self-Similarity of the Diagram</h3>
          <p>
            The diagram is self-similar. Zoom in near any threshold and you find a smaller copy of
            the whole diagram. This is exact, not a loose comparison: {`$\\delta$`} and{' '}
            {`$\\alpha$`} are the sideways and up-down shrink factors between one copy and the next.
          </p>
          <p>
            Zoom into the ranges {`$[3, 3.678]$`}, then {`$[3.45122, 3.59383]$`}, then{' '}
            {`$[3.54416, 3.57490]$`}. Each zoom shows a smaller tree that looks just like the last.
            This repeating structure makes the accumulation point a fractal.
          </p>

          <h3>What the Diagram Shows Region by Region</h3>
          <div className="lrn-definition">
            <div className="lrn-definition-desc">
              <div>
                <p>
                  <strong>{`$1 < r < 3$`}:</strong> One curve at {`$x^* = (r-1)/r$`}. Every orbit
                  lands on this fixed point.
                </p>
                <p>
                  <strong>{`$3 < r < 3.449$`}:</strong> Two curves. The orbit flips between two
                  values forever. The fixed point is now unstable.
                </p>
                <p>
                  <strong>{`$3.449 < r < 3.544$`}:</strong> Four curves. A 4-cycle.
                </p>
                <p>
                  <strong>{`$r > r_\\infty \\approx 3.5699$`}:</strong> Chaos. A dense cloud of
                  dots. The orbit never repeats and tiny start differences blow up.
                </p>
                <p>
                  <strong>Periodic windows:</strong> Inside the chaos, narrow strips appear where
                  the cloud clears and thin curves return. Those are stable cycles living inside the
                  chaos.
                </p>
              </div>
            </div>
          </div>
          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>
              The bifurcation diagram and the cobweb both show the logistic map. What does each one
              tell you that the other cannot?
            </p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                The cobweb shows one orbit at one fixed {`$r$`}. You watch a single starting point
                settle, bounce, or wander. It shows how iteration works step by step, but says
                nothing about other {`$r$`} values.
              </p>
              <p>
                The bifurcation diagram stacks the attractor over a whole range of {`$r$`}. It shows
                the big picture all at once: thresholds, self-similarity, and the windows. But it
                hides the early wobble and the path any single orbit takes.
              </p>
            </details>
          </div>
        </>,

        <>
          <h2>Onset of Chaos and the Chaotic Region</h2>
          <p>
            Past {`$r_\\infty$`}, the map is chaotic for most {`$r$`}. Orbits never settle. Two
            orbits that start close pull apart fast, each step multiplying their gap. Nothing in the
            periodic region does this.
          </p>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              Two orbits start at {`$x_0 = 0.3000$`} and {`$x_0' = 0.3001$`} with {`$r = 4$`}. After
              5 steps, are they close or far apart?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                At {`$r = 4$`} the gap doubles each step (the Lyapunov exponent is{' '}
                {`$\\sigma = \\ln 2$`}). After 5 steps the gap is about {`$2^5 = 32$`} times bigger.
                Starting from {`$\\Delta x_0 = 0.0001$`}, you get {`$\\Delta x_5 \\approx 0.0032$`}.
                After about 10 steps the gap reaches the full width of {`$[0,1]$`} and the orbits
                are totally split.
              </p>
            </details>
          </div>

          <h3>Worked Example: r = 4.0 (Chaos)</h3>
          <p>
            Run two orbits at {`$r = 4$`}: one from {`$x_0 = 0.3000$`}, one from {`$x_0' = 0.3001$`}
            . Track the gap {`$\\Delta x_n = |x_n - x_n'| \\times 10^4$`}. It starts at 1 and
            climbs:
          </p>
          <div className="lrn-definition">
            <div className="lrn-definition-desc">
              <div>
                <p>
                  <strong>n=0:</strong> {`$\\Delta x_n = 1.0$`}. <strong>n=2:</strong>{' '}
                  {`$\\Delta x_n \\approx 2.9$`}. <strong>n=4:</strong>{' '}
                  {`$\\Delta x_n \\approx 7.4$`}.
                </p>
                <p>
                  <strong>n=7:</strong> {`$\\Delta x_n \\approx 43$`}. <strong>n=10:</strong>{' '}
                  {`$\\Delta x_n \\approx 820$`}. <strong>n=11:</strong>{' '}
                  {`$\\Delta x_n \\approx 2900$`}. The orbits are now fully apart.
                </p>
              </div>
            </div>
          </div>
          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>
              Why does the gap stop growing steadily after about 11 steps, even though the orbits
              still pull apart each step?
            </p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                The doubling rule only holds while the two orbits stay very close, so a
                straight-line approximation works. Once {`$\\Delta x_n$`} grows to the width of{' '}
                {`$[0,1]$`}, that approximation breaks. You can no longer treat one orbit as a small
                nudge of the other. After that, the two orbits move on their own and the gap wobbles
                up and down instead of climbing.
              </p>
            </details>
          </div>

          <h3>Time Series at Four Representative r Values</h3>
          <div>
            <LogisticTimeSeries C={C} />
          </div>
          <div className="lrn-callout">
            <p>
              All four series start at {`$x_0 = 0.2$`}. The solid line settles on a fixed point. The
              dashed lines show the 2-cycle, the 4-cycle, and the fully chaotic orbit. The early
              wobble clears after about 20 steps.
            </p>
          </div>

          <h3>Measuring Chaos: The Lyapunov Exponent</h3>
          <p>
            One number says whether the map is chaotic. It is the average log of the slope along the
            orbit, called the <strong>Lyapunov exponent</strong>:
          </p>
          <div className="lrn-eq">
            <span>{`$$\\sigma = \\lim_{N \\to \\infty} \\frac{1}{N} \\sum_{i=1}^{N} \\ln |r(1 - 2x_i)|$$`}</span>
          </div>
          <p>
            The piece inside the log, {`$|f'(x_i)| = |r(1 - 2x_i)|$`}, is the slope at each step.
            Read the sign: {`$\\sigma < 0$`} means periodic, {`$\\sigma = 0$`} means a threshold,{' '}
            {`$\\sigma > 0$`} means chaos. Near {`$r_\\infty$`} it climbs as{' '}
            {`$\\sigma \\sim |r - r_\\infty|^\\eta$`} with{' '}
            {`$\\eta = \\ln 2 / \\ln \\delta \\approx 0.4498$`}. The sibling topic on Lyapunov
            exponents plots {`$\\sigma(r)$`} in full and works the sign rule in depth.
          </p>
        </>,

        <>
          <h2>Periodic Windows and Period-3</h2>
          <p>
            Inside the chaos, stable cycles show up at certain {`$r$`} values. These windows are not
            random. Each one is born in a <strong>tangent bifurcation</strong>: a stable cycle and
            an unstable cycle of the same period pop into being together.
          </p>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              A periodic window exists near {`$r \\approx 3.83$`}. The orbit has period 3. What does
              the cobweb look like inside this window? What does the Lyapunov exponent do?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                Inside the window, the cobweb closes into a 3-step staircase hitting three heights
                over and over. The Lyapunov exponent drops below zero, since a stable cycle has a
                negative exponent. In the bifurcation diagram, the cloud splits into three thin
                curves.
              </p>
            </details>
          </div>

          <h3>The Period-3 Window</h3>
          <p>
            The tangent bifurcation (also called saddle-node) is also what gives period-3 its
            window. In the quadratic map {`$x_{n+1} = 2Cx_n + 2x_n^2$`}, that window opens at:
          </p>
          <div className="lrn-eq">
            <span>{`$$C_0^{(3)} = \\frac{1 - \\sqrt{8}}{2} \\approx -0.9142$$`}</span>
          </div>
          <p>
            There the three cycle values are about {`$x_{30} \\approx 0.4296$`},{' '}
            {`$x_{31} \\approx -0.4164$`}, {`$x_{32} \\approx 1.1081$`}. These numbers live in the
            shifted {`$C$`}-coordinate, not the {`$[0,1]$`} logistic coordinate, so two of them fall
            outside {`$(0,1)$`}. In the usual logistic map, this window sits near{' '}
            {`$r \\approx 3.8284$`} and runs to about {`$r \\approx 3.857$`}.
          </p>
          <p>
            Period 3 implies chaos: if a continuous map of an interval has a period-3 orbit, it has
            orbits of every other period too. The window floats in a sea of chaos because its own
            doublings, just outside it, wreck stability on both sides.
          </p>
          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Period-doubling bifurcation</span>
              <p>
                A period-{`$k$`} orbit goes unstable and splits into a stable period-{`$2k$`} orbit.
                One dies, two are born. This is the threshold {`$r_n$`} at each step of the cascade.
              </p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Tangent bifurcation</span>
              <p>
                A stable and an unstable orbit of the same period appear out of nothing. This opens
                the periodic windows (period 3, 5, 6, 7) inside the chaos. No earlier orbit has to
                go unstable.
              </p>
            </div>
          </div>

          <h3>Other Periodic Windows</h3>
          <p>
            The chaos holds windows of period 3, 5, 6, and 7. Period 5 and 7 sit at higher {`$r$`}{' '}
            than period 3. The even windows come from doubling the odd ones: a period-3 orbit can
            double into a period-6 orbit.
          </p>
          <p>
            Every window runs its own doubling cascade. Zoom into the period-3 window and you see
            the same self-similar tree: 3 doubles to 6 to 12 to 24, with its own chaos threshold and
            the same {`$\\delta$`} and {`$\\alpha$`}.
          </p>
          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>
              Inside every periodic window sits a smaller copy of the whole bifurcation diagram,
              chaos and all. How can that be, if the window starts as one stable cycle?
            </p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                The stable cycle in the window doubles as {`$r$`} rises. The period-3 orbit doubles
                to 6, then 12, then 24, and piles up at its own chaos threshold inside the window.
                Past that point the orbit there is chaotic. So a window is really a full
                mini-cascade, squeezed in {`$r$`} by the Feigenbaum ratio. Universality holds for
                the window just as it does for the main cascade.
              </p>
            </details>
          </div>
        </>,

        <>
          <h2>Where a Chaotic Orbit Spends Its Time</h2>
          <p>
            In the chaotic region, the orbit never repeats. Still, it does not treat every {`$x$`}{' '}
            value the same. There is a steady pattern for how often it lands in each part of{' '}
            {`$[0,1]$`}. That pattern is the <strong>invariant distribution</strong>: the fraction
            of time the orbit spends near each {`$x$`}.
          </p>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              A chaotic orbit of the logistic map with {`$r = 4$`} runs for a million steps. You
              plot a histogram of all visited {`$x$`} values. Where do you expect the highest bars?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                The orbit spends more time near {`$x = 0$`} and {`$x = 1$`}. Near zero, a small
                value stays small for a while. Near the peak at {`$x = 0.5$`} the parabola is flat,
                so outputs bunch up near 1. The exact pattern is{' '}
                {`$P(x) = (1/\\pi)[x(1-x)]^{-1/2}$`}, which spikes at both ends.
              </p>
            </details>
          </div>

          <h3>The Invariant Distribution at r = 4</h3>
          <p>At {`$r = 4$`} (fully chaotic), the map has an exact formula for this pattern:</p>
          <div className="lrn-eq lrn-eq-hero">
            <span>{`$$P(x) = \\frac{1}{\\pi \\sqrt{x(1-x)}}$$`}</span>
          </div>
          <p>
            It is normalized: {`$\\int_0^1 P(x)\\, dx = 1$`}. This is the arc-sine law. The orbit
            barely touches the center {`$x = 0.5$`} and crowds near the edges {`$x = 0$`} and{' '}
            {`$x = 1$`}.
          </p>

          <h3>Exact Solution at r = 4</h3>
          <p>At {`$r = 4$`}, you can write the orbit from any start in closed form:</p>
          <div className="lrn-eq">
            <span>{`$$x_n = \\frac{1}{2}\\left(1 - \\cos(2^{n+1}\\varphi_0)\\right)$$`}</span>
          </div>
          <p>
            with {`$\\varphi_0 = \\arccos(1 - 2x_0)$`}. The orbit just follows a cosine whose angle
            doubles each step: {`$\\varphi_n = 2^n \\varphi_0$`}. That doubling is the source of the
            sensitivity. A tiny change in {`$\\varphi_0$`} becomes a huge change in {`$\\varphi_n$`}{' '}
            after only {`$n$`} steps.
          </p>
          <p>
            This trick works only at {`$r = 4$`}. That is the one value where the logistic map turns
            into a plain doubling map under a change of variables.
          </p>

          <h3>Conjugacy to the Tent Map</h3>
          <p>
            The <strong>tent map</strong> is:
          </p>
          <div className="lrn-eq">
            <span>{`$$\\bar{f}(\\bar{x}) = \\begin{cases} 2\\bar{x} & 0 < \\bar{x} < \\tfrac{1}{2} \\\\ 2 - 2\\bar{x} & \\tfrac{1}{2} < \\bar{x} < 1 \\end{cases}$$`}</span>
          </div>
          <p>
            The change of variables {`$\\bar{x} = (2/\\pi)\\arcsin(\\sqrt{x})$`} turns the logistic
            map at {`$r = 4$`} exactly into the tent map (with {`$a = 1$`}). Each orbit of one map
            matches an orbit of the other. This exact matching is called topological conjugacy.
          </p>
          <p>
            Conjugacy keeps the Lyapunov exponent the same. The tent map at {`$a = 1$`} has{' '}
            {`$\\sigma = \\ln 2$`} exactly, because {`$|f'| = 2$`} everywhere. So the logistic map
            at {`$r = 4$`} has {`$\\sigma = \\ln 2 \\approx 0.693$`} too.
          </p>
          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Logistic map (one-hump, noninvertible)</span>
              <p>
                A rounded peak at {`$x = 0.5$`} where the slope is zero. Two inputs can hit the same
                output, so it cannot be undone. It has a full doubling cascade. At {`$r = 4$`}:{' '}
                {`$\\sigma = \\ln 2$`}.
              </p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Tent map (piecewise-linear)</span>
              <p>
                A sharp peak at {`$x = 1/2$`}. The slope has constant size {`$2a$`} everywhere
                except the peak. So the Lyapunov exponent is exactly {`$\\ln(2a)$`} with no
                averaging. It is conjugate to the logistic map at {`$r = 4$`}.
              </p>
            </div>
          </div>
          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>The conjugacy changes the map. Why does it leave the Lyapunov exponent alone?</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                The exponent is the long-run average of {`$\\ln|f'|$`} along the orbit. Under the
                change of variables {`$\\bar{x} = g(x)$`}, the chain rule gives{' '}
                {`$\\bar{f}'(\\bar{x}) = g'(f(x)) \\cdot f'(x) \\cdot (g'(x))^{-1}$`}. When you add
                up {`$\\ln|\\bar{f}'|$`} over the orbit, the {`$g'$`} pieces cancel in a chain: the{' '}
                {`$g'(x_{n+1})$`} at one step kills the {`$(g'(x_n))^{-1}$`} at the next. All that
                survives is the average of {`$\\ln|f'(x_n)|$`}. So the two exponents are equal.
              </p>
            </details>
          </div>
        </>,

        <>
          <h2>Reverse Bifurcation and Power Spectra</h2>
          <p>
            Inside the chaos, as {`$r$`} drops back toward {`$r_\\infty$`}, the chaotic bands merge
            in reverse order. The chaos is not fading. The chaotic attractor is running its own
            bifurcations backward.
          </p>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              Just above {`$r_\\infty$`}, the chaotic orbit splits into two bands: the orbit
              alternates between two separate intervals but is chaotic within each. What do you
              expect to see in the bifurcation diagram at this value of {`$r$`}?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                You would see two dense clouds with a gap between them. The orbit hits one cloud,
                then the other, then back: chaos within two bands. As {`$r$`} rises, the two bands
                join into one wider band. This is the forward doubling cascade run backward.
              </p>
            </details>
          </div>

          <h3>Chaotic Band Merging</h3>
          <p>
            Just above {`$r_\\infty$`}, the chaotic attractor is split into {`$2^n$`} bands. As{' '}
            {`$r$`} rises, the bands merge in reverse: {`$2^n$`} bands fall to {`$2^{n-1}$`} at a
            list of values {`$C_k^*$`}. These merges follow the same Feigenbaum ratio:
          </p>
          <div className="lrn-eq">
            <span>{`$$C_k^* - C_\\infty \\approx (C_0^* - C_\\infty)\\, \\delta^{-k}$$`}</span>
          </div>
          <p>
            The forward doublings (cycles) and the reverse merges (chaotic bands) both scale with
            the same {`$\\delta = 4.6692$`}. The pattern is symmetric across the accumulation point.
          </p>

          <h3>Fourier Spectra and Noise Power</h3>
          <p>
            A periodic orbit shows up in the frequency spectrum as sharp peaks. At each doubling, a
            new peak appears at half the previous frequency. In the chaos, the peaks smear into a
            broad band of noise.
          </p>
          <p>The total noise power {`$N(r)$`} near the accumulation point follows a power law:</p>
          <div className="lrn-eq">
            <span>{`$$N(r) \\propto (r_\\infty - r)^{\\sigma_N}, \\quad \\sigma_N \\approx 1.52$$`}</span>
          </div>
          <p>
            The exponent {`$\\sigma_N$`} carries a subscript so it does not clash with the Lyapunov
            exponent {`$\\sigma$`} above. Its value is universal. It is set by {`$\\delta$`} and by
            how fast the spectral peaks shrink at each doubling. So the noise power has its own
            universal power law as the system nears chaos.
          </p>
          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>
              The rule is fully deterministic. Why does the move into chaos still produce broadband
              noise in the spectrum?
            </p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                Deterministic does not mean it repeats. A chaotic orbit never repeats, so it has no
                steady frequency. A signal that never repeats has a smooth, continuous spectrum, not
                sharp peaks. Compare a non-periodic function: its Fourier transform is a smooth
                curve, not a row of spikes. The chaos comes purely from the rule, but in the
                frequency domain it looks like random noise. That is why early experimenters in
                circuits and turbulence mistook chaos for noise.
              </p>
            </details>
          </div>
        </>
      ]
    },

    practice: [
      {
        q: `The logistic map is ${`$x_{n+1} = r x_n (1-x_n)$`}. For ${`$r = 2$`}, compute the first three iterates starting from ${`$x_0 = 0.1$`}.`,
        a: `${`$x_1 = 2 \\times 0.1 \\times 0.9 = 0.180$`}. Then ${`$x_2 = 2 \\times 0.180 \\times 0.820 = 0.295$`}. Then ${`$x_3 = 2 \\times 0.295 \\times 0.705 \\approx 0.416$`}. Just apply the rule each time. The orbit is heading for the fixed point ${`$x^* = (r-1)/r = 0.5$`}.`
      },
      {
        q: `Find the nonzero fixed point of the logistic map ${`$x_{n+1} = r x_n (1-x_n)$`} for general ${`$r$`}. State when it is stable.`,
        a: `Set ${`$x^* = r x^* (1-x^*)$`}. Divide by ${`$x^*$`} (with ${`$x^* \\neq 0$`}): ${`$1 = r(1-x^*)$`}, so ${`$x^* = (r-1)/r$`}. The slope is ${`$f'(x^*) = 2 - r$`}. Stability needs ${`$|2-r| < 1$`}, which is ${`$1 < r < 3$`}. At ${`$r = 3$`} the fixed point sits on the edge and the 2-cycle is born.`
      },
      {
        q: `At ${`$r = 3.2$`}, the logistic map has a 2-cycle. The two cycle values are 0.51304 and 0.79946. Verify that each maps to the other.`,
        a: `Compute ${`$3.2 \\times 0.51304 \\times (1 - 0.51304) = 3.2 \\times 0.51304 \\times 0.48696 \\approx 0.79946$`}. Then ${`$3.2 \\times 0.79946 \\times 0.20054 \\approx 0.51304$`}. Each value maps to the other. The orbit flips between them forever. Both are fixed points of the doubled map ${`$f^{(2)}$`}.`
      },
      {
        q: `The Feigenbaum constant is ${`$\\delta = 4.6692016$`}. The bifurcation gaps are ${`$r_2 - r_1 = 3.449 - 3.0 = 0.449$`} and ${`$r_3 - r_2 = 3.544 - 3.449 = 0.095$`}. Compute the ratio and comment on its accuracy.`,
        a: `The ratio is ${`$0.449 / 0.095 = 4.726$`}. It is close to ${`$\\delta = 4.6692$`} but not exact. This is only the first ratio of gaps. You have to use gaps at higher and higher thresholds. The sequence of ratios homes in on ${`$4.6692$`} as ${`$n \\to \\infty$`}.`
      },
      {
        q: `What is the Feigenbaum accumulation point ${`$r_\\infty$`}? What happens to the logistic map orbit for ${`$r > r_\\infty$`}?`,
        a: `The accumulation point is ${`$r_\\infty = 3.5699456\\ldots$`}. It is where the thresholds pile up: ${`$r_1, r_2, r_3, \\ldots \\to r_\\infty$`}. For ${`$r > r_\\infty$`}, the orbit is chaotic at most ${`$r$`}. It never repeats, nearby orbits split fast, and the Lyapunov exponent is positive. Narrow windows still let stable cycles return here and there.`
      },
      {
        q: `Why are both Feigenbaum constants universal? What exactly do they depend on, and what don't they depend on?`,
        a: `Both ${`$\\delta = 4.6692016$`} and ${`$\\alpha = 2.5029$`} depend only on the shape of the peak. The peak must be rounded like ${`$1 - ax^2$`}. They do not care about the rest of the formula. The logistic map, ${`$r\\sin(\\pi x)$`}, and any one-hump map with a rounded peak all give the same constants. The reason: ${`$\\delta$`} and ${`$\\alpha$`} are eigenvalues of the doubling operator, not features of one map.`
      },
      {
        q: `A map has a period-2 orbit with points ${`$x_1$`} and ${`$x_2$`}. The derivative at ${`$x_1$`} is ${`$f'(x_1) = -1.3$`} and at ${`$x_2$`} is ${`$f'(x_2) = -0.6$`}. Is this 2-cycle stable?`,
        a: `For a 2-cycle, multiply the two slopes: ${`$|f'(x_1) \\cdot f'(x_2)| = |-1.3 \\times -0.6| = 0.78$`}. Since ${`$0.78 < 1$`}, the 2-cycle is stable. This product is the eigenvalue of the doubled map at either point. The cycle is stable when the product is under 1 in size.`
      },
      {
        q: `Explain what the cobweb diagram reveals about an orbit, and how you read it.`,
        a: `The cobweb draws one orbit by hand. Plot the parabola ${`$y = rx(1-x)$`} and the line ${`$y = x$`}. Start at ${`$x_0$`}. Go up to the parabola: that height is ${`$x_1$`}. Go sideways to the line: you are at ${`$(x_1, x_1)$`}. Repeat. The shape tells the story. A spiral into one point means a stable fixed point. A closed square means a 2-cycle. A tangle that fills the box means chaos.`
      },
      {
        q: `The logistic map at ${`$r = 4$`} has Lyapunov exponent ${`$\\sigma = \\ln 2$`}. Starting from ${`$x_0 = 0.3000$`} and ${`$x_0' = 0.3001$`}, how many iterations does it take for the separation to grow from ${`$10^{-4}$`} to about ${`$0.1$`}?`,
        a: `The gap grows as ${`$\\Delta x_n \\approx \\Delta x_0 \\, e^{n \\sigma} = 10^{-4} e^{n \\ln 2} = 10^{-4} \\cdot 2^n$`}. Set ${`$10^{-4} \\cdot 2^n = 0.1$`}: ${`$2^n = 1000$`}, so ${`$n = \\log_2(1000) \\approx 10$`} steps. This matches the worked table, where the gap hits about 820 units of ${`$10^{-4}$`} (that is, 0.082) by step 10.`
      },
      {
        q: `What is the invariant distribution of the logistic map at ${`$r = 4$`}? Where does the orbit spend the most time?`,
        a: `The invariant distribution is ${`$P(x) = (1/\\pi)[x(1-x)]^{-1/2}$`}. It spikes at ${`$x = 0$`} and ${`$x = 1$`}, so the orbit spends the most time near the two ends. It spends the least time near ${`$x = 0.5$`}, where ${`$P$`} is smallest. This is the arc-sine law. You get it by mapping the flat distribution of the tent map through ${`$\\bar{x} = (2/\\pi)\\arcsin(\\sqrt{x})$`}.`
      },
      {
        q: `The exact solution of the logistic map at ${`$r = 4$`} is ${`$x_n = \\tfrac{1}{2}(1 - \\cos(2^{n+1}\\varphi_0))$`}. Why does this formula show sensitivity to initial conditions?`,
        a: `The formula uses ${`$\\cos(2^{n+1}\\varphi_0)$`} with ${`$\\varphi_0 = \\arccos(1-2x_0)$`}. The angle ${`$2^{n+1}\\varphi_0$`} doubles each step. A tiny shift ${`$\\delta\\varphi_0$`} in the start angle grows to ${`$2^n \\delta\\varphi_0$`} after ${`$n$`} steps. Once that passes ${`$\\pi$`}, the two cosines are at totally different angles and the orbits no longer track. Since ${`$2^n$`} grows fast, this takes only a few steps. That confirms ${`$\\sigma = \\ln 2$`}.`
      },
      {
        q: `The renormalization equation gives an approximate accumulation point ${`$C_\\infty = (1-\\sqrt{17})/4 \\approx -0.781$`} and an approximate Feigenbaum constant ${`$\\delta \\approx 5.12$`}. Why is the exact value ${`$\\delta = 4.6692$`} different?`,
        a: `The algebraic method treats the map as a pure parabola near its peak. It then drops higher-order terms to get ${`$C' = -2C^2 + 2C + 2$`}. Those cuts add error. The exact ${`$\\delta$`} needs the full functional equation ${`$g^*(x) = \\alpha g^*(g^*(x/\\alpha))$`} solved on a computer, with nothing dropped. So 5.12 correctly shows that ${`$\\delta$`} exists and is universal, but misses the real value by about 10%.`
      },
      {
        q: `The tent map has Lyapunov exponent ${`$\\sigma = \\ln 2$`}. Derive this directly from the definition without using conjugacy.`,
        a: `The tent map is ${`$f(x) = 2x$`} for ${`$x < 1/2$`} and ${`$2-2x$`} for ${`$x > 1/2$`}. In both pieces, ${`$|f'(x)| = 2$`}. So ${`$\\sigma = \\lim (1/N) \\sum \\ln|f'(x_i)| = \\lim (1/N) \\sum \\ln 2 = \\ln 2$`}. Every term in the sum is ${`$\\ln 2$`}, so the average is ${`$\\ln 2$`} no matter the orbit. That gives ${`$\\sigma = \\ln 2 \\approx 0.693$`} at ${`$a = 1$`}.`
      },
      {
        q: `Period 3 implies chaos. What does this mean in terms of the logistic map? Give a concrete value of ${`$r$`} where the implication is visible.`,
        a: `There is a theorem: any continuous map of an interval with a period-3 orbit also has orbits of every period. The logistic map has a stable period-3 orbit near ${`$r \\approx 3.83$`}. So at that same ${`$r$`}, orbits of period 5, 7, 11, and every integer also exist. There are also countless starting points whose orbits never repeat. The theorem does not say chaos rules at that ${`$r$`}. The period-3 orbit can be stable while those aperiodic orbits are unstable. But the full skeleton of chaos is already there.`
      },
      {
        q: `Transfer: A biological model uses the map ${`$x_{n+1} = \\mu x_n e^{-x_n}$`} (Ricker map). This also has a single hump. What period-doubling sequence do you predict as ${`$\\mu$`} increases, and what is the ratio of successive bifurcation gaps?`,
        a: `The Ricker map has one hump with a rounded peak at ${`$x = 1$`}, so it is in the same universality class as the logistic map. You predict: a fixed point at low ${`$\\mu$`}, then period 2, 4, 8, a pile-up at some ${`$\\mu_\\infty$`}, then chaos for ${`$\\mu > \\mu_\\infty$`}. The ratio of gaps homes in on ${`$\\delta = 4.6692016$`}. The ${`$\\mu$`} thresholds differ from the logistic map's, but the ratios match.`
      },
      {
        q: `What is a superstable cycle? At what value of ${`$r$`} does the superstable fixed point of the logistic map occur?`,
        a: `A superstable cycle is one that includes the peak point of the map. For the quadratic map that peak is ${`$x = 0$`}, so ${`$f^{(2^n)}(0) = 0$`}. The product of slopes around the cycle is then zero, which is the strongest possible stability. For the logistic map, the superstable fixed point is at ${`$r = 2$`}, where ${`$f'(x^*) = 0$`} (shown above). A superstable cycle sits at the center of each stable-cycle window.`
      },
      {
        q: `Transfer: The Lyapunov exponent near ${`$r_\\infty$`} scales as ${`$\\sigma \\sim |r - r_\\infty|^\\eta$`} with ${`$\\eta = \\ln 2 / \\ln \\delta \\approx 0.4498$`}. What does this say about how sharply the chaos threshold is approached?`,
        a: `The exponent ${`$\\eta \\approx 0.45$`} means ${`$\\sigma$`} grows as a power law, not a straight line, as you leave ${`$r_\\infty$`}. Since ${`$\\eta < 1$`}, ${`$\\sigma$`} shoots up fast from zero then eases off. Right at ${`$r = r_\\infty$`}, ${`$\\sigma = 0$`} exactly, since the orbit sits at the edge of chaos. A tiny step above ${`$r_\\infty$`} gives a small positive ${`$\\sigma$`}. You get this power law from scaling arguments near the doubling fixed point.`
      },
      {
        q: `Elaborate: Why is it possible for the logistic map to show a period-3 window inside a chaotic region? Is the orbit at ${`$r \\approx 3.83$`} really periodic?`,
        a: `The map is deterministic, so at any fixed ${`$r$`} the orbit from any start is fully set. At ${`$r \\approx 3.83$`}, the period-3 orbit is stable and its Lyapunov exponent is negative. From almost any start, the orbit lands on the 3-cycle once the early wobble dies off. So yes, it is truly periodic there. The chaos on each side means nearby ${`$r$`} values give chaotic orbits, but at the window value the cycle wins. Windows inside chaos are a normal feature of one-hump 1D maps.`
      },
      {
        q: `Predict: If you start two orbits at ${`$x_0 = 0.5$`} and ${`$x_0' = 0.5 + 10^{-10}$`} with ${`$r = 3.2$`} (2-cycle region), how do they compare after 100 steps?`,
        a: `At ${`$r = 3.2$`}, you are below the chaos threshold and the Lyapunov exponent is negative. Both orbits fall onto the stable 2-cycle at 0.51304 and 0.79946. With a negative exponent, the gap ${`$|x_n - x_n'|$`} shrinks each step. After 100 steps the two orbits look identical: both sit on the same 2-cycle. In the periodic region the start point is forgotten. In the chaotic region it matters forever.`
      },
      {
        q: `Self-explain: The Lyapunov exponent can be computed as a time average or as a spatial average over the invariant distribution. Why are they equal for chaotic orbits?`,
        a: `The time average is ${`$\\sigma = \\lim (1/N)\\sum \\ln|f'(x_i)|$`} along one orbit. The space average is ${`$\\sigma = \\int P(x) \\ln|f'(x)| dx$`} over the distribution. They match when the system is ergodic: the time the orbit spends near each ${`$x$`} equals its weight ${`$P(x)$`}. A chaotic orbit with this property visits all of ${`$[0,1]$`} at the rate ${`$P(x)$`} sets. The ergodic theorem then makes the two averages equal. This is the same trick that lets you swap time averages for ensemble averages in thermodynamics.`
      },
      {
        q: `The 4-cycle at ${`$r = 3.5$`} has values 0.501, 0.875, 0.383, 0.827. Verify one step of the cycle.`,
        a: `Compute ${`$3.5 \\times 0.501 \\times (1 - 0.501) = 3.5 \\times 0.501 \\times 0.499 = 3.5 \\times 0.2500 \\approx 0.875$`}. The first value maps to the second. Check the next one too: ${`$3.5 \\times 0.875 \\times 0.125 = 3.5 \\times 0.1094 \\approx 0.383$`}. The orbit hits all four in order, then returns to 0.501 on the fourth step.`
      },
      {
        q: `Elaborate: Why do the Feigenbaum constants appear in every physical system that undergoes period-doubling, including Rayleigh-Benard convection experiments?`,
        a: `Feigenbaum's theory shows ${`$\\delta$`} and ${`$\\alpha$`} depend only on the rounded shape of the peak in the underlying 1D map. Any real system that reduces to a one-hump map near its chaos threshold gets the same constants. Rayleigh-Benard convection reduces to such a 1D map near the onset of chaos. Convection experiments measured the doublings and found ${`$\\delta \\approx 4.4$`}, close to 4.6692 given the measurement limits. This confirmed the prediction. The constants belong to the renormalization group, not to any one system.`
      },
      {
        q: `Method selection: You want to determine whether a dynamical system is chaotic. Name three different quantities or tests you could compute, and briefly explain what each tells you.`,
        a: `First, the Lyapunov exponent ${`$\\sigma = \\lim (1/N)\\sum \\ln|f'(x_i)|$`}. Positive means chaos, negative means periodic, zero means a threshold. Second, the bifurcation diagram. Plot the attractor against the parameter. Chaos shows a dense cloud, cycles show clean curves. Third, the cobweb for one start. A chaotic orbit fills the box with a messy staircase. A cycle closes into a polygon. A fourth test, when it fits, is the Fourier spectrum. Chaos gives broadband noise, cycles give sharp peaks.`
      },
      {
        q: `Error detection: A student claims the logistic map has a stable fixed point at ${`$r = 3.5$`}. Find the error.`,
        a: `The fixed point is ${`$x^* = (r-1)/r = 2.5/3.5 \\approx 0.714$`}. Its slope is ${`$f'(x^*) = 2 - r = 2 - 3.5 = -1.5$`}. Since ${`$|f'(x^*)| = 1.5 > 1$`}, the fixed point is unstable at ${`$r = 3.5$`}. The stable attractor there is the 4-cycle 0.501, 0.875, 0.383, 0.827. The student mixed up existence (the fixed point lives for all ${`$r > 1$`}) with stability (only ${`$1 < r < 3$`}).`
      },
      {
        q: `Transfer: The noise power near the chaos threshold scales as ${`$N(r) \\propto (r_\\infty - r)^{1.52}$`}. If you halve the distance ${`$r_\\infty - r$`}, by what factor does the noise power change?`,
        a: `Halving ${`$r_\\infty - r$`} multiplies the noise power by ${`$(1/2)^{1.52}$`}. Compute: ${`$2^{-1.52} = e^{-1.52 \\ln 2} = e^{-1.053} \\approx 0.349$`}. So the noise power drops to about 35%. The exponent ${`$\\sigma_N \\approx 1.52$`} is universal: it depends only on ${`$\\delta$`} and on how fast the spectral peaks shrink at each doubling. This is one more universal prediction of the renormalization theory.`
      }
    ],

    reference: {
      category: 'Quick Reference',
      title: 'Logistic Map and Feigenbaum Universality',
      sections: [
        <>
          <h2>Core Equations</h2>

          <h3>The Logistic Map</h3>
          <div className="lrn-eq lrn-eq-hero">
            <span>{`$$x_{n+1} = r \\, x_n (1 - x_n), \\quad 0 < x < 1, \\quad 1 \\leq r \\leq 4$$`}</span>
          </div>
          <p>
            When to use: the standard one-hump map for period-doubling and universality. You will
            also see the knob written as {`$a$`} or {`$\\mu$`}. All three names mean the same thing.
          </p>

          <h3>Fixed Point and Stability</h3>
          <div className="lrn-eq">
            <span>{`$$x^* = \\frac{r-1}{r}, \\quad f'(x^*) = 2-r, \\quad \\text{stable for } 1 < r < 3$$`}</span>
          </div>
          <p>
            When to use: checking whether an orbit lands on the fixed point or splits into a cycle.
          </p>

          <h3>Perturbation Near Fixed Point</h3>
          <div className="lrn-eq">
            <span>{`$$x_n = x^* + \\delta_n, \\quad \\delta_{n+1} = (2-r)\\,\\delta_n, \\quad \\delta_n = \\delta_0 (2-r)^n$$`}</span>
          </div>
          <p>
            When to use: first-order stability. The gap shrinks if {`$|2-r| < 1$`} and grows if{' '}
            {`$|2-r| > 1$`}.
          </p>

          <h3>Feigenbaum Delta (Scaling Along r)</h3>
          <div className="lrn-eq lrn-eq-hero">
            <span>{`$$\\delta = \\lim_{n \\to \\infty} \\frac{r_n - r_{n-1}}{r_{n+1} - r_n} = 4.6692016\\ldots$$`}</span>
          </div>
          <p>
            When to use: finding how fast thresholds pack together, estimating {`$r_\\infty$`} from
            a few thresholds, or checking if a system has a rounded-peak universality class.
          </p>

          <h3>Feigenbaum Alpha (Scaling Along x)</h3>
          <div className="lrn-eq">
            <span>{`$$\\alpha = \\lim_{n \\to \\infty} \\frac{x_{n,+} - x_{n,-}}{x_{n+1,+} - x_{n+1,-}} = 2.5029078\\ldots$$`}</span>
          </div>
          <p>
            When to use: measuring the up-down branch spreads in the bifurcation diagram, or
            checking the self-similarity in {`$x$`}.
          </p>

          <h3>Lyapunov Exponent</h3>
          <div className="lrn-eq">
            <span>{`$$\\sigma = \\lim_{N \\to \\infty} \\frac{1}{N} \\sum_{i=1}^{N} \\ln |r(1 - 2x_i)|$$`}</span>
          </div>
          <p>
            When to use: diagnosing chaos ({`$\\sigma > 0$`}), periodicity ({`$\\sigma < 0$`}), or
            bifurcation threshold ({`$\\sigma = 0$`}).
          </p>

          <h3>Critical Scaling of Lyapunov Exponent</h3>
          <div className="lrn-eq">
            <span>{`$$\\sigma \\sim |r - r_\\infty|^\\eta, \\quad \\eta = \\frac{\\ln 2}{\\ln \\delta} \\approx 0.4498$$`}</span>
          </div>
          <p>
            When to use: near the chaos onset {`$r_\\infty$`}, to describe how quickly chaos
            switches on.
          </p>

          <h3>Exact Invariant Distribution at r = 4</h3>
          <div className="lrn-eq">
            <span>{`$$P(x) = \\frac{1}{\\pi \\sqrt{x(1-x)}}, \\quad x \\in (0,1)$$`}</span>
          </div>
          <p>
            When to use: computing time-averaged quantities for a chaotic orbit at {`$r = 4$`}.
            Also: the Lyapunov exponent as a spatial average gives{' '}
            {`$\\sigma = \\int_0^1 P(x) \\ln|r(1-2x)|\\, dx = \\ln 2$`} at {`$r = 4$`}.
          </p>

          <h3>Universal Fixed-Point Equation</h3>
          <div className="lrn-eq">
            <span>{`$$g^*(x) = \\alpha \\, g^*\\!\\left(g^*\\!\\left(\\frac{x}{\\alpha}\\right)\\right), \\quad \\alpha = -2.5029$$`}</span>
          </div>
          <p>
            When to use: the functional equation whose solution proves universality. The single
            unstable eigenvalue of its linearization equals {`$\\delta$`}.
          </p>

          <h2>Period-Doubling Threshold Table</h2>
          <div className="lrn-definition">
            <div className="lrn-definition-desc">
              <div>
                <p>
                  <strong>Bifurcation thresholds (logistic map):</strong>
                </p>
                <p>
                  {`$r_1 = 3.000000$`} (1 to 2). {`$r_2 = 3.449490$`} (2 to 4). {`$r_3 = 3.544090$`}{' '}
                  (4 to 8).
                </p>
                <p>
                  {`$r_4 = 3.564407$`} (8 to 16). {`$r_5 = 3.568759$`} (16 to 32).{' '}
                  {`$r_6 = 3.569692$`} (32 to 64).
                </p>
                <p>
                  <strong>Accumulation point:</strong> {`$r_\\infty = 3.5699456\\ldots$`}
                </p>
                <p>
                  <strong>Period-3 window:</strong> born at {`$r \\approx 3.8284$`}, extends to
                  {`$r \\approx 3.857$`}.
                </p>
              </div>
            </div>
          </div>

          <h2>Iteration Table Summary</h2>
          <div className="lrn-definition">
            <div className="lrn-definition-desc">
              <div>
                <p>
                  <strong>{`$r = 2.0$`}:</strong> Reaches {`$x^* = 0.500$`} within 10 steps from any{' '}
                  {`$x_0 \\in (0,1)$`}.
                </p>
                <p>
                  <strong>{`$r = 3.2$`}:</strong> Settles into the 2-cycle{' '}
                  {`$\\{0.51304, 0.79946\\}$`} after about 10 steps.
                </p>
                <p>
                  <strong>{`$r = 3.5$`}:</strong> 4-cycle {`$\\{0.501, 0.875, 0.383, 0.827\\}$`}.
                </p>
                <p>
                  <strong>{`$r = 4.0$`}:</strong> Chaos. Two orbits from {`$x_0 = 0.3000$`} and{' '}
                  {`$x_0' = 0.3001$`} split apart. The gap climbs from {`$10^{-4}$`} to{' '}
                  {`$\\approx 0.08$`} in 10 steps.
                </p>
              </div>
            </div>
          </div>

          <div>
            <BifurcationDiagram C={C} />
          </div>
        </>
      ]
    },

    customCss: null
  }

  return config
}

export default function LogisticMapAndFeigenbaum() {
  const config = useConfig()
  return <LearningTemplate config={config} />
}
