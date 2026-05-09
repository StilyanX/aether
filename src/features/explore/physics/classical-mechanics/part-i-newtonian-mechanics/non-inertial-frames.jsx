import { LearningTemplate } from '../../../../../components/learning/learning-template'
import { CoriolisDrop } from '../../../../../components/viz/physics-viz/modules'

function NonInertialFramesContentInner() {


  const config = {
    cssPrefix: 'rbd',
    source: 'Mechanics (Course of Theoretical Physics, Vol. 1) - Landau & Lifshitz',
    documentTitle: 'Non-inertial Frames - AETHER',
    learning: {
      groupTitle: 'Part I: Newtonian Mechanics',
      category: 'Physics',
      title: 'Non-inertial Frames',
      subtitle:
        'Rotating and translating reference frames, inertia forces, Coriolis and centrifugal effects',
      sections: [
        // ── Section 0: Foundations ──────────────────────────────────────────
        <>
          <div className="lrn-section" id="lrn-section-0" data-section-index="0">
            <h2>Foundations: Inertial vs. Non-inertial Frames</h2>
            <p>
              Every mechanics problem starts with the same choice: from what vantage point do you
              watch the motion? That vantage point is your <em>reference frame</em>.
            </p>
            <p>
              An <strong>inertial frame</strong> is one that does not speed up, slow down, or
              rotate. In a frame like this, Newton's second law holds in its plain form: force
              equals mass times acceleration, with no extra terms on the right.
            </p>
            <p>
              Most real frames are not inertial. A lab on Earth's surface spins with the planet once
              a day. A car brakes at red lights. The moment you describe motion from a frame that
              moves like this, new terms appear in the equations of motion.
            </p>
            <p>
              These terms are not real forces. Nothing is physically pushing on the object. They are
              bookkeeping for the frame's own motion. Once you know how to write them down, you can
              solve problems on Earth, on a turntable, or in an accelerating car directly, without
              first switching back to a stationary frame.
            </p>

            <div className="lrn-predict">
              <span className="lrn-predict-label">PREDICT</span>
              <p>
                You sit inside a sealed train car. The car can move any way it likes. Without
                looking outside, what kinds of motion can you not detect?
              </p>
              <details className="lrn-predict-reveal">
                <summary>Check your thinking</summary>
                <p>
                  Only motion at a steady speed in a straight line is undetectable. This is
                  Galileo's relativity principle: any two frames drifting past each other at
                  constant velocity describe physics the same way.
                </p>
                <p>
                  Acceleration and rotation, on the other hand, give themselves away. A coffee cup
                  slides across the table when the train brakes; you lean into a corner when it
                  turns. Those are inertia forces you can feel from inside.
                </p>
              </details>
            </div>

            <div className="lrn-definition">
              <span className="lrn-definition-term">Inertial Frame</span>
              <div className="lrn-definition-desc">
                <p>{`A reference frame that does not accelerate and does not rotate. Newton's laws hold in their plain form: $\\mathbf{F} = m\\mathbf{a}$. The Lagrangian, the function from which the equations of motion are derived, is $L_0 = \\frac{1}{2}mv_0^2 - U$, where $\\frac{1}{2}mv_0^2$ is the kinetic energy and $U$ is the potential energy.`}</p>
              </div>
            </div>

            <div className="lrn-definition">
              <span className="lrn-definition-term">Non-inertial Frame</span>
              <div className="lrn-definition-desc">
                <p>
                  A reference frame that accelerates in a straight line, rotates, or both. Its
                  overall acceleration is written <strong>W</strong>(t), and its rate of rotation is
                  the angular velocity <strong>Ω</strong>: a vector that points along the rotation
                  axis with magnitude equal to the spin rate in radians per second.
                </p>
                <p>
                  Switching to such a frame inserts extra terms into the Lagrangian. Those terms
                  show up in the equations of motion as the inertia forces you feel.
                </p>
              </div>
            </div>

            <h3>Worked Example: Spotting Inertial Frames</h3>
            <p>For each frame below, decide whether it is inertial:</p>
            <ul className="lrn-list">
              <li>A train cruising at 30 m/s on a straight, level track: inertial.</li>
              <li>{`A car braking at 4 m/s${'²'}: non-inertial (it is accelerating).`}</li>
              <li>A merry-go-round turning at 1 rad/s: non-inertial (it is rotating).</li>
              <li>A spaceship coasting in deep space with its engines off: inertial.</li>
              <li>{`A lab on Earth's surface: technically non-inertial, since Earth rotates at $\\Omega \\approx 7.3\\times10^{-5}$ rad/s.`}</li>
            </ul>
            <p>
              Earth's spin is so slow that, for most everyday problems, treating an Earth-fixed lab
              as inertial gives the right answer to many decimal places. You can swing a hammer or
              throw a ball without ever thinking about it.
            </p>
            <p>
              When the problem stretches over long distances or long times, like artillery shells,
              ocean currents, or the Foucault pendulum, that slow spin has time to bend the path.
              Then the non-inertial terms matter.
            </p>

            <div className="lrn-self-explain">
              <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
              <p>
                Why does Newtonian mechanics call a freely falling lift non-inertial, while general
                relativity calls the same lift inertial? Try to answer before reading on.
              </p>
              <details className="lrn-self-explain-reveal">
                <summary>Expert explanation</summary>
                <p>
                  In Newtonian mechanics, gravity is a real force. The lift accelerates downward at{' '}
                  {`$g$`}, and any accelerating frame is non-inertial by definition.
                </p>
                <p>
                  In general relativity, gravity is not a force at all. It is the curvature of
                  spacetime. An object in free fall feels no net force, so the falling lift is,
                  locally, an inertial frame.
                </p>
                <p>
                  The disagreement is not about the lift. It is about what each theory calls a force
                  in the first place.
                </p>
              </details>
            </div>

            <div className="lrn-elaborate">
              <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
              <p>
                The principle of least action holds in every frame, inertial or not. The action is{' '}
                {`$S = \\int L\\,dt$`}: the time-integral of the Lagrangian along a candidate path.
                Out of all the paths a particle could take, nature selects the one that makes{' '}
                {`$S$`} stationary, and that selection rule is what produces Lagrange's equations of
                motion.
              </p>
              <p>
                None of that depends on the choice of frame. What changes from frame to frame is the
                Lagrangian {`$L$`} itself.
              </p>
              <p>
                {`In an inertial frame, $L_0 = \\frac{1}{2}mv_0^2 - U$. To rewrite $L_0$ for a non-inertial frame, we express the inertial-frame velocity $\\mathbf{v}_0$ in terms of the velocity measured in the new frame. New, frame-dependent pieces appear.`}
              </p>
              <p>
                When those pieces are fed back through Lagrange's equations, they emerge as the
                inertia forces: Coriolis, centrifugal, and the translational {`$-m\\mathbf{W}$`}.
              </p>
            </div>
          </div>
        </>,
        // ── Section 1: Motion in a Non-inertial Frame ───────────────────────
        <>
          <div className="lrn-section" id="lrn-section-1" data-section-index="1">
            <h2>Motion in a Non-inertial Frame</h2>
            <p>
              Some problems carry rotation built in: anything happening on Earth's surface, on a
              turntable, inside a centrifuge, or aboard a spinning station. Insisting on an inertial
              frame for these problems forces you to track the rotation by hand at every step. It is
              far cleaner to sit inside the rotating frame and pay for the convenience with a few
              extra terms in the equations of motion. This section derives those terms.
            </p>

            <div className="lrn-predict">
              <span className="lrn-predict-label">PREDICT</span>
              <p>
                Imagine releasing a ball from rest at the top of a tall tower. Relative to the
                ground, where does it land: directly below the drop point, or off to one side?
              </p>
              <details className="lrn-predict-reveal">
                <summary>Check your thinking</summary>
                <p>
                  It lands slightly east of the base. The top of the tower swings around Earth's
                  axis on a larger circle than the base, so it is moving eastward a little faster.
                  The ball inherits that extra eastward speed at the moment of release, and it keeps
                  it the whole way down. This is the Coriolis effect, seen from outside.
                </p>
              </details>
            </div>

            <h3>Step 1: A Frame That Slides</h3>
            <p>
              We build the result in two stages. First, take an inertial frame {`$K_0$`} and a
              second frame {`$K'$`} that slides past it: it can speed up or slow down, but it does
              not rotate. Call its velocity <strong>V</strong>(t).
            </p>
            <p>
              A particle's velocity in the inertial frame, {`$\\mathbf{v}_0$`}, and its velocity in
              the sliding frame, {`$\\mathbf{v}'$`}, are related by simple addition: each observer's
              velocity equals the other observer's velocity plus the frame's own:
            </p>
            <div className="lrn-eq">
              <span>{`$$\\mathbf{v}_0 = \\mathbf{v}' + \\mathbf{V}(t)$$`}</span>
            </div>
            <p>
              Plug this into {`$L_0$`}, expand, and discard the piece that turns out to be a total
              time derivative. (Total derivatives in a Lagrangian shift the action by a constant and
              never affect the equations of motion.) What remains is the Lagrangian in the sliding
              frame:
            </p>
            <div className="lrn-eq">
              <span>{`$$L' = \\frac{1}{2}m v'^2 - m\\mathbf{W}(t)\\cdot\\mathbf{r}' - U$$`}</span>
            </div>
            <p>
              {`Here $\\mathbf{W} = \\dot{\\mathbf{V}}$ is the acceleration of the sliding frame itself, that is, how fast its velocity is changing.`}
            </p>
            <p>Lagrange's equations then give:</p>
            <div className="lrn-eq">
              <span>{`$$m\\,\\frac{d\\mathbf{v}'}{dt} = -\\frac{\\partial U}{\\partial \\mathbf{r}'} - m\\mathbf{W}(t)$$`}</span>
            </div>
            <p>
              The new term {`$-m\\mathbf{W}$`} is the same at every point in the frame, so it
              behaves like a uniform pseudo-gravity. The forward jolt that throws you toward the
              windshield when a bus brakes is exactly this term: the bus's deceleration, dressed up
              as a force.
            </p>

            <div className="lrn-elaborate">
              <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
              <p>
                {`Square the velocity: $v_0^2 = v'^2 + 2\\mathbf{v}'\\cdot\\mathbf{V} + V^2$. Multiply by $\\frac{1}{2}m$ and substitute into $L_0$. Three pieces appear.`}
              </p>
              <p>
                {`The piece $\\frac{1}{2}mV^2$ depends only on time (the frame's velocity), not on the particle's position or its velocity in the new frame. A term like that cannot affect the particle's motion, so we drop it.`}
              </p>
              <p>
                {`The cross-term $m\\mathbf{v}'\\cdot\\mathbf{V}$ does more work. Using $\\mathbf{v}' = \\dot{\\mathbf{r}}'$, rewrite it as $\\frac{d}{dt}(m\\mathbf{r}'\\cdot\\mathbf{V}) - m\\mathbf{r}'\\cdot\\dot{\\mathbf{V}}$.`}
              </p>
              <p>
                {`Total derivatives in a Lagrangian also drop out (they shift the action by a constant). What survives is $-m\\mathbf{r}'\\cdot\\mathbf{W}$, the new potential-like term you see in $L'$ above.`}
              </p>
            </div>

            <h3>Step 2: Add Rotation</h3>
            <p>Now let the frame rotate as well, with angular velocity {`$\\mathbf{\\Omega}$`}.</p>
            <p>
              When a frame rotates, a point sitting at position {`$\\mathbf{r}$`} inside it is being
              carried around at velocity {`$\\mathbf{\\Omega}\\times\\mathbf{r}$`} as seen from
              outside. (The cross product gives a vector tangent to the circle of radius{' '}
              {`$|\\mathbf{r}|$`} swept around the rotation axis, with magnitude equal to the
              circumferential speed.) So the velocity of a particle measured from the inertial frame
              is its velocity in the rotating frame, {`$\\mathbf{v}$`}, plus the carry-along piece:
            </p>
            <div className="lrn-eq">
              <span>{`$$\\mathbf{v}_0 = \\mathbf{v} + \\mathbf{\\Omega}\\times\\mathbf{r}$$`}</span>
            </div>
            <p>
              Square this, plug it into the kinetic energy, and fold in the translation we already
              handled. The Lagrangian in the rotating, translating frame becomes:
            </p>
            <div className="lrn-eq lrn-eq-display">
              <span>{`$$L = \\frac{1}{2}mv^2 + m\\mathbf{v}\\cdot(\\mathbf{\\Omega}\\times\\mathbf{r}) + \\frac{1}{2}m(\\mathbf{\\Omega}\\times\\mathbf{r})^2 - m\\mathbf{W}\\cdot\\mathbf{r} - U$$`}</span>
            </div>
            <p>
              Each new term has a job. The cross product{' '}
              {`$m\\mathbf{v}\\cdot(\\mathbf{\\Omega}\\times\\mathbf{r})$`} couples velocity to
              rotation and will produce the Coriolis force. The squared cross product depends only
              on position and will produce the centrifugal force. The{' '}
              {`$-m\\mathbf{W}\\cdot\\mathbf{r}$`} term is the translational pseudo-gravity from
              Step 1, carried along.
            </p>

            <h3>The Inertia Forces</h3>
            <p>
              Feeding the rotating-frame Lagrangian through Lagrange's equations gives the equation
              of motion:
            </p>
            <div className="lrn-eq lrn-eq-display">
              <span>{`$$m\\frac{d\\mathbf{v}}{dt} = -\\frac{\\partial U}{\\partial \\mathbf{r}} - m\\mathbf{W} + m\\mathbf{r}\\times\\dot{\\mathbf{\\Omega}} + 2m\\mathbf{v}\\times\\mathbf{\\Omega} + m\\mathbf{\\Omega}\\times(\\mathbf{r}\\times\\mathbf{\\Omega})$$`}</span>
            </div>
            <p>
              The first term on the right is the real force from the potential {`$U$`}. Everything
              after it is an <strong>inertia force</strong>: a term that looks like a force on the
              page but exists only because the frame itself is moving. The four are:
            </p>
            <ul className="lrn-list">
              <li>
                {`$-m\\mathbf{W}$ - the translational inertia force, present whenever the frame's velocity is changing (like the bus example).`}
              </li>
              <li>
                {`$m\\mathbf{r}\\times\\dot{\\mathbf{\\Omega}}$ - the Euler force, present only when the rotation rate itself is changing, as on a turntable that is spinning up.`}
              </li>
              <li>
                {`$2m\\mathbf{v}\\times\\mathbf{\\Omega}$ - the Coriolis force, felt by anything moving inside the rotating frame.`}
              </li>
              <li>
                {`$m\\mathbf{\\Omega}\\times(\\mathbf{r}\\times\\mathbf{\\Omega})$ - the centrifugal force, felt by anything sitting away from the rotation axis.`}
              </li>
            </ul>

            <div className="lrn-compare">
              <div className="lrn-compare-col">
                <span className="lrn-compare-title">Coriolis Force</span>
                <p>{`$2m\\,\\mathbf{v}\\times\\mathbf{\\Omega}$`}</p>
                <p>Depends on how fast the particle is moving in the rotating frame.</p>
                <p>
                  Always points perpendicular to the motion, so it does no work. It only bends the
                  path; it never speeds it up or slows it down.
                </p>
                <p>Sends falling objects eastward and steers the rotation of cyclones.</p>
              </div>
              <div className="lrn-compare-col">
                <span className="lrn-compare-title">Centrifugal Force</span>
                <p>{`$m\\,\\mathbf{\\Omega}\\times(\\mathbf{r}\\times\\mathbf{\\Omega})$`}</p>
                <p>Depends only on where the particle is, not on how it moves.</p>
                <p>
                  Points straight outward from the rotation axis. It is what tries to throw you off
                  a merry-go-round.
                </p>
                <p>
                  Has a potential energy{' '}
                  {`$U_{\\text{cf}} = -\\frac{1}{2}m(\\mathbf{\\Omega}\\times\\mathbf{r})^2$`}, so
                  it can be folded into an effective potential.
                </p>
              </div>
            </div>

            <div className="lrn-self-explain">
              <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
              <p>
                Why does the Coriolis force disappear the moment a particle stops moving in the
                rotating frame? Try to answer before reading on.
              </p>
              <details className="lrn-self-explain-reveal">
                <summary>Expert explanation</summary>
                <p>
                  The Coriolis force is {`$2m\\mathbf{v}\\times\\mathbf{\\Omega}$`}, where{' '}
                  {`$\\mathbf{v}$`} is the velocity an observer riding inside the rotating frame
                  would measure.
                </p>
                <p>
                  {`If the particle is at rest in that frame, $\\mathbf{v} = 0$, and any cross product with the zero vector is zero.`}
                </p>
                <p>
                  The same particle still feels the centrifugal force, because that one depends only
                  on position. So a stone glued to a spinning disk gets pushed outward, but is not
                  deflected sideways.
                </p>
              </details>
            </div>

            <h3>Energy in the Rotating Frame</h3>
            <p>
              Read off the canonical momentum from the rotating-frame Lagrangian by differentiating
              with respect to velocity,{' '}
              {`$\\mathbf{p} = \\dfrac{\\partial L}{\\partial \\mathbf{v}}$`}:
            </p>
            <div className="lrn-eq">
              <span>{`$$\\mathbf{p} = m\\mathbf{v} + m\\mathbf{\\Omega}\\times\\mathbf{r}$$`}</span>
            </div>
            <p>
              The energy (the Hamiltonian) is then {`$E = \\mathbf{p}\\cdot\\mathbf{v} - L$`}, which
              works out to:
            </p>
            <div className="lrn-eq">
              <span>{`$$E = \\frac{1}{2}mv^2 - \\frac{1}{2}m(\\mathbf{\\Omega}\\times\\mathbf{r})^2 + U$$`}</span>
            </div>
            <p>
              Compared with the inertial-frame energy, this version has an extra negative term,{' '}
              {`$-\\frac{1}{2}m(\\mathbf{\\Omega}\\times\\mathbf{r})^2$`}. That is the centrifugal
              potential: in the rotating frame, points farther from the axis sit at lower energy.
            </p>
            <p>
              When {`$\\mathbf{\\Omega}$`} is constant in time, the two energies are linked by a
              clean exact relation:
            </p>
            <div className="lrn-eq lrn-eq-display">
              <span>{`$$E = E_0 - \\mathbf{M}\\cdot\\mathbf{\\Omega}$$`}</span>
            </div>
            <p>
              Here {`$E_0$`} is the energy you would measure in the inertial frame, and{' '}
              {`$\\mathbf{M} = \\mathbf{r}\\times m\\mathbf{v}_0$`} is the angular momentum (also
              computed in the inertial frame). The two energies disagree by exactly the part of the
              angular momentum that lines up with the rotation axis.
            </p>

            <div className="lrn-elaborate">
              <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
              <p>
                {`Start from the inertial-frame energy $E_0 = \\frac{1}{2}mv_0^2 + U$ and expand $v_0^2$ using $\\mathbf{v}_0 = \\mathbf{v} + \\mathbf{\\Omega}\\times\\mathbf{r}$.`}
              </p>
              <p>
                {`The cross-term that appears is $m\\,\\mathbf{v}\\cdot(\\mathbf{\\Omega}\\times\\mathbf{r})$. Cycling the dot and the cross (the standard scalar-triple-product identity $\\mathbf{a}\\cdot(\\mathbf{b}\\times\\mathbf{c}) = \\mathbf{b}\\cdot(\\mathbf{c}\\times\\mathbf{a})$), this becomes $\\mathbf{\\Omega}\\cdot(\\mathbf{r}\\times m\\mathbf{v}) = \\mathbf{\\Omega}\\cdot\\mathbf{M}$.`}
              </p>
              <p>
                {`Collecting the remaining pieces of the kinetic energy gives $E_0 = E + \\mathbf{M}\\cdot\\mathbf{\\Omega}$, which rearranges to the relation above.`}
              </p>
            </div>

            <h3>Worked Example: Foucault's Pendulum</h3>
            <p>
              Hang a long, heavy pendulum and start it swinging in a single vertical plane. Hours
              later, the plane of swing has rotated. Nothing about the pendulum changed; the floor
              underneath did. Seen from outside Earth, the pendulum's plane is staying fixed in
              space, while Earth turns underneath it.
            </p>
            <p>
              Inside the Earth-fixed frame, the same effect appears as a Coriolis term that tips the
              swing direction a little on every cycle. The plane of oscillation precesses at a rate:
            </p>
            <div className="lrn-eq">
              <span>{`$$\\omega_{\\text{prec}} = \\Omega\\sin\\lambda$$`}</span>
            </div>
            <p>
              {`Here $\\Omega$ is Earth's spin rate and $\\lambda$ is the latitude. At the North Pole ($\\lambda = 90°$, $\\sin\\lambda = 1$), the plane makes one full rotation in a sidereal day. At the equator ($\\lambda = 0$, $\\sin\\lambda = 0$), the pendulum does not precess at all.`}
            </p>

            <div className="lrn-self-explain">
              <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
              <p>
                Why does the Foucault pendulum precess more slowly at lower latitudes? Try to answer
                before reading on.
              </p>
              <details className="lrn-self-explain-reveal">
                <summary>Expert explanation</summary>
                <p>
                  The Coriolis force is {`$2m\\mathbf{v}\\times\\mathbf{\\Omega}$`}, so only the
                  part of {`$\\mathbf{\\Omega}$`} that the pendulum's swinging velocity actually
                  crosses with matters.
                </p>
                <p>
                  Split {`$\\mathbf{\\Omega}$`} into a vertical component (pointing straight up out
                  of the ground at your feet) and a horizontal component (tangent to the surface,
                  pointing toward the pole). Only the vertical component lies in the same plane as
                  the pendulum's back-and-forth motion, and only it produces a sideways deflection
                  of the swing.
                </p>
                <p>
                  That vertical component is {`$\\Omega_z = \\Omega\\sin\\lambda$`}. It is largest
                  at the poles ({`$\\sin\\lambda = 1$`}) and zero at the equator (
                  {`$\\sin\\lambda = 0$`}).
                </p>
                <p>
                  The horizontal piece of {`$\\mathbf{\\Omega}$`} would push the pendulum bob
                  slightly up or down, but the string's tension absorbs that and you never see it.
                </p>
              </details>
            </div>

            <div className="lrn-callout">
              <span className="lrn-callout-label">Simulation</span>
              <p>
                The white ball drops straight down. The coloured ball is given a small sideways push
                at release and curves as it falls. The canvas itself is not rotating, but the bent
                trajectory mirrors how the Coriolis force bends any object that has horizontal
                velocity inside a rotating frame.
              </p>
            </div>
            <CoriolisDrop />

            <div className="lrn-faded">
              <div className="lrn-faded-phase">
                <span className="lrn-faded-label">COMPLETE EXAMPLE</span>
                <ul className="lrn-list">
                  <li>
                    {`A ball is released from rest at height $h$ above Earth's surface, at latitude $\\lambda$.`}
                  </li>
                  <li>
                    {`In the rotating frame, the Coriolis force on the ball is $\\mathbf{F}_{\\text{Cor}} = 2m\\mathbf{v}\\times\\mathbf{\\Omega}$.`}
                  </li>
                  <li>{`While falling, the downward speed is $v_z \\approx gt$.`}</li>
                  <li>
                    {`The eastward part of the Coriolis force works out to $F_x = 2m\\,v_z\\,\\Omega\\cos\\lambda$.`}
                  </li>
                  <li>
                    {`Integrate twice in time. The eastward deflection grows as $x = \\tfrac{1}{3}g\\,t^3\\,\\Omega\\cos\\lambda$.`}
                  </li>
                  <li>
                    {`Substitute the fall time $t = \\sqrt{\\tfrac{2h}{g}}$ to get $x = \\tfrac{1}{3}\\Omega\\cos\\lambda\\sqrt{\\tfrac{8h^3}{g}}$.`}
                  </li>
                </ul>
              </div>
              <div className="lrn-faded-phase">
                <span className="lrn-faded-label">YOUR TURN (PARTIAL)</span>
                <ul className="lrn-list">
                  <li>
                    Identify which component of {`$\\mathbf{\\Omega}$`} produces the eastward
                    deflection.
                  </li>
                  <li>Write the eastward part of the Coriolis force.</li>
                  <li>
                    Integrate it to get the deflection as a function of time. (The final algebra is
                    yours.)
                  </li>
                </ul>
              </div>
              <div className="lrn-faded-phase">
                <span className="lrn-faded-label">INDEPENDENT PRACTICE</span>
                <ul className="lrn-list">
                  <li>
                    {`A ball is thrown horizontally due north at speed $v_0$, on Earth's surface at latitude $\\lambda$.`}
                  </li>
                  <li>{`Find its eastward deflection after time $t$ from the Coriolis force.`}</li>
                </ul>
              </div>
            </div>

            <div className="lrn-insight">
              <strong>Key insight:</strong> The relation{' '}
              {`$E = E_0 - \\mathbf{M}\\cdot\\mathbf{\\Omega}$`} is exact, not an approximation.
              Switching from an inertial frame to a uniformly rotating one shifts the energy by
              exactly the part of the angular momentum that lines up with the rotation axis.
            </div>

            <div className="lrn-compare">
              <div className="lrn-compare-col">
                <span className="lrn-compare-title">Inertial Frame</span>
                <p>{`Lagrangian: $L_0 = \\frac{1}{2}mv_0^2 - U$.`}</p>
                <p>No inertia forces. The equations of motion are as clean as they get.</p>
                <p>
                  Best when the problem has no built-in rotation: orbits, projectiles, collisions,
                  springs.
                </p>
              </div>
              <div className="lrn-compare-col">
                <span className="lrn-compare-title">Rotating Frame</span>
                <p>
                  Lagrangian picks up the Coriolis, centrifugal, Euler, and translational terms.
                </p>
                <p>Those show up as inertia forces in the equation of motion.</p>
                <p>
                  Best for problems on Earth's surface, on a turntable, inside a centrifuge, or
                  wherever the natural setting is itself spinning.
                </p>
              </div>
            </div>
          </div>
        </>
      ]
    },

    practice: [
      {
        q: 'In a frame rotating at angular velocity Omega, what is the Coriolis force, and when does it disappear?',
        a: 'The Coriolis force is 2mv cross Omega, where v is the particle velocity measured in the rotating frame. It disappears whenever v = 0, that is, whenever the particle is sitting still in the rotating frame. Because it is always perpendicular to v, it does no work: it bends the path but never changes the speed.'
      },
      {
        q: 'A ball is released on a turntable that is rotating counterclockwise at angular velocity Omega. It slides outward without friction. Which way does it deflect?',
        a: 'It deflects clockwise, that is, to the right as seen by an observer on the turntable. As the ball moves outward along the radial direction, the Coriolis force 2mv cross Omega points sideways. For counterclockwise rotation (Omega along +z), that sideways push is clockwise. The centrifugal force is what drives it outward in the first place; the Coriolis force only bends the path.'
      }
    ],

    // ── Reference Mode ──────────────────────────────────────────────────────
    reference: {
      category: 'Quick Reference',
      title: 'Non-inertial Frames',
      sections: [
        <>
          <div className="ref">
            <h2>Non-inertial Frames</h2>

            <div className="lrn-definition">
              <span className="lrn-definition-term">Lagrangian in non-inertial frame</span>
              <div className="lrn-definition-desc">
                <div className="lrn-eq lrn-eq-display">
                  <span>{`$$L = \\tfrac{1}{2}mv^2 + m\\mathbf{v}\\cdot(\\mathbf{\\Omega}\\times\\mathbf{r}) + \\tfrac{1}{2}m(\\mathbf{\\Omega}\\times\\mathbf{r})^2 - m\\mathbf{W}\\cdot\\mathbf{r} - U$$`}</span>
                </div>
                <p>
                  When to use: whenever the reference frame is accelerating in a straight line
                  (acceleration <strong>W</strong>), rotating (angular velocity <strong>Ω</strong>),
                  or both.
                </p>
              </div>
            </div>

            <div className="lrn-definition">
              <span className="lrn-definition-term">Equation of motion in rotating frame</span>
              <div className="lrn-definition-desc">
                <div className="lrn-eq">
                  <span>{`$$m\\frac{d\\mathbf{v}}{dt} = -\\frac{\\partial U}{\\partial\\mathbf{r}} - m\\mathbf{W} + m\\mathbf{r}\\times\\dot{\\mathbf{\\Omega}} + 2m\\mathbf{v}\\times\\mathbf{\\Omega} + m\\mathbf{\\Omega}\\times(\\mathbf{r}\\times\\mathbf{\\Omega})$$`}</span>
                </div>
                <p>
                  When to use: to write Newton's law in a rotating or translating frame. Every term
                  after {`$-\\dfrac{\\partial U}{\\partial\\mathbf{r}}$`} is an inertia force,
                  present only because the frame itself is moving.
                </p>
              </div>
            </div>

            <div className="lrn-definition">
              <span className="lrn-definition-term">Energy in rotating frame</span>
              <div className="lrn-definition-desc">
                <div className="lrn-eq">
                  <span>{`$$E = E_0 - \\mathbf{M}\\cdot\\mathbf{\\Omega}$$`}</span>
                </div>
                <p>
                  When to use: to convert between the inertial-frame energy {`$E_0$`} and the
                  rotating-frame energy {`$E$`}. {`$\\mathbf{M}$`} is the angular momentum and the
                  relation is exact for constant {`$\\mathbf{\\Omega}$`}.
                </p>
              </div>
            </div>

            <div className="table-wrapper">
              <table>
                <thead>
                  <tr>
                    <th>Inertia Force</th>
                    <th>Expression</th>
                    <th>Depends on</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Translational</td>
                    <td>{`$-m\\mathbf{W}$`}</td>
                    <td>frame's linear acceleration</td>
                  </tr>
                  <tr>
                    <td>Euler</td>
                    <td>{`$m\\mathbf{r}\\times\\dot{\\mathbf{\\Omega}}$`}</td>
                    <td>position and how fast Ω is changing</td>
                  </tr>
                  <tr>
                    <td>Coriolis</td>
                    <td>{`$2m\\mathbf{v}\\times\\mathbf{\\Omega}$`}</td>
                    <td>velocity in the rotating frame</td>
                  </tr>
                  <tr>
                    <td>Centrifugal</td>
                    <td>{`$m\\mathbf{\\Omega}\\times(\\mathbf{r}\\times\\mathbf{\\Omega})$`}</td>
                    <td>position only</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </>
      ]
    },

    customCss: null
  }

  return <LearningTemplate config={config} />
}

export default function NonInertialFramesContent() {
  return <NonInertialFramesContentInner />
}
