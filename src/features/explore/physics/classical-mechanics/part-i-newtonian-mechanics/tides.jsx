import { LearningTemplate } from '../../../../../components/learning/learning-template'
import { TidalStretchSqueeze } from '../../../../../components/viz'

export default function Tides() {
  const config = {
    cssPrefix: 'tides',
    documentTitle: 'Tides - AETHER',
    learning: {
      category: 'Module 1',
      groupTitle: 'Newtonian Mechanics',
      title: 'Tides',
      subtitle:
        'Tidal gravity measures the inhomogeneity of a gravitational field. It drives ocean tides, deforms planets, and tears bodies apart at the Roche limit.',
      sections: [
        /* SECTION 1: Newtonian Tidal Gravity */
        <>
          <div className="lrn-section" id="lrn-section-0">
            <h2>Newtonian Tidal Gravity</h2>
            <p>
              Two nearby particles feel slightly different gravitational accelerations. The{' '}
              <strong>tidal gravitational field</strong> is the tensor (a 3 by 3 grid of numbers
              that tells you how the gravitational pull changes from point to point) that captures
              this difference. Use it whenever two bodies are close enough to feel the gradient of
              gravity.
            </p>

            <div className="lrn-insight">
              <span className="lrn-insight-label">Reading the Index Notation</span>
              <p>
                A small superscript or subscript labels a direction. {`$\\xi^k$`} means the {`$k$`}
                -th component of the separation vector ({`$k$`} runs over {`$x, y, z$`}), and{' '}
                {`$E_{jk}$`} is the entry in row {`$j$`}, column {`$k$`} of the tidal grid. When an
                index appears twice in one term, you add over its three values:{' '}
                {`$E^j_{\\;k}\\xi^k$`} means{' '}
                {`$E^j_{\\;x}\\xi^x + E^j_{\\;y}\\xi^y + E^j_{\\;z}\\xi^z$`}. A repeated index that
                sits both up and down, like {`$E^j_{\\;j}$`}, sums the diagonal: that sum is called
                the <strong>trace</strong>.
              </p>
            </div>

            <div className="lrn-predict">
              <span className="lrn-predict-label">PREDICT</span>
              <p>
                Particle A sits at the origin. Particle B sits a small distance {`$\\xi^k$`} away.
                Both fall freely in a potential {`$\\Phi$`}. Before reading on, sketch what you
                expect for the relative acceleration {`$\\frac{d^2\\xi^j}{dt^2}$`} in terms of{' '}
                {`$\\Phi$`} and {`$\\xi^k$`}.
              </p>
              <details className="lrn-predict-reveal">
                <summary>Check your thinking</summary>
                <p>
                  Newton's law gives each particle its own {`$-\\nabla\\Phi$`}. The difference
                  Taylor-expands (approximates a function near a point using its derivatives) to{' '}
                  {`$-\\frac{\\partial^2\\Phi}{\\partial x^j\\partial x^k}\\cdot \\xi^k$`}, one
                  power of {`$\\xi$`} and two derivatives of {`$\\Phi$`}.
                </p>
              </details>
            </div>

            <h3>The Tidal Equation</h3>
            <p>
              Let {`$x^j_A$`} and {`$x^j_B = x^j_A + \\xi^j$`} be the positions of particles A and
              B. Newton's law gives{' '}
              {`$\\frac{d^2x^j}{dt^2} = -\\left(\\frac{\\partial\\Phi}{\\partial x^j}\\right)$`} for
              each. Subtracting A from B:
            </p>
            <div className="lrn-eq">
              <span>{`$$\\frac{d^2\\xi^j}{dt^2} = -\\left(\\frac{\\partial\\Phi}{\\partial x^j}\\right)_B + \\left(\\frac{\\partial\\Phi}{\\partial x^j}\\right)_A$$`}</span>
              <span>{`$$= -\\frac{\\partial^2\\Phi}{\\partial x^j \\partial x^k}\\,\\xi^k$$`}</span>
            </div>
            <p>
              This is accurate to first order in {`$\\xi^k$`}. The second-derivative tensor is the{' '}
              <strong>tidal gravitational field</strong> {`$\\mathbf{E}$`}:
            </p>
            <div className="lrn-eq lrn-eq-hero">
              <span>{`$$\\frac{d^2\\xi^j}{dt^2} = -E^j_{\\;k}\\,\\xi^k, \\qquad E_{jk} = \\frac{\\partial^2\\Phi}{\\partial x^j\\,\\partial x^k}$$`}</span>
            </div>
            <p>
              Because mixed partial derivatives of {`$\\Phi$`} are equal, {`$E_{jk} = E_{kj}$`}: the
              tidal tensor is <strong>symmetric</strong>. In vacuum, {`$\\nabla^2\\Phi = 0$`}{' '}
              (Laplace's equation), so the trace vanishes: {`$E^j_{\\;j} = 0$`}. The tidal tensor is{' '}
              <strong>traceless in vacuum</strong>.
            </p>

            <div className="lrn-self-explain">
              <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
              <p>
                Why does the derivation Taylor-expand to first order in {`$\\xi^k$`} and stop there,
                rather than keeping higher-order terms?
              </p>
              <details className="lrn-self-explain-reveal">
                <summary>Expert explanation</summary>
                <p>
                  The tidal field describes the relative motion of two <em>nearby</em> particles.
                  The first-order term{' '}
                  {`$\\frac{\\partial^2\\Phi}{\\partial x^j\\partial x^k} \\cdot \\xi^k$`} gives the
                  leading differential acceleration. Higher-order terms in {`$\\xi$`} are called{' '}
                  <em>higher multipole tidal interactions</em> (corrections that matter only when
                  the two particles are far apart) and are negligible when the separation is small.
                  The tidal tensor
                  {`$E_{jk}$`} captures the dominant effect exactly.
                </p>
              </details>
            </div>

            <div className="lrn-elaborate">
              <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
              <p>
                The tidal field {`$\\mathbf{E} = \\nabla\\nabla\\Phi = -\\nabla\\mathbf{g}$`} is the
                gradient of the gravitational acceleration {`$\\mathbf{g} = -\\nabla\\Phi$`}. It
                measures how fast {`$\\mathbf{g}$`} changes with position.
              </p>
              <p>
                A uniform gravitational field (same {`$\\mathbf{g}$`} everywhere) has{' '}
                {`$E_{jk} = 0$`} and produces zero relative acceleration. Only the
                <em>inhomogeneity</em> of gravity drives tidal forces. This is why the Moon's tidal
                effect on Earth depends on how much the Moon's gravity differs across Earth's
                diameter. It does not depend on the Moon's total pull. The Moon and Sun supply the{' '}
                {`$E_{jk}$`} that drives ocean tides.
              </p>
            </div>

            <div className="lrn-faded">
              <div className="lrn-faded-phase">
                <span className="lrn-faded-label">COMPLETE EXAMPLE</span>
                <p>
                  Derive the tidal equation for two particles in potential{' '}
                  {`$\\Phi = -\\frac{GM}{r}$`}.
                </p>
                <ol className="lrn-list">
                  <li>
                    Newton's law for each particle:{' '}
                    {`$\\frac{d^2x^j_A}{dt^2} = -\\left(\\frac{\\partial\\Phi}{\\partial x^j}\\right)_A$`}{' '}
                    and{' '}
                    {`$\\frac{d^2x^j_B}{dt^2} = -\\left(\\frac{\\partial\\Phi}{\\partial x^j}\\right)_B$`}
                    .
                  </li>
                  <li>
                    Subtract:{' '}
                    {`$\\frac{d^2\\xi^j}{dt^2} = -\\left(\\frac{\\partial\\Phi}{\\partial x^j}\\right)_B + \\left(\\frac{\\partial\\Phi}{\\partial x^j}\\right)_A$`}
                    .
                  </li>
                  <li>
                    Taylor-expand {`$\\left(\\frac{\\partial\\Phi}{\\partial x^j}\\right)_B$`}{' '}
                    around {`$x_A$`} to first order in {`$\\xi^k$`}:{' '}
                    {`$\\left(\\frac{\\partial\\Phi}{\\partial x^j}\\right)_B \\approx \\left(\\frac{\\partial\\Phi}{\\partial x^j}\\right)_A + \\frac{\\partial^2\\Phi}{\\partial x^j\\partial x^k}\\,\\xi^k$`}
                    .
                  </li>
                  <li>
                    Substitute and cancel:{' '}
                    {`$\\frac{d^2\\xi^j}{dt^2} = -\\frac{\\partial^2\\Phi}{\\partial x^j\\partial x^k}\\,\\xi^k = -E^j_{\\;k}\\,\\xi^k$`}
                    .
                  </li>
                </ol>
              </div>
              <div className="lrn-faded-phase lrn-faded-partial">
                <span className="lrn-faded-label">YOUR TURN: PARTIAL</span>
                <p>
                  Apply the same derivation to potential {`$\\Phi = -\\frac{GM}{\\sqrt{x^2+z^2}}$`}{' '}
                  (a 2D mass).
                </p>
                <ol className="lrn-list">
                  <li>Follow steps 1 and 2 yourself.</li>
                  <li>In step 3, expand to first order in {`$\\xi^k$`}.</li>
                  <li>Fill in the blank: {`$\\frac{d^2\\xi^j}{dt^2} = -$`} _______.</li>
                </ol>
                <details className="lrn-predict-reveal">
                  <summary>Check answer</summary>
                  <p>
                    {`$\\frac{d^2\\xi^j}{dt^2} = -\\frac{\\partial^2\\Phi}{\\partial x^j\\partial x^k}\\,\\xi^k$`}
                    : identical in form. The tidal tensor {`$E_{jk}$`} changes (different second
                    derivatives), but the structure {`$-E^j_{\\;k}\\xi^k$`} is universal. Only the
                    specific eigenvalues of {`$E$`} change with the potential.
                  </p>
                </details>
              </div>
              <div className="lrn-faded-phase">
                <span className="lrn-faded-label">INDEPENDENT PRACTICE</span>
                <p>
                  Two particles fall in a uniform field {`$\\Phi = gz$`} (constant {`$g$`}).
                </p>
                <ol className="lrn-list">
                  <li>Compute {`$E_{jk}$`} and write the tidal equation.</li>
                  <li>Say what the result means for tidal forces in a uniform field.</li>
                </ol>
                <details className="lrn-predict-reveal">
                  <summary>Check answer</summary>
                  <p>
                    All second derivatives of {`$\\Phi = gz$`} vanish:{' '}
                    {`$E_{jk} = \\frac{\\partial^2(gz)}{\\partial x^j\\partial x^k} = 0$`}. The
                    tidal equation gives {`$\\frac{d^2\\xi^j}{dt^2} = 0$`}: no tidal force. A
                    uniform field stretches every particle equally, so there is no differential
                    acceleration. This confirms that {`$E_{jk}$`} measures the inhomogeneity of
                    gravity, not the field itself.
                  </p>
                </details>
              </div>
            </div>
          </div>
        </>,

        /* SECTION 4: Tidal Stretch and Squeeze */
        <>
          <div className="lrn-section" id="lrn-section-1">
            <h2>Tidal Stretch and Squeeze</h2>
            <p>
              For a spherical body of mass {`$M$`}, the tidal tensor has a specific pattern:
              particles along the radial direction are <strong>pulled apart</strong>, while
              particles transverse to the radial direction are <strong>pushed together</strong>. Use
              this whenever you need to know the shape of tidal deformation.
            </p>

            <div className="lrn-predict">
              <span className="lrn-predict-label">PREDICT</span>
              <p>
                A small cloud of freely falling particles surrounds a point on the z-axis above a
                mass {`$M$`}. The potential is {`$\\Phi = -\\frac{GM}{r}$`}. Before computing,
                sketch whether the cloud stretches or squeezes along the z-axis, and whether it
                stretches or squeezes in the x and y directions.
              </p>
              <details className="lrn-predict-reveal">
                <summary>Check your thinking</summary>
                <p>
                  Along z (toward the mass): the force is stronger closer to the mass, so particles
                  ahead are pulled faster and particles behind lag. The cloud stretches along z.
                  Along x and y: particles to the side are pulled toward the mass, which is slightly
                  below them. The radial pull has a transverse component that squeezes the cloud.
                </p>
              </details>
            </div>

            <h3>Worked Example: Computing the Tidal Components</h3>
            <p>
              Take {`$\\Phi = -\\frac{GM}{r}$`} and evaluate at a point on the z-axis at distance{' '}
              {`$r$`}: the coordinates are {`$(0, 0, r)$`}. Compute{' '}
              {`$E_{jk} = \\frac{\\partial^2\\Phi}{\\partial x^j\\partial x^k}$`} there.
            </p>
            <p>
              Near {`$(0,0,r)$`}, expand {`$\\Phi = -\\frac{GM}{(x^2+y^2+z^2)^{1/2}}$`}. Take the
              radial term first. The first derivative is{' '}
              {`$\\frac{\\partial\\Phi}{\\partial z} = \\frac{GMz}{(x^2+y^2+z^2)^{3/2}}$`}.
              Differentiate again and evaluate at {`$(0,0,r)$`} to get the second derivatives:
            </p>
            <div className="lrn-eq lrn-eq-hero">
              <span>{`$$E_{zz} = \\frac{\\partial^2\\Phi}{\\partial z^2}\\bigg|_{(0,0,r)} = -\\frac{2GM}{r^3}$$`}</span>
              <span>{`$$E_{xx} = E_{yy} = \\frac{\\partial^2\\Phi}{\\partial x^2}\\bigg|_{(0,0,r)} = +\\frac{GM}{r^3}$$`}</span>
            </div>
            <p>
              The relative acceleration of the separation vector:{' '}
              {`$\\frac{d^2\\xi^z}{dt^2} = +\\frac{2GM}{r^3}\\cdot\\xi^z$`} (positive: radial
              stretch outward). And {`$\\frac{d^2\\xi^x}{dt^2} = -\\frac{GM}{r^3}\\cdot\\xi^x$`}{' '}
              (negative: transverse squeeze inward). The <strong>2:1 ratio</strong> of stretch to
              squeeze is no accident. The trace is zero:{' '}
              {`$\\left(-\\frac{2GM}{r^3}\\right) + \\frac{GM}{r^3} + \\frac{GM}{r^3} = 0$`}.
            </p>

            <div className="lrn-self-explain">
              <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
              <p>
                The trace of {`$E_{jk}$`} is zero in vacuum. How does this constrain the tidal
                deformation, and what does the prolate shape imply?
              </p>
              <details className="lrn-self-explain-reveal">
                <summary>Expert explanation</summary>
                <p>
                  Tracelessness means the volume of a small sphere of test particles is unchanged to
                  leading tidal order. The two transverse squeezes exactly cancel the radial
                  stretch. The 2:1 ratio ({`$-\\frac{2GM}{r^3}$`} vs {`$+\\frac{GM}{r^3}$`})
                  reflects this. One radial direction stretches at twice the rate each lateral
                  direction squeezes. The resulting shape is prolate (elongated along the radial
                  direction), like a rugby ball pointing toward the source.
                </p>
              </details>
            </div>

            <TidalStretchSqueeze />

            <div className="lrn-compare">
              <div className="lrn-compare-col">
                <span className="lrn-compare-title">Radial stretch: {`$-\\frac{2GM}{r^3}$`}</span>
                <p>
                  Acts along the line connecting the two bodies. The tidal field pulls two radially
                  separated particles apart. Relative acceleration is {`$+\\frac{2GM}{r^3}$`} per
                  unit radial separation. Acts in <strong>one</strong> direction.
                </p>
              </div>
              <div className="lrn-compare-col">
                <span className="lrn-compare-title">Lateral squeeze: {`$+\\frac{GM}{r^3}$`}</span>
                <p>
                  Acts perpendicular to the radial direction. The tidal field pushes two
                  transversely separated particles together. Relative acceleration is{' '}
                  {`$-\\frac{GM}{r^3}$`} per unit transverse separation. Acts in{' '}
                  <strong>two</strong> independent directions. Magnitude is half the stretch.
                </p>
              </div>
            </div>

            <div className="lrn-elaborate">
              <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
              <p>
                The 2:1 ratio comes directly from differentiating the {`$\\frac{1}{r^2}$`} gravity
                law. Along the radial direction, the force changes most rapidly (the derivative of{' '}
                {`$\\frac{1}{r^2}$`} along {`$r$`} gives {`$-\\frac{2}{r^3}$`}). Perpendicular to
                the radial direction, the force also changes, but more slowly, and it narrows the
                cloud sideways (giving {`$+\\frac{1}{r^3}$`}).
              </p>
              <p>
                Tracelessness is not a coincidence. It is Laplace's equation{' '}
                {`$\\nabla^2\\Phi = 0$`} in vacuum. The sum of all three eigenvalues of {`$E_{jk}$`}{' '}
                equals {`$\\nabla^2\\Phi = 0$`} outside the source. This constraint ties the stretch
                and squeeze together.
              </p>
            </div>
          </div>
        </>,

        /* SECTION 5: Ocean Tides */
        <>
          <div className="lrn-section" id="lrn-section-2">
            <h2>Ocean Tides</h2>
            <p>
              The ocean surface is a surface of constant gravitational potential (a level surface,
              where water has no sideways slope to flow down). The Moon and Sun supply the tidal
              tensor {`$E_{jk}$`} at Earth's center. Use this framework whenever you want to find
              the shape of a fluid body in a tidal field.
            </p>

            <div className="lrn-predict">
              <span className="lrn-predict-label">PREDICT</span>
              <p>
                The tidal field from the Moon stretches Earth radially (toward and away from the
                Moon) and squeezes Earth transversely. Where do you expect high tides: on the side
                facing the Moon only, or on both sides?
              </p>
              <details className="lrn-predict-reveal">
                <summary>Check your thinking</summary>
                <p>
                  The radial stretch acts on both the near and far sides equally (the tidal field is
                  centrosymmetric in the radial direction). Both sides bulge outward. High tides
                  occur toward <em>and</em> away from the Moon. Low tides occur in the transverse
                  directions.
                </p>
              </details>
            </div>

            <h3>Worked Example: The Tidal Potential</h3>
            <p>
              Work in a freely-falling frame at Earth's center. Let {`$E_{jk}$`}
              be the tidal field from Moon and Sun. The gravitational acceleration at a point on or
              near Earth's surface (unit radial vector {`$n^j$`}, radius {`$r$`}) is:
            </p>
            <div className="lrn-eq">
              <span>{`$$g_j = -\\frac{GM_\\oplus}{r^2}\\,n_j - E^j_{\\;k}\\,r\\,n^k$$`}</span>
            </div>
            <p>
              The first term is Earth's own pull. The second is the tidal correction from the Moon
              and Sun. This is the gradient of the potential:
            </p>
            <div className="lrn-eq lrn-eq-hero">
              <span>{`$$\\Phi = -\\frac{GM_\\oplus}{r} + \\frac{1}{2}\\,E_{jk}\\,r^2\\,n^j n^k$$`}</span>
            </div>
            <p>
              The ocean surface sits on {`$\\Phi = \\text{const}$`}. The tidal term
              {`$\\tfrac{1}{2}E_{jk}r^2 n^j n^k$`} deforms the surface. Where
              {`$E_{jk}n^j n^k$`} is negative (radial direction: tidal stretch), {`$\\Phi$`} is more
              negative. The surface rises to larger {`$r$`} to restore constant {`$\\Phi$`}. This
              gives high tides in the radial direction. Where {`$E_{jk}n^j n^k$`} is positive
              (transverse: squeeze), the surface drops: low tides.
            </p>

            <div className="lrn-self-explain">
              <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
              <p>
                The potential has the form{' '}
                {`$\\Phi = -\\frac{GM}{r} + \\tfrac{1}{2}E_{jk}r^2 n^j n^k$`}. Why is the tidal
                correction proportional to {`$r^2$`} rather than {`$r$`} or {`$r^3$`}?
              </p>
              <details className="lrn-self-explain-reveal">
                <summary>Expert explanation</summary>
                <p>
                  We evaluate the tidal field {`$E_{jk}$`} at Earth's center and treat it as
                  constant across Earth's radius. The tidal acceleration at position{' '}
                  {`$x^k = r n^k$`} is {`$-E^j_{\\;k}\\,r\\,n^k$`}: linear in {`$r$`}. Integrating
                  the acceleration to get potential adds one power of {`$r$`}, giving {`$r^2$`}. The
                  factor {`$\\tfrac{1}{2}$`} is the standard one from integrating a linear gradient.
                </p>
              </details>
            </div>

            <h3>Moon vs. Sun and Spring vs. Neap Tides</h3>
            <p>
              The tidal field scales as {`$E_{jk} \\propto \\frac{GM}{r^3}$`}. Despite the Sun being
              roughly {`$2.7\\times 10^7$`} times more massive than the Moon, it is about 390 times
              farther away. The ratio of tidal strengths:
            </p>
            <div className="lrn-eq">
              <span>{`$$\\frac{E_{\\text{Sun}}}{E_{\\text{Moon}}} \\approx \\frac{\\;\\dfrac{GM_\\odot}{r_\\odot^3}\\;}{\\;\\dfrac{GM_{\\text{Moon}}}{r_{\\text{Moon}}^3}\\;} \\approx 0.46$$`}</span>
            </div>
            <p>
              The Sun produces about 46% of the Moon's tidal effect. When Moon and Sun are roughly
              aligned (new or full Moon), their tidal fields add:
              <strong>spring tides</strong>. When they are at right angles (quarter Moon), they
              partially cancel: <strong>neap tides</strong>.
            </p>

            <div className="lrn-compare">
              <div className="lrn-compare-col">
                <span className="lrn-compare-title">Deep-ocean tides</span>
                <p>
                  Far from coasts, the ocean surface is {`$\\Phi = \\text{const}$`} to high
                  accuracy. The tidal bulge amplitude is small (of order tens of centimetres in open
                  ocean) and predictable directly from the tidal tensor.
                </p>
              </div>
              <div className="lrn-compare-col">
                <span className="lrn-compare-title">Coastal tides</span>
                <p>
                  Near coasts, tides run much larger and shift in phase relative to Moon and Sun
                  positions. Coastal geometry, resonance in bays and channels, and ocean-basin
                  resonance all amplify and delay the tidal signal. The simple{' '}
                  {`$\\Phi = \\text{const}$`} model breaks down.
                </p>
              </div>
            </div>

            <div className="lrn-elaborate">
              <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
              <p>
                The two high-tide bulges (toward and away from the Moon) come from plain
                differential gravity. The Moon pulls the near side of Earth harder than it pulls
                Earth's center, because the near side is closer. So the near-side water is pulled
                away from the center and bulges toward the Moon.
              </p>
              <p>
                On the far side the Moon pulls Earth's center harder than it pulls the far-side
                water, because the center is closer to the Moon than the far side is. So Earth's
                center is pulled away from the far-side water, and the far-side water is left
                behind. It bulges away from the Moon. Two bulges, on opposite sides, give two high
                tides each day. The sideways water gets squeezed in, giving the two low tides.
              </p>
            </div>
          </div>
        </>,

        /* SECTION 6: Roche Limit and Spaghettification */
        <>
          <div className="lrn-section" id="lrn-section-3">
            <h2>Roche Limit and Spaghettification</h2>
            <p>
              A moon or comet is held together by its own gravity. The tidal stretch from a nearby
              planet fights that self-gravity. Get close enough and the stretch wins, and the body
              breaks apart. Use this whenever you ask whether a body survives a close pass.
            </p>

            <div className="lrn-predict">
              <span className="lrn-predict-label">PREDICT</span>
              <p>
                A small moon of mass {`$m$`} and radius {`$\\rho$`} orbits a planet of mass {`$M$`}{' '}
                at distance {`$d$`}. The tidal stretch across the moon scales as{' '}
                {`$\\frac{GM\\rho}{d^3}$`}. The moon's own surface gravity scales as{' '}
                {`$\\frac{Gm}{\\rho^2}$`}. Guess what happens as {`$d$`} shrinks.
              </p>
              <details className="lrn-predict-reveal">
                <summary>Check your thinking</summary>
                <p>
                  The tidal stretch grows fast as {`$d$`} shrinks (it goes like {`$1/d^3$`}). The
                  moon's self-gravity does not change. At some distance the stretch matches the
                  self-gravity. Inside that distance the moon cannot hold itself together and it
                  comes apart.
                </p>
              </details>
            </div>

            <h3>The Roche Limit</h3>
            <p>
              A loose particle on the moon's near surface feels two competing pulls. Its own moon
              pulls it inward with surface gravity {`$\\frac{Gm}{\\rho^2}$`}. The tidal field of the
              planet pulls it outward with stretch {`$\\frac{2GM\\rho}{d^3}$`} (the radial component
              from Section 4). Set them equal to find the breakup distance:
            </p>
            <div className="lrn-eq lrn-eq-hero">
              <span>{`$$\\frac{Gm}{\\rho^2} = \\frac{2GM\\rho}{d_{\\text{Roche}}^3} \\quad\\Rightarrow\\quad d_{\\text{Roche}} = \\rho\\left(\\frac{2M}{m}\\right)^{1/3}$$`}</span>
            </div>
            <p>
              This is the <strong>Roche limit</strong>: the orbit distance inside which tidal
              stretch beats self-gravity. Write it with densities (
              {`$M = \\frac{4}{3}\\pi R^3\\rho_M$`}, {`$m = \\frac{4}{3}\\pi \\rho^3\\rho_m$`},
              where {`$R$`} is the planet's radius) and the moon's own radius cancels:
            </p>
            <div className="lrn-eq">
              <span>{`$$d_{\\text{Roche}} = R\\left(\\frac{2\\rho_M}{\\rho_m}\\right)^{1/3}$$`}</span>
            </div>
            <p>
              A moon less dense than its planet breaks up farther out. Saturn's rings sit inside
              Saturn's Roche limit, which is why they stay a ring of debris and never gather into a
              single moon.
            </p>

            <div className="lrn-self-explain">
              <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
              <p>
                Why does the Roche limit depend only on the two densities and the planet's radius,
                not on the moon's size?
              </p>
              <details className="lrn-self-explain-reveal">
                <summary>Expert explanation</summary>
                <p>
                  Both the tidal stretch and the self-gravity scale with the moon's radius{' '}
                  {`$\\rho$`}
                  in a way that lets {`$\\rho$`} cancel once you write masses as density times
                  volume. What is left compares how tightly each body packs its mass. A fluffy,
                  low-density moon holds itself together weakly, so it breaks up at a larger
                  distance. A dense, rocky moon survives closer in.
                </p>
              </details>
            </div>

            <h3>Spaghettification</h3>
            <p>
              Near a very compact mass (a neutron star or black hole), the radial stretch{' '}
              {`$\\frac{2GM}{r^3}$`} grows enormous because {`$r$`} is tiny. An infalling object is
              pulled into a long thin shape: stretched head to foot along the radial line and
              squeezed inward from the sides. This extreme tidal stretching is called{' '}
              <strong>spaghettification</strong>.
            </p>
            <p>
              It is the same stretch-and-squeeze tidal pattern from Section 4, just with a huge{' '}
              {`$\\frac{2GM}{r^3}$`}. The 2:1 ratio of stretch to squeeze still holds. The body
              elongates along the line to the mass and pinches in the two transverse directions,
              exactly the prolate (rugby-ball) shape, pushed to a deadly extreme.
            </p>

            <div className="lrn-elaborate">
              <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
              <p>
                Both Roche breakup and spaghettification are the same Newtonian tidal field doing
                its job. The radial stretch {`$\\frac{2GM}{r^3}$`} pulls the near and far parts of a
                body in opposite directions away from its center. When that differential pull beats
                whatever holds the body together (self-gravity for a moon, chemical bonds for a
                rod), the body stretches without limit.
              </p>
              <p>
                The stretch grows as {`$1/r^3$`}, far faster than the {`$1/r^2$`} of gravity itself.
                So a body can orbit happily at one distance and be torn apart a little closer in.
                The tidal field, not the total pull, decides the fate of the body.
              </p>
            </div>
          </div>
        </>
      ]
    },

    practice: [
      {
        q: `Two particles fall freely in the potential $\\Phi = -\\frac{GM}{r}$. Particle A is at the origin. Particle B is at displacement $\\xi^k$. Write the tidal equation of motion and name each symbol.`,
        a: `The tidal equation is $\\frac{d^2\\xi^j}{dt^2} = -E^j_{\\;k}\\xi^k$. Here $\\xi^j$ is the separation vector, $E_{jk} = \\frac{\\partial^2\\Phi}{\\partial x^j\\partial x^k}$ is the tidal gravitational field tensor, and the minus sign means the tidal force is driven by the gradient of $E$. The equation is accurate to first order in $\\xi^k$ because it comes from Taylor-expanding the potential difference.`
      },
      {
        q: `A student claims: "The tidal force from the Moon only pulls the ocean on the side facing the Moon, creating one high tide." Identify the error and correct it.`,
        a: `The error is ignoring the centrosymmetric nature of the tidal tensor. The radial eigenvalue $E_{zz} = -\\frac{2GM}{r^3}$ (with $z$ pointing toward the Moon) gives a tidal acceleration $\\frac{d^2\\xi^z}{dt^2} = +\\frac{2GM}{r^3} \\cdot \\xi^z$, which points outward for both $\\xi^z > 0$ (near side) and $\\xi^z < 0$ (far side). Both sides bulge outward simultaneously. There are always two high tides and two low tides, 90 degrees away from the Moon in the transverse directions.`
      },
      {
        q: `Write the Newtonian potential including the tidal correction near Earth's surface. Explain why the ocean surface sits on $\\Phi = \\text{const}$.`,
        a: `The potential is $\\Phi = -\\frac{GM_\\oplus}{r} + \\tfrac{1}{2}E_{jk}r^2 n^j n^k$, where $E_{jk}$ is from the Moon and Sun and $n^j$ is the unit radial vector. The ocean is a fluid in hydrostatic equilibrium. In equilibrium the ocean surface must be a level surface of the total effective potential. That potential includes gravity plus any centrifugal term for a rotating Earth. If it were not level, a pressure gradient would run along the surface. Fluid would flow, breaking equilibrium.`
      },
      {
        q: `The Sun is about $2.7\\times 10^7$ times more massive than the Moon but about 390 times farther away. What fraction of the Moon's tidal field does the Sun produce?`,
        a: `The tidal field scales as $\\frac{GM}{r^3}$. The ratio is $\\dfrac{\\;\\frac{GM_\\odot}{r_\\odot^3}\\;}{\\;\\frac{GM_{\\text{Moon}}}{r_{\\text{Moon}}^3}\\;} = \\frac{2.7\\times10^7}{390^3} \\approx \\frac{2.7\\times10^7}{5.9\\times10^7} \\approx 0.46$. The Sun produces about 46% of the Moon's tidal effect. The Sun is dominant in mass but the Moon wins because tidal strength falls off as $\\frac{1}{r^3}$, and the Moon's proximity outweighs the Sun's mass advantage.`
      },
      {
        q: `Transfer: an astronaut falls toward a neutron star. From the tidal equation, what shape does a small sphere of dust around the astronaut take, and why?`,
        a: `The dust cloud takes a prolate (rugby-ball) shape, stretched along the radial direction and squeezed transversely. The radial stretch eigenvalue is $-\\frac{2GM}{r^3}$ (giving outward relative acceleration $+\\frac{2GM}{r^3}$) and the transverse squeeze eigenvalues are $+\\frac{GM}{r^3}$ (giving inward relative acceleration $-\\frac{GM}{r^3}$), in a 2:1 ratio. This is the same tidal tensor as for any spherical mass. Near a neutron star the radial stretch $\\frac{2GM}{r^3}$ is enormous because $r$ is so small, so the tidal forces become lethal over even meter-scale distances. This extreme stretching is spaghettification.`
      },
      {
        q: `Transfer: Earth orbits the Sun. Tidal forces from Jupiter ($M_J$, distance $d_J$) deform Earth. Compare the tidal field strength to the Sun's tidal field. What parameter controls the ratio?`,
        a: `The tidal field scales as $\\frac{GM}{r^3}$. The ratio is $\\frac{GM_J}{d_J^3}$ divided by $\\frac{GM_\\odot}{d_\\odot^3}$. Jupiter is about $10^{-3}$ solar masses and about 5 AU away when at closest approach, while Earth-Sun distance is 1 AU. So the ratio is roughly $\\dfrac{\\;\\frac{10^{-3}}{5^3}\\;}{\\;\\frac{1}{1^3}\\;} = \\frac{10^{-3}}{125} \\approx 8\\times10^{-6}$. Jupiter's tidal field on Earth is millions of times weaker than the Sun's. The controlling parameter is $\\frac{M}{r^3}$: proximity (via $r^3$) dominates over mass.`
      },
      {
        q: `Self-explain: the tidal tensor $E_{jk}$ is defined via $\\frac{d^2\\xi^j}{dt^2} = -E^j_{\\;k}\\xi^k$. Why is the sign convention written as $-E^j_{\\;k}$ rather than $+E^j_{\\;k}$?`,
        a: `The convention matches the sign of $\\frac{\\partial^2\\Phi}{\\partial x^j\\partial x^k}$. For a mass $M$ on the z-axis, $E_{zz} = \\frac{\\partial^2\\Phi}{\\partial z^2} = -\\frac{2GM}{r^3} < 0$ (the potential is most negative at $z=0$ and rises toward $z=r$, so the second derivative is negative). The relative acceleration must be $\\frac{d^2\\xi^z}{dt^2} = +\\frac{2GM}{r^3} > 0$ (outward stretch). The minus sign in $-E^j_{\\;k}$ flips the negative eigenvalue into a positive (outward) acceleration. The definition is $E_{jk} = \\frac{\\partial^2\\Phi}{\\partial x^j\\partial x^k}$, and the equation is $\\frac{d^2\\xi^j}{dt^2} = -E^j_{\\;k}\\xi^k$.`
      },
      {
        q: `Predict: coastal tides are typically larger than deep-ocean tides and phase-shifted relative to the Moon's position. What causes this, if the $\\Phi = \\text{const}$ model works in the open ocean?`,
        a: `Near coasts the $\\Phi = \\text{const}$ model breaks down. Three factors contribute. First, the shallow ocean floor creates friction that slows the tidal wave and shifts its phase. Second, coastal bays and channels act as resonant cavities. When the tidal forcing frequency nears a bay's natural resonant frequency, the bay greatly amplifies the tide (the Bay of Fundy reaches 16 m). Third, ocean basins themselves have resonant modes. The simple tidal potential calculation, which assumes deep water and no boundaries, captures none of these effects.`
      },
      {
        q: `Computation: for a planet at radius $r$ from a star of mass $M$, compute the tidal acceleration that a 1-meter-long body experiences along the radial direction. Express in SI units.`,
        a: `The tidal acceleration between the two ends of a 1 m rod is $\\Delta a = |E_{zz}|\\cdot \\xi = \\frac{2GM}{r^3}\\cdot 1\\text{ m}$. For Earth-Sun ($M=2\\times10^{30}$ kg, $r=1.5\\times10^{11}$ m, $G=6.67\\times10^{-11}$): $\\frac{2GM}{r^3} = \\frac{2\\times(6.67\\times10^{-11})(2\\times10^{30})}{(1.5\\times10^{11})^3} \\approx 5\\times10^{-7}\\text{ s}^{-2}$. So $\\Delta a \\approx 5\\times10^{-7}\\;\\frac{\\text{m}}{\\text{s}^2}$ per meter of separation. Completely negligible on human scales; measurable only over Earth's radius ($6400$ km gives $\\sim 3\\times10^{-3}\\;\\frac{\\text{m}}{\\text{s}^2}$).`
      },
      {
        q: `Error detection: a student writes the tidal potential as $\\Phi = -\\frac{GM}{r} + E_{jk}r^2 n^j n^k$ (without the factor $\\tfrac{1}{2}$). What error did they make and what is the correct form?`,
        a: `The student omitted the factor $\\tfrac{1}{2}$. The correct form is $\\Phi = -\\frac{GM}{r} + \\tfrac{1}{2}E_{jk}r^2 n^j n^k$. The factor $\\tfrac{1}{2}$ comes from integrating the tidal acceleration $a_j = -E^j_{\\;k}r n^k$ (which is linear in position) to obtain the potential. Integrating a linear function gives a quadratic with a factor of $\\tfrac{1}{2}$, just like $\\tfrac{1}{2}kx^2$ in Hooke's law. Without this factor the gradient of $\\Phi$ would be $2E^j_{\\;k}rn^k$ instead of the correct $E^j_{\\;k}rn^k$.`
      },
      {
        q: `Computation: verify that the tidal tensor for $\\Phi = -\\frac{GM}{r}$ is traceless outside the source. Show the sum $E_{xx} + E_{yy} + E_{zz}$ explicitly on the z-axis.`,
        a: `On the z-axis at distance $r$: $E_{zz} = -\\frac{2GM}{r^3}$ and $E_{xx} = E_{yy} = +\\frac{GM}{r^3}$. The sum is $E_{xx} + E_{yy} + E_{zz} = \\frac{GM}{r^3} + \\frac{GM}{r^3} - \\frac{2GM}{r^3} = 0$. This confirms tracelessness. The underlying reason: $E^j_{\\;j} = \\frac{\\partial^2\\Phi}{\\partial x^j\\partial x^j} = \\nabla^2\\Phi = 0$ by Laplace's equation, which holds outside the source where there is no mass density ($\\nabla^2\\Phi = 4\\pi G\\rho = 0$ for $\\rho=0$).`
      },
      {
        q: `Roche limit: a small moon of radius $\\rho$ and mass $m$ orbits a planet of mass $M$. By balancing the radial tidal stretch against the moon's surface gravity, find the orbit distance $d$ inside which the moon breaks apart.`,
        a: `A loose particle on the moon's near surface feels the moon's surface gravity $\\frac{Gm}{\\rho^2}$ inward and the planet's tidal stretch $\\frac{2GM\\rho}{d^3}$ outward. Set them equal at the breakup distance: $\\frac{Gm}{\\rho^2} = \\frac{2GM\\rho}{d^3}$. Solving for $d$ gives the Roche limit $d_{\\text{Roche}} = \\rho\\left(\\frac{2M}{m}\\right)^{1/3}$. Inside this distance the tidal stretch beats self-gravity and the moon comes apart. The stretch grows as $\\frac{1}{d^3}$, so a moon safe at one distance is destroyed a little closer in.`
      }
    ],

    reference: {
      category: 'Quick Reference',
      title: 'Tides',
      sections: [
        <>
          <div className="ref-section">
            <h2>Key Equations</h2>

            <div className="ref-formula">
              <div className="ref-formula-name">Tidal equation of motion</div>
              <div className="ref-formula-eq">{`$$\\frac{d^2\\xi^j}{dt^2} = -E^j_{\\;k}\\,\\xi^k$$`}</div>
              <div className="ref-formula-desc">
                <strong>When to use:</strong> relative acceleration of two nearby freely falling
                particles in Newtonian gravity. {`$\\xi^k$`} is separation, {`$E_{jk}$`} is the
                tidal tensor.
              </div>
            </div>

            <div className="ref-formula">
              <div className="ref-formula-name">Newtonian tidal tensor</div>
              <div className="ref-formula-eq">{`$$E_{jk} = \\frac{\\partial^2\\Phi}{\\partial x^j\\,\\partial x^k} = -\\frac{\\partial g_j}{\\partial x^k}$$`}</div>
              <div className="ref-formula-desc">
                <strong>When to use:</strong> compute the tidal field from a known Newtonian
                potential. Symmetric ({`$E_{jk}=E_{kj}$`}); traceless in vacuum ({`$E^j_{\\;j}=0$`}
                ).
              </div>
            </div>

            <div className="ref-formula">
              <div className="ref-formula-name">Tidal components outside mass {`$M$`}</div>
              <div className="ref-formula-eq">{`$$E_{zz} = -\\frac{2GM}{r^3}, \\qquad E_{xx} = E_{yy} = +\\frac{GM}{r^3}$$`}</div>
              <div className="ref-formula-desc">
                <strong>When to use:</strong> tidal field on the z-axis at distance {`$r$`} from a
                spherical mass. Negative {`$E_{zz}$`} = radial stretch (outward). Positive{' '}
                {`$E_{xx}$`} = lateral squeeze (inward). 2:1 ratio; trace zero.
              </div>
            </div>

            <div className="ref-formula">
              <div className="ref-formula-name">Ocean tidal potential</div>
              <div className="ref-formula-eq">{`$$\\Phi = -\\frac{GM_\\oplus}{r} + \\frac{1}{2}\\,E_{jk}\\,r^2\\,n^j n^k$$`}</div>
              <div className="ref-formula-desc">
                <strong>When to use:</strong> find the shape of the ocean surface in Earth's
                gravitational field plus tidal correction from Moon and Sun. Ocean surface ={' '}
                {`$\\Phi = \\text{const}$`} (deep ocean only).
              </div>
            </div>

            <div className="ref-formula">
              <div className="ref-formula-name">Roche limit</div>
              <div className="ref-formula-eq">{`$$d_{\\text{Roche}} = \\rho\\left(\\frac{2M}{m}\\right)^{1/3} = R\\left(\\frac{2\\rho_M}{\\rho_m}\\right)^{1/3}$$`}</div>
              <div className="ref-formula-desc">
                <strong>When to use:</strong> orbit distance inside which tidal stretch beats a
                moon's self-gravity and it breaks up. {`$\\rho$`}, {`$m$`} are the moon's radius and
                mass; {`$R$`}, {`$M$`} the planet's; {`$\\rho_M$`}, {`$\\rho_m$`} the two densities.
              </div>
            </div>
          </div>

          <div className="ref-section">
            <h2>Stretch vs. Squeeze</h2>
            <table>
              <thead>
                <tr>
                  <th>Direction</th>
                  <th>Tidal component</th>
                  <th>Relative acceleration</th>
                  <th>Effect</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Radial (z)</td>
                  <td>{`$E_{zz} = -\\frac{2GM}{r^3}$`}</td>
                  <td>{`$+\\frac{2GM}{r^3} \\cdot \\xi^z$`} (outward)</td>
                  <td>Stretch</td>
                </tr>
                <tr>
                  <td>Transverse (x)</td>
                  <td>{`$E_{xx} = +\\frac{GM}{r^3}$`}</td>
                  <td>{`$-\\frac{GM}{r^3} \\cdot \\xi^x$`} (inward)</td>
                  <td>Squeeze</td>
                </tr>
                <tr>
                  <td>Transverse (y)</td>
                  <td>{`$E_{yy} = +\\frac{GM}{r^3}$`}</td>
                  <td>{`$-\\frac{GM}{r^3} \\cdot \\xi^y$`} (inward)</td>
                  <td>Squeeze</td>
                </tr>
                <tr>
                  <td>Trace</td>
                  <td>{`$\\sum_j E_{jj} = 0$`}</td>
                  <td>Zero net volume change</td>
                  <td>Laplace eq. in vacuum</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="ref-section">
            <h2>Moon vs. Sun Tidal Fields</h2>
            <table>
              <thead>
                <tr>
                  <th>Source</th>
                  <th>Tidal strength ({`$\\propto \\frac{GM}{r^3}$`})</th>
                  <th>Relative to Moon</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Moon</td>
                  <td>1 (reference)</td>
                  <td>100%</td>
                </tr>
                <tr>
                  <td>Sun</td>
                  <td>approx. 0.46</td>
                  <td>46%</td>
                </tr>
                <tr>
                  <td>Spring tides (aligned)</td>
                  <td>approx. 1.46</td>
                  <td>146%</td>
                </tr>
                <tr>
                  <td>Neap tides (quadrature)</td>
                  <td>approx. 0.54</td>
                  <td>54%</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="ref-section">
            <h2>Tidal Disruption</h2>
            <table>
              <thead>
                <tr>
                  <th>Concept</th>
                  <th>Condition</th>
                  <th>Result</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Roche limit</td>
                  <td>{`$\\frac{2GM\\rho}{d^3} = \\frac{Gm}{\\rho^2}$`}</td>
                  <td>Tidal stretch equals self-gravity</td>
                </tr>
                <tr>
                  <td>Inside Roche limit</td>
                  <td>{`$d < d_{\\text{Roche}}$`}</td>
                  <td>Body breaks up (e.g. Saturn's rings)</td>
                </tr>
                <tr>
                  <td>Spaghettification</td>
                  <td>
                    {`$\\frac{2GM}{r^3}$`} very large (small {`$r$`})
                  </td>
                  <td>Extreme radial stretch, transverse squeeze</td>
                </tr>
                <tr>
                  <td>Stretch:squeeze</td>
                  <td>always</td>
                  <td>2:1 ratio, prolate (rugby-ball) shape</td>
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
