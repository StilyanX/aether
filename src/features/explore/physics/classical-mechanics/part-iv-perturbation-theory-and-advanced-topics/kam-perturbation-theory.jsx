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
} from '../../../../../components/viz/physics-viz/modules'

// ─── Visualization: Invariant Tori ───────────────────────────────────────────
function InvariantToriDiagram({ C }) {
  return (
    <div style={{ border: `1px solid ${C.faint}`, padding: '0 0 8px 0' }}>
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
      <Mafs viewBox={{ x: [-5.5, 5.5], y: [-3, 3] }} preserveAspectRatio={false} height={220}>
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
        <Text x={0} y={-2.7} size={24} color={C.dim}>
          non-resonant tori survive KAM
        </Text>
      </Mafs>
    </div>
  )
}

// ─── Visualization: KAM Cantor Set of Surviving Tori ─────────────────────────
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
    <div style={{ border: `1px solid ${C.faint}`, padding: '0 0 8px 0' }}>
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
      <Mafs viewBox={{ x: [-5.5, 5.5], y: [-2.5, 2.5] }} preserveAspectRatio={false} height={220}>
        {bands.map((b, i) => (
          <Plot.Parametric
            key={i}
            t={[-4.5, 4.5]}
            xy={t => [t, b.y + bandHeight / 2]}
            color={b.survive ? C.accent : C.faint}
            strokeWidth={b.survive ? 3 : 1}
            opacity={b.survive ? 1 : 0.3}
          />
        ))}
        <LaTeX at={[-5, 2.1]} tex={String.raw`\omega`} color={C.dim} />
        <Text x={-5} y={-2.3} size={24} color={C.dim}>
          frequency axis
        </Text>
        <Text x={0} y={2.1} size={24} color={C.dim}>
          Diophantine (survive)
        </Text>
        <Text x={0} y={1.5} size={24} color={C.faint}>
          resonant (destroyed)
        </Text>
      </Mafs>
    </div>
  )
}

// ─── Visualization: Two-Frequency Lissajous on Torus ────────────────────────
function ConditionallyPeriodicDiagram({ C }) {
  const omega1 = 1
  const omega2 = Math.sqrt(2)
  return (
    <div style={{ border: `1px solid ${C.faint}`, padding: '0 0 8px 0' }}>
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
      <Mafs viewBox={{ x: [-3, 3], y: [-3, 3] }} preserveAspectRatio={false} height={260}>
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
        <Text x={0} y={-2.7} size={24} color={C.dim}>
          trajectory densely fills annular region
        </Text>
      </Mafs>
    </div>
  )
}

// ─── Visualization: Arnold Diffusion Codimension ─────────────────────────────
function ArnoldDiffusionDiagram({ C }) {
  return (
    <div style={{ border: `1px solid ${C.faint}`, padding: '0 0 8px 0' }}>
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
        2 DOF: tori divide energy surface (left). 3 DOF: tori do not divide (right)
      </p>
      <Mafs viewBox={{ x: [-6, 6], y: [-2.5, 2.5] }} preserveAspectRatio={false} height={200}>
        {/* 2 DOF side: 3D energy surface, 2-tori as circles dividing it */}
        {[0.7, 1.4, 2.1].map((r, i) => (
          <Plot.Parametric
            key={i}
            t={[-Math.PI, Math.PI]}
            xy={t => [-3.5 + r * Math.cos(t) * 0.9, r * 0.6 * Math.sin(t)]}
            color={C.accent}
            strokeWidth={1.5}
          />
        ))}
        <Text x={-3.5} y={-2.1} size={24} color={C.dim}>
          2 DOF: trapped
        </Text>
        {/* 3 DOF side: tori don't divide, drift path shown */}
        {[0.9, 1.7].map((r, i) => (
          <Plot.Parametric
            key={i}
            t={[-Math.PI, Math.PI]}
            xy={t => [2.5 + r * Math.cos(t) * 0.8, r * 0.5 * Math.sin(t)]}
            color={C.dim}
            strokeWidth={1.5}
          />
        ))}
        <Plot.Parametric
          t={[0, 1]}
          xy={t => [1.2 + t * 2.8, -0.2 + 0.5 * Math.sin(t * 8)]}
          color={C.accent}
          strokeWidth={2}
        />
        <Text x={2.5} y={-2.1} size={24} color={C.dim}>
          3+ DOF: drift possible
        </Text>
      </Mafs>
    </div>
  )
}

// ─── Visualization: Poincaré-Birkhoff Annulus ────────────────────────────────
function PoincareBirkhoffDiagram({ C }) {
  return (
    <div style={{ border: `1px solid ${C.faint}`, padding: '0 0 8px 0' }}>
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
      <Mafs viewBox={{ x: [-3.5, 3.5], y: [-3, 3] }} preserveAspectRatio={false} height={260}>
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
        <Text x={0} y={-2.7} size={24} color={C.dim}>
          at least 2 fixed points guaranteed
        </Text>
        <LaTeX at={[2.1, 0.8]} tex={String.raw`p_1`} color={C.dim} />
        <LaTeX at={[-2.4, -0.3]} tex={String.raw`p_2`} color={C.dim} />
      </Mafs>
    </div>
  )
}

// ─── Visualization: Frequency Map ────────────────────────────────────────────
function FrequencyMapDiagram({ C }) {
  return (
    <div style={{ border: `1px solid ${C.faint}`, padding: '0 0 8px 0' }}>
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
      <Mafs viewBox={{ x: [-6, 6], y: [-2.5, 2.5] }} preserveAspectRatio={false} height={200}>
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
        <Plot.Parametric t={[0, 1]} xy={t => [-1 + t * 2, 0]} color={C.faint} strokeWidth={2} />
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
        <Text x={0} y={-2.3} size={24} color={C.dim}>
          nondegeneracy: map is injective
        </Text>
      </Mafs>
    </div>
  )
}

// ─── Visualization: Frequency Repulsion ──────────────────────────────────────
function FrequencyRepulsionDiagram({ C }) {
  return (
    <div style={{ border: `1px solid ${C.faint}`, padding: '0 0 8px 0' }}>
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
      <Mafs viewBox={{ x: [-5.5, 5.5], y: [-2.5, 2.5] }} preserveAspectRatio={false} height={200}>
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
        <Text x={-3.5} y={-2.2} size={24} color={C.dim}>
          1-parameter
        </Text>
        <Plot.Parametric t={[-2, 2]} xy={t => [1.5 + t, t]} color={C.fg} strokeWidth={2} />
        <Plot.Parametric t={[-2, 2]} xy={t => [1.5 + t, -t]} color={C.dim} strokeWidth={2} />
        <Text x={1.5} y={-2.2} size={24} color={C.dim}>
          2-parameter
        </Text>
        <LaTeX at={[-4.8, 2.1]} tex={String.raw`\omega_i(\lambda)`} color={C.faint} />
      </Mafs>
    </div>
  )
}

// ─── Component ────────────────────────────────────────────────────────────────
export default function KAMPerturbationContent() {
  const C = useVizColors()

  const config = {
    cssPrefix: 'kam',
    source: 'Mathematical Methods of Classical Mechanics - Arnold',
    documentTitle: 'KAM Theory and Perturbation Methods - AETHER',
    learning: {
      groupTitle: 'Part IV: Perturbation Theory and Advanced Topics',
      category: 'Classical Mechanics',
      title: 'KAM Theory and Perturbation Methods',
      subtitle:
        'Conditionally-periodic motion, KAM theorem, Arnold diffusion, and symplectic topology',
      sections: [
        // ──────────────────────────────────────────────────────────────────
        // SECTION 0: Conditionally-Periodic Motion
        // ──────────────────────────────────────────────────────────────────
        <>
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

          <h2>Conditionally-Periodic Motion and Invariant Tori</h2>

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
                This ensures the frequency ratios change as you move between tori on a fixed energy
                surface. Where nondegeneracy asks for distinct frequency vectors, isoenergetic
                nondegeneracy asks for distinct frequency directions - two tori at the same energy
                must point in different directions in frequency space.
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

        // ──────────────────────────────────────────────────────────────────
        // SECTION 1: KAM Theorem
        // ──────────────────────────────────────────────────────────────────
        <>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              You want to prove that most tori survive a perturbation. Standard perturbation theory
              gives you small denominators that make the series diverge.
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
                The larger {`$|k|$`}, the closer a near-resonance could be - the condition
                quantifies exactly how much clearance is required.
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
                  is the torus-average of {`$H_1$`}.
                </li>
                <li>
                  Solution:{' '}
                  {`$S(I,\\varphi) = \\sum_{k\\neq 0} \\frac{\\hat{H}_1(I,k)}{i\\langle\\omega,k\\rangle}e^{i\\langle k,\\varphi\\rangle}$`}
                  . The small denominators appear here.
                </li>
                <li>
                  After one step: new error is {`$O(\\varepsilon^2)$`}. Repeat to get{' '}
                  {`$O(\\varepsilon^4)$`}, etc.
                </li>
              </ol>
            </div>
            <div className="lrn-faded-phase">
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

          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>
              Small denominators grow at most polynomially:{' '}
              {`$|\\langle\\omega,k\\rangle|^{-1} \\leq C|k|^\\nu$`}.
            </p>
            <p>
              Newton's method reduces the error from {`$\\varepsilon$`} to {`$\\varepsilon^2$`} in
              each step.
            </p>
            <p>
              The gain from squaring {`$(\\varepsilon^2)$`} beats the loss from denominators{' '}
              {`$(|k|^\\nu)$`}.
            </p>
            <p>
              This is why Lindstedt series diverge while KAM converges: quadratic vs linear
              convergence.
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
              This causes a long-period perturbation of about 800 years and a large amplitude in
              orbital elements.
            </p>
            <p>It does not cause instability. The KAM tori keep the orbits bounded.</p>
          </div>

          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              KAM gives eternal confinement in 2 DOF systems. Do you expect the same guarantee in 5
              DOF systems with the same perturbation size?
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

        // ──────────────────────────────────────────────────────────────────
        // SECTION 2: Zones of Instability and Arnold Diffusion
        // ──────────────────────────────────────────────────────────────────
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
                divide the surface. You can go around them.
              </p>
            </details>
          </div>

          <h2>Zones of Instability and Arnold Diffusion</h2>

          <p>
            The geometry changes fundamentally when the number of degrees of freedom exceeds two.
            That change destroys the topological trap that keeps 2 DOF trajectories confined
            forever.
          </p>

          <div style={{ margin: '24px 0' }}>
            <ArnoldDiffusionDiagram C={C} />
          </div>

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
                rate is exponentially slow - proportional to{' '}
                {`$\\exp\\!\\bigl(-\\tfrac{c}{\\varepsilon}\\bigr)$`} for some constant {`$c$`} -
                but it is not zero.
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
                In 3 DOF, the energy surface has 5 dimensions. The 3-tori have dimension 3,
                codimension 2. A path from one side to the other can detour around the tori.
              </p>
            </details>
          </div>

          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>In 2 DOF, the energy surface has 3 dimensions and tori have 2 dimensions.</p>
            <p>Codimension 1 means each torus separates the energy surface into two sides.</p>
            <p>
              A trajectory starting on one side cannot reach the other without crossing the torus.
            </p>
            <p>
              In {`$n > 2$`} DOF, the energy surface has {`$2n-1 > 3$`} dimensions. Tori have
              codimension {`$n-1 > 1$`}.
            </p>
            <p>Higher codimension means you can go around the tori, not just over them.</p>
          </div>

          <h3>Six Variants of the KAM Theorem</h3>

          <p>
            The KAM theorem adapts to several settings. Each has its own nondegeneracy condition.
          </p>

          <div className="lrn-steps">
            <div className="lrn-step">
              <span className="lrn-step-title">Autonomous systems</span>
              <p className="lrn-step-content">
                {`$H = H_0(I) + \\varepsilon H_1(I,\\varphi)$`}. Nondegeneracy:{' '}
                {`$\\det|\\frac{\\partial^2 H_0}{\\partial I^2}| \\neq 0$`}.
              </p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">Periodic systems</span>
              <p className="lrn-step-content">
                {`$H = H_0(I) + \\varepsilon H_1(I,\\varphi,t)$`} with {`$t$`}-periodic. Extended
                phase space has {`$(n+1)$`}-dimensional tori.
              </p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">Symplectic mappings (twist maps)</span>
              <p className="lrn-step-content">
                Nondegeneracy: {`$\\det|\\frac{\\partial^2 S_0}{\\partial I^2}| \\neq 0$`} for the
                generating function {`$S_0$`}. The "twist" condition: the rotation number varies
                with the radius.
              </p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">Exact symplectic maps</span>
              <p className="lrn-step-content">
                Applies to maps satisfying an exactness condition (the flux through any closed curve
                is preserved). Used in billiard problems.
              </p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">Neighborhoods of equilibria (autonomous)</span>
              <p className="lrn-step-content">
                Nondegeneracy matrix: {`$\\det|\\omega_{kl}| \\neq 0$`} where{' '}
                {`$H_0(\\tau) = \\sum\\omega_k\\tau_k + \\tfrac{1}{2}\\sum\\omega_{kl}\\tau_k\\tau_l$`}
                .
              </p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">Fixed points of mappings</span>
              <p className="lrn-step-content">
                Applies to symplectic maps near an elliptic fixed point. Uses rotation number
                condition.
              </p>
            </div>
          </div>

          <h3>Applications of the KAM Theorem</h3>

          <div className="lrn-steps">
            <div className="lrn-step">
              <span className="lrn-step-title">Geodesic flow on a convex surface</span>
              <p className="lrn-step-content">
                A surface close to an ellipsoid has 2 DOF. Geodesics oscillate between two caustics.
                KAM tori persist for surfaces close enough to the ellipsoid.
              </p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">Billiard table</span>
              <p className="lrn-step-content">
                Convex billiard tables have stable closed trajectories. The minor-axis trajectory of
                an elliptic table is stable. KAM proves Lyapunov stability. This is also a direct
                application of the Poincaré-Birkhoff theorem.
              </p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">Pendulum with oscillating suspension</span>
              <p className="lrn-step-content">
                The upper equilibrium can be stabilized by oscillation. KAM proves Lyapunov
                stability when resonances of order 3 and 4 are absent.
              </p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">Rapidly rotating rigid body</span>
              <p className="lrn-step-content">
                After eliminating cyclic coordinates, a 2 DOF system remains. KAM shows the angular
                momentum vector stays near its initial value for all time.
              </p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">Restricted three-body problem</span>
              <p className="lrn-step-content">
                Asteroid in Jupiter's field, planar circular restricted 3-body problem. For small
                Jupiter mass, invariant tori survive and the asteroid remains bounded.
              </p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">Motion of n planets around the sun</span>
              <p className="lrn-step-content">
                Conditionally-periodic motions fill most of the Keplerian phase space. Secular
                changes of actions are exponentially small.
              </p>
            </div>
          </div>
        </>,

        // ──────────────────────────────────────────────────────────────────
        // SECTION 3: Poincaré-Birkhoff Fixed-Point Theorem
        // ──────────────────────────────────────────────────────────────────
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

          <p>
            Use this theorem to prove existence of periodic orbits in a Hamiltonian system by
            analyzing a Poincaré return map of an annulus. The Poincaré return map is the map that
            takes a point on a cross-section of phase space to where the trajectory returns to that
            same cross-section.
          </p>
          <p>
            Real-world application: the magnetic confinement of plasma in a tokamak uses twisted
            magnetic field lines. The twist condition of the Poincaré-Birkhoff theorem guarantees
            existence of periodic field lines, which correspond to closed drift orbits.
          </p>

          <div style={{ margin: '24px 0' }}>
            <PoincareBirkhoffDiagram C={C} />
          </div>

          <div className="lrn-callout lrn-success">
            <span className="lrn-callout-label">Theorem (Poincaré-Birkhoff)</span>
            <p>
              Every area-preserving homeomorphism of a planar annulus, rotating the two boundary
              circles in opposite directions, has at least two fixed points.
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
            Fixed points of a symplectic map are critical points of a generating function. A
            generating function {`$S(q, Q)$`} is a function that encodes the symplectic map
            implicitly via the relations {`$p = \\frac{\\partial S}{\\partial q}$`},{' '}
            {`$P = -\\frac{\\partial S}{\\partial Q}$`}.
          </p>

          <div className="lrn-proof">
            <span className="lrn-proof-header">Key Idea</span>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">1.</span>
              <div className="lrn-proof-step-content">
                The generating function for a symplectic diffeomorphism of the annulus satisfies{' '}
                {`$dS = (x-X)dy + (Y-y)dX$`}.
              </div>
            </div>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">2.</span>
              <div className="lrn-proof-step-content">
                A fixed point satisfies {`$X = x$`} and {`$Y = y$`}, which forces {`$dS = 0$`}.
              </div>
            </div>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">3.</span>
              <div className="lrn-proof-step-content">
                Define {`$F(x,y) = S(X(x,y),y)$`}. Every fixed point of the diffeomorphism is a
                critical point of {`$F$`}.
              </div>
            </div>
            <div className="lrn-qed">Q.E.D.</div>
          </div>

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

          <h3>Symplectic Diffeomorphisms of the Torus</h3>

          <div className="lrn-callout lrn-success">
            <span className="lrn-callout-label">Torus Diffeomorphism Theorem</span>
            <p>
              A symplectic diffeomorphism of the torus that fixes its center of gravity has at least
              four fixed points counting multiplicity, at least three geometrically different ones.
            </p>
          </div>

          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>
              The torus has Betti numbers {`$b_0 = 1$`}, {`$b_1 = 2$`}, {`$b_2 = 1$`}. Their sum is
              4.
            </p>
            <p>
              By the Morse theory lower bound, any smooth function on the torus has at least 4
              critical points.
            </p>
            <p>
              Fixed points of the diffeomorphism correspond one-to-one to critical points of the
              generating function {`$F$`}, so the diffeomorphism has at least 4 fixed points.
            </p>
          </div>

          <h3>Generalized Poincaré Theorem and Lagrangian Intersections</h3>

          <div className="lrn-callout lrn-success">
            <span className="lrn-callout-label">Generalized Poincaré Theorem</span>
            <p>
              Every symplectic diffeomorphism of a compact symplectic manifold, homologous to the
              identity, has at least as many fixed points as a smooth function on the manifold has
              critical points.
            </p>
          </div>

          <div className="lrn-definition">
            <span className="lrn-definition-term">Homologous to the Identity</span>
            <div className="lrn-definition-desc">
              <p>
                A symplectic diffeomorphism {`$g: M \\to M$`} is homologous to the identity if it
                connects to the identity by a smooth path {`$g_t$`} of symplectic diffeomorphisms.
              </p>
              <p>
                At each moment {`$t$`}, the velocity field {`$\\dot{g}_t$`} must have a
                single-valued Hamiltonian.
              </p>
              <p>
                Informally: the map can be "continuously deformed" to the identity through
                Hamiltonian flows.
              </p>
            </div>
          </div>

          <div className="lrn-definition">
            <span className="lrn-definition-term">Lagrangian Submanifold</span>
            <div className="lrn-definition-desc">
              <p>
                A Lagrangian submanifold of a symplectic manifold {`$(M^{2n}, \\omega)$`} is an{' '}
                {`$n$`}-dimensional submanifold {`$L$`} on which the symplectic form {`$\\omega$`}{' '}
                assigns zero area to every 2-dimensional slice within {`$L$`}.
              </p>
              <p>
                Example: the graph of a symplectic map in {`$M \\times M$`} is a Lagrangian
                submanifold (with the product symplectic structure).
              </p>
            </div>
          </div>

          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Generating Function Approach</span>
              <p>Fixed points = critical points of {`$F(x,y) = S(X(x,y),y)$`}.</p>
              <p>Works near the identity map only.</p>
              <p>Local method.</p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Lagrangian Intersection Approach</span>
              <p>Fixed points = intersections of graph of map with diagonal.</p>
              <p>
                Both are Lagrangian submanifolds. Two {`$n$`}-dimensional Lagrangian surfaces inside
                a {`$2n$`}-dimensional space cannot generally avoid each other - topology forces
                them to cross, giving at least {`$2^n$`} intersection points.
              </p>
              <p>Global method; works in any dimension.</p>
            </div>
          </div>

          <h3>Periodic Points from Disintegrating Tori</h3>

          <div className="lrn-callout lrn-success">
            <span className="lrn-callout-label">Theorem (Periodic Points)</span>
            <p>
              If an isoenergetically nondegenerate system has an {`$n$`}-torus filled with closed
              trajectories, its disintegration under perturbation creates at least {`$2^{n-1}$`}{' '}
              closed trajectories of the perturbed system.
            </p>
          </div>

          <div className="lrn-callout">
            <span className="lrn-callout-label">Historical Note</span>
            <p>
              Arnold notes this work triggered the growth of symplectic topology as a branch of
              mathematics (first edition, 1974).
            </p>
            <p>
              The generating function invariance {`$\\Phi(z) = \\Phi'(g(z)) + \\text{const}$`}{' '}
              connects the structure of the generating function to the topology of the map.
            </p>
          </div>
        </>,

        // ──────────────────────────────────────────────────────────────────
        // SECTION 4: Multiplicities of Characteristic Frequencies
        // ──────────────────────────────────────────────────────────────────
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
            Generically, two natural frequencies of a Hamiltonian system cannot collide as you vary
            a single parameter. This section explains why - and what symmetry does to break that
            rule.
          </p>

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

          <div className="lrn-definition">
            <span className="lrn-definition-term">Codimension Formula for Multiple Axes</span>
            <div className="lrn-definition-desc">
              <p>
                The set of ellipsoids with {`$v_2$`} double, {`$v_3$`} triple, {`$v_4$`} fourfold
                axes has codimension:
              </p>
              <div className="lrn-eq">
                <span>{`$$2v_2 + 5v_3 + 9v_4 + \\cdots = \\sum \\tfrac{1}{2}(i-1)(i+2)v_i$$`}</span>
              </div>
            </div>
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

          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>
              Two frequencies {`$\\omega_1(\\lambda)$`} and {`$\\omega_2(\\lambda)$`} can collide
              only if their difference {`$\\omega_1 - \\omega_2 = 0$`}.
            </p>
            <p>This is one condition in the space of Hamiltonians: it has codimension 1.</p>
            <p>
              But for imaginary eigenvalues {`$\\pm ib$`}, you also need them to remain imaginary
              after the collision.
            </p>
            <p>
              This adds a second condition: both eigenvalues must move along the imaginary axis.
            </p>
            <p>Two conditions together give codimension 2.</p>
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

    // ─── PRACTICE CARDS ───────────────────────────────────────────────────────
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
        q: "[PREDICT] An asteroid is at the 3:1 resonance with Jupiter. KAM tori near the resonance are destroyed. What do you expect for the asteroid's long-term behavior?",
        a: 'The resonant torus breaks into a finite number of periodic orbits plus heteroclinic structure (separatrix splitting). In 2 DOF, surviving KAM tori outside the resonance zone bound the motion. But the asteroid near the 3:1 resonance can undergo large chaotic excursions within the resonance zone. This is the Kirkwood gap mechanism. Its orbital elements fluctuate widely.'
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
        q: '[TRANSFER] A physicist wants to count periodic orbits of period {`$N$`} in a Hamiltonian system. How does the Poincaré-Birkhoff theorem help?',
        a: 'The {`$N$`}-th iterate {`$A^N$`} of the Poincaré return map is itself an area-preserving map of an annulus. If the rotation angles on the boundary circles have opposite signs relative to the period-{`$N$`} threshold, Poincaré-Birkhoff guarantees at least 2 fixed points of {`$A^N$`}. These correspond to exactly the periodic orbits of period {`$N$`}.'
      },
      {
        q: '[ELABORATE] Why does the generalized Poincaré theorem require the map to be homologous to the identity?',
        a: 'A general symplectic map can have few fixed points (a rotation of a sphere may have exactly 2). The homologous-to-identity condition ensures the map is topologically trivial: it can be deformed to the identity through symplectic maps with single-valued Hamiltonians. This forces the fixed-point count to match the topological lower bound given by the sum of Betti numbers.'
      },
      {
        q: '[SELF-EXPLAIN] Explain why the Lagrangian intersection approach gives fixed points of a symplectic map.',
        a: 'The graph of a symplectic map {`$A: M \\to M$`} is a Lagrangian submanifold of {`$M \\times M$`}. The diagonal {`$\\Delta = \\{(x,x)\\}$`} is also Lagrangian. Their intersection consists exactly of fixed points {`$A(x)=x$`}. Lagrangian intersection theory gives the lower bound {`$2^n$`} on the number of intersection points.'
      },
      {
        q: 'How many fixed points does a torus diffeomorphism (homologous to identity) have?',
        a: 'At least four counting multiplicity, at least three geometrically different. This follows from Morse theory: the torus has Betti numbers {`$1, 2, 1$`} summing to 4, so any smooth function on it has at least 4 critical points.'
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
        q: '[ELABORATE] Why does 3-fold rotational symmetry force double characteristic frequencies for "non-symmetric" modes?',
        a: 'Modes that are not invariant under the 3-fold rotation form 2-dimensional irreducible representations of the rotation group. The character theory of {`$\\mathbb{Z}_3$`} over {`$\\mathbb{R}$`} forces this. The linearized equations of motion on such a representation must have the same eigenvalue for both basis vectors, by equivariance. Any symmetry-preserving perturbation leaves this eigenspace intact, so the double frequency persists.'
      }
    ],

    // ─── REFERENCE MODE ───────────────────────────────────────────────────────
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
                Tori do not divide energy surface. Arnold diffusion possible. Rate{' '}
                {`$\\sim e^{-\\frac{1}{\\varepsilon^d}}$`}.
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
    customCss: `.MafsView { --mafs-bg: transparent; --mafs-fg: rgba(240,240,250,1); --mafs-line-color: rgba(240,240,250,0.15); }`
  }

  return <LearningTemplate config={config} />
}
