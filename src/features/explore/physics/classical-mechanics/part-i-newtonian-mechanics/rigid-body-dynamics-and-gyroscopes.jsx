import { LearningTemplate } from '../../../../../components/learning/learning-template'
import {
  OrientationNonComm,
  SkewRod,
  Gyroscope,
  EquinoxPrecession,
  InertiaTensor,
  OblateProlate,
  PrecessionCone,
  TennisRacket,
  NonCentralPair,
  OffsetSphere,
  DumbbellTensor,
  CycloidalNutation
} from '../../../../../components/viz/physics-viz/modules'

export default function RigidBodyDynamicsAndGyroscopes() {
  const config = {
    cssPrefix: 'rbd',
    source: 'An Introduction to Mechanics - Kleppner & Kolenkow',
    documentTitle: 'Rigid Body Dynamics and Gyroscopes - AETHER',
    learning: {
      groupTitle: 'Part I: Newtonian Mechanics',
      category: 'Module 9',
      title: 'Rigid Body Dynamics and Gyroscopes',
      subtitle:
        'A spinning rigid body refuses to behave like a point mass. Angular momentum and angular velocity can point in different directions. A torque tips the spin axis sideways instead of toppling the body. This module builds the tensor of inertia, derives gyroscope precession, and ends with the cycloidal nutation real gyroscopes show.',
      sections: [
        <>
          <h2>Why Orientation Is Not a Vector but Angular Velocity Is</h2>
          <p>
            Turn a Rubik's cube one face at a time. Swap the order of two moves and the cube ends up
            looking different. This is the same reason orientation cannot be a vector.
          </p>
          <p>
            The natural guess is to write a body's orientation as three numbers, one angle per axis,
            and treat them as the components of a vector. That guess fails. Vector addition is
            order-blind; rotation is not.
          </p>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              Take a book. Rotate it 90 degrees about the x-axis, then 90 degrees about the y-axis.
              Now do the same two rotations in reverse order. Does the book end up in the same
              orientation?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                No. The two final orientations differ. So orientation cannot be a vector. Vector
                addition commutes, but rotations do not.
              </p>
            </details>
          </div>
          <p>
            Kleppner shows the same thing with a maple syrup can. Tip it 90 degrees about one axis,
            then 90 about another. Reverse the order: the can lands somewhere else. Finite rotations
            do not commute.
          </p>
          <OrientationNonComm />
          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>
              Vectors must add the same way no matter the order. Finite rotations fail that test, so
              no single vector can store orientation.
            </p>
          </div>
          <p>
            Shrink the angles. The smaller they get, the less the order matters. For infinitesimal
            rotations the order stops mattering altogether at first order. That tiny opening is
            enough to build a real vector quantity.
          </p>
          <p>For a particle at position r, a small rotation by angle d-theta shifts it by</p>
          <div className="lrn-eq">{`$$d\\mathbf{r} = d\\boldsymbol{\\theta} \\times \\mathbf{r}$$`}</div>
          <p>
            where d-theta is the small rotation vector: its direction is the rotation axis and its
            length is the angle. Divide by dt:
          </p>
          <div className="lrn-eq lrn-eq-display">{`$$\\mathbf{v} = \\boldsymbol{\\omega} \\times \\mathbf{r}, \\qquad \\boldsymbol{\\omega} = \\dfrac{d\\boldsymbol{\\theta}}{dt}$$`}</div>
          <p>Angular velocity is a true vector because it is built from infinitesimal rotations.</p>
          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>
              Infinitesimal rotations commute to first order in the angles. The leftover error is
              second order, which vanishes in the time-derivative limit.
            </p>
          </div>
          <h3>Worked example: rotation in the xy-plane (K&K Example 7.2)</h3>
          <p>
            A point on a rigid body sits at r = x i + y j + z k. The body spins about the z-axis at
            rate omega.
          </p>
          <div className="lrn-steps">
            <p>
              <strong>Step 1.</strong> Write omega along the rotation axis: omega = omega k.
            </p>
            <p>
              <strong>Step 2.</strong> Take the cross product:
            </p>
            <div className="lrn-eq">{`$$\\boldsymbol{\\omega}\\times\\mathbf{r} = \\omega\\hat{k}\\times(x\\hat{i}+y\\hat{j}+z\\hat{k}) = -\\omega y\\,\\hat{i} + \\omega x\\,\\hat{j}$$`}</div>
            <p>
              <strong>Step 3.</strong> Read off the result. The speed is omega times the
              perpendicular distance from the axis. The direction is tangent to the circle of
              motion. Both match the picture of circular motion.
            </p>
          </div>
          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>
              Why does the z-component of r drop out of the velocity for rotation about the z-axis?
              Form your answer before reading on.
            </p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                The cross product k cross k vanishes. So the part of r along the rotation axis
                cannot move under that rotation. Only the perpendicular components contribute to v.
              </p>
            </details>
          </div>
          <h3>Worked example: omega adds like a vector (K&K Example 7.3)</h3>
          <p>
            A wheel spins at rate omega about an axle. The axle sits on a turntable that itself
            spins at rate Omega. The total angular velocity of the wheel is the vector sum:
          </p>
          <div className="lrn-eq">{`$$\\boldsymbol{\\omega}_{\\text{total}} = \\boldsymbol{\\omega} + \\boldsymbol{\\Omega}$$`}</div>
          <p>
            You can break omega into components along any axes you like, and you can add two omegas
            from two motions. Both moves work for angular velocity. Neither works for finite
            rotation angles.
          </p>
          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF EXPLAIN</span>
            <p>
              Why is the rule v = omega cross r the same for any choice of origin on the rotation
              axis? Try moving the origin along the axis and check the result.
            </p>
          </div>
          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Finite rotation</span>
              <p>
                Order matters. The result depends on which axis turns first. Cannot be encoded as a
                single vector.
              </p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Infinitesimal rotation</span>
              <p>
                Order does not matter to first order. Stacks like vector addition. Defines angular
                velocity as a true vector.
              </p>
            </div>
          </div>
        </>,

        <>
          <h2>Angular Momentum When Spin Axis Differs from L (K&K Examples 7.4 to 7.6)</h2>
          <p>
            A washing machine wobbling on spin cycle is showing you angular momentum that points
            sideways from the angular velocity. The whole drum is spinning in a clean vertical line,
            but the laundry inside drags L off-axis, and the drum lurches to keep up.
          </p>
          <p>
            For rotation locked to a fixed axis, we wrote L = I omega. The moment we let the body
            rotate freely, that simple law breaks. L can point in a different direction than omega.
          </p>
          <p>
            <strong>When to use this:</strong> any rigid body whose rotation axis is not also a
            symmetry axis. The skew rod is the cleanest example.
          </p>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              Two equal masses sit at the ends of a rigid rod. The rod is welded to a vertical shaft
              at angle alpha from perpendicular. The shaft spins at omega. Do you think L is
              parallel to the shaft?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                No. L sits in the plane of the rod, perpendicular to the rod. Only the component of
                L along the shaft is constant. The rest sweeps around as the rod rotates.
              </p>
            </details>
          </div>
          <SkewRod />
          <h3>Method 1: add up r cross p mass by mass</h3>
          <p>
            Each mass m sits at position r on the rod and moves with v = omega cross r, so its
            momentum is p = m (omega cross r). Add the contributions to L from both masses.
          </p>
          <div className="lrn-steps">
            <p>
              <strong>Step 1.</strong> The rod has length 2 ell. Each mass sits at distance ell from
              the center.
            </p>
            <p>
              <strong>Step 2.</strong> The mass moves on a circle of radius ell cos alpha (the
              perpendicular distance from the rotation axis), so its speed is v = omega ell cos
              alpha.
            </p>
            <p>
              <strong>Step 3.</strong> For each mass, r cross p has length m ell v and points
              perpendicular to the rod, in the plane that contains the rod and the shaft. The two
              masses add:
            </p>
            <div className="lrn-eq">{`$$|\\mathbf{L}| = 2m\\ell^2\\omega\\cos\\alpha$$`}</div>
            <p>
              <strong>Step 4.</strong> L lies in the plane of the rod, perpendicular to the rod,
              pointing outward from the spin axis. Not along the shaft.
            </p>
          </div>
          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>
              Why does L point perpendicular to the rod and not along the spin axis? Form your
              answer before reading on.
            </p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>{`For each mass, $\\mathbf{r}\\times\\mathbf{p}$ is perpendicular to both $\\mathbf{r}$ (which lies along the rod) and to $\\mathbf{p}$ (which is tangent to the circle). The only direction satisfying both is the in-plane direction perpendicular to the rod.`}</p>
            </details>
          </div>
          <h3>Method 2: split omega into pieces along and across the rod (K&K Example 7.4)</h3>
          <p>
            Break omega into the component along the rod and the component across it. The
            along-the-rod piece spins each mass on its own line, contributing nothing to L. The
            across-the-rod piece spins each mass about the rod's center, and that piece does the
            work.
          </p>
          <div className="lrn-steps">
            <p>
              <strong>Step 1.</strong> The component perpendicular to the rod is omega-perp = omega
              cos alpha.
            </p>
            <p>
              <strong>Step 2.</strong> About the axis through the rod's center, two point masses
              each at distance ell give I = 2 m ell squared.
            </p>
            <p>
              <strong>Step 3.</strong> Multiply:
            </p>
            <div className="lrn-eq">{`$$|\\mathbf{L}| = I\\omega_\\perp = 2m\\ell^2\\omega\\cos\\alpha$$`}</div>
            <p>Same answer as Method 1.</p>
          </div>
          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF EXPLAIN</span>
            <p>
              Why does the omega-parallel component contribute nothing to L? Hint: each mass sits
              exactly on the line of omega-parallel.
            </p>
          </div>
          <h3>Time-varying L for the rotating skew rod (K&K Example 7.5)</h3>
          <p>
            Set up a lab frame with z along the shaft. The rod has turned through angle omega t
            about z. Reading L's tilt out of the picture gives:
          </p>
          <div className="lrn-eq">{`$$L_x = L\\sin\\alpha\\cos\\omega t,\\quad L_y = L\\sin\\alpha\\sin\\omega t,\\quad L_z = L\\cos\\alpha$$`}</div>
          <p>Differentiate in time to get the torque the bearings must supply:</p>
          <div className="lrn-eq">{`$$\\tau = \\sqrt{\\tau_x^2 + \\tau_y^2} = 2m\\ell^2\\omega^2\\sin\\alpha\\cos\\alpha = \\omega L\\sin\\alpha$$`}</div>
          <h3>Geometric method (K&K Example 7.6)</h3>
          <p>
            Skip the algebra and read the torque off the geometry. The vertical part of L stays
            fixed. Only the horizontal part, L-perp = L sin alpha, rotates. Any vector of length
            L-perp turning at rate omega changes at rate omega L-perp:
          </p>
          <div className="lrn-eq">{`$$\\dfrac{dL_\\perp}{dt} = \\omega L_\\perp = \\omega L\\sin\\alpha$$`}</div>
          <p>
            Same answer as the differentiation, far less work. The trick applies to any L vector
            dragged around rigidly with the body.
          </p>
          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>
              Why does only the horizontal part of L change with time, even though the full vector L
              tilts? Form your answer before reading on.
            </p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                The vertical part of L points along the rotation axis, so the rotation does not move
                it. Only the horizontal part lies off the axis and rotates with the rod.
              </p>
            </details>
          </div>
          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>
              The horizontal part of L sweeps a circle at the rotation rate. Any vector of fixed
              length spinning at omega changes at rate omega times that length.
            </p>
          </div>
          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Fixed-axis rotation</span>
              <p>{`L is parallel to omega. The scalar law $L = I\\omega$ holds. Bearings carry no torque.`}</p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Free-axis rotation</span>
              <p>
                L can tilt away from omega. Bearings must supply a steady torque to keep the axis in
                place. The skew rod is the textbook case.
              </p>
            </div>
          </div>
        </>,

        <>
          <h2>How a Gyroscope Precesses (K&K Examples 7.7, 7.8)</h2>
          <p>
            The tiny gyroscope inside your phone uses precession to know which way you are holding
            the screen. The same math explains spinning tops and bicycle wheels.
          </p>
          <p>
            Take a wheel on an axle and rest one end of the axle on a pylon. Gravity pulls the free
            end down. The wheel does not fall. Instead the axle sweeps around horizontally.
          </p>
          <p>
            <strong>When to use this:</strong> any fast-spinning body whose external torque acts
            perpendicular to its spin angular momentum.
          </p>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              If you double the spin speed of a gyroscope wheel, what happens to its precession
              rate?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                The precession rate halves. Faster spin gives bigger spin angular momentum. The same
                torque produces a smaller fractional change per second, so precession slows.
              </p>
            </details>
          </div>
          <Gyroscope />
          <p>The spin angular momentum points along the axle, with magnitude</p>
          <div className="lrn-eq">{`$$\\mathbf{L}_s = I_s\\omega_s$$`}</div>
          <p>
            Gravity acts at the wheel's center, distance ell from the pivot. About the pivot it
            produces a torque of magnitude
          </p>
          <div className="lrn-eq">{`$$\\tau = \\ell W$$`}</div>
          <p>
            That torque points sideways, perpendicular to L-s. It cannot stretch or shrink L-s. All
            it can do is swing L-s in the direction it points.
          </p>
          <h3>Setting the precession rate (K&K Example 7.7)</h3>
          <div className="lrn-steps">
            <p>
              <strong>Step 1.</strong> Assume the axle precesses around vertical at rate Omega.
            </p>
            <p>
              <strong>Step 2.</strong> The horizontal part of L-s sweeps a circle at Omega. Its rate
              of change has magnitude Omega L-s.
            </p>
            <p>
              <strong>Step 3.</strong>
              {` Newton's rotational law sets torque equal to $\\dfrac{dL}{dt}$:`}
            </p>
            <div className="lrn-eq lrn-eq-display">{`$$\\Omega = \\dfrac{\\ell W}{L_s} = \\dfrac{\\ell W}{I_s\\omega_s}$$`}</div>
          </div>
          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>
              Why does setting torque equal to dL/dt give a precession rate? Newton's second law for
              translation gives an acceleration. Form your answer before reading on.
            </p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                The torque is perpendicular to L-s, so it cannot change the magnitude. It can only
                rotate the direction of L-s at constant magnitude. A rotation at fixed magnitude is
                precession.
              </p>
            </details>
          </div>
          <h3>Tilted gyroscope: precession does not depend on tilt (K&K Example 7.7 continued)</h3>
          <p>
            Tilt the axle at angle phi from vertical. The lever arm shrinks to ell sin phi, and the
            horizontal piece of L-s shrinks to L-s sin phi. Both shrink by the same factor:
          </p>
          <div className="lrn-eq">{`$$\\Omega L_s\\sin\\phi = \\ell\\sin\\phi\\cdot W \\Rightarrow \\Omega = \\dfrac{\\ell W}{L_s}$$`}</div>
          <p>The sin phi factors cancel. Tip the gyroscope high or low and Omega stays the same.</p>
          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF EXPLAIN</span>
            <p>
              Why does sin phi cancel? Try this: write the torque arm and the L-s circle both as
              proportional to sin phi.
            </p>
          </div>
          <div className="lrn-faded">
            <div className="lrn-faded-phase">
              <span className="lrn-faded-label">COMPLETE EXAMPLE</span>
              <p>{`A wheel of moment $I_s = 2\\times 10^{-3}\\,\\text{kg m}^2$ spins at $\\omega_s = 200\\,\\text{rad/s}$. Its weight $W = 5\\,\\text{N}$ acts at lever arm $\\ell = 0.1\\,\\text{m}$. Find the precession rate.`}</p>
              <ol className="lrn-list">
                <li>{`Spin angular momentum: $L_s = I_s\\omega_s = 0.4\\,\\text{kg m}^2/\\text{s}$.`}</li>
                <li>{`Gravity torque: $\\tau = \\ell W = 0.5\\,\\text{N m}$.`}</li>
                <li>{`Precession rate: $\\Omega = \\dfrac{\\tau}{L_s} = 1.25\\,\\text{rad/s}$, so the axle sweeps a full circle every 5 seconds.`}</li>
              </ol>
            </div>
            <div className="lrn-faded-phase">
              <span className="lrn-faded-label">YOUR TURN: PARTIAL</span>
              <p>{`Same wheel, but now you double the spin to $\\omega_s = 400\\,\\text{rad/s}$. Find the new precession rate.`}</p>
              <ol className="lrn-list">
                <li>{`Spin angular momentum: $L_s = I_s\\omega_s = 0.8\\,\\text{kg m}^2/\\text{s}$ (doubled).`}</li>
                <li>{`Gravity torque does not change: $\\tau = 0.5\\,\\text{N m}$. Plug into $\\Omega = \\dfrac{\\tau}{L_s}$.`}</li>
                <li>{`Solve: the new rate must be half the old. Confirm the period is 10 seconds.`}</li>
              </ol>
            </div>
            <div className="lrn-faded-phase">
              <span className="lrn-faded-label">INDEPENDENT PRACTICE</span>
              <p>{`A child's top has $I_s = 5\\times 10^{-5}\\,\\text{kg m}^2$ and spins at $\\omega_s = 80\\,\\text{rad/s}$. Its weight $W = 0.2\\,\\text{N}$ acts at $\\ell = 0.02\\,\\text{m}$. Find the precession rate using the same method.`}</p>
            </div>
          </div>
          <h3>Why the wheel does not fall (K&K Example 7.8)</h3>
          <p>
            Zoom in on two opposite particles on the rim. Each carries linear momentum tangent to
            the wheel. When gravity tries to tip the axle, the bearing nudges each particle with a
            small sideways impulse. The impulse rotates each particle's momentum sideways, not
            downward. The whole spin axis drifts in the same sideways direction.
          </p>
          <div className="lrn-eq">{`$$\\Delta\\phi = \\dfrac{F\\,\\Delta t}{m v_0},\\quad \\Omega = \\dfrac{\\tau}{L_s}\\text{ with }\\tau = 2F\\ell,\\,L_s = 2mv_0\\ell$$`}</div>
          <p>{`Both views give the same rate $\\Omega = \\dfrac{\\ell W}{L_s}$. Gyroscopic precession is Newton's laws applied through the cross product, nothing more.`}</p>
          <div className="lrn-faded">
            <div className="lrn-faded-phase">
              <span className="lrn-faded-label">COMPLETE EXAMPLE</span>
              <p>
                Track one rim particle of mass m moving at speed v-zero. The bearing applies a small
                sideways impulse F dt. Find the angle the particle's momentum rotates through, and
                confirm both particles together give the gyroscope precession rate.
              </p>
              <ol className="lrn-list">
                <li>{`The particle's linear momentum is $p = mv_0$, tangent to the rim.`}</li>
                <li>{`The impulse $F\\,\\Delta t$ acts perpendicular to $p$, so it rotates $p$ by angle $\\Delta\\phi = \\dfrac{F\\,\\Delta t}{mv_0}$.`}</li>
                <li>{`Two opposite particles share the rotation. In time $\\Delta t$ the spin axis rotates by the same angle $\\Delta\\phi$, giving $\\Omega = \\dfrac{\\Delta\\phi}{\\Delta t} = \\dfrac{F}{mv_0}$.`}</li>
                <li>{`Match torque $\\tau = 2F\\ell$ and spin $L_s = 2mv_0\\ell$. Then $\\Omega = \\dfrac{\\tau}{L_s}$, the same rate as the macroscopic formula.`}</li>
              </ol>
            </div>
            <div className="lrn-faded-phase">
              <span className="lrn-faded-label">YOUR TURN: PARTIAL</span>
              <p>
                Repeat the argument for four particles spaced 90 degrees apart on the rim. Each
                carries the same speed v-zero. Show that the precession rate stays the same.
              </p>
              <ol className="lrn-list">
                <li>
                  The four bearing impulses pair up across the diameter, exactly as in the
                  two-particle case.
                </li>
                <li>{`Each pair gives torque $2F\\ell$ and spin $2mv_0\\ell$. Sum the two pairs: $\\tau = 4F\\ell$ and $L_s = 4mv_0\\ell$.`}</li>
                <li>{`Solve $\\Omega = \\dfrac{\\tau}{L_s}$. Confirm the rate equals $\\dfrac{F}{mv_0}$, independent of the number of particles.`}</li>
              </ol>
            </div>
            <div className="lrn-faded-phase">
              <span className="lrn-faded-label">INDEPENDENT PRACTICE</span>
              <p>{`Replace the rim with a uniform thin disk of mass M and radius R spinning at $\\omega_s$. Apply the same impulse argument to a continuous mass distribution. Show that the precession rate $\\Omega = \\dfrac{\\ell W}{L_s}$ still holds.`}</p>
            </div>
          </div>
          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>
              The torque can rotate L-s but cannot stretch or shrink it. So the spin axis swings
              sideways at constant cone angle, never up or down.
            </p>
          </div>
          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">No spin</span>
              <p>The wheel falls. Gravity swings it down like a pendulum about the pylon.</p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">With spin</span>
              <p>{`The wheel precesses. Gravity rotates the spin axis sideways at rate $\\Omega = \\dfrac{\\ell W}{I_s\\omega_s}$.`}</p>
            </div>
          </div>
        </>,

        <>
          <h2>
            Where Gyroscopes Show Up: Equinoxes, Compasses, Spin Stability (K&K Examples 7.9 to
            7.12)
          </h2>
          <p>
            Once you have precession, three real systems open up at once. Earth is a giant
            gyroscope. So is a gyrocompass on a ship. So is a spinning bullet leaving a rifle.
          </p>
          <p>
            <strong>When to use this:</strong> any spinning object under an external torque, or
            sitting in a rotating frame like Earth itself.
          </p>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              Why is a spinning top harder to knock over than a stationary one of the same shape?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                A push gives the top a torque. With no spin, the torque tips the top. With spin, the
                same torque rotates the spin axis through a small angle. The angular momentum then
                carries the top onward without falling.
              </p>
            </details>
          </div>
          <h3>Precession of the equinoxes (K&K Example 7.9)</h3>
          <p>
            Earth is not a perfect sphere. It bulges at the equator: the equatorial radius is about
            21 km bigger than the polar radius. The sun and moon pull harder on the near side of
            that bulge than the far side, leaving Earth with a small but constant torque.
          </p>
          <p>
            The torque tries to tip Earth's spin axis toward the perpendicular of its orbital plane
            (the ecliptic normal). Because Earth spins, the axis precesses instead of tipping. The
            full sweep takes
          </p>
          <div className="lrn-eq">{`$$T_{\\text{prec}} \\approx 26{,}000\\text{ years}$$`}</div>
          <EquinoxPrecession />
          <p>
            Hipparchus discovered this by 130 BCE. He compared his star catalog with older
            Babylonian records and found the equinox points had drifted.
          </p>
          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>
              Why is the precession of the equinoxes a slow drift rather than a one-time tilt? Form
              your answer before reading on.
            </p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                The torque from sun and moon is small but constant relative to the orbit. Earth's
                huge spin angular momentum makes the precession rate tiny. The axis sweeps through
                one full circle every 26000 years.
              </p>
            </details>
          </div>
          <h3>The gyrocompass effect (K&K Example 7.10, 7.11)</h3>
          <p>
            Mount a fast-spinning wheel on gimbals so it can tilt freely about two horizontal axes,
            and put it on the rotating Earth. The wheel swings until its spin axis lines up with
            true north (the geographic pole, not the magnetic one).
          </p>
          <p>With small-angle approximations, the equation of motion for two-axis freedom reads</p>
          <div className="lrn-eq">{`$$I_\\perp\\ddot\\theta + \\frac{I_s\\Omega}{I_\\perp}\\sin\\theta\\cdot\\omega_s = 0$$`}</div>
          <p>Linearize around small theta:</p>
          <div className="lrn-eq lrn-eq-display">{`$$\\beta = \\sqrt{\\frac{L_s\\Omega}{I_\\perp}} = \\sqrt{\\frac{I_s\\omega_s\\Omega}{I_\\perp}}$$`}</div>
          <p>
            Here Omega is the slice of Earth's angular velocity perpendicular to the plane in which
            the wheel is free to tilt. At latitude lambda that slice has magnitude
          </p>
          <div className="lrn-eq">{`$$\\Omega_\\perp = \\Omega_e\\cos\\lambda$$`}</div>
          <p>
            So the gyrocompass swings fastest at the equator and slowest near the poles. At the
            geographic pole the drive vanishes and the wheel has no preferred direction. Real
            gyrocompasses fail there.
          </p>
          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>
              Why does the gyrocompass align with the rotation axis of Earth, rather than with
              magnetic north? Form your answer before reading on.
            </p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                The gyrocompass is a mechanical, not a magnetic, device. Its restoring torque comes
                from Earth's rotation acting on the spinning wheel, so it points along Earth's true
                rotation axis. This makes it useful on ships near the magnetic poles, where
                compasses fail.
              </p>
            </details>
          </div>
          <h3>Spin stability of projectiles (K&K Example 7.12)</h3>
          <p>
            A spinning cylinder shrugs off small kicks. Apply a sideways force F for time delta-t at
            distance ell from the center, and compare the response with and without spin.
          </p>
          <div className="lrn-steps">
            <p>
              <strong>Without spin.</strong> The angular impulse F ell delta-t produces an angular
              velocity
            </p>
            <div className="lrn-eq">{`$$\\Delta\\omega = \\dfrac{F\\ell\\,\\Delta t}{I_A}$$`}</div>
            <p>
              The cylinder starts tumbling and keeps going. A tiny perturbation grows without limit.
            </p>
            <p>
              <strong>With spin.</strong> The same impulse rotates the spin axis through angle
            </p>
            <div className="lrn-eq">{`$$\\phi = \\dfrac{F\\ell\\,\\Delta t}{L_s}$$`}</div>
            <p>
              For large L-s, phi is tiny. The cylinder nudges its axis a hair and keeps flying. Spin
              buys stability.
            </p>
          </div>
          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF EXPLAIN</span>
            <p>Why is rifling a barrel useful? Connect it to the spin-stability formula above.</p>
          </div>
          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>
              An angular impulse produces a fixed change in L. With no spin, that change is the
              whole L, so the body tumbles. With spin, the change is a small fraction of L-s, so the
              body's axis shifts only a little.
            </p>
          </div>
          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Static balance</span>
              <p>
                No gravity torque on a body at rest. Center of mass directly above (or below) the
                support.
              </p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Dynamic balance</span>
              <p>
                No bearing torque on the rotating body. L parallel to omega so the bearings are not
                constantly twisted.
              </p>
            </div>
          </div>
        </>,

        <>
          <h2>Why Angular Momentum Conservation Goes Beyond Newton's Laws</h2>
          <p>
            Take two point particles pulling on each other along the line between them: gravity,
            electrostatics, a stretched spring. Newton's third law makes the internal torques cancel
            in pairs, and angular momentum is conserved on the spot. The trouble starts when the
            forces do not lie along that line.
          </p>
          <p>
            <strong>When to use this:</strong> any body whose internal forces include a sideways
            component (magnetism between moving charges, for example). Angular momentum is still
            conserved, but the proof now needs more than Newton.
          </p>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              An electron has an intrinsic spin angular momentum. Can the electron's spin be derived
              from Newton's laws applied to internal moving parts?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                No. The electron is a point particle with no internal moving parts. Its spin angular
                momentum is an experimental fact, conserved by an extra physical law beyond Newton.
              </p>
            </details>
          </div>
          <p>
            Take two particles j and l with internal force f-jl acting on j from l. Newton's third
            law gives f-lj = minus f-jl. About any origin, the two torques add to
          </p>
          <div className="lrn-eq">{`$$\\tau_{jl} + \\tau_{lj} = \\mathbf{r}_j\\times\\mathbf{f}_{jl} + \\mathbf{r}_l\\times\\mathbf{f}_{lj} = (\\mathbf{r}_j - \\mathbf{r}_l)\\times\\mathbf{f}_{jl}$$`}</div>
          <p>
            The cross product is zero only when f-jl lies along the line joining the two particles.
            That stronger statement, that internal forces are along the joining line, is what we
            call the strong form of Newton's third law.
          </p>
          <NonCentralPair />
          <div className="lrn-faded">
            <div className="lrn-faded-phase">
              <span className="lrn-faded-label">COMPLETE EXAMPLE</span>
              <p>
                Show that for two particles bound by a central force (gravity), the pairwise torques
                cancel exactly. Track each step.
              </p>
              <ol className="lrn-list">
                <li>{`Place particle j at $\\mathbf{r}_j$ and particle l at $\\mathbf{r}_l$. The gravity force on j from l points along $\\mathbf{r}_l - \\mathbf{r}_j$, so $\\mathbf{f}_{jl} = -k(\\mathbf{r}_j - \\mathbf{r}_l)$ for some scalar k.`}</li>
                <li>{`Compute the pairwise torque sum: $(\\mathbf{r}_j - \\mathbf{r}_l)\\times\\mathbf{f}_{jl} = -k(\\mathbf{r}_j - \\mathbf{r}_l)\\times(\\mathbf{r}_j - \\mathbf{r}_l)$.`}</li>
                <li>{`Any vector crossed with itself is zero. So the pair torque vanishes. Internal forces conserve angular momentum.`}</li>
              </ol>
            </div>
            <div className="lrn-faded-phase">
              <span className="lrn-faded-label">YOUR TURN: PARTIAL</span>
              <p>
                Now consider a non-central force where f-jl has a component perpendicular to (r-j
                minus r-l). Show that the pairwise torque does not cancel.
              </p>
              <ol className="lrn-list">
                <li>{`Write $\\mathbf{f}_{jl} = f_\\parallel\\hat{r} + f_\\perp\\hat{n}$, where $\\hat{r}$ is along the joining line and $\\hat{n}$ is perpendicular.`}</li>
                <li>{`Plug into the pair torque: $(\\mathbf{r}_j - \\mathbf{r}_l)\\times(f_\\parallel\\hat{r} + f_\\perp\\hat{n})$. The parallel piece cancels.`}</li>
                <li>{`Solve: the leftover is $|\\mathbf{r}_j - \\mathbf{r}_l|f_\\perp(\\hat{r}\\times\\hat{n})$, generally nonzero.`}</li>
              </ol>
            </div>
            <div className="lrn-faded-phase">
              <span className="lrn-faded-label">INDEPENDENT PRACTICE</span>
              <p>
                Two electrons move along separate parallel paths. The magnetic force between them
                has a component perpendicular to the line joining them. Compute the residual pair
                torque, and explain where the missing angular momentum goes (hint: into the
                electromagnetic field).
              </p>
            </div>
          </div>
          <h3>Where the strong form fails</h3>
          <p>
            The magnetic force between two moving charges does not point along the line joining
            them. It picks up a sideways component. So the pairwise torques do not cancel, and
            Newton's machinery alone cannot save L.
          </p>
          <p>
            We observe in experiments that L is still conserved for atoms, electrons, and even
            electromagnetic fields. We adopt this as an independent physical law, the rotational
            counterpart to conservation of linear momentum.
          </p>
          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>
              Conservation of angular momentum follows from rotational symmetry of the laws of
              physics (Noether's theorem). Newton's laws were a special case. The deeper symmetry
              survives.
            </p>
          </div>
          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF EXPLAIN</span>
            <p>
              For two charges moving along separate parallel lines, the magnetic forces between them
              are not along the line joining them. Where does the missing angular momentum go?
            </p>
          </div>
          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Central forces</span>
              <p>
                Gravity, electrostatics. Forces lie along the line between particles. Pairwise
                torques cancel. L conservation follows from Newton.
              </p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Non-central forces</span>
              <p>
                Magnetism between moving charges. Forces have sideways components. L conservation
                still holds, but as an independent law tied to rotational symmetry.
              </p>
            </div>
          </div>
        </>,

        <>
          <h2>The Tensor of Inertia (K&K Examples 7.13, 7.14)</h2>
          <p>
            An aircraft's autopilot needs to know how the plane resists rolling, pitching, and
            yawing, all at the same time. The tensor of inertia stores all that in one compact
            object.
          </p>
          <p>
            We need a quantity that takes any omega vector and returns the matching L vector. A
            single scalar moment of inertia cannot do that for free rotation. A 3 by 3 matrix can.
          </p>
          <p>
            <strong>When to use this:</strong> any time omega is not along a symmetry axis of the
            body. The tensor handles every rotation axis with a single object.
          </p>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              For a solid cube spinning about a corner-to-corner diagonal, will L be parallel to
              omega?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                Yes, by symmetry. The cube has three perpendicular four-fold axes, so I is the same
                in every direction (a multiple of the identity). For such bodies L is always
                parallel to omega.
              </p>
            </details>
          </div>
          <p>Start from L = sum of r-j cross m-j v-j with v = omega cross r:</p>
          <div className="lrn-eq">{`$$\\mathbf{L} = \\sum_j m_j\\,\\mathbf{r}_j\\times(\\boldsymbol{\\omega}\\times\\mathbf{r}_j)$$`}</div>
          <p>
            Use the identity a cross (b cross c) = b (a dot c) minus c (a dot b) (the BAC-CAB rule)
            to expand the triple cross product. Collect terms by component. The x-component reads
          </p>
          <div className="lrn-eq">{`$$L_x = \\sum_j m_j(y_j^2+z_j^2)\\omega_x - \\sum_j m_j x_j y_j\\,\\omega_y - \\sum_j m_j x_j z_j\\,\\omega_z$$`}</div>
          <p>
            Name the coefficients moments of inertia (the diagonal sums) and products of inertia
            (the off-diagonal sums):
          </p>
          <div className="lrn-eq">{`$$I_{xx} = \\sum m(y^2+z^2),\\quad I_{xy} = -\\sum m\\,xy,\\quad I_{xz} = -\\sum m\\,xz$$`}</div>
          <p>
            with cyclic definitions for the rest. The relation L-i = sum-j I-ij omega-j now reads
          </p>
          <div className="lrn-eq">{`$$L_x = I_{xx}\\omega_x + I_{xy}\\omega_y + I_{xz}\\omega_z$$`}</div>
          <p>and cyclically for L-y and L-z. Pack the nine coefficients into a single matrix:</p>
          <div className="lrn-eq lrn-eq-display">{`$$\\mathbf{L} = \\overleftrightarrow{I}\\,\\boldsymbol{\\omega}$$`}</div>
          <InertiaTensor />
          <h3>Worked example: rotating dumbbell (K&K Example 7.13)</h3>
          <DumbbellTensor />
          <p>Place two masses m at z = +a and z = -a on the z-axis, no offset in x or y.</p>
          <div className="lrn-steps">
            <p>
              <strong>Step 1.</strong> I-zz = sum m (x squared plus y squared) = 0, because both
              masses sit on the z-axis itself (no perpendicular distance).
            </p>
            <p>
              <strong>Step 2.</strong> I-xx = I-yy = sum m (y squared plus z squared) = 2 m a
              squared.
            </p>
            <p>
              <strong>Step 3.</strong> All products of inertia vanish: y is zero for every mass, and
              the masses are mirror images about the origin.
            </p>
            <p>
              <strong>Step 4.</strong> The tensor is diagonal. Spin about z gives L = 0. Spin about
              x or y gives L = 2 m a squared times omega.
            </p>
          </div>
          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>{`Why is $I_{zz} = 0$ for the dumbbell on the z-axis, even though the masses have nonzero z-coordinates? Form your answer before reading on.`}</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>{`$I_{zz} = \\sum m(x^2 + y^2)$ measures perpendicular distance from the z-axis. Both masses sit on the z-axis itself, so $x = y = 0$ for each, and the sum is zero.`}</p>
            </details>
          </div>
          <h3>Worked example: tensor of inertia for the skew rod (K&K Example 7.14)</h3>
          <p>
            Place mass m at r-1 = (ell sin alpha, 0, ell cos alpha) and another mass m at r-2 = the
            negative of r-1. The y-coordinate of both masses is zero. Compute each tensor entry from
            the definition:
          </p>
          <div className="lrn-steps">
            <p>
              <strong>I-xx.</strong> sum m (y squared plus z squared) = 2 m ell squared cos squared
              alpha.
            </p>
            <p>
              <strong>I-zz.</strong> sum m (x squared plus y squared) = 2 m ell squared sin squared
              alpha.
            </p>
            <p>
              <strong>I-yy.</strong> sum m (x squared plus z squared) = 2 m ell squared.
            </p>
            <p>
              <strong>I-xz.</strong> minus sum m (x z) = minus 2 m ell squared sin alpha cos alpha.
            </p>
            <p>
              <strong>All other off-diagonals.</strong> Zero, since y = 0 for both masses.
            </p>
          </div>
          <p>So when omega is along z (the shaft axis):</p>
          <div className="lrn-eq">{`$$L_x = I_{xz}\\omega_z = -2m\\ell^2\\sin\\alpha\\cos\\alpha\\,\\omega,\\quad L_z = I_{zz}\\omega_z = 2m\\ell^2\\sin^2\\alpha\\,\\omega$$`}</div>
          <p>
            The total magnitude works out to 2 m ell squared omega cos alpha, matching Method 1 from
            Section 2.
          </p>
          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF EXPLAIN</span>
            <p>
              Why does I-xz come out negative for the skew rod? Look at the sign of the product x z
              for each mass.
            </p>
          </div>
          <div className="lrn-faded">
            <div className="lrn-faded-phase">
              <span className="lrn-faded-label">COMPLETE EXAMPLE</span>
              <p>
                Build the tensor of inertia for two equal masses on a skew rod. Show that the
                off-diagonal entry I-xz captures the tilt.
              </p>
              <ol className="lrn-list">
                <li>{`Place mass 1 at $(\\ell\\sin\\alpha, 0, \\ell\\cos\\alpha)$ and mass 2 at the negative.`}</li>
                <li>{`Compute $I_{xz} = -\\sum m\\,xz$. Each mass gives $-m\\ell^2\\sin\\alpha\\cos\\alpha$, and the two add to $-2m\\ell^2\\sin\\alpha\\cos\\alpha$.`}</li>
                <li>{`Compute $I_{zz} = \\sum m(x^2+y^2) = 2m\\ell^2\\sin^2\\alpha$ and $I_{xx} = \\sum m(y^2+z^2) = 2m\\ell^2\\cos^2\\alpha$.`}</li>
                <li>{`Apply $\\mathbf{L} = \\overleftrightarrow{I}\\,\\boldsymbol{\\omega}$ with $\\boldsymbol{\\omega} = \\omega\\hat{z}$. Get $L_x$ and $L_z$ as shown above.`}</li>
              </ol>
            </div>
            <div className="lrn-faded-phase">
              <span className="lrn-faded-label">YOUR TURN: PARTIAL</span>
              <p>
                Now place two unequal masses on the skew rod. Mass m-1 sits at one end, mass m-2 at
                the other. Find the new tensor of inertia.
              </p>
              <ol className="lrn-list">
                <li>{`Mass 1 at $(\\ell\\sin\\alpha, 0, \\ell\\cos\\alpha)$; mass 2 at the negative position.`}</li>
                <li>{`Set up $I_{xz} = -m_1 \\ell^2 \\sin\\alpha\\cos\\alpha - m_2 \\ell^2\\sin\\alpha\\cos\\alpha$. Combine the like terms.`}</li>
                <li>{`Solve: confirm $I_{xz} = -(m_1 + m_2)\\ell^2\\sin\\alpha\\cos\\alpha$.`}</li>
              </ol>
            </div>
            <div className="lrn-faded-phase">
              <span className="lrn-faded-label">INDEPENDENT PRACTICE</span>
              <p>
                Compute the full tensor of inertia for three equal masses placed on a triangle in
                the xy-plane. Find the principal moments and identify the principal axes.
              </p>
            </div>
          </div>
          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>
              Off-diagonal entries measure how mass is distributed asymmetrically across pairs of
              axes. Symmetric distributions give zero off-diagonals.
            </p>
          </div>
          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Diagonal tensor</span>
              <p>
                Off-diagonal entries vanish. Each component L-i depends only on the matching
                omega-i. Choose principal axes to get this.
              </p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Full tensor</span>
              <p>
                Off-diagonals are nonzero. Components of omega cross-couple into L. Required when
                axes are not principal.
              </p>
            </div>
          </div>
        </>,

        <>
          <h2>Principal Axes and Rotational Kinetic Energy (K&K Example 7.15)</h2>
          <p>
            The Explorer 1 satellite was launched in 1958 spinning about its long axis like a
            pencil. Hours later it was tumbling end over end. Principal axes and energy minimization
            explain why.
          </p>
          <p>
            Every rigid body has three perpendicular axes that diagonalize the tensor of inertia.
            These are the principal axes.
          </p>
          <p>
            <strong>When to use this:</strong> any time you want clean equations. Principal axes
            reduce a 3 by 3 matrix to three numbers I-1, I-2, I-3.
          </p>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>Where do the principal axes of a uniform rectangular brick lie?</p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                Along the three perpendicular edge directions through the center of mass. Symmetry
                forces this. For symmetric bodies, principal axes coincide with symmetry axes.
              </p>
            </details>
          </div>
          <p>In the principal-axis frame the tensor strips down to its diagonal:</p>
          <div className="lrn-eq">{`$$\\overleftrightarrow{I} = \\begin{pmatrix}I_1 & 0 & 0 \\\\ 0 & I_2 & 0 \\\\ 0 & 0 & I_3\\end{pmatrix}$$`}</div>
          <p>And L decouples component by component:</p>
          <div className="lrn-eq">{`$$L_1 = I_1\\omega_1,\\quad L_2 = I_2\\omega_2,\\quad L_3 = I_3\\omega_3$$`}</div>
          <h3>Rotational kinetic energy</h3>
          <p>
            The kinetic energy of a rigid body splits cleanly into two pieces: translation of the
            center of mass, plus rotation about that center.
          </p>
          <div className="lrn-eq">{`$$K = \\tfrac{1}{2}MV^2 + \\tfrac{1}{2}\\sum m_j v_j'^2$$`}</div>
          <p>
            We can write the rotational piece in three equivalent forms. First, in vector form using
            L:
          </p>
          <div className="lrn-eq lrn-eq-display">{`$$K_{\\text{rot}} = \\tfrac{1}{2}\\,\\boldsymbol{\\omega}\\cdot\\mathbf{L}$$`}</div>
          <p>Second, in the principal-axis frame:</p>
          <div className="lrn-eq">{`$$K_{\\text{rot}} = \\tfrac{1}{2}(I_1\\omega_1^2 + I_2\\omega_2^2 + I_3\\omega_3^2)$$`}</div>
          <p>Third, when rotation is about a single principal axis:</p>
          <div className="lrn-eq">{`$$K_{\\text{rot}} = \\dfrac{L^2}{2I}$$`}</div>
          <h3>Worked example: flying saucers vs flying cigars (K&K Example 7.15)</h3>
          <p>
            A real spacecraft is never perfectly rigid. Fuel sloshes, panels flex, joints scrape.
            Those tiny internal motions burn energy as heat. With no external torque, L stays fixed
            forever, but K-rot slowly bleeds out.
          </p>
          <p>{`From $K_{\\text{rot}} = \\dfrac{L^2}{2I}$, the body's kinetic energy at fixed L is smallest when I is largest. So the body drifts toward spinning about whichever principal axis has the biggest moment of inertia.`}</p>
          <OblateProlate />
          <div className="lrn-steps">
            <p>
              <strong>Oblate body (saucer).</strong> The two in-plane moments are equal and small,
              I-1 = I-2. The third moment I-3, perpendicular to the disk, is the largest. Spinning
              the saucer about that perpendicular axis already maximizes I, so the spin stays put.
              Stable.
            </p>
            <p>
              <strong>Prolate body (cigar).</strong> The long axis has the smallest moment, I-3, and
              the two transverse moments I-1 = I-2 are larger. To maximize I, the cigar wants to
              tumble end over end about a transverse axis. Spin along the long axis is the
              high-energy state, so it does not last.
            </p>
          </div>
          <p>
            That is exactly what doomed Explorer 1 in 1958. The satellite was launched spinning
            about its long axis. Tiny internal flexing bled energy. Within hours the spin had
            shifted onto a transverse axis and the antennas were tumbling end over end. Mission
            lost.
          </p>
          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF EXPLAIN</span>
            <p>
              Why does internal damping not change L but does change K-rot? Hint: torque is
              external, but heat is internal.
            </p>
          </div>
          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>
              External torque is zero, so L is conserved. Internal friction converts mechanical
              energy to heat without changing L. The body relaxes to the state with minimum K at
              fixed L, which is rotation about the maximum-I axis.
            </p>
          </div>
          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Symmetric body</span>
              <p>{`Two principal moments equal: $I_2 = I_3 = I_\\perp$. Closed-form solutions for torque-free precession.`}</p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Asymmetric body</span>
              <p>
                All three principal moments different. Stability depends on whether spin is about
                the largest, smallest, or intermediate axis.
              </p>
            </div>
          </div>
        </>,

        <>
          <h2>Rotation About a Fixed Point: Generalized Parallel Axis Theorem</h2>
          <p>
            An engineer modeling a tumbling asymmetric satellite, a pendulum at its pivot, or a
            gyroscope on a pylon needs the tensor of inertia about a point other than the center of
            mass. The generalized parallel axis theorem provides the shift.
          </p>
          <p>
            <strong>When to use this:</strong> any time the rotation point is offset from the center
            of mass.
          </p>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              Take a uniform sphere of radius b and mass M. The pivot sits at distance ell along the
              z-axis. What is I-zz about the pivot?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                Just (2/5) M b squared, the same as about the center. The offset is along z, so it
                does not change the moment about z. Only x and y moments pick up the M ell squared
                term.
              </p>
            </details>
          </div>
          <p>
            Let (X, Y, Z) be the coordinates of the center of mass measured from the new origin. The
            tensor about the new origin is the center-of-mass tensor plus a shift term:
          </p>
          <div className="lrn-eq lrn-eq-display">{`$$I_{xx} = (I_0)_{xx} + M(Y^2+Z^2),\\quad I_{xy} = (I_0)_{xy} - MXY$$`}</div>
          <p>
            and similarly for the other entries. The minus on the off-diagonal shift mirrors the
            minus built into the definition of products of inertia.
          </p>
          <h3>Worked example: offset sphere</h3>
          <OffsetSphere />
          <p>
            Take a solid sphere of mass M and radius b, with center at (0, 0, ell). About its own
            center, by symmetry, the tensor is (2/5) M b squared times the identity matrix.
          </p>
          <div className="lrn-steps">
            <p>
              <strong>I-xx.</strong> (2/5) M b squared plus M (Y squared plus Z squared) = (2/5) M b
              squared plus M ell squared.
            </p>
            <p>
              <strong>I-yy.</strong> Same as I-xx by symmetry.
            </p>
            <p>
              <strong>I-zz.</strong> (2/5) M b squared plus M (X squared plus Y squared) = (2/5) M b
              squared. The offset along z does not show up.
            </p>
            <p>
              <strong>Off-diagonals.</strong> Zero, because the center is on the z-axis (X = Y = 0).
            </p>
          </div>
          <p>
            This matches the result for a single principal axis combined with the textbook
            parallel-axis theorem from the previous module.
          </p>
          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF EXPLAIN</span>
            <p>
              Why does the offset along z not change I-zz, but does change I-xx and I-yy? Connect
              the answer to which coordinates appear in each definition.
            </p>
          </div>
          <div className="lrn-faded">
            <div className="lrn-faded-phase">
              <span className="lrn-faded-label">COMPLETE EXAMPLE</span>
              <p>{`A solid cube of side $a$ and mass $M$ rotates about a corner. Find $I_{xx}$ about the corner using the parallel axis theorem.`}</p>
              <ol className="lrn-list">
                <li>{`At the center of mass, $(I_0)_{xx} = \\frac{1}{6}Ma^2$ for a solid cube.`}</li>
                <li>{`The corner sits at offset $X = Y = Z = \\frac{a}{2}$ from the center. So $Y^2 + Z^2 = \\frac{a^2}{2}$.`}</li>
                <li>{`Apply the shift: $I_{xx} = \\frac{1}{6}Ma^2 + M\\cdot \\frac{a^2}{2} = \\frac{2}{3}Ma^2$.`}</li>
              </ol>
            </div>
            <div className="lrn-faded-phase">
              <span className="lrn-faded-label">YOUR TURN: PARTIAL</span>
              <p>{`A thin uniform rod of length $L$ and mass $M$ pivots at one end. Find $I$ about the pivot, perpendicular to the rod.`}</p>
              <ol className="lrn-list">
                <li>{`At the center of mass, $(I_0)_\\perp = \\frac{1}{12}ML^2$.`}</li>
                <li>{`The pivot is at offset $\\frac{L}{2}$ from the center, perpendicular to the rod axis. Plug into the shift formula.`}</li>
                <li>{`Solve: confirm $I = \\frac{1}{3}ML^2$ about the pivot.`}</li>
              </ol>
            </div>
            <div className="lrn-faded-phase">
              <span className="lrn-faded-label">INDEPENDENT PRACTICE</span>
              <p>
                A solid disk of radius b, mass M, and the symmetry axis vertical, hangs from a point
                on its rim. Find the tensor of inertia about the hanging point. Use the same method.
              </p>
            </div>
          </div>
          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>
              The moment about an axis depends only on perpendicular distances to that axis.
              Shifting the origin along an axis does not change those distances for any mass
              element.
            </p>
          </div>
          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Origin at center of mass</span>
              <p>
                For free rigid bodies. Removes the orbital piece of L. Diagonalizable along the
                body's symmetry axes.
              </p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Origin at fixed pivot</span>
              <p>
                For constrained bodies. Constraint force at the pivot makes no torque. Use
                generalized parallel axis to shift tensor to the pivot.
              </p>
            </div>
          </div>
        </>,

        <>
          <h2>Torque-Free Precession and the Earth's Wobble</h2>
          <p>
            A thrown football wobbles because its spin axis sits a little off its symmetry axis.
            Earth itself wobbles for the same reason, on a 430-day cycle.
          </p>
          <p>
            With no external torque, L stays fixed forever. But that does not force the body to spin
            steadily. As long as omega is not parallel to L, the body wobbles.
          </p>
          <p>
            <strong>When to use this:</strong> any freely-spinning body whose spin axis is slightly
            off its symmetry axis.
          </p>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              Toss a quarter so it spins slightly off its symmetry axis. What does the resulting
              motion look like?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                The quarter wobbles. The symmetry axis traces a small cone around the fixed L vector
                while the coin keeps spinning. This is torque-free precession.
              </p>
            </details>
          </div>
          <p>
            Take a symmetric top: one moment I-3 = I-s along the symmetry axis, the other two equal,
            I-1 = I-2 = I-perp. Spin it nearly aligned with the symmetry axis so the tilt angles
            theta-x and theta-y are small. The equations of motion linearize to
          </p>
          <div className="lrn-eq">{`$$L_x = I_\\perp\\dfrac{d\\theta_x}{dt} + L_s\\sin\\theta_y$$`}</div>
          <div className="lrn-eq">{`$$L_y = I_\\perp\\dfrac{d\\theta_y}{dt} - L_s\\sin\\theta_x$$`}</div>
          <p>and L-z = I-s omega-z = L-s. Differentiate and combine:</p>
          <div className="lrn-eq">{`$$\\dfrac{d^2\\omega_x}{dt^2} + \\gamma^2\\omega_x = 0,\\quad \\gamma = \\dfrac{L_s}{I_\\perp} = \\dfrac{\\omega_s I_s}{I_\\perp}$$`}</div>
          <p>The solutions are simple harmonic in the body frame:</p>
          <div className="lrn-eq">{`$$\\omega_x = A\\sin(\\gamma t + \\phi),\\quad \\omega_y = A\\cos(\\gamma t + \\phi)$$`}</div>
          <div className="lrn-faded">
            <div className="lrn-faded-phase">
              <span className="lrn-faded-label">COMPLETE EXAMPLE</span>
              <p>
                Show how the torque-free harmonic equation comes out of the small-angle equations of
                motion. Track each algebra step.
              </p>
              <ol className="lrn-list">
                <li>{`Differentiate the $L_x$ equation in time: $\\dot L_x = I_\\perp \\ddot\\theta_x + L_s\\cos\\theta_y\\,\\dot\\theta_y$. For small angles, $\\cos\\theta_y \\approx 1$.`}</li>
                <li>{`Substitute the $L_y$ equation to eliminate $\\dot\\theta_y = \\dfrac{L_y + L_s\\sin\\theta_x}{I_\\perp}$.`}</li>
                <li>{`Use torque-free condition $\\dot L_x = \\dot L_y = 0$ and small-angle $\\sin\\theta_x \\approx \\theta_x$.`}</li>
                <li>{`The result $\\ddot\\theta_x + \\left(\\dfrac{L_s}{I_\\perp}\\right)^2 \\theta_x = 0$ is simple harmonic with frequency $\\gamma = \\dfrac{L_s}{I_\\perp}$.`}</li>
              </ol>
            </div>
            <div className="lrn-faded-phase">
              <span className="lrn-faded-label">YOUR TURN: PARTIAL</span>
              <p>{`Consider an oblate body with $I_s = 2I_\\perp$. The body spins at $\\omega_s = 10\\,\\text{rad/s}$. Find the body-frame wobble period.`}</p>
              <ol className="lrn-list">
                <li>{`Plug into $\\gamma = \\dfrac{\\omega_s I_s}{I_\\perp}$. Spell out the substitution.`}</li>
                <li>{`Solve for $\\gamma = 20\\,\\text{rad/s}$.`}</li>
                <li>{`Compute the period: $T = \\dfrac{2\\pi}{\\gamma}$. Confirm $T \\approx 0.314\\,\\text{s}$.`}</li>
              </ol>
            </div>
            <div className="lrn-faded-phase">
              <span className="lrn-faded-label">INDEPENDENT PRACTICE</span>
              <p>{`A prolate body has $I_s = \\tfrac{1}{2}I_\\perp$ and spins at $\\omega_s = 100$ rad/s. Find the body-frame wobble period and the apparent period seen by an observer rotating with the body.`}</p>
            </div>
          </div>
          <p>And the angles trace circles:</p>
          <div className="lrn-eq">{`$$\\theta_x = \\theta_0\\cos\\gamma t,\\quad \\theta_y = \\theta_0\\sin\\gamma t$$`}</div>
          <PrecessionCone />
          <h3>The Earth's wobble (Chandler wobble)</h3>
          <p>
            Earth itself wobbles. In the body frame the rate is gamma. For an observer fixed on
            Earth, who is rotating along with omega-s, the rate appears slowed to
          </p>
          <div className="lrn-eq">{`$$\\gamma' = \\omega_s\\dfrac{I_s - I_\\perp}{I_\\perp}$$`}</div>
          <p>{`For Earth, $\\dfrac{I_s - I_\\perp}{I_\\perp}$ is about $\\tfrac{1}{300}$, so the rigid-body theory predicts a wobble period of roughly 300 days. The actual Chandler wobble runs closer to 430 days. The extra time comes from Earth's slight elasticity: the planet is not a perfectly rigid solid.`}</p>
          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>
              The 300-day result assumes a rigid Earth. Real Earth deforms slightly under rotational
              stress. The deformation softens the response and lengthens the wobble period.
            </p>
          </div>
          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF EXPLAIN</span>
            <p>
              Why does the apparent rate gamma-prime differ from the body-frame rate gamma? Hint:
              the Earth observer also rotates with omega-s.
            </p>
          </div>
          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Body frame</span>
              <p>
                Tensor of inertia is diagonal and time-independent. Axes rotate with the body.
                Useful for Euler's equations.
              </p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Space frame</span>
              <p>
                Axes fixed in the lab. L is constant for torque-free motion. Tensor of inertia
                varies in time.
              </p>
            </div>
          </div>
        </>,

        <>
          <h2>Euler's Equations and Stability of Rotation (K&K Examples 7.16, 7.17, 7.18)</h2>
          <p>
            Cosmonaut Vladimir Dzhanibekov filmed a T-handle wrench flipping end over end every few
            seconds in zero gravity. Euler's equations predict the flip on the nose.
          </p>
          <p>
            Euler's equations are the body-frame equations of motion for any rigid body, not just
            the symmetric tops we just handled. They are three coupled nonlinear equations.
          </p>
          <p>
            <strong>When to use this:</strong> any time you want to analyse rotation in the body's
            own frame. Euler's equations expose stability and tumbling without lab-frame
            coordinates.
          </p>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              Take a hardback book. It has three different principal moments. Try tossing it
              spinning about each of its three axes. Which axes give stable, smooth flight?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                The longest axis (smallest I) and the perpendicular flat axis (largest I) give
                stable spins. The middle axis (intermediate I) gives a flipping, tumbling motion.
              </p>
            </details>
          </div>
          <p>{`In body-fixed principal axes, the three components of $\\dfrac{d\\mathbf{L}}{dt} = \\boldsymbol{\\tau}$ become (Eq. 7.27)`}</p>
          <div className="lrn-eq lrn-eq-display">{`$$\\tau_1 = I_1\\dfrac{d\\omega_1}{dt} + (I_3 - I_2)\\omega_3\\omega_2$$`}</div>
          <div className="lrn-eq">{`$$\\tau_2 = I_2\\dfrac{d\\omega_2}{dt} + (I_1 - I_3)\\omega_1\\omega_3$$`}</div>
          <div className="lrn-eq">{`$$\\tau_3 = I_3\\dfrac{d\\omega_3}{dt} + (I_2 - I_1)\\omega_2\\omega_1$$`}</div>
          <h3>Stability test (K&K Example 7.16)</h3>
          <p>
            Take torque-free motion with omega mostly along axis 1. Treat omega-2 and omega-3 as
            small perturbations and drop their squares. The Euler equations linearize to
          </p>
          <div className="lrn-eq">{`$$\\ddot\\omega_2 + A\\omega_2 = 0,\\quad A = \\dfrac{(I_1 - I_3)(I_2 - I_1)\\,\\omega_1^2}{I_2 I_3}$$`}</div>
          <TennisRacket />
          <div className="lrn-steps">
            <p>
              <strong>If A is positive,</strong> motion is simple harmonic. The perturbation
              oscillates and stays bounded. Stable.
            </p>
            <p>
              <strong>If A is negative,</strong> the equation is unstable. The perturbation grows
              exponentially. Unstable.
            </p>
            <p>
              <strong>Sign of A.</strong> A is positive if I-1 is the largest or smallest of the
              three. A is negative if I-1 is the middle one.
            </p>
          </div>
          <p>
            Spinning about the largest-I or smallest-I axis is stable. Spinning about the middle-I
            axis is not. This is the tennis-racket theorem, and it is exactly what Dzhanibekov saw
            on film.
          </p>
          <div className="lrn-faded">
            <div className="lrn-faded-phase">
              <span className="lrn-faded-label">COMPLETE EXAMPLE</span>
              <p>{`Test the stability of a thin book with $I_1 = 0.10$, $I_2 = 0.05$, $I_3 = 0.06$ (in $\\text{kg m}^2$). Spin it about each principal axis at $\\omega_1 = 5\\,\\text{rad/s}$ and find $A$.`}</p>
              <ol className="lrn-list">
                <li>{`Spin about axis 1 (largest $I$): $A = \\frac{(I_1 - I_3)(I_2 - I_1)\\omega_1^2}{I_2 I_3} = \\frac{(0.04)(-0.05)(25)}{0.003} = -16.7$. Negative, so unstable here? Wait: when we spin about axis 1 we rename roles. Actually this picks $I_1$ as the spin axis with $A>0$ when $I_1$ is max OR min. Since $I_1$ is the largest, $(I_1 - I_3)>0$ and $(I_1 - I_2)>0$, so the product is positive. Stable.`}</li>
                <li>{`Spin about axis 3 (middle $I$): now relabel so that $I_3$ takes the role of $I_1$. The two factors $(I_3 - I_2)$ and $(I_1 - I_3)$ have opposite signs. So $A < 0$. Unstable.`}</li>
                <li>{`Spin about axis 2 (smallest $I$): relabel again. Both factors have the same sign. So $A > 0$. Stable.`}</li>
              </ol>
            </div>
            <div className="lrn-faded-phase">
              <span className="lrn-faded-label">YOUR TURN: PARTIAL</span>
              <p>{`A flat tile has $I_1 = 0.20$, $I_2 = 0.20$, $I_3 = 0.40$. Test stability about each axis. (Hint: two of the moments are equal, so the test is degenerate along those axes.)`}</p>
              <ol className="lrn-list">
                <li>{`Spin about axis 3 (max $I$): both factors $(I_3 - I_1)$ and $(I_3 - I_2)$ are positive. $A > 0$, stable.`}</li>
                <li>{`Spin about axis 1: factors are $(I_1 - I_3) < 0$ and $(I_1 - I_2) = 0$. Plug in: $A$ is exactly zero, marginal stability.`}</li>
                <li>{`Solve and interpret: a body with two equal moments is neutrally stable on each of those equal axes.`}</li>
              </ol>
            </div>
            <div className="lrn-faded-phase">
              <span className="lrn-faded-label">INDEPENDENT PRACTICE</span>
              <p>{`A T-handle wrench has $I_1 = 0.5$, $I_2 = 0.6$, $I_3 = 0.1$ (in kg m squared). Identify which axis is unstable, and compute the growth rate $\\sqrt{|A|}$ in s$^{-1}$ when $\\omega_1 = 20$ rad/s.`}</p>
            </div>
          </div>
          <h3>Worked example: rotating rod (K&K Example 7.17)</h3>
          <p>
            Force a rod to rotate about a fixed perpendicular axis at constant rate Omega. Let theta
            measure the rod's orientation about that axis. Euler's equations reduce to
          </p>
          <div className="lrn-eq">{`$$2\\ddot\\theta + \\dfrac{I_3 - I_2}{I_1}\\Omega^2\\sin 2\\theta = 0$$`}</div>
          <p>
            That is a pendulum equation in 2 theta. Small oscillations about theta = 0 are simple
            harmonic.
          </p>
          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>
              Why does the rotating rod equation come out as a pendulum in 2 theta rather than just
              theta? Form your answer before reading on.
            </p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                The rod has a two-fold symmetry: rotating it by 180 degrees gives the same physical
                configuration. So the restoring torque must repeat with that period, which forces
                the sin 2 theta dependence.
              </p>
            </details>
          </div>
          <h3>Worked example: torque-free precession of a symmetric body (K&K Example 7.18)</h3>
          <p>
            Set I-2 = I-3 = I-perp and I-1 = I-s for a symmetric top. Euler's equations close into a
            clean form. In the body frame, omega rotates at the constant rate
          </p>
          <div className="lrn-eq">{`$$\\Gamma = \\dfrac{I_1 - I_\\perp}{I_\\perp}\\,\\omega_s$$`}</div>
          <p>
            Adding the lab-frame requirement that L stay fixed gives the lab-frame precession rate:
          </p>
          <div className="lrn-eq">{`$$\\Omega_p = \\dfrac{I_1\\omega_s}{I_\\perp\\cos\\alpha}$$`}</div>
          <p>where alpha is the angle between L and the symmetry axis.</p>
          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>{`Why does the lab-frame precession rate $\\Omega_p$ contain a $\\frac{1}{\\cos\\alpha}$ factor? Form your answer before reading on.`}</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>{`The body axis sits at angle $\\alpha$ to the fixed L vector. To trace a cone of half-angle $\\alpha$ at constant body-frame rate $\\Gamma$, the lab-frame sweep must compensate for the projection. Dividing by $\\cos\\alpha$ recovers the full rotation rate around L.`}</p>
            </details>
          </div>
          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF EXPLAIN</span>
            <p>
              Why is rotation about the intermediate axis unstable? Connect to the sign of (I-1
              minus I-3)(I-2 minus I-1) when I-1 lies between I-2 and I-3.
            </p>
          </div>
          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>
              For the maximum or minimum axis, both factors in A share the same sign. A stays
              positive, giving stable oscillation. For the middle axis, the factors have opposite
              signs. A is negative, and the perturbation grows.
            </p>
          </div>
          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Stable axes</span>
              <p>
                Maximum-I and minimum-I axes. Small perturbations oscillate. Spin remains close to
                the chosen axis indefinitely.
              </p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Unstable axis</span>
              <p>
                Intermediate-I axis. Tiny perturbations grow exponentially. The body flips over and
                recovers, then flips again.
              </p>
            </div>
          </div>
        </>,

        <>
          <h2>Three Modes of Gyroscope Motion</h2>
          <p>
            A spinning top released gently stays steady. A spinning top dropped from a tilt nods up
            and down while drifting. The same equations cover both motions: only the starting
            conditions differ.
          </p>
          <p>
            Solve the small-angle equations once and three motion patterns fall out. Which one you
            see in front of you depends on how the gyroscope was set going.
          </p>
          <p>
            <strong>When to use this:</strong> any real gyroscope on a low-friction support. Each
            mode has its own visual signature.
          </p>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              If you let a spinning gyroscope go from rest at a tilted angle, what motion do you
              expect?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                Not steady precession. The axle dips down, then rises, then dips again, while
                drifting forward. The trace of the axle tip is a cycloid. This is nutation.
              </p>
            </details>
          </div>
          <p>
            Use the same setup as before. A gyroscope sits on a pivot at lever arm ell with weight
            W. Its spin angular momentum L-s lies along the symmetry axis, and its transverse moment
            of inertia is I-perp. The small-angle equations of motion read
          </p>
          <div className="lrn-eq">{`$$L_x = I_\\perp\\omega_x - L_s\\theta_z,\\quad L_y = I_\\perp\\omega_y,\\quad L_z = I_\\perp\\omega_z + L_s\\theta_x$$`}</div>
          <p>{`Combine these with the gravity torque $\\tau_y = \\ell W$. After differentiation, $\\omega_z$ obeys a simple harmonic equation with frequency $\\gamma = \\dfrac{L_s}{I_\\perp}$.`}</p>
          <h3>Case 1: uniform precession</h3>
          <p>{`Special initial conditions: launch the axle moving at exactly $\\Omega = \\dfrac{\\ell W}{L_s}$. The nodding term vanishes and the axle sweeps steadily around horizontal. This is the textbook gyroscope picture.`}</p>
          <h3>Case 2: torque-free precession</h3>
          <p>
            Set W = 0 (gyroscope perfectly horizontal or in free fall). With no gravity torque, the
            axle traces a circle at rate gamma in the body frame. Earth's Chandler wobble is this
            case applied to a planet.
          </p>
          <h3>Case 3: nutation (cycloidal)</h3>
          <p>Release the gyroscope from rest at a tilt. The general solution gives</p>
          <div className="lrn-eq">{`$$\\theta_z = \\dfrac{\\ell W}{\\gamma L_s}(\\cos\\gamma t - 1)$$`}</div>
          <div className="lrn-eq">{`$$\\theta_x = \\dfrac{\\ell W}{\\gamma L_s}(\\gamma t - \\sin\\gamma t)$$`}</div>
          <CycloidalNutation />
          <p>{`The axle tip traces a cycloid: it dips, rises, and dips again at frequency $\\gamma$, while drifting forward at the average rate $\\Omega = \\dfrac{\\ell W}{L_s}$. Same path as a pebble stuck in a rolling tire.`}</p>
          <h3>Validity criterion</h3>
          <p>The small-angle analysis only works when the dipping is small:</p>
          <div className="lrn-eq">{`$$\\dfrac{2\\ell W}{\\gamma L_s} \\ll 1,\\quad \\text{equivalently }\\dfrac{\\Omega_{\\text{prec}}}{\\gamma}\\ll 1$$`}</div>
          <p>
            In words, the precession period must be much longer than the nutation period. A
            fast-spinning gyro satisfies this easily.
          </p>
          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF EXPLAIN</span>
            <p>
              Why does the axle dip first instead of starting horizontal motion? Hint: at t = 0 the
              spin angular momentum has only a horizontal component, but gravity acts immediately.
            </p>
          </div>
          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>
              The general solution superposes a uniform precession part and an oscillating part.
              Different initial conditions select different mixes. Pure uniform precession requires
              the right starting velocity; release from rest gives nutation.
            </p>
          </div>
          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Toy gyroscope</span>
              <p>
                High pivot friction. Nutation damps out fast. Only uniform precession (Case 1) is
                visible. Easy to demo.
              </p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Air-suspension gyroscope</span>
              <p>
                Floats on an air bearing. Almost no friction. All three modes are visible: uniform
                precession, torque-free wobble, and full cycloidal nutation.
              </p>
            </div>
          </div>
        </>
      ]
    },
    practice: [
      {
        q: `Why can't you write a body's orientation as a vector $\\boldsymbol{\\theta} = \\theta_x\\hat{i} + \\theta_y\\hat{j} + \\theta_z\\hat{k}$?`,
        a: `Vectors must add the same way regardless of order. Finite rotations do not commute: rotating a book 90 degrees about x then 90 about y ends in a different orientation than the reverse order. So no single vector can encode orientation.`
      },
      {
        q: `Why does angular velocity $\\boldsymbol{\\omega}$ qualify as a true vector even though orientation does not?`,
        a: `Angular velocity is built from infinitesimal rotations $d\\boldsymbol{\\theta}$, and infinitesimal rotations do commute to first order. The leftover error is second order, which vanishes in the time-derivative limit. So $\\boldsymbol{\\omega} = \\dfrac{d\\boldsymbol{\\theta}}{dt}$ adds and decomposes like any vector.`
      },
      {
        q: `State the velocity formula for any particle in a rigid body and explain why it is independent of which point on the rotation axis you pick as origin.`,
        a: `The formula is $\\mathbf{v} = \\boldsymbol{\\omega}\\times\\mathbf{r}$. If you shift the origin along the rotation axis, $\\mathbf{r}$ changes by a vector parallel to $\\boldsymbol{\\omega}$, and that piece cross-products to zero. So the velocity is the same.`
      },
      {
        q: `For a skew rod of length $2\\ell$ tilted at angle $\\alpha$ from perpendicular and spinning at $\\omega$, what is the magnitude of $\\mathbf{L}$, and where does it point?`,
        a: `The magnitude is $|\\mathbf{L}| = 2m\\ell^2\\omega\\cos\\alpha$. It sits in the plane of the rod, perpendicular to the rod, pointing outward from the rotation axis. It is not parallel to $\\boldsymbol{\\omega}$.`
      },
      {
        q: `For the skew rod problem, the perpendicular and parallel decomposition of $\\boldsymbol{\\omega}$ shows the rod's parallel piece contributes nothing to L. Why?`,
        a: `Each mass sits exactly on the line of $\\boldsymbol{\\omega}_\\parallel$, since that line runs along the rod. A particle on the axis of rotation has zero velocity from that component. So it contributes zero to angular momentum.`
      },
      {
        q: `For the rotating skew rod, derive the bearing torque magnitude using the geometric method and explain why it works.`,
        a: `The vertical part of $\\mathbf{L}$ is constant. Only the horizontal part $L_\\perp = L\\sin\\alpha$ rotates at rate $\\omega$. A vector of fixed magnitude rotating at $\\omega$ has time derivative magnitude $\\omega L_\\perp$. So $\\tau = \\omega L\\sin\\alpha$.`
      },
      {
        q: `A gyroscope on a pylon has weight W at lever arm $\\ell$ and spin angular momentum $L_s$. State the precession rate and explain why it is independent of tilt.`,
        a: `The precession rate is $\\Omega = \\dfrac{\\ell W}{L_s}$. When the axle tilts at angle $\\phi$, the lever arm becomes $\\ell\\sin\\phi$ and the rotating part of $\\mathbf{L}$ is $L_s\\sin\\phi$. The two factors of $\\sin\\phi$ cancel in $\\Omega L_s\\sin\\phi = \\ell W\\sin\\phi$.`
      },
      {
        q: `If you double the spin speed of a gyroscope, what happens to its precession rate, and why?`,
        a: `The precession rate halves. Spin angular momentum $L_s = I_s\\omega_s$ doubles, while the gravitational torque $\\ell W$ stays fixed. From $\\Omega = \\dfrac{\\ell W}{L_s}$, doubling the denominator halves $\\Omega$.`
      },
      {
        q: `Predict what would happen if you spun a gyroscope so fast that its spin angular momentum became enormous. Then released the support point.`,
        a: `The gyroscope would barely move at all over short times. Its precession rate is $\\Omega = \\dfrac{\\ell W}{L_s}$, which becomes tiny for huge $L_s$. So the axle stays nearly fixed, drifting only very slowly. This is the principle behind inertial navigation.`
      },
      {
        q: `Why does Earth's spin axis precess with a 26000-year period?`,
        a: `Earth bulges at the equator. The sun and moon pull harder on the near side of this bulge, producing a torque that tries to align Earth's spin with the ecliptic normal. Because Earth spins, the torque produces precession. The slow rate comes from the small bulge and the huge spin angular momentum.`
      },
      {
        q: `By how many kilometers does Earth's equatorial radius exceed its polar radius, and what does this number set?`,
        a: `About 21 km. This bulge gives the moon and sun a lever arm to apply torque on Earth. Without the bulge, Earth would be a sphere with no preferred axis and the precession of the equinoxes would not occur.`
      },
      {
        q: `Why can't a gyrocompass work at the geographic poles?`,
        a: `A gyrocompass aligns with the component of Earth's angular velocity perpendicular to its supported plane: $\\Omega_\\perp = \\Omega_e\\cos\\lambda$. At the poles ($\\lambda = 90$ degrees) this is zero. With no drive, the gyrocompass has no preferred direction.`
      },
      {
        q: `A bullet fires from a rifled barrel and one fired from a smoothbore receive the same small sideways perturbation. Why does the rifled bullet stay on course?`,
        a: `The rifling spins the bullet, giving it large $L_s$. A perturbing torque $\\tau$ rotates the spin axis by only $\\phi = \\dfrac{\\tau\\Delta t}{L_s}$, a tiny angle. Without spin, the same impulse produces a real angular velocity $\\Delta\\omega = \\dfrac{\\tau\\Delta t}{I}$, which grows over time into a large tumble.`
      },
      {
        q: `What is the difference between static and dynamic balance, and why does a tire shop check both?`,
        a: `Static balance means no gravity torque on a stationary wheel: the center of mass sits on the axis. Dynamic balance means no bearing torque on a rotating wheel: $\\mathbf{L}$ stays parallel to $\\boldsymbol{\\omega}$. A wheel with a hidden mass on one side can be statically balanced (CM on axis) but dynamically unbalanced if its products of inertia are not zero.`
      },
      {
        q: `Why does conservation of angular momentum require an extra physical postulate beyond Newton's laws?`,
        a: `Newton's third law guarantees pairwise force cancellation, but angular momentum requires the stronger statement that internal forces lie along the line joining particles. Magnetic forces between moving charges violate this. So conservation of angular momentum needs the strong form, which we adopt as an independent law tied to rotational symmetry.`
      },
      {
        q: `Why are pairwise torques zero only when forces are central?`,
        a: `For two particles, the pairwise torque sum is $(\\mathbf{r}_j - \\mathbf{r}_l)\\times\\mathbf{f}_{jl}$. This vanishes only when $\\mathbf{f}_{jl}$ is parallel to $\\mathbf{r}_j - \\mathbf{r}_l$, the line joining the particles. Non-central forces (like magnetism) leave a nonzero torque.`
      },
      {
        q: `Define the moment of inertia $I_{xx}$ and the product of inertia $I_{xy}$, and explain the sign of the off-diagonal term.`,
        a: `$I_{xx} = \\sum m(y^2 + z^2)$ is positive and measures resistance to rotation about x. $I_{xy} = -\\sum m\\,xy$ has a minus sign so that the matrix relation $L_x = I_{xx}\\omega_x + I_{xy}\\omega_y + I_{xz}\\omega_z$ holds with the standard tensor algebra. The minus sign is built into the definition.`
      },
      {
        q: `For a uniform sphere about its center, what does the tensor of inertia look like, and why?`,
        a: `It is $\\tfrac{2}{5}Mb^2$ times the identity matrix. By symmetry, $I_{xx} = I_{yy} = I_{zz}$ and all off-diagonal entries vanish. So $\\mathbf{L} = \\tfrac{2}{5}Mb^2\\,\\boldsymbol{\\omega}$, parallel to $\\boldsymbol{\\omega}$ for any rotation axis.`
      },
      {
        q: `Why are products of inertia zero for any body with a plane of symmetry?`,
        a: `For each mass at $(x, y, z)$ there is a mirror mass at the reflected point. The product $xy$ has the opposite sign for the mirror, so the contributions cancel pairwise. This holds for any axis-pair that the symmetry plane intermixes.`
      },
      {
        q: `What are the principal axes of a uniform rectangular brick, and why?`,
        a: `The three perpendicular edge directions through the center of mass. The brick has three reflection symmetries, one through each edge plane. Each reflection forces the off-diagonal products of inertia to vanish in those axes. So the tensor is diagonal there.`
      },
      {
        q: `Predict where the principal axes of a body with a single axis of cylindrical symmetry lie.`,
        a: `One principal axis runs along the symmetry axis. The other two are any pair of perpendicular axes through the center of mass perpendicular to the symmetry axis. The two transverse moments are equal, so any rotation of the perpendicular pair leaves the tensor diagonal.`
      },
      {
        q: `For a flying-saucer-shaped spacecraft, why is spinning about the perpendicular short axis stable, while a cigar-shaped craft is unstable in the equivalent setup?`,
        a: `Internal damping conserves $\\mathbf{L}$ but lowers $K_\\text{rot} = \\frac{L^2}{2I}$. So the body settles into the maximum-$I$ axis. For a saucer, the maximum-$I$ axis is the short symmetry axis, matching the original spin. For a cigar, the maximum-$I$ axis is perpendicular to the long axis, so it tumbles to that orientation.`
      },
      {
        q: `Predict what happens to a real spinning satellite over many years if it has any internal flexibility.`,
        a: `Internal damping converts kinetic energy to heat without changing $\\mathbf{L}$. So $K_\\text{rot}$ falls. At fixed $L$, minimum $K$ corresponds to spin about the maximum-$I$ axis. The satellite eventually settles into spin about its maximum-$I$ axis, even if it started on a different axis.`
      },
      {
        q: `Write the three equivalent forms of rotational kinetic energy for a rigid body.`,
        a: `First, $K_\\text{rot} = \\tfrac{1}{2}\\boldsymbol{\\omega}\\cdot\\mathbf{L}$, valid in any frame. Second, in principal axes, $K_\\text{rot} = \\tfrac{1}{2}(I_1\\omega_1^2 + I_2\\omega_2^2 + I_3\\omega_3^2)$. Third, for rotation about a single principal axis, $K_\\text{rot} = \\dfrac{L^2}{2I}$.`
      },
      {
        q: `For a sphere of mass M and radius b offset by distance $\\ell$ along the z-axis from the pivot, find $I_{xx}$ and $I_{zz}$ about the pivot.`,
        a: `By the generalized parallel axis theorem, $I_{xx} = \\tfrac{2}{5}Mb^2 + M\\ell^2$ because the offset is along z, picking up the $Z^2$ term. But $I_{zz} = \\tfrac{2}{5}Mb^2$, unchanged because shifting along z does not move the mass perpendicular to the z-axis.`
      },
      {
        q: `Why does the off-diagonal term in the generalized parallel axis theorem carry a minus sign while the diagonal term does not?`,
        a: `The diagonal definition is $I_{xx} = \\sum m(y^2 + z^2)$, all positive. The off-diagonal is $I_{xy} = -\\sum m\\,xy$ with a minus built in. So when you shift origin, the diagonal terms gain $M(Y^2 + Z^2)$ and the off-diagonals gain $-MXY$. The signs are forced by the standard sign conventions.`
      },
      {
        q: `Predict what motion a quarter shows when tossed slightly off its symmetry axis.`,
        a: `The quarter wobbles. Its symmetry axis traces a small cone around the fixed $\\mathbf{L}$ direction at body-frame rate $\\gamma = \\dfrac{L_s}{I_\\perp}$. The coin keeps spinning while the axis precesses. This is torque-free precession.`
      },
      {
        q: `Why does Earth's Chandler wobble take 430 days when the rigid-body theory predicts 300 days?`,
        a: `The 300-day result assumes a perfectly rigid Earth. Real Earth deforms elastically under the rotational stress, so the equatorial bulge slowly shifts to follow the wobble. This effective softening lengthens the period to about 430 days.`
      },
      {
        q: `What is the relation between the body-frame wobble rate $\\gamma$ and the apparent earth-frame rate $\\gamma'$?`,
        a: `$\\gamma' = \\dfrac{\\omega_s(I_s - I_\\perp)}{I_\\perp}$. The earth-bound observer rotates with the body at $\\omega_s$, so they subtract that from the body-frame rate $\\gamma = \\dfrac{\\omega_s I_s}{I_\\perp}$. The leftover difference $\\gamma' = \\gamma - \\omega_s$ gives the formula.`
      },
      {
        q: `State Euler's equations and explain why they are written in body-fixed principal axes rather than in the lab frame.`,
        a: `In principal axes the tensor of inertia is diagonal and constant in time. So the equations $\\tau_i = I_i\\dot\\omega_i + \\sum_{jk}\\epsilon_{ijk}I_k\\omega_j\\omega_k$ stay tractable. In the lab frame, the tensor varies in time as the body rotates. The equations become a mess. The body-frame choice trades a rotating frame for a constant tensor.`
      },
      {
        q: `Why is rotation of a book about its intermediate axis unstable?`,
        a: `The linearized Euler equation gives $\\ddot\\omega + A\\omega = 0$ with $A = \\frac{(I_1 - I_3)(I_2 - I_1)\\omega_1^2}{I_2 I_3}$. When $I_1$ is the middle moment, the two factors $(I_1 - I_3)$ and $(I_2 - I_1)$ have opposite signs. So $A < 0$ and the perturbation grows exponentially.`
      },
      {
        q: `Predict the stability of spin about the longest axis of a thin rod.`,
        a: `Stable. The longest axis has the smallest moment of inertia. So both factors $(I_1 - I_3)$ and $(I_2 - I_1)$ have the same sign, giving positive $A$ and bounded oscillation. A spinning rod thrown along its length stays steady.`
      },
      {
        q: `For a symmetric top (cylindrically symmetric), what is the closed form for the precessional angular velocity in the lab frame?`,
        a: `$\\Omega_p = \\dfrac{I_1\\omega_s}{I_\\perp\\cos\\alpha}$, where $\\alpha$ is the angle between the symmetry axis and the angular momentum. The formula combines the body-frame rate $\\Gamma = \\dfrac{(I_1 - I_\\perp)\\omega_s}{I_\\perp}$ with the lab-frame condition that L stay fixed.`
      },
      {
        q: `Note 7.2 distinguishes three modes of gyroscope motion. Name them and describe each in one sentence.`,
        a: `Uniform precession: steady horizontal sweep of the axle at $\\Omega = \\dfrac{\\ell W}{L_s}$. Torque-free precession: wobble of a freely-spinning body at body-frame rate $\\gamma$. Nutation: cycloidal dipping plus drift of the axle when released from rest under gravity.`
      },
      {
        q: `Predict the trajectory of a gyroscope axle tip when released from rest at a tilted angle.`,
        a: `A cycloid. The axle dips down, rises back, dips again at frequency $\\gamma = \\dfrac{L_s}{I_\\perp}$, while drifting forward at average rate $\\Omega = \\dfrac{\\ell W}{L_s}$. The trace looks like the path of a point on a rolling wheel.`
      },
      {
        q: `Why is uniform precession seen on a toy gyroscope but full nutation only on an air-suspension model?`,
        a: `Pivot friction in a toy gyro damps the oscillating part of the motion. The cycloidal nutation dies out fast and only the steady part remains. An air-suspension gyroscope has near-zero friction, so all three modes persist long enough to observe.`
      },
      {
        q: `When does the small-angle gyroscope analysis break down?`,
        a: `When $\\dfrac{2\\ell W}{\\gamma L_s}$ is no longer small, equivalently when $\\dfrac{\\Omega_\\text{prec}}{\\gamma}$ is not much less than one. Physically, when the precession period becomes comparable to the nutation period, the linearization fails and the cycloidal approximation no longer applies.`
      },
      {
        q: `Why does the symmetry axis of a torque-free rigid body trace a cone in space rather than a straight line?`,
        a: `Without external torque, $\\mathbf{L}$ is fixed. But $\\boldsymbol{\\omega}$ need not be parallel to $\\mathbf{L}$. So the body axis (which has fixed angle to $\\mathbf{L}$) sweeps a cone around the constant $\\mathbf{L}$ vector at rate $\\gamma$.`
      },
      {
        q: `Why does a heavy gyroscope released from rest at horizontal not simply fall down in a pendulum swing?`,
        a: `The spin angular momentum $\\mathbf{L}_s$ resists tilt. Gravity supplies a torque, but the response is a sideways rotation of $\\mathbf{L}_s$ instead of a downward tip. The vertical fall is replaced by horizontal precession plus a small nutation amplitude.`
      },
      {
        q: `Predict what would happen to the equinox precession period if Earth were a perfect sphere.`,
        a: `It would not happen. A perfect sphere has $I_{xx} = I_{yy} = I_{zz}$, so the sun and moon exert no net torque on it. Without a torque, there is no precession at all. The 21-km equatorial bulge is essential.`
      },
      {
        q: `For two identical particles connected by a rigid rod and orbiting each other in free space, where do you place the origin to remove the orbital piece of L?`,
        a: `At the center of mass. Then the orbital term $\\mathbf{R}\\times M\\mathbf{V}$ vanishes because $\\mathbf{R} = 0$. Only the spin term about the CM remains. This is the standard rigid-body decomposition.`
      },
      {
        q: `Why is the torque on a constrained gyroscope (on a pylon) computed about the pivot rather than the center of mass?`,
        a: `The pivot exerts a constraint force, which is unknown. Computing about the pivot makes that force pass through the origin, contributing zero torque. Then only gravity contributes, and we can find the equation of motion without knowing the constraint force.`
      },
      {
        q: `What does $\\frac{L^2}{2I}$ tell you about the kinetic energy of a body spinning at fixed L?`,
        a: `$K_\\text{rot}$ decreases as $I$ increases. So at fixed angular momentum, larger $I$ means smaller $K$. This is why bodies with internal damping settle into maximum-$I$ rotation: the energy minimum is reached there.`
      },
      {
        q: `Why is the dot product $\\boldsymbol{\\omega}\\cdot\\mathbf{L}$ used to express rotational kinetic energy?`,
        a: `Start from $K_\\text{rot} = \\tfrac{1}{2}\\sum m_j v_j'^2$ with $\\mathbf{v}_j' = \\boldsymbol{\\omega}\\times\\mathbf{r}_j'$. Apply the BAC-CAB identity to $v_j'^2$. The expression collapses to $\\boldsymbol{\\omega}\\cdot(\\mathbf{r}_j'\\times m_j\\mathbf{v}_j')$ when summed. That sum is $\\boldsymbol{\\omega}\\cdot\\mathbf{L}$.`
      },
      {
        q: `In the gyrocompass equation $\\beta = \\sqrt{\\frac{I_s\\omega_s\\Omega}{I_\\perp}}$, what does each symbol mean physically?`,
        a: `$I_s\\omega_s = L_s$ is the gyro's spin angular momentum. $\\Omega$ is the component of Earth's rotation drive perpendicular to the gyro's free axis. $I_\\perp$ is the transverse moment of inertia. So $\\beta$ is the small-angle frequency at which the gyro swings toward true north.`
      },
      {
        q: `Why does breaking down $\\boldsymbol{\\omega}$ along arbitrary axes work when breaking down finite rotations does not?`,
        a: `$\\boldsymbol{\\omega}$ is a true vector built from infinitesimal rotations, which commute to first order. Vector decomposition is just adding component vectors, which respects commutativity. Finite rotations would require a non-vector representation like rotation matrices or quaternions.`
      },
      {
        q: `For a rotating dumbbell with equal masses on the z-axis spinning about z, why is the angular momentum zero?`,
        a: `Both masses sit on the rotation axis, so neither has any rotational motion. The angular velocity has no perpendicular distance to act on. So $L_z = \\sum m\\rho^2\\omega = 0$, since $\\rho = 0$ for each mass.`
      },
      {
        q: `Predict what changes for a gyroscope's precession when you replace its wheel with one of double the radius but the same mass.`,
        a: `The new $I_s = \\tfrac{1}{2}M(2R)^2 = 2MR^2$, double the original $\\tfrac{1}{2}MR^2$. So $L_s$ doubles for the same spin speed, and $\\Omega = \\dfrac{\\ell W}{L_s}$ halves. The precession is twice as slow.`
      },
      {
        q: `Why is the Tennis Racket / Dzhanibekov effect surprising even though Euler's equations predict it directly?`,
        a: `Daily intuition says spinning about an axis of inertial symmetry should be stable. Spinning a book about its middle axis looks like spinning about a normal axis. So the abrupt flips look chaotic. But the linearized Euler equation gives $A < 0$ for the middle axis. That predicts exactly this exponential instability.`
      },
      {
        q: `Why does the gyroscope's precession formula $\\Omega = \\dfrac{\\ell W}{L_s}$ resemble a rate-of-change formula $\\tau = \\dfrac{dL}{dt}$?`,
        a: `Because that is exactly what it is. The torque $\\tau = \\ell W$ rotates the spin angular momentum vector. A vector of length $L_s$ rotating at $\\Omega$ has rate of change $\\Omega L_s$. Setting $\\tau = \\Omega L_s$ gives the precession rate. So the formula is the rotation law in disguise.`
      }
    ],
    reference: {
      category: 'Quick Reference',
      title: 'Rigid Body Dynamics and Gyroscopes',
      sections: [
        <>
          <h2>Angular Velocity & Rigid-Body Kinematics</h2>

          <div className="ref-formula">
            <span className="ref-formula-name">Velocity in a rigid body</span>
            <div className="ref-formula-eq">{`$$\\mathbf{v} = \\boldsymbol{\\omega}\\times\\mathbf{r}$$`}</div>
            <p className="ref-formula-desc">{`When to use: any particle of a rigid body rotating at $\\boldsymbol{\\omega}$ at position $\\mathbf{r}$ from a point on the rotation axis.`}</p>
          </div>

          <div className="ref-formula">
            <span className="ref-formula-name">Infinitesimal rotation</span>
            <div className="ref-formula-eq">{`$$d\\mathbf{r} = d\\boldsymbol{\\theta}\\times\\mathbf{r}$$`}</div>
            <p className="ref-formula-desc">{`When to use: small rotation $d\\boldsymbol{\\theta}$ about an axis; gives the displacement of a point at $\\mathbf{r}$.`}</p>
          </div>

          <div className="ref-formula">
            <span className="ref-formula-name">Angular velocity definition</span>
            <div className="ref-formula-eq">{`$$\\boldsymbol{\\omega} = \\dfrac{d\\boldsymbol{\\theta}}{dt}$$`}</div>
            <p className="ref-formula-desc">
              When to use: define angular velocity as the time derivative of the infinitesimal
              rotation vector.
            </p>
          </div>

          <div className="ref-formula">
            <span className="ref-formula-name">Magnitude of small displacement under rotation</span>
            <div className="ref-formula-eq">{`$$|\\Delta\\mathbf{r}| = r\\sin\\phi\\,\\Delta\\theta$$`}</div>
            <p className="ref-formula-desc">{`When to use: leading order in $\\Delta\\theta$ for a point at distance $r$ from axis at angle $\\phi$ from the axis.`}</p>
          </div>

          <h2>Skew Rod & Off-Axis Angular Momentum</h2>

          <div className="ref-formula">
            <span className="ref-formula-name">Skew-rod angular momentum (direct sum)</span>
            <div className="ref-formula-eq">{`$$|\\mathbf{L}| = 2m\\ell^2\\omega\\cos\\alpha$$`}</div>
            <p className="ref-formula-desc">{`When to use: rigid rod of length $2\\ell$ with masses $m$ at each end, tilted at angle $\\alpha$, spinning at $\\omega$. L points perpendicular to the rod in the plane of the rod.`}</p>
          </div>

          <div className="ref-formula">
            <span className="ref-formula-name">Skew-rod angular momentum (component method)</span>
            <div className="ref-formula-eq">{`$$|\\mathbf{L}| = I_\\perp\\omega_\\perp = 2m\\ell^2\\omega\\cos\\alpha$$`}</div>
            <p className="ref-formula-desc">{`When to use: decompose $\\boldsymbol{\\omega}$ into perpendicular and parallel parts. Only $\\omega_\\perp = \\omega\\cos\\alpha$ contributes.`}</p>
          </div>

          <div className="ref-formula">
            <span className="ref-formula-name">Time-varying L of skew rod</span>
            <div className="ref-formula-eq">{`$$L_x = L\\sin\\alpha\\cos\\omega t,\\;L_y = L\\sin\\alpha\\sin\\omega t,\\;L_z = L\\cos\\alpha$$`}</div>
            <p className="ref-formula-desc">
              When to use: lab-frame components of L for a uniformly spinning skew rod.
            </p>
          </div>

          <div className="ref-formula">
            <span className="ref-formula-name">Geometric rate of change of rotating L</span>
            <div className="ref-formula-eq">{`$$\\dfrac{dL_\\perp}{dt} = \\omega L_\\perp = \\omega L\\sin\\alpha$$`}</div>
            <p className="ref-formula-desc">
              When to use: any rigidly rotating angular momentum vector; gives the bearing torque
              without component algebra.
            </p>
          </div>

          <h2>Gyroscope Precession</h2>

          <div className="ref-formula">
            <span className="ref-formula-name">Spin angular momentum</span>
            <div className="ref-formula-eq">{`$$\\mathbf{L}_s = I_s\\omega_s$$`}</div>
            <p className="ref-formula-desc">
              When to use: gyroscope wheel spinning about its symmetry axis, directed along the
              axle.
            </p>
          </div>

          <div className="ref-formula">
            <span className="ref-formula-name">Gyroscope torque</span>
            <div className="ref-formula-eq">{`$$\\tau = \\ell W$$`}</div>
            <p className="ref-formula-desc">{`When to use: gyroscope on a pylon with weight $W$ at lever arm $\\ell$ from the support.`}</p>
          </div>

          <div className="ref-formula">
            <span className="ref-formula-name">Uniform precession rate (Eq. 7.2)</span>
            <div className="ref-formula-eq">{`$$\\Omega = \\dfrac{\\ell W}{L_s} = \\dfrac{\\ell W}{I_s\\omega_s}$$`}</div>
            <p className="ref-formula-desc">
              When to use: gyroscope undergoing uniform precession with no nutation. Independent of
              tilt angle.
            </p>
          </div>

          <div className="ref-formula">
            <span className="ref-formula-name">Gyrocompass small-oscillation frequency</span>
            <div className="ref-formula-eq">{`$$\\beta = \\sqrt{\\frac{I_s\\omega_s\\Omega}{I_\\perp}}$$`}</div>
            <p className="ref-formula-desc">{`When to use: two-axis-free gyrocompass on a rotating frame. $\\Omega$ is the component of frame rotation perpendicular to the free plane.`}</p>
          </div>

          <div className="ref-formula">
            <span className="ref-formula-name">Latitude correction for gyrocompass</span>
            <div className="ref-formula-eq">{`$$\\Omega_\\perp = \\Omega_e\\cos\\lambda$$`}</div>
            <p className="ref-formula-desc">{`When to use: gyrocompass on Earth at latitude $\\lambda$. Gives the effective drive that aligns the gyro with true north.`}</p>
          </div>

          <div className="ref-formula">
            <span className="ref-formula-name">Bullet stability: tip angle without spin</span>
            <div className="ref-formula-eq">{`$$\\Delta\\omega = \\dfrac{F\\ell\\,\\Delta t}{I_A}$$`}</div>
            <p className="ref-formula-desc">{`When to use: estimate how far a non-spinning projectile tips from a transverse impulse $F\\,\\Delta t$ at lever arm $\\ell$.`}</p>
          </div>

          <div className="ref-formula">
            <span className="ref-formula-name">Bullet stability: tip angle with spin</span>
            <div className="ref-formula-eq">{`$$\\phi = \\dfrac{F\\ell\\,\\Delta t}{L_s}$$`}</div>
            <p className="ref-formula-desc">{`When to use: estimate how far a spinning projectile precesses from a transverse impulse. Far less than the no-spin tip when $L_s$ is large.`}</p>
          </div>

          <h2>Conservation of Angular Momentum</h2>

          <div className="ref-formula">
            <span className="ref-formula-name">Pairwise torque cancellation</span>
            <div className="ref-formula-eq">{`$$\\tau_{jl} + \\tau_{lj} = (\\mathbf{r}_j - \\mathbf{r}_l)\\times\\mathbf{f}_{jl}$$`}</div>
            <p className="ref-formula-desc">
              When to use: two interacting particles. Vanishes only if the force lies along the line
              joining them (strong form of Newton's third law).
            </p>
          </div>

          <div className="ref-formula">
            <span className="ref-formula-name">Conservation of L</span>
            <div className="ref-formula-eq">{`$$\\dfrac{d\\mathbf{L}}{dt} = 0\\;\\Rightarrow\\;\\mathbf{L} = \\text{const}$$`}</div>
            <p className="ref-formula-desc">
              When to use: any isolated system. An independent physical law in cases with
              non-central internal forces.
            </p>
          </div>

          <h2>Tensor of Inertia</h2>

          <div className="ref-formula">
            <span className="ref-formula-name">L from triple cross (Eq. 7.7)</span>
            <div className="ref-formula-eq">{`$$\\mathbf{L} = \\sum_j m_j\\,\\mathbf{r}_j\\times(\\boldsymbol{\\omega}\\times\\mathbf{r}_j)$$`}</div>
            <p className="ref-formula-desc">
              When to use: starting point for deriving the tensor of inertia from rigid-body
              kinematics.
            </p>
          </div>

          <div className="ref-formula">
            <span className="ref-formula-name">Moments of inertia (Eq. 7.12)</span>
            <div className="ref-formula-eq">{`$$I_{xx} = \\sum m(y^2+z^2),\\;I_{yy} = \\sum m(x^2+z^2),\\;I_{zz} = \\sum m(x^2+y^2)$$`}</div>
            <p className="ref-formula-desc">
              When to use: diagonal entries of the tensor of inertia about an origin. Always
              nonnegative.
            </p>
          </div>

          <div className="ref-formula">
            <span className="ref-formula-name">Products of inertia (Eq. 7.12)</span>
            <div className="ref-formula-eq">{`$$I_{xy} = -\\sum m\\,xy,\\;I_{xz} = -\\sum m\\,xz,\\;I_{yz} = -\\sum m\\,yz$$`}</div>
            <p className="ref-formula-desc">
              When to use: off-diagonal entries of the tensor. The minus sign is built into the
              definition. Vanish for any plane of symmetry.
            </p>
          </div>

          <div className="ref-formula">
            <span className="ref-formula-name">Tensor relation (Eq. 7.13a)</span>
            <div className="ref-formula-eq">{`$$L_x = I_{xx}\\omega_x + I_{xy}\\omega_y + I_{xz}\\omega_z$$`}</div>
            <p className="ref-formula-desc">
              When to use: x-component of L for a rigid body in any frame. Cyclic for y and z.
            </p>
          </div>

          <div className="ref-formula">
            <span className="ref-formula-name">Compact tensor form (Eq. 7.14)</span>
            <div className="ref-formula-eq">{`$$\\mathbf{L} = \\overleftrightarrow{I}\\,\\boldsymbol{\\omega}$$`}</div>
            <p className="ref-formula-desc">
              When to use: any rigid-body rotation. The tensor is symmetric and positive
              semi-definite.
            </p>
          </div>

          <div className="ref-formula">
            <span className="ref-formula-name">Full 3x3 matrix display (Eq. 7.15)</span>
            <div className="ref-formula-eq">{`$$\\overleftrightarrow{I} = \\begin{pmatrix}I_{xx} & I_{xy} & I_{xz}\\\\I_{yx} & I_{yy} & I_{yz}\\\\I_{zx} & I_{zy} & I_{zz}\\end{pmatrix}$$`}</div>
            <p className="ref-formula-desc">
              When to use: explicit matrix form for computations. Symmetric, so six independent
              entries.
            </p>
          </div>

          <h2>Principal Axes & Rotational Kinetic Energy</h2>

          <div className="ref-formula">
            <span className="ref-formula-name">Diagonal tensor (Eq. 7.16)</span>
            <div className="ref-formula-eq">{`$$\\overleftrightarrow{I} = \\begin{pmatrix}I_1 & 0 & 0\\\\0 & I_2 & 0\\\\0 & 0 & I_3\\end{pmatrix}$$`}</div>
            <p className="ref-formula-desc">
              When to use: principal-axis frame; the tensor is diagonal with three principal
              moments.
            </p>
          </div>

          <div className="ref-formula">
            <span className="ref-formula-name">Principal-axis components (Eq. 7.17)</span>
            <div className="ref-formula-eq">{`$$L_1 = I_1\\omega_1,\\;L_2 = I_2\\omega_2,\\;L_3 = I_3\\omega_3$$`}</div>
            <p className="ref-formula-desc">
              When to use: components of L in the principal-axis frame. No cross-coupling.
            </p>
          </div>

          <div className="ref-formula">
            <span className="ref-formula-name">Rotational KE: dot-product form (Eq. 7.18)</span>
            <div className="ref-formula-eq">{`$$K_\\text{rot} = \\tfrac{1}{2}\\,\\boldsymbol{\\omega}\\cdot\\mathbf{L}$$`}</div>
            <p className="ref-formula-desc">
              When to use: any rigid body, any frame. Most general expression for rotational kinetic
              energy.
            </p>
          </div>

          <div className="ref-formula">
            <span className="ref-formula-name">Rotational KE: principal-axis form (Eq. 7.19)</span>
            <div className="ref-formula-eq">{`$$K_\\text{rot} = \\tfrac{1}{2}(I_1\\omega_1^2 + I_2\\omega_2^2 + I_3\\omega_3^2)$$`}</div>
            <p className="ref-formula-desc">
              When to use: principal-axis frame. Three independent quadratic contributions.
            </p>
          </div>

          <div className="ref-formula">
            <span className="ref-formula-name">Rotational KE: single-axis form (Eq. 7.20)</span>
            <div className="ref-formula-eq">{`$$K_\\text{rot} = \\dfrac{L^2}{2I}$$`}</div>
            <p className="ref-formula-desc">
              When to use: rotation about a single principal axis. Useful for energy minimization at
              fixed L.
            </p>
          </div>

          <h2>Generalized Parallel Axis Theorem</h2>

          <div className="ref-formula">
            <span className="ref-formula-name">Diagonal shift (Eq. 7.21)</span>
            <div className="ref-formula-eq">{`$$I_{xx} = (I_0)_{xx} + M(Y^2+Z^2)$$`}</div>
            <p className="ref-formula-desc">{`When to use: shift the moment of inertia from the center of mass to a new origin offset by $(X, Y, Z)$. Cyclic for y and z.`}</p>
          </div>

          <div className="ref-formula">
            <span className="ref-formula-name">Off-diagonal shift</span>
            <div className="ref-formula-eq">{`$$I_{xy} = (I_0)_{xy} - MXY$$`}</div>
            <p className="ref-formula-desc">
              When to use: shift the products of inertia from the center of mass to a new origin.
              The minus sign matches the off-diagonal convention.
            </p>
          </div>

          <h2>Torque-Free Precession</h2>

          <div className="ref-formula">
            <span className="ref-formula-name">Body-frame wobble frequency</span>
            <div className="ref-formula-eq">{`$$\\gamma = \\dfrac{L_s}{I_\\perp} = \\dfrac{\\omega_s I_s}{I_\\perp}$$`}</div>
            <p className="ref-formula-desc">
              When to use: torque-free precession of a symmetric rigid body in its body frame.
            </p>
          </div>

          <div className="ref-formula">
            <span className="ref-formula-name">Apparent earth-frame rate (Eq. 7.31)</span>
            <div className="ref-formula-eq">{`$$\\gamma' = \\omega_s\\dfrac{I_s - I_\\perp}{I_\\perp}$$`}</div>
            <p className="ref-formula-desc">
              When to use: lab-frame wobble rate when observer rotates with the body. Apply to
              Earth's Chandler wobble.
            </p>
          </div>

          <div className="ref-formula">
            <span className="ref-formula-name">Body-axis circle</span>
            <div className="ref-formula-eq">{`$$\\theta_x = \\theta_0\\cos\\gamma t,\\quad \\theta_y = \\theta_0\\sin\\gamma t$$`}</div>
            <p className="ref-formula-desc">
              When to use: small-angle torque-free precession; the body axis traces a circle of
              radius theta-naught around L.
            </p>
          </div>

          <h2>Euler's Equations</h2>

          <div className="ref-formula">
            <span className="ref-formula-name">Euler's first equation</span>
            <div className="ref-formula-eq">{`$$\\tau_1 = I_1\\dfrac{d\\omega_1}{dt} + (I_3 - I_2)\\omega_3\\omega_2$$`}</div>
            <p className="ref-formula-desc">
              When to use: body-fixed principal-axis equation of motion for component 1. Cyclic for
              2 and 3.
            </p>
          </div>

          <div className="ref-formula">
            <span className="ref-formula-name">Stability coefficient (Example 7.16)</span>
            <div className="ref-formula-eq">{`$$A = \\dfrac{(I_1 - I_3)(I_2 - I_1)\\omega_1^2}{I_2 I_3}$$`}</div>
            <p className="ref-formula-desc">
              When to use: linearized Euler equations; A positive means stable rotation about axis
              1, A negative means unstable.
            </p>
          </div>

          <div className="ref-formula">
            <span className="ref-formula-name">Symmetric-body torque-free body rate</span>
            <div className="ref-formula-eq">{`$$\\Gamma = \\dfrac{I_1 - I_\\perp}{I_\\perp}\\omega_s$$`}</div>
            <p className="ref-formula-desc">
              When to use: closed-form torque-free precession of a cylindrically symmetric body in
              the body frame.
            </p>
          </div>

          <div className="ref-formula">
            <span className="ref-formula-name">Total precessional angular velocity</span>
            <div className="ref-formula-eq">{`$$\\Omega_p = \\dfrac{I_1\\omega_s}{I_\\perp\\cos\\alpha}$$`}</div>
            <p className="ref-formula-desc">{`When to use: lab-frame precession rate of a symmetric body, where $\\alpha$ is the angle between L and the symmetry axis.`}</p>
          </div>

          <div className="ref-formula">
            <span className="ref-formula-name">Rotating rod pendulum equation (Example 7.17)</span>
            <div className="ref-formula-eq">{`$$2\\ddot\\theta + \\dfrac{I_3 - I_2}{I_1}\\Omega^2\\sin 2\\theta = 0$$`}</div>
            <p className="ref-formula-desc">{`When to use: a rod tied at one end of a horizontal arm rotating at $\\Omega$, free to swing about the vertical. Pendulum equation in $2\\theta$.`}</p>
          </div>

          <h2>Nutation</h2>

          <div className="ref-formula">
            <span className="ref-formula-name">Nutation harmonic equation</span>
            <div className="ref-formula-eq">{`$$\\ddot\\omega_z + \\gamma^2\\omega_z = 0$$`}</div>
            <p className="ref-formula-desc">
              When to use: small-angle gyroscope on a pivot. Harmonic oscillation drives the
              nutation.
            </p>
          </div>

          <div className="ref-formula">
            <span className="ref-formula-name">Cycloidal nutation: vertical angle</span>
            <div className="ref-formula-eq">{`$$\\theta_z = \\dfrac{\\ell W}{\\gamma L_s}(\\cos\\gamma t - 1)$$`}</div>
            <p className="ref-formula-desc">
              When to use: gyroscope released from rest at a tilt. Vertical angle of the axle.
            </p>
          </div>

          <div className="ref-formula">
            <span className="ref-formula-name">Cycloidal nutation: forward angle</span>
            <div className="ref-formula-eq">{`$$\\theta_x = \\dfrac{\\ell W}{\\gamma L_s}(\\gamma t - \\sin\\gamma t)$$`}</div>
            <p className="ref-formula-desc">
              When to use: gyroscope released from rest at a tilt. Forward (precession-direction)
              angle of the axle.
            </p>
          </div>

          <div className="ref-formula">
            <span className="ref-formula-name">Validity criterion for small-angle nutation</span>
            <div className="ref-formula-eq">{`$$\\dfrac{2\\ell W}{\\gamma L_s} \\ll 1$$`}</div>
            <p className="ref-formula-desc">
              When to use: check whether the linear theory of gyroscope nutation applies. Equivalent
              to precession period much longer than nutation period.
            </p>
          </div>
        </>
      ]
    },
    customCss: null
  }

  return <LearningTemplate config={config} />
}
