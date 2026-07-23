import { lazy, Suspense } from 'react'
import { LearningTemplate } from '../../../../../components/learning/learning-template'
import {
  AttrStrangeAttractor,
  AttrHenonMap,
  AttrPhaseContraction,
  LimitCycleVdP,
  FixedPointPortraits,
  AttrHenonHeilesPoincare
} from '../../../../../components/viz'

const TorusWinding3D = lazy(() =>
  import('../../../../../components/viz/scenes-3d/torus-winding')
)

export default function Attractors() {
  const config = {
    cssPrefix: 'attr',
    documentTitle: 'Attractors and Strange Attractors - AETHER',
    learning: {
      category: 'Module 5',
      groupTitle: 'Chaos and Nonlinear Dynamics',
      title: 'Attractors and Strange Attractors',
      subtitle:
        'How dissipative flows collapse phase space onto fractal sets, and why strange attractors produce chaos despite global contraction.',
      sections: [
        <>
          <h2>What an Attractor Is</h2>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              A pendulum swings freely, then you add a little friction. Over many cycles the
              amplitude shrinks to zero. What does the long-run state look like in phase space, and
              what property makes it an attractor?
            </p>
          </div>
          <p>
            An <strong>attractor</strong> is a region of phase space (the space of all possible
            states of the system) that nearby trajectories settle onto once the transients die out.
            Transients are the brief early motion before the system settles. Lanford (1981) gave
            four precise conditions. An attractor must be:
          </p>
          <ol className="lrn-list">
            <li>
              <strong>Invariant.</strong> Trajectories starting on it stay on it forever.
            </li>
            <li>
              <strong>Attracting.</strong> An open neighborhood exists whose trajectories all
              converge to it.
            </li>
            <li>
              <strong>Without transient parts.</strong> No subset converges from outside but then
              leaves; the whole set is the permanent destination.
            </li>
            <li>
              <strong>Indecomposable.</strong> It cannot be split into two separate invariant
              pieces. It is one connected object.
            </li>
          </ol>
          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>
              The four conditions work together to rule out false positives. Condition 1 alone would
              include any invariant set, even unstable ones. Condition 2 adds the convergence
              requirement. Condition 3 removes the case where part of the set is only visited
              transiently before the trajectory leaves. Condition 4 rules out unions of two separate
              attractors being counted as one. Together they pick out one thing: the smallest stable
              set trajectories end on for good.
            </p>
          </div>
          <p>
            The set of all starting points that settle onto an attractor is its{' '}
            <strong>basin of attraction</strong>. When multiple attractors coexist, a{' '}
            <strong>separatrix</strong> separates their basins. A trajectory starting on the
            separatrix typically flows toward an unstable saddle point, which pulls in along one
            direction and pushes out along another, not toward either attractor. One phase space can
            hold several attractors, each with its own basin, like two bowls sharing a table.
          </p>
          <div className="lrn-insight">
            <span className="lrn-insight-label">WHY THIS MATTERS</span>
            <p>
              Deterministic laws still make weather unpredictable past about two weeks. Chaos also
              appears in heart rhythms, chemical oscillations, and planetary motion. Attractors are
              the geometric objects that explain this behavior.
            </p>
          </div>
          <div>
            <FixedPointPortraits />
            <p>
              Five linear fixed-point types. Stable node and stable spiral are fixed-point
              attractors with {`$d_A = 0$`}. Toggle through the types to see which are attractors
              and which are repellers.
            </p>
          </div>
        </>,

        <>
          <h2>The Attractor Dimension Taxonomy</h2>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              A system has two natural frequencies that are not related by any fraction. Its
              trajectory in phase space never repeats exactly. What is the simplest geometric object
              this trajectory can densely fill, and what dimension does it have?
            </p>
          </div>
          <p>
            Regular attractors have integer dimension. The dimension {`$d_A$`} classifies the
            attractor:
          </p>
          <div className="lrn-eq lrn-eq-hero">
            <span>
              {`$$d_A = \\begin{cases} 0 & \\text{fixed point} \\\\ 1 & \\text{limit cycle} \\\\ 2 & \\text{torus} \\\\ N & \\text{N-torus} \\end{cases}$$`}
            </span>
          </div>
          <p>
            A <strong>fixed-point attractor</strong> ({`$d_A = 0$`}) is a single point. The pendulum
            with friction approaches a hanging rest position. Two sub-cases arise depending on
            damping strength.
          </p>
          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Underdamped approach</span>
              <p>
                The system oscillates with decreasing amplitude. Many cycles occur before it stops.
                The phase-space spiral winds inward slowly.
              </p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Overdamped approach</span>
              <p>
                The system slides directly to equilibrium with no oscillation. The phase-space
                trajectory curves straight toward the fixed point.
              </p>
            </div>
          </div>
          <p>
            Both cases reach the same fixed-point attractor. The dimension {`$d_A = 0$`} is
            independent of the path taken to get there.
          </p>
          <h3>Limit Cycle: {`$d_A = 1$`}</h3>
          <p>
            A <strong>limit-cycle attractor</strong> is a closed curve with one frequency. The van
            der Pol oscillator is the canonical example, with its sign-flipping damping{' '}
            {`$-\\varepsilon(1-x^2)\\dot{x}$`} that feeds energy in at small amplitude and bleeds it
            off at large amplitude until the two balance on one stable loop. The new fact here is
            just its dimension: that loop is the {`$d_A = 1$`} attractor, and it stays {`$d_A = 1$`}{' '}
            no matter how large {`$\\varepsilon$`} grows, because a closed curve is one-dimensional
            whatever shape it takes.
          </p>
          <div>
            <LimitCycleVdP />
            <p>
              Van der Pol limit cycle. One trajectory starts inside the unit circle and spirals out;
              one starts outside and spirals in. Both converge to the same closed curve. Adjust{' '}
              {`$\\mu$`} to see the cycle distort from circular to square-wave shape as nonlinearity
              grows.
            </p>
          </div>
          <h3>Torus Attractor: {`$d_A = 2$`}</h3>
          <p>
            Two frequencies {`$\\omega_1$`} and {`$\\omega_2$`} are incommensurate when their ratio
            is not any whole-number fraction. When two incommensurate frequencies drive a system,
            the trajectory winds around a torus surface without ever closing. This is{' '}
            <strong>quasiperiodic</strong> motion: not periodic, but not chaotic. An N-torus carries
            N incommensurate frequencies and has {`$d_A = N$`}.
          </p>
          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Limit cycle {`$d_A = 1$`}</span>
              <p>
                One frequency. The trajectory is a closed loop. It returns to the exact same point
                after one period. Periodic motion.
              </p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Torus {`$d_A = 2$`}</span>
              <p>
                Two incommensurate frequencies. The trajectory winds around the torus surface
                without closing. It densely covers the surface over time. Quasiperiodic, not
                periodic.
              </p>
            </div>
          </div>
          <div>
            <Suspense fallback={<div style={{ minHeight: 440 }} />}>
              <TorusWinding3D />
            </Suspense>
            <p>
              A trajectory winding on a torus, in real 3D. Two frequencies drive it: {`$\\omega_1$`}{' '}
              carries it around the hole, {`$\\omega_2$`} around the tube. Tune the ratio{' '}
              {`$\\omega_2/\\omega_1$`}. A simple fraction {`$p/q$`} closes the orbit into a{' '}
              {`$(p,q)$`} torus knot, a closed curve with {`$d_A = 1$`}. An irrational ratio never
              closes: the orbit fills the surface densely. That dense winding is the {`$d_A = 2$`}{' '}
              attractor. Drag to rotate.
            </p>
          </div>
          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>
              A torus motion with two incommensurate frequencies is called quasiperiodic. Why does
              the trajectory never return to its starting point, even after very long times?
            </p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                For the trajectory to return exactly, the two frequencies would need to satisfy{' '}
                {`$\\omega_1/\\omega_2 = p/q$`} for integers {`$p, q$`}. Then after {`$q$`} cycles
                of {`$\\omega_1$`} and {`$p$`} cycles of {`$\\omega_2$`} the motion repeats. When
                the ratio is irrational, no such integers exist. The trajectory comes arbitrarily
                close to any point on the torus but never returns exactly. This density property is
                what gives the torus its full {`$d_A = 2$`} dimension.
              </p>
            </details>
          </div>
        </>,

        <>
          <h2>Phase-Space Volume Contraction</h2>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              You take a small blob of initial conditions in phase space and let them all evolve
              under a damped oscillator. What happens to the shape and size of the blob over time?
            </p>
          </div>
          <p>
            Dissipative and Hamiltonian systems differ in one thing: how phase volume changes over
            time. A dissipative system loses energy, so its phase volume shrinks. Consider the
            general system {`$\\dot{\\mathbf{x}} = \\mathbf{V}(\\mathbf{x})$`} in {`$N$`}{' '}
            dimensions. A small rectangular volume element {`$\\Delta\\tau = \\prod_i \\Delta x_i$`}{' '}
            evolves at the rate:
          </p>
          <div className="lrn-eq lrn-eq-hero">
            <span>
              {`$$\\Lambda(\\mathbf{x}) \\equiv \\frac{1}{\\Delta\\tau}\\frac{\\partial\\Delta\\tau}{\\partial t} = \\sum_i \\frac{\\partial V_i}{\\partial x_i} = \\nabla \\cdot \\mathbf{V}$$`}
            </span>
          </div>
          <p>
            The moment-by-moment contraction rate equals the divergence of the velocity field: how
            fast the flow spreads outward from each point. The time-averaged rate is:
          </p>
          <div className="lrn-eq">
            <span>
              {`$$\\Lambda_0 = \\lim_{t\\to\\infty}\\frac{1}{t}\\ln\\frac{\\Delta\\tau(t)}{\\Delta\\tau(0)}$$`}
            </span>
          </div>
          <div className="lrn-faded">
            <div className="lrn-faded-phase">
              <span className="lrn-faded-label">
                COMPLETE DERIVATION: Why {`$\\Lambda = \\nabla \\cdot \\mathbf{V}$`}
              </span>
              <p>
                Start with a small box: {`$\\Delta\\tau = \\prod_i \\Delta x_i$`}. Each edge{' '}
                {`$\\Delta x_i$`} evolves as:
              </p>
              <div className="lrn-eq">
                <span>
                  {`$$\\frac{\\partial(\\Delta x_i)}{\\partial t} = \\frac{\\partial V_i}{\\partial x_i}\\,\\Delta x_i$$`}
                </span>
              </div>
              <p>
                Divide through by {`$\\Delta\\tau$`} and sum over {`$i$`}. Each term contributes{' '}
                {`$\\partial V_i/\\partial x_i$`}, giving{' '}
                {`$\\Lambda = \\nabla \\cdot \\mathbf{V}$`}. From here you can test any system for
                dissipation with a single divergence.
              </p>
            </div>
            <div className="lrn-faded-phase">
              <span className="lrn-faded-label">
                YOUR TURN: Find {`$\\Lambda$`} for the damped oscillator
              </span>
              <p>
                Write {`$\\ddot{x} + \\gamma\\dot{x} + \\omega^2 x = 0$`} as {`$\\dot{x}_1 = x_2$`},{' '}
                {`$\\dot{x}_2 = -\\omega^2 x_1 - \\gamma x_2$`}. Compute{' '}
                {`$\\partial V_1/\\partial x_1 + \\partial V_2/\\partial x_2$`}.
              </p>
            </div>
            <div className="lrn-faded-phase">
              <span className="lrn-faded-label">INDEPENDENT PRACTICE</span>
              <p>
                Show that for any Hamiltonian system with {`$\\dot{q} = \\partial H/\\partial p$`},{' '}
                {`$\\dot{p} = -\\partial H/\\partial q$`}, the divergence is zero. This is the
                Liouville theorem.
              </p>
            </div>
          </div>
          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Dissipative system</span>
              <p>
                {`$\\Lambda_0 < 0$`}. Phase volume shrinks over time. Trajectories collapse to a
                lower-dimensional attractor. Fixed-point, limit-cycle, and strange attractors are
                all possible.
              </p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Hamiltonian system</span>
              <p>
                {`$\\Lambda_0 = 0$`}. Phase volume is conserved (Liouville theorem). No attractors
                exist. Chaos is still possible but is area-preserving: the chaotic region fills a
                fixed-volume region on the energy surface.
              </p>
            </div>
          </div>
          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>
              An attractor is a set that nearby volumes shrink onto. Shrinking requires the volume
              to lose size over time, which means {`$\\Lambda_0 < 0$`}. A Hamiltonian system keeps
              {`$\\Lambda_0 = 0$`}, so no blob can ever shrink. With no shrinking, there is nothing
              for trajectories to collapse onto, so attractors cannot form. The sign of{' '}
              {`$\\Lambda_0$`} alone tells you whether a system can have an attractor at all.
            </p>
          </div>
          <div>
            <AttrPhaseContraction />
            <p>
              A blob of 25 initial conditions under a damped oscillator (
              {`$\\gamma = 0.5,\\,\\omega = 1$`}). The outermost shape is the blob at {`$t = 0$`};
              inner shapes show it at {`$t = 1, 2, 4$`}. The filled dot is the fixed-point attractor
              at the origin. Phase volume contracts to zero.
            </p>
          </div>
          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>
              The damped oscillator has {`$\\Lambda = -\\gamma$`}. Why does the phase blob shrink to
              a point rather than to a line or a curve?
            </p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                The damped oscillator is a linear system. Its only attractor is the fixed point at
                the origin, and the contraction is uniform in all directions. Uniform contraction
                shrinks the volume in all directions simultaneously, collapsing the blob to a point.
                In a nonlinear system the contraction rate varies with position, and the attractor
                can have a more complex shape.
              </p>
            </details>
          </div>
        </>,

        <>
          <h2>Liapunov Exponents and the Signature of Chaos</h2>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              A 3D flow has three Liapunov exponents. The system is dissipative, so its volume
              shrinks. The system is also chaotic, so nearby trajectories pull apart. What signs
              must the three exponents have to make both facts true at once?
            </p>
          </div>
          <p>
            Use Liapunov exponents when you need to distinguish regular from chaotic motion or
            compute the fractal dimension of an attractor.
          </p>
          <p>
            An N-dimensional flow has N Liapunov exponents{' '}
            {`$\\sigma_1 \\geq \\sigma_2 \\geq \\cdots \\geq \\sigma_N$`}. Each measures the average
            rate of stretching or contraction along one phase-space direction. Their sum equals the
            average volume contraction rate:
          </p>
          <div className="lrn-eq">
            <span>{`$$\\Lambda_0 = \\sum_{i=1}^{N}\\sigma_i$$`}</span>
          </div>
          <p>
            For a dissipative system {`$\\Lambda_0 < 0$`}, so the exponents sum to a negative
            number. For a chaotic system at least one exponent must be positive. A 3D strange
            attractor has the pattern {`$\\sigma_1 > 0$`}, {`$\\sigma_2 = 0$`}, {`$\\sigma_3 < 0$`},
            with {`$\\sigma_1 + \\sigma_3 < 0$`}.
          </p>
          <p>
            One exponent is always exactly zero for a continuous flow, and it points along the flow
            itself. The reason is simple. Nudging a point a little along its own trajectory just
            slides it to where it would have been a moment later. The two points stay a fixed time
            apart forever. That direction neither stretches nor shrinks on average, so its exponent
            is {`$\\sigma_2 = 0$`}.
          </p>
          <div className="lrn-insight">
            <span className="lrn-insight-label">KEY INSIGHT</span>
            <p>
              {`$\\sigma_1 > 0$`} means sensitive dependence: a tiny starting gap {`$|\\delta_0|$`}{' '}
              grows like {`$|\\delta(t)| \\approx |\\delta_0|\\,e^{\\sigma_1 t}$`}, so nearby orbits
              pull apart fast. {`$\\Lambda_0 < 0$`} means dissipation. Both are true at once for a
              strange attractor. The system stretches in one direction and compresses harder in
              another. This tension between local stretching and global contraction builds the
              attractor's fractal structure, which the dimension section measures later.
            </p>
          </div>
          <p>
            Two-dimensional flows cannot be chaotic (Poincare-Bendixson theorem). In 2D,
            trajectories cannot cross, and a bounded trajectory must converge to a fixed point or
            limit cycle. Three dimensions are the minimum for a chaotic flow. You need one positive
            exponent, one zero, and one negative exponent with a large enough negative sum. Note
            this rule applies to continuous flows; maps can be chaotic in lower dimensions (the
            Hénon map is 2D).
          </p>
          <p>
            The largest Liapunov exponent sets a predictability horizon. Weather has a Liapunov time
            of roughly a few days. The solar system's horizon is millions of years.
          </p>
          <p>
            Here the exponents do one job: they fix the sign pattern a strange attractor must have
            and feed the dimension formula in a later section. That sign signature, plus its link to
            dissipation through {`$\\Lambda_0 = \\sum_i \\sigma_i$`}, is all this page needs.
          </p>
        </>,

        <>
          <h2>Strange Attractors and Sensitive Dependence</h2>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              Two trajectories start very close together on a strange attractor. After many time
              steps they are far apart. Meanwhile the total phase volume has shrunk. How can both be
              true at the same time?
            </p>
          </div>
          <p>
            A <strong>strange attractor</strong> has non-integer (fractal) dimension. A fractal
            dimension is a dimension that is not a whole number. It comes out fractional because the
            shape keeps showing new detail no matter how far you zoom in. So a strange attractor is
            not a point, a curve, or a surface. It is something in between: a crumpled sheet that
            occupies zero volume in 3D but is more tangled than any smooth 2D surface. Strange
            attractors arise only in dissipative systems with at least three phase-space dimensions.
          </p>
          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Regular attractor</span>
              <p>
                Integer dimension: {`$d_A = 0, 1, 2, \\ldots$`}. Nearby trajectories stay close (
                {`$\\sigma_1 \\leq 0$`}). Localized geometric object. Stable and predictable.
              </p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Strange attractor</span>
              <p>
                Fractal dimension: {`$d_A$`} non-integer. Nearby trajectories diverge (
                {`$\\sigma_1 > 0$`}). Widely dispersed fractal set. Deterministic but unpredictable
                over long times.
              </p>
            </div>
          </div>
          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Random process</span>
              <p>
                No rule generates the next state. Two runs starting from the same point give
                different futures.
              </p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Chaotic process</span>
              <p>
                A fixed deterministic rule generates every state. Identical starts give identical
                futures, but nearby starts diverge fast.
              </p>
            </div>
          </div>
          <p>
            An unstable fixed point pushes trajectories away to infinity. A strange attractor pushes
            nearby trajectories apart yet folds them back, so they stay forever on a bounded set.
          </p>
          <p>
            The stretching-and-folding mechanism resolves the paradox of divergence and contraction
            happening at once. Think of dough being kneaded. The flow stretches it in one direction,
            which separates nearby points. It compresses the dough in another direction, which
            shrinks the volume. Stretching alone would push trajectories off to infinity. But the
            attractor is bounded, so the stretched sheet has nowhere left to go and must fold back
            onto itself. That forced fold builds a Cantor-set cross-section. Picture taking a line,
            cutting out the middle third, then doing that to every piece that is left, forever. What
            remains is a dust of points with gaps at every scale. The attractor's cross-section is
            layered the same way, and that layering is what gives it a fractal dimension.
          </p>
          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>
              The three Liapunov exponents for a 3D strange attractor satisfy {`$\\sigma_1 > 0$`},{' '}
              {`$\\sigma_2 = 0$`}, {`$\\sigma_3 < 0$`}. The attractor occupies a set of dimension
              between 2 and 3: fully extended in two directions (corresponding to{' '}
              {`$\\sigma_1, \\sigma_2$`}) and fractal in the third (contracted by {`$\\sigma_3$`}).
              The fractal part arises because each fold compresses the sheet by {`$e^{\\sigma_3}$`}{' '}
              per unit time while stretching it by {`$e^{\\sigma_1}$`}. This stacks up thinner and
              thinner layers with no smallest scale.
            </p>
          </div>
        </>,

        <>
          <h2>The Rössler Attractor</h2>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              As the parameter {`$\\mu$`} in the Rössler equations increases from 2.6 to 5.7,
              predict the sequence of attractor types before the system reaches its strange
              attractor.
            </p>
          </div>
          <p>
            The <strong>Rössler equations</strong> are the simplest known system to produce a
            strange attractor in a 3D flow:
          </p>
          <div className="lrn-eq lrn-eq-hero">
            <span>
              {`$$\\dot{X} = -(Y+Z),\\quad \\dot{Y} = X + \\tfrac{1}{5}Y,\\quad \\dot{Z} = \\tfrac{1}{5} + Z(X-\\mu)$$`}
            </span>
          </div>
          <p>
            At {`$\\mu = 2.6$`} the attractor is a simple limit cycle. As {`$\\mu$`} increases the
            system goes through a <strong>period-doubling cascade</strong>: the orbit needs twice as
            many loops to repeat, then twice as many again, and so on:
          </p>
          <ul className="lrn-list">
            <li>{`$\\mu = 3.5$`}: period-2 limit cycle (two loops before repeating).</li>
            <li>{`$\\mu = 4.1$`}: period-4 limit cycle.</li>
            <li>{`$\\mu = 4.23$`}: chaotic band begins.</li>
            <li>{`$\\mu \\approx 5.7$`}: fully developed strange attractor.</li>
          </ul>
          <p>
            The strange attractor is reached through this cascade of period doublings, not by a
            sudden jump. Each doubling halves the gap to the next one, so they pile up at a finite
            {` `}
            {`$\\mu$`} where the orbit can no longer repeat at all.
          </p>
          <p>
            Rössler originally designed these equations to model oscillating chemical reactions like
            the Belousov-Zhabotinsky reaction.
          </p>
          <h3>Topology of the Rössler Attractor</h3>
          <p>
            The Rössler attractor is topologically a <strong>single folded sheet</strong>. The
            trajectory spirals outward in the X-Y plane, dips into the Z direction, and folds back.
            This one fold is the simplest possible topology for a strange attractor. The Lorenz
            attractor, by contrast, consists of <strong>two sheets each splitting</strong> at the
            right edge, giving a more complex topology.
          </p>
          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Rössler attractor</span>
              <p>
                One folded sheet. Simpler topology. The one-dimensional return map, which records
                where each loop lands on a chosen slice, has regions with slope less than 1, making
                chaotic proof harder. Projection onto X-Y plane shows a spiral with a single fold.
              </p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Lorenz attractor</span>
              <p>
                Two sheets, each splitting into two at the right edge. More complex topology. The
                one-dimensional return map has slope greater than 1 everywhere, making chaotic
                behavior provable rigorously.
              </p>
            </div>
          </div>
          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>
              Slope greater than 1 means the return map stretches every small gap. Two nearby points
              always move apart on each pass. That guarantees exponential divergence, so the chaos
              is easy to prove. The Rössler return map has slope below 1 in some regions. There,
              gaps shrink instead of growing. The map still produces chaos overall, but the mixed
              slopes make a clean proof much harder.
            </p>
          </div>
          <div>
            <AttrStrangeAttractor />
            <p>
              Rössler attractor in 3D phase space. Computed by integrating the full equations with
              RK4 (6000 steps after transient burn-in). Yaw and pitch rotate the view to reveal the
              single fold in Z. Move the {`$\\mu$`} slider to see the attractor evolve from a limit
              cycle at low {`$\\mu$`} through period-doubling to the strange attractor near{' '}
              {`$\\mu = 5.7$`}.
            </p>
          </div>
          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>
              The Rössler attractor is described as a "folded sheet." Explain in your own words how
              the single fold creates sensitive dependence on initial conditions.
            </p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                Two trajectories that are very close together spiral outward together in the X-Y
                plane. When they reach the fold region, one goes over the top of the fold and one
                under it. This maps a tiny initial gap to a gap you can see, on opposite sides of
                the sheet. Each subsequent spiral-and-fold multiplies the separation further, giving
                exponential divergence (positive {`$\\sigma_1$`}). The fold is the geometric
                mechanism of sensitive dependence.
              </p>
            </details>
          </div>
        </>,

        <>
          <h2>The Hénon Map Attractor</h2>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              The Hénon map contracts area by a factor of 0.3 per iteration. After 20,000
              iterations, predict what the set of visited points will look like: a solid region, a
              smooth curve, or something else?
            </p>
          </div>
          <p>
            The <strong>Hénon map</strong> is a 2D invertible map that contracts area and exhibits a
            strange attractor:
          </p>
          <div className="lrn-eq lrn-eq-hero">
            <span>{`$$x_{n+1} = y_n + 1 - a\\,x_n^2,\\qquad y_{n+1} = b\\,x_n$$`}</span>
          </div>
          <p>
            At {`$a = 1.4$`} and {`$b = 0.3$`} the attractor is strange. The Jacobian determinant,
            the factor by which the map scales area in one step, is constant at{' '}
            {`$\\det M = -b = -0.3$`}. So every iteration contracts area by the same factor{' '}
            {`$|b| = 0.3$`}, regardless of location. The map squeezes in one direction and stretches
            in another.
          </p>
          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>
              The Jacobian determinant gives the area-scaling factor for one step of the map. Here
              it equals {`$-b$`} at every point, so the area always shrinks to {`$|b|$`} of its
              former size. The minus sign just flips orientation; it does not change area. Constant
              contraction with stretching in one direction is exactly the kneading action that
              builds a strange attractor: squeeze the sheet thin, stretch it long, then fold it back
              to stay bounded.
            </p>
          </div>
          <div className="lrn-faded">
            <div className="lrn-faded-phase">
              <span className="lrn-faded-label">COMPLETE EXAMPLE: Finding Hénon fixed points</span>
              <p>
                Set {`$x_{n+1} = x_n = x^*$`} and {`$y_{n+1} = y_n = y^*$`}. From the second
                equation: {`$y^* = b\\,x^*$`}. Substituting into the first:
              </p>
              <div className="lrn-eq">
                <span>{`$$a\\,(x^*)^2 + (1-b)\\,x^* - 1 = 0$$`}</span>
              </div>
              <p>Solving:</p>
              <div className="lrn-eq">
                <span>{`$$x^*_{0,1} = \\frac{-(1-b) \\pm \\sqrt{(1-b)^2 + 4a}}{2a},\\quad y^*_{0,1} = b\\,x^*_{0,1}$$`}</span>
              </div>
              <p>
                Fixed points exist when {`$a > a_0 = -(1-b)^2/4$`}. For {`$b = 0.3$`},{' '}
                {`$a_0 = -0.1225$`}. Since {`$a = 1.4 \\gg a_0$`}, two fixed points exist.
              </p>
            </div>
            <div className="lrn-faded-phase">
              <span className="lrn-faded-label">
                YOUR TURN: When does the lower fixed point lose stability?
              </span>
              <p>
                For {`$b = 0.3$`}, the lower fixed point becomes unstable when{' '}
                {`$a > a_1 = 3(1-b)^2/4$`}. Compute {`$a_1$`} and compare to {`$a = 1.4$`}.
              </p>
            </div>
            <div className="lrn-faded-phase">
              <span className="lrn-faded-label">INDEPENDENT PRACTICE</span>
              <p>
                Show that the area contraction per iteration is exactly {`$|b|$`} by computing{' '}
                {`$|\\det M|$`} directly from the Jacobian matrix.
              </p>
            </div>
          </div>
          <div>
            <AttrHenonMap />
            <p>
              Top: the orbit diagram plots the {`$x$`} values the orbit settles on for each {`$a$`}{' '}
              (with {`$b = 0.3$`}). It shows the period-doubling cascade, the chaotic sea, and the
              periodic windows inside it. Bottom: the attractor itself, 30,000 iterations at the
              current {`$a$`}. Drag {`$a$`} to move the cursor through the cascade. In a window the
              attractor collapses to a few points. In the chaotic region it is the strange attractor
              with its leaf structure.
            </p>
          </div>
          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>
              Iterating the Hénon map for more steps reveals finer and finer leaf structure. Why
              does the structure appear at all scales and not stop at some minimum scale?
            </p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                The Hénon attractor has a Cantor-set cross-section: self-similar at every scale.
                Each iteration applies the same stretching and folding with area contraction by{' '}
                {`$b = 0.3$`}. That contraction never reaches zero. It only creeps toward zero as
                the iterations pile up. At any finite magnification there are sheets separated by
                gaps, and within each sheet there are more sub-sheets. The scale invariance has no
                floor. At {`$10^4$`}
                iterations the coarsest structure is visible; at {`$5 \\times 10^6$`} the finest
                numerically accessible structure appears.
              </p>
            </details>
          </div>
        </>,

        <>
          <h2>Fractal Dimension of Strange Attractors</h2>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              You start with a line segment and repeatedly remove the middle third. After infinitely
              many steps, what dimension should the leftover set have: a whole number like 0 or 1,
              or something in between?
            </p>
          </div>
          <p>
            The <strong>capacity dimension</strong> {`$D_0$`} measures the effective dimension of a
            fractal set:
          </p>
          <div className="lrn-eq lrn-eq-hero">
            <span>
              {`$$D_0(S) = \\lim_{\\varepsilon \\to 0}\\frac{\\ln M(\\varepsilon)}{\\ln(1/\\varepsilon)}$$`}
            </span>
          </div>
          <p>
            Here {`$M(\\varepsilon)$`} is the minimum number of boxes of side {`$\\varepsilon$`}{' '}
            needed to cover the set. For a regular {`$d$`}-dimensional object{' '}
            {`$M \\sim \\varepsilon^{-d}$`}, giving {`$D_0 = d$`} (integer). For a fractal,{' '}
            {`$D_0$`} is non-integer.
          </p>
          <p>
            The middle-thirds Cantor set is the standard test case: keep cutting the middle third
            out forever and you get {`$M = 2^n$`} pieces of length {`$(1/3)^n$`}, so{' '}
            {`$D_0 = \\ln 2 / \\ln 3 \\approx 0.63$`}. The next topic works through box-counting and
            this Cantor measurement in full. The Rössler and Hénon strange attractors carry the same
            Cantor-set structure in cross-section.
          </p>
          <h3>Kaplan-Yorke Dimension {`$D_{\\mathrm{KY}}$`}</h3>
          <p>
            Box-counting gives the dimension from the geometry. The next formula gets the same
            number from the dynamics instead.
          </p>
          <p>
            The <strong>Kaplan-Yorke dimension</strong> connects Liapunov exponents to fractal
            dimension:
          </p>
          <div className="lrn-eq lrn-eq-hero">
            <span>
              {`$$D_{\\mathrm{KY}} = j + \\frac{\\sum_{i=1}^{j}\\sigma_i}{|\\sigma_{j+1}|}$$`}
            </span>
          </div>
          <p>
            Here {`$j$`} is the largest integer such that {`$\\sum_{i=1}^{j}\\sigma_i > 0$`}. For a
            3D flow ({`$\\sigma_1 > 0$`}, {`$\\sigma_2 = 0$`}, {`$\\sigma_3 < 0$`}): {`$j = 2$`}{' '}
            and:
          </p>
          <div className="lrn-eq">
            <span>{`$$D_{\\mathrm{KY}} = 2 - \\frac{\\sigma_1}{\\sigma_3}$$`}</span>
          </div>
          <p>
            For example, take {`$\\sigma_1 = 0.9$`}, {`$\\sigma_2 = 0$`}, {`$\\sigma_3 = -1.4$`}.
            Then {`$D_{\\mathrm{KY}} = 2 - 0.9/(-1.4) = 2 + 0.64 = 2.64$`}: a fractal dimension
            between 2 and 3, exactly what a 3D strange attractor should have.
          </p>
          <p>
            For 2D maps ({`$\\sigma_1 > 0 > \\sigma_1 + \\sigma_2$`}):{' '}
            {`$D_{\\mathrm{KY}} = 1 - \\sigma_1/\\sigma_2$`}. Here {`$\\sigma_2 < 0$`}, so{' '}
            {`$-\\sigma_1/\\sigma_2$`} is positive and the dimension lands above 1, not below it.
            For the Hénon map at {`$a = 1.4$`} ({`$\\sigma_1 \\approx 0.60$`},{' '}
            {`$\\sigma_2 \\approx -2.34$`}): {`$D_{\\mathrm{KY}} = 1 + 0.60/2.34 \\approx 1.26$`}.
            Empirically {`$D_{\\mathrm{KY}} \\approx D_0$`} for all well-studied strange attractors.
            This agreement is the Kaplan-Yorke conjecture.
          </p>
          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Capacity {`$D_0$`} (geometric)</span>
              <p>
                Defined by box counting. Direct measure of how the set fills space at fine scales.
                Requires knowing the geometric structure. Hard to compute numerically to high
                precision.
              </p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">
                Kaplan-Yorke {`$D_{\\mathrm{KY}}$`} (dynamical)
              </span>
              <p>
                Defined from Liapunov exponents. Captures the same fractal dimension through
                dynamics. Easier to compute numerically from trajectories. Empirically equal to{' '}
                {`$D_0$`} for known systems.
              </p>
            </div>
          </div>
          <div className="lrn-definition">
            <span className="lrn-definition-term">
              {`$D_{\\mathrm{KY}}$`} vs {`$D_0$`}: selected systems
            </span>
            <div className="lrn-definition-desc">
              <p>
                Hénon map {`$(a=1.2, b=0.3)$`}: {`$D_{\\mathrm{KY}} = 1.200 \\pm 0.001$`},{' '}
                {`$D_0 = 1.202 \\pm 0.003$`}.
              </p>
              <p>
                Hénon map {`$(a=1.4, b=0.3)$`}: {`$D_{\\mathrm{KY}} = 1.264 \\pm 0.002$`},{' '}
                {`$D_0 = 1.261 \\pm 0.003$`}.
              </p>
              <p>
                Kaplan-Yorke map {`$(\\alpha=0.2)$`}: {`$D_{\\mathrm{KY}} = 1.4307$`},{' '}
                {`$D_0 = 1.432 \\pm 0.002$`}.
              </p>
            </div>
          </div>
          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>
              {`$D_0$`} measures how the set fills space at fine scales. {`$D_{\\mathrm{KY}}$`}{' '}
              measures how stretching and compression by the flow produce a fractal structure. The
              connection: each pass through the folding region stretches by {`$e^{\\sigma_1}$`} and
              compresses by {`$e^{\\sigma_3}$`}. The balance {`$\\sigma_1/|\\sigma_3|$`} is exactly
              the fractional extra dimension above {`$j$`} in the Kaplan-Yorke formula. Agreement
              between {`$D_{\\mathrm{KY}}$`} and {`$D_0$`} across all measured systems shows that
              the dynamics determine the geometry completely.
            </p>
          </div>
        </>,

        <>
          <h2>Hénon-Heiles: Hamiltonian Chaos and the Route to Disorder</h2>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              The Hénon-Heiles system is Hamiltonian, so phase volume is conserved. Can it have a
              strange attractor? What kind of chaos, if any, can it show?
            </p>
          </div>
          <p>
            The <strong>Hénon-Heiles Hamiltonian</strong> models a star in a galactic potential
            restricted to the {`$x$`}-{`$y$`} plane:
          </p>
          <div className="lrn-eq lrn-eq-hero">
            <span>
              {`$$H = \\frac{p_x^2}{2m} + \\frac{p_y^2}{2m} + \\frac{1}{2}k(x^2+y^2) + \\lambda\\!\\left(x^2 y - \\frac{1}{3}y^3\\right)$$`}
            </span>
          </div>
          <p>
            In dimensionless form ({`$p_x = m\\dot{x}$`}, {`$\\lambda = 1$`}), the energy is:
          </p>
          <div className="lrn-eq">
            <span>
              {`$$E = \\frac{1}{2}\\dot{x}^2 + \\frac{1}{2}\\dot{y}^2 + \\frac{1}{2}x^2 + \\frac{1}{2}y^2 + x^2 y - \\frac{1}{3}y^3$$`}
            </span>
          </div>
          <p>The equations of motion are:</p>
          <div className="lrn-eq">
            <span>{`$$\\ddot{x} = -x - 2xy,\\qquad \\ddot{y} = -y - x^2 + y^2$$`}</span>
          </div>
          <p>
            For {`$E < 1/6$`} the equipotential curve (a curve where the potential energy is the
            same all along it) is a closed triangle-like boundary. Trajectories remain confined. At{' '}
            {`$E = 1/6$`} the boundary opens at three corners and orbits can escape.
          </p>
          <h3>Poincaré Sections: Three Energy Regimes</h3>
          <p>
            Taking Poincaré sections at {`$x = 0$`} (plotting {`$y, \\dot{y}$`} at each crossing
            with {`$\\dot{x} > 0$`}) reveals the progression from order to chaos:
          </p>
          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">{`$E = 1/12$`} (regular)</span>
              <p>
                Four elliptic island regions. Orbits form closed curves on the section. Motion is
                quasiperiodic on tori. Fraction of regular phase space: near 1.
              </p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">{`$E = 1/8$`} (mixed)</span>
              <p>
                Five islands persist but scattered points appear between them. Regular islands
                coexist with the chaotic sea. Fraction of regular phase space: roughly 0.5.
              </p>
            </div>
          </div>
          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">{`$E = 1/6$`} (chaotic)</span>
              <p>
                Chaos dominates the accessible region. Small islands persist but most of the section
                is the chaotic sea. Fraction of regular phase space: near zero.
              </p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Onset near {`$E \\approx 1/9$`}</span>
              <p>
                The fraction of regular orbits stays near 1 for {`$E < 1/9$`}. It drops sharply
                between {`$E = 1/9$`} and {`$E = 1/6$`} as KAM tori break down.
              </p>
            </div>
          </div>
          <div>
            <AttrHenonHeilesPoincare />
            <p>
              Poincaré section of the Hénon-Heiles system ({`$x = 0,\\, \\dot{x} > 0$`}). At low
              energy ({`$E = 1/12$`}) closed curves form regular islands. At high energy (
              {`$E = 1/6$`}) the chaotic sea dominates. Use the energy selector to watch the
              transition.
            </p>
          </div>
          <p>
            Because the Hénon-Heiles system is Hamiltonian, it has no strange attractor. The chaos
            is <strong>Hamiltonian chaos</strong>: trajectories wander ergodically through the
            chaotic region on the energy surface, visiting every part of it given enough time. The
            KAM theorem (Kolmogorov-Arnold-Moser: most regular orbits survive a small disturbance)
            guarantees that some tori survive at low energy. Chaos sets in when the cubic coupling
            destroys them above the onset energy.
          </p>
          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>
              The KAM theorem says most tori survive a small disturbance to an integrable
              Hamiltonian. Orbits stay quasiperiodic, slightly deformed. As energy increases, the
              cubic disturbance grows relative to the harmonic restoring force. At{' '}
              {`$E \\approx 1/9$`} it is large enough to destroy the tori linking the three corners
              of the equipotential triangle. Chaotic orbits can then connect previously separate
              regions. At {`$E = 1/6$`} the boundary opens and chaos fills the accessible space.
              Islands that persist are protected by their own local KAM structure.
            </p>
          </div>
          <h3>Elliptic and Hyperbolic Fixed Points</h3>
          <p>Two types of fixed points coexist in the Poincaré section:</p>
          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Elliptic fixed points</span>
              <p>
                Surrounded by closed oval orbits. Stable: nearby orbits circulate around them
                indefinitely. The islands in the Poincaré sections are centered on elliptic points.
              </p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Hyperbolic fixed points</span>
              <p>
                Saddle-type: orbits approach along the stable manifold (the set of paths that flow
                in) and leave along the unstable manifold (the set of paths that flow out).
                Unstable. Chaotic regions arise near hyperbolic points where the in-flowing and
                out-flowing curves from different saddles cross.
              </p>
            </div>
          </div>
        </>
      ]
    },
    practice: [
      {
        q: `State Lanford's four formal conditions that define an attractor.`,
        a: `An attractor must be: (1) invariant under the flow; (2) attracting, meaning an open neighborhood exists whose trajectories all converge to it; (3) without transient parts; (4) indecomposable, meaning it cannot be split into two separate invariant pieces. Together these four conditions pick out one thing: the smallest stable set that nearby trajectories end on for good.`
      },
      {
        q: `Give the attractor dimension $d_A$ for each regular attractor type, and state which systems support attractors.`,
        a: `Fixed point: $d_A = 0$. Limit cycle: $d_A = 1$. Torus: $d_A = 2$. An N-torus has $d_A = N$. All regular attractors have integer dimension. They arise only in dissipative systems where $\\Lambda_0 < 0$. Hamiltonian systems have $\\Lambda_0 = 0$ (Liouville theorem) and therefore no attractors.`
      },
      {
        q: `A pendulum with friction starts at 30 degrees with a gentle push. Describe the long-run Poincaré section and state the attractor dimension.`,
        a: `In the long run all trajectories converge to the resting position at the bottom. In the Poincaré section this appears as a single point. The attractor is a fixed point with $d_A = 0$. Whether the approach is underdamped (spiraling) or overdamped (sliding), both converge to the same $d_A = 0$ attractor.`
      },
      {
        q: `Write the van der Pol equation and explain the physical mechanism of its limit cycle.`,
        a: `The equation is $m\\ddot{x} - \\varepsilon(1-x^2)\\dot{x} + m\\omega_0^2 x = 0$. The damping $-\\varepsilon(1-x^2)$ changes sign at $|x|=1$. For $|x|>1$ damping is positive: energy is removed and the trajectory spirals inward. For $|x|<1$ damping is negative: energy is added and the trajectory spirals outward. At $|x|=1$ the two effects balance, creating a stable limit cycle with $d_A = 1$.`
      },
      {
        q: `A van der Pol oscillator runs with very large $\\varepsilon$. Its limit cycle is shaped like a square wave. Does $d_A$ change?`,
        a: `No. The dimension $d_A = 1$ remains unchanged. Dimension is a topological property: the limit cycle is still a closed curve in phase space regardless of shape. Large $\\varepsilon$ distorts the circular cycle toward a square wave (relaxation oscillations), but the attractor's topology and dimension are unaffected.`
      },
      {
        q: `A system has two natural frequencies $\\omega_1 = 1$ and $\\omega_2 = \\sqrt{3}$. It starts on a torus. After a very long time, has the orbit returned to its starting point?`,
        a: `No. For the orbit to return exactly, $\\omega_1/\\omega_2 = 1/\\sqrt{3}$ would need to be rational. Since $\\sqrt{3}$ is irrational, the ratio is irrational and the two frequencies are incommensurate. The orbit never closes: it winds densely around the torus, coming arbitrarily close to every point but never returning exactly. This quasiperiodic motion defines the $d_A = 2$ torus attractor.`
      },
      {
        q: `Derive $\\Lambda = \\nabla \\cdot \\mathbf{V}$ from the evolution of a small phase-space volume element.`,
        a: `Start with a small box $\\Delta\\tau = \\prod_i \\Delta x_i$. Each edge evolves as $\\partial(\\Delta x_i)/\\partial t = (\\partial V_i/\\partial x_i)\\Delta x_i$. The rate of volume change is $(1/\\Delta\\tau)(\\partial\\Delta\\tau/\\partial t) = \\sum_i (\\partial V_i/\\partial x_i) = \\nabla \\cdot \\mathbf{V}$. For a Hamiltonian system $\\nabla \\cdot \\mathbf{V} = \\partial^2 H/\\partial p \\partial q - \\partial^2 H/\\partial q \\partial p = 0$ by equality of mixed partials: this is the Liouville theorem.`
      },
      {
        q: `A 2D flow has $\\mathbf{V} = (-x, -2y)$. Is it dissipative? Can it have a strange attractor?`,
        a: `$\\nabla \\cdot \\mathbf{V} = -1 + (-2) = -3 < 0$, so it is dissipative. No strange attractor is possible: this is a linear system whose only attractor is the fixed point at the origin ($d_A = 0$). Strange attractors require at least three phase-space dimensions in a continuous flow (Poincaré-Bendixson prevents chaos in 2D) and nonlinearity. Negative divergence is necessary but not sufficient.`
      },
      {
        q: `What are the three conditions on Liapunov exponents $\\sigma_1, \\sigma_2, \\sigma_3$ of a 3D strange attractor?`,
        a: `(1) $\\sigma_1 > 0$: sensitive dependence, exponential divergence of nearby trajectories. (2) $\\sigma_2 = 0$: the flow direction has neither growth nor decay. (3) $\\sigma_1 + \\sigma_3 < 0$: phase volume contracts overall, requiring $|\\sigma_3| > \\sigma_1$. These conditions allow sensitive dependence (chaos) and dissipation (convergence to attractor) to coexist.`
      },
      {
        q: `Why is three the minimum phase-space dimension for chaos in a continuous flow?`,
        a: `In a 2D autonomous flow, Poincaré-Bendixson says bounded trajectories must converge to a fixed point or limit cycle: no chaos. In terms of exponents: a 2D flow forces $\\sigma_2 = 0$ (flow direction). For dissipation $\\Lambda_0 < 0$ and $\\sigma_1 > 0$ you need $\\sigma_1 + 0 < 0$, which is impossible since $\\sigma_1 > 0$. Three dimensions give the extra exponent $\\sigma_3$ needed to make $\\Lambda_0 = \\sigma_1 + 0 + \\sigma_3 < 0$ while keeping $\\sigma_1 > 0$.`
      },
      {
        q: `Write the Rössler equations and identify which parameter controls the transition from a limit cycle to a strange attractor.`,
        a: `$\\dot{X} = -(Y+Z)$, $\\dot{Y} = X + \\frac{1}{5}Y$, $\\dot{Z} = \\frac{1}{5} + Z(X-\\mu)$. The parameter $\\mu$ controls the transition. At $\\mu = 2.6$: simple limit cycle. Period-doubling at $\\mu = 3.5, 4.1, 4.23$ leads to the strange attractor near $\\mu \\approx 5.7$. This period-doubling cascade is the route to chaos.`
      },
      {
        q: `Compare the topological structure of the Rössler and Lorenz attractors. Which is easier to prove chaotic rigorously?`,
        a: `The Rössler attractor is a once-folded sheet (simplest topology). The Lorenz attractor consists of two sheets each splitting into two at the right edge (more complex). The Lorenz is easier to prove chaotic: its one-dimensional return map has slope greater than 1 everywhere, directly implying expansion and chaos. The Rössler return map has slope less than 1 in some regions, making the proof harder.`
      },
      {
        q: `A student runs the Rössler system at $\\mu = 2.6$ and sees a closed orbit. She increases $\\mu$ to 3.5 and sees two loops before the orbit repeats. What bifurcation occurred?`,
        a: `A period-doubling bifurcation. The period-1 limit cycle lost stability and a stable period-2 orbit was born. This is the first step in the period-doubling cascade. Continuing to $\\mu = 4.1$ gives period-4, then period-8, with the chaotic band beginning near $\\mu = 4.23$ beyond which the attractor becomes strange.`
      },
      {
        q: `Write the Hénon map equations and compute the area contraction factor per iteration.`,
        a: `$x_{n+1} = y_n + 1 - a\\,x_n^2$, $y_{n+1} = b\\,x_n$. The Jacobian is $M = \\begin{pmatrix} -2ax_n & 1 \\\\ b & 0 \\end{pmatrix}$, giving $\\det M = -b$. Area contracts by $|b|$ per iteration. At standard parameters $b = 0.3$, each iteration shrinks every area element to 30% of its previous value, regardless of location.`
      },
      {
        q: `Iterating the Hénon map at $a = 1.4$, $b = 0.3$ for $10^4$ steps shows coarse leaf structure. At $10^6$ steps finer structure appears. What does this tell you about the attractor?`,
        a: `The attractor has a self-similar Cantor-set cross-section: structure exists at all scales with no minimum. At $10^4$ iterations the trajectory samples only the coarsest sheets. At $10^6$ iterations finer sub-sheets become visible. This scale invariance is the hallmark of fractal geometry. The capacity dimension $D_0 \\approx 1.261$ captures the scaling: more than a 1D curve, less than a 2D area.`
      },
      {
        q: `Define the capacity dimension $D_0$ and apply it to compute the dimension of the middle-thirds Cantor set.`,
        a: `$D_0 = \\lim_{\\varepsilon\\to 0}\\ln M(\\varepsilon)/\\ln(1/\\varepsilon)$ where $M(\\varepsilon)$ is the minimum number of intervals of length $\\varepsilon$ needed to cover the set. For the Cantor set at stage $n$: $M = 2^n$, $\\varepsilon = (1/3)^n$. So $D_0 = \\lim_{n\\to\\infty} \\ln 2^n / \\ln 3^n = \\ln 2/\\ln 3 \\approx 0.630$. The set has measure zero ($(2/3)^n \\to 0$) and is uncountable (it pairs up one-to-one with the binary reals via base-3 representations using digits 0 and 2 only).`
      },
      {
        q: `The Cantor set has $D_0 = \\ln 2/\\ln 3 \\approx 0.630$. What would $D_0$ be if we removed the middle half of each interval instead?`,
        a: `Removing the middle half leaves $M = 2^n$ intervals each of length $\\varepsilon = (1/4)^n$ (each remaining piece is a quarter of the previous interval length). So $D_0 = \\ln 2^n / \\ln 4^n = \\ln 2 / \\ln 4 = \\ln 2 / (2\\ln 2) = 1/2 = 0.5$. Removing more of the set at each step leaves a sparser set with lower dimension.`
      },
      {
        q: `Write the Kaplan-Yorke dimension formula for a 3D flow and compute it for exponents $\\sigma_1 = 0.9$, $\\sigma_2 = 0$, $\\sigma_3 = -1.4$.`,
        a: `For a 3D flow: $D_{\\mathrm{KY}} = 2 - \\sigma_1/\\sigma_3 = 2 - (0.9)/(-1.4) = 2 + 0.643 = 2.643$. Check: $\\Lambda_0 = 0.9 + 0 + (-1.4) = -0.5 < 0$. The system is dissipative and the non-integer dimension between 2 and 3 is consistent with a strange attractor in 3D phase space.`
      },
      {
        q: `What do the Hénon-Heiles Poincaré sections show at $E = 1/12$, $E = 1/8$, and $E = 1/6$?`,
        a: `At $E = 1/12$: four elliptic island regions with closed curves; all orbits regular and quasiperiodic on tori. At $E = 1/8$: five islands persist but scattered points appear; regular and chaotic motion coexist. At $E = 1/6$: chaos dominates; small islands remain but most of the accessible region is the chaotic sea. The regular-orbit fraction drops from near 1 for $E < 1/9$ to near 0 at $E = 1/6$.`
      },
      {
        q: `The Hénon-Heiles system is Hamiltonian. Explain why it cannot have a strange attractor even though it exhibits chaos at high energy.`,
        a: `Hamiltonian systems have $\\Lambda_0 = 0$ everywhere: phase volume is conserved by the Liouville theorem. An attractor requires $\\Lambda_0 < 0$, a region that trajectories converge to. With $\\Lambda_0 = 0$ there is no convergence, so no attractor exists. The chaos in Hénon-Heiles is Hamiltonian chaos: trajectories wander ergodically through the chaotic region. The scattered Poincaré points fill a region of positive measure, not a fractal set of measure zero.`
      },
      {
        q: `What is an elliptic fixed point in a Poincaré section, and what is a hyperbolic fixed point? Which is surrounded by regular orbits?`,
        a: `An elliptic fixed point is a center: nearby orbits form closed ovals around it, and it is stable. The regular islands in a Poincaré section are centered on elliptic points. A hyperbolic fixed point is a saddle: orbits approach along the stable manifold and diverge along the unstable manifold; it is unstable. Chaotic regions arise near hyperbolic points where the in-flowing and out-flowing curves from different saddles cross again and again, weaving an infinitely tangled mesh that order cannot survive.`
      },
      {
        q: `The Kaplan-Yorke conjecture says $D_{\\mathrm{KY}} \\approx D_0$. What does the data for the Hénon map at $a = 1.4$, $b = 0.3$ show?`,
        a: `$D_{\\mathrm{KY}} = 1.264 \\pm 0.002$ and $D_0 = 1.261 \\pm 0.003$. The two values agree within measurement uncertainty, supporting the conjecture. This agreement holds for every measured system: the Hénon map at two parameter values and the Kaplan-Yorke map both match within their error bars.`
      },
      {
        q: `Why does the Cantor set have both measure zero and uncountably infinite cardinality simultaneously?`,
        a: `The measure is the total length: at stage $n$ the remaining intervals cover length $(2/3)^n \\to 0$. So the measure is zero. Yet each point in the Cantor set can be written as a base-3 number using only digits 0 and 2. Mapping $0 \\to 0$, $2 \\to 1$ pairs these one-to-one with binary representations of reals in $[0,1]$. Since the reals are uncountable, so is the Cantor set. Measure zero and uncountable cardinality are compatible because countability is about cardinality, not length.`
      }
    ],
    reference: {
      category: 'Quick Reference',
      title: 'Attractors and Strange Attractors',
      sections: [
        <>
          <div className="lrn-definition">
            <span className="lrn-definition-term">Attractor: four conditions (Lanford)</span>
            <div className="lrn-definition-desc">
              <p>An attractor is a subset of phase space satisfying all four conditions:</p>
              <ol className="lrn-list">
                <li>
                  <strong>Invariant.</strong> Trajectories starting on it stay on it forever.
                </li>
                <li>
                  <strong>Attracting.</strong> An open neighborhood exists whose trajectories all
                  converge to it.
                </li>
                <li>
                  <strong>Without transient parts.</strong> No subset is visited only temporarily;
                  the whole set is the permanent destination.
                </li>
                <li>
                  <strong>Indecomposable.</strong> It cannot be split into two separate invariant
                  pieces.
                </li>
              </ol>
            </div>
          </div>

          <h2>Attractor Types and Dimensions</h2>
          <div className="lrn-eq">
            <span>
              {`$$d_A = \\begin{cases} 0 & \\text{fixed point} \\\\ 1 & \\text{limit cycle} \\\\ 2 & \\text{torus} \\\\ N & \\text{N-torus} \\\\ \\text{non-integer} & \\text{strange attractor} \\end{cases}$$`}
            </span>
          </div>
          <p>
            <strong>When to use:</strong> classify any attractor by dimension before analyzing its
            structure. Regular attractors have integer {`$d_A$`}; strange attractors are
            non-integer.
          </p>

          <h2>Phase-Space Volume Contraction</h2>
          <div className="lrn-eq lrn-eq-hero">
            <span>{`$$\\Lambda = \\nabla \\cdot \\mathbf{V} = \\sum_i \\frac{\\partial V_i}{\\partial x_i}$$`}</span>
          </div>
          <p>
            <strong>When to use:</strong> determine whether a system is dissipative (
            {`$\\Lambda_0 < 0$`}), Hamiltonian ({`$\\Lambda_0 = 0$`}), or volume-expanding. For
            maps: {`$\\Lambda = \\ln|\\det M|$`}.
          </p>
          <ul className="lrn-list">
            <li>
              Dissipative: {`$\\Lambda_0 < 0$`}. Attractors possible. Damped oscillator:{' '}
              {`$\\Lambda = -\\gamma$`}.
            </li>
            <li>
              Hamiltonian: {`$\\Lambda_0 = 0$`}. No attractors. Chaos possible on energy surface.
            </li>
          </ul>

          <h2>Liapunov Exponents</h2>
          <div className="lrn-eq">
            <span>{`$$\\Lambda_0 = \\sum_{i=1}^{N} \\sigma_i$$`}</span>
          </div>
          <p>
            <strong>When to use:</strong> relate dynamics (exponents) to volume contraction.
          </p>
          <p>
            3D strange attractor signature: {`$\\sigma_1 > 0$`}, {`$\\sigma_2 = 0$`},{' '}
            {`$\\sigma_3 < 0$`}, {`$\\sigma_1 + \\sigma_3 < 0$`}. Minimum dimension for chaos in a
            flow: {`$N = 3$`}.
          </p>

          <h2>Van der Pol Limit Cycle</h2>
          <div className="lrn-eq">
            <span>{`$$m\\ddot{x} - \\varepsilon(1-x^2)\\dot{x} + m\\omega_0^2 x = 0$$`}</span>
          </div>
          <p>
            <strong>When to use:</strong> model a self-sustained oscillation driven by
            position-dependent damping. Limit cycle at {`$|x| = 1$`} for {`$F = 0$`}, {`$d_A = 1$`}.
          </p>

          <h2>Rössler Attractor</h2>
          <div className="lrn-eq">
            <span>{`$$\\dot{X} = -(Y+Z),\\quad \\dot{Y} = X + \\tfrac{1}{5}Y,\\quad \\dot{Z} = \\tfrac{1}{5} + Z(X-\\mu)$$`}</span>
          </div>
          <p>
            <strong>When to use:</strong> the simplest 3D strange attractor. Period doubling from{' '}
            {`$\\mu = 2.6$`} to strange attractor near {`$\\mu = 5.7$`}. Single folded sheet
            topology.
          </p>

          <h2>Hénon Map</h2>
          <div className="lrn-eq lrn-eq-hero">
            <span>{`$$x_{n+1} = y_n + 1 - a\\,x_n^2,\\qquad y_{n+1} = b\\,x_n,\\qquad \\det M = -b$$`}</span>
          </div>
          <p>
            <strong>When to use:</strong> canonical 2D invertible map with strange attractor.
            Standard parameters: {`$a = 1.4$`}, {`$b = 0.3$`}. Area contraction per iteration:
            {`$|b| = 0.3$`}. Fixed points exist for {`$a > -(1-b)^2/4$`}. Lower fixed point unstable
            for {`$a > 3(1-b)^2/4$`}.
          </p>

          <h2>Hénon-Heiles Hamiltonian</h2>
          <div className="lrn-eq lrn-eq-hero">
            <span>{`$$E = \\tfrac{1}{2}\\dot{x}^2 + \\tfrac{1}{2}\\dot{y}^2 + \\tfrac{1}{2}x^2 + \\tfrac{1}{2}y^2 + x^2 y - \\tfrac{1}{3}y^3$$`}</span>
          </div>
          <div className="lrn-eq">
            <span>{`$$\\ddot{x} = -x - 2xy,\\qquad \\ddot{y} = -y - x^2 + y^2$$`}</span>
          </div>
          <p>
            <strong>When to use:</strong> study Hamiltonian chaos (no attractor). Regimes:{' '}
            {`$E = 1/12$`} (regular), {`$E = 1/8$`} (mixed), {`$E = 1/6$`} (chaotic). Onset near{' '}
            {`$E \\approx 1/9$`}. Confinement boundary opens at {`$E = 1/6$`}.
          </p>

          <h2>Fractal Dimension: Capacity {`$D_0$`}</h2>
          <div className="lrn-eq lrn-eq-hero">
            <span>{`$$D_0 = \\lim_{\\varepsilon\\to 0}\\frac{\\ln M(\\varepsilon)}{\\ln(1/\\varepsilon)}$$`}</span>
          </div>
          <p>
            <strong>When to use:</strong> measure effective dimension of a fractal set by box
            counting.
          </p>
          <ul className="lrn-list">
            <li>Middle-thirds Cantor set: {`$D_0 = \\ln 2/\\ln 3 \\approx 0.630$`}.</li>
            <li>
              Hénon {`$(1.4, 0.3)$`}: {`$D_0 = 1.261 \\pm 0.003$`}.
            </li>
            <li>
              Kaplan-Yorke map {`$(\\alpha=0.2)$`}: {`$D_0 = 1.432 \\pm 0.002$`}.
            </li>
          </ul>

          <h2>Kaplan-Yorke Dimension {`$D_{\\mathrm{KY}}$`}</h2>
          <div className="lrn-eq lrn-eq-hero">
            <span>{`$$D_{\\mathrm{KY}} = j + \\frac{\\displaystyle\\sum_{i=1}^{j}\\sigma_i}{|\\sigma_{j+1}|}$$`}</span>
          </div>
          <div className="lrn-eq">
            <span>
              {`$$\\text{3D flow: } D_{\\mathrm{KY}} = 2 - \\frac{\\sigma_1}{\\sigma_3}\\qquad \\text{2D map: } D_{\\mathrm{KY}} = 1 - \\frac{\\sigma_1}{\\sigma_2}$$`}
            </span>
          </div>
          <p>
            Here {`$\\sigma_2 < 0$`} and {`$\\sigma_3 < 0$`}, so each ratio is positive and the
            dimension exceeds its integer floor.
          </p>
          <p>
            <strong>When to use:</strong> compute fractal dimension directly from Liapunov
            exponents. Empirically equal to {`$D_0$`} for all well-studied systems (Kaplan-Yorke
            conjecture).
          </p>
        </>
      ]
    },
    customCss: null
  }
  return <LearningTemplate config={config} />
}
