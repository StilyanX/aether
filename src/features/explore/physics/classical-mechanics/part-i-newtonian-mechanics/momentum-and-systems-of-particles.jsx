import { LearningTemplate } from '../../../../../components/learning/learning-template'
import {
  MomentumAddition,
  CMTwo,
  CMRod,
  CMTriangle,
  SpringGunRecoil,
  ImpulseVsTime,
  Tsiolkovsky,
  MomentumFlux,
  MomentumVsForce,
  DragCenterOfMass,
  ElasticCollisionCalc
} from '../../../../../components/viz/physics-viz/modules'

export default function MomentumAndSystemsOfParticles() {
  const SEC1 = (
    <>
      <h2>Why Momentum Matters</h2>

      <div className="lrn-predict">
        <span className="lrn-predict-label">PREDICT</span>
        <p>
          A loaded freight car coasts down a track. Sand pours into it from a stationary hopper. The
          car keeps moving but slows down. Why does it slow without any obvious force?
        </p>
        <details className="lrn-predict-reveal">
          <summary>Check your thinking</summary>
          <p>The sand arrives with no forward speed. The car must drag it up to its own speed.</p>
          <p>No outside force pushes the car forward, so the car's forward momentum cannot grow.</p>
          <p>
            Mass keeps rising while momentum is fixed. The only way out is for the speed to drop.
          </p>
        </details>
      </div>

      <p>
        Newton wrote his second law as a statement about momentum, not acceleration. The original
        form is {`$\\vec{F} = \\frac{d}{dt}(M\\vec{v})$`}. For constant mass this reduces to{' '}
        {`$\\vec{F} = M\\vec{a}$`}, the version you already know.
      </p>

      <p>
        Momentum is {`$\\vec{p} = m\\vec{v}$`} (defined formally in the next section). Newton's
        second law then takes the equivalent form {`$\\vec{F} = \\frac{d\\vec{p}}{dt}$`}.
      </p>

      <p>
        When mass changes with time, the two forms split. Only the momentum form gives the right
        answer.
      </p>
      <p>
        Rockets burn fuel. Cars scoop up sand. Streams hit walls. Each of these breaks{' '}
        {`$\\vec{F} = M\\vec{a}$`} but still obeys {`$\\vec{F} = \\frac{d\\vec{p}}{dt}$`}.
      </p>

      <p>
        <strong>When to use this:</strong> Reach for momentum whenever a system has many particles
        or changing mass. It also wins for collisions so brief you cannot measure the force in
        detail.
      </p>

      <h3>What This Module Delivers</h3>
      <p>By the end you can do six things:</p>
      <ul className="lrn-list">
        <li>Apply Newton's second law in momentum form to any system.</li>
        <li>Find the center of mass of a discrete or continuous body.</li>
        <li>Use conservation of momentum to solve recoil and collision problems.</li>
        <li>Compute impulse and average force during brief collisions.</li>
        <li>Derive the rocket equation and predict final speeds.</li>
        <li>Calculate forces from momentum-carrying streams and gas pressure.</li>
      </ul>

      <div className="lrn-callout">
        <p>Conservation of momentum survives where Newton's third law fails.</p>
      </div>

      <div className="lrn-elaborate">
        <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
        <p>
          Momentum tracks how much "push" an object carries. Mass measures how hard it is to start
          or stop. Velocity measures how fast it moves.
        </p>
        <p>
          The product joins both. Doubling the mass doubles the momentum. Doubling the speed doubles
          it again.
        </p>
        <p>
          A slow truck and a fast bullet can therefore carry the same momentum, even though one
          crawls and the other races.
        </p>
      </div>

      <MomentumAddition />
    </>
  )
  const SEC2 = (
    <>
      <h2>Newton's Second Law in Momentum Form</h2>

      <div className="lrn-predict">
        <span className="lrn-predict-label">PREDICT</span>
        <p>
          A rocket on the launch pad has mass {`$M_0 = 1000$`} kg. After {`$10$`} seconds it has
          burned {`$200$`} kg of fuel. Can you still write {`$\\vec{F} = M\\vec{a}$`} for the
          rocket?
        </p>
        <details className="lrn-predict-reveal">
          <summary>Check your thinking</summary>
          <p>You cannot. The mass changes, so the product rule on {`$M\\vec{v}$`} matters.</p>
          <p>The right form is always {`$\\vec{F} = \\frac{d\\vec{p}}{dt}$`}.</p>
          <p>This single change opens up every variable-mass problem.</p>
        </details>
      </div>

      <p>Define the momentum of a single particle as mass times velocity.</p>

      <div className="lrn-eq lrn-eq-display">{`$$\\vec{p} = m\\vec{v}$$`}</div>

      <p>
        Here {`$\\vec{p}$`} is momentum, {`$m$`} is the particle's mass, and {`$\\vec{v}$`} is its
        velocity. Momentum is a vector. It points the same way as the velocity, with size{' '}
        {`$|\\vec{p}| = mv$`}.
      </p>

      <p>
        <strong>When to use this:</strong> Use the momentum form whenever the mass might change with
        time, or when many particles act together as a system. The acceleration form is just a
        special case.
      </p>

      <h3>Newton's Original Statement</h3>

      <p>Newton wrote his second law about the rate of change of "quantity of motion":</p>

      <div className="lrn-eq lrn-eq-display">{`$$\\vec{F} = \\frac{d}{dt}(M\\vec{v}) = \\frac{d\\vec{p}}{dt}$$`}</div>

      <p>
        For constant mass, the derivative pulls {`$M$`} out and leaves {`$\\vec{F} = M\\vec{a}$`}.
        That is the version most textbooks teach first. Newton himself wrote the momentum form.
      </p>

      <div className="lrn-elaborate">
        <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
        <p>
          Force is the rate at which a push pours momentum into an object. One newton applied for
          one second adds one kilogram-meter-per-second of momentum.
        </p>
        <p>
          The product rule on {`$M\\vec{v}$`} gives{' '}
          {`$M\\,\\frac{d\\vec{v}}{dt} + \\vec{v}\\,\\frac{dM}{dt}$`}. The first term is mass times
          acceleration. The second tracks momentum carried in or out by mass that enters or leaves.
        </p>
        <p>
          Both pieces are real. {`$\\vec{F} = M\\vec{a}$`} drops the {`$\\vec{v}\\,\\frac{dM}{dt}$`}{' '}
          term by pretending mass is fixed.
        </p>
      </div>

      <h3>F = ma versus the Momentum Form</h3>

      <div className="lrn-compare">
        <div className="lrn-compare-col">
          <span className="lrn-compare-title">{`F = ma`}</span>
          <p>Works only when mass is constant.</p>
          <p>One particle, fixed mass, simple geometry.</p>
          <p>The classic textbook form.</p>
          <p>Fails for rockets, accreting cars, streams.</p>
        </div>
        <div className="lrn-compare-col">
          <span className="lrn-compare-title">{`F = dp/dt`}</span>
          <p>Always works, with or without changing mass.</p>
          <p>Many particles, mass flow, collisions.</p>
          <p>Newton's original form.</p>
          <p>The right tool for this whole module.</p>
        </div>
      </div>

      <MomentumVsForce />

      <h3>Setup for Many Particles</h3>

      <p>
        Real systems are rarely a single particle. To extend the law, label every particle in the
        system with an index {`$j$`}. Particle {`$j$`} has position {`$\\vec{r}_j$`} and momentum{' '}
        {`$\\vec{p}_j = m_j \\vec{v}_j$`}.
      </p>

      <p>Each particle obeys Newton's second law on its own:</p>

      <div className="lrn-eq">{`$$\\vec{f}_j = \\frac{d\\vec{p}_j}{dt}$$`}</div>

      <p>
        The total force {`$\\vec{f}_j$`} on particle {`$j$`} splits into two kinds.
      </p>

      <div className="lrn-eq">{`$$\\vec{f}_j = \\vec{f}_j^{\\,\\text{int}} + \\vec{f}_j^{\\,\\text{ext}}$$`}</div>

      <div className="lrn-definition">
        <span className="lrn-definition-term">Internal Force</span>
        <div className="lrn-definition-desc">
          <p>
            {`A force that one particle inside the system exerts on another particle inside the system.`}
          </p>
          <p>
            {`Strings, springs, contact, and electrostatic pulls between members all count as internal.`}
          </p>
        </div>
      </div>

      <div className="lrn-definition">
        <span className="lrn-definition-term">External Force</span>
        <div className="lrn-definition-desc">
          <p>{`A force that an outside agent exerts on a particle inside the system.`}</p>
          <p>
            {`Gravity from Earth, a push from outside, or a wall pressing back all count as external.`}
          </p>
        </div>
      </div>

      <div className="lrn-self-explain">
        <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
        <p>{`A book sits on a table. You pick "the book" as your system. Is the table's normal force internal or external?`}</p>
        <details className="lrn-self-explain-reveal">
          <summary>Expert explanation</summary>
          <p>{`External. The table is outside your chosen system. Internal forces only count between particles inside the system.`}</p>
          <p>{`If you redefined the system as "book + table together," then the normal force becomes internal. The classification depends on where you draw the boundary.`}</p>
        </details>
      </div>

      <p>The choice of system fixes which forces are internal and which are external.</p>
    </>
  )
  const SEC3 = (
    <>
      <h2>Dynamics of a System of Particles</h2>

      <div className="lrn-predict">
        <span className="lrn-predict-label">PREDICT</span>
        <p>
          A gaucho throws a bola: three stones tied to ropes. The stones swing wildly around each
          other while the whole bundle flies through the air. Where does the bundle land?
        </p>
        <details className="lrn-predict-reveal">
          <summary>Check your thinking</summary>
          <p>The center of mass follows a clean parabolic path.</p>
          <p>The complicated stone-and-rope motion happens around that path.</p>
          <p>The gaucho aims the center of mass like a single rock.</p>
        </details>
      </div>

      <p>
        Sum the equation {`$\\vec{f}_j = \\frac{d\\vec{p}_j}{dt}$`} over every particle in the
        system. Split each force into internal and external pieces.
      </p>

      <div className="lrn-eq">{`$$\\sum_j \\vec{f}_j^{\\,\\text{int}} + \\sum_j \\vec{f}_j^{\\,\\text{ext}} = \\sum_j \\frac{d\\vec{p}_j}{dt}$$`}</div>

      <p>
        Newton's third law says any internal force comes paired with an equal and opposite partner
        also inside the system. The two cancel in the sum. The total internal force is zero.
      </p>

      <div className="lrn-eq">{`$$\\sum_j \\vec{f}_j^{\\,\\text{int}} = 0$$`}</div>

      <p>
        Define the total external force {`$\\vec{F}_{\\text{ext}}$`} and the total momentum{' '}
        {`$\\vec{P}$`} of the system.
      </p>

      <div className="lrn-eq">{`$$\\vec{F}_{\\text{ext}} = \\sum_j \\vec{f}_j^{\\,\\text{ext}}, \\qquad \\vec{P} = \\sum_j \\vec{p}_j$$`}</div>

      <p>The system's total momentum then obeys a clean equation of motion.</p>

      <div className="lrn-eq lrn-eq-display">{`$$\\vec{F}_{\\text{ext}} = \\frac{d\\vec{P}}{dt}$$`}</div>

      <p>
        <strong>When to use this:</strong> Apply this to any group of objects you choose to call a
        system. Internal pushes cancel. Only outside forces change total momentum.
      </p>

      <div className="lrn-elaborate">
        <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
        <p>
          Newton's third law is a pairing rule. For every push of A on B, there is an equal push of
          B on A. Both pushes live inside the system, so their sum is zero.
        </p>
        <p>
          Any internal complexity, no matter how chaotic, hides inside that cancellation. Spring
          jiggles, rope tensions, atomic collisions all vanish from the total.
        </p>
        <p>The system as a whole only feels the outside world.</p>
      </div>

      <h3>Worked Example: The Bola</h3>

      <p>
        Three stones are tied together with ropes. A gaucho throws the bundle. While the stones
        twist and swing, the only outside force on the system is gravity.
      </p>

      <div className="lrn-steps">
        <div className="lrn-step">
          <span className="lrn-step-title">Identify the system</span>
          <p className="lrn-step-content">{`Take all three stones plus the ropes as the system. Tensions in the ropes are internal forces.`}</p>
        </div>
        <div className="lrn-step">
          <span className="lrn-step-title">Find the external force</span>
          <p className="lrn-step-content">{`Gravity acts on each stone. Total external force is $\\vec{F}_{\\text{ext}} = M\\vec{g}$ where $M$ is total mass.`}</p>
        </div>
        <div className="lrn-step">
          <span className="lrn-step-title">Apply the system equation</span>
          <p className="lrn-step-content">{`$\\frac{d\\vec{P}}{dt} = M\\vec{g}$. The total momentum changes only by gravity, even though the stones spin.`}</p>
        </div>
        <div className="lrn-step">
          <span className="lrn-step-title">Read the result</span>
          <p className="lrn-step-content">{`The system's total momentum follows the same trajectory as a single point of mass $M$ thrown at the same launch velocity.`}</p>
        </div>
      </div>

      <div className="lrn-self-explain">
        <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
        <p>Why don't the spinning ropes change the total momentum?</p>
        <details className="lrn-self-explain-reveal">
          <summary>Expert explanation</summary>
          <p>
            Each rope tension is internal. It comes paired with an equal opposite tension on the
            other end.
          </p>
          <p>
            Both tensions live inside the system, so they cancel in the total. Internal twist energy
            stays internal.
          </p>
        </details>
      </div>

      <h3>The Center of Mass</h3>

      <p>
        The total momentum equation hints that the system behaves like one big particle. To make
        that explicit, define a single point that moves the way the system moves on average.
      </p>

      <div className="lrn-definition">
        <span className="lrn-definition-term">Center of Mass</span>
        <div className="lrn-definition-desc">
          <p>{`The mass-weighted average position of all particles in the system.`}</p>
          <p>
            {`Treat the system as a single particle of total mass $M$ sitting at this point. You recover the translational motion exactly.`}
          </p>
        </div>
      </div>

      <div className="lrn-eq lrn-eq-display">{`$$\\vec{R} = \\frac{1}{M} \\sum_j m_j \\vec{r}_j$$`}</div>

      <p>Differentiate twice in time. The total mass is constant, so it pulls out.</p>

      <div className="lrn-eq">{`$$M \\ddot{\\vec{R}} = \\sum_j m_j \\ddot{\\vec{r}}_j = \\sum_j \\dot{\\vec{p}}_j = \\vec{F}_{\\text{ext}}$$`}</div>

      <p>This proves the system equation in cleaner form.</p>

      <div className="lrn-eq lrn-eq-display">{`$$\\vec{F}_{\\text{ext}} = M \\ddot{\\vec{R}}$$`}</div>

      <p>
        The center of mass moves as if all the mass sat there and the total external force pushed on
        it. Internal motion happens around this point, but does not move it.
      </p>

      <CMTwo />
      <DragCenterOfMass />

      <h3>Worked Example: Drum Major's Baton</h3>

      <p>
        A baton has two heads of mass {`$m_1$`} and {`$m_2$`} on a thin rod of length {`$\\ell$`}. A
        drum major throws the baton spinning into the air.
      </p>

      <div className="lrn-steps">
        <div className="lrn-step">
          <span className="lrn-step-title">Locate the CM along the baton</span>
          <p className="lrn-step-content">{`Put $m_1$ at $\\vec{r}_1$ and $m_2$ at $\\vec{r}_2$. The center of mass sits at $\\vec{R} = \\frac{m_1 \\vec{r}_1 + m_2 \\vec{r}_2}{m_1 + m_2}$.`}</p>
        </div>
        <div className="lrn-step">
          <span className="lrn-step-title">Distance from each head</span>
          <p className="lrn-step-content">{`R lies on the rod, a distance $\\frac{m_2 \\ell}{m_1 + m_2}$ from $m_1$. Heavier head pulls R closer.`}</p>
        </div>
        <div className="lrn-step">
          <span className="lrn-step-title">Apply the system equation</span>
          <p className="lrn-step-content">{`Only gravity acts: $\\vec{F}_{\\text{ext}} = (m_1 + m_2)\\vec{g}$. So $\\ddot{\\vec{R}} = \\vec{g}$.`}</p>
        </div>
        <div className="lrn-step">
          <span className="lrn-step-title">Read the trajectory</span>
          <p className="lrn-step-content">{`R follows a parabola, exactly as a single point would. The heads spin around R while R falls under gravity.`}</p>
        </div>
      </div>

      <div className="lrn-self-explain">
        <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
        <p>Why does R follow a parabola even when the heads spin wildly?</p>
        <details className="lrn-self-explain-reveal">
          <summary>Expert explanation</summary>
          <p>The rod tension is internal. Internal forces cannot move the system's CM.</p>
          <p>Only gravity acts externally. It pulls the same way on every gram of mass.</p>
          <p>So the CM responds as a single point under gravity, no matter how the heads spin.</p>
        </details>
      </div>

      <h3>Continuous Mass Distributions</h3>

      <p>
        For solid bodies the particles blur into a continuum. Replace the sum by an integral, and
        replace the discrete mass {`$m_j$`} by a mass element {`$dm$`}.
      </p>

      <div className="lrn-eq">{`$$\\vec{R} = \\frac{1}{M} \\int \\vec{r}\\, dm$$`}</div>

      <p>
        For a body with volume mass density {`$\\rho(\\vec{r})$`}, the mass element is{' '}
        {`$dm = \\rho\\, dV$`}.
      </p>

      <div className="lrn-eq">{`$$\\vec{R} = \\frac{1}{M} \\int \\vec{r}\\,\\rho(\\vec{r})\\, dV$$`}</div>

      <div className="lrn-compare">
        <div className="lrn-compare-col">
          <span className="lrn-compare-title">Discrete CM</span>
          <p>Few particles with known positions.</p>
          <p>{`Use the sum $\\vec{R} = \\frac{1}{M}\\sum m_j \\vec{r}_j$.`}</p>
          <p>Examples: a baton, a binary star, a bola.</p>
        </div>
        <div className="lrn-compare-col">
          <span className="lrn-compare-title">Continuous CM</span>
          <p>Solid body with a density function.</p>
          <p>{`Use the integral $\\vec{R} = \\frac{1}{M}\\int \\vec{r}\\,dm$.`}</p>
          <p>Examples: a rod, a triangle, a hemisphere.</p>
        </div>
      </div>

      <h3>Worked Example: Nonuniform Rod</h3>

      <p>
        A rod of length {`$L$`} has linear density {`$\\lambda(s) = \\frac{\\lambda_0\\, s}{L}$`},
        where {`$s$`} is distance from one end. The density grows linearly along the rod.
      </p>

      <div className="lrn-steps">
        <div className="lrn-step">
          <span className="lrn-step-title">Set up the integral</span>
          <p className="lrn-step-content">{`Mass element $dm = \\lambda(s)\\,ds$. Total mass $M = \\int_0^L \\lambda_0 \\frac{s}{L}\\,ds = \\frac{\\lambda_0 L}{2}$.`}</p>
        </div>
        <div className="lrn-step">
          <span className="lrn-step-title">Compute the moment</span>
          <p className="lrn-step-content">{`$\\int_0^L s\\,\\lambda(s)\\,ds = \\int_0^L \\frac{\\lambda_0 s^2}{L}\\,ds = \\frac{\\lambda_0 L^2}{3}$.`}</p>
        </div>
        <div className="lrn-step">
          <span className="lrn-step-title">Divide to get R</span>
          <p className="lrn-step-content">{`$R = \\dfrac{\\frac{\\lambda_0 L^2}{3}}{\\frac{\\lambda_0 L}{2}} = \\frac{2L}{3}$.`}</p>
        </div>
        <div className="lrn-step">
          <span className="lrn-step-title">Check the answer</span>
          <p className="lrn-step-content">{`The heavy end is at $s = L$. R sits closer to that end, exactly where intuition expects.`}</p>
        </div>
      </div>

      <CMRod />

      <div className="lrn-self-explain">
        <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
        <p>{`Why is R at $\\frac{2L}{3}$, not at $\\frac{L}{2}$?`}</p>
        <details className="lrn-self-explain-reveal">
          <summary>Expert explanation</summary>
          <p>
            The right half of the rod is much heavier than the left. The CM is a mass-weighted
            average, not a geometric one.
          </p>
          <p>{`If you weighted by length alone, you would get $\\frac{L}{2}$. Weighting by mass shifts R toward the heavy end.`}</p>
        </details>
      </div>

      <h3>Worked Example: Triangular Sheet</h3>

      <p>
        A uniform right-triangular sheet has base {`$b$`} along the x-axis and height {`$h$`} along
        the y-axis. Find its center of mass.
      </p>

      <div className="lrn-steps">
        <div className="lrn-step">
          <span className="lrn-step-title">Set up the area element</span>
          <p className="lrn-step-content">{`The hypotenuse has equation $\\frac{y}{h} + \\frac{x}{b} = 1$. So $y$ runs from $0$ to $h\\!\\left(1 - \\frac{x}{b}\\right)$ at each $x$. Use $dm = \\sigma\\,dx\\,dy$ with constant $\\sigma$.`}</p>
        </div>
        <div className="lrn-step">
          <span className="lrn-step-title">Integrate for X</span>
          <p className="lrn-step-content">{`$M X = \\sigma \\int_0^b x\\,h\\!\\left(1 - \\frac{x}{b}\\right)\\,dx = \\frac{\\sigma h\\,b^2}{6}$. With $M = \\frac{\\sigma b h}{2}$, this gives $X = \\frac{b}{3}$.`}</p>
        </div>
        <div className="lrn-step">
          <span className="lrn-step-title">Integrate for Y</span>
          <p className="lrn-step-content">{`By the same method $Y = \\frac{h}{3}$. The result is symmetric in the two legs.`}</p>
        </div>
        <div className="lrn-step">
          <span className="lrn-step-title">Final position</span>
          <p className="lrn-step-content">{`$\\vec{R} = \\frac{b}{3}\\hat{x} + \\frac{h}{3}\\hat{y}$. Each coordinate is one third of its leg.`}</p>
        </div>
      </div>

      <CMTriangle />

      <div className="lrn-self-explain">
        <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
        <p>Why does each coordinate end up at one third of its leg, not one half?</p>
        <details className="lrn-self-explain-reveal">
          <summary>Expert explanation</summary>
          <p>The triangle has more area near its short corner side than near the far corner.</p>
          <p>
            The mass-weighted average drags the CM toward the dense corner. The exact factor of one
            third comes out of the integral.
          </p>
        </details>
      </div>

      <h3>Worked Example: CM Motion of a Box on a Table</h3>

      <p>
        A rectangular box rests on a frictionless horizontal table. You release it from rest with
        the long side vertical. The box tips over as it slides.
      </p>

      <div className="lrn-steps">
        <div className="lrn-step">
          <span className="lrn-step-title">Identify horizontal forces</span>
          <p className="lrn-step-content">{`The table is frictionless. The only forces are gravity (vertical) and the normal force (vertical). Net horizontal external force is zero.`}</p>
        </div>
        <div className="lrn-step">
          <span className="lrn-step-title">Apply the CM equation horizontally</span>
          <p className="lrn-step-content">{`$M \\ddot{X} = 0$. The CM has no horizontal acceleration.`}</p>
        </div>
        <div className="lrn-step">
          <span className="lrn-step-title">Apply it vertically</span>
          <p className="lrn-step-content">{`Vertical net force is $-Mg + N$. The CM falls as the box flattens because $N$ does not cancel gravity once the box tips.`}</p>
        </div>
        <div className="lrn-step">
          <span className="lrn-step-title">Read the trajectory</span>
          <p className="lrn-step-content">{`The CM drops straight down even while the box slides sideways. Watch one corner of the box fly outward; the CM has not moved sideways at all.`}</p>
        </div>
      </div>

      <div className="lrn-self-explain">
        <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
        <p>If a corner of the box flies sideways, what part moves the opposite way?</p>
        <details className="lrn-self-explain-reveal">
          <summary>Expert explanation</summary>
          <p>
            Some other part of the box must shift the opposite way to keep the mass-weighted average
            put.
          </p>
          <p>
            Total horizontal momentum stays at zero, so any sideways motion of one piece pairs with
            equal and opposite motion of the rest.
          </p>
        </details>
      </div>

      <h3>Worked Example: Nonuniform Rectangular Plate</h3>

      <p>
        A thin rectangular plate has sides {`$a$`} along x and {`$b$`} along y. The surface density
        grows toward the far corner: {`$\\sigma(x, y) = \\frac{\\sigma_0\\,xy}{ab}$`}. Find its
        center of mass.
      </p>

      <div className="lrn-steps">
        <div className="lrn-step">
          <span className="lrn-step-title">Total mass</span>
          <p className="lrn-step-content">{`$M = \\int_0^a \\int_0^b \\sigma_0 \\frac{xy}{ab}\\,dy\\,dx = \\frac{\\sigma_0}{ab} \\cdot \\frac{a^2}{2}\\cdot\\frac{b^2}{2} = \\frac{\\sigma_0 a b}{4}$.`}</p>
        </div>
        <div className="lrn-step">
          <span className="lrn-step-title">Moment in x</span>
          <p className="lrn-step-content">{`$M X = \\int_0^a \\int_0^b x\\,\\sigma_0 \\frac{xy}{ab}\\,dy\\,dx = \\frac{\\sigma_0}{ab}\\cdot\\frac{a^3}{3}\\cdot\\frac{b^2}{2} = \\frac{\\sigma_0 a^2 b}{6}$.`}</p>
        </div>
        <div className="lrn-step">
          <span className="lrn-step-title">Solve for X</span>
          <p className="lrn-step-content">{`$X = \\dfrac{\\frac{\\sigma_0 a^2 b}{6}}{\\frac{\\sigma_0 a b}{4}} = \\frac{2a}{3}$. By symmetry of the density formula, $Y = \\frac{2b}{3}$.`}</p>
        </div>
        <div className="lrn-step">
          <span className="lrn-step-title">Read the result</span>
          <p className="lrn-step-content">{`The CM sits at $\\vec{R} = \\frac{2a}{3}\\hat{x} + \\frac{2b}{3}\\hat{y}$. It is biased toward the dense far corner. A uniform plate would put the CM at the geometric center $\\bigl(\\frac{a}{2},\\,\\frac{b}{2}\\bigr)$.`}</p>
        </div>
      </div>

      <div className="lrn-self-explain">
        <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
        <p>{`Why does the CM end up at $\\frac{2a}{3}$ rather than $\\frac{a}{2}$?`}</p>
        <details className="lrn-self-explain-reveal">
          <summary>Expert explanation</summary>
          <p>
            The density grows linearly with x, so most of the mass sits in the right half of the
            plate.
          </p>
          <p>{`The mass-weighted average drags the CM past the geometric midpoint toward the heavy corner. The factor of $\\frac{2}{3}$ comes straight from the integral $\\dfrac{\\int_0^a x^2\\,dx}{\\int_0^a x\\,dx}$.`}</p>
        </details>
      </div>

      <h3>Worked Example: Solid Hemisphere</h3>

      <p>
        A uniform solid hemisphere has radius {`$R$`} and density {`$\\rho$`}. The flat face sits in
        the xy-plane, and the dome rises along the positive z-axis. Find the center of mass.
      </p>

      <div className="lrn-steps">
        <div className="lrn-step">
          <span className="lrn-step-title">Slice into disks</span>
          <p className="lrn-step-content">{`At height $z$, the cross-section is a disk of radius $r$ with $r^2 = R^2 - z^2$. Volume element: $dV = \\pi (R^2 - z^2)\\,dz$.`}</p>
        </div>
        <div className="lrn-step">
          <span className="lrn-step-title">Total mass</span>
          <p className="lrn-step-content">{`$M = \\rho \\int_0^R \\pi(R^2 - z^2)\\,dz = \\rho \\pi \\!\\left(R^3 - \\frac{R^3}{3}\\right) = \\frac{2\\pi \\rho R^3}{3}$.`}</p>
        </div>
        <div className="lrn-step">
          <span className="lrn-step-title">Moment in z</span>
          <p className="lrn-step-content">{`$M Z = \\rho \\int_0^R z\\,\\pi(R^2 - z^2)\\,dz = \\rho \\pi \\bigl(\\frac{R^4}{2} - \\frac{R^4}{4}\\bigr) = \\frac{\\pi \\rho R^4}{4}$.`}</p>
        </div>
        <div className="lrn-step">
          <span className="lrn-step-title">Solve for Z</span>
          <p className="lrn-step-content">{`$Z = \\dfrac{\\frac{\\pi \\rho R^4}{4}}{\\frac{2\\pi \\rho R^3}{3}} = \\frac{3R}{8}$. By symmetry $X = Y = 0$.`}</p>
        </div>
        <div className="lrn-step">
          <span className="lrn-step-title">Read the result</span>
          <p className="lrn-step-content">{`The CM sits on the symmetry axis a distance $\\frac{3R}{8}$ above the flat face, well below the top of the dome at $z = R$.`}</p>
        </div>
      </div>

      <div className="lrn-self-explain">
        <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
        <p>{`Why is the CM at $\\frac{3R}{8}$, not at the geometric midpoint $\\frac{R}{2}$?`}</p>
        <details className="lrn-self-explain-reveal">
          <summary>Expert explanation</summary>
          <p>
            Disks near the flat face are wide and heavy. Disks near the top are narrow and light.
          </p>
          <p>
            The mass-weighted average sits closer to the wide base. The exact factor of
            three-eighths comes from the disk-radius integral.
          </p>
        </details>
      </div>
    </>
  )
  const SEC4 = (
    <>
      <h2>Conservation of Momentum</h2>

      <div className="lrn-predict">
        <span className="lrn-predict-label">PREDICT</span>
        <p>
          A spring gun on a frictionless table fires a marble forward at angle {`$\\theta$`} with
          speed {`$v_0$`}. The gun has mass {`$M$`}, the marble has mass {`$m$`}. What direction
          does the gun recoil?
        </p>
        <details className="lrn-predict-reveal">
          <summary>Check your thinking</summary>
          <p>The gun recoils horizontally backward.</p>
          <p>Vertical momentum is not conserved because the table pushes up.</p>
          <p>Horizontal momentum starts at zero and stays at zero.</p>
        </details>
      </div>

      <p>
        If the total external force on a system is zero, then {`$\\frac{d\\vec{P}}{dt} = 0$`}. The
        total momentum stays constant in time.
      </p>

      <p>{`Recoil from firearms, billiard collisions, and car crashes all use the same conservation equation.`}</p>

      <div className="lrn-eq lrn-eq-display">{`$$\\vec{F}_{\\text{ext}} = 0 \\;\\Rightarrow\\; \\vec{P} = \\text{constant}$$`}</div>

      <p>
        <strong>When to use this:</strong> Apply conservation whenever the external force is zero,
        or zero in some direction. Recoil, collisions, and explosions all live here.
      </p>

      <p>
        Each component is independent. If the horizontal external force is zero, {`$P_x$`} is
        conserved even if {`$P_y$`} is not.
      </p>

      <div className="lrn-elaborate">
        <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
        <p>
          Conservation follows directly from {`$\\vec{F}_{\\text{ext}} = \\frac{d\\vec{P}}{dt}$`}.
          Set the left side to zero and integrate.
        </p>
        <p>
          The deeper reason is a symmetry of nature: the laws of physics give the same answer no
          matter where in space you do the experiment. Newton's third law fails in some quantum,
          relativistic, and field-theory settings, but this symmetry holds everywhere, and momentum
          conservation holds with it.
        </p>
        <p>
          If the laws changed from one spot to the next, momentum could shift for free. They do not
          change, so it cannot.
        </p>
      </div>

      <h3>Worked Example: Spring Gun Recoil</h3>

      <p>
        A spring gun of mass {`$M$`} sits on a frictionless table. It fires a marble of mass {`$m$`}{' '}
        at speed {`$v_0$`} (relative to the ground) at angle {`$\\theta$`} above horizontal. Find
        the gun's recoil velocity {`$V_f$`}.
      </p>

      <div className="lrn-steps">
        <div className="lrn-step">
          <span className="lrn-step-title">Pick the right system</span>
          <p className="lrn-step-content">{`Take gun + marble + spring as the system. The spring force is internal.`}</p>
        </div>
        <div className="lrn-step">
          <span className="lrn-step-title">Identify external forces</span>
          <p className="lrn-step-content">{`Gravity (down) and table normal (up). Both vertical. No horizontal external force.`}</p>
        </div>
        <div className="lrn-step">
          <span className="lrn-step-title">Apply conservation in x</span>
          <p className="lrn-step-content">{`Initial $P_x = 0$. Final $P_x = m v_0 \\cos\\theta - M V_f$. Set them equal.`}</p>
        </div>
        <div className="lrn-step">
          <span className="lrn-step-title">Solve for the recoil</span>
          <p className="lrn-step-content">{`The marble speed $v_0$ is measured relative to the ground. So $0 = m v_0 \\cos\\theta - M V_f$ gives $V_f = \\frac{m v_0 \\cos\\theta}{M}$.`}</p>
        </div>
      </div>

      <details className="lrn-self-explain-reveal">
        <summary>Subtlety: marble speed relative to the gun</summary>
        <p>{`If $v_0$ is the marble speed relative to the gun (not the ground), the algebra changes. The marble's lab-frame speed becomes $v_0\\cos\\theta - V_f$, and conservation gives $V_f = \\frac{m v_0 \\cos\\theta}{M + m}$.`}</p>
        <p>{`Always check which frame the problem uses for the muzzle speed.`}</p>
      </details>

      <SpringGunRecoil />
      <ElasticCollisionCalc />

      <div className="lrn-self-explain">
        <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
        <p>Why is vertical momentum NOT conserved here?</p>
        <details className="lrn-self-explain-reveal">
          <summary>Expert explanation</summary>
          <p>
            The table pushes up on the gun with a normal force. That is an external vertical force.
          </p>
          <p>
            It cancels the marble's vertical momentum gain by absorbing it into the table and the
            Earth.
          </p>
        </details>
      </div>

      <h3>Worked Example: Earth, Moon, and Sun</h3>

      <p>
        Treat the Earth and Moon as a two-body system bound by gravity. Add the Sun as an external
        force. How does the Earth-Moon system move around the Sun?
      </p>

      <div className="lrn-steps">
        <div className="lrn-step">
          <span className="lrn-step-title">Identify the system</span>
          <p className="lrn-step-content">{`System = Earth + Moon. Internal force = mutual gravity. External force = Sun's gravity.`}</p>
        </div>
        <div className="lrn-step">
          <span className="lrn-step-title">Apply the CM equation</span>
          <p className="lrn-step-content">{`$M \\ddot{\\vec{R}} = \\vec{F}_{\\text{Sun on system}}$. Where $M = M_E + M_M$ and $\\vec{R}$ is the Earth-Moon center of mass.`}</p>
        </div>
        <div className="lrn-step">
          <span className="lrn-step-title">Compare to a single planet</span>
          <p className="lrn-step-content">{`The CM orbits the Sun much like a single planet of mass $M$ would. The Moon adds a small wobble around this CM orbit.`}</p>
        </div>
      </div>

      <div className="lrn-self-explain">
        <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
        <p>
          Why is mutual Earth-Moon gravity treated as internal here, but Sun's gravity as external?
        </p>
        <details className="lrn-self-explain-reveal">
          <summary>Expert explanation</summary>
          <p>
            The system is whatever you choose it to be. Here we picked Earth + Moon, so any force
            between Earth and Moon is internal.
          </p>
          <p>
            The Sun is outside that system, so its pull on Earth and on Moon counts as external.
            Internal pulls do not move the CM; only external pulls do.
          </p>
        </details>
      </div>

      <h3>Center of Mass Coordinates</h3>

      <p>
        Move the origin to the system's center of mass. New positions{' '}
        {`$\\vec{r}_j' = \\vec{r}_j -
        \\vec{R}$`}
        . By definition of CM, the mass-weighted sum of these new positions is zero.
      </p>

      <div className="lrn-eq">{`$$\\sum_j m_j \\vec{r}_j' = 0$$`}</div>

      <p>For two particles this gives a tight relation between their CM-frame positions.</p>

      <div className="lrn-eq">{`$$m_1 \\vec{r}_1' + m_2 \\vec{r}_2' = 0$$`}</div>

      <p>
        The CM frame strips away uniform translation. Internal motion stands out clearly. This trick
        simplifies many two-body problems.
      </p>

      <div className="lrn-compare">
        <div className="lrn-compare-col">
          <span className="lrn-compare-title">Lab Frame</span>
          <p>Origin fixed in the lab.</p>
          <p>System has both translation and internal motion.</p>
          <p>Best for measuring what observers see.</p>
        </div>
        <div className="lrn-compare-col">
          <span className="lrn-compare-title">CM Frame</span>
          <p>Origin moves with the CM.</p>
          <p>Translation removed; only internal motion remains.</p>
          <p>Best for analyzing collisions and oscillations.</p>
        </div>
      </div>

      <h3>Worked Example: The Push Me-Pull You</h3>

      <p>
        Two equal masses {`$m_a = m_b = m$`} sit on a frictionless track joined by a spring of
        stiffness {`$k$`} and natural length {`$\\ell$`}. You give mass {`$a$`} velocity {`$v_0$`}
        at time zero.
      </p>

      <div className="lrn-steps">
        <div className="lrn-step">
          <span className="lrn-step-title">Find the CM motion</span>
          <p className="lrn-step-content">{`Total external force is zero. So $\\vec{R}$ moves at constant velocity $\\dot{R} = \\frac{v_0}{2}$.`}</p>
        </div>
        <div className="lrn-step">
          <span className="lrn-step-title">Set up internal coordinate</span>
          <p className="lrn-step-content">{`Define $u = r_a' - r_b' - \\ell$, the spring stretch. Equal masses give $r_a' = -r_b'$ in the CM frame.`}</p>
        </div>
        <div className="lrn-step">
          <span className="lrn-step-title">Get the equation of motion for u</span>
          <p className="lrn-step-content">{`$m\\ddot{u} + 2ku = 0$. This is simple harmonic motion with angular frequency $\\omega = \\sqrt{\\frac{2k}{m}}$.`}</p>
        </div>
        <div className="lrn-step">
          <span className="lrn-step-title">Read the lab-frame motion</span>
          <p className="lrn-step-content">{`Each mass moves as CM motion plus oscillation. The masses alternately speed up and slow down, never crossing.`}</p>
        </div>
      </div>

      <div className="lrn-self-explain">
        <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
        <p>{`Why does $\\omega$ have a factor of 2 inside the square root?`}</p>
        <details className="lrn-self-explain-reveal">
          <summary>Expert explanation</summary>
          <p>{`When mass $a$ moves right by $\\Delta$, mass $b$ moves left by $\\Delta$ (equal masses, fixed CM). The spring stretches by $2\\Delta$.`}</p>
          <p>{`So the restoring force on $a$ is $-2k\\Delta$, not $-k\\Delta$. That is where the factor of 2 comes from.`}</p>
        </details>
      </div>

      <p>{`The full motion is two oscillating particles whose center of mass drifts at constant velocity.`}</p>

      <div className="lrn-callout">
        <p>Conservation of momentum is more fundamental than Newton's third law.</p>
        <p>
          It holds in quantum mechanics, special relativity, and electromagnetic field problems.
        </p>
        <p>Physicists treat it as a law in its own right, not a consequence.</p>
      </div>
    </>
  )
  const SEC5 = (
    <>
      <h2>Impulse and Average Force</h2>

      <div className="lrn-predict">
        <span className="lrn-predict-label">PREDICT</span>
        <p>
          A {`$0.2$`} kg rubber ball drops to the floor at {`$8$`} m/s, bounces, and leaves at{' '}
          {`$8$`} m/s. The contact lasts about {`$0.001$`} s. How big is the average force from the
          floor?
        </p>
        <details className="lrn-predict-reveal">
          <summary>Check your thinking</summary>
          <p>The momentum change is {`$\\Delta p = 0.2 \\times 16 = 3.2$`} kg m/s.</p>
          <p>Average force = {`$\\frac{\\Delta p}{\\Delta t} = 3200$`} N.</p>
          <p>Three thousand newtons during a brief bounce.</p>
        </details>
      </div>

      <p>
        Integrate {`$\\vec{F} = \\frac{d\\vec{P}}{dt}$`} over a time interval. Define the impulse.
      </p>

      <div className="lrn-definition">
        <span className="lrn-definition-term">Impulse</span>
        <div className="lrn-definition-desc">
          <p>{`The time integral of the net force on a system over an interval.`}</p>
          <p>
            {`It equals the change in total momentum during that interval. Useful when forces vary fast.`}
          </p>
        </div>
      </div>

      <div className="lrn-eq lrn-eq-display">{`$$\\vec{J} = \\int_0^t \\vec{F}\\,dt = \\vec{P}(t) - \\vec{P}(0)$$`}</div>

      <p>
        <strong>When to use this:</strong> Use impulse for collisions, kicks, and hits. It also fits
        any process where the force varies fast or you only need the total momentum change.
      </p>

      <h3>Average Force</h3>

      <p>The average force during the interval is the impulse divided by the duration.</p>

      <div className="lrn-eq">{`$$\\vec{F}_{\\text{av}} = \\frac{1}{\\Delta t} \\int \\vec{F}\\, dt = \\frac{\\Delta \\vec{P}}{\\Delta t}$$`}</div>

      <p>
        You do not need to know the exact shape of {`$F(t)$`}. The average alone tells you what the
        body felt overall.
      </p>

      <ImpulseVsTime />

      <div className="lrn-elaborate">
        <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
        <p>
          Two collisions can have the same impulse but very different peak forces. A short, sharp
          hit and a long, gentle push can both change momentum by the same amount.
        </p>
        <p>
          The average force scales inversely with collision time. Halve the time, double the average
          force. This is why hammers work, why helmets save lives, and why seat belts must be
          padded.
        </p>
      </div>

      <h3>Worked Example: Rubber Ball Rebound</h3>

      <p>
        A {`$0.2$`} kg rubber ball strikes the floor moving down at {`$8$`} m/s. It rebounds upward
        at {`$8$`} m/s. Contact lasts {`$10^{-3}$`} s. Find the average normal force.
      </p>

      <div className="lrn-steps">
        <div className="lrn-step">
          <span className="lrn-step-title">Compute the momentum change</span>
          <p className="lrn-step-content">{`Before: $p_i = -0.2 \\times 8 = -1.6$ kg m/s (down). After: $p_f = +1.6$ kg m/s. So $\\Delta p = 3.2$ kg m/s upward.`}</p>
        </div>
        <div className="lrn-step">
          <span className="lrn-step-title">Apply the impulse-momentum theorem</span>
          <p className="lrn-step-content">{`$F_{\\text{av}} \\Delta t = \\Delta p$. So $F_{\\text{av}} = \\frac{3.2}{10^{-3}} = 3200$ N.`}</p>
        </div>
        <div className="lrn-step">
          <span className="lrn-step-title">Check gravity's contribution</span>
          <p className="lrn-step-content">{`Gravity's impulse during contact is $mg\\Delta t = 0.2 \\times 9.8 \\times 10^{-3} \\approx 2 \\times 10^{-3}$ N s. Negligible compared to $3.2$ N s.`}</p>
        </div>
        <div className="lrn-step">
          <span className="lrn-step-title">Read the answer</span>
          <p className="lrn-step-content">{`Floor pushes the ball with $F_{\\text{av}} \\approx 3200$ N during the bounce. About 1600 times the ball's weight.`}</p>
        </div>
      </div>

      <div className="lrn-self-explain">
        <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
        <p>Why can we ignore gravity's impulse during the bounce?</p>
        <details className="lrn-self-explain-reveal">
          <summary>Expert explanation</summary>
          <p>
            The bounce lasts only one millisecond. Gravity's force is small (about 2 N), and so is
            its impulse over that time.
          </p>
          <p>
            The collision force is thousands of newtons. Adding 2 N to 3200 N changes nothing
            important.
          </p>
        </details>
      </div>

      <h3>Worked Example: How to Avoid Broken Ankles</h3>

      <p>
        A person of mass {`$M$`} jumps from height {`$h$`} and lands with knees locked. Their body
        compresses by a small distance {`$s$`} during the stop. Find the average impact force on the
        legs.
      </p>

      <div className="lrn-steps">
        <div className="lrn-step">
          <span className="lrn-step-title">Find the landing speed</span>
          <p className="lrn-step-content">{`Falling from rest through height $h$ gives $v = \\sqrt{2gh}$. So $\\Delta p = Mv = M\\sqrt{2gh}$.`}</p>
        </div>
        <div className="lrn-step">
          <span className="lrn-step-title">Find the stopping time</span>
          <p className="lrn-step-content">{`The body decelerates uniformly through distance $s$ to rest. Average speed during stop is $\\frac{v}{2}$, so $\\Delta t = \\dfrac{s}{\\frac{v}{2}} = \\frac{2s}{v}$.`}</p>
        </div>
        <div className="lrn-step">
          <span className="lrn-step-title">Apply impulse-momentum</span>
          <p className="lrn-step-content">{`$F_{\\text{av}} \\Delta t = Mv$, so $F_{\\text{av}} = \\frac{Mv \\cdot v}{2s} = \\frac{Mv^2}{2s} = \\frac{Mgh}{s}$.`}</p>
        </div>
        <div className="lrn-step">
          <span className="lrn-step-title">Read the danger</span>
          <p className="lrn-step-content">{`A rigid landing has $s \\approx 1$ cm and $h = 1$ m gives $F_{\\text{av}} = 100\\,Mg$. Bones break. Bend the knees and $s \\to 30$ cm, dropping the force to about $3 Mg$.`}</p>
        </div>
      </div>

      <div className="lrn-self-explain">
        <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
        <p>
          Why does the formula say {`$F = \\frac{Mgh}{s}$`} rather than {`$F = Mg$`}?
        </p>
        <details className="lrn-self-explain-reveal">
          <summary>Expert explanation</summary>
          <p>
            The body must lose all of its falling momentum {`$M\\sqrt{2gh}$`} during a stop of
            length {`$s$`}.
          </p>
          <p>
            Stopping in a shorter distance means a higher average force. The ratio{' '}
            {`$\\frac{h}{s}$`} is the multiplier above your weight.
          </p>
        </details>
      </div>

      <div className="lrn-compare">
        <div className="lrn-compare-col">
          <span className="lrn-compare-title">Quick Collision</span>
          <p>
            Small {`$\\Delta t$`}, huge {`$F_{\\text{av}}$`}.
          </p>
          <p>Hammer hitting a nail; rigid landing.</p>
          <p>Useful for transferring force.</p>
          <p>Dangerous for bodies.</p>
        </div>
        <div className="lrn-compare-col">
          <span className="lrn-compare-title">Slow Collision</span>
          <p>
            Large {`$\\Delta t$`}, small {`$F_{\\text{av}}$`}.
          </p>
          <p>Cushioned landing; padded seat belt.</p>
          <p>Same {`$\\Delta P$`} as a quick collision.</p>
          <p>Safe for bodies.</p>
        </div>
      </div>

      <div className="lrn-callout">
        <p>A quick collision is more violent than a slow one with the same momentum change.</p>
        <p>This is why we use hammers, helmets, and seat belts.</p>
        <p>All three exploit the inverse relation between contact time and average force.</p>
      </div>
    </>
  )
  const SEC6 = (
    <>
      <h2>Momentum and the Flow of Mass</h2>

      <div className="lrn-predict">
        <span className="lrn-predict-label">PREDICT</span>
        <p>
          A freight car rolls along a track at speed {`$v$`}. Sand pours into it from a stationary
          hopper at rate {`$\\frac{dm}{dt}$`}. What force is needed to keep the car moving at
          constant {`$v$`}?
        </p>
        <details className="lrn-predict-reveal">
          <summary>Check your thinking</summary>
          <p>You must accelerate each new sand grain from rest up to speed {`$v$`}.</p>
          <p>
            Each grain of mass {`$dm$`} needs momentum {`$v\\,dm$`}.
          </p>
          <p>Required force is {`$F = v\\,\\frac{dm}{dt}$`}.</p>
        </details>
      </div>

      <p>
        Variable-mass problems are easy to get wrong. The rule that fixes them is short: apply
        Newton's second law to a <em>fixed</em> set of particles over an interval {`$\\Delta t$`},
        then take the limit {`$\\Delta t \\to 0$`}.
      </p>

      <div className="lrn-callout">
        <p>
          Pitfall: it is tempting to write {`$F = m(\\frac{dv}{dt}) + v(\\frac{dm}{dt})$`} from the
          product rule.
        </p>
        <p>
          This is wrong for accretion problems. The reason is that {`$m$`} alone is not a closed
          system.
        </p>
        <p>New mass enters with its own velocity. Always isolate a fixed set of particles first.</p>
      </div>

      <div className="lrn-compare">
        <div className="lrn-compare-col">
          <span className="lrn-compare-title">Wrong</span>
          <p>{`Apply $\\vec{F} = \\frac{d(M\\vec{v})}{dt}$ blindly: $\\vec{F} = M\\,\\frac{d\\vec{v}}{dt} + \\vec{v}\\,\\frac{dM}{dt}$.`}</p>
          <p>{`This treats the rocket as if all leaving mass kept the rocket's velocity $\\vec{v}$. It does not, so the equation is wrong.`}</p>
        </div>
        <div className="lrn-compare-col">
          <span className="lrn-compare-title">Right</span>
          <p>{`Pick a fixed set of particles. Track their total momentum from $t$ to $t + \\Delta t$. Take the limit.`}</p>
          <p>{`This gives $\\vec{F}_{\\text{ext}} = M\\,\\frac{d\\vec{v}}{dt} + (\\vec{v} - \\vec{u})\\,\\frac{dm}{dt}$.`}</p>
          <p>{`The second term uses the relative velocity $\\vec{v} - \\vec{u}$.`}</p>
        </div>
      </div>

      <p>
        <strong>When to use this:</strong> Use the {`$\\Delta t$`} method on every problem with mass
        flow: rockets, accreting cars, leaky cars, streams, and gas pressure.
      </p>

      <div className="lrn-elaborate">
        <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
        <p>
          Newton's law applies to a fixed set of particles. When mass flows in or out, the body you
          are watching is not a fixed set anymore.
        </p>
        <p>
          The trick is to draw a box around all the particles that will be inside the body at some
          point during the interval. Their total mass stays constant.
        </p>
        <p>
          Then you can apply {`$\\vec{F}_{\\text{ext}}\\,\\Delta t = \\Delta\\vec{P}$`} cleanly, and
          only at the end take the limit {`$\\Delta t \\to 0$`}.
        </p>
      </div>

      <h3>The General Mass-Flow Equation</h3>

      <p>
        A body of mass {`$M(t)$`} moves at velocity {`$\\vec{v}(t)$`}. In time {`$\\Delta t$`} it
        gains (or sheds) a small mass {`$\\Delta m$`}. That mass moves at velocity {`$\\vec{u}$`} in
        the lab frame, the velocity of the arriving (or departing) material before the body absorbs
        or releases it.
      </p>

      <div className="lrn-faded">
        <div className="lrn-faded-phase">
          <span className="lrn-faded-label">COMPLETE EXAMPLE</span>
          <p>{`Define the system at time $t$. The system is the body of mass $M(t)$ at velocity $\\vec{v}(t)$, plus a small parcel $\\Delta m$ at velocity $\\vec{u}(t)$.`}</p>
          <p>{`Total momentum: $\\vec{P}(t) = M\\vec{v} + \\Delta m\\,\\vec{u}$.`}</p>
        </div>
        <div className="lrn-faded-phase">
          <span className="lrn-faded-label">YOUR TURN: PARTIAL</span>
          <p>{`Define the system at time $t + \\Delta t$. The parcel has been absorbed (or expelled). Body now has mass $M + \\Delta m$ at velocity $\\vec{v} + \\Delta\\vec{v}$.`}</p>
          <p>{`Total momentum: $\\vec{P}(t + \\Delta t) = (M + \\Delta m)(\\vec{v} + \\Delta\\vec{v})$. Hint: expand the product, keep first-order terms only.`}</p>
          <ol className="lrn-list">
            <li>{`Expand: $M\\vec{v} + M\\,\\Delta\\vec{v} + \\Delta m\\,\\vec{v} + \\Delta m\\,\\Delta\\vec{v}$.`}</li>
            <li>{`Drop the last term as second order in small quantities.`}</li>
          </ol>
        </div>
        <div className="lrn-faded-phase">
          <span className="lrn-faded-label">INDEPENDENT PRACTICE</span>
          <p>{`Compute $\\Delta\\vec{P} = \\vec{P}(t+\\Delta t) - \\vec{P}(t)$. Divide by $\\Delta t$. Take the limit $\\Delta t \\to 0$.`}</p>
          <details>
            <summary>Reveal solution</summary>
            <p>{`$\\Delta\\vec{P} = M\\,\\Delta\\vec{v} + (\\vec{v} - \\vec{u})\\,\\Delta m$. Divide by $\\Delta t$ and take the limit.`}</p>
            <p>{`Result: $\\vec{F}_{\\text{ext}} = M\\,\\frac{d\\vec{v}}{dt} + (\\vec{v} - \\vec{u})\\,\\frac{dm}{dt}$.`}</p>
            <p>{`The relative velocity $\\vec{v} - \\vec{u}$ in the second term is the key feature. Internal mass flow only matters through this relative velocity.`}</p>
          </details>
        </div>
      </div>

      <div className="lrn-eq">{`$$\\frac{d\\vec{P}}{dt} = (\\vec{v} - \\vec{u})\\frac{dm}{dt}$$`}</div>

      <h3>Worked Example: Spacecraft Accreting Dust</h3>

      <p>
        A spacecraft of mass {`$m$`} cruises through interstellar dust at velocity {`$\\vec{v}$`}.
        Dust is at rest in the lab. The spacecraft scoops up dust at rate {`$\\frac{dm}{dt}$`}. Find
        the force needed to keep {`$\\vec{v}$`} constant.
      </p>

      <div className="lrn-steps">
        <div className="lrn-step">
          <span className="lrn-step-title">Identify u and v</span>
          <p className="lrn-step-content">{`Dust velocity $\\vec{u} = 0$. Craft velocity $\\vec{v}$. Both relative to lab.`}</p>
        </div>
        <div className="lrn-step">
          <span className="lrn-step-title">{`Constant velocity means $\\frac{dv}{dt} = 0$`}</span>
          <p className="lrn-step-content">{`Plug into the mass-flow equation. The $M\\,\\frac{d\\vec{v}}{dt}$ term drops.`}</p>
        </div>
        <div className="lrn-step">
          <span className="lrn-step-title">Solve for F</span>
          <p className="lrn-step-content">{`$\\vec{F} = (\\vec{v} - 0)\\,\\frac{dm}{dt} = \\vec{v}\\,\\frac{dm}{dt}$.`}</p>
        </div>
      </div>

      <div className="lrn-self-explain">
        <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
        <p>Why does each scoop of dust need a forward force?</p>
        <details className="lrn-self-explain-reveal">
          <summary>Expert explanation</summary>
          <p>
            The dust starts at rest and must end up moving with the spacecraft. Its momentum has to
            be increased from zero to {`$\\Delta m\\,\\vec{v}$`}.
          </p>
          <p>
            Only an external forward force can supply that momentum. Without it, the spacecraft
            would slow down to keep total momentum the same.
          </p>
        </details>
      </div>

      <h3>Worked Example: Freight Car and Hopper</h3>

      <p>
        A freight car moves at constant {`$v$`}. Sand falls vertically into it from a stationary
        hopper at rate {`$\\frac{dm}{dt}$`}. Find the horizontal force needed.
      </p>

      <div className="lrn-steps">
        <div className="lrn-step">
          <span className="lrn-step-title">Set up horizontal components</span>
          <p className="lrn-step-content">{`Sand has zero horizontal velocity ($u_x = 0$). Car has horizontal velocity $v$.`}</p>
        </div>
        <div className="lrn-step">
          <span className="lrn-step-title">Apply mass-flow in x</span>
          <p className="lrn-step-content">{`$F_x = (v - 0)\\,\\frac{dm}{dt} = v\\,\\frac{dm}{dt}$.`}</p>
        </div>
      </div>

      <div className="lrn-self-explain">
        <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
        <p>The sand falls vertically. Why is a horizontal force needed at all?</p>
        <details className="lrn-self-explain-reveal">
          <summary>Expert explanation</summary>
          <p>The sand has zero horizontal speed when it lands. The car has speed {`$v$`}.</p>
          <p>
            Friction inside the car must speed each grain up sideways to {`$v$`}. That friction
            pushes the car backward in reaction.
          </p>
          <p>Something outside the car must push forward to cancel that backward kick.</p>
        </details>
      </div>

      <h3>Worked Example: Leaky Freight Car</h3>

      <p>
        Same car, now leaking sand at rate {`$\\frac{dm}{dt}$`} through a hole in the floor. The
        sand falls out with the same horizontal velocity as the car. What force is needed to keep
        the car at constant {`$v$`}?
      </p>

      <div className="lrn-steps">
        <div className="lrn-step">
          <span className="lrn-step-title">What is u for the leaving sand?</span>
          <p className="lrn-step-content">{`Sand leaves with the car's velocity. $u_x = v$.`}</p>
        </div>
        <div className="lrn-step">
          <span className="lrn-step-title">Plug into the equation</span>
          <p className="lrn-step-content">{`$F_x = (v - v)\\,\\frac{dm}{dt} = 0$.`}</p>
        </div>
        <div className="lrn-step">
          <span className="lrn-step-title">Why no force?</span>
          <p className="lrn-step-content">{`The sand keeps the car's momentum as it leaves. No horizontal momentum is taken away. The car coasts on its own.`}</p>
        </div>
      </div>

      <div className="lrn-self-explain">
        <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
        <p>
          Why does losing mass not slow the car here, even though force equals mass times
          acceleration?
        </p>
        <details className="lrn-self-explain-reveal">
          <summary>Expert explanation</summary>
          <p>
            The sand grains do not push backward as they leave. They drop straight down with the
            same forward speed as the car.
          </p>
          <p>
            No horizontal momentum is removed from the system, so the car's velocity stays constant
            even as its mass shrinks.
          </p>
        </details>
      </div>

      <div className="lrn-compare">
        <div className="lrn-compare-col">
          <span className="lrn-compare-title">Accreting Car</span>
          <p>Sand arrives at rest.</p>
          <p>Car must drag it up to speed.</p>
          <p>{`$F = v\\,\\frac{dm}{dt}$ to maintain speed.`}</p>
        </div>
        <div className="lrn-compare-col">
          <span className="lrn-compare-title">Leaking Car</span>
          <p>Sand leaves at car's speed.</p>
          <p>Sand carries its momentum out.</p>
          <p>No external force needed.</p>
        </div>
      </div>

      <h3>The Rocket Equation</h3>

      <p>
        A rocket of mass {`$M(t)$`} at velocity {`$\\vec{v}$`} ejects fuel backward at exhaust speed{' '}
        {`$\\vec{u}$`} relative to the rocket. The exhaust mass increases as the rocket loses mass.
        Apply the {`$\\Delta t$`} method.
      </p>

      <div className="lrn-faded">
        <span className="lrn-faded-label">DERIVATION: ROCKET EQUATION</span>
        <p>
          <strong>Phase 1 (complete): Set up the system.</strong>
        </p>
        <p>{`At time $t$, the rocket has mass $M$ at velocity $\\vec{v}$.`}</p>
        <p>
          {`In time $\\Delta t$ it ejects mass $|dM|$ at lab-frame velocity $\\vec{v} - \\vec{u}$.`}
        </p>
        <p>
          {`At time $t + \\Delta t$, the rocket has mass $M + dM$ at velocity $\\vec{v} + d\\vec{v}$. Note that $dM < 0$.`}
        </p>
        <p>
          <strong>Phase 2 (partial): Compute ΔP.</strong>
        </p>
        <p>{`Start with $P(t) = M\\vec{v}$.`}</p>
        <p>
          {`Then $P(t + \\Delta t) = (M + dM)(\\vec{v} + d\\vec{v}) + (-dM)(\\vec{v} - \\vec{u})$. Expand and drop second-order terms.`}
        </p>
        <p>{`$\\Delta P = M\\,d\\vec{v} + \\vec{u}\\,dM$.`}</p>
        <p>
          <strong>Phase 3 (independent): Equate to F_ext Δt and divide.</strong>
        </p>
        <p>You should now derive the rocket equation on your own.</p>
        <details className="lrn-self-explain-reveal">
          <summary>Check your work</summary>
          <p>{`$\\vec{F}_{\\text{ext}} = M\\,\\frac{d\\vec{v}}{dt} + \\vec{u}\\,\\frac{dM}{dt}$. Rearranging gives $\\vec{F}_{\\text{ext}} - \\vec{u}\\,\\frac{dM}{dt} = M\\,\\frac{d\\vec{v}}{dt}$.`}</p>
          <p>{`The term $-\\vec{u}\\,\\frac{dM}{dt}$ has $\\frac{dM}{dt} < 0$ and $\\vec{u}$ pointing backward, so the product is forward. This is thrust.`}</p>
        </details>
      </div>

      <div className="lrn-eq lrn-eq-display">{`$$\\vec{F} = M\\frac{d\\vec{v}}{dt} - \\vec{u}\\frac{dM}{dt}$$`}</div>

      <p>
        The thrust term {`$-\\vec{u}\\,\\frac{dM}{dt}$`} is positive forward because{' '}
        {`$\\frac{dM}{dt}$`} is negative and {`$\\vec{u}$`} points backward.
      </p>

      <h3>Worked Example: Rocket in Free Space</h3>

      <p>
        Set {`$\\vec{F} = 0$`}. The rocket flies in deep space with no gravity. Integrate the rocket
        equation along the direction of motion.
      </p>

      <div className="lrn-steps">
        <div className="lrn-step">
          <span className="lrn-step-title">Drop external force</span>
          <p className="lrn-step-content">{`$0 = M\\,\\frac{dv}{dt} - u\\,\\frac{dM}{dt}$. Rearrange: $dv = u\\,\\frac{dM}{M}$.`}</p>
        </div>
        <div className="lrn-step">
          <span className="lrn-step-title">Integrate from initial to final</span>
          <p className="lrn-step-content">{`$\\int_{v_0}^{v_f} dv = u \\int_{M_0}^{M_f} \\frac{dM}{M} = u\\,\\ln\\!\\left(\\frac{M_f}{M_0}\\right)$.`}</p>
        </div>
        <div className="lrn-step">
          <span className="lrn-step-title">Flip the sign</span>
          <p className="lrn-step-content">{`Since $M_f < M_0$, the log is negative. Use $u$ as exhaust speed magnitude with sign convention: $v_f - v_0 = u\\,\\ln\\!\\left(\\frac{M_0}{M_f}\\right)$.`}</p>
        </div>
        <div className="lrn-step">
          <span className="lrn-step-title">Read the result</span>
          <p className="lrn-step-content">{`Final velocity grows with the log of the mass ratio. Doubling the fuel only adds $u\\,\\ln 2$ in speed.`}</p>
        </div>
      </div>

      <div className="lrn-eq lrn-eq-display">{`$$v_f - v_0 = u\\,\\ln\\!\\left(\\frac{M_0}{M_f}\\right)$$`}</div>

      <Tsiolkovsky />

      <div className="lrn-self-explain">
        <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
        <p>Why is the burn rate not in the final answer?</p>
        <details className="lrn-self-explain-reveal">
          <summary>Expert explanation</summary>
          <p>
            In free space, the rocket can take all day or one second. There is no gravity to fight.
          </p>
          <p>
            Only the total amount of fuel burned and the exhaust speed matter. Fast or slow burning
            gives the same final speed.
          </p>
        </details>
      </div>

      <h3>Worked Example: Rocket in a Gravitational Field</h3>

      <p>
        A rocket lifts off vertically against constant gravity. {`$\\vec{F} = -Mg\\hat{z}$`}. Repeat
        the integration with gravity included.
      </p>

      <div className="lrn-steps">
        <div className="lrn-step">
          <span className="lrn-step-title">Set up the equation</span>
          <p className="lrn-step-content">{`$-Mg = M\\,\\frac{dv}{dt} - u\\,\\frac{dM}{dt}$. Divide by $M$: $-g\\,dt = dv - u\\,\\frac{dM}{M}$.`}</p>
        </div>
        <div className="lrn-step">
          <span className="lrn-step-title">Integrate over burn time</span>
          <p className="lrn-step-content">{`$-g\\,t_f = (v_f - 0) - u\\,\\ln\\!\\left(\\frac{M_0}{M_f}\\right)$ for liftoff from rest.`}</p>
        </div>
        <div className="lrn-step">
          <span className="lrn-step-title">Solve for v_f</span>
          <p className="lrn-step-content">{`$v_f = u\\,\\ln\\!\\left(\\frac{M_0}{M_f}\\right) - g\\,t_f$.`}</p>
        </div>
        <div className="lrn-step">
          <span className="lrn-step-title">Read the lesson</span>
          <p className="lrn-step-content">{`Slow burns lose speed to gravity. Fast burns minimize $g\\,t_f$. This is why real rockets blast off as quickly as their engines allow.`}</p>
        </div>
      </div>

      <div className="lrn-self-explain">
        <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
        <p>Why does the burn time {`$t_f$`} appear in the gravity case but not in free space?</p>
        <details className="lrn-self-explain-reveal">
          <summary>Expert explanation</summary>
          <p>
            In free space, only momentum matters. Whether the fuel exits in one second or one hour,
            the total momentum delivered is the same.
          </p>
          <p>
            Under gravity, every second of burn time costs you {`$g$`} of speed loss. The longer you
            take, the more gravity drags you back.
          </p>
        </details>
      </div>

      <div className="lrn-compare">
        <div className="lrn-compare-col">
          <span className="lrn-compare-title">Free-Space Rocket</span>
          <p>{`$v_f = u\\,\\ln\\!\\left(\\frac{M_0}{M_f}\\right)$`}</p>
          <p>Burn schedule does not matter.</p>
          <p>All that counts is exhaust speed and mass ratio.</p>
        </div>
        <div className="lrn-compare-col">
          <span className="lrn-compare-title">Gravity Rocket</span>
          <p>{`$v_f = u\\,\\ln\\!\\left(\\frac{M_0}{M_f}\\right) - g t_f$`}</p>
          <p>Slow burn loses speed to gravity.</p>
          <p>Burn fast to maximize liftoff velocity.</p>
        </div>
      </div>

      <div className="lrn-compare">
        <div className="lrn-compare-col">
          <span className="lrn-compare-title">Constant-Mass System</span>
          <p>Use {`$\\vec{F} = M\\vec{a}$`} directly.</p>
          <p>Mass stays fixed throughout.</p>
          <p>Examples: blocks, pulleys, springs.</p>
        </div>
        <div className="lrn-compare-col">
          <span className="lrn-compare-title">Variable-Mass System</span>
          <p>Use the {`$\\Delta t$`} method on a fixed particle set.</p>
          <p>Mass enters or leaves the body.</p>
          <p>Examples: rockets, accreting cars, leaky cars.</p>
        </div>
      </div>
    </>
  )
  const SEC7 = (
    <>
      <h2>Momentum Transport</h2>

      <div className="lrn-predict">
        <span className="lrn-predict-label">PREDICT</span>
        <p>
          A garden hose blasts water against a wall. In one case the water sticks. In another case
          the water bounces back at the same speed. Which case pushes the wall harder?
        </p>
        <details className="lrn-predict-reveal">
          <summary>Check your thinking</summary>
          <p>The bouncing case pushes twice as hard.</p>
          <p>Sticking water gives one {`$v$`} of momentum to the wall.</p>
          <p>Bouncing water gives two {`$v$`} (one to stop, one to send back).</p>
        </details>
      </div>

      <p>
        A continuous stream of matter carries momentum. The rate at which it delivers that momentum
        to a target is a force. The same idea handles water hoses, sand streams, river dikes, and
        gas pressure on walls.
      </p>

      <h3>Stream Momentum Flux</h3>

      <p>
        Start with the rate at which mass crosses a fixed point. A uniform stream has linear mass
        density {`$\\lambda$`} (mass per unit length) and speed {`$v$`}. In time {`$dt$`}, a length{' '}
        {`$v\\,dt$`} of stream passes any fixed point, so the mass crossing per unit time is{' '}
        {`$\\lambda v$`}.
      </p>

      <div className="lrn-eq">{`$$\\frac{dm}{dt} = \\lambda v$$`}</div>

      <p>
        That mass carries momentum {`$\\lambda v \\cdot v = \\lambda v^2$`} per unit time. So the
        stream transports momentum at rate {`$\\lambda v^2$`}.
      </p>

      <div className="lrn-eq lrn-eq-display">{`$$\\frac{dp}{dt} = \\lambda v^2$$`}</div>

      <p>
        <strong>When to use this:</strong> Apply this whenever a continuous stream of mass hits a
        target. Think of the stream as delivering momentum at a steady rate.
      </p>

      <h3>Force on an Absorbing Surface</h3>

      <p>
        If the stream sticks to a wall (no rebound), the wall must absorb all this momentum. The
        force on the wall equals the rate of momentum delivery.
      </p>

      <div className="lrn-eq lrn-eq-display">{`$$F = \\lambda v^2$$`}</div>

      <h3>Force on a Reflecting Surface</h3>

      <p>
        If the stream bounces back elastically with speed {`$v'$`}, the wall must change the
        stream's momentum from {`$+v$`} (incoming) to {`$-v'$`} (outgoing).
      </p>

      <div className="lrn-eq">{`$$F = \\lambda v(v + v')$$`}</div>

      <p>
        For a perfect elastic rebound at the same speed, {`$v' = v$`} and {`$F = 2\\lambda v^2$`}.
        Twice as much force as absorption.
      </p>

      <MomentumFlux />

      <div className="lrn-elaborate">
        <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
        <p>
          Each particle in the stream brings in forward momentum {`$mv$`}. The wall must change that
          to zero (absorption) or to {`$-mv$`} (rebound).
        </p>
        <p>
          Absorption removes one {`$mv$`}. Elastic rebound removes one {`$mv$`} and adds one in the
          other direction, for a total change of {`$2mv$`}. Multiply by the rate of arrival to get
          the force.
        </p>
      </div>

      <h3>Worked Example: Stream Hitting a Wall</h3>

      <p>
        A stream of particles with linear density {`$\\lambda$`} moves at speed {`$v$`} and strikes
        a stationary wall. The particles rebound at speed {`$v'$`}. Find the force on the wall.
      </p>

      <div className="lrn-steps">
        <div className="lrn-step">
          <span className="lrn-step-title">Mass flow rate to the wall</span>
          <p className="lrn-step-content">{`$\\frac{dm}{dt} = \\lambda v$. The wall receives mass at this rate.`}</p>
        </div>
        <div className="lrn-step">
          <span className="lrn-step-title">Momentum change per unit mass</span>
          <p className="lrn-step-content">{`Each unit of arriving mass goes from $+v$ to $-v'$. Change: $-(v + v')$ per unit mass.`}</p>
        </div>
        <div className="lrn-step">
          <span className="lrn-step-title">Force on stream from wall</span>
          <p className="lrn-step-content">{`$F_{\\text{wall on stream}} = (\\frac{dm}{dt})(v_f - v_i) = -\\lambda v(v + v')$.`}</p>
        </div>
        <div className="lrn-step">
          <span className="lrn-step-title">Newton's third law</span>
          <p className="lrn-step-content">{`$F_{\\text{stream on wall}} = +\\lambda v(v + v')$. Force on the wall is forward.`}</p>
        </div>
        <div className="lrn-step">
          <span className="lrn-step-title">Limits</span>
          <p className="lrn-step-content">{`Absorbed: $v' = 0$, $F = \\lambda v^2$. Elastic: $v' = v$, $F = 2\\lambda v^2$.`}</p>
        </div>
      </div>

      <div className="lrn-self-explain">
        <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
        <p>
          Why does {`$F$`} grow with the square of {`$v$`}, not just with {`$v$`} itself?
        </p>
        <details className="lrn-self-explain-reveal">
          <summary>Expert explanation</summary>
          <p>
            Doubling {`$v$`} doubles the mass arriving per second. Each particle also brings double
            the momentum.
          </p>
          <p>
            Both effects multiply. Two factors of {`$v$`} give you the {`$v^2$`} dependence.
          </p>
        </details>
      </div>

      <div className="lrn-compare">
        <div className="lrn-compare-col">
          <span className="lrn-compare-title">Stream Without Rebound</span>
          <p>Stream sticks to wall.</p>
          <p>{`$F = \\lambda v^2$`}</p>
          <p>Each particle's momentum goes to zero.</p>
        </div>
        <div className="lrn-compare-col">
          <span className="lrn-compare-title">Stream With Elastic Rebound</span>
          <p>Stream bounces back at the same speed.</p>
          <p>{`$F = 2\\lambda v^2$`}</p>
          <p>Each particle's momentum reverses.</p>
        </div>
      </div>

      <h3>Worked Example: Dike at the Bend of a River</h3>

      <p>
        A river of width {`$w$`}, depth {`$h$`}, and speed {`$v$`} bends around a curve of radius{' '}
        {`$R$`}. A dike on the outside of the bend redirects the flow. Compare the dynamic force
        from the bending water to the static water pressure on the dike.
      </p>

      <div className="lrn-steps">
        <div className="lrn-step">
          <span className="lrn-step-title">Mass flow per unit dike length</span>
          <p className="lrn-step-content">{`The dike covers a small angle $d\\phi$ of arc, length $R\\,d\\phi$. The flow rate of water past it is $\\frac{dm}{dt} = \\rho v h \\cdot w$, with cross-section $w h$.`}</p>
        </div>
        <div className="lrn-step">
          <span className="lrn-step-title">Momentum change rate</span>
          <p className="lrn-step-content">{`Bending the velocity vector through $d\\phi$ changes momentum direction. Force per unit length on dike: $\\frac{\\rho v^2 (w h)}{R}$.`}</p>
        </div>
        <div className="lrn-step">
          <span className="lrn-step-title">Static pressure for comparison</span>
          <p className="lrn-step-content">{`Hydrostatic pressure averages $\\frac{\\rho g h}{2}$. Force per unit length: $\\frac{\\rho g h^2}{2}$.`}</p>
        </div>
        <div className="lrn-step">
          <span className="lrn-step-title">Compute the ratio</span>
          <p className="lrn-step-content">{`Dynamic versus static: $\\dfrac{F_{\\text{dyn}}}{F_{\\text{stat}}} \\sim \\frac{w}{h}\\cdot\\frac{v^2}{R g}$. For a fast, wide, sharply curved river, the dynamic load can rival the static one.`}</p>
        </div>
      </div>

      <div className="lrn-self-explain">
        <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
        <p>Why does a sharper bend (smaller {`$R$`}) push harder on the dike?</p>
        <details className="lrn-self-explain-reveal">
          <summary>Expert explanation</summary>
          <p>
            A sharper bend redirects the same flow through a larger angle in less time. The water's
            momentum vector swings faster.
          </p>
          <p>
            Force is the rate of momentum change. Faster swing means a bigger inward force on the
            water, and an equal outward force on the dike.
          </p>
        </details>
      </div>

      <h3>Worked Example: Pressure of a Gas</h3>

      <p>
        Inside a cubical box of volume {`$V$`}, {`$N$`} gas molecules each of mass {`$m$`} bounce
        around. The number density is {`$n = \\frac{N}{V}$`} (molecules per unit volume). The angle
        brackets {`$\\langle \\cdot \\rangle$`} stand for an average over all molecules, so{' '}
        {`$\\langle v^2 \\rangle$`} is the mean squared speed. Find the pressure they exert on a
        wall.
      </p>

      <div className="lrn-faded">
        <span className="lrn-faded-label">DERIVATION: GAS PRESSURE</span>
        <p>
          <strong>Phase 1 (complete): One axis at a time.</strong>
        </p>
        <p>{`Consider molecules moving along the x-axis with speed component $v_x$.`}</p>
        <p>
          {`In time $dt$, those within distance $v_x\\,dt$ of the wall reach the wall. The number hitting is $\\tfrac{1}{2} n v_x\\,dt\\,A$. The factor of $\\tfrac{1}{2}$ counts only molecules moving toward the wall.`}
        </p>
        <p>{`Each one delivers momentum $2m v_x$ on elastic rebound.`}</p>
        <p>
          <strong>Phase 2 (partial): Average over speed.</strong>
        </p>
        <p>
          {`Force per unit area: $P = \\frac{1}{A}\\,\\frac{dp}{dt} = n m \\langle v_x^2 \\rangle$. The three directions share the speed equally, so $\\langle v_x^2 \\rangle = \\frac{\\langle v^2 \\rangle}{3}$.`}
        </p>
        <p>
          <strong>Phase 3 (independent): Combine.</strong>
        </p>
        <p>You should now write the final pressure formula.</p>
        <details className="lrn-self-explain-reveal">
          <summary>Check your work</summary>
          <p>{`$P = \\tfrac{1}{3} n m \\langle v^2 \\rangle$.`}</p>
          <p>
            The factor of one third comes from splitting the speed equally among three perpendicular
            directions.
          </p>
        </details>
      </div>

      <div className="lrn-eq lrn-eq-display">{`$$P = \\tfrac{1}{3} n m \\langle v^2 \\rangle$$`}</div>

      <div className="lrn-self-explain">
        <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
        <p>Why does the factor of one third appear?</p>
        <details className="lrn-self-explain-reveal">
          <summary>Expert explanation</summary>
          <p>{`Total speed squared splits into three equal parts on average: $\\langle v_x^2 \\rangle = \\langle v_y^2 \\rangle = \\langle v_z^2 \\rangle = \\frac{\\langle v^2 \\rangle}{3}$.`}</p>
          <p>
            Only motion along x pushes on a wall perpendicular to x. So only a third of the kinetic
            energy contributes to that wall's pressure.
          </p>
        </details>
      </div>

      <div className="lrn-callout">
        <p>The pressure formula connects mechanics to thermodynamics.</p>
        <p>
          Combine it with the ideal gas law {`$PV = NkT$`} to get the equipartition theorem:{' '}
          {`$\\tfrac{1}{2} m \\langle v^2 \\rangle = \\tfrac{3}{2} k T$`}.
        </p>
        <p>
          Three macroscopic ideas (force, pressure, temperature) all reduce to one microscopic idea:
          average squared speed.
        </p>
      </div>
    </>
  )
  const REF = (
    <>
      <h2>Equations of Momentum</h2>

      <h3>Single Particle</h3>

      <div className="lrn-eq lrn-eq-display">{`$$\\vec{p} = m\\vec{v}$$`}</div>
      <p>When to use: definition of momentum for a single particle.</p>

      <div className="lrn-eq">{`$$\\vec{F} = M\\vec{a}$$`}</div>
      <p>When to use: only when mass is constant.</p>

      <div className="lrn-eq">{`$$\\vec{F} = \\frac{d}{dt}(M\\vec{v})$$`}</div>
      <p>When to use: Newton's original form, valid when mass varies with time.</p>

      <div className="lrn-eq lrn-eq-display">{`$$\\vec{F} = \\frac{d\\vec{p}}{dt}$$`}</div>
      <p>When to use: the most general form of Newton's second law for one particle.</p>

      <h3>System of Particles</h3>

      <div className="lrn-eq">{`$$\\vec{f}_j = \\frac{d\\vec{p}_j}{dt}$$`}</div>
      <p>When to use: equation of motion for the j-th particle in a system.</p>

      <div className="lrn-eq">{`$$\\vec{f}_j = \\vec{f}_j^{\\,\\text{int}} + \\vec{f}_j^{\\,\\text{ext}}$$`}</div>
      <p>When to use: split the force on each particle into internal and external parts.</p>

      <div className="lrn-eq">{`$$\\vec{f}_j^{\\,\\text{int}} + \\vec{f}_j^{\\,\\text{ext}} = \\frac{d\\vec{p}_j}{dt}$$`}</div>
      <p>When to use: combine force decomposition with the equation of motion.</p>

      <div className="lrn-eq">{`$$\\sum_j \\vec{f}_j^{\\,\\text{int}} + \\sum_j \\vec{f}_j^{\\,\\text{ext}} = \\sum_j \\frac{d\\vec{p}_j}{dt}$$`}</div>
      <p>When to use: sum the equations of motion over all particles in the system.</p>

      <div className="lrn-eq">{`$$\\vec{F}_{\\text{ext}} = \\sum_j \\frac{d\\vec{p}_j}{dt}$$`}</div>
      <p>
        When to use: internal forces cancel by Newton's third law; only external forces survive.
      </p>

      <div className="lrn-eq lrn-eq-display">{`$$\\vec{F}_{\\text{ext}} = \\frac{d\\vec{P}}{dt}$$`}</div>
      <p>When to use: governs total system momentum; the cleanest form of the system law.</p>

      <div className="lrn-eq">{`$$\\vec{F} = \\frac{d\\vec{P}}{dt}$$`}</div>
      <p>When to use: shorthand once it is understood that only external forces matter.</p>

      <div className="lrn-eq">{`$$\\vec{F} = M\\ddot{\\vec{R}}$$`}</div>
      <p>When to use: the system as a whole moves like a single particle at the center of mass.</p>

      <h3>Center of Mass</h3>

      <div className="lrn-eq lrn-eq-display">{`$$\\vec{R} = \\frac{1}{M}\\sum_i m_i \\vec{r}_i$$`}</div>
      <p>When to use: discrete center of mass; weighted average over all particles.</p>

      <div className="lrn-eq">{`$$\\vec{R} = \\frac{m_1 \\vec{r}_1 + m_2 \\vec{r}_2}{m_1 + m_2}$$`}</div>
      <p>When to use: two-particle case (baton, binary star).</p>

      <div className="lrn-eq">{`$$\\vec{R} = \\frac{1}{M}\\int \\vec{r}\\,dm$$`}</div>
      <p>When to use: continuous mass distribution; replace sum with integral.</p>

      <div className="lrn-eq">{`$$\\vec{R} = \\frac{1}{M}\\int \\vec{r}\\,\\rho\\,dV$$`}</div>
      <p>When to use: volume integral form for solid bodies with density {`$\\rho$`}.</p>

      <div className="lrn-eq">{`$$\\vec{r}_a' = \\frac{m_b}{m_a + m_b}\\vec{r},\\quad \\vec{r}_b' = -\\frac{m_a}{m_a + m_b}\\vec{r}$$`}</div>
      <p>
        When to use: center of mass coordinates relative to R; clean two-body internal description.
      </p>

      <div className="lrn-eq">{`$$m_1 \\vec{r}_1' + m_2 \\vec{r}_2' = 0$$`}</div>
      <p>When to use: weighted sum of CM-frame positions vanishes by definition of CM.</p>

      <div className="lrn-eq">{`$$m\\ddot{u} + 2ku = 0,\\quad \\omega = \\sqrt{\\frac{2k}{m}}$$`}</div>
      <p>When to use: relative motion of equal masses joined by a spring (push-me-pull-you).</p>

      <h3>Impulse</h3>

      <div className="lrn-eq">{`$$\\vec{F} = \\frac{d\\vec{P}}{dt}$$`}</div>
      <p>When to use: starting point for the impulse integral.</p>

      <div className="lrn-eq lrn-eq-display">{`$$\\int_0^t \\vec{F}\\,dt = \\vec{P}(t) - \\vec{P}(0)$$`}</div>
      <p>
        When to use: impulse-momentum theorem; total force-time integral equals momentum change.
      </p>

      <div className="lrn-eq">{`$$\\vec{F}_{\\text{av}}\\,\\Delta t = \\int \\vec{F}\\,dt$$`}</div>
      <p>When to use: define average force during a brief collision.</p>

      <div className="lrn-eq">{`$$F = M g \\frac{h}{s}$$`}</div>
      <p>
        When to use: average impact force when falling height {`$h$`} stops over distance {`$s$`}.
      </p>

      <h3>Mass Flow and Rockets</h3>

      <div className="lrn-eq">{`$$\\frac{dP}{dt} = (v - u)\\frac{dm}{dt}$$`}</div>
      <p>When to use: accretion or ejection of mass at relative velocity {`$v - u$`}.</p>

      <div className="lrn-eq">{`$$\\frac{dP}{dt} = M\\frac{dv}{dt} + u\\frac{dm}{dt}$$`}</div>
      <p>When to use: alternative form including mass flow rate {`$\\frac{dm}{dt}$`}.</p>

      <div className="lrn-eq lrn-eq-display">{`$$F = M\\frac{dv}{dt} - u\\frac{dM}{dt}$$`}</div>
      <p>When to use: fundamental rocket equation with thrust term {`$-u\\,\\frac{dM}{dt}$`}.</p>

      <div className="lrn-eq lrn-eq-display">{`$$v_f - v_0 = u\\,\\ln\\!\\left(\\frac{M_0}{M_f}\\right)$$`}</div>
      <p>When to use: Tsiolkovsky equation in free space, no external force.</p>

      <div className="lrn-eq">{`$$v_f = u\\,\\ln\\!\\left(\\frac{M_0}{M_f}\\right) - g\\,t_f$$`}</div>
      <p>When to use: rocket lifting off vertically against constant gravity.</p>

      <h3>Momentum Transport</h3>

      <div className="lrn-eq">{`$$\\frac{dp}{dt} = \\lambda v^2$$`}</div>
      <p>
        When to use: rate of momentum delivery by a uniform stream of density {`$\\lambda$`} at
        speed {`$v$`}.
      </p>

      <div className="lrn-eq">{`$$F = \\lambda v^2$$`}</div>
      <p>When to use: force on a stationary surface that absorbs the stream.</p>

      <div className="lrn-eq">{`$$F = \\lambda v(v + v')$$`}</div>
      <p>When to use: force on a wall when the stream rebounds at speed {`$v'$`}.</p>

      <div className="lrn-eq">{`$$F = 2\\lambda v^2$$`}</div>
      <p>When to use: special case of elastic rebound at the same speed.</p>

      <div className="lrn-eq">{`$$\\frac{F_{\\text{dyn}}}{F_{\\text{stat}}} \\sim \\frac{w}{h}\\,\\frac{v^2}{R g}$$`}</div>
      <p>When to use: ratio of dynamic to static pressure on a dike at a river bend.</p>

      <div className="lrn-eq lrn-eq-display">{`$$P = \\tfrac{1}{3} n m \\langle v^2 \\rangle$$`}</div>
      <p>
        When to use: gas pressure from kinetic theory; the factor of one third is from isotropy.
      </p>
    </>
  )
  const PRACTICE = [
    // Interleaved across concepts: momentum, CM, conservation, impulse, mass flow, rocket, flux
    {
      q: 'Define momentum and write its formula for one particle.',
      a: 'Momentum is mass times velocity, $\\vec{p} = m\\vec{v}$. It is a vector that points in the same direction as the velocity. Its magnitude equals $mv$.'
    },
    {
      q: 'Write the discrete formula for center of mass.',
      a: '$\\vec{R} = \\frac{1}{M} \\sum_j m_j \\vec{r}_j$ where $M$ is total mass. The CM is the mass-weighted average of all particle positions. Heavier particles pull R toward themselves.'
    },
    {
      q: 'State conservation of momentum and the condition for it to apply.',
      a: 'If the total external force on a system is zero, $\\vec{P}$ stays constant. This follows from $\\vec{F}_{\\text{ext}} = \\frac{d\\vec{P}}{dt}$. Each component is independent: $P_x$ can be conserved while $P_y$ changes.'
    },
    {
      q: 'Define impulse and write its key relation to momentum.',
      a: "Impulse is the time integral of force, $\\vec{J} = \\int \\vec{F}\\,dt$. By integrating Newton's second law it equals the momentum change: $\\vec{J} = \\Delta \\vec{P}$. Useful for collisions where forces vary fast."
    },
    {
      q: 'PREDICT: Sand drops vertically into a moving freight car. What force keeps the car at constant speed?',
      a: 'Sand arrives with zero horizontal velocity. The car must accelerate each grain up to its own speed $v$. Required force is $F = v\\,\\frac{dm}{dt}$ in the forward direction.'
    },
    {
      q: 'Write the rocket equation and identify the thrust term.',
      a: '$\\vec{F} = M\\,\\frac{d\\vec{v}}{dt} - \\vec{u}\\,\\frac{dM}{dt}$. The term $-\\vec{u}\\,\\frac{dM}{dt}$ is thrust. Since $\\frac{dM}{dt} < 0$ and $\\vec{u}$ points backward, the thrust points forward. External force adds on top of thrust.'
    },
    {
      q: 'A stream with $\\lambda = 2$ kg/m at $v = 5$ m/s hits an absorbing wall. What force does the wall feel?',
      a: "Use $F = \\lambda v^2 = 2 \\times 25 = 50$ N. The wall absorbs all the stream's forward momentum at rate $\\lambda v^2$. By Newton's third law, the stream pushes the wall with the same force."
    },
    {
      q: "What is Newton's second law in momentum form?",
      a: 'Newton wrote it as $\\vec{F} = \\frac{d\\vec{p}}{dt}$. Force equals the rate of change of momentum. For constant mass it reduces to $\\vec{F} = m\\vec{a}$, but the momentum form is more general.'
    },
    {
      q: 'Two masses $m_1 = 2$ kg and $m_2 = 1$ kg sit at $x = 0$ and $x = 6$ m. Find the CM.',
      a: 'Use $X = \\frac{m_1 x_1 + m_2 x_2}{m_1 + m_2} = \\frac{0 + 6}{3} = 2$ m. The CM sits closer to the heavier mass at $x = 0$, two units away from it and four from the lighter one.'
    },
    {
      q: 'A spring gun on frictionless ice fires a marble forward. Why does the gun recoil?',
      a: 'Total horizontal momentum starts at zero and must stay at zero. The marble carries forward momentum, so the gun must carry equal backward momentum. Internal spring force is irrelevant for the total.'
    },
    {
      q: 'A 0.2 kg ball hits a wall at 10 m/s and rebounds at 10 m/s. Contact takes 0.001 s. Find average force.',
      a: "$\\Delta p = 0.2 \\times 20 = 4$ kg m/s. $F_{\\text{av}} = \\frac{\\Delta p}{\\Delta t} = \\frac{4}{0.001} = 4000$ N. The collision force is enormous because the contact time is tiny. Gravity's impulse is negligible by comparison."
    },
    {
      q: 'COMPARE: Accreting freight car vs leaking freight car. Why does only one need a force?',
      a: "Accreting: sand starts at rest, must be sped up, requires force $F = v\\,\\frac{dm}{dt}$. Leaking: sand leaves at the car's own speed, taking its momentum with it. The leaving sand requires no horizontal force."
    },
    {
      q: 'A free-space rocket burns half its mass at exhaust speed $u = 2000$ m/s. Find $\\Delta v$.',
      a: 'Apply the Tsiolkovsky equation in free space: $\\Delta v = u\\,\\ln\\!\\left(\\frac{M_0}{M_f}\\right)$. Burning half the mass means $\\frac{M_0}{M_f} = 2$, so $\\Delta v = 2000 \\times \\ln 2 \\approx 1386$ m/s. The log makes the gain diminish: doubling the fuel burned (mass ratio of 4) adds only another $u\\,\\ln 2$, not double the speed.'
    },
    {
      q: 'TRANSFER: Why does an elastic rebound double the force on a wall?',
      a: 'Absorption only removes one $v$ of momentum per particle. Elastic rebound removes one and adds one in the opposite direction, for a total change of $2v$. Force scales linearly with momentum change, so it doubles.'
    },
    {
      q: 'Why does $\\vec{F} = m\\vec{a}$ fail for rockets?',
      a: 'Rocket mass changes with time as fuel burns. The full product rule on $m\\vec{v}$ adds a term $\\vec{v}\\,\\frac{dm}{dt}$ that $\\vec{F} = m\\vec{a}$ ignores. Use $\\vec{F} = \\frac{d\\vec{p}}{dt}$ on a fixed set of particles instead.'
    },
    {
      q: 'A rod has linear density $\\lambda(s) = \\frac{\\lambda_0 s}{L}$. Find its center of mass.',
      a: 'Integrate: $M = \\frac{\\lambda_0 L}{2}$ and $\\int s\\lambda\\,ds = \\frac{\\lambda_0 L^2}{3}$. So $R = \\frac{2L}{3}$. The denser end pulls the CM beyond the geometric midpoint.'
    },
    {
      q: 'A spring gun fires marble of mass $m = 0.05$ kg at $v_0 = 4$ m/s. Gun mass $M = 0.5$ kg. Find recoil speed.',
      a: 'Conserve horizontal momentum: $0 = m v_0 - M V_f$, so $V_f = \\frac{m v_0}{M} = 0.4$ m/s. Tenfold mass ratio gives tenfold slower recoil. Direction is backward.'
    },
    {
      q: 'Why does flexing the knees during a fall reduce the impact force?',
      a: 'Bending knees increases the stopping distance $s$. Average force is $F = \\frac{Mgh}{s}$, so larger $s$ gives smaller force. Going from $1$ cm rigid to $30$ cm flexed cuts the force by a factor of about thirty.'
    },
    {
      q: 'TRANSFER: A garden sprinkler swings around in a circle as water shoots out. Which momentum-flow concept explains the reaction torque?',
      a: "Each water packet leaves with backward momentum relative to the sprinkler arm. By Newton's third law the arm gets a forward push at each nozzle. Continuous mass ejection produces a continuous reaction force, the same idea as a rocket but bent into a circle."
    },
    {
      q: 'TRANSFER: Why must real rockets burn fuel quickly during liftoff?',
      a: 'In gravity, $v_f = u\\,\\ln\\!\\left(\\frac{M_0}{M_f}\\right) - g t_f$. The $g t_f$ term subtracts speed during the burn. Slow burns lose more to gravity. Fast burns minimize the gravity loss and maximize liftoff speed.'
    },
    {
      q: 'PREDICT: A garden hose sprays water that bounces off a wall. The wall has area $A = 0.01$ m^2. Stream speed $v = 20$ m/s, water density $\\rho = 1000$ kg/m^3. Estimate the force.',
      a: 'Treat as elastic rebound for upper bound: $F = 2\\rho A v^2 = 2 \\times 1000 \\times 0.01 \\times 400 = 8000$ N. Realistic rebound is partial, so the force is somewhere between $\\rho A v^2 = 4000$ N and $8000$ N.'
    },
    {
      q: 'Define the total momentum of a system of particles.',
      a: "Sum each particle's momentum: $\\vec{P} = \\sum_j m_j \\vec{v}_j$. The system's total momentum changes only due to external forces, since internal forces cancel by Newton's third law."
    },
    {
      q: 'A uniform right-triangular sheet has base $b$ and height $h$. Where is its CM?',
      a: 'At $\\vec{R} = \\frac{b}{3}\\hat{x} + \\frac{h}{3}\\hat{y}$, one third of the way from each leg. The double integral gives this directly. Any uniform triangle has its CM at the centroid.'
    },
    {
      q: 'TRANSFER: Two ice skaters of equal mass push off from rest. Skater A glides east at 1 m/s. What can you say about skater B?',
      a: 'Initial total momentum was zero. After the push the total must still be zero. Skater B must glide west at 1 m/s, with equal speed and opposite direction.'
    },
    {
      q: 'TRANSFER: A car traveling at 30 m/s rear-ends another. The crumple zone gives 0.5 m of stopping distance. Why is this safer than a rigid car with 5 cm of crumple?',
      a: 'Crumple zone increases stopping distance, increasing stopping time, and reducing average force tenfold. Same momentum change, but spread over ten times longer. Passengers feel a tenth of the deceleration.'
    },
    {
      q: 'TRANSFER: A conveyor belt drops sand at rate $\\frac{dm}{dt}$ onto a moving truck bed. The truck holds speed $v$. Why is the required engine force the same as for a falling-sand hopper?',
      a: 'The setup is the same: sand arrives with zero horizontal velocity, truck must speed it up to $v$. Required force is $F = v\\,\\frac{dm}{dt}$. The geometry of where the sand comes from does not matter, only its initial horizontal speed.'
    },
    {
      q: 'COMPARE: Rocket in free space vs rocket in gravity. Does burn rate matter?',
      a: 'Free space: burn rate is irrelevant; only mass ratio and exhaust speed matter. Gravity: slow burns waste speed because $g t_f$ subtracts from $\\Delta v$. Real rockets blast off as fast as their engines allow.'
    },
    {
      q: 'Derive the gas pressure formula and explain the factor of one third.',
      a: 'Each molecule moving toward a wall with speed $v_x$ delivers momentum $2m v_x$ on elastic rebound. Multiply by the rate of arrivals to get force per area: $P = nm\\langle v_x^2 \\rangle$. By isotropy, the three axes share the kinetic energy equally, so $\\langle v_x^2 \\rangle = \\frac{\\langle v^2 \\rangle}{3}$. Result: $P = \\tfrac{1}{3} n m \\langle v^2 \\rangle$. Only motion along x pushes a wall perpendicular to x, which is why one third appears.'
    },
    {
      q: 'PREDICT: A bola (three weighted ropes) is thrown into the air. What path does its center of mass follow?',
      a: 'The CM follows a parabola, exactly like a single thrown rock would. Internal rope tensions cancel; only gravity acts externally. The complicated stone-and-rope dance happens around this CM trajectory.'
    },
    {
      q: 'Why do internal forces cancel in $\\vec{F}_{\\text{ext}} = \\frac{d\\vec{P}}{dt}$?',
      a: "Newton's third law pairs every internal push with an equal and opposite partner. Both are inside the system, so they sum to zero. Only external forces survive in the total."
    },
    {
      q: 'Write the continuous CM formula and explain when to use it.',
      a: '$\\vec{R} = \\frac{1}{M}\\int \\vec{r}\\,dm$. Use it when the body has a smooth mass distribution rather than discrete particles. The mass element $dm$ becomes $\\rho\\,dV$ for volume distributions.'
    },
    {
      q: 'COMPARE: Discrete CM vs continuous CM. When do you use each?',
      a: 'Discrete uses a sum $\\frac{\\sum m_j \\vec{r}_j}{M}$ for finite particles like a baton or binary star. Continuous uses an integral $\\frac{\\int \\vec{r}\\,dm}{M}$ for solid bodies with a density function. Both give a mass-weighted average.'
    },
    {
      q: 'TRANSFER: A loaded firecracker explodes mid-air into many fragments. What does the cloud of fragments do as a whole?',
      a: 'The CM of all fragments keeps following the same parabola the unexploded firecracker would have. The blast forces are internal pair-cancellations. Only gravity acts externally on the cloud, so the CM still falls under gravity alone.'
    },
    {
      q: 'Why does the CM of a tipping box on frictionless ice fall straight down?',
      a: 'Net horizontal external force is zero (no friction). So $M\\ddot{X} = 0$ and the CM has no horizontal acceleration. The box can tilt and slide its corners outward, but the CM only moves vertically.'
    },
    {
      q: 'COMPARE: Lab frame vs CM frame. What does each show clearly?',
      a: 'Lab frame keeps the origin fixed; you see both translation and internal motion. CM frame moves with the CM, removing translation; only internal motion remains. Use CM frame to analyze collisions and oscillations cleanly.'
    },
    {
      q: 'TRANSFER: A boy of 40 kg stands at the back of a 160 kg canoe at rest on still water. He walks 2 m forward inside the canoe. How far does the canoe slide back?',
      a: 'With no external horizontal force, the CM cannot move. The boy moves 2 m relative to the canoe. With a 1-to-4 mass ratio, the canoe slides back $\\frac{2}{1+4} \\times 1 = 0.4$ m to keep the CM fixed.'
    },
    {
      q: 'TRANSFER: A golf club delivers a 70 m/s impulse to a 0.05 kg ball over 0.5 ms. If the F(t) profile is roughly triangular (zero, peak, zero), estimate the peak force and compare it to the average.',
      a: 'The impulse is $J = \\Delta p = (0.05)(70) = 3.5$ kg$\\cdot$m/s. Average force $F_\\text{avg} = \\frac{J}{\\Delta t} = \\frac{3.5}{0.5 \\times 10^{-3}} = 7000$ N. For a triangular profile, the area under F(t) equals $\\frac{1}{2}\\cdot$peak$\\cdot$duration, so peak $= 2 F_\\text{avg} = 14{,}000$ N. The peak is twice the average because triangle area scales with half the base times height.'
    },
    {
      q: 'TRANSFER: Pellets in a hailstorm hit a flat roof at speed $v$. The pellets bounce back at half their incoming speed. How does the force compare to fully sticking pellets?',
      a: 'Sticking gives $F = \\lambda v^2$. Half-rebound changes momentum by $v + \\frac{v}{2} = 1.5 v$, so $F = 1.5\\,\\lambda v^2$. Partial bounce sits between absorbed ($\\lambda v^2$) and elastic ($2\\lambda v^2$).'
    },
    {
      q: 'TRANSFER: A photon of energy $E$ is absorbed by a black wall. Use the photon momentum $p = \\frac{E}{c}$ to find the average force from a beam of power $P$.',
      a: 'Mass flow language carries over: rate of momentum delivery is $\\frac{dp}{dt} = \\frac{1}{c}\\,\\frac{dE}{dt} = \\frac{P}{c}$. So $F = \\frac{P}{c}$. The same momentum-transport idea predicts radiation pressure on solar sails.'
    },
    {
      q: "TRANSFER: Why is conservation of momentum more fundamental than Newton's third law?",
      a: "Newton's third law fails in some contexts (electromagnetic field momentum, quantum scattering, special relativity). Conservation of momentum survives all of them. It follows from translational symmetry of physical law, a deeper principle."
    },
    {
      q: 'TRANSFER: A 1000 kg spacecraft of constant mass changes velocity from 5 m/s to 12 m/s. What impulse did it receive?',
      a: 'Impulse equals change in momentum: $J = m(v_f - v_i) = 1000(12 - 5) = 7000$ kg m/s. The direction is along the velocity change. The exact time profile of the force does not matter, only its time integral.'
    },
    {
      q: 'A solid hemisphere of radius $R$ has its flat face down. Where is its center of mass?',
      a: 'On the symmetry axis, a height $Z = \\frac{3R}{8}$ above the flat face. Slice into disks of radius $r$ with $r^2 = R^2 - z^2$ and integrate. The wide base disks dominate the mass-weighted average.'
    },
    {
      q: 'A nonuniform plate has $\\sigma = \\frac{\\sigma_0\\,xy}{ab}$ on a rectangle $a \\times b$. Find its center of mass.',
      a: 'Integration gives $X = \\frac{2a}{3}$ and $Y = \\frac{2b}{3}$. The density grows toward the far corner, so the CM shifts away from the geometric center toward that corner. Each integral splits into a separate one-dimensional moment.'
    },
    {
      q: 'PREDICT: You double the mass and double the velocity of a particle. What happens to its momentum?',
      a: 'Momentum becomes four times larger. Since $\\vec{p} = m\\vec{v}$, doubling each factor multiplies the product by two times two. The new momentum points in the same direction as before.'
    },
    {
      q: 'A rocket has $\\frac{M_0}{M_f} = 4$ and exhaust speed $u = 2500$ m/s, starting from rest in free space. Find $v_f$.',
      a: 'Use $v_f = u\\,\\ln\\!\\left(\\frac{M_0}{M_f}\\right) = 2500 \\times \\ln 4 = 2500 \\times 1.386 \\approx 3466$ m/s. This is the delta-v in vacuum without gravity. A mass ratio of four is typical for a single-stage chemical rocket.'
    },
    {
      q: 'TRANSFER: A water stream with $\\lambda = 0.5$ kg/m hits a wall at $v = 20$ m/s and stops dead. What force does the wall feel?',
      a: 'The mass arriving per second is $\\lambda v = 10$ kg/s. Each kilogram loses $v = 20$ m/s of forward momentum. So $F = \\lambda v^2 = 0.5 \\times 400 = 200$ N. This is the absorbing-wall result. If the water reflected at full speed, the force would double to 400 N.'
    },
    {
      q: 'PREDICT: You double a gas density at the same temperature. What happens to its pressure?',
      a: 'Pressure doubles. Since $P = \\frac{1}{3} n m \\langle v^2 \\rangle$ and temperature fixes $\\langle v^2 \\rangle$, doubling $n$ doubles $P$. This is the ideal gas law in disguise.'
    },
    {
      q: 'In the push me-pull you with two equal masses joined by spring of constant $k$, what frequency rules the relative motion?',
      a: 'The relative coordinate $u$ obeys $m\\ddot{u} + 2ku = 0$, so $\\omega = \\sqrt{\\frac{2k}{m}}$. The factor of 2 appears because both blocks move when the spring stretches. Each block oscillates around the CM speed $\\frac{v_0}{2}$.'
    },
    {
      q: 'TRANSFER: A baseball at 40 m/s strikes a stationary bat and rebounds at 50 m/s in 1 ms. With $m = 0.15$ kg, find the average force.',
      a: '$\\Delta p = 0.15 \\times (50 - (-40)) = 0.15 \\times 90 = 13.5$ kg m/s. Average force $F_{\\text{av}} = \\frac{13.5}{0.001} = 13{,}500$ N. The bat exerts about 13,500 N during the brief hit.'
    },
    {
      q: 'PREDICT: Two skaters on frictionless ice push off each other from rest. What does total momentum do?',
      a: "Total momentum stays at zero. The pushes are internal to the two-skater system, so they cancel by Newton's third law. The skaters move apart with equal and opposite momenta."
    },
    {
      q: 'TRANSFER: A rocket has the same mass ratio $\\frac{M_0}{M_f} = 4$ and $u = 2500$ m/s, but burns fuel in $t_f = 60$ s under gravity. Find $v_f$.',
      a: 'Use $v_f = u\\,\\ln\\!\\left(\\frac{M_0}{M_f}\\right) - g t_f = 3466 - 9.8 \\times 60 = 3466 - 588 = 2878$ m/s. Gravity loss has shaved 588 m/s off the free-space value. A faster burn would shrink this loss further.'
    },
    {
      q: "In the spring-gun example with marble fired at angle $\\theta$ relative to the gun, what is the gun's recoil velocity?",
      a: 'Conservation of horizontal momentum gives $V_f = \\frac{m v_0 \\cos\\theta}{M + m}$ when $v_0$ is measured relative to the gun. Only the horizontal component is constrained because the table provides a vertical normal force. Vertical momentum is taken up by Earth.'
    }
  ]

  const config = {
    cssPrefix: 'msp',
    source: 'An Introduction to Mechanics - Kleppner & Kolenkow',
    documentTitle: 'Momentum and Systems of Particles - AETHER',
    learning: {
      category: 'Module 3',
      groupTitle: 'Part I: Newtonian Mechanics',
      title: 'Momentum and Systems of Particles',
      subtitle:
        'One simple idea, the product mv, lets you predict rockets, recoil, dikes, and gas pressure. You will also learn the trick that turns any cluster of particles into a single point: the center of mass.',
      sections: [SEC1, SEC2, SEC3, SEC4, SEC5, SEC6, SEC7]
    },
    practice: PRACTICE,
    reference: {
      category: 'Quick Reference',
      title: 'Momentum and Systems of Particles',
      sections: [REF]
    },
    customCss: null
  }

  return <LearningTemplate config={config} />
}
