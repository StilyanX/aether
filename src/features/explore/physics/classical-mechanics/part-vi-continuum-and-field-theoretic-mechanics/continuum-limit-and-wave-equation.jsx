import { LearningTemplate } from '../../../../../components/learning/learning-template'
import {
  ChainOscillation,
  ContinuumLimitChain,
  FiniteDifferenceToDerivative,
  TravelingWave,
  WaveSpeedVsModulus,
  LatticeDispersion
} from '../../../../../components/viz'

export default function ContinuumLimitAndWaveEquation() {
  const config = {
    cssPrefix: 'clwe',
    documentTitle: 'Continuum Limit from Coupled Oscillators to the Wave Equation - AETHER',
    learning: {
      groupTitle: 'Continuum and Field-Theoretic Mechanics',
      category: 'Module 6',
      title: 'Continuum Limit from Coupled Oscillators to the Wave Equation',
      subtitle:
        'A continuous elastic rod is secretly a chain of coupled masses. Shrink the spacing to zero and the wave equation falls out.',
      sections: [
        // SECTION 1: THE DISCRETE CHAIN
        <>
          <h2>The Discrete Chain: Masses on Springs</h2>

          <div className="lrn-predict">
            <span className="lrn-predict-label">Predict</span>
            <p>
              You have 8 identical masses connected in a line by identical springs. If you pluck one
              mass sideways, what happens to the others?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                Each spring pulls its two neighbors. The disturbance spreads along the chain as a
                wave. Every mass oscillates, but each one lags the previous by a small phase. This
                is the discrete version of a wave on a string.
              </p>
            </details>
          </div>

          <p>
            Start with {`$N$`} identical particles of mass {`$m$`} strung along a line. They sit at
            equilibrium positions, where each particle rests when nothing pushes it, separated by
            distance {`$a$`}. Each neighboring pair is linked by a spring of constant {`$k$`}. Let
            {`$\\eta_i$`} be the displacement of the {`$i$`}-th particle from its rest position.
            Only transverse (or longitudinal) displacements matter here; we ignore everything else.
          </p>

          <p>
            <strong>Kinetic energy.</strong> Each particle contributes{' '}
            {`$\\frac{1}{2}m\\dot{\\eta}_i^2$`}. Summing over all {`$N$`} particles gives the total
            kinetic energy:
          </p>

          <div className="lrn-eq">
            <span>{`$$T = \\frac{1}{2}\\sum_i m\\,\\dot{\\eta}_i^2$$`}</span>
          </div>

          <p>
            <strong>Potential energy.</strong> Each spring stretches by{' '}
            {`$(\\eta_{i+1} - \\eta_i)$`} when its neighbors move by different amounts. A spring of
            constant {`$k$`} stores energy {`$\\frac{1}{2}k(\\text{stretch})^2$`}, so:
          </p>

          <div className="lrn-eq">
            <span>{`$$V = \\frac{1}{2}\\sum_i k\\,(\\eta_{i+1} - \\eta_i)^2$$`}</span>
          </div>

          <p>The full Lagrangian is {`$L = T - V$`}:</p>

          <div className="lrn-eq">
            <span>{`$$L = \\frac{1}{2}\\sum_i \\bigl[m\\,\\dot{\\eta}_i^2 - k\\,(\\eta_{i+1} - \\eta_i)^2\\bigr]$$`}</span>
          </div>

          <ChainOscillation />

          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">Why is this true?</span>
            <p>
              The spring energy {`$\\frac{1}{2}k(\\eta_{i+1}-\\eta_i)^2$`} uses the actual
              extension: the difference in displacements of the two ends. If both move by the same
              amount, the spring stays at its natural length and stores nothing. Only relative
              displacement costs energy.
            </p>
          </div>

          <h3>The Lagrangian Rewritten for the Continuum Limit</h3>

          <p>
            Factor an explicit {`$a$`} inside each term. Multiply and divide by {`$a$`} carefully so
            the combinations {`$\\frac{m}{a}$`} and {`$ka$`} appear:
          </p>

          <div className="lrn-eq">
            <span>{`$$L = \\frac{1}{2}\\sum_i a\\left[\\frac{m}{a}\\,\\dot{\\eta}_i^2 - ka\\left(\\frac{\\eta_{i+1} - \\eta_i}{a}\\right)^2\\right] = \\sum_i a\\,L_i$$`}</span>
          </div>

          <p>
            Nothing has changed mathematically. You have just written each term as{' '}
            {`$a \\times L_i$`} where {`$L_i$`} is the Lagrangian density for the {`$i$`}-th cell:
            the Lagrangian for a single cell, measured per unit length. This form makes what happens
            when {`$a \\to 0$`} perfectly clear.
          </p>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">Self-Explain</span>
            <p>
              Why factor out the {`$a$`} before taking the limit? What would break if you just let{' '}
              {`$a \\to 0$`} in the original sum without factoring?
            </p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                Without factoring, {`$m \\to 0$`} and {`$k \\to \\infty$`} separately as you add
                more and more lighter, stiffer springs to fill the same rod. The product{' '}
                {`$\\frac{m}{a}$`} and {`$ka$`} are the quantities that stay finite as{' '}
                {`$a \\to 0$`}. Factoring the {`$a$`} out isolates exactly these finite ratios, so
                the limit is well-defined.
              </p>
            </details>
          </div>
        </>,

        // SECTION 2: EQUATIONS OF MOTION
        <>
          <h2>The Discrete Equations of Motion</h2>

          <div className="lrn-predict">
            <span className="lrn-predict-label">Predict</span>
            <p>
              Apply the Euler-Lagrange equation to {`$\\eta_i$`} in the discrete Lagrangian. Which
              neighboring displacements will appear in the equation of motion for mass {`$i$`}?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                The spring to the right connects {`$\\eta_{i+1}$`} and {`$\\eta_i$`}. The spring to
                the left connects {`$\\eta_i$`} and {`$\\eta_{i-1}$`}. Both springs exert forces on
                mass {`$i$`}, so {`$\\eta_{i+1}$`}, {`$\\eta_i$`}, and {`$\\eta_{i-1}$`} all appear.
              </p>
            </details>
          </div>

          <p>
            Apply the Euler-Lagrange equation{' '}
            {`$\\frac{d}{dt}\\frac{\\partial L}{\\partial \\dot{\\eta}_i} - \\frac{\\partial L}{\\partial \\eta_i} = 0$`}{' '}
            to the rewritten Lagrangian. The result is:
          </p>

          <div className="lrn-eq">
            <span>{`$$\\frac{m}{a}\\,\\ddot{\\eta}_i - ka\\,\\frac{\\eta_{i+1} - \\eta_i}{a^2} + ka\\,\\frac{\\eta_i - \\eta_{i-1}}{a^2} = 0$$`}</span>
          </div>

          <p>
            This is the exact equation for the coupled-oscillator chain. Every term has a direct
            physical meaning. The term {`$\\frac{m}{a}\\ddot{\\eta}_i$`} is mass-per-length times
            acceleration. The other two terms are the net spring force from both neighbors. Each is
            a slope built from the displacement difference between two neighboring beads.
          </p>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">Self-Explain</span>
            <p>
              Look at the two difference terms: {`$(\\eta_{i+1}-\\eta_i)/a^2$`} and{' '}
              {`$(\\eta_i - \\eta_{i-1})/a^2$`}. What is the sign of their combination when mass{' '}
              {`$i$`} sits above both neighbors? Does that sign make physical sense?
            </p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                If {`$\\eta_i > \\eta_{i+1}$`} and {`$\\eta_i > \\eta_{i-1}$`} then both differences
                are negative, so the net term pulls mass {`$i$`} down, back toward the line. The
                springs on both sides pull a raised mass back, exactly as expected for a restoring
                force. The equation of motion is a discrete restoring-force law.
              </p>
            </details>
          </div>
        </>,

        // SECTION 3: CONTINUUM LIMIT IDENTIFICATIONS
        <>
          <h2>Taking the Continuum Limit</h2>

          <div className="lrn-predict">
            <span className="lrn-predict-label">Predict</span>
            <p>
              As you add more and more beads to the chain while keeping the total length and total
              mass fixed, what happens to {`$m$`} and {`$k$`} individually? What combinations stay
              fixed?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                Adding more beads means each bead has less mass ({`$m \\to 0$`}) and the spacing
                shrinks ({`$a \\to 0$`}). To keep the total mass constant, the mass per unit length{' '}
                {`$\\mu = m/a$`} must stay fixed. Stiffer springs hold the rod together; the product{' '}
                {`$Y = ka$`} stays fixed and equals Young's modulus.
              </p>
            </details>
          </div>

          <h3>Identification 1: {`$m/a \\to \\mu$`} (mass per unit length)</h3>

          <p>
            As the spacing {`$a$`} shrinks, keep the total mass of the rod fixed. Then the mass per
            unit length {`$\\mu = m/a$`} stays constant. In the limit {`$a \\to 0$`} this ratio
            becomes the linear mass density {`$\\mu$`} of the rod. Its units are kilograms per
            metre.
          </p>

          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">Why is this true?</span>
            <p>
              Imagine slicing a steel rod into {`$N$`} discs. Each disc has mass {`$m = M/N$`} and
              thickness {`$a = L/N$`}. Their ratio is {`$m/a = M/L = \\mu$`}, independent of how
              finely you slice. This ratio is a property of the material, not of the discretization.
            </p>
          </div>

          <h3>Identification 2: {`$ka \\to Y$`} (Young's modulus) via Hooke's law</h3>

          <p>
            For an elastic rod, Hooke's law says force equals Young's modulus times strain. Strain
            is elongation per unit length:
          </p>

          <div className="lrn-eq">
            <span>{`$$F = Y\\xi, \\quad \\xi = \\frac{\\eta_{i+1} - \\eta_i}{a}$$`}</span>
          </div>

          <p>
            The spring force in our chain is{' '}
            {`$F = k(\\eta_{i+1} - \\eta_i) = ka \\cdot \\dfrac{\\eta_{i+1} - \\eta_i}{a}$`}.
            Compare this to {`$F = Y \\xi$`}: both have the same form with strain{' '}
            {`$\\xi = (\\eta_{i+1}-\\eta_i)/a$`}. So the spring constant times spacing equals
            Young's modulus:
          </p>

          <div className="lrn-eq">
            <span>{`$$ka \\to Y$$`}</span>
          </div>

          <p>
            This product stays finite for a clear reason. As the spacing shrinks, the springs must
            get stiffer to hold the same overall stiffness. A shorter spring is stiffer:{' '}
            {`$k \\propto 1/a$`}, so the product {`$ka$`} stays constant while {`$k$`} alone blows
            up.
          </p>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">Self-Explain</span>
            <p>What physical property of the rod does {`$Y$`} measure?</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                {`$Y$`} measures how much force per unit area you need to stretch or compress the
                material by a fraction of its length. It is a material constant, fixed by what the
                rod is made of, not an artifact of how finely you chop it into beads.
              </p>
            </details>
          </div>

          <ContinuumLimitChain />

          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Discrete {`$\\eta_i$`}</span>
              <p>
                A finite set of generalized coordinates (the independent values that pin down the
                system's configuration), one per particle, labeled by the integer {`$i$`}. The sum
                {`$\\sum_i a$`} adds up the value in each cell times the cell width, which
                approximates an integral.
              </p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Field {`$\\eta(x)$`}</span>
              <p>
                One generalized coordinate for every point {`$x \\in [0, L]$`} on the rod, which is
                infinitely many. The sum becomes {`$\\int dx$`} as {`$a \\to 0$`}.
              </p>
            </div>
          </div>
        </>,

        // SECTION 4: FINITE DIFFERENCE TO DERIVATIVE
        <>
          <h2>Finite Differences Become Spatial Derivatives</h2>

          <div className="lrn-predict">
            <span className="lrn-predict-label">Predict</span>
            <p>
              The discrete strain is {`$(\\eta_{i+1} - \\eta_i)/a$`}. Write{' '}
              {`$\\eta_{i+1} = \\eta(x + a)$`} and {`$\\eta_i = \\eta(x)$`}. What does this ratio
              approach as {`$a \\to 0$`}?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                It approaches the derivative {`$\\partial\\eta/\\partial x$`}. The next line works
                out why.
              </p>
            </details>
          </div>

          <p>
            Replace the discrete label {`$i$`} with the continuous position {`$x = ia$`}. Then{' '}
            {`$\\eta_i = \\eta(x)$`} and {`$\\eta_{i+1} = \\eta(x + a)$`}. The finite difference is:
          </p>

          <div className="lrn-eq">
            <span>{`$$\\frac{\\eta_{i+1} - \\eta_i}{a} = \\frac{\\eta(x+a) - \\eta(x)}{a} \\xrightarrow{a \\to 0} \\frac{\\partial \\eta}{\\partial x}$$`}</span>
          </div>

          <FiniteDifferenceToDerivative />

          <p>
            Watch the slider. When {`$a$`} is large, the slope of the line through the two points
            (the secant slope) differs from the slope right at one point (the tangent slope). As{' '}
            {`$a \\to 0$`}, the gap between them vanishes. This is how the discrete strain{' '}
            {`$\\xi = (\\eta_{i+1}-\\eta_i)/a$`} turns into the continuum strain{' '}
            {`$\\partial\\eta/\\partial x$`}.
          </p>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">Self-Explain</span>
            <p>
              The two-term combination in the equations of motion is{' '}
              {`$\\frac{(\\eta_{i+1}-\\eta_i)/a - (\\eta_i - \\eta_{i-1})/a}{a}$`}. This is a
              difference of two first-difference slopes, divided by {`$a$`} again. What quantity
              does this approach?
            </p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                Each {`$(\\eta_{i+1}-\\eta_i)/a$`} is the first spatial difference, approaching
                {`$\\partial\\eta/\\partial x$`} at two adjacent points spaced {`$a$`} apart. Their
                difference divided by {`$a$`} is a second finite difference, approaching the second
                spatial derivative {`$\\partial^2\\eta/\\partial x^2$`}. This is exactly the spatial
                curvature of the displacement field.
              </p>
            </details>
          </div>

          <h3>x as a Label, Not a Coordinate</h3>

          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Index {`$i$`} (label)</span>
              <p>
                Just a name: it says which mass. The mass does not "move in {`$i$`}-space."
                {`$i$`} is not a dynamical variable.
              </p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Position {`$x$`} (label)</span>
              <p>
                Also just a name: it says which material point. {`$x$`} enters the Lagrangian as a
                parameter, the way time {`$t$`} does. The dynamical variable is {`$\\eta(x, t)$`}.
              </p>
            </div>
          </div>

          <p className="lrn-insight">
            {`$x$`} is not a generalized coordinate. A degree of freedom is one independent way the
            system can move. Confusing {`$x$`} with a degree of freedom is the central mistake when
            you first meet field theory. The thing that moves is the whole shape {`$\\eta(x)$`},
            with one free value at every point along the rod, not the position {`$x$`} itself.
          </p>
        </>,

        // SECTION 5: CONTINUUM LAGRANGIAN
        <>
          <h2>The Continuum Lagrangian</h2>

          <div className="lrn-predict">
            <span className="lrn-predict-label">Predict</span>
            <p>
              In the limit {`$a \\to 0$`}, the sum {`$\\sum_i a$`} becomes an integral. The density
              inside the brackets contains {`$m/a = \\mu$`} and {`$ka = Y$`} and a derivative. What
              does the Lagrangian become?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>The sum turns into an integral over the rod. The worked steps follow below.</p>
            </details>
          </div>

          <p>
            Apply all four substitutions at once. The discrete Lagrangian{' '}
            {`$\\sum_i a\\left[\\frac{m}{a}\\dot{\\eta}_i^2 - ka\\left(\\frac{\\eta_{i+1}-\\eta_i}{a}\\right)^2\\right]$`}{' '}
            turns into:
          </p>

          <div className="lrn-eq lrn-eq-hero">
            <span>{`$$L = \\frac{1}{2}\\int\\!\\left[\\mu\\,\\dot{\\eta}^2 - Y\\left(\\frac{\\partial\\eta}{\\partial x}\\right)^2\\right]dx$$`}</span>
          </div>

          <p>
            This is the continuum Lagrangian. The integrand{' '}
            {`$\\mathcal{L} = \\frac{1}{2}\\left[\\mu\\dot{\\eta}^2 - Y(\\partial_x\\eta)^2\\right]$`}{' '}
            is the Lagrangian density. The integral runs over the full length of the rod.
          </p>

          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">Why is this true?</span>
            <p>
              The Riemann sum {`$\\sum_i a \\cdot f(x_i)$`} is exactly how you build an integral:
              take the function value at each cell center, multiply by the cell width {`$a$`}, and
              sum. In the limit {`$a \\to 0$`} this is the definition of {`$\\int f(x)\\,dx$`}. All
              the physics is in the density {`$\\mathcal{L}$`}; the integral just "turns the crank"
              over space.
            </p>
          </div>

          <div className="lrn-faded">
            <div className="lrn-faded-phase">
              <span className="lrn-faded-label">Complete Example</span>
              <p>
                Start with the discrete Lagrangian factored form and take the limit step by step.
              </p>
              <ol className="lrn-list">
                <li>
                  Write{' '}
                  {`$L = \\sum_i a\\left[\\frac{m}{a}\\dot{\\eta}_i^2 - ka\\left(\\frac{\\eta_{i+1}-\\eta_i}{a}\\right)^2\\right] \\times \\frac{1}{2}$`}
                  .
                </li>
                <li>
                  Replace {`$m/a \\to \\mu$`} and {`$ka \\to Y$`}.
                </li>
                <li>Replace {`$(\\eta_{i+1}-\\eta_i)/a \\to \\partial_x\\eta$`}.</li>
                <li>Replace {`$\\sum_i a \\to \\int dx$`}.</li>
                <li>
                  Result:{' '}
                  {`$L = \\frac{1}{2}\\int\\left[\\mu\\dot{\\eta}^2 - Y(\\partial_x\\eta)^2\\right]dx$`}
                  .
                </li>
              </ol>
            </div>
            <div className="lrn-faded-phase">
              <span className="lrn-faded-label">Your Turn: Partial</span>
              <p>
                Start from{' '}
                {`$L = \\frac{1}{2}\\sum_i a\\left[\\mu\\dot{\\eta}_i^2 - Y(\\eta_{i+1}-\\eta_i)^2/a^2\\right]$`}
                . Fill in the two missing replacements:
              </p>
              <ol className="lrn-list">
                <li>Replace {`$\\sum_i a$`} by _____.</li>
                <li>Replace {`$(\\eta_{i+1}-\\eta_i)/a$`} by _____.</li>
              </ol>
            </div>
            <div className="lrn-faded-phase">
              <span className="lrn-faded-label">Independent Practice</span>
              <p>
                A chain where each cell also has its own spring pulling it back to the baseline (an
                on-site restoring force) adds a term {`$-k_s\\eta_i^2$`} per cell. Take the
                continuum limit of the full Lagrangian and write the Lagrangian density.
              </p>
            </div>
          </div>
        </>,

        // SECTION 6: WAVE EQUATION
        <>
          <h2>The Wave Equation and Wave Speed</h2>

          <div className="lrn-predict">
            <span className="lrn-predict-label">Predict</span>
            <p>
              The density {`$\\mathcal{L}$`} now depends on a space derivative{' '}
              {`$\\partial_x\\eta$`}
              as well as the time derivative {`$\\dot{\\eta}$`}. The single-particle Euler-Lagrange
              equation only had a time term. What new term do you expect the field version to add?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                A space term that mirrors the time term: a derivative in {`$x$`} of
                {`$\\partial\\mathcal{L}/\\partial(\\partial_x\\eta)$`}. Space and time enter the
                density the same way, so they enter the equation of motion the same way.
              </p>
            </details>
          </div>

          <h3>The Field Euler-Lagrange Equation</h3>

          <p>
            For one particle, the action is {`$S = \\int L\\,dt$`}, and making it stationary gives
            {`$\\frac{d}{dt}\\frac{\\partial L}{\\partial\\dot{\\eta}} - \\frac{\\partial L}{\\partial\\eta} = 0$`}
            . For the field, the action is a double integral over time and space:{' '}
            {`$S = \\int\\!\\!\\int \\mathcal{L}\\,dx\\,dt$`}. The density depends on {`$\\eta$`},
            on
            {`$\\dot{\\eta}$`}, and now also on {`$\\partial_x\\eta$`}.
          </p>

          <p>
            Make this action stationary. The {`$\\dot{\\eta}$`} dependence gives a time term,
            exactly as before. The new {`$\\partial_x\\eta$`} dependence gives a matching space
            term. You get it by integrating by parts in {`$x$`} (the same move that produced the
            time term by parts in {`$t$`}). Integration by parts moves a derivative off the
            variation and onto
            {`$\\partial\\mathcal{L}/\\partial(\\partial_x\\eta)$`}, and it does so with the same
            sign as the time term. The result is the field Euler-Lagrange equation:
          </p>

          <div className="lrn-eq">
            <span>{`$$\\frac{\\partial}{\\partial t}\\frac{\\partial\\mathcal{L}}{\\partial\\dot{\\eta}} + \\frac{\\partial}{\\partial x}\\frac{\\partial\\mathcal{L}}{\\partial(\\partial_x\\eta)} - \\frac{\\partial\\mathcal{L}}{\\partial\\eta} = 0$$`}</span>
          </div>

          <p>
            Both derivative terms carry a plus sign; the bare{' '}
            {`$\\partial\\mathcal{L}/\\partial\\eta$`}
            term carries a minus. Now apply it to our density
            {`$\\mathcal{L} = \\frac{1}{2}[\\mu\\dot{\\eta}^2 - Y(\\partial_x\\eta)^2]$`}. It has no
            bare {`$\\eta$`}, so {`$\\partial\\mathcal{L}/\\partial\\eta = 0$`}. The other two
            pieces are:
          </p>

          <ul className="lrn-list">
            <li>
              Time term:{' '}
              {`$\\frac{\\partial}{\\partial t}\\frac{\\partial\\mathcal{L}}{\\partial\\dot{\\eta}} = \\frac{\\partial}{\\partial t}(\\mu\\dot{\\eta}) = \\mu\\ddot{\\eta}$`}
            </li>
            <li>
              Space term: since
              {`$\\frac{\\partial\\mathcal{L}}{\\partial(\\partial_x\\eta)} = -Y\\partial_x\\eta$`},
              this gives{' '}
              {`$\\frac{\\partial}{\\partial x}(-Y\\partial_x\\eta) = -Y\\partial_x^2\\eta$`}
            </li>
          </ul>

          <p>Adding the two terms (the third is zero) gives the 1D wave equation:</p>

          <div className="lrn-eq lrn-eq-hero">
            <span>{`$$\\mu\\,\\frac{\\partial^2\\eta}{\\partial t^2} - Y\\,\\frac{\\partial^2\\eta}{\\partial x^2} = 0$$`}</span>
          </div>

          <p className="lrn-insight">
            This is the equation of motion for every small longitudinal oscillation of an elastic
            rod. It governs sound waves in solids, pressure waves in gases, and transverse waves on
            strings (with different constants). One derivation, many physical systems.
          </p>

          <h3>Wave Speed</h3>

          <p>
            Any fixed shape that slides along at speed {`$v$`} solves this equation. Write{' '}
            {`$\\eta = f(x - vt)$`}, a shape {`$f$`} sliding to the right. This is the d'Alembert
            form. Check it by the chain rule. Let {`$u = x - vt$`}. Then:
          </p>

          <div className="lrn-eq">
            <span>{`$$\\frac{\\partial^2\\eta}{\\partial t^2} = v^2 f''(u), \\qquad \\frac{\\partial^2\\eta}{\\partial x^2} = f''(u)$$`}</span>
          </div>

          <p>
            Put these into {`$\\mu\\,\\partial_t^2\\eta - Y\\,\\partial_x^2\\eta = 0$`}. The common
            factor {`$f''(u)$`} cancels, leaving {`$\\mu v^2 - Y = 0$`}. So the shape solves the
            wave equation for one speed only:
          </p>

          <div className="lrn-eq lrn-eq-hero">
            <span>{`$$v = \\sqrt{\\frac{Y}{\\mu}}$$`}</span>
          </div>

          <p>
            A left-moving shape {`$g(x + vt)$`} passes the same check: its time derivative also
            brings down a factor {`$v^2$`}, since {`$(+v)^2 = v^2$`}, so the cancellation works the
            same way. The general solution is the sum
            {`$\\eta = f(x - vt) + g(x + vt)$`}: any wave splits into a right-mover plus a
            left-mover. Stiff material (large {`$Y$`}) or light material (small {`$\\mu$`}) gives a
            fast wave. Heavy, floppy material gives a slow wave.
          </p>

          <WaveSpeedVsModulus />

          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">Why is this true?</span>
            <p>
              Substitute a trial solution {`$\\eta = A\\cos(kx - \\omega t)$`} into the wave
              equation. The left side gives {`$-\\mu\\omega^2\\eta + Yk^2\\eta = 0$`}, so{' '}
              {`$\\omega^2 = (Y/\\mu)k^2$`}. The wave speed is {`$v = \\omega/k = \\sqrt{Y/\\mu}$`}.
            </p>
          </div>

          <TravelingWave />

          <h3>When Does the Continuum Picture Hold?</h3>

          <p>
            We found the continuum wave speed. Now ask when the discrete chain actually behaves like
            a smooth rod. A wave has a wavelength {`$\\lambda$`}, the distance over which it
            repeats. The wavenumber {`$k = 2\\pi/\\lambda$`} counts how many wave cycles fit in a
            given length. (This {`$k$`} is the wavenumber. It is a different quantity from the
            spring constant
            {`$k_s$`} used earlier in this page.)
          </p>

          <p>
            The continuum picture works only when the wavelength is much longer than the spacing
            between beads: {`$\\lambda \\gg a$`}, which is the same as {`$k \\ll \\pi/a$`}. When the
            wavelength gets as short as a couple of beads, the smooth rod is a bad model. The
            shortest wave the lattice can carry has {`$k = \\pi/a$`}. Physicists call this special
            wavenumber the Brillouin zone edge.
          </p>

          <LatticeDispersion />

          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">Why is this true?</span>
            <p>
              A dispersion relation is the rule that links a wave's frequency to its wavenumber. For
              the discrete chain it is {`$\\omega = 2\\sqrt{k_s/m}\\,|\\sin(ka/2)|$`}, where
              {`$k_s$`} is the spring constant and {`$k$`} is the wavenumber. For small {`$k$`},
              {`$\\sin(ka/2) \\approx ka/2$`}, so {`$\\omega \\approx \\sqrt{k_s/m}\\cdot ka = vk$`}
              : frequency grows in step with wavenumber, exactly as the continuum wave equation
              predicts. At larger {`$k$`}, the sine bends away from this straight line and flattens
              out at the zone edge
              {`$k = \\pi/a$`}. There the discrete chain and the smooth rod no longer agree.
            </p>
          </div>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">Self-Explain</span>
            <p>
              The wave speed formula {`$v = \\sqrt{Y/\\mu}$`} comes from the ratio of two material
              constants. If you doubled the density of the rod while keeping {`$Y$`} the same, how
              would the wave speed change and why?
            </p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                Doubling the density means {`$\\mu \\to 2\\mu$`}. Then{' '}
                {`$v = \\sqrt{Y/(2\\mu)} = v_0/\\sqrt{2}$`}. The wave slows by a factor of
                {`$\\sqrt{2}$`}. More mass means more inertia, which resists the acceleration the
                spring force can produce. The same stiffness now has to push heavier material, so
                the wave propagates more slowly.
              </p>
            </details>
          </div>
        </>
      ]
    },

    practice: [
      {
        q: `What are the two finite-limit combinations that survive as the lattice spacing $a \\to 0$? State their physical meaning.`,
        a: `$m/a \\to \\mu$ (linear mass density, mass per unit length) and $ka \\to Y$ (Young's modulus, force per unit strain). Both stay finite because as you add more, lighter, stiffer springs to fill the same rod, mass and spring constant go to zero and infinity respectively, but their combinations $m/a$ and $ka$ remain fixed material properties.`
      },
      {
        q: `Derive the discrete kinetic energy $T$ and potential energy $V$ for a chain of $N$ masses $m$ connected by springs of constant $k$ with displacements $\\eta_i$.`,
        a: `$T = \\frac{1}{2}\\sum_i m\\dot{\\eta}_i^2$ because each particle contributes $\\frac{1}{2}m\\dot{\\eta}_i^2$. $V = \\frac{1}{2}\\sum_i k(\\eta_{i+1}-\\eta_i)^2$ because each spring stretches by the difference in displacements of its two ends, and spring energy is $\\frac{1}{2}k(\\text{stretch})^2$. These follow directly from Newton's second law or Lagrangian mechanics applied to the system.`
      },
      {
        q: `Why must $x$ be treated as a parameter (like time $t$), not as a generalized coordinate, in the field Lagrangian?`,
        a: `In Lagrangian mechanics, generalized coordinates are the dynamical variables that the system "moves in." For the field, the dynamical variable is $\\eta(x,t)$, the displacement at each point. $x$ is merely a label that identifies which material point; it does not change as the system evolves. Treating $x$ as a coordinate would be like treating time as a position: a mix-up of two different kinds of thing. The field $\\eta(x,t)$ is infinitely many generalized coordinates, one per value of $x$.`
      },
      {
        q: `A chain has $N=6$ beads and springs. Write the equation of motion for bead $i=3$ (the third bead), assuming beads are labeled $1$ through $6$.`,
        a: `Apply Euler-Lagrange to $\\eta_3$: $\\frac{m}{a}\\ddot{\\eta}_3 - ka\\frac{\\eta_4 - \\eta_3}{a^2} + ka\\frac{\\eta_3 - \\eta_2}{a^2} = 0$. This simplifies to $m\\ddot{\\eta}_3 = k(\\eta_4 - \\eta_3) - k(\\eta_3 - \\eta_2) = k(\\eta_4 + \\eta_2 - 2\\eta_3)$. The two spring forces pull bead 3 toward its neighbors. The right-hand side is a discrete second difference, the precursor of the spatial second derivative.`
      },
      {
        q: `State the 1D wave equation and wave speed for a continuous elastic rod with Young's modulus $Y$ and linear mass density $\\mu$.`,
        a: `The wave equation is $\\mu\\partial_t^2\\eta - Y\\partial_x^2\\eta = 0$. The wave speed is $v = \\sqrt{Y/\\mu}$. This follows from applying the field Euler-Lagrange equation to the continuum Lagrangian density $\\mathcal{L} = \\frac{1}{2}(\\mu\\dot{\\eta}^2 - Y(\\partial_x\\eta)^2)$. Substituting a trial wave $\\eta = A\\cos(kx-\\omega t)$ gives $\\omega = vk$ with $v = \\sqrt{Y/\\mu}$.`
      },
      {
        q: `Explain in your own words why $(\\eta_{i+1} - \\eta_i)/a$ approaches $\\partial\\eta/\\partial x$ as $a \\to 0$.`,
        a: `Write $\\eta_{i+1} = \\eta(x+a)$ and $\\eta_i = \\eta(x)$, identifying $x = ia$. Then $(\\eta_{i+1}-\\eta_i)/a = (\\eta(x+a)-\\eta(x))/a$. This is exactly the definition of the derivative: the limit of the ratio of the change in the function to the change in its argument, as that change goes to zero. So the discrete strain of one cell of the chain becomes the spatial gradient of the displacement field.`
      },
      {
        q: `Transfer: A rope under tension $\\tau$ has linear mass density $\\rho$. Its transverse displacement $y(x,t)$ obeys $\\rho\\ddot{y} = \\tau\\partial_x^2 y$. What is the wave speed? Identify the analogy with the elastic rod.`,
        a: `The wave speed is $v = \\sqrt{\\tau/\\rho}$. Compare with the rod: tension $\\tau$ plays the role of Young's modulus $Y$ (it sets the restoring force per unit strain), and mass density $\\rho$ plays the role of $\\mu$. The wave equation has identical form. The derivation would follow the same steps: discrete transverse chain, take $a \\to 0$, get the wave equation. The two systems are mathematically the same with different physical constants.`
      },
      {
        q: `What does the term $ka \\cdot \\xi$ mean, and why does comparing it to Hooke's law $F = Y\\xi$ give the identification $ka = Y$?`,
        a: `The spring force on one spring stretched by strain $\\xi = (\\eta_{i+1}-\\eta_i)/a$ is $F = k(\\eta_{i+1}-\\eta_i) = ka \\cdot \\xi$. Hooke's law for an elastic rod states $F = Y\\xi$ where $Y$ is Young's modulus and $\\xi$ is elongation per unit length. Both expressions have force equals a constant times strain, with identical strain $\\xi$. Matching coefficients gives $ka = Y$. The product $ka$ is the macroscopic stiffness that survives the continuum limit.`
      },
      {
        q: `Error detection: A student writes the continuum Lagrangian as $L = \\frac{1}{2}\\int\\left[m\\dot{\\eta}^2 - k(\\partial_x\\eta)^2\\right]dx$. What is wrong?`,
        a: `The student forgot the continuum limit substitutions. The integral contains $m$ (mass per particle) and $k$ (spring constant per spring), both of which go to zero as $a \\to 0$. The correct Lagrangian uses the finite limiting combinations: $m/a \\to \\mu$ (mass density) and $ka \\to Y$ (Young's modulus). The correct form is $L = \\frac{1}{2}\\int[\\mu\\dot{\\eta}^2 - Y(\\partial_x\\eta)^2]dx$.`
      },
      {
        q: `A steel rod has Young's modulus $Y = 200 \\times 10^9$ Pa and density $\\rho = 7800$ kg/m$^3$. The linear mass density is $\\mu = \\rho A$ where $A$ is cross-sectional area. The wave speed formula $v = \\sqrt{Y/\\mu}$ simplifies in terms of volume density. What is the wave speed in steel?`,
        a: `For a uniform rod the linear mass density is $\\mu = \\rho A$, the volume density times the cross-section area $A$. The rod's stiffness scales with the same area $A$. So the area cancels, and the wave speed depends only on volume density: $v = \\sqrt{\\tfrac{Y}{\\rho}}$. Check the units: pascals divided by $\\tfrac{\\text{kg}}{\\text{m}^3}$ gives $\\tfrac{\\text{m}^2}{\\text{s}^2}$, and its square root is $\\tfrac{\\text{m}}{\\text{s}}$. Plugging in the numbers: $v = \\sqrt{\\tfrac{200 \\times 10^9}{7800}} \\approx \\sqrt{2.56 \\times 10^7} \\approx 5060$ $\\tfrac{\\text{m}}{\\text{s}}$. So sound travels about 5 km per second in steel, which matches measured values.`
      },
      {
        q: `Predict: If you double both $Y$ and $\\mu$ for a rod, what happens to the wave speed? What if you double only $Y$?`,
        a: `If both double: $v = \\sqrt{2Y/2\\mu} = \\sqrt{Y/\\mu}$, unchanged. Scaling both material properties together leaves the wave speed the same. If only $Y$ doubles: $v = \\sqrt{2Y/\\mu} = \\sqrt{2}\\cdot v_0$, so the speed increases by a factor of $\\sqrt{2} \\approx 1.41$. Stiffer material propagates waves faster because the restoring force is stronger relative to the inertia.`
      },
      {
        q: `Transfer: The continuum limit of $\\sum_i a$ gives $\\int dx$. Explain this in terms of Riemann sums without using any physics.`,
        a: `A Riemann sum for $\\int_0^L f(x)\\,dx$ with $N$ equal intervals of width $a = L/N$ is $\\sum_{i=1}^N f(x_i)\\cdot a$. This is exactly the structure in the Lagrangian: $\\sum_i a \\cdot L_i$ with $L_i = L(x_i)$ the Lagrangian density at cell $i$. As $N \\to \\infty$ (equivalently $a \\to 0$ with $Na = L$ fixed), the Riemann sum converges to the integral by definition. The physics adds nothing to this mathematical fact. The Lagrangian density is just the function being integrated.`
      },
      {
        q: `Self-explain: In the equations of motion for bead $i$, why do the two difference terms have opposite signs? What would happen if they had the same sign?`,
        a: `The two terms are $(\\eta_{i+1}-\\eta_i)/a^2$ (force from right spring, pulling bead $i$ toward $\\eta_{i+1}$) and $(\\eta_i-\\eta_{i-1})/a^2$ (force from left spring, pulling bead $i$ toward $\\eta_{i-1}$). They have opposite signs because the right spring pulls right when $\\eta_{i+1} > \\eta_i$, and the left spring pulls left when $\\eta_{i-1} > \\eta_i$. If they had the same sign, both springs would always pull in the same direction regardless of configuration. That would not describe restoring forces and the system would not oscillate.`
      },
      {
        q: `Elaborate: Why does the continuum limit require $a \\to 0$ and $N \\to \\infty$ simultaneously with $Na = L$ fixed, rather than just $a \\to 0$?`,
        a: `$L = Na$ is the total length of the rod, a fixed physical quantity. If you let $a \\to 0$ without increasing $N$, the rod shrinks to zero length. The constraint $Na = L$ keeps the physical rod size constant while you refine the discretization. This is like computing a Riemann integral: you must add more intervals as you make each one narrower, to cover the same total domain. The physics (the rod) is fixed; only the mathematical description becomes finer.`
      },
      {
        q: `The discrete normal mode frequencies are $\\omega_n = 2\\sqrt{k_s/m}\\,|\\sin(n\\pi/(2(N+1)))|$ for $n = 1, \\ldots, N$, where $k_s$ is the spring constant. For small $n$ (long-wavelength modes), show this approaches the continuum result $\\omega = vk$ with wavenumber $k = n\\pi/L$.`,
        a: `For small argument, $\\sin(\\theta) \\approx \\theta$. So $\\omega_n \\approx 2\\sqrt{k_s/m} \\cdot n\\pi/(2(N+1)) = \\sqrt{k_s/m}\\cdot n\\pi/(N+1)$. Since $L = (N+1)a$ and $v = a\\sqrt{k_s/m}$ (the continuum speed), we get $\\omega_n \\approx (v/a) \\cdot n\\pi a/L = v \\cdot n\\pi/L = vk_n$ with $k_n = n\\pi/L$. The long-wavelength modes obey the linear dispersion relation of the continuum wave equation.`
      }
    ],

    reference: {
      category: 'Quick Reference',
      title: 'Continuum Limit and the Wave Equation',
      sections: [
        <>
          <h2>Formulas</h2>

          <div className="ref-formula">
            <div className="ref-formula-name">Discrete kinetic energy</div>
            <div className="ref-formula-eq">{`$$T = \\frac{1}{2}\\sum_i m\\,\\dot{\\eta}_i^2$$`}</div>
            <div className="ref-formula-desc">
              <strong>When to use:</strong> Computing the kinetic energy of a finite chain of
              {`$N$`} particles of mass {`$m$`} with transverse displacements {`$\\eta_i$`}.
            </div>
          </div>

          <div className="ref-formula">
            <div className="ref-formula-name">Discrete potential energy</div>
            <div className="ref-formula-eq">{`$$V = \\frac{1}{2}\\sum_i k\\,(\\eta_{i+1} - \\eta_i)^2$$`}</div>
            <div className="ref-formula-desc">
              <strong>When to use:</strong> Computing stored spring energy; each spring stretches by
              the difference in displacements of its two end particles.
            </div>
          </div>

          <div className="ref-formula">
            <div className="ref-formula-name">Lagrangian (continuum-ready form)</div>
            <div className="ref-formula-eq">{`$$L = \\frac{1}{2}\\sum_i a\\left[\\frac{m}{a}\\,\\dot{\\eta}_i^2 - ka\\left(\\frac{\\eta_{i+1}-\\eta_i}{a}\\right)^2\\right]$$`}</div>
            <div className="ref-formula-desc">
              <strong>When to use:</strong> Starting point for the continuum limit; this form
              isolates the ratios {`$m/a$`} and {`$ka$`} that stay finite as {`$a \\to 0$`}.
            </div>
          </div>

          <div className="ref-formula">
            <div className="ref-formula-name">Discrete equations of motion</div>
            <div className="ref-formula-eq">{`$$\\frac{m}{a}\\,\\ddot{\\eta}_i - ka\\,\\frac{\\eta_{i+1} - \\eta_i}{a^2} + ka\\,\\frac{\\eta_i - \\eta_{i-1}}{a^2} = 0$$`}</div>
            <div className="ref-formula-desc">
              <strong>When to use:</strong> Equation of motion for bead {`$i$`} in the discrete
              chain; obtained by Euler-Lagrange on the continuum-ready Lagrangian.
            </div>
          </div>

          <div className="ref-formula">
            <div className="ref-formula-name">Hooke's law for elastic rod</div>
            <div className="ref-formula-eq">{`$$F = Y\\xi, \\quad \\xi = \\frac{\\eta_{i+1} - \\eta_i}{a}$$`}</div>
            <div className="ref-formula-desc">
              <strong>When to use:</strong> Identifying {`$ka = Y$`} (Young's modulus) by matching
              the spring force {`$F = ka\\xi$`} to the continuum Hooke's law {`$F = Y\\xi$`}. Some
              texts write Young's modulus as {`$E$`} instead of {`$Y$`}.
            </div>
          </div>

          <div className="ref-formula">
            <div className="ref-formula-name">Finite difference becomes derivative</div>
            <div className="ref-formula-eq">{`$$\\frac{\\eta(x+a) - \\eta(x)}{a} \\xrightarrow{a \\to 0} \\frac{\\partial\\eta}{\\partial x}$$`}</div>
            <div className="ref-formula-desc">
              <strong>When to use:</strong> Converting discrete strain to continuum strain; the key
              kinematic step in the limit.
            </div>
          </div>

          <div className="ref-formula">
            <div className="ref-formula-name">Continuum Lagrangian</div>
            <div className="ref-formula-eq">{`$$L = \\frac{1}{2}\\int\\!\\left[\\mu\\,\\dot{\\eta}^2 - Y\\!\\left(\\frac{\\partial\\eta}{\\partial x}\\right)^2\\right]dx$$`}</div>
            <div className="ref-formula-desc">
              <strong>When to use:</strong> Starting point for deriving the wave equation via the
              field Euler-Lagrange equation. Valid when wavelength {`$\\gg a$`}.
            </div>
          </div>

          <div className="ref-formula">
            <div className="ref-formula-name">Wave equation (1D elastic rod)</div>
            <div className="ref-formula-eq">{`$$\\mu\\,\\frac{\\partial^2\\eta}{\\partial t^2} - Y\\,\\frac{\\partial^2\\eta}{\\partial x^2} = 0$$`}</div>
            <div className="ref-formula-desc">
              <strong>When to use:</strong> Equation of motion for every small longitudinal
              oscillation of an elastic rod; the Euler-Lagrange equation of the continuum
              Lagrangian.
            </div>
          </div>

          <div className="ref-formula">
            <div className="ref-formula-name">Wave speed</div>
            <div className="ref-formula-eq">{`$$v = \\sqrt{\\frac{Y}{\\mu}}$$`}</div>
            <div className="ref-formula-desc">
              <strong>When to use:</strong> Computing the propagation speed of longitudinal elastic
              waves. Follows from substituting a plane-wave solution into the wave equation. Larger
              stiffness or smaller density gives faster waves.
            </div>
          </div>
        </>,

        <>
          <h2>Discrete to Continuum Dictionary</h2>

          <table>
            <thead>
              <tr>
                <th>Discrete quantity</th>
                <th>Continuum limit</th>
                <th>Physical meaning</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{`$m/a$`}</td>
                <td>{`$\\mu$`}</td>
                <td>Linear mass density ({`$\\text{kg}/\\text{m}$`})</td>
              </tr>
              <tr>
                <td>{`$ka$`}</td>
                <td>{`$Y$`}</td>
                <td>Young's modulus (Pa = N/m²)</td>
              </tr>
              <tr>
                <td>{`$\\eta_i$`}</td>
                <td>{`$\\eta(x)$`}</td>
                <td>Displacement field (generalized coordinate)</td>
              </tr>
              <tr>
                <td>{`$(\\eta_{i+1}-\\eta_i)/a$`}</td>
                <td>{`$\\partial\\eta/\\partial x$`}</td>
                <td>Strain (dimensionless)</td>
              </tr>
              <tr>
                <td>{`$\\sum_i a$`}</td>
                <td>{`$\\int dx$`}</td>
                <td>Riemann sum becomes integral</td>
              </tr>
              <tr>
                <td>Index {`$i$`} (integer label)</td>
                <td>Position {`$x$`} (continuous parameter)</td>
                <td>Label for material point, not a coordinate</td>
              </tr>
            </tbody>
          </table>
        </>
      ]
    },

    customCss: null
  }

  return <LearningTemplate config={config} />
}
