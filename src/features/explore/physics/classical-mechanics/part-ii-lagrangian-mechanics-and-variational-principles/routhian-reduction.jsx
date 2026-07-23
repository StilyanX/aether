import { LearningTemplate } from '../../../../../components/learning/learning-template'
import {
  KeplerEffectivePotential,
  SymmetricTopPotential,
  CyclicMomentumPhaseLine
} from '../../../../../components/viz'

export default function RouthianReductionForCyclicCoordinates() {
  const config = {
    cssPrefix: 'rr',
    documentTitle: 'Routhian Reduction for Cyclic Coordinates - AETHER',
    learning: {
      category: 'Module 2',
      groupTitle: 'Lagrangian Mechanics and Variational Principles',
      title: 'Routhian Reduction for Cyclic Coordinates',
      subtitle:
        "When a coordinate is absent from the Lagrangian, Routh's method lets you solve a smaller system and recover the rest by integration.",
      sections: [
        <>
          <div className="lrn-section" id="lrn-section-0">
            <h2>What a Cyclic Coordinate Is, and Why It Helps</h2>

            <div className="lrn-predict">
              <span className="lrn-predict-label">PREDICT</span>
              <p>
                A planet orbits a star. You write its Lagrangian in polar coordinates
                {` $(r, \\phi)$`}. The angle {`$\\phi$`} does not appear in {`$L$`} explicitly.
                Before reading on: does that mean you have fewer equations to solve? Or is{' '}
                {`$\\phi$`} still required?
              </p>
              <details className="lrn-predict-reveal">
                <summary>Check your thinking</summary>
                <p>
                  {`$\\dot{\\phi}$`} still appears in {`$L$`} (through the kinetic energy
                  {` $\\frac{1}{2}m r^2 \\dot{\\phi}^2$`}), so in the Lagrangian framework you still
                  have two coupled equations to solve. The benefit comes later, when you use Routh's
                  method to fully eliminate {`$\\phi$`} and reduce the problem to one equation for{' '}
                  {`$r$`} alone.
                </p>
              </details>
            </div>

            <div className="lrn-definition">
              <span className="lrn-definition-term">Cyclic Coordinate</span>
              <div className="lrn-definition-desc">
                <p>
                  A generalized coordinate {`$q_n$`} is <strong>cyclic</strong> if it does not
                  appear explicitly in the Lagrangian:
                </p>
                <p>{`$L = L(q_1,\\ldots,q_{n-1};\\,\\dot{q}_1,\\ldots,\\dot{q}_n;\\,t)$`}</p>
                <p>
                  Note that {`$\\dot{q}_n$`} still appears. The coordinate is absent; its velocity
                  is not.
                </p>
              </div>
            </div>

            <p>
              You already met cyclic coordinates and their conserved momenta in earlier topics. A
              quick recall: when {`$q_n$`} is cyclic, its Euler-Lagrange equation becomes
              {` $\\frac{d}{dt}\\frac{\\partial L}{\\partial \\dot{q}_n} = 0$`}, so the{' '}
              <strong>conjugate momentum</strong> (the quantity{' '}
              {`$\\partial L/\\partial \\dot{q}_n$`} paired with that coordinate) stays fixed:
            </p>
            <div className="lrn-eq lrn-eq-hero">
              <span>{`$$p_n = \\frac{\\partial L}{\\partial \\dot{q}_n} = \\alpha = \\mathrm{const}$$`}</span>
            </div>
            <p>
              This is Noether's theorem, which you saw before: a continuous symmetry of {`$L$`}
              (here, shifting {`$q_n$`} changes nothing) hands you a conserved quantity (here,{' '}
              {`$p_n$`}).
            </p>

            <div className="lrn-callout lrn-warning">
              <span className="lrn-callout-label">Common Mistake</span>
              <p>
                <strong>Cyclic does not mean the velocity disappears.</strong> The coordinate{' '}
                {`$q_n$`} is absent from {`$L$`}, but {`$\\dot{q}_n$`} still appears through the
                kinetic energy. So even though you know {`$p_n = \\alpha$`} is constant, in the
                Lagrangian framework you still have {`$n$`} coupled second-order equations. The
                velocity {`$\\dot{q}_n$`} couples to every other equation, and the system does not
                automatically shrink to {`$n{-}1$`} unknowns. Routh's method, built next, is what
                finally removes it.
              </p>
            </div>

            <div className="lrn-callout lrn-tip">
              <span className="lrn-callout-label">When to use this</span>
              <p>
                Reach for cyclic-coordinate reduction whenever a coordinate is absent from {`$L$`}.
                Common examples: the azimuthal angle in any central-force problem, a translation
                direction in a uniform field, Euler angles of a symmetric body. The conserved
                momentum is your reward.
              </p>
            </div>
          </div>
        </>,

        <>
          <div className="lrn-section" id="lrn-section-1">
            <h2>Trading a Velocity for Its Conserved Momentum</h2>

            <div className="lrn-predict">
              <span className="lrn-predict-label">PREDICT</span>
              <p>
                You know {`$p_n = \\alpha$`} is fixed. The cyclic velocity {`$\\dot{q}_n$`} still
                clutters {`$L$`}. Since {`$p_n = \\partial L/\\partial \\dot{q}_n$`} ties the two
                together, can you solve that relation for {`$\\dot{q}_n$`} and replace it with{' '}
                {`$\\alpha$`} everywhere? What goes wrong if you just plug it into {`$L$`}?
              </p>
              <details className="lrn-predict-reveal">
                <summary>Check your thinking</summary>
                <p>
                  You can solve {`$p_n = \\partial L/\\partial \\dot{q}_n$`} for {`$\\dot{q}_n$`}{' '}
                  and set {`$p_n = \\alpha$`}. But naively substituting back into {`$L$`} gives the
                  wrong equations: {`$L$`} was built to be varied with {`$\\dot{q}_n$`} as the
                  independent variable, not {`$\\alpha$`}. You need a slightly different object that
                  treats {`$\\alpha$`} correctly. That object is the Routhian, built below.
                </p>
              </details>
            </div>

            <p>
              You already carry one tool that swaps a velocity for a momentum: the energy function
            </p>
            <div className="lrn-eq">
              <span>{`$$h = \\sum_i \\dot{q}_i\\,\\frac{\\partial L}{\\partial \\dot{q}_i} - L,$$`}</span>
            </div>
            <p>
              which you derived earlier as the conserved charge of time-translation. Look at one
              term of it. The piece{' '}
              {`$\\dot{q}_n\\,\\partial L/\\partial \\dot{q}_n = p_n\\dot{q}_n$`} is exactly the
              velocity {`$\\dot{q}_n$`} multiplied by its own momentum {`$p_n$`}. Subtracting that
              single term from {`$L$`} is the trade we want for the cyclic coordinate, and only for
              it.
            </p>

            <div className="lrn-insight">
              <span className="lrn-insight-label">The Velocity-for-Momentum Swap</span>
              <p>
                Take the cyclic coordinate {`$q_n$`} with its conserved momentum {`$p_n$`}. Build
                the combination {`$p_n\\dot{q}_n - L$`}. Because{' '}
                {`$p_n = \\partial L/\\partial
                \\dot{q}_n$`}
                , this combination no longer changes when you wiggle {`$\\dot{q}_n$`} at fixed{' '}
                {`$p_n$`}: it depends on {`$p_n$`} instead of {`$\\dot{q}_n$`}. You have traded the
                velocity for its momentum as the variable you track. This is the same move that
                turns {`$L$`} into {`$h$`}, but applied to one coordinate at a time.
              </p>
            </div>

            <p>
              A one-line instance makes it concrete. For a free particle in a plane,
              {` $L = \\frac{1}{2}m(\\dot{x}^2 + \\dot{y}^2)$`} with {`$x$`} cyclic. Then
              {` $p_x = m\\dot{x}$`}, so {`$\\dot{x} = p_x/m$`}, and the swapped combination is
            </p>
            <div className="lrn-eq">
              <span>{`$$p_x\\dot{x} - L = \\frac{p_x^2}{m} - \\frac{p_x^2}{2m} - \\frac{1}{2}m\\dot{y}^2 = \\frac{p_x^2}{2m} - \\frac{1}{2}m\\dot{y}^2.$$`}</span>
            </div>
            <p>
              The velocity {`$\\dot{x}$`} is gone, replaced by the constant {`$p_x$`}. The remaining
              {` $\\dot{y}$`} is untouched. That is the entire idea, and the next section names it.
            </p>

            <div className="lrn-callout lrn-tip">
              <span className="lrn-callout-label">Looking ahead</span>
              <p>
                Swapping <em>every</em> velocity for its momentum at once gives a new master
                function of coordinates and momenta. That full swap is the Hamiltonian, and you meet
                it in the next unit. Here you do the swap for the cyclic coordinates only, which is
                all you need to shrink the problem.
              </p>
            </div>
          </div>
        </>,

        <>
          <div className="lrn-section" id="lrn-section-2">
            <h2>Routh's Idea: Best of Both Worlds</h2>

            <div className="lrn-predict">
              <span className="lrn-predict-label">PREDICT</span>
              <p>
                You have {`$s$`} noncyclic coordinates and {`$n{-}s$`} cyclic ones. You want the
                velocity-for-momentum swap on the cyclic part and Lagrange's familiar second-order
                equations for the rest. Which velocities should you swap, and which should you leave
                alone?
              </p>
              <details className="lrn-predict-reveal">
                <summary>Check your thinking</summary>
                <p>
                  Swap only the cyclic velocities {`$\\dot{q}_{s+1},\\ldots,\\dot{q}_n$`} for their
                  momenta, and leave the noncyclic velocities {`$\\dot{q}_1,\\ldots,\\dot{q}_s$`}{' '}
                  untouched. Doing the swap on just part of the velocities is what defines the
                  Routhian.
                </p>
              </details>
            </div>

            <p>
              Routh's insight was to do exactly this. Apply the velocity-for-momentum swap from the
              last section to <em>every</em> cyclic coordinate at once, and the object you build is
              the <strong>Routhian</strong> {`$R$`}. Because the swap touches only some of the
              velocities, it is called a <strong>partial transform</strong> (swapping every velocity
              would instead build the next unit's Hamiltonian):
            </p>
            <div className="lrn-eq lrn-eq-hero">
              <span>{`$$R(q_1,\\ldots,q_n;\\,\\dot{q}_1,\\ldots,\\dot{q}_s;\\,p_{s+1},\\ldots,p_n;\\,t) = \\sum_{i=s+1}^{n} p_i \\dot{q}_i - L$$`}</span>
            </div>

            <div className="lrn-faded">
              <div className="lrn-faded-phase">
                <span className="lrn-faded-label">ONE-COORDINATE INSTANCE</span>
                <p>
                  A projectile in a vertical plane has{' '}
                  {`$L = \\frac{1}{2}m(\\dot{x}^2 + \\dot{y}^2) - mgy$`} with {`$x$`} cyclic. Then
                  {` $p_x = m\\dot{x}$`}, so {`$\\dot{x} = p_x/m$`}. The sum in the definition runs
                  over the one cyclic coordinate {`$x$`}:
                </p>
                <p>{`$$R = p_x\\dot{x} - L = \\frac{p_x^2}{2m} - \\frac{1}{2}m\\dot{y}^2 + mgy.$$`}</p>
                <p>
                  The cyclic velocity {`$\\dot{x}$`} is replaced by the constant {`$p_x$`}; the
                  noncyclic {`$\\dot{y}$`} stays. {`$R$`} is now ready to give a single equation for
                  the vertical motion {`$y$`}.
                </p>
              </div>
            </div>

            <div className="lrn-self-explain">
              <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
              <p>
                Why does leaving the noncyclic velocities untransformed matter? What would you lose
                by swapping all the velocities instead of just the cyclic ones?
              </p>
              <details className="lrn-self-explain-reveal">
                <summary>Expert explanation</summary>
                <p>
                  Leaving the noncyclic velocities in place keeps Lagrange's second-order form for
                  those coordinates. That form gives acceleration directly and matches physical
                  intuition for oscillating or orbiting motion.
                </p>
                <p>
                  Swapping every velocity would turn each remaining coordinate into a pair of
                  first-order equations instead. Those are harder to read for oscillatory motion and
                  need more bookkeeping. Stopping the swap halfway is the entire point: you keep the
                  intuitive second-order equations exactly where you want them.
                </p>
              </details>
            </div>

            <div className="lrn-callout lrn-tip">
              <span className="lrn-callout-label">When to use this</span>
              <p>
                Use Routh's procedure when your system has cyclic coordinates to eliminate and
                noncyclic coordinates where you prefer Lagrange's second-order form.
              </p>
              <p>
                A spinning top, a central-force orbit, and a constrained rigid body all benefit from
                this split.
              </p>
            </div>
          </div>
        </>,

        <>
          <div className="lrn-section" id="lrn-section-3">
            <h2>Building the Routhian: Step-by-Step Derivation</h2>

            <div className="lrn-predict">
              <span className="lrn-predict-label">PREDICT</span>
              <p>
                Starting from {`$R = p\\dot{q} - L$`} (two-coordinate case, one cyclic
                {` $q$`}, one noncyclic {`$\\xi$`}), what do you expect {`$dR$`} to look like? Write
                it in terms of {`$dq$`}, {`$dp$`}, {`$d\\xi$`}, {`$d\\dot{\\xi}$`}
                before reading the derivation.
              </p>
              <details className="lrn-predict-reveal">
                <summary>Check your thinking</summary>
                <p>
                  {`$dR = d(p\\dot{q} - L) = p\\,d\\dot{q} + \\dot{q}\\,dp - dL$`}. Writing out{' '}
                  {`$dL$`} and cancelling {`$p\\,d\\dot{q}$`} terms gives
                  {` $dR = -\\dot{p}\\,dq + \\dot{q}\\,dp - (\\partial L/\\partial\\xi)\\,d\\xi - (\\partial L/\\partial\\dot{\\xi})\\,d\\dot{\\xi}$`}
                  .
                </p>
              </details>
            </div>

            <p>
              Work in the simplest setup: one cyclic coordinate {`$q$`} and one noncyclic coordinate
              {` $\\xi$`}. The generalization to many coordinates follows the same pattern.
            </p>

            <div className="lrn-proof">
              <span className="lrn-proof-header">Derivation: The Routhian Differential</span>

              <div className="lrn-proof-step">
                <span className="lrn-proof-step-num">1.</span>
                <div className="lrn-proof-step-content">
                  <p>
                    <strong>Write out {`$dL$`}.</strong> The Lagrangian depends on
                    {` $q$`}, {`$\\dot{q}$`}, {`$\\xi$`}, {`$\\dot{\\xi}$`}:
                  </p>
                  <p>{`$$dL = \\frac{\\partial L}{\\partial q}\\,dq + \\frac{\\partial L}{\\partial \\dot{q}}\\,d\\dot{q} + \\frac{\\partial L}{\\partial \\xi}\\,d\\xi + \\frac{\\partial L}{\\partial \\dot{\\xi}}\\,d\\dot{\\xi}$$`}</p>
                  <p>
                    Use the Euler-Lagrange equation: {`$\\partial L/\\partial q = \\dot{p}$`}, and
                    the definition {`$p = \\partial L/\\partial \\dot{q}$`}:
                  </p>
                  <p>{`$$dL = \\dot{p}\\,dq + p\\,d\\dot{q} + \\frac{\\partial L}{\\partial \\xi}\\,d\\xi + \\frac{\\partial L}{\\partial \\dot{\\xi}}\\,d\\dot{\\xi}$$`}</p>
                </div>
              </div>

              <div className="lrn-proof-step">
                <span className="lrn-proof-step-num">2.</span>
                <div className="lrn-proof-step-content">
                  <p>
                    <strong>Expand {`$d(p\\dot{q})$`} by the product rule.</strong>
                  </p>
                  <p>{`$$d(p\\dot{q}) = \\dot{q}\\,dp + p\\,d\\dot{q}$$`}</p>
                </div>
              </div>

              <div className="lrn-proof-step">
                <span className="lrn-proof-step-num">3.</span>
                <div className="lrn-proof-step-content">
                  <p>
                    <strong>Form {`$dR = d(p\\dot{q} - L)$`} and cancel.</strong>
                  </p>
                  <p>{`$$dR = \\dot{q}\\,dp + p\\,d\\dot{q} - \\dot{p}\\,dq - p\\,d\\dot{q} - \\frac{\\partial L}{\\partial \\xi}\\,d\\xi - \\frac{\\partial L}{\\partial \\dot{\\xi}}\\,d\\dot{\\xi}$$`}</p>
                  <p>The {`$p\\,d\\dot{q}$`} terms cancel:</p>
                  <p>{`$$dR = -\\dot{p}\\,dq + \\dot{q}\\,dp - \\frac{\\partial L}{\\partial \\xi}\\,d\\xi - \\frac{\\partial L}{\\partial \\dot{\\xi}}\\,d\\dot{\\xi}$$`}</p>
                </div>
              </div>

              <div className="lrn-proof-step">
                <span className="lrn-proof-step-num">4.</span>
                <div className="lrn-proof-step-content">
                  <p>
                    <strong>Read off the partial derivatives of {`$R$`}.</strong>
                  </p>
                  <p>Matching coefficients of each differential:</p>
                  <p>{`$$\\frac{\\partial R}{\\partial p} = \\dot{q}, \\qquad \\frac{\\partial R}{\\partial q} = -\\dot{p}$$`}</p>
                  <p>
                    For the cyclic pair {`$(q, p)$`}, {`$R$`} is now a function of the momentum{' '}
                    {`$p$`}, not the velocity {`$\\dot{q}$`}. Differentiating it in {`$p$`} gives
                    back the velocity; differentiating it in {`$q$`} gives minus the rate of change
                    of the momentum. The velocity-for-momentum swap is complete for this coordinate.
                  </p>
                </div>
              </div>

              <div className="lrn-proof-step">
                <span className="lrn-proof-step-num">5.</span>
                <div className="lrn-proof-step-content">
                  <p>
                    <strong>Identify the noncyclic relations.</strong>
                  </p>
                  <p>{`$$\\frac{\\partial L}{\\partial \\xi} = -\\frac{\\partial R}{\\partial \\xi}, \\qquad \\frac{\\partial L}{\\partial \\dot{\\xi}} = -\\frac{\\partial R}{\\partial \\dot{\\xi}}$$`}</p>
                </div>
              </div>

              <div className="lrn-proof-step">
                <span className="lrn-proof-step-num">6.</span>
                <div className="lrn-proof-step-content">
                  <p>
                    <strong>Substitute into Lagrange's equation for {`$\\xi$`}.</strong>
                  </p>
                  <p>
                    The Euler-Lagrange equation for {`$\\xi$`} is
                    {` $\\frac{d}{dt}\\frac{\\partial L}{\\partial \\dot{\\xi}} = \\frac{\\partial L}{\\partial \\xi}$`}
                    . Replacing {`$L$`} derivatives with {`$R$`} derivatives via step 5:
                  </p>
                  <p>{`$$\\frac{d}{dt}\\frac{\\partial R}{\\partial \\dot{\\xi}} = \\frac{\\partial R}{\\partial \\xi}$$`}</p>
                  <p>
                    {`$R$`} acts as the <strong>Lagrangian</strong> for the noncyclic coordinate{' '}
                    {`$\\xi$`}.
                  </p>
                </div>
              </div>

              <div className="lrn-proof-step">
                <span className="lrn-proof-step-num">7.</span>
                <div className="lrn-proof-step-content">
                  <p>
                    <strong>Derive the energy formula.</strong>
                  </p>
                  <p>
                    The total energy is{' '}
                    {`$E = \\dot{q}\\frac{\\partial L}{\\partial \\dot{q}} + \\dot{\\xi}\\frac{\\partial L}{\\partial \\dot{\\xi}} - L$`}
                    . Substitute {`$R = p\\dot{q} - L$`} (so {`$L = p\\dot{q} - R$`}) and the
                    relation
                    {` $\\partial L/\\partial \\dot{\\xi} = -\\partial R/\\partial \\dot{\\xi}$`}:
                  </p>
                  <p>{`$$E = R - \\dot{\\xi}\\,\\frac{\\partial R}{\\partial \\dot{\\xi}}$$`}</p>
                  <p>
                    The energy expressed through {`$R$`} has the same form as the energy expressed
                    through {`$L$`}, but with a minus sign on the velocity term.
                  </p>
                </div>
              </div>

              <div className="lrn-qed">Q.E.D.</div>
            </div>

            <div className="lrn-self-explain">
              <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
              <p>
                In step 3, the {`$p\\,d\\dot{q}$`} terms cancel. Why is this cancellation the entire
                point of the construction?
              </p>
              <details className="lrn-self-explain-reveal">
                <summary>Expert explanation</summary>
                <p>
                  The combination {`$p\\dot{q} - L$`} was built precisely so the velocity{' '}
                  {`$\\dot{q}$`} drops out as an independent variable and the momentum {`$p$`} takes
                  its place. The cancellation of {`$p\\,d\\dot{q}$`} is the proof that it worked:{' '}
                  {`$\\dot{q}$`} no longer appears in {`$dR$`} as a differential, so {`$R$`} depends
                  on {`$p$`} and on {`$\\dot{\\xi}$`}, not on {`$\\dot{q}$`}. That is exactly the
                  velocity-for-momentum swap, done on the cyclic coordinate alone.
                </p>
              </details>
            </div>

            <div className="lrn-faded">
              <div className="lrn-faded-phase">
                <span className="lrn-faded-label">COMPLETE EXAMPLE</span>
                <p>
                  <strong>Central force in polar coordinates.</strong> The Lagrangian is
                  {` $L = \\frac{1}{2}m(\\dot{r}^2 + r^2\\dot{\\phi}^2) - U(r)$`}. The cyclic
                  coordinate is {`$\\phi$`}; {`$p_\\phi = mr^2\\dot{\\phi} = \\alpha$`}. Solve for{' '}
                  {`$\\dot{\\phi} = \\frac{\\alpha}{mr^2}$`} and substitute into
                  {` $R = p_\\phi\\dot{\\phi} - L$`}:
                </p>
                <p>
                  {`$$R = \\alpha \\cdot \\frac{\\alpha}{mr^2} - \\frac{1}{2}m\\dot{r}^2 - \\frac{1}{2}m r^2 \\cdot \\frac{\\alpha^2}{m^2r^4} + U(r) = -\\frac{1}{2}m\\dot{r}^2 + \\frac{\\alpha^2}{2mr^2} + U(r)$$`}
                </p>
                <p>
                  The Lagrange equation{' '}
                  {`$\\frac{d}{dt}\\frac{\\partial R}{\\partial \\dot{r}} = \\frac{\\partial R}{\\partial r}$`}
                  gives the radial equation of motion with the centrifugal term built in.
                </p>
              </div>

              <div className="lrn-faded-phase lrn-faded-partial">
                <span className="lrn-faded-label">YOUR TURN: PARTIAL</span>
                <ol className="lrn-list">
                  <li>
                    For {`$L = \\frac{1}{2}m(\\dot{x}^2 + \\dot{y}^2) - \\frac{1}{2}k y^2$`} with
                    cyclic {`$x$`}: find {`$p_x$`} and write {`$R$`}.
                  </li>
                  <li>
                    What is the Lagrange equation that {`$R$`} gives for {`$y$`}? Does it match the
                    simple-harmonic motion you expect from Newton's second law?
                  </li>
                </ol>
              </div>

              <div className="lrn-faded-phase">
                <span className="lrn-faded-label">INDEPENDENT PRACTICE</span>
                <p>
                  A bead slides on a cone of half-angle {`$\\alpha$`}. The Lagrangian in cylindrical
                  coordinates {`$(r, \\phi, z)$`} with {`$z = r\\cot\\alpha$`}
                  eliminated is{' '}
                  {`$L = \\frac{1}{2}m\\left(\\frac{\\dot{r}^2}{\\sin^2\\alpha} + r^2\\dot{\\phi}^2\\right)$`}
                  . The azimuthal angle {`$\\phi$`} is cyclic. Build {`$R$`} and write the equation
                  for {`$r$`}.
                </p>
              </div>
            </div>
          </div>
        </>,

        <>
          <div className="lrn-section" id="lrn-section-4">
            <h2>The Routhian's Split Personality</h2>

            <div className="lrn-predict">
              <span className="lrn-predict-label">PREDICT</span>
              <p>
                After deriving {`$R$`}, a friend says: "For the cyclic part it behaves like a
                swapped function of momenta." A second friend says: "For the rest it behaves like
                the Lagrangian." Can both be right at once, on the same function {`$R$`}?
              </p>
              <details className="lrn-predict-reveal">
                <summary>Check your thinking</summary>
                <p>
                  Both are right, on different variables. For the cyclic coordinates{' '}
                  {`$(q_{s+1},\\ldots,q_n)$`} and their momenta, {`$R$`} gives the swapped
                  first-order relations {`$\\dot{q}_i = \\partial R/\\partial p_i$`}. For the
                  noncyclic coordinates {`$(q_1,\\ldots,q_s)$`}, {`$R$`} obeys Lagrange's
                  second-order equations exactly as {`$L$`} would. One function, two roles.
                </p>
              </details>
            </div>

            <p>
              The key result from the derivation above (now stated for the general
              {` $n$`}-coordinate case):
            </p>

            <div className="lrn-eq">
              <span>{`$$\\frac{d}{dt}\\frac{\\partial R}{\\partial \\dot{q}_i} - \\frac{\\partial R}{\\partial q_i} = 0, \\quad i = 1,\\ldots,s \\quad (\\text{noncyclic: Lagrange's equations})$$`}</span>
            </div>
            <div className="lrn-eq">
              <span>{`$$\\frac{\\partial R}{\\partial q_i} = -\\dot{p}_i, \\quad \\frac{\\partial R}{\\partial p_i} = \\dot{q}_i, \\quad i = s{+}1,\\ldots,n \\quad (\\text{cyclic: the swapped pair})$$`}</span>
            </div>

            <div className="lrn-insight">
              <span className="lrn-insight-label">Split Structure</span>
              <p>
                {`$R$`} obeys two kinds of equations at once. In the cyclic sector it gives
                first-order swapped relations for {`$(q_i, p_i)$`}: the velocity comes from{' '}
                {`$\\partial R/\\partial p_i$`}. In the noncyclic sector it obeys Lagrange's
                second-order equations for {`$(q_i, \\dot{q}_i)$`}, exactly as {`$L$`} does. This
                dual nature is the defining feature of the Routhian.
              </p>
            </div>

            <div className="lrn-elaborate">
              <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
              <p>
                The Lagrange equation for a noncyclic coordinate {`$q_i$`} uses only
                {` $\\partial L/\\partial q_i$`} and {`$\\partial L/\\partial \\dot{q}_i$`}. From
                the derivation: {`$\\partial L/\\partial q_i = -\\partial R/\\partial q_i$`}
                and {`$\\partial L/\\partial \\dot{q}_i = -\\partial R/\\partial \\dot{q}_i$`}.
                Substituting, the minus signs cancel and {`$R$`} replaces {`$L$`} exactly.
              </p>
              <p>
                For the cyclic pair, the derivation showed directly that
                {` $\\partial R/\\partial p = \\dot{q}$`} and{' '}
                {`$\\partial R/\\partial q = -\\dot{p}$`}. These are the swapped relations: the
                velocity is recovered from the momentum, exactly because {`$R$`} now depends on{' '}
                {`$p$`} instead of {`$\\dot{q}$`}.
              </p>
            </div>

            <p>
              You can also read {`$R$`} as two pieces stitched together. The cyclic velocities have
              already been traded for their constant momenta, so that part contributes a function of
              the cyclic momenta alone. What remains carries the noncyclic Lagrangian with a flipped
              sign:
            </p>
            <div className="lrn-eq">
              <span>{`$$R = R_{\\mathrm{cyclic}}(p_{s+1},\\ldots,p_n) - L_{\\mathrm{noncyclic}}(q_1,\\ldots,q_s;\\,\\dot{q}_1,\\ldots,\\dot{q}_s)$$`}</span>
            </div>
            <p>
              This form makes the split personality visible: a swapped piece for the cyclic sector
              minus the ordinary Lagrangian of the noncyclic sector.
            </p>

            <p>
              For a planet orbiting a star, the cyclic sector is the angle {`$\\phi$`} and its
              momentum {`$p_\\phi$`}. The noncyclic sector is the radius {`$r$`}, governed by a
              second-order Lagrange equation with the centrifugal term built in.
            </p>

            <div className="lrn-self-explain">
              <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
              <p>
                The split form {`$R = R_\\mathrm{cyclic} - L_\\mathrm{noncyclic}$`} has a minus sign
                on {`$L$`}. Predict the sign of {`$\\partial R/\\partial \\dot{q}_i$`} relative to{' '}
                {`$\\partial L/\\partial \\dot{q}_i$`} for a noncyclic coordinate before checking.
              </p>
              <details className="lrn-self-explain-reveal">
                <summary>Expert explanation</summary>
                <p>
                  Since {`$R = \\ldots - L_\\mathrm{noncyclic}$`}, differentiating with respect to a
                  noncyclic velocity gives{' '}
                  {`$\\partial R/\\partial \\dot{q}_i = -\\partial L/\\partial \\dot{q}_i$`}. The
                  sign is opposite.
                </p>
                <p>
                  This is exactly the relation from step 5 of the derivation. The minus sign is not
                  an accident: it is what allows the Lagrange equation for {`$\\xi$`} to come out
                  with the correct sign when you substitute {`$R$`} for {`$L$`}.
                </p>
              </details>
            </div>
          </div>
        </>,

        <>
          <div className="lrn-section" id="lrn-section-5">
            <h2>Eliminating Cyclic Coordinates in Practice</h2>

            <div className="lrn-predict">
              <span className="lrn-predict-label">PREDICT</span>
              <p>
                After building {`$R$`}, you set {`$p_{s+1} = \\alpha_1$`}, ...,{' '}
                {`$p_n = \\alpha_{n-s}$`}
                (their constant values). What does {`$R$`} become? Can you still recover the cyclic
                coordinates {`$q_{s+1},\\ldots,q_n$`} afterward?
              </p>
              <details className="lrn-predict-reveal">
                <summary>Check your thinking</summary>
                <p>
                  With the momenta fixed to constants, {`$R$`} becomes a function of only the
                  noncyclic variables {`$(q_1,\\ldots,q_s,\\dot{q}_1,\\ldots,\\dot{q}_s)$`}. You
                  solve the Lagrange equations for the noncyclic coordinates. Then you recover each
                  cyclic coordinate by integrating
                  {` $\\dot{q}_i = \\partial R/\\partial p_i$`}.
                </p>
              </details>
            </div>

            <p>
              When {`$q$`} is cyclic, it does not appear in {`$R$`}. The swapped relation
              {` $\\dot{p} = -\\partial R/\\partial q = 0$`} confirms {`$p = \\alpha$`}. Substitute
              this constant into the Lagrange equation for {`$\\xi$`}:
            </p>
            <div className="lrn-eq">
              <span>{`$$\\frac{d}{dt}\\frac{\\partial R}{\\partial \\dot{\\xi}} = \\frac{\\partial R}{\\partial \\xi} \\quad \\text{with } p = \\alpha = \\mathrm{const}$$`}</span>
            </div>
            <p>
              This equation contains only {`$\\xi(t)$`} and {`$\\dot{\\xi}(t)$`}. Solve it. Then
              recover {`$q(t)$`} by integrating. This last step is exactly the reduction to
              quadrature you met earlier: once {`$\\xi(t)$`} is known, {`$q(t)$`} follows from a
              single integral.
            </p>
            <div className="lrn-eq">
              <span>{`$$q(t) = q(0) + \\int_0^t \\frac{\\partial R}{\\partial p}\\bigg|_{p=\\alpha}\\, dt'$$`}</span>
            </div>

            <div className="lrn-callout lrn-tip">
              <span className="lrn-callout-label">When to use this</span>
              <p>
                This is the full Routhian procedure: (1) identify cyclic coordinates, (2) build{' '}
                {`$R$`}, (3) set cyclic momenta to constants, (4) solve the reduced noncyclic
                equations, (5) integrate to recover cyclic coordinates. The cyclic coordinates are
                entirely absent from step 4.
              </p>
            </div>

            <div className="lrn-faded">
              <div className="lrn-faded-phase">
                <span className="lrn-faded-label">THE FIVE STEPS, RUN ONCE</span>
                <p>
                  Watch the recipe on a concrete system: a free particle on a plane in polar
                  coordinates, {`$L = \\frac{1}{2}m(\\dot{r}^2 + r^2\\dot{\\phi}^2)$`}.
                </p>
                <ol className="lrn-list">
                  <li>
                    <strong>Identify the cyclic coordinate.</strong> The angle {`$\\phi$`} is absent
                    from {`$L$`}, so it is cyclic.
                  </li>
                  <li>
                    <strong>Build {`$R$`}.</strong> Here {`$p_\\phi = mr^2\\dot{\\phi}$`}, so
                    {` $\\dot{\\phi} = p_\\phi/(mr^2)$`}, and
                    {` $R = p_\\phi\\dot{\\phi} - L = -\\frac{1}{2}m\\dot{r}^2 + \\frac{p_\\phi^2}{2mr^2}$`}
                    .
                  </li>
                  <li>
                    <strong>Set the cyclic momentum to a constant.</strong>
                    {` $p_\\phi = \\alpha$`}, the conserved angular momentum.
                  </li>
                  <li>
                    <strong>Solve the reduced noncyclic equation.</strong> The Lagrange equation for
                    {` $r$`} is {`$m\\ddot{r} = \\alpha^2/(mr^3)$`}: the particle drifts outward,
                    pushed by the centrifugal term.
                  </li>
                  <li>
                    <strong>Integrate back for the cyclic coordinate.</strong> With {`$r(t)$`}{' '}
                    known,
                    {` $\\phi(t) = \\phi(0) + \\int_0^t \\frac{\\alpha}{mr^2}\\,dt'$`}: a single
                    quadrature recovers the angle.
                  </li>
                </ol>
              </div>
            </div>

            <div>
              <CyclicMomentumPhaseLine />
            </div>
            <p>
              The plot above shows the key contrast. The horizontal line is
              {` $p_\\phi = \\mathrm{const}$`}: the cyclic momentum never moves. The closed orbit on
              the right is the noncyclic coordinate {`$\\xi$`}
              cycling through its phase portrait. Drag the slider to shift {`$p_\\phi$`}.
            </p>
          </div>
        </>,

        <>
          <div className="lrn-section" id="lrn-section-6">
            <h2>Worked Examples</h2>

            <h3>Two Masses on a Spring: Free vs Driven</h3>

            <div className="lrn-predict">
              <span className="lrn-predict-label">PREDICT</span>
              <p>
                Two masses are joined by a spring. In the free case (no external force), is the
                energy function {`$h$`} conserved? What changes when one mass is driven at constant
                velocity by an external agent?
              </p>
              <details className="lrn-predict-reveal">
                <summary>Check your thinking</summary>
                <p>
                  Free case: nothing in {`$L$`} depends on time, so {`$h$`} is conserved and equals
                  the total energy. Driven case: the external agent makes {`$L$`} depend on time, so
                  by {`$dh/dt = -\\partial L/\\partial t$`} the energy function drifts as the agent
                  pumps energy in or out.
                </p>
              </details>
            </div>

            <p>
              This example fixes the idea physically. Let mass {`$m_1$`} be free and mass {`$m_2$`}{' '}
              move at a prescribed velocity {`$v_0$`} imposed by an external agent.
            </p>

            <div className="lrn-compare">
              <div className="lrn-compare-col">
                <span className="lrn-compare-title">Free Pair</span>
                <p>
                  No external force. The center-of-mass coordinate is cyclic: it is absent from{' '}
                  {`$V$`}, and {`$T$`} depends only on the relative velocity. Translation and
                  oscillation separate, just as the angle and radius separate in the Kepler problem.
                  Here {`$h = E = \\mathrm{const}$`}.
                </p>
              </div>
              <div className="lrn-compare-col">
                <span className="lrn-compare-title">Driven Pair</span>
                <p>
                  An external agent holds {`$m_2$`} at constant velocity {`$v_0$`}. Mass {`$m_1$`}{' '}
                  oscillates relative to {`$m_2$`}. Work flows in and out. Now {`$L$`} depends on
                  time, so {`$h$`} is no longer conserved.
                </p>
              </div>
            </div>

            <div className="lrn-self-explain">
              <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
              <p>
                What does this pair of cases show about when the energy function {`$h$`} stays
                constant?
              </p>
              <details className="lrn-self-explain-reveal">
                <summary>Expert explanation</summary>
                <p>
                  It draws a sharp line: {`$h$`} is conserved only when the system is closed, with
                  no time-dependent external forces or constraints. When {`$m_2$`} is driven, the
                  Lagrangian gains explicit time dependence, so{' '}
                  {`$\\partial L/\\partial t \\neq 0$`}. By {`$dh/dt = -\\partial L/\\partial t$`},
                  the energy function then changes in time. The cyclic center-of-mass coordinate of
                  the free case stops being cyclic once the drive breaks translational symmetry.
                </p>
              </details>
            </div>

            <h3>The Kepler Problem: A Worked Routhian Example</h3>

            <p>
              The angle {`$\\phi$`} in a central-force problem is cyclic.
              {` $p_\\phi = mr^2\\dot{\\phi} = \\alpha$`} is the angular momentum, conserved by
              symmetry. The Routhian for {`$\\xi = r$`} is:
            </p>
            <div className="lrn-eq">
              <span>{`$$R = -\\frac{1}{2}m\\dot{r}^2 + \\frac{\\alpha^2}{2mr^2} + U(r)$$`}</span>
            </div>
            <p>
              The effective potential {`$V_\\mathrm{eff}(r) = \\frac{\\alpha^2}{2mr^2} + U(r)$`}
              (with {`$U(r) = -\\frac{k}{r}$`} for gravity) controls radial motion. This is the same
              effective potential you met in the central-force and integration-by-quadrature topics;
              the Routhian now reproduces it for you automatically. The plot below shows the real
              curve. Increase {`$p_\\phi$`} and watch the centrifugal barrier grow, pushing the
              minimum outward.
            </p>

            <div>
              <KeplerEffectivePotential />
            </div>

            <div className="lrn-self-explain">
              <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
              <p>
                The effective potential has a minimum at some {`$r^*$`}. What physical orbit
                corresponds to a particle sitting at exactly that minimum?
              </p>
              <details className="lrn-self-explain-reveal">
                <summary>Expert explanation</summary>
                <p>
                  At the minimum {`$r = r^*$`}, the radial force
                  {` $-dV_\\mathrm{eff}/dr = 0$`}: gravity and the centrifugal term balance exactly.
                  The particle stays at constant {`$r$`}, so {`$\\dot{r} = 0$`}
                  and {`$\\ddot{r} = 0$`}. That is a circular orbit. The orbit minimum occurs at{' '}
                  {`$r^* = \\frac{\\alpha^2}{mk}$`}, the radius of the circular orbit.
                </p>
              </details>
            </div>

            <div className="lrn-elaborate">
              <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
              <p>
                The centrifugal term {`$\\frac{\\alpha^2}{2mr^2}$`} arises because the cyclic
                momentum is held constant at {`$\\alpha$`}. When the particle moves inward (smaller{' '}
                {`$r$`}), it must spin faster to conserve {`$\\alpha$`}. That faster spin costs
                kinetic energy, which appears as a repulsive effective potential barrier. This is
                the same physics as a figure skater who spins faster when they pull in their arms.
              </p>
            </div>

            <h3>The Symmetric Top: Two Cyclic Euler Angles</h3>
            <p>
              A symmetric top is a spinning body whose mass is balanced about its spin axis (two of
              its principal moments are equal, {`$I_1 = I_2$`}). Its orientation is set by three{' '}
              <strong>Euler angles</strong> {`$(\\phi, \\theta, \\psi)$`}: the tilt {`$\\theta$`} of
              the spin axis, the spin {`$\\psi$`} about that axis, and the precession {`$\\phi$`}{' '}
              around the vertical. In a gravity field, both {`$\\psi$`} and {`$\\phi$`} are cyclic,
              so {`$p_\\psi$`} and {`$p_\\phi$`} are constant.
            </p>
            <p>
              This is exactly the setup the Routhian is built for. Eliminating the two cyclic angles
              leaves a single equation for the tilt {`$\\theta$`}, governed by an effective
              potential:
            </p>
            <div className="lrn-eq">
              <span>{`$$U_\\mathrm{eff}(\\theta) = \\frac{(p_\\phi - p_\\psi\\cos\\theta)^2}{2I_1\\sin^2\\theta} + Mgl\\cos\\theta$$`}</span>
            </div>
            <p>
              The full derivation of this potential, with its nutation and precession behavior,
              belongs to the rigid-body topic; the point here is only that the Routhian method
              delivers it. The shape of {`$U_\\mathrm{eff}(\\theta)$`} decides whether the top
              nutates (the slow nodding of the spin axis), precesses steadily, or shows sleeping-top
              motion.
            </p>

            <div>
              <SymmetricTopPotential />
            </div>

            <div className="lrn-self-explain">
              <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
              <p>
                The plot of {`$U_\\mathrm{eff}(\\theta)$`} has a minimum at some
                {` $\\theta^*$`}. What motion does a top at exactly that angle undergo?
              </p>
              <details className="lrn-self-explain-reveal">
                <summary>Expert explanation</summary>
                <p>
                  At {`$\\theta = \\theta^*$`}, {`$dU_\\mathrm{eff}/d\\theta = 0$`}: there is no net
                  torque driving {`$\\theta$`} away from its current value. If the top is also at
                  rest in {`$\\theta$`} ({`$\\dot{\\theta} = 0$`}), it precesses uniformly at fixed
                  inclination. This is <em>steady precession</em>. Small oscillations about{' '}
                  {`$\\theta^*$`} give nutation.
                </p>
              </details>
            </div>

            <h3>Many Particles: Removing the Center of Mass</h3>
            <p>
              Take a cluster of particles that interact only with each other, with no external
              field. The Lagrangian then depends only on relative positions, so the center-of-mass
              coordinate is absent from {`$L$`}: it is cyclic, and the total momentum is conserved.
            </p>
            <p>
              Building the Routhian over the three center-of-mass coordinates and fixing their
              momenta drops those three degrees of freedom. What remains is the internal motion
              alone, which is what physically matters for binding and vibration. This is the same
              reduced-mass bookkeeping you met in central-force motion, now arriving automatically
              from one cyclic coordinate.
            </p>

            <div className="lrn-self-explain">
              <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
              <p>
                Why does the center-of-mass coordinate become cyclic, and what does removing it buy
                you?
              </p>
              <details className="lrn-self-explain-reveal">
                <summary>Expert explanation</summary>
                <p>
                  With no external field, the Lagrangian depends only on relative positions. The
                  center-of-mass position never appears, so it is cyclic. Its conjugate momentum,
                  the total momentum, is conserved.
                </p>
                <p>
                  Removing it through the Routhian drops three degrees of freedom. You are left with
                  the internal motion alone, the part that governs binding and vibration.
                </p>
              </details>
            </div>
          </div>
        </>,

        <>
          <div className="lrn-section" id="lrn-section-7">
            <h2>Generalization and the Partial Time-Derivative Relation</h2>

            <div className="lrn-predict">
              <span className="lrn-predict-label">PREDICT</span>
              <p>
                The two-coordinate derivation gave one cyclic {`$q$`} and one noncyclic {`$\\xi$`}.
                Now imagine {`$s$`} noncyclic and {`$n{-}s$`} cyclic coordinates. Do you expect new
                equations, or the same ones repeated for each index?
              </p>
              <details className="lrn-predict-reveal">
                <summary>Check your thinking</summary>
                <p>
                  The same equations, repeated index by index. No new structure appears. You replace
                  the single {`$\\xi$`} with {`$\\xi_1,\\ldots,\\xi_s$`} and the single pair{' '}
                  {`$(q, p)$`} with {`$(q_{s+1}, p_{s+1}),\\ldots,(q_n, p_n)$`}. Each cyclic pair
                  obeys the first-order swapped relations; each noncyclic coordinate obeys a
                  Lagrange equation.
                </p>
              </details>
            </div>

            <p>
              Use this section when your real problem has many cyclic coordinates at once, such as a
              top with two cyclic Euler angles or a many-body system with a cyclic center of mass.
            </p>

            <p>
              The entire derivation above used two coordinates for clarity. The generalization to{' '}
              {`$s$`} noncyclic and {`$n{-}s$`} cyclic coordinates is direct: replace single{' '}
              {`$\\xi$`} with {`$\\xi_1,\\ldots,\\xi_s$`} and single {`$q, p$`} with{' '}
              {`$q_{s+1},\\ldots,q_n$`} and
              {` $p_{s+1},\\ldots,p_n$`}. All the equations hold index by index.
            </p>

            <div className="lrn-insight">
              <span className="lrn-insight-label">Key Relation</span>
              <p>
                The energy function{' '}
                {`$h = \\sum_i \\dot{q}_i(\\partial L/\\partial \\dot{q}_i) - L$`} that you met
                earlier obeys a clean time law:
              </p>
              <p>{`$$\\frac{dh}{dt} = -\\frac{\\partial L}{\\partial t}$$`}</p>
              <p>
                When {`$L$`} has no explicit time dependence, {`$h$`} is conserved. When {`$L$`}{' '}
                depends on time (for example, driven constraints), {`$h$`} drifts. This is the same
                energy bookkeeping behind every Routhian reduction.
              </p>
            </div>

            <div className="lrn-elaborate">
              <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
              <p>
                Differentiate {`$h = \\sum_i \\dot{q}_i(\\partial L/\\partial \\dot{q}_i) - L$`}{' '}
                along a motion. The Euler-Lagrange equations make the coordinate and velocity terms
                cancel in pairs, leaving only {`$-\\partial L/\\partial t$`}. So any explicit time
                dependence in {`$L$`} sets the rate at which {`$h$`} changes.
              </p>
            </div>

            <p>
              After setting cyclic momenta to constants and solving the noncyclic equations, the
              general recovery procedure is:
            </p>
            <div className="lrn-eq">
              <span>{`$$q_i(t) = q_i(0) + \\int_0^t \\frac{\\partial R}{\\partial p_i}\\bigg|_{p_i=\\alpha_i}\\, dt', \\quad i = s{+}1,\\ldots,n$$`}</span>
            </div>

            <div className="lrn-callout lrn-tip">
              <span className="lrn-callout-label">Tip</span>
              <p>
                The step of substituting constant momenta into {`$R$`} is what truly eliminates the
                cyclic coordinates from the equations of motion. Before that step, {`$R$`} formally
                still contains {`$p_i$`} as a variable. After substitution, {`$p_i = \\alpha_i$`}{' '}
                are just numbers and {`$R$`}
                becomes a pure function of the noncyclic variables.
              </p>
            </div>
          </div>
        </>
      ]
    },

    practice: [
      {
        q: `A particle moves in a central force field $U(r)$. The azimuthal angle $\\phi$ is cyclic. What is $p_\\phi$, and what second-order equation does the Routhian give for $r$?`,
        a: `The conjugate momentum is $p_\\phi = mr^2\\dot{\\phi}$, constant by the Euler-Lagrange equation since $\\phi$ is absent from $L$. The Routhian is $R = -\\frac{1}{2}m\\dot{r}^2 + \\frac{p_\\phi^2}{2mr^2} + U(r)$. The Lagrange equation $\\frac{d}{dt}\\frac{\\partial R}{\\partial \\dot{r}} = \\frac{\\partial R}{\\partial r}$ gives: $m\\ddot{r} = \\frac{p_\\phi^2}{mr^3} - \\frac{dU}{dr}$. The centrifugal term $\\frac{p_\\phi^2}{mr^3}$ appears automatically from the Routhian.`
      },
      {
        q: `A particle slides freely on a horizontal plane. Use Cartesian coordinates $(x, y)$. Both coordinates are cyclic. Write $R$, identify the equations it gives, and describe the motion.`,
        a: `Both $p_x = m\\dot{x}$ and $p_y = m\\dot{y}$ are conserved (both coordinates absent from $L = \\frac{1}{2}m(\\dot{x}^2+\\dot{y}^2)$). This is a case with no noncyclic coordinates. $R = p_x\\dot{x} + p_y\\dot{y} - L = \\frac{p_x^2+p_y^2}{2m}$. The swapped relations give $\\dot{x} = \\partial R/\\partial p_x = \\frac{p_x}{m}$ and $\\dot{y} = \\partial R/\\partial p_y = \\frac{p_y}{m}$: uniform straight-line motion. No Lagrange equations remain because there are no noncyclic coordinates.`
      },
      {
        q: `A coordinate $q_n$ is cyclic, so $L$ does not contain it. Does that alone shrink the number of equations you must solve? What does the Routhian add?`,
        a: `No, the coordinate being absent from $L$ does not shrink the system by itself. The velocity $\\dot{q}_n$ still appears through the kinetic energy, so it couples to every other equation. You still face $n$ coupled second-order equations even though $p_n = \\alpha$ is constant. The Routhian fixes this: it swaps the cyclic velocity for its constant momentum, so $q_n$ and $\\dot{q}_n$ both drop out of the reduced equations. You then solve only the noncyclic coordinates and recover $q_n$ by one integration.`
      },
      {
        q: `The Routhian is defined as $R = \\sum_{i=s+1}^n p_i \\dot{q}_i - L$. Is this a full or partial Legendre transform? What makes it "partial"?`,
        a: `It is a partial Legendre transform. The sum runs only over the cyclic velocities $\\dot{q}_{s+1},\\ldots,\\dot{q}_n$: those are replaced by their momenta $p_{s+1},\\ldots,p_n$. The noncyclic velocities $\\dot{q}_1,\\ldots,\\dot{q}_s$ are NOT transformed and remain as independent variables. A full Legendre transform (giving $H$) would sum over all $i = 1,\\ldots,n$. The partiality is the structural essence of the Routhian.`
      },
      {
        q: `Write both sets of equations of motion that $R$ satisfies, and say which set is second-order and which is the first-order swapped pair.`,
        a: `For the $s$ noncyclic coordinates ($i = 1,\\ldots,s$): $\\frac{d}{dt}\\frac{\\partial R}{\\partial \\dot{q}_i} - \\frac{\\partial R}{\\partial q_i} = 0$. These are Lagrange's second-order equations with $R$ in place of $L$. For the $n-s$ cyclic coordinates ($i = s+1,\\ldots,n$): $\\partial R/\\partial p_i = \\dot{q}_i$ and $\\partial R/\\partial q_i = -\\dot{p}_i = 0$. These are the first-order swapped relations: $R$ now tracks the momentum instead of the velocity for each cyclic coordinate.`
      },
      {
        q: `Transfer question: A bead slides on a rotating wire. The angle of rotation $\\phi$ is cyclic. After building $R$ and setting $p_\\phi = \\alpha$, you solve for the bead's position $r(t)$ along the wire. How do you then find $\\phi(t)$?`,
        a: `After solving $r(t)$ from the Lagrange equation for the noncyclic $r$, you recover $\\phi$ using the swapped relation from $R$: $\\dot{\\phi} = \\partial R/\\partial p_\\phi|_{p_\\phi=\\alpha}$. Integrate: $\\phi(t) = \\phi(0) + \\int_0^t \\frac{\\partial R}{\\partial \\alpha}\\, dt'$. This is the standard recovery step for cyclic coordinates after the reduced system is solved.`
      },
      {
        q: `State the energy formula in terms of $R$ and explain why it has a minus sign: $E = R - \\dot{\\xi}\\,\\partial R/\\partial\\dot{\\xi}$.`,
        a: `The formula follows from the general energy definition $E = \\sum_i \\dot{q}_i (\\partial L/\\partial \\dot{q}_i) - L$, substituting $R = p\\dot{q} - L$ and $\\partial L/\\partial \\dot{\\xi} = -\\partial R/\\partial \\dot{\\xi}$. The minus sign arises because $R$ carries the noncyclic Lagrangian with a flipped sign: $\\partial R/\\partial \\dot{\\xi} = -\\partial L/\\partial \\dot{\\xi}$, so the velocity term in the energy formula inverts relative to the Lagrangian version.`
      },
      {
        q: `Elaborate: Why does the centrifugal barrier in the Kepler effective potential grow as $p_\\phi$ increases?`,
        a: `The centrifugal term is $\\frac{p_\\phi^2}{2mr^2}$. At fixed $r$, this is proportional to $p_\\phi^2$. Physically: larger angular momentum means the particle must have higher tangential speed at any given radius (since $p_\\phi = mr^2\\dot{\\phi}$). That higher speed contributes more kinetic energy. In the effective one-dimensional picture, that kinetic energy appears as a repulsive potential that grows outward from the origin. A satellite with more angular momentum requires a stronger inward force to stay at the same radius, or equivalently, it settles into a larger orbit.`
      },
      {
        q: `Two masses are joined by a spring, free of any external force. The center-of-mass coordinate is cyclic. Is the energy function $h$ conserved? Give the reason, not just the answer.`,
        a: `Yes. When no external force acts, the Lagrangian has no explicit time dependence: $\\partial L/\\partial t = 0$. By the relation $\\frac{dh}{dt} = -\\frac{\\partial L}{\\partial t}$, we get $\\frac{dh}{dt} = 0$: $h$ is conserved. With scleronomic constraints and a velocity-independent potential, $h = T + V = E$, the total mechanical energy.`
      },
      {
        q: `Transfer question: A particle in spherical coordinates has $L = \\frac{1}{2}m\\left(\\dot{r}^2 + r^2\\dot{\\theta}^2 + r^2\\sin^2\\theta\\,\\dot{\\phi}^2\\right) - U(r)$. Which coordinate is cyclic, what is conserved, and which coordinate cannot be eliminated the same way?`,
        a: `Only $\\phi$ is cyclic: it is absent from $L$ since $U$ depends only on $r$. Its conjugate momentum $p_\\phi = mr^2\\sin^2\\theta\\,\\dot{\\phi}$ is conserved, the $z$-component of angular momentum. Build $R$ over $\\phi$ alone and set $p_\\phi = \\alpha$, leaving a two-coordinate problem in $(r, \\theta)$. The angle $\\theta$ is NOT cyclic, because $r^2\\sin^2\\theta\\,\\dot{\\phi}^2$ depends on $\\theta$, so $\\theta$ keeps its ordinary Lagrange equation.`
      },
      {
        q: `Predict: If you increase $p_\\psi$ (spin momentum) in the symmetric-top effective potential $U_\\mathrm{eff}(\\theta)$, does the potential well deepen, shallow out, or stay the same?`,
        a: `The barrier at small $\\theta$ grows. The term $(p_\\phi - p_\\psi\\cos\\theta)^2 / (2I_1\\sin^2\\theta)$ blows up as $\\sin\\theta \\to 0$ for generic $p_\\phi, p_\\psi$. As $p_\\psi$ increases, the numerator $(p_\\phi - p_\\psi\\cos\\theta)^2$ changes, which shifts the location and depth of the minimum. For $p_\\phi = p_\\psi\\cos\\theta^*$, the barrier can have a flat bottom: the sleeping-top condition. Generally, changing $p_\\psi$ reshapes the well and can shift the equilibrium angle $\\theta^*$.`
      },
      {
        q: `Self-explain: In the derivation of $dR$, the step $d(p\\dot{q}) = \\dot{q}\\,dp + p\\,d\\dot{q}$ is used. Why can you write $dL = \\dot{p}\\,dq + p\\,d\\dot{q} + \\cdots$ with $\\dot{p}$ in the first term?`,
        a: `The Euler-Lagrange equation for the cyclic coordinate $q$ states $\\frac{d}{dt}(\\partial L/\\partial\\dot{q}) = \\partial L/\\partial q$, i.e., $\\dot{p} = \\partial L/\\partial q$. Substituting this into $dL = (\\partial L/\\partial q)\\,dq + (\\partial L/\\partial\\dot{q})\\,d\\dot{q} + \\cdots$ replaces the coefficient of $dq$ by $\\dot{p}$. This substitution is what links the Lagrangian differential to the equations of motion and is what makes the $p\\,d\\dot{q}$ terms cancel when forming $dR$.`
      },
      {
        q: `Error detection: A student writes the Routhian energy formula as $E = R + \\dot{\\xi}\\,\\partial R/\\partial\\dot{\\xi}$. What is wrong and what is the correct formula?`,
        a: `The sign is wrong. The correct formula is $E = R - \\dot{\\xi}\\,\\partial R/\\partial\\dot{\\xi}$, with a minus sign. The error likely comes from confusing the Lagrangian energy formula $E = -L + \\dot{q}(\\partial L/\\partial\\dot{q})$ with the Routhian one. Because $R$ acts as $-L$ for the noncyclic part, the sign of the velocity term inverts: $E = R - \\dot{\\xi}\\,\\partial R/\\partial\\dot{\\xi}$.`
      },
      {
        q: `A particle moves in the $xy$-plane under $U(x) = kx^2$. Choose $y$ as cyclic. Build $R$, identify the equations, and describe what happens to $y(t)$.`,
        a: `$L = \\frac{1}{2}m(\\dot{x}^2 + \\dot{y}^2) - kx^2$. Cyclic coordinate: $y$ (absent from $L$). $p_y = m\\dot{y} = \\alpha$. Solve for $\\dot{y} = \\frac{\\alpha}{m}$. $R = p_y\\dot{y} - L = \\alpha\\cdot\\frac{\\alpha}{m} - \\frac{1}{2}m(\\dot{x}^2 + \\frac{\\alpha^2}{m^2}) + kx^2 = -\\frac{1}{2}m\\dot{x}^2 + kx^2 + \\frac{\\alpha^2}{2m}$. The last term is a constant. Lagrange equation for $x$: $m\\ddot{x} = -2kx$ (simple harmonic). Recovery: $y(t) = y(0) + \\frac{\\alpha}{m}t$, uniform motion. Physically: $x$ oscillates, $y$ drifts uniformly.`
      },
      {
        q: `Elaborate: Why is the Routhian described as "best of both worlds"? What advantage does it have over swapping no velocities or swapping all of them?`,
        a: `Swap no velocities (plain $L$): you have $n$ second-order equations and the cyclic velocity still appears everywhere. Swap every velocity: you reduce to first-order pairs throughout, which can be less intuitive for oscillatory noncyclic motion. The Routhian swaps only the cyclic velocities: those coordinates drop out and their momenta become constants. For the noncyclic sector, you keep Lagrange's second-order equations with their physical intuition intact. The split is deliberate.`
      },
      {
        q: `Transfer: A spinning satellite has azimuthal angle $\\phi$ and polar angle $\\theta$ as degrees of freedom, with $\\phi$ cyclic. After Routhian reduction, what ODE governs $\\theta(t)$, and how do you find $\\phi(t)$ afterward?`,
        a: `With $p_\\phi = \\alpha$ set as a constant, $R$ becomes a function of $(\\theta, \\dot{\\theta})$ only. The Lagrange equation $\\frac{d}{dt}\\frac{\\partial R}{\\partial\\dot{\\theta}} = \\frac{\\partial R}{\\partial\\theta}$ is a second-order ODE for $\\theta(t)$, typically nonlinear. Solve it for $\\theta(t)$. Then recover $\\phi$ via $\\dot{\\phi} = \\partial R/\\partial\\alpha$ evaluated with the known $\\theta(t)$: integrate $\\phi(t) = \\phi_0 + \\int_0^t \\partial R/\\partial\\alpha\\,dt'$.`
      },
      {
        q: `For the symmetric top, two Euler angles $\\phi$ and $\\psi$ are cyclic. What are $p_\\phi$ and $p_\\psi$ physically, and what does eliminating them via Routh achieve?`,
        a: `$p_\\phi$ is the $z$-component of angular momentum (precession momentum); $p_\\psi$ is the spin angular momentum about the symmetry axis. Both are conserved because $\\phi$ and $\\psi$ are cyclic. After Routhian reduction with both set to constants, $R$ depends only on $\\theta$ and $\\dot{\\theta}$. The single Lagrange equation for $\\theta(t)$ governs the nutation. This is the standard reduction of the symmetric-top problem to one-dimensional motion in the effective potential $U_\\mathrm{eff}(\\theta)$.`
      },
      {
        q: `Predict: A system has $n$ degrees of freedom with $k$ cyclic coordinates. How many degrees of freedom does the Routhian reduction leave? How do you recover the $k$ cyclic coordinates?`,
        a: `After setting $k$ momenta to constants, the reduced system has $n - k$ noncyclic degrees of freedom governed by $n - k$ second-order Lagrange equations. Solve them for the noncyclic coordinates. Then recover each of the $k$ cyclic coordinates by integrating $\\dot{q}_i = \\partial R/\\partial p_i|_{p_i = \\alpha_i}$ once. Total work: solve $n-k$ coupled second-order ODEs, then perform $k$ quadratures.`
      },
      {
        q: `Transfer: A particle moves in 2D under $U(x,y) = V(x)$ (no $y$ dependence), and $y$ is cyclic. Solver A uses plain $L$ and substitutes by hand; solver B builds the Routhian over $y$. Do they get the same answer? What is the structural difference?`,
        a: `Both get the same physical answer: $p_y = m\\dot{y} = \\alpha$ is constant, $x$ oscillates under $V(x)$, and $y$ drifts uniformly. The structural difference: with plain $L$, $\\dot{y}$ still appears in every equation until you substitute $\\dot{y} = \\alpha/m$ by hand. With the Routhian, swapping the cyclic velocity for $\\alpha$ removes $y$ and $\\dot{y}$ from the reduced equation automatically. Same physics; the Routhian does the elimination cleanly instead of by hand.`
      },
      {
        q: `Transfer: Two masses joined by a spring; one mass is driven at constant velocity by an external agent. Is the energy function $h$ conserved? What is the mechanism that breaks conservation?`,
        a: `No, $h$ is not conserved. The external agent imposes a time-dependent constraint on the driven mass, which introduces explicit time dependence into $L$: $\\partial L/\\partial t \\neq 0$. By the relation $\\frac{dh}{dt} = -\\frac{\\partial L}{\\partial t}$, the energy function changes in time. The agent continuously pumps energy into or out of the system. The cyclic center-of-mass coordinate of the free case is no longer cyclic once the constraint breaks translational symmetry.`
      }
    ],

    reference: {
      category: 'Quick Reference',
      title: 'Routhian Reduction for Cyclic Coordinates',
      sections: [
        <>
          <div className="ref-section">
            <h2>Core Definitions</h2>

            <div className="ref-formula">
              <span className="ref-formula-name">Routhian (General)</span>
              <div className="ref-formula-eq">
                {`$$R(q_1,\\ldots,q_n;\\,\\dot{q}_1,\\ldots,\\dot{q}_s;\\,p_{s+1},\\ldots,p_n;\\,t) = \\sum_{i=s+1}^{n} p_i \\dot{q}_i - L$$`}
              </div>
              <div className="ref-formula-desc">
                <strong>When to use:</strong> {`$s$`} noncyclic coordinates,
                {` $n-s$`} cyclic coordinates. Form {`$R$`} by Legendre-transforming
                {` $L$`} over cyclic velocities only.
              </div>
            </div>

            <div className="ref-formula">
              <span className="ref-formula-name">Routhian (Two-Coordinate Form)</span>
              <div className="ref-formula-eq">{`$$R(q,\\xi,p,\\dot{\\xi}) = p\\dot{q} - L$$`}</div>
              <div className="ref-formula-desc">
                <strong>When to use:</strong> Simplified form for one cyclic {`$q$`}
                and one noncyclic {`$\\xi$`}. Starting point for the step-by-step derivation.
              </div>
            </div>

            <div className="ref-formula">
              <span className="ref-formula-name">Split Form</span>
              <div className="ref-formula-eq">
                {`$$R = R_{\\mathrm{cyclic}}(p_{s+1},\\ldots,p_n) - L_{\\mathrm{noncyclic}}$$`}
              </div>
              <div className="ref-formula-desc">
                <strong>When to use:</strong> To see the dual nature at a glance.
                {` $R$`} is the swapped function of the cyclic momenta minus the ordinary Lagrangian
                of the noncyclic sector.
              </div>
            </div>
          </div>
        </>,

        <>
          <div className="ref-section">
            <h2>Equations of Motion</h2>

            <div className="ref-formula">
              <span className="ref-formula-name">
                Lagrange Equations (Noncyclic, {`$i = 1,\\ldots,s$`})
              </span>
              <div className="ref-formula-eq">
                {`$$\\frac{d}{dt}\\frac{\\partial R}{\\partial \\dot{q}_i} - \\frac{\\partial R}{\\partial q_i} = 0$$`}
              </div>
              <div className="ref-formula-desc">
                <strong>When to use:</strong> {`$R$`} acts as the Lagrangian for the noncyclic
                coordinates. Apply after setting cyclic momenta to constants.
              </div>
            </div>

            <div className="ref-formula">
              <span className="ref-formula-name">
                Swapped Relations (Cyclic, {`$i = s+1,\\ldots,n$`})
              </span>
              <div className="ref-formula-eq">
                {`$$\\frac{\\partial R}{\\partial p_i} = \\dot{q}_i, \\qquad \\frac{\\partial R}{\\partial q_i} = -\\dot{p}_i = 0$$`}
              </div>
              <div className="ref-formula-desc">
                <strong>When to use:</strong> {`$R$`} now tracks the momentum {`$p_i$`} in place of
                the velocity for each cyclic coordinate. The second equation confirms{' '}
                {`$p_i = \\alpha_i = \\mathrm{const}$`}. Use the first to recover {`$q_i(t)$`} by
                integration.
              </div>
            </div>
          </div>
        </>,

        <>
          <div className="ref-section">
            <h2>Key Scalar Relations</h2>

            <div className="ref-formula">
              <span className="ref-formula-name">Energy via {`$R$`}</span>
              <div className="ref-formula-eq">
                {`$$E = R - \\dot{\\xi}\\,\\frac{\\partial R}{\\partial \\dot{\\xi}}$$`}
              </div>
              <div className="ref-formula-desc">
                <strong>When to use:</strong> Find total energy from {`$R$`} after cyclic momenta
                are set to constants. Minus sign is correct (not a typo).
              </div>
            </div>

            <div className="ref-formula">
              <span className="ref-formula-name">Energy Time Derivative</span>
              <div className="ref-formula-eq">
                {`$$\\frac{dh}{dt} = -\\frac{\\partial L}{\\partial t}$$`}
              </div>
              <div className="ref-formula-desc">
                <strong>When to use:</strong> Check whether the energy function {`$h$`} is
                conserved. If {`$L$`} has no explicit time dependence, {`$h$`} is conserved and
                equals the total energy.
              </div>
            </div>

            <div className="ref-formula">
              <span className="ref-formula-name">Recovery of Cyclic Coordinates</span>
              <div className="ref-formula-eq">
                {`$$q_i(t) = q_i(0) + \\int_0^t \\frac{\\partial R}{\\partial p_i}\\bigg|_{p_i = \\alpha_i}\\! dt'$$`}
              </div>
              <div className="ref-formula-desc">
                <strong>When to use:</strong> After solving the noncyclic equations for all
                noncyclic coordinates, integrate to recover each cyclic coordinate.
              </div>
            </div>
          </div>
        </>,

        <>
          <div className="ref-section">
            <h2>Comparison Table</h2>

            <table className="lrn-table">
              <thead>
                <tr>
                  <th>Property</th>
                  <th>Lagrangian {`$L$`}</th>
                  <th>Routhian {`$R$`}</th>
                  <th>Hamiltonian {`$H$`}</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Transform</td>
                  <td>None</td>
                  <td>Partial (cyclic velocities only)</td>
                  <td>Full (all velocities)</td>
                </tr>
                <tr>
                  <td>Variables</td>
                  <td>{`$(q_i, \\dot{q}_i)$`}</td>
                  <td>
                    {`$(q_i, \\dot{q}_i)$`} noncyclic; {`$(q_i, p_i)$`} cyclic
                  </td>
                  <td>{`$(q_i, p_i)$`} all</td>
                </tr>
                <tr>
                  <td>Equations</td>
                  <td>Lagrange, 2nd order, all</td>
                  <td>Lagrange (noncyclic) + Hamilton (cyclic)</td>
                  <td>Hamilton, 1st order, all</td>
                </tr>
                <tr>
                  <td>DOF after reduction</td>
                  <td>{`$n$`}</td>
                  <td>{`$s$`} (noncyclic only)</td>
                  <td>
                    {`$n-k$`} pairs (if {`$k$`} cyclic)
                  </td>
                </tr>
                <tr>
                  <td>Cyclic coordinate fate</td>
                  <td>Velocity remains in {`$L$`}</td>
                  <td>Eliminated; recovered by quadrature</td>
                  <td>Eliminated; momentum set to const</td>
                </tr>
              </tbody>
            </table>
          </div>
        </>,

        <>
          <div className="ref-section">
            <h2>Standard Examples</h2>

            <div className="ref-formula">
              <span className="ref-formula-name">Kepler Effective Potential</span>
              <div className="ref-formula-eq">
                {`$$V_\\mathrm{eff}(r) = -\\frac{k}{r} + \\frac{p_\\phi^2}{2mr^2}$$`}
              </div>
              <div className="ref-formula-desc">
                <strong>When to use:</strong> Central force {`$U = -\\frac{k}{r}$`}.
                {` $p_\\phi = \\alpha$`} is the conserved angular momentum. Circular orbit at{' '}
                {`$r^* = \\frac{\\alpha^2}{mk}$`}.
              </div>
            </div>

            <div className="ref-formula">
              <span className="ref-formula-name">Symmetric Top Effective Potential</span>
              <div className="ref-formula-eq">
                {`$$U_\\mathrm{eff}(\\theta) = \\frac{(p_\\phi - p_\\psi\\cos\\theta)^2}{2I_1\\sin^2\\theta} + Mgl\\cos\\theta$$`}
              </div>
              <div className="ref-formula-desc">
                <strong>When to use:</strong> Symmetric top with {`$p_\\phi$`} and {`$p_\\psi$`}{' '}
                both constant. Derived in full in the rigid-body topic; here it is the standard
                payoff of eliminating the two cyclic Euler angles. Minimum of {`$U_\\mathrm{eff}$`}{' '}
                at {`$\\theta^*$`} gives the steady precession angle.
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
