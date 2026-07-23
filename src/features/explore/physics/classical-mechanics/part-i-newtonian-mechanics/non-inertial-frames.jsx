import { LearningTemplate } from '../../../../../components/learning/learning-template'
import { CoriolisDrop } from '../../../../../components/viz'

function NonInertialFramesAndCoriolisApplicationsInner() {
  const config = {
    cssPrefix: 'rbd',
    documentTitle: 'Non-Inertial Frames and Coriolis Applications - AETHER',
    learning: {
      groupTitle: 'Newtonian Mechanics',
      category: 'Physics',
      title: 'Non-Inertial Frames and Coriolis Applications',
      subtitle:
        'Rotating and translating reference frames, inertia forces, Coriolis and centrifugal effects',
      sections: [
        // Section 0: Foundations
        <>
          <div className="lrn-section" id="lrn-section-0" data-section-index="0">
            <h2>Foundations: Inertial vs. Non-Inertial Frames</h2>
            <p>
              Every mechanics problem starts with the same choice: from what vantage point do you
              watch the motion? That vantage point is your <em>reference frame</em>.
            </p>
            <p>
              You already met the <strong>inertial frame</strong> with Newton's laws: a frame that
              does not speed up, slow down, or rotate. In a frame like this, Newton's second law
              holds in its plain form, with no extra terms on the right.
            </p>
            <p>
              Most real frames are not inertial. A lab on Earth's surface spins with the planet once
              a day. A car brakes at red lights. The moment you describe motion from a frame that
              moves like this, new terms appear in the equations of motion.
            </p>
            <p>
              These terms are not real forces. Nothing is physically pushing on the object. They are
              bookkeeping for the frame's own motion. Once you know how to write them down, you can
              solve problems on Earth, on a turntable, or in an accelerating car directly. You never
              have to switch back to a stationary frame.
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
                <p>{`A reference frame that does not accelerate and does not rotate. Newton's second law holds in its plain form: $\\mathbf{F} = m\\mathbf{a}$, with no extra terms. This is the frame you already know how to solve problems in.`}</p>
              </div>
            </div>

            <div className="lrn-definition">
              <span className="lrn-definition-term">Non-inertial Frame</span>
              <div className="lrn-definition-desc">
                <p>
                  A reference frame that accelerates in a straight line, rotates, or both. Write its
                  overall acceleration as <strong>W</strong>(t), and its rate of rotation as the
                  angular velocity <strong>Ω</strong>: a vector that points along the rotation axis
                  with magnitude equal to the spin rate in radians per second.
                </p>
                <p>
                  Switching to such a frame adds extra terms to Newton's second law. Those terms are
                  the inertia forces you feel.
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
                  In general relativity, gravity is not a force at all. It is the bending of space
                  and time. An object in free fall feels no net force, so the falling lift is,
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
                {`Newton's law $m\\mathbf{a} = \\mathbf{F}$ is exact only when $\\mathbf{a}$ is measured in an inertial frame. The real forces $\\mathbf{F}$ (gravity, contact, springs) do not care what frame you watch from.`}
              </p>
              <p>
                But the acceleration you measure does change with the frame. An object can be moving
                at a steady velocity, yet appear to accelerate to an observer who is speeding up or
                turning. That difference in measured acceleration is the whole story.
              </p>
              <p>
                {`To get the law your frame sees, take $\\mathbf{a}$ from the inertial frame and rewrite it using the acceleration of your own frame. The leftover pieces, moved across the equation, look exactly like extra forces. They are the inertia forces: Coriolis, centrifugal, Euler, and the translational $-m\\mathbf{W}$. The next section builds each one.`}
              </p>
            </div>
          </div>
        </>,
        // Section 1: Motion in a Non-inertial Frame
        <>
          <div className="lrn-section" id="lrn-section-1" data-section-index="1">
            <h2>Motion in a Non-inertial Frame</h2>
            <p>
              Some problems carry rotation built in: anything on Earth's surface, on a turntable,
              inside a centrifuge, or aboard a spinning station. Insisting on an inertial frame
              forces you to track the rotation by hand at every step. Sitting inside the rotating
              frame is far cleaner. You pay for it with a few extra terms in the equations of
              motion.
            </p>
            <p>
              You have already met this trade once: switching into a co-rotating frame to make
              pseudo-forces appear is the same move that tames the restricted three-body problem.
              Here we derive those extra terms in general, for any rotating frame.
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

            <h3>Step 1: The Transport Rule</h3>
            <p>
              We have just one tool to start from: Newton's second law,{' '}
              {`$m\\mathbf{a} = \\mathbf{F}$`}, which holds in the inertial frame. To use it inside
              a rotating frame, we need to connect rates of change measured in one frame to those
              measured in the other.
            </p>
            <p>
              Take any vector {`$\\mathbf{A}$`}. Pick the position vector, or the velocity, or
              anything else. An observer fixed in the inertial frame and an observer riding the
              rotating frame will disagree on how fast {`$\\mathbf{A}$`} is turning, because the
              second observer is turning too. The two rates are linked by the{' '}
              <strong>transport rule</strong>:
            </p>
            <div className="lrn-eq lrn-eq-display">
              <span>{`$$\\left(\\frac{d\\mathbf{A}}{dt}\\right)_{\\text{in}} = \\left(\\frac{d\\mathbf{A}}{dt}\\right)_{\\text{rot}} + \\mathbf{\\Omega}\\times\\mathbf{A}$$`}</span>
            </div>
            <p>
              The first term is the change the rotating observer sees. The extra term{' '}
              {`$\\mathbf{\\Omega}\\times\\mathbf{A}$`} is the change caused purely by the frame
              spinning underneath. The cross product, which you met as a vector at right angles to
              its two inputs, here points along the circle that {`$\\mathbf{A}$`} sweeps as the
              frame turns.
            </p>

            <div className="lrn-elaborate">
              <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
              <p>
                {`Suppose $\\mathbf{A}$ is frozen in the rotating frame, so $(d\\mathbf{A}/dt)_{\\text{rot}} = 0$. From outside it still turns, because the whole frame turns. A vector of fixed length spinning at rate $\\mathbf{\\Omega}$ changes at rate $\\mathbf{\\Omega}\\times\\mathbf{A}$, the same circular-motion result you have used before.`}
              </p>
              <p>
                {`If $\\mathbf{A}$ also changes inside the frame, just add that change on top. The two contributions are independent, which gives the rule above. It works for any vector, so we are free to feed it the position vector twice.`}
              </p>
            </div>

            <h3>Step 2: Apply It Twice to the Position</h3>
            <p>
              Feed the position vector {`$\\mathbf{r}$`} into the rule. The left side is the
              velocity in the inertial frame, {`$\\mathbf{v}_0$`}; the first term on the right is
              the velocity in the rotating frame, {`$\\mathbf{v}$`}:
            </p>
            <div className="lrn-eq">
              <span>{`$$\\mathbf{v}_0 = \\mathbf{v} + \\mathbf{\\Omega}\\times\\mathbf{r}$$`}</span>
            </div>
            <p>
              The carry-along piece {`$\\mathbf{\\Omega}\\times\\mathbf{r}$`} is the speed at which
              the spot the particle occupies is swept around the axis. Now differentiate once more
              in the inertial frame. Apply the rule a second time, this time to {`$\\mathbf{v}_0$`},
              and use it again on the {`$\\mathbf{\\Omega}\\times\\mathbf{r}$`} piece:
            </p>
            <div className="lrn-eq lrn-eq-display">
              <span>{`$$\\mathbf{a}_0 = \\mathbf{a} + 2\\,\\mathbf{\\Omega}\\times\\mathbf{v} + \\dot{\\mathbf{\\Omega}}\\times\\mathbf{r} + \\mathbf{\\Omega}\\times(\\mathbf{\\Omega}\\times\\mathbf{r})$$`}</span>
            </div>
            <p>
              Here {`$\\mathbf{a}$`} is the acceleration the rotating observer measures and{' '}
              {`$\\mathbf{a}_0$`} is the acceleration in the inertial frame. If the frame is also
              sliding with acceleration {`$\\mathbf{W}$`}, add that to {`$\\mathbf{a}_0$`} as well.
            </p>

            <div className="lrn-elaborate">
              <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
              <p>
                {`Write the rule as an operator: $\\left(\\frac{d}{dt}\\right)_{\\text{in}} = \\left(\\frac{d}{dt}\\right)_{\\text{rot}} + \\mathbf{\\Omega}\\times$. Acceleration in the inertial frame is this operator applied to $\\mathbf{v}_0 = \\mathbf{v} + \\mathbf{\\Omega}\\times\\mathbf{r}$.`}
              </p>
              <p>
                {`The $\\mathbf{v}$ part gives $\\mathbf{a} + \\mathbf{\\Omega}\\times\\mathbf{v}$. The $\\mathbf{\\Omega}\\times\\mathbf{r}$ part gives $\\dot{\\mathbf{\\Omega}}\\times\\mathbf{r} + \\mathbf{\\Omega}\\times(\\mathbf{v} + \\mathbf{\\Omega}\\times\\mathbf{r})$, since $\\Omega$ may change and the rule reapplies to $\\mathbf{r}$.`}
              </p>
              <p>
                {`Add the two. The two separate $\\mathbf{\\Omega}\\times\\mathbf{v}$ pieces combine into $2\\,\\mathbf{\\Omega}\\times\\mathbf{v}$, the source of the factor of 2 in the Coriolis term.`}
              </p>
            </div>

            <h3>The Inertia Forces</h3>
            <p>
              Newton's law in the inertial frame is {`$m\\mathbf{a}_0 = \\mathbf{F}$`}, where{' '}
              {`$\\mathbf{F} = -\\partial U/\\partial\\mathbf{r}$`} is the real force from the
              potential. Substitute the acceleration we just found, add the sliding term{' '}
              {`$\\mathbf{W}$`}, and solve for the acceleration {`$\\mathbf{a}$`} the rotating
              observer measures:
            </p>
            <div className="lrn-eq lrn-eq-display">
              <span>{`$$m\\frac{d\\mathbf{v}}{dt} = -\\frac{\\partial U}{\\partial \\mathbf{r}} - m\\mathbf{W} + m\\mathbf{r}\\times\\dot{\\mathbf{\\Omega}} + 2m\\mathbf{v}\\times\\mathbf{\\Omega} + m\\mathbf{\\Omega}\\times(\\mathbf{r}\\times\\mathbf{\\Omega})$$`}</span>
            </div>
            <p>
              The four extra terms are just the pieces of {`$\\mathbf{a}_0$`} moved to the
              right-hand side, with signs flipped. Using{' '}
              {`$\\mathbf{b}\\times\\mathbf{c} = -\\mathbf{c}\\times\\mathbf{b}$`}, each one
              rewrites into a tidy form. The first term on the right is the real force. Everything
              after it is an <strong>inertia force</strong>: a term that looks like a force on the
              page but exists only because the frame itself is moving. The four are:
            </p>
            <ul className="lrn-list">
              <li>
                {`$-m\\mathbf{W}$ - the translational inertia force, present whenever the frame's velocity is changing. The forward jolt that throws you at the windshield when a bus brakes is exactly this term.`}
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

            <h3>Worked Example: Apparent Weight at the Equator</h3>
            <p>
              Put numbers on the centrifugal term. Stand at the equator. Earth spins at{' '}
              {`$\\Omega \\approx 7.3\\times10^{-5}$`} rad/s, and the equatorial radius is{' '}
              {`$R \\approx 6.4\\times10^{6}$`} m. You sit still on the ground, so{' '}
              {`$\\mathbf{v} = 0$`} and there is no Coriolis force; {`$\\Omega$`} is steady, so
              there is no Euler force. Only the centrifugal force acts.
            </p>
            <p>
              At the equator the rotation axis is horizontal, so the centrifugal force points
              straight up, directly against gravity. Its size per unit mass is {`$\\Omega^2 R$`}:
            </p>
            <div className="lrn-eq">
              <span>{`$$\\Omega^2 R = (7.3\\times10^{-5})^2 \\times 6.4\\times10^{6} \\approx 0.034\\ \\text{m/s}^2$$`}</span>
            </div>
            <p>
              Compare this with {`$g \\approx 9.8$`} m/s². The fraction is{' '}
              {`$0.034 / 9.8 \\approx 0.0035$`}, about a third of a percent. So Earth's spin makes
              you weigh roughly 0.35% less at the equator than you would on a still Earth. Small,
              but a sensitive scale can measure it.
            </p>

            <h3>Worked Example: Which Way Does Coriolis Push?</h3>
            <p>
              The Coriolis direction trips people up, so work one case fully. A turntable spins
              counterclockwise seen from above, so {`$\\mathbf{\\Omega}$`} points straight up, along{' '}
              {`$+\\hat{\\mathbf{z}}$`}. A puck slides outward along the {`$+\\hat{\\mathbf{x}}$`}{' '}
              axis at speed {`$v$`}, so {`$\\mathbf{v} = v\\,\\hat{\\mathbf{x}}$`}.
            </p>
            <p>
              The Coriolis force is {`$2m\\,\\mathbf{v}\\times\\mathbf{\\Omega}$`}. Cross the two
              vectors: {`$\\hat{\\mathbf{x}}\\times\\hat{\\mathbf{z}} = -\\hat{\\mathbf{y}}$`}. So
              the force is {`$2mv\\Omega\\,(-\\hat{\\mathbf{y}})$`}: it points along{' '}
              {`$-\\hat{\\mathbf{y}}$`}.
            </p>
            <p>
              For a puck heading along {`$+\\hat{\\mathbf{x}}$`}, the {`$-\\hat{\\mathbf{y}}$`}{' '}
              direction is off to its right. On a counterclockwise turntable, the Coriolis force
              always shoves a moving object to its right. That right-hand deflection is the same one
              that organises weather systems in the Northern Hemisphere.
            </p>

            <div className="lrn-compare">
              <div className="lrn-compare-col">
                <span className="lrn-compare-title">Coriolis Force</span>
                <p>{`$2m\\,\\mathbf{v}\\times\\mathbf{\\Omega}$`}</p>
                <p>Depends on how fast the particle is moving in the rotating frame.</p>
                <p>
                  It vanishes the instant the particle sits still in the frame, since a cross
                  product with the zero velocity is zero.
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
                  Acts even on a stone glued to a spinning disk; that stone is pushed outward but
                  never deflected sideways.
                </p>
              </div>
            </div>

            <h3>Energy in the Rotating Frame</h3>
            <p>
              Suppose the frame spins at a steady rate, so {`$\\mathbf{\\Omega}$`} is constant. Then
              two of the inertia forces are easy to account for. The Coriolis force is always at
              right angles to the velocity, so it does no work. The centrifugal force points
              straight out from the axis and, like gravity, can be written as the gradient of a
              potential.
            </p>
            <p>
              That centrifugal potential is{' '}
              {`$U_{\\text{cf}} = -\\frac{1}{2}m(\\mathbf{\\Omega}\\times\\mathbf{r})^2$`}. Because
              only the centrifugal force adds energy bookkeeping, the conserved energy in the
              rotating frame is the kinetic energy plus the real potential plus this new term:
            </p>
            <div className="lrn-eq">
              <span>{`$$E = \\frac{1}{2}mv^2 - \\frac{1}{2}m(\\mathbf{\\Omega}\\times\\mathbf{r})^2 + U$$`}</span>
            </div>
            <p>
              Compared with the inertial-frame energy, this version carries the extra negative term{' '}
              {`$-\\frac{1}{2}m(\\mathbf{\\Omega}\\times\\mathbf{r})^2$`}. Points farther from the
              axis sit at lower energy, which is why a free object drifts outward.
            </p>
            <p>
              {`This is the same outward push you met as the centrifugal barrier $\\frac{l^2}{2\\mu r^2}$ in central-force motion. There it came from conserved angular momentum, dressed up as a radial potential. Here it comes from sitting in the rotating frame. Same physics, two viewpoints.`}
            </p>
            <p>
              There is a clean exact relation between the two energies. Write {`$E_0$`} for the
              energy in the inertial frame and {`$\\mathbf{M} = \\mathbf{r}\\times m\\mathbf{v}_0$`}{' '}
              for the angular momentum measured there:
            </p>
            <div className="lrn-eq lrn-eq-display">
              <span>{`$$E = E_0 - \\mathbf{M}\\cdot\\mathbf{\\Omega}$$`}</span>
            </div>
            <p>
              This relation is exact, not an approximation. The two energies disagree by exactly the
              part of the angular momentum that lines up with the rotation axis.
            </p>

            <div className="lrn-elaborate">
              <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
              <p>
                {`Start from $E_0 = \\frac{1}{2}mv_0^2 + U$ and expand $v_0^2$ using $\\mathbf{v}_0 = \\mathbf{v} + \\mathbf{\\Omega}\\times\\mathbf{r}$. Squaring gives $v_0^2 = v^2 + 2\\,\\mathbf{v}\\cdot(\\mathbf{\\Omega}\\times\\mathbf{r}) + (\\mathbf{\\Omega}\\times\\mathbf{r})^2$. So $E_0 = E + m\\,\\mathbf{v}\\cdot(\\mathbf{\\Omega}\\times\\mathbf{r}) + m(\\mathbf{\\Omega}\\times\\mathbf{r})^2$, since the $-\\frac{1}{2}m(\\mathbf{\\Omega}\\times\\mathbf{r})^2$ inside $E$ leaves a single full power behind.`}
              </p>
              <p>
                {`Now take $\\mathbf{M}\\cdot\\mathbf{\\Omega}$ with $\\mathbf{M} = \\mathbf{r}\\times m\\mathbf{v}_0 = \\mathbf{r}\\times m(\\mathbf{v} + \\mathbf{\\Omega}\\times\\mathbf{r})$. A scalar triple product is unchanged when you cycle its three vectors, so $\\mathbf{\\Omega}\\cdot(\\mathbf{r}\\times m\\mathbf{v}) = m\\,\\mathbf{v}\\cdot(\\mathbf{\\Omega}\\times\\mathbf{r})$ and $\\mathbf{\\Omega}\\cdot(\\mathbf{r}\\times m(\\mathbf{\\Omega}\\times\\mathbf{r})) = m(\\mathbf{\\Omega}\\times\\mathbf{r})^2$.`}
              </p>
              <p>
                {`Those are exactly the two extra pieces, so $\\mathbf{M}\\cdot\\mathbf{\\Omega} = E_0 - E$, which rearranges to the relation above.`}
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
              {`From here on $\\Omega$ means Earth's own spin rate specifically, and $\\omega_{\\text{prec}}$ is the slower rate at which the swing plane turns. Here $\\lambda$ is the latitude. At the North Pole ($\\lambda = 90°$, $\\sin\\lambda = 1$), the plane makes one full rotation in a sidereal day, one turn of Earth relative to the stars, about 23 h 56 min. At the equator ($\\lambda = 0$, $\\sin\\lambda = 0$), the pendulum does not precess at all.`}
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

            <div className="lrn-compare">
              <div className="lrn-compare-col">
                <span className="lrn-compare-title">Inertial Frame</span>
                <p>{`Newton's law is plain: $m\\mathbf{a} = \\mathbf{F}$.`}</p>
                <p>No inertia forces. The equations of motion are as clean as they get.</p>
                <p>
                  Best when the problem has no built-in rotation: orbits, projectiles, collisions,
                  springs.
                </p>
              </div>
              <div className="lrn-compare-col">
                <span className="lrn-compare-title">Rotating Frame</span>
                <p>
                  Newton's law picks up the Coriolis, centrifugal, Euler, and translational inertia
                  forces.
                </p>
                <p>They are the price you pay for sitting in a frame that moves.</p>
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
        q: 'You stand at the equator, where Earth spins at Omega = 7.3e-5 rad/s and the radius is R = 6.4e6 m. By how much does the centrifugal force lighten your apparent weight, as a fraction of g = 9.8 m/s^2?',
        a: "The centrifugal acceleration points straight out from the spin axis. At the equator that is straight up, opposite gravity, with size Omega^2 R. Plug in: (7.3e-5)^2 times 6.4e6 = 5.3e-9 times 6.4e6 = 0.034 m/s^2. As a fraction of g that is 0.034 / 9.8 = 0.0035, about 0.35 percent. So Earth's spin makes you weigh roughly a third of a percent less at the equator than you would on a non-spinning Earth."
      },
      {
        q: 'A ball is released on a turntable that is rotating counterclockwise at angular velocity Omega. It slides outward without friction. Which way does it deflect?',
        a: 'It deflects clockwise, that is, to the right as seen by an observer on the turntable. As the ball moves outward along the radial direction, the Coriolis force 2mv cross Omega points sideways. For counterclockwise rotation (Omega along +z), that sideways push is clockwise. The centrifugal force is what drives it outward in the first place; the Coriolis force only bends the path.'
      }
    ],

    // Reference Mode
    reference: {
      category: 'Quick Reference',
      title: 'Non-Inertial Frames and Coriolis Applications',
      sections: [
        <>
          <div className="ref">
            <h2>Non-Inertial Frames and Coriolis Applications</h2>

            <div className="lrn-definition">
              <span className="lrn-definition-term">Transport rule (rotating frame)</span>
              <div className="lrn-definition-desc">
                <div className="lrn-eq lrn-eq-display">
                  <span>{`$$\\left(\\frac{d\\mathbf{A}}{dt}\\right)_{\\text{in}} = \\left(\\frac{d\\mathbf{A}}{dt}\\right)_{\\text{rot}} + \\mathbf{\\Omega}\\times\\mathbf{A}$$`}</span>
                </div>
                <p>
                  When to use: to convert the time rate of change of any vector <strong>A</strong>{' '}
                  from the inertial frame to a frame rotating at angular velocity <strong>Ω</strong>
                  . Apply it twice to the position to get the acceleration.
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

export default function NonInertialFramesAndCoriolisApplications() {
  return <NonInertialFramesAndCoriolisApplicationsInner />
}
