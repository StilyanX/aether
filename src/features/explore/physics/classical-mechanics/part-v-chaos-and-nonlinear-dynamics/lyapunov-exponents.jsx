import { LearningTemplate } from '../../../../../components/learning/learning-template'
import {
  LyapSpectrum,
  LyapDivergence,
  LyapThreeRegimes,
  LyapRunningAverage,
  LyapCatMap
} from '../../../../../components/viz'

export default function LyapunovExponents() {
  const config = {
    cssPrefix: 'lyap',
    documentTitle: 'Lyapunov Exponents - AETHER',
    learning: {
      category: 'Module 5',
      groupTitle: 'Chaos and Nonlinear Dynamics',
      title: 'Lyapunov Exponents',
      subtitle: 'The number that measures how fast chaos grows.',
      sections: [
        <>
          <h2>What Is Sensitive Dependence?</h2>
          <p>
            Two ships leave the same harbor, one millimeter apart. In a calm, predictable ocean,
            they stay close forever. In a chaotic ocean, they end up on opposite sides of the world.
            This is <strong>sensitive dependence on initial conditions</strong>: tiny differences
            grow into huge ones. Lyapunov exponents measure exactly how fast that growth happens.
          </p>
          <p>
            This matters whenever you need to predict the future of a system. If the exponent is
            positive, prediction has a time limit. No amount of better measurement helps beyond that
            limit, because errors grow exponentially.
          </p>

          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              You track two orbits in a chaotic system. After 10 steps, their separation has grown
              from {`$10^{-6}$`} to {`$10^{-3}$`}. What do you expect after 20 steps?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                The separation grows by a factor of {`$10^3$`} every 10 steps, so after 20 steps you
                expect roughly {`$10^{-3} \\times 10^3 = 1$`}. At that point the orbits have
                diverged by an amount comparable to the system size, and the approximation breaks
                down. Exponential growth means each equal interval multiplies the separation by the
                same factor.
              </p>
            </details>
          </div>

          <h3>Separation Grows Exponentially</h3>
          <p>
            Start two nearby orbits a tiny distance {`$s_0$`} apart at {`$t = 0$`}. In a chaotic
            region, the separation grows as:
          </p>
          <div className="lrn-eq lrn-eq-hero">
            <span>{`$$s(t) \\sim s_0 \\, e^{\\lambda t}$$`}</span>
          </div>
          <p>For an iterated map (a rule applied step by step), the same idea gives:</p>
          <div className="lrn-eq">
            <span>{`$$s(n) \\sim s_0 \\, e^{n\\lambda}$$`}</span>
          </div>
          <p>
            The constant {`$\\lambda$`} is the <strong>Lyapunov exponent</strong>. It tells you the
            average rate of exponential separation. The name comes from the Russian mathematician
            Aleksandr Lyapunov, whose 1907 work laid the foundation. Benettin, Oseledec, and Pesin
            connected it to chaos in the 1970s.
          </p>

          <LyapThreeRegimes />

          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>
              Two nearby trajectories differ by a small vector {`$\\mathbf{w}(t)$`}. Linearizing the
              equations of motion around the reference orbit gives{' '}
              {`$d\\mathbf{w}/dt = M(t)\\,\\mathbf{w}$`}, where {`$M$`} is the Jacobian matrix (the
              matrix of partial derivatives that linearizes the motion). The norm{' '}
              {`$\\|\\mathbf{w}\\|$`} grows (or shrinks) at a rate set by the eigenvalues of {`$M$`}
              . Over long times, the fastest-growing direction wins and the growth is purely
              exponential. If {`$\\|\\mathbf{w}\\| \\sim e^{\\lambda t}$`}, then{' '}
              {`$\\ln\\|\\mathbf{w}\\| = \\lambda t$`}, so dividing by {`$t$`} returns{' '}
              {`$\\lambda$`} directly. Taking the time-averaged logarithm of {`$\\|\\mathbf{w}\\|$`}
              extracts that growth rate: that limit is exactly {`$\\lambda$`}.
            </p>
          </div>

          <h3>What the Sign of {`$\\lambda$`} Tells You</h3>
          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">{`$\\lambda > 0$`}: Chaos</span>
              <p>
                Nearby orbits diverge exponentially. The system is chaotic. A strange attractor (a
                fractal set that nearby orbits get pulled onto) may exist if the system is
                dissipative (it loses energy, so phase volume shrinks). The time scale for chaos to
                become visible is the Lyapunov time {`$\\tau \\sim 1/\\lambda$`}: the time for a
                separation to grow by a factor of {`$e$`}.
              </p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">{`$\\lambda = 0$`}: Marginal</span>
              <p>
                Orbits separate at most linearly. This happens along the flow direction itself, and
                in integrable systems (ones you can solve exactly, with no chaos) where no
                exponential instability exists.
              </p>
            </div>
          </div>
          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">{`$\\lambda < 0$`}: Stable</span>
              <p>
                Nearby orbits converge. The system attracts to a fixed point or limit cycle (a
                closed loop the orbit settles onto). The time constant for convergence is{' '}
                {`$\\tau = 1/|\\lambda|$`}. A damped pendulum has{' '}
                {`$s(t) \\sim s_0 e^{-|\\lambda|t}$`}.
              </p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Maps vs. Flows</span>
              <p>
                For flows, {`$\\lambda$`} has units of {`$\\text{time}^{-1}$`}. For maps,
                {`$\\lambda$`} is dimensionless (per step). One exponent in a flow always equals
                zero: the direction along the orbit itself. Maps drop this zero (the next section
                explains why every flow carries it).
              </p>
            </div>
          </div>

          <h3>The Solar System Is Chaotic</h3>
          <p>
            Long numerical simulations project the solar system 100 billion years into the future.
            They show a finite probability that Mercury is ejected or collides with Venus within 3.5
            billion years. Using {`$\\tau = 1/|\\lambda|$`} with {`$\\tau = 3.5 \\text{ Gyr}$`}
            gives {`$\\lambda \\approx 3 \\times 10^{-10}\\text{ yr}^{-1}$`}.
          </p>
          <p>
            The eccentricity of Mars could swing up to 0.2, and axial tilts can shift by tens of
            degrees. KAM tori would normally trap orbits and keep these swings small. But the KAM
            theorem gives no protection here: strong resonances break its small-perturbation
            assumption.
          </p>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>
              Why does a Lyapunov time of 3.5 Gyr for Mercury still allow us to predict its orbit
              accurately for thousands of years?
            </p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                Lyapunov time {`$\\tau = 1/\\lambda$`} is the time for errors to grow by a factor of{' '}
                {`$e \\approx 2.7$`}. Starting from an initial position uncertainty of, say,
                {`$10^{-15}$`} of the system size, it takes {`$\\approx 35 \\tau$`} for the error to
                reach 1 (system size). That is still 35 times 3.5 Gyr, far beyond human timescales.
                In general the prediction horizon is{' '}
                {`$T_{\\text{predict}} \\sim \\tau \\ln(1/\\epsilon)$`}, where {`$\\epsilon$`} is
                how well you know the start. Chaos does not mean the system is immediately
                unpredictable. It sets a finite prediction horizon that depends on how precisely you
                know the initial state.
              </p>
            </details>
          </div>
        </>,

        <>
          <h2>The Formal Definition</h2>
          <p>
            When you need to quantify chaos precisely, you reach for the formal definition. It works
            for any autonomous system (one whose rules do not change with time). It gives a number
            that is independent of the metric (the way you measure distance) you use for phase
            space.
          </p>

          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              You run the same system from two starting points, separated by{' '}
              {`$\\|\\mathbf{w}_0\\| = 10^{-8}$`}. After time {`$t = 50$`}, the separation is{' '}
              {`$\\|\\mathbf{w}\\| = 0.3$`}. What is your best estimate of {`$\\sigma_1$`}?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                {`$\\sigma_1 \\approx \\frac{1}{t} \\ln \\frac{\\|\\mathbf{w}(t)\\|}{\\|\\mathbf{w}_0\\|} = \\frac{1}{50} \\ln \\frac{0.3}{10^{-8}} = \\frac{\\ln(3 \\times 10^7)}{50} \\approx \\frac{17.2}{50} \\approx 0.34$`}
                . This is a finite-time estimate; the true exponent requires {`$t \\to \\infty$`}{' '}
                and
                {`$\\|\\mathbf{w}_0\\| \\to 0$`}.
              </p>
            </details>
          </div>

          <h3>The Variational Equation</h3>
          <p>Start with an M-dimensional autonomous system:</p>
          <div className="lrn-eq">
            <span>{`$$\\frac{dx_i}{dt} = V_i(\\mathbf{x}), \\quad i = 1, \\ldots, M$$`}</span>
          </div>
          <p>
            Write a nearby trajectory as {`$\\mathbf{x}(t) + \\mathbf{w}(t)$`}, where{' '}
            {`$\\mathbf{w}$`}
            is a small displacement. Linearizing gives the <strong>variational equation</strong>:
          </p>
          <div className="lrn-eq">
            <span>{`$$\\frac{d\\mathbf{w}}{dt} = M(\\mathbf{x}(t))\\,\\mathbf{w}, \\quad M = \\frac{\\partial V}{\\partial x}$$`}</span>
          </div>
          <p>
            The matrix {`$M$`} is the Jacobian of the velocity field, evaluated along the reference
            orbit. The tangent vector {`$\\mathbf{w}$`} rides along with the reference orbit and
            stretches or contracts according to {`$M$`}.
          </p>

          <h3>Definition of {`$\\sigma$`}</h3>
          <p>
            Let {`$d(\\mathbf{x}_0, t) = \\|\\mathbf{w}(t)\\|$`} be the norm of the tangent vector.
            The mean exponential rate of divergence is:
          </p>
          <div className="lrn-eq lrn-eq-hero">
            <span>{`$$\\sigma(\\mathbf{x}_0, \\mathbf{w}) = \\lim_{\\substack{t \\to \\infty \\\\ d(0) \\to 0}} \\frac{1}{t} \\ln \\frac{d(\\mathbf{x}_0, t)}{d(\\mathbf{x}_0, 0)}$$`}</span>
          </div>
          <p>
            Both limits are essential. Taking {`$t \\to \\infty$`} averages out short-time
            fluctuations. Taking {`$d(0) \\to 0$`} ensures you stay in the linear regime where the
            variational equation is valid. The result {`$\\sigma$`} is the Lyapunov characteristic
            exponent for the direction {`$\\mathbf{w}$`}.
          </p>

          <LyapDivergence />

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>
              Why must you take {`$d(0) \\to 0$`} in the definition? What goes wrong if you use a
              finite initial separation?
            </p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                The variational equation is a linearization: it treats {`$\\mathbf{w}$`} as
                infinitesimally small. Once {`$\\mathbf{w}$`} becomes finite, higher-order terms
                matter and the linear approximation fails. More concretely, a finite-separation
                orbit can cross into a different region of phase space (say, from a chaotic region
                into a regular region), giving you the wrong exponent. Starting infinitesimally
                close guarantees you stay in the same dynamical region and measure the local
                instability of that region.
              </p>
            </details>
          </div>

          <h3>The Lyapunov Spectrum</h3>
          <p>
            For an M-dimensional system, there are M independent directions in tangent space (the
            space of all small displacement vectors). The Oseledets theorem guarantees the existence
            of a special basis {`$\\{\\hat{e}_i\\}$`}
            such that:
          </p>
          <div className="lrn-eq">
            <span>{`$$\\sigma_i(\\mathbf{x}_0) = \\sigma(\\mathbf{x}_0, \\hat{e}_i), \\quad \\sigma_1 \\geq \\sigma_2 \\geq \\cdots \\geq \\sigma_M$$`}</span>
          </div>
          <p>
            This ordered set is the <strong>Lyapunov spectrum</strong>. The largest exponent{' '}
            {`$\\sigma_1$`}
            controls what you see: any generic initial tangent vector {`$\\mathbf{w}$`} has a
            component along {`$\\hat{e}_1$`}, so{' '}
            {`$\\sigma(\\mathbf{x}_0, \\mathbf{w}) = \\sigma_1$`} for almost all {`$\\mathbf{w}$`}.
            The full spectrum characterizes the structure of chaos more deeply.
          </p>

          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>
              For a periodic orbit with period {`$\\tau$`}, the variational equation defines a
              linear map
              {`$\\mathbf{w}_{n+1} = A \\mathbf{w}_n$`}. Starting from eigenvector {`$\\hat{e}_i$`}{' '}
              with eigenvalue {`$\\lambda_i$`}: after {`$n$`} periods,{' '}
              {`$\\mathbf{w}_n = \\lambda_i^n \\hat{e}_i$`}. Then{' '}
              {`$\\sigma(\\hat{e}_i) = \\lim (1/t) \\ln |\\lambda_i^n| = (1/\\tau) \\ln |\\lambda_i|$`}
              . This period map is the monodromy matrix from Part IV, and its eigenvalues are the
              Floquet multipliers, so a periodic orbit's Lyapunov exponents are just its Floquet
              exponents. For a generic {`$\\mathbf{w}_0$`}, the {`$\\hat{e}_1$`} component grows
              fastest and wins. Oseledets extended this to non-periodic orbits using the
              multiplicative ergodic theorem.
            </p>
          </div>

          <h3>Vanishing Exponent for Flows</h3>
          <p>
            Every continuous-time flow has at least one zero exponent. The tangent vector along the
            flow direction {`$V(\\mathbf{x})$`} grows only linearly with time (not exponentially),
            so
            {`$(1/t)\\ln(\\text{linear growth}) \\to 0$`} as {`$t \\to \\infty$`}.
          </p>
          <p>
            For Hamiltonian systems with {`$N$`} degrees of freedom ({`$M = 2N$`}), there is an
            additional symmetry: the symplectic structure (the geometric rule that pairs each
            position with its momentum) forces exponents to come in pairs. Here is why: the
            linearized flow's eigenvalues come in reciprocal pairs {`$\\lambda$`} and{' '}
            {`$1/\\lambda$`}, and since {`$\\ln(1/\\lambda) = -\\ln\\lambda$`}, the exponents come
            out as {`$\\pm\\sigma$`}. The pairing rule is:
          </p>
          <div className="lrn-eq">
            <span>{`$$\\sigma_i = -\\sigma_{2N - i + 1}$$`}</span>
          </div>
          <p>
            So a Hamiltonian system has at least two zero exponents. One comes from the flow
            direction along the orbit, as for any flow. The second comes from its paired momentum
            direction, fixed by energy conservation. On a single constant-energy surface you have
            already used up the energy direction, so at least one zero remains. Dissipative systems
            satisfy {`$\\sum_i \\sigma_i < 0$`} (phase volume contracts). Hamiltonian systems
            satisfy {`$\\sum_i \\sigma_i = 0$`} (Liouville's theorem: phase volume is preserved).
          </p>
        </>,

        <>
          <h2>Higher-Order Exponents and Volume Growth</h2>
          <p>
            When a single exponent is not enough, you need the full spectrum. The higher-order
            exponents tell you how volumes in phase space evolve. That connects directly to entropy
            and the structure of strange attractors.
          </p>

          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              A 4D Hamiltonian system has exponents{' '}
              {`$\\sigma_1 = 0.5, \\sigma_2 = 0, \\sigma_3 = 0, \\sigma_4 = -0.5$`}. What is the
              rate of growth of a 2D volume element? What about a 4D volume?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                The 2D volume growth rate is{' '}
                {`$\\sigma^{(2)} = \\sigma_1 + \\sigma_2 = 0.5 + 0 = 0.5$`}. The 4D (full
                phase-space) volume growth rate is{' '}
                {`$\\sigma^{(4)} = \\sum_i \\sigma_i = 0.5 + 0 + 0 + (-0.5) = 0$`}, confirming
                Liouville's theorem: phase volume is conserved for Hamiltonian systems.
              </p>
            </details>
          </div>

          <h3>p-Volume Growth Rate</h3>
          <p>
            Take {`$p$`} tangent vectors {`$\\mathbf{w}_1, \\ldots, \\mathbf{w}_p$`} and form the
            {`$p$`}-dimensional volume element{' '}
            {`$V_p = \\mathbf{w}_1 \\wedge \\cdots \\wedge \\mathbf{w}_p$`} (the wedge {`$\\wedge$`}{' '}
            builds the oriented volume of the box those vectors span). The order-{`$p$`} Lyapunov
            exponent measures how fast this volume grows:
          </p>
          <div className="lrn-eq">
            <span>{`$$\\sigma^{(p)}(\\mathbf{x}_0) = \\lim_{t \\to \\infty} \\frac{1}{t} \\ln \\frac{\\|V_p(\\mathbf{x}_0, t)\\|}{\\|V_p(\\mathbf{x}_0, 0)\\|}$$`}</span>
          </div>
          <p>The key result is the sum rule:</p>
          <div className="lrn-eq lrn-eq-hero">
            <span>{`$$\\sigma^{(p)} = \\sigma_1 + \\sigma_2 + \\cdots + \\sigma_p$$`}</span>
          </div>
          <p>
            For almost all choices of initial tangent vectors, the {`$p$`}-volume grows at the rate
            set by the sum of the {`$p$`} largest exponents.
          </p>
          <p>
            Setting {`$p = M$`} gives the full phase-space volume:
            {`$\\sigma^{(M)} = \\sum_{i=1}^{M} \\sigma_i$`}. This equals zero for Hamiltonian
            systems and is negative for dissipative systems. A Hamiltonian flow can stretch a shape
            along one direction while squeezing it along another, changing the shape but never the
            total volume.
          </p>

          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>
              A {`$p$`}-dimensional volume under a linear map grows by the product of the singular
              values (the stretch factors of the linear map) along the {`$p$`} fastest directions.
              Over long times, the Lyapunov basis diagonalizes this growth: each vector{' '}
              {`$\\mathbf{w}_i$`} aligns with {`$\\hat{e}_i$`} and grows at rate
              {`$\\sigma_i$`}. The volume grows at the product rate{' '}
              {`$e^{(\\sigma_1 + \\cdots + \\sigma_p)t}$`}. Taking logarithm and dividing by {`$t$`}{' '}
              gives {`$\\sigma^{(p)} = \\sigma_1 + \\cdots + \\sigma_p$`}.
            </p>
          </div>

          <h3>Exponents for Maps</h3>
          <p>
            For an M-dimensional iterated map {`$\\mathbf{x}_{n+1} = F(\\mathbf{x}_n)$`}, the
            Jacobian is {`$M = \\partial F / \\partial \\mathbf{x}$`}. After {`$n$`} steps, the
            product matrix is:
          </p>
          <div className="lrn-eq">
            <span>{`$$A_n = \\left[M(\\mathbf{x}_n) \\cdot M(\\mathbf{x}_{n-1}) \\cdots M(\\mathbf{x}_1)\\right]^{1/n}$$`}</span>
          </div>
          <p>
            The map exponents are{' '}
            {`$\\sigma_i^{\\text{map}} = \\lim_{n \\to \\infty} \\ln |\\lambda_i(n)|$`}, where{' '}
            {`$\\lambda_i(n)$`} are the eigenvalues of {`$A_n$`}. The {`$1/n$`} power makes{' '}
            {`$A_n$`} the geometric mean of the per-step Jacobians, so its eigenvalues capture the
            average stretch per step. Map and flow exponents relate via the mean return time{' '}
            {`$\\bar{\\tau}$`} (the average time between successive crossings) to the Poincare
            section (a slice through phase space the orbit keeps crossing):
          </p>
          <div className="lrn-eq">
            <span>{`$$\\sigma_i^{\\text{map}}(\\mathbf{x}) = \\bar{\\tau}\\, \\sigma_i(\\mathbf{x})$$`}</span>
          </div>
          <p>
            The Poincare map drops the along-flow zero exponent. An autonomous Hamiltonian flow
            drops two zero exponents, leaving {`$M - 2$`} non-trivial exponents in the section.
          </p>

          <p>
            For a one-dimensional map {`$x_{n+1} = F(x_n)$`}, the Jacobian is just the derivative{' '}
            {`$F'(x_n)$`}, so the whole spectrum collapses to a single number:
          </p>
          <div className="lrn-eq">
            <span>{`$$\\lambda = \\lim_{N \\to \\infty} \\frac{1}{N} \\sum_{n=0}^{N-1} \\ln|F'(x_n)|$$`}</span>
          </div>
          <p>
            You average the log of the local stretch factor {`$|F'(x_n)|$`} along the orbit. For the
            doubling map {`$x_{n+1} = 2x_n \\bmod 1$`}, the derivative is {`$2$`} at every point, so{' '}
            {`$\\lambda = \\ln 2$`} straight away.
          </p>
        </>,

        <>
          <h2>KS Entropy and the Pesin Relation</h2>
          <p>
            Sometimes you want a single number for how fast a chaotic system generates new
            information. That number is the Kolmogorov-Sinai (KS) entropy. Pesin's relation connects
            this information measure directly to the Lyapunov spectrum.
          </p>

          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              A two-degree-of-freedom Hamiltonian system has one positive exponent{' '}
              {`$\\sigma_1 = 0.4$`}
              and one zero exponent {`$\\sigma_2 = 0$`} (the flow direction). What is the KS
              entropy?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                The Pesin relation for a two-degree-of-freedom autonomous Hamiltonian gives
                {`$h_k = \\sigma_1 = 0.4$`}. You sum only positive exponents; the zero exponents
                (from the flow direction and energy conservation) do not contribute.
              </p>
            </details>
          </div>

          <h3>The Pesin Relation</h3>
          <p>
            The KS entropy {`$h_k$`} measures the rate of information generation. The Pesin relation
            says it equals the integral of positive Lyapunov exponents over phase space:
          </p>
          <div className="lrn-eq lrn-eq-hero">
            <span>{`$$h_k = \\int_\\mathcal{M} \\left[\\sum_{\\sigma_i > 0} \\sigma_i(\\mathbf{x})\\right] d\\mu$$`}</span>
          </div>
          <p>For a single connected stochastic region, this simplifies to:</p>
          <div className="lrn-eq">
            <span>{`$$h_k = \\sum_{\\sigma_i > 0} \\sigma_i$$`}</span>
          </div>
          <p>
            For a two-degree-of-freedom autonomous Hamiltonian: {`$h_k = \\sigma_1$`}. For the case
            where the largest exponent {`$\\bar{\\sigma}_1$`} is roughly constant over the chaotic
            region (which has stochastic fraction {`$\\mu_s$`}, the share of phase space that is
            chaotic):
          </p>
          <div className="lrn-eq">
            <span>{`$$h_k = \\mu_s \\, \\bar{\\sigma}_1$$`}</span>
          </div>

          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>
              KS entropy counts how many distinct trajectories a system can produce per unit time.
              Each positive Lyapunov direction doubles the number of distinguishable states
              exponentially fast. A system with positive exponents{' '}
              {`$\\sigma_1, \\sigma_2, \\ldots$`}
              produces distinct trajectories at rate {`$\\sigma_1 + \\sigma_2 + \\ldots$`} (summing
              all expanding directions). Negative exponents contract and merge trajectories; they do
              not create new information. Pesin's formula sums only the positive contributions,
              averaged over the invariant measure (how much time the orbit spends in each part) of
              the chaotic region.
            </p>
          </div>

          <h3>C-Systems: Arnold's Cat Map</h3>
          <p>
            A <strong>C-system</strong> (Anosov system) has the strongest possible chaos: the
            tangent space splits into three disjoint parts at every point: a zero-exponent direction
            (along the flow), a divergent direction, and a convergent direction. The Arnold cat
            mapping is the standard example:
          </p>
          <div className="lrn-eq">
            <span>{`$$\\begin{pmatrix} x_{n+1} \\\\ y_{n+1} \\end{pmatrix} = \\begin{pmatrix} 1 & 1 \\\\ 1 & 2 \\end{pmatrix} \\begin{pmatrix} x_n \\\\ y_n \\end{pmatrix} \\mod 1$$`}</span>
          </div>
          <p>The eigenvalues of the matrix are:</p>
          <div className="lrn-eq">
            <span>{`$$\\lambda_{1,2} = \\frac{3 \\pm \\sqrt{5}}{2}$$`}</span>
          </div>
          <p>
            Note that {`$\\lambda_1 = 1/\\lambda_2$`}, and {`$0 < \\lambda_2 < 1 < \\lambda_1$`}.
            Writing {`$\\lambda_{1,2} = e^{\\pm \\sigma}$`}:
          </p>
          <div className="lrn-eq">
            <span>{`$$\\sigma = \\ln\\frac{3 + \\sqrt{5}}{2} \\approx 0.962$$`}</span>
          </div>
          <p>
            This exponent is the same for <em>all</em> initial conditions: the cat map is uniformly
            hyperbolic. The KS entropy equals {`$h_k = \\sigma_1 = \\ln[(3+\\sqrt{5})/2]$`}.
            C-systems are structurally stable: a perturbed C-system remains a C-system.
            Near-integrable Hamiltonian systems are never C-systems.
          </p>

          <LyapCatMap />

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>
              Why does the cat map have the same Lyapunov exponent for all initial conditions, while
              a typical Hamiltonian system does not?
            </p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                The cat map is a linear map (followed by mod 1). Its Jacobian matrix is constant:
                the same at every point. So the eigenvalues of that matrix, which determine{' '}
                {`$\\sigma$`}, do not vary with position. In contrast, a Hamiltonian system like the
                standard map has a Jacobian that depends on {`$(x, y)$`}. In regular (KAM torus)
                regions the local instability is absent. In chaotic regions it is present. The
                exponent is an average, so it changes depending on where the orbit spends its time.
              </p>
            </details>
          </div>

          <h3>K-Systems and Bernoulli Shifts</h3>
          <p>
            Systems with positive KS entropy are called K-systems, and every C-system is one. The
            simplest example is the Bernoulli shift.
          </p>
          <p>
            A Bernoulli shift is the simplest chaotic system. Partition phase space into {`$M$`}{' '}
            cells and record which cell the orbit visits each step. Equal probabilities{' '}
            {`$p_i = 1/M$`} maximize the KS entropy, giving {`$h_k = \\ln M$`}. The map
            {`$x_{n+1} = Mx_n \\mod 1$`} generates a Bernoulli shift with {`$h_k = \\ln M$`}. All
            these entropies use natural logs, so they come out in nats per step. Divide by{' '}
            {`$\\ln 2$`} to read them in bits per step.
          </p>
        </>,

        <>
          <h2>Computing Lyapunov Exponents</h2>
          <p>
            You need to compute exponents whenever you want to diagnose whether a system is chaotic
            and measure the strength of that chaos. Three methods cover most situations: analytical
            estimates at large parameter values, single-vector renormalization (rescaling the vector
            each step so it never overflows) for {`$\\sigma_1$`}, and Gram-Schmidt
            reorthonormalization for the full spectrum.
          </p>

          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              You integrate the variational equation for a map and accumulate {`$\\sum \\ln d_i$`}
              without renormalizing {`$\\mathbf{w}$`}. What goes wrong after many steps?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                The norm {`$\\|\\mathbf{w}\\|$`} grows as {`$e^{\\sigma_1 t}$`}. Even a modest
                exponent of {`$\\sigma_1 = 0.5$`} gives {`$e^{25} \\approx 7 \\times 10^{10}$`}{' '}
                after 50 steps. This overflows standard floating-point numbers. Renormalization
                divides {`$\\mathbf{w}$`}
                by its norm every {`$\\tau$`} steps and adds {`$\\ln \\|\\mathbf{w}\\|$`} to the
                running sum, so the logarithm stays finite while the exponential growth is tracked
                exactly.
              </p>
            </details>
          </div>

          <h3>Integrable Systems Have Zero Exponents</h3>
          <p>
            For an integrable system, all exponents vanish. The twist map shows why. The trajectory
            follows:
          </p>
          <div className="lrn-eq">
            <span>{`$$J(t) = J_0, \\quad \\theta(t) = \\theta_0 + 2\\pi\\omega(J)\\,t$$`}</span>
          </div>
          <p>
            Two nearby trajectories with actions {`$J_0$`} and {`$J_0 + d_0$`} separate as:
          </p>
          <div className="lrn-eq">
            <span>{`$$d^2(t) = d_0^2\\left[(2\\pi\\omega'_0 J_0 t)^2 + 1\\right]$$`}</span>
          </div>
          <p>The separation grows linearly in {`$t$`}, not exponentially. Therefore:</p>
          <div className="lrn-eq">
            <span>{`$$\\sigma = \\lim_{t \\to \\infty} \\frac{1}{2t} \\ln\\left[(2\\pi\\omega'_0 J_0 t)^2 + 1\\right] = 0$$`}</span>
          </div>
          <p>
            The logarithm of a polynomial grows much slower than {`$t$`}: {`$(1/t)\\ln(t) \\to 0$`}.
            This confirms {`$\\sigma = 0$`} for all integrable systems.
          </p>

          <h3>Analytical Estimate: Standard Map at Large K</h3>
          <p>
            An analytical estimate exists for the standard map at large stochasticity parameter{' '}
            {`$K$`}. Linearizing around an arbitrary point, the growing eigenvalue is:
          </p>
          <div className="lrn-eq">
            <span>{`$$\\lambda^+ = K|\\cos\\theta|$$`}</span>
          </div>
          <p>
            Averaging {`$\\ln\\lambda^+$`} uniformly over {`$\\theta$`}:
          </p>
          <div className="lrn-eq lrn-eq-hero">
            <span>{`$$\\sigma_1 = \\frac{1}{2\\pi}\\int_0^{2\\pi} \\ln(K|\\cos\\theta|)\\,d\\theta = \\ln\\frac{K}{2}$$`}</span>
          </div>
          <p>
            Numerical verification confirms this at {`$K \\approx 6$`}: the running estimate
            {`$\\sigma_n / \\sigma_1 = 1.02$`}, within 2 percent of the analytical prediction.
          </p>

          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>
              Why does averaging {`$\\ln(K|\\cos\\theta|)$`} give {`$\\ln(K/2)$`} and not{' '}
              {`$\\ln K$`}? Split the log into two pieces:{' '}
              {`$\\ln(K|\\cos\\theta|) = \\ln K + \\ln|\\cos\\theta|$`}. The first piece is
              constant, so its average over {`$\\theta$`} is just {`$\\ln K$`}.
            </p>
            <p>
              The second piece is the famous integral{' '}
              {`$\\frac{1}{2\\pi}\\int_0^{2\\pi}\\ln|\\cos\\theta|\\,d\\theta = -\\ln 2$`}. Adding
              the two pieces gives {`$\\ln K - \\ln 2 = \\ln(K/2)$`}. The factor of 2 comes purely
              from that cosine average, which is why the estimate works only at large {`$K$`} where
              the map is almost fully chaotic.
            </p>
          </div>
          <p>
            The table below shows how the stochastic fraction {`$\\mu_s$`} and regular fraction{' '}
            {`$\\mu_r$`}
            change with {`$K$`} for the standard map:
          </p>
          <div className="lrn-definition">
            <div className="lrn-definition-desc">
              <div>
                <p>
                  <strong>K = 0.5:</strong> regular fraction {`$\\mu_r = 0.96$`} (mostly regular).
                  <strong>K = 1:</strong> {`$\\mu_r = 0.52$`}.<strong>K = 2:</strong>{' '}
                  {`$\\mu_r = 0.19$`}.<strong>K = 3:</strong> {`$\\mu_r = 0.11$`}.
                  <strong>K = 4:</strong> {`$\\mu_r = 0.08$`}.
                </p>
                <p>
                  <strong>K = 5:</strong> stochastic fraction {`$\\mu_s = 0.98$`},{' '}
                  {`$\\mu_r = 0.014$`}
                  (nearly all chaotic).
                  <strong>K = 6.21:</strong> {`$\\mu_r = 0.004$`}.<strong>K = 8.888:</strong>{' '}
                  {`$\\mu_r < 10^{-4}$`} (almost fully chaotic).
                </p>
              </div>
            </div>
          </div>

          <h3>The Benettin Renormalization Scheme</h3>
          <p>
            To compute {`$\\sigma_1$`} numerically for any system, you renormalize the tangent
            vector as you go. Choose an initial tangent vector {`$\\mathbf{w}_0$`}. Integrate the
            variational equation for time {`$\\tau$`}. The norm grows to{' '}
            {`$d_1 = \\|\\mathbf{w}_{0}(\\tau)\\|$`}. Rescale:
          </p>
          <div className="lrn-eq">
            <span>{`$$d_k = \\|\\mathbf{w}_{k-1}(\\tau)\\|, \\quad \\mathbf{w}_k(0) = \\frac{\\mathbf{w}_{k-1}(\\tau)}{d_k}$$`}</span>
          </div>
          <p>The running average converges to {`$\\sigma_1$`}:</p>
          <div className="lrn-eq">
            <span>{`$$\\sigma_n = \\frac{1}{n\\tau} \\sum_{i=1}^{n} \\ln d_i \\xrightarrow{n \\to \\infty} \\sigma_1$$`}</span>
          </div>

          <p>
            Here is one concrete pass for the cat map, starting from {`$\\mathbf{w}_0 = (1, 0)$`}{' '}
            with {`$\\tau = 1$`} step:
          </p>
          <ul className="lrn-list">
            <li>
              Step 1: {`$A\\mathbf{w}_0 = (1, 1)$`}, so {`$d_1 = \\sqrt{2} \\approx 1.414$`} and{' '}
              {`$\\ln d_1 = 0.347$`}. Rescale to {`$(0.707, 0.707)$`}.
            </li>
            <li>
              Step 2: {`$A(0.707, 0.707) = (1.414, 2.121)$`}, so{' '}
              {`$d_2 = \\sqrt{6.5} \\approx 2.550$`} and {`$\\ln d_2 = 0.936$`}. Rescale to{' '}
              {`$(0.555, 0.832)$`}.
            </li>
            <li>
              Step 3: {`$A(0.555, 0.832) = (1.387, 2.219)$`}, so {`$d_3 \\approx 2.616$`} and{' '}
              {`$\\ln d_3 = 0.962$`}.
            </li>
          </ul>
          <p>
            The running average climbs toward the exact value:{' '}
            {`$\\sigma_3 = (0.347 + 0.936 + 0.962)/3 = 0.748$`}, on its way to{' '}
            {`$\\sigma_1 = \\ln[(3+\\sqrt{5})/2] \\approx 0.962$`}. With this pass you can compute
            the largest exponent of any map by hand.
          </p>

          <LyapRunningAverage />

          <h3>Application: Henon-Heiles System</h3>
          <p>
            Apply this procedure to the Henon-Heiles system at energy
            {`$E = 0.125$`}, computing six orbits: three ordered (regular) and three stochastic
            (chaotic).
          </p>
          <ul className="lrn-list">
            <li>
              <strong>Ordered orbits:</strong> {`$\\sigma_n \\to 0$`} as {`$n$`} increases
              (power-law decay). These orbit KAM tori.
            </li>
            <li>
              <strong>Stochastic orbits:</strong> {`$\\sigma_n \\to \\sigma_\\infty > 0$`}, a single
              positive constant independent of starting point within the chaotic sea.
            </li>
          </ul>
          <p>
            The value {`$\\sigma_\\infty$`} grows with energy {`$E$`}. At low {`$E$`}, the chaotic
            regions are tiny. Near {`$E = 1/6$`} (the escape energy), the system is almost fully
            chaotic.
          </p>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>
              In the Henon-Heiles results, all three stochastic orbits converge to the same
              {`$\\sigma_\\infty$`}. Why? Could the exponent differ between two different chaotic
              orbits?
            </p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                In an ergodic chaotic region, the orbit visits every part of the region uniformly
                (by the ergodic theorem). The Lyapunov exponent is a time average. If the region is
                ergodic, different starting points in the same region give the same time average,
                since they all explore the same portion of phase space with the same statistical
                weight. Two orbits in different chaotic regions (separated by KAM tori) would in
                principle have different exponents. But within a single connected stochastic sea,
                ergodicity guarantees a unique {`$\\sigma_1$`}.
              </p>
            </details>
          </div>
        </>,

        <>
          <h2>The Full Spectrum: Gram-Schmidt Algorithm</h2>
          <p>
            When you need all {`$M$`} exponents, single-vector renormalization fails: any initial
            vector aligns with the most unstable direction {`$\\hat{e}_1$`}, and you cannot see{' '}
            {`$\\hat{e}_2, \\hat{e}_3, \\ldots$`}. The Benettin-Gram-Schmidt algorithm solves this.
            It tracks {`$M$`} vectors at once and keeps them orthogonal at every renormalization
            step.
          </p>

          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              Why can you not compute {`$\\sigma_2$`} by simply choosing an initial vector{' '}
              {`$\\mathbf{w}_0$`}
              aligned with the second eigenvector {`$\\hat{e}_2$`} of the monodromy matrix (the
              matrix that maps a displacement forward by one full period)?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                After a few integration steps, numerical round-off introduces a tiny component of
                {`$\\hat{e}_1$`} into {`$\\mathbf{w}$`}. That component grows exponentially at rate
                {`$\\sigma_1 > \\sigma_2$`}, while the {`$\\hat{e}_2$`} component grows at rate{' '}
                {`$\\sigma_2$`}. After enough steps, the {`$\\hat{e}_1$`} component overwhelms the{' '}
                {`$\\hat{e}_2$`} component and you measure {`$\\sigma_1$`}, not {`$\\sigma_2$`}.
                Gram-Schmidt forces the vector to stay perpendicular to the direction you have
                already measured, preventing this contamination.
              </p>
            </details>
          </div>

          <div className="lrn-faded">
            <div className="lrn-faded-phase">
              <span className="lrn-faded-label">COMPLETE EXAMPLE</span>
              <p>
                Computing the full spectrum for a 3D system with the Benettin-Gram-Schmidt
                algorithm. Start with {`$p = 3$`} orthonormal vectors (unit length and mutually
                perpendicular) {`$\\mathbf{w}_1^{(0)}, \\mathbf{w}_2^{(0)}, \\mathbf{w}_3^{(0)}$`}.
              </p>
              <ol className="lrn-list">
                <li>
                  Integrate all three variational equations simultaneously for time {`$\\tau$`}.
                  This gives three evolved vectors{' '}
                  {`$\\tilde{\\mathbf{w}}_1, \\tilde{\\mathbf{w}}_2, \\tilde{\\mathbf{w}}_3$`}.
                </li>
                <li>
                  Gram-Schmidt step for {`$\\mathbf{w}_1$`}: set{' '}
                  {`$d_k^{(1)} = \\|\\tilde{\\mathbf{w}}_1\\|$`}, then{' '}
                  {`$\\mathbf{w}_1^{\\text{new}} = \\tilde{\\mathbf{w}}_1 / d_k^{(1)}$`}.
                </li>
                <li>
                  Gram-Schmidt step for {`$\\mathbf{w}_2$`}: subtract the projection onto{' '}
                  {`$\\mathbf{w}_1^{\\text{new}}$`}:
                  {`$\\mathbf{u}_2 = \\tilde{\\mathbf{w}}_2 - (\\tilde{\\mathbf{w}}_2 \\cdot \\mathbf{w}_1^{\\text{new}}) \\mathbf{w}_1^{\\text{new}}$`}
                  , then {`$d_k^{(2)} = \\|\\mathbf{u}_2\\|$`},{' '}
                  {`$\\mathbf{w}_2^{\\text{new}} = \\mathbf{u}_2 / d_k^{(2)}$`}.
                </li>
                <li>
                  Gram-Schmidt step for {`$\\mathbf{w}_3$`}: subtract projections onto both
                  {`$\\mathbf{w}_1^{\\text{new}}$`} and {`$\\mathbf{w}_2^{\\text{new}}$`},
                  normalize; call the norm {`$d_k^{(3)}$`}.
                </li>
                <li>
                  Accumulate: add {`$\\ln d_k^{(j)}$`} to the running sum for exponent {`$j$`}. The{' '}
                  {`$p$`}th exponent is{' '}
                  {`$\\sigma_p = \\lim (1/n\\tau)\\sum_{i=1}^n \\ln d_i^{(p)}$`}.
                </li>
                <li>
                  Repeat from step 1 with the new orthonormal set{' '}
                  {`$\\{\\mathbf{w}_j^{\\text{new}}\\}$`}.
                </li>
              </ol>
              <p>
                Here are the numbers for one 2D pass, with evolved vectors{' '}
                {`$\\tilde{\\mathbf{w}}_1 = (3, 4)$`} and {`$\\tilde{\\mathbf{w}}_2 = (1, 2)$`}:
              </p>
              <ul className="lrn-list">
                <li>
                  {`$d_k^{(1)} = \\|(3, 4)\\| = 5$`}, so{' '}
                  {`$\\mathbf{w}_1^{\\text{new}} = (0.6, 0.8)$`} and you add {`$\\ln 5 = 1.609$`}.
                </li>
                <li>
                  Projection: {`$\\tilde{\\mathbf{w}}_2 \\cdot \\mathbf{w}_1^{\\text{new}} = 2.2$`},
                  so {`$\\mathbf{u}_2 = (1, 2) - 2.2(0.6, 0.8) = (-0.32, 0.24)$`}.
                </li>
                <li>
                  {`$d_k^{(2)} = \\|(-0.32, 0.24)\\| = 0.4$`}, and you add {`$\\ln 0.4 = -0.916$`}.
                </li>
              </ul>
              <p>
                The 2-volume grew by {`$d_k^{(1)} d_k^{(2)} = 5 \\times 0.4 = 2$`}, which matches
                the determinant of {`$[\\tilde{\\mathbf{w}}_1, \\tilde{\\mathbf{w}}_2]$`} exactly.
                That is the check that the orthogonalization kept the area right.
              </p>
            </div>
            <div className="lrn-faded-phase lrn-faded-partial">
              <span className="lrn-faded-label">YOUR TURN: PARTIAL</span>
              <p>
                A 2D map has two vectors. After one {`$\\tau$`}-interval:
                {`$\\tilde{\\mathbf{w}}_1 = (2.4, 0.8)$`}, {`$\\tilde{\\mathbf{w}}_2 = (0.6, 1.5)$`}
                .
              </p>
              <ol className="lrn-list">
                <li>
                  Compute {`$d_k^{(1)} = \\|\\tilde{\\mathbf{w}}_1\\|$`} and normalize to get
                  {`$\\mathbf{w}_1^{\\text{new}}$`}.
                </li>
                <li>
                  Subtract the projection:{' '}
                  {`$\\mathbf{u}_2 = \\tilde{\\mathbf{w}}_2 - (\\tilde{\\mathbf{w}}_2 \\cdot \\mathbf{w}_1^{\\text{new}}) \\mathbf{w}_1^{\\text{new}}$`}
                  . Compute {`$d_k^{(2)} = \\|\\mathbf{u}_2\\|$`}.
                </li>
                <li>
                  Add {`$\\ln d_k^{(1)}$`} and {`$\\ln d_k^{(2)}$`} to the respective running sums.
                </li>
              </ol>
            </div>
            <div className="lrn-faded-phase">
              <span className="lrn-faded-label">INDEPENDENT PRACTICE</span>
              <p>
                A 3D system has evolved tangent vectors after one step:
                {`$\\tilde{\\mathbf{w}}_1 = (3, 1, 0)$`}, {`$\\tilde{\\mathbf{w}}_2 = (1, 2, 0)$`},
                {`$\\tilde{\\mathbf{w}}_3 = (0, 0, 0.5)$`}. Apply the full Gram-Schmidt step. Record{' '}
                {`$d_k^{(1)}, d_k^{(2)}, d_k^{(3)}$`}
                and compute the contribution to {`$\\sigma_1 + \\sigma_2 + \\sigma_3$`} from this
                step.
              </p>
            </div>
          </div>

          <h3>The p-Volume Growth Formula</h3>
          <p>
            During each {`$\\tau$`}-interval, the {`$p$`}-volume grows by the factor
            {`$d_k^{(1)} d_k^{(2)} \\cdots d_k^{(p)}$`}. Taking logarithm and accumulating:
          </p>
          <div className="lrn-eq">
            <span>{`$$\\sigma^{(p)} = \\lim_{n \\to \\infty} \\frac{1}{n\\tau} \\sum_{i=1}^{n} \\ln\\left(d_i^{(1)} d_i^{(2)} \\cdots d_i^{(p)}\\right)$$`}</span>
          </div>
          <p>Subtracting consecutive orders isolates the individual exponents:</p>
          <div className="lrn-eq">
            <span>{`$$\\sigma_p = \\lim_{n \\to \\infty} \\frac{1}{n\\tau} \\sum_{i=1}^{n} \\ln d_i^{(p)}$$`}</span>
          </div>

          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>
              Why does the {`$p$`}-volume grow by the product{' '}
              {`$d_k^{(1)} d_k^{(2)} \\cdots d_k^{(p)}$`}? Each Gram-Schmidt step makes the new
              vector perpendicular to the ones before it. So the box they span is a rectangular box,
              and the volume of a rectangular box is just the product of its side lengths.
            </p>
            <p>
              Each side length is one of the norms {`$d_k^{(j)}$`}. Take the log of the product and
              the product becomes a sum: {`$\\ln(d^{(1)} \\cdots d^{(p)}) = \\sum_j \\ln d^{(j)}$`}.
              Subtracting the order {`$p-1$`} sum from the order {`$p$`} sum leaves only the{' '}
              {`$\\ln d^{(p)}$`} term, which is exactly {`$\\sigma_p$`}.
            </p>
          </div>

          <h3>Results: Contopoulos Hamiltonian</h3>
          <p>
            Take a three-degree-of-freedom Hamiltonian and compute its three largest exponents,
            starting from a point in the "small sea" (stochastic region). Over time
            {`$t = 10^2$`} to {`$10^5$`} (on a log scale), all three running averages converge. The
            convergence is slowest for {`$\\sigma_3$`} (the smallest exponent is hardest to separate
            from the second-largest). This computation validated the Gram-Schmidt algorithm and
            confirmed the sum rule {`$\\sigma^{(3)} = \\sigma_1 + \\sigma_2 + \\sigma_3$`}.
          </p>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>
              In the Contopoulos results, why is {`$\\sigma_3$`} the slowest of the three to settle
              down to its final value?
            </p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                You get {`$\\sigma_3$`} by subtracting the order 2 sum from the order 3 sum. When
                two numbers are close in size, subtracting them throws away most of the digits you
                trusted. So the smallest exponent inherits the noise of the larger ones.
              </p>
              <p>
                Each running average also needs many steps to average out its own fluctuations. The
                third vector must stay perpendicular to two others at once, so any drift in those
                two leaks into it. All three effects together make {`$\\sigma_3$`} converge last.
              </p>
            </details>
          </div>

          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Single-Vector Method</span>
              <p>
                Computes only {`$\\sigma_1$`}. One tangent vector, renormalized every {`$\\tau$`}{' '}
                steps. Fast and simple. Sufficient to diagnose chaos or order. Cannot compute KS
                entropy, which requires all positive exponents.
              </p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Gram-Schmidt Algorithm</span>
              <p>
                Computes all {`$M$`} exponents. Requires evolving {`$M$`} tangent vectors plus
                Gram-Schmidt every {`$\\tau$`} steps. Needed for KS entropy, Hamiltonian sum-rule
                verification, and characterizing sub-leading instabilities.
              </p>
            </div>
          </div>

          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Finite-Time Estimate {`$\\sigma_n$`}</span>
              <p>
                The running average {`$\\sigma_n = (1/n\\tau)\\sum \\ln d_i$`}. Fluctuates,
                especially early. In chaotic regions, approaches {`$\\sigma_1$`} from above. In
                ordered regions, decays as a power law toward zero.
              </p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Asymptotic Exponent {`$\\sigma_\\infty$`}</span>
              <p>
                The limit {`$\\sigma_\\infty = \\lim_{n \\to \\infty} \\sigma_n = \\sigma_1$`}.
                Independent of {`$\\tau$`} (for moderate {`$\\tau$`}) and of initial{' '}
                {`$\\mathbf{x}_0$`}
                within a connected stochastic region. This is the true Lyapunov exponent.
              </p>
            </div>
          </div>

          <h3>Chaos, Randomness, and Numerical Errors</h3>
          <p>
            A common worry is that numerical errors cause apparent chaos. Tests that run a chaotic
            map on a discrete grid of integers, with no rounding at all, still produce the same
            chaotic statistics. So chaos here is intrinsic to the dynamics, not an artifact of
            finite-precision arithmetic.
          </p>

          <LyapSpectrum />
        </>
      ]
    },
    practice: [
      {
        q: `A logistic map runs at $r = 3.8$. Two orbits start $10^{-10}$ apart. After 50 steps, what is their separation? Use $\\lambda \\approx \\ln 2 \\approx 0.69$ per step.`,
        a: `Separation $\\approx 10^{-10} \\cdot e^{0.69 \\times 50} = 10^{-10} \\cdot e^{34.5} \\approx 10^{-10} \\times 10^{15} = 10^5$. This exceeds the system size (orbits stay in $[0,1]$), so the approximation breaks down well before step 50: saturation occurs when the separation reaches $\\sim 1$, after roughly $10/0.69 \\approx 14$ steps.`
      },
      {
        q: `Define the Lyapunov exponent $\\sigma$ for a continuous-time flow using the variational equation. State both limits explicitly and explain why each is needed.`,
        a: `$\\sigma(\\mathbf{x}_0, \\mathbf{w}) = \\lim_{t \\to \\infty, d(0) \\to 0} \\frac{1}{t}\\ln\\frac{d(\\mathbf{x}_0, t)}{d(\\mathbf{x}_0, 0)}$. The limit $t \\to \\infty$ averages out short-time fluctuations so you get the true asymptotic growth rate, not a transient. The limit $d(0) \\to 0$ ensures the variational (linearized) equation is valid: finite separations can cross into different regions of phase space and give the wrong exponent.`
      },
      {
        q: `A 4D Hamiltonian system has Lyapunov spectrum $\\sigma_1, \\sigma_2, \\sigma_3, \\sigma_4$. State two constraints on these values implied by Hamiltonian structure.`,
        a: `First, the sum rule: $\\sigma_1 + \\sigma_2 + \\sigma_3 + \\sigma_4 = 0$ (Liouville's theorem, phase volume preserved). Second, the pairing rule: $\\sigma_i = -\\sigma_{2N-i+1}$ with $N=2$, so $\\sigma_1 = -\\sigma_4$ and $\\sigma_2 = -\\sigma_3$. As a result, at least two exponents vanish (the flow direction and one more from energy conservation).`
      },
      {
        q: `The Arnold cat map has matrix $\\begin{pmatrix}1&1\\\\1&2\\end{pmatrix}$. Compute the eigenvalues and the Lyapunov exponent $\\sigma$.`,
        a: `Characteristic equation: $(1-\\lambda)(2-\\lambda) - 1 = 0 \\Rightarrow \\lambda^2 - 3\\lambda + 1 = 0 \\Rightarrow \\lambda_{1,2} = (3\\pm\\sqrt{5})/2$. The larger eigenvalue is $\\lambda_1 = (3+\\sqrt{5})/2 \\approx 2.618$. Writing $\\lambda_1 = e^\\sigma$ gives $\\sigma = \\ln[(3+\\sqrt{5})/2] \\approx 0.962$. This exponent is the same for all initial conditions because the Jacobian is constant (the map is linear).`
      },
      {
        q: `State the Pesin relation and explain which exponents contribute. What is the KS entropy for a two-degree-of-freedom autonomous Hamiltonian with $\\sigma_1 = 0.7$?`,
        a: `The Pesin relation is $h_k = \\sum_{\\sigma_i > 0} \\sigma_i$ (integrated over phase space; for a single ergodic region, the integral reduces to the sum). Only positive exponents contribute: negative exponents contract and destroy information rather than create it. For a two-degree-of-freedom Hamiltonian, one exponent equals $\\sigma_1 > 0$, one equals $-\\sigma_1 < 0$, and two vanish. So $h_k = \\sigma_1 = 0.7$.`
      },
      {
        q: `A 1-D map has $|F'(x)| = 2$ on half its domain and $|F'(x)| = 4$ on the other half, and a typical orbit spends equal time in each half. Use the derivative formula $\\lambda = \\lim_{N \\to \\infty} \\frac{1}{N}\\sum_{n=0}^{N-1}\\ln|F'(x_n)|$ to find $\\lambda$.`,
        a: `The formula averages $\\ln|F'(x_n)|$ along the orbit. With equal time in each half, the average is $\\lambda = \\tfrac{1}{2}\\ln 2 + \\tfrac{1}{2}\\ln 4 = \\tfrac{1}{2}(0.693) + \\tfrac{1}{2}(1.386) = 1.040$. You can also write this as $\\lambda = \\tfrac{3}{2}\\ln 2 = \\ln(2\\sqrt{2})$. The positive value confirms the map is chaotic: on average nearby points stretch apart by a factor of about $e^{1.04} \\approx 2.8$ each step.`
      },
      {
        q: `Why does an integrable system have all Lyapunov exponents equal to zero? Use the twist map example.`,
        a: `For the twist map, $J(t) = J_0$ (constant) and $\\theta(t) = \\theta_0 + 2\\pi\\omega(J)t$. The separation between nearby trajectories is $d^2(t) = d_0^2[(2\\pi\\omega'_0 J_0 t)^2 + 1]$, which grows linearly in $t$, not exponentially. Therefore $\\sigma = \\lim_{t\\to\\infty}(1/t)\\ln d(t) \\sim (1/t)\\ln(t) \\to 0$. Linear growth contributes zero to the Lyapunov exponent because $(1/t)\\ln t \\to 0$ as $t \\to \\infty$. This holds for all integrable systems.`
      },
      {
        q: `Derive the analytical estimate $\\sigma_1 = \\ln(K/2)$ for the standard map at large $K$.`,
        a: `At large $K$, linearize around an arbitrary point $(\\theta, J)$. The variational equations give a growing eigenvalue $\\lambda^+ = K|\\cos\\theta|$. Average $\\ln\\lambda^+$ uniformly over $\\theta \\in [0, 2\\pi)$: $\\sigma_1 = \\frac{1}{2\\pi}\\int_0^{2\\pi}\\ln(K|\\cos\\theta|)\\,d\\theta = \\ln K + \\frac{1}{2\\pi}\\int_0^{2\\pi}\\ln|\\cos\\theta|\\,d\\theta = \\ln K - \\ln 2 = \\ln(K/2)$, using the known result $\\frac{1}{2\\pi}\\int_0^{2\\pi}\\ln|\\cos\\theta|\\,d\\theta = -\\ln 2$.`
      },
      {
        q: `Explain the Benettin renormalization scheme for computing $\\sigma_1$. Why does renormalization not change the computed value?`,
        a: `Choose initial tangent vector $\\mathbf{w}_0$. Integrate the variational equation for $\\tau$ steps. Record the norm $d_1 = \\|\\mathbf{w}_0(\\tau)\\|$ and reset $\\mathbf{w}_1(0) = \\mathbf{w}_0(\\tau)/d_1$. Repeat: $\\sigma_n = (1/n\\tau)\\sum_{i=1}^n \\ln d_i \\to \\sigma_1$. Renormalization does not change $\\sigma_1$ because $\\ln\\|\\mathbf{w}_{k\\tau}\\| = \\sum_{i=1}^k \\ln d_i + \\ln\\|\\mathbf{w}_0\\|$ (the logs are additive). Dividing by $k\\tau$ and taking $k \\to \\infty$, the initial term vanishes and you recover the exact limit.`
      },
      {
        q: `State the sum rule $\\sigma^{(p)} = \\sigma_1 + \\cdots + \\sigma_p$ and explain why it fails without Gram-Schmidt orthogonalization.`,
        a: `The sum rule says the $p$-volume growth rate equals the sum of the $p$ largest individual exponents. Without orthogonalization, all $p$ vectors eventually align with the fastest-growing direction $\\hat{e}_1$ (due to numerical round-off, the $\\hat{e}_1$ component always wins). The $p$-volume collapses to zero (all vectors become parallel), so you cannot measure any sub-leading exponent. Gram-Schmidt forces each vector to remain perpendicular to the ones already normalized, isolating the contribution from each successive Lyapunov direction.`
      },
      {
        q: `A running average $\\sigma_n$ decreases like $1/n$ over 500 steps. Is the orbit chaotic or regular? What does this tell you?`,
        a: `The orbit is regular (ordered). In a stochastic region, $\\sigma_n$ approaches a positive constant $\\sigma_\\infty$ from above. A $1/n$ decrease is the signature of a regular orbit on a KAM torus: the separation grows linearly in time (not exponentially), so $\\sigma_n \\sim (1/n\\tau)\\ln(n\\tau) \\to 0$ as a power law. This is the same linear-growth behavior any regular orbit on a KAM torus shows.`
      },
      {
        q: `Mercury's Lyapunov time is about 3.5 Gyr. What is its Lyapunov exponent in yr$^{-1}$? If you know Mercury's position to $10^{-15}$ of its orbital radius, after how many Lyapunov times does your prediction become unreliable?`,
        a: `$\\lambda \\approx 1/(3.5 \\times 10^9\\text{ yr}) \\approx 3 \\times 10^{-10}\\text{ yr}^{-1}$. The error grows as $10^{-15} e^{\\lambda t}$. Setting this to 1 (system size): $e^{\\lambda t} = 10^{15}$, so $\\lambda t = 15 \\ln 10 \\approx 34.5$, giving $t \\approx 34.5$ Lyapunov times. This is about 120 Gyr, far exceeding the age of the universe, which is why short-term planetary predictions remain excellent despite positive $\\lambda$.`
      },
      {
        q: `Compare the Lyapunov exponent of the Bernoulli map $x_{n+1} = Mx_n \\mod 1$ with its KS entropy. Show they are equal.`,
        a: `The Jacobian of $x_{n+1} = Mx_n$ is the constant $M > 1$. After $n$ steps, the tangent grows by $M^n$, so $\\lambda = \\ln M$. The KS entropy is $h_k = \\ln M$ (the Bernoulli shift has one positive exponent and it equals $\\ln M$). They are equal: $h_k = \\lambda = \\ln M$. This confirms Pesin's relation for this simple case: $h_k = \\sum_{\\sigma_i > 0} \\sigma_i = \\ln M$.`
      },
      {
        q: `A C-system differs from a near-integrable Hamiltonian. List two properties that distinguish them regarding Lyapunov exponents.`,
        a: `First, a C-system has $\\sigma_1 > 0$ for ALL initial conditions without exception; a near-integrable system has $\\sigma_1 = 0$ on KAM tori and $\\sigma_1 > 0$ only in the stochastic regions. Second, a C-system is structurally stable: perturbing the system keeps it a C-system with quantitatively similar exponents. A near-integrable system is not structurally stable: the mixed phase space (tori coexisting with chaos) changes character as parameters vary.`
      },
      {
        q: `The $p$-volume element $V_p = \\mathbf{w}_1 \\wedge \\cdots \\wedge \\mathbf{w}_p$ is tracked for $p = M$ (the full phase space). What is $\\sigma^{(M)}$ for a Hamiltonian system? For a dissipative system?`,
        a: `$\\sigma^{(M)} = \\sum_{i=1}^M \\sigma_i$. For a Hamiltonian system, Liouville's theorem says phase volume is preserved, so $\\sigma^{(M)} = 0$. This is equivalent to the sum of all exponents being zero (using the pairing rule). For a dissipative system, phase volume contracts: $\\sigma^{(M)} = \\sum \\sigma_i < 0$. The strange attractor of a dissipative system has $\\sum \\sigma_i < 0$, which is connected to its fractal dimension.`
      },
      {
        q: `Transfer: The Lorenz system has exponents $\\sigma_1 \\approx 0.9, \\sigma_2 = 0, \\sigma_3 \\approx -14.6$. It is dissipative. Verify the constraint, compute the KS entropy, and identify what each exponent corresponds to physically.`,
        a: `Sum check: $0.9 + 0 + (-14.6) = -13.7 < 0$, confirming the system is dissipative (phase volume contracts). KS entropy: $h_k = \\sigma_1 = 0.9$ (only the positive exponent contributes). Physically: $\\sigma_1 > 0$ is the chaotic instability along the strange attractor; $\\sigma_2 = 0$ is the flow direction (tangent to trajectories); $\\sigma_3 \\approx -14.6$ is the strong contraction transverse to the attractor, which collapses nearby trajectories onto the strange attractor rapidly.`
      },
      {
        q: `The map-flow relation is $\\sigma_i^{\\text{map}} = \\bar{\\tau}\\,\\sigma_i^{\\text{flow}}$. Why does the Poincaré map drop one zero exponent compared to the flow?`,
        a: `The zero exponent of the flow corresponds to the direction along the orbit itself. The Poincaré map only records the orbit at each crossing of the section; it never moves along the flow direction. So the along-flow direction does not appear in the map at all. The remaining $M-1$ exponents of the flow (scaled by $\\bar{\\tau}$) become the exponents of the map. For an autonomous Hamiltonian, energy conservation removes a second zero, leaving $M-2$ non-trivial exponents in the section.`
      },
      {
        q: `Self-explain: In the Henon-Heiles results, why do ordered orbits show $\\sigma_n \\to 0$ as a power law rather than instantly?`,
        a: `$\\sigma_n$ is a running average, not an instantaneous measurement. Even on a KAM torus where no exponential growth occurs, the initial transient (the tangent vector rotating on the torus) produces nonzero norms $d_i$ for finite $n$. The average $\\sigma_n = (1/n\\tau)\\sum \\ln d_i$ only approaches zero as the cancellations between growing and shrinking intervals accumulate. The rate of decay is $\\sim (\\ln n)/n$: slow at first, then dropping faster. This is why identifying a regular orbit requires running the algorithm for many steps.`
      },
      {
        q: `Predict: You add a small nonlinear perturbation to the twist map. The system now has tiny stochastic regions. How does this change $\\sigma_1$?`,
        a: `$\\sigma_1$ changes from exactly 0 to a small positive value for orbits in the stochastic regions. The KAM tori that survive the perturbation still have $\\sigma_1 = 0$ (integrable dynamics on tori). But the resonant zones develop chaos, and within those regions $\\sigma_1 > 0$. The value of $\\sigma_1$ in the stochastic sea grows with perturbation strength. Globally (averaged over phase space), the KS entropy grows from 0 to $h_k = \\mu_s \\bar{\\sigma}_1$, where $\\mu_s$ is the fraction of phase space now occupied by chaos.`
      },
      {
        q: `Error detection: A student claims that computing $\\sigma_1$ by the single-vector renormalization method gives a different answer depending on the choice of $\\tau$ (renormalization interval). Is this correct?`,
        a: `This is incorrect for the true limit, but partially correct for finite-$n$ estimates. As $n \\to \\infty$, $\\sigma_n \\to \\sigma_1$ regardless of $\\tau$ (the limit is independent of $\\tau$, provided $\\tau$ is not too large relative to the dynamics). For finite $n$, different $\\tau$ values converge at different speeds. If $\\tau$ is too large, individual $d_k$ values fluctuate wildly and convergence is slow. If $\\tau$ is too small, each $d_k \\approx 1$ and numerical precision is wasted. The result is robust to moderate choices of $\\tau$.`
      },
      {
        q: `The standard map at $K = 6$ has stochastic fraction $\\mu_s \\approx$ near 1 (most of phase space is chaotic). Use $\\sigma_1 \\approx \\ln(K/2) = \\ln 3 \\approx 1.1$ to estimate the KS entropy. At $K = 0.5$ with $\\mu_r = 0.96$, what is the approximate KS entropy?`,
        a: `At $K = 6$: nearly all phase space is chaotic, so $h_k \\approx \\mu_s \\bar{\\sigma}_1 \\approx 1 \\times \\ln 3 \\approx 1.1$. At $K = 0.5$: $\\mu_s = 1 - \\mu_r = 1 - 0.96 = 0.04$. The estimate $\\sigma_1 = \\ln(0.5/2) = \\ln(0.25)$ is negative (the formula applies only at large $K$ where the whole map is chaotic). Numerically, the exponent in the small chaotic regions is positive but small. The KS entropy is approximately $h_k = \\mu_s \\bar{\\sigma}_1 \\approx 0.04 \\times \\bar{\\sigma}_1$, which is very small: nearly all orbits are regular.`
      }
    ],
    reference: {
      category: 'Quick Reference',
      title: 'Lyapunov Exponents',
      sections: [
        <>
          <h2>Core Definitions</h2>

          <div className="lrn-definition">
            <span className="lrn-definition-term">Separation growth (continuous)</span>
            <div className="lrn-definition-desc">
              <div>
                <p>{`$$s(t) \\sim s_0 \\, e^{\\lambda t}$$`}</p>
                <p>
                  When to use: estimating how fast two nearby orbits diverge in a flow with known{' '}
                  {`$\\lambda$`}.
                </p>
              </div>
            </div>
          </div>

          <div className="lrn-definition">
            <span className="lrn-definition-term">Separation growth (map)</span>
            <div className="lrn-definition-desc">
              <div>
                <p>{`$$s(n) \\sim s_0 \\, e^{n\\lambda}$$`}</p>
                <p>
                  When to use: same idea for iterated maps; {`$\\lambda$`} is dimensionless (per
                  step).
                </p>
              </div>
            </div>
          </div>

          <div className="lrn-definition">
            <span className="lrn-definition-term">Lyapunov exponent (formal definition)</span>
            <div className="lrn-definition-desc">
              <div>
                <p>{`$$\\sigma(\\mathbf{x}_0, \\mathbf{w}) = \\lim_{\\substack{t \\to \\infty \\\\ d(0) \\to 0}} \\frac{1}{t} \\ln \\frac{d(\\mathbf{x}_0, t)}{d(\\mathbf{x}_0, 0)}$$`}</p>
                <p>
                  When to use: precise definition; used to derive numerical methods and prove
                  theorems.
                </p>
              </div>
            </div>
          </div>

          <div className="lrn-definition">
            <span className="lrn-definition-term">Variational equation</span>
            <div className="lrn-definition-desc">
              <div>
                <p>{`$$\\frac{d\\mathbf{w}}{dt} = M(\\mathbf{x}(t))\\,\\mathbf{w}, \\quad M = \\frac{\\partial V}{\\partial \\mathbf{x}}$$`}</p>
                <p>
                  When to use: integrating the tangent vector alongside the reference orbit in
                  numerical computations.
                </p>
              </div>
            </div>
          </div>

          <h2>The Lyapunov Spectrum</h2>

          <div className="lrn-definition">
            <span className="lrn-definition-term">Sign of {`$\\lambda$`}</span>
            <div className="lrn-definition-desc">
              <div>
                <p>
                  <strong>{`$\\lambda > 0$`}:</strong> Chaos. Orbits diverge exponentially. Lyapunov
                  time {`$\\tau = 1/\\lambda$`} sets the prediction horizon.
                </p>
                <p>
                  <strong>{`$\\lambda = 0$`}:</strong> Integrable or marginal. Separation grows at
                  most linearly. Always present: one exponent vanishes for any flow.
                </p>
                <p>
                  <strong>{`$\\lambda < 0$`}:</strong> Stable. Convergence toward attractor. Time
                  constant {`$\\tau = 1/|\\lambda|$`}.
                </p>
              </div>
            </div>
          </div>

          <div className="lrn-definition">
            <span className="lrn-definition-term">Hamiltonian pairing rule</span>
            <div className="lrn-definition-desc">
              <div>
                <p>{`$$\\sigma_i = -\\sigma_{2N-i+1}, \\quad \\sum_{i=1}^{M} \\sigma_i = 0$$`}</p>
                <p>
                  When to use: checking computed spectra, confirming Hamiltonian structure, deducing
                  unknown exponents from known ones.
                </p>
              </div>
            </div>
          </div>

          <div className="lrn-definition">
            <span className="lrn-definition-term">p-volume sum rule</span>
            <div className="lrn-definition-desc">
              <div>
                <p>{`$$\\sigma^{(p)} = \\sigma_1 + \\sigma_2 + \\cdots + \\sigma_p$$`}</p>
                <p>
                  When to use: connecting the Gram-Schmidt algorithm's p-volume output to individual
                  exponents; deriving KS entropy bounds.
                </p>
              </div>
            </div>
          </div>

          <div className="lrn-definition">
            <span className="lrn-definition-term">Map-flow relation</span>
            <div className="lrn-definition-desc">
              <div>
                <p>{`$$\\sigma_i^{\\text{map}} = \\bar{\\tau}\\,\\sigma_i^{\\text{flow}}$$`}</p>
                <p>
                  When to use: converting exponents between a Poincare map and the underlying flow;{' '}
                  {`$\\bar{\\tau}$`} is the mean return time to the section.
                </p>
              </div>
            </div>
          </div>

          <h2>Computation Formulas</h2>

          <div className="lrn-definition">
            <span className="lrn-definition-term">Benettin running average</span>
            <div className="lrn-definition-desc">
              <div>
                <p>{`$$\\sigma_n = \\frac{1}{n\\tau} \\sum_{i=1}^{n} \\ln d_i \\to \\sigma_1$$`}</p>
                <p>
                  When to use: numerical computation of the largest exponent; renormalize{' '}
                  {`$\\mathbf{w}$`} every {`$\\tau$`} steps to avoid overflow.
                </p>
              </div>
            </div>
          </div>

          <div className="lrn-definition">
            <span className="lrn-definition-term">pth exponent (Gram-Schmidt)</span>
            <div className="lrn-definition-desc">
              <div>
                <p>{`$$\\sigma_p = \\lim_{n \\to \\infty} \\frac{1}{n\\tau} \\sum_{i=1}^{n} \\ln d_i^{(p)}$$`}</p>
                <p>
                  When to use: computing sub-leading exponents. Requires simultaneous evolution of{' '}
                  {`$p$`} orthonormal tangent vectors with Gram-Schmidt every {`$\\tau$`} steps.
                </p>
              </div>
            </div>
          </div>

          <div className="lrn-definition">
            <span className="lrn-definition-term">1-D map exponent formula</span>
            <div className="lrn-definition-desc">
              <div>
                <p>{`$$\\lambda = \\lim_{N \\to \\infty} \\frac{1}{N} \\sum_{n=0}^{N-1} \\ln|F'(x_n)|$$`}</p>
                <p>
                  When to use: computing {`$\\lambda$`} for any 1-D map {`$x_{n+1} = F(x_n)$`}; the
                  derivative at each point gives the local stretch factor. The logistic map worked
                  example lives on the Logistic Map and Feigenbaum page.
                </p>
              </div>
            </div>
          </div>

          <div className="lrn-definition">
            <span className="lrn-definition-term">Standard map analytical estimate</span>
            <div className="lrn-definition-desc">
              <div>
                <p>{`$$\\sigma_1 = \\ln\\frac{K}{2} \\quad (K \\gg 1)$$`}</p>
                <p>
                  When to use: quick order-of-magnitude estimate at large stochasticity {`$K$`};
                  exact only asymptotically.
                </p>
              </div>
            </div>
          </div>

          <h2>KS Entropy</h2>

          <div className="lrn-definition">
            <span className="lrn-definition-term">Pesin relation</span>
            <div className="lrn-definition-desc">
              <div>
                <p>{`$$h_k = \\sum_{\\sigma_i > 0} \\sigma_i$$`}</p>
                <p>
                  When to use: computing KS entropy from the Lyapunov spectrum in a single connected
                  chaotic region. Sum only positive exponents.
                </p>
              </div>
            </div>
          </div>

          <div className="lrn-definition">
            <span className="lrn-definition-term">KS entropy with stochastic fraction</span>
            <div className="lrn-definition-desc">
              <div>
                <p>{`$$h_k = \\mu_s \\, \\bar{\\sigma}_1$$`}</p>
                <p>
                  When to use: mixed phase space where the chaotic region occupies fraction{' '}
                  {`$\\mu_s$`} and the largest exponent {`$\\bar{\\sigma}_1$`} is approximately
                  uniform over that region.
                </p>
              </div>
            </div>
          </div>

          <div className="lrn-definition">
            <span className="lrn-definition-term">Arnold's cat map exponent</span>
            <div className="lrn-definition-desc">
              <div>
                <p>{`$$\\sigma = \\ln\\frac{3+\\sqrt{5}}{2} \\approx 0.962, \\quad \\lambda_{1,2} = \\frac{3 \\pm \\sqrt{5}}{2}$$`}</p>
                <p>
                  When to use: reference example of a C-system with uniform exponent; eigenvalues of
                  the cat map matrix directly give {`$\\sigma = \\ln\\lambda_1$`}.
                </p>
              </div>
            </div>
          </div>

          <h2>Integrable vs. Chaotic Comparison</h2>
          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Integrable (Twist Map)</span>
              <p>
                All {`$\\sigma_i = 0$`}. Separation grows linearly:{' '}
                {`$d^2(t) = d_0^2[(2\\pi\\omega'_0 J_0 t)^2 + 1]$`}. KAM tori preserved. Prediction
                time infinite in principle.
              </p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Chaotic (Standard Map, Lorenz)</span>
              <p>
                {`$\\sigma_1 > 0$`}. Separation grows exponentially:{' '}
                {`$d(t) \\sim d_0 e^{\\sigma_1 t}$`}. KAM tori destroyed in chaotic sea. Prediction
                horizon finite: {`$T_{\\text{predict}} \\sim \\tau \\ln(1/\\epsilon)$`} where{' '}
                {`$\\epsilon$`} is initial error.
              </p>
            </div>
          </div>
        </>
      ]
    },
    customCss: null
  }
  return <LearningTemplate config={config} />
}
