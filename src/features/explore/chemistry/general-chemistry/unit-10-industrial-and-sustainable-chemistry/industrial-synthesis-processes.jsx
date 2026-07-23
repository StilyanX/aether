import { LearningTemplate } from '../../../../../components/learning/learning-template'
import {
  DownsCellViz,
  HaberProcessViz,
  HaberYieldViz,
  OstwaldProcessViz,
  ClausProcessViz,
  ContactProcessViz,
  ContactConversionViz,
  VanadiumCatalyticCycleViz,
  ZoneRefiningViz,
  LeadAcidBatteryViz,
  SilicateSharingViz,
  AirDistillationViz,
  CatalyticConverterViz,
  CathodicProtectionViz,
  EquilibriumKineticsCrossoverViz
} from '../../../../../components/viz'

function useConfig() {
  const config = {
    cssPrefix: 'chem-industrial',
    documentTitle: 'Industrial Synthesis Processes - AETHER',
    learning: {
      groupTitle: 'Industrial and Sustainable Chemistry',
      category: 'Unit 10',
      title: 'Industrial Synthesis Processes',
      subtitle:
        'Large-scale synthesis of inorganic and organic chemicals, from nitrogen fixation and sulfuric acid to aluminium smelting, platinum-group catalysis, and energy materials.',
      sections: [
        <>
          <div className="lrn-section" id="lrn-section-0">
            <h2>Periodic Trends and Special Effects in Main-Group Elements</h2>
            <div className="lrn-predict">
              <span className="lrn-predict-label">PREDICT</span>
              <p>
                Tin forms stable SnCl₂ but lead prefers PbCl₂ over PbCl₄. Why do heavier elements
                choose lower oxidation states?
              </p>
              <details className="lrn-predict-reveal">
                <summary>Check your thinking</summary>
                <p>
                  Relativistic contraction of the 6s orbital stabilises the 6s² pair in heavy
                  elements. The energy cost of ionising those two electrons is not recovered by the
                  bonds formed, so the element prefers to leave them alone and use only the p
                  electrons.
                </p>
              </details>
            </div>
            <p>
              Main-group elements show predictable trends down each group. Atomic radius increases,
              ionisation energy drops, and electronegativity falls. But three special effects bend
              these rules for heavier elements.
            </p>
            <p>
              <strong>Diagonal relationships</strong> occur when elements in adjacent groups and
              periods share similar properties. Lithium resembles magnesium, beryllium resembles
              aluminium, and boron resembles silicon. Their similar charge densities drive this
              similarity.
            </p>
            <p>
              <strong>The inert pair effect</strong> means heavier p-block elements prefer oxidation
              states two lower than their group number. Tin favours +2 over +4. Lead strongly
              favours +2. Thallium favours +1 over +3. The two outer s electrons become reluctant to
              bond.
            </p>
            <div className="lrn-elaborate">
              <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
              <p>
                Relativistic effects cause the 6s orbital to contract and stabilise at lower energy
                in heavy elements. That stabilised s pair resists ionisation. So the two s electrons
                behave as chemically inert in heavy atoms.
              </p>
            </div>
            <p>
              <strong>Relativistic effects</strong> shrink and stabilise s and p½ orbitals in
              elements beyond period 5. Gold's yellow colour, mercury's liquid state at room
              temperature, and lead's preference for +2 all trace back to this quantum mechanical
              stabilisation.
            </p>
            <div className="lrn-self-explain">
              <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
              <p>
                Why does the inert pair effect grow stronger going down a group rather than staying
                constant?
              </p>
              <details className="lrn-predict-reveal">
                <summary>Expert explanation</summary>
                <p>
                  The relativistic contraction of s orbitals scales with atomic number squared. As
                  you go down the group, the nuclear charge grows and the relativistic stabilisation
                  of the 6s pair becomes larger, making it progressively harder to ionise those
                  electrons.
                </p>
              </details>
            </div>
            <div className="lrn-compare">
              <p>
                <strong>Inert pair effect vs. normal group trends</strong>, lighter elements (C,
                Si) readily reach their group oxidation state; heavier elements (Pb, Tl, Bi) do not
                because relativistic s-orbital contraction grows with atomic number.
              </p>
            </div>
          </div>
        </>,
        <>
          <div className="lrn-section" id="lrn-section-1">
            <h2>Hydrogen: Industrial Production and the Hydrogen Economy</h2>
            <div className="lrn-predict">
              <span className="lrn-predict-label">PREDICT</span>
              <p>
                Steam and methane react at high temperature. What products form, and why does this
                reaction need a catalyst?
              </p>
              <details className="lrn-predict-reveal">
                <summary>Check your thinking</summary>
                <p>
                  The products are CO and H₂ (syngas). Without a nickel catalyst the activation
                  energy is too high for practical reaction rates at 700–900 °C.
                </p>
              </details>
            </div>
            <p>
              Hydrogen is the simplest element but one of the most important industrial feedstocks.
              Pure hydrogen is not abundant on Earth. Industry makes it from fossil fuels or water.
            </p>
            <h3>Steam Reforming</h3>
            <p>
              Steam reforming converts methane and steam into hydrogen and carbon monoxide. The
              reaction runs over a nickel catalyst at 700–900 °C.
            </p>
            <div className="lrn-eq">
              <span>{`$$\\text{CH}_4 + \\text{H}_2\\text{O} \\rightarrow \\text{CO} + 3\\text{H}_2$$`}</span>
            </div>
            <div className="lrn-elaborate">
              <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
              <p>
                This reaction is endothermic, so high temperature drives it forward. The nickel
                catalyst lowers the activation energy enough for the reaction to proceed at a
                practical rate.
              </p>
            </div>
            <h3>Water-Gas Shift Reaction</h3>
            <p>
              The carbon monoxide from steam reforming reacts with more steam to produce additional
              hydrogen and carbon dioxide.
            </p>
            <div className="lrn-eq">
              <span>{`$$\\text{CO} + \\text{H}_2\\text{O} \\rightarrow \\text{CO}_2 + \\text{H}_2$$`}</span>
            </div>
            <p>
              This step raises the hydrogen yield and reduces the CO content. The reaction runs over
              iron and copper catalysts in sequential stages at decreasing temperatures.
            </p>
            <div className="lrn-self-explain">
              <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
              <p>
                Why run the water-gas shift reaction in two separate temperature stages rather than
                one?
              </p>
              <details className="lrn-predict-reveal">
                <summary>Expert explanation</summary>
                <p>
                  The reaction is exothermic, so lower temperature gives higher equilibrium yield of
                  H₂. A high-temperature stage (Fe catalyst, ~350 °C) converts most CO quickly; a
                  low-temperature stage (Cu/ZnO, ~200 °C) pushes conversion above 99%. One stage
                  alone cannot optimise both rate and yield.
                </p>
              </details>
            </div>
            <h3>The Hydrogen Economy</h3>
            <p>
              The hydrogen economy is the vision of using hydrogen as a clean energy carrier.
              Hydrogen burns to produce only water. But most industrial hydrogen today comes from
              methane, which releases CO₂.
            </p>
            <p>
              True clean hydrogen requires electrolysis of water using renewable electricity. Cost
              remains the main barrier. Fuel cells convert hydrogen to electricity at high
              efficiency. Storage and transport remain engineering challenges.
            </p>
          </div>
        </>,
        <>
          <div className="lrn-section" id="lrn-section-2">
            <h2>Group 1: Alkali Metals</h2>
            <div className="lrn-predict">
              <span className="lrn-predict-label">PREDICT</span>
              <p>
                Sodium is far too reactive to extract with carbon reduction. What method must
                industry use instead, and why?
              </p>
              <details className="lrn-predict-reveal">
                <summary>Check your thinking</summary>
                <p>
                  Electrolysis of molten sodium chloride. The reduction potential of Na⁺ is too
                  negative for any chemical reductant to reduce it at practical temperatures. Only
                  electrical energy can supply enough driving force.
                </p>
              </details>
            </div>
            <h3>The Downs Process</h3>
            <p>
              The Downs process produces sodium metal by electrolysing molten sodium chloride. A
              second salt is added to lower the melting point.
            </p>
            <div className="lrn-eq">
              <span>{`$$2\\text{NaCl}_{(l)} \\rightarrow 2\\text{Na} + \\text{Cl}_2$$`}</span>
            </div>
            <p>
              Sodium forms at the steel cathode and floats up as a liquid. Chlorine gas forms at the
              graphite anode. A steel gauze separates them to prevent recombination.
            </p>
            <DownsCellViz />
            <div className="lrn-elaborate">
              <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
              <p>
                Why must the NaCl be molten rather than aqueous? In aqueous solution, water is
                easier to reduce than Na⁺, so hydrogen gas would form at the cathode instead of
                sodium metal.
              </p>
            </div>
            <div className="lrn-self-explain">
              <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
              <p>
                What is the role of the added salt in the Downs cell, and why is a separating gauze
                essential?
              </p>
              <details className="lrn-predict-reveal">
                <summary>Expert explanation</summary>
                <p>
                  The added salt (CaCl₂) lowers the melting point from 801 °C to about 600 °C,
                  reducing energy costs. The steel gauze physically separates liquid sodium from
                  chlorine gas, if they met, they would recombine spontaneously and the products
                  would be lost.
                </p>
              </details>
            </div>
            <h3>The Chloralkali Process</h3>
            <p>
              The chloralkali process electrolyses aqueous sodium chloride (brine). It produces
              chlorine gas, hydrogen gas, and sodium hydroxide solution.
            </p>
            <div className="lrn-eq">
              <span>{`$$2\\text{NaCl} + 2\\text{H}_2\\text{O} \\rightarrow \\text{Cl}_2 + \\text{H}_2 + 2\\text{NaOH}$$`}</span>
            </div>
            <p>
              Modern plants use membrane cells. A permselective membrane lets Na⁺ ions pass but
              blocks Cl⁻ and OH⁻. This keeps the products separate and pure.
            </p>
            <div className="lrn-compare">
              <p>
                <strong>Membrane cell vs. mercury cell</strong>, membrane cells are the modern
                standard because the mercury cell uses liquid mercury as cathode and produces sodium
                amalgam, raising severe toxicity and environmental hazard; membrane cells eliminate
                mercury entirely.
              </p>
            </div>
            <div className="lrn-compare">
              <p>
                <strong>Downs process vs. chloralkali</strong>, Downs uses molten NaCl to yield Na
                metal; chloralkali uses aqueous NaCl to yield NaOH and Cl₂.
              </p>
            </div>
            <h3>Uses of NaOH and Na₂CO₃</h3>
            <p>
              Sodium hydroxide is used in paper manufacture, textile processing, soap and detergent
              production, and alumina refining. Sodium carbonate (soda ash) is used in glass
              manufacture, water softening, and as a builder in detergents.
            </p>
          </div>
        </>,
        <>
          <div className="lrn-section" id="lrn-section-3">
            <h2>Group 2: Alkaline Earth Metals</h2>
            <div className="lrn-predict">
              <span className="lrn-predict-label">PREDICT</span>
              <p>
                Limestone is calcium carbonate. Builders need a reactive calcium compound that sets
                hard. What single step converts limestone into something useful?
              </p>
              <details className="lrn-predict-reveal">
                <summary>Check your thinking</summary>
                <p>
                  Heating above 900 °C decomposes CaCO₃ to quicklime (CaO), which reacts vigorously
                  with water to form slaked lime Ca(OH)₂, the basis of mortar and plaster.
                </p>
              </details>
            </div>
            <h3>Quicklime and Slaked Lime</h3>
            <p>
              Heating limestone above 900 °C decomposes it to quicklime (calcium oxide) and carbon
              dioxide.
            </p>
            <div className="lrn-eq">
              <span>{`$$\\text{CaCO}_3 \\rightarrow \\text{CaO} + \\text{CO}_2 \\quad (900\\ °\\text{C})$$`}</span>
            </div>
            <p>
              Adding water to quicklime gives slaked lime (calcium hydroxide) in a vigorous
              exothermic reaction.
            </p>
            <div className="lrn-eq">
              <span>{`$$\\text{CaO} + \\text{H}_2\\text{O} \\rightarrow \\text{Ca(OH)}_2$$`}</span>
            </div>
            <p>
              Slaked lime is used in soil treatment, water treatment, paper making, and as a plaster
              base. Quicklime is used in steelmaking to remove silica impurities as slag.
            </p>
            <div className="lrn-self-explain">
              <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
              <p>
                Why does the production of quicklime require such a high temperature, even though
                CaCO₃ looks easy to decompose?
              </p>
              <details className="lrn-predict-reveal">
                <summary>Expert explanation</summary>
                <p>
                  The decomposition is endothermic and produces CO₂ gas. The equilibrium only shifts
                  to favour products when the CO₂ partial pressure exceeds atmospheric pressure,
                  which only happens above about 840 °C. Below that, the reverse reaction dominates.
                </p>
              </details>
            </div>
            <h3>MgO as a Refractory</h3>
            <p>
              Magnesium oxide has an extremely high melting point (~2800 °C). It resists heat
              without breaking down. Industry uses MgO bricks to line furnaces and kilns.
            </p>
            <div className="lrn-elaborate">
              <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
              <p>
                MgO's high melting point comes from the strong ionic lattice. Mg²⁺ is small and
                highly charged. The lattice energy is very large, so a huge amount of energy is
                needed to break it.
              </p>
            </div>
            <h3>Boron Mining</h3>
            <p>
              Boron minerals come mainly from evaporite deposits in California. The two main ores
              are borax ({`$\\text{Na}_2\\text{B}_4\\text{O}_7 \\cdot 10\\text{H}_2\\text{O}$`}) and
              kernite ({`$\\text{Na}_2\\text{B}_4\\text{O}_7 \\cdot 4\\text{H}_2\\text{O}$`}).
              Borosilicate glass (Pyrex) uses boron to reduce thermal expansion.
            </p>
          </div>
        </>,
        <>
          <div className="lrn-section" id="lrn-section-4">
            <h2>Group 13: Aluminium Extraction</h2>
            <div className="lrn-predict">
              <span className="lrn-predict-label">PREDICT</span>
              <p>
                Aluminium is very reactive. Carbon reduction works for iron. Why does it fail
                completely for aluminium?
              </p>
              <details className="lrn-predict-reveal">
                <summary>Check your thinking</summary>
                <p>
                  The standard reduction potential of Al³⁺/Al is −1.66 V, far more negative than any
                  carbon/CO couple at any practical temperature. Carbon cannot supply enough
                  reducing power to displace aluminium from its oxide.
                </p>
              </details>
            </div>
            <h3>The Bayer Process</h3>
            <p>
              The Bayer process refines bauxite ore into pure aluminium oxide (alumina). Bauxite
              contains aluminium oxide mixed with iron oxides, silica, and clay.
            </p>
            <p>
              Crushing the ore and dissolving it in hot concentrated sodium hydroxide at 150–240 °C
              selectively dissolves the aluminium:
            </p>
            <div className="lrn-eq">
              <span>{`$$\\text{Al}_2\\text{O}_3 + 2\\text{NaOH} + 3\\text{H}_2\\text{O} \\rightarrow 2\\text{Na[Al(OH)}_4]$$`}</span>
            </div>
            <p>
              Filtering removes undissolved iron and silica. Seeding the filtrate with aluminium
              hydroxide crystals makes Al(OH)₃ precipitate. Calcination at 1000 °C then converts it
              to pure alumina:
            </p>
            <div className="lrn-eq">
              <span>{`$$2\\text{Al(OH)}_3 \\rightarrow \\text{Al}_2\\text{O}_3 + 3\\text{H}_2\\text{O}$$`}</span>
            </div>
            <div className="lrn-elaborate">
              <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
              <p>
                The Bayer process works because Al₂O₃ is amphoteric. It dissolves in strong base but
                iron oxides do not. This chemical selectivity is the whole basis of the separation.
              </p>
            </div>
            <div className="lrn-self-explain">
              <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
              <p>
                Why must seeding with Al(OH)₃ crystals come before precipitation, rather than simply
                cooling the solution?
              </p>
              <details className="lrn-predict-reveal">
                <summary>Expert explanation</summary>
                <p>
                  The aluminate solution is supersaturated but nucleation is kinetically slow. Seed
                  crystals provide ready-made nucleation sites, causing rapid and controlled
                  precipitation of pure Al(OH)₃ with a defined particle size. Cooling alone gives
                  slow, poorly controlled precipitation.
                </p>
              </details>
            </div>
            <h3>The Hall-Héroult Process</h3>
            <p>
              The Hall-Héroult process electrolyses pure alumina dissolved in molten cryolite (
              {`$\\text{Na}_3\\text{AlF}_6$`}) at about 960 °C.
            </p>
            <div className="lrn-eq">
              <span>{`$$2\\text{Al}_2\\text{O}_3 \\rightarrow 4\\text{Al} + 3\\text{O}_2$$`}</span>
            </div>
            <p>
              At the cathode, Al³⁺ ions gain three electrons and form liquid aluminium that sinks to
              the bottom. At the carbon anode, oxide ions are oxidised to oxygen gas. The oxygen
              attacks the carbon anodes, so they must be replaced regularly.
            </p>
            <div className="lrn-elaborate">
              <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
              <p>
                Cryolite dissolves Al₂O₃ and lowers the operating temperature from Al₂O₃'s melting
                point of 2045 °C down to 960 °C. Without cryolite, the energy cost would be
                completely impractical.
              </p>
            </div>
            <div className="lrn-faded">
              <div className="lrn-faded-phase">
                <span className="lrn-faded-label">COMPLETE EXAMPLE</span>
                <p>
                  Hall-Héroult current path: Al³⁺ in cryolite melt → migrates to cathode → Al³⁺ +
                  3e⁻ → Al → liquid Al pools at cell bottom.
                </p>
              </div>
              <div className="lrn-faded-phase">
                <span className="lrn-faded-label">YOUR TURN, PARTIAL</span>
                <p>
                  At the anode: O²⁻ ions are oxidised to ___. These react with the carbon anode to
                  form ___, which is why anodes must be replaced regularly.
                </p>
              </div>
              <div className="lrn-faded-phase">
                <span className="lrn-faded-label">INDEPENDENT PRACTICE</span>
                <p>
                  Explain the full electrode reactions in your own words and state why the
                  Hall-Héroult cell consumes about 15 kWh of electricity per kilogram of aluminium
                  produced.
                </p>
              </div>
            </div>
            <div className="lrn-compare">
              <p>
                <strong>Hall-Héroult electrolysis vs. blast furnace reduction</strong>, carbon
                reduction works for iron because the Fe³⁺/Fe²⁺ couple lies above C/CO in the
                electrochemical series; Al³⁺ lies far below, so carbon cannot reduce Al₂O₃ thermally
                at any practical temperature.
              </p>
            </div>
            <h3>Boranes</h3>
            <p>
              Boron forms a series of electron-deficient hydrides called boranes. The simplest is
              diborane ({`$\\text{B}_2\\text{H}_6$`}). Boranes are used as rocket propellants and as
              reducing agents in synthesis. Their bonding uses three-centre two-electron bonds
              because boron has fewer electrons than bonds it forms.
            </p>
          </div>
        </>,
        <>
          <div className="lrn-section" id="lrn-section-5">
            <h2>Group 14: Carbon Allotropes and Silicon Extraction</h2>
            <div className="lrn-predict">
              <span className="lrn-predict-label">PREDICT</span>
              <p>
                Diamond and graphite are both pure carbon. Diamond is the hardest natural material.
                Graphite conducts electricity. How can the same element behave so differently?
              </p>
              <details className="lrn-predict-reveal">
                <summary>Check your thinking</summary>
                <p>
                  The bonding geometry differs completely. Diamond uses sp³ bonds in a 3D lattice
                  with no free electrons; graphite uses sp² bonds in layers with one delocalised
                  electron per carbon conducting through the sheets.
                </p>
              </details>
            </div>
            <h3>Carbon Allotropes</h3>
            <p>
              Carbon's allotropes differ by the type of bonding between atoms. Each structure gives
              completely different properties.
            </p>
            <p>
              <strong>Graphite</strong> has layers of hexagonal carbon rings. Within each layer, sp²
              carbon atoms form three covalent bonds. The fourth electron from each carbon moves
              freely through delocalised pi orbitals across the layer. This gives graphite its
              electrical conductivity and grey metallic lustre. Weak van der Waals forces between
              layers allow them to slide, making graphite soft and a good lubricant.
            </p>
            <p>
              <strong>Diamond</strong> has all four carbon electrons in sp³ sigma bonds, forming a
              rigid three-dimensional lattice. No free electrons exist. Diamond is the hardest
              natural material and an electrical insulator.
            </p>
            <p>
              <strong>Fullerenes</strong> are cage-shaped molecules. {`$\\text{C}_{60}$`}{' '}
              (buckminsterfullerene) has 12 pentagons and 20 hexagons, exactly like a football.{' '}
              {`$\\text{C}_{60}^{3-}$`} becomes a superconductor at low temperatures.
            </p>
            <p>
              <strong>Activated charcoal</strong> is amorphous carbon with a highly porous
              structure. Its enormous surface area (about {`$2000\\ \\text{m}^2\\text{/g}$`}) makes
              it effective for adsorption in gas masks and water purification.
            </p>
            <div className="lrn-compare">
              <p>
                <strong>Activated charcoal vs. CNT/fullerenes</strong>, activated charcoal is
                low-cost, amorphous, and works by surface adsorption in bulk industrial
                purification; carbon nanotubes and fullerenes are ordered, expensive nanostructures
                used for electronics, drug delivery, and materials research.
              </p>
            </div>
            <div className="lrn-self-explain">
              <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
              <p>
                Why does graphite conduct electricity but diamond does not, even though both are
                pure carbon?
              </p>
              <details className="lrn-predict-reveal">
                <summary>Expert explanation</summary>
                <p>
                  In graphite, each carbon contributes one electron to a delocalised pi system that
                  extends across each layer, these electrons carry current. In diamond, every
                  electron is locked in localised sp³ sigma bonds; there are no mobile charge
                  carriers.
                </p>
              </details>
            </div>
            <h3>Graphite Intercalation Compounds</h3>
            <p>
              Atoms or ions can insert between graphite layers to form graphite intercalation
              compounds (GICs). Potassium-GIC is a donor compound: potassium donates electrons to
              the graphite layers, making it an electrical conductor with metallic character.{' '}
              {`$\\text{CrO}_3$`}-GIC is an acceptor compound. Lithium-GIC ({`$\\text{LiC}_6$`}) is
              the anode material in lithium-ion batteries.
            </p>
            <h3>Zone Refining</h3>
            <p>
              Zone refining produces semiconductor-grade silicon and germanium. A short molten zone
              passes slowly along a silicon rod. Impurities are more soluble in the liquid than in
              the solid, so they dissolve into the molten zone and travel with it to one end of the
              rod. Repeating this pass drives impurities to lower than one part per billion,
              producing material pure enough for electronics.
            </p>
            <ZoneRefiningViz />
            <div className="lrn-elaborate">
              <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
              <p>
                The technique exploits the difference in impurity solubility between solid and
                liquid silicon. Impurities concentrate in the melt because the solid-liquid
                equilibrium always favours the liquid for foreign atoms with different bonding
                chemistry.
              </p>
            </div>
            <div className="lrn-self-explain">
              <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
              <p>
                Why must the molten zone move slowly, and what would happen if it moved too fast?
              </p>
              <details className="lrn-predict-reveal">
                <summary>Expert explanation</summary>
                <p>
                  Slow movement gives impurity atoms time to diffuse from the solid into the melt.
                  If the zone moves too fast, impurities are trapped in the solid before they can
                  migrate, and purification fails. The distribution coefficient only works when the
                  system approaches local equilibrium at the solid-liquid interface.
                </p>
              </details>
            </div>
            <h3>Extraction of Tin, Lead, and Germanium</h3>
            <p>
              Tin is extracted by carbon reduction of cassiterite ({`$\\text{SnO}_2$`}) in a
              furnace. Lead is extracted by roasting galena ({`$\\text{PbS}$`}) to the oxide, then
              reducing with carbon. Germanium is a byproduct of zinc smelting, purified by zone
              refining.
            </p>
            <div className="lrn-callout lrn-warning">
              <p>
                Lead is a neurotoxin. It accumulates in the body through the food chain and damages
                the nervous system, especially in children. Lead petrol additives were banned
                globally after decades of widespread use.
              </p>
            </div>
            <h3>The Lead-Acid Battery</h3>
            <p>
              The lead-acid battery powers the starter motor in almost every petrol vehicle. It uses
              lead and lead dioxide electrodes in sulfuric acid.
            </p>
            <div className="lrn-eq">
              <span>{`$$\\text{Pb} + \\text{PbO}_2 + 2\\text{H}_2\\text{SO}_4 \\rightarrow 2\\text{PbSO}_4 + 2\\text{H}_2\\text{O}$$`}</span>
            </div>
            <p>
              Discharging converts both electrodes to lead sulfate. Charging reverses this reaction.
              The cell voltage is about 2 V per cell; six cells in series give 12 V.
            </p>
            <LeadAcidBatteryViz />
            <div className="lrn-compare">
              <p>
                <strong>Pb-acid vs. Li-ion battery</strong>, lead-acid has low energy density but
                is cheap, robust, and fully recyclable; lithium-ion has much higher energy density
                but costs more and requires careful thermal management.
              </p>
            </div>
          </div>
        </>,
        <>
          <div className="lrn-section" id="lrn-section-6">
            <h2>Group 14: Silicates, Zeolites, and Portland Cement</h2>
            <div className="lrn-predict">
              <span className="lrn-predict-label">PREDICT</span>
              <p>
                Sand is SiO₂ and is extremely unreactive. Concrete is made partly from silicates and
                sets rock hard. How do simple silicate structures lead to such different materials?
              </p>
              <details className="lrn-predict-reveal">
                <summary>Check your thinking</summary>
                <p>
                  Different degrees of oxygen-sharing between SiO₄ tetrahedra build structures from
                  isolated ions to infinite 3D frameworks. Cement silicates hydrate to form
                  interlocking crystals, a completely different structure from unreactive quartz.
                </p>
              </details>
            </div>
            <h3>Silicate Structure Types</h3>
            <p>
              Silicates are built from {`$[\\text{SiO}_4]^{4-}$`} tetrahedra linked in different
              ways. The sharing of oxygen atoms between tetrahedra determines the structure type.
            </p>
            <ul className="lrn-list">
              <li>
                <strong>Orthosilicate</strong> {`$[\\text{SiO}_4]^{4-}$`}: isolated tetrahedra, no
                sharing. Found in olivine.
              </li>
              <li>
                <strong>Pyrosilicate</strong> {`$[\\text{Si}_2\\text{O}_7]^{6-}$`}: two tetrahedra
                share one oxygen corner.
              </li>
              <li>
                <strong>Cyclic silicates</strong>: three or six tetrahedra share corners to form
                rings, such as {`$[\\text{Si}_3\\text{O}_9]^{6-}$`} in benitoite.
              </li>
              <li>
                <strong>Chain silicates</strong>: tetrahedra share two corners in a continuous chain{' '}
                {`$[\\text{SiO}_3]^{2n-}$`}, as in pyroxenes.
              </li>
              <li>
                <strong>Sheet silicates</strong>: each tetrahedron shares three corners with
                neighbours, forming layers {`$[\\text{Si}_2\\text{O}_5]^{2n-}$`}. Micas and clays
                have sheet structures. Layers cleave easily.
              </li>
              <li>
                <strong>3D framework silicates</strong>: all four corners shared. The result is
                neutral SiO₂ (quartz) or, if Al substitutes for Si, negatively charged frameworks
                like feldspars.
              </li>
            </ul>
            <SilicateSharingViz />
            <div className="lrn-self-explain">
              <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
              <p>
                Why do sheet silicates cleave into thin flat layers, while 3D framework silicates
                like quartz are hard and isotropic?
              </p>
              <details className="lrn-predict-reveal">
                <summary>Expert explanation</summary>
                <p>
                  Sheet silicates have strong Si–O bonds within layers but only weak van der Waals
                  forces between layers. Cleavage breaks these weak bonds. In quartz, every oxygen
                  bridges two silicon atoms in all three dimensions, there is no plane of weakness,
                  so the crystal fractures conchoidally rather than cleaving.
                </p>
              </details>
            </div>
            <h3>Zeolites and Aluminosilicates</h3>
            <p>
              Zeolites are microporous aluminosilicate minerals with regular channel and cage
              structures. When Al replaces Si in the framework, the structure carries a negative
              charge. Cations (Na⁺, Ca²⁺) balance this charge and sit in the pores.
            </p>
            <p>
              Zeolites act as molecular sieves: they pass molecules smaller than their pore diameter
              and block larger ones. ZSM-5 zeolite is the key catalyst for catalytic cracking of
              petroleum. Its pore size selects for hydrocarbon chains of the right length.
            </p>
            <p>
              Zeolite-A (Linde A) replaces phosphate builders in laundry detergents. It
              ion-exchanges Ca²⁺ and Mg²⁺ from hard water, softening the water without the
              environmental harm of phosphates.
            </p>
            <div className="lrn-compare">
              <p>
                <strong>Zeolite-A vs. phosphate builders</strong>, phosphates are excellent water
                softeners but cause eutrophication (algal blooms) in rivers and lakes; zeolite-A
                exchanges hard water ions equally well and is environmentally harmless.
              </p>
            </div>
            <div className="lrn-elaborate">
              <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
              <p>
                The acid form of a zeolite (H-zeolite) is a solid acid catalyst. Protons sit in the
                cages. Hydrocarbon molecules entering the pores encounter Brønsted acid sites and
                undergo cracking, isomerisation, or alkylation reactions.
              </p>
            </div>
            <h3>Portland Cement</h3>
            <p>
              Portland cement is made by heating limestone and clay in a rotary kiln to high
              temperature. The products are calcium silicates and calcium aluminates. When water is
              added, these compounds hydrate and form interlocking crystals of calcium silicate
              hydrate, giving concrete its strength.
            </p>
          </div>
        </>,
        <>
          <div className="lrn-section" id="lrn-section-7">
            <h2>Group 14: Silicones, Carbides, CO/CO₂ Chemistry, and HCN Synthesis</h2>
            <div className="lrn-predict">
              <span className="lrn-predict-label">PREDICT</span>
              <p>
                Silicones are used in breast implants and engine gaskets. What property could make
                the same material suitable for both medical and high-temperature applications?
              </p>
              <details className="lrn-predict-reveal">
                <summary>Check your thinking</summary>
                <p>
                  The Si–O backbone is thermally stable and chemically inert. It does not react with
                  biological tissues (biocompatible) and resists degradation up to ~200 °C. Both
                  applications need stability, flexibility, and inertness.
                </p>
              </details>
            </div>
            <h3>Polysiloxane (Silicone) Synthesis</h3>
            <p>
              Silicones are polysiloxane polymers with alternating silicon-oxygen backbones and
              organic side groups. They are made by hydrolysing organodichlorosilanes, then
              condensing the products.
            </p>
            <p>Hydrolysis of dimethyldichlorosilane:</p>
            <div className="lrn-eq">
              <span>{`$$\\text{SiCl}_2(\\text{CH}_3)_2 + 2\\text{H}_2\\text{O} \\rightarrow \\text{Si(OH)}_2(\\text{CH}_3)_2 + 2\\text{HCl}$$`}</span>
            </div>
            <p>The diol then condenses to form a chain:</p>
            <div className="lrn-eq">
              <span>{`$$n\\ \\text{Si(OH)}_2(\\text{CH}_3)_2 \\rightarrow [\\text{Si(CH}_3)_2\\text{-O}]_n + n\\ \\text{H}_2\\text{O}$$`}</span>
            </div>
            <p>
              The Si-O backbone is very stable to heat because Si-O bonds are strong. The organic
              side groups give flexibility and hydrophobicity. Silicones are inert to biological
              tissues, making them biocompatible for implants, tubing, and medical devices.
            </p>
            <p>
              Difunctional monomers ({`$\\text{R}_2\\text{SiCl}_2$`}) form linear chains, these
              give oils and greases. Trifunctional monomers ({`$\\text{RSiCl}_3$`}) form branch
              points, these create network structures that give rubbers and resins. A higher ratio
              of trifunctional monomer increases cross-linking and stiffness.
            </p>
            <div className="lrn-self-explain">
              <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
              <p>
                Why does the ratio of trifunctional to difunctional silane monomer determine whether
                the product is an oil, rubber, or rigid resin?
              </p>
              <details className="lrn-predict-reveal">
                <summary>Expert explanation</summary>
                <p>
                  Difunctional monomers (R₂SiCl₂) each form exactly two Si–O bonds, building linear
                  chains. Trifunctional monomers (RSiCl₃) form three Si–O bonds, introducing
                  crosslinks between chains. More crosslinks raise the glass transition temperature
                  and stiffness, moving the material from oil → rubber → resin.
                </p>
              </details>
            </div>
            <h3>Carbides</h3>
            <p>
              Silicon carbide (SiC) is extremely hard and used as an abrasive. Calcium carbide (
              {`$\\text{CaC}_2$`}) reacts with water to produce acetylene gas used in welding.
            </p>
            <h3>CO and CO₂ Industrial Chemistry</h3>
            <p>
              Carbon monoxide is a reducing agent in blast furnace iron production. It also forms
              metal carbonyls, which are used to purify metals.
            </p>
            <p>
              Carbon dioxide also turns into a useful green solvent above its critical point. The
              Green and Sustainable Chemistry page covers supercritical CO₂ in full.
            </p>
            <h3>HCN Synthesis (Andrussow Process)</h3>
            <p>
              Hydrogen cyanide is produced industrially by the Andrussow process, reacting methane,
              ammonia, and oxygen over a platinum catalyst at 1000 °C.
            </p>
            <div className="lrn-eq">
              <span>{`$$2\\text{CH}_4 + 2\\text{NH}_3 + 3\\text{O}_2 \\rightarrow 2\\text{HCN} + 6\\text{H}_2\\text{O}$$`}</span>
            </div>
            <p>
              HCN is a feedstock for acrylonitrile, nylon, and acrylic plastics. It is extremely
              toxic; plants operate under strict containment.
            </p>
          </div>
        </>,
        <>
          <div className="lrn-section" id="lrn-section-8">
            <h2>Group 15: Nitrogen Chemistry and Fertiliser Production</h2>
            <div className="lrn-predict">
              <span className="lrn-predict-label">PREDICT</span>
              <p>
                78% of air is nitrogen gas, yet plants cannot use it directly. Why does converting
                atmospheric nitrogen to ammonia require such extreme industrial conditions?
              </p>
              <details className="lrn-predict-reveal">
                <summary>Check your thinking</summary>
                <p>
                  The N≡N triple bond has a bond energy of 945 kJ/mol, one of the strongest bonds
                  in chemistry. Breaking it requires a catalyst, high temperature, and high pressure
                  to get a practical reaction rate.
                </p>
              </details>
            </div>
            <h3>The Nitrogen Cycle</h3>
            <p>
              The nitrogen cycle describes how nitrogen moves through the environment. Atmospheric
              nitrogen gas (N₂) is fixed by bacteria, lightning, or industrial processes. Plants
              absorb fixed nitrogen as nitrate or ammonium ions. Animals eat plants. Decomposers
              return nitrogen to the soil and atmosphere.
            </p>
            <p>
              Industrial nitrogen fixation now produces more fixed nitrogen than all biological
              fixation combined. This supports the food supply for roughly half the world's current
              population.
            </p>
            <h3>The Haber Process</h3>
            <p>
              The Haber process converts atmospheric nitrogen and hydrogen to ammonia. The reaction
              is reversible and exothermic.
            </p>
            <div className="lrn-eq lrn-eq-hero">
              <span>{`$$\\text{N}_2 + 3\\text{H}_2 \\rightleftharpoons 2\\text{NH}_3 \\quad \\Delta H = -92\\ \\text{kJ mol}^{-1}$$`}</span>
            </div>
            <p>
              Conditions: iron catalyst with aluminium oxide and potassium oxide promoters, 400–500
              °C, 150–300 atm.
            </p>
            <HaberProcessViz />
            <div className="lrn-elaborate">
              <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
              <p>
                Le Chatelier's principle shows that low temperature and high pressure both favour
                ammonia. But low temperature slows the reaction to useless rates. The 400–500 °C
                compromise gives about 15% yield at 200 atm but at a practical rate. Ammonia is
                condensed out to pull the equilibrium forward, and unreacted gases recycle. The
                promoters Al₂O₃ and K₂O increase the iron catalyst's surface area and activity.
              </p>
            </div>
            <HaberYieldViz />
            <div className="lrn-faded">
              <div className="lrn-faded-phase">
                <span className="lrn-faded-label">COMPLETE EXAMPLE</span>
                <p>
                  Haber equilibrium reasoning: (1) High pressure favours fewer moles of gas, products side has 2 moles vs. 4 moles reactants. (2) Low temperature favours the
                  exothermic direction. (3) 400–500 °C chosen for kinetic viability.
                </p>
              </div>
              <div className="lrn-faded-phase">
                <span className="lrn-faded-label">YOUR TURN, PARTIAL</span>
                <p>
                  Complete the reasoning: why is ammonia condensed out of the reactor rather than
                  collected in one pass?
                </p>
              </div>
              <div className="lrn-faded-phase">
                <span className="lrn-faded-label">INDEPENDENT PRACTICE</span>
                <p>
                  Explain the full Haber process in your own words, including why neither the
                  highest pressure nor the lowest temperature is used in practice.
                </p>
              </div>
            </div>
            <div className="lrn-compare">
              <p>
                <strong>Haber process vs. Ostwald process</strong>, Haber uses N₂ + H₂ to build
                ammonia by synthesis; Ostwald uses the ammonia that Haber produced and oxidises it
                step by step to nitric acid; the two processes are sequential, not competing.
              </p>
            </div>
            <h3>The Ostwald Process</h3>
            <p>
              The Ostwald process oxidises ammonia to nitric acid in three steps. A platinum-rhodium
              gauze catalyst at 850 °C drives the first oxidation.
            </p>
            <p>
              <strong>Step 1:</strong> Catalytic oxidation of ammonia to nitric oxide.
            </p>
            <div className="lrn-eq">
              <span>{`$$4\\text{NH}_3 + 5\\text{O}_2 \\rightarrow 4\\text{NO} + 6\\text{H}_2\\text{O}$$`}</span>
            </div>
            <p>
              <strong>Step 2:</strong> Oxidation of nitric oxide to nitrogen dioxide.
            </p>
            <div className="lrn-eq">
              <span>{`$$2\\text{NO} + \\text{O}_2 \\rightarrow 2\\text{NO}_2$$`}</span>
            </div>
            <p>
              <strong>Step 3:</strong> Absorption in water to form nitric acid, recycling NO back.
            </p>
            <div className="lrn-eq">
              <span>{`$$3\\text{NO}_2 + \\text{H}_2\\text{O} \\rightarrow 2\\text{HNO}_3 + \\text{NO}$$`}</span>
            </div>
            <OstwaldProcessViz />
            <div className="lrn-elaborate">
              <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
              <p>
                Excess ammonia in step 1 would give nitrogen gas as the product instead of NO.
                Precise stoichiometric control keeps the reaction selective for NO.
              </p>
            </div>
            <div className="lrn-self-explain">
              <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
              <p>
                In step 3, NO is produced and recycled. What happens to nitrogen atoms overall, and
                why does the recycling matter economically?
              </p>
              <details className="lrn-predict-reveal">
                <summary>Expert explanation</summary>
                <p>
                  The recycled NO goes back to step 2 and is re-oxidised to NO₂. Net result: every
                  nitrogen atom from ammonia eventually ends up as HNO₃. Without recycling, each
                  pass of step 3 would waste one third of the nitrogen as NO gas, a serious
                  economic and environmental loss.
                </p>
              </details>
            </div>
            <h3>Superphosphate Fertiliser</h3>
            <p>
              Triple superphosphate is made by treating calcium phosphate rock with sulfuric acid.
            </p>
            <div className="lrn-eq">
              <span>{`$$\\text{Ca}_3(\\text{PO}_4)_2 + 2\\text{H}_2\\text{SO}_4 \\rightarrow \\text{Ca(H}_2\\text{PO}_4)_2 + 2\\text{CaSO}_4$$`}</span>
            </div>
            <p>
              The product calcium dihydrogen phosphate is water-soluble and available to plant
              roots. Calcium phosphate rock itself is insoluble and useless as a fertiliser.
            </p>
            <h3>Phosphorus Industrial Chemistry</h3>
            <p>
              White phosphorus (P₄) is made by reducing calcium phosphate with coke and silica in an
              electric furnace. White phosphorus is extremely reactive and toxic. Red phosphorus is
              less reactive and used in safety matches. Phosphoric acid (H₃PO₄) is a key fertiliser
              acid.
            </p>
          </div>
        </>,
        <>
          <div className="lrn-section" id="lrn-section-9">
            <h2>Group 16: Sulfur Extraction and Sulfuric Acid</h2>
            <div className="lrn-predict">
              <span className="lrn-predict-label">PREDICT</span>
              <p>
                Huge deposits of pure sulfur lie underground, mixed with rock and water. You cannot
                dig normally because the ground is unstable. How would you extract liquid sulfur
                without mining?
              </p>
              <details className="lrn-predict-reveal">
                <summary>Check your thinking</summary>
                <p>
                  Melt the sulfur in place with superheated water pumped down through pipes, then
                  lift the liquid sulfur to the surface with compressed air, the Frasch process.
                </p>
              </details>
            </div>
            <h3>The Frasch Process</h3>
            <p>
              The Frasch process extracts underground sulfur deposits by melting them in place with
              superheated water. Three concentric pipes are drilled to the deposit. Superheated
              water at 160 °C and 16 atm is pumped down the outer pipe. It melts the sulfur (melting
              point 113 °C). Compressed air pumped down the inner pipe pushes a frothy mixture of
              liquid sulfur and water up the middle pipe to the surface. The sulfur solidifies as it
              cools and is 99.5% pure.
            </p>
            <div className="lrn-self-explain">
              <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
              <p>
                Why can superheated water at 160 °C actually melt sulfur when sulfur's melting point
                is 113 °C, given that water normally boils at 100 °C?
              </p>
              <details className="lrn-predict-reveal">
                <summary>Expert explanation</summary>
                <p>
                  At 16 atm, the boiling point of water rises above 160 °C. The pressurised water
                  stays liquid at temperatures well above its normal boiling point, transferring
                  enough heat to melt the sulfur deposit underground.
                </p>
              </details>
            </div>
            <h3>The Claus Process</h3>
            <p>
              The Claus process recovers sulfur from hydrogen sulfide, a toxic byproduct of natural
              gas and petroleum refining.
            </p>
            <div className="lrn-eq">
              <span>{`$$2\\text{H}_2\\text{S} + \\text{SO}_2 \\rightarrow 3\\text{S} + 2\\text{H}_2\\text{O}$$`}</span>
            </div>
            <p>
              The process runs in multiple stages at decreasing temperatures (300 °C, 250 °C, 200
              °C). After each stage, sulfur condenses and is removed as liquid. Removing sulfur at
              each stage drives the equilibrium forward at the next stage, recovering over 95% of
              the sulfur.
            </p>
            <ClausProcessViz />
            <div className="lrn-compare">
              <p>
                <strong>Frasch process vs. Claus process</strong>, Frasch extracts elemental sulfur
                from underground deposits by melting with superheated water; Claus recovers sulfur
                from H₂S waste gas by catalytic oxidation; they solve different problems in the
                sulfur supply chain.
              </p>
            </div>
            <div className="lrn-elaborate">
              <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
              <p>
                The Claus equilibrium is reversible. By condensing and removing solid sulfur between
                stages, and by dropping the temperature at each stage, the process shifts the
                equilibrium right at every step. Multi-stage operation at decreasing temperatures is
                essential for high yield.
              </p>
            </div>
            <h3>The Contact Process</h3>
            <p>
              The Contact process produces sulfuric acid by oxidising sulfur dioxide to sulfur
              trioxide over a vanadium pentoxide catalyst.
            </p>
            <div className="lrn-eq">
              <span>{`$$2\\text{SO}_2 + \\text{O}_2 \\rightleftharpoons 2\\text{SO}_3 \\quad (\\text{V}_2\\text{O}_5,\\ 450\\ °\\text{C})$$`}</span>
            </div>
            <ContactProcessViz />
            <p>
              The reaction is exothermic and reversible. The 450 °C operating temperature balances
              yield and reaction rate. SO₃ cannot be absorbed directly in water because it forms a
              corrosive acid mist. Instead, SO₃ is dissolved in concentrated sulfuric acid to form
              oleum ({`$\\text{H}_2\\text{S}_2\\text{O}_7$`}), which is then diluted.
            </p>
            <ContactConversionViz />
            <div className="lrn-eq">
              <span>{`$$\\text{SO}_3 + \\text{H}_2\\text{SO}_4 \\rightarrow \\text{H}_2\\text{S}_2\\text{O}_7$$`}</span>
              <span>{`$$\\text{H}_2\\text{S}_2\\text{O}_7 + \\text{H}_2\\text{O} \\rightarrow 2\\text{H}_2\\text{SO}_4$$`}</span>
            </div>
            <div className="lrn-self-explain">
              <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
              <p>
                Why is SO₃ dissolved in concentrated H₂SO₄ rather than in water, even though the
                final product needed is aqueous H₂SO₄?
              </p>
              <details className="lrn-predict-reveal">
                <summary>Expert explanation</summary>
                <p>
                  When SO₃ meets water vapour, the highly exothermic reaction forms a stable acid
                  mist of tiny droplets that cannot be captured by simple absorbers, it would
                  escape to the atmosphere. Concentrated H₂SO₄ absorbs SO₃ without forming mist,
                  giving oleum that can safely be diluted with water later.
                </p>
              </details>
            </div>
          </div>
        </>,
        <>
          <div className="lrn-section" id="lrn-section-10">
            <h2>Group 17 and 18: Halogens and Noble Gases</h2>
            <div className="lrn-predict">
              <span className="lrn-predict-label">PREDICT</span>
              <p>
                Noble gases are chemically inert. You cannot extract them by chemical reaction. What
                physical separation method can isolate them from air?
              </p>
              <details className="lrn-predict-reveal">
                <summary>Check your thinking</summary>
                <p>
                  Fractional distillation of liquid air. Each noble gas has a different boiling
                  point, so they separate as the liquid air warms up and components boil off in
                  order.
                </p>
              </details>
            </div>
            <h3>Industrial HF Production</h3>
            <p>
              Hydrofluoric acid is made by reacting fluorite (calcium fluoride) with concentrated
              sulfuric acid at elevated temperature.
            </p>
            <div className="lrn-eq">
              <span>{`$$\\text{CaF}_2 + \\text{H}_2\\text{SO}_4 \\rightarrow 2\\text{HF} + \\text{CaSO}_4$$`}</span>
            </div>
            <p>
              HF is extremely hazardous. Even dilute solutions penetrate skin painlessly and then
              destroy deep tissue and bone by complexing calcium ions. All HF work requires
              specialised protective equipment.
            </p>
            <h3>Chloralkali and Bleaching Powder</h3>
            <p>
              Chlorine from the chloralkali process reacts with slaked lime to give bleaching
              powder.
            </p>
            <div className="lrn-eq">
              <span>{`$$\\text{Ca(OH)}_2 + \\text{Cl}_2 \\rightarrow \\text{CaOCl}_2 + \\text{H}_2\\text{O}$$`}</span>
            </div>
            <p>
              Bleaching powder is used for water disinfection and textile bleaching. Its active
              agent is the hypochlorite ion, which oxidises coloured compounds and kills bacteria.
            </p>
            <h3>Noble Gases from Liquid Air</h3>
            <p>
              Noble gases make up about 1% of air. Industrial production uses fractional
              distillation of liquid air. Air is compressed and cooled until it liquefies. The
              components then boil off in order of increasing boiling point: nitrogen (−196 °C),
              argon (−186 °C), oxygen (−183 °C), krypton (−153 °C), xenon (−108 °C).
            </p>
            <AirDistillationViz />
            <ul className="lrn-list">
              <li>
                <strong>Helium:</strong> lifts weather balloons, cools MRI superconducting magnets,
                used in deep-sea diving gas mixes. Non-renewable once released.
              </li>
              <li>
                <strong>Neon:</strong> red-orange glow in neon signs and laser tubes.
              </li>
              <li>
                <strong>Argon:</strong> inert atmosphere for arc welding and semiconductor
                fabrication.
              </li>
              <li>
                <strong>Krypton and xenon:</strong> high-intensity photographic flash lamps and
                specialty lasers.
              </li>
            </ul>
            <div className="lrn-self-explain">
              <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
              <p>
                Why does helium come from natural gas wells rather than from air distillation,
                unlike all the other noble gases?
              </p>
              <details className="lrn-predict-reveal">
                <summary>Expert explanation</summary>
                <p>
                  Helium is so light it escapes Earth's gravity over geological time. Atmospheric
                  helium concentration is only about 5 ppm, too low to justify air distillation.
                  Natural gas wells trap helium produced by radioactive decay of uranium and thorium
                  in rocks, giving economically useful concentrations up to several percent.
                </p>
              </details>
            </div>
          </div>
        </>,
        <>
          <div className="lrn-section" id="lrn-section-11">
            <h2>d-Block General Trends: Extraction and Oxidation States</h2>
            <div className="lrn-predict">
              <span className="lrn-predict-label">PREDICT</span>
              <p>
                Moving across the first transition series, elements form compounds in more and more
                oxidation states. Why does this trend reverse at the end of the series near copper
                and zinc?
              </p>
              <details className="lrn-predict-reveal">
                <summary>Check your thinking</summary>
                <p>
                  By Cu and Zn the d shell is nearly full. The nuclear charge pulls d electrons so
                  tightly that removing them costs more energy than any bond can recover. Only low
                  oxidation states are accessible.
                </p>
              </details>
            </div>
            <h3>Oxidation State Stability</h3>
            <p>
              Transition metals have partially filled d orbitals. Early d-block metals (Ti, V, Cr,
              Mn) can reach high oxidation states using both s and d electrons. Late d-block metals
              (Cu, Zn) have nearly full d shells. Losing d electrons is too costly energetically, so
              they are limited to low oxidation states.
            </p>
            <div className="lrn-elaborate">
              <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
              <p>
                The d electrons in early transition metals are accessible and at similar energies to
                the s electrons. The nuclear charge rises across the period, pulling d electrons
                closer and stabilising them. By the time we reach copper, the 3d electrons are too
                tightly held to be chemically removed in most conditions.
              </p>
            </div>
            <h3>Extraction Methods</h3>
            <p>The method of extraction depends on how stable the metal-oxygen bond is.</p>
            <ul className="lrn-list">
              <li>
                <strong>Pyrometallurgy</strong> uses heat and carbon reduction. It works for metals
                whose oxides have lower stability than carbon oxides at high temperature. Iron,
                copper, zinc, tin, and nickel are extracted this way.
              </li>
              <li>
                <strong>Hydrometallurgy</strong> dissolves ores in acid or base, then recovers the
                metal by precipitation, cementation, or electrodeposition. Copper and gold are also
                extracted hydrometallurgically.
              </li>
              <li>
                <strong>Electrolysis</strong> is needed for metals whose oxides are too stable to
                reduce with carbon. Sodium, magnesium, aluminium, and titanium require electrolysis.
              </li>
              <li>
                <strong>Electrorefining</strong> purifies impure metal. An impure copper anode
                dissolves electrolytically. Pure copper deposits at the cathode. Precious metal
                impurities fall as anode slime.
              </li>
            </ul>
            <div className="lrn-compare">
              <p>
                <strong>Pyrometallurgy vs. electrorefining</strong>, pyrometallurgy extracts metal
                from ore by high-temperature reduction; electrorefining purifies already-extracted
                metal to commercial purity using electrolysis; they are sequential steps, not
                alternatives.
              </p>
            </div>
          </div>
        </>,
        <>
          <div className="lrn-section" id="lrn-section-12">
            <h2>Titanium: TiO₂ Production and Applications</h2>
            <div className="lrn-predict">
              <span className="lrn-predict-label">PREDICT</span>
              <p>
                Titanium dioxide is the world's most widely used white pigment. It is also used in
                self-cleaning glass and solar cells. Can one material genuinely do all three?
              </p>
              <details className="lrn-predict-reveal">
                <summary>Check your thinking</summary>
                <p>
                  Yes. As a pigment it scatters all visible light (high refractive index). As a
                  photocatalyst, UV excites electrons that break down organic matter on surfaces. As
                  a solar cell scaffold, it transports electrons injected by a dye. All three uses
                  come from its electronic band structure and optical properties.
                </p>
              </details>
            </div>
            <h3>The Chloride Process</h3>
            <div className="lrn-eq">
              <span>{`$$\\text{TiO}_2 + 2\\text{Cl}_2 \\rightarrow \\text{TiCl}_4 + \\text{O}_2$$`}</span>
            </div>
            <p>
              Burning TiCl₄ in oxygen at 1000 °C gives extremely pure TiO₂ pigment particles. The
              chloride process recycles Cl₂ and produces less waste than the sulfate route.
            </p>
            <div className="lrn-self-explain">
              <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
              <p>
                What is the key advantage of the chloride process over the sulfate process, and why
                does the purification step matter so much for pigment quality?
              </p>
              <details className="lrn-predict-reveal">
                <summary>Expert explanation</summary>
                <p>
                  The chloride route produces TiCl₄, a liquid that can be distilled to very high
                  purity before oxidation. Any coloured impurity left in the pigment (Fe, Cr, Mn)
                  absorbs visible light and shifts the white toward grey or yellow, unacceptable
                  for premium paints. The sulfate route cannot achieve the same purity by simple
                  distillation.
                </p>
              </details>
            </div>
            <h3>TiO₂ Applications</h3>
            <ul className="lrn-list">
              <li>
                <strong>As a pigment:</strong> TiO₂ has a very high refractive index (2.7),
                scattering all visible light wavelengths. Used in paints, plastics, paper, and
                sunscreens.
              </li>
              <li>
                <strong>As a photocatalyst:</strong> UV light excites electrons from the valence
                band to the conduction band. These energetic electrons and holes react with oxygen
                and water to produce radicals that break down organic pollutants and bacteria on
                self-cleaning surfaces.
              </li>
              <li>
                <strong>In the Grätzel solar cell:</strong> A dye-sensitised solar cell uses a film
                of TiO₂ nanoparticles coated with a ruthenium bipyridyl dye. Light excites the dye.
                The excited electron injects into TiO₂'s conduction band and travels to the external
                circuit. The oxidised dye is regenerated by an iodide electrolyte.
              </li>
            </ul>
            <div className="lrn-compare">
              <p>
                <strong>Si photovoltaic vs. TiO₂ Grätzel cell</strong>, silicon PV uses a p-n
                semiconductor junction, is efficient (~20%), requires ultra-pure silicon, and is
                expensive to manufacture; Grätzel cells use cheap TiO₂ nanoparticles and dye, are
                less efficient (~10%), but can be manufactured on flexible substrates at lower cost.
              </p>
            </div>
          </div>
        </>,
        <>
          <div className="lrn-section" id="lrn-section-13">
            <h2>Vanadium, Chromium, and Manganese</h2>
            <div className="lrn-predict">
              <span className="lrn-predict-label">PREDICT</span>
              <p>
                The Contact process needs a catalyst to oxidise SO₂ at 450 °C. Why is V₂O₅ ideal
                when other metal oxides might seem equally good?
              </p>
              <details className="lrn-predict-reveal">
                <summary>Check your thinking</summary>
                <p>
                  V₂O₅ can cycle reversibly between the +5 and +4 oxidation states at 450 °C. This
                  redox cycling is the catalytic mechanism. Most other metal oxides are either too
                  stable to be reduced by SO₂ or cannot be re-oxidised by O₂ fast enough at the
                  operating temperature.
                </p>
              </details>
            </div>
            <h3>Vanadium: The Contact Process Catalyst</h3>
            <p>
              Vanadium pentoxide ({`$\\text{V}_2\\text{O}_5$`}) is the catalyst in the Contact
              process. It works by cycling between +5 and +4 oxidation states.{' '}
              {`$\\text{V}_2\\text{O}_5$`} oxidises SO₂ to SO₃, itself being reduced to{' '}
              {`$\\text{V}_2\\text{O}_4$`}. Oxygen from air then reoxidises{' '}
              {`$\\text{V}_2\\text{O}_4$`} back to {`$\\text{V}_2\\text{O}_5$`}, completing the
              catalytic cycle.
            </p>
            <VanadiumCatalyticCycleViz />
            <div className="lrn-self-explain">
              <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
              <p>
                How does the ability to cycle between +4 and +5 oxidation states make V₂O₅ a better
                catalyst than Fe₂O₃ for this particular reaction?
              </p>
              <details className="lrn-predict-reveal">
                <summary>Expert explanation</summary>
                <p>
                  Fe₂O₃ is hard to reduce at 450 °C, the Fe³⁺/Fe²⁺ potential does not match the
                  SO₂/SO₃ couple well at that temperature. V₂O₅ sits at exactly the right potential
                  to accept electrons from SO₂ and donate them to O₂ in a fast catalytic cycle at
                  the operating temperature.
                </p>
              </details>
            </div>
            <h3>Chromium: Extraction, Plating, and Industrial Oxidants</h3>
            <p>
              Chromite ore ({`$\\text{FeCr}_2\\text{O}_4$`}) is mined mainly in South Africa.
              Chromium is first converted to chromate salts by fusion with sodium carbonate.
              Chromium plating is done by electrodeposition from a bath containing chromic acid
              (CrO₃) in sulfuric acid. When scratched, chromium forms a thin self-healing Cr₂O₃
              passivation layer, this is active protection, not just a physical barrier.
            </p>
            <div className="lrn-elaborate">
              <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
              <p>
                Passivation means the surface oxide is stable, adherent, and does not dissolve
                further. Al, Cr, and Ti all passivate spontaneously. Fe rusts because its oxide
                (Fe₂O₃) is porous and flakes off, exposing fresh metal to further attack.
              </p>
            </div>
            <div className="lrn-self-explain">
              <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
              <p>
                Chromium(VI) is a carcinogen but chromium(III) is an essential trace element. What
                structural difference explains why Cr(VI) is so much more harmful to cells?
              </p>
              <details className="lrn-predict-reveal">
                <summary>Expert explanation</summary>
                <p>
                  Cr(VI) as chromate (CrO₄²⁻) resembles sulfate and phosphate structurally. Cells
                  actively import it via anion transporters. Inside the cell, Cr(VI) is reduced to
                  Cr(III) by cellular reductants, generating reactive oxygen species and Cr(III)–DNA
                  adducts in the process. Cr(III) itself is taken up slowly and does not generate
                  these damaging intermediates.
                </p>
              </details>
            </div>
            <h3>Manganese: Batteries and Permanganate</h3>
            <p>
              In the common alkaline dry cell, manganese dioxide acts as the cathode material.
              During discharge, MnO₂ is reduced.
            </p>
            <div className="lrn-eq">
              <span>{`$$\\text{MnO}_2 + \\text{H}_2\\text{O} + e^- \\rightarrow \\text{MnO(OH)} + \\text{OH}^-$$`}</span>
            </div>
            <p>
              Potassium permanganate (KMnO₄) is a deep purple solid and a very strong oxidising
              agent.
            </p>
            <div className="lrn-eq">
              <span>{`$$[\\text{MnO}_4]^- + 8\\text{H}^+ + 5e^- \\rightarrow \\text{Mn}^{2+} + 4\\text{H}_2\\text{O} \\quad E^\\circ = +1.51\\ \\text{V}$$`}</span>
            </div>
            <p>
              Uses include water purification, bleaching textile fibres, and disinfecting drinking
              water.
            </p>
            <div className="lrn-compare">
              <p>
                <strong>KMnO₄ vs. Cl₂ for water purification</strong>, KMnO₄ is a stronger oxidant
                ({`$E^\\circ = +1.51\\ \\text{V}$`}) and does not form chlorinated organic
                byproducts; Cl₂ is cheaper and works at lower doses but produces trihalomethanes
                (carcinogens) in water rich in organic matter.
              </p>
            </div>
          </div>
        </>,
        <>
          <div className="lrn-section" id="lrn-section-14">
            <h2>Iron and Steel</h2>
            <div className="lrn-predict">
              <span className="lrn-predict-label">PREDICT</span>
              <p>
                A blast furnace reduces iron ore with coke. But iron itself is rarely the final
                product. What happens to pig iron that makes steel so much more useful?
              </p>
              <details className="lrn-predict-reveal">
                <summary>Check your thinking</summary>
                <p>
                  Pig iron has too much carbon (2–4%) and is brittle. Steel is made by blowing
                  oxygen through molten pig iron to lower the carbon content to below 1%. Alloying
                  elements are then added to tune specific mechanical properties.
                </p>
              </details>
            </div>
            <h3>Iron and Steel Manufacture</h3>
            <p>
              Iron ore (mainly haematite, {`$\\text{Fe}_2\\text{O}_3$`}) is reduced in a blast
              furnace with coke (carbon) and limestone. Carbon monoxide is the actual reducing
              agent.
            </p>
            <div className="lrn-eq">
              <span>{`$$\\text{Fe}_2\\text{O}_3 + 3\\text{CO} \\rightarrow 2\\text{Fe} + 3\\text{CO}_2$$`}</span>
            </div>
            <p>
              The limestone (CaCO₃) decomposes to CaO, which reacts with silica impurities to form
              calcium silicate slag. Pig iron from the blast furnace contains a high proportion of
              carbon and is brittle. Steel is made by blowing oxygen through molten pig iron in a
              basic oxygen furnace to lower the carbon content.
            </p>
            <h3>Rusting Mechanism</h3>
            <p>
              Iron rusts in the presence of both water and oxygen. The reaction proceeds in stages.
            </p>
            <div className="lrn-eq">
              <span>{`$$2\\text{Fe} + 2\\text{H}_2\\text{O} + \\text{O}_2 \\rightarrow 2\\text{Fe(OH)}_2 \\rightarrow \\text{Fe}_2\\text{O}_3{\\cdot}x\\text{H}_2\\text{O}$$`}</span>
            </div>
            <p>
              Rust is porous and does not adhere well, so it falls away and exposes fresh iron. This
              is why iron rusts through, unlike aluminium or chromium which passivate.
            </p>
            <div className="lrn-self-explain">
              <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
              <p>
                Galvanising coats iron with zinc. When the zinc layer is scratched and both metals
                are exposed to seawater, which metal corrodes? Why does this actually protect the
                iron?
              </p>
              <details className="lrn-predict-reveal">
                <summary>Expert explanation</summary>
                <p>
                  Zinc corrodes. Zinc has a more negative reduction potential than iron, so it
                  preferentially oxidises (acts as the anode) in any electrochemical cell. Iron
                  becomes the cathode and is protected, this is sacrificial cathodic protection.
                  Even a tiny exposed zinc area protects a much larger iron area nearby.
                </p>
              </details>
            </div>
            <h3>Fe₃O₄ in Magnetic Recording and Ferrites</h3>
            <p>
              Magnetite ({`$\\text{Fe}_3\\text{O}_4$`}) is a mixed-valence iron oxide. It is
              ferrimagnetic and was the first magnetic recording medium. Ferrites (
              {`$\\text{MFe}_2\\text{O}_4$`} where M = Mn, Co, Ni, Zn) are spinel-structured
              magnetic oxides used in transformer cores, magnetic toners, recording tape, and
              electromagnets. Yttrium iron garnet (YIG, {`$\\text{Y}_3\\text{Fe}_5\\text{O}_{12}$`})
              is used as a microwave filter in radar systems.
            </p>
          </div>
        </>,
        <>
          <div className="lrn-section" id="lrn-section-15">
            <h2>Cobalt, Nickel, Copper, and Zinc</h2>
            <div className="lrn-predict">
              <span className="lrn-predict-label">PREDICT</span>
              <p>
                Lithium-ion batteries power electric vehicles and laptops. The cathode material is a
                cobalt compound. Why is the choice of cathode material so critical to battery
                performance?
              </p>
              <details className="lrn-predict-reveal">
                <summary>Check your thinking</summary>
                <p>
                  The cathode determines the cell voltage, energy density, and cycle life. LiCoO₂
                  has a layered structure that allows reversible Li⁺ insertion/extraction over
                  hundreds of cycles without structural collapse. Its redox potential sets the cell
                  voltage at about 3.7 V.
                </p>
              </details>
            </div>
            <h3>Cobalt: LiCoO₂ and Batteries</h3>
            <p>
              Lithium cobalt oxide ({`$\\text{LiCoO}_2$`}) is the cathode in the original
              lithium-ion battery design. Lithium ions intercalate between the CoO₂ layers during
              charging and leave during discharge. Cobalt cycles between +3 and +4 oxidation states.
              The layered structure allows reversible lithium movement without destroying the
              framework.
            </p>
            <div className="lrn-eq">
              <span>{`$$\\text{LiCoO}_2 + \\text{C}_6 \\rightarrow \\text{Li}_{1-x}\\text{CoO}_2 + \\text{Li}_x\\text{C}_6$$`}</span>
            </div>
            <div className="lrn-self-explain">
              <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
              <p>
                Why is the graphite anode described as a lithium-graphite intercalation compound
                during charging rather than as deposited metallic lithium?
              </p>
              <details className="lrn-predict-reveal">
                <summary>Expert explanation</summary>
                <p>
                  Li⁺ ions insert between graphite layers (LiC₆) rather than depositing as metallic
                  lithium on the surface. Metallic lithium deposition causes dendrite growth and
                  explosion risk. Intercalation is a topotactic, reversible reaction that preserves
                  the graphite structure and is far safer.
                </p>
              </details>
            </div>
            <p>
              Cobalt blue uses cobalt(II) oxide (CoO) dissolved in glass melts. The Co²⁺ ion in
              tetrahedral coordination absorbs red and yellow light, transmitting deep blue.
            </p>
            <h3>Nickel: Raney Nickel and Alloys</h3>
            <p>
              Raney nickel is a porous skeletal nickel catalyst made by leaching aluminium out of a
              nickel-aluminium alloy with sodium hydroxide. The sponge-like structure has an
              enormous surface area. It is the key catalyst for hydrogenating vegetable oils to
              margarine and for pharmaceutical synthesis.
            </p>
            <div className="lrn-callout lrn-warning">
              <p>
                Raney nickel is pyrophoric, it ignites spontaneously in air when dry. Industrial
                use requires careful handling under an inert atmosphere or in solvent.
              </p>
            </div>
            <p>
              Monel (nickel-copper alloy) resists corrosion by seawater, acids, and alkalis.
              Nickel-cadmium (NiCd) batteries use NiO(OH) cathode and Cd anode. Cadmium is a toxic
              heavy metal; strict regulations now limit NiCd use in consumer electronics.
            </p>
            <h3>Copper: Extraction, Alloys, and Uses</h3>
            <p>
              Copper sulfide ore (chalcopyrite, {`$\\text{CuFeS}_2$`}) is concentrated by froth
              flotation, then smelted to give impure blister copper (~98% pure). Electrorefining
              completes purification: impure copper is cast as an anode, and pure copper deposits at
              the cathode from copper sulfate electrolyte. Precious metals (Ag, Au, Pt) settle as
              anode slime.
            </p>
            <div className="lrn-self-explain">
              <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
              <p>
                Why is electrorefining worth the extra cost when blister copper is already 98% pure?
              </p>
              <details className="lrn-predict-reveal">
                <summary>Expert explanation</summary>
                <p>
                  Copper for electrical wiring must be more than 99.99% pure. Even 2% impurities
                  (especially iron and silver) can reduce electrical conductivity by 20–40%. The
                  extra cost of electrorefining is easily recovered by the improvement in
                  conductivity and the value of the precious metals collected in the anode slime.
                </p>
              </details>
            </div>
            <p>
              Bronze (Cu + Sn) was the first structural alloy in human history. Brass (Cu + Zn) is
              used in valves, fittings, and musical instruments. Bordeaux mixture (CuSO₄ + Ca(OH)₂)
              is still used in organic agriculture as a fungicide.
            </p>
            <h3>Zinc Production and Applications</h3>
            <p>Zinc sulfide (sphalerite) is roasted in air to give zinc oxide.</p>
            <div className="lrn-eq">
              <span>{`$$2\\text{ZnS} + 3\\text{O}_2 \\rightarrow 2\\text{ZnO} + 2\\text{SO}_2$$`}</span>
            </div>
            <p>
              The zinc oxide is then reduced with carbon at 1000 °C, and zinc distils off as a
              vapour (boiling point 907 °C). Galvanising coats iron with zinc by hot-dipping. Zinc
              protects iron by sacrificial (cathodic) protection.
            </p>
          </div>
        </>,
        <>
          <div className="lrn-section" id="lrn-section-16">
            <h2>Platinum-Group Metals</h2>
            <div className="lrn-predict">
              <span className="lrn-predict-label">PREDICT</span>
              <p>
                Modern cars have catalytic converters containing platinum, palladium, and rhodium.
                All three are needed. Could you replace them with a cheaper single metal?
              </p>
              <details className="lrn-predict-reveal">
                <summary>Check your thinking</summary>
                <p>
                  No. Each metal catalyses different reactions. Rhodium reduces NOₓ efficiently.
                  Platinum and palladium oxidise hydrocarbons and CO. No single metal has the right
                  binding energies for all three reactions simultaneously.
                </p>
              </details>
            </div>
            <h3>Catalytic Converters</h3>
            <p>
              Catalytic converters use a washcoat of {`$\\gamma$`}-aluminium oxide on a cordierite
              monolith, impregnated with platinum, palladium, and rhodium. A λ-sensor measures
              exhaust oxygen content and feeds back to adjust the fuel-air mixture.
            </p>
            <p>
              Rhodium reduces NOₓ to nitrogen gas. Platinum and palladium oxidise hydrocarbons and
              CO to CO₂ and water.
            </p>
            <div className="lrn-eq">
              <span>{`$$\\text{HC} + \\text{CO} + \\text{NO}_x \\xrightarrow{\\text{Rh/Pd/Pt}} \\text{CO}_2 + \\text{H}_2\\text{O} + \\text{N}_2$$`}</span>
            </div>
            <CatalyticConverterViz />
            <div className="lrn-self-explain">
              <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
              <p>
                The λ-sensor maintains the exhaust composition near the stoichiometric point. Why
                does deviation in either direction (too lean or too rich) degrade converter
                performance?
              </p>
              <details className="lrn-predict-reveal">
                <summary>Expert explanation</summary>
                <p>
                  Too lean (excess O₂): oxidation of HC and CO works well, but there is not enough
                  CO and hydrocarbon reductant to reduce NOₓ to N₂. Too rich (excess fuel): the
                  reductant reduces NOₓ but O₂ is too scarce to oxidise remaining HC and CO. Only
                  near stoichiometric (λ ≈ 1) do all three reactions proceed efficiently
                  simultaneously.
                </p>
              </details>
            </div>
            <h3>Palladium for Hydrogen Purification</h3>
            <p>
              Palladium is unique in allowing atomic hydrogen to dissolve through its bulk at
              elevated temperature while blocking all other gases. A palladium membrane is used to
              produce ultra-pure hydrogen for semiconductor manufacturing.
            </p>
            <h3>Wacker Process</h3>
            <p>
              The Wacker process oxidises ethene to acetaldehyde using palladium(II) chloride and
              copper(II) chloride as co-catalysts.
            </p>
            <div className="lrn-eq">
              <span>{`$$\\text{C}_2\\text{H}_4 + \\tfrac{1}{2}\\text{O}_2 \\rightarrow \\text{CH}_3\\text{CHO} \\quad (\\text{PdCl}_2/\\text{CuCl}_2)$$`}</span>
            </div>
            <p>
              PdCl₂ oxidises ethene. CuCl₂ reoxidises reduced Pd⁰ back to Pd²⁺. Air then reoxidises
              Cu⁺ to Cu²⁺. This cascade of oxidation states allows a truly catalytic cycle.
            </p>
            <div className="lrn-compare">
              <p>
                <strong>Wilkinson's catalyst (homogeneous) vs. Pd on C (heterogeneous)</strong>, Wilkinson's catalyst {`$\\text{RhCl(PPh}_3)_3$`} dissolves in the reaction solvent
                and contacts substrate molecules uniformly, giving high selectivity; Pd on carbon is
                insoluble, operates on its surface, tolerates harsher conditions, and is easier to
                separate and reuse.
              </p>
            </div>
          </div>
        </>,
        <>
          <div className="lrn-section" id="lrn-section-17">
            <h2>Zirconium, Niobium, Molybdenum, and Tungsten</h2>
            <div className="lrn-predict">
              <span className="lrn-predict-label">PREDICT</span>
              <p>
                Nuclear fuel rods operate inside a reactor core with intense radiation and
                high-temperature water. The cladding material must not absorb neutrons. Which metals
                meet this requirement?
              </p>
              <details className="lrn-predict-reveal">
                <summary>Check your thinking</summary>
                <p>
                  Zirconium. Its neutron-capture cross-section is extremely low (~0.18 barns), so it
                  does not deplete the neutron flux needed to sustain the fission chain reaction.
                  Aluminium also has a low cross-section but lacks zirconium's high-temperature
                  water corrosion resistance.
                </p>
              </details>
            </div>
            <h3>Zirconium: Nuclear Cladding and Ceramics</h3>
            <p>
              Zirconium alloys (Zircaloy) are the standard cladding material for nuclear fuel rods,
              encasing uranium oxide pellets in pressurised water reactors. Zirconium must be
              separated from hafnium before use. Hafnium has a very high neutron-capture
              cross-section and always occurs with zirconium in nature. The separation is difficult
              because of the lanthanoid contraction.
            </p>
            <p>
              Yttria-stabilised zirconia ({`$\\text{ZrO}_2$`} doped with{' '}
              {`$\\text{Y}_2\\text{O}_3$`}) is an oxygen ion conductor used in oxygen sensors and
              solid oxide fuel cell electrolytes.
            </p>
            <div className="lrn-self-explain">
              <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
              <p>
                Why is hafnium separation from zirconium so difficult when they are in completely
                different periods of the periodic table?
              </p>
              <details className="lrn-predict-reveal">
                <summary>Expert explanation</summary>
                <p>
                  The lanthanoid contraction makes Hf almost identical in radius to Zr despite being
                  one period lower. Their ionic radii, bond energies, and solubility products are so
                  similar that ordinary chemical separations (precipitation, crystallisation) cannot
                  distinguish them. Liquid-liquid solvent extraction with tailored solvents is
                  required.
                </p>
              </details>
            </div>
            <h3>Niobium: Strong Steels and Superconducting Magnets</h3>
            <p>
              Small additions of niobium to steel dramatically increase its strength by forming fine
              niobium carbide and niobium nitride precipitates that pin grain boundaries.
              High-strength low-alloy (HSLA) steels with niobium are used in pipelines, bridges, and
              automotive structures.
            </p>
            <p>
              Niobium-titanium alloy (NbTi) is the dominant material for superconducting magnets in
              MRI scanners. Below its critical temperature, NbTi carries very large currents with
              zero resistance.
            </p>
            <h3>Molybdenum: MoS₂ Lubricant and Desulfurisation Catalyst</h3>
            <p>
              Molybdenum disulfide ({`$\\text{MoS}_2$`}) has a layered structure. S-Mo-S layers
              stack by weak van der Waals forces and shear easily under applied force. Unlike
              graphite, MoS₂ works in vacuum and at high temperature, making it ideal for aerospace
              applications and engine oil additives.
            </p>
            <div className="lrn-compare">
              <p>
                <strong>MoS₂ vs. graphite as lubricants</strong>, both have layered structures;
                graphite requires adsorbed water or gases between layers and fails in dry vacuum;
                MoS₂ layers are held only by van der Waals forces and lubricate even in vacuum at
                400 °C.
              </p>
            </div>
            <p>
              Molybdenum oxide (MoO₃) with cobalt oxide (CoO) on activated alumina is the catalyst
              for petroleum hydrodesulfurisation (HDS). Hydrogen reacts with organic sulfur
              compounds to give H₂S, which feeds the Claus unit.
            </p>
            <h3>Tungsten: Filaments and Electrochromic Windows</h3>
            <p>
              Tungsten has the highest melting point of all metals. Tungsten trioxide (WO₃) changes
              from colourless to deep blue when lithium ions and electrons are inserted.
            </p>
            <div className="lrn-eq">
              <span>{`$$\\text{Li}^+ + e^- + \\text{WO}_3 \\rightarrow \\text{LiWO}_3$$`}</span>
            </div>
            <p>
              LiWO₃ behaves as a metallic conductor (tungsten bronze) and absorbs visible light.
              Reversing the voltage extracts the lithium and bleaches the glass back to clear.
              Electrochromic smart windows reduce cooling costs in office buildings.
            </p>
          </div>
        </>,
        <>
          <div className="lrn-section" id="lrn-section-18">
            <h2>Technetium, Ruthenium, Rhodium, Silver, and Gold</h2>
            <div className="lrn-predict">
              <span className="lrn-predict-label">PREDICT</span>
              <p>
                ⁹⁹ᵐTc is the most widely used radioisotope in medicine. It has a half-life of only 6
                hours. Why would such a short half-life actually be advantageous for a patient?
              </p>
              <details className="lrn-predict-reveal">
                <summary>Check your thinking</summary>
                <p>
                  A short half-life means the radiation dose falls quickly after the scan. After two
                  days, virtually no activity remains. This minimises long-term radiation burden
                  while still providing the imaging window needed.
                </p>
              </details>
            </div>
            <h3>Technetium: Nuclear Medicine Imaging</h3>
            <p>
              Technetium-99m ({`$^{99m}\\text{Tc}$`}) is a metastable nuclear isomer produced from
              molybdenum-99 in a hospital generator. Mo-99 (half-life 66 h) decays to {`$^{99m}$`}
              Tc, which the generator elutes daily with saline. It emits gamma radiation detected by
              gamma cameras to image organs.
            </p>
            <p>
              {`$[\\text{TcO}_4]^-$`} (pertechnetate) distributes to the thyroid, brain, and
              kidneys. Attaching {`$^{99m}$`}Tc to different carrier molecules directs it to
              specific tissues for targeted imaging.
            </p>
            <div className="lrn-elaborate">
              <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
              <p>
                The gamma energy of {`$^{99m}$`}Tc falls in a range energetic enough to escape the
                body but low enough for the gamma camera detector to stop and measure it
                efficiently. This makes it ideal for SPECT imaging.
              </p>
            </div>
            <h3>Ruthenium: Photosensitiser for Solar Hydrogen</h3>
            <p>
              Tris(bipyridyl)ruthenium(II), {`$[\\text{Ru(bpy)}_3]^{2+}$`}, absorbs visible light
              through a metal-to-ligand charge transfer (MLCT) transition. The excited singlet state
              crosses to a long-lived triplet state (lifetime {`$\\tau \\approx 600\\ \\text{ns}$`})
              via intersystem crossing (ISC).
            </p>
            <p>
              The triplet excited state is both a stronger oxidant and a stronger reductant than the
              ground state, allowing it to drive photocatalytic water splitting. In artificial
              photosynthesis research it sensitises electron transfer to a platinum catalyst that
              reduces H⁺ to H₂.
            </p>
            <div className="lrn-self-explain">
              <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
              <p>
                Why must the excited state live for ~600 ns rather than picoseconds for electron
                transfer to compete with simple deactivation?
              </p>
              <details className="lrn-predict-reveal">
                <summary>Expert explanation</summary>
                <p>
                  Bimolecular electron transfer requires the excited molecule and the acceptor to
                  collide. Diffusion-controlled collision rates in solution are about {`$10^9$`}{' '}
                  M⁻¹s⁻¹. At micromolar acceptor concentrations, meeting requires hundreds of
                  nanoseconds. A picosecond lifetime would decay before any productive collision
                  occurs.
                </p>
              </details>
            </div>
            <h3>Rhodium: Wilkinson's Catalyst</h3>
            <p>
              Wilkinson's catalyst, {`$\\text{RhCl(PPh}_3)_3$`}, is the benchmark homogeneous
              hydrogenation catalyst. It catalyses the addition of H₂ to alkenes under mild
              conditions (room temperature, 1 atm H₂) in solution. The catalytic cycle involves
              oxidative addition of H₂ to Rh(I) giving Rh(III), then alkene insertion and reductive
              elimination releasing the alkane. Wilkinson's catalyst is highly selective, it
              reduces isolated alkenes without touching carbonyls or nitro groups.
            </p>
            <h3>Silver Photography and Photochromic Glasses</h3>
            <p>
              Silver bromide emulsion on film absorbs photons, converting Ag⁺ to Ag⁰ atoms (the
              latent image). Development amplifies this: a reducing agent converts all silver ions
              in exposed grains to metallic silver. Fixing uses sodium thiosulfate to dissolve
              unexposed AgBr.
            </p>
            <div className="lrn-eq">
              <span>{`$$\\text{AgBr} + 2\\text{S}_2\\text{O}_3^{2-} \\rightarrow [\\text{Ag(S}_2\\text{O}_3)_2]^{3-} + \\text{Br}^-$$`}</span>
            </div>
            <p>
              Photochromic lenses contain AgCl crystals dispersed in glass. UV light reduces Ag⁺ to
              tiny Ag⁰ clusters that absorb visible light, darkening the lens. When UV is removed,
              the reaction reverses. Unlike silver photography, the reaction is fully reversible
              because the silver clusters cannot diffuse away in the rigid glass matrix.
            </p>
            <h3>Gold Cyanide Leaching</h3>
            <p>
              Gold is extracted from low-grade ore by dissolving it in dilute sodium cyanide
              solution in the presence of oxygen.
            </p>
            <div className="lrn-eq">
              <span>{`$$4\\text{Au} + 8\\text{CN}^- + \\text{O}_2 + 2\\text{H}_2\\text{O} \\rightarrow 4[\\text{Au(CN)}_2]^- + 4\\text{OH}^-$$`}</span>
            </div>
            <p>
              The gold complex is then reduced back to gold metal by zinc or by electrodeposition.
              Cyanide waste must be treated before release, hypochlorite or hydrogen peroxide
              oxidises CN⁻ to harmless CO₂ and N₂.
            </p>
          </div>
        </>,
        <>
          <div className="lrn-section" id="lrn-section-19">
            <h2>Corrosion, Passivation, and Corrosion Protection</h2>
            <div className="lrn-predict">
              <span className="lrn-predict-label">PREDICT</span>
              <p>
                Zinc corrodes faster than iron, yet galvanising iron with zinc makes the iron last
                longer. How can a more reactive metal protect a less reactive one?
              </p>
              <details className="lrn-predict-reveal">
                <summary>Check your thinking</summary>
                <p>
                  Zinc has a more negative reduction potential than iron. In any electrochemical
                  cell formed at a scratch, zinc is the anode and corrodes; iron is the cathode and
                  is protected. The more reactive metal sacrifices itself to preserve the iron.
                </p>
              </details>
            </div>
            <p>
              Iron rusts when oxygen and water are both present. The mechanism is electrochemical:
              iron acts as an anode and dissolves, oxygen is reduced at a cathode site. Rust
              (Fe₂O₃·xH₂O) is porous and flakes off, exposing fresh iron continuously.
            </p>
            <p>
              <strong>Galvanising</strong> coats iron with zinc. When the coating is scratched, the
              exposed zinc corrodes preferentially. This is sacrificial protection or cathodic
              protection.
            </p>
            <CathodicProtectionViz />
            <p>
              <strong>Passivation</strong> occurs when the surface oxide is dense, adherent, and
              insoluble. Aluminium, chromium, and titanium all passivate. The passive layer is
              self-healing: scratches re-oxidise immediately in air.
            </p>
            <p>
              <strong>Stainless steel</strong> contains approximately 13% or more chromium. The
              chromium forms a stable Cr₂O₃ layer that passivates the entire surface.
            </p>
            <div className="lrn-compare">
              <p>
                <strong>Galvanising (Zn coating) vs. tin plating</strong>, zinc provides
                sacrificial protection, so iron stays protected even when the zinc is scratched; tin
                is less reactive than iron, so a scratched tin can exposes iron as the anode, and
                iron corrodes faster than if uncoated.
              </p>
            </div>
          </div>
        </>,
        <>
          <div className="lrn-section" id="lrn-section-20">
            <h2>Photovoltaics and Cisplatin</h2>
            <div className="lrn-predict">
              <span className="lrn-predict-label">PREDICT</span>
              <p>
                Cisplatin kills cancer cells by attacking DNA. It contains platinum. Why would a
                platinum complex specifically target DNA rather than just poisoning all cells
                equally?
              </p>
              <details className="lrn-predict-reveal">
                <summary>Check your thinking</summary>
                <p>
                  Cisplatin preferentially kills rapidly dividing cells because those cells
                  replicate their DNA most frequently. The platinum cross-link blocks replication
                  and triggers apoptosis. Slowly dividing normal cells are less sensitive because
                  they replicate DNA less often.
                </p>
              </details>
            </div>
            <h3>Silicon p-n Junction Solar Cell</h3>
            <p>
              Zone-refined silicon is doped to create a p-n junction. The p-type region
              (boron-doped) has positive holes; the n-type (phosphorus-doped) has free electrons.
              Light creates electron-hole pairs at the junction. The built-in electric field sweeps
              electrons to the n-side and holes to the p-side, generating a current. Efficiency of
              crystalline silicon cells reaches approximately 20%.
            </p>
            <h3>Grätzel Dye-Sensitised Solar Cell</h3>
            <p>
              TiO₂ nanoparticles provide a very large surface area. A ruthenium-bipyridyl dye coats
              the particles. Light excites the dye, which injects an electron into TiO₂'s conduction
              band. The electron travels through the TiO₂ network to the external circuit. An
              iodide/triiodide electrolyte regenerates the oxidised dye. Efficiency: around 10%.
            </p>
            <div className="lrn-compare">
              <p>
                <strong>Si PV vs. Grätzel cell</strong>, Si PV requires semiconductor-grade
                silicon, gives ~20% efficiency, and operates at high voltage; Grätzel cells use
                cheap TiO₂ nanoparticles and dye, give ~10% efficiency, function at lower light
                intensities, and can be printed on flexible substrates.
              </p>
            </div>
            <h3>Cisplatin and Anticancer Chemistry</h3>
            <p>
              Cisplatin ({`$\\text{cis-[PtCl}_2(\\text{NH}_3)_2]$`}) enters cells and loses its
              chloride ligands inside the cell where chloride concentration is low. The reactive
              platinum then coordinates to the N7 position of adjacent guanine bases on the same DNA
              strand, forming a 1,2-intrastrand cross-link. This bends the DNA helix, blocking
              replication and triggering apoptosis in rapidly dividing cells.
            </p>
            <p>
              <strong>Carboplatin</strong> replaces the two chloride ligands with a
              cyclobutanedicarboxylate group. This ligand leaves more slowly than chloride, making
              carboplatin less reactive and less toxic to the kidneys than cisplatin.
            </p>
            <div className="lrn-compare">
              <p>
                <strong>Cisplatin vs. carboplatin</strong>, cisplatin is more reactive, more potent
                against tumours, but causes severe nephrotoxicity (kidney damage) and nausea;
                carboplatin has lower aquation rate and causes less kidney toxicity, becoming the
                preferred agent when renal function is compromised.
              </p>
            </div>
          </div>
        </>,
        <>
          <div className="lrn-section" id="lrn-section-21">
            <h2>Industrial Process Design Principles</h2>
            <div className="lrn-predict">
              <span className="lrn-predict-label">PREDICT</span>
              <p>
                Every industrial process must balance yield, reaction rate, energy cost, and safety.
                Pick any equilibrium reaction. How do temperature and pressure trade off against
                each other?
              </p>
              <details className="lrn-predict-reveal">
                <summary>Check your thinking</summary>
                <p>
                  For an exothermic reaction that reduces moles of gas (like the Haber process): low
                  temperature gives high equilibrium yield but slow rate; high pressure gives high
                  yield but raises engineering costs and safety risk. The industrial optimum is
                  always a compromise between thermodynamics and kinetics.
                </p>
              </details>
            </div>
            <h3>Equilibrium vs. Kinetics</h3>
            <p>
              In reversible reactions, thermodynamics predicts the maximum yield at equilibrium.
              Kinetics determines how fast the reaction reaches equilibrium. These two requirements
              often point in opposite directions.
            </p>
            <p>
              For exothermic reactions (Haber, Contact): low temperature gives high equilibrium
              yield but slow rate. High temperature gives faster rate but lower equilibrium yield.
              The industrial operating temperature is always a compromise.
            </p>
            <EquilibriumKineticsCrossoverViz />
            <p>
              <strong>Continuous product removal</strong> shifts the equilibrium to the product
              side. The Haber process condenses ammonia out as a liquid and recycles unreacted
              gases. The Claus process condenses sulfur between stages.
            </p>
            <h3>Catalyst Role</h3>
            <p>
              Catalysts increase reaction rate without being consumed. They lower the activation
              energy, allowing the same equilibrium position to be reached faster at a lower
              temperature.
            </p>
            <ul className="lrn-list">
              <li>
                <strong>Heterogeneous catalysts</strong> are in a different phase from the
                reactants. Iron (Haber), V₂O₅ (Contact), Pt-Rh gauze (Ostwald), and Pd on carbon
                (hydrogenation) are all solid catalysts with gaseous or liquid reactants. The
                reaction occurs on the catalyst surface.
              </li>
              <li>
                <strong>Homogeneous catalysts</strong> are in the same phase as reactants.
                Wilkinson's catalyst dissolves in the reaction solvent. PdCl₂ in the Wacker process
                is also homogeneous. Homogeneous catalysts are often more selective but harder to
                separate from products.
              </li>
            </ul>
            <div className="lrn-elaborate">
              <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
              <p>
                Promoters are not catalysts themselves. In the Haber process, Al₂O₃ prevents
                sintering (clumping) of iron particles, maintaining surface area. K₂O increases
                electron density on iron, strengthening N₂ adsorption and activation.
              </p>
            </div>
            <div className="lrn-self-explain">
              <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
              <p>
                Why does adding a catalyst not change the position of equilibrium, even though it
                speeds up both forward and reverse reactions?
              </p>
              <details className="lrn-predict-reveal">
                <summary>Expert explanation</summary>
                <p>
                  A catalyst lowers the activation energy for both the forward and reverse reactions
                  by the same amount. Both rates increase by the same factor, so the ratio of
                  forward to reverse rate (which equals the equilibrium constant K) is unchanged.
                  The equilibrium position depends only on thermodynamics, not kinetics.
                </p>
              </details>
            </div>
            <h3>Electrolytic vs. Pyrometallurgical Extraction</h3>
            <p>
              Active metals (Na, Mg, Al, Ca, Ti) have very negative reduction potentials. Carbon at
              any practical temperature cannot reduce their oxides. Electrolysis supplies electrical
              energy to drive the thermodynamically unfavourable reduction.
            </p>
            <p>
              Less reactive metals (Fe, Cu, Zn, Ni, Pb) have reduction potentials high enough that
              carbon or hydrogen can reduce their ores at high temperature. Pyrometallurgy
              (heat-based reduction) is cheaper than electrolysis for these metals.
            </p>
            <div className="lrn-compare">
              <p>
                <strong>
                  Electrolytic extraction (Hall-Héroult) vs. blast furnace pyrometallurgy
                </strong>{' '}, Hall-Héroult uses electrical energy to reduce Al³⁺ at ~960 °C; the blast furnace
                uses chemical energy from coke combustion to reduce Fe³⁺ at ~1500 °C; electrolysis
                is needed when the oxide is too stable for carbon reduction.
              </p>
            </div>
          </div>
        </>,
        <>
          <div className="lrn-section" id="lrn-section-22">
            <h2>Lanthanoid Contraction and Summary</h2>
            <div className="lrn-predict">
              <span className="lrn-predict-label">PREDICT</span>
              <p>
                Zirconium and hafnium always occur together in the same ore. Separating them is one
                of the hardest challenges in metallurgy. What makes two elements in completely
                different periods almost identical?
              </p>
              <details className="lrn-predict-reveal">
                <summary>Check your thinking</summary>
                <p>
                  The lanthanoid contraction. Filling the 4f shell across the lanthanoids contracts
                  the atomic radii so that hafnium is almost the same size as zirconium, giving them
                  nearly identical chemistry.
                </p>
              </details>
            </div>
            <h3>The Lanthanoid Contraction</h3>
            <p>
              The lanthanoid contraction refers to the gradual decrease in atomic radius across the
              lanthanoid series (La to Lu) as 4f electrons are added. These f electrons shield the
              nucleus poorly. Each added proton pulls all electrons slightly closer. By the time the
              5d transition series starts (Hf, Ta, W, Re), the 4f contraction has exactly cancelled
              the expected size increase from going to a higher period.
            </p>
            <p>
              The result: Zr and Hf have almost identical radii and nearly identical chemistry. The
              same is true for Nb/Ta and Mo/W. Separating these pairs requires liquid-liquid
              extraction with tailored solvent systems.
            </p>
            <div className="lrn-elaborate">
              <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
              <p>
                This contraction explains why second- and third-row transition metals are much more
                similar to each other than first- and second-row elements. It is why Zr must be
                separated from Hf before nuclear use, and why the separation was only developed in
                the 1950s for the nuclear industry.
              </p>
            </div>
            <h3>Magnetic Materials: Ferrites and Garnets</h3>
            <p>
              Ferrites have the spinel structure {`$\\text{MFe}_2\\text{O}_4$`} (where M = Mn, Ni,
              Co, Zn). Metal ions occupy two types of tetrahedral and octahedral sites. Unpaired
              electron spins on ions in the two types of sites align antiparallel but do not fully
              cancel, leaving a net magnetisation, this is ferrimagnetism. Ferrites are electrical
              insulators, preventing eddy current losses at high frequencies. They are the ideal
              core material in transformer cores and recording media.
            </p>
            <p>
              Yttrium iron garnet (YIG, {`$\\text{Y}_3\\text{Fe}_5\\text{O}_{12}$`}) is used in
              microwave filters in radar and communications equipment.
            </p>
            <div className="lrn-self-explain">
              <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
              <p>
                Why are ferrites preferred over iron in high-frequency transformer cores, even
                though iron is more strongly magnetic?
              </p>
              <details className="lrn-predict-reveal">
                <summary>Expert explanation</summary>
                <p>
                  Iron is a metal and conducts electricity. In a changing magnetic field (AC), it
                  develops eddy currents that waste energy as heat and reduce core efficiency.
                  Ferrites are insulators, eddy currents cannot flow, so they have low losses at
                  radio frequencies. Lower intrinsic magnetisation is an acceptable trade-off for
                  much better high-frequency performance.
                </p>
              </details>
            </div>
            <h3>Key Industrial Processes: Summary Table</h3>
            <div className="table-wrapper">
              <table>
                <thead>
                  <tr>
                    <th>Process</th>
                    <th>Feedstock</th>
                    <th>Product</th>
                    <th>Catalyst / Conditions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Haber</td>
                    <td>{`$\\text{N}_2 + \\text{H}_2$`}</td>
                    <td>{`$\\text{NH}_3$`}</td>
                    <td>Fe, Al₂O₃, K₂O; 400–500 °C, 150–300 atm</td>
                  </tr>
                  <tr>
                    <td>Ostwald</td>
                    <td>{`$\\text{NH}_3$`}</td>
                    <td>{`$\\text{HNO}_3$`}</td>
                    <td>Pt/Rh gauze; 850 °C</td>
                  </tr>
                  <tr>
                    <td>Contact</td>
                    <td>{`$\\text{SO}_2 + \\text{O}_2$`}</td>
                    <td>{`$\\text{SO}_3 \\rightarrow \\text{H}_2\\text{SO}_4$`}</td>
                    <td>V₂O₅; 450 °C</td>
                  </tr>
                  <tr>
                    <td>Hall-Héroult</td>
                    <td>{`$\\text{Al}_2\\text{O}_3$`}</td>
                    <td>Al</td>
                    <td>Electrolysis, cryolite, 960 °C</td>
                  </tr>
                  <tr>
                    <td>Bayer</td>
                    <td>Bauxite</td>
                    <td>{`$\\text{Al}_2\\text{O}_3$`}</td>
                    <td>NaOH, 150–240 °C, seeding</td>
                  </tr>
                  <tr>
                    <td>Downs</td>
                    <td>Molten NaCl</td>
                    <td>Na + Cl₂</td>
                    <td>Electrolysis, molten salt</td>
                  </tr>
                  <tr>
                    <td>Chloralkali</td>
                    <td>Brine</td>
                    <td>Cl₂ + H₂ + NaOH</td>
                    <td>Membrane electrolysis</td>
                  </tr>
                  <tr>
                    <td>Frasch</td>
                    <td>Underground S</td>
                    <td>S</td>
                    <td>Superheated water, 160 °C, 16 atm</td>
                  </tr>
                  <tr>
                    <td>Claus</td>
                    <td>{`$\\text{H}_2\\text{S}$`}</td>
                    <td>S</td>
                    <td>Multi-stage, 200–300 °C</td>
                  </tr>
                  <tr>
                    <td>Steam reforming</td>
                    <td>CH₄ + H₂O</td>
                    <td>CO + H₂</td>
                    <td>Ni, 700–900 °C</td>
                  </tr>
                  <tr>
                    <td>Wacker</td>
                    <td>Ethene + O₂</td>
                    <td>Acetaldehyde</td>
                    <td>PdCl₂/CuCl₂</td>
                  </tr>
                  <tr>
                    <td>Andrussow</td>
                    <td>CH₄ + NH₃ + O₂</td>
                    <td>HCN</td>
                    <td>Pt, 1000 °C</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </>
      ]
    },
    practice: [
      {
        q: 'What are the conditions for the Haber process?',
        a: 'Iron catalyst, 400–500 °C, 150–300 atm. Promoters Al₂O₃ and K₂O increase catalyst surface area and electron density. The reaction is $\\text{N}_2 + 3\\text{H}_2 \\rightleftharpoons 2\\text{NH}_3$ with $\\Delta H° = -92\\ \\text{kJ/mol}$.'
      },
      {
        q: 'In the Ostwald process, what is the first step and its catalyst?',
        a: 'Ammonia oxidises to nitric oxide: $4\\text{NH}_3 + 5\\text{O}_2 \\rightarrow 4\\text{NO} + 6\\text{H}_2\\text{O}$. A platinum-rhodium alloy gauze at about 850 °C catalyses this step. Without the Pt/Rh catalyst, the reaction is too slow to be practical.'
      },
      {
        q: 'Why does the Haber process use 400–500 °C rather than a lower temperature?',
        a: 'Lower temperatures give higher equilibrium yield, but the reaction becomes too slow. The iron catalyst only works well above 400 °C. Industrial yield is about 15% at 200 atm and 400 °C, a deliberate kinetics-over-thermodynamics compromise.'
      },
      {
        q: 'What happens in the Contact process to make sulfuric acid?',
        a: '$\\text{SO}_2$ oxidises to $\\text{SO}_3$ over a $\\text{V}_2\\text{O}_5$ catalyst at 450 °C: $2\\text{SO}_2 + \\text{O}_2 \\rightleftharpoons 2\\text{SO}_3$. Then $\\text{SO}_3$ dissolves in water to give $\\text{H}_2\\text{SO}_4$. Direct absorption of $\\text{SO}_3$ in water forms a dangerous mist, so oleum is used instead.'
      },
      {
        q: 'How does the Hall–Héroult process produce aluminium?',
        a: 'Aluminium oxide dissolves in molten cryolite ($\\text{Na}_3\\text{AlF}_6$) at about 960 °C. Electrolysis reduces $\\text{Al}^{3+}$ to liquid aluminium at the carbon cathode: $\\text{Al}^{3+} + 3e^- \\rightarrow \\text{Al}$. Oxygen evolves at the carbon anode, which burns away and needs regular replacement.'
      },
      {
        q: 'Why can you not reduce aluminium oxide with carbon in a blast furnace?',
        a: 'The standard electrode potential for $\\text{Al}^{3+}/\\text{Al}$ is $-1.66\\ \\text{V}$, far more negative than iron. Carbon cannot supply enough reducing power at practical temperatures. Electrolysis is the only viable route for active metals with very negative reduction potentials.'
      },
      {
        q: 'Describe the Bayer process for purifying aluminium ore.',
        a: 'Bauxite dissolves in hot sodium hydroxide: $\\text{Al}_2\\text{O}_3 + 2\\text{NaOH} \\rightarrow 2[\\text{Al(OH)}_4]^-$. Seeding with $\\text{Al(OH)}_3$ crystals triggers precipitation of pure aluminium hydroxide. Calcination at high temperature converts it to $\\text{Al}_2\\text{O}_3$ for Hall–Héroult electrolysis.'
      },
      {
        q: "What does the Downs cell produce and why can't you use aqueous NaCl instead?",
        a: 'Electrolysis of molten $\\text{NaCl}$ gives sodium metal and chlorine: $2\\text{NaCl}_{(l)} \\rightarrow 2\\text{Na} + \\text{Cl}_2$. In aqueous solution, water is preferentially reduced at the cathode, giving hydrogen gas instead of sodium. Sodium metal reacts violently with water, so molten salt is essential.'
      },
      {
        q: 'How does the chloralkali process differ from the Downs cell?',
        a: 'The chloralkali process electrolyses aqueous $\\text{NaCl}$, producing $\\text{Cl}_2$, $\\text{H}_2$, and $\\text{NaOH}$. The Downs cell uses molten $\\text{NaCl}$ and produces $\\text{Na}$ metal and $\\text{Cl}_2$. The two processes share the same raw material but target different products for different industries.'
      },
      {
        q: 'Why is the membrane cell preferred over the mercury cell in chloralkali production?',
        a: 'The mercury cell uses liquid mercury as a cathode, creating serious environmental hazards. A Nafion polymer membrane separates the anode and cathode compartments, keeping $\\text{NaOH}$ pure without mercury. The Danube spill in 2000 highlighted the catastrophic risk of mercury cell technology.'
      },
      {
        q: 'What does the Frasch process extract, and how?',
        a: 'The Frasch process extracts native underground sulfur. Superheated water at 160 °C and 16 atm melts the sulfur in place. Compressed air then pushes the liquid sulfur to the surface through concentric pipes.'
      },
      {
        q: 'Compare the Frasch process and the Claus process for obtaining sulfur.',
        a: 'Frasch mines native underground sulfur deposits using superheated water. The Claus process recovers sulfur from hydrogen sulfide in sour natural gas: $2\\text{H}_2\\text{S} + \\text{SO}_2 \\rightarrow 3\\text{S} + 2\\text{H}_2\\text{O}$. Claus is now dominant because most accessible native deposits are depleted.'
      },
      {
        q: 'What is the role of decreasing temperature stages in the Claus process?',
        a: 'The Claus process runs at three stages: 300 °C, then 250 °C, then 200 °C. Lower temperature pushes the equilibrium toward sulfur product. Each stage condenses liquid sulfur, removing it from equilibrium and driving further conversion.'
      },
      {
        q: 'Write the steam reforming reaction and state its purpose.',
        a: '$\\text{CH}_4 + \\text{H}_2\\text{O} \\rightarrow \\text{CO} + 3\\text{H}_2$. Steam reforming converts natural gas into synthesis gas (syngas). This syngas is the main industrial source of hydrogen for the Haber process.'
      },
      {
        q: 'What does the water-gas shift reaction achieve after steam reforming?',
        a: '$\\text{CO} + \\text{H}_2\\text{O} \\rightarrow \\text{CO}_2 + \\text{H}_2$. It converts the carbon monoxide byproduct into additional hydrogen. The $\\text{CO}_2$ is removed by scrubbing, leaving pure $\\text{H}_2$ for ammonia synthesis.'
      },
      {
        q: 'How does zone refining produce semiconductor-grade silicon?',
        a: 'A narrow molten zone passes along a silicon rod. Impurities dissolve preferentially in the melt and travel with the zone to one end. Repeating the process many times concentrates all impurities at one end, which is then cut off.'
      },
      {
        q: 'Predict what would happen if you ran the Haber process at 600 atm instead of 200 atm.',
        a: 'Higher pressure shifts equilibrium further toward $\\text{NH}_3$ because the forward reaction reduces moles of gas from four to two. Yield would increase above the ~15% seen at 200 atm. However, the engineering cost and safety risk of extremely high-pressure vessels grows rapidly with pressure, so 150–300 atm is the practical optimum.'
      },
      {
        q: 'What is the Wacker process and what does it make?',
        a: 'The Wacker process oxidises ethylene to acetaldehyde: $\\text{C}_2\\text{H}_4 + \\tfrac{1}{2}\\text{O}_2 \\rightarrow \\text{CH}_3\\text{CHO}$. $\\text{PdCl}_2$ acts as the primary oxidant, reduced to $\\text{Pd}^0$, then reoxidised by $\\text{CuCl}_2$, which is in turn reoxidised by $\\text{O}_2$. This makes it a catalytic cycle rather than a stoichiometric one.'
      },
      {
        q: 'How is titanium dioxide made by the sulfate route?',
        a: 'Ilmenite ($\\text{FeTiO}_3$) dissolves in concentrated $\\text{H}_2\\text{SO}_4$ to give $\\text{TiOSO}_4$. Hydrolysis precipitates hydrated $\\text{TiO}_2$. Calcination gives the white pigment $\\text{TiO}_2$.'
      },
      {
        q: 'What is the chloride route to $\\text{TiO}_2$ and why is it cleaner?',
        a: '$\\text{TiO}_2$ reacts with $\\text{Cl}_2$ to give $\\text{TiCl}_4$, which is oxidised with $\\text{O}_2$ back to pure $\\text{TiO}_2$. The sulfate route generates large volumes of iron sulfate waste. The chloride route recycles $\\text{Cl}_2$ and produces less acidic waste.'
      },
      {
        q: 'What catalyst does the SOHIO process use to make acrylonitrile?',
        a: 'Bismuth molybdate catalyses: $\\text{C}_3\\text{H}_6 + \\text{NH}_3 + \\tfrac{1}{2}\\text{O}_2 \\rightarrow \\text{CH}_2{=}\\text{CHCN} + 3\\text{H}_2\\text{O}$. This single-step ammoxidation of propylene replaced older multi-step routes. Acrylonitrile is a key monomer for acrylic fibres and ABS plastics.'
      },
      {
        q: 'How does cyanide leaching extract gold from low-grade ore?',
        a: '$4\\text{Au} + 8\\text{CN}^- + \\text{O}_2 + 2\\text{H}_2\\text{O} \\rightarrow 4[\\text{Au(CN)}_2]^- + 4\\text{OH}^-$. Gold dissolves as the stable dicyanoaurate complex. Zinc or activated carbon then recovers gold from the solution.'
      },
      {
        q: 'Write the equations for making quicklime and then slaked lime.',
        a: 'Calcium carbonate decomposes at 900 °C: $\\text{CaCO}_3 \\rightarrow \\text{CaO} + \\text{CO}_2$. Adding water to quicklime gives slaked lime: $\\text{CaO} + \\text{H}_2\\text{O} \\rightarrow \\text{Ca(OH)}_2$. Slaked lime is used to neutralise acidic soils and treat wastewater.'
      },
      {
        q: 'How does the superphosphate process make fertiliser?',
        a: 'Rock phosphate reacts with sulfuric acid: $\\text{Ca}_3(\\text{PO}_4)_2 + 2\\text{H}_2\\text{SO}_4 \\rightarrow \\text{Ca(H}_2\\text{PO}_4)_2 + 2\\text{CaSO}_4$. The product calcium dihydrogen phosphate is water-soluble, so plants can absorb the phosphorus. The insoluble calcium phosphate in rock phosphate is unavailable to plants.'
      },
      {
        q: 'What are the conditions for the Andrussow process making HCN?',
        a: '$2\\text{CH}_4 + 2\\text{NH}_3 + 3\\text{O}_2 \\rightarrow 2\\text{HCN} + 6\\text{H}_2\\text{O}$ over platinum at 1000 °C. The very high temperature drives this endothermic reaction. HCN is used to make nitriles, acrylonitrile, and gold leach solutions.'
      },
      {
        q: 'Write the discharge reaction for a lead-acid battery.',
        a: '$\\text{Pb} + \\text{PbO}_2 + 2\\text{H}_2\\text{SO}_4 \\rightarrow 2\\text{PbSO}_4 + 2\\text{H}_2\\text{O}$. Lead is oxidised at the anode; lead dioxide is reduced at the cathode. Both electrodes form lead sulfate on discharge, which reverses on charging.'
      },
      {
        q: 'Compare lead-acid and lithium-ion batteries on energy density and weight.',
        a: 'Lead-acid batteries are heavy and have low energy density because lead is very dense and the cell voltage is only about 2 V. Lithium-ion cells use lightweight lithium intercalation chemistry with cell voltages near 3.7 V, giving far higher energy per kilogram. Lead-acid survives better at high discharge rates and is far cheaper per kilowatt-hour.'
      },
      {
        q: 'How does a lithium-ion cell store and release energy at its cathode?',
        a: 'Lithium ions intercalate into layered $\\text{LiCoO}_2$ during charging, slipping between oxide layers. During discharge, lithium deintercalates and cobalt is reduced from $\\text{Co}^{4+}$ to $\\text{Co}^{3+}$. This topotactic reaction leaves the crystal structure largely intact, allowing many charge-discharge cycles.'
      },
      {
        q: 'What is the NiCd battery reaction and what is its main environmental problem?',
        a: '$\\text{NiO(OH)} + \\text{Cd} + \\text{H}_2\\text{O} \\rightarrow \\text{Ni(OH)}_2 + \\text{Cd(OH)}_2$ on discharge. Cadmium is highly toxic and accumulates in kidneys and bones. Most countries now restrict NiCd in consumer electronics in favour of NiMH or lithium-ion cells.'
      },
      {
        q: 'What does the super-ion battery reaction show about potassium ferrate?',
        a: '$2\\text{K}_2\\text{FeO}_4 + 3\\text{Zn} \\rightarrow \\text{Fe}_2\\text{O}_3 + \\text{ZnO} + 2\\text{K}_2\\text{ZnO}_2$. Potassium ferrate ($\\text{K}_2\\text{FeO}_4$) acts as both oxidant and electrolyte source. The iron product is non-toxic, making it a green battery candidate compared to $\\text{MnO}_2$ or $\\text{PbO}_2$.'
      },
      {
        q: 'How does a three-way catalytic converter clean exhaust gas?',
        a: 'Rhodium, palladium, and platinum on an alumina support simultaneously oxidise hydrocarbons and CO while reducing $\\text{NO}_x$ to $\\text{N}_2$. A lambda (λ) sensor keeps the air-fuel ratio near stoichiometric so all three reactions proceed efficiently. Running rich or lean deactivates one set of reactions.'
      },
      {
        q: "What is Wilkinson's catalyst and what does it do?",
        a: "Wilkinson's catalyst is $\\text{RhCl(PPh}_3)_3$. It hydrogenates alkenes homogeneously in solution at room temperature and one atmosphere. It is far milder than heterogeneous palladium on carbon but cannot be easily separated from the product."
      },
      {
        q: "Compare homogeneous Wilkinson's catalyst with heterogeneous Pd/C for hydrogenation.",
        a: "Wilkinson's catalyst operates in solution and is highly selective for terminal alkenes. Pd/C is heterogeneous, easily filtered off, and cheaper to recycle. Wilkinson's gives better chemo-selectivity; Pd/C gives easier workup and is preferred for large-scale pharmaceutical manufacturing."
      },
      {
        q: 'How does a WO₃ electrochromic window change colour?',
        a: '$\\text{Li}^+ + e^- + \\text{WO}_3 \\rightarrow \\text{LiWO}_3$. Lithium intercalation creates tungsten bronze, which absorbs visible light and appears blue. When $x > 0.25$ in $\\text{Li}_x\\text{WO}_3$, the material becomes metallic and blocks near-infrared radiation.'
      },
      {
        q: 'How do cisplatin and carboplatin kill cancer cells?',
        a: 'Both drugs cross-link adjacent guanine bases at N7 in DNA, bending the double helix. This blocks DNA replication and triggers cell death. Carboplatin has a slower aquation rate, causing fewer kidney and nerve side effects than cisplatin.'
      },
      {
        q: 'Predict whether carboplatin or cisplatin would cause more nausea in a patient. Explain why.',
        a: "Cisplatin causes more nausea and vomiting. It releases chloride ligands quickly in the low-chloride environment inside cells, producing reactive aqua species that also attack proteins and ion channels. Carboplatin's cyclobutanedicarboxylate leaving group hydrolyses much more slowly, reducing off-target reactions and side effects."
      },
      {
        q: 'What makes technetium-99m ideal for medical imaging?',
        a: '$^{99m}\\text{Tc}$ has a six-hour half-life, long enough to complete imaging but short enough to minimise patient dose. It emits only gamma radiation (no alpha or beta), and the gamma energy is well-matched to standard gamma cameras. The pertechnetate ion $[\\text{TcO}_4]^-$ comes from a long-lived $^{99}\\text{Mo}$ generator that hospitals can store on site.'
      },
      {
        q: 'What makes $[\\text{Ru(bpy)}_3]^{2+}$ both a stronger oxidant and a stronger reductant than its ground state?',
        a: 'Metal-to-ligand charge transfer absorbs light, then intersystem crossing gives a long-lived triplet state (600 ns lifetime). In this excited state, one electron sits in a higher-energy orbital. This makes the complex easier to oxidise (better reductant) and easier to reduce (better oxidant) simultaneously compared to the ground state.'
      },
      {
        q: 'How does a Grätzel (dye-sensitised) solar cell work?',
        a: "A ruthenium dye anchored to $\\text{TiO}_2$ nanoparticles absorbs visible light. The excited dye injects an electron into the $\\text{TiO}_2$ conduction band. An iodide/triiodide electrolyte regenerates the dye, completing the circuit. Efficiency is about 10%, lower than silicon's 20%, but the materials cost far less."
      },
      {
        q: 'Compare silicon photovoltaic cells and Grätzel cells on efficiency and cost.',
        a: 'Silicon p–n junction cells reach about 20% efficiency but require ultra-pure zone-refined silicon, making them expensive. Grätzel cells use cheap $\\text{TiO}_2$ and a ruthenium dye and reach about 10% efficiency. Silicon dominates rooftop installations; Grätzel technology suits low-cost, low-power applications.'
      },
      {
        q: 'How does silver photography create a latent image?',
        a: 'Light hits silver bromide grains in the emulsion, releasing electrons that reduce $\\text{Ag}^+$ to tiny silver clusters, the latent image. Developer reduces the entire grain to metallic silver wherever a cluster exists, amplifying the signal by billions. Fixer ($\\text{Na}_2\\text{S}_2\\text{O}_3$) dissolves unexposed $\\text{AgBr}$, making the image permanent.'
      },
      {
        q: 'What makes photochromic lenses darken in sunlight and clear indoors?',
        a: 'Silver chloride microcrystals in the glass absorb UV: $\\text{Ag}^+ + e^- \\rightarrow \\text{Ag}^0$, producing silver clusters that absorb visible light. Indoors, without UV, the reaction reverses: $\\text{Ag}^0$ reoxidises and the silver ions redissolve. The glass matrix prevents the silver atoms from aggregating irreversibly, allowing the cycle to repeat.'
      },
      {
        q: 'What is Bordeaux mixture and how does it protect crops?',
        a: 'Bordeaux mixture is a suspension of $\\text{CuSO}_4$ and $\\text{Ca(OH)}_2$. It coats plant leaves with copper hydroxide, which releases $\\text{Cu}^{2+}$ ions that disrupt fungal enzyme systems. It has been used in vineyards since the 1880s and is still approved for organic farming.'
      },
      {
        q: 'Write the equation for roasting zinc sulfide ore.',
        a: '$2\\text{ZnS} + 3\\text{O}_2 \\rightarrow 2\\text{ZnO} + 2\\text{SO}_2$. Roasting converts the insoluble sulfide to oxide, which can then be reduced with carbon or dissolved in acid. The $\\text{SO}_2$ byproduct is captured to make sulfuric acid, avoiding atmospheric pollution.'
      },
      {
        q: 'What is the half-reaction for permanganate in acid solution?',
        a: '$[\\text{MnO}_4]^- + 8\\text{H}^+ + 5e^- \\rightarrow \\text{Mn}^{2+} + 4\\text{H}_2\\text{O}$; $E° = +1.51\\ \\text{V}$. The deep purple permanganate loses colour as manganese reduces from the +7 state to the pale pink +2 state. This colour change makes permanganate a self-indicating titrant in volumetric analysis.'
      },
      {
        q: 'Explain the electrochemical mechanism of iron rusting.',
        a: 'Iron acts as an anode at wet spots, oxidising to $\\text{Fe}^{2+}$. At cathodic regions nearby, oxygen is reduced using electrons that flow through the iron. The overall process $2\\text{Fe} + 2\\text{H}_2\\text{O} + \\text{O}_2 \\rightarrow \\text{Fe}_2\\text{O}_3{\\cdot}x\\text{H}_2\\text{O}$ requires both water and oxygen. Removing either one stops corrosion.'
      },
      {
        q: 'Why does aluminium resist corrosion even though its $E°$ is very negative?',
        a: 'Aluminium instantly forms a thin, dense $\\text{Al}_2\\text{O}_3$ layer in air. This passive oxide layer is impermeable and self-sealing, blocking further oxidation. Chromium and titanium behave the same way, their reactivity is kinetically suppressed by the oxide film.'
      },
      {
        q: 'How does galvanising protect steel from rusting?',
        a: 'Steel is coated with zinc. Zinc is more reactive than iron, so it has a more negative reduction potential. At a scratch, zinc acts as a sacrificial anode and corrodes instead of the iron. The iron stays protected even when the coating is damaged.'
      },
      {
        q: 'How do you safely destroy cyanide waste from gold mining?',
        a: '$\\text{CN}^-$ oxidises with sodium hypochlorite or hydrogen peroxide: $\\text{CN}^- + \\text{OCl}^- \\rightarrow \\text{OCN}^- + \\text{Cl}^-$, then further to $\\text{CO}_2$ and $\\text{N}_2$. The 2000 Baia Mare (Danube) spill showed what happens when tailings ponds fail. Proper treatment makes cyanide waste safe before discharge.'
      },
      {
        q: 'What does the $\\text{MoO}_3/\\text{CoO}$ catalyst do in petroleum refining?',
        a: 'The molybdenum-cobalt oxide system on activated alumina removes sulfur from crude oil fractions. Hydrogen reacts with organic sulfur compounds to give $\\text{H}_2\\text{S}$, which is stripped and fed to a Claus unit. This hydrodesulfurisation prevents sulfur dioxide emissions from burning the fuel.'
      },
      {
        q: 'What is the lanthanoid contraction and what pairs of metals does it make similar?',
        a: 'Filling the 4f subshell across the lanthanoids gives poor shielding of the nuclear charge. The 5d metals after the lanthanoids are smaller than expected. This makes zirconium and hafnium almost identical in radius, and likewise niobium/tantalum and molybdenum/tungsten, separating each pair is chemically very difficult.'
      },
      {
        q: 'Explain the inert pair effect with examples.',
        a: 'Relativistic contraction of 6s orbitals makes them harder to ionise in heavy p-block elements. Thallium prefers +1, lead prefers +2, and bismuth prefers +3, each two oxidation states below their group maximum. The 6s² pair acts as if inert because the energy gain from forming two extra bonds does not offset the relativistic stabilisation.'
      },
      {
        q: 'How does $\\text{MoS}_2$ act as a lubricant and when should you choose it over graphite?',
        a: '$\\text{MoS}_2$ has a layered structure: molybdenum sandwiched between sulfur sheets, held together by weak van der Waals forces. Layers slide over each other easily under shear. Graphite loses lubricating ability at high temperature where water vapour (needed to keep layers apart) is absent; $\\text{MoS}_2$ works in dry, high-temperature, and vacuum conditions where graphite fails.'
      },
      {
        q: 'What is Raney nickel and what is its main hazard?',
        a: 'Raney nickel is a skeletal nickel catalyst made by dissolving aluminium from a Ni-Al alloy with sodium hydroxide. The sponge-like structure has enormous surface area. It is pyrophoric, it ignites spontaneously in air, and must be kept wet during handling and storage.'
      },
      {
        q: 'What is a zeolite and how does ZSM-5 act as a molecular sieve?',
        a: 'Zeolites are aluminosilicate frameworks with uniform pores of molecular dimensions. ZSM-5 has intersecting channel pores defined by ten-membered rings. Molecules larger than the pore diameter cannot enter, so zeolites select reactants and products by size rather than just chemistry.'
      },
      {
        q: 'Predict what would happen to the Contact process yield if you ran it at 600 °C instead of 450 °C.',
        a: '$2\\text{SO}_2 + \\text{O}_2 \\rightleftharpoons 2\\text{SO}_3$ is exothermic. Higher temperature shifts equilibrium left, reducing $\\text{SO}_3$ yield. The $\\text{V}_2\\text{O}_5$ catalyst is also less selective above 500 °C. Modern plants run at 450 °C to balance rate and equilibrium yield; 600 °C would drop conversion below an economically viable level.'
      },
      {
        q: 'What are graphite intercalation compounds and why do potassium and lithium GICs matter?',
        a: "Graphite's layered structure allows guest species to insert between graphene sheets. Potassium GIC (donor-type) transfers electrons into graphite, making it metallic. Lithium GIC forms the anode in lithium-ion batteries: $\\text{Li}^+$ intercalates reversibly during charging, storing charge without structural collapse."
      },
      {
        q: 'What is unusual about the structure of $\\text{C}_{60}$ and what makes it superconduct?',
        a: '$\\text{C}_{60}$ has 12 pentagons and 20 hexagons, a truncated icosahedron. Each carbon bonds to three others in sp² geometry. Alkali metal doping gives $\\text{C}_{60}^{3-}$, which becomes superconducting at low temperature because the triply degenerate $t_{1u}$ orbital accepts three electrons to give a half-filled band.'
      },
      {
        q: 'How is a polysiloxane made from a chlorosilane?',
        a: '$\\text{SiCl}_2\\text{R}_2$ hydrolyses in water to give a silanol $\\text{R}_2\\text{Si(OH)}_2$. Condensation polymerisation eliminates water between silanol groups: $-\\text{Si(R}_2)-\\text{O}-$. The siloxane backbone $(\\text{SiO})_n$ is very flexible and thermally stable, giving silicone oils and rubbers their characteristic properties.'
      },
      {
        q: 'What is the difference between activated charcoal and graphite?',
        a: 'Both are forms of carbon, but their structures differ greatly. Graphite has ordered layers of sp² carbon with high electrical conductivity. Activated charcoal has a disordered, highly porous structure with surface area in the hundreds to thousands of square metres per gram, making it ideal for adsorption rather than conduction.'
      },
      {
        q: 'How does a calomel electrode work as a reference electrode?',
        a: 'The calomel electrode consists of mercury in contact with mercury(I) chloride and saturated KCl: $\\text{Hg}_2\\text{Cl}_2 + 2e^- \\rightarrow 2\\text{Hg} + 2\\text{Cl}^-$. Its potential is fixed by the chloride concentration, giving a stable, reproducible reference for potentiometric measurements.'
      },
      {
        q: 'What are the diagonal relationships in the periodic table and why do they arise?',
        a: 'Lithium resembles magnesium, beryllium resembles aluminium, and boron resembles silicon. Moving one period down and one group right gives similar charge density (charge-to-radius ratio). Similar charge density drives similar hydration enthalpies, lattice energies, and chemical behaviour despite different group membership.'
      },
      {
        q: 'What is the role of the lambda sensor in a catalytic converter?',
        a: 'The lambda sensor measures oxygen concentration in the exhaust. It feeds a signal to the engine management system, which adjusts the fuel-air ratio to stay near stoichiometric (λ = 1). At λ = 1, the converter oxidises CO and hydrocarbons efficiently while also reducing $\\text{NO}_x$, running rich or lean ruins one of these two functions.'
      },
      {
        q: 'Compare $\\text{KMnO}_4$ and $\\text{Cl}_2$ as drinking water disinfectants.',
        a: 'Permanganate leaves no taste and produces manganese dioxide as a harmless solid byproduct. Chlorine reacts with organic compounds to form trihalomethanes, which are potentially carcinogenic. Permanganate is preferred where organic load is high, though chlorine remains cheaper and more widely used for routine disinfection.'
      },
      {
        q: 'What are ferrites and what are they used for?',
        a: 'Ferrites have the formula $\\text{M}^{2+}\\text{Fe}_2\\text{O}_4$ where M is a divalent metal like $\\text{Mn}$, $\\text{Ni}$, or $\\text{Zn}$. Their magnetic ordering makes them useful as toner particles in laser printers and as magnetic recording media in tapes. They are electrical insulators, unlike iron metal, so eddy-current losses in high-frequency applications are negligible.'
      },
      {
        q: 'What is yttrium iron garnet (YIG) and where is it used?',
        a: 'YIG has the formula $\\text{Y}_3\\text{Fe}_5\\text{O}_{12}$. It is a ferrimagnetic oxide with extremely narrow ferromagnetic resonance linewidth. This makes it the material of choice for microwave filters in radar systems and satellite communications, where precise frequency selectivity is critical.'
      },
      {
        q: 'What are borax and kernite, and where are they found?',
        a: 'Borax is $\\text{Na}_2\\text{B}_4\\text{O}_7{\\cdot}10\\text{H}_2\\text{O}$ and kernite is $\\text{Na}_2\\text{B}_4\\text{O}_7{\\cdot}4\\text{H}_2\\text{O}$. Both are sodium tetraborate minerals mined mainly in the Mojave Desert of California. They are the primary commercial source of boron compounds used in glass, ceramics, and detergents.'
      },
      {
        q: 'Self-explain why the Haber process runs at 200 atm rather than 1 atm.',
        a: 'At 1 atm, the equilibrium lies far to the left and yield of $\\text{NH}_3$ is tiny. The forward reaction converts four moles of gas into two, so high pressure strongly favours product. At 200 atm, the equilibrium yield rises to about 15%, making continuous ammonia synthesis economically viable despite the compressor cost.'
      },
      {
        q: 'Why must the Hall–Héroult process use cryolite rather than pure alumina?',
        a: 'Pure $\\text{Al}_2\\text{O}_3$ melts above 2000 °C, which is impractical and would destroy the carbon electrodes. Dissolving alumina in molten cryolite ($\\text{Na}_3\\text{AlF}_6$) lowers the operating temperature to about 960 °C. Cryolite also provides an ionically conducting melt, allowing electrolysis to proceed efficiently.'
      },
      {
        q: 'Predict what electrolysis of aqueous $\\text{NaCl}$ produces at each electrode and why.',
        a: 'At the cathode, water is reduced to give hydrogen gas because water is far easier to reduce than sodium ions at any practical voltage. At the anode, chloride is oxidised to chlorine because kinetic overpotential effects and high chloride concentration favour Cl⁻ oxidation over water oxidation. The result is $\\text{Cl}_2$, $\\text{H}_2$, and $\\text{NaOH}$.'
      },
      {
        q: 'How does the Grätzel cell differ from a conventional p–n junction solar cell in its operating principle?',
        a: 'In silicon PV, light creates electron-hole pairs in a doped semiconductor p–n junction. In a Grätzel cell, a molecular dye absorbs light and injects electrons into a semiconductor ($\\text{TiO}_2$) conduction band; charge transport and light absorption are handled by separate materials. This separation of functions allows cheaper, lower-purity materials to be used.'
      },
      {
        q: 'Explain how seeding drives precipitation in the Bayer process.',
        a: 'Adding fine $\\text{Al(OH)}_3$ seed crystals to the supersaturated aluminate solution provides nucleation sites. Crystal growth is energetically favourable once nuclei are present. Without seeding, nucleation is slow and the solution stays supersaturated; seeding gives controlled, rapid precipitation of pure $\\text{Al(OH)}_3$.'
      },
      {
        q: 'What trade-off does the Contact process make between temperature and yield for $\\text{SO}_3$?',
        a: '$\\text{SO}_3$ formation is exothermic, so lower temperature gives higher equilibrium yield. But below 400 °C the $\\text{V}_2\\text{O}_5$ catalyst is too slow. Running at 450 °C balances kinetics and thermodynamics. Modern double-absorption plants achieve over 99.5% conversion by removing $\\text{SO}_3$ between catalyst beds.'
      },
      {
        q: 'Why does the Ostwald process use a platinum-rhodium gauze rather than a supported metal catalyst?',
        a: 'The first step runs at 850 °C where most support materials and most catalyst structures degrade rapidly. A woven gauze of Pt-Rh alloy survives this temperature, provides high surface area per unit length, and can be operated at low pressure drop. Supported catalysts would sinter or react with the support at that temperature.'
      },
      {
        q: 'How does cathodic protection stop an iron pipeline from corroding?',
        a: 'A more active metal (zinc or magnesium) is bonded electrically to the iron and acts as a sacrificial anode. The iron becomes the cathode and oxygen is reduced there instead of iron being oxidised. An alternative method impresses a small negative DC voltage on the pipeline from an external power supply.'
      },
      {
        q: 'What happens chemically when a lead-acid battery is recharged?',
        a: 'The discharge reaction reverses: $2\\text{PbSO}_4 + 2\\text{H}_2\\text{O} \\rightarrow \\text{Pb} + \\text{PbO}_2 + 2\\text{H}_2\\text{SO}_4$. Lead sulfate at both electrodes converts back to lead metal and lead dioxide. Sulfuric acid concentration rises, so the specific gravity of the electrolyte rises and can be used to measure state of charge.'
      },
      {
        q: 'How does the Claus process handle thermodynamic limits at each temperature stage?',
        a: 'The equilibrium for $2\\text{H}_2\\text{S} + \\text{SO}_2 \\rightarrow 3\\text{S} + 2\\text{H}_2\\text{O}$ favours sulfur at lower temperature. Each reactor runs at a lower temperature than the previous one; sulfur condenses and is removed before the next stage. Removing sulfur product pulls the equilibrium further right at each successive stage, achieving high overall conversion.'
      },
      {
        q: 'What structural feature of silicates creates the progression from orthosilicate to 3D framework?',
        a: 'Orthosilicate has isolated $[\\text{SiO}_4]^{4-}$ tetrahedra. Sharing one oxygen corner links two tetrahedra into pyrosilicate. Sharing two corners per tetrahedron gives chains; three corners give sheet silicates like mica and clay. Sharing all four corners gives a 3D framework like quartz. Each oxygen shared reduces the negative charge per silicon by one.'
      },
      {
        q: 'Why does the inert pair effect make lead prefer the +2 state over +4?',
        a: 'In period 6, the 6s orbital contracts relativistically and its electrons become harder to remove. Removing the 6s² pair to reach Pb(IV) costs more energy than the bond formation recovers. Pb(II) uses only the 6p electrons for bonding and leaves the 6s² pair as a lone pair. The same effect explains Tl(I) and Bi(III) preferences.'
      },
      {
        q: 'What is the role of the membrane in a membrane-cell chloralkali plant?',
        a: 'A Nafion cation-exchange membrane lets $\\text{Na}^+$ pass from anode to cathode compartment but blocks $\\text{Cl}^-$ and $\\text{OH}^-$. This keeps chlorine gas at the anode separate from the sodium hydroxide solution at the cathode. Without the membrane, $\\text{Cl}_2$ would dissolve in the alkaline catholyte and form hypochlorite, contaminating the $\\text{NaOH}$ product.'
      },
      {
        q: 'How does the $[\\text{Ru(bpy)}_3]^{2+}$ photosensitiser work in artificial photosynthesis research?',
        a: 'The complex absorbs visible light via MLCT transition, then intersystem crossing populates a triplet state with a 600 ns lifetime. In this long-lived excited state it can donate electrons to a proton-reduction catalyst or accept electrons from a water-oxidation catalyst. The long lifetime is essential, most excited states decay in picoseconds, too fast for bimolecular electron transfer.'
      },
      {
        q: 'Why does zone refining move impurities to one end of a silicon rod?',
        a: 'Impurities have a higher equilibrium concentration in the melt than in solid silicon (distribution coefficient $k < 1$ for most dopants). The molten zone sweeps impurities along with it because they dissolve preferentially into the melt. After many passes, impurities accumulate at the trailing end, which is cut off, leaving ultra-pure silicon.'
      },
      {
        q: 'Predict what would happen to gold extraction yield if you raised the pH of the cyanide leach solution to 12.',
        a: 'High pH suppresses HCN formation from $\\text{CN}^-$ hydrolysis, keeping cyanide in its reactive anionic form. Gold dissolution is favoured. However, very high pH can also slow oxygen reduction (needed as the oxidant) and precipitate metal hydroxides that coat gold particles. An optimal pH near 10–11 balances cyanide stability and oxygen availability.'
      },
      {
        q: 'How does the Wacker process regenerate the palladium catalyst?',
        a: '$\\text{PdCl}_2$ oxidises ethylene and is itself reduced to $\\text{Pd}^0$. $\\text{CuCl}_2$ reoxidises $\\text{Pd}^0$ back to $\\text{PdCl}_2$, reducing $\\text{Cu}^{2+}$ to $\\text{Cu}^+$. Molecular oxygen from air then reoxidises $\\text{Cu}^+$ to $\\text{Cu}^{2+}$. The net reductant is $\\text{O}_2$, but all metal species cycle catalytically.'
      }
    ],
    reference: {
      category: 'Quick Reference',
      title: 'Industrial Synthesis Processes',
      sections: [
        <>
          <div className="ref-section">
            <h2>Key Industrial Process Formulas</h2>
            <div className="ref-formula">
              <div className="ref-formula-name">Steam Reforming</div>
              <div className="ref-formula-eq">{`$$\\text{CH}_4 + \\text{H}_2\\text{O} \\rightarrow \\text{CO} + 3\\text{H}_2$$`}</div>
              <div className="ref-formula-desc">
                <p>
                  When to use: producing syngas (CO + H₂) from natural gas feedstock. Ni catalyst,
                  700–900 °C.
                </p>
              </div>
            </div>
            <div className="ref-formula">
              <div className="ref-formula-name">Water-Gas Shift</div>
              <div className="ref-formula-eq">{`$$\\text{CO} + \\text{H}_2\\text{O} \\rightarrow \\text{CO}_2 + \\text{H}_2$$`}</div>
              <div className="ref-formula-desc">
                <p>When to use: converting CO byproduct to additional H₂ after steam reforming.</p>
              </div>
            </div>
            <div className="ref-formula">
              <div className="ref-formula-name">Haber Process</div>
              <div className="ref-formula-eq">{`$$\\text{N}_2 + 3\\text{H}_2 \\rightleftharpoons 2\\text{NH}_3 \\quad \\Delta H^\\circ = -92\\ \\text{kJ mol}^{-1}$$`}</div>
              <div className="ref-formula-desc">
                <p>
                  When to use: fixing atmospheric nitrogen into ammonia for fertiliser and
                  chemicals. Fe catalyst (K₂O, Al₂O₃ promoters); 400–500 °C, 150–300 atm. Yield ~15%
                  per pass.
                </p>
              </div>
            </div>
            <div className="ref-formula">
              <div className="ref-formula-name">Ostwald Step 1</div>
              <div className="ref-formula-eq">{`$$4\\text{NH}_3 + 5\\text{O}_2 \\rightarrow 4\\text{NO} + 6\\text{H}_2\\text{O}$$`}</div>
              <div className="ref-formula-desc">
                <p>
                  When to use: starting the conversion of ammonia into nitric acid. Pt–Rh gauze
                  catalyst at ~850 °C.
                </p>
              </div>
            </div>
            <div className="ref-formula">
              <div className="ref-formula-name">Ostwald Step 2</div>
              <div className="ref-formula-eq">{`$$2\\text{NO} + \\text{O}_2 \\rightarrow 2\\text{NO}_2$$`}</div>
              <div className="ref-formula-desc">
                <p>
                  When to use: oxidising nitric oxide to nitrogen dioxide in the Ostwald sequence.
                  Uncatalysed oxidation in air.
                </p>
              </div>
            </div>
            <div className="ref-formula">
              <div className="ref-formula-name">Ostwald Step 3</div>
              <div className="ref-formula-eq">{`$$3\\text{NO}_2 + \\text{H}_2\\text{O} \\rightarrow 2\\text{HNO}_3 + \\text{NO}$$`}</div>
              <div className="ref-formula-desc">
                <p>
                  When to use: forming nitric acid by absorbing nitrogen dioxide in water.
                  Absorption in water. NO recycles to step 2.
                </p>
              </div>
            </div>
            <div className="ref-formula">
              <div className="ref-formula-name">Contact Process</div>
              <div className="ref-formula-eq">{`$$2\\text{SO}_2 + \\text{O}_2 \\rightleftharpoons 2\\text{SO}_3 \\quad (\\text{V}_2\\text{O}_5,\\ 450\\ °\\text{C})$$`}</div>
              <div className="ref-formula-desc">
                <p>
                  When to use: making sulfuric acid by oxidising sulfur dioxide. SO₃ absorbed in
                  concentrated H₂SO₄ to form oleum, then diluted. Never absorb directly in water.
                </p>
              </div>
            </div>
            <div className="ref-formula">
              <div className="ref-formula-name">Hall–Héroult</div>
              <div className="ref-formula-eq">{`$$2\\text{Al}_2\\text{O}_3 \\rightarrow 4\\text{Al} + 3\\text{O}_2$$`}</div>
              <div className="ref-formula-desc">
                <p>
                  When to use: extracting aluminium metal from purified alumina. Electrolysis in
                  molten cryolite (Na₃AlF₆) at ~960 °C. Carbon anodes consumed by O₂.
                </p>
              </div>
            </div>
            <div className="ref-formula">
              <div className="ref-formula-name">Downs Cell</div>
              <div className="ref-formula-eq">{`$$2\\text{NaCl}_{(l)} \\rightarrow 2\\text{Na} + \\text{Cl}_2$$`}</div>
              <div className="ref-formula-desc">
                <p>
                  When to use: producing sodium metal and chlorine gas from rock salt. Electrolysis
                  of molten NaCl. CaCl₂ added to lower melting point to ~600 °C.
                </p>
              </div>
            </div>
            <div className="ref-formula">
              <div className="ref-formula-name">Chloralkali Process</div>
              <div className="ref-formula-eq">{`$$2\\text{NaCl} + 2\\text{H}_2\\text{O} \\rightarrow \\text{Cl}_2 + \\text{H}_2 + 2\\text{NaOH}$$`}</div>
              <div className="ref-formula-desc">
                <p>
                  When to use: making chlorine, hydrogen, and sodium hydroxide from brine. Membrane
                  electrolysis of aqueous brine. Nafion membrane keeps products separate.
                </p>
              </div>
            </div>
            <div className="ref-formula">
              <div className="ref-formula-name">Claus Process</div>
              <div className="ref-formula-eq">{`$$2\\text{H}_2\\text{S} + \\text{SO}_2 \\rightarrow 3\\text{S} + 2\\text{H}_2\\text{O}$$`}</div>
              <div className="ref-formula-desc">
                <p>
                  When to use: recovering sulfur from toxic hydrogen sulfide waste gas. Multi-stage
                  at 300 °C → 250 °C → 200 °C. Sulfur condensed and removed between stages.
                </p>
              </div>
            </div>
            <div className="ref-formula">
              <div className="ref-formula-name">Superphosphate Fertiliser</div>
              <div className="ref-formula-eq">{`$$\\text{Ca}_3(\\text{PO}_4)_2 + 2\\text{H}_2\\text{SO}_4 \\rightarrow \\text{Ca(H}_2\\text{PO}_4)_2 + 2\\text{CaSO}_4$$`}</div>
              <div className="ref-formula-desc">
                <p>
                  When to use: making phosphorus available to plants as a soluble fertiliser.
                  Converts insoluble rock phosphate to water-soluble fertiliser.
                </p>
              </div>
            </div>
            <div className="ref-formula">
              <div className="ref-formula-name">Wacker Oxidation</div>
              <div className="ref-formula-eq">{`$$\\text{C}_2\\text{H}_4 + \\tfrac{1}{2}\\text{O}_2 \\rightarrow \\text{CH}_3\\text{CHO}$$`}</div>
              <div className="ref-formula-desc">
                <p>
                  When to use: converting ethene into acetaldehyde for industrial organics.
                  PdCl₂/CuCl₂ catalyst. Pd⁰ reoxidised by CuCl₂; Cu⁺ reoxidised by O₂.
                </p>
              </div>
            </div>
            <div className="ref-formula">
              <div className="ref-formula-name">Andrussow HCN</div>
              <div className="ref-formula-eq">{`$$2\\text{CH}_4 + 2\\text{NH}_3 + 3\\text{O}_2 \\rightarrow 2\\text{HCN} + 6\\text{H}_2\\text{O}$$`}</div>
              <div className="ref-formula-desc">
                <p>
                  When to use: making hydrogen cyanide feedstock for nitriles and plastics. Pt gauze
                  catalyst at 1000 °C.
                </p>
              </div>
            </div>
            <div className="ref-formula">
              <div className="ref-formula-name">Gold Cyanide Leach</div>
              <div className="ref-formula-eq">{`$$4\\text{Au} + 8\\text{CN}^- + \\text{O}_2 + 2\\text{H}_2\\text{O} \\rightarrow 4[\\text{Au(CN)}_2]^- + 4\\text{OH}^-$$`}</div>
              <div className="ref-formula-desc">
                <p>
                  When to use: extracting gold from low-grade ore by dissolution. Alkaline cyanide
                  solution. Zn or electrodeposition recovers Au.
                </p>
              </div>
            </div>
            <div className="ref-formula">
              <div className="ref-formula-name">Lead-Acid Battery (Discharge)</div>
              <div className="ref-formula-eq">{`$$\\text{Pb} + \\text{PbO}_2 + 2\\text{H}_2\\text{SO}_4 \\rightarrow 2\\text{PbSO}_4 + 2\\text{H}_2\\text{O}$$`}</div>
              <div className="ref-formula-desc">
                <p>
                  When to use: storing energy for vehicle starter motors and backup power. ~2 V per
                  cell. Six cells give 12 V automotive battery. Fully reversible.
                </p>
              </div>
            </div>
            <div className="ref-formula">
              <div className="ref-formula-name">NiCd (Discharge)</div>
              <div className="ref-formula-eq">{`$$\\text{NiO(OH)} + \\text{Cd} + \\text{H}_2\\text{O} \\rightarrow \\text{Ni(OH)}_2 + \\text{Cd(OH)}_2$$`}</div>
              <div className="ref-formula-desc">
                <p>
                  When to use: rechargeable cells needing high discharge rates and durability.
                  Alkaline electrolyte. Cadmium is toxic; restricted in consumer electronics.
                </p>
              </div>
            </div>
            <div className="ref-formula">
              <div className="ref-formula-name">KMnO₄ Half-Reaction (Acid)</div>
              <div className="ref-formula-eq">{`$$[\\text{MnO}_4]^- + 8\\text{H}^+ + 5e^- \\rightarrow \\text{Mn}^{2+} + 4\\text{H}_2\\text{O} \\quad E^\\circ = +1.51\\ \\text{V}$$`}</div>
              <div className="ref-formula-desc">
                <p>
                  When to use: strong oxidation in titrations and water treatment. Purple →
                  colourless. Self-indicating titrant in volumetric analysis.
                </p>
              </div>
            </div>
            <div className="ref-formula">
              <div className="ref-formula-name">Iron Rusting</div>
              <div className="ref-formula-eq">{`$$2\\text{Fe} + 2\\text{H}_2\\text{O} + \\text{O}_2 \\rightarrow \\text{Fe}_2\\text{O}_3{\\cdot}x\\text{H}_2\\text{O}$$`}</div>
              <div className="ref-formula-desc">
                <p>
                  When to use: explaining why iron corrodes and how to prevent it. Requires both
                  water and oxygen. Porous rust flakes off, no passivation.
                </p>
              </div>
            </div>
            <div className="ref-formula">
              <div className="ref-formula-name">WO₃ Electrochromic</div>
              <div className="ref-formula-eq">{`$$\\text{Li}^+ + e^- + \\text{WO}_3 \\rightarrow \\text{LiWO}_3$$`}</div>
              <div className="ref-formula-desc">
                <p>
                  When to use: switchable tinting in smart windows to cut cooling costs. Colourless
                  → deep blue (tungsten bronze). Reversible. Smart windows.
                </p>
              </div>
            </div>
            <div className="ref-formula">
              <div className="ref-formula-name">ZnS Roasting</div>
              <div className="ref-formula-eq">{`$$2\\text{ZnS} + 3\\text{O}_2 \\rightarrow 2\\text{ZnO} + 2\\text{SO}_2$$`}</div>
              <div className="ref-formula-desc">
                <p>
                  When to use: first step in extracting zinc from sulfide ore. SO₂ captured for
                  sulfuric acid production. ZnO then reduced with carbon.
                </p>
              </div>
            </div>
          </div>
        </>,
        <>
          <div className="ref-section">
            <h2>Industrial Process Summary Table</h2>
            <div className="table-wrapper">
              <table>
                <thead>
                  <tr>
                    <th>Process</th>
                    <th>Feedstock</th>
                    <th>Catalyst</th>
                    <th>Conditions</th>
                    <th>Product</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Steam Reforming</td>
                    <td>CH₄ + H₂O</td>
                    <td>Ni</td>
                    <td>700–900 °C</td>
                    <td>CO + H₂</td>
                  </tr>
                  <tr>
                    <td>Water-Gas Shift</td>
                    <td>CO + H₂O</td>
                    <td>Fe/Cu</td>
                    <td>200–500 °C</td>
                    <td>CO₂ + H₂</td>
                  </tr>
                  <tr>
                    <td>Haber</td>
                    <td>N₂ + H₂</td>
                    <td>Fe (K₂O, Al₂O₃)</td>
                    <td>400–500 °C, 150–300 atm</td>
                    <td>NH₃</td>
                  </tr>
                  <tr>
                    <td>Ostwald</td>
                    <td>NH₃ + O₂</td>
                    <td>Pt–Rh gauze</td>
                    <td>~850 °C</td>
                    <td>HNO₃</td>
                  </tr>
                  <tr>
                    <td>Contact</td>
                    <td>SO₂ + O₂</td>
                    <td>V₂O₅</td>
                    <td>450 °C</td>
                    <td>H₂SO₄</td>
                  </tr>
                  <tr>
                    <td>Hall–Héroult</td>
                    <td>Al₂O₃ in Na₃AlF₆</td>
                    <td>Electrolysis</td>
                    <td>~960 °C</td>
                    <td>Al metal</td>
                  </tr>
                  <tr>
                    <td>Bayer</td>
                    <td>Bauxite + NaOH</td>
                    <td>None</td>
                    <td>150–240 °C</td>
                    <td>Al₂O₃</td>
                  </tr>
                  <tr>
                    <td>Downs</td>
                    <td>Molten NaCl</td>
                    <td>Electrolysis</td>
                    <td>~600 °C</td>
                    <td>Na + Cl₂</td>
                  </tr>
                  <tr>
                    <td>Chloralkali</td>
                    <td>Brine</td>
                    <td>Electrolysis</td>
                    <td>Ambient</td>
                    <td>Cl₂ + H₂ + NaOH</td>
                  </tr>
                  <tr>
                    <td>Frasch</td>
                    <td>Underground S</td>
                    <td>None</td>
                    <td>160 °C, 16 atm</td>
                    <td>S (99.5% pure)</td>
                  </tr>
                  <tr>
                    <td>Claus</td>
                    <td>H₂S + SO₂</td>
                    <td>Al₂O₃/TiO₂</td>
                    <td>200–300 °C</td>
                    <td>S + H₂O</td>
                  </tr>
                  <tr>
                    <td>Wacker</td>
                    <td>C₂H₄ + O₂</td>
                    <td>PdCl₂/CuCl₂</td>
                    <td>50–130 °C</td>
                    <td>CH₃CHO</td>
                  </tr>
                  <tr>
                    <td>SOHIO</td>
                    <td>C₃H₆ + NH₃ + O₂</td>
                    <td>Bi-Mo oxide</td>
                    <td>~450 °C</td>
                    <td>Acrylonitrile</td>
                  </tr>
                  <tr>
                    <td>Andrussow HCN</td>
                    <td>CH₄ + NH₃ + O₂</td>
                    <td>Pt gauze</td>
                    <td>~1000 °C</td>
                    <td>HCN</td>
                  </tr>
                  <tr>
                    <td>TiO₂ Chloride</td>
                    <td>TiO₂ + Cl₂</td>
                    <td>None</td>
                    <td>900 °C / 1000 °C</td>
                    <td>Pure TiO₂</td>
                  </tr>
                  <tr>
                    <td>Au Cyanide Leach</td>
                    <td>Au ore + NaCN</td>
                    <td>None</td>
                    <td>pH 10–11, O₂</td>
                    <td>[Au(CN)₂]⁻</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </>,
        <>
          <div className="ref-section">
            <h2>Battery Comparison</h2>
            <div className="table-wrapper">
              <table>
                <thead>
                  <tr>
                    <th>Battery</th>
                    <th>Cathode</th>
                    <th>Anode</th>
                    <th>Electrolyte</th>
                    <th>Notes</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Lead-acid</td>
                    <td>PbO₂</td>
                    <td>Pb</td>
                    <td>H₂SO₄ (aq)</td>
                    <td>Rechargeable; heavy; ~2 V/cell; fully recyclable</td>
                  </tr>
                  <tr>
                    <td>NiCd</td>
                    <td>NiO(OH)</td>
                    <td>Cd</td>
                    <td>KOH (aq)</td>
                    <td>Rechargeable; Cd toxic; restricted</td>
                  </tr>
                  <tr>
                    <td>Li-ion (LiCoO₂)</td>
                    <td>LiCoO₂</td>
                    <td>Graphite (LiC₆)</td>
                    <td>LiPF₆ organic</td>
                    <td>~3.7 V; high energy density; no memory</td>
                  </tr>
                  <tr>
                    <td>Alkaline (MnO₂)</td>
                    <td>MnO₂</td>
                    <td>Zn</td>
                    <td>KOH (paste)</td>
                    <td>~1.5 V; non-rechargeable; cheap</td>
                  </tr>
                  <tr>
                    <td>Super-ion (K₂FeO₄)</td>
                    <td>K₂FeO₄</td>
                    <td>Zn</td>
                    <td>KOH (aq)</td>
                    <td>Research stage; non-toxic Fe product</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </>,
        <>
          <div className="ref-section">
            <h2>Silicate Structures</h2>
            <div className="table-wrapper">
              <table>
                <thead>
                  <tr>
                    <th>Type</th>
                    <th>Formula</th>
                    <th>Si:O Ratio</th>
                    <th>Example Mineral</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Orthosilicate</td>
                    <td>{`$[\\text{SiO}_4]^{4-}$`}</td>
                    <td>1:4</td>
                    <td>Olivine</td>
                  </tr>
                  <tr>
                    <td>Pyrosilicate</td>
                    <td>{`$[\\text{Si}_2\\text{O}_7]^{6-}$`}</td>
                    <td>2:7</td>
                    <td>Hemimorphite</td>
                  </tr>
                  <tr>
                    <td>Cyclic (ring)</td>
                    <td>{`$[\\text{Si}_3\\text{O}_9]^{6-}$`}</td>
                    <td>1:3</td>
                    <td>Benitoite, beryl</td>
                  </tr>
                  <tr>
                    <td>Single chain</td>
                    <td>{`$[\\text{SiO}_3]^{2-}$`}</td>
                    <td>1:3</td>
                    <td>Pyroxenes</td>
                  </tr>
                  <tr>
                    <td>Double chain</td>
                    <td>{`$[\\text{Si}_4\\text{O}_{11}]^{6-}$`}</td>
                    <td>4:11</td>
                    <td>Amphiboles</td>
                  </tr>
                  <tr>
                    <td>Sheet</td>
                    <td>{`$[\\text{Si}_2\\text{O}_5]^{2-}$`}</td>
                    <td>2:5</td>
                    <td>Mica, clay</td>
                  </tr>
                  <tr>
                    <td>3D framework</td>
                    <td>SiO₂</td>
                    <td>1:2</td>
                    <td>Quartz, feldspar, zeolites</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </>,
        <>
          <div className="ref-section">
            <h2>d-Block Industrial Metals Quick Reference</h2>
            <div className="table-wrapper">
              <table>
                <thead>
                  <tr>
                    <th>Metal</th>
                    <th>Key Compound</th>
                    <th>Industrial Use</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Ti</td>
                    <td>TiO₂; TiCl₄</td>
                    <td>White pigment; lightweight structural alloy</td>
                  </tr>
                  <tr>
                    <td>V</td>
                    <td>V₂O₅</td>
                    <td>Contact process catalyst; vanadium steel alloys</td>
                  </tr>
                  <tr>
                    <td>Cr</td>
                    <td>Cr₂O₃; CrO₃</td>
                    <td>Stainless steel; electroplating; refractory bricks</td>
                  </tr>
                  <tr>
                    <td>Mn</td>
                    <td>MnO₂; KMnO₄</td>
                    <td>Dry cell cathode; steel hardening; oxidant</td>
                  </tr>
                  <tr>
                    <td>Fe</td>
                    <td>Fe₂O₃; Fe</td>
                    <td>Steel; blast furnace; Haber catalyst</td>
                  </tr>
                  <tr>
                    <td>Co</td>
                    <td>LiCoO₂; CoO</td>
                    <td>Li-ion cathode; blue pigment; HDS catalyst</td>
                  </tr>
                  <tr>
                    <td>Ni</td>
                    <td>NiO(OH); Ni</td>
                    <td>NiCd battery; Raney Ni hydrogenation; superalloys</td>
                  </tr>
                  <tr>
                    <td>Cu</td>
                    <td>CuSO₄; Cu</td>
                    <td>Electrical wiring; plumbing; Wacker co-catalyst</td>
                  </tr>
                  <tr>
                    <td>Zn</td>
                    <td>ZnO; ZnS</td>
                    <td>Galvanising; alkaline cell anode; phosphorescent pigments</td>
                  </tr>
                  <tr>
                    <td>Zr</td>
                    <td>ZrO₂; Zircaloy</td>
                    <td>Nuclear fuel cladding; O²⁻ sensor</td>
                  </tr>
                  <tr>
                    <td>Mo</td>
                    <td>MoS₂; MoO₃</td>
                    <td>HDS desulfurisation; solid lubricant</td>
                  </tr>
                  <tr>
                    <td>W</td>
                    <td>WO₃; W</td>
                    <td>Electrochromic glazing; tungsten filaments; cutting tools</td>
                  </tr>
                  <tr>
                    <td>Tc</td>
                    <td>[TcO₄]⁻; ⁹⁹ᵐTc</td>
                    <td>Nuclear medicine imaging (SPECT)</td>
                  </tr>
                  <tr>
                    <td>Ru</td>
                    <td>[Ru(bpy)₃]²⁺</td>
                    <td>Photoredox catalysis; Grätzel cell sensitiser</td>
                  </tr>
                  <tr>
                    <td>Rh</td>
                    <td>RhCl(PPh₃)₃; Rh alloys</td>
                    <td>Wilkinson's catalyst; autocatalyst; Ostwald gauze</td>
                  </tr>
                  <tr>
                    <td>Pd</td>
                    <td>PdCl₂; Pd/C</td>
                    <td>Wacker catalyst; Suzuki/Heck coupling; H₂ purification membrane</td>
                  </tr>
                  <tr>
                    <td>Ag</td>
                    <td>AgBr; AgCl</td>
                    <td>Photography; photochromic lenses; antibacterial</td>
                  </tr>
                  <tr>
                    <td>Au</td>
                    <td>[Au(CN)₂]⁻; Au</td>
                    <td>Microelectronics; cyanide leach recovery</td>
                  </tr>
                  <tr>
                    <td>Pt</td>
                    <td>Pt gauze; cisplatin</td>
                    <td>Ostwald catalyst; autocatalyst; anticancer drug</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </>
      ]
    },
    customCss: null
  }
  return config
}

export default function IndustrialSynthesisProcesses() {
  const config = useConfig()
  return <LearningTemplate config={config} />
}
