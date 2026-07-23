import { LearningTemplate } from '../../../../../components/learning/learning-template'
import {
  AttrCantorSet,
  FdBoxCounting,
  FdDimensionLadder,
  FdSierpinskiConstruction,
  FdStrangeAttractorDim,
  FdGeneralCantor
} from '../../../../../components/viz'

export default function FractalDimension() {
  const config = {
    cssPrefix: 'fd',
    documentTitle: 'Fractal Dimension: Box-Counting and Correlation - AETHER',
    learning: {
      category: 'Module 5',
      groupTitle: 'Chaos and Nonlinear Dynamics',
      title: 'Fractal Dimension: Box-Counting and Correlation',
      subtitle:
        'Some objects are too jagged to be one-dimensional but too thin to be two-dimensional.',
      sections: [
        // SECTION 1: What Is a Fractal?
        <>
          <h2>What Is a Fractal?</h2>
          <p>
            When you zoom in on a smooth curve, it looks more and more like a straight line. A{' '}
            <strong>fractal</strong> is different: zoom in at any scale and the same jagged
            structure repeats. This property is called <strong>self-similarity</strong>.
          </p>
          <p>
            Fractals show up across physics. You see them in the boundary of a strange attractor.
            You see them in the set of trapped orbits in scattering. You see them in the branching
            of dendritic crystal growth. Reach for fractal dimension whenever an object has more
            detail than a simple curve but less than a filled surface.
          </p>

          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              Take a line segment and repeatedly remove the middle third. After many steps, what
              remains: a finite set of points, a smooth curve, or something in between?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                Something in between. Infinitely many points remain (the endpoints of every removed
                interval, and more). But the total length shrinks to zero. The result is neither a
                finite point set nor a curve with positive length. It has a dimension strictly
                between 0 and 1.
              </p>
            </details>
          </div>

          <h3>The Cantor Set: Simplest Fractal</h3>
          <p>
            Start with the interval {`$[0, 1]$`}. Remove the open middle third. Remove the middle
            third of each remaining piece. Repeat forever. What remains is the
            <strong> Cantor set</strong>: a scatter of points with total length zero.
          </p>
          <p>
            At the {`$n$`}-th step, each surviving interval has length {`$3^{-n}$`} and there are
            {`$2^n$`} of them. Infinitely many points survive, yet the total length shrinks to zero.
            The <strong>measure</strong> (the total length you can add up) is zero, but the set is
            not empty.
          </p>

          <AttrCantorSet />

          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>
              How can a set hold infinitely many points yet have zero length? Add up what you
              remove. At step 1 you remove one piece of length {`$1/3$`}. At step 2 you remove two
              pieces of length {`$1/9$`}, which is {`$2/9$`}. At step {`$n$`} you remove{' '}
              {`$2^{n-1}$`} pieces of length {`$3^{-n}$`}.
            </p>
            <p>
              Each step removes {`$(2/3)^{n-1} \\cdot (1/3)$`} of the original length. Add all the
              steps: {`$\\sum_{n=1}^\\infty (2/3)^{n-1} \\cdot (1/3) = 1$`}. You remove length 1
              from a starting length of 1. So the leftover length is zero, even though points still
              remain at every scale.
            </p>
          </div>

          <h3>Self-Similarity: The Defining Property</h3>
          <p>
            The Cantor set at stage {`$n+1$`} looks identical to the set at stage {`$n$`}, just
            scaled by {`$\\frac{1}{3}$`}. This is <strong>exact self-similarity</strong>: every
            piece is a perfect tiny copy of the whole. Math fractals like the Cantor set and
            Sierpinski carpet have exact self-similarity. The ratio is the same at every level.
          </p>
          <p>
            Physical fractals are only roughly self-similar. Strange attractors, coastlines, and
            dendritic crystal growth look the same at different scales on average, but not exactly.
            The pattern repeats in a loose sense, not a perfect one.
          </p>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>
              The Cantor set has measure zero. Does that mean it has zero points? Say in your own
              words why "zero length" is different from "empty."
            </p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                Zero measure means the total length is zero, not that the set is empty. Length and
                point count are two different things. A single point has zero length too, but it
                does not vanish. The Cantor set is thin in length but still packed with points at
                every scale.
              </p>
            </details>
          </div>
        </>,

        // SECTION 2: Euclidean Dimension and the Subdivision Argument
        <>
          <h2>How Dimension Is Defined by Counting Boxes</h2>
          <p>
            For familiar objects, dimension is obvious: a line is 1D, a square is 2D, a cube is 3D.
            But there is a precise counting argument that gives these dimensions as numbers, and the
            same argument works for fractals.
          </p>
          <p>
            You use this counting argument whenever you need a precise number for the dimension of
            an object whose geometry is not obviously integer-dimensional.
          </p>

          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              You cover a square of side {`$a_0 = 1$`} with small squares of side {`$a = 0.1$`}. How
              many small squares do you need? What does this count tell you about dimension?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                You need {`$10 \\times 10 = 100 = (a_0/a)^2$`} small squares. The exponent is 2,
                which is the dimension of the square. The formula {`$N = (a_0/a)^d$`}
                defines {`$d$`} through the count.
              </p>
            </details>
          </div>

          <h3>The Subdivision Formula</h3>
          <p>
            Divide a {`$d$`}-dimensional object of size {`$a_0$`} into pieces of size {`$a$`}. The
            number of pieces {`$N$`} satisfies:
          </p>
          <div className="lrn-eq lrn-eq-hero">
            <span>{`$$N(a) = \\left(\\frac{a_0}{a}\\right)^d$$`}</span>
          </div>
          <p>
            For a line segment: {`$N = a_0/a = (a_0/a)^1$`} (dimension 1). For a square of side{' '}
            {`$a_0$`}: {`$N = (a_0/a)^2$`} (dimension 2). For a cube: {`$N = (a_0/a)^3$`}
            (dimension 3). Solving for {`$d$`} gives the dimension formula:
          </p>
          <div className="lrn-eq lrn-eq-hero">
            <span>{`$$d = \\frac{\\log N(a)}{\\log(a_0/a)}$$`}</span>
          </div>

          <div className="lrn-proof">
            <span className="lrn-proof-header">Derivation from Subdivision</span>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">1.</span>
              <div className="lrn-proof-step-content">
                {`For a $d$-dimensional Euclidean object, halving the piece size multiplies the count by $2^d$. This is what makes $d$ the dimension, and it gives $N(a) = (a_0/a)^d$.`}
              </div>
            </div>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">2.</span>
              <div className="lrn-proof-step-content">
                {`Take the logarithm of both sides: $\\log N = d \\cdot \\log(a_0/a)$.`}
              </div>
            </div>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">3.</span>
              <div className="lrn-proof-step-content">
                {`Divide both sides by $\\log(a_0/a)$: $d = \\frac{\\log N(a)}{\\log(a_0/a)}$. This is a ratio of two logs, so it gives the same number in any base ($\\log$ or $\\ln$): the base cancels.`}
              </div>
            </div>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">4.</span>
              <div className="lrn-proof-step-content">
                {`For fractals, $N$ is not exactly $(a_0/a)^d$ for integer $d$, but the
                formula still defines a number $d_F$ that comes out non-integer.`}
              </div>
            </div>
            <div className="lrn-qed">Q.E.D.</div>
          </div>

          <h3>Three Kinds of Dimension</h3>
          <p>
            For any fractal object you need three distinct dimensions. Each has a different
            geometric meaning.
          </p>
          <div className="lrn-definition">
            <div className="lrn-definition-desc">
              <div>
                <p>
                  <strong>Topological dimension {`$d_T$`}:</strong> the plain count-of-directions
                  dimension. Isolated points score 0. Curves score 1. Surfaces score 2. For the
                  Cantor set: {`$d_T = 0$`} (it is <em>totally disconnected</em>: the only connected
                  pieces are single points, so no two points are joined by a stretch of the set).
                  For the Sierpinski carpet: {`$d_T = 1$`} (it contains curves but no filled areas).
                </p>
                <p>
                  <strong>Euclidean (embedding) dimension {`$d_E$`}:</strong> the dimension of the
                  space the fractal lives in. For the Cantor set embedded in a line:
                  {`$d_E = 1$`}. For the Sierpinski carpet embedded in a plane: {`$d_E = 2$`}.
                </p>
                <p>
                  <strong>Fractal (box-counting) dimension {`$d_F$`}:</strong> defined by the
                  box-counting formula above. Always satisfies {`$d_T < d_F < d_E$`} for a proper
                  fractal. Cantor: {`$0 < 0.6309 < 1$`}. Sierpinski: {`$1 < 1.8928 < 2$`}. (You may
                  also see this called the Hausdorff dimension. For the clean self-similar sets on
                  this page the two agree; they can differ for messier sets, so we stick with
                  box-counting here.)
                </p>
              </div>
            </div>
          </div>

          <FdDimensionLadder />
        </>,

        // SECTION 3: Fractal Dimension of the Cantor Set
        <>
          <h2>Fractal Dimension of the Cantor Set</h2>
          <p>
            The Cantor set is the first worked example because all the numbers come out exactly. You
            can verify the formula with arithmetic at each step.
          </p>
          <p>
            Use this calculation as a template whenever you need to find {`$d_F$`} for a
            self-similar fractal: identify {`$N$`} and {`$a$`} at level {`$n$`}, then plug into the
            box-counting formula.
          </p>

          <h3>Worked Derivation</h3>
          <p>At the {`$n$`}-th step of middle-third removal:</p>
          <ul className="lrn-list">
            <li>
              Each surviving interval has length {`$a = a_0 / 3^n$`}, so {`$a_0/a = 3^n$`}.
            </li>
            <li>There are {`$N(a) = 2^n$`} surviving intervals.</li>
          </ul>

          <div className="lrn-proof">
            <span className="lrn-proof-header">Fractal Dimension of the Cantor Set</span>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">1.</span>
              <div className="lrn-proof-step-content">
                {`Apply the box-counting formula: $d_F = \\frac{\\log N(a)}{\\log(a_0/a)}$.`}
              </div>
            </div>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">2.</span>
              <div className="lrn-proof-step-content">
                {`Substitute: $d_F = \\frac{\\log(2^n)}{\\log(3^n)} = \\frac{n \\log 2}{n \\log 3}$.`}
              </div>
            </div>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">3.</span>
              <div className="lrn-proof-step-content">
                {`The $n$ cancels: $d_F = \\frac{\\log 2}{\\log 3} = \\frac{\\ln 2}{\\ln 3} \\approx 0.6309$.`}
              </div>
            </div>
            <div className="lrn-qed">Q.E.D.</div>
          </div>

          <div className="lrn-eq lrn-eq-hero">
            <span>{`$$d_F = \\frac{\\ln 2}{\\ln 3} \\approx 0.6309$$`}</span>
          </div>
          <p>
            Check the ordering: {`$d_T = 0 < 0.6309 < 1 = d_E$`}. The Cantor set is strictly between
            a point set and a line.
          </p>

          <FdBoxCounting />

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>
              The ratio {`$n \\log 2 / (n \\log 3)$`} is the same for every level {`$n$`}. Why does
              that make {`$d_F$`} independent of which level you choose to count at?
            </p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                The dimension is defined as the ratio {`$\\log N / \\log(a_0/a)$`} in the limit{' '}
                {`$a \\to 0$`} (i.e., {`$n \\to \\infty$`}). For an exactly self-similar fractal,
                the ratio {`$\\log N / \\log(a_0/a) = n \\log 2 / (n \\log 3)$`}
                does not depend on {`$n$`} at all. So the limit equals the value at every finite
                level. This is what exact self-similarity does: the dimension stays the same at
                every scale.
              </p>
            </details>
          </div>

          <h3>General Cantor Set: Removing a Fraction {`$\\frac{1}{f}$`}</h3>
          <p>
            Instead of removing the middle third (fraction {`$\\frac{1}{3}$`}), remove the middle{' '}
            {`$\\frac{1}{f}$`} at each step. You keep a fraction{' '}
            {`$1 - \\frac{1}{f} = \\frac{f-1}{f}$`}
            of the length. That kept length splits into two equal pieces. So each surviving
            sub-interval is scaled by {`$g = \\frac{f-1}{2f}$`} relative to its parent. After{' '}
            {`$n$`} steps you have
            {`$N = 2^n$`} intervals, each of length {`$g^n$`}.
          </p>
          <p>
            The set is two copies of itself, each shrunk by {`$g$`}. The self-similar dimension is
            the count of copies over the log of the inverse scale:
          </p>
          <div className="lrn-eq lrn-eq-hero">
            <span>{`$$d_f = \\frac{\\ln 2}{\\ln(1/g)} = \\frac{\\ln 2}{|\\ln g|}$$`}</span>
          </div>
          <p>
            This is the box-counting formula {`$\\ln N / \\ln(a_0/a)$`} with {`$N = 2^n$`} and
            {`$a_0/a = (1/g)^n$`}: the {`$n$`} cancels and you get {`$\\ln 2 / |\\ln g|$`}.
          </p>
          <p>
            For {`$f = 3$`}: {`$g = 2/6 = 1/3$`}, so {`$|\\ln g| = \\ln 3$`} and
            {`$d_f = \\ln 2 / \\ln 3 \\approx 0.6309$`}. This matches the middle-third result, as it
            must. As {`$f \\to \\infty$`}: you remove almost nothing, each piece is nearly half the
            parent, {`$g \\to 1/2$`}, and {`$d_f \\to \\ln 2 / \\ln 2 = 1$`} (full line). As{' '}
            {`$f \\to 2$`}: you remove the whole middle half, each piece is a quarter,
            {`$g = 1/4$`}, and {`$d_f = \\ln 2 / \\ln 4 = 0.5$`}.
          </p>

          <FdGeneralCantor />

          <div className="lrn-faded">
            <div className="lrn-faded-phase">
              <span className="lrn-faded-label">COMPLETE EXAMPLE</span>
              <p>
                Find {`$d_f$`} for a Cantor set where you remove the middle fifth ({`$f = 5$`}).
              </p>
              <ol className="lrn-list">
                <li>{`$g = (5-1)/(2 \\cdot 5) = 4/10 = 2/5$.`}</li>
                <li>{`$|\\ln g| = \\ln(5/2) \\approx 0.9163$.`}</li>
                <li>{`$\\ln 2 \\approx 0.6931$.`}</li>
                <li>{`$d_f = \\ln 2 / |\\ln g| = 0.6931 / 0.9163 \\approx 0.7565$.`}</li>
              </ol>
            </div>
            <div className="lrn-faded-phase lrn-faded-partial">
              <span className="lrn-faded-label">YOUR TURN: PARTIAL</span>
              <p>
                Find {`$d_f$`} for a Cantor set where you remove the middle {`$\\frac{1}{4}$`}
                (so {`$f = 4$`}).
              </p>
              <ol className="lrn-list">
                <li>{`$g = (4-1)/(2 \\cdot 4) = 3/8 = ?$`}</li>
                <li>{`$|\\ln g| = ?$`}</li>
                <li>{`$d_f = \\ln 2 / |\\ln g| = ?$`}</li>
              </ol>
            </div>
            <div className="lrn-faded-phase">
              <span className="lrn-faded-label">INDEPENDENT PRACTICE</span>
              <p>
                A Cantor construction removes the middle {`$\\frac{1}{10}$`} at each step (
                {`$f = 10$`}). Find {`$g$`}, {`$|\\ln g|$`}, and {`$d_f$`}. Verify that
                {`$d_f$`} is close to 1, which makes sense because very little is removed.
              </p>
            </div>
          </div>
        </>,

        // SECTION 4: Sierpinski Carpet
        <>
          <h2>Fractal Dimension of the Sierpinski Carpet</h2>
          <p>
            The Sierpinski carpet is the 2D version of the Cantor set. Divide a square into 9 equal
            sub-squares and remove the center one. Repeat on each surviving sub-square. The carpet
            lives in the plane but has dimension strictly less than 2.
          </p>

          <h3>Worked Derivation</h3>
          <p>
            At the {`$n$`}-th step: {`$N(a) = 8^n$`} squares each of side{' '}
            {`$a = a_0 \\cdot 3^{-n}$`}, so {`$a_0/a = 3^n$`}.
          </p>

          <div className="lrn-proof">
            <span className="lrn-proof-header">Fractal Dimension of the Sierpinski Carpet</span>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">1.</span>
              <div className="lrn-proof-step-content">
                {`Apply the formula: $d_F = \\frac{\\log N(a)}{\\log(a_0/a)}$.`}
              </div>
            </div>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">2.</span>
              <div className="lrn-proof-step-content">
                {`Substitute: $d_F = \\frac{\\log(8^n)}{\\log(3^n)} = \\frac{n \\ln 8}{n \\ln 3}$.`}
              </div>
            </div>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">3.</span>
              <div className="lrn-proof-step-content">
                {`The $n$ cancels: $d_F = \\frac{\\ln 8}{\\ln 3} \\approx 1.8928$.`}
              </div>
            </div>
            <div className="lrn-qed">Q.E.D.</div>
          </div>

          <div className="lrn-eq lrn-eq-hero">
            <span>{`$$d_F = \\frac{\\ln 8}{\\ln 3} \\approx 1.8928$$`}</span>
          </div>
          <p>
            Check the ordering: {`$d_T = 1 < 1.8928 < 2 = d_E$`}. The carpet sits between a curve
            and a filled square.
          </p>

          <FdSierpinskiConstruction />

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>
              Why does removing the center square give {`$N = 8^n$`} instead of {`$9^n$`}? Where
              does the factor of 8 come from?
            </p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                At each step you divide each surviving square into 9 sub-squares and remove 1 (the
                center). So each surviving square produces exactly 8 surviving children. Starting
                from 1 square, after {`$n$`} steps you have {`$8^n$`} surviving squares. The factor{' '}
                {`$8 = 9 - 1$`} comes from removing exactly 1 of the 9 sub-squares at each level.
              </p>
            </details>
          </div>

          <h3>The Sierpinski Sponge (3D)</h3>
          <p>
            The 3D version divides a cube into 27 sub-cubes and removes the 7 inner-face cubes (or
            other choices of cubes). Different removal patterns give different fractal dimensions
            between 2 and 3. The rule is the same: {`$N$`} surviving sub-cubes at scale {`$3^{-n}$`}
            , then {`$d_F = \\log N / \\log 3$`}.
          </p>
          <p>
            Two roads reach the same {`$d_F$`}. When the fractal has exact self-similarity, use the
            known {`$N$`} and scale at any level: {`$d_F = \\log N / \\log(a_0/a)$`}. This is fast
            but needs exact self-similarity. Otherwise count boxes: cover the set with boxes of size
            {`$\\varepsilon$`} (the box side length), and take the slope of {`$\\log N$`} against
            {`$\\log(1/\\varepsilon)$`}. Box counting works for any set, including strange
            attractors from numerical data.
          </p>
        </>,

        // SECTION 5: General Box-Counting Dimension
        <>
          <h2>General Box-Counting Dimension</h2>
          <p>
            The worked Cantor and Sierpinski examples use exact integer levels. For a general set
            (such as the image of a strange attractor), you need the limiting version of the same
            formula.
          </p>
          <p>
            This is the version you use in numerical work: cover the attractor with
            {`$d_E$`}-dimensional boxes of side {`$r$`}, count how many boxes {`$N(r)$`}
            are non-empty, and measure the slope.
          </p>

          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              You compute {`$N(r)$`} for a strange attractor at several box sizes. You plot{' '}
              {`$\\log N$`} vs {`$\\log(1/r)$`} and see a slope of 1.35. What does that tell you
              about the attractor?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                The slope is {`$d_F = 1.35$`}. The attractor lives in a 2D phase space (
                {`$d_E = 2$`}) and has topological dimension {`$d_T = 1$`} (it looks like a curve).
                So {`$1 < 1.35 < 2$`}, confirming it is a strange attractor with fractal structure.
                This is consistent with the driven-damped pendulum range of{' '}
                {`$d_F \\in [1.2, 1.4]$`}.
              </p>
            </details>
          </div>

          <h3>The Box-Counting Formula</h3>
          <div className="lrn-eq lrn-eq-hero">
            <span>{`$$d_F = \\lim_{r \\to 0} \\frac{\\log N(r)}{\\log(r_0/r)}$$`}</span>
          </div>
          <p>
            Here {`$N(r)$`} is the number of {`$d_E$`}-dimensional balls of radius {`$r$`}
            needed to cover the fractal. The size {`$r_0$`} is just a fixed reference size, like the
            full width of the object, so {`$r_0/r$`} is a pure number. For {`$d_E = 1$`} the balls
            are line segments of length {`$2r$`}. For {`$d_E = 2$`} they are circles of radius{' '}
            {`$r$`}. The limit {`$r \\to 0$`} pulls out the true scaling power.
          </p>

          <div className="lrn-faded">
            <div className="lrn-faded-phase">
              <span className="lrn-faded-label">WORKED EXAMPLE: A NUMERICAL FIT</span>
              <p>
                You cover a strange attractor with boxes and count the non-empty ones at three box
                sizes. Take {`$r_0 = 1$`}. You find:
              </p>
              <ul className="lrn-list">
                <li>{`$r = 1/10$: $N = 22$ non-empty boxes.`}</li>
                <li>{`$r = 1/100$: $N = 490$ non-empty boxes.`}</li>
                <li>{`$r = 1/1000$: $N = 11000$ non-empty boxes.`}</li>
              </ul>
              <p>
                Fit the slope of {`$\\ln N$`} against {`$\\ln(1/r)$`}:
              </p>
              <ol className="lrn-list">
                <li>
                  {`From $r = 1/10$ to $r = 1/100$: $\\ln(490/22) = \\ln(22.27) \\approx 3.103$, and $\\ln(100/10) = \\ln 10 \\approx 2.303$. Slope $\\approx 3.103/2.303 \\approx 1.35$.`}
                </li>
                <li>
                  {`From $r = 1/100$ to $r = 1/1000$: $\\ln(11000/490) = \\ln(22.45) \\approx 3.111$, again over $\\ln 10 \\approx 2.303$. Slope $\\approx 1.35$.`}
                </li>
                <li>
                  {`Both intervals give the same slope, so $d_F \\approx 1.35$. The line is straight, which is the sign of clean fractal scaling.`}
                </li>
              </ol>
              <p>
                The ordering checks out: {`$1 < 1.35 < 2$`}. This is a strange attractor in a 2D
                phase space, right in the driven-damped pendulum range.
              </p>
            </div>
          </div>

          <h3>Physical Examples of Fractal Dimension</h3>
          <div className="lrn-definition">
            <div className="lrn-definition-desc">
              <div>
                <p>
                  <strong>Logistic map strange attractor:</strong> {`$d_F = 0.538$`}. This attractor
                  lives in a 1D phase space ({`$d_E = 1$`}) and is more complex than a point set (
                  {`$d_T = 0$`}). The ordering is {`$0 < 0.538 < 1$`}.
                </p>
                <p>
                  <strong>Driven-damped pendulum:</strong> {`$d_F \\in [1.2, 1.4]$`}
                  for various damping factors. This attractor lives in a 2D phase space (
                  {`$d_E = 2$`}) and has topological dimension 1 (curve). Ordering:
                  {`$1 < 1.2\\text{ to }1.4 < 2$`}.
                </p>
              </div>
            </div>
          </div>

          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>
              Why does a strange attractor obey {`$d_T < d_F < d_E$`}? The upper bound comes from
              <strong> dissipation</strong>, the loss of energy that shrinks phase volume over time.
              A dissipative system has a negative sum of <strong>Lyapunov exponents</strong> (the
              rates at which nearby orbits pull apart or squeeze together). So the attractor cannot
              fill the space: it has zero area, which forces {`$d_F < d_E$`}.
            </p>
          </div>
        </>,

        // SECTION 5B: Correlation Dimension
        <>
          <h2>Correlation Dimension: Counting Close Pairs</h2>
          <p>
            Box-counting needs you to lay a grid over the whole set and count full boxes. That is
            slow and clumsy for real data. There is a faster way that uses the points directly. It
            is called the <strong>correlation dimension</strong> {`$D_2$`}.
          </p>
          <p>
            The idea is simple. A higher-dimensional object has more ways for points to sit close
            together. So count how many pairs of points are closer than a distance {`$r$`}. Watch
            how that count grows as you raise {`$r$`}. The growth rate gives the dimension.
          </p>

          <h3>The Correlation Integral</h3>
          <p>
            You have {`$N$`} points on the set (say {`$N$`} points sampled from a chaotic orbit).
            Form every pair of points. The <strong>correlation integral</strong> {`$C(r)$`} is the
            fraction of pairs whose separation is less than {`$r$`}:
          </p>
          <div className="lrn-eq lrn-eq-hero">
            <span>{`$$C(r) = \\frac{2}{N(N-1)} \\sum_{i<j} \\Theta\\big(r - |\\mathbf{x}_i - \\mathbf{x}_j|\\big)$$`}</span>
          </div>
          <p>
            Here {`$\\Theta$`} is the step function. It is 1 when the pair is closer than {`$r$`}{' '}
            and 0 when it is farther. The sum just counts the close pairs. The prefactor turns that
            count into a fraction. So {`$C(r)$`} runs from 0 (no close pairs) up to 1 (every pair
            counts).
          </p>

          <h3>The Scaling Law</h3>
          <p>
            For a fractal, the number of close pairs grows as a power of {`$r$`} when {`$r$`} is
            small:
          </p>
          <div className="lrn-eq lrn-eq-hero">
            <span>{`$$C(r) \\sim r^{D_2} \\quad \\text{as } r \\to 0$$`}</span>
          </div>
          <p>
            The exponent {`$D_2$`} is the correlation dimension. To read it off, plot{' '}
            {`$\\ln C(r)$`}
            against {`$\\ln r$`}. The slope of the straight part is {`$D_2$`}. This is the same
            log-log trick you used for box-counting, but now you never draw a single box.
          </p>
          <p>
            The correlation dimension is always no larger than the box-counting dimension:
            {`$D_2 \\leq d_F$`}. They are equal for the clean self-similar sets on this page. They
            can differ for an attractor whose points crowd into some regions more than others.
          </p>

          <div className="lrn-faded">
            <div className="lrn-faded-phase">
              <span className="lrn-faded-label">WORKED EXAMPLE</span>
              <p>
                You sample many points from a middle-third Cantor set and count close pairs at two
                radii. You find {`$C(1/3) = 0.498$`} and {`$C(1/9) = 0.247$`}. Find {`$D_2$`}.
              </p>
              <ol className="lrn-list">
                <li>
                  {`The radius shrinks by a factor 3, from $1/3$ to $1/9$. So $\\ln(r_1/r_2) = \\ln 3 \\approx 1.0986$.`}
                </li>
                <li>
                  {`The count ratio is $C(1/3)/C(1/9) = 0.498/0.247 \\approx 2.016$, so $\\ln(2.016) \\approx 0.7012$.`}
                </li>
                <li>
                  {`The slope is $D_2 = \\ln(C_1/C_2)/\\ln(r_1/r_2) = 0.7012/1.0986 \\approx 0.638$.`}
                </li>
                <li>
                  {`This is close to $\\ln 2/\\ln 3 \\approx 0.631$, the known Cantor dimension. Two points give a rough slope; more radii would tighten it.`}
                </li>
              </ol>
            </div>
          </div>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>
              For a set of points spread evenly along a line, how should {`$C(r)$`} grow with
              {`$r$`}? What does that give for {`$D_2$`}?
            </p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                On a line, doubling {`$r$`} doubles how many neighbors fall inside the window. So
                the count of close pairs grows like {`$r^1$`}. That means {`$C(r) \\sim r^1$`} and
                {`$D_2 = 1$`}, the dimension of a line. On a filled square the count would grow like
                {`$r^2$`}, giving {`$D_2 = 2$`}. The power of {`$r$`} is the dimension.
              </p>
            </details>
          </div>
        </>,

        // SECTION 6: Strange Attractor Dimension from Lyapunov Exponents
        <>
          <h2>Strange Attractor Dimension from Lyapunov Exponents</h2>
          <p>
            Box-counting is a geometric method. There is also a dynamical method: compute
            {`$d_F$`} directly from the Lyapunov exponents of the system. The two results agree for
            well-studied attractors.
          </p>
          <p>
            Use this method when you have already computed the Lyapunov spectrum numerically and
            want to estimate {`$d_F$`} without doing a separate box-counting computation.
          </p>

          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              A 2D phase-space system has {`$\\lambda_1 < 0$`} (contraction) and
              {`$\\lambda_2 > 0$`} (expansion) with {`$|\\lambda_1| > \\lambda_2$`}. A small square
              of initial conditions evolves over time. Does it get taller or shorter? Does its area
              grow or shrink?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                It gets taller in the {`$\\lambda_2$`} direction (
                {`$a_y(t) = a_0 e^{\\lambda_2 t}$`}
                grows) and shorter in the {`$\\lambda_1$`} direction (
                {`$a_x(t) = a_0 e^{-|\\lambda_1|t}$`} shrinks). The area is
                {`$A(t) = A_0 e^{(\\lambda_2 - |\\lambda_1|)t}$`}. Since{' '}
                {`$|\\lambda_1| > \\lambda_2$`}, the exponent is negative: the area shrinks. The
                system is dissipative.
              </p>
            </details>
          </div>

          <h3>Phase-Space Square to Thin Strip</h3>
          <p>
            Start with a small square of side {`$a_0$`} in 2D phase space. The Lyapunov exponents{' '}
            {`$\\lambda_1 < 0$`} (contraction) and {`$\\lambda_2 > 0$`} (expansion) stretch and
            squeeze it:
          </p>
          <div className="lrn-eq">
            <span>{`$$a_x(t) = a_0\\, e^{-|\\lambda_1|t}, \\qquad a_y(t) = a_0\\, e^{\\lambda_2 t}$$`}</span>
          </div>
          <p>The total area evolves as:</p>
          <div className="lrn-eq">
            <span>{`$$A(t) = A_0\\, e^{(\\lambda_2 - |\\lambda_1|)t}$$`}</span>
          </div>
          <p>
            This is the 2D case of the volume-growth sum rule you proved in Lyapunov Exponents: the
            area grows at the rate {`$\\lambda_1 + \\lambda_2$`}, the sum of the two exponents.
            Since
            {`$|\\lambda_1| > \\lambda_2$`}, that sum is negative. The area shrinks to zero. The
            square becomes a thin tall strip.
          </p>

          <FdStrangeAttractorDim />

          <h3>Counting Boxes in the Strip</h3>
          <p>
            Use boxes of side {`$a_x(t)$`}, the shrinking width of the strip. That is the smallest
            scale in the picture, so it is the scale that resolves the fine structure across the
            strip. How many such boxes fit inside the evolved strip of area {`$A(t)$`}? Each box has
            area {`$\\Delta A(t) = a_0^2 e^{-2|\\lambda_1|t}$`}, so:
          </p>
          <div className="lrn-eq">
            <span>{`$$N(t) = \\frac{A(t)}{\\Delta A(t)} = \\frac{A_0\\, e^{(\\lambda_2 - |\\lambda_1|)t}}{a_0^2\\, e^{-2|\\lambda_1|t}} = e^{(\\lambda_2 + |\\lambda_1|)t}$$`}</span>
          </div>

          <h3>Deriving the Dimension Formula</h3>
          <div className="lrn-proof">
            <span className="lrn-proof-header">Fractal Dimension from Lyapunov Exponents</span>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">1.</span>
              <div className="lrn-proof-step-content">
                {`Apply the box-counting formula: $d_F = \\log N(t) / \\log(a_0/a_x(t))$.`}
              </div>
            </div>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">2.</span>
              <div className="lrn-proof-step-content">
                {`$\\log N(t) = (\\lambda_2 + |\\lambda_1|)t$ and
                $\\log(a_0/a_x(t)) = \\log e^{|\\lambda_1|t} = |\\lambda_1|t$.`}
              </div>
            </div>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">3.</span>
              <div className="lrn-proof-step-content">
                {`Divide: $d_F = \\frac{(\\lambda_2 + |\\lambda_1|)t}{|\\lambda_1|t}
                = \\frac{\\lambda_2 + |\\lambda_1|}{|\\lambda_1|}$.`}
              </div>
            </div>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">4.</span>
              <div className="lrn-proof-step-content">
                {`Simplify: $d_F = 1 + \\frac{\\lambda_2}{|\\lambda_1|}$.`}
              </div>
            </div>
            <div className="lrn-qed">Q.E.D.</div>
          </div>

          <div className="lrn-eq lrn-eq-hero">
            <span>{`$$d_F = 1 + \\frac{\\lambda_2}{|\\lambda_1|}$$`}</span>
          </div>
          <p>
            The numerator {`$\\lambda_2$`} encodes expansion (chaos). The denominator
            {`$|\\lambda_1|$`} encodes contraction (dissipation). The fractal dimension measures the
            balance between the two.
          </p>
          <p>
            You may have met this same result under the name <strong>Kaplan-Yorke dimension</strong>
            . That version is written {`$D_{KY} = 1 - \\sigma_1/\\sigma_2$`}, with{' '}
            {`$\\sigma_1 > 0$`}
            the expanding exponent and {`$\\sigma_2 < 0$`} the contracting one. Since{' '}
            {`$\\sigma_2$`}
            is negative, {`$1 - \\sigma_1/\\sigma_2 = 1 + \\sigma_1/|\\sigma_2|$`}. Match
            {`$\\sigma_1 = \\lambda_2$`} and {`$\\sigma_2 = \\lambda_1$`} and it is exactly our
            formula. Same idea, two names.
          </p>

          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>
              Why does {`$d_F$`} equal 1 plus a ratio, not just a ratio? The integer 1 comes from
              the one dimension in which the strip extends without bound (the
              {`$a_y$`} direction). The fractional part {`$\\lambda_2 / |\\lambda_1|$`}
              measures how much of the second dimension the attractor fills.
            </p>
            <p>
              When {`$\\lambda_2 \\to 0$`}, the expansion vanishes. The attractor becomes a smooth
              curve: {`$d_F \\to 1$`}. When {`$\\lambda_2 \\to |\\lambda_1|$`}, the expansion equals
              the contraction. The attractor nearly fills the plane:
              {`$d_F \\to 2$`}. The formula interpolates between these limits.
            </p>
          </div>

          <p>
            The two methods agree for well-studied attractors. The Lyapunov approach works straight
            from the differential equations. The box-counting approach works from raw phase-space
            data, but it needs the {`$r \\to 0$`} limit, which takes very long trajectories.
          </p>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>
              The logistic attractor has {`$d_F = 0.538$`} (from direct measurement). It lives in a
              1D phase space. How can the formula {`$d_F = 1 + \\lambda_2/|\\lambda_1|$`}
              give a value less than 1?
            </p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                The formula {`$d_F = 1 + \\lambda_2/|\\lambda_1|$`} applies to a 2D phase space (two
                Lyapunov exponents). The logistic map is 1D. In 1D phase space, the box-counting
                dimension is computed differently: the attractor is a dust inside a line, so{' '}
                {`$d_T = 0$`} and {`$d_E = 1$`}. The formula
                {`$d_F = 0.538$`} comes from direct box-counting on the 1D attractor. The Lyapunov
                formula is the 2D version for a strange attractor with two exponents of opposite
                sign.
              </p>
            </details>
          </div>
        </>,

        // SECTION 7: Regular vs Chaotic Orbits
        <>
          <h2>Regular Orbits vs Strange Attractors</h2>
          <p>
            The fractal dimension separates two very different kinds of long-time behavior in phase
            space. You can tell which kind you have by computing {`$d_F$`}.
          </p>

          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              A dissipative system with 2D phase space has all orbits converging to a set that
              appears to be a smooth closed curve. What is the fractal dimension of this set?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                A smooth closed curve is a 1D manifold. Its fractal dimension equals its topological
                dimension: {`$d_F = d_T = 1$`}. This is a limit cycle, not a strange attractor.
              </p>
            </details>
          </div>

          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Regular orbit</span>
              <p>
                The orbit settles into order. It fills a <em>torus</em> (a doughnut-shaped surface
                in phase space) in Hamiltonian systems, the energy-conserving ones with no friction.
                Or it converges to a limit cycle in dissipative systems. The orbit is predictable
                and covers a smooth surface densely (it comes arbitrarily close to every point).
                Fractal dimension equals topological dimension: {`$d_F = d_T$`}.
              </p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Chaotic orbit (strange attractor)</span>
              <p>
                The orbit wanders on a fractal object with {`$d_T < d_F < d_E$`}. It is sensitive to
                initial conditions. It looks like it fills an area in a 2D plot, but it really sits
                on a set with zero area (for {`$d_F < 2$`}).
              </p>
            </div>
          </div>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>
              A chaotic orbit in a 2D dissipative system looks like it fills an area when plotted.
              But we just said {`$d_F < 2$`}, so it has zero area. How can both be true?
            </p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                The plot looks filled because finite-time trajectories scatter dots across a region.
                Zoom in further and the fractal structure shows. The dots lie on thin interwoven
                curves with gaps at every scale. The set has zero area, yet it is more than a single
                curve: it has a real, nonzero size when you measure it at its own fractional
                dimension. The coarse plot just hides this structure.
              </p>
            </details>
          </div>
        </>,

        // SECTION 8: Chaotic Scattering and Cantor Sets
        <>
          <h2>Chaotic Scattering and Cantor Sets</h2>
          <p>
            Fractal structure appears not just in attractors but also in scattering problems. When a
            particle bounces between multiple hard disks, the set of initial conditions that lead to
            long trapped trajectories forms a Cantor set.
          </p>
          <p>
            The <strong>impact parameter</strong> {`$b$`} is the sideways offset of the incoming
            particle: how far off-center it aims at the target. You reach for this framework
            whenever a scattering result varies wildly with {`$b$`}, with sharp jumps at every scale
            of resolution.
          </p>

          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              In one-on-one hard-disk scattering, the deflection angle is a smooth function of
              impact parameter. In three-disk scattering, the time a particle spends before escaping
              is a wildly discontinuous function of impact parameter. What causes this difference?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                In one-on-one scattering, each trajectory bounces once and leaves. In three-disk
                scattering, trajectories can bounce between disks many times before escaping. The
                set of impact parameters that lead to {`$n$`} bounces before escaping is a hierarchy
                of intervals: the Cantor structure {`$I_n$`}. Small changes in impact parameter can
                shift a trajectory from escaping after 3 bounces to escaping after 30, making the
                function discontinuous everywhere.
              </p>
            </details>
          </div>

          <h3>Two-Disk Scattering: Trapped Orbit</h3>
          <p>
            One particle hits two disks. Trajectory 1 exits below disk 2. Trajectory 2 exits above
            disk 2. As you sweep smoothly from one to the other, the exit must pass through every
            value in between (this is the intermediate value theorem). So somewhere between them
            sits a trajectory that never escapes: a <strong>periodic orbit</strong>, a path that
            repeats forever, bouncing back and forth between the two disks.
          </p>
          <p>
            This orbit is a <strong>repeller</strong>: it is unstable. Any nearby trajectory
            eventually leaves. You cannot reach it from generic initial conditions. But it exists
            and organizes all nearby dynamics.
          </p>

          <h3>Three-Disk Scattering: Cantor Set of Trapped Orbits</h3>
          <p>
            Three disks in an equilateral triangle. A particle enters with impact parameter {`$b$`}.
            Define {`$I_0 = [-D/2, D/2]$`} as the full range of {`$b$`}. Define {`$I_1$`} as the set
            of {`$b$`} values that do not escape after the first bounce. Define {`$I_2$`} as those
            that do not escape after two bounces. Continuing:
          </p>
          <div className="lrn-eq">
            <span>{`$$I_\\infty = \\bigcap_{n=0}^{\\infty} I_n$$`}</span>
          </div>
          <p>
            This is a <strong>Cantor set</strong> of trapped orbits. Any orbit in {`$I_\\infty$`}
            bounces between all three disks forever. This set is not empty: for any infinite string
            of bounces you want, a finite-bounce orbit in {`$I_n$`} comes as close as you like.
          </p>

          <h3>The Time-Delay Function</h3>
          <p>
            Define {`$T(b)$`} as the time the particle spends before escaping. This function is
            wildly discontinuous: it spikes to infinity at every {`$b \\in I_\\infty$`}. Within any
            small window of {`$b$`}, there are sub-windows where {`$T$`} spikes again. The function
            is self-similar: zoom into any interval and you see the same pattern.
          </p>
          <p>
            Take a disk separation of {`$2.5$`} times the radius. Plot {`$T(b)$`} across the full
            range {`$[0, 0.5]$`}. You see spikes. Zoom into a tiny window like {`$[0.305, 0.311]$`}
            and you see the same spike pattern again. The structure repeats at every scale.
          </p>

          <h3>Why the Geometry Gives a Middle-Third Cantor Set</h3>
          <p>
            Look at what each bounce does to the impact parameter. At each bounce a trajectory has
            roughly two options: head toward disk {`$K$`} or toward disk {`$L$`}. So each surviving
            interval splits into two children. That is the "two copies" part.
          </p>
          <p>
            Now the scale. Three equal disks sit in an equilateral triangle. The geometry shrinks
            each surviving interval to about {`$1/3$`} of its parent at every bounce. Each child
            keeps about {`$1/3$`} of the length. Two children, each scaled by {`$1/3$`}: that is
            exactly the rule that builds the middle-third Cantor set.
          </p>

          <h3>Fractal Dimension of the Trapped-Orbit Set</h3>
          <p>
            Two copies, each scaled by {`$1/3$`}, is the same construction as the mathematical
            Cantor set in Section 3. So the trapped-orbit set has the same dimension:
          </p>
          <div className="lrn-eq">
            <span>{`$$d_f = \\frac{\\ln 2}{\\ln 3} \\approx 0.631$$`}</span>
          </div>
          <p>The physical scattering problem has produced the same fractal structure.</p>

          <h3>Lyapunov Exponent and Survival Probability</h3>
          <p>
            Define {`$\\lambda$`} as the rate at which nearby trajectories separate per bounce. The
            probability that a trajectory survives {`$m$`} bounces without escaping decays as:
          </p>
          <div className="lrn-eq">
            <span>{`$$P(\\text{survive} \\geq m) = e^{-\\gamma m}$$`}</span>
          </div>
          <p>
            where {`$\\gamma$`} is the <strong>escape rate</strong>. The Lyapunov exponent
            {`$\\lambda$`} and escape rate {`$\\gamma$`} connect to the fractal dimension by:
          </p>
          <div className="lrn-eq lrn-eq-hero">
            <span>{`$$\\gamma = (1 - d_f)\\,\\lambda$$`}</span>
          </div>
          <p>
            When {`$d_f \\to 1$`}: {`$\\gamma \\to 0$`} (orbits rarely escape, they are nearly all
            trapped). When {`$d_f \\to 0$`}: {`$\\gamma \\to \\lambda$`} (escape rate equals the
            separation rate, almost no orbits are trapped).
          </p>

          <p>
            Two facts drive the proof, and both come from the bounce picture above. First, each
            surviving interval splits into two children, and each child keeps a fraction {`$s$`} of
            its parent's trapped trajectories. We call {`$s$`} the{' '}
            <strong>survival fraction</strong>
            per bounce. For three equal disks {`$s = 2/3$`} (the two children together keep two
            thirds; each child is one third of the parent). Second, each child is scaled by
            {`$s/2$`}: there are two equal children, so each one holds half of the kept fraction.
            That per-child scale {`$s/2$`} is the Cantor scale {`$g$`} from Section 3.
          </p>

          <div className="lrn-proof">
            <span className="lrn-proof-header">
              Derivation of {String.raw`$\gamma = (1-d_f)\lambda$`}
            </span>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">1.</span>
              <div className="lrn-proof-step-content">
                {`Each bounce keeps a survival fraction $s$ of the trapped trajectories.
                Survival over $m$ bounces: $s^m = e^{-\\gamma m}$, so the escape rate is $\\gamma = |\\ln s|$.`}
              </div>
            </div>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">2.</span>
              <div className="lrn-proof-step-content">
                {`Two nearby trajectories stay together only if they take the same branch and that branch survives.
                One of two branches gives a factor $\\frac{1}{2}$; survival gives a factor $s$. So they stay together with probability $\\frac{s}{2}$ per bounce.`}
              </div>
            </div>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">3.</span>
              <div className="lrn-proof-step-content">
                {`The gap between two trajectories grows by the inverse of $\\frac{s}{2}$ each bounce.
                After $m$ bounces: $\\left(\\frac{s}{2}\\right)^m = e^{-\\lambda m}$, so the Lyapunov exponent is $\\lambda = |\\ln s| + \\ln 2 = \\gamma + \\ln 2$.`}
              </div>
            </div>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">4.</span>
              <div className="lrn-proof-step-content">
                {`Each child has Cantor scale $g = s/2$, so $|\\ln g| = \\ln 2 + |\\ln s|$.
                The dimension is $d_f = \\frac{\\ln 2}{|\\ln g|} = \\frac{\\ln 2}{\\ln 2 + |\\ln s|} = \\frac{\\ln 2}{\\ln 2 + \\gamma}$.`}
              </div>
            </div>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">5.</span>
              <div className="lrn-proof-step-content">
                {`Solve for $\\gamma$: $\\ln 2 + \\gamma = \\frac{\\ln 2}{d_f}$, so $\\gamma = \\frac{\\ln 2}{d_f}(1 - d_f)$.
                Since $\\lambda = \\gamma + \\ln 2 = \\frac{\\ln 2}{d_f}$, this gives $\\gamma = (1 - d_f)\\lambda$.`}
              </div>
            </div>
            <div className="lrn-qed">Q.E.D.</div>
          </div>
        </>
      ]
    },

    practice: [
      {
        q: `The Cantor set is built by removing the middle third of each interval, starting from $[0,1]$.
At level $n=5$, how many intervals remain and how long is each one?
Compute the fractal dimension.`,
        a: `At level $n=5$: $N = 2^5 = 32$ intervals, each of length $a = 3^{-5} = 1/243$.
The fractal dimension is $d_F = \\log N / \\log(a_0/a) = \\log(2^5)/\\log(3^5) = 5\\log 2/(5\\log 3) = \\log 2/\\log 3 \\approx 0.6309$.
The $n$ cancels at every level, confirming exact self-similarity: the dimension is the same at every scale.`
      },
      {
        q: `The Sierpinski carpet starts from a unit square. At level $n=3$, how many sub-squares remain and how large is each?
Compute $d_F$.`,
        a: `At level $n=3$: $N = 8^3 = 512$ sub-squares, each of side $a = 3^{-3} = 1/27$.
$d_F = \\log(8^3)/\\log(3^3) = 3\\log 8/(3\\log 3) = \\log 8/\\log 3 = \\ln 8/\\ln 3 \\approx 1.8928$.
Check: $d_T = 1 < 1.8928 < 2 = d_E$. The carpet sits strictly between a curve and a filled square.`
      },
      {
        q: `A chaotic 2D dissipative system has Lyapunov exponents $\\lambda_2 = 0.3$ (expansion) and $\\lambda_1 = -0.8$ (contraction).
What is the fractal dimension of its strange attractor?`,
        a: `Apply $d_F = 1 + \\lambda_2/|\\lambda_1| = 1 + 0.3/0.8 = 1 + 0.375 = 1.375$.
The result satisfies $1 < 1.375 < 2$, consistent with a strange attractor in 2D phase space.
The formula shows that contraction in one direction and expansion in the other create a fractal object
with dimension determined by the ratio of the two rates.`
      },
      {
        q: `A general Cantor set removes the fraction $1/f = 1/6$ at each step. Find $g$, and compute $d_f$.`,
        a: `Each surviving piece is scaled by $g = (f-1)/(2f) = 5/12 \\approx 0.4167$.
Then $|\\ln g| = \\ln(12/5) \\approx 0.8755$ and $\\ln 2 \\approx 0.6931$.
$d_f = \\ln 2 / |\\ln g| = 0.6931/0.8755 \\approx 0.7918$.
Removing a smaller fraction ($1/6 < 1/3$) gives a larger dimension ($0.79 > 0.63$).
More of the interval survives, so the set is denser.`
      },
      {
        q: `The logistic map strange attractor has $d_F = 0.538$. What are the dimensions $d_T$ and $d_E$ for this attractor?
Verify the ordering inequality.`,
        a: `The logistic map has a 1D phase space ($d_E = 1$). The attractor is a dust of points with $d_T = 0$.
Ordering: $0 = d_T < d_F = 0.538 < d_E = 1$. The attractor is strictly between a point and a line.
This confirms the attractor is a genuine fractal: more complex than a finite point set but less than a continuous curve.`
      },
      {
        q: `The ordering $d_T < d_F < d_E$ must hold for any fractal. What happens physically at the two limits
$d_F = d_T$ and $d_F = d_E$?`,
        a: `At $d_F = d_T$: the object is a smooth manifold (a curve, surface, or point). No fractal structure.
For a dissipative system this means the attractor is a simple limit cycle or fixed point.
At $d_F = d_E$: the object fills its embedding space completely (the attractor has positive area in 2D).
This would require $\\lambda_1 + \\lambda_2 = 0$ (no dissipation), which cannot happen for a dissipative attractor.
Real strange attractors always satisfy the strict inequality.`
      },
      {
        q: `For the driven-damped pendulum, $d_F \\in [1.2, 1.4]$ depending on damping. Using $d_F = 1 + \\lambda_2/|\\lambda_1|$,
what range of the ratio $\\lambda_2/|\\lambda_1|$ does this correspond to?`,
        a: `Since $d_F = 1 + \\lambda_2/|\\lambda_1|$, the ratio is $\\lambda_2/|\\lambda_1| = d_F - 1$.
For $d_F \\in [1.2, 1.4]$: $\\lambda_2/|\\lambda_1| \\in [0.2, 0.4]$.
This means the expansion rate is between 20% and 40% of the contraction rate.
Stronger damping (larger $|\\lambda_1|$) gives smaller ratio and smaller $d_F$: the attractor is thinner.`
      },
      {
        q: `In three-disk scattering, the escape rate $\\gamma$ and Lyapunov exponent $\\lambda$ satisfy $\\gamma = (1-d_f)\\lambda$.
If $d_f = 0.631$ and $\\lambda = 2.0$ (per bounce), what is $\\gamma$?`,
        a: `$\\gamma = (1 - 0.631) \\times 2.0 = 0.369 \\times 2.0 = 0.738$ per bounce.
This means the probability of surviving $m$ bounces decays as $e^{-0.738 m}$.
After 10 bounces the survival probability is $e^{-7.38} \\approx 0.00063$: less than 0.1% of trajectories remain.
The formula links the geometric property (fractal dimension) to the dynamical property (escape rate).`
      },
      {
        q: `TRANSFER: A coastline is measured at two resolutions. At resolution $\\varepsilon_1 = 1$ km,
you find $N_1 = 1000$ segments. At $\\varepsilon_2 = 0.1$ km, you find $N_2 = 15000$ segments.
Estimate the fractal dimension of the coastline.`,
        a: `Use $d_F \\approx \\log(N_2/N_1)/\\log(\\varepsilon_1/\\varepsilon_2) = \\log(15000/1000)/\\log(1/0.1) = \\log 15/\\log 10 \\approx 1.176/1 = 1.176$.
A fractal dimension around 1.2 is typical for real coastlines. The box-counting formula gives the same answer as for mathematical fractals.
The key step is recognizing that $N$ counts non-empty boxes at each resolution, and $\\varepsilon_1/\\varepsilon_2 = 10$ is the scale ratio.`
      },
      {
        q: `PREDICT: If you keep increasing the Lyapunov expansion rate $\\lambda_2$ while holding $|\\lambda_1|$ fixed,
what happens to the strange attractor?`,
        a: `$d_F = 1 + \\lambda_2/|\\lambda_1|$ increases toward 2. The attractor fills more and more of the 2D phase space.
At $\\lambda_2 = |\\lambda_1|$, $d_F = 2$ and the attractor would fill the plane: no dissipation, no net contraction.
In practice this limit is not a strange attractor but a Hamiltonian system where phase volume is conserved.
The fractal structure of the attractor disappears as it approaches the space-filling limit.`
      },
      {
        q: `ERROR DETECTION: A student computes $d_F = \\log(2^n)/\\log(3^n) = \\log 2^n/\\log 3$ for the Cantor set,
claiming the $n$ only cancels in the numerator. Find the error.`,
        a: `The error is in the denominator. The ratio $a_0/a = 3^n$ (not $3$). So $\\log(a_0/a) = \\log(3^n) = n\\log 3$.
The correct computation is $d_F = n\\log 2/(n\\log 3) = \\log 2/\\log 3 \\approx 0.631$.
The student canceled $n$ only in the numerator, giving $\\log(2^n)/\\log 3 = n \\times 0.631$, which grows with $n$.
A dimension cannot grow with scale: that is the error signal.`
      },
      {
        q: `ELABORATE: Why does the fractal dimension provide more information about a chaotic system
than just saying "the orbit is chaotic"?`,
        a: `Saying "chaotic" only says the Lyapunov exponent is positive. Fractal dimension adds quantitative structure.
$d_F$ tells you how much of the phase space the attractor occupies: a dimension close to $d_T$ means a thin, nearly smooth attractor;
a dimension close to $d_E$ means the attractor nearly fills the space.
For scattering, $d_f$ directly gives the escape rate via $\\gamma = (1-d_f)\\lambda$: a physically measurable quantity.
$d_F$ is also independent of the coordinate system you use, making it a robust invariant of the dynamics.`
      },
      {
        q: `A Sierpinski sponge (the 3D version of the Sierpinski carpet) is built by dividing a cube into 27 sub-cubes
and removing 7 of them at each step, leaving $N=20$ survivors per parent cube.
What is its fractal dimension? Check the ordering.`,
        a: `At level $n$: $N = 20^n$ sub-cubes, each of side $a = 3^{-n}$.
$d_F = \\log(20^n)/\\log(3^n) = \\log 20/\\log 3 = \\ln 20/\\ln 3$.
Since $\\ln 20 \\approx 2.996$ and $\\ln 3 \\approx 1.099$, $d_F \\approx 2.727$.
Check: $d_T = 2$ (surface-like) $< 2.727 < 3 = d_E$. The ordering holds. The sponge has dimension between a surface and a solid.`
      },
      {
        q: `SELF-EXPLAIN: In the derivation $d_F = 1 + \\lambda_2/|\\lambda_1|$, the area of the phase-space strip shrinks
to zero as $t \\to \\infty$. But the number of boxes $N(t) \\to \\infty$. How can both be true?`,
        a: `$N(t) = e^{(\\lambda_2 + |\\lambda_1|)t}$ counts boxes of size $a_x(t) = a_0 e^{-|\\lambda_1|t}$.
As $t \\to \\infty$, the box size $a_x \\to 0$ faster than the area shrinks.
You need more and more (tinier) boxes to cover the strip, even as the strip gets thinner overall.
The total area $N \\times a_x^2 = e^{(\\lambda_2-|\\lambda_1|)t} \\to 0$ as expected.
The fractal dimension is the exponent that relates $\\log N$ to $\\log(1/a_x)$, which remains finite and meaningful.`
      },
      {
        q: `TRANSFER: A fractal cluster is measured by mass-radius scaling, the same close-counting idea
as the correlation dimension. You count $N$ particles within radius $R$ of the center at two sizes:
$N(R=5) = 42$ and $N(R=10) = 112$. Estimate the fractal dimension.`,
        a: `Mass-radius scaling says the count inside radius $R$ grows as $N \\propto R^{d_F}$.
This is the correlation-dimension idea: more particles sit close together in a higher-dimensional set.
Take the log-log slope: $d_F = \\log(N_2/N_1)/\\log(R_2/R_1) = \\log(112/42)/\\log(10/5) = \\log(2.667)/\\log 2$.
$\\log(2.667) \\approx 0.426$ and $\\log 2 \\approx 0.301$, so $d_F \\approx 1.41$.
Real 2D diffusion-limited clusters have $d_F \\approx 1.71$. Our 1.41 misses that by 0.3, so it is not a good estimate.
The reason: two points at large $R$ feel the finite cluster edge, not the true small-$r$ scaling.
Counting at several smaller radii and fitting the slope would give a value much closer to 1.71.`
      },
      {
        q: `What is the physical meaning of $d_F = d_E$ for an attractor? Can a strange attractor have $d_F = d_E$?`,
        a: `$d_F = d_E$ means the attractor fills its embedding space: every point in the phase-space region is on the attractor.
A dissipative strange attractor cannot have $d_F = d_E$ because dissipation contracts phase volume.
The sum of all Lyapunov exponents satisfies $\\sum_i \\lambda_i < 0$ for a dissipative system.
If $d_F = d_E = 2$, the formula $d_F = 1 + \\lambda_2/|\\lambda_1| = 2$ requires $\\lambda_2 = |\\lambda_1|$, i.e., $\\lambda_1 + \\lambda_2 = 0$: zero dissipation.
So $d_F = d_E$ is possible only in Hamiltonian systems, not dissipative ones.`
      },
      {
        q: `PREDICT: For three-disk scattering, what happens to the escape rate $\\gamma$ if the disks are moved farther apart,
so that the survival fraction $s$ decreases?`,
        a: `Smaller $s$ means more of the impact-parameter interval is removed at each bounce step.
From $d_f = \\ln 2/(\\ln 2 + |\\ln s|)$: smaller $s$ means larger $|\\ln s|$, so smaller $d_f$.
From $\\gamma = (1-d_f)\\lambda$: smaller $d_f$ means larger $(1-d_f)$, so larger $\\gamma$.
Larger $\\gamma$ means particles escape faster on average.
Physically: farther apart disks give particles more room to escape after each bounce, so fewer trajectories are long-lived.`
      },
      {
        q: `ELABORATE: The time-delay function $T(b)$ for three-disk scattering is self-similar.
What does this tell you about the structure of the trapped-orbit Cantor set?`,
        a: `$T(b)$ spikes to infinity at every $b \\in I_\\infty$ (the Cantor set of trapped orbits).
Self-similarity means: zoom into any small interval of $b$ and you see the same pattern of spikes.
This tells you that the Cantor set $I_\\infty$ has the same structure at every scale: it is exactly self-similar.
Within any window of impact parameters, no matter how small, there are sub-windows of trapped orbits.
The fractal dimension $d_f \\approx 0.631$ quantifies how densely these spikes are packed: fewer than a line ($d_f < 1$) but infinitely many.`
      },
      {
        q: `A chaotic 2D system has Lyapunov exponents $\\lambda_2 = 0.1$ and $\\lambda_1 = -0.5$.
Compute $d_F$ and identify which physical system this most resembles from the values in this topic.`,
        a: `$d_F = 1 + 0.1/0.5 = 1 + 0.2 = 1.2$. This is at the low end of the range $[1.2, 1.4]$ quoted for the driven-damped pendulum.
It represents a strange attractor that is relatively thin (small $\\lambda_2/|\\lambda_1|$ ratio).
The orbit expands slowly and contracts quickly, producing a fractal object close to a smooth curve in structure.
The logistic attractor ($d_F = 0.538$) is not comparable because it lives in 1D, not 2D.`
      }
    ],

    reference: {
      category: 'Quick Reference',
      title: 'Fractal Dimension: Box-Counting and Correlation',
      sections: [
        <>
          <h2>Core Definitions</h2>
          <div className="lrn-definition">
            <div className="lrn-definition-desc">
              <div>
                <p>
                  <strong>Fractal:</strong> an object with noninteger dimension that repeats the
                  same structure at all scales.
                </p>
                <p>
                  <strong>Topological dimension {`$d_T$`}:</strong> the plain count-of-directions
                  dimension (0 for points like the Cantor set, 1 for curves like the Sierpinski
                  carpet).
                </p>
                <p>
                  <strong>Euclidean dimension {`$d_E$`}:</strong> dimension of the embedding space.
                </p>
                <p>
                  <strong>Fractal dimension {`$d_F$`}:</strong> noninteger value satisfying
                  {`$d_T < d_F < d_E$`}, defined by box-counting.
                </p>
              </div>
            </div>
          </div>

          <h2>Key Formulas</h2>

          <div className="lrn-definition">
            <div className="lrn-definition-desc">
              <div>
                <p>
                  <strong>Subdivision (box-counting) dimension:</strong>
                </p>
              </div>
            </div>
          </div>
          <div className="lrn-eq lrn-eq-hero">
            <span>{`$$d_F = \\frac{\\log N(a)}{\\log(a_0/a)}$$`}</span>
          </div>
          <p>
            When to use: any self-similar fractal where you know {`$N$`} and {`$a$`} at each level.
          </p>

          <div className="lrn-definition">
            <div className="lrn-definition-desc">
              <div>
                <p>
                  <strong>General box-counting limit:</strong>
                </p>
              </div>
            </div>
          </div>
          <div className="lrn-eq lrn-eq-hero">
            <span>{`$$d_F = \\lim_{r \\to 0} \\frac{\\log N(r)}{\\log(r_0/r)}$$`}</span>
          </div>
          <p>
            When to use: numerical data from phase-space trajectories or experimental measurements.
          </p>

          <div className="lrn-definition">
            <div className="lrn-definition-desc">
              <div>
                <p>
                  <strong>Cantor set fractal dimension:</strong>
                </p>
              </div>
            </div>
          </div>
          <div className="lrn-eq lrn-eq-hero">
            <span>{`$$d_F = \\frac{\\ln 2}{\\ln 3} \\approx 0.6309$$`}</span>
          </div>
          <p>
            When to use: middle-third Cantor set, or as the reference value for trapped-orbit Cantor
            sets in chaotic scattering.
          </p>

          <div className="lrn-definition">
            <div className="lrn-definition-desc">
              <div>
                <p>
                  <strong>Sierpinski carpet fractal dimension:</strong>
                </p>
              </div>
            </div>
          </div>
          <div className="lrn-eq lrn-eq-hero">
            <span>{`$$d_F = \\frac{\\ln 8}{\\ln 3} \\approx 1.8928$$`}</span>
          </div>
          <p>When to use: 2D version of the Cantor set (remove center of each 3×3 block).</p>

          <div className="lrn-definition">
            <div className="lrn-definition-desc">
              <div>
                <p>
                  <strong>Strange attractor dimension from Lyapunov exponents:</strong>
                </p>
              </div>
            </div>
          </div>
          <div className="lrn-eq lrn-eq-hero">
            <span>{`$$d_F = 1 + \\frac{\\lambda_2}{|\\lambda_1|}$$`}</span>
          </div>
          <p>
            When to use: 2D phase-space dissipative system with one positive ({`$\\lambda_2 > 0$`})
            and one negative ({`$\\lambda_1 < 0$`}) Lyapunov exponent,{' '}
            {`$|\\lambda_1| > \\lambda_2$`}.
          </p>

          <div className="lrn-definition">
            <div className="lrn-definition-desc">
              <div>
                <p>
                  <strong>General Cantor set dimension (removal fraction {`$1/f$`}):</strong>
                </p>
              </div>
            </div>
          </div>
          <div className="lrn-eq lrn-eq-hero">
            <span>{`$$d_f = \\frac{\\ln 2}{|\\ln g|}, \\quad g = \\frac{f-1}{2f}$$`}</span>
          </div>
          <p>
            When to use: Cantor construction where a fraction {`$1/f$`} is removed at each step (
            {`$f=3$`} gives the middle-third case). Here {`$g$`} is the scale of each surviving
            piece, so {`$f=3$`} gives {`$g=1/3$`} and {`$d_f = \\ln 2 / \\ln 3$`}.
          </p>

          <div className="lrn-definition">
            <div className="lrn-definition-desc">
              <div>
                <p>
                  <strong>Fractal dimension and escape rate in chaotic scattering:</strong>
                </p>
              </div>
            </div>
          </div>
          <div className="lrn-eq lrn-eq-hero">
            <span>{`$$\\gamma = (1 - d_f)\\,\\lambda$$`}</span>
          </div>
          <p>
            When to use: multi-disk or multi-hill scattering where the set of trapped initial
            conditions is a Cantor set with dimension {`$d_f$`} and the trajectory-separation rate
            is {`$\\lambda$`}.
          </p>

          <div className="lrn-definition">
            <div className="lrn-definition-desc">
              <div>
                <p>
                  <strong>Correlation dimension {`$D_2$`} (Grassberger-Procaccia):</strong>
                </p>
              </div>
            </div>
          </div>
          <div className="lrn-eq lrn-eq-hero">
            <span>{`$$C(r) = \\frac{2}{N(N-1)} \\sum_{i<j} \\Theta(r - |\\mathbf{x}_i - \\mathbf{x}_j|), \\quad C(r) \\sim r^{D_2}$$`}</span>
          </div>
          <p>
            When to use: a cloud of {`$N$`} sampled points (a chaotic orbit). {`$C(r)$`} is the
            fraction of point pairs closer than {`$r$`}. The slope of {`$\\ln C$`} vs {`$\\ln r$`}
            gives {`$D_2$`}. Always {`$D_2 \\leq d_F$`}, with equality for clean self-similar sets.
          </p>

          <h2>Phase-Space Evolution (Lyapunov Derivation)</h2>
          <div className="lrn-definition">
            <div className="lrn-definition-desc">
              <div>
                <p>
                  Start: small square of side {`$a_0$`}. Exponents{' '}
                  {`$\\lambda_1 < 0, \\lambda_2 > 0, |\\lambda_1| > \\lambda_2$`}.
                </p>
                <p>
                  {`$a_x(t) = a_0 e^{-|\\lambda_1|t}$`} (shrinks),{' '}
                  {`$a_y(t) = a_0 e^{\\lambda_2 t}$`} (grows).
                </p>
                <p>{`$A(t) = A_0 e^{(\\lambda_2 - |\\lambda_1|)t}$`} (total area shrinks).</p>
                <p>
                  {`$N(t) = A(t)/a_x^2(t) = e^{(\\lambda_2 + |\\lambda_1|)t}$`} (box count grows).
                </p>
                <p>
                  {`$d_F = \\log N/\\log(a_0/a_x) = (\\lambda_2 + |\\lambda_1|)/|\\lambda_1| = 1 + \\lambda_2/|\\lambda_1|$`}
                  .
                </p>
              </div>
            </div>
          </div>

          <h2>Dimension Values Table</h2>
          <div className="lrn-definition">
            <div className="lrn-definition-desc">
              <div>
                <p>
                  <strong>Cantor set:</strong> {`$d_T = 0$`}, {`$d_F \\approx 0.631$`},{' '}
                  {`$d_E = 1$`}
                </p>
                <p>
                  <strong>Sierpinski carpet:</strong> {`$d_T = 1$`}, {`$d_F \\approx 1.893$`},{' '}
                  {`$d_E = 2$`}
                </p>
                <p>
                  <strong>Logistic attractor:</strong> {`$d_T = 0$`}, {`$d_F = 0.538$`},{' '}
                  {`$d_E = 1$`}
                </p>
                <p>
                  <strong>Driven pendulum:</strong> {`$d_T = 1$`}, {`$d_F \\in [1.2, 1.4]$`},{' '}
                  {`$d_E = 2$`}
                </p>
              </div>
            </div>
          </div>

          <h2>Dimension Ordering</h2>
          <div className="lrn-eq lrn-eq-hero">
            <span>{`$$d_T < d_F < d_E$$`}</span>
          </div>
          <p>Holds for all fractals. Equality at either end means the object is not fractal.</p>
        </>
      ]
    },

    customCss: null
  }

  return <LearningTemplate config={config} />
}
