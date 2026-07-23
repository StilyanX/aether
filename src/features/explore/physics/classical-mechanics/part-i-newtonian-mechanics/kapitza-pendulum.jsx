import { LearningTemplate } from '../../../../../components/learning/learning-template'
import { KapitzaEffectivePotential, KapitzaDrivenPivot } from '../../../../../components/viz'

export default function KapitzaPendulum() {
  const config = {
    cssPrefix: 'kap',
    documentTitle: 'Rapidly Oscillating Forces: Kapitza Pendulum - AETHER',
    learning: {
      groupTitle: 'Newtonian Mechanics',
      category: 'Module 12',
      title: 'Rapidly Oscillating Forces: Kapitza Pendulum',
      subtitle:
        'A pendulum can balance upside down if you shake its pivot fast enough. A fast wiggle, averaged over time, acts like an extra potential energy that reshapes where things rest.',
      sections: [
        <>
          <h2>{`Fast Forces and Slow Motion`}</h2>
          <p>{`A pendulum normally hangs straight down. That is its resting point. Push it and it swings back. The upside-down position looks impossible to hold. Yet shake the pivot up and down fast enough and the pendulum stands upright on its own. Pyotr Kapitza explained this in 1951, so we call it the Kapitza pendulum. This page shows why it works.`}</p>
          <p>{`To follow the math you need Newton's law $F = ma$, the idea of potential energy $U$, and basic derivatives. Nothing else is assumed.`}</p>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>{`You shake the support of a pendulum up and down thousands of times a second. The shaking averages to zero over each cycle. Can a force that averages to zero change where the pendulum rests?`}</p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>{`Form your answer first. The surprise is yes. The force averages to zero, but its effect on energy does not. That is the whole story below.`}</p>
            </details>
          </div>
          <p>{`Picture a particle sitting in a steady potential $U$. On top of that we add a force that swings back and forth very fast:`}</p>
          <div className="lrn-eq">
            <span>{`$$f = f_1 \\cos \\omega t + f_2 \\sin \\omega t$$`}</span>
          </div>
          <p>{`Here $f_1$ and $f_2$ depend only on where the particle is, not on time. The frequency $\\omega$ is high. "High" has a precise meaning: $\\omega \\gg \\frac{1}{T}$, where $T$ is the time the particle would take to move across the field $U$ on its own.`}</p>
          <p>
            <strong>{`When to use this:`}</strong>
            {` Reach for this method when a system feels two forces at once. One is slow and steady. The other oscillates far faster than the natural motion. The fast force can be strong, but the wiggle it causes must stay small.`}
          </p>
          <p>{`The full equation of motion in one dimension is just Newton's law with both forces:`}</p>
          <div className="lrn-eq">
            <span>{`$$m \\ddot x = -\\frac{dU}{dx} + f$$`}</span>
          </div>
          <p>{`Our goal is to find the slow, average motion without tracking every fast wiggle.`}</p>
        </>,

        <>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>{`If you watched the fast-shaken particle, you would see a smooth glide with a tiny tremor on top. How would you write its position as two separate pieces?`}</p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>{`One piece is the slow path. One piece is the small fast tremor. Adding them gives the true position. That split is the key trick.`}</p>
            </details>
          </div>
          <h2>{`Splitting the Motion in Two`}</h2>
          <p>{`The particle traces a smooth path and trembles around it at frequency $\\omega$. So we split its position into two parts:`}</p>
          <div className="lrn-eq">
            <span>{`$$x(t) = X(t) + \\xi(t)$$`}</span>
          </div>
          <p>{`Here $X(t)$ is the smooth path. The term $\\xi(t)$ is the small fast tremor. Over one fast cycle the tremor averages to zero, so $\\bar x = X$. The bar means an average over the short time $\\frac{2\\pi}{\\omega}$.`}</p>
          <p>
            <strong>{`When to use this:`}</strong>
            {` Use this split whenever two timescales sit far apart. The slow part barely changes while the fast part runs through a full cycle. That gap is what lets you average cleanly.`}
          </p>
          <p>{`The smooth path $X(t)$ carries the slow drift. The true motion $x = X + \\xi$ adds the fast tremor on top.`}</p>
          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>{`Why does the tremor $\\xi$ average to zero over one fast cycle, while the smooth path $X$ does not? Answer in your own words first.`}</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>{`The tremor follows $\\cos \\omega t$ and $\\sin \\omega t$. Both swing equally above and below zero each cycle, so they cancel.`}</p>
              <p>{`The smooth path $X$ moves so slowly that it barely shifts during one fast cycle. It has no fast swing to cancel, so its average is just itself.`}</p>
            </details>
          </div>
        </>,

        <>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>{`The fast force is strong but its effect averages out of the slow equation. What single quantity could be left behind to nudge the slow motion?`}</p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>{`A new energy term survives the averaging. It depends on the square of the force, so it never cancels. We build it step by step below.`}</p>
            </details>
          </div>
          <h2>{`The Effective Potential`}</h2>
          <p>{`Now we find the equation for the slow path $X$ alone. We substitute the split into Newton's law and keep terms up to first order in the small tremor $\\xi$.`}</p>
          <p>
            <strong>{`When to use this:`}</strong>
            {` Use the effective potential whenever you only care about the slow drift. It folds the fast force into one extra energy term, so you can forget the tremor entirely.`}
          </p>
          <div className="lrn-proof">
            <span className="lrn-proof-header">Building the effective potential</span>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">1.</span>
              <div className="lrn-proof-step-content">
                {`Substitute $x = X + \\xi$. When the slow position shifts by the small tremor $\\xi$, each force changes by its slope times $\\xi$. That is a first-order Taylor step. The steady force shifts by $-\\xi \\frac{d^2 U}{dX^2}$, and the fast force shifts by $\\xi \\frac{\\partial f}{\\partial X}$, where $\\frac{\\partial f}{\\partial X}$ means how the fast force changes as the slow position moves, holding time fixed: $$m\\ddot X + m\\ddot \\xi = -\\frac{dU}{dX} - \\xi \\frac{d^2 U}{dX^2} + f(X,t) + \\xi \\frac{\\partial f}{\\partial X}$$`}
              </div>
            </div>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">2.</span>
              <div className="lrn-proof-step-content">
                {`Match the fast terms. The tremor's acceleration is large, so it balances the force: $$m\\ddot \\xi = f(X,t)$$`}
              </div>
            </div>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">3.</span>
              <div className="lrn-proof-step-content">
                {`Integrate this twice in time, holding $X$ fixed. Each integration of $\\cos \\omega t$ or $\\sin \\omega t$ divides by $\\omega$: $$\\xi = -\\frac{f}{m\\omega^2}$$`}
              </div>
            </div>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">4.</span>
              <div className="lrn-proof-step-content">
                {`Average the full equation over one fast cycle. The averages of $f$ and $\\xi$ vanish, leaving $$m\\ddot X = -\\frac{dU}{dX} + \\overline{\\xi \\frac{\\partial f}{\\partial X}}$$`}
              </div>
            </div>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">5.</span>
              <div className="lrn-proof-step-content">
                {`Put $\\xi = -\\frac{f}{m\\omega^2}$ into the last term, giving $-\\frac{1}{m\\omega^2}\\,\\overline{f\\,\\frac{\\partial f}{\\partial X}}$. Now use the identity $f\\,\\frac{\\partial f}{\\partial X} = \\frac{1}{2}\\frac{\\partial}{\\partial X}f^2$, true because differentiating $f^2$ gives $2f\\,\\frac{\\partial f}{\\partial X}$. So the term collapses to a single derivative: $$\\overline{\\xi \\frac{\\partial f}{\\partial X}} = -\\frac{1}{2m\\omega^2}\\frac{d}{dX}\\overline{f^2}$$`}
              </div>
            </div>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">6.</span>
              <div className="lrn-proof-step-content">
                {`Collect both terms under one derivative: $$m\\ddot X = -\\frac{d U_{\\rm eff}}{dX}$$`}
              </div>
            </div>
            <div className="lrn-qed">Q.E.D.</div>
          </div>
          <p>{`The slow path obeys Newton's law with a new energy, the effective potential energy:`}</p>
          <div className="lrn-eq lrn-eq-hero">
            <span>{`$$U_{\\rm eff} = U + \\frac{\\overline{f^2}}{2m\\omega^2} = U + \\frac{f_1^2 + f_2^2}{4m\\omega^2}$$`}</span>
          </div>
          <p>{`The last step uses $\\overline{f^2} = \\frac{f_1^2 + f_2^2}{2}$, the time average of the squared force over one cycle.`}</p>
          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>{`Why does dividing by $\\omega^2$ in step 3 make the extra term survive instead of vanish? Think about where the large and small factors sit.`}</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>{`The tremor $\\xi$ is small, shrinking like $\\frac{1}{\\omega^2}$. On its own it would drop out.`}</p>
              <p>{`But it multiplies the force $\\frac{\\partial f}{\\partial X}$, which is large. The small tremor and the large force meet in the middle, giving a finite leftover that does not cancel.`}</p>
            </details>
          </div>
          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>{`Why is the new term always positive, raising the energy rather than lowering it? Because it depends on $f^2$, a square.`}</p>
            <p>{`A squared quantity can never be negative. So the fast force always adds energy to the effective potential, never subtracts it.`}</p>
          </div>
        </>,

        <>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>{`The extra energy depends on $f^2$. The fast tremor also carries kinetic energy as it jiggles. Could these two be the same thing?`}</p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>{`They are exactly the same. The energy added to the potential is the average kinetic energy of the tremor. We show this next.`}</p>
            </details>
          </div>
          <h2>{`The Extra Energy Is the Tremor's Kinetic Energy`}</h2>
          <p>{`The new term has a clean physical meaning. Compare it with the tremor speed $\\dot \\xi$. The added energy equals the mean kinetic energy of the fast jiggle:`}</p>
          <div className="lrn-eq">
            <span>{`$$U_{\\rm eff} = U + \\tfrac{1}{2} m \\overline{\\dot \\xi^2}$$`}</span>
          </div>
          <p>
            <strong>{`When to use this:`}</strong>
            {` Use this view when you want intuition fast. The slow motion behaves as if the steady potential gained a hill made of the tremor's own kinetic energy.`}
          </p>
          <p>{`Where the fast force is strong, the tremor is violent and its kinetic energy is large. That spot becomes an energy hill the slow motion avoids. Where the force is weak, the tremor is gentle and the hill is low.`}</p>
          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>{`Why does a region of violent jiggling act like a hill the slow motion avoids? Energy must be shared.`}</p>
            <p>{`A spot with strong shaking demands large kinetic energy just to sit there and tremble. The slow motion drifts toward calmer spots where less energy is locked into the jiggle.`}</p>
          </div>
        </>,

        <>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>{`So far we used one coordinate. A real machine has many moving parts. Will the same idea still hold with several coordinates?`}</p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>{`Yes. The same energy term survives, built from the square of the fast force. The structure stays the same.`}</p>
            </details>
          </div>
          <h2>{`The Same Idea With Many Parts`}</h2>
          <p>{`We worked with one coordinate. The same idea extends to systems with many moving parts. A fast force still leaves behind an energy term built from its own square, and the slow motion still rests where that combined energy dips.`}</p>
          <p>{`The later study of generalized coordinates makes this precise. The headline result you need is already in hand: square the fast force, divide by the squared frequency, and read off the new resting points.`}</p>
        </>,

        <>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>{`Now shake a pendulum's pivot straight up and down, very fast. The straight-down rest point clearly survives. What about the straight-up position?`}</p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>{`Above a shaking threshold, straight up becomes stable too. The pendulum balances upside down. The effective potential explains the exact threshold.`}</p>
            </details>
          </div>
          <h2>{`The Kapitza Pendulum: Standing Upright`}</h2>
          <p>{`Take a pendulum of length $l$. Its pivot oscillates straight up and down with amplitude $a$ and high frequency $\\gamma$. The angle $\\phi$ measures the rod from straight down, so $\\phi = \\pi$ points straight up.`}</p>
          <p>
            <strong>{`When to use this:`}</strong>
            {` This is the headline example. Reach for it whenever a fast vertical shake might hold something in a spot that gravity alone cannot.`}
          </p>
          <p>{`First find the fast force. The pivot moves as $a \\cos \\gamma t$, so its acceleration is $-a \\gamma^2 \\cos \\gamma t$. In the pivot's frame the bob feels an inertial force equal and opposite to that acceleration, of size $m a \\gamma^2 \\cos \\gamma t$. This is the same fictitious force a moving frame always adds, which you met earlier. A vertical push drives the swing hardest sideways, so its component along the swing scales with $\\sin \\phi$, times the lever arm $l$:`}</p>
          <div className="lrn-eq">
            <span>{`$$f = -m l a \\gamma^2 \\cos \\gamma t \\, \\sin \\phi$$`}</span>
          </div>
          <p>{`The steady part is gravity, $U = -mgl \\cos \\phi$. The squared force averages to $\\overline{f^2} = \\tfrac{1}{2}(m l a \\gamma^2 \\sin \\phi)^2$. Dividing by $2 m l^2 \\gamma^2$, as the effective potential demands, gives:`}</p>
          <div className="lrn-eq lrn-eq-hero">
            <span>{`$$U_{\\rm eff} = mgl\\left[-\\cos \\phi + \\frac{a^2 \\gamma^2}{4gl} \\sin^2 \\phi\\right]$$`}</span>
          </div>
          <p>{`A rest point is stable when the energy curves upward there, so $\\frac{d^2 U_{\\rm eff}}{d\\phi^2} > 0$. Differentiating twice gives $\\frac{d^2 U_{\\rm eff}}{d\\phi^2} = mgl\\left[\\cos \\phi + \\frac{a^2 \\gamma^2}{2gl}\\cos 2\\phi\\right]$. Straight down, $\\phi = 0$, always passes this test. The straight-up point, $\\phi = \\pi$, has $\\cos \\pi = -1$ and $\\cos 2\\pi = 1$, so the test reads:`}</p>
          <div className="lrn-eq">
            <span>{`$$\\frac{d^2 U_{\\rm eff}}{d\\phi^2}\\bigg|_{\\phi=\\pi} = mgl\\left[-1 + \\frac{a^2 \\gamma^2}{2gl}\\right] > 0 \\quad\\Longrightarrow\\quad a^2 \\gamma^2 > 2gl$$`}</span>
          </div>
          <p>{`Let $\\beta = \\frac{a^2 \\gamma^2}{gl}$. Below $\\beta = 2$, the point at $\\phi = \\pi$ is a peak, so upright tips over. Above $\\beta = 2$, a real dip opens at $\\phi = \\pi$, and upright becomes stable.`}</p>
          <p>{`The true equation of motion, with no averaging, keeps the bob upright. The pivot shakes fast and the bob trembles, yet it stays balanced. The fast tremor is real, and so is the steady balance.`}</p>
          <KapitzaEffectivePotential />
          <KapitzaDrivenPivot />
          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>{`Why does the extra term carry $\\sin^2 \\phi$, which is largest sideways and zero at top and bottom? Look at the force $f \\propto \\sin \\phi$.`}</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>{`The fast force scales with $\\sin \\phi$, so the squared force scales with $\\sin^2 \\phi$.`}</p>
              <p>{`Sideways, the shake drives the bob hardest, so the jiggle energy peaks. Straight up and straight down, the shake lines up with the rod and drives no swing, so the jiggle energy drops to zero. That builds energy walls on both sides of upright.`}</p>
            </details>
          </div>
          <div className="lrn-faded">
            <div className="lrn-faded-phase">
              <span className="lrn-faded-label">COMPLETE EXAMPLE</span>
              <p>{`Find the shaking threshold for a rod of length $l = 0.20$ m, with $g = 9.8 \\, \\frac{\\text{m}}{\\text{s}^2}$.`}</p>
              <ol className="lrn-list">
                <li>{`Write the condition: $a^2 \\gamma^2 > 2gl$.`}</li>
                <li>{`Put in numbers: $2gl = 2 \\times 9.8 \\times 0.20 = 3.92 \\, \\frac{\\text{m}^2}{\\text{s}^2}$.`}</li>
                <li>{`So the pivot needs $a^2 \\gamma^2 > 3.92$ in those units to hold the rod upright.`}</li>
              </ol>
            </div>
            <div className="lrn-faded-phase lrn-faded-partial">
              <span className="lrn-faded-label">YOUR TURN: PARTIAL</span>
              <p>{`Now the amplitude is fixed at $a = 0.01$ m. Find the smallest frequency $\\gamma$.`}</p>
              <ol className="lrn-list">
                <li>{`Start from $a^2 \\gamma^2 > 3.92$ and divide by $a^2 = 0.0001$.`}</li>
                <li>{`Finish: solve $\\gamma^2 > \\rule{1.2cm}{0.5pt}$, then take the square root.`}</li>
              </ol>
            </div>
            <div className="lrn-faded-phase">
              <span className="lrn-faded-label">INDEPENDENT PRACTICE</span>
              <p>{`A longer rod has $l = 0.50$ m and $a = 0.02$ m. Find the smallest frequency $\\gamma$ that holds it upright.`}</p>
            </div>
          </div>
        </>,

        <>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>{`Now shake the pivot sideways instead of up and down. Where will the pendulum come to rest once the shaking is strong?`}</p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>{`It rests at a tilt, neither straight down nor straight up. The tilt angle follows a clean formula we derive below.`}</p>
            </details>
          </div>
          <h2>{`Shaking Sideways Instead`}</h2>
          <p>{`Keep the same pendulum, but now the pivot oscillates horizontally as $a \\cos \\gamma t$. Its acceleration is $-a \\gamma^2 \\cos \\gamma t$, sideways. As before, the pivot's frame adds an inertial force on the bob, equal and opposite, of size $m a \\gamma^2 \\cos \\gamma t$. A sideways push drives the swing hardest at the top and bottom, so its component along the swing scales with $\\cos \\phi$ this time:`}</p>
          <div className="lrn-eq">
            <span>{`$$f = m l a \\gamma^2 \\cos \\gamma t \\, \\cos \\phi$$`}</span>
          </div>
          <p>{`Squaring this force and dividing by $2 m l^2 \\gamma^2$ gives an extra energy carrying $\\cos^2 \\phi$ instead:`}</p>
          <div className="lrn-eq lrn-eq-hero">
            <span>{`$$U_{\\rm eff} = mgl\\left[-\\cos \\phi + \\frac{a^2 \\gamma^2}{4gl} \\cos^2 \\phi\\right]$$`}</span>
          </div>
          <p>
            <strong>{`When to use this:`}</strong>
            {` Use this case when the fast shake runs sideways across the steady force, not along it. The rest point then shifts to a tilt rather than locking upright.`}
          </p>
          <p>{`A rest point sits where the energy stops changing, so $\\frac{dU_{\\rm eff}}{d\\phi} = 0$. Differentiate the energy above and factor:`}</p>
          <div className="lrn-eq">
            <span>{`$$\\frac{dU_{\\rm eff}}{d\\phi} = mgl \\, \\sin \\phi \\left[1 - \\frac{a^2 \\gamma^2}{2gl}\\cos \\phi\\right] = 0$$`}</span>
          </div>
          <p>{`Straight down, $\\phi = 0$, always solves this. It stays stable only for gentle shaking, $a^2 \\gamma^2 < 2gl$. Once the shaking passes $a^2 \\gamma^2 = 2gl$, the bracket can vanish on its own, giving a new tilted rest point:`}</p>
          <div className="lrn-eq">
            <span>{`$$\\cos \\phi = \\frac{2gl}{a^2 \\gamma^2}$$`}</span>
          </div>
          <p>{`Below $\\beta = 2$ the only dip is at straight down. Above $\\beta = 2$ the dip splits into two tilted rest points, one on each side.`}</p>
          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Vertical Shake</span>
              <p>{`Extra term uses $\\sin^2 \\phi$.`}</p>
              <p>{`Above threshold, the pendulum balances straight up at $\\phi = \\pi$.`}</p>
              <p>{`Straight down stays stable at every frequency.`}</p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Horizontal Shake</span>
              <p>{`Extra term uses $\\cos^2 \\phi$.`}</p>
              <p>{`Above threshold, the pendulum rests at a tilt, $\\cos \\phi = \\frac{2gl}{a^2 \\gamma^2}$.`}</p>
              <p>{`Straight down stays stable only below threshold.`}</p>
            </div>
          </div>
          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>{`Why does sideways shaking favor a tilt while vertical shaking favors upright? The shake builds walls where the bob swings hardest.`}</p>
            <p>{`A vertical shake drives the bob hardest sideways, so walls rise on the sides and trap the bob at top or bottom. A horizontal shake drives it hardest at top and bottom, so the bob settles in between, at a tilt.`}</p>
          </div>
        </>
      ]
    },
    practice: [
      {
        q: `What does it mean for the force frequency $\\omega$ to be "high" in this method?`,
        a: `It means $\\omega \\gg \\frac{1}{T}$, where $T$ is the time for the slow motion in the field $U$ alone. The force must finish many full cycles before the slow motion shifts much. This gap between fast and slow timescales is what makes the averaging trick work.`
      },
      {
        q: `A pendulum's pivot is shaken straight up and down very fast. Predict whether the straight-down rest point survives.`,
        a: `Yes, straight down stays stable at every shaking frequency. The effective potential keeps its dip at $\\phi = 0$ no matter how strong the shake. Vertical shaking only adds stability at the top; it never removes the bottom rest point.`
      },
      {
        q: `Write the position split used for a fast-shaken particle and name each part.`,
        a: `Write $x(t) = X(t) + \\xi(t)$. The term $X$ is the smooth slow path, and $\\xi$ is the small fast tremor. Splitting this way lets you average over the tremor and find a simple equation for the slow path alone.`
      },
      {
        q: `Derive the fast oscillation amplitude $\\xi$ from the balance $m\\ddot \\xi = f$.`,
        a: `Integrate $m\\ddot \\xi = f$ twice in time, holding the slow path fixed. Each integration of $\\cos \\omega t$ or $\\sin \\omega t$ divides by $\\omega$, so $\\xi = -\\frac{f}{m\\omega^2}$. The two integrations are why the tremor shrinks like $\\frac{1}{\\omega^2}$ as the frequency rises.`
      },
      {
        q: `State the effective potential for a single coordinate and explain the role of $\\overline{f^2}$.`,
        a: `It is $U_{\\rm eff} = U + \\frac{\\overline{f^2}}{2m\\omega^2}$, equal to $U + \\frac{f_1^2 + f_2^2}{4m\\omega^2}$. The bar means a time average of the squared force over one cycle. Because $f^2$ is a square, the extra term is always positive and raises the energy.`
      },
      {
        q: `Why does the extra energy term never lower the effective potential below $U$?`,
        a: `The term depends on $\\overline{f^2}$, the average of a squared force. A square can never be negative, so the term is always positive or zero. The fast force can only add energy hills, never dig energy valleys.`
      },
      {
        q: `For the vertically shaken pendulum, write the effective potential and the upright stability condition.`,
        a: `The effective potential is $U_{\\rm eff} = mgl[-\\cos \\phi + \\frac{a^2 \\gamma^2}{4gl}\\sin^2 \\phi]$. The upright point $\\phi = \\pi$ is stable when $a^2 \\gamma^2 > 2gl$. Below that threshold the top is an energy peak, so the pendulum tips over.`
      },
      {
        q: `A rod has $l = 0.20$ m and $g = 9.8 \\, \\frac{\\text{m}}{\\text{s}^2}$. Find the threshold value of $a^2 \\gamma^2$ for upright balance.`,
        a: `Use the condition $a^2 \\gamma^2 > 2gl$. Then $2gl = 2 \\times 9.8 \\times 0.20 = 3.92$ in SI units. So upright balance needs $a^2 \\gamma^2 > 3.92 \\, \\frac{\\text{m}^2}{\\text{s}^2}$, since below this the top stays an energy peak.`
      },
      {
        q: `Explain in your own words why the added term in the vertical case carries $\\sin^2 \\phi$.`,
        a: `The fast force scales with $\\sin \\phi$, so its square scales with $\\sin^2 \\phi$. Sideways the shake drives the biggest swing, so the jiggle energy peaks there. At top and bottom the shake lines up with the rod and drives no swing, so the term drops to zero.`
      },
      {
        q: `A charged particle sits in a fast oscillating electric field on top of a steady field. Predict how the fast field changes its slow motion.`,
        a: `The fast field acts exactly like the rapidly oscillating force here. It adds an effective potential proportional to the square of the field over the squared frequency. The slow drift then moves as if pushed toward regions of weaker oscillation, the same averaging effect as the pendulum.`
      },
      {
        q: `Why does dividing by $\\omega^2$ keep the extra term finite instead of zero?`,
        a: `The tremor $\\xi$ is small, shrinking like $\\frac{1}{\\omega^2}$, so alone it would vanish. But it multiplies the large force gradient $\\frac{\\partial f}{\\partial X}$. The small tremor and large gradient combine into a finite leftover that survives the averaging.`
      },
      {
        q: `For the horizontally shaken pendulum, write the effective potential and the tilted rest angle.`,
        a: `The effective potential is $U_{\\rm eff} = mgl[-\\cos \\phi + \\frac{a^2 \\gamma^2}{4gl}\\cos^2 \\phi]$. Above the threshold the rest angle satisfies $\\cos \\phi = \\frac{2gl}{a^2 \\gamma^2}$. The pendulum settles at a tilt because the energy walls now sit at the top and bottom instead of the sides.`
      },
      {
        q: `Restate the effective potential as a statement about the tremor's kinetic energy.`,
        a: `It reads $U_{\\rm eff} = U + \\tfrac{1}{2} m \\overline{\\dot \\xi^2}$. The energy added to $U$ equals the mean kinetic energy of the fast jiggle. So a spot of violent shaking acts like an energy hill, because sitting there costs large jiggle energy.`
      },
      {
        q: `A pendulum is shaken sideways with $a^2 \\gamma^2 = 1.5 \\, gl$. Predict where it rests.`,
        a: `Since $a^2 \\gamma^2 = 1.5 \\, gl$ is below the threshold $2gl$, straight down stays stable. The pendulum rests at $\\phi = 0$. A tilt would only appear once the shaking passes $a^2 \\gamma^2 = 2gl$.`
      },
      {
        q: `In step 4 of the derivation, why do the averages of $f$ and $\\xi$ both vanish?`,
        a: `Both $f$ and $\\xi$ follow $\\cos \\omega t$ and $\\sin \\omega t$, which swing equally above and below zero each cycle. Averaged over one full cycle they cancel to zero. Only the product term $\\overline{\\xi \\, \\partial f / \\partial X}$, built from a square, survives.`
      },
      {
        q: `Does the effective-potential idea survive for a system with many moving parts?`,
        a: `Yes. A fast force still leaves behind an extra energy term built from its own square, and the slow motion still rests where the combined energy dips. The structure is the same as the single-coordinate case. The later study of generalized coordinates makes the many-part version precise.`
      },
      {
        q: `Two pendulums are shaken vertically at the same amplitude, but one swings twice as fast at the pivot. Predict which can balance upright.`,
        a: `The faster-shaken one balances more easily. The condition $a^2 \\gamma^2 > 2gl$ grows with the square of frequency $\\gamma$. Doubling $\\gamma$ multiplies $a^2 \\gamma^2$ by four, pushing the system well past the upright threshold.`
      },
      {
        q: `Why must the tremor $\\xi$ stay small for this whole method to hold?`,
        a: `The derivation expands the equation only to first order in $\\xi$. If the tremor grew large, the dropped higher-order terms would matter, and the simple effective potential would fail. Keeping $\\xi$ small is what lets a clean averaged equation describe the slow motion.`
      },
      {
        q: `A rod has $l = 0.50$ m and $a = 0.02$ m, shaken vertically. Find the smallest frequency $\\gamma$ for upright balance. Use $g = 9.8 \\, \\frac{\\text{m}}{\\text{s}^2}$.`,
        a: `Start from $a^2 \\gamma^2 > 2gl = 2 \\times 9.8 \\times 0.50 = 9.8$. Divide by $a^2 = 0.0004$ to get $\\gamma^2 > 24500$. Taking the root gives $\\gamma > 157 \\, \\frac{\\text{rad}}{\\text{s}}$, a fast shake of about 25 cycles per second.`
      },
      {
        q: `Contrast why vertical shaking traps the bob upright while horizontal shaking tilts it.`,
        a: `Vertical shaking drives the biggest swing sideways, raising energy walls on the sides that trap the bob at top or bottom. Horizontal shaking drives the biggest swing at top and bottom, raising walls there. The bob then settles between them, at a tilt set by $\\cos \\phi = \\frac{2gl}{a^2 \\gamma^2}$.`
      }
    ],
    reference: {
      category: 'Quick Reference',
      title: 'Rapidly Oscillating Forces: Kapitza Pendulum',
      sections: [
        <>
          <h2>{`Core Setup`}</h2>
          <div className="lrn-definition">
            <span className="lrn-definition-term">High-frequency condition</span>
            <div className="lrn-definition-desc">
              <p>{`$\\omega \\gg \\frac{1}{T}$, with $T$ the period of the slow motion in $U$ alone.`}</p>
              <p>{`When to use: confirm this holds before splitting fast and slow parts.`}</p>
            </div>
          </div>
          <div className="lrn-definition">
            <span className="lrn-definition-term">Oscillating force</span>
            <div className="lrn-definition-desc">
              <p>{`$f = f_1 \\cos \\omega t + f_2 \\sin \\omega t$, where $f_1, f_2$ depend only on position.`}</p>
              <p>{`When to use: this is the form of the fast force added on top of $U$.`}</p>
            </div>
          </div>
          <div className="lrn-definition">
            <span className="lrn-definition-term">Fast tremor amplitude</span>
            <div className="lrn-definition-desc">
              <p>{`$\\xi = -\\frac{f}{m\\omega^2}$.`}</p>
              <p>{`When to use: to estimate how big the fast jiggle is at a given frequency.`}</p>
            </div>
          </div>
        </>,
        <>
          <h2>{`Effective Potential`}</h2>
          <div className="lrn-eq lrn-eq-hero">
            <span>{`$$U_{\\rm eff} = U + \\frac{f_1^2 + f_2^2}{4m\\omega^2}$$`}</span>
          </div>
          <p>{`When to use: to find the slow average motion without tracking the fast tremor.`}</p>
          <div className="lrn-eq">
            <span>{`$$U_{\\rm eff} = U + \\tfrac{1}{2} m \\overline{\\dot \\xi^2}$$`}</span>
          </div>
          <p>{`When to use: as the intuition that the extra energy is the tremor's mean kinetic energy.`}</p>
        </>,
        <>
          <h2>{`Pendulum With a Shaken Pivot`}</h2>
          <div className="lrn-eq">
            <span>{`$$\\text{Vertical: } U_{\\rm eff} = mgl\\left[-\\cos \\phi + \\frac{a^2 \\gamma^2}{4gl}\\sin^2 \\phi\\right]$$`}</span>
          </div>
          <p>{`When to use: pivot shaken up and down; upright $\\phi = \\pi$ stable if $a^2 \\gamma^2 > 2gl$.`}</p>
          <div className="lrn-eq">
            <span>{`$$\\text{Horizontal: } U_{\\rm eff} = mgl\\left[-\\cos \\phi + \\frac{a^2 \\gamma^2}{4gl}\\cos^2 \\phi\\right]$$`}</span>
          </div>
          <p>{`When to use: pivot shaken sideways; rest tilts to $\\cos \\phi = \\frac{2gl}{a^2 \\gamma^2}$ once $a^2 \\gamma^2 > 2gl$.`}</p>
          <table className="lrn-table">
            <thead>
              <tr>
                <th>Shake direction</th>
                <th>Extra term</th>
                <th>New stable point</th>
                <th>Condition</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Vertical</td>
                <td>{`$\\frac{a^2 \\gamma^2}{4gl}\\sin^2 \\phi$`}</td>
                <td>{`Upright, $\\phi = \\pi$`}</td>
                <td>{`$a^2 \\gamma^2 > 2gl$`}</td>
              </tr>
              <tr>
                <td>Horizontal</td>
                <td>{`$\\frac{a^2 \\gamma^2}{4gl}\\cos^2 \\phi$`}</td>
                <td>{`Tilted, $\\cos \\phi = \\frac{2gl}{a^2 \\gamma^2}$`}</td>
                <td>{`$a^2 \\gamma^2 > 2gl$`}</td>
              </tr>
            </tbody>
          </table>
        </>
      ]
    },
    customCss: null
  }
  return <LearningTemplate config={config} />
}
