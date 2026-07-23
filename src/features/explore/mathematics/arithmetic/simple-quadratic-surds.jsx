import { LearningTemplate } from '../../../../components/learning/learning-template'
import { useVizColors } from '../../../../hooks/use-viz-colors'
import * as viz from './simple-quadratic-surds-viz'

function useConfig() {
  const C = useVizColors()
  const config = {
    cssPrefix: 'sqs',
    documentTitle: 'Simple Quadratic Surds - AETHER',
    learning: {
      groupTitle: 'Powers, Roots, and Real Numbers',
      category: 'Arithmetic',
      title: 'Simple Quadratic Surds',
      subtitle: 'Square roots, surds, surd rules, and rationalising denominators.',
      sections: [
        <>
          <h2>{`Solving $x^2 + q = 0$`}</h2>

          <div className="lrn-predict">
            <p>{`You will solve $x^2 + q = 0$ for three values of $q$: $-9$, $0$, and $4$. Before working, predict how many solutions each case has. What is your reasoning?`}</p>
          </div>

          <p>
            <strong>When to use this:</strong>{' '}
            {`Use this method whenever you face a quadratic with no $x$ term: only $x^2$ and a constant.`}
          </p>

          <p>{`Start from any quadratic $ax^2 + bx + c = 0$. Divide through by $a$ (with $a \\neq 0$) to get $x^2 + px + q = 0$. When $p = 0$ this simplifies to $x^2 + q = 0$.`}</p>

          <p>{`Rearrange to $x^2 = -q$, and write $c = -q$. The equation $x^2 = c$ asks: what number squares to $c$? Squaring always gives a non-negative result. Non-negative means zero or positive. So the sign of $c$ controls how many solutions you get.`}</p>

          <h3>Three Cases in Full</h3>

          <div className="lrn-steps">
            <ol className="lrn-list">
              <li>{`$c = 0$ (i.e. $q = 0$): the equation is $x^2 = 0$, so $x = 0$ is the only solution.`}</li>
              <li>{`$c > 0$ (i.e. $q < 0$): two solutions, $x = \\sqrt{c}$ and $x = -\\sqrt{c}$.`}</li>
              <li>{`$c < 0$ (i.e. $q > 0$): no real solution exists.`}</li>
            </ol>
          </div>

          <div className="lrn-self-explain">
            <p>{`Solving $x^2 + 9 = 0$ gives no solution, while $x^2 - 9 = 0$ gives two. The only difference is the sign of the constant. Explain why the sign change completely changes the number of solutions.`}</p>
          </div>

        </>,
        <>
          <h2>The Square Root</h2>

          <div className="lrn-predict">
            <p>{`A square has area 16. You know the side length is 4. What property of 4 made you choose it rather than $-4$ as the side length?`}</p>
          </div>

          <p>
            <strong>When to use this:</strong>{' '}
            {`Use $\\sqrt{c}$ when you need the positive solution to $x^2 = c$, or the side length of a square with area $c$.`}
          </p>

          <p>{`You already know that for $c > 0$, $\\sqrt{c}$ is the unique positive number whose square equals $c$, so $(\\sqrt{c})^2 = c$. This is the principal (positive) root, not a full answer: the equation $x^2 = c$ still has the two solutions $\\sqrt{c}$ and $-\\sqrt{c}$.`}</p>

          <p>{`This lets you factor the difference of two squares: $x^2 - 2 = (x - \\sqrt{2})(x + \\sqrt{2})$. You will see why this factoring works when you meet the difference-of-two-squares identity below.`}</p>

          <h3>Worked Example: Solving $x^2 = 7$</h3>

          <div className="lrn-proof">
            <ol className="lrn-list">
              <li>{`Rewrite: $x^2 - 7 = 0$`}</li>
              <li>{`Recognise $7 = (\\sqrt{7})^2$, so $x^2 - (\\sqrt{7})^2 = 0$`}</li>
              <li>{`Factor: $(x - \\sqrt{7})(x + \\sqrt{7}) = 0$`}</li>
              <li>{`Solutions: $x = \\sqrt{7}$ or $x = -\\sqrt{7}$`}</li>
            </ol>
          </div>

          <div className="lrn-self-explain">
            <p>{`In step 2, why is it valid to write $7 = (\\sqrt{7})^2$? What definition are you using, and why must $\\sqrt{7}$ be positive?`}</p>
          </div>

          <viz.SqrtDefinitionPlot C={C} />

          <p>{`The plot shows $y = x^2$ and a horizontal line at height $c$. The two intersection points are $x = \\sqrt{c}$ and $x = -\\sqrt{c}$. Drag the slider to see all three cases.`}</p>

        </>,
        <>
          <h2>{`The Irrationality of $\\sqrt{2}$`}</h2>

          <p>{`You already proved that $\\sqrt{2}$ is irrational: it cannot be written as a fraction $\\frac{m}{n}$ of whole numbers. That is why $\\sqrt{2}$ has to stay in root form. Here you build on that fact to work with surds like it.`}</p>

        </>,
        <>
          <h2>Rules for Square Roots</h2>

          <p>{`A surd is a root left in exact root form because it is irrational, like $\\sqrt{2}$ or $\\sqrt{12}$. You cannot write it as a neat fraction or a stopping decimal, so you keep the root sign. A root like $\\sqrt{4} = 2$ is not a surd, because it simplifies to a whole number.`}</p>

          <div className="lrn-predict">
            <p>{`You know $\\sqrt{36} = 6$ and $\\sqrt{4} = 2$, $\\sqrt{9} = 3$. Notice that $36 = 4 \\times 9$. Do you think $\\sqrt{4 \\times 9} = \\sqrt{4} \\times \\sqrt{9}$? Try another pair to test your prediction.`}</p>
          </div>

          <p>
            <strong>When to use this:</strong>{' '}
            {`Use the product rule to break a root into simpler parts, or to simplify a surd like $\\sqrt{12}$.`}
          </p>

          <h3>{`Product Rule: $\\sqrt{ab} = \\sqrt{a} \\cdot \\sqrt{b}$`}</h3>

          <p>{`You already know the product rule for square roots: for $a, b \\geq 0$, $\\sqrt{ab} = \\sqrt{a} \\cdot \\sqrt{b}$. Here you use it to simplify surds.`}</p>

          <div className="lrn-proof">
            <ol className="lrn-list">
              <li>{`Simplify $\\sqrt{12}$. Split off the largest perfect-square factor: $12 = 4 \\times 3$.`}</li>
              <li>{`Apply the product rule: $\\sqrt{12} = \\sqrt{4} \\cdot \\sqrt{3}$.`}</li>
              <li>{`Since $\\sqrt{4} = 2$ exactly: $\\sqrt{12} = 2\\sqrt{3}$.`}</li>
            </ol>
          </div>

          <viz.ProductRulePlot C={C} />

          <p>{`You can now break any surd into its simplest form by pulling out perfect-square factors.`}</p>

          <h3>{`Quotient Rule: $\\sqrt{\\frac{a}{b}} = \\frac{\\sqrt{a}}{\\sqrt{b}}$`}</h3>

          <p>{`The matching quotient rule, which you also already know, splits a root over a fraction: for $a \\geq 0$, $b > 0$, $\\sqrt{\\frac{a}{b}} = \\frac{\\sqrt{a}}{\\sqrt{b}}$.`}</p>

          <div className="lrn-proof">
            <ol className="lrn-list">
              <li>{`Simplify $\\sqrt{\\frac{1}{4}}$. Split the root over the fraction: $\\sqrt{\\frac{1}{4}} = \\frac{\\sqrt{1}}{\\sqrt{4}}$.`}</li>
              <li>{`Since $\\sqrt{1} = 1$ and $\\sqrt{4} = 2$: $\\sqrt{\\frac{1}{4}} = \\frac{1}{2}$.`}</li>
            </ol>
          </div>

          <h3>{`The $\\sqrt{a^2} = |a|$ Rule`}</h3>

          <div className="lrn-compare">
            <p>
              <strong>Common error vs correct statement.</strong>
            </p>
            <p>{`Error: $\\sqrt{a^2} = a$ (only true when $a \\geq 0$).`}</p>
            <p>{`Correct: $\\sqrt{a^2} = |a|$, where $|a| = a$ if $a \\geq 0$ and $|a| = -a$ if $a < 0$.`}</p>
            <p>{`Example: $a = -5$. Then $a^2 = 25$ and $\\sqrt{25} = 5 = -(-5) = |-5|$. The root is always non-negative.`}</p>
          </div>

          <viz.AbsoluteValueRootPlot C={C} />

        </>,
        <>
          <h2>Rationalising the Denominator</h2>

          <div className="lrn-predict">
            <p>{`You want to simplify $\\frac{1}{2 + \\sqrt{3}}$. The denominator has a surd. Can you think of something to multiply numerator and denominator by that removes the $\\sqrt{3}$ from the bottom?`}</p>
          </div>

          <p>
            <strong>When to use this:</strong>{' '}
            {`Use rationalising whenever a surd appears in a denominator. It makes expressions easier to compare and add.`}
          </p>

          <p>{`A rational number is a number you can write as a whole-number fraction, like $\\frac{1}{2}$ or $4$. Rationalising means rewriting the fraction so the bottom (the denominator) is rational, with no surd left in it.`}</p>

          <p>{`The tool that makes this work is the difference-of-two-squares identity: $(a + b)(a - b) = a^2 - b^2$. Expand the left side to check it: $(a+b)(a-b) = a^2 - ab + ab - b^2 = a^2 - b^2$. The two middle terms cancel.`}</p>

          <p>{`This identity matters here because squaring a surd removes its root. So multiplying $(a + \\sqrt{b})$ by $(a - \\sqrt{b})$ gives $a^2 - b$, a number with no surd.`}</p>

          <p>{`The conjugate of a two-term surd flips the sign between the two terms. The conjugate of $a + \\sqrt{b}$ is $a - \\sqrt{b}$. You multiply top and bottom by the conjugate to trigger the difference of two squares.`}</p>

          <h3>{`Worked Example A: $\\frac{1}{2 + \\sqrt{3}}$`}</h3>

          <div className="lrn-proof">
            <ol className="lrn-list">
              <li>{`Conjugate of $2 + \\sqrt{3}$ is $2 - \\sqrt{3}$.`}</li>
              <li>{`Multiply: $\\frac{1}{2+\\sqrt{3}} \\times \\frac{2-\\sqrt{3}}{2-\\sqrt{3}} = \\frac{2-\\sqrt{3}}{(2+\\sqrt{3})(2-\\sqrt{3})}$.`}</li>
              <li>{`Denominator: $(2)^2 - (\\sqrt{3})^2 = 4 - 3 = 1$.`}</li>
              <li>{`Result: $2 - \\sqrt{3}$.`}</li>
            </ol>
          </div>

          <h3>{`Worked Example B: $\\frac{1}{\\sqrt{7} - \\sqrt{5}}$`}</h3>

          <div className="lrn-proof">
            <ol className="lrn-list">
              <li>{`Conjugate of $\\sqrt{7} - \\sqrt{5}$ is $\\sqrt{7} + \\sqrt{5}$.`}</li>
              <li>{`Multiply numerator and denominator by $\\sqrt{7} + \\sqrt{5}$.`}</li>
              <li>{`Denominator: $(\\sqrt{7})^2 - (\\sqrt{5})^2 = 7 - 5 = 2$.`}</li>
              <li>{`Result: $\\frac{\\sqrt{5}+\\sqrt{7}}{2}$.`}</li>
            </ol>
          </div>

          <div className="lrn-self-explain">
            <p>{`In both examples, the denominator became a whole number after multiplying by the conjugate. Explain why $(a + \\sqrt{b})(a - \\sqrt{b})$ always gives a rational number when $a$ and $b$ are rational.`}</p>
          </div>

          <p>{`You can now clear a surd from any denominator by multiplying top and bottom by the conjugate.`}</p>

          <h3>{`Comparing Surds: $\\sqrt{1001} - \\sqrt{1000}$ vs $\\frac{1}{10}$`}</h3>

          <p>{`You can compare these without a calculator by rationalising.`}</p>

          <div className="lrn-proof">
            <ol className="lrn-list">
              <li>{`Rationalise: $\\sqrt{1001} - \\sqrt{1000} = \\frac{(\\sqrt{1001}-\\sqrt{1000})(\\sqrt{1001}+\\sqrt{1000})}{\\sqrt{1001}+\\sqrt{1000}}$.`}</li>
              <li>{`Numerator: $1001 - 1000 = 1$.`}</li>
              <li>{`So $\\sqrt{1001} - \\sqrt{1000} = \\frac{1}{\\sqrt{1001}+\\sqrt{1000}}$.`}</li>
              <li>{`Since $\\sqrt{1001}+\\sqrt{1000} > 2\\sqrt{1000} \\approx 63.2 > 10$, the fraction is less than $\\frac{1}{10}$.`}</li>
            </ol>
          </div>

          <h3>{`Simplifying Nested Surds: $\\sqrt{3 + 2\\sqrt{2}}$`}</h3>

          <p>{`Guess the form $\\sqrt{a} + \\sqrt{b}$ and square it: $(\\sqrt{a}+\\sqrt{b})^2 = a + b + 2\\sqrt{ab}$.`}</p>
          <p>{`Match: $a + b = 3$ and $2\\sqrt{ab} = 2\\sqrt{2}$, so $ab = 2$. Solving: $a = 2$, $b = 1$.`}</p>
          <p>{`Therefore $\\sqrt{3 + 2\\sqrt{2}} = \\sqrt{2} + 1$.`}</p>

          <div className="lrn-elaborate">
            <p>
              <strong>{`Why guessing $\\sqrt{a} + \\sqrt{b}$ works here.`}</strong>
            </p>
            <p>{`The expression $3 + 2\\sqrt{2}$ has the same structure as $(\\sqrt{a}+\\sqrt{b})^2$. Matching the rational part and the surd part separately gives two equations. If they have a rational solution, the nested surd simplifies to a sum of two simple surds.`}</p>
          </div>

          <p>{`Surd work leans on the index laws you already know. A square root is just a power of one half: $a^{1/2} = \\sqrt{a}$. So multiplying, dividing, and raising surds follows the same rules as any other power.`}</p>
        </>
      ]
    },
    practice: [
      {
        id: 'sqs3b2a1f',
        type: 'predict',
        front: `Before solving: how many real solutions does $x^2 - 16 = 0$ have? What about $x^2 + 16 = 0$? Explain without calculating.`,
        back: `$x^2 - 16 = 0$ has two solutions: $c = 16 > 0$, so $x = \\pm 4$. $x^2 + 16 = 0$ has no real solutions: $c = -16 < 0$, and no real number squares to a negative.`,
        tags: ['quadratic-roots', 'predict'],
        source_page: 1
      },
      {
        id: 'sqs7k9m2c',
        type: 'basic',
        front: `Solve $x^2 - 7 = 0$.`,
        back: `Rearrange to $x^2 = 7$. Factor: $x^2 - (\\sqrt{7})^2 = 0 \\Rightarrow (x - \\sqrt{7})(x + \\sqrt{7}) = 0$. Solutions: $x = \\sqrt{7}$ or $x = -\\sqrt{7}$.`,
        tags: ['quadratic-roots', 'basic'],
        source_page: 2
      },
      {
        id: 'sqs1p4r8x',
        type: 'elaborate',
        front: `Why does $\\sqrt{c}$ always mean the positive root, even though both $\\sqrt{c}$ and $-\\sqrt{c}$ square to $c$?`,
        back: `By definition, $\\sqrt{c}$ names the unique positive number whose square is $c$. The symbol has a built-in convention: positive output only. Both $3$ and $-3$ square to $9$, but $\\sqrt{9} = 3$, never $-3$. The two-root case arises only when you write the full solution set. That set is $\\{\\sqrt{c}, -\\sqrt{c}\\}$ for $x^2 = c$.`,
        tags: ['sqrt-definition', 'elaborate'],
        source_page: 1
      },
      {
        id: 'sqs9d5n3q',
        type: 'transfer',
        front: `A square tile has area 50 cm². Another has area 98 cm². Use the product rule to simplify their side lengths into surd form.`,
        back: `Side of first: $\\sqrt{50} = \\sqrt{25 \\times 2} = 5\\sqrt{2}$ cm. Side of second: $\\sqrt{98} = \\sqrt{49 \\times 2} = 7\\sqrt{2}$ cm. Product rule: $\\sqrt{ab} = \\sqrt{a}\\cdot\\sqrt{b}$. Pull out the largest perfect-square factor.`,
        tags: ['product-rule', 'transfer'],
        source_page: 4
      },
      {
        id: 'sqs6w2y7t',
        type: 'basic',
        front: `Simplify $\\frac{1}{2 + \\sqrt{3}}$ by rationalising the denominator.`,
        back: `Multiply by $\\frac{2-\\sqrt{3}}{2-\\sqrt{3}}$. Denominator: $(2)^2-(\\sqrt{3})^2 = 4-3 = 1$. Result: $2 - \\sqrt{3}$.`,
        tags: ['rationalising', 'basic'],
        source_page: 4
      },
      {
        id: 'sqs0f5w2r',
        type: 'predict',
        front: `Without computing exactly, predict: is $\\sqrt{1001} - \\sqrt{1000}$ greater or less than $\\frac{1}{10}$? How does rationalising help you decide?`,
        back: `Less than $\\frac{1}{10}$. Rationalise: $\\sqrt{1001}-\\sqrt{1000} = \\frac{1}{\\sqrt{1001}+\\sqrt{1000}}$. Since $\\sqrt{1001}+\\sqrt{1000} > 2\\sqrt{1000} \\approx 63.2 > 10$, the fraction is less than $\\frac{1}{10}$.`,
        tags: ['rationalising', 'predict'],
        source_page: 4
      },
      {
        id: 'sqs1x9k3h',
        type: 'basic',
        front: `Evaluate $\\sqrt{(-5)^2}$.`,
        back: `$\\sqrt{(-5)^2} = \\sqrt{25} = 5 = |-5|$. Common error: writing $-5$. The square root always returns a non-negative value. $\\sqrt{a^2} = |a|$, not $a$.`,
        tags: ['absolute-value-root', 'basic'],
        source_page: 4
      },
      {
        id: 'sqs6q2n5b',
        type: 'transfer',
        front: `Rationalise $\\frac{1}{\\sqrt{7} - \\sqrt{5}}$.`,
        back: `Multiply by $\\frac{\\sqrt{7}+\\sqrt{5}}{\\sqrt{7}+\\sqrt{5}}$. Denominator: $(\\sqrt{7})^2 - (\\sqrt{5})^2 = 7 - 5 = 2$. Result: $\\frac{\\sqrt{5}+\\sqrt{7}}{2}$.`,
        tags: ['rationalising', 'transfer'],
        source_page: 4
      },
      {
        id: 'sqs4t7m1y',
        type: 'basic',
        front: `Simplify $\\sqrt{3 + 2\\sqrt{2}}$.`,
        back: `Guess form $\\sqrt{a}+\\sqrt{b}$. Square: $a+b+2\\sqrt{ab}$. Match: $a+b=3$, $ab=2$. So $a=2$, $b=1$. Result: $\\sqrt{2}+1$. Check: $(\\sqrt{2}+1)^2 = 2+2\\sqrt{2}+1 = 3+2\\sqrt{2}$. ✓`,
        tags: ['nested-surds', 'basic'],
        source_page: 4
      },
      {
        id: 'sqs8w1n7k',
        type: 'transfer',
        front: `Show that $\\sqrt{\\frac{a}{b}} = \\frac{\\sqrt{a}}{\\sqrt{b}}$ using only the definition of square root. Assume $a \\geq 0$, $b > 0$.`,
        back: `Square $\\frac{\\sqrt{a}}{\\sqrt{b}}$: $\\left(\\frac{\\sqrt{a}}{\\sqrt{b}}\\right)^2 = \\frac{(\\sqrt{a})^2}{(\\sqrt{b})^2} = \\frac{a}{b}$. The result is non-negative since $\\sqrt{a} \\geq 0$ and $\\sqrt{b} > 0$. A non-negative number whose square is $\\frac{a}{b}$ equals $\\sqrt{\\frac{a}{b}}$ by definition.`,
        tags: ['quotient-rule', 'transfer'],
        source_page: 4
      },
      {
        id: 'sqs6z9y1c',
        type: 'transfer',
        front: `A square painting has area $\\frac{1}{2}$ m². Find the exact side length in simplified surd form.`,
        back: `Side $= \\sqrt{\\frac{1}{2}} = \\frac{\\sqrt{1}}{\\sqrt{2}} = \\frac{1}{\\sqrt{2}}$. Rationalise by multiplying by $\\frac{\\sqrt{2}}{\\sqrt{2}}$: result is $\\frac{\\sqrt{2}}{2}$ m. Uses the quotient rule, then rationalising.`,
        tags: ['quotient-rule', 'rationalising', 'transfer'],
        source_page: 4
      },
      {
        id: 'sqs1v7g3n',
        type: 'transfer',
        front: `Use the product rule to simplify $\\sqrt{12}$.`,
        back: `$\\sqrt{12} = \\sqrt{4 \\times 3} = \\sqrt{4} \\cdot \\sqrt{3} = 2\\sqrt{3}$. Find the largest perfect-square factor of 12, which is 4. $\\sqrt{4} = 2$ exactly.`,
        tags: ['product-rule', 'transfer'],
        source_page: 4
      }
    ],
    reference: {
      category: 'Quick Reference',
      title: 'Simple Quadratic Surds',
      sections: [
        <>
          <h2>{`Solving $x^2 = c$`}</h2>
          <table>
            <thead>
              <tr>
                <th>Condition</th>
                <th>Solutions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{`$c > 0$`}</td>
                <td>{`$x = \\sqrt{c}$ and $x = -\\sqrt{c}$`}</td>
              </tr>
              <tr>
                <td>{`$c = 0$`}</td>
                <td>{`$x = 0$ (one solution)`}</td>
              </tr>
              <tr>
                <td>{`$c < 0$`}</td>
                <td>No real solution</td>
              </tr>
            </tbody>
          </table>

          <h2>Square Root Definition</h2>
          <div className="lrn-definition">
            <div className="lrn-definition-desc">
              <p>{`For $c > 0$: $\\sqrt{c}$ is the unique positive number with $(\\sqrt{c})^2 = c$.`}</p>
            </div>
          </div>
          <p className="lrn-eq lrn-eq-hero">{`$$(\\sqrt{c})^2 = c \\qquad (c > 0)$$`}</p>
          <p>
            <strong>When to use:</strong>{' '}
            {`Whenever you need the positive solution of $x^2 = c$ or the side length of a square with area $c$.`}
          </p>

          <h2>Rules for Square Roots</h2>
          <p className="lrn-eq lrn-eq-hero">{`$$\\sqrt{ab} = \\sqrt{a}\\cdot\\sqrt{b} \\qquad (a,b \\geq 0)$$`}</p>
          <p>
            <strong>When to use:</strong>{' '}
            {`Break a root into simpler factors. Pull out perfect-square factors to simplify surds.`}
          </p>
          <p className="lrn-eq">{`$$\\sqrt{\\frac{a}{b}} = \\frac{\\sqrt{a}}{\\sqrt{b}} \\qquad (a \\geq 0,\\; b > 0)$$`}</p>
          <p>
            <strong>When to use:</strong> {`Split a root over a fraction.`}
          </p>
          <p className="lrn-eq">{`$$\\sqrt{a^2} = |a| \\qquad \\text{(not simply } a\\text{)}$$`}</p>
          <p>
            <strong>When to use:</strong>{' '}
            {`Simplify the square root of a squared expression, especially when the sign of $a$ is unknown.`}
          </p>

          <h2>Rationalising the Denominator</h2>
          <p>{`Multiply numerator and denominator by the conjugate (the same two terms with the middle sign flipped) to remove the surd from the denominator.`}</p>
          <div className="lrn-steps">
            <ul className="lrn-list">
              <li>{`Conjugate of $a + \\sqrt{b}$ is $a - \\sqrt{b}$.`}</li>
              <li>{`Conjugate of $\\sqrt{a} - \\sqrt{b}$ is $\\sqrt{a} + \\sqrt{b}$.`}</li>
              <li>{`Product of conjugates: $(a+\\sqrt{b})(a-\\sqrt{b}) = a^2 - b$ (rational).`}</li>
            </ul>
          </div>
          <p>{`Key result: $\\frac{1}{2+\\sqrt{3}} = 2-\\sqrt{3}$. Key result: $\\frac{1}{\\sqrt{7}-\\sqrt{5}} = \\frac{\\sqrt{5}+\\sqrt{7}}{2}$.`}</p>

          <h2>{`Irrationality of $\\sqrt{2}$`}</h2>
          <p>{`$\\sqrt{2}$ cannot be written as $\\frac{m}{n}$ for any integers $m$, $n$. That is why it stays in surd form.`}</p>
          <p>{`The same idea works for $\\sqrt{3}$.`}</p>

          <h2>Nested Surds</h2>
          <p>{`To simplify $\\sqrt{p + 2\\sqrt{q}}$: guess form $\\sqrt{a}+\\sqrt{b}$. Match $a+b = p$ and $ab = q$.`}</p>
          <p>{`Example: $\\sqrt{3+2\\sqrt{2}} = \\sqrt{2}+1$.`}</p>
        </>
      ]
    },
    customCss:
      '.MafsView { --mafs-bg: transparent; --mafs-fg: var(--text-primary); --mafs-line-color: var(--border-subtle); }'
  }
  return config
}

export default function SimpleQuadraticSurds() {
  const config = useConfig()
  return <LearningTemplate config={config} />
}
