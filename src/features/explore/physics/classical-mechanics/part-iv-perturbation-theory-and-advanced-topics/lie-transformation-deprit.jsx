import { LearningTemplate } from '../../../../../components/learning/learning-template'
import {
  LieSeriesFlow,
  DepritTriangle,
  PendulumOrderConvergence
} from '../../../../../components/viz'

export default function LieTransformationDeprit() {
  const config = {
    cssPrefix: 'ltd',
    documentTitle: 'Lie Transformation Method (Deprit Series) - AETHER',
    customCss: null,
    learning: {
      category: 'Module 4',
      groupTitle: 'Perturbation Theory',
      title: 'Lie Transformation Method (Deprit Series)',
      subtitle: 'A canonical, pattern-repeating approach to higher-order perturbation theory',
      sections: [
        <>
          <h2>Why Another Way to Do Perturbation Theory</h2>
          <div className="lrn-predict">
            <p>
              <strong>Before you read:</strong> You have seen the Poincaré-Von Zeipel method for
              first-order perturbation theory. Suppose you need a second-order correction. What do
              you think goes wrong when you try to push the mixed-variable method to second order?
            </p>
          </div>

          <p>
            The mixed-variable canonical perturbation method from the previous page, named the
            Poincaré-Von Zeipel method, uses a generating function {`$S(\\theta, \\bar J, t)$`} that
            mixes old angle coordinates {`$\\theta$`} with new action coordinates {`$\\bar J$`}.
            This mix is the source of trouble. Here {`$\\bar J$`} is the new action and{' '}
            {`$\\varepsilon$`}
            is the small parameter that measures how strong the perturbation is.
          </p>

          <p>
            At first order the trouble stays manageable. You solve for {`$\\bar J$`} implicitly,
            invert the relation, and move on. At second order, the implicit inversion becomes a
            transcendental equation. That means an equation you cannot solve with plain algebra.
            Cross-terms multiply. No repeating pattern emerges. The algebra collapses under its own
            weight.
          </p>

          <p>
            <strong>When to use Lie transforms:</strong> Use them any time you need second order or
            higher corrections. Use them too for adiabatic invariants, the quantities that stay
            nearly fixed when a system changes slowly. At first order the two methods are equally
            fast. At second order and beyond, Lie transforms are the only practical path.
          </p>

          <div className="lrn-compare">
            <div className="lrn-compare-item">
              <div className="lrn-compare-label">Poincaré-Von Zeipel</div>
              <ul className="lrn-list">
                <li>
                  Generating function {`$S(\\theta, \\bar J, t)$`} mixes old angles and new actions
                </li>
                <li>Transformation appears in implicit form</li>
                <li>At each order: solve a transcendental equation for old variables</li>
                <li>No algebraic pattern survives beyond first order</li>
                <li>Cross-terms multiply; computation becomes intractable</li>
              </ul>
            </div>
            <div className="lrn-compare-item">
              <div className="lrn-compare-label">Lie Transform</div>
              <ul className="lrn-list">
                <li>
                  Lie generator {`$w(\\bar x, \\varepsilon)$`} lives at a single set of coordinates
                </li>
                <li>Transformation is explicit and near-identity by construction</li>
                <li>At each order: one Poisson bracket equation with a recognizable pattern</li>
                <li>Canonicality is automatic at every step</li>
                <li>Scales to any order via the same recursion</li>
              </ul>
            </div>
          </div>
        </>,

        <>
          <h2>The Lie Generating Function and the Flow It Makes</h2>

          <div className="lrn-predict">
            <p>
              <strong>Predict:</strong> If a function {`$w$`} on phase space generates a flow{' '}
              {`$\\frac{d\\bar x}{d\\varepsilon} = [\\bar x, w]$`}, and you recognize this as
              Hamilton's equations with {`$\\varepsilon$`} as time and {`$w$`} as Hamiltonian, what
              can you immediately say about the transformation the flow produces?
            </p>
          </div>

          <p>
            The Lie generating function {`$w(\\bar x, \\varepsilon)$`} is a function on phase space.
            Here {`$\\bar x$`} stands for the full phase-space point {`$(q, p)$`}, position and
            momentum together. It satisfies
          </p>

          <div className="lrn-eq lrn-eq-hero">
            {`$$\\frac{d\\bar x}{d\\varepsilon} = [\\bar x,\\, w]$$`}
          </div>

          <p>
            The square brackets {`$[\\,\\cdot\\,,\\,\\cdot\\,]$`} are the Poisson bracket you
            already know. Throughout this page we write the Poisson bracket as{' '}
            {`$[\\,\\cdot\\,,\\,\\cdot\\,]$`}. Some books write the same operation with curly braces{' '}
            {`$\\{\\,\\cdot\\,,\\,\\cdot\\,\\}$`}; the two mean exactly the same thing.
          </p>

          <p>
            This is Hamilton's equations with {`$\\varepsilon$`} as time and {`$w$`} as Hamiltonian.
            Hamilton's equations always produce canonical transformations. So the solution
            {`$\\bar x = \\bar x(x, \\varepsilon)$`} is a canonical transformation for any value of{' '}
            {`$\\varepsilon$`}. You never need to check canonicality separately. It is exact, not
            approximate.
          </p>

          <p>
            At {`$\\varepsilon = 0$`} the transformation is the identity: {`$\\bar x = x$`}. For
            small {`$\\varepsilon$`} the image {`$\\bar x$`} is close to {`$x$`}. This is what
            near-identity means.
          </p>

          <div className="lrn-elaborate">
            <p>
              <strong>Why is this true?</strong> The Poisson bracket of any function with a
              Hamiltonian generates the matching Hamiltonian vector field. Integrate that vector
              field and you get a canonical map. So{' '}
              {`$\\frac{d\\bar x}{d\\varepsilon} = [\\bar x, w]$`} is Hamilton's equations in
              disguise: {`$\\varepsilon$`} plays the role of time, {`$w$`} plays the role of the
              Hamiltonian, and the flow is canonical for every {`$\\varepsilon$`}. The Poincaré-Von
              Zeipel method makes you check canonicality at each order. Here it is free.
            </p>
          </div>

          <LieSeriesFlow />
          <p>
            The visualization shows the phase-space grid deformed by a Lie flow with generator
            {` `}
            {`$w = \\frac{q^3}{3}$`}. The exact map is{' '}
            {`$(q, p) \\to (q,\\, p - \\varepsilon q^2)$`}. Vertical lines stay fixed because{' '}
            {`$\\frac{dq}{d\\varepsilon} = 0$`}. Horizontal lines bend into parabolas as{' '}
            {`$\\varepsilon$`} grows. At {`$\\varepsilon = 0$`} the grid is unchanged: the identity.
          </p>

          <div className="lrn-self-explain">
            <p>
              <strong>Self-explain:</strong> Why do the vertical lines not move in the
              visualization, while the horizontal lines bend? Trace through
              {` `}
              {`$\\frac{dq}{d\\varepsilon} = [q, w]$`} and {`$\\frac{dp}{d\\varepsilon} = [p, w]$`}
              for {`$w = \\frac{q^3}{3}$`} to confirm.
            </p>
          </div>
        </>,

        <>
          <h2>The Evolution Operator T and the Lie Operator L</h2>

          <p>
            Define the <strong>evolution operator</strong> {`$T$`} as the operator that maps a
            function {`$g$`} defined at the transformed point to a function at the original point:
          </p>

          <div className="lrn-eq">
            {`$$f = Tg \\quad \\Longleftrightarrow \\quad f(x) = g[\\bar x(x, \\varepsilon)]$$`}
          </div>

          <p>
            Applied to coordinates: {`$\\bar x = Tx$`}. Define the <strong>Lie operator</strong>:
          </p>

          <div className="lrn-eq lrn-eq-hero">{`$$L = [w,\\,\\cdot\\,]$$`}</div>

          <p>
            That is, {`$Lf = [w, f]$`} for any function {`$f$`}. Then differentiate {`$T$`}
            with respect to {`$\\varepsilon$`} holding {`$x$`} fixed. Using
            {` `}
            {`$\\frac{d\\bar x}{d\\varepsilon} = [\\bar x, w] = L\\bar x$`}, one finds:
          </p>

          <div className="lrn-eq">{`$$\\frac{dT}{d\\varepsilon} = -TL$$`}</div>

          <p>This is a linear operator ODE. Its formal solution is the operator exponential:</p>

          <div className="lrn-eq lrn-eq-hero">
            {`$$T = \\exp\\!\\left(-\\int_0^\\varepsilon L(\\varepsilon')\\,d\\varepsilon'\\right)$$`}
          </div>

          <p>
            For autonomous systems {`$H$`} does not depend explicitly on time. Conservation of
            energy then gives {`$\\bar H(\\bar x) = H(x)$`}. Apply {`$T^{-1}$`}, the inverse of{' '}
            {`$T$`}, which carries a function at the old point forward to the new point. Applying it
            to both sides:
          </p>

          <div className="lrn-eq lrn-eq-hero">{`$$\\bar H = T^{-1} H$$`}</div>

          <div className="lrn-compare">
            <div className="lrn-compare-item">
              <div className="lrn-compare-label">Autonomous (time-independent w)</div>
              <ul className="lrn-list">
                <li>Old and new energies are equal: {`$\\bar H(\\bar x) = H(x)$`}</li>
                <li>New Hamiltonian: {`$\\bar H = T^{-1} H$`} directly</li>
                <li>No extra terms</li>
              </ul>
            </div>
            <div className="lrn-compare-item">
              <div className="lrn-compare-label">Nonautonomous (Dewar form)</div>
              <ul className="lrn-list">
                <li>
                  {`$w$`} depends explicitly on {`$t$`}; old and new energies differ
                </li>
                <li>
                  Correct relation (the Dewar form):{' '}
                  {`$\\bar H = T^{-1}H + T^{-1}\\!\\int_0^\\varepsilon d\\varepsilon'\\, T(\\varepsilon')\\,\\frac{\\partial w}{\\partial t}$`}
                </li>
                <li>The extra integral accounts for explicit time dependence of {`$w$`}</li>
                <li>Required for all adiabatic-invariant calculations</li>
              </ul>
            </div>
          </div>

          <div className="lrn-elaborate">
            <p>
              <strong>Why does the Dewar form have an extra term?</strong> In the autonomous case
              the Hamiltonian is the total energy, which is conserved under any canonical
              transformation. So new energy equals old energy, and {`$\\bar H = T^{-1}H$`} follows.
            </p>
            <p>
              When {`$w = w(x, t)$`} the generator changes with time. The canonical transformation
              is now time-dependent. The new Hamiltonian must account for this: it picks up a
              correction equal to the rate of change of {`$w$`} with time, pulled back by{' '}
              {`$T^{-1}$`}. The Dewar form comes from differentiating the fundamental relation with
              respect to both {`$\\varepsilon$`} and {`$t$`}. You then use the Jacobi identity to
              drop the leftover terms.
            </p>
          </div>
        </>,

        <>
          <h2>Building the Series Order by Order: The Deprit Recursion</h2>

          <div className="lrn-predict">
            <p>
              <strong>Predict:</strong> Suppose you insert power series for {`$w$`}, {`$L$`},{`$T$`}
              , {`$H$`}, and {`$\\bar H$`} into {`$\\bar H = T^{-1} H$`} and equate powers of{' '}
              {`$\\varepsilon$`}. What do you expect the equation at order {`$n$`} to look like?
              What quantities from previous orders appear on the right-hand side?
            </p>
          </div>

          <p>
            <strong>The goal:</strong> build a transformation that leaves you with a new Hamiltonian
            {` `}
            {`$\\bar H$`} depending only on the actions, not the angles. A Hamiltonian that depends
            only on actions is trivially solved: the actions are constants and the angles advance at
            steady rates. Every step below works toward that one target.
          </p>

          <p>Expand every object in powers of {`$\\varepsilon$`}:</p>

          <div className="lrn-eq">
            {`$$w = \\sum_{n=0}^\\infty \\varepsilon^n w_{n+1}, \\quad
              L = \\sum_{n=0}^\\infty \\varepsilon^n L_{n+1}, \\quad
              T = \\sum_{n=0}^\\infty \\varepsilon^n T_n$$`}
          </div>

          <div className="lrn-eq">
            {`$$H = \\sum_{n=0}^\\infty \\varepsilon^n H_n, \\quad
              \\bar H = \\sum_{n=0}^\\infty \\varepsilon^n \\bar H_n$$`}
          </div>

          <p>
            Insert into {`$\\frac{dT}{d\\varepsilon} = -TL$`} and equate powers of{' '}
            {`$\\varepsilon$`}. You get recursions for {`$T_n$`} and {`$T_n^{-1}$`}:
          </p>

          <div className="lrn-eq">
            {`$$T_n = -\\frac{1}{n}\\sum_{m=0}^{n-1} T_m L_{n-m}, \\quad T_0 = 1$$`}
          </div>

          <div className="lrn-eq">
            {`$$T_n^{-1} = \\frac{1}{n}\\sum_{m=0}^{n-1} L_{n-m} T_m^{-1}, \\quad T_0^{-1} = 1$$`}
          </div>

          <p>
            To get {`$T_n^{-1}$`} from {`$T_n$`}: replace each {`$L_k$`} by {`$-L_k$`} and reverse
            the order of all noncommuting {`$L$`} operators.
          </p>

          <p>
            Insert all series into the Dewar form (or its autonomous version) and equate powers of{' '}
            {`$\\varepsilon$`}. At order {`$n > 0$`} you obtain the{' '}
            <strong>Deprit recursion</strong>, also called the homological equation:
          </p>

          <div className="lrn-eq lrn-eq-hero">
            {`$$D_0 w_n = n(\\bar H_n - H_n)
              - \\sum_{m=1}^{n-1}\\bigl(L_{n-m}\\bar H_m + m T_{n-m}^{-1} H_m\\bigr)$$`}
          </div>

          <p>
            where {`$D_0 \\equiv \\frac{\\partial}{\\partial t} + [\\cdot, H_0]$`} is the
            unperturbed total time derivative (derivative along unperturbed orbits).
          </p>

          <p>
            Check the smallest case to see the recursion is earned, not magic. At order {`$n = 1$`}{' '}
            the sum {`$\\sum_{m=1}^{n-1}$`} runs from {`$1$`} to {`$0$`}, so it is empty. The
            equation collapses to {`$D_0 w_1 = 1\\cdot(\\bar H_1 - H_1)$`}. Each higher order keeps
            the same shape and only adds known lower-order terms on the right. To the first three
            orders:
          </p>

          <div className="lrn-eq">{`$$D_0 w_1 = \\bar H_1 - H_1$$`}</div>
          <div className="lrn-eq">{`$$D_0 w_2 = 2(\\bar H_2 - H_2) - L_1(\\bar H_1 + H_1)$$`}</div>
          <div className="lrn-eq">
            {`$$D_0 w_3 = 3(\\bar H_3 - H_3) - L_1(\\bar H_2 + 2H_2) - L_2(\\bar H_1 + \\tfrac{1}{2}H_1) - \\tfrac{1}{2}L_1^2 H_1$$`}
          </div>

          <p>
            <strong>How to solve at each order:</strong> The right-hand side at order {`$n$`}
            involves only quantities from orders {`$1$`} through {`$n-1$`}. That is the triangular
            structure. You proceed as follows.
          </p>

          <ol className="lrn-list">
            <li>Compute the right-hand side using known lower-order quantities.</li>
            <li>
              Choose {`$\\bar H_n$`} to be the average of the right-hand side over the fast angle.
              This is the same averaging step you used for canonical perturbation theory in the
              previous topic. It removes the secular part: the angle-independent terms that would
              otherwise make {`$w_n$`} grow without bound. Because {`$D_0$`} differentiates along
              the fast angle, it annihilates angle-independent functions, so these averaged terms
              are its null space.
            </li>
            <li>
              Solve {`$D_0 w_n = \\text{(oscillating part)}$`} for {`$w_n$`}. The oscillating part
              is in the range of {`$D_0$`}, so a bounded solution always exists.
            </li>
          </ol>

          <div className="lrn-warning">
            <p>
              <strong>The series is asymptotic, not convergent.</strong> Adding more orders improves
              the answer up to a point, then the terms start to grow again. The Lie series almost
              never converges to an exact solution. It is an asymptotic series: useful and accurate
              for the first several orders, especially when {`$\\varepsilon$`} is small. Resonances
              and small denominators set the limit, and near a separatrix the series fails outright.
              Treat it as a sharp tool with a known edge, not a path to an exact closed form.
            </p>
          </div>

          <DepritTriangle />
          <p>
            The diagram shows how information flows between orders. Known {`$H_n$`} values feed each
            level. The homological equation at order {`$n$`} uses all previous {`$\\bar H_m$`}
            and {`$w_m$`} via repeated Poisson brackets. The solid arrows show the primary inputs;
            the dashed arrows show the feed-forward from previous outputs.
          </p>

          <div className="lrn-self-explain">
            <p>
              <strong>Self-explain:</strong> At second order, the right-hand side of the Deprit
              recursion contains the term {`$L_1(\\bar H_1 + H_1)$`}. Explain where this term comes
              from. Which order of the {`$T_n^{-1}$`} recursion does it appear in?
            </p>
          </div>
        </>,

        <>
          <h2>Worked Example: The Pendulum to Second Order</h2>

          <div className="lrn-predict">
            <p>
              <strong>Predict:</strong> The pendulum Hamiltonian in action-angle variables starts
              with {`$H_0 = \\omega_0 J$`} and a nonlinear correction
              {` `}
              {`$H_1$`} containing {`$\\cos 2\\theta$`} and {`$\\cos 4\\theta$`} terms. At first
              order, what must {`$\\bar H_1$`} be to keep {`$w_1$`} bounded? What goes into{' '}
              {`$\\bar H_2$`} that is not already in {`$\\langle H_2 \\rangle$`}?
            </p>
          </div>

          <p>The pendulum in action-angle variables has:</p>

          <div className="lrn-eq">
            {`$$H_0 = \\omega_0 J, \\quad
              H_1 = -\\frac{G J^2}{48}\\bigl(3 - 4\\cos 2\\theta + \\cos 4\\theta\\bigr)$$`}
          </div>

          <p>
            Here {`$J$`} and {`$\\theta$`} are the action and angle, {`$\\omega_0$`} is the
            small-swing frequency (the rate of a tiny pendulum swing), and {`$G$`} is the pendulum's
            nonlinearity parameter. {`$G$`} is a fixed constant set by the pendulum, not a variable.
            It measures how strongly the frequency drops as the swing grows, and it carries the
            dimensions of frequency divided by action. The term {`$H_1$`} is the first nonlinear
            correction, the part that makes a real pendulum slow down at large swings.
          </p>

          <p>
            For the autonomous oscillator{' '}
            {`$D_0 = \\omega_0\\,\\frac{\\partial}{\\partial\\theta}$`}.
          </p>

          <p>
            One piece of notation for this section: write {`$\\tilde H_1$`} for the{' '}
            <strong>oscillating part</strong> of {`$H_1$`}, the part left over after you subtract
            its angle average. So {`$H_1 = \\langle H_1\\rangle + \\tilde H_1$`}, where{' '}
            {`$\\langle\\,\\cdot\\,\\rangle$`} means the average over the angle {`$\\theta$`}.
          </p>

          <div className="lrn-faded">
            <p>
              <strong>Work through the pendulum step by step.</strong>
            </p>
            <ol className="lrn-list">
              <li>
                <strong>Zero order.</strong> Apply {`$\\bar H_0 = H_0$`} directly:
                {`$\\bar H_0 = \\omega_0 J$`}.
              </li>
              <li>
                <strong>First order, choose {`$\\bar H_1$`}.</strong> Average {`$H_1$`} over the
                angle. The {`$\\cos 2\\theta$`} and {`$\\cos 4\\theta$`} terms average to zero,
                leaving only the constant {`$3$`}:{' '}
                {`$\\langle H_1 \\rangle = -\\frac{G J^2}{48}\\cdot 3 = -\\frac{1}{16}G J^2$`}. Set{' '}
                {`$\\bar H_1 = \\langle H_1 \\rangle$`} to remove the secular part.
              </li>
              <li>
                <strong>First order, solve for {`$w_1$`}.</strong> Subtract the average to get the
                oscillating part{' '}
                {`$\\tilde H_1 = \\frac{G J^2}{48}(4\\cos 2\\theta - \\cos 4\\theta)$`}. The
                homological equation is{' '}
                {`$\\omega_0\\,\\frac{\\partial w_1}{\\partial\\theta} = -\\tilde H_1$`}. Integrate
                term by term in {`$\\theta$`} (each {`$\\cos n\\theta$`} integrates to{' '}
                {`$\\frac{\\sin n\\theta}{n}$`}):
                {` `}
                {`$w_1 = \\frac{1}{192}\\frac{G J^2}{\\omega_0}(\\sin 4\\theta - 8\\sin 2\\theta)$`}
                .
              </li>
              <li>
                <strong>Second order, compute {`$[w_1, \\tilde H_1]$`}.</strong> Take the Poisson
                bracket{' '}
                {`$[w_1,\\tilde H_1] = \\frac{\\partial w_1}{\\partial\\theta}\\frac{\\partial \\tilde H_1}{\\partial J} - \\frac{\\partial w_1}{\\partial J}\\frac{\\partial \\tilde H_1}{\\partial\\theta}$`}
                . It is the same kind of computation worked in full in the practice set. The result
                is
                {` `}
                {`$[w_1, \\tilde H_1] = -\\frac{1}{1152}\\frac{G^2 J^3}{\\omega_0}(17 - 9\\cos 2\\theta + \\cos 6\\theta)$`}
                .
              </li>
              <li>
                <strong>Second order, choose {`$\\bar H_2$`}.</strong> Average the second-order
                right-hand side over the angle. For this pendulum {`$H_2 = 0$`}, so the whole
                contribution comes from the cross-term built out of {`$w_1$`} and {`$H_1$`}.
                Averaging it gives {`$\\bar H_2 = -\\frac{1}{256}\\frac{G^2 J^3}{\\omega_0}$`}.
              </li>
            </ol>
          </div>

          <p>The transformed Hamiltonian to second order (set {`$\\varepsilon = 1$`}):</p>

          <div className="lrn-eq lrn-eq-hero">
            {`$$\\bar H = \\omega_0 \\bar J - \\frac{1}{16}G\\bar J^2
              - \\frac{1}{256}\\frac{G^2 \\bar J^3}{\\omega_0}$$`}
          </div>

          <p>
            The new frequency from {`$\\bar\\omega = \\frac{\\partial\\bar H}{\\partial\\bar J}$`}:
          </p>

          <div className="lrn-eq">
            {`$$\\bar\\omega = \\omega_0\\!\\left[1 - \\frac{1}{8}\\frac{G\\bar J}{\\omega_0}
              - \\frac{3}{256}\\frac{G^2 \\bar J^2}{\\omega_0^2}\\right]$$`}
          </div>

          <p>
            Now rewrite this using energy. Let {`$E$`} be the pendulum's energy and {`$F$`} the
            depth of its potential well. The well bottom sits at {`$E = -F$`} and the separatrix
            sits at {`$E = 0$`}. The separatrix is the boundary between swinging back and forth and
            spinning all the way around. Define the scaled energy {`$x = \\frac{E+F}{F}$`}, which
            runs from {`$0$`} at the well bottom to {`$1$`} at the separatrix:
          </p>

          <div className="lrn-eq lrn-eq-hero">
            {`$$\\bar\\omega = \\omega_0\\!\\left[1 - \\frac{x}{8} - \\frac{5}{256}x^2\\right]$$`}
          </div>

          <PendulumOrderConvergence />
          <p>
            The three curves show {`$\\frac{\\bar\\omega}{\\omega_0}$`} at order 0, 1, and 2. The
            energy parameter {`$x$`} rises from zero (small oscillations) toward one (near the
            separatrix). Each added order bends the curve further downward, correcting the linear
            approximation.
          </p>

          <div className="lrn-elaborate">
            <p>
              <strong>
                Why does the product of two oscillatory functions average to something nonzero?
              </strong>{' '}
              Both {`$w_1$`} and {`$\\tilde H_1$`} have zero average individually. But their Poisson
              bracket {`$[w_1, \\tilde H_1]$`} involves products of derivatives. Products of
              sinusoids like {`$\\sin^2 2\\theta$`} have nonzero averages.
            </p>
            <p>
              This is the same mechanism that produces a second-order dc component from two
              first-order ac signals. In perturbation theory it means that
              {` $\\bar H_2 \\neq \\langle H_2\\rangle$`} whenever the first-order oscillations are
              large enough to interact. The Deprit method captures this automatically through the{' '}
              {`$L_1(\\bar H_1 + H_1)$`} term in the second-order homological equation.
            </p>
          </div>
        </>,

        <>
          <h2>Adiabatic Invariants by the Lie Method</h2>

          <div className="lrn-predict">
            <p>
              <strong>Predict:</strong> For a slowly varying system, the Hamiltonian has two time
              scales: a fast angle {`$\\theta$`} and a slow parameter {`$\\varepsilon t$`}. If you
              split the Lie operator as {`$L = L_f + \\varepsilon L_s$`}, what kind of equations do
              you expect for the sub-expanded {`$w_{n0}$`} and {`$w_{n1}$`}?
            </p>
          </div>

          <p>
            You met the slowly varying oscillator at first order on the adiabatic-invariants page.
            Here you push the same kind of system to second order with the Lie method. For these
            systems the Hamiltonian separates into fast and slow parts:
          </p>

          <div className="lrn-eq">
            {`$$H = H_0(J, \\varepsilon y, \\varepsilon t) + \\varepsilon H_1(J, \\theta, \\varepsilon y, \\varepsilon t) + \\cdots$$`}
          </div>

          <p>
            Here {`$y$`} is a slow variable, one that drifts only on the long time scale set by{' '}
            {`$\\varepsilon t$`}.
          </p>

          <p>
            The Lie operator splits as {`$L = L_f + \\varepsilon L_s$`}, where {`$L_f$`} acts only
            on fast variables {`$(J, \\theta)$`} and {`$L_s$`} acts on slow variables.
          </p>

          <p>
            <strong>When to use this:</strong> Use the adiabatic sub-expansion whenever your system
            has two clearly separated time scales. The method finds the adiabatic invariant to any
            order. It is the only systematic way to handle high-order adiabatic corrections.
          </p>

          <p>
            Sub-expand {`$w_n$`} and {`$\\bar H_n$`} in powers of {`$\\varepsilon$`}:
            {`$w_n = \\sum_k \\varepsilon^k w_{nk}$`}. Each sub-equation in the chain has the form:
          </p>

          <div className="lrn-eq">
            {`$$\\omega_\\theta \\frac{\\partial w_{nk}}{\\partial\\theta} = n\\bar H_{nk} + R$$`}
          </div>

          <p>
            where {`$R$`} is a known remainder built from lower sub-orders and lower orders. The key
            feature: only the fast derivative{' '}
            {`$\\omega_\\theta\\,\\frac{\\partial}{\\partial\\theta}$`} appears on the left.
            Slow-variable denominators never appear. Resonant denominators are absent at every
            order.
          </p>

          <div className="lrn-callout">
            <p>
              <strong>No resonant denominators in adiabatic theory.</strong> This is the main
              advantage over ordinary perturbation theory. The left-hand side involves only the fast
              phase derivative. Slow frequencies never appear as denominators on the left. The only
              limit shows up far out in the series, where it is asymptotic. High harmonics of slow
              variables can cause trouble, but no small denominator appears at any finite order.
            </p>
          </div>

          <p>
            <strong>Slowly varying harmonic oscillator (second-order worked example).</strong> With{' '}
            {`$H = \\omega J + \\varepsilon\\frac{\\omega'}{2\\omega}J\\sin 2\\theta$`}
            where {`$\\omega = \\omega(\\varepsilon t)$`}:
          </p>

          <p>At first order both sub-orders give {`$\\bar H_1 = 0$`}, and</p>

          <div className="lrn-eq">
            {`$$w_1 = \\frac{1}{4}\\frac{\\omega'}{\\omega^2}J\\cos 2\\theta
              - \\frac{\\varepsilon}{8\\omega}\\!\\left(\\frac{\\omega'}{\\omega^2}\\right)'J\\sin 2\\theta$$`}
          </div>

          <p>
            At second order, the Poisson bracket {`$[w_{10}, H_1]$`} has only an average part:
            {` `}
            {`$[w_{10}, H_1] = -\\frac{1}{4}\\frac{\\omega'^2}{\\omega^3}J$`}. This bracket is
            worked out term by term in the practice set, so you can see exactly where the constant
            comes from. Averaging gives
            {` `}
            {`$\\bar H_{20} = -\\frac{1}{8}\\frac{\\omega'^2}{\\omega^3}J$`} and {`$w_{20} = 0$`}.
          </p>

          <p>Transformed Hamiltonian and new frequency:</p>

          <div className="lrn-eq">
            {`$$\\bar H = \\omega\\bar J - \\frac{1}{8}\\frac{\\omega'^2}{\\omega^3}\\bar J,
              \\qquad
              \\bar\\omega = \\omega\\!\\left[1 - \\frac{1}{8}\\left(\\frac{\\omega'}{\\omega^2}\\right)^2\\right]$$`}
          </div>

          <p>The second-order adiabatic invariant:</p>

          <div className="lrn-eq">
            {`$$\\bar J = J + \\frac{\\varepsilon}{2}\\frac{\\omega'}{\\omega^2}J\\sin 2\\theta
              + \\frac{\\varepsilon^2}{8}\\!\\left(\\frac{\\omega'}{\\omega^2}\\right)^2\\!J
              + \\frac{\\varepsilon^2}{4\\omega}\\!\\left(\\frac{\\omega'}{\\omega^2}\\right)'J\\cos 2\\theta$$`}
          </div>

          <div className="lrn-self-explain">
            <p>
              <strong>Self-explain:</strong> The first-order result gives {`$\\bar H_1 = 0$`}. What
              does this mean physically? Why does the first-order correction to the transformed
              Hamiltonian vanish while the first-order correction to {`$\\bar J$`}
              is nonzero?
            </p>
          </div>
        </>,

        <>
          <h2>The Ponderomotive Force</h2>

          <p>
            The ponderomotive force is the steady push a wave gives a particle, separate from the
            fast wiggle the wave drives. This section builds it from the Lie method as a
            second-order effect.
          </p>

          <div className="lrn-predict">
            <p>
              <strong>Predict:</strong> A charged particle moves in a slowly varying electrostatic
              wave. At first order in the wave amplitude, the force averages to zero over the fast
              wave phase. Does a net force appear at second order? What should it be proportional
              to?
            </p>
          </div>

          <p>
            Consider a particle in an electrostatic wave. Here {`$\\Phi$`} is the wave's amplitude
            (how strong the wave is), {`$e$`} the particle's charge, {`$k$`} the wavenumber, and{' '}
            {`$\\omega$`} the wave frequency:
          </p>

          <div className="lrn-eq">
            {`$$H_w = \\frac{p^2}{2m} + e\\varepsilon\\Phi(\\varepsilon kx)\\cos(kx - \\omega t)$$`}
          </div>

          <p>
            Transform to wave-frame variables {`$(\\theta, J_\\theta)$`} (fast) and
            {` $(\\phi, J_\\phi)$`} (slow) using the generating function
            {` `}
            {`$F_2 = (-kx + \\omega t)J_\\theta + kx J_\\phi$`}. The transformed Hamiltonian splits
            into fast and slow parts:
          </p>

          <div className="lrn-eq">
            {`$$H = H_0 + e\\varepsilon\\Phi(\\varepsilon\\phi)\\cos\\theta$$`}
          </div>

          <p>
            where {`$H_0 = \\frac{k^2}{2m}(J_\\phi - J_\\theta)^2 + \\omega J_\\theta$`},{` `}
            {`$\\omega_\\phi = kv_x$`} (slow), and {`$\\omega_\\theta = \\omega - kv_x$`} (fast).
          </p>

          <p>
            Keep the particle away from resonance with the wave. That is the adiabatic ordering
            condition: {`$\\left|\\frac{\\omega}{k} - v_x\\right| \\gg v_x$`}.
          </p>

          <p>
            <strong>Why this example matters:</strong> At first order {`$\\bar H_1 = 0$`}
            because the wave has zero average. The ponderomotive force is a purely second-order
            effect. Without the Lie method's systematic second-order capability you would miss it.
          </p>

          <p>
            First order: {`$w_{10} = -\\frac{e\\Phi}{\\omega_\\theta}\\sin\\theta$`} and
            {` `}
            {`$w_{11} = -\\frac{\\omega_\\phi}{\\omega_\\theta}\\frac{e\\Phi'}{\\omega_\\theta}\\cos\\theta$`}
            .
          </p>

          <p>Second order (zero sub-order averaged):</p>

          <div className="lrn-eq">
            {`$$\\bar H_{20} = \\frac{1}{4}\\frac{e^2\\Phi^2(\\varepsilon\\phi)}{\\omega_\\theta^2}
              \\frac{\\partial\\omega_\\theta}{\\partial J_\\theta}$$`}
          </div>

          <p>The ponderomotive Hamiltonian and force:</p>

          <div className="lrn-eq lrn-eq-hero">
            {`$$H_w^p = \\frac{p^2}{2m} + \\frac{k^2}{4m}\\frac{e^2\\Phi^2(kx)}{(\\omega - kv_x)^2}
              = \\text{const.}$$`}
          </div>

          <div className="lrn-eq">
            {`$$F^p = -\\frac{\\partial U}{\\partial x}
              = -\\frac{e^2 k^3}{2m}\\frac{\\Phi\\Phi'}{(\\omega - kv_x)^2}$$`}
          </div>

          <p>
            The ponderomotive force is zero where the wave amplitude {`$\\Phi(kx)$`} has an
            extremum. The minimum of wave amplitude is a stable equilibrium position.
          </p>

          <div className="lrn-elaborate">
            <p>
              <strong>Why is the ponderomotive potential quadratic in wave amplitude?</strong> The
              first-order generating function {`$w_{10} \\propto \\frac{e\\Phi}{\\omega_\\theta}$`}
              is linear in amplitude. The second-order Hamiltonian {`$\\bar H_{20}$`} comes from a
              Poisson bracket of {`$w_{10}$`} with {`$H_1 \\propto e\\Phi$`}, giving a term
              proportional to {`$\\frac{(e\\Phi)^2}{\\omega_\\theta^2}$`}. This is the same
              second-order cross-term mechanism you saw in the pendulum.
            </p>
            <p>
              The physical picture: the particle oscillates in the fast wave field at first order.
              At second order, the slight drift of the wave amplitude across one oscillation gives a
              net push. That push is the ponderomotive force, and it is always away from regions of
              large amplitude.
            </p>
          </div>
        </>,

        <>
          <h2>Removing Resonances: Modified Invariants (McNamara)</h2>

          <div className="lrn-predict">
            <p>
              <strong>Predict:</strong> The standard adiabatic invariant {`$\\bar I = TJ$`}
              develops poles when {`$P_\\psi$`} equals an integer. These poles signal that the
              perturbation series breaks down near resonances. Can you choose a different function{' '}
              {`$I_0(J)$`} so that {`$T^{-1} I_0$`} has no poles? What constraints does {`$I_0$`}{' '}
              need to satisfy?
            </p>
          </div>

          <p>
            Near a wave-particle resonance the standard invariant construction breaks down. Two new
            quantities run this section. {`$\\psi$`} is the resonant phase, the slow combination of
            angles that nearly stops moving at a resonance. {`$P_\\psi$`} is the action paired with{' '}
            {`$\\psi$`}, scaled so that whole-number values of {`$P_\\psi$`} mark the resonances.
            The standard approach sets {`$\\bar I = TJ = \\text{const.}$`} Using the Lie series to
            order {`$\\varepsilon$`}:
          </p>

          <div className="lrn-eq">
            {`$$\\bar I = I_0(P_\\psi) + \\varepsilon[w_1, I_0] = I_0 + \\varepsilon\\frac{\\partial w_1}{\\partial\\psi}\\frac{dI_0}{dP_\\psi}$$`}
          </div>

          <p>
            The first-order generating function for the wave-particle problem, where{' '}
            {`$\\mathcal{I}_m(\\rho)$`} is the {`$m$`}-th Fourier amplitude of the wave field and{' '}
            {`$\\rho$`} is the orbit amplitude:
          </p>

          <div className="lrn-eq">
            {`$$w_1 = \\sum_m \\frac{\\mathcal{I}_m(\\rho)\\cos(\\psi - m\\phi)}{P_\\psi - m}$$`}
          </div>

          <p>
            Look at the denominator {`$P_\\psi - m$`}: it blows up whenever {`$P_\\psi$`} hits a
            whole number {`$m$`}. So this has poles at every integer {`$P_\\psi = m$`}. The key idea
            behind the McNamara modified invariant: instead of {`$\\bar I = TJ$`}, use:
          </p>

          <div className="lrn-eq lrn-eq-hero">{`$$\\bar I = T^{-1} I_0(J)$$`}</div>

          <div className="lrn-compare">
            <div className="lrn-compare-item">
              <div className="lrn-compare-label">Standard invariant: {`$\\bar I = TJ$`}</div>
              <ul className="lrn-list">
                <li>Poles at {`$P_\\psi = $`} integer (first order)</li>
                <li>Poles at {`$P_\\psi = $`} integer and half-integer (second order)</li>
                <li>Level curves take the wrong shape near resonances</li>
                <li>Wrong shape near resonant islands</li>
              </ul>
            </div>
            <div className="lrn-compare-item">
              <div className="lrn-compare-label">
                Modified invariant: {`$\\bar I = T^{-1} I_0$`}
              </div>
              <ul className="lrn-list">
                <li>Choose {`$\\frac{dI_0}{dP_\\psi}$`} to cancel each pole as it appears</li>
                <li>
                  At first order: pick {`$\\frac{dI_0}{dP_\\psi}$`} to vanish at every integer,
                  which removes the integer poles
                </li>
                <li>
                  At second order:{' '}
                  {`$\\frac{dI_0}{dP_\\psi} = \\sin^2(\\pi P_\\psi)\\sin(2\\pi P_\\psi)$`} removes
                  both integer and half-integer poles
                </li>
                <li>Correctly represents half-integer resonances and drifting orbits</li>
              </ul>
            </div>
          </div>

          <p>The second-order modified invariant is:</p>

          <div className="lrn-eq">
            {`$$\\bar I = I_0 + \\varepsilon[w_1, I_0] + \\frac{\\varepsilon^2}{2}\\bigl([w_2, I_0] + [w_1,[w_1, I_0]]\\bigr)$$`}
          </div>

          <p>
            This has poles at integer and half-integer {`$P_\\psi$`}. Choose
            {` `}
            {`$\\frac{dI_0}{dP_\\psi} = \\sin^2(\\pi P_\\psi)\\sin(2\\pi P_\\psi)$`} to eliminate
            all poles. The factor {`$\\sin^2(\\pi P_\\psi)$`} vanishes at every integer, killing the
            integer poles. The factor {`$\\sin(2\\pi P_\\psi)$`} vanishes at every half-integer too,
            killing those. So the chosen function zeroes out exactly where the poles sit.
          </p>

          <div className="lrn-self-explain">
            <p>
              <strong>Self-explain:</strong> Why does the Lie technique handle{' '}
              {`$\\bar I = T^{-1} I_0$`}
              so naturally, when {`$I_0 \\neq J$`}? What does the framework change when you replace
              the identity function {`$J$`} with an arbitrary smooth function {`$I_0(J)$`}?
            </p>
          </div>
        </>,

        <>
          <h2>An Alternative Formulation: The One-Parameter-Group View</h2>

          <p>
            There is a second, equivalent way to set up this method. Instead of starting from
            Hamilton's equations, you start from a one-parameter group of canonical transformations:
            a smooth family of canonical maps labeled by {`$\\varepsilon$`}. The generator is called
            {` `}
            {`$G$`} instead of {`$w$`}. The pull-back operator {`$U$`} carries a function from the
            new coordinates back to the old, playing the role of {`$T^{-1}$`}. The Poisson operator{' '}
            {`$P_G \\equiv \\{\\cdot, G\\}$`} plays the role of {`$L$`}.
          </p>

          <div className="lrn-definition">
            <div className="lrn-definition-term">Poisson operator</div>
            <div className="lrn-definition-desc">
              <p>
                {`$P_G \\equiv \\{\\cdot, G\\}$`}: an operator that takes the Poisson bracket of any
                function with {`$G$`}. It is the one-parameter-group counterpart of{' '}
                {`$L = [w, \\cdot]$`}.
              </p>
            </div>
          </div>

          <p>
            Carry the same power-series expansion through this setup and you get the same
            homological equations, order by order, that you already derived. Only the letters
            change: {`$w \\to G$`}, {`$\\bar H \\to E$`}, {`$L \\to P_G$`}, {`$T^{-1} \\to U$`}. The
            Notation Map in the Reference tab lays out the full dictionary. The lesson is that the
            recursion is built into canonical perturbation theory itself, not into any one choice of
            notation.
          </p>
        </>
      ]
    },

    practice: [
      {
        q: `What is the main algebraic reason Lie transforms outperform mixed-variable methods at second order and beyond?`,
        a: `Mixed-variable methods require an implicit inversion at each order: you must solve $\\theta = \\theta(\\bar\\theta, \\bar J)$ as a transcendental equation. No algebraic pattern survives this. Lie transforms work at a single set of coordinates, and every equation at every order has the same Poisson-bracket structure. The algebra stays tractable at any order. The right-hand side at order $n$ is a sum of known repeated Poisson brackets from orders $1$ through $n-1$.`
      },
      {
        q: `A student says "the Lie transform is approximate because $\\bar x \\approx x$ for small $\\varepsilon$." Correct this statement.`,
        a: `The statement is wrong. The Lie transformation is exact for any $\\varepsilon$. The equation $\\frac{d\\bar x}{d\\varepsilon} = [\\bar x, w]$ has the form of Hamilton's equations with $\\varepsilon$ as time and $w$ as Hamiltonian. Hamilton's equations generate canonical transformations exactly. The transformation is near-identity in the sense that $\\bar x = x$ when $\\varepsilon = 0$. But for any fixed $\\varepsilon$ the map is an exact canonical transformation, not an approximation.`
      },
      {
        q: `State the Deprit recursion (homological equation) at order $n$ and name every operator that appears.`,
        a: `$D_0 w_n = n(\\bar H_n - H_n) - \\sum_{m=1}^{n-1}(L_{n-m}\\bar H_m + m T_{n-m}^{-1} H_m)$. Here $D_0 = \\frac{\\partial}{\\partial t} + [\\cdot, H_0]$ is the unperturbed total time-derivative (Liouville) operator; $L_k = [w_k, \\cdot]$ is the $k$-th Lie operator; and $T_k^{-1}$ is the $k$-th coefficient of the inverse evolution operator, given by the recursion $T_n^{-1} = \\frac{1}{n}\\sum_{m=0}^{n-1} L_{n-m} T_m^{-1}$.`
      },
      {
        q: `At each order of the Deprit recursion you must choose $\\bar H_n$ before you solve for $w_n$. What governs the choice, and why?`,
        a: `You choose $\\bar H_n$ to be the angle-average (the projection onto the null space of $D_0$) of the right-hand side. The null space of $D_0$ consists of angle-independent, time-averaged functions, which are the secular terms. If you do not remove them, $w_n$ grows without bound, which ruins the perturbation expansion. The remaining oscillating part is in the range of $D_0$ and integrates to a bounded $w_n$.`
      },
      {
        q: `Transfer: Suppose you apply the Deprit recursion to a system where $H_0$ is NOT a harmonic oscillator but a nonlinear oscillator with frequency $\\omega(J)$. How does $D_0$ change, and what changes in the secular-term removal procedure?`,
        a: `For a nonlinear oscillator $D_0 = \\omega(J)\\,\\frac{\\partial}{\\partial\\theta}$ where $\\omega(J) = \\frac{\\partial H_0}{\\partial J}$. The secular terms are still the angle-independent parts (functions of $J$ only). The null space of $D_0$ is still spanned by functions that do not depend on $\\theta$. You choose $\\bar H_n = \\langle \\text{rhs}\\rangle_\\theta$ exactly as before. The only change is the explicit form of $\\omega(J)$ that appears when you integrate the remaining oscillating part to find $w_n$.`
      },
      {
        q: `What is the Dewar form, and when must you use it instead of $\\bar H = T^{-1} H$?`,
        a: `The Dewar form is $\\bar H = T^{-1}H + T^{-1}\\int_0^\\varepsilon d\\varepsilon'\\, T(\\varepsilon')\\,\\frac{\\partial w}{\\partial t}$. You must use it whenever the Lie generator $w$ depends explicitly on time, that is, for nonautonomous systems. In the autonomous case $\\frac{\\partial w}{\\partial t} = 0$ and the extra integral vanishes, recovering $\\bar H = T^{-1}H$. For adiabatic problems $w$ inherits time dependence from the slowly varying parameters, so the Dewar form is always required there.`
      },
      {
        q: `Transfer: A colleague uses the Lie method on a two-degrees-of-freedom system. They claim the second-order correction to $\\bar H_2$ is just $\\langle H_2 \\rangle$. When are they right, and when are they wrong?`,
        a: `They are right only if $H_2 = 0$ identically or if the first-order generating function $w_1$ is zero (no first-order perturbation). In general, the second-order equation is $D_0 w_2 = 2(\\bar H_2 - H_2) - L_1(\\bar H_1 + H_1)$. The average of the right-hand side includes the term $\\tfrac{1}{2}\\langle L_1(\\bar H_1 + H_1)\\rangle = \\tfrac{1}{2}\\langle [w_1, \\bar H_1 + H_1]\\rangle$. This is a cross-term quadratic in first-order quantities, and it is generically nonzero. Your colleague's claim fails in any system where first-order oscillations are present.`
      },
      {
        q: `In the pendulum example, why is $\\langle H_2 \\rangle = 0$ but $\\bar H_2 \\neq 0$?`,
        a: `The pendulum Hamiltonian to order $\\varepsilon^2$ has $H_2 = 0$ identically (the expansion of the pendulum potential ends at order $\\varepsilon$ in action-angle form, with $H_1$ containing the nonlinearity). So $\\langle H_2\\rangle = 0$ trivially. The nonzero $\\bar H_2 = -\\frac{1}{256}\\frac{G^2 J^3}{\\omega_0}$ comes entirely from the cross-term $\\tfrac{1}{2}\\langle [w_1, \\tilde H_1]\\rangle$ in the second-order equation. This cross-term is a product of two oscillatory first-order quantities that has a nonzero average (product of $\\sin 2\\theta$ and $\\sin 4\\theta$ type terms produces dc components).`
      },
      {
        q: `Elaborate: The pendulum frequency correction to second order is $\\bar\\omega = \\omega_0\\left[1 - \\frac{x}{8} - \\frac{5}{256}x^2\\right]$ where $x = \\frac{E+F}{F}$. What does $x = 0$ represent physically? What does $x = 1$ represent?`,
        a: `$x = \\frac{E+F}{F} = 0$ means $E = -F$, the very bottom of the potential well. The motion is a tiny oscillation around equilibrium. The linearized frequency $\\omega_0$ is exact there, and all corrections vanish. $x = 1$ means $E = 0$, the separatrix energy (the threshold between swinging back and forth and spinning all the way around). Near $x = 1$ the pendulum swings arbitrarily slowly, and the frequency drops toward zero. The perturbation series near $x = 1$ converges poorly. This is the expected failure of action-angle perturbation theory near the separatrix.`
      },
      {
        q: `What is the adiabatic sub-expansion, and why does it eliminate resonant denominators?`,
        a: `When a Hamiltonian has two separated time scales (fast angle $\\theta$, slow parameter $\\varepsilon t$), the Lie generator $w_n$ is sub-expanded as $w_n = \\sum_k \\varepsilon^k w_{nk}$. Each equation in the resulting chain has the form $\\omega_\\theta\\,\\frac{\\partial w_{nk}}{\\partial\\theta} = n\\bar H_{nk} + R$. Only the fast derivative $\\omega_\\theta\\,\\frac{\\partial}{\\partial\\theta}$ appears on the left. Slow frequencies never appear as denominators on the left-hand side. There is no mechanism for a small slow denominator to arise, so resonances in the slow frequency do not appear at any finite order.`
      },
      {
        q: `Transfer: You apply the adiabatic Lie method to a system whose slow frequency $\\Omega(\\varepsilon t)$ passes through a small value at some time. Does the method break down?`,
        a: `The method does not break down due to a small slow denominator, because slow frequencies never appear as denominators in the chain of equations. The left-hand side always involves only the fast derivative $\\omega_\\theta\\,\\frac{\\partial}{\\partial\\theta}$. However, if $\\omega_\\theta$ itself becomes small (the particle approaches resonance with the fast oscillation), then the first equation in the chain develops a small denominator and the adiabatic expansion fails. That is exactly the wave-particle resonance problem that requires the McNamara modified invariant treatment.`
      },
      {
        q: `Explain why the ponderomotive force appears only at second order and is zero at first order.`,
        a: `The first-order perturbation is $H_1 = e\\varepsilon\\Phi\\cos\\theta$, which has zero angle average. So $\\bar H_{10} = 0$ and the first-order transformed Hamiltonian contributes nothing. The ponderomotive force comes from the second-order term $\\bar H_{20}$, which is quadratic in $w_{10} \\propto \\frac{e\\Phi}{\\omega_\\theta}$. Two first-order oscillatory quantities produce a nonzero average at second order: $\\bar H_{20} \\propto \\frac{(e\\Phi)^2}{\\omega_\\theta^2}$. This is the general rule: even effects from an oscillating field are second-order in the field amplitude.`
      },
      {
        q: `Self-explain: Walk through why $[w_{10}, H_1]$ gives only an average part in the slowly varying harmonic oscillator calculation.`,
        a: `Start from $w_{10} = \\frac{1}{4}\\frac{\\omega'}{\\omega^2}J\\cos 2\\theta$ and $H_1 = \\frac{\\omega'}{2\\omega}J\\sin 2\\theta$. The Poisson bracket is $[w_{10}, H_1] = \\frac{\\partial w_{10}}{\\partial\\theta}\\frac{\\partial H_1}{\\partial J} - \\frac{\\partial w_{10}}{\\partial J}\\frac{\\partial H_1}{\\partial\\theta}$. The four partials are $\\frac{\\partial w_{10}}{\\partial\\theta} = -\\frac{1}{2}\\frac{\\omega'}{\\omega^2}J\\sin 2\\theta$, $\\frac{\\partial H_1}{\\partial J} = \\frac{\\omega'}{2\\omega}\\sin 2\\theta$, $\\frac{\\partial w_{10}}{\\partial J} = \\frac{1}{4}\\frac{\\omega'}{\\omega^2}\\cos 2\\theta$, and $\\frac{\\partial H_1}{\\partial\\theta} = \\frac{\\omega'}{\\omega}J\\cos 2\\theta$. The first product gives $-\\frac{1}{4}\\frac{\\omega'^2}{\\omega^3}J\\sin^2 2\\theta$. The second product gives $\\frac{1}{4}\\frac{\\omega'^2}{\\omega^3}J\\cos^2 2\\theta$. Subtract them: $[w_{10}, H_1] = -\\frac{1}{4}\\frac{\\omega'^2}{\\omega^3}J(\\sin^2 2\\theta + \\cos^2 2\\theta) = -\\frac{1}{4}\\frac{\\omega'^2}{\\omega^3}J$. The angle terms combine through $\\sin^2 + \\cos^2 = 1$, so the result is a constant with no oscillating part. That is why $[w_{10}, H_1]$ is pure average.`
      },
      {
        q: `What is the McNamara modified invariant, and what problem does it solve?`,
        a: `The McNamara modified invariant is $\\bar I = T^{-1} I_0(J)$, where $I_0(J)$ is a smooth function chosen to cancel the poles that appear in the standard construction $\\bar I = TJ$. The standard invariant develops poles at resonant values $P_\\psi = m$ (integer) and at half-integer values at second order. These poles mean the perturbation series diverges near resonances. By choosing $\\frac{dI_0}{dP_\\psi}$ order by order so that all poles cancel, the modified invariant remains smooth across resonances and correctly represents the dynamics near resonant islands.`
      },
      {
        q: `Transfer: Suppose you need the modified invariant to third order. How does the choice of $\\frac{dI_0}{dP_\\psi}$ change from the second-order case?`,
        a: `At second order you choose $\\frac{dI_0}{dP_\\psi} = \\sin^2(\\pi P_\\psi)\\sin(2\\pi P_\\psi)$ to cancel poles at integers and half-integers. At third order, the invariant $\\bar I$ will develop new poles at $P_\\psi = \\frac{1}{3}$ and $P_\\psi = \\frac{2}{3}$ (third-order resonances) in addition to the integer and half-integer poles. You would extend $I_0$ so $\\frac{dI_0}{dP_\\psi}$ also vanishes at third-order resonant values. It must still cancel the lower-order poles. The form would need a factor that vanishes at all $P_\\psi = \\frac{m}{3}$ for integers $m$.`
      },
      {
        q: `In the one-parameter-group formulation, what is the operator $U$ and how does it relate to $T$?`,
        a: `$U(\\varepsilon)F(\\eta) = F((\\phi^G)^{-1}\\eta)$: it pulls a function back along the inverse of the canonical flow generated by $G$. This makes $U$ the analog of $T^{-1}$ (since $T$ maps functions at the new point to the old point, while $U = T^{-1}$ maps functions at the old point to the new point). The pull-back coefficient $V_n$ in the group recursion corresponds to $T_n^{-1}$. The Poisson operator $P_G = \\{\\cdot, G\\}$ corresponds to $L = [w, \\cdot]$.`
      },
      {
        q: `Predict: If you apply the Lie method to a completely integrable system with no perturbation ($H_1 = H_2 = \\cdots = 0$), what does the procedure give?`,
        a: `If $H_1 = H_2 = \\cdots = 0$, then the right-hand side of the Deprit recursion at every order is zero. Choosing $\\bar H_n = 0$ for $n \\geq 1$ satisfies the secular-term condition. The homological equation $D_0 w_n = 0$ has the trivial solution $w_n = 0$. So the Lie series terminates: $w = 0$, $T = 1$ (identity), and $\\bar H = H$. The transformation is the identity, which is exactly right. No transformation is needed when there is no perturbation.`
      },
      {
        q: `Why is the triangular structure of the Deprit recursion its main computational advantage over general iterative methods?`,
        a: `A general iterative method might require knowledge of all orders simultaneously, leading to coupled equations. The Deprit recursion is triangular: the right-hand side at order $n$ depends only on quantities from orders $1$ through $n-1$, all of which are already known. This means you can solve one order at a time, each requiring a single Poisson bracket integration. You never need to solve a coupled system. Each order costs roughly the same computational effort as the previous one, and the method scales to any order without structural changes.`
      },
      {
        q: `Transfer: How does the Lie method handle the quartic oscillator $H = \\nu_0 J_0 + \\varepsilon \\mu J_0^2 \\sin^4\\phi_0$ at first order?`,
        a: `Follow the same recipe as the pendulum. First choose the new Hamiltonian to be the angle-average of $H_1$: since $\\langle \\sin^4\\phi_0\\rangle = \\frac{3}{8}$, you get $\\bar H_1 = \\frac{3}{8}\\mu J_0^2$. That removes the secular part. Then solve the first-order homological equation $D_0 w_1 = \\bar H_1 - H_1$ for $w_1$, where $D_0 = \\nu_0\\,\\frac{\\partial}{\\partial\\phi_0}$. The oscillating part of $H_1$ contains $\\cos 2\\phi_0$ and $\\cos 4\\phi_0$ terms, so integrating in $\\phi_0$ gives $w_1$ as a sum of $\\sin 2\\phi_0$ and $\\sin 4\\phi_0$ terms divided by $\\nu_0$.`
      },
      {
        q: `Elaborate: Both the Hamilton's-equations formulation and the one-parameter-group formulation produce the same homological equations at each order. What does this tell us about the method?`,
        a: `It tells us the structure is intrinsic to canonical perturbation theory, not an artifact of notation. The Deprit recursion emerges from the algebra of Poisson brackets and the requirement that the transformation be canonical. Starting from Hamilton's equations or from the one-parameter-group perspective leads to the same recursion. This universality means the method is robust. It does not depend on a particular coordinate choice or on how you define the generating function. The Poisson bracket algebra determines everything.`
      }
    ],

    reference: {
      sections: [
        <>
          <h2>Key Equations</h2>

          <div className="lrn-definition">
            <div className="lrn-definition-term">Lie generating flow</div>
            <div className="lrn-definition-desc">
              <p className="lrn-eq">{`$$\\frac{d\\bar x}{d\\varepsilon} = [\\bar x,\\, w]$$`}</p>
              <p>
                <strong>When to use:</strong> This defines the canonical transformation generated by{' '}
                {`$w$`}. The flow with {`$\\varepsilon$`} as time is exactly canonical for any{' '}
                {`$\\varepsilon$`}.
              </p>
            </div>
          </div>

          <div className="lrn-definition">
            <div className="lrn-definition-term">Lie operator</div>
            <div className="lrn-definition-desc">
              <p className="lrn-eq">{`$$L = [w,\\,\\cdot\\,], \\quad L_n = [w_n,\\,\\cdot\\,]$$`}</p>
              <p>
                <strong>When to use:</strong> {`$L$`} appears in every recursion. {`$Lf = [w, f]$`}{' '}
                is the Poisson bracket of {`$f$`} with the generator.
              </p>
            </div>
          </div>

          <div className="lrn-definition">
            <div className="lrn-definition-term">Evolution operator</div>
            <div className="lrn-definition-desc">
              <p className="lrn-eq">{`$$\\frac{dT}{d\\varepsilon} = -TL, \\qquad T = \\exp\\!\\left(-\\int_0^\\varepsilon L\\,d\\varepsilon'\\right)$$`}</p>
              <p>
                <strong>When to use:</strong> {`$T$`} maps functions at the new point back to the
                old point. Its inverse is the object that transforms the Hamiltonian.
              </p>
            </div>
          </div>

          <div className="lrn-definition">
            <div className="lrn-definition-term">New Hamiltonian, autonomous</div>
            <div className="lrn-definition-desc">
              <p className="lrn-eq lrn-eq-hero">{`$$\\bar H = T^{-1} H$$`}</p>
              <p>
                <strong>When to use:</strong> When {`$w$`} does not depend explicitly on {`$t$`}.
                Covers all time-independent perturbations.
              </p>
            </div>
          </div>

          <div className="lrn-definition">
            <div className="lrn-definition-term">New Hamiltonian, nonautonomous Dewar form</div>
            <div className="lrn-definition-desc">
              <p className="lrn-eq">{`$$\\bar H = T^{-1}H + T^{-1}\\!\\int_0^\\varepsilon d\\varepsilon'\\,T(\\varepsilon')\\frac{\\partial w(\\varepsilon')}{\\partial t}$$`}</p>
              <p>
                <strong>When to use:</strong> When {`$w = w(x, t, \\varepsilon)$`} depends on time.
                Required for adiabatic-invariant calculations.
              </p>
            </div>
          </div>

          <div className="lrn-definition">
            <div className="lrn-definition-term">Deprit recursion / homological equation</div>
            <div className="lrn-definition-desc">
              <p className="lrn-eq lrn-eq-hero">{`$$D_0 w_n = n(\\bar H_n - H_n) - \\sum_{m=1}^{n-1}\\bigl(L_{n-m}\\bar H_m + m T_{n-m}^{-1} H_m\\bigr)$$`}</p>
              <p>
                {`$D_0 \\equiv \\frac{\\partial}{\\partial t} + [\\cdot, H_0]$`} is the unperturbed
                orbit derivative.
              </p>
              <p>
                <strong>When to use:</strong> At every order {`$n \\geq 1$`}. First choose{' '}
                {`$\\bar H_n = \\langle \\text{rhs} \\rangle$`} (angle average), then solve for{' '}
                {`$w_n$`} from the oscillating remainder.
              </p>
            </div>
          </div>

          <div className="lrn-definition">
            <div className="lrn-definition-term">Homological equations to third order</div>
            <div className="lrn-definition-desc">
              <p className="lrn-eq">{`$$D_0 w_1 = \\bar H_1 - H_1$$`}</p>
              <p className="lrn-eq">{`$$D_0 w_2 = 2(\\bar H_2 - H_2) - L_1(\\bar H_1 + H_1)$$`}</p>
              <p className="lrn-eq">{`$$D_0 w_3 = 3(\\bar H_3 - H_3) - L_1(\\bar H_2 + 2H_2) - L_2(\\bar H_1 + \\tfrac{1}{2}H_1) - \\tfrac{1}{2}L_1^2 H_1$$`}</p>
            </div>
          </div>

          <div className="lrn-definition">
            <div className="lrn-definition-term">Pendulum to second order</div>
            <div className="lrn-definition-desc">
              <p className="lrn-eq lrn-eq-hero">{`$$\\bar H = \\omega_0 \\bar J - \\frac{1}{16}G\\bar J^2 - \\frac{1}{256}\\frac{G^2 \\bar J^3}{\\omega_0}$$`}</p>
              <p className="lrn-eq">{`$$\\bar\\omega = \\omega_0\\!\\left[1 - \\frac{x}{8} - \\frac{5}{256}x^2\\right], \\quad x = \\frac{E+F}{F}$$`}</p>
              <p>
                <strong>When to use:</strong> Pendulum frequency as a function of energy, accurate
                to second order in the nonlinearity parameter {`$G$`}.
              </p>
            </div>
          </div>

          <div className="lrn-definition">
            <div className="lrn-definition-term">Adiabatic sub-expansion</div>
            <div className="lrn-definition-desc">
              <p className="lrn-eq">{`$$\\omega_\\theta\\frac{\\partial w_{nk}}{\\partial\\theta} = n\\bar H_{nk} + R$$`}</p>
              <p>
                <strong>When to use:</strong> For all adiabatic problems with fast angle{' '}
                {`$\\theta$`} and slow parameters. Only the fast derivative appears on the left;
                slow denominators never arise.
              </p>
            </div>
          </div>

          <div className="lrn-definition">
            <div className="lrn-definition-term">Slowly varying oscillator result</div>
            <div className="lrn-definition-desc">
              <p className="lrn-eq">{`$$\\bar H = \\omega\\bar J - \\frac{1}{8}\\frac{\\omega'^2}{\\omega^3}\\bar J, \\quad \\bar\\omega = \\omega\\!\\left[1 - \\frac{1}{8}\\!\\left(\\frac{\\omega'}{\\omega^2}\\right)^2\\right]$$`}</p>
              <p className="lrn-eq">{`$$\\bar J = J + \\frac{\\varepsilon}{2}\\frac{\\omega'}{\\omega^2}J\\sin 2\\theta + \\frac{\\varepsilon^2}{8}\\!\\left(\\frac{\\omega'}{\\omega^2}\\right)^2\\!J + \\frac{\\varepsilon^2}{4\\omega}\\!\\left(\\frac{\\omega'}{\\omega^2}\\right)'J\\cos 2\\theta$$`}</p>
              <p>
                <strong>When to use:</strong> Second-order adiabatic invariant and frequency
                correction for any slowly varying oscillator.
              </p>
            </div>
          </div>

          <div className="lrn-definition">
            <div className="lrn-definition-term">Ponderomotive Hamiltonian and force</div>
            <div className="lrn-definition-desc">
              <p className="lrn-eq">{`$$H_w^p = \\frac{p^2}{2m} + \\frac{k^2}{4m}\\frac{e^2\\Phi^2(kx)}{(\\omega - kv_x)^2}$$`}</p>
              <p className="lrn-eq">{`$$F^p = -\\frac{e^2 k^3}{2m}\\frac{\\Phi\\Phi'}{(\\omega - kv_x)^2}$$`}</p>
              <p>
                <strong>When to use:</strong> Effective force on a charged particle in a slowly
                varying electrostatic wave, valid away from resonance. Force is zero at wave
                amplitude extrema; minimum amplitude is stable.
              </p>
            </div>
          </div>

          <div className="lrn-definition">
            <div className="lrn-definition-term">McNamara modified invariant</div>
            <div className="lrn-definition-desc">
              <p className="lrn-eq">{`$$\\bar I = T^{-1} I_0(J), \\quad \\frac{dI_0}{dP_\\psi} = \\sin^2(\\pi P_\\psi)\\sin(2\\pi P_\\psi)$$`}</p>
              <p>
                <strong>When to use:</strong> Near wave-particle resonances where the standard{' '}
                {`$\\bar I = TJ$`} develops poles. The choice of {`$\\frac{dI_0}{dP_\\psi}$`} given
                above removes all poles to second order.
              </p>
            </div>
          </div>
        </>,

        <>
          <h2>Notation Map: Two Formulations</h2>

          <div className="lrn-table">
            <table>
              <thead>
                <tr>
                  <th>
                    Lie-series form ({`$w$`}, {`$T$`})
                  </th>
                  <th>
                    One-parameter-group form ({`$G$`}, {`$U$`})
                  </th>
                  <th>Role</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{`$w$`}</td>
                  <td>{`$G$`}</td>
                  <td>Lie generator (function on phase space)</td>
                </tr>
                <tr>
                  <td>{`$\\bar H$`}</td>
                  <td>{`$E$`}</td>
                  <td>Transformed Hamiltonian</td>
                </tr>
                <tr>
                  <td>{`$T^{-1}$`}</td>
                  <td>{`$U$`}</td>
                  <td>Pull-back operator (maps functions forward)</td>
                </tr>
                <tr>
                  <td>{`$T_n^{-1}$`}</td>
                  <td>{`$V_n$`}</td>
                  <td>nth coefficient of pull-back operator</td>
                </tr>
                <tr>
                  <td>{`$L = [w,\\,\\cdot\\,]$`}</td>
                  <td>{`$P_G = \\{\\cdot,\\, G\\}$`}</td>
                  <td>Poisson (Lie) operator</td>
                </tr>
                <tr>
                  <td>{`$(J, \\theta)$`}</td>
                  <td>
                    {`$(J_0, \\phi_0)$`} (old) and {`$(J, \\phi)$`} (new)
                  </td>
                  <td>Action-angle coordinates</td>
                </tr>
              </tbody>
            </table>
          </div>
        </>,

        <>
          <h2>The Evolution Operator Coefficients to Third Order</h2>

          <div className="lrn-table">
            <table>
              <thead>
                <tr>
                  <th>n</th>
                  <th>{`$T_n$`}</th>
                  <th>{`$T_n^{-1}$`}</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>0</td>
                  <td>{`$1$`}</td>
                  <td>{`$1$`}</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>{`$-L_1$`}</td>
                  <td>{`$L_1$`}</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>{`$-\\tfrac{1}{2}L_2 + \\tfrac{1}{2}L_1^2$`}</td>
                  <td>{`$\\tfrac{1}{2}L_2 + \\tfrac{1}{2}L_1^2$`}</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>{`$-\\tfrac{1}{3}L_3 + \\tfrac{1}{6}L_2 L_1 + \\tfrac{1}{3}L_1 L_2 - \\tfrac{1}{6}L_1^3$`}</td>
                  <td>{`$\\tfrac{1}{3}L_3 + \\tfrac{1}{6}L_1 L_2 + \\tfrac{1}{3}L_2 L_1 + \\tfrac{1}{6}L_1^3$`}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p>
            Rule: to get {`$T_n^{-1}$`} from {`$T_n$`}, replace each {`$L_k \\to -L_k$`}
            and reverse the order of all noncommuting {`$L$`} factors.
          </p>
        </>
      ]
    }
  }

  return <LearningTemplate config={config} />
}
