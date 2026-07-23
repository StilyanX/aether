import { LearningTemplate } from '../../../../components/learning/learning-template'
import {
  UnitCircleAngleViz,
  ArgumentQuadrantViz,
  PolarTriangleViz,
  ComplexMultiplyViz,
  PowersOfIViz,
  PowerSpiralViz,
  NthRootsPolygonViz,
  RootsOfUnityViz
} from '../../../../components/viz'

function useConfig() {
  const config = {
    cssPrefix: 'pdm',
    documentTitle: "Polar Form and De Moivre's Theorem - AETHER",
    learning: {
      groupTitle: 'Complex Numbers',
      category: 'Algebra',
      title: "Polar Form and De Moivre's Theorem",
      subtitle:
        'Use the distance and angle of a complex number to multiply, divide, raise to powers, and find every root fast.',
      sections: [
        <>
          <h2>Angles, the Unit Circle, and the Trigonometry You Will Need</h2>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>{`An angle of $\\frac{2\\pi}{3}$ radians turns you past a quarter circle. Predict which quadrant its point lands in, before reading on.`}</p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>{`A full turn is $2\\pi$, so $\\frac{2\\pi}{3}$ is one third of a turn, or $120$ degrees. That falls between $90$ and $180$ degrees, so the point sits in the upper left, quadrant II.`}</p>
            </details>
          </div>

          <p>{`Polar form describes a complex number by a distance and an angle. To use it you need a little trigonometry. This section builds that toolkit from scratch. You have not met it earlier in Algebra, so nothing here is assumed.`}</p>

          <h3>Measuring Angles in Radians</h3>
          <p>{`You can measure an angle in two ways. Degrees split one full turn into $360$ equal parts. Radians measure the same angle by distance traveled around a circle of radius $1$.`}</p>
          <p>{`A circle of radius $1$ has a distance around it of $2\\pi$. So one full turn is $2\\pi$ radians. Half a turn is $\\pi$ radians, the same as $180$ degrees.`}</p>
          <p>{`This gives a simple bridge: $180^{\\circ} = \\pi$ radians. To turn degrees into radians, multiply by $\\frac{\\pi}{180}$. To turn radians into degrees, multiply by $\\frac{180}{\\pi}$.`}</p>

          <table className="lrn-table">
            <thead>
              <tr>
                <th>{`Degrees`}</th>
                <th>{`Radians`}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{`$0^{\\circ}$`}</td>
                <td>{`$0$`}</td>
              </tr>
              <tr>
                <td>{`$30^{\\circ}$`}</td>
                <td>{`$\\frac{\\pi}{6}$`}</td>
              </tr>
              <tr>
                <td>{`$45^{\\circ}$`}</td>
                <td>{`$\\frac{\\pi}{4}$`}</td>
              </tr>
              <tr>
                <td>{`$60^{\\circ}$`}</td>
                <td>{`$\\frac{\\pi}{3}$`}</td>
              </tr>
              <tr>
                <td>{`$90^{\\circ}$`}</td>
                <td>{`$\\frac{\\pi}{2}$`}</td>
              </tr>
              <tr>
                <td>{`$180^{\\circ}$`}</td>
                <td>{`$\\pi$`}</td>
              </tr>
              <tr>
                <td>{`$360^{\\circ}$`}</td>
                <td>{`$2\\pi$`}</td>
              </tr>
            </tbody>
          </table>

          <h3>The Unit Circle</h3>
          <p>{`The unit circle is the circle of radius $1$ centered at the origin. Start at the point $(1, 0)$ on the positive real axis. Turn through an angle $\\theta$, going counterclockwise when $\\theta$ is positive. You land on exactly one point of the circle.`}</p>
          <p>{`So an angle picks out a point. A bigger angle turns you further around the same circle. This one idea connects angles to coordinates.`}</p>

          <h3>Cosine and Sine as Coordinates</h3>
          <p>{`Give that landing point a name. Its horizontal coordinate is $\\cos\\theta$. Its vertical coordinate is $\\sin\\theta$. So the angle $\\theta$ points to $(\\cos\\theta, \\sin\\theta)$ on the unit circle.`}</p>

          <div className="lrn-graph">
            <UnitCircleAngleViz />
          </div>
          <p>{`Check two easy cases. At $\\theta = 0$ you are still at $(1, 0)$, so $\\cos 0 = 1$ and $\\sin 0 = 0$. At $\\theta = \\frac{\\pi}{2}$, a quarter turn, you reach the top at $(0, 1)$, so $\\cos\\frac{\\pi}{2} = 0$ and $\\sin\\frac{\\pi}{2} = 1$.`}</p>
          <p>{`Every point on the unit circle sits distance $1$ from the origin. The distance formula then forces $\\cos^2\\theta + \\sin^2\\theta = 1$ for every angle $\\theta$.`}</p>

          <h3>The Special Angles</h3>
          <p>{`A handful of angles show up again and again. Their cosine and sine values are worth memorizing outright.`}</p>
          <table className="lrn-table">
            <thead>
              <tr>
                <th>{`$\\theta$`}</th>
                <th>{`Degrees`}</th>
                <th>{`$\\cos\\theta$`}</th>
                <th>{`$\\sin\\theta$`}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{`$0$`}</td>
                <td>{`$0^{\\circ}$`}</td>
                <td>{`$1$`}</td>
                <td>{`$0$`}</td>
              </tr>
              <tr>
                <td>{`$\\frac{\\pi}{6}$`}</td>
                <td>{`$30^{\\circ}$`}</td>
                <td>{`$\\frac{\\sqrt{3}}{2}$`}</td>
                <td>{`$\\frac{1}{2}$`}</td>
              </tr>
              <tr>
                <td>{`$\\frac{\\pi}{4}$`}</td>
                <td>{`$45^{\\circ}$`}</td>
                <td>{`$\\frac{\\sqrt{2}}{2}$`}</td>
                <td>{`$\\frac{\\sqrt{2}}{2}$`}</td>
              </tr>
              <tr>
                <td>{`$\\frac{\\pi}{3}$`}</td>
                <td>{`$60^{\\circ}$`}</td>
                <td>{`$\\frac{1}{2}$`}</td>
                <td>{`$\\frac{\\sqrt{3}}{2}$`}</td>
              </tr>
              <tr>
                <td>{`$\\frac{\\pi}{2}$`}</td>
                <td>{`$90^{\\circ}$`}</td>
                <td>{`$0$`}</td>
                <td>{`$1$`}</td>
              </tr>
            </tbody>
          </table>

          <h3>Periodicity</h3>
          <p>{`Turn a full $2\\pi$ and you return to the same point. So cosine and sine repeat every $2\\pi$: $\\cos(\\theta + 2\\pi) = \\cos\\theta$ and $\\sin(\\theta + 2\\pi) = \\sin\\theta$. Adding any whole number of full turns changes nothing.`}</p>

          <h3>Arctan and Its Restricted Range</h3>
          <p>{`The tangent of an angle is the ratio of its two coordinates: $\\tan\\theta = \\frac{\\sin\\theta}{\\cos\\theta} = \\frac{y}{x}$.`}</p>
          <p>{`Often you know the ratio $\\frac{y}{x}$ and want the angle back. The arctangent, written $\\arctan$, reverses the tangent for that job.`}</p>
          <p>{`But $\\arctan$ only ever returns angles between $-\\frac{\\pi}{2}$ and $\\frac{\\pi}{2}$. That range covers quadrant I, up and to the right, and quadrant IV, down and to the right. It can never reach quadrants II or III by itself.`}</p>
          <p>{`This is why $\\arctan$ alone cannot find the argument. When $x$ is negative, the point lies in quadrant II or III, so you add $\\pi$ to swing the angle a half turn into the correct place.`}</p>

          <h3>Reference Angles</h3>
          <div className="lrn-definition">
            <span className="lrn-definition-term">{`Reference angle`}</span>
            <div className="lrn-definition-desc">
              <p>{`The reference angle is the acute angle between the ray to your point and the real axis. It always lies between $0$ and $\\frac{\\pi}{2}$.`}</p>
            </div>
          </div>
          <p>{`The reference angle tells you how far you are from the horizontal axis. It does not tell you which quadrant you are in. Each quadrant builds the true angle $\\theta$ from the reference angle $\\alpha$ in its own way.`}</p>
          <div className="lrn-steps">
            <div className="lrn-step">
              <span className="lrn-step-title">{`Quadrant I`}</span>
              <p className="lrn-step-content">{`$\\theta = \\alpha$.`}</p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">{`Quadrant II`}</span>
              <p className="lrn-step-content">{`$\\theta = \\pi - \\alpha$.`}</p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">{`Quadrant III`}</span>
              <p className="lrn-step-content">{`$\\theta = \\pi + \\alpha$.`}</p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">{`Quadrant IV`}</span>
              <p className="lrn-step-content">{`$\\theta = 2\\pi - \\alpha$.`}</p>
            </div>
          </div>
          <p>{`This is the same method as the piecewise $\\pi + \\arctan\\left(\\frac{y}{x}\\right)$ rules you will meet next. The value $\\arctan\\left(\\frac{y}{x}\\right)$ already equals the reference angle, up to sign. The added multiple of $\\pi$ just lands you in the right quadrant.`}</p>

          <h3>Worked Example: Cosine and Sine of a Special Angle</h3>
          <p>{`Find $\\cos\\frac{2\\pi}{3}$ and $\\sin\\frac{2\\pi}{3}$ using a reference angle.`}</p>
          <div className="lrn-steps">
            <div className="lrn-step">
              <span className="lrn-step-title">{`Find the quadrant`}</span>
              <p className="lrn-step-content">{`$\\frac{2\\pi}{3}$ is $120$ degrees, between $90$ and $180$ degrees, so the point sits in quadrant II.`}</p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">{`Find the reference angle`}</span>
              <p className="lrn-step-content">{`In quadrant II, $\\theta = \\pi - \\alpha$, so $\\alpha = \\pi - \\frac{2\\pi}{3} = \\frac{\\pi}{3}$.`}</p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">{`Apply the quadrant signs`}</span>
              <p className="lrn-step-content">{`Quadrant II points sit left of the vertical axis and above the horizontal axis. So cosine is negative and sine is positive: $\\cos\\frac{2\\pi}{3} = -\\cos\\frac{\\pi}{3} = -\\frac{1}{2}$ and $\\sin\\frac{2\\pi}{3} = \\sin\\frac{\\pi}{3} = \\frac{\\sqrt{3}}{2}$.`}</p>
            </div>
          </div>
          <p>{`So $\\frac{2\\pi}{3}$ points to $\\left(-\\frac{1}{2}, \\frac{\\sqrt{3}}{2}\\right)$ on the unit circle, matching the quadrant II prediction.`}</p>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>{`Why does $\\cos\\frac{2\\pi}{3}$ come out negative while $\\sin\\frac{2\\pi}{3}$ stays positive?`}</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>{`Cosine is the horizontal coordinate and sine is the vertical coordinate. A quadrant II point sits to the left of the origin, so its horizontal coordinate is negative. It sits above the origin, so its vertical coordinate is positive. That fixes the two signs.`}</p>
            </details>
          </div>
        </>,

        <>
          <h2>Polar Coordinates and the Argument of a Complex Number</h2>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>{`Take $z = -3 + 3i$. Before reading on, guess which quadrant its direction angle should fall in, using only the signs of the real and imaginary parts.`}</p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>{`The real part is negative and the imaginary part is positive, so $z$ sits in the upper left of the plane. Its angle must be between $\\frac{\\pi}{2}$ and $\\pi$. You will confirm the exact value below.`}</p>
            </details>
          </div>

          <p>{`You already know how to plot a complex number $a + bi$ as the point $(a, b)$. You also know its modulus $|z| = \\sqrt{a^2 + b^2}$. This section gives that same point a second address: not "how far right, how far up" but "how far from the center, and in what direction."`}</p>
          <p>{`A Cartesian description gives the ordinary how-far-right, how-far-up coordinates. Use polar form whenever that description gets clumsy. That happens most before you multiply, divide, or raise a complex number to a power. Those operations turn out to be simple once you describe points by distance and angle instead of by coordinates.`}</p>

          <div className="lrn-definition">
            <span className="lrn-definition-term">{`Modulus and argument`}</span>
            <div className="lrn-definition-desc">
              <p>{`Every point in the plane, other than the origin, has a distance from the origin. This distance is its modulus $r$, also called its polar radius. The point also has a direction from the positive real axis, called its argument, written $\\theta$. Together, $(r, \\theta)$ are its polar coordinates.`}</p>
            </div>
          </div>

          <p>{`For a point $(x, y)$ with $x \\neq 0$, the modulus is $r = \\sqrt{x^2 + y^2}$ and the angle satisfies $\\tan\\theta = \\frac{y}{x}$. But $\\tan\\theta$ alone cannot tell you the quadrant. For example, $\\arctan\\left(\\frac{1}{1}\\right)$ and $\\arctan\\left(\\frac{-1}{-1}\\right)$ both give $\\frac{\\pi}{4}$, yet $(1,1)$ and $(-1,-1)$ point in opposite directions.`}</p>

          <div className="lrn-warning lrn-callout">
            <span className="lrn-callout-label">Warning</span>
            <p>{`Always check the signs of $x$ and $y$ before trusting $\\arctan$. The reference angle from $\\arctan\\left|\\frac{y}{x}\\right|$ only tells you how far from an axis you are, not which quadrant you are in.`}</p>
          </div>

          <div className="lrn-steps">
            <div className="lrn-step">
              <span className="lrn-step-title">{`If $x > 0, y \\geq 0$ (quadrant I)`}</span>
              <p className="lrn-step-content">{`$\\theta = \\arctan\\left(\\frac{y}{x}\\right)$, directly, between $0$ and $\\frac{\\pi}{2}$.`}</p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">{`If $x < 0$ (quadrants II and III)`}</span>
              <p className="lrn-step-content">{`$\\theta = \\pi + \\arctan\\left(\\frac{y}{x}\\right)$, which lands between $\\frac{\\pi}{2}$ and $\\frac{3\\pi}{2}$.`}</p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">{`If $x > 0, y < 0$ (quadrant IV)`}</span>
              <p className="lrn-step-content">{`$\\theta = 2\\pi + \\arctan\\left(\\frac{y}{x}\\right)$, which lands between $\\frac{3\\pi}{2}$ and $2\\pi$.`}</p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">{`If $x = 0$`}</span>
              <p className="lrn-step-content">{`$\\theta = \\frac{\\pi}{2}$ when $y > 0$, and $\\theta = \\frac{3\\pi}{2}$ when $y < 0$. The formula above cannot be used because dividing by $x$ is impossible.`}</p>
            </div>
          </div>

          <p>{`These rules pin $\\theta$ down to exactly one value in the interval $[0, 2\\pi)$. We call that single value the principal argument. But sine and cosine repeat every $2\\pi$. So adding any whole number of full turns to $\\theta$ describes the exact same direction. The full collection of valid angles for a point is its extended argument.`}</p>

          <div className="lrn-eq">
            <span>{`$$\\text{Extended argument} = \\{\\theta + 2k\\pi : k \\in \\mathbb{Z}\\}$$`}</span>
          </div>

          <p>{`Here $\\mathbb{Z}$ means the integers: all whole numbers, negative, zero, and positive. So the extended argument gathers $\\theta$ plus every whole number of full turns.`}</p>

          <h3>Worked Example: Finding the Argument of a Point</h3>
          <p>{`Confirm the prediction for $z = -3 + 3i$ by finding its exact modulus and argument.`}</p>
          <div className="lrn-steps">
            <div className="lrn-step">
              <span className="lrn-step-title">{`Find the modulus`}</span>
              <p className="lrn-step-content">{`$r = \\sqrt{(-3)^2 + 3^2} = \\sqrt{18} = 3\\sqrt{2}$.`}</p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">{`Pick the quadrant rule`}</span>
              <p className="lrn-step-content">{`Here $x = -3 < 0$, so the rule for quadrants II and III applies: $\\theta = \\pi + \\arctan\\left(\\frac{y}{x}\\right)$.`}</p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">{`Compute the angle`}</span>
              <p className="lrn-step-content">{`$\\arctan\\left(\\frac{3}{-3}\\right) = \\arctan(-1) = -\\frac{\\pi}{4}$, so $\\theta = \\pi - \\frac{\\pi}{4} = \\frac{3\\pi}{4}$, landing in quadrant II as predicted.`}</p>
            </div>
          </div>
          <p>{`So the polar coordinates of $z = -3 + 3i$ are $\\left(3\\sqrt{2}, \\frac{3\\pi}{4}\\right)$.`}</p>

          <div className="lrn-graph">
            <ArgumentQuadrantViz />
          </div>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>{`The raw $\\arctan(-1)$ returned $-\\frac{\\pi}{4}$, an angle pointing into quadrant IV, yet the point sits in quadrant II. Why does adding $\\pi$ fix this?`}</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>{`The arctangent function only returns angles between $-\\frac{\\pi}{2}$ and $\\frac{\\pi}{2}$, so it can never point into quadrant II on its own. Adding $\\pi$ rotates that result exactly half a turn. That moves it from the quadrant IV direction to the quadrant II direction where the point truly lies.`}</p>
            </details>
          </div>
        </>,

        <>
          <h2>Writing a Complex Number in Polar Form</h2>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>{`$z = -3i$ sits directly on an axis. Predict whether the quadrant rules from the last section will even apply to it, and what its angle should be.`}</p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>{`No, the quadrant rules need $x \\neq 0$, and here $x = 0$. Since $y = -3 < 0$, the axis case applies directly: $\\theta = \\frac{3\\pi}{2}$.`}</p>
            </details>
          </div>

          <p>{`Once you know $r$ and $\\theta$ for a complex number $z = a + bi$, you can rewrite $z$ entirely in terms of them.`}</p>

          <p>{`Here is why cosine and sine appear. The point $(x, y)$ sits at distance $r$ and angle $\\theta$, so $\\cos\\theta = \\frac{x}{r}$ and $\\sin\\theta = \\frac{y}{r}$. Multiplying through gives $x = r\\cos\\theta$ and $y = r\\sin\\theta$.`}</p>

          <div className="lrn-graph">
            <PolarTriangleViz />
          </div>
          <p>{`Now substitute into $z = x + iy$: $z = r\\cos\\theta + i\\,r\\sin\\theta = r(\\cos\\theta + i\\sin\\theta)$.`}</p>

          <div className="lrn-eq lrn-eq-display">
            <span>{`$$z = r(\\cos\\theta + i\\sin\\theta)$$`}</span>
          </div>

          <p>{`Use this form whenever you need to multiply, divide, raise to a power, or find roots of a complex number. Every step in those operations becomes a rule about $r$ and $\\theta$ instead of messy algebra with $a$ and $b$.`}</p>

          <p>{`Two complex numbers in polar form are equal exactly when they match in two ways. They have the same modulus. Their arguments differ only by a whole number of full turns.`}</p>

          <div className="lrn-definition">
            <span className="lrn-definition-term">{`Equality in polar form`}</span>
            <div className="lrn-definition-desc">
              <p>{`$r_1(\\cos\\theta_1 + i\\sin\\theta_1) = r_2(\\cos\\theta_2 + i\\sin\\theta_2)$ if and only if $r_1 = r_2$ and $\\theta_1 - \\theta_2 = 2k\\pi$ for some integer $k$.`}</p>
            </div>
          </div>

          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>{`Equal complex numbers are literally the same point. Same point means same distance from the origin, which forces $r_1 = r_2$. It also means the same direction. But angles repeat every $2\\pi$, so "same direction" allows the arguments to differ by whole turns rather than matching exactly.`}</p>
          </div>

          <p>{`Four polar forms come up so often that they are worth memorizing outright, since they sit exactly on an axis.`}</p>

          <table className="lrn-table">
            <thead>
              <tr>
                <th>{`Number`}</th>
                <th>{`Modulus $r$`}</th>
                <th>{`Argument $\\theta$`}</th>
                <th>{`Polar form`}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{`$1$`}</td>
                <td>{`$1$`}</td>
                <td>{`$0$`}</td>
                <td>{`$\\cos 0 + i\\sin 0$`}</td>
              </tr>
              <tr>
                <td>{`$i$`}</td>
                <td>{`$1$`}</td>
                <td>{`$\\frac{\\pi}{2}$`}</td>
                <td>{`$\\cos\\frac{\\pi}{2} + i\\sin\\frac{\\pi}{2}$`}</td>
              </tr>
              <tr>
                <td>{`$-1$`}</td>
                <td>{`$1$`}</td>
                <td>{`$\\pi$`}</td>
                <td>{`$\\cos\\pi + i\\sin\\pi$`}</td>
              </tr>
              <tr>
                <td>{`$-i$`}</td>
                <td>{`$1$`}</td>
                <td>{`$\\frac{3\\pi}{2}$`}</td>
                <td>{`$\\cos\\frac{3\\pi}{2} + i\\sin\\frac{3\\pi}{2}$`}</td>
              </tr>
            </tbody>
          </table>

          <h3>Worked Example: Four Points Off the Axes</h3>
          <p>{`Write $z_1 = -1-i$, $z_2 = 2+2i$, $z_3 = -1+i\\sqrt{3}$, and $z_4 = 1-i\\sqrt{3}$ in polar form.`}</p>

          <div className="lrn-steps">
            <div className="lrn-step">
              <span className="lrn-step-title">{`$z_1 = -1 - i$`}</span>
              <p className="lrn-step-content">{`$r = \\sqrt{(-1)^2+(-1)^2} = \\sqrt{2}$. Both parts are negative, so quadrant III: the reference angle is $\\arctan(1) = \\frac{\\pi}{4}$, so $\\theta = \\pi + \\frac{\\pi}{4} = \\frac{5\\pi}{4}$. So $z_1 = \\sqrt{2}\\left(\\cos\\frac{5\\pi}{4} + i\\sin\\frac{5\\pi}{4}\\right)$.`}</p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">{`$z_2 = 2 + 2i$`}</span>
              <p className="lrn-step-content">{`$r = \\sqrt{4+4} = 2\\sqrt{2}$. Both parts positive, quadrant I, so $\\theta = \\arctan(1) = \\frac{\\pi}{4}$. So $z_2 = 2\\sqrt{2}\\left(\\cos\\frac{\\pi}{4} + i\\sin\\frac{\\pi}{4}\\right)$.`}</p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">{`$z_3 = -1 + i\\sqrt{3}$`}</span>
              <p className="lrn-step-content">{`$r = \\sqrt{1+3} = 2$. Negative real part, positive imaginary part: quadrant II. Reference angle $\\arctan(\\sqrt{3}) = \\frac{\\pi}{3}$, so $\\theta = \\pi - \\frac{\\pi}{3} = \\frac{2\\pi}{3}$. So $z_3 = 2\\left(\\cos\\frac{2\\pi}{3} + i\\sin\\frac{2\\pi}{3}\\right)$.`}</p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">{`$z_4 = 1 - i\\sqrt{3}$`}</span>
              <p className="lrn-step-content">{`$r = \\sqrt{1+3} = 2$. Positive real part, negative imaginary part: quadrant IV. Reference angle $\\frac{\\pi}{3}$, so $\\theta = 2\\pi - \\frac{\\pi}{3} = \\frac{5\\pi}{3}$. So $z_4 = 2\\left(\\cos\\frac{5\\pi}{3} + i\\sin\\frac{5\\pi}{3}\\right)$.`}</p>
            </div>
          </div>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>{`$z_3$ and $z_4$ both use the same reference angle $\\frac{\\pi}{3}$, yet end at different final angles. Why does the same reference angle produce two completely different arguments here?`}</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>{`$z_3$ sits above and to the left, so the reference angle is measured backward from $\\pi$. $z_4$ sits below and to the right, so it is measured forward from $2\\pi$. Same gap, opposite quadrants, different final angles.`}</p>
            </details>
          </div>

          <h3>Worked Example: Points Straight on the Axes</h3>
          <p>{`Write $z_1 = 2i$, $z_2 = -1$, $z_3 = 2$, and $z_4 = -3i$ in polar form.`}</p>
          <p>{`None of these have both coordinates nonzero, so the axis rule applies directly instead of the quadrant formula: $z_1 = 2\\left(\\cos\\frac{\\pi}{2}+i\\sin\\frac{\\pi}{2}\\right)$, $z_2 = 1(\\cos\\pi + i\\sin\\pi)$, $z_3 = 2(\\cos 0 + i \\sin 0)$, and $z_4 = 3\\left(\\cos\\frac{3\\pi}{2}+i\\sin\\frac{3\\pi}{2}\\right)$.`}</p>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>{`For $z_2 = -1$, a student tries to use $\\arctan\\left(\\frac{0}{-1}\\right) = 0$ and concludes $\\theta = 0$. What went wrong?`}</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>{`The quadrant formula for $x < 0$ adds $\\pi$ to the raw arctangent result: $\\theta = \\pi + \\arctan\\left(\\frac{0}{-1}\\right) = \\pi + 0 = \\pi$. Skipping that added $\\pi$ silently swaps $-1$ for $1$, since $\\cos 0 = 1$ but $\\cos\\pi = -1$.`}</p>
            </details>
          </div>

          <h3>Worked Example: An Angle With No Nice Fraction of Pi</h3>
          <p>{`Write $1+i$, $-4\\sqrt{3}-4i$, and $3+4i$ in polar form.`}</p>
          <p>{`The first two follow familiar reference angles. $1+i$ has $r=\\sqrt{2}$, quadrant I, so $\\theta = \\frac{\\pi}{4}$. For $-4\\sqrt{3}-4i$: $r = \\sqrt{48+16} = 8$, quadrant III, reference angle $\\arctan\\left(\\frac{1}{\\sqrt{3}}\\right) = \\frac{\\pi}{6}$, so $\\theta = \\pi + \\frac{\\pi}{6} = \\frac{7\\pi}{6}$.`}</p>
          <p>{`$3+4i$ is different: $r = \\sqrt{9+16} = 5$, quadrant I, but $\\arctan\\left(\\frac{4}{3}\\right)$ is not a nice fraction of $\\pi$. It is about $0.93$ radians. Not every angle has a clean name, and that is fine: $\\theta = \\arctan\\left(\\frac{4}{3}\\right)$ is still an exact, valid answer.`}</p>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>{`Why is it acceptable to leave the answer for $3+4i$ as $5\\left(\\cos(\\arctan\\frac{4}{3}) + i\\sin(\\arctan\\frac{4}{3})\\right)$ instead of a decimal?`}</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>{`Polar form only needs $r$ and a correct value of $\\theta$. It does not require $\\theta$ to be a familiar fraction of $\\pi$. Most points land at angles with no simple closed form, meaning no tidy exact expression like a fraction of $\\pi$. So $\\arctan\\left(\\frac{4}{3}\\right)$ is itself the exact answer, where a rounded decimal would not be.`}</p>
            </details>
          </div>
        </>,

        <>
          <h2>Polar Form of an Expression With a Parameter</h2>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>{`For $z = 1 + \\cos a + i\\sin a$, predict what happens to $z$ as $a$ gets very close to $\\pi$, using the fact that $\\cos\\pi = -1$ and $\\sin\\pi = 0$.`}</p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>{`$z \\to 1 + (-1) + i(0) = 0$. The point collapses to the origin, where no argument is defined. That special case will need its own treatment below.`}</p>
            </details>
          </div>

          <p>{`Some expressions are already close to polar form but not quite there. Two half angle identities unlock them:`}</p>
          <div className="lrn-eq">
            <span>{`$$1 + \\cos a = 2\\cos^2\\frac{a}{2}, \\qquad \\sin a = 2\\sin\\frac{a}{2}\\cos\\frac{a}{2}$$`}</span>
          </div>
          <p>{`You can check both at a special angle. At $a = \\frac{\\pi}{3}$: $1 + \\cos\\frac{\\pi}{3} = 1 + \\frac{1}{2} = \\frac{3}{2}$, and $2\\cos^2\\frac{\\pi}{6} = 2\\left(\\frac{\\sqrt{3}}{2}\\right)^2 = \\frac{3}{2}$, a match. Likewise $\\sin\\frac{\\pi}{3} = \\frac{\\sqrt{3}}{2}$ equals $2\\sin\\frac{\\pi}{6}\\cos\\frac{\\pi}{6} = 2\\cdot\\frac{1}{2}\\cdot\\frac{\\sqrt{3}}{2} = \\frac{\\sqrt{3}}{2}$.`}</p>
          <p>{`Both $1+\\cos a$ and $\\sin a$ hide a shared factor of $\\cos\\frac{a}{2}$. Pulling that factor out front is what exposes the polar shape. Without it, $1+\\cos a + i\\sin a$ just looks like plain Cartesian form.`}</p>
          <p>{`One caution: you must never write a modulus as a negative number. So track the sign of $\\cos\\frac{a}{2}$ carefully.`}</p>

          <p>{`For $a \\in (0, 2\\pi)$, substitute the identities into $z = 1+\\cos a + i\\sin a$:`}</p>

          <div className="lrn-eq">
            <span>{`$$z = 2\\cos^2\\frac{a}{2} + 2i\\sin\\frac{a}{2}\\cos\\frac{a}{2}$$`}</span>
            <span>{`$$= 2\\cos\\frac{a}{2}\\left(\\cos\\frac{a}{2} + i\\sin\\frac{a}{2}\\right)$$`}</span>
          </div>

          <p>{`This already looks like polar form, with a candidate modulus $2\\cos\\frac{a}{2}$. But since $a \\in (0, 2\\pi)$, we get $\\frac{a}{2} \\in (0, \\pi)$, and $\\cos\\frac{a}{2}$ changes sign inside that interval. That splits the problem into three cases.`}</p>

          <div className="lrn-proof">
            <span className="lrn-proof-header">{`Three cases for $a \\in (0, 2\\pi)$`}</span>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">{`1.`}</span>
              <div className="lrn-proof-step-content">{`For $a \\in (0, \\pi)$, $\\frac{a}{2} \\in \\left(0, \\frac{\\pi}{2}\\right)$, so $\\cos\\frac{a}{2} > 0$. The candidate modulus is already positive, so $z = 2\\cos\\frac{a}{2}\\left(\\cos\\frac{a}{2}+i\\sin\\frac{a}{2}\\right)$ is already polar form, with $r = 2\\cos\\frac{a}{2}$ and $\\theta = \\frac{a}{2}$.`}</div>
            </div>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">{`2.`}</span>
              <div className="lrn-proof-step-content">{`For $a = \\pi$, $\\cos\\frac{a}{2} = \\cos\\frac{\\pi}{2} = 0$, so $z = 0$. The zero complex number has modulus $0$ and no defined argument, so it stands apart from the other two cases.`}</div>
            </div>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">{`3.`}</span>
              <div className="lrn-proof-step-content">{`For $a \\in (\\pi, 2\\pi)$, $\\frac{a}{2} \\in \\left(\\frac{\\pi}{2}, \\pi\\right)$, so $\\cos\\frac{a}{2} < 0$. Adding $\\pi$ to an angle turns the unit circle a half turn, sending the point $(\\cos\\phi, \\sin\\phi)$ to its opposite $(-\\cos\\phi, -\\sin\\phi)$. So $-\\cos\\phi = \\cos(\\phi+\\pi)$ and $-\\sin\\phi = \\sin(\\phi+\\pi)$. Factor out $-1$ and apply this: $z = \\left(-2\\cos\\frac{a}{2}\\right)\\left(\\cos\\left(\\frac{a}{2}+\\pi\\right) + i\\sin\\left(\\frac{a}{2}+\\pi\\right)\\right)$, giving $r = -2\\cos\\frac{a}{2}$ (positive here) and $\\theta = \\frac{a}{2}+\\pi$.`}</div>
            </div>
            <div className="lrn-qed">{`Q.E.D.`}</div>
          </div>

          <p>{`Check case 3 with a concrete angle: at $a = \\frac{3\\pi}{2}$, $z = 1+\\cos\\frac{3\\pi}{2}+i\\sin\\frac{3\\pi}{2} = 1+0-i = 1-i$, which has modulus $\\sqrt{2}$. The formula gives $r = -2\\cos\\frac{3\\pi}{4} = -2\\left(-\\frac{\\sqrt{2}}{2}\\right) = \\sqrt{2}$ and $\\theta = \\frac{3\\pi}{4}+\\pi = \\frac{7\\pi}{4}$, which matches $1-i$ exactly.`}</p>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>{`Case 1 and case 3 both start from the same identity $z = 2\\cos\\frac{a}{2}\\left(\\cos\\frac{a}{2}+i\\sin\\frac{a}{2}\\right)$. Why does case 3 need an extra algebra step that case 1 does not?`}</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>{`Polar form requires $r \\geq 0$. In case 1, $2\\cos\\frac{a}{2}$ is already nonnegative, so no change is needed.`}</p>
              <p>{`In case 3, $2\\cos\\frac{a}{2}$ is negative, so it cannot serve as $r$ directly. Factoring out $-1$ and shifting the angle by $\\pi$ turns that negative number into a positive modulus without changing the point $z$ represents.`}</p>
            </details>
          </div>
        </>,

        <>
          <h2>Multiplying and Dividing Complex Numbers in Polar Form</h2>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>{`Two complex numbers each have modulus $2$. Predict the modulus of their product, and predict whether the product's argument will be bigger or smaller than either factor's argument, assuming both original arguments are positive.`}</p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>{`Modulus of the product: $2 \\times 2 = 4$. The argument should be bigger than either individual argument, since multiplying combines the two rotations by adding them.`}</p>
            </details>
          </div>

          <p>{`Polar form turns multiplication and division into simple arithmetic on the modulus and the argument.`}</p>

          <div className="lrn-eq lrn-eq-display">
            <span>{`$$z_1 z_2 = r_1 r_2 \\big(\\cos(\\theta_1+\\theta_2) + i\\sin(\\theta_1+\\theta_2)\\big)$$`}</span>
          </div>

          <p>{`Use this rule any time you need to multiply complex numbers without expanding brackets by hand, especially before raising a number to a large power.`}</p>

          <p>{`The proof leans on two angle sum identities. They combine two angles into one:`}</p>
          <div className="lrn-eq">
            <span>{`$$\\cos(A+B) = \\cos A\\cos B - \\sin A\\sin B$$`}</span>
            <span>{`$$\\sin(A+B) = \\sin A\\cos B + \\cos A\\sin B$$`}</span>
          </div>
          <p>{`Check them at $A = B = \\frac{\\pi}{6}$. Then $\\cos\\frac{\\pi}{3} = \\frac{1}{2}$, and $\\cos^2\\frac{\\pi}{6} - \\sin^2\\frac{\\pi}{6} = \\frac{3}{4} - \\frac{1}{4} = \\frac{1}{2}$, a match. Also $\\sin\\frac{\\pi}{3} = \\frac{\\sqrt{3}}{2}$, and $2\\sin\\frac{\\pi}{6}\\cos\\frac{\\pi}{6} = \\frac{\\sqrt{3}}{2}$, again a match.`}</p>

          <div className="lrn-proof">
            <span className="lrn-proof-header">{`Proof of the multiplication rule`}</span>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">{`1.`}</span>
              <div className="lrn-proof-step-content">{`Write out the product directly: $z_1 z_2 = r_1(\\cos\\theta_1+i\\sin\\theta_1) \\cdot r_2(\\cos\\theta_2+i\\sin\\theta_2)$.`}</div>
            </div>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">{`2.`}</span>
              <div className="lrn-proof-step-content">{`Expand: $z_1 z_2 = r_1 r_2\\big[(\\cos\\theta_1\\cos\\theta_2 - \\sin\\theta_1\\sin\\theta_2) + i(\\sin\\theta_1\\cos\\theta_2+\\cos\\theta_1\\sin\\theta_2)\\big]$, using $i^2=-1$ to collect the real terms.`}</div>
            </div>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">{`3.`}</span>
              <div className="lrn-proof-step-content">{`The bracketed real part is exactly the cosine angle addition identity, and the imaginary part is exactly the sine angle addition identity, so $z_1 z_2 = r_1 r_2\\big(\\cos(\\theta_1+\\theta_2)+i\\sin(\\theta_1+\\theta_2)\\big)$.`}</div>
            </div>
            <div className="lrn-qed">{`Q.E.D.`}</div>
          </div>

          <p>{`The same idea extends to any number of factors: multiply all the moduli together, and add all the arguments together.`}</p>

          <div className="lrn-insight">
            <span className="lrn-insight-label">Geometric picture</span>
            <p>{`Multiplying by $z_2$ rotates and rescales every point. Picture the triangle formed by the origin, the point $1$, and the point $z_1$. Multiplying by $z_2$ builds a new triangle. Its corners are the origin, the point $z_2$, and the point $z_1 z_2$, and it is similar to the first. The rotation from $1$ to $z_2$ is the same rotation from $z_1$ to $z_1 z_2$. That is exactly what "add the arguments" means geometrically.`}</p>
          </div>

          <div className="lrn-graph">
            <ComplexMultiplyViz />
          </div>

          <p>{`Division reverses the process: divide moduli, subtract arguments.`}</p>

          <div className="lrn-eq lrn-eq-display">
            <span>{`$$\\frac{z_1}{z_2} = \\frac{r_1}{r_2}\\big(\\cos(\\theta_1-\\theta_2) + i\\sin(\\theta_1-\\theta_2)\\big)$$`}</span>
          </div>

          <p>{`A special case of division is the reciprocal, dividing $1$ by $z$:`}</p>

          <div className="lrn-eq">
            <span>{`$$\\frac{1}{z} = \\frac{1}{r}\\big(\\cos(-\\theta) + i\\sin(-\\theta)\\big)$$`}</span>
          </div>

          <div className="lrn-proof">
            <span className="lrn-proof-header">{`Proof of the division rule`}</span>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">{`1.`}</span>
              <div className="lrn-proof-step-content">{`Let $w = \\frac{r_1}{r_2}\\big(\\cos(\\theta_1-\\theta_2)+i\\sin(\\theta_1-\\theta_2)\\big)$. It is enough to show $w z_2 = z_1$.`}</div>
            </div>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">{`2.`}</span>
              <div className="lrn-proof-step-content">{`By the multiplication rule, $w z_2 = \\frac{r_1}{r_2} \\cdot r_2 \\big(\\cos((\\theta_1-\\theta_2)+\\theta_2) + i\\sin((\\theta_1-\\theta_2)+\\theta_2)\\big) = r_1(\\cos\\theta_1+i\\sin\\theta_1) = z_1$.`}</div>
            </div>
            <div className="lrn-qed">{`Q.E.D.`}</div>
          </div>

          <h3>Worked Example: Multiplying Two Points Off the Axes</h3>
          <p>{`Multiply $z_1 = 1-i$ by $z_2 = \\sqrt{3}+i$ using polar form.`}</p>
          <p>{`First, $z_1 = \\sqrt{2}\\left(\\cos\\frac{7\\pi}{4}+i\\sin\\frac{7\\pi}{4}\\right)$, quadrant IV. Second, $z_2 = 2\\left(\\cos\\frac{\\pi}{6}+i\\sin\\frac{\\pi}{6}\\right)$, quadrant I. Multiplying moduli gives $\\sqrt{2}\\cdot 2 = 2\\sqrt{2}$, and adding arguments gives $\\frac{7\\pi}{4}+\\frac{\\pi}{6} = \\frac{21\\pi}{12}+\\frac{2\\pi}{12} = \\frac{23\\pi}{12}$, equivalently $-\\frac{\\pi}{12}$ in the extended argument set.`}</p>
          <p>{`So $z_1 z_2 = 2\\sqrt{2}\\left(\\cos\\left(-\\frac{\\pi}{12}\\right)+i\\sin\\left(-\\frac{\\pi}{12}\\right)\\right)$. A direct Cartesian check confirms this: $(1-i)(\\sqrt{3}+i) = (\\sqrt{3}+1)+i(1-\\sqrt{3})$, which has modulus $\\sqrt{8}=2\\sqrt{2}$ and, since the real part is positive and the imaginary part is negative, sits in quadrant IV close to the positive real axis, matching a small negative angle.`}</p>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>{`The final angle $-\\frac{\\pi}{12}$ is negative, but the earlier lesson on the argument used the range $[0, 2\\pi)$. Is $-\\frac{\\pi}{12}$ wrong?`}</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>{`It is not wrong, it is just not the principal value. $-\\frac{\\pi}{12}$ and $\\frac{23\\pi}{12}$ describe the exact same direction, since they differ by $2\\pi$. Either one is a valid member of the extended argument set; $\\frac{23\\pi}{12}$ is the one that lies in $[0, 2\\pi)$.`}</p>
            </details>
          </div>

          <h3>Worked Example: Multiplying and Dividing Two Polar Numbers</h3>
          <p>{`Given $z_1 = 2\\left(\\cos\\frac{\\pi}{4}+i\\sin\\frac{\\pi}{4}\\right)$ and $z_2 = 5\\left(\\cos\\frac{\\pi}{3}+i\\sin\\frac{\\pi}{3}\\right)$, find $z_1 z_2$ and $\\frac{z_1}{z_2}$.`}</p>
          <p>{`For the product: multiply moduli, $2\\times 5=10$, and add arguments, $\\frac{\\pi}{4}+\\frac{\\pi}{3} = \\frac{3\\pi}{12}+\\frac{4\\pi}{12}=\\frac{7\\pi}{12}$. So $z_1 z_2 = 10\\left(\\cos\\frac{7\\pi}{12}+i\\sin\\frac{7\\pi}{12}\\right)$.`}</p>
          <p>{`For the quotient: divide moduli, $\\frac{2}{5}$, and subtract arguments, $\\frac{\\pi}{4}-\\frac{\\pi}{3} = \\frac{3\\pi}{12}-\\frac{4\\pi}{12} = -\\frac{\\pi}{12}$. So $\\frac{z_1}{z_2} = \\frac{2}{5}\\left(\\cos\\left(-\\frac{\\pi}{12}\\right)+i\\sin\\left(-\\frac{\\pi}{12}\\right)\\right)$.`}</p>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>{`Both the product and the quotient here involve the fraction $\\frac{7\\pi}{12}$ or $\\frac{\\pi}{12}$, built from twelfths. Why twelfths, when the original angles were quarters and thirds?`}</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>{`Adding or subtracting fractions needs a common denominator. The least common denominator of $4$ and $3$ is $12$, so $\\frac{\\pi}{4}$ becomes $\\frac{3\\pi}{12}$ and $\\frac{\\pi}{3}$ becomes $\\frac{4\\pi}{12}$ before they can combine.`}</p>
            </details>
          </div>

          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>{`Division undoes multiplication, so its rule must undo the multiplication rule. Multiplying by $z_2$ scales by $r_2$ and rotates by $\\theta_2$. Dividing by $z_2$ has to shrink by the same factor $r_2$ and rotate backward by the same $\\theta_2$, which is exactly "divide moduli, subtract arguments."`}</p>
          </div>
        </>,

        <>
          <h2>De Moivre's Theorem</h2>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>{`$i$ has modulus $1$ and argument $\\frac{\\pi}{2}$. Predict what $i^4$ equals, using only "raising to a power multiplies the argument by the exponent."`}</p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>{`The argument becomes $4 \\times \\frac{\\pi}{2} = 2\\pi$, a full turn back to the start, and the modulus stays $1^4=1$. So $i^4$ should equal $1$, matching what you already know about powers of $i$.`}</p>
            </details>
          </div>

          <div className="lrn-graph">
            <PowersOfIViz />
          </div>

          <p>{`Abraham de Moivre (1667 to 1754) was a French mathematician who worked on probability and trigonometry. The theorem named after him is the multiplication rule applied to a number times itself, over and over.`}</p>

          <div className="lrn-eq lrn-eq-display">
            <span>{`$$z^n = r^n(\\cos n\\theta + i\\sin n\\theta)$$`}</span>
          </div>

          <p>{`Use De Moivre's theorem whenever you need to raise a complex number to a power, especially a large one, without multiplying it out by hand over and over.`}</p>

          <div className="lrn-graph">
            <PowerSpiralViz />
          </div>

          <div className="lrn-proof">
            <span className="lrn-proof-header">{`Proof by induction, for positive integers $n$`}</span>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">{`1.`}</span>
              <div className="lrn-proof-step-content">{`Base case, $n=1$: $z^1 = r(\\cos\\theta+i\\sin\\theta)$, which is exactly $r^1(\\cos(1\\cdot\\theta)+i\\sin(1\\cdot\\theta))$. True by definition.`}</div>
            </div>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">{`2.`}</span>
              <div className="lrn-proof-step-content">{`Inductive step: assume $z^n = r^n(\\cos n\\theta+i\\sin n\\theta)$ holds for some positive integer $n$.`}</div>
            </div>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">{`3.`}</span>
              <div className="lrn-proof-step-content">{`Then $z^{n+1} = z^n \\cdot z = r^n(\\cos n\\theta+i\\sin n\\theta)\\cdot r(\\cos\\theta+i\\sin\\theta)$. Applying the multiplication rule gives $z^{n+1} = r^{n+1}\\big(\\cos(n\\theta+\\theta)+i\\sin(n\\theta+\\theta)\\big) = r^{n+1}\\big(\\cos((n+1)\\theta)+i\\sin((n+1)\\theta)\\big)$.`}</div>
            </div>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">{`4.`}</span>
              <div className="lrn-proof-step-content">{`The formula holds for $n+1$ whenever it holds for $n$, and it holds for $n=1$. By mathematical induction, it holds for every positive integer $n$.`}</div>
            </div>
            <div className="lrn-qed">{`Q.E.D.`}</div>
          </div>

          <p>{`The formula also holds for negative integer exponents. Write $n=-m$ for a positive integer $m$, and use the reciprocal rule: $z^{-m} = \\frac{1}{z^m} = \\frac{1}{r^m(\\cos m\\theta+i\\sin m\\theta)} = r^{-m}\\big(\\cos(-m\\theta)+i\\sin(-m\\theta)\\big)$, which is exactly $z^n = r^n(\\cos n\\theta + i\\sin n\\theta)$ with $n=-m$.`}</p>

          <h3>Worked Example: A Very Large Power</h3>
          <p>{`Compute $(1+i)^{1000}$.`}</p>
          <p>{`$1+i = \\sqrt{2}\\left(\\cos\\frac{\\pi}{4}+i\\sin\\frac{\\pi}{4}\\right)$. By De Moivre, $(1+i)^{1000} = (\\sqrt{2})^{1000}\\left(\\cos\\frac{1000\\pi}{4}+i\\sin\\frac{1000\\pi}{4}\\right) = 2^{500}(\\cos 250\\pi + i\\sin 250\\pi)$.`}</p>
          <p>{`$250\\pi$ is $125$ full turns of $2\\pi$, so $\\cos 250\\pi = 1$ and $\\sin 250\\pi = 0$. So $(1+i)^{1000} = 2^{500}$.`}</p>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>{`The final answer $2^{500}$ is a plain real number, with no $i$ at all. What about the angle made that happen?`}</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>{`The angle $250\\pi$ is an exact whole number of full turns, $125 \\times 2\\pi$. The final angle lands back on $0$ radians after you remove those full turns. There $\\sin$ is $0$, which kills the imaginary part and leaves a real number.`}</p>
            </details>
          </div>

          <h3>Worked Example: A Fractional Base</h3>
          <p>{`Compute $\\left(\\frac{1}{2}+\\frac{1}{2}i\\right)^{10}$.`}</p>
          <p>{`$\\frac{1}{2}+\\frac{1}{2}i = \\frac{\\sqrt{2}}{2}\\left(\\cos\\frac{\\pi}{4}+i\\sin\\frac{\\pi}{4}\\right)$, since $r = \\sqrt{\\frac{1}{4}+\\frac{1}{4}} = \\frac{\\sqrt{2}}{2}$. Raising to the tenth power: $\\left(\\frac{\\sqrt{2}}{2}\\right)^{10} = \\left(\\frac{1}{2}\\right)^5 = \\frac{1}{32}$, and the angle becomes $10\\times\\frac{\\pi}{4} = \\frac{10\\pi}{4} = \\frac{5\\pi}{2}$, which is equivalent to $\\frac{\\pi}{2}$ after removing one full turn.`}</p>
          <p>{`So the result is $\\frac{1}{32}\\left(\\cos\\frac{\\pi}{2}+i\\sin\\frac{\\pi}{2}\\right) = \\frac{1}{32}(0+i) = \\frac{i}{32}$.`}</p>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>{`Why does raising a modulus smaller than $1$ to a high power make the modulus even smaller, while raising $\\sqrt{2}$ in the previous example made the modulus huge?`}</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>{`Raising a number greater than $1$ to a large power makes it grow, and raising a number between $0$ and $1$ to a large power makes it shrink toward $0$. Here $\\frac{\\sqrt{2}}{2} \\approx 0.707$ is less than $1$, so $\\left(\\frac{\\sqrt{2}}{2}\\right)^{10}$ becomes small, $\\frac{1}{32}$.`}</p>
            </details>
          </div>

          <h3>Worked Example: Simplifying a Product of Powers</h3>
          <p>{`Compute $\\dfrac{(1-i)^{10}(\\sqrt{3}+i)^5}{(-1-i\\sqrt{3})^{10}}$.`}</p>
          <p>{`Convert each base: $1-i = \\sqrt{2}\\left(\\cos\\frac{7\\pi}{4}+i\\sin\\frac{7\\pi}{4}\\right)$, $\\sqrt{3}+i = 2\\left(\\cos\\frac{\\pi}{6}+i\\sin\\frac{\\pi}{6}\\right)$, and $-1-i\\sqrt{3} = 2\\left(\\cos\\frac{4\\pi}{3}+i\\sin\\frac{4\\pi}{3}\\right)$, quadrant III.`}</p>
          <p>{`Raise each with De Moivre. $(1-i)^{10}$: modulus $(\\sqrt{2})^{10}=32$, angle $10\\times\\frac{7\\pi}{4}=\\frac{70\\pi}{4}=\\frac{35\\pi}{2}$, equivalent to $\\frac{3\\pi}{2}$ after removing full turns. So $(1-i)^{10} = 32\\left(\\cos\\frac{3\\pi}{2}+i\\sin\\frac{3\\pi}{2}\\right) = -32i$.`}</p>
          <p>{`$(\\sqrt{3}+i)^5$: modulus $2^5=32$, angle $5\\times\\frac{\\pi}{6}=\\frac{5\\pi}{6}$. So $(\\sqrt{3}+i)^5 = 32\\left(\\cos\\frac{5\\pi}{6}+i\\sin\\frac{5\\pi}{6}\\right) = 32\\left(-\\frac{\\sqrt{3}}{2}+\\frac{1}{2}i\\right) = -16\\sqrt{3}+16i$.`}</p>
          <p>{`$(-1-i\\sqrt{3})^{10}$: modulus $2^{10}=1024$, angle $10\\times\\frac{4\\pi}{3}=\\frac{40\\pi}{3}$, equivalent to $\\frac{4\\pi}{3}$ after removing full turns. So $(-1-i\\sqrt{3})^{10} = 1024\\left(-\\frac{1}{2}-\\frac{\\sqrt{3}}{2}i\\right) = -512-512\\sqrt{3}i$.`}</p>
          <p>{`The numerator becomes $(-32i)(-16\\sqrt{3}+16i) = 512\\sqrt{3}i - 512i^2 = 512 + 512\\sqrt{3}i = 512(1+\\sqrt{3}i)$. The denominator is $-512(1+\\sqrt{3}i)$. Dividing the two: $\\dfrac{512(1+\\sqrt{3}i)}{-512(1+\\sqrt{3}i)} = -1$.`}</p>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>{`Both the numerator and the denominator ended up as a multiple of the exact same complex number, $1+\\sqrt{3}i$. Is this a coincidence?`}</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>{`Not entirely, though it does depend on how the original numbers were chosen. Once both sides reduce to a real number times $(1+\\sqrt{3}i)$, that common factor cancels in the division, leaving only a real ratio. Problems built from related bases often show this kind of cancellation. It turns a messy division into an easy one, so watch for it.`}</p>
            </details>
          </div>

          <div className="lrn-faded">
            <div className="lrn-faded-phase">
              <span className="lrn-faded-label">COMPLETE EXAMPLE</span>
              <p>{`De Moivre's theorem also lets you expand multiple-angle formulas. Start from $(\\cos\\theta + i\\sin\\theta)^5 = \\cos 5\\theta + i\\sin 5\\theta$, true by De Moivre with $r=1$, $n=5$. Expand the left side with the binomial theorem, using $i^0=1, i^1=i, i^2=-1, i^3=-i, i^4=1, i^5=i$:`}</p>
              <div className="lrn-eq">
                <span>{`$$(\\cos\\theta + i\\sin\\theta)^5 = \\cos^5\\theta + 5i\\cos^4\\theta\\sin\\theta - 10\\cos^3\\theta\\sin^2\\theta - 10i\\cos^2\\theta\\sin^3\\theta + 5\\cos\\theta\\sin^4\\theta + i\\sin^5\\theta$$`}</span>
              </div>
              <p>{`Group the terms without $i$ (the real part) and the terms with $i$ (the imaginary part). Since the left side equals $\\cos 5\\theta + i\\sin 5\\theta$, each group must match its counterpart on the right:`}</p>
              <div className="lrn-eq">
                <span>{`$$\\cos 5\\theta = \\cos^5\\theta - 10\\cos^3\\theta\\sin^2\\theta + 5\\cos\\theta\\sin^4\\theta$$`}</span>
                <span>{`$$\\sin 5\\theta = 5\\cos^4\\theta\\sin\\theta - 10\\cos^2\\theta\\sin^3\\theta + \\sin^5\\theta$$`}</span>
              </div>
              <p>{`This uses the binomial theorem, the same tool that counts and expands terms elsewhere. Now the terms carry powers of $i$, which collapse the result into two separate trig identities.`}</p>
            </div>
            <div className="lrn-faded-phase">
              <span className="lrn-faded-label">YOUR TURN, PARTIAL</span>
              <p>{`Now try $n=2$: start from $(\\cos\\theta+i\\sin\\theta)^2 = \\cos 2\\theta + i\\sin 2\\theta$. Expand the left side using the binomial theorem, keeping $i^2=-1$ in mind.`}</p>
              <div className="lrn-eq">
                <span>{`$$(\\cos\\theta + i\\sin\\theta)^2 = \\cos^2\\theta + 2i\\cos\\theta\\sin\\theta + i^2\\sin^2\\theta = (\\cos^2\\theta - \\sin^2\\theta) + i(2\\sin\\theta\\cos\\theta)$$`}</span>
              </div>
              <p>{`Now separate real and imaginary parts and match them to $\\cos 2\\theta$ and $\\sin 2\\theta$, exactly as you did for the $n=5$ case above.`}</p>
              <details className="lrn-self-explain-reveal">
                <summary>Check your answer</summary>
                <p>{`$\\cos 2\\theta = \\cos^2\\theta - \\sin^2\\theta$ and $\\sin 2\\theta = 2\\sin\\theta\\cos\\theta$. These are the familiar double angle identities, produced by the exact same real-versus-imaginary matching used for $\\cos 5\\theta$ and $\\sin 5\\theta$.`}</p>
              </details>
            </div>
            <div className="lrn-faded-phase">
              <span className="lrn-faded-label">INDEPENDENT PRACTICE</span>
              <p>{`Confirm the pattern holds for the trivial case $n=1$: what do $\\cos\\theta$ and $\\sin\\theta$ look like when this method is applied with $n=1$, and why does that check out immediately?`}</p>
              <details className="lrn-self-explain-reveal">
                <summary>Check your answer</summary>
                <p>{`With $n=1$, $(\\cos\\theta + i\\sin\\theta)^1 = \\cos\\theta + i\\sin\\theta$ already, with no expansion needed. The real part is $\\cos\\theta$ and the imaginary part is $\\sin\\theta$, matching $\\cos(1\\cdot\\theta)$ and $\\sin(1\\cdot\\theta)$ exactly. This is the base case of De Moivre's induction proof, showing the multiple-angle method works from the smallest case up.`}</p>
              </details>
            </div>
          </div>
        </>,

        <>
          <h2>The nth Roots of a Complex Number</h2>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>{`Predict how many complex numbers satisfy $z^3 = 8$, and predict whether they might be spread evenly around a circle or clustered together.`}</p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>{`There should be exactly $3$ solutions, matching the exponent. Complex roots of an equation like this tend to spread out evenly, since rotating a solution by an equal angle should produce another solution.`}</p>
            </details>
          </div>

          <p>{`Finding every complex number $w$ with $w^n = z$ for a given complex number $z$ is the reverse of De Moivre's theorem.`}</p>

          <div className="lrn-graph">
            <NthRootsPolygonViz />
          </div>

          <div className="lrn-eq lrn-eq-display">
            <span>{`$$w_k = \\sqrt[n]{r}\\left(\\cos\\frac{\\theta+2k\\pi}{n} + i\\sin\\frac{\\theta+2k\\pi}{n}\\right), \\quad k = 0, 1, \\dots, n-1$$`}</span>
          </div>

          <p>{`Here $\\sqrt[n]{r}$ is the ordinary real $n$th root of the positive number $r$: the unique positive number whose $n$th power is $r$.`}</p>

          <p>{`Use this whenever an equation asks for every complex solution to $z^n = $ some number, not just one solution.`}</p>

          <div className="lrn-proof">
            <span className="lrn-proof-header">{`Proof: there are exactly $n$ distinct roots`}</span>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">{`1.`}</span>
              <div className="lrn-proof-step-content">{`Let $z = r(\\cos\\theta+i\\sin\\theta)$ and search for $w=\\rho(\\cos\\varphi+i\\sin\\varphi)$ with $w^n=z$.`}</div>
            </div>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">{`2.`}</span>
              <div className="lrn-proof-step-content">{`By De Moivre, $w^n = \\rho^n(\\cos n\\varphi+i\\sin n\\varphi)$. By the equality condition, $w^n=z$ requires $\\rho^n=r$ and $n\\varphi = \\theta+2k\\pi$ for some integer $k$.`}</div>
            </div>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">{`3.`}</span>
              <div className="lrn-proof-step-content">{`Since $\\rho$ must be a nonnegative real number, $\\rho = \\sqrt[n]{r}$ is forced, the unique positive real $n$th root. Solving for $\\varphi$ gives $\\varphi = \\frac{\\theta+2k\\pi}{n}$.`}</div>
            </div>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">{`4.`}</span>
              <div className="lrn-proof-step-content">{`As $k$ ranges over all integers, $\\varphi$ repeats itself as soon as $k$ increases by $n$, since that adds a full $2\\pi$ to $\\varphi$. So only $k=0,1,\\dots,n-1$ give distinct angles, and therefore exactly $n$ distinct values of $w$.`}</div>
            </div>
            <div className="lrn-qed">{`Q.E.D.`}</div>
          </div>

          <p>{`All $n$ roots share the same modulus $\\sqrt[n]{r}$, so every one of them sits the same distance from the origin, on a shared circle. Their arguments increase by a fixed step of $\\frac{2\\pi}{n}$ each time $k$ increases by $1$. A regular $n$-gon is exactly the shape with equal distance from the center and equal angular spacing between neighbors. So the roots always sit at its vertices, inscribed in that circle.`}</p>

          <div className="lrn-tip lrn-callout">
            <span className="lrn-callout-label">Notational variant</span>
            <p>{`You may also see this formula written with degrees in place of radians: $w_k = \\sqrt[n]{r}\\left(\\cos\\frac{\\theta+360^{\\circ}k}{n}+i\\sin\\frac{\\theta+360^{\\circ}k}{n}\\right)$. It is the identical rule, with $360^{\\circ}$ standing in for $2\\pi$.`}</p>
          </div>

          <h3>Worked Example: Cube Roots of a Point Off the Axes</h3>
          <p>{`Find the cube roots of $z = 1+i$.`}</p>
          <p>{`$1+i = \\sqrt{2}\\left(\\cos\\frac{\\pi}{4}+i\\sin\\frac{\\pi}{4}\\right)$. The modulus of each root is $\\sqrt[3]{\\sqrt{2}} = 2^{1/6}$. The three angles are $\\frac{\\frac{\\pi}{4}+2k\\pi}{3}$ for $k=0,1,2$: $\\frac{\\pi}{12}$, $\\frac{\\pi}{12}+\\frac{2\\pi}{3}=\\frac{9\\pi}{12}=\\frac{3\\pi}{4}$, and $\\frac{\\pi}{12}+\\frac{4\\pi}{3}=\\frac{17\\pi}{12}$.`}</p>
          <p>{`The three roots are $2^{1/6}\\left(\\cos\\frac{\\pi}{12}+i\\sin\\frac{\\pi}{12}\\right)$, $2^{1/6}\\left(\\cos\\frac{3\\pi}{4}+i\\sin\\frac{3\\pi}{4}\\right)$, and $2^{1/6}\\left(\\cos\\frac{17\\pi}{12}+i\\sin\\frac{17\\pi}{12}\\right)$, spaced $\\frac{2\\pi}{3}$ apart, forming an equilateral triangle on a circle of radius $2^{1/6}$.`}</p>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>{`Only one of the three cube roots came from $k=0$. Why do the other two, at $k=1$ and $k=2$, still count as legitimate roots of $1+i$, rather than being some other number?`}</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>{`Cubing any of the three roots multiplies its argument by $3$. For $k=1$, the argument $\\frac{3\\pi}{4}$ becomes $\\frac{9\\pi}{4}$, which is $\\frac{\\pi}{4}$ plus one full turn, landing back on the argument of $1+i$. The extra $2k\\pi$ in the roots formula vanishes exactly this way once you multiply by $n$.`}</p>
            </details>
          </div>

          <div className="lrn-faded">
            <div className="lrn-faded-phase">
              <span className="lrn-faded-label">COMPLETE EXAMPLE</span>
              <p>{`Find the six sixth roots of $z=-64$.`}</p>
              <ol className="lrn-list">
                <li>{`Write $z$ in polar form: $-64 = 64(\\cos\\pi + i\\sin\\pi)$, so $r=64$, $\\theta=\\pi$.`}</li>
                <li>{`Compute the shared modulus of every root: $\\sqrt[6]{64} = 2$.`}</li>
                <li>{`List the six angles $\\frac{\\pi+2k\\pi}{6}$ for $k=0,\\dots,5$, each $\\frac{\\pi}{3}$ apart: $\\frac{\\pi}{6}$, $\\frac{\\pi}{2}$, $\\frac{5\\pi}{6}$, $\\frac{7\\pi}{6}$, $\\frac{3\\pi}{2}$, $\\frac{11\\pi}{6}$.`}</li>
                <li>{`Write each root as $2(\\cos\\theta_k+i\\sin\\theta_k)$: $\\sqrt{3}+i$, $2i$, $-\\sqrt{3}+i$, $-\\sqrt{3}-i$, $-2i$, $\\sqrt{3}-i$.`}</li>
              </ol>
            </div>
            <div className="lrn-faded-phase">
              <span className="lrn-faded-label">YOUR TURN, PARTIAL</span>
              <p>{`Find the cube roots of $z=4\\sqrt{3}+4i$. Here is the setup: $r=\\sqrt{48+16}=8$ and $\\theta=\\frac{\\pi}{6}$, so the shared modulus of each root is $\\sqrt[3]{8}=2$.`}</p>
              <p>{`Finish it yourself: list the three angles $\\frac{\\frac{\\pi}{6}+2k\\pi}{3}$ for $k=0,1,2$, then write out each root.`}</p>
              <details className="lrn-self-explain-reveal">
                <summary>Check your answer</summary>
                <p>{`The three angles are $\\frac{\\pi}{18}$, $\\frac{\\pi}{18}+\\frac{2\\pi}{3}=\\frac{13\\pi}{18}$, and $\\frac{\\pi}{18}+\\frac{4\\pi}{3}=\\frac{25\\pi}{18}$. The roots are $2\\left(\\cos\\frac{\\pi}{18}+i\\sin\\frac{\\pi}{18}\\right)$, $2\\left(\\cos\\frac{13\\pi}{18}+i\\sin\\frac{13\\pi}{18}\\right)$, and $2\\left(\\cos\\frac{25\\pi}{18}+i\\sin\\frac{25\\pi}{18}\\right)$, spaced $\\frac{2\\pi}{3}$ apart.`}</p>
              </details>
            </div>
            <div className="lrn-faded-phase">
              <span className="lrn-faded-label">INDEPENDENT PRACTICE</span>
              <p>{`Solve $z^6+64=0$ without redoing any root-finding work.`}</p>
              <details className="lrn-self-explain-reveal">
                <summary>Check your answer</summary>
                <p>{`$z^6+64=0$ means $z^6=-64$, exactly the equation solved in the first phase above. The six solutions are the same six sixth roots already found: $\\sqrt{3}+i$, $2i$, $-\\sqrt{3}+i$, $-\\sqrt{3}-i$, $-2i$, $\\sqrt{3}-i$. No new computation is needed, since "solve $z^6+64=0$" and "find the sixth roots of $-64$" are the same question.`}</p>
              </details>
            </div>
          </div>
        </>,

        <>
          <h2>The nth Roots of Unity</h2>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>{`Predict where the three cube roots of $1$ sit in the plane, using what you know about the roots formula and the fact that $1$ has modulus $1$ and argument $0$.`}</p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>{`All three roots should have modulus $1$, so they sit on the unit circle, spaced $\\frac{2\\pi}{3}$ apart starting from angle $0$: one root is $1$ itself, and the other two are reflections of each other above and below the real axis.`}</p>
            </details>
          </div>

          <p>{`The special case $z=1$ in the nth roots formula deserves its own name, since it comes up constantly.`}</p>

          <div className="lrn-eq lrn-eq-display">
            <span>{`$$\\varepsilon_k = \\cos\\frac{2k\\pi}{n} + i\\sin\\frac{2k\\pi}{n}, \\quad k = 0, 1, \\dots, n-1$$`}</span>
          </div>

          <p>{`Use this whenever a problem specifically asks for the $n$th roots of unity, the $n$ solutions of $z^n=1$, rather than the roots of some other number.`}</p>

          <div className="lrn-definition">
            <span className="lrn-definition-term">{`Primitive root of unity`}</span>
            <div className="lrn-definition-desc">
              <p>{`A root of unity $\\varepsilon_k$ is primitive if no smaller positive power of it returns to $1$: $\\varepsilon_k^m \\neq 1$ for every positive integer $m < n$.`}</p>
            </div>
          </div>

          <p>{`Every one of the $n$ roots of unity can be written as a power of any single primitive root $\\varepsilon$: the full set is $\\{\\varepsilon^0, \\varepsilon^1, \\varepsilon^2, \\dots, \\varepsilon^{n-1}\\}$. Raising a primitive root to higher and higher powers cycles through every root exactly once before repeating.`}</p>

          <p>{`Check this for $n=3$: let $\\varepsilon = \\cos\\frac{2\\pi}{3}+i\\sin\\frac{2\\pi}{3} = -\\frac{1}{2}+\\frac{\\sqrt{3}}{2}i$. Then $\\varepsilon^0=1$, $\\varepsilon^1=\\varepsilon=-\\frac{1}{2}+\\frac{\\sqrt{3}}{2}i$, and $\\varepsilon^2 = \\cos\\frac{4\\pi}{3}+i\\sin\\frac{4\\pi}{3} = -\\frac{1}{2}-\\frac{\\sqrt{3}}{2}i$. These are exactly the three cube roots of unity, so $\\varepsilon$ generates all of them.`}</p>

          <div className="lrn-insight">
            <span className="lrn-insight-label">Key fact</span>
            <p>{`For any $n \\geq 2$, the $n$ nth roots of unity always add up to zero: $1 + \\varepsilon + \\varepsilon^2 + \\dots + \\varepsilon^{n-1} = 0$.`}</p>
          </div>

          <div className="lrn-proof">
            <span className="lrn-proof-header">{`Proof that the roots of unity sum to zero`}</span>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">{`1.`}</span>
              <div className="lrn-proof-step-content">{`Let $\\varepsilon$ be any root of unity with $\\varepsilon \\neq 1$. The sum $S = 1+\\varepsilon+\\varepsilon^2+\\dots+\\varepsilon^{n-1}$ is a geometric series.`}</div>
            </div>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">{`2.`}</span>
              <div className="lrn-proof-step-content">{`The geometric series formula gives $S = \\dfrac{\\varepsilon^n - 1}{\\varepsilon - 1}$, valid since the denominator $\\varepsilon - 1 \\neq 0$.`}</div>
            </div>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">{`3.`}</span>
              <div className="lrn-proof-step-content">{`Because $\\varepsilon$ is an $n$th root of unity, $\\varepsilon^n = 1$, so the numerator becomes $1-1=0$, and $S = \\frac{0}{\\varepsilon-1} = 0$.`}</div>
            </div>
            <div className="lrn-qed">{`Q.E.D.`}</div>
          </div>

          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>{`Geometrically, the roots of unity spread perfectly evenly around the unit circle, forming a regular polygon centered at the origin. Treat each vertex as a vector from the center. By symmetry these vectors always cancel. For every vertex pointing one way, the balanced spacing pulls equally the other way, summing to exactly zero.`}</p>
          </div>

          <div className="lrn-graph">
            <RootsOfUnityViz />
          </div>
        </>,

        <>
          <h2>Binomial Equations</h2>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>{`The equation $Z^3+8=0$ can be rewritten as $Z^3=-8$. Predict why solving it is the same job as finding the cube roots of $-8$, using nothing new.`}</p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>{`Moving the $8$ across gives $Z^3=-8$ directly. That is exactly a roots question: find every $Z$ whose cube is $-8$. So a binomial equation is just an nth roots problem wearing a different coat.`}</p>
            </details>
          </div>

          <p>{`We call an equation of the form $Z^n+a=0$, with $a$ a nonzero complex number, a binomial equation. It rearranges directly into a root-finding problem.`}</p>

          <div className="lrn-eq">
            <span>{`$$Z^n + a = 0 \\iff Z^n = -a$$`}</span>
          </div>

          <p>{`Use the nth roots formula whenever you meet an equation in this shape: write $-a$ in polar form, then apply the same recipe used for any other nth roots problem. There is no separate method to learn.`}</p>

          <h3>Worked Example: A Simple Binomial Equation</h3>
          <p>{`Solve $Z^3+8=0$.`}</p>
          <p>{`This means $Z^3=-8$. In polar form, $-8 = 8(\\cos\\pi+i\\sin\\pi)$. The shared modulus of each root is $\\sqrt[3]{8}=2$, and the three angles are $\\frac{\\pi+2k\\pi}{3}$ for $k=0,1,2$: $\\frac{\\pi}{3}$, $\\pi$, and $\\frac{5\\pi}{3}$.`}</p>
          <p>{`The roots are $2\\left(\\cos\\frac{\\pi}{3}+i\\sin\\frac{\\pi}{3}\\right)=1+\\sqrt{3}i$, $2(\\cos\\pi+i\\sin\\pi)=-2$, and $2\\left(\\cos\\frac{5\\pi}{3}+i\\sin\\frac{5\\pi}{3}\\right)=1-\\sqrt{3}i$.`}</p>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>{`One of the three roots, $-2$, is a real number and can be checked without any polar form at all. How would you confirm it directly?`}</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>{`$(-2)^3 = -8$, so plugging $Z=-2$ into $Z^3+8=0$ gives $-8+8=0$. It checks out directly. The other two roots are complex and cannot be found by guessing, which is exactly why the polar form method is needed for the full set.`}</p>
            </details>
          </div>

          <h3>Worked Example: Factoring Into Two Binomial Equations</h3>
          <p>{`Solve $Z^6 - Z^3(1+i) + i = 0$.`}</p>
          <p>{`Treat this as a quadratic in $w=Z^3$: $w^2-(1+i)w+i=0$. Since the two numbers $1$ and $i$ have sum $1+i$ and product $i$, the equation factors as $(w-1)(w-i)=0$, which expands back to $w^2-(1+i)w+i$, confirming the factoring is correct.`}</p>
          <p>{`So either $Z^3=1$ or $Z^3=i$, two separate binomial equations.`}</p>
          <div className="lrn-steps">
            <div className="lrn-step">
              <span className="lrn-step-title">{`$Z^3=1$: the cube roots of unity`}</span>
              <p className="lrn-step-content">{`These are the cube roots of unity found in the previous section.`}</p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">{`$Z^3=i$: the cube roots of $i$`}</span>
              <p className="lrn-step-content">{`$i = \\cos\\frac{\\pi}{2}+i\\sin\\frac{\\pi}{2}$, so the roots have modulus $1$ and angles $\\frac{\\pi}{6}$, $\\frac{5\\pi}{6}$, $\\frac{3\\pi}{2}$: $\\frac{\\sqrt{3}}{2}+\\frac{1}{2}i$, $-\\frac{\\sqrt{3}}{2}+\\frac{1}{2}i$, $-i$.`}</p>
            </div>
          </div>
          <p>{`Altogether, the six roots of the original equation are $1$, $-\\frac{1}{2}+\\frac{\\sqrt{3}}{2}i$, $-\\frac{1}{2}-\\frac{\\sqrt{3}}{2}i$, $\\frac{\\sqrt{3}}{2}+\\frac{1}{2}i$, $-\\frac{\\sqrt{3}}{2}+\\frac{1}{2}i$, and $-i$, matching a degree six polynomial.`}</p>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>{`Why does spotting the factoring $(w-1)(w-i)$ turn a degree six equation into something manageable?`}</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>{`Substituting $w=Z^3$ hides the degree six equation inside a plain quadratic in $w$. Factoring the quadratic splits it into two much simpler binomial equations, $Z^3=1$ and $Z^3=i$, each solvable directly with the nth roots formula. Without the substitution, the original equation would need to be solved directly at degree six.`}</p>
            </details>
          </div>
        </>
      ]
    },
    practice: [
      {
        q: `Convert $135^{\\circ}$ to radians.`,
        a: `Multiply degrees by $\\frac{\\pi}{180}$: $135\\times\\frac{\\pi}{180} = \\frac{135\\pi}{180} = \\frac{3\\pi}{4}$. So $135^{\\circ} = \\frac{3\\pi}{4}$ radians.`
      },
      {
        q: `Find the polar form of $z=-2-2i$.`,
        a: `The modulus is $r=\\sqrt{(-2)^2+(-2)^2}=\\sqrt{8}=2\\sqrt{2}$. Both parts are negative, so $z$ is in quadrant III. The reference angle is $\\arctan(1)=\\frac{\\pi}{4}$, and quadrant III means adding $\\pi$: $\\theta=\\pi+\\frac{\\pi}{4}=\\frac{5\\pi}{4}$. So $z=2\\sqrt{2}\\left(\\cos\\frac{5\\pi}{4}+i\\sin\\frac{5\\pi}{4}\\right)$.`
      },
      {
        q: `Before computing, predict which quadrant the argument of $z=-5+2i$ falls in, then explain why.`,
        a: `Quadrant II. The real part is negative and the imaginary part is positive, which places the point to the left of the origin and above the real axis, exactly the region covered by angles between $\\frac{\\pi}{2}$ and $\\pi$.`
      },
      {
        q: `State the values of $\\cos\\frac{\\pi}{6}$ and $\\sin\\frac{\\pi}{6}$.`,
        a: `From the special-angle table, $\\cos\\frac{\\pi}{6} = \\frac{\\sqrt{3}}{2}$ and $\\sin\\frac{\\pi}{6} = \\frac{1}{2}$. The point at $\\frac{\\pi}{6}$ on the unit circle is $\\left(\\frac{\\sqrt{3}}{2}, \\frac{1}{2}\\right)$.`
      },
      {
        q: `Write $i$ and $-1$ in polar form.`,
        a: `$i$ sits directly on the positive imaginary axis, with $r=1$ and $\\theta=\\frac{\\pi}{2}$, so $i=\\cos\\frac{\\pi}{2}+i\\sin\\frac{\\pi}{2}$. $-1$ sits on the negative real axis, with $r=1$ and $\\theta=\\pi$, so $-1=\\cos\\pi+i\\sin\\pi$. Both are on an axis, so no quadrant formula is needed.`
      },
      {
        q: `Multiply $z_1=3\\left(\\cos\\frac{\\pi}{6}+i\\sin\\frac{\\pi}{6}\\right)$ by $z_2=2\\left(\\cos\\frac{\\pi}{3}+i\\sin\\frac{\\pi}{3}\\right)$.`,
        a: `Multiply the moduli: $3\\times 2=6$. Add the arguments: $\\frac{\\pi}{6}+\\frac{\\pi}{3}=\\frac{\\pi}{6}+\\frac{2\\pi}{6}=\\frac{3\\pi}{6}=\\frac{\\pi}{2}$. So $z_1z_2=6\\left(\\cos\\frac{\\pi}{2}+i\\sin\\frac{\\pi}{2}\\right)=6i$.`
      },
      {
        q: `Explain from first principles why multiplying two complex numbers in polar form multiplies their moduli and adds their arguments.`,
        a: `Write $z_1z_2 = r_1(\\cos\\theta_1+i\\sin\\theta_1)\\cdot r_2(\\cos\\theta_2+i\\sin\\theta_2)$ and expand. Using $i^2=-1$, the real part collects into $\\cos\\theta_1\\cos\\theta_2-\\sin\\theta_1\\sin\\theta_2$, which is exactly the cosine angle addition identity for $\\cos(\\theta_1+\\theta_2)$. The imaginary part becomes the sine angle addition identity for $\\sin(\\theta_1+\\theta_2)$. The moduli $r_1$ and $r_2$ simply multiply out front, unaffected by the trig identities.`
      },
      {
        q: `The point $(-1, -\\sqrt{3})$ lies in quadrant III. Use $\\arctan$ and a quadrant correction to find its argument.`,
        a: `The ratio is $\\frac{y}{x} = \\frac{-\\sqrt{3}}{-1} = \\sqrt{3}$, and $\\arctan(\\sqrt{3}) = \\frac{\\pi}{3}$, the reference angle. Since $x<0$, add $\\pi$: $\\theta = \\pi + \\frac{\\pi}{3} = \\frac{4\\pi}{3}$.`
      },
      {
        q: `Use De Moivre's theorem to compute $(\\sqrt{3}+i)^6$.`,
        a: `$\\sqrt{3}+i$ has $r=2$ and $\\theta=\\frac{\\pi}{6}$. Raising to the sixth power: modulus becomes $2^6=64$, and angle becomes $6\\times\\frac{\\pi}{6}=\\pi$. So the result is $64(\\cos\\pi+i\\sin\\pi)=-64$.`
      },
      {
        q: `Divide $z_1=8\\left(\\cos\\frac{2\\pi}{3}+i\\sin\\frac{2\\pi}{3}\\right)$ by $z_2=4\\left(\\cos\\frac{\\pi}{3}+i\\sin\\frac{\\pi}{3}\\right)$.`,
        a: `Divide the moduli: $\\frac{8}{4}=2$. Subtract the arguments: $\\frac{2\\pi}{3}-\\frac{\\pi}{3}=\\frac{\\pi}{3}$. So $\\frac{z_1}{z_2}=2\\left(\\cos\\frac{\\pi}{3}+i\\sin\\frac{\\pi}{3}\\right)$.`
      },
      {
        q: `Before solving, predict how many distinct solutions $z^5=1$ has, and describe how they should be arranged.`,
        a: `There are exactly $5$ solutions, since the nth roots theorem guarantees $n$ distinct roots for $z^n=$ any nonzero number. They should be spaced evenly around the unit circle, $\\frac{2\\pi}{5}$ apart, forming a regular pentagon.`
      },
      {
        q: `Find the four fourth roots of $16$.`,
        a: `$16 = 16(\\cos 0 + i\\sin 0)$, so $r=16$, $\\theta=0$. Each root has modulus $\\sqrt[4]{16}=2$, and the four angles are $\\frac{0+2k\\pi}{4}=\\frac{k\\pi}{2}$ for $k=0,1,2,3$: $0$, $\\frac{\\pi}{2}$, $\\pi$, $\\frac{3\\pi}{2}$. The roots are $2$, $2i$, $-2$, and $-2i$.`
      },
      {
        q: `Explain from first principles why the $n$ nth roots of unity always sum to zero, for $n \\geq 2$.`,
        a: `Let $\\varepsilon$ be any nth root of unity other than $1$. The sum $1+\\varepsilon+\\varepsilon^2+\\dots+\\varepsilon^{n-1}$ is a geometric series equal to $\\frac{\\varepsilon^n-1}{\\varepsilon-1}$. Since $\\varepsilon$ is an nth root of unity, $\\varepsilon^n=1$, so the numerator is $0$, making the whole sum $0$.`
      },
      {
        q: `An angle measures $\\frac{5\\pi}{6}$. Find its reference angle and name its quadrant.`,
        a: `$\\frac{5\\pi}{6}$ is $150^{\\circ}$, which lies in quadrant II. In quadrant II the reference angle is $\\pi - \\theta = \\pi - \\frac{5\\pi}{6} = \\frac{\\pi}{6}$.`
      },
      {
        q: `Solve $Z^3+27=0$.`,
        a: `This means $Z^3=-27$. In polar form, $-27=27(\\cos\\pi+i\\sin\\pi)$. Each root has modulus $\\sqrt[3]{27}=3$, and the three angles are $\\frac{\\pi+2k\\pi}{3}$ for $k=0,1,2$: $\\frac{\\pi}{3}$, $\\pi$, $\\frac{5\\pi}{3}$. The roots are $3\\left(\\cos\\frac{\\pi}{3}+i\\sin\\frac{\\pi}{3}\\right)=\\frac{3}{2}+\\frac{3\\sqrt{3}}{2}i$, $-3$, and $\\frac{3}{2}-\\frac{3\\sqrt{3}}{2}i$.`
      },
      {
        q: `Find the reciprocal of $z=4\\left(\\cos\\frac{\\pi}{4}+i\\sin\\frac{\\pi}{4}\\right)$.`,
        a: `The reciprocal rule gives $\\frac{1}{z}=\\frac{1}{4}\\left(\\cos\\left(-\\frac{\\pi}{4}\\right)+i\\sin\\left(-\\frac{\\pi}{4}\\right)\\right)=\\frac{1}{4}\\left(\\frac{\\sqrt{2}}{2}-\\frac{\\sqrt{2}}{2}i\\right)=\\frac{\\sqrt{2}}{8}-\\frac{\\sqrt{2}}{8}i$.`
      },
      {
        q: `$z=1-i$ can be written with argument $-\\frac{\\pi}{4}$ or $\\frac{7\\pi}{4}$. Explain why both are correct, and give one more valid value.`,
        a: `Both describe the exact same direction, since $\\frac{7\\pi}{4}=-\\frac{\\pi}{4}+2\\pi$, a full turn apart. The extended argument set is $\\{-\\frac{\\pi}{4}+2k\\pi : k\\in\\mathbb{Z}\\}$, so another valid value is $-\\frac{\\pi}{4}-2\\pi=-\\frac{9\\pi}{4}$, using $k=-1$.`
      },
      {
        q: `Before checking, predict whether $-1$ is a primitive fourth root of unity.`,
        a: `No. $(-1)^2=1$ already, before reaching the fourth power, so $-1$ returns to $1$ too early to be primitive. A primitive fourth root must not return to $1$ at any power smaller than $4$.`
      },
      {
        q: `Compute $(1+i)^{-4}$ using De Moivre's theorem.`,
        a: `$1+i=\\sqrt{2}\\left(\\cos\\frac{\\pi}{4}+i\\sin\\frac{\\pi}{4}\\right)$. For $n=-4$: modulus becomes $(\\sqrt{2})^{-4}=\\frac{1}{4}$, and angle becomes $-4\\times\\frac{\\pi}{4}=-\\pi$. Since $\\cos(-\\pi)=-1$ and $\\sin(-\\pi)=0$, the result is $\\frac{1}{4}(-1+0)=-\\frac{1}{4}$.`
      },
      {
        q: `Find the cube roots of $z=8i$.`,
        a: `$8i=8\\left(\\cos\\frac{\\pi}{2}+i\\sin\\frac{\\pi}{2}\\right)$. Each root has modulus $\\sqrt[3]{8}=2$, and the three angles are $\\frac{\\frac{\\pi}{2}+2k\\pi}{3}$ for $k=0,1,2$: $\\frac{\\pi}{6}$, $\\frac{5\\pi}{6}$, $\\frac{3\\pi}{2}$. The roots are $2\\left(\\cos\\frac{\\pi}{6}+i\\sin\\frac{\\pi}{6}\\right)=\\sqrt{3}+i$, $-\\sqrt{3}+i$, and $-2i$.`
      },
      {
        q: `Solve $Z^4-1=0$ using the roots of unity.`,
        a: `$Z^4=1$, so the solutions are the four fourth roots of unity: $r=1$, angles $\\frac{2k\\pi}{4}=\\frac{k\\pi}{2}$ for $k=0,1,2,3$, giving $0, \\frac{\\pi}{2}, \\pi, \\frac{3\\pi}{2}$. The roots are $1$, $i$, $-1$, and $-i$, the same four special values worth memorizing from earlier.`
      },
      {
        q: `Explain from first principles why the nth roots of a complex number always form a regular polygon.`,
        a: `All $n$ roots share the exact same modulus $\\sqrt[n]{r}$, so they lie on one shared circle centered at the origin. Their arguments increase by a fixed step of $\\frac{2\\pi}{n}$ from one root to the next. Equal distance from the center plus equal angular spacing between neighbors is exactly the definition of a regular polygon's vertices.`
      },
      {
        q: `For $z=1+\\cos a+i\\sin a$, predict what happens to $z$ as $a$ approaches $0$.`,
        a: `As $a\\to 0$, $\\cos a\\to 1$ and $\\sin a\\to 0$, so $z\\to 1+1+0i=2$, a positive real number. This matches the formula $r=2\\cos\\frac{a}{2}$, since $2\\cos 0=2$, with argument $\\frac{a}{2}\\to 0$.`
      },
      {
        q: `Find the polar form of $z=-6$.`,
        a: `$z$ sits directly on the negative real axis, so $r=6$ and $\\theta=\\pi$, no quadrant formula needed. So $z=6(\\cos\\pi+i\\sin\\pi)$.`
      },
      {
        q: `Multiply three complex numbers at once: $z_1=2\\left(\\cos\\frac{\\pi}{6}+i\\sin\\frac{\\pi}{6}\\right)$, $z_2=1\\left(\\cos\\frac{\\pi}{3}+i\\sin\\frac{\\pi}{3}\\right)$, $z_3=3\\left(\\cos\\frac{\\pi}{2}+i\\sin\\frac{\\pi}{2}\\right)$.`,
        a: `The multiplication rule extends to any number of factors: multiply all moduli, add all arguments. Moduli: $2\\times 1\\times 3=6$. Arguments: $\\frac{\\pi}{6}+\\frac{\\pi}{3}+\\frac{\\pi}{2}=\\frac{\\pi}{6}+\\frac{2\\pi}{6}+\\frac{3\\pi}{6}=\\frac{6\\pi}{6}=\\pi$. So the product is $6(\\cos\\pi+i\\sin\\pi)=-6$.`
      },
      {
        q: `Use De Moivre's theorem to compute $(1-i)^6$.`,
        a: `$1-i=\\sqrt{2}\\left(\\cos\\frac{7\\pi}{4}+i\\sin\\frac{7\\pi}{4}\\right)$. Raising to the sixth power: modulus $(\\sqrt{2})^6=8$, angle $6\\times\\frac{7\\pi}{4}=\\frac{42\\pi}{4}=\\frac{21\\pi}{2}$, equivalent to $\\frac{\\pi}{2}$ after removing full turns. Since $\\cos\\frac{\\pi}{2}=0$ and $\\sin\\frac{\\pi}{2}=1$, the result is $8(0+i)=8i$.`
      },
      {
        q: `Show that $\\varepsilon=\\cos\\frac{2\\pi}{3}+i\\sin\\frac{2\\pi}{3}$ generates all three cube roots of unity as powers of itself.`,
        a: `$\\varepsilon^0=1$. $\\varepsilon^1=\\varepsilon=-\\frac{1}{2}+\\frac{\\sqrt{3}}{2}i$. $\\varepsilon^2=\\cos\\frac{4\\pi}{3}+i\\sin\\frac{4\\pi}{3}=-\\frac{1}{2}-\\frac{\\sqrt{3}}{2}i$. These three values are exactly the three cube roots of unity, so $\\varepsilon$ is a primitive cube root that generates the whole set as its powers.`
      },
      {
        q: `A student claims $z=3\\left(\\cos\\frac{\\pi}{6}+i\\sin\\frac{\\pi}{6}\\right)$ and $w=-3\\left(\\cos\\frac{\\pi}{6}+i\\sin\\frac{\\pi}{6}\\right)$ are the same complex number, since they list the same angle. Explain the error.`,
        a: `Polar form requires the modulus to be nonnegative by convention, so writing $-3$ as a modulus already breaks the rules. Rewriting $w$ correctly means factoring out $-1$ and shifting the angle by $\\pi$: $w=3\\left(\\cos\\left(\\frac{\\pi}{6}+\\pi\\right)+i\\sin\\left(\\frac{\\pi}{6}+\\pi\\right)\\right)=3\\left(\\cos\\frac{7\\pi}{6}+i\\sin\\frac{7\\pi}{6}\\right)$, a completely different point from $z$.`
      },
      {
        q: `Solve $Z^2+4=0$ as a binomial equation.`,
        a: `$Z^2=-4$. In polar form, $-4=4(\\cos\\pi+i\\sin\\pi)$. Each root has modulus $\\sqrt{4}=2$, and the two angles are $\\frac{\\pi+2k\\pi}{2}$ for $k=0,1$: $\\frac{\\pi}{2}$ and $\\frac{3\\pi}{2}$. The roots are $2\\left(\\cos\\frac{\\pi}{2}+i\\sin\\frac{\\pi}{2}\\right)=2i$ and $2\\left(\\cos\\frac{3\\pi}{2}+i\\sin\\frac{3\\pi}{2}\\right)=-2i$, matching the familiar square roots of $-4$.`
      },
      {
        q: `Explain from first principles why the equality condition for polar form needs both equal moduli and arguments differing by a multiple of $2\\pi$, rather than just equal arguments.`,
        a: `Two complex numbers are equal only when they are literally the same point in the plane. Being the same point requires the same distance from the origin, which forces equal moduli, and the same direction. Cosine and sine repeat every $2\\pi$. So "same direction" allows the raw argument values to differ by any whole number of full turns, while still pointing the same way.`
      },
      {
        q: `Before solving, predict the sign of $i^4$ using De Moivre's theorem and the polar form of $i$.`,
        a: `$i=\\cos\\frac{\\pi}{2}+i\\sin\\frac{\\pi}{2}$. Raising to the fourth power multiplies the argument by $4$: $4\\times\\frac{\\pi}{2}=2\\pi$, a full turn, and the modulus stays $1^4=1$. So $i^4=\\cos 2\\pi+i\\sin 2\\pi=1$, positive, matching the well known fact that $i^4=1$.`
      },
      {
        q: `Explain why proving De Moivre's theorem for positive integers automatically extends it to negative integers, once the reciprocal rule is known.`,
        a: `For a negative exponent $n=-m$, $z^{-m}=\\frac{1}{z^m}$. Since $z^m=r^m(\\cos m\\theta+i\\sin m\\theta)$ by the positive-integer case, the reciprocal rule turns this into $r^{-m}(\\cos(-m\\theta)+i\\sin(-m\\theta))$, which is exactly $z^n=r^n(\\cos n\\theta+i\\sin n\\theta)$ with $n=-m$ substituted in. No separate proof is required for negative exponents.`
      },
      {
        q: `Explain why any binomial equation $Z^n+a=0$ can be solved with the same nth roots formula used for $Z^n=z_0$.`,
        a: `$Z^n+a=0$ rearranges directly to $Z^n=-a$, which is exactly the shape $Z^n=z_0$ with $z_0=-a$. Writing $-a$ in polar form and applying the standard nth roots formula solves it, with no separate method needed for the "plus a constant" version of the equation.`
      },
      {
        q: `Before computing, predict the argument of the positive real number $z=5$.`,
        a: `$\\theta=0$. A positive real number lies exactly on the positive real axis, so it needs no quadrant formula: $z=5(\\cos 0+i\\sin 0)$.`
      },
      {
        q: `Before dividing, predict whether the quotient's argument will be larger or smaller than the dividend's argument, when dividing by a complex number with a positive argument.`,
        a: `Smaller. The division rule subtracts the divisor's argument from the dividend's argument, so dividing by a number with positive argument always rotates the result backward.`
      },
      {
        q: `Before solving, predict how many roots $Z^4+1=0$ has.`,
        a: `Exactly $4$. The equation rearranges to $Z^4=-1$, and the nth roots theorem guarantees exactly $4$ distinct fourth roots of $-1$, matching the degree of the polynomial.`
      }
    ],
    reference: {
      category: 'Quick Reference',
      title: "Polar Form and De Moivre's Theorem",
      sections: [
        <>
          <h2>Trigonometry Essentials</h2>
          <div className="ref-formula">
            <span className="ref-formula-name">{`Radian and degree conversion`}</span>
            <div className="ref-formula-eq">{`$$180^{\\circ} = \\pi \\text{ rad}, \\quad \\text{degrees} = \\text{rad}\\times\\frac{180}{\\pi}, \\quad \\text{rad} = \\text{degrees}\\times\\frac{\\pi}{180}$$`}</div>
            <p className="ref-formula-desc">{`When to use: switching an angle between degrees and radians. A full turn is $2\\pi$ radians.`}</p>
          </div>
          <div className="ref-formula">
            <span className="ref-formula-name">{`Special-angle values`}</span>
            <table className="lrn-table">
              <thead>
                <tr>
                  <th>{`$\\theta$`}</th>
                  <th>{`$\\cos\\theta$`}</th>
                  <th>{`$\\sin\\theta$`}</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{`$0$`}</td>
                  <td>{`$1$`}</td>
                  <td>{`$0$`}</td>
                </tr>
                <tr>
                  <td>{`$\\frac{\\pi}{6}$`}</td>
                  <td>{`$\\frac{\\sqrt{3}}{2}$`}</td>
                  <td>{`$\\frac{1}{2}$`}</td>
                </tr>
                <tr>
                  <td>{`$\\frac{\\pi}{4}$`}</td>
                  <td>{`$\\frac{\\sqrt{2}}{2}$`}</td>
                  <td>{`$\\frac{\\sqrt{2}}{2}$`}</td>
                </tr>
                <tr>
                  <td>{`$\\frac{\\pi}{3}$`}</td>
                  <td>{`$\\frac{1}{2}$`}</td>
                  <td>{`$\\frac{\\sqrt{3}}{2}$`}</td>
                </tr>
                <tr>
                  <td>{`$\\frac{\\pi}{2}$`}</td>
                  <td>{`$0$`}</td>
                  <td>{`$1$`}</td>
                </tr>
              </tbody>
            </table>
            <p className="ref-formula-desc">{`When to use: reading off cosine and sine at the common angles when converting to and from polar form.`}</p>
          </div>
          <div className="ref-formula">
            <span className="ref-formula-name">{`Arctan range`}</span>
            <div className="ref-formula-eq">{`$$-\\frac{\\pi}{2} < \\arctan(x) < \\frac{\\pi}{2}$$`}</div>
            <p className="ref-formula-desc">{`When to use: recalling that arctan returns only quadrant I or IV angles, so quadrants II and III need $+\\pi$.`}</p>
          </div>
          <div className="ref-formula">
            <span className="ref-formula-name">{`Angle-sum identities`}</span>
            <div className="ref-formula-eq">{`$$\\cos(A+B) = \\cos A\\cos B - \\sin A\\sin B$$`}</div>
            <div className="ref-formula-eq">{`$$\\sin(A+B) = \\sin A\\cos B + \\cos A\\sin B$$`}</div>
            <p className="ref-formula-desc">{`When to use: proving the multiplication rule, or combining two angles into one.`}</p>
          </div>
          <div className="ref-formula">
            <span className="ref-formula-name">{`Half-angle identities`}</span>
            <div className="ref-formula-eq">{`$$1 + \\cos a = 2\\cos^2\\frac{a}{2}, \\quad \\sin a = 2\\sin\\frac{a}{2}\\cos\\frac{a}{2}$$`}</div>
            <p className="ref-formula-desc">{`When to use: turning $1+\\cos a + i\\sin a$ into polar form.`}</p>
          </div>
        </>,
        <>
          <h2>Polar Coordinates and the Argument</h2>
          <div className="ref-formula">
            <span className="ref-formula-name">{`Modulus`}</span>
            <div className="ref-formula-eq">{`$$r = \\sqrt{x^2+y^2}$$`}</div>
            <p className="ref-formula-desc">{`When to use: converting a Cartesian point $(x,y)$ to its distance from the origin.`}</p>
          </div>
          <div className="ref-formula">
            <span className="ref-formula-name">{`Argument, by quadrant`}</span>
            <div className="ref-formula-eq">{`$$\\theta = \\begin{cases}\\arctan(y/x) & x>0,\\ y\\geq 0 \\\\ \\pi+\\arctan(y/x) & x<0 \\\\ 2\\pi+\\arctan(y/x) & x>0,\\ y<0 \\\\ \\pi/2 & x=0,\\ y>0 \\\\ 3\\pi/2 & x=0,\\ y<0\\end{cases}$$`}</div>
            <p className="ref-formula-desc">{`When to use: finding the principal argument $\\theta \\in [0, 2\\pi)$ of any complex number. Always check the sign of $x$ and $y$ first, arctan alone cannot tell quadrants apart.`}</p>
          </div>
          <div className="ref-grid">
            <div className="ref-item">
              <span className="ref-formula-name">{`Principal argument`}</span>
              <p>{`Single value in $[0, 2\\pi)$.`}</p>
            </div>
            <div className="ref-item">
              <span className="ref-formula-name">{`Extended argument`}</span>
              <p>{`$\\{\\theta+2k\\pi : k\\in\\mathbb{Z}\\}$, the full set of valid angles.`}</p>
            </div>
          </div>
        </>,
        <>
          <h2>Polar Form of a Complex Number</h2>
          <div className="ref-formula">
            <span className="ref-formula-name">{`Polar form`}</span>
            <div className="ref-formula-eq">{`$$z = r(\\cos\\theta + i\\sin\\theta)$$`}</div>
            <p className="ref-formula-desc">{`When to use: before multiplying, dividing, raising to a power, or finding roots of a complex number.`}</p>
          </div>
          <div className="ref-formula">
            <span className="ref-formula-name">{`Equality condition`}</span>
            <div className="ref-formula-eq">{`$$r_1(\\cos\\theta_1+i\\sin\\theta_1) = r_2(\\cos\\theta_2+i\\sin\\theta_2) \\iff r_1=r_2,\\ \\theta_1-\\theta_2=2k\\pi$$`}</div>
            <p className="ref-formula-desc">{`When to use: proving two polar-form expressions represent the same complex number.`}</p>
          </div>
          <table className="lrn-table">
            <thead>
              <tr>
                <th>{`Number`}</th>
                <th>{`$r$`}</th>
                <th>{`$\\theta$`}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{`$1$`}</td>
                <td>{`$1$`}</td>
                <td>{`$0$`}</td>
              </tr>
              <tr>
                <td>{`$i$`}</td>
                <td>{`$1$`}</td>
                <td>{`$\\pi/2$`}</td>
              </tr>
              <tr>
                <td>{`$-1$`}</td>
                <td>{`$1$`}</td>
                <td>{`$\\pi$`}</td>
              </tr>
              <tr>
                <td>{`$-i$`}</td>
                <td>{`$1$`}</td>
                <td>{`$3\\pi/2$`}</td>
              </tr>
            </tbody>
          </table>
        </>,
        <>
          <h2>Multiplication and Division</h2>
          <div className="ref-formula">
            <span className="ref-formula-name">{`Multiplication`}</span>
            <div className="ref-formula-eq">{`$$z_1z_2 = r_1r_2\\big(\\cos(\\theta_1+\\theta_2)+i\\sin(\\theta_1+\\theta_2)\\big)$$`}</div>
            <p className="ref-formula-desc">{`When to use: multiplying complex numbers without expanding brackets. Multiply moduli, add arguments.`}</p>
          </div>
          <div className="ref-formula">
            <span className="ref-formula-name">{`Division`}</span>
            <div className="ref-formula-eq">{`$$\\frac{z_1}{z_2} = \\frac{r_1}{r_2}\\big(\\cos(\\theta_1-\\theta_2)+i\\sin(\\theta_1-\\theta_2)\\big)$$`}</div>
            <p className="ref-formula-desc">{`When to use: dividing complex numbers. Divide moduli, subtract arguments.`}</p>
          </div>
          <div className="ref-formula">
            <span className="ref-formula-name">{`Reciprocal`}</span>
            <div className="ref-formula-eq">{`$$\\frac{1}{z} = \\frac{1}{r}\\big(\\cos(-\\theta)+i\\sin(-\\theta)\\big)$$`}</div>
            <p className="ref-formula-desc">{`When to use: finding $1/z$ directly, the special case of division with $z_1=1$.`}</p>
          </div>
        </>,
        <>
          <h2>De Moivre's Theorem</h2>
          <div className="ref-formula">
            <span className="ref-formula-name">{`De Moivre's theorem, any integer $n$`}</span>
            <div className="ref-formula-eq">{`$$z^n = r^n(\\cos n\\theta + i\\sin n\\theta)$$`}</div>
            <p className="ref-formula-desc">{`When to use: raising a complex number to any integer power, positive or negative, without repeated multiplication.`}</p>
          </div>
          <div className="ref-item">
            <span className="ref-formula-name">{`Named after`}</span>
            <p>{`Abraham de Moivre (1667 to 1754), French mathematician.`}</p>
          </div>
        </>,
        <>
          <h2>nth Roots</h2>
          <div className="ref-formula">
            <span className="ref-formula-name">{`nth roots of $z=r(\\cos\\theta+i\\sin\\theta)$`}</span>
            <div className="ref-formula-eq">{`$$w_k = \\sqrt[n]{r}\\left(\\cos\\frac{\\theta+2k\\pi}{n}+i\\sin\\frac{\\theta+2k\\pi}{n}\\right),\\ k=0,\\dots,n-1$$`}</div>
            <p className="ref-formula-desc">{`When to use: finding every complex solution of $z^n = $ a given number. Produces exactly $n$ distinct roots, spaced $\\frac{2\\pi}{n}$ apart, forming a regular $n$-gon on a circle of radius $\\sqrt[n]{r}$.`}</p>
          </div>
          <div className="ref-item">
            <span className="ref-formula-name">{`Degrees variant`}</span>
            <p>{`$w_k = \\sqrt[n]{r}\\left(\\cos\\frac{\\theta+360^{\\circ}k}{n}+i\\sin\\frac{\\theta+360^{\\circ}k}{n}\\right)$, identical rule with $360^{\\circ}$ in place of $2\\pi$.`}</p>
          </div>
        </>,
        <>
          <h2>Roots of Unity</h2>
          <div className="ref-formula">
            <span className="ref-formula-name">{`nth roots of unity`}</span>
            <div className="ref-formula-eq">{`$$\\varepsilon_k = \\cos\\frac{2k\\pi}{n}+i\\sin\\frac{2k\\pi}{n},\\ k=0,\\dots,n-1$$`}</div>
            <p className="ref-formula-desc">{`When to use: solving $z^n=1$ specifically, the special case of the nth roots formula with $r=1$, $\\theta=0$.`}</p>
          </div>
          <div className="ref-grid">
            <div className="ref-item">
              <span className="ref-formula-name">{`Primitive root`}</span>
              <p>{`$\\varepsilon_k^m \\neq 1$ for every positive integer $m<n$. Generates all $n$ roots as $\\varepsilon^0,\\dots,\\varepsilon^{n-1}$.`}</p>
            </div>
            <div className="ref-item">
              <span className="ref-formula-name">{`Sum of all roots`}</span>
              <p>{`$1+\\varepsilon+\\dots+\\varepsilon^{n-1}=0$ for $n\\geq 2$.`}</p>
            </div>
          </div>
        </>,
        <>
          <h2>Binomial Equations</h2>
          <div className="ref-formula">
            <span className="ref-formula-name">{`Binomial equation`}</span>
            <div className="ref-formula-eq">{`$$Z^n + a = 0 \\iff Z^n = -a$$`}</div>
            <p className="ref-formula-desc">{`When to use: solving any equation of this shape. Write $-a$ in polar form, then apply the nth roots formula directly.`}</p>
          </div>
        </>
      ]
    },
    customCss: null
  }
  return config
}

export default function PolarFormAndDeMoivresTheorem() {
  const config = useConfig()
  return <LearningTemplate config={config} />
}
