import { LearningTemplate } from '../../../../../components/learning/learning-template'
import {
  KdvSoliton,
  KdvAmplitudeSpeedWidth,
  KdvDispersionVsNonlinearity,
  KdvCnoidalWave,
  KdvConservationLaws,
  KdvCubicZeroCases,
  KdvTwoSolitonCollision
} from '../../../../../components/viz'

export default function KdvEquation() {
  const config = {
    cssPrefix: 'kdv',
    documentTitle: 'Korteweg-de Vries Equation and Solitons - AETHER',
    learning: {
      groupTitle: 'Continuum and Field-Theoretic Mechanics',
      category: 'Module 6',
      title: 'Korteweg-de Vries Equation and Solitons',
      subtitle:
        'One equation balances nonlinear steepening against dispersive spreading, producing a solitary wave that travels unchanged. That wave now carries data through fiber-optic cables and rolls across the ocean floor as a tsunami.',
      sections: [
        <>
          <div className="lrn-section" id="lrn-section-0">
            <h2>Travelling-Wave Solutions</h2>
            <p>
              In 1834, John Scott Russell watched a barge stop on the Union Canal in Scotland. The
              bow wave did not flatten. It rolled forward for miles without changing shape. He named
              it the "wave of translation," and that observation planted the seed for everything in
              this lesson.
            </p>
            <p>
              A field {`$u(x,t)$`} gives a value at each position {`$x$`} and time {`$t$`}. The
              symbol {`$u_t$`} is the rate of change in time at a fixed spot. The symbol {`$u_x$`}{' '}
              is the slope in space at a fixed instant. A wave equation ties these two rates
              together.
            </p>
            <p>
              A travelling wave keeps its shape and slides at a steady speed. You write it as{' '}
              {`$u(x,t) = f(x - ct)$`}. Here {`$c$`} is the speed and {`$f$`} is the fixed profile.
              The whole shape moves right by {`$c$`} units each second without changing form.
            </p>
            <p>
              Reach for this travelling-wave ansatz (a guessed solution form you plug in and test)
              whenever a wave equation must hold a fixed shape. Substitute {`$u = f(x - ct)$`} and
              the PDE collapses to one ordinary differential equation in the single variable{' '}
              {`$\\xi = x - ct$`}. Every soliton in this lesson starts here.
            </p>
            <p>
              For linear equations such as {`$u_{tt} - c^2 u_{xx} = 0$`}, any profile {`$f$`} works:
              the d'Alembert form {`$u = f(x-ct) + g(x+ct)$`} you met for the wave equation adds a
              right-mover and a left-mover freely. Linear equations impose no restriction on the
              shape.
            </p>
            <div className="lrn-compare">
              <div className="lrn-compare-col">
                <span className="lrn-compare-title">Linear equation</span>
                <p>
                  Any profile {`$f$`} is a valid travelling wave. The wave superposition principle
                  holds. Speed and shape are independent.
                </p>
              </div>
              <div className="lrn-compare-col">
                <span className="lrn-compare-title">Nonlinear equation</span>
                <p>
                  Only specific profiles satisfy the ODE. For {`$u_t + (1+u)u_x = 0$`}, the only
                  travelling wave is {`$f = \\text{const}$`} (trivial). Nonlinearity restricts the
                  admissible shapes.
                </p>
              </div>
            </div>
            <div className="lrn-elaborate">
              <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
              <p>
                A linear equation treats every wavenumber the same way. You can add any set of modes
                and they each travel by their own rule. That freedom lets any starting shape count
                as a valid wave.
              </p>
              <p>
                A nonlinear equation couples the modes together. The term {`$uu_x$`} multiplies the
                wave by its own slope, so tall parts and short parts interact. Only one balanced
                shape survives this coupling without distorting, which is why the profile gets
                locked.
              </p>
            </div>
            <p>
              A more general nonlinear equation, {`$u_t + (1+u)u_x = v(u)$`} with{' '}
              {`$v(u) = u(1-u^2)$`} and speed {`$c = 1$`}, admits a non-trivial profile. Substitute{' '}
              {`$u = f(\\xi)$`}. The PDE becomes the ODE {`$(1 - c + f)f' = v(f)$`}.
            </p>
            <p>
              Set {`$c = 1$`}, so {`$1 - c = 0$`} and the ODE reads {`$f f' = f(1 - f^2)$`}. Cancel{' '}
              {`$f$`} and separate variables: {`$\\frac{df}{1 - f^2} = d\\xi$`}. Split the left side
              by partial fractions into{' '}
              {`$\\tfrac{1}{2}\\left(\\frac{1}{1-f} + \\frac{1}{1+f}\\right)$`}.
            </p>
            <p>
              Integrate each piece. You get{' '}
              {`$\\tfrac{1}{2}\\log\\left|\\frac{1+f}{1-f}\\right| = \\xi + \\text{const}$`}.
              Exponentiate and solve for {`$f$`}: the solution is the hyperbolic tangent.
            </p>
            <div className="lrn-eq lrn-eq-hero">
              <span>{`$$u(x,t) = \\tanh(x - t - x_0)$$`}</span>
            </div>
            <p>
              This smoothed step rises from {`$-1$`} to {`$+1$`} over a distance set by the equation
              coefficients. The profile is fixed by the equation, not chosen freely. It slides right
              at speed {`$c = 1$`} without changing shape: a travelling wave of permanent form,
              exactly as Russell saw on the canal.
            </p>
            <div className="lrn-self-explain">
              <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
              <p>
                We cancelled {`$f$`} from both sides of {`$f f' = f(1 - f^2)$`}. Why is that step
                safe here? What solution would you lose if you cancelled carelessly?
              </p>
              <details className="lrn-self-explain-reveal">
                <summary>Expert explanation</summary>
                <p>
                  Cancelling {`$f$`} is valid wherever {`$f \\neq 0$`}, which holds across the
                  rising part of the step. The value {`$f = 0$`} is itself a constant solution. So
                  you do not lose a wave, you only set aside the trivial flat state.
                </p>
                <p>
                  The cancelled factor matters when the profile crosses zero. The tanh profile
                  passes through {`$f = 0$`} at one point, but that single point has measure zero
                  and the separated equation still describes the full smooth step.
                </p>
              </details>
            </div>
            <div className="lrn-predict">
              <span className="lrn-predict-label">PREDICT</span>
              <p>
                Before reading on: if you increase the speed {`$c$`} of a KdV soliton, do you expect
                its peak amplitude to increase, decrease, or stay the same?
              </p>
              <details className="lrn-predict-reveal">
                <summary>Check your thinking</summary>
                <p>
                  Amplitude increases. For the KdV soliton{' '}
                  {`$f = -\\tfrac{c}{2}\\operatorname{sech}^2[\\tfrac{\\sqrt{c}}{2}\\xi]$`},
                  amplitude is {`$c/2$`}. Faster means taller and also narrower: all three
                  properties lock together through the single parameter {`$c$`}.
                </p>
              </details>
            </div>
          </div>
        </>,

        <>
          <div className="lrn-section" id="lrn-section-1">
            <h2>Solitary Waves and the KdV Equation</h2>
            <p>The Korteweg-de Vries (KdV) equation in standard form is</p>
            <div className="lrn-eq lrn-eq-hero">
              <span>{`$$u_t - 6u u_x + u_{xxx} = 0$$`}</span>
            </div>
            <p>
              The {`$u_{xxx}$`} term produces dispersion: different wavenumbers travel at different
              speeds. The {`$6uu_x$`} term produces nonlinear steepening: larger amplitudes move
              faster, causing the wave to lean forward. Eventually it would break. Alone, each
              effect destroys a clean wave profile. Together, they can balance exactly.
            </p>
            <p>
              Reach for this equation whenever shallow-water waves, ion-acoustic plasma waves, or
              any weakly nonlinear dispersive system needs a model. It is the simplest equation that
              holds a pulse together. The same balance runs light-pulse solitons in fiber-optic
              cables. There, dispersion and self-phase-modulation (a pulse shifting its own phase
              through the glass it brightens) replace water's two competing terms.
            </p>
            <div className="lrn-predict">
              <span className="lrn-predict-label">PREDICT</span>
              <p>
                The KdV soliton (standard {`$-6uu_x$`} convention) is a wave of depression: its peak
                is negative. Before reading further, predict: does the soliton sit above or below
                the zero line?
              </p>
              <details className="lrn-predict-reveal">
                <summary>Check your thinking</summary>
                <p>
                  Below. The solution is {`$f = -\\tfrac{c}{2}\\operatorname{sech}^2[\\cdots]$`},
                  which is always negative. This is a wave of depression. To get a wave of elevation
                  (positive hump), substitute {`$u \\to -u$`}.
                </p>
              </details>
            </div>
            <div className="lrn-elaborate">
              <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
              <p>
                Dispersion spreads energy across wavenumbers, flattening any localized bump over
                time. Nonlinear steepening concentrates it, sharpening the front. For one special
                amplitude-speed-width combination, the spreading rate equals the steepening rate
                everywhere in the profile. The wave neither grows nor decays: it travels unchanged.
                This balance is the mathematical explanation for the wave of translation Russell saw
                on the canal.
              </p>
            </div>
            <h3>Deriving the Soliton Solution</h3>
            <p>
              Substituting {`$u = f(\\xi)$`} with {`$\\xi = x - ct$`} into the KdV equation gives
              the ODE
            </p>
            <div className="lrn-eq">
              <span>{`$$-c f' - 6f f' + f''' = 0$$`}</span>
            </div>
            <p>Integrating once with constant {`$-A$`}:</p>
            <div className="lrn-eq">
              <span>{`$$-cf - 3f^2 + f'' = -A$$`}</span>
            </div>
            <p>Multiplying by {`$f'$`} and integrating again:</p>
            <div className="lrn-eq">
              <span>{`$$\\tfrac{1}{2}(f')^2 = f^3 + \\tfrac{1}{2}cf^2 + Af + B$$`}</span>
            </div>
            <p>
              This is the master ODE for all travelling-wave solutions. The right side is denoted{' '}
              {`$F(f)$`}. Its zeros classify all possible wave types.
            </p>
            <div className="lrn-faded">
              <div className="lrn-faded-phase">
                <span className="lrn-faded-label">COMPLETE EXAMPLE</span>
                <p>
                  For the soliton, we require {`$f, f', f'' \\to 0$`} as {`$\\xi \\to \\pm\\infty$`}
                  . Substituting these boundary conditions into the two integrated equations forces{' '}
                  {`$A = B = 0$`}. The ODE simplifies to
                </p>
                <div className="lrn-eq">
                  <span>{`$$(f')^2 = f^2(2f + c)$$`}</span>
                </div>
                <p>
                  Separate variables: {`$\\frac{df}{f\\sqrt{2f+c}} = \\pm\\,d\\xi$`}. Substitute{' '}
                  {`$f = -\\tfrac{c}{2}\\operatorname{sech}^2\\theta$`}. Then{' '}
                  {`$2f + c = c(1 - \\operatorname{sech}^2\\theta) = c\\tanh^2\\theta$`}
                  and the integral evaluates to {`$\\theta = \\tfrac{\\sqrt{c}}{2}(\\xi - \\xi_0)$`}
                  . The soliton solution is:
                </p>
                <div className="lrn-eq lrn-eq-hero">
                  <span>{`$$f(\\xi) = -\\tfrac{c}{2}\\operatorname{sech}^2\\!\\left[\\tfrac{\\sqrt{c}}{2}(\\xi - x_0)\\right]$$`}</span>
                </div>
              </div>
              <div className="lrn-faded-phase lrn-faded-partial">
                <span className="lrn-faded-label">YOUR TURN: PARTIAL</span>
                <ol className="lrn-list">
                  <li>
                    Start from {`$(f')^2 = f^2(2f+c)$`} and confirm that {`$A = B = 0$`} follows
                    from the soliton boundary conditions.
                  </li>
                  <li>
                    Substitute {`$f = -\\tfrac{c}{2}\\operatorname{sech}^2\\theta$`} and verify that
                    the left side matches the right side of the ODE.
                  </li>
                </ol>
              </div>
              <div className="lrn-faded-phase">
                <span className="lrn-faded-label">INDEPENDENT PRACTICE</span>
                <p>
                  Starting from scratch, derive the soliton solution by integrating the
                  travelling-wave ODE for KdV under soliton boundary conditions. Identify each
                  integration constant and justify its value.
                </p>
              </div>
            </div>
            <div className="lrn-insight">
              <span className="lrn-insight-label">Key Fact</span>
              <p>
                The KdV soliton (negative-nonlinearity convention) is a wave of depression: a
                negative-valued pulse. A wave of elevation follows from the substitution{' '}
                {`$u \\to -u$`}. The convention {`$u_t = 6uu_x - u_{xxx}$`} gives the same soliton
                up to sign and matches Russell's original positive hump.
              </p>
            </div>
            <KdvSoliton />
            <div className="lrn-self-explain">
              <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
              <p>
                In the soliton derivation, why does the boundary condition {`$f \\to 0$`} as{' '}
                {`$\\xi \\to \\pm\\infty$`} force both integration constants to zero? What would
                happen to the solution if {`$A \\neq 0$`}?
              </p>
              <details className="lrn-self-explain-reveal">
                <summary>Expert explanation</summary>
                <p>
                  With {`$f \\to 0$`} at infinity, the once-integrated equation{' '}
                  {`$-cf - 3f^2 + f'' = -A$`} evaluated at {`$\\xi \\to \\pm\\infty$`} gives{' '}
                  {`$0 = -A$`}, so {`$A = 0$`}. Similarly the twice-integrated equation at infinity
                  gives {`$0 = B$`}. If {`$A \\neq 0$`}, the right side of{' '}
                  {`$\\tfrac{1}{2}(f')^2 = F(f)$`} would include a term {`$Af$`} that prevents{' '}
                  {`$F$`} from having a double zero at {`$f = 0$`}. Without the double zero, the
                  solution cannot decay exponentially to zero at infinity.
                </p>
              </details>
            </div>
            <h3>Amplitude, Speed, and Width</h3>
            <p>
              The soliton has three linked properties, all determined by the single speed parameter{' '}
              {`$c$`}:
            </p>
            <ul className="lrn-list">
              <li>Amplitude: {`$|f_\\text{peak}| = c/2$`}</li>
              <li>Speed: {`$c$`} (faster means larger)</li>
              <li>Width: {`$\\propto c^{-1/2}$`} (faster means narrower)</li>
            </ul>
            <p>
              This coupling is the defining property of a soliton. You cannot independently adjust
              amplitude and width: they are locked by {`$c$`}. A taller soliton is always narrower
              and always faster.
            </p>
            <KdvAmplitudeSpeedWidth />
            <div className="lrn-self-explain">
              <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
              <p>
                The width of the KdV soliton is proportional to {`$c^{-1/2}$`}. Why does a faster
                soliton have to be narrower? What physical mechanism forces this?
              </p>
              <details className="lrn-self-explain-reveal">
                <summary>Expert explanation</summary>
                <p>
                  The soliton exists because dispersion and nonlinearity balance. A taller wave has
                  stronger nonlinear steepening (proportional to amplitude). To balance stronger
                  steepening, the dispersive term must also be larger. The dispersive term{' '}
                  {`$u_{xxx}$`} grows with the spatial curvature, which is larger for a narrower
                  profile. So greater amplitude forces greater narrowness through the balance
                  condition.
                </p>
              </details>
            </div>
          </div>
        </>,

        <>
          <div className="lrn-section" id="lrn-section-2">
            <h2>General Waves of Permanent Form</h2>
            <p>
              The master ODE{' '}
              {`$\\tfrac{1}{2}(f')^2 = F(f) \\equiv f^3 + \\tfrac{1}{2}cf^2 + Af + B$`}
              governs all travelling waves. Since {`$(f')^2 \\geq 0$`}, bounded solutions exist only
              where {`$F(f) \\geq 0$`}. The zeros of {`$F$`} classify every possible wave type.
            </p>
            <p>
              This zero-counting view tells you which wave a given equation supports before you
              solve it. The shape of the cubic {`$F(f)$`} gives the answer at a glance. You read off
              the wave type from how the curve sits above the axis.
            </p>
            <p>
              The multiplicity of a root controls the shape of the solution near that root. Near a
              root of multiplicity {`$n$`}, the slope {`$f'$`} scales like {`$(f - f_1)^{n/2}$`}.
              That exponent determines whether the wave turns around, decays exponentially, or blows
              up.
            </p>
            <KdvDispersionVsNonlinearity />
            <div className="lrn-predict">
              <span className="lrn-predict-label">PREDICT</span>
              <p>
                The cubic {`$F(f)$`} can have one, two, or three real zeros. Which configuration of
                zeros gives a periodic wave? Which gives the solitary wave?
              </p>
              <details className="lrn-predict-reveal">
                <summary>Check your thinking</summary>
                <p>
                  Three simple zeros {`$f_3 < f_2 < f_1$`} with {`$F \\geq 0$`} between {`$f_3$`}{' '}
                  and {`$f_2$`} give a periodic (cnoidal) wave: {`$f$`} oscillates between these two
                  roots. A double zero at {`$f = f_1$`} and a single zero at {`$f = f_3 < 0$`} gives
                  the solitary wave: the double zero allows {`$f \\to f_1$`} exponentially as{' '}
                  {`$\\xi \\to \\pm\\infty$`}.
                </p>
              </details>
            </div>
            <h3>Classification of F(f) Zeros</h3>
            <p>
              There are six distinct cases depending on the zero structure of{' '}
              {`$F(f) = f^3 + \\tfrac{1}{2}cf^2 + Af + B$`}:
            </p>
            <div className="table-wrapper">
              <table>
                <thead>
                  <tr>
                    <th>Case</th>
                    <th>Zero structure of F</th>
                    <th>Wave type</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>(a)</td>
                    <td>Three simple zeros, {`$F \\geq 0$`} in outer region</td>
                    <td>Unbounded (algebraic growth)</td>
                  </tr>
                  <tr>
                    <td>(b)</td>
                    <td>
                      Double zero at {`$f_1$`}, simple zero at {`$f_3 < f_1$`}
                    </td>
                    <td>Solitary wave (sech²)</td>
                  </tr>
                  <tr>
                    <td>(c)</td>
                    <td>
                      Three simple zeros {`$f_3 < f_2 < f_1$`}, {`$F \\geq 0$`} between{' '}
                      {`$f_3, f_2$`}
                    </td>
                    <td>Periodic cnoidal wave</td>
                  </tr>
                  <tr>
                    <td>(d)</td>
                    <td>Two double zeros {`$f_2 = f_3 < f_1$`}</td>
                    <td>
                      Kink (monotone connection): the same topological soliton as the sine-Gordon
                      kink met later on this page.
                    </td>
                  </tr>
                  <tr>
                    <td>(e)</td>
                    <td>Triple zero at {`$f_1 = -c/6$`}</td>
                    <td>Singular: {`$f = -c/6 + 2/(\\xi-\\beta)^2$`}</td>
                  </tr>
                  <tr>
                    <td>(f)</td>
                    <td>One real zero (discriminant negative)</td>
                    <td>No bounded solution</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p>
              Case (b) is the solitary wave. The double zero means {`$f$`} approaches {`$f_1$`}
              exponentially as {`$\\xi \\to \\pm\\infty$`}, because{' '}
              {`$F(f) \\approx \\tfrac{1}{2}F''(f_1)(f - f_1)^2$`} near the double zero. This gives{' '}
              {`$f' \\sim \\pm[F''(f_1)/2]^{1/2}(f - f_1)$`}, the exponential tail.
            </p>
            <p>Case (e), the triple zero, gives the singular solution</p>
            <div className="lrn-eq">
              <span>{`$$f(\\xi) = -\\tfrac{c}{6} + \\tfrac{2}{(\\xi - \\beta)^2}$$`}</span>
            </div>
            <p>
              with {`$A = c^2/12$`} and {`$B = c^3/216$`}. This blows up at {`$\\xi = \\beta$`} and
              is not a physical wave, but it connects to the rational solutions of KdV.
            </p>
            <p>
              Work a concrete case. Take {`$c = 6$`}. The triple zero sits at {`$f_1 = -c/6 = -1$`},
              giving {`$A = 3$`} and {`$B = 1$`}. Check:{' '}
              {`$F(f) = f^3 + 3f^2 + 3f + 1 = (f + 1)^3$`}. The factorisation confirms the single
              triple root at {`$f = -1$`}.
            </p>
            <KdvCubicZeroCases />
            <div className="lrn-self-explain">
              <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
              <p>
                A simple zero, a double zero, and a triple zero of {`$F$`} give three different wave
                behaviours. Why does the multiplicity of the root control the shape near{' '}
                {`$f = f_1$`}?
              </p>
              <details className="lrn-self-explain-reveal">
                <summary>Expert explanation</summary>
                <p>
                  Near a root, {`$F(f)$`} behaves like {`$(f - f_1)^n$`} where {`$n$`} is the
                  multiplicity. Since {`$(f')^2 = 2F$`}, the slope {`$f'$`} scales like{' '}
                  {`$(f - f_1)^{n/2}$`}. A simple zero ({`$n = 1$`}) keeps {`$f'$`} nonzero, so{' '}
                  {`$f$`} turns around: a crest or trough.
                </p>
                <p>
                  A double zero ({`$n = 2$`}) makes {`$f' \\propto (f - f_1)$`}, which gives smooth
                  exponential approach to {`$f_1$`} at infinity: the soliton tail. A triple zero (
                  {`$n = 3$`}) makes {`$f'$`} vanish faster still, forcing the algebraic blow-up of
                  the singular solution.
                </p>
              </details>
            </div>
            <div className="lrn-elaborate">
              <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
              <p>
                The six cases are not arbitrary. A cubic with real coefficients has either three
                real roots or one real root plus a complex pair. Counting how the real roots merge
                gives exactly the simple, double, and triple patterns in the table.
              </p>
              <p>
                Each merge has a physical meaning. Two simple roots merging into a double root is
                the cnoidal wave becoming a soliton. Three roots merging into a triple root is the
                soliton becoming the singular rational solution.
              </p>
            </div>
            <div className="lrn-insight">
              <span className="lrn-insight-label">Stability</span>
              <p>
                The KdV solitary wave is stable under small disturbances, and so is the cnoidal
                wave. Both wave types are attractors: small perturbations do not destroy them. Knock
                a soliton slightly and it sheds a little dispersive radiation, then settles back to
                a clean sech² pulse.
              </p>
            </div>
          </div>
        </>,

        <>
          <div className="lrn-section" id="lrn-section-3">
            <h2>Elliptic Functions and the Cnoidal Wave</h2>
            <div className="lrn-predict">
              <span className="lrn-predict-label">PREDICT</span>
              <p>
                The cnoidal wave uses the elliptic function cn with a modulus {`$m$`}. What do you
                expect cn to become when {`$m = 0$`} and when {`$m = 1$`}?
              </p>
              <details className="lrn-predict-reveal">
                <summary>Check your thinking</summary>
                <p>
                  At {`$m = 0$`}, cn reduces to the plain cosine:{' '}
                  {`$\\operatorname{cn}(v|0) = \\cos v$`}. At {`$m = 1$`}, cn reduces to the
                  hyperbolic secant: {`$\\operatorname{cn}(v|1) = \\operatorname{sech}v$`}. One
                  function smoothly links a cosine wave to a soliton pulse.
                </p>
              </details>
            </div>
            <p>
              Korteweg and de Vries named the periodic travelling-wave solution the cnoidal wave in
              1895, after the Jacobian elliptic function cn. The Jacobian elliptic functions sn, cn,
              dn are doubly periodic generalizations of sine and cosine. A modulus{' '}
              {`$m \\in [0,1]$`} sets their shape.
            </p>
            <p>
              Use the cnoidal solution whenever the wave is periodic rather than a single pulse. It
              is the exact periodic travelling wave of KdV. River bores and wave trains in shallow
              channels follow this shape.
            </p>
            <div className="lrn-definition">
              <span className="lrn-definition-term">Jacobian elliptic function cn</span>
              <div className="lrn-definition-desc">
                <p>
                  Define the elliptic integral{' '}
                  {`$v = \\int_0^\\varphi d\\theta / \\sqrt{1 - m\\sin^2\\theta}$`}. Then{' '}
                  {`$\\operatorname{sn}(v) = \\sin\\varphi$`} and{' '}
                  {`$\\operatorname{cn}(v) = \\cos\\varphi$`}. The Pythagorean identity{' '}
                  {`$\\operatorname{cn}^2 + \\operatorname{sn}^2 = 1$`} holds. The derivative is{' '}
                  {`$\\tfrac{d}{dv}\\operatorname{cn} = -\\operatorname{sn}\\,\\operatorname{dn}$`},
                  where {`$\\operatorname{dn}^2 + m\\,\\operatorname{sn}^2 = 1$`}.
                </p>
              </div>
            </div>
            <p>The complete elliptic integral of the first kind is</p>
            <div className="lrn-eq">
              <span>{`$$K(m) = \\int_0^{\\pi/2} \\frac{d\\theta}{\\sqrt{1 - m\\sin^2\\theta}}$$`}</span>
            </div>
            <p>
              It governs the period of cn: {`$K(0) = \\pi/2$`}, while {`$K(m) \\to +\\infty$`}{' '}
              logarithmically as {`$m \\to 1^-$`}:{' '}
              {`$K(m) \\approx \\tfrac{1}{2}\\log\\tfrac{16}{1-m}$`}.
            </p>
            <div className="lrn-elaborate">
              <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
              <p>
                As {`$m \\to 1$`}, the integrand {`$1/\\sqrt{1-\\sin^2\\theta}$`} becomes{' '}
                {`$1/|\\cos\\theta|$`}, which blows up at {`$\\theta = \\pi/2$`}. The integral
                diverges logarithmically. When {`$K$`} diverges, the period of the cnoidal wave
                becomes infinite. An infinite period means the crests march off to infinity, leaving
                one isolated soliton. This is the {`$m \\to 1$`} limit.
              </p>
            </div>
            <h3>The Cnoidal Wave Solution</h3>
            <p>For case (c) with three simple zeros {`$f_1 > f_2 > f_3$`}, the elliptic integral</p>
            <div className="lrn-eq">
              <span>{`$$\\xi = \\xi_3 \\pm \\int_{f_3}^{f} \\frac{dg}{\\sqrt{2(g-f_1)(g-f_2)(g-f_3)}}$$`}</span>
            </div>
            <p>
              reduces to a standard Jacobi form after the substitution{' '}
              {`$g = f_3 + (f_2 - f_3)\\sin^2\\theta$`}. The result is the explicit solution
            </p>
            <div className="lrn-eq lrn-eq-hero">
              <span>{`$$f(\\xi) = f_2 - (f_2 - f_3)\\operatorname{cn}^2\\!\\left[\\left(\\tfrac{f_1-f_3}{2}\\right)^{1/2}(\\xi - \\xi_3)\\,\\bigg|\\,m\\right]$$`}</span>
            </div>
            <p>
              with modulus {`$m = (f_2 - f_3)/(f_1 - f_3)$`}, wave speed{' '}
              {`$c = -2(f_1 + f_2 + f_3)$`}, and wavelength {`$2K(m)\\sqrt{2/(f_1-f_3)}$`}.
            </p>
            <KdvCnoidalWave />
            <div className="lrn-insight">
              <span className="lrn-insight-label">Undular bore</span>
              <p>
                A train of cnoidal waves with slowly varying amplitude and period forms an undular
                bore. This structure appears behind a weak bore in shallow water. The amplitude and
                wavelength adjust gradually across the bore, with the tallest narrowest waves at the
                front.
              </p>
            </div>
          </div>
        </>,

        <>
          <div className="lrn-section" id="lrn-section-4">
            <h2>Limiting Behaviours of the Cnoidal Wave</h2>
            <p>
              The cnoidal wave links two exactly solvable limits. Both follow from the explicit
              solution by taking {`$m \\to 0$`} or {`$m \\to 1$`}.
            </p>
            <p>
              Use these limits to sanity-check any cnoidal result. The {`$m \\to 0$`} limit must
              reproduce linear wave theory. The {`$m \\to 1$`} limit must reproduce the soliton.
              Both checks confirm the general solution is correct.
            </p>
            <div className="lrn-compare">
              <div className="lrn-compare-col">
                <span className="lrn-compare-title">{`$m \\to 0$`}: linear cosine wave</span>
                <p>
                  When {`$m \\to 0$`}, {`$f_2 \\to f_3$`}, the amplitude {`$a = f_2 - f_3 \\to 0$`}.
                  Then {`$\\operatorname{cn}(v|0) = \\cos(v)$`} and the cnoidal wave approaches
                </p>
                <div className="lrn-eq">
                  <span>{`$$f \\approx \\hat{f}_2 - 2a\\cos^2\\!\\left[\\left(\\tfrac{f_1-f_3}{2}\\right)^{1/2}(\\xi-\\xi_3)\\right]$$`}</span>
                </div>
                <p>
                  Here {`$\\hat{f}_2$`} is the mean level the small wave rides on (the average of
                  the two merging roots). Its wavenumber is {`$k = \\sqrt{2(f_1-f_3)}$`} and its
                  dispersion relation, from the speed formula, is
                </p>
                <div className="lrn-eq">
                  <span>{`$$\\omega = -6k\\hat{f}_2 - k^3$$`}</span>
                </div>
                <p>
                  This is the exact dispersion relation for the linearized KdV equation{' '}
                  {`$u_t - 6\\hat{f}_2 u_x + u_{xxx} = 0$`}, confirming consistency. The phase speed{' '}
                  {`$\\omega/k = -6\\hat{f}_2 - k^2$`} differs from the group speed{' '}
                  {`$d\\omega/dk = -6\\hat{f}_2 - 3k^2$`}, the very split that makes the medium
                  dispersive.
                </p>
              </div>
              <div className="lrn-compare-col">
                <span className="lrn-compare-title">{`$m \\to 1$`}: soliton train</span>
                <p>
                  When {`$m \\to 1^-$`}, {`$f_2 \\to f_1$`}, the period diverges. The function{' '}
                  {`$\\operatorname{cn}(v|1) = \\operatorname{sech}(v)$`}. In the boosted frame{' '}
                  {`$X = x + 6f_1 t$`} (which rides along with the nonzero background level{' '}
                  {`$f_1$`}), the wave becomes
                </p>
                <div className="lrn-eq">
                  <span>{`$$f \\to f_1 - \\tfrac{a}{2}\\operatorname{sech}^2\\!\\left[\\tfrac{\\sqrt{a}}{2}(X - at - \\xi_3)\\right]$$`}</span>
                </div>
                <p>
                  This is exactly the KdV soliton with amplitude {`$a = f_1 - f_3$`} and speed{' '}
                  {`$a$`}. The soliton is the {`$m = 1$`} limit of the cnoidal family.
                </p>
              </div>
            </div>
            <p>
              That boost is an instance of KdV's Galilean invariance: replacing{' '}
              {`$u(x,t) \\to u(x - 6ct, t) + c$`} sends a solution on a still background to one
              riding a uniform background level {`$c$`}. Adding a constant to {`$u$`} is the same as
              jumping to a frame moving at speed {`$-6c$`}.
            </p>
            <div className="lrn-self-explain">
              <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
              <p>
                In the {`$m \\to 1$`} limit we switched to the boosted frame {`$X = x + 6f_1 t$`}.
                Why is that frame change needed to recognise the standard soliton?
              </p>
              <details className="lrn-self-explain-reveal">
                <summary>Expert explanation</summary>
                <p>
                  The cnoidal wave sits on a background level {`$f_1$`}, not on zero. That
                  background drifts at speed {`$-6f_1$`} under KdV. The boost {`$X = x + 6f_1 t$`}{' '}
                  rides along with the background, so the moving frame sees a wave on a still
                  backdrop.
                </p>
                <p>
                  In that frame the pulse matches the textbook soliton{' '}
                  {`$-\\tfrac{a}{2}\\operatorname{sech}^2$`} with speed {`$a$`}. Without the boost,
                  the same pulse appears to move at a shifted speed and the clean soliton form is
                  hidden.
                </p>
              </details>
            </div>
          </div>
        </>,

        <>
          <div className="lrn-section" id="lrn-section-5">
            <h2>Other Solutions of the KdV Equation</h2>
            <p>
              Beyond travelling waves, KdV admits several other exact solution families. Each arises
              from a different reduction of the PDE. These solutions matter for real disturbances
              that never settle into a clean soliton. A lump on a canal or an ocean-floor density
              anomaly relaxes slowly over long times. These families describe that relaxation.
            </p>
            <p>
              Reach for these solutions when a travelling wave does not fit the problem. Similarity
              solutions describe how a lump relaxes over long times. Rational solutions probe the
              algebraic structure that underlies the soliton hierarchy.
            </p>
            <h3>Similarity Solutions</h3>
            <p>
              KdV is invariant under the scaling {`$x \\to \\lambda x$`}, {`$t \\to \\lambda^3 t$`},{' '}
              {`$u \\to \\lambda^{-2} u$`}. This symmetry produces similarity solutions of the form
            </p>
            <div className="lrn-eq">
              <span>{`$$u(x,t) = -(3t)^{-2/3} f(\\eta), \\quad \\eta = \\frac{x}{(3t)^{1/3}}$$`}</span>
            </div>
            <p>where {`$f$`} satisfies the ODE</p>
            <div className="lrn-eq">
              <span>{`$$f''' + (6f - \\eta)f' - 2f = 0$$`}</span>
            </div>
            <p>
              This ODE has the Painlevé property you met for sine-Gordon: its only movable
              singularities are poles. When a similarity reduction lands on a Painlevé equation,
              that is a reliable flag that the parent PDE can be solved by the inverse scattering
              transform (the three-step scattering method built later on this page) and carries
              solitons.
            </p>
            <h3>Rational Solutions</h3>
            <p>
              Set {`$u = u(x)$`} (time-independent) so that {`$u_t = 0$`}. KdV reduces to{' '}
              {`$-6uu' + u''' = 0$`}. Integrate once: {`$-3u^2 + u'' = \\text{const}$`}. Require{' '}
              {`$u, u', u'' \\to 0$`} at infinity, which sets that constant to zero, leaving{' '}
              {`$u'' = 3u^2$`}.
            </p>
            <p>
              Multiply by {`$u'$`} and integrate again: {`$\\tfrac{1}{2}(u')^2 = u^3$`}, so{' '}
              {`$(u')^2 = 2u^3$`}. Separate variables: {`$u^{-3/2}\\,du = \\pm\\sqrt{2}\\,dx$`}.
              Integrate to get {`$-2u^{-1/2} = \\pm\\sqrt{2}\\,x$`}, then square and solve for{' '}
              {`$u$`}. The simplest rational solution is
            </p>
            <div className="lrn-eq">
              <span>{`$$u(x,t) = \\frac{2}{x^2}$$`}</span>
            </div>
            <p>
              This is singular at {`$x = 0$`} but is a valid exact solution of KdV for{' '}
              {`$x \\neq 0$`}. It is also the {`$k \\to 0$`} limit of the cosech² solution{' '}
              {`$u = 2k^2\\operatorname{cosech}^2\\{k(x - 4k^2 t)\\}$`}.
            </p>
            <div className="lrn-self-explain">
              <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
              <p>
                We dropped the integration constant by demanding decay at infinity, then ended with
                a solution that blows up at {`$x = 0$`}. Is that a contradiction?
              </p>
              <details className="lrn-self-explain-reveal">
                <summary>Expert explanation</summary>
                <p>
                  No. The decay condition applies as {`$|x| \\to \\infty$`}, and {`$2/x^2$`} does
                  decay there: it tends to zero for large {`$|x|$`}. The blow-up sits at the origin,
                  a separate region the boundary condition never touched.
                </p>
                <p>
                  So {`$2/x^2$`} satisfies both the equation and the far-field decay, yet remains
                  singular at one point. That is why it counts as an exact solution only for{' '}
                  {`$x \\neq 0$`}, not a smooth physical wave.
                </p>
              </details>
            </div>
            <p>
              A more general rational solution, coming from a higher level of the soliton hierarchy,
              is
            </p>
            <div className="lrn-eq">
              <span>{`$$u(x,t) = \\frac{6x(x^3 - 24t)}{(x^3 + 12t)^2}$$`}</span>
            </div>
            <div className="lrn-compare">
              <div className="lrn-compare-col">
                <span className="lrn-compare-title">Soliton solution</span>
                <p>
                  Localised, non-singular, decays to zero at spatial infinity. Carries finite
                  energy. Moves at constant speed. Survives collisions with phase shifts.
                </p>
              </div>
              <div className="lrn-compare-col">
                <span className="lrn-compare-title">Rational solution</span>
                <p>
                  Singular at isolated points. Algebraic decay at infinity. Arises as limiting case
                  of soliton as wave speed {`$c \\to 0$`}. Connected to the soliton hierarchy
                  through Bäcklund transformations (a family of algebraic maps between solutions of
                  the same integrable PDE).
                </p>
              </div>
            </div>
            <div className="lrn-predict">
              <span className="lrn-predict-label">PREDICT</span>
              <p>
                The similarity solution {`$u = -(3t)^{-2/3}f(\\eta)$`} blows up as {`$t \\to 0$`}.
                Does this mean it is physically irrelevant? What does it describe for large {`$t$`}?
              </p>
              <details className="lrn-predict-reveal">
                <summary>Check your thinking</summary>
                <p>
                  For large {`$t$`}, the similarity solution decays as {`$t^{-2/3}$`}: it describes
                  the long-time algebraic relaxation of an initial disturbance. It is relevant
                  precisely in the large-time regime. The singularity at {`$t = 0$`} means it cannot
                  be used as an initial condition, but it is an attractor for a class of initial
                  data.
                </p>
              </details>
            </div>
          </div>
        </>,

        <>
          <div className="lrn-section" id="lrn-section-6">
            <h2>Hidden Symmetry: Infinite Conservation Laws</h2>
            <div className="lrn-predict">
              <span className="lrn-predict-label">PREDICT</span>
              <p>
                Most nonlinear PDEs conserve only a few quantities like mass and energy. How many
                independent conserved quantities do you expect KdV to have?
              </p>
              <details className="lrn-predict-reveal">
                <summary>Check your thinking</summary>
                <p>
                  Infinitely many. KdV carries an endless ladder of conserved integrals {`$I_s$`}.
                  This is the signature of complete integrability and sets KdV apart from generic
                  nonlinear equations.
                </p>
              </details>
            </div>
            <p>
              The KdV equation has an infinite sequence of conserved quantities{' '}
              {`$I_{-1}, I_0, I_1, I_2, \\ldots$`} that are all polynomial functionals of {`$u$`}.
              This is the hallmark of a completely integrable system. Most PDEs have only finitely
              many conservation laws; KdV has infinitely many.
            </p>
            <p>
              These conserved integrals predict the outcome of soliton collisions and test any
              numerical solver. A good solver must keep each {`$I_s$`} fixed in time. Drift in these
              integrals exposes numerical error.
            </p>
            <div className="lrn-definition">
              <span className="lrn-definition-term">Conservation laws of KdV</span>
              <div className="lrn-definition-desc">
                <p>The first four integrals are:</p>
                <ul className="lrn-list">
                  <li>{`$I_{-1} = \\int u\\,dx$`} (mass)</li>
                  <li>{`$I_0 = \\int u^2\\,dx$`} (momentum)</li>
                  <li>
                    {`$I_1 = \\int \\left(\\tfrac{(u')^2}{2} + u^3\\right)dx$`} (energy,
                    Hamiltonian)
                  </li>
                  <li>{`$I_2 = \\int \\left(\\tfrac{(u'')^2}{2} - \\tfrac{5}{2}u^2 u'' + \\tfrac{5}{2}u^4\\right)dx$`}</li>
                </ul>
              </div>
            </div>
            <KdvConservationLaws />
            <p>
              Verify the first law directly. Write KdV as {`$u_t = 6uu_x - u_{xxx}$`}. The right
              side is a perfect {`$x$`}-derivative: {`$u_t = \\partial_x(3u^2 - u_{xx})$`}. So mass
              density {`$u$`} obeys a conservation law with flux {`$3u^2 - u_{xx}$`}.
            </p>
            <p>
              Now integrate over all space. The time derivative of {`$I_{-1} = \\int u\\,dx$`}{' '}
              equals{' '}
              {`$\\int \\partial_x(3u^2 - u_{xx})\\,dx = [3u^2 - u_{xx}]_{-\\infty}^{+\\infty}$`}.
              With {`$u, u_{xx} \\to 0$`} at infinity, this boundary term vanishes. Therefore{' '}
              {`$dI_{-1}/dt = 0$`}: the mass is conserved.
            </p>
            <div className="lrn-self-explain">
              <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
              <p>
                The proof needed the right side of KdV to be a pure {`$x$`}-derivative. Why does
                that form guarantee the integral over all space is conserved?
              </p>
              <details className="lrn-self-explain-reveal">
                <summary>Expert explanation</summary>
                <p>
                  A density whose time rate equals {`$\\partial_x(\\text{flux})$`} satisfies a local
                  conservation law. Integrating {`$\\partial_x$`} of anything over the whole line
                  gives only the boundary values, by the fundamental theorem of calculus.
                </p>
                <p>
                  When the field decays at infinity, those boundary values are zero. So the total
                  integral cannot change in time. The same trick proves {`$I_0$`}, {`$I_1$`}, and
                  the whole ladder, each with its own flux.
                </p>
              </details>
            </div>
            <div className="lrn-elaborate">
              <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
              <p>
                The infinite ladder of conserved quantities first showed up in numerical
                experiments. A computer simulation of KdV revealed that almost any starting lump
                breaks into a finite number of clean solitons as {`$t \\to \\infty$`}, and the
                solitons pass through each other unchanged. That surprising persistence is what
                earned these waves the name "soliton." Each soliton carries its own share of the
                conserved integrals, which is why so many quantities stay fixed.
              </p>
              <p>
                The infinitely many integrals {`$I_s$`} are all simultaneously in involution: their
                pairwise Poisson brackets (a bracket measures how two quantities fail to commute
                under the flow) all vanish. This is the condition for complete integrability in the
                Liouville sense.
              </p>
            </div>
            <div className="lrn-compare">
              <div className="lrn-compare-col">
                <span className="lrn-compare-title">Elastic soliton collision</span>
                <p>
                  Two KdV solitons collide and emerge with exactly the same speeds and shapes as
                  before. Only their positions shift. The phase shift is a measurable prediction of
                  the inverse scattering theory.
                </p>
              </div>
              <div className="lrn-compare-col">
                <span className="lrn-compare-title">Generic nonlinear collision</span>
                <p>
                  Two waves in a generic nonlinear PDE collide inelastically: they exchange energy,
                  change shape, and may break up into radiation. The soliton's particle-like
                  behavior is non-generic.
                </p>
              </div>
            </div>
            <div className="lrn-insight">
              <span className="lrn-insight-label">Common misconception</span>
              <p>
                The phase shift is not a simple time delay. The taller (faster) soliton emerges
                ahead of where it would have been without the collision. The shorter one emerges
                behind. They do not bounce or pause: the taller one speeds through, the shorter one
                is held back slightly. The shift is a position offset, not a time offset.
              </p>
            </div>
            <KdvTwoSolitonCollision />
            <h3>The Lax Pair</h3>
            <p>
              KdV is equivalent to a single operator equation. Define the Sturm-Liouville operator{' '}
              {`$L = -\\partial^2 + u$`} (a Schrödinger-type operator whose eigenvalues are energy
              levels) and the skew-adjoint operator (one satisfying {`$A^\\dagger = -A$`}){' '}
              {`$A = 4\\partial^3 - 3(u\\partial + \\partial u)$`}. Then KdV is the same as
            </p>
            <div className="lrn-eq">
              <span>{`$$\\dot{L} = [L, A] = LA - AL$$`}</span>
            </div>
            <p>
              This pair of operators {`$(L, A)$`} is called the Lax pair. The trick is to read the
              KdV field {`$u(x,t)$`} as the potential in a Schrödinger problem. Freeze time and you
              have a static potential {`$u(x)$`} with its own set of energy levels. As {`$u$`}{' '}
              evolves by KdV, the potential changes shape, yet the energy levels stay locked in
              place. The spectrum is frozen even though the potential is not.
            </p>
            <div className="lrn-proof">
              <span className="lrn-proof-label">WHY THE SPECTRUM IS FROZEN</span>
              <p>
                Take an eigenfunction {`$\\psi$`} with {`$L\\psi = \\lambda\\psi$`}. Let everything
                evolve in time and differentiate this eigenvalue equation:
              </p>
              <div className="lrn-eq">
                <span>{`$$\\dot{L}\\psi + L\\dot{\\psi} = \\dot{\\lambda}\\psi + \\lambda\\dot{\\psi}.$$`}</span>
              </div>
              <p>Now substitute {`$\\dot{L} = [L, A] = LA - AL$`} on the left and rearrange:</p>
              <div className="lrn-eq">
                <span>{`$$(L - \\lambda)(\\dot{\\psi} - A\\psi) = \\dot{\\lambda}\\,\\psi.$$`}</span>
              </div>
              <p>
                Take the inner product with {`$\\psi$`}. Since {`$L$`} is self-adjoint,{' '}
                {`$\\langle\\psi, (L-\\lambda)(\\cdots)\\rangle = \\langle(L-\\lambda)\\psi, \\cdots\\rangle = 0$`}
                . The right side then gives {`$\\dot{\\lambda}\\,\\langle\\psi, \\psi\\rangle = 0$`}
                , so {`$\\dot{\\lambda} = 0$`}. Each eigenvalue is a constant of the KdV flow.
              </p>
            </div>
            <p>
              So the Schrödinger equation {`$-X'' + u(x)X = \\lambda X$`} with potential {`$u$`}{' '}
              evolving by KdV has isospectral flow: the set of eigenvalues {`$\\lambda$`} never
              changes. Those eigenvalues are an infinite supply of first integrals, one of the
              cleanest sources of the conservation laws above.
            </p>
            <h3>The Inverse Scattering Transform</h3>
            <p>
              Isospectral flow turns the hard nonlinear KdV problem into three easy steps. The
              scattering data of {`$L$`} (the eigenvalues plus a reflection coefficient and a
              "norming constant" for each bound state) evolve by simple linear rules. So you encode
              the starting profile in scattering data, evolve that data linearly, then rebuild{' '}
              {`$u$`} from it. This three-step detour is the inverse scattering transform, and it
              linearises KdV.
            </p>
            <div className="lrn-steps">
              <ol className="lrn-list">
                <li>
                  <strong>Scatter.</strong> Read the starting profile {`$u(x,0)$`} as a Schrödinger
                  potential and find its scattering data: the bound-state eigenvalues{' '}
                  {`$\\lambda = -\\kappa_n^2$`}, the reflection coefficient {`$b(k)$`}, and a
                  norming constant {`$c_n$`} for each bound state.
                </li>
                <li>
                  <strong>Evolve.</strong> Let time run. The eigenvalues stay fixed (isospectral
                  flow), while each norming constant grows as{' '}
                  {`$c_n(t) = c_n(0)\\,e^{4\\kappa_n^3 t}$`}
                  and the reflection coefficient picks up a phase. This step is linear and trivial.
                </li>
                <li>
                  <strong>Rebuild.</strong> Reconstruct {`$u(x,t)$`} from the evolved data by
                  solving a linear integral equation (the Gelfand-Levitan-Marchenko equation) and
                  reading off the potential.
                </li>
              </ol>
            </div>
            <div className="lrn-faded">
              <div className="lrn-faded-phase">
                <span className="lrn-faded-label">COMPLETE EXAMPLE: ONE SOLITON</span>
                <p>
                  Start with the depression {`$u(x,0) = -2\\operatorname{sech}^2 x$`}. The
                  Schrödinger problem {`$-X'' - 2\\operatorname{sech}^2 x\\,X = \\lambda X$`} has
                  exactly one bound state, at {`$\\lambda = -1$`} (so {`$\\kappa = 1$`}), and it is{' '}
                  <em>reflectionless</em>: the reflection coefficient {`$b(k) = 0$`} for every{' '}
                  {`$k$`}. A reflectionless potential is one that lets every incoming wave pass
                  straight through with no echo, which is exactly the special structure a single
                  soliton carries. The norming constant is {`$c(0) = \\sqrt{2}$`}.
                </p>
                <p>
                  <strong>Evolve.</strong> The eigenvalue holds at {`$\\kappa = 1$`}; the norming
                  constant grows as {`$c(t) = \\sqrt{2}\\,e^{4t}$`}. With one bound state and no
                  reflection, the kernel of the rebuild step is separable:{' '}
                  {`$F(\\xi; t) = c(t)^2 e^{-\\kappa\\xi} = 2e^{8t - \\xi}$`}.
                </p>
                <p>
                  <strong>Rebuild.</strong> The Gelfand-Levitan-Marchenko equation
                </p>
                <div className="lrn-eq">
                  <span>{`$$K(x, z; t) + F(x + z; t) + \\int_x^\\infty K(x, y; t)\\,F(y + z; t)\\,dy = 0$$`}</span>
                </div>
                <p>
                  becomes a one-line algebra problem because {`$F$`} factorises into an
                  {`$x$`}-piece times a {`$z$`}-piece. Solving for {`$K$`} and using{' '}
                  {`$u(x,t) = -2\\dfrac{d}{dx}K(x,x;t)$`} gives back a moving sech² pulse:
                </p>
                <div className="lrn-eq lrn-eq-hero">
                  <span>{`$$u(x,t) = -2\\operatorname{sech}^2(x - 4t).$$`}</span>
                </div>
                <p>
                  This is the KdV soliton with {`$\\kappa = 1$`}: amplitude {`$2\\kappa^2 = 2$`},
                  speed {`$4\\kappa^2 = 4$`}. It matches the travelling-wave soliton{' '}
                  {`$-\\tfrac{c}{2}\\operatorname{sech}^2[\\tfrac{\\sqrt{c}}{2}(x - ct)]$`} with{' '}
                  {`$c = 4\\kappa^2$`}: the two routes agree exactly.
                </p>
              </div>
              <div className="lrn-faded-phase lrn-faded-partial">
                <span className="lrn-faded-label">YOUR TURN: PARTIAL</span>
                <ol className="lrn-list">
                  <li>
                    For a general single bound state {`$\\kappa$`}, write the evolved kernel{' '}
                    {`$F(\\xi; t) = c(t)^2 e^{-\\kappa\\xi}$`} with{' '}
                    {`$c(t) = c(0)e^{4\\kappa^3 t}$`} and confirm the soliton speed comes out{' '}
                    {`$4\\kappa^2$`}.
                  </li>
                  <li>
                    Check that{' '}
                    {`$u = -2\\kappa^2\\operatorname{sech}^2[\\kappa(x - 4\\kappa^2 t)]$`} has
                    amplitude {`$2\\kappa^2$`} and matches the {`$c = 4\\kappa^2$`} travelling wave.
                  </li>
                </ol>
              </div>
              <div className="lrn-faded-phase">
                <span className="lrn-faded-label">INDEPENDENT PRACTICE</span>
                <p>
                  A starting potential with two bound states {`$\\kappa_1 > \\kappa_2$`} (still
                  reflectionless) rebuilds into two solitons. Predict their amplitudes and speeds,
                  and which one ends up ahead at large time.
                </p>
              </div>
            </div>
            <h3>KdV as a Hamiltonian System</h3>
            <p>
              KdV is a completely integrable infinite-dimensional Hamiltonian system: it has
              infinitely many degrees of freedom yet still obeys Hamiltonian mechanics. The phase
              space carries a symplectic structure built from the antisymmetric pairing{' '}
              {`$\\tfrac{1}{2}\\int (w\\,\\partial_x v - v\\,\\partial_x w)\\,dx$`}, the
              infinite-dimensional version of the area form you met for Poisson structures in Part
              IV.
            </p>
            <p>
              The Hamiltonian is {`$I_1$`}. The equation of motion is{' '}
              {`$\\dot{u} = \\tfrac{d}{dx}\\tfrac{\\delta I_1}{\\delta u}$`}. Each integral{' '}
              {`$I_s$`} generates a "higher KdV flow" {`$\\dot{u} = Q_s[u]$`} that commutes with all
              others. All these flows share the same soliton solutions.
            </p>
          </div>
        </>,

        <>
          <div className="lrn-section" id="lrn-section-7">
            <h2>Related Equations and Extensions</h2>
            <div className="lrn-predict">
              <span className="lrn-predict-label">PREDICT</span>
              <p>
                The KdV soliton has a sech² profile from a quadratic nonlinearity. If you change the
                nonlinearity to cubic ({`$u^2 u_x$`}), what profile do you expect the soliton to
                take?
              </p>
              <details className="lrn-predict-reveal">
                <summary>Check your thinking</summary>
                <p>
                  A plain sech profile, not sech². The cubic nonlinearity of modified KdV produces a
                  soliton {`$u \\propto \\operatorname{sech}$`}. The power of the nonlinearity sets
                  the power of the sech.
                </p>
              </details>
            </div>
            <p>
              The KdV structure appears across many physical contexts. Understanding it illuminates
              a family of integrable equations.
            </p>
            <p>
              Use this family map when your physical system has a different nonlinearity or an extra
              spatial dimension. Match the nonlinearity to the right cousin equation. Each cousin
              keeps the soliton idea but changes the profile or geometry.
            </p>
            <h3>Modified KdV and the Gardner Equation</h3>
            <p>
              The modified KdV (mKdV) equation replaces the quadratic nonlinearity with a cubic one:
            </p>
            <div className="lrn-eq">
              <span>{`$$u_t + 6u^2 u_x + u_{xxx} = 0$$`}</span>
            </div>
            <p>
              Its soliton solution has a sech form (not sech²). The generalised KdV{' '}
              {`$u_t + (n+1)(n+2)u^n u_x + u_{xxx} = 0$`} covers both KdV ({`$n=1$`}) and mKdV (
              {`$n=2$`}).
            </p>
            <p>The Gardner (mixed KdV-mKdV) equation is</p>
            <div className="lrn-eq">
              <span>{`$$u_t - 6uu_x + u_{xxx} = 12\\delta u^2 u_x$$`}</span>
            </div>
            <p>
              It runs smoothly between KdV ({`$\\delta = 0$`}) and mKdV ({`$\\delta \\to \\infty$`}{' '}
              after rescaling) and is relevant to internal waves in stratified fluids.
            </p>
            <h3>The Miura Transformation</h3>
            <p>
              KdV and mKdV are not just cousins; one feeds the other through a direct map. Take any
              solution {`$v$`} of mKdV in the form {`$v_t - 6v^2 v_x + v_{xxx} = 0$`} and build
            </p>
            <div className="lrn-eq lrn-eq-hero">
              <span>{`$$u = v_x + v^2.$$`}</span>
            </div>
            <p>
              Then {`$u$`} solves the KdV equation {`$u_t - 6uu_x + u_{xxx} = 0$`}. This is the
              Miura transformation. Every mKdV solution hands you a KdV solution for free, though
              the map runs only one way: not every KdV solution comes from an mKdV one.
            </p>
            <div className="lrn-elaborate">
              <span className="lrn-elaborate-label">WHY INFINITELY MANY CONSERVATION LAWS?</span>
              <p>
                The Miura map is the engine behind the infinite ladder of conserved integrals.
                Insert a small parameter {`$\\varepsilon$`} and write the generalised map{' '}
                {`$u = w - \\varepsilon w_x - \\varepsilon^2 w^2$`}. Substituting it turns KdV into
                Gardner's equation {`$w_t - 6(w + \\varepsilon^2 w^2)w_x + w_{xxx} = 0$`}, which is
                itself a conservation law: {`$w_t = \\partial_x(\\cdots)$`}, so {`$\\int w\\,dx$`}{' '}
                stays fixed for every value of {`$\\varepsilon$`}.
              </p>
              <p>
                Now expand {`$w = w_0 + \\varepsilon w_1 + \\varepsilon^2 w_2 + \\cdots$`} as a
                power series in {`$\\varepsilon$`} and match the map order by order. Each power of{' '}
                {`$\\varepsilon$`} gives one more conserved density, written entirely in terms of{' '}
                {`$u$`} and its derivatives. One generating relation, expanded forever, produces the
                whole endless ladder {`$I_{-1}, I_0, I_1, \\ldots$`} at once.
              </p>
            </div>
            <div className="lrn-compare">
              <div className="lrn-compare-col">
                <span className="lrn-compare-title">KdV soliton</span>
                <p>
                  Profile {`$\\operatorname{sech}^2$`}. Quadratic nonlinearity. Wave of elevation or
                  depression. Amplitude {`$c/2$`}.
                </p>
              </div>
              <div className="lrn-compare-col">
                <span className="lrn-compare-title">mKdV soliton</span>
                <p>
                  Profile {`$\\operatorname{sech}$`}. Cubic nonlinearity. Also completely
                  integrable. Breather solutions exist (bound states of two solitons).
                </p>
              </div>
            </div>
            <h3>The Sine-Gordon Equation</h3>
            <p>The sine-Gordon equation in laboratory coordinates is</p>
            <div className="lrn-eq">
              <span>{`$$\\varphi_{xx} - \\varphi_{tt} = \\sin\\varphi$$`}</span>
            </div>
            <p>
              It is invariant under Lorentz transformations (with unit light speed). Its
              travelling-wave solution is the kink: a monotone profile that runs from {`$0$`} to{' '}
              {`$2\\pi$`}, the kink-and-breather topological soliton you met for the sine-Gordon
              equation. The one structural contrast worth keeping in view here: the KdV soliton
              returns to its background on both sides and carries no topological charge, so it can
              be shrunk smoothly to nothing, while the kink cannot.
            </p>
            <h3>The Kadomtsev-Petviashvili (KP) Equation</h3>
            <p>The KP equation is the two-dimensional extension of KdV:</p>
            <div className="lrn-eq">
              <span>{`$$(u_t - 6uu_x + u_{xxx})_x + 3u_{yy} = 0$$`}</span>
            </div>
            <p>It allows obliquely propagating solitons. Its exact soliton solution is</p>
            <div className="lrn-eq">
              <span>{`$$u(x,y,t) = -\\tfrac{k^2}{2}\\operatorname{sech}^2\\!\\left[\\tfrac{1}{2}(kx + ly - \\omega t)\\right], \\quad \\omega = k^3 + \\frac{3l^2}{k}$$`}</span>
            </div>
            <p>
              The alternative sign version {`$(u_t - 6uu_x + u_{xxx})_x - 3u_{yy} = 0$`} (KP-II) has
              different moduli space structure and describes lump solutions.
            </p>
            <p>
              Check that KP reduces to KdV. Set the transverse wavenumber {`$l = 0$`}, so the wave
              has no {`$y$`}-dependence. The KP soliton speed becomes{' '}
              {`$\\omega/k = (k^3 + 0)/k = k^2$`}. The KdV soliton with argument coefficient{' '}
              {`$\\tfrac{k}{2}$`} has amplitude {`$\\tfrac{k^2}{2}$`} and speed {`$k^2$`}, which
              matches exactly. The transverse term {`$3l^2/k$`} is the only new physics in 2D.
            </p>
            <div className="lrn-self-explain">
              <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
              <p>
                For fixed {`$k$`}, the KP soliton speed {`$\\omega/k = k^2 + 3l^2/k^2$`} grows as
                the transverse wavenumber {`$l$`} grows. Why does tilting the wave front speed it
                up?
              </p>
              <details className="lrn-self-explain-reveal">
                <summary>Expert explanation</summary>
                <p>
                  A nonzero {`$l$`} means the crests run at an angle to the {`$x$`}-axis. The phase
                  pattern in the {`$x$`}-direction then moves faster than the wave itself, because
                  the same crest sweeps along {`$x$`} as it advances diagonally.
                </p>
                <p>
                  Picture an ocean swell hitting a beach at an angle. The point where the crest
                  meets the shoreline races along faster than the wave travels. The term{' '}
                  {`$3l^2/k$`} captures that geometric speed-up.
                </p>
              </details>
            </div>
            <div className="lrn-elaborate">
              <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
              <p>
                These equations share more than a family resemblance. KdV, mKdV, sine-Gordon, and KP
                are all completely integrable. Each one has a Lax pair, an infinite set of
                conservation laws, and solitons that survive collisions.
              </p>
              <p>
                The shared structure is no accident. They all sit inside the same inverse-scattering
                framework. Learning the KdV machinery hands you most of the tools needed for every
                cousin in the list.
              </p>
            </div>
          </div>
        </>,

        <>
          <div className="lrn-section" id="lrn-section-8">
            <h2>Poisson Structures and Complete Integrability</h2>
            <div className="lrn-predict">
              <span className="lrn-predict-label">PREDICT</span>
              <p>
                A standard Hamiltonian system pairs each coordinate with one momentum. What goes
                wrong if the Poisson bracket has a direction that brackets to zero with everything?
              </p>
              <details className="lrn-predict-reveal">
                <summary>Check your thinking</summary>
                <p>
                  That direction becomes a conserved Casimir: it never changes under any flow. The
                  bracket is then degenerate, and the phase space splits into leaves. The dynamics
                  stays trapped on one leaf, set by the Casimir value.
                </p>
              </details>
            </div>
            <p>
              KdV runs on the Poisson-bracket machinery you met in Part IV: a degenerate bracket,
              its conserved Casimirs, and the symplectic leaves they carve out. The one new fact is
              the bracket itself. For functionals of {`$u$`} it is
            </p>
            <div className="lrn-eq">
              <span>{`$$\\{F, G\\} = \\int \\frac{\\delta F}{\\delta u}\\,\\partial_x\\,\\frac{\\delta G}{\\delta u}\\,dx.$$`}</span>
            </div>
            <p>
              The operator {`$\\partial_x$`} sits where the finite-dimensional bracket has its
              symplectic matrix. It is degenerate: a constant shift in {`$u$`} brackets to zero with
              everything, so that direction is a Casimir, exactly the role {`$M^2$`} played for
              angular momentum in Part IV. The KdV flow stays on one symplectic leaf, fixed by the
              Casimir value, just as a rigid-body flow stays on its sphere {`$M^2 = \\text{const}$`}
              .
            </p>
            <p>
              The periodic problem for KdV adds one more layer. Put a periodic potential into{' '}
              {`$L = -\\partial^2 + u$`} and its spectrum breaks into a finite number of bands
              (ranges of the spectral parameter where solutions grow rather than oscillate). These
              "finite-zone potentials" give exact KdV solutions written with theta functions on
              algebraic curves, and the number of zones equals the number of solitons in one period.
              This is the deepest level of the KdV solution theory.
            </p>
            <div className="lrn-insight">
              <span className="lrn-insight-label">Nonlinear Schrödinger equation</span>
              <p>
                The nonlinear Schrödinger (NLS) equation {`$iu_t + u_{xx} + u|u|^2 = 0$`} is another
                completely integrable soliton equation in the same family. Its soliton is an
                envelope pulse used in fiber-optic communications: a light pulse that travels
                through hundreds of kilometers of glass fiber without spreading. The mKdV breather
                is related to NLS solitons through gauge transformations.
              </p>
            </div>
          </div>
        </>
      ]
    },

    practice: [
      {
        q: `Write down the standard form of the KdV equation. Identify which term causes nonlinear steepening and which causes dispersion.`,
        a: `The standard form is $u_t - 6uu_x + u_{xxx} = 0$. The term $-6uu_x$ causes nonlinear steepening: larger amplitudes move faster, tilting the wave forward. The term $u_{xxx}$ causes dispersion: it gives different wavenumbers different phase speeds, spreading the wave in space.`
      },
      {
        q: `What is the KdV soliton solution? Give the explicit formula and state the values of its amplitude, speed, and width in terms of $c$.`,
        a: `The soliton is $f(\\xi) = -\\tfrac{c}{2}\\operatorname{sech}^2\\!\\left[\\tfrac{\\sqrt{c}}{2}(x - ct - x_0)\\right]$. Amplitude is $c/2$, speed is $c$, and the half-width is proportional to $c^{-1/2}$. All three quantities are fixed by the single parameter $c$: larger $c$ means larger, faster, and narrower.`
      },
      {
        q: `A KdV soliton has amplitude $1.5$. What is its speed and what is the value of the sech² argument coefficient $\\tfrac{\\sqrt{c}}{2}$?`,
        a: `Amplitude is $c/2$, so $c = 3.0$. The speed is $c = 3.0$. The argument coefficient is $\\tfrac{\\sqrt{3}}{2} \\approx 0.866$. The soliton is $-1.5\\operatorname{sech}^2[0.866(x - 3t)]$.`
      },
      {
        q: `In the travelling-wave derivation, the ODE integrates to $\\tfrac{1}{2}(f')^2 = f^3 + \\tfrac{1}{2}cf^2 + Af + B$. Why are the constants $A = B = 0$ for the soliton?`,
        a: `The soliton requires $f, f', f'' \\to 0$ as $\\xi \\to \\pm\\infty$. Evaluating the once-integrated equation $-cf - 3f^2 + f'' = -A$ at $\\xi \\to \\pm\\infty$ gives $0 = -A$. Evaluating the twice-integrated equation at infinity gives $0 = B$. Any nonzero $A$ or $B$ would force $F(f)$ to have no double zero at $f=0$, preventing exponential decay to the background.`
      },
      {
        q: `Predict: two KdV solitons are launched from the same starting position. The first has amplitude $3$ and the second has amplitude $1$. Which one reaches a downstream marker first, and why?`,
        a: `The taller soliton arrives first. For a KdV soliton, speed equals $c$ and amplitude equals $c/2$, so speed is proportional to amplitude. A taller soliton has a larger $c$ and therefore travels faster. The amplitude-3 soliton has $c = 6$; the amplitude-1 soliton has $c = 2$. The first soliton moves three times faster and arrives well ahead of the second.`
      },
      {
        q: `Explain the six cases of the cubic $F(f)$ zeros. Which case gives the soliton and which gives the cnoidal wave?`,
        a: `The six cases arise from the zero structure of $F(f) = f^3 + \\tfrac{1}{2}cf^2 + Af + B$. Bounded real solutions require $F(f) \\geq 0$ on the solution interval. A double zero at $f_1$ with a simple zero below gives the soliton (case b): $f$ approaches $f_1$ exponentially. Three simple zeros $f_3 < f_2 < f_1$ with $F \\geq 0$ between $f_3$ and $f_2$ give the periodic cnoidal wave (case c). A triple zero gives a singular solution. No real bounded wave exists if there is only one real zero.`
      },
      {
        q: `What is the elliptic integral $K(m)$ and what happens to it as $m \\to 1^-$? Why does this matter for the cnoidal wave?`,
        a: `$K(m) = \\int_0^{\\pi/2} d\\theta / \\sqrt{1 - m\\sin^2\\theta}$. As $m \\to 1^-$, $K(m) \\to +\\infty$ logarithmically: $K(m) \\approx \\tfrac{1}{2}\\log(16/(1-m))$. The cnoidal wavelength is $2K(m)\\sqrt{2/(f_1-f_3)}$. When $K \\to \\infty$, the wavelength diverges and the periodic wave becomes a single isolated soliton: an infinite period means one crest per fundamental domain.`
      },
      {
        q: `Write the explicit cnoidal wave solution with parameters $f_1, f_2, f_3$. Give the formula for $m$ and the wave speed $c$.`,
        a: `The cnoidal wave is $f(\\xi) = f_2 - (f_2-f_3)\\operatorname{cn}^2\\!\\left[\\left(\\tfrac{f_1-f_3}{2}\\right)^{1/2}(\\xi-\\xi_3)\\,\\big|\\,m\\right]$ with $m = (f_2-f_3)/(f_1-f_3)$ and speed $c = -2(f_1+f_2+f_3)$. The wavelength is $2K(m)\\sqrt{2/(f_1-f_3)}$. The three roots must satisfy $f_1 > f_2 > f_3$.`
      },
      {
        q: `A cnoidal wave has $f_1 = 0$, $f_2 = -0.4$, $f_3 = -1$. Compute $m$, the wave speed $c$, and describe whether this wave is closer to a cosine or a soliton train.`,
        a: `$m = (f_2-f_3)/(f_1-f_3) = (-0.4-(-1))/(0-(-1)) = 0.6/1 = 0.6$. Speed: $c = -2(0 + (-0.4) + (-1)) = -2(-1.4) = 2.8$. With $m = 0.6$, the wave is between the two extremes but notably non-sinusoidal, with sharper peaks than a cosine but not yet a soliton train. The ratio $K(0.6)/K(0) \\approx (1.75)/(\\pi/2) \\approx 1.11$ shows moderate elongation.`
      },
      {
        q: `What is the $m \\to 0$ limit of the cnoidal wave? What dispersion relation does it recover?`,
        a: `As $m \\to 0$, $\\operatorname{cn}(v|0) = \\cos(v)$ and the amplitude $a = f_2 - f_3 \\to 0$. The cnoidal wave becomes a small-amplitude cosine wave. The speed formula gives the dispersion relation $\\omega = -6k\\hat{f}_2 - k^3$. This is exactly the linearized KdV dispersion relation, confirming that the cnoidal family includes linear wave theory as its small-amplitude limit.`
      },
      {
        q: `What is the $m \\to 1$ limit of the cnoidal wave? Write the result in the boosted frame $X = x + 6f_1 t$.`,
        a: `As $m \\to 1$, $\\operatorname{cn}(v|1) = \\operatorname{sech}(v)$ and $f_2 \\to f_1$. In the boosted frame $X = x + 6f_1 t$, the cnoidal wave becomes $f \\to f_1 - \\tfrac{a}{2}\\operatorname{sech}^2\\!\\left[\\tfrac{\\sqrt{a}}{2}(X - at - \\xi_3)\\right]$ with $a = f_1 - f_3$. This is the KdV soliton of amplitude $a/2$ travelling at speed $a$ in the boosted frame.`
      },
      {
        q: `A water wave in a tidal bore context shows a train of waves becoming taller and narrower toward the front. What wave type does this describe and what parameter controls the transition?`,
        a: `This is an undular bore: a slowly varying cnoidal wave train. Near the front, the modulus $m$ is close to 1 (near-soliton regime), giving tall narrow pulses. Near the back, $m$ is smaller, giving lower broader waves closer to sinusoidal. The parameter $m$ varies continuously across the bore, with $m \\to 1$ at the front. This structure is the self-similar solution of KdV on a long spatial scale.`
      },
      {
        q: `Write the KdV similarity solution. What ODE does $f$ satisfy and what is the significance of a Painlevé equation appearing?`,
        a: `The similarity solution is $u(x,t) = -(3t)^{-2/3}f(\\eta)$ with $\\eta = x/(3t)^{1/3}$. The function $f$ satisfies $f''' + (6f-\\eta)f' - 2f = 0$, a Painlevé-type ODE. The appearance of a Painlevé equation for a PDE reduction is a strong signal that the PDE possesses an inverse scattering transform. The Painlevé property (solutions have only pole singularities in the complex plane) is a necessary condition for complete integrability.`
      },
      {
        q: `Verify that $u = 2/x^2$ is a solution of KdV $u_t - 6uu_x + u_{xxx} = 0$.`,
        a: `Since $u = 2/x^2$ is time-independent, $u_t = 0$. Compute: $u_x = -4/x^3$, $u_{xx} = 12/x^4$, $u_{xxx} = -48/x^5$. Also $6uu_x = 6(2/x^2)(-4/x^3) = -48/x^5$. Then $u_t - 6uu_x + u_{xxx} = 0 - (-48/x^5) + (-48/x^5) = 0$. It satisfies KdV identically for $x \\neq 0$. This solution is singular at the origin, making it physically usable only away from $x = 0$.`
      },
      {
        q: `State the four conservation laws $I_{-1}$ through $I_2$ of KdV. Why is $I_1$ called the energy?`,
        a: `$I_{-1} = \\int u\\,dx$, $I_0 = \\int u^2\\,dx$, $I_1 = \\int \\left(\\tfrac{(u')^2}{2} + u^3\\right)dx$, $I_2 = \\int \\left(\\tfrac{(u'')^2}{2} - \\tfrac{5}{2}u^2u'' + \\tfrac{5}{2}u^4\\right)dx$. $I_1$ is the Hamiltonian: the KdV equation can be written $u_t = \\partial_x(\\delta I_1/\\delta u)$. This is the Hamiltonian form with the standard $\\partial_x$ Poisson operator. $I_1$ plays the role of energy in the variational formulation.`
      },
      {
        q: `State the Lax pair for KdV. What does the condition $\\dot{L} = [L, A]$ imply about the spectrum of $L$?`,
        a: `The Lax pair is $L = -\\partial^2 + u$ and $A = 4\\partial^3 - 3(u\\partial + \\partial u)$. The equation $\\dot{L} = [L,A]$ is equivalent to the KdV equation. Its key implication: $\\dot{L} = [L,A]$ is an isospectral flow. If $L\\psi = \\lambda\\psi$, then differentiating gives $\\dot{L}\\psi + L\\dot{\\psi} = \\dot{\\lambda}\\psi + \\lambda\\dot{\\psi}$, which with $\\dot{L} = [L,A]$ shows $\\dot{\\lambda} = 0$. The eigenvalues of $L$ are first integrals of the KdV flow.`
      },
      {
        q: `What is the Gardner (mixed KdV-mKdV) equation and in what physical context does it arise?`,
        a: `The Gardner equation is $u_t - 6uu_x + u_{xxx} = 12\\delta u^2 u_x$. It runs smoothly between KdV ($\\delta = 0$) and mKdV in the limit $\\delta \\to \\infty$ (after rescaling). It arises in the theory of internal waves in stratified fluids, where both quadratic and cubic nonlinearities appear. It is also completely integrable and admits soliton solutions.`
      },
      {
        q: `You observe a wave that maintains its shape while travelling. You measure its peak height as $3.0$ and its speed as $4.0$. Is this consistent with it being a KdV soliton?`,
        a: `For a KdV soliton, amplitude is $c/2$ and speed is $c$. If amplitude is $3.0$, then $c = 6.0$, giving speed $6.0$. But the measured speed is $4.0 \\neq 6.0$. These values are inconsistent with the KdV soliton relation: amplitude $= c/2$ and speed $= c$ cannot be independently specified. Either the wave is not a KdV soliton, or the measurements contain error, or the wave lives on a non-zero background that shifts the effective speed.`
      },
      {
        q: `Describe the elastic collision of two KdV solitons. What changes and what does not change after they collide?`,
        a: `After the collision, both solitons emerge with exactly the same speeds and shapes (same amplitudes and widths) as before. What changes is only the phase: each soliton has shifted slightly from where it would have been without the interaction. The taller (faster) soliton shifts forward and the shorter one shifts backward. This elastic behavior follows from the infinite conservation laws: each $I_s$ is preserved individually, which constrains the outcome of every collision.`
      },
      {
        q: `The KP equation is $(u_t - 6uu_x + u_{xxx})_x + 3u_{yy} = 0$. Write its soliton solution and give the dispersion relation for oblique waves with wavevector $(k, l)$.`,
        a: `The KP soliton is $u(x,y,t) = -\\tfrac{k^2}{2}\\operatorname{sech}^2\\!\\left[\\tfrac{1}{2}(kx+ly-\\omega t)\\right]$ with $\\omega = k^3 + 3l^2/k$. For $l=0$ this reduces to the standard KdV soliton with speed $\\omega/k = k^2$. The term $3l^2/k$ is the correction from transverse variation. For fixed $k$, waves with larger $|l|$ travel faster, making the 2D wave structure more complex than in 1D.`
      },
      {
        q: `What does the positive-nonlinearity convention $u_t = 6uu_x - u_{xxx}$ mean for the soliton, compared to the standard form $u_t - 6uu_x + u_{xxx} = 0$?`,
        a: `The two forms are related by $u \\to -u$. Under this substitution, a wave of depression (negative peak) in the standard form becomes a wave of elevation (positive peak) in the positive-nonlinearity form. The form $u_t = 6uu_x - u_{xxx}$ gives a soliton that is a positive hump, matching the original shallow-water physical picture (Russell's wave of translation). The mathematical content is identical; only the sign convention differs.`
      },
      {
        q: `The singular KdV solution is $u = 2k^2\\operatorname{cosech}^2\\{k(x-4k^2t)\\}$. Show that in the limit $k \\to 0$ (keeping $kx = $ const) this approaches $2/x^2$.`,
        a: `For small $k$, $\\operatorname{cosech}^2(kx) = 1/\\sinh^2(kx) \\approx 1/(kx)^2 = 1/(k^2x^2)$ since $\\sinh(kx) \\approx kx$ for $kx \\ll 1$. Then $2k^2 \\cdot 1/(k^2 x^2) = 2/x^2$. So the cosech² solution approaches the rational solution $u = 2/x^2$ as $k \\to 0$. The time dependence $4k^2t \\to 0$ in this limit, making the solution time-independent.`
      },
      {
        q: `What is the finite-zone classification of periodic KdV solutions and why does it matter?`,
        a: `Periodic solutions of KdV are classified by the number of bands of the Sturm-Liouville operator $L = -\\partial^2 + u$ with periodic $u$. A periodic potential splits the spectrum into bands, and the special "finite-zone" potentials have only a finite number of them. These give KdV solutions expressible in terms of theta functions on algebraic curves (Riemann surfaces). This is the most complete solution of the periodic KdV problem. The number of zones equals the number of solitons in one period.`
      },
      {
        q: `Use the Miura transformation to build a KdV solution from the trivial mKdV solution $v = 0$, then from the constant mKdV solution $v = a$. What KdV solutions do you get?`,
        a: `The Miura map is $u = v_x + v^2$, taking a solution $v$ of $v_t - 6v^2v_x + v_{xxx} = 0$ to a solution $u$ of $u_t - 6uu_x + u_{xxx} = 0$. For $v = 0$: $u = 0 + 0 = 0$, the trivial flat solution. For a constant $v = a$: $v_x = 0$, so $u = a^2$, a constant background. Both check out directly in KdV since constants make every $x$-derivative vanish. The map shows every mKdV solution hands you a KdV solution, but the reverse is not guaranteed.`
      },
      {
        q: `Why does the cnoidal wave period $2K(m)\\sqrt{2/(f_1-f_3)}$ diverge as $m \\to 1$? Use the asymptotic form of $K(m)$.`,
        a: `As $m \\to 1^-$, $K(m) \\approx \\tfrac{1}{2}\\log(16/(1-m)) \\to \\infty$. The prefactor $\\sqrt{2/(f_1-f_3)}$ stays finite (since $f_1 - f_3$ remains nonzero at $m=1$). So the period diverges logarithmically. An infinite period means the wave has only one crest per fundamental domain: the soliton. At $m = 0.999$, $K \\approx 3.8$, and a soliton-like profile is already visible. The $K$ divergence and the infinite period are the same fact stated two ways.`
      },
      {
        q: `What is the Hamiltonian structure of KdV? Write the Poisson bracket and the equation of motion in Hamiltonian form.`,
        a: `The KdV Hamiltonian is $H = I_1 = \\int (\\tfrac{(u')^2}{2} + u^3)\\,dx$. The Poisson bracket is $\\{F, G\\} = \\int (\\delta F/\\delta u)\\,\\partial_x\\,(\\delta G/\\delta u)\\,dx$. The equation of motion is $u_t = \\{u, H\\} = \\partial_x(\\delta H/\\delta u)$. Explicitly, $\\delta H/\\delta u = -u'' + 3u^2$, so $u_t = \\partial_x(-u_{xx} + 3u^2) = -u_{xxx} + 6uu_x$, which is KdV. The operator $\\partial_x$ in the Poisson bracket is the non-degenerate part of the symplectic structure.`
      },
      {
        q: `A travelling-wave problem gives the cubic $F(f) = (f - 1)^2(f + 2)$. Which of the six cases is this, and what wave does it describe?`,
        a: `Result: this is case (b), the solitary wave. Steps: read the roots from the factors. There is a double zero at $f = 1$ and a simple zero at $f = -2$. So $f_1 = 1$ (double) sits above $f_3 = -2$ (simple). The factor $(f - 1)^2$ is never negative, so $F \\geq 0$ exactly when $f + 2 \\geq 0$, that is on $f \\geq -2$. The wave runs between the simple zero $f_3 = -2$ and the double zero $f_1 = 1$. Why: near the double zero $f' \\propto (f - 1)$, which gives exponential approach to $f_1 = 1$ at infinity, the sech² soliton tail. So this cubic encodes a solitary wave that decays to the level $f = 1$.`
      },
      {
        q: `A numerical KdV solver reports that $\\int u^2\\,dx$ slowly grows by 3% over a long run. What does this tell you about the simulation?`,
        a: `Result: the simulation has numerical error. Steps: $\\int u^2\\,dx$ is the conserved integral $I_0$ (momentum). For an exact KdV solution it must stay fixed for all time. A 3% drift means the discrete scheme is not preserving $I_0$. Why: every $I_s$ is an exact invariant of the continuous flow, so any change signals that the time-stepping or spatial discretisation is leaking the quantity. Fix it by using a smaller step, a finer grid, or a structure-preserving (symplectic) integrator that conserves the invariants by design.`
      },
      {
        q: `What is the KdV Poisson bracket $\\{F, G\\}$? Write it explicitly and identify which operator replaces the finite-dimensional $\\partial/\\partial p_i$.`,
        a: `The KdV Poisson bracket is $\\{F, G\\} = \\int (\\delta F/\\delta u)\\,\\partial_x\\,(\\delta G/\\delta u)\\,dx$, where $\\delta F/\\delta u$ is the functional derivative. The operator $\\partial_x$ plays the role that $\\sum_i (\\partial/\\partial q_i \\otimes \\partial/\\partial p_i - \\partial/\\partial p_i \\otimes \\partial/\\partial q_i)$ plays in finite dimensions. Because $\\partial_x$ is not invertible on all of function space, the bracket is degenerate: some functionals (the Casimirs) bracket to zero with everything. This degeneracy is why the phase space is a Poisson manifold, not a symplectic manifold.`
      },
      {
        q: `Predict: if you start KdV with a large positive initial hump $u(x,0) = A\\operatorname{sech}^2(x)$, describe qualitatively what happens for large time. How many solitons emerge and what are their relative speeds?`,
        a: `For large time, the initial hump breaks into a finite number of solitons (the number depends on $A$) plus dispersive radiation. The solitons emerge ordered: the tallest (fastest) one leads, the shortest (slowest) one follows. Each soliton has a different speed proportional to its amplitude. Between them trails a spreading dispersive tail. This is the inverse scattering prediction: the number of solitons equals the number of bound-state eigenvalues of the associated Schrödinger equation $-X'' + u(x,0)X = \\lambda X$ with $\\lambda < 0$.`
      }
    ],

    reference: {
      category: 'Quick Reference',
      title: 'Korteweg-de Vries Equation and Solitons',
      sections: [
        <>
          <div className="ref-section">
            <h2>Core Equations</h2>
            <div className="ref-formula">
              <div className="ref-formula-name">KdV Equation (standard form)</div>
              <div className="ref-formula-eq">{`$$u_t - 6uu_x + u_{xxx} = 0$$`}</div>
              <div className="ref-formula-desc">
                When to use: the canonical form for soliton calculations. The {`$-6uu_x$`} term
                steepens; {`$u_{xxx}$`} disperses. Related by {`$u \\to -u$`} to the
                positive-nonlinearity form {`$u_t = 6uu_x - u_{xxx}$`}.
              </div>
            </div>
            <div className="ref-formula">
              <div className="ref-formula-name">Travelling-wave ODE (integrated twice)</div>
              <div className="ref-formula-eq">{`$$\\tfrac{1}{2}(f')^2 = f^3 + \\tfrac{1}{2}cf^2 + Af + B$$`}</div>
              <div className="ref-formula-desc">
                When to use: starting point for all travelling-wave analysis. Right side is{' '}
                {`$F(f)$`}; its zero structure classifies every wave type.
              </div>
            </div>
            <div className="ref-formula">
              <div className="ref-formula-name">KdV Soliton</div>
              <div className="ref-formula-eq">{`$$f(\\xi) = -\\tfrac{c}{2}\\operatorname{sech}^2\\!\\left[\\tfrac{\\sqrt{c}}{2}(x - ct - x_0)\\right]$$`}</div>
              <div className="ref-formula-desc">
                When to use: the unique localised solution. Amplitude {`$c/2$`}, speed {`$c$`},
                width {`$\\propto c^{-1/2}$`}. Set {`$A = B = 0$`} (soliton BCs). Exists for all{' '}
                {`$c \\geq 0$`}.
              </div>
            </div>
          </div>
          <div className="ref-section">
            <h2>Cnoidal Wave</h2>
            <div className="ref-formula">
              <div className="ref-formula-name">Cnoidal wave solution</div>
              <div className="ref-formula-eq">{`$$f(\\xi) = f_2 - (f_2-f_3)\\operatorname{cn}^2\\!\\left[\\left(\\tfrac{f_1-f_3}{2}\\right)^{1/2}(\\xi-\\xi_3)\\,\\big|\\,m\\right]$$`}</div>
              <div className="ref-formula-desc">
                When to use: periodic travelling waves with three roots {`$f_1 > f_2 > f_3$`}.
                Modulus {`$m = (f_2-f_3)/(f_1-f_3) \\in [0,1]$`}. Speed {`$c = -2(f_1+f_2+f_3)$`}.
                Period {`$= 2K(m)\\sqrt{2/(f_1-f_3)}$`}.
              </div>
            </div>
            <div className="ref-formula">
              <div className="ref-formula-name">Elliptic integral K(m)</div>
              <div className="ref-formula-eq">{`$$K(m) = \\int_0^{\\pi/2} \\frac{d\\theta}{\\sqrt{1-m\\sin^2\\theta}}, \\quad K(0) = \\tfrac{\\pi}{2}, \\quad K(m) \\approx \\tfrac{1}{2}\\log\\tfrac{16}{1-m} \\text{ as } m\\to 1$$`}</div>
              <div className="ref-formula-desc">
                When to use: computing cnoidal wave period and the {`$m \\to 1$`} limit. Divergence
                of {`$K$`} corresponds to infinite period (soliton limit).
              </div>
            </div>
            <div className="table-wrapper">
              <table>
                <thead>
                  <tr>
                    <th>Limit</th>
                    <th>cn behaviour</th>
                    <th>Wave type</th>
                    <th>Dispersion relation</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{`$m \\to 0$`}</td>
                    <td>{`$\\operatorname{cn}(v|0) = \\cos v$`}</td>
                    <td>Linear cosine wave</td>
                    <td>{`$\\omega = -6k\\hat{f}_2 - k^3$`}</td>
                  </tr>
                  <tr>
                    <td>{`$m \\to 1$`}</td>
                    <td>{`$\\operatorname{cn}(v|1) = \\operatorname{sech}v$`}</td>
                    <td>Soliton (period {`$\\to \\infty$`})</td>
                    <td>Speed {`$= c = a$`}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="ref-section">
            <h2>Zero Classification of F(f)</h2>
            <div className="table-wrapper">
              <table>
                <thead>
                  <tr>
                    <th>Case</th>
                    <th>Zero structure</th>
                    <th>Wave type</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>(b)</td>
                    <td>
                      Double zero at {`$f_1$`}, simple zero at {`$f_3$`}
                    </td>
                    <td>Solitary wave (sech²)</td>
                  </tr>
                  <tr>
                    <td>(c)</td>
                    <td>Three simple zeros {`$f_3 < f_2 < f_1$`}</td>
                    <td>Cnoidal wave (cn²)</td>
                  </tr>
                  <tr>
                    <td>(d)</td>
                    <td>Two double zeros</td>
                    <td>Kink / topological soliton</td>
                  </tr>
                  <tr>
                    <td>(e)</td>
                    <td>Triple zero at {`$-c/6$`}</td>
                    <td>Singular: {`$-c/6 + 2/(\\xi-\\beta)^2$`}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="ref-section">
            <h2>Other Solutions</h2>
            <div className="ref-formula">
              <div className="ref-formula-name">Similarity solution</div>
              <div className="ref-formula-eq">{`$$u = -(3t)^{-2/3}f(\\eta), \\quad \\eta = x/(3t)^{1/3}, \\quad f''' + (6f-\\eta)f' - 2f = 0$$`}</div>
              <div className="ref-formula-desc">
                When to use: self-similar large-time asymptotics. The ODE is Painlevé type; its
                appearance signals complete integrability.
              </div>
            </div>
            <div className="ref-formula">
              <div className="ref-formula-name">Rational solution (simplest)</div>
              <div className="ref-formula-eq">{`$$u(x,t) = \\frac{2}{x^2}$$`}</div>
              <div className="ref-formula-desc">
                When to use: verifying the rational solution family. Singular at {`$x=0$`}. Limit of
                cosech² solution as {`$k \\to 0$`}. Satisfies KdV for {`$x \\neq 0$`}.
              </div>
            </div>
            <div className="ref-formula">
              <div className="ref-formula-name">Singular cosech² solution</div>
              <div className="ref-formula-eq">{`$$u(x,t) = 2k^2\\operatorname{cosech}^2\\{k(x - 4k^2t)\\}$$`}</div>
              <div className="ref-formula-desc">
                When to use: complementary to the sech² soliton. Singular at the origin of the wave.
                Approaches {`$2/x^2$`} as {`$k \\to 0$`}.
              </div>
            </div>
            <div className="ref-formula">
              <div className="ref-formula-name">Gardner equation</div>
              <div className="ref-formula-eq">{`$$u_t - 6uu_x + u_{xxx} = 12\\delta u^2 u_x$$`}</div>
              <div className="ref-formula-desc">
                When to use: mixed KdV-mKdV regime; internal waves in stratified fluids. Runs
                smoothly between KdV ({`$\\delta = 0$`}) and mKdV ({`$\\delta \\to \\infty$`} after
                rescaling). Completely integrable.
              </div>
            </div>
          </div>
          <div className="ref-section">
            <h2>Conservation Laws and Integrability</h2>
            <div className="ref-formula">
              <div className="ref-formula-name">Conservation laws</div>
              <div className="ref-formula-eq">{`$$I_{-1} = \\int u\\,dx, \\quad I_0 = \\int u^2\\,dx, \\quad I_1 = \\int\\!\\left(\\tfrac{(u')^2}{2}+u^3\\right)\\!dx$$`}</div>
              <div className="ref-formula-desc">
                When to use: checking integrability or verifying soliton collisions. {`$I_1$`} is
                the Hamiltonian. All {`$I_s$`} are in involution: their pairwise Poisson brackets
                vanish.
              </div>
            </div>
            <div className="ref-formula">
              <div className="ref-formula-name">KdV Poisson bracket</div>
              <div className="ref-formula-eq">{`$$\\{F, G\\} = \\int \\frac{\\delta F}{\\delta u}\\,\\partial_x\\,\\frac{\\delta G}{\\delta u}\\,dx$$`}</div>
              <div className="ref-formula-desc">
                When to use: Hamiltonian mechanics on function space. The operator {`$\\partial_x$`}{' '}
                is degenerate (has a kernel), making the phase space a Poisson manifold. Casimir
                functionals (those with {`$\\{C, F\\} = 0$`} for all {`$F$`}) foliate the space into
                symplectic leaves.
              </div>
            </div>
            <div className="ref-formula">
              <div className="ref-formula-name">Lax pair</div>
              <div className="ref-formula-eq">{`$$L = -\\partial^2 + u, \\quad A = 4\\partial^3 - 3(u\\partial + \\partial u), \\quad \\dot{L} = [L, A]$$`}</div>
              <div className="ref-formula-desc">
                When to use: proving isospectral flow and existence of first integrals. The KdV
                equation is equivalent to {`$\\dot{L} = [L,A]$`}. The eigenvalues of {`$L$`} are
                conserved.
              </div>
            </div>
            <div className="ref-formula">
              <div className="ref-formula-name">Hamiltonian form</div>
              <div className="ref-formula-eq">{`$$u_t = \\frac{d}{dx}\\frac{\\delta I_1}{\\delta u}$$`}</div>
              <div className="ref-formula-desc">
                When to use: expressing KdV as an infinite-dimensional Hamiltonian system. Each{' '}
                {`$I_s$`} generates a higher KdV flow {`$u_t = Q_s[u]$`} commuting with all others.
              </div>
            </div>
          </div>
          <div className="ref-section">
            <h2>Related Equations</h2>
            <div className="ref-formula">
              <div className="ref-formula-name">Modified KdV (mKdV)</div>
              <div className="ref-formula-eq">{`$$u_t + 6u^2 u_x + u_{xxx} = 0$$`}</div>
              <div className="ref-formula-desc">
                When to use: cubic nonlinearity regime. Soliton profile is sech (not sech²). Admits
                breather solutions.
              </div>
            </div>
            <div className="ref-formula">
              <div className="ref-formula-name">KP equation (2D KdV)</div>
              <div className="ref-formula-eq">{`$$(u_t - 6uu_x + u_{xxx})_x + 3u_{yy} = 0, \\quad \\omega = k^3 + 3l^2/k$$`}</div>
              <div className="ref-formula-desc">
                When to use: obliquely propagating solitons in 2D. Reduces to KdV for {`$l = 0$`}.
              </div>
            </div>
            <div className="ref-formula">
              <div className="ref-formula-name">Sine-Gordon kink</div>
              <div className="ref-formula-eq">{`$$\\varphi_{xx} - \\varphi_{tt} = \\sin\\varphi, \\quad \\varphi = 4\\arctan\\left[C\\exp\\!\\left(\\frac{x-\\lambda t}{\\sqrt{1-\\lambda^2}}\\right)\\right]$$`}</div>
              <div className="ref-formula-desc">
                When to use: topological soliton with Lorentz invariance. Kink runs smoothly from{' '}
                {`$\\varphi = 0$`} to {`$2\\pi$`}.
              </div>
            </div>
          </div>
        </>
      ]
    },

    customCss: null
  }

  return <LearningTemplate config={config} />
}
