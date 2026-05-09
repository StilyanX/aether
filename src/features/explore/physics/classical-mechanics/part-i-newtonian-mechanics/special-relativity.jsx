import { LearningTemplate } from '../../../../../components/learning/learning-template'
import {
  GammaVsBeta,
  LightCone,
  LightClock,
  LengthContraction,
  Michelson,
  RelDoppler,
  PairProduction,
  TwinParadox,
  RelMass,
  LorentzBoostInteractive
} from '../../../../../components/viz/physics-viz/modules'

export default function SpecialRelativityCoda() {
  const config = {
    cssPrefix: 'sr',
    source: 'An Introduction to Mechanics - Kleppner & Kolenkow',
    documentTitle: 'Special Relativity - AETHER',
    learning: {
      groupTitle: 'Part I: Newtonian Mechanics',
      category: 'Module 10',
      title: 'Special Relativity (Coda)',
      subtitle:
        'Space and time mix together once observers move relative to each other. The faster the relative motion, the stronger the mixing.',
      sections: [
        <>
          <h2>{`The Need for a New Mode of Thought`}</h2>
          <p>{`By 1900, Newtonian mechanics described every known mechanical experiment. Maxwell's equations described light. The two did not agree. Maxwell predicted light moves at speed $c$ in every frame. Newton predicted that velocities add: a light pulse should travel at $c + v$ in a frame moving at $-v$. One of them had to be wrong.`}</p>
          <p>{`Mach pushed the problem deeper. He pointed out that nobody ever measures absolute space. We only measure positions of bodies relative to other bodies. If absolute space cannot be observed, it cannot be physics.`}</p>
          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>{`Maxwell's equations give the speed of light as $c = \\frac{1}{\\sqrt{\\mu_0 \\epsilon_0}}$, where $\\mu_0$ and $\\epsilon_0$ are fixed constants that describe how empty space carries magnetic and electric fields.`}</p>
            <p>{`Those constants are the same for every observer. So $c$ is the same for every observer. Newton said every speed depends on the observer. The two views cannot both hold; one must give way.`}</p>
          </div>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>{`Light was thought to travel through a medium called the ether. Earth orbits the Sun at 30 km/s, so an ether wind should blow past Earth and reverse direction with the seasons. Will an interferometer detect that wind?`}</p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>{`The interferometer should see a fringe shift as Earth's velocity through the ether changes over the year. Michelson and Morley built such a device. It saw nothing. That null result is the evidence that forced Einstein's postulates.`}</p>
            </details>
          </div>
        </>,
        <>
          <h2>{`The Michelson-Morley Experiment`}</h2>
          <p>{`If the ether existed, Earth's motion through it would create a wind. Light moving with the wind should arrive faster than light moving against it. Michelson and Morley built the most precise experiment of its day to look for that difference.`}</p>
          <h3>{`How the experiment works`}</h3>
          <p>{`A single beam of light hits a half-silvered mirror that splits it in two. One half travels along Earth's direction of motion, bounces off a mirror at distance $l$, and returns. The other half travels perpendicular to the motion, bounces off a second mirror at the same distance, and returns. The two beams are recombined and create an interference pattern. Any timing difference between the two paths shows up as a shift in the fringes.`}</p>
          <p>{`The predicted fringe shift, when the apparatus is rotated by 90 degrees, is:`}</p>
          <div className="lrn-eq">
            <span>{`$$N = \\frac{2 l}{\\lambda} \\frac{v^2}{c^2}$$`}</span>
          </div>
          <p>{`Here $l$ is the arm length, $\\lambda$ is the wavelength of the light, and $v$ is Earth's speed through the supposed ether.`}</p>
          <h3>{`Where the formula comes from`}</h3>
          <p>{`Take the arm pointed along Earth's motion. On the way out, light fights the wind and moves at $c - v$ relative to the apparatus. On the way back, the wind helps it and it moves at $c + v$. The round-trip time is:`}</p>
          <div className="lrn-eq">
            <span>{`$$t_\\parallel = \\frac{l}{c-v} + \\frac{l}{c+v} = \\frac{2l}{c} \\cdot \\frac{1}{1 - \\frac{v^2}{c^2}}$$`}</span>
          </div>
          <p>{`For the perpendicular arm, the apparatus slides sideways while the light is in flight, so the light travels along a diagonal. In half the round-trip time, light covers a distance $\\frac{ct}{2}$ along that diagonal, the apparatus covers $\\frac{vt}{2}$ sideways, and the arm length $l$ remains fixed. Pythagoras gives $\\left(\\frac{ct}{2}\\right)^2 = \\left(\\frac{vt}{2}\\right)^2 + l^2$, which solves for:`}</p>
          <div className="lrn-eq">
            <span>{`$$t_\\perp = \\frac{2l}{c} \\cdot \\frac{1}{\\sqrt{1 - \\frac{v^2}{c^2}}}$$`}</span>
          </div>
          <p>{`Subtract the two and keep only the leading term in $\\frac{v^2}{c^2}$:`}</p>
          <div className="lrn-eq">
            <span>{`$$\\Delta t = t_\\parallel - t_\\perp \\approx \\frac{l v^2}{c^3}$$`}</span>
          </div>
          <p>{`The extra path the slower beam covers is $c \\Delta t = \\frac{l v^2}{c^2}$. Rotating the whole apparatus by 90 degrees swaps which arm is which, doubling the change to $\\frac{2 l v^2}{c^2}$. Dividing by the wavelength gives the fringe count above.`}</p>
          <h3>{`The null result`}</h3>
          <p>{`They saw no shift. Not at any time of day, not at any time of year. The ether had no detectable wind. Either Earth dragged the ether perfectly along with it (a contrivance with no independent support), or the ether did not exist. Both options broke physics as it stood.`}</p>
          <Michelson />
          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>{`The path difference scales with $\\frac{v^2}{c^2}$, not $\\frac{v}{c}$, because the two trips through the longitudinal arm partly cancel. Light gains time fighting the wind and loses time being helped by it.`}</p>
            <p>{`The two effects almost balance. What is left is the tiny second-order leftover quadratic in $\\frac{v}{c}$.`}</p>
          </div>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>{`Take the null result at face value: the speed of light is the same in every frame. What does that force you to give up about time intervals and lengths measured by different observers?`}</p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>{`If everyone measures the same speed for the same light pulse, then any two observers in relative motion must disagree about the time it took and the distance it travelled. Otherwise the ratio (distance / time) could not stay fixed. Time intervals and lengths must depend on the observer.`}</p>
            </details>
          </div>
        </>,
        <>
          <h2>{`The Postulates of Special Relativity`}</h2>
          <p>{`In 1905, Einstein took the null result at face value and built the whole theory on two short statements. Together they swept away the ether and absolute time.`}</p>
          <h3>{`The two postulates`}</h3>
          <ol className="lrn-list">
            <li>
              <strong>{`Principle of relativity.`}</strong>
              {` Every law of physics looks the same in every inertial frame. (An inertial frame is any reference frame moving at constant velocity.)`}
            </li>
            <li>
              <strong>{`Constancy of the speed of light.`}</strong>
              {` Every inertial observer measures the same value $c$ for the speed of light in vacuum, no matter how the source or the observer moves.`}
            </li>
          </ol>
          <p>{`The first postulate goes back to Galileo: a sailor below deck cannot tell whether the ship is at rest or gliding through calm water. The second is radical. It singles out light, and it forces space and time to bend around it.`}</p>
          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>{`If two observers in relative motion measured different speeds for the same light pulse, Maxwell's equations would not produce the same value of $c$ in both frames.`}</p>
            <p>{`That would break the first postulate, which insists every law looks the same in every inertial frame. The only way to keep both postulates is to make $c$ a universal constant.`}</p>
          </div>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>{`Two scientists in trains moving at different velocities watch the same firecracker explode. Each writes down where and when the event happened in their own coordinates. What rule should connect their two records?`}</p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>{`The old Galilean rule (subtract a constant velocity from $x$ and leave $t$ alone) keeps everyone's clocks synchronized but breaks the second postulate. We need a new rule that mixes $x$ and $t$ in just the right way to keep $c$ fixed in both frames. That rule is the Lorentz transformation, derived in the next two sections.`}</p>
            </details>
          </div>
        </>,
        <>
          <h2>{`Galilean Transformations`}</h2>
          <p>{`Before Einstein, two observers in relative motion converted between each other's coordinates with these rules. Frame $S'$ moves at constant velocity $v$ along the $x$-axis of frame $S$:`}</p>
          <div className="lrn-eq">
            <span>{`$$x' = x - v t, \\quad y' = y, \\quad z' = z, \\quad t' = t$$`}</span>
          </div>
          <p>{`Time was treated as absolute. Both observers shared a single universal clock. To get a velocity in one frame, you simply added or subtracted the relative speed of the frames.`}</p>
          <p>{`These rules work beautifully for everyday objects, where $v$ is tiny compared to $c$. They fail for fast particles and for light itself.`}</p>
          <h3>{`Worked example: Newtonian gravity is Galilean invariant`}</h3>
          <p>{`Newton's law of gravity is $\\vec F = -\\frac{G M m \\hat r}{r^2}$, where $\\vec r$ is the vector between the two bodies. Under a Galilean transformation, the relative position $\\vec r$ does not change at all: both frames see the same separation between the same two masses. The forces are identical, and the accelerations they produce are identical, so Newton's second law looks the same to both observers. This is why pre-Einstein physics worked: the laws of motion are unchanged when you switch between any two inertial frames.`}</p>
          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>{`Newton's second law is $F = m\\ddot{x}$, which depends on the second time derivative of position.`}</p>
            <p>{`Adding a constant velocity to every $x$ changes the first derivative $\\dot{x}$ but leaves $\\ddot{x}$ untouched. Forces and accelerations look identical in any frame moving at constant velocity.`}</p>
          </div>
          <h3>{`Worked example: a light pulse under Galilean rules`}</h3>
          <p>{`Now point a flashlight in frame $S$. The pulse moves at $c$. Frame $S'$ glides past at $v$ along the same axis. Galilean rules predict the pulse moves at $c - v$ in $S'$. Maxwell's equations and the Michelson-Morley experiment insist it moves at exactly $c$. The two predictions cannot both be true. Either Maxwell is wrong, or the Galilean transformation is. Experiment sided with Maxwell.`}</p>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>{`We need a new rule that keeps the speed of light the same in every inertial frame. If we keep the rule linear (so simple motion stays simple) and refuse to pick out any preferred direction in space, what is the smallest change you can make to Galileo's equations?`}</p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>{`The position equation $x' = x - vt$ already mixes space and time. To save the speed of light, we will have to mix them in the time equation as well: $t'$ must depend on $x$, not just $t$. The smallest change is to multiply both equations by an unknown factor and let $t'$ pick up a piece of $x$. The Lorentz transformation does exactly that.`}</p>
            </details>
          </div>
        </>,
        <>
          <h2>{`The Lorentz Transformations`}</h2>
          <p>{`Einstein's replacement for the Galilean rule is the Lorentz transformation. It mixes space into time and time into space, by exactly the amount needed to keep the speed of light fixed in every frame.`}</p>
          <h3>{`Setting up the form`}</h3>
          <p>{`Start from a guess: assume the transformation is linear, so straight worldlines stay straight and uniform motion stays uniform. Write the most general linear form connecting two frames moving along the $x$-axis:`}</p>
          <div className="lrn-eq">
            <span>{`$$x' = A x + B t, \\quad t' = C x + D t$$`}</span>
          </div>
          <p>{`Four unknown constants. Four physical conditions to pin them down:`}</p>
          <ol className="lrn-list">
            <li>{`The origin of $S'$ moves at speed $v$ in $S$. So setting $x' = 0$ should give $x = vt$.`}</li>
            <li>{`The origin of $S$ moves at speed $-v$ in $S'$. So setting $x = 0$ should give $x' = -v t'$.`}</li>
            <li>{`A light pulse moves at $c$ in both frames. So $x = ct$ must imply $x' = c t'$.`}</li>
            <li>{`Applying the transformation forwards then backwards must give back the original coordinates.`}</li>
          </ol>
          <h3>{`Solving for the four constants`}</h3>
          <p>{`Condition 1. Setting $x' = 0$ in the first equation: $0 = A(vt) + Bt$. This forces $B = -Av$.`}</p>
          <p>{`Condition 2. Setting $x = 0$: $x' = Bt$ and $t' = Dt$. The condition $x' = -v t'$ then gives $B = -Dv$. Combined with $B = -Av$, this means $A = D$.`}</p>
          <p>{`Condition 3. Substitute $x = ct$ and $x' = ct'$: $Act + Bt = c(Cct + Dt)$. Use $B = -Av$ and $D = A$ to simplify: $A(c - v) = c(Cc + A)$. Solving for $C$: $C = -\\frac{Av}{c^2}$.`}</p>
          <p>{`Condition 4. Apply the forward transformation, then apply it again with $v$ replaced by $-v$ (this is the inverse, since $S$ moves at $-v$ in $S'$). The composition must return $x$. Start from $x' = A x + B t = A(x - vt)$ and $t' = C x + D t = A\\left(t - \\frac{vx}{c^2}\\right)$. Substitute into the inverse:`}</p>
          <div className="lrn-eq">
            <span>{`$$x = A(x' + v t') = A\\bigl(A(x - vt) + v A(t - \\tfrac{vx}{c^2})\\bigr) = A^2 \\bigl(x - vt + vt - \\tfrac{v^2 x}{c^2}\\bigr)$$`}</span>
          </div>
          <p>{`The $vt$ terms cancel, leaving $x = A^2 x \\left(1 - \\frac{v^2}{c^2}\\right)$. For this to hold for every $x$, the prefactor must equal one:`}</p>
          <div className="lrn-eq">
            <span>{`$$A^2 \\left(1 - \\frac{v^2}{c^2}\\right) = 1 \\quad \\Longrightarrow \\quad A = \\frac{1}{\\sqrt{1 - \\frac{v^2}{c^2}}}$$`}</span>
          </div>
          <p>{`This is the Lorentz factor, written $\\gamma$. Plugging $A = D = \\gamma$, $B = -\\gamma v$, $C = -\\frac{\\gamma v}{c^2}$ back into the linear form gives the Lorentz transformation:`}</p>
          <div className="lrn-eq">
            <span>{`$$x' = \\gamma (x - v t), \\quad t' = \\gamma \\left(t - \\frac{v x}{c^2}\\right)$$`}</span>
          </div>
          <p>{`with`}</p>
          <div className="lrn-eq">
            <span>{`$$\\gamma = \\frac{1}{\\sqrt{1 - \\frac{v^2}{c^2}}}$$`}</span>
          </div>
          <p>{`The inverse transformation flips the sign of $v$, since $S$ moves at $-v$ as seen from $S'$:`}</p>
          <div className="lrn-eq">
            <span>{`$$x = \\gamma (x' + v t'), \\quad t = \\gamma \\left(t' + \\frac{v x'}{c^2}\\right)$$`}</span>
          </div>
          <GammaVsBeta />
          <h3>{`Why y and z stay put`}</h3>
          <p>{`Lengths perpendicular to the motion are unchanged: $y' = y$ and $z' = z$. The argument is symmetry. Imagine a rod held at right angles to the motion, with both ends marked. If one observer thought the moving rod was shorter and the other thought it was longer, they would disagree about whether it fits through a ring of fixed diameter, which is a question with one physical answer. The only way both observers can be right is if perpendicular lengths do not change.`}</p>
          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>{`The Lorentz factor $\\gamma$ is always at least 1. For any object with mass, $v < c$, so $\\frac{v^2}{c^2} < 1$ and the square root in the denominator is less than one. Its reciprocal $\\gamma$ is greater than or equal to one.`}</p>
            <p>{`At low speeds $\\gamma$ is barely above one, so the Lorentz transformation looks almost identical to the Galilean one. As $v$ approaches $c$, $\\gamma$ shoots off toward infinity, and the relativistic corrections take over.`}</p>
          </div>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>{`Two firecrackers go off at the exact same instant in your frame, but at different places. A rocket flies past you at speed $v$. Does the pilot see the firecrackers go off at the same instant?`}</p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>{`The Lorentz time equation $t' = \\gamma\\left(t - \\frac{vx}{c^2}\\right)$ depends on $x$. Two events with the same $t$ but different $x$ have different $t'$ values. So the pilot does not see them as simultaneous. Simultaneity is a property of the frame, not of the events themselves.`}</p>
            </details>
          </div>
        </>,
        <>
          <h2>{`Simultaneity and the Order of Events`}</h2>
          <p>{`Two events that look simultaneous in one frame can look strictly ordered in another. This is the most counterintuitive consequence of the Lorentz transformation, and it follows directly from the $\\frac{vx}{c^2}$ term in $t'$.`}</p>
          <h3>{`Worked example: simultaneity in a freight car`}</h3>
          <p>{`A railwayman stands at the middle of a freight car of length $L$ and flashes a lantern. In his frame, light reaches the front wall and the back wall at the same instant. Both walls are at distance $\\frac{L}{2}$, and light travels at $c$ in either direction.`}</p>
          <p>{`A bystander on the ground watches the same car roll past at speed $v$. In the bystander's frame, the back wall is rushing toward the light pulse while the front wall is fleeing from it. Light still moves at $c$ for the bystander (postulate two), but the back wall has less ground to cover. The bystander sees the back wall light up first, the front wall second.`}</p>
          <p>{`Both observers are right. Simultaneity depends on the frame.`}</p>
          <h3>{`Worked example: timing the lantern flash`}</h3>
          <p>{`Pin this down with the Lorentz transformation. In the car's frame $S'$, label the lantern flash event 1 and the front-wall hit event 2:`}</p>
          <p>{`$(x'_1, t'_1) = (0, 0)$ and $(x'_2, t'_2) = \\left(\\frac{L}{2}, \\, \\frac{L}{2c}\\right)$.`}</p>
          <p>{`Apply the inverse Lorentz transform with $v$ equal to the car's speed in the ground frame:`}</p>
          <div className="lrn-eq">
            <span>{`$$t_1 = \\gamma\\left(t'_1 + \\frac{v x'_1}{c^2}\\right) = 0$$`}</span>
          </div>
          <div className="lrn-eq">
            <span>{`$$t_2 = \\gamma\\left(t'_2 + \\frac{v x'_2}{c^2}\\right) = \\gamma \\frac{L}{2c}\\left(1 + \\frac{v}{c}\\right)$$`}</span>
          </div>
          <p>{`The flash and the front-wall hit happen at different times in the ground frame. The factor $\\gamma$ appears because the Lorentz transform stretches every time interval between events at different spatial positions, even when those events lie on a single light pulse's path.`}</p>
          <h3>{`Timelike and spacelike intervals`}</h3>
          <p>{`Different observers disagree about $\\Delta t$ and $\\Delta x$ separately, but they always agree about a particular combination called the spacetime interval:`}</p>
          <div className="lrn-eq">
            <span>{`$$\\Delta s^2 = c^2 \\Delta t^2 - \\Delta x^2$$`}</span>
          </div>
          <p>{`Its sign decides whether the order of two events is fixed or up for grabs.`}</p>
          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">{`Timelike interval`}</span>
              <p>{`$\\Delta s^2 > 0$. Light has more than enough time to travel from one event to the other. The order is the same in every frame, and one event can cause the other.`}</p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">{`Spacelike interval`}</span>
              <p>{`$\\Delta s^2 < 0$. The two events are too far apart for any signal to connect them. Different frames can put them in different orders, and neither event can influence the other.`}</p>
            </div>
          </div>
          <h3>{`Worked example: a spacelike interval`}</h3>
          <p>{`Take event A at $(x_A, t_A) = (0, 0)$ and event B at $(x_B, t_B) = (3 \\times 10^8 \\text{ m}, \\, 0.5 \\text{ s})$. Compute $c \\Delta t = (3 \\times 10^8)(0.5) = 1.5 \\times 10^8$ m and $\\Delta x = 3 \\times 10^8$ m. Then:`}</p>
          <div className="lrn-eq">
            <span>{`$$\\Delta s^2 = (1.5 \\times 10^8)^2 - (3 \\times 10^8)^2 = -6.75 \\times 10^{16} \\text{ m}^2$$`}</span>
          </div>
          <p>{`The interval is negative, so A and B are spacelike separated. Light cannot travel from A to B in time, no signal can connect them, and some inertial frames see B happen before A.`}</p>
          <h3>{`Worked example: a timelike interval`}</h3>
          <p>{`Now take event A at $(0, 0)$ and event B at $(1 \\times 10^8 \\text{ m}, \\, 0.5 \\text{ s})$. Now $c \\Delta t = 1.5 \\times 10^8$ m and $\\Delta x = 1 \\times 10^8$ m:`}</p>
          <div className="lrn-eq">
            <span>{`$$\\Delta s^2 = (1.5 \\times 10^8)^2 - (1 \\times 10^8)^2 = 1.25 \\times 10^{16} \\text{ m}^2$$`}</span>
          </div>
          <p>{`The interval is positive, so the two events are timelike separated. A particle slower than light can travel from A to B, A can cause B, and every inertial observer agrees that A happens first.`}</p>
          <LightCone />
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>{`A spaceship one mile long flies past you at high speed. You measure its length as it streaks by. Will the number you write down be more, less, or exactly equal to one mile?`}</p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>{`Less. To measure a moving object's length, you mark both ends at the same instant in your frame. Because simultaneity is frame-dependent, the two marks correspond to different instants in the ship's frame, and the length you record comes out shorter than the rest length by exactly the factor $\\frac{1}{\\gamma}$. The next section makes this quantitative.`}</p>
            </details>
          </div>
        </>,
        <>
          <h2>{`Length Contraction and Time Dilation`}</h2>
          <p>{`Two consequences of the Lorentz transformation deserve their own names. Moving rods come out shorter than at rest. Moving clocks tick slower than at rest. Both effects are real measurements, not optical illusions.`}</p>
          <h3>{`Length contraction`}</h3>
          <p>{`A rod has rest length $l_0$, measured by an observer who moves with the rod. Now let the rod fly past your lab at speed $v$ along its own length. To measure its length you must mark its two ends at the same instant in your frame, then measure the distance between the marks. Plug those simultaneous events into the Lorentz transform and you get:`}</p>
          <div className="lrn-eq">
            <span>{`$$l = l_0 \\sqrt{1 - \\frac{v^2}{c^2}} = \\frac{l_0}{\\gamma}$$`}</span>
          </div>
          <p>{`The moving rod measures shorter by a factor $\\frac{1}{\\gamma}$. The squashing acts only along the direction of motion; widths perpendicular to the motion are unchanged.`}</p>
          <LengthContraction />
          <h3>{`Worked example: a tilted rod`}</h3>
          <p>{`Hold a rod at 45 degrees to the direction of motion in its own rest frame. From your lab frame, only the component along the motion contracts; the perpendicular component is unchanged. The rod looks rotated as well as shortened. A rest-frame tilt of 45 degrees becomes steeper than 45 degrees in the lab when viewed at high speed, because the horizontal leg of the right triangle shrinks while the vertical leg stays fixed.`}</p>
          <h3>{`Time dilation`}</h3>
          <p>{`Now do the same for a clock. In its own rest frame, the clock ticks once every $\\tau$ seconds (call this the proper period). Watch that clock fly past your lab at speed $v$. The interval between ticks you measure is:`}</p>
          <div className="lrn-eq">
            <span>{`$$T = \\gamma \\tau$$`}</span>
          </div>
          <p>{`The proper time $\\tau$ is the time read by the clock itself. The longer time $T$ is what you read on your own synchronized clocks while the moving clock ticks once.`}</p>
          <LightClock />
          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>{`The light clock makes the effect mechanical. Imagine a clock that ticks each time a photon bounces between two parallel mirrors held a fixed distance apart. In the clock's own frame, the photon travels straight up and straight down.`}</p>
            <p>{`Now watch from a frame in which the clock is moving sideways. The photon now traces a diagonal zigzag, which is geometrically longer than the straight up-down path. Since light moves at $c$ in both frames, a longer path means more time between ticks. That extra time, worked out with Pythagoras, is exactly the factor $\\gamma$.`}</p>
          </div>
          <h3>{`Worked example: cosmic ray muons reach the ground`}</h3>
          <p>{`Muons are unstable particles produced by cosmic rays smashing into the upper atmosphere, about 10 km above sea level. Their rest-frame half-life is 1.5 microseconds. Even moving at nearly the speed of light, classical physics says a muon could travel at most $c \\cdot 1.5 \\, \\mu\\text{s} \\approx 450$ m before half of them decay. Almost none should reach the ground.`}</p>
          <p>{`Detectors at sea level see plenty. The muons travel fast enough that $\\gamma \\approx 10$. In our frame, their effective half-life is $\\gamma \\tau \\approx 15$ microseconds, so they cover about 4.5 km before half decay. A sizable fraction makes the full 10 km trip. The observed flux at sea level matches $\\gamma \\tau$ exactly. It does not match $\\tau$ at all. This is direct experimental evidence for time dilation.`}</p>
          <h3>{`Worked example: atomic clocks on airplanes`}</h3>
          <p>{`A hydrogen maser keeps time using atomic transitions, accurate to roughly one part in $10^{15}$. Fly such a clock around the world in an airliner at a few hundred meters per second, and time dilation slows it relative to a twin clock left on the ground. The accumulated delay over a long flight is on the order of a hundred nanoseconds, well within the maser's resolution. Hafele and Keating did exactly this experiment in 1971 with cesium clocks, and the dilation predicted by special relativity (combined with a small general-relativistic gravitational shift) matched observation.`}</p>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>{`The Galilean rule says velocities just add. If a spaceship moves at $0.5c$ in your frame and fires a missile forward at $0.5c$ in the ship's frame, the Galilean answer would be $c$. But every observer must measure light at exactly $c$. So the missile cannot be moving at $c$. What replacement rule combines the two velocities?`}</p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>{`The Lorentz transformation forces a new addition rule: $u = \\frac{u' + v}{1 + \\frac{u'v}{c^2}}$. The denominator grows just enough to keep the result below $c$ for any ordinary inputs. Plugging in $0.5c$ and $0.5c$ gives $\\frac{c}{1.25} = 0.8c$, not $c$. The next section derives this formula.`}</p>
            </details>
          </div>
        </>,
        <>
          <h2>{`Relativistic Velocity Addition`}</h2>
          <p>{`Velocities do not simply add. The Lorentz transformation forces a new combination rule that keeps every result at or below $c$.`}</p>
          <h3>{`The formula`}</h3>
          <p>{`Let an object have velocity components $u'_x, u'_y, u'_z$ in frame $S'$. Let frame $S'$ move at speed $v$ along the $x$-axis of frame $S$. Differentiate the Lorentz transformation and the components in $S$ come out as:`}</p>
          <div className="lrn-eq">
            <span>{`$$u_x = \\frac{u'_x + v}{1 + \\frac{u'_x v}{c^2}}$$`}</span>
          </div>
          <div className="lrn-eq">
            <span>{`$$u_y = \\frac{u'_y \\sqrt{1 - \\frac{v^2}{c^2}}}{1 + \\frac{u'_x v}{c^2}}$$`}</span>
          </div>
          <div className="lrn-eq">
            <span>{`$$u_z = \\frac{u'_z \\sqrt{1 - \\frac{v^2}{c^2}}}{1 + \\frac{u'_x v}{c^2}}$$`}</span>
          </div>
          <p>{`The denominator $1 + \\frac{u'_x v}{c^2}$ is the key change. At low speeds it sits near 1 and the formula reduces to the Galilean rule $u_x = u'_x + v$. As the inputs approach $c$, the denominator grows enough to hold the answer below $c$.`}</p>
          <h3>{`Two checks`}</h3>
          <p>{`Set $u'_x = 0.5c$ and $v = 0.5c$. Galilean addition would give $c$. The relativistic formula gives:`}</p>
          <div className="lrn-eq">
            <span>{`$$u_x = \\frac{0.5c + 0.5c}{1 + 0.25} = \\frac{c}{1.25} = 0.8c$$`}</span>
          </div>
          <p>{`Now feed in light itself: $u'_x = c$. Then:`}</p>
          <div className="lrn-eq">
            <span>{`$$u_x = \\frac{c + v}{1 + \\frac{v}{c}} = c$$`}</span>
          </div>
          <p>{`Light moves at $c$ in both frames. The formula obeys postulate two by construction.`}</p>
          <h3>{`Worked example: light in a moving medium`}</h3>
          <p>{`Light moves at $\\frac{c}{n}$ inside a transparent medium with refractive index $n$ (water has $n \\approx 1.33$). Suppose the medium itself flows past the lab at speed $v$. What speed does the lab measure for the light? Plug $u' = \\frac{c}{n}$ into the velocity addition formula and expand to first order in the small quantity $\\frac{v}{c}$:`}</p>
          <div className="lrn-eq">
            <span>{`$$u = \\frac{c}{n} + v\\left(1 - \\frac{1}{n^2}\\right)$$`}</span>
          </div>
          <p>{`The light is dragged along by the moving water, but only by the fraction $\\left(1 - \\frac{1}{n^2}\\right)$ of the water's speed, not by the full amount. Fizeau measured this drag in 1851 by passing light through flowing water. Special relativity, decades later, derived the same coefficient as a one-line consequence of velocity addition.`}</p>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>{`A passing siren shifts from high pitch to low pitch as it goes by. Stars receding from Earth show their spectral lines shifted toward red. Sound and light both produce a Doppler effect, but the formulas cannot be identical. What about light's situation forces a different formula from sound's?`}</p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>{`Sound travels through air. Air is a medium that picks out a preferred frame (the rest frame of the air), so the formulas for moving source and moving observer are different. Light has no medium, so only the relative velocity between source and observer matters; there is one formula, not two. On top of that, the source's clock is dilated, which adds an extra factor of $\\sqrt{1 - \\frac{v^2}{c^2}}$ that has no counterpart in sound. The next section works it out.`}</p>
            </details>
          </div>
        </>,
        <>
          <h2>{`The Relativistic Doppler Effect`}</h2>
          <p>{`A moving source changes the frequency you receive. For light, the formula combines two effects: how far the source moves between emitting one wave crest and the next, and how slowly the source's clock ticks because of time dilation.`}</p>
          <RelDoppler />
          <h3>{`Sound versus light`}</h3>
          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">{`Sound Doppler`}</span>
              <p>{`Sound travels through air. The air picks a preferred frame, so a moving source and a moving observer give different formulas.`}</p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">{`Light Doppler`}</span>
              <p>{`Light has no medium. Only the relative velocity between source and observer matters, so a single formula covers every case.`}</p>
            </div>
          </div>
          <p>{`For sound, the classical formulas are $\\nu_D = \\frac{\\nu_0 \\, w}{w - v}$ for a source moving through air and $\\nu_D = \\nu_0 \\left(1 + \\frac{v}{w}\\right)$ for an observer moving through air, where $w$ is the speed of sound.`}</p>
          <h3>{`Light: source moving directly toward the observer`}</h3>
          <p>{`When the source flies straight at you at speed $v$:`}</p>
          <div className="lrn-eq">
            <span>{`$$\\nu_D = \\nu_0 \\sqrt{\\frac{1 + \\frac{v}{c}}{1 - \\frac{v}{c}}}$$`}</span>
          </div>
          <p>{`Approaching gives a blueshift (frequency goes up). For a receding source, use $-v$ in the formula and the frequency goes down: redshift.`}</p>
          <h3>{`Light: source moving at any angle`}</h3>
          <p>{`Now let the source's velocity make angle $\\theta$ with the line of sight in your frame. The general formula is:`}</p>
          <div className="lrn-eq">
            <span>{`$$\\nu_D = \\frac{\\nu_0 \\sqrt{1 - \\frac{v^2}{c^2}}}{1 - \\frac{v}{c}\\cos\\theta}$$`}</span>
          </div>
          <p>{`Setting $\\theta = 90^\\circ$ (source moving sideways, neither approaching nor receding at the instant of closest approach) leaves only $\\nu_D = \\nu_0 \\sqrt{1 - \\frac{v^2}{c^2}}$. This is the transverse Doppler shift. It comes entirely from time dilation, and it has no classical analog.`}</p>
          <h3>{`Where the formula comes from`}</h3>
          <p>{`The source emits one wave crest every proper time $\\tau_0 = \\frac{1}{\\nu_0}$ in its rest frame. From your frame, the source is a moving clock, so time dilation stretches the interval between crest emissions to $\\gamma \\tau_0$.`}</p>
          <p>{`During that stretched interval, the source moves toward you by a distance $v \\cos\\theta \\cdot \\gamma \\tau_0$, where $\\theta$ is the angle between the source's velocity and your line of sight. The next crest then has a shorter distance to travel through space, so it arrives sooner than it would have if the source had stayed put.`}</p>
          <p>{`Subtract that travel-time saving from the dilated emission interval to get the period you actually measure between crest arrivals:`}</p>
          <div className="lrn-eq">
            <span>{`$$T = \\gamma \\tau_0 \\left(1 - \\frac{v}{c} \\cos\\theta\\right)$$`}</span>
          </div>
          <p>{`Invert for frequency:`}</p>
          <div className="lrn-eq">
            <span>{`$$\\nu_D = \\frac{\\nu_0 \\sqrt{1 - \\frac{v^2}{c^2}}}{1 - \\frac{v}{c}\\cos\\theta}$$`}</span>
          </div>
          <p>{`Two limits worth checking. At $\\theta = 0$ (source flying directly at you), the formula collapses to the longitudinal blueshift above. At $\\theta = 90^\\circ$, the cosine vanishes and only the time dilation factor remains.`}</p>
          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>{`A transverse shift exists even when the source is not approaching or receding because the source is itself a clock, and time dilation slows every clock that moves through your frame.`}</p>
            <p>{`At the instant of closest approach there is no radial motion, but the source's emission rate is still slow by the factor $\\sqrt{1 - \\frac{v^2}{c^2}}$. You receive fewer crests per second than the source emits in its own frame.`}</p>
          </div>
          <h3>{`Worked example: Doppler navigation`}</h3>
          <p>{`A satellite broadcasts a steady carrier frequency. A receiver on the ground records the frequency it actually hears as the satellite passes overhead. The frequency starts blueshifted on approach, sweeps through the rest-frame value at closest approach (modified slightly by the transverse shift), and ends redshifted on departure. The detailed shape of the curve fixes the satellite's speed and the geometry of the pass. The Transit system, the first global satellite navigation system, used exactly this principle in the 1960s. GPS uses related Doppler corrections in its precise positioning calculations.`}</p>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>{`Twin A stays on Earth. Twin B flies to a distant star at nearly $c$, turns around, and flies back. When they meet again, who has aged more? Both saw the other's clock running slow during the trip. How is that consistent?`}</p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>{`Twin A, who stayed put, has aged more. The two twins are not in symmetric situations: A stays in a single inertial frame the whole time, while B switches frames at the turnaround. Only B feels the deceleration and re-acceleration. The next section works through the resolution.`}</p>
            </details>
          </div>
        </>,
        <>
          <h2>{`The Twin Paradox`}</h2>
          <p>{`The setup sounds contradictory at first. During each leg of the trip, each twin sees the other's clock running slow. So how can one of them be definitely younger when they reunite? The answer is that the situation is not symmetric: only the traveler accelerates.`}</p>
          <h3>{`The setup`}</h3>
          <p>{`Twin A stays on Earth. Twin B flies out to a distant star at constant speed $v$, turns around, and flies back at the same speed. When the two meet again, twin B is younger.`}</p>
          <h3>{`Why acceleration matters`}</h3>
          <p>{`Twin A stays in one inertial frame from start to finish. Twin B switches frames at the turnaround: outbound and inbound are two different inertial frames. The act of switching is a real, physical event for B (engines fire, B feels weight) and no event at all for A. That asymmetry is what lets one twin age less than the other. The straight worldline through spacetime is the longest in proper time; B takes a bent worldline, so B's proper time is shorter.`}</p>
          <h3>{`Counting signals: the Doppler derivation`}</h3>
          <p>{`Have twin B send one light pulse per year of B's own time. Watch what twin A receives.`}</p>
          <p>{`Let $\\beta = \\frac{v}{c}$. On the outbound leg, B is receding from A, so A receives the pulses redshifted. The Doppler factor is $\\sqrt{\\frac{1-\\beta}{1+\\beta}} < 1$, meaning fewer than one pulse per A-year. On the inbound leg, B is approaching A, so A receives the pulses blueshifted by the reciprocal factor $\\sqrt{\\frac{1+\\beta}{1-\\beta}} > 1$, meaning more than one pulse per A-year.`}</p>
          <p>{`Now count. Suppose the round trip takes total proper time $\\tau$ on B's clock, split equally between outbound and inbound. B emits $\\nu_0 \\tau$ pulses in total, where $\\nu_0$ is one pulse per B-year. A receives every one of those pulses, since every emitted pulse eventually arrives. Adding up A's elapsed time over the redshifted and blueshifted phases (and accounting for when each phase begins and ends, since A does not see the turnaround until light from it arrives) gives total A-time:`}</p>
          <div className="lrn-eq">
            <span>{`$$T_A = \\gamma \\tau$$`}</span>
          </div>
          <p>{`Twin A ages by the factor $\\gamma$ relative to twin B. The asymmetry between the redshifted and blueshifted phases of A's experience is supplied by the turnaround: A spends most of the trip seeing redshifted pulses (the slow phase) and only the final stretch seeing blueshifted pulses (the fast phase), because light from B's turnaround takes time to reach A.`}</p>
          <TwinParadox />
          <LorentzBoostInteractive />
          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>{`The two inertial legs alone are perfectly symmetric: each twin sees the other's clock running slow during outbound and during inbound. The asymmetry sits entirely in the turnaround event.`}</p>
            <p>{`Only twin B feels a force at the turnaround. Only B switches inertial frames. That single event makes B's worldline through spacetime shorter than A's straight one, and shorter worldlines accumulate less proper time.`}</p>
          </div>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>{`Newton said the mass of a particle is the same regardless of how it moves. But conservation of momentum has to hold in every inertial frame, and the velocity addition rule is no longer Galilean. What does that force you to do to the formula $p = mv$ as a particle approaches the speed of light?`}</p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>{`The simple formula $p = m_0 v$ does not transform consistently between inertial frames under Lorentz boosts. Either momentum stops being conserved across frames, or the formula needs an extra factor that depends on speed. The next section shows the only consistent fix is $p = \\gamma m_0 v$.`}</p>
            </details>
          </div>
        </>,
        <>
          <h2>{`Relativistic Momentum`}</h2>
          <p>{`Newton wrote momentum as $p = m v$. That formula fails at high speeds: conservation of momentum simply does not hold across inertial frames if the mass stays constant. The fix is to multiply the Newtonian momentum by a factor that grows with speed.`}</p>
          <RelMass />
          <h3>{`The glancing collision argument`}</h3>
          <p>{`Set up a symmetric collision in the lab. Two identical particles fly toward each other with equal and opposite velocities $\\pm u$ along the $x$-axis. They scrape past each other and each picks up a tiny transverse kick of size $w$, perpendicular to the original motion. By the symmetry of the setup in the lab frame, particle A leaves with velocity $(-u, +w)$ and particle B leaves with $(+u, -w)$.`}</p>
          <p>{`Now view the same collision from particle A's rest frame, call it $S'$. Frame $S'$ moves at velocity $-u$ relative to the lab, so by relativistic velocity addition, particle B moves in $S'$ at $V = \\frac{2u}{1 + \\frac{u^2}{c^2}}$ along the $x$-axis. Particle A is at rest in $S'$ before the collision.`}</p>
          <p>{`The transverse velocity components transform too. Apply the velocity addition rule to the $y$-components. Particle A starts at rest in $S'$ and picks up a transverse kick. Because A was at rest in $S'$, its transverse velocity in $S'$ has the same magnitude as in the lab: $|w_A'| = w$. Particle B, however, was already moving at $+u$ along $x$, so its transverse velocity transforms as:`}</p>
          <div className="lrn-eq">
            <span>{`$$w_B' = \\frac{w_B \\sqrt{1 - \\frac{u^2}{c^2}}}{1 - \\frac{u^2}{c^2}} = \\frac{-w \\sqrt{1 - \\frac{u^2}{c^2}}}{1 - \\frac{u^2}{c^2}} = \\frac{-w}{\\sqrt{1 - \\frac{u^2}{c^2}}}$$`}</span>
          </div>
          <p>{`So in $S'$, the two particles end up with different transverse speeds: $|w_A'| = w$ and $|w_B'| = \\frac{w}{\\sqrt{1 - \\frac{u^2}{c^2}}}$.`}</p>
          <p>{`Now demand that transverse momentum is conserved in $S'$. If we used the Newtonian definition $p = m_0 v$, conservation would fail, because A and B carry different transverse speeds. Conservation can only hold if the moving particle B carries an extra factor. The only factor that works is one that grows with speed:`}</p>
          <div className="lrn-eq">
            <span>{`$$m(V) = \\frac{m_0}{\\sqrt{1 - \\frac{V^2}{c^2}}} = \\gamma m_0$$`}</span>
          </div>
          <p>{`With this definition, $m(V_B) \\cdot w_B' = m_0 \\gamma_B \\cdot \\frac{w}{\\gamma_B} = m_0 w$, which matches A's transverse momentum exactly.`}</p>
          <p>{`The relativistic momentum is:`}</p>
          <div className="lrn-eq">
            <span>{`$$\\vec p = \\gamma m_0 \\vec u$$`}</span>
          </div>
          <div className="lrn-callout">
            <p>{`A note on terminology. Older textbooks (including Kleppner and Kolenkow, the source for this module) call $\\gamma m_0$ the "relativistic mass" and call $m_0$ the "rest mass". Modern particle physics writes the formula as $p = \\gamma m_0 v$ and reserves the word "mass" for $m_0$ alone. Both conventions describe the same physics; the modern one avoids the misleading suggestion that a fast particle physically gains material. Watch the convention whenever you read about high-energy collisions.`}</p>
          </div>
          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">{`Classical mass`}</span>
              <p>{`Constant. Independent of speed. The same number $m_0$ appears in every formula.`}</p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">{`Relativistic mass`}</span>
              <p>{`Equal to $\\gamma m_0$. Grows with speed and diverges as $v \\to c$. This is what enters the relativistic momentum.`}</p>
            </div>
          </div>
          <h3>{`Worked example: Bucherer's electron deflection experiment`}</h3>
          <p>{`In 1909, Bucherer measured how electrons of known energy were deflected by combined electric and magnetic fields. The deflection depended on the electron's mass at its current speed. Bucherer's data fit $\\frac{m_0}{\\sqrt{1 - \\frac{V^2}{c^2}}}$ across a wide range of speeds. They did not fit Newton's constant mass. This was one of the first direct experimental confirmations of relativistic dynamics.`}</p>
          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>{`Adding kinetic energy to a particle adds inertia. Resisting acceleration costs energy, and that energy itself contributes to the resistance.`}</p>
            <p>{`As $v$ approaches $c$, the cost grows without bound. Even arbitrarily large forces produce only small extra accelerations, because the particle's effective mass diverges.`}</p>
          </div>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>{`An apple sits at rest with mass $m$. You warm it slightly. Does its mass change?`}</p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>{`Yes. The thermal energy you added shows up as an increase in the apple's rest mass, by the amount $\\frac{\\Delta E}{c^2}$. The change is far too small to measure with a kitchen scale, but it is real. Every form of energy contributes to mass. The next section derives this relation.`}</p>
            </details>
          </div>
        </>,
        <>
          <h2>{`Relativistic Energy and E = mc²`}</h2>
          <p>{`Einstein's most famous equation comes from a careful work-energy calculation. The same calculation reveals that mass and energy are two faces of the same thing.`}</p>
          <h3>{`Deriving the kinetic energy`}</h3>
          <p>{`Start from the work-energy theorem: the kinetic energy $K$ a particle has accumulated equals the total work done on it by an external force,`}</p>
          <div className="lrn-eq">
            <span>{`$$K = \\int \\vec F \\cdot d\\vec r = \\int \\vec u \\cdot d\\vec p$$`}</span>
          </div>
          <p>{`Plug in the relativistic momentum $\\vec p = \\gamma m_0 \\vec u$ and integrate from rest up to speed $u$. After working through the calculus, the result is:`}</p>
          <div className="lrn-eq">
            <span>{`$$K = m c^2 - m_0 c^2 = (\\gamma - 1) m_0 c^2$$`}</span>
          </div>
          <p>{`Here $m = \\gamma m_0$ is the relativistic mass. Rearranging,`}</p>
          <div className="lrn-eq">
            <span>{`$$m c^2 = K + m_0 c^2$$`}</span>
          </div>
          <p>{`The left-hand side is what we call the total energy, and the right-hand side splits it into kinetic energy plus a baseline called the rest energy. Define total energy as:`}</p>
          <div className="lrn-eq">
            <span>{`$$E = m c^2$$`}</span>
          </div>
          <p>{`A particle has energy $m_0 c^2$ even when at rest, simply by virtue of having mass. Speed it up and the total grows beyond $m_0 c^2$ by the kinetic part.`}</p>
          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">{`Newtonian kinetic energy`}</span>
              <p>{`$K = \\tfrac{1}{2} m_0 v^2$. Grows quadratically with speed without any ceiling.`}</p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">{`Relativistic kinetic energy`}</span>
              <p>{`$K = (\\gamma - 1) m_0 c^2$. Diverges as $v \\to c$, since $\\gamma$ does. Reduces to the Newtonian form at low speeds.`}</p>
            </div>
          </div>
          <h3>{`Mass-energy equivalence`}</h3>
          <p>{`Any energy added to a system, in any form, raises its mass by $\\frac{\\Delta E}{c^2}$. Heat a brick: its mass goes up. Compress a spring: it gets heavier. Ionize an atom: heavier still. The change is fantastically small in everyday situations because $c^2$ is enormous, but it is real and shows up in nuclear and particle reactions where the energies involved are large enough to weigh on a balance.`}</p>
          <h3>{`Dynamical formulas in one place`}</h3>
          <p>{`For a particle of rest mass $m_0$ moving at speed $u$:`}</p>
          <div className="lrn-eq">
            <span>{`$$p = \\gamma m_0 u$$`}</span>
          </div>
          <div className="lrn-eq">
            <span>{`$$E = \\gamma m_0 c^2$$`}</span>
          </div>
          <div className="lrn-eq">
            <span>{`$$K = (\\gamma - 1) m_0 c^2$$`}</span>
          </div>
          <h3>{`The energy-momentum relation`}</h3>
          <p>{`Square the energy and momentum formulas, subtract, and use $\\gamma^2 \\left(1 - \\frac{u^2}{c^2}\\right) = 1$. The cross terms vanish and you get a clean identity:`}</p>
          <div className="lrn-eq">
            <span>{`$$E^2 = (p c)^2 + (m_0 c^2)^2$$`}</span>
          </div>
          <p>{`This is one of the workhorse equations of particle physics. It connects energy and momentum in a way that holds for any particle, massive or massless. Plug $m_0 = 0$ in and you get $E = pc$ for the photon. Plug $p = 0$ in and you get $E = m_0 c^2$ for a particle at rest.`}</p>
          <div className="lrn-faded">
            <div className="lrn-faded-phase">
              <span className="lrn-faded-label">YOUR TURN</span>
              <p>{`Verify the energy-momentum relation directly. Square $E = \\gamma m_0 c^2$ and $p = \\gamma m_0 u$, take the difference $E^2 - (pc)^2$, and use $\\gamma^2\\left(1 - \\frac{u^2}{c^2}\\right) = 1$ to simplify.`}</p>
            </div>
          </div>
          <h3>{`Worked example: a sticky head-on collision`}</h3>
          <p>{`Two identical balls, each of rest mass $m_0$ and speed $u$, collide head-on and stick together. Initially the total energy is $2 \\gamma m_0 c^2$ and the total momentum is zero (the two momenta cancel by symmetry). After the collision the combined object is at rest in the lab, so its total energy is just its rest energy $M_0 c^2$. Energy conservation gives:`}</p>
          <div className="lrn-eq">
            <span>{`$$M_0 c^2 = 2 \\gamma m_0 c^2 \\quad \\Longrightarrow \\quad M_0 = 2 \\gamma m_0$$`}</span>
          </div>
          <p>{`The combined object has more rest mass than the sum of its parts. The kinetic energy that was carried in by the two balls did not vanish; it became internal energy (heat, deformation, vibration) of the combined object, and that internal energy registers as additional rest mass.`}</p>
          <h3>{`Worked example: Cockcroft and Walton split the lithium nucleus`}</h3>
          <p>{`In 1932, Cockcroft and Walton accelerated protons into a lithium target. The reaction $^7\\text{Li} + \\text{p} \\to 2 \\, ^4\\text{He}$ produced two helium nuclei flying apart at high speed. They weighed the products carefully and found a tiny mass deficit: the two helium nuclei together had less rest mass than the original lithium plus proton.`}</p>
          <p>{`Plugging the deficit $\\Delta m$ into $\\Delta E = \\Delta m c^2$ predicted the kinetic energy carried away by the helium nuclei. The measurement matched the prediction exactly. This was the first direct laboratory check that $E = mc^2$ converts mass into kinetic energy quantitatively, not just qualitatively.`}</p>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>{`Light carries energy and momentum, but it has no rest mass. What does the energy-momentum relation reduce to for a photon?`}</p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>{`Set $m_0 = 0$ in $E^2 = (pc)^2 + (m_0 c^2)^2$. The rest-energy term drops out and you are left with $E = pc$. Energy and momentum are tightly linked for any massless particle. The next section uses this to recover the photoelectric effect, radiation pressure, and Compton scattering.`}</p>
            </details>
          </div>
        </>,
        <>
          <h2>{`Massless Particles (Photons)`}</h2>
          <p>{`Some particles have zero rest mass. They always travel at $c$ and have no rest frame in which to sit still. The photon (the quantum of light) is the canonical example.`}</p>
          <h3>{`Energy and momentum of light`}</h3>
          <p>{`Set $m_0 = 0$ in the energy-momentum relation. The rest-energy term vanishes and what remains is:`}</p>
          <div className="lrn-eq">
            <span>{`$$E = p c$$`}</span>
          </div>
          <p>{`A photon's energy and momentum are inseparable: knowing one gives you the other. Combine this with the quantum relation $E = h \\nu$ (energy proportional to frequency, with Planck's constant $h$ as the conversion factor) and you get the photon's momentum directly from its frequency or wavelength:`}</p>
          <div className="lrn-eq">
            <span>{`$$p = \\frac{h \\nu}{c} = \\frac{h}{\\lambda}$$`}</span>
          </div>
          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">{`Massive particles`}</span>
              <p>{`Travel at $u < c$. Have a rest frame in which they sit still. Energy and momentum obey the full relation $E^2 = (pc)^2 + (m_0 c^2)^2$.`}</p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">{`Massless particles`}</span>
              <p>{`Travel at exactly $u = c$ in every frame. No rest frame exists. Energy and momentum are tied together by $E = pc$.`}</p>
            </div>
          </div>
          <h3>{`Worked example: the photoelectric effect`}</h3>
          <p>{`Shine light on a metal surface and electrons can fly off. Hertz first noticed the effect in 1887. Classical wave theory said the electron energy should depend on light intensity, but experiments found it depends on light frequency instead. Einstein explained it in 1905 by treating each photon as a discrete bullet of energy $h \\nu$. A single photon either dislodges a single electron or it does not. There is no "partial" hit.`}</p>
          <p>{`To free an electron, the photon must supply at least the energy needed to break it loose from the metal: a fixed amount per metal called the work function $W$. Anything left over becomes kinetic energy of the freed electron:`}</p>
          <div className="lrn-eq">
            <span>{`$$K_\\text{max} = h \\nu - W$$`}</span>
          </div>
          <p>{`Below a cutoff frequency $\\nu_\\text{cut} = \\frac{W}{h}$, no single photon has enough energy, so no electrons emerge no matter how bright the light is. Above it, every individual photon can free an electron, and the electron's maximum kinetic energy depends linearly on $\\nu$. Millikan tested this carefully in 1916 and the line came out exactly as Einstein predicted.`}</p>
          <h3>{`Worked example: radiation pressure`}</h3>
          <p>{`A photon carries momentum $p = \\frac{E}{c}$. When it hits a black surface that absorbs it completely, the surface gains the photon's momentum. The pressure on the surface is the rate of momentum delivery per unit area, which equals the rate of energy delivery (the intensity $I$) divided by $c$:`}</p>
          <div className="lrn-eq">
            <span>{`$$P = \\frac{I}{c} \\quad (\\text{perfect absorber})$$`}</span>
          </div>
          <p>{`If instead the surface is a perfect mirror, each photon bounces back with reversed momentum. The momentum transferred per photon is now $2p$, not $p$, so the pressure doubles:`}</p>
          <div className="lrn-eq">
            <span>{`$$P = \\frac{2 I}{c} \\quad (\\text{perfect mirror})$$`}</span>
          </div>
          <p>{`Radiation pressure is what pushes solar sails and what stretches the dust tail of a comet away from the Sun.`}</p>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>{`A photon hits a free electron at rest and bounces off at some angle. The electron recoils. What happens to the photon's wavelength after the collision?`}</p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>{`Energy and momentum conservation force the photon to give up some of its energy to the recoiling electron. Less energy means lower frequency, hence longer wavelength. The photon is reddened. The next section derives exactly how much, in a formula that depends only on the scattering angle and the electron's mass, not on the photon's original energy.`}</p>
            </details>
          </div>
        </>,
        <>
          <h2>{`Compton Scattering and Pair Production`}</h2>
          <p>{`Light interacts with matter as a stream of particles, not as a smooth wave. Two reactions show this most cleanly: a photon bouncing off an electron, and a photon turning itself into a particle-antiparticle pair.`}</p>
          <h3>{`Worked example: the Compton effect`}</h3>
          <p>{`A photon of wavelength $\\lambda_0$ collides with a free electron at rest and scatters off at angle $\\theta$. The electron recoils, carrying away some of the photon's energy. Apply conservation of energy and momentum (conveniently packaged as conservation of four-momentum, see the four-vector section below) and you get:`}</p>
          <div className="lrn-eq">
            <span>{`$$\\lambda - \\lambda_0 = \\frac{h}{m_e c}(1 - \\cos\\theta)$$`}</span>
          </div>
          <p>{`The shift in wavelength depends only on the scattering angle and on the electron's mass, never on the photon's original wavelength. The constant $\\frac{h}{m_e c} = 2.43 \\times 10^{-12}$ m is called the Compton wavelength of the electron. It sets the absolute scale of the wavelength shift.`}</p>
          <p>{`The wavelength always grows; it never shrinks. The photon hands some energy to the electron, and lower energy means longer wavelength.`}</p>
          <h3>{`Worked example: pair production`}</h3>
          <p>{`A photon with enough energy can transform itself into an electron-positron pair: $\\gamma \\to e^- + e^+$. The energy needed is at least the rest energy of the pair, $2 m_e c^2 \\approx 1.022$ MeV. But energy alone is not enough; momentum must balance too.`}</p>
          <p>{`A photon traveling alone in empty space cannot make a pair, no matter how energetic it is. The photon's energy and momentum are locked together by $E = pc$. The new pair, even at the threshold where they barely move, cannot satisfy that ratio for any pair speed below $c$. The reaction has to happen near a heavy third body (usually an atomic nucleus) that can absorb the leftover momentum without taking much of the energy.`}</p>
          <h3>{`Where the threshold formula comes from`}</h3>
          <p>{`Take the reaction $\\gamma + \\text{nucleus} \\to e^- + e^+ + \\text{nucleus}$. In the lab frame, the photon has energy $E_\\gamma$ and momentum $\\frac{E_\\gamma}{c}$. The nucleus of mass $M$ starts at rest with energy $Mc^2$ and zero momentum.`}</p>
          <p>{`A useful quantity is the invariant mass of a system, defined by $(M_\\text{tot} c^2)^2 = (\\sum E)^2 - (\\sum \\vec p \\, c)^2$. It has the same value in every inertial frame. For the initial state:`}</p>
          <div className="lrn-eq">
            <span>{`$$(M_\\text{tot} c^2)^2 = (E_\\gamma + Mc^2)^2 - (E_\\gamma)^2$$`}</span>
          </div>
          <p>{`At the lowest possible photon energy (the threshold), the three final particles end up moving together at the same velocity. In their common rest frame, their total invariant mass is just the sum of their rest masses, $(M + 2 m_e)c^2$. Set the two expressions equal and solve for $E_\\gamma$:`}</p>
          <div className="lrn-eq">
            <span>{`$$E_\\gamma = 2 m_e c^2 \\left(1 + \\frac{m_e}{M}\\right)$$`}</span>
          </div>
          <p>{`If the nucleus is heavy ($M \\gg m_e$), the recoil correction $\\frac{m_e}{M}$ is tiny and the threshold sits just above $2 m_e c^2 \\approx 1.022$ MeV.`}</p>
          <PairProduction />
          <h3>{`Worked example: the Doppler effect from a single photon`}</h3>
          <p>{`The Doppler formula derived earlier treated light as a wave with a period that gets stretched by motion. Here is a second derivation that treats light as a single photon with a four-momentum. Both routes must give the same answer because they are describing the same physics from two angles.`}</p>
          <p>{`In the source's rest frame, the emitted photon has four-momentum $\\left(\\frac{E_0}{c}, 0, 0, \\frac{E_0}{c}\\right)$ along its direction of travel, where $E_0 = h\\nu_0$. Apply a Lorentz boost to the observer's frame, where the source moves at speed $v$. The new energy is the time component of the boosted four-momentum, and that energy gives the observed frequency through $E = h\\nu_D$. Working it through reproduces the same formula $\\nu_D = \\dfrac{\\nu_0 \\sqrt{1 - \\frac{v^2}{c^2}}}{1 - \\frac{v}{c}\\cos\\theta}$ as before.`}</p>
          <p>{`Two routes, identical answer. The agreement is not a coincidence: it is the wave-particle duality of light expressed at the level of the Doppler effect.`}</p>
          <h3>{`Worked example: how light pulses bound the photon's rest mass`}</h3>
          <p>{`Special relativity assumes the photon has zero rest mass. Could it have a tiny one? If so, $E^2 = (pc)^2 + (m_\\gamma c^2)^2$ would have a nonzero second term, and the speed of light would depend slightly on frequency: low-energy (long-wavelength) light would travel slower than high-energy (short-wavelength) light.`}</p>
          <p>{`Pulsars emit sharp pulses simultaneously across many frequencies. After light from a pulsar travels thousands of light-years to Earth, any frequency-dependent delay would smear the pulse. Astronomers see no smearing within their measurement precision. The observed limits give $m_\\gamma < 10^{-40}$ kg from optical observations, and $m_\\gamma < 10^{-47}$ kg from the radio-frequency Crab pulsar pulses. Either bound is consistent with the photon being exactly massless.`}</p>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>{`In three dimensions, a vector has a length and a direction, and we know how its components change when we rotate the coordinate axes. Special relativity mixes space and time. What rule should pick out the "true" four-component vectors that survive a Lorentz boost?`}</p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>{`A true four-vector is any quadruple of components that transforms under a Lorentz boost the same way that the position $(x, y, z, ict)$ does. The rule is the transformation rule, not the picture of an arrow. The next two sections build this idea up from rotations in three dimensions to boosts in four.`}</p>
            </details>
          </div>
        </>,
        <>
          <h2>{`Vectors and Transformations`}</h2>
          <p>{`Before we generalize vectors to four dimensions, sharpen the three-dimensional definition. The intuitive picture of a vector as an arrow in space is fine for a first encounter, but it cannot tell you which combinations of three numbers really act like vectors and which only look like ones. The clean test is how the components transform when you rotate the coordinate axes.`}</p>
          <h3>{`Defining a vector by transformation`}</h3>
          <p>{`Rotate the coordinate axes by some rotation $R$. The components of an arrow with old components $A_j$ change to:`}</p>
          <div className="lrn-eq">
            <span>{`$$A'_i = \\sum_j R_{ij} A_j$$`}</span>
          </div>
          <p>{`Here $R_{ij}$ is the matrix that describes the rotation. A "true" vector is any triple of numbers that obeys this rule under every rotation. Triples that do not obey it are something else (a list of unrelated numbers, or a more complex object such as a tensor).`}</p>
          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>{`The arrow picture is intuitive but loose. You can draw an arrow between any two points. The transformation rule is what guarantees that the components combine consistently across frames.`}</p>
            <p>{`Without the rule, a calculation done in one set of axes might give a different physical answer than the same calculation done in rotated axes. The rule is what keeps the physics frame-independent.`}</p>
          </div>
          <h3>{`Worked example: the cross product is a true vector`}</h3>
          <p>{`Take two vectors $\\vec A$ and $\\vec B$ and form their cross product $\\vec C = \\vec A \\times \\vec B$. Now rotate the coordinate system. You can either rotate $\\vec A$ and $\\vec B$ first and then take their cross product, or take the cross product first and then rotate the result. Both routes give the same answer. The cross product transforms exactly the same way as $\\vec A$ and $\\vec B$ do, so it qualifies as a true vector.`}</p>
          <h3>{`Worked example: an expression that is not a vector`}</h3>
          <p>{`Now try $\\vec D = \\vec A \\times \\vec B \\times \\vec A$, written without parentheses. The cross product is not associative: $(\\vec A \\times \\vec B) \\times \\vec A$ is generally different from $\\vec A \\times (\\vec B \\times \\vec A)$. Without a fixed grouping, the expression does not name a single mathematical object. It cannot transform consistently under rotation, so it fails the test for a true vector even though it has three components.`}</p>
          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">{`True vector`}</span>
              <p>{`Transforms by the rotation rule for every rotation. Three components, one consistent transformation law.`}</p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">{`Non-vector`}</span>
              <p>{`Three components that fail the rotation rule, often because the construction is ambiguous (different groupings give different answers).`}</p>
            </div>
          </div>
          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">{`Geometric (arrow) view`}</span>
              <p>{`Helpful for intuition. Limited to three dimensions and to operations you can draw.`}</p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">{`Transformation-rule view`}</span>
              <p>{`Independent of dimension. Generalizes cleanly to four-dimensional spacetime, where Lorentz boosts replace rotations.`}</p>
            </div>
          </div>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>{`Different observers disagree about a separation in space and a separation in time, but they should agree about something. What single combination of $\\Delta x$, $\\Delta y$, $\\Delta z$, and $\\Delta t$ has the same value in every inertial frame?`}</p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>{`The combination is $c^2 \\Delta t^2 - \\Delta x^2 - \\Delta y^2 - \\Delta z^2$. We met it earlier as the spacetime interval. The next section shows that this is the squared "length" of a four-vector built out of position and time, and that Lorentz boosts preserve it for the same reason that ordinary rotations preserve the lengths of three-dimensional vectors.`}</p>
            </details>
          </div>
        </>,
        <>
          <h2>{`Minkowski Space and Four-vectors`}</h2>
          <p>{`In four dimensions, a Lorentz boost looks just like a rotation. The trick is to combine the three space coordinates with time into a single object whose squared length is preserved by every boost.`}</p>
          <h3>{`Spacetime as four dimensions`}</h3>
          <p>{`Build a four-component object out of position and time, attaching an imaginary unit to the time part (this is K&K's convention; modern texts use a metric instead, but the physics is the same):`}</p>
          <div className="lrn-eq">
            <span>{`$$s = (x, \\, y, \\, z, \\, i c t)$$`}</span>
          </div>
          <p>{`The squared "length" of this four-vector is the sum of the squared components, which because of the imaginary $i$ comes out as:`}</p>
          <div className="lrn-eq">
            <span>{`$$x^2 + y^2 + z^2 - (c t)^2 = \\text{invariant}$$`}</span>
          </div>
          <p>{`Apply a Lorentz boost between two inertial frames. The four components mix exactly the way ordinary rotations mix the components of a three-dimensional vector. The squared length stays the same. We met this combination earlier as the spacetime interval.`}</p>
          <LightCone />
          <h3>{`What counts as a four-vector`}</h3>
          <p>{`A four-vector is any set of four components $(A_1, A_2, A_3, A_4)$ that transforms under a Lorentz boost by exactly the same rule that transforms $s$. This generalizes the rotation rule from three dimensions to four. Quantities that fail the rule are not four-vectors, even if they happen to have four components.`}</p>
          <h3>{`The proper time interval`}</h3>
          <p>{`Take two events that lie close together in spacetime. The combination`}</p>
          <div className="lrn-eq">
            <span>{`$$d\\tau^2 = dt^2 - \\frac{1}{c^2}(dx^2 + dy^2 + dz^2)$$`}</span>
          </div>
          <p>{`is the same in every inertial frame. It equals the time read by a clock that actually travels between the two events along whatever worldline connects them. This is called the proper time, and it is the four-dimensional analog of distance along a curve.`}</p>
          <h3>{`Worked example: time dilation in three lines`}</h3>
          <p>{`Apply the proper time formula to a single moving clock. In the clock's own rest frame, the clock does not move, so $dx = dy = dz = 0$ and $d\\tau = dt'$. In the lab frame, the clock moves at speed $u$, so $dx = u \\, dt$, $dy = 0$, $dz = 0$. Plug in:`}</p>
          <div className="lrn-eq">
            <span>{`$$d\\tau^2 = dt^2 - \\frac{u^2 \\, dt^2}{c^2} = dt^2 \\left(1 - \\frac{u^2}{c^2}\\right) = \\frac{dt^2}{\\gamma^2}$$`}</span>
          </div>
          <p>{`Take a square root: $dt = \\gamma \\, d\\tau$. This is time dilation, derived in three lines instead of pages of light-clock geometry. The invariance of $d\\tau$ does all the bookkeeping for us.`}</p>
          <h3>{`Worked example: building the four-velocity`}</h3>
          <p>{`Differentiate the four-position with respect to proper time, not coordinate time. The result is the four-velocity:`}</p>
          <div className="lrn-eq">
            <span>{`$$u^\\mu = \\frac{ds^\\mu}{d\\tau}$$`}</span>
          </div>
          <p>{`Using $dt = \\gamma \\, d\\tau$, the spatial components pick up a factor of $\\gamma$ relative to the ordinary three-velocity, and the time component becomes $i c \\gamma$:`}</p>
          <div className="lrn-eq">
            <span>{`$$u^\\mu = \\gamma (u_x, \\, u_y, \\, u_z, \\, i c)$$`}</span>
          </div>
          <p>{`Compute its squared length: the spatial parts give $\\gamma^2 |\\vec u|^2$ and the time part gives $-\\gamma^2 c^2$. The sum is $\\gamma^2 (|\\vec u|^2 - c^2) = -c^2$. The squared length of the four-velocity is $-c^2$, the same in every frame.`}</p>
          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">{`Three-velocity`}</span>
              <p>{`Variable magnitude. Mixes between frames in a complicated way (the velocity addition formula). Not a four-vector.`}</p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">{`Four-velocity`}</span>
              <p>{`Squared length always equals $-c^2$. Transforms by Lorentz boosts in the same way the four-position does. A genuine four-vector.`}</p>
            </div>
          </div>
          <h3>{`Worked example: velocity addition from a Lorentz boost`}</h3>
          <p>{`A particle has three-velocity $u' = (u', 0, 0)$ in frame $S'$, so its four-velocity in $S'$ is $(\\gamma' u', \\, 0, \\, 0, \\, i c \\gamma')$, with $\\gamma' = \\frac{1}{\\sqrt{1 - \\frac{u'^2}{c^2}}}$.`}</p>
          <p>{`Now apply the Lorentz boost to frame $S$, in which $S'$ moves at speed $v$ along the $x$-axis. The spatial $x$-component of the four-velocity becomes:`}</p>
          <div className="lrn-eq">
            <span>{`$$U_x = \\gamma_v (\\gamma' u' + v \\gamma') = \\gamma_v \\gamma' (u' + v)$$`}</span>
          </div>
          <p>{`The time component becomes:`}</p>
          <div className="lrn-eq">
            <span>{`$$U_4 = \\gamma_v \\left( i c \\gamma' + \\frac{v}{c} \\gamma' u' \\cdot i \\right) = i c \\gamma_v \\gamma' \\left(1 + \\frac{v u'}{c^2}\\right)$$`}</span>
          </div>
          <p>{`In frame $S$, the four-velocity has time component $i c \\gamma$, where $\\gamma$ is the new Lorentz factor for the particle. Reading $\\gamma$ off the time component:`}</p>
          <div className="lrn-eq">
            <span>{`$$\\gamma = \\gamma_v \\gamma' \\left(1 + \\frac{v u'}{c^2}\\right)$$`}</span>
          </div>
          <p>{`The three-velocity in $S$ is the spatial four-velocity component divided by $\\gamma$. Doing the division and simplifying gives:`}</p>
          <div className="lrn-eq">
            <span>{`$$u = \\frac{u' + v}{1 + \\frac{v u'}{c^2}}$$`}</span>
          </div>
          <p>{`This is the relativistic velocity addition formula again, now derived in two lines as a single Lorentz boost of a four-vector.`}</p>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>{`We have four-vectors for position and velocity. Is there one for momentum and energy too? If so, what would its components have to be in order to reduce to the relativistic three-momentum and total energy at low speeds?`}</p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>{`Yes. Multiply the four-velocity by the rest mass $m_0$. The spatial components give $\\gamma m_0 \\vec u$, which is the relativistic three-momentum. The time component gives $i \\gamma m_0 c = \\frac{i E}{c}$ once you remember $E = \\gamma m_0 c^2$. The next section makes this precise.`}</p>
            </details>
          </div>
        </>,
        <>
          <h2>{`The Momentum-Energy Four-vector`}</h2>
          <p>{`Combining the relativistic three-momentum and the total energy into a single four-vector is the most useful step in the whole theory. It packages two conservation laws into one and makes collision problems clean.`}</p>
          <h3>{`Constructing it`}</h3>
          <p>{`Multiply the four-velocity by the rest mass $m_0$:`}</p>
          <div className="lrn-eq">
            <span>{`$$p^\\mu = m_0 u^\\mu = \\left(p_x, \\, p_y, \\, p_z, \\, \\frac{i E}{c}\\right)$$`}</span>
          </div>
          <p>{`The first three components are the relativistic three-momentum $\\vec p = \\gamma m_0 \\vec u$. The fourth is $\\frac{i E}{c}$, where $E = \\gamma m_0 c^2$ is the total energy. This single object packages the three momentum components and the energy together. Conservation of four-momentum in a collision is conservation of three-momentum plus conservation of energy, in one equation that holds in every inertial frame.`}</p>
          <h3>{`The four-force (Minkowski force)`}</h3>
          <p>{`Differentiate the four-momentum with respect to proper time and you get the four-force, the relativistic replacement for Newton's second law:`}</p>
          <div className="lrn-eq">
            <span>{`$$F^\\mu = \\frac{dp^\\mu}{d\\tau} = \\gamma \\left( \\vec F, \\, \\frac{i}{c} \\frac{dE}{dt} \\right)$$`}</span>
          </div>
          <p>{`The spatial part is $\\gamma$ times the ordinary three-force. The time part is the rate at which the particle's energy changes, scaled by $\\frac{i}{c}$.`}</p>
          <h3>{`Recovering the energy-momentum relation`}</h3>
          <p>{`The squared length of $p^\\mu$ is the same in every frame. Compute it directly: the spatial components contribute $p^2$, and the time component contributes $-\\left(\\frac{E}{c}\\right)^2$ because of the $i$. The squared length equals the invariant we expect from $u^\\mu u_\\mu = -c^2$ multiplied by $m_0^2$:`}</p>
          <div className="lrn-eq">
            <span>{`$$p^\\mu p_\\mu = p^2 - \\frac{E^2}{c^2} = -m_0^2 c^2$$`}</span>
          </div>
          <p>{`Rearrange to get the energy-momentum relation we already met:`}</p>
          <div className="lrn-eq">
            <span>{`$$E^2 = (p c)^2 + (m_0 c^2)^2$$`}</span>
          </div>
          <p>{`The four-vector framework hands us this identity in one line, with no work-energy integral needed.`}</p>
          <h3>{`Worked example: the Doppler effect from a four-vector`}</h3>
          <p>{`A photon emitted in the source's rest frame has four-momentum $\\left(p, 0, 0, \\, \\frac{i E}{c}\\right)$, with $E = pc$. Apply the Lorentz boost between source frame and observer frame. The new time component reads off the photon's energy in the observer frame, and dividing by $h$ gives the observed frequency. Working through the algebra reproduces the same Doppler formula derived earlier from wave-period considerations. Two routes, one answer: this is wave-particle duality at the level of the formulas.`}</p>
          <h3>{`Worked example: the relativistic center-of-mass frame`}</h3>
          <p>{`Two particles approach each other. In the lab frame, particle 1 carries momentum $p_1$ and energy $E_1$, while particle 2 sits at rest with mass $M$ and energy $Mc^2$. The total four-momentum has spatial part $p_1$ and time part $\\frac{i(E_1 + Mc^2)}{c}$. The center-of-mass (CM) frame is the inertial frame in which the total spatial momentum is zero. To find its velocity relative to the lab, boost the four-momentum until the spatial part vanishes:`}</p>
          <div className="lrn-eq">
            <span>{`$$V = \\frac{p_1 c^2}{E_1 + Mc^2}$$`}</span>
          </div>
          <p>{`This is the speed at which a lab observer would have to move in order to sit at the system's center of mass.`}</p>
          <h3>{`Worked example: how much energy is actually useful`}</h3>
          <p>{`The total energy $E'$ available in the CM frame for making new particles equals the system's invariant mass. Compute it from lab quantities:`}</p>
          <div className="lrn-eq">
            <span>{`$$E'^2 = (E_1 + Mc^2)^2 - (p_1 c)^2$$`}</span>
          </div>
          <p>{`Expand the square and use $E_1^2 - (p_1 c)^2 = (m_1 c^2)^2$ for the projectile's rest mass $m_1$:`}</p>
          <div className="lrn-eq">
            <span>{`$$E'^2 = (m_1 c^2)^2 + 2 E_1 Mc^2 + (Mc^2)^2$$`}</span>
          </div>
          <p>{`For a high-energy projectile, $E_1 \\gg m_1 c^2$ and $E_1 \\gg Mc^2$, so the middle term dominates. Take the square root:`}</p>
          <div className="lrn-eq">
            <span>{`$$\\frac{E'}{E_1} \\approx \\sqrt{\\frac{2 Mc^2}{E_1}}$$`}</span>
          </div>
          <p>{`The useful CM energy grows only as $\\sqrt{E_1}$. Double the beam energy and you get only $\\sqrt{2}$ times more energy available for making new particles. The rest of the energy is locked up in the bulk motion of the final state and cannot be recovered. This is why high-energy facilities like the LHC are colliders, not fixed-target machines: in a head-on collision of equal beams the total momentum is already zero, and every joule of beam energy is available to make new mass.`}</p>
          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">{`Fixed-target machine`}</span>
              <p>{`Most of the beam energy goes into bulk motion of the final-state debris and is unusable for creating new particles. Useful energy grows only as $\\sqrt{E_1}$.`}</p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">{`Collider`}</span>
              <p>{`Two beams collide head-on with equal and opposite momenta. The total momentum is zero, so every joule of beam energy is available for making new particles. Useful energy scales linearly with beam energy.`}</p>
            </div>
          </div>
          <h3>{`Worked example: pair production in electron-electron collision`}</h3>
          <p>{`A fast electron hits a stationary electron. How much kinetic energy does the projectile need to produce two extra electron-positron pairs, in the reaction $e^- + e^- \\to 4 \\, e^- + 2 \\, e^+$? Use four-momentum invariance.`}</p>
          <p>{`In the CM frame at the threshold, all six final-state particles are at rest, so the total CM energy is $6 m_e c^2$ and the squared invariant mass is $(6 m_e c^2)^2$. Equate this to the lab-frame squared invariant of the initial state, $(E_1 + m_e c^2)^2 - (p_1 c)^2$, where $E_1$ and $p_1$ are the projectile electron's lab energy and momentum. Use $E_1^2 - (p_1 c)^2 = (m_e c^2)^2$ to simplify, and solve for $E_1$. The result is $E_1 = 17 m_e c^2$, so the projectile's kinetic energy is:`}</p>
          <div className="lrn-eq">
            <span>{`$$K_\\text{min} = E_1 - m_e c^2 = 16 m_e c^2$$`}</span>
          </div>
          <p>{`(K&K, working with a different stoichiometry that produces a total of four electrons in the final state, gets $K_\\text{min} = 6 m_e c^2$. The reasoning is identical; only the rest-mass count differs.) The threshold is many times the rest mass of the new pairs, because four-momentum invariance forces the projectile to supply enough energy for the new particles' bulk motion as well as their rest mass.`}</p>
          <h3>{`Beyond special relativity`}</h3>
          <p>{`Special relativity describes how physics looks when observers move at constant velocity relative to each other in flat, gravity-free spacetime. It does not handle accelerating frames or gravity. To extend the theory to those, you need general relativity. The key bridge is the equivalence principle: locally, a uniformly accelerating frame and a frame at rest in a gravitational field are indistinguishable. General relativity then describes gravity as the curvature of four-dimensional spacetime, with special relativity recovered as the local, flat-spacetime limit.`}</p>
          <p>{`Even within its proper scope, special relativity is not just a curiosity. It underlies all of particle physics, where particles routinely move at near-light speeds. It corrects the timing in the GPS satellites that your phone uses to navigate (their fast orbital motion plus the gravitational shift adds up to tens of microseconds per day). It is built into Maxwell's equations and into every modern formulation of electromagnetism. The two postulates and their consequences are not academic; they are the working tools of every physicist who deals with energy, motion, or light.`}</p>
        </>
      ]
    },
    practice: [
      {
        q: `State the two postulates of special relativity.`,
        a: `First, all laws of physics are the same in every inertial frame. Second, the speed of light in vacuum is the same value $c$ for every inertial observer. The second is the radical postulate.`
      },
      {
        q: `Why must the speed of light be the same in every frame?`,
        a: `If observers measured different speeds for the same light pulse, Maxwell's equations would not be the same in every frame. That breaks the principle of relativity. The only escape is to make $c$ a universal constant.`
      },
      {
        q: `Write the Galilean transformations between two frames moving at relative speed $v$.`,
        a: `They are $x' = x - vt$, $y' = y$, $z' = z$, and $t' = t$. Time is absolute and shared. Velocities just add.`
      },
      {
        q: `Why do the Galilean transformations fail for light?`,
        a: `A light pulse moving at $c$ in one frame should move at $c - v$ in a frame moving at $v$. But experiment and Maxwell say light always moves at $c$. So the Galilean transformation cannot describe light correctly.`
      },
      {
        q: `Write the forward Lorentz transformation.`,
        a: `They are $x' = \\gamma (x - vt)$ and $t' = \\gamma\\left(t - \\frac{vx}{c^2}\\right)$, with $y' = y$ and $z' = z$. The factor $\\gamma = \\frac{1}{\\sqrt{1 - \\frac{v^2}{c^2}}}$ controls the mixing. The time equation mixes space into time.`
      },
      {
        q: `Compute $\\gamma$ for $v = 0.6c$.`,
        a: `$\\gamma = \\frac{1}{\\sqrt{1 - 0.36}} = \\frac{1}{\\sqrt{0.64}} = \\frac{1}{0.8} = 1.25$. So time dilates by a factor 1.25 and lengths contract by the same factor. This is a common test value.`
      },
      {
        q: `Compute $\\gamma$ for $v = 0.8c$.`,
        a: `$\\gamma = \\frac{1}{\\sqrt{1 - 0.64}} = \\frac{1}{\\sqrt{0.36}} = \\frac{1}{0.6} \\approx 1.667$. So clocks moving at 0.8c run at about 60 percent of the rest rate. Lengths shrink to 60 percent of the rest length.`
      },
      {
        q: `Compute $\\gamma$ for $v = 0.99c$.`,
        a: `$\\gamma = \\frac{1}{\\sqrt{1 - 0.9801}} = \\frac{1}{\\sqrt{0.0199}} \\approx 7.09$. So a clock moving this fast appears to tick at one seventh the rest rate. This regime needs full relativistic treatment.`
      },
      {
        q: `Why is $\\gamma$ always greater than or equal to 1?`,
        a: `Because $\\frac{v^2}{c^2} < 1$ for any massive object. So the denominator $\\sqrt{1 - \\frac{v^2}{c^2}}$ is less than one. Its reciprocal is at least one and approaches infinity as $v$ approaches $c$.`
      },
      {
        q: `A railwayman in the middle of a freight car flashes a lantern. Both walls light up at once for him. What does a ground observer see?`,
        a: `The ground observer sees the back wall light up first. The car moves forward, so the back wall rushes into the photon while the front wall flees. The light pulse hits the back sooner in the ground frame.`
      },
      {
        q: `Predict whether two observers always agree on the order of two events.`,
        a: `No. If the events are spacelike separated, different frames can disagree on the order. Only timelike-separated events have a fixed temporal order in every frame.`
      },
      {
        q: `Distinguish timelike and spacelike intervals.`,
        a: `Timelike: $c^2 \\Delta t^2 - \\Delta x^2 > 0$. Order is fixed in every frame, and one event can causally influence the other. Spacelike: $c^2 \\Delta t^2 - \\Delta x^2 < 0$. Order can flip between frames, and no causal link is possible.`
      },
      {
        q: `A rod has rest length 10 m. It moves at $v = 0.6c$ along its length. What length does the lab measure?`,
        a: `$\\gamma = 1.25$, so the rod contracts to $l = \\frac{10}{1.25} = 8$ m. The contraction acts only along the motion. Perpendicular dimensions are unchanged.`
      },
      {
        q: `Why does length contraction only happen along the motion direction?`,
        a: `Symmetry forbids contraction perpendicular to the motion. Imagine a rod through a ring. If perpendicular contraction happened, both observers would disagree about whether the rod fits through. Only parallel contraction avoids this contradiction.`
      },
      {
        q: `A clock has a proper period of 1 second. It moves at $v = 0.8c$. How long does the lab see between ticks?`,
        a: `$\\gamma = 1.667$, so the lab sees $T = \\gamma \\tau = 1.667$ s between ticks. The moving clock appears slowed by the factor $\\gamma$. Both observers measure the same speed of light.`
      },
      {
        q: `Why do moving clocks run slow? Use the light clock argument.`,
        a: `A photon bounces between two mirrors. In the rest frame the photon goes straight up and down. In a frame where the clock moves, the photon takes a longer diagonal path. Since light always moves at $c$, the longer path means more time per tick.`
      },
      {
        q: `Cosmic ray muons are made 10 km up. Their proper half-life is 1.5 microseconds. Why do many reach the ground?`,
        a: `At nearly $c$, muons have $\\gamma \\approx 10$. So their effective half-life in our frame is about 15 microseconds. They travel about 4.5 km before half decay, so a sizable fraction makes it to sea level.`
      },
      {
        q: `How does muon decay confirm time dilation experimentally?`,
        a: `Without dilation, almost no muons should reach the ground. The observed flux at sea level is far higher than that. The flux is consistent with a dilated half-life $\\gamma \\tau$, confirming the prediction.`
      },
      {
        q: `A spaceship moves at 0.5c. From its bow it fires a missile forward at 0.5c relative to the ship. What is the missile's speed in your frame?`,
        a: `Use $u = \\frac{(0.5 + 0.5)c}{1 + 0.25} = \\frac{c}{1.25} = 0.8c$. Velocities do not add classically. The combined speed is below $c$, as required.`
      },
      {
        q: `Two beams of light approach each other from opposite directions. What is their relative speed in either beam's frame?`,
        a: `Light has no rest frame, so the question of "the beam's frame" is not well-defined. From the lab frame, both beams move at $c$. In any inertial frame, each beam moves at $c$.`
      },
      {
        q: `A particle moves at 0.9c. From your frame it shoots out another particle forward at 0.9c. Find the second particle's lab speed.`,
        a: `$u = \\frac{(0.9 + 0.9)c}{1 + 0.81} = \\frac{1.8c}{1.81} \\approx 0.994c$. The combined speed is still below $c$. Even very fast inputs cannot push the result over the limit.`
      },
      {
        q: `Why is $c$ a hard speed ceiling?`,
        a: `The denominator in velocity addition grows as the inputs approach $c$. For any inputs at or below $c$, the combined speed cannot exceed $c$. Light remains $c$ in every frame.`
      },
      {
        q: `State the longitudinal relativistic Doppler formula for an approaching source.`,
        a: `$\\nu_D = \\nu_0 \\sqrt{\\frac{1 + \\frac{v}{c}}{1 - \\frac{v}{c}}}$. The frequency increases as the source approaches. For a receding source, replace $v$ with $-v$. The formula uses only relative velocity since light has no medium.`
      },
      {
        q: `A galaxy emits hydrogen lines at $\\nu_0$. We observe them at $0.5 \\nu_0$. Estimate its recession speed.`,
        a: `Use $\\sqrt{\\frac{1 - \\frac{v}{c}}{1 + \\frac{v}{c}}} = 0.5$. Squaring gives $\\frac{1 - \\frac{v}{c}}{1 + \\frac{v}{c}} = 0.25$. Solve: $\\frac{v}{c} = 0.6$. The galaxy recedes at $0.6c$.`
      },
      {
        q: `What is the transverse Doppler shift, and why does it exist?`,
        a: `At $\\theta = 90^\\circ$, $\\nu_D = \\nu_0 \\sqrt{1 - \\frac{v^2}{c^2}}$. It exists purely from time dilation. Even with no radial motion, the moving clock ticks slower, so its emission rate drops.`
      },
      {
        q: `Why is there a transverse Doppler effect even with zero radial velocity?`,
        a: `The source is a moving clock. Time dilation slows its emission rate. So you see fewer wavefronts per second, even at the moment of closest approach. There is no classical analog.`
      },
      {
        q: `Why does sound have separate Doppler formulas for moving source and moving observer?`,
        a: `Sound propagates through a medium that picks a preferred frame. Motion of the source through air differs physically from motion of the observer through air. Light has no medium, so only relative velocity matters.`
      },
      {
        q: `A satellite emits a steady frequency. What does the Doppler shift profile during a pass tell you?`,
        a: `The shift goes from blueshift on approach to redshift on recession. From the curve you can extract the satellite's speed and altitude. This is the basis of early satellite navigation.`
      },
      {
        q: `One twin flies to a distant star at near $c$ and returns. The other stays home. Who is younger when they meet?`,
        a: `The traveling twin is younger. The stay-at-home twin remains in one inertial frame. The traveler switches frames at turnaround, breaking the symmetry. Only the traveler accumulates less proper time.`
      },
      {
        q: `Why is the twin paradox not symmetric, even though each twin sees the other's clock as slow during the legs?`,
        a: `Because the traveler accelerates at the turnaround, while the stay-at-home twin does not. The acceleration breaks the symmetry. Only the stay-at-home twin remains in a single inertial frame throughout.`
      },
      {
        q: `Predict what happens to twin B's perceived signal rate from twin A during the outbound leg.`,
        a: `Twin B sees twin A's signals slowed and redshifted. They are moving apart, and time dilation plus increased path length both apply. After turnaround, the signals become fast and blueshifted on the return leg.`
      },
      {
        q: `Write the relativistic mass formula.`,
        a: `$m(V) = \\frac{m_0}{\\sqrt{1 - \\frac{V^2}{c^2}}} = \\gamma m_0$. The rest mass $m_0$ is what you measure when the particle is at rest. The relativistic mass grows with speed and diverges at $c$.`
      },
      {
        q: `Why must mass grow with speed in special relativity?`,
        a: `Conservation of momentum in different inertial frames demands it. A glancing-collision argument shows that momentum conservation works in every frame only if mass scales as $\\gamma m_0$. Otherwise, momentum would not be conserved consistently.`
      },
      {
        q: `How did Bucherer test the relativistic mass formula?`,
        a: `He measured electron deflection in known fields as the speed varied. The deflection followed $\\gamma m_0$, not Newton's constant mass. His 1909 data confirmed the relativistic prediction directly.`
      },
      {
        q: `Write the relativistic momentum and total energy of a particle of rest mass $m_0$ moving at $u$.`,
        a: `$p = \\gamma m_0 u$ and $E = \\gamma m_0 c^2$. The rest energy is $E_0 = m_0 c^2$, recovered when $u = 0$. The Newtonian limits agree at low speeds.`
      },
      {
        q: `Write the relativistic kinetic energy.`,
        a: `$K = (\\gamma - 1) m_0 c^2 = m c^2 - m_0 c^2$. This is the total energy minus the rest energy. At low speeds it reduces to $\\tfrac{1}{2} m_0 v^2$.`
      },
      {
        q: `Show that the relativistic kinetic energy reduces to the Newtonian form at low speed.`,
        a: `Expand $\\gamma = \\frac{1}{\\sqrt{1 - \\frac{v^2}{c^2}}} \\approx 1 + \\tfrac{1}{2} \\cdot \\frac{v^2}{c^2}$. Then $K \\approx \\tfrac{1}{2} \\cdot \\frac{v^2}{c^2} \\cdot m_0 c^2 = \\tfrac{1}{2} m_0 v^2$. The Newtonian formula is the small-velocity limit.`
      },
      {
        q: `Compute the kinetic energy of a 1 MeV electron given that $m_e c^2 = 0.511$ MeV.`,
        a: `Total energy is $E = K + m_0 c^2 = 1 + 0.511 = 1.511$ MeV. So $\\gamma = \\frac{E}{m_0 c^2} = \\frac{1.511}{0.511} \\approx 2.96$. Solving for $v$: $\\frac{v}{c} = \\sqrt{1 - \\frac{1}{\\gamma^2}} \\approx 0.94$.`
      },
      {
        q: `State and explain mass-energy equivalence.`,
        a: `$E = m c^2$. Any energy added to a system, whether kinetic, thermal, or chemical, increases its mass by $\\frac{\\Delta E}{c^2}$. All forms of energy contribute to inertia.`
      },
      {
        q: `Heating a brick raises its temperature. Predict whether its mass changes.`,
        a: `Yes. The added thermal energy adds $\\frac{\\Delta E}{c^2}$ to the rest mass. The change is tiny but real. All energy gain shows up as mass gain.`
      },
      {
        q: `Two equal masses $m_0$ collide head-on at speed $u$ and stick. Find the rest mass of the combined object.`,
        a: `Initial energy is $2 \\gamma m_0 c^2$. After collision, momentum is zero, so all energy is rest energy. The combined rest mass is $M_0 = 2 \\gamma m_0 > 2 m_0$. The kinetic energy became internal energy.`
      },
      {
        q: `Why does the combined object weigh more than the sum of the parts?`,
        a: `Because the kinetic energy of the colliding particles became internal energy in the combined object. That internal energy adds to the rest mass via $E = mc^2$. Mass is a measure of internal energy.`
      },
      {
        q: `How did the Cockcroft-Walton experiment confirm $E = mc^2$?`,
        a: `Bombarding lithium with protons gave $\\text{Li}^7 + \\text{p} \\to 2 \\text{He}^4$. The total rest mass dropped slightly. The missing mass appeared as kinetic energy of the helium nuclei, matching $\\Delta m c^2$ exactly.`
      },
      {
        q: `Write the energy-momentum relation.`,
        a: `$E^2 = (pc)^2 + (m_0 c^2)^2$. This relation holds for any particle, including massless ones. It comes from squaring $E = \\gamma m_0 c^2$ and $p = \\gamma m_0 u$.`
      },
      {
        q: `Use the energy-momentum relation to find the energy of a massless particle with momentum $p$.`,
        a: `Set $m_0 = 0$ in $E^2 = (pc)^2 + (m_0 c^2)^2$. The result is $E = pc$. Massless particles have linked energy and momentum.`
      },
      {
        q: `Why must a massless particle travel at $c$?`,
        a: `From $E = \\gamma m_0 c^2$, a finite energy with $m_0 = 0$ requires $\\gamma$ infinite, hence $u = c$. Any other speed gives zero energy or contradicts the formulas. So any massless particle moves at exactly $c$.`
      },
      {
        q: `A photon has energy 2 eV. Find its momentum.`,
        a: `$p = \\frac{E}{c} = \\frac{2 \\text{ eV}}{c}$. In SI units, $E = 2 \\times 1.6 \\times 10^{-19}$ J, so $p = \\frac{3.2 \\times 10^{-19}}{3 \\times 10^8} \\approx 1.07 \\times 10^{-27}$ kg m/s.`
      },
      {
        q: `State Einstein's photoelectric equation.`,
        a: `$K_\\text{max} = h\\nu - W$, where $W$ is the work function of the metal. Photons either dislodge an electron or fail entirely. The maximum electron kinetic energy depends linearly on frequency.`
      },
      {
        q: `Why is there a cutoff frequency below which no photoelectrons emerge?`,
        a: `Each photon carries quantum energy $h\\nu$. Below the cutoff, no single photon has enough energy to overcome the work function $W$. More intensity adds more photons but each is still too weak.`
      },
      {
        q: `An absorbing surface receives light of intensity $I$. What radiation pressure does it experience? What if the surface is a perfect mirror?`,
        a: `K&K shows pressure equals $\\frac{I}{c}$ for a perfect absorber and $\\frac{2I}{c}$ for a perfect mirror. The mirror case doubles the pressure because each photon's momentum reverses on reflection, so the surface absorbs twice the momentum per unit time.`
      },
      {
        q: `How does the radiation pressure on a mirror compare to that on an absorber?`,
        a: `A mirror reflects the photon, doubling the momentum transfer. So $P_\\text{mirror} = \\frac{2 I}{c}$ and $P_\\text{absorber} = \\frac{I}{c}$. The mirror feels twice the pressure for the same intensity.`
      },
      {
        q: `Write the Compton shift formula.`,
        a: `$\\lambda - \\lambda_0 = \\frac{h}{m_0 c}(1 - \\cos\\theta)$. The factor $\\frac{h}{m_0 c}$ is the Compton wavelength of the electron, equal to $2.43 \\times 10^{-12}$ m. The wavelength always increases on scattering.`
      },
      {
        q: `Why is the Compton shift independent of the original wavelength?`,
        a: `The shift depends only on the electron mass and scattering angle. The photon transfers a piece of momentum that depends on geometry, not on the photon's energy. So the absolute wavelength change is universal.`
      },
      {
        q: `An x-ray photon with wavelength 0.05 nm scatters at 90 degrees off a free electron. Find the new wavelength.`,
        a: `Use $\\Delta\\lambda = \\frac{h}{m_e c}(1 - 0) = 2.43 \\times 10^{-12}$ m. So new wavelength is $0.05 + 0.00243$ nm $= 0.0524$ nm. The scattered photon has lower energy.`
      },
      {
        q: `Why must pair production happen near a nucleus, not in free space?`,
        a: `A free photon's energy and momentum are linked by $E = pc$. The pair's combined energy and momentum cannot match this for any pair speed less than $c$. A nucleus absorbs the extra momentum, allowing the reaction.`
      },
      {
        q: `What is the minimum photon energy needed for $e^+ e^-$ pair production?`,
        a: `The minimum is $2 m_e c^2 \\approx 1.022$ MeV. This is the rest energy of the two new particles. In practice, more energy is needed because of momentum recoil onto the nucleus.`
      },
      {
        q: `How do astronomers limit the rest mass of the photon using pulsars?`,
        a: `A massive photon would travel at a frequency-dependent speed. Pulsar pulses across many frequencies arrive simultaneously. The lack of measurable lag bounds $m_\\gamma < 10^{-47}$ kg from the Crab pulsar in the radio band.`
      },
      {
        q: `Why does a tiny photon mass give a frequency-dependent speed?`,
        a: `A massive photon obeys $E^2 = (pc)^2 + (m_\\gamma c^2)^2$. The group velocity then depends on $E$, hence on frequency. Different colors travel at slightly different speeds, observable over long distances.`
      },
      {
        q: `Define a vector by its transformation rule.`,
        a: `A vector is a triple of components $(A_1, A_2, A_3)$ that transforms as $A'_i = \\sum_j R_{ij} A_j$ under rotations $R$. The geometric "arrow" idea is intuitive but the transformation rule is the rigorous foundation.`
      },
      {
        q: `Why does the cross product $\\vec A \\times \\vec B$ qualify as a true vector?`,
        a: `Apply a rotation to $\\vec A$ and $\\vec B$ separately, then take the cross product. The result equals taking the cross product first, then rotating. Both operations commute, so the cross product transforms by the rotation rule.`
      },
      {
        q: `Why is the "double cross" $\\vec A \\times \\vec B \\times \\vec A$ ambiguous?`,
        a: `It depends on the order of grouping. $(\\vec A \\times \\vec B) \\times \\vec A$ differs from $\\vec A \\times (\\vec B \\times \\vec A)$. So such ill-defined expressions do not transform consistently.`
      },
      {
        q: `Write the position four-vector in K&K notation.`,
        a: `$s^\\mu = (x, y, z, ict)$. The fourth component uses an imaginary factor so that the squared norm becomes $x^2 + y^2 + z^2 - (ct)^2$. This norm is invariant under Lorentz transformations.`
      },
      {
        q: `What is the proper time interval $d\\tau$, and why is it invariant?`,
        a: `$d\\tau^2 = dt^2 - \\frac{1}{c^2}(dx^2 + dy^2 + dz^2)$. It equals the time read by a clock that travels between the two events. All inertial observers compute the same value.`
      },
      {
        q: `Derive time dilation from $d\\tau$.`,
        a: `In the clock's rest frame, $dx = dy = dz = 0$, so $d\\tau = dt'$. In the lab, the clock moves at $u$, so $d\\tau^2 = dt^2 \\left(1 - \\frac{u^2}{c^2}\\right) = \\frac{dt^2}{\\gamma^2}$. Thus $dt = \\gamma \\, d\\tau$.`
      },
      {
        q: `Write the four-velocity in component form.`,
        a: `$u^\\mu = \\gamma(u_x, u_y, u_z, ic)$. The three-velocity scales by $\\gamma$ and the fourth component is $i c$. Its squared norm is $-c^2$, an invariant.`
      },
      {
        q: `Why is the three-velocity not a four-vector?`,
        a: `The three-velocity has variable magnitude and depends on the frame in ways inconsistent with the Lorentz transformation rule. Only after multiplying by $\\gamma$ and adding the fourth component does it become a true four-vector.`
      },
      {
        q: `Construct the momentum-energy four-vector.`,
        a: `$p^\\mu = m_0 u^\\mu = \\left(p_x, p_y, p_z, \\frac{iE}{c}\\right)$. The first three components are the relativistic three-momentum. The fourth packages the energy.`
      },
      {
        q: `Use $p^\\mu p_\\mu = -m_0^2 c^2$ to recover the energy-momentum relation.`,
        a: `Compute $p^\\mu p_\\mu = p^2 - \\frac{E^2}{c^2}$. Setting this equal to $-m_0^2 c^2$ gives $E^2 = (pc)^2 + (m_0 c^2)^2$. The four-vector form makes the derivation immediate.`
      },
      {
        q: `Why is a collider better than a fixed-target machine for high-energy physics?`,
        a: `In fixed-target collisions, most input energy goes to bulk motion of the products. Only $E' \\approx \\sqrt{2 M c^2 E}$ is useful. In a collider, total momentum is zero, so all energy is available to make new particles.`
      },
      {
        q: `Compute the velocity of the CM frame for two particles with energies $E_1, E_2$ and momentum $p_1$ (the second at rest).`,
        a: `$V = \\frac{p_1 c^2}{E_1 + E_2}$. This is the velocity at which total spatial momentum is zero. The transformation simplifies many collision problems.`
      },
      {
        q: `What is the threshold kinetic energy for $e^- + e^- \\to 4 e$ in lab frame fixed target?`,
        a: `$K_\\text{min} = 6 m_0 c^2$. Use four-momentum invariance: at threshold, all four products are at rest in the CM frame. The total invariant is $(4 m_0 c^2)^2$, which sets the lab-frame condition.`
      },
      {
        q: `Why is the pair production threshold so much larger than the rest mass of the new particles?`,
        a: `Most input energy goes into bulk motion of the final state, not into making new mass. Four-momentum invariance forces you to "buy" both the mass and the kinetic energy at once. Hence the high threshold.`
      },
      {
        q: `How does special relativity differ from general relativity?`,
        a: `Special handles only inertial frames and ignores gravity. General handles accelerating frames and gravity through curved spacetime. Special is a subset of general where curvature is negligible.`
      },
      {
        q: `Predict what happens when you Lorentz-transform a photon's four-momentum.`,
        a: `The transformed four-momentum still satisfies $E = pc$, since the photon has $m_0 = 0$. The new energy gives the Doppler-shifted frequency. The four-vector approach reproduces the Doppler formula cleanly.`
      },
      {
        q: `Why does combining two velocities of $0.5c$ each give $0.8c$, not $c$?`,
        a: `Velocity addition uses $u = \\frac{u' + v}{1 + \\frac{u'v}{c^2}}$. With $u' = v = 0.5c$, the denominator is $1.25$. So the result is $\\frac{c}{1.25} = 0.8c$. The denominator forces the result to stay below $c$.`
      },
      {
        q: `Why is the proper length always longer than any moving observer's measurement?`,
        a: `Proper length is measured in the rod's rest frame. Any moving observer sees the rod contracted by $\\frac{1}{\\gamma}$. Since $\\gamma \\geq 1$, the moving measurement is at most as long as the proper length.`
      },
      {
        q: `A 30 m airplane flies at 0.99c. What is its length in our frame?`,
        a: `$\\gamma \\approx 7.09$, so the contracted length is $\\frac{30}{7.09} \\approx 4.23$ m. The plane appears squished along its motion. Perpendicular dimensions stay the same.`
      },
      {
        q: `Predict the order of two events that are spacelike separated.`,
        a: `Different inertial observers can see the events in different orders. There is no absolute "before" or "after" for spacelike events. They cannot causally affect one another.`
      },
      {
        q: `Why does the photon picture of the Doppler effect give the same answer as the wave picture?`,
        a: `Light has both wave and particle aspects. The Lorentz transformation of frequency and the Lorentz transformation of photon four-momentum carry the same physics. Both routes give the same Doppler formula.`
      },
      {
        q: `An electron at rest absorbs a photon. Predict whether it can re-emit a photon at higher frequency.`,
        a: `Energy and momentum conservation forbid this for a free electron. The Compton formula always gives a lower-frequency scattered photon. To re-emit at higher frequency, the electron must be bound or have stored energy.`
      },
      {
        q: `Why is conservation of four-momentum more powerful than separate conservation of energy and momentum?`,
        a: `Four-momentum conservation is a single Lorentz-invariant statement. It automatically holds in every inertial frame. Separate energy and momentum conservation can look frame-dependent until combined into the four-vector form.`
      },
      {
        q: `A massive particle is at rest. What does its four-velocity look like?`,
        a: `$u^\\mu = (0, 0, 0, ic)$. Three-velocity is zero, $\\gamma = 1$, and the fourth component is $ic$. The norm $-c^2$ is preserved as expected.`
      },
      {
        q: `Predict what happens to the four-velocity as a particle approaches $c$.`,
        a: `The spatial components grow as $\\gamma$ becomes large. The fourth component stays $ic$. The norm remains $-c^2$, an invariant.`
      }
    ],
    reference: {
      category: 'Quick Reference',
      title: 'Special Relativity (Coda)',
      sections: [
        <>
          <div className="ref-section">
            <h3 className="ref-label">Lorentz Factor and Transformations</h3>
            <div className="ref-formula">
              <span className="ref-formula-name">Lorentz factor</span>
              <div className="lrn-eq">
                <span>{`$\\gamma = \\dfrac{1}{\\sqrt{1 - \\frac{v^2}{c^2}}}$`}</span>
              </div>
              <p className="ref-when">
                <strong>When to use:</strong>{' '}
                {`Any relativistic kinematics or dynamics calculation.`}
              </p>
            </div>
            <div className="ref-formula">
              <span className="ref-formula-name">Forward Lorentz transformation</span>
              <div className="lrn-eq">
                <span>{`$x' = \\gamma(x - vt),\\ t' = \\gamma\\left(t - \\dfrac{vx}{c^2}\\right)$`}</span>
              </div>
              <p className="ref-when">
                <strong>When to use:</strong>{' '}
                {`Converting event coordinates from frame $S$ to frame $S'$.`}
              </p>
            </div>
            <div className="ref-formula">
              <span className="ref-formula-name">Inverse Lorentz transformation</span>
              <div className="lrn-eq">
                <span>{`$x = \\gamma(x' + vt'),\\ t = \\gamma\\left(t' + \\dfrac{vx'}{c^2}\\right)$`}</span>
              </div>
              <p className="ref-when">
                <strong>When to use:</strong>{' '}
                {`Converting event coordinates from $S'$ back to $S$.`}
              </p>
            </div>
            <div className="ref-formula">
              <span className="ref-formula-name">Perpendicular invariance</span>
              <div className="lrn-eq">
                <span>{`$y' = y,\\ z' = z$`}</span>
              </div>
              <p className="ref-when">
                <strong>When to use:</strong>{' '}
                {`All lengths perpendicular to the boost direction are unchanged.`}
              </p>
            </div>
            <div className="ref-formula">
              <span className="ref-formula-name">Galilean transformation</span>
              <div className="lrn-eq">
                <span>{`$x' = x - vt,\\ t' = t$`}</span>
              </div>
              <p className="ref-when">
                <strong>When to use:</strong> {`Low-speed approximation only; fails for light.`}
              </p>
            </div>
            <div className="ref-formula">
              <span className="ref-formula-name">Spacetime interval</span>
              <div className="lrn-eq">
                <span>{`$\\Delta s^2 = c^2 \\Delta t^2 - \\Delta x^2 - \\Delta y^2 - \\Delta z^2$`}</span>
              </div>
              <p className="ref-when">
                <strong>When to use:</strong>{' '}
                {`Classifying events as timelike ($> 0$) or spacelike ($< 0$).`}
              </p>
            </div>
            <table className="lrn-table">
              <thead>
                <tr>
                  <th>{`$\\frac{v}{c}$`}</th>
                  <th>{`$\\gamma$`}</th>
                  <th>{`Length contraction factor`}</th>
                  <th>{`Time dilation factor`}</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{`0.1`}</td>
                  <td>{`1.005`}</td>
                  <td>{`0.995`}</td>
                  <td>{`1.005`}</td>
                </tr>
                <tr>
                  <td>{`0.5`}</td>
                  <td>{`1.155`}</td>
                  <td>{`0.866`}</td>
                  <td>{`1.155`}</td>
                </tr>
                <tr>
                  <td>{`0.6`}</td>
                  <td>{`1.250`}</td>
                  <td>{`0.800`}</td>
                  <td>{`1.250`}</td>
                </tr>
                <tr>
                  <td>{`0.8`}</td>
                  <td>{`1.667`}</td>
                  <td>{`0.600`}</td>
                  <td>{`1.667`}</td>
                </tr>
                <tr>
                  <td>{`0.9`}</td>
                  <td>{`2.294`}</td>
                  <td>{`0.436`}</td>
                  <td>{`2.294`}</td>
                </tr>
                <tr>
                  <td>{`0.99`}</td>
                  <td>{`7.089`}</td>
                  <td>{`0.141`}</td>
                  <td>{`7.089`}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="ref-section">
            <h3 className="ref-label">Length Contraction and Time Dilation</h3>
            <div className="ref-formula">
              <span className="ref-formula-name">Length contraction</span>
              <div className="lrn-eq">
                <span>{`$l = l_0 \\sqrt{1 - \\frac{v^2}{c^2}} = \\dfrac{l_0}{\\gamma}$`}</span>
              </div>
              <p className="ref-when">
                <strong>When to use:</strong> {`Length of a moving rod measured in the lab frame.`}
              </p>
            </div>
            <div className="ref-formula">
              <span className="ref-formula-name">Time dilation</span>
              <div className="lrn-eq">
                <span>{`$T = \\gamma \\tau$`}</span>
              </div>
              <p className="ref-when">
                <strong>When to use:</strong>{' '}
                {`Time interval between ticks of a moving clock measured in the lab frame.`}
              </p>
            </div>
            <div className="ref-formula">
              <span className="ref-formula-name">Proper time interval</span>
              <div className="lrn-eq">
                <span>{`$d\\tau^2 = dt^2 - \\dfrac{1}{c^2}(dx^2 + dy^2 + dz^2)$`}</span>
              </div>
              <p className="ref-when">
                <strong>When to use:</strong>{' '}
                {`Time read by a clock that travels between two events; invariant.`}
              </p>
            </div>
          </div>
          <div className="ref-section">
            <h3 className="ref-label">Velocity Addition</h3>
            <div className="ref-formula">
              <span className="ref-formula-name">Parallel velocity addition</span>
              <div className="lrn-eq">
                <span>{`$u_x = \\dfrac{u'_x + v}{1 + \\frac{u'_x v}{c^2}}$`}</span>
              </div>
              <p className="ref-when">
                <strong>When to use:</strong> {`Combining velocities along the boost direction.`}
              </p>
            </div>
            <div className="ref-formula">
              <span className="ref-formula-name">Perpendicular velocity addition</span>
              <div className="lrn-eq">
                <span>{`$u_y = \\dfrac{u'_y \\sqrt{1 - \\frac{v^2}{c^2}}}{1 + \\frac{u'_x v}{c^2}}$`}</span>
              </div>
              <p className="ref-when">
                <strong>When to use:</strong>{' '}
                {`Velocity component perpendicular to the boost direction.`}
              </p>
            </div>
            <table className="lrn-table">
              <thead>
                <tr>
                  <th>{`$u'$ in $S'$`}</th>
                  <th>{`$v$ of $S'$`}</th>
                  <th>{`Combined $u$ in $S$`}</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{`$0.5c$`}</td>
                  <td>{`$0.5c$`}</td>
                  <td>{`$0.8c$`}</td>
                </tr>
                <tr>
                  <td>{`$0.9c$`}</td>
                  <td>{`$0.9c$`}</td>
                  <td>{`$0.994c$`}</td>
                </tr>
                <tr>
                  <td>{`$c$`}</td>
                  <td>{`any`}</td>
                  <td>{`$c$`}</td>
                </tr>
                <tr>
                  <td>{`$0.6c$`}</td>
                  <td>{`$0.6c$`}</td>
                  <td>{`$0.882c$`}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="ref-section">
            <h3 className="ref-label">Doppler Effect (Relativistic)</h3>
            <div className="ref-formula">
              <span className="ref-formula-name">Classical sound, moving source</span>
              <div className="lrn-eq">
                <span>{`$\\nu_D = \\dfrac{\\nu_0 w}{w - v}$`}</span>
              </div>
              <p className="ref-when">
                <strong>When to use:</strong> {`Sound waves with source moving through still air.`}
              </p>
            </div>
            <div className="ref-formula">
              <span className="ref-formula-name">Classical sound, moving observer</span>
              <div className="lrn-eq">
                <span>{`$\\nu_D = \\nu_0 \\left(1 + \\dfrac{v}{w}\\right)$`}</span>
              </div>
              <p className="ref-when">
                <strong>When to use:</strong>{' '}
                {`Sound waves with observer moving through still air.`}
              </p>
            </div>
            <div className="ref-formula">
              <span className="ref-formula-name">Longitudinal relativistic Doppler</span>
              <div className="lrn-eq">
                <span>{`$\\nu_D = \\nu_0 \\sqrt{\\dfrac{1 + \\frac{v}{c}}{1 - \\frac{v}{c}}}$`}</span>
              </div>
              <p className="ref-when">
                <strong>When to use:</strong>{' '}
                {`Light source moving directly toward observer; use $-v$ for receding.`}
              </p>
            </div>
            <div className="ref-formula">
              <span className="ref-formula-name">General relativistic Doppler</span>
              <div className="lrn-eq">
                <span>{`$\\nu_D = \\dfrac{\\nu_0 \\sqrt{1 - \\frac{v^2}{c^2}}}{1 - \\frac{v}{c}\\cos\\theta}$`}</span>
              </div>
              <p className="ref-when">
                <strong>When to use:</strong>{' '}
                {`Light source moving at angle $\\theta$ to line of sight.`}
              </p>
            </div>
            <div className="ref-formula">
              <span className="ref-formula-name">Transverse Doppler</span>
              <div className="lrn-eq">
                <span>{`$\\nu_D = \\nu_0 \\sqrt{1 - \\frac{v^2}{c^2}}$`}</span>
              </div>
              <p className="ref-when">
                <strong>When to use:</strong>{' '}
                {`Source moving perpendicular to line of sight; pure time dilation effect.`}
              </p>
            </div>
          </div>
          <div className="ref-section">
            <h3 className="ref-label">Relativistic Momentum and Energy</h3>
            <div className="ref-formula">
              <span className="ref-formula-name">Relativistic mass</span>
              <div className="lrn-eq">
                <span>{`$m = \\dfrac{m_0}{\\sqrt{1 - \\frac{u^2}{c^2}}} = \\gamma m_0$`}</span>
              </div>
              <p className="ref-when">
                <strong>When to use:</strong> {`Mass of a particle moving at speed $u$.`}
              </p>
            </div>
            <div className="ref-formula">
              <span className="ref-formula-name">Relativistic momentum</span>
              <div className="lrn-eq">
                <span>{`$p = \\gamma m_0 u$`}</span>
              </div>
              <p className="ref-when">
                <strong>When to use:</strong>{' '}
                {`Momentum at any speed; reduces to $m_0 u$ at low speed.`}
              </p>
            </div>
            <div className="ref-formula">
              <span className="ref-formula-name">Total energy</span>
              <div className="lrn-eq">
                <span>{`$E = \\gamma m_0 c^2 = m c^2$`}</span>
              </div>
              <p className="ref-when">
                <strong>When to use:</strong> {`Total energy including rest energy.`}
              </p>
            </div>
            <div className="ref-formula">
              <span className="ref-formula-name">Rest energy</span>
              <div className="lrn-eq">
                <span>{`$E_0 = m_0 c^2$`}</span>
              </div>
              <p className="ref-when">
                <strong>When to use:</strong>{' '}
                {`Energy stored in the rest mass; the famous $E = mc^2$.`}
              </p>
            </div>
            <div className="ref-formula">
              <span className="ref-formula-name">Kinetic energy</span>
              <div className="lrn-eq">
                <span>{`$K = (\\gamma - 1) m_0 c^2 = m c^2 - m_0 c^2$`}</span>
              </div>
              <p className="ref-when">
                <strong>When to use:</strong> {`Energy of motion only, excluding rest energy.`}
              </p>
            </div>
            <div className="ref-formula">
              <span className="ref-formula-name">Mass-energy equivalence</span>
              <div className="lrn-eq">
                <span>{`$\\Delta E = \\Delta m \\cdot c^2$`}</span>
              </div>
              <p className="ref-when">
                <strong>When to use:</strong>{' '}
                {`Any reaction where mass converts to energy or vice versa.`}
              </p>
            </div>
            <div className="ref-formula">
              <span className="ref-formula-name">Four-force (Minkowski)</span>
              <div className="lrn-eq">
                <span>{`$F^\\mu = \\dfrac{dp^\\mu}{d\\tau}$`}</span>
              </div>
              <p className="ref-when">
                <strong>When to use:</strong>{' '}
                {`Relativistic generalization of Newton's second law.`}
              </p>
            </div>
          </div>
          <div className="ref-section">
            <h3 className="ref-label">Energy-Momentum Relation</h3>
            <div className="ref-formula">
              <span className="ref-formula-name">Energy-momentum relation</span>
              <div className="lrn-eq">
                <span>{`$E^2 = (pc)^2 + (m_0 c^2)^2$`}</span>
              </div>
              <p className="ref-when">
                <strong>When to use:</strong>{' '}
                {`Connecting energy and momentum for any particle, massive or massless.`}
              </p>
            </div>
            <div className="ref-formula">
              <span className="ref-formula-name">Massless particle relation</span>
              <div className="lrn-eq">
                <span>{`$E = pc$`}</span>
              </div>
              <p className="ref-when">
                <strong>When to use:</strong> {`Photons and any other massless particle.`}
              </p>
            </div>
            <table className="lrn-table">
              <thead>
                <tr>
                  <th>{`Particle`}</th>
                  <th>{`$m_0$`}</th>
                  <th>{`$E$ if $u = 0.99c$`}</th>
                  <th>{`Note`}</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{`Electron`}</td>
                  <td>{`0.511 MeV/c²`}</td>
                  <td>{`3.62 MeV`}</td>
                  <td>{`$\\gamma \\approx 7.09$`}</td>
                </tr>
                <tr>
                  <td>{`Proton`}</td>
                  <td>{`938 MeV/c²`}</td>
                  <td>{`6.65 GeV`}</td>
                  <td>{`Heavy, hard to accelerate`}</td>
                </tr>
                <tr>
                  <td>{`Photon`}</td>
                  <td>{`0`}</td>
                  <td>{`$pc$`}</td>
                  <td>{`Always at speed $c$`}</td>
                </tr>
                <tr>
                  <td>{`Neutrino`}</td>
                  <td>{`$\\approx 0$`}</td>
                  <td>{`$\\approx pc$`}</td>
                  <td>{`Treated as massless to good approximation`}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="ref-section">
            <h3 className="ref-label">Massless Particles</h3>
            <div className="ref-formula">
              <span className="ref-formula-name">Photon energy and frequency</span>
              <div className="lrn-eq">
                <span>{`$E = h \\nu$`}</span>
              </div>
              <p className="ref-when">
                <strong>When to use:</strong>{' '}
                {`Quantum picture of light, with $h = 6.626 \\times 10^{-34}$ J·s.`}
              </p>
            </div>
            <div className="ref-formula">
              <span className="ref-formula-name">Photon momentum and wavelength</span>
              <div className="lrn-eq">
                <span>{`$p = \\dfrac{h}{\\lambda} = \\dfrac{h\\nu}{c}$`}</span>
              </div>
              <p className="ref-when">
                <strong>When to use:</strong> {`De Broglie-like relation for photons.`}
              </p>
            </div>
            <div className="ref-formula">
              <span className="ref-formula-name">Photoelectric equation</span>
              <div className="lrn-eq">
                <span>{`$K_\\text{max} = h\\nu - W$`}</span>
              </div>
              <p className="ref-when">
                <strong>When to use:</strong>{' '}
                {`Maximum kinetic energy of photoelectrons; $W$ is the work function.`}
              </p>
            </div>
            <div className="ref-formula">
              <span className="ref-formula-name">Radiation pressure (absorber)</span>
              <div className="lrn-eq">
                <span>{`$P = \\dfrac{I}{c}$`}</span>
              </div>
              <p className="ref-when">
                <strong>When to use:</strong>{' '}
                {`Pressure on a perfect absorber from light intensity $I$.`}
              </p>
            </div>
            <div className="ref-formula">
              <span className="ref-formula-name">Radiation pressure (mirror)</span>
              <div className="lrn-eq">
                <span>{`$P = \\dfrac{2I}{c}$`}</span>
              </div>
              <p className="ref-when">
                <strong>When to use:</strong>{' '}
                {`Pressure on a perfect mirror; reflection doubles momentum transfer.`}
              </p>
            </div>
            <div className="ref-formula">
              <span className="ref-formula-name">Compton shift</span>
              <div className="lrn-eq">
                <span>{`$\\lambda - \\lambda_0 = \\dfrac{h}{m_0 c}(1 - \\cos\\theta)$`}</span>
              </div>
              <p className="ref-when">
                <strong>When to use:</strong>{' '}
                {`Wavelength shift after photon scatters off a free electron at angle $\\theta$.`}
              </p>
            </div>
            <div className="ref-formula">
              <span className="ref-formula-name">Pair production threshold</span>
              <div className="lrn-eq">
                <span>{`$E_\\gamma \\geq 2 m_e c^2 \\approx 1.022 \\text{ MeV}$`}</span>
              </div>
              <p className="ref-when">
                <strong>When to use:</strong>{' '}
                {`Minimum photon energy for $\\gamma \\to e^+ e^-$ near a nucleus.`}
              </p>
            </div>
          </div>
          <div className="ref-section">
            <h3 className="ref-label">Four-vectors</h3>
            <div className="ref-formula">
              <span className="ref-formula-name">Position four-vector</span>
              <div className="lrn-eq">
                <span>{`$s^\\mu = (x, y, z, ict)$`}</span>
              </div>
              <p className="ref-when">
                <strong>When to use:</strong>{' '}
                {`Lorentz-covariant location of an event in spacetime.`}
              </p>
            </div>
            <div className="ref-formula">
              <span className="ref-formula-name">Four-velocity</span>
              <div className="lrn-eq">
                <span>{`$u^\\mu = \\gamma(u_x, u_y, u_z, ic)$`}</span>
              </div>
              <p className="ref-when">
                <strong>When to use:</strong>{' '}
                {`Lorentz-covariant version of velocity; norm is $-c^2$.`}
              </p>
            </div>
            <div className="ref-formula">
              <span className="ref-formula-name">Four-momentum</span>
              <div className="lrn-eq">
                <span>{`$p^\\mu = \\left(p_x, p_y, p_z, \\dfrac{iE}{c}\\right)$`}</span>
              </div>
              <p className="ref-when">
                <strong>When to use:</strong>{' '}
                {`Combined energy and momentum in a single Lorentz-covariant object.`}
              </p>
            </div>
            <div className="ref-formula">
              <span className="ref-formula-name">Four-momentum norm</span>
              <div className="lrn-eq">
                <span>{`$p^\\mu p_\\mu = -m_0^2 c^2$`}</span>
              </div>
              <p className="ref-when">
                <strong>When to use:</strong>{' '}
                {`Recovering the energy-momentum relation; same in every frame.`}
              </p>
            </div>
            <div className="ref-formula">
              <span className="ref-formula-name">Lorentz-invariant norm</span>
              <div className="lrn-eq">
                <span>{`$x^2 + y^2 + z^2 - (ct)^2 = \\text{invariant}$`}</span>
              </div>
              <p className="ref-when">
                <strong>When to use:</strong> {`Computing spacetime intervals between events.`}
              </p>
            </div>
            <div className="ref-formula">
              <span className="ref-formula-name">CM frame velocity (two particles)</span>
              <div className="lrn-eq">
                <span>{`$V = \\dfrac{p_1 c^2}{E_1 + E_2}$`}</span>
              </div>
              <p className="ref-when">
                <strong>When to use:</strong>{' '}
                {`Boosting to the center-of-mass frame for collision analysis.`}
              </p>
            </div>
            <div className="ref-formula">
              <span className="ref-formula-name">Useful energy fraction (fixed target)</span>
              <div className="lrn-eq">
                <span>{`$\\dfrac{E'}{E} \\approx \\sqrt{\\dfrac{2 M c^2}{E}}$`}</span>
              </div>
              <p className="ref-when">
                <strong>When to use:</strong>{' '}
                {`Estimating energy available for new particles in fixed-target experiments.`}
              </p>
            </div>
            <div className="ref-formula">
              <span className="ref-formula-name">
                Pair production threshold $e^- + e^- \to 4 e$
              </span>
              <div className="lrn-eq">
                <span>{`$K_\\text{min} = 6 m_0 c^2$`}</span>
              </div>
              <p className="ref-when">
                <strong>When to use:</strong>{' '}
                {`Threshold lab kinetic energy for double pair production from electron-electron.`}
              </p>
            </div>
          </div>
          <div className="ref-section">
            <h3 className="ref-label">Conversion Constants</h3>
            <table className="lrn-table">
              <thead>
                <tr>
                  <th>{`Quantity`}</th>
                  <th>{`Symbol`}</th>
                  <th>{`Value`}</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{`Speed of light`}</td>
                  <td>{`$c$`}</td>
                  <td>{`$3.00 \\times 10^8$ m/s`}</td>
                </tr>
                <tr>
                  <td>{`Planck constant`}</td>
                  <td>{`$h$`}</td>
                  <td>{`$6.626 \\times 10^{-34}$ J·s`}</td>
                </tr>
                <tr>
                  <td>{`Electron mass`}</td>
                  <td>{`$m_e$`}</td>
                  <td>{`$9.11 \\times 10^{-31}$ kg or $0.511$ MeV/c²`}</td>
                </tr>
                <tr>
                  <td>{`Electron Compton wavelength`}</td>
                  <td>{`$\\dfrac{h}{m_e c}$`}</td>
                  <td>{`$2.43 \\times 10^{-12}$ m`}</td>
                </tr>
                <tr>
                  <td>{`Proton mass`}</td>
                  <td>{`$m_p$`}</td>
                  <td>{`$1.673 \\times 10^{-27}$ kg or $938$ MeV/c²`}</td>
                </tr>
                <tr>
                  <td>{`Photon mass upper bound (Crab)`}</td>
                  <td>{`$m_\\gamma$`}</td>
                  <td>{`$< 10^{-47}$ kg`}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </>
      ]
    },
    customCss: null
  }

  return <LearningTemplate config={config} />
}
