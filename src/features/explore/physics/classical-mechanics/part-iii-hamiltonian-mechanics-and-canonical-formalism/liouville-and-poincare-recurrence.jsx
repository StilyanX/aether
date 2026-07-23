import { LearningTemplate } from '../../../../../components/learning/learning-template'
import {
  LiouvilleBlob,
  HarmonicPhasePortrait,
  HamiltonianVectorField,
  PoincareRotation,
  TorusWinding
} from '../../../../../components/viz'

export default function LiouvilleAndPoincareRecurrence() {
  const config = {
    cssPrefix: 'lpr',
    documentTitle: "Liouville's Theorem and Poincaré Recurrence - AETHER",
    customCss: null,
    learning: {
      category: 'Module 3',
      groupTitle: 'Hamiltonian Mechanics and Canonical Formalism',
      title: "Liouville's Theorem and Poincaré Recurrence",
      subtitle:
        'Phase-space fluid never compresses. Density stays constant along every trajectory. Every bounded Hamiltonian system must return arbitrarily close to its past.',
      sections: [
        // SECTION 0 · THE ENSEMBLE PICTURE
        <>
          <h2>The Ensemble Picture</h2>
          <p>
            A single mechanical system occupies one point in phase space. Phase space is the space
            whose axes are all the positions <span className="lrn-eq">{`$q$`}</span> and all the
            momenta <span className="lrn-eq">{`$p$`}</span>. One point in it fixes the whole state
            of the system. But in statistical mechanics you deal with many copies of the same
            system. Each copy starts from a slightly different initial state. This collection of
            copies is an <strong>ensemble</strong>.
          </p>
          <p>
            As each copy evolves under Hamilton's equations, its phase-space point traces a
            trajectory. The full ensemble sweeps out a moving cloud of points. The question
            Liouville asked: how does the <em>density</em> of that cloud change in time?
          </p>
          <div className="lrn-definition">
            <div className="lrn-definition-term">Phase-space density</div>
            <div className="lrn-definition-desc">
              <p>
                Let <span className="lrn-eq">{`$D(q, p, t)$`}</span> be the number of ensemble
                members per unit volume of phase space at time{' '}
                <span className="lrn-eq">{`$t$`}</span>. If the total number of members is fixed,{' '}
                <span className="lrn-eq">{`$\\int D \\, dq\\, dp = \\text{const}$`}</span>, where{' '}
                <span className="lrn-eq">{`$dq\\,dp$`}</span> is the little patch of phase-space
                volume.
              </p>
            </div>
          </div>
          <p>
            The density <span className="lrn-eq">{`$D$`}</span> is not a fixed function. The flow
            carries it along. Liouville's theorem tells you how it behaves along that flow.
          </p>
          <div className="lrn-insight">
            Think of the ensemble like a drop of dye in an incompressible fluid. The dye can stretch
            and twist, but its total volume never changes.
          </div>

          <h3>Worked example: counting members in a box</h3>
          <p>
            Suppose 600 ensemble members fill a phase-space box of area{' '}
            <span className="lrn-eq">{`$0.2$`}</span>. The density there is{' '}
            <span className="lrn-eq">{`$D = 600/0.2 = 3000$`}</span> members per unit area.
          </p>
          <p>
            The flow stretches that box into a thin strip of area{' '}
            <span className="lrn-eq">{`$0.2$`}</span> again (area is preserved, as the next section
            proves). The same 600 members now spread along the strip, so the density right there is
            still <span className="lrn-eq">{`$3000$`}</span>. The number per unit area riding with
            the flow did not change.
          </p>

          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              Does the density at a <em>fixed</em> point{' '}
              <span className="lrn-eq">{`$(q, p)$`}</span> in phase space stay constant in time, or
              does it change?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                It can change. The cloud drifts, so a fixed point may sit in the dense core one
                moment and in empty space the next. What stays constant is the density{' '}
                <em>you carry along the trajectory</em>:{' '}
                <span className="lrn-eq">{`$dD/dt = 0$`}</span>, not{' '}
                <span className="lrn-eq">{`$\\partial D/\\partial t = 0$`}</span>.
              </p>
            </details>
          </div>

          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>
              The two derivatives split the change in <span className="lrn-eq">{`$D$`}</span> into
              two parts. The partial derivative{' '}
              <span className="lrn-eq">{`$\\partial D/\\partial t$`}</span> watches one fixed spot.
              The total derivative <span className="lrn-eq">{`$dD/dt$`}</span> rides with a chosen
              ensemble member.
            </p>
            <p>
              They are linked by{' '}
              <span className="lrn-eq">{`$\\frac{dD}{dt} = \\frac{\\partial D}{\\partial t} + \\dot{q}\\,\\frac{\\partial D}{\\partial q} + \\dot{p}\\,\\frac{\\partial D}{\\partial p}$`}</span>
              . This total derivative is also called the material derivative. The extra terms
              account for the member moving into a new spot. Liouville fixes the second viewpoint at
              zero; the first can still vary.
            </p>
          </div>
        </>,

        // SECTION 1 · LIOUVILLE'S THEOREM
        <>
          <h2>Liouville's Theorem</h2>
          <div className="lrn-insight">
            <span className="lrn-eq lrn-eq-hero">{`$$\\frac{dD}{dt} = 0$$`}</span>
            <p>
              The density seen by a moving observer (one who follows a trajectory) never changes.
              Phase space behaves like an incompressible fluid.
            </p>
          </div>

          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              A Hamiltonian flow stretches a phase-space region twice as long in{' '}
              <span className="lrn-eq">{`$q$`}</span>. What must happen to its width in{' '}
              <span className="lrn-eq">{`$p$`}</span>?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                It must shrink to half. Area is preserved, so doubling one direction halves the
                other. The flow can stretch and fold, but it can never change the total area.
              </p>
            </details>
          </div>

          <h3>First proof: via the continuity equation</h3>
          <p>
            Two terms drive this proof, so name them first. The divergence{' '}
            <span className="lrn-eq">{`$\\operatorname{div}\\mathbf{f} = \\sum_i(\\partial\\dot{q}_i/\\partial q_i + \\partial\\dot{p}_i/\\partial p_i)$`}</span>{' '}
            adds up how each velocity component changes along its own coordinate. It measures how
            fast the flow spreads out per unit volume. A continuity equation just says no members
            are created or destroyed. The change of density in a small box equals the net flow
            across its walls (flux in minus flux out).
          </p>
          <p>
            The ensemble is conserved, so <span className="lrn-eq">{`$D$`}</span> obeys a continuity
            equation in phase space:
          </p>
          <div className="lrn-eq lrn-eq-hero">{`$$\\frac{\\partial D}{\\partial t} + \\operatorname{div}(D\\,\\mathbf{f}) = 0$$`}</div>
          <p>
            where <span className="lrn-eq">{`$\\mathbf{f} = (\\dot{q}_i, \\dot{p}_i)$`}</span> is
            the phase-space velocity field. The product rule splits the divergence term into{' '}
            <span className="lrn-eq">{`$D\\,\\operatorname{div}\\mathbf{f} + \\mathbf{f}\\cdot\\nabla D$`}</span>
            , where <span className="lrn-eq">{`$\\nabla D$`}</span> is the gradient, the direction{' '}
            <span className="lrn-eq">{`$D$`}</span> increases fastest:
          </p>
          <div className="lrn-eq lrn-eq-hero">{`$$\\frac{\\partial D}{\\partial t} + D\\,\\operatorname{div}\\mathbf{f} + \\mathbf{f}\\cdot\\nabla D = 0$$`}</div>
          <p>
            Hamilton's equations give{' '}
            <span className="lrn-eq">{`$\\dot{q}_i = \\partial H/\\partial p_i$`}</span> and{' '}
            <span className="lrn-eq">{`$\\dot{p}_i = -\\partial H/\\partial q_i$`}</span>. The
            divergence is:
          </p>
          <div className="lrn-eq lrn-eq-hero">{`$$\\operatorname{div}\\mathbf{f} = \\sum_i\\left(\\frac{\\partial \\dot{q}_i}{\\partial q_i} + \\frac{\\partial \\dot{p}_i}{\\partial p_i}\\right) = \\sum_i\\left(\\frac{\\partial^2 H}{\\partial q_i \\partial p_i} - \\frac{\\partial^2 H}{\\partial p_i \\partial q_i}\\right) = 0$$`}</div>
          <p>
            The two mixed second derivatives are equal for any smooth function, so they cancel
            exactly. So <span className="lrn-eq">{`$\\operatorname{div}\\mathbf{f} = 0$`}</span>,
            and the continuity equation reduces to:
          </p>
          <div className="lrn-eq lrn-eq-hero">{`$$\\frac{\\partial D}{\\partial t} + \\mathbf{f}\\cdot\\nabla D = \\frac{dD}{dt} = 0$$`}</div>
          <p>
            You can now show any Hamiltonian flow preserves volume by checking its divergence is
            zero.
          </p>

          <div>
            <HamiltonianVectorField />
            <p>
              The harmonic oscillator vector field{' '}
              <span className="lrn-eq">{`$(\\dot{q}, \\dot{p}) = (p, -q)$`}</span>. Arrows show
              phase-space velocity. Orbits are circles. The divergence of this field is zero at
              every point.
            </p>
          </div>

          <h3>Worked example: divergence of the pendulum field</h3>
          <p>
            Take the pendulum <span className="lrn-eq">{`$H = \\tfrac{1}{2}p^2 - \\cos q$`}</span>.
            Hamilton's equations give the flow:
          </p>
          <div className="lrn-eq lrn-eq-hero">{`$$\\dot{q} = \\frac{\\partial H}{\\partial p} = p, \\qquad \\dot{p} = -\\frac{\\partial H}{\\partial q} = -\\sin q$$`}</div>
          <p>Now add the two diagonal derivatives that make up the divergence:</p>
          <div className="lrn-eq lrn-eq-hero">{`$$\\frac{\\partial \\dot{q}}{\\partial q} = \\frac{\\partial p}{\\partial q} = 0, \\qquad \\frac{\\partial \\dot{p}}{\\partial p} = \\frac{\\partial(-\\sin q)}{\\partial p} = 0$$`}</div>
          <p>
            Their sum is <span className="lrn-eq">{`$0 + 0 = 0$`}</span>. The pendulum's equations
            do not graph as a straight line, yet its phase flow still preserves area. This is no
            accident: it works for <em>every</em> Hamiltonian.
          </p>

          <h3>Second proof: via the Jacobian</h3>
          <p>
            Let <span className="lrn-eq">{`$\\Phi_t$`}</span> be the map that sends each initial
            point to its position after time <span className="lrn-eq">{`$t$`}</span>. The Jacobian{' '}
            <span className="lrn-eq">{`$J$`}</span> of <span className="lrn-eq">{`$\\Phi_t$`}</span>{' '}
            is the factor by which the flow map multiplies volumes.
          </p>
          <div className="lrn-proof">
            <div className="lrn-proof-step">
              <div className="lrn-proof-step-num">1</div>
              <div className="lrn-proof-step-content">
                Write the Jacobian <span className="lrn-eq">{`$J(t)$`}</span> of the map{' '}
                <span className="lrn-eq">{`$\\Phi_t$`}</span>. At{' '}
                <span className="lrn-eq">{`$t=0$`}</span>,{' '}
                <span className="lrn-eq">{`$J(0) = 1$`}</span>.
              </div>
            </div>
            <div className="lrn-proof-step">
              <div className="lrn-proof-step-num">2</div>
              <div className="lrn-proof-step-content">
                Use{' '}
                <span className="lrn-eq">{`$\\dot{J} = J\\cdot\\operatorname{div}\\mathbf{f}$`}</span>
                . This is Jacobi's formula, a standard determinant identity we import from linear
                algebra.
              </div>
            </div>
            <div className="lrn-proof-step">
              <div className="lrn-proof-step-num">3</div>
              <div className="lrn-proof-step-content">
                Since <span className="lrn-eq">{`$\\operatorname{div}\\mathbf{f} = 0$`}</span>, we
                get <span className="lrn-eq">{`$\\dot{J} = 0$`}</span>, so{' '}
                <span className="lrn-eq">{`$J(t) = 1$`}</span> for all{' '}
                <span className="lrn-eq">{`$t$`}</span>.
              </div>
            </div>
            <div className="lrn-proof-step">
              <div className="lrn-proof-step-num">4</div>
              <div className="lrn-proof-step-content">
                Volume is preserved:{' '}
                <span className="lrn-eq">{`$\\operatorname{Vol}(\\Phi_t(U)) = \\operatorname{Vol}(U)$`}</span>{' '}
                for every region <span className="lrn-eq">{`$U$`}</span>.
              </div>
            </div>
            <div className="lrn-qed">∎</div>
          </div>

          <div>
            <LiouvilleBlob />
            <p>
              A blob of phase-space points evolves under a Hamiltonian flow. Its shape changes, but
              its area stays fixed. This is Liouville's theorem made visible.
            </p>
          </div>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>
              Close the page. Write the two-line argument for why{' '}
              <span className="lrn-eq">{`$\\operatorname{div}\\mathbf{f} = 0$`}</span> in your own
              words. Then open again and check.
            </p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                Hamilton's equations make <span className="lrn-eq">{`$\\dot{q}$`}</span> the{' '}
                <span className="lrn-eq">{`$p$`}</span>-derivative of{' '}
                <span className="lrn-eq">{`$H$`}</span> and{' '}
                <span className="lrn-eq">{`$\\dot{p}$`}</span> the negative{' '}
                <span className="lrn-eq">{`$q$`}</span>-derivative of{' '}
                <span className="lrn-eq">{`$H$`}</span>.
              </p>
              <p>
                The divergence then needs{' '}
                <span className="lrn-eq">{`$\\partial^2 H/\\partial q\\,\\partial p$`}</span> minus{' '}
                <span className="lrn-eq">{`$\\partial^2 H/\\partial p\\,\\partial q$`}</span>. Mixed
                partials are equal for any smooth function, so the two terms cancel to zero.
              </p>
            </details>
          </div>

          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>
              The two proofs attack the same fact from opposite ends. The continuity proof is{' '}
              <em>local</em>: it checks the flow at one point and shows nothing piles up there.
            </p>
            <p>
              The Jacobian proof is <em>global</em>: it tracks a whole region and shows its volume
              never moves off <span className="lrn-eq">{`$1$`}</span>. Both rest on the single
              identity <span className="lrn-eq">{`$\\operatorname{div}\\mathbf{f} = 0$`}</span>,
              which is the geometric signature of Hamilton's equations.
            </p>
          </div>
        </>,

        // SECTION 2 · STATISTICAL EQUILIBRIUM
        <>
          <h2>Statistical Equilibrium</h2>
          <p>
            A distribution (a spread of ensemble members across phase space){' '}
            <span className="lrn-eq">{`$D$`}</span> is in <strong>statistical equilibrium</strong>{' '}
            when it does not change at any fixed point:{' '}
            <span className="lrn-eq">{`$\\partial D/\\partial t = 0$`}</span>. From the continuity
            equation, this requires:
          </p>

          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              You want a distribution that looks the same forever. Should you build it from the
              position <span className="lrn-eq">{`$q$`}</span>, or from a conserved quantity like
              the energy <span className="lrn-eq">{`$H$`}</span>?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                Build it from a conserved quantity. If <span className="lrn-eq">{`$D$`}</span>{' '}
                depends only on <span className="lrn-eq">{`$H$`}</span>, and{' '}
                <span className="lrn-eq">{`$H$`}</span> never changes along a trajectory, then{' '}
                <span className="lrn-eq">{`$D$`}</span> never changes either. A distribution tied to{' '}
                <span className="lrn-eq">{`$q$`}</span> would drift as points move.
              </p>
            </details>
          </div>
          <div className="lrn-eq lrn-eq-hero">{`$$\\mathbf{f} \\cdot \\nabla D = 0$$`}</div>
          <p>
            The gradient of <span className="lrn-eq">{`$D$`}</span> must be perpendicular to every
            phase-space velocity. This holds whenever <span className="lrn-eq">{`$D$`}</span> is a
            function only of conserved quantities.
          </p>
          <p>
            This term is exactly the Poisson bracket from the last topic:{' '}
            <span className="lrn-eq">{`$\\mathbf{f}\\cdot\\nabla D = \\{D, H\\}$`}</span>. So the
            Liouville equation reads{' '}
            <span className="lrn-eq">{`$\\partial D/\\partial t = -\\{D, H\\}$`}</span>, and
            equilibrium means simply <span className="lrn-eq">{`$\\{D, H\\} = 0$`}</span>.
          </p>
          <div className="lrn-definition">
            <div className="lrn-definition-term">Microcanonical distribution</div>
            <div className="lrn-definition-desc">
              <p>
                <span className="lrn-eq">{`$D = \\delta(H - E)$`}</span>. Here{' '}
                <span className="lrn-eq">{`$\\delta(H - E)$`}</span> is a spike that is zero
                everywhere except on the surface <span className="lrn-eq">{`$H = E$`}</span>. The
                density sits entirely on that energy surface. Since{' '}
                <span className="lrn-eq">{`$H$`}</span> is conserved,{' '}
                <span className="lrn-eq">{`$dD/dt = 0$`}</span>.
              </p>
            </div>
          </div>
          <div className="lrn-definition">
            <div className="lrn-definition-term">Canonical distribution</div>
            <div className="lrn-definition-desc">
              <p>
                <span className="lrn-eq">{`$D = e^{-H/kT} / Z$`}</span>. Here{' '}
                <span className="lrn-eq">{`$T$`}</span> is the temperature,{' '}
                <span className="lrn-eq">{`$k$`}</span> is Boltzmann's constant, and{' '}
                <span className="lrn-eq">{`$Z$`}</span> is the normalizer that makes the total
                density one. Since <span className="lrn-eq">{`$D$`}</span> depends only on{' '}
                <span className="lrn-eq">{`$H$`}</span>, and <span className="lrn-eq">{`$H$`}</span>{' '}
                is constant along trajectories, the gradient condition is satisfied. It is called
                canonical because it is the standard equilibrium form for a system that swaps energy
                with a large reservoir. The name is just convention.
              </p>
            </div>
          </div>
          <p>
            Both are stationary solutions. The microcanonical distribution is the natural one for an
            isolated system with fixed energy.
          </p>

          <h3>Worked example: is this distribution stationary?</h3>
          <p>
            Test <span className="lrn-eq">{`$D = H^2$`}</span> for the harmonic oscillator{' '}
            <span className="lrn-eq">{`$H = \\tfrac{1}{2}(p^2 + q^2)$`}</span>. Check the
            equilibrium condition{' '}
            <span className="lrn-eq">{`$\\mathbf{f}\\cdot\\nabla D = 0$`}</span>.
          </p>
          <p>
            The flow is <span className="lrn-eq">{`$(\\dot{q}, \\dot{p}) = (p, -q)$`}</span>. The
            gradient is <span className="lrn-eq">{`$\\nabla D = 2H(q, p)$`}</span>. Their dot
            product:
          </p>
          <div className="lrn-eq lrn-eq-hero">{`$$\\mathbf{f}\\cdot\\nabla D = 2H\\,(p\\cdot q + (-q)\\cdot p) = 2H\\,(pq - qp) = 0$$`}</div>
          <p>
            It vanishes, so <span className="lrn-eq">{`$D = H^2$`}</span> is stationary. The same
            cancellation works for any <span className="lrn-eq">{`$D = f(H)$`}</span>, because the
            flow always moves along constant-<span className="lrn-eq">{`$H$`}</span> curves.
          </p>

          <div>
            <HarmonicPhasePortrait />
            <p>
              Harmonic oscillator phase portrait. Each trajectory stays on a fixed ellipse (constant{' '}
              <span className="lrn-eq">{`$H$`}</span>). Any distribution that is uniform on each
              energy ellipse is stationary.
            </p>
          </div>

          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>
              Suppose a distribution put more weight on one side of an energy ellipse than the
              other. The flow slides every point around that ellipse at a steady rate.
            </p>
            <p>
              So the heavy patch would orbit to the light side, and the picture at a fixed point
              would change. That breaks{' '}
              <span className="lrn-eq">{`$\\partial D/\\partial t = 0$`}</span>. Only a distribution
              that is uniform along each ellipse stays put.
            </p>
          </div>
        </>,

        // SECTION 3 · POINCARÉ RECURRENCE THEOREM
        <>
          <h2>Poincaré's Recurrence Theorem</h2>
          <p>
            Liouville's theorem says phase-space volume is preserved. Poincaré used this single fact
            to prove that almost every trajectory returns arbitrarily close to where it started.
          </p>
          <div className="lrn-insight">
            <strong>Poincaré Recurrence Theorem.</strong> Let{' '}
            <span className="lrn-eq">{`$\\Phi_t$`}</span> be a volume-preserving map on a bounded
            region <span className="lrn-eq">{`$\\Gamma$`}</span> (one that fits inside a finite
            box). Then for almost every point <span className="lrn-eq">{`$x \\in U$`}</span> (for
            any open set <span className="lrn-eq">{`$U \\subset \\Gamma$`}</span>), there exists a
            time <span className="lrn-eq">{`$T$`}</span> such that{' '}
            <span className="lrn-eq">{`$\\Phi_T(x) \\in U$`}</span>. "Almost every" means all but a
            vanishingly small set, a set of measure zero. Such a set has zero phase-space volume, so
            you can ignore it.
          </div>

          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              Stamp a small region with area <span className="lrn-eq">{`$0.01$`}</span> inside a
              container of total area <span className="lrn-eq">{`$1$`}</span>. The flow makes a new
              copy of that region each second. Can the copies stay separate forever?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                No. Each copy has the same area, but the container holds only so much. Once the
                copies have used up all the room, a new one must overlap an earlier one. Two
                overlapping copies force a return. This is the whole proof in miniature.
              </p>
            </details>
          </div>

          <div className="lrn-proof">
            <div className="lrn-proof-step">
              <div className="lrn-proof-step-num">1</div>
              <div className="lrn-proof-step-content">
                Let <span className="lrn-eq">{`$U$`}</span> be any open set with positive volume.
                Form the sequence of sets{' '}
                <span className="lrn-eq">{`$U, \\Phi_T(U), \\Phi_{2T}(U), \\ldots$`}</span> for some
                fixed <span className="lrn-eq">{`$T$`}</span>. Each has the same volume as{' '}
                <span className="lrn-eq">{`$U$`}</span> (Liouville).
              </div>
            </div>
            <div className="lrn-proof-step">
              <div className="lrn-proof-step-num">2</div>
              <div className="lrn-proof-step-content">
                All these sets live inside the bounded region{' '}
                <span className="lrn-eq">{`$\\Gamma$`}</span>, which has finite total volume. An
                infinite sequence of equal-volume sets cannot all be disjoint.
              </div>
            </div>
            <div className="lrn-proof-step">
              <div className="lrn-proof-step-num">3</div>
              <div className="lrn-proof-step-content">
                So there exist <span className="lrn-eq">{`$m < n$`}</span> with{' '}
                <span className="lrn-eq">{`$\\Phi_{mT}(U) \\cap \\Phi_{nT}(U) \\neq \\emptyset$`}</span>
                . Apply <span className="lrn-eq">{`$\\Phi_{-mT}$`}</span>: we get{' '}
                <span className="lrn-eq">{`$U \\cap \\Phi_{(n-m)T}(U) \\neq \\emptyset$`}</span>.
              </div>
            </div>
            <div className="lrn-proof-step">
              <div className="lrn-proof-step-num">4</div>
              <div className="lrn-proof-step-content">
                Any point in that intersection starts in <span className="lrn-eq">{`$U$`}</span> and
                returns to <span className="lrn-eq">{`$U$`}</span> after time{' '}
                <span className="lrn-eq">{`$(n-m)T$`}</span>.
              </div>
            </div>
            <div className="lrn-proof-step">
              <div className="lrn-proof-step-num">5</div>
              <div className="lrn-proof-step-content">
                The set of non-returning points has measure zero. So almost every point returns.
              </div>
            </div>
            <div className="lrn-qed">∎</div>
          </div>

          <div>
            <PoincareRotation />
            <p>
              A point rotating on a circle. With rational rotation (7 steps close the orbit), the
              point returns exactly. With irrational rotation (golden ratio), the orbit never closes
              but passes arbitrarily close to the start.
            </p>
          </div>

          <h3>Worked example: the pigeonhole count</h3>
          <p>
            Let the container have total volume <span className="lrn-eq">{`$V = 1$`}</span> and let{' '}
            <span className="lrn-eq">{`$U$`}</span> have volume{' '}
            <span className="lrn-eq">{`$0.05$`}</span>. Form the copies{' '}
            <span className="lrn-eq">{`$U, \\Phi_T(U), \\Phi_{2T}(U), \\ldots$`}</span>, each with
            volume <span className="lrn-eq">{`$0.05$`}</span>.
          </p>
          <p>
            If the first <span className="lrn-eq">{`$k$`}</span> copies were all disjoint, their
            total volume would be <span className="lrn-eq">{`$0.05k$`}</span>. But everything fits
            inside volume <span className="lrn-eq">{`$1$`}</span>, so{' '}
            <span className="lrn-eq">{`$0.05k \\le 1$`}</span>, meaning{' '}
            <span className="lrn-eq">{`$k \\le 20$`}</span>. By the 21st copy, two must overlap.
            That overlap forces a return.
          </p>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>
              The proof uses only two ingredients: equal volumes and a bounded container. Write out
              why both are needed. What fails if the phase space is unbounded?
            </p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                Equal volumes come from Liouville. Without them, copies could shrink and pack
                forever without ever overlapping, so no return is forced.
              </p>
              <p>
                Boundedness gives a finite total volume. In an unbounded space the copies can march
                off to infinity, staying disjoint forever. A free particle does exactly this: it
                flies away and never comes back.
              </p>
            </details>
          </div>

          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>
              The clever step is applying <span className="lrn-eq">{`$\\Phi_{-mT}$`}</span> to slide
              the overlap back to time zero. That turns "two copies overlap" into "a point leaves{' '}
              <span className="lrn-eq">{`$U$`}</span> and comes back to{' '}
              <span className="lrn-eq">{`$U$`}</span>", which is recurrence.
            </p>
          </div>
        </>,

        // SECTION 4 · THE GAS PARADOX AND RECURRENCE TIME
        <>
          <h2>The Gas Paradox and Recurrence Time</h2>
          <p>
            Poincaré recurrence seems to contradict the second law of thermodynamics (the rule that
            disorder always grows). A gas spreads to fill its container. Its entropy (a measure of
            how spread out and disordered the gas is) increases. But the recurrence theorem says the
            gas will eventually un-spread and return to its original corner.
          </p>
          <p>There is no real contradiction. The recurrence time is enormous.</p>

          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              Open a partition and let gas spread into an empty half. Recurrence says it returns to
              one corner. Will you ever see this happen in a lab?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                Never. The return is guaranteed in principle, but the wait is so vast that no
                experiment could ever outlast it. The second law wins on every timescale you can
                measure.
              </p>
            </details>
          </div>
          <div className="lrn-definition">
            <div className="lrn-definition-term">Recurrence time estimate</div>
            <div className="lrn-definition-desc">
              <p>
                The recurrence time is the typical wait before the system comes back near its
                starting state. For a gas of <span className="lrn-eq">{`$N$`}</span> particles in a
                box, it scales as <span className="lrn-eq">{`$\\tau \\sim e^N$`}</span> (where we
                set the basic time step to one). For{' '}
                <span className="lrn-eq">{`$N \\approx 10^{23}$`}</span> molecules, this is{' '}
                <span className="lrn-eq">{`$10^{10^{23}}$`}</span> seconds. That is far longer than
                the age of the universe.
              </p>
            </div>
          </div>
          <p>
            The second law holds on any timescale accessible to observation. Recurrence is
            mathematically guaranteed but physically irrelevant. The two statements live on entirely
            different timescales.
          </p>

          <h3>Worked example: how fast does recurrence time grow?</h3>
          <p>
            The estimate <span className="lrn-eq">{`$\\tau \\sim e^N$`}</span> grows ferociously.
            Watch what a few extra particles do:
          </p>
          <ul className="lrn-list">
            <li>
              <span className="lrn-eq">{`$N = 10$`}</span> gives{' '}
              <span className="lrn-eq">{`$e^{10} \\approx 2 \\times 10^4$`}</span> steps. Small.
            </li>
            <li>
              <span className="lrn-eq">{`$N = 100$`}</span> gives{' '}
              <span className="lrn-eq">{`$e^{100} \\approx 3 \\times 10^{43}$`}</span> steps.
              Already past the age of the universe in seconds.
            </li>
            <li>
              <span className="lrn-eq">{`$N = 10^{23}$`}</span> gives{' '}
              <span className="lrn-eq">{`$e^{10^{23}}$`}</span>, a number with more digits than
              atoms in the galaxy.
            </li>
          </ul>
          <p>
            Each particle multiplies the wait by{' '}
            <span className="lrn-eq">{`$e \\approx 2.7$`}</span>. A real gas has so many particles
            that the wait stops meaning anything physical.
          </p>

          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <div className="lrn-compare-title">Boltzmann's objection (Zermelo)</div>
              <p>
                Poincaré recurrence proves entropy must eventually decrease. The second law cannot
                be exact.
              </p>
            </div>
            <div className="lrn-compare-col">
              <div className="lrn-compare-title">Boltzmann's reply</div>
              <p>
                Correct in principle. But the recurrence time is so vast that the second law is
                exact on any observable timescale. Entropy decrease never happens in practice.
              </p>
            </div>
          </div>
          <div className="lrn-insight">
            Poincaré recurrence is a fact about phase-space geometry, not about thermodynamics. The
            second law is a fact about typical behavior on human timescales. Both are true. The wait{' '}
            <span className="lrn-eq">{`$e^N$`}</span> is so large that "eventually" and "never"
            become the same thing for any real measurement.
          </div>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>
              In your own words, why does the recurrence time depend on the number of particles, not
              just on the size of the box? Form your answer before reading on.
            </p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                Recurrence needs the full state of every particle to line up at once. Each particle
                adds more dimensions to phase space.
              </p>
              <p>
                The fraction of phase space near the start state shrinks by a factor for each
                particle, so the expected wait multiplies by that factor each time. More particles
                means an exponentially rarer coincidence.
              </p>
            </details>
          </div>
        </>,

        // SECTION 5 · DENSE ORBITS AND THE TORUS
        <>
          <h2>Dense Orbits and the Torus</h2>
          <p>
            Recurrence promises only a return near the start. Some systems do far more. Their orbits
            crowd into every corner of the space they can reach.
          </p>
          <div className="lrn-insight">
            Dense orbits never return to exactly the same point. But by Poincaré recurrence, they
            return to any neighborhood of any point. Density is a stronger statement than mere
            recurrence. Recurrence is the special case where that crowding happens to include the
            start.
          </div>
          <p>
            This happens for an <strong>integrable</strong> system (one whose motion you can solve
            exactly). Take the simplest rich case: two angles that each wind around at their own
            steady rate <span className="lrn-eq">{`$\\omega_1$`}</span> and{' '}
            <span className="lrn-eq">{`$\\omega_2$`}</span>. The state lives on a doughnut surface
            called a torus, and the orbit is a straight line winding around it.
          </p>

          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              Two angles wind around a torus. One does a full turn each second; the other does{' '}
              <span className="lrn-eq">{`$\\sqrt{2}$`}</span> turns each second. Does the path ever
              close back on itself?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                No. Closing needs the two turn counts to hit whole numbers at the same instant. That
                forces <span className="lrn-eq">{`$\\sqrt{2}$`}</span> to be a ratio of whole
                numbers, which is impossible. The path winds forever and fills the torus densely.
              </p>
            </details>
          </div>

          <p>
            So the orbit's fate hinges on one thing: whether the frequency ratio{' '}
            <span className="lrn-eq">{`$\\omega_1/\\omega_2$`}</span> is a ratio of whole numbers. A
            rational ratio closes the orbit into a finite loop. An irrational ratio leaves it{' '}
            <strong>dense</strong>: it never closes and passes arbitrarily close to every point on
            the torus. The golden ratio{' '}
            <span className="lrn-eq">{`$\\phi = (1+\\sqrt{5})/2$`}</span> is the "most irrational"
            number. Its orbit fills the torus most slowly.
          </p>

          <div>
            <TorusWinding />
            <p>
              A winding line on the torus <span className="lrn-eq">{`$T^2$`}</span> shown as a
              square with identified edges. Rational slope: orbit closes. Irrational slope (golden
              ratio): orbit fills densely.
            </p>
          </div>

          <h3>Worked example: leading digits of the powers of 2</h3>
          <p>
            List the first digit of <span className="lrn-eq">{`$2^n$`}</span>:{' '}
            <span className="lrn-eq">{`$1, 2, 4, 8, 1, 3, 6, 1, 2, 5, \\ldots$`}</span> Why does the
            digit 7 take so long to appear, and why is 1 so common?
          </p>
          <p>
            The leading digit of <span className="lrn-eq">{`$2^n$`}</span> is set by the fractional
            part of <span className="lrn-eq">{`$n\\log_{10} 2$`}</span>. Since{' '}
            <span className="lrn-eq">{`$\\log_{10} 2 \\approx 0.301$`}</span> is irrational, these
            fractional parts wind densely around the unit circle, exactly like an irrational
            rotation.
          </p>
          <p>
            A leading digit <span className="lrn-eq">{`$d$`}</span> appears when that fractional
            part lands in an interval of width{' '}
            <span className="lrn-eq">{`$\\log_{10}(1 + 1/d)$`}</span>. So digit 1 fills{' '}
            <span className="lrn-eq">{`$\\log_{10} 2 \\approx 30\\%$`}</span> of the circle, while
            digit 7 fills only <span className="lrn-eq">{`$\\log_{10}(8/7) \\approx 5.8\\%$`}</span>
            . That is Benford's law, and it comes straight from a dense orbit.
          </p>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>
              Why does an irrational rotation visit every arc, while a rational one visits only a
              few fixed points? Form your answer before reading on.
            </p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                A rational rotation by <span className="lrn-eq">{`$p/q$`}</span> of a full turn
                repeats after <span className="lrn-eq">{`$q$`}</span> steps. It only ever lands on{' '}
                <span className="lrn-eq">{`$q$`}</span> evenly spaced points and skips everything
                between them.
              </p>
              <p>
                An irrational rotation never repeats. Its landing points never coincide, so they
                must keep finding new gaps. Over time they crowd into every arc, no matter how
                small. That is what dense means.
              </p>
            </details>
          </div>

          <p>
            The same picture scales up. An integrable system with{' '}
            <span className="lrn-eq">{`$n$`}</span> degrees of freedom moves on an{' '}
            <span className="lrn-eq">{`$n$`}</span>-dimensional torus{' '}
            <span className="lrn-eq">{`$T^n$`}</span> with frequencies{' '}
            <span className="lrn-eq">{`$\\omega_1, \\ldots, \\omega_n$`}</span>. The orbit fills the
            whole torus when no whole-number combination of those frequencies cancels to zero.
          </p>
        </>
      ]
    },

    practice: [
      // BASIC RECALL
      {
        q: <>State Liouville's theorem in one sentence.</>,
        a: (
          <>
            The phase-space density seen by an observer moving with the flow is constant:{' '}
            <span className="lrn-eq">{`$dD/dt = 0$`}</span>.
          </>
        )
      },
      {
        q: (
          <>
            What is the divergence of the Hamiltonian vector field{' '}
            <span className="lrn-eq">{`$\\mathbf{f} = (\\partial H/\\partial p, -\\partial H/\\partial q)$`}</span>
            ?
          </>
        ),
        a: (
          <>
            Zero. The mixed second-order partial derivatives of{' '}
            <span className="lrn-eq">{`$H$`}</span> cancel:{' '}
            <span className="lrn-eq">{`$\\partial^2 H/\\partial q\\partial p - \\partial^2 H/\\partial p\\partial q = 0$`}</span>
            .
          </>
        )
      },
      {
        q: <>What two conditions does the proof of Poincaré recurrence require?</>,
        a: (
          <>
            (1) The flow preserves phase-space volume (Liouville). (2) The phase space region is
            bounded (finite total volume).
          </>
        )
      },
      {
        q: (
          <>
            Define the total time derivative <span className="lrn-eq">{`$dD/dt$`}</span> in terms of
            partial derivatives.
          </>
        ),
        a: (
          <>
            <span className="lrn-eq">{`$dD/dt = \\partial D/\\partial t + \\dot{q}\\,\\partial D/\\partial q + \\dot{p}\\,\\partial D/\\partial p$`}</span>
            . This is the material derivative along the trajectory.
          </>
        )
      },
      {
        q: <>What does it mean for an orbit on a torus to be dense?</>,
        a: (
          <>
            The orbit passes arbitrarily close to every point on the torus. For any point{' '}
            <span className="lrn-eq">{`$x$`}</span> and any{' '}
            <span className="lrn-eq">{`$\\epsilon > 0$`}</span>, the trajectory enters the{' '}
            <span className="lrn-eq">{`$\\epsilon$`}</span>-ball around{' '}
            <span className="lrn-eq">{`$x$`}</span>.
          </>
        )
      },
      {
        q: <>When is the frequency ratio on a torus rational vs irrational?</>,
        a: (
          <>
            Rational: the orbit closes after finite time. Irrational: the orbit never closes and
            fills the torus densely. The key is whether{' '}
            <span className="lrn-eq">{`$\\omega_1/\\omega_2 \\in \\mathbb{Q}$`}</span>.
          </>
        )
      },
      {
        q: <>What is statistical equilibrium?</>,
        a: (
          <>
            A distribution with <span className="lrn-eq">{`$\\partial D/\\partial t = 0$`}</span> at
            every fixed phase-space point. It holds when <span className="lrn-eq">{`$D$`}</span>{' '}
            depends only on conserved quantities such as <span className="lrn-eq">{`$H$`}</span>.
          </>
        )
      },

      // TRANSFER
      {
        q: (
          <>
            A system has Hamiltonian <span className="lrn-eq">{`$H = p^2/2m + V(q)$`}</span>. Show
            directly that{' '}
            <span className="lrn-eq">{`$\\operatorname{div}(\\dot{q}, \\dot{p}) = 0$`}</span>.
          </>
        ),
        a: (
          <>
            <span className="lrn-eq">{`$\\dot{q} = p/m$`}</span>, so{' '}
            <span className="lrn-eq">{`$\\partial\\dot{q}/\\partial q = 0$`}</span>.{' '}
            <span className="lrn-eq">{`$\\dot{p} = -V'(q)$`}</span>, so{' '}
            <span className="lrn-eq">{`$\\partial\\dot{p}/\\partial p = 0$`}</span>. Sum is zero.
          </>
        )
      },
      {
        q: (
          <>
            A Hamiltonian flow takes a circular blob of phase-space area{' '}
            <span className="lrn-eq">{`$A$`}</span>. After 10 seconds, what is its area?
          </>
        ),
        a: (
          <>
            Still <span className="lrn-eq">{`$A$`}</span>. Liouville's theorem: volume-preserving
            map preserves area in 2D phase space. Shape can change but area cannot.
          </>
        )
      },
      {
        q: (
          <>
            Is the canonical distribution <span className="lrn-eq">{`$D = e^{-H/kT}$`}</span>{' '}
            stationary? Why?
          </>
        ),
        a: (
          <>
            Yes. <span className="lrn-eq">{`$D = f(H)$`}</span> for some function{' '}
            <span className="lrn-eq">{`$f$`}</span>. Along any trajectory{' '}
            <span className="lrn-eq">{`$H$`}</span> is constant, so{' '}
            <span className="lrn-eq">{`$dD/dt = f'(H)\\,dH/dt = 0$`}</span>.
          </>
        )
      },
      {
        q: (
          <>
            A phase space is infinite (e.g., a free particle on a line). Does Poincaré recurrence
            apply?
          </>
        ),
        a: (
          <>
            No. The proof requires a bounded region. An infinite phase space has infinite volume, so
            the pigeonhole argument fails. A free particle moves away forever.
          </>
        )
      },

      // ELABORATE
      {
        q: (
          <>Explain why Poincaré recurrence does not contradict the second law of thermodynamics.</>
        ),
        a: (
          <>
            Both are true, on different timescales. The second law describes typical behavior for{' '}
            <span className="lrn-eq">{`$N \\sim 10^{23}$`}</span> particles over observable times.
            Recurrence is guaranteed but occurs on timescales of order{' '}
            <span className="lrn-eq">{`$e^N$`}</span>. That is vastly longer than the age of the
            universe.
          </>
        )
      },
      {
        q: (
          <>
            The Jacobian proof shows <span className="lrn-eq">{`$J(t) = 1$`}</span>. What physical
            content does this have?
          </>
        ),
        a: (
          <>
            Any region of phase space keeps its volume as it flows. No region can be compressed into
            a smaller volume or expanded. This is the geometric content of{' '}
            <span className="lrn-eq">{`$dD/dt = 0$`}</span>.
          </>
        )
      },
      {
        q: (
          <>
            Why must a dense orbit on the torus satisfy the Poincaré recurrence property, but not
            the reverse?
          </>
        ),
        a: (
          <>
            A dense orbit passes within <span className="lrn-eq">{`$\\epsilon$`}</span> of every
            point, which implies recurrence to every neighborhood. But recurrence only guarantees
            return near the <em>starting point</em>. Density is a global statement; recurrence is
            local.
          </>
        )
      },

      // PREDICT
      {
        q: (
          <>
            Predict: if a Hamiltonian flow maps a region of phase space to a long thin strip, does
            Liouville's theorem hold?
          </>
        ),
        a: (
          <>
            Yes. The strip has the same area as the original region. Liouville requires equal
            volumes, not equal shapes. The flow can stretch and fold without limit as long as volume
            is preserved.
          </>
        )
      },
      {
        q: (
          <>
            Predict: for a 1D harmonic oscillator, do the trajectories on the energy surface{' '}
            <span className="lrn-eq">{`$H = E$`}</span> form a dense orbit or a closed one?
          </>
        ),
        a: (
          <>
            Closed. The energy surface in 2D phase space is a single ellipse, and the Hamiltonian
            flow on it is periodic. There is no freedom for irrational frequency ratios with only
            one degree of freedom.
          </>
        )
      },

      // ERROR DETECTION
      {
        q: (
          <>
            A student writes: "Liouville's theorem says the density{' '}
            <span className="lrn-eq">{`$D(q,p,t)$`}</span> is constant in space and time." Is this
            correct?
          </>
        ),
        a: (
          <>
            No. The density at a <em>fixed</em> point can change. What stays constant is the density{' '}
            <em>along a moving trajectory</em>: <span className="lrn-eq">{`$dD/dt = 0$`}</span>{' '}
            (total derivative), not{' '}
            <span className="lrn-eq">{`$\\partial D/\\partial t = 0$`}</span> (partial derivative).
          </>
        )
      },
      {
        q: (
          <>
            A student argues: "Poincaré recurrence proves that gas in a box must return to having
            all molecules in one corner, so the second law is false." Find the error.
          </>
        ),
        a: (
          <>
            The recurrence is guaranteed but the timescale is{' '}
            <span className="lrn-eq">{`$\\tau \\sim e^N \\sim e^{10^{23}}$`}</span> seconds. No
            observation can last that long. The second law is exact for any physically observable
            process.
          </>
        )
      },
      {
        q: (
          <>
            A student says the Hamiltonian vector field has nonzero divergence because{' '}
            <span className="lrn-eq">{`$\\partial\\dot{p}/\\partial q \\neq 0$`}</span> in general.
            Is this correct?
          </>
        ),
        a: (
          <>
            No. The divergence sums derivatives of each component with respect to its own variable:{' '}
            <span className="lrn-eq">{`$\\partial\\dot{q}/\\partial q + \\partial\\dot{p}/\\partial p$`}</span>
            . Cross terms like <span className="lrn-eq">{`$\\partial\\dot{p}/\\partial q$`}</span>{' '}
            do not appear in the divergence.
          </>
        )
      }
    ],

    reference: {
      category: 'Quick Reference',
      title: "Liouville's Theorem and Poincaré Recurrence",
      sections: [
        // REF SECTION 0 · KEY EQUATIONS
        <>
          <h2>Key Equations</h2>

          <div className="ref-formula">
            <div className="ref-formula-name">Liouville's theorem</div>
            <div className="ref-formula-eq">{`$$\\frac{dD}{dt} = 0$$`}</div>
            <div className="ref-formula-desc">
              Density is constant along Hamiltonian trajectories.
              <p>
                When to use: to track how a phase-space density evolves under a Hamiltonian flow.
              </p>
            </div>
          </div>

          <div className="ref-formula">
            <div className="ref-formula-name">Total derivative expansion</div>
            <div className="ref-formula-eq">{`$$\\frac{dD}{dt} = \\frac{\\partial D}{\\partial t} + \\sum_i \\left(\\dot{q}_i\\frac{\\partial D}{\\partial q_i} + \\dot{p}_i\\frac{\\partial D}{\\partial p_i}\\right)$$`}</div>
            <div className="ref-formula-desc">
              Material derivative of <span className="lrn-eq">{`$D$`}</span> along the flow.
              <p>
                When to use: to convert between the fixed-point view{' '}
                <span className="lrn-eq">{`$\\partial D/\\partial t$`}</span> and the moving view{' '}
                <span className="lrn-eq">{`$dD/dt$`}</span>.
              </p>
            </div>
          </div>

          <div className="ref-formula">
            <div className="ref-formula-name">Zero divergence of Hamiltonian flow</div>
            <div className="ref-formula-eq">{`$$\\operatorname{div}\\mathbf{f} = \\sum_i\\left(\\frac{\\partial^2 H}{\\partial q_i\\partial p_i} - \\frac{\\partial^2 H}{\\partial p_i\\partial q_i}\\right) = 0$$`}</div>
            <div className="ref-formula-desc">
              Mixed partials cancel. Holds for any smooth <span className="lrn-eq">{`$H$`}</span>.
              <p>
                When to use: to prove a given flow preserves volume by checking its divergence is
                zero.
              </p>
            </div>
          </div>

          <div className="ref-formula">
            <div className="ref-formula-name">Continuity equation in phase space</div>
            <div className="ref-formula-eq">{`$$\\frac{\\partial D}{\\partial t} + \\operatorname{div}(D\\mathbf{f}) = 0$$`}</div>
            <div className="ref-formula-desc">
              Conservation of ensemble members. Reduces to{' '}
              <span className="lrn-eq">{`$dD/dt = 0$`}</span> when{' '}
              <span className="lrn-eq">{`$\\operatorname{div}\\mathbf{f} = 0$`}</span>.
              <p>
                When to use: as the starting point for deriving Liouville's theorem from
                conservation of members.
              </p>
            </div>
          </div>

          <div className="ref-formula">
            <div className="ref-formula-name">Volume preservation (Jacobian form)</div>
            <div className="ref-formula-eq">{`$$J(t) = \\det\\frac{\\partial(q(t),p(t))}{\\partial(q_0,p_0)} = 1$$`}</div>
            <div className="ref-formula-desc">
              The Jacobian of the flow map is identically 1.
              <p>
                When to use: to confirm a region keeps its phase-space volume after evolving for any
                time.
              </p>
            </div>
          </div>

          <div className="ref-formula">
            <div className="ref-formula-name">Statistical equilibrium condition</div>
            <div className="ref-formula-eq">{`$$\\frac{\\partial D}{\\partial t} = 0 \\iff \\mathbf{f}\\cdot\\nabla D = 0$$`}</div>
            <div className="ref-formula-desc">
              Holds when <span className="lrn-eq">{`$D = f(H)$`}</span> for any function{' '}
              <span className="lrn-eq">{`$f$`}</span>.
              <p>When to use: to test whether a proposed distribution is stationary.</p>
            </div>
          </div>

          <div className="ref-formula">
            <div className="ref-formula-name">Microcanonical distribution</div>
            <div className="ref-formula-eq">{`$$D = \\delta(H - E)$$`}</div>
            <div className="ref-formula-desc">
              Uniform distribution on the energy surface <span className="lrn-eq">{`$H = E$`}</span>
              . Stationary by Liouville.
              <p>When to use: for an isolated system with a fixed, sharply defined energy.</p>
            </div>
          </div>

          <div className="ref-formula">
            <div className="ref-formula-name">Canonical distribution</div>
            <div className="ref-formula-eq">{`$$D = \\frac{e^{-H/kT}}{Z}, \\quad Z = \\int e^{-H/kT}\\,dq\\,dp$$`}</div>
            <div className="ref-formula-desc">
              Stationary because <span className="lrn-eq">{`$D = f(H)$`}</span> and{' '}
              <span className="lrn-eq">{`$H$`}</span> is conserved.
              <p>
                When to use: for a system held at fixed temperature{' '}
                <span className="lrn-eq">{`$T$`}</span> by contact with a heat bath.
              </p>
            </div>
          </div>

          <div className="ref-formula">
            <div className="ref-formula-name">Poincaré recurrence time (estimate)</div>
            <div className="ref-formula-eq">{`$$\\tau \\sim e^N \\text{ (natural units)}$$`}</div>
            <div className="ref-formula-desc">
              For <span className="lrn-eq">{`$N \\sim 10^{23}$`}</span> particles, this is{' '}
              <span className="lrn-eq">{`$\\sim 10^{10^{23}}$`}</span> seconds.
              <p>
                When to use: to show why recurrence never conflicts with the second law in practice.
              </p>
            </div>
          </div>

          <div className="ref-formula">
            <div className="ref-formula-name">
              Dense orbit condition on <span className="lrn-eq">{`$T^n$`}</span>
            </div>
            <div className="ref-formula-eq">{`$$\\text{orbit dense} \\iff \\omega_1, \\ldots, \\omega_n \\text{ rationally independent}$$`}</div>
            <div className="ref-formula-desc">
              Rational independence: <span className="lrn-eq">{`$\\sum k_i\\omega_i = 0$`}</span>{' '}
              only if all <span className="lrn-eq">{`$k_i = 0$`}</span>.
              <p>
                When to use: to decide whether an integrable system's orbit fills its torus or
                closes.
              </p>
            </div>
          </div>
        </>,

        // REF SECTION 1 · CONTRASTING PAIRS
        <>
          <h2>Contrasting Pairs</h2>

          <table className="lrn-table">
            <thead>
              <tr>
                <th>Concept</th>
                <th>
                  Partial derivative <span className="lrn-eq">{`$\\partial D/\\partial t$`}</span>
                </th>
                <th>
                  Total derivative <span className="lrn-eq">{`$dD/dt$`}</span>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Measures</td>
                <td>Change at a fixed point</td>
                <td>Change along the flow</td>
              </tr>
              <tr>
                <td>Liouville says</td>
                <td>Can be nonzero</td>
                <td>Always zero</td>
              </tr>
              <tr>
                <td>Equilibrium requires</td>
                <td>This = 0</td>
                <td>Automatic</td>
              </tr>
            </tbody>
          </table>

          <table className="lrn-table">
            <thead>
              <tr>
                <th>Property</th>
                <th>
                  Rational <span className="lrn-eq">{`$\\omega_1/\\omega_2$`}</span>
                </th>
                <th>
                  Irrational <span className="lrn-eq">{`$\\omega_1/\\omega_2$`}</span>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Orbit type</td>
                <td>Closed (periodic)</td>
                <td>Dense (quasi-periodic)</td>
              </tr>
              <tr>
                <td>Exact return</td>
                <td>Yes</td>
                <td>Never</td>
              </tr>
              <tr>
                <td>Recurrence</td>
                <td>Exact and periodic</td>
                <td>Approximate, aperiodic</td>
              </tr>
            </tbody>
          </table>

          <table className="lrn-table">
            <thead>
              <tr>
                <th>Statement</th>
                <th>Liouville's theorem</th>
                <th>Poincaré recurrence</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>About</td>
                <td>Density along trajectories</td>
                <td>Return of trajectories</td>
              </tr>
              <tr>
                <td>Requires</td>
                <td>Hamiltonian structure</td>
                <td>Volume preservation + boundedness</td>
              </tr>
              <tr>
                <td>Timescale</td>
                <td>Instantaneous</td>
                <td>Can be astronomically large</td>
              </tr>
            </tbody>
          </table>
        </>
      ]
    }
  }

  return <LearningTemplate config={config} />
}
