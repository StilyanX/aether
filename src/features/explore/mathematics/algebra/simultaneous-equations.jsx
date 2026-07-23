import { LearningTemplate } from '../../../../components/learning/learning-template'
import { LineMeetsParabolaViz, CircleTangentLinesViz } from '../../../../components/viz'

// Config

function useConfig() {
  const config = {
    cssPrefix: 'simq',
    documentTitle: 'Simultaneous Equations - AETHER',
    learning: {
      groupTitle: 'Equations and Inequalities',
      category: 'Module 07',
      title: 'Simultaneous Equations',
      subtitle:
        'Solving one linear and one quadratic equation together, and the geometry of where a line meets a curve',
      sections: [
        <>
          <div className="lrn-header">
            <div>
              <h2>Two Conditions at Once</h2>
            </div>
          </div>

          <p>{`A single equation in two unknowns has many answers. The line $y = x + 1$ is true at $(0, 1)$, at $(1, 2)$, at $(2, 3)$, and at every other point on the line. One equation cannot pin down both numbers.`}</p>

          <p>{`A simultaneous system gives you two equations and asks for the pair $(x, y)$ that satisfies both at the same time. Each equation rules out almost every pair. Only where the two demands agree do you get a solution.`}</p>

          <div className="lrn-definition">
            <span className="lrn-definition-term">Simultaneous equations</span>
            <div className="lrn-definition-desc">
              <p>{`Two or more equations that must all hold for the same values of the unknowns. A solution is a pair $(x, y)$ that makes every equation true at once. Solving means finding every such pair, or proving none exists.`}</p>
            </div>
          </div>

          <p>{`Two-linear systems, both equations linear, are taught in **Linear Equations** under "Systems of Equations: Two Variables", using substitution or elimination. This page handles the harder case where one equation has a squared term.`}</p>

          <p>{`On this page one equation is linear and the other is quadratic. Linear means no powers higher than one, so the graph is a straight line. Quadratic means an $x^2$ (or $y^2$) appears, so the graph bends. The linear equation looks like $y = mx + c$ or $ax + by = c$. The quadratic one carries a squared term: a parabola (the U-shaped curve of an $x^2$ equation) like $y = x^2 - 3x + 2$, or a circle like $x^2 + y^2 = 13$. The equation $x^2 + y^2 = 13$ is a circle centred at the origin; the right-hand side is the radius *squared*, not the radius.`}</p>

          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>{`Picture a straight line and a parabola drawn on the same axes. How many points can they share? Write your guess before reading on.`}</p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>{`At most two. A straight line can cut a parabola twice, touch it once, or miss it entirely. Never three times. By the end of this page you will see why two is the ceiling, and how to tell which case you are in before solving.`}</p>
            </details>
          </div>

          <p>{`Why two answers, not one? You already know a quadratic equation has at most two roots. Combining a line with a curve produces a single quadratic to solve, so the same ceiling of two carries straight over. That is the thread running through everything below.`}</p>

          <div className="lrn-insight">
            <strong>A solution is a pair, not a number.</strong>
            {` When you solve $x^2 - 5x + 6 = 0$ you report $x = 2$ or $x = 3$. Here you report points: $(2, 3)$ and $(3, 2)$. Carry every $x$ you find back to get its matching $y$. An $x$ without its $y$ is half an answer.`}
          </div>
        </>,

        <>
          <div className="lrn-header">
            <div>
              <h2>The Substitution Method</h2>
            </div>
          </div>

          <p>{`You already know substitution from **Linear Equations**, replace one variable with an expression for it, turning the system into one equation in one unknown. The linear equation has no squared term to fight, so always rearrange and substitute *from* the linear *into* the quadratic. The new wrinkle here: the equation you substitute into is quadratic, not linear, so the result is a quadratic to solve.`}</p>

          <div className="lrn-steps">
            <div className="lrn-step">
              <span className="lrn-step-title">
                Rearrange the linear, substitute into the quadratic
              </span>
              <div className="lrn-step-content">
                <p>{`Write the linear equation as $y = \\dots$ or $x = \\dots$. Paste that expression into the quadratic. Now you have one quadratic in one unknown.`}</p>
              </div>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">Solve the quadratic and back-substitute</span>
              <div className="lrn-step-content">
                <p>{`Tidy it into standard form (everything on one side, set equal to zero) and solve it the way you already know: factor, complete the square, or use the formula. Put each $x$ value back into the linear equation to find its partner $y$.`}</p>
              </div>
            </div>
          </div>

          <p>{`Here is the method on a parabola. Solve $y = x^2 - 4x + 5$ together with $y = 2x - 3$.`}</p>

          <div className="lrn-proof">
            <span className="lrn-proof-header">Worked example</span>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">1.</span>
              <div className="lrn-proof-step-content">{`The linear equation already gives $y$: $y = 2x - 3$.`}</div>
            </div>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">2.</span>
              <div className="lrn-proof-step-content">{`Both equal $y$, so set them equal: $x^2 - 4x + 5 = 2x - 3$.`}</div>
            </div>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">3.</span>
              <div className="lrn-proof-step-content">{`Bring everything to one side: $x^2 - 6x + 8 = 0$.`}</div>
            </div>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">4.</span>
              <div className="lrn-proof-step-content">{`Factor: $(x - 2)(x - 4) = 0$, so $x = 2$ or $x = 4$.`}</div>
            </div>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">5.</span>
              <div className="lrn-proof-step-content">{`Back-substitute into $y = 2x - 3$. At $x = 2$: $y = 1$. At $x = 4$: $y = 5$.`}</div>
            </div>
            <div className="lrn-qed">{`Solutions: $(2, 1)$ and $(4, 5)$.`}</div>
          </div>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>{`Why is it safe to set $x^2 - 4x + 5$ equal to $2x - 3$ in step 2?`}</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>{`Both expressions equal $y$ for a shared solution. If $A = y$ and $B = y$ at the same point, then $A = B$ there. Setting them equal removes $y$ and leaves an equation in $x$ alone. You are not inventing a new fact; you are using the one the two equations already share.`}</p>
            </details>
          </div>

          <p>{`The method does not care whether the curve is a parabola or a circle. Recall the circle equation $x^2 + y^2 = r^2$. It describes the circle centred at the origin with radius $r$, and the right-hand side is *radius squared*, not radius. So $x^2 + y^2 = 13$ has radius $r = \\sqrt{13}$. When the quadratic has both $x^2$ and $y^2$, substitute the linear expression and the squared term expands. Solve $x + y = 5$ together with $x^2 + y^2 = 13$.`}</p>

          <div className="lrn-proof">
            <span className="lrn-proof-header">Worked example</span>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">1.</span>
              <div className="lrn-proof-step-content">{`Rearrange the linear equation: $y = 5 - x$.`}</div>
            </div>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">2.</span>
              <div className="lrn-proof-step-content">{`Substitute into the circle: $x^2 + (5 - x)^2 = 13$.`}</div>
            </div>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">3.</span>
              <div className="lrn-proof-step-content">{`Expand $(5 - x)^2 = 25 - 10x + x^2$, so $2x^2 - 10x + 25 = 13$.`}</div>
            </div>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">4.</span>
              <div className="lrn-proof-step-content">{`Simplify: $2x^2 - 10x + 12 = 0$, then divide by 2 to get $x^2 - 5x + 6 = 0$.`}</div>
            </div>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">5.</span>
              <div className="lrn-proof-step-content">{`Factor: $(x - 2)(x - 3) = 0$, so $x = 2$ or $x = 3$.`}</div>
            </div>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">6.</span>
              <div className="lrn-proof-step-content">{`Back-substitute into $y = 5 - x$. At $x = 2$: $y = 3$. At $x = 3$: $y = 2$.`}</div>
            </div>
            <div className="lrn-qed">{`Solutions: $(2, 3)$ and $(3, 2)$. Check: $2^2 + 3^2 = 13$. Both fit.`}</div>
          </div>

          <div className="lrn-callout lrn-warning">
            <span className="lrn-callout-label">Warning</span>
            <p>{`Never substitute into the linear equation. Substitute into the quadratic. If you replace $y$ in $x + y = 5$ using $y = 5 - x$, you get $5 = 5$: a true statement that tells you nothing. The new information lives in the quadratic equation.`}</p>
          </div>

          <div className="lrn-faded">
            <div className="lrn-faded-phase">
              <span className="lrn-faded-label">COMPLETE EXAMPLE</span>
              <p>{`Solve $y = x^2$ and $y = x + 2$.`}</p>
              <ol className="lrn-list">
                <li>{`Set equal: $x^2 = x + 2$.`}</li>
                <li>{`Standard form: $x^2 - x - 2 = 0$.`}</li>
                <li>{`Factor: $(x - 2)(x + 1) = 0$, so $x = 2$ or $x = -1$.`}</li>
                <li>{`Back-substitute: $(2, 4)$ and $(-1, 1)$.`}</li>
              </ol>
            </div>
            <div className="lrn-faded-phase">
              <span className="lrn-faded-label">YOUR TURN, PARTIAL</span>
              <p>{`Solve $y = x^2 - 1$ and $y = x + 1$. The first two steps are done; finish the rest.`}</p>
              <ol className="lrn-list">
                <li>{`Set equal: $x^2 - 1 = x + 1$.`}</li>
                <li>{`Standard form: $x^2 - x - 2 = 0$.`}</li>
                <li>{`Factor and solve for $x$: ____`}</li>
                <li>{`Back-substitute to find each $y$: ____`}</li>
              </ol>
            </div>
            <div className="lrn-faded-phase">
              <span className="lrn-faded-label">INDEPENDENT PRACTICE</span>
              <p>{`Solve $y = x^2 + 2x$ and $y = x + 6$ on your own, start to finish.`}</p>
            </div>
          </div>
        </>,

        <>
          <div className="lrn-header">
            <div>
              <h2>Two Solutions, One, or None</h2>
            </div>
          </div>

          <p>{`Substitution always lands you on one quadratic equation in a single unknown. So the question "how many solutions does the system have?" becomes "how many roots does that quadratic have?" You already have the tool that answers it.`}</p>

          <p>{`Recall $D = b^2 - 4ac$ from **Quadratic Equations**, the discriminant is the single number built from a quadratic's coefficients, and it counts real roots without solving. Compute $D$ from the quadratic after substituting; skip the factoring entirely. The headline of this section is the new claim: *the discriminant of the substituted quadratic counts the system's intersections one-for-one*.`}</p>

          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Two intersection points</span>
              <p>{`$D > 0$. The line and the curve meet at two separate points.`}</p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Tangent (one point)</span>
              <p>{`$D = 0$. The line touches the curve at a single point.`}</p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">No intersection</span>
              <p>{`$D < 0$. The line and the curve never meet.`}</p>
            </div>
          </div>

          <p>{`Here is the "none" case in full. Solve $y = x^2$ together with $y = x - 3$.`}</p>

          <div className="lrn-proof">
            <span className="lrn-proof-header">Worked example</span>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">1.</span>
              <div className="lrn-proof-step-content">{`Set equal: $x^2 = x - 3$, so $x^2 - x + 3 = 0$.`}</div>
            </div>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">2.</span>
              <div className="lrn-proof-step-content">{`Here $a = 1$, $b = -1$, $c = 3$. Compute $D = (-1)^2 - 4(1)(3) = 1 - 12 = -11$.`}</div>
            </div>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">3.</span>
              <div className="lrn-proof-step-content">{`$D < 0$, so the quadratic has no real roots.`}</div>
            </div>
            <div className="lrn-qed">{`No solution. The line and the parabola never meet.`}</div>
          </div>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>{`Why does the discriminant of the substituted quadratic count solutions of the whole two-equation system?`}</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>{`Each root of the substituted quadratic is an $x$ that satisfies both equations at once. Back-substitution then gives exactly one $y$ for that $x$ from the linear equation. So roots and solution points match one for one. Count the roots and you have counted the solutions.`}</p>
            </details>
          </div>
        </>,

        <>
          <div className="lrn-header">
            <div>
              <h2>Where a Line Meets a Curve</h2>
            </div>
          </div>

          <p>{`Every solution is a point both graphs pass through. So solving the system is the same as finding where the line crosses the curve. The algebra and the picture are two views of one thing.`}</p>

          <p>{`This is why the count of solutions matches the picture exactly. Two solutions: the line is a *secant* (a straight line that crosses a curve at two distinct points), slicing through the curve at two points. One solution: the line just grazes the curve. No solution: the line sails past, never touching.`}</p>

          <div className="lrn-definition">
            <span className="lrn-definition-term">Tangent line (first general definition)</span>
            <div className="lrn-definition-desc">
              <p>{`So far you have only met "tangent to the $x$-axis" for a parabola. This is the wider idea: a tangent line touches a curve at exactly one point without crossing it there. For a line meeting a parabola or circle, "tangent" means the system has exactly one solution, which means the substituted quadratic has $D = 0$.`}</p>
            </div>
          </div>

          <div className="lrn-insight">
            <strong>Tangent and $D = 0$ say the same thing.</strong>
            {` A repeated root is two solutions that have merged into one. Geometrically, the two crossing points of a secant slide together until they coincide: the line stops cutting and starts touching. That single touching point is the tangent point. So "$D = 0$" is the algebra word and "tangent" is the picture word for one event.`}
          </div>

          <p>{`Watch the merge in numbers. Solve $y = x^2$ with $y = 2x - 1$.`}</p>

          <div className="lrn-proof">
            <span className="lrn-proof-header">Worked example</span>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">1.</span>
              <div className="lrn-proof-step-content">{`Set equal: $x^2 = 2x - 1$, so $x^2 - 2x + 1 = 0$.`}</div>
            </div>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">2.</span>
              <div className="lrn-proof-step-content">{`Discriminant: $D = (-2)^2 - 4(1)(1) = 4 - 4 = 0$.`}</div>
            </div>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">3.</span>
              <div className="lrn-proof-step-content">{`$D = 0$, so one repeated root. Factor: $(x - 1)^2 = 0$, giving $x = 1$.`}</div>
            </div>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">4.</span>
              <div className="lrn-proof-step-content">{`Back-substitute: $y = 2(1) - 1 = 1$.`}</div>
            </div>
            <div className="lrn-qed">{`One solution: $(1, 1)$. The line is tangent to the parabola there.`}</div>
          </div>

          <div className="lrn-graph">
            <LineMeetsParabolaViz />
          </div>

          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>{`Picture a line and a circle on the same axes. What are the possible numbers of intersection points?`}</p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>{`Same answer, same reason: the substituted equation is still quadratic. Two points: the line cuts a *chord*, a straight segment whose two endpoints lie on the circle. One point: tangent. None: the line misses the circle.`}</p>
            </details>
          </div>
        </>,

        <>
          <div className="lrn-header">
            <div>
              <h2>Finding the Unknown Constant</h2>
            </div>
          </div>

          <p>{`The hardest and most useful problems run the logic backward. Instead of getting a line and asking where it meets a curve, you flip it. The problem tells you how the line meets the curve and asks you to find the line. The condition "tangent" becomes the equation $D = 0$, which you solve for the unknown.`}</p>

          <p>{`Find the value of $c$ for which the line $y = x + c$ is tangent to the parabola $y = x^2$.`}</p>

          <div className="lrn-proof">
            <span className="lrn-proof-header">Worked example</span>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">1.</span>
              <div className="lrn-proof-step-content">{`Substitute: $x^2 = x + c$, so $x^2 - x - c = 0$.`}</div>
            </div>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">2.</span>
              <div className="lrn-proof-step-content">{`Here $a = 1$, $b = -1$, and the constant term is $-c$. Discriminant: $D = (-1)^2 - 4(1)(-c) = 1 + 4c$.`}</div>
            </div>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">3.</span>
              <div className="lrn-proof-step-content">{`Tangent means $D = 0$: set $1 + 4c = 0$.`}</div>
            </div>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">4.</span>
              <div className="lrn-proof-step-content">{`Solve: $c = -\\dfrac{1}{4}$.`}</div>
            </div>
            <div className="lrn-qed">{`The line $y = x - \\dfrac{1}{4}$ is the one tangent line of this family.`}</div>
          </div>

          <p>{`The same move handles a circle, and there the geometry can give two answers. Find every value of $c$ for which $y = x + c$ is tangent to the circle $x^2 + y^2 = 8$.`}</p>

          <div className="lrn-proof">
            <span className="lrn-proof-header">Worked example</span>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">1.</span>
              <div className="lrn-proof-step-content">{`Substitute: $x^2 + (x + c)^2 = 8$.`}</div>
            </div>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">2.</span>
              <div className="lrn-proof-step-content">{`Expand and tidy: $2x^2 + 2cx + (c^2 - 8) = 0$.`}</div>
            </div>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">3.</span>
              <div className="lrn-proof-step-content">{`Discriminant: $D = (2c)^2 - 4(2)(c^2 - 8) = 4c^2 - 8c^2 + 64 = 64 - 4c^2$.`}</div>
            </div>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">4.</span>
              <div className="lrn-proof-step-content">{`Set $D = 0$: $64 - 4c^2 = 0$, so $c^2 = 16$ and $c = 4$ or $c = -4$.`}</div>
            </div>
            <div className="lrn-qed">{`Two tangent lines: $y = x + 4$ and $y = x - 4$, one on each side of the circle.`}</div>
          </div>

          <div className="lrn-graph">
            <CircleTangentLinesViz />
          </div>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>{`Why does the circle give two tangent values of $c$ while the parabola gave only one?`}</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>{`The lines $y = x + c$ all share the same slope; changing $c$ slides the line up and down. A circle is closed. A sliding line of fixed slope touches it twice: once on the upper side, once on the lower. The discriminant equation came out quadratic in $c$, so it returned two values. For the parabola the discriminant was linear in $c$, giving one. The shape of the curve decides the number.`}</p>
            </details>
          </div>

          <div className="lrn-callout lrn-tip">
            <span className="lrn-callout-label">Tip</span>
            <p>{`The discriminant condition flexes to fit the question. Tangent: $D = 0$. Two intersection points: $D > 0$. The line misses the curve: $D < 0$. Each phrasing is a statement about $D$, which you then solve for the unknown.`}</p>
          </div>
        </>
      ]
    },

    practice: [
      {
        q: 'Solve the system $y = x^2 + x - 3$ and $y = 3x$.',
        a: 'Set equal: $x^2 + x - 3 = 3x$, so $x^2 - 2x - 3 = 0$. Factor: $(x-3)(x+1)=0$, so $x = 3$ or $x = -1$. Back-substitute into $y = 3x$: the points are $(3, 9)$ and $(-1, -3)$.'
      },
      {
        q: 'Which equation do you substitute from, and which do you substitute into? Why?',
        a: 'Rearrange the linear equation to give one variable, then substitute that into the quadratic equation. The linear equation has no squared term, so it isolates a variable cleanly. Substituting into the linear equation would just produce a true statement with no new information.'
      },
      {
        q: 'Solve $x - y = 1$ and $x^2 + y^2 = 25$.',
        a: 'From the linear equation, $y = x - 1$. Substitute: $x^2 + (x-1)^2 = 25$, which expands to $2x^2 - 2x + 1 = 25$, then $x^2 - x - 12 = 0$. Factor: $(x-4)(x+3)=0$, so $x = 4$ or $x = -3$. The points are $(4, 3)$ and $(-3, -4)$.'
      },
      {
        q: 'Without solving fully, how many solutions does $y = x^2 + 2$ and $y = -x$ have?',
        a: 'Set equal: $x^2 + 2 = -x$, so $x^2 + x + 2 = 0$. Compute $D = 1^2 - 4(1)(2) = 1 - 8 = -7$. Since $D < 0$, there are no real roots, so the system has no solution. The line and parabola never meet.'
      },
      {
        q: 'A line meets a parabola. Predict the largest number of intersection points possible, and explain.',
        a: 'At most two. Substituting the line into the parabola gives a quadratic, and a quadratic has at most two roots. A third meeting point would need a third root, which is impossible for a quadratic. So two is the ceiling.'
      },
      {
        q: 'Find the value of $c$ for which $y = x + c$ is tangent to $y = x^2 - 3x$.',
        a: 'Set equal: $x^2 - 3x = x + c$, so $x^2 - 4x - c = 0$. The discriminant is $D = (-4)^2 - 4(1)(-c) = 16 + 4c$. Tangent means $D = 0$, so $16 + 4c = 0$, giving $c = -4$. The single tangent line is $y = x - 4$.'
      },
      {
        q: 'What does the discriminant of the substituted quadratic tell you about a line-and-curve system?',
        a: 'It counts the intersection points. $D > 0$: two solutions, the line cuts the curve twice. $D = 0$: one solution, the line is tangent. $D < 0$: no solution, the line misses the curve. You can answer "how many" without finding the points.'
      },
      {
        q: 'Solve $y = x^2 - 4x + 4$ and $y = 0$, and state the geometric meaning of the result.',
        a: 'Set equal: $x^2 - 4x + 4 = 0$, so $(x-2)^2 = 0$ and $x = 2$ (repeated). Back-substitute: $y = 0$. The single solution $(2, 0)$ means the line is tangent to the parabola there; the two intersection points have merged into one at the vertex.'
      },
      {
        q: 'Explain why a tangent line corresponds to a repeated root.',
        a: 'A repeated root is two equal solutions. Geometrically, the two crossing points of a secant line slide together as the line moves. They coincide at one touching point. At that moment the line stops cutting and just grazes the curve. One repeated root and one tangent point are the same event.'
      },
      {
        q: 'Find all values of $c$ for which $y = x + c$ is tangent to the circle $x^2 + y^2 = 18$.',
        a: 'Substitute: $x^2 + (x+c)^2 = 18$, giving $2x^2 + 2cx + (c^2 - 18) = 0$. Discriminant: $D = (2c)^2 - 8(c^2 - 18) = 144 - 4c^2$. Set $D = 0$: $c^2 = 36$, so $c = 6$ or $c = -6$. Two tangent lines, one on each side of the circle.'
      },
      {
        q: 'Why must you carry every $x$ back through the linear equation?',
        a: 'A solution is a pair $(x, y)$, not a lone number. The substituted quadratic gives only the $x$ values. The matching $y$ comes from putting each $x$ into the linear equation. An $x$ without its $y$ is half an answer.'
      },
      {
        q: 'For what values of $k$ does the line $y = kx$ meet the parabola $y = x^2 + 1$ at two points?',
        a: 'Set equal: $x^2 + 1 = kx$, so $x^2 - kx + 1 = 0$. Discriminant: $D = k^2 - 4$. Two points need $D > 0$, so $k^2 > 4$, meaning $k > 2$ or $k < -2$.'
      },
      {
        q: 'Solve $2x - y = 1$ and $y = x^2 - 4$.',
        a: 'From the linear equation, $y = 2x - 1$. Substitute: $2x - 1 = x^2 - 4$, so $x^2 - 2x - 3 = 0$. Factor: $(x-3)(x+1)=0$, so $x = 3$ or $x = -1$. Back-substitute: the points are $(3, 5)$ and $(-1, -3)$.'
      },
      {
        q: 'A circle and a line share exactly one point. What is true of the substituted quadratic, and what is the line called?',
        a: 'The substituted quadratic has discriminant $D = 0$, so it has one repeated root. The line touches the circle at a single point, so it is a tangent to the circle.'
      },
      {
        q: 'Predict what happens to the solutions of $y = x^2$ and $y = mx - 1$ as $m$ grows from $0$.',
        a: 'Set equal: $x^2 - mx + 1 = 0$, with $D = m^2 - 4$. At small $m$, $D < 0$ and there is no solution. At $m = 2$, $D = 0$ and the line becomes tangent. For $m > 2$, $D > 0$ and the line cuts the parabola at two points. The line tilts until it touches, then slices.'
      },
      {
        q: 'Solve $y = 2x + 1$ and $x^2 + y^2 = 2$, or show it has no solution.',
        a: 'Substitute: $x^2 + (2x+1)^2 = 2$, so $5x^2 + 4x - 1 = 0$. Factor: $(5x - 1)(x + 1) = 0$, so $x = \\frac{1}{5}$ or $x = -1$. Back-substitute into $y = 2x + 1$: the points are $\\left(\\frac{1}{5}, \\frac{7}{5}\\right)$ and $(-1, -1)$.'
      },
      {
        q: 'Why does substituting the linear equation into itself give no information?',
        a: 'Rearrange $x + y = 5$ to $y = 5 - x$ and put that back into $x + y = 5$. You get $x + (5 - x) = 5$, which simplifies to $5 = 5$. It is always true and constrains nothing. The new information lives only in the second, quadratic equation.'
      },
      {
        q: 'The line $y = 3x + c$ is tangent to $y = x^2 + 5$. Find $c$.',
        a: 'Set equal: $x^2 + 5 = 3x + c$, so $x^2 - 3x + (5 - c) = 0$. Discriminant: $D = 9 - 4(5 - c) = 4c - 11$. Tangent means $D = 0$, so $4c - 11 = 0$ and $c = \\frac{11}{4}$.'
      },
      {
        q: 'Solve $y = x + 2$ and $y = x^2 - x - 1$, then state how many times the graphs cross.',
        a: 'Set equal: $x^2 - x - 1 = x + 2$, so $x^2 - 2x - 3 = 0$. Factor: $(x-3)(x+1)=0$, so $x = 3$ or $x = -1$. Points: $(3, 5)$ and $(-1, 1)$. The graphs cross twice, so the line is a secant.'
      },
      {
        q: 'Apply the method when the linear equation does not give $y$ for free: solve $3x + y = 7$ and $y = x^2 + 1$.',
        a: 'Rearrange the linear equation to $y = 7 - 3x$. Substitute: $7 - 3x = x^2 + 1$, so $x^2 + 3x - 6 = 0$. This does not factor, so use the formula: $D = 9 + 24 = 33$, giving $x = \\frac{-3 \\pm \\sqrt{33}}{2}$. Each $x$ gives its $y$ from $y = 7 - 3x$.'
      },
      {
        q: 'Show the line $y = x - 5$ does not meet the parabola $y = x^2 + x - 1$.',
        a: 'Set equal: $x^2 + x - 1 = x - 5$, so $x^2 + 4 = 0$. Discriminant: $D = 0 - 4(1)(4) = -16$. Since $D < 0$ there are no real roots, so the line and parabola never meet.'
      },
      {
        q: 'For what values of $k$ is the line $y = x + k$ a tangent, a secant, or a miss for the parabola $y = x^2$?',
        a: 'Set equal: $x^2 - x - k = 0$, with $D = 1 + 4k$. Tangent when $D = 0$: $k = -\\frac{1}{4}$. Secant (two points) when $D > 0$: $k > -\\frac{1}{4}$. Miss (no point) when $D < 0$: $k < -\\frac{1}{4}$.'
      },
      {
        q: 'A rectangle has perimeter $14$ and area $12$. Set up and solve a system for its sides.',
        a: 'Let the sides be $x$ and $y$. Then $2(x + y) = 14$ gives $x + y = 7$, and $xy = 12$. Substitute $y = 7 - x$: $x(7 - x) = 12$, so $x^2 - 7x + 12 = 0$. Factor: $(x-3)(x-4)=0$, so the sides are $3$ and $4$.'
      },
      {
        q: 'Explain why a line can meet a parabola at most twice but a cubic curve could be met three times.',
        a: 'Substituting a line into a parabola gives a quadratic, which has at most two roots. Substituting a line into a cubic gives a cubic equation, which can have up to three roots. The highest power of the curve sets the maximum number of intersection points.'
      },
      {
        q: 'Solve $y = 4 - x$ and $xy = 3$.',
        a: 'Substitute $y = 4 - x$ into $xy = 3$: $x(4 - x) = 3$, so $x^2 - 4x + 3 = 0$. Factor: $(x-1)(x-3)=0$, so $x = 1$ or $x = 3$. Back-substitute: the points are $(1, 3)$ and $(3, 1)$.'
      }
    ],

    reference: {
      category: 'Quick Reference',
      title: 'Simultaneous Equations',
      sections: [
        <>
          <h3>Substitution Method</h3>
          <div className="lrn-definition">
            <span className="lrn-definition-term">General procedure</span>
            <div className="lrn-definition-desc">
              <p>{`See **Linear Equations** § Systems of Equations: Two Variables for the general substitution recipe.`}</p>
            </div>
          </div>
          <div className="lrn-definition">
            <span className="lrn-definition-term">Linear-into-quadratic specifics</span>
            <div className="lrn-definition-desc">
              <p>{`Substitute from the linear into the quadratic. Substituting into the linear gives a true statement that tells you nothing. The substituted equation is quadratic, so solve it as a quadratic.`}</p>
            </div>
          </div>
          <div className="lrn-definition">
            <span className="lrn-definition-term">Form of a solution</span>
            <div className="lrn-definition-desc">
              <p>{`Each solution is a pair $(x, y)$. Carry every $x$ back through the linear equation to find its $y$.`}</p>
            </div>
          </div>

          <h3>Counting Solutions</h3>
          <div className="lrn-definition">
            <span className="lrn-definition-term">Discriminant</span>
            <div className="lrn-definition-desc">
              <p>{`$D = b^2 - 4ac$ of the substituted quadratic: use it to count solutions without solving.`}</p>
            </div>
          </div>
          <ul className="lrn-list">
            <li>{`$D > 0$: two solutions. The line is a secant, cutting the curve twice.`}</li>
            <li>{`$D = 0$: one solution. The line is tangent, touching the curve once.`}</li>
            <li>{`$D < 0$: no solution. The line misses the curve.`}</li>
          </ul>
        </>,

        <>
          <h3>Geometry</h3>
          <div className="lrn-definition">
            <span className="lrn-definition-term">Solution as intersection</span>
            <div className="lrn-definition-desc">
              <p>{`A solution is a point both graphs pass through. Solving the system finds where the line meets the curve.`}</p>
            </div>
          </div>
          <div className="lrn-definition">
            <span className="lrn-definition-term">Maximum intersections</span>
            <div className="lrn-definition-desc">
              <p>{`A line meets a parabola or circle at most twice, because substitution gives a quadratic and a quadratic has at most two roots.`}</p>
            </div>
          </div>
          <div className="lrn-definition">
            <span className="lrn-definition-term">Tangent line</span>
            <div className="lrn-definition-desc">
              <p>{`A line touching a curve at exactly one point. Tangent line, $D = 0$, and one repeated root are three names for the same thing.`}</p>
            </div>
          </div>

          <h3>Finding an Unknown Constant</h3>
          <div className="lrn-definition">
            <span className="lrn-definition-term">Tangency condition</span>
            <div className="lrn-definition-desc">
              <p>{`To make a line tangent to a curve, substitute, form $D$, and solve $D = 0$ for the unknown constant.`}</p>
            </div>
          </div>
          <div className="lrn-definition">
            <span className="lrn-definition-term">Other conditions</span>
            <div className="lrn-definition-desc">
              <p>{`Two intersection points: solve $D > 0$. No intersection: solve $D < 0$. Each is a statement about $D$ in the unknown.`}</p>
            </div>
          </div>
          <div className="lrn-definition">
            <span className="lrn-definition-term">Number of answers</span>
            <div className="lrn-definition-desc">
              <p>{`A line of fixed slope is tangent to a parabola once but to a circle twice. The circle is closed, so the line can touch each side.`}</p>
            </div>
          </div>
        </>
      ]
    },

    customCss: null
  }

  return config
}

export default function SimultaneousEquations() {
  const config = useConfig()
  return <LearningTemplate config={config} />
}
