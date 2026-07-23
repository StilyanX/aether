import { LearningTemplate } from '../../../../components/learning/learning-template'
import { useVizColors } from '../../../../hooks/use-viz-colors'
import * as viz from './squares-cubes-square-roots-cube-roots-viz'

function useConfig() {
  const C = useVizColors()
  const config = {
    cssPrefix: 'scs',
    documentTitle: 'Squares, Cubes, Square Roots, Cube Roots - AETHER',
    learning: {
      groupTitle: 'Powers, Roots, and Real Numbers',
      category: 'Arithmetic',
      title: 'Squares, Cubes, Square Roots, Cube Roots',
      subtitle: 'From repeated multiplication to area, volume, and their inverses.',
      sections: [
        <>
          <h2>{`Squares: $n^2$`}</h2>
          <p>
            {`You already know index notation: $a^n$ means the base $a$ multiplied by itself $n$ times. Two special cases get their own names and their own meaning: the power 2 (squaring) and the power 3 (cubing).`}
          </p>

          <div className="lrn-predict">
            <p>
              {`A square tile has a side length of 7 cm. Before calculating, predict the area. Is it closer to 50 or to 100? How do you know which operation gives area from side length?`}
            </p>
          </div>

          <p>
            {`Squaring a number means multiplying it by itself: $n^2 = n \\times n$. The result is a `}
            <strong>square number</strong>
            {` (or `}
            <strong>perfect square</strong>
            {`). The name fits the picture: a square with side $n$ has area $n^2$.`}
          </p>

          <p>
            {`The calculator key for squaring is $x^2$. Press 3.2 then $x^2$ to get $3.2^2 = 10.24$. For other powers, press the base, then $x^y$ (or $\\wedge$), then the index, then $=$.`}
          </p>

          <viz.SquareArray C={C} />

          <div className="lrn-elaborate">
            <p>
              <strong>Why the area formula works.</strong>{' '}
              {`A square with side $n$ has $n$ rows of $n$ unit squares each. Counting all unit squares gives $n \\times n = n^2$. The dot array above makes this count visible: 5 rows, 5 columns, 25 dots. Every square number is a literal square of dots.`}
            </p>
          </div>

          <viz.SquareArrayInteractive C={C} />

          <p>
            <strong>When to use this:</strong>{' '}
            {`Use squaring whenever you need the area of a square shape, or whenever a problem states that a quantity grows as the square of another.`}
          </p>

          <h3>Perfect Squares to Memorise</h3>
          <p>
            {`Knowing these by heart saves time. Every whole-number result below comes from $n^2$ for integer $n$.`}
          </p>
          <div className="lrn-steps">
            <ol className="lrn-list">
              <li>{`$1^2 = 1$`}</li>
              <li>{`$2^2 = 4$`}</li>
              <li>{`$3^2 = 9$`}</li>
              <li>{`$4^2 = 16$`}</li>
              <li>{`$5^2 = 25$`}</li>
              <li>{`$6^2 = 36$`}</li>
              <li>{`$7^2 = 49$`}</li>
              <li>{`$8^2 = 64$`}</li>
              <li>{`$9^2 = 81$`}</li>
              <li>{`$10^2 = 100$`}</li>
              <li>{`$11^2 = 121$`}</li>
              <li>{`$12^2 = 144$`}</li>
              <li>{`$13^2 = 169$`}</li>
              <li>{`$14^2 = 196$`}</li>
              <li>{`$15^2 = 225$`}</li>
            </ol>
          </div>

          <div className="lrn-self-explain">
            <p>
              {`The table jumps from $10^2 = 100$ to $11^2 = 121$. The gap is 21. Why is the gap between successive squares not constant? What changes about the gap as $n$ grows?`}
            </p>
          </div>

        </>,
        <>
          <h2>{`Cubes: $n^3$`}</h2>

          <div className="lrn-predict">
            <p>
              {`A wooden cube has edge length 5 cm. Before computing, estimate how many small 1 cm cubes (each one cubic centimetre, written $\\text{cm}^3$) fill it. Is the answer in the tens, hundreds, or thousands?`}
            </p>
          </div>

          <p>
            {`Cubing a number means multiplying it by itself three times: $n^3 = n \\times n \\times n$. The result is a `}
            <strong>cube number</strong>
            {` (or `}
            <strong>perfect cube</strong>
            {`). Again the name fits: a cube with edge $n$ has volume $n^3$.`}
          </p>

          <viz.CubeStack C={C} />

          <div className="lrn-elaborate">
            <p>
              <strong>Why the volume formula works.</strong>{' '}
              {`Stack $n$ layers of $n \\times n$ unit cubes. Each layer holds $n^2$ cubes. $n$ layers give $n \\times n^2 = n^3$ cubes total. The isometric diagram above shows this for $4^3 = 64$: 4 layers, each a 4×4 grid, 64 unit cubes in all.`}
            </p>
          </div>

          <viz.CubeStackInteractive C={C} />

          <p>
            <strong>When to use this:</strong>{' '}
            {`Use cubing whenever you need the volume of a cube-shaped container, or whenever a problem states that a quantity scales as the cube of a length.`}
          </p>

          <h3>Perfect Cubes to Memorise</h3>
          <div className="lrn-steps">
            <ol className="lrn-list">
              <li>{`$1^3 = 1$`}</li>
              <li>{`$2^3 = 8$`}</li>
              <li>{`$3^3 = 27$`}</li>
              <li>{`$4^3 = 64$`}</li>
              <li>{`$5^3 = 125$`}</li>
              <li>{`$6^3 = 216$`}</li>
              <li>{`$7^3 = 343$`}</li>
              <li>{`$8^3 = 512$`}</li>
              <li>{`$9^3 = 729$`}</li>
              <li>{`$10^3 = 1000$`}</li>
            </ol>
          </div>

          <div className="lrn-self-explain">
            <p>
              {`$8^3 = 512$ and $9^3 = 729$. The gap between them is 217. Why do gaps between consecutive cube numbers grow much faster than gaps between consecutive square numbers?`}
            </p>
          </div>

        </>,
        <>
          <h2>Square Roots</h2>

          <div className="lrn-predict">
            <p>
              {`A square floor tile covers an area of 529 cm². You want to cut skirting board to fit one side. Before calculating, is the side length closer to 20 cm, 23 cm, or 30 cm? How did you estimate?`}
            </p>
          </div>

          <p>
            {`The square root $\\sqrt{a}$ is the inverse of squaring. It gives the number which, multiplied by itself, produces $a$. Geometrically: $\\sqrt{\\text{area}}$ returns the side length of the square with that area.`}
          </p>

          <div className="lrn-callout">
            <p>
              <strong>The principal-root convention.</strong>{' '}
              {`The symbol $\\sqrt{\\phantom{x}}$ always means the positive square root only. $\\sqrt{529} = 23$, not $\\pm 23$. Both 23 and $-23$ square to 529, but $\\sqrt{529}$ names only 23. The two-root case arises when solving $x^2 = a$, not when using the root symbol alone.`}
            </p>
          </div>

          <h3>Worked Example: Finding Side from Area</h3>
          <p>{`A square has area 529 cm². Find the side length.`}</p>
          <div className="lrn-proof">
            <ol className="lrn-list">
              <li>{`Write the formula: $\\text{side} = \\sqrt{\\text{area}}$`}</li>
              <li>{`Substitute: $\\text{side} = \\sqrt{529}$`}</li>
              <li>{`Recognise or calculate: $23 \\times 23 = 529$, so $\\sqrt{529} = 23$`}</li>
              <li>{`State the answer: side length $= 23$ cm`}</li>
            </ol>
          </div>

          <div className="lrn-self-explain">
            <p>
              {`Step 3 requires recognising that 529 is a perfect square. If you did not know $23^2 = 529$, what two whole numbers would you test to bracket the answer? How does the perfect-squares table help you narrow the search?`}
            </p>
          </div>

          <p>
            {`On a calculator: press $\\sqrt{}$ then 529 then $=$. On older calculators: press 529 then $\\sqrt{}$.`}
          </p>

          <viz.SquareRootNumberLine C={C} />

          <div className="lrn-elaborate">
            <p>
              <strong>Why squaring and rooting cancel out.</strong>{' '}
              {`If you square $n$ you get $n^2$. Taking the square root of $n^2$ asks: what positive number times itself gives $n^2$? The answer is $n$. So $\\sqrt{n^2} = n$ for positive $n$. The operations are exact inverses for positive numbers.`}
            </p>
          </div>

          <p>
            <strong>When to use this:</strong>{' '}
            {`Use the square root whenever you know the area of a square and need the side length, or whenever you need to reverse a squaring step in a calculation.`}
          </p>

          <h3>Worked Example: Exact Root from Prime Factors</h3>
          <p>{`$\\sqrt{576}$ is not on the table above. You can still find it exactly using prime factors.`}</p>
          <div className="lrn-proof">
            <ol className="lrn-list">
              <li>{`Break 576 into prime factors: $576 = 2^6 \\times 3^2$.`}</li>
              <li>{`Pair the factors. The sixes split into three pairs of 2, and the two 3s make one pair.`}</li>
              <li>{`Take one factor out of each pair: $2 \\times 2 \\times 2 \\times 3 = 24$.`}</li>
              <li>{`So $\\sqrt{576} = 24$. Check: $24 \\times 24 = 576$.`}</li>
            </ol>
          </div>
          <p>
            <strong>What you can now do:</strong>{' '}
            {`You can find an exact square root even when the number is not on your memorised table.`}
          </p>

        </>,
        <>
          <h2>Cube Roots</h2>

          <div className="lrn-predict">
            <p>
              {`A storage cube has volume 512 cm³. Predict whether the edge length is closer to 7 cm, 8 cm, or 10 cm. Use the perfect-cubes table to check.`}
            </p>
          </div>

          <p>
            {`The cube root $\\sqrt[3]{a}$ is the inverse of cubing. It gives the number which, multiplied by itself three times, produces $a$. Geometrically: $\\sqrt[3]{\\text{volume}}$ returns the edge length of the cube with that volume.`}
          </p>

          <h3>Worked Example: Finding Edge from Volume</h3>
          <p>{`A cube has volume 512 cm³. Find the edge length.`}</p>
          <div className="lrn-proof">
            <ol className="lrn-list">
              <li>{`Write the formula: $\\text{side} = \\sqrt[3]{\\text{volume}}$`}</li>
              <li>{`Substitute: $\\text{side} = \\sqrt[3]{512}$`}</li>
              <li>{`Recognise or check: $8 \\times 8 \\times 8 = 512$, so $\\sqrt[3]{512} = 8$`}</li>
              <li>{`State the answer: edge length $= 8$ cm`}</li>
            </ol>
          </div>

          <div className="lrn-self-explain">
            <p>
              {`The verification step ($8 \\times 8 \\times 8 = 512$) is worth doing. Why does multiplying the answer by itself three times prove the cube root is correct? What does "inverse operation" mean in this context?`}
            </p>
          </div>

          <div className="lrn-elaborate">
            <p>
              <strong>Cube roots of negative numbers.</strong>{' '}
              {`$\\sqrt[3]{-8} = -2$ because $(-2) \\times (-2) \\times (-2) = -8$. Unlike square roots, cube roots of negative numbers are real numbers you can actually find. This is because multiplying three negative factors always gives a negative product. Square roots of negative numbers are not real, because squaring any number always gives a positive result.`}
            </p>
          </div>

          <p>{`On a calculator: press $\\sqrt[3]{}$ then 512 then $=$.`}</p>

          <p>
            <strong>When to use this:</strong>{' '}
            {`Use the cube root whenever you know the volume of a cube-shaped object and need the edge length, or whenever you need to reverse a cubing step.`}
          </p>

        </>,
        <>
          <h2>Perfect Squares and Perfect Cubes</h2>

          <div className="lrn-predict">
            <p>
              {`Is $\\sqrt{10}$ a whole number? Before computing, use the table of perfect squares to predict which two whole numbers $\\sqrt{10}$ falls between.`}
            </p>
          </div>

          <p>
            {`A whole number is a `}
            <strong>perfect square</strong>
            {` if its square root is a whole number. A whole number is a `}
            <strong>perfect cube</strong>
            {` if its cube root is a whole number. Most whole numbers are neither.`}
          </p>
          <p>
            {`When a whole number is not a perfect square, its square root is `}
            <strong>irrational</strong>
            {`. That means the decimal goes on forever with no repeating pattern. So you can never write the value exactly. You met these never-ending decimals before.`}
          </p>

          <h3>{`Worked Example: Estimating $\\sqrt{10}$`}</h3>
          <p>{`$\\sqrt{10}$ is not a whole number. Estimate its value using the perfect-squares table.`}</p>
          <div className="lrn-proof">
            <ol className="lrn-list">
              <li>{`Find the two perfect squares that bracket 10. From the table, $3^2 = 9$ and $4^2 = 16$.`}</li>
              <li>{`Since $9 < 10 < 16$, you know $3 < \\sqrt{10} < 4$.`}</li>
              <li>{`Decide which end is nearer. 10 is closer to 9 than to 16, so $\\sqrt{10}$ is closer to 3.`}</li>
              <li>{`Check on a calculator: $\\sqrt{10} \\approx 3.162$. That sits just above 3, as predicted.`}</li>
            </ol>
          </div>
          <p>
            {`The same bracketing works for cube roots. For $\\sqrt[3]{20}$: since $2^3 = 8$ and $3^3 = 27$, you know $2 < \\sqrt[3]{20} < 3$. 20 is much closer to 27 than to 8, so $\\sqrt[3]{20}$ is closer to 3.`}
          </p>
          <p>
            <strong>What you can now do:</strong>{' '}
            {`You can pin any root between two whole numbers and say which one it is nearer, even without a calculator.`}
          </p>

          <viz.RootCurveComparison C={C} />

          <div className="lrn-faded">
            <p>
              <strong>Faded worked example: find edge length from area or volume.</strong>
            </p>
            <ol className="lrn-list">
              <li>
                <strong>Full example.</strong>{' '}
                {`A square has area 144 cm². Find the side. $\\text{side} = \\sqrt{144} = 12$ cm, because $12 \\times 12 = 144$.`}
              </li>
              <li>
                <strong>Partially faded.</strong>{' '}
                {`A square has area 196 cm². Find the side. $\\text{side} = \\sqrt{196} = ?$ cm. Check: $14 \\times 14 = ?$`}
              </li>
              <li>
                <strong>Fully faded.</strong>{' '}
                {`A cube has volume 729 cm³. Find the edge. $\\text{edge} = \\sqrt[3]{?} = ?$ cm. Verify your answer by multiplying it by itself three times.`}
              </li>
            </ol>
          </div>

          <p>
            <strong>When to use this:</strong>{' '}
            {`Use the perfect-squares or perfect-cubes tables when you need an exact root fast. Use bracketing and estimation when the number is not a perfect square or cube.`}
          </p>

          <div className="lrn-callout">
            <p>
              {`You already met the laws of indices for combining powers. A square is just the power 2, and a cube is the power 3. The same rules still hold here.`}
            </p>
          </div>
        </>
      ]
    },
    practice: [
      {
        id: 'scs0001a',
        type: 'basic',
        front: `Calculate $7^2$.`,
        back: `$7^2 = 7 \\times 7 = 49$. Squaring means multiplying the number by itself once. Seven groups of seven gives 49.`,
        tags: ['squares', 'basic'],
        source_page: 1
      },
      {
        id: 'scs0002a',
        type: 'transfer',
        front: `A square floor tile has side length 9 cm. What is its area?`,
        back: `Area $= 9^2 = 81$ cm². The area of a square equals side length squared. Nine multiplied by nine gives 81.`,
        tags: ['squares', 'transfer'],
        source_page: 1
      },
      {
        id: 'scs0003a',
        type: 'predict',
        front: `Without calculating, predict whether $12^2$ is larger or smaller than 150. Explain your reasoning.`,
        back: `$12^2 = 144$, which is smaller than 150. From the perfect-squares table, $12^2 = 144$ and $13^2 = 169$. So 150 falls between $12^2$ and $13^2$, confirming the prediction.`,
        tags: ['squares', 'predict'],
        source_page: 1
      },
      {
        id: 'scs0004a',
        type: 'basic',
        front: `Calculate $5^3$.`,
        back: `$5^3 = 5 \\times 5 \\times 5 = 125$. Cubing means multiplying the number by itself three times. Five times five is 25, then 25 times five is 125.`,
        tags: ['cubes', 'basic'],
        source_page: 1
      },
      {
        id: 'scs0005a',
        type: 'transfer',
        front: `A Rubik's cube has edge length 6 cm. What is its volume?`,
        back: `Volume $= 6^3 = 216$ cm³. Volume of a cube equals edge length cubed. Six times six is 36, then 36 times six is 216.`,
        tags: ['cubes', 'transfer'],
        source_page: 1
      },
      {
        id: 'scs0006a',
        type: 'basic',
        front: `Find $\\sqrt{81}$.`,
        back: `$\\sqrt{81} = 9$, because $9 \\times 9 = 81$. The square root asks for the positive number that squares to 81. From the perfect-squares table, 9 is that number.`,
        tags: ['square-roots', 'basic'],
        source_page: 3
      },
      {
        id: 'scs0007a',
        type: 'predict',
        front: `Before calculating, predict which two consecutive whole numbers $\\sqrt{50}$ falls between.`,
        back: `$\\sqrt{50}$ falls between 7 and 8. From the table, $7^2 = 49$ and $8^2 = 64$. Since $49 < 50 < 64$, the square root must be between 7 and 8. A calculator confirms $\\sqrt{50} \\approx 7.07$.`,
        tags: ['square-roots', 'predict'],
        source_page: 3
      },
      {
        id: 'scs0008a',
        type: 'transfer',
        front: `A square checkerboard has area 2500 mm². What is the side length of one side?`,
        back: `Side $= \\sqrt{2500} = 50$ mm. The square root reverses squaring. Check: $50 \\times 50 = 2500$. The side length is 50 mm.`,
        tags: ['square-roots', 'transfer'],
        source_page: 3
      },
      {
        id: 'scs0009a',
        type: 'elaborate',
        front: `Why does $\\sqrt{n^2} = n$ for positive $n$? Explain from first principles, not just as a rule.`,
        back: `Squaring $n$ gives $n^2$, which records how many unit squares fill an $n \\times n$ grid. Taking the square root asks for the side length of a square with that area. The side length is $n$ by construction. The two operations are exact inverses: squaring builds the area, rooting recovers the side.`,
        tags: ['square-roots', 'elaborate'],
        source_page: 3
      },
      {
        id: 'scs0010a',
        type: 'basic',
        front: `Find $\\sqrt[3]{27}$.`,
        back: `$\\sqrt[3]{27} = 3$, because $3 \\times 3 \\times 3 = 27$. The cube root asks for the number that, multiplied by itself three times, gives 27. Three is that number.`,
        tags: ['cube-roots', 'basic'],
        source_page: 3
      },
      {
        id: 'scs0011a',
        type: 'transfer',
        front: `A cubic storage box holds 1000 cm³. What is its edge length?`,
        back: `Edge $= \\sqrt[3]{1000} = 10$ cm. The cube root reverses cubing. Check: $10 \\times 10 \\times 10 = 1000$. The edge length is 10 cm.`,
        tags: ['cube-roots', 'transfer'],
        source_page: 3
      },
      {
        id: 'scs0012a',
        type: 'predict',
        front: `A cube has volume 100 cm³. Without calculating exactly, predict which two whole-number centimetres the edge length falls between.`,
        back: `The edge falls between 4 cm and 5 cm. From the table, $4^3 = 64$ and $5^3 = 125$. Since $64 < 100 < 125$, the edge is between 4 and 5. A calculator gives $\\sqrt[3]{100} \\approx 4.64$ cm.`,
        tags: ['cube-roots', 'predict'],
        source_page: 3
      },
      {
        id: 'scs0013a',
        type: 'transfer',
        front: `A die (one of a pair of dice) is a cube with edge length 1.5 cm. What is its volume? Give the exact answer.`,
        back: `Volume $= 1.5^3 = 1.5 \\times 1.5 \\times 1.5 = 3.375$ cm³. First compute $1.5 \\times 1.5 = 2.25$, then $2.25 \\times 1.5 = 3.375$. The volume is $3.375$ cm³.`,
        tags: ['cubes', 'transfer'],
        source_page: 1
      },
      {
        id: 'scs0014a',
        type: 'elaborate',
        front: `Why is $\\sqrt[3]{-8} = -2$ a valid real number, but $\\sqrt{-9}$ is not a real number?`,
        back: `Three negative factors multiply to a negative result: $(-2) \\times (-2) \\times (-2) = -8$. So cube roots of negative numbers are real. By contrast, two negative factors always multiply to a positive result: $(-3) \\times (-3) = 9$, never $-9$. No real number squares to a negative, so $\\sqrt{-9}$ has no real value.`,
        tags: ['cube-roots', 'elaborate'],
        source_page: 3
      },
      {
        id: 'scs0015a',
        type: 'self-explain',
        front: `In the problem "A square tile has area 529 cm², find the side length", the key step is recognising that 529 is a perfect square. Explain how the perfect-squares table lets you identify this and what you would do if the area were 530 cm² instead.`,
        back: `From the table, $23^2 = 529$, so 529 is a perfect square with an exact integer root of 23. For 530: since $23^2 = 529$ and $24^2 = 576$, the root falls between 23 and 24. You would use a calculator to get $\\sqrt{530} \\approx 23.02$, an irrational number with no exact finite decimal.`,
        tags: ['square-roots', 'self-explain'],
        source_page: 3
      },
      {
        id: 'scs0016a',
        type: 'transfer',
        front: `A square painting has area 1.44 m². What is the length of one side?`,
        back: `Side $= \\sqrt{1.44} = 1.2$ m. Check: $1.2 \\times 1.2 = 1.44$. The root works on decimals the same way it works on integers: find the positive number that squares to the given area.`,
        tags: ['square-roots', 'transfer'],
        source_page: 3
      },
      {
        id: 'scs0017a',
        type: 'elaborate',
        front: `Why do gaps between consecutive perfect squares grow as the numbers get larger? Give a numerical example.`,
        back: `The gap between $n^2$ and $(n+1)^2$ equals $(n+1)^2 - n^2 = 2n + 1$. That expression grows with $n$. For example: $3^2$ to $4^2$ is $16 - 9 = 7$; $10^2$ to $11^2$ is $121 - 100 = 21$; $14^2$ to $15^2$ is $225 - 196 = 29$. The gap equals twice the smaller base plus one.`,
        tags: ['squares', 'elaborate'],
        source_page: 1
      },
      {
        id: 'scs0018a',
        type: 'predict',
        front: `Is 200 a perfect square? Before looking it up, predict yes or no, then check using the table.`,
        back: `No. From the table, $14^2 = 196$ and $15^2 = 225$. Since 200 falls between 196 and 225, its square root is not a whole number. $\\sqrt{200} \\approx 14.14$, an irrational number.`,
        tags: ['perfect-squares-cubes', 'predict'],
        source_page: 3
      },
      {
        id: 'scs0019a',
        type: 'transfer',
        front: `A square garden has area 361 m². A gardener wants to put a fence along one side. How long does the fence need to be?`,
        back: `Fence length $= \\sqrt{361} = 19$ m. Check: $19 \\times 19 = 361$. One side of the square equals the square root of the area, so the fence needs to be 19 m long.`,
        tags: ['square-roots', 'transfer'],
        source_page: 3
      },
      {
        id: 'scs0020a',
        type: 'self-explain',
        front: `When computing $\\sqrt[3]{512} = 8$, what does the verification step $8 \\times 8 \\times 8 = 512$ actually confirm, and why is it worth doing?`,
        back: `The verification confirms that 8 is genuinely the cube root: cubing it returns the original number 512. It is worth doing because it catches arithmetic errors and reinforces the inverse relationship between cubing and cube-rooting. If the check fails, the root is wrong.`,
        tags: ['cube-roots', 'self-explain'],
        source_page: 3
      },
      {
        id: 'scs0021a',
        type: 'transfer',
        front: `Find $\\sqrt{324}$ using prime factors. ($324 = 2^2 \\times 3^4$.)`,
        back: `$\\sqrt{324} = 18$. Pair the prime factors: $2^2 \\times 3^4$. Take one factor from each pair: $2 \\times 3^2 = 2 \\times 9 = 18$. Check: $18 \\times 18 = 324$.`,
        tags: ['square-roots', 'transfer'],
        source_page: 3
      },
      {
        id: 'scs0022a',
        type: 'predict',
        front: `Predict: is $\\sqrt[3]{125}$ a whole number? Which one?`,
        back: `Yes. $\\sqrt[3]{125} = 5$, because $5 \\times 5 \\times 5 = 125$. From the perfect-cubes table, 125 is $5^3$, so its cube root is the whole number 5.`,
        tags: ['cube-roots', 'predict'],
        source_page: 3
      }
    ],
    reference: {
      category: 'Quick Reference',
      title: 'Squares, Cubes, Square Roots, Cube Roots',
      sections: [
        <>
          <h2>Symbols and Notation</h2>
          <div className="lrn-definition">
            <div className="lrn-definition-desc">
              <p>
                <strong>{`$a^n$`}</strong>
                {': '}
                {`$a$ multiplied by itself $n$ times. $a$ is the base; $n$ is the index (exponent).`}
              </p>
            </div>
          </div>
          <div className="lrn-definition">
            <div className="lrn-definition-desc">
              <p>
                <strong>{`$a^2$`}</strong>
                {' (squared): '}
                {`$a \\times a$. Gives the area of a square with side $a$.`}
              </p>
            </div>
          </div>
          <div className="lrn-definition">
            <div className="lrn-definition-desc">
              <p>
                <strong>{`$a^3$`}</strong>
                {' (cubed): '}
                {`$a \\times a \\times a$. Gives the volume of a cube with edge $a$.`}
              </p>
            </div>
          </div>
          <div className="lrn-definition">
            <div className="lrn-definition-desc">
              <p>
                <strong>{`$\\sqrt{a}$`}</strong>
                {' (square root): '}
                {`The positive number which, squared, gives $a$. Principal root only (positive).`}
              </p>
            </div>
          </div>
          <div className="lrn-definition">
            <div className="lrn-definition-desc">
              <p>
                <strong>{`$\\sqrt[3]{a}$`}</strong>
                {' (cube root): '}
                {`The number which, cubed, gives $a$. Defined for negative $a$ (unlike square root).`}
              </p>
            </div>
          </div>

          <h2>Key Formulas</h2>
          <p className="lrn-eq lrn-eq-hero">{`$$\\text{side} = \\sqrt{\\text{area}}$$`}</p>
          <p>
            <strong>When to use:</strong>{' '}
            {`Use when you know the area of a square and need the side length.`}
          </p>
          <p className="lrn-eq lrn-eq-hero">{`$$\\text{side} = \\sqrt[3]{\\text{volume}}$$`}</p>
          <p>
            <strong>When to use:</strong>{' '}
            {`Use when you know the volume of a cube and need the edge length.`}
          </p>
          <p className="lrn-eq">{`$$\\sqrt{n^2} = n \\quad (n \\geq 0)$$`}</p>
          <p>
            <strong>When to use:</strong>{' '}
            {`Use to confirm that squaring and taking the square root are inverse operations.`}
          </p>

          <h2>Perfect Squares</h2>
          <table>
            <thead>
              <tr>
                <th>{`$n$`}</th>
                <th>{`$n^2$`}</th>
              </tr>
            </thead>
            <tbody>
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map(n => (
                <tr key={n}>
                  <td>{n}</td>
                  <td>{n * n}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <h2>Perfect Cubes</h2>
          <table>
            <thead>
              <tr>
                <th>{`$n$`}</th>
                <th>{`$n^3$`}</th>
              </tr>
            </thead>
            <tbody>
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(n => (
                <tr key={n}>
                  <td>{n}</td>
                  <td>{n * n * n}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <h2>Calculator Keys</h2>
          <div className="lrn-steps">
            <ul className="lrn-list">
              <li>{`Square: press the number, then $x^2$. Example: 3.2 then $x^2$ gives 10.24.`}</li>
              <li>{`Other powers: press base, then $x^y$ (or $\\wedge$), then the index, then $=$.`}</li>
              <li>{`Square root: press $\\sqrt{}$ then the number then $=$. (On older calculators: number then $\\sqrt{}$.)`}</li>
              <li>{`Cube root: press $\\sqrt[3]{}$ then the number then $=$.`}</li>
            </ul>
          </div>

          <h2>Principal Root Convention</h2>
          <p>
            {`$\\sqrt{a}$ always means the positive (principal) square root. $\\sqrt{529} = 23$, not $\\pm 23$. The $\\pm$ case arises only when solving the equation $x^2 = a$.`}
          </p>

          <h2>Estimating Irrational Roots</h2>
          <p>
            {`Find the two consecutive perfect squares (or cubes) that bracket the target. Example: $\\sqrt{10}$: since $3^2 = 9$ and $4^2 = 16$, we know $3 < \\sqrt{10} < 4$.`}
          </p>

          <h2>Powers and Roots</h2>
          <p>
            {`You already met the laws of indices for combining powers. A square is the power 2; a cube is the power 3. A root reverses a power.`}
          </p>
        </>
      ]
    },
    customCss:
      '.MafsView { --mafs-bg: transparent; --mafs-fg: var(--text-primary); --mafs-line-color: var(--border-subtle); }'
  }
  return config
}

export default function SquaresCubesSquareRootsCubeRoots() {
  const config = useConfig()
  return <LearningTemplate config={config} />
}
