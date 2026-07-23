import { LearningTemplate } from '../../../../components/learning/learning-template'
import {
  BinaryEntropyViz,
  ShannonHartleyViz,
  GaussianEntropyViz,
  RateDistortionViz,
  CommunicationSystemViz,
  TwoStateMarkovViz,
  ShannonFanoTreeViz,
  BinarySymmetricChannelViz
} from '../../../../components/viz'

const config = {
  cssPrefix: 'she',
  documentTitle: 'Shannon Entropy and Information Theory - AETHER',
  learning: {
    category: 'Papers',
    title: 'Shannon Entropy and Information Theory',
    subtitle: 'The mathematical foundation of all modern communication systems.',
    sections: [
      <>
        <h2>The Fundamental Problem of Communication</h2>
        <div className="lrn-predict">
          <span className="lrn-predict-label">PREDICT</span>
          <p>
            Before reading: a coin flip has two equally likely outcomes. A loaded coin lands heads
            99% of the time. Which source carries more information per flip, and why?
          </p>
          <details className="lrn-predict-reveal">
            <summary>Check your thinking</summary>
            <p>
              The fair coin carries more information. When every outcome is equally likely, you
              learn the most from seeing the result. When one outcome is almost certain, the result
              is rarely surprising. Shannon made this intuition precise with the entropy formula.
            </p>
          </details>
        </div>

        <div className="lrn-definition">
          <span className="lrn-definition-term">The Engineering Problem</span>
          <div className="lrn-definition-desc">
            <p>Reproduce at one point a message selected at another point.</p>
            <p>The semantic meaning of a message is irrelevant to the engineering problem.</p>
          </div>
        </div>

        <p>Whether you are sending text, voice, or video, the math is the same.</p>

        <div className="lrn-elaborate">
          <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
          <p>
            Meaning depends on the receiver's context. The same bit pattern means "start recording"
            to one device and "delete file" to another.
          </p>
          <p>
            But the channel does not know meaning. It only moves symbols. So the theory must be
            built on probabilities of symbols, not on their meanings.
          </p>
        </div>

        <h3>The Five-Component Communication System</h3>

        <p>Shannon's model has five parts, each with a precise role.</p>

        <div className="lrn-steps">
          <div className="lrn-step">
            <span className="lrn-step-title">1. Information Source</span>
            <p className="lrn-step-content">
              Selects a message from a set of possible messages. Examples: a person speaking, a
              sensor reading temperature.
            </p>
          </div>
          <div className="lrn-step">
            <span className="lrn-step-title">2. Transmitter</span>
            <p className="lrn-step-content">
              Encodes the message into a signal suitable for the channel. Example: a modem
              converting text to sound.
            </p>
          </div>
          <div className="lrn-step">
            <span className="lrn-step-title">3. Channel</span>
            <p className="lrn-step-content">
              The medium used for transmission. It may add noise. Examples: a phone wire, a radio
              frequency, optical fiber.
            </p>
          </div>
          <div className="lrn-step">
            <span className="lrn-step-title">4. Receiver</span>
            <p className="lrn-step-content">Decodes the received signal back into a message.</p>
          </div>
          <div className="lrn-step">
            <span className="lrn-step-title">5. Destination</span>
            <p className="lrn-step-content">The person or device the message is intended for.</p>
          </div>
        </div>

        <p>
          A noise source is also present. It corrupts the signal between transmitter and receiver.
        </p>

        <CommunicationSystemViz />

        <h3>What Is a Logarithm?</h3>

        <p>
          A logarithm is the reverse of raising a number to a power. Powers go one way:{' '}
          {`$2^3 = 8$`} means "multiply three 2s together." The logarithm goes back the other way:{' '}
          {`$\\log_2 8 = 3$`} means "how many 2s multiply to make 8?" The answer is 3.
        </p>

        <div className="lrn-callout">
          <span className="lrn-callout-label">Reading log₂</span>
          <p>
            Base-2 logarithm, written {`$\\log_2 x$`}, counts how many times you double from 1 to
            reach {`$x$`}. Double once: {`$2$`}. Double twice: {`$4$`}. Double three times: {`$8$`}.
            So {`$\\log_2 2 = 1$`}, {`$\\log_2 4 = 2$`}, {`$\\log_2 8 = 3$`}. Doubling and{' '}
            {`$\\log_2$`} undo each other: {`$2^{\\log_2 x} = x$`}.
          </p>
          <p>
            The one rule that matters here: a logarithm turns multiplication into addition.{' '}
            {`$\\log(m \\cdot n) = \\log m + \\log n$`}. Check it:{' '}
            {`$\\log_2(4 \\cdot 8) = \\log_2 32 = 5$`}, and {`$\\log_2 4 + \\log_2 8 = 2 + 3 = 5$`}.
            Same answer.
          </p>
        </div>

        <h3>Why Logarithms?</h3>

        <p>Shannon measured information in logarithms for three concrete reasons.</p>

        <div className="lrn-steps">
          <div className="lrn-step">
            <span className="lrn-step-title">Additivity</span>
            <p className="lrn-step-content">
              Two independent sources should have combined information equal to the sum of their
              individual information amounts. Logarithms make this work:{' '}
              {`$\\log(m \\cdot n) = \\log m + \\log n$`}.
            </p>
          </div>
          <div className="lrn-step">
            <span className="lrn-step-title">Practical parameters are logarithmic</span>
            <p className="lrn-step-content">
              Bandwidth, number of relay stations, and time all scale logarithmically with the
              number of messages. The math matches engineering reality.
            </p>
          </div>
          <div className="lrn-step">
            <span className="lrn-step-title">Natural unit</span>
            <p className="lrn-step-content">
              Base 2 gives bits. One bit is the information in a single fair coin flip. Base 10
              gives decimal digits. Bases convert via: {`$\\log_2 M = 3.32 \\log_{10} M$`}.
            </p>
          </div>
        </div>

        <div className="lrn-elaborate">
          <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
          <p>
            Additivity requires the information measure to be a logarithm. If you flip two
            independent fair coins, you learn 2 bits total, not 1 bit. Only logarithms turn
            multiplication of outcomes into addition of information.
          </p>
        </div>
      </>,

      <>
        <h2>Discrete Noiseless Channels</h2>

        <div className="lrn-definition">
          <span className="lrn-definition-term">Channel Capacity (Noiseless)</span>
          <div className="lrn-definition-desc">
            <p>
              The capacity {`$C$`} of a discrete noiseless channel is the growth rate of allowed
              signal sequences over time.
            </p>
            <div className="lrn-eq lrn-eq-display">
              <span>{`$$C = \\lim_{T \\to \\infty} \\frac{\\log N(T)}{T}$$`}</span>
            </div>
            <p>
              Here {`$N(T)$`} is the number of allowed sequences of duration {`$T$`}. The symbol{' '}
              {`$\\lim_{T \\to \\infty}$`} means the value the ratio settles toward as {`$T$`} gets
              very large.
            </p>
          </div>
        </div>

        <div className="lrn-predict">
          <span className="lrn-predict-label">PREDICT</span>
          <p>
            A telegraph uses dots (2 units), dashes (4 units), letter spaces (3 units), and word
            spaces (6 units). A space never follows another space. Before computing, predict: will
            the capacity be closer to 0.1, 0.5, or 1.0 bits per unit time?
          </p>
          <details className="lrn-predict-reveal">
            <summary>Check your thinking</summary>
            <p>
              Solving for this telegraph gives {`$C = 0.539$`} bits per unit time. The mix of short
              and long symbols gives a capacity less than 1 but well above 0.1.
            </p>
          </details>
        </div>

        <h3>The Recurrence Method</h3>

        <p>
          When symbols have durations {`$t_1, t_2, \\ldots, t_n$`}, the number of sequences of total
          duration {`$t$`} satisfies a recurrence.
        </p>

        <div className="lrn-eq">
          <span>{`$$N(t) = N(t - t_1) + N(t - t_2) + \\cdots + N(t - t_n)$$`}</span>
        </div>

        <p>
          To solve it, guess that the count grows like a power: {`$N(t) = X^t$`} for some growth
          factor {`$X$`}. Substitute that guess into the recurrence and divide every term by{' '}
          {`$X^t$`}. Each term {`$X^{t - t_i}$`} divided by {`$X^t$`} leaves {`$X^{-t_i}$`}. So the
          guess works exactly when:
        </p>

        <div className="lrn-eq">
          <span>{`$$X^{-t_1} + X^{-t_2} + \\cdots + X^{-t_n} = 1$$`}</span>
        </div>

        <p>
          This is the characteristic equation. Find its largest real root {`$X_0$`} (search for the{' '}
          {`$X$`} that makes the left side equal 1). The largest real root {`$X_0$`} gives{' '}
          {`$C = \\log X_0$`}.
        </p>

        <h3>Telegraph Example</h3>

        <p>
          The telegraph has one extra rule: a space never follows another space. So the simple
          durations-only recurrence does not apply directly. Instead, count every legal way a
          sequence can end. A dot (2 units) or dash (4 units) can follow anything. A letter space (3
          units) or word space (6 units) must be followed by a dot or dash, so they always come in
          pairs: letter-space then dot is {`$3 + 2 = 5$`} units, letter-space then dash is{' '}
          {`$3 + 4 = 7$`} units, word-space then dot is {`$6 + 2 = 8$`} units, and word-space then
          dash is {`$6 + 4 = 10$`} units. That gives six ending blocks with durations 2, 4, 5, 7, 8,
          and 10:
        </p>

        <div className="lrn-eq">
          <span>{`$$N(t) = N(t-2) + N(t-4) + N(t-5) + N(t-7) + N(t-8) + N(t-10)$$`}</span>
        </div>

        <p>Solving the characteristic equation gives {`$C = 0.539$`} bits per unit time.</p>

        <div className="lrn-elaborate">
          <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
          <p>
            The capacity grows with the largest root of the characteristic polynomial because that
            root sets the dominant exponential growth rate of {`$N(t)$`}. Smaller roots contribute
            terms that decay relative to the largest one as {`$t$`} grows.
          </p>
          <p>
            Taking {`$\\log X_0$`} converts that exponential growth rate into bits per unit time.
            The base of the log fixes the unit: base 2 for bits, base e for nats.
          </p>
        </div>

        <div className="lrn-self-explain">
          <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
          <p>
            Why does the recurrence count sequences? Why is the number of sequences starting at time{' '}
            {`$t$`} equal to the sum of sequences starting at {`$t - t_i$`} for each symbol duration{' '}
            {`$t_i$`}?
          </p>
          <details className="lrn-self-explain-reveal">
            <summary>Expert explanation</summary>
            <p>
              Every valid sequence of total duration {`$t$`} must end with exactly one symbol. If
              the last symbol has duration {`$t_i$`}, the preceding symbols form a valid sequence of
              duration {`$t - t_i$`}. So the count at time {`$t$`} equals the sum of counts at{' '}
              {`$t - t_i$`} over all symbols. This is the same logic as counting paths in a tree.
            </p>
          </details>
        </div>
      </>,

      <>
        <h2>Information Sources and Entropy</h2>

        <div className="lrn-definition">
          <span className="lrn-definition-term">Stochastic Information Source</span>
          <div className="lrn-definition-desc">
            <p>
              A source produces symbols one at a time. Each symbol is chosen with probabilities that
              may depend on what came before.
            </p>
            <p>
              A Markov process is the most common model: the probability of the next symbol depends
              only on the current state, not the full history.
            </p>
          </div>
        </div>

        <p>Natural language, DNA sequences, and stock prices all fit this model.</p>

        <div className="lrn-predict">
          <span className="lrn-predict-label">PREDICT</span>
          <p>
            Five letters A, B, C, D, E each appear with equal probability 0.2. A second source has
            the same letters but with probabilities 0.4, 0.1, 0.2, 0.2, 0.1. Which source has higher
            entropy? Why?
          </p>
          <details className="lrn-predict-reveal">
            <summary>Check your thinking</summary>
            <p>
              The uniform source (Example A) has higher entropy. Entropy is maximized when all
              outcomes are equally likely. When one outcome is more likely (A at 0.4), you are less
              surprised on average. Entropy falls.
            </p>
          </details>
        </div>

        <h3>Digram Probabilities</h3>

        <p>
          "Stationary" means the symbol statistics do not drift over time. Three probabilities show
          up. Each says something different:
        </p>

        <ul className="lrn-list">
          <li>
            {`$p_i(j)$`} is the transition probability: the chance the next symbol is {`$j$`} when
            you are in state {`$i$`}.
          </li>
          <li>
            {`$p(i, j)$`} is the joint probability: the chance of seeing the pair {`$i$`} then{' '}
            {`$j$`}.
          </li>
          <li>
            {`$p(i)$`} is the marginal probability: the chance of being in state {`$i$`} at all,
            ignoring what comes next.
          </li>
        </ul>

        <p>These three connect in plain ways:</p>

        <div className="lrn-eq">
          <span>{`$$p(i) = \\sum_j p(i, j), \\quad p(i, j) = p(i) \\, p_i(j), \\quad \\sum_{i,j} p(i,j) = 1$$`}</span>
        </div>

        <p>
          The first adds the pairs over every next symbol to recover {`$p(i)$`}. The second splits a
          pair into "land in {`$i$`}, then move to {`$j$`}." The third says all pairs add to one.
        </p>

        <p>
          The long-run, or stationary, probability of state {`$i$`} is written {`$P_i$`} with a
          capital P. It is the fraction of time the source spends in state {`$i$`} after running a
          long while. At equilibrium it obeys:
        </p>

        <div className="lrn-eq">
          <span>{`$$P_j = \\sum_i P_i \\, p_i(j)$$`}</span>
        </div>

        <h3>N-gram Approximations to English</h3>

        <p>There are six natural levels of approximation to English text.</p>

        <div className="lrn-steps">
          <div className="lrn-step">
            <span className="lrn-step-title">Zero-order approximation</span>
            <p className="lrn-step-content">
              All 27 symbols (26 letters + space) equally likely. Completely random letter
              sequences. No structure.
            </p>
          </div>
          <div className="lrn-step">
            <span className="lrn-step-title">First-order approximation</span>
            <p className="lrn-step-content">
              Letters chosen with the actual frequencies of English. Letters remain independent.
              More E, T, A than Q, X.
            </p>
          </div>
          <div className="lrn-step">
            <span className="lrn-step-title">Second-order approximation</span>
            <p className="lrn-step-content">
              Pairs (digrams) of letters match English frequencies. "TH" common, "QX" impossible.
            </p>
          </div>
          <div className="lrn-step">
            <span className="lrn-step-title">Third-order approximation</span>
            <p className="lrn-step-content">
              Trigrams match English. Short recognizable fragments appear.
            </p>
          </div>
          <div className="lrn-step">
            <span className="lrn-step-title">First-order word approximation</span>
            <p className="lrn-step-content">
              Words chosen independently with correct English word frequencies. Real words, no
              grammar.
            </p>
          </div>
          <div className="lrn-step">
            <span className="lrn-step-title">Second-order word approximation</span>
            <p className="lrn-step-content">
              Word pairs match English. Text begins to look grammatical.
            </p>
          </div>
        </div>

        <h3>Ergodic and Mixed Sources</h3>

        <div className="lrn-definition">
          <span className="lrn-definition-term">Ergodic Source</span>
          <div className="lrn-definition-desc">
            <p>
              A source is ergodic when it is statistically the same everywhere. Any long sequence
              looks like any other long sequence from the same source. Time averages equal ensemble
              averages.
            </p>
          </div>
        </div>

        <div className="lrn-definition">
          <span className="lrn-definition-term">Mixed Source</span>
          <div className="lrn-definition-desc">
            <p>
              A weighted combination of ergodic components: {`$L = p_1 L_1 + p_2 L_2 + \\cdots$`}
            </p>
            <p>The entropy of a mixed source is the weighted average of component entropies.</p>
          </div>
        </div>

        <div className="lrn-compare">
          <div className="lrn-compare-col">
            <span className="lrn-compare-title">Ergodic Source</span>
            <p>Single statistically homogeneous process.</p>
            <p>Time averages equal ensemble averages.</p>
            <p>All long sequences have similar statistics.</p>
            <p>Entropy {`$H$`} is well-defined from any single long sequence.</p>
          </div>
          <div className="lrn-compare-col">
            <span className="lrn-compare-title">Mixed Source</span>
            <p>Weighted combination of ergodic components.</p>
            <p>Different long sequences may have different statistics.</p>
            <p>Entropy is a weighted average of component entropies.</p>
            <p>Step function: entropy takes a discrete set of values.</p>
          </div>
        </div>

        <h3>Worked Example: Two-State Markov Source</h3>

        <p>
          Consider a source with two states A and B. Transition probabilities: {`$p_A(B) = 0.2$`},{' '}
          {`$p_A(A) = 0.8$`}, {`$p_B(A) = 0.5$`}, {`$p_B(B) = 0.5$`}. Compute the stationary
          distribution and the digram probabilities step by step.
        </p>

        <TwoStateMarkovViz />

        <div className="lrn-steps">
          <div className="lrn-step">
            <span className="lrn-step-title">Step 1: Stationary equations</span>
            <p className="lrn-step-content">
              Solve {`$P_A = P_A \\, p_A(A) + P_B \\, p_B(A)$`} and {`$P_A + P_B = 1$`}. Substitute:{' '}
              {`$P_A = 0.8 P_A + 0.5 P_B$`}, so {`$0.2 P_A = 0.5 P_B$`}, giving {`$P_A = 2.5 P_B$`}.
            </p>
          </div>
          <div className="lrn-step">
            <span className="lrn-step-title">Step 2: Solve for stationary probabilities</span>
            <p className="lrn-step-content">
              From {`$P_A + P_B = 1$`} and {`$P_A = 2.5 P_B$`}: {`$3.5 P_B = 1$`}, so{' '}
              {`$P_B \\approx 0.286$`} and {`$P_A \\approx 0.714$`}.
            </p>
          </div>
          <div className="lrn-step">
            <span className="lrn-step-title">Step 3: Digram probabilities</span>
            <p className="lrn-step-content">
              {`$p(A,A) = 0.714 \\times 0.8 = 0.571$`}. {`$p(A,B) = 0.714 \\times 0.2 = 0.143$`}.{' '}
              {`$p(B,A) = 0.286 \\times 0.5 = 0.143$`}. {`$p(B,B) = 0.286 \\times 0.5 = 0.143$`}.
            </p>
          </div>
          <div className="lrn-step">
            <span className="lrn-step-title">Step 4: Verify</span>
            <p className="lrn-step-content">
              Sum of digrams: {`$0.571 + 0.143 + 0.143 + 0.143 = 1.000$`}. The marginals match{' '}
              {`$P_A$`} and {`$P_B$`}. The Markov source is consistent.
            </p>
          </div>
        </div>

        <div className="lrn-self-explain">
          <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
          <p>
            Why must {`$P_A = 2.5 P_B$`} for this source? Explain in your own words why a state with
            rare outgoing departures (low {`$p_A(B)$`}) gets more probability mass.
          </p>
          <details className="lrn-self-explain-reveal">
            <summary>Expert explanation</summary>
            <p>
              At equilibrium, flow into A equals flow out of A. Flow out of A is{' '}
              {`$P_A \\, p_A(B) = 0.2 P_A$`}. Flow into A is {`$P_B \\, p_B(A) = 0.5 P_B$`}. Setting
              them equal gives {`$0.2 P_A = 0.5 P_B$`}, so {`$\\frac{P_A}{P_B} = 2.5$`}.
            </p>
            <p>
              State A "leaks" slowly (only 20% chance of leaving each step), so probability piles up
              there. State B leaks fast (50% chance of leaving), so probability flows away. Stickier
              states accumulate more stationary mass.
            </p>
          </details>
        </div>

        <div className="lrn-elaborate">
          <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
          <p>
            Markov sources work because real-world sequences have local structure. Letters in
            English, notes in music, codons in DNA all depend strongly on what came just before, but
            not on what happened many steps ago.
          </p>
          <p>
            The Markov assumption captures this short-range dependence with a small number of
            transition probabilities. Higher-order Markov chains (depending on the last 2 or 3
            symbols) capture more structure and give tighter entropy estimates for English.
          </p>
        </div>
      </>,

      <>
        <h2>Entropy: Measuring Uncertainty</h2>

        <div className="lrn-definition">
          <span className="lrn-definition-term">Entropy</span>
          <div className="lrn-definition-desc">
            <p>The only measure of uncertainty satisfying the three axioms below is:</p>
            <div className="lrn-eq lrn-eq-display">
              <span>{`$$H = -K \\sum_{i=1}^{n} p_i \\log p_i$$`}</span>
            </div>
            <p>
              The sign {`$\\sum_{i=1}^{n}$`} means "add up over all the outcomes." You compute the
              term {`$p_i \\log p_i$`} for each outcome {`$i$`}, from the first to the last, and add
              them. The {`$i$`} is just a counter that walks through every outcome.
            </p>
            <p>
              {`$K$`} is a positive constant that sets the unit. With base-2 logarithms and{' '}
              {`$K = 1$`}, entropy is measured in bits.
            </p>
          </div>
        </div>

        <div className="lrn-callout">
          <span className="lrn-callout-label">Entropy Is a Weighted Average</span>
          <p>
            Each outcome carries a surprise of {`$\\log_2 \\tfrac{1}{p_i}$`} bits: rare outcomes
            surprise you more. Entropy is the weighted average of that surprise.
          </p>
          <p>
            A weighted average multiplies each value by how often it happens, then adds. So entropy
            weights each outcome's surprise by its own probability {`$p_i$`}. Common outcomes pull
            the average toward their small surprise. That is why a lopsided source has low entropy.
          </p>
        </div>

        <p>
          Higher entropy means more surprise per symbol. Lower entropy means the source is more
          predictable and its output can be compressed further.
        </p>

        <div className="lrn-predict">
          <span className="lrn-predict-label">PREDICT</span>
          <p>
            Two sources each emit 8 symbols. Source X has uniform probabilities. Source Y has one
            symbol at probability 0.5 and the other 7 split evenly. Predict: which has higher
            entropy, and roughly how many bits per symbol does each carry?
          </p>
          <details className="lrn-predict-reveal">
            <summary>Check your thinking</summary>
            <p>
              Source X has the maximum possible entropy: {`$\\log_2 8 = 3$`} bits per symbol. Source
              Y is more predictable, so its entropy is lower. Compute:{' '}
              {`$H_Y = -[0.5 \\log_2 0.5 + 7 \\times \\frac{0.5}{7} \\log_2 \\frac{0.5}{7}]$`}{' '}
              {`$\\approx 0.5 + 7 \\times 0.0714 \\times 3.807 \\approx 2.41$`} bits per symbol.
              Concentrating mass on one symbol drops entropy by about 0.6 bits.
            </p>
          </details>
        </div>

        <h3>The Three Axioms</h3>

        <p>Shannon required any reasonable measure of uncertainty to satisfy three properties.</p>

        <div className="lrn-steps">
          <div className="lrn-step">
            <span className="lrn-step-title">Continuity</span>
            <p className="lrn-step-content">
              {`$H(p_1, \\ldots, p_n)$`} changes smoothly as the probabilities change. Small changes
              in probability cause small changes in uncertainty.
            </p>
          </div>
          <div className="lrn-step">
            <span className="lrn-step-title">Monotonicity</span>
            <p className="lrn-step-content">
              For uniform distributions, {`$H$`} increases with {`$n$`}. More equally likely
              outcomes means more uncertainty.
            </p>
          </div>
          <div className="lrn-step">
            <span className="lrn-step-title">Weighted decomposition</span>
            <p className="lrn-step-content">
              You can split one choice into two steps and the total uncertainty must not change. The
              order you ask the questions in cannot change how much you learn.
            </p>
          </div>
        </div>

        <div className="lrn-callout">
          <span className="lrn-callout-label">Walking the Decomposition Axiom</span>
          <p>
            Pick one of three outcomes with probabilities{' '}
            {`$\\tfrac{1}{2}, \\tfrac{1}{3},
            \\tfrac{1}{6}$`}
            . You can make this pick in two steps instead of one.
          </p>
          <p>
            Step one: flip a fair coin. Heads (probability {`$\\tfrac{1}{2}$`}) means the first
            outcome, and you stop. Tails (probability {`$\\tfrac{1}{2}$`}) means you go to step two.
          </p>
          <p>
            Step two only happens on tails. There you choose between the last two outcomes. Their
            shares were {`$\\tfrac{1}{3}$`} and {`$\\tfrac{1}{6}$`}, which together make
            {`$\\tfrac{1}{2}$`}. Rescaled to add to one, they become {`$\\tfrac{2}{3}$`} and{' '}
            {`$\\tfrac{1}{3}$`}.
          </p>
          <p>
            The second question only gets asked half the time, so its uncertainty counts only half
            as much. That is where the {`$\\tfrac{1}{2}$`} weight comes from:
          </p>
          <div className="lrn-eq">
            <span>{`$$H(\\tfrac{1}{2}, \\tfrac{1}{3}, \\tfrac{1}{6}) = H(\\tfrac{1}{2}, \\tfrac{1}{2}) + \\tfrac{1}{2} H(\\tfrac{2}{3}, \\tfrac{1}{3})$$`}</span>
          </div>
          <p>
            Both sides work out to about 1.46 bits. Asking in one step or two steps gives the same
            total. That is exactly what the axiom demands.
          </p>
        </div>

        <div className="lrn-elaborate">
          <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
          <p>
            Start with {`$s$`} equally likely outcomes and write its uncertainty as {`$A(s)$`}.
            Picking from {`$s^m$`} equally likely outcomes is the same as making {`$m$`} separate
            picks from {`$s$`}. So the uncertainty must add up: {`$A(s^m) = m A(s)$`}. Only a
            logarithm behaves this way.
          </p>
          <p>
            The decomposition axiom then forces the weighted-sum shape. Together the two facts pin
            down {`$H = -K \\sum p_i \\log p_i$`}, with only the constant {`$K$`} left to set the
            unit.
          </p>
        </div>

        <h3>Joint and Conditional Entropy</h3>

        <p>
          So far each source had one output {`$x$`}. Now track two outputs {`$x$`} and {`$y$`}
          together, like an input symbol and the symbol that comes out the other end.
        </p>

        <p>
          The joint entropy {`$H(x, y)$`} is the total uncertainty in the pair. The conditional
          entropy {`$H_x(y)$`} is the uncertainty left in {`$y$`} once you already know {`$x$`}:
        </p>

        <div className="lrn-eq">
          <span>{`$$H_x(y) = -\\sum_{i,j} p(i, j) \\log p_i(j)$$`}</span>
        </div>

        <p>
          Here {`$p(i,j)$`} is the chance of seeing the pair, and {`$p_i(j)$`} is the chance of{' '}
          {`$y=j$`} once {`$x=i$`} is known. The chain rule ties the two together:
        </p>

        <div className="lrn-eq lrn-eq-display">
          <span>{`$$H(x, y) = H(x) + H_x(y)$$`}</span>
        </div>

        <p>
          Total uncertainty in the pair equals the uncertainty in {`$x$`} plus the uncertainty still
          left in {`$y$`} after {`$x$`} is known.
        </p>

        <h3>Worked Example: Conditional Entropy of a Noisy Bit</h3>

        <p>
          Send a fair bit {`$x$`} (0 or 1, each with probability {`$\\tfrac{1}{2}$`}) through a
          channel that flips it with probability 0.2. Let {`$y$`} be the received bit. Compute the
          conditional entropy {`$H_x(y)$`}.
        </p>

        <div className="lrn-steps">
          <div className="lrn-step">
            <span className="lrn-step-title">Step 1: Uncertainty in y once x is known</span>
            <p className="lrn-step-content">
              If you know {`$x$`}, the only randomness left is the flip. The bit stays the same with
              probability 0.8 and flips with probability 0.2. So {`$y$`} given {`$x$`} is a
              two-outcome source with probabilities 0.8 and 0.2.
            </p>
          </div>
          <div className="lrn-step">
            <span className="lrn-step-title">Step 2: Entropy of that flip</span>
            <p className="lrn-step-content">
              {`$H = -[0.8 \\log_2 0.8 + 0.2 \\log_2 0.2]$`}{' '}
              {`$= -[0.8 \\times (-0.322) + 0.2 \\times (-2.322)] \\approx 0.722$`} bits.
            </p>
          </div>
          <div className="lrn-step">
            <span className="lrn-step-title">Step 3: Average over x</span>
            <p className="lrn-step-content">
              The flip chance is the same whether {`$x = 0$`} or {`$x = 1$`}. So the average over
              both inputs is still 0.722 bits. {`$H_x(y) \\approx 0.722$`} bits per symbol.
            </p>
          </div>
          <div className="lrn-step">
            <span className="lrn-step-title">Step 4: Check the chain rule</span>
            <p className="lrn-step-content">
              The input {`$x$`} is a fair bit, so {`$H(x) = 1$`} bit. The chain rule gives{' '}
              {`$H(x, y) = H(x) + H_x(y) \\approx 1 + 0.722 = 1.722$`} bits for the pair.
            </p>
          </div>
        </div>

        <h3>Key Properties of Entropy</h3>

        <ul className="lrn-list">
          <li>
            {`$H = 0$`} when one outcome has probability 1. No uncertainty means zero entropy.
          </li>
          <li>
            {`$H$`} is maximum when all outcomes are equally likely: {`$H_{\\max} = \\log n$`}.
          </li>
          <li>
            Subadditivity: {`$H(x, y) \\leq H(x) + H(y)$`}. Joint uncertainty never exceeds the sum
            of individual uncertainties.
          </li>
          <li>
            Knowing {`$x$`} never increases uncertainty about {`$y$`}: {`$H(y) \\geq H_x(y)$`}.
          </li>
        </ul>

        <h3>Binary Entropy</h3>

        <p>
          For a binary source with probabilities {`$p$`} and {`$q = 1 - p$`}:
        </p>

        <div className="lrn-eq">
          <span>{`$$H = -(p \\log p + q \\log q)$$`}</span>
        </div>

        <p>
          This function peaks at {`$p = 0.5$`} (one bit) and falls to zero at {`$p = 0$`} or{' '}
          {`$p = 1$`}.
        </p>

        <BinaryEntropyViz />

        <div className="lrn-self-explain">
          <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
          <p>
            Why does the binary entropy function peak at {`$p = 0.5$`} and reach zero at the
            extremes? Explain from the definition, not just from the graph shape.
          </p>
          <details className="lrn-self-explain-reveal">
            <summary>Expert explanation</summary>
            <p>
              At {`$p = 0$`}: the outcome is certain. You know in advance what will happen. The term{' '}
              {`$0 \\cdot \\log 0 = 0$`} by convention (the limit is zero). Entropy is zero.
            </p>
            <p>
              At {`$p = 0.5$`}: both outcomes are equally likely. Every flip is maximally
              surprising. Entropy is {`$-(0.5 \\log 0.5 + 0.5 \\log 0.5) = 1$`} bit.
            </p>
            <p>
              The peak at equal probabilities follows from the axiom that entropy increases with the
              number of equally likely outcomes.
            </p>
          </details>
        </div>
      </>,

      <>
        <h2>Entropy of an Information Source</h2>

        <div className="lrn-definition">
          <span className="lrn-definition-term">Source Entropy</span>
          <div className="lrn-definition-desc">
            <p>
              For a Markov source with states {`$i$`} having stationary probabilities {`$P_i$`} and
              per-state entropies {`$H_i$`}:
            </p>
            <div className="lrn-eq lrn-eq-display">
              <span>{`$$H = \\sum_i P_i H_i = -\\sum_{i,j} P_i \\, p_i(j) \\log p_i(j)$$`}</span>
            </div>
            <p>
              This is the minimum average number of bits per symbol needed to represent the source.
            </p>
          </div>
        </div>

        <div className="lrn-predict">
          <span className="lrn-predict-label">PREDICT</span>
          <p>
            A Markov source has two states. State A always emits A next. State B emits A or B with
            equal probability. Predict: is the source entropy closer to 0, 0.5, or 1 bit per symbol?
          </p>
          <details className="lrn-predict-reveal">
            <summary>Check your thinking</summary>
            <p>
              State A has entropy 0 (deterministic). State B has entropy 1 (fair coin). The source
              entropy is the weighted average using stationary probabilities. Solving the
              equilibrium gives {`$P_A = \\frac{2}{3}, P_B = \\frac{1}{3}$`}, so{' '}
              {`$H = \\frac{2}{3}(0) + \\frac{1}{3}(1) \\approx 0.33$`} bits per symbol.
            </p>
          </details>
        </div>

        <p>The entropy per second is:</p>

        <div className="lrn-eq">
          <span>{`$$H' = \\sum_i f_i H_i = m H$$`}</span>
        </div>

        <p>
          Here {`$f_i$`} is the frequency of state {`$i$`} and {`$m$`} is the average number of
          symbols per second.
        </p>

        <h3>Worked Example: Two-State Markov Entropy</h3>

        <p>
          Use the Markov source from the previous section: stationary {`$P_A \\approx 0.714$`},{' '}
          {`$P_B \\approx 0.286$`}, with{' '}
          {`$p_A(A) = 0.8, p_A(B) = 0.2, p_B(A) = 0.5, p_B(B) = 0.5$`}. Compute the source entropy.
        </p>

        <div className="lrn-steps">
          <div className="lrn-step">
            <span className="lrn-step-title">Step 1: Per-state entropies</span>
            <p className="lrn-step-content">
              {`$H_A = -[0.8 \\log_2 0.8 + 0.2 \\log_2 0.2]$`}{' '}
              {`$= -[0.8 \\times (-0.322) + 0.2 \\times (-2.322)] \\approx 0.722$`} bits.{' '}
              {`$H_B = -[0.5 \\log_2 0.5 + 0.5 \\log_2 0.5] = 1$`} bit.
            </p>
          </div>
          <div className="lrn-step">
            <span className="lrn-step-title">Step 2: Weighted average</span>
            <p className="lrn-step-content">
              {`$H = P_A H_A + P_B H_B = 0.714 \\times 0.722 + 0.286 \\times 1$`}{' '}
              {`$\\approx 0.516 + 0.286 = 0.802$`} bits per symbol.
            </p>
          </div>
          <div className="lrn-step">
            <span className="lrn-step-title">Step 3: Compare to maximum</span>
            <p className="lrn-step-content">
              The maximum possible entropy for a two-symbol source is {`$\\log_2 2 = 1$`} bit.
              Redundancy {`$= 1 - \\frac{0.802}{1} \\approx 19.8\\%$`}. The source is moderately
              predictable.
            </p>
          </div>
          <div className="lrn-step">
            <span className="lrn-step-title">Step 4: Verify with digram method</span>
            <p className="lrn-step-content">
              Direct computation: {`$H = -\\sum_{i,j} P_i p_i(j) \\log_2 p_i(j)$`}{' '}
              {`$= -[0.714(0.8 \\log 0.8 + 0.2 \\log 0.2) + 0.286(0.5 \\log 0.5 + 0.5 \\log 0.5)]$`}
              . Both forms give the same {`$0.802$`} bits.
            </p>
          </div>
        </div>

        <div className="lrn-self-explain">
          <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
          <p>
            Why does the formula {`$H = \\sum_i P_i H_i$`} use stationary probabilities {`$P_i$`}{' '}
            rather than transition probabilities? Why must we weight by how often we visit each
            state?
          </p>
          <details className="lrn-self-explain-reveal">
            <summary>Expert explanation</summary>
            <p>
              The source spends most of its time in high-probability states. If state A is visited
              71% of the time, the entropy contribution from A's transitions matters 71% of the
              time. Stationary probabilities measure long-run visit frequency.
            </p>
            <p>
              Weighting by {`$P_i$`} converts per-state uncertainty (the "if I am in state i" view)
              into per-symbol uncertainty (the "average over emitted symbols" view). Without the
              weight, you would over-count rare states.
            </p>
          </details>
        </div>

        <h3>Typical Sequences</h3>

        <p>
          Take a long sequence of {`$N$`} symbols from a steady source. These long sequences split
          into a typical group and a rare leftover.
        </p>

        <div className="lrn-callout">
          <span className="lrn-callout-label">Key Result</span>
          <p>
            Almost every long sequence you actually see is "typical." All the typical sequences have
            nearly the same probability. There are about {`$2^{NH}$`} of them, and each has
            probability near {`$2^{-NH}$`}.
          </p>
          <p>
            The leftover sequences are so rare that together they almost never happen. So you can
            ignore them and still describe the source almost perfectly.
          </p>
        </div>

        <div className="lrn-elaborate">
          <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
          <p>
            Each symbol carries about {`$H$`} bits on average. Over {`$N$`} symbols, a typical
            sequence carries about {`$N \\times H$`} bits. That many bits names one choice out of
            about {`$2^{NH}$`} equally likely options.
          </p>
          <p>
            This is the whole reason compression works. You only need to label the {`$2^{NH}$`}
            typical sequences, not every possible sequence. The rare ones are not worth the bits.
          </p>
        </div>

        <h3>Relative Entropy and Redundancy</h3>

        <div className="lrn-definition">
          <span className="lrn-definition-term">Redundancy</span>
          <div className="lrn-definition-desc">
            <p>The redundancy of a source is how far it is from maximum entropy:</p>
            <div className="lrn-eq">
              <span>{`$$\\text{redundancy} = 1 - \\frac{H}{H_{\\max}}$$`}</span>
            </div>
            <p>
              English has about 50% redundancy. Half of English text is statistically predictable
              from the other half. This is why crossword puzzles are solvable and why text can be
              compressed.
            </p>
          </div>
        </div>

        <div className="lrn-elaborate">
          <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
          <p>
            Shannon estimated English redundancy by measuring how well people can predict the next
            letter. Humans guess roughly half the letters correctly in normal text. The statistical
            structure of English (common words, grammar rules, typical letter sequences) makes the
            source far from uniformly random.
          </p>
        </div>
      </>,

      <>
        <h2>Noiseless Channel Coding</h2>

        <div className="lrn-definition">
          <span className="lrn-definition-term">Finite State Transducer</span>
          <div className="lrn-definition-desc">
            <p>
              An encoder or decoder is a machine with states. Given input symbol {`$x_n$`} at state{' '}
              {`$\\alpha_n$`}, it outputs {`$y_n$`} and transitions to state {`$\\alpha_{n+1}$`}:
            </p>
            <div className="lrn-eq">
              <span>{`$$y_n = f(x_n, \\alpha_n), \\quad \\alpha_{n+1} = g(x_n, \\alpha_n)$$`}</span>
            </div>
            <p>
              A non-singular transducer is one where you can always recover the input from the
              output. A non-singular transducer preserves entropy.
            </p>
          </div>
        </div>

        <p>A lossless compression algorithm is a non-singular transducer.</p>

        <div className="lrn-predict">
          <span className="lrn-predict-label">PREDICT</span>
          <p>
            A source produces symbols A, B, C, D with probabilities{' '}
            {`$\\frac{1}{2}, \\frac{1}{4}, \\frac{1}{8}, \\frac{1}{8}$`}. Before calculating,
            predict: can you encode this source in less than 2 bits per symbol on average?
          </p>
          <details className="lrn-predict-reveal">
            <summary>Check your thinking</summary>
            <p>
              Yes. The entropy is {`$H = \\frac{7}{4}$`} bits per symbol. The Shannon-Fano code uses
              1, 2, 3, 3 bits for A, B, C, D respectively. The average code length equals exactly{' '}
              {`$\\frac{7}{4}$`} bits, matching the entropy.
            </p>
          </details>
        </div>

        <h3>The Noiseless Channel Coding Theorem</h3>

        <div className="lrn-callout">
          <span className="lrn-callout-label">Fundamental Theorem</span>
          <p>
            Let a discrete noiseless channel have capacity {`$C$`} and a discrete source have
            entropy {`$H$`}.
          </p>
          <p>
            If {`$H \\leq C$`}, you can encode the source and transmit it over the channel with
            arbitrarily small error. The best efficiency is {`$\\frac{C}{H}$`}.
          </p>
          <p>
            If {`$H > C$`}, it is impossible to transmit the source over the channel without errors.
          </p>
        </div>

        <p>
          The theorem is an existence result. It guarantees efficient codes exist but does not say
          how to find them.
        </p>

        <div className="lrn-elaborate">
          <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
          <p>
            Each symbol carries on average {`$H$`} bits of information. The channel can carry{' '}
            {`$C$`} bits per unit time. If you generate symbols at rate {`$r$`}, your information
            rate is {`$rH$`}. The channel can keep up when {`$rH \\leq C$`}.
          </p>
          <p>
            The proof groups long sequences into typical sets. Almost all sequences are typical, and
            there are only about {`$2^{NH}$`} of them. Encoding requires {`$NH$`} bits to specify
            which typical sequence you have. That is the source side of {`$H \\leq C$`}.
          </p>
        </div>

        <h3>Shannon-Fano Coding</h3>

        <div className="lrn-callout">
          <span className="lrn-callout-label">The Kraft Inequality</span>
          <p>
            A code is prefix-free when no codeword is the start of another codeword. That lets the
            decoder read a stream and know where each codeword ends, with no commas needed.
          </p>
          <p>
            You cannot make all the codewords short at once. The Kraft inequality sets the limit. If
            the code lengths are {`$m_1, m_2, \\ldots$`}, they must obey{' '}
            {`$\\sum_s 2^{-m_s} \\leq 1$`}. Short codewords cost more of this budget, so only a few
            symbols can get them.
          </p>
        </div>

        <p>Shannon-Fano coding picks each length from the symbol's probability:</p>

        <div className="lrn-eq">
          <span>{`$$\\log_2 \\frac{1}{p_s} \\leq m_s < 1 + \\log_2 \\frac{1}{p_s}$$`}</span>
        </div>

        <p>
          Likely symbols get short codes, rare symbols get long ones. To build the actual codeword,
          stack the probabilities into a running total. Then write that running total in binary and
          keep the first {`$m_s$`} digits.
        </p>

        <p>The average code length per symbol then satisfies:</p>

        <div className="lrn-eq">
          <span>{`$$G_N \\leq H' < G_N + \\frac{1}{N}$$`}</span>
        </div>

        <h3>Worked Example: Symbols A, B, C, D</h3>

        <p>
          Source: symbols A, B, C, D with probabilities{' '}
          {`$\\frac{1}{2}, \\frac{1}{4}, \\frac{1}{8}, \\frac{1}{8}$`}.
        </p>

        <div className="lrn-steps">
          <div className="lrn-step">
            <span className="lrn-step-title">Step 1: Compute entropy</span>
            <p className="lrn-step-content">
              {`$H = -\\left(\\frac{1}{2} \\log \\frac{1}{2} + \\frac{1}{4} \\log \\frac{1}{4} + \\frac{1}{8} \\log \\frac{1}{8} + \\frac{1}{8} \\log \\frac{1}{8}\\right) = \\frac{7}{4}$`}{' '}
              bits/symbol.
            </p>
          </div>
          <div className="lrn-step">
            <span className="lrn-step-title">Step 2: Build code words from running totals</span>
            <p className="lrn-step-content">
              Lengths from the rule: {`$m_A = 1, m_B = 2, m_C = 3, m_D = 3$`}. Running totals before
              each symbol: A starts at 0, B at {`$\\tfrac{1}{2}$`}, C at {`$\\tfrac{3}{4}$`}, D at{' '}
              {`$\\tfrac{7}{8}$`}. Write each total in binary and keep that many digits:{' '}
              {`$0 \\to \\mathbf{0}$`}, {`$\\tfrac{1}{2} = 0.1_2 \\to \\mathbf{10}$`},{' '}
              {`$\\tfrac{3}{4} = 0.11_2 \\to \\mathbf{110}$`},{' '}
              {`$\\tfrac{7}{8} = 0.111_2 \\to \\mathbf{111}$`}. So A = 0, B = 10, C = 110, D = 111.
            </p>
          </div>
          <div className="lrn-step">
            <span className="lrn-step-title">Step 3: Compute average length</span>
            <p className="lrn-step-content">
              {`$\\bar{L} = \\frac{1}{2}(1) + \\frac{1}{4}(2) + \\frac{1}{8}(3) + \\frac{1}{8}(3) = \\frac{1}{2} + \\frac{1}{2} + \\frac{3}{8} + \\frac{3}{8} = \\frac{7}{4}$`}{' '}
              bits.
            </p>
          </div>
          <div className="lrn-step">
            <span className="lrn-step-title">Step 4: Verify</span>
            <p className="lrn-step-content">
              Average length equals entropy exactly. This code is optimal. A long message of {`$N$`}{' '}
              symbols requires {`$\\frac{7}{4} N$`} bits.
            </p>
          </div>
        </div>

        <ShannonFanoTreeViz />

        <div className="lrn-self-explain">
          <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
          <p>
            Why does assigning shorter codes to more probable symbols reduce average length? Why can
            you not assign 1-bit codes to all four symbols?
          </p>
          <details className="lrn-self-explain-reveal">
            <summary>Expert explanation</summary>
            <p>
              For a code to be uniquely decodable, the code words must be distinguishable when
              concatenated. The Kraft inequality {`$\\sum 2^{-m_s} \\leq 1$`} limits how short the
              codes can be simultaneously.
            </p>
            <p>
              You can use a 1-bit code word only for one symbol (since "0" and "1" already exhaust
              all 1-bit strings). Assigning shorter codes to likely symbols trades rare long codes
              for common short ones, lowering the average.
            </p>
          </details>
        </div>

        <div className="lrn-faded">
          <div className="lrn-faded-phase">
            <span className="lrn-faded-label">COMPLETE EXAMPLE</span>
            <p>
              Compute the entropy of a two-symbol source with probabilities {`$p$`} and {`$1 - p$`}{' '}
              where {`$p = \\frac{3}{4}$`}.
            </p>
            <ol className="lrn-list">
              <li>Write the formula: {`$H = -(p \\log_2 p + (1-p) \\log_2(1-p))$`}.</li>
              <li>
                Substitute:{' '}
                {`$H = -(\\frac{3}{4} \\log_2 \\frac{3}{4} + \\frac{1}{4} \\log_2 \\frac{1}{4})$`}.
              </li>
              <li>
                Compute: {`$\\log_2 \\frac{3}{4} = \\log_2 3 - 2 \\approx 1.585 - 2 = -0.415$`}. So{' '}
                {`$\\frac{3}{4} \\times (-0.415) = -0.311$`}.
              </li>
              <li>Compute: {`$\\frac{1}{4} \\times (-2) = -0.5$`}.</li>
              <li>Result: {`$H = -(-0.311 - 0.5) = 0.811$`} bits.</li>
            </ol>
          </div>
          <div className="lrn-faded-phase lrn-faded-partial">
            <span className="lrn-faded-label">YOUR TURN: PARTIAL</span>
            <ol className="lrn-list">
              <li>Write the entropy formula for two symbols. (Given: same formula as above.)</li>
              <li>Substitute {`$p = \\frac{1}{3}$`}. Your turn: compute each term.</li>
              <li>Your turn: combine and state {`$H$`}.</li>
            </ol>
          </div>
          <div className="lrn-faded-phase">
            <span className="lrn-faded-label">INDEPENDENT PRACTICE</span>
            <p>Compute {`$H$`} for a source with three equally likely outcomes.</p>
          </div>
        </div>
      </>,

      <>
        <h2>Discrete Channels with Noise</h2>

        <div className="lrn-definition">
          <span className="lrn-definition-term">Equivocation</span>
          <div className="lrn-definition-desc">
            <p>
              The conditional entropy {`$H_y(x)$`} of the transmitted signal given the received
              signal. It measures the uncertainty introduced by the channel noise.
            </p>
          </div>
        </div>

        <div className="lrn-predict">
          <span className="lrn-predict-label">PREDICT</span>
          <p>
            A channel flips each bit independently with probability 0.01. Predict: is the
            equivocation closer to 0, 0.08, or 0.5 bits per symbol?
          </p>
          <details className="lrn-predict-reveal">
            <summary>Check your thinking</summary>
            <p>
              The equivocation is {`$H_y(x) = -[0.99 \\log 0.99 + 0.01 \\log 0.01] \\approx 0.081$`}{' '}
              bits per symbol. A 1% error rate causes about 0.08 bits of uncertainty per symbol, not
              zero and not 0.5.
            </p>
          </details>
        </div>

        <h3>The Noisy Channel Signal Model</h3>

        <p>
          The received signal {`$E$`} is a function of the transmitted signal {`$S$`} and noise{' '}
          {`$N$`}:
        </p>

        <div className="lrn-eq">
          <span>{`$$E = f(S, N)$$`}</span>
        </div>

        <p>The entropy relations for a noisy channel are:</p>

        <div className="lrn-eq">
          <span>{`$$H(x, y) = H(x) + H_x(y) = H(y) + H_y(x)$$`}</span>
        </div>

        <h3>Actual Transmission Rate</h3>

        <p>The rate of actual information transmission accounts for the noise:</p>

        <div className="lrn-eq lrn-eq-display">
          <span>{`$$R = H(x) - H_y(x) = H(y) - H_x(y) = H(x) + H(y) - H(x, y)$$`}</span>
        </div>

        <p>Information produced by source minus uncertainty remaining after reception.</p>

        <div className="lrn-self-explain">
          <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
          <p>
            Why are all three forms of {`$R$`} equal? Why does {`$H(x) - H_y(x) = H(y) - H_x(y)$`}?
          </p>
          <details className="lrn-self-explain-reveal">
            <summary>Expert explanation</summary>
            <p>
              The chain rule gives {`$H_y(x) = H(x,y) - H(y)$`}, so{' '}
              {`$H(x) - H_y(x) = H(x) + H(y) - H(x,y)$`}. The same rule gives{' '}
              {`$H_x(y) = H(x,y) - H(x)$`}, so {`$H(y) - H_x(y) = H(x) + H(y) - H(x,y)$`}. Both
              equal {`$H(x) + H(y) - H(x,y)$`}, the mutual information between input and output.
            </p>
          </details>
        </div>

        <h3>Channel Capacity with Noise</h3>

        <div className="lrn-definition">
          <span className="lrn-definition-term">Channel Capacity (Noisy)</span>
          <div className="lrn-definition-desc">
            <div className="lrn-eq lrn-eq-display">
              <span>{`$$C = \\max_{P(x)} \\left[ H(x) - H_y(x) \\right]$$`}</span>
            </div>
            <p>
              The maximum is over all possible input distributions {`$P(x)$`}. You choose the input
              distribution to maximize the mutual information.
            </p>
          </div>
        </div>

        <h3>Correction Channel</h3>

        <p>
          Suppose you add a second clean channel just to send fix-up hints. How big must it be? It
          needs capacity equal to the equivocation {`$H_y(x)$`}. With it, the receiver corrects all
          but a tiny fraction of errors.
        </p>

        <p>
          This gives equivocation a sharp meaning. It is the exact amount of extra information you
          need to repair what the noise broke.
        </p>

        <h3>The Noisy Channel Coding Theorem</h3>

        <div className="lrn-callout">
          <span className="lrn-callout-label">Fundamental Theorem</span>
          <p>
            Let a discrete channel with noise have capacity {`$C$`} and a source have entropy{' '}
            {`$H$`}.
          </p>
          <p>
            If {`$H \\leq C$`}: you can encode and transmit the source with error rate approaching
            zero.
          </p>
          <p>
            If {`$H > C$`}: the equivocation is at least {`$H - C$`}. Some information is
            permanently lost.
          </p>
        </div>

        <div className="lrn-elaborate">
          <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
          <p>
            The proof uses random coding. Consider all possible codes (sets of 2^{`$TH$`} code words
            drawn at random). Compute the average error probability over all such codes. For{' '}
            {`$H < C$`}, the average error goes to zero as block length {`$T$`} grows.
          </p>
          <p>
            Since the average error approaches zero, at least one code must achieve near-zero error.
            That code exists, even though the proof does not tell you which code it is.
          </p>
        </div>

        <h3>Operational Definition of Capacity</h3>

        <p>
          The capacity can also be defined operationally. Let {`$N(T, q)$`} be the number of
          messages of duration {`$T$`} that can be sent with error probability at most {`$q$`}.
          Then:
        </p>

        <div className="lrn-eq">
          <span>{`$$\\lim_{T \\to \\infty} \\frac{\\log N(T, q)}{T} = C$$`}</span>
        </div>

        <p>This holds for any fixed {`$q > 0$`}.</p>

        <h3>Symmetric Channels</h3>

        <p>
          A channel is symmetric when every input symbol faces the same set of error chances, just
          shuffled among the outputs. For symmetric channels:
        </p>

        <div className="lrn-eq">
          <span>{`$$C = \\log m + \\sum_i p_i \\log p_i$$`}</span>
        </div>

        <p>
          Here {`$m$`} is the number of input symbols and {`$p_i$`} are the transition probabilities
          from any input. The best input is always uniform for symmetric channels.
        </p>

        <p>
          Example: a bit channel that flips with probability 0.1. Here {`$m = 2$`} and the chances
          are 0.9 (stays) and 0.1 (flips). So{' '}
          {`$C = \\log_2 2 + (0.9 \\log_2 0.9 + 0.1 \\log_2 0.1) = 1 - 0.469 = 0.531$`} bits per
          symbol. A noiseless bit channel would carry 1 full bit. The 10% flip rate costs about 0.47
          bits.
        </p>

        <BinarySymmetricChannelViz />

        <h3>Error-Correcting Codes: Hamming Code Example</h3>

        <p>
          The Hamming code corrects any single error in a seven-bit block. The block has seven
          positions {`$X_1, \\ldots, X_7$`}. Four carry the message ({`$X_3, X_5, X_6, X_7$`}).
          Three are parity bits ({`$X_1, X_2, X_4$`}).
        </p>

        <p>Each parity bit makes one group of positions have an even number of ones:</p>

        <div className="lrn-eq">
          <span>{`$$X_1 \\oplus X_3 \\oplus X_5 \\oplus X_7 = 0$$`}</span>
        </div>
        <div className="lrn-eq">
          <span>{`$$X_2 \\oplus X_3 \\oplus X_6 \\oplus X_7 = 0$$`}</span>
        </div>
        <div className="lrn-eq">
          <span>{`$$X_4 \\oplus X_5 \\oplus X_6 \\oplus X_7 = 0$$`}</span>
        </div>

        <p>
          Here {`$\\oplus$`} means add and keep only whether the count is even (0) or odd (1). Each
          check covers exactly the positions whose number has a 1 in one binary place.
        </p>

        <div className="lrn-steps">
          <div className="lrn-step">
            <span className="lrn-step-title">Step 1: Receive a block</span>
            <p className="lrn-step-content">
              The receiver gets seven bits. It runs all three checks. If every check comes out even,
              no single error happened.
            </p>
          </div>
          <div className="lrn-step">
            <span className="lrn-step-title">Step 2: Read the failing checks</span>
            <p className="lrn-step-content">
              Write a 1 for each check that fails, a 0 for each that passes. Read them as a
              three-bit binary number, with the first check as the lowest place. Say checks 1 and 4
              fail but check 2 passes. That is {`$101$`} in binary, which equals 5.
            </p>
          </div>
          <div className="lrn-step">
            <span className="lrn-step-title">Step 3: Flip that position</span>
            <p className="lrn-step-content">
              The number 5 names position {`$X_5$`} as the wrong bit. Flip {`$X_5$`} back. The block
              is now correct. The failing-check pattern points straight to the error.
            </p>
          </div>
        </div>

        <p>
          Four message bits ride in every seven-bit block, so this gives {`$\\frac{4}{7}$`} bits per
          symbol.
        </p>

        <div className="lrn-compare">
          <div className="lrn-compare-col">
            <span className="lrn-compare-title">Noiseless Channel</span>
            <p>Capacity is growth rate of allowed sequences.</p>
            <p>Equivocation is zero: {`$H_y(x) = 0$`}.</p>
            <p>Coding theorem: need {`$H \\leq C$`}.</p>
            <p>Shannon-Fano achieves optimal efficiency.</p>
          </div>
          <div className="lrn-compare-col">
            <span className="lrn-compare-title">Noisy Channel</span>
            <p>Capacity is maximum mutual information.</p>
            <p>Equivocation {`$H_y(x) > 0$`} measures ambiguity.</p>
            <p>Coding theorem: reliable iff {`$H \\leq C$`}.</p>
            <p>Random coding argument proves existence.</p>
          </div>
        </div>

        <div className="lrn-callout lrn-tip">
          <span className="lrn-callout-label">Grouped Symbol Capacity</span>
          <p>When input symbols are grouped into sets, the capacity satisfies:</p>
          <div className="lrn-eq">
            <span>{`$$C = \\log \\sum_n 2^{C_n}, \\quad P_n = \\frac{2^{C_n}}{\\sum_n 2^{C_n}}$$`}</span>
          </div>
          <p>Here {`$C_n$`} is the capacity contribution from each group.</p>
        </div>
      </>,

      <>
        <h2>Continuous Distributions and Entropy</h2>

        <p>
          So far the symbols came from a finite list. Now the value can be any real number, like a
          voltage or a sound level. Two new tools handle this case: the integral and the probability
          density.
        </p>

        <div className="lrn-callout">
          <span className="lrn-callout-label">Reading the Integral Sign</span>
          <p>
            An integral {`$\\int$`} is the continuous version of a sum {`$\\sum$`}. A sum adds up a
            value over a list of items. An integral adds up a value over a smooth range. You can
            picture it as the area under a curve.
          </p>
          <p>
            So {`$\\int_0^1 f(x)\\, dx$`} means: add up {`$f(x)$`} across every {`$x$`} from 0 to 1.
            The {`$dx$`} marks the tiny width of each slice. Everywhere below you will see{' '}
            {`$\\int$`} where the discrete formulas had {`$\\sum$`}.
          </p>
        </div>

        <div className="lrn-callout">
          <span className="lrn-callout-label">Probability Density Is Not Probability</span>
          <p>
            For a continuous value there is no chance of hitting one exact number. Instead we use a
            density {`$p(x)$`}: the probability per unit length. The chance of landing in a small
            range is the density times the width of that range.
          </p>
          <p>
            Because it is "per unit length," a density can be larger than 1. A density of 10 over a
            range of width 0.1 still gives a total probability of {`$10 \\times 0.1 = 1$`}. Only the
            total area under the density has to equal 1.
          </p>
        </div>

        <div className="lrn-definition">
          <span className="lrn-definition-term">Continuous Entropy</span>
          <div className="lrn-definition-desc">
            <p>For a continuous random variable with probability density {`$p(x)$`}:</p>
            <div className="lrn-eq lrn-eq-display">
              <span>{`$$H = -\\int p(x) \\log p(x) \\, dx$$`}</span>
            </div>
          </div>
        </div>

        <div className="lrn-predict">
          <span className="lrn-predict-label">PREDICT</span>
          <p>
            A uniform distribution sits on {`$[0, 1]$`}. A second uniform distribution sits on{' '}
            {`$[0, 0.1]$`}. Predict: which has higher continuous entropy, and is either negative?
          </p>
          <details className="lrn-predict-reveal">
            <summary>Check your thinking</summary>
            <p>
              Uniform on {`$[0, 1]$`}: density = 1, so{' '}
              {`$H = -\\int_0^1 1 \\cdot \\log_2 1 \\, dx = 0$`} bits. Uniform on {`$[0, 0.1]$`}:
              density = 10, so{' '}
              {`$H = -\\int_0^{0.1} 10 \\log_2 10 \\, dx = -\\log_2 10 \\approx -3.32$`} bits. The
              narrower uniform has negative entropy. This shows continuous entropy is not an
              absolute measure: it depends on the units chosen.
            </p>
          </details>
        </div>

        <div className="lrn-callout lrn-warning">
          <span className="lrn-callout-label">Critical Difference</span>
          <p>
            Discrete entropy is absolute and always non-negative. Continuous entropy is relative to
            the coordinate system. It changes when you change coordinates.
          </p>
          <p>
            However, differences of continuous entropy (mutual information) are
            coordinate-independent, just like discrete mutual information.
          </p>
        </div>

        <div className="lrn-compare">
          <div className="lrn-compare-col">
            <span className="lrn-compare-title">Discrete Entropy</span>
            <p>Absolute. Always non-negative.</p>
            <p>Coordinate-independent.</p>
            <p>{`$H = -\\sum p_i \\log p_i$`}</p>
            <p>Equals zero only when outcome is certain.</p>
          </div>
          <div className="lrn-compare-col">
            <span className="lrn-compare-title">Continuous Entropy</span>
            <p>Relative to coordinate system. Can be negative.</p>
            <p>Changes under coordinate transformations.</p>
            <p>{`$H = -\\int p(x) \\log p(x) \\, dx$`}</p>
            <p>Differences (mutual information) are coordinate-independent.</p>
          </div>
        </div>

        <h3>Five Key Properties of Continuous Entropy</h3>

        <ul className="lrn-list">
          <li>For a fixed variance, the Gaussian (bell curve) has the most entropy.</li>
          <li>
            For a fixed mean on the positive half-line, the exponential shape has the most entropy.
          </li>
          <li>For a fixed range of allowed values, the uniform shape has the most entropy.</li>
          <li>Joint entropy satisfies {`$H(x, y) \\leq H(x) + H(y)$`} (subadditivity).</li>
          <li>Conditional entropy: {`$H_x(y) = H(x, y) - H(x)$`}.</li>
        </ul>

        <h3>Gaussian Entropy</h3>

        <div className="lrn-callout">
          <span className="lrn-callout-label">Spread, Variance, and σ</span>
          <p>
            Variance measures how far the values spread out from the mean. You take each value, find
            its distance from the mean, square that distance, and average over all values. A wide
            spread gives a big variance. A tight spread gives a small one.
          </p>
          <p>
            The standard deviation {`$\\sigma$`} is the square root of the variance. So variance is{' '}
            {`$\\sigma^2$`}. A Gaussian, or bell curve, is the smooth hump-shaped density set by its
            mean and its {`$\\sigma$`}.
          </p>
        </div>

        <p>For a Gaussian distribution with variance {`$\\sigma^2$`}:</p>

        <div className="lrn-eq lrn-eq-display">
          <span>{`$$H(x) = \\log \\sqrt{2 \\pi e} \\, \\sigma$$`}</span>
        </div>

        <p>
          The Gaussian holds the most entropy of any spread with the same variance. Among all shapes
          that wobble the same amount around the mean, the bell curve spreads its probability the
          most evenly. The most even spread is the most uncertain.
        </p>

        <GaussianEntropyViz />

        <div className="lrn-elaborate">
          <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
          <p>
            Variance fixes how far the values stray from the mean. Within that one limit, the
            distribution still has freedom in its shape. The shape that uses that freedom for the
            most spread is the bell curve.
          </p>
          <p>
            Any other shape with the same variance has to pile probability up somewhere. Piling up
            means more predictable, which means lower entropy. So the bell curve wins.
          </p>
        </div>

        <h3>The Sampling Theorem</h3>

        <p>
          A signal is band-limited when it holds no frequencies above {`$W$`}. Such a signal is
          fully fixed by its values sampled {`$2W$`} times per second. You can throw away everything
          between the samples and lose nothing.
        </p>

        <p>
          So a signal lasting {`$T$`} seconds with bandwidth {`$W$`} is just a list of about{' '}
          {`$2TW$`} numbers. A continuous wave becomes a finite set of values.
        </p>

        <div className="lrn-callout">
          <span className="lrn-callout-label">Key Note</span>
          <p>
            White Gaussian noise carries the most entropy for a given power level. Any other signal
            with the same power carries less.
          </p>
        </div>

        <h3>Worked Example: Gaussian Entropy with σ = 2</h3>

        <p>
          Compute the differential entropy of a Gaussian random variable with mean 0 and standard
          deviation {`$\\sigma = 2$`}.
        </p>

        <div className="lrn-steps">
          <div className="lrn-step">
            <span className="lrn-step-title">Step 1: Use the Gaussian formula</span>
            <p className="lrn-step-content">
              {`$H(x) = \\log_2 \\sqrt{2 \\pi e} \\, \\sigma = \\log_2(\\sqrt{2 \\pi e}) + \\log_2(\\sigma)$`}
              .
            </p>
          </div>
          <div className="lrn-step">
            <span className="lrn-step-title">Step 2: Evaluate constants</span>
            <p className="lrn-step-content">
              {`$2\\pi e \\approx 17.079$`}. {`$\\sqrt{17.079} \\approx 4.133$`}.{' '}
              {`$\\log_2(4.133) \\approx 2.047$`}.
            </p>
          </div>
          <div className="lrn-step">
            <span className="lrn-step-title">Step 3: Add log σ</span>
            <p className="lrn-step-content">
              {`$\\log_2(2) = 1$`}. So {`$H(x) \\approx 2.047 + 1 = 3.047$`} bits.
            </p>
          </div>
          <div className="lrn-step">
            <span className="lrn-step-title">Step 4: Compare to σ = 1</span>
            <p className="lrn-step-content">
              For {`$\\sigma = 1$`}: {`$H \\approx 2.047$`} bits. Doubling {`$\\sigma$`} adds 1 bit.
              In general, scaling {`$x$`} by {`$k$`} adds {`$\\log_2 k$`} bits to the differential
              entropy.
            </p>
          </div>
        </div>

        <div className="lrn-self-explain">
          <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
          <p>
            Why does doubling the standard deviation add exactly 1 bit to the Gaussian entropy? Why
            doesn't this hold for discrete entropy?
          </p>
          <details className="lrn-self-explain-reveal">
            <summary>Expert explanation</summary>
            <p>
              Doubling {`$\\sigma$`} stretches the distribution by a factor of 2 along the x-axis.
              The density is halved, but the support doubles. The differential entropy formula
              {`$H = \\log \\sqrt{2\\pi e}\\,\\sigma$`} contains {`$\\log \\sigma$`}, so doubling
              {`$\\sigma$`} adds {`$\\log_2 2 = 1$`} bit.
            </p>
            <p>
              This shift only makes sense for continuous entropy. Discrete entropy depends on
              probabilities only, not on x-values. Renaming or rescaling outcomes leaves discrete
              entropy unchanged. Continuous entropy depends on the coordinate system, so unit
              changes shift the value.
            </p>
          </details>
        </div>
      </>,

      <>
        <h2>Continuous Channel Capacity</h2>

        <div className="lrn-definition">
          <span className="lrn-definition-term">Continuous Channel Capacity</span>
          <div className="lrn-definition-desc">
            <p>
              The capacity of a continuous channel is the supremum of mutual information over all
              input distributions:
            </p>
            <div className="lrn-eq">
              <span>{`$$C = \\lim_{T \\to \\infty} \\max_{P(x)} \\frac{1}{T} \\iint P(x,y) \\log \\frac{P(x,y)}{P(x)P(y)} \\, dx \\, dy$$`}</span>
            </div>
            <p>
              This integral is the continuous version of the mutual information{' '}
              {`$H(x) + H(y) - H(x, y)$`} from the noisy-channel section. Sums become integrals, but
              the meaning is the same: how much the output tells you about the input. Mutual
              information stays the same even if you change coordinates.
            </p>
          </div>
        </div>

        <div className="lrn-predict">
          <span className="lrn-predict-label">PREDICT</span>
          <p>
            A channel has bandwidth {`$W = 4000$`} Hz, signal power {`$P = 1$`} W, and noise power{' '}
            {`$N = 1$`} W. Predict the capacity in bits per second before calculating.
          </p>
          <details className="lrn-predict-reveal">
            <summary>Check your thinking</summary>
            <p>
              {`$C = W \\log_2\\left(\\frac{P+N}{N}\\right) = 4000 \\times \\log_2(2) = 4000$`} bits
              per second. A signal-to-noise ratio of 1 (0 dB) gives 1 bit per sample times {`$W$`}{' '}
              samples per second.
            </p>
          </details>
        </div>

        <h3>Additive Noise Channel</h3>

        <p>For a channel with additive noise {`$n$`} (independent of the input signal):</p>

        <div className="lrn-eq">
          <span>{`$$R = H(y) - H(n), \\quad C = \\max_{P(x)} H(y) - H(n)$$`}</span>
        </div>

        <p>
          The noise entropy {`$H(n)$`} is fixed. Maximizing {`$R$`} means maximizing the output
          entropy {`$H(y)$`}.
        </p>

        <h3>The Shannon-Hartley Theorem</h3>

        <div className="lrn-callout">
          <span className="lrn-callout-label">The Central Formula</span>
          <div className="lrn-eq lrn-eq-display">
            <span>{`$$C = W \\log\\left(\\frac{P + N}{N}\\right)$$`}</span>
          </div>
          <p>
            For a channel of bandwidth {`$W$`} Hz with white Gaussian noise of power {`$N$`} and
            signal power limited to {`$P$`}:
          </p>
          <p>
            This is the fundamental limit. No encoding scheme can send more than {`$C$`} bits per
            second reliably.
          </p>
        </div>

        <ShannonHartleyViz />

        <div className="lrn-elaborate">
          <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
          <p>
            To maximize {`$H(y)$`} subject to average power {`$P + N$`} (since output = signal +
            noise), the output {`$y$`} must be Gaussian. This requires the signal to also be
            Gaussian, since Gaussian + Gaussian = Gaussian.
          </p>
          <p>
            With Gaussian output: {`$H(y) = \\frac{1}{2} \\log 2\\pi e(P+N)$`} per sample. With
            Gaussian noise: {`$H(n) = \\frac{1}{2} \\log 2\\pi e N$`}. The difference times {`$2W$`}{' '}
            samples per second gives {`$C = W \\log \\frac{P+N}{N}$`}.
          </p>
        </div>

        <h3>Worked Example: Telephone Line Capacity</h3>

        <p>
          A standard telephone line has bandwidth {`$W = 3000$`} Hz and signal-to-noise ratio{' '}
          {`$P/N = 1000$`} (30 dB). Compute the channel capacity in bits per second.
        </p>

        <div className="lrn-steps">
          <div className="lrn-step">
            <span className="lrn-step-title">Step 1: Apply the Shannon-Hartley formula</span>
            <p className="lrn-step-content">{`$C = W \\log_2\\left(1 + \\frac{P}{N}\\right)$`}.</p>
          </div>
          <div className="lrn-step">
            <span className="lrn-step-title">Step 2: Substitute</span>
            <p className="lrn-step-content">
              {`$C = 3000 \\times \\log_2(1 + 1000) = 3000 \\times \\log_2(1001)$`}.
            </p>
          </div>
          <div className="lrn-step">
            <span className="lrn-step-title">Step 3: Compute the log</span>
            <p className="lrn-step-content">
              {`$\\log_2(1001) \\approx \\log_2(1024) = 10$`} (since 1001 is close to 2^10). More
              precisely: {`$\\log_2(1001) \\approx 9.967$`}.
            </p>
          </div>
          <div className="lrn-step">
            <span className="lrn-step-title">Step 4: Final answer</span>
            <p className="lrn-step-content">
              {`$C \\approx 3000 \\times 9.967 \\approx 29{,}900$`} bits per second. This matches
              the maximum modem speed achievable on a phone line at 30 dB SNR.
            </p>
          </div>
        </div>

        <div className="lrn-self-explain">
          <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
          <p>
            Why does increasing SNR by 10 dB (a factor of 10) only add about 3.32 bits per sample,
            not multiply capacity by 10?
          </p>
          <details className="lrn-self-explain-reveal">
            <summary>Expert explanation</summary>
            <p>
              Capacity grows logarithmically with SNR: {`$C \\propto \\log_2(1 + \\text{SNR})$`}. A
              10x SNR increase adds {`$\\log_2(10) \\approx 3.32$`} bits per channel use, not a 10x
              multiplication. This is why doubling power gives diminishing returns at high SNR.
            </p>
            <p>
              Bandwidth, by contrast, multiplies capacity linearly. Doubling W doubles capacity.
              Practical engineers prefer to expand bandwidth (use more spectrum) rather than boost
              power for high-rate links, when both options are available.
            </p>
          </details>
        </div>
      </>,

      <>
        <h2>Rate-Distortion Theory</h2>

        <div className="lrn-definition">
          <span className="lrn-definition-term">Fidelity Evaluation Function</span>
          <div className="lrn-definition-desc">
            <p>
              Any reasonable quality measure for a communication system is an average of a distance
              function {`$\\rho(x, y)$`} between transmitted signal {`$x$`} and received signal{' '}
              {`$y$`}:
            </p>
            <div className="lrn-eq">
              <span>{`$$v(P(x,y)) = \\iint P(x,y) \\, \\rho(x,y) \\, dx \\, dy$$`}</span>
            </div>
          </div>
        </div>

        <p>Applications: audio compression, image compression, lossy data transmission.</p>

        <div className="lrn-predict">
          <span className="lrn-predict-label">PREDICT</span>
          <p>
            A music source has bandwidth {`$W_1 = 20{,}000$`} Hz and average power {`$Q = 100$`}.
            You can tolerate mean square error {`$N = 1$`}. Predict: roughly how many bits per
            second do you need to transmit the music?
          </p>
          <details className="lrn-predict-reveal">
            <summary>Check your thinking</summary>
            <p>
              {`$R = W_1 \\log_2\\!\\left(\\frac{Q}{N}\\right) = 20000 \\times \\log_2(100) \\approx 20000 \\times 6.64 \\approx 132{,}900$`}{' '}
              bits per second. Reducing tolerable error by 10x adds {`$W_1 \\log_2 10 \\approx 66$`}
              kbits/s. Tighter fidelity means a higher required rate.
            </p>
          </details>
        </div>

        <h3>Five Fidelity Criteria</h3>

        <div className="lrn-steps">
          <div className="lrn-step">
            <span className="lrn-step-title">Root Mean Square Error</span>
            <p className="lrn-step-content">
              {`$\\rho(x,y) = \\frac{1}{T} \\int_0^T [x(t) - y(t)]^2 \\, dt$`}. The most common
              fidelity measure.
            </p>
          </div>
          <div className="lrn-step">
            <span className="lrn-step-title">Frequency-Weighted RMS</span>
            <p className="lrn-step-content">
              RMS error after passing through a frequency-weighting filter. Useful for audio, where
              some frequencies matter more than others.
            </p>
          </div>
          <div className="lrn-step">
            <span className="lrn-step-title">Absolute Error</span>
            <p className="lrn-step-content">
              {`$\\rho(x,y) = \\frac{1}{T} \\int_0^T |x(t) - y(t)| \\, dt$`}.
            </p>
          </div>
          <div className="lrn-step">
            <span className="lrn-step-title">Intelligibility</span>
            <p className="lrn-step-content">
              Probability that a listener correctly identifies a spoken word. Relevant for speech
              communication.
            </p>
          </div>
          <div className="lrn-step">
            <span className="lrn-step-title">Symbol Error Rate</span>
            <p className="lrn-step-content">
              Probability that a received symbol differs from the transmitted symbol. The standard
              criterion for digital communication.
            </p>
          </div>
        </div>

        <h3>Rate for a Source at Given Fidelity</h3>

        <p>
          You pick how much error you will tolerate. Call that limit {`$v_1$`}. Then you ask: what
          is the smallest number of bits per symbol that still stays under that error limit?
        </p>

        <p>
          That smallest bit count is the rate {`$R_1$`}. The formula below searches over every way
          to map source values {`$x$`} to received values {`$y$`}. It keeps only the maps whose
          average error stays at or below {`$v_1$`}. Among those, it takes the one with the least
          information, the integral being the continuous mutual information from the last section.
        </p>

        <div className="lrn-eq lrn-eq-display">
          <span>{`$$R_1 = \\min_{P_x(y): v \\leq v_1} \\iint P(x,y) \\log \\frac{P(x,y)}{P(x)P(y)} \\, dx \\, dy$$`}</span>
        </div>

        <p>
          The "min" means: find the cheapest map. The condition {`$v \\leq v_1$`} means: but only
          among maps that hit the quality target. Loosen the target and {`$R_1$`} drops. Tighten it
          and {`$R_1$`} climbs.
        </p>

        <RateDistortionViz />

        <h3>Source Coding with Fidelity</h3>

        <div className="lrn-callout">
          <span className="lrn-callout-label">Key Result</span>
          <p>
            A source with rate {`$R_1$`} at fidelity {`$v_1$`} can be transmitted with fidelity
            approaching {`$v_1$`} if and only if {`$R_1 \\leq C$`}.
          </p>
          <p>
            This connects rate-distortion theory to channel capacity. The channel capacity tells you
            the minimum rate you need from the source side.
          </p>
        </div>

        <div className="lrn-compare">
          <div className="lrn-compare-col">
            <span className="lrn-compare-title">Rate for Source</span>
            <p>{`$R = \\min$`} mutual information subject to fidelity constraint.</p>
            <p>Fidelity is fixed. Minimize the information rate.</p>
            <p>Optimal: {`$P_y(x) = B(x) e^{-\\lambda \\rho(x,y)}$`}.</p>
          </div>
          <div className="lrn-compare-col">
            <span className="lrn-compare-title">Channel Capacity</span>
            <p>{`$C = \\max$`} mutual information subject to power constraint.</p>
            <p>Power is fixed. Maximize the information rate.</p>
            <p>Optimal: Gaussian distribution for white noise channels.</p>
          </div>
        </div>

        <h3>White Noise Source Rate</h3>

        <p>
          For a white noise source of bandwidth {`$W_1$`}, average power {`$Q$`}, and allowed mean
          square error {`$N$`}:
        </p>

        <div className="lrn-eq">
          <span>{`$$R = W_1 \\log \\frac{Q}{N}$$`}</span>
        </div>

        <h3>Worked Example: Audio Compression Rate</h3>

        <p>
          A speech signal has bandwidth {`$W_1 = 4000$`} Hz and average power {`$Q = 50$`}. You
          accept mean square distortion {`$N = 0.5$`}. Compute the minimum rate.
        </p>

        <div className="lrn-steps">
          <div className="lrn-step">
            <span className="lrn-step-title">Step 1: Apply the rate formula</span>
            <p className="lrn-step-content">
              {`$R = W_1 \\log_2 \\frac{Q}{N} = 4000 \\times \\log_2 \\frac{50}{0.5}$`}.
            </p>
          </div>
          <div className="lrn-step">
            <span className="lrn-step-title">Step 2: Compute the ratio</span>
            <p className="lrn-step-content">
              {`$\\frac{Q}{N} = \\frac{50}{0.5} = 100$`}.{' '}
              {`$\\log_2(100) = \\log_2(2^{6.644}) \\approx 6.644$`}.
            </p>
          </div>
          <div className="lrn-step">
            <span className="lrn-step-title">Step 3: Multiply</span>
            <p className="lrn-step-content">
              {`$R \\approx 4000 \\times 6.644 \\approx 26{,}580$`} bits per second.
            </p>
          </div>
          <div className="lrn-step">
            <span className="lrn-step-title">Step 4: Interpret</span>
            <p className="lrn-step-content">
              About 26.6 kbps suffices for this speech quality. Modern codecs (Opus, AAC) hit this
              rate by using source structure beyond simple Gaussian assumptions.
            </p>
          </div>
        </div>

        <div className="lrn-self-explain">
          <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
          <p>
            Why is the minimum rate logarithmic in the signal-to-distortion ratio {`$\\frac{Q}{N}$`}
            , not linear? What practical engineering choice does this drive?
          </p>
          <details className="lrn-self-explain-reveal">
            <summary>Expert explanation</summary>
            <p>
              Each bit halves the distortion (roughly). That is the geometric meaning of logarithmic
              rate: a 6 dB reduction in tolerable distortion costs 1 bit per sample. Halving
              distortion ten times costs only 10 bits, not 1024.
            </p>
            <p>
              In practice this means coarse fidelity is cheap, fine fidelity is expensive. Voice
              codecs at 8 kbps sound rough but recognizable. Doubling the rate to 16 kbps adds one
              bit per sample: a noticeable but not dramatic quality boost.
            </p>
          </details>
        </div>

        <div className="lrn-elaborate">
          <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
          <p>
            You choose how much distortion you will accept. A loose limit lets you compress hard. A
            tight limit forces you to keep more bits. The minimum rate trades these two against each
            other.
          </p>
          <p>
            As long as {`$R_1 \\leq C$`}, you can encode the source at fidelity {`$v_1$`} and
            squeeze it through the channel. This pairing of source coding with channel coding is the
            foundation of every modern codec.
          </p>
        </div>
      </>
    ]
  },
  practice: [
    {
      q: 'What is the fundamental problem of communication according to Shannon?',
      a: 'The fundamental problem is to reproduce at one point a message selected at another point. The meaning of the message does not matter to the engineering problem. What matters is the set of possible messages and their probabilities, not what those messages mean.'
    },
    {
      q: 'Why did Shannon use logarithms to measure information?',
      a: 'Logarithms give information three useful properties. First, additivity: two independent sources have combined information equal to the sum of their individual information amounts, because log(m·n) = log m + log n. Second, practical parameters like bandwidth and relay count scale logarithmically with message count. Third, base-2 logarithms give bits, the natural unit for binary systems.'
    },
    {
      q: 'A source produces three symbols with probabilities 0.5, 0.25, and 0.25. Compute the entropy in bits.',
      a: 'H = -(0.5 log₂ 0.5 + 0.25 log₂ 0.25 + 0.25 log₂ 0.25). Each term: 0.5 × (-1) = -0.5, 0.25 × (-2) = -0.5, 0.25 × (-2) = -0.5. H = -(-0.5 - 0.5 - 0.5) = 1.5 bits per symbol. This is less than log₂ 3 ≈ 1.585 bits because the distribution is not uniform.'
    },
    {
      q: 'What are the three axioms that uniquely determine the entropy function?',
      a: 'Axiom 1 (Continuity): H changes smoothly as probabilities change. Axiom 2 (Monotonicity): for uniform distributions, H increases as n increases, because more equally likely outcomes means more uncertainty. Axiom 3 (Weighted decomposition): breaking one choice into two successive choices gives the same total uncertainty. Together these three axioms uniquely determine H = -K Σ pᵢ log pᵢ up to the constant K.'
    },
    {
      q: 'Transfer: Temperature sensors in a weather station report readings with 0.01 probability of error. Use the equivocation formula to compute the uncertainty per reading introduced by errors.',
      a: 'This uses the same equivocation formula as the noisy channel example. Equivocation = -(0.99 log₂ 0.99 + 0.01 log₂ 0.01). Compute: 0.99 × log₂(0.99) ≈ 0.99 × (-0.0145) ≈ -0.0143. And 0.01 × log₂(0.01) = 0.01 × (-6.644) ≈ -0.0664. So H_y(x) ≈ 0.0143 + 0.0664 ≈ 0.081 bits per reading. A 1% error rate introduces about 0.081 bits of ambiguity per measurement.'
    },
    {
      q: 'What is a typical sequence, and why does it make compression possible?',
      a: 'Take a long sequence of N symbols from a steady source. Almost every sequence you actually see is "typical." All typical sequences have nearly the same probability, about 2^(-NH). There are about 2^(NH) of them. The leftover sequences are so rare that together they almost never happen. This makes compression possible. You only need to label the 2^(NH) typical sequences, not every possible sequence. That takes about NH bits, far fewer than naming all sequences.'
    },
    {
      q: 'Why does the bell curve hold the most entropy of any spread with the same variance?',
      a: 'Variance fixes how far the values stray from the mean. Within that one limit, the shape still has freedom. Entropy is largest when probability spreads out most evenly. The bell curve uses its freedom for the most even spread. Any other shape with the same variance has to pile probability up somewhere. Piling up makes the source more predictable, which lowers entropy. So the bell curve wins.'
    },
    {
      q: 'State the Noiseless Channel Coding Theorem. What does it guarantee, and what does it not tell you?',
      a: 'The noiseless channel coding theorem: if the source entropy H ≤ channel capacity C, you can transmit the source over the channel with arbitrarily small error. The best possible efficiency is $\\frac{C}{H}$. If H > C, transmission without errors is impossible. What it guarantees: that efficient codes exist. What it does not tell you: how to find such a code. It is an existence proof via probabilistic grouping and Shannon-Fano coding. Finding efficient codes in practice is a separate problem.'
    },
    {
      q: 'Encode the source with symbols A, B, C, D, E at probabilities $\\frac{1}{2}, \\frac{1}{4}, \\frac{1}{8}, \\frac{1}{16}, \\frac{1}{16}$ using a Shannon-Fano code. Verify the average length equals the entropy.',
      a: 'Step 1: Entropy $H = -\\left(\\frac{1}{2} \\log \\frac{1}{2} + \\frac{1}{4} \\log \\frac{1}{4} + \\frac{1}{8} \\log \\frac{1}{8} + \\frac{1}{16} \\log \\frac{1}{16} + \\frac{1}{16} \\log \\frac{1}{16}\\right) = \\frac{1}{2} + \\frac{2}{4} + \\frac{3}{8} + \\frac{4}{16} + \\frac{4}{16} = \\frac{15}{8}$ bits. Step 2: Assign code lengths $m_s = \\lceil \\log_2(\\frac{1}{p_s}) \\rceil$: A gets 1 bit, B gets 2 bits, C gets 3 bits, D gets 4 bits, E gets 4 bits. Assign: A = 0, B = 10, C = 110, D = 1110, E = 1111. Step 3: Average length $= \\frac{1}{2}(1) + \\frac{1}{4}(2) + \\frac{1}{8}(3) + \\frac{1}{16}(4) + \\frac{1}{16}(4) = 0.5 + 0.5 + 0.375 + 0.25 + 0.25 = \\frac{15}{8}$ bits. The average length equals the entropy exactly. This code is optimal.'
    },
    {
      q: 'Predict: what happens to the entropy of a Markov information source as the transition probabilities become more extreme (one transition per state becomes probability 1)?',
      a: 'When each state has one transition with probability 1, the source is completely deterministic. No randomness remains. The entropy H = Σᵢ Pᵢ Hᵢ where each Hᵢ = 0 (since one transition per state has probability 1, giving log(1) = 0). So H = 0. A deterministic source has zero entropy: you always know the next symbol, so no information is gained per symbol. The source is maximally compressible: you only need to know the starting state.'
    },
    {
      q: 'What is equivocation and how does it relate to the actual transmission rate R?',
      a: 'Equivocation H_y(x) is the conditional entropy of the transmitted signal x given the received signal y. It measures how much uncertainty about what was sent remains after observing what was received. The actual transmission rate is R = H(x) - H_y(x). Information produced by the source minus the uncertainty remaining after reception. Three equivalent forms: R = H(x) - H_y(x) = H(y) - H_x(y) = H(x) + H(y) - H(x,y). All equal the mutual information between input and output.'
    },
    {
      q: "Transfer: A storage medium (like a hard drive) can be modeled as a channel with noise. If the drive has 2 GB capacity and 0.1% bit error rate, apply Shannon's noisy channel theorem framework to estimate the maximum reliable data storage.",
      a: 'The drive is a channel with capacity C = (1 - H_binary(0.001)) × 2 GB ≈ (1 - 0.011) × 2 GB ≈ 1.978 GB. The binary entropy of error probability 0.001 ≈ 0.011 bits, so about 1.1% of capacity is consumed by the redundancy needed to correct errors. This is why error-correcting codes (ECC) are used in storage: the noisy channel theorem guarantees that if you use less than C bits of actual data per unit of storage, you can recover it reliably despite errors.'
    },
    {
      q: 'State the Shannon-Hartley Theorem and derive the formula from first principles.',
      a: 'Shannon-Hartley Theorem: C = W log((P+N)/N). Derivation: (1) For an additive noise channel, R = H(y) - H(n). (2) H(n) is fixed (noise is independent of the signal). (3) To maximize R, maximize H(y). (4) H(y) is maximized when y is Gaussian (Gaussian maximizes entropy for fixed variance). (5) For Gaussian output with power P+N: H(y) = W log 2πe(P+N). (6) For Gaussian noise with power N: H(n) = W log 2πeN. (7) R = W log(P+N) - W log N = W log((P+N)/N). This is the capacity C, since step 4 achieves the maximum.'
    },
    {
      q: 'How does the discrete entropy differ from continuous entropy? Give one concrete consequence.',
      a: 'Discrete entropy H = -Σ pᵢ log pᵢ is absolute: it does not depend on how you label the outcomes. It is always non-negative. Continuous entropy H = -∫ p(x) log p(x) dx is relative to the coordinate system. It changes when you change variables by log|Jacobian|. It can be negative. Concrete consequence: you cannot compare the continuous entropy of two distributions measured in different coordinate systems. But mutual information I(x;y) = H(x) + H(y) - H(x,y) is coordinate-independent even for continuous distributions, which is why it is used as the fundamental measure in channel capacity.'
    },
    {
      q: 'Elaborate: Why is white Gaussian noise the worst-case noise for a power-limited channel?',
      a: 'For a fixed noise power N, the Gaussian distribution maximizes entropy. Since capacity C = W log((P+N)/N) assumes Gaussian noise, and capacity decreases as noise entropy increases, Gaussian noise achieves the maximum entropy for its power level, leaving the least room for signal. For any other noise distribution with the same power N, the noise entropy power N₁ < N, and bounds show C ≥ W log((P+N₁)/N₁) > W log((P+N)/N). So Gaussian noise minimizes capacity for a given noise power. It is the worst case for the communicator.'
    },
    {
      q: 'What is the redundancy of English text, and what are two practical consequences?',
      a: 'English has about 50% redundancy: $\\text{redundancy} = 1 - \\frac{H}{H_{\\max}} \\approx 0.5$. So only about half of each message carries new information. The rest is predictable. Two consequences follow. First, crossword puzzles are solvable. The across and down clues constrain each other, and 50% redundancy leaves enough information to fix the missing letters. Second, English text can be compressed by roughly half with no information lost. Lossless compression uses this redundancy.'
    },
    {
      q: 'Transfer: A DNA sequence uses four bases (A, T, G, C) with frequencies 0.3, 0.3, 0.2, 0.2. Compute the entropy per base and compare it to the maximum possible entropy for 4 symbols.',
      a: 'Step 1: H = -(0.3 log₂ 0.3 + 0.3 log₂ 0.3 + 0.2 log₂ 0.2 + 0.2 log₂ 0.2). Compute each term: 0.3 × log₂(0.3) = 0.3 × (-1.737) = -0.521 (×2 = -1.042). 0.2 × log₂(0.2) = 0.2 × (-2.322) = -0.464 (×2 = -0.929). H = 1.042 + 0.929 = 1.971 bits per base. Step 2: Maximum for 4 symbols = log₂ 4 = 2 bits per base. Step 3: $\\text{Redundancy} = 1 - \\frac{1.971}{2} = 1.45\\%$. This DNA sequence is nearly maximally random, with only slight redundancy.'
    },
    {
      q: 'What is the Sampling Theorem? Why does it connect continuous signals to finite-dimensional spaces?',
      a: "The Sampling Theorem: a band-limited signal with bandwidth W Hz is completely determined by its sample values taken at 2W samples per second. The reconstruction formula is f(t) = Σ Xₙ sin(π(2Wt-n))/(π(2Wt-n)). It connects continuous signals to finite-dimensional spaces because a signal of duration T and bandwidth W is described by approximately 2TW numbers (the sample values). This is why information-theoretic quantities like entropy per second H = 2WH' can be computed from entropy per sample H': the signal lives in 2TW-dimensional space, and each dimension contributes one degree of freedom."
    },
    {
      q: 'Self-explain: The proof of the Noisy Channel Coding Theorem uses a random coding argument. Why does showing the average error over all random codes goes to zero prove that good codes exist?',
      a: 'Suppose the average error over all codes in a class is ε. Then at least one code must have error at most ε. If every code had error above ε, the average would be above ε too. That is a contradiction. So proving the average goes to zero guarantees one code reaches near-zero error. The proof never builds that specific code. It only proves one exists. For R below C, the average over all random codes of block length T has error approaching 0 as T grows.'
    },
    {
      q: 'State the Source Coding with Fidelity result. How does it connect rate-distortion theory to channel capacity?',
      a: 'A source with rate R₁ at fidelity v₁ can be transmitted with fidelity approaching v₁ if and only if R₁ ≤ C. The connection: rate-distortion theory defines R₁ = minimum mutual information needed to represent the source within fidelity v₁. Channel capacity defines C = maximum mutual information the channel can support. The source-to-channel comparison R₁ ≤ C is the complete condition for faithful transmission. It is a source-channel duality: you minimize on the source side (rate for given distortion) and maximize on the channel side (capacity for given power), and the condition for success is exactly R₁ ≤ C.'
    },
    {
      q: 'Predict: If you increase signal power P in the Shannon-Hartley formula while holding noise power N and bandwidth W fixed, does capacity grow without bound? At what rate?',
      a: 'Capacity $C = W \\log\\left(\\frac{P+N}{N}\\right) = W \\log\\left(1 + \\frac{P}{N}\\right)$. As P → ∞, C → ∞, so yes, capacity grows without bound. But the rate of growth slows: C grows as $W \\log\\left(\\frac{P}{N}\\right)$ for large P, which is logarithmic in P. Doubling the signal power does not double the capacity; it adds W × 1 = W bits per second of capacity. By contrast, doubling the bandwidth W doubles the capacity (linear in W). This shows that in the Shannon-Hartley formula, bandwidth is more valuable than power at high signal-to-noise ratios.'
    },
    {
      q: 'Transfer: A digital camera uses 8-bit grayscale (256 levels). Empirical pixel statistics show 20% are black, 60% are mid-gray, 20% are white. Compute the per-pixel entropy and the redundancy.',
      a: 'Step 1: $H = -[0.2 \\log_2 0.2 + 0.6 \\log_2 0.6 + 0.2 \\log_2 0.2]$. Compute: $0.2 \\times (-2.322) = -0.464$ (×2 = -0.929). $0.6 \\times (-0.737) = -0.442$. Total: $H \\approx 0.929 + 0.442 = 1.371$ bits per pixel. Step 2: Maximum entropy $H_{\\max} = \\log_2(256) = 8$ bits. Step 3: $\\text{Redundancy} = 1 - \\frac{1.371}{8} \\approx 82.9\\%$. The image is highly compressible: lossless compression should reduce file size by roughly a factor of 6.'
    },
    {
      q: 'Transfer: A WiFi link has bandwidth W = 20 MHz and SNR = 100 (20 dB). Compute the maximum data rate using Shannon-Hartley. Compare to actual 802.11 rates.',
      a: 'Apply Shannon-Hartley: $C = W \\log_2(1 + \\text{SNR}) = 20 \\times 10^6 \\times \\log_2(101)$. Compute $\\log_2(101) \\approx 6.66$. So $C \\approx 1.33 \\times 10^8$ = 133 Mbps. Real 802.11n at 20 MHz tops out around 72 Mbps single-stream. The gap (54%) comes from coding overhead, guard intervals, and limits on real radio signals. Shannon gives the upper bound. Real systems hit 50 to 70% of it.'
    },
    {
      q: 'Transfer: A two-bit memory cell has bit error rate 1e-6 per bit. Apply the noisy channel coding theorem to find what fraction of cells must be redundancy bits to enable error correction at this rate.',
      a: 'Each bit is a binary symmetric channel with error rate $p = 10^{-6}$. Channel capacity $C = 1 - H(p)$ where $H(p) = -[p \\log_2 p + (1-p) \\log_2 (1-p)]$. Compute: $H(10^{-6}) \\approx 10^{-6} \\times 19.93 + (1 - 10^{-6}) \\times 1.44 \\times 10^{-6} \\approx 2.16 \\times 10^{-5}$ bits. So $C \\approx 1 - 2.16 \\times 10^{-5} \\approx 0.9999784$ bits per bit. The noisy channel coding bound says at least $1 - C \\approx 0.0022\\%$ of bits must be redundancy for reliable storage. Real ECC schemes (BCH, LDPC) require 5-15% overhead for safety margin and finite block length.'
    },
    {
      q: 'Transfer: A robot arm has 6 joints, each described by a 16-bit angle (65,536 positions). At 100 Hz update rate, what telemetry bandwidth is needed if joint angles are uniform random? What if they are smooth (low entropy per sample)?',
      a: 'Uniform case: each angle is $\\log_2(65536) = 16$ bits of entropy. With 6 joints at 100 Hz: rate $= 6 \\times 16 \\times 100 = 9600$ bits/s = 9.6 kbps. Smooth case: angle changes are small from sample to sample, so conditional entropy $H_y(x)$ is much lower, perhaps $\\approx 4$ bits per joint per sample. Rate drops to $6 \\times 4 \\times 100 = 2400$ bits/s = 2.4 kbps. Differential encoding (sending only changes) uses this time redundancy. It is standard practice in motion control telemetry.'
    },
    {
      q: 'Transfer: A speech codec must transmit 16 kHz audio at telephone quality (PESQ score 3.5 means about 12 dB signal-to-distortion ratio). Use the rate-distortion bound to estimate the minimum bit rate.',
      a: 'Apply the rate-distortion formula: $R = W_1 \\log_2(Q/N)$. The 12 dB SDR means $Q/N = 10^{1.2} \\approx 15.85$. Half-bandwidth (Nyquist gives $W_1 \\approx 8000$ Hz for 16 kHz sampling). $R = 8000 \\times \\log_2(15.85) \\approx 8000 \\times 3.99 \\approx 31{,}900$ bps. Real codecs (Opus, AMR-WB) hit near this rate at 24-32 kbps for telephone-quality wideband speech, confirming the rate-distortion bound is nearly tight in practice.'
    },
    {
      q: 'Transfer: An HDR video stream needs 12 bits per pixel at 4K resolution (3840 × 2160 pixels) at 60 fps. Estimate the raw bit rate and the rate after typical (10:1) compression. Why does Shannon say compression beyond a limit destroys quality?',
      a: 'Raw rate: $3840 \\times 2160 \\times 12 \\times 60 \\approx 5.97 \\times 10^9$ bits/s = 5.97 Gbps. After 10:1 compression: $\\approx 597$ Mbps. The source coding with fidelity result caps reliable transmission at $R_1 \\leq C$. The minimum rate $R_1$ for a given fidelity level is fixed by the source statistics. Compressing below $R_1$ for the desired fidelity is provably impossible without quality loss. Modern HEVC/AV1 codecs approach but do not break this bound. They use space and time redundancy to get close to the rate-distortion frontier.'
    },
    {
      q: 'Transfer: A genomic compression tool stores DNA (4 symbols: A, T, G, C) with empirical frequencies 0.3, 0.3, 0.2, 0.2. Compute the Shannon-Fano code lengths and verify they satisfy Kraft inequality.',
      a: 'Step 1: Code lengths $m_s = \\lceil \\log_2(1/p_s) \\rceil$. For $p = 0.3$: $\\log_2(1/0.3) \\approx 1.74$, so $m = 2$ bits. For $p = 0.2$: $\\log_2(1/0.2) \\approx 2.32$, so $m = 3$ bits. Assignments: A=00 (2 bits), T=01 (2 bits), G=100 (3 bits), C=101 (3 bits). Step 2: Kraft check: $\\sum 2^{-m_s} = 2^{-2} + 2^{-2} + 2^{-3} + 2^{-3} = 0.25 + 0.25 + 0.125 + 0.125 = 0.75 \\leq 1$. Step 3: Average length $= 0.3(2) + 0.3(2) + 0.2(3) + 0.2(3) = 1.2 + 1.2 = 2.4$ bits. Step 4: Compare to entropy $H = 1.971$ bits (computed earlier). Code overhead: $2.4 - 1.971 \\approx 0.43$ bits per symbol, within the Shannon-Fano bound of 1 bit overhead.'
    },
    {
      q: 'Transfer: A satellite uplink has signal power 10 W, noise power 0.1 W, and 10 MHz bandwidth. The downlink has signal power 1 W and noise power 0.1 W on the same bandwidth. Which leg is the bottleneck and what is the round-trip capacity?',
      a: 'Uplink: $C_{\\text{up}} = 10^7 \\times \\log_2(1 + 100) = 10^7 \\times 6.66 \\approx 66.6$ Mbps. Downlink: $C_{\\text{down}} = 10^7 \\times \\log_2(1 + 10) = 10^7 \\times 3.46 \\approx 34.6$ Mbps. Downlink is the bottleneck at 34.6 Mbps, half the uplink capacity. Round-trip throughput is limited by the slower direction. Practical implication: design the downlink carefully (more antenna gain, error correction, lower modulation order) since it caps total system performance.'
    },
    {
      q: 'Transfer: A neural network classifier outputs probabilities for 10 classes. On a test image it outputs (0.05, 0.05, 0.7, 0.05, 0.05, 0.02, 0.02, 0.02, 0.02, 0.02). Compute the prediction entropy. What does this tell you about model confidence?',
      a: 'Entropy: $H = -\\sum p_i \\log_2 p_i = -[2(0.05 \\log_2 0.05) + 0.7 \\log_2 0.7 + 5(0.02 \\log_2 0.02) + 2(0.05 \\log_2 0.05) ]$. Compute: $0.05 \\times (-4.322) \\approx -0.216$ (×4 = -0.864). $0.7 \\times (-0.515) \\approx -0.360$. $0.02 \\times (-5.644) \\approx -0.113$ (×5 = -0.564). Sum: $H \\approx 0.864 + 0.360 + 0.564 = 1.79$ bits. Maximum (uniform) entropy is $\\log_2 10 \\approx 3.32$ bits. The prediction entropy of 1.79 bits indicates moderate confidence: the model has a clear winner (class 3 at 0.7) but retains uncertainty about other classes. Active learning often selects high-entropy samples for labeling, since these are where the model is most uncertain.'
    }
  ],
  reference: {
    category: 'Quick Reference',
    title: 'Shannon Entropy and Information Theory',
    sections: [
      <>
        <h2>Core Formulas</h2>

        <div className="lrn-definition">
          <span className="lrn-definition-term">Entropy</span>
          <div className="lrn-definition-desc">
            <div className="lrn-eq lrn-eq-display">
              <span>{`$$H = -K \\sum_{i=1}^{n} p_i \\log p_i$$`}</span>
            </div>
            <p>
              <strong>When to use:</strong> measure the average uncertainty (bits per symbol) of any
              discrete probability distribution. Set {`$K = 1$`} and use base-2 logs for bits.
            </p>
          </div>
        </div>

        <div className="lrn-definition">
          <span className="lrn-definition-term">Binary Entropy</span>
          <div className="lrn-definition-desc">
            <div className="lrn-eq">
              <span>{`$$H = -(p \\log p + (1-p) \\log(1-p))$$`}</span>
            </div>
            <p>
              <strong>When to use:</strong> any two-outcome source (coin flip, bit transmission,
              binary sensor). Peaks at 1 bit when {`$p = 0.5$`}.
            </p>
          </div>
        </div>

        <div className="lrn-definition">
          <span className="lrn-definition-term">Conditional Entropy</span>
          <div className="lrn-definition-desc">
            <div className="lrn-eq">
              <span>{`$$H_x(y) = -\\sum_{i,j} p(i,j) \\log p_i(j)$$`}</span>
            </div>
            <p>
              <strong>When to use:</strong> measure remaining uncertainty in {`$y$`} after observing{' '}
              {`$x$`}. Equals equivocation when {`$x$`} is what was sent and {`$y$`} is what was
              received.
            </p>
          </div>
        </div>

        <div className="lrn-definition">
          <span className="lrn-definition-term">Chain Rule</span>
          <div className="lrn-definition-desc">
            <div className="lrn-eq">
              <span>{`$$H(x, y) = H(x) + H_x(y)$$`}</span>
            </div>
            <p>
              <strong>When to use:</strong> decompose joint entropy into sequential steps.
              Fundamental identity for all multi-step information calculations.
            </p>
          </div>
        </div>

        <div className="lrn-definition">
          <span className="lrn-definition-term">Subadditivity</span>
          <div className="lrn-definition-desc">
            <div className="lrn-eq">
              <span>{`$$H(x, y) \\leq H(x) + H(y)$$`}</span>
            </div>
            <p>
              <strong>When to use:</strong> bound joint entropy. Equality holds when {`$x$`} and{' '}
              {`$y$`} are independent.
            </p>
          </div>
        </div>

        <div className="lrn-definition">
          <span className="lrn-definition-term">Markov Source Entropy</span>
          <div className="lrn-definition-desc">
            <div className="lrn-eq">
              <span>{`$$H = \\sum_i P_i H_i = -\\sum_{i,j} P_i \\, p_i(j) \\log p_i(j)$$`}</span>
            </div>
            <p>
              <strong>When to use:</strong> compute entropy rate of a Markov information source.
            </p>
          </div>
        </div>

        <div className="lrn-definition">
          <span className="lrn-definition-term">Redundancy</span>
          <div className="lrn-definition-desc">
            <div className="lrn-eq">
              <span>{`$$\\text{Redundancy} = 1 - \\frac{H}{H_{\\max}}$$`}</span>
            </div>
            <p>
              <strong>When to use:</strong> measure how far a source is from maximum entropy.
              English ≈ 50% redundant.
            </p>
          </div>
        </div>

        <h2>Channel Capacity</h2>

        <div className="lrn-definition">
          <span className="lrn-definition-term">Noiseless Discrete Channel</span>
          <div className="lrn-definition-desc">
            <div className="lrn-eq">
              <span>{`$$C = \\lim_{T \\to \\infty} \\frac{\\log N(T)}{T}$$`}</span>
            </div>
            <p>
              <strong>When to use:</strong> find capacity when there is no noise. {`$N(T)$`} is the
              number of allowed sequences of duration {`$T$`}.
            </p>
          </div>
        </div>

        <div className="lrn-definition">
          <span className="lrn-definition-term">Noisy Channel Capacity</span>
          <div className="lrn-definition-desc">
            <div className="lrn-eq lrn-eq-display">
              <span>{`$$C = \\max_{P(x)} \\left[H(x) - H_y(x)\\right]$$`}</span>
            </div>
            <p>
              <strong>When to use:</strong> find the maximum reliable transmission rate for any
              discrete noisy channel.
            </p>
          </div>
        </div>

        <div className="lrn-definition">
          <span className="lrn-definition-term">Actual Transmission Rate</span>
          <div className="lrn-definition-desc">
            <div className="lrn-eq">
              <span>{`$$R = H(x) - H_y(x) = H(y) - H_x(y) = H(x) + H(y) - H(x,y)$$`}</span>
            </div>
            <p>
              <strong>When to use:</strong> measure actual information flow through a noisy channel.
              All three forms are equivalent.
            </p>
          </div>
        </div>

        <div className="lrn-definition">
          <span className="lrn-definition-term">Shannon-Hartley Theorem</span>
          <div className="lrn-definition-desc">
            <div className="lrn-eq lrn-eq-display">
              <span>{`$$C = W \\log\\left(\\frac{P + N}{N}\\right)$$`}</span>
            </div>
            <p>
              <strong>When to use:</strong> compute the capacity of any band-limited channel with
              white Gaussian noise. {`$W$`} is bandwidth in Hz, {`$P$`} is signal power, {`$N$`} is
              noise power.
            </p>
          </div>
        </div>

        <div className="lrn-definition">
          <span className="lrn-definition-term">Symmetric Channel Capacity</span>
          <div className="lrn-definition-desc">
            <div className="lrn-eq">
              <span>{`$$C = \\log m + \\sum_i p_i \\log p_i$$`}</span>
            </div>
            <p>
              <strong>When to use:</strong> symmetric channels where every input has the same
              transition probability set.
            </p>
          </div>
        </div>

        <h2>Continuous Entropy</h2>

        <div className="lrn-definition">
          <span className="lrn-definition-term">Continuous Entropy</span>
          <div className="lrn-definition-desc">
            <div className="lrn-eq">
              <span>{`$$H = -\\int p(x) \\log p(x) \\, dx$$`}</span>
            </div>
            <p>
              <strong>When to use:</strong> entropy of continuous random variables.
              Coordinate-dependent; can be negative. Use differences (mutual information) when
              comparing distributions.
            </p>
          </div>
        </div>

        <div className="lrn-definition">
          <span className="lrn-definition-term">Gaussian Entropy</span>
          <div className="lrn-definition-desc">
            <div className="lrn-eq">
              <span>{`$$H(x) = \\log \\sqrt{2 \\pi e} \\, \\sigma$$`}</span>
            </div>
            <p>
              <strong>When to use:</strong> entropy of a Gaussian distribution with standard
              deviation {`$\\sigma$`}. Maximum entropy for fixed variance.
            </p>
          </div>
        </div>

        <div className="lrn-definition">
          <span className="lrn-definition-term">Entropy Loss in Filter</span>
          <div className="lrn-definition-desc">
            <div className="lrn-eq">
              <span>{`$$H_2 = H_1 + \\frac{1}{W} \\int_W \\log |Y(f)|^2 \\, df$$`}</span>
            </div>
            <p>
              <strong>When to use:</strong> compute output entropy when a signal passes through a
              linear filter with frequency response {`$Y(f)$`}.
            </p>
          </div>
        </div>

        <div className="lrn-definition">
          <span className="lrn-definition-term">Entropy Power Inequality</span>
          <div className="lrn-definition-desc">
            <div className="lrn-eq">
              <span>{`$$\\bar{N}_1 + \\bar{N}_2 \\leq \\bar{N}_3 \\leq N_1 + N_2$$`}</span>
            </div>
            <p>
              <strong>When to use:</strong> bound the entropy power of a sum of two independent
              signals.
            </p>
          </div>
        </div>

        <h2>Coding Theorems</h2>

        <div className="lrn-definition">
          <span className="lrn-definition-term">Noiseless Channel Coding Theorem</span>
          <div className="lrn-definition-desc">
            <p>
              If {`$H \\leq C$`}: transmit at efficiency {`$\\frac{C}{H}$`} with arbitrarily small
              error.
            </p>
            <p>If {`$H > C$`}: reliable transmission is impossible.</p>
            <p>
              <strong>When to use:</strong> check feasibility of lossless compression and
              transmission.
            </p>
          </div>
        </div>

        <div className="lrn-definition">
          <span className="lrn-definition-term">Noisy Channel Coding Theorem</span>
          <div className="lrn-definition-desc">
            <p>If {`$H \\leq C$`}: reliable transmission is possible (error rate → 0).</p>
            <p>
              If {`$H > C$`}: equivocation ≥ {`$H - C$`}. Information is permanently lost.
            </p>
            <p>
              <strong>When to use:</strong> determine if a given data rate is achievable over a
              noisy channel.
            </p>
          </div>
        </div>

        <div className="lrn-definition">
          <span className="lrn-definition-term">Shannon-Fano Code Length</span>
          <div className="lrn-definition-desc">
            <div className="lrn-eq">
              <span>{`$$\\log_2 \\frac{1}{p_s} \\leq m_s < 1 + \\log_2 \\frac{1}{p_s}$$`}</span>
            </div>
            <p>
              <strong>When to use:</strong> construct a near-optimal prefix-free code. Assign
              symbols ordered by decreasing probability; use binary subdivision.
            </p>
          </div>
        </div>

        <h2>Rate-Distortion</h2>

        <div className="lrn-definition">
          <span className="lrn-definition-term">Source Rate at Fidelity v₁</span>
          <div className="lrn-definition-desc">
            <div className="lrn-eq">
              <span>{`$$R_1 = \\min_{P_x(y): v \\leq v_1} \\iint P(x,y) \\log \\frac{P(x,y)}{P(x)P(y)} \\, dx \\, dy$$`}</span>
            </div>
            <p>
              <strong>When to use:</strong> find the minimum information rate needed to represent a
              source within a given fidelity bound.
            </p>
          </div>
        </div>

        <div className="lrn-definition">
          <span className="lrn-definition-term">White Noise Source Rate</span>
          <div className="lrn-definition-desc">
            <div className="lrn-eq">
              <span>{`$$R = W_1 \\log \\frac{Q}{N}$$`}</span>
            </div>
            <p>
              <strong>When to use:</strong> white noise source with bandwidth {`$W_1$`}, power{' '}
              {`$Q$`}, allowed mean square error {`$N$`}.
            </p>
          </div>
        </div>

        <div className="lrn-definition">
          <span className="lrn-definition-term">Source Coding with Fidelity</span>
          <div className="lrn-definition-desc">
            <p>
              Faithful transmission at fidelity {`$v_1$`} is possible if and only if{' '}
              {`$R_1 \\leq C$`}.
            </p>
            <p>
              <strong>When to use:</strong> check whether a lossy source can be transmitted over a
              given channel at a target quality level.
            </p>
          </div>
        </div>

        <h2>Key Results</h2>

        <table>
          <thead>
            <tr>
              <th>Result</th>
              <th>Formula / Statement</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Uniqueness of Entropy</td>
              <td>
                {`$H = -K \\sum p_i \\log p_i$`} is the only measure satisfying the three axioms.
              </td>
            </tr>
            <tr>
              <td>AEP</td>
              <td>
                Typical sequences have probability near {`$2^{-NH}$`}; about {`$2^{NH}$`} of them.
              </td>
            </tr>
            <tr>
              <td>Noiseless Coding</td>
              <td>Reliable transmission iff {`$H \\leq C$`}.</td>
            </tr>
            <tr>
              <td>Noisy Coding</td>
              <td>
                Reliable transmission iff {`$H \\leq C$`}; otherwise equivocation {`$\\geq H - C$`}.
              </td>
            </tr>
            <tr>
              <td>Sampling</td>
              <td>Band-limited signals determined by {`$2W$`} samples/second.</td>
            </tr>
            <tr>
              <td>Filter Entropy</td>
              <td>{`$H_2 = H_1 + \\frac{1}{W} \\int \\log|Y(f)|^2 df$`}</td>
            </tr>
            <tr>
              <td>Shannon-Hartley</td>
              <td>{`$C = W \\log\\frac{P+N}{N}$`}</td>
            </tr>
            <tr>
              <td>Source-Channel Matching</td>
              <td>
                Faithful transmission at fidelity {`$v_1$`} iff {`$R_1 \\leq C$`}.
              </td>
            </tr>
          </tbody>
        </table>
      </>
    ]
  }
}

export default function ShannonEntropyContent() {
  return <LearningTemplate config={config} />
}
