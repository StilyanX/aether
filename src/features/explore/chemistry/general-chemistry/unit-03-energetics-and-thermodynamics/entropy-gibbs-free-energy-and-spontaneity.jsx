import { LearningTemplate } from '../../../../../components/learning/learning-template'
import {
  ATPCouplingViz,
  BoltzmannEntropyViz,
  EntropyChangeViz,
  GibbsCrossoverViz,
  PhaseEquilibriumGibbsViz,
  ResidualEntropyViz,
  TroutonRuleViz,
  TwoBlockEntropyViz
} from '../../../../../components/viz'

export default function EntropyGibbsFreeEnergyAndSpontaneity() {
  const config = {
    cssPrefix: 'chem-gibbs',
    documentTitle: 'Entropy, Gibbs Free Energy, and Spontaneity - AETHER',
    learning: {
      category: 'Unit 3',
      groupTitle: 'Energetics and Thermodynamics',
      title: 'Entropy, Gibbs Free Energy, and Spontaneity',
      subtitle:
        'Entropy measures the spread of energy and matter; the Second Law governs direction; Gibbs energy combines both to predict spontaneity at constant temperature and pressure.',
      sections: [
        <>
          <div className="lrn-header">
            <h2>Why Change Has a Direction</h2>
          </div>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              You drop an ice cube into warm tea. Will heat flow from the tea into the ice, or from
              the ice into the tea? Why never the other way?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                Heat flows from hot to cold. The tea gives heat to the ice. The reverse never
                happens on its own because it would lower the total entropy (how spread out the
                energy is) of the universe.
              </p>
            </details>
          </div>
          <p>
            Some things happen on their own. A hot drink cools down. A drop of ink spreads through
            water. A ball rolls downhill and stops. You never see these run backward by themselves.
          </p>
          <p>
            We call a change that happens on its own a <strong>spontaneous change</strong>.
            Spontaneous means natural tendency, not speed. A spontaneous change can be very slow.
            Diamond turning into graphite is spontaneous, yet it takes ages.
          </p>
          <p>
            A <strong>nonspontaneous change</strong> needs constant outside help. A fridge moves
            heat from cold to hot, but only while plugged in. Stop the work, and the natural
            direction takes over again.
          </p>
          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>
              The First Law of thermodynamics says energy is conserved. But it does not pick a
              direction. Heat flowing from cold to hot would still conserve energy. The First Law
              would permit it. Yet it never happens on its own. We need the Second Law to explain
              direction.
            </p>
          </div>
        </>,

        <>
          <div className="lrn-header">
            <h2>The Second Law of Thermodynamics</h2>
          </div>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              A perfectly insulated box holds gas squeezed into one corner. You remove the wall
              holding it there. What does the gas do, and can it ever go back on its own?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                The gas spreads out. It never gathers back on its own because spreading raises total
                entropy and gathering would lower it.
              </p>
            </details>
          </div>
          <p>
            The Second Law states the direction of natural change. In words: the total entropy of
            the universe increases in any spontaneous change. The universe means the system plus its
            surroundings together.
          </p>
          <div className="lrn-insight">
            <p>
              {`The First Law decides what is permissible. The Second Law decides what is spontaneous.
              Both must agree for a change to actually happen by itself.`}
            </p>
          </div>
          <p>
            The Second Law says nothing about rate. A spontaneous change may take a fraction of a
            second or a million years.
          </p>
          <h3>Kelvin Statement</h3>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              Imagine an engine that takes in heat from one hot tank and turns all of it into work,
              with no waste. Why is this impossible?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                It would let total entropy stay constant at best, or decrease. The Second Law
                forbids that. Some heat must always be dumped to a colder place.
              </p>
            </details>
          </div>
          <p>
            Lord Kelvin stated: no process can take heat from a source and turn it completely into
            work. Some heat must always be dumped to a colder place. This is why no engine is
            perfectly efficient.
          </p>
          <h3>Clausius Statement</h3>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              You set a warm can next to a cold can in a sealed box. Could the cold can
              spontaneously give heat to the warm can, making the warm one hotter?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                No. That would lower total entropy. Heat always flows from hot to cold by itself.
              </p>
            </details>
          </div>
          <p>
            Rudolf Clausius stated: heat does not flow from a cold body to a hot body on its own.
            Heat always flows from hot to cold by itself.
          </p>
          <p>
            The Kelvin and Clausius statements look different but are exactly equivalent. Break one
            and you break the other.
          </p>
        </>,

        <>
          <div className="lrn-header">
            <h2>Entropy: The Signpost of Spontaneous Change</h2>
          </div>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              Two identical blocks touch. One is hot, one is cold. As heat flows, the cold block's
              entropy rises and the hot block's entropy falls. Which change is bigger, and why does
              the total rise?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                {`The cold block's rise is bigger. Dividing the same heat by a smaller temperature gives
                a larger result. So total entropy rises.`}
              </p>
            </details>
          </div>
          <p>
            Entropy measures how spread out energy and matter become. A higher entropy means energy
            and particles have more ways to arrange themselves. We give entropy the symbol {`$S$`}.
            Units are {`$\\text{J K}^{-1}$`} (per sample) or{' '}
            {`$\\text{J K}^{-1}\\,\\text{mol}^{-1}$`} (per mole).
          </p>
          <TwoBlockEntropyViz />
          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>
              Entropy rises in two main ways. It rises when volume increases, because particles gain
              more positions. We call this <strong>positional disorder</strong>. It also rises when
              temperature increases, because energy spreads over more levels. We call this{' '}
              <strong>thermal disorder</strong>.
            </p>
          </div>
          <h3>Thermodynamic Definition</h3>
          <p>
            Clausius defined entropy through heat and temperature. For a tiny reversible (done so
            slowly the system stays balanced) heat flow {`$dq_{rev}$`} at temperature {`$T$`}:
          </p>
          <p className="lrn-eq lrn-eq-hero">{`$$dS = \\frac{dq_{rev}}{T}$$`}</p>
          <p>
            The subscript "rev" matters. Only reversible heat gives the true entropy change. Entropy
            is a state function, so you can use any reversible path between two states.
          </p>
          <p>
            {`The surroundings are huge, so their temperature stays constant. For them, $\\Delta S_{surr} = \\frac{q_{surr}}{T_{surr}}$ holds whether the heat flows reversibly or not.`}
          </p>
          <p>
            One rule before any calculation: the {`$T$`} here must be in kelvin, the absolute
            temperature. Convert from Celsius with {`$K = °C + 273$`}. Dividing by a Celsius value
            would give a wrong, even negative, answer.
          </p>
          <h3>Worked Example: 100 J Added Reversibly to Water at 25°C</h3>
          <div className="lrn-steps">
            <div className="lrn-step">
              <span className="lrn-step-title">Step 1: Convert temperature</span>
              <p className="lrn-step-content">{`$T = 25 + 273 = 298\\,\\text{K}$.`}</p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">Step 2: Apply the definition</span>
              <p className="lrn-step-content">
                {`$$\\Delta S = \\frac{q_{rev}}{T} = \\frac{100\\,\\text{J}}{298\\,\\text{K}} = +0.336\\,\\text{J K}^{-1}$$`}
              </p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">Step 3: Read the sign</span>
              <p className="lrn-step-content">
                The plus sign means heat flowing in raises the entropy of the water.
              </p>
            </div>
          </div>
        </>,

        <>
          <div className="lrn-header">
            <h2>Predicting the Sign of Delta S</h2>
          </div>
          <p>
            Often you do not need a number. You just need to know if entropy rises or falls. A few
            simple rules let you predict the sign of {`$\\Delta S$`} by eye.
          </p>
          <ul className="lrn-list">
            <li>Gases have more entropy than liquids. Liquids have more than solids.</li>
            <li>More moles of gas means higher entropy. Count gas moles on each side.</li>
            <li>Dissolving a solid in water raises entropy. The pieces spread out.</li>
            <li>Mixing two substances raises entropy.</li>
            <li>Heating a substance raises entropy. Faster motion means more disorder.</li>
          </ul>
          <p>
            The strongest rule is the count of gas moles. Gas entropy dwarfs liquid and solid
            entropy. So if a reaction makes more gas, expect {`$\\Delta S > 0$`}. If it makes less
            gas, expect {`$\\Delta S < 0$`}.
          </p>
          <h3>Worked Example: Predict the Sign for Ammonia Synthesis</h3>
          <p>
            Predict the sign of {`$\\Delta_r S°$`} for {`$N_2(g) + 3\\,H_2(g) \\to 2\\,NH_3(g)$`}.
          </p>
          <div className="lrn-steps">
            <div className="lrn-step">
              <span className="lrn-step-title">Step 1: Count gas moles</span>
              <p className="lrn-step-content">
                Reactants: {`$1 + 3 = 4$`} moles of gas. Products: 2 moles of gas.
              </p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">Step 2: Compare</span>
              <p className="lrn-step-content">
                Gas moles drop from 4 to 2. Fewer gas molecules means fewer ways to spread the
                energy.
              </p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">Step 3: Read the sign</span>
              <p className="lrn-step-content">
                {`$\\Delta_r S° < 0$`}. Entropy falls. The actual value is about{' '}
                {`$-199\\,\\text{J K}^{-1}\\,\\text{mol}^{-1}$`}, confirming the prediction.
              </p>
            </div>
          </div>
          <div className="lrn-tip">
            <span className="lrn-tip-label">TIP</span>
            <p>
              When gas moles do not change, the sign is small and hard to call. Then you must add up
              the standard molar entropies to find the true sign.
            </p>
          </div>
        </>,

        <>
          <div className="lrn-header">
            <h2>Statistical (Boltzmann) Entropy</h2>
          </div>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              A perfect crystal at absolute zero has exactly one way to arrange its atoms. What is
              its entropy by the Boltzmann formula?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>{`$S = k \\ln 1 = 0$. One arrangement means zero entropy.`}</p>
            </details>
          </div>
          <p>
            Ludwig Boltzmann linked entropy to counting arrangements. He defined entropy from the
            number of ways {`$W$`} to arrange a system at the molecular level:
          </p>
          <p className="lrn-eq lrn-eq-hero">{`$$S = k \\ln W$$`}</p>
          <BoltzmannEntropyViz />
          <p>
            {`Here $k$ is the Boltzmann constant, $1.381 \\times 10^{-23}\\,\\text{J K}^{-1}$. $W$
            counts the microscopic arrangements that give the same overall state.`}
          </p>
          <p>
            {`Two routes, one answer. The thermodynamic route uses heat, $dS = \\frac{dq_{rev}}{T}$. The
            statistical route counts arrangements, $S = k \\ln W$. Both give the same entropy.`}
          </p>
          <h3>Worked Example: Boltzmann Entropy of Four CO Molecules</h3>
          <div className="lrn-steps">
            <div className="lrn-step">
              <span className="lrn-step-title">Step 1: Perfect crystal</span>
              <p className="lrn-step-content">
                Every molecule points the same way. Exactly one arrangement, so {`$W = 1$`}.
              </p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">Step 2: Entropy of perfect crystal</span>
              <p className="lrn-step-content">{`$$S = k \\ln 1 = 0$$`}</p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">Step 3: Random crystal</span>
              <p className="lrn-step-content">
                Each molecule points one of two ways. With four molecules, {`$W = 2^4 = 16$`}.
              </p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">Step 4: Entropy of random crystal</span>
              <p className="lrn-step-content">
                {`$$S = k \\ln 16 = (1.381 \\times 10^{-23})(\\ln 16) = (1.381 \\times 10^{-23})(2.77) = 3.83 \\times 10^{-23}\\,\\text{J K}^{-1}$$`}
              </p>
            </div>
          </div>
          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>Why does each extra molecule double the count W rather than add to it?</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                Each new molecule multiplies the total arrangements by 2. If you already have 16
                arrangements, adding a molecule that can point two ways gives{' '}
                {`$16 \\times 2 = 32$`}. Multiplication, not addition, is the rule for independent
                choices.
              </p>
            </details>
          </div>
        </>,

        <>
          <div className="lrn-header">
            <h2>The Clausius Inequality</h2>
          </div>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              {`A real, irreversible heat flow happens at temperature $T$. Will $dS$ be larger than,
              equal to, or smaller than $dq$ over $T$?`}
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                Larger. Real processes generate extra entropy internally beyond what the heat flow
                alone provides.
              </p>
            </details>
          </div>
          <p>
            Real processes are irreversible. For them, entropy change is larger than heat over
            temperature. This is the <strong>Clausius inequality</strong>:
          </p>
          <p className="lrn-eq lrn-eq-hero">{`$$dS \\geq \\frac{dq}{T}$$`}</p>
          <p>
            The equals sign holds for a reversible change. The greater-than sign holds for an
            irreversible one. Real, irreversible processes always make extra entropy inside the
            system.
          </p>
          <h3>Total Entropy Always Increases</h3>
          <p>
            Apply the inequality to an isolated system, where no heat crosses the boundary so{' '}
            {`$dq = 0$`}. Then {`$dS \\geq 0$`}. Treat the whole universe as isolated, and the
            result is the spontaneity test you will use:
          </p>
          <p className="lrn-eq lrn-eq-hero">{`$$\\Delta S_{tot} \\geq 0$$`}</p>
          <p>
            Total entropy never falls. It rises in any real change and stays flat at equilibrium.
          </p>
        </>,

        <>
          <div className="lrn-header">
            <h2>Entropy Changes for Gases, Heating, and Phase Transitions</h2>
          </div>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              A perfect gas (an ideal gas that obeys pV=nRT) expands at constant temperature to
              twice its volume. Does its entropy rise, fall, or stay the same?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                It rises. More volume means more positions for the molecules, so more arrangements.
              </p>
            </details>
          </div>
          <h3>Isothermal Expansion of a Perfect Gas</h3>
          <p>
            The Thermochemistry topic already shows the reversible heat for this expansion is{' '}
            {`$q_{rev} = nRT \\ln \\frac{V_f}{V_i}$`}. Divide that heat by {`$T$`} to get the
            entropy change:
          </p>
          <p className="lrn-eq lrn-eq-hero">{`$$\\Delta S = nR \\ln \\frac{V_f}{V_i}$$`}</p>
          <EntropyChangeViz />
          <h3>Worked Example: Volume Doubled</h3>
          <div className="lrn-steps">
            <div className="lrn-step">
              <span className="lrn-step-title">Step 1</span>
              <p className="lrn-step-content">
                {`$\\Delta S_m = R \\ln 2 = (8.314)(0.693) = +5.76\\,\\text{J K}^{-1}\\,\\text{mol}^{-1}$.`}
              </p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">Step 2: Reversible vs free expansion</span>
              <p className="lrn-step-content">
                {`$\\Delta S_{sys}$ is the same for both (state function). Reversible: surroundings lose
                the same, so $\\Delta S_{tot} = 0$. Free expansion: surroundings do not change, so
                $\\Delta S_{tot} = +5.76\\,\\text{J K}^{-1}\\,\\text{mol}^{-1}$.`}
              </p>
            </div>
          </div>
          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Reversible expansion</span>
              <p>
                {`$\\Delta S_{sys} = +5.76$, $\\Delta S_{surr} = -5.76$, $\\Delta S_{tot} = 0$. At
                equilibrium.`}
              </p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Free expansion (irreversible)</span>
              <p>
                {`$\\Delta S_{sys} = +5.76$, $\\Delta S_{surr} = 0$, $\\Delta S_{tot} = +5.76$. Spontaneous.`}
              </p>
            </div>
          </div>
          <p>
            One special case is worth a note. A reversible adiabatic change carries no heat, so{' '}
            {`$\\Delta S = 0$`}. It is isentropic. The Thermochemistry topic covers adiabatic work
            and the Joule-Thomson effect in full.
          </p>
          <h3>Entropy on Heating</h3>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              You heat a sample from a low temperature to a higher one. Will adding heat near the
              start or near the end raise entropy more?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                Near the start (lower temperature). Dividing by a smaller T gives a larger entropy
                rise.
              </p>
            </details>
          </div>
          <p>
            A small reversible heat at constant pressure is {`$dq_{rev} = C_p\\,dT$`}. Dividing by{' '}
            {`$T$`} and integrating:
          </p>
          <p className="lrn-eq lrn-eq-hero">{`$$\\Delta S = C_p \\ln \\frac{T_f}{T_i}$$`}</p>
          <h3>Worked Example: Heating Water from 20 to 50 Degrees</h3>
          <div className="lrn-steps">
            <div className="lrn-step">
              <span className="lrn-step-title">Step 1: Convert temperatures</span>
              <p className="lrn-step-content">
                {`$T_i = 293\\,\\text{K}$, $T_f = 323\\,\\text{K}$.`}
              </p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">Step 2: Apply formula</span>
              <p className="lrn-step-content">
                {`$\\Delta S_m = (75.3)\\ln \\frac{323}{293} = (75.3)(0.0975) = +7.34\\,\\text{J K}^{-1}\\,\\text{mol}^{-1}$.`}
              </p>
            </div>
          </div>
          <h3>Phase Transition Entropy</h3>
          <p>
            A phase transition happens at a fixed temperature. Heat flows reversibly during it. The
            entropy change is the transition heat over the transition temperature.
          </p>
          <p className="lrn-eq">{`$$\\Delta_{fus} S = \\frac{\\Delta_{fus} H}{T_f} \\qquad \\Delta_{vap} S = \\frac{\\Delta_{vap} H}{T_b}$$`}</p>
          <h3>Worked Example: Alpha to Beta Sulfur</h3>
          <div className="lrn-steps">
            <div className="lrn-step">
              <span className="lrn-step-title">Step 1</span>
              <p className="lrn-step-content">
                {`$\\Delta_{trs} S = \\frac{402\\,\\text{J mol}^{-1}}{369\\,\\text{K}} = +1.09\\,\\text{J K}^{-1}\\,\\text{mol}^{-1}$.`}
              </p>
            </div>
          </div>
          <h3>Trouton's Rule</h3>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              Many different liquids boil at very different temperatures. Yet their entropy of
              vaporization is often about the same number. Why might that be?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                The jump from liquid to gas creates similar disorder for many substances. The gas
                state is roughly equally chaotic for each.
              </p>
            </details>
          </div>
          <p>For many liquids, the entropy of vaporization is close to one value:</p>
          <p className="lrn-eq">{`$$\\Delta_{vap} S \\approx 85\\,\\text{J K}^{-1}\\,\\text{mol}^{-1}$$`}</p>
          <TroutonRuleViz />
          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Normal liquids (rule holds)</span>
              <p>Bromine, benzene, acetone. Near {`$85\\,\\text{J K}^{-1}\\,\\text{mol}^{-1}$`}.</p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Exceptions (rule fails)</span>
              <p>
                Water and ethanol exceed it. Hydrogen bonds give extra order in the liquid. Breaking
                that order on boiling adds extra entropy.
              </p>
            </div>
          </div>
          <h3>Worked Example: Bromine Boiling Point Estimate</h3>
          <div className="lrn-steps">
            <div className="lrn-step">
              <span className="lrn-step-title">Step 1: Convert boiling point</span>
              <p className="lrn-step-content">{`$T_b = 59.2 + 273.2 = 332.4\\,\\text{K}$.`}</p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">Step 2: Apply Trouton's rule</span>
              <p className="lrn-step-content">
                {`$\\Delta_{vap} H \\approx T_b \\times 85 = (332.4)(85) \\approx 28\\,\\text{kJ mol}^{-1}$.`}
              </p>
            </div>
          </div>
          <h3>Entropy Change on Heating Across Phases: Composite Processes</h3>
          <p>
            Because entropy is a state function, you can split any change into easy steps and add
            the entropy of each step. The path does not affect the total.
          </p>
          <h3>Worked Example: Argon Irreversible Compression</h3>
          <div className="lrn-steps">
            <div className="lrn-step">
              <span className="lrn-step-title">Step 1: Volume step at constant T</span>
              <p className="lrn-step-content">
                {`$$\\Delta S_1 = nR \\ln \\frac{V_f}{V_i} = (1.00)(8.314)\\ln \\frac{1.00}{5.00} = (8.314)(-1.609) = -13.4\\,\\text{J K}^{-1}$$`}
              </p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">Step 2: Heating step</span>
              <p className="lrn-step-content">
                {`$T_i = 293.2\\,\\text{K}$, $T_f = 298.4\\,\\text{K}$, $C_V = \\frac{3}{2}R = 12.47\\,\\text{J K}^{-1}\\,\\text{mol}^{-1}$.`}
                {` $\\Delta S_2 = (12.47)\\ln \\frac{298.4}{293.2} = (12.47)(0.0176) = +0.22\\,\\text{J K}^{-1}$.`}
              </p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">Step 3: Total</span>
              <p className="lrn-step-content">
                {`$\\Delta S = -13.4 + 0.22 = -13.2\\,\\text{J K}^{-1}$.`}
              </p>
            </div>
          </div>
        </>,

        <>
          <div className="lrn-header">
            <h2>The Third Law and Standard Molar Entropies</h2>
          </div>
          <p>
            The <strong>Third Law</strong> states: the entropy of every perfect crystal is zero at
            absolute zero. This is exactly the {`$S = k \\ln 1 = 0$`} result we already found from
            counting one arrangement. So entropy has a true zero, an absolute scale. Enthalpy does
            not.
          </p>
          <h3>Standard Molar Entropies and Standard Reaction Entropy</h3>
          <p>
            A standard molar entropy {`$S_m^\\circ$`} is the absolute entropy of one mole at 1 bar
            and 298 K. These values are absolute, not relative. Gases have large values, liquids
            smaller, solids smallest. Even an element has {`$S_m^\\circ > 0$`} at room temperature.
          </p>
          <p>The standard reaction entropy sums product entropies minus reactant entropies:</p>
          <p className="lrn-eq">{`$$\\Delta_r S^\\circ = \\sum n\\, S_m^\\circ(\\text{products}) - \\sum n\\, S_m^\\circ(\\text{reactants})$$`}</p>
          <h3>Worked Example: Entropy of Forming Liquid Water</h3>
          <div className="lrn-steps">
            <div className="lrn-step">
              <span className="lrn-step-title">Step 1: Set up subtraction</span>
              <p className="lrn-step-content">
                {`$$\\Delta_r S^\\circ = S_m^\\circ(\\text{H}_2\\text{O}) - \\left[S_m^\\circ(\\text{H}_2) + \\tfrac{1}{2}S_m^\\circ(\\text{O}_2)\\right]$$`}
              </p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">Step 2: Put in numbers</span>
              <p className="lrn-step-content">
                {`$\\Delta_r S^\\circ = 69.9 - [130.7 + \\tfrac{1}{2}(205.1)] = 69.9 - 233.25 = -163.4\\,\\text{J K}^{-1}\\,\\text{mol}^{-1}$.`}
              </p>
            </div>
          </div>
          <p>
            You can now find any standard reaction entropy: look up each species' {`$S_m^\\circ$`},
            then subtract reactant sum from product sum.
          </p>
          <h3>Residual Entropy</h3>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              Carbon monoxide is nearly symmetric, so molecules can point two ways. What might its
              entropy be at absolute zero?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                {`$S = R \\ln 2 \\approx 5.76\\,\\text{J K}^{-1}\\,\\text{mol}^{-1}$. Each molecule can
                freeze in two random orientations.`}
              </p>
            </details>
          </div>
          <p>
            Some crystals keep disorder even at absolute zero. Each molecule can sit in more than
            one orientation. This leftover entropy is the <strong>residual entropy</strong>.
          </p>
          <ResidualEntropyViz />
          <table>
            <thead>
              <tr>
                <th>Substance</th>
                <th>{`Measured / J K$^{-1}$ mol$^{-1}$`}</th>
                <th>{`Predicted / J K$^{-1}$ mol$^{-1}$`}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Ice</td>
                <td>3.4</td>
                <td>3.4</td>
              </tr>
              <tr>
                <td>CO</td>
                <td>4.6</td>
                <td>{`5.76 ($R \\ln 2$)`}</td>
              </tr>
              <tr>
                <td>{`FClO$_3$`}</td>
                <td>10.1</td>
                <td>{`11.5 ($R \\ln 4$)`}</td>
              </tr>
            </tbody>
          </table>
        </>,

        <>
          <div className="lrn-header">
            <h2>Entropy of the Surroundings and Total Spontaneity</h2>
          </div>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              An exothermic reaction dumps heat into the room. Does the room's entropy rise or fall,
              and how does temperature affect the size?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                The room's entropy rises. At lower temperature, the same heat raises entropy more
                (dividing by a smaller T).
              </p>
            </details>
          </div>
          <p>
            We met the seed for this earlier: {`$\\Delta S_{surr} = \\frac{q_{surr}}{T}$`} because
            the surroundings are huge and stay at constant T. Now connect it to enthalpy. At
            constant pressure, the heat a reaction releases is its enthalpy change. The surroundings
            receive that heat, so {`$q_{surr} = -\\Delta H$`}.
          </p>
          <p>Substitute this into the seed to get the equation you will actually use:</p>
          <p className="lrn-eq lrn-eq-hero">{`$$\\Delta S_{surr} = \\frac{q_{surr}}{T} = -\\frac{\\Delta H}{T}$$`}</p>
          <p>
            An exothermic reaction has {`$\\Delta H < 0$`}, so {`$\\Delta S_{surr} > 0$`}. The
            surroundings gain heat and their entropy rises.
          </p>
          <p>The total entropy change adds the system and the surroundings:</p>
          <p className="lrn-eq">{`$$\\Delta S_{tot} = \\Delta S_{sys} + \\Delta S_{surr}$$`}</p>
          <ul className="lrn-list">
            <li>{`$\\Delta S_{tot} > 0$: change is spontaneous.`}</li>
            <li>{`$\\Delta S_{tot} < 0$: reverse change is spontaneous.`}</li>
            <li>{`$\\Delta S_{tot} = 0$: system is at equilibrium.`}</li>
          </ul>
          <p>
            Compute the system and surroundings entropy separately, then add them for the total.
          </p>
          <h3>Worked Example: Water Freezing at Minus 10 Degrees</h3>
          <div className="lrn-steps">
            <div className="lrn-step">
              <span className="lrn-step-title">Step 1: Convert temperature</span>
              <p className="lrn-step-content">{`$T = 263\\,\\text{K}$.`}</p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">Step 2: Surroundings entropy</span>
              <p className="lrn-step-content">
                {`$\\Delta S_{surr} = -\\frac{-6.01 \\times 10^3}{263} = +22.9\\,\\text{J K}^{-1}\\,\\text{mol}^{-1}$.`}
              </p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">Step 3: Total</span>
              <p className="lrn-step-content">
                {`$\\Delta S_{sys} \\approx -22\\,\\text{J K}^{-1}\\,\\text{mol}^{-1}$. The surroundings gain more than the system loses, so $\\Delta S_{tot} > 0$. Freezing is spontaneous below 0°C.`}
              </p>
            </div>
          </div>
          <h3>Worked Example: Magnesium Burning in Oxygen</h3>
          <div className="lrn-steps">
            <div className="lrn-step">
              <span className="lrn-step-title">Step 1: System entropy</span>
              <p className="lrn-step-content">{`$\\Delta S_{sys} = -217\\,\\text{J K}^{-1}$.`}</p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">Step 2: Surroundings entropy</span>
              <p className="lrn-step-content">
                {`$\\Delta S_{surr} = \\frac{1202 \\times 10^3}{298} = +4030\\,\\text{J K}^{-1}$.`}
              </p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">Step 3: Total</span>
              <p className="lrn-step-content">
                {`$\\Delta S_{tot} = -217 + 4030 = +3810\\,\\text{J K}^{-1}$. Strongly spontaneous.`}
              </p>
            </div>
          </div>
          <p>
            You can now test any reaction for spontaneity: compute {`$\\Delta S_{sys}$`} and{' '}
            {`$\\Delta S_{surr}$`}, add them, and check the sign of {`$\\Delta S_{tot}$`}.
          </p>
        </>,

        <>
          <div className="lrn-header">
            <h2>Gibbs Energy</h2>
          </div>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              Computing total entropy means tracking the surroundings too. Could we build a function
              of the system alone that still predicts spontaneity?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                Yes. Gibbs energy folds the surroundings contribution into a single system property
                at constant temperature and pressure.
              </p>
            </details>
          </div>
          <p>
            The <strong>Gibbs energy</strong> is defined as:
          </p>
          <p className="lrn-eq lrn-eq-hero">{`$$G = H - TS$$`}</p>
          <p>For a change at constant temperature, this becomes the equation you will use most:</p>
          <p className="lrn-eq">{`$$\\Delta G = \\Delta H - T\\Delta S$$`}</p>
          <h3>Worked Example: Plug In to Find Delta G</h3>
          <p>
            A reaction has {`$\\Delta H = -100\\,\\text{kJ mol}^{-1}$`} and{' '}
            {`$\\Delta S = +50\\,\\text{J K}^{-1}\\,\\text{mol}^{-1}$`} at {`$T = 298\\,\\text{K}$`}
            . Find {`$\\Delta G$`}.
          </p>
          <div className="lrn-steps">
            <div className="lrn-step">
              <span className="lrn-step-title">Step 1: Match the units</span>
              <p className="lrn-step-content">
                {`$\\Delta H = -100{,}000\\,\\text{J mol}^{-1}$`}. Keep entropy in J so the units
                agree.
              </p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">Step 2: Substitute</span>
              <p className="lrn-step-content">
                {`$\\Delta G = -100{,}000 - (298)(50) = -100{,}000 - 14{,}900$`}.
              </p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">Step 3: Result</span>
              <p className="lrn-step-content">
                {`$\\Delta G = -114{,}900\\,\\text{J mol}^{-1} = -114.9\\,\\text{kJ mol}^{-1}$`}. It
                is negative, so the reaction is spontaneous.
              </p>
            </div>
          </div>
          <p>
            Gibbs energy {`$G$`} suits reactions at constant temperature and pressure, which covers
            most chemistry. A spontaneous change has {`$dG_{T,p} \\leq 0$`}.
          </p>
          <h3>Criteria of Spontaneity from Gibbs Energy</h3>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              At constant temperature and pressure, which way does Gibbs energy move during a
              spontaneous change: up or down?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>Down. Spontaneous change lowers Gibbs energy. Equilibrium is the minimum.</p>
            </details>
          </div>
          <div className="lrn-proof">
            <div className="lrn-proof-step">
              <span className="lrn-proof-label">Step 1</span>
              <p>{`Start from the Clausius inequality: $dS \\geq \\frac{dq}{T}$.`}</p>
            </div>
            <div className="lrn-proof-step">
              <span className="lrn-proof-label">Step 2</span>
              <p>{`At constant pressure, $dq = dH$. So $T\\,dS \\geq dH$.`}</p>
            </div>
            <div className="lrn-proof-step">
              <span className="lrn-proof-label">Step 3</span>
              <p>{`Rearrange: $dH - T\\,dS \\leq 0$.`}</p>
            </div>
            <div className="lrn-proof-step">
              <span className="lrn-proof-label">Step 4</span>
              <p>
                {`At constant temperature, $d(TS) = T\\,dS$, so $dH - T\\,dS = dG$. Therefore $dG \\leq 0$.`}
              </p>
            </div>
          </div>
          <div className="lrn-faded">
            <span className="lrn-faded-label">FADED EXAMPLE</span>
            <div className="lrn-faded-phase">
              <span className="lrn-faded-phase-label">Full guidance</span>
              <p>{`Start from $T\\,dS \\geq dH$. Rearrange to $dH - T\\,dS \\leq 0$.`}</p>
            </div>
            <div className="lrn-faded-phase">
              <span className="lrn-faded-phase-label">Partial guidance</span>
              <p>{`At constant $T$, what is $d(H - TS)$? How does that become $dG \\leq 0$?`}</p>
            </div>
            <div className="lrn-faded-phase">
              <span className="lrn-faded-phase-label">Your turn</span>
              <p>
                Complete the derivation. State the spontaneity criterion and the equilibrium
                condition.
              </p>
            </div>
          </div>
          <h3>Gibbs Energy Equals Negative T Times Total Entropy</h3>
          <p>
            Gibbs energy is just a repackaging of the total entropy change. At constant temperature
            and pressure, the system and surroundings entropy fold into one system property:
          </p>
          <p className="lrn-eq lrn-eq-hero">{`$$\\Delta G = -T\\,\\Delta S_{tot}$$`}</p>
          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>
              Why does dividing by minus T flip the sign, so that minimizing G maximizes total
              entropy?
            </p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                {`Since $\\Delta G = -T\\,\\Delta S_{tot}$ and $T > 0$, lowering $G$ (making $\\Delta G$ negative) means
                $\\Delta S_{tot}$ is positive. The two criteria are the same statement, connected by a factor
                of $-T$.`}
              </p>
            </details>
          </div>
        </>,

        <>
          <div className="lrn-header">
            <h2>Gibbs Energy as Usable Work</h2>
          </div>
          <p>
            Gibbs energy is more than a spontaneity test. The drop in Gibbs energy sets the most
            useful work a reaction can deliver at constant temperature and pressure. This is the
            energy available beyond pushing back the surroundings.
          </p>
          <p className="lrn-eq lrn-eq-hero">{`$$w_{add,max} = \\Delta G$$`}</p>
          <p>
            A negative {`$\\Delta G$`} means the reaction can power other tasks. Cells use exactly
            this to drive life, as the biology section shows.
          </p>
          <h3>Worked Example: Usable Work from Glucose</h3>
          <div className="lrn-steps">
            <div className="lrn-step">
              <span className="lrn-step-title">Step 1: Look up the standard value</span>
              <p className="lrn-step-content">
                {`Burning one mole of glucose has $\\Delta_r G^\\circ \\approx -2879\\,\\text{kJ mol}^{-1}$ at 298 K.`}
              </p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">Step 2: Read the maximum work</span>
              <p className="lrn-step-content">
                The drop in Gibbs energy sets the usable work, so up to 2879 kJ per mole is
                available.
              </p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">Step 3: Connect to life</span>
              <p className="lrn-step-content">
                This drives biological work such as building peptide links.
              </p>
            </div>
          </div>
        </>,

        <>
          <div className="lrn-header">
            <h2>Standard Gibbs Energies and Spontaneity</h2>
          </div>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              You know a reaction's enthalpy and entropy. How do you combine them to get its
              standard Gibbs energy at a given temperature?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                {`Subtract the temperature-weighted entropy from the enthalpy: $\\Delta_r G^\\circ = \\Delta_r H^\\circ - T\\Delta_r S^\\circ$.`}
              </p>
            </details>
          </div>
          <p className="lrn-eq lrn-eq-hero">{`$$\\Delta_r G^\\circ = \\Delta_r H^\\circ - T\\Delta_r S^\\circ$$`}</p>
          <h3>Worked Example: Standard Gibbs Energy of Ammonia Synthesis</h3>
          <p>
            For {`$N_2(g) + 3\\,H_2(g) \\to 2\\,NH_3(g)$`} at 298 K,{' '}
            {`$\\Delta_r H^\\circ = -92.2\\,\\text{kJ mol}^{-1}$`} and{' '}
            {`$\\Delta_r S^\\circ = -198.9\\,\\text{J K}^{-1}\\,\\text{mol}^{-1}$`}. Find{' '}
            {`$\\Delta_r G^\\circ$`}.
          </p>
          <div className="lrn-steps">
            <div className="lrn-step">
              <span className="lrn-step-title">Step 1: Match the units</span>
              <p className="lrn-step-content">
                {`$\\Delta_r H^\\circ = -92{,}200\\,\\text{J mol}^{-1}$`}. Entropy is already in J.
              </p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">Step 2: Substitute</span>
              <p className="lrn-step-content">
                {`$\\Delta_r G^\\circ = -92{,}200 - (298)(-198.9) = -92{,}200 + 59{,}272$`}.
              </p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">Step 3: Result</span>
              <p className="lrn-step-content">
                {`$\\Delta_r G^\\circ = -32{,}900\\,\\text{J mol}^{-1} \\approx -32.9\\,\\text{kJ mol}^{-1}$`}
                . Negative, so the reaction is spontaneous at 298 K.
              </p>
            </div>
          </div>
          <h3>Effect of Temperature on Spontaneity</h3>
          <p>
            The signs of {`$\\Delta H$`} and {`$\\Delta S$`} determine how temperature affects
            spontaneity.
          </p>
          <table>
            <thead>
              <tr>
                <th>{`$\\Delta H$`}</th>
                <th>{`$\\Delta S$`}</th>
                <th>{`$\\Delta G$`}</th>
                <th>Spontaneity</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Negative</td>
                <td>Positive</td>
                <td>Always negative</td>
                <td>Spontaneous at all temperatures</td>
              </tr>
              <tr>
                <td>Negative</td>
                <td>Negative</td>
                <td>Negative at low T only</td>
                <td>Enthalpy-driven; spontaneous at low T</td>
              </tr>
              <tr>
                <td>Positive</td>
                <td>Positive</td>
                <td>Negative at high T only</td>
                <td>Entropy-driven; spontaneous at high T</td>
              </tr>
              <tr>
                <td>Positive</td>
                <td>Negative</td>
                <td>Always positive</td>
                <td>Never spontaneous</td>
              </tr>
            </tbody>
          </table>
          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>
              {`In cases 3 and 4, a crossover temperature exists where $\\Delta G = 0$, so
              $T = \\frac{\\Delta H}{\\Delta S}$. Below or above this point, the sign of $\\Delta G$ flips.`}
            </p>
          </div>
          <h3>Worked Example: Crossover Temperature for Iron Oxide Reduction</h3>
          <div className="lrn-steps">
            <div className="lrn-step">
              <span className="lrn-step-title">Step 1: Identify case</span>
              <p className="lrn-step-content">
                {`$\\Delta H = +467.9\\,\\text{kJ}$, $\\Delta S = +558.4\\,\\text{J K}^{-1}$. Both positive.`}
              </p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">Step 2: Find crossover</span>
              <p className="lrn-step-content">
                {`$$T = \\frac{\\Delta H^\\circ}{\\Delta S^\\circ} = \\frac{467.9 \\times 10^3}{558.4} = 838\\,\\text{K}$$`}
              </p>
            </div>
          </div>
          <p>
            You can now find the flip temperature for any reaction: set {`$\\Delta G = 0$`} and
            solve {`$T = \\Delta H^\\circ / \\Delta S^\\circ$`}.
          </p>
          <GibbsCrossoverViz />
          <h3>Gibbs Energies of Formation</h3>
          <p>
            {`The standard Gibbs energy of formation $\\Delta_f G^\\circ$ is the Gibbs energy change for
            forming a compound from its elements in their standard states. We set elements in their
            standard states to zero. For ions: $\\Delta_f G^\\circ(\\text{H}^+, \\text{aq}) = 0$.`}
          </p>
          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Thermodynamically stable</span>
              <p>{`$\\Delta_f G^\\circ < 0$. Will not decompose to its elements on its own.`}</p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Thermodynamically unstable</span>
              <p>
                {`$\\Delta_f G^\\circ > 0$. Decomposition is the spontaneous direction. Yet unstable
                does not mean fast. Benzene is unstable by this measure but lasts for years.`}
              </p>
            </div>
          </div>
          <p>Reaction Gibbs energy from formation values:</p>
          <p className="lrn-eq">{`$$\\Delta_r G^\\circ = \\sum n\\,\\Delta_f G^\\circ(\\text{products}) - \\sum n\\,\\Delta_f G^\\circ(\\text{reactants})$$`}</p>
          <h3>Worked Example: CO Oxidation</h3>
          <div className="lrn-steps">
            <div className="lrn-step">
              <span className="lrn-step-title">Step 1</span>
              <p className="lrn-step-content">
                {`$\\Delta_r G^\\circ = \\Delta_f G^\\circ(\\text{CO}_2) - [\\Delta_f G^\\circ(\\text{CO}) + \\tfrac{1}{2}(0)] = -394.4 - (-137.2) = -257.2\\,\\text{kJ mol}^{-1}$.`}
              </p>
            </div>
          </div>
          <h3>Phase Equilibrium</h3>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              Ice and water sit together at exactly 0 degrees Celsius. What is the Gibbs energy
              difference between the two phases?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                Zero. At equilibrium, both phases have equal Gibbs energy. Neither is more stable.
              </p>
            </details>
          </div>
          <p>
            At the melting point, the two phases have equal Gibbs energy, so {`$\\Delta G = 0$`}{' '}
            defines that equilibrium. Above 0°C, melting has {`$\\Delta G_m < 0$`} (spontaneous). At
            0°C, {`$\\Delta G_m = 0$`} (equilibrium).
          </p>
          <PhaseEquilibriumGibbsViz />
          <div className="lrn-callout">
            <p>
              How Gibbs energy ties to the equilibrium constant K, through{' '}
              {`$\\Delta G = \\Delta G^\\circ + RT \\ln Q$`} and {`$\\Delta G^\\circ = -RT \\ln K$`}
              , belongs to the Equilibrium topic. Here we stay with spontaneity and standard values.
            </p>
          </div>
        </>,

        <>
          <div className="lrn-header">
            <h2>Thermodynamics in Biology</h2>
          </div>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              Building a protein from amino acids is nonspontaneous on its own. How might a cell
              make it happen anyway?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                Couple the nonspontaneous reaction to ATP hydrolysis (a cell splitting ATP, its
                energy-carrier molecule, with water). The combined Gibbs energy becomes negative if
                the ATP release exceeds the biosynthesis cost.
              </p>
            </details>
          </div>
          <p>
            Life depends on Gibbs energy. Many vital reactions are nonspontaneous alone. Cells run
            them by coupling to ATP hydrolysis:
          </p>
          <p className="lrn-eq">{`$$\\Delta G^\\circ_{\\text{ATP}} \\approx -30\\,\\text{kJ mol}^{-1}$$`}</p>
          <ATPCouplingViz />
          <h3>Worked Example: Coupling Drives an Uphill Reaction</h3>
          <p>
            A cell needs to build a molecule that costs {`$+20\\,\\text{kJ mol}^{-1}$`}. Alone, this
            is nonspontaneous. Couple it to ATP hydrolysis at {`$-30\\,\\text{kJ mol}^{-1}$`}.
          </p>
          <div className="lrn-steps">
            <div className="lrn-step">
              <span className="lrn-step-title">Step 1: Add the Gibbs energies</span>
              <p className="lrn-step-content">
                {`$\\Delta G_{\\text{net}} = -30 + 20 = -10\\,\\text{kJ mol}^{-1}$`}.
              </p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">Step 2: Read the sign</span>
              <p className="lrn-step-content">
                The net {`$\\Delta G$`} is negative, so the coupled pair runs. ATP supplies the
                push.
              </p>
            </div>
          </div>
          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>
              A cell links ATP hydrolysis directly to a nonspontaneous reaction. The two together
              give a net negative {`$\\Delta G$`}, so the pair runs. Life does not break the Second
              Law. A cell lowers its own entropy by building order. But it releases far more heat to
              its surroundings. The total entropy of the universe still rises.
            </p>
          </div>
          <h3>Worked Example: Peptide Links Driven by Glucose</h3>
          <div className="lrn-steps">
            <div className="lrn-step">
              <span className="lrn-step-title">Step 1: Available work from glucose</span>
              <p className="lrn-step-content">
                Glucose oxidation supplies about 2879 kJ of usable non-expansion work per mole.
              </p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">Step 2: Cost per peptide link</span>
              <p className="lrn-step-content">
                Forming one peptide link uses roughly 17 kJ in practice.
              </p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">Step 3: Estimate links</span>
              <p className="lrn-step-content">
                {`$\\text{links} \\approx \\frac{2879}{17} \\approx 170$.`}
              </p>
            </div>
          </div>
        </>
      ]
    },
    practice: [
      {
        q: 'Water freezes spontaneously at -10°C but not at +10°C. What rule determines whether a process is spontaneous?',
        a: `The Second Law of Thermodynamics determines spontaneity. It states that the total entropy of the universe increases for any spontaneous process, so $\\Delta S_{tot} > 0$ is the criterion.`
      },
      {
        q: 'You add 100 J of heat reversibly to water at 25°C (298 K). What is the entropy change?',
        a: `Use $\\Delta S = \\frac{q_{rev}}{T}$. Substituting gives $\\Delta S = \\frac{100}{298} = +0.336$ J K$^{-1}$. The positive sign means entropy increases when heat flows in.`
      },
      {
        q: 'State the Kelvin statement of the Second Law in your own words.',
        a: 'No device can convert heat completely into work in a cyclic process without any other effect. The engine must always dump some heat to a cold reservoir.'
      },
      {
        q: 'State the Clausius statement of the Second Law.',
        a: 'Heat does not flow spontaneously from a cold body to a hot body. A refrigerator requires external work to move heat against its natural direction.'
      },
      {
        q: 'Write the thermodynamic definition of entropy change and explain each symbol.',
        a: `$$dS = \\frac{dq_{rev}}{T}$$ Here $dq_{rev}$ is the heat transferred reversibly, $T$ is the absolute temperature in kelvin, and $dS$ is the infinitesimal entropy change of the system.`
      },
      {
        q: 'Melting ice at 0°C absorbs 6.01 kJ mol$^{-1}$. Calculate $\\Delta S$ for melting 1 mol at 0°C (273 K).',
        a: `$\\Delta S = \\frac{6010}{273} = +22.0$ J K$^{-1}$ mol$^{-1}$. The positive value makes sense: liquid water has more disorder than ice.`
      },
      {
        q: 'Write the Clausius inequality and explain when equality holds.',
        a: `$$dS \\geq \\frac{dq}{T}$$ Equality holds only for reversible processes. For irreversible (spontaneous) processes, $dS > \\frac{dq}{T}$ because the system generates extra entropy internally.`
      },
      {
        q: 'If you compress a gas irreversibly, will the entropy change of the gas be greater or less than $\\frac{dq}{T}$?',
        a: `The entropy change of the gas will be greater than $\\frac{dq}{T}$ according to the Clausius inequality. Irreversible compression generates extra entropy inside the system beyond what heat transfer alone accounts for.`
      },
      {
        q: 'Write the Boltzmann entropy equation and define each symbol.',
        a: `$$S = k \\ln W$$ Here $k = 1.381 \\times 10^{-23}$ J K$^{-1}$ is Boltzmann's constant and $W$ is the number of microstates (arrangements) available to the system.`
      },
      {
        q: 'A CO molecule can point two ways in a crystal. Four CO molecules give $W = 2^4 = 16$. How does going to eight molecules change $S$?',
        a: `For 8 molecules, $W = 2^8 = 256$, so $S = k \\ln 256 = 8k \\ln 2$. Going from 4 to 8 molecules adds $4k \\ln 2$ more, because each extra molecule adds the same fixed amount $k \\ln 2$ to $S$.`
      },
      {
        q: 'Why does a gas spontaneously expand into a vacuum? Use the Boltzmann equation.',
        a: `Expanding into a vacuum increases the number of positions available to each molecule. More positions means more microstates $W$, so $S = k \\ln W$ increases. The process moves toward higher probability.`
      },
      {
        q: 'Elaborate on why $S = k \\ln W$ means entropy is additive but $W$ is multiplicative.',
        a: `For two independent subsystems A and B, the total microstates are $W_{tot} = W_A \\times W_B$ (each arrangement of A combines with each of B). Taking the logarithm gives $S_{tot} = k \\ln W_A + k \\ln W_B = S_A + S_B$. The logarithm converts multiplication into addition, making entropy an extensive property (one that scales with the amount of material).`
      },
      {
        q: 'Write the expression for entropy change when 1 mol of ideal gas expands isothermally from volume $V_i$ to $V_f$.',
        a: `$$\\Delta S_m = R \\ln \\frac{V_f}{V_i}$$ Because temperature is constant, we use only the volume ratio. $R = 8.314$ J K$^{-1}$ mol$^{-1}$ is the gas constant.`
      },
      {
        q: '1.00 mol of N$_2$ expands from 22.0 L to 44.0 L at constant temperature. Calculate $\\Delta S$.',
        a: `$\\Delta S = R \\ln \\frac{44.0}{22.0} = (8.314)(\\ln 2) = (8.314)(0.693) = +5.76$ J K$^{-1}$. Doubling the volume doubles the available microstates, so $\\Delta S = R \\ln 2$.`
      },
      {
        q: '0.5 mol of O$_2$ expands isothermally from 10 L to 30 L. What is $\\Delta S$?',
        a: `$\\Delta S = nR \\ln \\frac{V_f}{V_i} = (0.5)(8.314) \\ln 3 = (4.157)(1.099) = +4.57$ J K$^{-1}$. Half the moles gives half the entropy change compared to 1 mol undergoing the same volume ratio.`
      },
      {
        q: 'If an ideal gas is compressed isothermally, what is the sign of $\\Delta S$ for the gas? Explain.',
        a: `$\\Delta S$ is negative for the gas. Compression reduces the volume, so $V_f < V_i$ and $\\ln(V_f/V_i) < 0$. The gas has fewer positions available, meaning fewer microstates.`
      },
      {
        q: 'Write the expression for entropy change when heating a substance from $T_1$ to $T_2$ at constant pressure.',
        a: `$$\\Delta S_m = C_{p,m} \\ln \\frac{T_f}{T_i}$$ Here $C_{p,m}$ is the molar heat capacity at constant pressure. The logarithm appears because heat flow $dq = C_{p,m} dT$ is divided by $T$ before integrating.`
      },
      {
        q: 'Water is heated from 20°C (293 K) to 50°C (323 K). $C_{p,m} = 75.3$ J K$^{-1}$ mol$^{-1}$. Calculate $\\Delta S_m$.',
        a: `$\\Delta S_m = 75.3 \\times \\ln \\frac{323}{293} = 75.3 \\times 0.0976 = +7.34$ J K$^{-1}$ mol$^{-1}$. Higher temperature means more thermal motion and more ways to distribute energy.`
      },
      {
        q: 'Iron has $C_{p,m} = 25.1$ J K$^{-1}$ mol$^{-1}$. Predict whether heating iron from 300 K to 600 K gives a larger $\\Delta S_m$ than heating water over the same temperature ratio. No calculation needed.',
        a: `The temperature ratio $\\ln(600/300) = \\ln 2$ is the same for both. But water's $C_{p,m} \\approx 75$ is three times larger than iron's 25.1, so water gains three times more entropy per mole over the same ratio.`
      },
      {
        q: "State Trouton's rule and give the approximate value.",
        a: `For most liquids, the entropy of vaporization at the boiling point is approximately 85 J K$^{-1}$ mol$^{-1}$. This is Trouton's rule: $\\Delta_{vap}S° \\approx 85$ J K$^{-1}$ mol$^{-1}$.`
      },
      {
        q: "Bromine (Br$_2$) has a boiling point of 59.2°C (332.4 K). Use Trouton's rule to estimate $\\Delta_{vap}H°$.",
        a: `Trouton's rule gives $\\Delta_{vap}H° = T_{bp} \\times 85 = 332.4 \\times 85 = 28254$ J mol$^{-1}$ $\\approx 28$ kJ mol$^{-1}$. This matches well with experimental values for non-polar liquids.`
      },
      {
        q: "Water's $\\Delta_{vap}H° = 40.7$ kJ mol$^{-1}$ at 100°C (373 K). Calculate $\\Delta_{vap}S°$ and compare to Trouton's value.",
        a: `$\\Delta_{vap}S° = \\frac{40700}{373} = +109$ J K$^{-1}$ mol$^{-1}$. This is higher than Trouton's 85 J K$^{-1}$ mol$^{-1}$ because water has extra order in the liquid phase from hydrogen bonding.`
      },
      {
        q: "Elaborate on why Trouton's rule works and name two substances that deviate from it.",
        a: `At the boiling point, liquids of similar structure go from a disordered liquid to a gas with similar entropy gain. The rule breaks down for water (hydrogen bonding makes liquid extra ordered, so vaporization gains more entropy) and for liquid metals. Ethanol also slightly deviates because of hydrogen bonds.`
      },
      {
        q: 'Would you expect $\\Delta_{vap}S°$ for ethane (C$_2$H$_6$, non-polar) to be close to 85 J K$^{-1}$ mol$^{-1}$? Why?',
        a: `Yes. Ethane is non-polar with no hydrogen bonding, so the liquid has no unusual ordering. Trouton's rule applies best to such liquids, and ethane's value is close to 85 J K$^{-1}$ mol$^{-1}$.`
      },
      {
        q: 'State the Third Law of Thermodynamics.',
        a: 'The entropy of a perfect crystal of any substance is zero at absolute zero (0 K). Every substance has a well-defined entropy at any temperature above 0 K.'
      },
      {
        q: 'What is residual entropy and when does it appear?',
        a: 'Residual entropy is the entropy remaining in a crystal at 0 K due to frozen-in disorder (random arrangements locked in place as the crystal cools). It appears when a molecule has multiple orientations that are nearly equal in energy, so the crystal cannot reach a single ground state as temperature falls.'
      },
      {
        q: 'FClO$_3$ has 4 possible orientations in its crystal. Calculate the residual entropy for 1 mol and compare to the experimental value of 10.1 J K$^{-1}$ mol$^{-1}$.',
        a: `Each of $N_A$ molecules has $W = 4$ orientations, so $W_{total} = 4^{N_A}$. Then $S = k \\ln 4^{N_A} = N_A k \\ln 4 = R \\ln 4 = (8.314)(1.386) = 11.5$ J K$^{-1}$ mol$^{-1}$. The predicted 11.5 exceeds the experimental 10.1 because some ordering occurs as the crystal cools.`
      },
      {
        q: 'CO has residual entropy $\\approx R \\ln 2 = 5.76$ J K$^{-1}$ mol$^{-1}$. Why does CO have residual entropy but N$_2$ does not?',
        a: `CO is nearly symmetric (C and O are similar in size) so both CO and OC orientations have nearly the same energy, trapping disorder. N$_2$ is truly symmetric, so there is only one orientation and $W = 1$, giving $S = k \\ln 1 = 0$.`
      },
      {
        q: 'What is a standard molar entropy $S°_m$ and how does it differ from $\\Delta_f G°$?',
        a: `Standard molar entropy $S°_m$ is the absolute entropy per mole at 298 K and 1 bar, referenced to $S = 0$ at 0 K by the Third Law. Unlike $\\Delta_f G°$ (which is zero for elements by definition), $S°_m$ is never zero for any real substance above 0 K.`
      },
      {
        q: 'Calculate $\\Delta_r S°$ for N$_2$ + 3 H$_2$ $\\to$ 2 NH$_3$ using $S°_m$: NH$_3$ = 192.45, N$_2$ = 191.61, H$_2$ = 130.68 J K$^{-1}$ mol$^{-1}$.',
        a: `$\\Delta_r S° = 2(192.45) - [191.61 + 3(130.68)] = 384.90 - 583.65 = -198.9$ J K$^{-1}$ mol$^{-1}$. The reaction loses entropy because 4 moles of gas become 2 moles, reducing the number of molecules and microstates.`
      },
      {
        q: 'Combustion of methane: CH$_4$ + 2 O$_2$ $\\to$ CO$_2$ + 2 H$_2$O(g). Predict the sign of $\\Delta_r S°$ from mole counts.',
        a: `Reactants have 3 moles of gas; products have 3 moles of gas. The mole count does not change, so $\\Delta_r S°$ will be small and could be positive or negative. You must calculate $\\sum S°_m$(products) $-$ $\\sum S°_m$(reactants) to determine the actual sign.`
      },
      {
        q: 'Write the formula for entropy change in the surroundings and explain its sign convention.',
        a: `$$\\Delta S_{surr} = -\\frac{\\Delta H_{sys}}{T}$$ An exothermic system ($\\Delta H < 0$) releases heat to the surroundings, increasing $\\Delta S_{surr}$. An endothermic system absorbs heat from surroundings, decreasing $\\Delta S_{surr}$.`
      },
      {
        q: 'Water freezes at $-10°C$ (263 K): $\\Delta H_{fus} = +6.01$ kJ mol$^{-1}$. Calculate $\\Delta S_{surr}$ and confirm that freezing is spontaneous there.',
        a: `Freezing reverses fusion, so $\\Delta H_{sys} = -6010$ J mol$^{-1}$. $\\Delta S_{surr} = -\\frac{-6010}{263} = +22.9$ J K$^{-1}$ mol$^{-1}$. The system entropy for freezing at 263 K is $\\Delta S_{sys} \\approx -22.9$ J K$^{-1}$ mol$^{-1}$. Below the normal freezing point, the surroundings gain more than the system loses: $\\Delta S_{tot} > 0$, confirming freezing is spontaneous below 0°C.`
      },
      {
        q: '2 Mg + O$_2$ $\\to$ 2 MgO: $\\Delta H° = -1202$ kJ mol$^{-1}$, $\\Delta_r S° = -217$ J K$^{-1}$ mol$^{-1}$, $T = 298$ K. Calculate $\\Delta S_{tot}$.',
        a: `$\\Delta S_{surr} = \\frac{1202000}{298} = +4030$ J K$^{-1}$ mol$^{-1}$. $\\Delta S_{tot} = -217 + 4030 = +3810$ J K$^{-1}$ mol$^{-1}$. This large positive value shows the reaction is highly spontaneous.`
      },
      {
        q: 'Write the definition of Gibbs energy and explain what it combines.',
        a: `Gibbs energy is $G = H - TS$. It folds enthalpy and the entropy term $TS$ into one function. That single function predicts spontaneity at constant temperature and pressure.`
      },
      {
        q: 'State the criterion of spontaneity in terms of Gibbs energy at constant $T$ and $p$.',
        a: `At constant temperature and pressure, a process is spontaneous if $\\Delta G < 0$, at equilibrium if $\\Delta G = 0$, and non-spontaneous (reverse is spontaneous) if $\\Delta G > 0$.`
      },
      {
        q: 'A reaction has $\\Delta H = -50$ kJ mol$^{-1}$ and $\\Delta S = -100$ J K$^{-1}$ mol$^{-1}$ at 600 K. Is it spontaneous?',
        a: `$\\Delta G = \\Delta H - T\\Delta S = -50000 - (600)(-100) = -50000 + 60000 = +10000$ J mol$^{-1} = +10$ kJ mol$^{-1}$. Since $\\Delta G > 0$, the reaction is not spontaneous at 600 K.`
      },
      {
        q: 'The same reaction runs at 400 K. Is it spontaneous?',
        a: `$\\Delta G = -50000 - (400)(-100) = -50000 + 40000 = -10000$ J mol$^{-1} = -10$ kJ mol$^{-1}$. Now $\\Delta G < 0$, so the reaction becomes spontaneous below a crossover temperature.`
      },
      {
        q: 'For a reaction with $\\Delta H > 0$ and $\\Delta S > 0$, what happens to spontaneity as temperature increases?',
        a: `At low $T$, the positive $\\Delta H$ dominates and $\\Delta G > 0$ (non-spontaneous). As $T$ rises, $T\\Delta S$ grows and eventually exceeds $\\Delta H$, making $\\Delta G < 0$. The reaction becomes spontaneous above a threshold temperature.`
      },
      {
        q: 'List all four sign combinations of $\\Delta H$ and $\\Delta S$ and their spontaneity behavior.',
        a: `(1) $\\Delta H < 0$, $\\Delta S > 0$: always spontaneous. (2) $\\Delta H > 0$, $\\Delta S < 0$: never spontaneous. (3) $\\Delta H < 0$, $\\Delta S < 0$: spontaneous only at low $T$. (4) $\\Delta H > 0$, $\\Delta S > 0$: spontaneous only at high $T$.`
      },
      {
        q: 'Calculate the crossover temperature for 2 Fe$_2$O$_3$ + 3 C $\\to$ 4 Fe + 3 CO$_2$ where $\\Delta H° = +467.9$ kJ mol$^{-1}$ and $\\Delta S° = +558.4$ J K$^{-1}$ mol$^{-1}$.',
        a: `At the crossover, $\\Delta G = 0$, so $T = \\frac{\\Delta H°}{\\Delta S°} = \\frac{467900}{558.4} = 838$ K. Above 838 K, the reaction becomes spontaneous. This is why iron smelting requires high temperatures.`
      },
      {
        q: 'A pharmaceutical reaction has $\\Delta H° = +200$ kJ mol$^{-1}$ and $\\Delta S° = +600$ J K$^{-1}$ mol$^{-1}$. Above what temperature is it spontaneous?',
        a: `$T_{crossover} = \\frac{200000}{600} = 333$ K. Above 333 K (60°C), the reaction is spontaneous. Body temperature (310 K) is below this, so the reaction needs heating.`
      },
      {
        q: 'Write the formula for standard Gibbs energy of reaction from standard enthalpies and entropies.',
        a: `$$\\Delta_r G° = \\Delta_r H° - T\\Delta_r S°$$ This combines the enthalpy term (bond energies, lattice energies) with the temperature-weighted entropy term to give the net free energy change.`
      },
      {
        q: 'HI formation: $\\Delta_r H° = +26.48$ kJ mol$^{-1}$, $\\Delta_r S° = +83.2 \\times 10^{-3}$ kJ K$^{-1}$ mol$^{-1}$ at 298 K. Calculate $\\Delta_r G°$.',
        a: `$\\Delta_r G° = 26.48 - (298)(0.0832) = 26.48 - 24.79 = +1.69$ kJ mol$^{-1}$. The positive value means HI is thermodynamically unstable relative to H$_2$ and I$_2$ at 298 K.`
      },
      {
        q: 'CO oxidation: CO(g) + $\\frac{1}{2}$O$_2$(g) $\\to$ CO$_2$(g). Use $\\Delta_f G°$: CO = $-137.2$ kJ mol$^{-1}$, CO$_2$ = $-394.4$ kJ mol$^{-1}$, O$_2$ = 0. Calculate $\\Delta_r G°$.',
        a: `$\\Delta_r G° = -394.4 - [-137.2 + 0] = -394.4 + 137.2 = -257.2$ kJ mol$^{-1}$. The large negative value confirms CO combustion is strongly spontaneous.`
      },
      {
        q: 'Calculate $\\Delta_r G°$ for 4 NH$_3$ + 5 O$_2$ $\\to$ 4 NO + 6 H$_2$O using $\\Delta_f G°$: NO = +86.55, H$_2$O(g) = $-228.57$, NH$_3$ = $-16.45$, O$_2$ = 0 kJ mol$^{-1}$.',
        a: `$\\Delta_r G° = [4(86.55) + 6(-228.57)] - [4(-16.45) + 5(0)] = [346.2 - 1371.42] - [-65.8] = -1025.22 + 65.8 = -959.42$ kJ mol$^{-1}$. The large negative value confirms this reaction is highly spontaneous.`
      },
      {
        q: 'What does $\\Delta G$ equal for a process at constant $T$ and $p$, and what kind of work does it represent?',
        a: `At constant $T$ and $p$, $\\Delta G$ equals the maximum non-expansion work available from the process. This includes electrical work, chemical work, and mechanical work other than $p\\Delta V$ expansion.`
      },
      {
        q: 'Glucose oxidation has $\\Delta_r G° \\approx -2879$ kJ mol$^{-1}$. How much non-expansion work can the cell do per mole of glucose?',
        a: `The cell can do up to $+2879$ kJ of non-expansion work per mole of glucose, provided the process is carried out reversibly. In practice, cells are less efficient and extract around 40% of this theoretical maximum.`
      },
      {
        q: 'For ATP hydrolysis with $\\Delta_r G° \\approx -30$ kJ mol$^{-1}$, if a biosynthesis reaction needs +20 kJ mol$^{-1}$, can ATP coupling drive it spontaneously?',
        a: `Yes. Coupling adds the Gibbs energies: $-30 + 20 = -10$ kJ mol$^{-1}$. The coupled pair has $\\Delta G < 0$, so the overall process is spontaneous. ATP hydrolysis provides the thermodynamic "push."`
      },
      {
        q: 'H$_2$O(s) $\\to$ H$_2$O(l) at 10°C (283 K): $\\Delta_r G° = -0.22$ kJ mol$^{-1}$. What does this tell you about melting at this temperature?',
        a: `Since $\\Delta_r G° < 0$, melting is spontaneous at 10°C. The system lowers its Gibbs energy by converting ice to liquid water. At exactly 0°C, $\\Delta_r G° = 0$ (equilibrium).`
      },
      {
        q: 'Elaborate on how ATP hydrolysis couples to biosynthesis in cells to drive otherwise non-spontaneous reactions.',
        a: `Cells link ATP hydrolysis ($\\Delta G° \\approx -30$ kJ mol$^{-1}$) directly to reactions with positive $\\Delta G°$. The enzymes form a shared intermediate, so the two reactions share the same Gibbs energy "pool." The combined $\\Delta G° = \\Delta G°_{synthesis} + \\Delta G°_{ATP}$ is negative if the ATP release exceeds the biosynthesis cost. This is thermodynamic coupling: the spontaneous process drives the non-spontaneous one through a common intermediate.`
      },
      {
        q: 'A reaction proceeds spontaneously at all temperatures. What can you conclude about the signs of $\\Delta H$ and $\\Delta S$?',
        a: `Both must favor spontaneity at all $T$. The reaction must have $\\Delta H < 0$ (exothermic, favorable) and $\\Delta S > 0$ (entropy increases). With $\\Delta G = \\Delta H - T\\Delta S$, both terms are negative for all $T > 0$, so $\\Delta G$ is always negative.`
      },
      {
        q: 'For a gas expanding isothermally and reversibly, show that $\\Delta S_{sys} + \\Delta S_{surr} = 0$.',
        a: `For a reversible isothermal expansion, $q_{rev}$ flows from surroundings to gas: $\\Delta S_{sys} = +\\frac{q_{rev}}{T}$. The surroundings lose the same heat: $\\Delta S_{surr} = -\\frac{q_{rev}}{T}$. Adding them gives $\\Delta S_{tot} = 0$. Reversible processes conserve total entropy.`
      },
      {
        q: 'An irreversible isothermal expansion of an ideal gas produces less work than the reversible case. Which process has higher $\\Delta S_{sys}$? Which has higher $\\Delta S_{tot}$?',
        a: `Both processes have the same initial and final states, so $\\Delta S_{sys}$ is identical (entropy is a state function). But the irreversible process absorbs less heat ($q < q_{rev}$), so $\\Delta S_{surr} = -\\frac{q}{T}$ is smaller in magnitude. Therefore $\\Delta S_{tot}$ is positive and larger for the irreversible process.`
      },
      {
        q: 'What physical quantity does $T\\Delta S$ represent in the Gibbs energy equation $\\Delta G = \\Delta H - T\\Delta S$?',
        a: `$T\\Delta S$ represents the heat that the surroundings must supply (or absorb) in a reversible process at temperature $T$. Subtracting it from $\\Delta H$ gives the energy left over to do non-expansion work: that is $\\Delta G$.`
      },
      {
        q: 'A reaction has $\\Delta H° = 0$ but $\\Delta S° = +50$ J K$^{-1}$ mol$^{-1}$. At 300 K, what drives it forward?',
        a: `With $\\Delta H° = 0$, $\\Delta G° = -T\\Delta S° = -(300)(50) = -15000$ J mol$^{-1} = -15$ kJ mol$^{-1}$. Entropy alone drives the reaction. This is an entropy-driven process: no energy is released, but disorder increases.`
      },
      {
        q: 'Why does $\\Delta G = 0$ indicate equilibrium?',
        a: `$\\Delta G = 0$ means the system is at equilibrium. Gibbs energy is at its minimum. The forward and reverse rates balance. Any small change in composition increases $G$, so the system stays put.`
      },
      {
        q: 'Self-explain: Why does the equation $G = H - TS$ make physical sense as a criterion for spontaneity?',
        a: `$H$ measures the energy released to surroundings (heat); exothermic reactions favor spontaneity. $TS$ measures the entropy contribution: processes that increase system entropy are favored. Subtracting $TS$ from $H$ gives the energy available after accounting for entropy. When $G$ decreases, both energy release and entropy increase work together (or one dominates the other). A process is spontaneous when the system can lower its total Gibbs energy.`
      },
      {
        q: 'Self-explain: Why must the temperature be in kelvin (not Celsius) in all thermodynamic equations?',
        a: `Entropy is defined as $dS = \\frac{dq_{rev}}{T}$ where $T$ is absolute temperature. At 0°C, there is still thermal motion and $T = 273$ K, not zero. Using Celsius would make $T = 0$ at the freezing point of water, giving division by zero and nonsensical entropy values. The kelvin scale starts at absolute zero where all thermal motion stops.`
      },
      {
        q: 'Self-explain: A student says "entropy always increases." Correct this statement.',
        a: `The entropy of the universe (system plus surroundings) always increases for a spontaneous process. The entropy of a system alone can decrease (e.g., water freezing, gases compressing). The Second Law applies to the total entropy, not just the system. Any local decrease in entropy is offset by a larger increase elsewhere.`
      },
      {
        q: 'Self-explain: Why is the Third Law necessary for calculating absolute entropies, and why does it not apply to enthalpy?',
        a: `The Third Law defines zero entropy at 0 K for a perfect crystal, giving a fixed reference point. Integrating $C_p/T$ from 0 K gives an absolute entropy value at any temperature. Enthalpy has no natural zero: you cannot measure the total energy of a substance, only changes in energy. Therefore, $\\Delta_f H°$ uses elements as a relative reference, not an absolute zero. Entropy is unique in thermodynamics for having a natural absolute scale.`
      },
      {
        q: 'Elaborate on the statistical meaning of the Second Law using microstates.',
        a: `A macrostate with more microstates ($W$) is more probable. The Second Law says systems evolve toward more probable macrostates. For $10^{23}$ molecules, the spread-out state has vastly more microstates than any ordered one. A spontaneous drop in entropy would need every molecule to crowd into a smaller region at once. That is not impossible, just almost impossibly unlikely.`
      }
    ],
    reference: {
      category: 'Quick Reference',
      title: 'Entropy, Gibbs Free Energy, and Spontaneity',
      sections: [
        <>
          <h2>Definitions and Core Entropy</h2>
          <div className="ref-formula">
            <div className="ref-formula-name">Entropy differential (reversible)</div>
            <div className="ref-formula-eq">{`$$dS = \\frac{dq_{rev}}{T}$$`}</div>
            <p className="ref-formula-desc">
              <strong>When to use:</strong> you need the entropy change for any infinitesimal
              reversible heat transfer.
            </p>
          </div>
          <div className="ref-formula">
            <div className="ref-formula-name">Boltzmann entropy</div>
            <div className="ref-formula-eq">{`$$S = k \\ln W$$`}</div>
            <p className="ref-formula-desc">
              <strong>When to use:</strong>
              {` you connect entropy to statistical disorder; $k = 1.381 \\times 10^{-23}$ J K$^{-1}$.`}
            </p>
          </div>
          <div className="ref-formula">
            <div className="ref-formula-name">Cyclic integral (state function proof)</div>
            <div className="ref-formula-eq">{`$$\\oint \\frac{dq_{rev}}{T} = 0$$`}</div>
            <p className="ref-formula-desc">
              <strong>When to use:</strong> you want to confirm entropy is a state function over any
              complete reversible cycle.
            </p>
          </div>
          <div className="ref-formula">
            <div className="ref-formula-name">Clausius inequality</div>
            <div className="ref-formula-eq">{`$$dS \\geq \\frac{dq}{T}$$`}</div>
            <p className="ref-formula-desc">
              <strong>When to use:</strong> you analyze any real process; equality holds only for
              reversible paths.
            </p>
          </div>
          <div className="ref-formula">
            <div className="ref-formula-name">Isolated system criterion</div>
            <div className="ref-formula-eq">{`$$dS_{tot} \\geq 0$$`}</div>
            <p className="ref-formula-desc">
              <strong>When to use:</strong> you judge spontaneity when no heat or work crosses the
              system boundary.
            </p>
          </div>
        </>,

        <>
          <h2>Entropy Calculations</h2>
          <div className="ref-formula">
            <div className="ref-formula-name">Isothermal expansion (volume form)</div>
            <div className="ref-formula-eq">{`$$\\Delta S = nR \\ln\\frac{V_f}{V_i}$$`}</div>
            <p className="ref-formula-desc">
              <strong>When to use:</strong> an ideal gas expands or compresses at constant
              temperature.
            </p>
          </div>
          <div className="ref-formula">
            <div className="ref-formula-name">Isothermal expansion (pressure form)</div>
            <div className="ref-formula-eq">{`$$\\Delta S = nR \\ln\\frac{p_i}{p_f}$$`}</div>
            <p className="ref-formula-desc">
              <strong>When to use:</strong> you have pressure data; this is equivalent to the volume
              form.
            </p>
          </div>
          <div className="ref-formula">
            <div className="ref-formula-name">Phase transition entropy</div>
            <div className="ref-formula-eq">{`$$\\Delta_{trs} S = \\frac{\\Delta_{trs} H}{T_{trs}}$$`}</div>
            <p className="ref-formula-desc">
              <strong>When to use:</strong> you want the entropy of fusion, vaporization, or
              sublimation at the transition temperature.
            </p>
          </div>
          <div className="ref-formula">
            <div className="ref-formula-name">Heating at constant pressure (fixed Cp)</div>
            <div className="ref-formula-eq">{`$$\\Delta S = C_p \\ln\\frac{T_f}{T_i}$$`}</div>
            <p className="ref-formula-desc">
              <strong>When to use:</strong> you heat a substance from Ti to Tf and Cp is constant.
            </p>
          </div>
          <div className="ref-formula">
            <div className="ref-formula-name">Total entropy change</div>
            <div className="ref-formula-eq">{`$$\\Delta S_{tot} = \\Delta S_{sys} - \\frac{\\Delta H}{T}$$`}</div>
            <p className="ref-formula-desc">
              <strong>When to use:</strong> you test spontaneity by summing the system and
              surroundings entropy.
            </p>
          </div>
          <table>
            <thead>
              <tr>
                <th>Substance</th>
                <th>{`$\\Delta_{vap}S$ / J K$^{-1}$ mol$^{-1}$`}</th>
                <th>Note</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Most liquids</td>
                <td>~85</td>
                <td>Normal vaporization; rule holds</td>
              </tr>
              <tr>
                <td>Water</td>
                <td>109</td>
                <td>H-bonding orders the liquid</td>
              </tr>
              <tr>
                <td>Ethanol</td>
                <td>124</td>
                <td>H-bonding; same effect as water</td>
              </tr>
            </tbody>
          </table>
        </>,

        <>
          <h2>Third Law and Standard Entropies</h2>
          <div className="ref-formula">
            <div className="ref-formula-name">Absolute molar entropy</div>
            <div className="ref-formula-eq">{`$$S_m(T) = S_m(0) + \\int_0^T \\frac{C_{p,m}}{T}\\,dT + \\sum \\frac{\\Delta_{trs}H}{T_{trs}}$$`}</div>
            <p className="ref-formula-desc">
              <strong>When to use:</strong> you build the absolute entropy of a substance from 0 K
              by integrating heat capacity and adding phase transition terms.
            </p>
          </div>
          <div className="ref-formula">
            <div className="ref-formula-name">Standard reaction entropy</div>
            <div className="ref-formula-eq">{`$$\\Delta_r S° = \\sum_{\\text{products}} \\nu S°_m - \\sum_{\\text{reactants}} \\nu S°_m$$`}</div>
            <p className="ref-formula-desc">
              <strong>When to use:</strong> you want the reaction entropy from tabulated standard
              molar entropies.
            </p>
          </div>
          <table>
            <thead>
              <tr>
                <th>Substance</th>
                <th>{`Measured / J K$^{-1}$ mol$^{-1}$`}</th>
                <th>{`Predicted / J K$^{-1}$ mol$^{-1}$`}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Ice</td>
                <td>3.4</td>
                <td>3.4</td>
              </tr>
              <tr>
                <td>CO</td>
                <td>4.6</td>
                <td>{`5.76 ($R \\ln 2$)`}</td>
              </tr>
              <tr>
                <td>{`FClO$_3$`}</td>
                <td>10.1</td>
                <td>{`11.5 ($R \\ln 4$)`}</td>
              </tr>
            </tbody>
          </table>
        </>,

        <>
          <h2>Entropy of Surroundings</h2>
          <div className="ref-formula">
            <div className="ref-formula-name">Surroundings entropy at constant T, p</div>
            <div className="ref-formula-eq">{`$$\\Delta S_{surr} = -\\frac{\\Delta H}{T}$$`}</div>
            <p className="ref-formula-desc">
              <strong>When to use:</strong> you need the surroundings entropy change at constant T
              and p (exothermic heats them, endothermic cools them).
            </p>
          </div>
        </>,

        <>
          <h2>Gibbs Energy: Definition and Criteria</h2>
          <div className="ref-formula">
            <div className="ref-formula-name">Gibbs energy definition</div>
            <div className="ref-formula-eq">{`$$G = H - TS$$`}</div>
            <p className="ref-formula-desc">
              <strong>When to use:</strong> you work with systems at constant temperature and
              pressure (most lab conditions).
            </p>
          </div>
          <div className="ref-formula">
            <div className="ref-formula-name">Gibbs spontaneity criterion</div>
            <div className="ref-formula-eq">{`$$dG_{T,p} \\leq 0$$`}</div>
            <p className="ref-formula-desc">
              <strong>When to use:</strong> you judge spontaneity at constant T and p; equality
              holds at equilibrium.
            </p>
          </div>
          <div className="ref-formula">
            <div className="ref-formula-name">Maximum non-expansion work</div>
            <div className="ref-formula-eq">{`$$w_{add,max} = \\Delta G$$`}</div>
            <p className="ref-formula-desc">
              <strong>When to use:</strong> you want the maximum non-expansion work (electrical,
              mechanical) at constant T, p.
            </p>
          </div>
          <div className="ref-formula">
            <div className="ref-formula-name">Gibbs energy and total entropy</div>
            <div className="ref-formula-eq">{`$$\\Delta G = -T\\Delta S_{tot}$$`}</div>
            <p className="ref-formula-desc">
              <strong>When to use:</strong> you want to connect Gibbs energy directly to the entropy
              of the universe.
            </p>
          </div>
          <table>
            <thead>
              <tr>
                <th>{`$\\Delta H$`}</th>
                <th>{`$\\Delta S$`}</th>
                <th>{`$\\Delta G$`}</th>
                <th>Spontaneity</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Negative</td>
                <td>Positive</td>
                <td>Always negative</td>
                <td>Spontaneous at all temperatures</td>
              </tr>
              <tr>
                <td>Negative</td>
                <td>Negative</td>
                <td>Negative at low T only</td>
                <td>Enthalpy-driven; spontaneous at low T</td>
              </tr>
              <tr>
                <td>Positive</td>
                <td>Positive</td>
                <td>Negative at high T only</td>
                <td>Entropy-driven; spontaneous at high T</td>
              </tr>
              <tr>
                <td>Positive</td>
                <td>Negative</td>
                <td>Always positive</td>
                <td>Never spontaneous</td>
              </tr>
            </tbody>
          </table>
        </>,

        <>
          <h2>Standard Gibbs Energies</h2>
          <div className="ref-formula">
            <div className="ref-formula-name">Standard Gibbs energy from enthalpy and entropy</div>
            <div className="ref-formula-eq">{`$$\\Delta_r G° = \\Delta_r H° - T\\Delta_r S°$$`}</div>
            <p className="ref-formula-desc">
              <strong>When to use:</strong> you compute standard reaction Gibbs energy from
              tabulated standard values.
            </p>
          </div>
          <div className="ref-formula">
            <div className="ref-formula-name">Standard Gibbs energy from formation values</div>
            <div className="ref-formula-eq">{`$$\\Delta G° = \\sum n\\,\\Delta_f G°(\\text{products}) - \\sum n\\,\\Delta_f G°(\\text{reactants})$$`}</div>
            <p className="ref-formula-desc">
              <strong>When to use:</strong> you compute reaction Gibbs energy from tabulated
              standard Gibbs energies of formation.
            </p>
          </div>
          <div className="ref-formula">
            <div className="ref-formula-name">Aqueous proton convention</div>
            <div className="ref-formula-eq">{`$$\\Delta_f G°(\\text{H}^+, \\text{aq}) = 0$$`}</div>
            <p className="ref-formula-desc">
              <strong>When to use:</strong> you set the reference zero for ionic Gibbs energies in
              aqueous solution.
            </p>
          </div>
        </>,

        <>
          <h2>Biological Applications</h2>
          <p>
            Biological systems operate at constant T and p. The Gibbs energy criterion governs all
            spontaneous biochemical processes.
          </p>
          <div className="ref-formula">
            <div className="ref-formula-name">ATP hydrolysis standard Gibbs energy</div>
            <div className="ref-formula-eq">{`$$\\Delta G°_{\\text{ATP}} \\approx -30\\,\\text{kJ mol}^{-1}$$`}</div>
            <p className="ref-formula-desc">
              <strong>When to use:</strong> you need the energy available per mole of ATP hydrolyzed
              to drive coupled reactions.
            </p>
          </div>
          <ul className="lrn-list">
            <li>
              {`$\\Delta A$ governs constant-T, constant-V systems (closed rigid containers).`}
            </li>
            <li>
              {`$\\Delta G$ governs constant-T, constant-p systems (open biological cells and most lab reactions).`}
            </li>
            <li>
              {`Exergonic (energy-releasing) reactions ($\\Delta G < 0$) drive endergonic (energy-absorbing) reactions ($\\Delta G > 0$) when coupled.`}
            </li>
            <li>
              {`Coupled reactions add $\\Delta G$ values algebraically: net $\\Delta G < 0$ makes the combined process spontaneous.`}
            </li>
          </ul>
        </>
      ]
    },
    customCss: null
  }

  return <LearningTemplate config={config} />
}
