import { LearningTemplate } from '../../../../../components/learning/learning-template'
import {
  VecAddition,
  CrossProduct,
  CrossAntisym,
  PolarUnits,
  DotWork,
  DotProjection,
  UCM,
  ProjectileMotion,
  ForceDecomp,
  RotatingChord,
  SlidingVector,
  ComponentsRotation,
  BaseVectors,
  DisplacementInvariant,
  TaylorSin,
  GalileanTable,
  DragVector,
  DotProductInteractive,
  ProjectileLauncher
} from '../../../../../components/viz/physics-viz/modules'

/* Config builder */
function useConfig() {
  const config = {
    cssPrefix: 'vkg',
    source:
      'An Introduction to Mechanics (K&K) + Mathematical Methods of Classical Mechanics (Arnold)',
    documentTitle: 'Vectors, Kinematics, and Galilean Structure - AETHER',
    learning: {
      groupTitle: 'Part I: Newtonian Mechanics',
      category: 'Module 1',
      title: 'Vectors, Kinematics, and Galilean Structure',
      subtitle:
        "Vector algebra, coordinate kinematics, and the Galilean symmetry underlying Newton's equations",
      sections: [
        <>
          <h2>Why We Need Vectors in Mechanics</h2>
          <p>
            GPS uses vectors to track your position. Drone flight controllers use them for thrust.
            Aircraft autopilots use them for velocity. Game engines use them for every motion on
            screen. This module builds the language behind all of those.
          </p>
          <p>
            Newton's second law tells you how a force changes the motion of a body. If you pick
            three perpendicular axes (say, east, north, up), you can write three separate equations,
            one for each axis: {`$F_x = ma_x$`}, {`$F_y = ma_y$`}, {`$F_z = ma_z$`}. That works, but
            it hides what the law really says. Forces and motions in space have a direction, not
            just a size. A vector packs the direction in. So you can write the law once, in one
            line, {`$F = ma$`}, and it stays correct no matter how you choose the axes.
          </p>

          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              What happens to Newton's second law if you rotate your axes? Does {`$F = ma$`} still
              hold?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                The equation still holds. Only the components change. The vector form does not care
                which axes you drew. It lives in real space.
              </p>
            </details>
          </div>

          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>
              A vector has a size and a direction in real space. Real space does not care which axes
              you drew. So {`$F = ma$`} stays true even when you spin your axes.
            </p>
            <p>Only the components {`$F_x, F_y, F_z$`} change. The arrow itself is fixed.</p>
          </div>

          <h3>Real-World Lift</h3>
          <p>
            A drone hovering in wind feels three forces at once: thrust pointing up from the rotors,
            gravity pointing down, and wind pushing sideways. The flight controller does not solve
            three separate problems. It adds the three force vectors, divides by mass, and gets one
            acceleration vector. That is {`$F = ma$`} in action.
          </p>

          <ForceDecomp />

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>
              Why does writing {`$F = ma$`} as one vector equation buy you anything when you could
              just write three scalar equations?
            </p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                One vector equation hides the choice of axes. Switch to a tilted frame and the same
                equation still works. The three scalar versions only hold in the axes you picked.
              </p>
              <p>
                The vector form also shortens proofs. You can prove things about real arrows in
                space, not about three columns of numbers tied to one frame.
              </p>
            </details>
          </div>
        </>,

        <>
          <h2>What a Vector Really Is</h2>
          <p>
            A vector is an arrow in space. It has two parts: a length, called the{' '}
            <strong>magnitude</strong>, and a way it points, called the <strong>direction</strong>.
            We write the magnitude as {`$|A|$`} or just {`$A$`}.
          </p>
          <p>
            Here is the critical point that trips up almost every beginner. A vector is{' '}
            <strong>not tied to any location.</strong> You can pick it up and move it anywhere in
            space without changing it. Two arrows are the same vector if and only if they have the
            same length and point the same way, regardless of where they sit.
          </p>
          <p>
            Moving a vector without rotating it is called <strong>parallel translation</strong>. The
            vector is unchanged.
          </p>

          <h3>Real-World Lift</h3>
          <p>
            Wind forecasts give a vector at every map point: the magnitude is wind speed, the
            direction is the way air flows. GPS reports your velocity as a vector with size and
            heading. Both ideas need an arrow, not just a number.
          </p>

          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              If you slide an arrow across a page without rotating it, do you get the same vector or
              a different one?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                Same vector. Sliding without rotating keeps both the magnitude and the direction.
              </p>
            </details>
          </div>

          <SlidingVector />

          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>
              A vector carries no information about where it sits. It only stores how long it is and
              where it points. So moving the tail leaves both pieces of information untouched.
            </p>
          </div>

          <h3>The Unit Vector</h3>
          <p>
            A <strong>unit vector</strong> has magnitude one. We write the unit vector along {`$A$`}{' '}
            as {`$\\hat{A}$`}. The recipe is simple: divide {`$A$`} by its own magnitude. You can
            rebuild the original by stretching the unit vector back out.
          </p>
          <div className="lrn-eq lrn-eq-display">{`$$\\hat{A} = \\frac{A}{|A|}$$`}</div>
          <div className="lrn-eq">{`$$A = |A|\\, \\hat{A}$$`}</div>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>Why does dividing a vector by its magnitude always give a vector of length one?</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                {`Magnitude scales linearly. If $A$ has length $L$, then $\\frac{A}{L}$ has length $\\frac{L}{L} = 1$.`}
              </p>
              <p>
                The direction is unchanged because dividing by a positive number does not flip it.
              </p>
            </details>
          </div>

          <p>
            A note for later. Most vectors in this module are free arrows: forces, velocities,
            displacements. You can slide them around without changing them. One special case behaves
            differently: the <strong>position vector</strong>. A position vector points from the
            origin to a particle, so it is tied to whatever you picked as the origin. We will deal
            with this when we get to position. For now, treat every vector as a free arrow unless we
            say otherwise.
          </p>
        </>,

        <>
          <h2>The Algebra of Vectors</h2>
          <p>
            You can add vectors, subtract them, and multiply them by numbers. These operations
            always give you new vectors. A swimmer crossing a river adds her velocity to the
            current's velocity. An aircraft adds its airspeed to a headwind. Vector algebra is the
            tool for both.
          </p>

          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>What do you get when you add a vector to its negative, {`$A + (-A)$`}?</p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                The zero vector. Magnitude zero, direction undefined. The two arrows cancel tip to
                tail.
              </p>
            </details>
          </div>

          <h3>Multiplication by a Scalar</h3>
          <p>
            If {`$b$`} is a number and {`$A$`} is a vector, then {`$C = bA$`} is a new vector. Its
            magnitude is {`$|C| = b|A|$`}. Its direction matches {`$A$`} when {`$b$`} is positive
            and flips when {`$b$`} is negative.
          </p>

          <h3>Adding Two Vectors Head-to-Tail</h3>
          <p>
            To add {`$A$`} and {`$B$`}, slide the tail of {`$B$`} to the head of {`$A$`}. Draw a new
            arrow from the tail of {`$A$`} to the head of {`$B$`}. That arrow is {`$A + B$`}.
          </p>
          <p>
            You get the same answer if you slide {`$A$`} to the head of {`$B$`}. So vector addition
            is <strong>commutative</strong>: {`$A + B = B + A$`}. It is also{' '}
            <strong>associative</strong>: {`$(A + B) + C = A + (B + C)$`}.
          </p>

          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>Both ways of adding produce the same parallelogram with the same diagonal.</p>
            <p>The diagonal is the sum. This is the geometric proof that order does not matter.</p>
          </div>

          <VecAddition />
          <DragVector />

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>
              Why does adding {`$A + B$`} give the same arrow as {`$B + A$`} even though you start
              from different sides of the parallelogram?
            </p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                Both walks end at the same far corner of the same parallelogram. Going first along{' '}
                {`$A$`} then along {`$B$`} reaches the corner. Going first along {`$B$`} then along{' '}
                {`$A$`} reaches the same corner.
              </p>
              <p>
                The diagonal that connects the start to the corner is the same arrow either way.
                That arrow is the sum.
              </p>
            </details>
          </div>

          <h4>Worked example: associativity of vector addition</h4>
          <div className="lrn-faded">
            <div className="lrn-faded-phase">
              <span className="lrn-faded-label">COMPLETE EXAMPLE</span>
              <p>{`Show $(A + B) + C = A + (B + C)$ by head-to-tail walking.`}</p>
              <ol className="lrn-list">
                <li>{`Walk from origin along $A$ to a point $P_1$.`}</li>
                <li>{`From $P_1$ walk along $B$ to a point $P_2$.`}</li>
                <li>{`From $P_2$ walk along $C$ to a point $P_3$.`}</li>
                <li>{`The total arrow from origin to $P_3$ is $(A + B) + C$.`}</li>
              </ol>
            </div>
            <div className="lrn-faded-phase">
              <span className="lrn-faded-label">YOUR TURN: PARTIAL</span>
              <p>{`Now group the other way. Walk from origin along $A$, then add the combined arrow $B + C$.`}</p>
              <ol className="lrn-list">
                <li>{`Walk from origin along $A$ to a point $P_1$.`}</li>
                <li>{`From $P_1$ walk along the combined arrow $\\rule{1cm}{0.5pt}$ to a point $P_3'$.`}</li>
                <li>{`Argue that $P_3'$ equals $P_3$ from the first walk.`}</li>
              </ol>
            </div>
            <div className="lrn-faded-phase">
              <span className="lrn-faded-label">INDEPENDENT PRACTICE</span>
              <p>
                {`Take $A = (2, 1, 3)$, $B = (1, 4, 0)$, $C = (5, 2, 1)$. Compute $(A + B) + C$ and $A + (B + C)$ in components. Both routes should give $(8, 7, 4)$.`}
              </p>
            </div>
          </div>

          <h3>Subtracting Two Vectors</h3>
          <p>To subtract, flip the second vector and add. So {`$A - B = A + (-B)$`}.</p>

          <div className="lrn-callout lrn-warning">
            <span className="lrn-callout-label">Watch Out</span>
            <p>
              {`Adding two velocities at an angle gives a sum smaller than $|A| + |B|$. Only when they point the same way does the sum equal the arithmetic sum.`}
            </p>
            <p>
              A swimmer at 1 m/s across a 1 m/s current does not move at 2 m/s. The diagonal of the
              parallelogram is shorter than two arms laid end to end.
            </p>
          </div>
        </>,

        <>
          <h2>The Dot Product</h2>
          <p>
            The <strong>dot product</strong> turns two vectors into a single number. We also call it
            the <strong>scalar product</strong>. Physicists use it to compute work done by a force.
            Game developers use it to find lighting angles on surfaces. Robotics engineers use it to
            project sensor readings onto motion axes.
          </p>

          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              What does the dot product give when two vectors point the same way? When they are
              perpendicular?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>{`Same way: $A \\cdot B = |A||B|$, the maximum. Perpendicular: $A \\cdot B = 0$.`}</p>
            </details>
          </div>

          <p>
            Imagine the sun directly overhead, with vector {`$A$`} lying flat on the ground. The
            vector {`$B$`} casts a <strong>shadow</strong> onto the line of {`$A$`}. The length of
            that shadow is {`$|B|\\cos\\theta$`}, where {`$\\theta$`} is the angle between the two
            vectors. Multiply that shadow length by the full length of {`$A$`} and you get the dot
            product:
          </p>
          <div className="lrn-eq lrn-eq-display">{`$$A \\cdot B = |A|\\,|B|\\, \\cos\\theta$$`}</div>
          <p>
            {`$|A|$`} is the length of the first vector. {`$|B|$`} is the length of the second.{' '}
            {`$\\theta$`} is the angle between them, measured from one to the other. The result is a
            plain number, not a vector.
          </p>
          <div className="lrn-eq">{`$$A \\cdot B = |A| \\times (\\text{shadow of } B \\text{ along } A)$$`}</div>

          <DotProjection />
          <DotProductInteractive />

          <p>A vector dotted with itself gives its magnitude squared.</p>
          <div className="lrn-eq">{`$$A \\cdot A = |A|^2$$`}</div>

          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>{`Plug $B = A$ into the definition. The angle is zero, so $\\cos 0 = 1$.`}</p>
            <p>{`You get $|A| \\cdot |A| \\cdot 1 = |A|^2$.`}</p>
          </div>

          <h3>The Law of Cosines from Vector Algebra</h3>
          <p>
            Take a triangle with sides {`$A$`}, {`$B$`}, and {`$C$`}, where the third side closes
            the triangle: {`$C = A - B$`}. Let {`$\\varphi$`} be the interior angle of the triangle
            at the vertex where {`$A$`} and {`$B$`} meet. Square the length of {`$C$`} using the dot
            product.
          </p>
          <div className="lrn-proof">
            <span className="lrn-proof-header">Derivation</span>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">1.</span>
              <div className="lrn-proof-step-content">{`$$|C|^2 = (A - B) \\cdot (A - B)$$`}</div>
            </div>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">2.</span>
              <div className="lrn-proof-step-content">{`$$|C|^2 = |A|^2 + |B|^2 - 2 A \\cdot B$$`}</div>
            </div>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">3.</span>
              <div className="lrn-proof-step-content">{`$$|C|^2 = |A|^2 + |B|^2 - 2|A||B|\\cos\\varphi$$`}</div>
            </div>
            <div className="lrn-qed">Q.E.D.</div>
          </div>
          <p>
            That is the textbook <strong>law of cosines</strong>.
          </p>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>
              Why does the cross term {`$2 A \\cdot B$`} appear when you square the sum of two
              vectors, but not when you square a single number?
            </p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                {`The cross term is always there. For numbers, $(a+b)^2 = a^2 + 2ab + b^2$ has the same $2ab$ term.`}
              </p>
              <p>
                The dot product is the vector cousin of the product. So {`$2 A \\cdot B$`} is the
                vector cross term.
              </p>
            </details>
          </div>

          <h3>Work and the Dot Product</h3>
          <p>
            A force {`$F$`} pushing through a displacement {`$d$`} does <strong>work</strong>. Only
            the part of force along the motion contributes. The dot product picks that part
            automatically.
          </p>
          <div className="lrn-eq lrn-eq-display">{`$$W = (F \\cos\\theta)\\, d = F \\cdot d$$`}</div>

          <DotWork />
        </>,

        <>
          <h2>The Cross Product</h2>
          <p>
            The <strong>cross product</strong> turns two vectors into a third vector. We also call
            it the <strong>vector product</strong>. It shows up whenever two directions combine to
            point along a third axis. The torque you feel on a wrench. The force on a current in a
            motor. The lift force on a spinning ball.
          </p>

          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>If two vectors point the same way, what is the size of their cross product?</p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>{`Zero. The angle is $0$, so $\\sin 0 = 0$, so the magnitude is zero.`}</p>
            </details>
          </div>

          <p>
            Why does the result point perpendicular to both vectors? Think about what the cross
            product can possibly depend on. The only ingredients are {`$A$`}, {`$B$`}, and the
            geometry of space itself. The result must be a vector built only from those ingredients.
            Two natural directions exist that are tied only to {`$A$`} and {`$B$`}: along the line
            of {`$A$`}, and along the line of {`$B$`}. But neither can be right. If the result
            pointed along {`$A$`}, then swapping the two vectors should swap the result, yet it
            would still point along {`$A$`}, which is the same direction. The same problem happens
            for {`$B$`}. The only direction left, the one neither vector picks out by itself, is the
            direction perpendicular to both. That is where the result must point.
          </p>
          <p>The formula captures this:</p>

          <p>If {`$C = A \\times B$`}, then the magnitude is</p>
          <div className="lrn-eq lrn-eq-display">{`$$|C| = |A|\\,|B|\\, \\sin\\theta$$`}</div>
          <p>
            {`$|A|$`} and {`$|B|$`} are the lengths of the two vectors. {`$\\theta$`} is the angle
            between them. The magnitude equals the area of the parallelogram they span, because{' '}
            {`$|A||B|\\sin\\theta$`} is exactly the base times the height of that parallelogram.
          </p>
          <p>
            The direction of {`$C$`} is perpendicular to both. To pick which of the two
            perpendicular sides, physicists use the <strong>right-hand rule</strong>: curl the
            fingers of your right hand from {`$A$`} toward {`$B$`}, and your thumb points along{' '}
            {`$C$`}. This convention is <strong>purely human.</strong> There is nothing physically
            special about the right hand. Left-handed coordinates are equally valid. Physics
            textbooks all agree to use the right hand so that formulas look the same everywhere.
          </p>
          <p>
            One thing to flag for later. Vectors built from a cross product (like torque) flip in a
            peculiar way when you look at the world in a mirror. They behave differently from
            ordinary vectors like velocity. Physicists call them <strong>pseudovectors</strong>. You
            will meet them properly when you study angular momentum. For now, just know the cross
            product produces a slightly special kind of vector.
          </p>

          <CrossProduct />

          <div className="lrn-callout lrn-warning">
            <span className="lrn-callout-label">Watch Out</span>
            <p>
              Always use your right hand consistently. Switching to your left hand flips the sign.
            </p>
            <p>This is the most common error when first learning torque and magnetic force.</p>
          </div>

          <p>
            The cross product is <strong>anticommutative</strong>. A vector crossed with itself is
            zero.
          </p>
          <div className="lrn-eq">{`$$B \\times A = -A \\times B,\\qquad A \\times A = 0$$`}</div>

          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>{`The angle of a vector with itself is zero, so $\\sin 0 = 0$.`}</p>
            <p>The magnitude of the result is zero. So the cross product is the zero vector.</p>
          </div>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>
              Why does {`$\\sin\\theta$`} in the cross product give zero when vectors are parallel,
              while {`$\\cos\\theta$`} in the dot product gives the maximum?
            </p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                Parallel vectors share a direction. Cosine measures how aligned two arrows are, so{' '}
                {`$\\cos 0 = 1$`} gives the largest dot product.
              </p>
              <p>
                Sine measures the perpendicular spread between them. Two parallel arrows have no
                spread, so {`$\\sin 0 = 0$`} gives the smallest cross product.
              </p>
            </details>
          </div>

          <h3>Dot Product vs Cross Product</h3>
          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Dot Product</span>
              <p>{`Largest when parallel, zero when perpendicular. Uses $\\cos\\theta$. Returns a scalar.`}</p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Cross Product</span>
              <p>{`Zero when parallel, largest when perpendicular. Uses $\\sin\\theta$. Returns a vector.`}</p>
            </div>
          </div>

          <div className="lrn-callout lrn-tip">
            <span className="lrn-callout-label">Pick the Right Tool</span>
            <p>
              If you need a vector result, use the cross product. If you need a number, use the dot
              product.
            </p>
            <p>
              Mixing them up is a common error. Torque is a vector, so you need cross. Work is a
              number, so you need dot.
            </p>
          </div>

          <h3>Cross Product in Physics</h3>
          <p>
            A charged particle moving with velocity {`$v$`} in a magnetic field {`$B$`} feels a
            force. A force {`$F$`} that acts at position {`$r$`} from a pivot creates a{' '}
            <strong>torque</strong>. Both quantities use cross products.
          </p>
          <div className="lrn-eq">{`$$F = q\\, v \\times B,\\qquad \\tau = r \\times F$$`}</div>

          <h3>Area as a Vector</h3>
          <p>
            A parallelogram with edge vectors {`$C$`} and {`$D$`} has area {`$CD \\sin\\theta$`}. We
            can package this area together with the orientation into a single area vector. The
            direction is the normal to the parallelogram. The magnitude is the area.
          </p>
          <div className="lrn-eq">{`$$A = C \\times D$$`}</div>
        </>,

        <>
          <h2>Components of a Vector</h2>
          <p>
            You can describe a vector by three numbers along three axes. These numbers are the{' '}
            <strong>components</strong>. Smartphone accelerometers report {`$(a_x, a_y, a_z)$`} a
            thousand times a second. Construction-site total stations track positions as{' '}
            {`$(x, y, z)$`} tuples. Components turn geometry into arithmetic.
          </p>
          <div className="lrn-eq">{`$$A = (A_x, A_y, A_z)$$`}</div>

          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              If you rotate the axes, what happens to the components of a fixed vector? Does{' '}
              {`$|A|$`} change?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                The components change. The magnitude stays the same. The arrow itself does not move.
              </p>
            </details>
          </div>

          <ComponentsRotation />

          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY DO COMPONENTS WORK?</span>
            <p>
              Pick two perpendicular axes. Every vector in the plane casts one shadow on each axis.
              Those two shadow lengths are the components. Two claims need checking: the components
              rebuild the vector, and they do so in only one way.
            </p>
            <p>
              The rebuild is the head-to-tail rule applied backwards: walk along the first axis by
              the first component, then along the second axis by the second component, and you
              arrive at the tip of the original vector.
            </p>
            <p>
              Uniqueness is also short. Suppose two different pairs of components produced the same
              vector. Subtract one pair from the other. The difference is the zero vector, which has
              zero shadow on every axis. So the two pairs were equal to begin with. Components are a
              one-to-one label for vectors.
            </p>
          </div>

          <p>The magnitude follows from the Pythagorean theorem in three dimensions.</p>
          <div className="lrn-eq lrn-eq-display">{`$$|A| = \\sqrt{A_x^2 + A_y^2 + A_z^2}$$`}</div>
          <p>{`The angle from the $x$-axis in 2D follows from`}</p>
          <div className="lrn-eq">{`$$\\theta = \\arctan\\!\\left(\\frac{A_y}{A_x}\\right)$$`}</div>

          <h3>Geometric View vs Component View</h3>
          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Arrows</span>
              <p>Best for proofs and quick reasoning about angles.</p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Components</span>
              <p>Best for plugging numbers into a formula.</p>
            </div>
          </div>
          <p>
            Both describe the same vector. The components depend on the axes you chose. The vector
            itself does not. If {`$A = B$`} in one frame, then {`$A = B$`} in every frame.
          </p>

          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>The vector is a real arrow in space.</p>
            <p>Rotating the axes only relabels the numbers. The arrow stays put.</p>
          </div>

          <h3>Working with Components</h3>
          <p>Adding by components is easy. The dot product also reduces to a sum.</p>
          <div className="lrn-eq">{`$$A + B = (A_x + B_x,\\ A_y + B_y,\\ A_z + B_z)$$`}</div>
          <div className="lrn-eq">{`$$A \\cdot B = A_x B_x + A_y B_y + A_z B_z$$`}</div>

          <h3>Vector Algebra Worked Through</h3>
          <p>
            Take {`$A = (3, 5, -7)$`} and {`$B = (2, 7, 1)$`}.
          </p>
          <ul className="lrn-list">
            <li>{`The sum is $A + B = (5, 12, -6)$.`}</li>
            <li>{`The magnitude of $A$ is $|A| = \\sqrt{9 + 25 + 49} = \\sqrt{83}$.`}</li>
            <li>{`The magnitude of $B$ is $|B| = \\sqrt{4 + 49 + 1} = \\sqrt{54}$.`}</li>
            <li>{`The dot product is $A \\cdot B = 6 + 35 - 7 = 34$.`}</li>
            <li>{`The angle satisfies $\\cos\\theta = \\frac{34}{\\sqrt{83 \\cdot 54}}$.`}</li>
          </ul>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>
              Why does the dot product reduce to a single sum of products, even though the geometric
              definition uses an angle?
            </p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                The basis vectors are perpendicular and length one. Cross terms with different basis
                vectors vanish because their dot products are zero.
              </p>
              <p>Only matched terms survive. That leaves a clean sum of products.</p>
            </details>
          </div>
        </>,

        <>
          <h2>Base Vectors</h2>
          <p>
            A <strong>base vector</strong> has length one and points along a coordinate axis. The
            cartesian base vectors are {`$\\hat{i}$`}, {`$\\hat{j}$`}, and {`$\\hat{k}$`}. Computer
            graphics rotates objects by combining rotations around base axes. Robot arm joints store
            their orientation as base-vector frames at each link.
          </p>

          <BaseVectors />

          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              Do {`$\\hat{i} \\times \\hat{j}$`} and {`$\\hat{j} \\times \\hat{i}$`} give the same
              vector? If not, how do they differ?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>{`They differ by a sign: $\\hat{i} \\times \\hat{j} = \\hat{k}$ and $\\hat{j} \\times \\hat{i} = -\\hat{k}$.`}</p>
            </details>
          </div>

          <CrossAntisym />

          <p>
            One important thing to say up front: {`$\\hat{i}$`}, {`$\\hat{j}$`}, and {`$\\hat{k}$`}{' '}
            are <strong>not physically special.</strong> They are a convenient toolkit, nothing
            more. You can choose any three perpendicular directions as your base vectors and the
            physics stays exactly the same. Textbooks use {`$\\hat{i}$`}, {`$\\hat{j}$`},{' '}
            {`$\\hat{k}$`} by convention, not because nature prefers east, north, and up.
          </p>

          <p>Any vector can be written as</p>
          <div className="lrn-eq lrn-eq-display">{`$$A = A_x\\,\\hat{i} + A_y\\,\\hat{j} + A_z\\,\\hat{k}$$`}</div>
          <p>The base vectors satisfy clean dot product rules.</p>
          <div className="lrn-eq">
            <span>{`$$\\hat{i}\\cdot\\hat{i} = \\hat{j}\\cdot\\hat{j} = \\hat{k}\\cdot\\hat{k} = 1$$`}</span>
            <span>{`$$\\hat{i}\\cdot\\hat{j} = \\hat{j}\\cdot\\hat{k} = \\hat{k}\\cdot\\hat{i} = 0$$`}</span>
          </div>
          <p>They also satisfy clean cross product rules.</p>
          <div className="lrn-eq">{`$$\\hat{i} \\times \\hat{j} = \\hat{k},\\quad \\hat{j}\\times\\hat{k} = \\hat{i},\\quad \\hat{k}\\times\\hat{i} = \\hat{j}$$`}</div>
          <p>
            This pattern is the <strong>right-hand triple</strong>. A coordinate system that obeys
            these rules is a <strong>right-handed coordinate system</strong>.
          </p>

          <p>A component is just a dot product.</p>
          <div className="lrn-eq">{`$$A_z = A \\cdot \\hat{k}$$`}</div>

          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>{`Dot $A = A_x\\hat{i} + A_y\\hat{j} + A_z\\hat{k}$ with $\\hat{k}$.`}</p>
            <p>{`Only the $\\hat{k}\\cdot\\hat{k}$ term survives. The result is $A_z$.`}</p>
          </div>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>
              Why does the cyclic rule {`$\\hat{i}\\times\\hat{j}=\\hat{k}$`},{' '}
              {`$\\hat{j}\\times\\hat{k}=\\hat{i}$`}, {`$\\hat{k}\\times\\hat{i}=\\hat{j}$`} work in
              this exact order?
            </p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                The cyclic order matches the right-hand rule. Fingers from {`$\\hat{i}$`} to{' '}
                {`$\\hat{j}$`} curl with the thumb pointing along {`$\\hat{k}$`}.
              </p>
              <p>
                Shift one step: from {`$\\hat{j}$`} to {`$\\hat{k}$`} the thumb points along{' '}
                {`$\\hat{i}$`}. The pattern is the same right hand rotated to a new pair.
              </p>
            </details>
          </div>

          <h3>Cross Product as a Determinant</h3>
          <p>You can write the cross product as a determinant of base vectors.</p>
          <div className="lrn-eq">{`$$A \\times B = \\begin{vmatrix} \\hat{i} & \\hat{j} & \\hat{k} \\\\ A_x & A_y & A_z \\\\ B_x & B_y & B_z \\end{vmatrix}$$`}</div>
          <p>Expanding gives</p>
          <div className="lrn-eq">{`$$A \\times B = \\hat{i}(A_y B_z - A_z B_y) - \\hat{j}(A_x B_z - A_z B_x) + \\hat{k}(A_x B_y - A_y B_x)$$`}</div>

          <h4>Worked example: cross product of (1, 2, 3) and (4, 5, 6)</h4>
          <div className="lrn-faded">
            <div className="lrn-faded-phase">
              <span className="lrn-faded-label">COMPLETE EXAMPLE</span>
              <p>{`Compute $A \\times B$ for $A = (1, 2, 3)$ and $B = (4, 5, 6)$ via the determinant.`}</p>
              <ol className="lrn-list">
                <li>{`Cofactor of $\\hat{i}$: $A_y B_z - A_z B_y = 2 \\cdot 6 - 3 \\cdot 5 = -3$.`}</li>
                <li>{`Cofactor of $\\hat{j}$: $-(A_x B_z - A_z B_x) = -(1 \\cdot 6 - 3 \\cdot 4) = 6$.`}</li>
              </ol>
            </div>
            <div className="lrn-faded-phase">
              <span className="lrn-faded-label">YOUR TURN: PARTIAL</span>
              <p>{`Now compute the cofactor of $\\hat{k}$.`}</p>
              <ol className="lrn-list">
                <li>{`Apply $A_x B_y - A_y B_x = \\rule{1cm}{0.5pt}$.`}</li>
                <li>{`Plug $A_x = 1, B_y = 5, A_y = 2, B_x = 4$ and simplify.`}</li>
              </ol>
            </div>
            <div className="lrn-faded-phase">
              <span className="lrn-faded-label">INDEPENDENT PRACTICE</span>
              <p>{`Assemble the full vector $A \\times B$ from your three cofactors.`}</p>
            </div>
          </div>
          <p>
            A quick check: {`$A \\cdot (A \\times B) = -3 + 12 - 9 = 0$`}, and{' '}
            {`$B \\cdot (A \\times B) = -12 + 30 - 18 = 0$`}. The result is perpendicular to both,
            as it must be.
          </p>
        </>,

        <>
          <h2>Position, Displacement, and the Coordinate System</h2>
          <p>
            The <strong>position vector</strong> {`$r$`} points from the origin to a particle. Tesla
            Autopilot tracks every nearby car as a position vector. Land surveyors set an origin and
            measure positions from it. Both ideas need a chosen origin.
          </p>
          <div className="lrn-eq lrn-eq-display">{`$$r = (x, y, z) = x\\hat{i} + y\\hat{j} + z\\hat{k}$$`}</div>

          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              If you change the origin, what happens to the position vector? What stays the same?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                The position vector shifts. The displacement between any two points stays the same.
              </p>
            </details>
          </div>

          <DisplacementInvariant />

          <p>
            Position depends on origin. If a new origin sits at {`$R$`} from the old one, the new
            position is
          </p>
          <div className="lrn-eq">{`$$r' = r - R$$`}</div>
          <p>
            <strong>Displacement</strong> {`$S$`} is the change in position. Unlike position,
            displacement does not depend on origin.
          </p>

          <h3>Position vs Displacement</h3>
          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Position</span>
              <p>{`The position vector $r$ tells you where a particle is, measured from the origin you picked.`}</p>
              <p>{`Move the origin and $r$ shifts.`}</p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Displacement</span>
              <p>{`The displacement $S$ tells you how far and in what direction it moved between two moments.`}</p>
              <p>{`$S$ does not depend on origin.`}</p>
            </div>
          </div>

          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>
              {`Displacement is the difference $S = r_2 - r_1$. Shift the origin by $R$ and both positions become $r_1' = r_1 - R$ and $r_2' = r_2 - R$.`}
            </p>
            <p>
              {`The shift $R$ cancels in the subtraction, leaving $S$ unchanged. Position depends on origin; the difference of positions does not.`}
            </p>
          </div>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>
              Why does displacement not depend on the origin you choose, even though position does?
            </p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                Position is an arrow from origin to particle. Move the origin and that arrow moves.
                Displacement is an arrow from one particle position to another particle position.
              </p>
              <p>
                The two endpoints of the displacement arrow both shift by the same {`$R$`} when you
                pick a new origin. So the arrow between them is the same.
              </p>
            </details>
          </div>

          <p>
            This distinction is not bookkeeping. It is one of the deepest facts in classical
            physics. No experiment can tell you the absolute position of anything. Only differences
            between positions are measurable, and only those differences appear in physical laws.
            Position is a label you choose. Displacement is real. We will use this fact in the last
            section of this module to derive the form of Newton's second law from scratch.
          </p>
        </>,

        <>
          <h2>The Derivative of a Vector</h2>
          <p>
            When a scalar changes, only one thing can happen: it gets bigger or smaller. When a
            vector changes, two things can happen independently: its length can change, and its
            direction can change. A vector with fixed length can still have a nonzero derivative if
            it is rotating. A scalar with fixed value always has a zero derivative.
          </p>
          <p>
            The formal definition looks the same as the scalar case, but the subtraction is vector
            subtraction:
          </p>
          <div className="lrn-eq">{`$$\\frac{dA}{dt} = \\lim_{\\Delta t \\to 0} \\frac{A(t + \\Delta t) - A(t)}{\\Delta t}$$`}</div>

          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              If a vector keeps the same length but rotates, what direction does its derivative
              point?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>The derivative is perpendicular to the vector. Sideways, never along.</p>
            </details>
          </div>

          <h3>Splitting Magnitude Change and Direction Change</h3>
          <p>If the magnitude is constant and only the direction rotates, then</p>
          <p>
            Two arrows of length {`$A$`}, drawn from the same tail, with angle {`$\\Delta\\theta$`}{' '}
            between them. The straight line joining their tips is a chord of a circle of radius{' '}
            {`$A$`}. From basic trigonometry, that chord has length{' '}
            {`$2A \\sin\\!\\left(\\frac{\\Delta\\theta}{2}\\right)$`}.
          </p>
          <div className="lrn-eq">{`$$|\\Delta A| = 2 A \\sin\\!\\left(\\frac{\\Delta\\theta}{2}\\right) \\approx A\\, \\Delta\\theta$$`}</div>
          <p>So the rate of change has size {`$A$`} times the rotation rate.</p>
          <div className="lrn-eq lrn-eq-display">{`$$\\left|\\frac{dA}{dt}\\right| = A\\, \\frac{d\\theta}{dt}$$`}</div>
          <p>
            {`For a constant-magnitude vector, $\\frac{dA}{dt}$ is perpendicular to $A$ itself.`}
          </p>

          <RotatingChord />

          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>{`The change $\\Delta A$ closes the gap between $A(t)$ and $A(t+\\Delta t)$.`}</p>
            <p>
              For tiny rotations, this gap is a chord across a small arc. The chord lies almost
              perpendicular to the radius.
            </p>
          </div>

          <h4>Worked example: derivative of a constant-magnitude vector</h4>
          <div className="lrn-faded">
            <div className="lrn-faded-phase">
              <span className="lrn-faded-label">COMPLETE EXAMPLE</span>
              <p>{`Derive $\\left|\\frac{dA}{dt}\\right| = A\\, \\frac{d\\theta}{dt}$ from the chord formula.`}</p>
              <ol className="lrn-list">
                <li>{`Start with the chord-length formula $|\\Delta A| = 2A \\sin\\!\\left(\\frac{\\Delta\\theta}{2}\\right)$.`}</li>
                <li>{`Note that for small angles, $\\sin x \\approx x$, so $\\sin\\!\\left(\\frac{\\Delta\\theta}{2}\\right) \\approx \\frac{\\Delta\\theta}{2}$.`}</li>
              </ol>
            </div>
            <div className="lrn-faded-phase">
              <span className="lrn-faded-label">YOUR TURN: PARTIAL</span>
              <p>{`Substitute the small-angle limit into the chord formula.`}</p>
              <ol className="lrn-list">
                <li>{`Substitute to get $|\\Delta A| \\approx 2A \\cdot \\rule{1cm}{0.5pt}$.`}</li>
                <li>{`Divide both sides by $\\Delta t$ and take the limit.`}</li>
              </ol>
            </div>
            <div className="lrn-faded-phase">
              <span className="lrn-faded-label">INDEPENDENT PRACTICE</span>
              <p>{`State the result and explain why it gives the speed $|v| = r\\omega$ for a particle on a circle of radius $r$.`}</p>
            </div>
          </div>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>Why are the parallel and perpendicular parts of a vector derivative independent?</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                A vector can stretch without rotating. Or it can rotate without stretching. Or it
                can do both at once. Each motion contributes to a different piece of the derivative.
              </p>
              <p>
                The parallel part comes only from stretching. The perpendicular part comes only from
                rotating. Either part can be zero while the other is nonzero.
              </p>
            </details>
          </div>

          <h3>Decomposing the Derivative</h3>
          <p>For a general vector, split the change into parts.</p>
          <div className="lrn-eq">{`$$\\left|\\frac{dA_\\perp}{dt}\\right| = A\\, \\frac{d\\theta}{dt},\\qquad \\left|\\frac{dA_\\parallel}{dt}\\right| = \\frac{dA}{dt}$$`}</div>
          <p>
            The perpendicular part comes from rotation. The parallel part comes from stretching.
          </p>

          <h3>Product Rules for Vector Derivatives</h3>
          <p>
            The product rules look like the scalar version. For a scalar {`$c$`} times a vector{' '}
            {`$A$`}, for a dot product, and for a cross product:
          </p>
          <div className="lrn-eq">{`$$\\frac{d(cA)}{dt} = \\frac{dc}{dt} A + c\\frac{dA}{dt}$$`}</div>
          <div className="lrn-eq">{`$$\\frac{d(A \\cdot B)}{dt} = \\frac{dA}{dt} \\cdot B + A \\cdot \\frac{dB}{dt}$$`}</div>
          <div className="lrn-eq">{`$$\\frac{d(A \\times B)}{dt} = \\frac{dA}{dt} \\times B + A \\times \\frac{dB}{dt}$$`}</div>
          <p>
            In the cross product version, order matters because the cross product is
            anticommutative.
          </p>
          <p>A useful corollary uses self-dot.</p>
          <div className="lrn-eq">{`$$\\frac{d(A^2)}{dt} = 2 A \\cdot \\frac{dA}{dt}$$`}</div>
        </>,

        <>
          <h2>Velocity and Acceleration</h2>
          <p>
            Motion lives in time. We get velocity and acceleration by taking time derivatives of
            position. Spacecraft trajectory planners do this thousands of times per orbit. Car
            braking systems use it to predict stopping distance. Sports analysts use it to model a
            ball's flight.
          </p>

          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>If a particle's speed {`$|v|$`} stays constant, is the acceleration zero?</p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                Acceleration can still be nonzero. Direction can change without speed changing.
                Circular motion is the classic case.
              </p>
            </details>
          </div>

          <h3>Motion in One Dimension</h3>
          <p>
            The <strong>average velocity</strong> between two times is the change in position
            divided by the time gap. The <strong>instantaneous velocity</strong> is the limit as the
            gap shrinks.
          </p>
          <div className="lrn-eq">{`$$\\bar{v} = \\frac{x(t_2) - x(t_1)}{t_2 - t_1}$$`}</div>
          <div className="lrn-eq">{`$$v = \\lim_{\\Delta t \\to 0} \\frac{x(t + \\Delta t) - x(t)}{\\Delta t} = \\frac{dx}{dt}$$`}</div>
          <p>
            The <strong>acceleration</strong> is the rate of change of velocity. The{' '}
            <strong>speed</strong> is the size of velocity.
          </p>
          <div className="lrn-eq">{`$$a = \\frac{dv}{dt},\\qquad s = |v|$$`}</div>

          <h3>Motion in Several Dimensions</h3>
          <p>
            In 2D the position is a vector {`$r(t) = [x(t), y(t)]$`}. Velocity and acceleration
            follow the same idea, component by component.
          </p>
          <div className="lrn-eq">{`$$v = \\frac{dr}{dt} = \\frac{dx}{dt}\\hat{i} + \\frac{dy}{dt}\\hat{j} + \\frac{dz}{dt}\\hat{k}$$`}</div>
          <div className="lrn-eq">{`$$a = \\frac{dv}{dt} = \\frac{d^2 r}{dt^2}$$`}</div>

          <h3>Uniform Circular Motion Worked Through</h3>
          <p>
            Take {`$r = r(\\cos\\omega t\\,\\hat{i} + \\sin\\omega t\\,\\hat{j})$`}. Here {`$r$`} is
            a constant radius and {`$\\omega$`} is the angular frequency. Differentiate.
          </p>
          <div className="lrn-eq">{`$$v = r\\omega(-\\sin\\omega t\\,\\hat{i} + \\cos\\omega t\\,\\hat{j}),\\quad |v| = r\\omega$$`}</div>
          <p>Differentiate again to get acceleration.</p>
          <div className="lrn-eq lrn-eq-display">{`$$a = -r\\omega^2(\\cos\\omega t\\,\\hat{i} + \\sin\\omega t\\,\\hat{j}) = -\\omega^2 r$$`}</div>
          <p>
            This is the <strong>centripetal acceleration</strong>. It points from the particle
            toward the center. Its magnitude is {`$\\omega^2 r$`}.
          </p>
          <p>
            Why does it point inward? The velocity vector has constant length but sweeps in a
            circle, just as the position vector does. The tip of the velocity vector traces a
            circle. The derivative of the velocity vector is therefore a vector pointing toward the
            center of that circle, which is the origin. Acceleration is inward because the velocity
            arrow itself rotates inward, toward where it came from.
          </p>

          <UCM />

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>
              Why does the acceleration in uniform circular motion point exactly opposite to the
              position vector?
            </p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                {`Differentiating $r$ twice gives $a = -\\omega^2 r$. The minus sign reverses the direction. The factor $\\omega^2$ scales the magnitude.`}
              </p>
              <p>
                The geometric reason: velocity is always perpendicular to position, and as the
                particle moves forward, that perpendicular arrow rotates. The rate of rotation of
                the velocity vector points back toward the center, which is the {`$-\\hat{r}$`}{' '}
                direction.
              </p>
            </details>
          </div>
        </>,

        <>
          <h2>Formal Solution of Kinematic Equations</h2>
          <p>
            Here is the logic. Newton's second law tells you the acceleration at every instant. If
            you know how velocity changes (the acceleration), integrating it gives you the velocity.
            If you know how position changes (the velocity), integrating again gives you the
            position.
          </p>
          <p>
            Each integration introduces a free constant. The first integration (to get velocity)
            introduces {`$v_0$`}, the initial velocity. The second (to get position) introduces{' '}
            {`$r_0$`}, the initial position. You must specify both because knowing the acceleration
            history alone leaves infinitely many possible trajectories, one for each choice of
            starting point and starting speed.
          </p>

          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              If you know acceleration as a function of time, what extra information lets you find
              the exact position later?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                You need the initial position and the initial velocity. Two integrations each add
                one free constant, so two initial conditions pin them down.
              </p>
            </details>
          </div>

          <div className="lrn-eq">{`$$v(t) = v_0 + \\int_{t_0}^{t} a(t')\\, dt'$$`}</div>
          <div className="lrn-eq">{`$$r(t) = r_0 + \\int_0^t v(t')\\, dt'$$`}</div>

          <h3>Constant-Acceleration Special Case</h3>
          <p>{`When $a$ is constant in time, the integrals are easy.`}</p>
          <div className="lrn-eq lrn-eq-display">{`$$v(t) = v_0 + a t$$`}</div>
          <div className="lrn-eq lrn-eq-display">{`$$r(t) = r_0 + v_0 t + \\tfrac{1}{2} a t^2$$`}</div>

          <div className="lrn-callout lrn-warning">
            <span className="lrn-callout-label">Warning</span>
            <p>{`These two formulas are special. They only hold when $a$ stays constant.`}</p>
          </div>

          <h3>Motion in a Uniform Gravitational Field</h3>
          <p>
            Take {`$a = -g\\hat{k}$`} with initial velocity{' '}
            {`$v_0 = v_{0x}\\hat{i} + v_{0z}\\hat{k}$`} and initial position at the origin.
          </p>
          <div className="lrn-eq">{`$$x(t) = v_{0x} t,\\quad z(t) = v_{0z} t - \\tfrac{1}{2} g t^2$$`}</div>
          <p>{`Solve the first for $t = \\frac{x}{v_{0x}}$. Plug into the second.`}</p>
          <div className="lrn-eq lrn-eq-display">{`$$z = \\frac{v_{0z}}{v_{0x}} x - \\frac{g}{2 v_{0x}^2} x^2$$`}</div>
          <p>
            This is the <strong>parabolic trajectory</strong> of projectile motion.
          </p>

          <ProjectileMotion />
          <ProjectileLauncher />
        </>,

        <>
          <h2>Motion in Plane Polar Coordinates</h2>
          <p>
            In cartesian coordinates, the unit vectors {`$\\hat{i}$`} and {`$\\hat{j}$`} always
            point east and north, no matter where the particle goes. They never change. In polar
            coordinates, the unit vectors {`$\\hat{r}$`} and {`$\\hat{\\theta}$`} change direction
            as the particle moves. {`$\\hat{r}$`} always points away from the origin, so it rotates
            with the particle. Because these unit vectors are themselves moving, taking a time
            derivative of a position vector written in polar form produces extra terms that look
            mysterious unless you know their origin.
          </p>
          <p>
            For some problems, polar coordinates are still worth this extra work. A circle is one
            equation {`$r = R$`}. Planetary orbits trace ellipses around a polar center.
          </p>

          <h3>Polar Unit Vectors and Their Derivatives</h3>
          <p>
            We define two unit vectors at each point. The radial unit vector {`$\\hat{r}$`} points
            away from the origin. The tangential unit vector {`$\\hat{\\theta}$`} points sideways in
            the direction of increasing {`$\\theta$`}.
          </p>
          <div className="lrn-eq">{`$$\\hat{r} = \\hat{i}\\cos\\theta + \\hat{j}\\sin\\theta$$`}</div>
          <div className="lrn-eq">{`$$\\hat{\\theta} = -\\hat{i}\\sin\\theta + \\hat{j}\\cos\\theta$$`}</div>
          <p>
            Differentiate these with respect to time. Both unit vectors rotate as {`$\\theta$`}{' '}
            changes:
          </p>
          <div className="lrn-eq lrn-eq-display">{`$$\\frac{d\\hat{r}}{dt} = \\dot{\\theta}\\,\\hat{\\theta},\\quad \\frac{d\\hat{\\theta}}{dt} = -\\dot{\\theta}\\,\\hat{r}$$`}</div>
          <p>
            These two lines are the source of every extra term in polar acceleration. When you
            differentiate {`$r\\hat{r}$`} to get velocity, the product rule gives a term from
            differentiating {`$r$`} and a term from differentiating {`$\\hat{r}$`}. The second term
            is {`$r\\dot{\\theta}\\hat{\\theta}$`}, the sideways part of velocity. Differentiating
            again produces four pieces.
          </p>

          <PolarUnits />

          <h3>Velocity and Acceleration in Polar Coordinates</h3>
          <div className="lrn-eq lrn-eq-display">{`$$v = \\dot{r}\\,\\hat{r} + r\\dot{\\theta}\\,\\hat{\\theta}$$`}</div>
          <div className="lrn-eq lrn-eq-display">{`$$a = (\\ddot{r} - r\\dot{\\theta}^2)\\hat{r} + (r\\ddot{\\theta} + 2\\dot{r}\\dot{\\theta})\\hat{\\theta}$$`}</div>

          <h3>Where Each Term Comes From</h3>
          <ul className="lrn-list">
            <li>
              <strong>{`$\\ddot{r}\\hat{r}$`}: linear radial.</strong> The particle speeds up or
              slows down along the radius. Same as in cartesian.
            </li>
            <li>
              <strong>{`$-r\\dot{\\theta}^2\\hat{r}$`}: centripetal.</strong> Points inward. This
              arises from the rotation of {`$\\hat{\\theta}$`}: differentiating the{' '}
              {`$r\\dot{\\theta}\\hat{\\theta}$`} term produces a piece in the {`$-\\hat{r}$`}{' '}
              direction.
            </li>
            <li>
              <strong>{`$r\\ddot{\\theta}\\hat{\\theta}$`}: angular tangential.</strong> The
              rotation rate changes. Tangential, not radial.
            </li>
            <li>
              <strong>{`$2\\dot{r}\\dot{\\theta}\\hat{\\theta}$`}: Coriolis.</strong> Needs both a
              changing radius and a rotation. It comes from differentiating {`$r$`} in the{' '}
              {`$r\\dot{\\theta}\\hat{\\theta}$`} term. Only appears when both {`$\\dot{r}$`} and{' '}
              {`$\\dot{\\theta}$`} are nonzero at the same time.
            </li>
          </ul>
          <p>
            The Coriolis term is the same one that appears in rotating reference frames, where it
            deflects winds and ocean currents. Here it shows up purely from the geometry of polar
            coordinates, with no rotation of the frame at all. The deeper connection between the two
            settings is something you will meet later.
          </p>

          <div className="lrn-callout lrn-warning">
            <span className="lrn-callout-label">Watch Out</span>
            <p>
              {`In polar coordinates $v_r \\neq \\int a_r\\,dt$. The radial component of acceleration is not simply the time derivative of the radial component of velocity, because $\\hat{r}$ and $\\hat{\\theta}$ themselves rotate as the particle moves.`}
            </p>
          </div>
        </>,

        <>
          <h2>Mathematical Approximation Methods</h2>
          <p>
            So far we have written down exact formulas for position, velocity, and acceleration.
            Most physics problems do not have exact answers in closed form: the pendulum, the orbit
            of a planet around the sun, even a thrown ball with air resistance. In each case you
            replace the hard formula with a simpler one that is close enough over the range that
            matters. The Taylor series is the tool that makes "close enough" precise.
          </p>

          <h3>The Taylor Series: Zoom In on Any Smooth Curve</h3>
          <p>
            Here is the core idea. Take any smooth function and zoom in on a point {`$a$`}. The more
            you zoom, the more the curve looks like a straight line. That line is the first-order
            approximation: {`$f(a + x) \\approx f(a) + f'(a)\\,x$`}. If you zoom out a little and
            the line no longer fits, add a bowl shape (a quadratic term). Zoom out more, add an
            S-shape (a cubic term). Each extra term corrects the approximation over a wider range.
            The full Taylor series is exact for smooth functions:
          </p>
          <div className="lrn-eq">{`$$f(a + x) = f(a) + f'(a) x + \\frac{f''(a)}{2!} x^2 + \\frac{f'''(a)}{3!} x^3 + \\cdots$$`}</div>
          <p>
            {`$f(a)$`} is the function value at the base point. {`$f'(a)$`} is the slope there.{' '}
            {`$f''(a)$`} is how the slope is changing. Each coefficient tells you the shape of the
            curve at finer and finer scales. When {`$x$`} is small, higher powers of {`$x$`} shrink
            fast, so truncating early still gives a good answer.
          </p>
          <p>Common Taylor series:</p>
          <div className="lrn-eq">{`$$\\sin x = x - \\frac{x^3}{3!} + \\frac{x^5}{5!} - \\cdots$$`}</div>
          <div className="lrn-eq">{`$$\\cos x = 1 - \\frac{x^2}{2!} + \\frac{x^4}{4!} - \\cdots$$`}</div>
          <div className="lrn-eq">{`$$e^x = 1 + x + \\frac{x^2}{2!} + \\frac{x^3}{3!} + \\cdots$$`}</div>

          <TaylorSin />

          <h3>Differentials</h3>
          <p>
            We call {`$f'(x) dx$`} the <strong>differential</strong> {`$df$`}. For small{' '}
            {`$\\Delta x$`}, {`$\\Delta f \\approx f'(x)\\,\\Delta x$`}.
          </p>
          <div className="lrn-eq">{`$$df \\equiv f'(x)\\, dx,\\qquad \\Delta f = f(x + \\Delta x) - f(x)$$`}</div>

          <h3>Volume of a Sphere</h3>
          <p>The volume is</p>
          <div className="lrn-eq">{`$$V = \\tfrac{4}{3}\\pi r^3$$`}</div>
          <p>Differentiate. Divide both sides by {`$V$`}.</p>
          <div className="lrn-eq lrn-eq-display">{`$$\\frac{dV}{V} = \\frac{3\\, dr}{r}$$`}</div>
          <p>
            A small fractional change in radius produces three times that fractional change in
            volume.
          </p>
        </>,

        // Section 13: Galilean Foundations
        <>
          <h2>Experimental Facts and Galilean Space-Time</h2>

          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              "The laws of nature are the same in all places and at all times." What constraints
              does this put on Newton's equation {`$\\ddot{x} = F(x, \\dot{x}, t)$`}?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                It forces {`$F$`} to not depend on {`$t$`} or absolute position. Only differences
                between positions and velocities can appear.
              </p>
            </details>
          </div>

          <h3>Start Here: The Train</h3>
          <p>
            You are on a train moving at constant speed. You drop a ball. It falls straight down,
            exactly as it would in a stationary room. No experiment you can do inside the train
            tells you whether the train is moving or standing still.
          </p>
          <p>
            This is not a quirk of trains. It is a fundamental fact about nature. The laws of
            physics are the same in every reference frame that moves at constant velocity. Such a
            frame is called an <strong>inertial frame</strong>.
          </p>

          <div className="lrn-definition">
            <span className="lrn-definition-term">Inertial Frame</span>
            <div className="lrn-definition-desc">
              <p>
                A viewpoint from which a free particle (one with no forces acting on it) moves in a
                straight line at constant speed. A train at constant velocity is an inertial frame.
                A spinning carousel is not.
              </p>
            </div>
          </div>

          <h3>The Galilean Boost</h3>
          <p>
            Suppose frame {`$S$`} measures a particle at position {`$x$`} at time {`$t$`}. Frame
            {`$S'$`} moves at constant velocity {`$v$`} relative to {`$S$`}. Frame {`$S'$`} sees the
            same particle at:
          </p>
          <div className="lrn-eq lrn-eq-display">{`$$x' = x - vt,\\quad t' = t$$`}</div>
          <p>
            {`$x'$`} is the position in frame {`$S'$`}. {`$x$`} is the position in frame {`$S$`}.
            {`$v$`} is the velocity of {`$S'$`} relative to {`$S$`}. {`$t$`} is the time, which is
            the same for both frames in classical mechanics.
          </p>
          <p>
            This is called a <strong>Galilean boost</strong>. Notice what it preserves: the distance
            between any two particles is unchanged. If particle 1 is at {`$x_1$`} and particle 2 is
            at {`$x_2$`}, then in {`$S'$`} the gap is {`$x_1' - x_2' = x_1 - x_2$`}. Distances are
            absolute. Positions are not.
          </p>

          <h3>What "Affine Space" Means</h3>
          <p>
            The train showed us something important. No point in space is physically special.
            Choosing a location as your "zero" is a human convention, not a physical fact. The same
            is true for time: there is no clock that reads the "true" start of the universe.
          </p>
          <p>
            Mathematicians call this structure an <strong>affine space</strong>. It is like ordinary
            space, but without a preferred origin. Only differences between points have physical
            meaning, never the raw coordinates themselves.
          </p>
          <p>
            Classical mechanics takes place in a 4-dimensional affine space: three dimensions of
            space plus one dimension of time. Time is a function that assigns a number to every
            event, and only differences in that number (durations) are physical.
          </p>

          <h3>The Ten Symmetries of Galilean Space-Time</h3>
          <p>
            What follows is the payoff: Newton's law is forced into its exact form by these
            symmetries. Galilean space-time has exactly 10 independent symmetries. A symmetry is a
            transformation that leaves all physical laws unchanged.
          </p>

          <div className="lrn-definition">
            <span className="lrn-definition-term">The Galilean Group (10 symmetries)</span>
            <div className="lrn-definition-desc">
              <ul className="lrn-list">
                <li>
                  <strong>3 rotations of space.</strong> Physics is the same facing north as facing
                  east. Three angles specify any rotation.
                </li>
                <li>
                  <strong>3 translations of space.</strong> Physics is the same in Paris as in
                  Tokyo. Three numbers specify any shift.
                </li>
                <li>
                  <strong>3 Galilean boosts.</strong> Physics is the same on the moving train as on
                  the platform. Three velocity components specify any boost.
                </li>
                <li>
                  <strong>1 time translation.</strong> Physics is the same at 9 am as at 9 pm. One
                  number specifies any time shift.
                </li>
              </ul>
              <p>That is 3 + 3 + 3 + 1 = 10.</p>
            </div>
          </div>

          <GalileanTable />

          <h3>How These Symmetries Constrain Newton's Equation</h3>
          <p>
            Write the most general possible second law:{' '}
            {`$\\ddot{x}_i = F_i(x_1, \\ldots, x_n,
            \\dot{x}_1, \\ldots, \\dot{x}_n, t)$`}
            . Now apply each symmetry in turn. Each one rules out something from {`$F$`}.
          </p>

          <div className="lrn-steps">
            <div className="lrn-step">
              <span className="lrn-step-title">Step 1: Time Translation</span>
              <p className="lrn-step-content">
                Physics is the same at 9 am and at 9 pm. So {`$F$`} cannot depend on the absolute
                time {`$t$`}. If it did, forces would differ between morning and evening, and you
                could detect the "time of day" from inside a closed box. Time translation rules out{' '}
                {`$t$`}: {`$\\ddot{x}_i = F_i(x_1, \\ldots, \\dot{x}_n)$`}.
              </p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">Step 2: Space Translation</span>
              <p className="lrn-step-content">
                Physics is the same in Paris and Tokyo. So {`$F$`} cannot depend on the absolute
                position of any particle. If it did, forces on a hydrogen atom would differ in Paris
                and Tokyo. Space translation rules out absolute positions: only differences{' '}
                {`$x_i - x_j$`} between particles can appear.
              </p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">Step 3: Galilean Boost</span>
              <p className="lrn-step-content">
                Physics is the same on the moving train. So {`$F$`} cannot depend on the absolute
                velocity of any particle. Only velocity differences {`$\\dot{x}_i - \\dot{x}_j$`}
                can appear. Combined with step 2, forces depend only on relative positions and
                relative velocities:
                {`$$\\ddot{x}_i = F_i(\\{x_j - x_k\\},\\, \\{\\dot{x}_j - \\dot{x}_k\\})$$`}
              </p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">Step 4: Rotation Invariance</span>
              <p className="lrn-step-content">
                Physics is the same facing north and facing east. So {`$F$`} must transform as a
                vector under rotations. If you rotate all positions and velocities by a rotation
                matrix {`$G$`}, the force must rotate the same way:{' '}
                {`$F(G\\{x_j - x_k\\},\\, G\\{\\dot{x}_j - \\dot{x}_k\\}) = G \\cdot F$`}. This
                rules out any force formula that picks a preferred direction in space.
              </p>
              <p className="lrn-step-content">
                Note what step 4 contributes. Steps 1, 2, and 3 leave {`$\\ddot{x} = F$`}, with{' '}
                {`$F$`} depending on nothing. So {`$F$`} is a constant vector. Without rotation
                invariance, that constant could point any direction in space, and a free particle
                would accelerate forever along it. Rotation invariance says no direction is special,
                so the only constant vector allowed is zero. Hence {`$\\ddot{x} = 0$`}, and the free
                particle moves in a straight line at constant speed.
              </p>
            </div>
          </div>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>Why does step 3 rule out absolute velocity but still allow relative velocity?</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                A Galilean boost adds {`$v$`} to every particle's velocity. If {`$F$`} depended on
                absolute velocity {`$\\dot{x}_i$`}, the force on particle {`$i$`} would change when
                you switched to the moving train, meaning you could detect the train's speed from
                inside. But the difference {`$\\dot{x}_i - \\dot{x}_j$`} is unchanged by the boost
                (both particles gain the same {`$v$`}, so the difference cancels). Relative velocity
                is physical. Absolute velocity is not.
              </p>
            </details>
          </div>

          <h3>Newton's First Law as a Corollary</h3>
          <p>
            A single isolated particle has no other particles. There are no relative positions or
            relative velocities to depend on. Steps 2 and 3 leave {`$F = 0$`}. Therefore:
          </p>
          <div className="lrn-eq">{`$$\\ddot{x} = 0$$`}</div>
          <p>
            A free particle has zero acceleration. It moves in a straight line at constant speed.
            This is Newton's First Law, derived rather than assumed.
          </p>

          <div className="lrn-definition">
            <span className="lrn-definition-term">Principle of Determinacy</span>
            <div className="lrn-definition-desc">
              <p>
                The positions and velocities of all particles at one instant uniquely determine all
                future motion. This is the reason Newton's equation is second-order in time: knowing
                {`$x$`} and {`$\\dot{x}$`} at {`$t = 0$`} is exactly enough information.
              </p>
            </div>
          </div>

          <h3>Examples</h3>
          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Falling Stone (Uniform Gravity)</span>
              <p>{`$$\\ddot{x} = -g,\\quad U = gx$$`}</p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Inverse-Square Gravity</span>
              <p>{`$$\\ddot{x} = -g\\frac{r_0^2}{r^2},\\quad U = -\\frac{k}{r}$$`}</p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Harmonic Oscillator</span>
              <p>{`$$\\ddot{x} = -\\alpha^2 x,\\quad U = \\tfrac{\\alpha^2 x^2}{2}$$`}</p>
            </div>
          </div>
        </>,

        <>
          <h2>Summary</h2>

          <h3>Vector Operations</h3>
          <table className="lrn-table">
            <thead>
              <tr>
                <th>Operation</th>
                <th>Formula</th>
                <th>Returns</th>
                <th>Geometric meaning</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Magnitude</td>
                <td>{`$|A| = \\sqrt{A_x^2 + A_y^2 + A_z^2}$`}</td>
                <td>scalar</td>
                <td>length of the arrow</td>
              </tr>
              <tr>
                <td>Dot product</td>
                <td>{`$A \\cdot B = |A||B|\\cos\\theta$`}</td>
                <td>scalar</td>
                <td>shadow of one on the other, times length</td>
              </tr>
              <tr>
                <td>Cross product</td>
                <td>{`$A \\times B = |A||B|\\sin\\theta\\,\\hat{n}$`}</td>
                <td>vector</td>
                <td>area of parallelogram, perpendicular to both</td>
              </tr>
            </tbody>
          </table>

          <h3>Kinematic Relations</h3>
          <div className="lrn-eq">{`$$v = \\frac{dr}{dt}, \\qquad a = \\frac{dv}{dt} = \\frac{d^2 r}{dt^2}$$`}</div>
          <p>Constant acceleration:</p>
          <div className="lrn-eq">{`$$r(t) = r_0 + v_0 t + \\tfrac{1}{2} a t^2$$`}</div>
          <p>Plane polar coordinates:</p>
          <div className="lrn-eq">{`$$a = (\\ddot{r} - r\\dot{\\theta}^2)\\hat{r} + (r\\ddot{\\theta} + 2\\dot{r}\\dot{\\theta})\\hat{\\theta}$$`}</div>

          <h3>The Ten Galilean Symmetries</h3>
          <table className="lrn-table">
            <thead>
              <tr>
                <th>Symmetry</th>
                <th>Count</th>
                <th>What it removes from $F$</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Time translation</td>
                <td>1</td>
                <td>{`absolute time $t$`}</td>
              </tr>
              <tr>
                <td>Space translation</td>
                <td>3</td>
                <td>{`absolute position $x_i$`}</td>
              </tr>
              <tr>
                <td>Rotation</td>
                <td>3</td>
                <td>preferred direction</td>
              </tr>
              <tr>
                <td>Galilean boost</td>
                <td>3</td>
                <td>{`absolute velocity $\\dot{x}_i$`}</td>
              </tr>
            </tbody>
          </table>
        </>
      ]
    },

    practice: [
      {
        q: `A vector has magnitude 5 and points along $+\\hat{i}$. Write its unit vector.`,
        a: `(1) The unit vector is $\\hat{A} = \\hat{i}$. (2) Apply $\\hat{A} = \\frac{A}{|A|}$. The vector is $A = 5\\hat{i}$ with $|A| = 5$. So $\\hat{A} = \\frac{5\\hat{i}}{5} = \\hat{i}$. (3) This works because dividing any vector by its own length always gives a vector of length one in the same direction.`
      },
      {
        q: `A particle moves from (1, 2, 3) to (4, 0, 5). Find the displacement vector.`,
        a: `(1) $S = (3, -2, 2)$. (2) Subtract component by component: $S = r_2 - r_1 = (4-1, 0-2, 5-3)$. (3) Displacement is the change in position. It points from start to finish and does not depend on the origin you chose.`
      },
      {
        q: `Compute $A \\cdot B$ for $A = (3, 5, -7)$ and $B = (2, 7, 1)$.`,
        a: `(1) $A \\cdot B = 34$. (2) Apply $A \\cdot B = A_x B_x + A_y B_y + A_z B_z$. So $A \\cdot B = 6 + 35 - 7$. (3) The component formula gives the same scalar as the geometric definition $|A||B|\\cos\\theta$, but you do not need the angle.`
      },
      {
        q: `Why is parallel translation not a change of vector?`,
        a: `(1) A vector stores only magnitude and direction. (2) Sliding it across the page changes its position but not its length and not the way it points. (3) Both stored pieces of information stay the same, so the vector is the same. Position is not part of a vector's identity.`
      },
      {
        q: `A force $F = 10$ N pushes a block 5 m at 60 degrees to the displacement. Find the work.`,
        a: `(1) $W = 25$ J. (2) Use $W = F \\cdot d = Fd\\cos\\theta = 10 \\cdot 5 \\cdot \\cos 60° = 50 \\cdot 0.5$. (3) Only the part of force along the motion does work. The dot product picks that part automatically.`
      },
      {
        q: `Predict the direction of $A \\times B$ if $A$ points east and $B$ points north (with up out of the page).`,
        a: `(1) $A \\times B$ points up, out of the page. (2) Apply the right-hand rule: fingers from east to north curl counterclockwise. Your thumb points out of the page. (3) The right-hand rule fixes the sign once you have decided which axes are positive.`
      },
      {
        q: `Predict what happens to the components of a vector when you rotate the axes by 90 degrees. Does the vector itself change?`,
        a: `(1) The components change: a vector $A = (1, 0, 0)$ becomes $(0, -1, 0)$ after a 90-degree rotation about $z$. (2) The vector itself is unchanged. The arrow still points the same way in space. (3) Components are labels tied to axes. Rotating the axes relabels the same arrow.`
      },
      {
        q: `Use the dot product to derive the law of cosines for a triangle with sides $A$, $B$, $C$ where $C = A + B$.`,
        a: `(1) Result: $C^2 = A^2 + B^2 + 2AB\\cos\\theta$. (2) Compute $C \\cdot C = (A+B) \\cdot (A+B) = A\\cdot A + 2 A\\cdot B + B\\cdot B$. Substitute $A\\cdot A = A^2$, $B\\cdot B = B^2$, $A\\cdot B = AB\\cos\\theta$. (3) The dot product distributes over addition, which lets you expand the square.`
      },
      {
        q: `A bead slides outward at $u = 2$ m/s along a spoke rotating at $\\omega = 3$ rad/s. Find its velocity at $t = 1$ s.`,
        a: `(1) $v = 2\\hat{r} + 6\\hat{\\theta}$ m/s. (2) Use $v = u\\hat{r} + ut\\omega\\hat{\\theta}$. So $v_r = 2$ and $v_\\theta = 2 \\cdot 1 \\cdot 3 = 6$. (3) The radial part comes from $\\dot{r} = u$. The tangential part is the bead's distance $r = ut$ times the spoke's angular speed.`
      },
      {
        q: `Find the magnitude of $A = (4, -3, 0)$.`,
        a: `(1) $|A| = 5$. (2) Use $|A| = \\sqrt{A_x^2 + A_y^2 + A_z^2} = \\sqrt{16 + 9 + 0}$. (3) The Pythagorean theorem extends to three dimensions because the axes are perpendicular.`
      },
      {
        q: `Explain in your own words why $A \\times A = 0$.`,
        a: `(1) The cross product magnitude is $|A||B|\\sin\\theta$. (2) The angle between $A$ and itself is zero, and $\\sin 0 = 0$. (3) So the result has zero magnitude, which means the zero vector. Two parallel arrows span no parallelogram: zero area, zero direction.`
      },
      {
        q: `Predict what happens to centripetal acceleration if you double the angular speed of uniform circular motion.`,
        a: `(1) Acceleration grows by a factor of four. (2) Use $|a| = \\omega^2 r$. So doubling $\\omega$ multiplies $|a|$ by $2^2 = 4$. (3) Centripetal acceleration depends on $\\omega^2$, not on $\\omega$. Faster rotation needs much more inward acceleration.`
      },
      {
        q: `Why does the velocity always point tangent to the trajectory?`,
        a: `(1) Velocity is $v = \\frac{dr}{dt}$. (2) For tiny $\\Delta t$, the displacement $\\Delta r$ lines up with the path itself. So $v$ points along the local direction of motion. (3) Curves locally look like straight lines. The tangent direction is what survives in the limit.`
      },
      {
        q: `Find $v$ from $r = A(e^{\\alpha t}\\hat{i} + e^{-\\alpha t}\\hat{j})$.`,
        a: `(1) $v = A\\alpha(e^{\\alpha t}\\hat{i} - e^{-\\alpha t}\\hat{j})$. (2) Differentiate each cartesian component. Cartesian unit vectors do not depend on time. (3) The factor $\\alpha$ comes from chain rule on the exponentials. The minus sign comes from differentiating $e^{-\\alpha t}$.`
      },
      {
        q: `A particle starts at $r_0 = 0$ with $v_0 = 5\\hat{i}$ m/s and constant acceleration $a = -10\\hat{j}$ m/s$^2$. Find $r(t)$.`,
        a: `(1) $r(t) = 5t\\hat{i} - 5t^2\\hat{j}$ m. (2) Use $r(t) = r_0 + v_0 t + \\tfrac{1}{2} a t^2$. So $r = 0 + 5t\\hat{i} + \\tfrac{1}{2}(-10)t^2\\hat{j}$. (3) The formula works because acceleration is constant. For variable $a$, you would integrate.`
      },
      {
        q: `Predict the value of $\\hat{i} \\times \\hat{j} + \\hat{j} \\times \\hat{k} + \\hat{k} \\times \\hat{i}$.`,
        a: `(1) The sum is $\\hat{k} + \\hat{i} + \\hat{j}$. (2) Apply the cyclic rules: $\\hat{i}\\times\\hat{j}=\\hat{k}$, $\\hat{j}\\times\\hat{k}=\\hat{i}$, $\\hat{k}\\times\\hat{i}=\\hat{j}$. (3) Each cyclic pairing produces the third base vector. Adding them all gives the diagonal vector $(1, 1, 1)$.`
      },
      {
        q: `For a vector with constant magnitude, why is $\\frac{dA}{dt}$ perpendicular to $A$?`,
        a: `(1) Compute $\\frac{d(A \\cdot A)}{dt} = 2 A \\cdot \\frac{dA}{dt}$. (2) Since $A \\cdot A = |A|^2$ is constant, the left side is zero. So $A \\cdot \\frac{dA}{dt} = 0$. (3) Two vectors with zero dot product are perpendicular. So $\\frac{dA}{dt} \\perp A$.`
      },
      {
        q: `Compute $\\sqrt{1.02}$ using the binomial series to second order.`,
        a: `(1) $\\sqrt{1.02} \\approx 1.00995$. (2) Use $\\sqrt{1+x} \\approx 1 + \\frac{x}{2} - \\frac{x^2}{8}$ with $x = 0.02$. So $1 + 0.01 - 0.00005 = 1.00995$. (3) The series converges fast for small $x$, so two terms give an accuracy near $5\\times 10^{-5}$.`
      },
      {
        q: `A torque is computed as $\\tau = r \\times F$. If you swap $r$ and $F$, what happens to the torque?`,
        a: `(1) The torque flips sign: $F \\times r = -r \\times F$. (2) The cross product is anticommutative. (3) Physically, the torque sign tells you which way the body rotates. Swapping the order is like calling clockwise "counterclockwise."`
      },
      {
        q: `Show that velocity is perpendicular to position in uniform circular motion.`,
        a: `(1) Result: $v \\cdot r = 0$, so $v \\perp r$. (2) With $r = r(\\cos\\omega t \\hat{i} + \\sin\\omega t \\hat{j})$ and $v = r\\omega(-\\sin\\omega t \\hat{i} + \\cos\\omega t \\hat{j})$, compute $v \\cdot r = r^2\\omega(-\\sin\\omega t \\cos\\omega t + \\cos\\omega t \\sin\\omega t) = 0$. (3) The two terms cancel exactly.`
      },
      {
        q: `Why does $a_r = 0$ in $r = r_0 e^{\\beta t}, \\theta = \\omega t$ when $\\beta = \\pm\\omega$?`,
        a: `(1) Compute $a_r = \\ddot{r} - r\\dot{\\theta}^2 = \\beta^2 r - \\omega^2 r = (\\beta^2 - \\omega^2) r$. (2) Setting $\\beta = \\pm\\omega$ kills the radial acceleration. (3) The exponential growth in $r$ exactly balances the centripetal pull. Radial speed grows but with no radial acceleration.`
      },
      {
        q: `A $-2\\hat{j}$ N force pushes a particle through displacement $3\\hat{i} + 4\\hat{j}$ m. Find the work.`,
        a: `(1) $W = -8$ J. (2) Use $W = F \\cdot d = (0)(3) + (-2)(4) = -8$. (3) Negative work means the force opposes the motion. Energy flows out of the particle.`
      },
      {
        q: `Predict what happens to the Coriolis acceleration if the particle stops moving radially while the spoke keeps rotating.`,
        a: `(1) Coriolis becomes zero. (2) The Coriolis term is $2\\dot{r}\\dot{\\theta}\\hat{\\theta}$. With $\\dot{r} = 0$, the whole term vanishes. (3) Coriolis only shows up when both $r$ and $\\theta$ change. Without radial motion, there is no Coriolis effect.`
      },
      {
        q: `Why does dimensional analysis catch errors in physics?`,
        a: `(1) Both sides of a physical equation must have the same dimension. (2) If you derive $v = gt^2$ but $v$ has units of meters per second and $gt^2$ has units of meters, the dimensions disagree. (3) Real physical relations preserve dimension because adding seconds to meters has no meaning. A mismatch flags an algebra error.`
      },
      {
        q: `A projectile is launched at 30 degrees with speed 20 m/s. Find $v_{0x}$ and $v_{0z}$.`,
        a: `(1) $v_{0x} = 17.32$ m/s and $v_{0z} = 10$ m/s. (2) Use $v_{0x} = v_0 \\cos 30° = 20 \\cdot 0.866$ and $v_{0z} = v_0 \\sin 30° = 20 \\cdot 0.5$. (3) The launch angle splits the velocity into the two independent components.`
      },
      {
        q: `A vehicle drives in a circle of radius 50 m at constant speed 10 m/s. Find the centripetal acceleration.`,
        a: `(1) $|a| = 2$ m/s$^2$. (2) Use $|a| = \\frac{v^2}{r} = \\frac{100}{50}$. Or use $\\omega = \\frac{v}{r} = 0.2$ rad/s and $|a| = \\omega^2 r = 0.04 \\cdot 50$. (3) Centripetal acceleration always points toward the center of the circle.`
      },
      {
        q: `Find $A \\times B$ for $A = (1, 0, 0)$ and $B = (0, 1, 0)$.`,
        a: `(1) $A \\times B = (0, 0, 1) = \\hat{k}$. (2) Apply the determinant: $\\hat{i}(0 \\cdot 0 - 0 \\cdot 1) - \\hat{j}(1 \\cdot 0 - 0 \\cdot 0) + \\hat{k}(1 \\cdot 1 - 0 \\cdot 0) = \\hat{k}$. (3) This matches the rule $\\hat{i} \\times \\hat{j} = \\hat{k}$ in a right-handed coordinate system.`
      },
      {
        q: `Newton's equation starts as $\\ddot{x} = F(x, \\dot{x}, t)$. Apply time-translation invariance. What form must $F$ take?`,
        a: `$F$ cannot depend on $t$. If the laws of physics are the same at all times, shifting $t \\to t + s$ must leave $F$ unchanged. The equation becomes $\\ddot{x} = \\Phi(x, \\dot{x})$. If $F(x, \\dot{x}, t)$ changed with $t$, an isolated experiment could detect 'what time it is', violating the principle.`
      },
      {
        q: `State Newton's principle of determinacy. What physical claim does it make?`,
        a: `Knowing the positions and velocities of all particles at one instant uniquely determines all future motion. No randomness, no ambiguity. Formally: the right-hand side $F(x, \\dot{x})$, combined with initial data $(x_0, \\dot{x}_0)$, produces a unique trajectory. This requires $F$ to be sufficiently smooth.`
      },
      {
        q: `The galilean group has 10 dimensions. List the 4 types of galilean transformations and state how many parameters each uses.`,
        a: `Rotations of space: 3 parameters. Translations of space: 3 parameters. Uniform velocity boosts: 3 parameters. Time translation: 1 parameter. Total: 3 + 3 + 3 + 1 = 10 dimensions.`
      },
      {
        q: `Explain why Newton's first law (a free particle has zero acceleration) follows from galilean invariance, rather than being an independent postulate.`,
        a: `A single particle in an isolated system has no other particles to form relative positions or velocities with. The force function $\\ddot{x}_i = f_i(\\{x_j - x_k, \\dot{x}_j - \\dot{x}_k\\})$ has no arguments when $n = 1$. So $f_i = 0$ and $\\ddot{x} = 0$. Newton's first law is derived from spatial homogeneity and isotropy of galilean space.`
      },
      {
        q: `State and prove the product rule $\\frac{d}{dt}[a, b] = [\\dot{a}, b] + [a, \\dot{b}]$. Why is this needed for proving angular momentum conservation?`,
        a: `The cross product $[a, b]$ is bilinear. By the product rule: $\\frac{d}{dt}[a, b] = \\left[\\frac{da}{dt}, b\\right] + \\left[a, \\frac{db}{dt}\\right] = [\\dot{a}, b] + [a, \\dot{b}]$. This is needed because $M = [r, \\dot{r}]$, and computing $\\dot{M}$ requires differentiating a cross product. The lemma gives $\\dot{M} = [\\dot{r}, \\dot{r}] + [r, \\ddot{r}]$, after which each term vanishes for a central field.`
      }
    ],

    reference: {
      category: 'Quick Reference',
      title: 'Vectors, Kinematics, and Galilean Structure',
      sections: [
        <>
          <h2>Newton's Second Law</h2>
          <div className="lrn-definition">
            <span className="lrn-definition-term">Component form</span>
            <div className="lrn-definition-desc">
              <p>{`$F_x = ma_x,\\ F_y = ma_y,\\ F_z = ma_z$. Use when forces and accelerations are split along axes.`}</p>
            </div>
          </div>
          <div className="lrn-definition">
            <span className="lrn-definition-term">Vector form</span>
            <div className="lrn-definition-desc">
              <p>{`$F = ma$. Compact statement valid in any coordinate system.`}</p>
            </div>
          </div>

          <h2>Vectors and Unit Vectors</h2>
          <div className="lrn-eq">{`$$\\hat{A} = \\frac{A}{|A|},\\qquad A = |A|\\hat{A}$$`}</div>
          <div className="lrn-eq">{`$$C = bA,\\quad |C| = b|A|$$`}</div>
          <div className="lrn-definition">
            <span className="lrn-definition-term">Parallel translation</span>
            <div className="lrn-definition-desc">
              <p>
                Two vectors are equal when they have the same magnitude and the same direction.
                Sliding without rotating leaves a vector unchanged.
              </p>
            </div>
          </div>
        </>,

        <>
          <h2>Dot Product</h2>
          <div className="lrn-eq">{`$$A \\cdot B = |A||B|\\cos\\theta$$`}</div>
          <div className="lrn-eq">{`$$A \\cdot A = |A|^2$$`}</div>
          <div className="lrn-eq">{`$$A \\cdot B = A_x B_x + A_y B_y + A_z B_z$$`}</div>
          <div className="lrn-eq">{`$$W = F \\cdot d = Fd\\cos\\theta$$`}</div>
          <div className="lrn-eq">{`$$C^2 = A^2 + B^2 + 2AB\\cos\\theta\\qquad (\\text{law of cosines})$$`}</div>

          <h2>Cross Product</h2>
          <div className="lrn-eq">{`$$|A \\times B| = |A||B|\\sin\\theta$$`}</div>
          <div className="lrn-eq">{`$$B \\times A = -A \\times B,\\quad A \\times A = 0$$`}</div>
          <div className="lrn-eq">{`$$F = qv \\times B,\\quad \\tau = r \\times F$$`}</div>
          <div className="lrn-eq">{`$$A \\times B = \\hat{i}(A_y B_z - A_z B_y) - \\hat{j}(A_x B_z - A_z B_x) + \\hat{k}(A_x B_y - A_y B_x)$$`}</div>
        </>,

        <>
          <h2>Components and Base Vectors</h2>
          <div className="lrn-eq">{`$$A = (A_x, A_y, A_z),\\quad |A| = \\sqrt{A_x^2 + A_y^2 + A_z^2}$$`}</div>
          <div className="lrn-eq">{`$$A = A_x\\hat{i} + A_y\\hat{j} + A_z\\hat{k},\\quad A_z = A \\cdot \\hat{k}$$`}</div>
          <div className="lrn-eq">{`$$\\hat{i} \\times \\hat{j} = \\hat{k},\\ \\hat{j}\\times\\hat{k} = \\hat{i},\\ \\hat{k}\\times\\hat{i} = \\hat{j}$$`}</div>
        </>,

        <>
          <h2>Position, Velocity, Acceleration</h2>
          <div className="lrn-eq">{`$$r = x\\hat{i} + y\\hat{j} + z\\hat{k}$$`}</div>
          <div className="lrn-eq">{`$$v = \\frac{dr}{dt},\\quad a = \\frac{dv}{dt} = \\frac{d^2 r}{dt^2}$$`}</div>
          <div className="lrn-eq">{`$$v(t) = v_0 + at,\\quad r(t) = r_0 + v_0 t + \\tfrac{1}{2} a t^2\\qquad (\\text{constant }a)$$`}</div>

          <h2>Uniform Circular Motion</h2>
          <div className="lrn-eq">{`$$r = r(\\cos\\omega t\\,\\hat{i} + \\sin\\omega t\\,\\hat{j})$$`}</div>
          <div className="lrn-eq">{`$$|v| = r\\omega,\\quad a = -\\omega^2 r,\\quad |a| = \\omega^2 r$$`}</div>

          <h2>Projectile Motion</h2>
          <div className="lrn-eq">{`$$z = \\frac{v_{0z}}{v_{0x}} x - \\frac{g}{2 v_{0x}^2} x^2$$`}</div>
        </>,

        <>
          <h2>Polar Coordinates</h2>
          <div className="lrn-eq">{`$$\\hat{r} = \\hat{i}\\cos\\theta + \\hat{j}\\sin\\theta,\\quad \\hat{\\theta} = -\\hat{i}\\sin\\theta + \\hat{j}\\cos\\theta$$`}</div>
          <div className="lrn-eq">{`$$\\frac{d\\hat{r}}{dt} = \\dot{\\theta}\\hat{\\theta},\\quad \\frac{d\\hat{\\theta}}{dt} = -\\dot{\\theta}\\hat{r}$$`}</div>
          <div className="lrn-eq">{`$$v = \\dot{r}\\hat{r} + r\\dot{\\theta}\\hat{\\theta}$$`}</div>
          <div className="lrn-eq">{`$$a = (\\ddot{r} - r\\dot{\\theta}^2)\\hat{r} + (r\\ddot{\\theta} + 2\\dot{r}\\dot{\\theta})\\hat{\\theta}$$`}</div>
        </>,

        <>
          <h2>Approximation Methods</h2>
          <div className="lrn-eq">{`$$(1+x)^n = 1 + nx + \\tfrac{n(n-1)}{2!}x^2 + \\cdots\\qquad (|x| < 1)$$`}</div>
          <div className="lrn-eq">{`$$f(a+x) = f(a) + f'(a)x + \\tfrac{f''(a)}{2!}x^2 + \\cdots$$`}</div>
          <div className="lrn-eq">{`$$\\sin x = x - \\frac{x^3}{3!} + \\frac{x^5}{5!} - \\cdots$$`}</div>
          <div className="lrn-eq">{`$$\\cos x = 1 - \\frac{x^2}{2!} + \\frac{x^4}{4!} - \\cdots$$`}</div>
          <div className="lrn-eq">{`$$e^x = 1 + x + \\frac{x^2}{2!} + \\frac{x^3}{3!} + \\cdots$$`}</div>
        </>,

        <>
          <h2>Newton's Equations</h2>
          <div className="lrn-definition">
            <span className="lrn-definition-term">Newton's General Equation</span>
            <div className="lrn-definition-desc">
              <p>{`$$\\ddot{x} = F(x, \\dot{x}, t)$$`}</p>
            </div>
          </div>
          <div className="lrn-definition">
            <span className="lrn-definition-term">Galilean-Invariant Closed System</span>
            <div className="lrn-definition-desc">
              <p>{`$$\\ddot{x} = \\Phi(x, \\dot{x})$$`}</p>
            </div>
          </div>
          <div className="lrn-definition">
            <span className="lrn-definition-term">Conservative n-Body System</span>
            <div className="lrn-definition-desc">
              <p>{`$$m_i \\ddot{x}_i = -\\frac{\\partial U}{\\partial x_i},\\quad i=1,\\ldots,n$$`}</p>
            </div>
          </div>

          <h2>Galilean Group Summary</h2>
          <div className="lrn-definition">
            <span className="lrn-definition-term">10 Galilean Transformations</span>
            <div className="lrn-definition-desc">
              <ul className="lrn-list">
                <li>Time translation (1): {`$t \\to t + \\Delta t$`}</li>
                <li>Space translation (3): {`$x \\to x + \\Delta x$`}</li>
                <li>Rotation (3): {`$x \\to Gx$`}</li>
                <li>Uniform boost (3): {`$x \\to x + vt$`}</li>
              </ul>
            </div>
          </div>
        </>
      ]
    },

    customCss: `.MafsView { --mafs-bg: transparent; --mafs-fg: rgba(240,240,250,1); --mafs-line-color: rgba(240,240,250,0.15); }`
  }

  return config
}

export default function VectorsKinematicsAndGalileanStructure() {
  const config = useConfig()
  return <LearningTemplate config={config} />
}
