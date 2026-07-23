import { LearningTemplate } from '../../../../../components/learning/learning-template'
import {
  RutherfordScatteringViz,
  IsotopesMassSpectrumViz,
  BalmerSeriesViz,
  GrotrianLadderViz,
  PlanckCurvesViz,
  PhotoelectricViz,
  DeBroglieViz,
  HeisenbergViz,
  HydrogenWavefunctionViz,
  ParticleInBoxViz,
  HydrogenEnergyLevelsViz,
  QuantumNumberTreeViz,
  RadialDistributionViz,
  POrbitalDensityViz,
  SternGerlachViz,
  HartreeFockSCFViz,
  AufbauViz,
  EffectiveNuclearChargeViz,
  AtomicRadiusTrendViz,
  IonizationEnergyTrendViz,
  SuccessiveIonizationViz,
  ElectronAffinityTrendViz,
  ElectronegativityTrendViz,
  ShieldingPenetrationViz,
  InertPairViz,
  DiagonalRelationshipsViz
} from '../../../../../components/viz'

export default function AtomicStructureAndPeriodicTrends() {
  const config = {
    cssPrefix: 'chem-atomic-trends',
    documentTitle: 'Atomic Structure, the Periodic Table, and Periodic Trends - AETHER',
    learning: {
      category: 'Unit 1',
      groupTitle: 'Atomic Structure and Periodicity',
      title: 'Atomic Structure, the Periodic Table, and Periodic Trends',
      subtitle:
        'From nuclei and quantum numbers to periodic trends in size, energy, and reactivity.',
      sections: [
        <>
          <div className="lrn-header">
            <h2>The Nuclear Model of the Atom</h2>
          </div>
          <p>
            <strong>When to use this:</strong> Reach for this when you need to understand why any
            atomic property exists from first principles.
          </p>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              Positive particles bombard a thin gold foil. Predict how most particles will behave
              and what would surprise you.
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                Most particles pass straight through. The surprising result is that a small fraction
                bounce back at large angles. This shows the atom is mostly empty space with a tiny
                dense nucleus. Most particles miss it entirely, but those aimed directly at the
                nucleus hit concentrated positive charge and recoil.
              </p>
            </details>
          </div>
          <p>
            An <strong>atom</strong> is the smallest unit of an element that keeps the element's
            chemical identity. In 1897, J.J. Thomson showed that atoms contain lighter, negatively
            charged particles called <strong>electrons</strong>. He proposed a "plum pudding" model:
            electrons embedded in a spread-out positive cloud.
          </p>
          <p>
            Ernest Rutherford shattered that picture in 1908. He fired positively charged alpha
            particles at a thin gold foil. Most passed straight through. A small fraction bounced
            back at large angles. Rutherford concluded that almost all the atom's mass sits in a
            tiny, dense, positively charged core called the <strong>nucleus</strong>. The nucleus is
            roughly 10,000 times smaller than the atom. Electrons orbit far outside it, mostly in
            empty space.
          </p>
          <RutherfordScatteringViz />
          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>
              Why does one particle in ten thousand bounce back? The nucleus carries all the
              positive charge. A positive alpha particle aimed directly at that concentrated charge
              faces enormous repulsive force and turns around. Particles that miss the nucleus by
              any distance glide through undeflected.
            </p>
          </div>
        </>,

        <>
          <div className="lrn-header">
            <h2>The Nuclear Atom: Protons, Neutrons, and Atomic Number</h2>
          </div>
          <p>
            <strong>When to use this:</strong> Use this when you need to identify an element, count
            particles in a nucleus, or distinguish isotopes.
          </p>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              Two atoms both have 6 protons. One has 6 neutrons and the other has 8. Predict whether
              they are the same element and whether they are identical atoms.
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                They are the same element (both have Z=6, so both are carbon). They are not
                identical atoms. They have different mass numbers (12 vs 14). These are isotopes of
                carbon.
              </p>
            </details>
          </div>
          <p>
            <strong>Protons</strong> carry a single positive charge{' '}
            {`($+e$, where $e = 1.602 \\times 10^{-19}$ C)`}. <strong>Neutrons</strong> carry no
            charge. Both have nearly the same mass {`($\\approx 1.67 \\times 10^{-27}$ kg)`},
            roughly 1836 times the mass of an electron.
          </p>
          <p>
            The <strong>atomic number</strong> {`$Z$`} is the number of protons in the nucleus. It
            defines the element: every carbon atom has {`$Z = 6$`}. A neutral atom has exactly{' '}
            {`$Z$`} electrons.
          </p>
          <p>
            The <strong>mass number</strong> {`$A$`} is the total count of protons plus neutrons:{' '}
            {`$A = Z + N$`}. An atom is written {`$^A_Z\\text{X}$`}, for example{' '}
            {`$^{12}_6\\text{C}$`}.
          </p>
          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>
              Why does the number of protons determine the element? Electrons determine chemistry,
              and in a neutral atom the electron count equals the proton count. Change the proton
              count and you change the electron count and the entire chemical behavior. Neutrons
              merely add mass without changing charge.
            </p>
          </div>
        </>,

        <>
          <div className="lrn-header">
            <h2>Isotopes, Allotropes, and Mass Spectrometry</h2>
          </div>
          <p>
            <strong>When to use this:</strong> Use this when you see average atomic masses on the
            periodic table, or when comparing different physical forms of the same element.
          </p>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              Chlorine's average atomic mass is 35.45. Chlorine has two stable isotopes, one with
              mass 35 and one with mass 37. Predict which isotope is more common.
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>{`The average 35.45 is much closer to 35 than to 37, so $^{35}$Cl is more common, about 75% of naturally occurring chlorine.`}</p>
            </details>
          </div>
          <p>
            <strong>Isotopes</strong> are atoms of the same element ({`$Z$`} identical) with
            different mass numbers ({`$A$`} different). Chlorine has two stable isotopes:{' '}
            {`$^{35}$`}Cl and {`$^{37}$`}Cl. Because {`$^{35}$`}Cl is about three times more
            abundant, the average atomic mass is 35.45.
          </p>
          <p>
            The average atomic mass is the abundance-weighted mean. Chlorine is 75.8% {`$^{35}$`}Cl
            and 24.2% {`$^{37}$`}Cl. Multiply each mass by its share and add:
          </p>
          <p className="lrn-eq">{`$$(0.758 \\times 35) + (0.242 \\times 37) = 26.53 + 8.95 = 35.45$$`}</p>
          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Isotopes</span>
              <p>
                Same element, same {`$Z$`}, different {`$A$`}. Differ at the nuclear level (neutron
                count). Chemically nearly identical. Example: {`$^{35}$`}Cl and {`$^{37}$`}Cl.
              </p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Allotropes</span>
              <p>
                Same element, different structural arrangement of atoms. Can have very different
                properties. Example: graphite and diamond (both pure carbon, {`$Z = 6$`}).
              </p>
            </div>
          </div>
          <p>
            <strong>Allotropes</strong> are different structural forms of the same element. Graphite
            forms flat sheets of hexagonally bonded carbon; diamond forms a rigid three-dimensional
            lattice. They look and feel completely different even though they contain identical
            atoms.
          </p>
          <p>
            An <strong>ion</strong> is an atom with unequal protons and electrons, so it carries a
            net charge. A positive ion is a <strong>cation</strong>; a negative ion is an{' '}
            <strong>anion</strong>.
          </p>
          <p>
            A <strong>mass spectrometer</strong> separates isotopes by mass-to-charge ratio. It
            ionizes a sample, accelerates the ions through a magnetic field, and bends them onto a
            detector. Heavier ions bend less. Each isotope lands at a different position.
          </p>
          <IsotopesMassSpectrumViz />
          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>
              Why are two isotopes chemically nearly identical? Chemistry depends on electrons.
              Isotopes have the same proton count, so they have the same electron count. Extra
              neutrons add mass but do not change how the atom bonds.
            </p>
          </div>
          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>
              Why does ionizing the sample matter before it enters the magnetic field? Form your
              answer before reading on.
            </p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                A magnetic field deflects only charged particles. Neutral atoms pass straight
                through without bending. Ionizing the atoms gives each one a known charge, so the
                magnetic force acts on them and separates them by mass-to-charge ratio. Without
                ionization, no separation occurs.
              </p>
            </details>
          </div>
        </>,

        <>
          <div className="lrn-header">
            <h2>Light and Atomic Spectra</h2>
          </div>
          <p>
            <strong>When to use this:</strong> Use this when a problem involves the wavelength,
            frequency, or energy of light, or when an atom emits or absorbs specific colors.
          </p>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              You heat hydrogen gas until it glows. Predict whether you will see a continuous
              rainbow or only a few distinct colors.
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                You see only a few distinct colors. Hydrogen atoms can only store energy in fixed
                amounts, so they emit only specific wavelengths when dropping between allowed energy
                levels. You see sharp colored lines, not a continuous rainbow.
              </p>
            </details>
          </div>
          <div className="lrn-callout">
            <p>
              <strong>Units you will use from here on.</strong> The numbers below are tiny or huge,
              so we use compact units. Keep this table handy.
            </p>
            <table className="lrn-table">
              <thead>
                <tr>
                  <th>Unit</th>
                  <th>Measures</th>
                  <th>Meaning</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>nm (nanometer)</td>
                  <td>length</td>
                  <td>{`$10^{-9}$ m. Visible light is 400 to 700 nm.`}</td>
                </tr>
                <tr>
                  <td>pm (picometer)</td>
                  <td>length</td>
                  <td>{`$10^{-12}$ m. Atoms are about 100 pm wide.`}</td>
                </tr>
                <tr>
                  <td>{`cm$^{-1}$ (wavenumber)`}</td>
                  <td>1 / wavelength</td>
                  <td>waves per centimeter. Larger means more energy.</td>
                </tr>
                <tr>
                  <td>J (joule)</td>
                  <td>energy</td>
                  <td>the standard energy unit.</td>
                </tr>
                <tr>
                  <td>eV (electron-volt)</td>
                  <td>energy</td>
                  <td>{`a tiny energy unit for single atoms. $1$ eV $= 1.602 \\times 10^{-19}$ J.`}</td>
                </tr>
                <tr>
                  <td>K (kelvin)</td>
                  <td>temperature</td>
                  <td>absolute temperature, starting from zero at the coldest point.</td>
                </tr>
                <tr>
                  <td>kg (kilogram)</td>
                  <td>mass</td>
                  <td>the standard mass unit.</td>
                </tr>
                <tr>
                  <td>m/s</td>
                  <td>speed</td>
                  <td>meters per second.</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p>
            Light is an <strong>electromagnetic wave</strong> with wavelength {`$\\lambda$`} and
            frequency {`$\\nu$`}, connected by:
          </p>
          <p className="lrn-eq lrn-eq-hero">{`$$\\lambda \\nu = c, \\quad c = 2.998 \\times 10^8 \\text{ m s}^{-1}$$`}</p>
          <p>
            When atoms are heated, they emit light. A prism spreads that light into its separate
            colors. For hydrogen, you see only four visible lines, <strong>emission lines</strong>.
            Atoms also absorb the same wavelengths they emit, producing dark{' '}
            <strong>absorption lines</strong>.
          </p>
          <BalmerSeriesViz />
          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>
              Why do atoms emit only specific wavelengths? Atoms can only store energy in fixed
              amounts. When an excited atom loses energy, it releases exactly the difference between
              two allowed energy levels. That fixed difference corresponds to one wavelength. There
              are no in-between energies, so there are no in-between wavelengths.
            </p>
          </div>
          <p>
            The <strong>Rydberg formula</strong> predicts the wavelengths of hydrogen's spectral
            lines:
          </p>
          <p className="lrn-eq lrn-eq-hero">{`$$\\frac{1}{\\lambda} = \\tilde{R}_H \\left( \\frac{1}{n_1^2} - \\frac{1}{n_2^2} \\right), \\quad n_2 > n_1$$`}</p>
          <p>{`The constant $\\tilde{R}_H = 109677 \\text{ cm}^{-1}$ (equivalently $1.097 \\times 10^7 \\text{ m}^{-1}$ or $3.29 \\times 10^{15}$ Hz). The spectral series group lines by lower level $n_1$:`}</p>
          <table className="lrn-table">
            <thead>
              <tr>
                <th>Series</th>
                <th>Lower level</th>
                <th>Region</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Lyman</td>
                <td>{`$n_1 = 1$`}</td>
                <td>Ultraviolet</td>
              </tr>
              <tr>
                <td>Balmer</td>
                <td>{`$n_1 = 2$`}</td>
                <td>Visible</td>
              </tr>
              <tr>
                <td>Paschen</td>
                <td>{`$n_1 = 3$`}</td>
                <td>Infrared</td>
              </tr>
              <tr>
                <td>Brackett</td>
                <td>{`$n_1 = 4$`}</td>
                <td>Infrared</td>
              </tr>
              <tr>
                <td>Pfund</td>
                <td>{`$n_1 = 5$`}</td>
                <td>Infrared</td>
              </tr>
              <tr>
                <td>Humphreys</td>
                <td>{`$n_1 = 6$`}</td>
                <td>Far infrared</td>
              </tr>
            </tbody>
          </table>
          <GrotrianLadderViz />
          <p>
            The <strong>Bohr frequency condition</strong>:
          </p>
          <p className="lrn-eq">{`$$h\\nu = E_\\text{upper} - E_\\text{lower}$$`}</p>
          <h3>Worked Example: Rydberg Formula</h3>
          <p>{`First Balmer line ($n_1 = 2$, $n_2 = 3$):`}</p>
          <p className="lrn-eq">{`$$\\frac{1}{\\lambda} = 109677 \\left(\\frac{1}{4} - \\frac{1}{9}\\right) = 109677 \\times \\frac{5}{36} = 15233 \\text{ cm}^{-1}$$`}</p>
          <p className="lrn-eq">{`$$\\lambda = \\frac{1}{15233} = 6.565 \\times 10^{-5} \\text{ cm} = 656.5 \\text{ nm}$$`}</p>
          <p>{`This is the red $H_\\alpha$ line.`}</p>
          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>{`Why does the formula use $1/\\lambda$ instead of $\\lambda$? Form your answer before reading on.`}</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>{`The wavenumber $1/\\lambda$ is directly proportional to energy: $E = hc/\\lambda = hc \\times (1/\\lambda)$. Using $1/\\lambda$ makes the difference of reciprocal-square terms linear in energy, producing a cleaner formula.`}</p>
            </details>
          </div>
          <h3>Worked Example: Wavelength from Frequency</h3>
          <p>{`Light has frequency $\\nu = 6.0 \\times 10^{14}$ Hz. Find its wavelength.`}</p>
          <p className="lrn-eq">{`$$\\lambda = \\frac{c}{\\nu} = \\frac{2.998 \\times 10^8}{6.0 \\times 10^{14}} = 5.0 \\times 10^{-7} \\text{ m} = 500 \\text{ nm}$$`}</p>
          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>{`Why must $c$ and $\\nu$ use consistent units before dividing? Form your answer before reading on.`}</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>{`$\\lambda = c/\\nu$. If $c$ is in m/s and $\\nu$ is in s$^{-1}$, then $\\lambda$ comes out in meters. Mixing units (e.g., cm/s and s$^{-1}$) gives the right number pattern but the wrong unit.`}</p>
            </details>
          </div>
        </>,

        <>
          <div className="lrn-header">
            <h2>Planck's Hypothesis and Black-Body Radiation</h2>
          </div>
          <p>
            <strong>When to use this:</strong> Use this when a problem involves the energy a photon
            carries, or when the temperature of a glowing object is linked to the color it emits.
          </p>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              A piece of iron is heated from room temperature to 1500 K. Predict how the color of
              its glow changes as the temperature rises.
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                As temperature rises, the peak emission wavelength shifts to shorter wavelengths.
                The iron first glows dull red, then orange, then yellow-white. Higher temperature
                means more energy in short-wavelength photons.
              </p>
            </details>
          </div>
          <p>
            A <strong>black body</strong> absorbs all radiation and re-emits it based on
            temperature. Classical physics predicted infinite radiation at short wavelengths (the
            "ultraviolet catastrophe"). In 1900, Max Planck solved this by proposing energy is
            released only in discrete packets called <strong>quanta</strong>:
          </p>
          <p className="lrn-eq lrn-eq-hero">{`$$E = h\\nu, \\quad h = 6.626 \\times 10^{-34} \\text{ J s}$$`}</p>
          <PlanckCurvesViz />
          <p>
            High-frequency quanta each carry a lot of energy, so they are rarely emitted. This cuts
            off radiation at high frequencies. <strong>Wien's displacement law</strong> links peak
            wavelength to temperature:
          </p>
          <p className="lrn-eq">{`$$T \\cdot \\lambda_\\text{max} = 2.9 \\text{ K} \\cdot \\text{mm}$$`}</p>
          <p>
            The <strong>Stefan-Boltzmann law</strong> gives total power radiated per unit area:
          </p>
          <p className="lrn-eq">{`$$I = \\sigma T^4, \\quad \\sigma = 5.67 \\times 10^{-8} \\text{ W m}^{-2} \\text{K}^{-4}$$`}</p>
          <p>Doubling the temperature multiplies radiated power by {`$2^4 = 16$`}.</p>
          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>
              Why does quantization solve the ultraviolet catastrophe? At high frequency, each
              quantum is expensive in energy. At any temperature, the thermal energy budget is
              limited. The atom cannot afford to emit many high-frequency quanta. The distribution
              cuts off steeply at high frequency.
            </p>
          </div>
          <h3>Worked Example: Wien's Law</h3>
          <p>The sun's surface is approximately 5800 K. Find the peak wavelength of sunlight.</p>
          <p className="lrn-eq">{`$$\\lambda_\\text{max} = \\frac{2.9 \\text{ K}\\cdot\\text{mm}}{5800 \\text{ K}} = 5.0 \\times 10^{-4} \\text{ mm} = 500 \\text{ nm}$$`}</p>
          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>
              Why does the sun not appear green even though its peak wavelength is in the green?
              Form your answer before reading on.
            </p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                The sun emits a broad spectrum across the whole visible range, not just green. Our
                eyes mix all those colors into white. The peak tells you where most energy per unit
                wavelength goes, not what color you perceive.
              </p>
            </details>
          </div>
          <h3>Worked Example: Photon Energy</h3>
          <p>{`Find the energy of a green photon, $\\nu = 6.0 \\times 10^{14}$ Hz.`}</p>
          <p className="lrn-eq">{`$$E = h\\nu = (6.626 \\times 10^{-34})(6.0 \\times 10^{14}) = 3.98 \\times 10^{-19} \\text{ J}$$`}</p>
          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>
              Why is the photon energy so small yet enough to affect a single electron? Form your
              answer before reading on.
            </p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>{`An electron jumping between atomic levels needs only $\\sim 10^{-19}$ J, matched in scale to one photon. Ordinary macroscopic energy is made up of enormous numbers of photons, but one photon interacts with one electron.`}</p>
            </details>
          </div>
          <div className="lrn-faded">
            <div className="lrn-faded-phase">
              <span className="lrn-faded-label">COMPLETE EXAMPLE</span>
              <p>A star has surface temperature 10,000 K. Find its peak emission wavelength.</p>
              <ul className="lrn-list">
                <li>{`Wien's law: $\\lambda_\\text{max} = 2.9 \\text{ K}\\cdot\\text{mm} / T$`}</li>
                <li>{`$\\lambda_\\text{max} = 2.9 / 10000 = 2.9 \\times 10^{-4}$ mm $= 290$ nm (ultraviolet)`}</li>
              </ul>
            </div>
            <div className="lrn-faded-phase">
              <span className="lrn-faded-label">YOUR TURN: PARTIAL</span>
              <p>
                A glowing coal has surface temperature 1200 K. Find its peak emission wavelength.
              </p>
              <ul className="lrn-list">
                <li>{`Wien's law: $\\lambda_\\text{max} = \\underline{\\hspace{2em}} / 1200$`}</li>
                <li>{`$\\lambda_\\text{max} = \\underline{\\hspace{2em}}$ mm $= \\underline{\\hspace{2em}}$ nm`}</li>
              </ul>
              <p>
                Answer: 2.42 mm = 2417 nm (infrared). Only the tail reaches the visible, giving a
                dim red glow.
              </p>
            </div>
            <div className="lrn-faded-phase">
              <span className="lrn-faded-label">INDEPENDENT PRACTICE</span>
              <p>
                A blue-white star has peak emission at 350 nm. Find its surface temperature. Apply
                Wien's law, solving for T. Answer: 8286 K.
              </p>
            </div>
          </div>
        </>,

        <>
          <div className="lrn-header">
            <h2>The Photoelectric Effect</h2>
          </div>
          <p>
            <strong>When to use this:</strong> Use this to decide whether a given photon will eject
            an electron from a metal surface, and to find the kinetic energy of the ejected
            electron.
          </p>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              Shine dim blue light and bright red light on a metal surface. Predict which ejects
              electrons and which does not.
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                The dim blue light ejects electrons; the bright red light does not. Blue photons
                carry more energy (higher frequency). If one blue photon's energy exceeds the work
                function, electrons eject regardless of intensity. No amount of red light works if
                each red photon's energy is too low.
              </p>
            </details>
          </div>
          <p>
            When ultraviolet light hits certain metals, electrons fly out. Classical physics
            predicted that any light, if bright enough, could do this. Experiments showed otherwise.
            Below a threshold frequency, no electrons come out at any intensity. Einstein explained
            this in 1905: light consists of <strong>photons</strong>, each carrying {`$E = h\\nu$`}.
            An electron needs a minimum energy called the <strong>work function</strong> {`$\\Phi$`}{' '}
            to escape. Surplus energy becomes kinetic energy (the energy of motion):
          </p>
          <p className="lrn-eq lrn-eq-hero">{`$$E_k = h\\nu - \\Phi$$`}</p>
          <p>{`If $h\\nu < \\Phi$, no electron escapes regardless of intensity.`}</p>
          <PhotoelectricViz />
          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Photoelectric Effect</span>
              <p>
                Energy absorbed one photon at a time. Each photon interacts with one electron.
                Threshold frequency required. Intensity above threshold raises electron count, not
                energy.
              </p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Black-Body Radiation</span>
              <p>{`Energy emitted in quanta $h\\nu$ by thermal oscillators. No sharp threshold. Any frequency emitted, but high-frequency quanta suppressed by Boltzmann factor.`}</p>
            </div>
          </div>
          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>
              Why does brighter light not help below the threshold? Brighter light means more
              photons, not stronger photons. Each electron absorbs one photon. If one photon is too
              weak, adding more weak photons changes nothing.
            </p>
          </div>
          <h3>Worked Example: Photoelectric Effect</h3>
          <p>{`UV light $\\nu = 1.5 \\times 10^{15}$ Hz strikes a metal with $\\Phi = 5.0 \\times 10^{-19}$ J.`}</p>
          <p className="lrn-eq">{`$$E = h\\nu = (6.626 \\times 10^{-34})(1.5 \\times 10^{15}) = 9.94 \\times 10^{-19} \\text{ J}$$`}</p>
          <p className="lrn-eq">{`$$E_k = 9.94 \\times 10^{-19} - 5.0 \\times 10^{-19} = 4.94 \\times 10^{-19} \\text{ J}$$`}</p>
          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>
              Why is the kinetic energy the difference, not the sum? Form your answer before reading
              on.
            </p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                The photon brings energy {`$h\\nu$`}. The electron uses {`$\\Phi$`} just to escape
                the surface. What's left over, the surplus, becomes kinetic energy. Energy is
                conserved: input = escape energy + kinetic energy.
              </p>
            </details>
          </div>
        </>,

        <>
          <div className="lrn-header">
            <h2>Wave-Particle Duality of Matter</h2>
          </div>
          <p>
            <strong>When to use this:</strong> Use this when calculating the de Broglie wavelength
            of a particle or when justifying why electrons have wave-like properties.
          </p>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              An electron and a baseball both move at 1 m/s. Predict whose de Broglie wavelength is
              larger and whether either is observable.
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>{`The electron's wavelength is enormously larger. The baseball (mass $\\approx 0.14$ kg) has $\\lambda \\approx 10^{-34}$ m, undetectable. The electron (mass $9.1 \\times 10^{-31}$ kg) at 1 m/s has $\\lambda \\approx 10^{-3}$ m. Only the electron's wave nature can be observed.`}</p>
            </details>
          </div>
          <p>
            In 1924, Louis de Broglie proposed that matter has wave character. Any particle with
            momentum {`$p = mv$`} (its mass times its velocity) has an associated wavelength:
          </p>
          <p className="lrn-eq lrn-eq-hero">{`$$\\lambda = \\frac{h}{p} = \\frac{h}{mv}$$`}</p>
          <p>{`For a baseball at 30 m/s, $\\lambda \\approx 10^{-34}$ m, far too small to detect. For an electron, the de Broglie wavelength is about the size of atomic spacings. This is why electrons diffract off crystal lattices.`}</p>
          <DeBroglieViz />
          <p>
            This wave character gives the <strong>Heisenberg uncertainty principle</strong>:
          </p>
          <p className="lrn-eq lrn-eq-hero">{`$$\\Delta p \\, \\Delta x \\geq \\frac{\\hbar}{2}, \\quad \\hbar = 1.055 \\times 10^{-34} \\text{ J s}$$`}</p>
          <p>
            The principle is not about clumsy instruments. It is a fundamental feature of nature.
          </p>
          <HeisenbergViz />
          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>
              Why does confinement increase uncertainty in momentum? A confined wave must fit inside
              a box. Fitting requires a superposition of many wavelengths. Different wavelengths
              correspond to different momenta. The tighter the box, the wider the range of
              wavelengths needed, so momentum uncertainty grows.
            </p>
          </div>
          <h3>Worked Example: de Broglie Wavelength</h3>
          <p>{`Electron ($m = 9.109 \\times 10^{-31}$ kg) at $v = 1.0 \\times 10^6$ m/s:`}</p>
          <p className="lrn-eq">{`$$\\lambda = \\frac{6.626 \\times 10^{-34}}{(9.109 \\times 10^{-31})(1.0 \\times 10^6)} = 7.27 \\times 10^{-10} \\text{ m} = 0.727 \\text{ nm}$$`}</p>
          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>
              Why does a heavier particle at the same speed have a shorter de Broglie wavelength?
              Form your answer before reading on.
            </p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>{`$\\lambda = h/mv$. At the same speed, a heavier particle has larger momentum $mv$. Larger momentum in the denominator gives smaller $\\lambda$. A heavier particle packs more momentum per unit speed, compressing its wave nature to a shorter wavelength.`}</p>
            </details>
          </div>
          <h3>Worked Example: Heisenberg Uncertainty</h3>
          <p>{`Electron confined to $\\Delta x = 1.0 \\times 10^{-10}$ m:`}</p>
          <p className="lrn-eq">{`$$\\Delta p \\geq \\frac{\\hbar}{2\\Delta x} = \\frac{1.055 \\times 10^{-34}}{2 \\times 1.0 \\times 10^{-10}} = 5.3 \\times 10^{-25} \\text{ kg m s}^{-1}$$`}</p>
          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>
              Why is this uncertainty huge relative to the electron's typical momentum? Form your
              answer before reading on.
            </p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>{`An electron at $10^6$ m/s has momentum $p \\approx 9.1 \\times 10^{-25}$ kg m/s. The uncertainty $5.3 \\times 10^{-25}$ is comparable to this. Confining the electron to atomic dimensions makes its momentum completely uncertain. This is why electrons in atoms do not travel in definite paths.`}</p>
            </details>
          </div>
        </>,

        <>
          <div className="lrn-header">
            <h2>The Schrödinger Equation and Wavefunctions</h2>
          </div>
          <p>
            <strong>When to use this:</strong> Use this any time you need to describe where an
            electron is likely to be found inside an atom.
          </p>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              You set up an equation that describes an electron's wave inside an atom. Predict what
              information the solution should give you.
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                The solution gives the allowed energy levels and the wavefunction for each level.
                The wavefunction squared tells you the probability of finding the electron at each
                point in space.
              </p>
            </details>
          </div>
          <p>
            The wave nature of matter is captured by the <strong>wavefunction</strong> {`$\\psi$`}.
            On its own, {`$\\psi$`} has no direct physical meaning. What matters is {`$\\psi^2$`}:
            the <strong>probability density</strong>, meaning the probability of finding the
            particle per unit volume. This is the <strong>Born interpretation</strong>: it tells you
            how to read the wavefunction as a probability.
          </p>
          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Wavefunction {`$\\psi$`}</span>
              <p>
                Mathematical function of position. Can be positive, negative, or complex. No direct
                physical meaning.
              </p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Probability density {`$\\psi^2$`}</span>
              <p>
                Always non-negative. Gives probability of finding the particle per unit volume. The
                physically meaningful quantity.
              </p>
            </div>
          </div>
          <p>
            The Schrödinger equation in one dimension. Here {`$V(x)$`} is the potential energy, the
            energy the particle has because of where it sits:
          </p>
          <p className="lrn-eq lrn-eq-hero">{`$$-\\frac{\\hbar^2}{2m} \\frac{d^2\\psi}{dx^2} + V(x)\\psi = E\\psi$$`}</p>
          <p>
            In compact form using the Hamiltonian operator {`$\\hat{H}$`} (the math object that
            returns a state's total energy):
          </p>
          <p className="lrn-eq">{`$$\\hat{H}\\psi = E\\psi$$`}</p>
          <p>
            Valid solutions must be continuous, single-valued, and finite. The wavefunction must
            also be <strong>normalized</strong>:
          </p>
          <p className="lrn-eq">{`$$\\int \\psi^2 \\, d\\tau = 1$$`}</p>
          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>
              Why must {`$\\psi$`} be normalized? The particle exists, so the probability of finding
              it somewhere in all of space must be 100%. If the integral were 2 instead of 1, every
              probability we calculated would be doubled, which is nonsensical. Normalization keeps
              all probabilities between 0 and 1.
            </p>
          </div>
          <p>{`To normalize the 1s hydrogen wavefunction $\\psi \\propto e^{-r/a_0}$, you scale it by a constant $N$ so the total probability over all space equals 1. Here $a_0$ is the Bohr radius, $a_0 = 52.9$ pm, the typical size of the hydrogen atom.`}</p>
          <HydrogenWavefunctionViz />
        </>,

        <>
          <div className="lrn-header">
            <h2>The Particle in a Box</h2>
          </div>
          <p>
            <strong>When to use this:</strong> Use this as the simplest quantum system to understand
            energy quantization, wavefunctions, and zero-point energy. It also models electrons in
            conjugated molecules.
          </p>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>{`An electron is trapped inside a box of length $L$. Predict whether it can have zero energy, and whether its lowest possible energy changes if you make the box smaller.`}</p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>{`It cannot have zero energy. The lowest allowed energy is $E_1 = h^2/8mL^2 > 0$. Making the box smaller (reducing $L$) increases $E_1$ because $L^2$ in the denominator decreases. Tighter confinement forces higher minimum energy.`}</p>
            </details>
          </div>
          <p>{`A particle confined between walls at $x = 0$ and $x = L$ has potential energy zero inside and infinite outside. Boundary conditions force $\\psi = 0$ at both walls. Only wavelengths that fit an integer number of half-waves into the box are allowed: $\\lambda_n = 2L/n$. The allowed wavefunctions are:`}</p>
          <p className="lrn-eq lrn-eq-hero">{`$$\\psi_n = \\left(\\frac{2}{L}\\right)^{1/2} \\sin\\left(\\frac{n\\pi x}{L}\\right), \\quad n = 1, 2, 3, \\ldots$$`}</p>
          <p>The corresponding energies are:</p>
          <p className="lrn-eq lrn-eq-hero">{`$$E_n = \\frac{n^2 h^2}{8mL^2}$$`}</p>
          <ParticleInBoxViz />
          <p>
            Key features: {`$n$`} must be a positive integer. Energy grows as {`$n^2$`}: the second
            level has four times the energy of the first. There is a{' '}
            <strong>zero-point energy</strong> at {`$n = 1$`}: the particle can never be at rest.
            Each wavefunction has {`$n - 1$`} nodes inside the box. A node is a point where the
            wavefunction crosses zero, so the particle is never found there.
          </p>
          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>{`Why can the particle not have $E = 0$? Zero energy means zero momentum and infinite de Broglie wavelength. An infinite wavelength cannot fit in a finite box. The uncertainty principle also forbids it: confinement to $\\Delta x = L$ forces $\\Delta p \\geq \\hbar/2L > 0$.`}</p>
          </div>
          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Zero-Point Energy (Quantum)</span>
              <p>{`The confined particle always has $E_1 = h^2/8mL^2 > 0$. It can never be at rest. This explains why helium stays liquid near absolute zero and why electrons in atoms have finite kinetic energy.`}</p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Classical Rest</span>
              <p>
                A classical ball in a box can sit at {`$E = 0$`}, perfectly still. No minimum energy
                is required. This prediction is wrong at quantum scales.
              </p>
            </div>
          </div>
          <h3>Worked Example: Particle in a Box Photon Wavelength</h3>
          <p>{`Electron in box of length $L = 1.0 \\times 10^{-9}$ m, jumping $n = 1 \\to n = 2$:`}</p>
          <p className="lrn-eq">{`$$E_1 = \\frac{(6.626 \\times 10^{-34})^2}{8(9.109 \\times 10^{-31})(1.0 \\times 10^{-9})^2} = 6.02 \\times 10^{-20} \\text{ J}$$`}</p>
          <p>{`$E_2 = 4E_1 = 2.41 \\times 10^{-19}$ J. Energy difference $\\Delta E = 3E_1 = 1.81 \\times 10^{-19}$ J.`}</p>
          <p className="lrn-eq">{`$$\\lambda = \\frac{hc}{\\Delta E} = \\frac{(6.626 \\times 10^{-34})(2.998 \\times 10^8)}{1.81 \\times 10^{-19}} = 1100 \\text{ nm (near-IR)}$$`}</p>
          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>{`Why is the energy difference $3E_1$ and not $E_1$? Form your answer before reading on.`}</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>{`$E_n = n^2 E_1$, so $E_2 = 4E_1$ and $E_1 = 1 \\times E_1$. The difference is $4E_1 - E_1 = 3E_1$. Energy levels grow as $n^2$, not linearly, so gaps widen as $n$ increases.`}</p>
            </details>
          </div>
          <div className="lrn-faded">
            <div className="lrn-faded-phase">
              <span className="lrn-faded-label">COMPLETE EXAMPLE</span>
              <p>{`Find the energy gap for $n=2 \\to n=3$ in the same box.`}</p>
              <ul className="lrn-list">
                <li>{`$E_2 = 4E_1 = 2.41 \\times 10^{-19}$ J`}</li>
                <li>{`$E_3 = 9E_1 = 5.42 \\times 10^{-19}$ J`}</li>
                <li>{`$\\Delta E = 5E_1 = 3.01 \\times 10^{-19}$ J (larger than the $n=1\\to2$ gap of $3E_1$)`}</li>
              </ul>
            </div>
            <div className="lrn-faded-phase">
              <span className="lrn-faded-label">YOUR TURN: PARTIAL</span>
              <p>{`Find the gap for $n=3 \\to n=4$.`}</p>
              <ul className="lrn-list">
                <li>{`$E_4 = \\underline{\\hspace{2em}} \\times E_1 = \\underline{\\hspace{2em}}$ J`}</li>
                <li>{`$\\Delta E = E_4 - E_3 = \\underline{\\hspace{2em}} E_1 = \\underline{\\hspace{2em}}$ J`}</li>
              </ul>
              <p>{`Answer: $E_4 = 16E_1$; $\\Delta E = 7E_1 = 4.21 \\times 10^{-19}$ J.`}</p>
            </div>
            <div className="lrn-faded-phase">
              <span className="lrn-faded-label">INDEPENDENT PRACTICE</span>
              <p>{`For a box of length $L = 0.5 \\times 10^{-9}$ m, find the $n=1 \\to n=2$ photon wavelength. Note: halving $L$ quadruples $E_1$. Answer: $\\Delta E = 7.22 \\times 10^{-19}$ J, $\\lambda = 275$ nm (UV).`}</p>
            </div>
          </div>
        </>,

        <>
          <div className="lrn-header">
            <h2>The Hydrogen Atom Energy Levels</h2>
          </div>
          <p>
            <strong>When to use this:</strong> Use this when finding the energy required to ionize a
            hydrogen-like ion, or when predicting which spectral series a transition falls in.
          </p>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>{`A hydrogen atom has an electron in $n = 3$. Predict whether less energy is needed to ionize it compared to a ground-state atom.`}</p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>{`Yes, much less. Ionization from $n=3$: $0 - (-13.6/9) = 1.51$ eV, versus 13.6 eV from the ground state. The excited atom requires about nine times less energy to ionize.`}</p>
            </details>
          </div>
          <p>
            The electron stays bound by <strong>Coulomb attraction</strong>: opposite charges
            attract, like charges repel, and the pull weakens as the distance grows. The positive
            nucleus pulls the negative electron inward.
          </p>
          <p>
            Solving the Schrödinger equation for a <strong>hydrogenic atom</strong> (one electron,
            nuclear charge {`$Z$`}) gives exact energy levels:
          </p>
          <p className="lrn-eq lrn-eq-hero">{`$$E_n = -\\frac{Z^2 hc\\tilde{R}}{n^2}, \\quad \\tilde{R} = 109677 \\text{ cm}^{-1}$$`}</p>
          <HydrogenEnergyLevelsViz />
          <p>
            A <strong>mole</strong> is a fixed count of particles: Avogadro's number,{' '}
            {`$6.022 \\times 10^{23}$`}. Energies per mole use <strong>{`kJ mol$^{-1}$`}</strong>:
            the energy for one mole of atoms. One eV per atom equals about {`$96.5$ kJ mol$^{-1}$`}.
          </p>
          <p>
            Energies are negative because the electron is bound. For hydrogen ({`$Z = 1$`}), the
            ground state is {`$E_1 = -13.6$ eV $= -1312$ kJ mol$^{-1}$`}. The ionization energy is:
          </p>
          <p className="lrn-eq">{`$$I = 0 - E_1 = 13.6 \\text{ eV} = 1312 \\text{ kJ mol}^{-1}$$`}</p>
          <p>
            For a hydrogenic ion, energy scales as {`$Z^2$`}: He{`$^+$`} ({`$Z=2$`}) has four times
            the binding energy of H. The nucleus moves a little too, a tiny correction we can ignore
            here.
          </p>
          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>
              Why are the energy levels negative? The zero of energy is a free electron at infinity.
              A bound electron has lower energy than a free one, so bound-state energies are
              negative. The more negative the energy, the more tightly bound the electron.
            </p>
          </div>
          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Bohr Model</span>
              <p>
                Pictures the electron in a classical circular orbit. Gives the correct energy levels
                for hydrogen. Gives a completely wrong physical picture. The electron does not
                travel in a defined path.
              </p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Quantum Mechanical Model</span>
              <p>{`Replaces the orbit with a wavefunction $\\psi$. The electron has no definite position or path. $\\psi^2$ gives the probability density. The electron occupies a spread-out cloud, not a sharp ring.`}</p>
            </div>
          </div>
        </>,

        <>
          <div className="lrn-header">
            <h2>Atomic Orbitals: Quantum Numbers, Shells, and Subshells</h2>
          </div>
          <p>
            <strong>When to use this:</strong> Use this whenever you need to describe which orbital
            an electron occupies or count how many orbitals fit in a shell or subshell.
          </p>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>{`A shell with principal quantum number $n = 3$ contains three types of subshell. Predict how many individual orbitals each type holds and the total for the shell.`}</p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>{`$3s$ (1 orbital), $3p$ (3 orbitals), $3d$ (5 orbitals). Total: $1+3+5 = 9 = 3^2 = n^2$.`}</p>
            </details>
          </div>
          <p>The hydrogen wavefunction separates into radial and angular parts:</p>
          <p className="lrn-eq">{`$$\\psi(r, \\theta, \\phi) = R(r) \\cdot Y(\\theta, \\phi)$$`}</p>
          <p>Four quantum numbers fully describe an electron's state:</p>
          <table className="lrn-table">
            <thead>
              <tr>
                <th>Quantum number</th>
                <th>Symbol</th>
                <th>Allowed values</th>
                <th>Physical meaning</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Principal</td>
                <td>{`$n$`}</td>
                <td>{`$1, 2, 3, \\ldots$`}</td>
                <td>Shell (size, energy in H)</td>
              </tr>
              <tr>
                <td>Angular momentum</td>
                <td>{`$l$`}</td>
                <td>{`$0$ to $n-1$`}</td>
                <td>Subshell (shape)</td>
              </tr>
              <tr>
                <td>Magnetic</td>
                <td>{`$m_l$`}</td>
                <td>{`$-l$ to $+l$`}</td>
                <td>Orbital orientation</td>
              </tr>
              <tr>
                <td>Spin</td>
                <td>{`$m_s$`}</td>
                <td>{`$\\pm\\tfrac{1}{2}$`}</td>
                <td>Spin direction</td>
              </tr>
            </tbody>
          </table>
          <p>{`We label subshells with $l = 0, 1, 2, 3$ as $s, p, d, f$. Each contains $2l + 1$ orbitals. A shell $n$ contains $n^2$ orbitals total.`}</p>
          <QuantumNumberTreeViz />
          <table className="lrn-table">
            <thead>
              <tr>
                <th>Subshell</th>
                <th>{`$l$`}</th>
                <th>Orbitals</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{`$s$`}</td>
                <td>0</td>
                <td>1</td>
              </tr>
              <tr>
                <td>{`$p$`}</td>
                <td>1</td>
                <td>3</td>
              </tr>
              <tr>
                <td>{`$d$`}</td>
                <td>2</td>
                <td>5</td>
              </tr>
              <tr>
                <td>{`$f$`}</td>
                <td>3</td>
                <td>7</td>
              </tr>
            </tbody>
          </table>
          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>{`Why does each shell hold exactly $n^2$ orbitals? Each subshell $l$ holds $2l+1$ orbitals. Summing $1, 3, 5, \\ldots$ up to the $(n-1)$ subshell gives $n^2$. A run of odd numbers always adds to a perfect square.`}</p>
          </div>
          <h3>Worked Example: Quantum Numbers for n=2</h3>
          <ul className="lrn-list">
            <li>{`$l = 0$ ($2s$): $m_l = 0$. One orbital.`}</li>
            <li>{`$l = 1$ ($2p$): $m_l = -1, 0, +1$. Three orbitals.`}</li>
          </ul>
          <p>{`Total: 4 orbitals, consistent with $n^2 = 4$.`}</p>
          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>{`Why can $l$ not equal $n$ for a given shell? Form your answer before reading on.`}</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>{`The rule is $l = 0, 1, \\ldots, n-1$. Setting $l = n$ would require a wavefunction that diverges at large $r$, so it cannot be normalized. The quantum condition forces $l < n$.`}</p>
            </details>
          </div>
          <h3>Worked Example: Types of Orbital for n=1,2,3</h3>
          <ul className="lrn-list">
            <li>{`$n = 1$: $1s$ (1 orbital)`}</li>
            <li>{`$n = 2$: $2s$, $2p$ (4 orbitals)`}</li>
            <li>{`$n = 3$: $3s$, $3p$, $3d$ (9 orbitals)`}</li>
          </ul>
          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>{`How does the $n^2$ formula confirm these counts? Form your answer before reading on.`}</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>{`Each subshell $l$ contains $2l+1$ orbitals. Summing $\\sum_{l=0}^{n-1}(2l+1) = n^2$. For $n=3$: $1+3+5 = 9$.`}</p>
            </details>
          </div>
          <h3>Worked Example: Quantum Numbers for a 2s Electron</h3>
          <p>{`A 2s electron has $n = 2$, $l = 0$, $m_l = 0$. The spin $m_s$ can be $+\\tfrac{1}{2}$ or $-\\tfrac{1}{2}$.`}</p>
          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>
              Why is there only one possible {`$m_l$`} value for an {`$s$`} electron? Form your
              answer before reading on.
            </p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>{`$m_l$ ranges from $-l$ to $+l$. For $l = 0$, the only value is $m_l = 0$. A spherically symmetric orbital has no preferred orientation, so there is only one way to orient it.`}</p>
            </details>
          </div>
        </>,

        <>
          <div className="lrn-header">
            <h2>s-Orbitals</h2>
          </div>
          <p>
            <strong>When to use this:</strong> Use this when analyzing the electron density near the
            nucleus or the radial distribution of electron probability.
          </p>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              Compare a 1s and a 2s orbital. Predict which electron has higher probability of being
              found close to the nucleus, and how many nodes the 2s has.
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                The 1s electron has higher probability close to the nucleus, with no nodes and a
                maximum at r=0. The 2s orbital has one radial node but has a small inner peak that
                lets it penetrate closer to the nucleus than 2p does.
              </p>
            </details>
          </div>
          <p>{`An $s$-orbital has $l = 0$ and is perfectly spherically symmetric. The 1s wavefunction is:`}</p>
          <p className="lrn-eq">{`$$\\psi_{1,0,0} = \\left(\\frac{1}{\\pi a_0^3}\\right)^{1/2} e^{-r/a_0}$$`}</p>
          <p>
            The <strong>radial distribution function</strong> {`$P(r)$`} gives the probability of
            finding the electron in a thin shell at radius {`$r$`}:
          </p>
          <p className="lrn-eq">{`$$P(r) = 4\\pi r^2 \\psi^2 \\quad (s\\text{-orbitals}); \\qquad P(r) = r^2 R(r)^2 \\quad (\\text{general})$$`}</p>
          <p>{`Although $|\\psi|^2$ is largest at $r = 0$, the shell at $r = 0$ has zero volume, so $P(0) = 0$. The peak of $P(r)$ for the 1s orbital occurs at the Bohr radius:`}</p>
          <p className="lrn-eq">{`$$a_0 = \\frac{4\\pi\\varepsilon_0 \\hbar^2}{m_e e^2} = 52.9 \\text{ pm}$$`}</p>
          <RadialDistributionViz />
          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Probability density {`$\\psi^2$`}</span>
              <p>{`Highest at $r = 0$. Probability per unit volume. Does not account for the volume of the shell.`}</p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Radial distribution function {`$P(r)$`}</span>
              <p>{`Zero at $r = 0$. Peaks at $r = a_0$ for 1s. Gives probability in a thin shell. Most useful for finding likely electron-nucleus distances.`}</p>
            </div>
          </div>
          <p>The mean radius and most probable radius for the 1s hydrogenic orbital:</p>
          <p className="lrn-eq">{`$$\\langle r \\rangle = \\frac{3a_0}{2Z}, \\qquad r_\\text{mp} = \\frac{a_0}{Z}$$`}</p>
          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>{`Why does the 1s peak sit exactly at the Bohr radius? Two effects compete. The probability density falls as $r$ grows, but the shell volume grows as $r^2$. Their product peaks where the two rates balance, at $r = a_0$.`}</p>
          </div>
          <h3>Worked Example: Mean and Most Probable Radius</h3>
          <p>{`For H ($Z=1$): $\\langle r \\rangle = 79.4$ pm, $r_\\text{mp} = 52.9$ pm. For He$^+$ ($Z=2$): $\\langle r \\rangle = 39.7$ pm, $r_\\text{mp} = 26.5$ pm.`}</p>
          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>
              Why is the mean radius larger than the most probable radius for the 1s orbital? Form
              your answer before reading on.
            </p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>{`The distribution $P(r)$ has a long tail extending to large $r$. The mean $\\langle r \\rangle = \\int r P(r) dr$ is pulled to larger values by this tail. The most probable radius is just the peak, but the tail pulls the average higher.`}</p>
            </details>
          </div>
          <h3>Worked Example: Probability at a Given Radius</h3>
          <p>{`Ratio of probability density at $r = a_0$ vs at $r = 0$ for 1s hydrogen:`}</p>
          <p className="lrn-eq">{`$$\\frac{\\psi^2(a_0)}{\\psi^2(0)} = e^{-2} \\approx 0.135$$`}</p>
          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>{`Why is $\\psi^2$ greatest at $r = 0$ yet the most probable radius is $a_0$? Form your answer before reading on.`}</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>{`$\\psi^2$ is the probability per unit volume. At $r=0$ the shell volume $4\\pi r^2 dr \\to 0$, so the probability in that tiny shell is zero. As $r$ grows, the shell volume grows as $r^2$ but $\\psi^2$ falls. $P(r) = 4\\pi r^2 \\psi^2$ peaks at $r = a_0$, the tradeoff point.`}</p>
            </details>
          </div>
        </>,

        <>
          <div className="lrn-header">
            <h2>p-Orbitals</h2>
          </div>
          <p>
            <strong>When to use this:</strong> Use this when explaining directional bonding,
            molecular geometry, or why {`$p$`} electrons are shielded less than {`$s$`} electrons.
          </p>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              An atom has a {`$p$`} subshell. Predict in how many directions the {`$p$`} orbitals
              point and how many nodal planes each one has.
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                Three {`$p$`} orbitals point along three perpendicular axes (x, y, z). Each has
                exactly one nodal plane through the nucleus.
              </p>
            </details>
          </div>
          <p>{`A p-orbital has $l = 1$, giving $2(1)+1 = 3$ orbitals labeled $p_x$, $p_y$, $p_z$. Each has a dumbbell shape with two lobes on opposite sides of the nucleus. Every $p$ orbital has exactly one nodal plane through the nucleus. For $p_z$, it is the $xy$-plane. A nodal plane is a flat surface where the wavefunction is zero, so the electron is never found on it.`}</p>
          <POrbitalDensityViz />
          <p>{`A $p$ electron has angular momentum, and its wavefunction is zero at the nucleus. This makes $p$ orbitals poorer at penetrating to the nucleus than $s$ orbitals in the same shell.`}</p>
          <p>{`The three $p_x$, $p_y$, $p_z$ orbitals are degenerate (they have the same energy) in a hydrogen atom.`}</p>
          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>
              Why is a p electron's density zero at the nucleus? A p orbital carries one unit of
              angular momentum. That angular momentum forces the wavefunction to vanish at the
              center. Only s orbitals, with zero angular momentum, reach the nucleus.
            </p>
          </div>
        </>,

        <>
          <div className="lrn-header">
            <h2>d-Orbitals</h2>
          </div>
          <p>
            <strong>When to use this:</strong> Use this when working with transition metal
            chemistry, crystal field theory, or counting orbitals in the {`$d$`} subshell.
          </p>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>{`The $d$ subshell has $l = 2$. Predict how many $d$ orbitals exist and how many angular nodes each has.`}</p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>{`$2(2)+1 = 5$ orbitals. Each has exactly 2 angular nodes.`}</p>
            </details>
          </div>
          <p>{`A d-orbital has $l = 2$, giving 5 orbitals: $d_{xy}$, $d_{xz}$, $d_{yz}$, $d_{x^2-y^2}$, and $d_{z^2}$. Each has exactly two angular nodes.`}</p>
          <p>{`Most $d$ orbitals have four lobes arranged between or along the axes. The $d_{z^2}$ orbital has two lobes along the $z$-axis plus a ring of electron density in the $xy$-plane. All five are degenerate in a hydrogenic atom.`}</p>
        </>,

        <>
          <div className="lrn-header">
            <h2>f-Orbitals</h2>
          </div>
          <p>
            <strong>When to use this:</strong> Use this when explaining the filling of the
            lanthanoid and actinoid series.
          </p>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>{`The $f$ subshell has $l = 3$. Predict how many $f$ orbitals exist.`}</p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>{`$2(3)+1 = 7$ orbitals.`}</p>
            </details>
          </div>
          <p>{`An f-orbital has $l = 3$, giving 7 orbitals with complex angular shapes. These seven orbitals hold up to 14 electrons, which matches the 14 lanthanoid elements. The $f$ subshell fills in the lanthanoid (Ce to Lu) and actinoid (Th to Lr) series, explaining the two rows at the bottom of the periodic table.`}</p>
        </>,

        <>
          <div className="lrn-header">
            <h2>Electron Spin</h2>
          </div>
          <p>
            <strong>When to use this:</strong> Use this when determining how many electrons can
            share an orbital, and when explaining the Pauli exclusion principle.
          </p>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              Electrons in a magnetic field split into two groups. Predict what property causes this
              splitting.
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                Electron spin. Electrons carry intrinsic angular momentum that can only point in two
                directions: up ({`$m_s = +1/2$`}) or down ({`$m_s = -1/2$`}). The magnetic field
                separates these groups.
              </p>
            </details>
          </div>
          <p>
            Stern and Gerlach shot silver atoms through an inhomogeneous magnetic field. The beam
            split into exactly two spots, not a continuous smear. This proved that electrons carry
            intrinsic angular momentum called <strong>spin</strong>, which can only take two values.
          </p>
          <SternGerlachViz />
          <p>{`The spin quantum number is $s = \\tfrac{1}{2}$ (all electrons). The magnetic spin quantum number $m_s$ is $+\\tfrac{1}{2}$ (spin-up, $\\alpha$, $\\uparrow$) or $-\\tfrac{1}{2}$ (spin-down, $\\beta$, $\\downarrow$).`}</p>
          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>{`Why only two values? The number of spin states for spin quantum number $s$ is $2s+1$. For $s=1/2$: $2(1/2)+1 = 2$ states. Electrons are fermions (half-integer spin), so they require antisymmetric wavefunctions. No two identical fermions can share the same state. This is the Pauli exclusion principle.`}</p>
          </div>
        </>,

        <>
          <div className="lrn-header">
            <h2>Electronic Structure of Hydrogen</h2>
          </div>
          <p>
            <strong>When to use this:</strong> Use this as a bridge between the quantum mechanics of
            one electron and the multi-electron atoms that follow.
          </p>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>{`A hydrogen atom is in the $n = 2$ state. Predict how many different orbital states the electron can occupy and list them.`}</p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>{`Four orbital states: $2s$, $2p_x$, $2p_y$, $2p_z$. All have the same energy because in hydrogen only one electron exists and energy depends only on $n$.`}</p>
            </details>
          </div>
          <p>
            In hydrogen, all subshells within the same shell {`$n$`} are <strong>degenerate</strong>
            : {`$2s$`} and {`$2p$`} have the same energy. This is a special feature of the pure
            Coulomb potential with one electron.
          </p>
          <ul className="lrn-list">
            <li>{`$n = 1$: one state, $1s$`}</li>
            <li>{`$n = 2$: four states, $2s$, $2p_x$, $2p_y$, $2p_z$, all same energy`}</li>
            <li>{`$n = 3$: nine states, $3s$, $3p_x$, $3p_y$, $3p_z$, five $3d$, all degenerate`}</li>
          </ul>
          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>
              Why are all subshells in a shell degenerate only in hydrogen? Hydrogen has just one
              electron, so no electron-electron repulsion exists. The energy depends only on n. Add
              a second electron and repulsion splits the energies.
            </p>
          </div>
        </>,

        <>
          <div className="lrn-header">
            <h2>Many-Electron Atoms: Orbital Energies and Shielding</h2>
          </div>
          <p>
            <strong>When to use this:</strong> Use this when explaining why energy levels differ
            from hydrogen, or why {`$3s$`} is lower in energy than {`$3p$`} in sodium.
          </p>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              In sodium (11 electrons), predict whether the {`$3s$`} and {`$3p$`} subshells have the
              same energy, and predict which is lower.
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                They are not the same energy. Electron repulsion breaks hydrogen's degeneracy.{' '}
                {`$3s$`} is lower: it penetrates closer to the nucleus, feels higher{' '}
                {`$Z_\\text{eff}$`}, and is more tightly bound.
              </p>
            </details>
          </div>
          <p>
            In many-electron atoms, electrons <strong>repel</strong> each other. Inner electrons
            partly cancel the nuclear attraction felt by outer electrons. This is{' '}
            <strong>shielding</strong>. The <strong>effective nuclear charge</strong> is:
          </p>
          <p className="lrn-eq lrn-eq-hero">{`$$Z_\\text{eff} = Z - \\sigma$$`}</p>
          <p>Approximate orbital energy:</p>
          <p className="lrn-eq">{`$$E_n \\approx -\\frac{Z_\\text{eff}^2 \\, hc\\tilde{R}}{n^2}$$`}</p>
          <p>
            <strong>Slater's rules</strong> estimate {`$\\sigma$`} from the configuration. The
            dedicated Effective Nuclear Charge section below gives the full rules and a worked
            number.
          </p>
          <p>The many-electron Hamiltonian for helium (two electrons):</p>
          <p className="lrn-eq">{`$$V = -\\frac{2e^2}{4\\pi\\varepsilon_0 r_1} - \\frac{2e^2}{4\\pi\\varepsilon_0 r_2} + \\frac{e^2}{4\\pi\\varepsilon_0 r_{12}}$$`}</p>
          <p>{`The $r_{12}$ electron-electron repulsion term cannot be solved exactly. This is why shielding approximations are needed.`}</p>
          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>{`Why can the helium atom not be solved exactly? The $r_{12}$ term ties the two electrons together. Each electron's motion depends on where the other one is. No exact formula handles this coupling, so we fall back on shielding approximations.`}</p>
          </div>
        </>,

        <>
          <div className="lrn-header">
            <h2>Self-Consistent Field (Hartree-Fock) Orbitals</h2>
          </div>
          <p>
            <strong>When to use this:</strong> Use this when you need the most accurate orbital
            approximation for many-electron atoms.
          </p>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              You need to find the best orbital for each electron in helium, accounting for
              repulsion from the other. Predict whether you can solve this exactly in one step.
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                No. The repulsion depends on where both electrons are simultaneously. You need an
                iterative procedure: start with a guess, improve it, repeat until the answer stops
                changing.
              </p>
            </details>
          </div>
          <p>
            The <strong>orbital approximation</strong> treats the total wavefunction as a product of
            one-electron orbitals:
          </p>
          <p className="lrn-eq">{`$$\\Psi(r_1, r_2, \\ldots) = \\psi(r_1)\\psi(r_2)\\cdots$$`}</p>
          <p>
            Computers solve the many-electron problem by repeating a guess-and-improve loop until it
            stops changing. This is the <strong>Hartree-Fock</strong> or{' '}
            <strong>self-consistent field</strong> method, and the {`$Z_\\text{eff}$`} values it
            returns are the Clementi-Raimondi values.
          </p>
          <HartreeFockSCFViz />
          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>
              Why is the orbital approximation useful if it's approximate? It reduces the impossible
              many-body problem to a series of solvable one-body problems. Energy errors are small
              (a few percent), and the qualitative picture is correct.
            </p>
          </div>
        </>,

        <>
          <div className="lrn-header">
            <h2>The Building-Up Principle (Aufbau)</h2>
          </div>
          <p>
            <strong>When to use this:</strong> Use this to write the electron configuration of any
            element from hydrogen to oganesson.
          </p>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              Write the electron configuration of phosphorus (Z=15) using the Aufbau order. Predict
              how many unpaired electrons it has.
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>{`$1s^2 2s^2 2p^6 3s^2 3p^3$. The three $3p$ electrons each go into a separate $3p$ orbital (Hund's rule). Three unpaired electrons.`}</p>
            </details>
          </div>
          <p>
            The <strong>Aufbau principle</strong> says to fill orbitals in order of increasing
            energy. Three rules govern filling:
          </p>
          <ol className="lrn-list">
            <li>
              <strong>Aufbau order:</strong>{' '}
              {`$1s \\to 2s \\to 2p \\to 3s \\to 3p \\to 4s \\to 3d \\to 4p \\to 5s \\to 4d \\to 5p \\to 6s \\to 4f \\to 5d \\to 6p \\to 7s \\to 5f \\to 6d$`}
            </li>
            <li>
              <strong>Pauli exclusion principle:</strong> no two electrons in the same atom can have
              the same four quantum numbers. Each orbital holds at most two electrons with opposite
              spins.
            </li>
            <li>
              <strong>Hund's rule:</strong> when filling degenerate orbitals, place one electron in
              each before pairing. All singly occupied orbitals have parallel spins.
            </li>
          </ol>
          <AufbauViz />
          <p>
            Hund's rule arises from <strong>spin correlation</strong>: electrons with the same spin
            stay farther apart, reducing repulsion. Each pair of same-spin electrons that avoids
            each other this way lowers the energy by a fixed amount {`$K$`}. We call such a pair an{' '}
            <strong>exchange pair</strong>.
          </p>
          <p>
            With {`$N$`} parallel-spin electrons you can form {`$\\tfrac{N(N-1)}{2}$`} such pairs.
            The total <strong>exchange energy</strong> is therefore{' '}
            {`$\\tfrac{N(N-1)}{2} \\times K$`}. More parallel spins means more exchange pairs and
            more stability.
          </p>
          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>
              Why does pairing cost energy? Two electrons in the same orbital spend more time close
              together and repel each other more than two electrons in different orbitals. Hund's
              rule avoids this extra repulsion by spreading electrons out.
            </p>
          </div>
          <h3>Worked Example: Electron Configurations of Be and S</h3>
          <p>{`Beryllium ($Z=4$): $1s^2 2s^2$. Sulfur ($Z=16$): $1s^2 2s^2 2p^6 3s^2 3p^4$. The $3p^4$ shell has one paired orbital and two singly occupied: two unpaired electrons.`}</p>
          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>
              Why does sulfur's {`$3p^4$`} give two unpaired electrons, not zero or four? Form your
              answer before reading on.
            </p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                Hund's rule: fill each degenerate orbital once before pairing. The first three{' '}
                {`$3p$`} electrons go one per orbital. The fourth must pair into an already-occupied
                orbital. That leaves one paired orbital and two singly occupied, so two unpaired
                electrons.
              </p>
            </details>
          </div>
          <h3>Worked Example: Noble Gas Configurations</h3>
          <ul className="lrn-list">
            <li>{`Sodium ($Z=11$): $[\\text{Ne}] 3s^1$`}</li>
            <li>{`Iron ($Z=26$): $[\\text{Ar}] 3d^6 4s^2$`}</li>
          </ul>
          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>
              Why is the {`$[\\text{Ne}]$`} core notation valid for sodium's chemistry? Form your
              answer before reading on.
            </p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                Sodium's chemistry is determined by its single {`$3s$`} valence electron. The inner{' '}
                {`$[\\text{Ne}]$`} core is tightly bound, not available for bonding, and chemically
                inert under ordinary conditions.
              </p>
            </details>
          </div>
          <h3>Worked Example: Heavy Atoms V and Pb</h3>
          <ul className="lrn-list">
            <li>{`Vanadium ($Z=23$): $[\\text{Ar}] 3d^3 4s^2$`}</li>
            <li>{`Lead ($Z=82$): $[\\text{Xe}] 4f^{14} 5d^{10} 6s^2 6p^2$`}</li>
          </ul>
          <p>{`For V$^{2+}$ (a vanadium ion with charge $+2$): the $4s$ electrons are removed first, giving $[\\text{Ar}] 3d^3$.`}</p>
          <p>
            An atom's <strong>oxidation state</strong> is the charge it would carry if you counted
            each shared electron with the more electron-hungry atom. For a simple ion it equals the
            ion's charge. Vanadium in {`V$^{2+}$`} has oxidation state {`$+2$`}.
          </p>
          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>
              Why are {`$4s$`} electrons removed before {`$3d$`} electrons when forming transition
              metal cations? Form your answer before reading on.
            </p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>{`Once $3d$ electrons are present, they repel the $4s$ electrons and raise their energy above $3d$. The highest-energy electrons are removed first during ionization. So $4s$ electrons are removed before $3d$.`}</p>
            </details>
          </div>
          <p>Two famous Aufbau exceptions:</p>
          <ul className="lrn-list">
            <li>
              <strong>Chromium</strong> {`($Z=24$)`}: expected {`$[\\text{Ar}] 3d^4 4s^2$`}, actual{' '}
              {`$[\\text{Ar}] 3d^5 4s^1$`}. Half-filled {`$d$`} gains maximum exchange energy.
            </li>
            <li>
              <strong>Copper</strong> {`($Z=29$)`}: expected {`$[\\text{Ar}] 3d^9 4s^2$`}, actual{' '}
              {`$[\\text{Ar}] 3d^{10} 4s^1$`}. Full {`$d$`} shell gains extra stability.
            </li>
          </ul>
          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>{`Why does a half-filled $d$ subshell gain extra stability? Five electrons with the same spin in five orbitals give $5 \\times 4 / 2 = 10$ exchange pairs. Four electrons give only 6 pairs. The jump from 6 to 10 exchange pairs releases more energy than the cost of moving one electron from $4s$ to $3d$.`}</p>
          </div>
          <h3>Worked Example: Quantum Numbers for Oxygen Ground State</h3>
          <p>{`Oxygen ($Z=8$): $1s^2 2s^2 2p^4$. Four $2p$ electrons, three $2p$ orbitals. By Hund's rule: two paired in one orbital, one each in the other two. Two unpaired electrons with $m_s = +\\tfrac{1}{2}$.`}</p>
          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>
              Why does oxygen have 2 unpaired electrons rather than 0 or 4? Form your answer before
              reading on.
            </p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>{`Four $2p$ electrons fill three orbitals. The first three go one per orbital (Hund). The fourth must pair into one already-occupied orbital: one doubly-occupied and two singly-occupied. Zero unpaired breaks Hund; four unpaired breaks Pauli (only 3 orbitals available).`}</p>
            </details>
          </div>
        </>,

        <>
          <div className="lrn-header">
            <h2>Electronic Structure and the Periodic Table</h2>
          </div>
          <p>
            <strong>When to use this:</strong> Use this to identify where any element fits in the
            periodic table and predict its electron configuration from its position.
          </p>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              An element is in Period 4, Group 2. Predict its outermost electron configuration and
              its block.
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>{`Period 4, Group 2 is calcium. Outermost configuration: $4s^2$. It is in the $s$ block.`}</p>
            </details>
          </div>
          <p>
            Each period corresponds to filling a new shell. Each block corresponds to the subshell
            being filled:
          </p>
          <table className="lrn-table">
            <thead>
              <tr>
                <th>Block</th>
                <th>Subshell filling</th>
                <th>Location</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{`$s$`}</td>
                <td>{`$s$`}</td>
                <td>Groups 1-2</td>
              </tr>
              <tr>
                <td>{`$p$`}</td>
                <td>{`$p$`}</td>
                <td>Groups 13-18</td>
              </tr>
              <tr>
                <td>{`$d$`}</td>
                <td>{`$d$`}</td>
                <td>Groups 3-12 (transition metals)</td>
              </tr>
              <tr>
                <td>{`$f$`}</td>
                <td>{`$f$`}</td>
                <td>Lanthanoids and actinoids</td>
              </tr>
            </tbody>
          </table>
          <table className="lrn-table">
            <thead>
              <tr>
                <th>Group</th>
                <th>IUPAC name</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Alkali metals</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Alkaline earth metals</td>
              </tr>
              <tr>
                <td>15</td>
                <td>Pnicogens (pnictogens)</td>
              </tr>
              <tr>
                <td>16</td>
                <td>Chalcogens</td>
              </tr>
              <tr>
                <td>17</td>
                <td>Halogens</td>
              </tr>
              <tr>
                <td>18</td>
                <td>Noble gases</td>
              </tr>
              <tr>
                <td>Inner rows</td>
                <td>Lanthanoids / Actinoids</td>
              </tr>
            </tbody>
          </table>
          <p>
            <strong>Valence electrons</strong> are the outer-shell electrons that do the chemistry.
            Elements in the same group have the same <strong>valence electron configuration</strong>
            , giving similar chemical behavior.
          </p>
          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>
              Why does the periodic table have 18 columns (excluding the f-block)? The {`$s$`}{' '}
              subshell holds 2 electrons (2 columns), the {`$d$`} subshell holds 10 electrons (10
              columns), and the {`$p$`} subshell holds 6 electrons (6 columns):{' '}
              {`$2 + 10 + 6 = 18$`}.
            </p>
          </div>
        </>,

        <>
          <div className="lrn-header">
            <h2>Periodic Table History</h2>
          </div>
          <p>
            <strong>When to use this:</strong> Use this as context for why the periodic table is
            organized the way it is.
          </p>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              Mendeleev predicted a missing element he called eka-silicon. Predict what modern
              element this turned out to be and how the prediction was verified.
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                Eka-silicon is germanium. When germanium was discovered in 1886, its atomic mass,
                density, and valence matched Mendeleev's predictions almost exactly, confirming the
                periodic pattern.
              </p>
            </details>
          </div>
          <p>
            Dmitri Mendeleev arranged elements by atomic mass in 1869 and noticed periodic
            repetition of properties. He left gaps for undiscovered elements and predicted their
            properties.
          </p>
          <p>
            Henry Moseley used x-ray diffraction in 1913 to show that the table should be ordered by
            atomic number {`$Z$`}, not atomic mass. This fixed the few inconsistencies in
            Mendeleev's ordering (for example, tellurium and iodine).
          </p>
          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>
              Why does ordering by atomic number fix Mendeleev's gaps? Atomic number counts protons,
              the true identity of an element. Atomic mass shifts with the isotope mix. Tellurium
              outweighs iodine but has fewer protons, so atomic number places them correctly.
            </p>
          </div>
        </>,

        <>
          <div className="lrn-header">
            <h2>Metals, Nonmetals, and Blocks</h2>
          </div>
          <p>
            <strong>When to use this:</strong> Use this when predicting physical or chemical
            behavior based on position in the periodic table.
          </p>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              An element is in the {`$d$`} block. Predict whether it is a metal and whether it can
              show multiple oxidation states.
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>{`Yes to both. All $d$-block elements are metals. They show multiple oxidation states because both $ns$ and $(n-1)d$ electrons are available for removal.`}</p>
            </details>
          </div>
          <p>
            <strong>Metals</strong>: shiny, conduct electricity and heat, malleable, ductile. They
            tend to lose electrons and form cations.
          </p>
          <p>
            <strong>Nonmetals</strong>: dull (if solid), poor conductors, brittle. They tend to gain
            electrons or share them.
          </p>
          <p>
            <strong>Metalloids</strong> sit on the border between the two. They act part metal and
            part nonmetal. A diagonal staircase line on the table marks them: boron, silicon,
            germanium, arsenic, antimony, and tellurium. They are the semiconductors.
          </p>
          <table className="lrn-table">
            <thead>
              <tr>
                <th>Characteristic</th>
                <th>Metals</th>
                <th>Nonmetals</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Luster</td>
                <td>Shiny</td>
                <td>Dull (if solid)</td>
              </tr>
              <tr>
                <td>Conductivity</td>
                <td>High</td>
                <td>Low</td>
              </tr>
              <tr>
                <td>Malleability</td>
                <td>Yes</td>
                <td>Brittle</td>
              </tr>
              <tr>
                <td>Ion formed</td>
                <td>Cation</td>
                <td>Anion or molecular</td>
              </tr>
              <tr>
                <td>Oxidation</td>
                <td>Lose electrons</td>
                <td>Gain electrons</td>
              </tr>
            </tbody>
          </table>
          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>
              Why do metals lose electrons so easily? Metals have few valence electrons and low
              ionization energy. Their outer electrons sit far from the nucleus and are held weakly.
              Losing them leaves a stable noble-gas core.
            </p>
          </div>
        </>,

        <>
          <div className="lrn-header">
            <h2>Effective Nuclear Charge and Slater's Rules</h2>
          </div>
          <p>
            <strong>When to use this:</strong> Use this whenever you need to estimate{' '}
            {`$Z_\\text{eff}$`} to explain size, ionization energy, or electron affinity trends.
          </p>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              Sodium has {`$Z = 11$`}. Ten inner electrons shield its single {`$3s$`} valence
              electron. Predict {`$Z_\\text{eff}$`} using a rough shield of 1.00 per inner electron.
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>{`$Z_\\text{eff} \\approx 11 - 10 = 1$. This rough estimate (real Slater value: 2.20) uses full shielding. Real shielding is less complete because inner electrons do not perfectly block the nuclear charge.`}</p>
            </details>
          </div>
          <p className="lrn-eq lrn-eq-hero">{`$$Z_\\text{eff} = Z - \\sigma$$`}</p>
          <p>Slater's rules estimate {`$\\sigma$`} for any electron:</p>
          <ol className="lrn-list">
            <li>Write the configuration in groups: {`$(1s)(2s,2p)(3s,3p)(3d)(4s,4p)\\ldots$`}</li>
            <li>Electrons to the right of the target group contribute 0.</li>
            <li>Electrons in the same group each contribute 0.35 (1s pairs: 0.30).</li>
            <li>
              If the target is {`$s$`} or {`$p$`}: one shell below contributes 0.85; two or more
              below contribute 1.00.
            </li>
            <li>
              If the target is {`$d$`} or {`$f$`}: all electrons to the left contribute 1.00.
            </li>
          </ol>
          <p>{`For the 2p electron of oxygen ($1s^2 2s^2 2p^4$): same group $5 \\times 0.35 = 1.75$; $1s$ electrons $2 \\times 0.85 = 1.70$. So $\\sigma = 3.45$, $Z_\\text{eff} = 8 - 3.45 = 4.55$.`}</p>
          <p>{`Clementi-Raimondi SCF values (more accurate): He 1s: $Z_\\text{eff} = 1.6875$; C 2p: $Z_\\text{eff} = 3.1358$.`}</p>
          <EffectiveNuclearChargeViz />
          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>
              Why do same-group electrons shield only 0.35 each? Electrons in the same shell orbit
              at about the same distance from the nucleus. They rarely sit between the nucleus and
              each other. So they block the nuclear charge poorly.
            </p>
          </div>
        </>,

        <>
          <div className="lrn-header">
            <h2>Atomic Radius</h2>
          </div>
          <p>
            <strong>When to use this:</strong> Use this when comparing the sizes of neutral atoms
            and explaining why atomic radius changes across the periodic table.
          </p>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              Move from lithium (Z=3) to neon (Z=10) across Period 2. Predict whether the atomic
              radius increases or decreases and explain why.
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                Atomic radius decreases from Li to Ne. All these elements add electrons to the same
                n=2 shell. Same-shell shielding is weak (~0.35 per electron), while Z grows by 1
                each time. {`$Z_\\text{eff}$`} rises significantly, pulling all electrons inward.
              </p>
            </details>
          </div>
          <p>
            The <strong>atomic radius</strong> is half the distance between two nuclei of adjacent
            atoms. The <strong>covalent radius</strong> is half the bond length for nonmetals. The{' '}
            <strong>van der Waals radius</strong> is half the distance between two non-bonding
            atoms, always larger than the covalent radius.
          </p>
          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Covalent radius</span>
              <p>
                Half the bond length between two bonded atoms. Smaller than van der Waals radius
                because bonding brings nuclei close.
              </p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Van der Waals radius</span>
              <p>
                Half the distance between two non-bonding atoms. Measures the full electron cloud
                size. Always larger than covalent radius.
              </p>
            </div>
          </div>
          <p>Two major trends:</p>
          <ul className="lrn-list">
            <li>
              <strong>Across a period (left to right):</strong> radius generally{' '}
              <strong>decreases</strong>. {`$Z$`} increases while electrons enter the same shell.
              Same-shell shielding is weak, so {`$Z_\\text{eff}$`} rises, pulling electrons inward.
            </li>
            <li>
              <strong>Down a group:</strong> radius <strong>increases</strong>. Each new period adds
              a shell with larger {`$n$`}. Outer electrons sit farther from the nucleus.
            </li>
          </ul>
          <AtomicRadiusTrendViz />
          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>
              Why does radius decrease across a period despite gaining electrons? Each additional
              electron goes into the same outer shell. Inner electrons do not shield the new
              electron from the growing nuclear charge. {`$Z_\\text{eff}$`} rises significantly,
              pulling the shell inward.
            </p>
          </div>
        </>,

        <>
          <div className="lrn-header">
            <h2>Ionic Radius</h2>
          </div>
          <p>
            <strong>When to use this:</strong> Use this when comparing ionic sizes in ionic
            compounds or in isoelectronic series.
          </p>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              Compare Na (Z=11) with Na{`$^+$`} (Z=11, one fewer electron). Predict which is larger
              and explain why.
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                Na is larger. Removing the electron removes the entire outer n=3 shell. Na{`$^+$`}{' '}
                has only n=1 and n=2 shells, with unchanged nuclear charge pulling them inward,
                making a much smaller ion.
              </p>
            </details>
          </div>
          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Cation vs parent atom</span>
              <p>
                Cations are smaller. Removing electrons reduces repulsion and may remove an outer
                shell. {`$Z_\\text{eff}$`} per remaining electron rises.
              </p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Anion vs parent atom</span>
              <p>
                Anions are larger. Adding an electron increases repulsion while nuclear charge stays
                fixed. Each electron is held less tightly, expanding the cloud.
              </p>
            </div>
          </div>
          <p>
            An <strong>isoelectronic series</strong> contains ions with the same electron count but
            different nuclear charges. Ca{`$^{2+}$`}, K{`$^+$`}, and Cl{`$^-$`} all have 18
            electrons. Largest {`$Z$`} (Ca{`$^{2+}$`}, {`$Z=20$`}) has smallest radius; smallest{' '}
            {`$Z$`} (Cl{`$^-$`}, {`$Z=17$`}) has largest.
          </p>
          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>
              Why are cations smaller and anions larger than the parent atom? Removing electrons can
              strip a whole outer shell and raises the pull on each remaining electron. Adding
              electrons increases repulsion with no extra nuclear charge, so the cloud swells.
            </p>
          </div>
          <h3>Worked Example: Relative Ionic Sizes</h3>
          <p>
            Arrange Ca{`$^{2+}$`}, K{`$^+$`}, Cl{`$^-$`} in order of increasing radius (all 18
            electrons):
          </p>
          <p>
            Order: Ca{`$^{2+}$`} &lt; K{`$^+$`} &lt; Cl{`$^-$`}.
          </p>
          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>
              Why does nuclear charge dominate size in an isoelectronic series even though electron
              count is the same? Form your answer before reading on.
            </p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                All ions in an isoelectronic series have the same electron-electron repulsion. The
                only difference is nuclear charge. Higher {`$Z$`} exerts a stronger inward pull on
                the same electron cloud, compressing it. Nuclear charge dominates because it acts on
                all electrons simultaneously.
              </p>
            </details>
          </div>
        </>,

        <>
          <div className="lrn-header">
            <h2>Ionization Energy</h2>
          </div>
          <p>
            <strong>When to use this:</strong> Use this to predict which element is harder to
            ionize, or to identify from which shell an electron is being removed.
          </p>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              Compare the first ionization energy of sodium and magnesium. Predict which is higher
              and why.
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                Magnesium has higher {`$I_1$`} (738 vs 496 kJ/mol). Both have their outermost
                electron in the {`$3s$`} subshell, but Mg has a higher nuclear charge pulling it
                more tightly.
              </p>
            </details>
          </div>
          <p>
            The <strong>first ionization energy</strong> {`$I_1$`}:
          </p>
          <p className="lrn-eq">{`$$\\text{X}(g) \\to \\text{X}^+(g) + e^-(g)$$`}</p>
          <p>Two main trends:</p>
          <ul className="lrn-list">
            <li>
              <strong>Across a period:</strong> {`$I_1$`} generally increases. Two exceptions: Group
              13 (Al, B) is lower than Group 2 because the {`$p$`} electron is shielded by {`$s$`}{' '}
              electrons. Group 16 (O, S) is lower than Group 15 because paired {`$p$`} electrons
              repel each other extra.
            </li>
            <li>
              <strong>Down a group:</strong> {`$I_1$`} decreases. The outer electron is farther and
              more shielded.
            </li>
          </ul>
          <IonizationEnergyTrendViz />
          <p>
            Enormous jumps in successive ionization energies mark shell boundaries. For Mg:{' '}
            {`$I_1 = 738$`}, {`$I_2 = 1451$`}, then {`$I_3 > 7700$`} kJ/mol (crossing into the 2p
            core).
          </p>
          <SuccessiveIonizationViz />
          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>
              Why is oxygen's ionization energy lower than nitrogen's? Nitrogen has three {`$2p$`}{' '}
              electrons, one per orbital. Oxygen has four {`$2p$`} electrons: one orbital holds a
              pair. Those paired electrons repel each other extra, raising their energy and making
              one easier to remove.
            </p>
          </div>
          <table className="lrn-table">
            <thead>
              <tr>
                <th>Atom</th>
                <th>
                  {`$I_1$`} (kJ mol{`$^{-1}$`})
                </th>
                <th>
                  {`$I_2$`} (kJ mol{`$^{-1}$`})
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>H</td>
                <td>1312</td>
                <td>, </td>
              </tr>
              <tr>
                <td>He</td>
                <td>2372</td>
                <td>5251</td>
              </tr>
              <tr>
                <td>Na</td>
                <td>496</td>
                <td>4562</td>
              </tr>
              <tr>
                <td>Mg</td>
                <td>738</td>
                <td>1451</td>
              </tr>
            </tbody>
          </table>
        </>,

        <>
          <div className="lrn-header">
            <h2>Electron Affinity</h2>
          </div>
          <p>
            <strong>When to use this:</strong> Use this when comparing how easily an atom gains an
            electron, or when explaining why halogens react so readily with metals.
          </p>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              Compare the electron affinity of fluorine and neon. Predict which has a more positive
              (favorable) electron affinity.
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                Fluorine has a much more favorable electron affinity. Neon has a completely filled
                shell. Adding an electron forces it into a new, higher-energy n=3 shell. Fluorine
                has one vacancy in the n=2 shell, so adding an electron is favorable.
              </p>
            </details>
          </div>
          <p>
            The <strong>electron affinity</strong>:
          </p>
          <p className="lrn-eq">{`$$E_a(\\text{X}) = E(\\text{X}) - E(\\text{X}^-)$$`}</p>
          <p>
            A <strong>positive</strong> {`$E_a$`} means energy is released (exothermic). A{' '}
            <strong>negative</strong> {`$E_a$`} means energy must be added, so the anion is
            unstable.
          </p>
          <p>{`Highest values: Cl ($349$ kJ mol$^{-1}$), F ($322$ kJ mol$^{-1}$), O ($141$), H ($73$). Fluorine's value is lower than chlorine's because the compact $2p$ shell has high electron-electron repulsion when an extra electron is added. The second electron affinity of oxygen ($\\text{O}^- \\to \\text{O}^{2-}$) is $-844$ kJ mol$^{-1}$: forcing a second electron onto a negative ion is strongly unfavorable.`}</p>
          <ElectronAffinityTrendViz />
          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Electron affinity {`$E_a$`}</span>
              <p>
                Energy when a neutral atom gains an electron. Positive = exothermic = atom wants the
                electron.
              </p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Ionization energy {`$I$`}</span>
              <p>
                Energy needed to remove an electron from a neutral atom. Always positive
                (endothermic). Measures how tightly an atom holds its own electrons.
              </p>
            </div>
          </div>
          <p>{`Noble gases have negative $E_a$. Nitrogen also has negative or near-zero $E_a$: its half-filled $2p^3$ is extra stable, and an added electron must pair into an occupied orbital.`}</p>
          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>
              Why does a positive electron affinity mean energy is released? A positive value means
              the atom is more stable as an anion. The atom holds the new electron tightly. Forming
              the anion drops the energy and gives heat out.
            </p>
          </div>
          <h3>Worked Example: Electron Affinity Trend</h3>
          <p>{`Carbon ($2p^2$) vs nitrogen ($2p^3$): carbon can accept an electron into an empty $2p$ orbital, gaining exchange energy. Nitrogen is half-filled; the fourth electron must pair, losing stability. Carbon has the higher $E_a$. This is why $E_a$ dips at Group 15.`}</p>
          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>
              Why does fluorine have a lower electron affinity than chlorine despite being higher in
              the group? Form your answer before reading on.
            </p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                Fluorine's {`$2p$`} shell is very compact. Adding an electron into this tight space
                increases electron-electron repulsion significantly, reducing the energy gained.
                Chlorine's {`$3p$`} orbital is larger, so the incoming electron faces less
                repulsion.
              </p>
            </details>
          </div>
        </>,

        <>
          <div className="lrn-header">
            <h2>Electronegativity</h2>
          </div>
          <p>
            <strong>When to use this:</strong> Use this when you need to predict which atom in a
            bond pulls the shared electrons harder, or how the pull changes across the table.
          </p>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              Fluorine and lithium are at opposite ends of Period 2. Predict which one pulls shared
              bonding electrons harder.
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                Fluorine pulls much harder. It has a high effective nuclear charge and a small
                radius, so it grips bonding electrons tightly. Lithium has a low effective nuclear
                charge and holds shared electrons weakly.
              </p>
            </details>
          </div>
          <p>
            <strong>Electronegativity</strong> measures how strongly an atom pulls on the electrons
            it shares in a chemical bond. A high value means the atom hogs the shared electrons. A
            low value means it lets them drift toward its partner.
          </p>
          <p>
            The <strong>Pauling scale</strong> is the common scale. Linus Pauling set fluorine, the
            most electron-hungry atom, at 4.0. Every other atom is measured against it.
          </p>
          <table className="lrn-table">
            <thead>
              <tr>
                <th>Element</th>
                <th>Pauling electronegativity</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Fluorine (F)</td>
                <td>4.0</td>
              </tr>
              <tr>
                <td>Oxygen (O)</td>
                <td>3.5</td>
              </tr>
              <tr>
                <td>Chlorine (Cl)</td>
                <td>3.2</td>
              </tr>
              <tr>
                <td>Nitrogen (N)</td>
                <td>3.0</td>
              </tr>
              <tr>
                <td>Carbon (C)</td>
                <td>2.5</td>
              </tr>
              <tr>
                <td>Hydrogen (H)</td>
                <td>2.1</td>
              </tr>
              <tr>
                <td>Sodium (Na)</td>
                <td>0.9</td>
              </tr>
              <tr>
                <td>Cesium (Cs)</td>
                <td>0.8</td>
              </tr>
            </tbody>
          </table>
          <p>
            Electronegativity <strong>increases across a period</strong>: the effective nuclear
            charge {`$Z_\\text{eff}$`} grows and the atom shrinks, so it grips bonding electrons
            harder. It <strong>decreases down a group</strong>: the valence shell sits farther out,
            so the pull weakens.
          </p>
          <ElectronegativityTrendViz />
          <p>
            Fluorine sits at the top right and has the highest value. Cesium sits at the bottom left
            and has nearly the lowest. The two trends point in opposite corners.
          </p>
          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>
              Why does electronegativity follow {`$Z_\\text{eff}$`}? A higher effective nuclear
              charge means the nucleus pulls every nearby electron harder, including the ones shared
              in a bond. A smaller atom puts those shared electrons closer to the nucleus, where the
              pull is stronger. Both effects rise across a period and fall down a group.
            </p>
          </div>
        </>,

        <>
          <div className="lrn-header">
            <h2>Penetration, Shielding, and Effective Nuclear Charge (Summary)</h2>
          </div>
          <p>
            <strong>When to use this:</strong> Use this to understand the single root cause behind
            most periodic trends.
          </p>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              Compare a {`$3s$`} and a {`$3p$`} electron in argon. Predict which experiences higher{' '}
              {`$Z_\\text{eff}$`} and which is lower in energy.
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                The {`$3s$`} electron experiences higher {`$Z_\\text{eff}$`} and is lower in energy.
                It has an inner peak in {`$P(r)$`} that lets it penetrate the core, feel less
                shielding, and be pulled more tightly toward the nucleus.
              </p>
            </details>
          </div>
          <p>
            <strong>Penetration</strong>: how well an orbital reaches close to the nucleus. The{' '}
            {`$s$`} orbitals in each shell have an inner peak in {`$P(r)$`}. This lets {`$s$`}{' '}
            electrons "see" more of the nuclear charge. Order: {`$s > p > d > f$`}.
          </p>
          <p>
            <strong>Shielding</strong>: inner electrons reduce the nuclear charge felt by outer
            electrons. Electrons in lower shells shield effectively (0.85–1.00 each). Same-shell
            electrons shield weakly (0.35 each).
          </p>
          <p>
            Together: {`$s$`} electrons feel higher {`$Z_\\text{eff}$`} than {`$p$`} electrons in
            the same shell. This raises the energy order within a shell: {`$d > p > s$`} in energy,{' '}
            {`$s > p > d$`} in penetration.
          </p>
          <ShieldingPenetrationViz />
          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>{`Why does penetration set the energy order within a shell? An $s$ electron dips close to the nucleus through its inner peak. There it feels more charge and less shielding. Higher $Z_\\text{eff}$ means lower energy, so $s$ sits below $p$ below $d$.`}</p>
          </div>
        </>,

        <>
          <div className="lrn-header">
            <h2>The Inert-Pair Effect</h2>
          </div>
          <p>
            <strong>When to use this:</strong> Use this when explaining why heavy {`$p$`}-block
            elements prefer a lower oxidation state than lighter members of the same group.
          </p>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              Thallium is in Group 13. Predict whether it commonly shows the +3 or +1 oxidation
              state.
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                Thallium commonly shows +1. The two {`$6s$`} electrons sit at very low energy
                (relativistic stabilization) and resist removal. Tl{`$^+$`} is far more stable than
                Tl{`$^{3+}$`}.
              </p>
            </details>
          </div>
          <p>
            In heavy {`$p$`}-block elements (Period 5 and below), the two {`$ns$`} electrons become
            reluctant to participate in bonding. This is the <strong>inert-pair effect</strong>.
          </p>
          <ul className="lrn-list">
            <li>
              Thallium (Group 13, Period 6): Tl{`$^+$`} rather than Tl{`$^{3+}$`}
            </li>
            <li>
              Lead (Group 14): Pb{`$^{2+}$`} more readily than Pb{`$^{4+}$`}
            </li>
            <li>
              Bismuth (Group 15): Bi{`$^{3+}$`} preferred over Bi{`$^{5+}$`}
            </li>
          </ul>
          <p>
            Valence {`$s$`} electrons penetrate well and are shielded poorly by the {`$d$`}{' '}
            electrons below them. They sit at very low energy and resist removal. The energy gap
            between {`$s$`} and {`$p$`} electrons grows largest in the heaviest group members.
          </p>
          <InertPairViz />
          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>
              Why do the heavy {`$ns$`} electrons resist bonding? In heavy atoms, relativistic
              effects (the inner electrons move so fast that they behave as if heavier) pull the{' '}
              {`$s$`} electrons inward and lower their energy. The {`$d$`} and {`$f$`} electrons
              below them shield poorly. The pair sits too deep to share easily.
            </p>
          </div>
        </>,

        <>
          <div className="lrn-header">
            <h2>Diagonal Relationships</h2>
          </div>
          <p>
            <strong>When to use this:</strong> Use this when comparing elements that appear diagonal
            on the periodic table rather than in the same group.
          </p>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              Lithium (Period 2, Group 1) resembles magnesium (Period 3, Group 2) more than it
              resembles sodium. Predict why.
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                Moving from Li to Mg involves moving right (increases {`$Z_\\text{eff}$`}, shrinks
                radius) and moving down (increases radius). These effects roughly cancel. Li and Mg
                end up with similar charge-to-radius ratios, giving similar ionic chemistry.
              </p>
            </details>
          </div>
          <p>
            Elements on a diagonal in the periodic table sometimes resemble each other more than
            elements in the same group. Key diagonal pairs:
          </p>
          <ul className="lrn-list">
            <li>Li (Group 1, Period 2) and Mg (Group 2, Period 3)</li>
            <li>Be (Group 2, Period 2) and Al (Group 13, Period 3)</li>
          </ul>
          <p>
            Moving diagonally balances two competing trends: moving right increases{' '}
            {`$Z_\\text{eff}$`} (smaller); moving down increases radius. The diagonal move
            approximately cancels these effects, giving similar{' '}
            <strong>charge-to-radius ratio</strong> (charge density on the ion), which controls
            ionic chemistry.
          </p>
          <DiagonalRelationshipsViz />
          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>
              Why does the charge-to-radius ratio control ionic chemistry? A small, highly charged
              ion pulls hard on nearby electron clouds. This polarizing power sets how the ion bonds
              and dissolves. Li and Mg share a similar ratio, so they behave alike.
            </p>
          </div>
        </>,

        <>
          <div className="lrn-header">
            <h2>Atomic Spectra: Selection Rules</h2>
          </div>
          <p>
            <strong>When to use this:</strong> Use this to decide which jumps between orbitals can
            emit or absorb light.
          </p>
          <p>
            A <strong>selection rule</strong> restricts which transitions can happen. For a hydrogen
            atom, the electron's subshell must change by one step: {`$\\Delta l = \\pm 1$`}. A jump
            with {`$\\Delta l = 0$`} cannot happen.
          </p>
          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>{`Why does $\\Delta l = \\pm 1$ arise? A photon carries one unit of angular momentum ($\\hbar$). Angular momentum must be conserved. The electron must change its angular momentum by exactly one unit to absorb or emit the photon.`}</p>
          </div>
        </>,

        <>
          <div className="lrn-header">
            <h2>Lanthanide Contraction and the d-Block</h2>
          </div>
          <p>
            <strong>When to use this:</strong> Use this when comparing sizes of transition metals in
            Periods 5 and 6, or explaining why gold differs from silver.
          </p>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              Zirconium (Period 5, Group 4) and hafnium (Period 6, Group 4) have nearly the same
              atomic radius. Predict why, given that each added period usually increases size.
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                The 14 lanthanoid elements between them fill the {`$4f$`} shell. The {`$f$`}{' '}
                electrons shield nuclear charge poorly. By the time hafnium is reached,{' '}
                {`$Z_\\text{eff}$`} has risen enough to almost exactly cancel the size increase from
                the higher principal quantum number.
              </p>
            </details>
          </div>
          <p>
            The <strong>lanthanide contraction</strong> occurs because the 14 {`$4f$`} electrons
            added in the lanthanoid series shield nuclear charge poorly. The {`$f$`} orbitals are
            compact and do not extend far enough to screen outer electrons from the growing nuclear
            charge. By the time the Period 6 {`$d$`} block (hafnium onward) is reached,{' '}
            {`$Z_\\text{eff}$`} for outer electrons has been raised enough to nearly cancel the
            expected size increase. The result: hafnium and zirconium have nearly the same atomic
            radius, unlike the usual size increase down a group.
          </p>
          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>{`Why do $4f$ electrons shield so poorly? The $f$ orbitals sit deep inside the atom and have many nodes. They do not spread out to screen the outer electrons. So $Z_\\text{eff}$ keeps rising across the lanthanoids.`}</p>
          </div>
        </>
      ]
    },
    practice: [
      {
        q: `An electron in hydrogen absorbs a photon and jumps from $n=2$ to $n=4$. Which spectral series does the reverse emission belong to, and in what region of the spectrum does it appear?`,
        a: `(1) The emission belongs to the Balmer series (terminal level $n_1 = 2$). (2) The wavelength: $1/\\lambda = R(1/4 - 1/16) = R \\times 3/16$, giving $\\lambda \\approx 486$ nm. (3) This is visible (blue-green). The Balmer series ends at $n=2$, so any downward transition landing on $n=2$ produces visible light.`
      },
      {
        q: `Light of frequency $\\nu = 4.0 \\times 10^{14}$ Hz hits a metal with work function $\\Phi = 3.0 \\times 10^{-19}$ J. Is an electron ejected? If so, what is its kinetic energy?`,
        a: `(1) Photon energy: $E = h\\nu = (6.626 \\times 10^{-34})(4.0 \\times 10^{14}) = 2.65 \\times 10^{-19}$ J. (2) Since $E < \\Phi$ ($2.65 < 3.0$), no electron is ejected. (3) The photon lacks enough energy to overcome the surface binding energy. No amount of such photons can eject an electron. You need higher frequency, not more intensity.`
      },
      {
        q: `Explain the difference between $\\psi$ and $\\psi^2$ for an electron in an atom.`,
        a: `(1) $\\psi$ is the wavefunction: a mathematical function that can be positive, negative, or complex. It has no direct physical meaning on its own. (2) $\\psi^2$ (or $|\\psi|^2$) is the probability density: the probability of finding the electron per unit volume at that point. It is always non-negative. (3) The Born interpretation says only $\\psi^2$ is physically meaningful.`
      },
      {
        q: `A particle in a box has $n=1$ as its lowest state. Does a wider box give higher or lower energy for the $n=1$ state than a narrower box?`,
        a: `(1) A wider box gives lower energy. (2) From $E_1 = h^2/8mL^2$, energy decreases as $L^2$ increases. (3) A wider box lets the de Broglie wavelength be longer, meaning lower momentum and lower kinetic energy. Confinement to a small space forces a short wavelength and high energy.`
      },
      {
        q: `Write the full electron configuration of phosphorus ($Z = 15$) and state how many unpaired electrons it has.`,
        a: `(1) $1s^2 2s^2 2p^6 3s^2 3p^3$. (2) The three $3p$ electrons each go into a separate $3p$ orbital with parallel spins (Hund's rule). (3) Phosphorus has 3 unpaired electrons. Hund's rule minimizes repulsion by keeping electrons in different orbitals before pairing.`
      },
      {
        q: `Why is the first ionization energy of boron lower than that of beryllium, even though boron has a higher atomic number?`,
        a: `(1) Beryllium ($Z=4$): outermost electron in $2s$. Boron ($Z=5$): outermost electron in $2p$. (2) A $2p$ electron is shielded by the filled $2s$ electrons and penetrates less toward the nucleus, feeling lower $Z_\\text{eff}$. (3) Lower $Z_\\text{eff}$ means weaker attraction and lower ionization energy. The jump from $s$ to $p$ overcomes the increase in $Z$.`
      },
      {
        q: `Using the Rydberg formula, find the wavelength of the transition $n=3 \\to n=1$ in hydrogen.`,
        a: `(1) $1/\\lambda = \\tilde{R}_H(1/1^2 - 1/3^2) = 109677 \\times (1 - 1/9) = 109677 \\times 8/9 = 97490$ cm$^{-1}$. (2) $\\lambda = 1/97490 = 1.026 \\times 10^{-5}$ cm $= 102.6$ nm. (3) This falls in the ultraviolet Lyman series (terminal level $n=1$). The large energy gap to $n=1$ puts all Lyman transitions in the UV.`
      },
      {
        q: `An electron is confined to a region of $\\Delta x = 5.0 \\times 10^{-11}$ m. Find the minimum uncertainty in its speed.`,
        a: `(1) From the uncertainty principle: $\\Delta p \\geq \\hbar/2\\Delta x = (1.055 \\times 10^{-34})/(2 \\times 5.0 \\times 10^{-11}) = 1.055 \\times 10^{-24}$ kg m s$^{-1}$. (2) $\\Delta v = \\Delta p/m_e = (1.055 \\times 10^{-24})/(9.109 \\times 10^{-31}) = 1.16 \\times 10^6$ m s$^{-1}$. (3) This is about 0.4% of the speed of light, enormous for such small confinement.`
      },
      {
        q: `Chromium's actual electron configuration is $[\\text{Ar}]3d^5 4s^1$, not $[\\text{Ar}]3d^4 4s^2$. Explain why in terms of exchange energy.`,
        a: `(1) Five $3d$ electrons with the same spin give $5 \\times 4/2 = 10$ exchange pairs. (2) Four $3d$ electrons would give only $4 \\times 3/2 = 6$ exchange pairs. (3) The gain of 4 extra exchange pairs releases more energy than the cost of moving one electron from $4s$ to $3d$. So the half-filled $d$ subshell wins.`
      },
      {
        q: `Rank Na$^+$, Mg$^{2+}$, and F$^-$ in order of increasing atomic radius. All have 10 electrons.`,
        a: `(1) All three are isoelectronic with neon (10 electrons). (2) Nuclear charges: F$^-$ ($Z=9$), Na$^+$ ($Z=11$), Mg$^{2+}$ ($Z=12$). (3) More nuclear charge pulls 10 electrons inward more tightly. Order of increasing radius: Mg$^{2+}$ < Na$^+$ < F$^-$.`
      },
      {
        q: `Why does the radial distribution function $P(r) = 4\\pi r^2 \\psi^2$ peak at $a_0$ for the hydrogen 1s orbital, even though $\\psi^2$ is maximum at $r=0$?`,
        a: `(1) $\\psi^2$ is the probability per unit volume, highest at the nucleus. (2) But the volume of a thin spherical shell of radius $r$ is $4\\pi r^2 dr$, which equals zero at $r=0$. (3) $P(r) = 4\\pi r^2 \\psi^2$ is zero at $r=0$ because the shell volume is zero. As $r$ grows, volume increases but $\\psi^2$ falls. The peak at $r = a_0$ is the balance point.`
      },
      {
        q: `Predict which has a larger radius: Cl or Cl$^-$. Explain.`,
        a: `(1) Cl$^-$ is larger. (2) Chlorine has 17 protons and 17 electrons. Cl$^-$ has 17 protons but 18 electrons. (3) Adding an electron increases electron-electron repulsion while the nuclear charge stays the same. Each electron is held less tightly, so the electron cloud expands. Anions are always larger than their parent atom.`
      },
      {
        q: `A 3s electron and a 3p electron are in the same atom. Which has the higher $Z_\\text{eff}$? Which is lower in energy?`,
        a: `(1) The $3s$ electron has higher $Z_\\text{eff}$. (2) The $3s$ orbital has an inner peak in its radial distribution function, letting it penetrate closer to the nucleus than $3p$. Closer penetration means less shielding. (3) Higher $Z_\\text{eff}$ means stronger attraction, so $3s$ is lower in energy. This is why orbital energies within a shell follow $s < p < d < f$.`
      },
      {
        q: `Use Wien's law to find the temperature of a star whose peak emission wavelength is 290 nm.`,
        a: `(1) Wien's law: $T \\lambda_\\text{max} = 2.9$ K$\\cdot$mm. (2) $\\lambda_\\text{max} = 290$ nm $= 2.9 \\times 10^{-4}$ mm. (3) $T = 2.9/(2.9 \\times 10^{-4}) = 10000$ K. This star emits peak radiation in the UV and appears blue-white.`
      },
      {
        q: `The transition 2s → 1s in hydrogen is forbidden. Explain why using the selection rule.`,
        a: `(1) The selection rule for hydrogenic atoms requires $\\Delta l = \\pm 1$. (2) Both 2s and 1s have $l = 0$. The change is $\\Delta l = 0$. (3) This violates the selection rule because a photon carries one unit of angular momentum ($\\hbar$). For angular momentum to be conserved, the electron's angular momentum must change by one unit. Since $\\Delta l = 0$, the transition is forbidden.`
      },
      {
        q: `Why does atomic radius decrease across Period 2 from lithium to neon?`,
        a: `(1) Across Period 2, $Z$ increases from 3 to 10 while electrons are added to the same $n=2$ shell. (2) Each added electron goes into the same shell. Same-shell electrons shield each other weakly ($\\approx 0.35$ each), so $Z_\\text{eff}$ rises significantly from Li to Ne. (3) Greater $Z_\\text{eff}$ pulls all electrons inward, shrinking the atom even as total electron count grows.`
      },
      {
        q: `Carbon has $E_a > 0$ (gains energy when adding an electron) but nitrogen has $E_a < 0$ (loses energy). Explain this reversal.`,
        a: `(1) Carbon ($2p^2$) has two $2p$ electrons in separate orbitals. Adding a third fills a still-empty $2p$ orbital, gaining exchange energy. (2) Nitrogen ($2p^3$) has one electron in each $2p$ orbital. Adding a fourth must pair into an already-occupied orbital, paying a pairing-repulsion penalty and losing one exchange partner. (3) The pairing energy cost makes the $2p^4$ anion less stable than the neutral $2p^3$ atom.`
      },
      {
        q: `An electron has $n=3$, $l=2$. List all valid $m_l$ values and name the subshell.`,
        a: `(1) With $l=2$, this is a $d$ subshell. (2) $m_l$ ranges from $-l$ to $+l$: values are $-2, -1, 0, +1, +2$. (3) There are five distinct orbitals in the $3d$ subshell, one for each $m_l$ value. In a hydrogen atom, all five are degenerate.`
      },
      {
        q: `Why is the second ionization energy of sodium ($I_2 = 4562$ kJ mol$^{-1}$) so much larger than the first ($I_1 = 496$ kJ mol$^{-1}$)?`,
        a: `(1) The first ionization removes the $3s$ electron (outermost, in $n=3$ shell, well-shielded): only 496 kJ mol$^{-1}$. (2) The second ionization removes an electron from the $2p$ core (inner $n=2$ shell, much closer to the nucleus). (3) The enormous jump (almost tenfold) marks crossing the $n=3 \\to n=2$ shell boundary. This pattern directly reveals electron shell structure.`
      },
      {
        q: `An electron moves at $v = 2.0 \\times 10^6$ m/s. Find its de Broglie wavelength. ($m_e = 9.109 \\times 10^{-31}$ kg, $h = 6.626 \\times 10^{-34}$ J s)`,
        a: `(1) Momentum: $p = m_e v = (9.109 \\times 10^{-31})(2.0 \\times 10^6) = 1.822 \\times 10^{-24}$ kg m s$^{-1}$. (2) $\\lambda = h/p = (6.626 \\times 10^{-34})/(1.822 \\times 10^{-24}) = 3.64 \\times 10^{-10}$ m $= 0.364$ nm. (3) This is comparable to atomic spacings, which is why electron diffraction works.`
      },
      {
        q: `Compare the penetration of a 2s versus a 2p electron. What does this mean for their orbital energies in a many-electron atom?`,
        a: `(1) The 2s orbital has a small inner peak in $P(r)$ close to the nucleus; 2p has no such peak. (2) The 2s electron penetrates the $1s$ core and experiences more nuclear charge, so it is less shielded. (3) Higher $Z_\\text{eff}$ for 2s means it is more tightly bound and lower in energy than 2p. In many-electron atoms, orbital energies within a shell follow $s < p < d < f$.`
      },
      {
        q: `The Stefan-Boltzmann law says total radiated power $I = \\sigma T^4$. A star doubles its surface temperature. By what factor does its total emission increase?`,
        a: `(1) $I \\propto T^4$. (2) Doubling $T$: new $I = \\sigma(2T)^4 = 16\\sigma T^4$. (3) Total emission increases by a factor of 16. This explains why even small temperature differences between stars lead to dramatic differences in brightness.`
      },
      {
        q: `Explain why fluorine's electron affinity (322 kJ mol$^{-1}$) is lower than chlorine's (349 kJ mol$^{-1}$), even though fluorine is more electronegative.`,
        a: `(1) Fluorine's $2p$ shell is very compact (small $n=2$ orbital). (2) Adding an electron into this tight space increases electron-electron repulsion significantly, reducing the energy gained. (3) Chlorine's $3p$ orbital is larger, so the incoming electron faces less repulsion. Despite weaker nuclear attraction in Cl, the lower repulsion gives Cl a higher electron affinity.`
      },
      {
        q: `What is the zero-point energy and why can't a particle in a box have $E=0$?`,
        a: `(1) Zero-point energy is the minimum energy a confined particle must have: $E_1 = h^2/8mL^2$ (the $n=1$ state). (2) For $E=0$, momentum would be zero and the de Broglie wavelength infinite. An infinite wavelength cannot satisfy the boundary conditions of a finite box. (3) The uncertainty principle also forbids it: confinement to length $L$ forces $\\Delta p \\geq \\hbar/2L > 0$.`
      },
      {
        q: `Copper's actual configuration is $[\\text{Ar}]3d^{10} 4s^1$, not the Aufbau $[\\text{Ar}]3d^9 4s^2$. A full $d$ shell holds 5 spin-up and 5 spin-down electrons. Count the exchange pairs in the filled $3d^{10}$ shell and explain why this drives the exception.`,
        a: `(1) Exchange pairs form only between same-spin electrons. The 5 spin-up electrons give $5 \\times 4/2 = 10$ pairs, and the 5 spin-down electrons give another $5 \\times 4/2 = 10$ pairs: 20 exchange pairs total. (2) The Aufbau $3d^9$ shell has 5 of one spin and 4 of the other: $10 + 6 = 16$ pairs. (3) Filling the shell adds 4 exchange pairs, which releases more energy than the cost of moving one electron from $4s$ to $3d$. So the full $d$ subshell wins.`
      },
      {
        q: `What are the conditions that a wavefunction must satisfy to be a valid solution to the Schrödinger equation?`,
        a: `(1) The wavefunction must be continuous and single-valued everywhere (no breaks or forks). (2) It must be finite everywhere (no infinite values), and normalizable: $\\int \\psi^2 d\\tau = 1$ (total probability = 100%). (3) These constraints are not random. They force quantization of energy. Only wavefunctions that obey them exist, and each valid one corresponds to an allowed energy level.`
      },
      {
        q: `A $3d$ electron and a $3p$ electron are in the same atom. Which penetrates more? Which is lower in energy?`,
        a: `(1) The $3p$ electron penetrates more than $3d$: penetration order $s > p > d$ for the same $n$. (2) Better penetration means the $3p$ electron is less shielded from the nucleus and has higher $Z_\\text{eff}$. (3) Higher $Z_\\text{eff}$ means stronger attraction, so $3p$ is lower in energy than $3d$ in a many-electron atom.`
      },
      {
        q: `List the spectral series for hydrogen in order, with the region of the spectrum each appears in.`,
        a: `(1) Lyman ($n_1=1$): ultraviolet. Balmer ($n_1=2$): visible. Paschen ($n_1=3$): near infrared. (2) Brackett ($n_1=4$): infrared. Pfund ($n_1=5$): infrared. Humphreys ($n_1=6$): far infrared. (3) The energy gap to $n=1$ is largest, producing high-energy UV photons. Higher series produce lower-energy photons.`
      },
      {
        q: `Why does the radius of the 1s orbital scale as $a_0/Z$ for hydrogenic atoms?`,
        a: `(1) Increasing $Z$ increases the nuclear charge pulling the electron inward. (2) The Schrödinger equation for a hydrogenic atom scales: replacing $e^2$ by $Ze^2$ in the Coulomb potential multiplies all lengths by $1/Z$ and all energies by $Z^2$. (3) The most probable radius becomes $r_\\text{mp} = a_0/Z$. For He$^+$ ($Z=2$), the electron sits twice as close, consistent with the fourfold increase in binding energy.`
      },
      {
        q: `How do you use Slater's rules to estimate $Z_\\text{eff}$ for the 3s electron in sodium ($Z=11$)?`,
        a: `(1) Sodium: $1s^2 2s^2 2p^6 3s^1$. Target: the $3s$ electron. (2) Same group ($3s$): zero other electrons. Shell $n-1 = 2s2p$ (8 electrons): each contributes 0.85. $n-2$ and below ($1s$, 2 electrons): each contributes 1.00. $\\sigma = 8(0.85) + 2(1.00) = 8.80$. (3) $Z_\\text{eff} = 11 - 8.80 = 2.20$. The single $3s$ electron feels about 2.2 times the nuclear charge of hydrogen.`
      },
      {
        q: `Predict what happens to the ground state energy of He$^+$ ($Z=2$) compared to H ($Z=1$) using $E_n = -Z^2 hcR/n^2$.`,
        a: `(1) He$^+$ is a hydrogenic ion with $Z=2$, $n=1$. (2) $E_1(\\text{He}^+) = -4hcR$ versus $E_1(\\text{H}) = -hcR$. (3) He$^+$ is bound four times more strongly. Ionization energy of He$^+$ is $4 \\times 1312 = 5248$ kJ mol$^{-1}$. The $Z^2$ scaling is exact for hydrogenic ions because there is no electron-electron repulsion.`
      },
      {
        q: `What is the inert-pair effect and which elements show it?`,
        a: `(1) In heavy $p$-block elements (Period 6 and below), the two $ns$ electrons resist participation in bonding, preferring the lower oxidation state. (2) Examples: Tl (Group 13) forms Tl$^+$ (not Tl$^{3+}$); Pb (Group 14) forms Pb$^{2+}$ (not Pb$^{4+}$); Bi (Group 15) forms Bi$^{3+}$ (not Bi$^{5+}$). (3) Relativistic effects stabilize the $6s$ orbital in Period 6 atoms, making the $s$ electrons harder to remove.`
      },
      {
        q: `Explain the diagonal relationship between lithium and magnesium. Why do they resemble each other more than Li and Na do?`,
        a: `(1) Moving right across a period increases $Z_\\text{eff}$ and decreases radius. Moving down a group increases radius. (2) Moving diagonally (from Li to Mg) does both: the extra period increases radius while the move right shrinks it. These effects roughly cancel. (3) Li and Mg end up with similar ionic charge densities (charge/radius ratio). This ratio controls how strongly an ion pulls on nearby anions and forms complexes. Na has a much larger ionic radius, giving different chemistry.`
      },
      {
        q: `An electron has quantum numbers $n=3$, $l=1$, $m_l=0$, $m_s=-1/2$. Name the orbital, state the subshell, and explain whether another electron with $n=3$, $l=1$, $m_l=0$, $m_s=+1/2$ can coexist in the same atom.`,
        a: `(1) $n=3$, $l=1$ means the $3p$ subshell. $m_l=0$ is the $3p_z$ orbital. (2) The second electron has $n=3$, $l=1$, $m_l=0$, $m_s=+1/2$, differing only in $m_s$. (3) These two electrons differ in at least one quantum number, so they can coexist. The Pauli exclusion principle only forbids two electrons from sharing all four quantum numbers.`
      },
      {
        q: `What experiment showed that the atom is mostly empty space with a tiny dense nucleus?`,
        a: `(1) Rutherford's gold foil experiment (1909). (2) Alpha particles were fired at thin gold foil. Most passed straight through. A small fraction deflected at large angles, and some even bounced back. (3) Rutherford concluded that almost all mass and all positive charge sit in a tiny nucleus ($\\approx 10^{-15}$ m across). The large empty space explains why most particles pass through undeflected.`
      },
      {
        q: `Predict how the most probable radius of the 1s orbital changes as you go from H to C$^{5+}$ (all have one electron).`,
        a: `(1) All are hydrogenic, so $r_\\text{mp} = a_0/Z$. H ($Z=1$): 52.9 pm. He$^+$ ($Z=2$): 26.5 pm. Li$^{2+}$ ($Z=3$): 17.6 pm. Be$^{3+}$ ($Z=4$): 13.2 pm. B$^{4+}$ ($Z=5$): 10.6 pm. C$^{5+}$ ($Z=6$): 8.8 pm. (2) Each doubling of $Z$ halves the orbital radius. (3) Greater nuclear charge pulls the single electron tighter. Binding energy scales as $Z^2$: C$^{5+}$ is 36 times harder to ionize than H.`
      },
      {
        q: `What is the physical meaning of the normalization condition $\\int \\psi^2 d\\tau = 1$?`,
        a: `(1) The particle definitely exists somewhere. The probability of finding it anywhere in all of space must be exactly 100%. (2) The integral $\\int \\psi^2 d\\tau$ sums the probability density over all volume elements. If this equals 1, all probabilities add up correctly. (3) Without normalization, calculated probabilities could exceed 1 or fall below 0, which is physically impossible. Normalization makes $\\psi^2$ a valid probability density.`
      },
      {
        q: `Compare isotopes and allotropes with one example of each.`,
        a: `(1) Isotopes are atoms of the same element with different mass numbers (same $Z$, different $N$). Example: $^{35}$Cl and $^{37}$Cl. (2) Allotropes are different structural forms of the same element. Example: graphite and diamond, both pure carbon ($Z=6$), with different bonding arrangements. (3) Isotopes differ at the nuclear level; allotropes differ at the structural/bonding level. Isotopes are chemically nearly identical; allotropes can have completely different properties.`
      },
      {
        q: `What does the Stern-Gerlach experiment tell us about electron spin?`,
        a: `(1) Silver atoms were shot through a non-uniform magnetic field. Classically, the beam should spread continuously. (2) Instead, the beam split into exactly two distinct spots. (3) This proves that electrons carry intrinsic angular momentum (spin) quantized to exactly two values: $m_s = +1/2$ (up) or $m_s = -1/2$ (down). Spin is quantized, not a continuous range.`
      },
      {
        q: `Explain why the second electron affinity of oxygen is negative ($-844$ kJ mol$^{-1}$).`,
        a: `(1) Adding the first electron to oxygen gives O$^-$: exothermic because oxygen's $Z_\\text{eff}$ is high enough to attract one extra electron. (2) Adding the second electron to O$^-$ requires forcing an electron onto an already-negative ion. The incoming electron experiences strong electrostatic repulsion from the $-1$ charge. (3) The repulsive energy far exceeds any orbital stabilization. Energy must be put in, so the process is endothermic.`
      },
      {
        q: `Why do transition metal cations lose their $ns$ electrons before their $(n-1)d$ electrons?`,
        a: `(1) In a neutral transition metal atom, $4s$ fills before $3d$ (Aufbau). (2) Once $3d$ electrons are present, they repel the $4s$ electron and raise its energy above $3d$. (3) The $4s$ electron is now the highest-energy electron and is removed first upon ionization. For example, V ($[\\text{Ar}]3d^3 4s^2$) gives V$^{2+}$ as $[\\text{Ar}]3d^3$, with both $4s$ electrons removed.`
      }
    ],
    reference: {
      category: 'Quick Reference',
      title: 'Atomic Structure, the Periodic Table, and Periodic Trends',
      sections: [
        <>
          <div className="lrn-header">
            <h2>Light and Electromagnetic Radiation</h2>
          </div>
          <div className="ref-formula">
            <strong>Speed of light</strong>
            <p className="lrn-eq">{`$$\\lambda \\nu = c, \\quad c = 2.998 \\times 10^8 \\text{ m s}^{-1}$$`}</p>
            <p>
              When to use: Convert between wavelength and frequency of any electromagnetic wave.
            </p>
          </div>
          <div className="ref-formula">
            <strong>Photon energy</strong>
            <p className="lrn-eq">{`$$E = h\\nu, \\quad h = 6.626 \\times 10^{-34} \\text{ J s}$$`}</p>
            <p>
              When to use: Find the energy carried by a single photon of known frequency or
              wavelength.
            </p>
          </div>
          <div className="ref-formula">
            <strong>Bohr frequency condition</strong>
            <p className="lrn-eq">{`$$h\\nu = E_\\text{upper} - E_\\text{lower}$$`}</p>
            <p>
              When to use: Find the photon frequency emitted or absorbed in any atomic transition.
            </p>
          </div>
          <table className="lrn-table">
            <thead>
              <tr>
                <th>Color</th>
                <th>Frequency (Hz)</th>
                <th>Wavelength (nm)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Violet</td>
                <td>{`$7.1 \\times 10^{14}$`}</td>
                <td>420</td>
              </tr>
              <tr>
                <td>Blue</td>
                <td>{`$6.4 \\times 10^{14}$`}</td>
                <td>470</td>
              </tr>
              <tr>
                <td>Green</td>
                <td>{`$5.7 \\times 10^{14}$`}</td>
                <td>530</td>
              </tr>
              <tr>
                <td>Yellow</td>
                <td>{`$5.2 \\times 10^{14}$`}</td>
                <td>580</td>
              </tr>
              <tr>
                <td>Orange</td>
                <td>{`$4.8 \\times 10^{14}$`}</td>
                <td>620</td>
              </tr>
              <tr>
                <td>Red</td>
                <td>{`$4.3 \\times 10^{14}$`}</td>
                <td>700</td>
              </tr>
            </tbody>
          </table>
        </>,

        <>
          <div className="lrn-header">
            <h2>Black-Body Radiation</h2>
          </div>
          <div className="ref-formula">
            <strong>Wien's displacement law</strong>
            <p className="lrn-eq">{`$$T \\cdot \\lambda_\\text{max} = 2.9 \\text{ K} \\cdot \\text{mm}$$`}</p>
            <p>
              When to use: Find the peak emission wavelength of a black body at known temperature,
              or vice versa.
            </p>
          </div>
          <div className="ref-formula">
            <strong>Stefan-Boltzmann law</strong>
            <p className="lrn-eq">{`$$I = \\sigma T^4, \\quad \\sigma = 5.67 \\times 10^{-8} \\text{ W m}^{-2} \\text{K}^{-4}$$`}</p>
            <p>
              When to use: Find total power radiated per unit area of a black body at temperature{' '}
              {`$T$`}.
            </p>
          </div>
        </>,

        <>
          <div className="lrn-header">
            <h2>Photoelectric Effect</h2>
          </div>
          <div className="ref-formula">
            <strong>Photoelectric kinetic energy</strong>
            <p className="lrn-eq">{`$$E_k = h\\nu - \\Phi$$`}</p>
            <p>
              When to use: Find the kinetic energy of an electron ejected when a photon of frequency{' '}
              {`$\\nu$`} strikes a metal with work function {`$\\Phi$`}.
            </p>
          </div>
          <p className="lrn-callout">
            If {`$h\\nu < \\Phi$`}, the metal ejects no electrons regardless of light intensity.
          </p>
        </>,

        <>
          <div className="lrn-header">
            <h2>Wave-Particle Duality</h2>
          </div>
          <div className="ref-formula">
            <strong>de Broglie wavelength</strong>
            <p className="lrn-eq">{`$$\\lambda = \\frac{h}{p} = \\frac{h}{mv}$$`}</p>
            <p>
              When to use: Find the wavelength associated with any particle of known mass and speed.
            </p>
          </div>
          <div className="ref-formula">
            <strong>Heisenberg uncertainty principle</strong>
            <p className="lrn-eq">{`$$\\Delta p \\, \\Delta x \\geq \\frac{\\hbar}{2}, \\quad \\hbar = 1.055 \\times 10^{-34} \\text{ J s}$$`}</p>
            <p>
              When to use: Find the minimum uncertainty in momentum given a known position
              uncertainty (or vice versa).
            </p>
          </div>
        </>,

        <>
          <div className="lrn-header">
            <h2>Spectral Series of Hydrogen</h2>
          </div>
          <div className="ref-formula">
            <strong>Rydberg formula</strong>
            <p className="lrn-eq">{`$$\\frac{1}{\\lambda} = \\tilde{R}_H \\left(\\frac{1}{n_1^2} - \\frac{1}{n_2^2}\\right), \\quad n_2 > n_1$$`}</p>
            <p>{`When to use: Calculate the wavelength of any spectral line in the hydrogen spectrum. $\\tilde{R}_H = 109677$ cm$^{-1}$ (equivalently $1.097 \\times 10^7$ m$^{-1}$ or $3.29 \\times 10^{15}$ Hz).`}</p>
          </div>
          <table className="lrn-table">
            <thead>
              <tr>
                <th>Series</th>
                <th>Lower level {`$n_1$`}</th>
                <th>Region</th>
                <th>Example</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Lyman</td>
                <td>1</td>
                <td>Ultraviolet</td>
                <td>121.6 nm ({`$n=2\\to1$`})</td>
              </tr>
              <tr>
                <td>Balmer</td>
                <td>2</td>
                <td>Visible</td>
                <td>656.5 nm ({`$n=3\\to2$`})</td>
              </tr>
              <tr>
                <td>Paschen</td>
                <td>3</td>
                <td>Near infrared</td>
                <td>1875 nm ({`$n=4\\to3$`})</td>
              </tr>
              <tr>
                <td>Brackett</td>
                <td>4</td>
                <td>Infrared</td>
                <td>, </td>
              </tr>
              <tr>
                <td>Pfund</td>
                <td>5</td>
                <td>Infrared</td>
                <td>, </td>
              </tr>
              <tr>
                <td>Humphreys</td>
                <td>6</td>
                <td>Far infrared</td>
                <td>, </td>
              </tr>
            </tbody>
          </table>
        </>,

        <>
          <div className="lrn-header">
            <h2>The Schrödinger Equation</h2>
          </div>
          <div className="ref-formula">
            <strong>1D Schrödinger equation</strong>
            <p className="lrn-eq">{`$$-\\frac{\\hbar^2}{2m}\\frac{d^2\\psi}{dx^2} + V(x)\\psi = E\\psi$$`}</p>
            <p>
              When to use: Find the allowed energies and wavefunctions of a particle in one
              dimension.
            </p>
          </div>
          <div className="ref-formula">
            <strong>Operator form</strong>
            <p className="lrn-eq">{`$$\\hat{H}\\psi = E\\psi$$`}</p>
            <p>When to use: Compact notation for the Schrödinger equation in any dimension.</p>
          </div>
          <div className="ref-formula">
            <strong>Normalization condition</strong>
            <p className="lrn-eq">{`$$\\int \\psi^2 \\, d\\tau = 1$$`}</p>
            <p>When to use: Ensure the wavefunction gives physically valid probabilities.</p>
          </div>
          <div className="ref-formula">
            <strong>Born interpretation</strong>
            <p className="lrn-eq">{`$$\\text{probability density} = \\psi^2$$`}</p>
            <p>{`When to use: Interpret the physical meaning of any wavefunction; $\\psi^2 dV$ is the probability of finding the particle in volume $dV$.`}</p>
          </div>
        </>,

        <>
          <div className="lrn-header">
            <h2>Particle in a Box</h2>
          </div>
          <div className="ref-formula">
            <strong>Wavefunctions</strong>
            <p className="lrn-eq">{`$$\\psi_n = \\left(\\frac{2}{L}\\right)^{1/2} \\sin\\left(\\frac{n\\pi x}{L}\\right), \\quad n = 1, 2, 3, \\ldots$$`}</p>
            <p>
              When to use: Write the wavefunction for state {`$n$`} of an electron confined to a 1D
              box of length {`$L$`}.
            </p>
          </div>
          <div className="ref-formula">
            <strong>Energies</strong>
            <p className="lrn-eq">{`$$E_n = \\frac{n^2 h^2}{8mL^2}$$`}</p>
            <p>{`When to use: Find the allowed energies of a confined particle; energy gap $\\Delta E = E_{n_2} - E_{n_1}$ gives spectral transition energy.`}</p>
          </div>
          <ul className="lrn-list">
            <li>{`Zero-point energy (ZPE): $E_1 = h^2/8mL^2$ (minimum energy, cannot be zero)`}</li>
            <li>{`Nodes inside box for state $n$: $n-1$`}</li>
            <li>{`Energy ratio: $E_n = n^2 E_1$`}</li>
          </ul>
        </>,

        <>
          <div className="lrn-header">
            <h2>Hydrogen Atom Energy Levels</h2>
          </div>
          <div className="ref-formula">
            <strong>Hydrogen atom energy</strong>
            <p className="lrn-eq">{`$$E_n = -\\frac{hc\\tilde{R}}{n^2} \\quad (Z=1)$$`}</p>
            <p>When to use: Find the energy of a hydrogen electron in level {`$n$`}.</p>
          </div>
          <div className="ref-formula">
            <strong>Hydrogenic ion energy</strong>
            <p className="lrn-eq">{`$$E_n = -\\frac{Z^2 hc\\tilde{R}}{n^2}$$`}</p>
            <p>
              When to use: Find the energy of a one-electron ion with nuclear charge {`$Z$`} in
              level {`$n$`}.
            </p>
          </div>
          <div className="ref-formula">
            <strong>Many-electron approximate orbital energy</strong>
            <p className="lrn-eq">{`$$E_n \\approx -\\frac{Z_\\text{eff}^2 hc\\tilde{R}}{n^2}$$`}</p>
            <p>
              When to use: Estimate orbital energy in a many-electron atom using the effective
              nuclear charge.
            </p>
          </div>
          <div className="ref-formula">
            <strong>Coulomb potential (hydrogen)</strong>
            <p className="lrn-eq">{`$$V(r) = -\\frac{e^2}{4\\pi\\varepsilon_0 r}$$`}</p>
            <p>
              When to use: Write the potential energy of a hydrogen electron at distance {`$r$`}{' '}
              from the nucleus.
            </p>
          </div>
          <ul className="lrn-list">
            <li>{`Bohr radius: $a_0 = 52.9$ pm`}</li>
            <li>{`Ionization energy of H: $13.6$ eV $= 1312$ kJ mol$^{-1}$`}</li>
            <li>{`$E_n(\\text{H}) = -13.6/n^2$ eV`}</li>
          </ul>
        </>,

        <>
          <div className="lrn-header">
            <h2>Atomic Orbitals and Quantum Numbers</h2>
          </div>
          <table className="lrn-table">
            <thead>
              <tr>
                <th>Quantum number</th>
                <th>Symbol</th>
                <th>Allowed values</th>
                <th>Determines</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Principal</td>
                <td>{`$n$`}</td>
                <td>{`$1, 2, 3, \\ldots$`}</td>
                <td>Shell; size; energy in H</td>
              </tr>
              <tr>
                <td>Angular momentum</td>
                <td>{`$l$`}</td>
                <td>{`$0$ to $n-1$`}</td>
                <td>Subshell; shape</td>
              </tr>
              <tr>
                <td>Magnetic</td>
                <td>{`$m_l$`}</td>
                <td>{`$-l$ to $+l$`}</td>
                <td>Orbital orientation</td>
              </tr>
              <tr>
                <td>Spin</td>
                <td>{`$m_s$`}</td>
                <td>{`$\\pm\\tfrac{1}{2}$`}</td>
                <td>Spin direction</td>
              </tr>
            </tbody>
          </table>
          <table className="lrn-table">
            <thead>
              <tr>
                <th>Subshell</th>
                <th>{`$l$`}</th>
                <th>Orbitals ({`$2l+1$`})</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{`$s$`}</td>
                <td>0</td>
                <td>1</td>
              </tr>
              <tr>
                <td>{`$p$`}</td>
                <td>1</td>
                <td>3</td>
              </tr>
              <tr>
                <td>{`$d$`}</td>
                <td>2</td>
                <td>5</td>
              </tr>
              <tr>
                <td>{`$f$`}</td>
                <td>3</td>
                <td>7</td>
              </tr>
            </tbody>
          </table>
          <ul className="lrn-list">
            <li>
              Total orbitals per shell {`$n$`}: {`$n^2$`}
            </li>
          </ul>
          <div className="ref-formula">
            <strong>Angular momentum magnitude</strong>
            <p className="lrn-eq">{`$$L = \\sqrt{l(l+1)}\\,\\hbar$$`}</p>
            <p>
              When to use: Find the total orbital angular momentum of an electron in subshell{' '}
              {`$l$`}.
            </p>
          </div>
        </>,

        <>
          <div className="lrn-header">
            <h2>Hydrogenic Wavefunctions</h2>
          </div>
          <div className="ref-formula">
            <strong>Wavefunction separation</strong>
            <p className="lrn-eq">{`$$\\psi(r,\\theta,\\phi) = R(r) \\cdot Y(\\theta,\\phi)$$`}</p>
            <p>When to use: Factor the hydrogen wavefunction into radial and angular parts.</p>
          </div>
          <div className="ref-formula">
            <strong>1s ground-state wavefunction</strong>
            <p className="lrn-eq">{`$$\\psi_{1,0,0} = \\left(\\frac{1}{\\pi a_0^3}\\right)^{1/2} e^{-r/a_0}$$`}</p>
            <p>When to use: Write or evaluate the 1s hydrogen wavefunction at any radius.</p>
          </div>
          <div className="ref-formula">
            <strong>1s probability density</strong>
            <p className="lrn-eq">{`$$\\psi^2_{1,0,0} = \\frac{e^{-2r/a_0}}{\\pi a_0^3}$$`}</p>
            <p>
              When to use: Find the probability density at any point {`$r$`} for a 1s hydrogen
              electron.
            </p>
          </div>
          <div className="ref-formula">
            <strong>Radial distribution function (general)</strong>
            <p className="lrn-eq">{`$$P(r) = r^2 R(r)^2$$`}</p>
            <p>
              When to use: Find the probability of finding an electron between {`$r$`} and{' '}
              {`$r+dr$`}, summed over all angles.
            </p>
          </div>
          <div className="ref-formula">
            <strong>Radial distribution function (s-orbitals)</strong>
            <p className="lrn-eq">{`$$P(r) = 4\\pi r^2 \\psi^2$$`}</p>
            <p>When to use: Simplified form for {`$l=0$`} orbitals only.</p>
          </div>
          <div className="ref-formula">
            <strong>Mean radius (1s hydrogenic)</strong>
            <p className="lrn-eq">{`$$\\langle r \\rangle = \\frac{3a_0}{2Z}$$`}</p>
            <p>
              When to use: Find the average electron-nucleus distance for a 1s orbital of a
              hydrogenic ion with charge {`$Z$`}.
            </p>
          </div>
          <div className="ref-formula">
            <strong>Most probable radius (1s hydrogenic)</strong>
            <p className="lrn-eq">{`$$r_\\text{mp} = \\frac{a_0}{Z}$$`}</p>
            <p>When to use: Find where {`$P(r)$`} peaks for a 1s orbital.</p>
          </div>
          <table className="lrn-table">
            <thead>
              <tr>
                <th>Ion</th>
                <th>{`$Z$`}</th>
                <th>{`$r_\\text{mp}$`} (pm)</th>
                <th>{`$\\langle r \\rangle$`} (pm)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>H</td>
                <td>1</td>
                <td>52.9</td>
                <td>79.4</td>
              </tr>
              <tr>
                <td>He{`$^+$`}</td>
                <td>2</td>
                <td>26.5</td>
                <td>39.7</td>
              </tr>
              <tr>
                <td>Li{`$^{2+}$`}</td>
                <td>3</td>
                <td>17.6</td>
                <td>26.5</td>
              </tr>
              <tr>
                <td>Be{`$^{3+}$`}</td>
                <td>4</td>
                <td>13.2</td>
                <td>19.8</td>
              </tr>
            </tbody>
          </table>
        </>,

        <>
          <div className="lrn-header">
            <h2>Electron Spin and the Pauli Exclusion Principle</h2>
          </div>
          <ul className="lrn-list">
            <li>{`Spin quantum number: $s = 1/2$ (all electrons)`}</li>
            <li>{`Spin states: $\\alpha$ (spin-up, $m_s = +1/2$), $\\beta$ (spin-down, $m_s = -1/2$)`}</li>
            <li>Stern-Gerlach: silver beam splits into two spots, proving quantized spin</li>
            <li>
              <strong>Pauli exclusion principle:</strong> no two electrons in the same atom can have
              all four quantum numbers equal
            </li>
            <li>Maximum two electrons per orbital (opposite spins)</li>
            <li>Fermions (half-integer spin): antisymmetric wavefunction under exchange</li>
          </ul>
          <div className="ref-formula">
            <strong>Orbital approximation</strong>
            <p className="lrn-eq">{`$$\\Psi(r_1, r_2, \\ldots) = \\psi(r_1)\\psi(r_2)\\cdots$$`}</p>
            <p>
              When to use: Approximate the many-electron wavefunction as a product of one-electron
              orbitals; starting point for all atomic structure calculations.
            </p>
          </div>
        </>,

        <>
          <div className="lrn-header">
            <h2>Effective Nuclear Charge and Shielding</h2>
          </div>
          <div className="ref-formula">
            <strong>Effective nuclear charge</strong>
            <p className="lrn-eq">{`$$Z_\\text{eff} = Z - \\sigma$$`}</p>
            <p>
              When to use: Estimate the nuclear charge felt by an electron after accounting for
              shielding from inner electrons.
            </p>
          </div>
          <p>
            <strong>Slater's rules for {`$\\sigma$`}</strong>:
          </p>
          <table className="lrn-table">
            <thead>
              <tr>
                <th>Source electrons</th>
                <th>Contribution per electron to {`$\\sigma$`}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Same group as target</td>
                <td>0.35 (0.30 if 1s)</td>
              </tr>
              <tr>
                <td>
                  {`$n-1$`} shell ({`$s$`} or {`$p$`} target)
                </td>
                <td>0.85</td>
              </tr>
              <tr>
                <td>
                  {`$n-2$`} or lower ({`$s$`} or {`$p$`} target)
                </td>
                <td>1.00</td>
              </tr>
              <tr>
                <td>
                  All electrons to left ({`$d$`} or {`$f$`} target)
                </td>
                <td>1.00</td>
              </tr>
            </tbody>
          </table>
          <p>
            <strong>Selected Clementi-Raimondi (SCF) {`$Z_\\text{eff}$`} values:</strong>
          </p>
          <table className="lrn-table">
            <thead>
              <tr>
                <th>Atom</th>
                <th>Orbital</th>
                <th>{`$Z_\\text{eff}$`}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>He</td>
                <td>1s</td>
                <td>1.6875</td>
              </tr>
              <tr>
                <td>C</td>
                <td>1s</td>
                <td>5.6727</td>
              </tr>
              <tr>
                <td>C</td>
                <td>2s</td>
                <td>3.2166</td>
              </tr>
              <tr>
                <td>C</td>
                <td>2p</td>
                <td>3.1358</td>
              </tr>
            </tbody>
          </table>
          <ul className="lrn-list">
            <li>Penetration order (same shell): {`$s > p > d > f$`}</li>
            <li>Energy order (same shell, many-electron atom): {`$s < p < d < f$`}</li>
          </ul>
        </>,

        <>
          <div className="lrn-header">
            <h2>Building-Up Principle (Aufbau)</h2>
          </div>
          <p>Aufbau filling order:</p>
          <p className="lrn-eq">{`$$1s \\to 2s \\to 2p \\to 3s \\to 3p \\to 4s \\to 3d \\to 4p \\to 5s \\to 4d \\to 5p \\to 6s \\to 4f \\to 5d \\to 6p \\to 7s \\to 5f \\to 6d$$`}</p>
          <ol className="lrn-list">
            <li>Fill lowest energy orbitals first (Aufbau)</li>
            <li>Max 2 electrons per orbital, opposite spins (Pauli exclusion)</li>
            <li>Fill degenerate orbitals singly, parallel spins, before pairing (Hund's rule)</li>
          </ol>
          <div className="ref-formula">
            <strong>Exchange energy</strong>
            <p className="lrn-eq">{`$$\\text{Stabilization} = \\frac{N(N-1)}{2} \\times K$$`}</p>
            <p>
              When to use: Estimate the extra stabilization from {`$N$`} electrons with parallel
              spin in a subshell.
            </p>
          </div>
          <p>
            <strong>Anomalies:</strong>
          </p>
          <ul className="lrn-list">
            <li>
              Cr ({`$Z=24$`}): {`$[\\text{Ar}]3d^5 4s^1$`} (half-filled {`$d$`}, not {`$3d^4 4s^2$`}
              )
            </li>
            <li>
              Cu ({`$Z=29$`}): {`$[\\text{Ar}]3d^{10} 4s^1$`} (full {`$d$`}, not {`$3d^9 4s^2$`})
            </li>
          </ul>
          <p>
            Cations of transition metals: remove {`$ns$`} before {`$(n-1)d$`}. Example: V{`$^{2+}$`}{' '}
            = {`$[\\text{Ar}]3d^3$`}.
          </p>
        </>,

        <>
          <div className="lrn-header">
            <h2>Periodic Table Structure and Group Names</h2>
          </div>
          <table className="lrn-table">
            <thead>
              <tr>
                <th>Block</th>
                <th>Subshell</th>
                <th>Groups</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{`$s$`}</td>
                <td>{`$s$`}</td>
                <td>1-2</td>
              </tr>
              <tr>
                <td>{`$p$`}</td>
                <td>{`$p$`}</td>
                <td>13-18</td>
              </tr>
              <tr>
                <td>{`$d$`}</td>
                <td>{`$d$`}</td>
                <td>3-12</td>
              </tr>
              <tr>
                <td>{`$f$`}</td>
                <td>{`$f$`}</td>
                <td>Lanthanoids, actinoids</td>
              </tr>
            </tbody>
          </table>
          <table className="lrn-table">
            <thead>
              <tr>
                <th>Group number</th>
                <th>IUPAC name</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Alkali metals</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Alkaline earth metals</td>
              </tr>
              <tr>
                <td>15</td>
                <td>Pnicogens (pnictogens)</td>
              </tr>
              <tr>
                <td>16</td>
                <td>Chalcogens</td>
              </tr>
              <tr>
                <td>17</td>
                <td>Halogens</td>
              </tr>
              <tr>
                <td>18</td>
                <td>Noble gases</td>
              </tr>
              <tr>
                <td>Inner rows (f-block)</td>
                <td>Lanthanoids / Actinoids</td>
              </tr>
            </tbody>
          </table>
        </>,

        <>
          <div className="lrn-header">
            <h2>Atomic and Ionic Radii</h2>
          </div>
          <table className="lrn-table">
            <thead>
              <tr>
                <th>Trend</th>
                <th>Direction</th>
                <th>Explanation</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Atomic radius</td>
                <td>Decreases across period</td>
                <td>{`$Z_\\text{eff}$`} rises; electrons pulled inward</td>
              </tr>
              <tr>
                <td>Atomic radius</td>
                <td>Increases down group</td>
                <td>New shell ({`$n+1$`}) farther from nucleus</td>
              </tr>
              <tr>
                <td>Cation radius</td>
                <td>Smaller than parent atom</td>
                <td>Fewer electrons; may lose outer shell</td>
              </tr>
              <tr>
                <td>Anion radius</td>
                <td>Larger than parent atom</td>
                <td>More electrons; increased repulsion</td>
              </tr>
              <tr>
                <td>Isoelectronic series</td>
                <td>Larger as {`$Z$`} decreases</td>
                <td>More nuclear charge pulls electrons in</td>
              </tr>
            </tbody>
          </table>
        </>,

        <>
          <div className="lrn-header">
            <h2>Ionization Energy</h2>
          </div>
          <div className="ref-formula">
            <strong>First ionization energy</strong>
            <p className="lrn-eq">{`$$\\text{X}(g) \\to \\text{X}^+(g) + e^-(g); \\quad I = E(\\text{X}^+) - E(\\text{X})$$`}</p>
            <p>
              When to use: Calculate the energy cost of removing the outermost electron from a
              neutral atom.
            </p>
          </div>
          <table className="lrn-table">
            <thead>
              <tr>
                <th>Trend</th>
                <th>Direction</th>
                <th>Exception</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Across period</td>
                <td>Generally increases</td>
                <td>
                  Group 13 ({`$p$`} lower than {`$s$`}); Group 16 (pairing penalty)
                </td>
              </tr>
              <tr>
                <td>Down group</td>
                <td>Decreases</td>
                <td>, </td>
              </tr>
              <tr>
                <td>
                  {`$I_2$`} vs {`$I_1$`}
                </td>
                <td>Always {`$I_2 > I_1$`}</td>
                <td>Huge jump when crossing shell boundary</td>
              </tr>
            </tbody>
          </table>
          <p>
            <strong>Selected first ionization energies (kJ mol{`$^{-1}$`}):</strong>
          </p>
          <table className="lrn-table">
            <thead>
              <tr>
                <th>Atom</th>
                <th>{`$I_1$`}</th>
                <th>{`$I_2$`}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>H</td>
                <td>1312</td>
                <td>, </td>
              </tr>
              <tr>
                <td>He</td>
                <td>2372</td>
                <td>5251</td>
              </tr>
              <tr>
                <td>Na</td>
                <td>496</td>
                <td>4562</td>
              </tr>
              <tr>
                <td>Mg</td>
                <td>738</td>
                <td>1451</td>
              </tr>
            </tbody>
          </table>
        </>,

        <>
          <div className="lrn-header">
            <h2>Electron Affinity</h2>
          </div>
          <div className="ref-formula">
            <strong>Electron affinity</strong>
            <p className="lrn-eq">{`$$E_a(\\text{X}) = E(\\text{X}) - E(\\text{X}^-); \\quad \\text{positive} = \\text{exothermic}$$`}</p>
            <p>
              When to use: Compare how readily atoms gain an electron; higher {`$E_a$`} = stronger
              electron attraction.
            </p>
          </div>
          <p>
            <strong>Selected electron affinities (kJ mol{`$^{-1}$`}):</strong>
          </p>
          <table className="lrn-table">
            <thead>
              <tr>
                <th>Species</th>
                <th>{`$E_a$`}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Cl</td>
                <td>349</td>
              </tr>
              <tr>
                <td>F</td>
                <td>322</td>
              </tr>
              <tr>
                <td>O</td>
                <td>141</td>
              </tr>
              <tr>
                <td>H</td>
                <td>73</td>
              </tr>
              <tr>
                <td>O{`$^-$`} (second)</td>
                <td>{`$-844$`}</td>
              </tr>
            </tbody>
          </table>
        </>,

        <>
          <div className="lrn-header">
            <h2>Periodic Trends Summary</h2>
          </div>
          <table className="lrn-table">
            <thead>
              <tr>
                <th>Property</th>
                <th>Across period (left to right)</th>
                <th>Down group (top to bottom)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Atomic radius</td>
                <td>Decreases</td>
                <td>Increases</td>
              </tr>
              <tr>
                <td>Ionic radius</td>
                <td>Decreases (cations); increases (anions)</td>
                <td>Increases</td>
              </tr>
              <tr>
                <td>Ionization energy</td>
                <td>Generally increases</td>
                <td>Decreases</td>
              </tr>
              <tr>
                <td>Electron affinity</td>
                <td>Generally increases</td>
                <td>Decreases</td>
              </tr>
              <tr>
                <td>{`$Z_\\text{eff}$`}</td>
                <td>Increases</td>
                <td>Varies</td>
              </tr>
              <tr>
                <td>Electronegativity</td>
                <td>Increases</td>
                <td>Decreases</td>
              </tr>
            </tbody>
          </table>
        </>,

        <>
          <div className="lrn-header">
            <h2>Special Periodic Table Concepts</h2>
          </div>
          <ul className="lrn-list">
            <li>
              <strong>Diagonal relationships:</strong> Li/Mg, Be/Al, similar charge-to-radius ratio
              leads to similar chemistry.
            </li>
            <li>
              <strong>Inert-pair effect:</strong> Heavy {`$p$`}-block elements (Tl, Pb, Bi) prefer
              lower oxidation state by 2. Valence {`$s$`} electrons penetrate well and are poorly
              shielded by {`$d$`} electrons; energy gap between {`$s$`} and {`$p$`} is largest in
              heaviest group members, making the {`$s$`} pair resist removal.
            </li>
            <li>
              <strong>Lanthanide contraction:</strong> {`$4f$`} electrons shield poorly; Period 6{' '}
              {`$d$`}-block elements have nearly the same radii as their Period 5 counterparts.
            </li>
            <li>
              <strong>Allotropes:</strong> Different structural forms of same element (e.g.,
              diamond/graphite for C; white/red/black phosphorus for P).
            </li>
            <li>
              <strong>Isotopes:</strong> Same element, different mass number. Example: {`$^{35}$`}Cl
              and {`$^{37}$`}Cl; {`$^{35}$`}Cl is more abundant, giving chlorine an average atomic
              mass of 35.45.
            </li>
          </ul>
        </>
      ]
    },
    customCss: null
  }
  return <LearningTemplate config={config} />
}
