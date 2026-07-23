import { LearningTemplate } from '../../../../../components/learning/learning-template'
import { CausticFoldingManifold } from '../../../../../components/viz'

const config = {
  cssPrefix: 'ats',
  documentTitle:
    'Advanced Topics: Asymptotics, Singularities, and Integrable Systems - AETHER',
  learning: {
    groupTitle: 'Perturbation Theory and Advanced Topics',
    category: 'Classical Mechanics',
    title: 'Advanced Topics: Asymptotics, Singularities, and Integrable Systems',
    subtitle:
      'Short wave asymptotics, Maslov index, KdV equation, Poisson manifolds, elliptic coordinates, and lagrangian singularities',
    sections: [
      <>
        <h2>Short Wave Asymptotics</h2>
        <div className="lrn-predict">
          <span className="lrn-predict-label">PREDICT</span>
          <p>
            A wave travels through a room. The room has many objects much larger than the
            wavelength. What path do you think the wave will take?
          </p>
          <details className="lrn-predict-reveal">
            <summary>Check your thinking</summary>
            <p>
              The wave travels almost like a ray. Short wave asymptotics connects wave equations to
              classical mechanics: the wave follows straight-line paths between objects, bending
              only at boundaries.
            </p>
          </details>
        </div>

        <p>
          A wave is a disturbance that spreads through space. Its wavelength is the distance between
          two peaks. Short wave asymptotics applies when the wavelength is very small compared to
          the objects the wave encounters.
        </p>
        <p>
          In this regime, waves behave almost like rays. Rays are straight lines that show where
          energy travels. Wave fronts are surfaces where the wave has the same phase. Rays travel
          perpendicular to wave fronts.
        </p>
        <p>
          Short wave asymptotics is also called the WKB method or geometric optics approximation.
          You built this limit on the Hamilton-Jacobi page: as the wavelength shrinks to zero, the
          phase of the wave satisfies the Hamilton-Jacobi equation, wave fronts become surfaces of
          constant action, and rays become classical trajectories. That page forward-references this
          one for the singularities the limit produces. Here we classify those singularities.
        </p>
        <div className="lrn-callout">
          <span className="lrn-callout-label">When to use</span>
          <p>
            Use short wave asymptotics when the wavelength is much smaller than the scale of
            variation of the potential {`$U(q)$`}. It breaks down at caustics and turning points. A
            turning point is where the particle momentarily stops and its momentum is zero.
          </p>
        </div>
        <div className="lrn-elaborate">
          <span className="lrn-elaborate-label">CONCRETE EXAMPLE</span>
          <p>
            Sunlight enters a room with a wavelength of about 500 nanometers. The furniture is
            meters wide. The ratio is 10 million. So sunlight travels in straight rays and casts
            sharp shadows. Short wave asymptotics is exact here. Now consider a wave on a rope with
            wavelength 1 meter passing a 10 cm peg. The wavelength is bigger than the obstacle.
            Short wave asymptotics fails. The wave bends around the peg.
          </p>
        </div>
        <div className="lrn-self-explain">
          <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
          <p>Why does the WKB approximation break down at turning points?</p>
          <details className="lrn-self-explain-reveal">
            <summary>Expert explanation</summary>
            <p>
              At a turning point, the classical momentum {`$p(q)$`} reaches zero. The local
              wavelength {`$\\lambda = \\frac{h}{p}$`} grows without bound. The "short wavelength"
              assumption fails because the wavelength is no longer small compared to the variation
              scale of the potential. A separate matching procedure (Airy functions) connects the
              WKB regions on either side.
            </p>
          </details>
        </div>
      </>,

      <>
        <h2>Schrödinger's Equation</h2>
        <div className="lrn-predict">
          <span className="lrn-predict-label">PREDICT</span>
          <p>
            A particle has wave-like behavior. What single equation might govern how its wave shape
            changes over time? What pieces would such an equation need?
          </p>
          <details className="lrn-predict-reveal">
            <summary>Check your thinking</summary>
            <p>
              You need a time derivative for evolution, a spatial derivative for spreading, and a
              term for the potential. Schrödinger's equation combines exactly these three pieces.
            </p>
          </details>
        </div>
        <div className="lrn-callout">
          <span className="lrn-callout-label">When to use this</span>
          <p>
            Use Schrödinger's equation when you need the full quantum wave function. Use its short
            wave limit when the typical value of {`$s(q)$`} is much larger than {`$h$`}. In that
            limit, the phase oscillates rapidly, and the wave follows classical paths.
          </p>
        </div>
        <p>Schrödinger's equation governs how quantum wave functions evolve in time:</p>
        <div className="lrn-eq lrn-eq-display">
          <span>{`$$ih \\frac{\\partial \\psi}{\\partial t} = -\\frac{h^2}{2}\\Delta\\psi + U(q)\\psi, \\quad q \\in \\mathbb{R}^n, \\; t \\in \\mathbb{R}$$`}</span>
        </div>
        <p>
          Here {`$\\psi$`} is the wave function. The parameter {`$h$`} is Planck's constant, and it
          plays the role of the small parameter in this section. The term {`$\\Delta\\psi$`} is the
          Laplacian, which measures how {`$\\psi$`} curves in space. The term {`$U(q)$`} is the
          potential energy at position {`$q$`}.
        </p>
        <p>
          Short wave asymptotics applies when {`$h$`} is small. We look for solutions where the
          initial condition has the form:
        </p>
        <div className="lrn-eq">
          <span>{`$$\\psi|_{t=0} = \\varphi(q) e^{\\frac{i}{h}s(q)}$$`}</span>
        </div>
        <p>
          Here {`$\\varphi(q)$`} is a slowly varying amplitude. The function {`$s(q)$`} is the
          initial phase. The exponential oscillates very rapidly when {`$h$`} is small. At time zero
          the wave function concentrates near a classical trajectory.
        </p>
        <div className="lrn-self-explain">
          <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
          <p>
            Why is the phase factor {`$e^{\\frac{i}{h}s(q)}$`} divided by {`$h$`} in the exponent?
          </p>
          <details className="lrn-self-explain-reveal">
            <summary>Expert explanation</summary>
            <p>
              Action {`$s$`} has units of energy times time. Planck's constant {`$h$`} also has
              these units. So {`$\\frac{s}{h}$`} is dimensionless, as required for an exponent. When{' '}
              {`$h$`} is small, {`$\\frac{s}{h}$`} is large, making the exponential oscillate
              rapidly. This rapid oscillation is the hallmark of the short-wave regime.
            </p>
          </details>
        </div>
      </>,

      <>
        <h2>Momentum as Gradient of Phase</h2>
        <div className="lrn-predict">
          <span className="lrn-predict-label">PREDICT</span>
          <p>
            A wave has a phase {`$s(q)$`} that varies across space. If the wave travels like a ray,
            which way does the ray point at each location?
          </p>
          <details className="lrn-predict-reveal">
            <summary>Check your thinking</summary>
            <p>
              The ray points in the direction where the phase increases fastest. That direction is
              the gradient {`$\\frac{\\partial s}{\\partial q}$`}. This gradient is the momentum.
            </p>
          </details>
        </div>
        <div className="lrn-callout">
          <span className="lrn-callout-label">When to use this</span>
          <p>
            Use {`$p = \\frac{\\partial s}{\\partial q}$`} whenever you need to convert from a phase
            function to classical momenta, such as setting up the lagrangian manifold for WKB
            analysis.
          </p>
        </div>
        <p>The initial momentum at each point {`$q$`} is:</p>
        <div className="lrn-eq lrn-eq-display">
          <span>{`$$p(q) = \\frac{\\partial s}{\\partial q}$$`}</span>
        </div>
        <div className="lrn-elaborate">
          <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
          <p>
            In classical mechanics, the action {`$s(q)$`} satisfies the Hamilton-Jacobi equation.
            Its gradient gives the momentum. This is not a definition but a consequence of how waves
            carry momentum. The phase advances fastest in the direction of travel, and that
            direction is exactly the momentum direction.
          </p>
        </div>
        <p>
          The graph of this map (the set of all pairs {`$(p(q), q)$`} in phase space) forms a
          special surface called a lagrangian manifold.
        </p>

        <h3>Lagrangian Manifolds</h3>
        <p>
          Recall the lagrangian manifold from Part III: it is an {`$n$`}-dimensional surface in the{' '}
          {`$2n$`}-dimensional phase space on which the symplectic 2-form {`$dp \\wedge dq$`}{' '}
          vanishes. That vanishing is exactly what lets the surface encode consistent momenta. No
          point on it carries two conflicting momenta at the same position. The new fact here is how
          a WKB phase produces one.
        </p>
        <div className="lrn-callout">
          <span className="lrn-callout-label">Lemma</span>
          <p>
            The graph of {`$p(q) = \\frac{\\partial s}{\\partial q}$`} is always a lagrangian
            manifold. Conversely, any lagrangian manifold that projects diffeomorphically onto
            position space {`$q$`} comes from some generating function {`$s$`}.
          </p>
        </div>
        <p>
          A diffeomorphism is a smooth map with a smooth inverse. "Projects diffeomorphically"
          means: looking down onto position space gives a one-to-one correspondence.
        </p>
        <div className="lrn-self-explain">
          <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
          <p>
            Why must the symplectic form {`$dp \\wedge dq$`} vanish on the graph of{' '}
            {`$p = \\frac{\\partial s}{\\partial q}$`}?
          </p>
          <details className="lrn-self-explain-reveal">
            <summary>Expert explanation</summary>
            <p>
              On the graph, {`$p_i = \\frac{\\partial s}{\\partial q_i}$`}. So{' '}
              {`$dp_i = \\sum_j \\frac{\\partial^2 s}{\\partial q_i \\partial q_j} dq_j$`}. The
              mixed partials are symmetric in {`$i, j$`}. So{' '}
              {`$dp \\wedge dq = \\sum_{i,j} \\frac{\\partial^2 s}{\\partial q_i \\partial q_j} dq_j \\wedge dq_i$`}{' '}
              vanishes by symmetry.
            </p>
          </details>
        </div>
      </>,

      <>
        <h2>Phase Flow and Evolution</h2>
        <div className="lrn-predict">
          <span className="lrn-predict-label">PREDICT</span>
          <p>
            A lagrangian manifold floats in phase space. You let it evolve under a hamiltonian flow.
            Will the evolved set still be a lagrangian manifold, or does the flow distort it?
          </p>
          <details className="lrn-predict-reveal">
            <summary>Check your thinking</summary>
            <p>
              It stays lagrangian. The phase flow is symplectic, so it preserves the symplectic
              form. Any lagrangian manifold remains lagrangian under any hamiltonian evolution.
            </p>
          </details>
        </div>
        <div className="lrn-callout">
          <span className="lrn-callout-label">When to use this</span>
          <p>
            Use phase flow analysis when tracking how an initial wave packet evolves. The evolved
            lagrangian manifold tells you where rays go and where caustics form.
          </p>
        </div>
        <p>Hamilton's equations describe how a point in phase space moves through time:</p>
        <div className="lrn-eq">
          <span>{`$$\\dot{q} = \\frac{\\partial H}{\\partial p}, \\quad \\dot{p} = -\\frac{\\partial H}{\\partial q}, \\quad H = \\frac{1}{2}p^2 + U(q)$$`}</span>
        </div>
        <p>
          The hamiltonian {`$H$`} is the total energy: kinetic energy {`$\\frac{1}{2}p^2$`} plus
          potential energy {`$U(q)$`}. The phase flow {`$g^t$`} maps each initial point {`$(p, q)$`}{' '}
          to its position after time {`$t$`}.
        </p>
        <p>
          Symplectic transformations preserve the symplectic form. The phase flow {`$g^t$`} is
          always symplectic. So if {`$M$`} is a lagrangian manifold at {`$t=0$`}, then {`$g^t M$`}{' '}
          is a lagrangian manifold at every time {`$t$`}.
        </p>
        <p>
          For small {`$t$`}, the evolved manifold {`$g^t M$`} still maps one-to-one onto position
          space. For large {`$t$`}, it can fold over itself. Where it folds, multiple sheets in
          phase space project to the same position. These overlapping points form the caustic.
        </p>

        <h3>Caustics</h3>
        <p>
          A caustic is where many rays come together. Formally, it is the set of positions where the
          folded manifold covers position space more than once: multiple points in phase space
          project to the same position. At a caustic, the wave amplitude would naively go to
          infinity. The WKB approximation breaks down there.
        </p>
        <CausticFoldingManifold />
        <div className="lrn-elaborate">
          <span className="lrn-elaborate-label">CONCRETE EXAMPLE</span>
          <p>
            Sunlight passing through a curved glass bottom of a swimming pool forms bright lines on
            the pool floor. Those bright lines are caustics. Many rays come together at each bright
            line.
          </p>
        </div>
        <p>
          Light from a point source on a smooth curved wall forms a caustic. For a generic smooth
          wall (one with no special symmetries), that caustic has only semi-cubical cusps. A
          semi-cubical cusp looks like the curve {`$27x^2 = 4y^3$`}.
        </p>
        <div className="lrn-elaborate">
          <span className="lrn-elaborate-label">WHY ONLY SEMI-CUBICAL CUSPS?</span>
          <p>
            Because generic smooth surfaces only produce folds and tucks (Whitney's theorem). Each
            type of singular point of the lagrangian projection gives a different caustic shape. The
            semi-cubical cusp is the simplest caustic that can appear stably.
          </p>
        </div>
        <div className="lrn-self-explain">
          <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
          <p>
            Why does the symplectic property of {`$g^t$`} guarantee that lagrangian manifolds remain
            lagrangian under flow?
          </p>
          <details className="lrn-self-explain-reveal">
            <summary>Expert explanation</summary>
            <p>
              A lagrangian manifold is defined by the symplectic form {`$\\omega = dp \\wedge dq$`}{' '}
              vanishing on it. A symplectic transformation {`$g^t$`} pulls back {`$\\omega$`} to
              itself: {`$(g^t)^* \\omega = \\omega$`}. So if {`$\\omega$`} vanished on {`$M$`}, it
              still vanishes on {`$g^t M$`}. The defining property is preserved.
            </p>
          </details>
        </div>
      </>,

      <>
        <h2>The Asymptotic Solution</h2>
        <div className="lrn-predict">
          <span className="lrn-predict-label">PREDICT</span>
          <p>
            Multiple rays come together at the same point {`$Q$`} after time {`$t$`}. How do you
            think their wave contributions combine into a single value?
          </p>
          <details className="lrn-predict-reveal">
            <summary>Check your thinking</summary>
            <p>
              You add them as complex numbers. Each ray brings an amplitude and a phase. The sum
              gives interference: rays with similar phase add up, rays with opposite phase cancel.
            </p>
          </details>
        </div>
        <div className="lrn-callout">
          <span className="lrn-callout-label">When to use this</span>
          <p>
            Use this asymptotic formula when {`$h$`} is small and you need the wave function after
            caustics have formed. It is the leading order of the full quantum solution.
          </p>
        </div>
        <p>
          When the lagrangian manifold develops caustics, multiple rays can reach the same point{' '}
          {`$Q$`} from different initial points {`$q_j$`}. Label each such ray by {`$j$`}. The
          action along ray {`$j$`} is:
        </p>
        <div className="lrn-eq">
          <span>{`$$S_j(Q,t) = s(q_j) + \\int_0^t L \\, d\\theta, \\quad L = \\frac{\\dot{q}^2}{2} - U(q)$$`}</span>
        </div>
        <p>
          Here {`$L$`} is the Lagrangian. The integral of {`$L$`} along the trajectory accumulates
          the action.
        </p>
        <p>The asymptotic solution of Schrödinger's equation is:</p>
        <div className="lrn-eq lrn-eq-display">
          <span>{`$$\\psi(Q,t) = \\sum_j \\varphi(q_j) \\left|\\frac{DQ}{Dq_j}\\right|^{-\\tfrac{1}{2}} e^{\\frac{i}{h}S_j(Q,t) - \\frac{i\\pi}{2}\\mu_j} + O(h)$$`}</span>
        </div>
        <p>
          Each term in the sum corresponds to one ray arriving at {`$Q$`}. The factor{' '}
          {`$|\\frac{DQ}{Dq_j}|^{-\\tfrac{1}{2}}$`} is the amplitude. Here {`$\\frac{DQ}{Dq_j}$`} is
          the Jacobian determinant of the map {`$q_j \\mapsto Q$`}, which tells how the ray bundle
          expands or contracts. The integer {`$\\mu_j$`} is the Morse index (defined in the next
          section): it counts how many focal points the ray has crossed. The term {`$O(h)$`} means
          the error is proportional to {`$h$`}, which is small.
        </p>
        <div className="lrn-self-explain">
          <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
          <p>Why does the amplitude factor need the {`$-\\frac{1}{2}$`} power of the Jacobian?</p>
          <details className="lrn-self-explain-reveal">
            <summary>Expert explanation</summary>
            <p>
              The amplitude squared gives probability density. The probability in a volume element
              must be conserved. So if the Jacobian says volume expanded by factor {`$J$`},
              amplitude shrinks by {`$J^{\\tfrac{1}{2}}$`}.
            </p>
          </details>
        </div>
      </>,

      <>
        <h2>Morse Index and Maslov Index</h2>
        <div className="lrn-predict">
          <span className="lrn-predict-label">PREDICT</span>
          <p>
            A particle travels along a classical path. Along the way, many nearby trajectories focus
            at two points. What integer do you expect to appear in the wave function formula at
            those points?
          </p>
          <details className="lrn-predict-reveal">
            <summary>Check your thinking</summary>
            <p>
              The Morse index {`$\\mu_j$`} counts focal points. After two focal points,{' '}
              {`$\\mu_j = 2$`}, giving a phase factor {`$e^{-i\\pi} = -1$`}.
            </p>
          </details>
        </div>

        <h3>Morse Index</h3>
        <p>
          The Morse index {`$\\mu_j$`} counts focal points along the phase curve from initial point{' '}
          {`$(p_j, q_j)$`} to time {`$t$`}. Each focal point is counted with its multiplicity. The
          multiplicity is how many independent directions get squashed there, that is the dimension
          of the kernel of the projection's derivative.
        </p>
        <p>
          A focal point is where nearby trajectories focus together. In precise terms: it is where
          the derivative of the projection from the lagrangian manifold to position space fails to
          be injective (the projection loses rank: it squashes distinct directions onto the same
          direction).
        </p>
        <ul className="lrn-list">
          <li>
            For small {`$t$`}: {`$\\mu_j = 0$`} because no focusing has happened yet.
          </li>
          <li>
            Each time the trajectory passes through a focal point, {`$\\mu_j$`} increases by the
            multiplicity of that focal point.
          </li>
          <li>
            The phase factor {`$e^{-\\frac{i\\pi}{2}\\mu_j}$`} shifts the phase by{' '}
            {`$\\frac{\\pi}{2}$`} at each focal point.
          </li>
        </ul>
        <div className="lrn-elaborate">
          <span className="lrn-elaborate-label">CONCRETE EXAMPLE</span>
          <p>
            Imagine a beam of parallel rays entering a lens. All rays focus at the focal point. At
            that point, the Morse index increases by 1. The wave function picks up a phase factor of{' '}
            {`$e^{-\\frac{i\\pi}{2}} = -i$`}.
          </p>
        </div>
        <div className="lrn-callout">
          <span className="lrn-callout-label">Remark: Focal points and Morse theory</span>
          <p>
            The Morse index of a geodesic equals the number of conjugate points along it. Conjugate
            points are where neighboring geodesics from the same start meet again. The index also
            equals the index of inertia of the second variation of the action, which simply counts
            its negative eigenvalues.
          </p>
        </div>

        <h3>Maslov Index</h3>
        <p>
          The Maslov index generalizes the Morse index. It applies to any oriented curve on a
          lagrangian manifold, not just curves generated by a phase flow.
        </p>
        <div className="lrn-definition">
          <span className="lrn-definition-term">Maslov Index</span>
          <div className="lrn-definition-desc">
            <p>
              The Maslov index of an oriented curve on a lagrangian manifold counts how many times
              the curve crosses the singular set (the subset where the projection to position space
              fails to be one-to-one). Each crossing from below adds {`$+1$`}; each crossing in
              reverse adds {`$-1$`}. The total is the Maslov index.
            </p>
          </div>
        </div>
        <p>
          The positive side is where {`$\\frac{\\partial q_1}{\\partial p_1} > 0$`}. We define this
          sign consistently across different singular points.
        </p>
        <div className="lrn-elaborate">
          <span className="lrn-elaborate-label">CONCRETE EXAMPLE</span>
          <p>
            Consider the circle {`$p = \\cos t$`}, {`$q = \\sin t$`} on the lagrangian manifold{' '}
            {`$p^2 + q^2 = 1$`}. As you go around the circle once, you cross the singular set twice
            in the positive direction and zero times in the negative direction. The Maslov index of
            this closed curve is {`$+2$`}.
          </p>
        </div>
        <div className="lrn-elaborate">
          <span className="lrn-elaborate-label">
            WHY IS THE MASLOV INDEX INDEPENDENT OF THE PHASE FLOW?
          </span>
          <p>
            The definition uses only the geometry of the curve on the lagrangian manifold. No choice
            of hamiltonian or time parametrization enters. This makes it a topological invariant of
            the curve itself.
          </p>
        </div>
        <div className="lrn-compare">
          <div className="lrn-compare-col">
            <span className="lrn-compare-title">Morse Index</span>
            <p>
              Counts focal points along a phase curve. Depends on the hamiltonian and starting
              point. A special case of the Maslov index.
            </p>
          </div>
          <div className="lrn-compare-col">
            <span className="lrn-compare-title">Maslov Index</span>
            <p>
              Counts signed crossings of any oriented curve through the singular set. Topological
              invariant of the curve. No phase flow needed.
            </p>
          </div>
        </div>
      </>,

      <>
        <h2>Bohr-Sommerfeld Quantization</h2>
        <div className="lrn-predict">
          <span className="lrn-predict-label">PREDICT</span>
          <p>
            You want to find which energy levels are allowed in a quantum system. You know the shape
            of the classical orbits. Can you find the energy levels without solving Schrödinger's
            equation exactly?
          </p>
          <details className="lrn-predict-reveal">
            <summary>Check your thinking</summary>
            <p>
              Yes. The Bohr-Sommerfeld condition uses the Maslov index and the classical orbit to
              find large eigenvalues without solving the full equation.
            </p>
          </details>
        </div>
        <p>
          The general quantization condition uses the Maslov index. For a closed curve {`$\\gamma$`}{' '}
          on a lagrangian manifold, label the allowed levels by the integer{' '}
          {`$N = 0, 1, 2, \\ldots$`}:
        </p>
        <div className="lrn-eq lrn-eq-display">
          <span>{`$$\\oint_\\gamma p \\, dq = 2\\pi\\left(N + \\frac{\\mu(\\gamma)}{4}\\right)$$`}</span>
        </div>
        <p>
          Here {`$\\mu(\\gamma)$`} is the Maslov index of the orbit from the last section. The
          integer {`$N$`} simply numbers the energy levels. It is not an index of any curve.
        </p>
        <p>
          In the 1-dimensional case, a closed orbit has two turning points, so{' '}
          {`$\\mu(\\gamma) = 2$`}. This reduces to the classical Bohr-Sommerfeld condition:
        </p>
        <div className="lrn-eq lrn-eq-display">
          <span>{`$$\\oint_\\gamma p \\, dq = 2\\pi\\left(N + \\frac{1}{2}\\right)$$`}</span>
        </div>
        <div className="lrn-callout">
          <span className="lrn-callout-label">When to use</span>
          <p>
            Use when you want the large-{`$N$`} eigenvalues of a quantum system without solving the
            full Schrödinger equation. Reading off the {`$N$`}-th action gives the {`$N$`}-th energy
            level.
          </p>
        </div>
        <div className="lrn-elaborate">
          <span className="lrn-elaborate-label">CONCRETE EXAMPLE</span>
          <p>
            Take the 1D harmonic oscillator with hamiltonian {`$H = \\frac{1}{2}(p^2 + q^2)$`}. The
            classical orbits are circles of radius {`$\\sqrt{2E}$`} in phase space. The action
            integral around one orbit is {`$\\oint p \\, dq = 2\\pi E$`}. The orbit has two turning
            points, so the Maslov index is {`$2$`}. The Bohr-Sommerfeld condition gives{' '}
            {`$2\\pi E_N = 2\\pi(N + \\tfrac{1}{2})$`}, so {`$E_N = N + \\tfrac{1}{2}$`}. This
            matches the exact quantum result. The {`$\\tfrac{1}{2}$`} ground state energy comes
            entirely from the Maslov phase. Each of the two turning points shifts the phase by{' '}
            {`$\\frac{\\pi}{2}$`}, and the two together give the {`$+\\frac{1}{2}$`} in the formula.
          </p>
        </div>
      </>,

      <>
        <h2>Lagrangian Singularities</h2>
        <div className="lrn-predict">
          <span className="lrn-predict-label">PREDICT</span>
          <p>
            A lagrangian manifold folds in phase space. You project it down to position space. What
            kinds of shapes can the fold create? Are all fold shapes possible, or only certain ones?
          </p>
          <details className="lrn-predict-reveal">
            <summary>Check your thinking</summary>
            <p>
              Only certain shapes appear in the typical case. The ADE classification lists all
              stable singularity types. For small dimensions, only folds and cusps survive
              perturbations.
            </p>
          </details>
        </div>
        <p>
          Lagrangian singularities are the singular points of the projection from a lagrangian
          manifold to configuration space. They appear in caustics, shock waves, short wave
          asymptotics, and the Hamilton-Jacobi equation. Recall from Part III that generic
          projections produce only folds and cusps, and that the stable types carry ADE labels. This
          section extends that list up to dimension {`$n \\le 5$`} and exposes the Lie-algebra
          coincidence behind it.
        </p>

        <h3>Singularities of Smooth Mappings (Whitney's Theorem)</h3>
        <p>
          Consider a smooth surface and a smooth map from it to the plane. H. Whitney proved that
          only three types appear in the typical case:
        </p>
        <ol className="lrn-list">
          <li>
            <strong>Nonsingular points:</strong> The map is locally a diffeomorphism. No special
            structure.
          </li>
          <li>
            <strong>Fold points:</strong> Like the equator of a sphere projected onto a plane.
            Locally, the map folds the surface.
          </li>
          <li>
            <strong>Tuck (cusp) points:</strong> A more complicated singularity. The image has a
            semi-cubical cusp. The model is {`$x = yz - z^3$`}, derived just below.
          </li>
        </ol>
        <div className="lrn-elaborate">
          <span className="lrn-elaborate-label">WHY CAN ALL OTHER SINGULARITIES BE REMOVED?</span>
          <p>
            In the typical case, mappings avoid higher-order tangencies. A perturbation of the
            surface or the projection breaks any coincidence. Only the fold and tuck are robust.
            They survive perturbations.
          </p>
        </div>
        <div className="lrn-self-explain">
          <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
          <p>Why does the Whitney tuck produce a semi-cubical parabola {`$27x^2 = 4y^3$`}?</p>
          <details className="lrn-self-explain-reveal">
            <summary>Expert explanation</summary>
            <p>
              The surface is {`$x = yz - z^3$`}. The singular set occurs where{' '}
              {`$\\frac{\\partial x}{\\partial z} = 0$`}, giving {`$y = 3z^2$`}. Substituting back:{' '}
              {`$x = 3z^3 - z^3 = 2z^3$`}. Eliminating {`$z$`}:{' '}
              {`$z = (\\frac{y}{3})^{\\tfrac{1}{2}}$`}, so {`$x = 2(\\frac{y}{3})^{\\tfrac{3}{2}}$`}
              , which gives {`$27x^2 = 4y^3$`}.
            </p>
          </details>
        </div>

        <h3>Singularities of Lagrangian Projections</h3>
        <p>
          A lagrangian manifold in {`$2n$`}-dimensional phase space projects to {`$n$`}-dimensional
          configuration space. Each singularity type gets a normal form for its generating function{' '}
          {`$F$`}.
        </p>
        <p>Generating functions describe lagrangian manifolds locally:</p>
        <div className="lrn-eq">
          <span>{`$$q_i = \\frac{\\partial F}{\\partial p_i}, \\quad p_j = -\\frac{\\partial F}{\\partial q_j}$$`}</span>
        </div>
        <p>
          Note the change of convention. Earlier the generating function {`$s(q)$`} depended on
          position alone. Here {`$F$`} depends on a mix of momenta and positions. The two
          conventions describe the same lagrangian manifolds in different coordinate patches.
        </p>
        <div className="lrn-compare">
          <div className="lrn-compare-col">
            <span className="lrn-compare-title">Fold: {`$A_2$`}</span>
            <p>
              Generating function: {`$F = \\pm p_1^3$`}. Projection:{' '}
              {`$(p_1, q_2, \\ldots) \\to (\\pm 3p_1^2, q_2, \\ldots)$`}. Stable under all smooth
              perturbations.
            </p>
          </div>
          <div className="lrn-compare-col">
            <span className="lrn-compare-title">Tuck: {`$A_3$`}</span>
            <p>
              Generating function: {`$F = \\pm p_1^4 + q_2 p_1^2$`}. Image has a semi-cubical cusp.
              Stable only under lagrangian perturbations.
            </p>
          </div>
        </div>

        <p>
          The full classification for {`$n \\le 5$`} appears below. The {`$A$`} rows are the folds
          and cusps explained above. The {`$D$`} and {`$E$`} rows are deeper singularities that need
          more position directions to appear. Read them as lookup entries, not as new derivations.
        </p>
        <table className="lrn-table">
          <thead>
            <tr>
              <th>Type</th>
              <th>Generating Function {`$F$`}</th>
              <th>First appears at {`$n$`}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{`$A_1$`}</td>
              <td>{`$p_1^2$`}</td>
              <td>1</td>
            </tr>
            <tr>
              <td>{`$A_2$`}</td>
              <td>{`$\\pm p_1^3$`}</td>
              <td>1</td>
            </tr>
            <tr>
              <td>{`$A_3$`}</td>
              <td>{`$\\pm p_1^4 + q_2 p_1^2$`}</td>
              <td>2</td>
            </tr>
            <tr>
              <td>{`$A_4$`}</td>
              <td>{`$\\pm p_1^5 + q_3 p_1^3 + q_2 p_1^2$`}</td>
              <td>3</td>
            </tr>
            <tr>
              <td>{`$D_4$`}</td>
              <td>{`$\\pm p_1^2 p_2 \\pm p_2^3 + q_3 p_2^2$`}</td>
              <td>3</td>
            </tr>
            <tr>
              <td>{`$A_5$`}</td>
              <td>{`$\\pm p_1^6 + q_4 p_1^4 + q_3 p_1^3 + q_2 p_1^2$`}</td>
              <td>4</td>
            </tr>
            <tr>
              <td>{`$D_5$`}</td>
              <td>{`$\\pm p_1^2 p_2 + p_2^4 + q_4 p_2^2 + q_3 p_1 p_2$`}</td>
              <td>4</td>
            </tr>
            <tr>
              <td>{`$E_6$`}</td>
              <td>{`$\\pm p_1^3 \\pm p_2^4 + q_5 p_1 p_2^2 + q_4 p_1 p_2 + q_3 p_2^2$`}</td>
              <td>5</td>
            </tr>
          </tbody>
        </table>
        <div className="lrn-callout lrn-warning">
          <span className="lrn-callout-label">Mysterious connection</span>
          <p>
            The labels {`$A_k$`}, {`$D_k$`}, {`$E_k$`} are the ADE classification: a fixed list of
            shapes labeled A, D, and E. They are the same labels that name the simple Lie algebras,
            the basic building blocks of continuous symmetry groups. There is no fully explained
            reason why the same list appears in both contexts. The connection was found in the
            1970s.
          </p>
        </div>

        <h3>Lagrangian Equivalence</h3>
        <p>
          Two lagrangian manifolds are lagrangian equivalent if a symplectic diffeomorphism of phase
          spaces (taking fibers to fibers) maps one to the other.
        </p>
        <div className="lrn-compare">
          <div className="lrn-compare-col">
            <span className="lrn-compare-title">Lagrangian Equivalence</span>
            <p>
              Requires a symplectic diffeomorphism. Stricter condition. Implies diffeomorphic
              caustics, but not conversely.
            </p>
          </div>
          <div className="lrn-compare-col">
            <span className="lrn-compare-title">Diffeomorphism Equivalence</span>
            <p>
              Only the shape of the caustic matches. Weaker condition. Two manifolds can have the
              same caustic shape but differ in their symplectic geometry.
            </p>
          </div>
        </div>
        <p>
          So the two notions split. Two lagrangian manifolds can have caustics of the same shape,
          yet no symplectic diffeomorphism carries one onto the other. The caustic shape is a
          picture in position space. Lagrangian equivalence demands a match of the full phase-space
          structure, which is strictly more information.
        </p>
      </>,

      <>
        <h2>The Korteweg-de Vries Equation</h2>
        <div className="lrn-predict">
          <span className="lrn-predict-label">PREDICT</span>
          <p>
            A wave pulse travels along a canal. Nonlinear effects try to steepen the wave, while
            dispersion tries to spread it out. What shape do you think the wave might maintain as a
            balance between these two effects?
          </p>
          <details className="lrn-predict-reveal">
            <summary>Check your thinking</summary>
            <p>
              A stable, localized hump called a soliton. It travels at constant velocity without
              changing shape, because nonlinearity and dispersion exactly cancel.
            </p>
          </details>
        </div>
        <p>The Korteweg-de Vries (KdV) equation is:</p>
        <div className="lrn-eq lrn-eq-display">
          <span>{`$$u_t = 6uu_x - u_{xxx}$$`}</span>
        </div>
        <p>
          The dedicated KdV page builds this equation in full: its soliton solutions, its infinite
          tower of first integrals in involution, its Lax pair, and the way the spectrum of an
          associated operator stays fixed as the wave evolves. KdV is the canonical example of a
          completely integrable infinite-dimensional hamiltonian system. We bring it in here for one
          reason: its hamiltonian structure is a Poisson structure on a space of functions, which is
          the bridge to the next section.
        </p>
        <div className="lrn-callout">
          <span className="lrn-callout-label">Symplectic structure on KdV</span>
          <p>
            The KdV flow becomes a hamiltonian flow once you put the Gardner-Zakharov-Faddeev
            symplectic structure on the space of functions:
          </p>
          <p>{`$$\\omega^2(\\partial w, \\partial v) = \\frac{1}{2}\\int (w \\partial v - v \\partial w) \\, dx$$`}</p>
          <p>
            This pairing is the infinite-dimensional analogue of the {`$dp \\wedge dq$`} you have
            used all along. The next section generalizes it to Poisson structures, where the bracket
            is allowed to be degenerate.
          </p>
        </div>
      </>,

      <>
        <h2>Poisson Structures</h2>
        <div className="lrn-predict">
          <span className="lrn-predict-label">PREDICT</span>
          <p>
            You know that symplectic manifolds carry a natural bracket on functions. What happens if
            you allow that bracket to be degenerate, so that some functions have zero bracket with
            everything?
          </p>
          <details className="lrn-predict-reveal">
            <summary>Check your thinking</summary>
            <p>
              You get a Poisson manifold. It is more general than a symplectic manifold. Functions
              with zero bracket with everything are called Casimir functions.
            </p>
          </details>
        </div>
        <div className="lrn-definition">
          <span className="lrn-definition-term">Poisson Manifold</span>
          <div className="lrn-definition-desc">
            <p>
              A manifold with a bilinear operation {`$\\{a, b\\}$`} on smooth functions satisfying:
            </p>
            <ol className="lrn-list">
              <li>Skew-symmetry: {`$\\{a, b\\} = -\\{b, a\\}$`}</li>
              <li>
                Jacobi identity:{' '}
                {`$\\{a, \\{b, c\\}\\} + \\{b, \\{c, a\\}\\} + \\{c, \\{a, b\\}\\} = 0$`}
              </li>
              <li>Leibniz rule: {`$\\{a, bc\\} = \\{a, b\\}c + b\\{a, c\\}$`}</li>
            </ol>
          </div>
        </div>
        <div className="lrn-compare">
          <div className="lrn-compare-col">
            <span className="lrn-compare-title">Symplectic Manifold</span>
            <p>
              Even-dimensional. The symplectic form is nondegenerate. Every function generates a
              hamiltonian vector field. A special case of a Poisson manifold.
            </p>
          </div>
          <div className="lrn-compare-col">
            <span className="lrn-compare-title">Poisson Manifold</span>
            <p>
              Can be odd-dimensional. The Poisson bracket can be degenerate. Casimir functions
              exist. The symplectic leaves partition the manifold.
            </p>
          </div>
        </div>

        <h3>Poisson Bracket on the Dual of a Lie Algebra</h3>
        <p>
          You built the canonical Poisson bracket on the dual of a Lie algebra on the momentum-maps
          page, where you also saw that the {`$SO(3)$`} co-adjoint orbits are spheres in angular
          momentum space. Recall its form, using coordinates {`$\\omega_i$`} on the Lie algebra:
        </p>
        <div className="lrn-eq">
          <span>{`$$\\{a, b\\}_{\\text{Poisson}} = \\sum \\frac{\\partial a}{\\partial \\omega_i} \\frac{\\partial b}{\\partial \\omega_j} [\\omega_i, \\omega_j]_{\\text{Lie}}$$`}</span>
        </div>
        <p>
          The point here is that this bracket is degenerate. That is what makes the dual of a Lie
          algebra the standard example of a Poisson manifold that is not symplectic.
        </p>

        <h3>Symplectic Leaves and Casimir Functions</h3>
        <p>
          The definition of a Casimir function and the rigid-body example are in the Poisson
          Brackets page (earlier in Part III). Here we apply that result to the dual of a Lie
          algebra. The symplectic leaves are the equivalence classes of points joinable by integral
          curves of hamiltonian vector fields. For the dual of a Lie algebra, the leaves are exactly
          the co-adjoint orbits: the sets of points the group sweeps out as it acts on the dual
          space. Casimir functions are constant on each leaf and label the leaves, while Hamiltonian
          functions generate motion that stays within a single leaf.
        </p>

        <h3>Poisson Structures in the Plane</h3>
        <p>In the plane, any smooth function {`$f(x,y)$`} defines a Poisson structure:</p>
        <div className="lrn-eq">
          <span>{`$$\\{x, y\\} = f(x, y)$$`}</span>
        </div>
        <p>
          This automatically satisfies the Jacobi identity because in two dimensions, the identity
          is trivially satisfied. Any generic structure reduces to one of two normal forms:
        </p>
        <ul className="lrn-list">
          <li>{`$\\{x, y\\} = 1$`} (nonsingular, Darboux form)</li>
          <li>
            {`$\\{x, y\\} = y$`} (type {`$A_0$`}, singular)
          </li>
        </ul>
        <p>
          That {`$A_0$`} label is the start of the same ADE family that organizes the next section.
          The singular line {`$y = 0$`} is its simplest member.
        </p>
      </>,

      <>
        <h2>Powers of Volume Forms</h2>
        <div className="lrn-predict">
          <span className="lrn-predict-label">PREDICT</span>
          <p>
            A volume form transforms by the Jacobian determinant when you change coordinates. What
            if you built an object that transforms by the Jacobian raised to some power{' '}
            {`$\\alpha$`}, rather than the first power? What new geometric structure would that
            define?
          </p>
          <details className="lrn-predict-reveal">
            <summary>Check your thinking</summary>
            <p>
              Different powers correspond to different geometric structures. Power {`$\\alpha = 1$`}{' '}
              gives ordinary volume forms tied to vector field singularities. Power{' '}
              {`$\\alpha = -1$`} gives Poisson structures in the plane. The exponent encodes how the
              object scales under coordinate changes.
            </p>
          </details>
        </div>
        <div className="lrn-callout">
          <span className="lrn-callout-label">When to use</span>
          <p>
            Use powers of volume forms when you need to classify singularities of Poisson structures
            or vector fields. The framework unifies many singularity problems through one formula
            and exposes the ADE classification.
          </p>
        </div>
        <p>A power of a volume form is:</p>
        <div className="lrn-eq">
          <span>{`$$f(dx)^\\alpha = f(x_1, \\ldots, x_n)(dx_1 \\wedge \\cdots \\wedge dx_n)^\\alpha$$`}</span>
        </div>
        <p>
          The matching differential form is {`$f^\\beta \\, dx$`} with{' '}
          {`$\\beta = \\frac{1}{\\alpha}$`}. The exponent {`$\\alpha$`} controls how this object
          transforms under coordinate changes: if the Jacobian of the change is {`$J$`}, the object
          picks up a factor of {`$J^\\alpha$`}. An ordinary volume form has {`$\\alpha = 1$`};
          Poisson structures in the plane correspond to {`$\\alpha = -1$`}. Key cases:
        </p>
        <div className="lrn-elaborate">
          <span className="lrn-elaborate-label">CONCRETE EXAMPLE</span>
          <p>
            Take {`$f(x, y) = xy$`} in the plane with {`$\\beta = -1$`}. The corresponding object is
            the Poisson structure {`$\\{x, y\\} = \\frac{1}{xy}$`}. The zero set {`$xy = 0$`} is two
            lines crossing at the origin: this is the {`$A_1$`} singularity. Now take{' '}
            {`$f(x, y) = x^2 - y^3$`}: the zero set is a semi-cubical cusp, giving the {`$A_2$`}{' '}
            singularity. Each ADE normal form for {`$f$`} produces a Poisson structure with that
            singularity type.
          </p>
        </div>
        <ul className="lrn-list">
          <li>
            {`$\\alpha = 1$`} ({`$\\beta = 1$`}): ordinary volume form, related to vector field
            singularities
          </li>
          <li>
            {`$\\alpha = -1$`} ({`$\\beta = -1$`}): corresponds to Poisson structures in the plane
          </li>
        </ul>

        <h3>ADE Hypersurface Normal Forms</h3>
        <p>
          Near an isolated singularity, the ADE types are listed below. The integer {`$k$`} labels
          how deep the singularity is. It is not the Maslov index from the earlier sections.
        </p>
        <ul className="lrn-list">
          <li>
            {`$A_k$`}: {`$\\pm x_1^{k+1} \\pm x_2^2 \\pm \\cdots \\pm x_n^2 = 0$`}
          </li>
          <li>
            {`$D_k$`}: {`$x_1^2 x_2 \\pm x_2^{k-1} \\pm x_3^2 \\pm \\cdots = 0$`}
          </li>
          <li>
            {`$E_6$`}: {`$x_1^3 + x_2^4 \\pm \\cdots = 0$`}
          </li>
          <li>
            {`$E_7$`}: {`$x_1^3 + x_1 x_2^3 \\pm \\cdots = 0$`}
          </li>
          <li>
            {`$E_8$`}: {`$x_1^3 + x_2^5 \\pm \\cdots = 0$`}
          </li>
        </ul>

        <p>
          A finer classification adds a list of correction terms to each normal form. The number of
          free coefficients in that list is the number of moduli of the singularity. For the ADE
          types this number is zero. The normal forms above are already complete.
        </p>
      </>,

      <>
        <h2>Elliptic Coordinates</h2>
        <div className="lrn-predict">
          <span className="lrn-predict-label">PREDICT</span>
          <p>
            You have a family of ellipses and hyperbolas that all share the same two foci. How many
            of these curves pass through any single point in the plane?
          </p>
          <details className="lrn-predict-reveal">
            <summary>Check your thinking</summary>
            <p>
              Exactly two: one ellipse and one hyperbola from the confocal family pass through each
              point (other than the foci). They cross at right angles.
            </p>
          </details>
        </div>
        <p>
          Elliptic coordinates are defined by confocal quadrics. In {`$n$`}-dimensional euclidean
          space, through each point pass exactly {`$n$`} confocal quadrics, and they are pairwise
          orthogonal.
        </p>
        <div className="lrn-callout">
          <span className="lrn-callout-label">When to use</span>
          <p>
            Use elliptic coordinates when a problem has confocal symmetry, separates in confocal
            quadrics, or involves geodesics on a quadric. They make the geodesic flow on a quadric
            completely integrable.
          </p>
        </div>
        <div className="lrn-elaborate">
          <span className="lrn-elaborate-label">CONCRETE EXAMPLE</span>
          <p>
            In the plane ({`$n = 2$`}), pick foci at {`$(\\pm 1, 0)$`}. Through the point{' '}
            {`$(2, 1)$`} pass exactly two confocal conics: one ellipse with sum of focal distances{' '}
            {`$\\sqrt{10} + \\sqrt{2}$`} and one hyperbola with difference{' '}
            {`$\\sqrt{10} - \\sqrt{2}$`}. The two values {`$\\lambda_1, \\lambda_2$`} labeling these
            conics are the elliptic coordinates of {`$(2, 1)$`}. The tangent to the ellipse and the
            tangent to the hyperbola at {`$(2, 1)$`} cross at exactly {`$90^\\circ$`}.
          </p>
        </div>

        <h3>Confocal Quadrics and Jacobi Elliptic Coordinates</h3>
        <p>A euclidean pencil of quadrics is the family:</p>
        <div className="lrn-eq">
          <span>{`$$\\frac{1}{2}(A_\\lambda x, x) = 1, \\quad A_\\lambda = A - \\lambda E$$`}</span>
        </div>
        <p>
          Here {`$A$`} is the symmetric matrix of the starting quadric. {`$E$`} is the identity
          matrix. The position vector is {`$x$`}, and {`$(A_\\lambda x, x)$`} is the dot product of{' '}
          {`$x$`} with {`$A_\\lambda x$`}. Subtracting {`$\\lambda E$`} slides through the whole
          family as {`$\\lambda$`} changes.
        </p>
        <p>
          The confocal family uses the inverse matrix, written in terms of a tangent-plane vector{' '}
          {`$\\xi$`}:
        </p>
        <div className="lrn-eq">
          <span>{`$$\\frac{1}{2}(A_\\lambda^{-1} \\xi, \\xi) = 1$$`}</span>
        </div>
        <p>
          Inverting the matrix turns the family of solid quadrics into the family of their tangent
          planes. That is what makes this family share the same foci: the foci are fixed by the
          tangent-plane description, not the solid one.
        </p>
        <p>
          The parameter {`$\\lambda$`} labels each quadric. Jacobi elliptic coordinates assign to
          each point in euclidean space the {`$n$`} values of {`$\\lambda$`} for the {`$n$`}{' '}
          confocal quadrics passing through it.
        </p>
        <div className="lrn-self-explain">
          <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
          <p>Why do the confocal ellipse and hyperbola through a point cross at right angles?</p>
          <details className="lrn-self-explain-reveal">
            <summary>Expert explanation</summary>
            <p>
              Both curves share the same foci. The ellipse is the set of points with fixed sum of
              distances to the foci; the hyperbola is the set with fixed difference. The derivatives
              of sum and difference with respect to position are perpendicular vectors.
            </p>
          </details>
        </div>
        <div className="lrn-callout">
          <span className="lrn-callout-label">Jacobi's theorem</span>
          <p>
            Through each point of {`$n$`}-dimensional euclidean space pass exactly {`$n$`} quadrics
            confocal to a given ellipsoid. Smooth confocal quadrics always intersect at right
            angles.
          </p>
        </div>
        <div className="lrn-callout">
          <span className="lrn-callout-label">Chasles' theorem</span>
          <p>
            A line in general position is tangent to exactly {`$n-1$`} quadrics from a confocal
            family. The tangent planes to these {`$n-1$`} quadrics at the point of tangency are
            pairwise orthogonal.
          </p>
        </div>

        <h3>Jacobi-Chasles Theorem and Geodesic Integrability</h3>
        <div className="lrn-callout">
          <span className="lrn-callout-label">Jacobi-Chasles theorem</span>
          <p>
            A geodesic on a quadric {`$Q$`} is tangent to {`$n-2$`} confocal quadrics. Conversely,
            any curve tangent to {`$n-2$`} fixed confocal quadrics is a geodesic on any quadric of
            the confocal family.
          </p>
        </div>
        <p>
          This makes the geodesic flow on a quadric completely integrable. Completely integrable in
          the Liouville sense means there are enough conserved quantities to integrate the motion by
          quadrature.
        </p>
        <div className="lrn-elaborate">
          <span className="lrn-elaborate-label">CONCRETE EXAMPLE</span>
          <p>
            Take a triaxial ellipsoid in 3-dimensional space, so {`$n = 3$`}. A geodesic on it stays
            tangent to one fixed confocal quadric as it winds along the surface. That tangency gives
            one conserved quantity. Together with the energy, this is two conserved quantities for a
            flow on a 2-dimensional surface. Two is exactly enough, so the geodesic flow on the
            ellipsoid is completely integrable. Jacobi proved this in 1839.
          </p>
        </div>

        <h3>Newton and Ivory Theorems</h3>
        <p>
          Both theorems are about gravity in {`$n$`} dimensions, where the attractive force between
          two points falls off as {`$r^{1-n}$`}. In our familiar 3D world this is the inverse-square
          law.
        </p>
        <ul className="lrn-list">
          <li>
            <strong>Newton's theorem:</strong> A uniform sphere does not attract internal points
            (classical shell theorem).
          </li>
          <li>
            <strong>Ivory's theorem:</strong> An ellipsoid with homeoidal density does not attract
            any interior point. Homeoidal density means the mass sits in thin shells between similar
            ellipsoids. It attracts external points exactly as if all mass were on a smaller
            confocal ellipsoid.
          </li>
        </ul>
        <div className="lrn-self-explain">
          <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
          <p>
            Why does the force law take the form {`$r^{1-n}$`} in {`$n$`} dimensions?
          </p>
          <details className="lrn-self-explain-reveal">
            <summary>Expert explanation</summary>
            <p>
              The flux of force through a sphere of radius {`$r$`} is constant. A sphere in {`$n$`}{' '}
              dimensions has surface area proportional to {`$r^{n-1}$`}. Dividing constant flux by
              area {`$r^{n-1}$`} gives force proportional to {`$r^{-(n-1)} = r^{1-n}$`}.
            </p>
          </details>
        </div>
      </>,

      <>
        <h2>Singularities of Ray Systems</h2>
        <div className="lrn-predict">
          <span className="lrn-predict-label">PREDICT</span>
          <p>
            Light rays reflect off a smooth surface. What kinds of special curves or surfaces do you
            expect to see where the reflected rays concentrate?
          </p>
          <details className="lrn-predict-reveal">
            <summary>Check your thinking</summary>
            <p>
              Caustics. In 3D, generic caustics have only {`$A_2$`} (semi-cubical cusps) and{' '}
              {`$A_3$`} (swallowtail) singularities. Other shapes are unstable and disappear under
              small perturbations.
            </p>
          </details>
        </div>

        <h3>Wave Fronts and Their Singularities</h3>
        <p>
          You built contact structures, Legendre submanifolds, and the Legendre and lagrangian
          fibrations on the symplectic-and-contact page in Part III. Recall the key fact: a contact
          structure is the odd-dimensional partner of a symplectic form, and the Legendre mapping
          sends a Legendre submanifold to its wave front in the base. Here we use that machinery to
          classify the singularities of those wave fronts.
        </p>
        <div className="lrn-callout">
          <span className="lrn-callout-label">Wave front singularities in 3D</span>
          <p>Just like caustics, generic wave fronts in 3D carry only two singularity types:</p>
          <ul className="lrn-list">
            <li>{`$A_2$`}: semi-cubical cuspidal curves</li>
            <li>{`$A_3$`}: swallowtail surfaces</li>
          </ul>
          <p>
            A swallowtail is a surface with two cuspidal edges that meet at a sharp point, with a
            small self-crossing tail tucked underneath. It is named for the bird's-tail shape it
            makes. This is the same {`$A_2$`}/{`$A_3$`} list that governs lagrangian caustics. Wave
            fronts and caustics share their stable shapes because both are classified by the same
            ADE scheme.
          </p>
        </div>

        <h3>Lagrangian Submanifolds in Ray Theory</h3>
        <p>Several natural maps are lagrangian fibrations:</p>
        <ul className="lrn-list">
          <li>The cotangent fibration (projection from cotangent bundle to base)</li>
          <li>The Gauss fibration (map from space of lines to unit sphere)</li>
          <li>The gradient mapping {`$q \\mapsto \\frac{\\partial S}{\\partial q}$`}</li>
          <li>Normal mappings and Gauss mappings</li>
        </ul>
        <p>
          The gradient mapping is lagrangian for the same reason shown in the section on momentum as
          gradient of phase: its image is the graph of {`$\\partial S / \\partial q$`}, and the
          symplectic form vanishes there because mixed partials commute. Caustics form where this
          image folds, and the density blows up there exactly as the earlier caustic section
          described.
        </p>

        <h3>The Obstacle Problem</h3>
        <p>
          The obstacle problem studies the singularities of the shortest-path function outside a
          smooth obstacle. Shortest paths are straight segments plus geodesic arcs on the obstacle
          boundary.
        </p>
        <div className="lrn-definition">
          <span className="lrn-definition-term">Symplectic Triad</span>
          <div className="lrn-definition-desc">
            <p>
              The triad is the local model for how a ray family meets an obstacle. It is a triple{' '}
              {`$(H, L, l)$`} where {`$H$`} is a smooth hypersurface, {`$L$`} is a lagrangian
              submanifold tangent to {`$H$`} to first order along {`$l$`}, and {`$l$`} is a
              lagrangian submanifold of {`$H$`}.
            </p>
          </div>
        </div>
        <p>
          An asymptotic ray runs along the obstacle and touches its surface tangentially at one
          point. A biasymptotic ray touches tangentially at two points. The lagrangian variety of
          tangent rays has {`$A$`}-type singularities at generic asymptotic rays. It has {`$D$`}
          -type singularities (open swallowtail) at biasymptotic rays.
        </p>

        <h3>Open Swallowtail</h3>
        <p>
          The open swallowtail is the variety of monic polynomials of degree 5 with triple roots.
          Its parametrization is:
        </p>
        <div className="lrn-eq">
          <span>{`$$\\left(a,\\; \\frac{b^2}{2} + ac,\\; \\frac{c^2}{2} + ab^3,\\; \\frac{b^5}{5} + \\frac{c^3}{3} + ab^3 c\\right)$$`}</span>
        </div>
        <div className="lrn-self-explain">
          <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
          <p>What do the four coordinates in this parametrization represent?</p>
          <details className="lrn-self-explain-reveal">
            <summary>Expert explanation</summary>
            <p>
              A monic degree-5 polynomial with triple root at {`$x = b$`} has the form{' '}
              {`$(x-b)^3(x^2 + px + q)$`}. Expanding and matching coefficients in terms of{' '}
              {`$(a, b, c)$`} gives the four parameter coordinates {`$(A, B, C, D)$`} of the
              polynomial {`$x^5 + Ax^3 + Bx^2 + Cx + D$`}. The parametrization traces out exactly
              those polynomials that have a triple root.
            </p>
          </details>
        </div>

        <h3>Reflection Groups and Singularities</h3>
        <p>
          A reflection group is a symmetry group built from mirror reflections, like the symmetries
          of a regular polygon or polytope. The classification of singularities connects deeply to
          these groups:
        </p>
        <table className="lrn-table">
          <thead>
            <tr>
              <th>Group family</th>
              <th>Geometric context</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                {`$A_k$`}, {`$D_k$`}, {`$E_k$`}
              </td>
              <td>Lagrangian and Legendre singularities; closed manifolds</td>
            </tr>
            <tr>
              <td>
                {`$B_k$`}, {`$C_k$`}, {`$F_4$`}
              </td>
              <td>Boundary singularities; manifolds with boundary</td>
            </tr>
            <tr>
              <td>{`$H_3$`} (icosahedron)</td>
              <td>Inflection points of plane curves</td>
            </tr>
            <tr>
              <td>{`$H_4$`} (4D regular polytope)</td>
              <td>Obstacle problem; parabolic points on surfaces</td>
            </tr>
          </tbody>
        </table>
        <p>
          The same mysterious ADE coincidence from the lagrangian-singularities section reappears
          here. The reflection groups above are the Weyl groups that act in both pictures, which is
          the bridge between singularity theory and Lie theory.
        </p>
      </>
    ]
  },
  practice: [
    {
      q: `What is Schrödinger's equation for a quantum particle in a potential $U(q)$?`,
      a: `The equation is $ih \\frac{\\partial \\psi}{\\partial t} = -\\frac{h^2}{2}\\Delta\\psi + U(q)\\psi$. Here $\\psi$ is the wave function, $h$ is Planck's constant, $\\Delta\\psi$ is the Laplacian (measuring spatial curvature of $\\psi$), and $U(q)$ is the potential energy. The left side tracks how $\\psi$ changes in time; the right side combines kinetic spread and potential effects.`
    },
    {
      q: `What is the Maslov index of the closed curve $p = \\cos t$, $q = \\sin t$ on the lagrangian manifold $p^2 + q^2 = 1$?`,
      a: `The Maslov index is $+2$. The curve passes through the singular set at $(p,q) = (1,0)$ and at $(-1, 0)$. Both crossings are in the positive direction (where $\\frac{\\partial q_1}{\\partial p_1} > 0$). Counting positive crossings minus negative crossings gives $2 - 0 = 2$.`
    },
    {
      q: `A lagrangian manifold evolves under a hamiltonian phase flow. For small $t$, how does it behave? For large $t$?`,
      a: `For small $t$, the evolved manifold $g^t M$ still projects diffeomorphically onto position space, with no singular points. For large $t$, it folds over itself. Where it folds, the projection becomes singular. These folding loci are caustics. The wave amplitude at a caustic would naively blow up; the Maslov index tracks the phase correction needed.`
    },
    {
      q: `Two students argue. Student A says: "Diffeomorphic caustics imply the lagrangian manifolds are lagrangian equivalent." Student B says: "That's false. Lagrangian equivalence is stricter." Who is right, and why?`,
      a: `Student B is right. Lagrangian equivalence requires a symplectic diffeomorphism (preserving the full symplectic structure) taking one lagrangian manifold to the other. Diffeomorphic caustics only mean the projections have the same shape. The Poisson structure and fiber structure are extra data. Two manifolds can project to the same-shaped caustic but differ in their symplectic geometry.`
    },
    {
      q: `What is a Casimir function on a Poisson manifold? How does it differ from a Hamiltonian function?`,
      a: `A Casimir function $C$ satisfies $\\{C, f\\} = 0$ for every function $f$. It is central in the Poisson algebra. Casimir functions are constant on every symplectic leaf, so they label the leaves. A Hamiltonian function $H$ generates a hamiltonian vector field $X_H$ via $X_H(f) = \\{H, f\\}$. The flow of $X_H$ stays within each symplectic leaf. Casimir functions are perpendicular to leaves; Hamiltonian functions generate motion along leaves.`
    },
    {
      q: `What singularity types can appear on a generic wave front in 3-dimensional space?`,
      a: `Only two types appear in the typical case. The first is $A_2$: semi-cubical cuspidal curves (a curve on the front where the front has a $\\tfrac{3}{2}$-power cusp). The second is $A_3$: swallowtail surfaces. All other singularities are unstable: a small perturbation removes them. This follows from the classification of Legendre singularities by ADE groups.`
    },
    {
      q: `What does Ivory's theorem state? How does it generalize Newton's theorem?`,
      a: `Newton's theorem: a uniform spherical shell does not attract any interior point. Ivory's theorem: an ellipsoid with homeoidal density does not attract any interior point. It attracts any exterior point exactly as if all mass were on a smaller confocal ellipsoid. Newton's theorem is the special case where the ellipsoid degenerates to a sphere.`
    },
    {
      q: `What is a Poisson manifold? Give one natural example.`,
      a: `A Poisson manifold is a manifold where smooth functions form a Lie algebra under a bracket $\\{a,b\\}$ that also satisfies the Leibniz rule $\\{a, bc\\} = \\{a,b\\}c + b\\{a,c\\}$. Required properties: skew-symmetry, Jacobi identity, and the Leibniz rule. Every symplectic manifold is a Poisson manifold. The natural example is the dual of any Lie algebra: the Poisson bracket there uses the Lie algebra structure constants.`
    },
    {
      q: `In the asymptotic formula $\\psi(Q,t) = \\sum_j \\varphi(q_j)|\\frac{DQ}{Dq_j}|^{-\\tfrac{1}{2}} e^{\\frac{i}{h}S_j - \\frac{i\\pi}{2}\\mu_j} + O(h)$, why does the factor $|\\frac{DQ}{Dq_j}|^{-\\tfrac{1}{2}}$ appear?`,
      a: `The factor comes from conservation of probability. The probability of finding the particle near $Q$ must equal the probability of having started near $q_j$. The Jacobian $|\\frac{DQ}{Dq_j}|$ measures how much a region around $q_j$ expands when mapped to a region around $Q$. If the region expands by factor $J$, the probability density must shrink by $J$. Since amplitude squared is probability density, amplitude scales as $J^{-\\tfrac{1}{2}}$.`
    },
    {
      q: `What is the Bohr-Sommerfeld quantization condition? When does it simplify to $\\oint p \\, dq = 2\\pi(N + \\tfrac{1}{2})$?`,
      a: `The general condition is $\\oint_\\gamma p \\, dq = 2\\pi(N + \\frac{\\mu(\\gamma)}{4})$, where $\\mu(\\gamma)$ is the Maslov index of the orbit and $N$ numbers the levels. In one dimension, a closed orbit has two turning points, so $\\mu(\\gamma) = 2$. With that index, the condition simplifies to $\\oint_\\gamma p \\, dq = 2\\pi(N + \\tfrac{1}{2})$. The $\\tfrac{1}{2}$ correction comes entirely from the Maslov phase.`
    },
    {
      q: `In the plane, any smooth function $f(x,y)$ defines $\\{x,y\\} = f(x,y)$. Is this always a valid Poisson structure? Why?`,
      a: `Yes, always. In two dimensions, the Jacobi identity for $\\{x,y\\} = f(x,y)$ reduces to a trivially satisfied condition. Every smooth bivector field on a 2-dimensional manifold satisfies the Jacobi identity automatically. This is a special feature of dimension 2. In higher dimensions, not every bivector field gives a valid Poisson structure. The Jacobi identity is a genuine constraint.`
    },
    {
      q: `What are symplectic leaves of a Poisson manifold? How are they related to the whole manifold?`,
      a: `Symplectic leaves are the equivalence classes of points joinable by integral curves of hamiltonian vector fields. Each leaf is an even-dimensional submanifold carrying a natural nondegenerate symplectic form. The Poisson manifold is stratified into leaves of varying dimensions. Casimir functions are constant on each leaf and distinguish different leaves. The whole Poisson manifold is a disjoint union of symplectic leaves.`
    },
    {
      q: `What is the Whitney tuck? Write its equation and the shape of its projected singular set.`,
      a: `The Whitney tuck is the surface $x = yz - z^3$ in $(x,y,z)$-space. Project it parallel to the $z$-axis. The singular set projects to the curve $27x^2 = 4y^3$ in the plane. This is a semi-cubical parabola: it has a cusp at the origin. The tuck is one of Whitney's three generic singularity types for smooth surface-to-plane mappings.`
    },
    {
      q: `For a 2-dimensional lagrangian manifold in 4-dimensional phase space ($n=2$), which singularity types can remain after a small generic perturbation?`,
      a: `For $n=2$, the types $A_1$ (nonsingular), $A_2$ (fold), and $A_3$ (tuck) all appear stably. More complex singularities like $A_4$, $D_4$, and higher require $n \\geq 3$. So after a small perturbation, only $A_1$, $A_2$, $A_3$ remain on a 2-dimensional lagrangian manifold.`
    },
    {
      q: `What is the $D_4$ singularity? At what dimension does it first appear?`,
      a: `The $D_4$ singularity has generating function $F = \\pm p_1^2 p_2 \\pm p_2^3 + q_3 p_2^2$. From the classification table, it first appears at $n = 3$. It is the simplest singularity outside the $A$ family. The two sign choices in the cubic terms give two distinct real forms.`
    },
    {
      q: `What is the Morse index, and how does it affect the wave function?`,
      a: `The Morse index $\\mu_j$ counts the focal points (with multiplicity) along the phase curve from the initial point to time $t$. A focal point is where nearby trajectories focus together. For small $t$, $\\mu_j = 0$. Each time the trajectory crosses a focal point, $\\mu_j$ increases by that point's multiplicity. In the wave function, $\\mu_j$ appears as a phase factor $e^{-\\frac{i\\pi}{2}\\mu_j}$, shifting the phase by $\\frac{\\pi}{2}$ per focal point.`
    },
    {
      q: `How are Jacobi elliptic coordinates defined? What is their key geometric property?`,
      a: `Jacobi elliptic coordinates are defined by confocal quadrics. In $n$-dimensional euclidean space, through each point pass exactly $n$ quadrics from a confocal family. The $n$ parameter values $\\lambda_1, \\ldots, \\lambda_n$ labeling these quadrics are the elliptic coordinates. The key property: the $n$ confocal quadrics through any given point are pairwise orthogonal. This makes the coordinate system separable and makes geodesic flow completely integrable.`
    },
    {
      q: `Why does the ADE classification appear in both Lie group theory and the classification of lagrangian singularities?`,
      a: `The same Dynkin diagrams $A_k$, $D_k$, $E_6$, $E_7$, $E_8$ appear in both. In Lie theory, they classify simple Lie algebras via their root systems. In singularity theory, they classify stable singularities of lagrangian projections via their generating functions. The mathematical connection runs through Weyl groups. The connection is genuinely mysterious. There is no fully explained reason why the same discrete structure governs such different mathematical phenomena.`
    },
    {
      q: `A physicist models short wave propagation through a medium. At time $t_0$, three rays arrive at point $Q$, having crossed 1, 2, and 3 focal points respectively. Write the phase factors for each contribution.`,
      a: `The phase factors are $e^{-\\frac{i\\pi}{2}\\mu_j}$ for each ray $j$. Ray 1 ($\\mu = 1$): phase factor $e^{-\\frac{i\\pi}{2}} = -i$. Ray 2 ($\\mu = 2$): phase factor $e^{-i\\pi} = -1$. Ray 3 ($\\mu = 3$): phase factor $e^{-\\frac{3i\\pi}{2}} = i$. Each focal point crossing shifts the phase by $\\frac{\\pi}{2}$.`
    },
    {
      q: `What is the open swallowtail? How does it relate to the ordinary swallowtail?`,
      a: `The open swallowtail is the set of monic degree-5 polynomials $x^5 + Ax^3 + Bx^2 + Cx + D$ that have a triple root. The ordinary swallowtail is the set of degree-4 monic polynomials with a triple root. The open swallowtail sits one dimension higher than the ordinary one. Where the ordinary swallowtail self-intersects, the open swallowtail keeps a clean cuspidal edge instead. It appears in the obstacle problem at biasymptotic rays.`
    },
    {
      q: `Why does the asymptotic formula $\\psi(Q,t)$ sum over all rays arriving at $Q$? What goes wrong if you take only one ray?`,
      a: `Multiple rays arrive at $Q$ when the lagrangian manifold has folded over itself. Each fold creates a new "sheet," and each sheet contributes one term to the sum. Taking only one ray ignores the other sheets. Near a caustic, sheets overlap and all contribute with comparable amplitude. Dropping any sheet gives the wrong interference pattern. The full sum captures all contributions and their relative phases.`
    },
    {
      q: `You want to show a geodesic flow is completely integrable. What strategy does the Jacobi-Chasles theorem suggest?`,
      a: `The Jacobi-Chasles approach: embed the geodesic flow in the space of oriented lines (a symplectic manifold, the cotangent bundle of the sphere). Lines tangent to a quadric form a lagrangian submanifold. Two facts drive the proof. First, the characteristics of the tangent-line manifold are geodesics. Second, the functions that record which confocal quadrics a line touches have zero Poisson bracket with each other. The $n-2$ confocal quadrics tangent to each geodesic give $n-2$ commuting first integrals, proving Liouville integrability.`
    },
    {
      q: `A physical system has phase space equal to the dual of a Lie algebra. Describe its natural Poisson structure and what the symplectic leaves look like.`,
      a: `The Poisson bracket on the dual $\\mathfrak{g}^*$ is $\\{a,b\\}(\\omega) = \\sum \\frac{\\partial a}{\\partial \\omega_i}\\frac{\\partial b}{\\partial \\omega_j}[\\omega_i, \\omega_j]_{\\text{Lie}}$. The symplectic leaves are the co-adjoint orbits: orbits of the co-adjoint action of the Lie group. For $SO(3)$, the co-adjoint orbits are spheres centered at the origin in angular momentum space. The Casimir functions are the invariants of the co-adjoint action (e.g., $|M|^2$ for $SO(3)$).`
    },
    {
      q: `What does the Jacobi-Chasles theorem say about geodesics on a quadric?`,
      a: `A geodesic on a quadric $Q$ in $n$-dimensional euclidean space is tangent to exactly $n-2$ quadrics from the confocal family. Conversely, any curve tangent to $n-2$ fixed confocal quadrics is a geodesic on any quadric of the confocal family. This gives $n-2$ first integrals (the confocal quadrics preserved by tangency), which together with energy give $n-1$ integrals in involution, making the geodesic flow completely integrable.`
    },
    {
      q: `What are the three generic types of singularity for a smooth map from a surface to the plane (Whitney's theorem)?`,
      a: `The three types are: (1) Nonsingular: the map is locally a diffeomorphism. (2) Fold: the map folds the surface, like projecting the equator of a sphere. The fold image is a smooth curve. (3) Tuck (cusp): the map has a semi-cubical cusp in its image. The surface $x = yz - z^3$ projects to the cusp $27x^2 = 4y^3$. All more complex singularities are removable by small perturbation, so these three exhaust all generic types.`
    },
    {
      q: `Why is the Maslov index defined independently of any phase flow, while the Morse index is not?`,
      a: `The Maslov index counts signed crossings of a curve on the lagrangian manifold through the singular set. This count depends only on the curve itself and its homotopy class. It does not depend on how the curve was generated. The Morse index, by contrast, counts focal points along a specific phase curve from an initial condition at $t=0$ to time $t$. It depends on the choice of hamiltonian and on the starting point. The Morse index is a special case: choose the curve to be a phase curve, and the Maslov index recovers the Morse index.`
    }
  ],
  reference: {
    category: 'Quick Reference',
    title: 'Advanced Topics: Asymptotics, Singularities, and Integrable Systems',
    sections: [
      <>
        <h2>Short Wave Asymptotics</h2>
        <div className="lrn-definition">
          <span className="lrn-definition-term">Schrödinger's Equation</span>
          <div className="lrn-definition-desc">
            <p>{`$$ih \\frac{\\partial \\psi}{\\partial t} = -\\frac{h^2}{2}\\Delta\\psi + U(q)\\psi,\\; q \\in \\mathbb{R}^n,\\; t \\in \\mathbb{R}$$`}</p>
            <p>Governing equation for quantum wave function evolution in potential {`$U(q)$`}.</p>
          </div>
        </div>
        <div className="lrn-definition">
          <span className="lrn-definition-term">Short-Wave Initial Condition</span>
          <div className="lrn-definition-desc">
            <p>{`$$\\psi|_{t=0} = \\varphi(q)e^{\\frac{i}{h}s(q)}$$`}</p>
            <p>
              Use when starting WKB/geometric optics approximation with small {`$h$`} and rapidly
              oscillating phase {`$s(q)$`}.
            </p>
          </div>
        </div>
        <div className="lrn-definition">
          <span className="lrn-definition-term">Momentum as Gradient of Phase</span>
          <div className="lrn-definition-desc">
            <p>{`$$p(q) = \\frac{\\partial s}{\\partial q}$$`}</p>
            <p>Reads off the initial momentum field from the initial phase function {`$s(q)$`}.</p>
          </div>
        </div>
        <div className="lrn-definition">
          <span className="lrn-definition-term">Hamilton's Equations</span>
          <div className="lrn-definition-desc">
            <p>{`$$\\dot{q} = \\frac{\\partial H}{\\partial p},\\; \\dot{p} = -\\frac{\\partial H}{\\partial q},\\; H = \\frac{1}{2}p^2 + U(q)$$`}</p>
            <p>Finds the classical trajectories (rays) generated by the hamiltonian {`$H$`}.</p>
          </div>
        </div>
        <div className="lrn-definition">
          <span className="lrn-definition-term">Action Along Trajectory</span>
          <div className="lrn-definition-desc">
            <p>{`$$S_j(Q,t) = s(q_j) + \\int_0^t L \\, d\\theta,\\; L = \\frac{\\dot{q}^2}{2} - U(q)$$`}</p>
            <p>
              Computes the accumulated phase along each ray arriving at configuration point {`$Q$`}{' '}
              at time {`$t$`}.
            </p>
          </div>
        </div>
        <div className="lrn-definition">
          <span className="lrn-definition-term">Asymptotic Solution</span>
          <div className="lrn-definition-desc">
            <p>{`$$\\psi(Q,t) = \\sum_j \\varphi(q_j)\\left|\\frac{DQ}{Dq_j}\\right|^{-\\tfrac{1}{2}} e^{\\frac{i}{h}S_j(Q,t) - \\frac{i\\pi}{2}\\mu_j} + O(h)$$`}</p>
            <p>
              Leading-order WKB wave function when multiple rays reach {`$Q$`} after caustic
              formation.
            </p>
          </div>
        </div>
      </>,

      <>
        <h2>Morse and Maslov Indices</h2>
        <div className="lrn-definition">
          <span className="lrn-definition-term">Maslov Index</span>
          <div className="lrn-definition-desc">
            <p>
              Integer = (passages from negative to positive side) minus (passages from positive to
              negative side). Counts the total phase shift {`$e^{-\\frac{i\\pi}{2}\\mu}$`}{' '}
              accumulated along any oriented path on a lagrangian manifold.
            </p>
          </div>
        </div>
        <div className="lrn-definition">
          <span className="lrn-definition-term">Phase Factor at Focal Point</span>
          <div className="lrn-definition-desc">
            <p>{`$$e^{-\\frac{i\\pi}{2}\\mu_j}$$`}</p>
            <p>
              Multiplied into each ray contribution. Each focal point crossing increases{' '}
              {`$\\mu_j$`} by its multiplicity.
            </p>
          </div>
        </div>
        <div className="lrn-definition">
          <span className="lrn-definition-term">Bohr-Sommerfeld Condition (General)</span>
          <div className="lrn-definition-desc">
            <p>{`$$\\oint_\\gamma p \\, dq = 2\\pi\\left(N + \\frac{\\mu(\\gamma)}{4}\\right)$$`}</p>
            <p>
              Finds large eigenvalues of quantum systems from classical orbit data and the Maslov
              index {`$\\mu(\\gamma)$`}. The integer {`$N$`} numbers the levels.
            </p>
          </div>
        </div>
        <div className="lrn-definition">
          <span className="lrn-definition-term">Bohr-Sommerfeld (1D Case)</span>
          <div className="lrn-definition-desc">
            <p>{`$$\\oint_\\gamma p \\, dq = 2\\pi\\left(N + \\frac{1}{2}\\right)$$`}</p>
            <p>
              For 1D quantum systems with two turning points ({`$\\mu = 2$`}); gives the {`$N$`}-th
              energy level asymptotically.
            </p>
          </div>
        </div>
      </>,

      <>
        <h2>Lagrangian Singularities: Normal Forms</h2>
        <div className="lrn-definition">
          <span className="lrn-definition-term">Generating Function Relations</span>
          <div className="lrn-definition-desc">
            <p>{`$$q_i = \\frac{\\partial F}{\\partial p_i},\\; p_j = -\\frac{\\partial F}{\\partial q_j}$$`}</p>
            <p>
              Reads off the lagrangian manifold from its generating function{' '}
              {`$F(p_1,\\ldots,p_k,q_{k+1},\\ldots,q_n)$`}.
            </p>
          </div>
        </div>
        <div className="lrn-definition">
          <span className="lrn-definition-term">Whitney Tuck Surface</span>
          <div className="lrn-definition-desc">
            <p>{`$$x = yz - z^3 \\quad \\Rightarrow \\quad \\text{projects to} \\quad 27x^2 = 4y^3$$`}</p>
            <p>Canonical example of a tuck singularity and its semi-cubical parabola image.</p>
          </div>
        </div>
        <table className="lrn-table">
          <thead>
            <tr>
              <th>Type</th>
              <th>Generating Function {`$F$`}</th>
              <th>First at {`$n$`}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{`$A_1$`}</td>
              <td>{`$p_1^2$`}</td>
              <td>1</td>
            </tr>
            <tr>
              <td>{`$A_2$`}</td>
              <td>{`$\\pm p_1^3$`}</td>
              <td>1</td>
            </tr>
            <tr>
              <td>{`$A_3$`}</td>
              <td>{`$\\pm p_1^4 + q_2 p_1^2$`}</td>
              <td>2</td>
            </tr>
            <tr>
              <td>{`$A_4$`}</td>
              <td>{`$\\pm p_1^5 + q_3 p_1^3 + q_2 p_1^2$`}</td>
              <td>3</td>
            </tr>
            <tr>
              <td>{`$D_4$`}</td>
              <td>{`$\\pm p_1^2 p_2 \\pm p_2^3 + q_3 p_2^2$`}</td>
              <td>3</td>
            </tr>
            <tr>
              <td>{`$A_5$`}</td>
              <td>{`$\\pm p_1^6 + q_4 p_1^4 + q_3 p_1^3 + q_2 p_1^2$`}</td>
              <td>4</td>
            </tr>
            <tr>
              <td>{`$D_5$`}</td>
              <td>{`$\\pm p_1^2 p_2 + p_2^4 + q_4 p_2^2 + q_3 p_1 p_2$`}</td>
              <td>4</td>
            </tr>
            <tr>
              <td>{`$E_6$`}</td>
              <td>{`$\\pm p_1^3 \\pm p_2^4 + q_5 p_1 p_2^2 + q_4 p_1 p_2 + q_3 p_2^2$`}</td>
              <td>5</td>
            </tr>
          </tbody>
        </table>
        <table className="lrn-table">
          <thead>
            <tr>
              <th>Dim {`$n$`}</th>
              <th>Stable lagrangian singularity types</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>
                {`$A_1$`}, {`$A_2$`}
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td>
                {`$A_1$`}, {`$A_2$`}, {`$A_3$`}
              </td>
            </tr>
            <tr>
              <td>3</td>
              <td>
                {`$A_1$`}–{`$A_4$`}, {`$D_4$`}
              </td>
            </tr>
            <tr>
              <td>4</td>
              <td>
                {`$A_1$`}–{`$A_5$`}, {`$D_4$`}, {`$D_5$`}
              </td>
            </tr>
            <tr>
              <td>5</td>
              <td>
                {`$A_1$`}–{`$A_6$`}, {`$D_4$`}–{`$D_6$`}, {`$E_6$`}
              </td>
            </tr>
          </tbody>
        </table>
      </>,

      <>
        <h2>KdV Equation</h2>
        <div className="lrn-definition">
          <span className="lrn-definition-term">KdV Equation</span>
          <div className="lrn-definition-desc">
            <p>{`$$u_t = 6uu_x - u_{xxx}$$`}</p>
            <p>
              Canonical completely integrable PDE. The dedicated KdV page covers its solitons, first
              integrals, and Lax pair; here it supplies a Poisson structure on a space of functions.
            </p>
          </div>
        </div>
        <div className="lrn-definition">
          <span className="lrn-definition-term">Gardner-Zakharov-Faddeev Structure</span>
          <div className="lrn-definition-desc">
            <p>{`$$\\omega^2(\\partial w, \\partial v) = \\frac{1}{2}\\int (w \\partial v - v \\partial w) \\, dx$$`}</p>
            <p>
              The symplectic structure that makes the KdV flow hamiltonian on a space of functions.
            </p>
          </div>
        </div>
      </>,

      <>
        <h2>Poisson Structures</h2>
        <div className="lrn-definition">
          <span className="lrn-definition-term">Poisson Bracket on Dual of Lie Algebra</span>
          <div className="lrn-definition-desc">
            <p>{`$$\\{a,b\\}_{\\text{Poisson}} = \\sum \\frac{\\partial a}{\\partial \\omega_i}\\frac{\\partial b}{\\partial \\omega_j}[\\omega_i,\\omega_j]_{\\text{Lie}}$$`}</p>
            <p>
              Defines the canonical Poisson structure on {`$\\mathfrak{g}^*$`} (dual of any Lie
              algebra {`$\\mathfrak{g}$`}).
            </p>
          </div>
        </div>
        <div className="lrn-definition">
          <span className="lrn-definition-term">Poisson Structure in Plane</span>
          <div className="lrn-definition-desc">
            <p>{`$$\\{x, y\\} = f(x,y)$$`}</p>
            <p>
              Any smooth {`$f$`} gives a valid Poisson structure in 2D; the Jacobi identity is
              automatic.
            </p>
          </div>
        </div>
        <table className="lrn-table">
          <thead>
            <tr>
              <th>Type</th>
              <th>Normal Form</th>
              <th>Condition</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Nonsingular</td>
              <td>{`$\\{x,y\\} = 1$`}</td>
              <td>Generic points</td>
            </tr>
            <tr>
              <td>{`$A_0$`} singular</td>
              <td>{`$\\{x,y\\} = y$`}</td>
              <td>Singular locus {`$y=0$`}</td>
            </tr>
          </tbody>
        </table>
      </>,

      <>
        <h2>Powers of Volume Forms</h2>
        <div className="lrn-definition">
          <span className="lrn-definition-term">Power of Volume Form</span>
          <div className="lrn-definition-desc">
            <p>{`$$f(dx)^\\alpha = f(x_1,\\ldots,x_n)(dx_1 \\wedge \\cdots \\wedge dx_n)^\\alpha$$`}</p>
            <p>
              Unified framework for volume forms ({`$\\alpha=1$`}), Poisson structures in plane (
              {`$\\alpha=-1$`}), and intermediate cases.
            </p>
          </div>
        </div>
        <div className="lrn-definition">
          <span className="lrn-definition-term">Varchenko Normal Form</span>
          <div className="lrn-definition-desc">
            <p>{`$$f^\\beta\\!\\left(1 + \\sum \\lambda_{m,l} x^m f^l\\right) dx$$`}</p>
            <p>
              Complete normal form for every germ {`$f^\\beta h \\, dx$`}; moduli are the{' '}
              {`$\\lambda_{m,l}$`} coefficients.
            </p>
          </div>
        </div>
        <table className="lrn-table">
          <thead>
            <tr>
              <th>Type</th>
              <th>ADE Normal Form</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{`$A_k$`}</td>
              <td>{`$\\pm x_1^{k+1} \\pm x_2^2 \\pm \\cdots \\pm x_n^2 = 0$`}</td>
            </tr>
            <tr>
              <td>{`$D_k$`}</td>
              <td>{`$x_1^2 x_2 \\pm x_2^{k-1} \\pm x_3^2 \\pm \\cdots = 0$`}</td>
            </tr>
            <tr>
              <td>{`$E_6$`}</td>
              <td>{`$x_1^3 + x_2^4 \\pm \\cdots = 0$`}</td>
            </tr>
            <tr>
              <td>{`$E_7$`}</td>
              <td>{`$x_1^3 + x_1 x_2^3 \\pm \\cdots = 0$`}</td>
            </tr>
            <tr>
              <td>{`$E_8$`}</td>
              <td>{`$x_1^3 + x_2^5 \\pm \\cdots = 0$`}</td>
            </tr>
          </tbody>
        </table>
      </>,

      <>
        <h2>Elliptic Coordinates and Confocal Quadrics</h2>
        <div className="lrn-definition">
          <span className="lrn-definition-term">Euclidean Pencil of Quadrics</span>
          <div className="lrn-definition-desc">
            <p>{`$$\\frac{1}{2}(A_\\lambda x, x) = 1,\\quad A_\\lambda = A - \\lambda E$$`}</p>
            <p>
              Defines the one-parameter family of quadrics confocal to the central quadric {`$A$`}.
            </p>
          </div>
        </div>
        <div className="lrn-definition">
          <span className="lrn-definition-term">Newton/Coulomb Force in {`$n$`} Dimensions</span>
          <div className="lrn-definition-desc">
            <p>Force {`$\\propto r^{1-n}$`}</p>
            <p>
              Generalizes inverse-square law; {`$n=3$`} gives the familiar {`$r^{-2}$`} law.
            </p>
          </div>
        </div>
      </>,

      <>
        <h2>Contact Geometry and Wave Fronts</h2>
        <table className="lrn-table">
          <thead>
            <tr>
              <th>Type</th>
              <th>Shape</th>
              <th>Codimension</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{`$A_2$`}</td>
              <td>Semi-cubical cuspidal curve</td>
              <td>0 (generic)</td>
            </tr>
            <tr>
              <td>{`$A_3$`}</td>
              <td>Swallowtail surface</td>
              <td>0 (generic)</td>
            </tr>
          </tbody>
        </table>
        <table className="lrn-table">
          <thead>
            <tr>
              <th>Group family</th>
              <th>Geometric context</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                {`$A_k$`}, {`$D_k$`}, {`$E_k$`}
              </td>
              <td>Lagrangian and Legendre singularities; closed manifolds</td>
            </tr>
            <tr>
              <td>
                {`$B_k$`}, {`$C_k$`}, {`$F_4$`}
              </td>
              <td>Boundary singularities; manifolds with boundary</td>
            </tr>
            <tr>
              <td>{`$H_3$`} (icosahedron)</td>
              <td>Inflection points of plane curves</td>
            </tr>
            <tr>
              <td>{`$H_4$`} (4D regular polytope)</td>
              <td>Obstacle problem; parabolic points on surfaces</td>
            </tr>
          </tbody>
        </table>
        <div className="lrn-definition">
          <span className="lrn-definition-term">Symplectic Triad</span>
          <div className="lrn-definition-desc">
            <p>
              {`$(H, L, l)$`}: {`$H$`} smooth hypersurface; {`$L$`} lagrangian submanifold tangent
              to {`$H$`} to first order along {`$l$`}; {`$l$`} lagrangian in {`$H$`}.
            </p>
            <p>Framework for obstacle problems; generates open swallowtail at biasymptotic rays.</p>
          </div>
        </div>
        <div className="lrn-definition">
          <span className="lrn-definition-term">Open Swallowtail Parametrization</span>
          <div className="lrn-definition-desc">
            <p>{`$$\\left(a,\\; \\frac{b^2}{2} + ac,\\; \\frac{c^2}{2} + ab^3,\\; \\frac{b^5}{5} + \\frac{c^3}{3} + ab^3 c\\right)$$`}</p>
            <p>
              Explicit parametrization of the open swallowtail variety (monic degree-5 polynomials
              with triple root).
            </p>
          </div>
        </div>
      </>
    ]
  },
  customCss: null
}

export default function AdvancedTopicsAsymptoticsAndIntegrableSystems() {
  return <LearningTemplate config={config} />
}
