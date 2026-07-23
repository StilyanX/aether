import { LearningTemplate } from '../../../../../components/learning/learning-template'
import {
  CommonIonSolubilityViz,
  SelectivePrecipitationViz,
  MolarSolubilityTypeViz,
  SolubilityPHViz,
  QvsKspViz
} from '../../../../../components/viz'

function useConfig() {
  const config = {
    cssPrefix: 'chem-ksp',
    documentTitle: 'Solubility Product and the Common-Ion Effect - AETHER',
    customCss: null,
    learning: {
      category: 'Unit 6',
      groupTitle: 'Acid-Base and Aqueous Equilibria',
      title: 'Solubility Product and the Common-Ion Effect',
      subtitle:
        'How the solubility product measures the dissolving of a barely soluble salt, and how a shared ion, the pH, or a second salt changes what dissolves and what falls out.',
      sections: [
        <>
          <div className="lrn-header">
            <h2>What the Solubility Product Means</h2>
          </div>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              You drop solid silver chloride into pure water. A tiny bit dissolves, then no more.
              The beaker looks unchanged.
            </p>
            <p>
              Is anything still happening at the surface of the solid? Or has everything stopped?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                Things are still happening. The solid keeps dissolving and the ions keep rebuilding
                solid at the same rate.
              </p>
              <p>
                This is dynamic equilibrium. The amounts stay fixed, but the two processes never
                stop.
              </p>
            </details>
          </div>
          <p>
            Some ionic solids barely dissolve in water. Drop one in, and only a trace breaks apart
            into ions. The rest stays solid at the bottom.
          </p>
          <p>
            When no more solid can dissolve, the solution is <strong>saturated</strong>. At that
            point dissolving and re-forming happen at the same rate. This balance is a heterogeneous
            equilibrium, because solid and dissolved ions sit in the same system.
          </p>
          <p>
            The <strong>solubility product</strong>, written {`$K_{sp}$`}, is the equilibrium
            constant for this dissolving. For a salt MX it looks like this:
          </p>
          <div className="lrn-eq lrn-eq-hero">{`$$\\text{MX}(s) \\rightleftharpoons \\text{M}^+(aq) + \\text{X}^-(aq) \\qquad K_{sp} = [\\text{M}^+][\\text{X}^-]$$`}</div>
          <p>
            When to use this: any time you study a barely soluble salt, predict whether it
            precipitates, or compare how much of two salts can dissolve.
          </p>
          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>
              The pure solid never appears inside the {`$K_{sp}$`} expression. Its activity (a
              measure of how much it takes part) is fixed at 1 for a pure solid, so it drops out of
              the product.
            </p>
            <p>
              That is why {`$K_{sp}$`} depends only on the dissolved ion concentrations. Adding more
              solid does not change {`$K_{sp}$`}, because piling up solid does not change the
              activity of a pure solid.
            </p>
          </div>
          <div className="lrn-insight">
            <p>
              {`$K_{sp}$`} is a fixed number at a given temperature. The smaller it is, the less the
              salt dissolves.
            </p>
          </div>
          <h3>Writing a Ksp Expression</h3>
          <p>
            Write the dissolving equation first. Then multiply the ion concentrations, each raised
            to a power equal to its coefficient.
          </p>
          <p>Start with the simplest case, silver chloride, which breaks into one of each ion:</p>
          <div className="lrn-eq lrn-eq-hero">{`$$\\text{AgCl}(s) \\rightleftharpoons \\text{Ag}^+(aq) + \\text{Cl}^-(aq) \\qquad K_{sp} = [\\text{Ag}^+][\\text{Cl}^-]$$`}</div>
          <p>
            Each coefficient is 1, so each ion appears to the first power. The solid does not
            appear.
          </p>
          <p>Now take bismuth sulfide, which gives more of each ion per formula unit:</p>
          <div className="lrn-eq lrn-eq-hero">{`$$\\text{Bi}_2\\text{S}_3(s) \\rightleftharpoons 2\\,\\text{Bi}^{3+}(aq) + 3\\,\\text{S}^{2-}(aq) \\qquad K_{sp} = [\\text{Bi}^{3+}]^2[\\text{S}^{2-}]^3$$`}</div>
          <p>
            The 2 on bismuth and the 3 on sulfide become the exponents. The solid still does not
            appear.
          </p>
          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>
              In the bismuth sulfide expression, why is the sulfide concentration raised to the
              third power and not just multiplied by 3?
            </p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                Equilibrium constants raise each concentration to its coefficient as an exponent,
                not a multiplier. Three sulfide ions form per formula unit, so the term is{' '}
                {`$[\\text{S}^{2-}]^3$`}.
              </p>
              <p>
                A factor of 3 would be wrong. The exponent comes from how equilibrium constants are
                built, which uses powers, not multipliers.
              </p>
            </details>
          </div>
          <div className="lrn-insight">
            <p>
              You can now write a {`$K_{sp}$`} expression for any salt: write the dissolving
              equation, then raise each ion concentration to its coefficient.
            </p>
          </div>
        </>,

        <>
          <div className="lrn-header">
            <h2>Molar Solubility and Ksp</h2>
          </div>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              Salt A has {`$K_{sp} = 1 \\times 10^{-10}$`} and dissolves into one cation and one
              anion. Salt B has the same {`$K_{sp}$`} but dissolves into one cation and two anions.
            </p>
            <p>
              Do equal solubility products mean equal amounts dissolve? Predict before reading on.
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                No. The two salts split into different numbers of ions, so the same {`$K_{sp}$`}{' '}
                gives different solubilities.
              </p>
              <p>
                You can only compare solubilities directly when the salts have the same formula
                type.
              </p>
            </details>
          </div>
          <p>
            <strong>Molar solubility</strong>, written {`$s$`}, is the number of moles of salt that
            dissolve in one liter of saturated solution. It carries units of mol/L.
          </p>
          <p>
            {`$K_{sp}$`} and {`$s$`} are linked through the dissolving stoichiometry. Given one, you
            can find the other. The link changes with the formula type.
          </p>
          <p>
            When to use this: to turn a measured solubility into {`$K_{sp}$`}, or to turn a
            tabulated {`$K_{sp}$`} into a predicted solubility.
          </p>
          <h3>The Three Common Formula Types</h3>
          <p>
            Let {`$s$`} be the moles of salt that dissolve per liter. Read each ion concentration
            off the dissolving equation, then substitute into {`$K_{sp}$`}.
          </p>
          <ul className="lrn-list">
            <li>
              1:1 salt such as AgCl. {`$[\\text{Ag}^+] = s$`} and {`$[\\text{Cl}^-] = s$`}, so{' '}
              {`$K_{sp} = s^2$`}.
            </li>
            <li>
              1:2 salt such as PbI₂. {`$[\\text{Pb}^{2+}] = s$`} and {`$[\\text{I}^-] = 2s$`}, so{' '}
              {`$K_{sp} = s(2s)^2 = 4s^3$`}.
            </li>
            <li>
              2:1 salt such as Ag₂CrO₄. {`$[\\text{Ag}^+] = 2s$`} and {`$[\\text{CrO}_4^{2-}] = s$`}
              , so {`$K_{sp} = (2s)^2 s = 4s^3$`}.
            </li>
          </ul>
          <MolarSolubilityTypeViz />
          <div className="lrn-insight">
            <p>
              The 1:2 and 2:1 salts both give {`$K_{sp} = 4s^3$`}, so a smaller {`$K_{sp}$`} means
              less dissolves only when the salts share the same formula type. Compare {`$K_{sp}$`}{' '}
              values across formula types and you can be misled.
            </p>
          </div>
          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>
              Each formula unit that dissolves releases a fixed count of ions. If it releases two of
              one ion, that ion appears at twice the salt's solubility.
            </p>
            <p>
              The coefficient enters twice: once as the multiplier on {`$s$`} and again as the
              exponent in {`$K_{sp}$`}. That is why the simple factors 4 and 27 appear.
            </p>
          </div>
          <h3>Worked Example: Solubility to Ksp for Silver Chromate</h3>
          <p>
            The molar solubility of silver chromate at 25°C is {`$6.5 \\times 10^{-5}$`} mol/L. Find{' '}
            {`$K_{sp}$`}.
          </p>
          <div className="lrn-steps">
            <div className="lrn-step">
              <span className="lrn-step-title">Step 1, Write the dissolving equation</span>
              <p className="lrn-step-content">
                {`$$\\text{Ag}_2\\text{CrO}_4(s) \\rightleftharpoons 2\\,\\text{Ag}^+(aq) + \\text{CrO}_4^{2-}(aq)$$`}
              </p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">Step 2, Express the ions in terms of s</span>
              <p className="lrn-step-content">
                Each formula unit gives two silver ions and one chromate ion.
              </p>
              <p className="lrn-step-content">
                {`$$[\\text{Ag}^+] = 2s = 1.3 \\times 10^{-4}\\ \\text{M} \\qquad [\\text{CrO}_4^{2-}] = s = 6.5 \\times 10^{-5}\\ \\text{M}$$`}
              </p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">Step 3, Substitute into Ksp</span>
              <p className="lrn-step-content">
                {`$$K_{sp} = [\\text{Ag}^+]^2[\\text{CrO}_4^{2-}] = (2s)^2(s) = 4s^3$$`}
              </p>
              <p className="lrn-step-content">
                {`$$K_{sp} = 4 \\times (6.5 \\times 10^{-5})^3 = 1.1 \\times 10^{-12}$$`}
              </p>
            </div>
          </div>
          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>Where does the factor of 4 in {`$K_{sp} = 4s^3$`} come from?</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                The silver concentration is {`$2s$`}, and {`$K_{sp}$`} squares it. Squaring {`$2s$`}{' '}
                gives {`$4s^2$`}.
              </p>
              <p>
                Multiplying by the chromate term {`$s$`} gives {`$4s^3$`}. The 4 is {`$2^2$`} from
                the silver coefficient.
              </p>
            </details>
          </div>
          <h3>Worked Example: Ksp to Solubility for Silver Chloride</h3>
          <p>
            Silver chloride has {`$K_{sp} = 1.6 \\times 10^{-10}$`} at 25°C. Find its molar
            solubility. This is the simplest case, a 1:1 salt.
          </p>
          <div className="lrn-steps">
            <div className="lrn-step">
              <span className="lrn-step-title">Step 1, Write the dissolving equation</span>
              <p className="lrn-step-content">
                {`$$\\text{AgCl}(s) \\rightleftharpoons \\text{Ag}^+(aq) + \\text{Cl}^-(aq)$$`}
              </p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">Step 2, Express the ions in terms of s</span>
              <p className="lrn-step-content">
                Each formula unit gives one silver ion and one chloride ion, so{' '}
                {`$[\\text{Ag}^+] = s$`} and {`$[\\text{Cl}^-] = s$`}.
              </p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">Step 3, Substitute and solve</span>
              <p className="lrn-step-content">
                {`$$K_{sp} = [\\text{Ag}^+][\\text{Cl}^-] = s \\cdot s = s^2$$`}
              </p>
              <p className="lrn-step-content">
                {`$$s = \\sqrt{K_{sp}} = \\sqrt{1.6 \\times 10^{-10}} = 1.3 \\times 10^{-5}\\ \\text{mol/L}$$`}
              </p>
            </div>
          </div>
          <p>
            For any 1:1 salt the link is just {`$s = \\sqrt{K_{sp}}$`}. The next example stacks more
            ions and is harder to solve.
          </p>
          <h3>Worked Example: Ksp to Solubility for Chromium(III) Iodate</h3>
          <p>
            Chromium(III) iodate has {`$K_{sp} = 5.0 \\times 10^{-6}$`} at 25°C. Estimate its molar
            solubility. The setup is laid out for you. The last step is left blank so you finish it
            yourself, then check.
          </p>
          <div className="lrn-faded">
            <div className="faded-example">
              <p>
                Dissolving equation:{' '}
                {`$\\text{Cr(IO}_3)_3(s) \\rightleftharpoons \\text{Cr}^{3+}(aq) + 3\\,\\text{IO}_3^-(aq)$`}
                .
              </p>
              <p>
                Ion concentrations: {`$[\\text{Cr}^{3+}] = s$`} and {`$[\\text{IO}_3^-] = 3s$`}.
              </p>
              <p>Substitute: {`$K_{sp} = (s)(3s)^3 = 27 s^4$`}.</p>
              <p>
                Solve for {`$s$`}: {`$s = \\left(\\dfrac{K_{sp}}{27}\\right)^{1/4}$`}.
              </p>
              <p>
                Put in numbers:{' '}
                {`$s = \\left(\\dfrac{5.0 \\times 10^{-6}}{27}\\right)^{1/4} = (1.85 \\times 10^{-7})^{1/4} = \\;?$`}
              </p>
              <p>Now take the fourth root yourself, then open the check below.</p>
            </div>
            <details className="lrn-self-explain-reveal">
              <summary>Check your answer</summary>
              <p>
                Take the square root twice. First{' '}
                {`$\\sqrt{1.85 \\times 10^{-7}} = 4.3 \\times 10^{-4}$`}. Then{' '}
                {`$\\sqrt{4.3 \\times 10^{-4}} = 0.021$`}. So {`$s = 0.021$`} mol/L.
              </p>
            </details>
          </div>
          <div className="lrn-callout lrn-tip">
            <p>
              To take a fourth root without a special key, take the square root twice. Each square
              root halves the exponent, and two of them give the fourth root.
            </p>
          </div>
          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>
              Why does this 1:3 salt give {`$27s^4$`} while a 2:1 salt gave {`$4s^3$`}?
            </p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                The iodate concentration is {`$3s$`}, and it is cubed: {`$(3s)^3 = 27 s^3$`}. The 27
                is {`$3^3$`}.
              </p>
              <p>
                Multiply by the {`$\\text{Cr}^{3+}$`} term {`$s$`} and you reach {`$27 s^4$`}. The
                power on {`$s$`} equals the total number of ions per formula unit.
              </p>
            </details>
          </div>
          <div className="lrn-insight">
            <p>
              You can now convert either direction: turn a measured solubility into {`$K_{sp}$`}, or
              turn a tabulated {`$K_{sp}$`} into a predicted solubility, for any formula type.
            </p>
          </div>
        </>,

        <>
          <div className="lrn-header">
            <h2>The Common-Ion Effect</h2>
          </div>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              You dissolve silver chloride in pure water, then in salt water that already has
              chloride ions in it.
            </p>
            <p>Does the silver chloride dissolve more, less, or the same in the salt water?</p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                Less. The extra chloride is a common ion. It pushes the dissolving equilibrium back
                toward solid.
              </p>
              <p>So the salt becomes less soluble. This is Le Chatelier's principle at work.</p>
            </details>
          </div>
          <p>
            You met the <strong>common-ion effect</strong> with buffers: adding an ion that is
            already part of an equilibrium pushes that equilibrium back. Here the same idea applies
            to a dissolving salt. Add one of the salt's own ions and less salt dissolves.
          </p>
          <p>
            When to use this: any time a barely soluble salt sits in a solution that already holds
            one of its ions, often from a second, fully soluble salt.
          </p>
          <CommonIonSolubilityViz />
          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>
              {`$K_{sp}$`} is fixed. The product of the two ion concentrations must stay equal to{' '}
              {`$K_{sp}$`} at equilibrium.
            </p>
            <p>
              If you force one ion concentration up, the other must come down to keep the product
              fixed. A lower concentration of the salt's own ion means less of the salt has
              dissolved.
            </p>
          </div>
          <h3>Worked Example: Silver Chloride in Sodium Chloride</h3>
          <p>
            Find the solubility of silver chloride in {`$1.0 \\times 10^{-4}$`} M sodium chloride at
            25°C. {`$K_{sp}(\\text{AgCl}) = 1.6 \\times 10^{-10}$`}.
          </p>
          <div className="lrn-steps">
            <div className="lrn-step">
              <span className="lrn-step-title">Step 1, Identify the common ion</span>
              <p className="lrn-step-content">
                Sodium chloride supplies chloride. So {`$[\\text{Cl}^-] = 1.0 \\times 10^{-4}$`} M
                before any silver chloride dissolves.
              </p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">Step 2, Decide which ion dominates</span>
              <p className="lrn-step-content">
                Silver chloride barely dissolves, so the chloride it adds is tiny next to{' '}
                {`$1.0 \\times 10^{-4}$`} M. Treat {`$[\\text{Cl}^-]$`} as fixed at{' '}
                {`$1.0 \\times 10^{-4}$`} M.
              </p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">Step 3, Solve for the silver concentration</span>
              <p className="lrn-step-content">
                {`$$[\\text{Ag}^+] = \\frac{K_{sp}}{[\\text{Cl}^-]} = \\frac{1.6 \\times 10^{-10}}{1.0 \\times 10^{-4}} = 1.6 \\times 10^{-6}\\ \\text{M}$$`}
              </p>
              <p className="lrn-step-content">
                The solubility equals {`$[\\text{Ag}^+]$`} because each dissolved formula unit gives
                one silver ion. So {`$s = 1.6 \\times 10^{-6}$`} mol/L.
              </p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">Step 4, Compare with pure water</span>
              <p className="lrn-step-content">
                In pure water {`$s = \\sqrt{K_{sp}} = 1.3 \\times 10^{-5}$`} mol/L. The common ion
                cut the solubility by about ten times.
              </p>
            </div>
          </div>
          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>
              Why was it fair to treat {`$[\\text{Cl}^-]$`} as just {`$1.0 \\times 10^{-4}$`} M and
              ignore the chloride from the silver chloride itself?
            </p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                The silver chloride only adds about {`$1.6 \\times 10^{-6}$`} M of chloride. That is
                tiny next to {`$1.0 \\times 10^{-4}$`} M.
              </p>
              <p>
                Adding it changes the total by under 2%. Ignoring it keeps the math simple and
                barely affects the answer.
              </p>
            </details>
          </div>
          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Dissolving in pure water</span>
              <p>
                Both ions start at zero. The salt dissolves until {`$s^2 = K_{sp}$`}. Silver
                chloride reaches {`$s = 1.3 \\times 10^{-5}$`} mol/L.
              </p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Dissolving with a common ion</span>
              <p>
                Chloride already sits at {`$1.0 \\times 10^{-4}$`} M. The salt dissolves only until{' '}
                {`$[\\text{Ag}^+]$`} times that fixed chloride hits {`$K_{sp}$`}. Solubility drops
                to {`$1.6 \\times 10^{-6}$`} mol/L.
              </p>
            </div>
          </div>
        </>,

        <>
          <div className="lrn-header">
            <h2>Predicting Precipitation: Q Versus Ksp</h2>
          </div>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              You pour together two clear solutions. One holds lead ions, the other holds iodide
              ions.
            </p>
            <p>
              How could you decide ahead of time whether a yellow solid will appear, without mixing
              them?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>Work out the ion product right after mixing, then compare it with {`$K_{sp}$`}.</p>
              <p>
                If the ion product is bigger than {`$K_{sp}$`}, solid forms. If it is smaller,
                nothing precipitates.
              </p>
            </details>
          </div>
          <p>
            The <strong>reaction quotient</strong> {`$Q_{sp}$`} has the same form as {`$K_{sp}$`},
            but you build it from the actual ion concentrations at the moment you check, not the
            equilibrium ones.
          </p>
          <p>
            Comparing {`$Q_{sp}$`} with {`$K_{sp}$`} tells you which way the system must move.
          </p>
          <div className="lrn-eq lrn-eq-hero">{`$$Q_{sp} \\;\\text{vs}\\; K_{sp} \\;\\Rightarrow\\; \\text{which direction the system shifts}$$`}</div>
          <ul className="lrn-list">
            <li>
              {`$Q_{sp} < K_{sp}$`}: the solution is unsaturated. More solid could dissolve. No
              precipitate.
            </li>
            <li>{`$Q_{sp} = K_{sp}$`}: the solution is exactly saturated and at equilibrium.</li>
            <li>
              {`$Q_{sp} > K_{sp}$`}: the solution is supersaturated. Solid precipitates until{' '}
              {`$Q_{sp}$`} falls back to {`$K_{sp}$`}.
            </li>
          </ul>
          <QvsKspViz />
          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>
              {`$K_{sp}$`} is the largest ion product a solution can hold without dropping solid.{' '}
              {`$Q_{sp}$`} measures the ion product you actually have.
            </p>
            <p>
              When the actual product climbs above the ceiling, the extra ions cannot stay
              dissolved. They join together as solid until the product drops back to the ceiling.
            </p>
          </div>
          <h3>Worked Example: Mixing Lead and Iodide Solutions</h3>
          <p>
            Equal volumes of 0.2 M lead(II) nitrate and 0.2 M potassium iodide are mixed at 25°C.
            Will lead(II) iodide precipitate? {`$K_{sp}(\\text{PbI}_2) = 1.4 \\times 10^{-8}$`}.
          </p>
          <div className="lrn-steps">
            <div className="lrn-step">
              <span className="lrn-step-title">Step 1, Account for dilution on mixing</span>
              <p className="lrn-step-content">
                Mixing equal volumes halves every concentration. So {`$[\\text{Pb}^{2+}] = 0.1$`} M
                and {`$[\\text{I}^-] = 0.1$`} M right after mixing.
              </p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">Step 2, Build Qsp</span>
              <p className="lrn-step-content">
                {`$$Q_{sp} = [\\text{Pb}^{2+}][\\text{I}^-]^2 = (0.1)(0.1)^2 = 1 \\times 10^{-3}$$`}
              </p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">Step 3, Compare with Ksp</span>
              <p className="lrn-step-content">
                {`$$Q_{sp} = 1 \\times 10^{-3} \\;\\gg\\; K_{sp} = 1.4 \\times 10^{-8}$$`}
              </p>
              <p className="lrn-step-content">
                The ion product towers over {`$K_{sp}$`}, so lead(II) iodide precipitates.
              </p>
            </div>
          </div>
          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>
              Why did the iodide concentration get squared in {`$Q_{sp}$`} while the lead
              concentration did not?
            </p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                Lead(II) iodide releases two iodide ions per formula unit but only one lead ion.{' '}
                {`$Q_{sp}$`} uses each coefficient as an exponent.
              </p>
              <p>
                So iodide is squared and lead is to the first power. The form of {`$Q_{sp}$`} copies
                the form of {`$K_{sp}$`} exactly.
              </p>
            </details>
          </div>
          <div className="lrn-callout lrn-warning">
            <p>
              Always apply mixing dilution before building {`$Q_{sp}$`}. Forgetting to halve the
              concentrations is the most common mistake in these problems.
            </p>
          </div>
        </>,

        <>
          <div className="lrn-header">
            <h2>pH and Solubility</h2>
          </div>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>Magnesium hydroxide barely dissolves in pure water. You add acid to the mixture.</p>
            <p>Does the solid dissolve more, less, or stay the same as the acid goes in?</p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>It dissolves more. The acid removes hydroxide ions by turning them into water.</p>
              <p>
                Removing a product pulls the dissolving equilibrium forward, so more solid breaks
                apart.
              </p>
            </details>
          </div>
          <p>
            When a salt's anion is itself a base, the pH controls how much of the salt dissolves.
            Lower the pH and you remove that anion, which pulls more solid into solution.
          </p>
          <p>
            When to use this: for hydroxides and for salts whose anion comes from a weak acid, such
            as carbonates, sulfides, and fluorides.
          </p>
          <h3>Hydroxides in Acid</h3>
          <p>A metal hydroxide dissolves to give hydroxide ions. Take iron(III) hydroxide:</p>
          <div className="lrn-eq lrn-eq-hero">{`$$\\text{Fe(OH)}_3(s) \\rightleftharpoons \\text{Fe}^{3+}(aq) + 3\\,\\text{OH}^-(aq)$$`}</div>
          <p>
            Add acid and its hydronium reacts with the hydroxide to form water. That removes
            hydroxide, drops {`$Q_{sp}$`} below {`$K_{sp}$`}, and drives the solid to dissolve.
          </p>
          <SolubilityPHViz />
          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>
              Hydroxide is a product of the dissolving reaction. Acid consumes that product by
              making water.
            </p>
            <p>
              By Le Chatelier's principle, removing a product shifts the equilibrium forward. More
              solid dissolves to replace the lost hydroxide.
            </p>
          </div>
          <h3>Salts of Weak Acids in Acid</h3>
          <p>
            A carbonate dissolves to give carbonate ions. Carbonate is the conjugate base of a weak
            acid, meaning it is what is left after that acid gives away its proton. Take zinc
            carbonate:
          </p>
          <div className="lrn-eq">{`$$\\text{ZnCO}_3(s) \\rightleftharpoons \\text{Zn}^{2+}(aq) + \\text{CO}_3^{2-}(aq)$$`}</div>
          <p>
            Strong acid adds a proton to the carbonate, first making bicarbonate and then carbonic
            acid, which leaves as carbon dioxide gas. Each step strips carbonate from solution and
            pulls the dissolving forward.
          </p>
          <p>
            The carbon dioxide bubbles out of the liquid and cannot come back. That makes the
            removal almost complete, so the solid keeps dissolving until it is gone.
          </p>
          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Anion of a strong acid</span>
              <p>
                Chloride and nitrate are conjugate bases of strong acids. They do not grab protons,
                so acid does not pull them out of solution. The salt's solubility barely changes
                with pH.
              </p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Anion of a weak acid</span>
              <p>
                Hydroxide, carbonate, and sulfide are basic anions. Acid adds a proton to them and
                removes them, so the salt becomes much more soluble as pH drops.
              </p>
            </div>
          </div>
          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>
              Silver chloride does not dissolve when you add nitric acid, but zinc carbonate does.
              Why the difference?
            </p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                Chloride is the conjugate base of a strong acid, so it has no pull on protons. Acid
                cannot remove chloride, so silver chloride stays solid.
              </p>
              <p>
                Carbonate is the conjugate base of a weak acid. Acid adds a proton to it and sends
                it off as carbon dioxide, so zinc carbonate dissolves.
              </p>
            </details>
          </div>
        </>,

        <>
          <div className="lrn-header">
            <h2>Selective Precipitation</h2>
          </div>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              Seawater holds both magnesium and calcium ions. You slowly raise the hydroxide
              concentration.
            </p>
            <p>
              Magnesium hydroxide has a far smaller {`$K_{sp}$`} than calcium hydroxide. Which metal
              hydroxide falls out first?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                Magnesium hydroxide. Its tiny {`$K_{sp}$`} is reached at a much lower hydroxide
                concentration.
              </p>
              <p>
                Calcium hydroxide needs far more hydroxide before its {`$Q_{sp}$`} reaches its{' '}
                {`$K_{sp}$`}. So the two separate cleanly.
              </p>
            </details>
          </div>
          <p>
            <strong>Selective precipitation</strong> drops one ion out of a mixture while another
            stays dissolved. You do it by slowly raising the concentration of a shared partner ion.
          </p>
          <p>
            The salt with the smaller {`$K_{sp}$`} reaches its limit first. If the two solubility
            products differ widely, the first salt is nearly gone before the second even starts.
          </p>
          <p>
            When to use this: to separate two metal ions from one solution, as done with magnesium
            and calcium in seawater treatment.
          </p>
          <SelectivePrecipitationViz />
          <h3>Worked Example: Magnesium and Calcium in Seawater</h3>
          <p>
            Seawater holds 0.050 M magnesium ion and 0.010 M calcium ion. Sodium hydroxide is added
            slowly. {`$K_{sp}(\\text{Mg(OH)}_2) = 1.1 \\times 10^{-11}$`} and{' '}
            {`$K_{sp}(\\text{Ca(OH)}_2) = 5.5 \\times 10^{-6}$`}.
          </p>
          <div className="lrn-steps">
            <div className="lrn-step">
              <span className="lrn-step-title">
                Step 1, Find the hydroxide that starts each solid
              </span>
              <p className="lrn-step-content">
                For each hydroxide, {`$[\\text{OH}^-] = \\sqrt{K_{sp} / [\\text{M}^{2+}]}$`} at the
                point precipitation begins.
              </p>
              <p className="lrn-step-content">
                {`$$\\text{Mg(OH)}_2: [\\text{OH}^-] = \\sqrt{\\frac{1.1 \\times 10^{-11}}{0.050}} = 1.5 \\times 10^{-5}\\ \\text{M}$$`}
              </p>
              <p className="lrn-step-content">
                {`$$\\text{Ca(OH)}_2: [\\text{OH}^-] = \\sqrt{\\frac{5.5 \\times 10^{-6}}{0.010}} = 0.023\\ \\text{M}$$`}
              </p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">Step 2, Order the precipitation</span>
              <p className="lrn-step-content">
                Magnesium hydroxide begins at {`$1.5 \\times 10^{-5}$`} M hydroxide, far below the{' '}
                {`$0.023$`} M needed for calcium hydroxide. Magnesium precipitates first.
              </p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">
                Step 3, Find leftover magnesium when calcium starts
              </span>
              <p className="lrn-step-content">
                At {`$[\\text{OH}^-] = 0.023$`} M, the magnesium still in solution is:
              </p>
              <p className="lrn-step-content">
                {`$$[\\text{Mg}^{2+}] = \\frac{K_{sp}}{[\\text{OH}^-]^2} = \\frac{1.1 \\times 10^{-11}}{(0.023)^2} = 2.1 \\times 10^{-8}\\ \\text{M}$$`}
              </p>
              <p className="lrn-step-content">
                Magnesium fell from 0.050 M to {`$2.1 \\times 10^{-8}$`} M before calcium began.
                Almost all of it is gone.
              </p>
            </div>
          </div>
          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>
              Why does the wide gap between the two solubility products make the separation work so
              cleanly?
            </p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                The two {`$K_{sp}$`} values differ by about a million times. Reaching the small one
                takes far less hydroxide than reaching the large one.
              </p>
              <p>
                So you can raise the hydroxide past the first limit and stop before the second. The
                first ion is nearly all removed while the second has not started.
              </p>
            </details>
          </div>
          <div className="lrn-insight">
            <p>
              The bigger the gap between two solubility products, the cleaner the separation.
              Solubility products that sit close together cannot be split this way.
            </p>
          </div>
        </>
      ]
    },
    practice: [
      {
        q: 'Write the $K_{sp}$ expression for $\\text{Bi}_2\\text{S}_3$, which dissolves as $\\text{Bi}_2\\text{S}_3(s) \\rightleftharpoons 2\\,\\text{Bi}^{3+}(aq) + 3\\,\\text{S}^{2-}(aq)$.',
        a: '$K_{sp} = [\\text{Bi}^{3+}]^2[\\text{S}^{2-}]^3$. The exponents match the stoichiometric coefficients: 2 for Bi$^{3+}$ and 3 for S$^{2-}$. The solid Bi$_2$S$_3$ does not appear because its activity equals 1.'
      },
      {
        q: 'The molar solubility of $\\text{Ag}_2\\text{CrO}_4$ at 25°C is $6.5 \\times 10^{-5}$ mol/L. Calculate $K_{sp}$.',
        a: 'From $\\text{Ag}_2\\text{CrO}_4(s) \\rightleftharpoons 2\\,\\text{Ag}^+ + \\text{CrO}_4^{2-}$: $[\\text{Ag}^+] = 2s = 1.3 \\times 10^{-4}$ M, $[\\text{CrO}_4^{2-}] = s = 6.5 \\times 10^{-5}$ M. So $K_{sp} = (1.3 \\times 10^{-4})^2(6.5 \\times 10^{-5}) = 4s^3 = 1.1 \\times 10^{-12}$. The factor of 4 comes from $(2s)^2 = 4s^2$ when you square the Ag$^+$ coefficient.'
      },
      {
        q: '$\\text{Cr(IO}_3)_3$ has $K_{sp} = 5.0 \\times 10^{-6}$. Find the molar solubility.',
        a: 'From $K_{sp} = s(3s)^3 = 27s^4$: $s = \\left(\\frac{5.0 \\times 10^{-6}}{27}\\right)^{\\frac{1}{4}} = (1.85 \\times 10^{-7})^{0.25} = 0.021$ mol/L. The key step is collecting the stoichiometry: each mole of salt gives one Cr$^{3+}$ and three IO$_3^-$, so $[\\text{IO}_3^-] = 3s$ and the cube gives the factor 27.'
      },
      {
        q: 'Find the molar solubility of AgCl ($K_{sp} = 1.6 \\times 10^{-10}$) in pure water.',
        a: '$K_{sp} = s^2$, so $s = \\sqrt{1.6 \\times 10^{-10}} = 1.3 \\times 10^{-5}$ mol/L. For a 1:1 salt like AgCl, both $[\\text{Ag}^+]$ and $[\\text{Cl}^-]$ equal $s$, making the algebra simple: no coefficient adjustment needed.'
      },
      {
        q: 'Find the molar solubility of AgCl in $1.0 \\times 10^{-4}$ M NaCl. $K_{sp}(\\text{AgCl}) = 1.6 \\times 10^{-10}$.',
        a: 'The NaCl provides $[\\text{Cl}^-] = 1.0 \\times 10^{-4}$ M, which dominates over the contribution from AgCl dissolution. So $[\\text{Ag}^+] = \\frac{K_{sp}}{[\\text{Cl}^-]} = \\frac{1.6 \\times 10^{-10}}{1.0 \\times 10^{-4}} = 1.6 \\times 10^{-6}$ mol/L. This is about 10 times less than in pure water ($1.3 \\times 10^{-5}$ M), confirming the common-ion effect reduces solubility.'
      },
      {
        q: 'Equal volumes of 0.20 M Pb(NO$_3$)$_2$ and 0.20 M KI are mixed. Does $\\text{PbI}_2$ precipitate? $K_{sp}(\\text{PbI}_2) = 1.4 \\times 10^{-8}$.',
        a: 'Mixing equal volumes halves concentrations: $[\\text{Pb}^{2+}] = 0.10$ M, $[\\text{I}^-] = 0.10$ M. $Q_{sp} = (0.10)(0.10)^2 = 1 \\times 10^{-3}$. Since $Q_{sp} = 1 \\times 10^{-3} \\gg K_{sp} = 1.4 \\times 10^{-8}$, precipitation occurs. The ion product far exceeds the equilibrium maximum, so the system removes ions by forming solid PbI$_2$.'
      },
      {
        q: 'A solution is $1.0 \\times 10^{-3}$ M in Pb$^{2+}$ and $1.0 \\times 10^{-3}$ M in I$^-$. Will PbI$_2$ precipitate? $K_{sp} = 1.4 \\times 10^{-8}$.',
        a: '$Q_{sp} = (1.0 \\times 10^{-3})(1.0 \\times 10^{-3})^2 = 1.0 \\times 10^{-9}$. Since $Q_{sp} = 1.0 \\times 10^{-9} < K_{sp} = 1.4 \\times 10^{-8}$, no precipitate forms. The solution is unsaturated, so more PbI$_2$ could dissolve if present.'
      },
      {
        q: 'Seawater contains 0.050 M Mg$^{2+}$ and 0.010 M Ca$^{2+}$. $K_{sp}$(Mg(OH)$_2$) $= 1.1 \\times 10^{-11}$, $K_{sp}$(Ca(OH)$_2$) $= 5.5 \\times 10^{-6}$. At what [OH$^-$] does each start to precipitate?',
        a: 'For Mg(OH)$_2$: $[\\text{OH}^-] = \\left(\\frac{1.1 \\times 10^{-11}}{0.050}\\right)^{\\frac{1}{2}} = 1.5 \\times 10^{-5}$ mol/L. For Ca(OH)$_2$: $[\\text{OH}^-] = \\left(\\frac{5.5 \\times 10^{-6}}{0.010}\\right)^{\\frac{1}{2}} = 0.023$ mol/L. Mg(OH)$_2$ precipitates first because its $K_{sp}$ is far smaller, requiring a much lower OH$^-$ concentration to exceed its threshold.'
      },
      {
        q: 'How much Mg$^{2+}$ remains when Ca(OH)$_2$ just begins to precipitate from seawater with 0.050 M Mg$^{2+}$ and 0.010 M Ca$^{2+}$? $K_{sp}$(Mg(OH)$_2$) $= 1.1 \\times 10^{-11}$, $K_{sp}$(Ca(OH)$_2$) $= 5.5 \\times 10^{-6}$.',
        a: 'Ca(OH)$_2$ starts precipitating at $[\\text{OH}^-] = 0.023$ M. At this point: $[\\text{Mg}^{2+}] = \\frac{K_{sp}}{[\\text{OH}^-]^2} = \\frac{1.1 \\times 10^{-11}}{(0.023)^2} = 2.1 \\times 10^{-8}$ mol/L. Starting from 0.050 M, Mg$^{2+}$ has dropped by more than a million times. It is almost completely removed before Ca$^{2+}$ starts to precipitate.'
      },
      {
        q: 'Fe(OH)$_3$ does not dissolve in pure water. Why does adding HNO$_3$ dissolve it completely?',
        a: 'Fe(OH)$_3$ dissolution: $\\text{Fe(OH)}_3(s) \\rightleftharpoons \\text{Fe}^{3+}(aq) + 3\\,\\text{OH}^-(aq)$. The H$_3$O$^+$ from HNO$_3$ reacts with OH$^-$: $\\text{H}_3\\text{O}^+(aq) + \\text{OH}^-(aq) \\rightarrow 2\\,\\text{H}_2\\text{O}(l)$. This removes OH$^-$ from solution, making $Q_{sp} < K_{sp}$ and shifting equilibrium right. The process continues until all the solid dissolves.'
      },
      {
        q: 'Find the molar solubility of PbI$_2$ ($K_{sp} = 1.4 \\times 10^{-8}$) in 0.10 M NaI.',
        a: 'NaI supplies the common ion, so $[\\text{I}^-] = 0.10$ M and stays fixed. PbI$_2$ is a 1:2 salt, so $K_{sp} = [\\text{Pb}^{2+}][\\text{I}^-]^2$. The solubility equals $[\\text{Pb}^{2+}]$ because each formula unit gives one lead ion. So $s = [\\text{Pb}^{2+}] = \\frac{K_{sp}}{[\\text{I}^-]^2} = \\frac{1.4 \\times 10^{-8}}{(0.10)^2} = 1.4 \\times 10^{-6}$ mol/L. In pure water $s = (K_{sp}/4)^{1/3} = 1.5 \\times 10^{-3}$ mol/L, so the common ion cuts solubility about a thousand times.'
      },
      {
        q: 'The molar solubility of CaF$_2$ at 25°C is $2.05 \\times 10^{-4}$ mol/L. Calculate $K_{sp}$.',
        a: 'From $\\text{CaF}_2(s) \\rightleftharpoons \\text{Ca}^{2+} + 2\\,\\text{F}^-$: $[\\text{Ca}^{2+}] = s = 2.05 \\times 10^{-4}$ M and $[\\text{F}^-] = 2s = 4.1 \\times 10^{-4}$ M. So $K_{sp} = [\\text{Ca}^{2+}][\\text{F}^-]^2 = (s)(2s)^2 = 4s^3 = 4(2.05 \\times 10^{-4})^3 = 3.4 \\times 10^{-11}$. The factor of 4 comes from $(2s)^2 = 4s^2$ when you square the fluoride coefficient.'
      },
      {
        q: 'A student writes $K_{sp}(\\text{Ag}_2\\text{CrO}_4) = s^2$. What is the error and what is the correct expression?',
        a: 'The expression is wrong. For Ag$_2$CrO$_4$ (2:1 stoichiometry): $[\\text{Ag}^+] = 2s$, $[\\text{CrO}_4^{2-}] = s$, so $K_{sp} = (2s)^2(s) = 4s^3$, not $s^2$. The error is ignoring the stoichiometric coefficient on Ag$^+$. For AgCl (1:1): $K_{sp} = s^2$ is correct. Always match the exponent to the coefficient in the dissolution equilibrium.'
      },
      {
        q: 'A solution contains 0.10 M Ba$^{2+}$ and 0.10 M Ca$^{2+}$. $K_{sp}$(BaSO$_4$) $= 1.1 \\times 10^{-10}$, $K_{sp}$(CaSO$_4$) $= 2.4 \\times 10^{-5}$. If SO$_4^{2-}$ is added slowly, which precipitates first and at what [SO$_4^{2-}$]?',
        a: 'BaSO$_4$ precipitates first. Threshold for Ba$^{2+}$: $[\\text{SO}_4^{2-}] = \\frac{K_{sp}}{[\\text{Ba}^{2+}]} = \\frac{1.1 \\times 10^{-10}}{0.10} = 1.1 \\times 10^{-9}$ mol/L. Threshold for Ca$^{2+}$: $[\\text{SO}_4^{2-}] = \\frac{2.4 \\times 10^{-5}}{0.10} = 2.4 \\times 10^{-4}$ mol/L. BaSO$_4$ starts precipitating at an SO$_4^{2-}$ concentration about 200,000 times lower than CaSO$_4$. That wide gap in $K_{sp}$ lets you separate them cleanly.'
      },
      {
        q: 'What happens to the solubility of Mg(OH)$_2$ as you lower the pH of the solution? Explain using equilibrium reasoning.',
        a: 'Solubility increases as pH decreases. The dissolution is $\\text{Mg(OH)}_2(s) \\rightleftharpoons \\text{Mg}^{2+}(aq) + 2\\,\\text{OH}^-(aq)$. Lowering pH adds H$_3$O$^+$, which reacts with OH$^-$ to form water, removing it from solution. This makes $Q_{sp} < K_{sp}$, so the equilibrium shifts right and more solid dissolves. The lower the pH, the more OH$^-$ is consumed, and the more Mg(OH)$_2$ dissolves. At sufficiently low pH, it dissolves completely.'
      },
      {
        q: '$K_{sp}$(AgCl) $= 1.6 \\times 10^{-10}$ and $K_{sp}$(AgI) $= 8.5 \\times 10^{-17}$. Without calculating, which silver halide is less soluble, and by about how much?',
        a: 'AgI is less soluble. For 1:1 salts, $s = \\sqrt{K_{sp}}$, so the ratio of solubilities equals $\\sqrt{\\frac{K_{sp}(\\text{AgI})}{K_{sp}(\\text{AgCl})}} = \\sqrt{\\frac{8.5 \\times 10^{-17}}{1.6 \\times 10^{-10}}} = \\sqrt{5.3 \\times 10^{-7}} \\approx 7 \\times 10^{-4}$. AgI is about 1000–2000 times less soluble than AgCl. The large difference makes selective precipitation of AgI from a solution of both straightforward.'
      },
      {
        q: 'You have solid PbCO$_3$ (insoluble in pure water). You add dilute HCl. Will it dissolve? Explain using $Q_{sp}$ reasoning.',
        a: 'Yes, it dissolves. PbCO$_3$ equilibrium: $\\text{PbCO}_3(s) \\rightleftharpoons \\text{Pb}^{2+}(aq) + \\text{CO}_3^{2-}(aq)$. HCl provides H$_3$O$^+$, which reacts with CO$_3^{2-}$: first forming HCO$_3^-$, then H$_2$CO$_3$, then CO$_2$(g) that escapes. Each step removes CO$_3^{2-}$, driving $Q_{sp}$ below $K_{sp}$ and pulling the dissolution equilibrium right. CO$_2$ escape is irreversible, so the process goes to completion.'
      },
      {
        q: 'Compare and contrast $K_{sp}$ and $Q_{sp}$. When do you use each?',
        a: '$K_{sp}$ is the equilibrium constant. It is a fixed value at a given temperature, the largest ion product a saturated solution can hold. $Q_{sp}$ is the reaction quotient. It uses actual concentrations at any instant. Use $K_{sp}$ to calculate equilibrium ion concentrations or molar solubility. Use $Q_{sp}$ to predict: if $Q_{sp} > K_{sp}$, precipitation occurs; if $Q_{sp} < K_{sp}$, more solid can dissolve; if $Q_{sp} = K_{sp}$, the solution is saturated.'
      },
      {
        q: 'Equal volumes of $2.0 \\times 10^{-4}$ M AgNO$_3$ and $2.0 \\times 10^{-4}$ M Na$_2$CrO$_4$ are mixed. Does Ag$_2$CrO$_4$ precipitate? $K_{sp}$(Ag$_2$CrO$_4$) $= 1.1 \\times 10^{-12}$.',
        a: 'Mixing equal volumes halves each concentration: $[\\text{Ag}^+] = 1.0 \\times 10^{-4}$ M, $[\\text{CrO}_4^{2-}] = 1.0 \\times 10^{-4}$ M. Ag$_2$CrO$_4$ is a 2:1 salt, so $Q_{sp} = [\\text{Ag}^+]^2[\\text{CrO}_4^{2-}] = (1.0 \\times 10^{-4})^2(1.0 \\times 10^{-4}) = 1.0 \\times 10^{-12}$. Compare: $Q_{sp} = 1.0 \\times 10^{-12} < K_{sp} = 1.1 \\times 10^{-12}$. The ion product sits just below $K_{sp}$, so no precipitate forms. The solution is barely unsaturated.'
      },
      {
        q: 'Find the molar solubility of AgI ($K_{sp} = 8.5 \\times 10^{-17}$) in pure water.',
        a: 'AgI is a 1:1 salt, so $K_{sp} = s^2$. Then $s = \\sqrt{8.5 \\times 10^{-17}} = 9.2 \\times 10^{-9}$ mol/L. Both $[\\text{Ag}^+]$ and $[\\text{I}^-]$ equal $s$ because each formula unit gives one of each ion. AgI dissolves far less than AgCl because its $K_{sp}$ is much smaller.'
      },
      {
        q: 'A student calculates the molar solubility of $\\text{Ca(OH)}_2$ ($K_{sp} = 5.5 \\times 10^{-6}$) using the exponent $\\frac{1}{2}$ instead of $\\frac{1}{3}$. What is the correct answer?',
        a: 'The error is using the wrong exponent. For Ca(OH)$_2$: $K_{sp} = [\\text{Ca}^{2+}][\\text{OH}^-]^2 = s(2s)^2 = 4s^3$. So $s = \\left(\\frac{K_{sp}}{4}\\right)^{\\frac{1}{3}}$, not raised to $\\frac{1}{2}$. Correct: $s = \\left(\\frac{5.5 \\times 10^{-6}}{4}\\right)^{\\frac{1}{3}} = (1.375 \\times 10^{-6})^{\\frac{1}{3}} = 0.011$ mol/L. Using $\\frac{1}{2}$ instead of $\\frac{1}{3}$ makes the units come out wrong and gives a wrong number.'
      },
      {
        q: 'A pure solid is added to a saturated solution of itself. Predict what happens to $K_{sp}$ and to the dissolved ion concentrations.',
        a: 'Nothing changes. $K_{sp}$ is unaffected because the activity of a pure solid is fixed at 1, no matter how much solid is present. The solution is already saturated, so the ion concentrations already satisfy $Q_{sp} = K_{sp}$. The added solid simply sits at the bottom undissolved. Piling up more solid cannot push more ions into an already-saturated solution.'
      },
      {
        q: 'Salt A is a 1:1 salt and salt B is a 1:2 salt. Both have $K_{sp} = 4 \\times 10^{-9}$. Predict which is more soluble before calculating, then check.',
        a: 'Predict: they cannot be compared by $K_{sp}$ alone because the formula types differ. Check: for A, $K_{sp} = s^2$, so $s = \\sqrt{4 \\times 10^{-9}} = 6.3 \\times 10^{-5}$ mol/L. For B, $K_{sp} = 4s^3$, so $s = \\left(\\frac{4 \\times 10^{-9}}{4}\\right)^{1/3} = (10^{-9})^{1/3} = 1.0 \\times 10^{-3}$ mol/L. Salt B is more soluble even though the solubility products are equal. Equal $K_{sp}$ does not mean equal solubility.'
      },
      {
        q: 'Transfer: Hard water deposits CaCO$_3$ scale in pipes. Explain, using $K_{sp}$ and $Q_{sp}$, two different ways to keep the scale from forming.',
        a: 'Scale forms when $Q_{sp}$ (which is $[\\text{Ca}^{2+}][\\text{CO}_3^{2-}]$) exceeds $K_{sp}$(CaCO$_3$). One way: remove Ca$^{2+}$ by ion exchange (a water softener swaps Ca$^{2+}$ for Na$^+$), lowering $[\\text{Ca}^{2+}]$ so $Q_{sp} < K_{sp}$. Another way: lower the pH slightly with acid, which adds a proton to CO$_3^{2-}$ to make HCO$_3^-$, lowering $[\\text{CO}_3^{2-}]$ so $Q_{sp} < K_{sp}$. Both keep the ion product below the solubility product, so no solid forms.'
      },
      {
        q: 'Transfer: Bone mineral is mainly hydroxyapatite, which contains hydroxide. Explain why an acidic environment (low pH) dissolves bone and tooth mineral.',
        a: 'Hydroxyapatite dissolution releases hydroxide and phosphate ions, both of which are basic anions. At low pH, H$_3$O$^+$ reacts with the released OH$^-$ to form water and adds a proton to phosphate. Removing these product ions drops $Q_{sp}$ below $K_{sp}$, so the dissolution equilibrium shifts right and more mineral dissolves. This is why acids from mouth bacteria cause tooth decay: the low pH strips the basic anions and the enamel dissolves.'
      },
      {
        q: 'Predict whether mixing 50 mL of $2.0 \\times 10^{-3}$ M AgNO$_3$ with 50 mL of $2.0 \\times 10^{-3}$ M NaCl gives a precipitate. $K_{sp}$(AgCl) $= 1.6 \\times 10^{-10}$.',
        a: 'Mixing equal volumes halves each concentration: $[\\text{Ag}^+] = 1.0 \\times 10^{-3}$ M and $[\\text{Cl}^-] = 1.0 \\times 10^{-3}$ M. $Q_{sp} = (1.0 \\times 10^{-3})(1.0 \\times 10^{-3}) = 1.0 \\times 10^{-6}$. Since $Q_{sp} = 1.0 \\times 10^{-6} \\gg K_{sp} = 1.6 \\times 10^{-10}$, AgCl precipitates. The first move, halving the concentrations for dilution, is essential before building $Q_{sp}$.'
      },
      {
        q: 'Elaborate: Adding solid NaF to a saturated CaF$_2$ solution makes some CaF$_2$ precipitate out. Explain why, using $K_{sp}$ and the common-ion effect.',
        a: 'NaF adds fluoride, a common ion shared with CaF$_2$. CaF$_2$ dissolves as $\\text{CaF}_2(s) \\rightleftharpoons \\text{Ca}^{2+} + 2\\,\\text{F}^-$, with $K_{sp} = [\\text{Ca}^{2+}][\\text{F}^-]^2$. Raising $[\\text{F}^-]$ pushes $Q_{sp}$ above $K_{sp}$, so the system shifts left and solid CaF$_2$ forms until $Q_{sp}$ falls back to $K_{sp}$. Because $K_{sp}$ is fixed, forcing fluoride up forces $[\\text{Ca}^{2+}]$ down, which means some calcium leaves solution as solid.'
      },
      {
        q: 'Self-explain: For a 1:2 salt, walk through every reason the relationship is $K_{sp} = 4s^3$ rather than $s^3$.',
        a: 'Let $s$ be the molar solubility. The salt is $\\text{MX}_2(s) \\rightleftharpoons \\text{M}^{2+} + 2\\,\\text{X}^-$. Each formula unit gives one M$^{2+}$ (so $[\\text{M}^{2+}] = s$) and two X$^-$ (so $[\\text{X}^-] = 2s$). The expression is $K_{sp} = [\\text{M}^{2+}][\\text{X}^-]^2 = (s)(2s)^2$. Squaring $2s$ gives $4s^2$. Multiplying by $s$ gives $4s^3$. The factor 4 is $2^2$, coming from squaring the coefficient 2 on the anion. Dropping the coefficient would wrongly give $s^3$.'
      },
      {
        q: 'Predict: You slowly add NaOH to a solution that is 0.010 M in both Fe$^{3+}$ and Mg$^{2+}$. $K_{sp}$(Fe(OH)$_3$) $= 2.0 \\times 10^{-39}$, $K_{sp}$(Mg(OH)$_2$) $= 1.1 \\times 10^{-11}$. Which hydroxide forms first and why?',
        a: 'Fe(OH)$_3$ forms first. Its $K_{sp}$ is enormously smaller, so it reaches its threshold at a far lower hydroxide concentration. For Fe(OH)$_3$: $[\\text{OH}^-] = \\left(\\frac{2.0 \\times 10^{-39}}{0.010}\\right)^{1/3} = 5.8 \\times 10^{-13}$ M. For Mg(OH)$_2$: $[\\text{OH}^-] = \\left(\\frac{1.1 \\times 10^{-11}}{0.010}\\right)^{1/2} = 3.3 \\times 10^{-5}$ M. Fe$^{3+}$ precipitates at a hydroxide concentration about 100 million times lower, so it comes out almost completely before Mg$^{2+}$ starts.'
      },
      {
        q: 'Method selection: You want the molar solubility of $\\text{Mg}_3(\\text{PO}_4)_2$ ($K_{sp} = 1.0 \\times 10^{-24}$). Set up the correct relationship between $K_{sp}$ and $s$.',
        a: 'Dissolving: $\\text{Mg}_3(\\text{PO}_4)_2(s) \\rightleftharpoons 3\\,\\text{Mg}^{2+} + 2\\,\\text{PO}_4^{3-}$. So $[\\text{Mg}^{2+}] = 3s$ and $[\\text{PO}_4^{3-}] = 2s$. The expression is $K_{sp} = (3s)^3(2s)^2 = 27s^3 \\cdot 4s^2 = 108\\,s^5$. So $s = \\left(\\frac{K_{sp}}{108}\\right)^{1/5} = \\left(\\frac{1.0 \\times 10^{-24}}{108}\\right)^{1/5} = (9.3 \\times 10^{-27})^{1/5} \\approx 6.2 \\times 10^{-6}$ mol/L. The constant 108 is $3^3 \\times 2^2$, the two coefficients raised to their own powers.'
      }
    ],
    reference: {
      category: 'Quick Reference',
      title: 'Solubility Product and the Common-Ion Effect',
      sections: [
        <>
          <h2>Core Relationships</h2>
          <div className="ref-formula">
            <div className="ref-formula-name">Solubility product definition</div>
            <div className="ref-formula-eq">{`$$\\text{M}_a\\text{X}_b(s) \\rightleftharpoons a\\,\\text{M}^{n+}(aq) + b\\,\\text{X}^{m-}(aq) \\quad K_{sp} = [\\text{M}^{n+}]^a[\\text{X}^{m-}]^b$$`}</div>
            <div className="ref-formula-desc">
              When to use: to write the equilibrium constant for any barely soluble salt. The pure
              solid is left out because its activity equals 1. Exponents equal the coefficients.
            </div>
          </div>
          <div className="ref-formula">
            <div className="ref-formula-name">Reaction quotient for precipitation</div>
            <div className="ref-formula-eq">{`$$Q_{sp} = [\\text{M}^{n+}]^a[\\text{X}^{m-}]^b \\;\\text{(actual concentrations)}$$`}</div>
            <div className="ref-formula-desc">
              When to use: to predict whether a precipitate forms. Build it from the actual
              concentrations at the moment of mixing, then compare with {`$K_{sp}$`}.
            </div>
          </div>
          <div className="ref-formula">
            <div className="ref-formula-name">Common-ion solubility</div>
            <div className="ref-formula-eq">{`$$[\\text{M}^+] = \\frac{K_{sp}}{[\\text{X}^-]_{\\text{common}}}$$`}</div>
            <div className="ref-formula-desc">
              When to use: for a 1:1 salt dissolving in a solution that already holds its anion at a
              fixed, dominant concentration. The dissolved cation concentration equals the
              solubility.
            </div>
          </div>
          <div className="ref-formula">
            <div className="ref-formula-name">Threshold ion to start precipitation</div>
            <div className="ref-formula-eq">{`$$[\\text{X}^-]_{\\text{start}} = \\left(\\frac{K_{sp}}{[\\text{M}^{n+}]}\\right)^{1/b}$$`}</div>
            <div className="ref-formula-desc">
              When to use: in selective precipitation, to find the partner-ion concentration at
              which each salt just begins to fall out. The smaller {`$K_{sp}$`} precipitates first.
            </div>
          </div>
        </>,
        <>
          <h2>Stoichiometry Cases: Ksp Versus Solubility</h2>
          <table>
            <thead>
              <tr>
                <th>Salt type</th>
                <th>Example</th>
                <th>
                  {`$K_{sp}$`} in terms of {`$s$`}
                </th>
                <th>
                  {`$s$`} from {`$K_{sp}$`}
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1:1</td>
                <td>AgCl</td>
                <td>{`$K_{sp} = s^2$`}</td>
                <td>{`$s = \\sqrt{K_{sp}}$`}</td>
              </tr>
              <tr>
                <td>1:2</td>
                <td>PbI₂, Ca(OH)₂</td>
                <td>{`$K_{sp} = 4s^3$`}</td>
                <td>{`$s = (K_{sp}/4)^{1/3}$`}</td>
              </tr>
              <tr>
                <td>2:1</td>
                <td>Ag₂CrO₄</td>
                <td>{`$K_{sp} = 4s^3$`}</td>
                <td>{`$s = (K_{sp}/4)^{1/3}$`}</td>
              </tr>
              <tr>
                <td>1:3</td>
                <td>Cr(IO₃)₃</td>
                <td>{`$K_{sp} = 27s^4$`}</td>
                <td>{`$s = (K_{sp}/27)^{1/4}$`}</td>
              </tr>
            </tbody>
          </table>
        </>,
        <>
          <h2>Q Versus Ksp Rule</h2>
          <table>
            <thead>
              <tr>
                <th>Comparison</th>
                <th>State of solution</th>
                <th>What happens</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{`$Q_{sp} < K_{sp}$`}</td>
                <td>Unsaturated</td>
                <td>No precipitate; more solid could dissolve</td>
              </tr>
              <tr>
                <td>{`$Q_{sp} = K_{sp}$`}</td>
                <td>Saturated</td>
                <td>At equilibrium; no net change</td>
              </tr>
              <tr>
                <td>{`$Q_{sp} > K_{sp}$`}</td>
                <td>Supersaturated</td>
                <td>Precipitate forms until {`$Q_{sp} = K_{sp}$`}</td>
              </tr>
            </tbody>
          </table>
        </>,
        <>
          <h2>Selected Solubility Products at 25°C</h2>
          <table>
            <thead>
              <tr>
                <th>Salt</th>
                <th>{`$K_{sp}$`}</th>
                <th>When relevant</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>AgCl</td>
                <td>{`$1.6 \\times 10^{-10}$`}</td>
                <td>Common-ion examples</td>
              </tr>
              <tr>
                <td>AgI</td>
                <td>{`$8.5 \\times 10^{-17}$`}</td>
                <td>Comparing silver halide solubilities</td>
              </tr>
              <tr>
                <td>Ag₂CrO₄</td>
                <td>{`$1.1 \\times 10^{-12}$`}</td>
                <td>2:1 stoichiometry worked example</td>
              </tr>
              <tr>
                <td>PbI₂</td>
                <td>{`$1.4 \\times 10^{-8}$`}</td>
                <td>Precipitation prediction</td>
              </tr>
              <tr>
                <td>Cr(IO₃)₃</td>
                <td>{`$5.0 \\times 10^{-6}$`}</td>
                <td>1:3 stoichiometry worked example</td>
              </tr>
              <tr>
                <td>Mg(OH)₂</td>
                <td>{`$1.1 \\times 10^{-11}$`}</td>
                <td>Selective precipitation, pH effect</td>
              </tr>
              <tr>
                <td>Ca(OH)₂</td>
                <td>{`$5.5 \\times 10^{-6}$`}</td>
                <td>Selective precipitation</td>
              </tr>
              <tr>
                <td>Fe(OH)₃</td>
                <td>{`$2.0 \\times 10^{-39}$`}</td>
                <td>Dissolving hydroxides in acid</td>
              </tr>
            </tbody>
          </table>
        </>
      ]
    }
  }
  return config
}

export default function SolubilityProductAndCommonIonEffect() {
  const config = useConfig()
  return <LearningTemplate config={config} />
}
