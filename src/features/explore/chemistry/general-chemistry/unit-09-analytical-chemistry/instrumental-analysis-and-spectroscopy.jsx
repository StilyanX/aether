import { LearningTemplate } from '../../../../../components/learning/learning-template'
import {
  EMSpectrumViz,
  BeerLambertViz,
  SpectrometerBlockViz,
  DopplerLifetimeViz,
  RigidRotorViz,
  CentrifugalDistortionViz,
  NuclearSpinIntensityViz,
  RotationalRamanViz,
  HarmonicMorseViz,
  BirgeSponerViz,
  VibRotBranchesViz,
  CO2NormalModesViz,
  FranckCondonViz,
  ChromophoreUVVisViz,
  JablonskiViz,
  FourLevelLaserViz,
  ZeemanLarmorViz,
  NMREthanolViz,
  KarplusViz,
  FIDFTViz,
  T1T2Viz,
  EPRMethylViz,
  MetalCarbonylCOViz
} from '../../../../../components/viz'

export default function InstrumentalAnalysisAndSpectroscopy() {
  const config = {
    cssPrefix: 'chem-spectroscopy',
    documentTitle: 'Instrumental Analysis and Spectroscopy - AETHER',
    customCss: null,
    learning: {
      category: 'Unit 9',
      groupTitle: 'Analytical Chemistry',
      title: 'Instrumental Analysis and Spectroscopy',
      subtitle:
        'From the electromagnetic spectrum and Beer-Lambert law to rotational, vibrational, electronic, NMR, and EPR spectroscopy: the tools that reveal molecular structure.',
      sections: [
        <>
          <div className="lrn-header">
            <h2>The Electromagnetic Spectrum and Spectroscopy Basics</h2>
          </div>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              A molecule absorbs light at a specific frequency. What determines which frequency it
              absorbs, and why does it absorb at all?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                The molecule absorbs only when the photon energy exactly matches the gap between two
                of its quantized energy levels. Absorption is selective because molecules are
                quantum systems. They can only jump between allowed discrete states.
              </p>
            </details>
          </div>
          <p>
            Spectroscopy measures how matter absorbs or emits electromagnetic radiation. Radiation
            exists along a continuous spectrum. Each spectral region couples to a different type of
            molecular motion. Microwave radiation excites rotations. Infrared radiation excites
            vibrations. Visible and UV radiation excite electrons.
          </p>
          <p>
            The key idea is quantization. Molecules occupy discrete energy levels. A molecule
            absorbs a photon only when the photon energy exactly matches the energy gap between two
            levels. This absorption principle applies to every region of the spectrum.
          </p>
          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>
              Molecules are quantum systems. Their wavefunctions must satisfy boundary conditions,
              periodic rotation or confined vibration, which admits only specific energy
              eigenvalues. A photon can only be fully absorbed; partial absorption is forbidden by
              energy conservation. Therefore absorption appears as sharp lines at specific
              frequencies.
            </p>
          </div>
          <p>
            Emission is the reverse: a molecule in an excited state releases a photon when it drops
            to a lower level. Both absorption and emission occur at the same set of frequencies for
            a given molecule.
          </p>
          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Stimulated emission</span>
              <p>
                Rate depends on radiation field intensity. The emitted photon is coherent with the
                incoming photon, with the same frequency, direction, and phase. This is the basis of
                laser amplification.
              </p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Spontaneous emission</span>
              <p>
                Rate is independent of the radiation field, set by the Einstein A coefficient.
                Emission is isotropic. It dominates at high frequencies where A is large.
              </p>
            </div>
          </div>
          <table className="lrn-table">
            <thead>
              <tr>
                <th>Region</th>
                <th>Wavelength / wavenumber</th>
                <th>Transition type</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>UV</td>
                <td>10–400 nm</td>
                <td>{`Electronic ($\\pi^*\\leftarrow\\pi$, $\\pi^*\\leftarrow n$, $\\sigma^*\\leftarrow\\sigma$)`}</td>
              </tr>
              <tr>
                <td>Visible</td>
                <td>400–750 nm</td>
                <td>Electronic (d–d, charge transfer)</td>
              </tr>
              <tr>
                <td>Near-IR</td>
                <td>{`750–2500 nm (~4000–13000 cm$^{-1}$)`}</td>
                <td>Vibrational overtones and combinations</td>
              </tr>
              <tr>
                <td>Mid-IR</td>
                <td>{`2500–25000 nm (~400–4000 cm$^{-1}$)`}</td>
                <td>Fundamental vibrations</td>
              </tr>
              <tr>
                <td>Microwave</td>
                <td>{`0.1–30 cm (~0.03–10 cm$^{-1}$)`}</td>
                <td>Rotational transitions</td>
              </tr>
              <tr>
                <td>Radio</td>
                <td>cm–m</td>
                <td>Nuclear spin (NMR), electron spin (EPR)</td>
              </tr>
            </tbody>
          </table>
          <EMSpectrumViz />
        </>,

        <>
          <div className="lrn-header">
            <h2>Absorption, Emission, and Raman Scattering</h2>
          </div>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              You shine a laser on a sample. Most light passes through. Some scatters back. Two
              types of scattered light appear at different wavelengths. What are they, and where do
              those wavelengths come from?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                Stokes-shifted light (red-shifted) comes from molecules that gain vibrational energy
                during scattering. Anti-Stokes light (blue-shifted) comes from molecules that lose
                vibrational energy. The frequency shift equals the vibrational frequency of the
                mode, not the excitation frequency.
              </p>
            </details>
          </div>
          <p>
            When radiation interacts with molecules, three outcomes are possible: absorption,
            elastic scattering (Rayleigh), or inelastic scattering (Raman). The Einstein
            coefficients quantify rates. The B coefficient governs both stimulated absorption and
            stimulated emission. By time-reversal symmetry, {`$B_{12} = B_{21}$`} for non-degenerate
            states. The A coefficient governs spontaneous emission:
          </p>
          <p className="lrn-eq lrn-eq-hero">{`$$A_{21} = \\frac{8\\pi h\\nu^3}{c^3}\\,B_{21}$$`}</p>
          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>
              The factor {`$\\nu^3$`} makes A grow fast as frequency rises. At low frequencies A is
              negligible, so stimulated processes dominate. At high frequencies spontaneous emission
              takes over. This also explains why NMR (radio frequencies) needs large populations to
              detect signals, because spontaneous emission is negligible, so you must detect
              stimulated processes.
            </p>
          </div>
          <p>
            Raman scattering works through a virtual state. The molecule absorbs a photon, reaches a
            short-lived virtual state, then emits. If the molecule gains vibrational energy, the
            emitted photon is red-shifted (Stokes, lower frequency). If the molecule loses
            vibrational energy, the emitted photon is blue-shifted (anti-Stokes). Anti-Stokes lines
            are weaker at room temperature because few molecules occupy excited vibrational states
            initially.
          </p>
          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>
              Why does Raman scattering not require the photon energy to match any molecular energy
              gap?
            </p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                The virtual state is not a real quantum state. The molecule does not have to climb
                to a real excited level. It scatters off the virtual state, and the frequency shift
                equals the vibrational frequency. This is why one laser can probe all vibrational
                modes simultaneously. The excitation wavelength is irrelevant to the mode energies.
              </p>
            </details>
          </div>
        </>,

        <>
          <div className="lrn-header">
            <h2>The Beer–Lambert Law and Absorption Intensity</h2>
          </div>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              You double the concentration of a dye in solution. Does the light passing through also
              halve? What if you double the path length instead?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                Doubling concentration doubles absorbance A, so transmittance T is squared, not
                halved. Doubling path length has the same effect as doubling concentration.
                Absorbance is linear in both; transmittance is multiplicative.
              </p>
            </details>
          </div>
          <p>
            The Beer–Lambert law relates absorbance to concentration and path length. Absorbance{' '}
            {`$A$`} is:
          </p>
          <p className="lrn-eq lrn-eq-hero">{`$$A = \\varepsilon[J]\\,l = \\log\\!\\left(\\frac{I_0}{I}\\right)$$`}</p>
          <p>
            Here {`$\\varepsilon$`} is the molar absorption coefficient {`$($`}units:{' '}
            {`$\\text{dm}^3\\,\\text{mol}^{-1}\\,\\text{cm}^{-1})$`}, {`$[J]$`} is the molar
            concentration, and {`$l$`} is the path length in cm. Transmittance is {`$T = I/I_0$`}.
          </p>
          <BeerLambertViz />
          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>
              Why does absorbance use log base 10, and what does it mean that A is linear in [J]?
            </p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                The base-10 convention makes {`$\\varepsilon$`} values independent of base. Doubling{' '}
                {`$[J]$`} exactly doubles A because absorbance is linear, but T changes
                multiplicatively: {`$T \\to T^2$`}. This is why you always work with A when
                comparing concentrations. The relationship is simple and additive.
              </p>
            </details>
          </div>
          <h3>Worked Example: Beer–Lambert Calculation</h3>
          <p>
            A dye solution has{' '}
            {`$\\varepsilon = 1.5 \\times 10^4\\,\\text{dm}^3\\,\\text{mol}^{-1}\\,\\text{cm}^{-1}$`}
            , {`$[J] = 2.0 \\times 10^{-4}\\,\\text{mol}\\,\\text{dm}^{-3}$`}, and {`$l = 1.0$`} cm.
          </p>
          <p>{`Then $A = (1.5 \\times 10^4)(2.0 \\times 10^{-4})(1.0) = 3.0$. Therefore $T = 10^{-3.0} = 0.001$. Only 0.1% of light passes through.`}</p>
          <p>The microscopic basis for absorption intensity is the transition dipole moment:</p>
          <p className="lrn-eq">{`$$\\mu_{fi} = \\langle \\psi_f | \\hat{\\mu} | \\psi_i \\rangle$$`}</p>
          <p>
            A transition is allowed when {`$\\mu_{fi} \\neq 0$`}. If {`$\\mu_{fi} = 0$`} by
            symmetry, the transition is forbidden and the band is absent or very weak.
          </p>
          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>
              Classical electrodynamics requires a charge distribution to oscillate to radiate.
              Quantum mechanically, the oscillation amplitude between states i and f is encoded in{' '}
              {`$\\mu_{fi}$`}. When {`$\\mu_{fi} = 0$`}, the charge distribution has no oscillating
              component at the transition frequency, and the photon cannot couple to the molecule.
            </p>
          </div>
        </>,

        <>
          <div className="lrn-header">
            <h2>Spectrometer Design: Sources, Gratings, Interferometers, Detectors</h2>
          </div>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              You need to record an IR spectrum from 400 to 4000 cm{`$^{-1}$`}. Which gives better
              signal-to-noise ratio in less time: a scanning grating instrument or a
              Fourier-transform interferometer?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                The FT interferometer wins. It detects all wavelengths simultaneously throughout the
                measurement (Fellgett multiplex advantage), giving a {`$\\sqrt{N}$`} improvement in
                signal-to-noise ratio where N is the number of resolved spectral elements.
              </p>
            </details>
          </div>
          <p>
            A spectrometer has four core components: a radiation source, a dispersing element or
            interferometer, a sample region, and a detector. The Michelson interferometer replaces
            the grating. One mirror moves, changing the path difference between two arms. The
            detector records intensity as a function of mirror position, the{' '}
            <strong>interferogram</strong>. A Fourier transform converts the interferogram into the
            spectrum.
          </p>
          <SpectrometerBlockViz />
          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>
              Detector noise is constant per unit time. In a scanning instrument, each resolution
              element receives signal for only a fraction of the total measurement time. In an FT
              instrument, every resolution element accumulates signal for the entire measurement.
              The result is a {`$\\sqrt{N}$`} improvement in signal-to-noise ratio for N resolution
              elements.
            </p>
          </div>
          <p>
            Sources include tungsten lamps (visible/near-IR), Globar thermal emitters (mid-IR), and
            Hg arc lamps (UV). Detectors include photomultiplier tubes (PMT) for visible/UV,
            charge-coupled devices (CCD) for multichannel detection, and thermal detectors (DTGS) or
            photovoltaic detectors (MCT, cooled) for the IR. Raman spectrometers use an intense
            monochromatic laser as the source and a CCD detector at right angles; a notch filter
            blocks the Rayleigh line.
          </p>
        </>,

        <>
          <div className="lrn-header">
            <h2>Spectral Linewidths: Doppler and Lifetime Broadening</h2>
          </div>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              A single molecule has perfectly sharp energy levels. Yet spectral lines always have
              finite width. Name two physical reasons for this, and which one you can reduce by
              cooling the sample.
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                Doppler broadening (thermal motion) can be reduced by cooling. Lifetime broadening
                (energy-time uncertainty) cannot be reduced. It is set by the quantum lifetime of
                the state and is independent of temperature.
              </p>
            </details>
          </div>
          <p>
            <strong>Doppler broadening</strong> arises because molecules move. A molecule moving
            toward the source sees a blue-shifted frequency; one moving away sees a red-shifted
            frequency. The observed linewidth is:
          </p>
          <p className="lrn-eq">{`$$\\delta\\tilde{\\nu}_{\\text{obs}} = \\frac{\\tilde{\\nu}_0}{c}\\sqrt{\\frac{8kT\\ln 2}{m}}$$`}</p>
          <p>
            This produces a Gaussian lineshape. Cooling the gas reduces Doppler broadening.
            Molecular beams eliminate it almost entirely.
          </p>
          <p>
            <strong>Lifetime broadening</strong> is the quantum uncertainty in energy of a state
            with finite lifetime {`$\\tau$`}. The energy–time uncertainty relation gives:
          </p>
          <p className="lrn-eq">{`$$\\delta E \\cdot \\tau \\approx \\hbar \\quad \\Rightarrow \\quad \\delta\\tilde{\\nu} = \\frac{1}{2\\pi c\\,\\tau}$$`}</p>
          <DopplerLifetimeViz />
          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Doppler broadening</span>
              <p>
                Inhomogeneous: different molecules contribute different shifted frequencies.
                Produces a Gaussian profile. Cooling removes it.
              </p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Lifetime broadening</span>
              <p>
                Homogeneous: every molecule equally obeys the uncertainty relation. Produces a
                Lorentzian profile. Cooling has no effect.
              </p>
            </div>
          </div>
          <h3>Worked Example: Lifetime Broadening</h3>
          <p>
            An excited state with {`$\\tau = 1.0 \\times 10^{-9}$`} s has a natural linewidth of{' '}
            {`$\\delta\\tilde{\\nu} = 1/(2\\pi c \\times 10^{-9}) \\approx 160$`} MHz. Expressed in
            wavenumber: approximately {`$0.005\\,\\text{cm}^{-1}$`}.
          </p>
        </>,

        <>
          <div className="lrn-header">
            <h2>Rotational Spectroscopy: Rigid Rotor, Rotational Constants, Microwave Spectra</h2>
          </div>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              You record the microwave spectrum of CO and observe equally spaced absorption lines.
              What molecular property does the spacing directly tell you?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                The spacing equals {`$2\\tilde{B}$`}, where {`$\\tilde{B} = h/(8\\pi^2 cI)$`}. From{' '}
                {`$\\tilde{B}$`} you calculate the moment of inertia I, and from I and the reduced
                mass you extract the bond length R.
              </p>
            </details>
          </div>
          <p>
            A diatomic molecule rotating about its center of mass behaves as a rigid rotor.
            Rotational energy in wavenumber units is:
          </p>
          <p className="lrn-eq lrn-eq-hero">{`$$\\tilde{F}(J) = \\tilde{B}\\,J(J+1)$$`}</p>
          <p>
            where the rotational constant is {`$\\tilde{B} = h/(8\\pi^2 cI)$`}. Larger molecules
            (larger I) have smaller {`$\\tilde{B}$`} and more closely spaced lines. The selection
            rule is {`$\\Delta J = \\pm 1$`}, and the gross selection rule requires a permanent
            electric dipole moment. Homonuclear diatomics (N{`$_2$`}, O{`$_2$`}, H{`$_2$`}) show no
            microwave spectrum.
          </p>
          <p>
            Lines appear at transition wavenumbers {`$\\tilde{\\nu} = 2\\tilde{B}(J+1)$`}, equally
            spaced by {`$2\\tilde{B}$`}.
          </p>
          <RigidRotorViz />
          <h3>Worked Example: Rotational Constant of CO</h3>
          <p>
            The {`$J=0\\to1$`} line of CO appears at {`$3.8435\\,\\text{cm}^{-1}$`}. Therefore{' '}
            {`$2\\tilde{B} = 3.8435$`} giving {`$\\tilde{B} = 1.9218\\,\\text{cm}^{-1}$`}. The
            moment of inertia{' '}
            {`$I = h/(8\\pi^2 c\\tilde{B}) = 1.456 \\times 10^{-46}\\,\\text{kg}\\,\\text{m}^2$`}.
            The bond length{' '}
            {`$R = \\sqrt{I/\\mu} = 1.128 \\times 10^{-10}\\,\\text{m} = 112.8\\,\\text{pm}$`}.
          </p>
          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>What is the non-obvious step in going from the line position to the bond length?</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                The experiment measures {`$\\tilde{B}$`} directly from the line spacing. You get I
                from {`$\\tilde{B}$`} by algebra. Then R follows from {`$I = \\mu R^2$`}, but only
                after knowing the reduced mass{' '}
                {`$\\mu = m_\\text{C}m_\\text{O}/(m_\\text{C}+m_\\text{O})$`} from atomic masses.
                The bond length is derived, not directly observed.
              </p>
            </details>
          </div>
        </>,

        <>
          <div className="lrn-header">
            <h2>Centrifugal Distortion and Symmetric/Asymmetric Tops</h2>
          </div>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              At very high J values, do lines in a rotational spectrum remain equally spaced? What
              physical effect causes them to deviate?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                No. Centrifugal force at high J stretches the bond, increasing I and decreasing the
                effective {`$\\tilde{B}$`}. Lines converge rather than remaining equally spaced.
              </p>
            </details>
          </div>
          <p>A real molecule is not perfectly rigid. The corrected rotational energy is:</p>
          <p className="lrn-eq">{`$$\\tilde{F}(J) = \\tilde{B}\\,J(J+1) - \\tilde{D}_J\\,J^2(J+1)^2$$`}</p>
          <p>
            where the centrifugal distortion constant is{' '}
            {`$\\tilde{D}_J = 4\\tilde{B}^3/\\tilde{\\nu}^2$`} (small correction, measurable at
            large J).
          </p>
          <CentrifugalDistortionViz />
          <p>
            Polyatomic molecules have three principal moments of inertia. Four rotor types exist:
            linear ({`$I_A = 0$`}), spherical top ({`$I_A = I_B = I_C$`}, e.g. CH{`$_4$`}), prolate
            symmetric top ({`$I_A < I_B = I_C$`}, e.g. CH{`$_3$`}Cl), oblate symmetric top (
            {`$I_A = I_B < I_C$`}, e.g. BCl{`$_3$`}), and asymmetric top (all three different, e.g.
            H{`$_2$`}O). Symmetric tops need two quantum numbers J and K to label levels. K sets how
            much angular momentum points along the top axis.
          </p>
          <p>
            Nuclear spin statistics control intensity patterns. For H{`$_2$`} (fermions,{' '}
            {`$I = 1/2$`}), odd-J states are ortho-H{`$_2$`} (weight 3) and even-J states are para-H
            {`$_2$`} (weight 1), giving 3:1 intensity alternation in rotational Raman spectra. For{' '}
            {`$^{16}$`}O{`$_2$`} (bosons, {`$I=0$`}), only odd-J levels exist, so alternate lines
            are entirely absent.
          </p>
          <NuclearSpinIntensityViz />
          <p>
            The <strong>Stark effect</strong> measures permanent dipole moments. A static electric
            field shifts and splits rotational energy levels. The size of each shift depends on the
            dipole moment and field strength. Measuring the splitting at a known field gives the
            dipole moment precisely.
          </p>
        </>,

        <>
          <div className="lrn-header">
            <h2>Rotational Raman Spectroscopy</h2>
          </div>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              CO{`$_2$`} has no permanent dipole moment and therefore no microwave rotational
              spectrum. Can you still determine its rotational constant? What technique would you
              use?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                Yes. Use rotational Raman spectroscopy. The selection rule for Raman requires only
                anisotropic polarizability, not a permanent dipole. CO{`$_2$`} has anisotropic
                polarizability and is Raman active.
              </p>
            </details>
          </div>
          <p>
            The gross selection rule for rotational Raman is that the molecular polarizability must
            change during rotation. Linear molecules and symmetric tops are Raman active.
            Homonuclear diatomics like N{`$_2$`}, O{`$_2$`}, and H{`$_2$`} show rotational Raman
            spectra even though they have no permanent dipole.
          </p>
          <p>
            The selection rule is {`$\\Delta J = 0, \\pm 2$`} (not {`$\\pm 1$`} as in microwave).
            The Stokes S-branch ({`$\\Delta J = +2$`}) frequency shifts are:
          </p>
          <p className="lrn-eq">{`$$\\Delta\\tilde{\\nu} = \\tilde{B}(4J + 6)$$`}</p>
          <p>
            Lines appear at shifts of {`$6\\tilde{B}$`}, {`$10\\tilde{B}$`}, {`$14\\tilde{B}$`} from
            the exciting line.
          </p>
          <RotationalRamanViz />
          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Microwave spectroscopy</span>
              <p>
                Requires permanent dipole. Selection rule {`$\\Delta J = \\pm 1$`}. Lines spaced by{' '}
                {`$2\\tilde{B}$`}. More precise for polar molecules.
              </p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Rotational Raman</span>
              <p>
                Requires anisotropic polarizability. Selection rule {`$\\Delta J = 0, \\pm 2$`}.
                Lines spaced by {`$4\\tilde{B}$`}. The only way to get rotational constants of
                homonuclear diatomics.
              </p>
            </div>
          </div>
        </>,

        <>
          <div className="lrn-header">
            <h2>Vibrational Spectroscopy of Diatomics: Harmonic Oscillator and Morse Potential</h2>
          </div>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              You measure the IR absorption frequency of HCl and of DCl (deuterium replacing
              hydrogen). Which absorbs at lower wavenumber? How large is the shift?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                DCl absorbs at lower wavenumber. The vibrational frequency scales as{' '}
                {`$1/\\sqrt{m_\\text{eff}}$`}. Replacing H with D roughly doubles the reduced mass,
                so the frequency falls by {`$\\sqrt{2}$`}. DCl absorbs at about 70% of the HCl
                frequency.
              </p>
            </details>
          </div>
          <p>
            A diatomic vibrating along its bond obeys the harmonic oscillator model. The vibrational
            terms are:
          </p>
          <p className="lrn-eq lrn-eq-hero">{`$$\\tilde{G}(v) = \\tilde{\\nu}\\!\\left(v + \\tfrac{1}{2}\\right)$$`}</p>
          <p>where the fundamental wavenumber is:</p>
          <p className="lrn-eq">{`$$\\tilde{\\nu} = \\frac{1}{2\\pi c}\\sqrt{\\frac{k_f}{m_\\text{eff}}}$$`}</p>
          <p>
            The effective (reduced) mass is {`$m_\\text{eff} = m_1 m_2/(m_1 + m_2)$`}. The IR
            selection rule for the harmonic oscillator is {`$\\Delta v = \\pm 1$`}, and the gross
            rule requires the dipole moment to change during vibration.
          </p>
          <h3>Worked Example: Force Constant of HCl</h3>
          <p>
            HCl has a fundamental at {`$\\tilde{\\nu} = 2886\\,\\text{cm}^{-1}$`}. The reduced mass
            is {`$m_\\text{eff} = 0.9796\\,\\text{u} = 1.627 \\times 10^{-27}\\,\\text{kg}$`}. The
            force constant:{' '}
            {`$k_f = m_\\text{eff}(2\\pi c\\tilde{\\nu})^2 = 481\\,\\text{N}\\,\\text{m}^{-1}$`}.
          </p>
          <p>
            The real potential is the <strong>Morse potential</strong>:
          </p>
          <p className="lrn-eq">{`$$V(r) = D_e\\left(1 - e^{-a(r-r_e)}\\right)^2, \\quad a = \\sqrt{\\frac{k_f}{2D_e}}$$`}</p>
          <HarmonicMorseViz />
          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Harmonic oscillator</span>
              <p>
                Equally spaced levels. No dissociation. Only {`$\\Delta v = \\pm 1$`} allowed. No
                overtones.
              </p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Morse potential</span>
              <p>
                Levels converge toward dissociation. Dissociates at energy {`$D_e$`}. Overtones
                weakly allowed. Real molecules always use this model.
              </p>
            </div>
          </div>
        </>,

        <>
          <div className="lrn-header">
            <h2>Anharmonicity, Overtones, and the Birge–Sponer Plot</h2>
          </div>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              You record IR lines at approximately 2886, 5668, and 8347 cm{`$^{-1}$`}. The spacings
              are decreasing. What does this pattern tell you about the potential energy curve?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                Decreasing spacings signal anharmonicity. The Morse potential has levels that
                converge as v increases. The molecule is not a perfect harmonic oscillator. The
                spacings between successive lines give the level separations directly.
              </p>
            </details>
          </div>
          <p>Anharmonic energy levels are:</p>
          <p className="lrn-eq">{`$$\\tilde{G}(v) = \\tilde{\\nu}\\!\\left(v + \\tfrac{1}{2}\\right) - x_e\\tilde{\\nu}\\!\\left(v + \\tfrac{1}{2}\\right)^2$$`}</p>
          <p>
            where {`$x_e$`} is the anharmonicity constant (typically 0.01–0.05). The level spacings
            decrease linearly:
          </p>
          <p className="lrn-eq">{`$$\\Delta\\tilde{G}_{v+1/2} = \\tilde{\\nu} - 2(v+1)\\,x_e\\tilde{\\nu}$$`}</p>
          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>
              The harmonic oscillator wavefunctions are orthogonal for {`$|\\Delta v| > 1$`}, making
              overtone transition dipole moments exactly zero. Anharmonicity changes the shape of
              wavefunctions, breaking this strict orthogonality. The matrix elements become small
              but nonzero. Overtone intensity is proportional to {`$x_e$`}, so overtones are weaker
              by roughly {`$x_e$`} compared to the fundamental.
            </p>
          </div>
          <p>
            The <strong>Birge–Sponer extrapolation</strong> uses decreasing level spacings to
            estimate dissociation energy. Plot {`$\\Delta\\tilde{G}$`} against {`$v+1$`} and you get
            a straight line. The x-intercept is the vibrational quantum number at dissociation. The
            dissociation energy {`$D_0$`} (from {`$v=0$`}) equals the area under the line.
          </p>
          <BirgeSponerViz />
          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>
              Why does {`$D_0$`} equal the area under the Birge–Sponer plot, not the y-intercept?
            </p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                Each bar of width 1 in the plot has height {`$\\Delta\\tilde{G}$`}, which equals the
                energy gap between successive vibrational levels. Summing all gaps from {`$v=0$`} to
                dissociation gives the total energy to break the bond from {`$v=0$`}, and that sum
                is the area. The y-intercept is just {`$\\tilde{\\nu}$`}, which is the gap from{' '}
                {`$v=0$`} to {`$v=1$`} alone.
              </p>
            </details>
          </div>
          <div className="lrn-faded">
            <div className="lrn-faded-phase">
              <span className="lrn-faded-label">COMPLETE EXAMPLE</span>
              <p>
                For I{`$_2$`}: {`$\\tilde{\\nu} = 214.6\\,\\text{cm}^{-1}$`}, {`$x_e = 0.00614$`}.
                The level spacing at {`$v$`} is{' '}
                {`$\\Delta\\tilde{G} = 214.6 - 2(v+1)(0.00614)(214.6) = 214.6 - 2.636(v+1)$`}. The
                line extrapolates to zero at {`$v \\approx 81$`}. Area under line gives{' '}
                {`$D_0 \\approx 12550\\,\\text{cm}^{-1} = 1.558\\,\\text{eV}$`}.
              </p>
            </div>
            <div className="lrn-faded-phase">
              <span className="lrn-faded-label">YOUR TURN: PARTIAL</span>
              <p>
                For a molecule with {`$\\tilde{\\nu} = 500\\,\\text{cm}^{-1}$`} and{' '}
                {`$x_e = 0.020$`}: write the expression for {`$\\Delta\\tilde{G}_{v+1/2}$`} and find
                the value of v where {`$\\Delta\\tilde{G} = 0$`}.
              </p>
              <p>
                {`$\\Delta\\tilde{G} = 500 - 2(v+1)(0.020)(500) = 500 - 20(v+1) = 0$`}, so{' '}
                {`$v+1 = 25$`}, i.e. {`$v = 24$`}.
              </p>
            </div>
            <div className="lrn-faded-phase">
              <span className="lrn-faded-label">INDEPENDENT PRACTICE</span>
              <p>
                For HCl: {`$\\tilde{\\nu} = 2886\\,\\text{cm}^{-1}$`}, {`$x_e = 0.0174$`}. Find the
                level spacing at {`$v = 5$`} and estimate {`$D_0$`} from the Birge–Sponer formula{' '}
                {`$D_0 \\approx \\tilde{\\nu}^2/(4x_e\\tilde{\\nu})$`}.
              </p>
            </div>
          </div>
        </>,

        <>
          <div className="lrn-header">
            <h2>Vibration–Rotation Spectra: P, Q, R Branches</h2>
          </div>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              The vibrational fundamental of HCl appears as a cluster of lines, not a single peak,
              with a gap in the middle. What causes this fine structure, and why is there a gap?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                Molecules vibrate and rotate simultaneously. When a vibrational transition occurs, J
                can also change by {`$\\pm 1$`}. R-branch lines ({`$\\Delta J = +1$`}) sit above the
                band center; P-branch lines ({`$\\Delta J = -1$`}) sit below. The gap is at the band
                center where the Q branch ({`$\\Delta J = 0$`}) would appear. But for{' '}
                {`$^1\\Sigma$`} ground-state diatomics, the Q branch is absent.
              </p>
            </details>
          </div>
          <p>The P and R branch positions are:</p>
          <p className="lrn-eq">{`$$\\tilde{\\nu}_R = \\tilde{\\nu}_\\text{vib} + 2\\tilde{B}(J+1), \\quad \\Delta J = +1$$`}</p>
          <p className="lrn-eq">{`$$\\tilde{\\nu}_P = \\tilde{\\nu}_\\text{vib} - 2\\tilde{B}J, \\quad \\Delta J = -1$$`}</p>
          <p>
            For {`$\\Sigma \\to \\Sigma$`} transitions, the Q branch ({`$\\Delta J = 0$`}) is
            absent. The gap at {`$\\tilde{\\nu}_\\text{vib}$`} is the band center.
          </p>
          <VibRotBranchesViz />
          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>
              P(J) and R(J) label the J value in the lower state. What does R(0) mean physically?
            </p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                R(0) means the transition starts at {`$J=0$`} in {`$v=0$`} and goes to {`$J=1$`} in{' '}
                {`$v=1$`}. The label J refers to the lower state quantum number. So R(0) is the
                lowest-frequency R-branch line, at {`$\\tilde{\\nu}_\\text{vib} + 2\\tilde{B}$`}.
              </p>
            </details>
          </div>
          <p>
            The <strong>combination differences method</strong> extracts rotational constants
            without knowing the band origin. The difference R(J-1) {`$-$`} P(J+1){' '}
            {`$= 4\\tilde{B}'(J + \\tfrac{1}{2})$`} depends only on the upper state{' '}
            {`$\\tilde{B}'$`}. The difference R(J) {`$-$`} P(J){' '}
            {`$= 4\\tilde{B}''(J + \\tfrac{1}{2})$`} depends only on the lower state{' '}
            {`$\\tilde{B}''$`}.
          </p>
        </>,

        <>
          <div className="lrn-header">
            <h2>Vibrational Spectroscopy of Polyatomics: Normal Modes and IR/Raman Activity</h2>
          </div>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              Water (H{`$_2$`}O) has 3 atoms. How many vibrational modes does it have? What about CO
              {`$_2$`} with 3 atoms? Why should the answers differ?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                H{`$_2$`}O is nonlinear: {`$3(3)-6 = 3$`} modes. CO{`$_2$`} is linear:{' '}
                {`$3(3)-5 = 4$`} modes. Linear molecules lose one rotation and gain one vibration
                relative to nonlinear molecules of the same atom count.
              </p>
            </details>
          </div>
          <p>
            For a nonlinear molecule: {`$N_\\text{vib} = 3N - 6$`}. For a linear molecule:{' '}
            {`$N_\\text{vib} = 3N - 5$`}.
          </p>
          <CO2NormalModesViz />
          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>
              A linear molecule's symmetry axis has zero moment of inertia. Rotation about that axis
              stores no energy and is not quantized. Only 2 rotational degrees of freedom exist,
              leaving one more vibrational mode compared to a nonlinear molecule of the same atom
              count.
            </p>
          </div>
          <p>
            <strong>IR activity</strong> requires the dipole moment to change during the normal
            mode. The symmetric stretch of CO{`$_2$`} keeps the molecule symmetric, with always zero
            dipole. It is IR inactive. The asymmetric stretch and bends create a changing dipole and
            are IR active.
          </p>
          <p>
            <strong>Raman activity</strong> requires the polarizability to change during the mode.
            The symmetric stretch of CO{`$_2$`} changes the size of the electron cloud. It is Raman
            active.
          </p>
          <p>
            The <strong>exclusion rule</strong> applies to centrosymmetric molecules (CO{`$_2$`}, C
            {`$_2$`}H{`$_2$`}, benzene): no vibrational mode can be simultaneously IR active and
            Raman active.
          </p>
          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">IR active</span>
              <p>
                Dipole moment must change during the mode. A permanent dipole is not required. Only
                the instantaneous dipole during vibration must oscillate.
              </p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Raman active</span>
              <p>
                Polarizability must change during the mode. For centrosymmetric molecules, the
                exclusion rule makes IR and Raman activity mutually exclusive.
              </p>
            </div>
          </div>
        </>,

        <>
          <div className="lrn-header">
            <h2>Symmetry Analysis of Vibrational Spectra</h2>
          </div>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              You have the character table for C{`$_{2v}$`} symmetry (the group of water). How do
              you use it to predict which of H{`$_2$`}O's three normal modes are IR active and which
              are Raman active?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                A mode is IR active if its symmetry species transforms as x, y, or z. It is Raman
                active if it transforms as a polarizability component (x{`$^2$`}, y{`$^2$`}, z
                {`$^2$`}, xy, xz, yz). Find the symmetry species of each mode and check the
                character table.
              </p>
            </details>
          </div>
          <p>
            Every normal mode transforms as one of the irreducible representations of the molecule's
            point group. Activity rules follow directly from symmetry:
          </p>
          <ul className="lrn-list">
            <li>
              <strong>IR active</strong> if the mode's symmetry species is the same as x, y, or z
              (translational symmetry species in the character table).
            </li>
            <li>
              <strong>Raman active</strong> if the mode's symmetry species matches one of the
              polarizability components: {`$x^2$`}, {`$y^2$`}, {`$z^2$`}, {`$xy$`}, {`$xz$`}, or{' '}
              {`$yz$`}.
            </li>
          </ul>
          <h3>
            Worked Example: H{`$_2$`}O Normal Modes in C{`$_{2v}$`}
          </h3>
          <p>
            The three normal modes of H{`$_2$`}O in C{`$_{2v}$`} are: symmetric stretch (A{`$_1$`}),
            asymmetric stretch (B{`$_1$`}), and scissors bend (A{`$_1$`}). All three are IR active
            (A{`$_1$`} transforms as z; B{`$_1$`} transforms as x). All three are Raman active (A
            {`$_1$`} and B{`$_1$`} both appear in polarizability columns). H{`$_2$`}O has no
            inversion center, so the exclusion rule does not apply.
          </p>
          <p>
            For CO{`$_2$`} in D{`$_{\\infty h}$`}, the symmetric stretch is {`$\\Sigma_g^+$`}{' '}
            (gerade). IR requires ungerade symmetry (u), so the symmetric stretch is Raman only. The
            asymmetric stretch is {`$\\Sigma_u^+$`}: IR active, Raman inactive. The exclusion rule
            follows: in any group with inversion symmetry, x, y, z are always ungerade while{' '}
            {`$x^2$`}, {`$y^2$`}, {`$z^2$`} etc. are always gerade. A mode cannot be both.
          </p>
        </>,

        <>
          <div className="lrn-header">
            <h2>Electronic Spectra: Term Symbols, Franck–Condon Principle, Band Structure</h2>
          </div>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              A diatomic molecule in its ground state absorbs UV light and is promoted to an excited
              state. Instead of one sharp line, you see a progression of many lines. What physical
              principle explains this?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                The Franck–Condon principle. Electronic transitions are so fast that nuclei cannot
                move. The transition is vertical on a potential energy diagram. If the excited state
                has a different bond length, many vibrational levels have significant overlap with
                the ground state wavefunction, producing a long progression of lines.
              </p>
            </details>
          </div>
          <p>
            Diatomic electronic states are labeled by term symbols encoding electronic angular
            momentum. {`$\\Lambda$`} is the quantum number for the component of orbital angular
            momentum along the bond axis ({`$\\Lambda = 0, 1, 2$`} gives{' '}
            {`$\\Sigma, \\Pi, \\Delta$`}). S is the total electron spin; multiplicity is {`$2S+1$`}.
            Gerade (g) or ungerade (u) indicates inversion parity.
          </p>
          <p>Selection rules for electronic transitions:</p>
          <ul className="lrn-list">
            <li>{`$\\Delta\\Lambda = 0, \\pm 1$`}</li>
            <li>{`$\\Delta S = 0$`} (spin must be conserved)</li>
            <li>
              {`$g \\leftrightarrow u$`} only (Laporte parity rule, for centrosymmetric molecules)
            </li>
            <li>
              {`$\\Sigma^+ \\leftrightarrow \\Sigma^+$`} and{' '}
              {`$\\Sigma^- \\leftrightarrow \\Sigma^-$`} (reflection rule)
            </li>
          </ul>
          <p>
            The <strong>Franck–Condon factor</strong> for a transition from {`$v$`} to {`$v'$`} is{' '}
            {`$|\\langle v'|v \\rangle|^2$`}, the square of the overlap integral between the two
            vibrational wavefunctions. The larger the overlap, the more intense the transition.
          </p>
          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>
              Nuclear masses are ~2000× larger than electron mass. During the ~10{`$^{-16}$`} s
              timescale of electronic rearrangement, nuclear motion is negligible (nuclei move on
              ~10{`$^{-13}$`} s timescale). The nuclei effectively freeze during the transition. The
              transition is vertical on a potential energy diagram, and the nuclear wavefunction
              overlap determines which vibrational levels are populated in the excited state.
            </p>
          </div>
          <p>
            If the excited state geometry is very similar to the ground state (same bond length),{' '}
            {`$v'=0$`} has the largest overlap with {`$v=0$`} and the spectrum shows a short
            progression. If the excited state has a longer bond length (common in excited{' '}
            {`$\\pi^*$`} states), the maximum Franck–Condon factor shifts to {`$v' > 0$`}, giving a
            long vibrational progression.
          </p>
          <FranckCondonViz />
        </>,

        <>
          <div className="lrn-header">
            <h2>d-Metal Complexes: Ligand Field Transitions and Charge-Transfer Bands</h2>
          </div>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              An octahedral metal complex appears colored. What type of transition causes the color,
              and why is the absorption band relatively weak?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                d–d transitions: an electron moves from t{`$_{2g}$`} to e{`$_g$`} orbitals. These
                are weak because the Laporte rule formally forbids d–d transitions (both states are
                gerade). Vibronic coupling partially allows them, giving{' '}
                {`$\\varepsilon \\approx 1\\text{–}100\\,\\text{dm}^3\\,\\text{mol}^{-1}\\,\\text{cm}^{-1}$`}
                .
              </p>
            </details>
          </div>
          <p>
            In an octahedral complex, the d orbitals split into a lower {`$t_{2g}$`} set and a
            higher {`$e_g$`} set. The energy gap is {`$\\Delta_o$`} (10Dq). Absorption at{' '}
            {`$\\Delta_o$`} drives a d–d transition and gives the complex its color.
          </p>
          <p>
            <strong>Charge-transfer (CT) transitions</strong> are much more intense (
            {`$\\varepsilon \\sim 10^3\\text{–}10^5\\,\\text{dm}^3\\,\\text{mol}^{-1}\\,\\text{cm}^{-1}$`}
            ). They are Laporte allowed because they move an electron between orbitals of different
            symmetry origin (ligand p vs. metal d).
          </p>
          <ul className="lrn-list">
            <li>
              <strong>LMCT</strong> (ligand-to-metal charge transfer): electron moves from ligand
              orbital to metal d orbital. Example: the purple of [MnO{`$_4$`}]{`$^-$`} from LMCT.
            </li>
            <li>
              <strong>MLCT</strong> (metal-to-ligand charge transfer): electron moves from metal d
              orbital to a low-lying ligand {`$\\pi^*$`} orbital. Common with CO and bipyridyl
              ligands.
            </li>
          </ul>
          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">d–d transitions</span>
              <p>
                Laporte forbidden ({`$g\\leftrightarrow g$`}). {`$\\varepsilon = 1\\text{–}100$`}.
                Metal-centred. Sensitive to ligand field strength {`$\\Delta_o$`}. Give pale colors.
              </p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Charge-transfer transitions</span>
              <p>
                Laporte allowed (different symmetry origins). {`$\\varepsilon = 10^3\\text{–}10^5$`}
                . Move electrons between metal and ligand. Give intense colors. Permanganate purple
                is LMCT, not d–d.
              </p>
            </div>
          </div>
        </>,

        <>
          <div className="lrn-header">
            <h2>Chromophores and UV–Vis Spectroscopy</h2>
          </div>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              Acetone has a carbonyl group (C=O) and absorbs UV light in two distinct bands at very
              different wavelengths. What electronic transitions cause each band?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                A strong {`$\\pi^*\\leftarrow\\pi$`} band near 166 nm (
                {`$\\varepsilon \\approx 10^4$`}) from the C=O pi system. A weak{' '}
                {`$\\pi^*\\leftarrow n$`} band near 270 nm ({`$\\varepsilon \\approx 20$`}) from a
                lone pair on oxygen. The n to {`$\\pi^*$`} gap is smaller, so it appears at longer
                wavelength despite being weaker.
              </p>
            </details>
          </div>
          <p>
            A <strong>chromophore</strong> is a group within a molecule responsible for light
            absorption. Common chromophores include carbonyl (C=O), nitro (NO{`$_2$`}), azo (N=N),
            and conjugated {`$\\pi$`} systems.
          </p>
          <ul className="lrn-list">
            <li>
              <strong>{`$\\pi^*\\leftarrow\\pi$`} transition:</strong> large {`$\\varepsilon$`} (
              {`$10^3\\text{–}10^5$`}) because both orbitals are on the same conjugated system and
              the transition dipole moment is large. Conjugated dienes absorb around 200–250 nm.
              More conjugation shifts absorption to longer wavelengths.
            </li>
            <li>
              <strong>{`$\\pi^*\\leftarrow n$`} transition:</strong> small {`$\\varepsilon$`}{' '}
              (10–100) because the n orbital is perpendicular to the {`$\\pi$`} system, making the
              transition formally forbidden. Carbonyl compounds show this near 270–300 nm.
            </li>
          </ul>
          <ChromophoreUVVisViz />
          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>
              Why does the weaker {`$\\pi^*\\leftarrow n$`} band sit at longer wavelength than the
              stronger {`$\\pi^*\\leftarrow\\pi$`} band?
            </p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                Wavelength is set by the orbital gap, not by intensity. The lone-pair n orbital
                starts higher in energy than the bonding {`$\\pi$`} orbital. So the n to{' '}
                {`$\\pi^*$`} gap is smaller, putting that band at longer wavelength even though it
                is weak. Intensity and energy gap are independent quantities.
              </p>
            </details>
          </div>
          <p>
            <strong>Solvatochromism</strong> is the shift of an absorption band with solvent
            polarity. It arises from differential stabilization of the ground and excited states by
            the solvent.
          </p>
        </>,

        <>
          <div className="lrn-header">
            <h2>Excited-State Decay: Fluorescence, Phosphorescence, and Lasers</h2>
          </div>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              A molecule absorbs UV light and emits visible light. The emitted light is always at
              lower energy than the absorbed light. You warm the sample slightly and the emission
              shifts further red. Identify the process.
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                Fluorescence. After absorption to S{`$_1$`}, the molecule rapidly loses vibrational
                energy (picoseconds), then emits from the lowest level of S{`$_1$`} (nanoseconds).
                The lost vibrational energy is the Stokes shift. Warming increases vibrational
                population higher in S{`$_1$`}, leading to emission from higher levels and then more
                vibrational relaxation. More energy is lost, larger Stokes shift.
              </p>
            </details>
          </div>
          <p>
            The Jablonski diagram shows the competing decay pathways from an excited electronic
            state.
          </p>
          <JablonskiViz />
          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Fluorescence</span>
              <p>
                S{`$_1 \\to$`} S{`$_0$`} emission. Spin-allowed (singlet–singlet). Lifetime 1–10 ns.
                Occurs immediately after excitation. Stokes-shifted because vibrational energy is
                lost in S{`$_1$`} before emission.
              </p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Phosphorescence</span>
              <p>
                T{`$_1 \\to$`} S{`$_0$`} emission. Spin-forbidden (triplet–singlet). Lifetime
                microseconds to seconds. Requires intersystem crossing (S{`$_1 \\to$`} T{`$_1$`})
                first. Lower energy than fluorescence because T{`$_1$`} lies below S{`$_1$`}.
              </p>
            </div>
          </div>
          <p>
            The heavy-atom effect (Br, I substituents) enhances spin-orbit coupling, accelerating
            intersystem crossing and increasing phosphorescence yield.
          </p>
          <p>
            <strong>Laser action</strong> requires population inversion: more molecules in an
            excited state than in the lower state. Population inversion is impossible with two
            levels because stimulated absorption and emission have equal B coefficients. You can at
            best equalize populations.
          </p>
          <FourLevelLaserViz />
          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>
              In a four-level laser (e.g. Nd:YAG at 1064 nm): the pump lifts molecules to level 4,
              they rapidly relax to level 3 (the upper laser level), stimulated emission occurs from
              level 3 to level 2, and level 2 rapidly empties to level 1. Because level 2 is not the
              ground state and empties quickly, level 3 maintains a large population relative to
              level 2, sustaining inversion. Three- and four-level systems achieve this by having
              the terminal level of the laser transition depopulate rapidly.
            </p>
          </div>
        </>,

        <>
          <div className="lrn-header">
            <h2>NMR: Nuclear Spin, Resonance Condition, and the NMR Spectrometer</h2>
          </div>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              You place a sample in a 12 T magnetic field. The protons absorb radio waves at 511
              MHz. A {`$^{13}$`}C nucleus absorbs at a different frequency. What property of the
              nucleus determines which frequency it absorbs?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                The magnetogyric ratio {`$\\gamma_N$`}, which is unique to each isotope. For{' '}
                {`$^1$`}H: {`$\\gamma_N/2\\pi = 42.577$`} MHz T{`$^{-1}$`}. For {`$^{13}$`}C:{' '}
                {`$\\gamma_N/2\\pi = 10.7$`} MHz T{`$^{-1}$`}. At 12 T, {`$^{13}$`}C absorbs at 128
                MHz.
              </p>
            </details>
          </div>
          <p>
            Nuclei with {`$I > 0$`} behave as tiny magnets. In an external field {`$B_0$`}, the
            energy of spin state {`$m_I$`} is:
          </p>
          <p className="lrn-eq lrn-eq-hero">{`$$E_{m_I} = -m_I\\,g_I\\,\\mu_N\\,B_0$$`}</p>
          <p>The NMR resonance condition and the Larmor frequency are:</p>
          <p className="lrn-eq">{`$$h\\nu = g_I\\,\\mu_N\\,B_0 \\qquad \\nu_L = \\frac{\\gamma_N B_0}{2\\pi}$$`}</p>
          <ZeemanLarmorViz />
          <h3>Worked Example: {`$^1$`}H NMR at 12.0 T</h3>
          <p>
            For {`$^1$`}H, {`$\\gamma_N/2\\pi = 42.577$`} MHz T{`$^{-1}$`}. At {`$B_0 = 12.0$`} T:{' '}
            {`$\\nu_L = 42.577 \\times 12.0 = 511$`} MHz.
          </p>
          <p>
            NMR absorption intensity is proportional to the population difference{' '}
            {`$N_\\alpha - N_\\beta$`}. At 10 T and 293 K, only about 35 protons out of one million
            are in excess in the lower state. This tiny excess gives NMR its inherently low
            sensitivity.
          </p>
          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">NMR</span>
              <p>
                Probes nuclear spin transitions at radiofrequency (10–1000 MHz). Applies to all
                stable molecules with suitable nuclei. Closed-shell molecules only.
              </p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">EPR</span>
              <p>
                Probes electron spin transitions at microwave frequency (~9 GHz). Requires unpaired
                electrons. Electron Bohr magneton is ~2000× larger than {`$\\mu_N$`}, giving far
                greater inherent sensitivity per spin.
              </p>
            </div>
          </div>
        </>,

        <>
          <div className="lrn-header">
            <h2>Chemical Shift and Shielding Constants</h2>
          </div>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              All protons in a molecule should absorb at exactly 511 MHz at 12 T. Yet the {`$^1$`}H
              NMR spectrum of 1-methoxy-2-propanone shows three distinct peaks. Why?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                Surrounding electrons partially shield each nucleus from {`$B_0$`}. Different
                chemical environments have different electron densities, so each proton feels a
                slightly different effective field and absorbs at a slightly different frequency.
              </p>
            </details>
          </div>
          <p>
            The effective field at the nucleus is {`$B_\\text{eff} = B_0(1-\\sigma)$`} where{' '}
            {`$\\sigma$`} is the shielding constant. The chemical shift is:
          </p>
          <p className="lrn-eq lrn-eq-hero">{`$$\\delta = \\frac{\\nu_\\text{sample} - \\nu_\\text{ref}}{\\nu_\\text{ref}} \\times 10^6 \\quad (\\text{ppm})$$`}</p>
          <p>
            Because both numerator and denominator scale with {`$B_0$`}, {`$\\delta$`} is
            field-independent. Higher shielding (larger {`$\\sigma$`}) gives smaller {`$\\delta$`}{' '}
            (upfield). The <strong>Lamb formula</strong> gives the diamagnetic (local) shielding
            contribution:
          </p>
          <p className="lrn-eq">{`$$\\sigma_d = \\frac{e^2}{3m_e\\varepsilon_0 c^2}\\langle r^{-1}\\rangle$$`}</p>
          <p>
            Electron-withdrawing groups reduce {`$\\langle r^{-1}\\rangle$`} by pulling electron
            density away, deshielding the nucleus and moving the signal downfield. The{' '}
            <strong>neighbouring group contribution</strong> from ring currents in aromatic systems
            is:
          </p>
          <p className="lrn-eq">{`$$\\sigma \\propto \\frac{\\chi_\\parallel - \\chi_\\perp}{3} \\cdot \\frac{1-3\\cos^2\\theta}{R^3}$$`}</p>
          <p>
            Aromatic ring currents deshield protons in the ring plane ({`$\\theta \\approx 90°$`}):
            benzene protons appear at {`$\\delta \\approx 7.3$`} ppm. Protons above or below the
            ring would be shielded (but such geometry is geometrically unusual in most molecules).
          </p>
          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Chemical shift (NMR)</span>
              <p>
                Reflects electron density, ring currents, and electronegativity of neighbours.
                Reported as {`$\\delta$`} in ppm relative to TMS. Primarily a ground-state property.
              </p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">g-value (EPR)</span>
              <p>
                Deviation from free-electron {`$g_e = 2.0023$`} reflects spin-orbit coupling and
                excited-state mixing. Large deviation signals heavy atoms or small ligand field
                splitting. Has direct excited-state character.
              </p>
            </div>
          </div>
        </>,

        <>
          <div className="lrn-header">
            <h2>Spin–Spin Coupling and Fine Structure</h2>
          </div>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              You record the {`$^1$`}H NMR spectrum of ethanol (CH{`$_3$`}CH{`$_2$`}OH). The CH
              {`$_3$`} peak splits into three lines and the CH{`$_2$`} peak splits into four lines.
              What causes this splitting?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                Spin–spin coupling through bonding electrons. The CH{`$_2$`} group has 2 equivalent
                protons that split the CH{`$_3$`} into {`$2(2)(1/2)+1 = 3$`} lines (triplet). The CH
                {`$_3$`} has 3 equivalent protons that split the CH{`$_2$`} into{' '}
                {`$2(3)(1/2)+1 = 4$`} lines (quartet).
              </p>
            </details>
          </div>
          <p>
            Scalar coupling splits NMR peaks into multiplets. The coupling energy for two coupled
            spins is {`$E = hJ\\,m_{I,1}\\,m_{I,2}$`} where J is the coupling constant in Hz. For n
            equivalent spin-{`$\\tfrac{1}{2}$`} neighbours, Pascal's triangle gives n+1 lines with
            intensities 1:1, 1:2:1, 1:3:3:1 for n = 1, 2, 3.
          </p>
          <NMREthanolViz />
          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>Why do n equivalent neighbours give n+1 lines with Pascal's triangle intensities?</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                Each neighbour independently adds {`$+J/2$`} or {`$-J/2$`} to the local field. With
                n neighbours, there are n+1 distinct total fields (from all-up to all-down). The
                number of ways to produce each total field is the binomial coefficient, which gives
                Pascal's triangle intensities.
              </p>
            </details>
          </div>
          <p>
            The <strong>Karplus equation</strong> relates vicinal coupling to dihedral angle:
          </p>
          <p className="lrn-eq">{`$$ {}^3J_{HH} = A + B\\cos\\phi + C\\cos 2\\phi$$`}</p>
          <p>
            At {`$\\phi = 0°$`} and {`$180°$`} coupling is large; at {`$\\phi = 90°$`} coupling is
            small. In a peptide backbone, {`$\\alpha$`}-helices ({`$\\phi \\approx -57°$`}) give{' '}
            {`$ {}^3J \\approx 3\\text{–}4$`} Hz; {`$\\beta$`}-sheets ({`$\\phi \\approx -120°$`})
            give {`$ {}^3J \\approx 8\\text{–}10$`} Hz.
          </p>
          <KarplusViz />
          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">First-order (AX) spectra</span>
              <p>
                Chemical shift difference {`$\\gg J$`}. Simple multiplets with Pascal's triangle
                intensities. Coupling constant reads directly from splitting.
              </p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Second-order (AB) spectra</span>
              <p>
                {`$|\\Delta\\nu| \\approx J$`}. Inner lines intensify, outer lines weaken. Peaks
                shift toward each other. Full quantum treatment required.
              </p>
            </div>
          </div>
          <p>
            Exchange processes broaden NMR peaks. Peaks coalesce when the exchange lifetime reaches{' '}
            {`$\\tau_c = \\sqrt{2}/(\\pi\\,\\Delta\\nu)$`}. At fast exchange, one sharp peak appears
            at the average frequency.
          </p>
        </>,

        <>
          <div className="lrn-header">
            <h2>Pulse NMR, FID, and Fourier-Transform Techniques</h2>
          </div>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              You apply a short RF pulse to an NMR sample. After the pulse, the instrument records a
              decaying oscillating signal for several seconds. What is this signal, and how do you
              turn it into a recognizable spectrum?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                This is the free-induction decay (FID). The pulse tips all nuclear spins into the
                transverse plane where they precess and decay. Fourier transformation of the
                time-domain FID gives the frequency-domain NMR spectrum with one peak per chemically
                distinct nucleus.
              </p>
            </details>
          </div>
          <p>
            A 90° pulse tips the magnetization {`$M$`} from the z-axis into the xy-plane. The flip
            angle is {`$\\phi = \\gamma_N B_1 \\tau_p$`} where {`$B_1$`} is the RF field and{' '}
            {`$\\tau_p$`} is the pulse duration. After the pulse, {`$M$`} precesses and decays as
            the free-induction decay:
          </p>
          <p className="lrn-eq">{`$$S(t) = S_0\\cos(2\\pi\\nu_L t)\\,e^{-t/T_2}$$`}</p>
          <p>
            Fourier transformation converts the time-domain FID to the frequency-domain spectrum.
            The Lorentzian linewidth is:
          </p>
          <p className="lrn-eq">{`$$\\delta\\nu_{1/2} = \\frac{1}{\\pi T_2}$$`}</p>
          <FIDFTViz />
          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>Why does a single short pulse excite all chemical shifts simultaneously?</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                The pulse has a frequency bandwidth of approximately {`$1/\\tau_p$`}. For{' '}
                {`$\\tau_p = 10\\,\\mu\\text{s}$`}, bandwidth is ~100 kHz. This easily covers the
                entire {`$^1$`}H chemical shift range ({`$<12$`} ppm {`$\\times$`} 500 MHz {`$= 6$`}{' '}
                kHz). The single pulse replaces the slow frequency sweep of older continuous-wave
                instruments.
              </p>
            </details>
          </div>
          <p>
            In solid-state NMR, <strong>magic-angle spinning</strong> (MAS) at 54.74° to {`$B_0$`}{' '}
            averages anisotropic interactions (dipolar coupling, chemical shift anisotropy) to zero,
            recovering narrow lines. The magic angle zeroes the {`$(1-3\\cos^2\\theta)$`} factor in
            these interactions.
          </p>
        </>,

        <>
          <div className="lrn-header">
            <h2>
              Spin Relaxation: T{`$_1$`} and T{`$_2$`}
            </h2>
          </div>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              After a 90° pulse, two independent recovery processes begin. One restores the
              z-component of magnetization; the other kills the xy-component. Why are these
              described by different time constants?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                T{`$_1$`} (longitudinal) requires energy transfer from spins to the lattice. It
                depends on molecular motion at the Larmor frequency. T{`$_2$`} (transverse) is
                dephasing. Individual spins fan out due to local field variations, losing coherence
                without exchanging energy. Since T{`$_2$`} does not require the same energy-matching
                condition, it can be much shorter than T{`$_1$`}. Always T{`$_2 \\leq T_1$`}.
              </p>
            </details>
          </div>
          <p>
            <strong>T{`$_1$`} (spin-lattice relaxation)</strong> restores {`$M_z$`} toward
            equilibrium:
          </p>
          <p className="lrn-eq">{`$$M_z(t) = M_0\\left(1 - e^{-t/T_1}\\right)$$`}</p>
          <p>
            <strong>T{`$_2$`} (spin-spin relaxation)</strong> kills {`$M_{xy}$`} through dephasing:
          </p>
          <p className="lrn-eq">{`$$M_{xy}(t) = M_{xy,0}\\,e^{-t/T_2}$$`}</p>
          <T1T2Viz />
          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">T{`$_1$`} (longitudinal)</span>
              <p>
                Requires energy exchange between spins and lattice. Molecular motion at the Larmor
                frequency drives it. Controls the recycle delay between pulse sequences. For small
                molecules in solution: seconds.
              </p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">T{`$_2$`} (transverse)</span>
              <p>
                Dephasing, with no energy exchange required. Nearby spins create local field
                variations. Directly sets NMR linewidth: {`$\\delta\\nu = 1/(\\pi T_2)$`}. For large
                proteins: milliseconds.
              </p>
            </div>
          </div>
          <p>
            T{`$_1$`} is measured by <strong>inversion recovery</strong>: 180° pulse then variable
            delay {`$\\tau$`} then 90° pulse. {`$M_z$`} recovers as {`$M_0(1 - 2e^{-\\tau/T_1})$`}.
            T{`$_2$`} is measured with a <strong>spin-echo</strong> sequence (90°–{`$\\tau$`}–180°–
            {`$\\tau$`}) which refocuses field inhomogeneity.
          </p>
          <p>
            The <strong>nuclear Overhauser effect (NOE)</strong> is a dipole-dipole cross-relaxation
            effect. Saturating one proton changes the intensity of a nearby proton. NOE falls as{' '}
            {`$r^{-6}$`}, making it sensitive only to spins within ~0.5 nm. Maximum enhancement:{' '}
            {`$\\eta_\\text{max} = \\gamma_H/(2\\gamma_C) \\approx 1.99$`} for {`$^{13}$`}C
            irradiated by {`$^1$`}H.
          </p>
          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>
              The dipole-dipole interaction energy falls as {`$1/R^3$`}. The relaxation rate (which
              governs NOE) is proportional to the square of the coupling, giving {`$1/R^6$`}{' '}
              dependence. This steep distance dependence makes NOE a precision molecular ruler for
              distances up to ~5 Å. This is the basis of NMR protein structure determination (2D
              NOESY).
            </p>
          </div>
        </>,

        <>
          <div className="lrn-header">
            <h2>EPR Spectroscopy: g-Value and Hyperfine Structure</h2>
          </div>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              You record the EPR spectrum of a methyl radical at 9.2330 GHz with a sweeping magnetic
              field. The spectrum shows four lines equally spaced. What causes the four-line
              pattern?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                Three equivalent {`$^1$`}H nuclei ({`$I = 1/2$`}) split the electron spin resonance
                into {`$2(3)(1/2)+1 = 4$`} lines with 1:3:3:1 intensities (Pascal's triangle). The
                splitting is the hyperfine coupling constant.
              </p>
            </details>
          </div>
          <p>
            An unpaired electron in a magnetic field {`$B_0$`} has two spin states separated by:
          </p>
          <p className="lrn-eq lrn-eq-hero">{`$$h\\nu = g\\,\\mu_B\\,B_0$$`}</p>
          <p>
            where {`$g_e = 2.002319$`} for a free electron and {`$\\mu_B = 9.274 \\times 10^{-24}$`}{' '}
            J T{`$^{-1}$`}. Deviation of g from {`$g_e$`} reflects spin-orbit coupling mixing in
            excited states. Large g-shifts signal heavy atoms or small ligand field splitting.
          </p>
          <p>
            Nuclei with {`$I > 0$`} near the unpaired electron split the EPR resonance into{' '}
            {`$2NI+1$`} hyperfine lines. For N equivalent nuclei of spin I, lines are equally spaced
            and have equal intensity.
          </p>
          <EPRMethylViz />
          <h3>Worked Example: EPR of Methyl Radical</h3>
          <p>
            At 9.2330 GHz, resonance occurs near {`$B_0 = 329$`} mT. Then{' '}
            {`$g = h\\nu/(\\mu_B B_0) \\approx 2.0023$`}, right at the free-electron value.
            Carbon-centred radicals have weak spin-orbit coupling.
          </p>
          <p>
            The <strong>McConnell equation</strong> connects hyperfine coupling to spin density:
          </p>
          <p className="lrn-eq">{`$$a = Q\\rho^\\pi \\quad \\text{where} \\quad Q \\approx 2.25\\,\\text{mT}$$`}</p>
          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>
              In a {`$\\pi$`}-radical, the unpaired electron resides in a p orbital on carbon. Spin
              polarization of the C–H {`$\\sigma$`} bond by the unpaired {`$\\pi$`} electron creates
              a small net spin at H. The magnitude of this polarization (Q {`$\\approx$`} 2.25 mT)
              is approximately constant across different {`$\\pi$`}-radicals. Measuring each
              proton's hyperfine splitting maps the spin density across the entire radical.
            </p>
          </div>
        </>,

        <>
          <div className="lrn-header">
            <h2>IR and NMR as Characterization Tools in Organometallic Chemistry</h2>
          </div>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              You synthesize a new iron carbonyl complex and record its IR spectrum in the 1700–2200
              cm{`$^{-1}$`} region. You see two sharp bands in the high terminal-CO region and none
              near 1800 cm{`$^{-1}$`}. What can you conclude?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                All CO ligands are terminal (one M–C bond each). No bridging CO is present. A band
                near 1800 cm{`$^{-1}$`} would signal bridging CO. Its absence rules out a dinuclear
                or polynuclear structure with bridging carbonyls.
              </p>
            </details>
          </div>
          <h3>IR Spectroscopy of Metal Carbonyls</h3>
          <p>
            Free CO absorbs at 2143 cm{`$^{-1}$`}. In a terminal M–CO complex, {`$\\pi$`}
            -backdonation from metal d orbitals into the CO {`$2\\pi^*$`} orbital weakens the C–O
            bond and lowers {`$\\tilde{\\nu}_{\\text{CO}}$`} to 2000–2120 cm{`$^{-1}$`}. More
            electron-rich metals backdate more strongly and lower {`$\\tilde{\\nu}_{\\text{CO}}$`}{' '}
            further.
          </p>
          <MetalCarbonylCOViz />
          <p>
            The <strong>Dewar–Chatt–Duncanson (DCD) model</strong> describes the synergic M–CO bond.{' '}
            {`$\\sigma$`}-donation from the CO lone pair strengthens the M–C bond but has little
            effect on {`$\\tilde{\\nu}_{\\text{CO}}$`}. {`$\\pi$`}-backdonation weakens the C–O bond
            and reduces {`$\\tilde{\\nu}_{\\text{CO}}$`}. The same DCD model explains alkene binding
            to metals: the alkene {`$\\pi$`} orbital donates into an empty metal d orbital, and
            back-donation into {`$\\pi^*$`} weakens the C=C bond.
          </p>
          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Terminal CO</span>
              <p>
                {`$\\tilde{\\nu}_{\\text{CO}} = 2000\\text{–}2120\\,\\text{cm}^{-1}$`}. One M–C
                bond. Normal DCD back-donation. Found in mononuclear carbonyls (e.g. Cr(CO){`$_6$`}
                ).
              </p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Bridging CO ({`$\\mu_2$`}-CO)</span>
              <p>
                {`$\\tilde{\\nu}_{\\text{CO}} \\approx 1800\\,\\text{cm}^{-1}$`}. Two M–C bonds.
                Electron density from two metals strongly populates CO {`$2\\pi^*$`}, greatly
                weakening C–O. Diagnostic for polynuclear complexes.
              </p>
            </div>
          </div>
          <h3>NMR Spectroscopy of Organometallic Compounds</h3>
          <p>
            {`$^1$`}H NMR of metal hydrides shows resonances at {`$\\delta -8$`} to {`$-30$`} ppm,
            strongly upfield due to exceptional shielding by metal d electrons. This extreme upfield
            shift is diagnostic for M–H bonds.
          </p>
          <p>
            {`$^{13}$`}C NMR of metal carbonyls shows carbonyl carbons at{' '}
            {`$\\delta +170\\text{–}240$`} ppm. The C=O {`$\\pi$`} bond removes electron density
            from carbon, deshielding it.
          </p>
          <p>
            {`$^{31}$`}P NMR is used for phosphine complexes. When a phosphine binds to a metal, its{' '}
            {`$^{31}$`}P shift changes, called the <strong>coordination shift</strong>{' '}
            {`$\\Delta\\delta$`}. A single {`$^{31}$`}P spectrum immediately shows whether the
            phosphine is bound or free, and the magnitude of {`$\\Delta\\delta$`} helps assign metal
            oxidation state.
          </p>
          <p>
            <strong>Variable-temperature NMR</strong> probes fluxional behavior. Fe{`$_3$`}(CO)
            {`$_{12}$`} shows one {`$^{13}$`}C CO signal at room temperature (fast exchange of all
            12 CO positions). At −80°C, multiple signals resolve the distinct CO environments. The
            coalescence temperature {`$T_c$`} and peak separation {`$\\Delta\\nu$`} give the
            exchange rate and activation free energy {`$\\Delta G^\\ddagger$`}.
          </p>
          <p>
            The <strong>Tolman cone angle</strong> {`$\\theta$`} measures steric bulk of phosphine
            ligands. It is the apex angle of the cone swept by the van der Waals radii of
            substituents at a P–M distance of 2.28 Å. Larger {`$\\theta$`} enforces lower
            coordination numbers and controls reactivity in catalytic cycles.
          </p>
          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">18-electron rule</span>
              <p>
                Governs stable mononuclear organometallic complexes. Count valence electrons on the
                metal plus donation from all ligands; sum should equal 18 for a stable diamagnetic
                monomer.
              </p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Wade's rules</span>
              <p>
                Governs polyhedral cluster compounds. Count skeletal electron pairs (SEPs): n+1 SEPs
                give closo (closed polyhedron), n+2 give nido (one vertex missing), n+3 give arachno
                (two missing).
              </p>
            </div>
          </div>
        </>
      ]
    },
    practice: [
      {
        q: 'The Beer-Lambert law relates absorbance to concentration. What is the equation, and what do the symbols mean?',
        a: 'Absorbance $A = \\varepsilon[J]l$, where $\\varepsilon$ is the molar absorption coefficient ($\\text{L}\\,\\text{mol}^{-1}\\,\\text{cm}^{-1}$), $[J]$ is the concentration ($\\text{mol}\\,\\text{L}^{-1}$), and $l$ is the path length ($\\text{cm}$). Absorbance is dimensionless. It equals $\\log_{10}(I_0/I)$, where $I_0$ and $I$ are the incident and transmitted intensities.'
      },
      {
        q: 'For CO microwave spectroscopy, the first rotational transition $J=0\\to1$ occurs at $3.845\\,\\text{cm}^{-1}$. What is the rotational constant $\\tilde{B}$ and the bond length?',
        a: 'For a diatomic, $J=0\\to1$ gives a line at $2\\tilde{B}$, so $\\tilde{B} = 3.845/2 = 1.9225\\,\\text{cm}^{-1}$. Then $\\tilde{B} = h/(8\\pi^2 c I)$, so $I = h/(8\\pi^2 c \\tilde{B}) = 1.449 \\times 10^{-46}\\,\\text{kg}\\,\\text{m}^2$. With $I = \\mu r^2$ and $\\mu(\\text{CO}) = 1.139 \\times 10^{-26}\\,\\text{kg}$, $r = 1.128 \\times 10^{-10}\\,\\text{m} = 112.8\\,\\text{pm}$.'
      },
      {
        q: 'What selection rule allows pure rotational Raman transitions but forbids them in microwave spectroscopy for homonuclear diatomics like N$_2$?',
        a: 'Microwave absorption needs a permanent electric dipole moment. N$_2$ has none. But Raman transitions need a change in polarizability, which does change as N$_2$ rotates. The rotational Raman selection rule is $\\Delta J = 0, \\pm 2$, giving O and S branches.'
      },
      {
        q: 'Stimulated emission differs from spontaneous emission in one fundamental way. What is it?',
        a: 'Spontaneous emission occurs at a rate $A_{21}$ that does not depend on the radiation field. The molecule emits randomly. Stimulated emission depends on the radiation density $\\rho(\\nu)$ as $B_{21}\\rho(\\nu)$. An incoming photon triggers a coherent copy. Stimulated emission is the basis of laser action.'
      },
      {
        q: 'What is the Morse potential, and how does it differ from the harmonic oscillator model?',
        a: 'The Morse potential is $V(r) = D_e(1 - e^{-a(r-r_e)})^2$, where $D_e$ is the dissociation energy and $a$ sets the curvature. Unlike the harmonic oscillator, it has a finite well depth and allows dissociation. Morse levels are $E_v = (v + \\tfrac{1}{2})hc\\tilde{\\nu} - (v + \\tfrac{1}{2})^2 hc\\tilde{\\nu}x_e$. The spacing shrinks at higher $v$.'
      },
      {
        q: 'Predict the number of normal modes for SO$_2$ and CO$_2$.',
        a: 'For a nonlinear molecule with $N$ atoms, the number of normal modes is $3N - 6$. SO$_2$ has 3 atoms and is nonlinear: $3(3) - 6 = 3$ modes. CO$_2$ has 3 atoms but is linear: $3(3) - 5 = 4$ modes.'
      },
      {
        q: 'What does the Franck-Condon principle say, and how does it predict vibrational progressions in electronic spectra?',
        a: 'Electronic transitions are so fast that nuclei cannot move. The principle states that the nuclear coordinates and momenta do not change during the transition. The most intense vibrational line in an electronic band matches the maximum overlap between the initial and final vibrational wavefunctions. If the bond length changes on excitation, many vibrational levels appear.'
      },
      {
        q: 'In an NMR spectrometer with $B_0 = 12.0\\,\\text{T}$, what is the resonance frequency for $^1$H?',
        a: 'The Larmor frequency is $\\nu = \\gamma B_0/(2\\pi)$. For $^1$H, $\\gamma = 2.675 \\times 10^8\\,\\text{rad}\\,\\text{T}^{-1}\\,\\text{s}^{-1}$. So $\\nu = (2.675 \\times 10^8 \\times 12.0)/(2\\pi) \\approx 511\\,\\text{MHz}$. This is the $^1$H frequency for a $12\\,\\text{T}$ magnet.'
      },
      {
        q: 'What EPR frequency corresponds to $B = 0.33\\,\\text{T}$ for a free electron ($g \\approx 2.0023$)?',
        a: 'The EPR resonance condition is $h\\nu = g\\beta_e B$. With $g = 2.0023$, $\\beta_e = 9.274 \\times 10^{-24}\\,\\text{J}\\,\\text{T}^{-1}$, and $B = 0.33\\,\\text{T}$: $\\nu = g\\beta_e B/h = (2.0023 \\times 9.274 \\times 10^{-24} \\times 0.33)/(6.626 \\times 10^{-34}) \\approx 9.2\\,\\text{GHz}$. This is the microwave X-band used in most EPR instruments.'
      },
      {
        q: 'Why does a centrosymmetric molecule like CO$_2$ obey the mutual exclusion rule?',
        a: 'The mutual exclusion rule states that for a centrosymmetric molecule, IR-active modes are Raman-inactive and the reverse. IR activity needs a change in dipole moment (ungerade symmetry). Raman needs a change in polarizability (gerade symmetry). A center of inversion makes these two sets completely non-overlapping.'
      },
      {
        q: 'What is the P, Q, and R branch assignment rule for vibration-rotation spectra of diatomics?',
        a: 'The rotational quantum number $J$ of the lower state changes as follows: R branch $\\Delta J = +1$, P branch $\\Delta J = -1$, Q branch $\\Delta J = 0$. For a $^1\\Sigma$ ground state diatomic, the Q branch is absent. R lines sit at higher wavenumber than the band origin. P lines sit at lower wavenumber.'
      },
      {
        q: 'The $^1$H NMR spectrum of 1-methoxy-2-propanone (CH$_3$OCH$_2$COCH$_3$) shows three groups. Assign each group.',
        a: 'The OCH$_3$ group gives a singlet near $\\delta\\,3.4$ with three hydrogens. The CH$_2$ between oxygen and carbonyl gives a singlet near $\\delta\\,4.0$ with two hydrogens, flanked by O and C=O with no adjacent CH. The COCH$_3$ gives a singlet near $\\delta\\,2.1$ with three hydrogens. No spin-spin coupling is expected between these isolated groups.'
      },
      {
        q: 'Chloroethane (CH$_3$CH$_2$Cl) shows a quartet for CH$_3$ and a triplet for CH$_2$. Explain why.',
        a: "The CH$_2$ group has two equivalent hydrogens. They split the adjacent CH$_3$ signal into $2(2)(1/2)+1 = 3$ lines, a triplet. The CH$_3$ group has three equivalent hydrogens and splits the CH$_2$ into $2(3)(1/2)+1 = 4$ lines, a quartet. The intensities follow Pascal's triangle."
      },
      {
        q: 'A $90^\\circ$ pulse for $^1$H NMR requires a flip of the magnetization. If $B_1 = 0.59\\,\\text{mT}$, how long is the pulse?',
        a: 'The flip angle is $\\theta = \\gamma B_1 t_p$. For a $90^\\circ$ ($\\pi/2$) pulse: $t_p = \\pi/(2\\gamma B_1) = \\pi/(2 \\times 2.675 \\times 10^8 \\times 0.59 \\times 10^{-3}) \\approx 10\\,\\mu\\text{s}$. Stronger $B_1$ gives shorter pulses, which cover a wider bandwidth.'
      },
      {
        q: 'If $T_2 = 3.0\\,\\text{s}$, what is the NMR linewidth?',
        a: 'The transverse relaxation time $T_2$ sets the free induction decay lifetime. The resulting Lorentzian linewidth is $\\delta\\nu = 1/(\\pi T_2) = 1/(\\pi \\times 3.0) \\approx 0.11\\,\\text{Hz}$. Faster $T_2$ decay means broader lines.'
      },
      {
        q: 'What is the maximum NOE enhancement for a $^{13}$C nucleus coupled to $^1$H?',
        a: 'The NOE enhancement factor is $\\eta = \\gamma_H/(2\\gamma_C) = (2.675 \\times 10^8)/(2 \\times 6.728 \\times 10^7) \\approx 1.99$. This means the $^{13}$C signal can nearly triple in intensity ($1 + \\eta \\approx 2.99$). The large ratio of gyromagnetic ratios drives this enhancement.'
      },
      {
        q: 'Fe(CO)$_5$ shows only terminal CO bands. Fe$_2$(CO)$_9$ adds a band at distinctly lower wavenumber. Why does bridging CO sit lower than terminal CO?',
        a: 'In terminal CO, one metal back-donates into the CO $\\pi^*$ orbital. In bridging CO, two metals share the back-donation, pumping more electron density into $\\pi^*$. This weakens the C=O bond further. A weaker bond has a lower force constant and vibrates at lower wavenumber. So the bridging band of Fe$_2$(CO)$_9$ falls below the terminal bands.'
      },
      {
        q: 'In organometallic NMR, hydride $^1$H resonances appear at $\\delta -8$ to $-30$. Why so far upfield?',
        a: 'The metal hydride hydrogen sits very close to a metal with high electron density. The metal shields the hydrogen nucleus through anisotropic ring-current-like effects and direct metal electron donation. High shielding means high $\\sigma$ and low $\\delta$, far upfield of ordinary organic protons near $\\delta\\,0$ to $10$.'
      },
      {
        q: "How do Wade's rules assign geometry to boron hydride clusters?",
        a: "Wade's rules count skeletal electron pairs (SEPs): $n+1$ SEPs give closo (closed polyhedron), $n+2$ give nido (one vertex missing), $n+3$ give arachno (two vertices missing), where $n$ is the number of vertices. Each BH unit contributes 2 electrons. Extra H atoms or charge adjust the count."
      },
      {
        q: 'What is the harmonic oscillator energy expression, and what does it predict about the zero-point energy?',
        a: 'The harmonic oscillator gives $E_v = (v + \\tfrac{1}{2})hc\\tilde{\\nu}$, where $v = 0, 1, 2, \\ldots$ and $\\tilde{\\nu}$ is the wavenumber of the vibration. Even at $v = 0$, the zero-point energy is $\\tfrac{1}{2}hc\\tilde{\\nu}$. The molecule can never be at rest. This follows directly from the uncertainty principle.'
      },
      {
        q: 'What is the Jablonski diagram? Use it to distinguish fluorescence and phosphorescence.',
        a: 'The Jablonski diagram shows electronic states $S_0$, $S_1$, $S_2$ (singlets) and $T_1$ (triplet). After absorption to $S_1$, fluorescence is direct $S_1 \\to S_0$ emission. It is spin-allowed, fast, with nanosecond lifetime. Phosphorescence needs intersystem crossing to $T_1$ first, then $T_1 \\to S_0$ emission. It is spin-forbidden and slow, from microseconds to seconds. Phosphorescence is therefore red-shifted and long-lived.'
      },
      {
        q: 'The $\\pi^*\\leftarrow n$ transition in acetone absorbs near $280\\,\\text{nm}$. Why is it weak ($\\varepsilon \\approx 15$)?',
        a: 'The $n$ orbital is perpendicular to the $\\pi$ system. The $\\pi^*\\leftarrow n$ transition is symmetry-forbidden. The transition dipole integral nearly vanishes because the $n$ and $\\pi^*$ orbitals have different symmetry about the C=O axis. This makes the transition weak. Values of $\\varepsilon \\approx 10$ to $100$ are typical for forbidden $\\pi^*\\leftarrow n$ transitions.'
      },
      {
        q: 'State the Laporte rule and give one example of a transition that violates it in practice.',
        a: 'The Laporte (parity) rule states that allowed electric-dipole transitions must connect states of different parity: $g \\leftrightarrow u$ (gerade $\\leftrightarrow$ ungerade). For d-d transitions in centrosymmetric transition metal complexes, like [Ti(H$_2$O)$_6$]$^{3+}$, both states are d-orbitals (gerade). They are Laporte-forbidden but still appear weakly ($\\varepsilon \\approx 1$ to $100$) because vibration breaks the centrosymmetry.'
      },
      {
        q: 'Why are charge-transfer bands in transition metal complexes much more intense than d-d bands?',
        a: 'Charge-transfer (CT) transitions move electron density from ligand to metal (LMCT) or metal to ligand (MLCT). These transitions are Laporte-allowed ($g \\leftrightarrow u$) and have large transition dipole moments, giving $\\varepsilon \\approx 10^3$ to $10^5$. d-d transitions are Laporte-forbidden (both $g$), giving $\\varepsilon \\approx 1$ to $100$.'
      },
      {
        q: 'A solution has $\\varepsilon = 1200\\,\\text{L}\\,\\text{mol}^{-1}\\,\\text{cm}^{-1}$, $[J] = 0.0025\\,\\text{mol}\\,\\text{L}^{-1}$, and path length $l = 2.0\\,\\text{cm}$. Calculate the transmittance.',
        a: 'First compute $A = \\varepsilon c l = 1200 \\times 0.0025 \\times 2.0 = 6.0$. Transmittance $T = 10^{-A} = 10^{-6.0} \\approx 1.0 \\times 10^{-6}$. This tiny transmittance means almost no light gets through the sample.'
      },
      {
        q: 'What is the Doppler linewidth formula, and what does it predict for HCl at $298\\,\\text{K}$?',
        a: '$\\delta\\nu_D = (\\nu_0/c)\\sqrt{8kT \\ln 2 / m}$. For HCl ($m = 5.94 \\times 10^{-26}\\,\\text{kg}$) near $\\nu_0 = 2886\\,\\text{cm}^{-1}$ at $298\\,\\text{K}$, this gives $\\delta\\nu_D \\approx 0.0047\\,\\text{cm}^{-1}$. Doppler broadening gives a Gaussian lineshape because molecules have a thermal spread of velocities.'
      },
      {
        q: 'A rotational Raman spectrum of N$_2$ shows S-branch lines at $2\\nu_{\\text{laser}} \\pm (4\\tilde{B}, 8\\tilde{B}, 12\\tilde{B}, \\ldots)$. If $\\tilde{B} = 2.00\\,\\text{cm}^{-1}$, where does the first S-branch line appear relative to the Rayleigh line?',
        a: 'For the S branch ($\\Delta J = +2$), the shift from the Rayleigh line is $4\\tilde{B}(J+3/2)$. For $J = 0$ this gives $4\\tilde{B} \\times 3/2 = 6\\tilde{B} = 12.0\\,\\text{cm}^{-1}$. The first S-branch anti-Stokes line appears $12\\,\\text{cm}^{-1}$ above the laser frequency, and the first Stokes line appears $12\\,\\text{cm}^{-1}$ below.'
      },
      {
        q: "What is Einstein's B coefficient, and how does it relate to stimulated absorption and emission?",
        a: 'The B coefficient appears in both stimulated absorption ($B_{12}$) and stimulated emission ($B_{21}$). By detailed balance, $B_{12} = B_{21}$ for non-degenerate states. The rate of stimulated transitions is $B\\rho(\\nu)$, where $\\rho(\\nu)$ is the radiation energy density at the transition frequency. A and B are linked by $A_{21} = 8\\pi h\\nu^3/c^3 \\times B_{21}$.'
      },
      {
        q: 'The Birge-Sponer method extracts the dissociation energy of I$_2$. Describe the method and state what you plot.',
        a: 'Plot the energy spacing between successive vibrational levels, $\\Delta G(v) = G(v+1) - G(v)$, against $(v + \\tfrac{1}{2})$. For a Morse potential this is linear, with intercept $2D_e x_e \\tilde{\\nu}$ and slope $-2x_e \\tilde{\\nu}$. The area under the curve, integrated to the $v$ where $\\Delta G = 0$, gives $D_0$, the dissociation energy from the zero-point level.'
      },
      {
        q: 'An electronic term symbol for a diatomic has $\\Lambda = 1$. What letter symbol does this state carry and what does $\\Lambda$ represent?',
        a: '$\\Lambda = 1$ corresponds to the letter $\\Pi$. $\\Lambda$ is the magnitude of the projection of total orbital angular momentum onto the molecular axis: $\\Lambda = 0 \\to \\Sigma$, $1 \\to \\Pi$, $2 \\to \\Delta$. For $\\Lambda > 0$ the state is doubly degenerate, with two orientations of the angular momentum.'
      },
      {
        q: 'At $10\\,\\text{T}$ and $20\\,^\\circ$C, about how many more $^1$H nuclei sit in the lower spin state than the upper, out of one million?',
        a: 'The population difference is $\\Delta N/N \\approx \\gamma\\hbar B_0/(2kT) = (2.675 \\times 10^8 \\times 1.055 \\times 10^{-34} \\times 10)/(2 \\times 1.381 \\times 10^{-23} \\times 293) \\approx 3.5 \\times 10^{-5}$. Out of $10^6$ nuclei, roughly 35 extra are in the lower state. This tiny excess gives all NMR sensitivity.'
      },
      {
        q: 'An EPR spectrum of the methyl radical is measured at $9.2330\\,\\text{GHz}$. The field at resonance is about $0.329\\,\\text{T}$. Calculate the g-value.',
        a: '$g = h\\nu/(\\beta_e B) = (6.626 \\times 10^{-34} \\times 9.2330 \\times 10^9)/(9.274 \\times 10^{-24} \\times 0.329) \\approx 2.0023$. This sits right at the free-electron value $g_e \\approx 2.0023$. That is consistent with a carbon-centered radical with little spin-orbit coupling.'
      },
      {
        q: 'Predict whether the symmetric stretch of CO$_2$ is IR-active, Raman-active, or both, and explain why.',
        a: 'CO$_2$ is centrosymmetric ($D_{\\infty h}$), so the mutual exclusion rule applies. The symmetric stretch does not change the dipole moment, so it is IR-inactive. But it does change the polarizability, so it is Raman-active. You cannot observe the symmetric stretch in IR, but you can in a Raman spectrum.'
      },
      {
        q: 'In the Lamb formula, diamagnetic shielding of the proton in a hydrogen atom is $\\sigma_d = e^2\\langle r^{-1}\\rangle/(3m_e c^2)$. What does this say physically?',
        a: 'The formula shows that atoms with electron density close to the nucleus produce stronger diamagnetic shielding. A large $\\langle r^{-1}\\rangle$ means a small average $r$. For H, $\\sigma_d \\approx 1.78 \\times 10^{-5}$. Electron-withdrawing groups reduce $\\sigma$, moving the proton signal downfield.'
      },
      {
        q: 'The Karplus equation relates the coupling constant $J$ to the dihedral angle $\\phi$. What does it predict for $\\alpha$-helix versus $\\beta$-sheet in a polypeptide H-N-C-H fragment?',
        a: 'The Karplus equation is ${}^3J = A + B\\cos\\phi + C\\cos 2\\phi$. In an $\\alpha$-helix, $\\phi \\approx -57^\\circ$, giving ${}^3J(\\text{HN},\\text{H}\\alpha) \\approx 3$ to $4\\,\\text{Hz}$. In a $\\beta$-sheet, $\\phi \\approx -120^\\circ$, giving ${}^3J \\approx 8$ to $10\\,\\text{Hz}$. This coupling constant is a direct conformational probe.'
      },
      {
        q: 'What does the FT-NMR pulse sequence do, and why is Fourier transformation needed?',
        a: 'A short radiofrequency pulse tips all $^1$H spins away from $B_0$ at once. The spins then precess and decay. The detector records the free induction decay (FID), a superposition of all resonance frequencies in the time domain. Fourier transformation converts the time-domain FID to a frequency-domain NMR spectrum, with one peak per chemically distinct hydrogen.'
      },
      {
        q: 'Compare $T_1$ and $T_2$ relaxation in NMR: what does each measure and which determines linewidth?',
        a: '$T_1$ (spin-lattice relaxation) measures the recovery of longitudinal magnetization $M_z$ toward equilibrium. Energy flows from spin to the surroundings. $T_2$ (spin-spin relaxation) measures loss of transverse magnetization $M_{xy}$ as coherence dephases. $T_2 \\leq T_1$ always. The linewidth $\\delta\\nu = 1/(\\pi T_2^*)$, where $T_2^*$ includes field inhomogeneity. So $T_2$ and $T_2^*$ directly control linewidth.'
      },
      {
        q: 'What is the NOE, and how does it connect to molecular structure?',
        a: 'The Nuclear Overhauser Effect (NOE) is the change in signal intensity of one spin when a nearby spin is saturated. It arises from cross-relaxation through dipolar coupling. NOE intensity falls as $r^{-6}$, so it is sensitive only to spins within about $5\\,$Å. It is therefore the primary NMR tool for measuring distances and determining 3D structure.'
      },
      {
        q: 'Explain synergic bonding in metal carbonyls: what two interactions stabilize M-CO?',
        a: 'First, the lone pair on carbon sigma-donates into an empty metal d orbital. This alone would strengthen the C$\\equiv$O bond. Second, filled metal d orbitals back-donate into the empty CO $\\pi^*$ orbital, weakening and lengthening C$\\equiv$O. These two effects are synergic: sigma donation increases back-donation by making the metal more electron-rich.'
      },
      {
        q: 'What does the 18-electron rule state, and when does it apply?',
        a: "The 18-electron rule states that stable mononuclear transition metal complexes tend to have 18 electrons in the metal's valence shell, across the 9 valence orbitals. It works well for low-oxidation-state complexes with strong-field ligands like CO. High-spin or ionic complexes often violate it."
      },
      {
        q: "The 18-electron rule and Wade's rules both predict stable cluster geometries. When do you use each?",
        a: "Use the 18-electron rule for mononuclear transition metal complexes. It counts all electrons at one metal center. Use Wade's rules for polyhedral boron hydride clusters and analogous metal carbonyl clusters, where skeletal electron pairs set the polyhedron type. Wade's rules fail for mononuclear complexes. The 18-electron rule does not apply to clusters with several metals bridging and sharing electrons."
      },
      {
        q: 'The vibrational wavenumber of HCl is $2886\\,\\text{cm}^{-1}$. Calculate the force constant $k$.',
        a: '$\\tilde{\\nu} = (1/2\\pi c)\\sqrt{k/\\mu}$, so $k = (2\\pi c\\tilde{\\nu})^2 \\times \\mu$. $\\mu(\\text{HCl}) = (1 \\times 35)/(1 + 35) \\times 1.661 \\times 10^{-27} = 1.626 \\times 10^{-27}\\,\\text{kg}$. $k = (2\\pi \\times 3 \\times 10^{10} \\times 2886)^2 \\times 1.626 \\times 10^{-27} \\approx 481\\,\\text{N}\\,\\text{m}^{-1}$. This is a typical value for a single bond.'
      },
      {
        q: 'A dye absorbs at $490\\,\\text{nm}$ and emits fluorescence at $530\\,\\text{nm}$. What is the Stokes shift?',
        a: 'Stokes shift $= \\nu_{\\text{abs}} - \\nu_{\\text{em}} = (1/490 \\times 10^{-7} - 1/530 \\times 10^{-7})\\,\\text{cm}^{-1} = (20408 - 18868)\\,\\text{cm}^{-1} = 1540\\,\\text{cm}^{-1}$. The Stokes shift comes from vibrational relaxation within the excited state before emission, which dissipates energy as heat.'
      },
      {
        q: 'Contrast $\\pi^*\\leftarrow n$ and $\\pi^*\\leftarrow\\pi$ transitions in organic chromophores: which is stronger and which is at longer wavelength?',
        a: 'In acetone: $\\pi^*\\leftarrow n$ appears near $280\\,\\text{nm}$ with $\\varepsilon \\approx 15$ (weak, forbidden). $\\pi^*\\leftarrow\\pi$ appears near $190\\,\\text{nm}$ with $\\varepsilon \\approx 10000$ (strong, allowed). The $\\pi^*\\leftarrow n$ is at longer wavelength (lower energy) because the $n$ orbital is higher in energy than the $\\pi$. The $\\pi^*\\leftarrow\\pi$ is stronger because both orbitals lie in the same plane, so the overlap integral is large.'
      },
      {
        q: 'Why does d-d absorption in [Ti(H$_2$O)$_6$]$^{3+}$ appear, even though the Laporte rule forbids it?',
        a: '[Ti(H$_2$O)$_6$]$^{3+}$ is centrosymmetric ($O_h$), so d-d transitions (both $g$) are Laporte-forbidden. But the complex undergoes thermal vibrations (non-totally-symmetric modes) that briefly break the center of inversion. This vibronic mixing lets a small fraction of the allowed $u$ character into the d-d transition. The result is a weak but observable band ($\\varepsilon \\approx 5\\,\\text{L}\\,\\text{mol}^{-1}\\,\\text{cm}^{-1}$).'
      },
      {
        q: 'What is the Fellgett (multiplex) advantage of Fourier-transform spectroscopy over dispersive instruments?',
        a: 'An FT spectrometer collects all wavelengths at once throughout the entire measurement, not one wavelength at a time. This gives a signal-to-noise ratio improvement proportional to $\\sqrt{N}$, where $N$ is the number of resolved spectral elements.'
      },
      {
        q: 'An excited state has a lifetime $\\tau = 1.0 \\times 10^{-8}\\,\\text{s}$. What is the natural linewidth?',
        a: 'The lifetime-linewidth relation is $\\delta\\nu = 1/(2\\pi\\tau)$. With $\\tau = 10^{-8}\\,\\text{s}$, $\\delta\\nu = 1/(2\\pi \\times 10^{-8}) \\approx 1.6 \\times 10^7\\,\\text{Hz} \\approx 5.3 \\times 10^{-4}\\,\\text{cm}^{-1}$. Shorter lifetime means broader line, from the energy-time uncertainty principle.'
      },
      {
        q: 'Self-explain: why does the rotational Raman spectrum of a homonuclear diatomic show $\\Delta J = \\pm 2$ transitions but the microwave spectrum shows nothing?',
        a: 'A microwave photon is absorbed only if it can interact with the molecular dipole moment. Homonuclear diatomics (N$_2$, O$_2$, H$_2$) have no permanent dipole. The charge distribution is symmetric, so no microwave absorption occurs. Raman scattering needs a change in polarizability, which does change as the molecule rotates. The polarizability is anisotropic along and across the bond. The $\\Delta J = \\pm 2$ rule follows from angular momentum conservation in the two-photon Raman process.'
      },
      {
        q: 'What is the physical meaning of the Einstein A coefficient?',
        a: '$A_{21}$ is the rate of spontaneous emission from state 2 to state 1, in units of $\\text{s}^{-1}$. If there are $N_2$ molecules in the excited state, $N_2 A_{21}$ photons are emitted per second spontaneously. The excited-state lifetime for purely spontaneous decay is $\\tau = 1/A_{21}$. A large A coefficient means a short lifetime and a bright emitter.'
      },
      {
        q: 'In the Birge-Sponer extrapolation for I$_2$, the plot of $\\Delta G(v)$ versus $v$ is linear and reaches zero at some $v_{\\max}$. What does the area under the line equal?',
        a: 'The area equals $D_0$, the dissociation energy measured from the zero-point level ($v = 0$). This follows because $\\Delta G(v) = G(v+1) - G(v)$, and summing from $v = 0$ to $v_{\\max}$ gives $G(v_{\\max}) - G(0) = D_0$. The Birge-Sponer method slightly overestimates $D_0$ because real molecules deviate from linearity at high $v$.'
      },
      {
        q: 'How does the Franck-Condon factor determine whether a vibrational progression in an electronic spectrum is long or short?',
        a: "The Franck-Condon factor is the square of the overlap integral $|\\langle v'|v''\\rangle|^2$. If the equilibrium bond length changes a lot on electronic excitation, the maximum overlap for $v'' = 0$ is with a high $v'$. Many vibrational levels appear, giving a long progression. If the geometry barely changes, overlap is maximum at $v' = 0$, giving a short progression dominated by the 0-0 line."
      },
      {
        q: 'Why is $^1$H NMR more sensitive than $^{13}$C NMR even at the same field?',
        a: 'Sensitivity scales as $\\gamma^3$. The $^1$H gyromagnetic ratio ($\\gamma_H = 2.675 \\times 10^8\\,\\text{rad}\\,\\text{T}^{-1}\\,\\text{s}^{-1}$) is about $4\\times$ larger than $\\gamma_C$ ($6.73 \\times 10^7$). The sensitivity ratio goes as $(\\gamma_H/\\gamma_C)^3 \\approx 64$. Also, $^1$H is nearly 100% natural abundance while $^{13}$C is only 1.1%, lowering $^{13}$C sensitivity further.'
      },
      {
        q: 'A radical has one $^{14}$N ($I = 1$) and two equivalent $^1$H ($I = 1/2$). How many EPR hyperfine lines appear?',
        a: 'The $^{14}$N ($I = 1$) gives $2(1)(1)+1 = 3$ lines. Each of those splits by two equivalent $^1$H: $2(2)(1/2)+1 = 3$ lines. Total $= 3 \\times 3 = 9$ lines, though some may overlap if the coupling constants are related. The pattern depends on the relative sizes of the two coupling constants.'
      },
      {
        q: 'Name the three normal modes of H$_2$O and state their symmetry species in $C_{2v}$.',
        a: 'H$_2$O has 3 normal modes: symmetric stretch ($\\nu_1$, $A_1$), symmetric bend or scissors ($\\nu_2$, $A_1$), and antisymmetric stretch ($\\nu_3$, $B_1$). All three are both IR-active and Raman-active because H$_2$O has no center of inversion and belongs to $C_{2v}$, where all species can be IR and Raman active at once.'
      },
      {
        q: 'What is ring current shielding in aromatic NMR, and what does it predict for benzene proton shifts?',
        a: 'A benzene ring carrying a ring current (induced by $B_0$) creates a secondary field. It is shielding above and below the ring plane but deshielding in the plane of the ring where the H atoms sit. Benzene protons sit in the ring plane, so they are deshielded and resonate far downfield at $\\delta \\approx 7.3$. A proton placed above or below the ring would instead feel the shielding region.'
      },
      {
        q: 'What distinguishes first-order (AX) from second-order (AB) NMR spectra?',
        a: 'In an AX spectrum, two nuclei have very different chemical shifts ($|\\Delta\\nu| \\gg J$). Each appears as a simple doublet, and the coupling constant reads directly from the splitting. In an AB spectrum, $|\\Delta\\nu| \\approx J$. The inner lines intensify and outer lines weaken. Simple first-order analysis fails, so you need simulation or full quantum treatment.'
      },
      {
        q: 'A $90^\\circ$ pulse gives maximum transverse magnetization. What happens if you apply a $180^\\circ$ pulse instead?',
        a: 'A $180^\\circ$ pulse inverts the spin population. It rotates $M_z$ from $+z$ to $-z$. No transverse magnetization is created ($M_{xy} = 0$ right after the pulse). The $180^\\circ$ pulse is used in inversion-recovery experiments to measure $T_1$: apply $180^\\circ$, wait a delay $\\tau$, apply $90^\\circ$, then watch $M_z$ recover toward equilibrium.'
      },
      {
        q: 'Transfer: if a $^1$H nucleus in a highly deshielded environment has very short $T_2 = 0.1\\,\\text{s}$, estimate the linewidth.',
        a: '$\\delta\\nu = 1/(\\pi T_2) = 1/(\\pi \\times 0.1) \\approx 3.2\\,\\text{Hz}$. This broad line reflects fast dephasing, typical near quadrupolar nuclei or in paramagnetic environments. The signal may be hard to resolve from neighboring peaks.'
      },
      {
        q: 'What is the NOE buildup rate proportional to, and why does it give distance information?',
        a: 'The NOE cross-relaxation rate $\\sigma_{IS} \\propto r^{-6} \\times \\tau_c$, where $r$ is the internuclear distance and $\\tau_c$ is the rotational correlation time. The $r^{-6}$ dependence means only spins within about $5\\,$Å contribute measurably. By measuring NOE intensities between proton pairs, you can extract distance restraints for structure determination.'
      },
      {
        q: 'What does the Dewar-Chatt-Duncanson model describe?',
        a: 'It describes how alkenes, like ethylene, bond to transition metals. The alkene $\\pi$ electrons donate into an empty metal d orbital (sigma component), and a filled metal d orbital back-donates into the alkene $\\pi^*$ (pi component). This weakens the C=C double bond and can, in extreme cases, convert it to a metalacyclopropane.'
      },
      {
        q: 'Variable-temperature NMR of a fluxional iron carbonyl shows two CO signals that merge into one at higher temperature. Explain what is happening.',
        a: 'At low temperature the molecule is slow enough that the NMR timescale resolves inequivalent CO environments. As temperature rises, the molecule undergoes fast exchange (Berry pseudorotation or a related process), interconverting CO sites faster than the NMR frequency difference. Above the coalescence temperature, only one averaged signal appears.'
      },
      {
        q: "Wade's rules for [B$_6$H$_6$]$^{2-}$: how many SEPs and what geometry?",
        a: 'Each BH unit provides 2 skeletal electrons, and the $2-$ charge adds 2 more. For 6 BH units plus the $2-$ charge: $6 \\times 2 + 2 = 14$ electrons $= 7$ SEPs. For an $n = 6$ vertex polyhedron with $n+1 = 7$ SEPs: closo geometry, an octahedron. [B$_6$H$_6$]$^{2-}$ is a perfect octahedral cluster.'
      },
      {
        q: 'What are the selection rules for vibrational transitions in the harmonic oscillator model?',
        a: 'In the harmonic oscillator, the only allowed transition is $\\Delta v = \\pm 1$, and the vibration must produce a change in dipole moment (IR) or polarizability (Raman). In real, anharmonic molecules, overtones ($\\Delta v = \\pm 2, \\pm 3, \\ldots$) appear weakly because the Morse-type potential mixes wavefunctions.'
      },
      {
        q: 'Predict how the fluorescence lifetime changes if you add a heavy atom (like I$^-$) to the solution.',
        a: 'Heavy atoms increase spin-orbit coupling, which speeds up intersystem crossing from $S_1$ to $T_1$. This drains the $S_1$ population faster, shortening the fluorescence lifetime and lowering the fluorescence quantum yield. Phosphorescence may become detectable instead.'
      },
      {
        q: 'Transfer: Beer-Lambert applies to a gas at low pressure too. If $\\varepsilon = 5000\\,\\text{L}\\,\\text{mol}^{-1}\\,\\text{cm}^{-1}$, $[J] = 5.0 \\times 10^{-5}\\,\\text{mol}\\,\\text{L}^{-1}$, and $l = 10\\,\\text{cm}$, what is $A$?',
        a: '$A = \\varepsilon c l = 5000 \\times 5.0 \\times 10^{-5} \\times 10 = 2.5$. Transmittance $= 10^{-2.5} \\approx 0.0032$, or about 0.32%. Beer-Lambert works for gases just as for solutions, as long as the sample is optically dilute.'
      },
      {
        q: 'How does increasing the temperature affect Doppler linewidth? Compare a gas at $300\\,\\text{K}$ with the same gas heated to $1200\\,\\text{K}$.',
        a: 'Doppler width scales as $\\sqrt{T}$. Hotter gas has faster-moving molecules, so each spectral line is broader. Going from $300\\,\\text{K}$ to $1200\\,\\text{K}$ raises the width by $\\sqrt{1200/300} = \\sqrt{4} = 2$ times. So the line is twice as wide at the higher temperature. Cooling the gas is the way to narrow Doppler-broadened lines.'
      },
      {
        q: 'Why does anharmonicity cause the first overtone of HCl to appear below $2 \\times 2886 = 5772\\,\\text{cm}^{-1}$?',
        a: 'In the Morse potential, energy levels bunch closer together at higher $v$. The first overtone ($v = 0 \\to 2$) has energy $2\\tilde{\\nu}(1 - 3x_e)$, which is less than $2\\tilde{\\nu}$. For HCl, $x_e \\approx 0.017$, giving the overtone at $\\approx 2 \\times 2886 \\times (1 - 3 \\times 0.017) \\approx 5668\\,\\text{cm}^{-1}$, about $104\\,\\text{cm}^{-1}$ below the harmonic prediction.'
      },
      {
        q: 'What determines whether a molecule shows a long or short Franck-Condon progression?',
        a: "The length of the progression depends on how much the equilibrium geometry changes on electronic excitation. A large geometry change in bond length or angle accesses many vibrational levels, giving a long progression. A small geometry change makes the Franck-Condon factor maximum at $v' = 0$, giving a short progression dominated by the 0-0 band."
      },
      {
        q: 'What transition in NMR is detected, and why must the Boltzmann population difference be large for high sensitivity?',
        a: 'NMR detects the net absorption of radiofrequency photons, proportional to $(N_\\alpha - N_\\beta)$, the population difference between the two spin states. This difference at thermal equilibrium is tiny, about 35 per million at $10\\,\\text{T}$. The detected signal is directly proportional to this excess. Higher $B_0$, lower $T$, and higher $\\gamma$ all increase the population difference and so the sensitivity.'
      },
      {
        q: 'What is the McConnell equation and how does it connect EPR to electronic structure?',
        a: 'The McConnell equation is $a_H = Q\\rho_\\pi$, where $a_H$ is the $^1$H hyperfine coupling constant, $Q \\approx +2.25\\,\\text{mT}$ (a calibration constant), and $\\rho_\\pi$ is the pi-electron spin density at the adjacent carbon. This lets you read off the unpaired electron distribution from EPR hyperfine splittings.'
      },
      {
        q: 'In symmetry analysis of H$_2$O normal modes using the $C_{2v}$ character table, which symmetry species are IR-active?',
        a: "In $C_{2v}$, IR activity requires the mode to transform as $x$, $y$, or $z$. $A_1$ ($z$), $B_1$ ($x$), and $B_2$ ($y$) are IR-active. $A_2$ has no $x$, $y$, $z$, so it is IR-inactive. H$_2$O's three normal modes are $2A_1 + B_1$, all IR-active."
      },
      {
        q: 'Predict: If a molecule is placed in a stronger $B_0$ field for NMR, does the chemical shift (in ppm) change?',
        a: 'Chemical shift in ppm does not change with $B_0$ because ppm is defined as $(\\nu_{\\text{sample}} - \\nu_{\\text{reference}})/\\nu_0 \\times 10^6$, and both frequencies scale with $B_0$ in the same proportion. But the actual frequency difference in Hz grows with $B_0$, so peaks are easier to resolve in absolute frequency units at higher field.'
      },
      {
        q: 'Chloroethane CH$_3$CH$_2$Cl: explain why you do NOT see a quintet or other complex pattern.',
        a: 'The CH$_3$ and CH$_2$ groups sit on adjacent carbons with 3 equivalent $^1$H and 2 equivalent $^1$H. These two groups are weakly coupled to each other but strongly differentiated in shift. Because their coupling is first-order, the patterns are simple: a triplet for CH$_2$ and a quartet for CH$_3$. No complex second-order patterns arise.'
      },
      {
        q: 'Self-explain: in pulse NMR, why does the FID decay exponentially?',
        a: 'After the pulse, all spins precess at their Larmor frequency in phase. $T_2$ relaxation (spin-spin dephasing) makes the spins lose phase coherence. Some precess slightly faster, some slower, due to local field variations. The net transverse magnetization decreases as the spins fan out. Since dephasing is a random process with a characteristic time $T_2$, the FID envelope is exponential: $\\exp(-t/T_2^*)$.'
      },
      {
        q: 'Explain the physical origin of $T_1$ relaxation in solution NMR.',
        a: '$T_1$ relaxation restores $M_z$ to equilibrium, which needs energy transfer from the spin to the lattice (the surroundings). The mechanism is fluctuating magnetic fields at the Larmor frequency, generated by rapid molecular tumbling that modulates dipolar and CSA interactions. The match between tumbling rate and $\\omega_0$ sets $T_1$. Large molecules tumble slowly and have short $T_1$ if tumbling is at sub-Larmor rates. Small molecules tumble fast with longer $T_1$.'
      },
      {
        q: 'Describe the NMR experiment you would use to assign NOE contacts in a protein, and what the result tells you.',
        a: 'You run a 2D NOESY (Nuclear Overhauser Effect Spectroscopy) experiment. Cross-peaks appear between proton pairs within about $5\\,$Å in space. The cross-peak intensity at short mixing time is proportional to $r^{-6}$. You collect many NOE distance restraints and use molecular dynamics with these restraints to build a 3D structure. This is how solution-state protein structures are determined by NMR.'
      },
      {
        q: 'What is the Tolman cone angle and why does it matter for phosphine ligands?',
        a: 'The Tolman cone angle $\\theta$ is the half-angle of a cone drawn from the metal (at a standard P-M distance of $2.28\\,$Å) that just encloses all substituents on phosphorus. Larger $\\theta$ means a bulkier phosphine, which can force lower coordination numbers, alter reactivity, and change electronic properties by compressing the M-P bond.'
      },
      {
        q: '$^{31}$P NMR of a phosphine complex shows a coordination shift $\\Delta\\delta$. What does it indicate?',
        a: 'When a phosphine coordinates to a metal, its $^{31}$P chemical shift changes, usually moving downfield (positive $\\Delta\\delta$) compared to the free ligand. The size of $\\Delta\\delta$ reflects the degree of metal-phosphorus interaction and can indicate oxidation state. Large downfield shifts suggest strong coordination.'
      },
      {
        q: "In Wade's rules, what is the difference between closo, nido, and arachno borane clusters?",
        a: 'Closo clusters have $n+1$ SEPs for $n$ vertices, a complete closed polyhedron. Nido has $n+2$ SEPs, with one vertex missing, leaving an open face. Arachno has $n+3$ SEPs, with two vertices missing and a more open structure. Adding electrons to a closo cage opens it (closo $\\to$ nido $\\to$ arachno), and removing electrons closes it.'
      },
      {
        q: 'Predict: for a stiff bond like C$\\equiv$N (high force constant) versus a weak bond like I-I (low force constant), which vibrates at higher frequency?',
        a: '$\\tilde{\\nu} = (1/2\\pi c)\\sqrt{k/\\mu}$. A stiffer bond has a larger $k$ and a higher frequency. The C$\\equiv$N stretch appears near $2200\\,\\text{cm}^{-1}$. The I-I stretch appears near $215\\,\\text{cm}^{-1}$. Even with the larger reduced mass of I$_2$, the dominant effect is the much larger force constant of the triple bond.'
      },
      {
        q: 'Describe the Jablonski process from photon absorption through phosphorescence emission, step by step.',
        a: '1) Photon absorbed: $S_0$ to $S_1$ or higher. 2) Vibrational relaxation in $S_1$ (fast, picoseconds). 3) Internal conversion or intersystem crossing: $S_1 \\to T_1$, spin-forbidden but aided by spin-orbit coupling. 4) Vibrational relaxation in $T_1$. 5) $T_1 \\to S_0$ emission (phosphorescence, spin-forbidden, slow). Each step dissipates some energy, so phosphorescence is red-shifted from the absorbed wavelength.'
      },
      {
        q: 'How does the Michelson interferometer in an FT spectrometer produce an interferogram?',
        a: 'A beamsplitter divides the light into two paths of different length. One mirror is fixed and the other moves. As the path difference changes, the two beams interfere constructively and destructively at different wavelengths, as a function of mirror position. The detector records the total intensity versus mirror displacement. That is the interferogram. A Fourier transform of the interferogram gives the spectrum.'
      },
      {
        q: 'What is centrifugal distortion, and how does it affect the rotational spectrum of CO?',
        a: 'As a diatomic rotates faster (higher $J$), the centrifugal force stretches the bond and increases the moment of inertia. This lowers the energy of high-$J$ levels below the rigid rotor prediction. The corrected energy is $E_J = hc\\tilde{B}J(J+1) - hc\\tilde{D}J^2(J+1)^2$, where $\\tilde{D}$ is the centrifugal distortion constant. For CO, $\\tilde{D} \\approx 6 \\times 10^{-8}\\,\\text{cm}^{-1}$, a small but measurable correction.'
      },
      {
        q: 'Self-explain: why does the harmonic oscillator selection rule $\\Delta v = \\pm 1$ break down in real molecules?',
        a: "The $\\Delta v = \\pm 1$ rule is exact only for the harmonic potential, where the matrix elements $\\langle v|r|v'\\rangle$ are nonzero only for $v' = v \\pm 1$. In a Morse potential (anharmonic), the cubic and quartic terms in the potential mix vibrational wavefunctions, so $\\langle v|r|v'\\rangle$ is nonzero for $|v-v'| = 2, 3$, and so on. These are overtone and combination bands. They are weaker than the fundamental but observable."
      },
      {
        q: 'What is the g-value in EPR, and what information does a g-value different from 2.0023 carry?',
        a: 'The g-value is defined by $h\\nu = g\\beta_e B$ at resonance. The free electron has $g = 2.0023$. Deviation from this value reflects spin-orbit coupling mixing in excited states. Large g-shifts ($|g - 2| \\gg 0.01$) indicate a significant orbital angular momentum contribution, typical for heavy-atom radicals or metal complexes.'
      },
      {
        q: 'Transfer: would you expect the symmetric stretch of O$_3$ to be IR-active? O$_3$ is bent ($C_{2v}$).',
        a: 'O$_3$ is bent and belongs to $C_{2v}$, which has no center of inversion. The mutual exclusion rule does not apply. The symmetric stretch ($A_1$) has a changing dipole moment as both O-O bonds lengthen together and the angle changes, so it is IR-active. All three modes of O$_3$ are IR-active.'
      },
      {
        q: 'Predict: what happens to the NMR chemical shift of an acidic OH proton as you add base to the solution?',
        a: 'Adding base removes the proton (deprotonation) or forms hydrogen bonds. Exchange between OH forms and O$^-$ or H-bonded forms is fast on the NMR timescale. The observed peak is an average weighted by population. As you add base, the OH signal moves upfield (more shielded) and often broadens, eventually disappearing as the proton exchanges too fast to observe.'
      },
      {
        q: 'In the $^1$H NMR of chloroethane (CH$_3$CH$_2$Cl), predict the multiplet for each group and explain the pattern.',
        a: "The CH$_3$ group has 3 equivalent protons. They split the adjacent CH$_2$ into $2(2)(1/2)+1 = 3$ lines, a 1:2:1 triplet. The CH$_2$ group has 2 equivalent protons. They split the CH$_3$ into $2(3)(1/2)+1 = 4$ lines, a 1:3:3:1 quartet. Each set of $n$ equivalent neighbours gives $n+1$ lines with Pascal's triangle intensities."
      },
      {
        q: 'Terminal $\\nu(\\text{CO})$ diagnostic range: what wavenumber range covers terminal versus bridging CO?',
        a: 'Terminal CO absorbs at about $2000$ to $2120\\,\\text{cm}^{-1}$. Bridging CO ($\\mu_2$-CO) absorbs at about $1720$ to $1860\\,\\text{cm}^{-1}$. Triply bridging CO ($\\mu_3$-CO) falls even lower. This large shift makes IR spectroscopy the quickest tool for distinguishing CO coordination modes.'
      },
      {
        q: 'The $^{13}$C NMR of a metal carbonyl shows peaks near $\\delta +170$ to $+240$. Why so far downfield?',
        a: 'Carbonyl carbon in metal carbonyls is deshielded for two reasons. The C=O $\\pi$ bond removes electron density from carbon, and coordination to the metal does not fully restore it. This places carbonyl $^{13}$C resonances in a range similar to organic ketone carbons, but sometimes even further downfield because of metal effects.'
      },
      {
        q: 'Predict what IR spectrum you would observe for a sample of ethanol versus a sample of diethyl ether at the same concentration.',
        a: 'Ethanol has a broad O-H stretch near $3300$ to $3500\\,\\text{cm}^{-1}$ (hydrogen bonded) and a C-H stretch near $2900$ to $3000\\,\\text{cm}^{-1}$. Diethyl ether has only C-H stretches near $2900$ to $3000\\,\\text{cm}^{-1}$ and a strong C-O-C stretch near $1000$ to $1150\\,\\text{cm}^{-1}$. The presence or absence of the O-H band immediately distinguishes them.'
      },
      {
        q: 'Why does FT-IR achieve higher spectral resolution than a dispersive grating instrument of similar size?',
        a: 'Resolution in FT spectroscopy depends on the maximum path difference $\\Delta$: $\\delta\\nu = 1/(2\\Delta)$. A $50\\,\\text{cm}$ mirror travel gives $\\delta\\nu = 0.01\\,\\text{cm}^{-1}$. A grating instrument of similar size would need a very long, carefully aligned optical path for the same resolution. FT instruments also have higher throughput (Jacquinot advantage) and multiplexing.'
      },
      {
        q: 'For ortho and para hydrogen ($^1$H$_2$): what is the nuclear spin statistical weight ratio for the first two rotational levels?',
        a: '$^1$H has $I = 1/2$, so two identical protons obey Fermi statistics. Odd-$J$ levels (ortho-H$_2$) have nuclear spin weight 3. Even-$J$ levels (para-H$_2$) have weight 1. So the $J=1$ (ortho) to $J=0$ (para) intensity ratio in the spectrum is 3:1. This is a quantum-mechanical consequence of the Pauli principle.'
      },
      {
        q: 'Predict what happens to the EPR spectrum of a radical when you dissolve it in a viscous solvent versus a low-viscosity solvent.',
        a: 'In low-viscosity solvents, the radical tumbles fast. Anisotropic (orientation-dependent) interactions average to zero, and you see narrow isotropic lines with resolved hyperfine. In high-viscosity or frozen solution, tumbling is slow and the g- and A-anisotropy are not averaged. The spectrum broadens into a powder pattern spanning a wide field range.'
      },
      {
        q: 'Transfer: What vibrational modes of SO$_2$ are IR-active? SO$_2$ is bent, $C_{2v}$, with modes $A_1$, $A_1$, $B_1$.',
        a: 'In $C_{2v}$, modes of symmetry $A_1$ (transform as $z$) and $B_1$ (transform as $x$) are IR-active. $A_2$ is inactive. Both $A_1$ modes (symmetric stretch and bend) and the $B_1$ mode (antisymmetric stretch) are IR-active. All three normal modes of SO$_2$ are IR-active. There is no center of inversion in SO$_2$, so all modes can in principle be IR-active.'
      },
      {
        q: 'How is the Karplus equation derived, and what dihedral angle gives $J = 0$?',
        a: 'The Karplus equation ${}^3J = A + B\\cos\\phi + C\\cos 2\\phi$ comes from valence bond perturbation theory. The coupling depends on overlap of orbitals along the coupling pathway, which varies with the dihedral angle. $J$ is about zero when $\\phi \\approx 90^\\circ$, where orbital overlap vanishes. $J$ is maximum at $\\phi = 0^\\circ$ (eclipsed) and $180^\\circ$ (anti-periplanar).'
      },
      {
        q: 'An organometallic complex shows two $\\nu(\\text{CO})$ IR bands at $2010$ and $1980\\,\\text{cm}^{-1}$. What does this tell you about its symmetry?',
        a: 'Two IR-active $\\nu(\\text{CO})$ bands mean the molecule has at least two CO groups in environments that transform as two different IR-active symmetry species. For example, a fac-M(CO)$_3$ fragment gives 2 IR-active CO bands ($A_1 + E$), while mer-M(CO)$_3$ gives 3. Two bands fit several carbonyl geometries, so you need to count all bands and compare to symmetry predictions.'
      },
      {
        q: 'How does the $^{31}$P NMR coordination shift distinguish free versus bound phosphines in organometallics?',
        a: 'A free tertiary phosphine and the same phosphine bound to a metal resonate at clearly different $^{31}$P positions. The change on binding is the coordination shift $\\Delta\\delta$. It is a quick diagnostic that the ligand is bound, and its sign and magnitude help assign the metal oxidation state.'
      },
      {
        q: 'Predict: A molecule with a very stiff harmonic potential and low reduced mass vibrates at high frequency. What does this mean for its IR spectrum?',
        a: 'High frequency means high wavenumber in the IR. The C-H stretch (stiff bond, light H) appears near $3000\\,\\text{cm}^{-1}$. The C-I stretch (heavier I, weaker bond) appears near $500\\,\\text{cm}^{-1}$. Replacing H with D shifts $\\nu$ by $1/\\sqrt{2} \\approx 0.71$ because $\\mu$ doubles. That is a useful isotope labeling diagnostic.'
      },
      {
        q: 'Transfer: Beer-Lambert breaks down at high concentrations. What physical effect causes this?',
        a: 'At high concentrations, solute molecules interact with each other. Hydrogen bonding, ion pairing, or aggregation change the molar absorption coefficient $\\varepsilon$. Also, the refractive index changes with concentration, affecting how light travels through the cell. These effects break the assumption that $\\varepsilon$ is concentration-independent. Beer-Lambert is linear only in dilute solution, typically below about $0.01\\,\\text{mol}\\,\\text{L}^{-1}$.'
      },
      {
        q: 'What shape is a Doppler-broadened line, and what shape is a lifetime-broadened line?',
        a: 'Doppler broadening gives a Gaussian lineshape. The thermal speed distribution is Gaussian, and each speed class contributes a shifted frequency. Lifetime broadening gives a Lorentzian lineshape. The exponential decay of the excited state gives a Lorentzian in frequency via Fourier transform. Real lines are Voigt profiles, the convolution of both.'
      },
      {
        q: 'Differentiate NMR from EPR on the basis of what kind of species each technique detects.',
        a: 'NMR detects nuclei with nonzero nuclear spin ($^1$H, $^{13}$C, $^{31}$P, and others) and applies to all stable molecules. EPR (electron paramagnetic resonance) needs an unpaired electron, so it applies only to radicals, biradicals, triplet states, and paramagnetic metal ions. All molecules are NMR-active if they have suitable nuclei, but most are EPR-silent.'
      },
      {
        q: 'Predict whether H$_2$O normal modes are IR-active, Raman-active, or both, given $C_{2v}$ symmetry.',
        a: 'H$_2$O has no center of inversion ($C_{2v}$), so the mutual exclusion rule does not apply. All three modes ($2A_1 + B_1$) are both IR-active (they change the dipole moment) and Raman-active (they change the polarizability). This contrasts with CO$_2$, where the mutual exclusion rule separates IR and Raman activity.'
      },
      {
        q: 'Transfer: a researcher measures the $\\nu(\\text{CO})$ frequency of [Mn(CO)$_5$Cl] at $2119\\,\\text{cm}^{-1}$ (strong) and one weaker band. How does this compare to [Mn(CO)$_5$]$^-$ and what does it tell you about back-donation?',
        a: 'In [Mn(CO)$_5$]$^-$, the metal is electron-rich (anionic), so it back-donates strongly into CO $\\pi^*$, lowering $\\nu(\\text{CO})$ below about $2000\\,\\text{cm}^{-1}$. In [Mn(CO)$_5$Cl], the neutral Cl withdraws electron density from Mn, reducing back-donation, so $\\nu(\\text{CO})$ rises above $2100\\,\\text{cm}^{-1}$. Higher $\\nu(\\text{CO})$ means less back-donation and a stronger, less activated C$\\equiv$O bond.'
      },
      {
        q: 'What is the $^{31}$P coupling in a phosphine-metal complex where a trans influence is relevant?',
        a: 'For a phosphine trans to a strong-field ligand like CO, the trans influence weakens the M-P bond. This often shows up as a smaller $J_{P,\\text{trans}}$ than $J_{P,\\text{cis}}$. In $^{31}$P NMR, you can sometimes measure the $J_{P-M-P}$ coupling and use the ratio of coupling constants to assign cis versus trans geometry without a crystal structure.'
      },
      {
        q: 'In an FT spectrometer, doubling the maximum mirror displacement doubles the spectral resolution. What trade-off does this create?',
        a: 'Doubling mirror displacement doubles measurement time, since the mirror must travel twice as far. Resolution improves as $\\delta\\nu = 1/(2\\Delta)$, so halving $\\delta\\nu$ needs double $\\Delta$ and double scan time. In practice, longer scans can average more spectra (signal averaging improves SNR as $\\sqrt{n}$), so the trade-off is resolution versus time, not resolution versus SNR directly.'
      },
      {
        q: 'A microwave spectrum shows lines at $3.845$, $7.690$, $11.535$, $19.225\\,\\text{cm}^{-1}$ for CO. What is the pattern?',
        a: 'The lines are at $2\\tilde{B}$, $4\\tilde{B}$, $6\\tilde{B}$, $10\\tilde{B}$, for the $J = 0\\to1$, $1\\to2$, $2\\to3$, $4\\to5$ transitions, with one missing. The spacing between consecutive lines is $2\\tilde{B} \\approx 3.845\\,\\text{cm}^{-1}$. This even spacing is characteristic of the rigid rotor, and any deviation reveals centrifugal distortion or calibration issues.'
      },
      {
        q: 'What does an EPR g-value near 2.0023 tell you, and how does a d-metal complex differ?',
        a: 'A g-value near 2.0023 means the unpaired electron behaves almost like a free electron. Organic radicals, which are carbon-centered with weak spin-orbit coupling, sit right at $g \\approx 2.0023$. A d-metal complex has strong spin-orbit coupling and a small ligand-field splitting, so its g-value deviates much further from 2.0023. Reading the g-value tells you whether you have an organic radical or a metal-centered species.'
      },
      {
        q: 'Transfer: acetylene HC$\\equiv$CH is linear and centrosymmetric ($D_{\\infty h}$). How many IR-active and Raman-active modes does it have?',
        a: 'Acetylene has 5 atoms and is linear: $3(5) - 5 = 7$ modes. Symmetry analysis gives $2\\Sigma_g^+ + \\Sigma_u^+ + \\Pi_g + \\Pi_u$, counting degeneracies as separate modes: $2 + 1 + 2 + 2 = 7$. By mutual exclusion, the $g$ modes ($\\Sigma_g^+$, $\\Pi_g$) are Raman-active only, and the $u$ modes ($\\Sigma_u^+$, $\\Pi_u$) are IR-active only. No mode is both.'
      },
      {
        q: 'How does synergic bonding in M-CO complexes explain why CO is such a good stabilizing ligand for low oxidation state metals?',
        a: 'Low-valent metals have high d-electron density. Sigma-donation from CO into the metal stabilizes the CO$\\to$M bond. But the metal would become too negative if that were the only interaction. Pi-backdonation from metal d into CO $\\pi^*$ relieves electron density from the metal while further stabilizing the complex. The two effects reinforce each other: more sigma donation increases backdonation and the reverse.'
      },
      {
        q: 'In a variable-temperature NMR experiment, you lower the temperature of fluxional Fe$_2$(CO)$_9$. What do you observe?',
        a: 'At room temperature, fast fluxional exchange averages all CO environments, so you see one $^{13}$C carbonyl peak. As you cool, exchange slows. Near the coalescence temperature, the peak broadens dramatically. Below coalescence, it splits into separate peaks for chemically distinct CO environments (terminal and bridging). This gives $\\Delta G^\\ddagger$ for the exchange process at the coalescence temperature.'
      },
      {
        q: 'Transfer: The Beer-Lambert law is used in a flow cell where the sample concentration changes continuously. How do you still extract concentration?',
        a: 'You measure absorbance $A$ at each time point. Since $A = \\varepsilon c l$ and $\\varepsilon$ and $l$ are constant, $c = A/(\\varepsilon l)$ at every moment. This is exactly how UV-vis detectors in HPLC work. Continuous absorbance measurement gives a continuous concentration profile as fractions elute from the column.'
      },
      {
        q: 'What information can you get from the spacing of rotational lines in a microwave spectrum?',
        a: 'The spacing between adjacent $J \\to J+1$ lines is $2\\tilde{B}$. From $\\tilde{B} = h/(8\\pi^2 c I)$ you can calculate the moment of inertia $I$. For a diatomic with known atomic masses, this gives the bond length $r = \\sqrt{I/\\mu}$. Microwave spectroscopy is one of the most precise methods for measuring bond lengths.'
      },
      {
        q: 'Predict the number and type of EPR lines for a radical with three equivalent $^1$H ($I = 1/2$).',
        a: "Three equivalent $^1$H give $2nI + 1 = 2(3)(1/2) + 1 = 4$ lines with intensity ratio 1:3:3:1 (Pascal's triangle). This quartet pattern is the same shape as the CH$_3$ $^1$H NMR quartet in chloroethane."
      },
      {
        q: 'Predict how $\\nu(\\text{CO})$ changes when you compare [Mn(CO)$_5$]$^-$ with the neutral chloride [Mn(CO)$_5$Cl].',
        a: 'In [Mn(CO)$_5$]$^-$ the metal is anionic and electron-rich. It back-donates strongly into the CO $\\pi^*$ orbital, which weakens the C$\\equiv$O bond and lowers $\\nu(\\text{CO})$. In [Mn(CO)$_5$Cl] the chlorine pulls electron density off the metal, so back-donation drops, the C$\\equiv$O bond stays stronger, and $\\nu(\\text{CO})$ rises. Higher $\\nu(\\text{CO})$ signals weaker back-donation.'
      },
      {
        q: 'What is the chemical shift range for $^{13}$C NMR of carbonyl carbons in metal complexes, and why so downfield?',
        a: 'Carbonyl carbons in metal complexes appear at $\\delta +170$ to $+240\\,\\text{ppm}$. The C=O $\\pi$ bond removes electron density from carbon, deshielding it. Coordination to the metal modulates this but does not fully recover the shielding. The range is similar to, and sometimes exceeding, organic ketone carbonyl carbons at $\\delta\\,190$ to $220\\,\\text{ppm}$.'
      },
      {
        q: 'Describe how a Michelson interferometer generates constructive versus destructive interference.',
        a: 'Light hits the beamsplitter. Half goes to the fixed mirror and half to the moving mirror. Both beams reflect back to the beamsplitter where they recombine. If the path difference $\\Delta = n\\lambda$ (integer wavelength), constructive interference occurs. If $\\Delta = (n + \\tfrac{1}{2})\\lambda$, destructive interference occurs. Scanning the mirror through many path differences creates the oscillating interferogram signal.'
      },
      {
        q: 'What is the significance of the spin-statistics rule (ortho/para ratio) for homonuclear diatomics in spectroscopy?',
        a: 'For $^1$H$_2$ (fermions, $I = 1/2$), the overall wavefunction must be antisymmetric. Ortho-H$_2$ has parallel nuclear spins (triplet, weight 3) and occupies odd-$J$ levels. Para-H$_2$ has antiparallel spins (singlet, weight 1) and occupies even-$J$ levels. Every other rotational line has $3\\times$ higher intensity. For $^{16}$O$_2$ (bosons, $I = 0$), alternate lines are entirely absent.'
      },
      {
        q: 'In the EPR spectrum of a radical with one $^{14}$N ($I = 1$), how many lines appear and what is their relative intensity?',
        a: '$^{14}$N has $I = 1$, so $m_I = -1, 0, +1$. This gives $2(1)(1) + 1 = 3$ lines of equal intensity (1:1:1). The equal intensity arises because all three $m_I$ states of $^{14}$N have equal degeneracy for a single nucleus. This distinguishes $^{14}$N from $^1$H, which gives an equal doublet.'
      },
      {
        q: 'Explain why the Fellgett advantage of FT spectroscopy is less significant in the UV-visible region than in the IR.',
        a: 'In the IR region, the detector is a thermal device limited by detector noise, so the Fellgett advantage gives $\\sqrt{N}$ improvement. In the UV-visible, the dominant noise is shot noise from the photon flux itself, which already scales as $\\sqrt{N}$ whether you use dispersive or FT methods. So FT gives no multiplexing advantage over dispersive spectrometers when photon noise dominates.'
      },
      {
        q: 'Self-explain: why does a Lorentzian lineshape (lifetime broadening) have broader wings than a Gaussian (Doppler broadening) of the same half-width?',
        a: 'The Lorentzian $L(\\nu) = (\\Delta\\nu/2)^2/[(\\nu-\\nu_0)^2 + (\\Delta\\nu/2)^2]$ falls off as $\\nu^{-2}$ for large detuning. The Gaussian $G(\\nu) \\propto \\exp(-4\\ln 2 \\times (\\nu-\\nu_0)^2/\\Delta\\nu^2)$ falls off exponentially, much faster. So even with the same FWHM, the Lorentzian has much more intensity far from the center. Lorentzian wings matter when you need to resolve close-lying lines.'
      },
      {
        q: 'How does the McConnell equation let you turn a measured $^1$H hyperfine splitting into spin density?',
        a: 'The McConnell equation is $a_H = Q\\rho_\\pi$, with $Q \\approx 2.25\\,\\text{mT}$. You measure the $^1$H hyperfine coupling $a_H$ from the EPR spectrum, then divide by $Q$ to get $\\rho_\\pi$, the unpaired-electron spin density on the adjacent carbon. Doing this for each proton maps the spin density across the radical. In the methyl radical, the three equivalent $^1$H give one coupling, which fixes the spin density on the central carbon.'
      },
      {
        q: 'Transfer: a sample has $\\varepsilon = 4300\\,\\text{L}\\,\\text{mol}^{-1}\\,\\text{cm}^{-1}$ and path length $l = 1\\,\\text{cm}$. What concentration gives $A = 1$, and how does this method work?',
        a: 'Rearrange $A = \\varepsilon c l$ to $c = A/(\\varepsilon l)$. So $c = 1/(4300 \\times 1) = 2.3 \\times 10^{-4}\\,\\text{mol}\\,\\text{L}^{-1}$. Because $\\varepsilon$ and $l$ are fixed, absorbance maps straight onto concentration. You measure $A$ and divide by $\\varepsilon l$ to read the concentration of any absorbing species with a known $\\varepsilon$.'
      },
      {
        q: 'Why can rotational spectroscopy (microwave) determine bond lengths more precisely than X-ray crystallography for diatomics in the gas phase?',
        a: 'X-ray crystallography measures electron density in the solid and finds atomic positions with uncertainty about $1$ to $5\\,\\text{pm}$. Microwave gives $\\tilde{B}$ from line positions with sub-MHz precision. The moment of inertia and bond length follow with pm-level accuracy. Gas-phase measurements also avoid packing effects and show the true equilibrium geometry.'
      },
      {
        q: 'Predict: if you increase the field strength $B_0$ in an EPR spectrometer, what must you change to keep resonance?',
        a: 'The resonance condition is $h\\nu = g\\beta_e B_0$. If $B_0$ increases, $\\nu$ must increase in proportion to stay on resonance. Higher-field EPR therefore needs higher-frequency microwave sources, moving from X-band ($\\approx 9\\,\\text{GHz}$) to W-band ($\\approx 94\\,\\text{GHz}$) or higher. Higher field improves g-factor resolution.'
      },
      {
        q: 'What physical property does the rotational constant $\\tilde{B}$ directly encode?',
        a: '$\\tilde{B} = h/(8\\pi^2 c I)$, where $I$ is the moment of inertia. For a diatomic, $I = \\mu r^2$, where $\\mu$ is the reduced mass and $r$ is the bond length. So $\\tilde{B}$ directly encodes the mass distribution around the molecular axis. Measuring $\\tilde{B}$ precisely gives $r$ precisely, making microwave spectroscopy a bond-length tool.'
      },
      {
        q: 'Transfer: how would the EPR spectrum of the methyl radical change if you used $^{13}$CH$_3$ instead of $^{12}$CH$_3$?',
        a: '$^{12}$C has $I = 0$ and contributes no hyperfine splitting. $^{13}$C has $I = 1/2$ and would split each of the four $^1$H hyperfine lines (1:3:3:1 quartet) into a doublet, giving $4 \\times 2 = 8$ lines. The $^{13}$C coupling constant reflects the spin density at carbon, which is large since the radical is carbon-centered.'
      },
      {
        q: 'A radical shows an EPR quartet with 1:3:3:1 intensity. What does this tell you about the radical?',
        a: 'A quartet with a 1:3:3:1 pattern arises from three equivalent $^1$H nuclei ($I = 1/2$). This is identical to the NMR pattern for CH$_3$ coupling. It means the radical has three equivalent hydrogen atoms coupled to the unpaired electron, consistent with a methyl-type radical or any radical where three equivalent H atoms carry the bulk of the spin density.'
      }
    ],
    reference: {
      category: 'Quick Reference',
      title: 'Instrumental Analysis and Spectroscopy',
      sections: [
        <>
          <h2>General Spectroscopy</h2>
          <div className="ref-formula">
            <div className="ref-formula-name">Beer–Lambert law (absorbance form)</div>
            <div className="ref-formula-eq">{`$$A = \\varepsilon[J]\\,l = \\log(I_0/I)$$`}</div>
            <div className="ref-formula-desc">
              <p>
                When to use: measuring or calculating absorbance from concentration {`$[J]$`} (mol
                dm{`$^{-3}$`}), path length {`$l$`} (cm), and molar absorption coefficient{' '}
                {`$\\varepsilon$`} (dm{`$^3$`} mol{`$^{-1}$`} cm{`$^{-1}$`}).
              </p>
            </div>
          </div>
          <div className="ref-formula">
            <div className="ref-formula-name">Transmittance</div>
            <div className="ref-formula-eq">{`$$T = I/I_0; \\quad A = -\\log T$$`}</div>
            <div className="ref-formula-desc">
              <p>
                When to use: expressing the fraction of incident light that passes through;
                converting between A and T.
              </p>
            </div>
          </div>
          <div className="ref-formula">
            <div className="ref-formula-name">Transition dipole moment</div>
            <div className="ref-formula-eq">{`$$\\mu_{fi} = \\langle\\psi_f|\\hat{\\mu}|\\psi_i\\rangle$$`}</div>
            <div className="ref-formula-desc">
              <p>
                When to use: determining whether a transition is electric-dipole allowed; transition
                is forbidden when {`$\\mu_{fi} = 0$`}.
              </p>
            </div>
          </div>
          <div className="ref-formula">
            <div className="ref-formula-name">Doppler linewidth (half-width)</div>
            <div className="ref-formula-eq">{`$$\\delta\\tilde{\\nu}_{1/2} = \\frac{\\tilde{\\nu}_0}{c}\\sqrt{\\frac{8kT\\ln 2}{m}}$$`}</div>
            <div className="ref-formula-desc">
              <p>
                When to use: estimating inhomogeneous (Gaussian) linewidth from thermal motion at
                temperature T for molecules of mass m. Cooling reduces this.
              </p>
            </div>
          </div>
          <div className="ref-formula">
            <div className="ref-formula-name">Lifetime broadening</div>
            <div className="ref-formula-eq">{`$$\\delta E \\cdot \\tau \\approx \\hbar \\quad \\Rightarrow \\quad \\delta\\tilde{\\nu} = \\frac{1}{2\\pi c\\,\\tau}$$`}</div>
            <div className="ref-formula-desc">
              <p>
                When to use: estimating the homogeneous (Lorentzian) linewidth from excited-state
                lifetime {`$\\tau$`}. Cannot be reduced by cooling.
              </p>
            </div>
          </div>
          <div className="ref-formula">
            <div className="ref-formula-name">Einstein A and B coefficients</div>
            <div className="ref-formula-eq">{`$$A_{21} = \\frac{8\\pi h\\nu^3}{c^3}\\,B_{21}; \\quad B_{12} = B_{21}$$`}</div>
            <div className="ref-formula-desc">
              <p>
                When to use: relating rates of spontaneous emission (A), stimulated emission, and
                stimulated absorption (B) between two states.
              </p>
            </div>
          </div>
          <table className="lrn-table">
            <thead>
              <tr>
                <th>Region</th>
                <th>Wavelength / wavenumber</th>
                <th>Transition type</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>UV</td>
                <td>10–400 nm</td>
                <td>{`Electronic ($\\pi^*\\leftarrow\\pi$, $\\pi^*\\leftarrow n$)`}</td>
              </tr>
              <tr>
                <td>Visible</td>
                <td>400–750 nm</td>
                <td>Electronic (d–d, charge transfer)</td>
              </tr>
              <tr>
                <td>Near-IR</td>
                <td>{`~4000–13000 cm$^{-1}$`}</td>
                <td>Vibrational overtones</td>
              </tr>
              <tr>
                <td>Mid-IR</td>
                <td>{`~400–4000 cm$^{-1}$`}</td>
                <td>Fundamental vibrations</td>
              </tr>
              <tr>
                <td>Microwave</td>
                <td>{`~0.03–10 cm$^{-1}$`}</td>
                <td>Rotational transitions</td>
              </tr>
              <tr>
                <td>Radio</td>
                <td>cm–m</td>
                <td>Nuclear spin (NMR), electron spin (EPR)</td>
              </tr>
            </tbody>
          </table>
        </>,

        <>
          <h2>Rotational Spectroscopy</h2>
          <div className="ref-formula">
            <div className="ref-formula-name">Rotational terms</div>
            <div className="ref-formula-eq">{`$$\\tilde{F}(J) = \\tilde{B}\\,J(J+1)$$`}</div>
            <div className="ref-formula-desc">
              <p>
                When to use: finding the energy of rotational level J for a rigid rotor in
                wavenumber units.
              </p>
            </div>
          </div>
          <div className="ref-formula">
            <div className="ref-formula-name">Rotational constant</div>
            <div className="ref-formula-eq">{`$$\\tilde{B} = \\frac{h}{8\\pi^2 cI}$$`}</div>
            <div className="ref-formula-desc">
              <p>
                When to use: calculating {`$\\tilde{B}$`} from the moment of inertia I, or
                back-calculating bond length from measured {`$\\tilde{B}$`}.
              </p>
            </div>
          </div>
          <div className="ref-formula">
            <div className="ref-formula-name">Centrifugal distortion</div>
            <div className="ref-formula-eq">{`$$\\tilde{F}(J) = \\tilde{B}\\,J(J+1) - \\tilde{D}_J\\,J^2(J+1)^2; \\quad \\tilde{D}_J = \\frac{4\\tilde{B}^3}{\\tilde{\\nu}^2}$$`}</div>
            <div className="ref-formula-desc">
              <p>
                When to use: correcting rotational energies for bond stretching at high J where the
                rigid-rotor approximation fails.
              </p>
            </div>
          </div>
          <div className="ref-formula">
            <div className="ref-formula-name">Rotational Raman shift (S branch)</div>
            <div className="ref-formula-eq">{`$$\\Delta\\tilde{\\nu} = \\tilde{B}(4J+6), \\quad \\Delta J = +2$$`}</div>
            <div className="ref-formula-desc">
              <p>
                When to use: predicting or assigning Stokes Raman lines from rotational transitions
                with {`$\\Delta J = +2$`}.
              </p>
            </div>
          </div>
          <table className="lrn-table">
            <thead>
              <tr>
                <th>Technique</th>
                <th>{`$\\Delta J$`} rule</th>
                <th>Molecular requirement</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Microwave absorption</td>
                <td>{`$\\Delta J = \\pm 1$`}</td>
                <td>Permanent electric dipole moment</td>
              </tr>
              <tr>
                <td>Rotational Raman (Stokes)</td>
                <td>{`$\\Delta J = +2$`} (S branch)</td>
                <td>Anisotropic polarizability (no dipole needed)</td>
              </tr>
              <tr>
                <td>Rotational Raman (anti-Stokes)</td>
                <td>{`$\\Delta J = -2$`} (O branch)</td>
                <td>Anisotropic polarizability; upper level must be populated</td>
              </tr>
            </tbody>
          </table>
        </>,

        <>
          <h2>Vibrational Spectroscopy</h2>
          <div className="ref-formula">
            <div className="ref-formula-name">Harmonic vibrational terms</div>
            <div className="ref-formula-eq">{`$$\\tilde{G}(v) = \\tilde{\\nu}\\!\\left(v + \\tfrac{1}{2}\\right)$$`}</div>
            <div className="ref-formula-desc">
              <p>
                When to use: finding vibrational energy levels of a harmonic oscillator in
                wavenumber units.
              </p>
            </div>
          </div>
          <div className="ref-formula">
            <div className="ref-formula-name">Fundamental wavenumber and reduced mass</div>
            <div className="ref-formula-eq">{`$$\\tilde{\\nu} = \\frac{1}{2\\pi c}\\sqrt{\\frac{k_f}{m_\\text{eff}}}; \\quad m_\\text{eff} = \\frac{m_1 m_2}{m_1+m_2}$$`}</div>
            <div className="ref-formula-desc">
              <p>
                When to use: relating observed vibrational frequency to the bond force constant and
                reduced mass.
              </p>
            </div>
          </div>
          <div className="ref-formula">
            <div className="ref-formula-name">Anharmonic vibrational terms (Morse)</div>
            <div className="ref-formula-eq">{`$$\\tilde{G}(v) = \\tilde{\\nu}\\!\\left(v + \\tfrac{1}{2}\\right) - x_e\\tilde{\\nu}\\!\\left(v + \\tfrac{1}{2}\\right)^2$$`}</div>
            <div className="ref-formula-desc">
              <p>
                When to use: accounting for anharmonicity; {`$x_e > 0$`} lowers energy levels and
                allows overtone transitions.
              </p>
            </div>
          </div>
          <div className="ref-formula">
            <div className="ref-formula-name">Normal modes</div>
            <div className="ref-formula-eq">{`$$N_\\text{vib} = 3N-6 \\;(\\text{nonlinear}), \\quad 3N-5 \\;(\\text{linear})$$`}</div>
            <div className="ref-formula-desc">
              <p>
                When to use: counting independent vibrational modes for a molecule with N atoms.
              </p>
            </div>
          </div>
          <div className="ref-formula">
            <div className="ref-formula-name">P and R branch wavenumbers</div>
            <div className="ref-formula-eq">{`$$\\tilde{\\nu}_R = \\tilde{\\nu}_\\text{vib} + 2\\tilde{B}(J+1); \\quad \\tilde{\\nu}_P = \\tilde{\\nu}_\\text{vib} - 2\\tilde{B}J$$`}</div>
            <div className="ref-formula-desc">
              <p>
                When to use: predicting or assigning vibration–rotation lines in the R branch (
                {`$\\Delta J = +1$`}) or P branch ({`$\\Delta J = -1$`}); J is the lower-state
                quantum number.
              </p>
            </div>
          </div>
          <table className="lrn-table">
            <thead>
              <tr>
                <th>Property</th>
                <th>IR active</th>
                <th>Raman active</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Physical requirement</td>
                <td>Dipole moment changes during vibration</td>
                <td>Polarizability changes during vibration</td>
              </tr>
              <tr>
                <td>Symmetry species</td>
                <td>Transforms as x, y, or z</td>
                <td>{`Transforms as $x^2$, $y^2$, $z^2$, $xy$, $xz$, $yz$`}</td>
              </tr>
              <tr>
                <td>Centrosymmetric molecules</td>
                <td colSpan="2">
                  Mutual exclusion: IR active modes are Raman inactive and vice versa
                </td>
              </tr>
            </tbody>
          </table>
          <table className="lrn-table">
            <thead>
              <tr>
                <th>Group / bond</th>
                <th>{`Wavenumber (cm$^{-1}$)`}</th>
                <th>Notes</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>O–H stretch</td>
                <td>3200–3600</td>
                <td>Broad when H-bonded</td>
              </tr>
              <tr>
                <td>N–H stretch</td>
                <td>3100–3500</td>
                <td>One or two bands</td>
              </tr>
              <tr>
                <td>C–H stretch</td>
                <td>2850–3000</td>
                <td>sp³; sp² and sp shift higher</td>
              </tr>
              <tr>
                <td>C≡N / C≡C stretch</td>
                <td>2100–2260</td>
                <td>Sharp</td>
              </tr>
              <tr>
                <td>C=O stretch (carbonyl)</td>
                <td>1700–1750</td>
                <td>Shifts with conjugation</td>
              </tr>
              <tr>
                <td>Terminal M–CO</td>
                <td>2000–2120</td>
                <td>Lowers with more electron-rich metal</td>
              </tr>
              <tr>
                <td>Bridging {`$\\mu_2$`}-CO</td>
                <td>~1750–1860</td>
                <td>Diagnostic for bridging CO</td>
              </tr>
            </tbody>
          </table>
        </>,

        <>
          <h2>Electronic Spectroscopy</h2>
          <div className="ref-formula">
            <div className="ref-formula-name">Franck–Condon factor</div>
            <div className="ref-formula-eq">{`$$|S(v', v'')|^2 = |\\langle\\chi_{v'}|\\chi_{v''}\\rangle|^2$$`}</div>
            <div className="ref-formula-desc">
              <p>
                When to use: predicting relative intensities of vibrational bands in an electronic
                spectrum; the largest overlap gives the most intense band.
              </p>
            </div>
          </div>
          <table className="lrn-table">
            <thead>
              <tr>
                <th>Transition type</th>
                <th>{`Typical $\\varepsilon$ (dm$^3$ mol$^{-1}$ cm$^{-1}$)`}</th>
                <th>Reason for intensity</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>d–d (spin-allowed)</td>
                <td>1–100</td>
                <td>Laporte forbidden; vibronic coupling weakly allows it</td>
              </tr>
              <tr>
                <td>d–d (spin-forbidden)</td>
                <td>&lt;1</td>
                <td>Both Laporte and spin forbidden</td>
              </tr>
              <tr>
                <td>LMCT / MLCT</td>
                <td>{`$10^3\\text{–}10^5$`}</td>
                <td>Symmetry-allowed; large change in dipole</td>
              </tr>
              <tr>
                <td>{`$\\pi^*\\leftarrow\\pi$`}</td>
                <td>{`$10^3\\text{–}10^5$`}</td>
                <td>Symmetry-allowed; large transition dipole</td>
              </tr>
              <tr>
                <td>{`$\\pi^*\\leftarrow n$`}</td>
                <td>10–100</td>
                <td>Symmetry-forbidden (n orbital wrong symmetry)</td>
              </tr>
            </tbody>
          </table>
          <table className="lrn-table">
            <thead>
              <tr>
                <th>Property</th>
                <th>Fluorescence</th>
                <th>Phosphorescence</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Origin</td>
                <td>
                  S{`$_1 \\to$`} S{`$_0$`} radiative decay
                </td>
                <td>
                  T{`$_1 \\to$`} S{`$_0$`} radiative decay
                </td>
              </tr>
              <tr>
                <td>Spin change</td>
                <td>No (singlet–singlet)</td>
                <td>Yes (triplet–singlet, spin-forbidden)</td>
              </tr>
              <tr>
                <td>Typical lifetime</td>
                <td>Nanoseconds</td>
                <td>Microseconds to seconds</td>
              </tr>
              <tr>
                <td>Heavy-atom effect</td>
                <td>Not required</td>
                <td>Enhances spin-orbit coupling; increases rate</td>
              </tr>
            </tbody>
          </table>
        </>,

        <>
          <h2>NMR Spectroscopy</h2>
          <div className="ref-formula">
            <div className="ref-formula-name">NMR resonance condition / Larmor frequency</div>
            <div className="ref-formula-eq">{`$$h\\nu = g_I\\mu_N B_0; \\quad \\nu_L = \\frac{\\gamma_N B_0}{2\\pi}$$`}</div>
            <div className="ref-formula-desc">
              <p>
                When to use: calculating the resonance frequency for a nucleus in field {`$B_0$`};{' '}
                {`$\\gamma_N$`} is the magnetogyric ratio unique to each isotope.
              </p>
            </div>
          </div>
          <div className="ref-formula">
            <div className="ref-formula-name">Chemical shift</div>
            <div className="ref-formula-eq">{`$$\\delta = \\frac{\\nu_\\text{sample} - \\nu_\\text{ref}}{\\nu_\\text{ref}} \\times 10^6 \\quad (\\text{ppm})$$`}</div>
            <div className="ref-formula-desc">
              <p>
                When to use: expressing resonance frequency relative to TMS in field-independent
                units. Higher {`$\\sigma$`} → lower {`$\\delta$`} (upfield).
              </p>
            </div>
          </div>
          <div className="ref-formula">
            <div className="ref-formula-name">Karplus equation</div>
            <div className="ref-formula-eq">{`$$ {}^3J_{HH} = A + B\\cos\\phi + C\\cos 2\\phi$$`}</div>
            <div className="ref-formula-desc">
              <p>
                When to use: estimating vicinal {`$^1$`}H–{`$^1$`}H coupling from dihedral angle{' '}
                {`$\\phi$`}. Maximum at {`$\\phi = 0°$`} and {`$180°$`}; minimum near{' '}
                {`$\\phi = 90°$`}.
              </p>
            </div>
          </div>
          <div className="ref-formula">
            <div className="ref-formula-name">Free induction decay and linewidth</div>
            <div className="ref-formula-eq">{`$$S(t) = S_0\\cos(2\\pi\\nu_L t)\\,e^{-t/T_2}; \\quad \\delta\\nu_{1/2} = \\frac{1}{\\pi T_2}$$`}</div>
            <div className="ref-formula-desc">
              <p>
                When to use: describing the time-domain NMR signal and relating the Lorentzian
                linewidth to transverse relaxation time {`$T_2$`}.
              </p>
            </div>
          </div>
          <div className="ref-formula">
            <div className="ref-formula-name">T₁ and T₂ relaxation</div>
            <div className="ref-formula-eq">{`$$M_z(t) = M_0(1-e^{-t/T_1}); \\quad M_{xy}(t) = M_{xy,0}\\,e^{-t/T_2}; \\quad T_2 \\leq T_1$$`}</div>
            <div className="ref-formula-desc">
              <p>
                When to use: predicting recovery of longitudinal magnetization (T{`$_1$`}) and decay
                of transverse magnetization (T{`$_2$`}).
              </p>
            </div>
          </div>
          <table className="lrn-table">
            <thead>
              <tr>
                <th>Environment</th>
                <th>{`$\\delta$ (ppm)`}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Metal hydrides (M–H)</td>
                <td>−30 to −8</td>
              </tr>
              <tr>
                <td>TMS (reference)</td>
                <td>0</td>
              </tr>
              <tr>
                <td>Alkyl C–H (sp³)</td>
                <td>0.5–2</td>
              </tr>
              <tr>
                <td>Alkene =C–H (sp²)</td>
                <td>4.5–6.5</td>
              </tr>
              <tr>
                <td>Aromatic Ar–H</td>
                <td>6.5–8</td>
              </tr>
              <tr>
                <td>Aldehyde –CHO</td>
                <td>9–10</td>
              </tr>
              <tr>
                <td>Metal carbonyl C (M–CO)</td>
                <td>+170 to +240</td>
              </tr>
            </tbody>
          </table>
          <table className="lrn-table">
            <thead>
              <tr>
                <th>n equivalent spin-½ neighbours</th>
                <th>Pattern</th>
                <th>Relative intensities</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>0</td>
                <td>Singlet</td>
                <td>1</td>
              </tr>
              <tr>
                <td>1</td>
                <td>Doublet</td>
                <td>1:1</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Triplet</td>
                <td>1:2:1</td>
              </tr>
              <tr>
                <td>3</td>
                <td>Quartet</td>
                <td>1:3:3:1</td>
              </tr>
              <tr>
                <td>4</td>
                <td>Quintet</td>
                <td>1:4:6:4:1</td>
              </tr>
            </tbody>
          </table>
        </>,

        <>
          <h2>EPR Spectroscopy</h2>
          <div className="ref-formula">
            <div className="ref-formula-name">EPR resonance condition</div>
            <div className="ref-formula-eq">{`$$h\\nu = g\\,\\mu_B\\,B_0; \\quad g_e = 2.002319; \\quad \\mu_B = 9.274 \\times 10^{-24}\\,\\text{J}\\,\\text{T}^{-1}$$`}</div>
            <div className="ref-formula-desc">
              <p>
                When to use: calculating the microwave frequency needed for resonance at a given
                field, or finding the molecular g-value from measured frequency and field.
              </p>
            </div>
          </div>
          <div className="ref-formula">
            <div className="ref-formula-name">EPR hyperfine splitting</div>
            <div className="ref-formula-eq">{`$$E = h\\,a\\,m_S\\,m_I; \\quad \\text{Lines} = 2NI+1 \\;\\text{(N equivalent nuclei, spin I)}$$`}</div>
            <div className="ref-formula-desc">
              <p>
                When to use: predicting the number and positions of hyperfine lines in an EPR
                spectrum.
              </p>
            </div>
          </div>
          <div className="ref-formula">
            <div className="ref-formula-name">McConnell equation</div>
            <div className="ref-formula-eq">{`$$a = Q\\rho^\\pi, \\quad Q \\approx 2.25\\,\\text{mT}$$`}</div>
            <div className="ref-formula-desc">
              <p>
                When to use: estimating the {`$^1$`}H hyperfine coupling from unpaired spin density{' '}
                {`$\\rho^\\pi$`} on the adjacent carbon in a {`$\\pi$`}-radical.
              </p>
            </div>
          </div>
          <table className="lrn-table">
            <thead>
              <tr>
                <th>Nuclei present</th>
                <th>Number of lines</th>
                <th>Relative intensities</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>N equivalent spin-½ nuclei</td>
                <td>N + 1</td>
                <td>Pascal's triangle (binomial)</td>
              </tr>
              <tr>
                <td>1 nucleus with spin I</td>
                <td>2I + 1</td>
                <td>Equal intensities</td>
              </tr>
            </tbody>
          </table>
        </>,

        <>
          <h2>Organometallic Spectroscopy</h2>
          <div className="ref-formula">
            <div className="ref-formula-name">18-electron rule electron count</div>
            <div className="ref-formula-eq">{`$$\\text{VE} + \\sum_i(\\text{electrons from ligand}_i) = 18$$`}</div>
            <div className="ref-formula-desc">
              <p>
                When to use: checking whether a mononuclear transition metal complex is
                coordinatively saturated.
              </p>
            </div>
          </div>
          <table className="lrn-table">
            <thead>
              <tr>
                <th>Species</th>
                <th>{`$\\tilde{\\nu}$(CO) (cm$^{-1}$)`}</th>
                <th>Interpretation</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Free CO</td>
                <td>2143</td>
                <td>Reference; triple bond, no back-donation</td>
              </tr>
              <tr>
                <td>Terminal M–CO (electron-poor)</td>
                <td>2050–2120</td>
                <td>Weak {`$\\pi$`}-back-donation</td>
              </tr>
              <tr>
                <td>Terminal M–CO (electron-rich)</td>
                <td>1850–2000</td>
                <td>Strong {`$\\pi$`}-back-donation weakens C≡O</td>
              </tr>
              <tr>
                <td>Bridging {`$\\mu_2$`}-CO</td>
                <td>~1750–1860</td>
                <td>Two metals share back-donation</td>
              </tr>
            </tbody>
          </table>
          <table className="lrn-table">
            <thead>
              <tr>
                <th>Cluster type</th>
                <th>Skeletal electron pairs (SEP)</th>
                <th>Structure</th>
                <th>Example</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Closo</td>
                <td>n + 1</td>
                <td>Closed polyhedron</td>
                <td>
                  [B{`$_6$`}H{`$_6$`}]{`$^{2-}$`} (octahedron)
                </td>
              </tr>
              <tr>
                <td>Nido</td>
                <td>n + 2</td>
                <td>One vertex missing</td>
                <td>
                  B{`$_5$`}H{`$_9$`}
                </td>
              </tr>
              <tr>
                <td>Arachno</td>
                <td>n + 3</td>
                <td>Two vertices missing</td>
                <td>
                  B{`$_4$`}H{`$_{10}$`}
                </td>
              </tr>
            </tbody>
          </table>
        </>
      ]
    }
  }

  return <LearningTemplate config={config} />
}
