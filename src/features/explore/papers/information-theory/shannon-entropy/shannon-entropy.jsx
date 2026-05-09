import { LearningTemplate } from '../../../../../components/learning/learning-template'

const config = {
  cssPrefix: 'she',
  source: 'A Mathematical Theory of Communication, Claude E. Shannon, 1948',
  documentTitle: 'Shannon Entropy and Information Theory - AETHER',
  learning: {
    category: 'Papers',
    title: 'Shannon Entropy and Information Theory',
    subtitle: 'The mathematical foundation of all modern communication systems.',
    sections: [
      <>
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

        <h2>The Fundamental Problem of Communication</h2>

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
              Here {`$N(T)$`} is the number of allowed sequences of duration {`$T$`}.
            </p>
          </div>
        </div>

        <div className="lrn-predict">
          <span className="lrn-predict-label">PREDICT</span>
          <p>
            A telegraph uses dots (1 unit), dashes (3 units), letter spaces (3 units), and word
            spaces (6 units). Before computing, predict: will the capacity be closer to 0.1, 0.5, or
            1.0 bits per unit time?
          </p>
          <details className="lrn-predict-reveal">
            <summary>Check your thinking</summary>
            <p>
              Shannon computed {`$C = 0.539$`} bits per unit time for this telegraph. The mix of
              short and long symbols gives a capacity less than 1 but well above 0.1.
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
          This recurrence has a characteristic equation. Solving it gives the capacity directly.
        </p>

        <div className="lrn-eq">
          <span>{`$$X^{-t_1} + X^{-t_2} + \\cdots + X^{-t_n} = 1$$`}</span>
        </div>

        <p>
          The largest real root {`$X_0$`} gives {`$C = \\log X_0$`}.
        </p>

        <h3>Telegraph Example</h3>

        <p>For the telegraph, the recurrence is:</p>

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

        <h3>Capacity via Determinant</h3>

        <p>
          For channels with multiple states and symbol durations {`$b^{(s)}_{ij}$`} for transition
          from state {`$i$`} to state {`$j$`} via symbol {`$s$`}, the capacity solves:
        </p>

        <div className="lrn-eq">
          <span>{`$$\\left| \\sum_s W^{-b^{(s)}_{ij}} - \\delta_{ij} \\right| = 0, \\quad C = \\log W$$`}</span>
        </div>

        <p>
          Here {`$\\delta_{ij}$`} is 1 when {`$i = j$`} and 0 otherwise.
        </p>
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
          For a stationary Markov process with states {`$i$`} and transition probabilities{' '}
          {`$p_i(j)$`}:
        </p>

        <div className="lrn-eq">
          <span>{`$$p(i) = \\sum_j p(i, j), \\quad p(i, j) = p(i) \\, p_i(j), \\quad \\sum_{i,j} p(i,j) = 1$$`}</span>
        </div>

        <p>The equilibrium condition for a stationary Markov process is:</p>

        <div className="lrn-eq">
          <span>{`$$P_j = \\sum_i P_i \\, p_i(j)$$`}</span>
        </div>

        <h3>N-gram Approximations to English</h3>

        <p>Shannon gave six levels of approximation to natural English text.</p>

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
              {`$K$`} is a positive constant that sets the unit. With base-2 logarithms and{' '}
              {`$K = 1$`}, entropy is measured in bits.
            </p>
          </div>
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
              Breaking a single choice into two successive choices gives the same total uncertainty.
              The tree diagram:{' '}
              {`$H(\\tfrac{1}{2}, \\tfrac{1}{3}, \\tfrac{1}{6}) = H(\\tfrac{1}{2}, \\tfrac{1}{2}) + \\tfrac{1}{2} H(\\tfrac{2}{3}, \\tfrac{1}{3})$`}
              .
            </p>
          </div>
        </div>

        <div className="lrn-elaborate">
          <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
          <p>
            The functional equation {`$A(s^m) = m A(s)$`} forces the measure to be a logarithm. The
            decomposition axiom then forces the weighted-sum form. Together they uniquely determine{' '}
            {`$H = -K \\sum p_i \\log p_i$`} up to the constant {`$K$`}.
          </p>
        </div>

        <h3>Key Properties of Entropy</h3>

        <ul className="lrn-list">
          <li>
            {`$H = 0$`} when one outcome has probability 1. No uncertainty means zero entropy.
          </li>
          <li>
            {`$H$`} is maximum when all outcomes are equally likely: {`$H_\\max = \\log n$`}.
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

        <h3>Conditional Entropy and the Chain Rule</h3>

        <p>
          The conditional entropy of {`$y$`} given {`$x$`} measures remaining uncertainty in {`$y$`}{' '}
          after learning {`$x$`}:
        </p>

        <div className="lrn-eq">
          <span>{`$$H_x(y) = -\\sum_{i,j} p(i, j) \\log p_i(j)$$`}</span>
        </div>

        <p>The chain rule connects joint, marginal, and conditional entropy:</p>

        <div className="lrn-eq lrn-eq-display">
          <span>{`$$H(x, y) = H(x) + H_x(y)$$`}</span>
        </div>

        <p>
          Joint uncertainty equals the uncertainty in {`$x$`} plus the remaining uncertainty in{' '}
          {`$y$`} given {`$x$`}.
        </p>
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

        <h3>Asymptotic Equipartition Property</h3>

        <p>Long sequences from an ergodic source split into two groups.</p>

        <div className="lrn-callout">
          <span className="lrn-callout-label">Key Result</span>
          <p>
            For any {`$\\epsilon > 0$`} and {`$\\delta > 0$`}, all but a fraction {`$\\epsilon$`} of
            sequences of length {`$N$`} satisfy:
          </p>
          <div className="lrn-eq">
            <span>{`$$\\left| \\frac{\\log p^{-1}}{N} - H \\right| < \\delta$$`}</span>
          </div>
          <p>
            The set of "typical" sequences has size approximately {`$2^{NH}$`}. The remaining
            sequences have negligible total probability.
          </p>
        </div>

        <div className="lrn-elaborate">
          <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
          <p>
            The proof uses the ergodic theorem. For ergodic sources, the time average of{' '}
            {`$\\log p_i(j)$`} along a typical path converges to the ensemble average, which equals{' '}
            {`$-H$`}.
          </p>
          <p>
            So {`$\\frac{1}{N} \\log p(\\text{sequence}) \\to -H$`} for typical sequences. This
            means almost all probability mass concentrates on roughly {`$2^{NH}$`} sequences of
            roughly equal probability {`$2^{-NH}$`}.
          </p>
        </div>

        <h3>Entropy Approximations: G_N and F_N</h3>

        <p>Two sequences of approximations both converge to {`$H$`} from above.</p>

        <div className="lrn-compare">
          <div className="lrn-compare-col">
            <span className="lrn-compare-title">{`$G_N$`} Approximation</span>
            <p>{`$G_N = -\\frac{1}{N} \\sum_i p(B_i) \\log p(B_i)$`}</p>
            <p>Entropy per symbol of N-length blocks. Always overestimates {`$H$`}.</p>
            <p>Monotone decreasing. Converges to {`$H$`}.</p>
          </div>
          <div className="lrn-compare-col">
            <span className="lrn-compare-title">{`$F_N$`} Approximation</span>
            <p>{`$F_N = -\\sum_{i,j} p(B_i, S_j) \\log p_{B_i}(S_j)$`}</p>
            <p>Conditional entropy of next symbol given previous {`$N-1$`}. Better estimate.</p>
            <p>
              {`$F_N \\leq G_N$`}. Also monotone decreasing, converges to {`$H$`}.
            </p>
          </div>
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

        <p>
          One method to achieve near-optimal efficiency: expand the cumulative probability of each
          symbol in binary to {`$m_s$`} places, where:
        </p>

        <div className="lrn-eq">
          <span>{`$$\\log_2 \\frac{1}{p_s} \\leq m_s < 1 + \\log_2 \\frac{1}{p_s}$$`}</span>
        </div>

        <p>This produces a prefix-free code. The average code length per symbol satisfies:</p>

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
            <span className="lrn-step-title">Step 2: Assign code words</span>
            <p className="lrn-step-content">
              A = 0 (1 bit), B = 10 (2 bits), C = 110 (3 bits), D = 111 (3 bits).
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

        <h3>Maximum Entropy Assignment</h3>

        <p>
          The transition probabilities that maximize the information rate for a constrained channel
          are:
        </p>

        <div className="lrn-eq">
          <span>{`$$p^{(s)}_{ij} = \\frac{B_j}{B_i} W^{-l^{(s)}_{ij}}, \\quad B_i = \\sum_{s,j} B_j W^{-l^{(s)}_{ij}}$$`}</span>
        </div>

        <p>Under this assignment, the rate equals the channel capacity {`$C$`}.</p>

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
          <div className="lrn-faded-phase">
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
              Shannon computed {`$H_y(x) = -[0.99 \\log 0.99 + 0.01 \\log 0.01] \\approx 0.081$`}{' '}
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
          If a correction channel of capacity {`$H_y(x)$`} is added alongside the main channel, the
          receiver can correct all but a fraction {`$\\epsilon$`} of errors.
        </p>

        <p>This shows equivocation is precisely the bandwidth needed to fix the errors.</p>

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
          A channel is symmetric when every row of the transition probability matrix is a
          permutation of every other row. For symmetric channels:
        </p>

        <div className="lrn-eq">
          <span>{`$$C = \\log m + \\sum_i p_i \\log p_i$$`}</span>
        </div>

        <p>
          Here {`$m$`} is the number of input symbols and {`$p_i$`} are the transition probabilities
          from any input. The maximum entropy input is always uniform for symmetric channels.
        </p>

        <h3>Error-Correcting Codes: Hamming Code Example</h3>

        <p>Shannon illustrated error correction with the Hamming code for 7-symbol blocks.</p>
        <p>The block has 7 positions: {`$X_1, \\ldots, X_7$`}.</p>
        <p>Message bits: {`$X_3, X_5, X_6, X_7$`}.</p>
        <p>Parity bits: {`$X_4, X_2, X_1$`}, set so certain parity checks pass.</p>
        <p>
          When one error occurs, three parity checks identify the error position as a three-bit
          binary number.
        </p>
        <p>This gives capacity {`$\\frac{4}{7}$`} bits per symbol.</p>

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

        <h3>Nine Properties of Continuous Entropy</h3>

        <ul className="lrn-list">
          <li>For fixed variance, the Gaussian distribution maximizes {`$H$`}.</li>
          <li>For fixed mean on half-line, exponential distribution maximizes {`$H$`}.</li>
          <li>For bounded support, uniform distribution maximizes {`$H$`}.</li>
          <li>Joint entropy satisfies {`$H(x, y) \\leq H(x) + H(y)$`} (subadditivity).</li>
          <li>Conditional entropy: {`$H_x(y) = H(x, y) - H(x)$`}.</li>
          <li>
            Under linear transformation {`$y = Ax$`}: {`$H(y) = H(x) + \\log |\\det A|$`}.
          </li>
          <li>General coordinate change: {`$H(y) = H(x) - \\int p(x) \\log J(x/y) \\, dx$`}.</li>
          <li>n-dimensional Gaussian: {`$H = \\log(2\\pi e)^{n/2} |a_{ij}|^{1/2}$`}.</li>
        </ul>

        <h3>Gaussian Entropy</h3>

        <p>For a Gaussian distribution with variance {`$\\sigma^2$`}:</p>

        <div className="lrn-eq lrn-eq-display">
          <span>{`$$H(x) = \\log \\sqrt{2 \\pi e} \\, \\sigma$$`}</span>
        </div>

        <p>
          The Gaussian maximizes entropy for any fixed variance. This is a calculus of variations
          result: among all distributions with a given variance, the Gaussian spreads probability
          most evenly.
        </p>

        <div className="lrn-elaborate">
          <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
          <p>
            The proof uses Lagrange multipliers on the functional {`$-\\int p \\log p \\, dx$`}{' '}
            subject to {`$\\int p \\, dx = 1$`} and {`$\\int x^2 p \\, dx = \\sigma^2$`}.
          </p>
          <p>
            The optimal {`$p$`} satisfies {`$\\log p = \\lambda_0 + \\lambda_1 x^2$`}, which forces{' '}
            {`$p$`} to be Gaussian. Any other distribution with the same variance has lower entropy.
          </p>
        </div>

        <h3>The Sampling Theorem</h3>

        <p>
          A band-limited signal with bandwidth {`$W$`} is completely determined by its sample values
          at rate {`$2W$`} per second.
        </p>

        <div className="lrn-eq">
          <span>{`$$f(t) = \\sum_{n=-\\infty}^{\\infty} X_n \\frac{\\sin(\\pi(2Wt - n))}{\\pi(2Wt - n)}$$`}</span>
        </div>

        <p>
          A signal of duration {`$T$`} and bandwidth {`$W$`} lives in a space of approximately{' '}
          {`$2TW$`} dimensions.
        </p>

        <h3>Entropy of a Continuous Signal Ensemble</h3>

        <p>The entropy per degree of freedom {`$H'$`} of a band-limited ensemble is:</p>

        <div className="lrn-eq">
          <span>{`$$H' = -\\lim_{n \\to \\infty} \\frac{1}{n} \\int \\cdots \\int p(x_1, \\ldots, x_n) \\log p \\, dx_1 \\cdots dx_n$$`}</span>
        </div>

        <p>For white noise with power {`$N$`}, the entropy per second is:</p>

        <div className="lrn-eq">
          <span>{`$$H = W \\log 2\\pi e N$$`}</span>
        </div>

        <div className="lrn-callout">
          <span className="lrn-callout-label">Key Note</span>
          <p>
            White Gaussian noise has maximum entropy for a given power level. Any signal with the
            same power has less or equal entropy.
          </p>
        </div>

        <h3>Entropy Power</h3>

        <div className="lrn-definition">
          <span className="lrn-definition-term">Entropy Power</span>
          <div className="lrn-definition-desc">
            <p>
              The entropy power of an ensemble is the power of the white Gaussian noise with the
              same entropy per degree of freedom:
            </p>
            <div className="lrn-eq">
              <span>{`$$\\bar{N}_1 = \\frac{1}{2\\pi e} \\exp(2H')$$`}</span>
            </div>
            <p>Entropy power is always less than or equal to the actual power.</p>
          </div>
        </div>

        <h3>Entropy Loss in Linear Filters</h3>

        <p>When a signal passes through a linear filter with frequency response {`$Y(f)$`}:</p>

        <div className="lrn-eq lrn-eq-display">
          <span>{`$$H_2 = H_1 + \\frac{1}{W} \\int_W \\log |Y(f)|^2 \\, df$$`}</span>
        </div>

        <p>
          The entropy power at the output is the entropy power at the input multiplied by the
          geometric mean of {`$|Y(f)|^2$`} over the band.
        </p>

        <h3>Entropy of a Sum</h3>

        <p>
          For two independent ensembles with entropy powers {`$\\bar{N}_1$`} and {`$\\bar{N}_2$`},
          the entropy power of their sum {`$\\bar{N}_3$`} satisfies:
        </p>

        <div className="lrn-eq">
          <span>{`$$\\bar{N}_1 + \\bar{N}_2 \\leq \\bar{N}_3 \\leq N_1 + N_2$$`}</span>
        </div>

        <p>
          Here {`$N_1, N_2$`} are the actual powers. The lower bound is achieved when both signals
          are Gaussian.
        </p>

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
            <p>Mutual information is coordinate-independent even for continuous distributions.</p>
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

        <h3>Capacity Bounds for Arbitrary Noise</h3>

        <p>
          For a channel with additive noise of entropy power {`$\\bar{N}_1$`} and actual power{' '}
          {`$N$`}:
        </p>

        <div className="lrn-eq">
          <span>{`$$W \\log \\frac{P + \\bar{N}_1}{\\bar{N}_1} \\leq C \\leq W \\log \\frac{P + N}{\\bar{N}_1}$$`}</span>
        </div>

        <p>
          Both bounds converge to {`$W \\log\\left(\\frac{P}{N} + 1\\right)$`} when {`$P \\gg N$`}.
        </p>

        <h3>Capacity Increases with Power</h3>

        <p>
          As signal power {`$P$`} increases without bound, the capacity correction {`$\\eta$`}{' '}
          (difference between actual capacity and the white noise formula) approaches zero:
        </p>

        <div className="lrn-eq">
          <span>{`$$C = W \\log\\left(\\frac{P + N - \\eta}{\\bar{N}_1}\\right), \\quad \\eta \\to 0 \\text{ as } P \\to \\infty$$`}</span>
        </div>

        <h3>Peak Power Capacity Bounds</h3>

        <p>
          When signal power is limited by a peak constraint {`$S$`} rather than an average
          constraint:
        </p>

        <div className="lrn-eq">
          <span>{`$$C \\geq W \\log \\frac{2}{{\\pi e}^3} \\cdot \\frac{S}{N}$$`}</span>
        </div>

        <div className="lrn-eq">
          <span>{`$$C \\leq W \\log \\left(\\frac{2}{\\pi e} \\cdot S + N\\right) \\frac{1+\\epsilon}{N}$$`}</span>
        </div>

        <p>The bounds are asymptotically equal as {`$\\frac{S}{N} \\to 0$`}.</p>

        <div className="lrn-compare">
          <div className="lrn-compare-col">
            <span className="lrn-compare-title">Average Power Limit</span>
            <p>Capacity {`$C = W \\log\\left(\\frac{P+N}{N}\\right)$`} exactly.</p>
            <p>Optimal: white Gaussian signal.</p>
            <p>Tractable closed form.</p>
          </div>
          <div className="lrn-compare-col">
            <span className="lrn-compare-title">Peak Power Limit</span>
            <p>Only bounds achievable, not exact formula.</p>
            <p>Asymptotically equal as {`$\\frac{S}{N} \\to 0$`}.</p>
            <p>Harder to handle mathematically.</p>
          </div>
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
          The minimum mutual information needed to represent the source at fidelity level {`$v_1$`}:
        </p>

        <div className="lrn-eq lrn-eq-display">
          <span>{`$$R_1 = \\min_{P_x(y): v \\leq v_1} \\iint P(x,y) \\log \\frac{P(x,y)}{P(x)P(y)} \\, dx \\, dy$$`}</span>
        </div>

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

        <h3>Rate Bounds for Arbitrary Sources</h3>

        <p>
          For a source with bandwidth {`$W_1$`} and average power {`$Q$`}, if the minimum noise
          entropy power is {`$Q_1$`}:
        </p>

        <div className="lrn-eq">
          <span>{`$$W_1 \\log \\frac{Q_1}{N} \\leq R \\leq W_1 \\log \\frac{Q}{N}$$`}</span>
        </div>

        <h3>Optimal Conditional Distribution</h3>

        <p>
          The Lagrange variational solution for the optimal conditional distribution in rate
          minimization is:
        </p>

        <div className="lrn-eq">
          <span>{`$$P_y(x) = B(x) \\, e^{-\\lambda \\rho(x,y)}$$`}</span>
        </div>

        <p>
          Here {`$\\lambda$`} is the Lagrange multiplier and {`$B(x)$`} is a normalizing function.
        </p>

        <h3>Dimension Rate</h3>

        <p>
          The general concept connecting 2W samples per second to arbitrary ensembles. It is defined
          as a triple limit:
        </p>

        <div className="lrn-eq">
          <span>{`$$\\lambda = \\lim_{\\delta \\to 0} \\lim_{\\epsilon \\to 0} \\lim_{T \\to \\infty} \\frac{\\log N(\\epsilon, \\delta, T)}{T \\log \\epsilon}$$`}</span>
        </div>

        <p>
          Here {`$N(\\epsilon, \\delta, T)$`} is the minimum number of functions needed to
          approximate all ensemble functions within {`$\\delta$`} except on a set of probability{' '}
          {`$\\epsilon$`}.
        </p>

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
              rate by exploiting source structure beyond simple Gaussian assumptions.
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
            The Lagrange variational solution {`$P_y(x) = B(x) e^{-\\lambda \\rho(x,y)}$`} balances
            the desire to compress (low rate) against the constraint of fidelity. The multiplier{' '}
            {`$\\lambda$`} controls the trade-off: large {`$\\lambda$`} forces small distortion,
            small {`$\\lambda$`} allows aggressive compression.
          </p>
          <p>
            As long as {`$R_1 \\leq C$`}, you can encode the source at fidelity {`$v_1$`} and
            squeeze it through the channel. This duality (source coding meets channel coding) is the
            foundation of every modern codec.
          </p>
        </div>
      </>
    ]
  },
  practice: [
    {
      q: 'What is the fundamental problem of communication according to Shannon?',
      a: 'The fundamental problem is to reproduce at one point a message selected at another point. Shannon emphasized that the semantic meaning of the message is irrelevant to the engineering problem. What matters is the set of possible messages and their probabilities, not what those messages mean.'
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
      a: "This is the same calculation as Shannon's noisy channel example. Equivocation = -(0.99 log₂ 0.99 + 0.01 log₂ 0.01). Compute: 0.99 × log₂(0.99) ≈ 0.99 × (-0.0145) ≈ -0.0143. And 0.01 × log₂(0.01) = 0.01 × (-6.644) ≈ -0.0664. H_y(x) ≈ 0.0143 + 0.0664 ≈ 0.081 bits per reading. A 1% error rate introduces about 0.081 bits of ambiguity per measurement."
    },
    {
      q: 'What does the Asymptotic Equipartition Property (AEP) say? Why is it the basis of all coding theorems?',
      a: 'The AEP says that for large N, almost all sequences from an ergodic source have probability close to 2^(-NH). The sequences split into two sets: a "typical" set of roughly 2^(NH) sequences each with probability ~2^(-NH), and the rest which has negligible total probability. It is the basis of all coding theorems because it shows you only need to encode the ~2^(NH) typical sequences, not all 2^(N log A) possible sequences. This concentration is why compression and reliable transmission are possible.'
    },
    {
      q: 'Elaborate: Why is the Gaussian distribution the maximum entropy distribution for a fixed variance? Explain from first principles.',
      a: 'The proof uses calculus of variations. You want to maximize H = -∫ p log p dx subject to ∫ p dx = 1 and ∫ x² p dx = σ². Using Lagrange multipliers, the optimal p satisfies: log p = λ₀ + λ₁ x². Solving this functional equation gives p(x) = exp(λ₀ + λ₁ x²). For this to be a valid probability density with the right variance, λ₁ must be negative and p must be a Gaussian. Any other distribution with the same variance will have a more concentrated shape and therefore lower entropy. The Gaussian spreads probability as evenly as possible while still satisfying the variance constraint.'
    },
    {
      q: 'State the Noiseless Channel Coding Theorem. What does it guarantee, and what does it not tell you?',
      a: 'The noiseless channel coding theorem: if the source entropy H ≤ channel capacity C, you can transmit the source over the channel with arbitrarily small error. The best possible efficiency is $\\frac{C}{H}$. If H > C, transmission without errors is impossible. What it guarantees: that efficient codes exist. What it does not tell you: how to find such a code. It is an existence proof via probabilistic grouping and Shannon-Fano coding. Finding efficient codes in practice is a separate problem.'
    },
    {
      q: 'Encode the source with symbols A, B, C, D at probabilities $\\frac{1}{2}, \\frac{1}{4}, \\frac{1}{8}, \\frac{1}{8}$ using a Shannon-Fano code. Verify the average length equals the entropy.',
      a: 'Step 1: Entropy $H = -\\left(\\frac{1}{2} \\log \\frac{1}{2} + \\frac{1}{4} \\log \\frac{1}{4} + \\frac{1}{8} \\log \\frac{1}{8} + \\frac{1}{8} \\log \\frac{1}{8}\\right) = \\frac{1}{2} + \\frac{2}{4} + \\frac{3}{8} + \\frac{3}{8} = \\frac{7}{4}$ bits. Step 2: Assign code lengths $m_s = \\lceil \\log_2(\\frac{1}{p_s}) \\rceil$: A gets 1 bit, B gets 2 bits, C gets 3 bits, D gets 3 bits. Assign: A = 0, B = 10, C = 110, D = 111. Step 3: Average length $= \\frac{1}{2}(1) + \\frac{1}{4}(2) + \\frac{1}{8}(3) + \\frac{1}{8}(3) = 0.5 + 0.5 + 0.375 + 0.375 = \\frac{7}{4}$ bits. The average length equals the entropy exactly. This code is optimal.'
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
      q: 'What is the redundancy of English text, and what are two practical consequences Shannon mentioned?',
      a: 'English has approximately 50% redundancy: $\\text{redundancy} = 1 - \\frac{H}{H_{\\max}} \\approx 0.5$. This means only about half of each English message carries new information; the rest is statistically predictable. Two practical consequences Shannon identified: (1) Crossword puzzles are solvable because the constraints (horizontal and vertical words) leave only one solution when 50% redundancy provides enough information to determine the missing letters. (2) English text can be compressed by roughly a factor of 2 without any information loss (lossless compression exploits redundancy).'
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
      a: 'If the average error probability over all codes in a class is ε, then at least one code must have error probability ≤ ε. This follows from the definition of an average: if all codes had error > ε, the average would be > ε, a contradiction. So even though the proof never constructs a specific code, proving the average goes to zero guarantees at least one code in the class achieves near-zero error. This is an existence proof by the probabilistic method. Shannon used exactly this argument: for R < C, the average over all random codes of block length T has error approaching 0 as T → ∞.'
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
      q: 'What is entropy power, and how does it bound the entropy power of a sum of two signals?',
      a: "Entropy power $\\bar{N}_1 = \\frac{1}{2\\pi e} \\exp(2H')$ equates a signal ensemble to the equivalent white Gaussian noise with the same entropy per degree of freedom. It is always ≤ the actual power. If two independent ensembles have entropy powers $\\bar{N}_1$ and $\\bar{N}_2$, and actual powers $N_1$ and $N_2$, then for their sum with entropy power $\\bar{N}_3$: $\\bar{N}_1 + \\bar{N}_2 \\leq \\bar{N}_3 \\leq N_1 + N_2$. The lower bound is achieved when both signals are Gaussian. The upper bound is the standard power addition. The entropy power of a sum lies between the sum of entropy powers and the sum of actual powers."
    },
    {
      q: 'Elaborate: Why does F_N ≤ G_N always hold, and why do both converge to H?',
      a: '$G_N = -\\frac{1}{N} \\sum_i p(B_i) \\log p(B_i)$ is entropy per symbol of N-length blocks. $F_N = -\\sum_{i,j} p(B_i, S_j) \\log p_{B_i}(S_j)$ is the conditional entropy of the next symbol given the previous N-1. $F_N \\leq G_N$ because conditioning never increases entropy: knowing the previous N-1 symbols can only reduce (or maintain) uncertainty about the next symbol. Both converge to H because for an ergodic source, the entropy rate $H = \\lim G_N = \\lim F_N$ by the definition of entropy rate: as block length grows, the per-symbol entropy converges to the true entropy rate regardless of which estimator you use.'
    },
    {
      q: 'Transfer: A digital camera uses 8-bit grayscale (256 levels). Empirical pixel statistics show 20% are black, 60% are mid-gray, 20% are white. Compute the per-pixel entropy and the redundancy.',
      a: 'Step 1: $H = -[0.2 \\log_2 0.2 + 0.6 \\log_2 0.6 + 0.2 \\log_2 0.2]$. Compute: $0.2 \\times (-2.322) = -0.464$ (×2 = -0.929). $0.6 \\times (-0.737) = -0.442$. Total: $H \\approx 0.929 + 0.442 = 1.371$ bits per pixel. Step 2: Maximum entropy $H_{\\max} = \\log_2(256) = 8$ bits. Step 3: $\\text{Redundancy} = 1 - \\frac{1.371}{8} \\approx 82.9\\%$. The image is highly compressible: lossless compression should reduce file size by roughly a factor of 6.'
    },
    {
      q: 'Transfer: A WiFi link has bandwidth W = 20 MHz and SNR = 100 (20 dB). Compute the maximum data rate using Shannon-Hartley. Compare to actual 802.11 rates.',
      a: 'Apply Shannon-Hartley: $C = W \\log_2(1 + \\text{SNR}) = 20 \\times 10^6 \\times \\log_2(101)$. Compute $\\log_2(101) \\approx 6.66$. So $C \\approx 1.33 \\times 10^8$ = 133 Mbps. Real 802.11n at 20 MHz tops out around 72 Mbps single-stream. The gap (54%) is due to coding overhead, guard intervals, and PAPR limits on real OFDM signals. Shannon gives the upper bound; real systems hit 50-70% of it.'
    },
    {
      q: 'Transfer: A two-bit memory cell has bit error rate 1e-6 per bit. Apply the noisy channel coding theorem to find what fraction of cells must be redundancy bits to enable error correction at this rate.',
      a: 'Each bit is a binary symmetric channel with error rate $p = 10^{-6}$. Channel capacity $C = 1 - H(p)$ where $H(p) = -[p \\log_2 p + (1-p) \\log_2 (1-p)]$. Compute: $H(10^{-6}) \\approx 10^{-6} \\times 19.93 + (1 - 10^{-6}) \\times 1.44 \\times 10^{-6} \\approx 2.16 \\times 10^{-5}$ bits. So $C \\approx 1 - 2.16 \\times 10^{-5} \\approx 0.9999784$ bits per bit. The noisy channel coding bound says at least $1 - C \\approx 0.0022\\%$ of bits must be redundancy for reliable storage. Real ECC schemes (BCH, LDPC) require 5-15% overhead for safety margin and finite block length.'
    },
    {
      q: 'Transfer: A robot arm has 6 joints, each described by a 16-bit angle (65,536 positions). At 100 Hz update rate, what telemetry bandwidth is needed if joint angles are uniform random? What if they are smooth (low entropy per sample)?',
      a: 'Uniform case: each angle is $\\log_2(65536) = 16$ bits of entropy. With 6 joints at 100 Hz: rate $= 6 \\times 16 \\times 100 = 9600$ bits/s = 9.6 kbps. Smooth case: angle changes are small from sample to sample, so conditional entropy $H_y(x)$ is much lower, perhaps $\\approx 4$ bits per joint per sample. Rate drops to $6 \\times 4 \\times 100 = 2400$ bits/s = 2.4 kbps. Differential encoding (sending only changes) exploits this temporal redundancy: standard practice in motion control telemetry.'
    },
    {
      q: 'Transfer: A speech codec must transmit 16 kHz audio at telephone quality (PESQ score 3.5 means about 12 dB signal-to-distortion ratio). Use the rate-distortion bound to estimate the minimum bit rate.',
      a: 'Apply the rate-distortion formula: $R = W_1 \\log_2(Q/N)$. The 12 dB SDR means $Q/N = 10^{1.2} \\approx 15.85$. Half-bandwidth (Nyquist gives $W_1 \\approx 8000$ Hz for 16 kHz sampling). $R = 8000 \\times \\log_2(15.85) \\approx 8000 \\times 3.99 \\approx 31{,}900$ bps. Real codecs (Opus, AMR-WB) hit near this rate at 24-32 kbps for telephone-quality wideband speech, confirming the rate-distortion bound is nearly tight in practice.'
    },
    {
      q: 'Transfer: An HDR video stream needs 12 bits per pixel at 4K resolution (3840 × 2160 pixels) at 60 fps. Estimate the raw bit rate and the rate after typical (10:1) compression. Why does Shannon say compression beyond a limit destroys quality?',
      a: 'Raw rate: $3840 \\times 2160 \\times 12 \\times 60 \\approx 5.97 \\times 10^9$ bits/s = 5.97 Gbps. After 10:1 compression: $\\approx 597$ Mbps. The source coding with fidelity result caps reliable transmission at $R_1 \\leq C$. The minimum rate $R_1$ for a given fidelity level is fixed by the source statistics. Compressing below $R_1$ for the desired fidelity is provably impossible without quality loss. Modern HEVC/AV1 codecs approach but do not break this bound: they exploit spatial and temporal redundancy to get close to the rate-distortion frontier.'
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
