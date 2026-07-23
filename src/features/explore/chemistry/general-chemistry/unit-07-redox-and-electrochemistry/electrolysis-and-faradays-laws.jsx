import { LearningTemplate } from '../../../../../components/learning/learning-template'
import {
  FaradayViz,
  WaterSplitOverpotentialViz,
  ElectrolyticCellViz,
  CompetingReactionsViz
} from '../../../../../components/viz'

function useConfig() {
  const config = {
    cssPrefix: 'efl',
    documentTitle: "Electrolysis and Faraday's Laws - AETHER",
    customCss: null,
    learning: {
      groupTitle: 'Redox and Electrochemistry',
      category: 'Unit 7',
      title: "Electrolysis and Faraday's Laws",
      subtitle:
        'How electricity drives nonspontaneous reactions, how to predict what forms at each electrode, and how to calculate mass of product from current and time.',
      sections: [
        <>
          <div className="lrn-header">
            <h2>What You Already Know</h2>
          </div>
          <p>
            You met the galvanic side of electrochemistry just before this topic. This page builds
            directly on it, so here is the short list of ideas you bring with you.
          </p>
          <ul className="lrn-list">
            <li>
              <strong>Redox</strong> means electrons move from one species to another. The species
              that loses electrons is oxidised; the species that gains them is reduced.
            </li>
            <li>
              <strong>Half-reactions</strong> split a redox process into an oxidation step and a
              reduction step, with electrons written explicitly.
            </li>
            <li>
              <strong>Anode and cathode.</strong> Oxidation always happens at the anode. Reduction
              always happens at the cathode. This never changes.
            </li>
            <li>
              <strong>Standard electrode potential</strong> ({`$E^\\circ$`}) ranks how strongly a
              species pulls electrons, measured against the standard hydrogen electrode (SHE).
            </li>
            <li>
              <strong>{`$\\Delta G = -nFE_{\\text{cell}}$`}</strong> links cell voltage to Gibbs
              free energy. Here {`$n$`} is the moles of electrons and {`$F$`} is the Faraday
              constant ({`$9.6485 \\times 10^4\\,\\text{C}\\cdot\\text{mol}^{-1}$`}), the charge on
              one mole of electrons.
            </li>
          </ul>
          <p>
            A galvanic cell uses a spontaneous reaction ({`$E_{\\text{cell}} > 0$`}) to make
            electricity. This page does the reverse: it forces a nonspontaneous reaction by pushing
            in electricity. Start here.
          </p>
        </>,

        <>
          <div className="lrn-header">
            <h2>Electrolytic Cells</h2>
          </div>
          <p>
            Use this section when you need to understand how to force a nonspontaneous reaction with
            electricity, for example, splitting water, refining metals, or producing halogens.
          </p>

          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              You supply 1.5 V to a beaker of molten NaCl. What do you expect to form at each
              electrode? Would your answer change if the NaCl were dissolved in water instead of
              melted?
            </p>
            <details className="lrn-predict-reveal">
              <summary>See answer</summary>
              <p>
                In molten NaCl, only Na⁺ and Cl⁻ are present. Na forms at the cathode (Na⁺ + e⁻ →
                Na) and Cl₂ gas forms at the anode (2 Cl⁻ → Cl₂ + 2e⁻). In aqueous NaCl, water can
                compete. Water is preferentially reduced at the cathode, giving H₂ gas, because
                water has a less negative reduction potential than Na⁺. Cl₂ still forms at the anode
                because of overpotential, the extra voltage a real electrode needs to actually run
                a reaction. Making O₂ from water carries a large overpotential, so Cl⁻ wins instead.
                You will see the full rule below.
              </p>
            </details>
          </div>

          <div className="lrn-definition">
            <div className="lrn-definition-term">Electrolytic cell</div>
            <div className="lrn-definition-desc">
              <p>
                A cell that uses an external power source to drive a nonspontaneous reaction. The
                power source pulls electrons from the anode (making it positive) and pushes
                electrons into the cathode (making it negative). This is the opposite sign
                convention from a galvanic cell.
              </p>
            </div>
          </div>

          <div className="lrn-definition">
            <div className="lrn-definition-term">Inert vs active electrode</div>
            <div className="lrn-definition-desc">
              <p>
                An <strong>inert electrode</strong> (platinum or graphite) just carries current. It
                does not react. The product comes from the solution or the melt.
              </p>
              <p>
                An <strong>active electrode</strong> takes part in the reaction. An active metal
                anode dissolves into the solution instead of oxidising something else. So the
                electrode material can change the product. A copper anode dissolves as Cu²⁺; an
                inert anode in the same cell would make O₂ from water instead.
              </p>
            </div>
          </div>

          <div className="lrn-compare">
            <div className="lrn-compare-label">COMPARE, ANODE AND CATHODE SIGN CONVENTIONS</div>
            <div className="lrn-compare-grid">
              <div className="lrn-compare-col">
                <div className="lrn-compare-col-header">Anode</div>
                <ul className="lrn-list">
                  <li>Always the site of oxidation (electrons leave)</li>
                  <li>Galvanic cell: negative terminal (−)</li>
                  <li>
                    Electrolytic cell: positive terminal (+), power source pulls electrons out
                  </li>
                </ul>
              </div>
              <div className="lrn-compare-col">
                <div className="lrn-compare-col-header">Cathode</div>
                <ul className="lrn-list">
                  <li>Always the site of reduction (electrons arrive)</li>
                  <li>Galvanic cell: positive terminal (+)</li>
                  <li>
                    Electrolytic cell: negative terminal (−), power source pushes electrons in
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <ElectrolyticCellViz />

          <h3>Minimum Voltage and Overpotential</h3>
          <p>
            How much voltage does it take to split water at pH 7? Try to answer before you read on.
            The reverse reaction is a galvanic cell with {`$E_{\\text{cell}} = +1.23\\,\\text{V}$`}.
            So the forced reaction has:
          </p>
          <p className="lrn-eq">{`$$2\\text{H}_2\\text{O}(l) \\rightarrow 2\\text{H}_2(g) + \\text{O}_2(g), \\quad E_{\\text{cell}} = -1.23\\,\\text{V}$$`}</p>
          <p>
            To drive electrolysis, the applied voltage must beat that 1.23 V. But in practice you
            need more, because of <strong>overpotential</strong>.
          </p>
          <div className="lrn-definition">
            <div className="lrn-definition-term">Overpotential</div>
            <div className="lrn-definition-desc">
              <p>
                The extra voltage, beyond the theoretical minimum, that a real electrode needs to
                run a reaction at a useful speed. It comes from slow reaction kinetics at the
                electrode surface, the reaction has a real energy barrier to climb.
              </p>
              <p>
                Overpotential depends on the electrode material and on the gas being made. You
                cannot read it off a potential table; it is measured. Making O₂ has a large
                overpotential because it is a slow four-electron reaction. This is exactly why Cl₂
                forms instead of O₂ in concentrated brine.
              </p>
            </div>
          </div>
          <p>
            So the answer to the question: water needs about 1.23 V in theory. On platinum
            electrodes, overpotential adds roughly 0.6 V, so about 1.8 V is needed in practice. You
            can now estimate the real voltage for any electrolysis: take the theoretical minimum and
            add the overpotential.
          </p>
          <WaterSplitOverpotentialViz />

          <h3>Competing Reactions in Aqueous Electrolysis</h3>
          <p>
            In aqueous solution, water can be oxidised to O₂ at the anode or reduced to H₂ at the
            cathode. So an ion in the water has to compete with water itself. Which one wins?
          </p>
          <div className="lrn-insight">
            The one rule: the species that forms is the one with the lowest total voltage demand.
            Total voltage demand = theoretical potential + overpotential. Thermodynamics (the
            potential) predicts which reaction should happen. Overpotential (kinetics) can override
            it. You must add both.
          </div>
          <p>
            Sometimes the potential alone decides the winner. Sometimes overpotential flips it. The
            two examples below show each case.
          </p>
          <div className="lrn-steps">
            <div className="lrn-steps-label">
              WORKED EXAMPLE, POTENTIAL DECIDES (I⁻ AT THE ANODE)
            </div>
            <ol className="lrn-list">
              <li>
                You electrolyse an aqueous solution containing I⁻ ions at pH 7. Two possible
                oxidations at the anode: (A) {`$2\\text{I}^- \\rightarrow \\text{I}_2 + 2e^-$`},
                requires +0.54 V; (B) water oxidation{' '}
                {`$2\\text{H}_2\\text{O} \\rightarrow \\text{O}_2 + 4\\text{H}^+ + 4e^-$`}, requires
                +0.82 V at pH 7 (before overpotential).
              </li>
              <li>
                I⁻ already needs a lower potential (0.54 V vs 0.82 V). Adding overpotential only
                makes water harder still, so it cannot catch up.
              </li>
              <li>
                I₂ forms at the anode. Here the gap is wide enough that the theoretical potentials
                settle it on their own.
              </li>
            </ol>
          </div>
          <div className="lrn-steps">
            <div className="lrn-steps-label">
              WORKED EXAMPLE, OVERPOTENTIAL FLIPS THE WINNER (Cl₂ IN BRINE)
            </div>
            <ol className="lrn-list">
              <li>
                You electrolyse concentrated NaCl(aq). At the anode: (A) Cl⁻ oxidation needs about
                +1.36 V; (B) water oxidation to O₂ needs only +0.82 V at pH 7. By potential alone,
                water should win.
              </li>
              <li>
                But making O₂ carries a large overpotential. The total voltage demand for O₂ rises
                above that for Cl₂.
              </li>
              <li>
                So Cl₂ forms, not O₂. Kinetics overrode thermodynamics. This is the basis of the
                chloralkali industry.
              </li>
            </ol>
          </div>
          <p>
            You can now predict the product at any electrode: list the competing half-reactions, add
            each one's overpotential to its theoretical potential, and pick the smallest total.
          </p>
          <CompetingReactionsViz />

          <div className="lrn-compare">
            <div className="lrn-compare-label">COMPARE, MOLTEN SALT VS AQUEOUS ELECTROLYSIS</div>
            <div className="lrn-compare-grid">
              <div className="lrn-compare-col">
                <div className="lrn-compare-col-header">Molten Salt</div>
                <ul className="lrn-list">
                  <li>Only ionic species present, no water competition</li>
                  <li>
                    You must melt the salt first. In a solid lattice the ions are locked in place.
                    Melting frees them to move, carry the current, and reach the electrodes.
                  </li>
                  <li>Metal deposits at cathode; nonmetal gas at anode</li>
                  <li>
                    Examples: Mg from MgCl₂, Na from NaCl, F₂ from KF/HF, Al from molten cryolite (a
                    melted mineral that dissolves aluminium oxide)
                  </li>
                </ul>
              </div>
              <div className="lrn-compare-col">
                <div className="lrn-compare-col-header">Aqueous Solution</div>
                <ul className="lrn-list">
                  <li>Water can be oxidised (to O₂) or reduced (to H₂)</li>
                  <li>Actual product depends on relative potentials and overpotentials</li>
                  <li>
                    Example: NaCl(aq) → Cl₂ at anode, H₂ at cathode (chloralkali process, Na never
                    deposits)
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </>,

        <>
          <div className="lrn-header">
            <h2>Faraday's Laws and Electrolysis Calculations</h2>
          </div>
          <p>
            Use this section whenever you need to calculate how much product forms during
            electrolysis, or how long you need to run the current to get a target mass.
          </p>

          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              You run 2 amps through a copper sulfate solution for 1 hour. Each copper ion carries
              2+ charge. Roughly how many moles of copper do you expect to deposit?
            </p>
            <details className="lrn-predict-reveal">
              <summary>See answer</summary>
              <p>
                Total charge: Q = 2 A × 3600 s = 7200 C. Moles of electrons:{' '}
                {`$n = \\frac{7200}{96485} \\approx 0.0746$`} mol. Each Cu²⁺ needs 2 electrons, so
                moles of Cu = {`$\\frac{0.0746}{2} \\approx 0.037$`} mol. That is about 2.4 g of
                copper.
              </p>
            </details>
          </div>

          <div className="lrn-definition">
            <div className="lrn-definition-term">Faraday's First Law</div>
            <div className="lrn-definition-desc">
              <p>
                The amount of product formed is directly proportional to the charge passed. Double
                the charge, double the product. The quantitative form links current, time, and moles
                of product through a simple chain.
              </p>
            </div>
          </div>

          <p>The two key equations are:</p>
          <p className="lrn-eq lrn-eq-hero">{`$$Q = It$$`}</p>
          <p className="lrn-eq lrn-eq-hero">{`$$n_{e^-} = \\frac{Q}{F} = \\frac{It}{F}$$`}</p>
          <FaradayViz />

          <div className="lrn-callout">
            <strong>The stoichiometry chain</strong>
            <p>
              Current (A) and time (s) → charge Q = It (C) → moles of electrons{' '}
              {`$n = \\frac{Q}{F}$`} → moles of product (via half-reaction ratio) → mass of product
              (via molar mass). Every electrolysis calculation follows this chain in order.
            </p>
          </div>

          <div className="lrn-definition">
            <div className="lrn-definition-term">Faraday's Second Law</div>
            <div className="lrn-definition-desc">
              <p>
                Pass the same charge through different cells in series. The masses deposited are in
                proportion to each substance's <strong>equivalent weight</strong>.
              </p>
              <p>
                The equivalent weight is the molar mass divided by the electrons transferred per
                atom: {`$\\frac{M}{z}$`}. One mole of charge (one Faraday) deposits one equivalent
                weight in grams.
              </p>
              <p>
                This is just the chain seen from a different angle. Equal charge means equal moles
                of electrons. An ion needing fewer electrons gets more atoms deposited from that
                charge.
              </p>
            </div>
          </div>

          <h3>How Much Aluminium Does Industrial Electrolysis Produce?</h3>
          <p>
            The Hall-Héroult process electrolyses aluminium oxide dissolved in molten cryolite. Each
            Al³⁺ ion needs 3 electrons. A smelter runs at {`$1.00 \\times 10^5\\,\\text{A}$`} for 1
            day (86 400 s). How much aluminium does it produce?
          </p>
          <div className="lrn-steps">
            <div className="lrn-steps-label">WORKED EXAMPLE, ALUMINIUM FROM CRYOLITE</div>
            <ol className="lrn-list">
              <li>
                Charge: {`$Q = It = (1.00 \\times 10^5)(86400) = 8.64 \\times 10^9\\,\\text{C}$`}
              </li>
              <li>
                Moles of electrons:{' '}
                {`$n_{e^-} = \\frac{Q}{F} = \\frac{8.64 \\times 10^9}{9.6485 \\times 10^4} = 8.96 \\times 10^4\\,\\text{mol}$`}
              </li>
              <li>
                Half-reaction: {`$\\text{Al}^{3+} + 3e^- \\rightarrow \\text{Al}$`}. Moles of Al:{' '}
                {`$n_{\\text{Al}} = \\frac{8.96 \\times 10^4}{3} = 2.99 \\times 10^4\\,\\text{mol}$`}
              </li>
              <li>
                Mass:{' '}
                {`$m = (2.99 \\times 10^4)(26.98\\,\\text{g}\\cdot\\text{mol}^{-1}) = 8.05 \\times 10^5\\,\\text{g} = 805\\,\\text{kg}$`}
              </li>
            </ol>
          </div>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>
              In step 3 above, why did you divide the moles of electrons by 3, not multiply? What in
              the half-reaction told you to use 3?
            </p>
          </div>

          <h3>How Long Does It Take to Electroplate Copper?</h3>
          <p>
            You want to plate 25.00 g of copper (Cu²⁺ + 2e⁻ → Cu) from a{' '}
            {`$1.00\\,\\text{mol}\\cdot\\text{L}^{-1}$`} CuSO₄ solution using a current of 3.00 A.
            How long will it take?
          </p>
          <div className="lrn-steps">
            <div className="lrn-steps-label">WORKED EXAMPLE, TIME TO PLATE COPPER</div>
            <ol className="lrn-list">
              <li>
                Moles of Cu needed:{' '}
                {`$n_{\\text{Cu}} = \\frac{25.00}{63.55} = 0.3934\\,\\text{mol}$`}
              </li>
              <li>Moles of electrons: {`$n_{e^-} = 0.3934 \\times 2 = 0.7867\\,\\text{mol}$`}</li>
              <li>
                Charge needed:{' '}
                {`$Q = n_{e^-} \\times F = 0.7867 \\times 9.6485 \\times 10^4 = 7.59 \\times 10^4\\,\\text{C}$`}
              </li>
              <li>
                Time:{' '}
                {`$t = \\frac{Q}{I} = \\frac{7.59 \\times 10^4}{3.00} = 2.53 \\times 10^4\\,\\text{s} \\approx 7.0\\,\\text{h}$`}
              </li>
            </ol>
          </div>

          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>
              Faraday's law says moles of product depend only on charge (Q = It). Why does time
              matter?
            </p>
            <p>
              Current tells you how fast electrons arrive (coulombs per second). Time tells you how
              long they keep arriving. Only the total charge Q = It determines how many electrons
              actually crossed the electrode and therefore how many atoms were deposited. A small
              current for a long time can deposit the same mass as a large current for a short time, as long as Q is the same.
            </p>
          </div>
        </>,

        <>
          <div className="lrn-header">
            <h2>Applications of Electrolysis</h2>
          </div>
          <p>
            Use this section to understand the industrial and everyday uses of electrolytic cells:
            extracting pure metals, producing halogens and bases, and coating objects with metal
            films.
          </p>

          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              A spoon made of steel is placed in a silver nitrate solution and connected to the
              negative terminal of a battery. A bar of silver is connected to the positive terminal.
              What happens to the spoon and the silver bar over time?
            </p>
            <details className="lrn-predict-reveal">
              <summary>See answer</summary>
              <p>
                The spoon gains a thin silver coating. At the cathode (spoon), silver ions are
                reduced and deposit as solid silver: Ag⁺ + e⁻ → Ag. At the anode (silver bar),
                silver dissolves to replenish the solution: Ag → Ag⁺ + e⁻. The silver bar gets
                lighter; the spoon gets heavier.
              </p>
            </details>
          </div>

          <ul className="lrn-list">
            <li>
              <strong>Downs process</strong>, sodium metal and chlorine gas from molten NaCl.
              Sodium forms at the cathode; chlorine forms at the anode.
            </li>
            <li>
              <strong>Chloralkali process</strong>, chlorine and sodium hydroxide from aqueous
              NaCl. Cl₂ forms at the anode; H₂ forms at the cathode; the NaOH stays in solution.
              These three products are among the most important industrial chemicals.
            </li>
            <li>
              <strong>Hall-Héroult process</strong>, aluminium from Al₂O₃ dissolved in molten
              cryolite. Uses enormous current (100 kA typical). Accounts for most world aluminium
              production.
            </li>
            <li>
              <strong>Dow process</strong>, magnesium from molten MgCl₂. Seawater is a source of
              Mg²⁺.
            </li>
            <li>
              <strong>Fluorine production</strong>, fluorine gas from molten KF/HF. Fluorine is too
              reactive to make any other way, so electrolysis is the only route.
            </li>
          </ul>

          <div className="lrn-definition">
            <div className="lrn-definition-term">Electroplating</div>
            <div className="lrn-definition-desc">
              <p>
                The electrolytic deposition of a thin metal film onto an object. The object to be
                coated is the cathode. The anode is either the plating metal (which dissolves to
                replenish ions) or an inert electrode. The electrolyte contains a dissolved salt of
                the plating metal. Faraday's law determines the mass deposited from the charge
                passed.
              </p>
            </div>
          </div>

          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>
              Why does the chloralkali process produce H₂ at the cathode instead of sodium metal,
              even though sodium ions are present in the solution?
            </p>
            <p>
              Sodium ions have a very negative standard reduction potential (−2.71 V). Water has a
              much less negative reduction potential at pH 14 (about −0.83 V). Reducing water to
              hydrogen gas requires far less applied voltage than reducing Na⁺ to sodium metal.
              Water is reduced preferentially. Solid sodium would also react immediately with the
              water present, so it could never accumulate anyway.
            </p>
          </div>
        </>,

        <>
          <div className="lrn-header">
            <h2>Where Electrolysis Connects to the Galvanic Side</h2>
          </div>
          <p>
            Run an electrolytic cell in reverse and you get a galvanic cell. The galvanic side, spontaneous cells, corrosion as an unwanted galvanic cell, cathodic protection, and
            practical batteries and fuel cells, you met just before this topic. They are the same
            chemistry with the sign of the driving force flipped.
          </p>
          <p>
            Recharging a secondary cell is electrolysis: an external voltage forces the spent cell
            reaction backwards. The deeper industrial processes (Downs, chloralkali, Hall-Héroult,
            electrorefining) get their full treatment later, where extraction and sustainability are
            the focus. Here you keep the electrolysis-specific angle: what forms at each electrode,
            and how much, from the charge you pass.
          </p>
        </>
      ]
    },
    practice: [
      {
        q: 'Describe the anatomy of an electrolytic cell. How does the sign convention for anode and cathode differ from a galvanic cell?',
        a: 'An electrolytic cell has two electrodes in an electrolyte connected to an external power source. The power source pulls electrons from the anode (making it positively labeled) and pushes electrons into the cathode (making it negatively labeled). This is the opposite of a galvanic cell, where the anode is labeled negative and the cathode positive. In both cases, oxidation still occurs at the anode and reduction at the cathode, the reaction at each electrode type never changes, only the electrical polarity label.'
      },
      {
        q: 'You electrolyse a solution containing I⁻ ions at pH 7. Two possible oxidations at the anode: (A) 2I⁻ → I₂ + 2e⁻ (requires +0.54 V) or (B) 2H₂O → O₂ + 4H⁺ + 4e⁻ (requires +0.82 V at pH 7). Which product forms? Why?',
        a: 'I₂ forms preferentially at the anode. I⁻ is easier to oxidise because its oxidation requires a lower applied potential (0.54 V vs 0.82 V). Here potential alone decides the winner. The full rule is: the species formed is the one with the lowest total voltage demand (theoretical potential plus overpotential). For I⁻ the overpotential gap is small, so the theoretical potentials settle it. In the chloralkali case overpotential flips the winner instead.'
      },
      {
        q: 'Compare electrolysis of molten NaCl vs aqueous NaCl. What products form at each electrode in each case?',
        a: 'Molten NaCl: only Na⁺ and Cl⁻ present. Na deposits at cathode (Na⁺ + e⁻ → Na); Cl₂ evolves at anode (2Cl⁻ → Cl₂ + 2e⁻). This is the Downs process. Aqueous NaCl: Na⁺ is not reduced (its potential is too negative); instead water is reduced to give H₂ at cathode. Cl₂ still forms at anode because Cl⁻ is preferentially oxidised over water under typical conditions (chloralkali process). The difference arises because water provides competing half-reactions that are thermodynamically easier than Na⁺ reduction.'
      },
      {
        q: "State Faraday's law of electrolysis quantitatively. Write the equations for charge and moles of electrons.",
        a: "Faraday's law: the amount of product is proportional to the total charge passed. Quantitatively: Q = It (charge in coulombs = current in amperes × time in seconds) and n(e⁻) = Q/F = It/F (moles of electrons = charge divided by Faraday's constant, 96 485 C/mol). Moles of product then follow from the half-reaction stoichiometry. Double the current or double the time and you double the charge, which doubles the product."
      },
      {
        q: 'Two students both want to deposit 1.0 g of silver (Ag⁺ + e⁻ → Ag). Student A uses 1.0 A for time t. Student B uses 2.0 A for half the time. Will they deposit the same mass of silver? Explain.',
        a: "Yes, they deposit the same mass. Student A: Q = 1.0 × t. Student B: Q = 2.0 × (t/2) = 1.0 × t. The total charge Q is identical. Because Q = It, what matters is the product of current and time, not either one alone. Faraday's law depends only on total charge. A low current for a long time is equivalent to a high current for a short time if Q is the same."
      },
      {
        q: 'Error detection: A student calculates the moles of aluminium produced in the Hall-Héroult process by dividing total electron moles by 2 instead of 3. What is wrong and how does this error affect the answer?',
        a: 'The error is in the stoichiometric ratio. The half-reaction is Al³⁺ + 3e⁻ → Al, not Al²⁺ + 2e⁻ → Al. Aluminium ions carry a 3+ charge, so 3 moles of electrons deposit 1 mole of Al. Using 2 instead of 3 gives 50% too many moles of Al and therefore 50% too much mass. Always read the electron count directly from the balanced half-reaction. A 3+ ion always needs 3 electrons per atom, not 2.'
      },
      {
        q: 'A chemist wants to produce 100 kg of Cl₂ in a chloralkali plant. The half-reaction at the anode is 2Cl⁻ → Cl₂ + 2e⁻. What total charge (in coulombs) is required?',
        a: "Moles of Cl₂ = 100 000 g / 70.90 g/mol = 1410 mol. Moles of electrons = 1410 × 2 = 2820 mol (2 electrons per Cl₂ from the half-reaction). Charge Q = 2820 × 96 485 = 2.72 × 10⁸ C. This uses the Faraday's law chain in the forward direction (from product mass to charge required). The factor of 2 comes from the half-reaction coefficient. Industrial plants run at tens of thousands of amperes, so the time needed is minutes to hours."
      },
      {
        q: 'Equal charge is passed through two cells in series: one plates silver (Ag⁺ + e⁻ → Ag), the other plates copper (Cu²⁺ + 2e⁻ → Cu). The molar mass of silver is 107.9 g/mol; copper is 63.55 g/mol. Which cell deposits more mass, and what is the ratio?',
        a: "Faraday's Second Law: equal charge deposits masses in proportion to equivalent weight (molar mass ÷ electrons per atom). Silver equivalent weight = 107.9 ÷ 1 = 107.9 g. Copper equivalent weight = 63.55 ÷ 2 = 31.8 g. The mass ratio is 107.9 to 31.8, or about 3.4 to 1. The silver cell deposits more mass. Each silver atom needs only one electron, so the same charge frees far more silver atoms than copper."
      },
      {
        q: 'A copper purification cell uses an impure copper bar as the anode and a thin pure copper sheet as the cathode. Is the anode inert or active? What does the anode do during electrolysis?',
        a: 'The anode is active. An active anode takes part in the reaction by dissolving. Here the impure copper anode oxidises: Cu → Cu²⁺ + 2e⁻. The copper ions move to the cathode and deposit as pure copper: Cu²⁺ + 2e⁻ → Cu. An inert anode (platinum or graphite) would instead oxidise the water or another species in solution, because it cannot dissolve. The electrode material decides the anode reaction.'
      },
      {
        q: 'Predict: A student passes 2.00 A through a copper sulfate solution for 30 minutes. She expects to deposit 1.19 g of copper. Before calculating, do you expect this to be roughly correct? After confirming, explain what she would observe at each electrode.',
        a: 'The prediction is roughly correct: Q = 2.00 × 1800 = 3600 C; n(e⁻) = 3600/96485 = 0.0373 mol; n(Cu) = 0.0187 mol (divided by 2 for the 2+ charge); mass = 0.0187 × 63.55 = 1.19 g. Confirmed. At the cathode (negative), copper ions gain electrons and deposit as a shiny copper film. At the anode (positive), copper from the electrode dissolves into solution as Cu²⁺ ions. The anode slowly loses mass while the cathode gains mass. The solution composition stays roughly constant if both electrodes are copper.'
      }
    ],
    reference: {
      category: 'Quick Reference',
      title: "Electrolysis and Faraday's Laws",
      sections: [
        <>
          <div className="lrn-header">
            <h2>Core Equations</h2>
          </div>

          <div className="lrn-definition">
            <div className="lrn-definition-term">{`$\\Delta G = -nFE_{\\text{cell}}$`}</div>
            <div className="lrn-definition-desc">
              <p>
                Gibbs free energy from cell potential. When {`$E_{\\text{cell}} > 0$`}, the reaction
                is spontaneous.
              </p>
              <p>
                <strong>When to use:</strong> Convert between thermodynamics and electrochemistry.
                Use whenever you know the voltage and need ΔG, or know ΔG and need voltage.
              </p>
            </div>
          </div>

          <div className="lrn-definition">
            <div className="lrn-definition-term">{`$Q = It$`}</div>
            <div className="lrn-definition-desc">
              <p>Charge (coulombs) = current (amperes) × time (seconds).</p>
              <p>
                <strong>When to use:</strong> First step in all electrolysis calculations. Convert
                experimental current and time to total charge.
              </p>
            </div>
          </div>

          <div className="lrn-definition">
            <div className="lrn-definition-term">{`$n_{e^-} = \\frac{Q}{F} = \\frac{It}{F}$`}</div>
            <div className="lrn-definition-desc">
              <p>Moles of electrons from charge and Faraday's constant.</p>
              <p>
                <strong>When to use:</strong> Second step in all electrolysis calculations. Then
                apply the half-reaction stoichiometric ratio to get moles of product.
              </p>
            </div>
          </div>

          <div className="lrn-definition">
            <div className="lrn-definition-term">Faraday's First Law (qualitative)</div>
            <div className="lrn-definition-desc">
              <p>The amount of product is proportional to the quantity of electricity passed.</p>
              <p>
                <strong>When to use:</strong> Quickly estimate relative yields when comparing two
                electrolysis runs at different currents or times.
              </p>
            </div>
          </div>
        </>,

        <>
          <div className="lrn-header">
            <h2>Constants and Reference Values</h2>
          </div>

          <table className="lrn-table">
            <thead>
              <tr>
                <th>Quantity</th>
                <th>Value</th>
                <th>Notes</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Faraday's constant (F)</td>
                <td>{`$9.6485 \\times 10^4\\,\\text{C}\\cdot\\text{mol}^{-1}$`}</td>
                <td>Charge per mole of electrons; {`$F = eN_A$`}</td>
              </tr>
              <tr>
                <td>SHE reference</td>
                <td>{`$E^\\circ = 0\\,\\text{V}$`}</td>
                <td>{`$2\\text{H}^+ + 2e^- \\rightarrow \\text{H}_2$`}, by definition</td>
              </tr>
              <tr>
                <td>Water electrolysis (pH 7)</td>
                <td>{`$E_{\\text{cell}} = -1.23\\,\\text{V}$`}</td>
                <td>Minimum applied voltage; add ~0.6 V overpotential in practice</td>
              </tr>
            </tbody>
          </table>
        </>,

        <>
          <div className="lrn-header">
            <h2>Electrolysis Stoichiometry Chain</h2>
          </div>

          <div className="lrn-steps">
            <div className="lrn-steps-label">PROCEDURE, AMOUNT OF PRODUCT FROM ELECTROLYSIS</div>
            <ol className="lrn-list">
              <li>Calculate charge: {`$Q = It$`} (A × s = C)</li>
              <li>Calculate moles of electrons: {`$n_{e^-} = \\frac{Q}{F}$`}</li>
              <li>
                Apply half-reaction ratio: {`$n_{\\text{product}} = n_{e^-} \\times \\frac{1}{z}$`}{' '}
                where z = electrons per formula unit in the half-reaction
              </li>
              <li>Convert to mass: {`$m = n_{\\text{product}} \\times M$`}</li>
            </ol>
          </div>

          <div className="lrn-steps">
            <div className="lrn-steps-label">PROCEDURE, TIME REQUIRED TO PRODUCE A GIVEN MASS</div>
            <ol className="lrn-list">
              <li>Convert mass to moles of product: {`$n = \\frac{m}{M}$`}</li>
              <li>Find moles of electrons: {`$n_{e^-} = n \\times z$`}</li>
              <li>Find charge: {`$Q = n_{e^-} \\times F$`}</li>
              <li>Find time: {`$t = \\frac{Q}{I}$`}</li>
            </ol>
          </div>
        </>,

        <>
          <div className="lrn-header">
            <h2>Key Distinctions at a Glance</h2>
          </div>

          <table className="lrn-table">
            <thead>
              <tr>
                <th>Property</th>
                <th>Galvanic Cell</th>
                <th>Electrolytic Cell</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Spontaneous?</td>
                <td>Yes ({`$\\Delta G < 0$`})</td>
                <td>No ({`$\\Delta G > 0$`})</td>
              </tr>
              <tr>
                <td>{`$E_{\\text{cell}}$`}</td>
                <td>Positive (generates current)</td>
                <td>Negative (requires applied voltage)</td>
              </tr>
              <tr>
                <td>Anode label</td>
                <td>Negative (−)</td>
                <td>Positive (+)</td>
              </tr>
              <tr>
                <td>Cathode label</td>
                <td>Positive (+)</td>
                <td>Negative (−)</td>
              </tr>
              <tr>
                <td>Anode reaction</td>
                <td>Oxidation (always)</td>
                <td>Oxidation (always)</td>
              </tr>
              <tr>
                <td>Cathode reaction</td>
                <td>Reduction (always)</td>
                <td>Reduction (always)</td>
              </tr>
              <tr>
                <td>Typical setup</td>
                <td>Two compartments, salt bridge</td>
                <td>Often single compartment, external power source</td>
              </tr>
              <tr>
                <td>Examples</td>
                <td>Daniell cell, batteries, fuel cells</td>
                <td>Electroplating, aluminium smelting, chloralkali</td>
              </tr>
            </tbody>
          </table>

          <table className="lrn-table">
            <thead>
              <tr>
                <th>Industrial Process</th>
                <th>Electrolyte</th>
                <th>Cathode Product</th>
                <th>Anode Product</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Hall-Héroult (Al)</td>
                <td>Al₂O₃ in molten cryolite</td>
                <td>Al (liquid)</td>
                <td>O₂ / CO₂</td>
              </tr>
              <tr>
                <td>Dow process (Mg)</td>
                <td>Molten MgCl₂</td>
                <td>Mg (liquid)</td>
                <td>Cl₂</td>
              </tr>
              <tr>
                <td>Downs process (Na)</td>
                <td>Molten NaCl</td>
                <td>Na (liquid)</td>
                <td>Cl₂</td>
              </tr>
              <tr>
                <td>Chloralkali</td>
                <td>NaCl(aq)</td>
                <td>H₂ (gas)</td>
                <td>Cl₂ (gas)</td>
              </tr>
              <tr>
                <td>Fluorine production</td>
                <td>Molten KF/HF</td>
                <td>H₂</td>
                <td>F₂</td>
              </tr>
            </tbody>
          </table>
        </>
      ]
    }
  }
  return config
}

export default function ElectrolysisAndFaradaysLaws() {
  const config = useConfig()
  return <LearningTemplate config={config} />
}
