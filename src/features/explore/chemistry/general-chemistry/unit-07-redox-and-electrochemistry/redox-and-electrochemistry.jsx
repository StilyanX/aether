import { LearningTemplate } from '../../../../../components/learning/learning-template'
import {
  DaniellCellViz,
  StandardPotentialLadderViz,
  NernstViz,
  LatimerViz,
  CorrosionCellViz,
  ConcentrationCellViz,
  LnKvsEViz,
  DeltaGSignMapViz
} from '../../../../../components/viz'

function useConfig() {
  const config = {
    cssPrefix: 'rdx',
    documentTitle: 'Redox and Electrochemistry - AETHER',
    customCss: null,
    learning: {
      category: 'Unit 7',
      groupTitle: 'Redox and Electrochemistry',
      title: 'Redox and Electrochemistry',
      subtitle:
        'Redox reactions transfer electrons between species. This topic covers oxidation states, half-reactions, galvanic cells, standard electrode potentials, the Nernst equation, Latimer diagrams, corrosion, and practical batteries.',
      sections: [
        <>
          <div className="lrn-header">
            <h2>Oxidation and Reduction</h2>
          </div>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              A zinc rod sits in a copper sulfate solution. After an hour, the zinc rod loses mass
              and copper metal coats its surface. Which metal lost electrons? Which gained
              electrons?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                Zinc lost electrons, it was oxidised, becoming {`$\\text{Zn}^{2+}$`}. Copper gained
                electrons, it was reduced from {`$\\text{Cu}^{2+}$`} to solid copper metal.
              </p>
            </details>
          </div>
          <p>
            Every chemical reaction that transfers electrons between atoms is a{' '}
            <strong>redox reaction</strong>. Two things happen at once: one species loses electrons
            and another gains them. Neither can happen without the other.
          </p>
          <p>
            <strong>Oxidation</strong> is the loss of electrons. <strong>Reduction</strong> is the
            gain of electrons. The mnemonic OIL RIG captures this: Oxidation Is Loss, Reduction Is
            Gain. A substance that loses electrons is <strong>oxidised</strong>. A substance that
            gains electrons is <strong>reduced</strong>.
          </p>
          <p>
            The species that causes another to lose electrons is the{' '}
            <strong>oxidising agent</strong>. It accepts the electrons and is itself reduced. The
            species that causes another to gain electrons is the <strong>reducing agent</strong>. It
            donates the electrons and is itself oxidised.
          </p>
          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Oxidising Agent</span>
              <p>Accepts electrons. It is reduced. It causes another species to be oxidised.</p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Reducing Agent</span>
              <p>Donates electrons. It is oxidised. It causes another species to be reduced.</p>
            </div>
          </div>
          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>
              Electrons cannot exist free in solution. If one species loses electrons, another must
              immediately accept them. There is no net accumulation of charge. This is why oxidation
              and reduction always happen together.
            </p>
          </div>
        </>,

        <>
          <div className="lrn-header">
            <h2>Oxidation States</h2>
          </div>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              In {`$\\text{K}_2\\text{Cr}_2\\text{O}_7$`}, potassium is +1 and oxygen is -2. What is
              the oxidation state of chromium?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>{`$2(+1) + 2x + 7(-2) = 0 \\Rightarrow x = +6$`}. Chromium is +6.</p>
            </details>
          </div>
          <p>
            <strong>Oxidation states</strong> (also called oxidation numbers) are bookkeeping
            numbers. They track which atom is counted as owning each electron in a compound.
            Oxidation states are not literal charges, they are accounting tools.
          </p>
          <h3>Assignment Rules</h3>
          <ul className="lrn-list">
            <li>
              A pure element has oxidation state 0. ({`$\\text{Fe}(s)$`}, {`$\\text{O}_2(g)$`},{' '}
              {`$\\text{Zn}(s)$`} are all 0.)
            </li>
            <li>
              A monatomic ion has oxidation state equal to its charge. ({`$\\text{Fe}^{2+}$`} is +2;{' '}
              {`$\\text{Cl}^-$`} is -1.)
            </li>
            <li>Fluorine is always -1 in compounds.</li>
            <li>Oxygen is -2 in most compounds (exception: peroxides, where it is -1).</li>
            <li>Hydrogen is +1 bonded to non-metals; -1 bonded to metals.</li>
            <li>Oxidation states in a neutral compound sum to zero.</li>
            <li>In a polyatomic ion, they sum to the ion's charge.</li>
          </ul>
          <h3>Worked Example</h3>
          <p>
            Find the oxidation state of chromium in {`$\\text{K}_2\\text{Cr}_2\\text{O}_7$`}.
            Potassium is +1 and oxygen is -2.
          </p>
          <p className="lrn-eq">{`$$2(+1) + 2x + 7(-2) = 0$$`}</p>
          <p className="lrn-eq">{`$$2 + 2x - 14 = 0 \\implies 2x = 12 \\implies x = +6$$`}</p>
          <p>
            Chromium is +6. <strong>Stock nomenclature</strong> uses Roman numerals to state the
            oxidation state when it varies: iron(II) is {`$\\text{Fe}^{2+}$`}; iron(III) is{' '}
            {`$\\text{Fe}^{3+}$`}.
          </p>
          <p>
            With these rules you can now assign an oxidation state to any atom in a formula. Check
            oxidation states first whenever you suspect a reaction transfers electrons. When
            oxidation states change from reactants to products, a redox reaction has occurred. If
            they stay constant, the reaction is not redox.
          </p>
          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>Why do we need oxidation states at all?</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                The bookkeeping reveals which atom changed, a necessary step before we can write
                half-reactions.
              </p>
            </details>
          </div>
        </>,

        <>
          <div className="lrn-header">
            <h2>Half-Reactions</h2>
          </div>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              In {`$\\text{Zn}(s) + \\text{Cu}^{2+}(aq) \\to \\text{Zn}^{2+}(aq) + \\text{Cu}(s)$`},
              write the two steps showing electron transfer separately.
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                Oxidation: {`$\\text{Zn}(s) \\to \\text{Zn}^{2+}(aq) + 2e^-$`}. Reduction:{' '}
                {`$\\text{Cu}^{2+}(aq) + 2e^- \\to \\text{Cu}(s)$`}.
              </p>
            </details>
          </div>
          <p>
            A <strong>half-reaction</strong> splits a redox reaction into its two components: the
            part where electrons are lost and the part where they are gained. Electrons appear
            explicitly as reactants or products.
          </p>
          <p>
            <strong>Reduction half-reaction</strong> (electrons on the left):
          </p>
          <p className="lrn-eq">{`$$\\text{Cu}^{2+}(aq) + 2e^- \\to \\text{Cu}(s)$$`}</p>
          <p>
            <strong>Oxidation half-reaction</strong> (electrons on the right):
          </p>
          <p className="lrn-eq">{`$$\\text{Zn}(s) \\to \\text{Zn}^{2+}(aq) + 2e^-$$`}</p>
          <p>Adding the two half-reactions cancels the electrons and gives the overall reaction:</p>
          <p className="lrn-eq">{`$$\\text{Zn}(s) + \\text{Cu}^{2+}(aq) \\to \\text{Zn}^{2+}(aq) + \\text{Cu}(s)$$`}</p>
          <p>
            Half-reactions are a conceptual tool. Free electrons never accumulate in solution. A{' '}
            <strong>redox couple</strong> is written as Ox/Red: for example{' '}
            {`$\\text{Cu}^{2+}/\\text{Cu}$`} or {`$\\text{Zn}^{2+}/\\text{Zn}$`}. The oxidised form
            comes first.
          </p>
          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>Why do electrons appear as products in the oxidation half-reaction?</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                The oxidation step releases electrons. Writing them as products on the right shows
                that zinc hands them over to the next species. Free electrons never accumulate in
                solution, the split is conceptual only.
              </p>
            </details>
          </div>
        </>,

        <>
          <div className="lrn-header">
            <h2>Balancing Redox Equations in Acidic Solution</h2>
          </div>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              Permanganate ({`$\\text{MnO}_4^-$`}, Mn at +7) reacts with oxalic acid (
              {`$\\text{H}_2\\text{C}_2\\text{O}_4$`}, C at +3) in acid. The products are{' '}
              {`$\\text{Mn}^{2+}$`} and {`$\\text{CO}_2$`}. How many electrons does each
              half-reaction transfer?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                Reduction: Mn goes from +7 to +2, gaining 5 electrons. Oxidation: C goes from +3 to
                +4, losing 1 electron per carbon; with 2 carbons per molecule, each oxalic acid
                molecule loses 2 electrons.
              </p>
            </details>
          </div>
          <p>
            Use the half-reaction method in acid when a redox equation contains oxygen or hydrogen.
            You cannot balance these by inspection.
          </p>
          <div className="lrn-steps">
            <div className="lrn-step">
              <span className="lrn-step-title">Steps for Balancing in Acidic Solution</span>
              <ol className="lrn-list">
                <li>Write unbalanced half-reactions for oxidation and reduction.</li>
                <li>Balance all atoms except O and H.</li>
                <li>
                  Balance O by adding {`$\\text{H}_2\\text{O}$`} to the side that needs oxygen.
                </li>
                <li>Balance H by adding {`$\\text{H}^+$`} to the side that needs hydrogen.</li>
                <li>Balance charge by adding electrons ({`$e^-$`}) to the more positive side.</li>
                <li>Multiply each half-reaction so electrons cancel.</li>
                <li>Add the half-reactions and simplify.</li>
              </ol>
            </div>
          </div>
          <h3>Worked Example</h3>
          <p>
            Balance{' '}
            {`$\\text{MnO}_4^-(aq) + \\text{H}_2\\text{C}_2\\text{O}_4(aq) \\to \\text{Mn}^{2+}(aq) + \\text{CO}_2(g)$`}{' '}
            in acid.
          </p>
          <p>
            <strong>Reduction</strong> (Mn: +7 to +2, gain 5 electrons):
          </p>
          <p className="lrn-eq">{`$$\\text{MnO}_4^- + 8\\text{H}^+ + 5e^- \\to \\text{Mn}^{2+} + 4\\text{H}_2\\text{O}$$`}</p>
          <p>
            <strong>Oxidation</strong> (C: +3 to +4, 2 electrons per molecule):
          </p>
          <p className="lrn-eq">{`$$\\text{H}_2\\text{C}_2\\text{O}_4 \\to 2\\text{CO}_2 + 2\\text{H}^+ + 2e^-$$`}</p>
          <p>Equalise electrons (multiply reduction by 2, oxidation by 5):</p>
          <p className="lrn-eq">{`$$2\\text{MnO}_4^- + 16\\text{H}^+ + 10e^- \\to 2\\text{Mn}^{2+} + 8\\text{H}_2\\text{O}$$`}</p>
          <p className="lrn-eq">{`$$5\\text{H}_2\\text{C}_2\\text{O}_4 \\to 10\\text{CO}_2 + 10\\text{H}^+ + 10e^-$$`}</p>
          <p>Add and cancel ({`$16\\text{H}^+ - 10\\text{H}^+ = 6\\text{H}^+$`}):</p>
          <p className="lrn-eq">{`$$2\\text{MnO}_4^-(aq) + 5\\text{H}_2\\text{C}_2\\text{O}_4(aq) + 6\\text{H}^+(aq) \\to 2\\text{Mn}^{2+}(aq) + 10\\text{CO}_2(g) + 8\\text{H}_2\\text{O}(l)$$`}</p>
          <p>Total electrons transferred: {`$n = 10$`}.</p>
          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>Why do we multiply the reduction half-reaction by 2 and the oxidation by 5?</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                Each reduction moves 5 electrons; each oxidation moves 2 electrons. To cancel
                electrons, we need 10 of each. LCM(5, 2) = 10. So reduction is multiplied by 2 and
                oxidation by 5.
              </p>
            </details>
          </div>
          <p>
            You can now balance any acidic redox equation: split, balance atoms, balance charge with
            electrons, then scale to cancel.
          </p>
        </>,

        <>
          <div className="lrn-header">
            <h2>Balancing Redox Equations in Basic Solution</h2>
          </div>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              {`$\\text{MnO}_4^- + \\text{Br}^- \\to \\text{MnO}_2 + \\text{BrO}_3^-$`} occurs in
              base. How will you handle {`$\\text{H}^+$`} ions that appear during balancing?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                Balance in acid first, then neutralise every {`$\\text{H}^+$`} at the end by adding
                one {`$\\text{OH}^-$`} to both sides.
              </p>
            </details>
          </div>
          <p>
            Use the basic-solution method when the reaction occurs in alkaline media. Balance
            exactly as in acid, then neutralise every {`$\\text{H}^+$`} ion at the end by adding one{' '}
            {`$\\text{OH}^-$`} to both sides. Each{' '}
            {`$\\text{H}^+ + \\text{OH}^- \\to \\text{H}_2\\text{O}$`}.
          </p>
          <h3>Worked Example</h3>
          <p>
            Balance{' '}
            {`$\\text{MnO}_4^-(aq) + \\text{Br}^-(aq) \\to \\text{MnO}_2(s) + \\text{BrO}_3^-(aq)$`}{' '}
            in base.
          </p>
          <p>
            <strong>Reduction</strong> (Mn: +7 to +4, gain 3 electrons). First balance in acid, add
            H{`$_2$`}O for oxygen, H{`$^+$`} for hydrogen, then electrons:
          </p>
          <p className="lrn-eq">{`$$\\text{MnO}_4^- + 4\\text{H}^+ + 3e^- \\to \\text{MnO}_2 + 2\\text{H}_2\\text{O}$$`}</p>
          <p>
            Now neutralise each H{`$^+$`} by adding 4 OH{`$^-$`} to both sides:
          </p>
          <p className="lrn-eq">{`$$\\text{MnO}_4^- + 4\\text{H}_2\\text{O} + 3e^- \\to \\text{MnO}_2 + 2\\text{H}_2\\text{O} + 4\\text{OH}^-$$`}</p>
          <p>Cancel the 2 H{`$_2$`}O that appear on both sides:</p>
          <p className="lrn-eq">{`$$\\text{MnO}_4^- + 2\\text{H}_2\\text{O} + 3e^- \\to \\text{MnO}_2 + 4\\text{OH}^-$$`}</p>
          <p>
            <strong>Oxidation</strong> (Br: -1 to +5, loss 6 electrons). Balance in acid first:
          </p>
          <p className="lrn-eq">{`$$\\text{Br}^- + 3\\text{H}_2\\text{O} \\to \\text{BrO}_3^- + 6\\text{H}^+ + 6e^-$$`}</p>
          <p>
            Neutralise each H{`$^+$`} by adding 6 OH{`$^-$`} to both sides and cancel 3 H{`$_2$`}O:
          </p>
          <p className="lrn-eq">{`$$\\text{Br}^- + 6\\text{OH}^- \\to \\text{BrO}_3^- + 3\\text{H}_2\\text{O} + 6e^-$$`}</p>
          <p>Equalise electrons (multiply reduction by 2), add and cancel:</p>
          <p className="lrn-eq">{`$$2\\text{MnO}_4^-(aq) + \\text{Br}^-(aq) + \\text{H}_2\\text{O}(l) \\to 2\\text{MnO}_2(s) + \\text{BrO}_3^-(aq) + 2\\text{OH}^-(aq)$$`}</p>
          <p>Total electrons transferred: {`$n = 6$`}.</p>
          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>
              Why add {`$\\text{OH}^-$`} at the end rather than use {`$\\text{OH}^-$`} from the
              start to balance H?
            </p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                The method in acid is reliable and mechanical. Converting at the end is less
                error-prone than trying to balance with {`$\\text{OH}^-$`} directly from the start.
              </p>
            </details>
          </div>
          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Acid Balancing</span>
              <p>
                Add {`$\\text{H}^+$`} directly to balance hydrogen. Final equation contains{' '}
                {`$\\text{H}^+$`}.
              </p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Base Balancing</span>
              <p>
                Balance in acid first, then neutralise each {`$\\text{H}^+$`} with{' '}
                {`$\\text{OH}^-$`} at the end.
              </p>
            </div>
          </div>
        </>,

        <>
          <div className="lrn-header">
            <h2>Half-Cells and Galvanic Cells</h2>
          </div>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              If you connect a zinc rod in zinc sulfate solution to a copper rod in copper sulfate
              solution, in which direction do electrons flow through the wire?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                Zinc is more easily oxidised (lower {`$E^\\circ$`}). Electrons flow from zinc
                (anode) to copper (cathode) through the external wire.
              </p>
            </details>
          </div>
          <p>
            A <strong>galvanic cell</strong> (voltaic cell) converts a spontaneous redox reaction
            into electrical work. It separates the two half-reactions into two compartments called{' '}
            <strong>half-cells</strong>.
          </p>
          <p>
            Each half-cell contains an <strong>electrode</strong> (a metal rod or inert conductor)
            and an <strong>electrolyte</strong> (a solution of ions). Electrons flow through the
            external wire. Ions carry charge through the electrolyte.
          </p>
          <div className="lrn-definition">
            <span className="lrn-definition-term">Anode</span>
            <div className="lrn-definition-desc">
              <p>
                The electrode where <strong>oxidation</strong> occurs. Metal dissolves; electrons
                leave. The anode carries a negative sign in a galvanic cell.
              </p>
            </div>
          </div>
          <div className="lrn-definition">
            <span className="lrn-definition-term">Cathode</span>
            <div className="lrn-definition-desc">
              <p>
                The electrode where <strong>reduction</strong> occurs. Metal deposits; electrons
                arrive. The cathode carries a positive sign in a galvanic cell.
              </p>
            </div>
          </div>
          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Anode</span>
              <p>
                Oxidation. Electrons leave. Negative terminal in galvanic cell. Mnemonic: AN OX.
              </p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Cathode</span>
              <p>
                Reduction. Electrons arrive. Positive terminal in galvanic cell. Mnemonic: RED CAT.
              </p>
            </div>
          </div>
        </>,

        <>
          <div className="lrn-header">
            <h2>The Daniell Cell</h2>
          </div>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              In the Daniell cell, zinc metal sits in zinc sulfate and copper metal sits in copper
              sulfate. After the cell runs, which electrode gains mass?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                The copper cathode gains mass. Copper metal plates out onto it as{' '}
                {`$\\text{Cu}^{2+}$`} is reduced. The zinc anode loses mass as zinc dissolves.
              </p>
            </details>
          </div>
          <p>
            The <strong>Daniell cell</strong> is the standard example of a galvanic cell.
          </p>
          <ul className="lrn-list">
            <li>Anode (oxidation): {`$\\text{Zn}(s) \\to \\text{Zn}^{2+}(aq) + 2e^-$`}</li>
            <li>Cathode (reduction): {`$\\text{Cu}^{2+}(aq) + 2e^- \\to \\text{Cu}(s)$`}</li>
          </ul>
          <p>Overall cell reaction:</p>
          <p className="lrn-eq">{`$$\\text{Zn}(s) + \\text{Cu}^{2+}(aq) \\to \\text{Zn}^{2+}(aq) + \\text{Cu}(s)$$`}</p>
          <DaniellCellViz />
          <p>
            A <strong>porous pot</strong> or <strong>salt bridge</strong> connects the two
            electrolyte solutions. Without it, positive charge builds up in the zinc compartment and
            the reaction stops. The salt bridge (typically KCl in agar) lets ions migrate and
            balances charge without mixing the solutions.
          </p>
          <p>
            The standard cell potential of the Daniell cell is{' '}
            {`$E^\\circ_\\text{cell} = +1.10\\text{ V}$`}.
          </p>
          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>Why use KCl in the salt bridge?</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                {`$\\text{K}^+$`} and {`$\\text{Cl}^-$`} have almost identical mobility. This
                minimises the liquid junction potential, a small stray voltage where two solutions
                meet, that would otherwise distort the measurement. The two small opposing junction
                potentials cancel.
              </p>
            </details>
          </div>
        </>,

        <>
          <div className="lrn-header">
            <h2>Cell Notation</h2>
          </div>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>How would you write the Daniell cell in shorthand notation?</p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                {`$\\text{Zn}(s) | \\text{ZnSO}_4(aq) \\| \\text{CuSO}_4(aq) | \\text{Cu}(s)$`}.
                Anode on the left, cathode on the right, double line for the salt bridge.
              </p>
            </details>
          </div>
          <p>
            <strong>Cell notation</strong> is a compact, standardised way to describe a galvanic
            cell.
          </p>
          <ul className="lrn-list">
            <li>
              Write the <strong>anode</strong> (oxidation) on the <strong>left</strong>.
            </li>
            <li>
              Write the <strong>cathode</strong> (reduction) on the <strong>right</strong>.
            </li>
            <li>
              A single vertical line {`$|$`} marks a phase boundary (solid-solution interface).
            </li>
            <li>
              A double vertical line {`$\\|$`} marks a salt bridge or eliminated liquid junction.
            </li>
            <li>Inert electrodes (e.g. Pt) are written explicitly.</li>
          </ul>
          <p>
            Daniell cell:{' '}
            {`$\\text{Zn}(s) | \\text{ZnSO}_4(aq) \\| \\text{CuSO}_4(aq) | \\text{Cu}(s)$`}
          </p>
          <p>
            Example with inert Pt electrode:{' '}
            {`$\\text{Pt}(s) | \\text{H}_2(g) | \\text{H}^+(aq) \\| \\text{Hg}_2\\text{Cl}_2(s) | \\text{Hg}(l)$`}
          </p>
          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>Why is the anode always written on the left?</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                Convention. Consistent notation prevents ambiguity when comparing cells in tables or
                literature. The cell reaction is (reduction at right) minus (reduction at left).
              </p>
            </details>
          </div>
        </>,

        <>
          <div className="lrn-header">
            <h2>Cell Potential and Reaction Gibbs Energy</h2>
          </div>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              A cell does electrical work. What property of the reaction determines whether it will
              do work spontaneously?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                The Gibbs energy change {`$\\Delta G$`}. A negative {`$\\Delta G$`} means the
                reaction is spontaneous and the cell does work. This corresponds to a positive cell
                potential {`$E_\\text{cell}$`}.
              </p>
            </details>
          </div>
          <p>The fundamental connection between electrochemistry and thermodynamics:</p>
          <div className="lrn-eq lrn-eq-hero">
            <span>{`$$\\Delta G = -nFE_\\text{cell}$$`}</span>
          </div>
          <DeltaGSignMapViz />
          <p>
            where {`$n$`} is the number of moles of electrons transferred,{' '}
            {`$F = 9.6485 \\times 10^4\\text{ C mol}^{-1}$`} (Faraday's constant), and{' '}
            {`$E_\\text{cell}$`} is the cell potential in volts.
          </p>
          <ul className="lrn-list">
            <li>
              {`$E_\\text{cell} > 0 \\Rightarrow \\Delta G < 0$`}: reaction is spontaneous, cell
              does work.
            </li>
            <li>
              {`$E_\\text{cell} < 0 \\Rightarrow \\Delta G > 0$`}: reaction is non-spontaneous.
            </li>
            <li>
              {`$E_\\text{cell} = 0 \\Rightarrow \\Delta G = 0$`}: reaction is at equilibrium.
            </li>
          </ul>
          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>
              Work done by the system is negative Gibbs energy. The cell potential{' '}
              {`$E_\\text{cell}$`} is defined as positive when the cell drives current
              spontaneously. So {`$\\Delta G = -nFE_\\text{cell}$`} ensures a positive cell
              potential gives negative Gibbs energy (spontaneous).
            </p>
          </div>
          <h3>Worked Example</h3>
          <p>
            Daniell cell, {`$n = 2$`}. Here we use {`$E_\\text{cell} = 1.04\\text{ V}$`}, a
            non-standard value that arises at lower concentrations (you will see how it comes from
            the standard 1.10 V later, with the Nernst equation):
          </p>
          <p className="lrn-eq">{`$$\\Delta G = -(2)(9.6485 \\times 10^4)(1.04) = -201\\text{ kJ mol}^{-1}$$`}</p>
          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>Why is {`$n = 2$`} for the Daniell cell?</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                The balanced equation shows Zn loses 2 electrons and Cu{`$^{2+}$`} gains 2
                electrons. Two moles of electrons transfer per mole of reaction.
              </p>
            </details>
          </div>
        </>,

        <>
          <div className="lrn-header">
            <h2>Standard Cell Potential</h2>
          </div>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              Cell potential depends on concentration. How can you define a single standard value
              for comparison?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                Fix all conditions: solutes at unit activity ({`$\\approx 1\\text{ mol L}^{-1}$`}),
                gases at 1 bar, pure solids and liquids, {`$T = 298\\text{ K}$`}. The potential
                measured under these conditions is {`$E^\\circ_\\text{cell}$`}.
              </p>
            </details>
          </div>
          <p>
            <strong>Standard conditions</strong> are the same reference state you met for {`$K$`} in
            Unit 5: all solutes at unit activity ({`$\\approx 1\\text{ mol L}^{-1}$`}), all gases at
            1 bar, pure solids and liquids, {`$T = 298\\text{ K}$`}. <strong>Activity</strong> is
            the effective concentration of a species; for dilute solutions it is about equal to the
            molar concentration, and for a pure solid or liquid it is 1.
          </p>
          <p className="lrn-eq">{`$$\\Delta G^\\circ = -nFE^\\circ_\\text{cell}$$`}</p>
          <p>
            {`$E^\\circ_\\text{cell}$`} is an <strong>intensive property</strong>, its value does
            not change with the amount of material. This is unlike an <strong>extensive</strong>{' '}
            property, which scales with amount. So {`$E^\\circ_\\text{cell}$`} does not depend on
            how many times you write the balanced equation. Doubling all coefficients doubles{' '}
            {`$n$`} and doubles the extensive quantity {`$\\Delta G^\\circ$`}, but{' '}
            {`$E^\\circ_\\text{cell} = -\\Delta G^\\circ/(nF)$`} stays constant.
          </p>
          <p>
            Use {`$E^\\circ_\\text{cell}$`} for calculations involving equilibrium constants or
            standard Gibbs energies. Correct to {`$E_\\text{cell}$`} via the Nernst equation for
            non-standard concentrations.
          </p>
        </>,

        <>
          <div className="lrn-header">
            <h2>The Standard Hydrogen Electrode (SHE)</h2>
          </div>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              To measure the potential of one half-cell, you need a reference. What makes the
              hydrogen electrode a good reference?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                Its potential is defined as exactly 0 V at all temperatures by international
                convention. Every other {`$E^\\circ$`} is measured relative to it.
              </p>
            </details>
          </div>
          <p>
            Half-cell potentials cannot be measured in isolation. You always measure a difference. A
            reference half-cell is needed.
          </p>
          <p>
            The <strong>standard hydrogen electrode (SHE)</strong> is defined as:
          </p>
          <p className="lrn-eq">{`$$2\\text{H}^+(aq,\\, a = 1) + 2e^- \\to \\text{H}_2(g,\\, 1\\text{ bar})$$`}</p>
          <p className="lrn-eq">{`$$E^\\circ = 0\\text{ V exactly, at all temperatures (by convention)}$$`}</p>
          <p>
            The SHE is a platinum electrode in contact with hydrogen gas at 1 bar over{' '}
            {`$\\text{H}^+(aq)$`} at unit activity. Every listed {`$E^\\circ$`} value is measured
            relative to the SHE. Cell notation:{' '}
            {`$\\text{Pt}(s) | \\text{H}_2(g) | \\text{H}^+(aq)$`}.
          </p>
        </>,

        <>
          <div className="lrn-header">
            <h2>Standard Electrode Potentials</h2>
          </div>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              Fluorine has a very high affinity for electrons. Would you expect{' '}
              {`$E^\\circ(\\text{F}_2/\\text{F}^-)$`} to be strongly positive or strongly negative?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                Strongly positive. A high affinity for electrons means the couple strongly attracts
                electrons (easily reduced).{' '}
                {`$E^\\circ(\\text{F}_2/\\text{F}^-) = +2.87\\text{ V}$`}.
              </p>
            </details>
          </div>
          <p>
            <strong>Standard electrode potentials</strong> (standard reduction potentials) are
            listed values of {`$E^\\circ$`} for half-reactions written as reductions:
          </p>
          <p className="lrn-eq">{`$$\\text{Ox} + ne^- \\to \\text{Red}$$`}</p>
          <p>
            All values are measured at 298 K with all species at unit activity, relative to the SHE.
          </p>
          <table className="lrn-table">
            <thead>
              <tr>
                <th>Couple</th>
                <th>{`$E^\\circ / \\text{V}$`}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{`$\\text{F}_2/\\text{F}^-$`}</td>
                <td>+2.87</td>
              </tr>
              <tr>
                <td>{`$\\text{Au}^+/\\text{Au}$`}</td>
                <td>+1.69</td>
              </tr>
              <tr>
                <td>{`$\\text{MnO}_4^-/\\text{Mn}^{2+}$`}</td>
                <td>+1.51</td>
              </tr>
              <tr>
                <td>{`$\\text{Cl}_2/\\text{Cl}^-$`}</td>
                <td>+1.36</td>
              </tr>
              <tr>
                <td>{`$\\text{Cr}_2\\text{O}_7^{2-}/\\text{Cr}^{3+}$`}</td>
                <td>+1.33</td>
              </tr>
              <tr>
                <td>{`$\\text{O}_2/\\text{H}_2\\text{O}$`} (pH 0)</td>
                <td>+1.23</td>
              </tr>
              <tr>
                <td>{`$\\text{Br}_2/\\text{Br}^-$`}</td>
                <td>+1.09</td>
              </tr>
              <tr>
                <td>{`$\\text{NO}_3^-/\\text{NO}$`}</td>
                <td>+0.96</td>
              </tr>
              <tr>
                <td>{`$\\text{Ag}^+/\\text{Ag}$`}</td>
                <td>+0.80</td>
              </tr>
              <tr>
                <td>{`$\\text{Fe}^{3+}/\\text{Fe}^{2+}$`}</td>
                <td>+0.77</td>
              </tr>
              <tr>
                <td>{`$\\text{Cu}^{2+}/\\text{Cu}$`}</td>
                <td>+0.34</td>
              </tr>
              <tr>
                <td>{`$\\text{AgCl}/\\text{Ag},\\text{Cl}^-$`}</td>
                <td>+0.22</td>
              </tr>
              <tr>
                <td>{`$\\text{H}^+/\\text{H}_2$`}</td>
                <td>0 (definition)</td>
              </tr>
              <tr>
                <td>{`$\\text{Fe}^{2+}/\\text{Fe}$`}</td>
                <td>-0.44</td>
              </tr>
              <tr>
                <td>{`$\\text{Zn}^{2+}/\\text{Zn}$`}</td>
                <td>-0.76</td>
              </tr>
              <tr>
                <td>{`$\\text{Al}^{3+}/\\text{Al}$`}</td>
                <td>-1.66</td>
              </tr>
              <tr>
                <td>{`$\\text{Na}^+/\\text{Na}$`}</td>
                <td>-2.71</td>
              </tr>
              <tr>
                <td>{`$\\text{Li}^+/\\text{Li}$`}</td>
                <td>-3.05</td>
              </tr>
            </tbody>
          </table>
          <StandardPotentialLadderViz />
          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>
              Tables always write half-reactions as reductions. If some entries were written as
              oxidations, tables would be unreadable. Convention fixes all entries as reductions;
              you reverse the sign when you use a half-reaction as an oxidation.
            </p>
          </div>
        </>,

        <>
          <div className="lrn-header">
            <h2>Standard Cell Potential from Two Electrode Potentials</h2>
          </div>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              You want to build a cell from {`$\\text{Sn}^{4+}/\\text{Sn}^{2+}$`} and{' '}
              {`$\\text{Zn}^{2+}/\\text{Zn}$`}. Which will be the cathode?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                The cathode has the higher {`$E^\\circ$`}.{' '}
                {`$E^\\circ(\\text{Sn}^{4+}/\\text{Sn}^{2+}) = +0.15\\text{ V}$`} versus{' '}
                {`$E^\\circ(\\text{Zn}^{2+}/\\text{Zn}) = -0.76\\text{ V}$`}. Sn{`$^{4+}$`}/Sn
                {`$^{2+}$`}
                is the cathode.
              </p>
            </details>
          </div>
          <div className="lrn-eq lrn-eq-hero">
            <span>{`$$E^\\circ_\\text{cell} = E^\\circ(\\text{cathode}) - E^\\circ(\\text{anode})$$`}</span>
          </div>
          <p>
            The cathode (right in cell notation) has the higher {`$E^\\circ$`}. The anode (left) has
            the lower {`$E^\\circ$`}.
          </p>
          <h3>Worked Example</h3>
          <p>
            Given {`$E^\\circ(\\text{Zn}^{2+}/\\text{Zn}) = -0.76\\text{ V}$`} and{' '}
            {`$E^\\circ_\\text{cell} = +0.91\\text{ V}$`}, find{' '}
            {`$E^\\circ(\\text{Sn}^{4+}/\\text{Sn}^{2+})$`}.
          </p>
          <p className="lrn-eq">{`$$+0.91 = E^\\circ(\\text{Sn}^{4+}/\\text{Sn}^{2+}) - (-0.76)$$`}</p>
          <p className="lrn-eq">{`$$E^\\circ(\\text{Sn}^{4+}/\\text{Sn}^{2+}) = +0.91 - 0.76 = +0.15\\text{ V}$$`}</p>
          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>Why subtract, not add?</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                {`$E^\\circ_\\text{cell}$`} is the cathode potential minus the anode potential, both
                expressed as reduction potentials. Subtraction corrects for the fact that the anode
                runs in reverse.
              </p>
            </details>
          </div>
        </>,

        <>
          <div className="lrn-header">
            <h2>Combining Standard Potentials for Non-Listed Couples</h2>
          </div>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              You know {`$E^\\circ(\\text{Cu}^{2+}/\\text{Cu}) = +0.340\\text{ V}$`} and{' '}
              {`$E^\\circ(\\text{Cu}^+/\\text{Cu}) = +0.522\\text{ V}$`}. Can you find{' '}
              {`$E^\\circ(\\text{Cu}^{2+}/\\text{Cu}^+)$`} by simply subtracting?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                No. {`$E^\\circ$`} is intensive and does not scale with electron count. You must
                convert to {`$\\Delta G^\\circ$`}, combine, then convert back.
              </p>
            </details>
          </div>
          <p>
            You <strong>cannot</strong> add or subtract {`$E^\\circ$`} values directly when the
            electron numbers differ. You must convert to {`$\\Delta G^\\circ$`}, combine, then
            convert back.
          </p>
          <p className="lrn-eq">{`$$\\nu_c E^\\circ(c) = \\nu_a E^\\circ(a) - \\nu_b E^\\circ(b)$$`}</p>
          <p>where {`$\\nu$`} is the number of electrons for each half-reaction.</p>
          <h3>Worked Example</h3>
          <p>Find {`$E^\\circ(\\text{Cu}^{2+}/\\text{Cu}^+)$`}:</p>
          <ul className="lrn-list">
            <li>
              Step (a): {`$\\text{Cu}^{2+} + 2e^- \\to \\text{Cu}$`}; {`$\\nu_a = 2$`};{' '}
              {`$E^\\circ = +0.340\\text{ V}$`}
            </li>
            <li>
              Step (b): {`$\\text{Cu}^+ + e^- \\to \\text{Cu}$`}; {`$\\nu_b = 1$`};{' '}
              {`$E^\\circ = +0.522\\text{ V}$`}
            </li>
            <li>
              Step (c): {`$\\text{Cu}^{2+} + e^- \\to \\text{Cu}^+$`}; {`$\\nu_c = 1$`}
            </li>
          </ul>
          <p className="lrn-eq">{`$$1 \\times E^\\circ(c) = 2(+0.340) - 1(+0.522) = 0.680 - 0.522 = +0.158\\text{ V}$$`}</p>
          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>Why can't you just subtract {`$E^\\circ$`} values?</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                {`$E^\\circ$`} is like potential energy per electron. If you add half-reactions with
                different numbers of electrons, the "per electron" average is not the arithmetic sum, it is the weighted average by electron count.
              </p>
            </details>
          </div>
        </>,

        <>
          <div className="lrn-header">
            <h2>The Electrochemical Series</h2>
          </div>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              A copper rod is placed in silver nitrate solution. Will a reaction occur? Which metal
              will deposit?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                {`$E^\\circ(\\text{Ag}^+/\\text{Ag}) = +0.80\\text{ V} > E^\\circ(\\text{Cu}^{2+}/\\text{Cu}) = +0.34\\text{ V}$`}
                . Ag{`$^+$`} is a stronger oxidising agent. Copper will dissolve and silver will
                plate out. Reaction is spontaneous.
              </p>
            </details>
          </div>
          <p>
            The <strong>electrochemical series</strong> ranks redox couples from lowest to highest{' '}
            {`$E^\\circ$`}. Low {`$E^\\circ$`} means strong reducing agent (easily oxidised). High{' '}
            {`$E^\\circ$`} means strong oxidising agent (easily reduced).
          </p>
          <p>
            <strong>The rule: "Low reduces high."</strong> A couple with a lower {`$E^\\circ$`} will
            reduce the oxidised form of any couple with a higher {`$E^\\circ$`}. The reaction is
            spontaneous when the couple with the lower {`$E^\\circ$`} acts as the anode.
          </p>
          <p>
            Qualitative order (most to least reducing): Li, K, Ca, Na, Mg, Al, Zn, Cr, Fe, Sn, Ni, H
            {`$_2$`}, Cu, Ag, Pt, Au.
          </p>
          <h3>Worked Example</h3>
          <p>
            Will {`$\\text{MnO}_4^-$`} oxidise {`$\\text{Cr}^{3+}$`} to{' '}
            {`$\\text{Cr}_2\\text{O}_7^{2-}$`}?
          </p>
          <p>
            {`$E^\\circ(\\text{MnO}_4^-/\\text{Mn}^{2+}) = +1.51\\text{ V}$`} versus{' '}
            {`$E^\\circ(\\text{Cr}_2\\text{O}_7^{2-}/\\text{Cr}^{3+}) = +1.33\\text{ V}$`}.
          </p>
          <p className="lrn-eq">{`$$E^\\circ_\\text{cell} = 1.51 - 1.33 = +0.18\\text{ V} > 0$$`}</p>
          <p>Spontaneous. {`$\\text{MnO}_4^-$`} acts as the cathode (reduction).</p>
          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Strong Oxidising Agent</span>
              <p>
                High positive {`$E^\\circ$`}. Strongly attracts electrons. Example: F{`$_2$`}: +2.87
                V.
              </p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Strong Reducing Agent</span>
              <p>Very negative {`$E^\\circ$`}. Strongly donates electrons. Example: Li: -3.05 V.</p>
            </div>
          </div>
        </>,

        <>
          <div className="lrn-header">
            <h2>Standard Potentials and Equilibrium Constants</h2>
          </div>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              A cell with {`$E^\\circ_\\text{cell} = +1.10\\text{ V}$`} and {`$n = 2$`} electrons:
              is the equilibrium strongly product-favoured?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                Yes. A large positive {`$E^\\circ$`} gives a large negative {`$\\Delta G^\\circ$`}
                and an enormous {`$K$`}. The reaction goes almost all the way to completion.
              </p>
            </details>
          </div>
          <p>
            Since {`$\\Delta G^\\circ = -nFE^\\circ_\\text{cell}$`} and{' '}
            {`$\\Delta G^\\circ = -RT\\ln K$`}:
          </p>
          <div className="lrn-eq lrn-eq-hero">
            <span>{`$$\\ln K = \\frac{nFE^\\circ_\\text{cell}}{RT} = \\frac{nE^\\circ_\\text{cell}}{0.025693\\text{ V}}$$`}</span>
          </div>
          <p>
            Or in base-10 form: {`$\\log K = \\dfrac{nE^\\circ_\\text{cell}}{0.05917\\text{ V}}$`}
          </p>
          <LnKvsEViz />
          <h3>Worked Example: Daniell Cell</h3>
          <p>
            {`$E^\\circ_\\text{cell} = +1.10\\text{ V}$`}, {`$n = 2$`}.
          </p>
          <p className="lrn-eq">{`$$\\ln K = \\frac{2 \\times 1.10}{0.025693} = 85.6 \\quad K = e^{85.6} = 1.45 \\times 10^{37}$$`}</p>
          <p className="lrn-eq">{`$$\\Delta G^\\circ = -(2)(96485)(1.10) = -212\\text{ kJ mol}^{-1}$$`}</p>
          <h3>Worked Example: K{`$_\\text{sp}$`} for AgCl</h3>
          <p>
            Anode: {`$\\text{Ag}(s) \\to \\text{Ag}^+(aq) + e^-$`}; Cathode:{' '}
            {`$\\text{AgCl}(s) + e^- \\to \\text{Ag}(s) + \\text{Cl}^-(aq)$`}.
          </p>
          <p className="lrn-eq">{`$$E^\\circ_\\text{cell} = 0.22 - 0.80 = -0.58\\text{ V}$$`}</p>
          <p className="lrn-eq">{`$$\\ln K_\\text{sp} = \\frac{1 \\times (-0.58)}{0.025693} = -22.6 \\quad K_\\text{sp} = e^{-22.6} = 1.6 \\times 10^{-10}$$`}</p>
          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>Why is {`$F/(RT) = 1/(0.025693\\text{ V})$`} at 298 K?</p>
            <p>
              {`$RT = (8.3145)(298.15) = 2478.8\\text{ J mol}^{-1}$`}.{' '}
              {`$F = 96485\\text{ C mol}^{-1}$`}. {`$RT/F = 2478.8/96485 = 0.025693\\text{ V}$`}.
              This is not a new constant, it is derived from {`$R$`}, {`$T$`}, and {`$F$`}.
            </p>
          </div>
        </>,

        <>
          <div className="lrn-header">
            <h2>The Nernst Equation</h2>
          </div>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              The Daniell cell has {`$E^\\circ_\\text{cell} = +1.10\\text{ V}$`} with all
              concentrations at 1 M. If you lower [Cu{`$^{2+}$`}] to 0.001 M, does the cell
              potential increase or decrease?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                It decreases. Lowering the concentration of the reactant (Cu{`$^{2+}$`}) reduces the
                driving force. The Nernst equation subtracts from {`$E^\\circ$`} when {`$Q > 1$`}.
              </p>
            </details>
          </div>
          <p>
            When concentrations differ from standard conditions, use the{' '}
            <strong>Nernst equation</strong>. It corrects {`$E^\\circ_\\text{cell}$`} using the{' '}
            <strong>reaction quotient</strong> {`$Q$`} (the same ratio you met for equilibrium in
            Unit 5, with pure solids and liquids left out).
          </p>
          <div className="lrn-eq lrn-eq-hero">
            <span>{`$$E_\\text{cell} = E^\\circ_\\text{cell} - \\frac{RT}{nF}\\ln Q$$`}</span>
          </div>
          <p>
            At 298 K:{' '}
            {`$E_\\text{cell} = E^\\circ_\\text{cell} - \\dfrac{0.05917\\text{ V}}{n}\\log Q$`}
          </p>
          <NernstViz />
          <div className="lrn-faded">
            <div className="lrn-faded-phase">
              <span className="lrn-faded-label">COMPLETE EXAMPLE</span>
              <p>Derive the Nernst equation from first principles.</p>
              <ol className="lrn-list">
                <li>Start from {`$\\Delta G = \\Delta G^\\circ + RT\\ln Q$`}.</li>
                <li>Substitute {`$\\Delta G = -nFE_\\text{cell}$`} on the left.</li>
                <li>Substitute {`$\\Delta G^\\circ = -nFE^\\circ_\\text{cell}$`} on the right.</li>
                <li>Divide both sides by {`$-nF$`}.</li>
                <li>
                  Result: {`$E_\\text{cell} = E^\\circ_\\text{cell} - \\frac{RT}{nF}\\ln Q$`}.
                </li>
              </ol>
            </div>
            <div className="lrn-faded-phase">
              <span className="lrn-faded-label">YOUR TURN</span>
              <p>
                A concentration cell of Ag/Ag{`$^+$`} has right compartment{' '}
                {`$[\\text{Ag}^+] = 1.00\\text{ mol L}^{-1}$`} and{' '}
                {`$E_\\text{cell} = +0.42\\text{ V}$`}. Find {`$[\\text{Ag}^+]$`} in the left
                compartment. (Answer: {`$8.0 \\times 10^{-8}\\text{ mol L}^{-1}$`}.)
              </p>
            </div>
          </div>
          <h3>Worked Example: Daniell Cell at Non-Standard Conditions</h3>
          <p>
            {`$[\\text{Zn}^{2+}] = 0.10\\text{ mol L}^{-1}$`},{' '}
            {`$[\\text{Cu}^{2+}] = 0.0010\\text{ mol L}^{-1}$`}, {`$n = 2$`}.
          </p>
          <p className="lrn-eq">{`$$Q = \\frac{[\\text{Zn}^{2+}]}{[\\text{Cu}^{2+}]} = \\frac{0.10}{0.0010} = 100$$`}</p>
          <p className="lrn-eq">{`$$E_\\text{cell} = 1.10 - \\frac{0.05917}{2}\\log(100) = 1.10 - 0.05917 = +1.04\\text{ V}$$`}</p>
          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>Why does lower [Cu{`$^{2+}$`}] decrease the cell potential?</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                A lower concentration of the reactant (Cu{`$^{2+}$`}) shifts the equilibrium toward
                reactants. The driving force decreases. The Nernst term {`$-(0.05917/n)\\log Q$`} is
                negative when {`$Q > 1$`}, so it subtracts from {`$E^\\circ$`}.
              </p>
            </details>
          </div>
        </>,

        <>
          <div className="lrn-header">
            <h2>Cells at Equilibrium and Concentration Cells</h2>
          </div>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              You let a galvanic cell run until no current flows. What is the cell potential at that
              point? What has happened to Q?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>The cell potential is zero. Q has reached K. No driving force remains.</p>
            </details>
          </div>
          <p>When a galvanic cell reaches equilibrium:</p>
          <ul className="lrn-list">
            <li>{`$Q = K$`} (reaction quotient equals equilibrium constant)</li>
            <li>{`$E_\\text{cell} = 0$`} (no potential difference, no current flows)</li>
            <li>{`$\\Delta G = 0$`}</li>
          </ul>
          <p>
            Substituting {`$Q = K$`} and {`$E_\\text{cell} = 0$`} into the Nernst equation:
          </p>
          <p className="lrn-eq">{`$$E^\\circ_\\text{cell} = \\frac{RT}{nF}\\ln K$$`}</p>
          <p>A dead battery is a cell at equilibrium.</p>
          <p>
            A <strong>concentration cell</strong> has identical electrodes and half-reactions but
            different concentrations. {`$E^\\circ_\\text{cell} = 0$`} because both halves are
            identical. The driving force comes entirely from the concentration difference:
          </p>
          <p className="lrn-eq">{`$$E_\\text{cell} = -\\frac{0.05917}{n}\\log\\frac{[\\text{dilute}]}{[\\text{concentrated}]}$$`}</p>
          <ConcentrationCellViz />
          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">{`$E^\\circ_\\text{cell}$`}</span>
              <p>
                Applies only at unit activity (standard state). Used to find {`$K$`} and{' '}
                {`$\\Delta G^\\circ$`}.
              </p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">{`$E_\\text{cell}$`}</span>
              <p>
                Actual potential at current concentrations, corrected by Nernst. At equilibrium,{' '}
                {`$E_\\text{cell} = 0$`}.
              </p>
            </div>
          </div>
        </>,

        <>
          <div className="lrn-header">
            <h2>Dependence of Reduction Potentials on pH</h2>
          </div>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              The half-reaction{' '}
              {`$\\text{MnO}_4^- + 8\\text{H}^+ + 5e^- \\to \\text{Mn}^{2+} + 4\\text{H}_2\\text{O}$`}{' '}
              involves H{`$^+$`}. If pH increases from 0 to 7, does {`$E$`} increase or decrease?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                It decreases. More OH{`$^-$`} (higher pH) means fewer H{`$^+$`}. H{`$^+$`} is a
                reactant; fewer reactants shift the equilibrium left, decreasing {`$E$`}.
              </p>
            </details>
          </div>
          <p>
            When a half-reaction involves H{`$^+$`} or OH{`$^-$`}, changing pH shifts {`$E$`}. For a
            half-reaction involving {`$m$`} protons, each unit increase in pH decreases {`$E$`} by
            about {`$\\frac{0.05917 \\times m}{n}\\text{ V}$`} per pH unit.
          </p>
          <p>O{`$_2$`} reduction potential versus pH:</p>
          <table className="lrn-table">
            <thead>
              <tr>
                <th>pH</th>
                <th>Half-reaction</th>
                <th>{`$E$`}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>0</td>
                <td>{`$\\text{O}_2 + 4\\text{H}^+ + 4e^- \\to 2\\text{H}_2\\text{O}$`}</td>
                <td>+1.23 V</td>
              </tr>
              <tr>
                <td>7</td>
                <td>(same, Nernst corrected)</td>
                <td>+0.82 V</td>
              </tr>
              <tr>
                <td>14</td>
                <td>{`$\\text{O}_2 + 2\\text{H}_2\\text{O} + 4e^- \\to 4\\text{OH}^-$`}</td>
                <td>+0.40 V</td>
              </tr>
            </tbody>
          </table>
        </>,

        <>
          <div className="lrn-header">
            <h2>Effect of Complex Formation and Precipitation on Electrode Potentials</h2>
          </div>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              You add Cl{`$^-$`} to a solution of Ag{`$^+$`} in contact with a silver electrode. The
              Cl{`$^-$`} precipitates AgCl. Does the electrode potential increase or decrease?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                It decreases. Precipitation lowers [Ag{`$^+$`}] enormously. By Nernst, lower [Ox]
                gives a lower {`$E$`}.
              </p>
            </details>
          </div>
          <p>
            Complex formation and precipitation lower the concentration of the free ion. By Nernst,
            a lower concentration of the oxidised form decreases {`$E$`}.
          </p>
          <p>
            Adding Cl{`$^-$`} precipitates AgCl, lowering [Ag{`$^+$`}] enormously. The new couple is
            AgCl/Ag,Cl{`$^-$`}:
          </p>
          <p className="lrn-eq">{`$$\\text{AgCl}(s) + e^- \\to \\text{Ag}(s) + \\text{Cl}^-(aq), \\quad E^\\circ = +0.22\\text{ V}$$`}</p>
          <p>
            The potential dropped from +0.80 V to +0.22 V. <strong>General principle:</strong> A
            ligand or precipitant that stabilises the oxidised form lowers {`$E$`}. One that
            stabilises the reduced form raises {`$E$`}.
          </p>
        </>,

        <>
          <div className="lrn-header">
            <h2>Disproportionation Reactions</h2>
          </div>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              Cu{`$^+$`} ions are unstable in water. Based on{' '}
              {`$E^\\circ(\\text{Cu}^{2+}/\\text{Cu}^+) = +0.15\\text{ V}$`} and{' '}
              {`$E^\\circ(\\text{Cu}^+/\\text{Cu}) = +0.52\\text{ V}$`}, will Cu{`$^+$`}{' '}
              disproportionate?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                Yes. {`$E^\\circ_\\text{cell} = 0.52 - 0.15 = +0.37\\text{ V} > 0$`}. Spontaneous.
              </p>
            </details>
          </div>
          <p>
            A <strong>disproportionation reaction</strong> is one where a single species is both
            oxidised and reduced. One fraction oxidises; another fraction reduces.
          </p>
          <p>Example: Cu{`$^+$`} disproportionates in water:</p>
          <p className="lrn-eq">{`$$2\\text{Cu}^+(aq) \\to \\text{Cu}(s) + \\text{Cu}^{2+}(aq)$$`}</p>
          <ul className="lrn-list">
            <li>
              Reduction: {`$\\text{Cu}^+(aq) + e^- \\to \\text{Cu}(s)$`};{' '}
              {`$E^\\circ = +0.52\\text{ V}$`}
            </li>
            <li>
              Oxidation: {`$\\text{Cu}^+(aq) \\to \\text{Cu}^{2+}(aq) + e^-$`};{' '}
              {`$E^\\circ_\\text{anode} = +0.15\\text{ V}$`}
            </li>
          </ul>
          <p className="lrn-eq">{`$$E^\\circ_\\text{cell} = 0.52 - 0.15 = +0.37\\text{ V}$$`}</p>
          <p className="lrn-eq">{`$$K = e^{(1 \\times 0.37/0.025693)} = e^{14.4} = 1.81 \\times 10^6$$`}</p>
          <p>Almost no Cu{`$^+$`} stays in aqueous solution.</p>
        </>,

        <>
          <div className="lrn-header">
            <h2>Potential (Latimer) Diagrams</h2>
          </div>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              Manganese has oxidation states from 0 to +7. How would you show all the {`$E^\\circ$`}{' '}
              values connecting these states in one compact diagram?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                A Latimer diagram: write the states from highest (left) to lowest (right), with{' '}
                {`$E^\\circ$`} values labelled above each arrow connecting adjacent states.
              </p>
            </details>
          </div>
          <p>
            A <strong>Latimer diagram</strong> summarises all standard reduction potentials across
            all oxidation states of an element in a single horizontal line. The highest oxidation
            state is on the left; the lowest is on the right.
          </p>
          <p>Example for iron in acid solution:</p>
          <p className="lrn-eq">{`$$\\text{Fe}^{3+} \\xrightarrow{+0.77\\text{ V}} \\text{Fe}^{2+} \\xrightarrow{-0.44\\text{ V}} \\text{Fe}$$`}</p>
          <LatimerViz />
          <h3>Calculating E{`$^\\circ$`} for a Non-Adjacent Couple</h3>
          <p>Find {`$E^\\circ(\\text{Fe}^{3+}/\\text{Fe})$`}:</p>
          <ul className="lrn-list">
            <li>
              Step (a): {`$\\text{Fe}^{3+} + e^- \\to \\text{Fe}^{2+}$`}; {`$\\nu = 1$`};{' '}
              {`$E^\\circ = +0.77\\text{ V}$`}
            </li>
            <li>
              Step (b): {`$\\text{Fe}^{2+} + 2e^- \\to \\text{Fe}$`}; {`$\\nu = 2$`};{' '}
              {`$E^\\circ = -0.44\\text{ V}$`}
            </li>
          </ul>
          <p className="lrn-eq">{`$$E^\\circ(\\text{Fe}^{3+}/\\text{Fe}) = \\frac{1(0.77) + 2(-0.44)}{3} = \\frac{0.77 - 0.88}{3} = \\frac{-0.11}{3} = -0.037\\text{ V}$$`}</p>
          <p>
            <strong>Disproportionation rule:</strong> A species disproportionates when the{' '}
            {`$E^\\circ$`} to its right (couple that reduces it further) is more positive than the{' '}
            {`$E^\\circ$`} to its left.
          </p>
          <p>
            This is the same electron-weighting you used to combine standard potentials: weight each
            step's {`$E^\\circ$`} by its electron count, sum, then divide by the total electrons.
            You cannot simply average the {`$E^\\circ$`} values.
          </p>
        </>,

        <>
          <div className="lrn-header">
            <h2>Ion-Selective Electrodes and pH Measurement</h2>
          </div>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              A glass pH electrode gives a voltage that depends on [H{`$^+$`}]. Why should that
              voltage follow the Nernst equation?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                The glass membrane allows H{`$^+$`} to establish a potential difference between the
                inner reference and the test solution. This potential follows{' '}
                {`$E \\propto \\log[\\text{H}^+]$`} by the Nernst equation.
              </p>
            </details>
          </div>
          <p>
            The <strong>glass electrode</strong> is an ion-selective electrode specific to H{`$^+$`}
            . A thin glass membrane between an internal reference and the test solution establishes
            a Nernst-type potential difference.
          </p>
          <p>pH meter cell:</p>
          <p className="lrn-eq">{`$$E_\\text{cell} = E'_\\text{cell} + (0.0592\\text{ V}) \\times \\text{pH}$$`}</p>
          <p>The slope of 59.2 mV/pH at 298 K comes from {`$RT\\ln10/F = 0.05917\\text{ V}$`}.</p>
          <p>Reference electrodes used in practice:</p>
          <ul className="lrn-list">
            <li>
              <strong>Calomel electrode:</strong> {`$E^\\circ = +0.268\\text{ V}$`}
            </li>
            <li>
              <strong>Silver/silver chloride:</strong> {`$E^\\circ = +0.222\\text{ V}$`}
            </li>
          </ul>
        </>,

        <>
          <div className="lrn-header">
            <h2>Corrosion</h2>
          </div>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              An iron nail rusts only when both oxygen and water are present. Why is each necessary?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                O{`$_2$`} provides the electron acceptor at the cathode. Water conducts ions between
                anode and cathode and participates in O{`$_2$`} reduction. Remove either and the
                circuit breaks.
              </p>
            </details>
          </div>
          <p>
            <strong>Corrosion</strong> is the electrochemical oxidation of a metal in a wet
            environment.
          </p>
          <ul className="lrn-list">
            <li>
              Anode: {`$\\text{Fe}(s) \\to \\text{Fe}^{2+}(aq) + 2e^-$`};{' '}
              {`$E^\\circ = -0.44\\text{ V}$`}
            </li>
            <li>
              Cathode: {`$\\text{O}_2(g) + 2\\text{H}_2\\text{O}(l) + 4e^- \\to 4\\text{OH}^-(aq)$`}
              ; {`$E \\approx +0.82\\text{ V}$`} at pH 7
            </li>
          </ul>
          <p className="lrn-eq">{`$$E^\\circ_\\text{cell} = 0.82 - (-0.44) = +1.26\\text{ V} > 0$$`}</p>
          <CorrosionCellViz />
          <p>
            The reaction is highly spontaneous. Fe{`$^{2+}$`} moves, meets OH{`$^-$`}, and
            precipitates as Fe(OH){`$_2$`}, which oxidises further to Fe(OH){`$_3$`}, then
            dehydrates to rust (Fe{`$_2$`}O{`$_3$`}·xH{`$_2$`}O).
          </p>
        </>,

        <>
          <div className="lrn-header">
            <h2>Corrosion Protection</h2>
          </div>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              A zinc coating on iron (galvanised steel) protects the iron even after the zinc is
              scratched. Why?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                {`$E^\\circ(\\text{Zn}^{2+}/\\text{Zn}) = -0.76\\text{ V}$`} is more negative than{' '}
                {`$E^\\circ(\\text{Fe}^{2+}/\\text{Fe}) = -0.44\\text{ V}$`}. Zinc is more easily
                oxidised. After scratching, zinc remains the anode and iron the cathode, iron is
                protected.
              </p>
            </details>
          </div>
          <p>
            <strong>Galvanising</strong> applies a zinc layer to steel. Zinc serves two purposes:
          </p>
          <ol className="lrn-list">
            <li>
              <strong>Physical barrier:</strong> prevents contact of iron with air and water.
            </li>
            <li>
              <strong>Sacrificial protection:</strong> even when scratched, Zn corrodes
              preferentially. Zinc is the anode; iron is protected as the cathode.
            </li>
          </ol>
          <p>
            <strong>Cathodic protection</strong> connects the iron as the cathode by attaching a
            more active metal (Mg, Zn) as a sacrificial anode. Electrons flow from the sacrificial
            anode to iron, keeping iron at a potential where it cannot oxidise.
          </p>
          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Galvanising</span>
              <p>
                Physical coating plus sacrificial protection. Zinc at{' '}
                {`$E^\\circ = -0.76\\text{ V}$`}
                corrodes before iron.
              </p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Cathodic Protection</span>
              <p>
                Remotely connected sacrificial anodes (Mg or Zn blocks) for large buried or
                underwater structures.
              </p>
            </div>
          </div>
          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>Why does tin plating not protect iron when scratched?</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                {`$E^\\circ(\\text{Sn}^{2+}/\\text{Sn}) = -0.14\\text{ V}$`} is more positive than{' '}
                {`$E^\\circ(\\text{Fe}^{2+}/\\text{Fe}) = -0.44\\text{ V}$`}. Tin is less active.
                When scratched, tin becomes the cathode and iron becomes the anode, iron corrodes
                faster than without tin.
              </p>
            </details>
          </div>
        </>,

        <>
          <div className="lrn-header">
            <h2>Practical Cells (Batteries)</h2>
          </div>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              A lead-acid car battery delivers 12 V and can be recharged. What property
              distinguishes a rechargeable cell from a non-rechargeable one?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                A rechargeable (secondary) cell can have its reaction reversed by applying an
                external current, restoring the reactants. A primary cell cannot.
              </p>
            </details>
          </div>
          <p>
            A <strong>primary cell</strong> is not rechargeable. A <strong>secondary cell</strong>{' '}
            can be recharged: applying an external current reverses the cell reaction.
          </p>
          <table className="lrn-table">
            <thead>
              <tr>
                <th>Cell</th>
                <th>{`$E$`} / V</th>
                <th>Type</th>
                <th>Notes</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Dry cell (Leclanché)</td>
                <td>1.5</td>
                <td>Primary</td>
                <td>
                  Zn anode, MnO{`$_2$`}/NH{`$_4$`}Cl
                </td>
              </tr>
              <tr>
                <td>Alkaline</td>
                <td>1.5</td>
                <td>Primary</td>
                <td>Zn anode, MnO{`$_2$`}, KOH</td>
              </tr>
              <tr>
                <td>Silver</td>
                <td>1.6</td>
                <td>Primary</td>
                <td>Zn anode, Ag{`$_2$`}O cathode</td>
              </tr>
              <tr>
                <td>Lead-acid</td>
                <td>2 per cell</td>
                <td>Secondary</td>
                <td>Pb anode, PbO{`$_2$`} cathode; 6 cells = 12 V</td>
              </tr>
              <tr>
                <td>Nicad</td>
                <td>1.25</td>
                <td>Secondary</td>
                <td>Ni(OH){`$_2$`}/Cd</td>
              </tr>
              <tr>
                <td>NiMH</td>
                <td>1.2</td>
                <td>Secondary</td>
                <td>Hydrogen-absorbing alloy</td>
              </tr>
              <tr>
                <td>Sodium-sulfur</td>
                <td>2.2</td>
                <td>Secondary</td>
                <td>High-temperature, Na/S</td>
              </tr>
            </tbody>
          </table>
          <p>
            A <strong>fuel cell</strong> converts chemical energy continuously as long as fuel and
            oxidant are supplied. The hydrogen-oxygen fuel cell:
          </p>
          <ul className="lrn-list">
            <li>Anode: {`$\\text{H}_2(g) \\to 2\\text{H}^+(aq) + 2e^-$`}</li>
            <li>
              Cathode: {`$\\text{O}_2(g) + 4\\text{H}^+(aq) + 4e^- \\to 2\\text{H}_2\\text{O}(l)$`}
            </li>
          </ul>
        </>,

        <>
          <div className="lrn-header">
            <h2>Electrolysis, Contrast with Galvanic Cells</h2>
          </div>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              A galvanic cell drives reactions spontaneously. What must you do to run the reverse
              reaction?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                Supply external electrical energy greater than the thermodynamic minimum. Force
                electrons in the reverse direction with an external power supply.
              </p>
            </details>
          </div>
          <p>
            An <strong>electrolytic cell</strong> forces a non-spontaneous reaction by supplying
            external electrical energy. It is the reverse of a galvanic cell.
          </p>
          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Galvanic Cell</span>
              <p>
                {`$\\Delta G < 0$`}, {`$E_\\text{cell} > 0$`}. The reaction is spontaneous. The cell
                releases energy and converts chemical energy into electrical energy.
              </p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Electrolytic Cell</span>
              <p>
                {`$\\Delta G > 0$`}. The reaction is non-spontaneous. An external power supply
                drives it, so the cell consumes electrical energy to make chemical change.
              </p>
            </div>
          </div>
          <p>
            In both cell types the anode is oxidation and the cathode is reduction. But the +/-
            terminal labels reverse in an electrolytic cell, because the external power supply now
            forces the current direction.
          </p>
        </>
      ]
    },
    practice: [
      {
        q: `A zinc rod sits in CuSO₄ solution. After an hour, the zinc rod loses mass and copper metal forms on it. Which species is oxidised and which is reduced?`,
        a: `Zinc (Zn) is oxidised: it loses 2 electrons and becomes Zn²⁺. Cu²⁺ is reduced: it gains 2 electrons and becomes Cu(s). Oxidation is loss of electrons (OIL); reduction is gain of electrons (RIG). The zinc rod loses mass because Zn atoms dissolve into solution.`
      },
      {
        q: `Write the two half-reactions for the Daniell cell and identify which is the anode and which is the cathode.`,
        a: `Anode (oxidation): $\\text{Zn}(s) \\to \\text{Zn}^{2+}(aq) + 2e^-$. Cathode (reduction): $\\text{Cu}^{2+}(aq) + 2e^- \\to \\text{Cu}(s)$. The anode is where oxidation occurs; electrons leave from it. The cathode is where reduction occurs; electrons arrive. In a galvanic cell, the anode is negative and the cathode is positive.`
      },
      {
        q: `What is the oxidation state of Mn in $\\text{MnO}_4^-$?`,
        a: `The oxidation state of Mn is +7. Oxygen is -2, so 4 oxygen atoms contribute $4 \\times (-2) = -8$. The ion has a charge of -1, so: $x + (-8) = -1 \\Rightarrow x = +7$. This is why permanganate is a powerful oxidising agent: Mn at +7 can accept up to 5 electrons.`
      },
      {
        q: `Balance the following redox equation in acidic solution: $\\text{MnO}_4^-(aq) + \\text{H}_2\\text{C}_2\\text{O}_4(aq) \\to \\text{Mn}^{2+}(aq) + \\text{CO}_2(g)$. How many electrons transfer?`,
        a: `$2\\text{MnO}_4^-(aq) + 5\\text{H}_2\\text{C}_2\\text{O}_4(aq) + 6\\text{H}^+(aq) \\to 2\\text{Mn}^{2+}(aq) + 10\\text{CO}_2(g) + 8\\text{H}_2\\text{O}(l)$. The reduction half-reaction transfers 5 electrons (Mn +7 to +2); the oxidation transfers 2 electrons per molecule (C +3 to +4, 2 carbons). LCM = 10, so multiply reduction by 2 and oxidation by 5. Total electrons transferred: $n = 10$.`
      },
      {
        q: `Explain each step of the half-reaction method for balancing redox equations in acid.`,
        a: `Step 1, split into two half-reactions, one for oxidation and one for reduction. Step 2, balance all atoms except O and H by inspection. Step 3, balance O by adding H₂O to the O-deficient side. Step 4, balance H by adding H⁺ to the H-deficient side. Step 5, balance charge by adding electrons to the more-positive side. Step 6, multiply each half-reaction so the electrons cancel. Step 7, add and simplify. Each step is necessary because the method tracks atoms, charge, and electron count separately before combining.`
      },
      {
        q: `Balance $\\text{MnO}_4^-(aq) + \\text{Br}^-(aq) \\to \\text{MnO}_2(s) + \\text{BrO}_3^-(aq)$ in basic solution. How many electrons transfer?`,
        a: `$2\\text{MnO}_4^-(aq) + \\text{Br}^-(aq) + \\text{H}_2\\text{O}(l) \\to 2\\text{MnO}_2(s) + \\text{BrO}_3^-(aq) + 2\\text{OH}^-(aq)$. Reduction (Mn +7 to +4) transfers 3 electrons; multiply by 2 to give 6. Oxidation (Br -1 to +5) transfers 6 electrons. Balance in acid first, then replace each H⁺ with H₂O/OH⁻. Total electrons: $n = 6$.`
      },
      {
        q: `Why can't you accumulate free electrons in a redox reaction in solution?`,
        a: `Electrons cannot exist free in an aqueous solution. They carry charge, and any net charge separation in a conducting medium instantly attracts countercharge. In practice, any electron released by one species must be immediately accepted by another. This is why oxidation and reduction always occur simultaneously, and why half-reactions are conceptual tools, not physical reality.`
      },
      {
        q: `A galvanic cell has $E_\\text{cell} = +0.80\\text{ V}$ and $n = 2$. Calculate $\\Delta G$.`,
        a: `$\\Delta G = -nFE_\\text{cell} = -(2)(9.6485 \\times 10^4\\text{ C mol}^{-1})(0.80\\text{ V}) = -154\\text{ kJ mol}^{-1}$. The negative sign confirms the reaction is spontaneous. A positive cell potential always gives a negative Gibbs energy change.`
      },
      {
        q: `For the Daniell cell, $E_\\text{cell} = 1.04\\text{ V}$ and $n = 2$. Calculate $\\Delta G$.`,
        a: `$\\Delta G = -nFE = -(2)(96485)(1.04) = -201\\text{ kJ mol}^{-1}$. This large negative value confirms the reaction is highly spontaneous. Every 96 485 C (one Faraday) of charge moved through 1 V releases 96.5 kJ per mole of electrons.`
      },
      {
        q: `The Daniell cell has $E^\\circ_\\text{cell} = +1.10\\text{ V}$ and $n = 2$. Calculate $K$ and $\\Delta G^\\circ$.`,
        a: `$\\ln K = \\frac{nE^\\circ}{0.025693\\text{ V}} = \\frac{2 \\times 1.10}{0.025693} = 85.6$; $K = e^{85.6} = 1.45 \\times 10^{37}$. The equilibrium strongly favours products. $\\Delta G^\\circ = -nFE^\\circ = -(2)(96485)(1.10) = -212\\text{ kJ mol}^{-1}$. Large positive $E^\\circ$ gives large negative $\\Delta G^\\circ$ and enormous $K$.`
      },
      {
        q: `Why is $E^\\circ_\\text{cell}$ an intensive property, even though $\\Delta G^\\circ$ is extensive?`,
        a: `$E^\\circ_\\text{cell}$ is a potential difference, a property per unit charge, like voltage across a battery. It does not depend on how much material reacts. Doubling the cell reaction doubles $n$ and doubles $\\Delta G^\\circ = -nFE^\\circ_\\text{cell}$, but the ratio $\\Delta G^\\circ/(nF)$ stays constant. So $E^\\circ_\\text{cell}$ is the same whether you write the equation for 1 mol or 10 mol.`
      },
      {
        q: `Derive the Nernst equation from $\\Delta G = \\Delta G^\\circ + RT\\ln Q$.`,
        a: `Start: $\\Delta G = \\Delta G^\\circ + RT\\ln Q$. Substitute $\\Delta G = -nFE_\\text{cell}$ and $\\Delta G^\\circ = -nFE^\\circ_\\text{cell}$: $-nFE_\\text{cell} = -nFE^\\circ_\\text{cell} + RT\\ln Q$. Divide both sides by $-nF$: $E_\\text{cell} = E^\\circ_\\text{cell} - \\frac{RT}{nF}\\ln Q$. At 298 K, $RT/F = 0.025693\\text{ V}$, giving $E_\\text{cell} = E^\\circ_\\text{cell} - \\frac{0.025693}{n}\\ln Q$ or $E^\\circ_\\text{cell} - \\frac{0.05917}{n}\\log Q$.`
      },
      {
        q: `The Daniell cell has $[\\text{Zn}^{2+}] = 0.10\\text{ mol L}^{-1}$ and $[\\text{Cu}^{2+}] = 0.0010\\text{ mol L}^{-1}$. Calculate $E_\\text{cell}$, given $E^\\circ_\\text{cell} = +1.10\\text{ V}$.`,
        a: `$Q = [\\text{Zn}^{2+}]/[\\text{Cu}^{2+}] = 0.10/0.0010 = 100$. $E_\\text{cell} = 1.10 - \\frac{0.05917}{2}\\log(100) = 1.10 - \\frac{0.05917}{2}(2) = 1.10 - 0.05917 = +1.04\\text{ V}$. The potential decreased from the standard value because $Q > 1$.`
      },
      {
        q: `A cell has $E_\\text{cell} = +0.42\\text{ V}$ and the right compartment is $[\\text{Ag}^+] = 1.00\\text{ mol L}^{-1}$. Both electrodes are Ag/Ag⁺. Find $[\\text{Ag}^+]$ in the left compartment.`,
        a: `For a concentration cell ($E^\\circ_\\text{cell} = 0$, $n = 1$): $E = -\\frac{0.05917}{1}\\log[\\text{Ag}^+]_L$ (since $[\\text{Ag}^+]_R = 1$). Solve: $0.42 = -0.05917\\log[\\text{Ag}^+]_L$; $\\log[\\text{Ag}^+]_L = -7.10$; $[\\text{Ag}^+]_L = 8.0 \\times 10^{-8}\\text{ mol L}^{-1}$.`
      },
      {
        q: `What is the equilibrium constant for $\\text{AgCl}(s) \\to \\text{Ag}^+(aq) + \\text{Cl}^-(aq)$ using $E^\\circ(\\text{Ag}^+/\\text{Ag}) = +0.80\\text{ V}$ and $E^\\circ(\\text{AgCl}/\\text{Ag},\\text{Cl}^-) = +0.22\\text{ V}$?`,
        a: `Cell: Ag|Ag⁺ (anode) and AgCl|Ag,Cl⁻ (cathode). $E^\\circ_\\text{cell} = 0.22 - 0.80 = -0.58\\text{ V}$. $\\ln K_\\text{sp} = \\frac{1 \\times (-0.58)}{0.025693} = -22.6$; $K_\\text{sp} = e^{-22.6} = 1.6 \\times 10^{-10}$. The negative $E^\\circ$ signals a non-spontaneous dissolution (very small solubility).`
      },
      {
        q: `You know $E^\\circ(\\text{Cu}^{2+}/\\text{Cu}) = +0.340\\text{ V}$ and $E^\\circ(\\text{Cu}^+/\\text{Cu}) = +0.522\\text{ V}$. Find $E^\\circ(\\text{Cu}^{2+}/\\text{Cu}^+)$.`,
        a: `You cannot subtract $E^\\circ$ values directly when electron counts differ. Use $\\nu_c E^\\circ(c) = \\nu_a E^\\circ(a) - \\nu_b E^\\circ(b)$: $(1)E^\\circ(c) = 2(+0.340) - 1(+0.522) = 0.680 - 0.522 = +0.158\\text{ V}$. The key is to weight by electron count because $E^\\circ$ is a per-electron potential.`
      },
      {
        q: `Determine $E^\\circ(\\text{Fe}^{3+}/\\text{Fe})$ from the Latimer diagram: $\\text{Fe}^{3+} \\xrightarrow{+0.77} \\text{Fe}^{2+} \\xrightarrow{-0.44} \\text{Fe}$.`,
        a: `Use electron-count weighting: $E^\\circ(c) = [1(+0.77) + 2(-0.44)] / 3 = [0.77 - 0.88] / 3 = -0.11/3 = -0.037\\text{ V}$. The negative sign shows the overall Fe³⁺/Fe reduction is mildly unfavourable; the strongly negative Fe²⁺/Fe step dominates.`
      },
      {
        q: `Predict whether Cu⁺ disproportionates in water. $E^\\circ(\\text{Cu}^{2+}/\\text{Cu}^+) = +0.15\\text{ V}$; $E^\\circ(\\text{Cu}^+/\\text{Cu}) = +0.52\\text{ V}$.`,
        a: `Reduction: $\\text{Cu}^+(aq) + e^- \\to \\text{Cu}(s)$; $E^\\circ = +0.52\\text{ V}$ (cathode). Oxidation: $\\text{Cu}^+(aq) \\to \\text{Cu}^{2+}(aq) + e^-$; $E^\\circ_\\text{anode} = +0.15\\text{ V}$. $E^\\circ_\\text{cell} = 0.52 - 0.15 = +0.37\\text{ V} > 0$. Spontaneous disproportionation. $K = e^{(0.37/0.025693)} = 1.81 \\times 10^6$.`
      },
      {
        q: `Explain why the glass pH electrode produces a voltage proportional to pH.`,
        a: `The glass membrane allows H⁺ ions to establish a potential difference between the inner reference solution (fixed [H⁺]) and the test solution. This potential obeys the Nernst equation: $E \\propto \\log[\\text{H}^+] = -\\text{pH}$. So $E_\\text{cell} = E'_\\text{cell} + (0.0592\\text{ V}) \\times \\text{pH}$, where the 59.2 mV/pH slope comes from $RT\\ln10/F = 0.05917\\text{ V}$ at 298 K.`
      },
      {
        q: `An Ag electrode is dipped in AgNO₃. Adding NaCl precipitates AgCl ($K_\\text{sp} = 1.6 \\times 10^{-10}$). Does the electrode potential increase or decrease? By how much if [Cl⁻] = 1 M?`,
        a: `Adding Cl⁻ precipitates Ag⁺ as AgCl, lowering [Ag⁺]. At [Cl⁻] = 1 M: $[\\text{Ag}^+] = K_\\text{sp} = 1.6 \\times 10^{-10}\\text{ M}$. By Nernst: $E = 0.80 - 0.05917\\log(1/(1.6 \\times 10^{-10})) = 0.80 - 0.58 = +0.22\\text{ V}$. This is exactly $E^\\circ(\\text{AgCl}/\\text{Ag},\\text{Cl}^-)$. The potential dropped by 0.58 V.`
      },
      {
        q: `Using the electrochemical series, predict whether copper metal will dissolve in 1 M HCl.`,
        a: `$E^\\circ(\\text{Cu}^{2+}/\\text{Cu}) = +0.34\\text{ V}$; $E^\\circ(\\text{H}^+/\\text{H}_2) = 0\\text{ V}$. For Cu to dissolve, it must be the anode: $E^\\circ_\\text{cell} = 0 - 0.34 = -0.34\\text{ V} < 0$. The reaction is non-spontaneous. Copper does not dissolve in HCl. It will dissolve in oxidising acids like HNO₃ because $E^\\circ(\\text{NO}_3^-/\\text{NO}) = +0.96\\text{ V} > E^\\circ(\\text{Cu}^{2+}/\\text{Cu})$.`
      },
      {
        q: `The MnO₄⁻/Mn²⁺ vs Cr₂O₇²⁻/Cr³⁺ cell: $E^\\circ(\\text{MnO}_4^-/\\text{Mn}^{2+}) = +1.51\\text{ V}$; $E^\\circ(\\text{Cr}_2\\text{O}_7^{2-}/\\text{Cr}^{3+}) = +1.33\\text{ V}$. Which is the cathode? What is $E^\\circ_\\text{cell}$?`,
        a: `The couple with the higher $E^\\circ$ is always the cathode. $\\text{MnO}_4^-/\\text{Mn}^{2+}$ is the cathode; $\\text{Cr}_2\\text{O}_7^{2-}/\\text{Cr}^{3+}$ is the anode. $E^\\circ_\\text{cell} = 1.51 - 1.33 = +0.18\\text{ V}$. The positive value confirms the reaction is spontaneous.`
      },
      {
        q: `What does a "dead battery" mean in terms of $Q$, $K$, and $E_\\text{cell}$?`,
        a: `A dead battery is a galvanic cell at equilibrium: $Q = K$ (the reaction quotient has reached the equilibrium constant). At this point $\\Delta G = 0$ and $E_\\text{cell} = 0$. The Nernst equation at equilibrium gives $E^\\circ_\\text{cell} = (RT/nF)\\ln K$. This is why cells with large $E^\\circ_\\text{cell}$ have large $K$, they run until concentrations change enormously.`
      },
      {
        q: `Why does raising pH decrease the reduction potential of the $\\text{MnO}_4^-/\\text{Mn}^{2+}$ couple?`,
        a: `The half-reaction $\\text{MnO}_4^- + 8\\text{H}^+ + 5e^- \\to \\text{Mn}^{2+} + 4\\text{H}_2\\text{O}$ has H⁺ as a reactant. By Nernst: increasing pH (decreasing [H⁺]) decreases [H⁺]⁸ in the reaction quotient denominator, making Q larger, which subtracts more from $E^\\circ$. At pH 7 relative to pH 0, $E$ drops by $\\frac{8 \\times 0.05917}{5} \\times 7 \\approx 0.66\\text{ V}$.`
      },
      {
        q: `What is the Nernst equation applied to the Zn²⁺/Zn half-cell at $[\\text{Zn}^{2+}] = 0.1\\text{ mol dm}^{-3}$?`,
        a: `For $\\text{Zn}^{2+} + 2e^- \\to \\text{Zn}$; $E^\\circ = -0.76\\text{ V}$; $n = 2$: $E = -0.76 - \\frac{0.05917}{2}\\log(1/0.1) = -0.76 - \\frac{0.05917}{2}(1) = -0.76 - 0.0296 = -0.79\\text{ V}$. Lowering [Zn²⁺] from 1 M to 0.1 M makes the electrode potential more negative by ~30 mV.`
      },
      {
        q: `Oxidation of Cr²⁺ in acid gives $\\Delta G^\\circ = -79.1\\text{ kJ mol}^{-1}$. What is $E^\\circ_\\text{cell}$? ($n = 2$)`,
        a: `$E^\\circ_\\text{cell} = \\frac{-\\Delta G^\\circ}{nF} = \\frac{79100}{2 \\times 96485} = +0.410\\text{ V}$. This corresponds to $E^\\circ(\\text{H}^+/\\text{H}_2) - E^\\circ(\\text{Cr}^{3+}/\\text{Cr}^{2+}) = 0 - (-0.41) = +0.41\\text{ V}$, consistent with Cr²⁺ being spontaneously oxidised to Cr³⁺ by H⁺.`
      },
      {
        q: `Predict: You place a piece of iron in CuSO₄ solution. $E^\\circ(\\text{Fe}^{2+}/\\text{Fe}) = -0.44\\text{ V}$; $E^\\circ(\\text{Cu}^{2+}/\\text{Cu}) = +0.34\\text{ V}$. What will happen?`,
        a: `Iron has the lower $E^\\circ$ so it is the anode (oxidised). Copper has the higher $E^\\circ$ and is reduced at the cathode. $E^\\circ_\\text{cell} = 0.34 - (-0.44) = +0.78\\text{ V} > 0$: spontaneous. Iron will dissolve (Fe → Fe²⁺ + 2e⁻) and copper will plate out (Cu²⁺ + 2e⁻ → Cu). The iron piece gains a copper coating and loses mass.`
      },
      {
        q: `Why does zinc coating protect steel even after the coating is scratched, but tin coating accelerates rust after scratching?`,
        a: `Zinc: $E^\\circ(\\text{Zn}^{2+}/\\text{Zn}) = -0.76\\text{ V} < E^\\circ(\\text{Fe}^{2+}/\\text{Fe}) = -0.44\\text{ V}$. Zinc is more easily oxidised. After scratching, Zn is the anode and Fe is the cathode, iron is protected. Tin: $E^\\circ(\\text{Sn}^{2+}/\\text{Sn}) = -0.14\\text{ V} > E^\\circ(\\text{Fe}^{2+}/\\text{Fe})$. After scratching, Fe becomes the anode, iron corrodes faster.`
      },
      {
        q: `How does the standard hydrogen electrode (SHE) define the zero of the electrochemical scale?`,
        a: `The SHE is assigned $E^\\circ = 0\\text{ V}$ by convention at all temperatures. The half-reaction is $2\\text{H}^+(aq, a = 1) + 2e^- \\to \\text{H}_2(g, 1\\text{ bar})$ with a Pt electrode. Every other $E^\\circ$ is measured relative to this reference: place the SHE as the anode and the unknown as cathode; the measured $E_\\text{cell}$ is $E^\\circ(\\text{unknown})$. A positive $E^\\circ$ means the couple is a better electron acceptor than H⁺.`
      },
      {
        q: `A Latimer diagram for iron shows: $\\text{Fe}^{3+} \\xrightarrow{+0.77} \\text{Fe}^{2+} \\xrightarrow{-0.44} \\text{Fe}$. Is Fe²⁺ stable or will it disproportionate?`,
        a: `For disproportionation of Fe²⁺: the $E^\\circ$ to the right (Fe²⁺/Fe = -0.44 V) must be more positive than the $E^\\circ$ to the left (Fe³⁺/Fe²⁺ = +0.77 V). Here -0.44 V < +0.77 V, so Fe²⁺ does NOT disproportionate spontaneously. Fe²⁺ is a stable species in acid.`
      },
      {
        q: `Corrosion of iron requires both O₂ and H₂O. Explain why removing either stops rust.`,
        a: `Two half-reactions are needed. At the anode: $\\text{Fe}(s) \\to \\text{Fe}^{2+}(aq) + 2e^-$. At the cathode: $\\text{O}_2(g) + 2\\text{H}_2\\text{O}(l) + 4e^- \\to 4\\text{OH}^-(aq)$. Without O₂ there is no cathode reaction; electrons from Fe cannot be accepted. Without H₂O there is no ion conductor between anode and cathode (circuit is open) and H₂O is consumed in the O₂ half-reaction. Either absence breaks the electrochemical circuit.`
      },
      {
        q: `How do you identify that a species disproportionates from a Latimer diagram?`,
        a: `A species X in the middle of a Latimer diagram disproportionates if the $E^\\circ$ to its right (X/Red couple) is more positive than the $E^\\circ$ to its left (Ox/X couple). In that case the cell (X as both anode and cathode) has a positive $E^\\circ_\\text{cell}$ and the reaction is spontaneous. Cu⁺ is the textbook example: $E^\\circ(\\text{Cu}^+/\\text{Cu}) = +0.52\\text{ V}$ > $E^\\circ(\\text{Cu}^{2+}/\\text{Cu}^+) = +0.15\\text{ V}$.`
      },
      {
        q: `You measure $E_\\text{cell}$ for a concentration cell of Ag⁺/Ag with both compartments. Why is $E^\\circ_\\text{cell} = 0$ for a concentration cell?`,
        a: `A concentration cell uses the same half-reaction at both electrodes. The standard electrode potentials are equal. $E^\\circ_\\text{cell} = E^\\circ(\\text{cathode}) - E^\\circ(\\text{anode}) = E^\\circ - E^\\circ = 0$. The driving force comes entirely from the concentration difference: $E_\\text{cell} = -(0.05917/n)\\log([\\text{dilute}]/[\\text{concentrated}])$. Current flows until concentrations equalise.`
      },
      {
        q: `Predict: A student tests whether Mg metal will dissolve in dilute HCl. $E^\\circ(\\text{Mg}^{2+}/\\text{Mg}) = -2.36\\text{ V}$; $E^\\circ(\\text{H}^+/\\text{H}_2) = 0\\text{ V}$. What will happen?`,
        a: `Mg has the lower $E^\\circ$ and is oxidised (anode). H⁺ is reduced (cathode). $E^\\circ_\\text{cell} = 0 - (-2.36) = +2.36\\text{ V} > 0$. The reaction is highly spontaneous. Mg will dissolve vigorously, producing Mg²⁺ ions and H₂ gas. The enormous $K$ means the reaction runs almost all the way to completion.`
      }
    ],
    reference: {
      category: 'Quick Reference',
      title: 'Redox and Electrochemistry',
      sections: [
        <>
          <h2>Definitions</h2>
          <div className="lrn-definition">
            <span className="lrn-definition-term">Oxidation</span>
            <div className="lrn-definition-desc">
              <p>
                Loss of electrons; oxidation state increases. The species that loses electrons in an
                electron-transfer reaction is oxidised.
              </p>
            </div>
          </div>
          <div className="lrn-definition">
            <span className="lrn-definition-term">Reduction</span>
            <div className="lrn-definition-desc">
              <p>
                Gain of electrons; oxidation state decreases. The species that gains electrons in an
                electron-transfer reaction is reduced.
              </p>
            </div>
          </div>
          <div className="lrn-definition">
            <span className="lrn-definition-term">Faraday's Constant</span>
            <div className="lrn-definition-desc">
              <p>
                {`$F = eN_A = 9.6485 \\times 10^4\\text{ C mol}^{-1}$`}. It converts between moles
                of electrons and charge in all electrochemical calculations.
              </p>
            </div>
          </div>
        </>,

        <>
          <h2>Oxidation States, Assignment Rules</h2>
          <table className="lrn-table">
            <thead>
              <tr>
                <th>Species</th>
                <th>Oxidation state</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Pure element</td>
                <td>0</td>
              </tr>
              <tr>
                <td>Monatomic ion</td>
                <td>= ionic charge</td>
              </tr>
              <tr>
                <td>F in compounds</td>
                <td>-1 (always)</td>
              </tr>
              <tr>
                <td>O in compounds</td>
                <td>-2 (-1 in peroxides)</td>
              </tr>
              <tr>
                <td>H bonded to non-metal</td>
                <td>+1</td>
              </tr>
              <tr>
                <td>H bonded to metal</td>
                <td>-1</td>
              </tr>
              <tr>
                <td>Neutral compound sum</td>
                <td>0</td>
              </tr>
              <tr>
                <td>Polyatomic ion sum</td>
                <td>= ion charge</td>
              </tr>
            </tbody>
          </table>
        </>,

        <>
          <h2>Cell Potential and Thermodynamics</h2>
          <div className="lrn-definition">
            <span className="lrn-definition-term">{`$\\Delta G = -nFE_\\text{cell}$`}</span>
            <div className="lrn-definition-desc">
              <p>
                Convert between measured cell voltage and thermodynamic spontaneity. Core equation
                linking electrochemistry and thermodynamics.
              </p>
            </div>
          </div>
          <div className="lrn-definition">
            <span className="lrn-definition-term">{`$\\Delta G^\\circ = -nFE^\\circ_\\text{cell}$`}</span>
            <div className="lrn-definition-desc">
              <p>
                Calculate {`$\\Delta G^\\circ$`} from listed standard potentials, or vice versa.
              </p>
            </div>
          </div>
          <div className="lrn-definition">
            <span className="lrn-definition-term">{`$E^\\circ_\\text{cell} = E^\\circ(\\text{cathode}) - E^\\circ(\\text{anode})$`}</span>
            <div className="lrn-definition-desc">
              <p>
                Calculate {`$E^\\circ_\\text{cell}$`} from two listed half-cell potentials. The
                cathode has the higher {`$E^\\circ$`}.
              </p>
            </div>
          </div>
        </>,

        <>
          <h2>Equilibrium Constants from {`$E^\\circ$`}</h2>
          <div className="lrn-definition">
            <span className="lrn-definition-term">{`$\\ln K = \\frac{nFE^\\circ_\\text{cell}}{RT}$`}</span>
            <div className="lrn-definition-desc">
              <p>
                Find {`$K$`} from {`$E^\\circ_\\text{cell}$`} or check spontaneity. General form;
                substitute {`$T$`} in kelvin.
              </p>
            </div>
          </div>
          <div className="lrn-definition">
            <span className="lrn-definition-term">
              {`$\\ln K = \\frac{nE^\\circ_\\text{cell}}{0.025693\\text{ V}}$`} at 298.15 K
            </span>
            <div className="lrn-definition-desc">
              <p>Fastest route to {`$K$`} at room temperature.</p>
            </div>
          </div>
          <div className="lrn-definition">
            <span className="lrn-definition-term">
              {`$\\log K = \\frac{nE^\\circ_\\text{cell}}{0.05917\\text{ V}}$`} at 298.15 K
            </span>
            <div className="lrn-definition-desc">
              <p>Use when base-10 arithmetic is simpler.</p>
            </div>
          </div>
        </>,

        <>
          <h2>The Nernst Equation</h2>
          <div className="lrn-definition">
            <span className="lrn-definition-term">{`$E_\\text{cell} = E^\\circ_\\text{cell} - \\frac{RT}{nF}\\ln Q$`}</span>
            <div className="lrn-definition-desc">
              <p>
                Correct {`$E^\\circ_\\text{cell}$`} for any non-standard concentrations or
                pressures.
              </p>
            </div>
          </div>
          <div className="lrn-definition">
            <span className="lrn-definition-term">
              {`$E_\\text{cell} = E^\\circ_\\text{cell} - \\frac{0.05917\\text{ V}}{n}\\log Q$`} at
              298 K
            </span>
            <div className="lrn-definition-desc">
              <p>Use when {`$Q$`} is expressed in powers of 10. Exact at 298.15 K.</p>
            </div>
          </div>
          <div className="lrn-definition">
            <span className="lrn-definition-term">{`$E = E^\\circ - \\frac{RT}{zF}\\ln\\frac{[\\text{Red}]}{[\\text{Ox}]}$`}</span>
            <div className="lrn-definition-desc">
              <p>
                Nernst for a single half-cell under non-standard conditions (pH dependence, complex
                formation).
              </p>
            </div>
          </div>
          <div className="lrn-definition">
            <span className="lrn-definition-term">{`$E_\\text{cell} = E'_\\text{cell} + (0.0592\\text{ V}) \\times \\text{pH}$`}</span>
            <div className="lrn-definition-desc">
              <p>pH electrode (Nernst form). Slope is 59.2 mV/pH at 298 K.</p>
            </div>
          </div>
        </>,

        <>
          <h2>Key Constants at 298 K</h2>
          <table className="lrn-table">
            <thead>
              <tr>
                <th>Constant</th>
                <th>Value</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{`$RT/F$`}</td>
                <td>{`$25.693\\text{ mV} = 0.025693\\text{ V}$`}</td>
              </tr>
              <tr>
                <td>{`$2RT/F$`}</td>
                <td>{`$51.39\\text{ mV}$`}</td>
              </tr>
              <tr>
                <td>{`$RT\\ln 10/F$`}</td>
                <td>{`$59.17\\text{ mV} = 0.05917\\text{ V}$`}</td>
              </tr>
              <tr>
                <td>{`$F$`}</td>
                <td>{`$9.6485 \\times 10^4\\text{ C mol}^{-1}$`}</td>
              </tr>
            </tbody>
          </table>
        </>,

        <>
          <h2>Corrosion and Protection</h2>
          <div className="lrn-definition">
            <span className="lrn-definition-term">Iron oxidation (corrosion, anode)</span>
            <div className="lrn-definition-desc">
              <p>{`$\\text{Fe}(s) \\to \\text{Fe}^{2+}(aq) + 2e^-; \\quad E^\\circ = -0.44\\text{ V}$`}</p>
            </div>
          </div>
          <div className="lrn-definition">
            <span className="lrn-definition-term">
              O{`$_2$`} reduction (corrosion, cathode, pH 7)
            </span>
            <div className="lrn-definition-desc">
              <p>
                {`$\\text{O}_2(g) + 2\\text{H}_2\\text{O}(l) + 4e^- \\to 4\\text{OH}^-(aq); \\quad E \\approx +0.82\\text{ V}$`}{' '}
                at pH 7
              </p>
            </div>
          </div>
          <table className="lrn-table">
            <thead>
              <tr>
                <th>Method</th>
                <th>Principle</th>
                <th>Active metal</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Galvanising</td>
                <td>Zn coating: physical barrier + sacrificial anode</td>
                <td>Zn ({`$E^\\circ = -0.76\\text{ V}$`})</td>
              </tr>
              <tr>
                <td>Cathodic protection</td>
                <td>Remote sacrificial anode connected to protected metal</td>
                <td>Mg or Zn</td>
              </tr>
              <tr>
                <td>Tin plating</td>
                <td>Physical barrier only; Sn is NOT sacrificial</td>
                <td>NOT protective after scratch</td>
              </tr>
            </tbody>
          </table>
        </>,

        <>
          <h2>Standard Reduction Potentials at 298 K</h2>
          <table className="lrn-table">
            <thead>
              <tr>
                <th>Couple</th>
                <th>Half-reaction</th>
                <th>{`$E^\\circ / \\text{V}$`}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{`$\\text{F}_2/\\text{F}^-$`}</td>
                <td>{`$\\text{F}_2 + 2e^- \\to 2\\text{F}^-$`}</td>
                <td>+2.87</td>
              </tr>
              <tr>
                <td>{`$\\text{Au}^+/\\text{Au}$`}</td>
                <td>{`$\\text{Au}^+ + e^- \\to \\text{Au}$`}</td>
                <td>+1.69</td>
              </tr>
              <tr>
                <td>{`$\\text{Ce}^{4+}/\\text{Ce}^{3+}$`}</td>
                <td>{`$\\text{Ce}^{4+} + e^- \\to \\text{Ce}^{3+}$`}</td>
                <td>+1.61</td>
              </tr>
              <tr>
                <td>{`$\\text{MnO}_4^-/\\text{Mn}^{2+}$`}</td>
                <td>{`$\\text{MnO}_4^- + 8\\text{H}^+ + 5e^- \\to \\text{Mn}^{2+} + 4\\text{H}_2\\text{O}$`}</td>
                <td>+1.51</td>
              </tr>
              <tr>
                <td>{`$\\text{Cl}_2/\\text{Cl}^-$`}</td>
                <td>{`$\\text{Cl}_2 + 2e^- \\to 2\\text{Cl}^-$`}</td>
                <td>+1.36</td>
              </tr>
              <tr>
                <td>{`$\\text{Cr}_2\\text{O}_7^{2-}/\\text{Cr}^{3+}$`}</td>
                <td>{`$\\text{Cr}_2\\text{O}_7^{2-} + 14\\text{H}^+ + 6e^- \\to 2\\text{Cr}^{3+} + 7\\text{H}_2\\text{O}$`}</td>
                <td>+1.33</td>
              </tr>
              <tr>
                <td>{`$\\text{O}_2/\\text{H}_2\\text{O}$`} (pH 0)</td>
                <td>{`$\\text{O}_2 + 4\\text{H}^+ + 4e^- \\to 2\\text{H}_2\\text{O}$`}</td>
                <td>+1.23</td>
              </tr>
              <tr>
                <td>{`$\\text{Br}_2/\\text{Br}^-$`}</td>
                <td>{`$\\text{Br}_2 + 2e^- \\to 2\\text{Br}^-$`}</td>
                <td>+1.09</td>
              </tr>
              <tr>
                <td>{`$\\text{NO}_3^-/\\text{NO}$`}</td>
                <td>{`$\\text{NO}_3^- + 4\\text{H}^+ + 3e^- \\to \\text{NO} + 2\\text{H}_2\\text{O}$`}</td>
                <td>+0.96</td>
              </tr>
              <tr>
                <td>{`$\\text{Ag}^+/\\text{Ag}$`}</td>
                <td>{`$\\text{Ag}^+ + e^- \\to \\text{Ag}$`}</td>
                <td>+0.80</td>
              </tr>
              <tr>
                <td>{`$\\text{Fe}^{3+}/\\text{Fe}^{2+}$`}</td>
                <td>{`$\\text{Fe}^{3+} + e^- \\to \\text{Fe}^{2+}$`}</td>
                <td>+0.77</td>
              </tr>
              <tr>
                <td>{`$\\text{I}_2/\\text{I}^-$`}</td>
                <td>{`$\\text{I}_2 + 2e^- \\to 2\\text{I}^-$`}</td>
                <td>+0.54</td>
              </tr>
              <tr>
                <td>{`$\\text{Cu}^+/\\text{Cu}$`}</td>
                <td>{`$\\text{Cu}^+ + e^- \\to \\text{Cu}$`}</td>
                <td>+0.52</td>
              </tr>
              <tr>
                <td>{`$\\text{O}_2/\\text{OH}^-$`} (pH 14)</td>
                <td>{`$\\text{O}_2 + 2\\text{H}_2\\text{O} + 4e^- \\to 4\\text{OH}^-$`}</td>
                <td>+0.40</td>
              </tr>
              <tr>
                <td>{`$\\text{Cu}^{2+}/\\text{Cu}$`}</td>
                <td>{`$\\text{Cu}^{2+} + 2e^- \\to \\text{Cu}$`}</td>
                <td>+0.34</td>
              </tr>
              <tr>
                <td>{`$\\text{Cu}^{2+}/\\text{Cu}^+$`}</td>
                <td>{`$\\text{Cu}^{2+} + e^- \\to \\text{Cu}^+$`}</td>
                <td>+0.158</td>
              </tr>
              <tr>
                <td>{`$\\text{AgCl}/\\text{Ag},\\text{Cl}^-$`}</td>
                <td>{`$\\text{AgCl} + e^- \\to \\text{Ag} + \\text{Cl}^-$`}</td>
                <td>+0.22</td>
              </tr>
              <tr>
                <td>{`$\\text{H}^+/\\text{H}_2$`}</td>
                <td>{`$2\\text{H}^+ + 2e^- \\to \\text{H}_2$`}</td>
                <td>0 (definition)</td>
              </tr>
              <tr>
                <td>{`$\\text{Fe}^{3+}/\\text{Fe}$`}</td>
                <td>{`$\\text{Fe}^{3+} + 3e^- \\to \\text{Fe}$`}</td>
                <td>-0.04</td>
              </tr>
              <tr>
                <td>{`$\\text{Pb}^{2+}/\\text{Pb}$`}</td>
                <td>{`$\\text{Pb}^{2+} + 2e^- \\to \\text{Pb}$`}</td>
                <td>-0.13</td>
              </tr>
              <tr>
                <td>{`$\\text{Sn}^{2+}/\\text{Sn}$`}</td>
                <td>{`$\\text{Sn}^{2+} + 2e^- \\to \\text{Sn}$`}</td>
                <td>-0.14</td>
              </tr>
              <tr>
                <td>{`$\\text{Cr}^{3+}/\\text{Cr}^{2+}$`}</td>
                <td>{`$\\text{Cr}^{3+} + e^- \\to \\text{Cr}^{2+}$`}</td>
                <td>-0.41</td>
              </tr>
              <tr>
                <td>{`$\\text{Fe}^{2+}/\\text{Fe}$`}</td>
                <td>{`$\\text{Fe}^{2+} + 2e^- \\to \\text{Fe}$`}</td>
                <td>-0.44</td>
              </tr>
              <tr>
                <td>{`$\\text{Zn}^{2+}/\\text{Zn}$`}</td>
                <td>{`$\\text{Zn}^{2+} + 2e^- \\to \\text{Zn}$`}</td>
                <td>-0.76</td>
              </tr>
              <tr>
                <td>{`$\\text{Al}^{3+}/\\text{Al}$`}</td>
                <td>{`$\\text{Al}^{3+} + 3e^- \\to \\text{Al}$`}</td>
                <td>-1.66</td>
              </tr>
              <tr>
                <td>{`$\\text{Mg}^{2+}/\\text{Mg}$`}</td>
                <td>{`$\\text{Mg}^{2+} + 2e^- \\to \\text{Mg}$`}</td>
                <td>-2.36</td>
              </tr>
              <tr>
                <td>{`$\\text{Na}^+/\\text{Na}$`}</td>
                <td>{`$\\text{Na}^+ + e^- \\to \\text{Na}$`}</td>
                <td>-2.71</td>
              </tr>
              <tr>
                <td>{`$\\text{K}^+/\\text{K}$`}</td>
                <td>{`$\\text{K}^+ + e^- \\to \\text{K}$`}</td>
                <td>-2.93</td>
              </tr>
              <tr>
                <td>{`$\\text{Li}^+/\\text{Li}$`}</td>
                <td>{`$\\text{Li}^+ + e^- \\to \\text{Li}$`}</td>
                <td>-3.05</td>
              </tr>
            </tbody>
          </table>
        </>,

        <>
          <h2>Electrochemical Series (Qualitative Order)</h2>
          <table className="lrn-table">
            <thead>
              <tr>
                <th>
                  Most reducing (lowest {`$E^\\circ$`}) to least reducing (highest {`$E^\\circ$`})
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  Li | K | Ca | Na | Mg | Al | Zn | Cr | Fe | Sn | Ni | H{`$_2$`} | Cu | Ag | Pt |
                  Au
                </td>
              </tr>
            </tbody>
          </table>
        </>,

        <>
          <h2>Reference Electrodes</h2>
          <table className="lrn-table">
            <thead>
              <tr>
                <th>Electrode</th>
                <th>Half-reaction</th>
                <th>{`$E^\\circ$`} / V</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Standard hydrogen electrode (SHE)</td>
                <td>{`$2\\text{H}^+(a=1) + 2e^- \\to \\text{H}_2(1\\text{ bar})$`}</td>
                <td>0 (definition)</td>
              </tr>
              <tr>
                <td>Silver/silver chloride</td>
                <td>{`$\\text{AgCl}(s) + e^- \\to \\text{Ag}(s) + \\text{Cl}^-(aq)$`}</td>
                <td>+0.222</td>
              </tr>
              <tr>
                <td>Calomel</td>
                <td>{`$\\frac{1}{2}\\text{Hg}_2\\text{Cl}_2 + e^- \\to \\text{Hg} + \\text{Cl}^-$`}</td>
                <td>+0.268</td>
              </tr>
            </tbody>
          </table>
        </>,

        <>
          <h2>Cell Notation Rules</h2>
          <table className="lrn-table">
            <thead>
              <tr>
                <th>Symbol</th>
                <th>Meaning</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{`$|$`} (single line)</td>
                <td>Phase boundary (solid/solution interface)</td>
              </tr>
              <tr>
                <td>{`$\\|$`} (double line)</td>
                <td>Salt bridge or eliminated liquid junction</td>
              </tr>
              <tr>
                <td>Anode (left)</td>
                <td>Oxidation half-reaction</td>
              </tr>
              <tr>
                <td>Cathode (right)</td>
                <td>Reduction half-reaction</td>
              </tr>
              <tr>
                <td>Pt</td>
                <td>Inert electrode (required when no metal electrode participates)</td>
              </tr>
            </tbody>
          </table>
        </>,

        <>
          <h2>Disproportionation</h2>
          <div className="lrn-definition">
            <span className="lrn-definition-term">Condition for disproportionation</span>
            <div className="lrn-definition-desc">
              <p>
                {`$E^\\circ(\\text{right couple}) > E^\\circ(\\text{left couple})$`} in a Latimer
                diagram. This flags an unstable oxidation state.
              </p>
            </div>
          </div>
          <div className="lrn-definition">
            <span className="lrn-definition-term">K for disproportionation of Cu{`$^+$`}</span>
            <div className="lrn-definition-desc">
              <p>
                {`$2\\text{Cu}^+(aq) \\to \\text{Cu}(s) + \\text{Cu}^{2+}(aq); \\quad K = 1.81 \\times 10^6$`}
                . {`$E^\\circ_\\text{cell} = +0.37\\text{ V}$`}, {`$n = 1$`}.
              </p>
            </div>
          </div>
        </>,

        <>
          <h2>Latimer Diagram Rule</h2>
          <div className="lrn-definition">
            <span className="lrn-definition-term">
              {`$E^\\circ(c) = \\frac{\\nu_a E^\\circ(a) + \\nu_b E^\\circ(b)}{\\nu_c}$`} (weighted
              average)
            </span>
            <div className="lrn-definition-desc">
              <p>
                Calculate {`$E^\\circ$`} for a couple that spans two or more steps in a Latimer
                diagram. Always weight by number of electrons, never average directly. Add a term
                when its step runs in the forward (reduction) direction; subtract it when that step
                must be reversed. So the same rule reads{' '}
                {`$\\nu_c E^\\circ(c) = \\nu_a E^\\circ(a) - \\nu_b E^\\circ(b)$`} when step (b) is
                reversed, exactly as in the Cu²⁺/Cu⁺ worked example.
              </p>
            </div>
          </div>
        </>,

        <>
          <h2>O{`$_2$`} Reduction, pH Dependence</h2>
          <table className="lrn-table">
            <thead>
              <tr>
                <th>pH</th>
                <th>Half-reaction</th>
                <th>
                  {`$E^\\circ$`} or {`$E$`}
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>0</td>
                <td>{`$\\text{O}_2 + 4\\text{H}^+ + 4e^- \\to 2\\text{H}_2\\text{O}$`}</td>
                <td>+1.23 V</td>
              </tr>
              <tr>
                <td>7</td>
                <td>(same half-reaction, Nernst corrected)</td>
                <td>+0.82 V</td>
              </tr>
              <tr>
                <td>14</td>
                <td>{`$\\text{O}_2 + 2\\text{H}_2\\text{O} + 4e^- \\to 4\\text{OH}^-$`}</td>
                <td>+0.40 V</td>
              </tr>
            </tbody>
          </table>
        </>,

        <>
          <h2>Practical Batteries</h2>
          <table className="lrn-table">
            <thead>
              <tr>
                <th>Cell</th>
                <th>{`$E$`} / V</th>
                <th>Type</th>
                <th>Electrodes</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Dry cell (Leclanché)</td>
                <td>1.5</td>
                <td>Primary</td>
                <td>
                  Zn anode, MnO{`$_2$`} cathode, NH{`$_4$`}Cl electrolyte
                </td>
              </tr>
              <tr>
                <td>Alkaline</td>
                <td>1.5</td>
                <td>Primary</td>
                <td>Zn anode, MnO{`$_2$`} cathode, KOH electrolyte</td>
              </tr>
              <tr>
                <td>Silver</td>
                <td>1.6</td>
                <td>Primary</td>
                <td>Zn anode, Ag{`$_2$`}O cathode</td>
              </tr>
              <tr>
                <td>Lead-acid</td>
                <td>2</td>
                <td>Secondary</td>
                <td>
                  Pb anode, PbO{`$_2$`} cathode, H{`$_2$`}SO{`$_4$`} (6 cells = 12 V)
                </td>
              </tr>
              <tr>
                <td>Nicad</td>
                <td>1.25</td>
                <td>Secondary</td>
                <td>Cd anode, Ni(OH){`$_2$`} cathode</td>
              </tr>
              <tr>
                <td>NiMH</td>
                <td>1.2</td>
                <td>Secondary</td>
                <td>H-alloy anode, Ni(OH){`$_2$`} cathode</td>
              </tr>
              <tr>
                <td>Sodium-sulfur</td>
                <td>2.2</td>
                <td>Secondary</td>
                <td>Na anode, S cathode (high temperature)</td>
              </tr>
            </tbody>
          </table>
        </>,

        <>
          <h2>Standard Conditions</h2>
          <table className="lrn-table">
            <thead>
              <tr>
                <th>Quantity</th>
                <th>Standard condition</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Solute activity</td>
                <td>
                  {`$a = 1$`} ({`$\\approx 1\\text{ mol L}^{-1}$`} dilute)
                </td>
              </tr>
              <tr>
                <td>Gas pressure</td>
                <td>1 bar</td>
              </tr>
              <tr>
                <td>Pure solid or liquid</td>
                <td>{`$a = 1$`}</td>
              </tr>
              <tr>
                <td>Temperature</td>
                <td>298.15 K (25{`$^\\circ$`}C)</td>
              </tr>
            </tbody>
          </table>
        </>
      ]
    }
  }
  return config
}

export default function RedoxAndElectrochemistry() {
  const config = useConfig()
  return <LearningTemplate config={config} />
}
