import { LearningTemplate } from '../../../../../components/learning/learning-template'
import {
  AtomEconomyViz,
  SupercriticalCO2Viz,
  SpecificEnthalpyFuelsViz,
  FuelCellViz,
  YieldVsAtomEconomyViz,
  FuelCellEfficiencyViz
} from '../../../../../components/viz'

function useConfig() {
  const config = {
    cssPrefix: 'chem-green',
    documentTitle: 'Green and Sustainable Chemistry - AETHER',
    learning: {
      groupTitle: 'Industrial and Sustainable Chemistry',
      category: 'Unit 10',
      title: 'Green and Sustainable Chemistry',
      subtitle:
        'From sustainable development and atom economy to green solvents, renewable fuels, fuel cells, and waste reduction.',
      sections: [
        <>
            <h2>What Green Chemistry Is</h2>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              Each year the Sun helps plants store a huge amount of energy as biomass. Do you think
              we use that stored energy faster or slower than nature stores it?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                We use it far faster, about 5 million times faster than nature stores it in a form
                we can use. The exact rates come up below.
              </p>
            </details>
          </div>
          <div className="lrn-header">
          </div>
          <p>
            Green chemistry is the everyday name for sustainable development applied to chemistry.
            It means caring for the environment and our planet while we make and use chemicals.
          </p>
          <p>
            <strong>When to use this:</strong> Reach for the green chemistry mindset whenever you
            design a process. You want to cut waste, save resources, and protect the environment.
          </p>
          <div className="lrn-definition">
            <span className="lrn-definition-term">Sustainable development</span>
            <div className="lrn-definition-desc">
              <p>
                The careful use and renewal of resources, together with reducing hazardous waste and
                caring for the environment.
              </p>
            </div>
          </div>
          <div className="lrn-definition">
            <span className="lrn-definition-term">Green chemistry</span>
            <div className="lrn-definition-desc">
              <p>
                The everyday name for the sustainable development approach. It is a caring attitude
                toward the environment and the planet we pass on to others.
              </p>
            </div>
          </div>
          <h3>How Fast We Use Biomass</h3>
          <p>
            Biomass is the plant material we can burn or react to make fuels. The energy stored in
            biomass grows by about 10<sup>19</sup> kJ each year. That is about 20 times the world's
            yearly industrial energy demand.
          </p>
          <p>
            But biomass is bulky and spread out across the whole planet. So most of our fuels are
            still fossil fuels.
          </p>
          <div className="lrn-insight">
            <span className="lrn-insight-label">KEY INSIGHT</span>
            <p>
              We use fuel at about 5 × 10<sup>17</sup> kJ per year. That is 5 million times faster
              than biomass energy is stored in a useful form. This gap is the heart of the
              sustainability problem.
            </p>
          </div>
          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>
              Why is the useful storage rate so much lower than the total biomass growth? Most
              biomass grows where we cannot easily collect it, and gathering and processing it costs
              energy. Only a small slice ends up as fuel we can actually use. So the useful storage
              rate sits far below the total growth.
            </p>
          </div>
        </>,

        <>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              You make a product with two different reactions. Both give the same amount of product.
              One throws away more leftover atoms than the other. Which reaction is the greener
              choice?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                The reaction that throws away fewer atoms is greener. It turns more of the starting
                mass into the product you want.
              </p>
              <p>This idea has a name: atom economy. A higher atom economy means less waste.</p>
            </details>
          </div>
          <div className="lrn-header">
            <h2>Atom Economy</h2>
          </div>
          <p>
            Waste reduction is a main goal of green chemistry. In many industrial reactions, not all
            the atoms end up in the product. Some atoms end up in by-products and are wasted.
          </p>
          <p>
            <strong>When to use this:</strong> Use atom economy when you compare reaction routes and
            want to pick the one that wastes the fewest atoms.
          </p>
          <div className="lrn-definition">
            <span className="lrn-definition-term">Atom economy</span>
            <div className="lrn-definition-desc">
              <p>
                The use of as few atoms as possible to reach an end product. You report it as a
                percentage.
              </p>
            </div>
          </div>
          <div className="lrn-eq lrn-eq-hero">
            <span>{`$$\\text{atom economy} = \\frac{\\text{mass of desired product}}{\\text{mass of all reactants}} \\times 100\\%$$`}</span>
          </div>
          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>
              Why divide product mass by total reactant mass? Every atom in the reactants must go
              somewhere. It ends up either in the product or in waste. The fraction that lands in
              the product is exactly the product mass over the total reactant mass. That fraction is
              how efficiently the synthesis uses its raw materials.
            </p>
          </div>
          <h3>Comparing Three Routes to But-2-ene</h3>
          <p>
            The same product, but-2-ene (CH<sub>3</sub>CH=CHCH<sub>3</sub>), can be made from
            2-bromobutane using different bases. Each route is an elimination reaction: the base
            pulls off a small piece, here HBr, to make the double bond.
          </p>
          <div className="lrn-faded">
            <div className="lrn-faded-phase">
              <span className="lrn-faded-label">COMPLETE EXAMPLE</span>
              <p>Route A uses ethoxide as the base:</p>
              <div className="lrn-eq">
                <span>
                  CH<sub>3</sub>CH<sub>2</sub>CHBrCH<sub>3</sub> + CH<sub>3</sub>CH<sub>2</sub>O
                  <sup>−</sup> → CH<sub>3</sub>CH=CHCH<sub>3</sub> + CH<sub>3</sub>CH<sub>2</sub>OH
                  + Br<sup>−</sup>
                </span>
              </div>
              <ol className="lrn-list">
                <li>
                  Find the desired product mass: but-2-ene (C<sub>4</sub>H<sub>8</sub>) = 56.10
                  g·mol<sup>−1</sup>.
                </li>
                <li>
                  Add the reactant masses: 2-bromobutane (C<sub>4</sub>H<sub>9</sub>Br) = 137.02 and
                  ethoxide (C<sub>2</sub>H<sub>5</sub>O<sup>−</sup>) = 45.06.
                </li>
                <li>
                  Total reactant mass = 137.02 + 45.06 = 182.08 g·mol<sup>−1</sup>.
                </li>
                <li>
                  Atom economy = (56.10 / 182.08) × 100% = 30.8%. Waste = 182.08 − 56.10 = 125.98 g
                  per mol of product.
                </li>
              </ol>
            </div>
            <div className="lrn-faded-phase">
              <span className="lrn-faded-label">YOUR TURN, PARTIAL</span>
              <p>Route B uses methoxide as the base:</p>
              <div className="lrn-eq">
                <span>
                  CH<sub>3</sub>CH<sub>2</sub>CHBrCH<sub>3</sub> + CH<sub>3</sub>O<sup>−</sup> → CH
                  <sub>3</sub>CH=CHCH<sub>3</sub> + CH<sub>3</sub>OH + Br<sup>−</sup>
                </span>
              </div>
              <ol className="lrn-list">
                <li>
                  Add the reactant masses: 2-bromobutane = 137.02 and methoxide (CH<sub>3</sub>O
                  <sup>−</sup>) = 31.03. Total = _____ g·mol<sup>−1</sup>.
                </li>
                <li>Atom economy = (56.10 / total) × 100% = _____ %.</li>
              </ol>
              <p>
                Answer: total = 168.05 g·mol<sup>−1</sup>. Atom economy = (56.10 / 168.05) × 100% =
                33.4%. Waste = 168.05 − 56.10 = 111.95 g per mol.
              </p>
            </div>
            <div className="lrn-faded-phase">
              <span className="lrn-faded-label">INDEPENDENT PRACTICE</span>
              <p>Route C uses methanethiolate as the base:</p>
              <div className="lrn-eq">
                <span>
                  CH<sub>3</sub>CH<sub>2</sub>CHBrCH<sub>3</sub> + CH<sub>3</sub>S<sup>−</sup> → CH
                  <sub>3</sub>CH=CHCH<sub>3</sub> + CH<sub>3</sub>SH + Br<sup>−</sup>
                </span>
              </div>
              <p>
                Methanethiolate (CH<sub>3</sub>S<sup>−</sup>) = 47.10 g·mol<sup>−1</sup>. Find the
                total reactant mass, the atom economy, and the waste per mol.
              </p>
              <p>
                Answer: total = 137.02 + 47.10 = 184.12 g·mol<sup>−1</sup>. Atom economy = (56.10 /
                184.12) × 100% = 30.5%. Waste = 184.12 − 56.10 = 128.02 g per mol.
              </p>
            </div>
          </div>
          <AtomEconomyViz />
          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>
              Route B gives the highest atom economy even though all three make the same product.
              Why does the choice of base change the atom economy? Form your answer before reading
              on.
            </p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                The product mass (56.10) is the same in every route. Only the total reactant mass
                changes, because each base has a different mass.
              </p>
              <p>
                Methoxide is the lightest base at 31.03 g·mol<sup>−1</sup>. A lighter base means a
                smaller total reactant mass. A smaller denominator gives a larger atom economy and
                less waste. So a manufacturer should recommend Route B, the methoxide route.
              </p>
            </details>
          </div>
          <h3>Percentage Yield Versus Atom Economy</h3>
          <p>
            Atom economy is about design. Percentage yield is about how well the real experiment
            ran. From 50.0 g of 2-bromobutane, Route A gave 16.2 g of product, Route B gave 15.4 g,
            and Route C gave 13.1 g.
          </p>
          <div className="lrn-definition">
            <span className="lrn-definition-term">Percentage yield</span>
            <div className="lrn-definition-desc">
              <p>
                The actual product you get divided by the theoretical product, times 100%. The
                theoretical product is the most you could get if every reactant turned into product.
              </p>
            </div>
          </div>
          <div className="lrn-faded">
            <div className="lrn-faded-phase">
              <span className="lrn-faded-label">WORKED EXAMPLE</span>
              <ol className="lrn-list">
                <li>
                  First find the theoretical product. 50.0 g of 2-bromobutane (137.02 g·mol
                  <sup>−1</sup>) is 50.0 / 137.02 = 0.365 mol.
                </li>
                <li>
                  Each mole of 2-bromobutane can make one mole of but-2-ene (56.10 g·mol
                  <sup>−1</sup>
                  ). So the theoretical product is 0.365 × 56.10 = 20.5 g.
                </li>
                <li>Route A gave 16.2 g. Percentage yield = (16.2 / 20.5) × 100% = 79.0%.</li>
                <li>
                  Route B gave 15.4 g, a yield of (15.4 / 20.5) × 100% = 75.1%. Route C gave 13.1 g,
                  a yield of 64.0%.
                </li>
              </ol>
              <p>
                You can now report both numbers for any route: how well the design uses atoms (atom
                economy) and how well the real run went (percentage yield).
              </p>
            </div>
          </div>
          <YieldVsAtomEconomyViz />
          <p>
            These measured yields give the experimental atom economy: the atom economy worked out
            from the product you actually weigh, not from the perfect balanced equation. It always
            comes out lower than the theoretical atom economy, because some product is always lost.
          </p>
          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Percentage yield</span>
              <p>
                The fraction of the theoretical product you actually get. It measures how well the
                experiment ran. Two reactions can share the same yield but differ in atom economy.
              </p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Atom economy</span>
              <p>
                The fraction of all reactant mass that ends up in the desired product. It measures
                how well the synthesis was designed. It shows how much raw material becomes waste.
              </p>
            </div>
          </div>
        </>,

        <>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              Carbon dioxide is usually a gas. Could a gas ever be squeezed and heated until it acts
              like a liquid solvent that dissolves things?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                Yes. Above its critical temperature and pressure, CO<sub>2</sub> becomes a
                supercritical fluid.
              </p>
              <p>
                It is formally a gas, yet it is as dense as a liquid. That density lets it act as a
                solvent.
              </p>
            </details>
          </div>
          <div className="lrn-header">
            <h2>Green Solvents and Supercritical CO₂</h2>
          </div>
          <p>
            Many traditional solvents are toxic and leave harmful residue. Green chemistry looks for
            cleaner solvents. Supercritical carbon dioxide is one good answer.
          </p>
          <p>
            <strong>When to use this:</strong> Choose supercritical CO<sub>2</sub> when you need to
            extract a substance without leaving toxic solvent behind in the product.
          </p>
          <div className="lrn-definition">
            <span className="lrn-definition-term">Supercritical fluid</span>
            <div className="lrn-definition-desc">
              <p>
                The dense fluid that exists above the critical temperature and pressure of a
                substance. It is formally a gas but as dense as a liquid, so it can dissolve liquids
                and solids.
              </p>
            </div>
          </div>
          <div className="lrn-definition">
            <span className="lrn-definition-term">Critical temperature</span>
            <div className="lrn-definition-desc">
              <p>
                The temperature at and above which a vapor cannot turn into a liquid. You must pass
                both this temperature and the critical pressure to make a supercritical fluid.
              </p>
            </div>
          </div>
          <div className="lrn-definition">
            <span className="lrn-definition-term">Critical pressure</span>
            <div className="lrn-definition-desc">
              <p>
                The lowest pressure that can squeeze a substance into a supercritical fluid once it
                is above its critical temperature. For CO<sub>2</sub> the critical point sits near
                31 °C and about 73 atm (7.4 MPa).
              </p>
            </div>
          </div>
          <p>
            Above that point, supercritical CO<sub>2</sub> avoids contaminating the product with
            harmful solvents. After use, the CO<sub>2</sub> simply escapes as a gas and leaves no
            residue.
          </p>
          <SupercriticalCO2Viz />
          <h3>Where It Is Used</h3>
          <p>
            Supercritical CO<sub>2</sub> decaffeinates coffee. It separates drugs from biological
            fluids. It extracts perfumes and plant chemicals from herbs.
          </p>
          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Traditional organic solvent</span>
              <p>
                May be toxic and harmful. It can leave a contamination residue in the product. That
                residue must be removed and disposed of.
              </p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Supercritical CO₂</span>
              <p>
                Avoids harmful solvent contamination. It extracts quickly and leaves no residue when
                it escapes as a gas.
              </p>
            </div>
          </div>
          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>
              Why does supercritical CO<sub>2</sub> extract so fast? It is as dense as a liquid, so
              it dissolves things like a liquid does. But its molecules move quickly, like a gas.
              This mix of liquid-like density and gas-like motion lets it soak into a sample and
              pull compounds out quickly.
            </p>
          </div>
          <div className="lrn-callout lrn-warning">
            <span className="lrn-callout-label">Think about</span>
            <p>
              Supercritical fluids are not perfect. They need high-pressure equipment, and reaching
              supercritical conditions costs energy. These are real disadvantages to weigh.
            </p>
          </div>
        </>,

        <>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              Ethanol made from corn still releases CO<sub>2</sub> when it burns. So how can it be
              called a renewable fuel that helps the planet?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                Ethanol does release CO<sub>2</sub> on burning, just like methane and biodiesel do.
              </p>
              <p>
                But its source is replenished every year by the Sun. The corn grows again, so the
                fuel is renewable even though burning it makes CO<sub>2</sub>.
              </p>
            </details>
          </div>
          <div className="lrn-header">
            <h2>Renewable Fuels and Feedstocks</h2>
          </div>
          <p>
            Fossil fuels are finite and cannot be replaced. They formed over millions of years from
            ancient organic matter, and we are using them up far faster than the Earth makes more.
          </p>
          <p>
            <strong>When to use this:</strong> Choose a renewable fuel when you want an energy
            source the Sun replenishes each year instead of one that runs out.
          </p>
          <div className="lrn-definition">
            <span className="lrn-definition-term">Renewable fuel</span>
            <div className="lrn-definition-desc">
              <p>A fuel whose source is replenished every year by the Sun.</p>
            </div>
          </div>
          <div className="lrn-definition">
            <span className="lrn-definition-term">Biomass</span>
            <div className="lrn-definition-desc">
              <p>The name for plant materials that can be burned or reacted to produce fuels.</p>
            </div>
          </div>
          <h3>Bioethanol from Fermentation</h3>
          <p>
            Bacteria and yeast ferment the starches in grains, mainly corn, to make ethanol. One
            bushel of corn (about 30 L) makes nearly 10 L of ethanol.
          </p>
          <p>
            E85 fuel is 85% ethanol and 15% gasoline. It cuts carbon monoxide and hydrocarbon
            emissions. But it gives about 15% lower mileage than pure gasoline.
          </p>
          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>
              Why does ethanol give lower mileage than gasoline? Ethanol is already partly
              oxygenated, which means it already holds an oxygen atom inside. A fuel that already
              holds oxygen releases less energy per gram when it burns. So you need more of it to go
              the same distance.
            </p>
          </div>
          <h3>Cellulose as a Future Feedstock</h3>
          <p>
            Straw and cornstalks are full of cellulose. Ordinary bacteria cannot ferment cellulose.
            That limits how much biomass we can turn into fuel.
          </p>
          <p>
            Researchers study enzymes that break cellulose into sugars that yeast can ferment. This
            would greatly expand the biomass we can use. It would also reduce the food-versus-fuel
            competition.
          </p>
          <h3>Biogas from Anaerobic Digestion</h3>
          <p>
            Bacteria digest waste like sewage and farm waste without oxygen. This anaerobic
            digestion produces methane, called biogas.
          </p>
          <p>
            Sewage treatment plants already use this. Anaerobic digesters at the plants make
            methane, and that methane runs the plants themselves.
          </p>
          <h3>Biodiesel</h3>
          <p>
            Biodiesel comes from renewable biological sources like vegetable oil and used restaurant
            cooking oil. It runs more efficiently than gasoline does.
          </p>
          <p>
            Biodiesel has a drawback. It is viscous and can solidify at low temperatures. That makes
            cold-weather use harder.
          </p>
          <div className="lrn-callout lrn-warning">
            <span className="lrn-callout-label">Important</span>
            <p>
              Ethanol, methane, and biodiesel all still produce CO<sub>2</sub> when they burn. They
              add to the greenhouse effect. Their advantage is that the Sun renews their source each
              year.
            </p>
          </div>
          <h3>Comparing Fuels by Energy</h3>
          <p>
            You met specific enthalpy in thermochemistry: the energy a fuel releases when one gram
            of it burns. To find it, take the energy per mole and divide by the mass of one mole.
          </p>
          <p>
            Take hydrogen. Burning one mole releases 286 kJ, and one mole of H<sub>2</sub> has a
            mass of 2.016 g. So the specific enthalpy is 286 ÷ 2.016 ≈ 142 kJ per gram. The table
            below works the same way for four fuels.
          </p>
          <div className="table-wrapper">
            <table>
              <thead>
                <tr>
                  <th>Fuel</th>
                  <th>Combustion reaction</th>
                  <th>ΔH°</th>
                  <th>Specific enthalpy</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Hydrogen</td>
                  <td>
                    H<sub>2</sub>(g) + ½ O<sub>2</sub>(g) → H<sub>2</sub>O(l)
                  </td>
                  <td>−286 kJ</td>
                  <td>142 kJ·g⁻¹</td>
                </tr>
                <tr>
                  <td>Methane</td>
                  <td>
                    CH<sub>4</sub>(g) + 2 O<sub>2</sub>(g) → CO<sub>2</sub>(g) + 2 H<sub>2</sub>O(l)
                  </td>
                  <td>−890 kJ</td>
                  <td>55 kJ·g⁻¹</td>
                </tr>
                <tr>
                  <td>Ethanol</td>
                  <td>
                    C<sub>2</sub>H<sub>5</sub>OH(l) + 3 O<sub>2</sub>(g) → 2 CO<sub>2</sub>(g) + 3 H
                    <sub>2</sub>O(l)
                  </td>
                  <td>−1368 kJ</td>
                  <td>29.7 kJ·g⁻¹</td>
                </tr>
                <tr>
                  <td>Glucose</td>
                  <td>
                    C<sub>6</sub>H<sub>12</sub>O<sub>6</sub>(s) + 6 O<sub>2</sub>(g) → 6 CO
                    <sub>2</sub>
                    (g) + 6 H<sub>2</sub>O(l)
                  </td>
                  <td>−2808 kJ</td>
                  <td>15.59 kJ·g⁻¹</td>
                </tr>
              </tbody>
            </table>
          </div>
          <SpecificEnthalpyFuelsViz />
          <div className="lrn-insight">
            <span className="lrn-insight-label">KEY INSIGHT</span>
            <p>
              Fuels that are already partly oxygenated, like glucose (15.59 kJ·g⁻¹) and ethanol
              (29.7 kJ·g⁻¹), have lower specific enthalpies than hydrocarbons. This is a trade-off
              when you pick a renewable fuel.
            </p>
          </div>
          <h3>Hydrogen as a Fuel</h3>
          <p>
            Hydrogen produces no CO<sub>2</sub> when it burns; the only product is water. It also
            has the highest specific enthalpy at 142 kJ·g⁻¹.
          </p>
          <p>
            Hydrogen's large volume and tricky handling limit it. Solar energy can pull it out of
            ocean water. Researchers are still working on good ways to store it.
          </p>
          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Ethanol as transport fuel</span>
              <p>
                A liquid that is easy to store and blend with gasoline. It is already oxygenated, so
                its specific enthalpy is lower at 29.7 kJ·g⁻¹. It still makes CO<sub>2</sub> on
                burning.
              </p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Hydrogen as transport fuel</span>
              <p>
                The highest specific enthalpy at 142 kJ·g⁻¹. It makes only water on burning. But gas
                volume, storage, and safe handling limit its use.
              </p>
            </div>
          </div>
          <h3>Why Renewable Fuels Are Growing</h3>
          <p>
            Demand for renewable fuels keeps rising. Governments now set targets that push renewable
            fuel toward a large share of all liquid fuel used.
          </p>
        </>,

        <>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              A power plant burns fuel to make heat, then turns that heat into electricity. Do you
              think this two-step path wastes much energy?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                Yes. Making electricity by burning fuel is very inefficient, because a lot of energy
                escapes as heat.
              </p>
              <p>
                A fuel cell skips the burning step. It makes electricity directly from a chemical
                reaction, so it avoids that heat loss.
              </p>
            </details>
          </div>
          <div className="lrn-header">
            <h2>Energy Efficiency and Fuel Cells</h2>
          </div>
          <p>
            <strong>When to use this:</strong> Choose a fuel cell when you want clean, efficient
            electricity straight from a chemical reaction without a burning step.
          </p>
          <p>
            You met cells in redox: a primary cell seals its reactants inside and dies when they run
            out. A fuel cell is the same kind of cell, but you feed the reactants in continuously.
            So it keeps making electricity as long as fuel flows in.
          </p>
          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>
              Why is a combustion engine so inefficient? It first turns chemical energy into heat,
              then turns heat into work. Each step loses energy, and the heat step wastes a large
              part as waste heat. A fuel cell turns chemical energy straight into electricity and
              skips that loss.
            </p>
          </div>
          <FuelCellEfficiencyViz />
          <h3>The Alkali Fuel Cell</h3>
          <p>
            The hydrogen–oxygen alkali fuel cell powered the space shuttle. It uses a potassium
            hydroxide (KOH) electrolyte, the liquid that carries charge between the two sides. The
            only product of the cell reaction is water, which the crew can use for life support.
          </p>
          <p>
            Fuel enters at the anode (the side that gives up electrons) and oxygen enters at the
            cathode (the side that takes electrons in):
          </p>
          <div className="lrn-eq">
            <span>
              Anode: 2 H<sub>2</sub>(g) + 4 OH<sup>−</sup>(aq) → 4 H<sub>2</sub>O(l) + 4 e
              <sup>−</sup>
            </span>
            <span>
              Cathode: O<sub>2</sub>(g) + 4 e<sup>−</sup> + 2 H<sub>2</sub>O(l) → 4 OH<sup>−</sup>
              (aq)
            </span>
          </div>
          <FuelCellViz />
          <h3>The Phosphoric Acid Fuel Cell and CHP</h3>
          <p>
            This cell uses a phosphoric acid (H<sub>3</sub>PO<sub>4</sub>) electrolyte. It suits
            combined heat and power systems.
          </p>
          <div className="lrn-definition">
            <span className="lrn-definition-term">Combined heat and power (CHP)</span>
            <div className="lrn-definition-desc">
              <p>
                A system that uses the waste heat from a fuel cell to heat buildings or do work. Its
                efficiency can reach 80%.
              </p>
            </div>
          </div>
          <p>
            CHP plants could replace heating plants and power sources in colleges, hotels, and
            apartment buildings.
          </p>
          <div className="lrn-eq">
            <span>
              Anode: 2 H<sub>2</sub>(g) → 4 H<sup>+</sup>(aq) + 4 e<sup>−</sup>
            </span>
            <span>
              Cathode: O<sub>2</sub>(g) + 4 H<sup>+</sup>(aq) + 4 e<sup>−</sup> → 2 H<sub>2</sub>
              O(l)
            </span>
          </div>
          <h3>The Methanol Fuel Cell</h3>
          <p>
            This cell burns a liquid fuel instead of hydrogen gas, so it uses a thin membrane
            between the two sides. Methanol is easy to handle and rich in hydrogen atoms. But it has
            a problem: the methanol itself gets dragged across the membrane into the cathode, which
            lowers efficiency.
          </p>
          <div className="lrn-eq">
            <span>
              Anode: CH<sub>3</sub>OH(l) + 6 OH<sup>−</sup>(aq) → 5 H<sub>2</sub>O(l) + CO
              <sub>2</sub>
              (g) + 6 e<sup>−</sup>
            </span>
            <span>
              Cathode: O<sub>2</sub>(g) + 4 e<sup>−</sup> + 2 H<sub>2</sub>O(l) → 4 OH<sup>−</sup>
              (aq)
            </span>
          </div>
          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>
              The alkali cell and the phosphoric acid cell run the same overall reaction, hydrogen
              plus oxygen making water. Why do their half-reactions look so different? Form your
              answer before reading on.
            </p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                The electrolyte decides which ion carries charge. The alkali cell uses KOH, so OH
                <sup>−</sup> ions move and appear in the half-reactions.
              </p>
              <p>
                The phosphoric acid cell uses H<sub>3</sub>PO<sub>4</sub>, so H<sup>+</sup> ions
                move and appear instead. Different ions give different-looking half-reactions for
                the same overall change.
              </p>
            </details>
          </div>
          <h3>Storing Hydrogen for Vehicles</h3>
          <p>
            Mobile fuel cells need a way to store hydrogen safely. Researchers are testing solid
            materials that soak up hydrogen and pack in a lot of energy for their size. Finding a
            safe, high-density store is still an open problem.
          </p>
          <h3>Biofuel Cells</h3>
          <div className="lrn-definition">
            <span className="lrn-definition-term">Biofuel cell</span>
            <div className="lrn-definition-desc">
              <p>
                A fuel cell that uses enzymes or whole organisms instead of a platinum catalyst. It
                draws electricity through organic molecules that support electron transfer.
              </p>
            </div>
          </div>
          <p>
            A biofuel cell could power medical implants. It could use glucose from the bloodstream
            as its fuel.
          </p>
          <h3>Hydrogen Cars</h3>
          <p>
            Hydrogen fuel cells for cars are pollution free. The only product of the reaction is
            water. Carmakers already build some of these cars.
          </p>
          <p>
            The challenge is making renewable hydrogen from seawater using solar energy. Engineers
            must also solve safe transport and storage of hydrogen.
          </p>
        </>,

        <>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              Chlorine bleach whitens laundry but makes toxic by-products. Is there a bleaching
              agent whose only leftover is harmless?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                Yes. Hydrogen peroxide (H<sub>2</sub>O<sub>2</sub>) is a nontoxic bleaching agent.
              </p>
              <p>
                Bleaching is an oxidation. When hydrogen peroxide bleaches, the only waste it makes
                is H<sub>2</sub>O.
              </p>
            </details>
          </div>
          <div className="lrn-header">
            <h2>Reducing Hazardous Waste</h2>
          </div>
          <p>
            The big goal that ties all of green chemistry together is reducing hazardous waste.
            Choosing safer chemicals is one direct way to reach it.
          </p>
          <p>
            <strong>When to use this:</strong> Reach for a green oxidant like hydrogen peroxide when
            you need to bleach or oxidize but want to avoid toxic by-products.
          </p>
          <p>
            Hydrogen peroxide (H<sub>2</sub>O<sub>2</sub>) is a nontoxic bleaching agent. Industry
            and home laundries use it to replace chlorine. Bleaching is an oxidation, and when
            hydrogen peroxide bleaches, the only waste it makes is H<sub>2</sub>O.
          </p>
          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Chlorine bleach</span>
              <p>
                Hazardous to handle. It produces toxic by-products. Those by-products must be
                managed and disposed of.
              </p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Hydrogen peroxide bleach</span>
              <p>
                Nontoxic. Its only waste is H<sub>2</sub>O. It replaces chlorine in industry and
                home laundries.
              </p>
            </div>
          </div>
          <p>
            Hydrogen peroxide can act as an oxidizing agent. For example, it oxidizes iron(II) to
            iron(III) in acid. Each peroxide molecule takes two electrons, so it oxidizes two iron
            ions at once:
          </p>
          <div className="lrn-eq">
            <span>
              2 Fe<sup>2+</sup>(aq) + H<sub>2</sub>O<sub>2</sub>(aq) + 2 H<sup>+</sup>(aq) → 2 Fe
              <sup>3+</sup>(aq) + 2 H<sub>2</sub>O(l)
            </span>
          </div>
          <p>
            In light, hydrogen peroxide also disproportionates, the self-oxidizing-and-reducing
            change you met with redox. Here the peroxide breaks into water and oxygen:
          </p>
          <div className="lrn-eq">
            <span>
              2 H<sub>2</sub>O<sub>2</sub>(aq) → 2 H<sub>2</sub>O(l) + O<sub>2</sub>(g)
            </span>
          </div>
          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>
              Why is hydrogen peroxide a green oxidant? Its oxygen comes from the peroxide itself,
              so it needs no toxic helper chemical. When it gives up that oxygen, the leftover is
              just water. No toxic salt or chlorine by-product is created, so the waste burden drops
              to almost nothing.
            </p>
          </div>
          <div className="lrn-insight">
            <span className="lrn-insight-label">KEY INSIGHT</span>
            <p>
              Every idea in this unit serves one goal: minimizing waste. Atom economy, green
              solvents, renewable fuels, and fuel cells all aim to use resources well and protect
              the environment.
            </p>
          </div>
        </>
      ]
    },
    practice: [
      {
        q: 'Define sustainable development in your own words.',
        a: 'Sustainable development is the economical use and renewal of resources. It also includes reducing hazardous waste and caring for the environment. Green chemistry is the everyday name for this approach in chemistry.'
      },
      {
        q: 'Why do chemists care about atom economy in industrial reactions?',
        a: 'In many reactions, not all atoms end up in the product. Some atoms become by-products and are wasted. Atom economy measures how well a synthesis uses its raw materials, which helps cut that waste.'
      },
      {
        q: 'A fuel cell makes electricity directly from a chemical reaction. Why is this more efficient than burning fuel in a power plant?',
        a: 'Burning fuel first makes heat, then turns heat into electricity, and that heat step wastes much energy. A fuel cell skips burning and makes electricity straight from the reaction. So it avoids the large heat loss and is far more efficient.'
      },
      {
        q: 'Compute the atom economy of making but-2-ene (56.10 g·mol⁻¹) from 2-bromobutane (137.02) and methoxide (31.03).',
        a: 'First add the reactant masses: 137.02 + 31.03 = 168.05 g·mol⁻¹. Then divide product by total: (56.10 / 168.05) × 100% = 33.4%. This route wastes 168.05 − 56.10 = 111.95 g per mol of product.'
      },
      {
        q: 'Why does supercritical CO₂ leave no residue in a decaffeinated coffee bean?',
        a: 'Supercritical CO₂ is dense enough to dissolve the caffeine like a liquid. After extraction the pressure drops and the CO₂ escapes as a gas. Because it leaves as a gas, no solvent residue stays behind in the product.'
      },
      {
        q: 'Hydrogen has a specific enthalpy of 142 kJ·g⁻¹, but ethanol only 29.7 kJ·g⁻¹. Explain the difference.',
        a: 'Ethanol is already partly oxygenated, since it carries an oxygen atom. A part-oxidized fuel releases less energy per gram when it burns. Hydrogen has no oxygen to start with, so it releases far more energy per gram.'
      },
      {
        q: 'Why is hydrogen peroxide called a green oxidant for bleaching?',
        a: 'Bleaching is an oxidation, and hydrogen peroxide is nontoxic. When it bleaches, the only waste it makes is H₂O. So it replaces chlorine, which produces toxic by-products.'
      },
      {
        q: 'Write the alkali fuel cell anode half-reaction and name its electrolyte.',
        a: 'The anode reaction is 2 H₂(g) + 4 OH⁻(aq) → 4 H₂O(l) + 4 e⁻. The electrolyte is potassium hydroxide, KOH. This cell powered the space shuttle, and its only product is water.'
      },
      {
        q: 'How does biogas get produced, and where is it already used?',
        a: 'Bacteria digest waste such as sewage and farm waste without oxygen, called anaerobic digestion. This produces methane, known as biogas. Sewage treatment plants already use digesters to make methane that runs the plants.'
      },
      {
        q: 'A new drug-extraction process must leave zero toxic solvent in the medicine. Which green solvent fits, and why?',
        a: 'Supercritical CO₂ fits, because it leaves no residue. It dissolves the target compound like a liquid, then escapes as a gas after the pressure drops. No toxic solvent stays in the medicine, which is exactly the requirement.'
      },
      {
        q: 'Two reactions make the same product with the same percentage yield. Can one still be greener? Explain.',
        a: 'Yes. Percentage yield only measures how much of the theoretical product you actually got. Atom economy measures how much reactant mass ends up in the product. So two reactions can share a yield yet differ in atom economy and waste.'
      },
      {
        q: 'Why does ethanol still count as renewable even though burning it releases CO₂?',
        a: 'Ethanol, methane, and biodiesel all release CO₂ on burning. But ethanol comes from corn that the Sun helps grow again each year. The source is replenished yearly, so the fuel is renewable despite the CO₂.'
      },
      {
        q: 'Why does choosing a lighter base raise the atom economy when making but-2-ene?',
        a: 'The product mass stays at 56.10 g·mol⁻¹ in every route. Only the total reactant mass changes with the base. A lighter base gives a smaller total, which is a smaller denominator. A smaller denominator gives a larger atom economy and less waste.'
      },
      {
        q: 'Why must a phosphoric acid fuel cell and an alkali fuel cell have different half-reactions, even for the same overall reaction?',
        a: 'The electrolyte sets which ion carries the charge. The alkali cell uses KOH, so OH⁻ ions appear in its half-reactions. The phosphoric acid cell uses H₃PO₄, so H⁺ ions appear instead.'
      },
      {
        q: 'You compare the specific enthalpies of methane (55 kJ·g⁻¹) and glucose (15.59 kJ·g⁻¹). Which is the more partly oxygenated fuel?',
        a: 'Glucose is the more partly oxygenated fuel. It has the lower specific enthalpy of the two. Partly oxygenated fuels release less energy per gram, so the lower value points to glucose.'
      },
      {
        q: 'A student claims hydrogen produces CO₂ when it burns. What is wrong, and what is the correct product?',
        a: 'The claim is wrong. Hydrogen contains no carbon, so it cannot make CO₂. The only product of burning hydrogen is water, H₂O.'
      },
      {
        q: 'What problem limits the methanol fuel cell, and what causes it?',
        a: 'Methanol gets dragged across the membrane into the cathode. This crossover lowers the cell efficiency, even though methanol is easy to handle and rich in hydrogen.'
      },
      {
        q: 'Why is cellulose research important for expanding biomass fuels?',
        a: 'Straw and cornstalks are full of cellulose, but ordinary bacteria cannot ferment it. Researchers study enzymes that break cellulose into fermentable sugars. Success would greatly expand usable biomass and reduce the food-versus-fuel competition.'
      },
      {
        q: 'You need to identify the greenest of several reaction routes to one product. Which measure do you use, and what do you look for?',
        a: 'Use atom economy, the product mass over the total reactant mass times 100%. Compute it for each route. The route with the highest atom economy and lowest waste mass is the greenest choice.'
      },
      {
        q: 'A college wants to replace its old heating plant and power source with one efficient system. Which fuel cell setup fits, and how efficient can it be?',
        a: 'A phosphoric acid fuel cell with combined heat and power fits. The waste heat is used to heat buildings or do work. Its efficiency in a CHP plant can reach 80%, and it suits campuses and apartment buildings.'
      },
      {
        q: 'Why does a higher specific enthalpy make hydrogen attractive despite its drawbacks?',
        a: 'Specific enthalpy is the energy released per gram of fuel. Hydrogen has the highest value at 142 kJ·g⁻¹, so each gram gives a lot of energy. That high energy per gram makes it attractive, even though its volume, storage, and safety are hard to manage.'
      },
      {
        q: 'How much faster do we use fuel than nature stores biomass energy in a useful form?',
        a: 'The useful storage rate is about 10¹¹ kJ per year. We use fuel at about 5 × 10¹⁷ kJ per year. That is about 5 million times faster than nature stores it.'
      },
      {
        q: 'When you make but-2-ene by three different elimination routes, why does the product mass stay the same across all three?',
        a: 'All three routes make the same product, but-2-ene, with a molar mass of 56.10 g·mol⁻¹. The reaction only changes which base removes the HBr. The product is identical, so its mass does not change.'
      },
      {
        q: 'A medical implant needs power from a source inside the body. Which kind of fuel cell could work, and what fuel would it use?',
        a: 'A biofuel cell could work. Instead of a platinum catalyst, it uses enzymes or whole organisms. It could draw glucose from the bloodstream as its fuel and extract electricity through organic molecules.'
      },
      {
        q: 'Why is E85 fuel a trade-off compared with pure gasoline?',
        a: 'E85 is 85% ethanol and 15% gasoline. It cuts carbon monoxide and hydrocarbon emissions, which is a benefit. But it gives about 15% lower mileage, because ethanol is already oxygenated and releases less energy per gram.'
      }
    ],
    reference: {
      category: 'Quick Reference',
      title: 'Green and Sustainable Chemistry',
      sections: [
        <>
          <h2>Core Definitions</h2>
          <div className="lrn-definition">
            <span className="lrn-definition-term">Sustainable development</span>
            <div className="lrn-definition-desc">
              <p>
                Economical use and renewal of resources, plus hazardous waste reduction and care for
                the environment.
              </p>
            </div>
          </div>
          <div className="lrn-definition">
            <span className="lrn-definition-term">Green chemistry</span>
            <div className="lrn-definition-desc">
              <p>The everyday name for the sustainable development approach in chemistry.</p>
            </div>
          </div>
          <div className="lrn-definition">
            <span className="lrn-definition-term">Atom economy</span>
            <div className="lrn-definition-desc">
              <p>
                Using as few atoms as possible to reach an end product, reported as a percentage.
              </p>
            </div>
          </div>
          <div className="lrn-definition">
            <span className="lrn-definition-term">Supercritical fluid</span>
            <div className="lrn-definition-desc">
              <p>
                The dense fluid above a substance's critical temperature and pressure; a gas as
                dense as a liquid, so it can act as a solvent.
              </p>
            </div>
          </div>
          <div className="lrn-definition">
            <span className="lrn-definition-term">Renewable fuel / Biomass</span>
            <div className="lrn-definition-desc">
              <p>
                A fuel whose source the Sun replenishes each year. Biomass is plant material burned
                or reacted to make fuels.
              </p>
            </div>
          </div>
          <div className="lrn-definition">
            <span className="lrn-definition-term">Specific enthalpy</span>
            <div className="lrn-definition-desc">
              <p>The enthalpy of combustion per gram; a practical measure of a fuel's value.</p>
            </div>
          </div>
          <div className="lrn-definition">
            <span className="lrn-definition-term">Fuel cell</span>
            <div className="lrn-definition-desc">
              <p>
                Makes electricity directly from a chemical reaction, like a battery, with reactants
                supplied continuously, like an engine.
              </p>
            </div>
          </div>
          <div className="lrn-definition">
            <span className="lrn-definition-term">Combined heat and power (CHP)</span>
            <div className="lrn-definition-desc">
              <p>
                Uses a fuel cell's waste heat to heat buildings or do work; efficiency up to 80%.
              </p>
            </div>
          </div>
          <div className="lrn-definition">
            <span className="lrn-definition-term">Biofuel cell</span>
            <div className="lrn-definition-desc">
              <p>
                A fuel cell that uses enzymes or whole organisms instead of a platinum catalyst.
              </p>
            </div>
          </div>
        </>,

        <>
          <h2>Key Formula</h2>
          <div className="lrn-eq lrn-eq-hero">
            <span>{`$$\\text{atom economy} = \\frac{\\text{mass of desired product}}{\\text{mass of all reactants}} \\times 100\\%$$`}</span>
          </div>
          <p>
            <strong>When to use:</strong> Compare reaction routes to the same product and pick the
            one that wastes the fewest atoms. A higher value means less waste.
          </p>
          <p>
            <strong>Worked result:</strong> But-2-ene from 2-bromobutane via methoxide gives (56.10
            / 168.05) × 100% = 33.4%, the highest atom economy among the common base choices.
          </p>
        </>,

        <>
          <h2>Combustion and Specific Enthalpy</h2>
          <div className="table-wrapper">
            <table>
              <thead>
                <tr>
                  <th>Fuel</th>
                  <th>ΔH°</th>
                  <th>Specific enthalpy</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Hydrogen</td>
                  <td>−286 kJ</td>
                  <td>142 kJ·g⁻¹</td>
                </tr>
                <tr>
                  <td>Methane</td>
                  <td>−890 kJ</td>
                  <td>55 kJ·g⁻¹</td>
                </tr>
                <tr>
                  <td>Ethanol</td>
                  <td>−1368 kJ</td>
                  <td>29.7 kJ·g⁻¹</td>
                </tr>
                <tr>
                  <td>Glucose</td>
                  <td>−2808 kJ</td>
                  <td>15.59 kJ·g⁻¹</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p>
            Partly oxygenated fuels (ethanol, glucose) carry lower specific enthalpies than
            hydrocarbons. Hydrogen makes only water on burning and has the highest specific
            enthalpy.
          </p>
        </>,

        <>
          <h2>Fuel Cell Types</h2>
          <div className="table-wrapper">
            <table>
              <thead>
                <tr>
                  <th>Type</th>
                  <th>Electrolyte</th>
                  <th>Notes</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Alkali</td>
                  <td>KOH</td>
                  <td>Space shuttle; only product is water; high cost</td>
                </tr>
                <tr>
                  <td>Phosphoric acid</td>
                  <td>
                    H<sub>3</sub>PO<sub>4</sub>
                  </td>
                  <td>Suits CHP; efficiency up to 80%</td>
                </tr>
                <tr>
                  <td>Methanol</td>
                  <td>Polymer membrane</td>
                  <td>Easy to handle; methanol crossover lowers efficiency</td>
                </tr>
              </tbody>
            </table>
          </div>
        </>,

        <>
          <h2>Green Oxidant and Waste</h2>
          <div className="ref-formula">
            <span className="ref-formula-name">Hydrogen peroxide disproportionation</span>
            <div className="ref-formula-eq">
              2 H<sub>2</sub>O<sub>2</sub>(aq) → 2 H<sub>2</sub>O(l) + O<sub>2</sub>(g)
            </div>
            <p className="ref-formula-desc">
              When to use: hydrogen peroxide replaces chlorine bleach; its only bleaching waste is H
              <sub>2</sub>O. In light it oxidizes and reduces itself.
            </p>
          </div>
          <p>
            The unifying goal of this unit is minimizing waste. Atom economy, green solvents,
            renewable fuels, and fuel cells all serve that goal.
          </p>
        </>
      ]
    },
    customCss: null
  }
  return config
}

export default function GreenAndSustainableChemistry() {
  const config = useConfig()
  return <LearningTemplate config={config} />
}
