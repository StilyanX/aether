import { LearningTemplate } from '../../../../../components/learning/learning-template'
import {
  SystemTypesViz,
  ExpansionWorkViz,
  AdiabatIsothermViz,
  HeatCapacityDOFViz,
  HeatingCurveViz,
  HessLawViz,
  BondEnthalpyAccountingViz
} from '../../../../../components/viz'

export default function ThermochemistryAndEnergy() {
  const config = {
    cssPrefix: 'chem-thermochem',
    documentTitle: 'Thermochemistry and Energy - AETHER',
    learning: {
      category: 'Unit 3',
      groupTitle: 'Energetics and Thermodynamics',
      title: 'Thermochemistry and Energy',
      subtitle:
        "The First Law of Thermodynamics, expansion work, enthalpy, heat capacity, Hess's Law, and the temperature dependence of reaction enthalpies.",
      sections: [
        <>
          <div className="lrn-header">
            <h2>Systems and Energy: The Foundation</h2>
          </div>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              You dissolve ammonium nitrate in water. The beaker gets cold. Identify the system, the
              surroundings, and which type of boundary separates them.
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                The ammonium nitrate and water make up the system. Everything outside the beaker is
                the surroundings. The beaker wall is a closed boundary: energy crosses it but matter
                does not.
              </p>
            </details>
          </div>
          <p>
            A <strong>system</strong> is the part of the universe you choose to study. The{' '}
            <strong>surroundings</strong> are everything outside the system. The type of boundary
            controls what can cross it.
          </p>
          <ul className="lrn-list">
            <li>
              An <strong>open system</strong> exchanges both matter and energy with the
              surroundings. A boiling pot without a lid is open.
            </li>
            <li>
              A <strong>closed system</strong> exchanges energy but not matter. A sealed gas
              cylinder is closed.
            </li>
            <li>
              An <strong>isolated system</strong> exchanges neither matter nor energy. A perfect
              thermos flask approximates isolation.
            </li>
          </ul>
          <SystemTypesViz />
          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Open</span>
              <p>Energy and matter transfer. Example: boiling pot, lung.</p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Closed</span>
              <p>Energy only. Example: sealed piston, balloon.</p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Isolated</span>
              <p>Neither. Example: thermos flask (ideal).</p>
            </div>
          </div>
          <h3>State Functions and Path Functions</h3>
          <p>
            First, two words you will use all unit. A <strong>state function</strong> depends only
            on the current state of the system. Its change depends on the start and end points,
            never on the route between them. A <strong>path function</strong> is the opposite: its
            value depends on the exact route taken, not just the endpoints.
          </p>
          <h3>Work, Heat, and Internal Energy</h3>
          <p>
            Before defining heat, separate it from temperature. <strong>Temperature</strong> is how
            hot something is, set by the average kinetic energy of its particles.{' '}
            <strong>Heat</strong> is energy on the move because of a temperature difference. They
            are not the same thing.
          </p>
          <p>
            <strong>Work</strong> {`($w$)`} is energy transfer by motion against an opposing force.
            It is a path function.
          </p>
          <p>
            <strong>Heat</strong> {`($q$)`} is energy transfer driven by a temperature difference.
            Heat is also a path function.
          </p>
          <p>
            <strong>Internal energy</strong> {`($U$)`} is the total kinetic and potential energy of
            all particles in the system. Unlike {`$q$`} and {`$w$`}, internal energy is a{' '}
            <strong>state function</strong>. It depends only on the current state of the system, not
            on how you got there.
          </p>
          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Work {`$w$`}</span>
              <p>
                Organized, directed motion against an external force. A piston compressing a gas.
                Path function.
              </p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Heat {`$q$`}</span>
              <p>
                Disordered thermal motion passing from hotter to cooler. Random molecular
                collisions. Path function.
              </p>
            </div>
          </div>
          <h3>The First Law of Thermodynamics</h3>
          <p>
            The First Law states: energy cannot be created or destroyed. For a closed system, energy
            enters or leaves only as heat or work:
          </p>
          <p className="lrn-eq lrn-eq-hero">{`$$\\Delta U = q + w$$`}</p>
          <p>Sign conventions (IUPAC):</p>
          <ul className="lrn-list">
            <li>{`$q > 0$`}: heat flows into the system</li>
            <li>{`$q < 0$`}: heat flows out of the system</li>
            <li>{`$w > 0$`}: work is done on the system</li>
            <li>{`$w < 0$`}: the system does work on the surroundings</li>
          </ul>
          <h3>Endothermic and Exothermic Reactions</h3>
          <p>
            An <strong>exothermic</strong> reaction releases heat to the surroundings. Its products
            sit at lower energy than its reactants, so {`$\\Delta H < 0$`}. A burning fuel is
            exothermic.
          </p>
          <p>
            An <strong>endothermic</strong> reaction absorbs heat from the surroundings. Its
            products sit at higher energy than its reactants, so {`$\\Delta H > 0$`}. Dissolving
            ammonium nitrate, which chills the beaker, is endothermic.
          </p>
          <figure className="lrn-figure">
            <svg
              viewBox="0 0 640 240"
              role="img"
              aria-label="Energy-level diagrams. Left: exothermic, products lower than reactants, energy released. Right: endothermic, products higher than reactants, energy absorbed."
              style={{ width: '100%', height: 'auto' }}
            >
              <g fill="none" stroke="rgba(240,240,250,0.85)" strokeWidth="2" strokeLinecap="square">
                {/* axes, exothermic (left) */}
                <line x1="40" y1="20" x2="40" y2="210" stroke="rgba(240,240,250,0.3)" />
                <line x1="40" y1="210" x2="290" y2="210" stroke="rgba(240,240,250,0.3)" />
                {/* reactant level high, product level low */}
                <line x1="70" y1="70" x2="150" y2="70" />
                <line x1="180" y1="160" x2="260" y2="160" />
                {/* drop arrow */}
                <line x1="225" y1="72" x2="225" y2="158" stroke="rgba(240,240,250,0.6)" />
                <polyline points="219,148 225,160 231,148" stroke="rgba(240,240,250,0.6)" />

                {/* axes, endothermic (right) */}
                <line x1="380" y1="20" x2="380" y2="210" stroke="rgba(240,240,250,0.3)" />
                <line x1="380" y1="210" x2="630" y2="210" stroke="rgba(240,240,250,0.3)" />
                {/* reactant level low, product level high */}
                <line x1="410" y1="160" x2="490" y2="160" />
                <line x1="520" y1="70" x2="600" y2="70" />
                {/* rise arrow */}
                <line x1="565" y1="158" x2="565" y2="72" stroke="rgba(240,240,250,0.6)" />
                <polyline points="559,82 565,70 571,82" stroke="rgba(240,240,250,0.6)" />
              </g>
              <g
                fill="rgba(240,240,250,0.9)"
                fontFamily="var(--reader-font-family, sans-serif)"
                fontSize="13"
              >
                <text x="75" y="62">
                  Reactants
                </text>
                <text x="185" y="178">
                  Products
                </text>
                <text x="235" y="120">
                  ΔH &lt; 0
                </text>
                <text x="90" y="232" fontSize="14">
                  Exothermic
                </text>

                <text x="415" y="152">
                  Reactants
                </text>
                <text x="525" y="62">
                  Products
                </text>
                <text x="575" y="120">
                  ΔH &gt; 0
                </text>
                <text x="425" y="232" fontSize="14">
                  Endothermic
                </text>
              </g>
              <g
                fill="rgba(240,240,250,0.5)"
                fontFamily="var(--reader-font-family, sans-serif)"
                fontSize="12"
              >
                <text x="14" y="120" transform="rotate(-90 14 120)">
                  Energy
                </text>
                <text x="354" y="120" transform="rotate(-90 354 120)">
                  Energy
                </text>
              </g>
            </svg>
            <figcaption>
              Energy-level diagrams. An exothermic reaction drops to lower-energy products and
              releases heat. An endothermic reaction climbs to higher-energy products and absorbs
              heat.
            </figcaption>
          </figure>
          <div className="lrn-steps">
            <div className="lrn-step">
              <span className="lrn-step-title">Worked Example: Electric Motor</span>
              <p className="lrn-step-content">
                A motor produces 15 kJ of work and loses 2 kJ of heat. The system does work on the
                surroundings: {`$w = -15 \\text{ kJ}$`}. The system loses heat:{' '}
                {`$q = -2 \\text{ kJ}$`}.
              </p>
              <p className="lrn-step-content">{`$$\\Delta U = q + w = -2 + (-15) = -17 \\text{ kJ}$$`}</p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">Worked Example: Wound Spring</span>
              <p className="lrn-step-content">
                A spring stores 100 J of work and releases 15 J as heat. Work done on the spring:{' '}
                {`$w = +100 \\text{ J}$`}. Spring loses heat: {`$q = -15 \\text{ J}$`}.
              </p>
              <p className="lrn-step-content">{`$$\\Delta U = -15 + 100 = +85 \\text{ J}$$`}</p>
            </div>
          </div>
          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>
              {`Why does the motor have $w = -15 \\text{ kJ}$ rather than $+15 \\text{ kJ}$, even though we supplied energy to run it?`}
            </p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                The sign convention tracks the system's perspective. The motor is the system. When
                the motor outputs mechanical work, that energy leaves the system. Energy leaving the
                system is negative. The 15 kJ was produced by the motor, not received by it, so{' '}
                {`$w = -15 \\text{ kJ}$`}.
              </p>
            </details>
          </div>
          <h3>Diathermic and Adiabatic Walls</h3>
          <p>
            A <strong>diathermic</strong> wall permits heat to flow. Metal walls are diathermic.
          </p>
          <p>
            An <strong>adiabatic</strong> wall blocks heat transfer. When a wall is adiabatic,{' '}
            {`$q = 0$`}. The First Law simplifies to {`$\\Delta U = w$`}. Any change in internal
            energy must come from work alone.
          </p>
          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>
              The First Law is conservation of energy applied to a closed system. The system has no
              way to gain or lose energy except as heat or work across its boundary.
            </p>
            <p>
              This is why a perpetual motion machine is impossible. You cannot use a system to do
              work, return it to its start, and find extra energy to spare. The books always
              balance.
            </p>
          </div>
        </>,

        <>
          <div className="lrn-header">
            <h2>Expansion Work</h2>
          </div>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              You push a piston to compress a gas at constant external pressure of 2.0 atm, reducing
              the volume by 3.0 L. Predict whether the work is positive or negative and estimate its
              value.
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                {`Work is done on the system (compression), so $w > 0$. Estimate: $w = -p_{ex}\\Delta V = -(2.0)(- 3.0) \\times 101.3 \\approx +608 \\text{ J}$.`}
              </p>
            </details>
          </div>
          <p>
            {`For a gas expanding against a constant external pressure $p_{ex}$ over a volume change $\\Delta V$:`}
          </p>
          <p className="lrn-eq lrn-eq-hero">{`$$w = -p_{ex}\\,\\Delta V$$`}</p>
          <p>
            {`Units: pressure in Pa, volume in m³ gives joules (1 Pa·m³ = 1 J). To convert: 1 L·atm = 101.3 J.`}
          </p>
          <p>
            {`When the system expands ($\\Delta V > 0$), energy leaves as work ($w < 0$). When compressed ($\\Delta V < 0$), surroundings do work on the system ($w > 0$).`}
          </p>
          <p>
            {`Plot pressure against volume. The work magnitude equals the area under the $p_{ex}$ line between $V_i$ and $V_f$.`}
          </p>
          <ExpansionWorkViz />
          <div className="lrn-steps">
            <div className="lrn-step">
              <span className="lrn-step-title">
                Worked Example: Iron Reacting with Hydrochloric Acid
              </span>
              <p className="lrn-step-content">
                {`Iron reacts with HCl and produces 2.00 dm³ of H₂ gas at $p_{ex} = 100 \\text{ kPa}$. Note 1 dm³ = 1 L = $10^{-3}$ m³.`}
              </p>
              <p className="lrn-step-content">
                {`$w = -p_{ex}\\Delta V = -(100 \\times 10^3)(2.00 \\times 10^{-3}) = -200 \\text{ J}$`}
              </p>
              <p className="lrn-step-content">The system does 200 J of work on the surroundings.</p>
            </div>
          </div>
          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>The pressure is labeled "external", why does that matter here?</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                {`The work done during expansion is set by what the gas must push against: the external pressure. The force the surroundings resist is $p_{ex}$, so that enters the formula. The internal pressure of the gas only matters for reversible processes, where it equals $p_{ex}$ at every instant.`}
              </p>
            </details>
          </div>
          <h3>Free Expansion</h3>
          <p>
            {`When the gas expands into a vacuum, $p_{ex} = 0$. There is nothing to push against, so no work is done:`}
          </p>
          <p className="lrn-eq">{`$$w = 0$$`}</p>
          <p>
            {`If the walls are also adiabatic, $q = 0$ too, so $\\Delta U = 0$. For a perfect gas, $T$ then stays constant. For a real gas, the molecules move apart and the temperature can change, because real molecules attract each other.`}
          </p>
          <h3>Reversible Expansion</h3>
          <p>
            A reversible process is one you could reverse by a tiny change in conditions. During a
            reversible expansion, the external pressure matches the gas's own pressure at every
            stage.
          </p>
          <p>
            <strong>Reversible processes set the maximum work you can get.</strong> Real
            (irreversible) processes always extract less work.
          </p>
          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>
              In a reversible expansion, the gas pushes against the largest pressure it possibly
              can: its own internal pressure, matched at every instant.
            </p>
            <p>
              Push against a lower outside pressure and you waste some of the gas's pushing power.
              So no real process can ever beat the reversible work. It is the ceiling.
            </p>
          </div>
          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Reversible Expansion</span>
              <p>
                {`External pressure equals the gas pressure at every step. Work magnitude: the maximum possible for those endpoints.`}
              </p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Irreversible Expansion</span>
              <p>
                {`Constant external pressure below the gas pressure. Formula: $w = -p_{ex}\\Delta V$. Work magnitude: less than reversible.`}
              </p>
            </div>
          </div>
          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>
              {`Two paths take an ideal gas from the same start to the same end at constant $T$, so both give $\\Delta U = 0$. Yet $q$ and $w$ differ between them. What property explains why $\\Delta U$ must be the same?`}
            </p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                {`Internal energy $U$ is a state function. Its value depends only on the current state, not on how the system got there. Both paths start and end at the same two states, so $\\Delta U$ must be the same. The individual contributions from $q$ and $w$ differ between paths, but they always add to the same $\\Delta U$.`}
              </p>
            </details>
          </div>
        </>,

        <>
          <div className="lrn-header">
            <h2>Enthalpy: Heat at Constant Pressure</h2>
          </div>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              You dissolve NaOH pellets in water in an open beaker. The beaker gets hot. Will your
              calorimeter measure {`$\\Delta U$`} or {`$\\Delta H$`}? Predict which quantity is
              larger.
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                {`An open beaker is at constant atmospheric pressure, so the calorimeter measures $q_p = \\Delta H$. For this solution reaction with no gases, $\\Delta H \\approx \\Delta U$.`}
              </p>
            </details>
          </div>
          <p>{`Enthalpy $H$ is defined as:`}</p>
          <p className="lrn-eq lrn-eq-hero">{`$$H = U + pV$$`}</p>
          <p>
            {`$H$ is a state function because $U$, $p$, and $V$ are all state functions. Use enthalpy for any reaction at constant pressure, which covers nearly all lab reactions in open vessels.`}
          </p>
          <div className="lrn-steps">
            <div className="lrn-step">
              <span className="lrn-step-title">Why {`$\\Delta H = q$`} at Constant Pressure</span>
              <p className="lrn-step-content">
                {`Step 1: Take the change in $H = U + pV$ at constant pressure. The volume can change but the pressure does not, so $\\Delta H = \\Delta U + p\\,\\Delta V$.`}
              </p>
              <p className="lrn-step-content">
                {`Step 2: From the First Law, $\\Delta U = q + w$. At constant pressure the only work is expansion work, $w = -p\\,\\Delta V$. So $\\Delta U = q - p\\,\\Delta V$.`}
              </p>
              <p className="lrn-step-content">
                {`Step 3: Substitute into Step 1: $\\Delta H = (q - p\\,\\Delta V) + p\\,\\Delta V = q$. The expansion-work terms cancel.`}
              </p>
              <p className="lrn-step-content">{`Result: $\\Delta H = q_p$, the heat exchanged at constant pressure.`}</p>
            </div>
          </div>
          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>
              {`Enthalpy absorbs the "pressure-volume tax." When a reaction at constant pressure expands the gas, the system must push back the atmosphere. $\\Delta H$ automatically includes this cost. It tells you the heat exchanged directly, without a separate correction for atmospheric expansion work.`}
            </p>
          </div>
          <h3>
            Relation Between {`$\\Delta H$`} and {`$\\Delta U$`}
          </h3>
          <p>
            {`To count gas moles you need a balanced equation: one with the same number of each atom on both sides. The number in front of each formula is its stoichiometric coefficient, written $\\nu$ (nu). In $3\\text{H}_2 + \\text{N}_2 \\to 2\\text{NH}_3$, the coefficients are 3, 1, and 2.`}
          </p>
          <p>
            {`For gases, the ideal gas law $pV = nRT$ (with $R = 8.314 \\text{ J mol}^{-1}\\text{K}^{-1}$) turns the $p\\,\\Delta V$ term into $\\Delta n_g RT$:`}
          </p>
          <p className="lrn-eq lrn-eq-hero">{`$$\\Delta H = \\Delta U + \\Delta n_g RT$$`}</p>
          <p>
            {`where $\\Delta n_g$ = moles of gaseous products minus moles of gaseous reactants, read straight off the coefficients.`}
          </p>
          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Internal Energy {`$U$`}</span>
              <p>
                {`Total energy of all particles. Measured directly by bomb calorimeter (constant $V$). Equals heat when volume is constant: $q_V = \\Delta U$.`}
              </p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">{`Enthalpy $H = U + pV$`}</span>
              <p>
                {`Measured by open calorimeter (constant $p$). Equals heat when pressure is constant: $q_p = \\Delta H$. Preferred for lab reactions.`}
              </p>
            </div>
          </div>
          <div className="lrn-steps">
            <div className="lrn-step">
              <span className="lrn-step-title">Worked Example: Ammonia Synthesis</span>
              <p className="lrn-step-content">
                {`$$3\\text{H}_2(g) + \\text{N}_2(g) \\to 2\\text{NH}_3(g)$$`}
              </p>
              <p className="lrn-step-content">{`$\\Delta n_g = 2 - (3 + 1) = -2$`}</p>
              <p className="lrn-step-content">
                {`$$\\Delta H_m - \\Delta U_m = (-2)(8.314)(298) = -4955 \\text{ J mol}^{-1} \\approx -5.0 \\text{ kJ mol}^{-1}$$`}
              </p>
            </div>
          </div>
          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>
              {`Why does a negative $\\Delta n_g$ make $\\Delta H$ more negative than $\\Delta U$?`}
            </p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                {`When $\\Delta n_g < 0$, the reaction destroys more gas moles than it creates. The final gas mixture occupies less volume. The atmosphere effectively does work on the shrinking gas. That compression work adds energy to the system from outside, which makes $\\Delta H$ more negative than $\\Delta U$ by the amount $\\Delta n_g RT$.`}
              </p>
            </details>
          </div>
          <h3>Measuring Enthalpy with Calorimeters</h3>
          <p>
            {`Calorimetry gives a total heat. To report it per mole, you convert the weighed mass into moles. Use $n = \\frac{m}{M}$, where $m$ is the mass in grams and $M$ is the molar mass in g mol⁻¹. Add up the atomic masses in the formula to get $M$; for benzene, $\\text{C}_6\\text{H}_6$, that is $M = 78.11 \\text{ g mol}^{-1}$.`}
          </p>
          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Bomb Calorimeter</span>
              <p>
                {`Sealed, rigid vessel. Volume is constant. Measures $q_V = \\Delta U$. Best for combustion reactions. Convert via $\\Delta H = \\Delta U + \\Delta n_g RT$. An adiabatic outer bath tracks the calorimeter temperature, so no heat leaks to the surroundings.`}
              </p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Isobaric Calorimeter</span>
              <p>
                {`Open to atmosphere. Pressure constant. Measures $q_p = \\Delta H$ directly. Best for solution reactions.`}
              </p>
            </div>
          </div>
          <div className="lrn-steps">
            <div className="lrn-step">
              <span className="lrn-step-title">Worked Example: Benzene Combustion</span>
              <p className="lrn-step-content">
                {`0.113 g benzene burns. The calorimeter constant $C_{cal} = 551 \\text{ J °C}^{-1}$ is the heat needed to warm the whole apparatus by 1°C. Temperature rises 8.60°C.`}
              </p>
              <p className="lrn-step-content">
                {`Step 1: $q = C_{cal}\\cdot\\Delta T = (551)(8.60) = 4738 \\text{ J}$`}
              </p>
              <p className="lrn-step-content">
                {`Step 2: $n = \\frac{0.113}{78.11} = 1.447 \\times 10^{-3} \\text{ mol}$`}
              </p>
              <p className="lrn-step-content">
                {`Step 3: For 2 mol: $\\Delta H = 2 \\times \\frac{4.738}{1.447 \\times 10^{-3}} = 6548 \\text{ kJ}$, so $\\Delta H_c^\\circ \\approx -6.55 \\text{ MJ mol}^{-1}$`}
              </p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">Worked Example: Glucose in Bomb Calorimeter</span>
              <p className="lrn-step-content">
                {`$$\\text{C}_6\\text{H}_{12}\\text{O}_6(s) + 6\\text{O}_2(g) \\to 6\\text{CO}_2(g) + 6\\text{H}_2\\text{O}(l)$$`}
              </p>
              <p className="lrn-step-content">
                {`$\\Delta U = -2559 \\text{ kJ}$. Gas moles: $\\Delta n_g = 6 - 6 = 0$.`}
              </p>
              <p className="lrn-step-content">
                {`$$\\Delta H = -2559 + (0)(8.314 \\times 10^{-3})(298) = -2559 \\text{ kJ}$$`}
              </p>
            </div>
          </div>
          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>
              The bomb calorimeter is sealed and rigid, why does that mean it measures{' '}
              {`$\\Delta U$`} rather than {`$\\Delta H$`}?
            </p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                {`A sealed rigid container has constant volume. No expansion work is possible ($\\Delta V = 0$, so $w = 0$). With $w = 0$, the First Law gives $\\Delta U = q$. All energy exchanged is heat at constant volume, so the calorimeter directly measures $\\Delta U$.`}
              </p>
            </details>
          </div>
        </>,

        <>
          <div className="lrn-header">
            <h2>Heat Capacity</h2>
          </div>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              {`You heat 0.900 mol O₂ with 500 J at constant volume. Predict whether the temperature rise is larger or smaller at constant pressure, and why.`}
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                The rise is larger at constant volume. At constant pressure, some energy leaves as
                expansion work, so less energy goes into raising temperature.
              </p>
            </details>
          </div>
          <p>
            {`Heat capacity $C$ is the energy needed to raise the temperature of a system by 1 K:`}
          </p>
          <p className="lrn-eq">{`$$q = C\\,\\Delta T$$`}</p>
          <p>
            <strong>Specific heat capacity</strong> {`$C_s$`} is per gram:{' '}
            {`$q = mC_s\\,\\Delta T$`}. <strong>Molar heat capacity</strong> {`$C_m$`} is per mole:{' '}
            {`$q = nC_m\\,\\Delta T$`}.
          </p>
          <div className="lrn-steps">
            <div className="lrn-step">
              <span className="lrn-step-title">Worked Example: Heating a Glass of Water</span>
              <p className="lrn-step-content">
                {`How much heat warms 250 g of water from 20°C to 40°C? Water has $C_s = 4.18 \\text{ J g}^{-1}\\text{K}^{-1}$.`}
              </p>
              <p className="lrn-step-content">
                {`The temperature change is $\\Delta T = 40 - 20 = 20 \\text{ K}$. A change of 20°C is a change of 20 K, since both scales rise in equal steps.`}
              </p>
              <p className="lrn-step-content">
                {`$$q = mC_s\\,\\Delta T = (250)(4.18)(20) = 20{,}900 \\text{ J} = 20.9 \\text{ kJ}$$`}
              </p>
              <p className="lrn-step-content">
                Warming the water by 20 degrees takes 20.9 kJ. Water's large specific heat is why it
                is slow to heat and slow to cool.
              </p>
            </div>
          </div>
          <h3>Heat Capacity at Constant Volume vs Constant Pressure</h3>
          <p>
            How you heat a gas matters. Hold the volume fixed and all the heat raises temperature:{' '}
            {`$\\Delta U = C_V\\,\\Delta T$`}. Hold the pressure fixed and the gas also expands and
            does work, so it needs more heat for the same temperature rise:{' '}
            {`$\\Delta H = C_p\\,\\Delta T$`}.
          </p>
          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">{`$C_V$`} (Constant Volume)</span>
              <p>
                {`Energy to raise $T$ with no expansion. $\\Delta U = C_V\\,\\Delta T$. Smaller for gases.`}
              </p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">{`$C_p$`} (Constant Pressure)</span>
              <p>
                {`Energy to raise $T$ including expansion work. $\\Delta H = C_p\\,\\Delta T$. Larger for gases. $C_p - C_V = nR$.`}
              </p>
            </div>
          </div>
          <div className="lrn-faded">
            <div className="lrn-faded-phase">
              <span className="lrn-faded-label">COMPLETE EXAMPLE</span>
              <p>
                {`Why is $C_p - C_V = nR$ for a perfect gas? Start from $H = U + pV = U + nRT$. Raising the temperature by $\\Delta T$ raises $H$ by $C_p\\,\\Delta T$ and $U$ by $C_V\\,\\Delta T$. The extra $nRT$ term adds $nR\\,\\Delta T$. So $C_p\\,\\Delta T = C_V\\,\\Delta T + nR\\,\\Delta T$, which gives $C_p - C_V = nR$. The gap $nR$ is the expansion work the gas does at constant pressure.`}
              </p>
            </div>
            <div className="lrn-faded-phase">
              <span className="lrn-faded-label">INDEPENDENT PRACTICE</span>
              <p>
                {`500 J is added to 0.900 mol O₂ at 298 K. At constant volume, $C_{V,m} = \\frac{5}{2}R = 20.79 \\text{ J K}^{-1}\\text{mol}^{-1}$; at constant pressure, $C_{p,m} = \\frac{7}{2}R = 29.10 \\text{ J K}^{-1}\\text{mol}^{-1}$. Find $\\Delta T$ for each case. Which is larger, and why?`}
              </p>
              <details className="lrn-self-explain-reveal">
                <summary>Check your answer</summary>
                <ol className="lrn-list">
                  <li>
                    {`Constant volume: $C_V = (0.900)(20.79) = 18.71 \\text{ J K}^{-1}$. $\\Delta T = \\frac{500}{18.71} = +26.7 \\text{ K}$.`}
                  </li>
                  <li>
                    {`Constant pressure: $C_p = (0.900)(29.10) = 26.19 \\text{ J K}^{-1}$. $\\Delta T = \\frac{500}{26.19} = +19.1 \\text{ K}$.`}
                  </li>
                  <li>
                    The constant-volume rise is larger. At constant pressure some energy leaves as
                    expansion work, so less is left to raise the temperature.
                  </li>
                </ol>
              </details>
            </div>
          </div>
          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>
              {`At constant pressure, $\\Delta U = +357 \\text{ J}$ even though 500 J was added. Where did the other 143 J go?`}
            </p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                {`At constant pressure, the gas expands and does $p\\,\\Delta V$ work on the surroundings. That work energy leaves the system. The 143 J difference is exactly the expansion work: $w = -nR\\,\\Delta T = -(0.900)(8.314)(19.1) \\approx -143 \\text{ J}$.`}
              </p>
            </details>
          </div>
          <h3>Why Some Gases Store More Heat</h3>
          <p>
            A molecule with more ways to move stores more energy at a given temperature, so it has a
            larger heat capacity. A single argon atom can only fly in straight lines. A water
            molecule can also tumble and spin, so it soaks up more energy per degree.
          </p>
          <HeatCapacityDOFViz />
          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>
              Each extra way to move is one more bucket that fills as you heat the gas. More buckets
              means more energy goes in before the temperature climbs by a full degree.
            </p>
            <p>
              This is why complex molecules have larger heat capacities. A water molecule can spin
              three ways, so it soaks up more energy per degree than a single argon atom that can
              only fly straight.
            </p>
          </div>
          <h3>Measuring Heat Capacity Directly</h3>
          <div className="lrn-steps">
            <div className="lrn-step">
              <span className="lrn-step-title">Worked Example: 55 W Heater</span>
              <p className="lrn-step-content">
                {`A 55 W heater runs for 120 s in a constant-volume container. Temperature rises by 5.0°C.`}
              </p>
              <p className="lrn-step-content">
                {`$q = P \\cdot t = 55 \\times 120 = 6600 \\text{ J}$`}
              </p>
              <p className="lrn-step-content">
                {`$C_V = \\frac{q}{\\Delta T} = \\frac{6600}{5.0} = 1320 \\text{ J K}^{-1} = 1.3 \\text{ kJ K}^{-1}$`}
              </p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">Worked Example: Electrical Heating</span>
              <p className="lrn-step-content">
                {`Current $I = 10.0 \\text{ A}$, potential $\\Delta\\varphi = 12 \\text{ V}$, time $t = 300 \\text{ s}$. Temperature rises 5.5 K.`}
              </p>
              <p className="lrn-step-content">
                {`$q = I \\cdot t \\cdot \\Delta\\varphi = (10.0)(300)(12) = 36000 \\text{ J}$`}
              </p>
              <p className="lrn-step-content">
                {`$C = \\frac{36000}{5.5} = 6545 \\text{ J K}^{-1} = 6.5 \\text{ kJ K}^{-1}$`}
              </p>
            </div>
          </div>
          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>
              What does the calorimeter constant represent physically, and why does it include not
              just the water but the entire apparatus?
            </p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                {`The calorimeter constant $C_{cal}$ is the total heat capacity of everything that heats up when the reaction fires: the water, the metal bomb, the thermometer, the stirrer, and any other hardware. If you only accounted for the water, you would undercount the absorbed heat. The calorimeter constant bundles all absorbers into one number.`}
              </p>
            </details>
          </div>
        </>,

        <>
          <div className="lrn-header">
            <h2>Standard Enthalpies and Hess's Law</h2>
          </div>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              You want to find the standard enthalpy of formation of propane. You cannot form
              propane directly from C and H₂ in the lab. What strategy would you use?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                Use combustion enthalpies of propane, carbon, and hydrogen gas. Combine them via
                Hess's Law to reconstruct the formation enthalpy, even though the direct synthesis
                is inaccessible.
              </p>
            </details>
          </div>
          <p>
            A substance is in its <strong>standard state</strong> when it is in its pure form at 1
            bar pressure. The <strong>standard enthalpy change</strong> {`$\\Delta H^\\circ$`}{' '}
            applies when all reactants and products are in their standard states.
          </p>
          <p>
            A <strong>thermochemical equation</strong> writes a balanced reaction beside its{' '}
            {`$\\Delta H$`}. The value belongs to the exact amounts shown.
          </p>
          <p>
            {`Scale the equation and you scale $\\Delta H$. Double every coefficient and $\\Delta H$ doubles. Reverse the equation and $\\Delta H$ flips sign.`}
          </p>
          <h3>Enthalpies of Physical Change</h3>
          <ul className="lrn-list">
            <li>
              {`$\\Delta_{vap} H^\\circ$`}: enthalpy to vaporize 1 mol liquid to gas at 1 bar.
            </li>
            <li>{`$\\Delta_{fus} H^\\circ$`}: enthalpy to melt 1 mol solid to liquid at 1 bar.</li>
            <li>
              {`$\\Delta_{sub} H^\\circ = \\Delta_{fus} H^\\circ + \\Delta_{vap} H^\\circ$`} (solid
              directly to gas).
            </li>
          </ul>
          <p>
            Heat a solid steadily and plot temperature against heat added. You get a heating curve
            with flat steps.
          </p>
          <p>
            {`Temperature climbs until melting starts. It stays flat while $\\Delta_{fus} H$ is absorbed, climbs again, then stays flat at the boiling point while $\\Delta_{vap} H$ is absorbed.`}
          </p>
          <p>
            During each plateau, added heat breaks intermolecular forces instead of raising
            temperature. This hidden heat, absorbed at a steady temperature to change state, is
            called the <strong>latent heat</strong>. The plateau length measures it.
          </p>
          <HeatingCurveViz />
          <p>
            The reverse process has the opposite sign:{' '}
            {`$\\Delta H_{reverse} = -\\Delta H_{forward}$`}. This follows from {`$H$`} being a
            state function.
          </p>
          <div className="lrn-steps">
            <div className="lrn-step">
              <span className="lrn-step-title">Worked Example: Enthalpy of Vaporization</span>
              <p className="lrn-step-content">
                {`Water vaporizes with $I = 0.50 \\text{ A}$, $V = 12 \\text{ V}$, $t = 300 \\text{ s}$. Mass vaporized = 0.798 g.`}
              </p>
              <p className="lrn-step-content">
                {`$q = (0.50)(12)(300) = 1800 \\text{ J}$. $n = \\frac{0.798}{18.015} = 0.04430 \\text{ mol}$.`}
              </p>
              <p className="lrn-step-content">
                {`$$\\Delta_{vap} H_m = \\frac{1800}{0.04430} = +41 \\text{ kJ mol}^{-1}$$`}
              </p>
            </div>
          </div>
          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>
              {`The result is positive ($+41 \\text{ kJ mol}^{-1}$). Why must every enthalpy of vaporization be positive?`}
            </p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                Vaporizing pulls molecules out of a liquid, where they attract each other, into a
                gas, where they fly free. Breaking those attractions takes energy.
              </p>
              <p>
                Energy goes into the system, so {`$\\Delta_{vap} H > 0$`} always. The reverse,
                condensation, releases the same energy and carries a negative sign.
              </p>
            </details>
          </div>
          <h3>A Taxonomy of Standard Enthalpy Changes</h3>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Symbol</th>
                <th>What it measures</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Enthalpy of fusion</td>
                <td>{`$\\Delta_{fus} H^\\circ$`}</td>
                <td>Solid to liquid</td>
              </tr>
              <tr>
                <td>Enthalpy of vaporization</td>
                <td>{`$\\Delta_{vap} H^\\circ$`}</td>
                <td>Liquid to gas</td>
              </tr>
              <tr>
                <td>Enthalpy of sublimation</td>
                <td>{`$\\Delta_{sub} H^\\circ$`}</td>
                <td>Solid to gas</td>
              </tr>
              <tr>
                <td>Enthalpy of solution</td>
                <td>{`$\\Delta_{sol} H^\\circ$`}</td>
                <td>Dissolving 1 mol in large amount of solvent</td>
              </tr>
              <tr>
                <td>Enthalpy of hydration</td>
                <td>{`$\\Delta_{hyd} H^\\circ$`}</td>
                <td>Gaseous ions dissolving in water</td>
              </tr>
              <tr>
                <td>Enthalpy of atomization</td>
                <td>{`$\\Delta_{at} H^\\circ$`}</td>
                <td>Breaking 1 mol substance into gaseous atoms</td>
              </tr>
              <tr>
                <td>Enthalpy of combustion</td>
                <td>{`$\\Delta_c H^\\circ$`}</td>
                <td>Burning 1 mol to CO₂(g) and H₂O(l)</td>
              </tr>
              <tr>
                <td>Enthalpy of formation</td>
                <td>{`$\\Delta_f H^\\circ$`}</td>
                <td>Forming 1 mol compound from elements in reference states</td>
              </tr>
              <tr>
                <td>Lattice enthalpy</td>
                <td>{`$\\Delta H_L$`}</td>
                <td>Separating 1 mol ionic solid into gaseous ions</td>
              </tr>
            </tbody>
          </table>
          <h3>Hess's Law</h3>
          <p>
            Hess's Law states: the standard reaction enthalpy equals the sum of the enthalpies of
            individual steps. It works because {`$\\Delta H$`} is a state function. The total{' '}
            {`$\\Delta H$`} depends only on the starting reactants and the final products, not on
            the steps between. Any sequence that converts the same reactants to the same products
            gives the same total. When you reverse a step in the chain, flip its sign:{' '}
            {`$\\Delta H_{reverse} = -\\Delta H_{forward}$`}.
          </p>
          <HessLawViz />
          <div className="lrn-faded">
            <div className="lrn-faded-phase">
              <span className="lrn-faded-label">COMPLETE EXAMPLE</span>
              <p>Find {`$\\Delta_c H^\\circ$`} for propene using three known reactions:</p>
              <ol className="lrn-list">
                <li>{`Hydrogenation of propene: $\\Delta H_1 = -124 \\text{ kJ mol}^{-1}$`}</li>
                <li>{`Combustion of propane: $\\Delta H_2 = -2220 \\text{ kJ mol}^{-1}$`}</li>
                <li>{`Reverse water formation: $\\Delta H_3 = +286 \\text{ kJ mol}^{-1}$`}</li>
              </ol>
              <p>
                {`Sum: $\\Delta_c H^\\circ = -124 + (-2220) + 286 = -2058 \\text{ kJ mol}^{-1}$`}
              </p>
            </div>
            <div className="lrn-faded-phase">
              <span className="lrn-faded-label">YOUR TURN, PARTIAL</span>
              <p>
                {`The three component reactions and the target are given. Write the arrow for each step, assign the correct sign to each $\\Delta H$, and sum to find $\\Delta_c H^\\circ$.`}
              </p>
            </div>
          </div>
          <h3>Standard Enthalpies of Formation</h3>
          <p>
            {`$\\Delta_f H^\\circ = 0$`} for all elements in their reference states. Use{' '}
            {`$\\Delta_f H^\\circ$`} to calculate {`$\\Delta_r H^\\circ$`} for any reaction:
          </p>
          <p className="lrn-eq lrn-eq-hero">{`$$\\Delta_r H^\\circ = \\sum \\nu\\,\\Delta_f H^\\circ(\\text{products}) - \\sum \\nu\\,\\Delta_f H^\\circ(\\text{reactants})$$`}</p>
          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>
              The formula subtracts reactant formation enthalpies. What chemical "path" does this
              formula imagine?
            </p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                {`The formula imagines breaking down each reactant back into its pure elements (costing $-\\sum \\nu\\,\\Delta_f H^\\circ(\\text{reactants})$, the reverse of forming them). Then it imagines assembling each product from those same elements ($+\\sum \\nu\\,\\Delta_f H^\\circ(\\text{products})$). The net enthalpy is the direct reaction enthalpy. This imaginary path works because $H$ is a state function.`}
              </p>
            </details>
          </div>
          <div className="lrn-steps">
            <div className="lrn-step">
              <span className="lrn-step-title">Worked Example: Combustion Enthalpy of Methane</span>
              <p className="lrn-step-content">
                {`$\\text{CH}_4(g) + 2\\,\\text{O}_2(g) \\to \\text{CO}_2(g) + 2\\,\\text{H}_2\\text{O}(l)$. Tabulated $\\Delta_f H^\\circ$ in $\\text{kJ mol}^{-1}$: $\\text{CH}_4 = -74.8$, $\\text{CO}_2 = -393.5$, $\\text{H}_2\\text{O}(l) = -285.8$, $\\text{O}_2 = 0$.`}
              </p>
              <p className="lrn-step-content">
                {`$\\Delta_r H^\\circ = [(-393.5) + 2(-285.8)] - [(-74.8) + 0]$`}
              </p>
              <p className="lrn-step-content">
                {`$$\\Delta_r H^\\circ = -965.1 + 74.8 = -890.3 \\text{ kJ mol}^{-1}$$`}
              </p>
            </div>
          </div>
          <h3>Standard Enthalpies of Combustion</h3>
          <p>
            {`$\\Delta_c H^\\circ$`} is always negative for organic compounds. Specific enthalpy{' '}
            {`$= \\frac{\\Delta_c H^\\circ}{M}$`} compares fuels per gram.
          </p>
          <div className="lrn-steps">
            <div className="lrn-step">
              <span className="lrn-step-title">
                Worked Example: Energy Released per Gram of Methane
              </span>
              <p className="lrn-step-content">
                {`Methane burns with $\\Delta_c H^\\circ = -890.3 \\text{ kJ mol}^{-1}$. Molar mass $M = 16.04 \\text{ g mol}^{-1}$.`}
              </p>
              <p className="lrn-step-content">
                {`$$\\text{specific enthalpy} = \\frac{-890.3}{16.04} = -55.5 \\text{ kJ g}^{-1}$$`}
              </p>
              <p className="lrn-step-content">
                Burning one gram of methane releases 55.5 kJ. This per-gram value ranks fuels by
                energy density.
              </p>
            </div>
          </div>
          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">{`$\\Delta_f H^\\circ$`}</span>
              <p>
                Enthalpy to form 1 mol from elements. Often not directly measurable. Usually
                negative for stable compounds. Used to calculate {`$\\Delta_r H^\\circ$`} for any
                reaction.
              </p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">{`$\\Delta_c H^\\circ$`}</span>
              <p>
                Enthalpy to burn 1 mol to CO₂(g) + H₂O(l). Always measurable by calorimetry. Always
                negative. Used to compare fuel energy densities and derive {`$\\Delta_f H^\\circ$`}{' '}
                via Hess's Law.
              </p>
            </div>
          </div>
          <h3>Lattice Enthalpy from a Born-Haber Cycle</h3>
          <p>
            One special use of Hess's Law finds the <strong>lattice enthalpy</strong>{' '}
            {`$\\Delta H_L$`}, the energy to separate 1 mol of an ionic solid into gaseous ions. You
            cannot measure it directly, so you build a closed loop of steps you can measure,
            atomization, ionization, electron gain, and formation, and use the fact that enthalpy is
            a state function: every step around the loop sums to zero. With one unknown in that sum,
            you solve for {`$\\Delta H_L$`}. This loop is called a Born-Haber cycle, and you work
            full examples of it in the next topic.
          </p>
          <h3>Bond Enthalpies</h3>
          <p>
            You met <strong>bond enthalpy</strong> {`$\\Delta H_B$`}, the energy to break 1 mol of a
            bond in the gas phase, when you studied bonding. Here you use it to estimate a reaction
            enthalpy. Bond breaking absorbs energy; bond forming releases it. So a reaction enthalpy
            is the energy spent breaking bonds minus the energy returned forming new ones:
          </p>
          <p className="lrn-eq">{`$$\\Delta H_{rxn} \\approx \\sum \\Delta H_B(\\text{bonds broken}) - \\sum \\Delta H_B(\\text{bonds formed})$$`}</p>
          <BondEnthalpyAccountingViz />
          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Bond Breaking</span>
              <p>
                Always endothermic ({`$\\Delta H_B > 0$`}). You must overcome the attractive force
                between atoms.
              </p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Bond Formation</span>
              <p>
                Always exothermic ({`$\\Delta H < 0$`}). The atoms fall to a lower energy state.
                Estimates using mean bond enthalpies are approximate.
              </p>
            </div>
          </div>
          <div className="lrn-steps">
            <div className="lrn-step">
              <span className="lrn-step-title">Worked Example: Iodoethane Reacting with Water</span>
              <p className="lrn-step-content">
                {`Estimate $\\Delta H_{rxn}$ for $\\text{CH}_3\\text{CH}_2\\text{I}(g) + \\text{H}_2\\text{O}(g) \\to \\text{CH}_3\\text{CH}_2\\text{OH}(g) + \\text{HI}(g)$.`}
              </p>
              <p className="lrn-step-content">
                Step 1: Find which bonds break. One C-I bond breaks (238 kJ) and one O-H bond breaks
                (463 kJ).
              </p>
              <p className="lrn-step-content">
                {`$$\\sum \\Delta H_B(\\text{broken}) = 238 + 463 = +701 \\text{ kJ}$$`}
              </p>
              <p className="lrn-step-content">
                Step 2: Find which bonds form. One C-O bond forms (360 kJ) and one H-I bond forms
                (299 kJ). Forming bonds releases energy.
              </p>
              <p className="lrn-step-content">
                {`$$\\sum \\Delta H_B(\\text{formed}) = 360 + 299 = 659 \\text{ kJ}$$`}
              </p>
              <p className="lrn-step-content">
                {`Step 3: $\\Delta H_{rxn} = 701 - 659 = +42 \\text{ kJ}$. The reaction is endothermic because breaking the strong O-H bond costs more than forming the new bonds returns.`}
              </p>
            </div>
          </div>
          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>
              Mean bond enthalpies give an estimate, not an exact answer. Why does the same C-I bond
              have a slightly different energy in different molecules?
            </p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                Bond strength depends on the electronic environment around the atoms. In different
                molecules, the atoms attached to C and I are different, which changes the electron
                density and therefore the bond length and strength. Mean bond enthalpies average
                over many molecules, so they are accurate enough for estimates but not for precise
                calculations. Use {`$\\Delta_f H^\\circ$`} values for precision.
              </p>
            </details>
          </div>
        </>,

        <>
          <div className="lrn-header">
            <h2>Temperature Dependence of Reaction Enthalpies (Kirchhoff's Law)</h2>
          </div>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              {`The standard enthalpy of the Haber process at 25°C is $-92.22 \\text{ kJ mol}^{-1}$. At 450°C the reaction runs in industry. Predict whether $\\Delta H^\\circ$ becomes more or less negative at 450°C.`}
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                {`$\\Delta H^\\circ$ becomes more negative at 450°C. The products have a smaller total heat capacity than the reactants ($\\Delta_r C_p^\\circ < 0$), so more energy releases as temperature rises.`}
              </p>
            </details>
          </div>
          <p>
            Reaction enthalpy changes with temperature because the heat capacities of products and
            reactants differ. When {`$\\Delta_r C_p^\\circ$`} stays roughly constant over the
            temperature range, Kirchhoff's Law gives:
          </p>
          <p className="lrn-eq lrn-eq-hero">{`$$\\Delta_r H^\\circ(T_2) = \\Delta_r H^\\circ(T_1) + (T_2 - T_1)\\,\\Delta_r C_p^\\circ$$`}</p>
          <p>
            {`The correction is just the gap in heat capacities, $\\Delta_r C_p^\\circ$, times the temperature change. Find $\\Delta_r C_p^\\circ$ the same way you find $\\Delta_r H^\\circ$: products minus reactants.`}
          </p>
          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>
              Reactants and products warm up at different rates because their heat capacities
              differ. So the energy gap between them shifts as temperature changes.
            </p>
            <p>
              The correction term is just the extra heat the reactants soak up minus the extra heat
              the products soak up over the temperature jump. That mismatch is the whole effect.
            </p>
          </div>
          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Hess's Law</span>
              <p>
                Adds multiple reactions at the same temperature to find an unknown {`$\\Delta H$`}.
                Use when you need to combine reactions.
              </p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Kirchhoff's Law</span>
              <p>
                Converts a known {`$\\Delta H$`} from one temperature to another using{' '}
                {`$\\Delta_r C_p^\\circ$`}. Use when temperature differs from the tabulated value.
              </p>
            </div>
          </div>
          <div className="lrn-faded">
            <div className="lrn-faded-phase">
              <span className="lrn-faded-label">COMPLETE EXAMPLE</span>
              <p>
                Why the law works. Imagine two paths from reactants at {`$T_1$`} to products at{' '}
                {`$T_2$`}. Path A: react at {`$T_1$`}, then heat the products from {`$T_1$`} to{' '}
                {`$T_2$`}. Path B: heat the reactants from {`$T_1$`} to {`$T_2$`}, then react.
                Enthalpy is a state function, so both paths give the same total. The only difference
                between them is which side you heat, and the heat to warm each side is its heat
                capacity times {`$(T_2 - T_1)$`}. Subtract the two and you get the correction term.
              </p>
            </div>
            <div className="lrn-faded-phase">
              <span className="lrn-faded-label">INDEPENDENT PRACTICE</span>
              <p>
                {`Find $\\Delta H^\\circ$ for $\\text{H}_2(g) + \\frac{1}{2}\\text{O}_2(g) \\to \\text{H}_2\\text{O}(g)$ at 100°C (373 K), given $\\Delta_r C_p^\\circ = -9.94 \\text{ J K}^{-1}\\text{mol}^{-1}$ and $\\Delta H^\\circ(298 \\text{ K}) = -241.8 \\text{ kJ mol}^{-1}$.`}
              </p>
              <details className="lrn-self-explain-reveal">
                <summary>Check your answer</summary>
                <ol className="lrn-list">
                  <li>{`$\\Delta T = 373 - 298 = 75 \\text{ K}$`}</li>
                  <li>{`Correction $= (75)(-9.94) = -745.5 \\text{ J mol}^{-1} = -0.75 \\text{ kJ mol}^{-1}$`}</li>
                  <li>
                    {`$\\Delta H^\\circ(373 \\text{ K}) = -241.8 + (-0.75) \\approx -242.6 \\text{ kJ mol}^{-1}$`}
                  </li>
                </ol>
              </details>
            </div>
          </div>
          <div className="lrn-steps">
            <div className="lrn-step">
              <span className="lrn-step-title">Worked Example: Haber Process at 450°C</span>
              <p className="lrn-step-content">
                {`The Haber synthesis $\\text{N}_2(g) + 3\\text{H}_2(g) \\to 2\\text{NH}_3(g)$ has $\\Delta_r H^\\circ = -92.22 \\text{ kJ mol}^{-1}$ at 298 K. Find $\\Delta_r H^\\circ$ at 450°C (723 K).`}
              </p>
              <p className="lrn-step-content">
                {`Step 1: Find $\\Delta_r C_p^\\circ$ from molar heat capacities. $C_{p,m}$: NH₃ = 35.06, N₂ = 29.12, H₂ = 28.82 (all J K⁻¹ mol⁻¹).`}
              </p>
              <p className="lrn-step-content">
                {`$$\\Delta_r C_p^\\circ = (2)(35.06) - [(1)(29.12) + (3)(28.82)] = -45.46 \\text{ J K}^{-1}$$`}
              </p>
              <p className="lrn-step-content">{`Step 2: $\\Delta T = 723 - 298 = 425 \\text{ K}$.`}</p>
              <p className="lrn-step-content">
                {`Step 3: Correction $= (425)(-45.46) = -1.932 \\times 10^4 \\text{ J} = -19.32 \\text{ kJ}$.`}
              </p>
              <p className="lrn-step-content">
                {`$$\\Delta_r H^\\circ(723 \\text{ K}) = -92.22 + (-19.32) = -111.54 \\text{ kJ mol}^{-1}$$`}
              </p>
              <p className="lrn-step-content">
                {`The reaction is more exothermic at the industrial temperature because $\\Delta_r C_p^\\circ$ is negative.`}
              </p>
            </div>
          </div>
          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>
              {`The Haber process becomes more exothermic at 723 K ($\\Delta H^\\circ = -111.54$ vs $-92.22 \\text{ kJ mol}^{-1}$). What sign of $\\Delta_r C_p^\\circ$ causes this, and why?`}
            </p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                {`$\\Delta_r C_p^\\circ$ is negative for this reaction. The products (NH₃) have a smaller total heat capacity than the reactants (N₂ + 3 H₂). As temperature rises, the reactants absorb more energy per kelvin than the products do. The reactants enter the reaction carrying more extra energy, while the products leave with less. The net energy released grows. A negative $\\Delta_r C_p^\\circ$ always makes the reaction more exothermic as temperature rises.`}
              </p>
            </details>
          </div>
        </>,

        <>
          <div className="lrn-header">
            <h2>Adiabatic Changes</h2>
          </div>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              {`0.020 mol Ar at 25°C expands adiabatically and reversibly from 0.50 dm³ to 1.00 dm³. Predict whether the final temperature is above or below 25°C, and the sign of the work done on the gas.`}
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                {`The final temperature is below 25°C. The gas does work on the surroundings with no heat input, so it cools. The work done on the gas is negative ($w < 0$).`}
              </p>
            </details>
          </div>
          <p>
            {`An adiabatic process happens with no heat flow: $q = 0$. The First Law then gives $\\Delta U = w$. The walls are insulated, so any energy the gas spends as work must come out of its own internal energy.`}
          </p>
          <p>The work done equals the internal energy change:</p>
          <p className="lrn-eq lrn-eq-hero">{`$$w_{ad} = \\Delta U = C_V\\,\\Delta T$$`}</p>
          <p>
            <strong>The temperature falls during adiabatic expansion</strong> because the gas does
            work on the surroundings ({`$w < 0$`}) but receives no heat ({`$q = 0$`}). Internal
            energy must decrease, and since {`$U = C_V T$`} for an ideal gas, temperature falls.
          </p>
          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>
              With the door shut to heat, the only energy bank the gas can draw on to do work is its
              own internal energy. Spending it cools the gas.
            </p>
            <p>
              This is how a diesel engine fires without a spark and how clouds form as rising air
              expands and cools. Adiabatic cooling is the same physics in both.
            </p>
          </div>
          <p>
            Compare this to an isothermal expansion. There the gas stays at a fixed temperature
            because heat flows in to replace the energy it spends as work. An adiabatic expansion
            has no such top-up, so it cools and its pressure drops faster than an isothermal one to
            the same volume.
          </p>
          <AdiabatIsothermViz />
          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Isothermal Expansion</span>
              <p>
                {`$T$ stays constant. Heat flows in: $q = -w$. $\\Delta U = 0$ for an ideal gas. Pressure drops only because volume grows.`}
              </p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Adiabatic Expansion</span>
              <p>
                {`$T$ falls. No heat flows: $q = 0$, so $\\Delta U = w < 0$. Pressure drops faster because volume grows and temperature falls together.`}
              </p>
            </div>
          </div>
          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>
              {`A gas doubles its volume two ways: once at constant temperature, once adiabatically. Why does the adiabatic path end at a lower pressure?`}
            </p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                {`During isothermal expansion, temperature stays fixed. The ideal gas law gives $p \\propto \\frac{1}{V}$: doubling the volume halves the pressure. During adiabatic expansion, the gas also cools. Lower temperature means lower pressure at the same volume. The pressure drops for two reasons: more volume and lower temperature.`}
              </p>
            </details>
          </div>
        </>
      ]
    },

    practice: [
      {
        q: 'A motor does −15 kJ of work on the surroundings and releases 2 kJ of heat. Calculate the internal energy change.',
        a: 'ΔU = q + w = −2 kJ + (−15 kJ) = −17 kJ. The system loses energy both by doing work and by releasing heat.'
      },
      {
        q: 'Iron reacts with HCl and produces 2.00 dm³ of H₂ gas at 100 kPa. Calculate the expansion work done.',
        a: 'w = −p_ex ΔV = −(100 kPa)(2.00 dm³) × (1 J per Pa·dm³) = −200 J. The gas pushes back the atmosphere, so the system does work on the surroundings and w is negative.'
      },
      {
        q: 'A 10.0 A current passes through a heater at 12 V for 300 s. The temperature rises 5.5 K. What is the heat capacity?',
        a: 'Heat delivered: q = IVt = (10.0)(12)(300) = 36,000 J = 36 kJ. Heat capacity: C = q/ΔT = 36,000/5.5 = 6545 J/K ≈ 6.5 kJ/K.'
      },
      {
        q: 'Why do we use enthalpy (H) instead of internal energy (U) for reactions at constant pressure?',
        a: 'At constant pressure ΔH = q_p, so enthalpy equals the heat exchanged. If we tracked ΔU, we would also need to account for the pV expansion work separately. Enthalpy bundles both terms together.'
      },
      {
        q: "State Hess's law and explain why it works.",
        a: "Hess's law states that ΔH for a reaction equals the sum of ΔH values for any set of steps that add up to the overall reaction. Enthalpy is a state function, so it depends only on start and end states, not on the path taken."
      },
      {
        q: 'What is a standard enthalpy of formation?',
        a: 'It is the enthalpy change when 1 mol of a compound forms from its elements in their standard states at 298 K and 1 bar. By definition, ΔfH° = 0 for all pure elements in their standard states.'
      },
      {
        q: "State Kirchhoff's law for how ΔH changes with temperature when the reaction heat capacity is constant.",
        a: 'ΔH°(T₂) = ΔH°(T₁) + Δ_r C_p° × (T₂ − T₁). The reaction enthalpy shifts because reactants and products have different heat capacities, so they warm up at different rates.'
      },
      {
        q: 'Two paths connect the same states for an ideal gas. Path A: q = +3 kJ, w = −5 kJ. Path B: w = −2 kJ. What is q for Path B?',
        a: 'ΔU is the same for both paths: ΔU = 3 + (−5) = −2 kJ. For Path B: q = ΔU − w = −2 − (−2) = 0 kJ. The heat exchanged depends on the path, but ΔU does not.'
      },
      {
        q: 'In a bomb calorimeter, 0.113 g of benzene burns, the calorimeter constant is 551 J/°C, and ΔT = 8.60°C. Find q_cal and the enthalpy of combustion per mole of benzene.',
        a: 'q_cal = CΔT = (551)(8.60) = 4739 J. Moles benzene = 0.113/78.11 = 0.001447 mol. Per mole: 4739/0.001447 ≈ −3275 kJ/mol. The standard thermochemical equation is written for 2 mol benzene, so its ΔH is twice this: 2 × (−3275) = −6550 kJ ≈ −6.55 MJ. Same number, just two different bases.'
      },
      {
        q: 'What are mean bond enthalpies and why do they give approximate rather than exact ΔH values?',
        a: 'Mean bond enthalpies are averages over many molecules. A C-H bond in methane differs slightly from one in ethanol because the molecular environment differs. Summing averages gives ΔH estimates with errors of a few kJ/mol.'
      },
      {
        q: 'At the molecular level, how does work differ from heat as a mode of energy transfer?',
        a: 'Work involves organized, directed motion. Molecules in the surroundings all push in the same direction against the system boundary. Heat involves disordered thermal motion. Energy passes randomly through molecular collisions at the boundary.'
      },
      {
        q: 'Define the standard state conditions used for thermochemical data.',
        a: 'Standard state is 1 bar pressure (not 1 atm). Temperature is not fixed by the standard state but is usually 298.15 K for tabulated data. All substances must be in their pure standard form: gases at 1 bar, liquids and solids as pure substances.'
      },
      {
        q: 'Why does the internal energy of a system change when it does work on the surroundings?',
        a: 'Work transfers energy out of the system, so the system has less internal energy after the process. The First Law states ΔU = q + w, so negative work lowers ΔU even if no heat flows.'
      },
      {
        q: 'If a gas expands at a constant external pressure of 1.20 atm by 0.500 L, what is the work done?',
        a: 'Convert: 1.20 atm × 101.325 J/(L·atm) = 121.6 J/L. w = −p_ex ΔV = −(121.6)(0.500) = −60.8 J. Because the gas expands, the system does work on the surroundings.'
      },
      {
        q: 'Why is C_p always larger than C_V for a gas?',
        a: 'At constant pressure, the gas can expand and do work on the surroundings. Some of the added heat goes into that work instead of raising temperature. At constant volume no expansion occurs, so all the heat raises T, making C_V smaller.'
      },
      {
        q: 'Enthalpy is defined as H = U + pV. Show that at constant pressure ΔH = q_p.',
        a: 'ΔH = ΔU + Δ(pV) = ΔU + pΔV (constant p). From the First Law: ΔU = q + w = q − pΔV. Substituting: ΔH = q − pΔV + pΔV = q. So ΔH = q_p.'
      },
      {
        q: "Use Hess's law to find the combustion enthalpy for propene. The answer is −2058 kJ/mol. What does this tell you about the energy stored in propene?",
        a: 'Burning 1 mol of propene releases 2058 kJ. This energy comes from breaking C-H and C=C bonds and forming stronger C=O and O-H bonds in CO₂ and H₂O.'
      },
      {
        q: 'If ΔfH° for a compound is large and negative, what does that tell you about its stability?',
        a: 'A large negative ΔfH° means the compound releases a lot of energy when formed from its elements. The compound sits in a deep energy well and is thermodynamically stable relative to its elements.'
      },
      {
        q: "H₂ + ½O₂ → H₂O(g) has Δ_r C_p° = −9.94 J/(K·mol). Apply Kirchhoff's law to correct ΔH° to 373 K.",
        a: 'ΔH°(373) = ΔH°(298) + Δ_r C_p° × ΔT = ΔH°(298) + (−9.94)(75) = ΔH°(298) − 746 J/mol. The result is ΔH°(373 K) ≈ −242.6 kJ/mol.'
      },
      {
        q: 'Why does an adiabatic expansion always cool a gas more than an isothermal expansion to the same final volume?',
        a: 'In isothermal expansion the gas absorbs heat from surroundings to maintain temperature while doing work. In adiabatic expansion there is no heat input, so all the work comes from the internal energy, which drops and causes temperature to fall.'
      },
      {
        q: 'Explain why internal energy is a state function but heat and work are not.',
        a: 'Internal energy depends only on the current state of the system. Heat and work describe how energy transfers between states during a specific process, so they depend on the path taken.'
      },
      {
        q: '1.000 mol glucose burns in a bomb calorimeter: ΔU = −2559 kJ. C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O(l). Find ΔH.',
        a: 'Δn_g = 6 − 6 = 0. ΔH = ΔU + Δn_g RT = −2559 + 0 = −2559 kJ.'
      },
      {
        q: 'CH₃CH₂I + H₂O → CH₃CH₂OH + HI. The ΔH° is approximately +42 kJ/mol. What does this tell you?',
        a: 'The positive value shows the reaction is slightly endothermic. More energy goes into breaking the C-I bond than is released when H-I forms. Bonds broken: C-I and O-H. Bonds formed: C-O and H-I.'
      },
      {
        q: 'A spring stores 100 J of work and releases 15 J of heat. What is ΔU?',
        a: 'ΔU = q + w = −15 J + 100 J = +85 J. Work done on the system adds energy, and the small heat loss only partly offsets that gain.'
      },
      {
        q: 'Predict what happens to ΔT when you add 500 J to 0.900 mol O₂ at constant pressure versus constant volume.',
        a: 'At constant volume: ΔT = q/(nC_V,m) = 500/(0.900 × 20.8) = +26.7 K. At constant pressure: ΔT = q/(nC_p,m) = 500/(0.900 × 29.1) = +19.1 K. Constant-pressure heating always gives a smaller temperature rise.'
      },
      {
        q: 'For a reaction where Δn_g = 0 and all species are ideal gases, compare ΔH and ΔU.',
        a: 'ΔH = ΔU + Δn_g RT = ΔU + 0 = ΔU. When no change in gas moles occurs, no net expansion work happens at constant pressure. Enthalpy and internal energy changes are identical.'
      },
      {
        q: 'Predict whether ΔrH° increases or decreases with temperature for a reaction where Δ_r C_p° > 0.',
        a: "ΔrH° increases (becomes less negative or more positive) as temperature rises when Δ_r C_p° > 0. Kirchhoff's law gives ΔH°(T₂) = ΔH°(T₁) + Δ_r C_p° × (T₂ − T₁), and a positive Δ_r C_p° adds a positive correction."
      },
      {
        q: 'What does "state function" mean? Give three examples.',
        a: 'A state function depends only on the current state of the system, not on how that state was reached. Three examples: internal energy (U), enthalpy (H), and temperature (T).'
      },
      {
        q: 'Why does a bomb calorimeter measure ΔU rather than ΔH?',
        a: 'A bomb calorimeter has a rigid sealed vessel, so volume is constant (ΔV = 0) and no expansion work occurs. Since w = 0, the heat released equals ΔU. To get ΔH you apply the correction ΔH = ΔU + Δn_g RT.'
      },
      {
        q: 'How does the sign convention for w differ between the IUPAC and older chemistry conventions?',
        a: 'IUPAC defines w as work done on the system, so compression gives positive w. The older convention used w as work done by the system, making compression negative. Always check which sign convention a problem uses.'
      },
      {
        q: 'Why is reversible expansion work always greater in magnitude than irreversible expansion work at the same conditions?',
        a: 'In reversible expansion the external pressure equals the gas pressure at every step, so the system does the maximum possible work. Irreversible expansion uses a fixed lower external pressure, so less work gets done.'
      },
      {
        q: "Why does Hess's law require balanced equations before adding enthalpies?",
        a: 'Enthalpy is extensive and scales with moles. If you multiply a reaction by 2, ΔH also doubles. Adding unbalanced equations would combine energy contributions from different numbers of moles, giving a wrong total enthalpy.'
      },
      {
        q: 'What is the enthalpy of solution and how does it relate to lattice enthalpy and enthalpy of hydration?',
        a: 'The enthalpy of solution is the enthalpy change when 1 mol of solute dissolves in a large amount of solvent. For ionic solids: ΔsolH° ≈ lattice-breaking enthalpy (positive) + enthalpy of hydration (negative). If the lattice enthalpy exceeds hydration, dissolving is endothermic.'
      },
      {
        q: 'CaCO₃ transitions from calcite to aragonite. ΔH_m − ΔU_m = −0.28 J/mol. Explain why this value is so small.',
        a: 'Both forms are solids, so Δn_g = 0 and there is almost no volume change. ΔH − ΔU = Δn_g RT ≈ 0 for solid-solid transitions.'
      },
      {
        q: 'What happens to the internal energy of an ideal gas during free expansion (expansion into a vacuum)?',
        a: 'ΔU = 0 for an ideal gas because there are no intermolecular forces to overcome. Both q = 0 (no heat exchange) and w = 0 (no external pressure), so ΔU = q + w = 0.'
      },
      {
        q: 'A 55 W heater runs for 120 s and raises temperature by 5.0°C. What is C_V?',
        a: 'Energy supplied: q = 55 × 120 = 6600 J. C_V = q/ΔT = 6600/5.0 = 1320 J/K = 1.3 kJ/K.'
      },
      {
        q: 'What is 1 calorie in joules, and what does the nutritional Calorie (capital C) mean?',
        a: '1 cal = 4.184 J (exact). The nutritional Calorie (Cal) on food labels is 1 kcal = 1000 cal = 4.184 kJ. Thermochemistry tables use joules. Convert by multiplying calories by 4.184.'
      },
      {
        q: 'Predict the sign of ΔH for dissolving an ionic salt in water if the lattice enthalpy exceeds the hydration enthalpies.',
        a: 'ΔH_sol = lattice-breaking enthalpy − hydration enthalpy. If the lattice enthalpy (endothermic) exceeds the hydration enthalpies (exothermic), the total ΔH_sol is positive. The dissolving process is endothermic.'
      },
      {
        q: 'For 3H₂ + N₂ → 2NH₃, Δn_g = −2. Calculate ΔH_m − ΔU_m at 298 K.',
        a: 'ΔH − ΔU = Δn_g RT = (−2)(8.314)(298) = −4955 J/mol ≈ −5.0 kJ/mol. More moles of gas appear on the left, so the system contracts and the surroundings do work on it, making H lower than U.'
      },
      {
        q: 'Water vaporizes when 0.50 A at 12 V runs for 300 s and 0.798 g of water is consumed. Calculate ΔH_m(vap).',
        a: 'Energy: q = IVt = (0.50)(12)(300) = 1800 J. Moles: n = 0.798/18.015 = 0.0443 mol. ΔH_m = 1800/0.0443 = +41 kJ/mol.'
      },
      {
        q: 'How does the relationship ΔH = ΔU + Δ(pV) simplify for reactions involving only ideal gases?',
        a: 'For ideal gases pV = nRT, so Δ(pV) = Δn_g RT. This gives ΔH = ΔU + Δn_g RT. You only need to count the change in moles of gaseous species.'
      },
      {
        q: 'A reaction has ΔU = −200 kJ at constant volume. At constant pressure with Δn_g = +1 at 298 K, what is ΔH?',
        a: 'ΔH = ΔU + Δn_g RT = −200,000 + (1)(8.314)(298) = −200,000 + 2478 = −197,522 J ≈ −197.5 kJ.'
      }
    ],

    reference: {
      category: 'Quick Reference',
      title: 'Thermochemistry and Energy',
      sections: [
        <>
          <div className="lrn-header">
            <h2>Fundamental Definitions</h2>
          </div>
          <div className="ref-formula">
            <div className="ref-formula-name">First Law of Thermodynamics</div>
            <div className="ref-formula-eq">{`$$\\Delta U = q + w$$`}</div>
            <p className="ref-formula-desc">
              {`$q > 0$: heat into system. $q < 0$: heat out. $w > 0$: work done on system. $w < 0$: system does work on surroundings. When to use: any energy balance on a closed system that exchanges both heat and work.`}
            </p>
          </div>
          <div className="ref-formula">
            <div className="ref-formula-name">Enthalpy Definition</div>
            <div className="ref-formula-eq">{`$$H = U + pV$$`}</div>
            <p className="ref-formula-desc">
              {`$H$ is a state function. At constant pressure: $\\Delta H = q_p$. When to use: any reaction or change at constant pressure, which covers nearly all open-vessel lab work.`}
            </p>
          </div>
          <div className="ref-formula">
            <div className="ref-formula-name">State Function Property</div>
            <div className="ref-formula-eq">{`$$\\Delta X = X_f - X_i \\text{ (path-independent)}$$`}</div>
            <p className="ref-formula-desc">
              {`$U$, $H$, $p$, $V$, $T$ are state functions: they depend only on the endpoints. $q$ and $w$ are path functions: they depend on the route taken. When to use: deciding whether a quantity depends only on the endpoints or on the route.`}
            </p>
          </div>
          <div className="ref-formula">
            <div className="ref-formula-name">Ideal Gas Law</div>
            <div className="ref-formula-eq">{`$$pV = nRT, \\quad R = 8.314 \\text{ J mol}^{-1}\\text{K}^{-1}$$`}</div>
            <p className="ref-formula-desc">
              {`$p$ in Pa, $V$ in m³, $n$ in mol, $T$ in K. When to use: linking pressure, volume, moles, and temperature of a gas; the source of $\\Delta(pV) = \\Delta n_g RT$.`}
            </p>
          </div>
          <div className="ref-formula">
            <div className="ref-formula-name">Moles from Mass</div>
            <div className="ref-formula-eq">{`$$n = \\frac{m}{M}$$`}</div>
            <p className="ref-formula-desc">
              {`$m$ = mass in grams, $M$ = molar mass in g mol⁻¹. When to use: converting a weighed sample into moles before any per-mole enthalpy calculation.`}
            </p>
          </div>
        </>,

        <>
          <h3>Expansion Work</h3>
          <div className="ref-formula">
            <div className="ref-formula-name">Work at Constant External Pressure</div>
            <div className="ref-formula-eq">{`$$w = -p_{ex}\\,\\Delta V$$`}</div>
            <p className="ref-formula-desc">
              For gas expanding against a fixed external pressure. 1 L·atm = 101.3 J. When to use: a
              gas pushing against a constant outside pressure, such as the atmosphere.
            </p>
          </div>
          <div className="ref-formula">
            <div className="ref-formula-name">Free Expansion</div>
            <div className="ref-formula-eq">{`$$w = 0 \\quad (p_{ex} = 0)$$`}</div>
            <p className="ref-formula-desc">
              Gas expands into a vacuum. No work done. When to use: expansion against zero opposing
              pressure.
            </p>
          </div>
          <table>
            <thead>
              <tr>
                <th>Type</th>
                <th>Work Expression</th>
                <th>Condition</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Free expansion</td>
                <td>{`$w = 0$`}</td>
                <td>{`$p_{ex} = 0$`}</td>
              </tr>
              <tr>
                <td>Constant external pressure</td>
                <td>{`$w = -p_{ex}\\Delta V$`}</td>
                <td>Constant {`$p_{ex}$`}</td>
              </tr>
            </tbody>
          </table>
        </>,

        <>
          <h3>Enthalpy Relations</h3>
          <div className="ref-formula">
            <div className="ref-formula-name">{`$\\Delta H$ from $\\Delta U$ (Gas Reactions)`}</div>
            <div className="ref-formula-eq">{`$$\\Delta H = \\Delta U + \\Delta n_g RT$$`}</div>
            <p className="ref-formula-desc">
              {`$\\Delta n_g$`} = moles of gaseous products minus moles of gaseous reactants. When
              to use: converting between bomb-calorimeter {`$\\Delta U$`} and constant-pressure{' '}
              {`$\\Delta H$`} for a reaction that makes or destroys gas.
            </p>
          </div>
          <div className="ref-formula">
            <div className="ref-formula-name">Electrical Heating</div>
            <div className="ref-formula-eq">{`$$q = It\\Delta\\varphi$$`}</div>
            <p className="ref-formula-desc">
              {`Current $I$ (A) × time $t$ (s) × potential $\\Delta\\varphi$ (V) = heat supplied.`}{' '}
              When to use: finding the heat delivered by an electric heater during calibration.
            </p>
          </div>
        </>,

        <>
          <h3>Heat Capacity</h3>
          <div className="ref-formula">
            <div className="ref-formula-name">Heat from Heat Capacity</div>
            <div className="ref-formula-eq">{`$$q = C\\,\\Delta T = mC_s\\,\\Delta T = nC_m\\,\\Delta T$$`}</div>
            <p className="ref-formula-desc">
              {`$C$ = total (J/K); $C_s$ = specific per gram; $C_m$ = molar per mol.`} When to use:
              finding the heat needed for a known temperature change of a known amount of substance.
            </p>
          </div>
          <div className="ref-formula">
            <div className="ref-formula-name">Heat Capacity Difference (Perfect Gas)</div>
            <div className="ref-formula-eq">{`$$C_p - C_V = nR$$`}</div>
            <p className="ref-formula-desc">
              When to use: relating the two heat capacities of a perfect gas, or any gas where{' '}
              {`$C_p$`} and {`$C_V$`} both appear.
            </p>
          </div>
          <table>
            <thead>
              <tr>
                <th>Gas type</th>
                <th>{`$C_{V,m}$`}</th>
                <th>{`$C_{p,m}$`}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Monatomic</td>
                <td>{`$\\frac{3}{2}R$`}</td>
                <td>{`$\\frac{5}{2}R$`}</td>
              </tr>
              <tr>
                <td>Linear diatomic</td>
                <td>{`$\\frac{5}{2}R$`}</td>
                <td>{`$\\frac{7}{2}R$`}</td>
              </tr>
              <tr>
                <td>Nonlinear</td>
                <td>{`$3R$`}</td>
                <td>{`$4R$`}</td>
              </tr>
            </tbody>
          </table>
        </>,

        <>
          <h3>Standard Enthalpies</h3>
          <div className="ref-formula">
            <div className="ref-formula-name">
              Standard Reaction Enthalpy from Formation Enthalpies
            </div>
            <div className="ref-formula-eq">{`$$\\Delta_r H^\\circ = \\sum \\nu\\,\\Delta_f H^\\circ(\\text{products}) - \\sum \\nu\\,\\Delta_f H^\\circ(\\text{reactants})$$`}</div>
            <p className="ref-formula-desc">
              {`$\\Delta_f H^\\circ = 0$`} for all elements in their reference states. When to use:
              finding the standard enthalpy of any reaction from tabulated formation enthalpies.
            </p>
          </div>
          <div className="ref-formula">
            <div className="ref-formula-name">Sublimation Enthalpy</div>
            <div className="ref-formula-eq">{`$$\\Delta_{sub} H^\\circ = \\Delta_{fus} H^\\circ + \\Delta_{vap} H^\\circ$$`}</div>
            <p className="ref-formula-desc">
              Follows from Hess's Law applied to the solid to liquid to gas cycle. When to use:
              finding a sublimation enthalpy from known fusion and vaporization values.
            </p>
          </div>
          <div className="ref-formula">
            <div className="ref-formula-name">Reversing a Reaction</div>
            <div className="ref-formula-eq">{`$$\\Delta H_{reverse} = -\\Delta H_{forward}$$`}</div>
            <p className="ref-formula-desc">
              When to use: whenever you reverse a tabulated step in a Hess's Law chain.
            </p>
          </div>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Symbol</th>
                <th>Definition</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Enthalpy of vaporization</td>
                <td>{`$\\Delta_{vap} H^\\circ$`}</td>
                <td>Vaporize 1 mol liquid to gas at 1 bar</td>
              </tr>
              <tr>
                <td>Enthalpy of fusion</td>
                <td>{`$\\Delta_{fus} H^\\circ$`}</td>
                <td>Melt 1 mol solid to liquid at 1 bar</td>
              </tr>
              <tr>
                <td>Enthalpy of sublimation</td>
                <td>{`$\\Delta_{sub} H^\\circ$`}</td>
                <td>Convert 1 mol solid directly to gas</td>
              </tr>
              <tr>
                <td>Enthalpy of combustion</td>
                <td>{`$\\Delta_c H^\\circ$`}</td>
                <td>Fully oxidize 1 mol to CO₂(g) and H₂O(l)</td>
              </tr>
              <tr>
                <td>Enthalpy of formation</td>
                <td>{`$\\Delta_f H^\\circ$`}</td>
                <td>Form 1 mol from elements in reference states</td>
              </tr>
              <tr>
                <td>Lattice enthalpy</td>
                <td>{`$\\Delta H_L$`}</td>
                <td>Separate 1 mol ionic solid into gaseous ions</td>
              </tr>
            </tbody>
          </table>
        </>,

        <>
          <h3>Hess's Law and Bond Enthalpies</h3>
          <div className="ref-formula">
            <div className="ref-formula-name">Hess's Law</div>
            <div className="ref-formula-eq">{`$$\\Delta_r H^\\circ = \\sum \\Delta H^\\circ(\\text{component steps})$$`}</div>
            <p className="ref-formula-desc">
              Add reactions algebraically to get the target reaction. Reverse any step by flipping
              its sign. Scale steps by stoichiometry and scale their {`$\\Delta H$`} equally. When
              to use: a reaction whose enthalpy you cannot measure directly but can build from known
              steps.
            </p>
          </div>
          <div className="ref-formula">
            <div className="ref-formula-name">Reaction Enthalpy from Bond Enthalpies</div>
            <div className="ref-formula-eq">{`$$\\Delta_r H^\\circ \\approx \\sum \\Delta H_B(\\text{bonds broken}) - \\sum \\Delta H_B(\\text{bonds formed})$$`}</div>
            <p className="ref-formula-desc">
              Approximate. Use {`$\\Delta_f H^\\circ$`} values for precision. When to use: a quick
              estimate for a gas-phase reaction when only bond enthalpies are available.
            </p>
          </div>
          <div className="ref-formula">
            <div className="ref-formula-name">Born-Haber Cycle Closure</div>
            <div className="ref-formula-eq">{`$$\\sum \\Delta H(\\text{all steps in cycle}) = 0$$`}</div>
            <p className="ref-formula-desc">
              Applies Hess's Law around a closed thermodynamic cycle to find the lattice enthalpy
              from measured formation and ionization data. When to use: finding a lattice enthalpy,
              which you cannot measure directly.
            </p>
          </div>
        </>,

        <>
          <h3>Kirchhoff's Law</h3>
          <div className="ref-formula">
            <div className="ref-formula-name">{`Kirchhoff's Law (Constant $\\Delta_r C_p^\\circ$)`}</div>
            <div className="ref-formula-eq">{`$$\\Delta_r H^\\circ(T_2) = \\Delta_r H^\\circ(T_1) + \\Delta_r C_p^\\circ\\,(T_2 - T_1)$$`}</div>
            <p className="ref-formula-desc">
              When to use: a modest temperature shift where heat capacities barely change, so{' '}
              {`$\\Delta_r C_p^\\circ$`} is treated as constant.
            </p>
          </div>
          <div className="ref-formula">
            <div className="ref-formula-name">Reaction Heat Capacity Difference</div>
            <div className="ref-formula-eq">{`$$\\Delta_r C_p^\\circ = \\sum \\nu\\,C_{p,m}^\\circ(\\text{products}) - \\sum \\nu\\,C_{p,m}^\\circ(\\text{reactants})$$`}</div>
            <p className="ref-formula-desc">
              Net change in molar heat capacity at constant pressure across the reaction. When to
              use: the input to Kirchhoff's Law; its sign tells you whether the reaction grows more
              or less exothermic as temperature rises.
            </p>
          </div>
        </>,

        <>
          <h3>Adiabatic Changes</h3>
          <div className="ref-formula">
            <div className="ref-formula-name">Work in an Adiabatic Process</div>
            <div className="ref-formula-eq">{`$$q = 0, \\quad \\Delta U = w_{ad} = C_V\\,\\Delta T$$`}</div>
            <p className="ref-formula-desc">
              {`$q = 0$`}, so all energy change comes from work alone. The gas cools as it does
              work. When to use: a perfect gas expanding or compressing in a thermally insulated
              container.
            </p>
          </div>
        </>
      ]
    },

    customCss: null
  }

  return <LearningTemplate config={config} />
}
