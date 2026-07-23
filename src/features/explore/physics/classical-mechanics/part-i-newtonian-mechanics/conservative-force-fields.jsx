import { LearningTemplate } from '../../../../../components/learning/learning-template'
import {
  EnergyDiagram,
  ConservativeLoop,
  GradLevelCurves,
  PotentialWellOsc,
  ConicalNoWork,
  StokesTheorem,
  PathDependentWork,
  SpringFieldViz,
  AreaUnderForce,
  FromUtoF,
  GradientHill,
  PaddleWheelCurl,
  KeplerEqualAreas,
  EffectivePotentialPlot,
  PolarDecomp
} from '../../../../../components/viz'

export default function WorkEnergyAndConservativeForceFields() {
  const config = {
    cssPrefix: 'cff',
    documentTitle: 'Work, Energy, and Conservative Force Fields - AETHER',
    learning: {
      groupTitle: 'Newtonian Mechanics',
      category: 'Classical Mechanics',
      title: 'Work, Energy, and Conservative Force Fields',
      subtitle:
        'Work, energy, and the gradient and curl that decide whether a force has a potential, ending at the Kepler orbits.',
      sections: [
        {
          title: 'What This Topic Is About',
          content: (
            <>
              <div className="lrn-predict">
                <span className="lrn-predict-label">PREDICT</span>
                <p>
                  A ball rolls down a hill. You know its starting height and the hill's shape. Can
                  you find its speed at the bottom without ever using time?
                </p>
              </div>
              <p>{`You already know Newton's second law as $F = ma$. Force equals mass times acceleration, where acceleration is how fast velocity changes over time.`}</p>
              <p>{`Many real forces depend on position, not on time. A spring pulls harder the more you stretch it. Gravity weakens as you climb away from Earth. In these cases $F$ is a function of position $r$, not of time $t$.`}</p>
              <p>Energy is the tool that handles this case.</p>
              <p>
                The energy method needs three quantities. Kinetic energy is energy of motion. Work
                is force pushing through distance. Potential energy is stored energy of position.
                The work-energy theorem connects all three.
              </p>
              <div className="lrn-elaborate">
                <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
                <p>{`$F = ma$ is a differential equation. Solving it directly needs $F$ as a function of time. When the force depends on position instead, we change variables: multiply both sides by velocity, then integrate. Out comes a relation between speed and position, with no time anywhere in the answer.`}</p>
              </div>
              <p>
                Use the energy method when the force depends on position. Use it too when you only
                need speed at fixed points and do not care about timing.
              </p>
              <p>Key terms defined before use:</p>
              <ul className="lrn-list">
                <li>{`Position ($r$): where an object sits in space, given by coordinates.`}</li>
                <li>{`Velocity ($v$): rate of change of position with time.`}</li>
                <li>{`Force ($F$): a push or pull, measured in newtons.`}</li>
                <li>{`Mass ($m$): how much matter an object has, measured in kilograms.`}</li>
                <li>{`Kinetic energy ($K = \\frac{1}{2}mv^2$): the energy an object has because it moves.`}</li>
                <li>{`Work ($W$): energy transferred by a force pushing through a distance.`}</li>
              </ul>
            </>
          )
        },
        {
          title: "Solving Newton's Law When Force Depends on Position (1D)",
          content: (
            <>
              <p>Newton's law in one dimension reads:</p>
              <div className="lrn-eq">
                <span>{`$$m\\frac{d^2 x}{dt^2} = F(x)$$`}</span>
              </div>
              <p>
                The left side has time derivatives. The right side depends only on position. The two
                sides do not match, and that mismatch blocks direct integration.
              </p>
              <p>{`Multiply both sides by $\\frac{dx}{dt} = v$:`}</p>
              <div className="lrn-eq">
                <span>{`$$m v \\frac{dv}{dt} = F(x) \\frac{dx}{dt}$$`}</span>
              </div>
              <p>{`By the chain rule, the left side is the time derivative of $\\frac{1}{2}mv^2$. The right side, integrated over time, becomes $\\int F(x)\\, dx$, a pure position integral. So we get:`}</p>
              <div className="lrn-eq lrn-eq-display">
                <span>{`$$\\boxed{\\frac{1}{2}mv_b^2 - \\frac{1}{2}mv_a^2 = \\int_{x_a}^{x_b} F(x)\\, dx}$$`}</span>
              </div>
              <p>
                This is the work-energy theorem in one dimension. The change in kinetic energy
                equals the integral of force over distance.
              </p>
              <p>{`In short form: $W_{ba} = K_b - K_a$. Here $W_{ba} = \\int_{x_a}^{x_b} F(x)\\, dx$ is the work from $a$ to $b$, and $K = \\frac{1}{2}mv^2$ is kinetic energy. We measure energy in joules: $1\\, \\text{J} = 1\\, \\text{kg}\\cdot\\text{m}^2/\\text{s}^2$.`}</p>
              <SpringFieldViz />
              <AreaUnderForce />
              <div className="lrn-compare">
                <div className="lrn-compare-col">
                  <span className="lrn-compare-title">Direct integration of motion</span>
                  <p>{`You get position and speed as functions of time: $x(t)$ and $v(t)$.`}</p>
                </div>
                <div className="lrn-compare-col">
                  <span className="lrn-compare-title">Energy method</span>
                  <p>{`You get speed as a function of position: $v(x)$. Time drops out.`}</p>
                </div>
              </div>
              <p>
                Use this when the force depends on position. You get the speed at any new point and
                give up the time it took to get there.
              </p>
              <h3>Worked Example: Mass Thrown Upward in Gravity</h3>
              <p>{`A ball of mass $m$ is thrown straight up with speed $v_0$. Gravity pulls down with constant force $-mg$. Find speed at height $h$.`}</p>
              <p>{`Apply the work-energy theorem from $x = 0$ to $x = h$:`}</p>
              <div className="lrn-eq">
                <span>{`$$\\frac{1}{2}mv^2 - \\frac{1}{2}mv_0^2 = \\int_0^h (-mg)\\, dx = -mgh$$`}</span>
              </div>
              <p>{`Solve for $v$:`}</p>
              <div className="lrn-eq">
                <span>{`$$v^2 = v_0^2 - 2gh$$`}</span>
              </div>
              <h3>Worked Example: Escape Velocity in 1D</h3>
              <p>{`Earth pulls a rocket with force $F = -\\frac{GMm}{r^2}$. The rocket starts at the surface ($r = R_e$) with speed $v_0$. Find $v_0$ to barely reach infinity.`}</p>
              <div className="lrn-eq">
                <span>{`$$\\frac{1}{2}mv^2 - \\frac{1}{2}mv_0^2 = -\\int_{R_e}^{\\infty} \\frac{GMm}{r^2}\\, dr = -\\frac{GMm}{R_e}$$`}</span>
              </div>
              <p>{`Set $v = 0$ at infinity. Solve:`}</p>
              <div className="lrn-eq lrn-eq-display">
                <span>{`$$\\boxed{v_{escape} = \\sqrt{\\frac{2GM}{R_e}} = \\sqrt{2gR_e} \\approx 1.1 \\times 10^4 \\text{ m/s}}$$`}</span>
              </div>
              <p>{`The second form uses $g = \\frac{GM}{R_e^2}$, the surface gravity at radius $R_e$.`}</p>
            </>
          )
        },
        {
          title: 'Extending to Multiple Dimensions',
          content: (
            <>
              <div className="lrn-predict">
                <span className="lrn-predict-label">PREDICT</span>
                <p>{`A pendulum swings in two dimensions. Can the same energy logic work when force has $x$, $y$, and $z$ components?`}</p>
              </div>
              <p>{`In 3D, Newton's law is the vector equation $\\vec{F} = m\\, \\frac{d\\vec{v}}{dt}$. Take the dot product of both sides with a small displacement $\\Delta \\vec{r}$:`}</p>
              <div className="lrn-eq">
                <span>{`$$\\vec{F} \\cdot \\Delta \\vec{r} = m \\frac{d\\vec{v}}{dt} \\cdot \\Delta \\vec{r}$$`}</span>
              </div>
              <p>{`The vector identity $\\vec{A} \\cdot \\frac{d\\vec{A}}{dt} = \\frac{1}{2} \\frac{d(A^2)}{dt}$ converts the right side. It is just the product rule applied to $\\vec{A}\\cdot\\vec{A} = A^2$. With $\\Delta\\vec{r} = \\vec{v}\\,\\Delta t$ this gives:`}</p>
              <div className="lrn-eq">
                <span>{`$$\\vec{F} \\cdot \\Delta \\vec{r} = \\frac{m}{2} \\frac{d(v^2)}{dt} \\Delta t$$`}</span>
              </div>
              <p>{`Add up these small patches along the path and take the limit, exactly as in the 1D case. The sum becomes an integral from point $a$ to point $b$:`}</p>
              <div className="lrn-eq">
                <span>{`$$\\int_{r_a}^{r_b} \\vec{F} \\cdot d\\vec{r} = \\frac{1}{2}mv_b^2 - \\frac{1}{2}mv_a^2$$`}</span>
              </div>
              <p>So the 3D work-energy theorem looks the same as the 1D version:</p>
              <div className="lrn-eq lrn-eq-display">
                <span>{`$$\\boxed{W_{ba} = K_b - K_a}$$`}</span>
              </div>
              <p>The only difference is that work is now a line integral along the actual path.</p>
              <h3>Worked Example: The Conical Pendulum</h3>
              <p>{`Swing a ball on a string so it traces a flat horizontal circle, the cord sweeping out a cone. Only two forces act: gravity pulling straight down and tension running along the cord.`}</p>
              <p>{`Tension stays at right angles to the motion. Its dot product with velocity is zero. So tension does no work.`}</p>
              <p>{`The ball holds the same height all the way around, so gravity does no work either. Total work is zero, $\\Delta K = 0$, and the ball circles at one steady speed.`}</p>
              <ConicalNoWork />
            </>
          )
        },
        {
          title: 'Applying the Work-Energy Theorem',
          content: (
            <>
              <div className="lrn-predict">
                <span className="lrn-predict-label">PREDICT</span>
                <p>
                  A bead slides on a curved wire. Can you find its speed at the bottom without
                  solving for the wire's normal force?
                </p>
              </div>
              <p>
                The theorem is most useful when the forces are awkward but you only need speed at a
                few points. Forces that only hold an object to a track or surface act at right
                angles to the motion, so their dot product with velocity is zero and they do no
                work. These are constraint forces. The bead's wire pushes it sideways but never
                speeds it up or slows it down.
              </p>
              <h3>Worked Example: Bead Sliding Down a Wire</h3>
              <p>{`A bead starts from rest and slides down a frictionless wire bent into any shape, dropping a total height $h$. Only gravity and the wire's push act on it. The wire's push is a constraint force, so it does no work. Gravity does work $mgh$, the same for every wire shape between the two heights.`}</p>
              <p>{`Apply the work-energy theorem from top to bottom:`}</p>
              <div className="lrn-eq">
                <span>{`$$\\frac{1}{2}mv^2 - 0 = mgh$$`}</span>
              </div>
              <p>{`So $v = \\sqrt{2gh}$. The bottom speed depends only on the drop in height, never on the wire's shape, and you never had to find the wire's push.`}</p>
              <h3>Worked Example: A Path-Dependent Line Integral</h3>
              <p>{`A force is conservative when the work it does between two points depends only on the endpoints, never on the route. Here is a force that fails this test. Take $\\vec{F} = A(xy\\hat{i} + y^2\\hat{j})$ and compute work from $(0,0)$ to $(1,1)$ along two paths.`}</p>
              <p>{`Path 1: along the $x$-axis to $(1,0)$, then up to $(1,1)$. The first leg contributes nothing because $y = 0$ there. The second leg gives $\\int_0^1 A y^2\\, dy = \\frac{A}{3}$.`}</p>
              <p>{`Path 2: the straight diagonal $y = x$. Work is $\\int_0^1 A(x^2 + x^2)\\, dx = \\frac{2A}{3}$.`}</p>
              <p>
                Different paths give different work, so this force has no potential. It is not
                conservative.
              </p>
              <PathDependentWork />
            </>
          )
        },
        {
          title: 'Potential Energy',
          content: (
            <>
              <div className="lrn-predict">
                <span className="lrn-predict-label">PREDICT</span>
                <p>
                  A ball at the top of a hill has more potential to do something than the same ball
                  at the bottom. Can we turn that idea into a precise number?
                </p>
              </div>
              <p>{`For a conservative force, where work depends only on the endpoints, define potential energy $U$ by:`}</p>
              <div className="lrn-eq lrn-eq-display">
                <span>{`$$\\boxed{U(\\vec{r}_b) - U(\\vec{r}_a) = -\\int_a^b \\vec{F} \\cdot d\\vec{r}}$$`}</span>
              </div>
              <p>{`The minus sign is the convention that makes the force point toward lower $U$. Only differences in $U$ matter physically, so you are free to pick $U = 0$ wherever it is convenient. This integral form is the new piece: it builds the potential straight from a line integral of the force, in any number of dimensions.`}</p>
              <p>{`Feed this into the conservation of mechanical energy you proved in one dimension earlier. Written between two points it reads:`}</p>
              <div className="lrn-eq lrn-eq-display">
                <span>{`$$\\boxed{K_a + U_a = K_b + U_b = E}$$`}</span>
              </div>
              <div className="lrn-callout lrn-warning">
                <span className="lrn-callout-label">MISCONCEPTION</span>
                <p>Potential energy belongs to the system, not the object alone.</p>
                <p>{`A ball alone has no $U$. The $U$ lives in the ball-Earth pair, in the way they interact through gravity.`}</p>
              </div>
              <h3>Worked Example: Inverse-Square Force</h3>
              <p>{`For gravity or Coulomb force $F = -\\frac{A}{r^2}$:`}</p>
              <div className="lrn-eq">
                <span>{`$$U(r) = -\\int_\\infty^r \\frac{-A}{r'^2}\\, dr' = -\\frac{A}{r}$$`}</span>
              </div>
              <p>{`For Earth's gravity: $U(r) = -\\frac{GMm}{r}$. We pick $U = 0$ at infinity, the natural reference point.`}</p>
              <p>{`Close to the surface this reduces to the familiar $U = mgh$. Raise the object a small height $h$ above radius $R$. The change in $U$ is $\\frac{GMm}{R} - \\frac{GMm}{R+h} = \\frac{GMm\\,h}{R(R+h)}$, which for $h \\ll R$ is about $\\frac{GMm}{R^2}h = mgh$, using $g = \\frac{GM}{R^2}$.`}</p>
            </>
          )
        },
        {
          title: 'What Potential Energy Tells Us About Force',
          content: (
            <>
              <div className="lrn-predict">
                <span className="lrn-predict-label">PREDICT</span>
                <p>
                  If you know the height of every hill and valley on a map, can you predict which
                  way a marble would roll at any point?
                </p>
              </div>
              <p>{`In one dimension you already have $F(x) = -\\frac{dU}{dx}$: force points downhill on the $U$ graph, and the steeper the slope, the larger the force. This page lifts that idea to three dimensions in a moment, where the single slope becomes the gradient.`}</p>
              <FromUtoF />
              <h3>Stability</h3>
              <p>{`An equilibrium point is where $F = 0$, so $\\frac{dU}{dx} = 0$ and the curve is flat. The sign of $\\frac{d^2U}{dx^2}$ then decides stability: a valley ($\\frac{d^2U}{dx^2} > 0$) is stable, a peak ($\\frac{d^2U}{dx^2} < 0$) is unstable.`}</p>
            </>
          )
        },
        {
          title: 'Energy Diagrams',
          content: (
            <>
              <div className="lrn-predict">
                <span className="lrn-predict-label">PREDICT</span>
                <p>{`An object with energy $E$ moves in a potential $U(x)$. Where can it physically be, and where can it never go?`}</p>
              </div>
              <p>{`This is the same $U$-versus-$E$ picture you read in one dimension, now used as a tool. Draw $U(x)$ and a horizontal line at the total energy $E$. The vertical gap between them is the kinetic energy at every position, since $K(x) = E - U(x)$. Kinetic energy can never be negative, so the particle is forbidden from any region where $U > E$.`}</p>
              <p>{`Turning points are the positions where $U(x) = E$. The kinetic energy is zero there, so the particle stops and turns around. If $E$ stays below the surrounding peaks the motion is bounded, trapped between two turning points; if $E$ clears the potential out to infinity the particle escapes.`}</p>
              <EnergyDiagram />
            </>
          )
        },
        {
          title: 'Small Oscillations Near a Minimum',
          content: (
            <>
              <div className="lrn-predict">
                <span className="lrn-predict-label">PREDICT</span>
                <p>
                  A ball sits in a smooth bowl of unknown shape. You nudge it slightly. Will it
                  always wobble like a spring, no matter the bowl's shape?
                </p>
              </div>
              <p>{`Near a minimum $r_0$ of a smooth potential, expand $U$ in a Taylor series:`}</p>
              <div className="lrn-eq">
                <span>{`$$U(r) \\approx U(r_0) + \\frac{1}{2}\\left.\\frac{d^2 U}{dr^2}\\right|_{r_0}(r - r_0)^2$$`}</span>
              </div>
              <p>
                The linear term has dropped out because the first derivative is zero at a minimum.
                What remains is a quadratic in $(r - r_0)$: the same shape as a spring potential.
              </p>
              <p>So define the effective spring constant:</p>
              <div className="lrn-eq lrn-eq-display">
                <span>{`$$\\boxed{k_{eff} = \\left.\\frac{d^2 U}{dr^2}\\right|_{r_0}}$$`}</span>
              </div>
              <p>{`So near a minimum the system oscillates with frequency $\\omega = \\sqrt{\\frac{k_{eff}}{m}}$. The full reason every smooth well behaves this way, and the cases that need more care, are taken up in the Oscillations topic.`}</p>
              <PotentialWellOsc />
              <h3>Worked Example: Molecular Vibrations</h3>
              <p>{`Two atoms of masses $m_1$ and $m_2$ are joined by a chemical bond, which acts like a spring with stiffness $k$. The Momentum topic showed that two bodies pulling on each other move like a single particle of reduced mass $\\mu = \\frac{m_1 m_2}{m_1 + m_2}$. Use that result here, and the vibration frequency is:`}</p>
              <div className="lrn-eq">
                <span>{`$$\\omega = \\sqrt{\\frac{k}{\\mu}}$$`}</span>
              </div>
            </>
          )
        },
        {
          title: 'Nonconservative Forces',
          content: (
            <>
              <div className="lrn-predict">
                <span className="lrn-predict-label">PREDICT</span>
                <p>
                  A block slides down a ramp with friction. Where does its kinetic energy go? Can
                  total energy still be conserved in some form?
                </p>
              </div>
              <p>
                Friction and air drag have no potential, so the energy method does not handle them
                on its own. The Friction topic treats these forces in full. Here you only need the
                bookkeeping rule: extend the energy equation by the work the dissipative forces do.
              </p>
              <div className="lrn-eq lrn-eq-display">
                <span>{`$$\\boxed{E_b - E_a = W_{ba}^{NC}}$$`}</span>
              </div>
              <p>{`Here $W^{NC}$ is the work done by all nonconservative forces along the path. This work is usually negative because the lost mechanical energy turns into heat.`}</p>
              <h3>Worked Example: Block Sliding Down an Inclined Plane with Friction</h3>
              <p>{`A block of mass $m$ slides a distance $L$ down a ramp tilted at angle $\\theta$. The kinetic friction coefficient is $\\mu_k$. Gravity adds energy $mgL\\sin\\theta$ as the block descends; friction removes $\\mu_k mgL\\cos\\theta$ along the way. Energy balance:`}</p>
              <div className="lrn-eq">
                <span>{`$$\\frac{1}{2}mv^2 = mgL\\sin\\theta - \\mu_k mgL\\cos\\theta$$`}</span>
              </div>
              <p>{`Solving for $v$: $v = \\sqrt{2gL(\\sin\\theta - \\mu_k \\cos\\theta)}$.`}</p>
            </>
          )
        },
        {
          title: 'Power',
          content: (
            <>
              <div className="lrn-predict">
                <span className="lrn-predict-label">PREDICT</span>
                <p>
                  A weak motor and a strong motor lift the same crate to the same shelf. They use
                  the same total energy. What is different about them?
                </p>
              </div>
              <p>Power is how fast work is done:</p>
              <div className="lrn-eq lrn-eq-display">
                <span>{`$$\\boxed{P = \\frac{dW}{dt} = \\vec{F} \\cdot \\vec{v}}$$`}</span>
              </div>
              <p>{`Units: $1\\, \\text{watt} = 1\\, \\text{J/s}$. $1\\, \\text{horsepower} \\approx 746\\, \\text{W}$.`}</p>
              <p>
                Use power when the question is about the rate of energy transfer rather than the
                total amount transferred.
              </p>
            </>
          )
        },
        {
          title: 'The Gradient Operator',
          content: (
            <>
              <div className="lrn-predict">
                <span className="lrn-predict-label">PREDICT</span>
                <p>Imagine a hilly landscape. At any point, which way is the steepest slope?</p>
              </div>
              <p>{`The gradient of a scalar function is a vector built from partial derivatives. A partial derivative measures how $U$ changes along one axis while the others are held fixed. Stack the three of them into one vector:`}</p>
              <div className="lrn-eq lrn-eq-display">
                <span>{`$$\\boxed{\\nabla U = \\hat{i}\\frac{\\partial U}{\\partial x} + \\hat{j}\\frac{\\partial U}{\\partial y} + \\hat{k}\\frac{\\partial U}{\\partial z}}$$`}</span>
              </div>
              <p>{`Each partial says how $U$ changes along one axis alone. The vector combines them so it captures the change in any direction at once: $\\nabla U \\cdot \\hat{n}$ is the rate of change of $U$ along any unit vector $\\hat{n}$.`}</p>
              <GradientHill />
              <h3>Worked Example: Gravitational Attraction</h3>
              <p>{`Take $U = -\\frac{GMm}{r}$, where $r = \\sqrt{x^2 + y^2 + z^2}$. The chain rule gives $\\frac{\\partial r}{\\partial x} = \\frac{x}{r}$, and similarly for $y$ and $z$. So each partial of $U$ is $\\frac{GMm}{r^2}\\cdot\\frac{x}{r}$, which assembles into $\\nabla U = \\frac{GMm}{r^2}\\hat{r}$, pointing outward along the radius.`}</p>
            </>
          )
        },
        {
          title: 'Force from Potential Energy in 3D',
          content: (
            <>
              <div className="lrn-predict">
                <span className="lrn-predict-label">PREDICT</span>
                <p>{`You have a 3D potential $U(x, y, z)$. Can you read off the force directly without doing any integrals?`}</p>
              </div>
              <p>
                Differentiate the potential-energy definition along each axis. Each component of
                force comes from the rate of change of $U$ along that axis:
              </p>
              <div className="lrn-eq">
                <span>{`$$F_x = -\\frac{\\partial U}{\\partial x}, \\quad F_y = -\\frac{\\partial U}{\\partial y}, \\quad F_z = -\\frac{\\partial U}{\\partial z}$$`}</span>
              </div>
              <p>Bundle the three components into one vector equation:</p>
              <div className="lrn-eq lrn-eq-display">
                <span>{`$$\\boxed{\\vec{F} = -\\nabla U}$$`}</span>
              </div>
              <p>{`Test it on the gravity gradient you just computed. With $\\nabla U = \\frac{GMm}{r^2}\\hat{r}$, the force is $\\vec{F} = -\\nabla U = -\\frac{GMm}{r^2}\\hat{r}$, pulling back toward the source. The electric force between point charges follows the same step, starting from $U = \\frac{kq_1 q_2}{r}$.`}</p>
            </>
          )
        },
        {
          title: 'The Physical Meaning of the Gradient',
          content: (
            <>
              <div className="lrn-predict">
                <span className="lrn-predict-label">PREDICT</span>
                <p>{`You stand on a hill. Which direction does the slope vector $\\nabla h$ point? Toward the valley or up the slope?`}</p>
              </div>
              <p>The defining property of the gradient is:</p>
              <div className="lrn-eq lrn-eq-display">
                <span>{`$$\\boxed{dU = \\nabla U \\cdot d\\vec{r}}$$`}</span>
              </div>
              <p>{`The dot product is largest when $d\\vec{r}$ points along $\\nabla U$. So $\\nabla U$ is the direction in which $U$ rises fastest. Step at right angles to it and $U$ does not change at all, which is why the gradient is perpendicular to surfaces of constant $U$.`}</p>
              <GradLevelCurves />
              <div className="lrn-compare">
                <div className="lrn-compare-col">
                  <span className="lrn-compare-title">Gradient</span>
                  <p>{`$\\nabla U$ points along the steepest rise in $U$ and is perpendicular to surfaces of constant $U$.`}</p>
                </div>
                <div className="lrn-compare-col">
                  <span className="lrn-compare-title">Force</span>
                  <p>{`$-\\nabla U$ points along the steepest drop in $U$. This is the direction the force pushes the particle.`}</p>
                </div>
              </div>
            </>
          )
        },
        {
          title: 'How to Find Out If a Force Is Conservative',
          content: (
            <>
              <div className="lrn-predict">
                <span className="lrn-predict-label">PREDICT</span>
                <p>{`You see a force $\\vec{F}(x, y, z)$. How can you tell, without trying every path, whether it is conservative?`}</p>
              </div>
              <p>
                Closed-loop test: a force is conservative if and only if its work around every
                closed loop is zero:
              </p>
              <div className="lrn-eq lrn-eq-display">
                <span>{`$$\\boxed{\\oint \\vec{F} \\cdot d\\vec{r} = 0}$$`}</span>
              </div>
              <ConservativeLoop />
              <p>{`Testing every closed loop is impossible. We need a local test. The curl, written $\\nabla \\times \\vec{F}$, measures how much the field swirls around each point. If a potential $U$ exists, then $\\frac{\\partial F_x}{\\partial y} = \\frac{\\partial F_y}{\\partial x}$, and the same equality of mixed partials holds for the other two pairs of components. (Mixed partials are the cross-derivatives, like $\\frac{\\partial F_x}{\\partial y}$.) Those three component conditions are exactly:`}</p>
              <div className="lrn-eq lrn-eq-display">
                <span>{`$$\\boxed{\\nabla \\times \\vec{F} = 0}$$`}</span>
              </div>
              <p>The curl bundles all three component equations into one vector statement:</p>
              <div className="lrn-eq">
                <span>{`$$\\nabla \\times \\vec{F} = \\begin{vmatrix} \\hat{i} & \\hat{j} & \\hat{k} \\\\ \\frac{\\partial}{\\partial x} & \\frac{\\partial}{\\partial y} & \\frac{\\partial}{\\partial z} \\\\ F_x & F_y & F_z \\end{vmatrix}$$`}</span>
              </div>
              <p>{`A force with zero curl is conservative on any region with no holes in it.`}</p>
              <h3>Worked Example: Running the Curl Test on Two Fields</h3>
              <p>{`Expand the determinant once, by minors along the top row. Each component pairs the two cross-derivatives:`}</p>
              <div className="lrn-eq">
                <span>{`$$\\nabla \\times \\vec{F} = \\left(\\frac{\\partial F_z}{\\partial y} - \\frac{\\partial F_y}{\\partial z}\\right)\\hat{i} + \\left(\\frac{\\partial F_x}{\\partial z} - \\frac{\\partial F_z}{\\partial x}\\right)\\hat{j} + \\left(\\frac{\\partial F_y}{\\partial x} - \\frac{\\partial F_x}{\\partial y}\\right)\\hat{k}$$`}</span>
              </div>
              <p>{`First field: $\\vec{F} = 2xy\\,\\hat{i} + x^2\\,\\hat{j}$, with no $z$ component. Read off the parts: $F_x = 2xy$, $F_y = x^2$, $F_z = 0$. Now fill in each bracket.`}</p>
              <ul className="lrn-list">
                <li>{`$\\hat{i}$ part: $\\frac{\\partial F_z}{\\partial y} - \\frac{\\partial F_y}{\\partial z} = 0 - 0 = 0$.`}</li>
                <li>{`$\\hat{j}$ part: $\\frac{\\partial F_x}{\\partial z} - \\frac{\\partial F_z}{\\partial x} = 0 - 0 = 0$.`}</li>
                <li>{`$\\hat{k}$ part: $\\frac{\\partial F_y}{\\partial x} - \\frac{\\partial F_x}{\\partial y} = 2x - 2x = 0$.`}</li>
              </ul>
              <p>{`Every part is zero, so $\\nabla \\times \\vec{F} = 0$. This field is conservative. You can check it has the potential $U = -x^2 y$, since $-\\frac{\\partial U}{\\partial x} = 2xy = F_x$ and $-\\frac{\\partial U}{\\partial y} = x^2 = F_y$.`}</p>
              <p>{`Second field: $\\vec{F} = -y\\,\\hat{i} + x\\,\\hat{j}$, again with no $z$ component. So $F_x = -y$, $F_y = x$, $F_z = 0$. The $\\hat{i}$ and $\\hat{j}$ parts vanish as before. The $\\hat{k}$ part is the one that matters:`}</p>
              <div className="lrn-eq">
                <span>{`$$\\frac{\\partial F_y}{\\partial x} - \\frac{\\partial F_x}{\\partial y} = \\frac{\\partial (x)}{\\partial x} - \\frac{\\partial (-y)}{\\partial y} = 1 - (-1) = 2$$`}</span>
              </div>
              <p>{`So $\\nabla \\times \\vec{F} = 2\\hat{k} \\neq 0$. This field swirls counterclockwise everywhere, and the curl test rules it out: it is not conservative and has no potential.`}</p>
              <div className="lrn-callout lrn-warning">
                <span className="lrn-callout-label">MISCONCEPTION</span>
                <p>Zero curl alone does not guarantee a conservative force.</p>
                <p>{`The region must also have no holes (the technical name for this is "simply connected"). For example, take the field outside an infinite current-carrying wire. It has zero curl everywhere it is defined. Yet a loop that wraps the wire still picks up nonzero work.`}</p>
              </div>
            </>
          )
        },
        {
          title: 'How the Curl Got Its Name',
          content: (
            <>
              <div className="lrn-predict">
                <span className="lrn-predict-label">PREDICT</span>
                <p>
                  A whirlpool spins. If you drop a tiny paddle wheel in it, will it rotate? What
                  does that have to do with curl?
                </p>
              </div>
              <p>{`Picture a body of water turning as one solid block, spinning steadily about its center at angular velocity $\\vec{\\omega}$. Every point moves with velocity $\\vec{v} = \\vec{\\omega} \\times \\vec{r}$. Take the curl of this field:`}</p>
              <div className="lrn-eq lrn-eq-display">
                <span>{`$$\\boxed{\\nabla \\times \\vec{v} = 2\\vec{\\omega}}$$`}</span>
              </div>
              <p>
                The curl comes out at twice the turning rate. That is the source of the name: the
                curl measures how strongly the field circulates around each point. A freely floating
                vane dropped into the flow turns at half this value.
              </p>
              <PaddleWheelCurl />
            </>
          )
        },
        {
          title: "Stokes' Theorem",
          content: (
            <>
              <div className="lrn-predict">
                <span className="lrn-predict-label">PREDICT</span>
                <p>
                  You want to add up infinitely many tiny loop integrals over a surface. Can the
                  result simplify to just the boundary loop?
                </p>
              </div>
              <p>{`Take a surface $S$ with boundary curve $C$. Cover $S$ with tiny oriented loops. The integral of $\\vec{F}$ around each tiny loop equals $(\\nabla \\times \\vec{F}) \\cdot \\Delta \\vec{A}$ for that patch. Where two loops share an edge, they traverse it in opposite directions, so those contributions cancel. Only the outer boundary survives.`}</p>
              <p>The result is Stokes' theorem:</p>
              <div className="lrn-eq lrn-eq-display">
                <span>{`$$\\boxed{\\oint_C \\vec{F} \\cdot d\\vec{r} = \\int_S (\\nabla \\times \\vec{F}) \\cdot d\\vec{A}}$$`}</span>
              </div>
              <StokesTheorem />
            </>
          )
        },
        {
          title: 'Central Fields',
          content: (
            <>
              <div className="lrn-predict">
                <span className="lrn-predict-label">PREDICT</span>
                <p>
                  A force always points straight toward or away from one fixed point, and its
                  strength depends only on the distance from that point. Is such a force always
                  conservative?
                </p>
              </div>

              <p>
                A <strong>central field</strong> is a force field built around one fixed center. Its
                direction always points toward or away from the center, and its strength depends
                only on the distance from it:
              </p>
              <div className="lrn-eq">{`$$\\vec{F}(\\vec{r}) = \\Phi(r)\\,\\hat{e}_r$$`}</div>
              <p>{`Here $\\hat{e}_r$ is the unit vector from the center $O$ to the particle, and $r = |\\vec{r}|$ is the distance from the center. Gravity around a star and the electric force around a point charge are the canonical examples.`}</p>
              <p>
                These last sections treat a single particle in a fixed central field, as the
                capstone that ties energy to angular momentum. The same ideas extend later to the
                full two-body problem and to scattering.
              </p>

              <div className="lrn-callout lrn-tip">
                <span className="lrn-callout-label">KEY RESULT</span>
                <p>{`Every central field is conservative. Its potential depends only on the distance: $U = U(r)$.`}</p>
                <p>{`The reason is geometric. A radial force is parallel to the line from center to particle. When the particle moves sideways relative to that line, the force is perpendicular to its motion and does no work. Only the radial part of the path contributes, so the work depends only on the starting and ending radii. In symbols, $\\int_l \\vec{F}\\cdot d\\vec{r}$ collapses to $\\int \\Phi(r)\\,dr$ for any path.`}</p>
              </div>
            </>
          )
        },
        {
          title: 'Angular Momentum Conservation in Central Fields',
          content: (
            <>
              <div className="lrn-predict">
                <span className="lrn-predict-label">PREDICT</span>
                <p>
                  A planet orbits a star. The star pulls the planet directly toward it. What should
                  happen to the planet's angular momentum over time?
                </p>
              </div>

              <div className="lrn-definition">
                <span className="lrn-definition-term">Angular Momentum</span>
                <div className="lrn-definition-desc">
                  <p>
                    For a particle of unit mass in a central field, the angular momentum vector is:
                  </p>
                  <p>{`$$\\vec{M} = \\vec{r} \\times \\dot{\\vec{r}}$$`}</p>
                  <p>{`The cross product gives a vector perpendicular to both $\\vec{r}$ and $\\dot{\\vec{r}}$. Its magnitude equals the area of the parallelogram those two vectors span.`}</p>
                </div>
              </div>

              <div className="lrn-proof">
                <span className="lrn-proof-header">
                  Angular Momentum Is Conserved in a Central Field
                </span>
                <div className="lrn-proof-step">
                  <span className="lrn-proof-step-num">1.</span>
                  <div className="lrn-proof-step-content">{`Differentiate $\\vec{M}$ in time using the product rule for cross products: $$\\dot{\\vec{M}} = \\dot{\\vec{r}} \\times \\dot{\\vec{r}} + \\vec{r} \\times \\ddot{\\vec{r}}$$`}</div>
                </div>
                <div className="lrn-proof-step">
                  <span className="lrn-proof-step-num">2.</span>
                  <div className="lrn-proof-step-content">{`The first term $\\dot{\\vec{r}}\\times\\dot{\\vec{r}} = 0$ because the cross product of any vector with itself is zero.`}</div>
                </div>
                <div className="lrn-proof-step">
                  <span className="lrn-proof-step-num">3.</span>
                  <div className="lrn-proof-step-content">{`The second term: in a central field $\\ddot{\\vec{r}} = \\Phi(r)\\,\\hat{e}_r$ points along $\\vec{r}$. The cross product of two parallel vectors is zero, so $\\vec{r}\\times\\ddot{\\vec{r}} = 0$.`}</div>
                </div>
                <div className="lrn-proof-step">
                  <span className="lrn-proof-step-num">4.</span>
                  <div className="lrn-proof-step-content">{`Both terms vanish, so $\\dot{\\vec{M}} = 0$. Therefore $\\vec{r}\\times\\dot{\\vec{r}}$ is constant in time, and angular momentum does not change.`}</div>
                </div>
              </div>

              <h3>Angular Momentum in Polar Coordinates</h3>
              <p>{`Use polar coordinates $(r, \\phi)$, with $\\hat{e}_r$ the unit vector pointing outward from the center and $\\hat{e}_\\phi$ the unit vector at right angles to it. The velocity splits into a radial part and a tangential part:`}</p>
              <div className="lrn-eq">{`$$\\dot{\\vec{r}} = \\dot{r}\\, \\hat{e}_r + r\\dot{\\phi}\\, \\hat{e}_\\phi$$`}</div>

              <PolarDecomp />

              <div className="lrn-definition">
                <span className="lrn-definition-term">Angular Momentum in Polar Coordinates</span>
                <div className="lrn-definition-desc">
                  <p>{`$$M = r^2 \\dot{\\phi}$$`}</p>
                  <p>{`This is the magnitude of $\\vec{M}$ when the motion stays in a plane. Because $M$ is conserved, $\\dot{\\phi} = \\frac{M}{r^2}$ at all times: at small $r$ the angle sweeps fast, at large $r$ it sweeps slowly.`}</p>
                </div>
              </div>

              <div className="lrn-definition">
                <span className="lrn-definition-term">Sectorial Velocity</span>
                <div className="lrn-definition-desc">
                  <p>{`Sectorial velocity $C = \\frac{dS}{dt}$ is the rate at which the line from the center to the particle sweeps out area.`}</p>
                  <p>{`$$C = \\frac{dS}{dt} = \\frac{1}{2} r^2 \\dot{\\phi} = \\frac{1}{2} M$$`}</p>
                  <p>{`Because $M$ is constant in any central field, $C$ is constant too. Equal areas are swept in equal times.`}</p>
                </div>
              </div>

              <h3>Kepler's Second Law</h3>
              <p>
                The conservation of {`$C$`} is Kepler's second law:{' '}
                <strong>equal areas are swept in equal times</strong>. The proof above used only
                that the force is central, not that it is gravity, so the law holds in every central
                field.
              </p>

              <KeplerEqualAreas />
            </>
          )
        },
        {
          title: 'Reducing a Central-Field Orbit to One Dimension',
          content: (
            <>
              <div className="lrn-predict">
                <span className="lrn-predict-label">PREDICT</span>
                <p>
                  A planet moves in a gravitational field. You know its angular momentum and total
                  energy. Can you tell whether its orbit is bounded or unbounded without solving the
                  full equations of motion?
                </p>
              </div>

              <h3>From Two Dimensions to One</h3>
              <p>
                Angular momentum conservation collapses a 2D central-field problem into a 1D radial
                problem. The vehicle for this reduction is the{' '}
                <strong>effective potential energy</strong>:
              </p>
              <div className="lrn-eq lrn-eq-display">{`$$V(r) = U(r) + \\frac{M^2}{2r^2}$$`}</div>
              <p>{`The extra term $\\frac{M^2}{2r^2}$ is the centrifugal term. It comes from the tangential kinetic energy, rewritten with $M = r^2\\dot{\\phi}$ so it depends only on $r$.`}</p>
              <p>{`As $r$ shrinks, this term blows up. That builds a barrier that keeps the particle away from the center whenever $M \\neq 0$. With the angular motion folded into $V$, the radial motion obeys a one-dimensional law:`}</p>
              <div className="lrn-eq">{`$$\\ddot{r} = -\\frac{\\partial V}{\\partial r}$$`}</div>
              <div className="lrn-callout lrn-warning">
                <span className="lrn-callout-label">CAREFUL</span>
                <p>{`$V(r)$ is not the system's full potential energy. It is the radial potential left after you fold the angular kinetic energy in through $M$.`}</p>
              </div>
              <p>{`Now read this $V(r)$ curve exactly like an energy diagram from before. The gap between $E$ and $V(r)$ is the radial kinetic energy. The places where $E$ meets $V(r)$ are the turning points of the radius.`}</p>

              <EffectivePotentialPlot />

              <div className="lrn-compare">
                <div className="lrn-compare-col">
                  <span className="lrn-compare-title">Bounded orbit</span>
                  <p>{`$E$ lies below $V(r)$ at large $r$. The radius is held between two turning points $r_{\\min}$ and $r_{\\max}$, and the orbit stays inside that band.`}</p>
                </div>
                <div className="lrn-compare-col">
                  <span className="lrn-compare-title">Unbounded orbit</span>
                  <p>{`$E$ lies above $V(r)$ for all large $r$. Nothing stops the particle from escaping to infinity.`}</p>
                </div>
              </div>

              <h3>The Inverse-Square Field: {`$U = -\\frac{k}{r}$`}</h3>
              <p>{`Take the inverse-square attraction with potential $U = -\\frac{k}{r}$. For gravity, $k = GMm$. For two opposite point charges, $k$ stands for the Coulomb coupling. The constant has nothing to do with a spring constant. It is just the coupling strength of the inverse-square law.`}</p>
              <p>{`Solving the radial law for this $U$ gives a closed-form orbit shape: every path is a conic section, a circle, ellipse, parabola, or hyperbola. The total energy $E$ alone decides which one:`}</p>
              <div className="lrn-definition">
                <span className="lrn-definition-term">Orbit Types by Energy</span>
                <div className="lrn-definition-desc">
                  <ul className="lrn-list">
                    <li>
                      <strong>E &lt; 0:</strong> ellipse, a bounded orbit. Earth satellites and
                      planets.
                    </li>
                    <li>
                      <strong>E = 0:</strong> parabola, the borderline that just barely escapes.
                    </li>
                    <li>
                      <strong>E &gt; 0:</strong> hyperbola, escapes to infinity. Voyager-style
                      flybys.
                    </li>
                  </ul>
                </div>
              </div>
              <p>
                We state the conic-section shape and the period law as results here. Their full
                derivation, the focal orbit equation and the period-axis relation that follows from
                it, is the work of the Central-Force Motion topic, which builds the complete orbit
                from this same effective potential.
              </p>
            </>
          )
        }
      ]
    },
    practice: [
      {
        q: 'What is the work-energy theorem in one dimension?',
        a: `It says the change in kinetic energy equals the work done. The math form is $\\frac{1}{2}mv_b^2 - \\frac{1}{2}mv_a^2 = \\int_{x_a}^{x_b} F(x)\\, dx$. The left side is the change in $K$. The right side is the integral of force over distance.`
      },
      {
        q: 'A ball is dropped from height $h$. Use the work-energy theorem to find the speed at the ground.',
        a: `Apply $\\frac{1}{2}mv^2 - 0 = \\int_h^0 (-mg)\\, dx = mgh$. Gravity does positive work because the ball moves down with the force. So $v = \\sqrt{2gh}$.`
      },
      {
        q: 'A satellite is launched from Earth at twice the escape velocity. What is its speed very far from Earth?',
        a: `From the escape-velocity definition, $\\frac{1}{2}mv_e^2 = \\frac{GMm}{R_e}$. Launch speed is $2v_e$, so kinetic energy at launch is $\\frac{1}{2}m(2v_e)^2 = 2mv_e^2$. Total energy at the surface is $E = 2mv_e^2 - \\frac{1}{2}mv_e^2 = \\frac{3}{2}mv_e^2$. At infinity, $U = 0$ and $E = \\frac{1}{2}mv_\\infty^2$. Setting the two expressions for $E$ equal: $v_\\infty = v_e\\sqrt{3} \\approx 1.9 \\times 10^4$ m/s.`
      },
      {
        q: `Why does multiplying $m\\, \\frac{dv}{dt} = F(x)$ by $v$ make the equation integrable?`,
        a: `Because $v = \\frac{dx}{dt}$, so the right side becomes $F(x)\\, \\frac{dx}{dt}$. Integrating over time turns this into $\\int F(x)\\, dx$, a pure position integral. The left side becomes $\\frac{d}{dt}\\left(\\frac{1}{2}mv^2\\right)$. Both sides become things you can integrate, even when $F$ depends on position not time.`
      },
      {
        q: `A force $\\vec{F} = A(xy\\hat{i} + y^2\\hat{j})$ is applied to a particle moving from $(0,0)$ to $(1,1)$. Will work along the straight diagonal differ from work along the L-shaped path?`,
        a: `Yes, the work will differ because this force is not conservative. Along the L-path through $(1,0)$, work is $\\frac{A}{3}$. Along the diagonal $y = x$, work is $\\frac{2A}{3}$. Different paths give different work, which means the force fails the conservative test.`
      },
      {
        q: 'Why can constraint forces, like the tension in a pendulum string, be ignored in energy problems?',
        a: `Constraint forces are always perpendicular to motion. Tension in a string keeps the bob on a circle. The bob's velocity is tangent to the circle. The dot product $\\vec{F}\\cdot d\\vec{r}$ is zero. So constraint forces do no work.`
      },
      {
        q: 'State the definition of potential energy and explain why only differences matter.',
        a: `$U(\\vec{r}_b) - U(\\vec{r}_a) = -\\int_a^b \\vec{F}\\cdot d\\vec{r}$. Only differences appear in this defining equation. So adding a constant to $U$ everywhere does not change physics. We pick the zero point wherever convenient.`
      },
      {
        q: `Derive the gravitational potential energy $U(r) = -\\frac{GMm}{r}$ from the inverse-square law.`,
        a: `Force is $\\vec{F} = -\\frac{GMm}{r^2}\\hat{r}$. Set $U = 0$ at infinity. Then $U(r) = -\\int_\\infty^r F\\, dr' = -\\int_\\infty^r \\left(-\\frac{GMm}{r'^2}\\right) dr'$. Compute: $U(r) = -\\frac{GMm}{r}$.`
      },
      {
        q: `A particle has total energy $E$ in potential $U(x)$. Where is it forbidden from being?`,
        a: `Wherever $U(x) > E$. Because kinetic energy $K = E - U$ must be nonnegative (it equals $\\frac{1}{2}mv^2$). If $U$ exceeds $E$, then $K$ would be negative, which is impossible.`
      },
      {
        q: 'Why does every smooth potential look like a spring near a minimum?',
        a: `Taylor expand: $U(r) \\approx U(r_0) + U'(r_0)(r - r_0) + \\frac{1}{2}U''(r_0)(r - r_0)^2 + \\ldots$. At a minimum, $U'(r_0) = 0$. The leading variation is the quadratic $\\frac{1}{2}U''(r_0)(r - r_0)^2$, which is exactly the spring energy form.`
      },
      {
        q: 'Why is friction nonconservative?',
        a: `Friction always opposes motion. Going forward, friction does negative work. Going backward over the same path, friction again does negative work. So a closed loop produces total negative work, not zero. This violates the conservative requirement that $\\oint \\vec{F}\\cdot d\\vec{r} = 0$.`
      },
      {
        q: 'State the relation between force and potential energy in 3D.',
        a: `$\\vec{F} = -\\nabla U$, where $\\nabla U = \\hat{i}\\frac{\\partial U}{\\partial x} + \\hat{j}\\frac{\\partial U}{\\partial y} + \\hat{k}\\frac{\\partial U}{\\partial z}$. Each force component equals the negative partial of $U$ along that axis.`
      },
      {
        q: 'State the closed-loop test for a conservative force.',
        a: `A force is conservative if and only if $\\oint \\vec{F}\\cdot d\\vec{r} = 0$ for every closed loop in its domain. This is equivalent to saying work depends only on endpoints, not on the path.`
      },
      {
        q: 'Define the curl of a force and explain what zero curl means.',
        a: `The curl is $\\nabla \\times \\vec{F}$, computed as a determinant with $\\hat{i}, \\hat{j}, \\hat{k}$ in the first row, partial derivatives in the second, and force components in the third. Zero curl in a simply connected region means the force is conservative everywhere there.`
      },
      {
        q: `State Stokes' theorem and explain what it relates.`,
        a: `$\\oint_C \\vec{F}\\cdot d\\vec{r} = \\int_S (\\nabla \\times \\vec{F})\\cdot d\\vec{A}$. The line integral around a closed boundary $C$ equals the surface integral of the curl over any surface $S$ bounded by $C$.`
      },
      {
        q: 'Why is energy a more powerful concept than just velocity for solving mechanics problems?',
        a: 'Energy is a single scalar, while velocity is a vector with three components. Energy conservation gives one equation that automatically combines all directions. Constraint forces (like normal forces, tensions) drop out because they do no work. Many problems become algebra instead of differential equations.'
      },
      {
        q: "A planet orbits the sun. No tangential force acts, only radial gravity. What happens to the planet's angular momentum $\\vec{M} = \\vec{r}\\times\\dot{\\vec{r}}$ over time? Explain why.",
        a: '$\\vec{M}$ stays constant. Compute $\\dot{\\vec{M}} = \\dot{\\vec{r}}\\times\\dot{\\vec{r}} + \\vec{r}\\times\\ddot{\\vec{r}}$. The first term is zero because any vector crossed with itself is zero. The second term is zero because $\\ddot{\\vec{r}}$ points along $\\vec{r}$ in a central field, making the cross product zero. Both terms vanish, so $\\frac{d\\vec{M}}{dt} = 0$.'
      },
      {
        q: "State what 'conservative force field' means. Give one condition equivalent to it.",
        a: 'A force field is conservative if the work it does on a particle depends only on the start and end points, not the path taken. An equivalent condition: there exists a scalar potential $U$ such that $\\vec{F} = -\\nabla U$. In this case, the total energy $T + U$ is conserved along every trajectory.'
      },
      {
        q: 'What is the effective potential $V(r)$ in a central field problem? Why does it include the term $\\frac{M^2}{2r^2}$?',
        a: '$V(r) = U(r) + \\frac{M^2}{2r^2}$. The term $\\frac{M^2}{2r^2}$ comes from the tangential kinetic energy. Since $M = r^2\\dot{\\phi}$, the tangential term is $\\frac{1}{2}r^2\\dot{\\phi}^2 = \\frac{M^2}{2r^2}$. This acts as a centrifugal barrier, preventing the particle from reaching $r = 0$ when $M \\neq 0$.'
      },
      {
        q: "A planet's orbit has semi-major axis $a = 4$ AU. Using Kepler's third law $T = \\frac{2\\pi a^{\\tfrac{3}{2}}}{\\sqrt{k}}$, compare its period to Earth's orbital distance ($T_{\\text{Earth}} = 1$ year, $a_{\\text{Earth}} = 1$ AU).",
        a: "$T \\propto a^{\\tfrac{3}{2}}$, so $\\frac{T}{T_{\\text{Earth}}} = \\left(\\frac{a}{a_{\\text{Earth}}}\\right)^{\\tfrac{3}{2}} = 4^{\\tfrac{3}{2}} = (4^{\\tfrac{1}{2}})^3 = 2^3 = 8$. The planet's period is 8 years."
      },
      {
        q: 'A central field has $U = ar^2$. Is angular momentum conserved? Explain why.',
        a: 'Yes. The field is central, so the force points along $\\vec{r}$ at all times. Then $\\ddot{\\vec{r}}$ is parallel to $\\vec{r}$, which makes $\\vec{r}\\times\\ddot{\\vec{r}} = 0$. So $\\dot{\\vec{M}} = \\vec{r}\\times\\ddot{\\vec{r}} = 0$, and $\\vec{M}$ stays constant. This holds for every central field, whatever the shape of $U(r)$.'
      },
      {
        q: 'A Kepler orbit has energy $E = -2$ J and angular momentum $M = 3$ kg·m²/s. The gravitational parameter is $k = 12$ kg·m³/s². The orbit obeys $a = \\frac{k}{2|E|}$, $p = \\frac{M^2}{k}$, and $e = \\sqrt{1 + \\frac{2EM^2}{k^2}}$. Find the semi-major axis $a$, the parameter $p$, and the eccentricity $e$.',
        a: 'Semi-major axis: $a = \\frac{k}{2|E|} = \\frac{12}{4} = 3$ m. Parameter: $p = \\frac{M^2}{k} = \\frac{9}{12} = 0.75$ m. Eccentricity: $e = \\sqrt{1 + \\frac{2EM^2}{k^2}} = \\sqrt{1 + \\frac{2(-2)(9)}{144}} = \\sqrt{1 - 0.25} = \\sqrt{0.75} \\approx 0.866$. Since $E < 0$, the orbit is an ellipse.'
      },
      {
        q: 'For a Kepler orbit, explain why the satellite moves slowly near apocenter (the farthest point) and quickly near pericenter (the closest point).',
        a: 'Angular momentum $M = r^2\\dot{\\phi}$ is constant. At apocenter, $r$ is largest, so $\\dot{\\phi} = \\frac{M}{r^2}$ is smallest. At pericenter, $r$ is smallest, so $\\dot{\\phi}$ is largest. Energy conservation reinforces this: at pericenter the satellite has maximum speed; at apocenter, minimum speed.'
      },
      {
        q: 'The angular momentum $M = r^2\\dot{\\phi}$ in polar coordinates. Show that $M$ equals twice the sectorial velocity $C = \\frac{dS}{dt}$.',
        a: "In time $dt$, the position vector sweeps area $dS = \\frac{1}{2} r \\cdot (r\\, d\\phi) = \\frac{1}{2} r^2 d\\phi$. So $\\frac{dS}{dt} = \\frac{1}{2} r^2 \\dot{\\phi} = \\frac{M}{2}$. Therefore $C = \\frac{M}{2}$, or $M = 2C$. Since $M$ is constant in any central field, $C$ is also constant: this is Kepler's second law."
      },
      {
        q: 'Gravity is a central conservative field. Why does this also apply to the electric field of a stationary point charge?',
        a: 'The electric field of a point charge is $\\vec{F} = \\frac{kq}{r^2}\\hat{r}$: magnitude depends only on $r$, direction is always radial. This is a central field. So it is conservative, it has a potential $U = \\frac{kq}{r}$, and angular momentum is conserved for a test charge moving in it. The same orbit analysis (ellipses, parabolas, hyperbolas) applies.'
      }
    ],
    reference: {
      category: 'Quick Reference',
      title: 'Work, Energy, and Conservative Force Fields',
      sections: [
        {
          title: 'Work and the Work-Energy Theorem',
          content: (
            <>
              <div className="ref-formula">
                <p>
                  <strong>Work-energy theorem (1D)</strong>
                </p>
                <div className="lrn-eq">{`$$W_{ba} = K_b - K_a = \\int_{x_a}^{x_b} F(x)\\, dx$$`}</div>
                <p>When to use: 1D position-dependent force, want speed at two points.</p>
              </div>
              <div className="ref-formula">
                <p>
                  <strong>Work-energy theorem (3D)</strong>
                </p>
                <div className="lrn-eq">{`$$W_{ba} = K_b - K_a = \\int_{r_a}^{r_b} \\vec{F}\\cdot d\\vec{r}$$`}</div>
                <p>When to use: 3D line integral for work along a path.</p>
              </div>
              <div className="ref-formula">
                <p>
                  <strong>Kinetic energy</strong>
                </p>
                <div className="lrn-eq">{`$$K = \\frac{1}{2}mv^2$$`}</div>
              </div>
              <div className="ref-formula">
                <p>
                  <strong>Escape velocity</strong>
                </p>
                <div className="lrn-eq">{`$$v_{escape} = \\sqrt{2gR_e} \\approx 1.1 \\times 10^4\\, \\text{m/s}$$`}</div>
                <p>When to use: Minimum launch speed to leave Earth's gravity.</p>
              </div>
            </>
          )
        },
        {
          title: 'Potential Energy and Conservation',
          content: (
            <>
              <div className="ref-formula">
                <p>
                  <strong>Potential energy (definition)</strong>
                </p>
                <div className="lrn-eq">{`$$U_b - U_a = -\\int_a^b \\vec{F}\\cdot d\\vec{r}$$`}</div>
                <p>{`When to use: Define $U$ for a conservative force.`}</p>
              </div>
              <div className="ref-formula">
                <p>
                  <strong>Energy conservation (mechanical)</strong>
                </p>
                <div className="lrn-eq">{`$$K_a + U_a = K_b + U_b = E$$`}</div>
                <p>When to use: Two-point comparison for purely conservative system.</p>
              </div>
              <div className="ref-formula">
                <p>
                  <strong>Force from potential (1D)</strong>
                </p>
                <div className="lrn-eq">{`$$F(x) = -\\frac{dU}{dx}$$`}</div>
                <p>{`When to use: Get force from known $U(x)$.`}</p>
              </div>
              <div className="ref-formula">
                <p>
                  <strong>Force from potential (3D)</strong>
                </p>
                <div className="lrn-eq">{`$$\\vec{F} = -\\nabla U$$`}</div>
                <p>When to use: 3D conservative force from scalar potential.</p>
              </div>
              <div className="ref-formula">
                <p>
                  <strong>Common potentials</strong>
                </p>
                <div className="lrn-eq">{`$$U_{gravity} = mgh,\\quad U_{\\frac{1}{r}} = -\\frac{A}{r},\\quad U_{spring} = \\tfrac{1}{2}k(r-r_0)^2$$`}</div>
                <p>{`The constant $A$ is $GMm$ for gravity and $-kq_1q_2$ for two opposite charges; $k$ in the spring formula is the spring constant.`}</p>
              </div>
              <div className="ref-formula">
                <p>
                  <strong>Energy with nonconservative work</strong>
                </p>
                <div className="lrn-eq">{`$$E_b - E_a = W_{ba}^{NC}$$`}</div>
                <p>When to use: Friction, drag, or any dissipative force present.</p>
              </div>
            </>
          )
        },
        {
          title: 'Conservative Force Test (Gradient and Curl)',
          content: (
            <>
              <div className="ref-formula">
                <p>
                  <strong>Gradient</strong>
                </p>
                <div className="lrn-eq">{`$$\\nabla U = \\hat{i}\\, \\frac{\\partial U}{\\partial x} + \\hat{j}\\, \\frac{\\partial U}{\\partial y} + \\hat{k}\\, \\frac{\\partial U}{\\partial z}$$`}</div>
              </div>
              <div className="ref-formula">
                <p>
                  <strong>Gradient property</strong>
                </p>
                <div className="lrn-eq">{`$$dU = \\nabla U \\cdot d\\vec{r}$$`}</div>
                <p>{`When to use: Relate small change in $U$ to step direction.`}</p>
              </div>
              <div className="ref-formula">
                <p>
                  <strong>Closed-loop test</strong>
                </p>
                <div className="lrn-eq">{`$$\\oint \\vec{F}\\cdot d\\vec{r} = 0$$`}</div>
                <p>
                  When to use: Force is conservative if and only if every closed loop integral is
                  zero.
                </p>
              </div>
              <div className="ref-formula">
                <p>
                  <strong>Curl (determinant form)</strong>
                </p>
                <div className="lrn-eq">{`$$\\nabla \\times \\vec{F} = \\begin{vmatrix} \\hat{i} & \\hat{j} & \\hat{k} \\\\ \\partial_x & \\partial_y & \\partial_z \\\\ F_x & F_y & F_z \\end{vmatrix}$$`}</div>
              </div>
              <div className="ref-formula">
                <p>
                  <strong>Stokes' theorem</strong>
                </p>
                <div className="lrn-eq">{`$$\\oint_C \\vec{F}\\cdot d\\vec{r} = \\int_S (\\nabla \\times \\vec{F})\\cdot d\\vec{A}$$`}</div>
                <p>When to use: Convert closed loop integral to surface integral of curl.</p>
              </div>
            </>
          )
        },
        {
          title: 'Conservative Fields and Central Fields',
          content: (
            <>
              <div className="lrn-definition">
                <span className="lrn-definition-term">Conservative Force</span>
                <div className="lrn-definition-desc">
                  <p>{`$$\\vec{F} = -\\nabla U, \\quad W = \\int_l \\vec{F}\\cdot d\\vec{r}$$`}</p>
                  <p>
                    <strong>When to use:</strong> Any system where work depends only on endpoints;
                    lets you invoke total-energy conservation.
                  </p>
                </div>
              </div>
              <div className="lrn-definition">
                <span className="lrn-definition-term">Central Field</span>
                <div className="lrn-definition-desc">
                  <p>{`$$\\vec{F}(\\vec{r}) = \\Phi(r)\\,\\hat{e}_r,\\quad U = U(r)$$`}</p>
                  <p>
                    <strong>When to use:</strong> Any rotationally symmetric force around a fixed
                    center; guarantees angular momentum conservation and planar orbits.
                  </p>
                </div>
              </div>
            </>
          )
        },
        {
          title: 'Angular Momentum (1 Particle)',
          content: (
            <>
              <div className="lrn-definition">
                <span className="lrn-definition-term">Angular Momentum Vector</span>
                <div className="lrn-definition-desc">
                  <p>{`$$\\vec{M} = \\vec{r}\\times\\dot{\\vec{r}}$$`}</p>
                  <p>
                    <strong>When to use:</strong> Whenever the force is central; {`$\\vec{M}$`} is
                    the conserved quantity that fixes the orbit plane.
                  </p>
                </div>
              </div>
              <div className="lrn-definition">
                <span className="lrn-definition-term">Angular Momentum in Polar Coordinates</span>
                <div className="lrn-definition-desc">
                  <p>{`$$M = r^2 \\dot{\\phi}, \\quad \\dot{\\vec{r}} = \\dot{r}\\,\\hat{e}_r + r\\dot{\\phi}\\,\\hat{e}_\\phi$$`}</p>
                  <p>
                    <strong>When to use:</strong> Working in polar coordinates; lets you swap
                    angular kinetic energy for the centrifugal term.
                  </p>
                </div>
              </div>
              <div className="lrn-definition">
                <span className="lrn-definition-term">
                  Sectorial Velocity (Kepler's Second Law)
                </span>
                <div className="lrn-definition-desc">
                  <p>{`$$C = \\frac{dS}{dt} = \\tfrac{1}{2}r^2\\dot{\\phi} = \\tfrac{1}{2}M = \\text{const}$$`}</p>
                  <p>
                    <strong>When to use:</strong> Any central field problem; gives equal areas in
                    equal times directly.
                  </p>
                </div>
              </div>
            </>
          )
        },
        {
          title: 'Kepler Problem: $U = -\\frac{k}{r}$',
          content: (
            <>
              <div className="lrn-definition">
                <span className="lrn-definition-term">Effective Radial Potential</span>
                <div className="lrn-definition-desc">
                  <p>{`$$V(r) = U(r) + \\frac{M^2}{2r^2}$$`}</p>
                  <p>{`$V(r)$ is not the system's full potential energy: it is the radial potential left after you fold the angular kinetic energy in via $M$.`}</p>
                  <p>
                    <strong>When to use:</strong> Reducing central-field 2D motion to a 1D radial
                    problem; finding turning points {`$r_{\\min}$`} and {`$r_{\\max}$`}.
                  </p>
                </div>
              </div>
              <div className="lrn-definition">
                <span className="lrn-definition-term">Focal Equation</span>
                <div className="lrn-definition-desc">
                  <p>{`$$r = \\frac{p}{1 + e\\cos\\phi}, \\quad p = \\frac{M^2}{k}, \\quad e = \\sqrt{1 + \\frac{2EM^2}{k^2}}$$`}</p>
                  <p>
                    <strong>When to use:</strong> Reading the orbit shape directly for any
                    inverse-square attraction, given energy and angular momentum.
                  </p>
                </div>
              </div>
              <div className="lrn-definition">
                <span className="lrn-definition-term">Semi-Major Axis and Kepler's Third Law</span>
                <div className="lrn-definition-desc">
                  <p>{`$$a = \\frac{k}{2|E|}, \\quad T = \\frac{2\\pi a^{\\tfrac{3}{2}}}{\\sqrt{k}}$$`}</p>
                  <p>
                    <strong>When to use:</strong> Predicting the period of any closed Kepler orbit
                    from its semi-major axis alone.
                  </p>
                </div>
              </div>
              <div className="lrn-definition">
                <span className="lrn-definition-term">Orbit Types</span>
                <div className="lrn-definition-desc">
                  <ul className="lrn-list">
                    <li>
                      <strong>E &lt; 0, e &lt; 1:</strong> Ellipse (bounded)
                    </li>
                    <li>
                      <strong>E = 0, e = 1:</strong> Parabola (barely escapes)
                    </li>
                    <li>
                      <strong>E &gt; 0, e &gt; 1:</strong> Hyperbola (escapes)
                    </li>
                  </ul>
                </div>
              </div>
            </>
          )
        },
        {
          title: 'Small Oscillations and Collisions',
          content: (
            <>
              <div className="ref-formula">
                <p>
                  <strong>Effective spring constant</strong>
                </p>
                <div className="lrn-eq">{`$$k_{eff} = \\left.\\frac{d^2U}{dr^2}\\right|_{r_0}$$`}</div>
                <p>When to use: Frequency of small oscillations near minimum.</p>
              </div>
              <div className="ref-formula">
                <p>
                  <strong>Reduced mass</strong>
                </p>
                <div className="lrn-eq">{`$$\\mu = \\frac{m_1 m_2}{m_1 + m_2}$$`}</div>
                <p>{`When to use: Replace a two-body relative motion with a single particle of mass $\\mu$.`}</p>
              </div>
              <div className="ref-formula">
                <p>
                  <strong>Momentum conservation in collision</strong>
                </p>
                <div className="lrn-eq">{`$$m_1\\vec{v}_1 + m_2\\vec{v}_2 = m_1\\vec{v}_1' + m_2\\vec{v}_2'$$`}</div>
                <p>When to use: Any collision with no external impulses.</p>
              </div>
              <div className="ref-formula">
                <p>
                  <strong>Power</strong>
                </p>
                <div className="lrn-eq">{`$$P = \\frac{dW}{dt} = \\vec{F}\\cdot \\vec{v}$$`}</div>
                <p>When to use: Rate of energy transfer or motor specifications.</p>
              </div>
            </>
          )
        }
      ]
    },
    customCss: `.MafsView { --mafs-bg: transparent; --mafs-fg: var(--ink-default); --mafs-line-color: var(--ink-hairline); }`
  }
  return <LearningTemplate config={config} />
}
