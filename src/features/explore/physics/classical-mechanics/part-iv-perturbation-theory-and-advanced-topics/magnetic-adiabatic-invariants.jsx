import { LearningTemplate } from '../../../../../components/learning/learning-template'
import {
  GyroOrbit,
  MagneticMirrorBounce,
  MagneticMomentInvariance,
  LossCone
} from '../../../../../components/viz'

function useConfig() {
  const config = {
    cssPrefix: 'mai',
    documentTitle: 'Magnetic Adiabatic Invariants for Charged Particles - AETHER',
    learning: {
      groupTitle: 'Perturbation Theory',
      category: 'Module 4',
      title: 'Magnetic Adiabatic Invariants for Charged Particles',
      subtitle:
        "Three conserved quantities that trap particles in Earth's belts, confine plasma in mirror machines, and paint the sky with auroras.",
      sections: [
        <>
          <h2>A Charged Particle in a Magnetic Field</h2>
          <p>
            Charged particles spiral around Earth in the Van Allen radiation belts. Fusion reactors
            use magnetic bottles to confine hot plasma. Auroras light up when those particles fall
            into the air. All three rest on one idea: a charged particle in a slowly changing
            magnetic field keeps certain quantities almost perfectly fixed.
          </p>
          <p>
            Those fixed quantities are <strong>adiabatic invariants</strong>. Here "adiabatic" does
            not mean heat-insulated. It means the field changes slowly compared to how fast the
            particle moves. We build three invariants in this topic, one for each motion. But first
            we need the force that makes a charged particle move in circles.
          </p>

          <h3>The Lorentz Force</h3>
          <p>
            A magnetic field {`$\\mathbf{B}$`} pushes on a moving charge {`$q$`}. The push is the{' '}
            <strong>Lorentz force</strong>:
          </p>
          <div className="lrn-eq lrn-eq-hero">{`$$\\mathbf{F} = q\\,\\mathbf{v}\\times\\mathbf{B}$$`}</div>
          <p>
            The cross product means the force is always sideways. It points at a right angle to both
            the velocity {`$\\mathbf{v}$`} and the field {`$\\mathbf{B}$`}. A force that always
            points sideways to the motion cannot speed the particle up or slow it down. It only
            turns it. So the particle circles.
          </p>
          <p>
            Split the velocity into two parts. Call {`$v_\\parallel$`} the speed along the field
            line. Call {`$v_\\perp$`} the speed across it. The field only bends the across-the-field
            part. The result is a tight circle in the plane across {`$\\mathbf{B}$`}, drifting along
            the field line. The path is a helix, like a stretched spring.
          </p>

          <h3>Gyration: How Fast and How Wide</h3>
          <p>
            The circular part of the motion is called <strong>gyration</strong>. To gyrate means to
            circle around the field line. Two numbers describe it. Set the Lorentz force equal to
            the force needed for circular motion, {`$qv_\\perp B = \\frac{mv_\\perp^2}{r}$`}, and
            solve. The <strong>gyrofrequency</strong> {`$\\Omega$`} is how many radians per second
            the particle circles:
          </p>
          <div className="lrn-eq lrn-eq-hero">{`$$\\Omega = \\frac{qB}{m}$$`}</div>
          <p>
            The <strong>gyroradius</strong> {`$r_L$`} (also called the Larmor radius) is the radius
            of that circle:
          </p>
          <div className="lrn-eq lrn-eq-hero">{`$$r_L = \\frac{v_\\perp}{\\Omega} = \\frac{mv_\\perp}{qB}$$`}</div>
          <p>
            A stronger field makes the particle circle faster and tighter. The center of the little
            circle is called the <strong>guiding center</strong>. It is the average position the
            particle circles around, and tracking it is much simpler than tracking the full helix.
          </p>

          <div className="lrn-callout">
            <span className="lrn-callout-label">Worked number</span>
            <p>
              A proton ({`$m = 1.67\\times 10^{-27}\\,$`}kg, {`$q = 1.60\\times 10^{-19}\\,$`}C)
              sits in a field {`$B = 0.5\\,$`}T with {`$v_\\perp = 2\\times 10^6\\,$`}m/s. Then{' '}
              {`$\\Omega = \\frac{(1.6\\times 10^{-19})(0.5)}{1.67\\times 10^{-27}} \\approx 4.8\\times 10^7\\,$`}
              rad/s (about 7.6 MHz). The gyroradius is{' '}
              {`$r_L = \\frac{(1.67\\times 10^{-27})(2\\times 10^6)}{(1.6\\times 10^{-19})(0.5)} \\approx 4.2\\,$`}
              cm. So this proton circles millions of times a second inside a circle a few
              centimeters wide.
            </p>
          </div>

          <GyroOrbit />

          <h3>A Static Field Does No Work</h3>
          <p>
            One fact runs through this whole topic. The magnetic force{' '}
            {`$q\\mathbf{v}\\times\\mathbf{B}$`}
            always points sideways to the velocity. Work is force times distance along the motion. A
            sideways force does zero work. So a steady magnetic field never adds or removes energy.
          </p>
          <div className="lrn-eq lrn-eq-hero">
            {`$$\\frac{1}{2}m\\bigl(v_\\parallel^2 + v_\\perp^2\\bigr) = \\text{constant}$$`}
          </div>
          <p>
            The total speed stays fixed. The field can only swap energy between the along-field part
            and the across-field part. It turns the velocity. It never changes how fast the particle
            is overall. Hold onto this. It is the reason particles bounce instead of slowing to a
            stop.
          </p>
        </>,

        <>
          <h2>The First Invariant: Magnetic Moment</h2>
          <p>
            The fast circular motion is an oscillator. The previous topic showed that any slow
            oscillator keeps an action fixed when its parameters change slowly. For the gyration,
            that conserved action is the <strong>magnetic moment</strong> {`$\\mu$`}. It measures
            the across-field kinetic energy per unit field strength:
          </p>
          <div className="lrn-eq lrn-eq-hero">{`$$\\mu = \\frac{m v_\\perp^2}{2B}$$`}</div>
          <p>
            When the field changes slowly compared to the gyration period{' '}
            {`$\\frac{2\\pi}{\\Omega}$`}, {`$\\mu$`} stays constant. This is the first adiabatic
            invariant. It locks the ratio of across-field energy to field strength.
          </p>

          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              <strong>Predict:</strong> The field {`$B$`} doubles slowly while a particle gyrates.
              You now know {`$\\mu$`} is fixed. What happens to {`$v_\\perp$`}? What happens to the
              gyroradius {`$r_L$`}?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                Keeping {`$\\mu = \\frac{mv_\\perp^2}{2B}$`} fixed while {`$B$`} doubles forces{' '}
                {`$v_\\perp^2$`} to double too. So {`$v_\\perp$`} grows by {`$\\sqrt{2}$`}. Then{' '}
                {`$r_L = \\frac{mv_\\perp}{qB}$`} scales as{' '}
                {`$\\frac{\\sqrt{B}}{B} = \\frac{1}{\\sqrt{B}}$`}, so the radius shrinks to{' '}
                {`$\\frac{1}{\\sqrt{2}}$`} of its old value. The circle gets faster and tighter.
              </p>
            </details>
          </div>

          <p>
            <strong>When to use {`$\\mu$`}:</strong> reach for it whenever the field changes on a
            timescale much longer than the gyration period. In Earth's magnetosphere this holds
            almost everywhere, except inside very thin current sheets where the field flips quickly.
          </p>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>
              <strong>Explain to yourself:</strong> Where does the energy come from when{' '}
              {`$v_\\perp$`} grows as the field strengthens? A static field does no work, so what is
              going on?
            </p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                A field that is changing in time is not static. While {`$B$`} ramps up, a circling
                electric field appears (Faraday's law), and that electric field does the work that
                raises {`$v_\\perp$`}. The "no work" rule holds only for a steady field. Once{' '}
                {`$B$`} stops changing, the field does no work again, and {`$\\mu$`} sits at its new
                fixed value.
              </p>
            </details>
          </div>
        </>,

        <>
          <h2>The Mirror Force and Magnetic Bouncing</h2>
          <p>
            Now put the particle in a field that is stronger in some places than others. Keeping{' '}
            {`$\\mu = \\frac{mv_\\perp^2}{2B}$`} fixed means {`$v_\\perp^2 = \\frac{2\\mu B}{m}$`}{' '}
            grows wherever {`$B$`} grows. But the total speed is fixed (a static field does no
            work). So the along-field part must shrink:
          </p>
          <div className="lrn-eq lrn-eq-hero">
            {`$$\\tfrac{1}{2}mv_\\parallel^2 = E - \\mu B$$`}
          </div>
          <p>
            Here {`$E$`} is the total kinetic energy and {`$z$`} marks distance along the field
            line. As the particle moves into stronger field, {`$v_\\parallel$`} drops. Where {`$B$`}{' '}
            is large enough that {`$\\mu B = E$`}, the along-field speed hits zero. The particle
            stops and turns around. That spot is the <strong>mirror point</strong>.
          </p>

          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              <strong>Predict:</strong> You know {`$\\frac{1}{2}mv_\\parallel^2 = E - \\mu B$`}, and
              both {`$E$`} and {`$\\mu$`} are fixed. As the particle climbs into a stronger field,
              what kind of force does it feel along the field line? Which way does it point?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                The along-field kinetic energy {`$E - \\mu B$`} acts like a potential energy{' '}
                {`$\\mu B$`}. A force is minus the slope of a potential. So the along-field force is{' '}
                {`$F_\\parallel = -\\mu\\frac{\\partial B}{\\partial z}$`}. It points away from the
                strong field, back toward the weak field. That is the push that turns the particle
                around.
              </p>
            </details>
          </div>

          <p>
            This is the <strong>mirror force</strong>:
          </p>
          <div className="lrn-eq lrn-eq-hero">
            {`$$F_\\parallel = -\\mu\\,\\frac{\\partial B}{\\partial z}$$`}
          </div>
          <p>
            A narrowing field gradient pushes the particle back. The particle bounces between two
            mirror points, caught in a magnetic bottle. This bounce is the second motion in our
            story.
          </p>

          <div className="lrn-callout">
            <span className="lrn-callout-label">Worked number</span>
            <p>
              A proton has {`$E = 1\\times 10^{-15}\\,$`}J and {`$\\mu = 5\\times 10^{-15}\\,$`}J/T.
              It mirrors where {`$\\mu B = E$`}, that is at{' '}
              {`$B = \\frac{E}{\\mu} = \\frac{1\\times 10^{-15}}{5\\times 10^{-15}} = 0.2\\,$`}T. If
              the field rises by {`$0.1\\,$`}T over {`$1\\,$`}m near that point, the slope is{' '}
              {`$\\frac{\\partial B}{\\partial z} = 0.1\\,$`}T/m, so the mirror force is{' '}
              {`$F_\\parallel = -(5\\times 10^{-15})(0.1) = -5\\times 10^{-16}\\,$`}N, pushing the
              proton back toward the weak field.
            </p>
          </div>

          <MagneticMirrorBounce />

          <h3>Pitch Angle and the Loss Cone</h3>
          <p>
            Not every particle bounces. The deciding number is the <strong>pitch angle</strong>{' '}
            {`$\\theta$`}: the angle between the velocity and the field line. At the weak-field
            midplane it is set by
          </p>
          <div className="lrn-eq">
            {`$$\\tan\\theta = \\frac{v_\\perp}{v_\\parallel}, \\qquad \\sin^2\\theta = \\frac{v_\\perp^2}{v_\\perp^2 + v_\\parallel^2}.$$`}
          </div>
          <p>
            A large pitch angle means lots of across-field motion, so the particle mirrors at a
            modest field. A small pitch angle means it moves almost straight along the field and may
            shoot through before {`$B$`} grows enough to stop it. The cutoff is the{' '}
            <strong>loss cone</strong>: the set of pitch angles too small to be reflected. Particles
            inside the loss cone escape; we work out its exact size in the confinement section.
          </p>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>
              <strong>After watching the bounce:</strong> Near the weak-field midplane the particle
              speeds up along the field, then slows as it climbs toward the mirror. Why must{' '}
              {`$v_\\perp$`} change the opposite way?
            </p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                The static field does no work, so {`$v_\\parallel^2 + v_\\perp^2$`} stays fixed.
                When {`$v_\\parallel$`} drops, {`$v_\\perp$`} must rise to keep the total speed
                constant. The field simply trades along-field energy for across-field energy, while
                holding {`$\\mu = \\frac{mv_\\perp^2}{2B}$`} fixed.
              </p>
            </details>
          </div>
        </>,

        <>
          <h2>Drift Motion: The Guiding Center Slides Sideways</h2>
          <p>
            So far the guiding center stays on one field line. But real fields are not perfectly
            uniform, and that makes the whole circle slowly slide sideways. This slow sideways
            sliding is called a <strong>drift</strong>. Drift is brand new, so we work an example
            first, then state the rule.
          </p>

          <h3>Why a Nonuniform Field Causes a Drift</h3>
          <p>
            Picture the particle circling. If the field is stronger on one side of the circle than
            the other, the gyroradius {`$r_L = \\frac{mv_\\perp}{qB}$`} is tighter on the strong
            side and wider on the weak side. The loop no longer closes on itself. Each turn nudges
            the guiding center a little to the side. Step by step, it drifts.
          </p>
          <p>
            This is the <strong>gradient-B drift</strong>. Its velocity is:
          </p>
          <div className="lrn-eq lrn-eq-hero">
            {`$$\\mathbf{v}_{\\nabla B} = \\frac{mv_\\perp^2}{2qB^3}\\,\\mathbf{B}\\times\\nabla B$$`}
          </div>
          <p>
            The size is {`$v_{\\nabla B} = \\frac{mv_\\perp^2}{2qB}\\frac{|\\nabla B|}{B}$`}. Notice
            the {`$q$`} in the bottom: protons and electrons drift in opposite directions, because
            they have opposite charge.
          </p>

          <div className="lrn-callout">
            <span className="lrn-callout-label">Worked number</span>
            <p>
              Take the same proton: {`$m = 1.67\\times 10^{-27}\\,$`}kg,{' '}
              {`$q = 1.6\\times 10^{-19}\\,$`}C, {`$v_\\perp = 2\\times 10^6\\,$`}m/s,{' '}
              {`$B = 0.5\\,$`}T. Suppose the field drops by {`$0.5\\,$`}T over {`$10^7\\,$`}m, so{' '}
              {`$|\\nabla B| = 5\\times 10^{-8}\\,$`}T/m and{' '}
              {`$\\frac{|\\nabla B|}{B} = 10^{-7}\\,$`}
              /m. The first factor is{' '}
              {`$\\frac{mv_\\perp^2}{2qB} = \\frac{(1.67\\times 10^{-27})(4\\times 10^{12})}{2(1.6\\times 10^{-19})(0.5)} \\approx 4.2\\times 10^4\\,$`}
              m/s. Multiply by {`$10^{-7}$`}: {`$v_{\\nabla B} \\approx 4\\times 10^{-3}\\,$`}m/s.
              Tiny next to the {`$2\\times 10^6\\,$`}m/s gyration speed, which is exactly why the
              drift is the slowest motion.
            </p>
          </div>

          <h3>The Curvature Drift</h3>
          <p>
            Field lines also curve. A particle following a curved line needs a sideways push to stay
            on it, just like a car rounding a bend. The field supplies that push through a second
            drift, the <strong>curvature drift</strong>. It depends on the along-field speed{' '}
            {`$v_\\parallel$`}:
          </p>
          <div className="lrn-eq lrn-eq-hero">
            {`$$\\mathbf{v}_{R} = \\frac{mv_\\parallel^2}{qB^2}\\,\\frac{\\mathbf{R}_c\\times\\mathbf{B}}{R_c^2}, \\qquad v_R = \\frac{mv_\\parallel^2}{qBR_c}$$`}
          </div>
          <p>
            Here {`$R_c$`} is the radius of the bend in the field line. Both drifts point the same
            way for a given charge, so in Earth's field they add up. Protons drift one way around
            the planet and electrons the other. That circulating motion is the third and slowest of
            our three motions, and it sets up the third invariant.
          </p>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>
              <strong>Explain to yourself:</strong> Why does the gradient-B drift speed grow with{' '}
              {`$v_\\perp^2$`}, while the curvature drift grows with {`$v_\\parallel^2$`}?
            </p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                The gradient-B drift comes from the across-field circling, so it scales with the
                across-field speed {`$v_\\perp$`}. The curvature drift comes from the particle
                racing along a bent line, so it scales with the along-field speed {`$v_\\parallel$`}
                . Each drift tracks the part of the motion that causes it.
              </p>
            </details>
          </div>
        </>,

        <>
          <h2>The Second Invariant: The Longitudinal Invariant J</h2>
          <p>
            The bounce between mirror points is itself a slow back-and-forth motion. It is an
            oscillator, just much slower than the gyration. Apply the same idea one level up: a slow
            oscillator keeps an action fixed. For the bounce, that action is the{' '}
            <strong>longitudinal invariant</strong> {`$J$`}:
          </p>
          <div className="lrn-eq lrn-eq-hero">
            {`$$J = \\oint p_\\parallel\\,dl = \\oint m v_\\parallel\\,dl$$`}
          </div>
          <p>
            Here {`$p_\\parallel = mv_\\parallel$`} is the along-field momentum, {`$dl$`} is a small
            step along the field line, and the loop {`$\\oint$`} runs the full bounce from one
            mirror point to the other and back. {`$J$`} measures the along-field "swing" of one
            bounce. It stays fixed as long as the field changes slowly compared to the bounce.
          </p>
          <p>
            What does fixed {`$J$`} buy you? It pins the particle to a fixed pair of mirror points.
            Even if the field slowly reshapes, the particle always returns to the same field line
            and bounces between the same two ends. This is why trapped particles in Earth's belts
            keep their identity over many bounces.
          </p>

          <div className="lrn-callout">
            <span className="lrn-callout-label">Worked meaning</span>
            <p>
              Suppose the field slowly squeezes the bottle, pushing the two mirror points closer so
              the bounce path length halves. Holding {`$J = \\oint mv_\\parallel\\,dl$`} fixed with
              half the path means the average {`$v_\\parallel$`} must roughly double. The particle
              speeds up along the field. This is "Fermi acceleration": a shrinking magnetic bottle
              pumps energy into the bounce, and {`$J$`} tells you exactly how much.
            </p>
          </div>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>
              <strong>Explain to yourself:</strong> Why is {`$J$`} built from {`$v_\\parallel$`} and{' '}
              {`$dl$`} along the field, while {`$\\mu$`} is built from {`$v_\\perp$`} across it?
            </p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                Each invariant is the action of one motion. The gyration is across the field, so its
                action {`$\\mu$`} uses {`$v_\\perp$`}. The bounce is along the field, so its action{' '}
                {`$J$`} uses {`$v_\\parallel$`} integrated over the path {`$dl$`}. Same idea,
                applied to a slower motion.
              </p>
            </details>
          </div>
        </>,

        <>
          <h2>The Third Invariant: Enclosed Flux Φ</h2>
          <p>
            The drift carries the guiding center all the way around Earth. That slow circling is the
            third and slowest motion. Once more we apply the same rule, and the conserved action is
            a <strong>magnetic flux</strong>.
          </p>
          <p>
            First, two plain words. <strong>Flux</strong> is how much magnetic field passes through
            a loop, like how much water flows through a hoop held in a stream. The{' '}
            <strong>vector potential</strong> {`$\\mathbf{A}$`} is a helper field whose loop
            integral gives that flux: {`$\\Phi = \\oint\\mathbf{A}\\cdot d\\mathbf{l}$`} equals the
            field passing through the loop. With that, the third invariant is:
          </p>
          <div className="lrn-eq lrn-eq-hero">
            {`$$\\Phi = \\oint \\mathbf{A}\\cdot d\\mathbf{l}$$`}
          </div>
          <p>
            Here the loop {`$\\oint$`} is the full drift orbit around Earth. {`$\\Phi$`} is the
            total magnetic flux enclosed by that orbit. As long as the field changes slowly compared
            to the drift period, the particle slides to whatever radius keeps {`$\\Phi$`} fixed.
          </p>
          <p>
            <strong>When it holds and when it breaks:</strong> {`$\\Phi$`} is fixed only when the
            field changes more slowly than one full drift around the planet. A drift takes minutes
            to hours. A magnetic storm can reshape the field in minutes. That is fast compared to
            the drift, so {`$\\Phi$`} breaks first. When it breaks, particles move radially in or
            out to new orbits. That radial shuffling is how the radiation belts get refilled and
            drained.
          </p>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>
              <strong>Explain to yourself:</strong> A slow, smooth compression squeezes Earth's
              field inward. Which way must a trapped particle's drift orbit move to keep {`$\\Phi$`}{' '}
              fixed?
            </p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                Squeezing the field inward packs more field lines into the same area, so the field
                gets stronger. To enclose the same total flux {`$\\Phi$`} with a stronger field, the
                drift orbit must shrink. The particle moves inward, toward Earth. This is the radial
                transport that conserving {`$\\Phi$`} forces.
              </p>
            </details>
          </div>
        </>,

        <>
          <h2>The Hierarchy of Three Invariants</h2>
          <p>
            Now stack the three motions. They run on three very different clocks. The gyration is
            fastest, the bounce is in the middle, and the drift is slowest:
          </p>
          <div className="lrn-eq lrn-eq-hero">
            {`$$T_{\\rm gyration} \\ll T_{\\rm bounce} \\ll T_{\\rm drift}$$`}
          </div>
          <p>
            For a few-MeV electron in Earth's outer belt, those clocks are roughly: gyration about a
            microsecond, bounce about half a second, drift about ten minutes. Each motion has its
            own invariant, and each gap between clocks is a small parameter:
          </p>

          <div className="lrn-definition">
            <div className="lrn-definition-term">The Three Adiabatic Invariants</div>
            <div className="lrn-definition-desc">
              <div>
                <p>
                  <strong>First, {`$\\mu = \\frac{mv_\\perp^2}{2B}$`}</strong> (magnetic moment).
                  Belongs to the gyration, the fastest motion. Small parameter{' '}
                  {`$\\epsilon_1 = \\frac{T_{\\rm gyration}}{T_{\\rm bounce}}$`}. Good when the
                  field changes slowly across one gyration.
                </p>
                <p>
                  <strong>Second, {`$J = \\oint p_\\parallel\\,dl$`}</strong> (longitudinal
                  invariant). Belongs to the bounce between mirror points. Small parameter{' '}
                  {`$\\epsilon_2 = \\frac{T_{\\rm bounce}}{T_{\\rm drift}}$`}. Good when the field
                  changes slowly across one bounce.
                </p>
                <p>
                  <strong>Third, {`$\\Phi = \\oint\\mathbf{A}\\cdot d\\mathbf{l}$`}</strong>{' '}
                  (enclosed flux). Belongs to the drift around Earth, the slowest motion. Small
                  parameter {`$\\epsilon_3 = \\frac{T_{\\rm drift}}{T_{\\rm field\\,change}}$`}.
                  Good when the field changes slowly across one full drift.
                </p>
              </div>
            </div>
          </div>

          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              <strong>Predict:</strong> A solar storm reshapes Earth's field over about 10 minutes.
              A typical outer-belt electron drifts around the planet in about 10 minutes, bounces in
              half a second, and gyrates in a microsecond. Which invariant breaks first? Which
              survives?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                The third invariant {`$\\Phi$`} breaks first. Its motion, the drift, runs at the
                same 10-minute pace as the storm, so the field is no longer slow compared to it. The
                first invariant {`$\\mu$`} survives, because the microsecond gyration is still far
                faster than the storm. Invariants fail from the slowest motion up to the fastest.
              </p>
            </details>
          </div>

          <MagneticMomentInvariance />

          <div className="lrn-elaborate">
            <p>
              <strong>When does invariance fail?</strong>
            </p>
            <p>
              Each invariant needs its own clock to be slow. If the field changes fast enough to
              beat the gyration ({`$\\epsilon_1$`} no longer small), {`$\\mu$`} breaks, and the
              other two break with it. If only the drift clock is beaten ({`$\\epsilon_3$`} fails),
              then {`$\\mu$`} and {`$J$`} stay good while {`$\\Phi$`} drifts. This is exactly what a
              magnetic storm does: it kills {`$\\Phi$`} first and shuffles outer-belt particles in
              and out along new orbits.
            </p>
            <p>
              None of the three is ever perfectly exact. Even when its clock is slow, an invariant
              drifts by an exponentially small amount each cycle, far too small to see in any
              finite-order calculation. Over very long times that tiny drift can add up, which is
              one way particles slowly leak out of a trap.
            </p>
          </div>
        </>,

        <>
          <h2>The Loss Cone and Magnetic Confinement</h2>
          <p>
            We can now finish the loss cone exactly. A particle bounces only if it mirrors before it
            runs out of bottle. The cutoff comes straight from {`$\\mu$`} and energy conservation.
          </p>
          <p>
            At the midplane the field is weakest, {`$B_{\\rm min}$`}, and the pitch angle is{' '}
            {`$\\theta$`}. At the mirror point the field is strongest, {`$B_{\\rm max}$`}, and all
            the speed is across the field ({`$v_\\parallel = 0$`}). Setting {`$\\mu$`} equal at both
            ends gives the loss-cone angle:
          </p>
          <div className="lrn-eq lrn-eq-hero">
            {`$$\\sin^2\\theta_{\\rm lc} = \\frac{B_{\\rm min}}{B_{\\rm max}} = \\frac{1}{R_{\\rm m}}$$`}
          </div>
          <p>
            where {`$R_{\\rm m} = \\frac{B_{\\rm max}}{B_{\\rm min}}$`} is the{' '}
            <strong>mirror ratio</strong>. A particle reflects when its pitch angle is large enough,{' '}
            {`$\\sin^2\\theta > \\frac{1}{R_{\\rm m}}$`}. Writing{' '}
            {`$\\sin^2\\theta = \\frac{v_\\perp^2}{v_\\perp^2 + v_\\parallel^2}$`}, that trapping
            rule becomes
          </p>
          <div className="lrn-eq">{`$$v_\\parallel^2 < (R_{\\rm m} - 1)\\,v_\\perp^2.$$`}</div>
          <p>
            Particles with pitch angle {`$\\theta < \\theta_{\\rm lc}$`} fall inside the loss cone.
            They are not reflected. They reach the mirror throat and are lost. This cutoff drives
            fusion-bottle leakage and the rain of particles into Earth's upper air.
          </p>

          <LossCone />

          <h3>How Many Particles Stay Trapped</h3>
          <p>
            Suppose the particles fly in every direction equally (an isotropic spread). The fraction
            pointing into the loss cone, with pitch angle below {`$\\theta_{\\rm lc}$`} on either
            end, is the solid-angle fraction of two small cones:
          </p>
          <div className="lrn-eq lrn-eq-hero">
            {`$$f_{\\rm lost} = 1 - \\cos\\theta_{\\rm lc}, \\qquad f_{\\rm trapped} = \\cos\\theta_{\\rm lc}.$$`}
          </div>
          <p>
            A stronger mirror (larger {`$R_{\\rm m}$`}) shrinks {`$\\theta_{\\rm lc}$`}, which lifts{' '}
            {`$\\cos\\theta_{\\rm lc}$`} toward 1 and traps more particles. As{' '}
            {`$R_{\\rm m}\\to\\infty$`}, the loss cone closes and only particles aimed straight down
            the field escape.
          </p>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>
              <strong>Explain to yourself:</strong> Why does a stronger mirror (large{' '}
              {`$R_{\\rm m}$`}) confine more particles?
            </p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                Large {`$R_{\\rm m}$`} means {`$B_{\\rm max} \\gg B_{\\rm min}$`}, so{' '}
                {`$\\theta_{\\rm lc} = \\arcsin\\!\\left(\\frac{1}{\\sqrt{R_{\\rm m}}}\\right)$`}{' '}
                shrinks. Fewer particles have a pitch angle small enough to slip through. Most of
                the spread sits outside the cone and stays trapped. In the limit of an infinitely
                strong mirror, only particles aimed exactly along {`$\\mathbf{B}$`} get out.
              </p>
            </details>
          </div>

          <div className="lrn-elaborate">
            <p>
              <strong>Why is {`$\\mu$`} so much better than "almost conserved"?</strong>
            </p>
            <p>
              Each bounce changes {`$\\mu$`} by an amount that shrinks like{' '}
              {`$\\exp\\!\\left(-\\frac{b}{\\epsilon}\\right)$`}, far smaller than any power of{' '}
              {`$\\epsilon$`}. The reason is general. The change in a slow action per cycle depends
              on how close the motion comes to a sharp turn in complex time. A smooth bounce keeps
              that turn far away. So a single particle can bounce billions of times before{' '}
              {`$\\mu$`} drifts enough to matter.
            </p>
            <p>
              In practice, particles leak out faster than this when the bottle is not perfectly
              smooth. A lopsided or wobbling field lets {`$\\mu$`} take small random steps each
              bounce. Those steps add up like a random walk until the pitch angle wanders into the
              loss cone, and the particle falls out and rains down into the atmosphere.
            </p>
          </div>
        </>
      ]
    },
    practice: [
      {
        q: `A proton ($m = 1.67\\times 10^{-27}\\,\\text{kg}$, $q = 1.6\\times 10^{-19}\\,\\text{C}$) gyrates in a uniform field $B = 0.5\\,\\text{T}$ with perpendicular speed $v_\\perp = 2\\times 10^6\\,\\frac{\\text{m}}{\\text{s}}$. Find the gyrofrequency $\\Omega$ and the gyroradius $r_L$.`,
        a: `Gyrofrequency: $\\Omega = \\frac{qB}{m}$.

$\\Omega = \\frac{(1.6\\times 10^{-19})(0.5)}{1.67\\times 10^{-27}} \\approx 4.8\\times 10^7\\,\\frac{\\text{rad}}{\\text{s}}$.

That is about $7.6\\,\\text{MHz}$ in ordinary frequency.

Gyroradius: $r_L = \\frac{mv_\\perp}{qB} = \\frac{(1.67\\times 10^{-27})(2\\times 10^6)}{(1.6\\times 10^{-19})(0.5)}$.

$r_L \\approx 4.2\\times 10^{-2}\\,\\text{m} = 4.2\\,\\text{cm}$.

The proton circles millions of times each second in a circle a few centimeters wide.`
      },
      {
        q: `The same proton gyrates in a uniform field $B = 0.5\\,\\text{T}$ with $v_\\perp = 2\\times 10^6\\,\\frac{\\text{m}}{\\text{s}}$. Compute the magnetic moment $\\mu$.`,
        a: `Use $\\mu = \\frac{mv_\\perp^2}{2B}$.

$\\mu = \\frac{(1.67\\times 10^{-27})(2\\times 10^6)^2}{2 \\times 0.5} = \\frac{(1.67\\times 10^{-27})(4\\times 10^{12})}{1}$

$\\mu = 6.68\\times 10^{-15}\\,\\frac{\\text{J}}{\\text{T}}$

The magnetic moment stays fixed as long as $B$ changes slowly across one gyration.`
      },
      {
        q: `The field at a particle's location doubles slowly from $B_0$ to $2B_0$. The particle starts with $v_\\perp = v_0$ and $v_\\parallel = v_0$. Find $v_\\perp$ and $v_\\parallel$ after the field doubles.`,
        a: `Conserve $\\mu = \\frac{mv_\\perp^2}{2B}$. As $B$ doubles, $v_\\perp^2$ doubles.

New across-field speed: $v_\\perp' = \\sqrt{2}\\,v_0$.

Total speed is fixed (a static field does no work):
$v_\\parallel^2 + v_\\perp^2 = v_0^2 + v_0^2 = 2v_0^2$.

After: $v_{\\parallel}'^2 + 2v_0^2 = 2v_0^2$, so $v_{\\parallel}'^2 = 0$.

The particle has reached its mirror point and turns around.`
      },
      {
        q: `A magnetic mirror has $B_{\\rm min} = 0.1\\,\\text{T}$ at the midplane and $B_{\\rm max} = 0.8\\,\\text{T}$ at the mirror points. What is the loss-cone half-angle $\\theta_{\\rm lc}$?`,
        a: `The mirror ratio is $R_{\\rm m} = \\frac{B_{\\rm max}}{B_{\\rm min}} = \\frac{0.8}{0.1} = 8$.

Loss-cone condition: $\\sin^2\\theta_{\\rm lc} = \\frac{1}{R_{\\rm m}} = \\frac{1}{8}$.

$\\sin\\theta_{\\rm lc} = \\frac{1}{\\sqrt{8}} = \\frac{1}{2\\sqrt{2}}$.

$\\theta_{\\rm lc} = \\arcsin\\!\\left(\\frac{1}{2\\sqrt{2}}\\right) \\approx \\arcsin(0.354) \\approx 20.7°$.

Particles with pitch angle below $20.7°$ at the midplane escape through the mirror.`
      },
      {
        q: `A particle at the midplane has along-field speed $v_{\\parallel,0}$ and across-field speed $v_{\\perp,0}$. Write the condition for the particle to stay trapped, using $v_{\\parallel,0}$, $v_{\\perp,0}$, and the mirror ratio $R_{\\rm m}$.`,
        a: `Trapping needs the pitch angle $\\theta > \\theta_{\\rm lc}$, that is $\\sin^2\\theta > \\sin^2\\theta_{\\rm lc} = \\frac{1}{R_{\\rm m}}$.

At the midplane $\\sin^2\\theta = \\frac{v_{\\perp,0}^2}{v_{\\perp,0}^2 + v_{\\parallel,0}^2}$.

So the trapping rule is $\\frac{v_{\\perp,0}^2}{v_{\\perp,0}^2 + v_{\\parallel,0}^2} > \\frac{1}{R_{\\rm m}}$.

Clear the fraction: this is the same as $v_{\\parallel,0}^2 < (R_{\\rm m} - 1)\\,v_{\\perp,0}^2$.

Particles with small $v_\\parallel$ and large $v_\\perp$ stay trapped.`
      },
      {
        q: `A particle in a mirror machine has pitch angle $\\theta = 45°$ at the midplane where $B_{\\rm min} = 0.2\\,\\text{T}$. What mirror field $B_{\\rm max}$ reflects it?`,
        a: `At the mirror point $v_\\parallel = 0$, so $\\mu$ and energy conservation give $\\sin^2\\theta = \\frac{B_{\\rm min}}{B_{\\rm max}}$.

$\\sin^2(45°) = 0.5$.

$0.5 = \\frac{0.2}{B_{\\rm max}}$.

$B_{\\rm max} = \\frac{0.2}{0.5} = 0.4\\,\\text{T}$.

A field of $0.4\\,\\text{T}$ at the mirror reflects this particle. A weaker mirror lets it escape.`
      },
      {
        q: `PREDICT: A magnetic mirror has $R_{\\rm m} = 4$. You slowly raise it to $R_{\\rm m} = 16$ by increasing $B_{\\rm max}$ and keeping $B_{\\rm min}$ fixed. What happens to the loss-cone angle? Does the trapped fraction of an isotropic spread go up or down?`,
        a: `Loss-cone angle before: $\\sin^2\\theta_{\\rm lc} = \\frac{1}{4}$, so $\\theta_{\\rm lc} = 30°$.

Loss-cone angle after: $\\sin^2\\theta_{\\rm lc} = \\frac{1}{16}$, so $\\theta_{\\rm lc} = \\arcsin\\!\\left(\\frac{1}{4}\\right) \\approx 14.5°$.

The loss cone narrows. For an isotropic spread the lost fraction is $f_{\\rm lost} = 1 - \\cos\\theta_{\\rm lc}$.

Before: $1 - \\cos 30° \\approx 1 - 0.866 = 13.4\\%$ lost.

After: $1 - \\cos 14.5° \\approx 1 - 0.968 = 3.2\\%$ lost.

The trapped fraction rises from $86.6\\%$ to $96.8\\%$. Stronger mirror, better confinement.`
      },
      {
        q: `Compute the gradient-B drift speed for the proton ($m = 1.67\\times 10^{-27}\\,\\text{kg}$, $q = 1.6\\times 10^{-19}\\,\\text{C}$, $v_\\perp = 2\\times 10^6\\,\\frac{\\text{m}}{\\text{s}}$, $B = 0.5\\,\\text{T}$) when the field drops by $0.5\\,\\text{T}$ over $10^7\\,\\text{m}$. Why is this drift so much slower than the gyration?`,
        a: `Use $v_{\\nabla B} = \\frac{mv_\\perp^2}{2qB}\\,\\frac{|\\nabla B|}{B}$.

Field gradient: $|\\nabla B| = \\frac{0.5}{10^7} = 5\\times 10^{-8}\\,\\frac{\\text{T}}{\\text{m}}$, so $\\frac{|\\nabla B|}{B} = 10^{-7}\\,\\frac{1}{\\text{m}}$.

First factor: $\\frac{mv_\\perp^2}{2qB} = \\frac{(1.67\\times 10^{-27})(4\\times 10^{12})}{2(1.6\\times 10^{-19})(0.5)} \\approx 4.2\\times 10^4\\,\\frac{\\text{m}}{\\text{s}}$.

Multiply: $v_{\\nabla B} \\approx (4.2\\times 10^4)(10^{-7}) \\approx 4\\times 10^{-3}\\,\\frac{\\text{m}}{\\text{s}}$.

That is tiny next to the $2\\times 10^6\\,\\frac{\\text{m}}{\\text{s}}$ gyration speed. The drift is slow because it depends on the small fractional field change per gyroradius. That is why it sits at the bottom of the timescale hierarchy.`
      },
      {
        q: `A magnetic bottle slowly squeezes so the bounce path between mirror points halves. Using the second invariant $J = \\oint mv_\\parallel\\,dl$, estimate what happens to the along-field speed.`,
        a: `$J = \\oint mv_\\parallel\\,dl$ stays fixed during the slow squeeze.

Roughly, $J \\approx m\\,\\bar{v}_\\parallel \\times (\\text{path length})$, where $\\bar{v}_\\parallel$ is the average along-field speed.

Halving the path length and holding $J$ fixed forces $\\bar{v}_\\parallel$ to roughly double.

So the particle speeds up along the field. A shrinking bottle pumps energy into the bounce. This is Fermi acceleration, and $J$ tells you the trade exactly: shorter path means faster bounce.`
      },
      {
        q: `Use the third invariant to predict the motion. A slow, smooth compression strengthens Earth's field everywhere. Which way does a trapped particle's drift orbit move, and why?`,
        a: `The third invariant is the enclosed flux $\\Phi = \\oint\\mathbf{A}\\cdot d\\mathbf{l}$, the total field through the drift orbit.

A slow compression keeps $\\Phi$ fixed (the change is slower than one drift around Earth).

Compression packs field lines closer, so the field gets stronger.

To enclose the same flux $\\Phi$ with a stronger field, the orbit must shrink.

So the particle drifts inward, toward Earth. Conserving $\\Phi$ forces this radial transport. The reverse (a slow weakening) pushes particles outward.`
      },
      {
        q: `TRANSFER: A space physicist says the outer belt was refilled in 2 hours during a storm. The drift period of outer-belt electrons is about 10 minutes, the bounce period about 0.5 s, and the gyration about a microsecond. Which invariants break, and why?`,
        a: `Compare each motion's clock to the 2-hour process.

$\\mu$ (gyration, microseconds): 2 hours is billions of gyrations. Far slower than the gyration, so $\\mu$ is conserved.

$J$ (bounce, $\\approx 0.5\\,\\text{s}$): 2 hours is about $14000$ bounces. Still slow compared to the bounce, so $J$ is conserved.

$\\Phi$ (drift, $\\approx 10\\,\\text{min}$): 2 hours is only about $12$ drifts. For a rapid storm compression this is no longer slow, so $\\Phi$ breaks.

The third invariant $\\Phi$ fails. Particles move radially to new orbits. That radial shuffle is how the outer belt refills: particles slide inward and outward because $\\Phi$ is no longer fixed.`
      },
      {
        q: `Order the three invariants by which breaks first as a magnetic disturbance gets faster. Explain the ordering in one sentence.`,
        a: `They break from the slowest motion to the fastest: $\\Phi$ first, then $J$, then $\\mu$ last.

For a typical outer-belt electron the clocks are: gyration about a microsecond, bounce about half a second, drift about ten minutes.

A disturbance has to beat a motion's clock to break that motion's invariant.

A slow disturbance beats only the drift, so $\\Phi$ goes first. A faster one also beats the bounce, breaking $J$. Only a very fast disturbance beats the microsecond gyration and breaks $\\mu$.

So invariance is lost from the bottom of the hierarchy up.`
      }
    ],
    reference: {
      category: 'Quick Reference',
      title: 'Magnetic Adiabatic Invariants',
      sections: [
        <>
          <h2>Key Formulas</h2>

          <div className="lrn-definition">
            <div className="lrn-definition-term">Adiabatic Condition</div>
            <div className="lrn-definition-desc">
              <div>
                <p className="lrn-eq lrn-eq-hero">{`$$\\epsilon = \\frac{T_{\\rm fast}}{T_{\\rm slow}} \\ll 1$$`}</p>
                <p>
                  When to use: whenever a system parameter changes slowly relative to the natural
                  oscillation period. Controls the quality of all three invariants.
                </p>
              </div>
            </div>
          </div>

          <div className="lrn-definition">
            <div className="lrn-definition-term">Lorentz Force and Gyration</div>
            <div className="lrn-definition-desc">
              <div>
                <p className="lrn-eq lrn-eq-hero">{`$$\\mathbf{F} = q\\,\\mathbf{v}\\times\\mathbf{B}, \\quad \\Omega = \\frac{qB}{m}, \\quad r_L = \\frac{mv_\\perp}{qB}$$`}</p>
                <p>
                  When to use: the magnetic force is always sideways, so the charge circles.{' '}
                  {`$\\Omega$`} is the gyrofrequency, {`$r_L$`} the gyroradius (Larmor radius).
                </p>
              </div>
            </div>
          </div>

          <div className="lrn-definition">
            <div className="lrn-definition-term">Mirror Force</div>
            <div className="lrn-definition-desc">
              <div>
                <p className="lrn-eq lrn-eq-hero">{`$$F_\\parallel = -\\mu\\,\\frac{\\partial B}{\\partial z}$$`}</p>
                <p>
                  When to use: for the along-field motion of a guiding center in a field gradient. A
                  narrowing field pushes the particle back and sets the mirror points.
                </p>
              </div>
            </div>
          </div>

          <div className="lrn-definition">
            <div className="lrn-definition-term">Loss-Cone Condition</div>
            <div className="lrn-definition-desc">
              <div>
                <p className="lrn-eq lrn-eq-hero">{`$$\\sin^2\\theta_{\\rm lc} = \\frac{B_{\\rm min}}{B_{\\rm max}} = \\frac{1}{R_{\\rm m}}$$`}</p>
                <p>
                  When to use: to tell which particles in a mirror are trapped or lost. Particles
                  with {`$\\theta < \\theta_{\\rm lc}$`} escape. Isotropic lost fraction{' '}
                  {`$1 - \\cos\\theta_{\\rm lc}$`}.
                </p>
              </div>
            </div>
          </div>

          <div className="lrn-definition">
            <div className="lrn-definition-term">Guiding-Center Drifts</div>
            <div className="lrn-definition-desc">
              <div>
                <p className="lrn-eq lrn-eq-hero">{`$$\\mathbf{v}_{\\nabla B} = \\frac{mv_\\perp^2}{2qB^3}\\mathbf{B}\\times\\nabla B, \\quad v_R = \\frac{mv_\\parallel^2}{qBR_c}$$`}</p>
                <p>
                  When to use: the gradient-B drift comes from a nonuniform field, the curvature
                  drift from a bent field line. Both slide the guiding center sideways and set up
                  the drift around Earth.
                </p>
              </div>
            </div>
          </div>

          <h2>The Three-Invariant Hierarchy</h2>
          <table
            className="lrn-compare"
            style={{ width: '100%', borderCollapse: 'collapse', marginTop: '1rem' }}
          >
            <thead>
              <tr>
                <th
                  style={{
                    textAlign: 'left',
                    padding: '8px',
                    borderBottom: '1px solid var(--border-subtle)',
                    fontFamily: "'D-DIN', monospace",
                    fontSize: '12px',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase'
                  }}
                >
                  Invariant
                </th>
                <th
                  style={{
                    textAlign: 'left',
                    padding: '8px',
                    borderBottom: '1px solid var(--border-subtle)',
                    fontFamily: "'D-DIN', monospace",
                    fontSize: '12px',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase'
                  }}
                >
                  Motion
                </th>
                <th
                  style={{
                    textAlign: 'left',
                    padding: '8px',
                    borderBottom: '1px solid var(--border-subtle)',
                    fontFamily: "'D-DIN', monospace",
                    fontSize: '12px',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase'
                  }}
                >
                  Timescale
                </th>
                <th
                  style={{
                    textAlign: 'left',
                    padding: '8px',
                    borderBottom: '1px solid var(--border-subtle)',
                    fontFamily: "'D-DIN', monospace",
                    fontSize: '12px',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase'
                  }}
                >
                  Small Parameter
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td
                  style={{ padding: '8px', borderBottom: '1px solid var(--border-subtle)' }}
                >{`$\\mu = \\frac{mv_\\perp^2}{2B}$`}</td>
                <td style={{ padding: '8px', borderBottom: '1px solid var(--border-subtle)' }}>
                  Gyration
                </td>
                <td style={{ padding: '8px', borderBottom: '1px solid var(--border-subtle)' }}>
                  Fastest
                </td>
                <td
                  style={{ padding: '8px', borderBottom: '1px solid var(--border-subtle)' }}
                >{`$\\epsilon_1 = \\frac{T_{\\rm gyration}}{T_{\\rm bounce}}$`}</td>
              </tr>
              <tr>
                <td
                  style={{ padding: '8px', borderBottom: '1px solid var(--border-subtle)' }}
                >{`$J = \\oint p_\\parallel dl$`}</td>
                <td style={{ padding: '8px', borderBottom: '1px solid var(--border-subtle)' }}>
                  Bounce
                </td>
                <td style={{ padding: '8px', borderBottom: '1px solid var(--border-subtle)' }}>
                  Intermediate
                </td>
                <td
                  style={{ padding: '8px', borderBottom: '1px solid var(--border-subtle)' }}
                >{`$\\epsilon_2 = \\frac{T_{\\rm bounce}}{T_{\\rm drift}}$`}</td>
              </tr>
              <tr>
                <td
                  style={{ padding: '8px' }}
                >{`$\\Phi = \\oint \\mathbf{A}\\cdot d\\mathbf{l}$`}</td>
                <td style={{ padding: '8px' }}>Drift orbit</td>
                <td style={{ padding: '8px' }}>Slowest</td>
                <td
                  style={{ padding: '8px' }}
                >{`$\\epsilon_3 = \\frac{T_{\\rm drift}}{T_{\\rm field}}$`}</td>
              </tr>
            </tbody>
          </table>

          <h2>Key Concepts</h2>
          <ul className="lrn-list">
            <li>
              A static magnetic field does no work. The total speed{' '}
              {`$\\sqrt{v_\\parallel^2 + v_\\perp^2}$`} is fixed; the field only turns the velocity.
            </li>
            <li>
              Three motions, three clocks:{' '}
              {`$T_{\\rm gyration} \\ll T_{\\rm bounce} \\ll T_{\\rm drift}$`}. Each motion has its
              own invariant: {`$\\mu$`}, {`$J$`}, {`$\\Phi$`}.
            </li>
            <li>
              The invariants break from the slowest motion up: {`$\\Phi$`} first, then {`$J$`}, then{' '}
              {`$\\mu$`} last. A disturbance must beat a motion's clock to break its invariant.
            </li>
            <li>
              Gradient-B and curvature drifts slide the guiding center sideways. They circle the
              particle around Earth and set up the third invariant {`$\\Phi$`}.
            </li>
            <li>
              Each invariant is conserved to all finite orders in {`$\\epsilon$`}. The only
              violation per cycle is exponentially small:{' '}
              {`$\\sim\\exp\\!\\left(-\\frac{b}{\\epsilon}\\right)$`}.
            </li>
          </ul>
        </>
      ]
    },
    customCss: null
  }
  return config
}

export default function MagneticAdiabaticInvariants() {
  const config = useConfig()
  return <LearningTemplate config={config} />
}
