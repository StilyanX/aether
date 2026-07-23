import { LearningTemplate } from '../../../../../components/learning/learning-template'
import { Mafs, Coordinates, Plot, Point, LaTeX, Text } from 'mafs'
import 'mafs/core.css'
import 'katex/dist/katex.min.css'
import { useVizColors } from '../../../../../hooks/use-viz-colors'
import {
  ArnoldDiffusion,
  ConditionallyPeriodic,
  FrequencyMap,
  InvariantToriDiagram as InvariantToriDiagramAether,
  KAMCantorSet
} from '../../../../../components/viz'
import { FONT_VALUE } from '../../../../../components/viz/scale-tokens'

// Visualization: Invariant Tori
function InvariantToriDiagram({ C }) {
  return (
    <div style={{ border: `1px solid ${C.dim}`, padding: '0 0 8px 0' }}>
      <p
        style={{
          fontSize: '0.75rem',
          textAlign: 'center',
          color: C.dim,
          margin: '8px 0 0 0',
          letterSpacing: '0.05em',
          textTransform: 'uppercase'
        }}
      >
        Nested invariant 2-tori on a 3D energy surface (schematic cross-section)
      </p>
      <Mafs viewBox={{ x: [-5.5, 5.5], y: [-3, 3] }} preserveAspectRatio={false} height={320}>
        {[0.5, 1.1, 1.8, 2.6, 3.5].map((r, i) => (
          <Plot.Parametric
            key={i}
            t={[-Math.PI, Math.PI]}
            xy={t => [r * 1.5 * Math.cos(t), r * Math.sin(t)]}
            color={i === 2 ? C.accent : C.dim}
            strokeWidth={i === 2 ? 2 : 1}
          />
        ))}
        <LaTeX at={[0, 2.2]} tex={String.raw`\mathbb{T}^2`} color={C.dim} />
        <Text x={0} y={-2.7} size={FONT_VALUE} color={C.dim}>
          non-resonant tori survive KAM
        </Text>
      </Mafs>
    </div>
  )
}

// Visualization: KAM Cantor Set of Surviving Tori
function KAMCantorDiagram({ C }) {
  // Alternating filled (surviving) and empty (destroyed) frequency bands
  const bands = []
  let y = -2.2
  const bandHeight = 0.28
  const gap = 0.12
  for (let i = 0; i < 10; i++) {
    bands.push({ y, survive: i % 3 !== 1 })
    y += bandHeight + gap
  }

  return (
    <div style={{ border: `1px solid ${C.dim}`, padding: '0 0 8px 0' }}>
      <p
        style={{
          fontSize: '0.75rem',
          textAlign: 'center',
          color: C.dim,
          margin: '8px 0 0 0',
          letterSpacing: '0.05em',
          textTransform: 'uppercase'
        }}
      >
        Surviving (filled) vs destroyed (empty) tori on the frequency axis
      </p>
      <Mafs viewBox={{ x: [-5.5, 5.5], y: [-2.5, 2.5] }} preserveAspectRatio={false} height={320}>
        {bands.map((b, i) => (
          <Plot.Parametric
            key={i}
            t={[-4.5, 4.5]}
            xy={t => [t, b.y + bandHeight / 2]}
            color={b.survive ? C.accent : C.dim}
            strokeWidth={b.survive ? 3 : 1}
            opacity={b.survive ? 1 : 0.3}
          />
        ))}
        <LaTeX at={[-5, 2.1]} tex={String.raw`\omega`} color={C.dim} />
        <Text x={-5} y={-2.3} size={FONT_VALUE} color={C.dim}>
          frequency axis
        </Text>
        <Text x={0} y={2.1} size={FONT_VALUE} color={C.dim}>
          Diophantine (survive)
        </Text>
        <Text x={0} y={1.5} size={FONT_VALUE} color={C.dim}>
          resonant (destroyed)
        </Text>
      </Mafs>
    </div>
  )
}

// Visualization: Two-Frequency Lissajous on Torus
function ConditionallyPeriodicDiagram({ C }) {
  const omega1 = 1
  const omega2 = Math.sqrt(2)
  return (
    <div style={{ border: `1px solid ${C.dim}`, padding: '0 0 8px 0' }}>
      <p
        style={{
          fontSize: '0.75rem',
          textAlign: 'center',
          color: C.dim,
          margin: '8px 0 0 0',
          letterSpacing: '0.05em',
          textTransform: 'uppercase'
        }}
      >
        Conditionally-periodic trajectory with irrational frequency ratio (densely fills torus)
      </p>
      <Mafs viewBox={{ x: [-3, 3], y: [-3, 3] }} preserveAspectRatio={false} height={380}>
        <Plot.Parametric
          t={[0, 40]}
          xy={t => [2.2 * Math.cos(omega1 * t), 2.2 * Math.sin(omega2 * t)]}
          color={C.accent}
          strokeWidth={1}
          opacity={0.7}
        />
        <LaTeX
          at={[-2.7, 2.0]}
          tex={String.raw`\tfrac{\omega_2}{\omega_1} = \sqrt{2}`}
          color={C.dim}
        />
        <Text x={0} y={-2.7} size={FONT_VALUE} color={C.dim}>
          trajectory densely fills annular region
        </Text>
      </Mafs>
    </div>
  )
}

// Visualization: Poincaré-Birkhoff Annulus
function PoincareBirkhoffDiagram({ C }) {
  return (
    <div style={{ border: `1px solid ${C.dim}`, padding: '0 0 8px 0' }}>
      <p
        style={{
          fontSize: '0.75rem',
          textAlign: 'center',
          color: C.dim,
          margin: '8px 0 0 0',
          letterSpacing: '0.05em',
          textTransform: 'uppercase'
        }}
      >
        Area-preserving annulus map: inner rotates clockwise, outer counterclockwise
      </p>
      <Mafs viewBox={{ x: [-3.5, 3.5], y: [-3, 3] }} preserveAspectRatio={false} height={380}>
        {/* Outer boundary */}
        <Plot.Parametric
          t={[-Math.PI, Math.PI]}
          xy={t => [2.5 * Math.cos(t), 2.5 * Math.sin(t)]}
          color={C.dim}
          strokeWidth={2}
        />
        {/* Inner boundary */}
        <Plot.Parametric
          t={[-Math.PI, Math.PI]}
          xy={t => [1.1 * Math.cos(t), 1.1 * Math.sin(t)]}
          color={C.dim}
          strokeWidth={2}
        />
        {/* Two fixed points */}
        <Point x={2.0} y={0.4} color={C.accent} />
        <Point x={-1.9} y={-0.5} color={C.accent} />
        {/* Rotation arrows suggestion */}
        <Plot.Parametric
          t={[0.05, 0.5]}
          xy={t => [2.5 * Math.cos(t - 0.15), 2.5 * Math.sin(t - 0.15)]}
          color={C.fg}
          strokeWidth={2}
        />
        <Plot.Parametric
          t={[0.05, 0.5]}
          xy={t => [1.1 * Math.cos(-t + 0.15), 1.1 * Math.sin(-t + 0.15)]}
          color={C.fg}
          strokeWidth={2}
        />
        <Text x={0} y={-2.7} size={FONT_VALUE} color={C.dim}>
          at least 2 fixed points guaranteed
        </Text>
        <LaTeX at={[2.1, 0.8]} tex={String.raw`p_1`} color={C.dim} />
        <LaTeX at={[-2.4, -0.3]} tex={String.raw`p_2`} color={C.dim} />
      </Mafs>
    </div>
  )
}

// Visualization: Frequency Map
function FrequencyMapDiagram({ C }) {
  return (
    <div style={{ border: `1px solid ${C.dim}`, padding: '0 0 8px 0' }}>
      <p
        style={{
          fontSize: '0.75rem',
          textAlign: 'center',
          color: C.dim,
          margin: '8px 0 0 0',
          letterSpacing: '0.05em',
          textTransform: 'uppercase'
        }}
      >
        Frequency map from action space (left) to frequency space (right)
      </p>
      <Mafs viewBox={{ x: [-6, 6], y: [-2.5, 2.5] }} preserveAspectRatio={false} height={280}>
        <Coordinates.Cartesian subdivisions={1} />
        {/* Action space: concentric circles */}
        {[0.6, 1.2, 1.9].map((r, i) => (
          <Plot.Parametric
            key={i}
            t={[-Math.PI, Math.PI]}
            xy={t => [-3.5 + r * Math.cos(t), r * Math.sin(t)]}
            color={C.dim}
            strokeWidth={1.5}
          />
        ))}
        <LaTeX at={[-3.5, 2.1]} tex={String.raw`I`} color={C.dim} />
        {/* Arrows */}
        <Plot.Parametric t={[0, 1]} xy={t => [-1 + t * 2, 0]} color={C.dim} strokeWidth={2} />
        <LaTeX
          at={[-0.5, -1.8]}
          tex={String.raw`\omega = \tfrac{\partial H_0}{\partial I}`}
          color={C.dim}
        />
        {/* Frequency space: curved image */}
        <Plot.Parametric
          t={[0.3, 2.5]}
          xy={t => [2 + t * 0.6, t * 0.5 * Math.sin(t * 1.2)]}
          color={C.accent}
          strokeWidth={2}
        />
        <LaTeX at={[3.5, 2.1]} tex={String.raw`\omega`} color={C.dim} />
        <Text x={0} y={-2.3} size={FONT_VALUE} color={C.dim}>
          nondegeneracy: map is injective
        </Text>
      </Mafs>
    </div>
  )
}

// Visualization: Frequency Repulsion
function FrequencyRepulsionDiagram({ C }) {
  return (
    <div style={{ border: `1px solid ${C.dim}`, padding: '0 0 8px 0' }}>
      <p
        style={{
          fontSize: '0.75rem',
          textAlign: 'center',
          color: C.dim,
          margin: '8px 0 0 0',
          letterSpacing: '0.05em',
          textTransform: 'uppercase'
        }}
      >
        Frequency repulsion: 1-parameter family (left) vs 2-parameter crossing (right)
      </p>
      <Mafs viewBox={{ x: [-5.5, 5.5], y: [-2.5, 2.5] }} preserveAspectRatio={false} height={280}>
        <Coordinates.Cartesian subdivisions={1} />
        <Plot.Parametric
          t={[-2, 2]}
          xy={t => [-3.5 + t, Math.sqrt(t * t + 0.18)]}
          color={C.accent}
          strokeWidth={2}
        />
        <Plot.Parametric
          t={[-2, 2]}
          xy={t => [-3.5 + t, -Math.sqrt(t * t + 0.18)]}
          color={C.accent}
          strokeWidth={2}
        />
        <Text x={-3.5} y={-2.2} size={FONT_VALUE} color={C.dim}>
          1-parameter
        </Text>
        <Plot.Parametric t={[-2, 2]} xy={t => [1.5 + t, t]} color={C.fg} strokeWidth={2} />
        <Plot.Parametric t={[-2, 2]} xy={t => [1.5 + t, -t]} color={C.dim} strokeWidth={2} />
        <Text x={1.5} y={-2.2} size={FONT_VALUE} color={C.dim}>
          2-parameter
        </Text>
        <LaTeX at={[-4.8, 2.1]} tex={String.raw`\omega_i(\lambda)`} color={C.dim} />
      </Mafs>
    </div>
  )
}

// Component
export default function KAMPerturbationContent() {
  const C = useVizColors()

  const config = {
    cssPrefix: 'kam',
    documentTitle: 'KAM Theory and Perturbation Methods - AETHER',
    learning: {
      groupTitle: 'Perturbation Theory and Advanced Topics',
      category: 'Classical Mechanics',
      title: 'KAM Theory and Perturbation Methods',
      subtitle:
        'Conditionally-periodic motion, KAM theorem, Arnold diffusion, and symplectic topology',
      sections: [
        // SECTION 0: Conditionally-Periodic Motion
        <>
          <h2>Conditionally-Periodic Motion and Invariant Tori</h2>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>You have an integrable Hamiltonian system with invariant tori.</p>
            <p>You add a tiny perturbation {`$\\varepsilon H_1$`}.</p>
            <p>Do you expect all tori to survive, some to survive, or none?</p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>Most tori survive: specifically the non-resonant ones.</p>
              <p>Resonant tori (where frequencies are rationally related) break apart.</p>
              <p>
                The set of surviving tori has full Lebesgue measure. The destroyed ones are dense
                but measure zero.
              </p>
            </details>
          </div>

          <p>
            The central question: when you add a small perturbation to an integrable system with
            action-angle coordinates, which tori survive and which break apart?
          </p>

          <div className="lrn-definition">
            <span className="lrn-definition-term">Action-Angle Variables</span>
            <div className="lrn-definition-desc">
              <p>
                Action-angle variables {`$(I, \\varphi)$`} are the natural coordinates for an
                integrable Hamiltonian.
              </p>
              <p>
                Think of a pendulum: the action {`$I$`} measures the area enclosed by the
                trajectory. The angle {`$\\varphi$`} tracks where on the loop the pendulum is.
              </p>
              <p>
                In these coordinates, {`$H = H_0(I)$`} depends only on the action. The equations of
                motion simplify to {`$\\dot{I} = 0$`} and{' '}
                {`$\\dot{\\varphi} = \\frac{\\partial H_0}{\\partial I} = \\omega(I)$`}.
              </p>
            </div>
          </div>

          <div className="lrn-definition">
            <span className="lrn-definition-term">Conditionally-Periodic Motion</span>
            <div className="lrn-definition-desc">
              <p>
                Each fixed value of the action {`$I$`} defines a donut-shaped surface in phase space
                called a torus. The trajectory lives on this surface. On it, the motion obeys:
              </p>
              <div className="lrn-eq">
                <span>{`$$\\dot{\\varphi}_k = \\omega_k(I) = \\frac{\\partial H_0}{\\partial I_k}, \\quad \\dot{I} = 0$$`}</span>
              </div>
              <p>
                If the frequencies {`$\\omega_k$`} are rationally independent (no integer
                combination {`$k_1\\omega_1 + k_2\\omega_2 + \\cdots$`} equals zero), each
                trajectory densely fills the torus {`$I = \\text{const}$`}.
              </p>
              <p>
                If they are rationally dependent, each trajectory is a closed curve on the torus.
              </p>
            </div>
          </div>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>What does "densely fills the torus" mean physically for a trajectory?</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                It means the trajectory comes arbitrarily close to every point on the torus if you
                wait long enough.
              </p>
              <p>
                The trajectory never repeats exactly (it is not periodic), but it weaves
                increasingly fine patterns across the torus surface.
              </p>
              <p>
                This happens when the frequency ratio {`$\\frac{\\omega_1}{\\omega_2}$`} is
                irrational: the two oscillations never return to exactly the same relative phase.
              </p>
            </details>
          </div>

          <div style={{ margin: '24px 0' }}>
            <ConditionallyPeriodicDiagram C={C} />
          </div>

          <ConditionallyPeriodic />

          <div style={{ margin: '24px 0' }}>
            <InvariantToriDiagram C={C} />
          </div>

          <InvariantToriDiagramAether />

          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Rationally independent {`$\\omega_k$`}</span>
              <p>Trajectory densely fills the torus.</p>
              <p>Motion is quasi-periodic: never exactly repeats.</p>
              <p>These are the "non-resonant" tori.</p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Rationally dependent {`$\\omega_k$`}</span>
              <p>Trajectory is a closed curve on the torus.</p>
              <p>Motion is periodic.</p>
              <p>These are the "resonant" tori. They form a dense set of measure zero.</p>
            </div>
          </div>

          <div className="lrn-definition">
            <span className="lrn-definition-term">Nondegeneracy Condition</span>
            <div className="lrn-definition-desc">
              <p>The system is nondegenerate if:</p>
              <div className="lrn-eq">
                <span>{`$$\\det\\left|\\frac{\\partial\\omega}{\\partial I}\\right| = \\det\\left|\\frac{\\partial^2 H_0}{\\partial I^2}\\right| \\neq 0$$`}</span>
              </div>
              <p>
                This means the frequency map {`$I \\mapsto \\omega(I)$`} is one-to-one: every torus
                gets a distinct frequency vector.
              </p>
            </div>
          </div>

          <div style={{ margin: '24px 0' }}>
            <FrequencyMapDiagram C={C} />
          </div>

          <FrequencyMap />

          <div className="lrn-definition">
            <span className="lrn-definition-term">Isoenergetic Nondegeneracy</span>
            <div className="lrn-definition-desc">
              <p>The system is isoenergetically nondegenerate if the bordered Hessian:</p>
              <div className="lrn-eq">
                <span>{`$$\\det\\begin{pmatrix} \\dfrac{\\partial^2 H_0}{\\partial I^2} & \\dfrac{\\partial H_0}{\\partial I} \\\\[6pt] \\left(\\dfrac{\\partial H_0}{\\partial I}\\right)^{\\!T} & 0 \\end{pmatrix} \\neq 0$$`}</span>
              </div>
              <p>
                Read the matrix this way. The plain Hessian{' '}
                {`$\\frac{\\partial^2 H_0}{\\partial I^2}$`} measures how the frequencies turn as
                you move the action in any direction. But you do not want any direction. You want to
                stay on one energy surface, so you may only move the action in ways that keep the
                energy fixed. The extra border row and column, built from{' '}
                {`$\\frac{\\partial H_0}{\\partial I}$`}, carry exactly that constraint: the
                gradient of the energy. The zero in the corner is just bookkeeping for the
                constraint and holds no extra information.
              </p>
              <p>
                So the bordered determinant tests the frequencies along the energy surface alone. If
                it is nonzero, the frequency directions change as you move between tori at the same
                energy. Where plain nondegeneracy asks for distinct frequency vectors, isoenergetic
                nondegeneracy asks for distinct frequency directions: two tori at the same energy
                must point different ways in frequency space.
              </p>
            </div>
          </div>

          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>
              Each resonance relation {`$k \\cdot \\omega = 0$`} defines a thin slice in frequency
              space - like a plane cutting through a room. There are infinitely many such slices,
              one for each integer vector {`$k$`}, but each slice has zero volume. Infinitely many
              zero-volume slices still total zero volume.
            </p>
            <p>
              The non-resonant frequencies fill everything else. By the nondegeneracy condition,
              that remainder has full measure.
            </p>
          </div>
        </>,

        // SECTION 1: KAM Theorem
        <>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              You want to prove that most tori survive a perturbation. Standard perturbation theory
              makes you divide by {`$\\langle\\omega,k\\rangle$`}, which is nearly zero near a
              resonance. These small denominators blow up the corrections and make the series
              diverge.
            </p>
            <p>What kind of iterative scheme could beat the small denominator problem?</p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                Newton's method. After each step the error squares:{' '}
                {`$\\varepsilon \\to \\varepsilon^2 \\to \\varepsilon^4 \\to \\cdots$`}.
              </p>
              <p>
                The super-exponential decay {`$\\varepsilon^{2^n}$`} beats the polynomial blow-up{' '}
                {`$|k|^\\nu$`} from small denominators.
              </p>
              <p>This is the Kolmogorov-Arnold-Moser idea.</p>
            </details>
          </div>

          <h2>KAM Theorem (Kolmogorov-Arnold-Moser)</h2>

          <p>
            The KAM theorem proves that most invariant tori survive small perturbations. It applies
            to any Hamiltonian system satisfying the nondegeneracy condition.
          </p>

          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Common Misconception</span>
              <p>"Resonant tori are rare, so KAM theory is mostly academic."</p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">The Reality</span>
              <p>
                KAM guarantees that the <strong>surviving</strong> tori (non-resonant, Diophantine)
                have <strong>full Lebesgue measure</strong>.
              </p>
              <p>
                Most of phase space is covered by surviving tori. The destroyed resonant tori are
                dense but occupy zero measure.
              </p>
            </div>
          </div>

          <div className="lrn-callout lrn-success">
            <span className="lrn-callout-label">Theorem (Kolmogorov, Arnold, Moser)</span>
            <p>
              Let {`$H = H_0(I) + \\varepsilon H_1(I,\\varphi)$`} with {`$H_0$`} nondegenerate.
            </p>
            <p>
              For sufficiently small {`$\\varepsilon$`}, most non-resonant invariant tori survive.
            </p>
            <p>
              They deform slightly but remain as invariant tori filled by conditionally-periodic
              trajectories.
            </p>
            <p>The measure of destroyed tori goes to zero as {`$\\varepsilon \\to 0$`}.</p>
          </div>

          <div className="lrn-definition">
            <span className="lrn-definition-term">Diophantine Condition (KAM)</span>
            <div className="lrn-definition-desc">
              <p>A torus with frequencies {`$\\omega$`} survives if:</p>
              <div className="lrn-eq">
                <span>{`$$|\\langle\\omega, k\\rangle| > C|k|^{-\\nu} \\quad \\text{for all integer vectors } k \\neq 0$$`}</span>
              </div>
              <p>
                The inner product{' '}
                {`$\\langle\\omega, k\\rangle = \\omega_1 k_1 + \\omega_2 k_2 + \\cdots$`} equals
                zero exactly at resonance. This condition says it can never get too close to zero:
                it must stay at least {`$\\frac{C}{|k|^\\nu}$`} away, even as {`$|k|$`} grows large.
                The larger {`$|k|$`}, the closer a near-resonance could be - the condition pins down
                exactly how much clearance is required.
              </p>
              <p>
                Tori satisfying this for some constants {`$C, \\nu > 0$`} are called Diophantine. If
                you picked a frequency vector at random, it would almost certainly be Diophantine -
                resonant frequencies form a set of zero volume.
              </p>
            </div>
          </div>

          <div style={{ margin: '24px 0' }}>
            <KAMCantorDiagram C={C} />
          </div>

          <KAMCantorSet />

          <h3>The Proof Idea: Newton's Method</h3>

          <p>The key step in the KAM proof is super-convergence via Newton's method.</p>

          <div className="lrn-steps">
            <div className="lrn-step">
              <span className="lrn-step-title">Standard perturbation theory</span>
              <p className="lrn-step-content">
                Small denominators {`$\\langle\\omega,k\\rangle$`} appear when you divide to solve
                the linearized problem. Each step introduces a small error.
              </p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">Newton's method</span>
              <p className="lrn-step-content">
                Each iteration squares the error:{' '}
                {`$\\varepsilon \\to \\varepsilon^2 \\to \\varepsilon^4 \\to \\cdots$`}. The error
                does not just shrink - it collapses super-exponentially.
              </p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">Super-convergence beats small denominators</span>
              <p className="lrn-step-content">
                The small denominator terms grow at most polynomially in {`$|k|$`}. That polynomial
                growth cannot keep pace with {`$\\varepsilon^{2^n}$`} decay. The whole sequence
                converges.
              </p>
            </div>
          </div>

          <div className="lrn-faded">
            <div className="lrn-faded-phase">
              <span className="lrn-faded-label">WORKED EXAMPLE: One KAM Iteration Step</span>
              <p>
                Start with {`$H = H_0(I) + \\varepsilon H_1(I,\\varphi)$`}. Goal: find a
                near-identity transformation {`$\\Phi$`} so that{' '}
                {`$H \\circ \\Phi = H_0(I') + O(\\varepsilon^2)$`}.
              </p>
              <ol className="lrn-list">
                <li>
                  Write {`$\\Phi = \\text{id} + \\varepsilon X_S$`} for a Hamiltonian vector field{' '}
                  {`$X_S$`} generated by some function {`$S(I,\\varphi)$`}.
                </li>
                <li>
                  Expand:{' '}
                  {`$H \\circ \\Phi = H_0 + \\varepsilon(\\{H_0, S\\} + H_1) + O(\\varepsilon^2)$`}.
                </li>
                <li>
                  To kill the {`$O(\\varepsilon)$`} term, solve the homological equation:{' '}
                  {`$\\{H_0, S\\} + H_1 = \\langle H_1 \\rangle$`} where {`$\\langle H_1 \\rangle$`}{' '}
                  is the torus-average of {`$H_1$`}. (The Poisson bracket {`$\\{H_0, S\\}$`} and the
                  Fourier solution of this equation are the homological step set up in full on the
                  averaging page; here it is just one ingredient.)
                </li>
                <li>
                  Solution:{' '}
                  {`$S(I,\\varphi) = \\sum_{k\\neq 0} \\frac{\\hat{H}_1(I,k)}{i\\langle\\omega,k\\rangle}e^{i\\langle k,\\varphi\\rangle}$`}
                  . The small denominators appear here.
                </li>
                <li>
                  After one step: the leftover perturbation is {`$O(\\varepsilon^2)$`}. The new
                  problem has the exact same shape as the old one, only with {`$\\varepsilon^2$`} in
                  place of {`$\\varepsilon$`}. So you run the identical scheme again, and it squares
                  the small parameter once more:{' '}
                  {`$\\varepsilon^2 \\to \\varepsilon^4 \\to \\varepsilon^8 \\to \\cdots$`}.
                </li>
              </ol>
            </div>
            <div className="lrn-faded-phase lrn-faded-partial">
              <span className="lrn-faded-label">YOUR TURN: PARTIAL</span>
              <ol className="lrn-list">
                <li>What equation must {`$S$`} satisfy to kill the first-order error?</li>
                <li>
                  Why does the Diophantine condition guarantee {`$S$`} is bounded in some analytic
                  norm?
                </li>
                <li>
                  After 5 Newton steps, the error is {`$\\varepsilon^{2^5} = \\varepsilon^{32}$`}.
                  How does this compare to standard perturbation theory at order 32?
                </li>
              </ol>
            </div>
          </div>

          <div className="lrn-callout">
            <span className="lrn-callout-label">Why Analyticity Saves the Step</span>
            <p>
              KAM assumes {`$H_1$`} is analytic: smooth enough to have a convergent power series.
              This hypothesis is what makes the whole scheme work.
            </p>
            <p>
              When a function is analytic, its Fourier coefficients {`$\\hat{H}_1(I,k)$`} shrink
              exponentially fast as {`$|k|$`} grows, like {`$e^{-\\sigma|k|}$`} for some{' '}
              {`$\\sigma > 0$`}. The small denominators only blow up polynomially, like{' '}
              {`$|k|^\\nu$`}. Look at the solution{' '}
              {`$S = \\sum_k \\frac{\\hat{H}_1(I,k)}{i\\langle\\omega,k\\rangle}e^{i\\langle k,\\varphi\\rangle}$`}
              : each term is an exponentially small top over a polynomially small bottom.
            </p>
            <p>
              Exponential decay always wins against polynomial growth. So the sum stays finite and{' '}
              {`$S$`} is well-defined and bounded. This is exactly why the Diophantine condition is
              enough to make {`$S$`} bounded in an analytic norm. Drop the analyticity and the
              coefficients no longer outrun the denominators, and the step can fail.
            </p>
          </div>

          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Formal Normalization (Birkhoff/Lindstedt)</span>
              <p>Computes coefficients of invariant tori order by order in {`$\\varepsilon$`}.</p>
              <p>Coefficients can always be found.</p>
              <p>Series generally diverges.</p>
              <p>Good for finite-time, finite-order approximations.</p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">KAM (Newton Method)</span>
              <p>Uses super-convergent iteration: error squares each step.</p>
              <p>Proves actual invariant tori exist.</p>
              <p>Convergence guaranteed for Diophantine frequencies.</p>
              <p>Valid for all time.</p>
            </div>
          </div>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>
              Why does the standard perturbation series diverge while the KAM Newton iteration
              converges?
            </p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                In the Lindstedt series, you compute one correction at a time: order{' '}
                {`$\\varepsilon$`}, then {`$\\varepsilon^2$`}, etc.
              </p>
              <p>
                Small denominators accumulate: the {`$n$`}-th coefficient grows roughly as{' '}
                {`$(C|k|^\\nu)^n$`}.
              </p>
              <p>
                In the KAM method, after step {`$n$`} the error is order {`$\\varepsilon^{2^n}$`}.
              </p>
              <p>This super-exponential decay beats the polynomial growth from denominators.</p>
              <p>
                It is the same reason Newton's method for root-finding beats bisection: quadratic vs
                linear convergence.
              </p>
            </details>
          </div>

          <h3>Small Denominators: The Jupiter-Saturn Example</h3>

          <div className="lrn-callout">
            <span className="lrn-callout-label">Physical Example</span>
            <p>
              Jupiter and Saturn are near a 2:5 resonance: {`$2\\omega_J - 5\\omega_S \\approx 0$`}.
            </p>
            <p>The denominator {`$2\\omega_J - 5\\omega_S$`} is very small, not zero.</p>
            <p>
              This causes a long-period perturbation of about 880 years and a large amplitude in
              orbital elements.
            </p>
            <p>It does not cause instability. The KAM tori keep the orbits bounded.</p>
          </div>

          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              KAM gives eternal confinement in 2 degrees-of-freedom (DOF) systems. Do you expect the
              same guarantee in 5 DOF systems with the same perturbation size?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>No. The guarantee weakens.</p>
              <p>
                In 2 DOF the energy surface has 3 dimensions. Invariant 2-tori divide it into
                pieces. A trajectory cannot cross a torus, so it stays in its piece.
              </p>
              <p>
                In 5 DOF the energy surface has 9 dimensions. Invariant 5-tori have codimension 4.
                They no longer divide the surface. Trajectories can drift around them (Arnold
                diffusion).
              </p>
            </details>
          </div>
        </>,

        // SECTION 2: Zones of Instability and Arnold Diffusion
        <>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              In 2 DOF, KAM tori trap trajectories between them forever. In 3 DOF, the same argument
              fails.
            </p>
            <p>What geometric property of the tori changes when you go from 2 DOF to 3 DOF?</p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>Their codimension in the energy surface changes.</p>
              <p>
                In 2 DOF: energy surface is 3-dimensional, 2-tori are codimension 1. They divide the
                surface.
              </p>
              <p>
                In 3 DOF: energy surface is 5-dimensional, 3-tori are codimension 2. They do not
                divide the surface. A codimension-2 surface is like a rope in a room: you walk
                around it without crossing it.
              </p>
            </details>
          </div>

          <h2>Zones of Instability and Arnold Diffusion</h2>

          <p>
            The geometry changes when the number of degrees of freedom is more than two. That change
            destroys the topological trap that keeps 2 DOF trajectories confined forever.
          </p>

          <p>
            One term first. The codimension of a surface is the number of independent directions you
            would have to fix to land on it: the dimension of the space minus the dimension of the
            surface. Codimension 1 is a wall that splits a room. Codimension 2 or more is a thread
            you can step around.
          </p>

          <ArnoldDiffusion />

          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">2 DOF Systems</span>
              <p>Energy surface is 3-dimensional.</p>
              <p>Invariant 2-tori divide the energy surface (codimension 1).</p>
              <p>Trajectories trapped between tori forever.</p>
              <p>Topological confinement: gaps between tori are closed regions.</p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">{`$n > 2$`} DOF Systems</span>
              <p>Energy surface is {`$(2n-1)$`}-dimensional.</p>
              <p>
                Invariant {`$n$`}-tori have codimension {`$n-1 > 1$`}. They do not divide the
                surface.
              </p>
              <p>
                Arnold diffusion: trajectories can drift along resonant zones over long times. The
                rate is exponentially slow. The drift stays bounded for a time of order{' '}
                {`$\\exp\\!\\bigl((c/\\varepsilon)^a\\bigr)$`}, but it is not zero.
              </p>
            </div>
          </div>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>Why does codimension greater than 1 mean tori do not divide the energy surface?</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                A surface of codimension 1 in an {`$n$`}-dimensional space separates the space into
                two sides (like a wall in a room).
              </p>
              <p>
                A surface of codimension 2 or more is like a rope in a room: you can walk around it
                without crossing it.
              </p>
              <p>
                In 3 degrees of freedom, the energy surface has 5 dimensions. The 3-tori have
                dimension 3, codimension 2. A path from one side to the other can detour around the
                tori.
              </p>
            </details>
          </div>

          <div className="lrn-callout">
            <span className="lrn-callout-label">KAM vs Nekhoroshev: Two Guarantees</span>
            <p>
              KAM and the Nekhoroshev estimate answer different questions about the same system.
            </p>
            <p>
              KAM is about which orbits are exactly invariant: the Diophantine tori, kept forever
              and never drifting.
            </p>
            <p>
              Nekhoroshev is about every other orbit, including those in the gaps. None of them
              drift fast. The slow variables stay within {`$\\sim \\varepsilon^b$`} of their start
              for a time of order {`$\\exp\\!\\bigl((c/\\varepsilon)^a\\bigr)$`}, where the exponent
              {`$a$`} shrinks as the number of degrees of freedom grows. Drift is allowed, but only
              over a stretch of time that is exponentially long.
            </p>
          </div>

          <h3>Watching Tori Break: The Standard Map</h3>

          <p>
            One concrete system lets you watch tori survive and then break as you turn up the
            perturbation: the standard map (also called the Chirikov-Taylor map). It is a single
            twist map with one knob {`$K$`}. Larger {`$K$`} means stronger kicks. The Part V pages
            on Poincaré maps and Lyapunov exponents build and analyze it; here it just illustrates
            KAM.
          </p>

          <div className="lrn-callout">
            <span className="lrn-callout-label">The Last Torus to Break</span>
            <p>
              At small {`$K$`} the picture is full of smooth invariant curves, the tori KAM keeps.
              As {`$K$`} grows, curves with frequency ratios near simple fractions break first. The
              chaotic gaps spread.
            </p>
            <p>
              One curve holds out longest: the one whose frequency ratio is the golden mean{' '}
              {`$(\\sqrt{5}-1)/2 \\approx 0.618$`}. It is the last torus to break, and it goes at{' '}
              {`$K \\approx 0.972$`}. Above that value no curve spans the picture and large-scale
              chaos sets in.
            </p>
          </div>

          <div className="lrn-callout">
            <span className="lrn-callout-label">Why Golden Is the Toughest Frequency</span>
            <p>
              The Diophantine condition rewards a frequency ratio that stays far from every
              fraction. The golden mean does this best of all numbers.
            </p>
            <p>
              Write a number as a continued fraction. Large entries mean a nearby good fraction
              approximation, which is a near-resonance. The golden mean has the smallest possible
              entries, all 1s, so it has the worst rational approximations. Worst-approximated means
              farthest from resonance, which means its torus is the hardest to break.
            </p>
          </div>

          <h3>The Nondegeneracy Condition Across Settings</h3>

          <p>
            KAM is not one theorem but a family. Each setting needs its own nondegeneracy condition:
            the precise statement that frequencies must vary from torus to torus. Two worked cases,
            then a short catalog.
          </p>

          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Autonomous flow</span>
              <p>{`$H = H_0(I) + \\varepsilon H_1(I,\\varphi)$`}.</p>
              <p>
                Nondegeneracy: {`$\\det|\\frac{\\partial^2 H_0}{\\partial I^2}| \\neq 0$`}. The
                frequency vector changes as you move between tori.
              </p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Twist map</span>
              <p>A symplectic map of the annulus, frequency replaced by rotation number.</p>
              <p>
                Twist condition: {`$\\det|\\frac{\\partial^2 S_0}{\\partial I^2}| \\neq 0$`} for the
                generating function {`$S_0$`}. The rotation number changes with the radius.
              </p>
            </div>
          </div>

          <p>The same idea adapts to four more settings:</p>

          <ul className="lrn-list">
            <li>
              Time-periodic forcing: add a periodic time variable, raising the torus dimension by
              one.
            </li>
            <li>
              Exact symplectic maps (flux through any closed curve preserved): used for billiards.
            </li>
            <li>
              Near an equilibrium: the condition becomes {`$\\det|\\omega_{kl}| \\neq 0$`} for the
              normal-form frequency matrix.
            </li>
            <li>Near an elliptic fixed point of a map: the rotation-number condition again.</li>
          </ul>

          <h3>Worked Applications</h3>

          <p>
            Two applications carried through, then a few one-line entries. Each turns a real system
            into the {`$H_0 + \\varepsilon H_1$`} form KAM needs.
          </p>

          <div className="lrn-callout">
            <span className="lrn-callout-label">Worked: Asteroid Near Jupiter</span>
            <p>
              Model the Sun, Jupiter, and a tiny asteroid. The asteroid's mass is so small it does
              not affect the other two. Jupiter circles the Sun on a fixed orbit. This is the planar
              circular restricted three-body problem.
            </p>
            <p>
              Treat Jupiter's mass {`$\\mu$`} as the small parameter. At {`$\\mu = 0$`} the asteroid
              feels only the Sun and runs an integrable Kepler ellipse, so it sits on an invariant
              torus.
            </p>
            <p>
              Turn Jupiter on at small {`$\\mu$`}. KAM keeps most of those tori, slightly bent. In 2
              degrees of freedom those tori divide the energy surface, so the asteroid stays trapped
              between two of them. Its orbit stays bounded for all time, as long as it sits far from
              a strong resonance.
            </p>
          </div>

          <div className="lrn-callout">
            <span className="lrn-callout-label">Worked: Fast-Spinning Rigid Body</span>
            <p>
              A rigid body spins under gravity (a top). Its symmetry axis lets you remove one cyclic
              angle, leaving a 2-degree-of-freedom system.
            </p>
            <p>
              Spin it fast. The gravity torque is then small next to the spin, so it plays the role
              of {`$\\varepsilon H_1$`}. KAM keeps most tori. The angular-momentum vector stays near
              its starting direction for all time: the top does not tip over.
            </p>
          </div>

          <ul className="lrn-list">
            <li>
              Geodesics on a near-ellipsoid surface (2 degrees of freedom): tori persist when the
              surface is close enough to an exact ellipsoid.
            </li>
            <li>
              Convex billiards: KAM plus Poincaré-Birkhoff prove that short stable bouncing orbits
              survive small reshaping of the table.
            </li>
            <li>
              Pendulum with a vibrating pivot: fast vibration stabilizes the upright position when
              order-3 and order-4 resonances are absent.
            </li>
            <li>
              {`$n$`} planets around the Sun: quasi-periodic motion fills most of the phase space,
              and the slow drift of orbit sizes stays exponentially small.
            </li>
          </ul>
        </>,

        // SECTION 3: Poincaré-Birkhoff Fixed-Point Theorem
        <>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              You have an area-preserving map of an annulus. The inner boundary rotates clockwise,
              the outer boundary rotates counterclockwise.
            </p>
            <p>How many fixed points do you expect?</p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>At least two, by the Poincaré-Birkhoff theorem.</p>
              <p>
                The opposite rotation directions force a "twist" in the map. This twist must have at
                least two fixed points by topological arguments.
              </p>
            </details>
          </div>

          <h2>Poincaré-Birkhoff Fixed-Point Theorem</h2>

          <div className="lrn-callout">
            <span className="lrn-callout-label">What Happens Where a Torus Breaks</span>
            <p>
              KAM tells you the non-resonant tori survive. It is silent about what replaces a
              resonant torus once it breaks apart. This section answers that.
            </p>
            <p>
              A resonant torus is filled with closed loops. The perturbation does not erase them
              all. It leaves behind an even number of isolated periodic orbits, alternating around
              the ring: stable centers (called elliptic) and unstable saddles (called hyperbolic).
              This is an island chain. Thin chaotic layers grow along the saddles.
            </p>
            <p>
              The Poincaré-Birkhoff theorem is the tool that counts those surviving orbits. It works
              on a return map of an annulus.
            </p>
          </div>

          <p>
            A Poincaré return map sends a point on a cross-section of phase space to where its
            trajectory next crosses the same cross-section. It turns a continuous flow into one step
            of a map. Closed orbits become fixed points of that map.
          </p>
          <p>
            One physical use: a tokamak confines plasma with twisted magnetic field lines. The twist
            condition then guarantees closed field lines, which trace closed drift orbits.
          </p>

          <div style={{ margin: '24px 0' }}>
            <PoincareBirkhoffDiagram C={C} />
          </div>

          <div className="lrn-callout lrn-success">
            <span className="lrn-callout-label">Theorem (Poincaré-Birkhoff)</span>
            <p>
              Take any area-preserving continuous map of a flat ring (an annulus). Suppose it turns
              the inner edge one way and the outer edge the opposite way. Then it has at least two
              fixed points.
            </p>
          </div>

          <div className="lrn-definition">
            <span className="lrn-definition-term">Area-Preserving Annulus Map</span>
            <div className="lrn-definition-desc">
              <p>
                A map {`$(x,y) \\mapsto (f(x,y), y + g(x,y))$`} on the annulus{' '}
                {`$a \\leq x \\leq b$`} with:
              </p>
              <ul className="lrn-list">
                <li>
                  {`$f(a,y) \\equiv a$`}, {`$f(b,y) \\equiv b$`}: boundary circles are preserved
                </li>
                <li>
                  {`$g(a,y) < 0$`}, {`$g(b,y) > 0$`}: opposite rotation directions at the boundaries
                </li>
              </ul>
            </div>
          </div>

          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>
              The rotation angle {`$g$`} changes from negative to positive as {`$x$`} goes from{' '}
              {`$a$`} to {`$b$`}.
            </p>
            <p>By continuity, there is a curve in the annulus where {`$g = 0$`} - zero rotation.</p>
            <p>
              Points on this curve are candidates for fixed points: their angle returns to its
              starting value. But the curve must also have its radial coordinate fixed for a true
              fixed point.
            </p>
            <p>
              Area preservation forces the curve to intersect its own image in at least two points.
              A single intersection would leave the total enclosed area unbalanced - the map
              preserves area, so a second intersection is forced.
            </p>
          </div>

          <h3>Connection to Generating Functions</h3>

          <p>
            A symplectic map is one that preserves areas in phase space (the
            canonical-transformations page builds these from generating functions). Counting its
            fixed points by hand is hard. There is a slicker route: turn each fixed point into a
            critical point of a single function, then let topology count the critical points.
          </p>
          <p>
            Recall from canonical transformations that a generating function {`$S(q, Q)$`} stores a
            symplectic map without writing it out. The relations{' '}
            {`$p = \\frac{\\partial S}{\\partial q}$`} and{' '}
            {`$P = -\\frac{\\partial S}{\\partial Q}$`} read off the old and new momenta by
            differentiating {`$S$`}. Where those momenta agree with the old point, nothing moves.
          </p>

          <div className="lrn-proof">
            <span className="lrn-proof-header">Key Idea</span>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">1.</span>
              <div className="lrn-proof-step-content">
                For an area-preserving map {`$(x,y) \\mapsto (X,Y)$`} of the annulus, the same
                generating-function idea gives {`$dS = (x-X)dy + (Y-y)dX$`}. This is the{' '}
                {`$S(q,Q)$`}
                relation rewritten in the annulus coordinates: it measures how far the map moves
                each point.
              </div>
            </div>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">2.</span>
              <div className="lrn-proof-step-content">
                A fixed point satisfies {`$X = x$`} and {`$Y = y$`}. Both bracketed differences
                vanish, so {`$dS = 0$`} there.
              </div>
            </div>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">3.</span>
              <div className="lrn-proof-step-content">
                Define {`$F(x,y) = S(X(x,y),y)$`}. Every fixed point of the map is a critical point
                of {`$F$`} (a point where {`$dF = 0$`}).
              </div>
            </div>
            <div className="lrn-qed">Q.E.D.</div>
          </div>

          <p>
            You can now count periodic orbits without tracking a single trajectory: count the
            critical points of one function {`$F$`} instead, which topology bounds from below.
          </p>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>
              Why does the connection between fixed points and critical points of {`$F$`} help you
              count fixed points?
            </p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                Morse theory gives lower bounds on the number of critical points of a smooth
                function. A smooth function on a compact manifold has at least as many critical
                points as the sum of its Betti numbers (topological counts of "holes").
              </p>
              <p>
                Translating "fixed point counting" into "critical point counting" lets you use these
                topological tools.
              </p>
              <p>This is a general principle: topology bounds count.</p>
            </details>
          </div>

          <h3>Periodic Orbits from Broken Resonant Tori</h3>

          <p>
            Now return to KAM. A resonant torus is filled with closed trajectories. When the
            perturbation breaks it apart, the closed trajectories do not all vanish. A definite
            number of them survive as isolated periodic orbits.
          </p>

          <div className="lrn-callout lrn-success">
            <span className="lrn-callout-label">Theorem (Surviving Periodic Orbits)</span>
            <p>
              Take an isoenergetically nondegenerate system with an {`$n$`}-torus filled with closed
              trajectories. When that torus breaks apart under perturbation, at least {`$2^{n-1}$`}{' '}
              closed trajectories of the perturbed system survive.
            </p>
            <p>
              These are the island centers of the chain. They alternate elliptic and hyperbolic, the
              same structure the Poincaré-Birkhoff theorem forces.
            </p>
          </div>

          <div className="lrn-callout">
            <span className="lrn-callout-label">Connects to Symplectic Topology</span>
            <p>
              These fixed-point counts are the tip of a deep subject. Counting fixed points of a
              symplectic map becomes counting critical points of a function, and the Morse-theory
              lower bound (the sum of the Betti numbers) turns topology into a guaranteed orbit
              count. Pushing this idea to general symplectic manifolds grew into modern symplectic
              topology during the 1970s.
            </p>
          </div>
        </>,

        // SECTION 4: Multiplicities of Characteristic Frequencies
        <>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              Two masses are connected by a spring with 3-fold rotational symmetry. You change the
              spring constant.
            </p>
            <p>Predict: can the two natural frequencies become equal?</p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                Without symmetry: no, they cannot cross in a generic one-parameter family. Frequency
                collision requires codimension 2 (two simultaneous conditions).
              </p>
              <p>
                With 3-fold symmetry: yes. Symmetry forces certain mode pairs to always have equal
                frequencies. Symmetry-preserving perturbations cannot split them.
              </p>
            </details>
          </div>

          <h2>Multiplicities of Characteristic Frequencies</h2>

          <p>
            Take two natural frequencies of a Hamiltonian system. As you vary one parameter, you
            cannot generally force the two frequencies to become equal. Symmetry can break this
            rule. Here is why both facts hold.
          </p>

          <div className="lrn-callout">
            <span className="lrn-callout-label">Frequencies Are Eigenvalue Magnitudes</span>
            <p>
              Linearize a Hamiltonian system near a stable equilibrium. The small oscillations
              decouple into normal modes. Each mode has a frequency {`$\\omega$`}.
            </p>
            <p>
              In the linearized system, that frequency shows up as a pair of imaginary eigenvalues
              {`$\\pm i\\omega$`} of the equations of motion. Stable oscillation means the
              eigenvalues sit on the imaginary axis. Two modes have equal frequency exactly when
              their eigenvalue pairs collide on that axis.
            </p>
          </div>

          <div className="lrn-definition">
            <span className="lrn-definition-term">Codimension of a Submanifold</span>
            <div className="lrn-definition-desc">
              <p>
                The codimension of a submanifold equals the dimension of the ambient space minus the
                dimension of the submanifold.
              </p>
              <p>
                In a generic system, you must tune {`$c$`} independent parameters to encounter a
                submanifold of codimension {`$c$`}.
              </p>
            </div>
          </div>

          <h3>Ellipsoids and Their Revolution Classes</h3>

          <div className="lrn-callout">
            <span className="lrn-callout-label">Why Ellipsoids Answer the Frequency Question</span>
            <p>
              A stable quadratic Hamiltonian fixes an energy ellipsoid in phase space. Its
              characteristic frequencies are the axis lengths of that ellipsoid.
            </p>
            <p>
              So two equal frequencies mean two equal axes: an ellipsoid of revolution. Counting how
              rare equal frequencies are becomes counting how rare ellipsoids of revolution are.
            </p>
          </div>

          <p>
            An ellipsoid in {`$\\mathbb{R}^n$`} has {`$\\frac{n(n+1)}{2}$`} parameters (one for each
            axis length and each pair of axes in the principal frame).
          </p>
          <p>An ellipsoid of revolution has two equal axes. This is a special case.</p>

          <div className="lrn-callout lrn-success">
            <span className="lrn-callout-label">Theorem (Frequency Collision Codimension)</span>
            <p>
              The set of ellipsoids of revolution in {`$\\mathbb{R}^n$`} is a finite union of smooth
              submanifolds of codimension 2 and higher in the space of all ellipsoids.
            </p>
          </div>

          <div className="lrn-proof">
            <span className="lrn-proof-header">Codimension Calculation (n=2 Example)</span>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">1.</span>
              <div className="lrn-proof-step-content">
                An ellipse in the plane has 3 parameters (two semi-axes, one angle). The space of
                all ellipses is 3-dimensional.
              </div>
            </div>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">2.</span>
              <div className="lrn-proof-step-content">
                An ellipse of revolution (circle) has 1 parameter (radius). The space of circles is
                1-dimensional.
              </div>
            </div>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">3.</span>
              <div className="lrn-proof-step-content">
                Codimension = 3 - 1 = 2. You need to tune 2 parameters to hit a circle in a generic
                family of ellipses.
              </div>
            </div>
            <div className="lrn-qed">Q.E.D.</div>
          </div>

          <div style={{ margin: '24px 0' }}>
            <FrequencyRepulsionDiagram C={C} />
          </div>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>Why does frequency collision require TWO conditions, not one?</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                The first condition is {`$\\omega_1 = \\omega_2$`}: the two frequencies are equal.
                That is one equation.
              </p>
              <p>
                But for imaginary eigenvalue pairs {`$(\\pm i\\omega)$`}, you also need both pairs
                to remain on the imaginary axis after the collision.
              </p>
              <p>
                Without the second condition, the collision could cause the eigenvalues to split off
                the imaginary axis into complex quadruples. That is a qualitatively different (and
                unstable) configuration.
              </p>
              <p>Two conditions together give codimension 2.</p>
            </details>
          </div>

          <h3>Effect of Symmetry on the Spectrum</h3>

          <p>
            Symmetry can force characteristic frequencies to remain equal even as parameters vary.
          </p>

          <div className="lrn-callout">
            <span className="lrn-callout-label">
              Example: Three Identical Masses at Triangle Vertices
            </span>
            <p>
              Three equal masses at the vertices of an equilateral triangle have 3-fold rotational
              symmetry.
            </p>
            <p>
              The characteristic frequencies split into "symmetric" modes (matching the rotation)
              and "non-symmetric" modes.
            </p>
            <p>Non-symmetric modes come in pairs with forced equal frequencies.</p>
            <p>Perturbations that preserve the 3-fold symmetry cannot split these pairs.</p>
          </div>

          <div className="lrn-callout lrn-success">
            <span className="lrn-callout-label">Behavior Under Symmetry-Preserving Variation</span>
            <p>
              In a system with rotational symmetry of order {`$\\geq 3$`}, varying parameters while
              preserving the symmetry cannot split a forced double frequency.
            </p>
            <p>
              The minimum parameter count for a collision between {`$i$`} simple and {`$j$`} double
              frequencies is {`$\\frac{(i-1)(i+2)}{2} + j^2$`}.
            </p>
          </div>

          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Without Symmetry</span>
              <p>Frequency collision has codimension 2.</p>
              <p>Needs a 2-parameter family to occur.</p>
              <p>Frequencies repel in a 1-parameter family.</p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">With Symmetry (order {`$\\geq 3$`})</span>
              <p>Forced double frequencies are persistent.</p>
              <p>Symmetry-preserving perturbations cannot split them.</p>
              <p>Collision codimension reduced to 0 within the symmetric family.</p>
            </div>
          </div>
        </>
      ]
    },

    // PRACTICE CARDS
    practice: [
      {
        q: 'Define conditionally-periodic motion on an invariant torus.',
        a: 'Motion with {`$\\dot{\\varphi}_k = \\omega_k(I)$`} and {`$\\dot{I} = 0$`}. When frequencies are rationally independent, the trajectory densely fills the torus. When rationally dependent, the trajectory is a closed curve.'
      },
      {
        q: 'What is the nondegeneracy condition for the KAM theorem?',
        a: '{`$\\det|\\frac{\\partial^2 H_0}{\\partial I^2}| \\neq 0$`}. This means the frequency map {`$I \\mapsto \\omega(I) = \\frac{\\partial H_0}{\\partial I}$`} is a local diffeomorphism: different tori have different frequency vectors.'
      },
      {
        q: 'What is isoenergetic nondegeneracy?',
        a: 'The bordered Hessian {`$\\det\\begin{pmatrix} \\frac{\\partial^2 H_0}{\\partial I^2} & \\frac{\\partial H_0}{\\partial I} \\\\ (\\frac{\\partial H_0}{\\partial I})^T & 0 \\end{pmatrix} \\neq 0$`}. This ensures the frequency ratios change between tori on a fixed energy surface.'
      },
      {
        q: '[ELABORATE] Why do non-resonant tori have full Lebesgue measure while resonant tori are dense?',
        a: 'For each resonance relation {`$\\langle k,\\omega\\rangle = 0$`}, the satisfying {`$\\omega$`} values form a hyperplane: measure zero. There are countably many such relations (one per integer vector {`$k$`}). A countable union of measure-zero sets still has measure zero. So resonant tori have measure zero. But each hyperplane is dense, so the union of all resonant frequencies is also dense.'
      },
      {
        q: 'State the KAM theorem.',
        a: 'For {`$H = H_0(I) + \\varepsilon H_1(I,\\varphi)$`} with {`$H_0$`} nondegenerate and sufficiently small {`$\\varepsilon$`}: most non-resonant invariant tori survive, slightly deformed. The surviving tori carry conditionally-periodic trajectories with Diophantine frequency vectors. The measure of destroyed tori goes to zero as {`$\\varepsilon \\to 0$`}.'
      },
      {
        q: 'What is the Diophantine non-resonance condition for a KAM torus?',
        a: '{`$|\\langle\\omega,k\\rangle| > C|k|^{-\\nu}$`} for all integer vectors {`$k \\neq 0$`}. This says the frequencies are "far from resonance" in a quantitative sense. Tori satisfying this for some {`$C,\\nu > 0$`} survive perturbations.'
      },
      {
        q: "Why does Newton's method (super-convergence) solve the small denominator problem in the KAM proof?",
        a: "Small denominators {`$|\\langle\\omega,k\\rangle|^{-1} \\leq C|k|^\\nu$`} grow polynomially. Standard perturbation theory compounds this growth at each order, causing divergence. Newton's method reduces the error from {`$\\varepsilon$`} to {`$\\varepsilon^2$`} per step. Polynomial growth in {`$|k|$`} cannot beat {`$\\varepsilon^{2^n}$`} decay, so the iteration converges."
      },
      {
        q: '[TRANSFER] Why does KAM theory guarantee eternal confinement for a 2 DOF system but not for a 5 DOF system?',
        a: 'In 2 DOF, the energy surface has dimension 3. Invariant 2-tori have codimension 1 in the energy surface: they divide it into disconnected pieces. Trajectories in a gap between tori cannot escape. In 5 DOF, the energy surface has dimension 9 and 5-tori have codimension 4: they do not divide the energy surface. Trajectories can drift around the tori through Arnold diffusion, though exponentially slowly.'
      },
      {
        q: '[PREDICT] An asteroid sits near the 3:1 resonance with Jupiter, where KAM tori are destroyed. What do you expect for its long-term behavior?',
        a: 'The resonant torus breaks into an island chain: alternating stable centers and unstable saddles, with thin chaotic layers along the saddles. Far from the resonance, surviving KAM tori still bound the motion. But right inside the resonance zone the asteroid rides those chaotic layers and its orbit shape swings widely over time. This sweeps the asteroid onto a planet-crossing path and clears it out, which is why the asteroid belt has an empty band at the 3:1 resonance.'
      },
      {
        q: '[ELABORATE] Name three variants of the KAM theorem and their nondegeneracy conditions.',
        a: '1. Autonomous: {`$\\det|\\frac{\\partial^2 H_0}{\\partial I^2}| \\neq 0$`}. 2. Twist maps (symplectic mappings): {`$\\det|\\frac{\\partial^2 S_0}{\\partial I^2}| \\neq 0$`} for generating function. 3. Neighborhoods of equilibria: {`$\\det|\\omega_{kl}| \\neq 0$`} for the Birkhoff normal form frequency matrix.'
      },
      {
        q: 'State the Poincaré-Birkhoff theorem.',
        a: 'Every area-preserving homeomorphism of a planar annulus that rotates the inner boundary clockwise and the outer boundary counterclockwise has at least two fixed points.'
      },
      {
        q: 'How do fixed points of a symplectic map relate to critical points of a generating function?',
        a: 'For a symplectic diffeomorphism with generating function {`$S$`} satisfying {`$dS = (x-X)dy + (Y-y)dX$`}, define {`$F(x,y) = S(X(x,y),y)$`}. Every fixed point ({`$X=x, Y=y$`}) forces {`$dS=0$`}, hence {`$dF=0$`}. Fixed points are exactly the critical points of {`$F$`}.'
      },
      {
        q: '[TRANSFER] A physicist wants to prove periodic orbits exist in a 2 DOF Hamiltonian system. How does the Poincaré-Birkhoff theorem help?',
        a: 'A periodic orbit becomes a fixed point of the Poincaré return map, which is area-preserving on an annulus. If the return map turns the inner edge of the annulus one way and the outer edge the opposite way, Poincaré-Birkhoff guarantees at least two fixed points. Those two fixed points are the periodic orbits, so their existence is proven without solving the equations of motion.'
      },
      {
        q: '[ELABORATE] A resonant torus has just broken. How does the Poincaré-Birkhoff theorem explain what replaces it?',
        a: 'The broken torus leaves behind an even number of isolated periodic orbits arranged in a ring: an island chain. On a Poincaré return map of the surrounding annulus, the rotation rate is faster on one side of the old resonant radius than the other, so the inner and outer edges turn opposite ways. Poincaré-Birkhoff then forces at least two fixed points, which are the alternating elliptic centers and hyperbolic saddles of the chain.'
      },
      {
        q: '[SELF-EXPLAIN] When a resonant n-torus breaks apart, what survives, and what is its structure?',
        a: 'At least {`$2^{n-1}$`} closed trajectories survive as isolated periodic orbits. They are the island centers of a chain. They alternate elliptic (stable centers) and hyperbolic (unstable saddles) around the ring, the same alternating structure the Poincaré-Birkhoff theorem forces. Thin chaotic layers grow along the saddles.'
      },
      {
        q: '[TRANSFER] You compare two frequency ratios in the standard map: {`$1/2$`} and the golden mean {`$(\\sqrt{5}-1)/2$`}. Which torus survives a stronger kick, and why?',
        a: 'The golden-mean torus survives the stronger kick. The Diophantine condition rewards a ratio that stays far from every fraction. The ratio {`$1/2$`} is itself a low-order rational, so its torus is resonant and breaks first. The golden mean has the continued fraction {`$[0;1,1,1,\\ldots]$`}, all 1s, the smallest possible entries. Small entries mean the worst rational approximations, so it sits farthest from resonance. That is why it is the last torus to break, going at {`$K \\approx 0.972$`}.'
      },
      {
        q: 'What is the codimension of the set of ellipsoids of revolution in the space of all ellipsoids?',
        a: 'Codimension 2. Two conditions must be satisfied simultaneously: two axis lengths equal AND eigenvalues remain imaginary (not becoming complex quadruples). One condition alone gives codimension 1.'
      },
      {
        q: 'Why can two real characteristic frequencies not collide in a generic one-parameter family?',
        a: 'Collision of imaginary eigenvalue pairs requires two conditions simultaneously: {`$\\omega_1 = \\omega_2$`} (collision) and that they remain imaginary (not split into complex quadruples). Two conditions give codimension 2. A one-parameter family can only satisfy codimension-1 conditions generically.'
      },
      {
        q: '[TRANSFER] A structural engineer varies beam stiffness and plots the two lowest natural frequencies. What does the theory predict about their graph?',
        a: 'In a generic one-parameter family, the frequency curves approach each other but repel: like hyperbolas, not crossing. This is the "avoided crossing" phenomenon. Crossing requires codimension 2, which a generic one-parameter family cannot achieve. The curves form hyperbola-like shapes in the {`$(\\lambda, \\omega)$`} plane.'
      },
      {
        q: '[ELABORATE] Why does 3-fold rotational symmetry force equal frequencies for "non-symmetric" modes?',
        a: 'A mode that is not symmetric under the 3-fold rotation cannot stand alone. Rotating it by one third of a turn produces a second, distinct mode shape. The two shapes must oscillate at the same frequency, because the rotation is a symmetry of the whole system and cannot change how fast a mode vibrates. So these modes come locked in equal-frequency pairs. Any perturbation that keeps the 3-fold symmetry keeps the pair locked, so the double frequency cannot split.'
      }
    ],

    // REFERENCE MODE
    reference: {
      category: 'Quick Reference',
      title: 'KAM Theory and Perturbation Methods',
      sections: [
        <>
          <h2>Conditionally-Periodic Motion</h2>

          <div className="lrn-eq lrn-eq-display">
            <span>{`$$\\dot{\\varphi}_k = \\omega_k(I), \\quad \\dot{I} = 0$$`}</span>
          </div>
          <ul className="lrn-list">
            <li>Rationally independent {`$\\omega_k$`}: trajectory densely fills torus</li>
            <li>Rationally dependent {`$\\omega_k$`}: trajectory is a closed curve</li>
          </ul>

          <h2>KAM Theory</h2>

          <div className="lrn-eq lrn-eq-display">
            <span>{`$$H = H_0(I) + \\varepsilon H_1(I,\\varphi), \\quad \\varepsilon \\ll 1$$`}</span>
          </div>

          <div className="lrn-callout">
            <span className="lrn-callout-label">Nondegeneracy Condition</span>
            <div className="lrn-eq">
              <span>{`$$\\det\\left|\\frac{\\partial^2 H_0}{\\partial I^2}\\right| \\neq 0$$`}</span>
            </div>
            <p>When to use: verifying that the KAM theorem applies.</p>
          </div>

          <div className="lrn-callout">
            <span className="lrn-callout-label">Isoenergetic Nondegeneracy</span>
            <div className="lrn-eq">
              <span>{`$$\\det\\begin{pmatrix} \\dfrac{\\partial^2 H_0}{\\partial I^2} & \\dfrac{\\partial H_0}{\\partial I} \\\\[6pt] \\left(\\dfrac{\\partial H_0}{\\partial I}\\right)^{\\!T} & 0 \\end{pmatrix} \\neq 0$$`}</span>
            </div>
            <p>When to use: studying the surface of section on a fixed energy level.</p>
          </div>

          <div className="lrn-callout">
            <span className="lrn-callout-label">Diophantine Condition (KAM)</span>
            <div className="lrn-eq">
              <span>{`$$|\\langle\\omega,k\\rangle| > C|k|^{-\\nu} \\quad \\forall k \\neq 0$$`}</span>
            </div>
            <p>When to use: identifying which tori survive perturbation.</p>
          </div>

          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">2 DOF</span>
              <p>Tori divide energy surface. Eternal confinement. No Arnold diffusion.</p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">{`$n>2$`} DOF</span>
              <p>
                Tori do not divide energy surface. Arnold diffusion possible. Nekhoroshev bound:
                action drift stays within {`$\\sim \\varepsilon^b$`} for a time of order{' '}
                {`$\\exp\\!\\bigl((c/\\varepsilon)^a\\bigr)$`}.
              </p>
            </div>
          </div>

          <h2>Poincaré-Birkhoff Theorem</h2>

          <div className="lrn-callout lrn-success">
            <span className="lrn-callout-label">Theorem</span>
            <p>
              Area-preserving homeomorphism of annulus with boundary circles rotating in opposite
              directions has {`$\\geq 2$`} fixed points.
            </p>
            <p>When to use: proving existence of periodic orbits in 2 DOF Hamiltonian systems.</p>
          </div>

          <div className="lrn-callout">
            <span className="lrn-callout-label">Generating Function Connection</span>
            <div className="lrn-eq">
              <span>{`$$dS = (x-X)dy + (Y-y)dX$$`}</span>
            </div>
            <p>Fixed points of the map = critical points of {`$F(x,y) = S(X(x,y),y)$`}.</p>
          </div>

          <div className="lrn-callout lrn-success">
            <span className="lrn-callout-label">Torus Diffeomorphism</span>
            <p>
              Symplectic diffeomorphism of torus fixing center of gravity: at least 4 fixed points
              (multiplicity), at least 3 geometrically different.
            </p>
          </div>

          <div className="lrn-callout lrn-success">
            <span className="lrn-callout-label">Disintegrating Torus</span>
            <p>
              Isoenergetically nondegenerate system with resonant {`$n$`}-torus: perturbation
              creates at least {`$2^{n-1}$`} closed trajectories.
            </p>
          </div>

          <h2>Multiplicities of Characteristic Frequencies</h2>

          <div className="lrn-callout">
            <span className="lrn-callout-label">Codimension of Frequency Collision</span>
            <p>
              Two imaginary eigenvalue pairs collide: codimension 2. Needs a 2-parameter family. In
              1-parameter families: frequencies repel (avoided crossing).
            </p>
          </div>

          <div className="lrn-callout">
            <span className="lrn-callout-label">Ellipsoid Codimension Formula</span>
            <div className="lrn-eq">
              <span>{`$$\\text{codim}(v_2 \\text{ double}, v_3 \\text{ triple}, \\ldots) = 2v_2 + 5v_3 + 9v_4 + \\cdots$$`}</span>
            </div>
          </div>

          <div className="lrn-callout">
            <span className="lrn-callout-label">Symmetry Locking</span>
            <p>
              Rotational symmetry of order {`$\\geq 3$`} forces double frequencies for non-symmetric
              modes. Symmetry-preserving perturbations cannot split them.
            </p>
            <p>
              Minimum parameter count for collision of {`$i$`} simple and {`$j$`} double
              frequencies: {`$\\frac{(i-1)(i+2)}{2} + j^2$`}.
            </p>
          </div>
        </>
      ]
    },
    customCss: `.MafsView { --mafs-bg: transparent; --mafs-fg: var(--ink-default); --mafs-line-color: var(--ink-hairline); }`
  }

  return <LearningTemplate config={config} />
}
