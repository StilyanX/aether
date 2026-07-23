import { LearningTemplate } from '../../../../../components/learning/learning-template'
import { VizFigure } from '../../../../../components/viz-figure'
import { Canvas, Label, TexPx, FG, OPACITY } from '../../../../../components/viz/primitives'
import {
  SpectrochemicalSeriesViz,
  LFSEDoubleHumpViz,
  SpinOnlyMomentViz,
  CFSEViz,
  IrvingWilliamsViz,
  SquarePlanarSplittingViz,
  HighLowSpinViz,
  CrystalFieldWavelengthViz,
  TiWaterBandViz,
  DDvsChargeTransferViz,
  DOrbitalAngularDensityViz,
  JahnTellerViz
} from '../../../../../components/viz'
import { FONT_LABEL, FONT_SMALL, FONT_TEX } from '../../../../../components/viz/scale-tokens'

// Crystal-field d-orbital splitting diagram (hand-rolled monochrome SVG).
// A labeled energy-level diagram: it does not compute anything, it shows the
// honest geometry-driven ordering of the five d orbitals plus an electron fill.
// Left: octahedral (t₂g below, e_g above, gap Δ_o). Right: tetrahedral (e below,
// t₂ above, smaller gap Δ_t). Each level is filled for a high-spin d⁶ example.

// One d-orbital level: a short horizontal bar with up/down spin arrows on it.
function DLevel({ x, y, w, ups = 0, downs = 0 }) {
  const slot = w / 3
  const arrows = []
  for (let i = 0; i < 3; i++) {
    const cx = x + slot * (i + 0.5)
    const up = i < ups
    const down = i < downs
    if (up) {
      arrows.push(
        <line
          key={`u${i}`}
          x1={cx - 3}
          y1={y + 8}
          x2={cx - 3}
          y2={y - 8}
          stroke={FG}
          strokeWidth={1.4}
          markerEnd="url(#ctm-arrowup)"
          opacity={OPACITY.fg}
        />
      )
    }
    if (down) {
      arrows.push(
        <line
          key={`d${i}`}
          x1={cx + 3}
          y1={y - 8}
          x2={cx + 3}
          y2={y + 8}
          stroke={FG}
          strokeWidth={1.4}
          markerEnd="url(#ctm-arrowdn)"
          opacity={OPACITY.fg}
        />
      )
    }
  }
  return (
    <g>
      <line x1={x} y1={y} x2={x + w} y2={y} stroke={FG} strokeWidth={1.6} opacity={OPACITY.fg} />
      {arrows}
    </g>
  )
}

// w=800 h=420 canvas. Barycentre is the dashed reference line.
function CrystalFieldSplittingDiagram() {
  const W = 800
  const H = 440
  // Octahedral column (left)
  const oxBar = 140 // barycentre y for octahedral
  const oLevelW = 150
  const oLeft = 70
  const ot2g = oxBar + 56 // t₂g sits below (lower energy = larger y)
  const oeg = oxBar - 84 // e_g sits above (higher energy = smaller y)
  // Tetrahedral column (right). Smaller gap (Δ_t = 4/9 Δ_o), inverted.
  const txBar = oxBar
  const tLevelW = 150
  const tLeft = 540
  const te = txBar + 38 // e set below (lower)
  const tt2 = txBar - 38 // t₂ set above (higher)
  return (
    <Canvas w={W} h={H}>
      <defs>
        <marker
          id="ctm-arrowup"
          markerWidth="6"
          markerHeight="6"
          refX="3"
          refY="0.5"
          orient="auto"
          markerUnits="userSpaceOnUse"
        >
          <path d="M0,5 L3,0 L6,5" fill="none" stroke={FG} strokeWidth={1.4} />
        </marker>
        <marker
          id="ctm-arrowdn"
          markerWidth="6"
          markerHeight="6"
          refX="3"
          refY="5.5"
          orient="auto"
          markerUnits="userSpaceOnUse"
        >
          <path d="M0,1 L3,6 L6,1" fill="none" stroke={FG} strokeWidth={1.4} />
        </marker>
      </defs>

      {/* Column titles */}
      <Label x={oLeft + oLevelW / 2} y={34} anchor="middle" size={FONT_TEX} opacity={OPACITY.fg}>
        Octahedral
      </Label>
      <Label x={tLeft + tLevelW / 2} y={34} anchor="middle" size={FONT_TEX} opacity={OPACITY.fg}>
        Tetrahedral
      </Label>

      {/* Free-ion / barycentre reference line spanning both columns */}
      <line
        x1={oLeft - 20}
        y1={oxBar}
        x2={tLeft + tLevelW + 20}
        y2={txBar}
        stroke={FG}
        strokeWidth={1}
        strokeDasharray="4 5"
        opacity={OPACITY.dim}
      />
      <Label
        x={tLeft + tLevelW + 26}
        y={txBar - 6}
        anchor="start"
        size={FONT_SMALL}
        opacity={OPACITY.dim}
      >
        barycentre
      </Label>

      {/* Octahedral levels */}
      <DLevel x={oLeft} y={oeg} w={oLevelW} ups={2} downs={0} />
      <DLevel x={oLeft} y={ot2g} w={oLevelW} ups={3} downs={1} />
      <Label
        x={oLeft + oLevelW + 12}
        y={oeg + 4}
        anchor="start"
        size={FONT_LABEL}
        opacity={OPACITY.fg}
      >
        e_g
      </Label>
      <Label
        x={oLeft + oLevelW + 12}
        y={ot2g + 4}
        anchor="start"
        size={FONT_LABEL}
        opacity={OPACITY.fg}
      >
        t₂g
      </Label>
      {/* orbital members */}
      <TexPx
        x={oLeft}
        y={oeg - 12}
        tex={'d_{z^2},\\; d_{x^2-y^2}'}
        size={FONT_LABEL}
        opacity={OPACITY.dim}
      />
      <TexPx
        x={oLeft}
        y={ot2g + 30}
        tex={'d_{xy},\\; d_{xz},\\; d_{yz}'}
        size={FONT_LABEL}
        opacity={OPACITY.dim}
      />
      {/* Δ_o gap arrow */}
      <line
        x1={oLeft - 14}
        y1={oeg}
        x2={oLeft - 14}
        y2={ot2g}
        stroke={FG}
        strokeWidth={1}
        opacity={OPACITY.fg}
        markerStart="url(#ctm-arrowup)"
        markerEnd="url(#ctm-arrowdn)"
      />
      <TexPx
        x={oLeft - 56}
        y={(oeg + ot2g) / 2 + 5}
        tex={'\\Delta_o'}
        size={FONT_TEX}
        opacity={OPACITY.fg}
      />

      {/* Tetrahedral levels (inverted, smaller gap) */}
      {/* High-spin d⁶: e³ t₂³ (the lower e set fills first, then t₂). */}
      <DLevel x={tLeft} y={tt2} w={tLevelW} ups={3} downs={0} />
      <DLevel x={tLeft} y={te} w={tLevelW} ups={2} downs={1} />
      <Label
        x={tLeft + tLevelW + 12}
        y={tt2 + 4}
        anchor="start"
        size={FONT_LABEL}
        opacity={OPACITY.fg}
      >
        t₂
      </Label>
      <Label
        x={tLeft + tLevelW + 12}
        y={te + 4}
        anchor="start"
        size={FONT_LABEL}
        opacity={OPACITY.fg}
      >
        e
      </Label>
      <TexPx
        x={tLeft}
        y={tt2 - 12}
        tex={'d_{xy},\\; d_{xz},\\; d_{yz}'}
        size={FONT_LABEL}
        opacity={OPACITY.dim}
      />
      <TexPx
        x={tLeft}
        y={te + 30}
        tex={'d_{z^2},\\; d_{x^2-y^2}'}
        size={FONT_LABEL}
        opacity={OPACITY.dim}
      />
      {/* Δ_t gap arrow */}
      <line
        x1={tLeft - 14}
        y1={tt2}
        x2={tLeft - 14}
        y2={te}
        stroke={FG}
        strokeWidth={1}
        opacity={OPACITY.fg}
        markerStart="url(#ctm-arrowup)"
        markerEnd="url(#ctm-arrowdn)"
      />
      <TexPx
        x={tLeft - 54}
        y={(tt2 + te) / 2 + 5}
        tex={'\\Delta_t'}
        size={FONT_TEX}
        opacity={OPACITY.fg}
      />

      {/* footing note */}
      <Label x={W / 2} y={H - 16} anchor="middle" size={FONT_SMALL} opacity={OPACITY.dim}>
        electron fill shown for high-spin d⁶, Δ_t is smaller, so the tetrahedral set stays high-spin
      </Label>
    </Canvas>
  )
}

function useConfig() {
  const config = {
    cssPrefix: 'ctm',
    documentTitle: 'Coordination and Transition-Metal Chemistry - AETHER',
    learning: {
      groupTitle: 'Transition-Metal and Coordination Chemistry',
      category: 'Unit 8',
      title: 'Coordination and Transition-Metal Chemistry',
      subtitle:
        'This topic covers how transition metals bond, why they have color, and why they are magnetic.',
      sections: [
        <>
          <h2>What Makes a Transition Metal</h2>
          <span className="lrn-label">Unit 8, Transition-Metal and Coordination Chemistry</span>
          <p className="lrn-lead">{`Transition metals occupy Groups 3–11 of the periodic table. The oxidation state is the charge the atom would carry if every bond were fully ionic. These metals have partly filled d subshells in at least one common oxidation state. This gives them unusual traits: many oxidation states, vivid colors, and strong paramagnetism. Paramagnetism means the substance is pulled into a magnetic field because it has unpaired electrons.`}</p>
        </>,

        <>
          <div className="lrn-section" id="lrn-section-0">
            <h2>Physical and Chemical Trends Across the d-Block</h2>
            <p>{`The d-block runs from Group 3 (Sc) to Group 12 (Zn/Cd/Hg). Use this section to explain why these metals behave differently from main-group elements. The key driver is the d subshell: it is available for bonding, sensitive to ligand environments, and responsible for both color and magnetism.`}</p>

            <div className="lrn-predict">
              <p>
                <strong>Predict before you read:</strong> Chromium has the configuration [Ar] 3d⁵
                4s¹ instead of the expected [Ar] 3d⁴ 4s². Why might a half-filled d subshell be
                preferred?
              </p>
              <details className="lrn-predict-reveal">
                <summary>Check your thinking</summary>
                <p>{`A half-filled subshell (3d⁵) is extra stable. That stability is worth more than the cost of moving one 4s electron into the 3d level. So chromium takes the 3d⁵ 4s¹ arrangement.`}</p>
              </details>
            </div>

            <h3>Electron Configurations and Irregular Fills</h3>
            <p>{`Most d-block elements fill 3d then 4s in the expected order. However, Cr ([Ar] 3d⁵ 4s¹) and Cu ([Ar] 3d¹⁰ 4s¹) are exceptions. Both adopt configurations that give either a half-filled or fully filled d subshell.`}</p>
            <p>{`Here is the key rule: a half-filled or completely full d subshell is extra stable. So an atom will shift one electron to reach 3d⁵ or 3d¹⁰. Unit 1 explains why this stability arises.`}</p>
            <p>{`Group 12 elements (Zn, Cd, Hg) have completely full d subshells. Their d electrons play no role in bonding. Many chemists exclude Group 12 from the strict definition of "transition metals." These elements still appear in the d-block.`}</p>

            <p>{`The lanthanide contraction makes Period 6 d-block metals (Hf through Au) smaller and denser than expected. By the time you reach Hf, the atoms are nearly the same size as those in Period 5 above them. Unit 1 covers why this contraction happens.`}</p>

            <h3>Variable Oxidation States</h3>
            <p>{`Transition metals show many different oxidation states. Elements near the center of each row (Mn, Fe, Co) have the widest range. High oxidation states act as oxidizing agents: they pull electrons from other substances. Low oxidation states act as reducing agents.`}</p>
            <p>{`Chromium shows this clearly. In the dichromate ion, Cr is +6 and strongly oxidizes other species. In Cr²⁺ complexes, Cr is only +2 and is a reducing agent.`}</p>

            <div className="lrn-callout">
              <p>{`The d-block elements have both the empty and the occupied d orbitals close in energy to the valence s and p orbitals. That energy proximity makes many oxidation states accessible with small energy differences.`}</p>
            </div>

            <h3>Survey of Selected Elements</h3>
            <ul className="lrn-list">
              <li>{`Scandium (Sc, d¹): used mainly in high-strength alloys.`}</li>
              <li>{`Titanium (Ti, d²): resists corrosion because a thin TiO₂ layer forms on its surface.`}</li>
              <li>{`Vanadium (V, d³): improves steel toughness at high temperature.`}</li>
              <li>{`Chromium (Cr): found in stainless steel. Forms vivid yellow and orange Cr(VI) compounds like chromate and dichromate.`}</li>
              <li>{`Manganese (Mn, d⁵): the key part of permanganate, a strong oxidizing agent.`}</li>
              <li>{`Iron (Fe): the most widely used metal on Earth.`}</li>
              <li>{`Cobalt (Co, d⁷): found in Vitamin B₁₂.`}</li>
              <li>{`Nickel (Ni, d⁸): used in alloys and catalysts.`}</li>
            </ul>

            <div className="lrn-callout">
              <p>{`Titanium extraction uses the Kroll process: TiCl₄(g) + 2Mg(l) → Ti(s) + 2MgCl₂(s). This batch process is energy-intensive. It keeps titanium expensive despite abundant ore.`}</p>
            </div>

            <h3>Coinage Metals and Group 12</h3>
            <p>{`Copper (Cu, d¹⁰ 4s¹), silver (Ag), and gold (Au) are the coinage metals (Group 11). Their filled d shells and single 4s electron make them far less reactive than other transition metals. Zinc (Zn), cadmium (Cd), and mercury (Hg) form Group 12. Mercury is the only metallic element that is liquid at room temperature. Cadmium and mercury are toxic heavy metals.`}</p>

            <div className="lrn-self-explain">
              <p>
                <strong>Self-explain:</strong> Why does the lanthanide contraction make gold appear
                "noble," even though it is a transition metal?
              </p>
              <details className="lrn-self-explain-reveal">
                <summary>Expert explanation</summary>
                <p>{`The lanthanide contraction shrinks the atomic radius of Period 6 metals. In gold, this pulls the outer electrons in close to the nucleus and holds them tightly. Gold then rarely loses electrons. That is why gold is so unreactive, or "noble."`}</p>
              </details>
            </div>
          </div>
        </>,

        <>
          <div className="lrn-section" id="lrn-section-1">
            <h2>Coordination Complexes: Structure and Nomenclature</h2>
            <p>{`A coordination complex is a central metal ion bonded to ligands. A ligand is a molecule or ion that gives an electron pair to the metal. The metal is a Lewis acid (an electron-pair acceptor). The ligand is a Lewis base (an electron-pair donor). Unit 6 covers Lewis acids and bases in full. Use this idea to predict complex stability, name compounds, and find isomers.`}</p>

            <div className="lrn-predict">
              <p>
                <strong>Predict before you read:</strong> If you dissolve iron(II) sulfate and
                potassium cyanide together, what do you expect to happen to the Fe²⁺ ions?
              </p>
              <details className="lrn-predict-reveal">
                <summary>Check your thinking</summary>
                <p>{`The CN⁻ ions each have a lone pair on carbon. They donate these lone pairs to the Fe²⁺ Lewis acid. The result is the complex ion [Fe(CN)₆]⁴⁻, where six cyanide ions surround iron in an octahedral arrangement.`}</p>
              </details>
            </div>

            <h3>Key Terms</h3>
            <div className="lrn-definition">
              <div className="lrn-definition-term">Coordination number</div>
              <div className="lrn-definition-desc">
                <p>
                  The number of donor atoms directly bonded to the metal. Common values are 2
                  (linear), 4 (tetrahedral or square planar), and 6 (octahedral).
                </p>
              </div>
            </div>
            <div className="lrn-definition">
              <div className="lrn-definition-term">Coordination sphere</div>
              <div className="lrn-definition-desc">
                <p>
                  The metal ion plus all directly attached ligands, written inside square brackets
                  in the formula. Ions outside the brackets are counter-ions, not ligands.
                </p>
              </div>
            </div>
            <div className="lrn-definition">
              <div className="lrn-definition-term">Denticity (dentate)</div>
              <div className="lrn-definition-desc">
                <p>
                  The number of donor atoms one ligand attaches to the metal with. Monodentate = one
                  donor atom. Bidentate = two. Polydentate = many. Hexadentate = six.
                </p>
              </div>
            </div>
            <div className="lrn-definition">
              <div className="lrn-definition-term">Chelate effect</div>
              <div className="lrn-definition-desc">
                <p>
                  Polydentate ligands (en, EDTA) form more stable complexes than the same number of
                  donor atoms from monodentate ligands. The extra stability comes from entropy.
                  Entropy is a measure of disorder. Releasing many small ligands raises disorder.
                </p>
              </div>
            </div>

            <div className="lrn-elaborate">
              <p>
                <strong>Why is the chelate effect driven by entropy?</strong> Swapping six water
                ligands for three en ligands frees up molecules. One en pushes out two water
                molecules. The reaction makes more free particles in solution. More particles means
                more disorder, so the entropy change is positive. Free energy is the energy left to
                do useful work. A positive entropy term lowers the free energy and makes the chelate
                complex more stable.
              </p>
            </div>

            <h3>Common Ligands</h3>
            <p>{`Monodentate ligands donate one lone pair: water (aqua, OH₂), ammonia (ammine, NH₃), chloride (chlorido, Cl⁻), cyanide (cyanido, CN⁻), and carbon monoxide (carbonyl, CO). Bidentate ligands donate two lone pairs: ethylenediamine (en), oxalate ([ox]²⁻). EDTA is hexadentate and wraps around a metal from six directions at the same time.`}</p>

            <h3>Naming Coordination Compounds</h3>
            <div className="lrn-steps">
              <p>Use these steps in order to name any coordination complex:</p>
              <ol className="lrn-list">
                <li>Name the cation before the anion.</li>
                <li>List ligands alphabetically (ignoring prefixes) before the metal name.</li>
                <li>
                  Add Greek prefixes for ligand count: di, tri, tetra, penta, hexa; use
                  bis/tris/tetrakis for polydentate ligands.
                </li>
                <li>Give anionic ligands the suffix -ido (chlorido, cyanido) or -ato (oxalato).</li>
                <li>
                  State the metal oxidation state as a Roman numeral in parentheses: iron(III).
                </li>
                <li>
                  If the complex is an anion, use the Latin stem and suffix -ate: ferrate, cuprate,
                  platinate.
                </li>
              </ol>
            </div>

            <h3>Worked Example: Naming [Co(NH₃)₃(OH₂)₃]₂(SO₄)₃</h3>
            <p>{`Name the compound [Co(NH₃)₃(OH₂)₃]₂(SO₄)₃. It has two complex cations and three sulfate ions. Each ammine and aqua ligand is neutral, so the cobalt oxidation state sets the cation charge.`}</p>
            <p>{`Step 1: Find the cation charge from the counter-ions. There are three SO₄²⁻ ions, giving a total charge of −6. The two complex cations must together supply +6. So each cation is +3.`}</p>
            <p>{`Step 2: Find the cobalt oxidation state. The three ammine and three aqua ligands are all neutral. The whole cation is +3, so cobalt is +3, written cobalt(III).`}</p>
            <p>{`Step 3: List ligands alphabetically before the metal. Ammine (a) comes before aqua (a-q). There are three of each, so triammine and triaqua. Add the metal name and oxidation state, then the counter-ion. The full name is triamminetriaquacobalt(III) sulfate.`}</p>

            <div className="lrn-self-explain">
              <p>
                <strong>Self-explain:</strong> Why does cobalt come out as +3 and not +6, even
                though there are three sulfate ions?
              </p>
              <details className="lrn-self-explain-reveal">
                <summary>Expert explanation</summary>
                <p>{`The formula has two complex cations, shown by the subscript 2 outside the square bracket. The three sulfates supply −6 in total. That −6 is shared between two cations, so each cation is +3. The ligands are neutral, so cobalt is +3. If you forget the subscript 2 and put all −6 onto one cobalt, you wrongly get +6.`}</p>
              </details>
            </div>

            <h3>Counting the Coordination Number</h3>
            <p>{`To count the coordination number, count donor atoms, not ligands. A bidentate ligand attaches twice, so it counts as two. Take [Co(en)₃]³⁺: three en ligands, each bidentate. That gives 3 × 2 = 6. The coordination number is 6, so the complex is octahedral.`}</p>

            <h3>Worked Example: Naming an Anion Complex K₄[Fe(CN)₆]</h3>
            <p>{`When the complex carries a negative charge, the metal name takes a Latin stem and the suffix -ate. Walk through K₄[Fe(CN)₆].`}</p>
            <div className="lrn-steps">
              <ol className="lrn-list">
                <li>
                  Find the metal charge. Four K⁺ give +4, so the complex anion is −4. Each CN⁻ is
                  −1, so six give −6. Then Fe + (−6) = −4, so Fe = +2.
                </li>
                <li>Name the ligands. Six cyanido ligands give hexacyanido.</li>
                <li>
                  The complex is an anion, so use the Latin stem for iron (ferr-) plus -ate:
                  ferrate.
                </li>
                <li>State the oxidation state: ferrate(II).</li>
                <li>Add the cation first. Full name: potassium hexacyanidoferrate(II).</li>
              </ol>
            </div>
            <p>{`You can now name any complex, work out a metal oxidation state, and use the -ate ending for anion complexes.`}</p>

            <h3>Worked Example: Writing a Formula from a Name</h3>
            <p>{`You can also run the steps backward to build a formula. Write the formula for tetraamminecopper(II) sulfate.`}</p>
            <div className="lrn-steps">
              <ol className="lrn-list">
                <li>Read the ligands. "Tetraammine" means four NH₃ ligands.</li>
                <li>
                  Read the metal and charge. Copper(II) is Cu²⁺. The four NH₃ are neutral, so the
                  complex ion is [Cu(NH₃)₄]²⁺.
                </li>
                <li>
                  Balance with the counter-ion. Sulfate is SO₄²⁻ with charge −2. One sulfate
                  balances the +2 cation.
                </li>
                <li>Write it out: [Cu(NH₃)₄]SO₄.</li>
              </ol>
            </div>
          </div>
        </>,

        <>
          <div className="lrn-section" id="lrn-section-2">
            <h2>Shapes, Isomers, and Geometry of Complexes</h2>
            <p>{`The geometry of a complex depends on its coordination number and the electronic requirements of the metal. Use this section to predict shape, identify isomers, and determine chirality.`}</p>

            <div className="lrn-predict">
              <p>
                <strong>Predict before you read:</strong> Two platinum(II) complexes both have
                formula Pt(NH₃)₂Cl₂. Can they have different structures? If so, how?
              </p>
              <details className="lrn-predict-reveal">
                <summary>Check your thinking</summary>
                <p>{`Yes. Pt²⁺ forms square planar complexes. With two NH₃ and two Cl⁻, the two NH₃ can sit next to each other (cis) or across from each other (trans). These are different molecules with different properties.`}</p>
              </details>
            </div>

            <h3>Coordination Geometries</h3>
            <ul className="lrn-list">
              <li>{`CN = 2: linear (e.g. [Ag(NH₃)₂]⁺)`}</li>
              <li>{`CN = 4: tetrahedral (e.g. [NiCl₄]²⁻) or square planar (e.g. [Pt(NH₃)₂Cl₂])`}</li>
              <li>{`CN = 6: octahedral, by far the most common`}</li>
              <li>{`CN = 5: trigonal bipyramidal or square pyramidal`}</li>
              <li>
                Higher coordination numbers (7, 8, 9, 12) occur in larger second- and third-row
                metals.
              </li>
            </ul>
            <p>{`Square planar geometry is common for d⁸ metal ions (Pt²⁺, Pd²⁺, Au³⁺, Ni²⁺ with strong-field ligands). The later section on Crystal Field Theory explains why the d⁸ count favors this shape.`}</p>

            <h3>Types of Isomers</h3>
            <div className="lrn-definition">
              <div className="lrn-definition-term">Structural isomers</div>
              <div className="lrn-definition-desc">
                <p>Same formula, but the atoms connect in a different order. The four types are:</p>
                <ul className="lrn-list">
                  <li>{`Ionization isomers: a ligand and a counter-ion swap places.`}</li>
                  <li>{`Hydrate isomers: water sits inside the sphere in one, outside in the other.`}</li>
                  <li>{`Linkage isomers: an ambidentate ligand bonds through a different atom. An ambidentate ligand can bond two ways, like NO₂⁻ through N or through O.`}</li>
                  <li>{`Coordination isomers: ligands split up differently between two metal centers.`}</li>
                </ul>
              </div>
            </div>
            <div className="lrn-definition">
              <div className="lrn-definition-term">Stereoisomers</div>
              <div className="lrn-definition-desc">
                <p>
                  Same connections, but a different layout in space. Geometric (cis/trans) isomers
                  differ in which ligands sit next to or across from each other. Optical isomers, or
                  enantiomers, are mirror images you cannot stack on top of each other. They turn
                  polarized light in opposite directions.
                </p>
              </div>
            </div>

            <h3>Geometric Isomers: Cisplatin Example</h3>
            <p>{`cis-[PtCl₂(NH₃)₂] (cisplatin) is a powerful anticancer drug. The two Cl⁻ ligands sit adjacent to each other. trans-[PtCl₂(NH₃)₂] has the two Cl⁻ across from each other. These are different compounds with completely different biological activity. The trans form is therapeutically inactive.`}</p>

            <div className="lrn-elaborate">
              <p>
                <strong>Why is this true?</strong> Cisplatin works by binding to two adjacent
                guanine bases on the same strand of DNA, forming an intra-strand crosslink. The cis
                geometry places the two Cl⁻ leaving groups at exactly the right distance to bridge
                the two nitrogen atoms on adjacent guanines. The trans isomer cannot form this
                crosslink geometry, so it cannot bind DNA in the same way and has no anticancer
                action.
              </p>
            </div>

            <h3>Optical Isomers and Chirality</h3>
            <p>{`A complex is chiral when its mirror image cannot be stacked onto it. The complex [Co(en)₃]³⁺ has three ethylenediamine ligands wrapped in a spiral around Co. Its two mirror images are two real, separate molecules. A racemic mixture has equal amounts of both. The two forms turn light in opposite ways, so the mixture shows no net turn.`}</p>

            <div className="lrn-callout">
              <p>{`A polarimeter detects this. Polarized light passes through the sample. If the solution turns the light, the complex is optically active. The angle tells you which mirror-image form is winning.`}</p>
            </div>

            <h3>How to Find the Isomers of a Complex</h3>
            <div className="lrn-steps">
              <ol className="lrn-list">
                <li>
                  List the ligand types and the geometry. Count how many of each ligand there are.
                </li>
                <li>
                  Check for cis/trans. If two like ligands can sit next to each other or across, you
                  have geometric isomers.
                </li>
                <li>
                  Test each form for a mirror plane. If a form has no mirror plane, its mirror image
                  is a separate molecule, so it is chiral.
                </li>
              </ol>
            </div>
            <p>{`You can now take any complex formula and predict its geometric and optical isomers.`}</p>

            <div className="lrn-self-explain">
              <p>
                <strong>Self-explain:</strong> Would [Co(NH₃)₄Cl₂]⁺ have geometric isomers? Would it
                be chiral?
              </p>
              <details className="lrn-self-explain-reveal">
                <summary>Expert explanation</summary>
                <p>{`Yes to geometric isomers: the two Cl⁻ can be cis (next to each other) or trans (across from each other). For chirality, test each form for a mirror plane. The trans form has mirror planes, so it is achiral (not chiral). The cis form also has a mirror plane, the one holding both Cl⁻ and the Co. So it is achiral too. Neither form is chiral, so no separate mirror-image molecule exists here.`}</p>
              </details>
            </div>
          </div>
        </>,

        <>
          <div className="lrn-section" id="lrn-section-4">
            <h2>Crystal Field Theory: Octahedral, Tetrahedral, and Square Planar</h2>
            <p>{`Crystal Field Theory (CFT) treats ligands as point negative charges. These charges split the d orbitals into sets of different energy. Use CFT to predict color, magnetic properties, and thermodynamic trends. It fails to explain why CO creates a stronger field than Cl⁻, for that, you need Ligand Field Theory.`}</p>

            <div className="lrn-predict">
              <p>
                <strong>Predict before you read:</strong> In an octahedral complex, six ligands
                approach along the x, y, and z axes. Which d orbitals point directly at these
                ligands? Which point between the axes?
              </p>
              <details className="lrn-predict-reveal">
                <summary>Check your thinking</summary>
                <p>{`The d_z² and d_x²-y² orbitals point directly along the axes, right at the ligands. The d_xy, d_xz, and d_yz orbitals point between the axes. Electrons in orbitals pointing directly at ligands experience stronger repulsion, so those orbitals end up at higher energy.`}</p>
              </details>
            </div>

            <h3>Octahedral Crystal Field: The Barycentre and Splitting</h3>
            <p>{`Start by imagining the metal ion surrounded by a spherical shell of negative charge (all ligands at infinite distance). This raises all five d orbitals equally, this is the barycentre, the center of gravity of d-orbital energies. Now bring the six ligands in along the axes. The spherical field breaks into an octahedral field. Two d orbitals point directly at ligand lone pairs: they are strongly repelled. They shift to higher energy, forming the e_g set. Three d orbitals point between ligands: they shift to lower energy, forming the t₂g set.`}</p>
            <DOrbitalAngularDensityViz />

            <VizFigure title="d-Orbital Splitting: Octahedral vs. Tetrahedral" aspect="auto">
              <CrystalFieldSplittingDiagram />
            </VizFigure>

            <div className="lrn-eq lrn-eq-hero">
              <span>{`$$e_g: \\; +\\tfrac{3}{5}\\Delta_o \\text{ above barycentre} \\quad (d_{z^2},\\; d_{x^2-y^2})$$`}</span>
              <span>{`$$t_{2g}: \\; -\\tfrac{2}{5}\\Delta_o \\text{ below barycentre} \\quad (d_{xy},\\; d_{xz},\\; d_{yz})$$`}</span>
              <span>{`$$\\text{Net energy change} = 2\\left(+\\tfrac{3}{5}\\Delta_o\\right) + 3\\left(-\\tfrac{2}{5}\\Delta_o\\right) = 0$$`}</span>
            </div>

            <p>{`The parameter $\\Delta_o$ (also written $\\Delta_{oct}$ or 10Dq) is the crystal field splitting energy in an octahedral complex. Its size depends on both the metal and the ligand identity.`}</p>

            <div className="lrn-elaborate">
              <p>
                <strong>Why does the energy sum to zero?</strong> The barycentre is defined as the
                weighted average energy of all five d orbitals. Any splitting must conserve this
                average: electrons gained in stability by the t₂g set must be balanced by the
                destabilization of the e_g set. The numbers work out: 2 × (+0.6) + 3 × (−0.4) = 1.2
                − 1.2 = 0. This constraint is the key algebraic fact of CFT.
              </p>
            </div>

            <h3>Crystal Field Stabilization Energy (CFSE)</h3>
            <p>{`Each electron placed in a t₂g orbital releases $\\tfrac{2}{5}\\Delta_o$ of energy relative to the barycentre. Each electron in an e_g orbital costs $\\tfrac{3}{5}\\Delta_o$. CFSE is the total energy change from putting all d electrons into the split orbitals, relative to the barycentre.`}</p>

            <div className="lrn-eq">
              <span>{`$$\\text{CFSE} = n_{t_{2g}} \\times \\left(-\\tfrac{2}{5}\\Delta_o\\right) + n_{e_g} \\times \\left(+\\tfrac{3}{5}\\Delta_o\\right)$$`}</span>
            </div>

            <p>{`For high-spin complexes, add pairing energy P for each forced electron pair. For d¹ (one electron in t₂g): CFSE = $-0.4\\Delta_o$. For d³ (three electrons in t₂g): CFSE = $-1.2\\Delta_o$. For d⁸ (six in t₂g, two in e_g): CFSE = $6(-0.4) + 2(+0.6) = -1.2\\Delta_o$. The d⁰, d⁵ (high-spin), and d¹⁰ configurations all have CFSE = 0.`}</p>
            <CFSEViz />

            <div className="lrn-faded">
              <p>
                <strong>Faded Exercise: Calculating CFSE</strong>
              </p>
              <p>We work through three examples together.</p>
              <ol className="lrn-list">
                <li>
                  <strong>Complete Example:</strong> d⁶ low-spin. Configuration: t₂g⁶ e_g⁰. Orbital
                  term: CFSE = 6 × (−0.4Δ_o) = −2.4Δ_o. Now count extra pairs. The free d⁶ ion has 4
                  unpaired electrons, so 1 pair. Low-spin t₂g⁶ has 3 pairs. The field forces 3 − 1 =
                  2 extra pairs, each costing P. Final: CFSE = −2.4Δ_o + 2P.
                </li>
                <li>
                  <strong>Your turn (partial):</strong> d⁴ high-spin. Configuration: t₂g³ e_g¹. Fill
                  in: CFSE = 3 × (___) + 1 × (___). No extra pairing energy (free ion d⁴ also has 0
                  forced pairs). Answer: CFSE = −1.2Δ_o + 0.6Δ_o = ___.
                </li>
                <li>
                  <strong>Independent practice:</strong> Calculate CFSE for d⁷ high-spin (t₂g⁵ e_g²)
                  on your own. Compare your answer to −0.8Δ_o.
                </li>
              </ol>
            </div>

            <h3>Tetrahedral Crystal Field</h3>
            <p>{`In a tetrahedral complex, the four ligands approach along the diagonals of a cube, not along the axes. The d orbital labeling changes: the d_xy, d_xz, d_yz set (now called t₂) comes nearer to the ligands. The d_z² and d_x²-y² set (now called e) points farther from the ligands. The splitting is inverted compared to octahedral.`}</p>

            <div className="lrn-eq">
              <span>{`$$\\Delta_t = \\dfrac{4}{9}\\,\\Delta_o$$`}</span>
            </div>

            <p>{`Because the tetrahedral splitting is only about $\\tfrac{4}{9}$ as large as the octahedral splitting, it almost never exceeds the pairing energy. All tetrahedral complexes are therefore high-spin. The subscript g (for gerade) is absent in tetrahedral symmetry labels because tetrahedral complexes have no inversion center.`}</p>

            <div className="lrn-compare">
              <h3>Octahedral vs. Tetrahedral Splitting</h3>
              <table>
                <thead>
                  <tr>
                    <th>Property</th>
                    <th>Octahedral</th>
                    <th>Tetrahedral</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Splitting parameter</td>
                    <td>{`$\\Delta_o$ (= 10Dq)`}</td>
                    <td>{`$\\Delta_t = \\tfrac{4}{9}\\Delta_o$`}</td>
                  </tr>
                  <tr>
                    <td>Lower energy set</td>
                    <td>{`$t_{2g}$ (d_xy, d_xz, d_yz)`}</td>
                    <td>{`$e$ (d_z², d_x²-y²)`}</td>
                  </tr>
                  <tr>
                    <td>Higher energy set</td>
                    <td>{`$e_g$ (d_z², d_x²-y²)`}</td>
                    <td>{`$t_2$ (d_xy, d_xz, d_yz)`}</td>
                  </tr>
                  <tr>
                    <td>Inversion center?</td>
                    <td>Yes (g labels used)</td>
                    <td>No (no g subscript)</td>
                  </tr>
                  <tr>
                    <td>Spin state possible</td>
                    <td>High-spin or low-spin</td>
                    <td>High-spin only</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3>Square Planar Crystal Field</h3>
            <p>{`Remove the two axial (z-axis) ligands from an octahedral complex. The d_z² orbital drops sharply in energy because the axial ligands no longer repel it. The remaining four equatorial ligands still repel d_xy. The d orbital ordering from low to high energy becomes: d_xz, d_yz ≈ d_z² < d_xy < d_x²-y². The energy gap between d_xy and d_x²-y² is large. A d⁸ ion places all eight electrons below this gap, all paired, diamagnetic.`}</p>
            <SquarePlanarSplittingViz />

            <h3>Jahn-Teller Distortions</h3>
            <p>{`First, "degenerate" means two arrangements have the exact same energy. Take a d⁹ ion: it has three electrons in the two e_g orbitals. The extra pair could sit in d_z² or in d_x²-y². Both choices cost the same energy, so the state is degenerate. The Jahn-Teller theorem says any such tie is unstable. The molecule distorts to break the tie and lower its energy.`}</p>
            <p>{`For d⁹ ions and high-spin d⁴ ions, this happens in the e_g set. If the extra electron goes into d_z², the two axial ligands feel more repulsion and move away. The bonds stretch and the energy drops. This bond stretching is the Jahn-Teller distortion.`}</p>
            <JahnTellerViz />

            <div className="lrn-self-explain">
              <p>
                <strong>Self-explain:</strong> Calculate CFSE for d⁴ low-spin octahedral. The
                configuration is t₂g⁴. Write out the calculation step by step.
              </p>
              <details className="lrn-self-explain-reveal">
                <summary>Expert explanation</summary>
                <p>{`Low-spin d⁴: configuration t₂g⁴ e_g⁰. CFSE = 4 × (−0.4Δ_o) = −1.6Δ_o from orbital energies. The free ion d⁴ has 0 forced pairs (Hund: all 4 unpaired). The low-spin t₂g⁴ forces 1 pair. So we add 1 extra pairing energy: CFSE = −1.6Δ_o + P. This is less stable energetically than the orbital stabilization alone, the low-spin state is favored only when Δ_o > P.`}</p>
              </details>
            </div>
          </div>
        </>,

        <>
          <div className="lrn-section" id="lrn-section-5">
            <h2>The Spectrochemical Series and High-Spin vs. Low-Spin</h2>
            <p>{`The spectrochemical series ranks ligands by their ability to split d orbitals. Use it any time you need to decide whether a complex will be high-spin or low-spin. Memorize the key ends: I⁻ and CO are the two extremes.`}</p>

            <div className="lrn-predict">
              <p>
                <strong>Predict before you read:</strong> [Fe(H₂O)₆]²⁺ is high-spin, but [Fe(CN)₆]⁴⁻
                is low-spin. Both have Fe²⁺ (d⁶). What must differ between the two ligands?
              </p>
              <details className="lrn-predict-reveal">
                <summary>Check your thinking</summary>
                <p>{`The splitting Δ_o must be much larger in [Fe(CN)₆]⁴⁻ than in [Fe(H₂O)₆]²⁺. CN⁻ creates a larger splitting than H₂O. When Δ_o exceeds the pairing energy, electrons pair in t₂g rather than occupy e_g.`}</p>
              </details>
            </div>

            <h3>The Spectrochemical Series</h3>
            <div className="lrn-insight">
              <span className="lrn-insight-label">Key series, weak-field to strong-field</span>
              <p>{`I⁻ < Br⁻ < SCN⁻, Cl⁻ < F⁻ < [OH]⁻ < [ox]²⁻ ≈ H₂O < [NCS]⁻ < NH₃ < en < bpy < phen < [CN]⁻ ≈ CO`}</p>
            </div>
            <p>{`Weak-field ligands (left end) produce small Δ_o and favor high-spin configurations. Strong-field ligands (right end) produce large Δ_o and favor low-spin configurations. Metal oxidation state also matters: higher oxidation state increases Δ_o. Third-row metals have larger Δ_o than first-row metals.`}</p>

            <h3>Selected Experimental Δ_oct Values</h3>
            <table>
              <thead>
                <tr>
                  <th>Complex</th>
                  <th>{`Δ_oct (cm⁻¹)`}</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>[Fe(H₂O)₆]²⁺</td>
                  <td>9 400</td>
                </tr>
                <tr>
                  <td>[CoF₆]³⁻</td>
                  <td>13 100</td>
                </tr>
                <tr>
                  <td>[Fe(H₂O)₆]³⁺</td>
                  <td>13 700</td>
                </tr>
                <tr>
                  <td>[Cr(H₂O)₆]³⁺</td>
                  <td>17 400</td>
                </tr>
                <tr>
                  <td>[Co(NH₃)₆]³⁺</td>
                  <td>22 900</td>
                </tr>
                <tr>
                  <td>[Fe(CN)₆]⁴⁻</td>
                  <td>33 800</td>
                </tr>
                <tr>
                  <td>[Fe(CN)₆]³⁻</td>
                  <td>35 000</td>
                </tr>
              </tbody>
            </table>
            <SpectrochemicalSeriesViz />

            <h3>High-Spin vs. Low-Spin: Decision Rule</h3>
            <div className="lrn-eq">
              <span>{`$$\\Delta_o > P \\implies \\text{low-spin} \\quad \\Delta_o < P \\implies \\text{high-spin}$$`}</span>
            </div>
            <p>{`This choice only applies to d⁴, d⁵, d⁶, and d⁷ configurations. For d¹, d², d³, d⁸, d⁹, and d¹⁰, the configuration is the same regardless of field strength. Only one electron configuration is possible, so the high-spin/low-spin distinction is meaningless.`}</p>

            <div className="lrn-elaborate">
              <p>
                <strong>Why only d⁴ through d⁷?</strong> The choice appears only when an electron
                can either pair in t₂g or jump to e_g. For d¹, d², and d³, the three t₂g orbitals
                hold every electron singly. No pairing decision exists. For d⁸, d⁹, and d¹⁰, the t₂g
                set is already full. The remaining electrons must enter e_g either way. Only d⁴ to
                d⁷ have a real fork in the road.
              </p>
            </div>

            <div className="lrn-compare">
              <h3>High-Spin vs. Low-Spin for d⁶ Octahedral</h3>
              <table>
                <thead>
                  <tr>
                    <th>Property</th>
                    <th>High-spin (weak-field)</th>
                    <th>Low-spin (strong-field)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Condition</td>
                    <td>{`$\\Delta_o < P$`}</td>
                    <td>{`$\\Delta_o > P$`}</td>
                  </tr>
                  <tr>
                    <td>t₂g / e_g</td>
                    <td>t₂g⁴ e_g²</td>
                    <td>t₂g⁶ e_g⁰</td>
                  </tr>
                  <tr>
                    <td>Unpaired electrons</td>
                    <td>4</td>
                    <td>0</td>
                  </tr>
                  <tr>
                    <td>Magnetic behavior</td>
                    <td>Paramagnetic</td>
                    <td>Diamagnetic</td>
                  </tr>
                  <tr>
                    <td>{`Example`}</td>
                    <td>[Fe(H₂O)₆]²⁺</td>
                    <td>[Fe(CN)₆]⁴⁻</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <HighLowSpinViz />

            <h3>Worked Example: Predicting Configuration for d⁵</h3>
            <p>{`[Mn(H₂O)₆]²⁺ has Mn²⁺ (d⁵) with H₂O (weak-field). High-spin: t₂g³ e_g². Five unpaired electrons. [Mn(CN)₆]³⁻ has Mn³⁺ (d⁴) with CN⁻ (strong-field). Low-spin d⁴: t₂g⁴. One unpaired electron.`}</p>
            <p>{`To decide: compare the known Δ_oct for H₂O complexes (small) vs. CN⁻ complexes (large) against typical pairing energies (~15000–25000 cm⁻¹ for first-row ions). For Fe²⁺ with H₂O: Δ_o = 9400 cm⁻¹ < P → high-spin. For Fe²⁺ with CN⁻: Δ_o = 33800 cm⁻¹ > P → low-spin.`}</p>

            <div className="lrn-self-explain">
              <p>
                <strong>Self-explain:</strong> A student says "all tetrahedral complexes should
                sometimes be low-spin if the ligands are strong enough." Correct their reasoning.
              </p>
              <details className="lrn-self-explain-reveal">
                <summary>Expert explanation</summary>
                <p>{`Tetrahedral complexes always have $\\Delta_t \\approx \\tfrac{4}{9}\\,\\Delta_o$. Even for the strongest-field ligands, $\\Delta_t$ is only about 44% of the equivalent $\\Delta_o$. This value almost never exceeds the pairing energy for real metal ions. Therefore, tetrahedral complexes are always high-spin in practice.`}</p>
              </details>
            </div>
          </div>
        </>,

        <>
          <div className="lrn-section" id="lrn-section-6">
            <h2>Color and Electronic Transitions in Complexes</h2>
            <p>{`A coordination complex appears colored because it absorbs visible light. The absorbed photon moves a d electron between the split d orbitals. Use this section to link the color you see to the energy of the crystal field splitting.`}</p>

            <div className="lrn-predict">
              <p>
                <strong>Predict before you read:</strong> [Ti(OH₂)₆]³⁺ absorbs light at 510 nm and
                appears purple. If you absorb green light, what color do you see?
              </p>
              <details className="lrn-predict-reveal">
                <summary>Check your thinking</summary>
                <p>{`510 nm is green light. What the eye perceives is the complementary color on a color wheel. Green's complement is purple-red (around 700 nm). So the solution looks reddish-purple, consistent with the observed color.`}</p>
              </details>
            </div>

            <h3>The Complementary-Color Rule</h3>
            <p>{`A complex absorbs one color and you see the leftover light. The color you see is the complement of the absorbed color. Use this rule as a tool. Find the absorbed wavelength, then read the complement off the color wheel. Absorbed green looks red-purple. Absorbed red looks green. Absorbed blue looks orange.`}</p>

            <h3>Calculating Δ_o from Absorption Wavelength</h3>
            <div className="lrn-eq lrn-eq-hero">
              <span>{`$$\\Delta_o = h\\nu = \\dfrac{hc}{\\lambda}$$`}</span>
              <span>{`$$\\Delta_o(\\text{molar}) = N_A \\cdot \\dfrac{hc}{\\lambda}$$`}</span>
            </div>
            <CrystalFieldWavelengthViz />

            <h3>Worked Example: [Ti(OH₂)₆]³⁺</h3>
            <p>{`Ti³⁺ is d¹. The single d electron sits in t₂g. It absorbs a photon to jump to e_g. The absorption maximum is at λ = 510 nm = 510 × 10⁻⁹ m.`}</p>
            <div className="lrn-steps">
              <ol className="lrn-list">
                <li>{`Write the equation: $\\Delta_o = N_A \\cdot \\dfrac{hc}{\\lambda}$`}</li>
                <li>{`Substitute constants: $N_A = 6.022 \\times 10^{23}$ mol⁻¹, $h = 6.626 \\times 10^{-34}$ J·s, $c = 2.998 \\times 10^8$ m·s⁻¹`}</li>
                <li>{`Calculate: $\\Delta_o = (6.022 \\times 10^{23})(6.626 \\times 10^{-34})(2.998 \\times 10^8) / (510 \\times 10^{-9})$`}</li>
                <li>Result: Δ_o = 235 kJ·mol⁻¹ (about 19 600 cm⁻¹)</li>
                <li>
                  Interpretation: The photon energy at 510 nm exactly equals the t₂g → e_g energy
                  gap.
                </li>
              </ol>
            </div>
            <TiWaterBandViz />

            <div className="lrn-self-explain">
              <p>
                <strong>Self-explain:</strong> If a complex absorbs at 400 nm instead of 510 nm, is
                Δ_o larger or smaller? Explain in terms of photon energy.
              </p>
              <details className="lrn-self-explain-reveal">
                <summary>Expert explanation</summary>
                <p>{`400 nm is a shorter wavelength than 510 nm. Since $E = hc/\\lambda$, shorter wavelength means higher photon energy. So Δ_o is larger for the complex absorbing at 400 nm. You need more energy to promote the electron, which means the t₂g–e_g gap is bigger, which means the ligands are stronger-field.`}</p>
              </details>
            </div>

            <h3>d-d Transitions vs. Charge-Transfer Transitions</h3>
            <p>{`The next table uses molar absorptivity, written ε. It measures how strongly a substance absorbs light. A large ε means deep color from very little substance. A small ε means pale color. So ε tells you how intense the color is, not just which color.`}</p>
            <div className="lrn-compare">
              <table>
                <thead>
                  <tr>
                    <th>Property</th>
                    <th>d-d Transition</th>
                    <th>Charge Transfer (CT)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Nature</td>
                    <td>Electron moves between d orbitals</td>
                    <td>Electron moves metal ↔ ligand</td>
                  </tr>
                  <tr>
                    <td>Laporte rule</td>
                    <td>Forbidden (Δl = 0)</td>
                    <td>Allowed (Δl = ±1)</td>
                  </tr>
                  <tr>
                    <td>Molar absorptivity ε_max</td>
                    <td>1–1000 dm³ mol⁻¹ cm⁻¹</td>
                    <td>1000–50 000 dm³ mol⁻¹ cm⁻¹</td>
                  </tr>
                  <tr>
                    <td>Color intensity</td>
                    <td>Weak to moderate</td>
                    <td>Very intense</td>
                  </tr>
                  <tr>
                    <td>Example</td>
                    <td>[Cu(H₂O)₆]²⁺ (pale blue)</td>
                    <td>MnO₄⁻ (intense purple)</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p>{`The d-d transitions are Laporte-forbidden because d→d involves no change in orbital angular momentum quantum number (Δl = 0, but the selection rule requires Δl = ±1). They are still weakly observed because molecular vibrations distort the octahedral symmetry slightly (vibronic coupling), breaking the selection rule partially.`}</p>
            <DDvsChargeTransferViz />

            <div className="lrn-elaborate">
              <p>
                <strong>Why is MnO₄⁻ so intensely purple?</strong> In permanganate, Mn is in the +7
                oxidation state. There are no d electrons to do d-d transitions. Instead, the
                intense purple color comes from ligand-to-metal charge transfer (LMCT): an electron
                from a filled oxygen lone pair jumps to an empty metal d orbital. This is a fully
                Laporte-allowed transition, so ε_max is enormous (~2000 dm³ mol⁻¹ cm⁻¹). A tiny
                amount of permanganate in water gives a deep purple color.
              </p>
            </div>
          </div>
        </>,

        <>
          <div className="lrn-section" id="lrn-section-7">
            <h2>Magnetic Properties of Complexes</h2>
            <p>{`The magnetic behavior of a complex directly reflects how many unpaired electrons it contains. Use this section to predict and interpret magnetic moments. The spin-only formula gives a good approximation for first-row metals.`}</p>

            <div className="lrn-predict">
              <p>
                <strong>Predict before you read:</strong> [Fe(H₂O)₆]²⁺ is high-spin d⁶ with four
                unpaired electrons. [Fe(CN)₆]⁴⁻ is low-spin d⁶ with zero unpaired electrons. How
                should their magnetic moments compare?
              </p>
              <details className="lrn-predict-reveal">
                <summary>Check your thinking</summary>
                <p>{`More unpaired electrons = larger magnetic moment. [Fe(H₂O)₆]²⁺ should have a much larger magnetic moment than [Fe(CN)₆]⁴⁻, which should be near zero (diamagnetic). A Gouy balance or SQUID can measure this difference.`}</p>
              </details>
            </div>

            <h3>The Spin-Only Magnetic Moment Formula</h3>
            <div className="lrn-eq lrn-eq-hero">
              <span>{`$$\\mu_{\\text{spin-only}} = \\sqrt{n(n+2)}\\;\\mu_B$$`}</span>
            </div>
            <p>{`Here $n$ is the number of unpaired electrons and $\\mu_B$ is the Bohr magneton. This formula works well for first-row transition metal ions. For second- and third-row ions, the orbital motion of the electrons also adds to the moment, so the formula reads a bit low.`}</p>

            <div className="lrn-elaborate">
              <p>
                <strong>Why does the spin-only formula ignore orbital motion?</strong> A moving
                electron also makes a magnetic moment from its orbital path. In first-row complexes,
                the crystal field locks the d electrons into fixed orbitals. This locking "quenches"
                the orbital part, so only spin remains. In heavier metals the orbital part is not
                fully locked, so the spin-only number falls short of the measured moment.
              </p>
            </div>

            <h3>Spin-Only Values for Common Configurations</h3>
            <table>
              <thead>
                <tr>
                  <th>Unpaired electrons (n)</th>
                  <th>{`$\\mu_{\\text{spin-only}}$ / $\\mu_B$`}</th>
                  <th>Example ions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>0</td>
                  <td>0</td>
                  <td>Zn²⁺ (d¹⁰), [Fe(CN)₆]⁴⁻</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>1.73</td>
                  <td>Ti³⁺ (d¹)</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>2.83</td>
                  <td>Ni²⁺ (d⁸ octahedral)</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>3.87</td>
                  <td>Cr³⁺ (d³)</td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>4.90</td>
                  <td>Fe²⁺ high-spin (d⁶)</td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>5.92</td>
                  <td>Mn²⁺ high-spin (d⁵)</td>
                </tr>
              </tbody>
            </table>
            <SpinOnlyMomentViz />

            <div className="lrn-self-explain">
              <p>
                <strong>Self-explain:</strong>{' '}
                {`A complex shows $\\mu_{\\text{eff}} = 4.75\\,\\mu_B$. How many unpaired electrons does it likely have? Is it high-spin or low-spin for a d⁶ metal?`}
              </p>
              <details className="lrn-self-explain-reveal">
                <summary>Expert explanation</summary>
                <p>{`Use $\\mu = \\sqrt{n(n+2)}$. For n = 4: $\\sqrt{4 \\times 6} = \\sqrt{24} = 4.90\\,\\mu_B$. For n = 3: $\\sqrt{15} = 3.87\\,\\mu_B$. The value 4.75 is closest to n = 4. For a d⁶ metal, 4 unpaired electrons means the configuration is t₂g⁴ e_g²: high-spin. (Low-spin d⁶ would be t₂g⁶ with 0 unpaired electrons.)  `}</p>
              </details>
            </div>
          </div>
        </>,

        <>
          <div className="lrn-section" id="lrn-section-11">
            <h2>Thermodynamic Aspects: LFSE, Irving-Williams Series, and Redox</h2>
            <p>{`Crystal field stabilization energy contributes to real thermodynamic quantities such as lattice energies, hydration enthalpies, and complex stability constants. Use this section to explain the characteristic "double hump" curves in thermodynamic data and the Irving-Williams stability ordering.`}</p>

            <div className="lrn-predict">
              <p>
                <strong>Predict before you read:</strong> If you plot the hydration enthalpies of
                M²⁺ ions across the first row (Sc to Zn), why might you expect them not to fall on a
                smooth curve?
              </p>
              <details className="lrn-predict-reveal">
                <summary>Check your thinking</summary>
                <p>{`A smooth trend would arise if only ionic radius and charge matter. But d electrons in partially filled shells gain extra stabilization from the crystal field (LFSE). Ions with large LFSE (e.g. V²⁺, Ni²⁺) have larger hydration enthalpies than the smooth trend predicts. Ions with zero LFSE (Ca²⁺, Mn²⁺ high-spin, Zn²⁺) fall exactly on the smooth reference line. The result is two "humps" above the reference line.`}</p>
              </details>
            </div>

            <h3>Double-Hump Curves</h3>
            <p>{`Plot the lattice energies or hydration enthalpies of MCl₂ salts across the first row. Connect d⁰ (Ca²⁺), d⁵ high-spin (Mn²⁺), and d¹⁰ (Zn²⁺) with a straight line, these have LFSE = 0. All other ions lie above this line. The deviation equals the LFSE. Two peaks appear: one around V²⁺/Cr²⁺ (d³/d⁴) and one around Ni²⁺ (d⁸). This double-hump shape is a direct thermodynamic fingerprint of LFSE.`}</p>
            <p>{`LFSE is only about 10% of the total hydration enthalpy. The bulk of the energy comes from electrostatic attraction between the ion and the water dipoles. But the 10% from LFSE is large enough to produce the visible double-hump deviation.`}</p>
            <LFSEDoubleHumpViz />

            <h3>The Formation Constant K_f</h3>
            <p>{`A stability constant measures how tightly ligands bind a metal ion. It is also called the formation constant, written K_f. It is the equilibrium constant for the metal binding its ligands. A large K_f means the complex forms easily and holds together well. A small K_f means the complex falls apart easily. Chelate complexes have larger K_f than similar monodentate complexes, so they are more stable.`}</p>

            <h3>The Irving-Williams Series</h3>
            <p>{`Formation constants of M²⁺ complexes with a given ligand (such as EDTA or en) follow the order Mn < Fe < Co < Ni < Cu > Zn. This is the Irving-Williams series. The increase from Mn to Cu reflects mainly the rising effective nuclear charge (Z_eff, the net pull the nucleus exerts on the binding electrons) as the d shell fills. The drop from Cu to Zn happens because Zn²⁺ (d¹⁰) loses all LFSE.`}</p>
            <p>{`Cu²⁺ sits unusually high, even higher than Ni²⁺. The Jahn-Teller elongation in Cu²⁺ (d⁹) creates four short, very strong Cu-N bonds in the equatorial plane and two weaker axial bonds. The four short bonds add a lot of stability.`}</p>
            <IrvingWilliamsViz />

            <div className="lrn-elaborate">
              <p>
                <strong>Why does Cu²⁺ sit above Ni²⁺?</strong> Ni²⁺ is d⁸ with no electronic
                degeneracy. Cu²⁺ is d⁹ and Jahn-Teller active. In an octahedral N-donor complex, the
                Jahn-Teller distortion elongates the two axial bonds and shortens the four
                equatorial bonds. The four short Cu-N bonds are stronger than equivalent Ni-N bonds
                because of the extra electrostatic and covalent effects concentrated in the
                equatorial plane. This is why stability constants for Cu²⁺ complexes exceed those of
                Ni²⁺.
              </p>
            </div>

            <h3>Oxidation State Stability in Water</h3>
            <p>{`Standard reduction potentials E°(M³⁺/M²⁺) change across the first row. The Mn³⁺/Mn²⁺ couple is +1.51 V, so Mn³⁺ strongly oxidizes. Fe³⁺/Fe²⁺ is +0.77 V. Co³⁺/Co²⁺ is +1.92 V. So Co³⁺ is a powerful oxidizer in water, but strong-field ligands hold it stable. The trend in E° tracks the third ionization energy IE₃. A higher IE₃ means it is harder to reach the +3 state.`}</p>

            <div className="lrn-self-explain">
              <p>
                <strong>Self-explain:</strong> A series of M(en)₃²⁺ complexes follows the
                Irving-Williams order. Why does the stability constant reach a maximum at Cu²⁺ and
                then drop at Zn²⁺?
              </p>
              <details className="lrn-self-explain-reveal">
                <summary>Expert explanation</summary>
                <p>{`From Mn²⁺ to Cu²⁺, the effective nuclear charge increases as the d shell fills but provides poor shielding. Ions bind the en ligands more tightly. At Cu²⁺ the Jahn-Teller effect adds extra bond strength for the four equatorial N-donors. At Zn²⁺ (d¹⁰), the d shell is full. The LFSE = 0 (no crystal field stabilization). Also, full d shells screen the nucleus effectively, reducing the effective nuclear charge felt by ligands. Both effects reduce the stability constant back below Cu²⁺.`}</p>
              </details>
            </div>
          </div>
        </>
      ]
    },

    practice: [
      {
        q: 'What is the electron configuration of Cr, and why does it differ from the expected [Ar] 3d⁴ 4s²?',
        a: 'Cr is [Ar] 3d⁵ 4s¹. A half-filled 3d subshell gains extra exchange-energy stability because every electron can exchange with every other electron of the same spin. This stabilization exceeds the cost of promoting one electron from 4s to 3d.'
      },
      {
        q: 'Calculate the oxidation state of Pt in [Pt(en)₂Cl₂]²⁺.',
        a: 'Each en ligand is neutral (charge 0). Each Cl⁻ is −1, so two chlorides give −2. The whole complex carries +2. Set up the balance: Pt + 0 + 0 + (−2) = +2. Solve: Pt = +2 + 2 = +4. Platinum is in the +4 oxidation state. The high charge fits Pt(IV), which forms stable octahedral complexes.'
      },
      {
        q: 'State the difference between a structural isomer and a stereoisomer. Give one example of each for cobalt(III) complexes.',
        a: 'Structural isomers have the same formula but different atom connectivity. Stereoisomers have the same connectivity but different spatial arrangement. Structural example: [Co(NH₃)₅Cl]Br₂ (chlorido in sphere, bromide outside) vs. [Co(NH₃)₅Br]ClBr (ionization isomer). Stereoisomer example: cis-[Co(en)₂Cl₂]⁺ (two Cl adjacent) vs. trans-[Co(en)₂Cl₂]⁺ (two Cl opposite).'
      },
      {
        q: 'An octahedral d⁶ complex absorbs light at 490 nm. Calculate Δ_o in kJ·mol⁻¹. (h = 6.626×10⁻³⁴ J·s, c = 2.998×10⁸ m·s⁻¹, N_A = 6.022×10²³ mol⁻¹)',
        a: `Step 1: Convert the wavelength. λ = 490 nm = 490 × 10⁻⁹ m. Step 2: Find the energy of one photon. E = hc/λ = (6.626×10⁻³⁴ × 2.998×10⁸) / (490×10⁻⁹) = 4.05×10⁻¹⁹ J. Step 3: Scale to one mole. Δ_o = N_A × E = 6.022×10²³ × 4.05×10⁻¹⁹ = 2.44×10⁵ J·mol⁻¹ = 244 kJ·mol⁻¹. Why: the photon energy equals the t₂g → e_g gap, so this is Δ_o per mole.`
      },
      {
        q: 'Predict whether [Fe(H₂O)₆]²⁺ is high-spin or low-spin. State the number of unpaired electrons and whether it is paramagnetic or diamagnetic.',
        a: 'Fe²⁺ is d⁶. H₂O is a weak-field ligand, so Δ_o < pairing energy. This gives high-spin: t₂g⁴ e_g². Count unpaired electrons. Fill all five orbitals singly first (5 electrons), then the sixth electron pairs in one t₂g orbital. That leaves two t₂g orbitals singly filled and both e_g orbitals singly filled. Total: 4 unpaired electrons. The complex is paramagnetic. μ(spin-only) = √(4×6) = √24 = 4.90 μ_B.'
      },
      {
        q: 'Why are tetrahedral complexes always high-spin?',
        a: 'The tetrahedral crystal field splitting is $\\Delta_t = \\tfrac{4}{9}\\Delta_o$. This is only about 44% of the equivalent octahedral splitting. Typical pairing energies for first-row transition metals are 15 000–25 000 cm⁻¹. Even the strongest ligands do not make Δ_t exceed the pairing energy. Therefore electrons always spread across all d orbitals rather than pair up, making all tetrahedral complexes high-spin.'
      },
      {
        q: 'Calculate CFSE for a d⁵ high-spin octahedral complex. Include units.',
        a: 'd⁵ high-spin: t₂g³ e_g². CFSE = 3 × (−0.4Δ_o) + 2 × (+0.6Δ_o) = −1.2Δ_o + 1.2Δ_o = 0. CFSE = 0. High-spin d⁵ is completely spherically symmetric (all five d orbitals each singly occupied). There is no energetic preference for the octahedral crystal field. This is why Mn²⁺ (d⁵ high-spin) falls on the reference line in double-hump thermodynamic plots.'
      },
      {
        q: 'A complex [Co(CN)₆]³⁻ has Co³⁺ (d⁶) with strong-field CN⁻. Predict: (a) spin state, (b) number of unpaired electrons, (c) spin-only magnetic moment, (d) approximate color.',
        a: '(a) CN⁻ is strong-field. Δ_o > pairing energy → low-spin. (b) Low-spin d⁶: t₂g⁶ e_g⁰. All electrons paired. Zero unpaired electrons. (c) μ(spin-only) = √(0×2) = 0 μ_B. Diamagnetic. (d) To absorb visible light, the t₂g → e_g gap must lie in the visible range. CN⁻ complexes of Co³⁺ typically absorb around 300–370 nm (UV), so [Co(CN)₆]³⁻ appears pale yellow or colorless.'
      },
      {
        q: 'Explain why d-d transitions are observed at all, even though they are Laporte-forbidden in octahedral complexes.',
        a: 'The Laporte rule forbids g → g transitions (d-d in an octahedral complex with inversion center). However, molecular vibrations of the complex temporarily distort it from perfect octahedral symmetry, mixing some p character into the d orbitals. This "vibronic coupling" breaks the strict Laporte rule partially. The transitions occur, but they remain weak (ε_max typically 1–100 dm³ mol⁻¹ cm⁻¹). In tetrahedral complexes (no inversion center), d-d transitions are stronger (ε_max up to 1000) because p-d mixing is allowed by the lower symmetry.'
      },
      {
        q: 'Why is MnO₄⁻ intensely purple even though Mn⁷⁺ has no d electrons?',
        a: 'In MnO₄⁻, Mn is +7 with a d⁰ configuration, no d electrons for d-d transitions. The intense purple color comes from ligand-to-metal charge transfer (LMCT): an electron from a filled oxide π orbital jumps to an empty metal d orbital. This is a fully allowed transition (ligand p orbital → metal d orbital, Δl = +1 by Laporte). The molar absorptivity ε_max is enormous (~2000 dm³ mol⁻¹ cm⁻¹). Even a very dilute solution is deeply colored.'
      },
      {
        q: 'Use the spin-only formula to predict μ_eff for [Mn(H₂O)₆]²⁺. Is the formula likely to give an accurate result for this complex?',
        a: 'Mn²⁺ is d⁵ high-spin. Five unpaired electrons. μ(spin-only) = √(5×7) = √35 = 5.92 μ_B. For first-row transition metals, the spin-only formula works well because the crystal field quenches most orbital angular momentum. In high-spin d⁵, each d orbital holds exactly one electron, so the orbital contribution is near zero. The formula gives an accurate result here. Observed values are typically 5.65–5.90 μ_B.'
      },
      {
        q: 'Transfer question: A chemist wants to make a complex with the maximum possible CFSE using a d³ metal ion. Should they use an octahedral or tetrahedral geometry? Justify using CFSE numbers.',
        a: 'Use octahedral. For d³ octahedral (high-spin): t₂g³ e_g⁰. CFSE = 3 × (−0.4Δ_o) = −1.2Δ_o. For d³ tetrahedral: the lower-energy e set has two orbitals, and the higher-energy t₂ set has three. d³ tetrahedral places 2 electrons in e and 1 in t₂: CFSE = 2 × (−0.6Δ_t) + 1 × (+0.4Δ_t) = −0.8Δ_t. Substituting $\\Delta_t = \\tfrac{4}{9}\\Delta_o$: CFSE_tet = −0.8 × $\\tfrac{4}{9}$Δ_o = −0.356Δ_o. Octahedral CFSE (−1.2Δ_o) is more than three times larger. Always choose octahedral for maximum CFSE with d³.'
      },
      {
        q: 'Elaborate question: What does the Irving-Williams series reveal about the role of electronic structure in complex stability?',
        a: 'The Irving-Williams series (Mn < Fe < Co < Ni < Cu > Zn) shows that complex stability is not determined by electrostatics alone. Electrostatics would predict a steady increase across the row as Z increases. Instead, stability peaks at Cu²⁺ and drops at Zn²⁺. This reveals three electronic effects at work: (1) CFSE increases from Mn²⁺ to Ni²⁺ as the d shell fills and more electrons can sit in the lower t₂g set. (2) Cu²⁺ (d⁹) gains extra bond strength via Jahn-Teller shortening of equatorial bonds. (3) Zn²⁺ (d¹⁰) has a full d shell (LFSE = 0) and efficient d shielding, reducing effective nuclear charge and bond strength. The series is a direct window into how d-electron configuration modifies thermodynamic stability.'
      },
      {
        q: 'Error detection: A student writes the CFSE for d⁸ octahedral as −1.6Δ_o. Find and correct the error.',
        a: 'd⁸ octahedral configuration: t₂g⁶ e_g². Six electrons in t₂g and two in e_g. CFSE = 6 × (−0.4Δ_o) + 2 × (+0.6Δ_o) = −2.4Δ_o + 1.2Δ_o = −1.2Δ_o. The student likely confused d⁴ low-spin (t₂g⁴, CFSE = −1.6Δ_o + P) with d⁸. The correct CFSE for d⁸ octahedral is −1.2Δ_o.'
      },
      {
        q: 'Why does the Jahn-Teller theorem predict distortion for Cu²⁺ (d⁹) but not for Ni²⁺ (d⁸) in octahedral complexes?',
        a: 'The Jahn-Teller theorem applies only when there is a degenerate electronic ground state. Ni²⁺ (d⁸) has the configuration t₂g⁶ e_g². The two e_g electrons: can we place them symmetrically? e_g has two orbitals (d_z² and d_x²-y²). Two electrons in two orbitals: one in each by Hund. This gives d_z²¹ d_x²-y²¹, equal occupancy, no degeneracy, no Jahn-Teller distortion. Cu²⁺ (d⁹) has t₂g⁶ e_g³. Three electrons in two orbitals means one orbital has two electrons and one has one. Which orbital? Both choices are equivalent by symmetry → degenerate ground state → Jahn-Teller active → distortion lowers symmetry.'
      },
      {
        q: 'Transfer question: A bioinorganic chemist wants to use the color of a cobalt complex as a sensor for whether a protein binding site is tetrahedral or octahedral. How does geometry affect the color?',
        a: 'Geometry changes the crystal field splitting and therefore the energy of the absorbed photon and the observed color. For Co²⁺ (d⁷): octahedral complexes (e.g. [Co(H₂O)₆]²⁺) absorb in the red-infrared region and appear pink/red. Tetrahedral complexes (e.g. CoCl₄²⁻) have $\\Delta_t = \\tfrac{4}{9}\\Delta_o$, a much smaller splitting. The absorbed photon has lower energy (longer wavelength), typically in the red to near-IR. The tetrahedral complex appears deep blue because it absorbs red-orange light. The dramatic color change (pink/red → blue) signals a change in coordination geometry at the protein binding site.'
      },
      {
        q: 'Name the complex Na₂[CuCl₄] and identify any possible isomers.',
        a: 'Na⁺ carries +1 each. The complex anion [CuCl₄]²⁻: four Cl⁻ (−1 each, total −4) + Cu = −2 → Cu = +2. Name: sodium tetrachloridocuprate(II). [CuCl₄]²⁻ can be tetrahedral or square planar. In real samples it sits between the two as a flattened tetrahedron. So it does not give a clean pair of isomers.'
      }
    ],

    reference: {
      category: 'Quick Reference',
      title: 'Coordination and Transition-Metal Chemistry',
      sections: [
        <>
          <div className="ref-section">
            <h2>Hero Equations</h2>
            <div className="ref-formula">
              <div className="ref-formula-name">
                Ligand field splitting from absorption wavelength
              </div>
              <div className="ref-formula-eq">{`$$\\Delta_o = N_A \\dfrac{hc}{\\lambda}$$`}</div>
              <div className="ref-formula-desc">
                When to use: convert an absorption maximum wavelength (in m) to Δ_o in J·mol⁻¹ or
                kJ·mol⁻¹. N_A = 6.022×10²³ mol⁻¹, h = 6.626×10⁻³⁴ J·s, c = 2.998×10⁸ m·s⁻¹.
              </div>
            </div>
            <div className="ref-formula">
              <div className="ref-formula-name">
                Octahedral d-orbital energies (barycentre reference)
              </div>
              <div className="ref-formula-eq">{`$$e_g: +\\tfrac{3}{5}\\Delta_o \\quad t_{2g}: -\\tfrac{2}{5}\\Delta_o$$`}</div>
              <div className="ref-formula-desc">
                When to use: computing CFSE. Each t₂g electron contributes −0.4Δ_o; each e_g
                electron contributes +0.6Δ_o. Net must sum to zero.
              </div>
            </div>
            <div className="ref-formula">
              <div className="ref-formula-name">Tetrahedral vs. octahedral splitting</div>
              <div className="ref-formula-eq">{`$$\\Delta_t = \\dfrac{4}{9}\\,\\Delta_o$$`}</div>
              <div className="ref-formula-desc">
                When to use: comparing a tetrahedral complex to its octahedral equivalent, or
                justifying why tetrahedral complexes are always high-spin.
              </div>
            </div>
            <div className="ref-formula">
              <div className="ref-formula-name">Spin-only magnetic moment</div>
              <div className="ref-formula-eq">{`$$\\mu_{\\text{spin-only}} = \\sqrt{n(n+2)}\\;\\mu_B$$`}</div>
              <div className="ref-formula-desc">
                When to use: first-row transition metal complexes where orbital angular momentum is
                quenched. n = number of unpaired electrons.
              </div>
            </div>
            <div className="ref-formula">
              <div className="ref-formula-name">Formation (stability) constant</div>
              <div className="ref-formula-eq">{`$$K_f = \\dfrac{[\\text{complex}]}{[\\text{metal ion}]\\,[\\text{ligand}]^n}$$`}</div>
              <div className="ref-formula-desc">
                When to use: comparing how tightly ligands bind a metal ion. A large K_f means the
                complex forms readily and is very stable. Chelate complexes have larger K_f than
                similar monodentate complexes.
              </div>
            </div>
          </div>
        </>,

        <>
          <div className="ref-section">
            <h2>Spectrochemical Series</h2>
            <div className="lrn-insight">
              <span className="lrn-insight-label">
                Weak-field to strong-field (increases Δ_o left to right)
              </span>
              <p>{`I⁻ < Br⁻ < SCN⁻ ≈ Cl⁻ < F⁻ < [OH]⁻ < [ox]²⁻ ≈ H₂O < [NCS]⁻ < NH₃ < en < bpy < phen < [CN]⁻ ≈ CO`}</p>
            </div>
            <p>{`Mnemonic: "I Broke Cl's Floor: OH Water NH₃ EN-tered BPy PHen. CN CO."  π-donors (I⁻–Cl⁻) are weak-field; pure σ-donors (H₂O–en) are moderate; π-acceptors (CN⁻, CO) are strong-field.`}</p>
          </div>
        </>,

        <>
          <div className="ref-section">
            <h2>d-Electron Configurations: Octahedral</h2>
            <table>
              <thead>
                <tr>
                  <th>d^n</th>
                  <th>High-spin config.</th>
                  <th>Unpaired (HS)</th>
                  <th>Low-spin config.</th>
                  <th>Unpaired (LS)</th>
                  <th>CFSE (HS)</th>
                  <th>CFSE (LS)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>d⁰</td>
                  <td>, </td>
                  <td>0</td>
                  <td>, </td>
                  <td>0</td>
                  <td>0</td>
                  <td>0</td>
                </tr>
                <tr>
                  <td>d¹</td>
                  <td>t₂g¹</td>
                  <td>1</td>
                  <td>t₂g¹</td>
                  <td>1</td>
                  <td>{`$-0.4\\Delta_o$`}</td>
                  <td>{`$-0.4\\Delta_o$`}</td>
                </tr>
                <tr>
                  <td>d²</td>
                  <td>t₂g²</td>
                  <td>2</td>
                  <td>t₂g²</td>
                  <td>2</td>
                  <td>{`$-0.8\\Delta_o$`}</td>
                  <td>{`$-0.8\\Delta_o$`}</td>
                </tr>
                <tr>
                  <td>d³</td>
                  <td>t₂g³</td>
                  <td>3</td>
                  <td>t₂g³</td>
                  <td>3</td>
                  <td>{`$-1.2\\Delta_o$`}</td>
                  <td>{`$-1.2\\Delta_o$`}</td>
                </tr>
                <tr>
                  <td>d⁴</td>
                  <td>t₂g³e_g¹</td>
                  <td>4</td>
                  <td>t₂g⁴</td>
                  <td>2</td>
                  <td>{`$-0.6\\Delta_o$`}</td>
                  <td>{`$-1.6\\Delta_o + P$`}</td>
                </tr>
                <tr>
                  <td>d⁵</td>
                  <td>t₂g³e_g²</td>
                  <td>5</td>
                  <td>t₂g⁵</td>
                  <td>1</td>
                  <td>0</td>
                  <td>{`$-2.0\\Delta_o + 2P$`}</td>
                </tr>
                <tr>
                  <td>d⁶</td>
                  <td>t₂g⁴e_g²</td>
                  <td>4</td>
                  <td>t₂g⁶</td>
                  <td>0</td>
                  <td>{`$-0.4\\Delta_o$`}</td>
                  <td>{`$-2.4\\Delta_o + 2P$`}</td>
                </tr>
                <tr>
                  <td>d⁷</td>
                  <td>t₂g⁵e_g²</td>
                  <td>3</td>
                  <td>t₂g⁶e_g¹</td>
                  <td>1</td>
                  <td>{`$-0.8\\Delta_o$`}</td>
                  <td>{`$-1.8\\Delta_o + P$`}</td>
                </tr>
                <tr>
                  <td>d⁸</td>
                  <td>t₂g⁶e_g²</td>
                  <td>2</td>
                  <td>t₂g⁶e_g²</td>
                  <td>2</td>
                  <td>{`$-1.2\\Delta_o$`}</td>
                  <td>{`$-1.2\\Delta_o$`}</td>
                </tr>
                <tr>
                  <td>d⁹</td>
                  <td>t₂g⁶e_g³</td>
                  <td>1</td>
                  <td>t₂g⁶e_g³</td>
                  <td>1</td>
                  <td>{`$-0.6\\Delta_o$`}</td>
                  <td>{`$-0.6\\Delta_o$`}</td>
                </tr>
                <tr>
                  <td>d¹⁰</td>
                  <td>t₂g⁶e_g⁴</td>
                  <td>0</td>
                  <td>t₂g⁶e_g⁴</td>
                  <td>0</td>
                  <td>0</td>
                  <td>0</td>
                </tr>
              </tbody>
            </table>
          </div>
        </>,

        <>
          <div className="ref-section">
            <h2>Naming Quick Reference</h2>
            <h3>Common Ligand Names</h3>
            <table>
              <thead>
                <tr>
                  <th>Formula</th>
                  <th>Ligand name</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>H₂O</td>
                  <td>aqua</td>
                </tr>
                <tr>
                  <td>NH₃</td>
                  <td>ammine</td>
                </tr>
                <tr>
                  <td>CO</td>
                  <td>carbonyl</td>
                </tr>
                <tr>
                  <td>Cl⁻</td>
                  <td>chlorido</td>
                </tr>
                <tr>
                  <td>CN⁻</td>
                  <td>cyanido</td>
                </tr>
                <tr>
                  <td>OH⁻</td>
                  <td>hydroxido</td>
                </tr>
                <tr>
                  <td>[ox]²⁻</td>
                  <td>oxalato</td>
                </tr>
              </tbody>
            </table>
            <h3>Anion Endings and Count Prefixes</h3>
            <ul className="lrn-list">
              <li>{`Anionic ligands ending in -ide become -ido (chloride → chlorido).`}</li>
              <li>{`Anionic ligands ending in -ate or -ite become -ato or -ito (oxalate → oxalato).`}</li>
              <li>{`Count prefixes: di, tri, tetra, penta, hexa. Use bis, tris, tetrakis for ligands that already have a prefix.`}</li>
            </ul>
            <h3>Latin Stems for Anionic Complexes</h3>
            <ul className="lrn-list">
              <li>{`iron → ferrate, copper → cuprate, gold → aurate.`}</li>
              <li>{`silver → argentate, tin → stannate, lead → plumbate.`}</li>
            </ul>
          </div>
        </>,

        <>
          <div className="ref-section">
            <h2>Key Concepts Summary</h2>
            <ul className="lrn-list">
              <li>{`Coordination complexes = metal ion (Lewis acid) + ligands (Lewis bases). Coordination sphere in square brackets.`}</li>
              <li>{`Crystal field splitting: octahedral gives t₂g (−0.4Δ_o) below e_g (+0.6Δ_o). Tetrahedral splitting $\\Delta_t = \\tfrac{4}{9}\\Delta_o$, inverted pattern, always high-spin.`}</li>
              <li>{`High-spin (Δ_o < P) vs. low-spin (Δ_o > P): only matters for d⁴–d⁷.`}</li>
              <li>{`Spectrochemical series: I⁻ (weak-field) → CO (strong-field). π-donors weaken field; π-acceptors strengthen it.`}</li>
              <li>{`Color: absorbed wavelength = crystal field transition energy. Observed color = complementary. CT transitions (LMCT/MLCT) are very intense (ε up to 50 000).`}</li>
              <li>{`Magnetic moment: μ_spin-only = √[n(n+2)] μ_B. Works well for first-row metals.`}</li>
              <li>{`π-acceptor ligands (CO, CN⁻) make a strong field; π-donor halides make a weak field.`}</li>
              <li>{`Formation constant K_f: larger K_f means a more stable complex. Chelates beat monodentate ligands.`}</li>
              <li>{`Irving-Williams series: Mn < Fe < Co < Ni < Cu > Zn. Peak at Cu²⁺.`}</li>
              <li>{`Jahn-Teller distortion: d⁹ and high-spin d⁴ in an octahedral field distort to remove the degeneracy.`}</li>
            </ul>
          </div>
        </>
      ]
    },

    customCss: null
  }
  return config
}

export default function CoordinationAndTransitionMetalChemistry() {
  const config = useConfig()
  return <LearningTemplate config={config} />
}
