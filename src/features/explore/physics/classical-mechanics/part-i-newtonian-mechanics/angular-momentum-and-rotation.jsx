import { LearningTemplate } from '../../../../../components/learning/learning-template'
import {
  AngMomGeom,
  SlidingTwoOrigins,
  ConicalPendulum2,
  TorqueLever,
  MomentsTable,
  ParallelAxis,
  PhysicalPendulum,
  RollingWheel,
  DrumOnIncline,
  BohrAtom,
  ChaslesRod
} from '../../../../../components/viz/physics-viz/modules'

export default function AngularMomentumAndRotation() {
  const config = {
    cssPrefix: 'amr',
    source: 'An Introduction to Mechanics - Kleppner & Kolenkow',
    documentTitle: 'Angular Momentum and Rotation - AETHER',
    learning: {
      groupTitle: 'Part I: Newtonian Mechanics',
      category: 'Module 6',
      title: 'Angular Momentum and Rotation',
      subtitle:
        'Three quantities describe rotation: angular momentum measures how much a body is rotating about a chosen point, torque drives changes in that rotation, and moment of inertia sets how hard a body is to spin up. Together they predict every rolling, swinging, and orbiting motion, from a falling yo-yo to a hydrogen atom.',
      sections: [
        <>
          <h2>What Angular Momentum Means</h2>
          <p>
            Angular momentum is the rotational counterpart of linear momentum. For one particle it
            is the cross product of its position and its momentum, taken about a chosen reference
            point. That single construction is what lets Newton's law carry over to rotation.
          </p>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>{`A yo-yo falls while a string unwinds from its axle. Why can you not solve this with $F = ma$ on the center of mass alone?`}</p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                The center of the yo-yo drops while the body spins about its own axle. The linear
                law tracks only the dropping. To pin down the spin, and the tension that connects
                the two, you need a separate rotational law.
              </p>
            </details>
          </div>
          <p>
            A falling yo-yo makes the issue concrete. Hold the string at your finger and let go: the
            center of the yo-yo drops, and the body spins about its own axle as the string pays out.
            One law for translation will not pin down both motions, because the string tension and
            the spin rate are linked through the geometry.
          </p>
          <p>
            Real bodies are made of many particles, but we never have to track them individually.
            Any small motion of a rigid body splits cleanly into a translation of its center of mass
            plus a rotation about that center. This is Chasles' theorem, proved at the end of the
            module. The split works because rigid distances are fixed: once you subtract the common
            motion of the center of mass, only a rigid rotation can remain.
          </p>
          <p>
            Three new quantities mirror the linear ones. Torque plays the role of force, angular
            momentum the role of linear momentum, and moment of inertia the role of mass. The
            Newton-style laws then carry over directly.
          </p>
          <AngMomGeom />
          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Linear momentum</span>
              <p>{`Equal to $m\\mathbf{v}$. The same vector at every origin.`}</p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Angular momentum</span>
              <p>{`Equal to $\\mathbf{r} \\times \\mathbf{p}$. Different at every origin, because $\\mathbf{r}$ is measured from there.`}</p>
            </div>
          </div>
        </>,

        <>
          <h2>Defining Angular Momentum of a Particle</h2>
          <p>The angular momentum of a particle around an origin is</p>
          <div className="lrn-eq">
            <span>{`$$\\mathbf{L} = \\mathbf{r} \\times \\mathbf{p}$$`}</span>
          </div>
          <p>{`Here $\\mathbf{r}$ is the vector from the origin to the particle, and $\\mathbf{p} = m\\mathbf{v}$ is its linear momentum. The SI units are $\\text{kg}\\,\\text{m}^2/\\text{s}$. The cross product points perpendicular to the plane spanned by $\\mathbf{r}$ and $\\mathbf{p}$, with the right-hand rule fixing the sign.`}</p>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              A block slides in a straight line at constant speed. Can its angular momentum be
              nonzero about some origin?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>{`Yes. If the origin sits off the line of motion at perpendicular distance $\\ell$, then $L = m\\ell v$. Only an origin on the line gives zero, because there $\\mathbf{r}$ and $\\mathbf{v}$ are parallel and the cross product collapses.`}</p>
            </details>
          </div>
          <p>{`For motion in the $xy$ plane $\\mathbf{L}$ points along $\\pm \\hat{\\mathbf{k}}$: counterclockwise motion gives $+L_z$, clockwise gives $-L_z$.`}</p>

          <h3>{`Three ways to compute $L_z$`}</h3>
          <p>{`In a plane the same number $L_z$ comes out three ways. Use whichever the geometry hands you for free.`}</p>
          <p>
            <strong>By angle.</strong>
          </p>
          <div className="lrn-eq">
            <span>{`$$L_z = r p \\sin\\phi$$`}</span>
          </div>
          <p>{`with $\\phi$ the angle between $\\mathbf{r}$ and $\\mathbf{p}$.`}</p>
          <p>{`<strong>By lever arm.</strong> Drop a perpendicular from the origin to the line the particle moves along, and call its length $r_\\perp$. Then`}</p>
          <div className="lrn-eq">
            <span>{`$$L_z = r_\\perp p$$`}</span>
          </div>
          <p>{`<strong>By split momentum.</strong> Decompose $\\mathbf{p}$ into a piece along $\\mathbf{r}$ and a piece $p_\\perp$ across it. The parallel piece carries no angular momentum, leaving`}</p>
          <div className="lrn-eq">
            <span>{`$$L_z = r p_\\perp$$`}</span>
          </div>
          <p>
            All three forms are the same identity, $L_z = rp\sin\phi$, with the sine absorbed into a
            different factor each time.
          </p>

          <h3>Component Form</h3>
          <p>In Cartesian components the cross product gives</p>
          <div className="lrn-eq">
            <span>{`$$\\mathbf{L} = \\begin{vmatrix} \\hat{\\mathbf{i}} & \\hat{\\mathbf{j}} & \\hat{\\mathbf{k}} \\\\ x & y & z \\\\ p_x & p_y & p_z \\end{vmatrix}$$`}</span>
          </div>
          <p>{`For motion in the $xy$ plane this reduces to`}</p>
          <div className="lrn-eq">
            <span>{`$$L_z = x p_y - y p_x$$`}</span>
          </div>
          <p>This form is the cleanest one in code or with raw coordinates.</p>

          <h3>Origin Dependence</h3>
          <p>{`Shift the origin and $\\mathbf{r}$ changes, so $\\mathbf{L}$ changes too. Always name the origin before quoting an angular momentum.`}</p>
          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Force</span>
              <p>
                Same vector at every origin. The push on the body does not care where you choose to
                measure positions from.
              </p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Torque</span>
              <p>{`$\\mathbf{r} \\times \\mathbf{F}$. Move the origin and the lever arm changes, so the same force gives a different torque.`}</p>
            </div>
          </div>

          <h3>Example: a sliding block</h3>
          <p>{`A block slides freely along the $x$ axis with velocity $v\\hat{\\mathbf{i}}$. Pick origin $A$ on the line of motion. Then $\\mathbf{r}$ and $\\mathbf{v}$ are parallel, the cross product vanishes, and`}</p>
          <div className="lrn-eq">
            <span>{`$$\\mathbf{L}_A = 0$$`}</span>
          </div>
          <p>{`Pick origin $B$ instead at perpendicular distance $\\ell$ from the line. The lever arm is $\\ell$, so`}</p>
          <div className="lrn-eq">
            <span>{`$$\\mathbf{L}_B = m\\ell v\\,\\hat{\\mathbf{k}}$$`}</span>
          </div>
          <p>
            The same block, the same motion, two different angular momenta. Both are correct: each
            is the angular momentum about its own origin.
          </p>
          <SlidingTwoOrigins />

          <h3>Example: the conical pendulum</h3>
          <p>{`A bob of mass $M$ swings in a horizontal circle of radius $r$, suspended by a string of length $\\ell$ at angle $\\alpha$ from the vertical. The bob's angular speed is $\\omega$, so its tangential speed is $v = r\\omega$.`}</p>
          <p>{`Pick origin $A$ at the center of the horizontal circle, in the plane of the orbit. The position $\\mathbf{r}$ and velocity $\\mathbf{v}$ are perpendicular and both lie in the plane, giving`}</p>
          <div className="lrn-eq">
            <span>{`$$\\mathbf{L}_A = M r^2 \\omega\\,\\hat{\\mathbf{k}}$$`}</span>
          </div>
          <p>
            This vector points up along the symmetry axis, and is constant in both size and
            direction.
          </p>
          <p>{`Now move the origin to $B$ at the pivot above the circle. The new position $\\mathbf{r}_B$ has length $\\ell$ and stays perpendicular to $\\mathbf{v}$, so`}</p>
          <div className="lrn-eq">
            <span>{`$$|\\mathbf{L}_B| = M\\ell r \\omega$$`}</span>
          </div>
          <p>{`The size is constant, but $\\mathbf{r}_B$ tilts toward a moving bob, so $\\mathbf{L}_B$ itself sweeps out a cone. Only its $z$ component stays put. Same physical motion, two very different vectors.`}</p>
          <ConicalPendulum2 />
          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Origin A (circle center)</span>
              <p>{`$\\mathbf{L}_A = M r^2 \\omega \\hat{\\mathbf{k}}$. Constant in size and direction; points along the symmetry axis.`}</p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Origin B (pivot)</span>
              <p>{`$|\\mathbf{L}_B| = M\\ell r\\omega$. Constant in size; direction traces a cone with the bob.`}</p>
            </div>
          </div>
        </>,

        <>
          <h2>Torque and the Rotation Law</h2>
          <p>{`Torque is the rotational counterpart of force. For one force $\\mathbf{F}$ applied at position $\\mathbf{r}$,`}</p>
          <div className="lrn-eq">
            <span>{`$$\\boldsymbol{\\tau} = \\mathbf{r} \\times \\mathbf{F}$$`}</span>
          </div>
          <p>
            Like angular momentum, torque depends on the origin. The same force can have a large
            torque about one point and zero torque about another.
          </p>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              Two equal forces push on a wheel from opposite sides in opposite directions. The total
              force is zero. Is the torque zero?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                No. The forces cancel as a sum, but their torques add because they act along
                different lines. Such a pair is called a couple, and it is the cleanest example of
                zero net force with nonzero net torque.
              </p>
            </details>
          </div>

          <h3>Three cases</h3>
          <p>
            <strong>Torque without net force.</strong> Push opposite sides of a free wheel with
            equal forces in opposite directions. The pushes cancel, but the wheel spins up because
            each force has its own lever arm and the two torques add.
          </p>
          <p>
            <strong>Force without net torque.</strong> Push a block straight through its center
            along its line of motion. It accelerates without spinning, because the line of force
            passes through the chosen reference point.
          </p>
          <p>
            <strong>Both at once.</strong> Push a hockey stick off-center on the ice. The center of
            mass slides and the stick spins at the same time.
          </p>

          <h3>The rotation law</h3>
          <p>{`Differentiate $\\mathbf{L} = \\mathbf{r} \\times \\mathbf{p}$ in time:`}</p>
          <div className="lrn-eq">
            <span>{`$$\\frac{d\\mathbf{L}}{dt} = \\frac{d\\mathbf{r}}{dt} \\times \\mathbf{p} + \\mathbf{r} \\times \\frac{d\\mathbf{p}}{dt}$$`}</span>
          </div>
          <p>{`The first term is $\\mathbf{v} \\times m\\mathbf{v}$, which is zero because the cross product of a vector with itself vanishes. The second term uses Newton's second law $\\frac{d\\mathbf{p}}{dt} = \\mathbf{F}$, leaving`}</p>
          <div className="lrn-eq lrn-eq-display">
            <span>{`$$\\boxed{\\boldsymbol{\\tau} = \\frac{d\\mathbf{L}}{dt}}$$`}</span>
          </div>
          <p>{`The exact rotational mirror of $\\mathbf{F} = \\frac{d\\mathbf{p}}{dt}$. For a single particle the content is the same as Newton's law; the rotational form earns its keep when summed over a body of many particles, where many internal forces drop out.`}</p>
          <p>{`If $\\boldsymbol{\\tau} = 0$ then $\\mathbf{L}$ is constant: angular momentum is conserved.`}</p>

          <h3>The law of equal areas</h3>
          <p>{`A central force, $\\mathbf{F} = f(r)\\hat{\\mathbf{r}}$, points along $\\mathbf{r}$, so its torque about the force center is zero and $\\mathbf{L}$ stays fixed. The geometric consequence is striking. The triangle area swept by $\\mathbf{r}$ in time $dt$ is`}</p>
          <div className="lrn-eq">
            <span>{`$$dA = \\tfrac{1}{2} r^2\\, d\\theta$$`}</span>
          </div>
          <p>so the rate at which area is swept is</p>
          <div className="lrn-eq">
            <span>{`$$\\frac{dA}{dt} = \\frac{1}{2} r^2 \\dot{\\theta} = \\frac{L_z}{2m}$$`}</span>
          </div>
          <p>
            Conserved angular momentum means the areal speed is constant. This is Kepler's second
            law, and it holds for any central force, not just gravity.
          </p>

          <h3>The capture cross section</h3>
          <p>{`A spaceship far from a planet fires a package at speed $v_0$ aimed near a planet of radius $R$ and mass $M$. Let $b'$ be the impact parameter, the perpendicular distance from the planet's center to the package's straight-line trajectory at infinity. Gravity bends the path inward, so the package can hit the planet even when it would have missed in straight-line geometry. The effective target area is therefore larger than the geometric one $A_0 = \\pi R^2$.`}</p>
          <p>{`Conserve energy between infinity and the grazing radius $r = R$:`}</p>
          <div className="lrn-eq">
            <span>{`$$\\tfrac{1}{2} m v_0^2 = \\tfrac{1}{2} m v_R^2 - \\frac{m M G}{R}$$`}</span>
          </div>
          <p>Conserve angular momentum:</p>
          <div className="lrn-eq">
            <span>{`$$m b' v_0 = m R v_R$$`}</span>
          </div>
          <p>{`Solve for $b'^2$ and multiply by $\\pi$:`}</p>
          <div className="lrn-eq">
            <span>{`$$A_{\\text{eff}} = A_0\\left(1 + \\frac{2GM}{R\\, v_0^2}\\right) = A_0\\left(1 - \\frac{U(R)}{E}\\right)$$`}</span>
          </div>
          <p>{`The cross section diverges as the launch energy $E \\to 0$. You cannot miss a planet from rest. Physically, a slow projectile lingers near the planet long enough for gravity to pull it in from any direction.`}</p>

          <h3>Torque on a sliding block</h3>
          <p>{`A block slides in $+x$ against friction $\\mathbf{f} = -f\\hat{\\mathbf{i}}$. Pick origin $B$ at perpendicular distance $\\ell$ in $+y$ off the line of motion. The torque about $B$ is`}</p>
          <div className="lrn-eq">
            <span>{`$$\\boldsymbol{\\tau}_B = \\ell\\hat{\\mathbf{j}} \\times (-f\\hat{\\mathbf{i}}) = -\\ell f\\,\\hat{\\mathbf{k}}$$`}</span>
          </div>
          <p>{`Check it against $\\frac{d\\mathbf{L}_B}{dt}$. With $L_B = \\ell p$ along $+\\hat{\\mathbf{k}}$ and $p$ falling at rate $f$, the time derivative is $-\\ell f\\,\\hat{\\mathbf{k}}$ - the same vector. The match works only because both $\\boldsymbol{\\tau}$ and $\\mathbf{L}$ are taken about the same origin; this is built into the derivation of the rotation law and cannot be relaxed.`}</p>

          <h3>Torque on the conical pendulum</h3>
          <p>{`Back to the conical pendulum. About origin $A$ in the plane of the orbit, gravity points down through the center of the circle, antiparallel to $\\mathbf{r}_A$. The torque vanishes, consistent with the constant $\\mathbf{L}_A$ found earlier.`}</p>
          <p>{`About origin $B$ at the pivot, gravity has a lever arm and the torque magnitude is`}</p>
          <div className="lrn-eq">
            <span>{`$$|\\boldsymbol{\\tau}_B| = M g \\ell \\sin\\alpha$$`}</span>
          </div>
          <p>{`pointing tangent to the bob's path. Split $\\mathbf{L}_B = \\mathbf{L}_z + \\mathbf{L}_r$. The vertical piece is the constant $\\mathbf{L}_A$ found above. The radial piece $\\mathbf{L}_r$ has fixed length $M\\ell r\\omega \\sin\\alpha$ but rotates with the bob, so it changes only by direction. A vector of fixed length $A$ that sweeps at angular rate $\\dot\\theta$ has $|\\frac{d\\mathbf{A}}{dt}| = A\\,\\dot\\theta$ perpendicular to itself. Plug in $\\dot\\theta = \\omega$ and the bookkeeping reproduces $|\\boldsymbol{\\tau}_B|$ exactly.`}</p>

          <h3>Torque from gravity acts at the center of mass</h3>
          <p>{`For a body in a uniform gravity field $\\mathbf{g}$, the total torque about any point is`}</p>
          <div className="lrn-eq">
            <span>{`$$\\boldsymbol{\\tau} = \\sum_j \\mathbf{r}_j \\times m_j\\mathbf{g} = \\left(\\sum_j m_j \\mathbf{r}_j\\right) \\times \\mathbf{g} = M\\mathbf{R} \\times \\mathbf{g} = \\mathbf{R} \\times \\mathbf{W}$$`}</span>
          </div>
          <p>{`The factor pulls out because $\\mathbf{g}$ is the same at every particle, and $\\sum m_j\\mathbf{r}_j = M\\mathbf{R}$ is just the definition of the center of mass. Gravity therefore acts as if the entire weight were concentrated at $\\mathbf{R}$. The corollary: a body balances on a pivot only when the pivot sits directly below (or at) the center of mass, where $\\mathbf{R} = 0$ kills the torque.`}</p>
          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Net force: origin-free</span>
              <p>
                The sum of forces is the same vector at every origin. It is a property of the
                loading, not the choice of reference point.
              </p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Net torque: origin-tied</span>
              <p>{`$\\sum \\mathbf{r}_j \\times \\mathbf{F}_j$. Shift the origin and every $\\mathbf{r}_j$ shifts, so the same forces give a different total torque.`}</p>
            </div>
          </div>
        </>,

        <>
          <h2>Angular Momentum and Fixed-Axis Rotation</h2>
          <p>
            A body rotates about a <em>fixed axis</em> when the direction of the spin axis is
            locked, even if the axis itself slides through space. The wheel of a car driving
            straight rotates about a fixed axis; the wheel of a car going into a wobble does not.
            With one direction locked, all the rotational geometry collapses to a single number, the
            angular speed.
          </p>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>{`Take the rotation axis as the $z$ axis. For a particle in the body, in what direction does its velocity point?`}</p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>{`Tangent to the circle the particle sweeps. The velocity is perpendicular both to the axis and to the radial vector $\\boldsymbol{\\rho}_j$ that runs from the axis straight out to the particle.`}</p>
            </details>
          </div>
          <p>{`Take the axis as $\\hat{\\mathbf{k}}$, and let $\\rho_j$ be the perpendicular distance from particle $j$ to the axis. Each particle traces a circle of radius $\\rho_j$ at tangential speed`}</p>
          <div className="lrn-eq">
            <span>{`$$v_j = \\omega \\rho_j$$`}</span>
          </div>
          <p>{`The whole body shares the same $\\omega$ - that is what makes it rigid - so each particle's speed scales linearly with how far it sits from the axis.`}</p>

          <h3>{`From particles to $L_z = I\\omega$`}</h3>
          <p>{`The $z$ component of angular momentum for particle $j$ is`}</p>
          <div className="lrn-eq">
            <span>{`$$L_z(j) = m_j v_j \\rho_j = m_j \\rho_j^2 \\omega$$`}</span>
          </div>
          <p>Sum over all particles in the body:</p>
          <div className="lrn-eq">
            <span>{`$$L_z = \\sum_j m_j \\rho_j^2 \\omega = \\omega \\sum_j m_j \\rho_j^2$$`}</span>
          </div>
          <p>Define the moment of inertia about the axis as</p>
          <div className="lrn-eq">
            <span>{`$$I = \\sum_j m_j \\rho_j^2$$`}</span>
          </div>
          <p>Then</p>
          <div className="lrn-eq lrn-eq-display">
            <span>{`$$\\boxed{L_z = I\\omega}$$`}</span>
          </div>
          <p>For a continuous body the sum becomes an integral:</p>
          <div className="lrn-eq">
            <span>{`$$I = \\int \\rho^2\\, dm = \\int (x^2 + y^2)\\, w\\, dV$$`}</span>
          </div>
          <p>{`Here $w$ is the mass density. The squared distance is what makes mass far from the axis dominate the integral, by a lot - moving a kilogram from 1 m to 2 m out quadruples its contribution. Keep $\\rho$ (distance to the axis) distinct from $r$ (distance to the chosen origin); the two coincide only when the origin happens to lie on the axis.`}</p>
          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">{`$\\rho$ - to the axis`}</span>
              <p>{`Perpendicular distance from a particle to the rotation axis. Enters $I = \\sum m_j \\rho_j^2$.`}</p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">{`$r$ - to the origin`}</span>
              <p>{`Distance from a particle to the chosen origin. Enters $\\mathbf{L} = \\mathbf{r} \\times \\mathbf{p}$.`}</p>
            </div>
          </div>

          <h3>Five canonical moments of inertia</h3>
          <p>
            Five results show up everywhere downstream. Each one is a one-line application of the
            integral form.
          </p>
          <p>{`<strong>Thin hoop, axis through the center, perpendicular to the plane.</strong> Every mass element sits at radius $R$, so`}</p>
          <div className="lrn-eq">
            <span>{`$$I = M R^2$$`}</span>
          </div>
          <p>{`<strong>Uniform disk, axis through center, perpendicular to plane.</strong> Use polar coordinates with mass density $\\sigma = \\frac{M}{\\pi R^2}$:`}</p>
          <div className="lrn-eq">
            <span>{`$$I = \\int_0^R \\rho^2 (\\sigma\\, 2\\pi\\rho\\, d\\rho) = 2\\pi\\sigma \\int_0^R \\rho^3\\, d\\rho = \\tfrac{1}{2} M R^2$$`}</span>
          </div>
          <p>{`<strong>Uniform thin stick of length $L$, axis through midpoint, perpendicular to stick.</strong> Linear density is $\\frac{M}{L}$:`}</p>
          <div className="lrn-eq">
            <span>{`$$I = \\int_{-\\frac{L}{2}}^{\\frac{L}{2}} x^2 \\tfrac{M}{L}\\, dx = \\tfrac{1}{12} M L^2$$`}</span>
          </div>
          <p>{`<strong>Uniform thin stick, axis through one end, perpendicular to stick.</strong> Same integral but from $0$ to $L$:`}</p>
          <div className="lrn-eq">
            <span>{`$$I = \\int_0^L x^2 \\tfrac{M}{L}\\, dx = \\tfrac{1}{3} M L^2$$`}</span>
          </div>
          <p>
            <strong>Uniform sphere about a diameter.</strong> This needs a triple integral. The
            result is
          </p>
          <div className="lrn-eq">
            <span>{`$$I = \\tfrac{2}{5} M R^2$$`}</span>
          </div>
          <MomentsTable />
          <TorqueLever />
          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>
              Why does the stick about its end have four times the moment of inertia of the stick
              about its midpoint?
            </p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>{`The parallel axis theorem gives $I_{end} = I_{mid} + M(\\frac{L}{2})^2 = \\tfrac{1}{12} M L^2 + \\tfrac{1}{4} M L^2 = \\tfrac{1}{3} M L^2$. That is exactly four times $\\tfrac{1}{12} M L^2$. The extra mass weighting at large distances dominates.`}</p>
            </details>
          </div>
        </>,

        <>
          <h2>Pure Rotation About an Axis</h2>
          <p>
            Pure rotation means the axis is fixed in space, not just fixed in direction: a flywheel
            on a stationary axle, a door swinging on its hinges. Internal torques between the body's
            own particles cancel pairwise - we take this as given here, and the proof from Newton's
            third law follows in the next module.
          </p>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              A flywheel spins on a fixed axle under a constant external torque. How does its
              angular speed change with time?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>{`Linearly. Constant torque on a constant moment of inertia gives constant angular acceleration $\\alpha = \\frac{\\tau}{I}$, so $\\omega(t) = \\omega_0 + \\alpha t$ - the rotational analog of constant-force, constant-acceleration kinematics.`}</p>
            </details>
          </div>
          <p>{`Differentiate $L_z = I\\omega$ in time. With $I$ fixed for a rigid body about a fixed axis, only $\\omega$ varies, so`}</p>
          <div className="lrn-eq">
            <span>{`$$\\tau = I \\frac{d\\omega}{dt} = I\\alpha$$`}</span>
          </div>
          <p>{`This is the rotational $F = ma$, with mass $\\to I$, acceleration $\\to \\alpha$, and force $\\to \\tau$. Each linear law has a rotational twin built the same way.`}</p>

          <h3>Rotational kinetic energy</h3>
          <p>{`Each particle carries $\\tfrac{1}{2} m_j v_j^2 = \\tfrac{1}{2} m_j \\rho_j^2 \\omega^2$. Sum over the body and pull the common $\\omega^2$ out:`}</p>
          <div className="lrn-eq">
            <span>{`$$K = \\tfrac{1}{2} \\omega^2 \\sum_j m_j \\rho_j^2 = \\tfrac{1}{2} I \\omega^2$$`}</span>
          </div>
          <p>{`The same swap as in the dynamics: $\\tfrac{1}{2} m v^2$ has $m \\to I$ and $v \\to \\omega$.`}</p>

          <h3>The parallel axis theorem</h3>
          <p>{`Take an axis through the center of mass and a parallel axis offset by perpendicular distance $\\ell$. If $I_0$ is the moment of inertia about the central axis and $I$ about the offset one, then`}</p>
          <div className="lrn-eq">
            <span>{`$$I = I_0 + M\\ell^2$$`}</span>
          </div>
          <div className="lrn-faded">
            <div className="lrn-faded-phase">
              <span className="lrn-faded-label">COMPLETE EXAMPLE</span>
              <p>Vector proof of the parallel axis theorem.</p>
              <ol className="lrn-list">
                <li>{`Write $\\boldsymbol{\\rho}_j = \\boldsymbol{\\rho}'_j + \\mathbf{R}_\\perp$, where $\\boldsymbol{\\rho}'_j$ is measured from the center of mass and $\\mathbf{R}_\\perp$ is the offset between axes.`}</li>
                <li>{`Square: $\\rho_j^2 = \\rho_j'^2 + 2\\boldsymbol{\\rho}'_j \\cdot \\mathbf{R}_\\perp + R_\\perp^2$.`}</li>
                <li>{`Multiply by $m_j$ and sum over $j$.`}</li>
                <li>{`Use $\\sum m_j \\boldsymbol{\\rho}'_j = 0$ to kill the cross term.`}</li>
                <li>{`Result: $I = I_0 + M\\ell^2$.`}</li>
              </ol>
            </div>
            <div className="lrn-faded-phase">
              <span className="lrn-faded-label">YOUR TURN: PARTIAL</span>
              <p>Apply the same proof to a thin stick about its end, given the central moment.</p>
              <ol className="lrn-list">
                <li>{`Start with $I_0 = \\tfrac{1}{12} M L^2$ for the central axis.`}</li>
                <li>{`The offset to the end axis is $\\ell = \\frac{L}{2}$.`}</li>
                <li>Add the offset term and simplify.</li>
              </ol>
            </div>
            <div className="lrn-faded-phase">
              <span className="lrn-faded-label">INDEPENDENT PRACTICE</span>
              <p>{`Use the parallel axis theorem to find the moment of inertia of a uniform disk about an axis at the rim, perpendicular to the disk plane.`}</p>
            </div>
          </div>
          <ParallelAxis />
          <p>
            One central moment of inertia gives you every parallel one for free. Two checks confirm
            the formula: the stick about its end,
          </p>
          <div className="lrn-eq">
            <span>{`$$I = \\tfrac{1}{12} M L^2 + M(\\frac{L}{2})^2 = \\tfrac{1}{3} M L^2$$`}</span>
          </div>
          <p>
            matches the direct integral, and the disk about an axis at its rim, perpendicular to the
            plane,
          </p>
          <div className="lrn-eq">
            <span>{`$$I = \\tfrac{1}{2} M R^2 + M R^2 = \\tfrac{3}{2} M R^2$$`}</span>
          </div>
          <p>is what we will need shortly for the rolling wheel.</p>

          <h3>Atwood with a massive pulley</h3>
          <p>{`Two masses $M_1 > M_2$ hang over a pulley of mass $M_p$ and radius $R$, modeled as a uniform disk so $I = \\tfrac{1}{2} M_p R^2$. The string does not slip on the pulley, which forces $a = \\alpha R$. Let $T_1$ and $T_2$ be the tensions on the two sides.`}</p>
          <p>Newton's law on each mass:</p>
          <div className="lrn-eq">
            <span>{`$$M_1 g - T_1 = M_1 a$$`}</span>
            <span>{`$$T_2 - M_2 g = M_2 a$$`}</span>
          </div>
          <p>{`The rotation law on the pulley, with the two tensions providing the only torques about the axle:`}</p>
          <div className="lrn-eq">
            <span>{`$$T_1 R - T_2 R = I\\alpha = \\tfrac{1}{2} M_p R^2 \\cdot \\frac{a}{R}$$`}</span>
          </div>
          <p>Three equations, three unknowns. Eliminate the tensions:</p>
          <div className="lrn-eq">
            <span>{`$$a = \\frac{(M_1 - M_2) g}{M_1 + M_2 + \\frac{M_p}{2}}$$`}</span>
          </div>
          <p>{`The pulley adds itself to the inertia, but only at half-strength: the disk shape stores rotational kinetic energy at half the rate of a hoop, and that factor of $\\tfrac{1}{2}$ is exactly what survives the algebra.`}</p>
          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Massless pulley</span>
              <p>{`Same tension on both sides; $a = \\frac{(M_1 - M_2)g}{M_1 + M_2}$. The pulley plays no dynamical role.`}</p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Massive pulley</span>
              <p>{`Tensions differ - the difference is the torque that spins the pulley up. The system carries an extra $\\frac{M_p}{2}$ of effective inertia, slowing the acceleration.`}</p>
            </div>
          </div>
        </>,

        <>
          <h2>The Physical Pendulum</h2>
          <p>
            A pendulum is any body free to swing about a fixed pivot under gravity. Three forms
            cover almost everything you meet: the idealized simple pendulum, an extended physical
            pendulum, and the precision-engineered Kater's pendulum. The same equation of motion
            governs all three; the only difference is what plays the role of the moment of inertia.
          </p>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              Two pendulums have the same length but different bob shapes. Will their periods match?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                If the bob is small enough to count as a point mass on the string, no - only string
                length and gravity matter, and the periods agree. As soon as the bob has appreciable
                size, its shape changes the moment of inertia about the pivot and the periods part
                ways.
              </p>
            </details>
          </div>
          <PhysicalPendulum />
          <h3>The simple pendulum</h3>
          <p>{`A bob of mass $m$ hangs from a massless string of length $\\ell$, swinging at angle $\\phi$ from vertical. Gravity pulls back toward $\\phi = 0$, with torque about the pivot`}</p>
          <div className="lrn-eq">
            <span>{`$$\\tau = -mg\\ell\\sin\\phi$$`}</span>
          </div>
          <p>{`The minus sign encodes the restoring direction. The bob is a point mass at distance $\\ell$, so $I = m\\ell^2$, and $\\tau = I\\ddot\\phi$ becomes`}</p>
          <div className="lrn-eq">
            <span>{`$$m\\ell^2\\ddot\\phi = -mg\\ell\\sin\\phi$$`}</span>
          </div>
          <p>{`Divide out the mass - gravitational and inertial $m$ cancel exactly - and apply $\\sin\\phi \\approx \\phi$ for small swings:`}</p>
          <div className="lrn-eq">
            <span>{`$$\\ddot\\phi + \\frac{g}{\\ell}\\phi = 0$$`}</span>
          </div>
          <p>Simple harmonic motion, with period</p>
          <div className="lrn-eq">
            <span>{`$$T = 2\\pi\\sqrt{\\frac{\\ell}{g}}$$`}</span>
          </div>
          <p>
            independent of mass and amplitude. That is why every simple pendulum of the same length
            keeps the same time.
          </p>
          <h3>The physical pendulum</h3>
          <p>{`Replace the point bob with a body of mass $M$, center-of-mass distance $\\ell$ below the pivot, and moment of inertia $I_p$ about the pivot. Gravity still acts as if all the weight were at the center of mass, so the torque is $-Mg\\ell\\sin\\phi$ and the equation of motion reads`}</p>
          <div className="lrn-eq">
            <span>{`$$I_p\\ddot\\phi + Mg\\ell\\sin\\phi = 0$$`}</span>
          </div>
          <p>For small angles, the angular frequency is</p>
          <div className="lrn-eq">
            <span>{`$$\\omega = \\sqrt{\\frac{Mg\\ell}{I_p}}$$`}</span>
          </div>
          <h3>Radius of gyration</h3>
          <p>{`To compare different shapes on equal footing, define the radius of gyration about the center of mass:`}</p>
          <div className="lrn-eq">
            <span>{`$$k = \\sqrt{\\frac{I_0}{M}}$$`}</span>
          </div>
          <p>{`This packages the mass distribution into a single length, so that $I_0 = Mk^2$. The parallel axis theorem then gives $I_p = M(k^2 + \\ell^2)$, and`}</p>
          <div className="lrn-eq">
            <span>{`$$\\omega = \\sqrt{\\frac{g\\ell}{k^2 + \\ell^2}}$$`}</span>
          </div>
          <p>{`Canonical values: $k = R$ for a hoop, $k = \\frac{R}{\\sqrt{2}}$ for a disk, $k = \\sqrt{\\tfrac{2}{5}}\\,R$ for a sphere.`}</p>
          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Simple pendulum</span>
              <p>
                All mass at the bob. Period set by string length and gravity alone; shape and mass
                are invisible.
              </p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Physical pendulum</span>
              <p>
                Mass spread over the body. Period set by both the pivot-to-CM distance and the
                radius of gyration, so both shape and pivot location change the answer.
              </p>
            </div>
          </div>
          <h3>Grandfather's clock</h3>
          <p>Beyond the small-angle limit, the period gains an amplitude correction:</p>
          <div className="lrn-eq">
            <span>{`$$T = T_0\\left(1 + \\tfrac{1}{16}\\phi_0^2 + \\dots\\right)$$`}</span>
          </div>
          <p>{`Numbers for a typical clock: $T_0 = 2$ s, $\\ell = 1$ m, half-swing 4 cm, so $\\phi_0 = 4 \\times 10^{-2}$ rad and $\\frac{\\phi_0^2}{16} \\approx 10^{-4}$. That fixed offset can be calibrated out by adjusting the pendulum length. The drift comes from variation in amplitude: a 10 percent change in $\\phi_0$ shifts $T$ by about $2 \\times 10^{-5}$, which compounded over the 86,400 seconds in a day amounts to a few seconds of timing error per day. Tiny relative errors become visible because the clock counts so many periods.`}</p>
          <h3>Kater's pendulum</h3>
          <p>{`A precision dodge for measuring $g$. Mount two knife-edge pivots at distances $\\ell_A$ and $\\ell_B$ from the center of mass, on opposite sides of the body, and shift mass along the rod until both pivots give the same period. Equating $\\omega = \\sqrt{\\frac{g\\ell}{k^2+\\ell^2}}$ at the two pivots:`}</p>
          <div className="lrn-eq">
            <span>{`$$\\frac{g\\ell_A}{k^2 + \\ell_A^2} = \\frac{g\\ell_B}{k^2 + \\ell_B^2}$$`}</span>
          </div>
          <p>Cross-multiply, and the radius of gyration falls out as</p>
          <div className="lrn-eq">
            <span>{`$$k^2 = \\ell_A \\ell_B$$`}</span>
          </div>
          <p>Substitute back into the period formula:</p>
          <div className="lrn-eq">
            <span>{`$$T = 2\\pi\\sqrt{\\frac{\\ell_A + \\ell_B}{g}}$$`}</span>
          </div>
          <p>
            The period depends only on the distance between the two knife edges, which can be
            machined and measured with high precision. The hard-to-measure shape parameters never
            enter, which is why Kater's pendulum was the standard for measuring gravity throughout
            the 19th century.
          </p>
          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Naive physical pendulum</span>
              <p>
                Needs both the pivot-to-CM distance and the radius of gyration. Measuring these on a
                real body is messy; the errors in them limit how accurately you can pin down g.
              </p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Kater's pendulum</span>
              <p>
                Tune two pivots to share a period. The shape parameters cancel algebraically, and
                only the easily measured pivot-to-pivot distance survives.
              </p>
            </div>
          </div>
          <h3>The center of percussion</h3>
          <p>{`A door hinged at one side strikes a stop at distance $\\ell$ from the hinge. Let $\\ell'$ be the hinge-to-CM distance and $I$ the moment of inertia about the hinge. Pick`}</p>
          <div className="lrn-eq">
            <span>{`$$\\ell = \\frac{I}{M\\ell'}$$`}</span>
          </div>
          <p>{`At this distance the impulse from the stop tries to push the door sideways and to spin it about the center of mass at exactly the same rate the hinge would otherwise move. The two effects cancel, the hinge feels no impulsive force, and the door simply pivots about it. For a uniform door of width $w$, $I = \\frac{Mw^2}{3}$ and $\\ell' = \\frac{w}{2}$, giving`}</p>
          <div className="lrn-eq">
            <span>{`$$\\ell = \\tfrac{2}{3} w$$`}</span>
          </div>
          <p>
            This is the center of percussion, and it is the same point as the sweet spot of a
            baseball bat: hit the ball there and your hands feel no sting.
          </p>
        </>,

        <>
          <h2>Combined Translation and Rotation</h2>
          <p>
            Most real motion has both pieces at once: a rolling wheel slides forward and spins, a
            thrown wrench tumbles as its center of mass arcs through the air. Two laws now run in
            parallel - one for the center of mass and one for the spin about it - coupled through
            constraints such as the no-slip condition of rolling.
          </p>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              A wheel rolls without slipping. Is its angular momentum about a ground point the same
              as its angular momentum about its own center?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                No. About the center, only the spin counts. About a ground point, you also pick up
                an orbital piece from the center of mass moving past that point - the two answers
                differ by exactly that orbital term, and we will compute it shortly.
              </p>
            </details>
          </div>
          <h3>Splitting angular momentum</h3>
          <p>{`Write each particle's position as $\\mathbf{r}_j = \\mathbf{R} + \\mathbf{r}'_j$, where $\\mathbf{R}$ is the center of mass and $\\mathbf{r}'_j$ is the offset from it. Plug into`}</p>
          <div className="lrn-eq">
            <span>{`$$\\mathbf{L} = \\sum_j \\mathbf{r}_j \\times m_j\\dot{\\mathbf{r}}_j$$`}</span>
          </div>
          <div className="lrn-faded">
            <div className="lrn-faded-phase">
              <span className="lrn-faded-label">COMPLETE EXAMPLE</span>
              <p>
                Spin plus orbital decomposition: expand the cross product into four pieces and
                identify which survive.
              </p>
              <ol className="lrn-list">
                <li>{`Substitute $\\mathbf{r}_j = \\mathbf{R} + \\mathbf{r}'_j$ and $\\dot{\\mathbf{r}}_j = \\mathbf{V} + \\dot{\\mathbf{r}}'_j$ into the sum.`}</li>
                <li>{`Expand the cross product to get four terms: $\\mathbf{R} \\times M\\mathbf{V}$, $\\mathbf{R} \\times \\sum m_j \\dot{\\mathbf{r}}'_j$, $(\\sum m_j \\mathbf{r}'_j) \\times \\mathbf{V}$, and $\\sum \\mathbf{r}'_j \\times m_j \\dot{\\mathbf{r}}'_j$.`}</li>
                <li>{`Use $\\sum m_j \\mathbf{r}'_j = 0$ from the definition of center of mass to kill two terms.`}</li>
                <li>{`Result: $\\mathbf{L} = \\mathbf{R} \\times M\\mathbf{V} + \\sum_j \\mathbf{r}'_j \\times m_j\\dot{\\mathbf{r}}'_j$.`}</li>
              </ol>
            </div>
            <div className="lrn-faded-phase">
              <span className="lrn-faded-label">YOUR TURN: PARTIAL</span>
              <p>
                Try the parallel decomposition for the kinetic energy. The first two steps are
                filled in.
              </p>
              <ol className="lrn-list">
                <li>{`Write each velocity as $\\dot{\\mathbf{r}}_j = \\mathbf{V} + \\dot{\\mathbf{r}}'_j$ and form $\\tfrac{1}{2}\\sum m_j \\dot{\\mathbf{r}}_j \\cdot \\dot{\\mathbf{r}}_j$.`}</li>
                <li>{`Expand the dot product into three terms.`}</li>
                <li>{`Identify the cross term that vanishes by the center-of-mass condition.`}</li>
                <li>{`Read off the surviving translational and rotational kinetic energies.`}</li>
              </ol>
            </div>
            <div className="lrn-faded-phase">
              <span className="lrn-faded-label">INDEPENDENT PRACTICE</span>
              <p>Now derive the analogous split for the torque about an external origin.</p>
              <ol className="lrn-list">
                <li>{`Write each force application point as $\\mathbf{R} + \\mathbf{r}'_j$ and sum $\\mathbf{r}_j \\times \\mathbf{f}_j$.`}</li>
                <li>{`Use $\\sum \\mathbf{f}_j = \\mathbf{F}$ to collect the center-of-mass piece.`}</li>
                <li>{`Identify the spin torque about the center of mass as the remaining sum.`}</li>
              </ol>
            </div>
          </div>
          <p>The two surviving terms package the total angular momentum as</p>
          <div className="lrn-eq">
            <span>{`$$\\mathbf{L} = \\mathbf{R} \\times M\\mathbf{V} + \\sum_j \\mathbf{r}'_j \\times m_j\\dot{\\mathbf{r}}'_j$$`}</span>
          </div>
          <p>{`For a body spinning about a fixed axis through its center of mass, the second sum is just $I_0\\omega\\hat{\\mathbf{k}}$, so`}</p>
          <div className="lrn-eq">
            <span>{`$$L_z = I_0\\omega + (\\mathbf{R} \\times M\\mathbf{V})_z$$`}</span>
          </div>
          <p>
            The first piece is the <em>spin</em>: rotation of the body about its own center of mass,
            measured with positions read from that center, so it does not depend on where the
            external origin sits. The second piece is the <em>orbital</em> term: the cross product
            of the center-of-mass position with the total momentum, which does depend on the origin
            and vanishes whenever the origin lies on the line of motion of the center of mass. Earth
            makes the split tangible: its daily rotation is spin; its yearly motion around the Sun
            is orbital.
          </p>
          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Spin</span>
              <p>
                Rotation about the body's own center of mass. Uses the moment of inertia about a
                body axis through that center. Same value at every external origin.
              </p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Orbital</span>
              <p>
                Center-of-mass position crossed with total momentum. Depends on the origin; zero
                only when the origin sits on the line of motion of the center of mass.
              </p>
            </div>
          </div>
          <h3>The rolling wheel</h3>
          <p>{`A uniform wheel of mass $M$ and radius $b$ rolls without slipping at speed $V$. The no-slip condition fixes $\\omega = \\frac{V}{b}$. With the convention that positive $\\omega$ rolls the wheel in $-x$, the center-of-mass velocity is $\\mathbf{V} = -b\\omega\\,\\hat{\\mathbf{i}}$.`}</p>
          <p>{`The spin about the center, with $I_0 = \\tfrac{1}{2}Mb^2$, is`}</p>
          <div className="lrn-eq">
            <span>{`$$L_0 = -\\tfrac{1}{2} M b^2 \\omega\\,\\hat{\\mathbf{k}}$$`}</span>
          </div>
          <p>{`Now take the origin at a point on the ground directly below the wheel. The center of mass sits a height $b$ above and moves horizontally, so`}</p>
          <div className="lrn-eq">
            <span>{`$$(\\mathbf{R} \\times M\\mathbf{V})_z = -M b V = -M b^2 \\omega$$`}</span>
          </div>
          <p>The total angular momentum about that ground point is the sum:</p>
          <div className="lrn-eq">
            <span>{`$$L_z = -\\tfrac{1}{2} M b^2\\omega - M b^2\\omega = -\\tfrac{3}{2} M b^2\\omega$$`}</span>
          </div>
          <p>
            The orbital piece contributes even though the wheel travels in a straight line: as long
            as the ground origin is offset from the line of the center of mass, the cross product of
            that offset with the total momentum is nonzero.
          </p>
          <RollingWheel />
          <h3>Splitting the torque</h3>
          <p>{`The same split runs through for torque. With each force acting at $\\mathbf{R} + \\mathbf{r}'_j$,`}</p>
          <div className="lrn-eq">
            <span>{`$$\\boldsymbol{\\tau} = \\sum_j \\mathbf{r}'_j \\times \\mathbf{f}_j + \\mathbf{R} \\times \\mathbf{F}$$`}</span>
          </div>
          <p>So</p>
          <div className="lrn-eq">
            <span>{`$$\\tau_z = \\tau_{0z} + (\\mathbf{R} \\times \\mathbf{F})_z$$`}</span>
          </div>
          <p>{`Combine with $\\frac{dL_z}{dt} = I_0\\alpha + (\\mathbf{R} \\times M\\mathbf{a})_z$. The center of mass terms cancel because $\\mathbf{F} = M\\mathbf{a}$. The surviving result is`}</p>
          <div className="lrn-eq lrn-eq-display">
            <span>{`$$\\boxed{\\tau_0 = I_0\\alpha}$$`}</span>
          </div>
          <p>{`This is a striking simplification. The center of mass can fly through the air in any trajectory whatever, but the spin about that center is still governed by the simple law $\\tau_0 = I_0\\alpha$, with the moment of inertia computed about a body axis through the center of mass. The result holds because we are working in an inertial frame, and the cross terms involving $\\mathbf{R}$ exactly cancel between the angular momentum and torque sides.`}</p>
          <h3>Kinetic energy decomposition</h3>
          <p>By the same trick, the kinetic energy splits cleanly into spin and translation:</p>
          <div className="lrn-eq">
            <span>{`$$K = \\tfrac{1}{2} I\\omega^2 + \\tfrac{1}{2} M V^2$$`}</span>
          </div>
          <p>The two pieces are independent: each is a clean function of one variable.</p>
          <h3>The work-energy theorem</h3>
          <p>
            The total work over a path equals the change in total kinetic energy, and it splits the
            same way:
          </p>
          <div className="lrn-eq">
            <span>{`$$\\int \\mathbf{F} \\cdot d\\mathbf{R} = \\tfrac{1}{2} M V_b^2 - \\tfrac{1}{2} M V_a^2$$`}</span>
          </div>
          <div className="lrn-eq">
            <span>{`$$\\int \\tau_0\\, d\\theta = \\tfrac{1}{2} I_0 \\omega_b^2 - \\tfrac{1}{2} I_0 \\omega_a^2$$`}</span>
          </div>
          <p>
            The first line is translational work; the second is rotational. The two budgets are
            independent and can be applied separately.
          </p>
          <h3>A disk on ice</h3>
          <p>{`A disk of mass $M$ and radius $b$ sits on frictionless ice while a tape pulls its rim with force $F$ tangent to the disk. Two routes solve the problem; both must give the same answer.`}</p>
          <p>
            <strong>Method 1: about the center of mass.</strong>{' '}
            {`The only horizontal force is $F$, so the center accelerates at`}
          </p>
          <div className="lrn-eq">
            <span>{`$$a = \\frac{F}{M}$$`}</span>
          </div>
          <p>{`The torque about the center is $\\tau_0 = b F$. Use $\\tau_0 = I_0\\alpha$ with $I_0 = \\tfrac{1}{2} M b^2$:`}</p>
          <div className="lrn-eq">
            <span>{`$$\\alpha = \\frac{bF}{I_0} = \\frac{2F}{Mb}$$`}</span>
          </div>
          <p>
            <strong>Method 2.</strong>{' '}
            {`Take the origin on the line of the force. The lever arm of $F$ about this origin is zero. So the torque about this origin is`}
          </p>
          <div className="lrn-eq">
            <span>{`$$\\boldsymbol{\\tau} = 0$$`}</span>
          </div>
          <p>
            Therefore the total angular momentum about this origin stays constant. Use the spin plus
            orbital split
          </p>
          <div className="lrn-eq">
            <span>{`$$L_z = I_0\\omega + (\\mathbf{R} \\times M\\mathbf{V})_z$$`}</span>
          </div>
          <p>{`Let $b$ be the perpendicular distance from the origin to the line of the center of mass. The orbital piece is $-MbV$ (sign from the geometry). So`}</p>
          <div className="lrn-eq">
            <span>{`$$L_z = I_0\\omega - MbV$$`}</span>
          </div>
          <p>{`Differentiate in time. Since $L_z$ is constant, $\\frac{dL_z}{dt} = 0$:`}</p>
          <div className="lrn-eq">
            <span>{`$$I_0\\alpha - Mb\\,a = 0$$`}</span>
          </div>
          <p>{`The center of mass obeys $F = Ma$, so $a = \\frac{F}{M}$. Plug in and solve for $\\alpha$:`}</p>
          <div className="lrn-eq">
            <span>{`$$I_0\\alpha = Mb \\cdot \\frac{F}{M} = bF \\quad\\Rightarrow\\quad \\alpha = \\frac{bF}{I_0}$$`}</span>
          </div>
          <p>{`Both methods give $\\alpha = \\frac{bF}{I_0}$ and $a = \\frac{F}{M}$. They give the same physics through different bookkeeping.`}</p>
          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Method 1: About CM</span>
              <p>
                You apply Newton's second law to the center of mass and the spin law about the
                center. Each force enters with its own lever arm about the center. The two equations
                decouple cleanly.
              </p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Method 2: Remote Origin</span>
              <p>
                You pick an origin where the applied force has zero lever arm. Total angular
                momentum about that point is conserved. The constraint then ties the angular and
                linear accelerations together.
              </p>
            </div>
          </div>
          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>Why does the angular momentum stay conserved about a point on the line of F?</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                Torque equals position cross force. When the origin sits on the line of the force,
                the position vector to the application point is parallel to the force. The cross
                product is zero. With zero torque, angular momentum about that origin does not
                change.
              </p>
            </details>
          </div>
          <h3>Drum Rolling Down a Plane</h3>
          <p>{`A uniform drum of mass $M$, radius $b$, rolls without slipping down a plane of angle $\\theta$.`}</p>
          <DrumOnIncline />
          <p>
            <strong>Method 1.</strong> Forces on the center of mass:
          </p>
          <div className="lrn-eq">
            <span>{`$$M g\\sin\\theta - f = M a$$`}</span>
          </div>
          <p>Torque about the center:</p>
          <div className="lrn-eq">
            <span>{`$$b f = I_0\\alpha = \\tfrac{1}{2} M b^2 \\alpha$$`}</span>
          </div>
          <p>{`Rolling constraint: $a = b\\alpha$. Combine:`}</p>
          <div className="lrn-eq">
            <span>{`$$a = \\tfrac{2}{3} g\\sin\\theta$$`}</span>
          </div>
          <p>
            <strong>Method 2.</strong>{' '}
            {`Take origin on the plane below the drum. Compute $\\tau$ and $L$ about it. Same answer.`}
          </p>
          <p>
            <strong>Method 3.</strong>{' '}
            {`Hint: take origin at the contact point. There, $f$ and $N$ have zero lever arm. Both vanish from the torque equation.`}
          </p>
          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>Why does the contact point as origin make f and N disappear?</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                Both friction and the normal force act at the contact point itself. So their
                position vectors from that origin are zero. The cross product of zero with any force
                is zero, so neither contributes to the torque about that point.
              </p>
            </details>
          </div>
          <h3>Drum by Energy Method</h3>
          <p>Same drum. Translational work-energy:</p>
          <div className="lrn-eq">
            <span>{`$$(W\\sin\\theta - f)\\ell = \\tfrac{1}{2} M V^2$$`}</span>
          </div>
          <p>Rotational work-energy:</p>
          <div className="lrn-eq">
            <span>{`$$f b\\theta = \\tfrac{1}{2} I_0\\omega^2$$`}</span>
          </div>
          <p>{`Add the two and use $\\omega = \\frac{V}{b}$ and $b\\theta = \\ell$:`}</p>
          <div className="lrn-eq">
            <span>{`$$W \\ell\\sin\\theta = \\tfrac{1}{2} M V^2 + \\tfrac{1}{2}\\cdot\\tfrac{1}{2} M V^2 = \\tfrac{3}{4} M V^2$$`}</span>
          </div>
          <p>{`With $h = \\ell\\sin\\theta$:`}</p>
          <div className="lrn-eq">
            <span>{`$$V = \\sqrt{\\tfrac{4 g h}{3}}$$`}</span>
          </div>
          <p>
            A side note. Static friction here is non-dissipative. It transfers translational kinetic
            energy into rotational kinetic energy. If the drum slipped, the friction would dissipate
            energy as heat.
          </p>
          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Force Method</span>
              <p>
                You write Newton's second law for the center of mass and the rotational law about
                the center. The rolling constraint links them. You solve for the linear and angular
                accelerations.
              </p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Energy Method</span>
              <p>
                You set the lost gravitational potential equal to the gained kinetic energy. The
                kinetic energy splits into translational and rotational pieces. You get the speed at
                the bottom directly.
              </p>
            </div>
          </div>
          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Rolling Without Slipping</span>
              <p>
                The contact point has zero instantaneous velocity. Static friction adjusts to
                whatever value is needed to keep the constraint. No energy is dissipated.
              </p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Slipping</span>
              <p>
                The contact point moves relative to the surface. Kinetic friction acts at a fixed
                magnitude opposing the slip. Energy is lost as heat at the contact.
              </p>
            </div>
          </div>
          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>
              Why is static friction able to do positive rotational work and negative translational
              work at the same time?
            </p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                The translational work uses the displacement of the center of mass, while the
                rotational work uses the angular displacement times the lever arm. Friction points
                up the plane, so it does negative work on the center moving down. About the center,
                friction's torque spins the drum in the rolling direction, doing positive rotational
                work.
              </p>
            </details>
          </div>
          <h3>The Falling Stick</h3>
          <p>{`A uniform stick of length $\\ell$ and mass $M$ stands upright on a frictionless table. It tips and falls. With no horizontal forces, the center of mass falls straight down.`}</p>
          <p>{`Let $y$ be the height drop and $\\theta$ the angle from vertical. The constraint is`}</p>
          <div className="lrn-eq">
            <span>{`$$y = \\tfrac{\\ell}{2}(1 - \\cos\\theta)$$`}</span>
          </div>
          <p>{`So $\\dot{y} = \\tfrac{\\ell}{2}\\sin\\theta\\,\\dot\\theta$.`}</p>
          <p>Energy conservation:</p>
          <div className="lrn-eq">
            <span>{`$$M g y = \\tfrac{1}{2} M\\dot{y}^2 + \\tfrac{1}{2} I_0\\dot\\theta^2$$`}</span>
          </div>
          <p>{`With $I_0 = \\tfrac{1}{12} M\\ell^2$ and the constraint, solve for $\\dot{y}^2$:`}</p>
          <div className="lrn-eq">
            <span>{`$$\\dot{y}^2 = \\frac{6 g y \\sin^2\\theta}{3\\sin^2\\theta + 1}$$`}</span>
          </div>
          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>Why does the center of mass fall straight down even though the stick rotates?</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                The table is frictionless, so the only forces on the stick are gravity and the
                vertical normal force. Both act vertically, so the net horizontal force is zero.
                With zero horizontal force, the center of mass has no horizontal acceleration and
                stays on a vertical line.
              </p>
            </details>
          </div>
        </>,

        <>
          <h2>The Bohr Atom</h2>
          <p>
            The module ends with a famous application. Niels Bohr explained the hydrogen spectrum
            using angular momentum quantization.
          </p>
          <p>
            <strong>When to use this:</strong> reach for the Bohr model when you need the energy
            levels and emission lines of hydrogen at first-pass accuracy.
          </p>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              A classical electron orbits a proton. Classical theory says it must radiate. What goes
              wrong?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                An accelerating charge radiates electromagnetic waves and loses energy. So a
                classical orbiting electron should spiral into the proton in a tiny fraction of a
                second. Atoms would not be stable, which contradicts everything we see.
              </p>
            </details>
          </div>
          <BohrAtom />
          <h3>The Spectrum Puzzle</h3>
          <p>
            In the 1800s, spectroscopists found that hot gases emit only at sharp wavelengths.
            Hydrogen had the simplest spectrum. Balmer fitted the visible lines empirically:
          </p>
          <div className="lrn-eq">
            <span>{`$$\\frac{1}{\\lambda} = R_y\\left(\\frac{1}{m^2} - \\frac{1}{n^2}\\right)$$`}</span>
          </div>
          <p>{`Here $R_y \\approx 109{,}700\\,\\text{cm}^{-1}$ is the Rydberg constant. The integers $m < n$. No classical theory could derive this.`}</p>
          <h3>Bohr's Postulates</h3>
          <p>Bohr made four bold guesses:</p>
          <ol className="lrn-list">
            <li>The atom has stationary states. In them the electron does not radiate.</li>
            <li>{`A transition between states $a$ and $b$ emits or absorbs a photon. The frequency obeys $h\\nu = E_a - E_b$.`}</li>
            <li>Inside a stationary state, the electron obeys classical mechanics.</li>
            <li>{`Angular momentum is quantized: $L = \\frac{nh}{2\\pi}$.`}</li>
          </ol>
          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Classical Orbiting Electron</span>
              <p>
                The electron can orbit at any radius and any energy. It accelerates in its circular
                path, so it must emit radiation continuously. It would spiral into the nucleus in
                nanoseconds.
              </p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Bohr Quantized Orbit</span>
              <p>
                Only discrete radii are allowed, set by integer angular momentum. Inside an allowed
                orbit the electron does not radiate at all. Light comes only from jumps between
                orbits.
              </p>
            </div>
          </div>
          <h3>The Hydrogen Derivation</h3>
          <div className="lrn-faded">
            <div className="lrn-faded-phase">
              <span className="lrn-faded-label">COMPLETE EXAMPLE</span>
              <p>
                Bohr atom derivation chain. Use the radial equation, the energy expression, and the
                quantization rule.
              </p>
              <ol className="lrn-list">
                <li>{`Set the Coulomb force equal to the centripetal force: $\\frac{m_e v^2}{r} = \\frac{e^2}{r^2}$.`}</li>
                <li>{`Write the total energy: $E = \\tfrac{1}{2} m_e v^2 - \\frac{e^2}{r}$.`}</li>
                <li>{`Use step 1 to replace the kinetic energy and get $E = -\\frac{\\tfrac{1}{2} e^2}{r}$.`}</li>
                <li>{`Apply quantization $m_e v r = \\frac{nh}{2\\pi}$ to solve for $v$.`}</li>
                <li>{`Substitute $v$ into the radial equation and solve for $r_n$.`}</li>
                <li>{`Plug $r_n$ back into the energy formula to get $E_n$.`}</li>
              </ol>
            </div>
            <div className="lrn-faded-phase">
              <span className="lrn-faded-label">YOUR TURN: PARTIAL</span>
              <p>
                Apply the same method to a hydrogen-like ion of nuclear charge Ze. The first step is
                filled in.
              </p>
              <ol className="lrn-list">
                <li>{`Replace the Coulomb force with $\\frac{Ze^2}{r^2}$ in the centripetal equation.`}</li>
                <li>Repeat the energy expression with the new potential.</li>
                <li>Apply the same angular momentum quantization rule.</li>
                <li>Solve for the new radii and energies in terms of Z.</li>
              </ol>
            </div>
            <div className="lrn-faded-phase">
              <span className="lrn-faded-label">INDEPENDENT PRACTICE</span>
              <p>Derive the Rydberg constant in cgs units from your final formula.</p>
              <ol className="lrn-list">
                <li>{`Write the photon frequency for a transition between integers $m$ and $n$.`}</li>
                <li>{`Convert frequency to inverse wavelength using $\\nu = \\frac{c}{\\lambda}$.`}</li>
                <li>Read off the prefactor and identify it as the Rydberg constant.</li>
              </ol>
            </div>
          </div>
          <p>Step 1. The Coulomb force gives the centripetal equation:</p>
          <div className="lrn-eq">
            <span>{`$$\\frac{m_e v^2}{r} = \\frac{e^2}{r^2}$$`}</span>
          </div>
          <p>Step 2. The total energy is kinetic plus potential:</p>
          <div className="lrn-eq">
            <span>{`$$E = \\tfrac{1}{2} m_e v^2 - \\frac{e^2}{r}$$`}</span>
          </div>
          <p>{`Step 3. From step 1, $\\tfrac{1}{2} m_e v^2 = \\frac{\\tfrac{1}{2} e^2}{r}$. So`}</p>
          <div className="lrn-eq">
            <span>{`$$E = -\\tfrac{1}{2}\\frac{e^2}{r}$$`}</span>
          </div>
          <p>{`Step 4. Apply the quantization rule $L = m_e v r = \\frac{nh}{2\\pi}$:`}</p>
          <div className="lrn-eq">
            <span>{`$$v = \\frac{n h}{2\\pi m_e r}$$`}</span>
          </div>
          <p>Step 5. Substitute into the radial equation:</p>
          <div className="lrn-eq">
            <span>{`$$\\frac{m_e}{r}\\left(\\frac{n h}{2\\pi m_e r}\\right)^2 = \\frac{e^2}{r^2}$$`}</span>
          </div>
          <p>{`Solve for $r$:`}</p>
          <div className="lrn-eq">
            <span>{`$$r_n = \\frac{n^2 h^2}{4\\pi^2 m_e e^2}$$`}</span>
          </div>
          <p>Step 6. Plug back into the energy expression:</p>
          <div className="lrn-eq">
            <span>{`$$E_n = -\\frac{2\\pi^2 m_e e^4}{n^2 h^2}$$`}</span>
          </div>
          <p>{`Step 7. Apply Bohr's frequency rule for a transition from $n$ to $m$:`}</p>
          <div className="lrn-eq">
            <span>{`$$\\nu = \\frac{2\\pi^2 m_e e^4}{h^3}\\left(\\frac{1}{m^2} - \\frac{1}{n^2}\\right)$$`}</span>
          </div>
          <p>{`Use $\\nu = \\frac{c}{\\lambda}$ to get`}</p>
          <div className="lrn-eq">
            <span>{`$$\\frac{1}{\\lambda} = \\frac{2\\pi^2 m_e e^4}{c h^3}\\left(\\frac{1}{m^2} - \\frac{1}{n^2}\\right)$$`}</span>
          </div>
          <p>
            This is Balmer's formula. The Rydberg constant comes out of fundamental constants. The
            match with experiment was a triumph.
          </p>
          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>{`Why does fixing the angular momentum to integer multiples of $\\frac{h}{2\\pi}$ pick out discrete energies?`}</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                The centripetal equation ties the speed to the radius. The quantization rule ties
                the product of speed and radius to an integer. Together they force only specific
                radii, and each radius gives its own fixed energy through the energy formula.
              </p>
            </details>
          </div>
        </>,

        <>
          <h2>Why Rigid-Body Motion Splits into Translation and Rotation</h2>
          <p>This section proves Chasles' theorem for the simplest rigid body: a two-mass rod.</p>
          <p>
            <strong>When to use this:</strong> reach for this proof when you want to know why the
            center-of-mass plus rotation split is exact, not approximate.
          </p>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>For a rigid body, does the rigidity condition allow any internal sliding?</p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                No. Rigidity means every pair of particles keeps a fixed distance. Any sliding
                between two particles would change their separation. So the only allowed internal
                motion is rotation, which preserves all distances.
              </p>
            </details>
          </div>
          <p>
            A rigid body must keep all distances between particles fixed. For two particles 1 and 2,
            this means
          </p>
          <div className="lrn-eq">
            <span>{`$$|\\mathbf{r}_2 - \\mathbf{r}_1|^2 = \\text{const}$$`}</span>
          </div>
          <p>Differentiate:</p>
          <div className="lrn-eq">
            <span>{`$$(\\mathbf{r}_2 - \\mathbf{r}_1) \\cdot (d\\mathbf{r}_2 - d\\mathbf{r}_1) = 0$$`}</span>
          </div>
          <p>
            So the relative displacement of the two ends is perpendicular to the rod direction. No
            stretching.
          </p>
          <p>Define the residual displacement of each end as</p>
          <div className="lrn-eq">
            <span>{`$$d\\mathbf{r}'_j = d\\mathbf{r}_j - d\\mathbf{R}$$`}</span>
          </div>
          <p>{`Here $d\\mathbf{R}$ is the displacement of the center of mass. Subtract the same vector from both end displacements. The relative motion does not change. The residuals therefore satisfy the same perpendicularity condition. They can only correspond to a rigid rotation about the center of mass.`}</p>
          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>{`A rotation by angle $d\\theta$ about the center of mass moves each end through a tangential arc. Both ends share the same $d\\theta$. So the residuals are exactly a common rotation.`}</p>
          </div>
          <p>{`So any rigid displacement breaks into a translation $d\\mathbf{R}$ plus a rotation $d\\theta$ about the center of mass. The split is unique.`}</p>
          <ChaslesRod />
        </>,

        <>
          <h2>The Pendulum Beyond Small Angles</h2>
          <p>
            The small angle pendulum is too simple for high precision. We now keep the full sine
            term.
          </p>
          <p>
            <strong>When to use this:</strong> reach for this when you need the period of a pendulum
            at amplitudes that the small angle limit cannot handle.
          </p>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              As you increase a pendulum's amplitude, does its period grow, shrink, or stay the
              same?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                The period grows with amplitude. The small angle formula gives a period that ignores
                higher order terms. When you keep the full sine, the restoring torque grows slower
                than the angle, so the bob takes longer to complete each swing.
              </p>
            </details>
          </div>
          <p>{`Energy conservation for the simple pendulum at angle $\\phi$ from vertical, with bob speed $v = \\ell\\dot\\phi$:`}</p>
          <div className="lrn-eq">
            <span>{`$$\\tfrac{1}{2} m\\ell^2\\dot\\phi^2 + m g\\ell(1 - \\cos\\phi) = m g\\ell(1 - \\cos\\phi_0)$$`}</span>
          </div>
          <p>{`Solve for $\\dot\\phi$:`}</p>
          <div className="lrn-eq">
            <span>{`$$\\dot\\phi = \\sqrt{\\frac{2g}{\\ell}}\\sqrt{\\cos\\phi - \\cos\\phi_0}$$`}</span>
          </div>
          <div className="lrn-faded">
            <div className="lrn-faded-phase">
              <span className="lrn-faded-label">COMPLETE EXAMPLE</span>
              <p>
                Period as an elliptic integral. Convert the energy equation into a definite integral
                over a quarter period.
              </p>
              <ol className="lrn-list">
                <li>{`Separate variables: $dt = \\frac{d\\phi}{\\dot\\phi}$ using the energy formula above.`}</li>
                <li>{`Integrate from $\\phi = 0$ to $\\phi = \\phi_0$ for a quarter period, then multiply by 4.`}</li>
                <li>{`Substitute $\\sin\\frac{\\phi}{2} = \\sin\\frac{\\phi_0}{2}\\sin\\psi$ to fold $\\phi_0$ into the integrand.`}</li>
                <li>{`Recognize the result as a complete elliptic integral of the first kind.`}</li>
              </ol>
            </div>
            <div className="lrn-faded-phase">
              <span className="lrn-faded-label">YOUR TURN: PARTIAL</span>
              <p>Expand the elliptic integrand for small amplitude. The first step is filled in.</p>
              <ol className="lrn-list">
                <li>{`Use $(1 - x)^{-\\tfrac{1}{2}} \\approx 1 + \\tfrac{1}{2} x + \\dots$ on the integrand.`}</li>
                <li>{`Identify $x = \\sin^2\\frac{\\phi_0}{2}\\sin^2\\psi$ and keep through second order.`}</li>
                <li>{`Integrate the leading correction term over $\\psi$ from $0$ to $\\frac{\\pi}{2}$.`}</li>
              </ol>
            </div>
            <div className="lrn-faded-phase">
              <span className="lrn-faded-label">INDEPENDENT PRACTICE</span>
              <p>Estimate the period correction for a 30 degree amplitude pendulum.</p>
              <ol className="lrn-list">
                <li>{`Convert 30 degrees to radians for $\\phi_0$.`}</li>
                <li>{`Compute the leading correction $\\tfrac{1}{16}\\phi_0^2$.`}</li>
                <li>
                  Compare the corrected period to the small angle result and report the percent
                  shift.
                </li>
              </ol>
            </div>
          </div>
          <p>The period becomes</p>
          <div className="lrn-eq">
            <span>{`$$T = 4\\sqrt{\\frac{\\ell}{g}}\\int_0^{\\frac{\\pi}{2}}\\frac{d\\psi}{\\sqrt{1 - \\sin^2\\frac{\\phi_0}{2}\\sin^2\\psi}}$$`}</span>
          </div>
          <p>{`Expand the integrand in a series for small $\\sin\\frac{\\phi_0}{2}$ and integrate term by term:`}</p>
          <div className="lrn-eq">
            <span>{`$$T = 2\\pi\\sqrt{\\frac{\\ell}{g}}\\left(1 + \\tfrac{1}{4}\\sin^2\\frac{\\phi_0}{2} + \\dots\\right)$$`}</span>
          </div>
          <p>{`For small $\\phi_0$, $\\sin\\frac{\\phi_0}{2} \\approx \\frac{\\phi_0}{2}$. So`}</p>
          <div className="lrn-eq">
            <span>{`$$T \\approx 2\\pi\\sqrt{\\frac{\\ell}{g}}\\left(1 + \\tfrac{1}{16}\\phi_0^2 + \\dots\\right)$$`}</span>
          </div>
          <p>This is the higher-order correction used in the grandfather's clock example.</p>
          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>Why does the period grow with amplitude rather than shrink?</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                The true restoring torque uses sine of the angle, which falls below the angle itself
                for larger amplitudes. So the effective spring weakens as the swing grows. A weaker
                restoring force means a slower oscillation and a longer period.
              </p>
            </details>
          </div>
        </>
      ]
    },
    practice: [
      {
        q: `What is the angular momentum of a particle about an origin?`,
        a: `It is the vector cross product $\mathbf{L} = \mathbf{r} \times \mathbf{p}$, where $\mathbf{r}$ goes from the origin to the particle and $\mathbf{p} = m\mathbf{v}$. The vector points perpendicular to the plane of $\mathbf{r}$ and $\mathbf{p}$, with the sign set by the right-hand rule.`
      },
      {
        q: `A block of mass 2 kg slides at 3 m/s along the x-axis. Find the angular momentum about a point 4 m off the line of motion in the +y direction.`,
        a: `Use $L_z = -r_\perp p$ since the position points in $+\mathbf{y}$ but the velocity points in $+\mathbf{x}$, giving $\mathbf{L} = (4\hat{\mathbf{j}})\times (2\cdot 3\hat{\mathbf{i}}) = -24\hat{\mathbf{k}}$ kg m^2/s. The size is $r_\perp p = 4 \cdot 6 = 24$ kg m^2/s, and the cross product direction is $-\hat{\mathbf{k}}$.`
      },
      {
        q: `Why does angular momentum depend on the choice of origin while the rigid body's actual motion does not?`,
        a: `The vector $\mathbf{r}$ in $\mathbf{L} = \mathbf{r} \times \mathbf{p}$ is measured from the origin, so a shift of origin changes $\mathbf{r}$ and thus $\mathbf{L}$. The motion itself is unchanged because particle velocities are origin-free, but our bookkeeping of rotational state depends on where we measure positions from.`
      },
      {
        q: `Predict the angular momentum of a freely sliding block about a point on its line of motion.`,
        a: `It must be zero because $\mathbf{r}$ and $\mathbf{p}$ become parallel along the line of motion, so the cross product vanishes. This shows that angular momentum can be zero even when linear momentum is nonzero, depending on the chosen origin.`
      },
      {
        q: `Define torque on a particle and explain why it depends on origin.`,
        a: `Torque is $\boldsymbol{\tau} = \mathbf{r} \times \mathbf{F}$, the cross product of the position vector from the origin to the point of application with the force. Shifting the origin changes $\mathbf{r}$ and so changes $\boldsymbol{\tau}$, even though the force itself is unchanged.`
      },
      {
        q: `Derive $\boldsymbol{\tau} = \frac{d\mathbf{L}}{dt}$ from $\mathbf{L} = \mathbf{r}\times\mathbf{p}$.`,
        a: `Differentiate to get $\frac{d\mathbf{L}}{dt} = \mathbf{v}\times\mathbf{p} + \mathbf{r}\times \frac{d\mathbf{p}}{dt}$. The first term is $\mathbf{v} \times m\mathbf{v} = 0$ because the cross product of parallel vectors vanishes. The second term is $\mathbf{r}\times\mathbf{F} = \boldsymbol{\tau}$ by Newton's second law.`
      },
      {
        q: `Why is the law of equal areas equivalent to angular momentum conservation under a central force?`,
        a: `For a central force the torque about the force center is zero because $\mathbf{F}$ is along $\mathbf{r}$, so $\mathbf{L}$ is constant. The area swept per unit time equals $\frac{L_z}{2m}$, so constant $L_z$ means constant areal speed. This is Kepler's second law for any central force.`
      },
      {
        q: `A planet of mass $M$ and radius $R$ is approached by a package fired at speed $v_0$ from far away. What is the effective capture cross section?`,
        a: `$A_{\text{eff}} = A_0(1 - \frac{U(R)}{E})$ where $A_0 = \pi R^2$ and $U(R) = -\frac{GMm}{R}$. This comes from conserving energy and angular momentum between infinity and the grazing radius, and equals $A_0(1 + \frac{2GMm}{R\,m v_0^2})$.`
      },
      {
        q: `Why does the capture cross section diverge as the launch energy approaches zero?`,
        a: `As $E \to 0$, the factor $-\frac{U(R)}{E}$ blows up because the potential well dominates. Physically, a slow projectile spends so long near the planet that gravity can pull in any trajectory. From rest at infinity, a particle is bound to fall in.`
      },
      {
        q: `Predict whether the friction force on a slowing block produces a torque about an origin offset from the line of motion.`,
        a: `Yes, because the friction force has a nonzero perpendicular distance to the offset origin, so $\boldsymbol{\tau} = \mathbf{r}\times\mathbf{F}$ is not zero. The torque points in $-\hat{\mathbf{k}}$ when friction is in $-\hat{\mathbf{x}}$ and the origin is in $+\hat{\mathbf{y}}$.`
      },
      {
        q: `For a particle in fixed-axis rotation at perpendicular distance $\rho$ from the axis, what is its speed and direction?`,
        a: `The speed is $v = \omega\rho$, set by the shared angular speed and the radius of its circle. The direction is tangent to the circle, perpendicular to both the axis and the radial vector $\boldsymbol{\rho}$.`
      },
      {
        q: `Derive $L_z = I\omega$ for a rigid body rotating about a fixed axis.`,
        a: `Each particle contributes $L_z(j) = m_j v_j \rho_j = m_j\rho_j^2\omega$, since $v_j$ is tangent at distance $\rho_j$. Sum over all particles to get $L_z = \omega\sum m_j\rho_j^2 = I\omega$, where $I = \sum m_j\rho_j^2$ is the moment of inertia about the axis.`
      },
      {
        q: `Compute the moment of inertia of a thin uniform stick of mass $M$ and length $L$ about its midpoint, perpendicular to the stick.`,
        a: `With linear density $\frac{M}{L}$, $I = \int_{-\frac{L}{2}}^{\frac{L}{2}} x^2 \frac{M}{L}\,dx = \frac{M}{L}\cdot[\frac{x^3}{3}]_{-\frac{L}{2}}^{\frac{L}{2}} = \tfrac{1}{12} M L^2$. The bounds are symmetric so the integral is twice the integral from $0$ to $\frac{L}{2}$.`
      },
      {
        q: `Use the parallel-axis theorem to compute the moment of inertia of a stick about one end from the moment about the midpoint.`,
        a: `$I_{\text{end}} = I_0 + M\ell^2 = \tfrac{1}{12} M L^2 + M(\frac{L}{2})^2 = (\tfrac{1}{12} + \tfrac{1}{4}) M L^2 = \tfrac{1}{3} M L^2$. This matches the direct integral and shows the offset of $\frac{L}{2}$ adds $M(\frac{L}{2})^2$.`
      },
      {
        q: `Why does the cross term in the parallel axis theorem vanish?`,
        a: `Splitting $\boldsymbol{\rho}_j = \boldsymbol{\rho}'_j + \mathbf{R}_\perp$ and squaring gives a cross term $2\mathbf{R}_\perp\cdot\sum m_j\boldsymbol{\rho}'_j$. The sum is zero because $\\boldsymbol{\\rho}'_j$ is measured from the center of mass. So only the diagonal pieces survive, leaving $I = I_0 + M\\ell^2$.`
      },
      {
        q: `A pulley of mass $M_p$ and radius $R$ is treated as a uniform disk in an Atwood machine with masses $M_1 > M_2$. What is the linear acceleration?`,
        a: `$a = \frac{(M_1 - M_2)g}{M_1 + M_2 + \frac{M_p}{2}}$. The pulley's moment of inertia $I = \\frac{M_p R^2}{2}$ combined with $\\alpha = \\frac{a}{R}$ adds an effective mass of $\\frac{M_p}{2}$ to the denominator.`
      },
      {
        q: `Predict whether two pendulums of identical length but different bob mass swing with the same period.`,
        a: `Yes, they have the same period $T = 2\pi\sqrt{\frac{\ell}{g}}$. The mass cancels because both gravitational force and inertial mass scale with $m$, leaving the period independent of the bob mass.`
      },
      {
        q: `Derive the period of a simple pendulum of length $\ell$ in the small angle limit.`,
        a: `The torque equation about the pivot gives $m\ell^2\ddot\phi = -mg\ell\sin\phi$, which becomes $\ddot\phi + \frac{g}{\ell}\phi = 0$ for small angles. This is simple harmonic motion with angular frequency $\sqrt{\frac{g}{\ell}}$, so $T = 2\pi\sqrt{\frac{\ell}{g}}$.`
      },
      {
        q: `For a physical pendulum with center of mass distance $\ell$ from pivot and radius of gyration $k$ about the center of mass, what is the small-amplitude angular frequency?`,
        a: `$\omega = \sqrt{\frac{g\ell}{k^2 + \ell^2}}$. The parallel axis theorem gives $I_p = M(k^2 + \ell^2)$, and the equation of motion $I_p\ddot\phi = -Mg\ell\sin\phi$ yields the angular frequency in the small angle limit.`
      },
      {
        q: `Why does Kater's pendulum make pendulum-based gravity measurements highly accurate?`,
        a: `When two opposite-side knife edges give the same period, $T = 2\pi\sqrt{\frac{\ell_A + \ell_B}{g}}$, depending only on the distance between knife edges. This eliminates the need to know the center-of-mass position or the radius of gyration, both of which are hard to measure precisely.`
      },
      {
        q: `A grandfather pendulum swings 4 cm at $\ell = 1$ m, $T_0 = 2$ s. What is the leading correction to the period?`,
        a: `The amplitude is $\phi_0 = 0.04$ rad, so the correction $T_0\cdot\frac{\phi_0^2}{16} = 2 \cdot 1.6\times\frac{10^{-3}}{16} = 2\times\frac{10^{-4}}{16} \approx 10^{-5}$ s. A 10 percent change in amplitude shifts $T$ by about $2 \times 10^{-5}$ s, or about 2 s per day.`
      },
      {
        q: `Predict where to hit a hinged door so the hinge feels no impulsive reaction.`,
        a: `Hit at the center of percussion, $\ell = \frac{I}{M\ell'}$ from the hinge, where $\\ell'$ is the hinge-to-CM distance. For a uniform door of width $w$, this gives $\\ell = \\tfrac{2}{3}w$. This same point is the sweet spot of a baseball bat.`
      },
      {
        q: `Why does the spin angular momentum stay the same when you shift the origin?`,
        a: `The spin term $\sum \mathbf{r}'_j\times m_j\dot{\mathbf{r}}'_j$ is computed in coordinates relative to the center of mass, not the origin. So shifting the origin changes only the orbital piece $\\mathbf{R}\\times M\\mathbf{V}$, not the spin.`
      },
      {
        q: `A uniform wheel of mass $M$, radius $b$ rolls without slipping at angular speed $\omega$. What is the total $L_z$ about a point on the ground?`,
        a: `$L_z = -\tfrac{1}{2} M b^2\omega - M b^2\omega = -\tfrac{3}{2} M b^2\omega$. The first term is the spin $I_0\omega$ and the second is the orbital $(\mathbf{R}\times M\mathbf{V})_z = -M b^2\omega$ from the rolling constraint $V = b\omega$.`
      },
      {
        q: `Why is $\tau_0 = I_0\alpha$ valid even when the center of mass is accelerating?`,
        a: `The derivation uses Newton's law in an inertial frame, where the orbital and translation pieces cancel exactly because $\\mathbf{F} = M\\mathbf{a}$. So the center-of-mass torque law survives even when the center of mass is not in equilibrium.`
      },
      {
        q: `Predict whether a sphere or a cylinder of the same mass and radius rolls down an incline faster.`,
        a: `The sphere reaches the bottom first because its moment of inertia $\\tfrac{2}{5}MR^2$ is smaller than the cylinder's $\\tfrac{1}{2}MR^2$. Less inertia means more of the gravitational PE goes into translational KE, giving a higher final speed.`
      },
      {
        q: `A drum of mass $M$ rolls without slipping down a plane of angle $\theta$. Find the linear acceleration.`,
        a: `Newton on the center of mass gives $Mg\sin\theta - f = Ma$, and the torque equation $b f = I_0\alpha$ with $\alpha = \frac{a}{b}$ and $I_0 = \frac{Mb^2}{2}$ gives $f = \frac{Ma}{2}$. Solving, $a = \tfrac{2}{3}g\sin\theta$.`
      },
      {
        q: `Use energy conservation to find the speed of a uniform drum at the bottom of a plane of vertical drop $h$.`,
        a: `Total kinetic energy at the bottom equals $\tfrac{1}{2}MV^2 + \tfrac{1}{2}I_0\omega^2 = \tfrac{1}{2}MV^2 + \tfrac{1}{4}MV^2 = \tfrac{3}{4}MV^2$, using $\omega = \frac{V}{b}$ and $I_0 = \frac{Mb^2}{2}$. Setting this equal to $Mgh$ gives $V = \sqrt{\frac{4gh}{3}}$.`
      },
      {
        q: `Why does static friction between a rolling drum and a plane do no net work?`,
        a: `The contact point on the drum is instantaneously at rest, so the friction force acts on a point that moves zero distance. The friction transfers energy between translation and rotation but does not dissipate any.`
      },
      {
        q: `A stick of mass $M$ and length $\ell$ stands upright on frictionless ice and falls. Why does its center of mass fall straight down?`,
        a: `The only external forces are gravity and the normal force, both vertical. With no horizontal force, the horizontal momentum stays zero forever, so the center of mass cannot move horizontally and falls along a vertical line.`
      },
      {
        q: `Predict what happens to the period of a simple pendulum when the amplitude grows from very small to 30 degrees.`,
        a: `The period grows because the leading correction is $T = T_0(1 + \frac{\phi_0^2}{16} + \ldots)$. At 30 degrees ($\phi_0 \approx 0.524$ rad), the correction is about 1.7 percent, so the period is slightly longer than the small-angle prediction.`
      },
      {
        q: `State Bohr's four postulates for the hydrogen atom.`,
        a: `1) The atom has stationary states with no radiation. 2) Transitions emit photons with $h\nu = E_a - E_b$. 3) Inside a state, classical mechanics applies. 4) Angular momentum is quantized as $L = \frac{nh}{2\pi}$.`
      },
      {
        q: `Derive the Bohr radius $r_n$ from the radial equation and quantization.`,
        a: `From $\frac{m_e v^2}{r} = \frac{e^2}{r^2}$ and $L = m_e v r = \frac{nh}{2\pi}$, eliminate $v$ to get $r_n = \frac{n^2 h^2}{4\pi^2 m_e e^2}$. The smallest radius (n=1) is the Bohr radius for the hydrogen ground state.`
      },
      {
        q: `Why does the Bohr quantization condition reproduce Balmer's empirical hydrogen spectrum?`,
        a: `Quantizing $L$ gives discrete radii $r_n$ and energies $E_n = -\frac{2\pi^2 m_e e^4}{n^2 h^2}$. The transition frequency $\nu = \frac{E_a - E_b}{h}$ then matches Balmer's formula $\\frac{1}{\\lambda} = R_y(\\frac{1}{m^2} - \\frac{1}{n^2})$ with $R_y$ built from fundamental constants.`
      },
      {
        q: `Predict what classical electromagnetism says about a circulating electron in a hydrogen atom.`,
        a: `A classical orbiting electron is accelerating, so it must radiate continuously, lose energy, and spiral into the nucleus in a fraction of a second. Classical theory predicts atomic instability, contradicting the observed stability of hydrogen.`
      },
      {
        q: `How does Kepler's second law follow from a central force?`,
        a: `A central force $\mathbf{F} = f(r)\hat{\mathbf{r}}$ has zero torque about the force center, so $\mathbf{L}$ is conserved. Since $\frac{dA}{dt} = \frac{L_z}{2m}$, the areal speed is constant, which is Kepler's second law.`
      },
      {
        q: `A bug walks around the rim of a freely pivoted ring on a frictionless table, ending halfway around. What conservation law applies?`,
        a: `Total angular momentum about the pivot is conserved because no external torques act on the bug-plus-ring system. As the bug walks one way, the ring spins the opposite way to keep $L_z$ at its initial value.`
      },
      {
        q: `Predict whether a heavy and a light marble launched up the same incline at the same speed roll the same distance up.`,
        a: `Yes, the distance does not depend on mass. Both energy terms $\tfrac{1}{2}MV^2$ and $\tfrac{1}{2}I_0\omega^2$ scale with $M$, and the gravity work $Mgh$ also scales with $M$, so $M$ cancels in the energy balance.`
      },
      {
        q: `Why does the choice of origin sometimes simplify a rigid body problem dramatically?`,
        a: `A clever origin can zero out unknown forces in $\boldsymbol{\tau} = \mathbf{r}\times\mathbf{F}$. For example, taking the origin at a contact point makes friction and normal force have zero lever arm, so they drop out of the torque equation.`
      },
      {
        q: `A disk of mass $M$ on frictionless ice is pulled by a tape with force $F$ tangent to its rim. Find the angular and linear acceleration of the disk.`,
        a: `The center of mass obeys $a = \frac{F}{M}$ since $F$ is the only horizontal force. The torque about the center is $bF$, so $\alpha = \frac{bF}{I_0} = \frac{bF}{\tfrac{1}{2}Mb^2} = \frac{2F}{Mb}$.`
      },
      {
        q: `Two coaxial drums transfer sand: inner drum radius $a$, outer radius $b$, sand mass equals the drums' masses. With $b = 2a$, what is the final outer angular speed?`,
        a: `Conserve angular momentum as sand transfers; the moment of inertia jumps from $\tfrac{1}{2}M_a a^2$ to roughly $4\tfrac{1}{2}M_a a^2 \cdot 2$ accounting for the factor $\frac{b^2}{a^2} = 4$ and added mass. Detailed bookkeeping gives $\omega_b = \frac{\omega_a(0)}{8}$.`
      },
      {
        q: `A bowling ball is thrown at speed $v_0$ on a horizontal floor and slides without rolling at first. What is its final rolling speed?`,
        a: `Friction acts backward on the ball, slowing translation and creating angular acceleration about the center. Using impulse and angular impulse with $I_0 = \\tfrac{2}{5}MR^2$, the rolling-without-slipping condition gives final speed $\\tfrac{5}{7} v_0$.`
      },
      {
        q: `Predict the small oscillation frequency of a marble of radius $b$ rolling in a shallow dish of radius $R$ where $R \gg b$.`,
        a: `The marble acts like a physical pendulum with effective restoring torque from gravity along the dish curvature. The standard result is $\omega = \sqrt{\frac{5g}{7R}}$, smaller than a simple pendulum because rolling stores some energy as rotation.`
      },
      {
        q: `A stick AB of mass $m$ pivoted at B is released from horizontal. What is the vertical acceleration of the center of mass at release?`,
        a: `Apply $\tau_B = I_B\alpha$ with $I_B = \tfrac{1}{3}m\ell^2$ and torque $mg\frac{\ell}{2}$, giving $\alpha = \frac{3g}{2\ell}$. The center of mass at distance $\frac{\ell}{2}$ has vertical acceleration $\frac{\alpha\ell}{2} = \frac{3g}{4}$.`
      },
      {
        q: `Why does the rolling constraint $V = b\omega$ couple the translational and rotational equations?`,
        a: `Rolling without slipping forces the bottom of the wheel to be momentarily at rest, which mathematically requires $V = b\omega$ at every instant. So $a = b\alpha$ as well, linking the linear and angular accelerations and reducing two unknowns to one.`
      },
      {
        q: `State Chasles' theorem and explain why it is useful.`,
        a: `Any rigid-body displacement decomposes uniquely into a translation of the center of mass plus a rotation about the center of mass. This lets you handle any rigid motion using two simple laws: $\mathbf{F} = M\mathbf{a}$ for the center of mass and $\tau_0 = I_0\alpha$ for the rotation.`
      },
      {
        q: `Predict whether the orbital angular momentum of a freely moving body changes if you shift the origin along its line of motion.`,
        a: `It stays zero along the line of motion and shifts proportionally for offsets perpendicular to the motion. The orbital piece $\mathbf{R}\times M\mathbf{V}$ depends linearly on the perpendicular distance from origin to the line of motion.`
      },
      {
        q: `Why is the torque on a body in a uniform gravity field equal to $\mathbf{R}\times\mathbf{W}$?`,
        a: `Summing $\mathbf{r}_j\times m_j\mathbf{g}$ over all particles, the constant $\mathbf{g}$ pulls out of the sum, leaving $(\sum m_j\mathbf{r}_j)\times\mathbf{g} = M\mathbf{R}\times\mathbf{g} = \mathbf{R}\times\mathbf{W}$. So gravity acts as if all the weight were concentrated at the center of mass.`
      },
      {
        q: `Two equal disks of mass $M$, radius $R$ are joined by a massless rod and pivoted through one disk's center. Find the period of small oscillations.`,
        a: `Use the physical pendulum formula with $I_p$ found by parallel axis theorem on each disk. With center-of-mass distance $\ell$ from pivot, $T = 2\pi\sqrt{\frac{I_p}{2Mg\ell}}$ where $I_p$ collects both disks' contributions.`
      },
      {
        q: `Predict whether a yo-yo released from rest accelerates faster or slower than free fall.`,
        a: `It falls slower than free fall because some of the gravitational potential energy goes into rotation. Using $\tau_0 = I_0\alpha$ and the rolling-on-string constraint, the linear acceleration is $a = \frac{g}{1 + \frac{I_0}{Mb^2}}$, less than $g$.`
      },
      {
        q: `A massless rod of length $L$ has masses $m$ at each end and is hit by a third mass $m$ moving at $v_0$, after which the projectile reverses straight back. Find the rod's angular velocity.`,
        a: `Conserve linear momentum, energy, and angular momentum about the rod's center. Solving the system gives $\\omega = \\frac{4\\sqrt{5}}{7}\\frac{v_0}{L}$. The reversal of the projectile constrains the energy balance tightly.`
      },
      {
        q: `Why is it experimentally fine to assume internal torques cancel for a rigid body?`,
        a: `For ideal rigid bodies, internal forces along the line connecting two particles produce equal and opposite torques about any point that cancel pairwise. Newton's third law plus a strong-form assumption (forces along the line) gives this directly. The module treats it as an experimental fact and defers the formal proof.`
      },
      {
        q: `A boy of mass $m$ runs at $v_0$ onto the end of a stationary plank (mass $M$, length $\ell$) on ice and stands still on it. Where on the plank is the instantaneous rest point?`,
        a: `Conserve linear and angular momentum. The plank rotates about the moving center of mass, and the instantaneous rest point comes out at $\frac{2\ell}{3}$ from the boy's end. This is a classic result for the on-plank pivot.`
      },
      {
        q: `Define radius of gyration and give canonical values.`,
        a: `The radius of gyration is $k = \sqrt{\frac{I_0}{M}}$, so $I_0 = Mk^2$. Canonical values: $k = R$ for a hoop, $k = \frac{R}{\sqrt{2}}$ for a disk, $k = \sqrt{\tfrac{2}{5}}\,R$ for a sphere.`
      },
      {
        q: `A uniform disk-on-rod pendulum has the disk free to spin without friction at the rod's end. How does its period compare to the case where the disk is rigidly fixed?`,
        a: `The free-spin disk does not rotate as the rod swings, so it acts like a point mass at the rod's end. The fixed disk adds its $\\tfrac{1}{2}MR^2$ moment of inertia, so the fixed-disk case has a longer period because $I_p$ is larger.`
      },
      {
        q: `Predict what happens to a cylinder rolling down a plane if the friction coefficient is too small.`,
        a: `It will start slipping. Without enough friction, the static-friction force needed to maintain rolling exceeds the maximum, so the cylinder slips. The threshold angle is $\theta_{\max} = \arctan(3\mu)$.`
      },
      {
        q: `Why does the spin term not depend on origin while the orbital term does?`,
        a: `The spin is computed using positions $\mathbf{r}'_j$ measured from the center of mass, so it is intrinsic to the body. The orbital term $\\mathbf{R}\\times M\\mathbf{V}$ depends explicitly on $\\mathbf{R}$, the vector from the chosen origin to the center of mass.`
      },
      {
        q: `A plank of length $2L$ leans against a frictionless wall and is released. At what fraction of its initial height does the top lose contact with the wall?`,
        a: `The top loses contact at $\\tfrac{2}{3}$ of the initial height. As the plank falls, the wall normal force decreases, and at the $\\tfrac{2}{3}h_0$ point it reaches zero. After that, the plank slides freely on the floor.`
      },
      {
        q: `Predict the rotational equivalent of the equation $K = \\tfrac{1}{2}mv^2$ for combined motion.`,
        a: `For combined translation and rotation, $K = \tfrac{1}{2}MV^2 + \tfrac{1}{2}I_0\omega^2$. The first term is translation of the center of mass, and the second is rotation about the center of mass; they are independent contributions.`
      },
      {
        q: `Why is the moment of inertia about the rim of a disk equal to $\\tfrac{3}{2}MR^2$?`,
        a: `Use the parallel axis theorem: $I_{\text{rim}} = I_0 + MR^2 = \tfrac{1}{2}MR^2 + MR^2 = \tfrac{3}{2}MR^2$. The offset of the rim from the central axis is exactly $R$, so the parallel-axis correction adds $MR^2$.`
      },
      {
        q: `A tape unwinds from a fixed-shaft wheel under known force $F$. After length $L$, the angular speed is $\omega_0$. Find the moment of inertia.`,
        a: `Use the rotational work-energy theorem: $FL = \tfrac{1}{2}I_0\omega_0^2$, so $I_0 = \frac{2FL}{\omega_0^2}$. The work done by $F$ over distance $L$ becomes rotational kinetic energy because the shaft is fixed.`
      },
      {
        q: `A bead on a frictionless rod rotating at constant $\omega$ obeys $r(t) = r_0 e^{\omega t}$. Why is energy not conserved?`,
        a: `The rod must apply a tangential force on the bead to maintain constant $\omega$, doing positive work on it. The agent driving the rod supplies energy that increases the bead's kinetic energy, so the bead-only system is not isolated.`
      },
      {
        q: `Define center of percussion and predict its location for a uniform stick pivoted at one end.`,
        a: `The center of percussion is $\ell = \frac{I}{M\ell'}$ from the pivot, where $\ell'$ is the pivot-to-CM distance. For a uniform stick of length $L$, $I = \frac{ML^2}{3}$ and $\\ell' = \\frac{L}{2}$, giving $\\ell = \\tfrac{2}{3}L$ from the pivot.`
      }
    ],
    reference: {
      category: 'Quick Reference',
      title: 'Angular Momentum and Rotation',
      sections: [
        <>
          <h2>Angular Momentum of a Particle</h2>

          <div className="ref-formula">
            <span className="ref-formula-name">Angular momentum of a particle</span>
            <div className="ref-formula-eq">{`$$\mathbf{L} = \mathbf{r} \times \mathbf{p}$$`}</div>
            <p className="ref-formula-desc">
              When to use: you need the rotational state of a single particle about a chosen origin.
            </p>
          </div>

          <div className="ref-formula">
            <span className="ref-formula-name">Angle form of L_z</span>
            <div className="ref-formula-eq">{`$$L_z = r p \sin\phi$$`}</div>
            <p className="ref-formula-desc">{`When to use: you know $r$, $p$, and the angle $\phi$ between them in a plane.`}</p>
          </div>

          <div className="ref-formula">
            <span className="ref-formula-name">Perpendicular distance form</span>
            <div className="ref-formula-eq">{`$$L_z = r_\perp p$$`}</div>
            <p className="ref-formula-desc">
              When to use: you have a clean perpendicular distance from origin to the line of
              motion.
            </p>
          </div>

          <div className="ref-formula">
            <span className="ref-formula-name">Perpendicular momentum form</span>
            <div className="ref-formula-eq">{`$$L_z = r p_\perp$$`}</div>
            <p className="ref-formula-desc">{`When to use: it is easy to split $\mathbf{p}$ into pieces along and perpendicular to $\mathbf{r}$.`}</p>
          </div>

          <div className="ref-formula">
            <span className="ref-formula-name">Cartesian component form</span>
            <div className="ref-formula-eq">{`$$L_z = x p_y - y p_x$$`}</div>
            <p className="ref-formula-desc">
              When to use: you have components in a coordinate system and want a formulaic answer.
            </p>
          </div>

          <div className="ref-formula">
            <span className="ref-formula-name">Determinant form</span>
            <div className="ref-formula-eq">{`$$\\mathbf{L} = \\det\\!\\begin{pmatrix}\\hat{\\mathbf{i}} & \\hat{\\mathbf{j}} & \\hat{\\mathbf{k}}\\x & y & z\\p_x & p_y & p_z\\end{pmatrix}$$`}</div>
            <p className="ref-formula-desc">
              When to use: you need the full 3D angular momentum vector from coordinates.
            </p>
          </div>
        </>,

        <>
          <h2>Torque and the Rotation Law</h2>

          <div className="ref-formula">
            <span className="ref-formula-name">Torque on a particle</span>
            <div className="ref-formula-eq">{`$$\boldsymbol{\tau} = \mathbf{r} \times \mathbf{F}$$`}</div>
            <p className="ref-formula-desc">
              When to use: you need the rotational driver of a force about a chosen origin.
            </p>
          </div>

          <div className="ref-formula">
            <span className="ref-formula-name">Rotation law</span>
            <div className="ref-formula-eq">{`$$\boldsymbol{\tau} = \frac{d\mathbf{L}}{dt}$$`}</div>
            <p className="ref-formula-desc">
              When to use: you want to relate net torque to the rate of change of angular momentum,
              with the same origin used for both.
            </p>
          </div>

          <div className="ref-formula">
            <span className="ref-formula-name">Conservation of angular momentum</span>
            <div className="ref-formula-eq">{`$$\boldsymbol{\tau} = 0 \Rightarrow \mathbf{L} = \text{const}$$`}</div>
            <p className="ref-formula-desc">
              When to use: there is no net torque about your chosen origin (e.g., central forces).
            </p>
          </div>

          <div className="ref-formula">
            <span className="ref-formula-name">Areal speed under central forces</span>
            <div className="ref-formula-eq">{`$$\\frac{dA}{dt} = \\frac{L_z}{2m}$$`}</div>
            <p className="ref-formula-desc">
              When to use: you need Kepler's second law for any central force.
            </p>
          </div>

          <div className="ref-formula">
            <span className="ref-formula-name">Capture cross section</span>
            <div className="ref-formula-eq">{`$$A_{\text{eff}} = A_0(1 - \frac{U(R)}{E})$$`}</div>
            <p className="ref-formula-desc">
              When to use: a body is gravitationally aimed at a target with finite radius from far
              away.
            </p>
          </div>

          <div className="ref-formula">
            <span className="ref-formula-name">Gravitational torque</span>
            <div className="ref-formula-eq">{`$$\boldsymbol{\tau} = \mathbf{R} \times \mathbf{W}$$`}</div>
            <p className="ref-formula-desc">
              When to use: a body sits in a uniform gravity field and you want the total
              gravitational torque about a point.
            </p>
          </div>
        </>,

        <>
          <h2>Angular Momentum and Fixed Axis Rotation</h2>

          <div className="ref-formula">
            <span className="ref-formula-name">Tangential speed in rigid rotation</span>
            <div className="ref-formula-eq">{`$$v_j = \omega\rho_j$$`}</div>
            <p className="ref-formula-desc">{`When to use: a rigid body rotates about a fixed axis and you need the speed of a particle at perpendicular distance $\rho_j$.`}</p>
          </div>

          <div className="ref-formula">
            <span className="ref-formula-name">L_z as a sum</span>
            <div className="ref-formula-eq">{`$$L_z = \sum_j m_j\rho_j^2\omega$$`}</div>
            <p className="ref-formula-desc">
              When to use: you start from particles and want to assemble the body's angular
              momentum.
            </p>
          </div>

          <div className="ref-formula">
            <span className="ref-formula-name">Rotational version of p = mv</span>
            <div className="ref-formula-eq">{`$$L_z = I\omega$$`}</div>
            <p className="ref-formula-desc">{`When to use: a rigid body rotates about a fixed axis with angular speed $\omega$.`}</p>
          </div>

          <div className="ref-formula">
            <span className="ref-formula-name">Moment of inertia (discrete)</span>
            <div className="ref-formula-eq">{`$$I = \sum_j m_j\rho_j^2$$`}</div>
            <p className="ref-formula-desc">
              When to use: you have a body composed of point masses at known distances from the
              axis.
            </p>
          </div>

          <div className="ref-formula">
            <span className="ref-formula-name">Moment of inertia (continuous)</span>
            <div className="ref-formula-eq">{`$$I = \int \rho^2\,dm = \int (x^2 + y^2) w\,dV$$`}</div>
            <p className="ref-formula-desc">
              When to use: you have a continuous mass distribution and integrate over volume.
            </p>
          </div>

          <table className="lrn-table">
            <thead>
              <tr>
                <th>Object</th>
                <th>Axis</th>
                <th>Moment of Inertia</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Hoop</td>
                <td>Through center, perpendicular to plane</td>
                <td>{`$MR^2$`}</td>
              </tr>
              <tr>
                <td>Uniform disk</td>
                <td>Through center, perpendicular to plane</td>
                <td>{`$\\tfrac{1}{2} M R^2$`}</td>
              </tr>
              <tr>
                <td>Uniform stick</td>
                <td>Through midpoint, perpendicular to stick</td>
                <td>{`$\\tfrac{1}{12} M L^2$`}</td>
              </tr>
              <tr>
                <td>Uniform stick</td>
                <td>Through one end, perpendicular to stick</td>
                <td>{`$\\tfrac{1}{3} M L^2$`}</td>
              </tr>
              <tr>
                <td>Uniform sphere</td>
                <td>Through any diameter</td>
                <td>{`$\\tfrac{2}{5} M R^2$`}</td>
              </tr>
            </tbody>
          </table>

          <div className="ref-formula">
            <span className="ref-formula-name">Parallel axis theorem</span>
            <div className="ref-formula-eq">{`$$I = I_0 + M\ell^2$$`}</div>
            <p className="ref-formula-desc">{`When to use: you know $I_0$ about the center-of-mass axis and want $I$ about a parallel axis at perpendicular distance $\ell$.`}</p>
          </div>
        </>,

        <>
          <h2>Pure Rotation About an Axis</h2>

          <div className="ref-formula">
            <span className="ref-formula-name">Rotational version of F = ma</span>
            <div className="ref-formula-eq">{`$$\tau = I\alpha$$`}</div>
            <p className="ref-formula-desc">{`When to use: a rigid body rotates about a fixed axis at rest with angular acceleration $\alpha$.`}</p>
          </div>

          <div className="ref-formula">
            <span className="ref-formula-name">Rotational kinetic energy</span>
            <div className="ref-formula-eq">{`$$K = \tfrac{1}{2} I\omega^2$$`}</div>
            <p className="ref-formula-desc">{`When to use: a rigid body rotates about a fixed axis at angular speed $\omega$.`}</p>
          </div>

          <div className="ref-formula">
            <span className="ref-formula-name">Atwood with massive pulley</span>
            <div className="ref-formula-eq">{`$$a = \\frac{(M_1 - M_2)g}{M_1 + M_2 + \\frac{M_p}{2}}$$`}</div>
            <p className="ref-formula-desc">
              When to use: two hanging masses are connected over a pulley modeled as a uniform disk.
            </p>
          </div>

          <table className="lrn-table">
            <thead>
              <tr>
                <th>Pure Rotation Quantity</th>
                <th>Formula</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Angular momentum</td>
                <td>{`$L = I\omega$`}</td>
              </tr>
              <tr>
                <td>Torque</td>
                <td>{`$\tau = I\alpha$`}</td>
              </tr>
              <tr>
                <td>Kinetic energy</td>
                <td>{`$K = \tfrac{1}{2} I\omega^2$`}</td>
              </tr>
            </tbody>
          </table>
        </>,

        <>
          <h2>The Physical Pendulum</h2>

          <div className="ref-formula">
            <span className="ref-formula-name">Simple pendulum equation</span>
            <div className="ref-formula-eq">{`$$\ell\ddot\phi + g\phi = 0$$`}</div>
            <p className="ref-formula-desc">{`When to use: a point mass on a string of length $\ell$ swings at small angles.`}</p>
          </div>

          <div className="ref-formula">
            <span className="ref-formula-name">Simple pendulum period</span>
            <div className="ref-formula-eq">{`$$T = 2\pi\sqrt{\frac{\ell}{g}}$$`}</div>
            <p className="ref-formula-desc">{`When to use: small-angle pendulum with point bob and length $\ell$.`}</p>
          </div>

          <div className="ref-formula">
            <span className="ref-formula-name">Physical pendulum frequency</span>
            <div className="ref-formula-eq">{`$$\omega = \sqrt{\frac{Mg\ell}{I_p}}$$`}</div>
            <p className="ref-formula-desc">{`When to use: an extended body of mass $M$ swings about a pivot, with $I_p$ the moment of inertia about the pivot and $\ell$ the pivot-to-CM distance.`}</p>
          </div>

          <div className="ref-formula">
            <span className="ref-formula-name">Physical pendulum with radius of gyration</span>
            <div className="ref-formula-eq">{`$$\omega = \sqrt{\frac{g\ell}{k^2 + \ell^2}}$$`}</div>
            <p className="ref-formula-desc">{`When to use: you know the radius of gyration $k$ about the center of mass instead of $I_p$.`}</p>
          </div>

          <div className="ref-formula">
            <span className="ref-formula-name">Radius of gyration</span>
            <div className="ref-formula-eq">{`$$k = \sqrt{\frac{I_0}{M}}$$`}</div>
            <p className="ref-formula-desc">{`When to use: you want to express $I_0 = Mk^2$ to compare different shapes.`}</p>
          </div>

          <table className="lrn-table">
            <thead>
              <tr>
                <th>Body</th>
                <th>{`Radius of gyration $k$`}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Hoop</td>
                <td>{`$R$`}</td>
              </tr>
              <tr>
                <td>Disk</td>
                <td>{`$\frac{R}{\sqrt{2}}$`}</td>
              </tr>
              <tr>
                <td>Sphere</td>
                <td>{`$\sqrt{\tfrac{2}{5}}\,R$`}</td>
              </tr>
            </tbody>
          </table>

          <div className="ref-formula">
            <span className="ref-formula-name">Higher-order pendulum period</span>
            <div className="ref-formula-eq">{`$$T = T_0(1 + \tfrac{1}{16}\phi_0^2 + \dots)$$`}</div>
            <p className="ref-formula-desc">{`When to use: a pendulum oscillates at moderate amplitude $\phi_0$ and you need the leading correction to the small-angle period.`}</p>
          </div>

          <div className="ref-formula">
            <span className="ref-formula-name">Kater's pendulum period</span>
            <div className="ref-formula-eq">{`$$T = 2\pi\sqrt{\frac{\ell_A + \ell_B}{g}}$$`}</div>
            <p className="ref-formula-desc">{`When to use: two opposite-side knife-edge supports give the same period; precision $g$ measurement.`}</p>
          </div>

          <div className="ref-formula">
            <span className="ref-formula-name">Kater's gyration relation</span>
            <div className="ref-formula-eq">{`$$k^2 = \ell_A \ell_B$$`}</div>
            <p className="ref-formula-desc">
              When to use: you want to extract the radius of gyration from Kater's measurements.
            </p>
          </div>

          <div className="ref-formula">
            <span className="ref-formula-name">Center of percussion</span>
            <div className="ref-formula-eq">{`$$\ell = \frac{I}{M\ell'}$$`}</div>
            <p className="ref-formula-desc">
              When to use: you want to hit a hinged body so the hinge feels no impulsive reaction.
            </p>
          </div>

          <div className="ref-formula">
            <span className="ref-formula-name">Door's center of percussion</span>
            <div className="ref-formula-eq">{`$$\ell = \tfrac{2}{3} w$$`}</div>
            <p className="ref-formula-desc">{`When to use: a uniform rectangular door of width $w$.`}</p>
          </div>
        </>,

        <>
          <h2>Combined Translation and Rotation</h2>

          <div className="ref-formula">
            <span className="ref-formula-name">Particle-sum form of L</span>
            <div className="ref-formula-eq">{`$$\mathbf{L} = \sum_j (\mathbf{r}_j \times m_j\dot{\mathbf{r}}_j)$$`}</div>
            <p className="ref-formula-desc">
              When to use: starting point for splitting angular momentum into spin and orbital
              pieces.
            </p>
          </div>

          <div className="ref-formula">
            <span className="ref-formula-name">Center of mass</span>
            <div className="ref-formula-eq">{`$$\mathbf{R} = \frac{\sum_j m_j\mathbf{r}_j}{M}$$`}</div>
            <p className="ref-formula-desc">
              When to use: you need the mass-weighted average position of a body.
            </p>
          </div>

          <div className="ref-formula">
            <span className="ref-formula-name">Spin plus orbital angular momentum</span>
            <div className="ref-formula-eq">{`$$\mathbf{L} = \mathbf{R} \times M\mathbf{V} + \sum_j \mathbf{r}'_j \times m_j\dot{\mathbf{r}}'_j$$`}</div>
            <p className="ref-formula-desc">
              When to use: any rigid body with translating center of mass and internal rotation.
            </p>
          </div>

          <div className="ref-formula">
            <span className="ref-formula-name">L_z split</span>
            <div className="ref-formula-eq">{`$$L_z = (\mathbf{R} \times M\mathbf{V})_z + (\sum_j \mathbf{r}'_j \times m_j\dot{\mathbf{r}}'_j)_z$$`}</div>
            <p className="ref-formula-desc">{`When to use: planar motion where you want the $z$ component split into orbital and spin pieces.`}</p>
          </div>

          <div className="ref-formula">
            <span className="ref-formula-name">L_z for fixed-axis spin</span>
            <div className="ref-formula-eq">{`$$L_z = I_0\omega + (\mathbf{R} \times M\mathbf{V})_z$$`}</div>
            <p className="ref-formula-desc">{`When to use: a rigid body rotates about its CM at angular speed $\omega$ and the CM moves with velocity $\mathbf{V}$.`}</p>
          </div>

          <div className="ref-formula">
            <span className="ref-formula-name">Rolling wheel total L_z</span>
            <div className="ref-formula-eq">{`$$L_z = -\tfrac{3}{2} M b^2 \omega$$`}</div>
            <p className="ref-formula-desc">
              When to use: a uniform wheel rolls without slipping with the standard sign convention.
            </p>
          </div>

          <div className="ref-formula">
            <span className="ref-formula-name">Torque split</span>
            <div className="ref-formula-eq">{`$$\boldsymbol{\tau} = \sum_j \mathbf{r}'_j \times \mathbf{f}_j + \mathbf{R} \times \mathbf{F}$$`}</div>
            <p className="ref-formula-desc">
              When to use: you want to separate torques about the CM from the orbital torque of the
              net force.
            </p>
          </div>

          <div className="ref-formula">
            <span className="ref-formula-name">tau_z split</span>
            <div className="ref-formula-eq">{`$$\tau_z = \tau_{0z} + (\mathbf{R} \times \mathbf{F})_z$$`}</div>
            <p className="ref-formula-desc">{`When to use: planar motion needing the $z$ component of the torque split.`}</p>
          </div>

          <div className="ref-formula">
            <span className="ref-formula-name">dL_z/dt split</span>
            <div className="ref-formula-eq">{`$$\frac{dL_z}{dt} = I_0\alpha + (\mathbf{R} \times M\mathbf{a})_z$$`}</div>
            <p className="ref-formula-desc">
              When to use: you differentiate the spin-plus-orbital decomposition in time.
            </p>
          </div>

          <div className="ref-formula">
            <span className="ref-formula-name">Center-of-mass torque law</span>
            <div className="ref-formula-eq">{`$$\tau_0 = I_0\alpha$$`}</div>
            <p className="ref-formula-desc">
              When to use: rotation about the CM, even when the CM accelerates.
            </p>
          </div>

          <div className="ref-formula">
            <span className="ref-formula-name">Kinetic energy decomposition</span>
            <div className="ref-formula-eq">{`$$K = \tfrac{1}{2} I\omega^2 + \tfrac{1}{2} M V^2$$`}</div>
            <p className="ref-formula-desc">
              When to use: any rigid body translating and rotating; computes total kinetic energy.
            </p>
          </div>

          <table className="lrn-table">
            <thead>
              <tr>
                <th>Rotation + Translation Quantity</th>
                <th>Formula</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Angular momentum</td>
                <td>{`$L_z = I_0\omega + (\mathbf{R}\times M\mathbf{V})_z$`}</td>
              </tr>
              <tr>
                <td>Torque</td>
                <td>{`$\tau_z = \tau_{0z} + (\mathbf{R}\times\mathbf{F})_z$`}</td>
              </tr>
              <tr>
                <td>Center-of-mass torque</td>
                <td>{`$\tau_0 = I_0\alpha$`}</td>
              </tr>
              <tr>
                <td>Kinetic energy</td>
                <td>{`$K = \tfrac{1}{2} I\omega^2 + \tfrac{1}{2} M V^2$`}</td>
              </tr>
            </tbody>
          </table>

          <div className="ref-formula">
            <span className="ref-formula-name">Translational work-energy theorem</span>
            <div className="ref-formula-eq">{`$$\int \mathbf{F}\cdot d\mathbf{R} = \tfrac{1}{2} M V_b^2 - \tfrac{1}{2} M V_a^2$$`}</div>
            <p className="ref-formula-desc">
              When to use: you want the work done by the net force on the center of mass.
            </p>
          </div>

          <div className="ref-formula">
            <span className="ref-formula-name">Rotational work-energy theorem</span>
            <div className="ref-formula-eq">{`$$\int \tau_0\,d\theta = \tfrac{1}{2} I_0\omega_b^2 - \tfrac{1}{2} I_0\omega_a^2$$`}</div>
            <p className="ref-formula-desc">
              When to use: you want the work done by the torque about the center of mass.
            </p>
          </div>

          <div className="ref-formula">
            <span className="ref-formula-name">Rolling drum speed (energy)</span>
            <div className="ref-formula-eq">{`$$V = \sqrt{\frac{4gh}{3}}$$`}</div>
            <p className="ref-formula-desc">{`When to use: a uniform drum rolls without slipping down a vertical drop $h$.`}</p>
          </div>

          <div className="ref-formula">
            <span className="ref-formula-name">Falling stick speed</span>
            <div className="ref-formula-eq">{`$$\dot{y}^2 = \frac{6gy\sin^2\theta}{3\sin^2\theta + 1}$$`}</div>
            <p className="ref-formula-desc">{`When to use: a uniform stick stands on frictionless ice and falls; $y$ is the vertical drop of the CM and $\theta$ is the angle from vertical.`}</p>
          </div>
        </>,

        <>
          <h2>The Bohr Atom</h2>

          <div className="ref-formula">
            <span className="ref-formula-name">Balmer-Rydberg formula</span>
            <div className="ref-formula-eq">{`$$\frac{1}{\lambda} = R_y(\frac{1}{m^2} - \frac{1}{n^2}),\ R_y = 109{,}700\text{ cm}^{-1}$$`}</div>
            <p className="ref-formula-desc">
              When to use: you want the wavelength of a hydrogen spectral line.
            </p>
          </div>

          <div className="ref-formula">
            <span className="ref-formula-name">Bohr photon frequency</span>
            <div className="ref-formula-eq">{`$$\nu = \frac{E_a - E_b}{h}$$`}</div>
            <p className="ref-formula-desc">
              When to use: a transition occurs between two stationary atomic states.
            </p>
          </div>

          <div className="ref-formula">
            <span className="ref-formula-name">Bohr quantization</span>
            <div className="ref-formula-eq">{`$$L = \frac{nh}{2\pi}$$`}</div>
            <p className="ref-formula-desc">{`When to use: angular momentum is quantized in integer multiples of $\hbar$.`}</p>
          </div>

          <div className="ref-formula">
            <span className="ref-formula-name">Bohr radial equation</span>
            <div className="ref-formula-eq">{`$$\\frac{m_e v^2}{r} = \\frac{e^2}{r^2}$$`}</div>
            <p className="ref-formula-desc">
              When to use: classical circular motion of an electron under the Coulomb force.
            </p>
          </div>

          <div className="ref-formula">
            <span className="ref-formula-name">Hydrogen total energy</span>
            <div className="ref-formula-eq">{`$$E = \\tfrac{1}{2} m_e v^2 - \\frac{e^2}{r}$$`}</div>
            <p className="ref-formula-desc">
              When to use: you compute the energy of a circular electron orbit.
            </p>
          </div>

          <div className="ref-formula">
            <span className="ref-formula-name">Energy on a circular orbit</span>
            <div className="ref-formula-eq">{`$$E = -\\frac{\\tfrac{1}{2} e^2}{r}$$`}</div>
            <p className="ref-formula-desc">
              When to use: combining the radial equation with the energy expression.
            </p>
          </div>

          <div className="ref-formula">
            <span className="ref-formula-name">Bohr quantization (alternative)</span>
            <div className="ref-formula-eq">{`$$L = \frac{nh}{2\pi}$$`}</div>
            <p className="ref-formula-desc">
              When to use: same as above; numbered separately in the original text for the
              derivation chain.
            </p>
          </div>

          <div className="ref-formula">
            <span className="ref-formula-name">Bohr radii</span>
            <div className="ref-formula-eq">{`$$r_n = \frac{n^2 h^2}{4\pi^2 m_e e^2}$$`}</div>
            <p className="ref-formula-desc">
              When to use: you want the allowed orbital radii of the hydrogen electron.
            </p>
          </div>

          <div className="ref-formula">
            <span className="ref-formula-name">Bohr energy levels</span>
            <div className="ref-formula-eq">{`$$E_n = -\frac{2\pi^2 m_e e^4}{n^2 h^2}$$`}</div>
            <p className="ref-formula-desc">
              When to use: you want the allowed energies of the hydrogen electron.
            </p>
          </div>

          <div className="ref-formula">
            <span className="ref-formula-name">Photon frequency from Bohr</span>
            <div className="ref-formula-eq">{`$$\nu = \frac{2\pi^2 m_e e^4}{h^3}(\frac{1}{m^2} - \frac{1}{n^2})$$`}</div>
            <p className="ref-formula-desc">
              When to use: you want the frequency of a hydrogen spectral line from first principles.
            </p>
          </div>

          <div className="ref-formula">
            <span className="ref-formula-name">Photon wavelength from Bohr</span>
            <div className="ref-formula-eq">{`$$\frac{1}{\lambda} = \frac{2\pi^2 m_e e^4}{c h^3}(\frac{1}{m^2} - \frac{1}{n^2})$$`}</div>
            <p className="ref-formula-desc">{`When to use: you want $\frac{1}{\lambda}$ for a hydrogen line and recognize the prefactor as $R_y$.`}</p>
          </div>
        </>,

        <>
          <h2>Why Rigid-Body Motion Splits into Translation and Rotation</h2>

          <div className="ref-formula">
            <span className="ref-formula-name">Rigid-body condition</span>
            <div className="ref-formula-eq">{`$$(\mathbf{r}_2 - \mathbf{r}_1)\cdot(d\mathbf{r}_2 - d\mathbf{r}_1) = 0$$`}</div>
            <p className="ref-formula-desc">
              When to use: the differential rigidity constraint between two particles in a rigid
              body.
            </p>
          </div>

          <div className="ref-formula">
            <span className="ref-formula-name">Residual displacement</span>
            <div className="ref-formula-eq">{`$$d\mathbf{r}'_j = d\mathbf{r}_j - d\mathbf{R}$$`}</div>
            <p className="ref-formula-desc">
              When to use: subtract the center-of-mass displacement to isolate the rotational piece.
            </p>
          </div>
        </>,

        <>
          <h2>The Pendulum Beyond Small Angles</h2>

          <div className="ref-formula">
            <span className="ref-formula-name">Pendulum elliptic-integral period</span>
            <div className="ref-formula-eq">{`$$T = 4\sqrt{\frac{\ell}{g}}\,K(\sin\frac{\phi_0}{2})$$`}</div>
            <p className="ref-formula-desc">{`When to use: a pendulum at finite amplitude $\phi_0$, where $K$ is the complete elliptic integral of the first kind.`}</p>
          </div>

          <div className="ref-formula">
            <span className="ref-formula-name">Series expansion of pendulum period</span>
            <div className="ref-formula-eq">{`$$T = 2\pi\sqrt{\frac{\ell}{g}}(1 + \tfrac{1}{4}\sin^2\frac{\phi_0}{2} + \dots) \approx 2\pi\sqrt{\frac{\ell}{g}}(1 + \tfrac{1}{16}\phi_0^2 + \dots)$$`}</div>
            <p className="ref-formula-desc">
              When to use: moderate-amplitude pendulum where you want a quick correction to the
              small-angle period.
            </p>
          </div>
        </>
      ]
    },
    customCss: null
  }

  return <LearningTemplate config={config} />
}
